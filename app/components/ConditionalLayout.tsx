"use client";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar/Sidebar";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <Sidebar />
      <div className="lg:ml-[280px]">
        <div>{children}</div>
      </div>
    </>
  );
}
