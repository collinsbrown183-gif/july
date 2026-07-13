"use client";

import { MobileMenuButtonProps } from "./types";

/**
 * MobileMenuButton Component
 * 
 * Hamburger menu button that morphs to X when open
 */
export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={onClick}
      className="w-12 h-12 rounded-full bg-[rgba(30,30,30,1)] flex items-center justify-center hover:bg-[rgba(40,40,40,1)] transition-colors duration-200"
    >
      <div className="w-6 h-6 relative flex flex-col items-center justify-center">
        {/* Top line */}
        <span
          className={`absolute h-0.5 w-5 bg-[rgba(230,230,230,1)] transition-all duration-300 ${
            isOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-1"
          }`}
        />
        
        {/* Middle line */}
        <span
          className={`absolute h-0.5 w-5 bg-[rgba(230,230,230,1)] top-1/2 -translate-y-1/2 transition-all duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        
        {/* Bottom line */}
        <span
          className={`absolute h-0.5 w-5 bg-[rgba(230,230,230,1)] transition-all duration-300 ${
            isOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-1"
          }`}
        />
      </div>
    </button>
  );
}
