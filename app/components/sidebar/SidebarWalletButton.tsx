"use client";

import Link from "next/link";

export default function SidebarWalletButton() {
  return (
    <div className="px-6 py-4">
      <Link
        href="/connectWallet"
        className="flex items-center justify-between px-5 py-3.5 bg-[rgba(230,230,230,1)] hover:bg-[rgba(240,240,240,1)] rounded-full transition-colors duration-150"
      >
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="w-5 h-5 bg-[rgba(30,30,30,1)]"
            style={{
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center center",
              maskImage: 'url("/icons/wallet.svg")',
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              WebkitMaskPosition: "center center",
              WebkitMaskImage: 'url("/icons/wallet.svg")',
            }}
          />
          <span className="text-[rgba(30,30,30,1)] font-medium">Connect Wallet</span>
        </div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[rgba(30,30,30,1)]">
          <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}
