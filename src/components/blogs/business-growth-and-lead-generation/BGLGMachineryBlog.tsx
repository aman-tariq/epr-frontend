"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  AlertTriangle,
  ShieldAlert,
  FileWarning,
  Gavel,
  Ban,
  Search,
  Calendar,
  Wallet,
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/*  Shared animation variants                                          */
/* ------------------------------------------------------------------ */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ------------------------------------------------------------------ */
/*  Illustrations — custom vector art, no stock photography            */
/* ------------------------------------------------------------------ */

/** Hero illustration: a compliance certificate with a crack running
 *  through it — a mistake that turns a document into a liability. */
function CrackedCertificateIllustration() {
  return (
    <svg
      viewBox="0 0 460 320"
      className="w-full h-full max-h-96"
      role="img"
      aria-label="Illustration of a compliance certificate cracked down the middle with a warning badge"
    >
      <rect
        x="130"
        y="30"
        width="200"
        height="260"
        rx="14"
        fill="hsl(var(--card))"
        stroke="hsl(var(--border))"
      />
      <rect
        x="130"
        y="30"
        width="200"
        height="20"
        rx="10"
        fill="hsl(var(--primary))"
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x="152"
          y={68 + i * 26}
          width={i === 3 ? 90 : 156}
          height="8"
          rx="4"
          fill="hsl(var(--muted-foreground))"
          opacity="0.3"
        />
      ))}
      {/* crack */}
      <path
        d="M230 30 L214 90 L246 130 L206 170 L238 210 L218 250 L230 290"
        stroke="hsl(var(--destructive))"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* warning badge */}
      <g transform="translate(340,80)">
        <circle r="34" fill="hsl(var(--destructive))" />
        <path d="M0 -14 L12 12 L-12 12 Z" fill="white" opacity="0.95" />
        <rect
          x="-2"
          y="-6"
          width="4"
          height="10"
          fill="hsl(var(--destructive))"
        />
        <circle cx="0" cy="7" r="1.6" fill="hsl(var(--destructive))" />
      </g>
    </svg>
  );
}

/** Fraud illustration: a tall claimed-capacity bar dwarfing a short
 *  actual-capacity bar, with a magnifier catching the gap. */
function CapacityGapIllustration() {
  return (
    <svg
      viewBox="0 0 420 300"
      className="w-full h-full max-h-96"
      role="img"
      aria-label="Illustration comparing a small actual recycling capacity bar against a much taller claimed capacity bar, with a magnifying glass highlighting the gap"
    >
      <line
        x1="60"
        y1="250"
        x2="360"
        y2="250"
        stroke="hsl(var(--border))"
        strokeWidth="2"
      />
      {/* actual */}
      <rect
        x="100"
        y="222"
        width="50"
        height="28"
        rx="4"
        fill="hsl(var(--primary))"
      />
      <text
        x="125"
        y="270"
        textAnchor="middle"
        fontSize="11"
        fill="hsl(var(--muted-foreground))"
        fontFamily="sans-serif"
      >
        Actual
      </text>
      {/* claimed */}
      <rect
        x="230"
        y="60"
        width="50"
        height="190"
        rx="4"
        fill="hsl(var(--destructive))"
        opacity="0.75"
      />
      <text
        x="255"
        y="270"
        textAnchor="middle"
        fontSize="11"
        fill="hsl(var(--muted-foreground))"
        fontFamily="sans-serif"
      >
        Claimed
      </text>
      {/* magnifier over claimed */}
      <g transform="translate(255,70)">
        <circle
          r="30"
          fill="hsl(var(--background))"
          fillOpacity="0.5"
          stroke="#5AC361"
          strokeWidth="6"
        />
        <line
          x1="21"
          y1="21"
          x2="44"
          y2="44"
          stroke="#5AC361"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/** Escalation illustration: a staircase of flags getting larger, showing
 *  how an unresolved shortfall compounds year over year. */
function EscalationStaircaseIllustration() {
  const steps = [
    { x: 40, h: 40 },
    { x: 140, h: 75 },
    { x: 240, h: 110 },
    { x: 340, h: 150 },
  ];
  return (
    <svg
      viewBox="0 0 420 240"
      className="w-full h-full max-h-96"
      role="img"
      aria-label="Illustration of an ascending staircase with growing warning flags, showing a compliance penalty compounding year over year"
    >
      <line
        x1="20"
        y1="220"
        x2="400"
        y2="220"
        stroke="hsl(var(--border))"
        strokeWidth="2"
      />
      {steps.map((s, i) => (
        <g key={i}>
          <rect
            x={s.x}
            y={220 - s.h}
            width="60"
            height={s.h}
            rx="4"
            fill="hsl(var(--primary))"
            opacity={0.35 + i * 0.2}
          />
          <g transform={`translate(${s.x + 30}, ${220 - s.h - 22})`}>
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="20"
              stroke="hsl(var(--destructive))"
              strokeWidth="3"
            />
            <path d="M0 -2 L18 4 L0 10 Z" fill="hsl(var(--destructive))" />
          </g>
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data — grounded in real CPCB enforcement records, not invented      */
/* ------------------------------------------------------------------ */

const refundData = [
  { year: "Cleared Yr 1", refund: 75 },
  { year: "Cleared Yr 2", refund: 60 },
  { year: "Cleared Yr 3", refund: 40 },
  { year: "After Yr 3", refund: 0 },
];

const escalationData = [
  { year: "On-time filing", target: 100 },
  { year: "1 year late", target: 125 },
  { year: "2 years late", target: 150 },
];

const mistakes = [
  {
    title: "Missing the annual return deadline",
    body: "CPCB issued a show-cause notice in November 2024 to PIBOs that hadn't filed for FY 2022-23 and FY 2023-24 — with EPR targets raised 25% as a direct penalty, and a further 25% if the next year's filing was also missed.",
  },
  {
    title: "Buying certificates without checking recycler capacity",
    body: "A CSE investigation found roughly 700,000 fraudulent plastic EPR certificates in circulation, some claiming recycling capacity up to 38 times higher than what the facility could actually process.",
  },
  {
    title: "Selecting the wrong plastic category",
    body: "Category I–V selection is checked closely during CPCB review, and a mismatch remains one of the most common reasons an application gets rejected outright.",
  },
  {
    title: "Updating packaging without the QR-linked disclosure",
    body: "Several FMCG importers and D2C brands redesigned packaging in early 2025 without embedding the barcode/QR disclosure now required — their annual return reconciliation didn't match CPCB's records, triggering portal queries and certificate shortfalls.",
  },
  {
    title: "Letting your registration lapse",
    body: "Since July 2025, customs authorities block consignments for importers without a valid, active EPR plastic registration — a lapsed registration isn't just a compliance gap, it stops goods at the border.",
  },
  {
    title: "Ignoring GST-linked scrutiny",
    body: "CPCB now cross-references EPR filings against GST data. A mismatch between reported packaging volumes and invoiced sales is enough to trigger a closer look at your account.",
  },
  {
    title: "Treating a shortfall as a one-time cost",
    body: "Environmental Compensation doesn't clear the obligation — the shortfall carries forward for up to three years, and the refund you can claw back shrinks the longer it sits unresolved.",
  },
  {
    title: "Waiting until March to buy certificates",
    body: "Early, quarterly certificate procurement has been shown to cost 15–25% less than scrambling for volume right before the filing deadline, when prices run highest.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function EPRMistakesBlog() {
  return (
    <div className="w-full bg-background text-foreground pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          <Seo
            title="Common EPR Compliance Mistakes That Could Cost Your Business Thousands"
            description="Avoid costly EPR compliance mistakes that can lead to penalties, legal issues, and business disruptions. Learn the most common errors businesses make and how to stay compliant while supporting long-term growth."
            keywords={[
              "EPR Compliance",
              "EPR Compliance Mistakes",
              "Extended Producer Responsibility",
              "EPR Registration",
              "CPCB EPR",
              "Business Compliance",
              "Environmental Compliance",
              "EPR Penalties",
              "Waste Management Rules",
              "Plastic Waste Management",
              "E-Waste Compliance",
              "Battery Waste Management",
              "Business Growth",
              "Regulatory Compliance",
              "Sustainability Compliance",
              "What are common EPR compliance mistakes?",
              "How to avoid EPR penalties?",
              "Why is my EPR application rejected?",
              "How to stay compliant with EPR regulations?",
              "Documents required for EPR compliance",
              "How to maintain EPR compliance?",
              "What happens if a business fails EPR compliance?",
              "How to prevent EPR compliance errors?",
              "Best practices for EPR compliance",
              "EPR compliance guide for businesses",
            ]}
            url="https://eprnexuss.com/blog/business-growth-machinery"
            type="article"
          />
          {/* ============================================================ */}
          {/*  MAIN CONTENT                                                 */}
          {/* ============================================================ */}
          <main className="flex-1 min-w-0 pb-24">
            {/* 1. HERO ------------------------------------------------- */}
            <motion.section
              initial="hidden"
              animate="show"
              variants={stagger}
              className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/40 via-background to-destructive/5 p-6 sm:p-10 md:p-14"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-xs font-medium text-destructive"
              >
                <ShieldAlert className="h-3.5 w-3.5" />
                Business growth & lead generation
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="font-display mt-6 text-3xl sm:text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight"
              >
                Common EPR Compliance{" "}
                <span className="text-primary">Mistakes</span> That Could Cost
                Your Business Thousands
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground"
              >
                Most EPR penalties don't come from businesses ignoring the rules
                — they come from small, avoidable errors: a missed deadline, an
                unverified certificate, a category picked in a hurry. Here are
                the mistakes we see most often, what they actually cost, and how
                to stay ahead of them.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href="#mistakes"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  See the 8 mistakes
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#avoid"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-muted"
                >
                  How to avoid them
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 overflow-hidden rounded-2xl border border-border bg-muted/20 flex items-center justify-center py-6"
              >
                <CrackedCertificateIllustration />
              </motion.div>
            </motion.section>

            {/* 2. QUICK STATS -------------------------------------------- */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                {
                  value: "₹1L/day",
                  label: "Possible fine under Section 15 for willful violation",
                },
                {
                  value: "~7L",
                  label:
                    "Fraudulent plastic EPR certificates uncovered by a CSE probe",
                },
                {
                  value: "1,200",
                  label:
                    "PIBOs issued CPCB shortfall notices in a single cycle",
                },
                {
                  value: "3 yrs",
                  label: "How long an unresolved shortfall carries forward",
                },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card p-5 text-center"
                >
                  <div className="font-display text-2xl sm:text-3xl font-semibold text-destructive">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-muted-foreground">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.section>

            {/* 3. WHY MISTAKES ESCALATE ------------------------------------ */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mt-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <motion.div variants={fadeUp}>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                  Why a small compliance gap turns into a big bill
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  EPR enforcement in 2026 runs on digital audit trails,
                  invoice-level verification, and data cross-linked with GST
                  filings. A gap that used to go unnoticed for a year now
                  surfaces the moment your numbers don't reconcile — and by
                  then, the penalty is already compounding.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  None of the mistakes on this list are exotic. They're the kind
                  that happen when EPR is treated as a once-a-year filing task
                  rather than an ongoing operational discipline — which is
                  exactly the gap CPCB's current enforcement model is built to
                  catch.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="overflow-hidden rounded-2xl border border-border bg-muted/20 flex items-center justify-center py-4"
              >
                <EscalationStaircaseIllustration />
              </motion.div>
            </motion.section>

            {/* 4. THE 8 MISTAKES -------------------------------------------- */}
            <motion.section
              id="mistakes"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-20 scroll-mt-28"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <FileWarning className="h-6 w-6 text-destructive" />
                <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                  The 8 costliest EPR mistakes we see
                </h2>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="mt-3 text-muted-foreground max-w-2xl"
              >
                Each of these has a documented consequence attached to it — not
                a hypothetical one.
              </motion.p>

              <div className="mt-10 space-y-4">
                {mistakes.map((item, i) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="flex gap-4 sm:gap-6 rounded-2xl border border-border bg-card p-5 sm:p-6"
                  >
                    <div className="font-display shrink-0 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-destructive/10 text-destructive text-sm font-semibold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* 5. CERTIFICATE FRAUD CALLOUT ---------------------------------- */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mt-20 grid md:grid-cols-2 gap-8 items-center"
            >
              <motion.div
                variants={fadeUp}
                className="order-2 md:order-1 overflow-hidden rounded-2xl border border-border bg-muted/20 flex items-center justify-center py-4"
              >
                <CapacityGapIllustration />
              </motion.div>
              <motion.div variants={fadeUp} className="order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <Search className="h-6 w-6 text-primary" />
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                    Certificates you bought in good faith can still fail you
                  </h2>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A Centre for Science and Environment investigation uncovered
                  close to 700,000 fraudulent plastic EPR certificates in the
                  market — some recyclers claimed processing capacity roughly 38
                  times higher than they actually had. Brands that bought
                  certificates through intermediaries, without checking the
                  recycler's registered capacity, ended up holding paperwork
                  that doesn't hold up under CPCB's current digital audit trail.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  The fix is simple in principle: verify a recycler's registered
                  capacity against what they're issuing certificates for, every
                  time — not just at renewal.
                </p>
              </motion.div>
            </motion.section>

            {/* 6. EC REFUND EROSION CHART ------------------------------------- */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mt-20 rounded-3xl border border-border bg-card p-6 sm:p-10"
            >
              <motion.h2
                variants={fadeUp}
                className="font-display text-2xl sm:text-3xl font-semibold"
              >
                The longer a shortfall sits, the less you get back
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-3 text-muted-foreground max-w-2xl"
              >
                Environmental Compensation is refundable if you clear the
                underlying shortfall — but the refund shrinks every year you
                wait, under CPCB's carry-forward guidelines.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 h-72 sm:h-80 w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={refundData}
                    margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="4 4"
                      className="stroke-border"
                    />
                    <XAxis
                      dataKey="year"
                      tick={{ fontSize: 12 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis
                      domain={[0, 100]}
                      tick={{ fontSize: 12 }}
                      stroke="hsl(var(--muted-foreground))"
                      unit="%"
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 12,
                        border: "1px solid hsl(var(--border))",
                        background: "hsl(var(--popover))",
                        color: "hsl(var(--popover-foreground))",
                        fontSize: 13,
                      }}
                      formatter={(v: number) => [`${v}%`, "EC refunded"]}
                    />
                    <Bar dataKey="refund" radius={[8, 8, 0, 0]}>
                      {refundData.map((_, i) => (
                        <Cell
                          key={i}
                          fill={i === 3 ? "hsl(var(--destructive))" : "#5AC361"}
                          fillOpacity={0.85 - i * 0.12}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-xs text-muted-foreground"
              >
                Source: CPCB Environmental Compensation carry-forward guidelines
                — full forfeiture after three years.
              </motion.p>
            </motion.section>

            {/* 7. TARGET ESCALATION CHART ------------------------------------- */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mt-20 grid md:grid-cols-2 gap-8 items-start"
            >
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-3">
                  <Gavel className="h-6 w-6 text-destructive" />
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                    A missed filing raises next year's bar, too
                  </h2>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  When CPCB issued show-cause notices over unfiled annual
                  returns, the penalty wasn't only Environmental Compensation —
                  non-filers had their EPR target itself raised by 25%, with a
                  further 25% increase if the next filing was also missed.
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  In effect, falling behind doesn't just cost you this year — it
                  makes next year's obligation bigger before you've even
                  started.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="h-64 sm:h-72 rounded-2xl border border-border bg-card p-6"
              >
                <p className="text-sm font-medium mb-4">
                  EPR target as a % of the original obligation
                </p>
                <ResponsiveContainer width="100%" height="80%">
                  <BarChart
                    data={escalationData}
                    layout="vertical"
                    margin={{ left: 10 }}
                  >
                    <CartesianGrid
                      strokeDasharray="4 4"
                      className="stroke-border"
                      horizontal={false}
                    />
                    <XAxis
                      type="number"
                      domain={[0, 160]}
                      tick={{ fontSize: 11 }}
                      stroke="hsl(var(--muted-foreground))"
                      unit="%"
                    />
                    <YAxis
                      type="category"
                      dataKey="year"
                      tick={{ fontSize: 11 }}
                      stroke="hsl(var(--muted-foreground))"
                      width={110}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 12,
                        border: "1px solid hsl(var(--border))",
                        background: "hsl(var(--popover))",
                        color: "hsl(var(--popover-foreground))",
                        fontSize: 13,
                      }}
                      formatter={(v: number) => [`${v}%`, "Target"]}
                    />
                    <Bar
                      dataKey="target"
                      radius={[0, 8, 8, 0]}
                      fill="hsl(var(--destructive))"
                      fillOpacity={0.75}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </motion.section>

            {/* 8. REAL SCENARIO ------------------------------------------------ */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mt-20 rounded-3xl border border-border bg-muted/30 p-6 sm:p-10"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <Ban className="h-6 w-6 text-destructive" />
                <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                  How this plays out in practice
                </h2>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-muted-foreground leading-relaxed max-w-3xl"
              >
                In early 2025, a number of FMCG importers and D2C brands
                redesigned their packaging artwork without embedding the barcode
                or QR-linked disclosure that new rules required. When annual
                return season came around, their reconciliation didn't match
                CPCB's category-wise records. Some received portal queries that
                delayed approval. Others discovered a certificate shortfall only
                when it was too late to source more at a reasonable price. A
                handful had import consignments held up entirely pending
                clarification — all from a packaging update that, on its own,
                looked routine.
              </motion.p>
            </motion.section>

            {/* 9. HOW TO AVOID THESE MISTAKES ---------------------------------- */}
            <motion.section
              id="avoid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-20 scroll-mt-28"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <ClipboardCheck className="h-6 w-6 text-brandGreen" />
                <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                  How to keep these off your books
                </h2>
              </motion.div>

              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                {[
                  {
                    icon: Calendar,
                    title: "Put every deadline on a shared calendar",
                    body: "Quarterly and annual dates, per stream — not tribal knowledge held by one person.",
                  },
                  {
                    icon: Search,
                    title: "Verify recyclers before every purchase",
                    body: "Check registered capacity against what a certificate claims, not just at renewal time.",
                  },
                  {
                    icon: Wallet,
                    title: "Buy certificates on a quarterly cadence",
                    body: "Spreads cost and avoids the March scramble that runs 15–25% more expensive.",
                  },
                  {
                    icon: BadgeCheck,
                    title: "Reconcile GST and EPR data together",
                    body: "Catch a mismatch internally before CPCB's cross-check catches it for you.",
                  },
                ].map((t) => (
                  <motion.div
                    key={t.title}
                    variants={fadeUp}
                    className="rounded-2xl border border-border bg-card p-6 flex gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brandGreen/15 text-brandGreen">
                      <t.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">
                        {t.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                        {t.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* 10. FINAL CTA ------------------------------------------------ */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-20 rounded-3xl bg-primary text-primary-foreground p-8 sm:p-12 text-center overflow-hidden relative"
            >
              <Building2 className="h-8 w-8 mx-auto opacity-80" />
              <h2 className="font-display mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">
                Don't let a routine filing become a five-figure lesson
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-primary-foreground/85">
                Send us your current EPR registrations and filing history —
                we'll flag any of these eight mistakes before they turn into a
                show-cause notice.
              </p>
              <a
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-background text-foreground px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                Get a compliance check
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.section>
          </main>

          {/* ============================================================ */}
          {/*  STICKY CONTACT FORM — right rail, scrolls with the page      */}
          {/* ============================================================ */}
          <aside className="hidden lg:block lg:w-80 xl:w-96 shrink-0">
            <div className="sticky top-28">
              <StickyContactForm />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
