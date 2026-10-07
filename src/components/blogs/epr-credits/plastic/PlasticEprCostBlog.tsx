"use client";

import { useState } from "react";

import { motion, type Variants } from "framer-motion";

import {
  Factory,
  IndianRupee,
  Cog,
  Zap,
  Droplets,
  Wind,
  Users,
  Wallet,
  ScrollText,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  Recycle,
  BadgeCheck,
  Scale,
  Package,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import StickyContactForm from "@/components/StickyContactForm";

/* ------------------------------------------------------------------
 * SEO / METADATA
 * Move into your central blog.ts registry the same way other posts
 * are wired in; kept here so the page is self-sufficient.
 * ---------------------------------------------------------------- */

export const recyclingPlantCostMeta = {
  title: "How Much Does It Cost to Start a Plastic Recycling Plant in India?",

  description:
    "Planning a plastic recycling plant in India? Learn about machinery costs, investment, capacity, licenses, operating expenses, EPR certificates and profitability.",

  slug: "plastic-recycling-plant-cost-india",

  keywords: [
    "Plastic Recycling Plant Cost in India",
    "Plastic Recycling Plant Setup",
    "Plastic Recycling Business in India",
    "Plastic Recycling Machinery",
    "Plastic Recycling Plant Investment",
    "Plastic Recycling Plant Profit",
    "Plastic Waste Processor Registration",
  ],

  openGraph: {
    title: "How Much Does It Cost to Start a Plastic Recycling Plant in India?",

    description:
      "Investment ranges by plant size, machinery requirements, licenses, operating costs and how EPR certificates factor into recycling plant profitability.",

    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "How much does a small plastic recycling plant cost in India?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "A small plant can potentially start in the tens of lakhs, but the actual investment depends on capacity, machinery, building, utilities, pollution-control systems and working capital.",
      },
    },

    {
      "@type": "Question",

      name: "Which plastic is best for recycling?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "There isn't one universally best plastic. PET, HDPE, LDPE and PP can all have established recycling applications, but the economics depend on local availability, contamination, processing requirements and demand for the recycled output.",
      },
    },

    {
      "@type": "Question",

      name: "Do plastic recyclers need EPR registration?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Eligible Plastic Waste Processors need to follow the applicable registration requirements under the Plastic Waste Management EPR framework.",
      },
    },

    {
      "@type": "Question",

      name: "Can a recycler earn from EPR certificates?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Eligible registered Plastic Waste Processors can generate EPR certificates under the applicable CPCB framework, subject to the relevant requirements and verification.",
      },
    },

    {
      "@type": "Question",

      name: "How long does it take to recover the investment?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "There is no reliable universal payback period. It depends on capacity utilization, raw-material cost, selling price, operating expenses, financing and other project-specific factors.",
      },
    },
  ],
};

/* ------------------------------------------------------------------
 * DATA
 * ---------------------------------------------------------------- */

// Investment ranges converted to ₹ lakh for a single consistent chart scale.
// Large plant's upper bound is open-ended ("10+ crore") — capped at 1000
// lakh for the chart and called out separately in the label.

const investmentRanges = [
  {
    size: "Small · 100–300 kg/hr",
    base: 25,
    range: 50,
    low: "₹25L",
    high: "₹75L",
  },

  {
    size: "Medium · 500–1,000 kg/hr",
    base: 75,
    range: 175,
    low: "₹75L",
    high: "₹2.5Cr",
  },

  {
    size: "Large · 1–3+ t/hr",
    base: 250,
    range: 750,
    low: "₹2.5Cr",
    high: "₹10Cr+",
  },
];

const processFlow = [
  "Collection",
  "Sorting",
  "Washing",
  "Shredding",
  "Separation",
  "Drying",
  "Extrusion",
  "Pelletizing",
];

const feedstockProcesses = [
  {
    type: "Rigid plastic",
    steps: [
      "Sorting",
      "Crushing",
      "Washing",
      "Drying",
      "Extrusion",
      "Pelletizing",
    ],
  },

  {
    type: "Plastic film",
    steps: [
      "Sorting",
      "Shredding",
      "Washing",
      "Drying",
      "Agglomeration",
      "Extrusion",
      "Pelletizing",
    ],
  },

  {
    type: "PET bottles",
    steps: [
      "Sorting",
      "Crushing",
      "Washing",
      "Separation",
      "Drying",
      "Flakes / further processing",
    ],
  },
];

const machinery = [
  "Plastic sorting system",
  "Conveyor system",
  "Shredder / granulator",
  "Washing line",
  "Friction washer",
  "Dewatering machine",
  "Hot-air dryer",
  "Extruder",
  "Pelletizer",
  "Storage / silo system",
  "Weighing and packing equipment",
];

const otherCosts = [
  {
    icon: Factory,
    title: "Land and building",
    body: "Space for machinery, raw-material storage, finished goods, utilities and vehicle movement.",
  },

  {
    icon: Zap,
    title: "Electrical infrastructure",
    body: "Connection, panels, transformers and wiring for equipment with significant power draw.",
  },

  {
    icon: Droplets,
    title: "Water and wastewater treatment",
    body: "Washing-based recycling needs water management, including wastewater handling and treatment.",
  },

  {
    icon: Wind,
    title: "Pollution-control systems",
    body: "Environmental-management equipment as required by the applicable process and approvals.",
  },

  {
    icon: Users,
    title: "Labour",
    body: "Operators, technicians, supervisors, sorting workers and administrative staff.",
  },

  {
    icon: Wallet,
    title: "Working capital",
    body: "Often overlooked — funds waste purchases, salaries and utilities before recycled material is sold.",
  },
];

const licenses = [
  "CPCB / SPCB-related EPR registration",
  "Consent to Establish",
  "Consent to Operate",
  "GST registration, where applicable",
  "Factory-related approvals, where applicable",
  "Fire and electrical safety requirements",
  "Local authority approvals",
  "Environmental and waste-management requirements",
];

const profitFactors = [
  {
    icon: IndianRupee,
    title: "Raw material cost",
    body: "How cheaply and consistently you can source suitable plastic waste.",
  },

  {
    icon: Scale,
    title: "Recovery / yield",
    body: "How much usable recycled material you produce from each tonne of input.",
  },

  {
    icon: TrendingUp,
    title: "Selling price",
    body: "The price achievable for recycled flakes, granules or pellets.",
  },

  {
    icon: Zap,
    title: "Electricity and water cost",
    body: "Washing and extrusion can consume significant utilities.",
  },

  {
    icon: Users,
    title: "Labour and transportation",
    body: "Logistics becomes a major expense when sourcing waste from distant locations.",
  },

  {
    icon: Cog,
    title: "Machine utilization",
    body: "Running well below capacity makes fixed costs harder to cover.",
  },

  {
    icon: BadgeCheck,
    title: "EPR revenue",
    body: "Eligible EPR certificates may add a further revenue stream where applicable.",
  },
];

const internalLinks = [
  {
    title: "Plastic EPR Registration",
    slug: "plastic-epr-registration-guide",
  },

  {
    title: "Plastic EPR Target Calculation",
    slug: "plastic-epr-target-calculation-guide",
  },

  {
    title: "How to Buy Plastic EPR Certificates",
    slug: "buy-plastic-epr-certificates-guide",
  },

  {
    title: "Why Plastic EPR Registration Gets Rejected",
    slug: "plastic-epr-registration-rejected-reasons",
  },

  {
    title: "Plastic Waste Processor Registration",
    slug: "plastic-waste-processor-registration",
  },
];

const faqs = [
  {
    q: "How much does a small plastic recycling plant cost in India?",

    a: "A small plant can potentially start in the tens of lakhs, but the actual investment depends on capacity, machinery, building, utilities, pollution-control systems and working capital.",
  },

  {
    q: "Which plastic is best for recycling?",

    a: "There isn't one universally best plastic. PET, HDPE, LDPE and PP all have established recycling applications, but the economics depend on local availability, contamination, processing requirements and demand for the recycled output.",
  },

  {
    q: "Do plastic recyclers need EPR registration?",

    a: "Eligible Plastic Waste Processors need to follow the applicable registration requirements under the Plastic Waste Management EPR framework.",
  },

  {
    q: "Can a recycler earn from EPR certificates?",

    a: "Eligible registered Plastic Waste Processors can generate EPR certificates under the applicable CPCB framework, subject to the relevant requirements and verification.",
  },

  {
    q: "How long does it take to recover the investment?",

    a: "There's no reliable universal payback period — it depends on capacity utilization, raw-material cost, selling price, operating expenses, financing and other project-specific factors.",
  },
];

/* ------------------------------------------------------------------
 * MOTION — one orchestrated hero reveal only
 * ---------------------------------------------------------------- */

const heroContainer: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

/* ------------------------------------------------------------------
 * SUBCOMPONENTS
 * ---------------------------------------------------------------- */

function SectionShell({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
 * MARKETPLACE BUTTON
 * ---------------------------------------------------------------- */

function MarketplaceButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="https://www.eprnexuss.com/marketplace/"
      className={`inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm sm:text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-green-700 hover:scale-[1.02] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function InvestmentRangeChart() {
  return (
    <div className="h-72 sm:h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={investmentRanges}
          layout="vertical"
          margin={{
            top: 8,
            right: 24,
            left: 8,
            bottom: 8,
          }}
        >
          <CartesianGrid
            horizontal={false}
            stroke="var(--border)"
          />

          <XAxis
            type="number"
            tickFormatter={(v) => `₹${v}L`}
            tick={{
              fontSize: 12,
              fill: "var(--muted-foreground)",
            }}
            tickLine={false}
            axisLine={{
              stroke: "var(--border)",
            }}
          />

          <YAxis
            type="category"
            dataKey="size"
            width={170}
            tick={{
              fontSize: 12,
              fill: "var(--muted-foreground)",
            }}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;

              const d =
                payload[0].payload as (typeof investmentRanges)[number];

              return (
                <div className="rounded-lg border border-border bg-card px-3 py-2 text-xs shadow-sm">
                  <p className="font-medium text-foreground">
                    {d.size}
                  </p>

                  <p className="text-muted-foreground">
                    {d.low} – {d.high}
                  </p>
                </div>
              );
            }}
          />

          {/* invisible base to offset the floating bar */}
          <Bar
            dataKey="base"
            stackId="a"
            fill="transparent"
          />

          <Bar
            dataKey="range"
            stackId="a"
            radius={[0, 8, 8, 0]}
            fill="#16a34a"
            maxBarSize={34}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden bg-card">
      {faqs.map((item, i) => {
        const isOpen = open === i;

        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 hover:bg-secondary/5 transition-colors"
            >
              <span className="font-medium text-foreground text-[15px] sm:text-base">
                {item.q}
              </span>

              <ChevronDown
                className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FlowRow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-full border border-border bg-background px-3 py-1.5 text-xs sm:text-sm text-foreground/90 whitespace-nowrap">
            {step}
          </span>

          {i < steps.length - 1 && (
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------
 * PAGE
 * ---------------------------------------------------------------- */

export default function RecyclingPlantCostPage() {
  return (
    <main className="w-full bg-background text-foreground font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="flex md:mt-[130px] flex-col lg:flex-row gap-2 items-stretch">
        <div>

          {/* ---------------- HERO ---------------- */}

          <section className="w-full relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-primary text-white">
            <svg
              className="absolute -right-16 -top-16 h-[380px] w-[380px] opacity-[0.13] pointer-events-none"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle
                cx="70"
                cy="70"
                r="45"
                stroke="white"
                strokeWidth="3"
              />

              <circle
                cx="140"
                cy="130"
                r="30"
                stroke="white"
                strokeWidth="3"
              />

              <circle
                cx="150"
                cy="55"
                r="18"
                stroke="white"
                strokeWidth="3"
              />
            </svg>

            <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28 relative">
              <motion.div
                variants={heroContainer}
                initial="hidden"
                animate="show"
                className="max-w-3xl"
              >
                <motion.span
                  variants={heroItem}
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs sm:text-sm font-medium backdrop-blur-sm"
                >
                  <Recycle className="h-4 w-4" />

                  From ₹25 lakh to 10+ crore
                </motion.span>

                <motion.h1
                  variants={heroItem}
                  className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-semibold mt-5"
                >
                  What it costs to start a plastic recycling plant in India
                </motion.h1>

                <motion.p
                  variants={heroItem}
                  className="text-white/85 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed"
                >
                  Investment depends on plant capacity, plastic type,
                  machinery, land and processing technology — not just the
                  recycling machine itself. Here's how to size the project
                  properly before you buy anything.
                </motion.p>

                <motion.div
                  variants={heroItem}
                  className="flex flex-wrap gap-3 mt-8"
                >
                  <a
                    href="#investment"
                    className="rounded-lg bg-white text-secondary font-medium text-sm sm:text-[15px] px-5 py-3 hover:bg-white/90 transition-colors"
                  >
                    See investment by plant size
                  </a>

                  <a
                    href="#profitability"
                    className="rounded-lg border border-white/40 font-medium text-sm sm:text-[15px] px-5 py-3 hover:bg-white/10 transition-colors"
                  >
                    What drives profitability
                  </a>

                  {/* MARKETPLACE CTA 1 */}
                  <MarketplaceButton>
                    Explore EPR Marketplace
                  </MarketplaceButton>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* ---------------- QUICK STATS ---------------- */}

          <SectionShell className="-mt-8 sm:-mt-10 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                {
                  label: "Plant size tiers",
                  value: "3",
                  sub: "Small · Medium · Large",
                },

                {
                  label: "Core process stages",
                  value: "8",
                  sub: "Collection to pelletizing",
                },

                {
                  label: "Machinery categories",
                  value: "11",
                  sub: "Sorting through packing",
                },

                {
                  label: "Revenue streams",
                  value: "2",
                  sub: "Recycled material + EPR certificates",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-card border border-border p-4 sm:p-5 shadow-sm"
                >
                  <p className="text-2xl sm:text-3xl font-display font-semibold text-secondary">
                    {s.value}
                  </p>

                  <p className="text-sm font-medium text-foreground mt-1">
                    {s.label}
                  </p>

                  <p className="text-xs text-muted-foreground mt-0.5">
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </SectionShell>

          {/* ---------------- WHAT IS A RECYCLING PLANT ---------------- */}

          <SectionShell className="py-14 sm:py-20">
            <p className="text-secondary font-medium text-sm mb-2">
              The basics
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">
              What a plastic recycling plant actually does
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
              A plastic recycling plant collects and processes plastic waste
              into reusable material — recycled flakes, regrind or granules and
              pellets. The exact process depends on the plastic type and
              quality of the incoming waste; cleaner, better-sorted input
              generally needs less intensive processing.
            </p>

            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <p className="text-sm font-medium text-foreground mb-4">
                The core process
              </p>

              <FlowRow steps={processFlow} />
            </div>
          </SectionShell>

          {/* ---------------- INVESTMENT BY PLANT SIZE ---------------- */}

          <SectionShell
            className="py-14 sm:py-20 bg-primary/5"
            id="investment"
          >
            <p className="text-secondary font-medium text-sm mb-2">
              Investment
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
              How much investment is required?
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
              There's no single fixed cost — investment scales with plant size.
              These are indicative industry-level ranges, not government-fixed
              costs; actual project cost varies with machinery specification,
              automation, land, utilities and pollution-control systems.
            </p>

            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 items-center">
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <InvestmentRangeChart />
              </div>

              <div className="rounded-2xl bg-secondary text-white p-6 sm:p-7">
                <p className="text-sm font-medium text-white/80 mb-2">
                  Worked example
                </p>

                <p className="text-white/90 leading-relaxed">
                  A 500 kg/hour line running 8 hours a day has a theoretical
                  capacity of:
                </p>

                <div className="h-px bg-white/20 my-4" />

                <p className="text-xl sm:text-2xl font-display font-semibold">
                  500 × 8 = 4,000 kg/day
                </p>

                <p className="text-white/80 text-sm mt-1">
                  ≈ 4 tonnes/day
                </p>

                <p className="text-white/70 text-xs mt-4 leading-relaxed">
                  Actual output will be lower depending on downtime, input
                  quality, yield and operating conditions.
                </p>
              </div>
            </div>

            {/* MARKETPLACE CTA 2 */}
            <div className="mt-8 flex flex-wrap gap-3">
              <MarketplaceButton>
                Find EPR Credits for Your Business
              </MarketplaceButton>
            </div>
          </SectionShell>

          {/* ---------------- MACHINERY ---------------- */}

          <SectionShell className="py-14 sm:py-20">
            <p className="text-secondary font-medium text-sm mb-2">
              Equipment
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
              The machinery you'll need
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Machinery is one of the largest parts of the initial investment —
              and the right configuration depends entirely on your feedstock.
              Buying machinery before deciding your feedstock is an expensive
              mistake to make.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
              {machinery.map((m) => (
                <div
                  key={m}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <Cog className="h-4 w-4 text-secondary shrink-0" />

                  <span className="text-sm text-foreground/90">
                    {m}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm font-medium text-foreground mb-4">
              Process by feedstock type
            </p>

            <div className="space-y-4">
              {feedstockProcesses.map((f) => (
                <div
                  key={f.type}
                  className="rounded-2xl border border-border bg-card p-5 sm:p-6"
                >
                  <p className="text-sm font-medium text-secondary mb-3">
                    {f.type}
                  </p>

                  <FlowRow steps={f.steps} />
                </div>
              ))}
            </div>
          </SectionShell>

          {/* ---------------- OTHER COSTS ---------------- */}

          <SectionShell className="py-14 sm:py-20 bg-secondary/5">
            <p className="text-secondary font-medium text-sm mb-2">
              Beyond machinery
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
              Other costs to plan for
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Machinery isn't the only expense — working capital in particular
              is the one entrepreneurs most often underestimate.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherCosts.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>

                  <p className="text-sm font-medium text-foreground">
                    {c.title}
                  </p>

                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </SectionShell>

          {/* ---------------- LICENSES ---------------- */}

          <SectionShell className="py-14 sm:py-20">
            <p className="text-secondary font-medium text-sm mb-2">
              Compliance
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2 flex items-center gap-2.5">
              <ScrollText className="h-6 w-6 text-secondary" />
              Licenses and registrations
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Approvals vary by state, plant capacity, process and plastic type
              — identify your State Pollution Control Board requirements before
              finalizing the plant, not after.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {licenses.map((l) => (
                <div
                  key={l}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <BadgeCheck className="h-4 w-4 text-secondary mt-0.5 shrink-0" />

                  <span className="text-sm text-foreground/90">
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </SectionShell>

          {/* ---------------- REVENUE ---------------- */}

          <SectionShell className="py-14 sm:py-20 bg-primary/5">
            <p className="text-secondary font-medium text-sm mb-2">
              Revenue
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
              How a recycling plant makes money
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Primary revenue comes from selling processed material — recycled
              flakes, granules, pellets or processed scrap. A properly
              registered operation can add a second stream through the EPR
              ecosystem.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-border bg-card p-6">
                <Package className="h-5 w-5 text-primary mb-3" />

                <h3 className="font-display text-lg font-medium">
                  Recycled material sales
                </h3>

                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Flakes, granules, pellets and processed plastic scrap sold to
                  downstream buyers.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <BadgeCheck className="h-5 w-5 text-secondary mb-3" />

                <h3 className="font-display text-lg font-medium">
                  EPR certificate generation
                </h3>

                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Registered Plastic Waste Processors can generate eligible EPR
                  certificates from qualifying processing activity, usable
                  within the EPR system by eligible PIBOs.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-secondary/10 border border-secondary/20 p-4">
              <AlertTriangle className="h-4 w-4 text-secondary mt-0.5 shrink-0" />

              <p className="text-sm text-foreground/90">
                EPR certificate generation isn't guaranteed profit — eligibility,
                quantities, category, documentation and applicable CPCB
                requirements all matter.
              </p>
            </div>
          </SectionShell>

          {/* ---------------- PROFITABILITY ---------------- */}

          <SectionShell
            className="py-14 sm:py-20"
            id="profitability"
          >
            <p className="text-secondary font-medium text-sm mb-2">
              Is it profitable?
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
              What actually drives profitability
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Profitability depends on several variables, not simply on
              production capacity.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {profitFactors.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <f.icon className="h-5 w-5 text-secondary mb-3" />

                  <p className="text-sm font-medium text-foreground">
                    {f.title}
                  </p>

                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-secondary to-primary text-white p-6 sm:p-8">
              <p className="text-sm font-medium text-white/80 mb-2">
                The simple version
              </p>

              <p className="font-display text-lg sm:text-xl font-medium leading-snug">
                Profit = Revenue from recycled material + eligible EPR-related
                revenue − Operating costs
              </p>

              <p className="text-white/85 text-sm mt-3 leading-relaxed max-w-2xl">
                Model this against actual local scrap prices and current
                recycled-material selling prices before buying machinery —
                not against generic ROI claims.
              </p>

              <div className="mt-6">
                <MarketplaceButton>
                  Explore EPR Credit Marketplace
                </MarketplaceButton>
              </div>
            </div>
          </SectionShell>

          {/* ---------------- FAQ ---------------- */}

          <SectionShell className="pb-14 sm:pb-20">
            <p className="text-secondary font-medium text-sm mb-2">
              FAQs
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">
              Frequently asked questions
            </h2>

            <FaqAccordion />
          </SectionShell>

          {/* ---------------- RELATED READING ---------------- */}

          <SectionShell className="pb-14 sm:pb-20">
            <p className="text-secondary font-medium text-sm mb-2">
              Keep reading
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">
              Related EPR compliance guides
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {internalLinks.map((link) => (
                <a
                  key={link.slug}
                  href={`/blog/${link.slug}`}
                  className="group rounded-xl border border-border bg-card p-4 flex items-center justify-between gap-3 hover:border-secondary/50 transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">
                    {link.title}
                  </span>

                  <ArrowRight className="h-4 w-4 text-secondary shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </SectionShell>

          {/* ---------------- SOURCES ---------------- */}

          <SectionShell className="pb-16">
            <div className="border-t border-border pt-6 text-xs text-muted-foreground">
              <p className="font-medium text-foreground mb-2">
                Note
              </p>

              <p>
                Investment ranges are indicative industry-level figures, not
                government-fixed costs. Verify current machinery pricing,
                approvals and CPCB/SPCB requirements before finalizing a
                project.
              </p>
            </div>
          </SectionShell>
        </div>

        <aside className="hidden lg:block shrink-0 w-[320px]">
          <div className="sticky top-28 px-2">
            <StickyContactForm />
          </div>
        </aside>
      </div>
    </main>
  );
}