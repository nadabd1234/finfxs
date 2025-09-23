import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Phone, MapPin, MessageCircle, Twitter, Github, Linkedin } from 'lucide-react';

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
    setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        interest: 'general'
      });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      Icon: Mail,
      title: 'Email',
      value: 'hello@finfxs.com',
      description: theme === 'owl'
        ? 'Send us a thoughtful message and we\'ll respond within 24 hours'
        : 'Get instant responses to your inquiries'
    },
    {
      Icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: theme === 'owl'
        ? 'Speak directly with our team during business hours'
        : '24/7 support hotline for urgent matters'
    },
    {
      Icon: MapPin,
      title: 'Office',
      value: 'New York, NY',
      description: theme === 'owl'
        ? 'Visit our headquarters for in-person consultations'
        : 'Global headquarters with satellite offices worldwide'
    },
    {
      Icon: MessageCircle,
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
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main hero layout - large heading left, contact cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start min-h-[80vh] mb-16">
          {/* Left side - Large heading */}
          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
              CONTACT US
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-8">
                CONTACT<br />
                THE <span className="text-teal-400">FINFX</span><br />
                TEAM
              </h1>
              <div className="flex items-center text-gray-400 text-sm">
                <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact info grid */}
          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Email Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-teal-400 mr-3" />
                  <span className="text-white font-semibold">EMAIL</span>
                </div>
                <div className="text-gray-300 text-sm mb-1">hello@finfx.com</div>
              </div>

              
              {/* Phone Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-teal-400 mr-3" />
                  <span className="text-white font-semibold">PHONE</span>
                </div>
                <div className="text-gray-300 text-sm">+1 (888) 555-0192</div>
              </div>

              {/* Platform Support Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-teal-400 mr-3" />
                  <span className="text-white font-semibold">PLATFORM SUPPORT</span>
                </div>
                <div className="text-gray-300 text-sm">
                  24/7 technical support for MT4, MT5, and DX Trade platforms with 99.97% uptime guarantee.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form and Location Section - Integrated into main layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
                {submitted && (
                  <div className="mb-6 max-w-3xl mx-auto rounded-xl border border-green-500/40 bg-green-500/10 text-green-200 px-4 py-3 text-center">
                    ✅ Message sent successfully! Our team will get back to you within 24 hours.
                </div>
                )}

                {errors.submit && (
                  <div className="mb-6 max-w-3xl mx-auto rounded-xl border border-red-500/40 bg-red-500/10 text-red-200 px-4 py-3 text-center">
                    ❌ {errors.submit}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Left column: Form card */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-teal-400/40 via-indigo-400/30 to-sky-400/40">
            <div
                className="rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-md p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-teal-500/10 via-indigo-500/10 to-sky-500/10" />
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: currentTheme.colors.text, fontFamily: currentTheme.fonts.heading }}
              >
                {theme === 'owl' ? 'Get In Touch!' : 'Get In Touch!'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6" style={{ position: 'relative', zIndex: 5 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label
                            className="block text-sm font-medium mb-2 text-white"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                            style={{
                              position: 'relative',
                              zIndex: 10,
                              pointerEvents: 'auto',
                              userSelect: 'text',
                              WebkitUserSelect: 'text',
                              MozUserSelect: 'text',
                              msUserSelect: 'text'
                            }}
                            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none cursor-text ${
                              errors.name 
                                ? 'border-red-500 focus:border-red-400 bg-red-500/10 text-white' 
                                : 'border-slate-600 focus:border-blue-500 bg-slate-800 text-white placeholder-gray-400'
                    }`}
                    placeholder="Your full name"
                            autoComplete="name"
                  />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                          )}
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2 text-white"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      position: 'relative',
                      zIndex: 10,
                      pointerEvents: 'auto',
                      userSelect: 'text',
                      WebkitUserSelect: 'text',
                      MozUserSelect: 'text',
                      msUserSelect: 'text'
                    }}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none cursor-text ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-400 bg-red-500/10 text-white' 
                        : 'border-slate-600 focus:border-blue-500 bg-slate-800 text-white placeholder-gray-400'
                    }`}
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2 text-white"
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  style={{
                    position: 'relative',
                    zIndex: 10,
                    pointerEvents: 'auto',
                    userSelect: 'text',
                    WebkitUserSelect: 'text',
                    MozUserSelect: 'text',
                    msUserSelect: 'text'
                  }}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-600 focus:border-blue-500 bg-slate-800 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none cursor-text"
                  placeholder="Your company name"
                  autoComplete="organization"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2 text-white"
                >
                  Interest *
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  style={{
                    position: 'relative',
                    zIndex: 10,
                    pointerEvents: 'auto'
                  }}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-600 focus:border-blue-500 bg-slate-800 text-white transition-all duration-200 focus:outline-none cursor-pointer"
                >
                  {interests.map((interest) => (
                    <option key={interest.value} value={interest.value} className="bg-slate-800 text-white">
                      {interest.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                    className="block text-sm font-medium mb-2 text-white"
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                    style={{
                      position: 'relative',
                      zIndex: 10,
                      pointerEvents: 'auto',
                      userSelect: 'text',
                      WebkitUserSelect: 'text',
                      MozUserSelect: 'text',
                      msUserSelect: 'text'
                    }}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none resize-none cursor-text ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-400 bg-red-500/10 text-white' 
                        : 'border-slate-600 focus:border-blue-500 bg-slate-800 text-white placeholder-gray-400'
                    }`}
                    placeholder="Tell us about your project and how we can help..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed opacity-75'
                    : theme === 'owl'
                    ? 'bg-owl-accent text-owl-primary hover:bg-owl-light hover:shadow-lg'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  theme === 'owl' ? 'Send Message' : 'Send Message'
                )}
              </motion.button>
            </form>
              </div>
            </div>
          </motion.div>

          {/* Right column: Map + Social */}
          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl font-bold mb-4"
              style={{ color: currentTheme.colors.text, fontFamily: currentTheme.fonts.heading }}
            >
              {theme === 'owl' ? 'Our Location' : 'Our Location'}
            </h3>
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-teal-400/40 via-indigo-400/30 to-sky-400/40 mb-6">
              <div className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-900/60 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-teal-500/10 via-indigo-500/10 to-sky-500/10" />
              <iframe
                title="FINFX Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9942.214!2d-0.1195!3d51.5033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2suk!4v1610000000000"
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold mb-3 text-white">Follow Us</div>
              <div className="flex items-center gap-3 text-white">
                <a href="https://twitter.com/finfx" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/finfx" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/finfx" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:hello@finfx.com" aria-label="Email" className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter CTA */}
        <motion.div
          className="animate-on-scroll mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border border-slate-600/60 bg-slate-800/50 p-6 md:p-10 flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex-1">
              <div className="text-2xl font-bold text-white">FINFX Market Insights</div>
              <div className="text-gray-300 text-sm">
                Stay ahead with weekly market analysis, platform updates, and exclusive fintech industry reports. 
                <span className="block mt-1 text-xs text-gray-400">Join 2,500+ brokers and traders • Unsubscribe anytime</span>
              </div>
            </div>
            <form className="flex w-full md:w-auto gap-3">
              <input 
                type="email" 
                placeholder="Enter your business email" 
                className="flex-1 md:w-96 px-4 py-3 rounded-lg bg-transparent border border-slate-600/60 text-white placeholder-gray-400 outline-none focus:border-blue-500 transition-colors" 
                required 
              />
              <button type="submit" className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
