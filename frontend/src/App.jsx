import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import PredictionForm from './components/PredictionForm';
import PredictionResult from './components/PredictionResult';
import ModelPerformance from './components/ModelPerformance';
import ConfusionMatrix from './components/ConfusionMatrix';
import DatasetOverview from './components/DatasetOverview';
import MLPipeline from './components/MLPipeline';
import AboutProject from './components/AboutProject';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [predictionResult, setPredictionResult] = useState(null);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePredictionComplete = (result) => {
    setPredictionResult(result);
  };

  const handleResetPrediction = () => {
    setPredictionResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-forest-200 selection:text-forest-900">
      
      {/* Top Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Hero Banner */}
        <Hero onNavigate={handleNavigate} />

        {/* Quick Key Metrics / Stats */}
        <Stats />

        {/* How It Works 4 Steps */}
        <HowItWorks />

        {/* Prediction Form Section */}
        <PredictionForm 
          onPredictionComplete={handlePredictionComplete}
          onReset={handleResetPrediction}
        />

        {/* Dynamic Prediction Output Card */}
        {predictionResult && (
          <PredictionResult 
            result={predictionResult} 
            onReset={handleResetPrediction} 
          />
        )}

        {/* Algorithmic Performance Benchmarks */}
        <ModelPerformance />

        {/* 2x2 Confusion Matrix */}
        <ConfusionMatrix />

        {/* Dataset Breakdown & Distribution */}
        <DatasetOverview />

        {/* End-to-End Machine Learning Pipeline */}
        <MLPipeline />

        {/* Academic Project Context & Tech Stack */}
        <AboutProject />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
