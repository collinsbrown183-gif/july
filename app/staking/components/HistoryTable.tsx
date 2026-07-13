"use client";

import { useState } from "react";
import ConnectWalletState from "./ConnectWalletState";

type SortColumn = "type" | "txnHash" | "block" | "amount" | "created";
type SortDirection = "asc" | "desc" | null;

export default function HistoryTable() {
  const [sortColumn, setSortColumn] = useState<SortColumn>("created");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const isWalletConnected = false; // Placeholder

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };

  const SortIcon = ({ column }: { column: SortColumn }) => {
    const isActive = sortColumn === column;
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="ml-1"
      >
        <path
          d="M6.66669 7.49935L10 4.16602L13.3334 7.49935"
          stroke={isActive && sortDirection === "asc" ? "#E6E6E6" : "#808080"}
          strokeWidth="1.5"
          strokeLinecap="square"
        />
        <path
          d="M13.3334 12.4993L10 15.8327L6.66669 12.4993"
          stroke={isActive && sortDirection === "desc" ? "#E6E6E6" : "#808080"}
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    );
  };

  return (
    <div className="bg-[rgba(20,20,20,1)] rounded-xl overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto scrollbar-thin scrollbar-thumb-[rgba(60,60,60,1)] scrollbar-track-transparent">
        <div className="min-w-full">
          {/* Header */}
          <div className="grid grid-cols-5 gap-4 bg-[rgba(20,20,20,1)] px-6 py-4 border-b border-[rgba(40,40,40,1)]">
            <button
              onClick={() => handleSort("type")}
              className="flex items-center text-left text-sm text-[rgba(150,150,150,1)] hover:text-[rgba(200,200,200,1)] transition-colors"
            >
              <span>Type</span>
              <SortIcon column="type" />
            </button>
            <button
              onClick={() => handleSort("txnHash")}
              className="flex items-center text-left text-sm text-[rgba(150,150,150,1)] hover:text-[rgba(200,200,200,1)] transition-colors"
            >
              <span>Txn Hash</span>
              <SortIcon column="txnHash" />
            </button>
            <button
              onClick={() => handleSort("block")}
              className="flex items-center text-left text-sm text-[rgba(150,150,150,1)] hover:text-[rgba(200,200,200,1)] transition-colors"
            >
              <span>Block</span>
              <SortIcon column="block" />
            </button>
            <button
              onClick={() => handleSort("amount")}
              className="flex items-center text-left text-sm text-[rgba(150,150,150,1)] hover:text-[rgba(200,200,200,1)] transition-colors"
            >
              <span>Amount</span>
              <SortIcon column="amount" />
            </button>
            <button
              onClick={() => handleSort("created")}
              className="flex items-center text-left text-sm text-[rgba(150,150,150,1)] hover:text-[rgba(200,200,200,1)] transition-colors"
            >
              <span>Created</span>
              <SortIcon column="created" />
            </button>
          </div>

          {/* Empty State */}
          {!isWalletConnected && (
            <div className="px-6">
              <ConnectWalletState
                title="Empty Staking History"
                description="Your history will appear here once you make your first stake."
                showButton={false}
              />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Table */}
      <div className="lg:hidden">
        {/* Header */}
        <div className="grid grid-cols-2 gap-4 px-6 py-4 border-b border-[rgba(40,40,40,1)]">
          <button
            onClick={() => handleSort("type")}
            className="flex items-center text-left text-sm text-[rgba(150,150,150,1)]"
          >
            <span>Type</span>
            <SortIcon column="type" />
          </button>
          <button
            onClick={() => handleSort("amount")}
            className="flex items-center text-left text-sm text-[rgba(150,150,150,1)]"
          >
            <span>Amount</span>
            <SortIcon column="amount" />
          </button>
        </div>

        {/* Empty State */}
        {!isWalletConnected && (
          <div className="px-6">
            <ConnectWalletState
              title="Empty Staking History"
              description="Your history will appear here once you make your first stake."
              showButton={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
