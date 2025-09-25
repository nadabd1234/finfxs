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
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
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
      description: 'Advanced risk assessment systems with 15+ risk metrics and real-time scoring. Our certified risk analysts have 8+ years of experience in major financial institutions.'
    },
    {
      icon: AlertTriangle,
      title: 'Real-time Monitoring',
      description: '24/7 monitoring with <100ms alert response time. Our team has prevented over $5M in potential losses through proactive risk detection in the past year.'
    },
    {
      icon: BarChart3,
      title: 'Portfolio Analysis',
      description: 'Comprehensive portfolio analysis with 50+ risk metrics and VaR calculations. Average 30% improvement in risk-adjusted returns for our clients.'
    },
    {
      icon: Eye,
      title: 'Compliance Reporting',
      description: 'Automated compliance reporting for 20+ regulatory frameworks including MiFID II, ESMA, and CFTC. 100% audit success rate with regulatory bodies.'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Bank-grade encryption with ISO 27001 certification. Our security team has 10+ years of experience in financial data protection and cybersecurity.'
    },
    {
      icon: TrendingDown,
      title: 'Loss Prevention',
      description: 'Proactive loss prevention with 99.5% accuracy in risk prediction. Our algorithms have helped clients reduce unexpected losses by an average of 45%.'
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
            className="text-xl max-w-3xl mx-auto mb-8"
            style={{ color: currentTheme.colors.muted }}
          >
            Advanced risk assessment and mitigation systems to protect your trading operations and ensure regulatory compliance. 
            Comprehensive risk management solutions for modern financial institutions.
          </p>
          
          {/* Team Experience & Revenue Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-teal-400 mb-2">12+ Years</div>
              <div className="text-white font-semibold mb-2">Risk Management Experience</div>
              <div className="text-gray-300 text-sm">
                Our risk management team has over 12 years of combined experience in financial risk assessment, regulatory compliance, and loss prevention across global markets.
              </div>
            </motion.div>
            
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-teal-400 mb-2">40%</div>
              <div className="text-white font-semibold mb-2">Loss Reduction</div>
              <div className="text-gray-300 text-sm">
                Clients typically see a 40% reduction in trading losses and a 25% improvement in risk-adjusted returns within 3 months of implementing our risk management solutions.
              </div>
            </motion.div>
          </div>
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
            Ready to Reduce Losses by 40%?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join 150+ financial institutions that have transformed their risk management with our expert solutions. 
            Our 12+ years of experience and proven methodologies can help you achieve significant loss reduction and improved returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">150+</div>
              <div className="text-gray-300 text-sm">Financial Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">$5M+</div>
              <div className="text-gray-300 text-sm">Losses Prevented</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">99.5%</div>
              <div className="text-gray-300 text-sm">Risk Prediction Accuracy</div>
            </div>
          </div>
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