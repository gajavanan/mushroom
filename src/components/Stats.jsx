import React from 'react';
import { Database, Sliders, Cpu, Award } from 'lucide-react';

export default function Stats() {
  const statItems = [
    {
      value: '8,124',
      label: 'Dataset Records',
      description: 'Audited mushroom samples',
      icon: Database,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      value: '22',
      label: 'Input Features',
      description: 'Physical & environmental traits',
      icon: Sliders,
      color: 'bg-forest-50 text-forest-700 border-forest-200'
    },
    {
      value: '3',
      label: 'ML Models',
      description: 'Logistic Reg, DT & RF',
      icon: Cpu,
      color: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      value: '100%',
      label: 'Best Test Accuracy',
      description: 'Random Forest test score',
      icon: Award,
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    }
  ];

  return (
    <section className="relative z-10 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md shadow-slate-200/50 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-forest-700 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {item.description}
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
