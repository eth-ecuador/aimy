import React from "react";
import LoginButton from "./login-button";
import { Button } from "@/components/ui/button";
import SignOutButton from "./signout-button";
import { auth } from "@/auth";

export default async function AuthButton() {
  const session = await auth();

  if (!session) {
    return (
      <LoginButton>
        <Button size="sm">Login</Button>
      </LoginButton>
    );
  }

  return <SignOutButton />;
}
