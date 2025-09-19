import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const coreServices = [
    {
      icon: '🛡️',
      title: 'Risk Management',
      description: '24/7 transparent risk monitoring with dynamic solutions that help brokers tap into the value of their order flow',
      stats: '99.97% Uptime'
    },
    {
      icon: '⚙️',
      title: 'Platform Support',
      description: 'Expert setup and maintenance for MT4, MT5, DX Trade with seamless liquidity provider connections',
      stats: '47+ Platforms'
    },
    {
      icon: '📞',
      title: 'Dealing Support',
      description: 'Professional dealing room services with decades of collective industry experience',
      stats: '24/7 Support'
    },
    {
      icon: '💻',
      title: 'Custom Development',
      description: 'Tailored backend solutions and integrations designed for your specific business needs',
      stats: '100% Custom'
    }
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'Chief Technology Officer',
      image: '👨‍💼',
      description: '15+ years in fintech backend solutions. Former senior architect at major trading platforms. Expert in MT4/MT5 integrations and risk management systems.',
      expertise: 'Risk Management, Platform Architecture'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Head of Risk Solutions',
      image: '👩‍💻',
      description: '12+ years specializing in broker risk management. Certified financial risk manager with deep expertise in order flow optimization and regulatory compliance.',
      expertise: 'Risk Analytics, Compliance'
    },
    {
      name: 'David Chen',
      role: 'Lead Platform Engineer',
      image: '👨‍🔧',
      description: '10+ years in trading platform development. Expert in MetaTrader platforms, DX Trade integrations, and high-frequency trading systems.',
      expertise: 'MT4/MT5, DX Trade, HFT'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Client Success',
      image: '👩‍🤝‍👩',
      description: '8+ years in fintech client relations. Specializes in onboarding brokers and trading platforms, ensuring smooth implementation of backend solutions.',
      expertise: 'Client Onboarding, Support'
    }
  ];

  const achievements = [
    { number: '1,200+', label: 'Brokers Served' },
    { number: '99.97%', label: 'Service Uptime' },
    { number: '24/7', label: 'Support Coverage' },
    { number: '12ms', label: 'Avg Response Time' }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Why Choose <span className="text-teal-400">FINFX</span>?
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            We're the trusted backend solutions provider that keeps fintech businesses running smoothly, 
            helping brokers and trading platforms scale with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-400">
            <span className="bg-slate-800/50 px-4 py-2 rounded-full">✓ 99.97% Uptime</span>
            <span className="bg-slate-800/50 px-4 py-2 rounded-full">✓ 24/7 Support</span>
            <span className="bg-slate-800/50 px-4 py-2 rounded-full">✓ 1,200+ Clients</span>
            <span className="bg-slate-800/50 px-4 py-2 rounded-full">✓ 12ms Response</span>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 text-center border border-slate-600">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              To provide <span className="text-teal-400 font-semibold">unprecedented risk management and dealing support</span> 
              for brokers worldwide. We eliminate the high costs of maintaining in-house expertise teams while delivering 
              professional-grade backend solutions that help fintech businesses focus on what they do best.
            </p>
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-600 hover:border-teal-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="text-teal-400 font-bold text-lg">{service.stats}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Our Track Record
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center hover:transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300 text-lg">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Meet Our Expert Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-600 hover:border-teal-500 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-teal-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{member.description}</p>
                <div className="text-xs text-gray-400 bg-slate-700/50 px-3 py-1 rounded-full">
                  {member.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Scale Your Fintech Business?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of brokers and trading platforms who trust FINFX for their backend solutions. 
              Let us handle the heavy lifting while you focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '#contact'}
                className="bg-white text-teal-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Custom Quote
              </button>
              <button 
                onClick={() => window.location.href = '#contact'}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
