import Image from "next/image";
import * as React from "react";

interface LogoProps {
  height?: number;
  width?: number;
}

export default function Logo({ height = 50, width = 50}: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Tech Pills Logo"
      width={width}
      height={height}
    />
  );
}
