"use client"

import { CreditCard } from "lucide-react"

interface CreditCardProps {
  creditCard: {
    number: string
    name: string
    expiry: string
    cvv: string
    type: string
  }
}

export function CreditCardComponent({ creditCard }: CreditCardProps) {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-4 text-white shadow-lg">
      <div className="absolute right-4 top-4 flex h-8 w-12 items-center justify-center rounded bg-white/20 backdrop-blur-sm">
        {creditCard.type === "visa" ? (
          <span className="font-bold italic">VISA</span>
        ) : (
          <CreditCard className="h-6 w-6" />
        )}
      </div>
      <div className="mt-8 space-y-6">
        <div className="flex justify-between">
          <div className="h-6 w-10 rounded bg-gradient-to-r from-yellow-400 to-yellow-200"></div>
        </div>
        <div className="text-lg tracking-widest">{creditCard.number}</div>
        <div className="flex justify-between">
          <div>
            <div className="text-xs opacity-75">CARD HOLDER</div>
            <div>{creditCard.name}</div>
          </div>
          <div>
            <div className="text-xs opacity-75">EXPIRES</div>
            <div>{creditCard.expiry}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

