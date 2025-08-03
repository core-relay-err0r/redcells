import { Button } from "@/components/ui/button"
import { AlertTriangle, Zap, ShieldCheck, Quote } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore real-world examples of how RedCellAdvisory has detected fraud, disarmed threats, and denied losses for our clients.",
}

const cases = [
  {
    title: "Phantom Fertiliser Export",
    location: "Southeast Asia → Eastern Europe",
    excerpt: "Stopped a fake urea shipment and saved the buyer’s entire pre-payment in 48 hours.",
    challenge:
      "An agri-trader wired USD 4,760 (50%) to a Thai supplier that suddenly demanded the second half. No vessel booking, conflicting company records.",
    action:
      "Lite Scout followed by Tactical Probe. Linked six shell companies (TH + UK), matched cloned domains, proved the “logistics partner” never existed. Issued red-flag report within 36h.",
    result: "Client withheld the remaining funds, bank froze the seller’s account; total loss avoided 100%.",
    quote: "Your 5K report saved our season margin.",
  },
  {
    title: "Bangladesh Freight Dispute",
    location: "South Asia → MENA",
    excerpt: "Recovered six-figure pre-payment by leveraging SWIFT recall and direct AML escalation.",
    challenge:
      "Importer paid USD 124k for textile machinery; shipping docs looked genuine but container never left Chittagong.",
    action:
      "Deep Probe mapping five affiliated entities across BD, HK and UAE. Forensic comparison of BL numbers + port API (showing “ghost manifest”). Drafted AML package; engaged two banks’ compliance teams.",
    result:
      "USD 119k credited back via SWIFT MT103 recall in 14 days (96% recovery). Bank filed suspicious-activity report against exporters.",
    quote: null,
  },
  {
    title: "EU Machinery Ghost-Seller",
    location: "Eastern Europe → Western EU",
    excerpt: "Blocked a EUR 110k transfer hours before cut-off, thanks to rush intelligence.",
    challenge:
      "Construction firm about to send EUR 110k for used excavators listed on a slick website registered in Germany.",
    action:
      "24-h Rapid Probe. Reverse-image search proved all stock photos lifted from Finnish auction site. Traced company registration to dissolved shelf-entity; director banned for VAT fraud.",
    result:
      "Payment stopped with 30 minutes to spare; client shifted order to verified supplier, saving EUR 110k and project timeline.",
    quote: null,
  },
  {
    title: "LatAm Coffee Shell Game",
    location: "Brazil → North America",
    excerpt: "Full-Recovery operation clawed back nearly half-a-million dollars from a cross-border shell network.",
    challenge: "Roasting company paid USD 620k for specialty coffee; exporter ceased contact post-payment.",
    action:
      "Strategic Due-Diligence → uncovered mirror entities in Brazil, Panama, Cyprus. Coordinated law-firm + private investigators; filed injunction to freeze funds in transit. Advocated with PSP under U.S. Reg E and Brazilian Bacen rules.",
    result:
      "USD 428k (69%) recovered within six weeks; authorities opened criminal inquiry, preventing further victimisation.",
    quote: null,
  },
]

export default function CasesPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative border-b border-border/40 bg-secondary/20 py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Our Track Record
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Anonymized case studies demonstrating our capabilities in fraud detection, asset recovery, and due diligence
            across various industries and jurisdictions.
          </p>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {cases.map((caseItem, index) => (
              <div key={index} className="rounded-xl border border-zinc-800 bg-[#121212] shadow-lg overflow-hidden">
                <div className="p-8">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">{caseItem.location}</p>
                  <h2 className="mt-2 text-3xl font-bold text-white">{caseItem.title}</h2>
                  <p className="mt-4 text-lg text-muted-foreground">{caseItem.excerpt}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800">
                  <div className="bg-[#121212] p-6">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold text-white">Challenge</h3>
                    </div>
                    <p className="mt-3 text-muted-foreground">{caseItem.challenge}</p>
                  </div>
                  <div className="bg-[#121212] p-6">
                    <div className="flex items-center gap-3">
                      <Zap className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold text-white">Action</h3>
                    </div>
                    <p className="mt-3 text-muted-foreground">{caseItem.action}</p>
                  </div>
                  <div className="bg-[#121212] p-6">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold text-white">Result</h3>
                    </div>
                    <p className="mt-3 text-muted-foreground">{caseItem.result}</p>
                  </div>
                </div>
                {caseItem.quote && (
                  <div className="bg-secondary/20 p-6">
                    <div className="flex items-start gap-4">
                      <Quote className="h-6 w-6 text-primary flex-shrink-0" />
                      <blockquote className="text-lg italic text-white">
                        “{caseItem.quote}”
                        <footer className="mt-2 text-sm not-italic text-muted-foreground">
                          — Sanitised Client Quote
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Is Your Transaction at Risk?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Don't wait for a problem to become a crisis. Let our team provide the intelligence you need to act
            decisively.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild>
              <Link href="/submit">Submit a Case</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
