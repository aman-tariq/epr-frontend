"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  FileText,
  Factory,
  Recycle,
  Landmark,
  Cog,
  Wallet,
  Leaf,
  ClipboardCheck,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/*  DATA — indicative; swap in verified figures once your deep-dive     */
/*  report and site-specific estimates are ready.                       */
/* ------------------------------------------------------------------ */

const chapters = [
  { label: "Executive summary", icon: FileText },
  { label: "Technical design", icon: Cog },
  { label: "Financials", icon: Wallet },
  { label: "Environmental", icon: Leaf },
  { label: "Implementation", icon: ClipboardCheck },
];

const whyDPR = [
  {
    icon: Factory,
    title: "Producers",
    body: "A DPR turns a compliance obligation into a fundable project — lenders and internal finance teams need it before releasing capital for recycling tie-ups.",
  },
  {
    icon: Recycle,
    title: "Recyclers",
    body: "This is the document that gets a facility authorised and financed in the same pass — technical design and environmental sections carry the most weight.",
  },
  {
    icon: Landmark,
    title: "PROs",
    body: "A credible DPR from your recycling partners is what you're ultimately underwriting when you commit to an aggregation agreement.",
  },
];

const dprChecklist = [
  "Executive summary with project rationale and scale",
  "Technical process flow and equipment specification",
  "Site details, utilities, and layout plan",
  "Capital and operating cost estimates",
  "Revenue model, including EPR credit realisation",
  "Environmental clearance and waste-handling annexures",
  "Implementation schedule with commissioning milestones",
];

const capexSplit = [
  { label: "Plant & machinery", value: 48, color: "#5AC361" },
  { label: "Land & civil work", value: 22, color: "#F2A63A" },
  { label: "Working capital", value: 18, color: "#3B82F6" },
  { label: "Contingency", value: 12, color: "#94A3B8" },
];

const capacityTiers = [
  { label: "Small (≤2,000 TPA)", value: 1.2 },
  { label: "Medium (2,000–8,000 TPA)", value: 3.8 },
  { label: "Large (8,000+ TPA)", value: 9.5 },
];

const cashFlow = [
  { label: "Y1", value: -40 },
  { label: "Y2", value: -18 },
  { label: "Y3", value: 8 },
  { label: "Y4", value: 34 },
  { label: "Y5", value: 62 },
];

const redFlags = [
  "Capacity sized to funding round-numbers, not actual feedstock availability",
  "Revenue model that assumes credit prices without a sensitivity case",
  "Environmental annexures copied from a different battery chemistry",
  "No contingency line for commissioning delays",
];

const faqs = [
  {
    q: "Who typically reviews a battery-recycling DPR?",
    a: "Internal finance or investment committees for producers, and a mix of lenders and pollution control authorities for recyclers seeking facility approval.",
  },
  {
    q: "How detailed does the financial section need to be?",
    a: "Detailed enough to survive a sensitivity check — reviewers want to see what happens to payback if credit prices or feedstock volumes move against you, not just a single base case.",
  },
  {
    q: "Does the DPR change based on battery chemistry?",
    a: "Yes. Lithium-ion, lead-acid, and other chemistries carry different processing steps and environmental controls, and the report should reflect the chemistry actually being handled.",
  },
  {
    q: "Can one DPR cover multiple facilities?",
    a: "It's possible, but most reviewers prefer a facility-specific report so site conditions and capacity assumptions aren't blended together.",
  },
];

/* ------------------------------------------------------------------ */
/*  ATOMS                                                              */
/* ------------------------------------------------------------------ */

function Eyebrow({
  code,
  children,
}: {
  code: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs tracking-widest text-brandGreen">
        {code}
      </span>
      <span className="h-px flex-1 max-w-10 bg-brandGreen/40" />
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {children}
      </span>
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Signature element: a fixed vertical "report chapter" rail — since a DPR
   is literally a bound, chaptered document, the page mirrors that as a
   scroll-linked table of contents. */
function ChapterRail() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-4">
      {chapters.map((c, i) => {
        const start = i / chapters.length;
        const end = (i + 1) / chapters.length;
        return (
          <ChapterTab
            key={c.label}
            chapter={c}
            start={start}
            end={end}
            progress={scrollYProgress}
            index={i}
          />
        );
      })}
    </div>
  );
}

function ChapterTab({
  chapter,
  start,
  end,
  progress,
  index,
}: {
  chapter: { label: string; icon: any };
  start: number;
  end: number;
  progress: any;
  index: number;
}) {
  const opacity = useTransform(progress, [start, (start + end) / 2], [0.35, 1]);
  const width = useTransform(progress, [start, (start + end) / 2], [28, 40]);
  return (
    <motion.div style={{ opacity }} className="flex items-center gap-2">
      <motion.span
        style={{ width }}
        className="h-[2px] bg-brandGreen rounded-full"
      />
      <div className="w-7 h-7 rounded-full bg-background border border-brandGreen flex items-center justify-center shrink-0">
        <chapter.icon className="w-3.5 h-3.5 text-brandGreen" />
      </div>
      <span className="font-mono text-[10px] text-muted-foreground whitespace-nowrap">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 1 — Hero                                                   */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-brandGreen/5 px-6 py-14 sm:px-10 sm:py-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 w-72 h-72 rounded-full bg-brandGreen/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <Reveal>
        <Eyebrow code="EPR / BATTERY">DPR essentials</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground max-w-3xl">
          EPR Battery Credits: Detailed Project Report{" "}
          <span className="text-brandGreen">(DPR) Essentials</span>
        </h1>
      </Reveal>
      <Reveal delay={0.15} className="max-w-2xl">
        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          A practical, step-by-step guide covering Detailed Project Report
          essentials for EPR battery — built for producers, recyclers, and PROs.
          Our team is finalizing the full deep-dive; reach out for immediate
          guidance in the meantime.
        </p>
      </Reveal>
      <Reveal delay={0.25}>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Get immediate guidance <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#chapters"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            See what's inside a DPR
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 2 — Chapter overview                                       */
/* ------------------------------------------------------------------ */

function ChapterOverview() {
  return (
    <section id="chapters" className="mt-16 scroll-mt-28">
      <Reveal>
        <Eyebrow code="DPR-00">Anatomy of the report</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Five chapters, one funding decision
        </h2>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {chapters.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-card p-5 flex flex-col items-start gap-3 hover:border-brandGreen/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-brandGreen/10 flex items-center justify-center">
                <c.icon className="w-5 h-5 text-brandGreen" />
              </div>
              <span className="font-mono text-xs text-brandGreen">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-medium text-foreground leading-snug">
                {c.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 3 — Why a DPR matters, by role                             */
/* ------------------------------------------------------------------ */

function WhyDPR() {
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="DPR-01">Why it matters</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          The same document, three different stakes
        </h2>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-3 gap-5">
        {whyDPR.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 flex flex-col hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-full bg-brandGreen/10 flex items-center justify-center mb-5">
                <s.icon className="w-5 h-5 text-brandGreen" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 4 — What goes into a DPR checklist                         */
/* ------------------------------------------------------------------ */

function DPRChecklist() {
  return (
    <section className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
      <Reveal>
        <Eyebrow code="DPR-02">The contents page</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          What a reviewer expects to find
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Missing any one of these sections is usually enough to send a DPR back
          for revision — reviewers read for completeness before they read for
          quality.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <ol className="space-y-3">
          {dprChecklist.map((line, i) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4"
            >
              <span className="font-mono text-xs text-brandGreen mt-0.5 w-5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-foreground">{line}</span>
            </motion.li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 5 — Capex breakdown donut                                  */
/* ------------------------------------------------------------------ */

function CapexDonut() {
  const total = capexSplit.reduce((s, d) => s + d.value, 0);
  const r = 70;
  const circumference = 2 * Math.PI * r;
  let offsetAcc = 0;

  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="DPR-03">Financials, part one</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Where the capital typically goes
        </h2>
      </Reveal>
      <Reveal
        delay={0.1}
        className="mt-8 rounded-2xl border border-border bg-card p-8 grid sm:grid-cols-2 gap-8 items-center"
      >
        <svg
          viewBox="0 0 180 180"
          className="w-full max-w-[220px] mx-auto -rotate-90"
        >
          <circle
            cx="90"
            cy="90"
            r={r}
            fill="none"
            stroke="currentColor"
            className="text-muted"
            strokeWidth="20"
          />
          {capexSplit.map((d, i) => {
            const dash = (d.value / total) * circumference;
            const el = (
              <motion.circle
                key={d.label}
                cx="90"
                cy="90"
                r={r}
                fill="none"
                stroke={d.color}
                strokeWidth="20"
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offsetAcc}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              />
            );
            offsetAcc += dash;
            return el;
          })}
        </svg>
        <div className="space-y-4">
          {capexSplit.map((d) => (
            <div key={d.label} className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: d.color }}
              />
              <span className="text-sm text-foreground flex-1">{d.label}</span>
              <span className="font-mono text-sm text-muted-foreground">
                {d.value}%
              </span>
            </div>
          ))}
        </div>
      </Reveal>
      <p className="mt-3 font-mono text-[11px] text-muted-foreground">
        Indicative split — actual capex allocation depends on chemistry and site
        conditions.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 6 — Capacity vs investment bar chart                       */
/* ------------------------------------------------------------------ */

function CapacityChart() {
  const max = Math.max(...capacityTiers.map((d) => d.value));
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="DPR-04">Sizing the project</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Indicative investment by capacity tier
        </h2>
      </Reveal>
      <Reveal
        delay={0.1}
        className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8"
      >
        <p className="text-xs text-muted-foreground mb-6 font-mono">
          ₹ crore, indicative — scales with chemistry and automation level
        </p>
        <div className="space-y-6">
          {capacityTiers.map((d, i) => (
            <div key={d.label}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground font-medium">{d.label}</span>
                <span className="font-mono text-muted-foreground">
                  ₹{d.value} cr
                </span>
              </div>
              <div className="h-3 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brandGreen to-emerald-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(d.value / max) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 7 — Cash flow / payback line chart                         */
/* ------------------------------------------------------------------ */

function CashFlowChart() {
  const values = cashFlow.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const w = 340;
  const h = 140;
  const step = w / (cashFlow.length - 1);
  const norm = (v: number) => h - ((v - min) / (max - min)) * h;
  const points = cashFlow.map((d, i) => [i * step, norm(d.value)]);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`)
    .join(" ");
  const zeroY = norm(0);

  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="DPR-05">Financials, part two</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          When the project turns cash-positive
        </h2>
      </Reveal>
      <Reveal
        delay={0.1}
        className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8"
      >
        <p className="text-xs text-muted-foreground mb-2 font-mono">
          Indicative cumulative cash flow, ₹ crore, by year
        </p>
        <svg
          viewBox={`0 0 ${w} ${h + 30}`}
          className="w-[100%] md:p-10 h-auto mt-4"
        >
          <line
            x1="0"
            y1={zeroY}
            x2={w}
            y2={zeroY}
            stroke="currentColor"
            className="text-border"
            strokeDasharray="4 4"
          />
          <motion.path
            d={path}
            fill="none"
            stroke="#5AC361"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
          {points.map((p, i) => (
            <g key={i}>
              <circle
                cx={p[0]}
                cy={p[1]}
                r="4"
                fill={cashFlow[i].value >= 0 ? "#5AC361" : "#F2A63A"}
              />
              <text
                x={p[0]}
                y={h + 22}
                textAnchor="middle"
                className="fill-muted-foreground font-mono text-[10px]"
              >
                {cashFlow[i].label}
              </text>
            </g>
          ))}
        </svg>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 8 — Common DPR red flags                                   */
/* ------------------------------------------------------------------ */

function RedFlags() {
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="DPR-06">Before you submit</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          What makes a reviewer skeptical
        </h2>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {redFlags.map((r, i) => (
          <Reveal key={r} delay={i * 0.08}>
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <AlertTriangle className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" />
              <span className="text-sm text-foreground">{r}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 9 — CTA banner                                             */
/* ------------------------------------------------------------------ */

function CTABanner() {
  return (
    <section className="mt-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 sm:px-12 sm:py-16 text-primary-foreground">
          <FileText className="absolute -right-6 -bottom-8 w-40 h-40 opacity-10" />
          <span className="font-mono text-xs tracking-widest opacity-80">
            DPR-07 / NEXT STEP
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold max-w-xl">
            The full deep-dive report is still being finalized.
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base opacity-90">
            If you're drafting a DPR now and need it review-ready sooner than
            the published version, talk to our team for guidance specific to
            your project scale and chemistry.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:scale-[1.03] transition-transform"
          >
            Reach out for guidance <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 10 — FAQ accordion                                         */
/* ------------------------------------------------------------------ */

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mt-20 mb-4">
      <Reveal>
        <Eyebrow code="DPR-08">Common questions</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Before you draft
        </h2>
      </Reveal>
      <div className="mt-8 rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-foreground text-sm sm:text-base">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-brandGreen shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function EPRBatteryDPREssentials() {
  return (
    <div className="bg-background min-h-screen">
      <ChapterRail />
      <div className="md:container w-full pt-28 sm:pt-32 pb-24">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-10 xl:gap-14">
          <main className="min-w-0">
            <Seo
              title="EPR Battery Credits: Detailed Project Report (DPR) Essentials"
              description="Learn how to prepare a Detailed Project Report (DPR) for EPR Battery Credits. Explore project planning, compliance requirements, financial projections, infrastructure, and operational strategies for successful Battery EPR credit management."
              keywords={[
                "EPR Battery Credits",
                "Battery EPR DPR",
                "Detailed Project Report",
                "Battery EPR Project Report",
                "Battery Credit Business Plan",
                "Battery EPR Compliance",
                "Battery Waste Management Rules",
                "CPCB Battery EPR",
                "Battery Credit Trading",
                "Battery Recycling",
                "Extended Producer Responsibility",
                "Battery EPR Registration",
                "Project Feasibility Report",
                "Financial Projections",
                "Environmental Compliance",
                "How to prepare a Battery EPR DPR?",
                "What is included in a Battery EPR project report?",
                "How to create a Battery EPR business plan?",
                "Documents required for a Battery EPR DPR",
                "Why is a DPR important for Battery EPR projects?",
                "Battery EPR project feasibility report",
                "Battery EPR business planning guide",
                "Best practices for a Battery EPR DPR",
                "Battery credit project report format",
                "Battery EPR implementation guide",
              ]}
              url="https://eprnexuss.com/blog/epr-battery-dpr"
              type="article"
            />
            <Hero />
            <ChapterOverview />
            <WhyDPR />
            <DPRChecklist />
            <CapexDonut />
            <CapacityChart />
            <CashFlowChart />
            <RedFlags />
            <CTABanner />
            <FAQAccordion />
          </main>

          <aside
            id="contact"
            className="lg:sticky lg:top-28 lg:self-start scroll-mt-28"
          >
            <StickyContactForm />
          </aside>
        </div>
      </div>
    </div>
  );
}
