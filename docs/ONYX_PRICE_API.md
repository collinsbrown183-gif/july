# Onyx Price API

This document explains the live price updates for OnyxCoin in the sidebar.

## Overview

The sidebar displays **real-time price data** for OnyxCoin fetched from CoinGecko:
- Current price in USD
- 24-hour percentage change
- Auto-updates every 60 seconds

## How It Works

### API Source
- **Provider**: [CoinGecko](https://www.coingecko.com/en/coins/onyxcoin)
- **No API Key Required**: CoinGecko's free tier doesn't require authentication
- **Update Frequency**: 60 seconds
- **Automatic Failover**: Falls back to cached values if API is unavailable

### API Endpoint

- **Route**: `/api/onyx-price`
- **Method**: GET
- **Cache**: 60 seconds (Next.js revalidation)
- **Response Format**:
  ```json
  {
    "price": "$0.00376",
    "change": "+2.45%",
    "isPositive": true,
    "lastUpdated": "2026-07-13T12:00:00.000Z"
  }
  ```

### Implementation Details

**Server Route** (`app/api/onyx-price/route.ts`):
- Fetches from CoinGecko API: `https://api.coingecko.com/api/v3/simple/price?ids=onyxcoin&vs_currencies=usd&include_24hr_change=true`
- Formats price to 5 decimal places
- Formats change percentage with + or - sign
- Returns structured JSON response

**Client Component** (`app/components/sidebar/SidebarLogo.tsx`):
- Fetches price on component mount
- Updates every 60 seconds via `setInterval`
- Displays price with color-coded change (green for positive, red for negative)
- Gracefully handles errors with fallback values

## Testing

To verify the API is working:

1. Open browser DevTools Console
2. Run: `fetch('/api/onyx-price').then(r => r.json()).then(console.log)`
3. You should see live price data from CoinGecko

## Troubleshooting

**Price not updating?**
- Check browser console for errors
- Verify internet connection
- Check if CoinGecko API is accessible: https://api.coingecko.com/api/v3/ping
- Server logs may show rate limiting (rare with CoinGecko's generous free tier)

**API Rate Limits**
- CoinGecko free tier: 10-50 calls/minute (more than enough for this use case)
- Our caching strategy (60s) ensures we stay well within limits

**Fallback Behavior**
If the API fails, the component displays the last known values or defaults to $0.00376 with -1.19% change.
