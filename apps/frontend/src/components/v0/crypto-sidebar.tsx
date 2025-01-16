import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

interface CryptoSidebarProps {
  totalValue: number
  dailyChange: number
  bestPerformer: {
    name: string
    symbol: string
    change24h: number
  }
}

export function CryptoSidebar({ totalValue, dailyChange, bestPerformer }: CryptoSidebarProps) {
  const isPositive = dailyChange > 0

  return (
    <div className="w-full lg:w-64 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Portfolio Value</p>
            <p className="text-2xl font-bold">${totalValue.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">24h Gain/Loss</p>
            <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
              <span className="ml-1 text-lg font-bold">${Math.abs(dailyChange).toFixed(2)}</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Best Performer</p>
            <p className="text-lg font-bold">{bestPerformer.name} ({bestPerformer.symbol})</p>
            <div className="flex items-center text-green-600">
              <ArrowUpIcon className="h-4 w-4" />
              <span className="ml-1 text-sm">{bestPerformer.change24h.toFixed(2)}%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

