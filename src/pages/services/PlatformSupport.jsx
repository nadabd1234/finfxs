import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Monitor, Wrench, Activity, Shield, Clock, Zap } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PlatformSupport = () => {
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
      icon: Monitor,
      title: 'Technical Maintenance',
      description: 'Comprehensive technical support and maintenance for your trading platforms and infrastructure.'
    },
    {
      icon: Wrench,
      title: 'System Optimization',
      description: 'Performance optimization and system tuning to ensure maximum efficiency and reliability.'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: '24/7 system monitoring with proactive alerts and automated issue resolution.'
    },
    {
      icon: Shield,
      title: 'Security Updates',
      description: 'Regular security patches and updates to protect your platform from vulnerabilities.'
    },
    {
      icon: Clock,
      title: 'Uptime Guarantee',
      description: '99.9% uptime guarantee with redundant systems and failover mechanisms.'
    },
    {
      icon: Zap,
      title: 'Performance Analytics',
      description: 'Detailed performance metrics and analytics to optimize your trading operations.'
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
            PLATFORM SUPPORT
          </h1>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: currentTheme.colors.muted }}
          >
            Comprehensive technical support and maintenance for your trading platforms and infrastructure. 
            Keep your systems running smoothly with our expert platform support services.
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
            Need Reliable Platform Support?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ensure your trading platforms run smoothly with our comprehensive support services. 
            Get the technical expertise you need to maintain peak performance.
          </p>
          <motion.button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSupport;