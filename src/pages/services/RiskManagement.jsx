import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, AlertTriangle, BarChart3, Eye, Lock, TrendingDown } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const RiskManagement = () => {
  const { theme, currentTheme } = useTheme();
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Advanced risk assessment and mitigation systems to protect your trading operations and ensure regulatory compliance.'
    },
    {
      icon: AlertTriangle,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of market conditions and trading activities with instant risk alerts.'
    },
    {
      icon: BarChart3,
      title: 'Portfolio Analysis',
      description: 'Comprehensive portfolio analysis and risk metrics to optimize your trading strategies.'
    },
    {
      icon: Eye,
      title: 'Compliance Reporting',
      description: 'Automated compliance reporting and regulatory documentation to meet industry standards.'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Enterprise-grade data protection and encryption to secure your sensitive trading information.'
    },
    {
      icon: TrendingDown,
      title: 'Loss Prevention',
      description: 'Proactive loss prevention strategies and automated risk controls to minimize trading losses.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen py-20"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/services')}
          className="mb-8 flex items-center text-teal-400 hover:text-teal-300 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </motion.button>

        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: currentTheme.fonts.heading,
              color: 'transparent',
              WebkitTextStroke: '2px #ffffff',
              textStroke: '2px #ffffff',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            RISK MANAGEMENT
          </h1>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: currentTheme.colors.muted }}
          >
            Advanced risk assessment and mitigation systems to protect your trading operations and ensure regulatory compliance. 
            Comprehensive risk management solutions for modern financial institutions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="animate-on-scroll p-6 rounded-xl border border-slate-600/60 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/60"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your Trading Operations?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Protect your business with our comprehensive risk management solutions. 
            Get expert guidance and advanced tools to minimize risk and maximize returns.
          </p>
          <motion.button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Secure Your Business
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default RiskManagement;