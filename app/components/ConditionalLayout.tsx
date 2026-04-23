/**
 * ConditionalLayout Component
 *
 * Smart layout wrapper that conditionally shows/hides Header and Footer.
 *
 * Behavior:
 * - On /connectWallet page: Hides header & footer (clean wallet connection UI)
 * - On all other pages: Shows header & footer (full navigation)
 *
 * Uses Next.js usePathname() hook to detect current route
 */
"use client";
import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get current URL path
  const pathname = usePathname();

  // Check if we're on the wallet connection page
  const hideLayout = pathname?.startsWith("/connectWallet");

  // If on /connectWallet, render page content only (no header/footer)
  if (hideLayout) {
    return <>{children}</>;
  }

  // Otherwise, render full layout with header and footer
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}