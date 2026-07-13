"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * SidebarFooter Component
 * 
 * Footer section with social links, language selector, block info, and legal links
 */
export default function SidebarFooter() {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <div className="px-6 py-4 space-y-4">
      {/* Social links and language selector */}
      <div className="flex items-center justify-between">
        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Join our Telegram channel"
            href="https://t.me/Onyx"
            className="hover:opacity-70 transition-opacity"
          >
            <span
              className="block w-5 h-5 bg-[rgba(128,128,128,1)]"
              style={{
                maskRepeat: "no-repeat",
                maskSize: "contain",
                maskPosition: "center center",
                maskImage: 'url("/icons/telegram.svg")',
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                WebkitMaskPosition: "center center",
                WebkitMaskImage: 'url("/icons/telegram.svg")',
              }}
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Follow us on X/Twitter"
            href="https://x.com/intent/follow?screen_name=Onyx"
            className="hover:opacity-70 transition-opacity"
          >
            <span
              className="block w-5 h-5 bg-[rgba(128,128,128,1)]"
              style={{
                maskRepeat: "no-repeat",
                maskSize: "contain",
                maskPosition: "center center",
                maskImage: 'url("/icons/twitter.svg")',
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                WebkitMaskPosition: "center center",
                WebkitMaskImage: 'url("/icons/twitter.svg")',
              }}
            />
          </a>
        </div>

        {/* Language selector */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-1.5 px-2 py-1 hover:bg-[rgba(30,30,30,1)] rounded transition-colors"
          >
            <Image
              src="/icons/us.svg"
              alt="US Flag"
              width={14}
              height={14}
              className="opacity-60"
            />
            <span className="text-[rgba(128,128,128,1)] text-sm">ENG</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={`text-[rgba(128,128,128,1)] transition-transform duration-200 ${
                isLangOpen ? "rotate-180" : ""
              }`}
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Last Block info */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-[rgba(100,100,100,1)]">Last Block:</span>
        <a
          href="https://etherscan.io/block/25522247"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-[rgba(200,200,200,1)] text-[rgba(150,150,150,1)] transition-colors"
        >
          <span>25522247</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15.2083 11.6667V16.875H3.125V4.79167H7.70833M11.4583 3.125H16.875M16.875 3.125V8.54167M16.875 3.125L9.16667 10.8333"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </a>
      </div>

      {/* Legal links */}
      <div className="flex items-center gap-2 text-sm">
        <a
          href="https://docs.onyx.org/terms-of-service/terms"
          className="text-[rgba(100,100,100,1)] hover:text-[rgba(180,180,180,1)] transition-colors"
        >
          Terms
        </a>
        <span className="text-[rgba(80,80,80,1)]">·</span>
        <a
          href="https://docs.onyx.org/token-distribution"
          className="text-[rgba(100,100,100,1)] hover:text-[rgba(180,180,180,1)] transition-colors"
        >
          Disclosures
        </a>
        <a
          href="https://docs.onyx.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[rgba(100,100,100,1)] hover:text-[rgba(180,180,180,1)] transition-colors ml-auto"
        >
          <span>Docs</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15.2083 11.6667V16.875H3.125V4.79167H7.70833M11.4583 3.125H16.875M16.875 3.125V8.54167M16.875 3.125L9.16667 10.8333"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
