"use client"

import { format } from "date-fns"
import { ArrowDownLeft, ArrowUpRight } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

interface RecentTransactionsProps {
  transactions: {
    id: string
    name: string
    amount: number
    date: string
    type: "incoming" | "outgoing"
    category: string
    avatar?: string
  }[]
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              {transaction.avatar ? (
                <Avatar>
                  <AvatarImage src={transaction.avatar} alt={transaction.name} />
                  <AvatarFallback>{transaction.name[0]}</AvatarFallback>
                </Avatar>
              ) : transaction.type === "incoming" ? (
                <ArrowDownLeft className="h-5 w-5 text-green-500" />
              ) : (
                <ArrowUpRight className="h-5 w-5 text-red-500" />
              )}
            </div>
            <div className="flex-1 space-y-1">
              <p className="font-medium leading-none">{transaction.name}</p>
              <p className="text-xs text-muted-foreground">
                {format(new Date(transaction.date), "MMM d")} · {transaction.category}
              </p>
            </div>
            <div className={transaction.type === "incoming" ? "text-green-500" : "text-red-500"}>
              {transaction.type === "incoming" ? "+" : "-"}${transaction.amount.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

