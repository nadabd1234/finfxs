import React, { useEffect, useRef, useState } from 'react';
import { Shield, Settings, Phone, Code, User, ArrowRight, CheckCircle, Star, Award, TrendingUp, Download, ExternalLink, Play, Pause, Volume2, VolumeX, Share2, Bookmark, Heart, MessageCircle, Calendar, Clock, MapPin, Globe, Users, Target, Zap } from 'lucide-react';

const About = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);
  
  // Interactive state management
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [likedSections, setLikedSections] = useState(new Set());
  const [bookmarkedSections, setBookmarkedSections] = useState(new Set());
  const [downloadCount, setDownloadCount] = useState(1247);
  const [shareCount, setShareCount] = useState(89);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userLocation, setUserLocation] = useState('Loading...');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'general',
    message: ''
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [analytics, setAnalytics] = useState({
    pageViews: 0,
    timeOnPage: 0,
    interactions: 0
  });

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, index]));
            // Track analytics
            setAnalytics(prev => ({
              ...prev,
              pageViews: prev.pageViews + 1,
              interactions: prev.interactions + 1
            }));
          }
        },
        { 
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px'
        }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  // Real-time clock and location
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate location detection
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(`${position.coords.latitude.toFixed(2)}, ${position.coords.longitude.toFixed(2)}`);
        },
        () => setUserLocation('Location unavailable')
      );
    }

    return () => clearInterval(timer);
  }, []);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      setAnalytics(prev => ({
        ...prev,
        timeOnPage: Math.floor((Date.now() - startTime) / 1000)
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const addToRefs = (el, index) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  };

  // Interactive functions
  const handleLike = (sectionId) => {
    setLikedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
    setAnalytics(prev => ({ ...prev, interactions: prev.interactions + 1 }));
  };

  const handleBookmark = (sectionId) => {
    setBookmarkedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
    setAnalytics(prev => ({ ...prev, interactions: prev.interactions + 1 }));
  };

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);
    setAnalytics(prev => ({ ...prev, interactions: prev.interactions + 1 }));
    // Simulate download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'FINFX-Company-Overview.pdf';
    link.click();
  };

  const handleShare = () => {
    setShareCount(prev => prev + 1);
    setAnalytics(prev => ({ ...prev, interactions: prev.interactions + 1 }));
    if (navigator.share) {
      navigator.share({
        title: 'FINFX - Backend Solutions Provider',
        text: 'Check out FINFX for professional fintech backend solutions',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setAnalytics(prev => ({ ...prev, interactions: prev.interactions + 1 }));
    setTimeout(() => setIsFormSubmitted(false), 3000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const coreServices = [
    { 
      Icon: Shield, 
      title: 'Risk Management', 
      description: '24/7 transparent risk monitoring with dynamic solutions that help brokers tap into the value of their order flow', 
      stats: '99.97% Uptime',
      features: ['Real-time Monitoring', 'Automated Alerts', 'Compliance Reporting', 'Portfolio Analysis']
    },
    { 
      Icon: Settings, 
      title: 'Platform Support', 
      description: 'Expert setup and maintenance for MT4, MT5, DX Trade with seamless liquidity provider connections', 
      stats: '47+ Platforms',
      features: ['MT4/MT5 Setup', 'DX Trade Integration', 'Liquidity Bridges', 'Performance Optimization']
    },
    { 
      Icon: Phone, 
      title: 'Dealing Support', 
      description: 'Professional dealing room services with decades of collective industry experience', 
      stats: '24/7 Support',
      features: ['Expert Dealers', 'Client Management', 'Trade Execution', 'Market Analysis']
    },
    { 
      Icon: Code, 
      title: 'Custom Development', 
      description: 'Tailored backend solutions and integrations designed for your specific business needs', 
      stats: '100% Custom',
      features: ['API Development', 'System Integration', 'Scalable Architecture', 'Ongoing Maintenance']
    }
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'Chief Technology Officer',
      Icon: User,
      description: '15+ years in fintech backend solutions. Former senior architect at major trading platforms. Expert in MT4/MT5 integrations and risk management systems.',
      expertise: 'Risk Management, Platform Architecture'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Head of Risk Solutions',
      Icon: User,
      description: '12+ years specializing in broker risk management. Certified financial risk manager with deep expertise in order flow optimization and regulatory compliance.',
      expertise: 'Risk Analytics, Compliance'
    },
    {
      name: 'David Chen',
      role: 'Lead Platform Engineer',
      Icon: User,
      description: '10+ years in trading platform development. Expert in MetaTrader platforms, DX Trade integrations, and high-frequency trading systems.',
      expertise: 'MT4/MT5, DX Trade, HFT'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Client Success',
      Icon: User,
      description: '8+ years in fintech client relations. Specializes in onboarding brokers and trading platforms, ensuring smooth implementation of backend solutions.',
      expertise: 'Client Onboarding, Support'
    }
  ];

  const achievements = [
    { number: '1,200+', label: 'Brokers Served', Icon: TrendingUp, color: 'text-blue-400' },
    { number: '99.97%', label: 'Service Uptime', Icon: Star, color: 'text-green-400' },
    { number: '24/7', label: 'Support Coverage', Icon: Award, color: 'text-purple-400' },
    { number: '12ms', label: 'Avg Response Time', Icon: CheckCircle, color: 'text-orange-400' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We continuously evolve our solutions to meet the changing needs of the fintech industry.',
      icon: '🚀'
    },
    {
      title: 'Reliability',
      description: 'Our systems are built for 99.97% uptime, ensuring your business never stops.',
      icon: '⚡'
    },
    {
      title: 'Excellence',
      description: 'We deliver professional-grade solutions with meticulous attention to detail.',
      icon: '🎯'
    },
    {
      title: 'Partnership',
      description: 'We work closely with our clients to understand and solve their unique challenges.',
      icon: '🤝'
    }
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Action Bar */}
        <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 space-y-3">
          <button
            onClick={handleDownload}
            className="group bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 p-3 rounded-full hover:bg-teal-600/80 transition-all duration-300 hover:scale-110"
            title="Download Company Overview"
          >
            <Download className="w-5 h-5 text-white group-hover:animate-bounce" />
          </button>
          <button
            onClick={handleShare}
            className="group bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 p-3 rounded-full hover:bg-blue-600/80 transition-all duration-300 hover:scale-110"
            title="Share Page"
          >
            <Share2 className="w-5 h-5 text-white group-hover:animate-pulse" />
          </button>
          <button
            onClick={() => handleBookmark('hero')}
            className={`group backdrop-blur-sm border p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              bookmarkedSections.has('hero') 
                ? 'bg-yellow-500/80 border-yellow-400' 
                : 'bg-slate-800/80 border-slate-600/50 hover:bg-yellow-600/80'
            }`}
            title="Bookmark Section"
          >
            <Bookmark className={`w-5 h-5 ${bookmarkedSections.has('hero') ? 'text-yellow-200' : 'text-white'}`} />
          </button>
        </div>

        {/* Real-time Analytics Bar */}
        <div className="fixed top-20 left-6 z-50 bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 text-xs text-gray-300">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              {currentTime.toLocaleTimeString()}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              {userLocation}
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-3 h-3" />
              {analytics.pageViews} views
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-3 h-3" />
              {analytics.interactions} interactions
            </div>
          </div>
        </div>

        {/* Hero Section with Interactive Elements */}
        <div 
          ref={(el) => addToRefs(el, 0)}
          className={`min-h-screen flex items-center justify-center text-center transition-all duration-1000 ${
            visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-5xl relative">
            {/* Interactive Video Background */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="relative w-96 h-96 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse">
                <button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/30 p-4 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  {isVideoPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border border-white/30 p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-200 ${
              visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={() => handleLike('hero')}
                  className={`group p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    likedSections.has('hero') 
                      ? 'bg-red-500/80 text-red-200' 
                      : 'bg-slate-800/50 text-gray-400 hover:bg-red-500/50'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${likedSections.has('hero') ? 'fill-current' : ''}`} />
                </button>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight">
                  Why Choose <span className="text-teal-400 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">FINFX</span>?
                </h1>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-400 ${
              visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                We're the trusted backend solutions provider that keeps fintech businesses running smoothly, 
                helping brokers and trading platforms scale with confidence.
              </p>
            </div>
            
            <div className={`flex flex-wrap justify-center gap-4 text-lg transition-all duration-1000 delay-600 ${
              visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {['99.97% Uptime', '24/7 Support', '1,200+ Clients', '12ms Response'].map((item, index) => (
                <span 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-600/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => setAnalytics(prev => ({ ...prev, interactions: prev.interactions + 1 }))}
                >
                  ✓ {item}
                </span>
              ))}
            </div>

            {/* Download and Share Stats */}
            <div className={`flex justify-center gap-8 mt-8 transition-all duration-1000 delay-800 ${
              visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center gap-2 text-gray-400">
                <Download className="w-4 h-4" />
                <span>{downloadCount.toLocaleString()} downloads</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Share2 className="w-4 h-4" />
                <span>{shareCount} shares</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement with Parallax Effect */}
        <div 
          ref={(el) => addToRefs(el, 1)}
          className={`py-20 transition-all duration-1000 ${
            visibleSections.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="relative">
            <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-xl rounded-3xl p-16 text-center border border-slate-600/50 shadow-2xl">
              <div className={`transition-all duration-1000 delay-200 ${
                visibleSections.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <h2 className="text-5xl font-bold text-white mb-8">
                  Our Mission
          </h2>
              </div>
              <div className={`transition-all duration-1000 delay-400 ${
                visibleSections.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                  To provide <span className="text-teal-400 font-semibold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">unprecedented risk management and dealing support</span> 
                  for brokers worldwide. We eliminate the high costs of maintaining in-house expertise teams while delivering 
                  professional-grade backend solutions that help fintech businesses focus on what they do best.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Services with Staggered Grid Animation */}
        <div 
          ref={(el) => addToRefs(el, 2)}
          className={`py-20 transition-all duration-1000 ${
            visibleSections.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            visibleSections.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive backend solutions designed to power your fintech business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-600/50 hover:border-teal-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl ${
                  visibleSections.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="mb-6 text-teal-400 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.Icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
                  {service.title}
            </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-teal-400 font-bold text-lg bg-teal-400/10 px-4 py-2 rounded-lg">
                    {service.stats}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleLike(`service-${index}`)}
                      className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                        likedSections.has(`service-${index}`) 
                          ? 'bg-red-500/80 text-red-200' 
                          : 'bg-slate-700/50 text-gray-400 hover:bg-red-500/50'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedSections.has(`service-${index}`) ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => handleBookmark(`service-${index}`)}
                      className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                        bookmarkedSections.has(`service-${index}`) 
                          ? 'bg-yellow-500/80 text-yellow-200' 
                          : 'bg-slate-700/50 text-gray-400 hover:bg-yellow-500/50'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarkedSections.has(`service-${index}`) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements with Counter Animation */}
        <div 
          ref={(el) => addToRefs(el, 3)}
          className={`py-20 transition-all duration-1000 ${
            visibleSections.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            visibleSections.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl font-bold text-white mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proven results that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group text-center bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 ${
                  visibleSections.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <achievement.Icon className={`w-8 h-8 ${achievement.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-3 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.number}
                </div>
                <div className="text-gray-300 text-lg font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section with Advanced Animations */}
        <div 
          ref={(el) => addToRefs(el, 4)}
          className={`py-20 transition-all duration-1000 ${
            visibleSections.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            visibleSections.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl font-bold text-white mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry veterans with decades of combined experience in fintech
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl rounded-2xl p-8 text-center border border-slate-600/50 hover:border-teal-500/50 transition-all duration-500 hover:transform hover:-translate-y-3 shadow-xl hover:shadow-2xl ${
                  visibleSections.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="mb-6 text-teal-400 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <member.Icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                  {member.name}
          </h3>
                <p className="text-teal-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.description}</p>
                <div className="text-xs text-gray-400 bg-slate-700/50 px-4 py-2 rounded-full group-hover:bg-teal-400/20 group-hover:text-teal-300 transition-all duration-300">
                  {member.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div 
          ref={(el) => addToRefs(el, 5)}
          className={`py-20 transition-all duration-1000 ${
            visibleSections.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            visibleSections.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group text-center bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 ${
                  visibleSections.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Contact Form Section */}
        <div 
          ref={(el) => addToRefs(el, 6)}
          className={`py-20 transition-all duration-1000 ${
            visibleSections.has(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            visibleSections.has(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to discuss your backend solution needs? Let's start a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-600/50">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              {isFormSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300">
                  ✓ Message sent successfully! We'll get back to you within 24 hours.
                </div>
              )}
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Interest *</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="risk-management">Risk Management</option>
                    <option value="platform-support">Platform Support</option>
                    <option value="dealing-support">Dealing Support</option>
                    <option value="custom-development">Custom Development</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Live Chat */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-600/50">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-gray-400">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-400">hello@finfxs.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Website</div>
                      <div className="text-gray-400">www.finfxs.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-600/50">
                <h3 className="text-2xl font-bold text-white mb-6">Live Support</h3>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-white font-semibold mb-2">Online Now</div>
                  <div className="text-gray-400 mb-4">Our support team is available 24/7</div>
                  <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition-colors duration-300">
                    Start Live Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div 
          ref={(el) => addToRefs(el, 7)}
          className={`py-20 transition-all duration-1000 ${
            visibleSections.has(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="relative">
            <div className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 rounded-3xl p-16 text-center shadow-2xl border border-teal-500/20">
              <div className={`transition-all duration-1000 delay-200 ${
                visibleSections.has(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <h2 className="text-5xl font-bold text-white mb-8">
                  Ready to Scale Your Fintech Business?
                </h2>
              </div>
              
              <div className={`transition-all duration-1000 delay-400 ${
                visibleSections.has(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <p className="text-xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join hundreds of brokers and trading platforms who trust FINFX for their backend solutions. 
                  Let us handle the heavy lifting while you focus on growing your business.
                </p>
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-600 ${
                visibleSections.has(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <button 
                  onClick={() => window.location.href = '#contact'}
                  className="group bg-white text-teal-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => window.location.href = '#contact'}
                  className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
  );
};

export default About;
