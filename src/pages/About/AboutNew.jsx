import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldIcon,
  Settings,
  Phone,
  Code,
  User,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
  Download,
  ExternalLink,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
  Globe,
  Users,
  Target,
  Zap
} from 'lucide-react';

import AnimatedTitle from "../../components/ui/animated/AnimatedTitle.jsx";
import "../../styles/about.css";

gsap.registerPlugin(ScrollTrigger);

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

  // GSAP Animations
  useGSAP(() => {
    // Circular clip path animation
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top 80%",
        end: "+=150 center",
        scrub: 0.2,
        pin: true,
        pinSpacing: true,
      },
    });

    // Set initial state - small circle in center for image only
    gsap.set(".mask-clip-path img", {
      clipPath: "circle(0% at 50% 50%)",
      transformOrigin: "50% 50%"
    });

    // Animate to full reveal with rotation for image only
    clipAnimation.to(".mask-clip-path img", {
      clipPath: "circle(150% at 50% 50%)",
      rotation: 360,
      duration: 1,
      ease: "power2.out"
    });

    // Section animations
    gsap.utils.toArray('.animate-section').forEach((section, index) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Staggered animations for cards
    gsap.utils.toArray('.animate-card').forEach((card, index) => {
      gsap.fromTo(card,
        { 
          opacity: 0, 
          y: 50,
          rotationY: 15
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Counter animations
    gsap.utils.toArray('.animate-counter').forEach(counter => {
      const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
      gsap.fromTo(counter,
        { textContent: 0 },
        {
          textContent: target,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  });

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, index]));
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
        title: 'FINFXS - Backend Solutions Provider',
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
      Icon: TrendingUp
    },
    {
      title: 'Reliability',
      description: 'Our systems are built for 99.97% uptime, ensuring your business never stops.',
      Icon: Zap
    },
    {
      title: 'Excellence',
      description: 'We deliver professional-grade solutions with meticulous attention to detail.',
      Icon: Target
    },
    {
      title: 'Partnership',
      description: 'We work closely with our clients to understand and solve their unique challenges.',
      Icon: Users
    }
  ];

  return (
    <div id="about" className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="relative mt-36 flex flex-col items-center gap-5 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20">
        <p className="font-general text-sm uppercase md:text-[10px] text-white">
          Welcome to FINFX
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the Future of <br /> Financial Techn<b>o</b>logy"
          containerClass="mt-5 !text-white text-center"
        />

        <div className="about-subtext">
          <p className="text-white">Your Path to Financial Innovation Begins Here</p>
          <p className="text-gray-400">
            FINFX unites cutting-edge technology with reliable backend solutions,
            creating a seamless ecosystem for fintech businesses worldwide
          </p>
        </div>
      </div>

      {/* Image Section */}
        <div className="relative h-dvh w-screen overflow-hidden" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src={import.meta.env.BASE_URL + 'about2.webp'}
            alt="Financial Technology"
            className="absolute left-0 top-0 h-[100vh] w-[100vw] object-cover"
            loading="eager"
          />
          
          {/* Centered Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center max-w-5xl mx-auto px-8">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                About Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                Discover our story and mission in transforming financial technology
              </p>
              <div className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                <p className="mb-4">
                  <span className="text-teal-400 font-semibold">FINFX</span> isn't just another fintech company—we're the architects of tomorrow's financial infrastructure. 
                  Born from a vision to democratize access to enterprise-grade backend solutions, we've spent years perfecting the art of seamless financial technology integration.
                </p>
                <p className="mb-4">
                  Our journey began when we recognized that <span className="text-white font-medium">traditional financial systems were holding back innovation</span>. 
                  Today, we power over <span className="text-teal-400 font-bold">1,200+ brokers and trading platforms</span> worldwide, 
                  delivering <span className="text-white font-medium">99.97% uptime</span> and <span className="text-white font-medium">12ms response times</span> that set industry standards.
                </p>
                <p className="text-teal-300 font-medium">
                  We don't just build technology—we build the future of finance, one connection at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Achievements */}
      <div className="py-20 animate-section">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Our Track Record</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Proven results that speak for themselves</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((a, index) => (
            <div key={index} className="animate-card text-center">
              <div className="mb-4 flex justify-center">
                <a.Icon className="w-8 h-8 text-white" />
              </div>
              <div className="animate-counter text-4xl md:text-5xl font-bold mb-3 text-white">{a.number}</div>
              <div className="text-gray-300 text-lg font-medium">{a.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="py-20 animate-section">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Industry veterans with decades of combined experience in fintech</p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="animate-card text-center">
              <div className="mb-6 text-teal-400 flex justify-center">
                <member.Icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-teal-400 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.description}</p>
              <div className="text-xs text-gray-400">{member.expertise}</div>
            </div>
          ))}
        </div>
            </div>

      {/* Values */}
      <div className="py-20 animate-section">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Our Values</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">The principles that guide everything we do</p>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="animate-card text-center">
              <div className="mb-6 text-teal-400 flex justify-center">
                <value.Icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
            </div>
          </div>

      {/* Client Testimonials */}
      <div className="py-20 animate-section">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Client Testimonials</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Hear from those who trust FINFX for their backend solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Jennifer Walsh',
              role: 'Chief Risk Officer',
              company: 'Global Finance Corp',
              quote: 'FINFX has transformed our risk management approach. Their thoughtful design and comprehensive features give us confidence in every decision.'
            },
            {
              name: 'David Kim',
              role: 'Head of Operations',
              company: 'TechStart Inc',
              quote: 'The depth of analysis and insights provided by FINFX has revolutionized our financial planning and strategy development.'
            },
            {
              name: 'Maria Santos',
              role: 'Compliance Director',
              company: 'International Bank',
              quote: 'FINFX makes regulatory compliance effortless. Their platform ensures we stay ahead of changing requirements.'
            }
          ].map((t, idx) => (
            <div key={idx} className="animate-card p-8">
              <div className="mb-4 text-teal-400 flex justify-center">
                <User className="w-10 h-10" />
              </div>
              <p className="text-lg mb-6 italic leading-relaxed text-gray-300">"{t.quote}"</p>
              <div className="text-center">
                <div className="font-semibold text-white mb-1">{t.name}</div>
                <div className="text-sm text-teal-400 mb-1">{t.role}</div>
                <div className="text-sm text-gray-400">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      

    </div>
  );
};

export default About;