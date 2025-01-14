"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FinanceCard } from "./finance-card"
import { FinancialTrendChart } from "./financial-trend-chart"
import { Summary } from "./summary"
import { Portfolio } from "./portfolio"
import { Advisor } from "./advisor"
import { Transactions } from "./transactions"
import { Investments } from "./investments"

export function Dashboard() {
  return (
    <Tabs defaultValue="dashboard" className="w-full">
      <TabsList className="flex-wrap">
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        <TabsTrigger value="advisor">Advisor</TabsTrigger>
        <TabsTrigger value="investments">Investments</TabsTrigger>
        <TabsTrigger value="transactions">Transactions</TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FinanceCard title="Total Balance" value="$12,345.67" />
          <FinanceCard title="Monthly Savings" value="$2,345.00" />
          <FinanceCard title="Portfolio Value" value="$98,765.43" />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <FinancialTrendChart />
        </div>
      </TabsContent>
      <TabsContent value="summary">
        <Summary />
      </TabsContent>
      <TabsContent value="portfolio">
        <Portfolio />
      </TabsContent>
      <TabsContent value="advisor">
        <Advisor />
      </TabsContent>
      <TabsContent value="investments">
        <Investments />
      </TabsContent>
      <TabsContent value="transactions">
        <Transactions />
      </TabsContent>
    </Tabs>
  )
}

