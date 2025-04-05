"use client"

import { format } from "date-fns"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface InvoicesListProps {
  invoices: {
    id: string
    name: string
    amount: number
    dueDate: string
    status: "pending" | "paid" | "overdue"
  }[]
}

export function InvoicesList({ invoices }: InvoicesListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.name}</TableCell>
            <TableCell>${invoice.amount.toFixed(2)}</TableCell>
            <TableCell>{format(new Date(invoice.dueDate), "MMM d, yyyy")}</TableCell>
            <TableCell>
              <Badge
                variant={
                  invoice.status === "paid" ? "outline" : invoice.status === "overdue" ? "destructive" : "default"
                }
              >
                {invoice.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button size="sm">Pay Now</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

