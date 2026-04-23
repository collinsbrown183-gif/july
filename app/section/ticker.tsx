/**
 * Ticker Component
 * 
 * Horizontal scrolling cryptocurrency price ticker.
 * 
 * Features:
 * - Fetches top 50 cryptocurrencies from CryptoCompare API
 * - Auto-updates prices every 10 seconds
 * - Caches API responses for 30 seconds to reduce API calls
 * - Infinite horizontal scroll animation
 * - Pauses on hover for user interaction
 * - Shows: coin logo, name, current price, 24h change %
 * - Color-coded: green for positive change, red for negative
 * - Clickable links to CryptoCompare coin pages
 */
"use client";
import { useEffect, useState } from "react";
import { apiCache } from "../utils/cache";

export default function Ticker() {
  // Store fetched cryptocurrency data
  const [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    // Fetch latest crypto data from CryptoCompare API with caching
    const load = async () => {
      const cacheKey = "ticker-coins-data";
      const cached = apiCache.get<any[]>(cacheKey);
      
      if (cached) {
        setCoins(cached);
        return;
      }

      try {
        const res = await fetch(
          "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD"
        );
        const data = await res.json();
        if (data.Data) {
          setCoins(data.Data);
          apiCache.set(cacheKey, data.Data, 30000); // Cache for 30 seconds
        }
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };
    
    // Initial load
    load();
    
    // Auto-refresh every 10 seconds to keep prices current
    const interval = setInterval(load, 10000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Don't render anything if no coins loaded yet
  if (!coins.length) return null;

  // Duplicate coins array for seamless infinite scroll effect
  const displayCoins = [...coins, ...coins];

  return (
    <div className="w-full overflow-hidden bg-white border-y border-gray-200 py-3">
      {/* Animated scrolling container - pauses on hover */}
      <div className="flex whitespace-nowrap animate-[slide_60s_linear_infinite] hover:pause-animation">
        {displayCoins.map((item, i) => {
          const coin = item.CoinInfo;
          const price = item.RAW?.USD?.PRICE || 0;
          const change = item.RAW?.USD?.CHANGEPCT24HOUR || 0;
          const coinUrl = `https://www.cryptocompare.com/coins/${coin.Name.toLowerCase()}/overview/USD`;
          
          return (
            // Each coin item is clickable and links to CryptoCompare
            <a
              href={coinUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={`${coin.Name}-${i}`} 
              className="inline-flex items-center gap-2 px-6 py-1 text-sm hover:bg-gray-100 transition-colors cursor-pointer rounded"
            >
              {/* Coin logo */}
              <img
                src={`https://www.cryptocompare.com${coin.ImageUrl}`}
                alt={coin.Name}
                className="w-5 h-5 rounded-full"
              />
              {/* Coin symbol (e.g., BTC) */}
              <span className="font-semibold text-gray-900">{coin.Name}</span>
              {/* Current price in USD */}
              <span className="text-gray-600">${price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              {/* 24h price change % - green if positive, red if negative */}
              <span className={`font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {change >= 0 ? '+' : ''}{change.toFixed(2)}%
              </span>
            </a>
          );
        })}
      </div>

      {/* CSS for scroll animation and hover pause */}
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

