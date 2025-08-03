"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

const pricingTiers = [
  {
    name: "Technical Analysis",
    isPopular: true,
    price: "USD 200",
    turnaround: "2–4 h",
    features: [
      "AI-powered situational scan (Seraphim Core™)",
      "Deep-data sources beyond public internet",
      "Step-by-step action plan with costs & timelines",
    ],
    description:
      'Covers deals up to <span class="text-white font-medium">$2 million</span> — premium risk check at <span class="text-white font-medium">0.01% cost</span>.',
    useCases: [
      "Pre-payment counterparty vetting",
      "Post-payment red-flag review",
      "Funds frozen by banks / OFAC",
      "Crypto-exchange asset lock",
    ],
    buttonText: "Start Investigation Now",
    buttonLink: "/run-check?plan=technical",
    buttonVariant: "primary",
  },
  {
    name: "Tactical Probe",
    isPopular: false,
    price: "from USD 2,000",
    turnaround: "1-2 business days",
    features: ["Director & shareholder mapping", "Adverse media + insider tips", "Network graph of connections"],
    description:
      'Ideal for transactions <span class="text-white">$0.5-10m</span>. <br/> <span class="text-[#e00c33] font-medium">Typical ROI:</span> blocking a $250k loss.',
    useCases: [],
    buttonText: "Get this report",
    buttonLink: "/run-check?plan=tactical",
    buttonVariant: "link",
  },
  {
    name: "Strategic Due Diligence",
    isPopular: false,
    price: "from USD 10,000",
    turnaround: "1-2 weeks",
    features: [
      "Full asset & liability trace",
      "On-ground human source inquiries",
      "Comprehensive risk memo for investors",
    ],
    description: 'Recommended for deals <span class="text-white">$10m+</span>, M&A, JV or equity stakes.',
    useCases: [],
    buttonText: "Get this report",
    buttonLink: "/run-check?plan=strategic",
    buttonVariant: "link",
  },
  {
    name: "Reclamation Ops",
    isPopular: false,
    price: "Custom Quote",
    turnaround: "custom",
    features: ["Cross-jurisdictional asset seizure", "Liaison with law enforcement", "Ongoing recovery management"],
    description:
      "3-phase roadmap, success-fee model after recovery. Suitable when fraud has already occurred and funds must be clawed back.",
    useCases: [],
    buttonText: "Book Recovery Call",
    buttonLink: "/contact?subject=recovery",
    buttonVariant: "primary",
  },
]

export function NewPricingSection() {
  return (
    <section className="w-full bg-background py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Intelligence Tiers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Choose the level of scrutiny your case requires.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="relative flex flex-col gap-6 rounded-xl border border-zinc-800 bg-zinc-900/70 p-8 transition hover:shadow-lg hover:ring-2 hover:ring-[#e00c33]/50"
            >
              {tier.isPopular && (
                <span className="absolute -top-3 left-4 rounded-full bg-[#e00c33]/20 px-3 py-1 text-xs text-[#e00c33]">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
              <p className="text-3xl font-bold">
                {tier.price} <span className="text-base font-normal text-gray-400">{tier.turnaround}</span>
              </p>
              <ul className="space-y-3 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-[#e00c33]">✔</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <p
                className="text-xs leading-relaxed text-gray-400"
                dangerouslySetInnerHTML={{ __html: tier.description }}
              />
              {tier.useCases.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#e00c33]">Use cases:</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-xs marker:text-[#e00c33]">
                    {tier.useCases.map((useCase) => (
                      <li key={useCase} className="text-gray-300">
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Link
                href={tier.buttonLink}
                className={cn(
                  "mt-auto",
                  tier.buttonVariant === "primary"
                    ? "inline-block rounded-lg bg-[#e00c33] py-3 text-center text-white shadow-md hover:bg-[#c8002b]"
                    : "text-[#e00c33] underline underline-offset-4 hover:text-[#ff3355]",
                )}
              >
                {tier.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
