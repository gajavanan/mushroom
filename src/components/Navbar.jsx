import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Predict', href: '#predict', id: 'predict' },
    { name: 'Model Performance', href: '#performance', id: 'performance' },
    { name: 'About', href: '#about', id: 'about' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-forest-700 text-white flex items-center justify-center shadow-md shadow-forest-900/10 group-hover:scale-105 group-hover:bg-forest-800 transition-all">
              {/* Custom Mushroom SVG Logo */}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C7.03 2 3 6.03 3 11c0 1.25.26 2.44.73 3.52C4.38 16 6 17 8 17h8c2 0 3.62-1 4.27-2.48.47-1.08.73-2.27.73-3.52 0-4.97-4.03-9-9-9zM10 17v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h-4z"/>
              </svg>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-forest-700 transition-colors">
                Mushroom Classifier
              </span>
              <span className="block text-[10px] font-semibold tracking-wider text-forest-600 uppercase">
                ML Edibility Predictor
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-forest-800 bg-forest-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('predict')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-forest-700 hover:bg-forest-800 active:bg-forest-900 shadow-md shadow-forest-700/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Try Prediction</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.id);
              }}
              className={`block px-4 py-3 rounded-lg text-base font-medium ${
                activeSection === link.id
                  ? 'text-forest-800 bg-forest-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('predict')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-forest-700 hover:bg-forest-800 shadow-md shadow-forest-700/20"
            >
              <span>Try Prediction</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
