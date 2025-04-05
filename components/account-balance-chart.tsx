"use client"

import { format } from "date-fns"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface AccountBalanceChartProps {
  data: {
    date: string
    amount: number
  }[]
}

export function AccountBalanceChart({ data }: AccountBalanceChartProps) {
  const formattedData = data.map((item) => ({
    date: format(new Date(item.date), "MMM"),
    amount: item.amount,
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={formattedData}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
        <XAxis dataKey="date" tickLine={false} axisLine={false} padding={{ left: 20, right: 20 }} />
        <YAxis
          tickFormatter={(value) => `$${value.toLocaleString()}`}
          tickLine={false}
          axisLine={false}
          padding={{ top: 20, bottom: 20 }}
        />
        <Tooltip
          formatter={(value: number) => [`$${value.toLocaleString()}`, "Balance"]}
          labelFormatter={(label) => `${label}`}
          contentStyle={{
            backgroundColor: "white",
            borderRadius: "8px",
            border: "1px solid #f0f0f0",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#6366f1"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6, fill: "#6366f1", stroke: "white", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

