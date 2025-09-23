import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ficon from '../assets/svg/Ficon.png';

const Header = () => {
  const { theme, isTransitioning } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Platform', to: '/platform' },
    { name: 'Services', to: '/services' },
    { name: 'AboutUs', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  const goTo = (to) => {
    navigate(to);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-owl-light/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 hover:transform hover:scale-105 transition-transform duration-200">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-12 h-12  flex items-center justify-center overflow-hidden">
                <img
                  src={ficon}
                  alt="FINFX Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span
                className={`font-bold text-xl ${
                  theme === 'owl' ? 'text-white' : 'text-falcon-text'
                }`}
              >
                FINFXS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-200 ${
                  theme === 'owl'
                    ? `text-white hover:bg-owl-accent/20 hover:text-white ${isActive ? 'bg-owl-accent/20 text-white' : ''}`
                    : `text-falcon-text hover:bg-falcon-primary/20 hover:text-falcon-primary ${isActive ? 'bg-falcon-primary/20 text-falcon-primary' : ''}`
                }`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-transform duration-200 hover:scale-95 ${
                theme === 'owl'
                  ? 'text-owl-text hover:bg-owl-accent/20'
                  : 'text-owl-text hover:bg-owl-accent/20'
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden mt-4 rounded-lg transition-all duration-300 ${
              theme === 'owl'
                ? 'bg-owl-secondary/90 backdrop-blur-md'
                : 'bg-falcon-dark/90 backdrop-blur-md'
            }`}
          >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => goTo(item.to)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                      theme === 'owl'
                        ? 'text-owl-text hover:bg-owl-accent/20'
                        : 'text-falcon-text hover:bg-falcon-primary/20'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
