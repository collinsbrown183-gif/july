"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SidebarLogo from "./SidebarLogo";
import SidebarWalletButton from "./SidebarWalletButton";
import SidebarNavigation from "./SidebarNavigation";
import SidebarFooter from "./SidebarFooter";
import MobileHeader from "./MobileHeader";

/**
 * Sidebar Component
 * 
 * Main sidebar navigation with responsive mobile/desktop behavior
 * - Desktop: Fixed sidebar on left (280px width)
 * - Mobile: Full-screen overlay menu with hamburger toggle
 */
export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <MobileHeader isMenuOpen={isMobileMenuOpen} onMenuToggle={handleMenuToggle} />

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:w-[280px] lg:flex-col bg-[rgba(20,20,20,1)] z-40 overflow-y-auto scrollbar-thin scrollbar-thumb-[rgba(60,60,60,1)] scrollbar-track-transparent">
        <SidebarLogo />
        <SidebarWalletButton />
        <SidebarNavigation />
        <SidebarFooter />
      </aside>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleMenuClose}
            aria-hidden="true"
          />

          {/* Menu Content */}
          <div className="absolute inset-0 bg-[rgba(20,20,20,1)] overflow-y-auto scrollbar-thin scrollbar-thumb-[rgba(60,60,60,1)] scrollbar-track-transparent">
            {/* Mobile Menu Header */}
            <div className="sticky top-0 bg-[rgba(20,20,20,1)] px-4 py-4 z-10 border-b border-[rgba(40,40,40,1)]">
              <div className="flex items-center justify-between gap-4">
                {/* Logo */}
                <Link href="/" onClick={handleMenuClose} className="flex items-center gap-2.5 flex-shrink-0">
                  <Image
                    src="/onyxlogo.webp"
                    alt="Onyx"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-white text-lg font-semibold">Onyx</span>
                </Link>

                {/* Connect Wallet Button */}
                <Link
                  href="/connectWallet"
                  onClick={handleMenuClose}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[rgba(230,230,230,1)] hover:bg-[rgba(240,240,240,1)] rounded-full transition-colors duration-150 flex-shrink-0"
                >
                  <span
                    aria-hidden="true"
                    className="w-4 h-4 bg-[rgba(30,30,30,1)]"
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
                  <span className="text-[rgba(30,30,30,1)] text-sm font-medium">Connect Wallet</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-[rgba(30,30,30,1)]"
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                {/* Close Button */}
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={handleMenuClose}
                  className="w-10 h-10 rounded-full bg-[rgba(30,30,30,1)] flex items-center justify-center hover:bg-[rgba(40,40,40,1)] transition-colors duration-200 flex-shrink-0"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M15 5L5 15M5 5L15 15"
                      stroke="rgba(230,230,230,1)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="py-4">
              <SidebarNavigation onItemClick={handleMenuClose} />
            </div>

            {/* Footer */}
            <div>
              <SidebarFooter />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
