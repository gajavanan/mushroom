import React from 'react';
import { Grid, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ConfusionMatrix() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 text-forest-700 text-xs font-bold uppercase tracking-wider mb-3">
            Error Diagnostics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Confusion Matrix
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Evaluation of Random Forest predictions against ground truth labels on 1,625 test dataset samples.
          </p>
        </div>

        {/* Matrix Card Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/80">
          
          <div className="flex items-center justify-between border-b pb-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Grid className="w-5 h-5 text-forest-700" />
                Random Forest 2x2 Matrix
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Test Split Count = 1,625 Total Observations</p>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-extrabold rounded-full">
              Zero False Positives / Negatives
            </span>
          </div>

          {/* 2x2 Grid Visualization */}
          <div className="overflow-x-auto">
            <div className="min-w-[480px]">
              
              {/* Matrix Column Headers */}
              <div className="grid grid-cols-12 mb-2 text-center text-xs font-extrabold uppercase tracking-wider text-slate-500">
                <div className="col-span-4"></div>
                <div className="col-span-4 p-2 bg-slate-100 rounded-t-xl text-forest-800">Predicted Edible</div>
                <div className="col-span-4 p-2 bg-slate-100 rounded-t-xl text-rose-800">Predicted Poisonous</div>
              </div>

              {/* Row 1: Actual Edible */}
              <div className="grid grid-cols-12 gap-2 mb-2">
                <div className="col-span-4 bg-slate-100 rounded-l-xl p-4 flex items-center justify-center font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wider">
                  Actual Edible
                </div>

                {/* True Positive (Actual Edible / Predicted Edible) */}
                <div className="col-span-4 bg-emerald-50 border-2 border-emerald-300 rounded-xl p-6 text-center shadow-xs">
                  <span className="block text-3xl sm:text-4xl font-black text-emerald-800 mb-1">
                    842
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-700 uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" /> True Edible (TP)
                  </span>
                </div>

                {/* False Negative (Actual Edible / Predicted Poisonous) */}
                <div className="col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                  <span className="block text-3xl sm:text-4xl font-black text-slate-400 mb-1">
                    0
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    False Poisonous (FN)
                  </span>
                </div>
              </div>

              {/* Row 2: Actual Poisonous */}
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-4 bg-slate-100 rounded-l-xl p-4 flex items-center justify-center font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wider">
                  Actual Poisonous
                </div>

                {/* False Positive (Actual Poisonous / Predicted Edible) */}
                <div className="col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                  <span className="block text-3xl sm:text-4xl font-black text-slate-400 mb-1">
                    0
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    False Edible (FP)
                  </span>
                </div>

                {/* True Negative (Actual Poisonous / Predicted Poisonous) */}
                <div className="col-span-4 bg-rose-50 border-2 border-rose-300 rounded-xl p-6 text-center shadow-xs">
                  <span className="block text-3xl sm:text-4xl font-black text-rose-800 mb-1">
                    783
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-rose-700 uppercase tracking-wider">
                    <ShieldAlert className="w-3.5 h-3.5" /> True Poisonous (TN)
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Explanation Box */}
          <div className="mt-8 p-4 rounded-2xl bg-forest-50 border border-forest-200 text-forest-900 text-sm font-semibold leading-relaxed flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-forest-700 flex-shrink-0" />
            <span>
              The Random Forest model correctly classified all 1,625 samples in the project's test split.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
