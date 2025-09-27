import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Shield, 
  Zap, 
  Globe, 
  Code, 
  TrendingUp, 
  Clock,
  CheckCircle,
  Star,
  Building2,
  Target
} from 'lucide-react';
import ringPng from '../../assets/svg/RING.png';
import curvedlinesPng from '../../assets/svg/curvedlines.png';
import '../../styles/about.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  // 1. Modern Hero Section with Glowing Ring
  const HeroSection = () => (
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
          <button 
            onClick={() => navigate('/services')}
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Explore Our Solutions
          </button>
          
          <button 
            onClick={() => navigate('/contact')}
            className="px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
          >
            Get In Touch
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

  // 2. Highlight Banner (Graphic Section)
  const HighlightBanner = () => (
    <div className="relative py-16 px-6">
      <div className="container mx-auto">
        <motion.div
          className="animate-on-scroll relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative h-96 bg-gradient-to-br from-blue-50 via-white to-blue-50 backdrop-blur-sm border border-blue-200 rounded-3xl shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Enterprise-Grade Infrastructure</h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  From high-frequency trading systems to risk management platforms, 
                  we build the technology that powers modern finance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  // 3. Stats + Quick Info
  const StatsSection = () => (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        <motion.div
          className="animate-on-scroll text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">By The Numbers</h2>
          <p className="text-gray-600 text-lg">Trusted by leading financial institutions worldwide</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Clock, label: 'Uptime', value: '99.99%', desc: 'System Reliability' },
            { icon: Zap, label: 'Latency', value: '<20ms', desc: 'Average Response' },
            { icon: Globe, label: 'Regions', value: '8+', desc: 'Global Coverage' },
            { icon: Users, label: 'Clients', value: '120+', desc: 'Active Partners' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="animate-on-scroll"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl border border-blue-200 bg-white p-6 text-center hover:bg-blue-50 transition-all duration-300 shadow-md">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  // 4. Skills / Expertise
  const SkillsSection = () => (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        <motion.div
          className="animate-on-scroll text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-gray-600 text-lg">Core competencies that drive our success</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: 'Risk Management', desc: 'Real-time exposure monitoring and automated hedging strategies' },
            { icon: Code, title: 'Platform Development', desc: 'Custom trading platforms and API integrations' },
            { icon: TrendingUp, title: 'Dealing Support', desc: '24/7 dealing desk operations and flow management' },
            { icon: Award, title: 'CRM Solutions', desc: 'Client lifecycle management and KYC automation' },
            { icon: Zap, title: 'Performance Optimization', desc: 'Low-latency systems and infrastructure scaling' },
            { icon: Globe, title: 'Global Deployment', desc: 'Multi-region infrastructure and compliance' },
          ].map((skill, index) => (
            <motion.div
              key={skill.title}
              className="animate-on-scroll"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl border border-blue-200 bg-white p-6 hover:bg-blue-50 transition-all duration-300 h-full shadow-md">
                <skill.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{skill.title}</h3>
                <p className="text-gray-600 leading-relaxed">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  // 5. About Us (Main Content)
  const AboutContent = () => (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded by a team of former Wall Street engineers and fintech veterans, 
                FINFXS emerged from a simple observation: the financial technology landscape 
                was fragmented, slow, and insecure.
              </p>
              <p>
                We set out to change that. Today, we're the trusted technology partner 
                for brokers, trading firms, and financial institutions who demand 
                enterprise-grade performance without compromise.
              </p>
              <p>
                Our mission is to democratize access to institutional-quality trading 
                infrastructure, making it possible for any firm to compete at the highest 
                levels of the market.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-blue-200 bg-white p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-4">
                {[
                  { icon: Target, title: 'Precision', desc: 'Every millisecond counts in finance' },
                  { icon: Shield, title: 'Security', desc: 'Bank-grade protection for your data' },
                  { icon: Users, title: 'Partnership', desc: 'We succeed when you succeed' },
                  { icon: Award, title: 'Excellence', desc: 'Never settle for good enough' },
                ].map((value, index) => (
                  <div key={value.title} className="flex items-start space-x-3">
                    <value.icon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 font-semibold">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );

  // 6. Team Section
  const TeamSection = () => (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        <motion.div
          className="animate-on-scroll text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet The Team</h2>
          <p className="text-gray-600 text-lg">The experts behind our technology</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Alex Chen', role: 'Chief Technology Officer', expertise: 'Former Goldman Sachs, 15+ years in HFT' },
            { name: 'Sarah Johnson', role: 'Head of Risk Management', expertise: 'Ex-Morgan Stanley, Risk Systems Architect' },
            { name: 'Michael Rodriguez', role: 'Lead Platform Engineer', expertise: 'Former Citadel, Low-Latency Systems' },
            { name: 'Emily Watson', role: 'Head of Security', expertise: 'Ex-JPMorgan, Cybersecurity Specialist' },
            { name: 'David Kim', role: 'Head of Operations', expertise: 'Former Two Sigma, Infrastructure Expert' },
            { name: 'Lisa Thompson', role: 'Head of Client Success', expertise: 'Ex-BlackRock, Client Relations' },
          ].map((member, index) => (
            <motion.div
              key={member.name}
              className="animate-on-scroll"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl border border-blue-200 bg-white p-6 text-center hover:bg-blue-50 transition-all duration-300 shadow-md">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.expertise}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  // 7. CTA Section
  const CTASection = () => (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        <motion.div
          className="animate-on-scroll text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 backdrop-blur-sm p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Trading Infrastructure?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the growing number of firms who trust FINFXS to power their most critical trading operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                View Our Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  // 8. Clients / Partners Grid
  const ClientsSection = () => (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        <motion.div
          className="animate-on-scroll text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted By Industry Leaders</h2>
          <p className="text-gray-600 text-lg">Powering the world's most demanding trading operations</p>
        </motion.div>
        
        <motion.div
          className="animate-on-scroll grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            'Goldman Sachs', 'Morgan Stanley', 'Citadel', 'Two Sigma', 'BlackRock', 'JPMorgan',
            'Deutsche Bank', 'Barclays', 'UBS', 'Credit Suisse', 'Nomura', 'Mizuho'
          ].map((client, index) => (
            <div
              key={client}
              className="flex items-center justify-center p-4 rounded-lg border border-blue-200 bg-white hover:bg-blue-50 transition-all duration-300 shadow-md"
            >
              <span className="text-gray-700 font-medium text-sm text-center">{client}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-gray-900">
      {/* Decorative Element with Curved Lines */}
      <div 
        className="absolute left-0 top-8 w-[183px] h-[913px] rounded-[92px] z-0"
        style={{
          background: 'linear-gradient(180deg, #008290 4.2%, #008290 31.75%, #00262A 90.51%)'
        }}
      >
        <img 
          src={curvedlinesPng} 
          alt="Curved Lines Decoration" 
          className="w-full h-full object-cover rounded-[92px] opacity-80"
          loading="lazy"
        />
      </div>
      
      <HeroSection />
      <HighlightBanner />
      <StatsSection />
      <SkillsSection />
      <AboutContent />
      <TeamSection />
      <CTASection />
      <ClientsSection />
    </section>
  );
};

export default About;


