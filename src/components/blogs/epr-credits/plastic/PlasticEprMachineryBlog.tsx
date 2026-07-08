"use client";

import React from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ShieldCheck,
  FileCheck2,
  Recycle,
  Factory,
  Building2,
  Users,
  ArrowRight,
  AlertTriangle,
  BadgeCheck,
  Layers,
  Cog,
  Warehouse,
  Wrench,
  Gauge,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const flowSteps = [
  { Icon: Cog, label: "Machinery Selection" },
  { Icon: Warehouse, label: "Site Setup" },
  { Icon: Wrench, label: "Installation" },
  { Icon: Gauge, label: "Operations" },
];

const setupStages = [
  {
    id: "01",
    title: "Machinery Selection",
    desc: "Match shredders, washing lines, and pelletizing or extrusion units to the feedstock and target throughput the plant is being built for.",
    icon: Cog,
  },
  {
    id: "02",
    title: "Site & Infrastructure Setup",
    desc: "Plan the layout around power, water, effluent handling, and storage — the utilities decisions here are what machinery specs actually depend on.",
    icon: Warehouse,
  },
  {
    id: "03",
    title: "Installation & Commissioning",
    desc: "Install, calibrate, and run trial batches, checking output quality against what the machinery was specified to deliver.",
    icon: Wrench,
  },
  {
    id: "04",
    title: "Operations & Maintenance",
    desc: "Staff the line with clear SOPs, then keep a preventive maintenance and throughput-monitoring schedule running on a fixed cadence.",
    icon: Gauge,
  },
];

const audience = [
  {
    title: "Producers",
    body: "Want assurance that the recycling capacity behind their credits is real and operating as declared.",
    icon: Factory,
  },
  {
    title: "Recyclers",
    body: "Running the plant day to day — this guide maps most directly onto their setup and operations decisions.",
    icon: Recycle,
  },
  {
    title: "PROs",
    body: "Verify operational claims against machinery specs and output records before crediting a facility.",
    icon: Building2,
  },
];

const timelineData = [
  { stage: "Selection", weeks: 3 },
  { stage: "Site Setup", weeks: 6 },
  { stage: "Installation", weeks: 4 },
  { stage: "Ramp-up", weeks: 3 },
];

const throughputData = [
  { name: "Shredder", share: 30 },
  { name: "Washing Line", share: 25 },
  { name: "Pelletizer", share: 25 },
  { name: "Extruder", share: 20 },
];

const checklist = [
  "Machinery specs matched to feedstock type and target capacity",
  "Site layout covering power, water, effluent, and storage needs",
  "Installation & commissioning sign-off with trial-run output data",
  "Written SOPs for staff covering each stage of the line",
  "Preventive maintenance and throughput-monitoring schedule",
];

const faqs = [
  {
    q: "What machinery is essential at minimum for a compliant setup?",
    a: "A shredding stage and a washing or separation stage are close to non-negotiable — pelletizing or extrusion depends on whether the output is sold as flake or pellet.",
  },
  {
    q: "How is plant capacity typically verified?",
    a: "Verifiers generally check machinery-rated capacity against actual trial-run or operating output, not just the nameplate specification.",
  },
  {
    q: "What operational gap trips up audits most often?",
    a: "Missing or inconsistent maintenance and throughput logs — declared capacity without supporting operating records is a common red flag.",
  },
  {
    q: "How often should equipment be recalibrated?",
    a: "Cadence varies by machine and vendor guidance, but it should be on a fixed, documented schedule rather than reactive to breakdowns.",
  },
];

/* ------------------------------------------------------------------ */
/*  Motion helpers                                                     */
/* ------------------------------------------------------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Illustrations                                                       */
/* ------------------------------------------------------------------ */

function HeroVisual() {
  return (
    <div className="mt-10 w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brandGreen/10 via-background to-secondary/30 px-6 py-10 sm:px-10 sm:py-14">
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        {flowSteps.map((step, i) => (
          <React.Fragment key={step.label}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex shrink-0 flex-col items-center gap-2 text-center"
            >
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.25,
                }}
                className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm sm:h-16 sm:w-16 ${
                  i === 3
                    ? "bg-brandGreen text-white"
                    : "border border-border bg-card text-primary"
                }`}
              >
                <step.Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.div>
              <span className="text-xs font-semibold text-foreground sm:text-sm">
                {step.label}
              </span>
            </motion.div>

            {i < flowSteps.length - 1 && (
              <div className="hidden h-[2px] flex-1 items-center sm:relative sm:flex sm:bg-border">
                <motion.div
                  animate={{ left: ["0%", "92%"] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  className="absolute -top-[3px] h-2 w-2 rounded-full bg-brandGreen"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function OperationsVisual() {
  const rows = [
    "Machinery specced against feedstock",
    "Trial-run output verified",
    "Maintenance schedule logged",
  ];
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-card p-6 shadow-sm sm:h-64">
      <Cog className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 text-brandGreen/10" />
      <div className="relative flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <Gauge className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 pt-1">
          <div className="h-2.5 w-3/4 rounded-full bg-muted" />
          <div className="mt-2 h-2.5 w-1/2 rounded-full bg-muted" />
        </div>
      </div>
      <div className="relative mt-6 space-y-3">
        {rows.map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="flex items-center gap-2.5"
          >
            <BadgeCheck className="h-4 w-4 shrink-0 text-brandGreen" />
            <span className="text-sm text-foreground">{r}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function EPRPlasticCreditsMachineryBlog() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <div className="w-full bg-background pt-28 md:pt-32 pb-24 font-sans text-foreground">
      <div className="md:container grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-10 xl:gap-16">
        {/* ============================================================ */}
        {/* MAIN CONTENT COLUMN                                          */}
        {/* ============================================================ */}
        <Seo
          title="EPR Plastic Credits: Machinery, Setup & Operations Guide"
          description="Learn the machinery, facility setup, infrastructure, and operational requirements for EPR Plastic Credits. Explore plastic recycling equipment, collection systems, compliance requirements, and best practices for producers, recyclers, and PROs."
          keywords={[
            "EPR Plastic Credits",
            "Plastic EPR Machinery",
            "Plastic Recycling Equipment",
            "Plastic EPR Setup",
            "Plastic EPR Operations",
            "Plastic Waste Management",
            "Plastic Recycling Plant",
            "Plastic Processing Equipment",
            "Plastic Collection Infrastructure",
            "Plastic EPR Compliance",
            "Extended Producer Responsibility",
            "Plastic Credit Generation",
            "PRO Plastic Management",
            "CPCB Plastic EPR",
            "Environmental Compliance",
            "What machinery is required for Plastic EPR?",
            "How to set up a Plastic EPR business?",
            "How to generate Plastic EPR credits?",
            "Plastic recycling plant setup guide",
            "Plastic collection and processing infrastructure",
            "How to manage Plastic EPR operations?",
            "Plastic EPR compliance guide",
            "Plastic recycling equipment in India",
            "Plastic EPR implementation process",
            "Plastic EPR operations guide 2026",
          ]}
          url="https://eprnexuss.com/blog/epr-plastic-machinery"
          type="article"
        />
        <main className="min-w-0">
          {/* ---------- 1. HERO ---------- */}
          <section className="relative overflow-hidden rounded-3xl border border-border bg-secondary/20 px-6 py-14 sm:px-10 sm:py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 rounded-md bg-brandGreen px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                <Cog className="h-3.5 w-3.5" />
                EPR Plastic Credits
              </span>
              <h1 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
                Machinery, Setup &amp; Operations —
                <span className="text-brandGreen">
                  {" "}
                  built to run, not just pass audit
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
                A practical, step-by-step guide covering machinery, setup, and
                operations for EPR plastic recycling — built for producers,
                recyclers, and PROs who need the plant to hold up under
                scrutiny.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#roadmap"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  See the setup roadmap
                  <ArrowRight className="h-4 w-4" />
                </a>
                <span className="text-sm text-muted-foreground">
                  Our team is finalizing the full deep-dive — reach out for
                  immediate guidance in the meantime.
                </span>
              </div>
            </motion.div>

            <HeroVisual />
          </section>

          {/* ---------- 2. QUICK FACTS (pill strip) ---------- */}
          <Reveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {[
                "4 Setup Stages",
                "Shredder · Wash Line · Pelletizer",
                "Producer · Recycler · PRO",
                "Ongoing Maintenance Cycle",
              ].map((fact) => (
                <span
                  key={fact}
                  className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground sm:text-sm"
                >
                  {fact}
                </span>
              ))}
            </div>
          </Reveal>

          {/* ---------- 3. WHAT THIS COVERS ---------- */}
          <Reveal className="mt-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              From machinery choice to daily operations
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <p className="text-muted-foreground leading-relaxed">
                A recycling operation is only as credible as the machinery and
                processes behind it. This guide walks through choosing equipment
                for your feedstock, setting up the site around it, commissioning
                the line, and keeping operations documented well enough to
                survive verification.
              </p>
              <OperationsVisual />
            </div>
          </Reveal>

          {/* ---------- 4. WHO THIS IS FOR (list style) ---------- */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-16"
          >
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Built for every seat at the table
            </h2>
            <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
              {audience.map((a) => (
                <motion.div
                  key={a.title}
                  variants={fadeUp}
                  className="flex items-center gap-4 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brandGreen/15">
                    <a.icon className="h-5 w-5 text-brandGreen" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold">
                      {a.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {a.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ---------- 5. SETUP ROADMAP (zigzag, signature element) ---------- */}
          <section id="roadmap" className="mt-20">
            <Reveal>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Getting from machinery to operations
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Four stages, in order — site decisions in stage two are usually
                dictated by the machinery chosen in stage one.
              </p>
            </Reveal>

            <div className="relative mt-10">
              <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-border md:block" />
              <div className="space-y-8">
                {setupStages.map((s, i) => (
                  <Reveal key={s.id}>
                    <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6">
                      {i % 2 === 0 ? (
                        <>
                          <div className="relative rounded-2xl bg-card p-6 shadow-sm md:text-right">
                            <div className="flex items-center gap-3 md:hidden">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brandGreen text-white">
                                <s.icon className="h-4 w-4" />
                              </div>
                              <h3 className="font-display text-lg font-semibold">
                                {s.title}
                              </h3>
                            </div>
                            <h3 className="hidden font-display text-lg font-semibold md:block">
                              {s.title}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                              {s.desc}
                            </p>
                          </div>
                          <div className="relative z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-brandGreen text-white shadow-md md:flex">
                            <s.icon className="h-5 w-5" />
                          </div>
                          <div className="hidden md:block" />
                        </>
                      ) : (
                        <>
                          <div className="hidden md:block" />
                          <div className="relative z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-brandGreen text-white shadow-md md:flex">
                            <s.icon className="h-5 w-5" />
                          </div>
                          <div className="relative rounded-2xl bg-card p-6 shadow-sm">
                            <div className="flex items-center gap-3 md:hidden">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brandGreen text-white">
                                <s.icon className="h-4 w-4" />
                              </div>
                              <h3 className="font-display text-lg font-semibold">
                                {s.title}
                              </h3>
                            </div>
                            <h3 className="hidden font-display text-lg font-semibold md:block">
                              {s.title}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                              {s.desc}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- 6. SETUP TIMELINE CHART (horizontal bars) ---------- */}
          <Reveal className="mt-20">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Where the setup time typically goes
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              An illustrative view of how weeks tend to split across setup —
              actual durations vary by scale, site readiness, and vendor lead
              times.
            </p>
            <div className="mt-6 h-72 w-full rounded-2xl bg-card p-4 shadow-sm">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={timelineData}
                  margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={false}
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    type="number"
                    tick={{ fontSize: 12 }}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis
                    dataKey="stage"
                    type="category"
                    tick={{ fontSize: 12 }}
                    width={90}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid hsl(var(--border))",
                      fontSize: 12,
                    }}
                  />
                  <Bar
                    dataKey="weeks"
                    radius={[0, 10, 10, 0]}
                    fill="hsl(var(--primary))"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Illustrative only — confirm current timelines with your equipment
              vendor and site engineer before planning around them.
            </p>
          </Reveal>

          {/* ---------- 7. SETUP CHECKLIST ---------- */}
          <Reveal className="mt-20">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              What a complete setup typically covers
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brandGreen" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ---------- 8. THROUGHPUT SHARE CHART (vertical bars) ---------- */}
          <Reveal className="mt-20">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              How the line's output typically breaks down
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A rough, illustrative split of processing share across machinery
              stages on a typical line.
            </p>
            <div className="mt-6 h-72 w-full rounded-2xl bg-card p-4 shadow-sm">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={throughputData}
                  margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 12 }}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis
                    tick={{ fontSize: 12 }}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid hsl(var(--border))",
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="share" radius={[10, 10, 0, 0]} fill="#5AC361" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Illustrative example — actual throughput share depends on your
              specific machinery models and feedstock mix.
            </p>
          </Reveal>

          {/* ---------- 9. FAQ (plain +/- style) ---------- */}
          <Reveal className="mt-20">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-brandGreen" />
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Questions worth settling early
              </h2>
            </div>
            <div className="mt-6 space-y-3">
              {faqs.map((f, i) => (
                <div key={f.q} className="rounded-2xl bg-card p-5 shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="font-display text-sm font-semibold sm:text-base">
                      {f.q}
                    </span>
                    <span className="shrink-0 font-display text-xl font-bold text-brandGreen">
                      {openFaq === i ? "–" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-sm leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ---------- 10. CLOSING CTA (two-tone split) ---------- */}
          <Reveal className="mt-20">
            <div className="relative overflow-hidden rounded-3xl sm:flex">
              <div className="bg-primary px-6 py-12 text-primary-foreground sm:w-2/3 sm:px-12">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
                  <Layers className="h-4 w-4" />
                  Full deep-dive in progress
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                  Setting up a line and want it audit-ready from day one?
                </h3>
                <p className="mt-2 max-w-xl text-sm text-primary-foreground/80 sm:text-base">
                  Our team is finalizing the complete guide. Reach out now and
                  we'll walk through machinery, setup, and operations directly.
                </p>
              </div>
              <div className="flex items-center justify-center bg-brandGreen px-6 py-8 sm:w-1/3 sm:px-8">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-transform hover:scale-[1.03]"
                >
                  <Users className="h-4 w-4" />
                  Talk to our team
                </a>
              </div>
            </div>
          </Reveal>
        </main>

        {/* ============================================================ */}
        {/* STICKY CONTACT FORM SIDEBAR                                   */}
        {/* ============================================================ */}
        <aside id="contact" className="lg:sticky lg:top-32 lg:h-fit">
          <StickyContactForm />
        </aside>
      </div>
    </div>
  );
}
