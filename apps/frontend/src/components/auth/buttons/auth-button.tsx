import React from "react";
import SignOutButton from "./signout-button";
import { auth } from "@/auth";
import WalletButton from "./wallet-button";

export default async function AuthButton() {
  const session = await auth();

  return (
    <div className="flex">
      <WalletButton />
    </div>
  );
}
