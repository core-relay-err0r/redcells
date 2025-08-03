"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  tier: string
  price: string
  description: string
  features: string[]
  isFeatured?: boolean
}

export function PricingCard({ tier, price, description, features, isFeatured }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-lg border border-border bg-secondary/30 p-6 shadow-sm",
        isFeatured && "border-primary",
      )}
    >
      {isFeatured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
          Most Popular
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-primary">{tier}</h3>
        <p className="mt-2 text-2xl font-bold">{price}</p>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <hr className="my-6 border-border" />
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button variant="outline" className="mt-8 bg-transparent" asChild>
        <Link href="/submit">Get Started</Link>
      </Button>
    </div>
  )
}
