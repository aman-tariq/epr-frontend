"use client";

/**
 * Sell Batteries: Machinery, Setup & Operations Guide
 * -----------------------------------------------------
 * Single-file blog page built for a producer/recycler/PRO audience.
 * Ten content sections + a persistent sticky contact form.
 *
 * Uses the project's existing design tokens (primary / secondary / brandGreen,
 * hsl(var(--...)) system) so it drops into the existing Tailwind theme as-is.
 *
 * Requires: framer-motion, recharts, lucide-react (all standard deps —
 * install with `npm i framer-motion recharts lucide-react` if not already present).
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
  BatteryCharging,
  ShieldCheck,
  Flame,
  Filter,
  Wind,
  Recycle,
  Truck,
  Hammer,
  Waves,
  FlaskConical,
  PackageCheck,
  FileCheck2,
  ClipboardList,
  AlertTriangle,
  ChevronDown,
  Factory,
  Scale,
  Droplets,
  Zap,
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
      label: "US lead-battery recycling rate",
      value: "99%",
      source: "Battery Council Intl.",
    },
    {
      label: "Lead-acid scrap market, 2024",
      value: "$16.5B",
      source: "ResearchAndMarkets",
    },
    {
      label: "Recycled content in new batteries",
      value: "80%+",
      source: "BCI / US EPA",
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
          <Eyebrow>Machinery · Setup · Operations</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Sell Batteries: the machinery, setup &amp; operations guide
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A practical, step-by-step walkthrough of the equipment, licenses,
            and plant economics behind selling battery scrap — built for
            producers, recyclers, and PROs navigating India's Battery Waste
            Management Rules, 2022.
          </p>
         
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pipeline"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              See the recycling process
            </a>
            <a
              href="#compliance"
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Check licensing requirements
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
/* 2. Market momentum (charts)                                          */
/* ------------------------------------------------------------------ */

// Interpolated from two published anchor points using the reported CAGR —
// not invented figures. Lead-acid: $16.52B (2024) -> $29.60B (2030) @ 10.21% CAGR
// (ResearchAndMarkets, Dec 2025). Li-ion: $5.8B (2025) -> $37.5B (2035) @ 20.6%
// CAGR (Global Market Insights, Feb 2026).
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
      value: Math.round(baseValue * Math.pow(1 + cagr, i) * 10) / 10,
    });
  }
  return out;
}

const leadAcidSeries = buildSeries(2024, 16.5, 0.1021, 6); // -> 2030
const lithiumSeries = buildSeries(2025, 5.8, 0.206, 10); // -> 2035

function MarketMomentum() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Market snapshot"
        title="Two very different scrap streams, both scaling fast"
        description="Lead-acid is a mature, near-fully-recycled stream. Lithium-ion is the opposite — early-stage and compounding quickly as EV and electronics waste ages into the system."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-1 flex items-center gap-2">
            <Scale className="h-4 w-4 text-brandGreen" />
            <h3 className="font-display text-lg font-semibold text-foreground">
              Lead-acid battery scrap market
            </h3>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            $16.5B (2024) → $29.6B by 2030, a 10.21% CAGR
          </p>
          <div className="h-56 w-full">
            <ResponsiveContainer>
              <BarChart data={leadAcidSeries} margin={{ left: -18 }}>
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
                <Bar dataKey="value" fill="#5AC361" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Source: ResearchAndMarkets, "Lead-Acid Battery Scrap Market," Dec
            2025. Trajectory interpolated from published 2024/2030 figures at
            the reported CAGR.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-1 flex items-center gap-2">
            <Zap className="h-4 w-4 text-secondary-foreground" />
            <h3 className="font-display text-lg font-semibold text-foreground">
              Lithium-ion battery recycling market
            </h3>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            $5.8B (2025) → $37.5B by 2035, a 20.6% CAGR
          </p>
          <div className="h-56 w-full">
            <ResponsiveContainer>
              <BarChart data={lithiumSeries} margin={{ left: -18 }}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis
                  dataKey="year"
                  tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                  axisLine={false}
                  tickLine={false}
                  interval={1}
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
            Source: Global Market Insights, "Lithium-ion Battery Recycling
            Market," Feb 2026. Trajectory interpolated from published 2025/2035
            figures at the reported CAGR.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Process pipeline (signature element)                             */
/* ------------------------------------------------------------------ */

const pipelineSteps = [
  {
    icon: Truck,
    title: "Collection",
    detail:
      "Spent batteries arrive from retailers, fleets, and EPR collection points — India's lead-acid network runs on 300,000+ registered retail drop points.",
  },
  {
    icon: Hammer,
    title: "Breaking & crushing",
    detail:
      "An enclosed hammer-mill battery breaker crushes units into fragments, feeding everything downstream to a wet, dust-suppressed separation line.",
  },
  {
    icon: Waves,
    title: "Sink-float separation",
    detail:
      "Heavy lead paste and grids sink; lighter PP casing and ebonite float — a closed-loop wet system that keeps lead dust out of the air.",
  },
  {
    icon: Flame,
    title: "Smelting",
    detail:
      "Paste and grids are screw-fed into a rotary furnace. Refractory linings typically run 6–8 months before relining is required.",
  },
  {
    icon: FlaskConical,
    title: "Refining & alloying",
    detail:
      "Molten lead is refined and alloyed to spec — battery-grade lead typically comes out at 99.97%+ purity.",
  },
  {
    icon: PackageCheck,
    title: "Casting",
    detail:
      "Automated casting with weight feedback produces ingots ready for sale back into new battery manufacturing.",
  },
];

function ProcessPipeline() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="pipeline"
      className="border-y border-border bg-muted/30 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="The physical process"
          title="From scrap battery to refined ingot"
          description="This is a genuine production sequence, not a marketing device — each stage feeds the next, and skipping one isn't an option."
        />

        <div className="relative">
          {/* connecting flow line - desktop */}
          <div className="absolute left-0 right-0 top-[38px] hidden h-[3px] overflow-hidden rounded-full bg-border md:block">
            <motion.div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #5AC361 15%, #E8935A 50%, #5AC361 85%, transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={
                reduceMotion ? {} : { backgroundPositionX: ["0%", "200%"] }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-6 md:gap-4">
            {pipelineSteps.map((step, i) => {
              const Icon = step.icon;
              const isFurnace = step.title === "Smelting";
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative flex flex-col items-center text-center md:items-start md:text-left"
                >
                  <div
                    className={`relative z-10 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border-2 ${
                      isFurnace
                        ? "border-[#E8935A] bg-[#E8935A]/10 text-[#E8935A]"
                        : "border-brandGreen bg-brandGreen/10 text-brandGreen"
                    } bg-background`}
                  >
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
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Machinery showcase                                                */
/* ------------------------------------------------------------------ */

const machinery = [
  {
    icon: Hammer,
    name: "Battery breaker / hammer mill",
    spec: "Modular throughput: 5, 10, 20 t/h configurations",
    detail:
      "Enclosed crusher that fragments incoming batteries before separation — the entry point for every downstream stage.",
  },
  {
    icon: Waves,
    name: "Hydro-separator (sink-float)",
    spec: "Wet, closed-loop process",
    detail:
      "Separates heavy lead paste/grids from lighter polypropylene casing and ebonite rubber without generating airborne dust.",
  },
  {
    icon: Flame,
    name: "Rotary furnace",
    spec: "Refractory life: 6–8 months continuous",
    detail:
      "Screw-fed smelting unit that converts crushed paste and grids into molten lead for refining.",
  },
  {
    icon: Filter,
    name: "Baghouse filter",
    spec: ">99.9% particulate capture",
    detail:
      "Captures lead dust from crushing and furnace off-gas — the primary line of defense for CPCB's PM standard (<10 mg/Nm³).",
  },
  {
    icon: Wind,
    name: "Wet scrubber",
    spec: "SO₂ removal",
    detail:
      "Strips sulfur dioxide generated during battery breaking and smelting before exhaust leaves the stack.",
  },
  {
    icon: PackageCheck,
    name: "Continuous caster",
    spec: "Weight-feedback controlled",
    detail:
      "Casts refined molten lead into ingots sized and weighted to buyer specification, ready for dispatch.",
  },
];

function MachineryShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Equipment"
        title="The core machinery line"
        description="A fully mechanised lead-acid line, breaker to caster. Configuration scales with your target tonnage — not every plant needs every option below at full capacity."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {machinery.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="group rounded-2xl border border-border bg-card p-5 transition hover:border-brandGreen/50 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-brandGreen/15 group-hover:text-brandGreen">
                <Icon className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {m.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brandGreen">
                {m.spec}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {m.detail}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Battery type comparison                                           */
/* ------------------------------------------------------------------ */

function BatteryTypeComparison() {
  const rows = [
    {
      label: "Typical India scrap rate",
      lead: "₹75–85/kg (dry battery scrap)",
      lithium:
        "₹50–300/kg — varies sharply by chemistry (NMC/LFP/LCO) and cell health",
    },
    {
      label: "Recovery products",
      lead: "Refined lead ingots, lead alloys, lead oxide, PP granules",
      lithium:
        "Black mass, copper, aluminum → lithium, cobalt, nickel, manganese via hydromet",
    },
    {
      label: "Recovery rate",
      lead: "95%+ of the battery is recyclable",
      lithium:
        "Highly variable by chemistry and process; still maturing at scale",
    },
    {
      label: "Who can legally process it",
      lead: "CPCB/SPCB-authorised recyclers under Hazardous Waste Rules, 2016",
      lithium:
        "Only CPCB-authorised Li-ion recyclers (e.g. Lohum, Attero, BatX, Recyclekaro)",
    },
    {
      label: "Primary hazard",
      lead: "Lead dust and sulfuric acid exposure",
      lithium:
        "Thermal runaway / fire — damaged or swollen cells are a serious risk",
    },
  ];

  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Know your stream"
          title="Lead-acid vs. lithium-ion scrap"
          description="Two entirely different businesses under one roof of 'battery recycling' — treat them as such."
        />
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-5 py-4 font-display font-semibold text-foreground">
                  Factor
                </th>
                <th className="px-5 py-4 font-display font-semibold text-foreground">
                  Lead-acid
                </th>
                <th className="px-5 py-4 font-display font-semibold text-foreground">
                  Lithium-ion
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
                    {r.lead}
                  </td>
                  <td className="px-5 py-4 align-top text-muted-foreground">
                    {r.lithium}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Indicative pricing compiled from Indian scrap-rate listings and trade
          marketplaces, mid-2026; actual rates depend on grade, quantity,
          chemistry, and pickup location.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Licensing & compliance checklist                                 */
/* ------------------------------------------------------------------ */

const licenses = [
  {
    icon: FileCheck2,
    name: "Consent to Establish (CTE)",
    detail:
      "Issued by the SPCB before construction begins, based on your proposed layout and pollution control design.",
  },
  {
    icon: FileCheck2,
    name: "Consent to Operate (CTO)",
    detail:
      "Issued after construction, once pollution control equipment is verified as installed and functional.",
  },
  {
    icon: ShieldCheck,
    name: "Hazardous Waste Authorisation",
    detail:
      "Required under the Hazardous and Other Wastes Rules, 2016, for handling used batteries at all.",
  },
  {
    icon: ClipboardList,
    name: "CPCB BWMR recycler registration",
    detail:
      "Registration on the CPCB EPR portal under the Battery Waste Management Rules, 2022 — this is what lets you issue EPR certificates to producers.",
  },
  {
    icon: Factory,
    name: "Factory license",
    detail:
      "Confirms the site meets industrial safety standards for crushing, smelting, and chemical handling.",
  },
  {
    icon: AlertTriangle,
    name: "Fire NOC",
    detail:
      "Especially strict for lithium-ion — reviewers check for fire-rated partitions and ventilation around cell storage.",
  },
];

function ComplianceChecklist() {
  return (
    <section id="compliance" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Before you run a single batch"
        title="The licensing stack"
        description="Under BWMR 2022, producers must route end-of-life batteries through authorised recyclers — which makes this paperwork the gate to a guaranteed scrap supply, not just a compliance cost."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {licenses.map((l) => {
          const Icon = l.icon;
          return (
            <div
              key={l.name}
              className="flex gap-3 rounded-xl border border-border bg-card p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brandGreen/10 text-brandGreen">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">
                  {l.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {l.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Plant scale snapshot                                              */
/* ------------------------------------------------------------------ */

const scales = [
  {
    tier: "5 TPD",
    label: "Regional collection & pre-processing",
    detail:
      "Entry point for most independent recyclers — battery breaking and initial separation, feeding output to a larger smelter.",
  },
  {
    tier: "10–20 TPD",
    label: "Integrated mid-scale smelter",
    detail:
      "Full breaker-to-caster line on site, typically the first tier where in-house refining becomes cost-effective.",
  },
  {
    tier: "50–100+ TPD",
    label: "Large-scale automated smelter",
    detail:
      "PLC-automated lines, minimal manual handling, and CPCB-grade pollution control built in from the start.",
  },
];

function PlantScale() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Sizing the operation"
          title="What scale actually looks like"
          description="Indian lead-acid recyclers range from 5 TPD regional centers to 100+ TPD smelters — the right tier depends on your feedstock supply, not your ambition."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {scales.map((s) => (
            <div
              key={s.tier}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="font-display text-3xl font-bold text-brandGreen">
                {s.tier}
              </div>
              <div className="mt-2 font-display text-sm font-semibold text-foreground">
                {s.label}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8. Why compliance matters (trust section)                           */
/* ------------------------------------------------------------------ */

function WhyItMatters() {
  const points = [
    {
      icon: Droplets,
      stat: "615×",
      copy: "Effluent from some unlicensed, unregistered recycling units has been found to contain up to 615 times the permissible lead level for water discharge in India.",
    },
    {
      icon: Recycle,
      stat: "99%",
      copy: "The formally regulated US lead-battery industry sustains a 99% recycling rate — the highest of any consumer product — proving the ceiling is achievable at scale.",
    },
    {
      icon: BatteryCharging,
      stat: "80%+",
      copy: "New lead-acid batteries are already built from 80%+ recycled material, so every properly processed tonne feeds straight back into fresh production.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Why the paperwork is the point"
        title="Compliance is the difference between the two industries"
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
/* 9. FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "What actually generates revenue for a licensed recycler?",
    a: "Two streams: selling refined output (lead ingots, alloys, black mass, recovered metals) and issuing EPR certificates to battery producers through the CPCB portal once you're registered under BWMR 2022.",
  },
  {
    q: "Can one facility handle both lead-acid and lithium-ion scrap?",
    a: "Legally and practically, treat them as separate operations. Lithium-ion requires its own hazardous waste authorisation, fire-rated storage, and — in most cases — a dedicated CPCB-authorised recycler license distinct from a lead-acid smelter registration.",
  },
  {
    q: "Can I import used batteries as feedstock?",
    a: "Only registered recyclers can import scrap batteries into India, and only with specific approval from the Ministry of Environment, Forest and Climate Change and DGFT. Most Indian operations still rely primarily on domestic scrap supply.",
  },
  {
    q: "Is there a minimum recovery rate I have to hit?",
    a: "Yes — recyclers registered under BWMR 2022 must meet minimum material recovery thresholds set by CPCB, and EPR certificates are only issued against verified recycled/refurbished quantities.",
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
          Need guidance now?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
          Detailed specs, plant layouts, and cost breakdowns.
          Producers, recyclers, and PROs who need guidance now don't have to
          wait for the full guide — talk to our team today.
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

export default function SellBatteriesGuide() {
  return (
    <main className="bg-background pt-24 md:pt-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-0 lg:grid-cols-[1fr_340px] lg:gap-6 lg:px-6">
        {/* Main content column */}
        <Seo
          title="Sell Batteries: Machinery, Setup & Operations Guide"
          description="A practical guide to machinery, facility setup, and operations for selling battery scrap. Learn about equipment, workflows, compliance requirements, and best practices for producers, recyclers, and PROs."
          keywords={[
            "Sell Batteries",
            "Battery Scrap Machinery",
            "Battery Recycling Equipment",
            "Battery Business Setup",
            "Battery Scrap Operations",
            "Battery Recycling Plant",
            "Battery Collection Center",
            "Battery Waste Management",
            "Battery Processing Equipment",
            "Lead Acid Battery Recycling",
            "Lithium Ion Battery Recycling",
            "Battery Sorting Machinery",
            "Battery Business India",
            "Battery Recycling Infrastructure",
            "Battery Compliance",
            "What machinery is required for a battery recycling business?",
            "How to set up a battery scrap business?",
            "How to start a battery recycling business in India?",
            "Best machinery for battery recycling",
            "Battery recycling plant setup guide",
            "How to manage battery scrap operations?",
            "Battery recycling equipment cost",
            "Battery business operations guide",
            "Battery waste management compliance",
            "Battery recycling setup checklist",
          ]}
          url="https://eprnexuss.com/blog/sell-batteries-machinery"
          type="article"
        />
        <div className="min-w-0">
          <Hero />
          <MarketMomentum />
          <ProcessPipeline />
          <MachineryShowcase />
          <BatteryTypeComparison />
          <ComplianceChecklist />
          <PlantScale />
          <WhyItMatters />
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
