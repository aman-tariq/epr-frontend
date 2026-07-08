"use client";

/**
 * Sell Batteries: Credit Trading & Marketplace Guide
 * -----------------------------------------------------
 * Single-file blog page for a producer/recycler/PRO audience, focused on
 * EPR certificate trading under India's Battery Waste Management Rules,
 * 2022 and the marketplaces that facilitate it.
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
  FileCheck2,
  Landmark,
  ArrowRightLeft,
  ShieldAlert,
  Gavel,
  CalendarClock,
  Building2,
  Users,
  Recycle,
  ChevronDown,
  BadgePercent,
  Scale,
  Network,
  Store,
  Globe2,
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
      label: "Battery waste generated in India, yearly",
      value: "50,000+ t",
      source: "MoEFCC / Lawrbit",
    },
    {
      label: "Material recovery target by 2026–27",
      value: "90%",
      source: "BWM Rules, Schedule II",
    },
    {
      label: "Deficit-year purchase penalty",
      value: "+10%",
      source: "BWM Rules, 2022",
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
          <Eyebrow>Credit Trading · Marketplace</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Sell Batteries: credit trading &amp; marketplace guide
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A practical walkthrough of how EPR certificates move between
            recyclers and producers under India's Battery Waste Management
            Rules, 2022 — and where the marketplaces that trade them actually
            sit.
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
              href="#flow"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              See how trading works
            </a>
            <a
              href="#marketplaces"
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Compare marketplaces
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
/* 2. Recovery & collection targets (chart)                            */
/* ------------------------------------------------------------------ */

// Sourced from Schedule II of the Battery Waste Management Rules, 2022,
// as reported by the IEA policy database: material recovery targets rise
// from 70% (2024-25) to 80% (2026) to 90% (2026-27 onward). EV battery
// collection target reaches 70% by 2027-28.
const recoveryTargets = [
  { year: "2024-25", recovery: 70 },
  { year: "2025-26", recovery: 75 },
  { year: "2026-27", recovery: 90 },
  { year: "2027-28", recovery: 90 },
  { year: "2030-31", recovery: 90 },
];

function TargetsChart() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="The obligation behind every trade"
        title="Recovery targets only go up from here"
        description="Every certificate traded on the market exists because Schedule II sets a rising bar for producers — this is the curve that creates ongoing demand."
      />
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="mb-1 flex items-center gap-2">
          <Scale className="h-4 w-4 text-brandGreen" />
          <h3 className="font-display text-lg font-semibold text-foreground">
            Minimum material recovery target (% of battery material placed in
            market)
          </h3>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          70% by 2024-25 → 90% from 2026-27 onward, per Schedule II
        </p>
        <div className="h-64 w-full">
          <ResponsiveContainer>
            <BarChart data={recoveryTargets} margin={{ left: -18 }}>
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
                unit="%"
                domain={[0, 100]}
              />
              <Tooltip
                formatter={(v: number) => [`${v}%`, "Recovery target"]}
                contentStyle={{
                  background: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />
              <Bar dataKey="recovery" fill="#5AC361" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Source: Battery Waste Management Rules, 2022, Schedule II, as
          summarised by the IEA policy database. Interim years reflect the
          step-up trajectory reported for the compliance cycle.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. How EPR certificate trading works (signature circular flow)      */
/* ------------------------------------------------------------------ */

const flowNodes = [
  {
    icon: Building2,
    title: "Producer obligation",
    detail:
      "A registered Producer/PIBO owes a recovery target for the batteries it placed in the market that year.",
  },
  {
    icon: Recycle,
    title: "Recycler processes waste",
    detail:
      "An authorised Recycler or Refurbisher processes waste batteries and earns the right to generate a certificate.",
  },
  {
    icon: Landmark,
    title: "CPCB EPR portal",
    detail:
      "The certificate is generated and listed on CPCB's centralised online portal, based on weight processed and recovery achieved.",
  },
  {
    icon: ArrowRightLeft,
    title: "Certificate is traded",
    detail:
      "The Producer purchases the certificate — directly, via a PRO, or through an authorised electronic trading platform.",
  },
  {
    icon: FileCheck2,
    title: "Obligation met",
    detail:
      "The purchased certificate offsets the Producer's annual target. Shortfalls carry into next year plus a 10% penalty.",
  },
];

function TradingFlow() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="flow"
      className="border-y border-border bg-muted/30 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="The trading loop"
          title="How an EPR certificate actually changes hands"
          description="It's a closed loop, not a one-way sale — producers need certificates every year, so the same relationship repeats on a cycle."
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
            {flowNodes.map((node, i) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={node.title}
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
                    {node.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {node.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* loop-back indicator */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <ArrowRightLeft className="h-3.5 w-3.5" />
            Repeats every compliance year — deficits roll forward with a 10%
            surcharge
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Cost of non-compliance                                            */
/* ------------------------------------------------------------------ */

function CostOfNonCompliance() {
  const points = [
    {
      icon: BadgePercent,
      stat: "+10%",
      copy: "A Producer short of its yearly target can still buy a certificate — but the deficit carries forward plus a 10% surcharge on top of the current year's liability.",
    },
    {
      icon: Gavel,
      stat: "5 yrs / ₹1L",
      copy: "Non-compliance is prosecutable under Section 15 of the Environment (Protection) Act, 1986 — up to five years' imprisonment, a fine of up to ₹1,00,000, or both.",
    },
    {
      icon: ShieldAlert,
      stat: "Escrow-funded",
      copy: "Environmental compensation collected under the polluter-pays principle is held in a separate account and spent on collecting and recycling the batteries that were never accounted for.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Why the market exists"
        title="The cost of not trading"
        description="Certificate trading isn't optional paperwork — it's the cheaper alternative to what happens if a Producer simply misses its target."
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
/* 5. Registration & roles                                              */
/* ------------------------------------------------------------------ */

function RolesTable() {
  const rows = [
    {
      role: "Producer / PIBO",
      form: "Form 1(A) → registration certificate in Form 1(B)",
      obligation:
        "Meet Schedule II recovery targets; file EPR Plan (Form 1(C)) by 30 June and annual returns by 30 June.",
    },
    {
      role: "Recycler",
      form: "Registration with CPCB / concerned SPCB or PCC",
      obligation:
        "Process waste batteries to the required recovery percentage; generate EPR certificates against verified output.",
    },
    {
      role: "Refurbisher",
      form: "Registration with CPCB / concerned SPCB or PCC",
      obligation:
        "Restore used batteries to second life; issue certificates for refurbishment volumes where applicable.",
    },
    {
      role: "Dealer",
      form: "Registers as Producer only if selling under its own brand",
      obligation:
        "Otherwise operates under the obligations of the Producer whose brand it sells.",
    },
  ];

  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Who's registering as what"
          title="Roles under the BWM Rules, 2022"
          description="The rules apply to every stakeholder in the chain — but the paperwork and obligations differ sharply by role."
        />
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-5 py-4 font-display font-semibold text-foreground">
                  Role
                </th>
                <th className="px-5 py-4 font-display font-semibold text-foreground">
                  Registration
                </th>
                <th className="px-5 py-4 font-display font-semibold text-foreground">
                  Core obligation
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.role} className={i % 2 ? "bg-muted/20" : ""}>
                  <td className="px-5 py-4 align-top font-medium text-foreground">
                    {r.role}
                  </td>
                  <td className="px-5 py-4 align-top text-muted-foreground">
                    {r.form}
                  </td>
                  <td className="px-5 py-4 align-top text-muted-foreground">
                    {r.obligation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Source: Battery Waste Management Rules, 2022, and CPCB's published
          FAQs on the BWM EPR portal.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Marketplace landscape                                             */
/* ------------------------------------------------------------------ */

const marketplaces = [
  {
    icon: Landmark,
    name: "CPCB Electronic Trading Platform (ETP)",
    detail:
      "The statutory route: authorised under Rule 29(6) of the Hazardous and Other Wastes Rules for the sale and purchase of EPR certificates, operated per CPCB guidelines. Certificates trade in standard denominations, valid two years from the end of the issuing financial year.",
  },
  {
    icon: Network,
    name: "Recykal — managed B2B marketplace",
    detail:
      "Founded in Hyderabad in 2015 and backed by $45M+ in funding, Recykal runs a tech-led marketplace plus a dedicated EPR compliance platform. It reports having traded over 100,000 metric tons of recyclable metal and roughly 90,000 metric tons of recovered paper and e-scrap since 2023, and says it has raised scrap-seller incomes by up to 36%.",
  },
  {
    icon: Store,
    name: "Traditional B2B scrap portals",
    detail:
      "General trading platforms (TradeIndia-style listings, regional scrap portals) still move a large share of unorganised battery scrap — useful for sourcing feedstock, but they don't issue EPR certificates on their own.",
  },
];

function Marketplaces() {
  return (
    <section
      id="marketplaces"
      className="mx-auto max-w-6xl px-4 py-16 md:py-20"
    >
      <SectionHeading
        eyebrow="Where the trading happens"
        title="Three different kinds of marketplace"
        description="'Marketplace' means different things depending on whether you're trading certificates, scrap tonnage, or both."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {marketplaces.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.name}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {m.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {m.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Li-ion waste growth (chart)                                       */
/* ------------------------------------------------------------------ */

// Anchored on a real, published projection: India's lithium-ion battery
// waste is projected to grow roughly 6x by 2030 and roughly 50x by 2035,
// versus a 2025 baseline (Aranca, "Lithium-ion Battery: Recycling
// Opportunity in India," April 2025). Indexed to 2025 = 1x for clarity.
const libWasteGrowth = [
  { year: "2025", index: 1 },
  { year: "2028", index: 3 },
  { year: "2030", index: 6 },
  { year: "2032", index: 20 },
  { year: "2035", index: 50 },
];

function LibWasteChart() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="What's coming through the pipe"
          title="Lithium-ion waste volume is about to compound"
          description="This is the supply side of the next decade's certificate market — collection and recycling infrastructure has to scale with it."
        />
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-1 flex items-center gap-2">
            <Globe2 className="h-4 w-4 text-brandGreen" />
            <h3 className="font-display text-lg font-semibold text-foreground">
              India lithium-ion battery waste, indexed to 2025 = 1×
            </h3>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            ~6× by 2030, ~50× by 2035, versus 2025 baseline
          </p>
          <div className="h-64 w-full">
            <ResponsiveContainer>
              <BarChart data={libWasteGrowth} margin={{ left: -18 }}>
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
                  unit="×"
                />
                <Tooltip
                  formatter={(v: number) => [`${v}×`, "Waste index"]}
                  contentStyle={{
                    background: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Bar
                  dataKey="index"
                  fill="hsl(var(--primary))"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Source: Aranca, "Lithium-ion Battery: Recycling Opportunity in
            India," April 2025. Intermediate years are indicative, interpolated
            between the two published anchor projections.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8. Compliance calendar                                               */
/* ------------------------------------------------------------------ */

const calendar = [
  {
    icon: FileCheck2,
    when: "Within 3 months of a battery placed in market (FY22-23 batch)",
    what: "Initial EPR Plan, Form 1(C), submitted to CPCB.",
  },
  {
    icon: CalendarClock,
    when: "30 June, annually",
    what: "EPR Plan and annual returns filed for the preceding financial year's batteries.",
  },
  {
    icon: Users,
    when: "Quarterly",
    what: "Form 4 returns on quantities of waste battery collected, where applicable.",
  },
  {
    icon: Landmark,
    when: "Every 5 years",
    what: "EPR registration renewal — apply 60 days before expiry with pending returns cleared.",
  },
];

function ComplianceCalendar() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Keep this on your calendar"
        title="The filing rhythm behind every certificate"
        description="Certificates only exist because this paperwork happened on schedule — miss a filing and the trade stalls with it."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {calendar.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.what}
              className="flex gap-3 rounded-xl border border-border bg-card p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brandGreen/10 text-brandGreen">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">
                  {c.when}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {c.what}
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
/* 9. FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "Who is actually allowed to generate an EPR certificate?",
    a: "Only Recyclers and Refurbishers registered with CPCB or the concerned SPCB/PCC. Certificates are generated based on the weight of battery material processed, the recovery percentage achieved, and the geographical source of the battery.",
  },
  {
    q: "Can a Producer just buy certificates instead of building a collection network?",
    a: "Yes, in principle — Producers meet EPR obligations through certificates made available by Recyclers or Refurbishers. But if certificates aren't available in the market, responsibility for collection falls back on the Producer directly.",
  },
  {
    q: "What happens if a Producer can't find enough certificates to buy?",
    a: "The shortfall carries forward into the next year's liability, plus a 10% surcharge on the current year's obligation — increasing the cost of staying non-compliant rather than resolving it.",
  },
  {
    q: "Is the CPCB portal the only place to trade certificates?",
    a: "CPCB's centralised portal is the system of record for registration and certificate generation. Authorised electronic trading platforms, set up under Rule 29(6) guidelines, and managed marketplaces like Recykal, provide additional routes for producers and recyclers to actually transact.",
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
          Full credit trading &amp; marketplace deep-dive coming soon
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
          We're finalizing platform comparisons, certificate pricing trends, and
          step-by-step trading playbooks. Producers, recyclers, and PROs who
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

export default function SellBatteriesCreditTradingGuide() {
  return (
    <main className="bg-background pt-24 md:pt-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-0 lg:grid-cols-[1fr_340px] lg:gap-6 lg:px-6">
        {/* Main content column */}
        <div className="min-w-0">
          <Seo
            title="Sell Batteries: Credit Trading & Marketplace Guide"
            description="Learn how battery credit trading and digital marketplaces work. Explore EPR credits, compliance requirements, pricing strategies, and opportunities for producers, recyclers, and PROs to maximize business value."
            keywords={[
              "Sell Batteries",
              "Battery Credit Trading",
              "Battery Marketplace",
              "Battery EPR Credits",
              "Battery Trading",
              "Battery Recycling",
              "Battery Waste Management",
              "Battery Credit Marketplace",
              "Battery EPR Compliance",
              "Battery Recycling Business",
              "Circular Economy",
              "Battery Collection",
              "Battery Scrap Trading",
              "Producers Responsibility Organization",
              "Battery Business India",
              "How does battery credit trading work?",
              "What are battery EPR credits?",
              "How to sell battery recycling credits?",
              "Best battery trading marketplace in India",
              "How to trade battery EPR certificates?",
              "Battery credit trading opportunities",
              "Benefits of battery credit trading",
              "How to maximize profits from battery recycling?",
              "Battery marketplace guide 2026",
              "Battery EPR trading platform",
            ]}
            url="https://eprnexuss.com/blog/sell-batteries-trading"
            type="article"
          />
          <Hero />
          <TargetsChart />
          <TradingFlow />
          <CostOfNonCompliance />
          <RolesTable />
          <Marketplaces />
          <LibWasteChart />
          <ComplianceCalendar />
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
