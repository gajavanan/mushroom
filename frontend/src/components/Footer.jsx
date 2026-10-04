import React from 'react';
import { Sparkles, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-slate-800 pb-10">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-forest-600 text-white flex items-center justify-center font-bold">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C7.03 2 3 6.03 3 11c0 1.25.26 2.44.73 3.52C4.38 16 6 17 8 17h8c2 0 3.62-1 4.27-2.48.47-1.08.73-2.27.73-3.52 0-4.97-4.03-9-9-9zM10 17v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h-4z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white tracking-tight">
                  Mushroom Edibility Prediction System
                </h3>
                <p className="text-xs text-forest-400 font-semibold uppercase tracking-wider">
                  Machine Learning Classification Project
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
              Built using Machine Learning, Random Forest and React. Designed to analyze mushroom physical characteristics and generate predictive edibility metrics.
            </p>
          </div>

          {/* Academic Disclaimer Box */}
          <div className="md:col-span-5 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80">
            <div className="flex items-start gap-3 text-xs text-amber-300 leading-relaxed font-medium">
              <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-extrabold text-white uppercase tracking-wider block mb-0.5">Academic Notice</span>
                For academic and educational purposes only. Never use this model for foraging or consuming wild mushrooms.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Mushroom Edibility Prediction System. Academic ML Project.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Random Forest (100% Test Accuracy)</span>
            <span>•</span>
            <span>UCI Mushroom Dataset (8,124 Records)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
