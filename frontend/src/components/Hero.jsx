import React, { useState } from 'react';
import { ArrowRight, BarChart2, ShieldCheck, AlertTriangle, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero({ onNavigate }) {
  const [activeDemoTab, setActiveDemoTab] = useState('edible');

  return (
    <section id="home" className="relative hero-gradient pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100 text-forest-800 border border-forest-200 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-forest-600" />
              Academic Machine Learning Project
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Know Your Mushroom <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 via-forest-600 to-emerald-600">
                Before You Trust It
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              An intelligent machine learning system that analyzes mushroom characteristics and predicts whether a mushroom is edible or poisonous.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onNavigate('predict')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-bold text-base text-white bg-forest-700 hover:bg-forest-800 active:bg-forest-900 shadow-lg shadow-forest-700/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Predict Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('performance')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-base text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm hover:shadow transition-all"
              >
                <BarChart2 className="w-5 h-5 text-forest-600" />
                <span>View Model Performance</span>
              </button>
            </div>

            {/* Quick Notice */}
            <p className="text-xs text-slate-400 font-medium pt-1">
              Powered by Random Forest Algorithm • Evaluated on 8,124 Dataset Records
            </p>

          </div>

          {/* Right Column: Visual Mushroom Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100/80 relative">
              
              {/* Card Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-forest-100 flex items-center justify-center text-forest-700 font-bold text-sm">
                    ML
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Mushroom Classification</h3>
                    <p className="text-xs text-slate-500">Live Model Simulation</p>
                  </div>
                </div>

                <div className="flex bg-slate-100 p-1 rounded-lg text-xs font-semibold">
                  <button
                    onClick={() => setActiveDemoTab('edible')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      activeDemoTab === 'edible'
                        ? 'bg-white text-forest-700 shadow-xs font-bold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Edible
                  </button>
                  <button
                    onClick={() => setActiveDemoTab('poisonous')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      activeDemoTab === 'poisonous'
                        ? 'bg-white text-rose-700 shadow-xs font-bold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Poisonous
                  </button>
                </div>
              </div>

              {/* Classification Visual Display */}
              <div className="py-8 text-center space-y-4">
                {activeDemoTab === 'edible' ? (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-24 h-24 mx-auto rounded-full bg-forest-50 border-4 border-forest-100 flex items-center justify-center text-forest-600 shadow-inner">
                      <ShieldCheck className="w-12 h-12" />
                    </div>

                    <div className="inline-block px-5 py-2 rounded-full bg-emerald-100 text-emerald-800 font-black text-xl tracking-wider">
                      EDIBLE
                    </div>

                    <p className="text-xs text-slate-600 max-w-xs mx-auto">
                      Model Confidence: <span className="font-extrabold text-forest-700">99.8% Edible</span> / 0.2% Poisonous
                    </p>

                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden flex">
                      <div className="bg-forest-600 h-full rounded-full transition-all duration-500" style={{ width: '99.8%' }}></div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-24 h-24 mx-auto rounded-full bg-rose-50 border-4 border-rose-100 flex items-center justify-center text-rose-600 shadow-inner">
                      <AlertTriangle className="w-12 h-12" />
                    </div>

                    <div className="inline-block px-5 py-2 rounded-full bg-rose-100 text-rose-800 font-black text-xl tracking-wider">
                      POISONOUS
                    </div>

                    <p className="text-xs text-slate-600 max-w-xs mx-auto">
                      Model Confidence: <span className="font-extrabold text-rose-700">99.9% Poisonous</span> / 0.1% Edible
                    </p>

                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden flex">
                      <div className="bg-rose-600 h-full rounded-full transition-all duration-500" style={{ width: '99.9%' }}></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sample Feature Chips */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Sample Attributes Evaluated</div>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-700 font-medium">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">
                    Cap: {activeDemoTab === 'edible' ? 'Convex (x)' : 'Flat (f)'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">
                    Odor: {activeDemoTab === 'edible' ? 'Almond (a)' : 'Foul (f)'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">
                    Gill: {activeDemoTab === 'edible' ? 'Black (k)' : 'Buff (b)'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">
                    Spore: {activeDemoTab === 'edible' ? 'Brown (n)' : 'White (w)'}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
