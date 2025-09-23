import Button from "../../components/ui/Button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card.jsx";
import { Download, ArrowRight, ExternalLink, X, CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ficon from "../../assets/svg/Ficon.png";

const Platforms = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

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
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero split: left Ficon image, right heading */}
      <div className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left: Ficon image with 3D effect */}
        <div className="lg:col-span-1 flex items-center justify-center">
          <div 
            className="w-full max-w-md h-auto perspective-1000"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            <img
              src={ficon}
              alt="FINFX Logo"
              className="w-full h-auto object-contain"
              style={{
                transformStyle: 'preserve-3d',
                filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'rotateY(15deg) rotateX(10deg) scale(1.1)';
                e.target.style.filter = 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.4))';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
                e.target.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))';
              }}
            />
          </div>
        </div>

        {/* Right: heading block aligned right */}
        <div className="lg:col-span-2 text-center lg:text-right">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-6 text-white">
            Platforms & <span className="text-blue-400">Integrations</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-none">
            We provide seamless integrations with industry‑leading trading platforms and vendor bridges.
          </p>
        </div>
      </div>

      {/* Collage Layout - Left large card, right two smaller cards stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
        {/* Left: Large card */}
        <motion.div 
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card 
            className="bg-slate-800/50 backdrop-blur-sm border border-white/20 hover:border-white/30 h-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
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

        {/* Right: Two smaller cards stacked */}
        <div className="lg:col-span-2 space-y-6">
          {/* Top right card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card 
              className="bg-slate-800/50 backdrop-blur-sm border border-white/20 hover:border-white/30 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
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

          {/* Bottom right card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card 
              className="bg-slate-800/50 backdrop-blur-sm border border-white/20 hover:border-white/30 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-white">Integration Methods</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We offer flexible integration options to connect your systems with our infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border border-white/20 hover:border-white/30 h-full">
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
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border border-white/20 hover:border-white/30 h-full">
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

      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Button 
          variant="hero" 
          size="lg" 
          onClick={handleDownloadSpec}
          className="hover:scale-105 transition-all duration-300"
        >
          <Download className="mr-2 w-5 h-5" />
          Download Integration Spec
        </Button>
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
            className="bg-slate-900 rounded-2xl border border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
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