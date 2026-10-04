import React from 'react';
import { Award, CheckCircle2, Cpu, BarChart2 } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

export default function ModelPerformance() {
  const models = [
    {
      name: 'LOGISTIC REGRESSION',
      accuracy: '96.98%',
      precision: '96.57%',
      recall: '97.19%',
      f1Score: '96.88%',
      accNum: 96.98,
      selected: false,
      tag: 'Baseline Linear Classifier'
    },
    {
      name: 'DECISION TREE',
      accuracy: '100%',
      precision: '100%',
      recall: '100%',
      f1Score: '100%',
      accNum: 100,
      selected: false,
      tag: 'Single Tree Rule Classifier'
    },
    {
      name: 'RANDOM FOREST',
      accuracy: '100%',
      precision: '100%',
      recall: '100%',
      f1Score: '100%',
      accNum: 100,
      selected: true,
      tag: 'Selected Deployment Model'
    }
  ];

  const chartData = [
    { name: 'Logistic Regression', Accuracy: 96.98, fill: '#64748b' },
    { name: 'Decision Tree', Accuracy: 100.0, fill: '#3b82f6' },
    { name: 'Random Forest', Accuracy: 100.0, fill: '#1f4c2e' },
  ];

  return (
    <section id="performance" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 text-forest-700 text-xs font-bold uppercase tracking-wider mb-3">
            Algorithmic Benchmark
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Model Performance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Three classification algorithms were trained and evaluated to identify the most suitable model for mushroom classification.
          </p>
        </div>

        {/* 3 Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {models.map((model, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-300 ${
                model.selected
                  ? 'bg-gradient-to-b from-forest-50/70 via-white to-emerald-50/50 border-2 border-forest-600 shadow-xl ring-4 ring-forest-100'
                  : 'bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-md'
              }`}
            >
              {model.selected && (
                <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest-700 text-white text-xs font-extrabold shadow-md tracking-wider uppercase">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  Selected Model
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500 mb-1">
                  <Cpu className="w-4 h-4 text-forest-600" />
                  <span>{model.tag}</span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-6">
                  {model.name}
                </h3>

                {/* Metrics Table / Grid */}
                <div className="grid grid-cols-2 gap-4">
                  
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200/70 shadow-xs">
                    <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Accuracy</span>
                    <span className={`text-2xl font-black ${model.selected ? 'text-forest-700' : 'text-slate-900'}`}>
                      {model.accuracy}
                    </span>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200/70 shadow-xs">
                    <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Precision</span>
                    <span className={`text-2xl font-black ${model.selected ? 'text-forest-700' : 'text-slate-900'}`}>
                      {model.precision}
                    </span>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200/70 shadow-xs">
                    <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Recall</span>
                    <span className={`text-2xl font-black ${model.selected ? 'text-forest-700' : 'text-slate-900'}`}>
                      {model.recall}
                    </span>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200/70 shadow-xs">
                    <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">F1-Score</span>
                    <span className={`text-2xl font-black ${model.selected ? 'text-forest-700' : 'text-slate-900'}`}>
                      {model.f1Score}
                    </span>
                  </div>

                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span>Evaluation Split: 20% Test</span>
                {model.selected ? (
                  <span className="text-forest-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Final Choice
                  </span>
                ) : (
                  <span>Evaluated</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Recharts Bar Chart Section */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-forest-700" />
                Accuracy Comparison Across Algorithms
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Visualizing test accuracy percentage (%) for Logistic Regression, Decision Tree, and Random Forest.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-500"></span> Logistic Reg
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span> Decision Tree
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-forest-800"></span> Random Forest
              </span>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#475569', fontSize: 13, fontWeight: 600 }}
                  axisLine={{ stroke: '#cbd5e1' }}
                  tickLine={false}
                />
                <YAxis 
                  domain={[90, 100]} 
                  tick={{ fill: '#475569', fontSize: 12 }}
                  unit="%" 
                  axisLine={{ stroke: '#cbd5e1' }}
                  tickLine={false}
                />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Accuracy']}
                  contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e2e8f0', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar dataKey="Accuracy" radius={[8, 8, 0, 0]} barSize={55}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
}
