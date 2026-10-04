import React from 'react';
import { Database, Sliders, ShieldCheck, AlertTriangle, PieChart as PieIcon } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function DatasetOverview() {
  const datasetCards = [
    {
      label: 'Total Records',
      value: '8,124',
      subtext: 'Audited samples in dataset',
      icon: Database,
      bgColor: 'bg-slate-100 text-slate-800'
    },
    {
      label: 'Input Features',
      value: '22',
      subtext: 'Categorical physical attributes',
      icon: Sliders,
      bgColor: 'bg-forest-100 text-forest-800'
    },
    {
      label: 'Edible Samples',
      value: '4,208',
      subtext: '51.8% of dataset',
      icon: ShieldCheck,
      bgColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      label: 'Poisonous Samples',
      value: '3,916',
      subtext: '48.2% of dataset',
      icon: AlertTriangle,
      bgColor: 'bg-rose-100 text-rose-800'
    },
  ];

  const classData = [
    { name: 'Edible (51.8%)', value: 4208, fill: '#2d9660' },
    { name: 'Poisonous (48.2%)', value: 3916, fill: '#e11d48' },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 text-forest-700 text-xs font-bold uppercase tracking-wider mb-3">
            UCI Mushroom Repository
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dataset Overview
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Comprehensive breakdown of sample distribution and physical feature parameters.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {datasetCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/90 rounded-3xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {card.label}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${card.bgColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {card.value}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  {card.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Class Distribution Donut Chart Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <PieIcon className="w-5 h-5 text-forest-700" />
                Class Distribution Ratio
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Balanced dataset split between edible and poisonous mushroom records.</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900">
                Edible: 51.8%
              </span>
              <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-900">
                Poisonous: 48.2%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
            
            {/* Donut Chart */}
            <div className="md:col-span-7 h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={classData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={95}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {classData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} stroke="transparent" />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name) => [`${value} samples`, name]}
                    contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e2e8f0' }}
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Class Breakdown List */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80">
                <div className="flex justify-between items-center text-sm font-bold mb-1">
                  <span className="text-emerald-800 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
                    Edible (e)
                  </span>
                  <span className="text-slate-900 font-extrabold">4,208</span>
                </div>
                <div className="text-xs text-slate-500">
                  Safe for consumption under dataset criteria (51.8%).
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80">
                <div className="flex justify-between items-center text-sm font-bold mb-1">
                  <span className="text-rose-800 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-600"></span>
                    Poisonous (p)
                  </span>
                  <span className="text-slate-900 font-extrabold">3,916</span>
                </div>
                <div className="text-xs text-slate-500">
                  Toxic / unsafe under dataset criteria (48.2%).
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
