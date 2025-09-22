import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Phone, MapPin, MessageCircle, Twitter, Facebook, Youtube, Linkedin } from 'lucide-react';

const Contact = () => {
  const { theme, currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'general'
  });

  // Motion variants
  const viewportConfig = { once: true, amount: 0.2 };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.94, y: 24 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

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

  // Theme-aware classes
  const themeClasses = theme === 'owl'
    ? {
        input:
          'border-owl-accent/30 focus:border-owl-accent bg-owl-secondary/20 text-owl-text',
        button:
          'bg-owl-accent text-owl-primary hover:bg-owl-light hover:shadow-lg',
        card:
          'border-slate-600/60 bg-slate-800/50',
        text: currentTheme.colors.text,
        muted: currentTheme.colors.muted,
        headingFont: currentTheme.fonts.heading,
      }
    : {
        input:
          'border-falcon-primary/30 focus:border-falcon-primary bg-gray-800/50 text-falcon-text',
        button:
          'bg-falcon-primary text-falcon-dark hover:bg-falcon-secondary hover:shadow-lg hover:shadow-falcon-primary/25',
        card:
          'border-slate-600/60 bg-slate-800/50',
        text: currentTheme.colors.text,
        muted: currentTheme.colors.muted,
        headingFont: currentTheme.fonts.heading,
      };

  return (
    <section
      id="contact"
      className={`relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20`}
    >
      {/* Decorative background for unique flair */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero header with right image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            className="text-center lg:text-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <h2
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{
                fontFamily: themeClasses.headingFont,
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
              style={{ color: themeClasses.muted }}
            >
              {theme === 'owl'
                ? 'Let\'s talk about your backend needs. Our team responds within 24 hours.'
                : 'Talk to our experts. We\'ll help you move fast with reliable solutions.'}
            </p>
          </motion.div>
          <motion.div
            className="order-first lg:order-last"
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <div className="p-[1px] mx-auto max-w-md w-full h-72 sm:h-80 lg:h-96 rounded-[40px] rounded-t-[160px] bg-gradient-to-tr from-teal-500/40 via-indigo-400/30 to-sky-400/40">
              <div className="w-full h-full overflow-hidden rounded-[40px] rounded-t-[160px] border border-slate-600/60 bg-slate-800/40 backdrop-blur-sm flex items-center justify-center">
                <img src="/vite.svg" alt="Office" className="w-2/3 h-2/3 object-contain opacity-80" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact info row */}
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <h3
            className="text-xl font-bold mb-4"
            style={{ color: themeClasses.text, fontFamily: themeClasses.headingFont }}
          >
            Contact Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-600/60 bg-slate-800/50 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-slate-700/60 border border-slate-600/60 flex items-center justify-center mb-3 text-white">
                  <info.Icon className="w-5 h-5" />
                </div>
                <div className="text-white font-semibold">{info.title}</div>
                <div className="text-teal-300 text-sm">{info.value}</div>
                <div className="text-gray-400 text-xs mt-1">{info.description}</div>
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
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            {/* Left column: Form card */}
            <div className={`p-[1px] rounded-2xl bg-gradient-to-tr from-teal-400/40 via-indigo-400/30 to-sky-400/40`}>
              <div
                className={`p-6 rounded-2xl border ${themeClasses.card} backdrop-blur-sm shadow-lg`}
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.25)' }}
              >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: themeClasses.text, fontFamily: themeClasses.headingFont }}
              >
                Get In Touch!
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeClasses.text }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    autoComplete="name"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${themeClasses.input}`}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeClasses.text }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    inputMode="email"
                    autoComplete="email"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${themeClasses.input}`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-company"
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeClasses.text }}
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="contact-company"
                  value={formData.company}
                  onChange={handleInputChange}
                  autoComplete="organization"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${themeClasses.input}`}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-interest"
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeClasses.text }}
                >
                  Interest *
                </label>
                <select
                  name="interest"
                  id="contact-interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${themeClasses.input}`}
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
                  htmlFor="contact-message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeClasses.text }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  id="contact-message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none resize-none ${themeClasses.input}`}
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
                className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${themeClasses.button}`}
              >
                {theme === 'owl' ? 'Send Message' : 'Send Now'}
              </motion.button>
            </form>
              </div>
            </div>
          </motion.div>

          {/* Right column: Map + Social */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <h3
              className="text-3xl font-bold mb-4"
              style={{ color: themeClasses.text, fontFamily: themeClasses.headingFont }}
            >
              Our Location
            </h3>
            <div className="rounded-2xl overflow-hidden border border-slate-600/60 shadow-lg mb-6 bg-slate-800/50 backdrop-blur-sm">
              <iframe
                title="FINFX Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9942.214!2d-0.1195!3d51.5033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2suk!4v1610000000000"
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing our office location"
              />
            </div>

            <div>
              <div className="text-sm font-semibold mb-3" style={{ color: themeClasses.text }}>Social Media</div>
              <div className="flex items-center gap-3 text-white">
                <a href="#" target="_blank" rel="noreferrer" aria-label="twitter" className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noreferrer" aria-label="facebook" className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noreferrer" aria-label="youtube" className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noreferrer" aria-label="linkedin" className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter CTA */}
        <motion.div
          className="mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <div className="rounded-2xl border border-slate-600/60 bg-slate-800/50 p-6 md:p-10 flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex-1">
              <div className="text-2xl font-bold text-white">Our Newsletter</div>
              <div className="text-gray-300 text-sm">Get occasional updates about new services and platform support.</div>
            </div>
            <form className="flex w-full md:w-auto gap-3" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email</label>
              <input id="newsletter-email" type="email" placeholder="Email" inputMode="email" autoComplete="email" className="flex-1 md:w-96 px-4 py-3 rounded-lg bg-transparent border border-slate-600/60 text-white outline-none" />
              <button type="submit" className="px-6 py-3 rounded-lg font-semibold bg-teal-600 hover:bg-teal-700 text-white">Submit</button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
