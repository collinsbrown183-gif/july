"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * SidebarLogo Component
 * 
 * Displays Onyx logo and XCN price with change percentage in a single horizontal line
 * Fetches live price data from CoinGecko API (no API key required)
 * Updates automatically every 60 seconds
 */
export default function SidebarLogo() {
  // Price data state - updated from CoinGecko API
  const [priceData, setPriceData] = useState({
    price: "$0.00376",
    change: "-1.19%",
    isPositive: false
  });

  // Fetch live price data from CoinGecko
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('/api/onyx-price');
        if (response.ok) {
          const data = await response.json();
          setPriceData(data);
        }
      } catch (error) {
        console.error('Failed to fetch price:', error);
      }
    };
    
    // Fetch immediately
    fetchPrice();
    
    // Update every minute
    const interval = setInterval(fetchPrice, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-6 py-5">
      <div className="flex items-center justify-between gap-4">
        {/* Logo and Name */}
        <Link
          href="/"
          aria-label="Onyx Protocol"
          className="flex items-center gap-2.5 flex-shrink-0"
        >
          <Image
            src="/onyxlogo.webp"
            alt="Onyx"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-white text-xl font-semibold">Onyx</span>
        </Link>

        {/* Price and Change */}
        <div aria-label="XCN price and change" className="flex items-center gap-3 flex-shrink-0">
          <span className="text-[rgba(160,160,160,1)] text-sm whitespace-nowrap">{priceData.price}</span>
          <span
            aria-label="XCN 24h change"
            className={`text-sm whitespace-nowrap ${
              priceData.isPositive ? "text-green-500" : "text-[#ef4444]"
            }`}
          >
            {priceData.change}
          </span>
        </div>
      </div>
    </div>
  );
}
