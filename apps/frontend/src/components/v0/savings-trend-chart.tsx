"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", savings: 4000 },
  { month: "Feb", savings: 3000 },
  { month: "Mar", savings: 5000 },
  { month: "Apr", savings: 2780 },
  { month: "May", savings: 1890 },
  { month: "Jun", savings: 2390 },
]

export function SavingsTrendChart({ dateRange }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Savings Trend</CardTitle>
      </CardHeader>
      <CardContent className="w-full h-[300px]">
        <ChartContainer
          config={{
            savings: {
              label: "Savings",
              color: "hsl(var(--chart-1))",
            },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="savings" stroke="var(--color-savings)" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

