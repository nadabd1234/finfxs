import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const { theme, currentTheme } = useTheme();
  const sectionRef = useRef(null);

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

  const values = [
    {
      icon: '🎯',
      title: theme === 'owl' ? 'Precision' : 'Accuracy',
      description: theme === 'owl' 
        ? 'Every decision is made with careful consideration and deep analysis'
        : 'Lightning-fast execution with pinpoint accuracy in every transaction'
    },
    {
      icon: '🔒',
      title: 'Security',
      description: theme === 'owl'
        ? 'Robust security measures built on years of financial expertise'
        : 'Military-grade encryption and real-time threat monitoring'
    },
    {
      icon: '🚀',
      title: theme === 'owl' ? 'Innovation' : 'Performance',
      description: theme === 'owl'
        ? 'Thoughtful innovation that enhances rather than disrupts'
        : 'Cutting-edge technology optimized for maximum speed and efficiency'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: theme === 'owl'
        ? 'Building lasting relationships through transparency and reliability'
        : 'Instant trust through consistent, high-performance delivery'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: theme === 'owl' ? 'Chief Wisdom Officer' : 'Chief Technology Officer',
      image: '👩‍💼',
      description: theme === 'owl'
        ? '20+ years in financial strategy and risk management'
        : 'Former tech lead at major fintech unicorns'
    },
    {
      name: 'Marcus Rodriguez',
      role: theme === 'owl' ? 'Head of Strategy' : 'Head of Engineering',
      image: '👨‍💻',
      description: theme === 'owl'
        ? 'Expert in traditional banking and modern digital transformation'
        : 'Built scalable systems handling millions of transactions'
    },
    {
      name: 'Dr. Elena Volkov',
      role: theme === 'owl' ? 'Director of Research' : 'Head of Data Science',
      image: '👩‍🔬',
      description: theme === 'owl'
        ? 'PhD in Economics with focus on market behavior patterns'
        : 'AI/ML expert specializing in real-time financial analytics'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
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
            {theme === 'owl' ? 'About Our Wisdom' : 'About Our Speed'}
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: currentTheme.colors.muted }}
          >
            {theme === 'owl'
              ? 'We believe in the power of thoughtful innovation. Our approach combines decades of financial expertise with cutting-edge technology to create solutions that are both powerful and sustainable.'
              : 'We believe in the power of speed and precision. Our platform is built for the future, delivering lightning-fast financial solutions that keep you ahead of the competition.'}
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="animate-on-scroll mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
                color: currentTheme.colors.accent,
              }}
            >
              {theme === 'owl' ? 'Our Mission' : 'Our Vision'}
            </h3>
            <p
              className="text-lg leading-relaxed max-w-4xl mx-auto"
              style={{ color: currentTheme.colors.text }}
            >
              {theme === 'owl'
                ? 'To bridge the gap between traditional financial wisdom and modern technology, creating solutions that are both innovative and trustworthy. We believe that the best financial technology should feel familiar yet powerful, combining the reliability of established practices with the efficiency of cutting-edge innovation.'
                : 'To revolutionize the financial industry through lightning-fast, ultra-reliable technology that empowers businesses to operate at the speed of thought. We envision a world where financial transactions are instant, secure, and seamlessly integrated into every aspect of business operations.'}
            </p>
          </div>
        </motion.div>

        {/* Values */}
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
            {theme === 'owl' ? 'Our Values' : 'Our Principles'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-xl text-center ${
                  theme === 'owl'
                    ? 'bg-owl-secondary/30 hover:bg-owl-accent/20'
                    : 'bg-gray-800/50 hover:bg-falcon-primary/10'
                } transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4
                  className="text-xl font-semibold mb-3"
                  style={{ color: currentTheme.colors.accent }}
                >
                  {value.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: currentTheme.colors.muted }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          className="animate-on-scroll"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{
              fontFamily: currentTheme.fonts.heading,
              color: currentTheme.colors.text,
            }}
          >
            {theme === 'owl' ? 'Meet Our Sages' : 'Meet Our Team'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl text-center ${
                  theme === 'owl'
                    ? 'bg-owl-secondary/30 hover:bg-owl-accent/20'
                    : 'bg-gray-800/50 hover:bg-falcon-primary/10'
                } transition-all duration-300`}
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h4
                  className="text-xl font-semibold mb-2"
                  style={{ color: currentTheme.colors.text }}
                >
                  {member.name}
                </h4>
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: currentTheme.colors.accent }}
                >
                  {member.role}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: currentTheme.colors.muted }}
                >
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
