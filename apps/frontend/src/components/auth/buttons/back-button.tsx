"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface BackButtonProps {
  href: string;
  label: string;
}

export default function BackButton({ href, label }: BackButtonProps) {
  return (
    <Button variant={"link"} className="w-full" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
