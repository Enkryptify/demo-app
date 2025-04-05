"use client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Bell, CreditCard, Home, LogOut, PieChart, Search, Send, Settings, User, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { AccountBalanceChart } from "./account-balance-chart"
import { CreditCardComponent } from "./credit-card"
import { InvoicesList } from "./invoices-list"
import { QuickSend } from "./quick-send"
import { RecentTransactions } from "./recent-transactions"

// Types
interface UserType {
  id: string
  name: string
  email: string
  avatar: string
}

interface FinancialData {
  accountBalance: number
  expenses: number
  creditCard: {
    number: string
    name: string
    expiry: string
    cvv: string
    type: string
  }
  balanceHistory: {
    date: string
    amount: number
  }[]
  invoices: {
    id: string
    name: string
    amount: number
    dueDate: string
    status: "pending" | "paid" | "overdue"
  }[]
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

// Mock API calls
const fetchUserData = async (): Promise<UserType> => {
  // Simulate API call
  return axios.get("/api/user").then((res) => res.data)
}

const fetchFinancialData = async (): Promise<FinancialData> => {
  // Simulate API call
  return axios.get("/api/financial-data").then((res) => res.data)
}

// Mock data for React Query
const mockUserData: UserType = {
  id: "user-123",
  name: "Siebe",
  email: "siebe@example.com",
  avatar: "/placeholder-user.jpg",
}

const mockFinancialData: FinancialData = {
  accountBalance: 24680.42,
  expenses: 1234.56,
  creditCard: {
    number: "4242 4242 4242 4242",
    name: "SIEBE JOHNSON",
    expiry: "12/25",
    cvv: "123",
    type: "visa",
  },
  balanceHistory: Array.from({ length: 12 }, (_, i) => ({
    date: new Date(2023, i, 1).toISOString(),
    amount: 20000 + Math.random() * 10000,
  })),
  invoices: [
    {
      id: "inv-001",
      name: "Internet Service",
      amount: 89.99,
      dueDate: "2023-06-15",
      status: "pending",
    },
    {
      id: "inv-002",
      name: "Electricity Bill",
      amount: 145.32,
      dueDate: "2023-06-20",
      status: "pending",
    },
    {
      id: "inv-003",
      name: "Water Bill",
      amount: 42.5,
      dueDate: "2023-06-25",
      status: "pending",
    },
  ],
  transactions: [
    {
      id: "tx-001",
      name: "Sarah Johnson",
      amount: 250.0,
      date: "2023-06-01",
      type: "outgoing",
      category: "Transfer",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "tx-002",
      name: "Coffee Shop",
      amount: 5.75,
      date: "2023-06-02",
      type: "outgoing",
      category: "Food & Drink",
    },
    {
      id: "tx-003",
      name: "Salary Deposit",
      amount: 3200.0,
      date: "2023-06-03",
      type: "incoming",
      category: "Income",
    },
    {
      id: "tx-004",
      name: "Michael Chen",
      amount: 120.0,
      date: "2023-06-04",
      type: "incoming",
      category: "Transfer",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "tx-005",
      name: "Grocery Store",
      amount: 87.32,
      date: "2023-06-05",
      type: "outgoing",
      category: "Shopping",
    },
  ],
}

export default function Dashboard() {
  // In a real app, these would be actual API calls
  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: () => Promise.resolve(mockUserData),
  })

  const { data: financialData } = useQuery({
    queryKey: ["financialData"],
    queryFn: () => Promise.resolve(mockFinancialData),
  })

  if (!userData || !financialData) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar className="border-r">
          <SidebarHeader className="flex h-14 items-center border-b px-4">
            <div className="flex items-center gap-2 font-semibold">
              <Wallet className="h-6 w-6 text-primary" />
              <span>FinDash</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <a href="#">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Send className="h-4 w-4" />
                    <span>Send Money</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Wallet className="h-4 w-4" />
                    <span>Earn Money</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <CreditCard className="h-4 w-4" />
                    <span>Transactions</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="mt-auto border-t p-4">
            <div className="flex flex-col gap-2">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <User className="h-3 w-3" />
                    </div>
                    <span>{userData.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>View Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
            <div className="flex-1">
              <h1 className="text-xl font-semibold">Welcome, {userData.name}</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="w-64 bg-background pl-8" />
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 overflow-auto p-6">
            <div className="grid h-full grid-cols-4 gap-6">
              {/* Left section - 75% */}
              <div className="col-span-3 flex flex-col gap-6">
                {/* Top cards */}
                <div className="grid grid-cols-3 gap-6">
                  {/* Credit Card */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Credit Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CreditCardComponent creditCard={financialData.creditCard} />
                    </CardContent>
                  </Card>

                  {/* Account Balance */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">${financialData.accountBalance.toLocaleString()}</div>
                      <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Tabs defaultValue="checking" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="checking">Checking</TabsTrigger>
                          <TabsTrigger value="savings">Savings</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </CardFooter>
                  </Card>

                  {/* Expenses */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Expenses this month</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">${financialData.expenses.toLocaleString()}</div>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center text-xs">
                            <span className="flex-1">Food</span>
                            <span>35%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-full w-[35%] rounded-full bg-primary"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" size="sm" className="w-full">
                        <PieChart className="mr-2 h-4 w-4" />
                        View breakdown
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                {/* Balance Chart */}
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>Account Balance</CardTitle>
                    <CardDescription>Your balance over the last year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AccountBalanceChart data={financialData.balanceHistory} />
                  </CardContent>
                </Card>

                {/* Invoices */}
                <Card>
                  <CardHeader>
                    <CardTitle>Open Invoices</CardTitle>
                    <CardDescription>Invoices that need to be paid</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <InvoicesList invoices={financialData.invoices} />
                  </CardContent>
                </Card>
              </div>

              {/* Right section - 25% */}
              <div className="col-span-1 flex flex-col gap-6">
                {/* Quick Send */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Send</CardTitle>
                    <CardDescription>Send money to your contacts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <QuickSend />
                  </CardContent>
                </Card>

                {/* Recent Transactions */}
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Your latest financial activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentTransactions transactions={financialData.transactions} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

