import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const FullWindowBanner = () => {
  const { theme, currentTheme } = useTheme();

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0">
        {/* Dark Blue Section (Top-Left) */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, transparent 50%)',
            clipPath: 'polygon(0 0, 100% 0, 0 100%)'
          }}
        />
        
        {/* Light Grey Section (Bottom-Right) */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, transparent 50%, #f1f5f9 50%, #e2e8f0 100%)',
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-screen items-center">
            
            {/* Left Side - Dark Blue Background Content */}
            <motion.div 
              className="relative z-20 px-8 lg:px-12 py-16"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white block">FINFX</span>
                <span className="text-teal-400 block">Backend Solutions</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-white max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Trusted backend solutions that keep fintech businesses running smoothly. 
                From risk management to platform support.
              </motion.p>
            </motion.div>

            {/* Right Side - Light Grey Background Content */}
            <motion.div 
              className="relative z-20 px-8 lg:px-12 py-16 flex flex-col justify-center items-center lg:items-start"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Tech-driven resilience for modern enterprises
              </motion.h2>

              {/* Progress Indicators */}
              <motion.div 
                className="flex space-x-2 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
                <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
              </motion.div>

              {/* Know More Button */}
              <motion.button
                className="px-8 py-4 border-2 border-gray-800 text-gray-800 font-semibold uppercase tracking-wide hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Know More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-gray-400/30 rounded-full"></div>
    </section>
  );
};

export default FullWindowBanner;
