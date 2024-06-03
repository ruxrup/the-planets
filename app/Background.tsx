import React, { ReactNode } from "react";

const Background = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-custom-bg overflow-hidden">
      {children}
      <div className="absolute h-0.5 w-0.5 top-0 bg-white shadow-stars-background rounded-full"></div>
    </div>
  );
};

export default Background;
