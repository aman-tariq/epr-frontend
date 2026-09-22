"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Scale,
  Package,
  Layers,
  Layers3,
  Leaf,
  CalendarCheck2,
  ClipboardList,
  Recycle,
  RefreshCcw,
  BadgeCheck,
  AlertOctagon,
  ArrowRight,
  ChevronDown,
  Ship,
  FileSpreadsheet,
  ExternalLink,
  Info,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import StickyContactForm from "@/components/StickyContactForm";

/* ------------------------------------------------------------------
 * SEO / METADATA
 * Move into your central blog.ts registry the same way other posts
 * are wired in; kept here so the page is self-sufficient.
 * ---------------------------------------------------------------- */
export const plasticEprTargetMeta = {
  title: "How Is Plastic EPR Target Calculated in India? Step-by-Step Guide",
  description:
    "Learn how Plastic EPR targets are calculated in India. Understand packaging categories, EPR quantities, MLP calculation, recycled plastic, certificates and annual compliance.",
  slug: "plastic-epr-target-calculation-guide",
  keywords: [
    "Plastic EPR Target Calculation",
    "Plastic EPR Calculation India",
    "EPR Target Calculation",
    "Plastic EPR Obligation",
    "CPCB EPR Target",
    "Plastic EPR Compliance",
    "EPR Target for PIBO",
  ],
  openGraph: {
    title: "How Is Plastic EPR Target Calculated in India? Step-by-Step Guide",
    description:
      "A worked example of how CPCB calculates Plastic EPR targets across packaging categories, with reuse, recycled content and shortfall mechanisms explained.",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Plastic EPR calculated on the weight of plastic packaging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the EPR framework uses a weight-based approach. CPCB specifically states that for applicable multilayered plastic packaging, the complete weight of the MLP is covered under EPR.",
      },
    },
    {
      "@type": "Question",
      name: "Does imported plastic packaging count?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, applicable plastic packaging imported with products needs to be reported. CPCB's FAQ addresses cases where businesses import products containing plastic packaging and states that the plastic packaging imported along with the product is to be provided in the relevant information section.",
      },
    },
    {
      "@type": "Question",
      name: "Can EPR targets be different for different businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EPR obligations depend on factors including the business category, quantities and applicable packaging categories. CPCB's portal documentation shows category-wise EPR targets for Producers, Importers and Brand Owners.",
      },
    },
    {
      "@type": "Question",
      name: "When should a business calculate its EPR target?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ideally, businesses should track their packaging quantities throughout the financial year instead of calculating everything at the end. This makes the annual reporting and certificate-fulfilment process considerably easier.",
      },
    },
  ],
};

/* ------------------------------------------------------------------
 * DATA
 * ---------------------------------------------------------------- */
const trackedData = [
  "Plastic packaging purchased or manufactured",
  "Plastic packaging sold in India",
  "Applicable packaging category",
  "Reuse, where applicable",
  "Use of recycled plastic, where applicable",
  "Relevant EPR certificates and compliance records",
];

const packagingCategories = [
  {
    code: "Category I",
    name: "Rigid plastic packaging",
    icon: Package,
    note: "Bottles, containers, jars and other rigid formats.",
  },
  {
    code: "Category II",
    name: "Flexible plastic packaging",
    icon: Layers,
    note: "Pouches, wraps and single-layer flexible films.",
  },
  {
    code: "Category III",
    name: "Multilayered plastic packaging",
    icon: Layers3,
    note: "Plastic combined with another material — full MLP weight counts under EPR.",
  },
  {
    code: "Category IV",
    name: "Compostable plastic packaging",
    icon: Leaf,
    note: "Packaging meeting the applicable compostability definition.",
  },
];

const exampleData = [
  { name: "Category I — Rigid", value: 40, color: "#2563eb" },
  { name: "Category II — Flexible", value: 30, color: "#16a34a" },
  { name: "Category III — MLP", value: 20, color: "#60a5fa" },
  { name: "Category IV — Compostable", value: 10, color: "#86efac" },
];

const mechanisms = [
  {
    icon: RefreshCcw,
    title: "Reuse potential",
    body: "CPCB's guidance describes a wallet-style mechanism where reuse potential is calculated from relevant sales, procurement and pre-consumer waste data.",
  },
  {
    icon: Recycle,
    title: "Recycled plastic content (URep)",
    body: "Recycled plastic used in packaging can generate potential for URep certificates, subject to the applicable target requirements and period.",
  },
];

const trackingChecklist = [
  {
    icon: Scale,
    title: "Packaging quantity",
    body: "Record the weight of plastic packaging introduced into the market.",
  },
  {
    icon: Layers3,
    title: "Packaging category",
    body: "Separate rigid, flexible, MLP and other applicable categories.",
  },
  {
    icon: FileSpreadsheet,
    title: "Sales and procurement data",
    body: "Keep invoices and supporting records that can substantiate reported quantities.",
  },
  {
    icon: RefreshCcw,
    title: "Recycled content and reuse",
    body: "Maintain supporting information wherever these mechanisms apply.",
  },
  {
    icon: BadgeCheck,
    title: "EPR certificates",
    body: "Track certificates obtained and their utilization against obligations.",
  },
  {
    icon: CalendarCheck2,
    title: "Annual reporting",
    body: "CPCB's guidance states the annual report is due by June 30 following the relevant financial year.",
  },
];

const faqs = [
  {
    q: "Is Plastic EPR calculated on the weight of plastic packaging?",
    a: "Yes, the EPR framework uses a weight-based approach. CPCB specifically states that for applicable multilayered plastic packaging, the complete weight of the MLP is covered under EPR.",
  },
  {
    q: "Does imported plastic packaging count?",
    a: "Yes, applicable plastic packaging imported with products needs to be reported. CPCB's FAQ addresses this and states that plastic packaging imported along with a product is to be provided in the relevant information section.",
  },
  {
    q: "Can EPR targets be different for different businesses?",
    a: "Yes. EPR obligations depend on the business category, quantities and applicable packaging categories. CPCB's portal shows category-wise EPR targets for Producers, Importers and Brand Owners.",
  },
  {
    q: "When should a business calculate its EPR target?",
    a: "Ideally, throughout the financial year rather than at year-end — tracking packaging quantities as they happen makes annual reporting and certificate fulfilment considerably easier.",
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
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}

function ExampleDonut() {
  return (
    <div className="h-72 sm:h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={exampleData}
            dataKey="value"
            nameKey="name"
            innerRadius="58%"
            outerRadius="85%"
            paddingAngle={2}
            strokeWidth={0}
          >
            {exampleData.map((d) => (
              <Cell key={d.name} fill={d.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => [`${value} tonnes`, ""]}
            contentStyle={{
              borderRadius: 10,
              border: "1px solid var(--border)",
              fontSize: 13,
            }}
          />
          <Legend
            verticalAlign="bottom"
            height={48}
            iconType="circle"
            wrapperStyle={{ fontSize: 12 }}
          />
        </PieChart>
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
export default function PlasticEprTargetCalculationPage() {
  return (
    <main className="w-full bg-background text-foreground font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex lg:flex-cols-1 gap-2 lg:gap-2 items-stretch md:mt-[130px]">
        <div> 

      

      {/* ---------------- HERO ---------------- */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-primary text-white">
        <svg
          className="absolute -left-20 -bottom-24 h-[380px] w-[380px] opacity-[0.13] pointer-events-none"
          viewBox="0 0 200 200"
          fill="none"
        >
          <rect x="20" y="20" width="70" height="70" rx="14" stroke="white" strokeWidth="3" />
          <rect x="105" y="55" width="70" height="70" rx="14" stroke="white" strokeWidth="3" />
          <rect x="60" y="110" width="70" height="70" rx="14" stroke="white" strokeWidth="3" />
        </svg>

        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28 relative">
          <motion.div variants={heroContainer} initial="hidden" animate="show" className="max-w-3xl">
            <motion.span
              variants={heroItem}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs sm:text-sm font-medium backdrop-blur-sm"
            >
              <Scale className="h-4 w-4" />
              Weight-based CPCB methodology
            </motion.span>

            <motion.h1
              variants={heroItem}
              className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-semibold mt-5"
            >
              How is your Plastic EPR target calculated?
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="text-white/85 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed"
            >
              Your EPR target is the plastic waste your business is
              responsible for — based on what you place in the Indian
              market, broken down by packaging category. Here's how the
              number actually gets built.
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-wrap gap-3 mt-8">
              <a
                href="#example"
                className="rounded-lg bg-white text-secondary font-medium text-sm sm:text-[15px] px-5 py-3 hover:bg-white/90 transition-colors"
              >
                See a worked example
              </a>
              <a
                href="#tracking"
                className="rounded-lg border border-white/40 font-medium text-sm sm:text-[15px] px-5 py-3 hover:bg-white/10 transition-colors"
              >
                Get the tracking checklist
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- QUICK STATS ---------------- */}
      <SectionShell className="-mt-8 sm:-mt-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { label: "Packaging categories", value: "4", sub: "Rigid · Flexible · MLP · Compostable" },
            { label: "MLP weight counted", value: "100%", sub: "Full weight, not just the plastic layer" },
            { label: "Annual report due", value: "Jun 30", sub: "Following the relevant financial year" },
            { label: "Method", value: "Weight-based", sub: "Tonnes placed on the market" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-card border border-border p-4 sm:p-5 shadow-sm">
              <p className="text-2xl sm:text-3xl font-display font-semibold text-secondary">
                {s.value}
              </p>
              <p className="text-sm font-medium text-foreground mt-1">{s.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* ---------------- WHAT IS A TARGET ---------------- */}
      <SectionShell className="py-14 sm:py-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          <div>
            <p className="text-secondary font-medium text-sm mb-2">The basics</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">
              What a Plastic EPR target actually measures
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Plastic EPR target is the quantity of plastic waste a
              covered business is responsible for managing under the EPR
              framework. It's calculated from the plastic packaging placed
              into the Indian market, mapped against the applicable
              packaging categories — not a single, undifferentiated plastic
              figure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              CPCB's guidance also distinguishes pre-consumer from
              post-consumer plastic packaging waste, a distinction worth
              baking into your records from day one rather than
              reconstructing it later.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-medium text-foreground mb-4 flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-secondary" />
              Data businesses need to maintain
            </p>
            <ul className="space-y-2.5">
              {trackedData.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      {/* ---------------- PACKAGING CATEGORIES ---------------- */}
      <SectionShell className="py-14 sm:py-20 bg-primary/5">
        <div className="max-w-2xl mb-10">
          <p className="text-secondary font-medium text-sm mb-2">Classification</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold">
            The four plastic packaging categories
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            CPCB's portal documentation groups plastic packaging into four
            categories. The category matters — obligations and certificate
            requirements can differ depending on which one applies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packagingCategories.map((c) => (
            <div
              key={c.code}
              className="rounded-2xl border border-border bg-card p-6 hover:border-secondary/50 transition-colors"
            >
              <div className="h-11 w-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <c.icon className="h-5 w-5 text-secondary" />
              </div>
              <p className="text-xs font-medium text-primary">{c.code}</p>
              <h3 className="font-display text-base font-medium mt-1">{c.name}</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{c.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-secondary/10 border border-secondary/20 p-4">
          <Info className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
          <p className="text-sm text-foreground/90">
            For multilayered plastic (MLP) containing plastic and another
            material, CPCB's guidance states the complete weight of the MLP
            packaging is covered under EPR when it falls within the
            applicable definition — not just the plastic portion.
          </p>
        </div>
      </SectionShell>

      {/* ---------------- WORKED EXAMPLE ---------------- */}
      <SectionShell className="py-14 sm:py-20" id="example">
        <p className="text-secondary font-medium text-sm mb-2">Worked example</p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">
          A simplified calculation
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
          Say a Brand Owner sells plastic packaging across all four
          categories in a financial year. The applicable EPR obligation is
          then determined category by category — not as one combined
          number.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <ExampleDonut />
          </div>

          <div>
            <div className="rounded-2xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary/10 text-left">
                    <th className="px-4 py-3 font-medium text-foreground">Category</th>
                    <th className="px-4 py-3 font-medium text-foreground text-right">Tonnes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {exampleData.map((row) => (
                    <tr key={row.name}>
                      <td className="px-4 py-3 text-foreground/90 flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: row.color }}
                        />
                        {row.name}
                      </td>
                      <td className="px-4 py-3 text-right text-foreground/90">{row.value}</td>
                    </tr>
                  ))}
                  <tr className="bg-primary/5 font-medium">
                    <td className="px-4 py-3 text-foreground">Total applicable packaging</td>
                    <td className="px-4 py-3 text-right text-primary">100 tonnes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              From here, the business determines its applicable EPR
              obligation for each category according to the notified
              requirements for that financial year — the takeaway isn't the
              100-tonne total, it's the category-wise breakdown behind it.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* ---------------- REUSE & RECYCLED CONTENT ---------------- */}
      <SectionShell className="py-14 sm:py-20 bg-secondary/5">
        <p className="text-secondary font-medium text-sm mb-2">Beyond raw tonnage</p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">
          Reuse and recycled plastic content
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
          The EPR system also accounts for mechanisms like reuse and
          recycled content, so not every kilogram is treated as identical.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {mechanisms.map((m) => (
            <div key={m.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <m.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-medium">{m.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* ---------------- SHORTFALL FLOW ---------------- */}
      <SectionShell className="py-14 sm:py-20">
        <p className="text-secondary font-medium text-sm mb-2">If the target isn't met</p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-8">
          What happens with a compliance shortfall
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: ClipboardList, label: "Category-wise EPR target", tone: "primary" },
            { icon: BadgeCheck, label: "EPR certificates achieved", tone: "secondary" },
            { icon: Recycle, label: "Available potential", tone: "primary" },
            { icon: AlertOctagon, label: "Potential environmental compensation", tone: "secondary" },
          ].map((item, i, arr) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="rounded-2xl border border-border bg-card p-5 flex-1 h-full">
                <item.icon
                  className={`h-5 w-5 mb-3 ${
                    item.tone === "primary" ? "text-primary" : "text-secondary"
                  }`}
                />
                <p className="text-sm font-medium text-foreground leading-snug">{item.label}</p>
              </div>
              {i < arr.length - 1 && (
                <ArrowRight className="h-4 w-4 text-muted-foreground hidden lg:block shrink-0" />
              )}
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mt-6 max-w-2xl">
          CPCB's guidance states that PIBOs can procure additional eligible
          EPR certificates from registered plastic waste processors or
          other eligible sources to reduce a compliance shortfall — another
          reason to calculate the expected obligation early rather than at
          annual-return filing.
        </p>
      </SectionShell>

      {/* ---------------- TRACKING CHECKLIST ---------------- */}
      <SectionShell className="py-14 sm:py-20 bg-primary/5" id="tracking">
        <p className="text-secondary font-medium text-sm mb-2">Stay ahead of it</p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
          Keeping your calculation accurate
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
          A simple monthly or quarterly tracking habit prevents most
          year-end compliance problems.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trackingChecklist.map((t, i) => (
            <div key={t.title} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-7 w-7 rounded-full bg-secondary text-white text-xs font-medium flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <t.icon className="h-4 w-4 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{t.title}</p>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* ---------------- IMPORTED PACKAGING NOTE ---------------- */}
      <SectionShell className="py-14 sm:py-20">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:items-center">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Ship className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-lg font-medium mb-1.5">
              Don't forget imported packaging
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Applicable plastic packaging imported along with a product
              still needs to be reported. CPCB's FAQ addresses this
              directly — the packaging that arrives with an imported
              product belongs in the relevant information section of your
              filing, not outside it.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* ---------------- CLOSING BANNER (no form) ---------------- */}
      <SectionShell className="pb-14 sm:pb-20">
        <div className="rounded-2xl bg-gradient-to-br from-secondary to-primary text-white p-6 sm:p-10">
          <div className="flex items-center gap-2 mb-3">
            <CalendarCheck2 className="h-5 w-5" />
            <p className="font-display text-lg sm:text-xl font-medium">
              Track it as you go, not at year-end
            </p>
          </div>
          <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed max-w-2xl">
            EPR calculation starts with accurate packaging data — how much
            you introduce into the market, which category it falls under,
            and which mechanisms apply. Businesses that track continuously
            reach June 30 with a filing to submit, not a calculation to
            start.
          </p>
        </div>
      </SectionShell>

      {/* ---------------- FAQ ---------------- */}
      <SectionShell className="pb-14 sm:pb-20">
        <p className="text-secondary font-medium text-sm mb-2">FAQs</p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">
          Frequently asked questions
        </h2>
        <FaqAccordion />
      </SectionShell>

      {/* ---------------- SOURCES ---------------- */}
      <SectionShell className="pb-16">
        <div className="border-t border-border pt-6 text-xs text-muted-foreground">
          <p className="font-medium text-foreground mb-2">Sources</p>
          <ul className="space-y-1">
            <li className="flex items-center gap-1.5">
              <ExternalLink className="h-3 w-3" /> CPCB Plastic Waste Management Portal
            </li>
            <li className="flex items-center gap-1.5">
              <ExternalLink className="h-3 w-3" /> CPCB Plastic EPR guidance and FAQs
            </li>
          </ul>
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