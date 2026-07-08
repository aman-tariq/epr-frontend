"use client";

/**
 * Business Growth & Lead Generation: Market Analysis & Business Opportunity
 * ----------------------------------------------------------------------
 * Single-file blog page for recyclers and EPR businesses looking to scale
 * their own growth and lead generation — not a scrap-operations guide,
 * but a growth-marketing one, grounded in real recycling-market sizing
 * and real 2026 B2B lead-gen benchmarks.
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
  TrendingUp,
  Target,
  Users,
  Clock,
  Handshake,
  PenSquare,
  ChevronDown,
  Search,
  Compass,
  FileSearch,
  Radar,
  Megaphone,
  BarChart3,
  Percent,
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
      label: "Registered EPR entities you could be targeting",
      value: "54,600+",
      source: "CPCB registration data",
    },
    {
      label: "India recycling market, growing to 2031",
      value: "8.44% CAGR",
      source: "Mordor Intelligence",
    },
    {
      label: "Median B2B cost-per-lead, 2026",
      value: "$213",
      source: "HubSpot State of Marketing",
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
          <Eyebrow>Business Growth · Lead Generation</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Business growth &amp; lead generation: market analysis &amp;
            opportunity
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A practical look at where the demand for recycling and EPR services
            is actually coming from — and which growth channels convert that
            demand into real pipeline, backed by current B2B benchmarks.
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
              href="#opportunity"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              See the market opportunity
            </a>
            <a
              href="#channels"
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Compare growth channels
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
/* 2. Market opportunity chart                                          */
/* ------------------------------------------------------------------ */

// Interpolated from two published anchor points at the reported CAGR:
// India recycling market $0.89B (2025) -> $1.45B (2031) at 8.44% CAGR
// (Mordor Intelligence, April 2026 report).
function buildSeries(
  baseYear: number,
  baseValue: number,
  cagr: number,
  years: number,
) {
  const out = [];
  for (let i = 0; i <= years; i++) {
    out.push({
      year: String(baseYear + i),
      value: Math.round(baseValue * Math.pow(1 + cagr, i) * 100) / 100,
    });
  }
  return out;
}

const marketSeries = buildSeries(2025, 0.89, 0.0844, 6); // -> 2031

function MarketOpportunityChart() {
  return (
    <section id="opportunity" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="The demand side"
        title="A market that's growing whether or not you're capturing it"
        description="Tighter EPR mandates and rising demand for recycled content are compounding the market every year — the question is what share of that growth reaches your pipeline."
      />
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="mb-1 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-brandGreen" />
          <h3 className="font-display text-lg font-semibold text-foreground">
            India recycling market size (USD billion)
          </h3>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          $0.89B (2025) → $1.45B by 2031, an 8.44% CAGR
        </p>
        <div className="h-64 w-full">
          <ResponsiveContainer>
            <BarChart data={marketSeries} margin={{ left: -18 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
                unit="B"
              />
              <Tooltip
                formatter={(v: number) => [`$${v}B`, "Market size"]}
                contentStyle={{
                  background: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />
              <Bar
                dataKey="value"
                fill="hsl(var(--primary))"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Source: Mordor Intelligence, "India Recycling Market Size & Share
          Outlook to 2031," April 2026. Trajectory interpolated from published
          2025/2031 figures at the reported CAGR. Metals are the fastest-growing
          material category at 8.94% CAGR, driven by the coming wave of
          lithium-ion battery end-of-life volume.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Addressable market breakdown                                      */
/* ------------------------------------------------------------------ */

const registeredEntities = [
  { category: "Plastic packaging intermediaries", count: 44659 },
  { category: "E-waste entities", count: 7050 },
  { category: "Battery handlers", count: 2933 },
];

function AddressableMarket() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Who's actually in your addressable market"
          title="Registered EPR entities, by category"
          description="Every one of these is a business with a live, recurring compliance obligation — which makes this one of the clearest lead lists in Indian B2B."
        />
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="h-72 w-full">
            <ResponsiveContainer>
              <BarChart
                data={registeredEntities}
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
                />
                <YAxis
                  type="category"
                  dataKey="category"
                  width={200}
                  tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(v: number) => [
                    v.toLocaleString(),
                    "Registered entities",
                  ]}
                  contentStyle={{
                    background: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="count" fill="#5AC361" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Source: Mordor Intelligence, citing CPCB EPR registration data,
            2025–26. These counts represent a traceable, growing compliance
            ecosystem — not a static list.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Why growth looks different for recyclers/EPR businesses           */
/* ------------------------------------------------------------------ */

function WhyDifferent() {
  const cards = [
    {
      icon: Clock,
      title: "Long, compliance-anchored sales cycles",
      copy: "B2B deals over $50K now involve an average buying committee of roughly 11 stakeholders, stretching cycles to 121 days for mid-market and well over 200 days for enterprise accounts.",
    },
    {
      icon: Handshake,
      title: "Relationship and referral heavy",
      copy: "Referrals convert at around 26% — far above cold outreach — which matters enormously in an industry built on repeat contracts and word-of-mouth between plant managers and compliance officers.",
    },
    {
      icon: Radar,
      title: "Demand is regulation-driven, not discretionary",
      copy: "Unlike most B2B categories, a large share of your buyers have a legal deadline forcing the purchase — which changes what 'urgency' means in your messaging.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Before you copy a generic playbook"
        title="Recycling and EPR B2B doesn't behave like SaaS"
        description="Most lead-gen advice is written for software companies with 30-day cycles and single decision-makers. Neither applies here."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <Icon className="h-6 w-6 text-brandGreen" />
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.copy}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Channel performance (signature element)                          */
/* ------------------------------------------------------------------ */

const channelData = [
  { channel: "Organic search / SEO", cpl: 87 },
  { channel: "Referral & partner", cpl: 69 },
  { channel: "Email (house list)", cpl: 42 },
  { channel: "Webinars", cpl: 241 },
  { channel: "Content syndication", cpl: 164 },
  { channel: "Paid search", cpl: 198 },
  { channel: "LinkedIn ads", cpl: 312 },
  { channel: "Trade shows", cpl: 389 },
];

function ChannelPerformance() {
  return (
    <section
      id="channels"
      className="border-y border-border bg-muted/30 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Where a lead-gen budget should actually go"
          title="Cost per lead, by channel"
          description="Cheapest isn't always best — but for a compliance-driven, long-cycle business, the channels that build trust before the sales call tend to outperform the ones that chase clicks."
        />
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-1 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-brandGreen" />
            <h3 className="font-display text-lg font-semibold text-foreground">
              2026 B2B cost-per-lead benchmarks (USD)
            </h3>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer>
              <BarChart
                data={channelData}
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
                  unit="$"
                />
                <YAxis
                  type="category"
                  dataKey="channel"
                  width={170}
                  tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(v: number) => [`$${v}`, "Cost per lead"]}
                  contentStyle={{
                    background: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Bar
                  dataKey="cpl"
                  fill="hsl(var(--primary))"
                  radius={[0, 6, 6, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Source: HubSpot State of Marketing 2026 / Digital Applied B2B
            marketing benchmarks report, 2026. Figures are cross-industry
            medians — actual costs vary by region, competition, and campaign
            maturity.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Sales cycle reality                                               */
/* ------------------------------------------------------------------ */

function SalesCycleReality() {
  const facts = [
    {
      icon: Users,
      stat: "11.2",
      label: "Average buying committee size for deals over $50K",
      source: "Forrester / 6sense, 2026",
    },
    {
      icon: Clock,
      stat: "121–218 days",
      label: "Typical sales cycle length, mid-market to enterprise",
      source: "Digital Applied B2B benchmarks, 2026",
    },
    {
      icon: Target,
      stat: "2.6×",
      label:
        "More pipeline per marketing dollar from account-based targeting vs. broad reach",
      source: "ABM Leadership Alliance / Demandbase, 2026",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Plan your pipeline around this"
        title="What a realistic sales cycle looks like"
        description="If your current lead-gen plan assumes a 30-day close, the plan is the problem — not your product."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {facts.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.label}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <Icon className="h-6 w-6 text-brandGreen" />
              <div className="mt-4 font-display text-2xl font-bold text-foreground">
                {f.stat}
              </div>
              <h3 className="mt-1 text-sm font-semibold text-foreground">
                {f.label}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">{f.source}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7. What actually converts                                            */
/* ------------------------------------------------------------------ */

function WhatConverts() {
  const cards = [
    {
      icon: Handshake,
      stat: "~26%",
      copy: "Referral leads convert at roughly 26% — far above cold outreach — making a structured partner and referral program one of the highest-leverage moves available.",
    },
    {
      icon: PenSquare,
      stat: "748%",
      copy: "Thought-leadership content delivers an estimated 748% ROI, compared with 36% for PPC/SEM — while eating a much smaller share of the typical marketing budget.",
    },
    {
      icon: Percent,
      stat: "30–45%",
      copy: "Organic, SEO-driven leads run 30–45% cheaper than paid channels across most industries — the compounding advantage of content built once and found repeatedly.",
    },
  ];

  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Where the leverage actually is"
          title="The three moves with the best return"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.stat}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <Icon className="h-6 w-6 text-brandGreen" />
                <div className="mt-4 font-display text-3xl font-bold text-foreground">
                  {c.stat}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.copy}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Source: Content Marketing Institute / Prospeo B2B lead generation
          statistics, 2026; Landbase B2B sales statistics, 2026.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8. Growth roadmap (signature-style ordered steps)                    */
/* ------------------------------------------------------------------ */

const roadmapSteps = [
  {
    icon: FileSearch,
    title: "Map your addressable market",
    detail:
      "Start from registered EPR categories and compliance deadlines relevant to your services, not a generic industry list.",
  },
  {
    icon: Search,
    title: "Build authority content & SEO",
    detail:
      "Compliance-driven buyers research heavily before contacting a vendor — rank for the questions they're already asking.",
  },
  {
    icon: Compass,
    title: "Target accounts, not just clicks",
    detail:
      "Account-based targeting of known registered entities outperforms broad-reach campaigns by a wide margin.",
  },
  {
    icon: Handshake,
    title: "Formalise referrals & partnerships",
    detail:
      "Turn word-of-mouth into a repeatable channel with structured incentives, not an accident you hope repeats.",
  },
  {
    icon: Megaphone,
    title: "Nurture across the full cycle",
    detail:
      "With 11+ stakeholders and multi-month cycles, a single touchpoint never closes the deal — build the sequence for it.",
  },
];

function GrowthRoadmap() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Putting it together"
        title="A growth sequence built for this industry"
        description="Not a generic funnel — the order that actually matches how compliance-driven B2B buyers research and decide."
      />
      <div className="relative">
        <div className="absolute left-0 right-0 top-[38px] hidden h-[3px] overflow-hidden rounded-full bg-border md:block">
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
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-5 md:gap-4">
          {roadmapSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="relative z-10 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border-2 border-brandGreen bg-brandGreen/10 bg-background text-brandGreen">
                  <Icon className="h-7 w-7" />
                  <span className="absolute -top-2 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-background">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
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
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 9. FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "Should a recycling or EPR business even bother with SEO given how niche the audience is?",
    a: "Yes — organic, SEO-driven leads run 30–45% cheaper than paid channels across most industries, and compliance-driven buyers do extensive research before ever contacting a vendor. A niche audience with real search intent is exactly where SEO performs best, not worst.",
  },
  {
    q: "Why do referrals matter more here than in most B2B categories?",
    a: "Referral leads convert at roughly 26%, well above cold outreach. In an industry where plant managers, compliance officers, and PROs all talk to each other, a structured referral program compounds in a way paid channels don't.",
  },
  {
    q: "How long should we expect a lead to take before it closes?",
    a: "For deals over $50K, expect an average buying committee of around 11 stakeholders and a cycle running 121 days at the mid-market end, stretching well past 200 days for enterprise accounts. Plan your nurture sequence and cash flow around that reality, not a 30-day SaaS-style assumption.",
  },
  {
    q: "Where should a limited marketing budget go first?",
    a: "Content and SEO tend to deliver the strongest return per rupee for this kind of business, given the long research phase compliance-driven buyers go through — followed by a formal referral/partner program, before paid channels like LinkedIn ads or trade shows, which carry a meaningfully higher cost per lead.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          eyebrow="Common questions"
          title="Before you reach out"
        />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-xl border border-border bg-card"
              >
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
          Full growth &amp; lead generation deep-dive coming soon
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
          We're finalizing channel-by-channel playbooks, referral program
          templates, and account-targeting lists built specifically for
          recyclers and EPR businesses. Teams that need guidance now don't have
          to wait for the full guide — talk to our team today.
        </p>
        <div className="relative mt-8 flex justify-center">
          <a
            href="#contact"
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

export default function GrowthLeadGenGuide() {
  return (
    <main className="bg-background pt-24 md:pt-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-0 lg:grid-cols-[1fr_340px] lg:gap-6 lg:px-6">
        {/* Main content column */}
        <div className="min-w-0">
          <Seo
            title="Business Growth & Lead Generation: Market Analysis & Business Opportunity"
            description="Discover how market analysis helps identify profitable business opportunities, generate qualified leads, understand customer demand, and drive sustainable business growth with data-driven strategies."
            keywords={[
              "Business Growth",
              "Lead Generation",
              "Market Analysis",
              "Business Opportunity",
              "Business Strategy",
              "Market Research",
              "Competitive Analysis",
              "Customer Insights",
              "Business Development",
              "Revenue Growth",
              "Sales Growth",
              "Target Market Analysis",
              "Business Expansion",
              "Market Trends",
              "Customer Acquisition",
              "How to identify business opportunities?",
              "Why is market analysis important?",
              "How to generate qualified leads?",
              "How to grow a business with market research?",
              "How to find profitable market opportunities?",
              "How to understand customer demand?",
              "How to increase business revenue?",
              "How to attract more customers?",
              "How to outperform competitors?",
              "Best market analysis strategies for business growth",
            ]}
            url="https://eprnexuss.com/blog/business-growth-analysis"
            type="article"
          />
          <Hero />
          <MarketOpportunityChart />
          <AddressableMarket />
          <WhyDifferent />
          <ChannelPerformance />
          <SalesCycleReality />
          <WhatConverts />
          <GrowthRoadmap />
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
