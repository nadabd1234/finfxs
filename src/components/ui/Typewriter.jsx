import React, { useState, useEffect } from 'react';

const Typewriter = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = '', 
  showCursor = true,
  onComplete = null,
  cursorBlinkSpeed = 500,
  deleteSpeed = 50,
  pauseTime = 2000,
  loop = false
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursorState, setShowCursorState] = useState(true);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursorState(prev => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, [cursorBlinkSpeed]);

  // Main typing effect
  useEffect(() => {
    if (delay > 0 && currentIndex === 0 && !isDeleting) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    if (!isDeleting && currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          // Text is complete, start pause or deletion
          if (loop) {
            setTimeout(() => {
              setIsDeleting(true);
            }, pauseTime);
          } else {
            setIsComplete(true);
            if (onComplete) {
              onComplete();
            }
          }
        }
      }, speed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      }, deleteSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      // Deletion complete, start typing again
      setIsDeleting(false);
      setCurrentIndex(0);
    }
  }, [currentIndex, text, speed, delay, isDeleting, loop, pauseTime, deleteSpeed, onComplete]);

  // Reset when text changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);
    setIsDeleting(false);
  }, [text]);

  return (
    <span className={`${className} typewriter-glow`}>
      {displayText}
      {showCursor && showCursorState && (
        <span className="typewriter-cursor">|</span>
      )}
    </span>
  );
};

export default Typewriter;
