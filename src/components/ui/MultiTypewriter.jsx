import React, { useState, useEffect } from 'react';

const MultiTypewriter = ({ 
  texts = [], 
  speed = 100, 
  deleteSpeed = 50,
  pauseTime = 2000,
  className = '', 
  showCursor = true,
  cursorBlinkSpeed = 500,
  onComplete = null
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursorState, setShowCursorState] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursorState(prev => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, [cursorBlinkSpeed]);

  // Main typing effect
  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[currentTextIndex];
    
    if (!isDeleting && currentCharIndex <= currentText.length) {
      const timeout = setTimeout(() => {
        if (currentCharIndex < currentText.length) {
          setDisplayText(prev => prev + currentText[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        } else {
          // Text is complete, start pause then deletion
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      }, speed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentCharIndex(prev => prev - 1);
      }, deleteSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex === 0) {
      // Deletion complete, move to next text
      setIsDeleting(false);
      setCurrentTextIndex(prev => (prev + 1) % texts.length);
    }
  }, [currentCharIndex, currentTextIndex, texts, speed, deleteSpeed, pauseTime, isDeleting]);

  // Check if all texts have been shown
  useEffect(() => {
    if (currentTextIndex === texts.length - 1 && currentCharIndex === texts[currentTextIndex]?.length && !isDeleting) {
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentTextIndex, currentCharIndex, texts, isDeleting, onComplete]);

  // Reset when texts change
  useEffect(() => {
    setDisplayText('');
    setCurrentTextIndex(0);
    setCurrentCharIndex(0);
    setIsDeleting(false);
    setIsComplete(false);
  }, [texts]);

  if (texts.length === 0) return null;

  return (
    <span className={className}>
      {displayText}
      {showCursor && showCursorState && (
        <span className="text-teal-400 font-bold">|</span>
      )}
    </span>
  );
};

export default MultiTypewriter;
