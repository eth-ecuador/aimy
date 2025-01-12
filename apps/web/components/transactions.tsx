"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowDownIcon, ArrowUpIcon, SearchIcon } from 'lucide-react'

const transactions = [
  { id: 1, date: "2023-06-01", description: "Salary Deposit", amount: 5000, type: "income" },
  { id: 2, date: "2023-06-02", description: "Grocery Shopping", amount: -150, type: "expense" },
  { id: 3, date: "2023-06-03", description: "Online Purchase", amount: -75.50, type: "expense" },
  { id: 4, date: "2023-06-05", description: "Freelance Payment", amount: 500, type: "income" },
  { id: 5, date: "2023-06-07", description: "Utility Bill", amount: -200, type: "expense" },
  { id: 6, date: "2023-06-10", description: "Restaurant Dinner", amount: -80, type: "expense" },
  { id: 7, date: "2023-06-15", description: "Investment Dividend", amount: 120, type: "income" },
  { id: 8, date: "2023-06-20", description: "Public Transport", amount: -30, type: "expense" },
]

export function Transactions() {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (typeFilter === "all" || transaction.type === typeFilter)
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
          <div className="relative">
            <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Transactions</SelectItem>
              <SelectItem value="income">Income</SelectItem>
              <SelectItem value="expense">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell className="text-right">
                    <span className={transaction.type === "income" ? "text-green-600" : "text-red-600"}>
                      {transaction.type === "income" ? (
                        <ArrowUpIcon className="inline-block h-4 w-4 mr-1" />
                      ) : (
                        <ArrowDownIcon className="inline-block h-4 w-4 mr-1" />
                      )}
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

