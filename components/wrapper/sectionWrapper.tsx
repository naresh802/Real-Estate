import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

const SectionWrapper = ({
  children,
  className = "",
  style,
  id,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      style={style}
      className={`w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;