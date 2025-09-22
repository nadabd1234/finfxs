import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const useSplitText = (elementRef, options = {}) => {
    const [isReady, setIsReady] = useState(false);
    const splitInstance = useRef(null);

    useEffect(() => {
        if (!elementRef.current) return;

        // Check if GSAP is available
        if (!gsap) {
            console.error('GSAP is not loaded');
            return;
        }

        try {
            // Split text into characters, words, and lines
            const text = elementRef.current;
            text.innerHTML = text.textContent
                .split('')
                .map(char => char === ' ' ? '&nbsp;' : `<span class="char">${char}</span>`)
                .join('');

            setIsReady(true);
        } catch (error) {
            console.error('Error splitting text:', error);
        }

        return () => {
            // Cleanup
            if (splitInstance.current) {
                splitInstance.current.revert();
            }
        };
    }, [elementRef, options]);

    return {
        isReady,
        elementRef
    };
};

export default useSplitText;