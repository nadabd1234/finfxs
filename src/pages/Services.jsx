import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeContext";
import frame8Svg from "../assets/svg/Frame 8.svg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Service = () => {
  const { theme, currentTheme } = useTheme();
  const sectionRef = useRef(null);

  useEffect(() => {
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
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="animate-on-scroll text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: currentTheme.fonts.heading,
              color: currentTheme.colors.text,
            }}
          >
            Our Services
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: currentTheme.colors.muted }}
          >
            Comprehensive backend solutions designed to power your fintech
            business with enterprise-grade reliability and performance.
          </p>
        </motion.div>

        {/* Service Capabilities Visual */}
        <motion.div
          className="animate-on-scroll mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center">
            <img
              src={frame8Svg}
              alt="Service Portfolio showing Risk Management, Dealing Support, Platform Setup, CRM Support, and Custom Development"
              className="w-full max-w-6xl h-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="animate-on-scroll"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-8 rounded-2xl transition-all duration-300 ${
                  theme === "owl"
                    ? "bg-owl-secondary/20 hover:bg-owl-accent/10"
                    : "bg-gray-800/30 hover:bg-falcon-primary/5"
                }`}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    fontFamily: currentTheme.fonts.heading,
                    color: currentTheme.colors.text,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-lg mb-6 leading-relaxed"
                  style={{ color: currentTheme.colors.muted }}
                >
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center text-sm"
                      style={{ color: currentTheme.colors.muted }}
                    >
                      <span
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: currentTheme.colors.accent }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    theme === "owl"
                      ? "bg-owl-accent text-owl-primary hover:bg-owl-light"
                      : "bg-falcon-primary text-falcon-dark hover:bg-falcon-secondary"
                  }`}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
