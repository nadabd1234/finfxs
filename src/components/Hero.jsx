import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dropShadowSvg from "../assets/svg/Drop Shadow.svg";
import card1Svg from "../assets/benefits/card-1.svg";
import figma3Svg from "../assets/svg/figma3.svg";
import curvedLinesPng from "../assets/svg/curvedlines.png";
import cdTradePng from "../assets/svg/cdtrade.png";
import cdTradesPng from "../assets/svg/cdtrades.png";
import matchTradePng from "../assets/svg/matchttrade.png";
import metaQuotesPng from "../assets/svg/metaquotes.png";
import techSolPng from "../assets/svg/techsol.png";
import ClipPathTitle from "./ClipPathTitle";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


const Hero = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts (for home page)
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // BenefitSection component moved from Services
  const BenefitSection = () => {
    useEffect(() => {
      // Target the direct children of .general-title which have the clipPath styling
      const titles = gsap.utils.toArray(".general-title > div");

      // Set initial states with enhanced effects
      gsap.set(titles, {
        opacity: 0,
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        scale: 0.8,
        rotation: 0,
        y: 50,
      });

      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".benefit-section",
          start: "top 70%",
          end: "top 20%",
          scrub: 1.2,
        },
      });

      // Enhanced animation with multiple effects
      revealTl
        .to(titles, {
          duration: 0.8,
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
          scale: 1,
          y: 0,
          ease: "power2.out",
          stagger: {
            amount: 1.5,
            from: "start"
          },
        })
        .to(titles, {
          duration: 0.4,
          rotation: (index) => {
            // Restore original tilt angles
            const tiltValues = [-2, 1.5, -1, 2, -1.5];
            return tiltValues[index] || 0;
          },
          ease: "back.out(1.7)",
          stagger: {
            amount: 0.8,
            from: "start"
          },
        }, "-=0.6");

      // Add hover effects
      titles.forEach((title, index) => {
        const tiltValues = [-2, 1.5, -1, 2, -1.5];
        const originalTilt = tiltValues[index] || 0;
        
        title.addEventListener('mouseenter', () => {
          gsap.to(title, {
            duration: 0.3,
            scale: 1.05,
            rotation: 0,
            ease: "power2.out"
          });
        });
        
        title.addEventListener('mouseleave', () => {
          gsap.to(title, {
            duration: 0.3,
            scale: 1,
            rotation: originalTilt,
            ease: "power2.out"
          });
        });
      });

      // Cleanup function
      return () => {
        if (revealTl.scrollTrigger) {
          revealTl.scrollTrigger.kill();
        }
      };
    }, []);

    return (
      <div className="benefit-section py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">Core Services</span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive fintech solutions designed to power your business with enterprise-grade reliability and cutting-edge technology.
            </motion.p>

            <div className="mt-16 flex flex-col items-center space-y-8 w-full max-w-5xl">
              <div className="general-title w-full max-w-3xl cursor-pointer" onClick={() => navigate('/services/risk-management')}>
                <ClipPathTitle
                  title="RISK MANAGEMENT"
                  color="#ffffff"
                  bg="#1e40af"
                  borderColor="#1e3a8a"
                  tilt={-2}
                  className="first-title border-[.5vw] text-nowrap opacity-0 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="general-title w-full max-w-3xl cursor-pointer" onClick={() => navigate('/services/dealing-support')}>
                <ClipPathTitle
                  title="DEALING SUPPORT"
                  color="#ffffff"
                  bg="#2563eb"
                  borderColor="#1d4ed8"
                  tilt={1.5}
                  className="second-title border-[.5vw] text-nowrap opacity-0 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="general-title w-full max-w-3xl cursor-pointer" onClick={() => navigate('/services/platform-support')}>
                <ClipPathTitle
                  title="PLATFORM SUPPORT"
                  color="#ffffff"
                  bg="#3b82f6"
                  borderColor="#2563eb"
                  tilt={-1}
                  className="third-title border-[.5vw] text-nowrap opacity-0 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="general-title w-full max-w-3xl cursor-pointer" onClick={() => navigate('/services/crm-support')}>
                <ClipPathTitle
                  title="CRM SUPPORT"
                  color="#ffffff"
                  bg="#1d4ed8"
                  borderColor="#1e3a8a"
                  tilt={2}
                  className="fourth-title border-[.5vw] text-nowrap opacity-0 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="general-title w-full max-w-3xl cursor-pointer" onClick={() => navigate('/services/custom-development')}>
                <ClipPathTitle
                  title="CUSTOM DEVELOPMENT"
                  color="#ffffff"
                  bg="#60a5fa"
                  borderColor="#3b82f6"
                  tilt={-1.5}
                  className="fifth-title border-[.5vw] text-nowrap opacity-0 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-md md:text-lg text-gray-200">And much more ...</p>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white"
    >

      {/* Hero Content */}
      <div className="relative z-10 w-screen h-screen flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center bg-slate-800/20 backdrop-blur-sm">
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Curved Lines Image - Right Side */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 w-1/2 h-full opacity-70">
              <img
                src={curvedLinesPng}
                alt="Curved Lines"
                className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            </div>

            {/* Main SVG with mixed white and teal overlay */}
            <div className="relative w-full h-full">
              {/* Text in Curved Box Area */}
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <h1 className="text-sm md:text-base lg:text-lg font-medium text-white text-center whitespace-nowrap">
                  The Future of Finance is
                </h1>
        </div>

              {/* Main Content Below */}
              <div className="absolute inset-0 z-20 flex items-end justify-center pb-20">
                <div className="text-center max-w-4xl px-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                    <span className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400 bg-clip-text text-transparent">
                      UNSTOPPABLE
                    </span>
                    <br />
                    <span className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
                      When Built Right
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
                    We don't just build fintech solutions—we architect the backbone of tomorrow's financial revolution. 
                    <span className="block mt-2 font-semibold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                      Enterprise-grade. Lightning-fast. Bulletproof secure.
                    </span>
                  </p>
                  <button 
                    onClick={() => scrollToSection('services-section')}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Explore Services
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Transparent Cards Section - Now part of main section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Mission-Critical <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">Backend Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Engineered for brokers and trading platforms that demand sub-millisecond speed, iron-clad security, and&nbsp;99.97<span className="align-super text-xs">%</span>&nbsp;uptime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Card 1 - Risk Management */}
          <div className="relative group cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => navigate('/services/risk-management')}>
            <div className="absolute inset-0">
              <img
                src={card1Svg}
                alt="Risk Management"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative z-10 p-6 h-80 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">Liquidity & Risk Hub</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Real-time exposure netting, smart hedging, and deep multi-asset liquidity—controlled from a single console.
              </p>
        </div>
      </div>

          {/* Card 2 - Platform Support */}
          <div className="relative group cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => navigate('/services/platform-support')}>
            <div className="absolute inset-0">
              <img
                src={card1Svg}
                alt="Platform Support"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative z-10 p-6 h-80 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">Trading Platform Engineering</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Zero-downtime deployment, custom plugins, and latency-optimised bridges for MT4, MT5 & DXtrade.
              </p>
        </div>
          </div>

          {/* Card 3 - Custom Development */}
          <div className="relative group cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => navigate('/services/custom-development')}>
            <div className="absolute inset-0">
              <img
                src={card1Svg}
                alt="Custom Development"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative z-10 p-6 h-80 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">Bespoke Integrations</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Connect your CRM, payment rails, and data lakes with tailored APIs built to scale as fast as you do.
              </p>
            </div>
          </div>

          {/* Card 4 - Dealing Support */}
          <div className="relative group cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => navigate('/services/dealing-support')}>
            <div className="absolute inset-0">
              <img
                src={card1Svg}
                alt="Dealing Support"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative z-10 p-6 h-80 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">Dealing Desk 24/7</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Veteran dealers monitoring flow around the clock to maximise P&amp;L and safeguard client experience.
              </p>
            </div>
          </div>

          {/* Card 5 - CRM Support */}
          <div className="relative group cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => navigate('/services/crm-support')}>
            <div className="absolute inset-0">
              <img
                src={card1Svg}
                alt="CRM Support"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative z-10 p-6 h-80 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">Client Lifecycle CRM</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                KYC automation, lead scoring, and omnichannel comms that turn prospects into loyal traders.
              </p>
            </div>
          </div>
        </div>
        {/* Decorative SVG Banner */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full h-screen">
            {/* Base SVG */}
            
            
            {/* Base blue overlay for general mixing */}
            <div 
              className="absolute inset-0 w-full h-full mix-blend-multiply opacity-40"
              style={{
                background: 'linear-gradient(45deg, rgba(30, 64, 175, 0.6) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(30, 64, 175, 0.4) 100%)'
              }}
            />
            
            
            
            {/* Additional accent overlay */}
            <div 
              className="absolute inset-0 w-full h-full mix-blend-color-burn opacity-30"
              style={{
                background: `
                  conic-gradient(
                    from 45deg at 30% 50%, 
                    transparent 0deg, 
                    rgba(30, 64, 175, 0.6) 30deg, 
                    rgba(255, 255, 255, 0.3) 60deg, 
                    rgba(30, 64, 175, 0.6) 90deg, 
                    transparent 120deg, 
                    transparent 360deg
                  ),
                  conic-gradient(
                    from 135deg at 70% 50%, 
                    transparent 0deg, 
                    rgba(30, 64, 175, 0.4) 45deg, 
                    rgba(255, 255, 255, 0.4) 90deg, 
                    rgba(30, 64, 175, 0.4) 135deg, 
                    transparent 180deg, 
                    transparent 360deg
                  )
                `
              }}
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center max-w-6xl mx-auto px-8">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                  The Future of <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">Finance</span>
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                  Built on enterprise-grade infrastructure that powers the world's most demanding financial applications
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={() => navigate('/services')}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-lg"
                  >
                    Explore Our Solutions
                  </button>
                  
                </div>
                
                {/* Platform Icons */}
                <div className="mt-16 flex justify-center items-center gap-12">
                  <div className="text-center cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => navigate('/platform')}>
                    <div className="w-24 h-24 flex items-center justify-center mb-3 mx-auto">
                      <img 
                        src={metaQuotesPng} 
                        alt="MetaQuotes" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="text-center cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => navigate('/platform')}>
                    <div className="w-24 h-24 flex items-center justify-center mb-3 mx-auto">
                      <img 
                        src={cdTradePng} 
                        alt="CDTrade" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="text-center cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => navigate('/platform')}>
                    <div className="w-24 h-24 flex items-center justify-center mb-3 mx-auto">
                      <img 
                        src={matchTradePng} 
                        alt="Match Trade" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="text-center cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => navigate('/platform')}>
                    <div className="w-24 h-24 flex items-center justify-center mb-3 mx-auto">
                      <img 
                        src={cdTradesPng} 
                        alt="CDTrades" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="text-center cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => navigate('/platform')}>
                    <div className="w-24 h-24 flex items-center justify-center mb-3 mx-auto">
                      <img 
                        src={techSolPng} 
                        alt="Tech Solutions" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section - Moved from Services */}
      <div id="services-section">
        <BenefitSection />
      </div>

      {/* Geometric Design Section */}
      <div className="relative w-full h-screen bg-white overflow-hidden">
        {/* Background Rectangle */}
        <div className="absolute inset-0 w-full h-full bg-gray-300"></div>
        
        {/* Vector 2 - Large curved shape */}
        <div 
          className="absolute border border-[#10126E]"
          style={{
            width: '683.82px',
            height: '585.58px',
            left: '175.53px',
            top: '236.45px'
          }}
        ></div>
        
        {/* Vector 3 - Medium curved shape */}
        <div 
          className="absolute border border-[#0B0C5F]"
          style={{
            width: '438.87px',
            height: '193.92px',
            left: '642.46px',
            top: '719.97px'
          }}
        ></div>
        
        {/* Ellipse 1 - Small circle */}
        <div 
          className="absolute bg-[#0B0C5F] rounded-full"
          style={{
            width: '165.85px',
            height: '173.48px',
            left: '111.7px',
            top: '425.26px'
          }}
        ></div>
        
        {/* Ellipse 2 - Medium circle */}
        <div 
          className="absolute bg-[#0B0C5F] rounded-full"
          style={{
            width: '140.34px',
            height: '156.95px',
            left: '277.56px',
            top: '251.76px'
          }}
        ></div>
        
        {/* Ellipse 3 - Large oval */}
        <div 
          className="absolute bg-[#0B0C5F] rounded-full"
          style={{
            width: '1005.74px',
            height: '247.71px',
            left: '334.76px',
            top: '415.52px'
          }}
        ></div>
        
        {/* Ellipse 4 - Small circle */}
        <div 
          className="absolute bg-[#0B0C5F] rounded-full"
          style={{
            width: '134.38px',
            height: '146.82px',
            left: '725.04px',
            top: '438.59px'
          }}
        ></div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center max-w-4xl px-8">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#0B0C5F] mb-8 leading-tight">
              Geometric <span className="text-[#10126E]">Design</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Modern geometric elements creating visual harmony and professional aesthetics
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-[#0B0C5F] hover:bg-[#10126E] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
