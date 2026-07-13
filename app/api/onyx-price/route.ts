import { NextResponse } from 'next/server';

const FALLBACK = {
  price: '$0.00376',
  change: '-1.19%',
  isPositive: false,
  lastUpdated: new Date().toISOString(),
};

// CoinGecko coin IDs to try in order
const COIN_IDS = ['onyx-protocol', 'chain-2', 'onyxcoin'];

export async function GET() {
  const headers: Record<string, string> = {
    'Accept': 'application/json',
  };

  // Include demo API key if configured (free at coingecko.com)
  if (process.env.COINGECKO_API_KEY) {
    headers['x-cg-demo-api-key'] = process.env.COINGECKO_API_KEY;
  }

  for (const coinId of COIN_IDS) {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_24hr_change=true`,
        { headers, next: { revalidate: 60 } }
      );

      if (!response.ok) continue;

      const data = await response.json();

      if (!data[coinId]?.usd) continue;

      const price = data[coinId].usd;
      const change24h = data[coinId].usd_24h_change ?? 0;

      return NextResponse.json({
        price: `$${price.toFixed(5)}`,
        change: `${change24h >= 0 ? '+' : ''}${change24h.toFixed(2)}%`,
        isPositive: change24h >= 0,
        lastUpdated: new Date().toISOString(),
      });
    } catch {
      // try next ID
    }
  }

  // All IDs failed — return fallback
  console.error('All CoinGecko coin IDs failed, returning fallback');
  return NextResponse.json(FALLBACK);
}

export const runtime = 'edge';
