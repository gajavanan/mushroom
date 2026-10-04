import React from 'react';
import { 
  Database, 
  Search, 
  Sparkles, 
  Binary, 
  Sliders, 
  GitBranch, 
  Cpu, 
  CheckCircle2, 
  Award, 
  Play, 
  Globe 
} from 'lucide-react';

export default function MLPipeline() {
  const pipelineSteps = [
    { name: 'Dataset', desc: '8,124 mushroom records', icon: Database, bg: 'bg-slate-100 text-slate-800' },
    { name: 'Exploratory Data Analysis', desc: 'Feature distributions & correlations', icon: Search, bg: 'bg-blue-50 text-blue-700' },
    { name: 'Missing Value Handling', desc: 'Clean unknown root values (?)', icon: Sparkles, bg: 'bg-emerald-50 text-emerald-700' },
    { name: 'Categorical Encoding', desc: 'One-Hot & Label Encoding', icon: Binary, bg: 'bg-indigo-50 text-indigo-700' },
    { name: 'Feature Scaling', desc: 'Standardize feature vectors', icon: Sliders, bg: 'bg-teal-50 text-teal-700' },
    { name: 'Train-Test Split', desc: '80% Train (6,499) / 20% Test (1,625)', icon: GitBranch, bg: 'bg-amber-50 text-amber-700' },
    { name: 'Model Training', desc: 'Logistic Reg, DT & RF fitting', icon: Cpu, bg: 'bg-violet-50 text-violet-700' },
    { name: 'Model Evaluation', desc: 'Accuracy, Precision, Recall, F1', icon: CheckCircle2, bg: 'bg-rose-50 text-rose-700' },
    { name: 'Random Forest', desc: 'Selected best model (100% test score)', icon: Award, bg: 'bg-forest-100 text-forest-800 border-2 border-forest-400' },
    { name: 'Prediction', desc: 'Edible / Poisonous classification', icon: Play, bg: 'bg-emerald-100 text-emerald-900' },
    { name: 'Streamlit / Web Application', desc: 'Interactive deployment UI', icon: Globe, bg: 'bg-forest-700 text-white shadow-md' },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 text-forest-700 text-xs font-bold uppercase tracking-wider mb-3">
            End-To-End Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Machine Learning Pipeline
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Sequential data processing, feature engineering, model training, and web deployment lifecycle.
          </p>
        </div>

        {/* Visual Workflow Cards */}
        <div className="relative">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-forest-400 transition-all flex flex-col justify-between group relative"
                >
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black text-slate-400 group-hover:text-forest-600 transition-colors uppercase">
                      Step {idx + 1}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${step.bg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 leading-snug mb-1 group-hover:text-forest-700 transition-colors">
                      {step.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      {step.desc}
                    </p>
                  </div>

                  {/* Down / Right Arrow Indicator */}
                  {idx < pipelineSteps.length - 1 && (
                    <div className="mt-3 pt-2 border-t border-slate-100 flex justify-end text-slate-300 group-hover:text-forest-600">
                      <span className="text-xs font-bold">↓</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
