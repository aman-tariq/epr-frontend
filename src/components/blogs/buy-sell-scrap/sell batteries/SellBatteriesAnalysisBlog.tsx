"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, type Variants } from "framer-motion";
import {
  BatteryCharging,
  Recycle,
  TrendingUp,
  ShieldCheck,
  Factory,
  Truck,
  Zap,
  Building2,
  FileCheck2,
  Handshake,
  Layers,
  ArrowRight,
  Leaf,
  FlaskConical,
  Flame,
  ClipboardCheck,
  Gauge,
  MapPin,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/*  Shared motion helpers                                              */
/* ------------------------------------------------------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
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
  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
    >
      {children}
    </motion.div>
  );
}

/* Animated count-up number, triggers once when scrolled into view */
function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, to, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Data — sourced from IMARC Group, Fortune Business Insights,        */
/*  P&S Intelligence, IndexBox and CPCB / BWMR 2022 public reporting.   */
/*  See "Sources" note at the bottom of the page.                      */
/* ------------------------------------------------------------------ */

const marketGrowthData = [
  { year: "2020", value: 398.8 },
  { year: "2025", value: 603.9 },
  { year: "2030", value: 914.5 },
  { year: "2034", value: 1323.4 },
];

const chemistryShareData = [
  { name: "Lead-Acid", value: 46.8 },
  { name: "Other chemistries", value: 53.2 },
];

const feedstockGapData = [
  { name: "Available Li-ion feedstock", tonnes: 30000 },
  { name: "Processed by formal recyclers", tonnes: 15000 },
];

const CHART_GREEN = "#5AC361";
const CHART_MUTED = "#B7C3B9";

/* ------------------------------------------------------------------ */
/*  1. Hero                                                             */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-background to-brandGreen/10 px-6 py-14 sm:px-10 sm:py-20">
      {/* ambient decorative circuit-style svg, not a photo */}
      <svg
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 opacity-[0.07] sm:h-96 sm:w-96"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brandGreen"
        />
        <circle
          cx="100"
          cy="100"
          r="60"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-primary"
        />
        <circle
          cx="100"
          cy="100"
          r="30"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brandGreen"
        />
        <path
          d="M100 10V190M10 100H190"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary"
        />
      </svg>

      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerParent}
        className="relative max-w-3xl"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-brandGreen/30 bg-brandGreen/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brandGreen"
        >
          <Recycle className="h-3.5 w-3.5" />
          Battery Scrap &amp; EPR Insight
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Sell Batteries: Market Analysis &amp; Business Opportunity
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A practical, step-by-step look at the market and business case for
          battery scrap — built for{" "}
          <span className="font-semibold text-foreground">producers</span>,{" "}
          <span className="font-semibold text-foreground">recyclers</span>, and{" "}
          <span className="font-semibold text-foreground">
            PROs (Producer Responsibility Organisations)
          </span>{" "}
          navigating India&apos;s Battery Waste Management Rules, 2022.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Talk to our team
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
/*  2. Market snapshot — animated stat cards                           */
/* ------------------------------------------------------------------ */

function MarketSnapshotSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: <Counter to={603.9} prefix="$" suffix="M" decimals={1} />,
      label: "India battery recycling market size, 2025",
      sub: "Growing at ~8.65% CAGR through 2034",
    },
    {
      icon: Factory,
      value: <Counter to={670} suffix="+" />,
      label: "CPCB-authorised lead-acid recyclers in India",
      sub: "Combined capacity of 3.5M+ tonnes per annum",
    },
    {
      icon: ShieldCheck,
      value: <Counter to={90} suffix="%" />,
      label: "Mandatory material recovery for EV batteries",
      sub: "Required by FY 2026–27 under CPCB norms",
    },
    {
      icon: Gauge,
      value: <Counter to={99} suffix="%" />,
      label: "Recycling rate of lead-acid batteries",
      sub: "In mature closed-loop markets like the US",
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          The market, in numbers
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Real figures from current industry reporting — no projections dressed
          up as facts.
        </p>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerParent}
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <s.icon className="h-6 w-6 text-brandGreen" />
            <div className="mt-4 font-display text-3xl font-bold text-foreground">
              {s.value}
            </div>
            <p className="mt-2 text-sm font-medium text-foreground">
              {s.label}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{s.sub}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. Growth chart — India market trajectory                          */
/* ------------------------------------------------------------------ */

function GrowthChartSection() {
  return (
    <section className="py-12 sm:py-16">
      <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-brandGreen">
            Trajectory
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
            India&apos;s battery recycling market is on a decade-long climb
          </h2>
          <p className="mt-3 text-muted-foreground">
            Market value has grown from roughly $398.8M in 2020 to $603.9M in
            2025, and is projected to reach $1,323.4M by 2034 — driven by EV
            retirements, EPR enforcement under BWMR 2022, and demand for
            domestically recovered critical minerals.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Source: IMARC Group, 2026
          </p>
        </div>
        <div className="h-72 rounded-2xl border border-border bg-card p-4 lg:col-span-3">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={marketGrowthData}
              margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                className="stroke-border"
              />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 12 }}
                stroke="currentColor"
                className="text-muted-foreground"
              />
              <YAxis
                tick={{ fontSize: 12 }}
                stroke="currentColor"
                className="text-muted-foreground"
              />
              <Tooltip
                formatter={(v: number) => [`$${v}M`, "Market size"]}
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid hsl(var(--border))",
                }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {marketGrowthData.map((_, i) => (
                  <Cell
                    key={i}
                    fill={
                      i === marketGrowthData.length - 1
                        ? CHART_GREEN
                        : "hsl(var(--primary))"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. Chemistry & feedstock breakdown                                 */
/* ------------------------------------------------------------------ */

function SegmentBreakdownSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Reveal className="rounded-2xl border border-border bg-card p-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-brandGreen">
            By chemistry
          </span>
          <h3 className="mt-2 font-display text-xl font-bold text-foreground">
            Lead-acid still leads, for now
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Lead-acid holds 46.8% of India&apos;s battery recycling market
            (2025), backed by mature collection networks. Lithium-ion is the
            fastest-growing chemistry as EV fleets retire.
          </p>
          <div className="mt-5 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chemistryShareData}
                layout="vertical"
                margin={{ left: 10 }}
              >
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={{ fontSize: 11 }}
                  hide
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  width={140}
                  stroke="currentColor"
                  className="text-muted-foreground"
                />
                <Tooltip formatter={(v: number) => [`${v}%`, "Share"]} />
                <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                  <Cell fill={CHART_GREEN} />
                  <Cell fill={CHART_MUTED} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Source: IMARC Group, 2025
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-brandGreen">
            The formal-vs-informal gap
          </span>
          <h3 className="mt-2 font-display text-xl font-bold text-foreground">
            Half of lithium-ion scrap still goes untracked
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Of the estimated 25,000–35,000 tonnes of Li-ion battery waste
            available in India in 2026, only 12,000–18,000 tonnes reach formal,
            CPCB-compliant recyclers. The rest is handled informally or
            stockpiled — a direct opportunity for compliant operators.
          </p>
          <div className="mt-5 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={feedstockGapData}
                margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
              >
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 10 }}
                  interval={0}
                  stroke="currentColor"
                  className="text-muted-foreground"
                />
                <YAxis
                  tick={{ fontSize: 11 }}
                  stroke="currentColor"
                  className="text-muted-foreground"
                />
                <Tooltip
                  formatter={(v: number) => [
                    `${v.toLocaleString()} t`,
                    "Tonnes",
                  ]}
                />
                <Bar dataKey="tonnes" radius={[8, 8, 0, 0]}>
                  <Cell fill="hsl(var(--primary))" />
                  <Cell fill={CHART_GREEN} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Source: IndexBox, 2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  5. Why now — growth drivers                                        */
/* ------------------------------------------------------------------ */

function WhyNowSection() {
  const drivers = [
    {
      icon: Zap,
      title: "EV retirements are accelerating",
      body: "Electric two- and three-wheelers sold between 2018–2022 begin reaching end-of-life after 2028, pushing annual feedstock past 120,000 tonnes by 2030.",
    },
    {
      icon: FileCheck2,
      title: "EPR enforcement has teeth",
      body: "Hard compliance targets under the BWMR 2022 Second Amendment take effect from 2027–28, formalising demand for verified recyclers and PROs.",
    },
    {
      icon: FlaskConical,
      title: "Hydrometallurgy is scaling up",
      body: "Over 70–80% of new organised recycling capacity uses hydrometallurgical routes, recovering 95%+ of materials including battery-grade lithium carbonate.",
    },
    {
      icon: Leaf,
      title: "Critical minerals, sourced locally",
      body: "Recovering lithium, cobalt, nickel, and lead domestically reduces import dependence and supports India\u2019s battery manufacturing push.",
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Why the opportunity is opening up now
        </h2>
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerParent}
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        {drivers.map((d, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex gap-4 rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brandGreen/10">
              <d.icon className="h-5 w-5 text-brandGreen" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">
                {d.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{d.body}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  6. EPR / PRO compliance workflow                                   */
/* ------------------------------------------------------------------ */

function EPRComplianceSection() {
  const steps = [
    {
      title: "Register with CPCB",
      body: "Producers and brand owners register on the centralised CPCB EPR portal, declaring battery categories placed on the market.",
    },
    {
      title: "Meet progressive targets",
      body: "Collection and recycling targets rise each year; EV batteries must hit 90% material recovery by FY 2026–27.",
    },
    {
      title: "Partner or build capacity",
      body: "Producers either set up their own recycling infrastructure or contract registered recyclers — this is where PROs add the most value.",
    },
    {
      title: "Trade EPR certificates",
      body: "Verified recycling generates tradeable EPR certificates, letting recyclers monetise compliance and producers close gaps efficiently.",
    },
    {
      title: "Report annually",
      body: "Annual compliance reports go to CPCB; non-compliance draws environmental compensation penalties.",
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <Reveal className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wide text-brandGreen">
          BWMR 2022 · EPR framework
        </span>
        <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
          How the EPR compliance cycle actually works
        </h2>
        <p className="mt-3 text-muted-foreground">
          This is the real sequence PROs help producers and recyclers navigate,
          from registration to certificate settlement.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="relative h-full rounded-2xl border border-border bg-card p-5">
              <span className="font-display text-sm font-bold text-brandGreen">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-border lg:block" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  7. Who this is built for                                           */
/* ------------------------------------------------------------------ */

function AudienceSection() {
  const audiences = [
    {
      icon: Building2,
      title: "Producers & brand owners",
      points: [
        "Meet rising EPR collection & recovery targets without building your own plant",
        "Source verified EPR certificates instead of absorbing penalty costs",
        "Get ahead of hard compliance deadlines from 2027–28",
      ],
    },
    {
      icon: Factory,
      title: "Recyclers",
      points: [
        "Tap a widening feedstock gap — only ~50% of Li-ion scrap reaches formal recyclers",
        "Move up the value chain with hydrometallurgical processing",
        "Sell certified EPR certificates as a second revenue stream",
      ],
    },
    {
      icon: Handshake,
      title: "PROs",
      points: [
        "Aggregate scrap volumes across fragmented informal networks",
        "Bridge producers with CPCB-authorised recyclers at scale",
        "Build long-term contracts as enforcement tightens",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Built for every seat at the table
        </h2>
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerParent}
        className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3"
      >
        {audiences.map((a, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <a.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
              {a.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {a.points.map((p, j) => (
                <li
                  key={j}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brandGreen" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  8. Technology & battery lifecycle                                  */
/* ------------------------------------------------------------------ */

function TechnologyLifecycleSection() {
  const lifecycle = [
    { icon: Zap, label: "Primary use in EV", sub: "8–10 years" },
    {
      icon: Layers,
      label: "Second-life in stationary storage",
      sub: "6–10 more years",
    },
    {
      icon: Recycle,
      label: "Recycling & material recovery",
      sub: "Full recovery cycle",
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          One battery, three life stages
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          The economic case for recycling gets stronger when scrap is captured
          at the right stage of a battery&apos;s life, not just at the very end.
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3">
        {lifecycle.map((l, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brandGreen/10">
                <l.icon className="h-6 w-6 text-brandGreen" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-foreground">
                {l.label}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{l.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Reveal className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <FlaskConical className="h-5 w-5 text-brandGreen" />
            <h3 className="font-display font-semibold text-foreground">
              Hydrometallurgical
            </h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Chemical leaching and precipitation. Now 70–80% of new Indian
            recycling capacity, with 95%+ material recovery including
            battery-grade lithium carbonate.
          </p>
        </Reveal>
        <Reveal
          delay={0.1}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <div className="flex items-center gap-3">
            <Flame className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-display font-semibold text-foreground">
              Pyrometallurgical
            </h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            High-temperature smelting. Once the default route; declining in
            share as lithium loss makes it less economical against
            hydrometallurgical alternatives.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  9. Market players                                                  */
/* ------------------------------------------------------------------ */

function MarketPlayersSection() {
  const players = [
    {
      name: "Lohum Cleantech",
      fact: "~70% share of India\u2019s formal lithium-ion recycling segment",
    },
    {
      name: "Attero Recycling",
      fact: "Committed $361.5M over 5 years toward capacity expansion",
    },
    {
      name: "Gravita India",
      fact: "Leads the organised lead-acid recycling segment",
    },
    {
      name: "Exide Industries",
      fact: "Extending its dealer network into lithium-ion collection",
    },
    {
      name: "Amara Raja Energy & Mobility",
      fact: "Leveraging 12,000+ dealer touchpoints for reverse logistics",
    },
    {
      name: "RecycleKaro & Rubamin",
      fact: "Among the few producing battery-grade output domestically",
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Who&apos;s already building this market
        </h2>
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerParent}
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {players.map((p, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brandGreen" />
              <h3 className="font-display font-semibold text-foreground">
                {p.name}
              </h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.fact}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  10. Final CTA                                                       */
/* ------------------------------------------------------------------ */

function FinalCTASection() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <Reveal className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16">
        <div className="relative max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-medium opacity-90">
            <BatteryCharging className="h-4 w-4" />
            Deep-dive report in progress
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
            Our full market deep-dive is being finalised
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-90 sm:text-base">
            In the meantime, our team can walk you through EPR compliance
            timelines, recycler partnerships, or feedstock sourcing specific to
            your business — as a producer, recycler, or PRO.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get immediate guidance
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <ClipboardCheck className="pointer-events-none absolute -right-6 -bottom-6 h-40 w-40 opacity-10 sm:h-48 sm:w-48" />
      </Reveal>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Sources: IMARC Group · Fortune Business Insights · P&amp;S Intelligence
        · Mordor Intelligence · IndexBox · Global Market Insights · CPCB /
        Battery Waste Management Rules, 2022. Figures reflect the most recent
        public reporting available as of 2026 and are subject to revision as new
        data is published.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page composition                                                    */
/* ------------------------------------------------------------------ */

export default function SellBatteriesBlog() {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
          {/* Main content column */}
          <Seo
            title="Sell Batteries: Market Analysis & Business Opportunity"
            description="Explore the growing battery recycling and resale market with detailed market analysis, business opportunities, demand trends, pricing insights, and profitable strategies for selling batteries in India."
            keywords={[
              "Sell Batteries",
              "Battery Market Analysis",
              "Battery Business Opportunity",
              "Battery Recycling",
              "Used Battery Buyers",
              "Battery Waste Management",
              "Battery Trading",
              "Lead Acid Battery Recycling",
              "Lithium Ion Battery Recycling",
              "Battery Scrap Business",
              "Battery Collection",
              "Battery Market Trends",
              "Circular Economy",
              "Battery Recycling Business",
              "Battery Trading India",
              "How to sell used batteries?",
              "Is the battery recycling business profitable?",
              "How to start a battery recycling business?",
              "Where to sell battery scrap in India?",
              "How to identify profitable battery markets?",
              "Battery business opportunities in India",
              "How to earn from battery recycling?",
              "Battery market trends 2026",
              "Best battery buyers in India",
              "How to grow a battery trading business?",
            ]}
            url="https://eprnexuss.com/blog/sell-batteries-analysis"
            type="article"
          />
          <main className="min-w-0 flex-1">
            <HeroSection />
            <MarketSnapshotSection />
            <GrowthChartSection />
            <SegmentBreakdownSection />
            <WhyNowSection />
            <EPRComplianceSection />
            <AudienceSection />
            <TechnologyLifecycleSection />
            <MarketPlayersSection />
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
