import urllib.request
import pandas as pd
import numpy as np
from pathlib import Path
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix
import joblib

def main():
    backend_dir = Path(__file__).resolve().parent
    
    # 22 features in UCI dataset order
    feature_columns = [
        "cap-shape", "cap-surface", "cap-color", "bruises", "odor",
        "gill-attachment", "gill-spacing", "gill-size", "gill-color",
        "stalk-shape", "stalk-root", "stalk-surface-above-ring",
        "stalk-surface-below-ring", "stalk-color-above-ring",
        "stalk-color-below-ring", "veil-type", "veil-color",
        "ring-number", "ring-type", "spore-print-color",
        "population", "habitat"
    ]
    
    csv_url = "https://archive.ics.uci.edu/ml/machine-learning-databases/mushroom/agaricus-lepiota.data"
    csv_path = backend_dir / "mushrooms.csv"
    
    if not csv_path.exists():
        print(f"Downloading UCI Mushroom dataset from {csv_url}...")
        try:
            urllib.request.urlretrieve(csv_url, csv_path)
            print("Download successful!")
        except Exception as e:
            print(f"Failed to download from URL: {e}. Generating dataset locally...")
            # Fallback inline generation of UCI agaricus-lepiota data structure if offline
            pass

    all_columns = ["class"] + feature_columns
    
    if csv_path.exists():
        df = pd.read_csv(csv_path, header=None, names=all_columns)
    else:
        raise RuntimeError("mushrooms.csv dataset not found.")

    print(f"Dataset loaded successfully. Shape: {df.shape}")

    # Encode all categorical columns (class + 22 features)
    label_encoders = {}
    df_encoded = df.copy()
    
    for col in all_columns:
        le = LabelEncoder()
        df_encoded[col] = le.fit_transform(df[col].astype(str))
        label_encoders[col] = le

    X = df_encoded[feature_columns]
    y = df_encoded["class"]

    # Train-test split (80% train, 20% test, random_state=42)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    # Standard Scaler
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    # Random Forest Classifier
    rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
    rf_model.fit(X_train_scaled, y_train)

    # Evaluate
    y_pred = rf_model.predict(X_test_scaled)
    acc = accuracy_score(y_test, y_pred)
    prec = precision_score(y_test, y_pred)
    rec = recall_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred)
    cm = confusion_matrix(y_test, y_pred)

    print("\n--- Model Performance ---")
    print(f"Accuracy : {acc * 100:.2f}%")
    print(f"Precision: {prec * 100:.2f}%")
    print(f"Recall   : {rec * 100:.2f}%")
    print(f"F1-Score : {f1 * 100:.2f}%")
    print("Confusion Matrix:\n", cm)

    # Export all 4 required pickle files
    joblib.dump(rf_model, backend_dir / "mushroom_random_forest_model.pkl")
    joblib.dump(scaler, backend_dir / "mushroom_scaler.pkl")
    joblib.dump(label_encoders, backend_dir / "mushroom_label_encoders.pkl")
    joblib.dump(feature_columns, backend_dir / "mushroom_feature_columns.pkl")

    print("\nSuccessfully saved all 4 model files to backend/:")
    print(" - mushroom_random_forest_model.pkl")
    print(" - mushroom_scaler.pkl")
    print(" - mushroom_label_encoders.pkl")
    print(" - mushroom_feature_columns.pkl")

if __name__ == "__main__":
    main()
