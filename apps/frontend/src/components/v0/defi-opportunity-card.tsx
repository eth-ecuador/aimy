import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface DeFiOpportunity {
  id: number
  name: string
  type: string
  apy: number
  risk: string
  minInvestment: number
}

export function DeFiOpportunityCard({ opportunity }: { opportunity: DeFiOpportunity }) {
  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low":
        return "text-green-600"
      case "medium":
        return "text-yellow-600"
      case "high":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{opportunity.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Type: {opportunity.type}</p>
          <p className="text-2xl font-bold">{opportunity.apy}% APY</p>
          <p className={`text-sm font-medium ${getRiskColor(opportunity.risk)}`}>
            Risk: {opportunity.risk}
          </p>
          <p className="text-sm text-muted-foreground">
            Min. Investment: ${opportunity.minInvestment}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Invest Now</Button>
      </CardFooter>
    </Card>
  )
}

