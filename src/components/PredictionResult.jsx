import React, { useEffect, useRef } from 'react';
import { ShieldCheck, AlertTriangle, Info, CheckCircle2, RefreshCw } from 'lucide-react';

export default function PredictionResult({ result, onReset }) {
  const resultRef = useRef(null);

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [result]);

  if (!result) return null;

  const isEdible = result.prediction.toLowerCase() === 'edible';
  const edibleProb = result.edible_probability;
  const poisonousProb = result.poisonous_probability;

  return (
    <div ref={resultRef} className="max-w-4xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-bottom-6 duration-300">
      
      {/* Result Container Card */}
      <div 
        className={`rounded-3xl p-6 sm:p-10 shadow-2xl border-2 transition-all ${
          isEdible
            ? 'bg-gradient-to-br from-emerald-50/90 via-white to-forest-50 border-emerald-300/80 shadow-emerald-900/10'
            : 'bg-gradient-to-br from-rose-50/90 via-white to-red-50 border-rose-300/80 shadow-rose-900/10'
        }`}
      >
        
        {/* Top Header Badge & Source Tag */}
        <div className="flex items-center justify-between border-b pb-4 mb-6 border-slate-200/60">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            ML Inference Output
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
            Model: Random Forest ({result.source === 'api' ? 'FastAPI Backend' : 'Demo Engine'})
          </span>
        </div>

        {/* Prediction Status Display */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
          
          {/* Icon Badge */}
          <div 
            className={`w-24 h-24 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg ${
              isEdible
                ? 'bg-emerald-600 text-white shadow-emerald-600/30 ring-8 ring-emerald-100'
                : 'bg-rose-600 text-white shadow-rose-600/30 ring-8 ring-rose-100'
            }`}
          >
            {isEdible ? (
              <ShieldCheck className="w-14 h-14" />
            ) : (
              <AlertTriangle className="w-14 h-14" />
            )}
          </div>

          {/* Details Text */}
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <h3 
                className={`text-3xl sm:text-4xl font-black tracking-tight ${
                  isEdible ? 'text-emerald-800' : 'text-rose-800'
                }`}
              >
                {isEdible ? '✓ EDIBLE' : '⚠ POISONOUS'}
              </h3>
              
              <span 
                className={`px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest ${
                  isEdible
                    ? 'bg-emerald-200 text-emerald-900'
                    : 'bg-rose-200 text-rose-900'
                }`}
              >
                Classification: {result.prediction}
              </span>
            </div>

            <p className="text-base font-semibold text-slate-700">
              {isEdible
                ? 'This mushroom has been classified as edible by the machine learning model.'
                : 'This mushroom has been classified as poisonous by the machine learning model.'}
            </p>
          </div>

        </div>

        {/* Probability Visualization Section */}
        <div className="mt-8 pt-8 border-t border-slate-200/80 space-y-6">
          <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <span>Prediction Probabilities</span>
          </h4>

          <div className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            
            {/* Edible Probability Row */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="flex items-center gap-2 text-slate-700">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  Edible Probability
                </span>
                <span className="text-emerald-700 font-extrabold text-base">{edibleProb}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden flex p-0.5 border border-slate-200">
                <div 
                  className="bg-emerald-500 h-full rounded-full transition-all duration-700 shadow-xs"
                  style={{ width: `${edibleProb}%` }}
                ></div>
              </div>
            </div>

            {/* Poisonous Probability Row */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="flex items-center gap-2 text-slate-700">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                  Poisonous Probability
                </span>
                <span className="text-rose-700 font-extrabold text-base">{poisonousProb}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden flex p-0.5 border border-slate-200">
                <div 
                  className="bg-rose-500 h-full rounded-full transition-all duration-700 shadow-xs"
                  style={{ width: `${poisonousProb}%` }}
                ></div>
              </div>
            </div>

          </div>

        </div>

        {/* Mandatory Warning Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Important:</strong> This application is an academic machine learning project. Never use this prediction as the sole basis for deciding whether a wild mushroom is safe to consume.
          </div>
        </div>

        {/* Reset / New Prediction Action */}
        <div className="mt-6 text-center">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 shadow-xs transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Test Another Mushroom</span>
          </button>
        </div>

      </div>

    </div>
  );
}
