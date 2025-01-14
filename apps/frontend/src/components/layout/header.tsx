// components/layout/navbar.tsx
import React from "react";
import Link from "next/link";
import Logo from "../brand/logo";
import AuthButton from "../auth/buttons/auth-button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b bg-background">
      <div className="mx-auto flex h-full w-full items-center justify-between px-4">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Logo />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden gap-4 md:flex">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium transition-colors hover:text-primary"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <AuthButton />
      </div>
    </header>
  );
}
