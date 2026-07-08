"use client";

import React from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ShieldCheck,
  FileCheck2,
  ClipboardList,
  Recycle,
  Factory,
  Building2,
  Users,
  ArrowRight,
  AlertTriangle,
  BadgeCheck,
  Layers,
  TrendingUp,
  FlaskConical,
  Plus,
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
  Cell,
} from "recharts";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const flowSteps = [
  { Icon: ClipboardList, label: "Scoping" },
  { Icon: FlaskConical, label: "Technical Detail" },
  { Icon: TrendingUp, label: "Financials" },
  { Icon: ShieldCheck, label: "Compliance" },
];

const dprStages = [
  {
    id: "01",
    title: "Project Scoping",
    desc: "Define objectives, the plastic waste categories covered, and the recycling or processing capacity the project is built around.",
    icon: ClipboardList,
  },
  {
    id: "02",
    title: "Technical & Financial Detailing",
    desc: "Document the process flow, machinery, and technology used, alongside capex/opex figures and expected EPR credit revenue.",
    icon: FlaskConical,
  },
  {
    id: "03",
    title: "Compliance Documentation",
    desc: "Attach environmental clearances and regulatory alignment so the DPR holds up against CPCB/SPCB and PRO scrutiny.",
    icon: FileCheck2,
  },
  {
    id: "04",
    title: "Submission & Approval",
    desc: "File the DPR, respond to verification queries, and carry it through to final sign-off before credits can be issued against it.",
    icon: ShieldCheck,
  },
];

const audience = [
  {
    title: "Producers",
    body: "Brand owners funding or commissioning a DPR to justify capacity claims behind their EPR obligation.",
    icon: Factory,
  },
  {
    title: "Recyclers",
    body: "Processing units whose DPR underpins the certificates and credits they're able to issue.",
    icon: Recycle,
  },
  {
    title: "PROs",
    body: "Producer Responsibility Organisations that review DPRs before routing credits between producers and recyclers.",
    icon: Building2,
  },
];

const timelineData = [
  { stage: "Scoping", weeks: 2 },
  { stage: "Technical", weeks: 3 },
  { stage: "Financial", weeks: 2 },
  { stage: "Compliance", weeks: 3 },
];

const stakeholderData = [
  { name: "Producers", touchpoints: 5 },
  { name: "Recyclers", touchpoints: 7 },
  { name: "PROs", touchpoints: 6 },
  { name: "Auditors", touchpoints: 4 },
];

const checklist = [
  "Executive summary & clearly stated project objectives",
  "Technical specifications: capacity, process flow, machinery",
  "Financial projections: capex, opex, and credit revenue estimates",
  "Environmental & regulatory compliance documentation",
  "Implementation timeline with monitoring and reporting checkpoints",
];

const faqs = [
  {
    q: "What exactly is a DPR for EPR plastic credits?",
    a: "It's the technical and financial blueprint behind a recycling or processing project — the document verifiers check declared capacity and credit claims against.",
  },
  {
    q: "Who typically prepares the DPR?",
    a: "Usually the recycler or project proponent, often with a technical consultant, since it needs process-level detail alongside financial projections.",
  },
  {
    q: "What happens if technical details don't match declared capacity?",
    a: "Mismatches between the DPR's stated capacity and on-ground verification are one of the most common reasons credit issuance gets delayed or queried.",
  },
  {
    q: "Does a DPR need to be revised later?",
    a: "Yes — capacity expansions, technology changes, or renewed approvals typically call for an updated DPR rather than reusing the original filing.",
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
/*  Illustrations (no absolute-position centering, flex only)          */
/* ------------------------------------------------------------------ */

function HeroVisual() {
  return (
    <div className="mt-10 w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brandGreen/10 via-background to-primary/10 px-6 py-10 sm:px-10 sm:py-14">
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
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                className={`flex h-14 w-14 items-center justify-center rounded-full shadow-sm sm:h-16 sm:w-16 ${
                  i === 1
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

function DPRVisual() {
  const rows = [
    "Capacity & process flow documented",
    "Capex/opex and credit revenue modeled",
    "Compliance annexures attached",
  ];
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card p-6 sm:h-64">
      <Layers className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 text-brandGreen/10" />
      <div className="relative flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <ClipboardList className="h-5 w-5 text-primary" />
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

export default function EPRPlasticCreditsDPRBlog() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <div className="w-full bg-background pt-28 md:pt-32 pb-24 font-sans overflow-x-hidden text-foreground">
      <div className="md:container  overflow-x-hidden grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-10 xl:gap-16">
        {/* ============================================================ */}
        {/* MAIN CONTENT COLUMN                                          */}
        {/* ============================================================ */}
        <main className="min-w-0">
          {/* ---------- 1. HERO ---------- */}
          <Seo
            title="EPR Plastic Credits: Detailed Project Report (DPR) Essentials"
            description="Learn how to prepare a Detailed Project Report (DPR) for EPR Plastic Credits. Explore project planning, compliance requirements, financial projections, infrastructure, feasibility, and operational strategies for successful Plastic EPR credit management."
            keywords={[
              "EPR Plastic Credits",
              "Plastic EPR DPR",
              "Detailed Project Report",
              "Plastic EPR Project Report",
              "Plastic Credit Business Plan",
              "Plastic Waste Management",
              "Plastic Recycling",
              "Plastic EPR Compliance",
              "Extended Producer Responsibility",
              "CPCB Plastic EPR",
              "Plastic Credit Trading",
              "Project Feasibility Report",
              "Financial Projections",
              "Environmental Compliance",
              "Plastic Recycling Business",
              "How to prepare a Plastic EPR DPR?",
              "What is included in a Plastic EPR project report?",
              "How to create a Plastic EPR business plan?",
              "Documents required for a Plastic EPR DPR",
              "Why is a DPR important for Plastic EPR projects?",
              "Plastic EPR project feasibility report",
              "Plastic EPR business planning guide",
              "Best practices for a Plastic EPR DPR",
              "Plastic credit project report format",
              "Plastic EPR implementation guide",
            ]}
            url="https://eprnexuss.com/blog/epr-plastic-dpr"
            type="article"
          />
          <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-primary/5 via-background to-brandGreen/10 px-6 py-14 sm:px-10 sm:py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brandGreen/30 bg-transparent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brandGreen">
                <Gauge className="h-3.5 w-3.5" />
                EPR Plastic Credits
              </span>
              <h1 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
                Detailed Project Report —
                <span className="text-brandGreen">
                  {" "}
                  the essentials, laid out
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
                A practical, step-by-step guide covering DPR essentials for EPR
                plastic — built for producers, recyclers, and PROs who need a
                document that survives verification.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#roadmap"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  See the DPR roadmap
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

          {/* ---------- 2. QUICK FACTS STRIP ---------- */}
          <Reveal>
            <div className="mt-10 grid grid-cols-2 divide-y divide-border rounded-2xl bg-secondary/30 sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
              {[
                { label: "Core Sections", value: "4" },
                {
                  label: "Must Document",
                  value: "Capacity · Cost · Compliance",
                },
                { label: "Key Roles", value: "Producer · Recycler · PRO" },
                { label: "Review Cycle", value: "Per Filing" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col items-center gap-1.5 px-4 py-6 text-center"
                >
                  <p className="font-display text-lg font-bold text-foreground sm:text-xl">
                    {f.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{f.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ---------- 3. WHAT IS A DPR ---------- */}
          <Reveal className="mt-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              What a DPR actually needs to prove
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <p className="text-muted-foreground leading-relaxed">
                A Detailed Project Report is the technical and financial
                backbone behind an EPR recycling or processing project. It's
                where declared capacity, process flow, and machinery get written
                down alongside cost projections and expected credit revenue —
                creating the record that verifiers check claims against before
                credits are issued.
              </p>
              <DPRVisual />
            </div>
          </Reveal>

          {/* ---------- 4. WHO THIS IS FOR ---------- */}
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
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {audience.map((a) => (
                <motion.div
                  key={a.title}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl bg-secondary/30 p-6 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brandGreen/15">
                    <a.icon className="h-6 w-6 text-brandGreen" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ---------- 5. DPR ROADMAP (signature element) ---------- */}
          <section id="roadmap" className="mt-20">
            <Reveal>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Building the DPR, section by section
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Four sections, in order — each one feeds evidence into the next,
                so weak scoping usually shows up later as a compliance gap.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {dprStages.map((s, i) => (
                <Reveal key={s.id}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative flex h-full flex-col rounded-2xl bg-card p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brandGreen text-sm font-bold text-white">
                        {s.id}
                      </div>
                      <s.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {s.desc}
                    </p>
                    {i < dprStages.length - 1 && (
                      <div className="mt-5 hidden h-1 w-8 rounded-full bg-brandGreen/30 sm:block" />
                    )}
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ---------- 6. TIMELINE CHART ---------- */}
          <Reveal className="mt-20">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Where the drafting time typically goes
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              An illustrative view of how weeks tend to split while preparing a
              DPR — actual durations vary by project scale and reviewer.
            </p>
            <div className="mt-6 h-72 w-full rounded-2xl bg-card p-4 shadow-sm">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={timelineData}
                  margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="stage"
                    tick={{ fontSize: 12 }}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis
                    tick={{ fontSize: 12 }}
                    stroke="hsl(var(--muted-foreground))"
                    label={{
                      value: "weeks",
                      angle: -90,
                      position: "insideLeft",
                      fontSize: 12,
                    }}
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
                    radius={[10, 10, 10, 10]}
                    fill="hsl(var(--secondary))"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Illustrative only — confirm current expectations with your PRO or
              technical consultant before planning around them.
            </p>
          </Reveal>

          {/* ---------- 7. DPR CHECKLIST ---------- */}
          <Reveal className="mt-20">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              What a complete DPR typically includes
            </h2>
            <ul className="mt-6 overflow-hidden rounded-2xl bg-card shadow-sm">
              {checklist.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-center gap-4 px-5 py-4 ${
                    i % 2 === 1 ? "bg-secondary/20" : ""
                  }`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brandGreen text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ---------- 8. STAKEHOLDER TOUCHPOINTS CHART ---------- */}
          <Reveal className="mt-20">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              How much each role stays involved
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A rough sense of ongoing touchpoints across DPR review, by
              stakeholder type.
            </p>
            <div className="mt-6 h-72 w-full rounded-2xl bg-card p-4 shadow-sm">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={stakeholderData}
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
                    dataKey="name"
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
                  <Bar dataKey="touchpoints" radius={[0, 10, 10, 0]}>
                    {stakeholderData.map((_, i) => (
                      <Cell
                        key={i}
                        fill={i % 2 === 0 ? "#5AC361" : "hsl(var(--primary))"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Reveal>

          {/* ---------- 9. FAQ / PITFALLS ---------- */}
          <Reveal className="mt-20">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-brandGreen" />
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Questions worth settling early
              </h2>
            </div>
            <div className="mt-6 divide-y divide-border rounded-2xl bg-card shadow-sm">
              {faqs.map((f, i) => (
                <div key={f.q} className="px-5">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-sm font-semibold sm:text-base">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brandGreen/15"
                    >
                      <Plus className="h-3.5 w-3.5 text-brandGreen" />
                    </motion.span>
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
                        <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ---------- 10. CLOSING CTA ---------- */}
          <Reveal className="mt-20">
            <div className="relative overflow-hidden rounded-3xl border-2 border-brandGreen/40 bg-background px-6 py-12 sm:px-12">
              <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brandGreen">
                    <Layers className="h-4 w-4" />
                    Full deep-dive in progress
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    Need your DPR reviewed before the full guide drops?
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
                    Our team is finalizing the complete guide. Reach out now and
                    we'll walk through scoping, technical detail, and compliance
                    directly.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brandGreen px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03]"
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
