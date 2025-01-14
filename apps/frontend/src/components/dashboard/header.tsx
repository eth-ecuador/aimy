import React from "react";
import UserButton from "./user-button";

export default function DashboardHeader({ title }: { title: string }) {
  return (
    <header className="px-6 flex justify-between items-center top-0 left-0 right-0 z-50 h-16 border-b bg-cyan-500 w-full shadow-md">
      <div className="text-lg font-semibold">{title}</div>
      <UserButton name={"Alex"} address={"0x1234"} />
    </header>
  );
}
