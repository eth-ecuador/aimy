import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface FormSuccessProps {
  message: string;
}

export default function FormSuccess({ message }: FormSuccessProps) {
  return (
    <div className="bg-emerald-500/20 p-3 text-emerald-500 flex items-center rounded-md gap-x-1 text-sm">
      <FaCheckCircle className="h-4 w-4" />
      <span className="ml-2">{message}</span>
    </div>
  );
}
