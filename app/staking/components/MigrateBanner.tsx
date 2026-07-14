import Link from "next/link";

export default function MigrateBanner() {
  return (
    <div className="bg-[rgba(20,20,20,1)] rounded-xl p-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-[rgba(230,230,230,1)] text-sm lg:text-base">
        Onyx Liquid Staking earns <span className="text-[#00ff41] font-medium">30.00% APR</span> — a higher rate than Ethereum staking.
      </p>
      <Link
        href="/connectWallet"
        className="flex items-center gap-2 text-white font-bold sm:font-medium sm:px-5 sm:py-2.5 sm:bg-[rgba(40,40,40,1)] sm:hover:bg-[rgba(50,50,50,1)] sm:rounded-lg transition-colors duration-150"
      >
        Migrate
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7.5 4.4 13.1 10 7.5 15.6"
            stroke="currentColor"
            strokeWidth="1.44"
            strokeLinecap="square"
          />
        </svg>
      </Link>
    </div>
  );
}
