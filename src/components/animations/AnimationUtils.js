import gsap from 'gsap';

// Split text into characters, words, or lines
export const splitText = (element, type = 'chars') => {
    const text = element.textContent;
    let splits = [];

    switch (type) {
        case 'chars':
            splits = text.split('');
            element.innerHTML = splits
                .map(char => `<span class="char">${char}</span>`)
                .join('');
            break;
        case 'words':
            splits = text.split(' ');
            element.innerHTML = splits
                .map(word => `<span class="word">${word}</span>`)
                .join(' ');
            break;
        case 'lines':
            // Split by natural line breaks
            splits = text.split('\n');
            element.innerHTML = splits
                .map(line => `<span class="line">${line}</span>`)
                .join('\n');
            break;
    }

    return element.children;
};

// Create GSAP animations
export const createAnimation = (elements, type) => {
    const animations = {
        fadeUp: {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power3.out"
        },
        fadeIn: {
            opacity: 0,
            duration: 0.5,
            stagger: 0.03,
            ease: "power2.out"
        },
        slideIn: {
            x: -30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.04,
            ease: "back.out(1.7)"
        },
        scale: {
            scale: 0,
            opacity: 0,
            duration: 0.7,
            stagger: 0.03,
            ease: "elastic.out(1, 0.3)"
        }
    };

    return gsap.from(elements, animations[type] || animations.fadeUp);
};

// Utility to check if element is in viewport
export const isInViewport = (element, offset = 0) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 - offset &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};