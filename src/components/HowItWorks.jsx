import React from 'react';
import { Sliders, Cpu, Binary, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Enter Features',
      description: 'Select the physical characteristics of the mushroom.',
      icon: Sliders,
      badge: 'Input'
    },
    {
      number: '02',
      title: 'Preprocessing',
      description: 'Inputs are encoded and prepared using the same preprocessing pipeline used during training.',
      icon: Binary,
      badge: 'Transform'
    },
    {
      number: '03',
      title: 'ML Prediction',
      description: 'The trained Random Forest classifier analyzes the mushroom characteristics.',
      icon: Cpu,
      badge: 'Inference'
    },
    {
      number: '04',
      title: 'Result',
      description: 'The application displays Edible or Poisonous together with prediction probabilities.',
      icon: CheckCircle,
      badge: 'Output'
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 text-forest-700 text-xs font-bold uppercase tracking-wider mb-3">
            Workflow Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Four seamless steps from mushroom feature selection to instant machine learning edibility classification.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="relative bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:border-forest-300 hover:shadow-xl transition-all group duration-300 flex flex-col justify-between"
              >
                {/* Step Connector Line for Desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-slate-200 z-10 group-hover:bg-forest-300 transition-colors" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-forest-700 text-white flex items-center justify-center shadow-md shadow-forest-900/10 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-forest-600 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-forest-700 px-2 py-0.5 bg-forest-100 rounded-md mb-2">
                    Step {idx + 1} • {step.badge}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs text-forest-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View execution pipeline</span>
                  <span className="ml-1">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
