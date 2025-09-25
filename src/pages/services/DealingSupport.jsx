import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, TrendingUp, Shield, Headphones, BarChart3 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const DealingSupport = () => {
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
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock dealing desk support with 99.9% uptime guarantee. Our team of 12+ experienced dealers provides continuous coverage across all time zones.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Senior dealing professionals with 8-12 years of experience in major banks and financial institutions. Certified in risk management and regulatory compliance.'
    },
    {
      icon: TrendingUp,
      title: 'Trade Execution',
      description: 'Professional trade execution with <0.5 pips average slippage and 99.97% execution success rate. Direct market access to 50+ liquidity providers.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced risk monitoring systems with real-time alerts. Our team has prevented over $2M in potential losses for clients in the past year.'
    },
    {
      icon: Headphones,
      title: 'Client Management',
      description: 'Dedicated account managers with 5+ years of client relationship experience. Average client satisfaction score of 4.8/5.0 across all services.'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive reporting with 200+ trading metrics. Monthly performance reviews showing average 25% improvement in client trading efficiency.'
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
            DEALING SUPPORT
          </h1>
          <p
            className="text-xl max-w-3xl mx-auto mb-8"
            style={{ color: currentTheme.colors.muted }}
          >
            24/7 expert dealing desk support to manage your trading operations and client relationships effectively. 
            Professional trade execution with optimal pricing and comprehensive risk management.
          </p>
          
          {/* Team Experience & Revenue Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-teal-400 mb-2">15+ Years</div>
              <div className="text-white font-semibold mb-2">Team Experience</div>
              <div className="text-gray-300 text-sm">
                Our dealing team brings over 15 years of combined experience in forex, commodities, and CFD trading across major financial markets.
              </div>
            </motion.div>
            
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-teal-400 mb-2">35%</div>
              <div className="text-white font-semibold mb-2">Revenue Increase</div>
              <div className="text-gray-300 text-sm">
                Clients typically see a 35% increase in trading revenue within the first 6 months of implementing our dealing support services.
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
            Ready to Increase Your Revenue by 35%?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join 200+ successful brokers who have transformed their trading operations with our expert dealing support. 
            Our 15+ years of experience and proven track record can help you achieve significant revenue growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">200+</div>
              <div className="text-gray-300 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">$50M+</div>
              <div className="text-gray-300 text-sm">Volume Processed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime Guarantee</div>
            </div>
          </div>
          <motion.button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Support Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DealingSupport;