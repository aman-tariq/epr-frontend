"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Factory,
  Ship,
  Tag,
  FileCheck2,
  UserCircle2,
  UploadCloud,
  Wallet,
  Send,
  ClipboardCheck,
  AlertTriangle,
  ChevronDown,
  Recycle,
  ShieldCheck,
  CalendarClock,
  ExternalLink,
  Phone,
  Mail,
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
} from "recharts";
import StickyContactForm from "@/components/StickyContactForm";

/* ------------------------------------------------------------------
 * SEO / METADATA
 * If your project generates metadata centrally (e.g. blog.ts), move
 * this object into that registry the same way other blog posts do.
 * Included here so the page is self-sufficient if used standalone
 * with Next.js App Router (import in a server page.tsx and spread
 * into `export const metadata`).
 * ---------------------------------------------------------------- */
export const plasticEprRegistrationMeta = {
  title: "How to Register for Plastic EPR in India? Complete CPCB Guide",
  description:
    "Learn how to register for Plastic EPR in India, including eligibility, documents, CPCB registration process, fees, EPR targets and post-registration compliance.",
  slug: "plastic-epr-registration-guide",
  keywords: [
    "Plastic EPR Registration",
    "Plastic EPR Registration India",
    "CPCB Plastic EPR",
    "Plastic EPR Certificate",
    "Plastic EPR Compliance",
    "PIBO Registration",
    "Plastic Waste Management",
  ],
  openGraph: {
    title: "How to Register for Plastic EPR in India? Complete CPCB Guide",
    description:
      "A step-by-step CPCB guide to Plastic EPR registration for Producers, Importers and Brand Owners — documents, fees, targets and compliance.",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Plastic EPR registration mandatory in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For entities falling within the applicable PIBO requirements under the Plastic Waste Management/EPR framework, registration is a compliance requirement. The exact applicability depends on the nature of the business and its activities.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Plastic EPR registration cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CPCB's published fee structure for PIBOs ranges from ₹10,000 to ₹50,000, depending on the applicable plastic-waste-generation slab, with separate annual processing and renewal provisions.",
      },
    },
    {
      "@type": "Question",
      name: "Do plastic recyclers also need registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Plastic Waste Processors such as eligible recyclers and other covered processing facilities have a separate registration requirement under the EPR framework.",
      },
    },
    {
      "@type": "Question",
      name: "Is EPR registration a one-time process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Businesses should not treat EPR registration as a one-time compliance activity. There are ongoing reporting, target and other compliance requirements, including annual processing and renewal provisions under the applicable framework.",
      },
    },
  ],
};

/* ------------------------------------------------------------------
 * DATA — sourced from CPCB's published Plastic EPR PIBO fee structure
 * ---------------------------------------------------------------- */
const feeData = [
  { slab: "< 1,000 TPA", fee: 10000, label: "₹10,000" },
  { slab: "1,000–10,000 TPA", fee: 20000, label: "₹20,000" },
  { slab: "> 10,000 TPA", fee: 50000, label: "₹50,000" },
];

const categories = [
  {
    icon: Factory,
    title: "Producer",
    body: "Manufactures plastic packaging or covered plastic products placed on the market.",
  },
  {
    icon: Ship,
    title: "Importer",
    body: "Imports products or packaging that falls within the applicable plastic packaging framework.",
  },
  {
    icon: Tag,
    title: "Brand Owner",
    body: "Sells products under its own brand and is responsible for the associated packaging.",
  },
];

const steps = [
  {
    icon: ClipboardCheck,
    title: "Identify your applicant category",
    body: "Determine whether your business registers as a Producer, Importer or Brand Owner — the correct category drives every requirement after this.",
  },
  {
    icon: UserCircle2,
    title: "Create your account",
    body: "Provide company and authorized-person information through the applicable CPCB EPR registration system.",
  },
  {
    icon: FileCheck2,
    title: "Complete the application",
    body: "Enter details of your business, operations and plastic packaging for your applicant category.",
  },
  {
    icon: UploadCloud,
    title: "Upload supporting documents",
    body: "Submit certificates, declarations, consents and other documents required for your category.",
  },
  {
    icon: Wallet,
    title: "Pay the registration fee",
    body: "The application fee depends on the applicable plastic-waste-generation slab.",
  },
  {
    icon: Send,
    title: "Submit the application",
    body: "Once submitted, the application moves through the applicable CPCB review process.",
  },
  {
    icon: ShieldCheck,
    title: "Complete compliance after registration",
    body: "Meet ongoing EPR obligations — annual reporting and target fulfilment — after the certificate is issued.",
  },
];

const documents = [
  "Legal name of the entity",
  "Trade name",
  "Business type",
  "Registered business address",
  "PAN details",
  "CIN, where applicable",
  "Authorized person's name and designation",
  "Authorized person's contact details",
  "Relevant supporting documents",
];

const producerExtras = [
  "Production capacity",
  "Process flow diagram (inputs, outputs, waste generated)",
  "Air & Water Act consents, where a production facility applies",
];

const mistakes = [
  {
    title: "Selecting the wrong applicant category",
    body: "Producer, Importer and Brand Owner carry different information requirements.",
  },
  {
    title: "Providing inconsistent company information",
    body: "Names, addresses, PAN, GST and corporate details should match across every document.",
  },
  {
    title: "Uploading incomplete documents",
    body: "Confirm required documents meet the format and size the portal specifies.",
  },
  {
    title: "Incorrect plastic packaging data",
    body: "Your EPR obligation depends on the information submitted — keep proper records.",
  },
  {
    title: "Ignoring annual reporting",
    body: "Registration doesn't remove continuing compliance responsibilities.",
  },
  {
    title: "Waiting until the deadline",
    body: "Start collecting packaging and sales data well before annual-return and target deadlines.",
  },
];

const faqs = [
  {
    q: "Is Plastic EPR registration mandatory in India?",
    a: "For entities falling within the applicable PIBO requirements under the Plastic Waste Management/EPR framework, registration is a compliance requirement. The exact applicability depends on the nature of the business and its activities.",
  },
  {
    q: "How much does Plastic EPR registration cost?",
    a: "CPCB's published fee structure for PIBOs ranges from ₹10,000 to ₹50,000, depending on the applicable plastic-waste-generation slab, with separate annual processing and renewal provisions.",
  },
  {
    q: "Do plastic recyclers also need registration?",
    a: "Yes. Plastic Waste Processors such as eligible recyclers and other covered processing facilities have a separate registration requirement under the EPR framework.",
  },
  {
    q: "Is EPR registration a one-time process?",
    a: "No. There are ongoing reporting, target and other compliance requirements, including annual processing and renewal provisions under the applicable framework.",
  },
];

/* ------------------------------------------------------------------
 * MOTION
 * One orchestrated hero reveal; everything else is static or
 * responds to user interaction (hover / accordion open).
 * ---------------------------------------------------------------- */
const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
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
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}

function FeeChart() {
  return (
    <div className="h-72 sm:h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={feeData} margin={{ top: 16, right: 16, left: 8, bottom: 8 }}>
          <CartesianGrid vertical={false} stroke="var(--border)" />
          <XAxis
            dataKey="slab"
            tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
            tickLine={false}
            axisLine={{ stroke: "var(--border)" }}
          />
          <YAxis
            tickFormatter={(v) => `₹${v / 1000}k`}
            tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            formatter={(value: number) => [`₹${value.toLocaleString("en-IN")}`, "Application fee"]}
            contentStyle={{
              borderRadius: 10,
              border: "1px solid var(--border)",
              fontSize: 13,
            }}
          />
          <Bar dataKey="fee" radius={[8, 8, 0, 0]} maxBarSize={90}>
            {feeData.map((_, i) => (
              <Cell key={i} fill={i === 1 ? "#16a34a" : "#2563eb"} fillOpacity={i === 1 ? 1 : 0.85} />
            ))}
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
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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
export default function PlasticEprRegistrationPage() {
  return (
    <main className="w-full bg-background text-foreground font-sans">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col lg:flex-row gap-2 items-stretch md:mt-[130px]">
        <div>

      

      {/* ---------------- HERO ---------------- */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <svg
          className="absolute -right-24 -top-24 h-[420px] w-[420px] opacity-[0.14] pointer-events-none"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="3" />
          <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="3" />
          <circle cx="100" cy="100" r="45" stroke="white" strokeWidth="3" />
        </svg>

        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28 relative">
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
              <ShieldCheck className="h-4 w-4" />
              CPCB-aligned compliance guide
            </motion.span>

            <motion.h1
              variants={heroItem}
              className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-semibold mt-5"
            >
              How to register for Plastic EPR in India
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="text-white/85 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed"
            >
              A practical walkthrough for Producers, Importers and Brand
              Owners: who needs to register, what CPCB asks for, what it
              costs, and what happens after your certificate is issued.
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-wrap gap-3 mt-8">
              <a
                href="#process"
                className="rounded-lg bg-white text-primary font-medium text-sm sm:text-[15px] px-5 py-3 hover:bg-white/90 transition-colors"
              >
                See the registration steps
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/40 font-medium text-sm sm:text-[15px] px-5 py-3 hover:bg-white/10 transition-colors"
              >
                Talk to a compliance expert
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- QUICK STATS ---------------- */}
      <SectionShell className="-mt-8 sm:-mt-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { label: "PIBO categories", value: "3", sub: "Producer · Importer · Brand Owner" },
            { label: "Fee range", value: "₹10K–50K", sub: "By waste-generation slab" },
            { label: "Annual processing fee", value: "25%", sub: "Of the application fee" },
            { label: "Regulator", value: "CPCB", sub: "Central Pollution Control Board" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-card border border-border p-4 sm:p-5 shadow-sm"
            >
              <p className="text-2xl sm:text-3xl font-display font-semibold text-primary">
                {s.value}
              </p>
              <p className="text-sm font-medium text-foreground mt-1">{s.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* ---------------- WHO NEEDS TO REGISTER ---------------- */}
      <SectionShell className="py-14 sm:py-20">
        <div className="max-w-2xl mb-10">
          <p className="text-secondary font-medium text-sm mb-2">Eligibility</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold">
            Who needs Plastic EPR registration?
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Plastic EPR primarily applies to businesses covered as Producers,
            Importers and Brand Owners under the Plastic Waste Management
            framework. CPCB also runs a separate registration track for
            Plastic Waste Processors, including recyclers.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {categories.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-6 hover:border-secondary/50 transition-colors"
            >
              <div className="h-11 w-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <c.icon className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-medium">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* ---------------- MAIN TWO-COLUMN: DOCS + FEE + PROCESS / SIDEBAR ---------------- */}
      <SectionShell className="pb-14 sm:pb-20" id="contact">
        <div className="grid lg:grid-cols-1 gap-0 lg:gap-0 items-start">
          <div className="space-y-16 sm:space-y-20 min-w-0">
            {/* DOCUMENTS */}
            <div>
              <p className="text-secondary font-medium text-sm mb-2">Documentation</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">
                Documents required for registration
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {documents.map((d) => (
                  <div key={d} className="flex items-start gap-2.5">
                    <FileCheck2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/90">{d}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-primary/5 border border-primary/15 p-5">
                <p className="text-sm font-medium text-foreground mb-2">
                  Additional for Producers
                </p>
                <ul className="space-y-1.5">
                  {producerExtras.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary">•</span> {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex items-start gap-2.5 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                <p>
                  Keep GST, PAN, company registration and production details
                  consistent across every document — mismatches are a common
                  cause of verification delays.
                </p>
              </div>
            </div>

            {/* FEE CHART */}
            <div>
              <p className="text-secondary font-medium text-sm mb-2">Cost</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
                How much does registration cost?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                CPCB's PIBO application fee is tiered by plastic-waste
                generation. Renewal fees match the registration fee; the
                annual processing fee is 25% of the application fee.
              </p>
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <FeeChart />
                <div className="flex flex-wrap gap-4 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2563eb]" /> Standard slab
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#16a34a]" /> Mid-volume slab
                  </span>
                </div>
              </div>
            </div>

            {/* PROCESS TIMELINE */}
            <div id="process">
              <p className="text-secondary font-medium text-sm mb-2">Process</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-8">
                Registering, step by step
              </h2>
              <div className="relative">
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />
                <div className="space-y-6 sm:space-y-8">
                  {steps.map((s, i) => (
                    <div key={s.title} className="flex gap-4 sm:gap-5 relative">
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
            </div>

            {/* MISTAKES */}
            <div>
              <p className="text-secondary font-medium text-sm mb-2">Avoid these</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">
                Common mistakes during registration
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {mistakes.map((m) => (
                  <div
                    key={m.title}
                    className="rounded-xl border border-border bg-card p-4 flex gap-3"
                  >
                    <AlertTriangle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{m.title}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {m.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AFTER REGISTRATION */}
            <div className="rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 text-white p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <CalendarClock className="h-5 w-5" />
                <p className="font-display text-lg font-medium">
                  Registration is the starting point, not the finish line
                </p>
              </div>
              <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed max-w-2xl">
                After registration, businesses track packaging placed on the
                market, maintain records, meet EPR targets, use eligible EPR
                certificates, file returns and keep registration information
                current. Maintain packaging and sales data through the year
                so annual reporting stays accurate.
              </p>
            </div>

            {/* FAQ */}
            <div>
              <p className="text-secondary font-medium text-sm mb-2">FAQs</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">
                Frequently asked questions
              </h2>
              <FaqAccordion />
            </div>

            {/* SOURCES */}
            <div className="border-t border-border pt-6 text-xs text-muted-foreground">
              <p className="font-medium text-foreground mb-2">Official sources</p>
              <ul className="space-y-1">
                <li className="flex items-center gap-1.5">
                  <ExternalLink className="h-3 w-3" /> CPCB Plastic Waste Management Portal
                </li>
                <li className="flex items-center gap-1.5">
                  <ExternalLink className="h-3 w-3" /> CPCB Plastic EPR FAQs
                </li>
                <li className="flex items-center gap-1.5">
                  <ExternalLink className="h-3 w-3" /> CPCB PIBO Registration SOP
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionShell>
        </div>
        <aside className="hidden lg:block shrink-0 w-[320px]">
        <div className="sticky top-28 px-2">
          <StickyContactForm/>
        </div>

      </aside>
      </div>
    </main>
  );
}