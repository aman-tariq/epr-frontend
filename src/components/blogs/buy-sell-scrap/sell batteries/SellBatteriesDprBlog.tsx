"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  FileSpreadsheet,
  Landmark,
  Factory,
  TrendingUp,
  ClipboardList,
  Ruler,
  Wallet,
  AlertOctagon,
  ArrowRight,
  Coins,
  ShieldCheck,
  Building2,
  Gauge,
  Layers,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/*  Shared motion helpers                                              */
/* ------------------------------------------------------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut", delay },
    },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data — IMARC Group DPR/feasibility reports for battery & lithium-  */
/*  ion recycling plants, NIIR Project Consultancy, Udyam Bandhu, and  */
/*  the National Critical Mineral Mission. See footer for sources.    */
/* ------------------------------------------------------------------ */

const plantEconomicsData = [
  { metric: "Raw material cost", general: 55, liion: 55 },
  { metric: "Utility cost", general: 22, liion: 22 },
  { metric: "Gross margin", general: 35, liion: 42 },
  { metric: "Net profit", general: 15, liion: 24 },
];

const capexTiers = {
  micro: {
    label: "Below ₹10 lakh",
    dprCost: "₹15,000",
    dprType: "Simplified project summary",
    note: "MUDRA Shishu/Kishor-category loans accept a simplified summary in place of a full DPR.",
  },
  smallMedium: {
    label: "₹25 lakh – ₹2 crore",
    dprCost: "₹35,000 – ₹1,20,000",
    dprType: "Full bankable DPR",
    note: "Covers most small battery-scrap processing or sorting units; DPR cost runs roughly 0.1–0.5% of project cost.",
  },
  large: {
    label: "₹5 – 20 crore+",
    dprCost: "₹25,00,000+",
    dprType: "Full DPR with EIA",
    note: "Typical range for a battery recycling plant with meaningful throughput; needs environmental impact assessment and multi-location layout.",
  },
} as const;

const approvalChain = [
  { label: "DPR & feasibility", icon: FileSpreadsheet },
  { label: "Land & layout", icon: Ruler },
  { label: "Consent to Establish", icon: ShieldCheck },
  { label: "Machinery & civil work", icon: Factory },
  { label: "Consent to Operate", icon: ShieldCheck },
  { label: "CPCB registration", icon: ClipboardList },
  { label: "Commercial operation", icon: TrendingUp },
];

/* ------------------------------------------------------------------ */
/*  1. Hero — blueprint / ledger motif                                  */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 sm:px-10 sm:py-20"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerParent}
        className="relative max-w-3xl"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary"
        >
          <FileSpreadsheet className="h-3.5 w-3.5" />
          Bankable Documentation
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Sell Batteries: Detailed Project Report (DPR) Essentials
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A practical, step-by-step guide to what a bankable DPR actually needs
          — for <span className="font-semibold text-foreground">producers</span>
          , <span className="font-semibold text-foreground">recyclers</span>,
          and <span className="font-semibold text-foreground">PROs</span>{" "}
          putting a battery scrap project in front of a bank or investor.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Talk through your DPR
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <span className="text-sm text-muted-foreground">
            Our full deep-dive report is in final review — reach out for
            immediate guidance in the meantime.
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. Quick facts strip                                                */
/* ------------------------------------------------------------------ */

function QuickFactsSection() {
  const facts = [
    {
      icon: Wallet,
      value: "0.1–0.5%",
      label: "DPR preparation cost, as a share of project cost",
    },
    {
      icon: Factory,
      value: "₹5–20 Cr",
      label: "Typical capex for a battery recycling plant",
    },
    {
      icon: Gauge,
      value: "6–12 months",
      label: "Realistic execution window for a medium-scale plant",
    },
  ];
  return (
    <section className="py-10">
      <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {facts.map((f, i) => (
          <div
            key={i}
            className="flex items-start gap-3 border-l-2 border-accent pl-4"
          >
            <f.icon className="mt-1 h-5 w-5 flex-none text-accent-foreground" />
            <div>
              <div className="font-display text-xl font-bold text-primary sm:text-2xl">
                {f.value}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{f.label}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. DPR sections checklist — numbered table of contents             */
/* ------------------------------------------------------------------ */

function DPRSectionsChecklist() {
  const sections = [
    {
      title: "Executive summary",
      body: "The project in one page — what, how much, and why it repays.",
    },
    {
      title: "Promoter background",
      body: "Experience, existing units, and financial standing of the promoter(s).",
    },
    {
      title: "Market & demand analysis",
      body: "Local demand data for your geography — not national averages borrowed from an industry report.",
    },
    {
      title: "Technical feasibility",
      body: "Process flow, machinery specification, plant layout, power and water requirements, effluent treatment.",
    },
    {
      title: "Project cost & means of finance",
      body: "Land, civil work, machinery, pollution control, and working capital — set against promoter equity, term loan, and subsidy.",
    },
    {
      title: "Financial projections",
      body: "The section banks scrutinise most: margins at partial capacity, break-even point, and sensitivity to a raw-material price swing.",
    },
    {
      title: "Statutory approvals",
      body: "Udyam, GST, factory licence, SPCB consent, CPCB registration — current status and target dates for each.",
    },
    {
      title: "Risk & sensitivity",
      body: "What happens to repayment if throughput, recovery rate, or certificate prices move ±10%.",
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <Reveal className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wide text-accent-foreground">
          Table of contents
        </span>
        <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
          What a bankable DPR actually contains
        </h2>
        <p className="mt-3 text-muted-foreground">
          Most rejected DPRs are missing one of these, or fill it with generic
          industry-average numbers instead of numbers specific to the project.
        </p>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerParent}
        className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2"
      >
        {sections.map((s, i) => (
          <motion.div key={i} variants={fadeUp} className="flex gap-4">
            <span className="font-display text-lg font-bold text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. Plant economics — grouped comparison bar chart                   */
/* ------------------------------------------------------------------ */

function PlantEconomicsChartSection() {
  return (
    <section className="py-12 sm:py-16">
      <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Financial projections
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
            What the numbers should look like
          </h2>
          <p className="mt-3 text-muted-foreground">
            Lithium-ion recycling runs thinner on raw-material share than mixed
            battery recycling, but recovers a noticeably higher margin —
            reviewers will expect your projections to land somewhere in these
            bands.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Source: IMARC Group DPR reports, 2026. Each metric is independently
            reported — they are not parts of a single 100% breakdown.
          </p>
        </div>
        <div className="h-72 rounded-2xl border border-border bg-card p-4 lg:col-span-3">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={plantEconomicsData}
              margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                className="stroke-border"
              />
              <XAxis
                dataKey="metric"
                tick={{ fontSize: 11 }}
                stroke="currentColor"
                className="text-muted-foreground"
              />
              <YAxis
                tick={{ fontSize: 12 }}
                unit="%"
                stroke="currentColor"
                className="text-muted-foreground"
              />
              <Tooltip formatter={(v: number) => [`${v}%`, ""]} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar
                dataKey="general"
                name="General battery recycling"
                fill="hsl(var(--primary))"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="liion"
                name="Lithium-ion specific"
                fill="hsl(var(--secondary))"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  5. Capex calculator — interactive tier selector                     */
/* ------------------------------------------------------------------ */

function CapexCalculatorSection() {
  const [tier, setTier] = useState<keyof typeof capexTiers>("smallMedium");
  const current = capexTiers[tier];

  const tabs: Array<{
    key: keyof typeof capexTiers;
    label: string;
    icon: typeof Building2;
  }> = [
    { key: "micro", label: "Micro", icon: Coins },
    { key: "smallMedium", label: "Small–Medium", icon: Building2 },
    { key: "large", label: "Large / Industrial", icon: Factory },
  ];

  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          Size your paperwork
        </span>
        <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
          What your DPR should cost, by project size
        </h2>
      </Reveal>

      <Reveal delay={0.05} className="mt-8">
        <div className="inline-flex flex-wrap gap-2 rounded-xl border border-border bg-card p-1.5">
          {tabs.map((t) => {
            const isActive = t.key === tier;
            return (
              <button
                key={t.key}
                onClick={() => setTier(t.key)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        <motion.div
          key={tier}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3"
        >
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Project cost
            </p>
            <p className="mt-1 font-display text-xl font-bold text-foreground">
              {current.label}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              DPR preparation cost
            </p>
            <p className="mt-1 font-display text-xl font-bold text-primary">
              {current.dprCost}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Document type
            </p>
            <p className="mt-1 font-display text-xl font-bold text-foreground">
              {current.dprType}
            </p>
          </div>
          <p className="sm:col-span-3 mt-2 text-sm text-muted-foreground">
            {current.note}
          </p>
        </motion.div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  6. Financing routes                                                 */
/* ------------------------------------------------------------------ */

function FinancingRoutesSection() {
  const routes = [
    {
      icon: Landmark,
      title: "Bank term loan + promoter equity",
      body: "The standard route for small and medium units — the DPR is the document your lender underwrites against.",
    },
    {
      icon: Coins,
      title: "PMEGP / MUDRA",
      body: "For micro units, loans below ₹10 lakh under MUDRA\u2019s Shishu/Kishor categories can move on a simplified project summary rather than a full DPR.",
    },
    {
      icon: Building2,
      title: "SIDBI green finance",
      body: "Larger, capital-intensive recycling ventures can access SIDBI\u2019s sustainability-linked institutional funding alongside a term loan.",
    },
    {
      icon: Layers,
      title: "Critical Mineral Recycling Scheme",
      body: "A ₹1,500 crore scheme under the National Critical Mineral Mission offers a 20% capex subsidy on plant, machinery, and utilities, plus opex support through Year 2 — capped at ₹25 crore for small entities and startups, ₹50 crore for large players.",
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Where the money can come from
        </h2>
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerParent}
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        {routes.map((r, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex gap-4 rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10">
              <r.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.body}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  7. Approval sequence — horizontal chip chain                        */
/* ------------------------------------------------------------------ */

function ApprovalSequenceSection() {
  return (
    <section className="py-12 sm:py-16">
      <Reveal className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          Sequencing matters
        </span>
        <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
          Don&apos;t model revenue before the approvals land
        </h2>
        <p className="mt-3 text-muted-foreground">
          A medium-scale plant typically takes 6–12 months from DPR to
          commercial operation. If your financial model shows revenue in month
          three, a bank will ask why — approvals rarely move that fast.
        </p>
      </Reveal>

      <div className="mt-8 flex snap-x gap-3 overflow-x-auto pb-2">
        {approvalChain.map((step, i) => (
          <Reveal key={i} delay={i * 0.04} className="snap-start">
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 whitespace-nowrap">
              <step.icon className="h-4 w-4 flex-none text-secondary-foreground" />
              <span className="text-sm font-medium text-foreground">
                {step.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  8. Common mistakes — destructive-accented callouts                  */
/* ------------------------------------------------------------------ */

function CommonMistakesSection() {
  const mistakes = [
    {
      title: "Assuming revenue starts before approvals close",
      body: "If commissioning realistically takes six to nine months, a repayment schedule starting in month three will not hold up.",
    },
    {
      title: "Copy-pasting national industry averages",
      body: "Reviewers can spot a generic DPR within minutes. Local demand data for your specific geography is what makes the market section credible.",
    },
    {
      title: "Leaving out the sensitivity case",
      body: "Lenders want to see what happens to margins at 60% capacity utilisation, or if raw-material costs rise 15% — not just the best-case projection.",
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <Reveal className="rounded-3xl border border-destructive/30 bg-destructive/5 p-6 sm:p-10">
        <div className="flex items-center gap-2 text-destructive">
          <AlertOctagon className="h-5 w-5" />
          <span className="text-xs font-bold uppercase tracking-wide">
            What gets a DPR rejected
          </span>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {mistakes.map((m, i) => (
            <div key={i}>
              <h3 className="font-display font-semibold text-foreground">
                {m.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  9. Who needs what — threshold tiers                                 */
/* ------------------------------------------------------------------ */

function WhoNeedsWhatSection() {
  const tiers = [
    {
      title: "Below ₹10 lakh",
      body: "A simplified project summary is usually enough for MUDRA Shishu/Kishor-category loans.",
      accent: false,
    },
    {
      title: "₹10 lakh – ₹2 crore",
      body: "A full DPR, or a DPR-lite service such as Udyam Bandhu, built specifically for this project-size band.",
      accent: true,
    },
    {
      title: "₹25 lakh and above, with environmental clearance",
      body: "A full DPR with an environmental impact assessment, multi-location plant layout, and detailed statutory approval tracking.",
      accent: false,
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          How much documentation your project actually needs
        </h2>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div
              className={`h-full rounded-2xl border p-6 ${
                t.accent
                  ? "border-accent/50 bg-accent/10"
                  : "border-border bg-card"
              }`}
            >
              <h3 className="font-display font-semibold text-foreground">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  10. Final CTA — ledger / receipt style                              */
/* ------------------------------------------------------------------ */

function FinalCTASection() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <Reveal className="relative rounded-3xl border border-border bg-card p-6 sm:p-10">
        <div
          className="absolute -top-2 left-0 right-0 h-2 bg-repeat-x"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--background)) 3px, transparent 3px)",
            backgroundSize: "14px 14px",
          }}
        />
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-sm font-medium text-accent-foreground">
              <FileSpreadsheet className="h-4 w-4" />
              Deep-dive report in progress
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
              Our full DPR deep-dive is being finalised
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              In the meantime, our team can help size your project cost, pick
              the right financing route, and sequence your approvals correctly —
              whether you&apos;re a producer, recycler, or PRO.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 self-start rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get immediate guidance
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Sources: IMARC Group Battery &amp; Lithium-Ion Battery Recycling Plant
        Project Reports, 2026 · NIIR Project Consultancy, DPR Format &amp; Bank
        Loan Guide · Udyam Bandhu · Green Permits, Recycling Plant Setup in
        India · National Critical Mineral Mission / Critical Mineral Recycling
        Scheme. Figures reflect the most recent public reporting available as of
        2026 and are subject to revision as schemes and project costs evolve.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page composition                                                    */
/* ------------------------------------------------------------------ */

export default function SellBatteriesDPREssentials() {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
          {/* Main content column */}
          <Seo
            title="Sell Batteries: Detailed Project Report (DPR) Essentials"
            description="Learn how to prepare a Detailed Project Report (DPR) for a battery trading or recycling business. Explore project planning, financial projections, compliance requirements, infrastructure, and operational strategies for long-term success."
            keywords={[
              "Sell Batteries",
              "Battery DPR",
              "Detailed Project Report",
              "Battery Business Plan",
              "Battery Recycling Project Report",
              "Battery Trading Project Report",
              "Battery Waste Management",
              "Battery EPR",
              "Battery Recycling Business",
              "Business Project Report",
              "Financial Projections",
              "Project Feasibility Report",
              "Battery Business Setup",
              "Battery Infrastructure",
              "Battery Compliance",
              "How to prepare a battery DPR?",
              "What is included in a battery project report?",
              "How to start a battery recycling business?",
              "Documents required for a battery DPR",
              "Why is a DPR important for battery businesses?",
              "Battery business feasibility report",
              "How to create a battery business plan?",
              "Best practices for a battery DPR",
              "Battery recycling business planning guide",
              "Battery project report format",
            ]}
            url="https://eprnexuss.com/blog/sell-batteries-dpr"
            type="article"
          />
          <main className="min-w-0 flex-1">
            <HeroSection />
            <QuickFactsSection />
            <DPRSectionsChecklist />
            <PlantEconomicsChartSection />
            <CapexCalculatorSection />
            <FinancingRoutesSection />
            <ApprovalSequenceSection />
            <CommonMistakesSection />
            <WhoNeedsWhatSection />
            <FinalCTASection />
          </main>

          {/* Sticky contact form — desktop/tablet only, scrolls with page then sticks */}
          <aside
            id="contact-form"
            className="hidden w-full flex-none lg:block lg:w-80 xl:w-96"
          >
            <div className="sticky top-28">
              <StickyContactForm />
            </div>
          </aside>
        </div>

        {/* Mobile inline form fallback — sticky sidebar isn't usable on small screens */}
        <div className="mt-10 lg:hidden">
          <StickyContactForm />
        </div>
      </div>
    </div>
  );
}
