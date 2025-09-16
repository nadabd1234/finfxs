import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Common animation configurations
export const fadeInUp = {
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
};

export const fadeInLeft = {
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
};

export const fadeInRight = {
    from: { x: 50, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
};

export const scaleIn = {
    from: { scale: 0.8, opacity: 0 },
    to: { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
};

// Scroll-triggered animation helper
export const createScrollAnimation = (element, animation, trigger = 'top 80%') => {
    return gsap.fromTo(element, animation.from, {
        ...animation.to,
        scrollTrigger: {
            trigger: element,
            start: trigger,
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
};

// Stagger animation for multiple elements
export const staggerAnimation = (elements, animation, delay = 0.1) => {
    return gsap.fromTo(elements, animation.from, {
        ...animation.to,
        stagger: delay
    });
};

// Parallax effect
export const createParallax = (element, speed = 0.5) => {
    return gsap.to(element, {
        yPercent: -50 * speed,
        ease: 'none',
        scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
};

// Timeline animation
export const createTimeline = () => {
    return gsap.timeline();
};

// Hover animations
export const hoverScale = (element, scale = 1.05) => {
    return gsap.to(element, {
        scale: scale,
        duration: 0.3,
        ease: 'power2.out'
    });
};

export const hoverScaleOut = (element) => {
    return gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
    });
};