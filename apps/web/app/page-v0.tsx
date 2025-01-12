import { Header } from "@/components/header"
import { Dashboard } from "@/components/dashboard"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <Dashboard />
      </main>
    </div>
  )
}

