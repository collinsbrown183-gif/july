import HistoryTable from "./HistoryTable";

export default function HistorySection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white mb-2">Staking History</h2>
        <p className="text-sm text-[rgba(150,150,150,1)]">History of your staking activity</p>
      </div>
      <HistoryTable />
    </div>
  );
}
