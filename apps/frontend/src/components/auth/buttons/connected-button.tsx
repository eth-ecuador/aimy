"use client";

import { signIn } from "next-auth/react"; // Change the import
import { useAccount } from "@starknet-react/core";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import SignOutButton from "./signout-button";

export default function ConnectedButton() {
  const { data: session, status: sessionStatus } = useSession();
  const { address, status } = useAccount();

  useEffect(() => {
    if (status === "connected" && address && !session) {
      signIn("credentials", {
        address,
        redirect: false, // Prevent automatic redirect
        callbackUrl: "/", // Optional: specify where to redirect after successful sign in
      }).then((response) => {
        if (response?.error) {
          console.error("Sign in error:", response.error);
        }
      });
    }
  }, [status, address, session]);

  if (sessionStatus === "loading") {
    return <div>Loading User...</div>;
  }

  if (sessionStatus === "authenticated" && session) {
    return (
      <div>
        <div>Connected: {JSON.stringify(session)}</div>
        <SignOutButton />
      </div>
    );
  }

  return null;
}
