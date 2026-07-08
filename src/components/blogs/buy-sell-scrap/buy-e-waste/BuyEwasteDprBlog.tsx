"use client";

import { useEffect, useRef, useState } from "react";
import {
  Recycle,
  Factory,
  Users,
  ArrowRight,
  ChevronDown,
  Building2,
  Leaf,
  Info,
  Clock,
  FileStack,
  Wrench,
  MapPin,
  Landmark,
  ShieldAlert,
  Percent,
  Calculator,
  TrendingDown,
  Scale,
  Timer,
  Layers,
  AlertTriangle,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/* Scroll-reveal hook                                                   */
/* ------------------------------------------------------------------ */
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Real-world data                                                      */
/* Sources: IMARC Group E-Waste Recycling Plant Project Report 2026;    */
/* Green Permits "Bankable DPR for E-Waste Recycling Plant"; WEEE       */
/* composition studies (Entrepreneur India project profile).           */
/* ------------------------------------------------------------------ */
const compositionData = [
  { name: "Ferrous metal (iron & steel)", value: 50 },
  { name: "Plastics", value: 21 },
  { name: "Non-ferrous incl. precious metals", value: 13 },
  { name: "Glass", value: 5 },
  { name: "Other (ceramics, wood, etc.)", value: 11 },
];
const COMPOSITION_COLORS = [
  "hsl(var(--primary))",
  "#5AC361",
  "hsl(var(--secondary))",
  "hsl(var(--muted-foreground))",
  "hsl(var(--border))",
];

const scaleData = [
  { scale: "10,000 MT/yr", margin: 32.5, feedstock: 45 },
  { scale: "20,000 MT/yr", margin: 42.5, feedstock: 45 },
];

const blueprintGroups = [
  {
    icon: Landmark,
    title: "Business case",
    items: [
      "Executive summary",
      "Promoter & company profile",
      "Market analysis & demand-supply gap",
      "Product & recovered-material details",
    ],
  },
  {
    icon: Wrench,
    title: "Technical plan",
    items: [
      "Land & site details",
      "Plant capacity (MT/day and MT/year)",
      "Process flow diagram",
      "Machinery list with capacity & cost",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Compliance & safety",
    items: [
      "Pollution-control systems",
      "Hazardous waste management plan",
      "CTE, CTO & CPCB registration roadmap",
      "Fire safety & factory licensing",
    ],
  },
  {
    icon: Calculator,
    title: "Financials & risk",
    items: [
      "Project cost & means of finance",
      "DSCR, IRR, payback & break-even",
      "Risk & sensitivity analysis",
      "Implementation schedule",
    ],
  },
];

const financialTerms = [
  {
    icon: Scale,
    term: "DSCR",
    full: "Debt Service Coverage Ratio",
    body: "Measures whether the plant's projected cash flow comfortably covers loan repayments — the number lenders check first.",
  },
  {
    icon: Percent,
    term: "IRR",
    full: "Internal Rate of Return",
    body: "The project's expected annual return, used to judge whether it clears your cost of capital over its full life.",
  },
  {
    icon: Timer,
    term: "Payback",
    full: "Payback Period",
    body: "How many years of operating cash flow it takes to recover the initial capital investment — shorter is generally safer.",
  },
  {
    icon: TrendingDown,
    term: "Break-even",
    full: "Break-even Capacity Utilisation",
    body: "The minimum throughput, as a percentage of installed capacity, needed just to cover costs before any profit begins.",
  },
];

const riskFlags = [
  {
    icon: AlertTriangle,
    title: "Capacity that doesn't match the rest of the plan",
    body: "If the DPR proposes a 10 MT/day line, the land area, dismantling line, manpower, power load, and pollution-control equipment all have to support that exact number — mismatches are the most common reason banks send a DPR back.",
  },
  {
    icon: Layers,
    title: "Revenue built on one recovered material",
    body: "A DPR leaning entirely on copper or precious-metal prices without recovery-rate assumptions, buyer type, and price-sensitivity analysis reads as financially fragile to an appraiser.",
  },
  {
    icon: MapPin,
    title: "Compliance treated as an afterthought",
    body: "CTE, CTO, Hazardous Waste authorisation, and CPCB registration need to be mapped into the DPR itself — a DPR built only around the financial model tends to stall at SPCB or CPCB review.",
  },
];

const audiences = [
  {
    icon: Factory,
    title: "Producers & Brand Owners",
    body: "Evaluate a recycler's DPR-backed capacity claims before signing a long-term take-back or offtake agreement.",
  },
  {
    icon: Recycle,
    title: "Recyclers & Processors",
    body: "Build a DPR that satisfies both your lender's financial checklist and your regulator's technical checklist in one document.",
  },
  {
    icon: Building2,
    title: "PROs & Aggregators",
    body: "Assess whether a partner recycler's stated capacity and margins are realistic before routing member volumes to them.",
  },
];

const faqs = [
  {
    q: "Is a DPR the same as a feasibility study?",
    a: "They're related but not identical. A feasibility study explores whether the idea works — market, feedstock, technology options. The DPR consolidates the chosen technical, financial, and regulatory plan into the document lenders and regulators actually require.",
  },
  {
    q: "What capacity should a first DPR target?",
    a: "Industry project reports commonly model plants in the 10,000–20,000 MT/year range, since that scale captures meaningful economies of scale while staying financeable for a first-time promoter.",
  },
  {
    q: "Why do margins vary so much between reports?",
    a: "Gross margin depends heavily on how much of the output is precious-metal recovery versus bulk plastics or glass, and on capacity utilisation — reports commonly cite ranges rather than a single number for exactly this reason.",
  },
  {
    q: "Do I need the DPR before or after CPCB registration?",
    a: "In practice, alongside. Banks want to see your registration roadmap inside the DPR, and CPCB reviewers want to see that your claimed capacity and pollution-control systems match what the DPR proposes.",
  },
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                                */
/* ------------------------------------------------------------------ */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
      <FileStack className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                       */
/* ------------------------------------------------------------------ */
export default function BuyEWasteDprBlog() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative w-full bg-background">
      {/* Extra clearance so a fixed/pre-built navbar never collides with content */}
      <div className="pt-24 md:pt-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-8">
          {/* ============================================================ */}
          {/* MAIN CONTENT COLUMN                                          */}
          {/* ============================================================ */}
          <Seo
            title="Buy E-Waste: Detailed Project Report (DPR) Essentials"
            description="Learn the essential components of a Detailed Project Report (DPR) for an e-waste buying business. Understand project planning, financial projections, compliance requirements, and operational strategies for success."
            keywords={[
              "Buy E-Waste",
              "E-Waste DPR",
              "Detailed Project Report",
              "E-Waste Business Plan",
              "E-Waste Project Report",
              "E-Waste Business",
              "Electronic Waste Management",
              "E-Waste Compliance",
              "CPCB Guidelines",
              "E-Waste Registration",
              "Business Project Report",
              "Financial Projections",
              "Waste Management Business",
              "Recycling Business",
              "E-Waste Trading",
              "How to prepare an e-waste DPR?",
              "What is included in an e-waste project report?",
              "How to start an e-waste buying business?",
              "Documents required for an e-waste DPR",
              "Why is a DPR important for e-waste businesses?",
              "How to get approval for an e-waste project?",
              "E-waste business feasibility report",
              "Best practices for an e-waste DPR",
              "How to create a successful project report?",
              "E-waste business planning guide",
            ]}
            url="https://eprnexuss.com/blog/buy-e-waste-dpr"
            type="article"
          />
          <main className="min-w-0">
            {/* 1. HERO — centered, document/blueprint motif */}
            <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-10 sm:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-brandGreen to-secondary"
              />
              <div className="relative mx-auto max-w-3xl animate-fade-in">
                <SectionEyebrow>
                  Detailed Project Report (DPR) Essentials
                </SectionEyebrow>
                <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  The DPR that gets your{" "}
                  <span className="bg-gradient-to-r from-primary to-brandGreen bg-clip-text text-transparent">
                    e-waste plant funded
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                  A practical breakdown of what a bankable Detailed Project
                  Report actually needs to contain — built for producers,
                  recyclers, and PROs putting a scrap-buying business on paper.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#blueprint"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
                  >
                    See the DPR blueprint
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Full deep-dive guide in progress
                  </span>
                </div>
              </div>
            </section>

            {/* 2. DPR BLUEPRINT — four categorised checklists */}
            <section id="blueprint" className="mt-20">
              <Reveal>
                <SectionEyebrow>Anatomy of a DPR</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Four sections, one bankable document
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  A DPR for an e-waste plant has to satisfy a lender's financial
                  checklist and a regulator's technical checklist at the same
                  time — miss either and the file stalls.
                </p>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {blueprintGroups.map((g, i) => (
                  <Reveal key={g.title} delay={i * 70}>
                    <div className="h-full rounded-2xl border border-border bg-card p-6">
                      <div className="flex items-center gap-2.5">
                        <div className="rounded-xl bg-primary/10 p-2 text-primary">
                          <g.icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {g.title}
                        </h3>
                      </div>
                      <ul className="mt-4 space-y-2.5 border-l-2 border-dashed border-border pl-4">
                        {g.items.map((it) => (
                          <li
                            key={it}
                            className="text-sm text-muted-foreground"
                          >
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 3. E-WASTE COMPOSITION — donut chart */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>What's actually inside</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Composition drives your recovery assumptions
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Ferrous metal is the largest fraction by weight, but the
                  non-ferrous slice — small as it looks — is where most of the
                  recoverable value sits.
                </p>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-8 grid grid-cols-1 gap-6 rounded-2xl border border-border bg-card p-4 sm:p-6 md:grid-cols-[1fr_1.2fr]"
              >
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={compositionData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius="55%"
                        outerRadius="85%"
                        paddingAngle={2}
                      >
                        {compositionData.map((_, i) => (
                          <Cell
                            key={i}
                            fill={
                              COMPOSITION_COLORS[i % COMPOSITION_COLORS.length]
                            }
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(v: number) => [`${v}%`, ""]}
                        contentStyle={{
                          background: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.75rem",
                          color: "hsl(var(--popover-foreground))",
                          fontSize: "0.85rem",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-col justify-center gap-3">
                  {compositionData.map((d, i) => (
                    <div
                      key={d.name}
                      className="flex items-center justify-between gap-4 text-sm"
                    >
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <span
                          className="h-2.5 w-2.5 shrink-0 rounded-full"
                          style={{
                            background:
                              COMPOSITION_COLORS[i % COMPOSITION_COLORS.length],
                          }}
                        />
                        {d.name}
                      </span>
                      <span className="font-display font-semibold text-foreground">
                        {d.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Info className="h-3.5 w-3.5" />
                Source: WEEE composition analysis, Entrepreneur India / Space
                Consultancy Services project profiles.
              </p>
            </section>

            {/* 4. SCALE VS MARGIN — bar chart */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Sizing the plant</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Scale changes the margin your DPR can claim
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Feedstock stays the dominant cost line at any scale, but gross
                  margin widens meaningfully once a plant clears the higher end
                  of the typical capacity range.
                </p>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-8 rounded-2xl border border-border bg-card p-4 sm:p-6"
              >
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={scaleData}
                      margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        dataKey="scale"
                        tick={{
                          fill: "hsl(var(--muted-foreground))",
                          fontSize: 12,
                        }}
                        axisLine={{ stroke: "hsl(var(--border))" }}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{
                          fill: "hsl(var(--muted-foreground))",
                          fontSize: 12,
                        }}
                        axisLine={false}
                        tickLine={false}
                        unit="%"
                      />
                      <Tooltip
                        cursor={{ fill: "hsl(var(--muted))" }}
                        contentStyle={{
                          background: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.75rem",
                          color: "hsl(var(--popover-foreground))",
                          fontSize: "0.85rem",
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: "0.8rem" }} />
                      <Bar
                        dataKey="margin"
                        name="Gross margin, midpoint"
                        fill="#5AC361"
                        radius={[8, 8, 0, 0]}
                      />
                      <Bar
                        dataKey="feedstock"
                        name="Feedstock share of OpEx"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.5}
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Info className="h-3.5 w-3.5" />
                  Source: IMARC Group, E-Waste Recycling & Processing Plant
                  Project Report 2026 (illustrative midpoints of reported margin
                  and cost ranges).
                </p>
              </Reveal>
            </section>

            {/* 5. FINANCIAL METRICS GLOSSARY */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Numbers lenders check</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Four figures that make or break the file
                </h2>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {financialTerms.map((f, i) => (
                  <Reveal key={f.term} delay={i * 70}>
                    <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                      <div className="w-fit rounded-xl bg-secondary/40 p-2.5 text-secondary-foreground">
                        <f.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {f.term}
                        </h3>
                        <p className="text-xs font-medium text-muted-foreground">
                          {f.full}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">{f.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 6. COMMON DPR PITFALLS */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Where DPRs fall apart</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Three ways a bankable DPR turns unbankable
                </h2>
              </Reveal>
              <div className="mt-10 space-y-5">
                {riskFlags.map((r, i) => (
                  <Reveal key={r.title} delay={i * 80}>
                    <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                        <r.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {r.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-muted-foreground">
                          {r.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 7. WHO THIS IS FOR */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Built for your role</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Whichever seat you sit in at the table
                </h2>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {audiences.map((a, i) => (
                  <Reveal key={a.title} delay={i * 80}>
                    <div className="flex h-full flex-col gap-3 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent p-6">
                      <div className="w-fit rounded-xl bg-primary/10 p-2.5 text-primary">
                        <a.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {a.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{a.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 8. FAQ */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Common questions</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Before you draft one
                </h2>
              </Reveal>
              <Reveal
                delay={80}
                className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card"
              >
                {faqs.map((item, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={item.q}>
                      <button
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                        aria-expanded={open}
                      >
                        <span className="font-medium text-foreground">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`grid overflow-hidden transition-all duration-300 ease-out ${
                          open
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="min-h-0 px-6 pb-5 text-sm text-muted-foreground">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Reveal>
            </section>

            {/* 9. STILL FINALIZING NOTICE */}
            <Reveal className="mt-16">
              <div className="flex flex-col items-start gap-4 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 sm:flex-row sm:items-center">
                <Clock className="h-6 w-6 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">
                  This is the essentials view. Our team is finalizing a full
                  deep-dive with a line-item DPR template, sample machinery and
                  capex schedules, and a filled-in financial model.
                </p>
              </div>
            </Reveal>

            {/* 10. CTA BANNER */}
            <Reveal className="mt-8 mb-16">
              <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-12 text-center sm:px-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brandGreen/25 blur-3xl"
                />
                <FileStack className="mx-auto h-8 w-8 text-brandGreen" />
                <h2 className="mt-4 font-display text-2xl font-bold text-background sm:text-3xl">
                  Drafting a DPR right now?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm text-background/70">
                  Reach out for immediate guidance on structuring your project
                  report for bank appraisal or CPCB review.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brandGreen px-6 py-3 text-sm font-semibold text-foreground transition hover:opacity-90"
                >
                  Talk to our team
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </main>

          {/* ============================================================ */}
          {/* STICKY CONTACT FORM — right rail, scrolls with the page       */}
          {/* ============================================================ */}
          <aside id="contact" className="hidden lg:block">
            <div className="sticky top-28">
              <StickyContactForm />
            </div>
          </aside>
        </div>

        {/* Mobile fallback so the form is still reachable on small screens */}
        <div className="mx-auto mt-4 max-w-7xl px-4 pb-16 sm:px-6 lg:hidden">
          <StickyContactForm />
        </div>
      </div>
    </div>
  );
}
