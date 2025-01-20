"use client";

import { signOut } from "@/actions/auth/signout";
import { Button } from "@/components/ui/button";
import React from "react";

export default function SignOutButton({}) {
  return (
    <form className="cursor-pointer" action={signOut}>
      <Button size="sm" type="submit">
        Sign out
      </Button>
    </form>
  );
}
