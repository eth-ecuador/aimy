"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface DeFiOpportunity {
  id: number
  name: string
  type: string
  apy: number
  risk: string
  minInvestment: number
}

export function DeFiComparisonChart({ opportunities }: { opportunities: DeFiOpportunity[] }) {
  const data = opportunities.map((opp) => ({
    name: opp.name,
    apy: opp.apy,
  }))

  return (
    <ChartContainer
      config={{
        apy: {
          label: "APY",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="apy" fill="var(--color-apy)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

