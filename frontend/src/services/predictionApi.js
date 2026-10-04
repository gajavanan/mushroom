/**
 * Mushroom Edibility Prediction API Client
 * Connects directly to FastAPI backend service at /api/predict.
 */

export async function predictMushroom(features) {
  try {
    const response = await fetch('/api/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(features),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data.detail || 'Failed to process mushroom characteristics.';
      throw new Error(errorMsg);
    }

    return {
      prediction: data.prediction, // "Edible" or "Poisonous"
      class_code: data.class_code, // "e" or "p"
      edible_probability: data.edible_probability,
      poisonous_probability: data.poisonous_probability,
      source: 'api'
    };
  } catch (error) {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Unable to connect to the prediction service. Please try again.');
    }
    throw error;
  }
}
