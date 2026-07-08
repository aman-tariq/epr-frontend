"use client";

/**
 * Buy & Sell Metals: Detailed Project Report (DPR) Essentials
 * -------------------------------------------------------------
 * Single-file blog page for a producer/recycler/PRO audience preparing a
 * bank-ready DPR for a metal scrap trading or processing business.
 *
 * Ten content sections + a persistent sticky contact form.
 * Uses the project's existing design tokens (primary / secondary /
 * brandGreen, hsl(var(--...)) system).
 *
 * Requires: framer-motion, recharts, lucide-react.
 *
 * Navbar/footer are assumed to already exist in the layout — this file is
 * content only, with top padding reserved so it never collapses under a
 * fixed/sticky navbar.
 */

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  FileText,
  UserCheck,
  LineChart as LineChartIcon,
  Cog,
  Wallet,
  Landmark,
  ClipboardCheck,
  Gauge,
  Percent,
  TrendingDown,
  ChevronDown,
  AlertOctagon,
  FileWarning,
  ScanLine,
  Building2,
  Receipt,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/* Shared bits                                                          */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brandGreen">
      <span className="h-1.5 w-1.5 rounded-full bg-brandGreen" />
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

/* ------------------------------------------------------------------ */
/* 1. Hero                                                              */
/* ------------------------------------------------------------------ */

function Hero() {
  const stats = [
    {
      label: "India scrap & recycling industry, projected 2026",
      value: "₹60,000 cr",
      source: "Industry estimates",
    },
    {
      label: "Minimum DSCR banks look for",
      value: "1.5×",
      source: "Standard bank appraisal norms",
    },
    {
      label: "Typical promoter contribution required",
      value: "15–33%",
      source: "SBI / bank credit policy",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-4 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:pb-24 md:pt-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Eyebrow>Detailed Project Report · Essentials</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Buy &amp; sell metals: DPR essentials for a bankable scrap business
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            What actually needs to be in a Detailed Project Report before a bank
            will fund your scrap trading or processing venture — not a generic
            template, but what credit officers are really checking for.
          </p>
          <div className="mt-6 rounded-xl border border-border bg-muted/40 p-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                Our team is finalizing the full deep-dive.
              </span>{" "}
              Reach out for immediate guidance in the meantime — the form on
              this page reaches a live specialist, not a queue.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#structure"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              See the DPR structure
            </a>
            <a
              href="#ratios"
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Check the bank's ratios
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="grid grid-cols-1 gap-3 self-start rounded-2xl border border-border bg-card p-4 shadow-sm sm:grid-cols-3 md:grid-cols-1"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-muted/40 p-4 transition hover:bg-muted/70"
            >
              <div className="font-display text-2xl font-bold text-brandGreen md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-foreground">
                {s.label}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {s.source}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. DPR structure roadmap (signature element)                        */
/* ------------------------------------------------------------------ */

const dprSections = [
  {
    icon: FileText,
    title: "Executive summary",
    detail:
      "4–6 pages: promoter background, project cost, means of finance, IRR, payback period — all in one place.",
  },
  {
    icon: UserCheck,
    title: "Promoter background",
    detail:
      "Qualifications, experience, and financial standing — banks weigh this heavily for first-time applicants.",
  },
  {
    icon: LineChartIcon,
    title: "Market analysis",
    detail:
      "Demand and industry trends backed by real facts, not generic industry averages copy-pasted across states.",
  },
  {
    icon: Cog,
    title: "Technical feasibility",
    detail:
      "Machinery list, raw material flow, utilities, and manpower — proof the production process is realistic.",
  },
  {
    icon: Wallet,
    title: "Financial projections",
    detail:
      "Revenue, cost of production, and P&L for the full loan tenure — minimum 5 years for term loans.",
  },
  {
    icon: Landmark,
    title: "Means of finance",
    detail:
      "Own contribution plus bank loan, broken down clearly — 100% bank funding with zero promoter stake is a red flag.",
  },
  {
    icon: ClipboardCheck,
    title: "Statutory permits",
    detail:
      "GST, Udyam, environmental consents, and licenses relevant to your specific scrap category and scale.",
  },
  {
    icon: Gauge,
    title: "Ratios & risk",
    detail:
      "DSCR, IRR, and break-even worked out explicitly — this is what the credit officer checks first, not last.",
  },
];

function DPRStructure() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="structure"
      className="border-y border-border bg-muted/30 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="The eight sections that matter"
          title="What a bank-ready DPR actually contains"
          description="This is the standard format adopted by Indian banks, SIDBI, and government agencies — credit officers can spot a generic report within minutes, so each section needs to hold up on its own."
        />

        <div className="relative">
          <div className="absolute left-0 right-0 top-[38px] hidden h-[3px] overflow-hidden rounded-full bg-border lg:block">
            <motion.div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #5AC361 15%, hsl(var(--primary)) 50%, #5AC361 85%, transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={
                reduceMotion ? {} : { backgroundPositionX: ["0%", "200%"] }
              }
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {dprSections.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                  className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                  <div className="relative z-10 flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border-2 border-brandGreen bg-brandGreen/10 bg-background text-brandGreen">
                    <Icon className="h-6 w-6" />
                    <span className="absolute -top-2 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-background">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-sm font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Bank ratios cards                                                 */
/* ------------------------------------------------------------------ */

function BankRatios() {
  const ratios = [
    {
      icon: Gauge,
      stat: "> 1.5×",
      label: "Debt Service Coverage Ratio (DSCR)",
      copy: "The standard minimum banks look for — it tells them your projected cash flow comfortably covers loan repayment.",
    },
    {
      icon: TrendingDown,
      stat: "< 60%",
      label: "Break-even capacity utilisation",
      copy: "Banks prefer projects that turn profitable well before you're running at full installed capacity.",
    },
    {
      icon: LineChartIcon,
      stat: "~15%+",
      label: "Internal Rate of Return (IRR)",
      copy: "A rough benchmark for whether the project's return justifies the capital and risk involved.",
    },
    {
      icon: Percent,
      stat: "15–33%",
      label: "Promoter contribution",
      copy: "Your own stake in the project cost — the exact figure varies by bank and loan product, but zero contribution is always a red flag.",
    },
  ];

  return (
    <section id="ratios" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="What the credit officer checks first"
        title="The four numbers that decide your appraisal"
        description="Get these right and the rest of the DPR mostly needs to support them — get them wrong and no amount of formatting fixes it."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ratios.map((r) => {
          const Icon = r.icon;
          return (
            <div
              key={r.label}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <Icon className="h-6 w-6 text-brandGreen" />
              <div className="mt-4 font-display text-2xl font-bold text-foreground">
                {r.stat}
              </div>
              <h3 className="mt-1 text-sm font-semibold text-foreground">
                {r.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.copy}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Loan scheme chart                                                 */
/* ------------------------------------------------------------------ */

const loanSchemes = [
  { scheme: "Mudra — Shishu", ceiling: 0.5 },
  { scheme: "Mudra — Kishor", ceiling: 5 },
  { scheme: "Mudra — Tarun", ceiling: 10 },
  { scheme: "PMEGP (manufacturing)", ceiling: 50 },
  { scheme: "Stand-Up India", ceiling: 100 },
  { scheme: "CGTMSE guarantee cover", ceiling: 500 },
];

function LoanSchemeChart() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Match the scheme to your scale"
          title="What each government-linked scheme actually covers"
          description="Picking the right scheme upfront changes what your DPR needs to prove — a Mudra Shishu pitch and a CGTMSE-backed term loan pitch are different documents."
        />
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-1 flex items-center gap-2">
            <Landmark className="h-4 w-4 text-brandGreen" />
            <h3 className="font-display text-lg font-semibold text-foreground">
              Indicative ceiling per scheme (₹ lakh)
            </h3>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer>
              <BarChart
                data={loanSchemes}
                layout="vertical"
                margin={{ left: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis
                  type="number"
                  tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                  axisLine={false}
                  tickLine={false}
                  unit="L"
                />
                <YAxis
                  type="category"
                  dataKey="scheme"
                  width={180}
                  tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(v: number) => [`₹${v} lakh`, "Ceiling"]}
                  contentStyle={{
                    background: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Bar
                  dataKey="ceiling"
                  fill="hsl(var(--primary))"
                  radius={[0, 6, 6, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Source: Pradhan Mantri Mudra Yojana (PMMY) category limits; PMEGP
            manufacturing-unit ceiling; Stand-Up India loan range; CGTMSE
            per-borrower guarantee cover (raised from ₹2 crore to ₹5 crore).
            Figures shown in ₹ lakh for comparability; confirm current limits
            with your lending bank before applying.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Prep timeline chart                                               */
/* ------------------------------------------------------------------ */

const prepTimeline = [
  { size: "Scheme-specific (PMEGP/KVIC)", days: 8.5 },
  { size: "Small-scale (project cost < ₹2 cr)", days: 15 },
  { size: "Medium & large projects", days: 47.5 },
];

function PrepTimelineChart() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Build your timeline backwards from this"
        title="How long a professionally prepared DPR takes"
        description="If you're chasing a specific disbursement date, this is the lead time to plan around — before bank appraisal even begins."
      />
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="h-64 w-full">
          <ResponsiveContainer>
            <BarChart data={prepTimeline} margin={{ left: -18 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="size"
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
                unit="d"
              />
              <Tooltip
                formatter={(v: number) => [
                  `~${v} working days`,
                  "Typical prep time",
                ]}
                contentStyle={{
                  background: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />
              <Bar dataKey="days" fill="#5AC361" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Source: NIIR Project Consultancy, "Detailed Project Report: Format,
          Cost & Bank Loan Guide," 2026. Ranges midpoint-plotted from published
          windows (scheme-specific: 7–10 days; small-scale: 10–20 days;
          medium/large: 35–60 days).
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Document checklist                                                */
/* ------------------------------------------------------------------ */

const checklist = [
  {
    icon: UserCheck,
    item: "Identity & address proof",
    detail: "Aadhaar, PAN, and address proof of all promoters.",
  },
  {
    icon: Receipt,
    item: "Business registration",
    detail:
      "Udyam or GST registration, plus partnership/company documents where applicable.",
  },
  {
    icon: Building2,
    item: "Financial history",
    detail:
      "Recent bank statements and past ITRs — critical for existing businesses, optional for new ones.",
  },
  {
    icon: Cog,
    item: "Machinery quotations",
    detail:
      "Formal quotes for shredders, balers, weighbridges, or shears — used to build the technical feasibility section.",
  },
  {
    icon: FileText,
    item: "Project cost breakdown",
    detail:
      "Fixed assets, working capital, and total estimated project cost, split by source of finance.",
  },
  {
    icon: ClipboardCheck,
    item: "Site & lease documents",
    detail:
      "Ownership or lease agreement for the proposed project location, plus space/area details.",
  },
];

function DocumentChecklist() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Before you start drafting"
          title="What you'll be asked to hand over"
          description="Gathering these upfront is what separates a 7-day scheme-specific DPR from a 20-day back-and-forth."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {checklist.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.item}
                className="flex gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brandGreen/10 text-brandGreen">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {c.item}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {c.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Common mistakes                                                   */
/* ------------------------------------------------------------------ */

function CommonMistakes() {
  const mistakes = [
    {
      icon: FileWarning,
      title: "Generic, copy-pasted market data",
      copy: "A significant share of DPRs submitted for MSME loans duplicate industry averages with no local analysis — credit officers recognise a generic report within minutes.",
    },
    {
      icon: ScanLine,
      title: "Inconsistent cost ratios across years",
      copy: "Raw material as a percentage of revenue, for instance, shouldn't swing wildly year to year without a clearly stated reason — appraisers cross-check this against your stated production capacity.",
    },
    {
      icon: AlertOctagon,
      title: "Zero or unrealistic promoter contribution",
      copy: "A DPR showing 100% bank funding with no promoter stake is treated as a red flag, regardless of how strong the rest of the projections look.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="What gets a DPR rejected"
        title="The mistakes that show up most often"
      />
      <div className="grid gap-5 md:grid-cols-3">
        {mistakes.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <Icon className="h-6 w-6 text-brandGreen" />
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {m.copy}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8. Who needs a full DPR                                              */
/* ------------------------------------------------------------------ */

function WhoNeedsFullDPR() {
  const rows = [
    {
      profile: "Loan below ₹10 lakh (Mudra Shishu/Kishor)",
      requirement:
        "Banks may accept a simplified project summary rather than a full DPR.",
    },
    {
      profile: "Loan above ₹10 lakh, especially manufacturing",
      requirement: "A formal, bank-format DPR is mandatory for appraisal.",
    },
    {
      profile: "PMEGP, SFURTI, Stand-Up India, or CGTMSE-linked financing",
      requirement:
        "A full DPR is non-negotiable, regardless of the loan amount requested.",
    },
    {
      profile: "Existing business seeking expansion",
      requirement:
        "DPR combines actual past performance with future projections, rather than projections alone.",
    },
  ];

  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Match your situation"
          title="Do you actually need a full DPR?"
          description="Not every scrap business needs the same depth of documentation — this is where the line typically falls."
        />
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-5 py-4 font-display font-semibold text-foreground">
                  Your situation
                </th>
                <th className="px-5 py-4 font-display font-semibold text-foreground">
                  What's required
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.profile} className={i % 2 ? "bg-muted/20" : ""}>
                  <td className="px-5 py-4 align-top font-medium text-foreground">
                    {r.profile}
                  </td>
                  <td className="px-5 py-4 align-top text-muted-foreground">
                    {r.requirement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 9. FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "Can I prepare the DPR myself instead of hiring a consultant?",
    a: "For very small loan applications, yes. But a self-prepared DPR rarely survives bank appraisal for loans above ₹10 lakh — banks look for specific financial modelling, regulatory compliance mapping, and market data sourcing that typically requires sector expertise.",
  },
  {
    q: "What's the single biggest factor banks weigh in a scrap-business DPR?",
    a: "Repayment capacity — demonstrated through DSCR, realistic break-even projections, and a promoter contribution that shows you have skin in the game. Market demand and machinery details matter, but they support the numbers rather than replace them.",
  },
  {
    q: "Does a scrap trading business need the same DPR depth as a processing unit?",
    a: "Not necessarily. A pure trading operation has a lighter technical feasibility section (no machinery, minimal utilities), while a shredding, baling, or smelting unit needs full detail on equipment, capacity, and manpower to satisfy the technical feasibility review.",
  },
  {
    q: "How much of the project cost do I need to fund myself?",
    a: "Bank credit policy typically expects a promoter contribution somewhere between 15% and 33% of total project cost, depending on the lender and loan product. Showing zero own contribution is one of the fastest ways to get a DPR rejected.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <SectionHeading eyebrow="Common questions" title="Before you reach out" />
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="rounded-xl border border-border bg-card">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display text-sm font-semibold text-foreground">
                  {f.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 10. Final CTA                                                        */
/* ------------------------------------------------------------------ */

function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center md:px-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <h2 className="relative font-display text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Full DPR essentials deep-dive coming soon
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
          We're finalizing downloadable DPR templates, scheme-by-scheme
          checklists, and sample financial models built specifically for scrap
          trading and processing. Producers, recyclers, and PROs who need
          guidance now don't have to wait for the full guide — talk to our team
          today.
        </p>
        <div className="relative mt-8 flex justify-center">
          <a
            href="/contact"
            className="rounded-full bg-background px-7 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:opacity-90"
          >
            Get immediate guidance
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function BuySellMetalsDPRGuide() {
  return (
    <main className="bg-background pt-24 md:pt-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-0 lg:grid-cols-[1fr_340px] lg:gap-6 lg:px-6">
        {/* Main content column */}
        <Seo
          title="Buy & Sell Metals: Detailed Project Report (DPR) Essentials"
          description="Learn how to prepare a Detailed Project Report (DPR) for a metal trading business. Explore project planning, market analysis, financial projections, compliance requirements, and operational strategies for long-term success."
          keywords={[
            "Buy and Sell Metals",
            "Metal Trading DPR",
            "Detailed Project Report",
            "Metal Business Plan",
            "Metal Trading Project Report",
            "Scrap Metal Business",
            "Metal Recycling Business",
            "Industrial Metal Trading",
            "Metal Market Analysis",
            "Business Project Report",
            "Financial Projections",
            "Metal Trading Investment",
            "Business Feasibility Report",
            "Metal Business Setup",
            "Project Planning",
            "How to prepare a metal trading DPR?",
            "What is included in a metal trading project report?",
            "How to start a metal trading business?",
            "Documents required for a metal trading DPR",
            "Why is a DPR important for metal businesses?",
            "Metal trading business feasibility report",
            "How to create a business project report?",
            "Best practices for a metal trading DPR",
            "Metal trading business planning guide",
            "Metal business project report format",
          ]}
          url="https://eprnexuss.com/blog/buy-sell-metals-dpr"
          type="article"
        />
        <div className="min-w-0">
          <Hero />
          <DPRStructure />
          <BankRatios />
          <LoanSchemeChart />
          <PrepTimelineChart />
          <DocumentChecklist />
          <CommonMistakes />
          <WhoNeedsFullDPR />
          <FAQ />

          {/* Contact form inline for mobile / tablet, where the sticky sidebar is hidden */}
          <div id="contact" className="mx-auto max-w-6xl px-4 pt-4 lg:hidden">
            <StickyContactForm />
          </div>

          <FinalCTA />
        </div>

        {/* Sticky sidebar column — desktop only */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 px-2">
            <StickyContactForm />
          </div>
        </aside>
      </div>
    </main>
  );
}
