import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
// ClipPathTitle moved to Hero.jsx with BenefitSection
import Arrow from "../../components/ui/Arrow.jsx";
import Section from "../../components/ui/Section.jsx";
import Button from "../../components/ui/Button.jsx";
import Typewriter from "typewriter-effect";
import { Play, Download, Folder, Settings, Zap, Shield, Code, TrendingUp } from "lucide-react";

// Import assets
import frame8Svg from "../../assets/svg/Frame 8.svg";
import ringPng from "../../assets/svg/RING.png";

import { GradientLight } from "../../components/design/Services";
import { benefits } from "../../utils/services-constants";
import ClipPath from "../../components/ui/ClipPath.jsx";
// Adjust path as needed

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// BenefitSection moved to Hero.jsx to avoid duplication

// Modern Hero Section for Services
const ServicesHero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-[#0A0F18] to-[#132840] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-blue-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />
      
      {/* Central Glowing Ring - Behind Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.img
          src={ringPng}
          alt="Central Ring"
          className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain"
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ 
            opacity: 1, 
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            opacity: { duration: 2, ease: "easeOut", delay: 0.5 },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          style={{
            filter: 'drop-shadow(0 0 30px rgba(20, 184, 166, 0.6)) drop-shadow(0 0 60px rgba(59, 130, 246, 0.4))'
          }}
        />
      </div>


      {/* Main Content - Above Ring */}
      <div className="relative z-30 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            THE NEW ERA OF
            <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              FINANCIAL TECHNOLOGY
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            EMPOWERING TRADING PLATFORMS WITH POWERFUL SOLUTIONS
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105">
            Get Started
          </button>
          
          <button className="px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10">
            Request A Demo
          </button>
        </motion.div>

        <motion.p
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          No credit card required • 7-days free trial
        </motion.p>
      </div>

    </div>
  );
};

const Service = () => {
  const { theme, currentTheme } = useTheme();
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // GSAP animations for elements
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Service cards animation
    const cards = gsap.utils.toArray(".service-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          y: 50, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  const services = [
    {
      title: "Risk Management",
      description:
        "Advanced risk assessment and mitigation systems with 12+ years of team experience. Reduce trading losses by 40% and improve risk-adjusted returns by 25%.",
      details: [
        "Real-time monitoring",
        "Automated alerts",
        "Compliance reporting",
        "Portfolio analysis",
      ],
      route: "/services/risk-management",
    },
    {
      title: "Dealing Support",
      description:
        "24/7 expert dealing desk support with 15+ years of team experience. Increase trading revenue by 35% with professional trade execution and client management.",
      details: [
        "Round-the-clock support",
        "Expert dealing team",
        "Client management",
        "Trade execution",
      ],
      route: "/services/dealing-support",
    },
    {
      title: "Platform Support",
      description:
        "Comprehensive technical support and maintenance for your trading platforms and infrastructure.",
      details: [
        "Technical maintenance",
        "Performance optimization",
        "System monitoring",
        "Uptime guarantee",
      ],
      route: "/services/platform-support",
    },
    {
      title: "CRM Support",
      description:
        "Complete customer relationship management solutions tailored for fintech and trading businesses.",
      details: [
        "Customer onboarding",
        "Lead management",
        "Communication tools",
        "Analytics dashboard",
      ],
      route: "/services/crm-support",
    },
    {
      title: "Custom Development",
      description:
        "Bespoke software solutions designed specifically for your unique business requirements and workflows.",
      details: [
        "Custom applications",
        "API integrations",
        "Scalable architecture",
        "Ongoing maintenance",
      ],
      route: "/services/custom-development",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden pt-0"
    >
      {/* Modern Hero Section */}
      <ServicesHero />

      {/* Main Services Grid Section */}
      <div className="relative py-12 bg-n-8" id="service-details">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mb-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card p-8 rounded-2xl transition-all duration-300 bg-n-7 border border-n-6 hover:border-n-5 text-center"
              >
                <h3 className="h4 mb-4 text-n-1">{service.title}</h3>
                <p className="body-2 mb-6 text-n-3">{service.description}</p>
                <ul className="service-features space-y-3 flex flex-col items-center">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-n-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-n-1 mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => navigate(service.route)}
                  className="mt-8"
                  white
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Benefits Section moved to Hero.jsx */}
    </section>
  );
};

export default Service;