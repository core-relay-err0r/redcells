import { Bot, FileText, Search, ShieldCheck, UserCheck, type LucideIcon } from "lucide-react"
import { SeoTopicsGrid } from "@/components/seo-topics-grid"
import { NewPricingSection } from "@/components/new-pricing-section"
import { FullscreenHero } from "@/components/fullscreen-hero"
import { UseCasesStrip } from "@/components/use-cases-strip"

const howItWorks: {
  Icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    Icon: FileText,
    title: "Upload & Retain",
    description: "Submit your case documents and pay the initial retainer securely.",
  },
  {
    Icon: Bot,
    title: "AI Deep-Scan",
    description: "Our system scans global registries, sanctions lists, and digital footprints.",
  },
  {
    Icon: UserCheck,
    title: "Human Analyst Validation",
    description: "Ex-intelligence operators verify AI findings and add context.",
  },
  {
    Icon: ShieldCheck,
    title: "Receive Your Brief",
    description: "Get a PDF report and actionable playbook in ≤ 5 business days.",
  },
]

const trustBadges = [{ name: "OSINT Framework" }, { name: "Stripe Partner" }, { name: "GDPR Compliant" }]

export default function Home() {
  return (
    <div className="flex flex-col">
      <FullscreenHero />
      <UseCasesStrip />

      {/* How It Works Section - Fixed Mobile Layout */}
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Four-Step Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">From submission to actionable intelligence.</p>
          </div>

          {/* Mobile-first approach */}
          <div className="mt-16">
            {/* Mobile Layout */}
            <div className="block md:hidden space-y-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background mb-4">
                    <step.Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="rounded-lg border border-border bg-background p-6 w-full">
                    <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block relative">
              <div className="absolute left-1/2 top-4 h-full w-px -translate-x-1/2 bg-border" />
              <div className="space-y-12">
                {howItWorks.map((step, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="flex w-1/2 items-center pr-8 justify-end">
                      {index % 2 === 0 ? (
                        <div className="w-full rounded-lg border border-border bg-background p-6 text-right">
                          <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                          <p className="mt-2 text-muted-foreground">{step.description}</p>
                        </div>
                      ) : (
                        <div className="w-full p-6">&nbsp;</div>
                      )}
                    </div>
                    <div className="absolute left-1/2 top-0 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <step.Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex w-1/2 items-center pl-8">
                      {index % 2 !== 0 ? (
                        <div className="w-full rounded-lg border border-border bg-background p-6 text-left">
                          <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                          <p className="mt-2 text-muted-foreground">{step.description}</p>
                        </div>
                      ) : (
                        <div className="w-full p-6">&nbsp;</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SeoTopicsGrid />

      {/* Trust Badges Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {trustBadges.map((badge) => (
              <div key={badge.name} className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold text-muted-foreground">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewPricingSection />
    </div>
  )
}
