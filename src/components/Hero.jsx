import React, { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import frameSvg from "../assets/svg/Frame 10.svg";
import dropShadowSvg from "../assets/svg/Drop Shadow.svg";
import card1Svg from "../assets/benefits/card-1.svg";
import ClipPathTitle from "./ClipPathTitle";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


const Hero = () => {
  const { theme } = useTheme();

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
      <div className="benefit-section py-20 bg-gradient-to-br from-slate-800 to-blue-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.p 
              className="text-lg md:text-xl font-semibold text-white max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Unlock the Advantages: <br />
              Explore the Key Benefits of Choosing FINFX
            </motion.p>

            <div className="mt-16 flex flex-col items-center space-y-8 w-full max-w-5xl">
              <div className="general-title w-full max-w-3xl">
                <ClipPathTitle
                  title="RISK MANAGEMENT"
                  color="#ffffff"
                  bg="#1e40af"
                  borderColor="#1e3a8a"
                  tilt={-2}
                  className="first-title border-[.5vw] text-nowrap opacity-0"
                />
              </div>
              <div className="general-title w-full max-w-3xl">
                <ClipPathTitle
                  title="DEALING SUPPORT"
                  color="#ffffff"
                  bg="#2563eb"
                  borderColor="#1d4ed8"
                  tilt={1.5}
                  className="second-title border-[.5vw] text-nowrap opacity-0"
                />
              </div>
              <div className="general-title w-full max-w-3xl">
                <ClipPathTitle
                  title="PLATFORM SUPPORT"
                  color="#ffffff"
                  bg="#3b82f6"
                  borderColor="#2563eb"
                  tilt={-1}
                  className="third-title border-[.5vw] text-nowrap opacity-0"
                />
              </div>
              <div className="general-title w-full max-w-3xl">
                <ClipPathTitle
                  title="CRM SUPPORT"
                  color="#ffffff"
                  bg="#1d4ed8"
                  borderColor="#1e3a8a"
                  tilt={2}
                  className="fourth-title border-[.5vw] text-nowrap opacity-0"
                />
              </div>
              <div className="general-title w-full max-w-3xl">
                <ClipPathTitle
                  title="CUSTOM SUPPORT"
                  color="#ffffff"
                  bg="#60a5fa"
                  borderColor="#3b82f6"
                  tilt={-1.5}
                  className="fifth-title border-[.5vw] text-nowrap opacity-0"
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
            {/* Shadow SVG (placed behind the main SVG) */}
            <img
              src={dropShadowSvg}
              alt="Drop Shadow"
              className="absolute w-full h-full object-contain opacity-25 -z-10"
              style={{
                filter: 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(80%) contrast(90%)'
              }}
              loading="lazy"
              decoding="async"
            />

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
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                    Explore Services
                  </button>
                </div>
              </div>
              <img
                src={frameSvg}
                alt="FINFXS Illustration"
                className="relative w-full h-full object-contain"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(95%)'
                }}
                loading="eager"
                decoding="async"
              />
              
              {/* Base blue overlay for general mixing */}
              <div 
                className="absolute inset-0 w-full h-full mix-blend-multiply opacity-40"
                style={{
                  background: 'linear-gradient(45deg, rgba(30, 64, 175, 0.6) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(30, 64, 175, 0.4) 100%)'
                }}
              />
              
              {/* Targeted mask for thin rope lines - vertical lines */}
              <div 
                className="absolute inset-0 w-full h-full mix-blend-overlay opacity-80"
                style={{
                  background: `
                    repeating-linear-gradient(
                      90deg,
                      transparent 0%,
                      transparent 2%,
                      rgba(30, 64, 175, 0.9) 2.2%,
                      rgba(30, 64, 175, 0.9) 2.8%,
                      transparent 3%,
                      transparent 8%
                    ),
                    repeating-linear-gradient(
                      0deg,
                      transparent 0%,
                      transparent 3%,
                      rgba(30, 64, 175, 0.7) 3.2%,
                      rgba(30, 64, 175, 0.7) 3.8%,
                      transparent 4%,
                      transparent 12%
                    )
                  `,
                  maskImage: 'radial-gradient(ellipse 80% 60% at center, black 20%, transparent 70%)'
                }}
              />
              
              {/* Additional rope line emphasis - curved paths */}
              <div 
                className="absolute inset-0 w-full h-full mix-blend-color-burn opacity-50"
                      style={{
                  background: `
                    conic-gradient(
                      from 45deg at 30% 40%, 
                      transparent 0deg, 
                      rgba(30, 64, 175, 0.8) 30deg, 
                      rgba(255, 255, 255, 0.3) 60deg, 
                      rgba(30, 64, 175, 0.8) 90deg, 
                      transparent 120deg, 
                      transparent 360deg
                    ),
                    conic-gradient(
                      from 135deg at 70% 60%, 
                      transparent 0deg, 
                      rgba(30, 64, 175, 0.6) 45deg, 
                      rgba(255, 255, 255, 0.4) 90deg, 
                      rgba(30, 64, 175, 0.6) 135deg, 
                      transparent 180deg, 
                      transparent 360deg
                    )
                  `,
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Transparent Cards Section - Now part of main section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">Core Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive fintech solutions designed to power your business with enterprise-grade reliability and cutting-edge technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Card 1 - Cyan/Blue */}
          <div className="relative group">
            <div className="absolute inset-0">
              <img
                src={card1Svg}
                alt="Card 1"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative z-10 p-6 h-80 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">Risk Management</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Advanced risk assessment and monitoring solutions to protect your financial operations.
          </p>
        </div>
      </div>

          {/* Card 2 - Orange/Yellow */}
          <div className="relative group">
            <div className="absolute inset-0">
              <img
                src={card1Svg}
                alt="Card 1"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative z-10 p-6 h-80 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">Platform Support</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Comprehensive platform integration and technical support for seamless operations.
          </p>
        </div>
          </div>

          {/* Card 3 - Blue */}
          <div className="relative group">
            <div className="absolute inset-0">
              <img
                src={card1Svg}
                alt="Card 1"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative z-10 p-6 h-80 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Tailored fintech solutions designed specifically for your business requirements.
              </p>
            </div>
          </div>

          {/* Card 4 - Dealing Support */}
          <div className="relative group">
            <div className="absolute inset-0">
              <img
                src={card1Svg}
                alt="Card 4"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative z-10 p-6 h-80 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">Dealing Support</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                24/7 expert dealing desk support to manage your trading operations and client relationships effectively.
              </p>
            </div>
          </div>

          {/* Card 5 - CRM Support */}
          <div className="relative group">
            <div className="absolute inset-0">
              <img
                src={card1Svg}
                alt="Card 5"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative z-10 p-6 h-80 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">CRM Support</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Complete customer relationship management solutions tailored for fintech and trading businesses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section - Moved from Services */}
      <BenefitSection />
    </section>
    </>
  );
};

export default Hero;
