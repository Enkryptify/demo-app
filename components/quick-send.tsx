"use client"

import { useState } from "react"
import { Send } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const frequentContacts = [
  { id: "1", name: "Sarah", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "2", name: "Mike", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "3", name: "Alex", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "4", name: "Emma", avatar: "/placeholder.svg?height=32&width=32" },
]

export function QuickSend() {
  const [amount, setAmount] = useState("")
  const [selectedContact, setSelectedContact] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {frequentContacts.map((contact) => (
          <Button
            key={contact.id}
            variant={selectedContact === contact.id ? "default" : "outline"}
            className="flex gap-2"
            onClick={() => setSelectedContact(contact.id)}
          >
            <Avatar className="h-5 w-5">
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name[0]}</AvatarFallback>
            </Avatar>
            {contact.name}
          </Button>
        ))}
      </div>

      <Separator />

      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">$</div>
          <Input
            id="amount"
            type="number"
            placeholder="0.00"
            className="pl-7"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      <Button className="w-full gap-2">
        <Send className="h-4 w-4" />
        Send Money
      </Button>
    </div>
  )
}

