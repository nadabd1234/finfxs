import React from 'react';
import { motion } from 'framer-motion';
import { useContactForm } from '../hooks/useContactForm';

const ContactForm = () => {
  const {
    formData,
    submitted,
    isSubmitting,
    errors,
    handleInputChange,
    handleSubmit
  } = useContactForm();

  const interests = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'demo', label: 'Request Demo' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'support', label: 'Technical Support' },
    { value: 'sales', label: 'Sales Inquiry' }
  ];

  return (
    <motion.div
      className="animate-on-scroll"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Success/Error Messages */}
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

      {/* Form Card */}
      <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-teal-400/40 via-indigo-400/30 to-sky-400/40">
        <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-md p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-teal-500/10 via-indigo-500/10 to-sky-500/10" />
          
          <h3 className="text-2xl font-bold mb-6 text-white relative z-10">
            Get In Touch!
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none cursor-text ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-400 bg-red-500/10 text-white' 
                      : 'border-slate-600 focus:border-blue-500 bg-slate-800 text-white placeholder-gray-400'
                  }`}
                  placeholder="Your full name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none cursor-text ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-400 bg-red-500/10 text-white' 
                      : 'border-slate-600 focus:border-blue-500 bg-slate-800 text-white placeholder-gray-400'
                  }`}
                  placeholder="your@email.com"
                  autoComplete="email"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Company Field */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2 text-white">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-600 focus:border-blue-500 bg-slate-800 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none cursor-text"
                placeholder="Your company name"
                autoComplete="organization"
              />
            </div>

            {/* Interest Field */}
            <div>
              <label htmlFor="interest" className="block text-sm font-medium mb-2 text-white">
                Interest *
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-600 focus:border-blue-500 bg-slate-800 text-white transition-all duration-200 focus:outline-none cursor-pointer"
              >
                {interests.map((interest) => (
                  <option key={interest.value} value={interest.value} className="bg-slate-800 text-white">
                    {interest.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none resize-none cursor-text ${
                  errors.message 
                    ? 'border-red-500 focus:border-red-400 bg-red-500/10 text-white' 
                    : 'border-slate-600 focus:border-blue-500 bg-slate-800 text-white placeholder-gray-400'
                }`}
                placeholder="Tell us about your project and how we can help..."
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed opacity-75'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-lg'
              }`}
              aria-describedby={isSubmitting ? 'submitting-status' : undefined}
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
                'Send Message'
              )}
            </motion.button>
            
            {isSubmitting && (
              <p id="submitting-status" className="sr-only" aria-live="polite">
                Submitting your message, please wait...
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
