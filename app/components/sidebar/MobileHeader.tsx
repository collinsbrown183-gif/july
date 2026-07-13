"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenuButton from "./MobileMenuButton";

interface MobileHeaderProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export default function MobileHeader({ isMenuOpen, onMenuToggle }: MobileHeaderProps) {
  return (
    <div className="bg-[rgba(20,20,20,1)] border-b border-[rgba(40,40,40,1)] px-4 py-3 lg:hidden">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/onyxlogo.webp" alt="Onyx" width={32} height={32} className="rounded-full" />
          <span className="text-white text-lg font-semibold">Onyx</span>
        </Link>

        <Link
          href="/connectWallet"
          className="flex items-center gap-2 px-4 py-2 bg-[rgba(230,230,230,1)] hover:bg-[rgba(240,240,240,1)] rounded-full transition-colors duration-200"
        >
          <span
            aria-hidden="true"
            className="w-4 h-4 bg-[rgba(20,20,20,1)]"
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
          <span className="text-[rgba(20,20,20,1)] text-sm font-medium">Connect Wallet</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[rgba(20,20,20,1)]">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <MobileMenuButton isOpen={isMenuOpen} onClick={onMenuToggle} />
      </div>
    </div>
  );
}
