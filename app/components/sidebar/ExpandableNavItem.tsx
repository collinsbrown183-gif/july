"use client";

import { useState } from "react";
import Link from "next/link";
import { ExpandableNavItemProps } from "./types";

/**
 * ExpandableNavItem Component
 * 
 * Navigation item with expand/collapse functionality (for Staking, Bridge)
 */
export default function ExpandableNavItem({
  item,
  isActive,
  onToggle,
  isExpanded,
}: ExpandableNavItemProps) {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const expanded = isExpanded !== undefined ? isExpanded : internalExpanded;

  const handleClick = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalExpanded(!internalExpanded);
    }
  };

  return (
    <div>
      <button
        type="button"
        aria-label={item.label}
        aria-expanded={expanded}
        className={`w-full flex items-center justify-between px-6 py-3.5 hover:bg-[rgba(30,30,30,1)] transition-colors duration-150 ${
          isActive ? "bg-[rgba(30,30,30,1)]" : ""
        }`}
        onClick={handleClick}
      >
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

        {/* Chevron arrow */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-200 text-[rgba(128,128,128,1)] ${
            expanded ? "rotate-90" : ""
          }`}
        >
          <path
            d="M6 4L10 8L6 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Submenu items (placeholder for now) */}
      {expanded && item.subItems && item.subItems.length > 0 && (
        <div className="bg-[rgba(12,12,12,1)]">
          {item.subItems.map((subItem) => (
            <Link
              key={subItem.id}
              href={subItem.href}
              className="flex items-center gap-3 px-6 py-3 pl-14 hover:bg-[rgba(30,30,30,1)] transition-colors duration-150 text-[rgba(128,128,128,1)] hover:text-white"
            >
              <span>{subItem.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
