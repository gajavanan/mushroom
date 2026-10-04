/**
 * Mushroom Edibility Prediction Service API
 * Connects to Python FastAPI backend when available, otherwise executes client-side ML logic (Demo Mode).
 */

// DEMO MODE - Replace with real FastAPI request when backend is connected.
const API_URL = import.meta.env.VITE_API_URL || '/api/predict';

/**
 * Predict mushroom edibility based on 22 physical features.
 * @param {Object} features - Map of 22 feature keys to selected categorical values
 * @returns {Promise<{prediction: string, edible_probability: number, poisonous_probability: number, source: string}>}
 */
export async function predictMushroom(features) {
  try {
    // Attempt real backend call to FastAPI
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(features),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        prediction: data.prediction, // "Edible" or "Poisonous"
        edible_probability: data.edible_probability,
        poisonous_probability: data.poisonous_probability,
        source: 'api'
      };
    }
  } catch (error) {
    console.warn('Backend API not reachable. Running client-side Demo Mode evaluation engine.', error);
  }

  // DEMO MODE - Replace with real FastAPI request when backend is connected.
  // Evaluate inputs based on UCI Mushroom Dataset Random Forest key feature splits
  return runDemoPredictionEngine(features);
}

/**
 * Deterministic demo inference engine simulating Random Forest decision boundaries
 * on the 8,124 record UCI Mushroom dataset.
 */
function runDemoPredictionEngine(features) {
  // Simulate API processing delay (600ms) for realistic UX
  return new Promise((resolve) => {
    setTimeout(() => {
      let poisonousScore = 0;
      let totalWeights = 0;

      // Rule 1: Odor is the single most decisive feature in UCI dataset
      const odor = features['odor'];
      if (['f', 'c', 'y', 'm', 'p', 's'].includes(odor)) {
        // Foul, Creosote, Fishy, Musty, Pungent, Spicy -> Highly Poisonous
        poisonousScore += 45;
      } else if (['a', 'l'].includes(odor)) {
        // Almond, Anise -> Highly Edible
        poisonousScore -= 45;
      } else if (odor === 'n') {
        // None -> mild edible skew
        poisonousScore -= 10;
      }
      totalWeights += 45;

      // Rule 2: Spore Print Color
      const sporeColor = features['spore-print-color'];
      if (['r', 'h', 'w'].includes(sporeColor)) {
        // Green, Chocolate, White
        if (sporeColor === 'r') poisonousScore += 30; // Green spore print is 100% poisonous in dataset
        else poisonousScore += 15;
      } else if (['k', 'n', 'b'].includes(sporeColor)) {
        poisonousScore -= 15;
      }
      totalWeights += 25;

      // Rule 3: Gill Color & Size
      const gillColor = features['gill-color'];
      const gillSize = features['gill-size'];
      if (gillColor === 'b' || gillSize === 'n') {
        poisonousScore += 20;
      } else {
        poisonousScore -= 10;
      }
      totalWeights += 20;

      // Rule 4: Stalk Surface & Color
      const stalkSurfAbove = features['stalk-surface-above-ring'];
      const stalkSurfBelow = features['stalk-surface-below-ring'];
      if (stalkSurfAbove === 'k' || stalkSurfBelow === 'k') {
        // Silky stalk surface
        poisonousScore += 15;
      } else if (stalkSurfAbove === 's' && stalkSurfBelow === 's') {
        poisonousScore -= 10;
      }
      totalWeights += 15;

      // Rule 5: Bruises
      const bruises = features['bruises'];
      if (bruises === 'f') {
        poisonousScore += 10;
      } else {
        poisonousScore -= 10;
      }
      totalWeights += 10;

      // Rule 6: Ring Type & Population
      const ringType = features['ring-type'];
      if (['e', 'l', 'n'].includes(ringType)) {
        poisonousScore += 15;
      } else if (ringType === 'p') {
        poisonousScore -= 15;
      }
      totalWeights += 15;

      // Calculate final normalized probabilities
      // Base center is 50%
      let poisonProb = 50 + (poisonousScore / totalWeights) * 48;
      
      // Clamp between 0.5% and 99.5% for high clarity
      poisonProb = Math.min(Math.max(poisonProb, 0.5), 99.5);
      let edibleProb = 100 - poisonProb;

      // Format to 2 decimal places
      poisonProb = Math.round(poisonProb * 100) / 100;
      edibleProb = Math.round(edibleProb * 100) / 100;

      const isPoisonous = poisonProb >= 50;

      resolve({
        prediction: isPoisonous ? 'Poisonous' : 'Edible',
        edible_probability: edibleProb,
        poisonous_probability: poisonProb,
        source: 'demo'
      });
    }, 650);
  });
}
