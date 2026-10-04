import os
from pathlib import Path
from typing import Dict, Any
from fastapi import FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field, ConfigDict
import joblib
import pandas as pd
import numpy as np

app = FastAPI(
    title="Mushroom Classification API",
    description="Machine Learning API predicting mushroom edibility",
    version="1.0.0"
)

# CORS configuration for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model artifacts relative to main.py
BASE_DIR = Path(__file__).resolve().parent

MODEL_PATH = BASE_DIR / "mushroom_random_forest_model.pkl"
SCALER_PATH = BASE_DIR / "mushroom_scaler.pkl"
ENCODERS_PATH = BASE_DIR / "mushroom_label_encoders.pkl"
FEATURES_PATH = BASE_DIR / "mushroom_feature_columns.pkl"

rf_model = None
scaler = None
label_encoders = None
feature_columns = None

def load_artifacts():
    global rf_model, scaler, label_encoders, feature_columns
    try:
        if MODEL_PATH.exists():
            rf_model = joblib.load(MODEL_PATH)
        if SCALER_PATH.exists():
            scaler = joblib.load(SCALER_PATH)
        if ENCODERS_PATH.exists():
            label_encoders = joblib.load(ENCODERS_PATH)
        if FEATURES_PATH.exists():
            feature_columns = joblib.load(FEATURES_PATH)
    except Exception as e:
        print(f"Error loading model artifacts: {e}")

load_artifacts()

# Pydantic input schema with aliased hyphenated field names
class MushroomFeatures(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    cap_shape: str = Field(..., alias="cap-shape")
    cap_surface: str = Field(..., alias="cap-surface")
    cap_color: str = Field(..., alias="cap-color")
    bruises: str = Field(..., alias="bruises")
    odor: str = Field(..., alias="odor")
    gill_attachment: str = Field(..., alias="gill-attachment")
    gill_spacing: str = Field(..., alias="gill-spacing")
    gill_size: str = Field(..., alias="gill-size")
    gill_color: str = Field(..., alias="gill-color")
    stalk_shape: str = Field(..., alias="stalk-shape")
    stalk_root: str = Field(..., alias="stalk-root")
    stalk_surface_above_ring: str = Field(..., alias="stalk-surface-above-ring")
    stalk_surface_below_ring: str = Field(..., alias="stalk-surface-below-ring")
    stalk_color_above_ring: str = Field(..., alias="stalk-color-above-ring")
    stalk_color_below_ring: str = Field(..., alias="stalk-color-below-ring")
    veil_type: str = Field(..., alias="veil-type")
    veil_color: str = Field(..., alias="veil-color")
    ring_number: str = Field(..., alias="ring-number")
    ring_type: str = Field(..., alias="ring-type")
    spore_print_color: str = Field(..., alias="spore-print-color")
    population: str = Field(..., alias="population")
    habitat: str = Field(..., alias="habitat")

@app.get("/api")
def root_endpoint():
    return {
        "status": "success",
        "message": "Mushroom Classification API is running"
    }

@app.get("/api/health")
def health_endpoint():
    model_ready = all([
        rf_model is not None,
        scaler is not None,
        label_encoders is not None,
        feature_columns is not None
    ])
    return {
        "status": "healthy" if model_ready else "degraded",
        "model_loaded": model_ready
    }

@app.post("/api/predict")
async def predict_endpoint(payload: Dict[str, Any]):
    if not rf_model or not scaler or not label_encoders or not feature_columns:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Machine learning model artifacts are not loaded on server."
        )

    # 1. Validate missing features
    missing_cols = [col for col in feature_columns if col not in payload]
    if missing_cols:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Missing feature: {missing_cols[0]}"
        )

    # 2. Convert request to DataFrame in exact feature order
    raw_data = {col: payload[col] for col in feature_columns}
    input_df = pd.DataFrame([raw_data])

    # 3. Input validation & Label Encoding
    encoded_df = pd.DataFrame()
    for col in feature_columns:
        val = str(input_df[col].iloc[0])
        encoder = label_encoders.get(col)
        
        if encoder is None:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Encoder for {col} not found."
            )
            
        if val not in encoder.classes_:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Invalid value for {col}"
            )

        encoded_df[col] = encoder.transform([val])

    # 4. Feature scaling
    try:
        scaled_input = scaler.transform(encoded_df)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error scaling feature inputs: {str(e)}"
        )

    # 5. Model Inference
    try:
        pred_encoded = rf_model.predict(scaled_input)[0]
        probs = rf_model.predict_proba(scaled_input)[0]
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Model prediction error: {str(e)}"
        )

    # 6. Map probabilities dynamically using model.classes_ and class encoder
    class_encoder = label_encoders.get("class")
    decoded_classes = class_encoder.inverse_transform(rf_model.classes_)
    
    prob_dict = {}
    for idx, cls_code in enumerate(decoded_classes):
        prob_dict[cls_code] = round(float(probs[idx]) * 100, 2)

    edible_prob = prob_dict.get("e", 0.0)
    poisonous_prob = prob_dict.get("p", 0.0)

    predicted_code = class_encoder.inverse_transform([pred_encoded])[0]
    predicted_label = "Edible" if predicted_code == "e" else "Poisonous"

    return {
        "prediction": predicted_label,
        "class_code": predicted_code,
        "edible_probability": edible_prob,
        "poisonous_probability": poisonous_prob
    }
