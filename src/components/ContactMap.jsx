import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Twitter, Github, Linkedin } from 'lucide-react';

const ContactMap = () => {
  return (
    <motion.div
      id="contact-info"
      className="animate-on-scroll"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold mb-4 text-white">
        Our Location
      </h3>
      
      <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-teal-400/40 via-indigo-400/30 to-sky-400/40 mb-6">
        <div className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-900/60 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-teal-500/10 via-indigo-500/10 to-sky-500/10" />
          <div className="relative w-full h-[360px] bg-slate-800/50 flex items-center justify-center">
            <iframe
              title="FINFXS Location - Bengaluru, Karnataka, India"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.013771634469!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1698765432109!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen=""
              onError={() => {
                console.log('Map failed to load');
              }}
            />
            {/* Fallback content in case map doesn't load */}
            <div className="absolute inset-0 bg-slate-800/90 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white p-6">
                <MapPin className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Bengaluru, Karnataka, India</h4>
                <p className="text-sm text-gray-300 mb-4">Our Development Center</p>
                <a 
                  href="https://www.google.com/maps/search/Bengaluru,+Karnataka,+India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
                  aria-label="Open location in Google Maps"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <div className="text-sm font-semibold mb-3 text-white">Follow Us</div>
        <div className="flex items-center gap-3 text-white">
          <a 
            href="https://twitter.com/finfx" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Follow us on X (Twitter)"
            className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/company/finfx" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Follow us on LinkedIn"
            className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/finfx" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Follow us on GitHub"
            className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="mailto:hello@finfx.com" 
            aria-label="Send us an email"
            className="w-10 h-10 rounded-full border border-slate-600/60 bg-slate-800/40 flex items-center justify-center hover:bg-slate-700/60 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMap;
