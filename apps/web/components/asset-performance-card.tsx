import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

interface Asset {
  name: string
  symbol: string
  value: number
  change24h: number
  amount: number
}

export function AssetPerformanceCard({ asset }: { asset: Asset }) {
  const totalValue = asset.value * asset.amount
  const isPositive = asset.change24h > 0

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {asset.name} ({asset.symbol})
        </CardTitle>
        <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
          <span className="ml-1 text-xs">{asset.change24h.toFixed(2)}%</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${totalValue.toFixed(2)}</div>
        <p className="text-xs text-muted-foreground">
          {asset.amount} {asset.symbol} @ ${asset.value.toFixed(2)}
        </p>
      </CardContent>
    </Card>
  )
}

