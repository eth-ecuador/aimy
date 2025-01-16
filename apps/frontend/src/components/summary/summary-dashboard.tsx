"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerWithRange } from "@/components/date/date-range-picker";
import { IncomeExpensesChart } from "@/components/charts/income-expenses-chart";
import { ExpenseCategoriesChart } from "@/components/charts/expenses-categories-chart";
import { SavingsTrendChart } from "@/components/charts/savings-trend-chart";

export function SummaryDashboard() {
  const [dateRange, setDateRange] = useState({
    from: new Date(2023, 0, 1),
    to: new Date(),
  });
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <DatePickerWithRange date={dateRange} setDate={setDateRange} />
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="housing">Housing</SelectItem>
            <SelectItem value="transportation">Transportation</SelectItem>
            <SelectItem value="food">Food</SelectItem>
            <SelectItem value="utilities">Utilities</SelectItem>
            <SelectItem value="insurance">Insurance</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="entertainment">Entertainment</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <IncomeExpensesChart
          dateRange={dateRange}
          category={selectedCategory}
        />
        <ExpenseCategoriesChart
          dateRange={dateRange}
          category={selectedCategory}
        />
        <SavingsTrendChart dateRange={dateRange} />
      </div>
    </div>
  );
}
