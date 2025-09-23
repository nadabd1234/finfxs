import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Shield, LineChart, CreditCard, Cpu, BarChart3, ShieldCheck, Activity, Database, User } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Showcase = () => {
  const { theme, currentTheme } = useTheme();
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(0);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((element) => {
      gsap.fromTo(element, 
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
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: theme === 'owl' ? 'Global Banking Platform' : 'High-Speed Trading Engine',
      category: theme === 'owl' ? 'Enterprise Banking' : 'Trading Technology',
      description: theme === 'owl'
        ? 'A comprehensive banking platform serving 50+ countries with robust compliance and risk management features.'
        : 'Ultra-low latency trading engine processing millions of transactions per second with microsecond precision.',
      Icon: theme === 'owl' ? Building2 : Activity,
      technologies: theme === 'owl'
        ? ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes']
        : ['C++', 'Rust', 'WebAssembly', 'Redis', 'Kafka'],
      metrics: theme === 'owl'
        ? ['50+ Countries', '10M+ Users', '99.99% Uptime', '24/7 Support']
        : ['<1ms Latency', '1M+ TPS', '99.999% Uptime', 'Real-time'],
      color: theme === 'owl' ? '#4a7c59' : '#00d4ff'
    },
    {
      id: 2,
      title: theme === 'owl' ? 'Investment Analytics Suite' : 'Real-time Risk Engine',
      category: theme === 'owl' ? 'Financial Analytics' : 'Risk Management',
      description: theme === 'owl'
        ? 'Advanced portfolio management and investment analytics with AI-powered insights and recommendations.'
        : 'Real-time risk assessment and monitoring system with instant alerts and automated responses.',
      Icon: theme === 'owl' ? LineChart : Shield,
      technologies: theme === 'owl'
        ? ['Python', 'TensorFlow', 'D3.js', 'MongoDB', 'AWS']
        : ['Go', 'Apache Flink', 'ClickHouse', 'Prometheus', 'Grafana'],
      metrics: theme === 'owl'
        ? ['$2B+ AUM', '95% Accuracy', 'Real-time', 'AI-Powered']
        : ['<10ms Response', '99.9% Accuracy', '24/7 Monitoring', 'Auto-Scaling'],
      color: theme === 'owl' ? '#6b8e6b' : '#ff6b35'
    },
    {
      id: 3,
      title: theme === 'owl' ? 'Regulatory Compliance Hub' : 'Payment Processing Network',
      category: theme === 'owl' ? 'Compliance' : 'Payments',
      description: theme === 'owl'
        ? 'Comprehensive compliance management system ensuring adherence to global financial regulations.'
        : 'Global payment processing network with instant settlement and multi-currency support.',
      Icon: theme === 'owl' ? ShieldCheck : CreditCard,
      technologies: theme === 'owl'
        ? ['Java', 'Spring Boot', 'Oracle', 'Apache Kafka', 'Elasticsearch']
        : ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
      metrics: theme === 'owl'
        ? ['100% Compliance', '50+ Regulations', 'Automated', 'Audit Ready']
        : ['<100ms Processing', '200+ Countries', '99.99% Success', '24/7 Global'],
      color: theme === 'owl' ? '#2d5a47' : '#ff9f40'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="animate-on-scroll text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: currentTheme.fonts.heading,
              color: currentTheme.colors.text,
            }}
          >
            {theme === 'owl' ? 'Our Portfolio' : 'Our Showcase'}
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: currentTheme.colors.muted }}
          >
            {theme === 'owl'
              ? 'Explore our carefully crafted solutions that demonstrate the perfect balance of wisdom and innovation.'
              : 'Discover our high-performance solutions that push the boundaries of speed and efficiency.'}
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="animate-on-scroll mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 bg-slate-800/50 hover:bg-slate-800/60 border ${selectedProject === index ? 'border-teal-400/60' : 'border-slate-600/60'} backdrop-blur-sm`}
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-6 text-white">
                  <project.Icon className="w-10 h-10" />
                </div>
                <div
                  className="text-sm font-semibold mb-2"
                  style={{ color: project.color }}
                >
                  {project.category}
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    fontFamily: currentTheme.fonts.heading,
                    color: currentTheme.colors.text,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-lg mb-6 leading-relaxed"
                  style={{ color: currentTheme.colors.muted }}
                >
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4
                    className="text-sm font-semibold mb-3"
                    style={{ color: currentTheme.colors.text }}
                  >
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: project.color + '20',
                          color: project.color,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4
                    className="text-sm font-semibold mb-3"
                    style={{ color: currentTheme.colors.text }}
                  >
                    Key Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="text-sm"
                        style={{ color: currentTheme.colors.muted }}
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
