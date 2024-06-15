import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  heading: string;
  tagline?: string;
};

function SectionWrapper({ children, className, heading, tagline }: Props) {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="pt-10 h-[85vh] sm:h-screen flex flex-col items-center justify-center">
        <h3 className="uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl">
          {heading}
        </h3>
        <h3 className=" top-36 uppercase tracking-[3px] text-gray-500 text-xs">
          {tagline}
        </h3>
        <div className={className}>{children}</div>
      </div>
    </div>
  );
}

export default SectionWrapper;
