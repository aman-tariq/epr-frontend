"use client";

/**
 * Buy & Sell Metals: Machinery, Setup & Operations Guide
 * -----------------------------------------------------------
 * Single-file blog page for a producer/recycler/PRO audience setting up
 * ferrous + non-ferrous metal scrap processing operations.
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
  Truck,
  Scissors,
  Magnet,
  Waves,
  PackageCheck,
  Scale,
  ChevronDown,
  Flame,
  ShieldAlert,
  Gauge,
  Wind,
  ScanEye,
  Factory,
  Boxes,
  Layers,
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
      label: "Full shredder + separation line",
      value: "Up to $2M+",
      source: "Energycle shredder guide",
    },
    {
      label: "Ferrous recovery via magnetic drum",
      value: ">98%",
      source: "Industry equipment specs",
    },
    {
      label: "Non-ferrous value added by eddy current sort",
      value: "$50–100/t",
      source: "Energycle shredder guide",
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
            Buy &amp; sell metals: the machinery, setup &amp; operations guide
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The equipment line, sizing decisions, and operational risks behind a
            working ferrous and non-ferrous metal scrap processing business —
            from first sort to furnace-ready bale.
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
              href="#pipeline"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              See the processing line
            </a>
            <a
              href="#sizing"
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Find your setup tier
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
/* 2. Process pipeline (signature element)                             */
/* ------------------------------------------------------------------ */

const pipelineSteps = [
  {
    icon: Truck,
    title: "Sourcing & sorting",
    detail:
      "Scrap arrives from yards, industrial units, and dismantlers, then gets a manual/magnetic pre-sort before it touches any machine.",
  },
  {
    icon: Scissors,
    title: "Shredding",
    detail:
      "A single- or double-shaft shredder reduces bulky scrap — car bodies, extrusions, drums — into fist-sized fragments.",
  },
  {
    icon: Magnet,
    title: "Magnetic separation",
    detail:
      "A magnetic drum pulls ferrous fragments from the shredded stream, typically recovering over 98% of the steel and iron content.",
  },
  {
    icon: Waves,
    title: "Eddy current separation",
    detail:
      "Alternating magnetic fields eject non-ferrous metals — aluminium, copper, brass, zinc — from what's left on the line.",
  },
  {
    icon: PackageCheck,
    title: "Baling / shearing",
    detail:
      "A hydraulic baler or shear compresses and cuts material into dense, furnace-ready charges sized for the buyer's mill.",
  },
  {
    icon: Scale,
    title: "Weighing & dispatch",
    detail:
      "Certified weighbridge measurement closes the loop before bales or sheared scrap leave for the smelter or mill.",
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
          title="From loose scrap to furnace-ready charge"
          description="Six stages, each one determining the grade — and price — of what reaches the next buyer."
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

          <div className="grid gap-8 md:grid-cols-6 md:gap-4">
            {pipelineSteps.map((step, i) => {
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
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Machinery showcase                                                */
/* ------------------------------------------------------------------ */

const machinery = [
  {
    icon: Scissors,
    name: "Single/double-shaft shredder",
    spec: "Cutting forces from 30 to 200+ tonnes",
    detail:
      "The core investment that sets throughput and fragment quality. Single-shaft suits controlled output on lighter, mixed scrap; double-shaft handles bulkier, tougher feedstock.",
  },
  {
    icon: Magnet,
    name: "Magnetic drum separator",
    spec: ">98% ferrous recovery",
    detail:
      "Pulls steel and iron fragments from the shredded stream immediately after primary size reduction.",
  },
  {
    icon: Waves,
    name: "Eddy current separator (ECS)",
    spec: "Adds $50–100/t in recovered value",
    detail:
      "Ejects aluminium, copper, brass, and zinc from the remaining stream using alternating magnetic fields — essential for any mixed-scrap operation.",
  },
  {
    icon: Wind,
    name: "Air classifier / density separator",
    spec: "Removes light non-metallics",
    detail:
      "Strips foam, fabric, and paper fractions from the metal stream using controlled air flow, cleaning up the final product grade.",
  },
  {
    icon: ScanEye,
    name: "Optical / XRF sorter",
    spec: "Alloy-grade precision",
    detail:
      "For high-purity applications, sensor-based sorting separates aluminium by alloy or isolates copper from brass — a premium-grade upgrade, not a baseline requirement.",
  },
  {
    icon: PackageCheck,
    name: "Baler shear",
    spec: "PLC-controlled, furnace-ready output",
    detail:
      "Combines compression and cutting in one hydraulic unit, turning light scrap and vehicle shells into dense, transport-efficient bales.",
  },
];

function MachineryShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Equipment"
        title="The core machinery line"
        description="Not every operation needs every machine at full scale — the right combination depends on your feedstock mix and target grade."
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
/* 4. Investment tiers chart                                            */
/* ------------------------------------------------------------------ */

const investmentTiers = [
  { tier: "Baler/shear only, no shredding", cost: 60 },
  { tier: "Single-shaft shredder, 5–10 t/h", cost: 80 },
  { tier: "Double-shaft + magnetic separation", cost: 275 },
  { tier: "Full hammer-mill line + full separation", cost: 2000 },
];

function InvestmentChart() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="What each tier actually costs"
          title="Equipment investment scales in steps, not gradually"
          description="Most mid-size operations land in the double-shaft-plus-magnetic-separation tier — the full hammer-mill line is a different business entirely."
        />
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-1 flex items-center gap-2">
            <Factory className="h-4 w-4 text-brandGreen" />
            <h3 className="font-display text-lg font-semibold text-foreground">
              Indicative equipment investment (USD, thousands)
            </h3>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer>
              <BarChart
                data={investmentTiers}
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
                  unit="K"
                />
                <YAxis
                  type="category"
                  dataKey="tier"
                  width={210}
                  tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(v: number) => [`$${v}K+`, "Investment"]}
                  contentStyle={{
                    background: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Bar
                  dataKey="cost"
                  fill="hsl(var(--primary))"
                  radius={[0, 6, 6, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Source: Energycle, "Industrial Metal Scrap Shredder: Types, Sizing &
            Selection Guide," 2026. Figures are indicative equipment costs only
            — installation, site prep, and pollution-control add-ons are
            separate.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Shredder type comparison                                          */
/* ------------------------------------------------------------------ */

function ShredderComparison() {
  const rows = [
    {
      label: "Best suited for",
      single:
        "Aluminium, copper, lighter ferrous scrap, sheet metal, turnings, e-waste components",
      double:
        "Bulkier, tougher feedstock — car bodies, structural steel, engine components",
    },
    {
      label: "Output control",
      single: "Screen beneath the rotor controls final fragment size precisely",
      double:
        "Focused on primary tearing and volume reduction, often paired with secondary size reduction",
    },
    {
      label: "Mechanism",
      single: "Rotor, screen, and hydraulic pusher for uniform output",
      double:
        "Low-speed, high-torque shear tearing across two counter-rotating shafts",
    },
    {
      label: "Typical entry cost",
      single: "From roughly $80,000 for 5–10 t/h on light scrap",
      double:
        "$150,000–$400,000 for a mid-size line with magnetic separation included",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Pick the right primary machine"
        title="Single-shaft vs. double-shaft shredders"
        description="This is the first sizing decision — get the feedstock match wrong and every downstream stage underperforms."
      />
      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-5 py-4 font-display font-semibold text-foreground">
                Factor
              </th>
              <th className="px-5 py-4 font-display font-semibold text-foreground">
                Single-shaft
              </th>
              <th className="px-5 py-4 font-display font-semibold text-foreground">
                Double-shaft
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
                  {r.single}
                </td>
                <td className="px-5 py-4 align-top text-muted-foreground">
                  {r.double}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Source: Energycle industrial metal shredder guides, 2026.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Fire & safety risk                                                */
/* ------------------------------------------------------------------ */

function SafetyRisk() {
  const risks = [
    {
      icon: Flame,
      title: "Sealed containers",
      copy: "Aerosol cans, gas cylinders, and other sealed vessels can rupture or ignite under shredding force if they aren't screened out during pre-sort.",
    },
    {
      icon: ShieldAlert,
      title: "Lithium-ion batteries in mixed scrap",
      copy: "Batteries riding along in e-scrap or appliance scrap are a well-documented cause of shredder-line fires — dedicated screening before the shredder matters as much as the machine itself.",
    },
    {
      icon: Layers,
      title: "Volatile organic residues",
      copy: "Oils, fuels, and coatings left on incoming scrap introduce fire risk at the shredding and baling stages, particularly with automotive and drum scrap.",
    },
  ];

  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="What actually goes wrong on site"
          title="The real operational risks in metal shredding"
          description="These are documented, recurring causes of shredder-line incidents — not hypothetical edge cases."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {risks.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <Icon className="h-6 w-6 text-brandGreen" />
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {r.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Sizing your setup                                                 */
/* ------------------------------------------------------------------ */

const sizingTiers = [
  {
    icon: Boxes,
    tier: "Trading only",
    detail:
      "No shredding on site — a baler/shear alone handles compaction for transport. Lowest capital outlay, fastest to operate.",
  },
  {
    icon: Scissors,
    tier: "Light processing",
    detail:
      "Single-shaft shredder at 5–10 t/h for lighter, mixed ferrous and non-ferrous scrap, with basic magnetic separation.",
  },
  {
    icon: Magnet,
    tier: "Mid-scale recycler",
    detail:
      "Double-shaft shredder plus magnetic drum and eddy current separation — the tier most established regional recyclers operate at.",
  },
  {
    icon: Gauge,
    tier: "Large integrated line",
    detail:
      "Full hammer-mill shredder with pre-shredder, complete separation train, and dust extraction — built for continuous, high-tonnage throughput.",
  },
];

function SizingSetup() {
  return (
    <section id="sizing" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Match your scale"
        title="Which tier fits your operation"
        description="Sizing based on your largest single item to process — not your average throughput — is the rule equipment manufacturers repeat most often."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {sizingTiers.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.tier}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brandGreen/10 text-brandGreen">
                <Icon className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold text-foreground">
                {s.tier}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8. Site & layout essentials                                          */
/* ------------------------------------------------------------------ */

const siteEssentials = [
  {
    icon: Scale,
    name: "Certified weighbridge",
    detail:
      "Every inbound and outbound load needs certified weighment — it's the basis for every payment and every sale invoice on site.",
  },
  {
    icon: Wind,
    name: "Dust extraction / baghouse",
    detail:
      "Shredding and separation generate fine particulate — extraction keeps the line compliant and keeps metal fines from becoming a housekeeping and safety problem.",
  },
  {
    icon: Boxes,
    name: "Segregated yard zones",
    detail:
      "Separate holding areas for incoming mixed scrap, sorted ferrous, sorted non-ferrous, and rejects keep contamination out of your highest-value streams.",
  },
  {
    icon: Layers,
    name: "Oil & fluid drainage",
    detail:
      "Automotive and machinery scrap arrives with residual oils and coolants — proper drainage and containment before shredding reduces both fire risk and effluent issues.",
  },
];

function SiteEssentials() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Beyond the machines themselves"
          title="What the site layout needs to get right"
          description="The equipment gets most of the attention, but yard layout is what determines whether your grade — and your safety record — holds up day to day."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {siteEssentials.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="flex gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brandGreen/10 text-brandGreen">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.detail}
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
/* 9. FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "Do I need a shredder if I'm only trading scrap, not processing it?",
    a: "No. A baler or shear alone can compress and cut scrap into transport-ready bales without full shredding — many trading-focused operations start and stay at this tier.",
  },
  {
    q: "What's the real difference an eddy current separator makes?",
    a: "For mixed ferrous and non-ferrous scrap, an eddy current separator recovers aluminium, copper, brass, and zinc that would otherwise stay locked in the ferrous stream — equipment guides put the added recovered value at roughly $50–100 per tonne.",
  },
  {
    q: "How should I size a shredder for my operation?",
    a: "Size to the largest single item you'll process, not your average throughput. A shredder rated for 10 tonnes/hour on light scrap may only manage a fraction of that on dense engine blocks or structural steel — always confirm throughput data specific to your actual material mix.",
  },
  {
    q: "What's the most overlooked operational risk in scrap shredding?",
    a: "Batteries and sealed containers riding along in mixed scrap. Lithium-ion cells in e-scrap and appliance scrap are a well-documented cause of shredder-line fires, which is why pre-sort screening deserves as much attention as the shredder itself.",
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
/* 9. Final CTA                                                         */
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
          Full machinery &amp; operations deep-dive coming soon
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
          We're finalizing detailed equipment specs, layout plans, and vendor
          comparisons. Producers, recyclers, and PROs who need guidance now
          don't have to wait for the full guide — talk to our team today.
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

export default function BuySellMetalsMachineryGuide() {
  return (
    <main className="bg-background pt-24 md:pt-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-0 lg:grid-cols-[1fr_340px] lg:gap-6 lg:px-6">
        {/* Main content column */}
        <Seo
          title="Buy & Sell Metals: Machinery, Setup & Operations Guide"
          description="A practical guide to machinery, facility setup, and operations for buying and selling metal scrap. Learn about equipment, workflow, compliance, and best practices for producers, recyclers, and PROs."
          keywords={[
            "Buy and Sell Metals",
            "Metal Scrap Machinery",
            "Metal Trading Setup",
            "Metal Scrap Operations",
            "Metal Recycling Equipment",
            "Metal Scrap Business",
            "Scrap Metal Processing",
            "Metal Sorting Equipment",
            "Metal Handling Machinery",
            "Metal Recycling Plant",
            "Metal Trading Business",
            "Industrial Scrap Management",
            "Producers and Recyclers",
            "PRO Services",
            "Metal Waste Management",
            "What machinery is required for a metal scrap business?",
            "How to set up a metal trading business?",
            "How to start a scrap metal business in India?",
            "Best machinery for metal recycling",
            "Metal scrap business setup guide",
            "How to manage metal scrap operations?",
            "Metal recycling plant setup cost",
            "How to improve metal scrap processing efficiency?",
            "Metal trading operations guide",
            "Metal scrap business compliance",
          ]}
          url="https://eprnexuss.com/blog/buy-sell-metals-machinery"
          type="article"
        />
        <div className="min-w-0">
          <Hero />
          <ProcessPipeline />
          <MachineryShowcase />
          <InvestmentChart />
          <ShredderComparison />
          <SafetyRisk />
          <SizingSetup />
          <SiteEssentials />
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
