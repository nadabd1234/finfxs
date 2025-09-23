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

// Import assets
import frame8Svg from "../../assets/svg/Frame 8.svg";
import curve from "../../assets/curve.png";
import { GradientLight } from "../../components/design/Services";
import { benefits } from "../../utils/services-constants";
import ClipPath from "../../components/ui/ClipPath.jsx";
// Adjust path as needed

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// BenefitSection moved to Hero.jsx to avoid duplication

// Lightweight CopymAI-style showcase reused on Services page
const CopymAISnippet = () => {
  return (
    <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-16">
      <div className="relative z-10 p-0.5 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-500/50 shadow-2xl">
        <div className="relative bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-slate-800/90 rounded-[1rem] overflow-hidden">
          <div className="h-[1.25rem] bg-gradient-to-br from-slate-800 to-blue-800 rounded-t-[0.9rem]" />

          <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
            <img
              src="src\assets\svg\footer-dip.png"
              className="w-full object-cover md:object-contain md:-translate-y-[10%] lg:-translate-y-[18%] pointer-events-none select-none"
              width={1024}
              height={490}
              alt="AI"
              style={{ filter: 'saturate(1.2) brightness(0.95) contrast(1.1)' }}
            />

            {/* Generating bar */}
            <div className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 flex items-center h-[3.2rem] px-6 bg-slate-900/80 rounded-[1.6rem] text-white text-sm shadow-lg">
              <img src="/CopymAI/assets/loading.png" alt="Loading" className="w-4 h-4 mr-3 animate-spin" />
              <span className="opacity-90">EXPLORE SERVICES...</span>
            </div>

          </div>
        </div>
      </div>
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-[50%] left-1/2 w-[180%] -translate-x-1/2 blur-3xl opacity-20">
        <img src="/CopymAI/assets/hero/hero-background.jpg" alt="bg" className="w-full" />
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
        "Advanced risk assessment and mitigation systems to protect your trading operations and ensure regulatory compliance.",
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
        "24/7 expert dealing desk support to manage your trading operations and client relationships effectively.",
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
      {/* Hero-style Header Section */}
       <Section
         className="pt-20 md:pt-24 lg:pt-28"
         crosses
         crossesOffset="lg:translate-y-[5.25rem]"
         customPaddings
         id="services-hero"
       >
        <div className="container relative">
           <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-8">
             {/* Text content removed as requested */}
           </div>

        {/* CopymAI-style showcase */}
        <CopymAISnippet />
        </div>
      </Section>

      {/* Main Services Grid Section */}
      <div className="relative py-20 bg-n-8" id="service-details">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mb-[3rem]">
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