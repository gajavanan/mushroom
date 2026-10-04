import React from 'react';
import { BookOpen, Code2, Layers, CheckCircle2 } from 'lucide-react';

export default function AboutProject() {
  const techStack = [
    { name: 'Python', category: 'Language', icon: '🐍' },
    { name: 'Pandas', category: 'Data Analysis', icon: '🐼' },
    { name: 'NumPy', category: 'Numerical Computing', icon: '🔢' },
    { name: 'Scikit-learn', category: 'ML Algorithms', icon: '🤖' },
    { name: 'Random Forest', category: 'Classifier Engine', icon: '🌲' },
    { name: 'Joblib', category: 'Model Persistence', icon: '💾' },
    { name: 'Streamlit', category: 'Python Web Framework', icon: '👑' },
    { name: 'React', category: 'Frontend UI', icon: '⚛️' },
    { name: 'Vite', category: 'Build Tool', icon: '⚡' },
    { name: 'Tailwind CSS', category: 'Styling & Design System', icon: '🎨' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 text-forest-700 text-xs font-bold uppercase tracking-wider mb-3">
            Academic Context
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About the Project
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Overview of project motivation, machine learning methodology, and technology stack.
          </p>
        </div>

        {/* Project Description Cards */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6 mb-16">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-forest-700 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-md shadow-forest-900/10">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              
              <p>
                The Mushroom Edibility Prediction System is a supervised machine learning classification project designed to classify mushrooms as edible or poisonous using physical characteristics.
              </p>

              <p>
                The Mushroom Classification Dataset contains 8,124 records and 22 input features. Data preprocessing includes handling unknown values, categorical encoding and feature scaling.
              </p>

              <p>
                Three classification algorithms—Logistic Regression, Decision Tree and Random Forest—were trained and evaluated using Accuracy, Precision, Recall, F1-Score and Confusion Matrix.
              </p>

              <p className="font-bold text-forest-800 bg-forest-100/60 p-4 rounded-2xl border border-forest-200/80 inline-block">
                Random Forest was selected as the final deployment model.
              </p>

            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <Code2 className="w-5 h-5 text-forest-700" />
              Technologies & Libraries Used
            </h3>
            <p className="text-xs text-slate-500 mt-1">Tools used across machine learning model training, data science, and web application development.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {techStack.map((tech, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70 hover:bg-white hover:border-forest-300 hover:shadow-md transition-all text-center group"
              >
                <div className="text-2xl mb-2 group-hover:scale-125 transition-transform inline-block">
                  {tech.icon}
                </div>
                <div className="font-extrabold text-slate-900 text-sm group-hover:text-forest-700 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-wider font-semibold">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
