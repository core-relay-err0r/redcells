import Link from "next/link"
import { ShieldCheck } from "lucide-react"

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/cases", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
]

const legalLinks = [
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/gdpr", label: "Data Processing & GDPR" },
]

export default function Footer() {
  return (
    <footer className="bg-black py-14 text-sm text-gray-400">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center">
              <ShieldCheck className="mr-2 inline h-6 w-6 text-rose-500" />
              <span className="font-semibold text-white">RedCellAdvisory</span>
            </Link>
            <p className="mt-4">Cross-border fraud intelligence.</p>
            <p>Red Cell Advisory — a unit of Burakorn Partners Holding</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/terms-of-service" className="transition-colors hover:text-[#e00c33]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy" className="transition-colors hover:text-[#e00c33]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/data-processing" className="transition-colors hover:text-[#e00c33]">
                  Data Processing & GDPR
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@redcell-advisory.com" className="transition-colors hover:text-white">
                  info@redcelladvisory.com
                </a>
              </li>
              
            </ul>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-500 lg:col-span-4">
            <p>
              © 2025 Red Cell Advisory. All rights reserved. Operated by Burakorn Consulting Co., Ltd., Bangkok,
              Thailand.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
