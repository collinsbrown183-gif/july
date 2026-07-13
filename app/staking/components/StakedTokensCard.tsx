import Image from "next/image";

interface StakedTokensCardProps {
  icon: string;
  value: string;
  label: string;
}

export default function StakedTokensCard({ icon, value, label }: StakedTokensCardProps) {
  return (
    <>
      {/* Mobile: icon + label left, value right */}
      <div className="lg:hidden flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={icon} alt={label} width={18} height={18} className="opacity-70 shrink-0" />
          <span className="text-sm text-[rgba(180,180,180,1)]">{label}</span>
        </div>
        <span className="text-white font-semibold">{value}</span>
      </div>

      {/* Desktop: vertical — icon, value, label */}
      <div className="hidden lg:flex flex-col gap-2">
        <Image src={icon} alt={label} width={20} height={20} className="opacity-70" />
        <div className="text-2xl font-semibold text-white">{value}</div>
        <div className="text-sm text-[rgba(150,150,150,1)]">{label}</div>
      </div>
    </>
  );
}
