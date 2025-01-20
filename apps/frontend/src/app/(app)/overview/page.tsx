import { FinanceCard } from "@/components/dashboard/finance/financial-card";
import { FinancialTrendChart } from "@/components/dashboard/finance/trend-chart";
import { FinanceGoals } from "@/components/dashboard/finance/finance-goals";
import DashboardHeader from "@/components/dashboard/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChartLine, PiggyBank, Wallet } from "lucide-react";

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto p-4 md:p-8 space-y-8 flex flex-col justify-center items-center">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FinanceCard
            title="Total Balance"
            value="$12,345.67"
            trend={2.3}
            description="Available funds across all accounts"
            icon={Wallet}
          />
          <FinanceCard
            title="Monthly Savings"
            value="$2,345.00"
            trend={5.7}
            description="78% of monthly target"
            icon={PiggyBank}
            progress={78}
          />
          <FinanceCard
            title="Portfolio Value"
            value="$98,765.43"
            trend={-1.2}
            description="Total investment value"
            icon={ChartLine}
          />
        </div>

        <div className="flex justify-center items-center w-full max-w-[50rem]">
          <Tabs defaultValue="trends" className="w-full">
            <TabsList>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
            </TabsList>
            <TabsContent value="trends">
              <div className="bg-white p-4 rounded-lg border">
                <FinancialTrendChart />
              </div>
            </TabsContent>
            <TabsContent value="analysis">
              <div className="bg-white p-4 rounded-lg border">
                {/* Add your analysis content here */}
              </div>
            </TabsContent>
            <TabsContent value="goals">
              <div className="bg-white p-4 rounded-lg border">
                <FinanceGoals />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
