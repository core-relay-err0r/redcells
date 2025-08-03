import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about our due diligence, intelligence, and fund recovery services.",
}

const faqData = [
  {
    question: "What exactly is a “Lite Scout” report?",
    answer:
      "It’s a rapid OSINT (Open-Source Intelligence) sweep across corporate registries, sanctions lists, domain and IP data. You receive a two-page PDF with a traffic-light risk score and bullet-point findings—enough to decide whether to send money or escalate to a deeper investigation.",
  },
  {
    question: "How long do the different packages take?",
    answer:
      "Turnaround times are as follows: <br/>- <b>Lite Scout:</b> 24-48 hours. <br/>- <b>Tactical Probe:</b> up to 3 business days. <br/>- <b>Strategic Due-Diligence:</b> 5 business days. <br/>- <b>Full Recovery</b> missions run 2–6 weeks, depending on banking and law enforcement response times.",
  },
  {
    question: "Do you guarantee that my funds will be recovered?",
    answer:
      "No intelligence firm can promise 100% recovery. We guarantee a battle-ready evidence package and direct, professional escalation to banks and law enforcement to maximize your chances. In 2024, our Full Recovery clients saw an average claw-back rate of 68%.",
  },
  {
    question: "Where does your data come from?",
    answer:
      "Our intelligence is a blend of paid corporate databases (e.g., Thai DBD, UK Companies House API, various LATAM registries), DNS/IP intelligence tools, leaked-dataset look-ups, court filings, and, where legally permissible, human source validation.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Absolutely. We operate under strict confidentiality agreements and adhere to GDPR and Thai PDPA data protection standards. All case files and client uploads are encrypted at rest and are permanently deleted 30 days after case closure, unless you request a longer retention period.",
  },
  {
    question: "How do I pay and is it refundable?",
    answer:
      "We accept payments via Stripe (credit/debit card), PayPal, Crypto (USDT/USDC), or bank wire. Fees for Lite Scout and Tactical Probe services are non-refundable once the investigation has commenced. Deep Probe and Recovery services require a 50% retainer, with any unused hours reimbursed upon case closure.",
  },
  {
    question: "Do you work with agents or referrers?",
    answer:
      "Yes, we have a partner program for approved agents and referrers. Commission rates are: 15% on Lite Scout, 20% on Tactical, 25% on Strategic, and 30% on Recovery services. Payouts are made automatically once the client's balance clears.",
  },
  {
    question: "Can you testify in court?",
    answer:
      "Yes. Our analysts can provide expert affidavits or remote testimony for legal proceedings at an additional fee. Physical court appearances are evaluated on a case-by-case basis and may incur travel and accommodation expenses.",
  },
  {
    question: "Which jurisdictions do you cover?",
    answer:
      "Our primary areas of operational focus are Southeast Asia (especially Thailand & Vietnam), the UK, Latin America, and Central & Eastern Europe. However, our data sources and capabilities span over 120 countries. If we determine we cannot effectively cover a specific region for your case, we will inform you upfront.",
  },
  {
    question: "What if I only need help contacting the foreign police or bank?",
    answer:
      "This is a core component of our service and is included in the Tactical Probe package and higher tiers. We don't just advise; we draft the formal complaint, arrange for its translation, and lodge it directly with the correct AML or economic crime unit on your behalf.",
  },
]

export default function FaqPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative border-b border-border/40 bg-secondary/20 py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Key information about our process, capabilities, and terms of engagement. If your question isn't answered
            here, please contact us.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-xl font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Have More Questions?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our team is ready to provide the answers you need to move forward with confidence.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
