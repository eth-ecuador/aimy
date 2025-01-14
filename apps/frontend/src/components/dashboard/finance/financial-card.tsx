import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";

interface FinanceCardProps {
  title: string;
  value: string;
  description?: string;
  trend?: number;
  icon?: LucideIcon;
  progress?: number;
}

export function FinanceCard({
  title,
  value,
  description,
  trend,
  icon: Icon,
  progress,
}: FinanceCardProps) {
  return (
    <Card className="w-72">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-8 w-8 text-muted-foreground" />}
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-1">
          <div className="text-2xl font-bold">{value}</div>
          {trend !== undefined && (
            <div className="flex items-center space-x-1">
              {trend > 0 ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span
                className={cn(
                  "text-sm font-medium",
                  trend > 0 ? "text-green-500" : "text-red-500"
                )}
              >
                {Math.abs(trend)}%
              </span>
            </div>
          )}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {progress !== undefined && (
          <div className="space-y-1">
            <Progress value={progress} />
            <p className="text-xs text-muted-foreground text-right">
              {progress}% of goal
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
