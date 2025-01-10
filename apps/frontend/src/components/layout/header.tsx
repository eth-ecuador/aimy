import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Logo from "../ui/logo";
import LoginButton from "../auth/buttons/login-button";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="#" className="flex items-center" prefetch={false}>
            <Logo />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <LoginButton>
            <Button size="sm">
              Login
            </Button>
          </LoginButton>
        </div>
      </div>
    </header>
  );
}
