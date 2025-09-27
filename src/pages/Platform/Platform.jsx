import Button from "../../components/ui/Button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card.jsx";
import { Download, ArrowRight, ExternalLink, X, CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ficon from "../../assets/svg/Ficon.png";
import ringPng from "../../assets/svg/RING.png";
import shadow1Svg from "../../assets/svg/shadow1.svg";

const Platforms = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const platformDetails = {
    MT4: {
      title: "MetaTrader 4 (MT4)",
      description: "The world's most popular forex trading platform with advanced charting and automated trading capabilities.",
      features: [
        "Expert Advisors (EAs) for automated trading",
        "30+ built-in technical indicators",
        "MQL4 programming language",
        "Multi-terminal support",
        "Real-time quotes and charts",
        "One-click trading execution"
      ],
      benefits: [
        { icon: TrendingUp, text: "Proven track record with millions of traders" },
        { icon: Zap, text: "Lightning-fast execution speeds" },
        { icon: Shield, text: "Bank-level security protocols" }
      ],
      specs: {
        "Supported Assets": "Forex, CFDs, Futures",
        "Order Types": "Market, Pending, Stop, Limit",
        "Timeframes": "M1 to MN1 (9 timeframes)",
        "Languages": "40+ languages supported"
      }
    },
    MT5: {
      title: "MetaTrader 5 (MT5)",
      description: "Next-generation multi-asset platform with advanced features for professional trading.",
      features: [
        "Multi-asset trading (Forex, Stocks, Futures, Options)",
        "Market Depth (Level II pricing)",
        "21 timeframes vs MT4's 9",
        "MQL5 programming with OOP support",
        "Built-in economic calendar",
        "Advanced order management system"
      ],
      benefits: [
        { icon: TrendingUp, text: "Multi-asset trading capabilities" },
        { icon: Zap, text: "Enhanced execution algorithms" },
        { icon: Shield, text: "Advanced risk management tools" }
      ],
      specs: {
        "Supported Assets": "Forex, Stocks, Commodities, Indices, Crypto",
        "Order Types": "6 pending order types",
        "Timeframes": "21 timeframes (M1 to MN1)",
        "Market Depth": "Level II pricing available"
      }
    },
    DXtrade: {
      title: "DXtrade Platform",
      description: "Modern web and mobile trading platform with institutional-grade features and white-label solutions.",
      features: [
        "Web-based trading (no download required)",
        "Native mobile apps for iOS and Android",
        "Advanced charting with 100+ indicators",
        "Risk management tools built-in",
        "White-label and co-branding options",
        "Real-time market data and news"
      ],
      benefits: [
        { icon: TrendingUp, text: "Quick time-to-market deployment" },
        { icon: Zap, text: "Cloud-based infrastructure" },
        { icon: Shield, text: "Institutional-grade security" }
      ],
      specs: {
        "Platform Type": "Web-based, Mobile apps",
        "Deployment": "Cloud-hosted, White-label ready",
        "Assets": "Multi-asset support",
        "Integration": "REST API, FIX Protocol"
      }
    }
  };

  const handleDownloadSpec = () => {
    // Create a mock PDF download
    const link = document.createElement('a');
    link.href = '#'; // In real app, this would be a PDF file URL
    link.download = 'FINFX-Integration-Specification.pdf';
    link.click();
    
    // Show success message (you could use a toast library)
    alert('Integration specification download started! Check your downloads folder.');
  };

  const handlePlatformClick = (platform) => {
    setSelectedPlatform(platform);
  };

  const closePlatformModal = () => {
    setSelectedPlatform(null);
  };

  return (
    <section className="relative bg-gradient-to-br from-black via-[#0A0F18] to-[#132840] overflow-hidden">
      {/* Modern Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-black via-[#0A0F18] to-[#132840] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-blue-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />
        

        {/* Main Content */}
        <div className="relative z-30 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              PLATFORMS &
              <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                INTEGRATIONS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              SEAMLESS CONNECTIVITY WITH INDUSTRY-LEADING TRADING PLATFORMS
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => document.getElementById('platforms-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Explore Platforms
            </button>
            
            <button 
              onClick={handleDownloadSpec}
              className="px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
            >
              Download Specs
            </button>
          </motion.div>

          <motion.p
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Enterprise-grade • Lightning-fast • Bulletproof secure
          </motion.p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="platforms-section">
        {/* Shadow1 SVG Background */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src={shadow1Svg} 
            alt="Shadow Background" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

      {/* Single Unified Section - All Platform Content */}
      <div className="relative mb-16">
        {/* Dome Light Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Dome Light - Central Glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
            <div className="w-full h-full rounded-full bg-gradient-radial from-teal-400/30 via-blue-500/20 to-transparent blur-3xl"></div>
          </div>
          
          {/* Additional Light Rays */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-teal-400/20 blur-2xl"></div>
          <div className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-blue-400/15 blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-28 h-28 rounded-full bg-cyan-400/25 blur-xl"></div>
        </div>

        {/* Shadow Background Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-16 -top-8 w-96 h-96 opacity-10">
            <img 
              src={shadow1Svg} 
              alt="" 
              className="w-full h-full object-contain"
              loading="lazy"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* All Platform Cards in One Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
          {/* MT4 Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card 
              className="bg-slate-900/70 backdrop-blur-sm border border-teal-500/30 hover:border-teal-400/50 h-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => handlePlatformClick('MT4')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handlePlatformClick('MT4')}
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">MetaTrader 4 (MT4)</CardTitle>
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                A widely used Forex trading & EA platform (forex-first, algorithmic trading, market of indicators). Use MT4 when you want mature forex-focused support.
              </p>
              <div className="flex items-center text-blue-400 text-sm font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

          {/* MT5 Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card 
                className="bg-slate-900/70 backdrop-blur-sm border border-teal-500/30 hover:border-teal-400/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => handlePlatformClick('MT5')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handlePlatformClick('MT5')}
            >
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">MetaTrader 5 (MT5)</CardTitle>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  MetaQuotes' multi-asset next-gen platform (stocks, futures, FX, more order types and Market Depth features). Use MT5 when the broker/exchange needs multi-asset/exchange-grade features.
                </p>
                <div className="flex items-center text-blue-400 text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* DXtrade Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card 
                className="bg-slate-900/70 backdrop-blur-sm border border-teal-500/30 hover:border-teal-400/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => handlePlatformClick('DXtrade')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handlePlatformClick('DXtrade')}
            >
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">DXtrade</CardTitle>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  A modern multi-asset trading platform stack for brokers and banks with quick time-to-market and built-in risk tools; often used by brokers that want a branded web + mobile offering.
                </p>
                <div className="flex items-center text-blue-400 text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* FIX & Vendor APIs Card */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
            <Card className="bg-slate-900/70 backdrop-blur-sm border border-teal-500/30 hover:border-teal-400/50 h-full">
            <CardHeader>
              <CardTitle className="text-white">FIX & Vendor APIs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Institutional integrations commonly use the FIX protocol and platform APIs/bridges for order/exec and liquidity connectivity. We provide a technical onboarding checklist and test plan.
              </p>
            </CardContent>
          </Card>
        </motion.div>

          {/* Managed Bridges Card */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
            <Card className="bg-slate-900/70 backdrop-blur-sm border border-teal-500/30 hover:border-teal-400/50 h-full">
            <CardHeader>
              <CardTitle className="text-white">Managed Bridges</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                We offer managed bridges to liquidity providers, ensuring reliable and low-latency connectivity.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        </div>
      </div>

      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
          
      </motion.div>
    </div>

    {/* Platform Details Modal */}
    <AnimatePresence>
      {selectedPlatform && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closePlatformModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-slate-900/95 backdrop-blur-md rounded-2xl border border-teal-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">
                  {platformDetails[selectedPlatform]?.title}
                </h2>
                <button
                  onClick={closePlatformModal}
                  className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400 hover:text-white" />
                </button>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-8">
                {platformDetails[selectedPlatform]?.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {platformDetails[selectedPlatform]?.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose This Platform</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {platformDetails[selectedPlatform]?.benefits.map((benefit, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                      <benefit.icon className="w-8 h-8 text-blue-400 mb-3" />
                      <p className="text-gray-300 text-sm">{benefit.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Specifications</h3>
                <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(platformDetails[selectedPlatform]?.specs || {}).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-400 font-medium">{key}:</span>
                        <span className="text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => {
                    alert(`Contacting FINFX team about ${selectedPlatform} integration...`);
                    closePlatformModal();
                  }}
                >
                  Get Integration Quote
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 bg-transparent border-slate-600 text-white hover:bg-slate-800"
                  onClick={() => {
                    alert(`Scheduling demo for ${selectedPlatform}...`);
                    closePlatformModal();
                  }}
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </section>
  );
};

export default Platforms;