"use client";

import { useState } from "react";

import { motion, type Variants } from "framer-motion";

import {
  BadgeCheck,
  Recycle,
  Search,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  ClipboardList,
  Layers3,
  Hash,
  FileCheck2,
  Database,
  AlertTriangle,
  ExternalLink,
  Store,
  Filter,
  Handshake,
  ArrowRightLeft,
  Ban,
  CheckCircle2,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

import StickyContactForm from "@/components/StickyContactForm";

/* ------------------------------------------------------------------
 * SEO / METADATA
 * Move into your central blog.ts registry the same way other posts
 * are wired in; kept here so the page is self-sufficient.
 * ---------------------------------------------------------------- */

export const buyPlasticEprCertMeta = {
  title: "How to Buy Plastic EPR Certificates in India? Complete Guide",

  description:
    "Learn how to buy Plastic EPR certificates in India, including eligibility, certificate sources, pricing factors, verification and the step-by-step purchase process.",

  slug: "buy-plastic-epr-certificates-guide",

  keywords: [
    "Buy Plastic EPR Certificates",
    "Plastic EPR Certificate",
    "Plastic EPR Certificate Price",
    "EPR Certificate India",
    "CPCB EPR Certificate",
    "Plastic EPR Compliance",
    "Plastic EPR Credits",
  ],

  openGraph: {
    title: "How to Buy Plastic EPR Certificates in India? Complete Guide",

    description:
      "A step-by-step guide to buying eligible Plastic EPR certificates — who needs them, where to source them, what to verify, and what drives pricing.",

    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "Can any recycler issue Plastic EPR certificates?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "No. The relevant recycler or Plastic Waste Processor must meet the applicable registration and eligibility requirements under the EPR framework.",
      },
    },

    {
      "@type": "Question",

      name: "Can I buy any EPR certificate to meet my target?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Not necessarily. The certificate must be appropriate for the applicable obligation and category. Businesses should verify the certificate requirements before purchasing.",
      },
    },

    {
      "@type": "Question",

      name: "Is there a fixed Plastic EPR certificate price?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "No universal fixed market price should be assumed. Prices can vary according to certificate category, availability, quantity and market conditions.",
      },
    },

    {
      "@type": "Question",

      name: "What happens if my EPR target is higher than my available compliance?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Where a shortfall exists, the applicable framework provides mechanisms through which eligible additional certificates can be procured and utilized toward the obligation.",
      },
    },

    {
      "@type": "Question",

      name: "Should I buy certificates at the last minute?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "It is better to monitor your EPR obligation throughout the year. Waiting until the compliance deadline can create problems if the required certificate category or quantity is not readily available.",
      },
    },
  ],
};

/* ------------------------------------------------------------------
 * DATA
 * ---------------------------------------------------------------- */

const shortfallExample = [
  { name: "EPR obligation", value: 1000 },
  { name: "Compliance achieved", value: 750 },
  { name: "Shortfall", value: 250 },
];

const buySteps = [
  {
    icon: ClipboardList,
    title: "Calculate your EPR obligation",
    body: "Determine how much plastic EPR you need to fulfil for the relevant period, based on your business category, packaging quantities and applicable categories.",
  },

  {
    icon: Hash,
    title: "Identify the shortfall",
    body: "Compare your required obligation against the compliance already achieved to find the actual gap.",
  },

  {
    icon: Search,
    title: "Find eligible certificates",
    body: "Look for certificates from registered, eligible Plastic Waste Processors that match your requirement.",
  },

  {
    icon: ShieldCheck,
    title: "Verify the certificate details",
    body: "Check the processor, category, quantity and other relevant certificate information before completing the transaction.",
  },

  {
    icon: BadgeCheck,
    title: "Use the certificates for compliance",
    body: "Eligible certificates are then utilized according to the applicable CPCB process and rules.",
  },
];

const checklist = [
  {
    title: "Registered processor",
    body: "Confirm the seller is an eligible registered Plastic Waste Processor.",
  },

  {
    title: "Correct category",
    body: "Match the certificate to the plastic category and compliance requirement that applies to your business.",
  },

  {
    title: "Quantity",
    body: "Check the certificate quantity is sufficient to address your shortfall.",
  },

  {
    title: "Certificate status",
    body: "Make sure the certificate is valid and available for utilization.",
  },

  {
    title: "Documentation",
    body: "Keep invoices, transaction records and supporting documents.",
  },

  {
    title: "Portal records",
    body: "Where applicable, verify the certificate and transaction through the official EPR system.",
  },
];

const priceFactors = [
  "Plastic category",
  "Certificate type",
  "Quantity required",
  "Availability of certificates",
  "Processing / recycling activity",
  "Market demand",
  "Compliance period",
];

const marketplaceFlow = [
  { icon: ClipboardList, label: "Identify obligation" },
  { icon: Search, label: "Find required certificate" },
  { icon: Filter, label: "Compare availability" },
  { icon: Handshake, label: "Select seller" },
  { icon: ArrowRightLeft, label: "Complete transaction" },
  { icon: Database, label: "Maintain records" },
];

const internalLinks = [
  {
    title: "Plastic EPR Registration",
    slug: "plastic-epr-registration-guide",
  },

  {
    title: "Plastic EPR Target Calculation",
    slug: "plastic-epr-target-calculation-guide",
  },

  {
    title: "Plastic Waste Processor Registration",
    slug: "plastic-waste-processor-registration",
  },

  {
    title: "Plastic Recycling Plant Setup",
    slug: "plastic-recycling-plant-setup",
  },

  {
    title: "EPR Certificate Marketplace",
    slug: "epr-certificate-marketplace",
  },
];

const faqs = [
  {
    q: "Can any recycler issue Plastic EPR certificates?",
    a: "No. The relevant recycler or Plastic Waste Processor must meet the applicable registration and eligibility requirements under the EPR framework.",
  },

  {
    q: "Can I buy any EPR certificate to meet my target?",
    a: "Not necessarily. The certificate must be appropriate for the applicable obligation and category. Businesses should verify the certificate requirements before purchasing.",
  },

  {
    q: "Is there a fixed Plastic EPR certificate price?",
    a: "No universal fixed market price should be assumed. Prices can vary according to certificate category, availability, quantity and market conditions.",
  },

  {
    q: "What happens if my EPR target is higher than my available compliance?",
    a: "Where a shortfall exists, the applicable framework provides mechanisms through which eligible additional certificates can be procured and utilized toward the obligation.",
  },

  {
    q: "Should I buy certificates at the last minute?",
    a: "It's better to monitor your EPR obligation throughout the year — waiting until the deadline can create problems if the required certificate category or quantity isn't readily available.",
  },
];

/* ------------------------------------------------------------------
 * MOTION — one orchestrated hero reveal only
 * ---------------------------------------------------------------- */

const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 18 },

  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/* ------------------------------------------------------------------
 * SUBCOMPONENTS
 * ---------------------------------------------------------------- */

function SectionShell({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
 * MARKETPLACE CTA
 * ---------------------------------------------------------------- */

function MarketplaceButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="https://www.eprnexuss.com/marketplace/"
      className={`inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:scale-[1.03] ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

function ShortfallChart() {
  return (
    <div className="h-72 sm:h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={shortfallExample}
          layout="vertical"
          margin={{ top: 8, right: 40, left: 8, bottom: 8 }}
        >
          <CartesianGrid horizontal={false} stroke="var(--border)" />

          <XAxis
            type="number"
            tickFormatter={(v) => `${v}t`}
            tick={{
              fontSize: 12,
              fill: "var(--muted-foreground)",
            }}
            tickLine={false}
            axisLine={{ stroke: "var(--border)" }}
          />

          <YAxis
            type="category"
            dataKey="name"
            width={140}
            tick={{
              fontSize: 12,
              fill: "var(--muted-foreground)",
            }}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            formatter={(value: number) => [`${value} tonnes`, ""]}
            contentStyle={{
              borderRadius: 10,
              border: "1px solid var(--border)",
              fontSize: 13,
            }}
          />

          <Bar
            dataKey="value"
            radius={[0, 8, 8, 0]}
            maxBarSize={38}
          >
            {shortfallExample.map((d, i) => (
              <Cell
                key={d.name}
                fill={i === 2 ? "#2563eb" : "#16a34a"}
                fillOpacity={i === 1 ? 0.55 : 1}
              />
            ))}

            <LabelList
              dataKey="value"
              position="right"
              style={{
                fontSize: 12,
                fill: "var(--foreground)",
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden bg-card">
      {faqs.map((item, i) => {
        const isOpen = open === i;

        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 hover:bg-secondary/5 transition-colors"
            >
              <span className="font-medium text-foreground text-[15px] sm:text-base">
                {item.q}
              </span>

              <ChevronDown
                className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------
 * PAGE
 * ---------------------------------------------------------------- */

export default function BuyPlasticEprCertificatesPage() {
  return (
    <main className="w-full bg-background text-foreground font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="flex flex-col lg:flex-row gap-2 items-stretch md:mt-[130px]">
        <div>
          {/* ---------------- HERO ---------------- */}

          <section className="w-full relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-secondary text-white">
            <svg
              className="absolute -right-16 -top-16 h-[360px] w-[360px] opacity-[0.13] pointer-events-none"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path
                d="M100 15 L175 55 V145 L100 185 L25 145 V55 Z"
                stroke="white"
                strokeWidth="3"
              />

              <path
                d="M100 50 L145 72 V128 L100 150 L55 128 V72 Z"
                stroke="white"
                strokeWidth="3"
              />
            </svg>

            <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28 relative">
              <motion.div
                variants={heroContainer}
                initial="hidden"
                animate="show"
                className="max-w-3xl"
              >
                <motion.span
                  variants={heroItem}
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs sm:text-sm font-medium backdrop-blur-sm"
                >
                  <BadgeCheck className="h-4 w-4" />
                  Sourced from registered processors only
                </motion.span>

                <motion.h1
                  variants={heroItem}
                  className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-semibold mt-5"
                >
                  How to buy Plastic EPR certificates in India
                </motion.h1>

                <motion.p
                  variants={heroItem}
                  className="text-white/85 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed"
                >
                  When your EPR obligation runs ahead of your compliance
                  achieved, eligible certificates from registered Plastic Waste
                  Processors close the gap. Here's how to calculate what you
                  need, source it safely and verify it before you pay.
                </motion.p>

                <motion.div
                  variants={heroItem}
                  className="flex flex-wrap gap-3 mt-8"
                >
                  <a
                    href="#steps"
                    className="rounded-lg bg-white text-secondary font-medium text-sm sm:text-[15px] px-5 py-3 hover:bg-white/90 transition-colors"
                  >
                    See the 5-step process
                  </a>

                  <a
                    href="#checklist"
                    className="rounded-lg border border-white/40 font-medium text-sm sm:text-[15px] px-5 py-3 hover:bg-white/10 transition-colors"
                  >
                    What to verify first
                  </a>

                  <MarketplaceButton className="bg-green-600 hover:bg-green-700">
                    Explore EPR Marketplace
                  </MarketplaceButton>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* ---------------- QUICK STATS ---------------- */}

          <SectionShell className="-mt-8 sm:-mt-10 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                {
                  label: "Certificate source",
                  value: "Registered PWPs",
                  sub: "Eligible processors only",
                },

                {
                  label: "Fixed market price",
                  value: "None",
                  sub: "Price varies by category & demand",
                },

                {
                  label: "Verification steps",
                  value: "6",
                  sub: "Before completing a purchase",
                },

                {
                  label: "Safest approach",
                  value: "6 steps",
                  sub: "Calculate → Verify → Compare → Purchase → Record → Fulfil",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-card border border-border p-4 sm:p-5 shadow-sm"
                >
                  <p className="text-2xl sm:text-3xl font-display font-semibold text-primary">
                    {s.value}
                  </p>

                  <p className="text-sm font-medium text-foreground mt-1">
                    {s.label}
                  </p>

                  <p className="text-xs text-muted-foreground mt-0.5">
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </SectionShell>

          {/* ---------------- WHAT IS A CERTIFICATE ---------------- */}

          <SectionShell className="py-14 sm:py-20">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
              <div>
                <p className="text-secondary font-medium text-sm mb-2">
                  The basics
                </p>

                <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">
                  What a Plastic EPR certificate actually is
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Plastic EPR Certificate is a digital certificate generated
                  through the applicable EPR system by an eligible registered
                  Plastic Waste Processor for plastic waste processing
                  activities. It's evidence of processing that a PIBO can use
                  toward its EPR obligation, subject to the framework's rules.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  It creates a direct link between companies responsible for
                  plastic packaging and the organizations actually processing
                  plastic waste — which is exactly why sourcing and verification
                  matter more than price alone.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                <p className="text-sm font-medium text-foreground mb-5">
                  The chain, simply
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: Recycle,
                      label: "Recycler processes plastic waste",
                    },

                    {
                      icon: FileCheck2,
                      label: "Eligible certificate is generated",
                    },

                    {
                      icon: BadgeCheck,
                      label: "PIBO uses it toward its EPR obligation",
                    },
                  ].map((step, i, arr) => (
                    <div key={step.label}>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                          <step.icon className="h-4 w-4 text-secondary" />
                        </div>

                        <p className="text-sm text-foreground/90">
                          {step.label}
                        </p>
                      </div>

                      {i < arr.length - 1 && (
                        <div className="h-5 w-px bg-border ml-[17px] mt-1" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionShell>

          {/* ---------------- WHO NEEDS TO BUY (shortfall example) ---------------- */}

          <SectionShell className="py-14 sm:py-20 bg-primary/5">
            <p className="text-secondary font-medium text-sm mb-2">
              Do you need to buy?
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">
              Only if there's a shortfall
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
              Not every PIBO needs to purchase certificates. If a business has
              already achieved sufficient compliance through applicable
              mechanisms, additional certificates may not be required. The
              need arises specifically when there's a gap against the
              obligation.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <ShortfallChart />
              </div>

              <div className="rounded-2xl bg-secondary text-white p-6 sm:p-7">
                <p className="text-sm font-medium text-white/80 mb-2">
                  Example
                </p>

                <p className="text-white/90 leading-relaxed">
                  A company has an applicable EPR obligation of{" "}
                  <span className="font-semibold">1,000 tonnes</span> but has
                  only achieved{" "}
                  <span className="font-semibold">750 tonnes</span> of eligible
                  compliance.
                </p>

                <div className="h-px bg-white/20 my-4" />

                <p className="text-2xl font-display font-semibold">
                  1,000 − 750 = 250 tonnes
                </p>

                <p className="text-white/80 text-sm mt-1">
                  is the potential shortfall to address through eligible EPR
                  certificates.
                </p>

                <div className="mt-6">
                  <MarketplaceButton className="bg-white text-secondary hover:bg-white/90">
                    Find Plastic EPR Certificates
                  </MarketplaceButton>
                </div>
              </div>
            </div>
          </SectionShell>

          {/* ---------------- STEP BY STEP ---------------- */}

          <SectionShell className="py-14 sm:py-20" id="steps">
            <p className="text-secondary font-medium text-sm mb-2">
              Process
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-8">
              Buying certificates, step by step
            </h2>

            <div className="relative">
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />

              <div className="space-y-6 sm:space-y-8">
                {buySteps.map((s, i) => (
                  <div
                    key={s.title}
                    className="flex gap-4 sm:gap-5 relative"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-full bg-secondary text-white flex items-center justify-center font-display font-medium text-sm z-10">
                      {i + 1}
                    </div>

                    <div className="pt-1.5">
                      <div className="flex items-center gap-2">
                        <s.icon className="h-4 w-4 text-primary hidden sm:block" />

                        <h3 className="font-medium text-foreground text-[15px] sm:text-base">
                          {s.title}
                        </h3>
                      </div>

                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionShell>

          {/* ---------------- PRICING FACTORS ---------------- */}

          <SectionShell className="py-14 sm:py-20 bg-secondary/5">
            <p className="text-secondary font-medium text-sm mb-2">
              Pricing
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">
              Why there's no single certificate price
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
              There's no single fixed market price for a Plastic EPR
              certificate. Be cautious of anyone claiming a universal "CPCB
              EPR certificate price" — compare current offers for the specific
              category and quantity you actually need instead.
            </p>

            <div className="flex flex-wrap gap-3">
              {priceFactors.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/90"
                >
                  <Layers3 className="h-3.5 w-3.5 text-secondary" />
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-primary/10 border border-primary/20 p-4 max-w-2xl">
              <AlertTriangle className="h-4 w-4 text-primary mt-0.5 shrink-0" />

              <p className="text-sm text-foreground/90">
                The cost of fulfilling even the same 100-tonne obligation can
                differ significantly depending on the plastic certificate
                category required.
              </p>
            </div>
          </SectionShell>

          {/* ---------------- CHECKLIST ---------------- */}

          <SectionShell className="py-14 sm:py-20" id="checklist">
            <p className="text-secondary font-medium text-sm mb-2">
              Before you buy
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-8">
              What to check before purchasing
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {checklist.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <CheckCircle2 className="h-5 w-5 text-secondary mb-3" />

                  <p className="text-sm font-medium text-foreground">
                    {c.title}
                  </p>

                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-secondary/10 border border-secondary/20 p-4">
              <Ban className="h-4 w-4 text-secondary mt-0.5 shrink-0" />

              <p className="text-sm text-foreground/90">
                Don't purchase from an unverified broker or seller simply
                claiming to have "EPR credits." Certificates should come from
                eligible registered Plastic Waste Processors within the
                applicable CPCB framework.
              </p>
            </div>
          </SectionShell>

          {/* ---------------- MARKETPLACE FLOW ---------------- */}

          <SectionShell className="py-14 sm:py-20 bg-primary/5">
            <p className="text-secondary font-medium text-sm mb-2">
              A simpler route
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2 flex items-center gap-2.5">
              <Store className="h-6 w-6 text-secondary" />
              Buying through a marketplace
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
              A marketplace model connects businesses that need certificates
              with eligible processors that generate them, so buyers can
              compare quantities and categories in one place instead of
              contacting recyclers individually. It doesn't replace regulatory
              verification — the underlying certificate still has to come from
              an eligible source.
            </p>

            <div className="flex flex-wrap items-stretch gap-3">
              {marketplaceFlow.map((step, i, arr) => (
                <div
                  key={step.label}
                  className="flex items-center gap-3"
                >
                  <div className="rounded-xl border border-border bg-card px-4 py-3.5 flex items-center gap-2.5 min-w-[10rem]">
                    <step.icon className="h-4 w-4 text-primary shrink-0" />

                    <span className="text-sm text-foreground/90">
                      {step.label}
                    </span>
                  </div>

                  {i < arr.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <MarketplaceButton>
                Browse Plastic EPR Marketplace
              </MarketplaceButton>
            </div>
          </SectionShell>

          {/* ---------------- CLOSING BANNER (no form) ---------------- */}

          <SectionShell className="py-14 sm:py-20">
            <div className="rounded-2xl bg-gradient-to-br from-secondary to-primary text-white p-6 sm:p-10">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="h-5 w-5" />

                <p className="font-display text-lg sm:text-xl font-medium">
                  Calculate → Verify → Compare → Purchase → Record → Fulfil
                </p>
              </div>

              <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed max-w-2xl">
                Buying EPR certificates isn't about finding the cheapest
                credit — it's calculating the real obligation, identifying the
                actual shortfall, and purchasing eligible certificates from a
                registered source. Businesses that keep an ongoing view of
                obligation and certificate availability avoid last-minute
                scrambles.
              </p>
            </div>
          </SectionShell>

          {/* ---------------- FAQ ---------------- */}

          <SectionShell className="pb-14 sm:pb-20">
            <p className="text-secondary font-medium text-sm mb-2">
              FAQs
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">
              Frequently asked questions
            </h2>

            <FaqAccordion />
          </SectionShell>

          {/* ---------------- RELATED READING (internal links) ---------------- */}

          <SectionShell className="pb-14 sm:pb-20">
            <p className="text-secondary font-medium text-sm mb-2">
              Keep reading
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">
              Related EPR compliance guides
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {internalLinks.map((link) => (
                <a
                  key={link.slug}
                  href={`/blog/${link.slug}`}
                  className="group rounded-xl border border-border bg-card p-4 flex items-center justify-between gap-3 hover:border-secondary/50 transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">
                    {link.title}
                  </span>

                  <ArrowRight className="h-4 w-4 text-secondary shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </SectionShell>

          {/* ---------------- SOURCES ---------------- */}

          <SectionShell className="pb-16">
            <div className="border-t border-border pt-6 text-xs text-muted-foreground">
              <p className="font-medium text-foreground mb-2">
                Sources
              </p>

              <ul className="space-y-1">
                <li className="flex items-center gap-1.5">
                  <ExternalLink className="h-3 w-3" />
                  CPCB Plastic Waste Management Portal
                </li>

                <li className="flex items-center gap-1.5">
                  <ExternalLink className="h-3 w-3" />
                  CPCB Plastic EPR guidance and FAQs
                </li>
              </ul>
            </div>
          </SectionShell>
        </div>

        <aside className="hidden lg:block shrink-0 w-[320px]">
          <div className="sticky top-28 px-2">
            <StickyContactForm />
          </div>
        </aside>
      </div>
    </main>
  );
}