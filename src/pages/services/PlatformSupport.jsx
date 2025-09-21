import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeft, Settings, Wrench, Gauge, Monitor, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PlatformSupport = () => {
  const { theme, currentTheme } = useTheme();
  const navigate = useNavigate();

  const features = [
    {
      icon: Wrench,
      title: 'Technical Maintenance',
      description: 'Regular maintenance and updates to keep your trading platforms running smoothly and efficiently.',
      details: ['System updates', 'Bug fixes', 'Performance tuning', 'Security patches']
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Continuous optimization to ensure your platforms deliver the best possible performance.',
      details: ['Speed optimization', 'Resource management', 'Load balancing', 'Caching strategies']
    },
    {
      icon: Monitor,
      title: 'System Monitoring',
      description: '24/7 monitoring of your trading systems to detect and resolve issues before they impact operations.',
      details: ['Real-time monitoring', 'Alert systems', 'Performance metrics', 'Health checks']
    },
    {
      icon: Shield,
      title: 'Uptime Guarantee',
      description: 'SLA-backed uptime guarantee to ensure your trading operations are always available.',
      details: ['99.9% uptime SLA', 'Redundancy systems', 'Disaster recovery', 'Backup procedures']
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-white hover:text-teal-400 transition-colors mb-8"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Services
        </motion.button>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Settings className="w-16 h-16 text-teal-400" />
          </div>
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-6"
            style={{
              fontFamily: currentTheme.fonts.heading,
              color: 'transparent',
              WebkitTextStroke: '2px #ffffff',
              textStroke: '2px #ffffff',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            PLATFORM SUPPORT
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive technical support and maintenance for your trading platforms and infrastructure.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/60 hover:border-teal-500 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <feature.icon className="w-8 h-8 text-teal-400" />
                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-600/60"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Need Reliable Platform Support?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Keep your trading platforms running smoothly with our comprehensive technical support and maintenance services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Custom Quote
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSupport;
