import React, { useEffect, useRef } from 'react';
import { createAnimation } from './AnimationUtils';
import { useSplitText } from '../../hooks/useSplitText';
import '../../styles/animations.css';

const SplitTextAnimation = ({ text, type = 'chars', animation = 'fadeUp', className = '' }) => {
  const elementRef = useRef(null);
  const { split, revert } = useSplitText();

  useEffect(() => {
    if (!elementRef.current) return;

    // Store ref value
    const element = elementRef.current;
    
    // Split the text
    const elements = split(element, type);
    
    // Create and play the animation
    const anim = createAnimation(elements, animation);
    
    return () => {
      // Cleanup
      anim.kill();
      revert(element);
    };
  }, [text, type, animation, split, revert]);

  return (
    <div ref={elementRef} className={`split-text ${className}`}>
      {text}
    </div>
  );
};

export default SplitTextAnimation;