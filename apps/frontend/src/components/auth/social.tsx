"use client";

import React from "react";
import { FaGithub } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { FcGoogle } from "react-icons/fc";

export default function Social() {
  return (
    <>
      <div className="w-full">
        <div className="relative w-full">
          <Separator className="my-4" />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
            Or continue with
          </div>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <Button className="w-full" size="lg" variant="outline">
            <FcGoogle className="w-5 h-5" />
          </Button>
          <Button className="w-full" size="lg" variant="outline">
            <FaGithub className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </>
  );
}
