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
  Handshake,
  Clock,
  ShieldCheck,
  TrendingUp,
  Users,
  FileCheck2,
  Recycle,
  AlertTriangle,
  ArrowRight,
  Layers,
  Building2,
  BadgeCheck,
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

/** Hero illustration: a business handing off compliance workload to a
 *  specialist partner, freeing the business to keep growing. */
function DelegationIllustration() {
  return (
    <svg
      viewBox="0 0 520 340"
      className="w-full h-full max-h-96"
      role="img"
      aria-label="Illustration of a business delegating compliance paperwork to a specialist partner while its own growth curve rises"
    >
      {/* your business node */}
      <g transform="translate(110,170)">
        <circle r="62" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
        <path
          d="M-26 18 L-10 -6 L6 6 L26 -22"
          stroke="hsl(var(--primary))"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 -22 L26 -22 L26 -10"
          stroke="hsl(var(--primary))"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="0"
          y="46"
          textAnchor="middle"
          fontSize="12"
          fill="hsl(var(--muted-foreground))"
          fontFamily="sans-serif"
        >
          Your business
        </text>
      </g>

      {/* partner node */}
      <g transform="translate(410,170)">
        <circle r="62" fill="#5AC361" />
        <path
          d="M-16 0 L-4 12 L20 -16"
          stroke="white"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="0"
          y="46"
          textAnchor="middle"
          fontSize="12"
          fill="hsl(var(--muted-foreground))"
          fontFamily="sans-serif"
        >
          EPR partner
        </text>
      </g>

      {/* handoff path */}
      <path
        d="M172 160 C 250 110, 330 110, 350 158"
        stroke="hsl(var(--border))"
        strokeWidth="2"
        strokeDasharray="4 6"
        fill="none"
      />
      {[0.25, 0.5, 0.75].map((t, i) => {
        const x = 172 + (350 - 172) * t;
        const y = 160 - Math.sin(t * Math.PI) * 45;
        return (
          <g key={i} transform={`translate(${x}, ${y})`}>
            <rect
              x="-9"
              y="-7"
              width="18"
              height="14"
              rx="2"
              fill="hsl(var(--primary))"
              opacity={0.55 + i * 0.15}
            />
            <path
              d="M-5 -2 L5 -2 M-5 2 L2 2"
              stroke="white"
              strokeWidth="1.4"
            />
          </g>
        );
      })}

      {/* growth line above business node */}
      <g transform="translate(60,40)">
        <polyline
          points="0,60 30,45 60,52 90,20 120,0"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="120" cy="0" r="5" fill="hsl(var(--primary))" />
      </g>
    </svg>
  );
}

/** "Hidden cost" illustration: one person facing six separate portal
 *  windows — the operational sprawl of managing every stream in-house. */
function OverloadIllustration() {
  const portals = [
    { x: 40, y: 30 },
    { x: 170, y: 10 },
    { x: 300, y: 30 },
    { x: 40, y: 140 },
    { x: 170, y: 160 },
    { x: 300, y: 140 },
  ];
  return (
    <svg
      viewBox="0 0 400 260"
      className="w-full h-full max-h-96"
      role="img"
      aria-label="Illustration of six separate compliance portal windows stacked up, representing operational overload"
    >
      {portals.map((p, i) => (
        <g key={i} transform={`translate(${p.x}, ${p.y})`}>
          <rect
            width="80"
            height="60"
            rx="8"
            fill="hsl(var(--card))"
            stroke="hsl(var(--border))"
          />
          <rect
            width="80"
            height="14"
            rx="7"
            fill={i % 2 === 0 ? "hsl(var(--primary))" : "#5AC361"}
          />
          <rect
            x="10"
            y="26"
            width="50"
            height="6"
            rx="3"
            fill="hsl(var(--muted-foreground))"
            opacity="0.35"
          />
          <rect
            x="10"
            y="38"
            width="34"
            height="6"
            rx="3"
            fill="hsl(var(--muted-foreground))"
            opacity="0.25"
          />
        </g>
      ))}
      {/* clock in the middle to show time pressure */}
      <g transform="translate(200,130)">
        <circle
          r="34"
          fill="hsl(var(--background))"
          stroke="hsl(var(--destructive))"
          strokeWidth="4"
        />
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="-18"
          stroke="hsl(var(--destructive))"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="0"
          x2="14"
          y2="8"
          stroke="hsl(var(--destructive))"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/** "ROI" illustration: an hourglass tipping into an upward-trending chart —
 *  time reclaimed from compliance becomes time spent on growth. */
function ReclaimedTimeIllustration() {
  return (
    <svg
      viewBox="0 0 420 300"
      className="w-full h-full max-h-96"
      role="img"
      aria-label="Illustration of an hourglass turning into an upward growth chart, representing time reclaimed for business growth"
    >
      <g transform="translate(90,60)">
        <path
          d="M-30 -40 L30 -40 L4 0 L30 40 L-30 40 L-4 0 Z"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="4"
        />
        <path d="M-22 -32 L22 -32 L2 0 Z" fill="#5AC361" opacity="0.6" />
        <path
          d="M-22 32 L22 32 L2 4 Z"
          fill="hsl(var(--primary))"
          opacity="0.5"
        />
      </g>
      <g transform="translate(230,40)">
        <polyline
          points="0,140 40,110 80,120 120,70 160,90 190,20"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="190" cy="20" r="7" fill="#5AC361" />
        <line
          x1="0"
          y1="140"
          x2="190"
          y2="140"
          stroke="hsl(var(--border))"
          strokeWidth="2"
        />
      </g>
      <path
        d="M120 100 C 150 100, 170 90, 190 80"
        stroke="hsl(var(--border))"
        strokeWidth="2"
        strokeDasharray="3 5"
        fill="none"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data — grounded in current market research, not invented figures   */
/* ------------------------------------------------------------------ */

const marketData = [
  { year: "2024", value: 13.45 },
  { year: "2026", value: 16.05 },
  { year: "2029", value: 21.7 },
  { year: "2033", value: 29.2 },
];

const timingData = [
  { scenario: "Clean application", days: 17.5 },
  { scenario: "With CPCB queries", days: 37.5 },
];

const partnerServices = [
  {
    icon: Layers,
    title: "Category & stream mapping",
    body: "Working out exactly which of the six EPR streams — plastic, e-waste, battery, tyre, used oil, or C&D — apply to your products before anything is filed.",
  },
  {
    icon: FileCheck2,
    title: "Registration & documentation",
    body: "Handling PAN, GST, authorisation letters and category selection, so the most common cause of application rejection never reaches your desk.",
  },
  {
    icon: Recycle,
    title: "Recycler & certificate sourcing",
    body: "Maintaining live relationships with CPCB-registered recyclers and processors, so certificates are verified before purchase, not after an audit flags them.",
  },
  {
    icon: ShieldCheck,
    title: "Audit-ready record keeping",
    body: "Reconciling invoices and certificates continuously, in step with the invoice-level verification that Registered Environment Auditors now expect.",
  },
  {
    icon: Clock,
    title: "Quarterly & annual filing",
    body: "Tracking every due date across every stream, so a NIL return or a quarterly filing never quietly slips past a deadline.",
  },
  {
    icon: TrendingUp,
    title: "Regulatory change monitoring",
    body: "Following amendments as they land — like 2025's battery marking update or 2026's plastic certificate verification rules — so your compliance plan doesn't age out mid-year.",
  },
];

const comparison = [
  {
    inhouse:
      "One or more staff hours spent tracking six separate CPCB portals and their filing calendars.",
    outsourced:
      "A single point of contact who already tracks all six portals for multiple clients.",
  },
  {
    inhouse:
      "Category-selection mistakes discovered only when the application is rejected.",
    outsourced:
      "Category and documentation checked against CPCB requirements before submission.",
  },
  {
    inhouse:
      "Recycler relationships built and vetted from scratch, with no way to verify registration in bulk.",
    outsourced:
      "Existing, verified recycler and processor network ready to fulfil targets immediately.",
  },
  {
    inhouse:
      "Regulatory amendments tracked reactively, often after a deadline has already moved.",
    outsourced:
      "Amendments monitored as part of the service, with your compliance plan updated proactively.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function EPROutsourcingBlog() {
  return (
    <div className="w-full bg-background text-foreground pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          <Seo
            title="Why More Businesses Are Outsourcing EPR Compliance to Industry Experts"
            description="Discover why businesses are outsourcing EPR compliance to industry experts to reduce compliance risks, save time, ensure regulatory compliance, and focus on sustainable business growth."
            keywords={[
              "EPR Compliance",
              "EPR Consulting",
              "EPR Compliance Services",
              "Outsourced EPR Compliance",
              "Extended Producer Responsibility",
              "Business Growth",
              "Lead Generation",
              "Environmental Compliance",
              "CPCB EPR Registration",
              "EPR Consultants India",
              "Waste Management Compliance",
              "Regulatory Compliance",
              "Business Compliance Solutions",
              "Sustainability Consulting",
              "EPR Management",
              "Why outsource EPR compliance?",
              "How can EPR consultants help businesses?",
              "Who needs EPR compliance services?",
              "How to simplify EPR compliance?",
              "Benefits of outsourcing EPR compliance",
              "How to stay compliant with EPR regulations?",
              "How to reduce EPR compliance risks?",
              "Best EPR compliance consultants in India",
              "How to save time with EPR compliance?",
              "Why businesses choose EPR experts?",
            ]}
            url="https://eprnexuss.com/blog/business-growth-dpr"
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
              className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/40 via-background to-brandGreen/10 p-6 sm:p-10 md:p-14"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-brandGreen/15 px-4 py-1.5 text-xs font-medium text-brandGreen"
              >
                <Handshake className="h-3.5 w-3.5" />
                Business growth & lead generation
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="font-display mt-6 text-3xl sm:text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight"
              >
                Why More Businesses Are Outsourcing{" "}
                <span className="text-primary">EPR Compliance</span> to Industry
                Experts
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground"
              >
                Managing EPR internally means tracking six regulatory streams,
                multiple CPCB portals, and a calendar of filings that changes
                every year. Here's why a growing number of businesses are
                handing that workload to specialists instead — and what it
                actually frees them up to do.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  See what a partner handles
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#comparison"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-muted"
                >
                  In-house vs outsourced
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 overflow-hidden rounded-2xl border border-border bg-muted/20 flex items-center justify-center py-6"
              >
                <DelegationIllustration />
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
                  value: "$29.2B",
                  label:
                    "Projected outsourced compliance services market by 2033",
                },
                {
                  value: "90%",
                  label:
                    "Of compliance leaders expect operating costs to keep rising",
                },
                {
                  value: "74%",
                  label:
                    "Of companies outsource mainly for specialised expertise",
                },
                {
                  value: "6",
                  label:
                    "Separate EPR streams a business may need to track at once",
                },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card p-5 text-center"
                >
                  <div className="font-display text-2xl sm:text-3xl font-semibold text-primary">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-muted-foreground">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.section>

            {/* 3. HIDDEN COST OF IN-HOUSE ---------------------------------- */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mt-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <motion.div
                variants={fadeUp}
                className="order-2 md:order-1 overflow-hidden rounded-2xl border border-border bg-muted/20 flex items-center justify-center py-4"
              >
                <OverloadIllustration />
              </motion.div>
              <motion.div variants={fadeUp} className="order-1 md:order-2">
                <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                  The real cost of managing EPR in-house
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  On paper, EPR looks like a registration and a few annual
                  filings. In practice, it means someone on your team monitoring
                  up to six separate CPCB portals, each with its own targets,
                  deadlines, and amendment history — on top of their actual job.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Industry research shows compliance leaders broadly expect
                  their operating costs to keep climbing, which is exactly why
                  outsourced compliance services are one of the faster-growing
                  categories in business services right now. The teams handling
                  this internally tend to notice the cost only after a rejected
                  application or a missed filing, not before.
                </p>
              </motion.div>
            </motion.section>

            {/* 4. MARKET GROWTH CHART --------------------------------------- */}
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
                Outsourced compliance is one of the fastest-growing categories
                in business services
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-3 text-muted-foreground max-w-2xl"
              >
                The global outsourced compliance service market was valued at
                roughly $13.45B in 2024 and is projected to more than double by
                2033 — a sign of how many businesses are making the same call.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 h-72 sm:h-80 w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={marketData}
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
                      tick={{ fontSize: 12 }}
                      stroke="hsl(var(--muted-foreground))"
                      unit="B"
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 12,
                        border: "1px solid hsl(var(--border))",
                        background: "hsl(var(--popover))",
                        color: "hsl(var(--popover-foreground))",
                        fontSize: 13,
                      }}
                      formatter={(v: number) => [`$${v}B`, "Market size"]}
                    />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {marketData.map((_, i) => (
                        <Cell
                          key={i}
                          fill="#5AC361"
                          fillOpacity={0.55 + i * 0.13}
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
                Source: outsourced compliance service market sizing, 2024–2033,
                CAGR ≈9.2% from 2026.
              </motion.p>
            </motion.section>

            {/* 5. WHAT A PARTNER HANDLES ------------------------------------ */}
            <motion.section
              id="services"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-20 scroll-mt-28"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                  What a good EPR partner actually handles
                </h2>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="mt-3 text-muted-foreground max-w-2xl"
              >
                Not just registration — the full lifecycle, across every stream
                that applies to your business.
              </motion.p>

              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {partnerServices.map((s) => (
                  <motion.div
                    key={s.title}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {s.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* 6. IN-HOUSE VS OUTSOURCED ------------------------------------ */}
            <motion.section
              id="comparison"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-20 scroll-mt-28"
            >
              <motion.h2
                variants={fadeUp}
                className="font-display text-2xl sm:text-3xl font-semibold"
              >
                In-house vs. outsourced, side by side
              </motion.h2>

              <div className="mt-10 overflow-hidden rounded-2xl border border-border">
                <div className="grid grid-cols-2 bg-muted/40 text-sm font-semibold">
                  <div className="p-4 border-r border-border">
                    Managed in-house
                  </div>
                  <div className="p-4 text-brandGreen">
                    Managed by a partner
                  </div>
                </div>
                {comparison.map((row, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className={`grid grid-cols-2 text-sm ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
                  >
                    <div className="p-4 border-r border-t border-border text-muted-foreground leading-relaxed">
                      {row.inhouse}
                    </div>
                    <div className="p-4 border-t border-border leading-relaxed flex gap-2">
                      <BadgeCheck className="h-4 w-4 text-brandGreen shrink-0 mt-0.5" />
                      <span>{row.outsourced}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* 7. PROCESSING TIME CHART -------------------------------------- */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mt-20 grid md:grid-cols-2 gap-8 items-start"
            >
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                    A clean application clears in half the time
                  </h2>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A complete EPR application, filed correctly the first time,
                  typically clears CPCB review in 15–20 working days.
                  Applications that draw follow-up queries — often because of an
                  avoidable documentation or category error — can stretch to
                  35–40 working days.
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  That gap is largely a function of experience: a partner who
                  files applications every week catches the errors a business
                  filing once a year is more likely to miss.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="h-64 sm:h-72 rounded-2xl border border-border bg-card p-6"
              >
                <p className="text-sm font-medium mb-4">
                  Average CPCB processing time (working days)
                </p>
                <ResponsiveContainer width="100%" height="80%">
                  <BarChart
                    data={timingData}
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
                      tick={{ fontSize: 11 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis
                      type="category"
                      dataKey="scenario"
                      tick={{ fontSize: 11 }}
                      stroke="hsl(var(--muted-foreground))"
                      width={130}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 12,
                        border: "1px solid hsl(var(--border))",
                        background: "hsl(var(--popover))",
                        color: "hsl(var(--popover-foreground))",
                        fontSize: 13,
                      }}
                      formatter={(v: number) => [
                        `${v} days`,
                        "Avg. processing",
                      ]}
                    />
                    <Bar
                      dataKey="days"
                      radius={[0, 8, 8, 0]}
                      fill="hsl(var(--primary))"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </motion.section>

            {/* 8. REGULATORY CHANGE MONITORING ------------------------------- */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-20"
            >
              <motion.h2
                variants={fadeUp}
                className="font-display text-2xl sm:text-3xl font-semibold"
              >
                The rules keep moving — someone needs to keep up
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-3 text-muted-foreground max-w-2xl"
              >
                Recent amendments show how often the ground shifts under EPR
                compliance:
              </motion.p>

              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "2024 — recycled-content mandates",
                    body: "Minimum recycled-content obligations began phasing in for plastic packaging, alongside a government floor price for e-waste certificates.",
                  },
                  {
                    title: "2025 — audit and marking updates",
                    body: "Environment Audit Rules introduced Registered Environment Auditors, while battery labelling rules gained QR-code and brochure alternatives.",
                  },
                  {
                    title: "2026 — verification tightens further",
                    body: "Plastic certificate verification moved to Registered Environment Auditors, and e-waste recycling targets stepped up to 70%.",
                  },
                  {
                    title: "2026 — construction waste joins EPR",
                    body: "Construction and Demolition Waste Rules bring large projects into an EPR-style regime from April, a stream many businesses haven't tracked before.",
                  },
                ].map((c) => (
                  <motion.div
                    key={c.title}
                    variants={fadeUp}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <h3 className="font-semibold text-sm sm:text-base">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {c.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* 9. TIME RECLAIMED FOR GROWTH ---------------------------------- */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mt-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <motion.div variants={fadeUp}>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                  What that reclaimed time is actually worth
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The point of outsourcing was never just cost. Across
                  outsourcing generally, businesses increasingly cite access to
                  specialised expertise — not price — as the main reason they
                  hand a function off, and EPR is a clear case of that: the
                  expertise involved is narrow, technical, and easy to get wrong
                  without daily practice.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Every hour not spent decoding a CPCB circular is an hour
                  available for the things that actually grow a business — sales
                  conversations, product development, or the next campaign.
                  Compliance still gets done; it just isn't the thing pulling
                  your attention away from clients.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="overflow-hidden rounded-2xl border border-border bg-muted/20 flex items-center justify-center py-4"
              >
                <ReclaimedTimeIllustration />
              </motion.div>
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
                Let your team focus on clients — we'll handle CPCB
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-primary-foreground/85">
                Tell us which product categories and packaging you sell, and
                we'll map out exactly which EPR streams apply and what handing
                them off would look like.
              </p>
              <a
                href="/services"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-background text-foreground px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                Talk to our compliance team
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
