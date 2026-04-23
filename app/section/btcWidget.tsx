"use client";
import { useEffect, useState } from "react";
import { apiCache } from "../utils/cache";

interface PriceData {
  time: number;
  close: number;
}

export default function BtcWidget() {
  const [btcData, setBtcData] = useState<any>(null);
  const [priceHistory, setPriceHistory] = useState<PriceData[]>([]);
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    // Fetch current BTC price data with caching
    const fetchBtcData = async () => {
      const cacheKey = "btc-price-data";
      const cached = apiCache.get(cacheKey);
      
      if (cached) {
        setBtcData(cached);
        return;
      }

      try {
        const res = await fetch(
          "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD"
        );
        const data = await res.json();
        if (data.RAW?.BTC?.USD) {
          setBtcData(data.RAW.BTC.USD);
          apiCache.set(cacheKey, data.RAW.BTC.USD, 60000); // Cache for 1 minute
        }
      } catch (error) {
        console.error("Error fetching BTC data:", error);
      }
    };

    // Fetch 24h price history for chart with caching
    const fetchPriceHistory = async () => {
      const cacheKey = "btc-price-history";
      const cached = apiCache.get<PriceData[]>(cacheKey);
      
      if (cached) {
        setPriceHistory(cached);
        return;
      }

      try {
        const res = await fetch(
          "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=288"
        );
        const data = await res.json();
        if (data.Data?.Data) {
          setPriceHistory(data.Data.Data);
          apiCache.set(cacheKey, data.Data.Data, 120000); // Cache for 2 minutes
        }
      } catch (error) {
        console.error("Error fetching price history:", error);
      }
    };

    // Fetch crypto news with caching
    const fetchNews = async () => {
      const cacheKey = "btc-news";
      const cached = apiCache.get<any[]>(cacheKey);
      
      if (cached) {
        setNews(cached);
        return;
      }

      try {
        const res = await fetch(
          "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&categories=BTC"
        );
        const data = await res.json();
        if (data.Data && Array.isArray(data.Data)) {
          const newsData = data.Data.slice(0, 10);
          setNews(newsData);
          apiCache.set(cacheKey, newsData, 300000); // Cache for 5 minutes
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchBtcData();
    fetchPriceHistory();
    fetchNews();

    // Update every 30 seconds
    const interval = setInterval(() => {
      fetchBtcData();
      fetchPriceHistory();
    }, 30000);

    // Update news every 5 minutes
    const newsInterval = setInterval(fetchNews, 300000);

    return () => {
      clearInterval(interval);
      clearInterval(newsInterval);
    };
  }, []);

  if (!btcData || !priceHistory.length) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">Loading Bitcoin data...</div>
      </div>
    );
  }

  const price = btcData.PRICE;
  const change = btcData.CHANGEPCT24HOUR;
  const marketCap = btcData.MKTCAP;
  const volume24h = btcData.VOLUME24HOURTO;
  const totalVolume = btcData.TOTALVOLUME24HTO;

  // Calculate chart dimensions and path
  const chartWidth = 400;
  const chartHeight = 100;
  const prices = priceHistory.map(p => p.close);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice;

  // Create SVG path for area chart
  const points = priceHistory.map((p, i) => {
    const x = (i / (priceHistory.length - 1)) * chartWidth;
    const y = chartHeight - ((p.close - minPrice) / priceRange) * chartHeight;
    return `${x},${y}`;
  });

  const pathData = `M 0,${chartHeight} L ${points.join(" L ")} L ${chartWidth},${chartHeight} Z`;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* BTC Price Header */}
      <div className="p-3 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
            ₿
          </div>
          <div className="flex-1">
            <div className="text-xs text-gray-500">BTC</div>
            <div className="text-lg font-bold text-gray-900">
              $ {price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
          <div className={`text-sm font-semibold ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
            {change >= 0 ? "+" : ""}{change.toFixed(2)}%
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <div className="text-gray-500">Mkt Cap:</div>
            <div className="font-semibold text-gray-900">
              $ {(marketCap / 1e9).toFixed(2)} B
            </div>
          </div>
          <div>
            <div className="text-gray-500">Volume:</div>
            <div className="font-semibold text-gray-900">
              $ {(volume24h / 1e9).toFixed(2)} B
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="p-3 bg-gradient-to-b from-white to-gray-50">
        <svg width="100%" height="100" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#FDB813", stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: "#FFED4E", stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path d={pathData} fill="url(#goldGradient)" stroke="#F59E0B" strokeWidth="2" />
        </svg>
      </div>

      {/* News Section */}
      {news.length > 0 && (
        <div className="border-t border-gray-200">
          <div className="max-h-64 overflow-y-auto">
            {news.slice(0, 5).map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
              >
                <img
                  src={article.imageurl}
                  alt={article.title}
                  className="w-10 h-10 rounded object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-medium text-gray-900 line-clamp-2 mb-1">
                    {article.title}
                  </h3>
                  <div className="text-[10px] text-gray-500">
                    {article.source}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
