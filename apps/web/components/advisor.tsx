"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { DeFiOpportunityCard } from "./defi-opportunity-card"
import { DeFiComparisonChart } from "./defi-comparison-chart"

const defiOpportunities = [
  { id: 1, name: "Ethereum Staking", type: "Staking", apy: 4.5, risk: "Low", minInvestment: 1000 },
  { id: 2, name: "Uniswap Liquidity Pool", type: "Liquidity Provision", apy: 12, risk: "Medium", minInvestment: 500 },
  { id: 3, name: "Aave Lending", type: "Lending", apy: 3.5, risk: "Low", minInvestment: 100 },
  { id: 4, name: "Synthetix Staking", type: "Staking", apy: 15, risk: "High", minInvestment: 2000 },
  { id: 5, name: "Compound Lending", type: "Lending", apy: 4, risk: "Low", minInvestment: 250 },
  { id: 6, name: "Curve Finance Pool", type: "Liquidity Provision", apy: 8, risk: "Medium", minInvestment: 1000 },
]

export function Advisor() {
  const [riskFilter, setRiskFilter] = useState("all")
  const [minInvestment, setMinInvestment] = useState(0)

  const filteredOpportunities = defiOpportunities.filter(
    (opp) => (riskFilter === "all" || opp.risk.toLowerCase() === riskFilter) && opp.minInvestment >= minInvestment
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Select value={riskFilter} onValueChange={setRiskFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Risk Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Risks</SelectItem>
            <SelectItem value="low">Low Risk</SelectItem>
            <SelectItem value="medium">Medium Risk</SelectItem>
            <SelectItem value="high">High Risk</SelectItem>
          </SelectContent>
        </Select>
        <div className="w-full sm:w-[300px] flex flex-col gap-2">
          <label htmlFor="min-investment" className="text-sm font-medium">
            Minimum Investment: ${minInvestment}
          </label>
          <Slider
            id="min-investment"
            min={0}
            max={2000}
            step={100}
            value={[minInvestment]}
            onValueChange={(value) => setMinInvestment(value[0])}
          />
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>DeFi Opportunities Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <DeFiComparisonChart opportunities={filteredOpportunities} />
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredOpportunities.map((opportunity) => (
          <DeFiOpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>
    </div>
  )
}

