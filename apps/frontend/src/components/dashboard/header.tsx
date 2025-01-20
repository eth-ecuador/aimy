import React from "react";
import AuthButton from "../auth/buttons/auth-button";

export default function DashboardHeader() {
  return (
    <header className="px-6 flex justify-between items-center top-0 left-0 right-0 z-50 h-16 border-b bg-cyan-500 w-full shadow-md">
      <div></div>
      <AuthButton />
    </header>
  );
}
