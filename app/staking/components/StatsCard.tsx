import Image from "next/image";

interface StatsCardProps {
  icon: string;
  value: string;
  label: string;
  badge?: string;
}

export default function StatsCard({ icon, value, label, badge }: StatsCardProps) {
  return (
    <div className="bg-[rgba(20,20,20,1)] rounded-xl p-6 flex flex-col gap-3 min-w-[200px] lg:min-w-0 lg:w-full">
      <div className="flex items-start justify-between">
        <Image
          src={icon}
          alt={label}
          width={20}
          height={20}
          className="text-transparent opacity-70"
        />
        {badge && (
          <span className="text-[#00ff41] text-sm font-medium">{badge}</span>
        )}
      </div>
      <div className="text-3xl font-semibold text-white">{value}</div>
      <div className="text-sm text-[rgba(150,150,150,1)]">{label}</div>
    </div>
  );
}
