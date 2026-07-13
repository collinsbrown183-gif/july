"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function StakingForm() {
  const [mode, setMode] = useState<"stake" | "withdraw">("stake");
  const [amount, setAmount] = useState("");

  const handlePercentageClick = (percentage: number) => {
    setAmount(percentage === 0 ? "" : "0.00");
  };

  return (
    <div className="space-y-4">
      {/* Title — on page background, outside card */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-1">Staking</h2>
        <p className="text-sm text-[rgba(150,150,150,1)]">Stake or withdraw your tokens</p>
      </div>

      {/* Card */}
      <div className="bg-[rgba(20,20,20,1)] rounded-xl p-5 lg:p-8 space-y-5">
        {/* Amount + Available Balance */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-white">Amount</h3>
          <span className="text-sm text-[rgba(150,150,150,1)]">
            Available Balance: <span className="text-white font-medium">0.00</span>
          </span>
        </div>

        {/* Stake / Withdraw tabs — full width each */}
        <div className="flex gap-3">
          <button
            onClick={() => setMode("stake")}
            className={`flex items-center justify-center gap-2 flex-1 py-3 rounded-xl font-medium transition-colors duration-150 ${
              mode === "stake"
                ? "bg-[rgba(55,55,55,1)] text-white"
                : "bg-[rgba(30,30,30,1)] text-[rgba(150,150,150,1)] hover:bg-[rgba(40,40,40,1)]"
            }`}
          >
            <Image src="/icons/stake.svg" alt="Stake" width={18} height={18} className={mode === "stake" ? "opacity-100" : "opacity-50"} />
            <span>Stake</span>
          </button>
          <button
            onClick={() => setMode("withdraw")}
            className={`flex items-center justify-center gap-2 flex-1 py-3 rounded-xl font-medium transition-colors duration-150 ${
              mode === "withdraw"
                ? "bg-[rgba(55,55,55,1)] text-white"
                : "bg-[rgba(30,30,30,1)] text-[rgba(150,150,150,1)] hover:bg-[rgba(40,40,40,1)]"
            }`}
          >
            <Image src="/icons/withdraw.svg" alt="Withdraw" width={18} height={18} className={mode === "withdraw" ? "opacity-100" : "opacity-50"} />
            <span>Withdraw</span>
          </button>
        </div>

        {/* Amount input + percentage buttons */}
        <div className="bg-[rgba(15,15,15,1)] rounded-xl px-5 py-4 flex items-center justify-between gap-3">
          <input
            type="text"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-transparent text-3xl lg:text-4xl font-semibold text-white placeholder:text-[rgba(80,80,80,1)] outline-none min-w-0 flex-1"
          />
          <div className="flex gap-1.5 shrink-0">
            <button onClick={() => handlePercentageClick(0)} className="px-2.5 py-1.5 bg-[rgba(35,35,35,1)] hover:bg-[rgba(45,45,45,1)] rounded-full text-xs text-[rgba(200,200,200,1)] transition-colors duration-150">
              0%
            </button>
            <button onClick={() => handlePercentageClick(25)} className="hidden sm:block px-2.5 py-1.5 bg-[rgba(35,35,35,1)] hover:bg-[rgba(45,45,45,1)] rounded-full text-xs text-[rgba(200,200,200,1)] transition-colors duration-150">
              25%
            </button>
            <button onClick={() => handlePercentageClick(50)} className="px-2.5 py-1.5 bg-[rgba(35,35,35,1)] hover:bg-[rgba(45,45,45,1)] rounded-full text-xs text-[rgba(200,200,200,1)] transition-colors duration-150">
              50%
            </button>
            <button onClick={() => handlePercentageClick(75)} className="hidden sm:block px-2.5 py-1.5 bg-[rgba(35,35,35,1)] hover:bg-[rgba(45,45,45,1)] rounded-full text-xs text-[rgba(200,200,200,1)] transition-colors duration-150">
              75%
            </button>
            <button onClick={() => setAmount("0.00")} className="px-2.5 py-1.5 bg-[rgba(35,35,35,1)] hover:bg-[rgba(45,45,45,1)] rounded-full text-xs text-[rgba(200,200,200,1)] transition-colors duration-150">
              Max
            </button>
          </div>
        </div>

        {/* Info rows */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[rgba(150,150,150,1)]">Estimated Daily Earnings:</span>
            <span className="text-white font-medium">0.00 XCN</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-[rgba(150,150,150,1)]">Staking APR:</span>
            <span className="text-white font-medium">11.82%</span>
          </div>
        </div>

        {/* Connect Wallet button */}
        <Link
          href="/connectWallet"
          className="flex items-center justify-center gap-2.5 w-full px-6 py-4 bg-[rgba(60,60,60,1)] hover:bg-[rgba(70,70,70,1)] rounded-full transition-colors duration-150"
        >
          <Image src="/icons/stake.svg" alt="Connect" width={20} height={20} className="opacity-70" />
          <span className="text-white font-medium">Connect Wallet</span>
        </Link>
      </div>
    </div>
  );
}
