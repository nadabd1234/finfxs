import React from "react";
import { useTheme } from "../context/ThemeContext";
import frameSvg from "../assets/svg/Frame 10.svg";
import dropShadowSvg from "../assets/svg/Drop Shadow.svg";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center bg-owl-primary text-white`}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-owl-secondary via-owl-primary to-owl-light"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 flex items-center justify-center">
        <div className="relative w-full flex items-center justify-center">
          {/* Shadow SVG (placed behind the main SVG) */}
          <img
            src={dropShadowSvg}
            alt="Drop Shadow"
            className="absolute w-[90%] max-h-[75vh] object-contain opacity-70 -z-10"
            loading="lazy"
            decoding="async"
          />

          {/* Main SVG */}
          <img
            src={frameSvg}
            alt="FINFXS Illustration"
            className="relative w-full h-auto max-h-[70vh] object-contain"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
