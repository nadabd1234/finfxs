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

  // 1. Hero Section (Headline + CTA)
  const HeroSection = () => (
    <div className="relative py-20 px-6">
      <div className="container mx-auto text-center">
        <motion.div
          className="animate-on-scroll"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building the <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Future</span> of Finance
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We're the engineering backbone behind the world's most demanding trading platforms. 
            Where milliseconds matter and security is non-negotiable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/services')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Explore Our Solutions
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
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
          <div className="relative h-96 bg-gradient-to-br from-blue-900/50 via-slate-800/50 to-blue-900/50 backdrop-blur-sm border border-white/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Enterprise-Grade Infrastructure</h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
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
          <h2 className="text-4xl font-bold text-white mb-4">By The Numbers</h2>
          <p className="text-gray-300 text-lg">Trusted by leading financial institutions worldwide</p>
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
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.desc}</div>
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
          <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-gray-300 text-lg">Core competencies that drive our success</p>
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
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300 h-full">
                <skill.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                <p className="text-gray-300 leading-relaxed">{skill.desc}</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
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
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
              <div className="space-y-4">
                {[
                  { icon: Target, title: 'Precision', desc: 'Every millisecond counts in finance' },
                  { icon: Shield, title: 'Security', desc: 'Bank-grade protection for your data' },
                  { icon: Users, title: 'Partnership', desc: 'We succeed when you succeed' },
                  { icon: Award, title: 'Excellence', desc: 'Never settle for good enough' },
                ].map((value, index) => (
                  <div key={value.title} className="flex items-start space-x-3">
                    <value.icon className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">{value.title}</h4>
                      <p className="text-gray-300 text-sm">{value.desc}</p>
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
          <h2 className="text-4xl font-bold text-white mb-4">Meet The Team</h2>
          <p className="text-gray-300 text-lg">The experts behind our technology</p>
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
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.expertise}</p>
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
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/30 via-slate-800/30 to-blue-900/30 backdrop-blur-sm p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Trading Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
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
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
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
          <h2 className="text-4xl font-bold text-white mb-4">Trusted By Industry Leaders</h2>
          <p className="text-gray-300 text-lg">Powering the world's most demanding trading operations</p>
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
              className="flex items-center justify-center p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-gray-300 font-medium text-sm text-center">{client}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
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


