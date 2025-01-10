import React from "react";
import { FaTriangleExclamation } from "react-icons/fa6";

interface FormErrorProps {
  message: string;
}

export default function FormError({ message }: FormErrorProps) {
  return (
    <div className="bg-destructive/20 p-3 text-destructive flex items-center rounded-md gap-x-1 text-sm">
      <FaTriangleExclamation className="h-4 w-4" />
      <span className="ml-2">{message}</span>
    </div>
  );
}
