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
  Recycle,
  Package,
  Layers,
  ShoppingBag,
  Factory,
  Landmark,
  TrendingUp,
  ShieldCheck,
  FileCheck2,
  BarChart3,
  Users2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/*  DATA — indicative; replace with confirmed figures once the full     */
/*  deep-dive report is finalized.                                      */
/* ------------------------------------------------------------------ */

const marketStats = [
  {
    label: "60,000+ Registered PIBOs",
    value: "60K+",
    icon: Factory,
  },
  {
    label: "3,000+ Verified Recyclers & PWPs",
    value: "3K+",
    icon: Recycle,
  },
  {
    label: "4 Plastic Packaging Categories",
    value: "4",
    icon: ShieldCheck,
  },
  {
    label: "Nationwide CPCB EPR Network",
    value: "Pan India",
    icon: TrendingUp,
  },
];

const volumeByYear = [
  { label: "FY22", value: 180 },
  { label: "FY23", value: 310 },
  { label: "FY24", value: 460 },
  { label: "FY25E", value: 640 },
];

const priceIndex = [
  { label: "Q1", value: 100 },
  { label: "Q2", value: 112 },
  { label: "Q3", value: 128 },
  { label: "Q4", value: 141 },
];

const stakeholders = [
  {
    icon: Factory,
    title: "Producers, importers & brand owners",
    body: "Carry the underlying EPR obligation across every plastic category placed on the market. Forecasting the category-wise target early avoids buying credits at a premium near the deadline.",
  },
  {
    icon: Recycle,
    title: "Recyclers & processors",
    body: "Every tonne processed and verified converts into certificate value — the opportunity scales with formal registration, clean documentation, and category-accurate reporting.",
  },
];

const categoryLedger = [
  {
    code: "CAT-I",
    title: "Rigid plastic packaging",
    body: "Bottles, containers, and other rigid formats — generally the most straightforward category to recycle mechanically.",
  },
  {
    code: "CAT-II",
    title: "Flexible plastic packaging",
    body: "Single-layer flexible packaging such as wrappers and pouches, needing dedicated flexible-stream processing.",
  },
  {
    code: "CAT-III",
    title: "Multi-layered packaging (recyclable)",
    body: "Layered packaging that can still be mechanically or chemically recycled with the right processing line.",
  },
  {
    code: "CAT-IV",
    title: "Multi-layered packaging (non-recyclable)",
    body: "Routed to end-of-life processing such as co-processing or waste-to-energy rather than conventional recycling.",
  },
];

const faqs = [
  {
    q: "What is an EPR plastic credit, in practice?",
    a: "It's a certificate issued once a recycler or processor verifies it has handled a given quantity of a specific plastic category. Producers, importers, and brand owners buy these to cover the share of their obligation they haven't met directly.",
  },
  {
    q: "Do all four plastic categories trade at the same price?",
    a: "No — categories that are harder to process, like multi-layered non-recyclable packaging, typically carry a different price dynamic than straightforward rigid plastic.",
  },
  {
    q: "Who exactly counts as a PIBO?",
    a: "Producers, Importers, and Brand Owners — anyone placing plastic packaging on the market under their own brand or import license carries the obligation, regardless of who manufactures it.",
  },
  {
    q: "What happens if a PIBO can't source enough credits in a category?",
    a: "Category-specific shortfalls that aren't covered by purchased certificates typically lead to environmental compensation, which is why early, category-wise forecasting matters.",
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

/* Signature element: a fixed "circularity ring" that spins and fills as
   the reader scrolls — reads as a closing recycling loop rather than the
   battery-charge or ticker motifs used for the battery-credit posts. */
function CircularityRail() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const r = 26;
  const circumference = 2 * Math.PI * r;
  const dashoffset = useTransform(scrollYProgress, [0, 1], [circumference, 0]);

  return (
    <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-2">
      <div className="relative w-16 h-16">
        <svg viewBox="0 0 64 64" className="w-16 h-16 -rotate-90">
          <circle
            cx="32"
            cy="32"
            r={r}
            fill="none"
            stroke="currentColor"
            className="text-muted"
            strokeWidth="5"
          />
          <motion.circle
            cx="32"
            cy="32"
            r={r}
            fill="none"
            stroke="#5AC361"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: dashoffset }}
          />
        </svg>
        <motion.div
          style={{ rotate }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Recycle className="w-6 h-6 text-brandGreen" />
        </motion.div>
      </div>
      <span className="font-mono text-[10px] text-muted-foreground rotate-90 mt-2 origin-center">
        LOOP
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 1 — Hero                                                   */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-brandGreen bg-gradient-to-br from-card via-card to-brandGreen/5 px-6 py-14 sm:px-20 sm:py-10">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 w-72 h-72 rounded-full bg-brandGreen/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <Reveal>
        <Eyebrow code="EPR / PLASTIC">Market intelligence</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground max-w-3xl">
          EPR Plastic Credits: Market Analysis{" "}
          <span className="text-brandGreen">&amp; Business Opportunity</span>
        </h1>
      </Reveal>
      <Reveal delay={0.15} className="max-w-2xl">
        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          A practical, step-by-step guide covering market analysis and business
          opportunity for EPR plastic credits — built for producers and recyclers. reach out for
          immediate guidance in the meantime.
        </p>
      </Reveal>
      <Reveal delay={0.25}>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          
            <a href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]">
        
            Get immediate guidance <ArrowRight className="w-4 h-4" />
          </a>
          
           <a href="#market-analysis"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            See the market data
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.3} className="mt-14">
        <PlasticHeroGraphic />
      </Reveal>
    </section>
  );
}

function PlasticHeroGraphic() {
  return (
    <svg
      viewBox="0 0 900 160"
      className="w-full h-auto"
      role="img"
      aria-label="Plastic packaging credit flow illustration"
    >
      <rect
        x="20"
        y="55"
        width="760"
        height="50"
        rx="14"
        fill="none"
        stroke="currentColor"
        className="text-border"
        strokeWidth="2"
      />
      <motion.rect
        x="28"
        y="63"
        height="34"
        rx="8"
        fill="#5AC361"
        initial={{ width: 0 }}
        whileInView={{ width: 700 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />
      {[Package, Layers, ShoppingBag, BarChart3].map((Icon, i) => (
        <foreignObject key={i} x={100 + i * 190} y={0} width="60" height="60">
          <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center shadow-sm">
            <Icon className="w-6 h-6 text-brandGreen" />
          </div>
        </foreignObject>
      ))}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          r="4"
          fill="#5AC361"
          initial={{ cx: 40, cy: 80 }}
          animate={{ cx: [40, 780] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1,
          }}
          cy="80"
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 2 — Market pulse stats                                     */
/* ------------------------------------------------------------------ */

function MarketPulseStats() {
  return (
    <section className="mt-16">
      <Reveal>
        <Eyebrow code="EPR-P0">Market pulse</Eyebrow>
      </Reveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {marketStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-card p-5 hover:border-brandGreen/50 transition-colors">
              <s.icon className="w-5 h-5 text-brandGreen mb-4" />
              <div className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
                {s.value}
              </div>
              <p className="mt-1 text-xs text-muted-foreground leading-snug">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 3 — What are EPR plastic credits                           */
/* ------------------------------------------------------------------ */

function WhatAreCredits() {
  return (
    <section className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
      <Reveal>
        <Eyebrow code="EPR-P1">The basics</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          What an EPR plastic credit actually represents
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Every unit of plastic packaging placed on the market carries an
          end-of-life obligation, tied to its specific category. When a recycler
          or processor handles that packaging and gets the volume verified, the
          system issues a certificate — a credit — tied to that category.
          Producers, importers, and brand owners who can't hit their own
          category target buy these certificates instead of paying a
          compensation penalty.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Certificates are tied to a specific plastic category, not a blanket total",
            "Producers, importers & brand owners buy what they can't recycle themselves",
          ].map((line) => (
            <li
              key={line}
              className="flex items-start gap-3 text-sm text-foreground"
            >
              <ShieldCheck className="w-4 h-4 mt-0.5 text-brandGreen shrink-0" />
              {line}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.15}>
        <PackagingLoopIllustration />
      </Reveal>
    </section>
  );
}

function PackagingLoopIllustration() {
  return (
    <svg viewBox="0 0 400 340" className="w-full max-w-md mx-auto">
      <circle
        cx="200"
        cy="150"
        r="110"
        fill="none"
        stroke="currentColor"
        className="text-border"
        strokeWidth="2"
        strokeDasharray="6 8"
      />
      <motion.circle
        cx="200"
        cy="150"
        r="110"
        fill="none"
        stroke="#5AC361"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6 }}
      />
      {[
        { Icon: Package, x: 200, y: 40 },
        { Icon: Recycle, x: 320, y: 220 },
        { Icon: Landmark, x: 80, y: 220 },
      ].map(({ Icon, x, y }, i) => (
        <foreignObject key={i} x={x - 28} y={y - 28} width="56" height="56">
          <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center">
            <Icon className="w-6 h-6 text-brandGreen" />
          </div>
        </foreignObject>
      ))}
      <text
        x="200"
        y="300"
        textAnchor="middle"
        className="fill-muted-foreground font-mono text-[11px]"
      >
        packaging → processed → verified → credit issued
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 4 — Bar chart + line chart                                 */
/* ------------------------------------------------------------------ */

function BarChart() {
  const max = Math.max(...volumeByYear.map((d) => d.value));
  return (
    <div className="flex items-end gap-4 sm:gap-8 h-56 pt-6">
      {volumeByYear.map((d, i) => (
        <div key={d.label} className="flex flex-col items-center gap-2 flex-1">
          <span className="font-mono text-xs text-foreground">{d.value}kt</span>
          <div className="w-full h-40 flex items-end rounded-md bg-muted overflow-hidden">
            <motion.div
              className="w-full rounded-md bg-gradient-to-t from-brandGreen to-emerald-300"
              initial={{ height: 0 }}
              whileInView={{ height: `${(d.value / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: "easeOut" }}
            />
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {d.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function LineChart() {
  const max = Math.max(...priceIndex.map((d) => d.value));
  const min = Math.min(...priceIndex.map((d) => d.value));
  const w = 320;
  const h = 140;
  const padX = 20; // horizontal inset so edge labels don't clip
  const plotW = w - padX * 2;
  const step = plotW / (priceIndex.length - 1);

  // small y-headroom too, so the top point/dot isn't flush against the viewBox edge
  const padY = 10;
  const plotH = h - padY * 2;
  const range = max - min || 1;

  const points = priceIndex.map((d, i) => [
    padX + i * step,
    padY + plotH - ((d.value - min) / range) * plotH,
  ]);

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`)
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h + 30}`} className="w-full h-auto">
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
          <circle cx={p[0]} cy={p[1]} r="4" fill="#5AC361" />
          <text
            x={p[0]}
            y={h + 22}
            textAnchor={
              i === 0 ? "start" : i === points.length - 1 ? "end" : "middle"
            }
            className="fill-muted-foreground font-mono text-[10px]"
          >
            {priceIndex[i].label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function MarketAnalysisChart() {
  return (
    <section id="market-analysis" className="mt-20 scroll-mt-28">
      <Reveal>
        <Eyebrow code="EPR-P2">Market analysis</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Credit volume and price movement, at a glance
        </h2>
      </Reveal>
      <div className="mt-8 grid lg:grid-cols-1 gap-6">
        <Reveal
          delay={0.1}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="w-4 h-4 text-brandGreen" />
            <h3 className="font-medium text-foreground">
              Indicative credit volume trend
            </h3>
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            Kilotonnes-equivalent, by fiscal year
          </p>
          <BarChart />
        </Reveal>
        {/* <Reveal
          delay={0.2}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-6 h-6 text-brandGreen" />
            <h3 className="font-medium text-foreground">
              Indicative credit price index
            </h3>
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            Q1 of the compliance year = 100
          </p>
          <LineChart />
        </Reveal> */}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 5 — Stakeholder opportunity cards                          */
/* ------------------------------------------------------------------ */

function StakeholderOpportunities() {
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="EPR-P3">Business opportunity</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Where the opportunity sits, by role
        </h2>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-2 gap-5">
        {stakeholders.map((s, i) => (
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
/*  SECTION 6 — Plastic category ledger                                */
/* ------------------------------------------------------------------ */

function CategoryLedger() {
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="EPR-P4">Categories that shape the market</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Four categories, four different markets
        </h2>
      </Reveal>
      <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">
        {categoryLedger.map((step, i) => (
          <Reveal key={step.code} delay={i * 0.06}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-5">
              <span className="font-mono text-xs text-brandGreen w-16 shrink-0">
                {step.code}
              </span>
              <h3 className="font-medium text-foreground w-full sm:w-56 shrink-0">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 7 — Credit flow diagram                                    */
/* ------------------------------------------------------------------ */

function CreditFlowDiagram() {
  const nodes = [
    { icon: Factory, label: "PIBO" },
    { icon: Recycle, label: "Recycler" },
    { icon: FileCheck2, label: "Certificate" },
    { icon: ShieldCheck, label: "Compliance" },
  ];
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="EPR-P5">Credit trading</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          How a credit moves from packaging to compliance
        </h2>
      </Reveal>
      <Reveal
        delay={0.1}
        className="mt-8 rounded-2xl border border-border bg-card p-8 overflow-x-auto"
      >
        <div className="flex items-center justify-between min-w-[640px] relative">
          <div className="absolute left-8 right-8 top-7 h-[2px] bg-border" />
          <motion.div
            className="absolute left-8 top-7 h-[2px] bg-brandGreen"
            initial={{ width: 0 }}
            whileInView={{ width: "calc(100% - 4rem)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
          {nodes.map((n) => (
            <div
              key={n.label}
              className="relative z-10 flex flex-col items-center gap-2 flex-1"
            >
              <div className="w-14 h-14 rounded-full bg-background border-2 border-brandGreen flex items-center justify-center">
                <n.icon className="w-6 h-6 text-brandGreen" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground text-center">
                {n.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 8 — CTA banner                                             */
/* ------------------------------------------------------------------ */

function CTABanner() {
  return (
    <section className="mt-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 sm:px-12 sm:py-16 text-primary-foreground">
          <Recycle className="absolute -right-6 -bottom-8 w-40 h-40 opacity-10" />
          <span className="font-mono text-xs tracking-widest opacity-80">
            EPR-P6 / NEXT STEP
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold max-w-xl">
            Want to learn more?
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base opacity-90">
            If you need to make a PIBO or recycler decision now, talk to
            our team for immediate, category-specific guidance instead of
            waiting on the published version.
          </p>
          
           <a href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:scale-[1.03] transition-transform">
            Reach out for guidance <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 9 — FAQ accordion                                          */
/* ------------------------------------------------------------------ */

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="EPR-P7">Common questions</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Before you reach out
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
/*  SECTION 10 — Closing trust strip                                   */
/* ------------------------------------------------------------------ */

function ClosingTrustStrip() {
  return (
    <section className="mt-20 mb-4">
      <Reveal>
        <div className="rounded-2xl border border-dashed border-brandGreen/40 bg-brandGreen/5 px-6 py-8 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Users2 className="w-6 h-6 text-brandGreen" />
            <p className="text-sm text-foreground max-w-md">
              Written for teams who need to act on EPR plastic credits now — not
              after the market has already moved.
            </p>
          </div>
          
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-brandGreen px-5 py-2.5 text-sm font-medium text-brandGreen hover:bg-brandGreen hover:text-white transition-colors"
          <a>
            Talk to our team <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function EPRPlasticCreditsMarketAnalysis() {
  return (
    <div className="bg-background min-h-screen">
      <CircularityRail />
      <div className="md:container pt-28 sm:pt-32 pb-24">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-10 xl:gap-4">
          <main className="min-w-0">
            <Seo
              title="EPR Plastic Credits: Market Analysis & Business Opportunity"
              description="Explore the EPR Plastic Credits market with in-depth analysis, business opportunities, pricing trends, regulatory insights, and strategies to maximize value through plastic recycling and EPR credit trading in India."
              keywords={[
                "EPR Plastic Credits",
                "Plastic EPR Credits",
                "Plastic Credit Trading",
                "Plastic Credit Marketplace",
                "Plastic Recycling",
                "Plastic Waste Management",
                "Extended Producer Responsibility",
                "Plastic EPR Compliance",
                "Plastic Recycling Certificates",
                "CPCB Plastic EPR",
                "Plastic Credit Business",
                "Circular Economy",
                "Environmental Compliance",
                "Plastic Waste Recycling",
                "EPR Credit Market",
                "How do Plastic EPR credits work?",
                "What are Plastic EPR credits?",
                "How to buy and sell Plastic EPR credits?",
                "Plastic EPR credit market in India",
                "How to earn from Plastic EPR credits?",
                "Benefits of Plastic EPR credit trading",
                "Plastic recycling business opportunities",
                "Plastic EPR pricing trends",
                "Plastic EPR compliance guide",
                "Plastic EPR market analysis 2026",
              ]}
              url="https://eprnexuss.com/blog/epr-plastic-analysis"
              type="article"
            />
            <Hero />
            <MarketPulseStats />
            <WhatAreCredits />
            <MarketAnalysisChart />
            <StakeholderOpportunities />
            <CategoryLedger />
            <CreditFlowDiagram />
            <CTABanner />
            <FAQAccordion />
            {/* <ClosingTrustStrip /> */}
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