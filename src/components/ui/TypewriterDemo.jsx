import React from 'react';
import Typewriter from './Typewriter';
import MultiTypewriter from './MultiTypewriter';

const TypewriterDemo = () => {
  const handleComplete = () => {
    console.log('Typewriter animation completed!');
  };

  return (
    <div className="p-8 space-y-8 bg-slate-900 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">Typewriter Effects Demo</h1>
      
      {/* Basic Typewriter */}
      <div className="bg-slate-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Basic Typewriter</h2>
        <div className="text-2xl">
          <span className="text-white">FINFX </span>
          <Typewriter 
            text="Financial Technology" 
            speed={100} 
            className="text-teal-400"
            showCursor={true}
            onComplete={handleComplete}
          />
        </div>
      </div>

      {/* Typewriter with Delay */}
      <div className="bg-slate-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-white mb-4">With Delay</h2>
        <div className="text-2xl">
          <span className="text-white">Loading: </span>
          <Typewriter 
            text="Financial Technology Solutions" 
            speed={80} 
            delay={1000}
            className="text-blue-400"
            showCursor={true}
          />
        </div>
      </div>

      {/* Multi-text Typewriter */}
      <div className="bg-slate-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Multi-text Typewriter</h2>
        <div className="text-2xl">
          <span className="text-white">We provide </span>
          <MultiTypewriter 
            texts={[
              "Financial Technology",
              "Risk Management", 
              "Platform Support",
              "Custom Development"
            ]}
            speed={120}
            deleteSpeed={60}
            pauseTime={1500}
            className="text-green-400"
            showCursor={true}
          />
        </div>
      </div>

      {/* Fast Typewriter */}
      <div className="bg-slate-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Fast Typewriter</h2>
        <div className="text-2xl">
          <span className="text-white">Speed: </span>
          <Typewriter 
            text="Lightning Fast Solutions" 
            speed={50} 
            className="text-yellow-400"
            showCursor={true}
            cursorBlinkSpeed={300}
          />
        </div>
      </div>

      {/* Slow Typewriter */}
      <div className="bg-slate-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Slow Typewriter</h2>
        <div className="text-2xl">
          <span className="text-white">Careful: </span>
          <Typewriter 
            text="Precision Engineering" 
            speed={200} 
            className="text-purple-400"
            showCursor={true}
            cursorBlinkSpeed={800}
          />
        </div>
      </div>
    </div>
  );
};

export default TypewriterDemo;
