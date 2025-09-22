import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const IconX = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2H21l-6.47 7.39L22 22h-6.99l-4.55-6.17L4.99 22H2l6.98-7.97L2 2h7l4.12 5.57L18.244 2Zm-1.22 18h1.53L8.02 4H6.45l10.574 16Z"/>
  </svg>
);

const IconLinkedIn = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM0 8.98h5V24H0V8.98Zm7.5 0H12V11c.62-1.2 2.22-2.46 4.57-2.46 4.89 0 5.8 3.22 5.8 7.41V24h-5v-7.42c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.93V24h-5V8.98Z"/>
  </svg>
);

const IconGitHub = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path fillRule="evenodd" d="M12 .5C5.73.5.98 5.25.98 11.53c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.23.75-.52 0-.26-.01-1.11-.02-2.02-3.06.67-3.71-1.3-3.71-1.3-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.12 1.68 1.12.98 1.67 2.56 1.19 3.19.91.1-.72.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.42.11-2.97 0 0 .92-.3 3.02 1.13.88-.25 1.82-.37 2.76-.38.94.01 1.88.13 2.76.38 2.1-1.43 3.02-1.13 3.02-1.13.6 1.55.22 2.69.11 2.97.7.77 1.13 1.75 1.13 2.95 0 4.22-2.58 5.14-5.03 5.41.39.34.74 1.01.74 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.2.63.76.52 4.36-1.46 7.51-5.58 7.51-10.43C23.02 5.25 18.27.5 12 .5Z" clipRule="evenodd"/>
  </svg>
);

const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.01L12 13l10-6.99V6H2Zm20 12V8.24l-9.4 6.57a2 2 0 0 1-2.2 0L1.98 8.24V18h20Z"/>
  </svg>
);

const Footer = () => {
  const { theme, currentTheme } = useTheme();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
    ],
    platforms: [
      { name: 'MT4/MT5', href: '#mt' },
      { name: 'DXtrade', href: '#dx' },
      { name: 'Integrations', href: '#integrations' },
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Security', href: '#security' },
    ],
  };

  const socialLinks = [
    { name: 'X', href: '#', icon: IconX },
    { name: 'LinkedIn', href: '#', icon: IconLinkedIn },
    { name: 'GitHub', href: '#', icon: IconGitHub },
    { name: 'Email', href: 'mailto:info@example.com', icon: IconMail },
  ];

  return (
    <footer
      className={`${
        theme === 'owl'
          ? 'bg-owl-primary text-white'
          : 'bg-falcon-dark text-falcon-text'
      }`}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                  theme === 'owl'
                    ? 'bg-owl-accent text-owl-primary'
                    : 'bg-falcon-primary text-falcon-dark'
                }`}
              >
                {theme === 'owl' ? 'F' : '⚡'}
              </div>
              <span className="font-bold text-xl">FINFXS</span>
            </div>
            <p className="text-sm opacity-80 mb-6 max-w-xs">
              Trusted backend solutions that keep fintech businesses running smoothly. Scale with confidence using our enterprise-grade infrastructure.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-200 ${
                    theme === 'owl'
                      ? 'bg-owl-secondary hover:bg-owl-accent'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections matching provided layout */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className={`text-sm opacity-80 hover:opacity-100 transition-opacity duration-200 ${
                        theme === 'owl'
                          ? 'hover:text-owl-accent'
                          : 'hover:text-falcon-primary'
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-opacity-20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-60">
              © 2025 FINFXS. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#privacy"
                className={`opacity-80 hover:opacity-100 transition-opacity duration-200 ${
                  theme === 'owl'
                    ? 'hover:text-owl-accent'
                    : 'hover:text-falcon-primary'
                }`}
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className={`opacity-80 hover:opacity-100 transition-opacity duration-200 ${
                  theme === 'owl'
                    ? 'hover:text-owl-accent'
                    : 'hover:text-falcon-primary'
                }`}
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className={`opacity-80 hover:opacity-100 transition-opacity duration-200 ${
                  theme === 'owl'
                    ? 'hover:text-owl-accent'
                    : 'hover:text-falcon-primary'
                }`}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
