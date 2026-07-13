"use client";

import { useState } from "react";
import Image from "next/image";
import { useWallet } from "./WalletContext";

const wallets = [
  {
    id: "onyx",
    name: "Onyx Wallet",
    description: "The official Onyx Protocol wallet",
    recommended: true,
  },
  {
    id: "metamask",
    name: "MetaMask",
    description: "Ethereum & EVM wallet",
  },
  {
    id: "trust",
    name: "Trust Wallet",
    description: "Multi-chain mobile wallet",
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    description: "Connect any compatible wallet",
  },
  {
    id: "other",
    name: "Other Wallets",
    description: "Browse more supported wallets",
  },
];

function WalletIcon({ id }: { id: string }) {
  if (id === "onyx") {
    return (
      <Image
        src="/onyxlogo.webp"
        alt="Onyx Wallet"
        width={40}
        height={40}
        className="rounded-full"
      />
    );
  }
  if (id === "metamask") {
    return (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(246,133,27,0.15)]">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <polygon points="21,2 13.5,7.5 15,4" fill="#E17726" stroke="#E17726" strokeWidth="0.3"/>
          <polygon points="3,2 10.4,7.6 9.1,4" fill="#E27625" stroke="#E27625" strokeWidth="0.3"/>
          <polygon points="18.2,16.5 16.1,19.8 20.6,21.1 21.9,16.6" fill="#E27625" stroke="#E27625" strokeWidth="0.3"/>
          <polygon points="2.1,16.6 3.4,21.1 7.9,19.8 5.8,16.5" fill="#E27625" stroke="#E27625" strokeWidth="0.3"/>
          <polygon points="7.6,10.8 6.3,12.7 10.8,12.9 10.6,8.1" fill="#E27625" stroke="#E27625" strokeWidth="0.3"/>
          <polygon points="16.4,10.8 13.3,8 13.2,12.9 17.7,12.7" fill="#E27625" stroke="#E27625" strokeWidth="0.3"/>
          <polygon points="7.9,19.8 10.5,18.5 8.2,16.6" fill="#E27625" stroke="#E27625" strokeWidth="0.3"/>
          <polygon points="13.5,18.5 16.1,19.8 15.8,16.6" fill="#E27625" stroke="#E27625" strokeWidth="0.3"/>
        </svg>
      </div>
    );
  }
  if (id === "trust") {
    return (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(51,117,248,0.15)]">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path d="M12 2L4 5.5v5.2c0 4.8 3.4 9.3 8 10.3 4.6-1 8-5.5 8-10.3V5.5L12 2z" fill="#3375F8" opacity="0.9"/>
          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }
  if (id === "walletconnect") {
    return (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(59,153,252,0.15)]">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path d="M6.1 8.2c3.3-3.2 8.5-3.2 11.8 0l.4.4c.2.2.2.4 0 .6l-1.3 1.3c-.1.1-.3.1-.4 0l-.5-.5c-2.3-2.2-6-2.2-8.3 0l-.6.5c-.1.1-.3.1-.4 0L5.5 9.2c-.2-.2-.2-.4 0-.6l.6-.4zM20 11l1.2 1.2c.2.2.2.4 0 .6l-5.3 5.2c-.2.2-.4.2-.6 0l-3.7-3.7c-.1-.1-.2-.1-.3 0l-3.7 3.7c-.2.2-.4.2-.6 0L1.7 12.8c-.2-.2-.2-.4 0-.6L3 11c.2-.2.4-.2.6 0l3.7 3.7c.1.1.2.1.3 0l3.7-3.7c.2-.2.4-.2.6 0l3.7 3.7c.1.1.2.1.3 0L19.4 11c.2-.2.4-.2.6 0z" fill="#3B99FC"/>
        </svg>
      </div>
    );
  }
  // Other wallets
  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(80,80,80,0.3)]">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <circle cx="6" cy="6" r="2" fill="rgba(180,180,180,1)"/>
        <circle cx="12" cy="6" r="2" fill="rgba(180,180,180,1)"/>
        <circle cx="18" cy="6" r="2" fill="rgba(180,180,180,1)"/>
        <circle cx="6" cy="12" r="2" fill="rgba(180,180,180,1)"/>
        <circle cx="12" cy="12" r="2" fill="rgba(180,180,180,1)"/>
        <circle cx="18" cy="12" r="2" fill="rgba(180,180,180,1)"/>
        <circle cx="6" cy="18" r="2" fill="rgba(180,180,180,1)"/>
        <circle cx="12" cy="18" r="2" fill="rgba(180,180,180,1)"/>
        <circle cx="18" cy="18" r="2" fill="rgba(180,180,180,1)"/>
      </svg>
    </div>
  );
}

export default function ConnectWalletModal() {
  const { isModalOpen, closeModal } = useWallet();
  const [connecting, setConnecting] = useState<string | null>(null);

  if (!isModalOpen) return null;

  const handleWalletClick = (id: string) => {
    setConnecting(id);
  };

  const handleClose = () => {
    setConnecting(null);
    closeModal();
  };

  const selectedWallet = wallets.find((w) => w.id === connecting);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[rgba(28,28,28,1)] rounded-2xl overflow-hidden shadow-2xl">
        {connecting && selectedWallet ? (
          /* ── Connecting screen ── */
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-white text-lg font-semibold">Connecting</h2>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-[rgba(50,50,50,1)] flex items-center justify-center hover:bg-[rgba(65,65,65,1)] transition-colors"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13 1L1 13M1 1l12 12" stroke="rgba(200,200,200,1)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center gap-6 py-6">
              {/* Wallet pill */}
              <div className="flex items-center gap-2.5 px-4 py-2 bg-[rgba(40,40,40,1)] rounded-full">
                <WalletIcon id={connecting} />
                <span className="text-white font-medium">{selectedWallet.name}</span>
              </div>

              {/* Spinner */}
              <div className="w-14 h-14 rounded-full border-2 border-[rgba(60,60,60,1)] border-t-[rgba(220,220,220,1)] animate-spin" />

              {/* Status */}
              <p className="text-sm text-[rgba(150,150,150,1)]">Binding wallet to session...</p>
            </div>

            {/* Progress bar */}
            <div className="mt-6 h-px w-full bg-[rgba(50,50,50,1)] rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full w-3/5 animate-pulse" />
            </div>
          </div>
        ) : (
          /* ── Wallet selection screen ── */
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-lg font-semibold">Connect Wallet</h2>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-[rgba(50,50,50,1)] flex items-center justify-center hover:bg-[rgba(65,65,65,1)] transition-colors"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13 1L1 13M1 1l12 12" stroke="rgba(200,200,200,1)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Onyx Wallet — Recommended */}
            <button
              onClick={() => handleWalletClick("onyx")}
              className="w-full flex items-center gap-4 p-4 bg-[rgba(38,38,38,1)] hover:bg-[rgba(48,48,48,1)] rounded-xl transition-colors duration-150 mb-4"
            >
              <WalletIcon id="onyx" />
              <div className="flex-1 text-left">
                <div className="text-white font-medium">Onyx Wallet</div>
                <div className="text-xs text-[rgba(150,150,150,1)] mt-0.5">The official Onyx Protocol wallet</div>
              </div>
              <span className="text-xs font-semibold text-[rgba(160,160,160,1)] border border-[rgba(80,80,80,1)] rounded-full px-2.5 py-1 tracking-wide">
                RECOMMENDED
              </span>
            </button>

            {/* Other wallets divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-[rgba(50,50,50,1)]" />
              <span className="text-xs text-[rgba(100,100,100,1)] tracking-widest font-medium">OTHER WALLETS</span>
              <div className="flex-1 h-px bg-[rgba(50,50,50,1)]" />
            </div>

            {/* Other wallet rows */}
            <div className="space-y-1">
              {wallets.slice(1).map((wallet) => (
                <button
                  key={wallet.id}
                  onClick={() => handleWalletClick(wallet.id)}
                  className="w-full flex items-center gap-4 px-3 py-3.5 hover:bg-[rgba(38,38,38,1)] rounded-xl transition-colors duration-150"
                >
                  <WalletIcon id={wallet.id} />
                  <div className="flex-1 text-left">
                    <div className="text-white text-sm font-medium">{wallet.name}</div>
                    <div className="text-xs text-[rgba(120,120,120,1)] mt-0.5">{wallet.description}</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="rgba(120,120,120,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ))}
            </div>

            {/* Footer */}
            <p className="text-center text-xs text-[rgba(100,100,100,1)] mt-5 leading-relaxed">
              By connecting you agree to our{" "}
              <span className="text-[rgba(160,160,160,1)] underline cursor-pointer">Terms</span>
              {" & "}
              <span className="text-[rgba(160,160,160,1)] underline cursor-pointer">Privacy Policy</span>
              . We never store your keys or seed phrases.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
