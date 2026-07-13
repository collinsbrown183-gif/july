import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "./components/ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onyx App",
  description: "Onyx is an infrastructure for a multi-asset, scalable, and cryptographically secure ledger. Powered by Onyxcoin (XCN).",
  icons: {
    icon: [
      { url: "/onyxlogo.webp", sizes: "32x32", type: "image/webp" },
      { url: "/onyxlogo.webp", sizes: "16x16", type: "image/webp" },
    ],
    apple: { url: "/onyxlogo.webp", sizes: "180x180", type: "image/webp" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConditionalLayout>
        {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
