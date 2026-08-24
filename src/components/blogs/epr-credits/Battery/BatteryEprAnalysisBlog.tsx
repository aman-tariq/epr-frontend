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
  Battery,
  BatteryCharging,
  Recycle,
  Factory,
  ShieldCheck,
  Landmark,
  TrendingUp,
  FileCheck2,
  ArrowRight,
  ChevronDown,
  BarChart3,
  Users2,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import { useNavigate } from "react-router-dom";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/*  DATA — replace indicative figures with confirmed numbers once the */
/*  full deep-dive report is finalized.                               */
/* ------------------------------------------------------------------ */

const marketStats = [
  {
    label: "Registered battery producers tracked",
    value: "4,860",
    icon: Factory,
  },
  { label: "Registered Battery Recyclers", value: "553", icon: TrendingUp },
  {
    label: "Tonnes Lead EPR Credits Generated",
    value: "2.85M",
    icon: Recycle,
  },
  { label: "Tonnes Lead EPR Credits Transferred", value: "1.59M+", icon: ShieldCheck },
];

const volumeByYear = [
  { label: "FY22", value: 120 },
  { label: "FY23", value: 210 },
  { label: "FY24", value: 340 },
  { label: "FY25E", value: 520 },
];

const priceIndex = [
  { label: "Q1", value: 100 },
  { label: "Q2", value: 118 },
  { label: "Q3", value: 132 },
  { label: "Q4", value: 150 },
];

const stakeholders = [
  {
    icon: Factory,
    title: "Producers",
    body: "Turn a mandatory obligation into a planned cost line. Forecast EPR targets ahead of the compliance year and buy credits at predictable, not panic, prices.",
  },
  {
    icon: Recycle,
    title: "Recyclers",
    body: "Every tonne processed converts into a certificate with resale value. Formal registration and clean documentation are what separate scrap volume from monetized credits.",
  },
];

const ledgerSteps = [
  {
    code: "EPR-01",
    title: "Registration",
    body: "Producers and recyclers register on the central portal and declare battery categories placed on the market.",
  },
  {
    code: "EPR-02",
    title: "Target setting",
    body: "Annual collection and recycling obligations are assigned based on prior-year sales volume.",
  },
  {
    code: "EPR-03",
    title: "Collection & recycling",
    body: "Waste batteries are collected, processed, and recycled through authorised facilities.",
  },
  {
    code: "EPR-04",
    title: "Certificate generation",
    body: "Verified recycling volume is converted into tradeable EPR certificates on the registry.",
  },
  {
    code: "EPR-05",
    title: "Credit trading",
    body: "Producers short on their own recycling purchase certificates from recyclers to close the gap.",
  },
  {
    code: "EPR-06",
    title: "Annual filing",
    body: "Producers submit compliance reports; shortfalls attract environmental compensation.",
  },
];

const faqs = [
  {
    q: "What exactly is an EPR battery credit?",
    a: "It's a certificate issued once a recycler proves it has processed a given quantity of waste batteries. Producers buy these certificates to meet the portion of their annual recycling obligation they haven't met directly.",
  },
  {
    q: "Who is actually required to hold credits?",
    a: "Producers, importers, and brand owners placing batteries on the market carry the underlying obligation. Recyclers generate and route the supply side of the market.",
  },
  {
    q: "How is a credit's price set?",
    a: "Price moves with the gap between issued certificates and outstanding obligations in a given cycle — tighter recycling capacity or a compliance-deadline crunch pushes prices up.",
  },
  {
    q: "What happens if a producer falls short?",
    a: "Unmet obligations that aren't covered by purchased credits typically result in environmental compensation payments, which is why early forecasting is cheaper than late buying.",
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

/* Signature element: a fixed "battery charge" reading-progress rail */
function ChargeRail() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["4%", "100%"]);
  return (
    <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-2">
      <BatteryCharging className="w-4 h-4 text-brandGreen" />
      <div className="relative w-2.5 h-40 rounded-full bg-muted border border-border overflow-hidden">
        <motion.div
          style={{ height }}
          className="absolute bottom-0 left-0 w-full rounded-full bg-gradient-to-t from-brandGreen to-emerald-300"
        />
      </div>
      <span className="font-mono text-[10px] text-muted-foreground rotate-90 mt-2 origin-center">
        READING
      </span>
    </div>
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
        <Eyebrow code="EPR / BATTERY">Market intelligence</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground max-w-3xl">
          EPR Battery Credits: Market Analysis{" "}
          <span className="text-brandGreen">&amp; Business Opportunity</span>
        </h1>
      </Reveal>
      <Reveal delay={0.15} className="max-w-2xl">
        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          A practical, step-by-step guide covering market analysis and business
          opportunity for EPR battery credits — built for producers and recyclers. Our team is finalizing the full deep-dive; reach out for
          immediate guidance in the meantime.
        </p>
      </Reveal>
      <Reveal delay={0.25}>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          
          <a  href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Get immediate guidance <ArrowRight className="w-4 h-4" />
          </a>
          
           <a href="#market-analysis"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            See the market data
          </a>
        </div>
      </Reveal>

      {/* signature illustration: battery-as-circuit */}
      <Reveal delay={0.3} className="mt-14">
        <BatteryHeroGraphic />
      </Reveal>
    </section>
  );
}

function BatteryHeroGraphic() {
  return (
    <svg
      viewBox="0 0 900 160"
      className="w-full h-auto"
      role="img"
      aria-label="Battery credit flow illustration"
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
      <rect
        x="780"
        y="70"
        width="16"
        height="20"
        rx="3"
        fill="currentColor"
        className="text-border"
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
      {[Factory, Recycle, Landmark, BarChart3].map((Icon, i) => (
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
        <Eyebrow code="EPR-00">Market pulse</Eyebrow>
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
      <p className="mt-3 font-mono text-[11px] text-muted-foreground">
        Source: CPCB Battery Waste EPR National Dashboard. Figures are dynamic and may change as new registrations and transactions are recorded.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 3 — What are EPR battery credits                           */
/* ------------------------------------------------------------------ */

function WhatAreCredits() {
  return (
    <section className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
      <Reveal>
        <Eyebrow code="EPR-01">The basics</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          What an EPR battery credit actually represents
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Every battery placed on the market carries an end-of-life obligation.
          When a recycler processes waste batteries and gets that volume
          verified, the system issues a certificate — a credit — that represents
          one producer's obligation being met by someone else's recycling work.
          Producers who can't hit their own collection target buy these
          certificates to close the gap instead of paying a compensation
          penalty.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Certificates are tied to verified, audited recycling volume",
            "Producers buy what they can't recycle themselves",
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
        <CircuitIllustration />
      </Reveal>
    </section>
  );
}

function CircuitIllustration() {
  return (
    <svg viewBox="0 0 400 340" className="w-full max-w-md mx-auto">
      <rect
        x="140"
        y="20"
        width="120"
        height="220"
        rx="20"
        fill="none"
        stroke="currentColor"
        className="text-border"
        strokeWidth="2"
      />
      <rect
        x="180"
        y="6"
        width="40"
        height="16"
        rx="4"
        fill="currentColor"
        className="text-border"
      />
      <motion.rect
        x="152"
        y="180"
        width="96"
        rx="10"
        fill="#5AC361"
        initial={{ height: 0, y: 228 }}
        whileInView={{ height: 48, y: 180 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <motion.rect
        x="152"
        width="96"
        rx="10"
        fill="#5AC361"
        opacity="0.55"
        initial={{ height: 0, y: 180 }}
        whileInView={{ height: 92, y: 88 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <Battery className="w-8 h-8" x="184" y="98" />
      {[0, 1].map((i) => (
        <motion.path
          key={i}
          d={`M ${i === 0 ? 40 : 360} 130 Q ${i === 0 ? 90 : 310} 130 ${i === 0 ? 140 : 260} 130`}
          stroke="#5AC361"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 + i * 0.2 }}
        />
      ))}
      <foreignObject x="0" y="100" width="60" height="60">
        <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center">
          <Recycle className="w-6 h-6 text-brandGreen" />
        </div>
      </foreignObject>
      <foreignObject x="340" y="100" width="60" height="60">
        <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center">
          <Factory className="w-6 h-6 text-brandGreen" />
        </div>
      </foreignObject>
      <text
        x="200"
        y="290"
        textAnchor="middle"
        className="fill-muted-foreground font-mono text-[11px]"
      >
        recycled volume → verified → credit issued
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 4 — Bar chart: credit volume by year                       */
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
  const w = 320;
  const h = 140;
  const step = w / (priceIndex.length - 1);
  const points = priceIndex.map((d, i) => [i * step, h - (d.value / max) * h]);
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
            textAnchor="middle"
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
        <Eyebrow code="EPR-02">Market analysis</Eyebrow>
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
            <TrendingUp className="w-4 h-4 text-brandGreen" />
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
        <Eyebrow code="EPR-03">Business opportunity</Eyebrow>
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
/*  SECTION 6 — Ledger / compliance timeline                           */
/* ------------------------------------------------------------------ */

function ComplianceTimeline() {
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="EPR-04">How a compliance cycle runs</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Six entries, one ledger
        </h2>
      </Reveal>
      <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">
        {ledgerSteps.map((step, i) => (
          <Reveal key={step.code} delay={i * 0.06}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-5">
              <span className="font-mono text-xs text-brandGreen w-16 shrink-0">
                {step.code}
              </span>
              <h3 className="font-medium text-foreground w-full sm:w-44 shrink-0">
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
/*  SECTION 7 — Animated credit flow diagram                           */
/* ------------------------------------------------------------------ */

function CreditFlowDiagram() {
  const nodes = [
    { icon: Factory, label: "Producer" },
    { icon: Recycle, label: "Recycler" },
    { icon: FileCheck2, label: "Certificate" },
    { icon: ShieldCheck, label: "Compliance" },
  ];
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="EPR-05">Credit trading</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          How a credit moves from waste to compliance
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
          {nodes.map((n, i) => (
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
          <BatteryCharging className="absolute -right-6 -bottom-8 w-40 h-40 opacity-10" />
          <span className="font-mono text-xs tracking-widest opacity-80">
            EPR-06 / NEXT STEP
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold max-w-xl">
            The full deep-dive report is still being finalized.
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base opacity-90">
            If you need to make a producer or recycler decision now, talk
            to our team for immediate, specific guidance instead of waiting on
            the published version.
          </p>
          
           <a href="/contact"
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
/*  SECTION 9 — FAQ accordion                                          */
/* ------------------------------------------------------------------ */

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="EPR-07">Common questions</Eyebrow>
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
/*  SECTION 10 — Closing note / trust strip                             */
/* ------------------------------------------------------------------ */

function ClosingTrustStrip() {
  const navigate = useNavigate();
  return (
    <section className="mt-20 mb-4">
      <Reveal>
        <div className="rounded-2xl border border-dashed border-brandGreen/40 bg-brandGreen/5 px-6 py-8 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Users2 className="w-6 h-6 text-brandGreen" />
            <p className="text-sm text-foreground max-w-md">
              Written for teams who need to act on EPR battery credits now — not
              after the market has already moved.
            </p>
          </div>
          
           <a href="/contact"
            onClick={() => {
              navigate("#contact");
            }}
            className="inline-flex items-center gap-2 rounded-full border border-brandGreen px-5 py-2.5 text-sm font-medium text-brandGreen hover:bg-brandGreen hover:text-white transition-colors"
          >
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

export default function EPRBatteryCreditsBlog() {
  return (
    <div className="bg-background min-h-screen">
      <ChargeRail />
      <div className="w-full md:mr-auto md:ml-auto md-pr-2rem md-pl-2rem pt-28 sm:pt-32 pb-24">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-10 xl:gap-4">
          <main className="min-w-0">
            <Seo
              title="EPR Battery Credits: Market Analysis & Business Opportunity"
              description="Explore the EPR battery credits market with in-depth analysis, business opportunities, pricing trends, demand insights, and strategies to maximize value through Battery EPR credit trading in India."
              keywords={[
                "EPR Battery Credits",
                "Battery EPR Credits",
                "Battery Credit Trading",
                "Battery Credit Marketplace",
                "EPR Credit Market",
                "Battery Waste Management",
                "Extended Producer Responsibility",
                "Battery Recycling",
                "Battery EPR Compliance",
                "Battery Recycling Certificates",
                "CPCB Battery Credits",
                "Battery Credit Business",
                "Circular Economy",
                "Battery Credit Trading India",
                "Environmental Compliance",
                "How do EPR battery credits work?",
                "What are battery EPR credits?",
                "How to buy and sell battery EPR credits?",
                "Battery EPR credit market in India",
                "How to earn from battery EPR credits?",
                "Benefits of battery credit trading",
                "Battery credit pricing trends",
                "Battery EPR compliance guide",
                "Battery credit business opportunities",
                "Battery credit market analysis 2026",
              ]}
              url="https://eprnexuss.com/blog/epr-battery-analysis"
              type="article"
            />
            <Hero />
            <MarketPulseStats />
            <WhatAreCredits />
            <MarketAnalysisChart />
            <StakeholderOpportunities />
            <ComplianceTimeline />
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