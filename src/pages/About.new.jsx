import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { currentTheme } = useTheme();

  const sections = [
    {
      title: "Our Mission",
      description: "Providing cutting-edge financial technology solutions that empower brokers and financial institutions worldwide.",
      icon: "🎯"
    },
    {
      title: "Risk Management",
      description: "24/7 transparent risk monitoring with dynamic solutions for optimal performance.",
      icon: "🛡️"
    },
    {
      title: "Platform Integration",
      description: "Seamless integration with MT4, MT5, and DX Trade platforms.",
      icon: "🔄"
    },
    {
      title: "Global Support",
      description: "Round-the-clock professional support in multiple languages.",
      icon: "🌍"
    }
  ];

  const stats = [
    { value: "99.99%", label: "Uptime" },
    { value: "<10ms", label: "Latency" },
    { value: "24/7", label: "Support" },
    { value: "50+", label: "Countries" }
  ];

  return (
    <div 
      className="min-h-screen py-20"
      style={{ 
        background: currentTheme.colors.background,
        color: currentTheme.colors.text,
      }}
    >
      {/* Hero Section */}
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: currentTheme.fonts.heading }}
          >
            About <span style={{ color: currentTheme.colors.accent }}>FINFX</span>
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: currentTheme.colors.muted }}
          >
            Your trusted partner in financial technology solutions, 
            delivering excellence in trading infrastructure and risk management.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg" style={{ 
              backgroundColor: `${currentTheme.colors.secondary}40`,
              border: `1px solid ${currentTheme.colors.accent}40`
            }}>
              <h3 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: currentTheme.colors.accent }}
              >
                {stat.value}
              </h3>
              <p style={{ color: currentTheme.colors.muted }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Sections Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 rounded-xl"
              style={{ 
                backgroundColor: `${currentTheme.colors.secondary}40`,
                border: `1px solid ${currentTheme.colors.accent}40`
              }}
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: currentTheme.fonts.heading }}
              >
                {section.title}
              </h3>
              <p style={{ color: currentTheme.colors.muted }}>
                {section.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div 
            className="p-12 rounded-2xl"
            style={{ backgroundColor: `${currentTheme.colors.secondary}40` }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: currentTheme.fonts.heading }}
            >
              Ready to Get Started?
            </h2>
            <p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: currentTheme.colors.muted }}
            >
              Join leading financial institutions who trust FINFX 
              for their critical infrastructure needs.
            </p>
            <button
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: currentTheme.colors.accent,
                color: currentTheme.colors.background
              }}
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;