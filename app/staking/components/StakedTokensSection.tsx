import StakedTokensCard from "./StakedTokensCard";
import ConnectWalletState from "./ConnectWalletState";

export default function StakedTokensSection() {
  const isWalletConnected = false;

  const tokens = [
    { icon: "/icons/stake.svg", value: "0.00 XCN", label: "Your Staked Tokens" },
    { icon: "/icons/24.svg", value: "0.00 XCN", label: "Est. Daily Earnings" },
    { icon: "/icons/claim.svg", value: "0.00 XCN", label: "To Claim" },
  ];

  return (
    <div className="space-y-4">
      {/* Title — on page background */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-1">Staked Tokens</h2>
        <p className="text-sm text-[rgba(150,150,150,1)]">View and claim your staking rewards</p>
      </div>

      {/* Mobile: simple list */}
      <div className="lg:hidden bg-[rgba(20,20,20,1)] rounded-xl overflow-hidden">
        <div className="divide-y divide-[rgba(255,255,255,0.07)]">
          {tokens.map((token, index) => (
            <div key={index} className="px-5 py-4">
              <StakedTokensCard icon={token.icon} value={token.value} label={token.label} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 2-col (not connected) or 3-col (connected) */}
      <div className="hidden lg:block bg-[rgba(20,20,20,1)] rounded-xl overflow-hidden">
        {!isWalletConnected ? (
          <div className="grid grid-cols-2">
            <div className="divide-y divide-[rgba(255,255,255,0.07)] border-r border-[rgba(35,35,35,1)]">
              {tokens.map((token, index) => (
                <div key={index} className="p-8">
                  <StakedTokensCard icon={token.icon} value={token.value} label={token.label} />
                </div>
              ))}
            </div>
            <ConnectWalletState description="Connect your wallet to see your staking data" />
          </div>
        ) : (
          <div className="p-8 grid grid-cols-3 gap-8">
            {tokens.map((token, index) => (
              <StakedTokensCard key={index} icon={token.icon} value={token.value} label={token.label} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
