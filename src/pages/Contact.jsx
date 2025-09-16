import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const { theme, currentTheme } = useTheme();
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'general'
  });

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@finfxs.com',
      description: theme === 'owl' 
        ? 'Send us a thoughtful message and we\'ll respond within 24 hours'
        : 'Get instant responses to your inquiries'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: theme === 'owl'
        ? 'Speak directly with our team during business hours'
        : '24/7 support hotline for urgent matters'
    },
    {
      icon: '📍',
      title: 'Office',
      value: 'New York, NY',
      description: theme === 'owl'
        ? 'Visit our headquarters for in-person consultations'
        : 'Global headquarters with satellite offices worldwide'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      value: 'Available Now',
      description: theme === 'owl'
        ? 'Chat with our support team for immediate assistance'
        : 'Instant chat support with average response time < 30 seconds'
    }
  ];

  const interests = [
    { value: 'general', label: theme === 'owl' ? 'General Inquiry' : 'General' },
    { value: 'demo', label: theme === 'owl' ? 'Request Demo' : 'Demo' },
    { value: 'partnership', label: theme === 'owl' ? 'Partnership' : 'Partnership' },
    { value: 'support', label: theme === 'owl' ? 'Technical Support' : 'Support' },
    { value: 'sales', label: theme === 'owl' ? 'Sales Inquiry' : 'Sales' }
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            {theme === 'owl' ? 'Get in Touch' : 'Connect With Us'}
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: currentTheme.colors.muted }}
          >
            {theme === 'owl'
              ? 'We\'d love to hear from you. Send us a message and we\'ll respond thoughtfully and promptly.'
              : 'Ready to get started? Contact us now for lightning-fast responses and immediate assistance.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl font-bold mb-8"
              style={{
                fontFamily: currentTheme.fonts.heading,
                color: currentTheme.colors.text,
              }}
            >
              {theme === 'owl' ? 'Contact Information' : 'Get Connected'}
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className={`p-6 rounded-xl ${
                    theme === 'owl'
                      ? 'bg-owl-secondary/20 hover:bg-owl-accent/10'
                      : 'bg-gray-800/30 hover:bg-falcon-primary/5'
                  } transition-all duration-300`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h4
                        className="text-xl font-semibold mb-2"
                        style={{ color: currentTheme.colors.text }}
                      >
                        {info.title}
                      </h4>
                      <p
                        className="text-lg font-medium mb-2"
                        style={{ color: currentTheme.colors.accent }}
                      >
                        {info.value}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: currentTheme.colors.muted }}
                      >
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="mt-12 p-6 rounded-xl"
              style={{
                backgroundColor: currentTheme.colors.accent + '20',
                border: `1px solid ${currentTheme.colors.accent}40`
              }}
            >
              <h4
                className="text-lg font-semibold mb-3"
                style={{ color: currentTheme.colors.accent }}
              >
                {theme === 'owl' ? 'Response Time' : 'Response Time'}
              </h4>
              <p
                className="text-sm"
                style={{ color: currentTheme.colors.muted }}
              >
                {theme === 'owl'
                  ? 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.'
                  : 'Average response time: < 5 minutes for chat, < 1 hour for email, instant for phone calls.'}
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl font-bold mb-8"
              style={{
                fontFamily: currentTheme.fonts.heading,
                color: currentTheme.colors.text,
              }}
            >
              {theme === 'owl' ? 'Send us a Message' : 'Quick Contact'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: currentTheme.colors.text }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${
                      theme === 'owl'
                        ? 'border-owl-accent/30 focus:border-owl-accent bg-owl-secondary/20 text-owl-text'
                        : 'border-falcon-primary/30 focus:border-falcon-primary bg-gray-800/50 text-falcon-text'
                    }`}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: currentTheme.colors.text }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${
                      theme === 'owl'
                        ? 'border-owl-accent/30 focus:border-owl-accent bg-owl-secondary/20 text-owl-text'
                        : 'border-falcon-primary/30 focus:border-falcon-primary bg-gray-800/50 text-falcon-text'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: currentTheme.colors.text }}
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${
                    theme === 'owl'
                      ? 'border-owl-accent/30 focus:border-owl-accent bg-owl-secondary/20 text-owl-text'
                      : 'border-falcon-primary/30 focus:border-falcon-primary bg-gray-800/50 text-falcon-text'
                  }`}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: currentTheme.colors.text }}
                >
                  Interest *
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${
                    theme === 'owl'
                      ? 'border-owl-accent/30 focus:border-owl-accent bg-owl-secondary/20 text-owl-text'
                      : 'border-falcon-primary/30 focus:border-falcon-primary bg-gray-800/50 text-falcon-text'
                  }`}
                >
                  {interests.map((interest) => (
                    <option key={interest.value} value={interest.value}>
                      {interest.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: currentTheme.colors.text }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none resize-none ${
                    theme === 'owl'
                      ? 'border-owl-accent/30 focus:border-owl-accent bg-owl-secondary/20 text-owl-text'
                      : 'border-falcon-primary/30 focus:border-falcon-primary bg-gray-800/50 text-falcon-text'
                  }`}
                  placeholder={theme === 'owl' 
                    ? 'Tell us about your project and how we can help...'
                    : 'What can we help you build today?'
                  }
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  theme === 'owl'
                    ? 'bg-owl-accent text-owl-primary hover:bg-owl-light hover:shadow-lg'
                    : 'bg-falcon-primary text-falcon-dark hover:bg-falcon-secondary hover:shadow-lg hover:shadow-falcon-primary/25'
                }`}
              >
                {theme === 'owl' ? 'Send Message' : 'Send Now'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
