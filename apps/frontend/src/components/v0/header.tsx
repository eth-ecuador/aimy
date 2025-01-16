import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Logo" width={32} height={32} />
        <span className="ml-2 text-xl font-semibold">FinDash</span>
      </div>
      <Button variant="outline">Connect Argent X</Button>
    </header>
  )
}

