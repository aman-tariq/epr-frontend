"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  FileText,
  ShieldAlert,
  ClipboardList,
  ClipboardCheck,
  Building2,
  Factory,
  Handshake,
  ChevronDown,
  Landmark,
  Timer,
  AlertTriangle,
  CheckCircle2,
  BadgeCheck,
  CalendarClock,
  Stamp,
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
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
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
  const variants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut", delay },
    },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data — CPCB Battery Waste Management (BWM) Rules, 2022 and the      */
/*  eprbatterycpcb.in portal. See "Sources" note at the page footer.   */
/* ------------------------------------------------------------------ */

const approvalTimelineData = [
  { name: "Battery registration (CPCB decision)", days: 15 },
  { name: "Registration renewal (5-yr cycle)", days: 15 },
  { name: "SPCB Consent to Establish / Operate", days: 60 },
];

const roadmapMilestones = [
  {
    tag: "Rule",
    title: "BWM Rules, 2022 notified",
    body: "The Ministry of Environment, Forest and Climate Change notified the Battery Waste Management Rules on 22 August 2022, creating EPR obligations for every battery chemistry.",
    icon: Landmark,
  },
  {
    tag: "Step 1",
    title: "Secure your consents",
    body: "Producers with manufacturing units and all recyclers need Consent to Establish and Consent to Operate from the SPCB/PCC under the Air and Water Acts before applying for EPR registration.",
    icon: Stamp,
  },
  {
    tag: "Step 2",
    title: "Apply on the CPCB portal",
    body: "Producers file Form 1(A) with a six-part application — general details, battery type, sales data, battery material, documents, and fees. Recyclers file a parallel six-part form with the SPCB/PCC via the same centralised portal.",
    icon: ClipboardList,
  },
  {
    tag: "Step 3",
    title: "Registration decision",
    body: "CPCB grants or rejects the application within 15 working days of a complete submission. Approved entities receive a registration valid for five years.",
    icon: Timer,
  },
  {
    tag: "Step 4",
    title: "Submit your EPR plan",
    body: "Producers file Form 1(C), setting out how they will meet collection and recycling targets under Schedule II for the batteries they place on the market.",
    icon: FileText,
  },
  {
    tag: "Step 5",
    title: "File on schedule, ongoing",
    body: "Producers file Form 3 annually; recyclers and refurbishers file Form 4 quarterly. Certificates traded against these filings settle EPR obligations.",
    icon: ClipboardCheck,
  },
  {
    tag: "Step 6",
    title: "Renew before expiry",
    body: "Apply for renewal 60 days before the five-year registration lapses. CPCB processes complete renewal filings within 15 working days.",
    icon: BadgeCheck,
  },
];

const checklistItems = [
  {
    q: "For producers: what goes into the application?",
    a: 'Entity and GST/PAN details, categorised battery chemistry (lead-acid, Li-ion, Ni-Cd, Ni-MH declared separately — "lithium" alone is rejected), sales/import volumes matched to customs bills of entry, CTE/CTO where a manufacturing unit exists, and the application fee.',
  },
  {
    q: "For recyclers: what does the SPCB/PCC ask for?",
    a: "General facility details, the battery types and chemistries handled, geo-tagged images of the recycling site, documented recycling capacity, supporting consents, and the applicable fee.",
  },
  {
    q: "What are the most common rejection reasons?",
    a: "Undeclared battery chemistry, sales volumes that don\u2019t reconcile with customs records, illegible scanned documents, and legal-name mismatches against PAN or GST records.",
  },
  {
    q: "What happens if we miss a filing?",
    a: "Portal accounts can be suspended pending overdue returns — you can\u2019t file or trade certificates while suspended — and Environmental Compensation is levied on top of the underlying obligation, which still carries forward to the next cycle.",
  },
];

const CHART_SECONDARY = "hsl(var(--secondary))";
const CHART_MUTED = "#B7C3B9";

/* ------------------------------------------------------------------ */
/*  1. Hero — dossier / certificate motif, secondary-led palette        */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="overflow-hidden rounded-3xl border-2 border-dashed border-secondary/40 bg-secondary/5 px-6 py-14 sm:px-10 sm:py-20">
      <div className="absolute right-6 top-6 hidden rotate-6 items-center gap-1.5 rounded-md border border-brandGreen/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brandGreen sm:flex">
        <BadgeCheck className="h-3 w-3" />
        BWMR 2022
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerParent}
        className="relative max-w-3xl"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary"
        >
          <Stamp className="h-3.5 w-3.5" />
          Approval Dossier
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Sell Batteries: Approvals, Registration &amp; Compliance Roadmap
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A practical, step-by-step route through registration, consents, and
          ongoing filings for battery scrap — mapped for{" "}
          <span className="font-semibold text-foreground">producers</span>,{" "}
          <span className="font-semibold text-foreground">recyclers</span>, and{" "}
          <span className="font-semibold text-foreground">PROs</span> working
          under India&apos;s Battery Waste Management Rules, 2022.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get compliance guidance
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
/*  2. Compliance ticker — horizontal stat strip, not cards             */
/* ------------------------------------------------------------------ */

function ComplianceTickerSection() {
  const items = [
    { label: "Registration decision window", value: "15 working days" },
    { label: "Registration validity", value: "5 years" },
    { label: "Renew before expiry", value: "60 days prior" },
    { label: "CPCB-registered recyclers", value: "252+" },
  ];
  return (
    <section className="border-y border-border py-6">
      <Reveal className="flex flex-wrap divide-x divide-border">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex-1 min-w-[45%] px-4 py-2 sm:min-w-0 sm:px-6"
          >
            <div className="font-display text-xl font-bold text-primary sm:text-2xl">
              {it.value}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{it.label}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. Signature element — scroll-animated vertical roadmap timeline    */
/* ------------------------------------------------------------------ */

function RoadmapTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-12 sm:py-16">
      <Reveal className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
          The roadmap
        </span>
        <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
          From notification to renewal, in order
        </h2>
        <p className="mt-3 text-muted-foreground">
          This is the real sequence — no step can be skipped, and the clock on
          each one starts the moment the previous one is filed.
        </p>
      </Reveal>

      <div ref={containerRef} className="relative mt-10">
        {/* track */}
        <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2" />
        {/* animated progress line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4 top-0 w-px bg-brandGreen sm:left-1/2"
        />

        <div className="space-y-10">
          {roadmapMilestones.map((m, i) => {
            const isRight = i % 2 === 0;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className={`relative flex flex-col gap-4 pl-12 sm:flex-row sm:pl-0 ${
                    isRight ? "sm:justify-start" : "sm:justify-end"
                  }`}
                >
                  {/* node */}
                  <div className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-brandGreen bg-background sm:left-1/2" />

                  <div
                    className={`w-full rounded-2xl border border-border bg-card p-5 sm:w-[calc(50%-2rem)] ${
                      isRight ? "sm:mr-auto" : "sm:ml-auto"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <m.icon className="h-4 w-4 text-secondary-foreground" />
                      <span className="text-[11px] font-bold uppercase tracking-wide text-secondary-foreground">
                        {m.tag}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {m.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. Document checklist — accordion, not cards                       */
/* ------------------------------------------------------------------ */

function DocumentChecklistSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16">
      <Reveal className="max-w-2xl">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          What the application actually asks for
        </h2>
        <p className="mt-2 text-muted-foreground">
          The questions we hear most before filing.
        </p>
      </Reveal>

      <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
        {checklistItems.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display text-sm font-semibold text-foreground sm:text-base">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown className="h-4 w-4 flex-none text-muted-foreground" />
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm text-muted-foreground">
                  {item.a}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  5. Registration paths — comparison table                           */
/* ------------------------------------------------------------------ */

function RegistrationPathsTable() {
  const rows = [
    {
      who: "Producers (manufacturers, importers)",
      authority: "CPCB, centralised portal",
      form: "Form 1(A) + Form 1(C) EPR plan",
      ongoing: "Form 3, annually",
    },
    {
      who: "Recyclers",
      authority: "SPCB/PCC via CPCB portal",
      form: "Six-part recycler application",
      ongoing: "Form 4, quarterly",
    },
    {
      who: "Refurbishers",
      authority: "SPCB/PCC via CPCB portal",
      form: "Refurbisher sign-up form",
      ongoing: "Form 4, quarterly",
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Who registers where
        </h2>
      </Reveal>
      <Reveal
        delay={0.05}
        className="mt-8 overflow-x-auto rounded-2xl border border-border"
      >
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-secondary/10">
              <th className="px-5 py-3 font-display font-semibold text-foreground">
                Entity
              </th>
              <th className="px-5 py-3 font-display font-semibold text-foreground">
                Registers with
              </th>
              <th className="px-5 py-3 font-display font-semibold text-foreground">
                Initial filing
              </th>
              <th className="px-5 py-3 font-display font-semibold text-foreground">
                Ongoing return
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-border">
                <td className="px-5 py-4 font-medium text-foreground">
                  {r.who}
                </td>
                <td className="px-5 py-4 text-muted-foreground">
                  {r.authority}
                </td>
                <td className="px-5 py-4 text-muted-foreground">{r.form}</td>
                <td className="px-5 py-4 text-muted-foreground">{r.ongoing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  6. Approval timeline chart                                          */
/* ------------------------------------------------------------------ */

function ApprovalTimelineChartSection() {
  return (
    <section className="py-12 sm:py-16">
      <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
            Plan your runway
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
            How long each approval actually takes
          </h2>
          <p className="mt-3 text-muted-foreground">
            CPCB commits to a 15 working-day decision on battery registration
            and renewal once your file is complete. Consents from the SPCB/PCC
            run longer and should be started first, since they\u2019re often a
            prerequisite for the EPR filing itself.
          </p>
        </div>
        <div className="h-64 rounded-2xl border border-border bg-card p-4 lg:col-span-3">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={approvalTimelineData}
              layout="vertical"
              margin={{ left: 10, right: 20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
                className="stroke-border"
              />
              <XAxis
                type="number"
                tick={{ fontSize: 12 }}
                stroke="currentColor"
                className="text-muted-foreground"
              />
              <YAxis
                type="category"
                dataKey="name"
                width={190}
                tick={{ fontSize: 11 }}
                stroke="currentColor"
                className="text-muted-foreground"
              />
              <Tooltip
                formatter={(v: number) => [`${v} days`, "Typical window"]}
              />
              <Bar dataKey="days" radius={[0, 8, 8, 0]}>
                {approvalTimelineData.map((_, i) => (
                  <Cell
                    key={i}
                    fill={
                      i === approvalTimelineData.length - 1
                        ? CHART_MUTED
                        : CHART_SECONDARY
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
/*  7. Filing calendar — horizontal cadence strip                       */
/* ------------------------------------------------------------------ */

function FilingCalendarSection() {
  const cadence = [
    {
      icon: FileText,
      title: "Form 1(A)",
      sub: "Producer registration, one-time",
    },
    {
      icon: ClipboardList,
      title: "Form 1(C)",
      sub: "EPR plan, after registration",
    },
    { icon: CalendarClock, title: "Form 3", sub: "Producers, filed annually" },
    {
      icon: CalendarClock,
      title: "Form 4",
      sub: "Recyclers/refurbishers, quarterly",
    },
    { icon: BadgeCheck, title: "Renewal", sub: "60 days before 5-year expiry" },
  ];

  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          The filing cadence, once you\u2019re registered
        </h2>
      </Reveal>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {cadence.map((c, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="flex h-full flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-center">
              <c.icon className="h-5 w-5 text-secondary-foreground" />
              <span className="font-display text-sm font-bold text-foreground">
                {c.title}
              </span>
              <span className="text-xs text-muted-foreground">{c.sub}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  8. Penalties — destructive-accented warning section                 */
/* ------------------------------------------------------------------ */

function PenaltiesSection() {
  const tiers = [
    { label: "First default", amount: "₹20,000" },
    { label: "Second default", amount: "₹40,000" },
    { label: "Third default", amount: "₹80,000" },
  ];

  return (
    <section className="py-12 sm:py-16">
      <Reveal className="rounded-3xl border border-destructive/30 bg-destructive/5 p-6 sm:p-10">
        <div className="flex items-center gap-2 text-destructive">
          <ShieldAlert className="h-5 w-5" />
          <span className="text-xs font-bold uppercase tracking-wide">
            Non-compliance is not a flat fee
          </span>
        </div>
        <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
          Environmental Compensation escalates with repeat defaults
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          CPCB&apos;s Environmental Compensation guidelines penalise procedural
          violations on an escalating scale, separate from EC charged on unmet
          EPR recycling targets — which is calculated per kilogram of
          unfulfilled obligation, weighted by battery chemistry.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {tiers.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-destructive/20 bg-background p-5"
            >
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <div className="mt-3 font-display text-2xl font-bold text-foreground">
                {t.amount}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {t.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          Paying the compensation doesn&apos;t clear the underlying obligation —
          it still rolls into the following cycle, on top of a fresh target.
        </p>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  9. Roles — interactive tabs, not static cards                       */
/* ------------------------------------------------------------------ */

function RolesTabsSection() {
  const roles = {
    producer: {
      icon: Building2,
      label: "Producers",
      points: [
        "Secure CTE/CTO first if you run a manufacturing unit — it\u2019s a prerequisite for registration",
        "File Form 1(A), then Form 1(C) with your EPR plan once approved",
        "Buy EPR certificates from registered recyclers to close any collection gap",
      ],
    },
    recycler: {
      icon: Factory,
      label: "Recyclers",
      points: [
        "Register with your SPCB/PCC through the same centralised CPCB portal",
        "Keep geo-tagged site images and recycling capacity documentation current",
        "File Form 4 every quarter to keep certificates flowing to producers",
      ],
    },
    pro: {
      icon: Handshake,
      label: "PROs",
      points: [
        "Help producers navigate consent requirements before the EPR filing clock starts",
        "Aggregate scrap volumes and match them to verified, registered recyclers",
        "Track renewal windows across a portfolio so no client\u2019s registration lapses",
      ],
    },
  };

  const [active, setActive] = useState<keyof typeof roles>("producer");
  const current = roles[active];

  return (
    <section className="py-12 sm:py-16">
      <Reveal>
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Your role changes what comes first
        </h2>
      </Reveal>

      <Reveal delay={0.05} className="mt-8">
        <div className="inline-flex flex-wrap gap-2 rounded-xl border border-border bg-card p-1.5">
          {(Object.keys(roles) as Array<keyof typeof roles>).map((key) => {
            const r = roles[key];
            const isActive = key === active;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <r.icon className="h-4 w-4" />
                {r.label}
              </button>
            );
          })}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 rounded-2xl border border-border bg-card p-6"
        >
          <ul className="space-y-3">
            {current.points.map((p, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brandGreen" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  10. Final CTA — bordered dossier card, not a solid gradient banner  */
/* ------------------------------------------------------------------ */

function FinalCTASection() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <Reveal className="grid grid-cols-1 gap-8 rounded-3xl border-2 border-dashed border-secondary/40 bg-secondary/5 p-6 sm:p-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2 text-sm font-medium text-secondary-foreground">
            <Stamp className="h-4 w-4" />
            Deep-dive report in progress
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Our full compliance deep-dive is being finalised
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            In the meantime, our team can walk through your specific
            registration path — consents, forms, and filing cadence — whether
            you&apos;re a producer, recycler, or PRO.
          </p>
        </div>
        <div className="flex items-center lg:col-span-2 lg:justify-end">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get immediate guidance
          </a>
        </div>
      </Reveal>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Sources: Battery Waste Management Rules, 2022 (MoEFCC) · CPCB EPR Portal
        for Battery Waste Management (eprbatterycpcb.in) · CPCB Standard
        Operating Procedures for Producer and Recycler Registration · CPCB
        Environmental Compensation guidelines, September 2024. Figures reflect
        the most recent public reporting available as of 2026 and are subject to
        revision as CPCB updates its rules and portal processes.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page composition                                                    */
/* ------------------------------------------------------------------ */

export default function SellBatteriesComplianceRoadmap() {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
          {/* Main content column */}
          <Seo
            title="Sell Batteries: Approvals, Registration & Compliance Roadmap"
            description="Learn the approvals, registrations, and compliance requirements for selling batteries in India. Follow a complete roadmap covering Battery Waste Management Rules, CPCB guidelines, documentation, and legal obligations."
            keywords={[
              "Sell Batteries",
              "Battery Waste Management",
              "Battery Waste Management Rules",
              "Battery Registration",
              "Battery Compliance",
              "Battery EPR",
              "CPCB Battery Registration",
              "Battery Recycling",
              "Battery Trading",
              "Battery Business India",
              "Battery Waste Compliance",
              "Environmental Compliance",
              "Business Registration",
              "Battery Collection",
              "Regulatory Compliance",
              "How to sell batteries legally in India?",
              "How to get battery EPR registration?",
              "What licenses are required for battery trading?",
              "How to comply with Battery Waste Management Rules?",
              "Who needs battery EPR registration?",
              "Documents required for battery registration",
              "Battery compliance checklist",
              "How to avoid battery compliance penalties?",
              "Battery registration process in India",
              "Battery business compliance guide",
            ]}
            url="https://eprnexuss.com/blog/sell-batteries-approvals"
            type="article"
          />
          <main className="min-w-0 flex-1">
            <HeroSection />
            <ComplianceTickerSection />
            <RoadmapTimelineSection />
            <DocumentChecklistSection />
            <RegistrationPathsTable />
            <ApprovalTimelineChartSection />
            <FilingCalendarSection />
            <PenaltiesSection />
            <RolesTabsSection />
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
