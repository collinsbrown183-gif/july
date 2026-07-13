import Image from "next/image";
import Link from "next/link";

interface ConnectWalletStateProps {
  title?: string;
  description?: string;
  showButton?: boolean;
}

export default function ConnectWalletState({
  title = "Connect Wallet",
  description = "Connect your wallet to see your staking data",
  showButton = true,
}: ConnectWalletStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 lg:p-8 gap-5">
      <Image
        src="/icons/onyx_logo_shadow.svg"
        alt="Onyx Logo"
        width={140}
        height={140}
        className="opacity-15"
      />
      <div className="text-center space-y-1.5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-[rgba(150,150,150,1)] text-center">{description}</p>
      </div>
      {showButton && (
        <Link
          href="/connectWallet"
          className="flex items-center justify-center gap-2.5 w-full px-6 py-3.5 bg-[rgba(220,220,220,1)] hover:bg-white rounded-full transition-colors duration-150"
        >
          <Image
            src="/icons/wallet.svg"
            alt="Wallet"
            width={18}
            height={18}
            style={{ filter: "invert(1) brightness(0)" }}
          />
          <span className="text-black font-medium">Connect Wallet</span>
        </Link>
      )}
    </div>
  );
}
