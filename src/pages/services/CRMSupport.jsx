import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeft, Users, UserPlus, Target, MessageSquare, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CRMSupport = () => {
  const { theme, currentTheme } = useTheme();
  const navigate = useNavigate();

  const features = [
    {
      icon: UserPlus,
      title: 'Customer Onboarding',
      description: 'Streamlined onboarding process to quickly and efficiently bring new clients into your system.',
      details: ['Automated workflows', 'Document collection', 'KYC verification', 'Account setup']
    },
    {
      icon: Target,
      title: 'Lead Management',
      description: 'Comprehensive lead tracking and management system to convert prospects into loyal customers.',
      details: ['Lead scoring', 'Pipeline management', 'Follow-up automation', 'Conversion tracking']
    },
    {
      icon: MessageSquare,
      title: 'Communication Tools',
      description: 'Integrated communication tools to maintain consistent and effective client relationships.',
      details: ['Multi-channel messaging', 'Email campaigns', 'Chat integration', 'Call management']
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting to track performance and identify growth opportunities.',
      details: ['Performance metrics', 'Client analytics', 'Revenue tracking', 'Custom reports']
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
            <Users className="w-16 h-16 text-teal-400" />
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
            CRM SUPPORT
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Complete customer relationship management solutions tailored for fintech and trading businesses.
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your Customer Relationships?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your customer management with our comprehensive CRM solutions designed specifically for fintech businesses.
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

export default CRMSupport;
