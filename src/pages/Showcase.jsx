import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
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
      image: theme === 'owl' ? '🏦' : '⚡',
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
      image: theme === 'owl' ? '📈' : '🛡️',
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
      image: theme === 'owl' ? '📋' : '💳',
      technologies: theme === 'owl'
        ? ['Java', 'Spring Boot', 'Oracle', 'Apache Kafka', 'Elasticsearch']
        : ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
      metrics: theme === 'owl'
        ? ['100% Compliance', '50+ Regulations', 'Automated', 'Audit Ready']
        : ['<100ms Processing', '200+ Countries', '99.99% Success', '24/7 Global'],
      color: theme === 'owl' ? '#2d5a47' : '#ff9f40'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: theme === 'owl' ? 'Chief Risk Officer' : 'CTO',
      company: 'Global Finance Corp',
      quote: theme === 'owl'
        ? 'FINFX has transformed our risk management approach. Their thoughtful design and comprehensive features give us confidence in every decision.'
        : 'The speed and reliability of FINFX is unmatched. We can process transactions faster than ever before.',
      avatar: '👩‍💼'
    },
    {
      name: 'David Kim',
      role: theme === 'owl' ? 'Head of Operations' : 'VP Engineering',
      company: 'TechStart Inc',
      quote: theme === 'owl'
        ? 'The depth of analysis and insights provided by FINFX has revolutionized our financial planning and strategy development.'
        : 'FINFX\'s real-time capabilities have given us a competitive edge in the market.',
      avatar: '👨‍💻'
    },
    {
      name: 'Maria Santos',
      role: theme === 'owl' ? 'Compliance Director' : 'Head of Payments',
      company: 'International Bank',
      quote: theme === 'owl'
        ? 'FINFX makes regulatory compliance effortless. Their platform ensures we stay ahead of changing requirements.'
        : 'The performance and reliability of FINFX has exceeded all our expectations.',
      avatar: '👩‍🔬'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className={`py-20 ${
        theme === 'owl' ? 'bg-owl-primary' : 'bg-falcon-dark'
      }`}
    >
      <div className="container mx-auto px-6">
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
                className={`p-8 rounded-2xl cursor-pointer ${
                  selectedProject === index
                    ? theme === 'owl'
                      ? 'bg-owl-accent/20 border-2 border-owl-accent'
                      : 'bg-falcon-primary/20 border-2 border-falcon-primary'
                    : theme === 'owl'
                    ? 'bg-owl-secondary/20 hover:bg-owl-accent/10'
                    : 'bg-gray-800/30 hover:bg-falcon-primary/5'
                } transition-all duration-300`}
                onClick={() => setSelectedProject(index)}
              >
                <div className="text-6xl mb-6">{project.image}</div>
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

        {/* Testimonials */}
        <motion.div
          className="animate-on-scroll mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{
              fontFamily: currentTheme.fonts.heading,
              color: currentTheme.colors.text,
            }}
          >
            {theme === 'owl' ? 'Client Testimonials' : 'Success Stories'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl ${
                  theme === 'owl'
                    ? 'bg-owl-secondary/20'
                    : 'bg-gray-800/30'
                }`}
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p
                  className="text-lg mb-6 italic leading-relaxed"
                  style={{ color: currentTheme.colors.muted }}
                >
                  "{testimonial.quote}"
                </p>
                <div>
                  <div
                    className="font-semibold"
                    style={{ color: currentTheme.colors.text }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: currentTheme.colors.accent }}
                  >
                    {testimonial.role}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: currentTheme.colors.muted }}
                  >
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="animate-on-scroll"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={`rounded-2xl p-12 text-center ${
            theme === 'owl'
              ? 'bg-owl-secondary/50 backdrop-blur-sm'
              : 'bg-gray-900/50 backdrop-blur-sm'
          }`}>
            <h3
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                fontFamily: currentTheme.fonts.heading,
                color: currentTheme.colors.text,
              }}
            >
              {theme === 'owl' ? 'Ready to Build Something Great?' : 'Ready to Scale Your Business?'}
            </h3>
            <p
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: currentTheme.colors.muted }}
            >
              {theme === 'owl'
                ? 'Let us help you create a solution that combines wisdom with innovation.'
                : 'Let us help you build a high-performance solution that scales with your business.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  theme === 'owl'
                    ? 'bg-owl-accent text-owl-primary hover:bg-owl-light hover:shadow-lg'
                    : 'bg-falcon-primary text-falcon-dark hover:bg-falcon-secondary hover:shadow-lg hover:shadow-falcon-primary/25'
                }`}
              >
                {theme === 'owl' ? 'Start a Project' : 'Get Started'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all duration-300 ${
                  theme === 'owl'
                    ? 'border-owl-accent text-owl-accent hover:bg-owl-accent hover:text-owl-primary'
                    : 'border-falcon-primary text-falcon-primary hover:bg-falcon-primary hover:text-falcon-dark'
                }`}
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
