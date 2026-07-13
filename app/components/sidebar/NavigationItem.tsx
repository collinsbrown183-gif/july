"use client";

import Link from "next/link";
import { NavigationItemProps } from "./types";

/**
 * NavigationItem Component
 * 
 * Single navigation link with icon, label, and optional badge
 */
export default function NavigationItem({ item, isActive, onClick }: NavigationItemProps) {
  const content = (
    <>
      <div className="flex items-center gap-3">
        {/* Icon using mask-image technique */}
        <span
          aria-hidden="true"
          className={`w-5 h-5 ${isActive ? "bg-[rgba(230,230,230,1)]" : "bg-[rgba(128,128,128,1)]"}`}
          style={{
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center center",
            maskImage: `url("/icons/${item.icon}.svg")`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center center",
            WebkitMaskImage: `url("/icons/${item.icon}.svg")`,
          }}
        />
        <span className={`${isActive ? "text-white" : "text-[rgba(128,128,128,1)]"}`}>{item.label}</span>
      </div>

      {/* Badge */}
      {item.badge && (
        <div>
          <span
            className={`text-sm font-medium ${
              item.badge === "New" ? "text-[#00ff41]" : "text-[rgba(128,128,128,1)]"
            }`}
          >
            {item.badge}
          </span>
        </div>
      )}
    </>
  );

  const className = `flex items-center justify-between px-6 py-3.5 hover:bg-[rgba(30,30,30,1)] transition-colors duration-150 ${
    isActive ? "bg-[rgba(30,30,30,1)]" : ""
  }`;

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        aria-label={item.label}
        className={className}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      aria-label={item.label}
      className={className}
      onClick={onClick}
    >
      {content}
    </Link>
  );
}
