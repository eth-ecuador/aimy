"use client";

import { DatePickerWithRange } from "@/components/date-range-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterBarProps {
  dateRange: { from: Date; to: Date };
  setDateRange: (range: { from: Date; to: Date }) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function FilterBar({
  dateRange,
  setDateRange,
  selectedCategory,
  setSelectedCategory,
}: FilterBarProps) {
  return (
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
  );
}
