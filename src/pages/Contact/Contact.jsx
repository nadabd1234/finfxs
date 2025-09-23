import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Phone, MapPin, MessageCircle, Twitter, Facebook, Youtube, Linkedin } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submit
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
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
      className={`relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20`}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero header with right image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            className="animate-on-scroll text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
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
              CONTACT US
            </h2>
            <p
              className="text-xl max-w-3xl lg:max-w-xl mx-auto lg:mx-0"
              style={{ color: currentTheme.colors.muted }}
            >
              {theme === 'owl'
                ? 'Let\'s talk about your backend needs. Our team responds within 24 hours.'
                : 'Talk to our experts. We\'ll help you move fast with reliable solutions.'}
            </p>
          </motion.div>
          <motion.div
            className="animate-on-scroll order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto max-w-md w-full h-72 sm:h-80 lg:h-96 overflow-hidden rounded-[40px] rounded-t-[160px] border border-slate-600/60 bg-slate-800/40 backdrop-blur-sm flex items-center justify-center">
              <img src="/vite.svg" alt="Office" className="w-2/3 h-2/3 object-contain opacity-80" />
            </div>
          </motion.div>
        </div>

        {/* Contact info row */}
        <motion.div
          className="animate-on-scroll mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-xl font-bold mb-4"
            style={{ color: currentTheme.colors.text, fontFamily: currentTheme.fonts.heading }}
          >
            {theme === 'owl' ? 'Contact Information' : 'Contact Information'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-teal-400/40 via-indigo-400/30 to-sky-400/40"
              >
                <div
                  className="relative h-full w-full rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-md p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-teal-500/10 via-indigo-500/10 to-sky-500/10" />
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-slate-800/70 border border-slate-600/60 flex items-center justify-center mb-4 text-white shadow-inner shadow-black/30">
                      <info.Icon className="w-5 h-5" />
                    </div>
                    <div className="text-white font-semibold tracking-wide">{info.title}</div>
                    <div className="text-teal-300 text-sm">{info.value}</div>
                    <div className="text-gray-400 text-xs mt-1 leading-relaxed">{info.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {submitted && (
          <div className="mb-6 max-w-3xl mx-auto rounded-xl border border-teal-500/40 bg-teal-500/10 text-teal-200 px-4 py-3 text-center">
            Message sent successfully. Our team will get back to you shortly.
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
              <div className="text-sm font-semibold mb-3" style={{ color: currentTheme.colors.text }}>Social Media</div>
              <div className="flex items-center gap-3 text-white">
                <a href="#" aria-label="twitter" className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" aria-label="facebook" className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" aria-label="youtube" className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" aria-label="linkedin" className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors">
                  <Linkedin className="w-5 h-5" />
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
              <div className="text-2xl font-bold text-white">Our Newsletter</div>
              <div className="text-gray-300 text-sm">Get occasional updates about new services and platform support.</div>
            </div>
            <form className="flex w-full md:w-auto gap-3">
              <input type="email" placeholder="Email" className="flex-1 md:w-96 px-4 py-3 rounded-lg bg-transparent border border-slate-600/60 text-white outline-none" />
              <button type="submit" className="px-6 py-3 rounded-lg font-semibold bg-teal-600 hover:bg-teal-700 text-white">Submit</button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
