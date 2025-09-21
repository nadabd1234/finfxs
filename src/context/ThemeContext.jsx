import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme] = useState('owl');
  const [isTransitioning] = useState(false);

  const toggleTheme = () => {
    // Theme is fixed to Owl; toggle is disabled.
  };

  const themeConfig = {
    owl: {
      name: 'Owl',
      colors: {
        primary: '#0B0B12',
        secondary: '#13131D',
        accent: '#1F2937',
        light: '#111827',
        text: '#FFFFFF',
        muted: '#9CA3AF',
        background: 'linear-gradient(135deg, #0B0B12 0%, #13131D 100%)',
      },
      fonts: {
        heading: 'Archivo Black, system-ui, sans-serif',
        body: 'Inter, system-ui, sans-serif',
      },
      characteristics: ['Wisdom', 'Depth', 'Structure', 'Thoughtful'],
    },
  };

  const currentTheme = themeConfig[theme];

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  const value = {
    theme,
    toggleTheme,
    isTransitioning,
    currentTheme,
    themeConfig,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
