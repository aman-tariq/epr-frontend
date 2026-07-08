"use client";

/**
 * Buy & Sell Metals: Market Analysis & Business Opportunity
 * -----------------------------------------------------------
 * Single-file blog page for a producer/recycler/PRO audience evaluating
 * the metal scrap business (ferrous + non-ferrous) in India.
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
import { motion } from "framer-motion";
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
  Factory,
  MapPin,
  Leaf,
  Zap,
  Gauge,
  ChevronDown,
  Building2,
  Layers,
  Ship,
  Warehouse,
  Recycle,
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
      label: "India metal recycling market, 2024",
      value: "$11.4B",
      source: "IMARC Group",
    },
    {
      label: "Metal scrap generated in India, yearly",
      value: "~25M t",
      source: "Industry estimates",
    },
    {
      label: "Share actually recycled today",
      value: "~30%",
      source: "Industry commentary",
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
          <Eyebrow>Market Analysis · Business Opportunity</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Buy &amp; sell metals: the market analysis &amp; opportunity guide
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A practical look at where India's ferrous and non-ferrous scrap
            market actually stands today — pricing, regional hubs, and the gap
            between how much scrap gets generated and how much gets formally
            recycled.
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
              href="#prices"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              Check current scrap rates
            </a>
            <a
              href="#opportunity"
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              See the opportunity gap
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
              <div className="font-display text-3xl font-bold text-brandGreen">
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
/* 2. Market size chart                                                 */
/* ------------------------------------------------------------------ */

// Interpolated from published anchor points at the reported CAGR, not
// invented: India metal recycling market $11.40B (2024) -> $18.87B (2033)
// at a 5.32% CAGR (IMARC Group, market outlook report).
function buildSeries(
  baseYear: number,
  baseValue: number,
  cagr: number,
  years: number,
  step: number,
) {
  const out = [];
  for (let i = 0; i <= years; i += step) {
    out.push({
      year: String(baseYear + i),
      value: Math.round(baseValue * Math.pow(1 + cagr, i) * 10) / 10,
    });
  }
  return out;
}

const marketSeries = buildSeries(2024, 11.4, 0.0532, 9, 2); // -> 2033

function MarketSizeChart() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="The market in numbers"
        title="A steadily compounding, still-underpenetrated market"
        description="India's metal recycling market is growing at a mid-single-digit clip — modest next to the raw volume of scrap the country generates and doesn't yet capture."
      />
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="mb-1 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-brandGreen" />
          <h3 className="font-display text-lg font-semibold text-foreground">
            India metal recycling market size
          </h3>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          $11.4B (2024) → $18.87B by 2033, a 5.32% CAGR
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
          Source: IMARC Group, "India Metal Recycling Market," 2025 report.
          Trajectory interpolated from published 2024/2033 figures at the
          reported CAGR. Steel accounted for 81.49% of segment revenue in 2024.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Price ticker (signature element)                                 */
/* ------------------------------------------------------------------ */

const tickerItems = [
  {
    metal: "Aluminum — clean extrusion/sheet",
    range: "₹110–140/kg",
    tone: "up",
  },
  { metal: "Aluminum — mixed/cast", range: "₹80–105/kg", tone: "flat" },
  { metal: "Copper scrap", range: "LME-linked, premium grade", tone: "up" },
  { metal: "Steel/HMS scrap", range: "Mill-demand driven", tone: "flat" },
  { metal: "Brass scrap", range: "LME-linked, non-ferrous basket", tone: "up" },
];

function PriceTicker() {
  const looped = [...tickerItems, ...tickerItems];

  return (
    <section
      id="prices"
      className="border-y border-border bg-muted/30 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="What's moving today"
          title="Scrap rates move differently by metal"
          description="Non-ferrous scrap tracks the LME and the rupee day to day. Ferrous scrap moves on domestic mill demand — slower, but with sharper swings around infrastructure cycles."
        />

        <div className="relative overflow-hidden rounded-2xl border border-border bg-card py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent" />

          <motion.div
            className="flex w-max gap-4 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {looped.map((item, i) => (
              <div
                key={`${item.metal}-${i}`}
                className="flex min-w-[260px] items-center justify-between gap-4 rounded-xl border border-border bg-muted/40 px-5 py-4"
              >
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {item.metal}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {item.range}
                  </div>
                </div>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    item.tone === "up"
                      ? "bg-brandGreen/15 text-brandGreen"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <TrendingUp className="h-4 w-4" />
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Indicative ranges compiled from Indian scrap-rate reporting, early
          2026. Confirm live rates with a verified buyer before transacting —
          figures shift with LME movement, INR/USD rates, and local mill demand.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Ferrous vs non-ferrous dynamics                                   */
/* ------------------------------------------------------------------ */

function FerrousVsNonFerrous() {
  const rows = [
    {
      label: "Share of India's metal recycling revenue",
      ferrous: "~81% (steel), 2024",
      nonferrous: "Remainder split across copper, aluminum, others",
    },
    {
      label: "Primary price driver",
      ferrous: "Domestic mini-mill and EAF/induction furnace demand",
      nonferrous: "LME benchmark + INR/USD exchange rate",
    },
    {
      label: "Volatility",
      ferrous: "Slower week-to-week, sharper moves over infrastructure cycles",
      nonferrous: "Can shift daily with global metal prices",
    },
    {
      label: "Seasonal pattern",
      ferrous: "Softens June–September as construction slows in monsoon",
      nonferrous: "Less seasonal, more exchange-rate sensitive",
    },
    {
      label: "Structural demand driver",
      ferrous:
        "Rising EAF share of steel production (~30% today, headed toward 40–45% by 2035)",
      nonferrous: "Electrical, EV, and automotive component manufacturing",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Two different rhythms"
        title="Ferrous vs. non-ferrous scrap economics"
        description="Treat pricing strategy for steel scrap and non-ferrous scrap as two separate playbooks — they respond to different signals."
      />
      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-5 py-4 font-display font-semibold text-foreground">
                Factor
              </th>
              <th className="px-5 py-4 font-display font-semibold text-foreground">
                Ferrous (steel/iron)
              </th>
              <th className="px-5 py-4 font-display font-semibold text-foreground">
                Non-ferrous (Cu/Al/brass)
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.label} className={i % 2 ? "bg-muted/20" : ""}>
                <td className="px-5 py-4 align-top font-medium text-foreground">
                  {r.label}
                </td>
                <td className="px-5 py-4 align-top text-muted-foreground">
                  {r.ferrous}
                </td>
                <td className="px-5 py-4 align-top text-muted-foreground">
                  {r.nonferrous}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Source: National Recycling Corporation, "Scrap Metal Rates in India:
        2026 Guide"; IndexBox metal machining scrap equipment market report,
        2026.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Regional hubs                                                     */
/* ------------------------------------------------------------------ */

const hubs = [
  {
    icon: Factory,
    name: "Mandi Gobindgarh, Punjab",
    detail:
      "India's largest secondary steel hub — a highly competitive HMS and steel scrap market with thin spreads and high volume.",
  },
  {
    icon: Ship,
    name: "Alang, Gujarat",
    detail:
      "Home to major ship-breaking yards, making Gujarat a significant market for structural steel scrap alongside general industrial demand.",
  },
  {
    icon: Warehouse,
    name: "NCR & Haryana",
    detail:
      "Dense induction-furnace cluster around Delhi, Faridabad, and Gurgaon, with strong liquidity for ferrous scrap.",
  },
  {
    icon: Building2,
    name: "Maharashtra",
    detail:
      "Mumbai, Pune, and Nagpur see strong demand from automobile ancillaries and engineering units, with competitive non-ferrous rates.",
  },
  {
    icon: MapPin,
    name: "Tamil Nadu & Karnataka",
    detail:
      "Electronics, auto components, and precision engineering drive strong non-ferrous demand — clean copper and stainless command higher rates here.",
  },
];

function RegionalHubs() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Where the volume is"
          title="India's scrap trading clusters"
          description="Location changes your net realisation as much as grade does — proximity to these clusters is a real pricing variable."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hubs.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brandGreen/10 text-brandGreen">
                  <Icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {h.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.detail}
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
/* 6. Why recycled metal wins (business case)                          */
/* ------------------------------------------------------------------ */

function WhyRecycledWins() {
  const points = [
    {
      icon: Zap,
      stat: "75%",
      copy: "Producing steel from recycled scrap uses roughly 75% less energy than starting from virgin iron ore — a direct cost advantage passed through the whole chain.",
    },
    {
      icon: Leaf,
      stat: "59% / 76% / 86%",
      copy: "Ferrous metal reuse can cut emissions by around 59%, water pollution by 76%, and air pollution by 86% relative to primary production, per FICCI research.",
    },
    {
      icon: Gauge,
      stat: "72%",
      copy: "In the US, roughly 72% of steel production now comes from scrap steel — a preview of where scrap-intensive production is headed as EAF capacity scales in India too.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="The economics behind the pitch"
        title="Why recycled metal keeps winning on cost"
      />
      <div className="grid gap-5 md:grid-cols-3">
        {points.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.stat}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <Icon className="h-6 w-6 text-brandGreen" />
              <div className="mt-4 font-display text-3xl font-bold text-foreground">
                {p.stat}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.copy}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7. The opportunity gap                                               */
/* ------------------------------------------------------------------ */

const gapData = [
  { label: "Generated annually", value: 25 },
  { label: "Formally recycled today", value: 7.5 },
  { label: "Ferrous scrap demand by 2030", value: 16 },
];

function OpportunityGap() {
  return (
    <section
      id="opportunity"
      className="border-y border-border bg-muted/30 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Where the headroom is"
          title="The gap between scrap generated and scrap recycled"
          description="India generates roughly 25 million tonnes of metal scrap a year, yet industry commentary puts the formally recycled share at only around 30% — well below global benchmarks. The Steel Scrap Recycling Policy, 2019, targets an 80% recycling rate by 2030."
        />
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-1 flex items-center gap-2">
            <Recycle className="h-4 w-4 text-brandGreen" />
            <h3 className="font-display text-lg font-semibold text-foreground">
              Annual metal scrap volumes, India (million tonnes)
            </h3>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer>
              <BarChart data={gapData} margin={{ left: -18 }}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis
                  dataKey="label"
                  tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                  axisLine={false}
                  tickLine={false}
                  unit="Mt"
                />
                <Tooltip
                  formatter={(v: number) => [`${v}M t`, "Volume"]}
                  contentStyle={{
                    background: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="value" fill="#5AC361" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Sources: industry estimates on annual scrap generation and recycling
            share (Scrapcart, BW Businessworld); National Steel Policy, 2017,
            ferrous scrap demand projection to 2030. The 7.5M t "recycled today"
            bar is derived by applying the commonly cited ~30% recycling share
            to the ~25M t generation estimate.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8. Industry movers                                                   */
/* ------------------------------------------------------------------ */

const movers = [
  {
    icon: Building2,
    name: "Tata Steel",
    detail:
      "Scrap processing facility with 500,000 tonnes/year capacity, plus a new 0.75 million tonnes/year EAF plant in Ludhiana running on 100% scrap-based production.",
  },
  {
    icon: Factory,
    name: "AM/NS India",
    detail:
      "Commissioned a 120,000 TPA scrap processing facility in March 2025 — the first of four planned as part of a ₹3.5 billion investment to expand high-quality domestic scrap supply.",
  },
  {
    icon: Layers,
    name: "Jain Metal Group",
    detail:
      "200,000+ MT annual copper recycling capacity, with advanced cable recycling and metal recovery plants feeding copper, aluminum, and lead alloy output.",
  },
  {
    icon: Percent,
    name: "Gravita India",
    detail:
      "Global operations spanning lead, aluminum, and plastics recycling, with a long-established presence in battery and metal recycling across multiple countries.",
  },
];

function IndustryMovers() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Who's already scaling"
        title="Recent capacity moves worth watching"
        description="Formal-sector investment is accelerating — a useful signal for where competitive pressure (and partnership opportunity) is heading."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {movers.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.name}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5.5 w-5.5" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {m.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {m.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Source: LOHAA industry growth report, 2026; Economic Times / Global
        Recycling reporting on Tata Steel capacity.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 9. FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "Is buying and selling metal scrap taxed differently from other goods in India?",
    a: "Scrap metal trade generally attracts 12% GST, while scrap-processing machinery is taxed at 18% GST (with input tax credit available) — a distinction worth building into your margin calculations from day one.",
  },
  {
    q: "Why does non-ferrous scrap move faster than ferrous scrap?",
    a: "Non-ferrous metals like copper, aluminum, and brass are priced against the London Metal Exchange and shift with the rupee daily. Ferrous scrap responds more to domestic mini-mill and induction-furnace demand cycles, which move on a slower, more seasonal rhythm.",
  },
  {
    q: "Does location really change what I get paid for scrap?",
    a: "Yes — proximity to a major cluster like Mandi Gobindgarh, Alang, or the NCR induction-furnace belt materially affects net realisation. Sellers farther from these hubs typically see lower rates once transport is factored in.",
  },
  {
    q: "What's driving the current wave of capacity investment?",
    a: "Rising EAF (electric arc furnace) steelmaking, which already accounts for roughly 30% of Indian production and is projected to reach 40–45% by 2035, needs a steady supply of high-quality prepared scrap — which is why large players are investing directly in scrap processing capacity now.",
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
          Full market analysis &amp; opportunity deep-dive coming soon
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
          We're finalizing metal-by-metal pricing models, regional sourcing
          maps, and entry-cost breakdowns. Producers, recyclers, and PROs who
          need guidance now don't have to wait for the full guide — talk to our
          team today.
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

export default function BuySellMetalsGuide() {
  return (
    <main className="bg-background pt-24 md:pt-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-0 lg:grid-cols-[1fr_340px] lg:gap-6 lg:px-6">
        {/* Main content column */}
        <Seo
          title="Buy & Sell Metals: Market Analysis & Business Opportunity"
          description="Explore the metal trading industry with in-depth market analysis, business opportunities, pricing trends, demand insights, and profitable strategies for buying and selling metals in India."
          keywords={[
            "Buy and Sell Metals",
            "Metal Trading",
            "Metal Market Analysis",
            "Metal Business Opportunity",
            "Scrap Metal Trading",
            "Ferrous Metals",
            "Non Ferrous Metals",
            "Metal Recycling",
            "Industrial Metals",
            "Metal Scrap Business",
            "Metal Market Trends",
            "Metal Prices",
            "Recycling Industry",
            "Circular Economy",
            "Commodity Trading",
            "How to start a metal trading business?",
            "Is the metal trading business profitable?",
            "How to buy and sell scrap metals?",
            "Where to buy industrial metals in India?",
            "How to identify profitable metal markets?",
            "Metal trading business opportunities in India",
            "How to earn from metal recycling?",
            "Best metals to trade for profit",
            "Metal market trends 2026",
            "How to grow a metal trading business?",
          ]}
          url="https://eprnexuss.com/blog/buy-sell-metals-analysis"
          type="article"
        />
        <div className="min-w-0">
          <Hero />
          <MarketSizeChart />
          <PriceTicker />
          <FerrousVsNonFerrous />
          <RegionalHubs />
          <WhyRecycledWins />
          <OpportunityGap />
          <IndustryMovers />
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
