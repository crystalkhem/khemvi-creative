"use client";
import React from "react";

const items = [
  "Web Design",
  "Development",
  "Branding",
  "Responsive Layouts",
  "Custom Code",
  "SEO-Ready",
  "Modern UI",
];

const Ticker = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-black text-white py-2">
      <div className="animate-marquee inline-block min-w-full">
        {items.map((text, index) => (
          <span
            key={index}
            className="inline-block mx-8 text-sm md:text-base tracking-wide"
          >
            {text}
          </span>
        ))}
        {/* Duplicate to create seamless loop */}
        {items.map((text, index) => (
          <span
            key={`duplicate-${index}`}
            className="inline-block mx-8 text-sm md:text-base tracking-wide"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
