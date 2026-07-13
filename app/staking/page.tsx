import StatsSection from "./components/StatsSection";
import MigrateBanner from "./components/MigrateBanner";
import StakingForm from "./components/StakingForm";
import StakedTokensSection from "./components/StakedTokensSection";
import HistorySection from "./components/HistorySection";

/**
 * Staking Page
 * 
 * Main staking interface with stats, form, staked tokens, and history
 */
export default function StakingPage() {
  return (
    <div className="min-h-screen bg-[rgba(15,15,15,1)] pt-16 lg:pt-20 pb-12 px-4 lg:px-8">
      <div className="w-full space-y-6 lg:space-y-8">
        {/* Stats Section */}
        <StatsSection />

        {/* Migrate Banner */}
        <MigrateBanner />

        {/* Staking Form - full width */}
        <StakingForm />

        {/* Staked Tokens - full width below */}
        <StakedTokensSection />

        {/* Staking History */}
        <HistorySection />
      </div>
    </div>
  );
}
