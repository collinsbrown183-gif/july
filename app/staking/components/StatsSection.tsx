import StatsCard from "./StatsCard";

export default function StatsSection() {
  const stats = [
    {
      icon: "/icons/trade.svg",
      value: "11.82%",
      label: "Staking APR",
      badge: "Onyx 30.00%"
    },
    {
      icon: "/icons/daily_emission.svg",
      value: "1.44M",
      label: "Daily Emission"
    },
    {
      icon: "/icons/stake.svg",
      value: "3.95B",
      label: "Total Staked"
    },
    {
      icon: "/icons/bank.svg",
      value: "768.37M",
      label: "Total Treasury"
    }
  ];

  return (
    <div className="overflow-x-auto lg:overflow-visible" style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}>
      <div className="flex gap-4 lg:grid lg:grid-cols-4 lg:w-full">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            badge={stat.badge}
          />
        ))}
      </div>
    </div>
  );
}
