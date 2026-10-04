import React, { useState } from 'react';
import { 
  FEATURE_CATEGORIES, 
  MUSHROOM_FEATURES, 
  PRESET_EDIBLE_SAMPLE, 
  PRESET_POISONOUS_SAMPLE 
} from '../services/mushroomData';
import { predictMushroom } from '../services/predictionApi';
import { Sparkles, RotateCcw, Play, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';

export default function PredictionForm({ onPredictionComplete, onReset }) {
  const getDefaultFormData = () => {
    const initial = {};
    Object.keys(MUSHROOM_FEATURES).forEach((key) => {
      initial[key] = MUSHROOM_FEATURES[key].default;
    });
    return initial;
  };

  const [formData, setFormData] = useState(getDefaultFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (featureKey, value) => {
    setFormData((prev) => ({
      ...prev,
      [featureKey]: value,
    }));
  };

  const handlePresetEdible = () => {
    setFormData({ ...PRESET_EDIBLE_SAMPLE });
    setErrorMessage('');
  };

  const handlePresetPoisonous = () => {
    setFormData({ ...PRESET_POISONOUS_SAMPLE });
    setErrorMessage('');
  };

  const handleResetForm = () => {
    setFormData(getDefaultFormData());
    setErrorMessage('');
    if (onReset) onReset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const result = await predictMushroom(formData);
      onPredictionComplete(result, formData);
    } catch (err) {
      console.error('Prediction error:', err);
      setErrorMessage(err.message || 'Unable to connect to the prediction service. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="predict" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-forest-600" />
            Machine Learning Inference Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mushroom Edibility Prediction
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Select the characteristics of the mushroom to generate a prediction.
          </p>

          {/* Preset Helper Bar */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-white p-2 rounded-2xl shadow-xs border border-slate-200">
            <span className="text-xs font-bold text-slate-500 px-2 uppercase tracking-wider">Quick Samples:</span>
            <button
              type="button"
              onClick={handlePresetEdible}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Load Edible Sample
            </button>
            <button
              type="button"
              onClick={handlePresetPoisonous}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all cursor-pointer"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              Load Poisonous Sample
            </button>
          </div>
        </div>

        {/* Main Form Box */}
        <form onSubmit={handleSubmit} className="space-y-10">
          
          {FEATURE_CATEGORIES.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200/80 transition-all hover:shadow-md"
            >
              <div className="border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold text-sm">
                    {category.name.substring(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid of feature dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((featureKey) => {
                  const feature = MUSHROOM_FEATURES[featureKey];
                  if (!feature) return null;

                  return (
                    <div key={featureKey} className="space-y-1.5">
                      <label 
                        htmlFor={featureKey}
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
                      >
                        {feature.label}
                      </label>
                      
                      <div className="relative">
                        <select
                          id={featureKey}
                          name={featureKey}
                          value={formData[featureKey]}
                          onChange={(e) => handleChange(featureKey, e.target.value)}
                          className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold focus:ring-2 focus:ring-forest-500 focus:border-forest-500 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          {feature.options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-400">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Form Error Banner */}
          {errorMessage && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-semibold flex items-center gap-3 shadow-xs">
              <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-bold text-base text-white bg-forest-700 hover:bg-forest-800 active:bg-forest-900 shadow-xl shadow-forest-700/20 disabled:opacity-60 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Analyzing mushroom...</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-current" />
                  <span>Predict Mushroom</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleResetForm}
              disabled={isLoading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 shadow-xs transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}
