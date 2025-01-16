"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PortfolioValueChart } from "./portfolio-value-chart"
import { AssetPerformanceCard } from "./asset-performance-card"
import { CryptoSidebar } from "./crypto-sidebar"

const assets = [
  { name: "Bitcoin", symbol: "BTC", value: 32000, change24h: 2.5, amount: 0.5 },
  { name: "Ethereum", symbol: "ETH", value: 2000, change24h: -1.2, amount: 5 },
  { name: "Cardano", symbol: "ADA", value: 1.2, change24h: 5.7, amount: 1000 },
  { name: "Polkadot", symbol: "DOT", value: 15, change24h: 3.2, amount: 100 },
]

export function Portfolio() {
  const totalValue = assets.reduce((sum, asset) => sum + asset.value * asset.amount, 0)
  const dailyChange = assets.reduce((sum, asset) => sum + asset.value * asset.amount * (asset.change24h / 100), 0)
  const bestPerformer = assets.reduce((best, asset) => asset.change24h > best.change24h ? asset : best)

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-grow space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Value Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <PortfolioValueChart />
          </CardContent>
        </Card>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {assets.map((asset) => (
            <AssetPerformanceCard key={asset.symbol} asset={asset} />
          ))}
        </div>
      </div>
      <CryptoSidebar
        totalValue={totalValue}
        dailyChange={dailyChange}
        bestPerformer={bestPerformer}
      />
    </div>
  )
}

