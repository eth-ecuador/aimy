// finance-goals.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target } from "lucide-react";

const goals = [
  {
    name: "Emergency Fund",
    current: 7500,
    target: 10000,
    progress: 75,
  },
  {
    name: "Retirement",
    current: 45000,
    target: 100000,
    progress: 45,
  },
  {
    name: "Vacation",
    current: 4500,
    target: 5000,
    progress: 90,
  },
];

export function FinanceGoals() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Financial Goals</CardTitle>
        <Target className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{goal.name}</span>
              <span className="text-sm text-muted-foreground">
                ${goal.current.toLocaleString()} / $
                {goal.target.toLocaleString()}
              </span>
            </div>
            <Progress value={goal.progress} />
            <p className="text-xs text-muted-foreground text-right">
              {goal.progress}% complete
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
