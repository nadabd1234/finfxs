// Theme configurations
export const THEME_CONFIG = {
    owl: {
        name: 'Owl',
        description: 'Wisdom-driven design with thoughtful layouts and deep greens/blues',
        characteristics: ['Wisdom', 'Depth', 'Structure', 'Thoughtful'],
        colors: {
            primary: '#1a4d3a',
            secondary: '#2d5a47',
            accent: '#4a7c59',
            light: '#6b8e6b',
            text: '#1a1a1a',
            muted: '#6b7280',
        },
        fonts: {
            heading: 'Georgia, Times New Roman, serif',
            body: 'Inter, system-ui, sans-serif',
        }
    },
    falcon: {
        name: 'Falcon',
        description: 'Speed-focused design with sleek interactions and neon accents',
        characteristics: ['Speed', 'Energy', 'Motion', 'Performance'],
        colors: {
            primary: '#00d4ff',
            secondary: '#ff6b35',
            accent: '#ff9f40',
            dark: '#0a0a0a',
            text: '#ffffff',
            muted: '#a0a0a0',
        },
        fonts: {
            heading: 'Inter, system-ui, sans-serif',
            body: 'Inter, system-ui, sans-serif',
        }
    }
};

// Navigation items
export const NAV_ITEMS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Contact', href: '#contact' },
];

// Social links
export const SOCIAL_LINKS = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'Discord', href: '#', icon: '💬' },
];

// Animation durations
export const ANIMATION_DURATION = {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    verySlow: 1.5
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
};

// Performance metrics
export const PERFORMANCE_METRICS = {
    owl: {
        reliability: '99.9%',
        responseTime: '<100ms',
        encryption: '256-bit',
        support: '24/7'
    },
    falcon: {
        uptime: '99.9%',
        latency: '<100ms',
        encryption: '256-bit',
        monitoring: '24/7'
    }
};