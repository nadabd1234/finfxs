const ClipPathTitle = ({ title, color, bg, className, borderColor, tilt = 0 }) => {
  return (
    <div className="general-title">
      <div
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          transform: `rotate(${tilt}deg)`,
          transformOrigin: 'center',
          filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.3))',
          transition: 'all 0.3s ease',
        }}
        className={`${className} border-[.5vw] text-nowrap opacity-0 hover:scale-105 hover:rotate-0 transition-all duration-500 ease-out`}
      >
        <div
          className="pb-5 md:px-14 px-3 md:pt-0 pt-3 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${bg} 0%, ${adjustBrightness(bg, -10)} 100%)`,
            position: 'relative',
          }}
        >
          {/* Subtle inner shadow effect */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)',
              pointerEvents: 'none'
            }}
          />
          
          {/* Text with enhanced styling */}
          <h2
            className="relative z-10 font-black tracking-wider"
            style={{
              color: color,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              letterSpacing: '0.1em',
            }}
          >
            {title}
          </h2>
          
          {/* Decorative corner elements */}
          <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 opacity-60" style={{ borderColor: color }} />
          <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 opacity-60" style={{ borderColor: color }} />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 opacity-60" style={{ borderColor: color }} />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 opacity-60" style={{ borderColor: color }} />
        </div>
      </div>
    </div>
  );
};

// Helper function to adjust color brightness
const adjustBrightness = (color, percent) => {
  // Convert hex to RGB
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Adjust brightness
  const newR = Math.max(0, Math.min(255, r + (r * percent / 100)));
  const newG = Math.max(0, Math.min(255, g + (g * percent / 100)));
  const newB = Math.max(0, Math.min(255, b + (b * percent / 100)));
  
  // Convert back to hex
  return `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`;
};

export default ClipPathTitle;
