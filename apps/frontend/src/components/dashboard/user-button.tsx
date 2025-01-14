import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface UserButtonProps {
  name: string;
  address: string;
}

export default function UserButton({ name, address }: UserButtonProps) {
  return (
    <div className="flex gap-2 md:gap-3 items-center justify-center w-48">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="hidden md:block">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs">{address}</p>
      </div>
    </div>
  );
}
