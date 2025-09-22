import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import ClipPathTitle from "../../components/ClipPathTitle";
import Arrow from "../../components/ui/Arrow";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import Typewriter from "typewriter-effect";

// Import assets
import frame8Svg from "../../assets/svg/Frame 8.svg";
import curve from "../../assets/curve.png";
import { GradientLight } from "../../components/design/Services";
import { benefits } from "../../utils/services-constants";
import ClipPath from "../../components/ui/ClipPath";
// Adjust path as needed

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
            Explore the Key Benefits of Choosing SPYLT
          </motion.p>

          <div className="mt-16 flex flex-col items-center space-y-8 w-full max-w-5xl">
            <div className="general-title w-full max-w-3xl">
              <ClipPathTitle
                title="RISK MANAGEMENT"
                color="#faeade"
                bg="#c88e64"
                borderColor="#222123"
                tilt={-2}
                className="first-title border-[.5vw] text-nowrap opacity-0"
              />
            </div>
            <div className="general-title w-full max-w-3xl">
              <ClipPathTitle
                title="DEALING SUPPORT"
                color="#222123"
                bg="#faeade"
                borderColor="#222123"
                tilt={1.5}
                className="second-title border-[.5vw] text-nowrap opacity-0"
              />
            </div>
            <div className="general-title w-full max-w-3xl">
              <ClipPathTitle
                title="PLATFORM SUPPORT"
                color="#faeade"
                bg="#7F3B2D"
                borderColor="#222123"
                tilt={-1}
                className="third-title border-[.5vw] text-nowrap opacity-0"
              />
            </div>
            <div className="general-title w-full max-w-3xl">
              <ClipPathTitle
                title="CRM SUPPORT"
                color="#2E2D2F"
                bg="#FED775"
                borderColor="#222123"
                tilt={2}
                className="fourth-title border-[.5vw] text-nowrap opacity-0"
              />
            </div>
            <div className="general-title w-full max-w-3xl">
              <ClipPathTitle
                title="CUSTOM SUPPORT"
                color="#faeade"
                bg="#c88e64"
                borderColor="#222123"
                tilt={-1.5}
                className="fifth-title border-[.5vw] text-nowrap opacity-0"
              />
            </div>
          </div>

          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
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
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
    >
      {/* Hero-style Header Section */}
      <Section
        className="pt-[12rem] -mt-[5.25rem] md:-mt-[10.55rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="services-hero"
      >
        <div className="container relative">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
            <h1 className="h1 mb-6">
              Experience Excellence in
              <br />
              <Typewriter
                options={{
                  strings: [
                    "Risk Management",
                    "Dealing Support",
                    "Platform Support",
                    "CRM Solutions",
                    "Custom Development",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Unlock comprehensive fintech solutions with{" "}
              <span className="inline-block relative font-semibold">
                FINFX Services
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
              , powering your business with enterprise-grade reliability.
            </p>

            <Button href="#service-details" white>
              Explore Services
            </Button>
          </div>
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
                className="service-card p-8 rounded-2xl transition-all duration-300 bg-n-7 border border-n-6 hover:border-n-5"
              >
                <h3 className="h4 mb-4 text-n-1">{service.title}</h3>
                <p className="body-2 mb-6 text-n-3">{service.description}</p>
                <ul className="service-features space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-n-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-n-1 mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Button
                  href={service.route}
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
                  className="p-8 rounded-2xl transition-all duration-300 bg-blue-800/50 hover:bg-blue-800/60 border border-blue-600/60 backdrop-blur-sm"
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
                    onClick={() => navigate(service.route)}
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

        {/* End of Services Grid duplicate block */}

      {/* RWA Tokenization Section */}
      <div className="py-20 relative">
        <div className="container relative z-2 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:max-w-md lg:max-w-2xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-white mb-6"
            >
              RWA Tokenization Powered by{" "}
              <span className="inline-block relative">
                FINFX
                <img
                  src="/images/curve.svg"
                  className="absolute top-full left-0 w-full xl:-mt-2 pointer-events-none select-none"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {benefits.map((benefit) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(${benefit.backgroundUrl})`,
                }}
                key={benefit.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="text-2xl font-bold text-white mb-5">{benefit.title}</h5>
                  <p className="text-gray-300 mb-6">{benefit.text}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={benefit.iconUrl}
                      width={48}
                      height={48}
                      alt={benefit.title}
                    />

                    <p className="ml-auto font-mono text-xs font-bold text-white uppercase tracking-wider">
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                </div>

                {benefit.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-slate-900"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 grid-container">
                    <div className="absolute inset-0 grid grid-cols-4 gap-2 p-4">
                      {[...Array(8)].map((_, index) => (
                        <div
                          key={index}
                          className="bg-slate-700/30 rounded-lg backdrop-blur-sm border border-slate-600/20 shadow-lg"
                          style={{
                            animation: `pulseBackground ${2 + index * 0.5}s ease-in-out infinite alternate`
                          }}
                        />
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80 pointer-events-none" />
                  </div>
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {benefit.imageUrl && (
                      <img
                        src={benefit.imageUrl}
                        width={380}
                        height={362}
                        alt={benefit.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitSection />
    </section>
  );
};

export default Service;