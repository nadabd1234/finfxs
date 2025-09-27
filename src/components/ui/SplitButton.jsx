import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn.jsx';

const SplitButton = ({ 
  mainText = "Explore Platforms",
  mainAction,
  dropdownItems = [],
  className,
  variant = "default",
  size = "default",
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMainClick = () => {
    if (mainAction) {
      mainAction();
    }
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownItemClick = (item) => {
    if (item.action) {
      item.action();
    }
    setIsOpen(false);
  };

  const buttonVariants = {
    default: "bg-gradient-to-r from-[#015660] to-[#02B1C6] text-white hover:from-[#015660]/90 hover:to-[#02B1C6]/90",
    hero: "bg-gradient-to-r from-[#015660] to-[#02B1C6] text-white hover:from-[#015660]/90 hover:to-[#02B1C6]/90 shadow-lg hover:shadow-xl",
    outline: "border border-[#015660] bg-transparent text-[#015660] hover:bg-[#015660] hover:text-white"
  };

  const buttonSizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 py-1 text-sm",
    lg: "h-12 px-6 py-3 text-lg"
  };

  return (
    <div className={cn("relative inline-flex", className)} ref={dropdownRef} {...props}>
      {/* Main Button */}
      <button
        onClick={handleMainClick}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015660] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-l-lg",
          buttonVariants[variant],
          buttonSizes[size],
          "flex-1"
        )}
      >
        {mainText}
      </button>

      {/* Split Button */}
      <button
        onClick={handleDropdownToggle}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015660] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-r-lg border-l border-white/20",
          buttonVariants[variant],
          buttonSizes[size],
          "px-3"
        )}
      >
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={cn("transition-transform duration-200", isOpen && "rotate-180")}
        >
          <path 
            d="M3 4.5L6 7.5L9 4.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && dropdownItems.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          {dropdownItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleDropdownItemClick(item)}
              className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 hover:text-[#015660] transition-colors duration-200 flex items-center space-x-2"
            >
              {item.icon && (
                <span className="text-[#015660]">
                  {item.icon}
                </span>
              )}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SplitButton;
