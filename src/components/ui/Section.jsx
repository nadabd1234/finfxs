import React from "react";
import SectionSvg from "../design/SectionSvg";

const Section = ({ className, id, crosses, crossesOffset, customPaddings, children }) => {
  return (
    <div
      id={id}
      className={`
        relative 
        ${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`} 
        ${className || ""}`}
    >
      {children}

      {crosses && (
        <div className={`hidden absolute -top-[5.5rem] left-6 right-6 h-[10.25rem] pointer-events-none lg:block xl:left-8 xl:right-8 ${crossesOffset || ""}`}>
          <div className="absolute inset-0">
            <SectionSvg crossesOffset={crossesOffset} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Section;