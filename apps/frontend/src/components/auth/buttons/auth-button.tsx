import { useSession } from "next-auth/react";

import React from "react";
import LoginButton from "./login-button";
import { Button } from "@/components/ui/button";
import SignOutButton from "./signout-button";
import { auth } from "@/auth";

interface AuthButtonProps {
  isLoggedIn: boolean;
}

export default async function AuthButton({ isLoggedIn }: AuthButtonProps) {
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
