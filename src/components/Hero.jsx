import React, { useState, useEffect, useRef, useCallback } from "react";
import frameSvg from "../assets/svg/Frame 10.svg";
import flashbackSvg from "../assets/svg/Flashback (2).svg";
import jenisShadowSvg from "../assets/svg/Jenis Shadow.svg";

// Metric Card Component with Error Handling
const MetricCard = ({ value, label, indicatorColor, formatValue, isAnimated = false }) => {
  const [hasError, setHasError] = useState(false);

  // Error boundary for metric display
  const displayValue = useCallback(() => {
    try {
      return formatValue ? formatValue(value) : value;
    } catch (error) {
      console.warn(`Error formatting metric ${label}:`, error);
      setHasError(true);
      return '--';
    }
  }, [value, formatValue, label]);

  if (hasError) {
    return (
      <div className="metric-card bg-red-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-red-600">
        <div className="text-center text-red-300">
          <div className="text-lg font-bold mb-2">Error</div>
          <div className="text-sm">Unable to load metric</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="metric-card bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-600 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50"
      role="region"
      aria-label={`${label} metric`}
      tabIndex="0"
    >
      <div 
        className="metric-value text-2xl sm:text-3xl font-bold text-white mb-2"
        aria-live="polite"
        aria-label={`${label}: ${displayValue()}`}
      >
        {displayValue()}
      </div>
      <div className="metric-label text-sm text-gray-300 mb-3">{label}</div>
      <div 
        className={`metric-indicator w-3 h-3 ${indicatorColor} rounded-full ${isAnimated ? 'animate-pulse' : ''}`}
        aria-label={`${label} status indicator`}
      ></div>
    </div>
  );
};

const Hero = () => {
  // Animated counter state
  const [metrics, setMetrics] = useState({
    uptime: 0,
    trades: 0,
    response: 0,
    brokers: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const metricsRef = useRef(null);
  const animationRefs = useRef({});

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Improved animation with requestAnimationFrame and cleanup
  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      uptime: 99.97,
      trades: 1247000,
      response: 12,
      brokers: 47
    };

    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animateValue = (key, target, startValue = 0) => {
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const value = startValue + (target - startValue) * easeOutQuart;

        setMetrics(prev => ({ ...prev, [key]: Math.round(value * 100) / 100 }));

        if (progress < 1) {
          animationRefs.current[key] = requestAnimationFrame((time) => 
            animate(time)
          );
        } else {
          setMetrics(prev => ({ ...prev, [key]: target }));
        }
      };

      animationRefs.current[key] = requestAnimationFrame(animate);
    };

    // Start all animations
    Object.keys(targets).forEach(key => {
      animateValue(key, targets[key]);
    });

    // Cleanup function
    return () => {
      Object.values(animationRefs.current).forEach(id => {
        if (id) cancelAnimationFrame(id);
      });
    };
  }, [isVisible]);

  // Format value helper
  const formatValue = useCallback((value, type) => {
    switch (type) {
      case 'percentage':
        return `${value}%`;
      case 'number':
        return value.toLocaleString();
      case 'time':
        return `${value}ms`;
      default:
        return value;
    }
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Backend Solutions Showcase */}
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="text-white">FINFX </span>
              <span className="text-teal-400">Backend Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted backend solutions that keep fintech businesses running smoothly. From risk management to platform support.
            </p>
      </div>
          <div className="flex items-center justify-center">
            <img
              src={frameSvg}
              alt="FINFX Backend Solutions Interface showing risk management tools, platform configurations, and support systems"
              className="w-full max-w-6xl h-auto object-contain filter grayscale"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Section 2: Service Performance Metrics */}
        <div ref={metricsRef} className="py-16 sm:py-20 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Service Performance Metrics
            </h2>
            <p className="text-lg text-gray-300">
              Real-time monitoring of our backend solutions and support services
            </p>
          </div>
          
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                value={metrics.uptime}
                label="Service Uptime"
                indicatorColor="bg-green-500"
                formatValue={(val) => formatValue(val, 'percentage')}
                isAnimated={isVisible}
              />
              
              <MetricCard
                value={metrics.trades}
                label="Clients Served"
                indicatorColor="bg-blue-500"
                formatValue={(val) => formatValue(val, 'number')}
                isAnimated={isVisible}
              />
              
              <MetricCard
                value={metrics.response}
                label="Support Response"
                indicatorColor="bg-green-500"
                formatValue={(val) => formatValue(val, 'time')}
                isAnimated={isVisible}
              />
              
              <MetricCard
                value={metrics.brokers}
                label="Platforms Supported"
                indicatorColor="bg-blue-500"
                formatValue={(val) => formatValue(val, 'number')}
                isAnimated={isVisible}
              />
            </div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-green-300 font-medium">
                  Live monitoring • 24/7 service availability
                </span>
              </div>
            </div>

            
          </div>
        </div>

        {/* Section 3: Risk Management Dashboard */}
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-4">
              Risk Management Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Transparent, stable, and dynamic risk management that works around the clock
            </p>
            </div>
          <div className="flex items-center justify-center">
            <img
              src={flashbackSvg}
              alt="Risk Management Dashboard displaying real-time monitoring, risk analytics, and operational controls"
              className="w-full max-w-6xl h-auto object-contain filter grayscale"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Section 4: Platform Support & CTAs */}
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-4">
              Platform Support Excellence
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Expert support for MT4, MT5, DX Trade and custom platform integrations
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left grid: Platform Support */}
            <div className="flex items-center justify-center order-2 lg:order-1">
              <img
                src={jenisShadowSvg}
                alt="Platform Support Services showing MT4, MT5, DX Trade integrations and technical expertise"
                className="w-full max-w-3xl h-auto object-contain filter grayscale"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right grid: B2B CTA buttons */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                <button 
                  onClick={() => window.location.href = '#contact'}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Custom Quote
                </button>
                <button 
                  onClick={() => window.location.href = '#contact'}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;