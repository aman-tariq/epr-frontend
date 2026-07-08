"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import {
  ShieldCheck,
  FileCheck2,
  ClipboardList,
  Recycle,
  Factory,
  Building2,
  Users,
  ChevronDown,
  ArrowRight,
  AlertTriangle,
  BadgeCheck,
  Layers,
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

const roadmapStages = [
  {
    id: "01",
    title: "Approvals",
    desc: "Establish producer/importer/brand-owner identity, confirm applicable plastic categories, and line up the documentation your application will lean on.",
    icon: ShieldCheck,
  },
  {
    id: "02",
    title: "Registration",
    desc: "File on the EPR portal with your entity details, packaging data, and targets — the record that everything downstream gets checked against.",
    icon: FileCheck2,
  },
  {
    id: "03",
    title: "Credit Procurement",
    desc: "Match your obligation against verified recycler certificates and PRO-issued EPR plastic credits for the relevant category and financial year.",
    icon: Recycle,
  },
  {
    id: "04",
    title: "Ongoing Compliance",
    desc: "File annual returns, retain evidence, and track renewals so last year's approval doesn't quietly lapse into this year's gap.",
    icon: ClipboardList,
  },
];

const audience = [
  {
    title: "Producers",
    body: "Brand owners placing plastic packaging on the market who carry the primary EPR obligation.",
    icon: Factory,
  },
  {
    title: "Recyclers",
    body: "Registered recycling units that generate certificates and credits once processing is verified.",
    icon: Recycle,
  },
  {
    title: "PROs",
    body: "Producer Responsibility Organisations that pool obligations and route credits between the two.",
    icon: Building2,
  },
];

const timelineData = [
  { stage: "Documentation", weeks: 2 },
  { stage: "Portal Filing", weeks: 3 },
  { stage: "Verification", weeks: 4 },
  { stage: "Approval", weeks: 3 },
];

const stakeholderData = [
  { name: "Producers", touchpoints: 6 },
  { name: "Importers", touchpoints: 5 },
  { name: "Brand Owners", touchpoints: 5 },
  { name: "PROs", touchpoints: 7 },
];

const checklist = [
  "Entity & brand registration documents",
  "Category-wise packaging data (rigid, flexible, multi-layered, other)",
  "Previous year's fulfillment or first-year baseline",
  "Waste management / recycling agreements, if applicable",
  "Authorised signatory details for the EPR portal",
];

const faqs = [
  {
    q: "Who actually needs to register for EPR plastic credits?",
    a: "Producers, importers, and brand owners placing plastic packaging in the market generally carry the obligation, while PROs and recyclers sit on the fulfillment side.",
  },
  {
    q: "What's the most common reason applications stall?",
    a: "Mismatched packaging-category data between what's filed and what supporting documents show — verification teams flag inconsistencies first.",
  },
  {
    q: "Can credits from one category cover another?",
    a: "Category matching rules are specific and change with policy updates, which is exactly the kind of detail worth confirming before you file, not after.",
  },
  {
    q: "How often does this need to be renewed?",
    a: "Compliance is an annual cycle, not a one-time approval — returns, evidence, and target tracking repeat every financial year.",
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

const flowSteps = [
  { Icon: Factory, label: "Producer" },
  { Icon: FileCheck2, label: "Registration" },
  { Icon: Recycle, label: "Credits" },
  { Icon: ShieldCheck, label: "Compliance" },
];

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
                  i === 2
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

function ComplianceVisual() {
  const rows = [
    "Entity & brand details verified",
    "Packaging data filed by category",
    "Credits matched to obligation",
  ];
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card p-6 sm:h-64">
      <Recycle className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 text-brandGreen/10" />
      <div className="relative flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <FileCheck2 className="h-5 w-5 text-primary" />
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
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function EPRPlasticCreditsBlog() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const spineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <div className="w-full bg-background pt-28 md:pt-32 pb-24 font-sans text-foreground">
      <div className="md:container grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-10 xl:gap-16">
        {/* ============================================================ */}
        {/* MAIN CONTENT COLUMN                                          */}
        {/* ============================================================ */}
        <Seo
          title="EPR Plastic Credits: Approvals, Registration & Compliance Roadmap"
          description="Learn the complete approvals, registration, and compliance roadmap for EPR Plastic Credits in India. Understand CPCB requirements, Plastic Waste Management Rules, documentation, eligibility, and legal obligations for EPR credit trading."
          keywords={[
            "EPR Plastic Credits",
            "Plastic EPR Registration",
            "Plastic EPR Compliance",
            "Plastic Waste Management Rules",
            "CPCB Plastic EPR Registration",
            "Plastic Credit Trading",
            "Plastic EPR Certificate",
            "Extended Producer Responsibility",
            "Plastic Recycling",
            "Plastic Waste Management",
            "Environmental Compliance",
            "Plastic Credit Marketplace",
            "Business Compliance",
            "Regulatory Compliance",
            "Plastic EPR Guidelines",
            "How to register for Plastic EPR?",
            "How to get Plastic EPR approval?",
            "Who needs Plastic EPR registration?",
            "Documents required for Plastic EPR registration",
            "How to comply with Plastic Waste Management Rules?",
            "Plastic EPR compliance checklist",
            "How to avoid Plastic EPR penalties?",
            "Plastic EPR registration process in India",
            "CPCB Plastic EPR guidelines",
            "Plastic EPR compliance roadmap",
          ]}
          url="https://eprnexuss.com/blog/epr-plastic-approvals"
          type="article"
        />
        <main className="min-w-0">
          {/* ---------- 1. HERO ---------- */}
          <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/40 via-background to-primary/5 px-6 py-14 sm:px-10 sm:py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-brandGreen/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brandGreen">
                <Recycle className="h-3.5 w-3.5" />
                EPR Plastic Credits
              </span>
              <h1 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
                Approvals, Registration &amp; Compliance —
                <span className="text-brandGreen"> mapped end to end</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
                A practical, step-by-step guide covering approvals,
                registration, and the compliance roadmap for EPR plastic — built
                for producers, recyclers, and PROs who need clarity, not more
                paperwork.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#roadmap"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  See the roadmap
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
            <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-4">
              {[
                { label: "Core Stages", value: "4" },
                {
                  label: "Packaging Categories",
                  value: "Rigid · Flexible · MLP · Other",
                },
                { label: "Key Roles", value: "Producer · Recycler · PRO" },
                { label: "Filing Cycle", value: "Annual" },
              ].map((f) => (
                <div key={f.label} className="text-center">
                  <p className="font-display text-lg font-bold text-foreground sm:text-xl">
                    {f.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ---------- 3. WHAT IS EPR ---------- */}
          <Reveal className="mt-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              What EPR plastic credits actually cover
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <p className="text-muted-foreground leading-relaxed">
                Extended Producer Responsibility shifts end-of-life
                accountability for plastic packaging back onto the businesses
                that put it on the market. In practice, that obligation is met
                through registration on the EPR portal and by acquiring credits
                or certificates from verified recyclers — creating a paper trail
                regulators can audit and a market recyclers can participate in.
              </p>
              <ComplianceVisual />
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
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <a.icon className="h-8 w-8 text-brandGreen" />
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ---------- 5. APPROVAL ROADMAP (signature element) ---------- */}
          <section id="roadmap" ref={roadmapRef} className="mt-20">
            <Reveal>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                The compliance roadmap, stage by stage
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Four stages, in order — each one gates the next, so skipping
                ahead usually means circling back later.
              </p>
            </Reveal>

            <div className="relative mt-10 pl-10 sm:pl-14">
              {/* base line */}
              <div className="absolute left-3 top-2 bottom-2 w-[3px] rounded-full bg-border sm:left-5" />
              {/* animated fill */}
              <motion.div
                style={{ height: spineHeight }}
                className="absolute left-3 top-2 w-[3px] rounded-full bg-brandGreen sm:left-5"
              />

              <div className="space-y-10">
                {roadmapStages.map((s, i) => (
                  <Reveal key={s.id} className="relative">
                    <div className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-brandGreen bg-background font-display text-xs font-bold text-brandGreen sm:-left-14 sm:h-10 sm:w-10">
                      {s.id}
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <div className="flex items-center gap-3">
                        <s.icon className="h-5 w-5 text-primary" />
                        <h3 className="font-display text-lg font-semibold">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- 6. TIMELINE CHART ---------- */}
          <Reveal className="mt-20">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Where the time typically goes
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              An illustrative view of how weeks tend to split across a
              registration cycle — actual durations vary by category, PRO, and
              portal load.
            </p>
            <div className="mt-6 h-72 w-full rounded-2xl border border-border bg-card p-4">
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
                  <Bar dataKey="weeks" radius={[8, 8, 0, 0]}>
                    {timelineData.map((_, i) => (
                      <Cell
                        key={i}
                        fill={i % 2 === 0 ? "#5AC361" : "hsl(var(--primary))"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Illustrative only — confirm current timelines with your PRO or the
              CPCB/SPCB portal before planning around them.
            </p>
          </Reveal>

          {/* ---------- 7. REGISTRATION CHECKLIST ---------- */}
          <Reveal className="mt-20">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              What registration typically asks for
            </h2>
            <ul className="mt-6 space-y-3">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brandGreen" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ---------- 8. STAKEHOLDER TOUCHPOINTS CHART ---------- */}
          <Reveal className="mt-20">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              How much each role stays in the loop
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A rough sense of ongoing touchpoints across the compliance cycle,
              by stakeholder type.
            </p>
            <div className="mt-6 h-72 w-full rounded-2xl border border-border bg-card p-4">
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
                  <Bar
                    dataKey="touchpoints"
                    radius={[0, 8, 8, 0]}
                    fill="hsl(var(--secondary))"
                  />
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
            <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
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
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
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
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-12">
              <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
                    <Layers className="h-4 w-4" />
                    Full deep-dive in progress
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                    Need guidance before the full guide drops?
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-primary-foreground/80 sm:text-base">
                    Our team is finalizing the complete roadmap. Reach out now
                    and we'll walk you through approvals, registration, and
                    compliance directly.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-transform hover:scale-[1.03]"
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
