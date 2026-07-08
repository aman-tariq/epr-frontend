"use client";

import { useEffect, useRef, useState } from "react";
import {
  Recycle,
  Factory,
  Users,
  ArrowRight,
  ChevronDown,
  Building2,
  Leaf,
  Info,
  Clock,
  Cog,
  Gauge,
  Zap,
  Wind,
  Magnet,
  Wrench,
  Droplets,
  ShieldCheck,
  Flame,
  FileCheck2,
  CalendarDays,
  CalendarRange,
  CalendarClock,
} from "lucide-react";
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
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/* Scroll-reveal hook                                                   */
/* ------------------------------------------------------------------ */
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Real-world data                                                      */
/* Sources: Green Permits "E-Waste Recycling Plant Cost in India" (2025);*/
/* Accio/marketplace pricing for e-waste machinery; IndiaMART machinery */
/* listings (shredder capacity/price); DOING & ResposeIndia equipment   */
/* descriptions for the PCB recovery process.                          */
/* ------------------------------------------------------------------ */
const setupTiers = [
  { tier: "Manual disassembly", cost: 15 },
  { tier: "Semi-automated", cost: 125 },
  { tier: "Fully automated", cost: 500 },
];

const shredderPricing = [
  { capacity: "200 kg/hr", price: 3.5 },
  { capacity: "400 kg/hr", price: 5 },
  { capacity: "750 kg/hr", price: 9 },
];

const processFlow = [
  {
    icon: FileCheck2,
    title: "Collection & sorting",
    body: "Incoming scrap is logged, weighed, and sorted by EEE category before it ever reaches a machine.",
  },
  {
    icon: Wrench,
    title: "Dismantling & depopulation",
    body: "Manual dismantling lines and depopulator machines strip components and remove solder-mounted parts from PCBs.",
  },
  {
    icon: Cog,
    title: "Shredding",
    body: "Double-shaft shredders reduce dismantled material to a uniform size, making downstream separation possible.",
  },
  {
    icon: Magnet,
    title: "Magnetic separation",
    body: "Magnetic separators pull ferrous metal — the largest fraction by weight — out of the shredded stream first.",
  },
  {
    icon: Wind,
    title: "Air & electrostatic separation",
    body: "Air separators split materials by density (up to 99% separation on well-differentiated fractions), while electrostatic separators use conductivity to split remaining metal from plastic and fibre.",
  },
  {
    icon: Droplets,
    title: "Dust control & effluent treatment",
    body: "Dust collectors and an effluent treatment plant (ETP) handle particulates and wastewater before anything leaves the site.",
  },
];

const machinerySpecs = [
  {
    icon: Wrench,
    name: "Dismantling line",
    note: "Manual/semi-automated strip-down of casings, batteries, and boards before shredding.",
  },
  {
    icon: Cog,
    name: "Double-shaft shredder",
    note: "Handles mixed cable, PCB, and casing scrap; throughput scales from ~200 kg/hr upward.",
  },
  {
    icon: Magnet,
    name: "Magnetic separator",
    note: "Recovers ferrous metal (iron/steel) from the shredded stream ahead of finer sorting.",
  },
  {
    icon: Wind,
    name: "Air separator",
    note: "Density-based sorting; effective on materials with a large density gap between fractions.",
  },
  {
    icon: Zap,
    name: "Electrostatic separator",
    note: "Splits conductive metal from non-conductive plastic and fibre inside a high-voltage field.",
  },
  {
    icon: Droplets,
    name: "Dust collector & ETP",
    note: "Captures particulate emissions and treats process wastewater before discharge.",
  },
];

const approvals = [
  { icon: ShieldCheck, label: "SPCB CTE/CTO" },
  { icon: Building2, label: "CPCB Authorisation" },
  { icon: Flame, label: "Fire NOC" },
  { icon: FileCheck2, label: "Factory License" },
  { icon: Recycle, label: "Hazardous Waste Approval" },
];

const opsSchedules: Record<string, string[]> = {
  Daily: [
    "Weigh and log incoming scrap against purchase records",
    "Check shredder blades and separator belts before the first run",
    "Monitor dust-collector filters and ETP inlet readings",
    "Record recovered-material output by category",
  ],
  Weekly: [
    "Reconcile recovered-material stock against sales dispatch",
    "Inspect PPE stock and safety-signage condition",
    "Clean and calibrate magnetic and electrostatic separators",
    "Review near-miss and incident log with floor supervisors",
  ],
  Monthly: [
    "File CPCB portal returns for the recycling period",
    "Audit hazardous-waste storage against authorised limits",
    "Service conveyor motors and shredder gearboxes",
    "Reconcile EPR certificate generation against actual throughput",
  ],
};

const audiences = [
  {
    icon: Factory,
    title: "Producers & Brand Owners",
    body: "Understand the machinery and process a recycler needs in place before you rely on their throughput claims.",
  },
  {
    icon: Recycle,
    title: "Recyclers & Processors",
    body: "Benchmark your machinery stack and daily operating discipline against what a well-run line actually looks like.",
  },
  {
    icon: Users,
    title: "PROs & Aggregators",
    body: "Get a working vocabulary for the equipment and process behind the recyclers you route member volumes to.",
  },
];

const faqs = [
  {
    q: "Do I need every machine on day one?",
    a: "No. Many operators start with manual dismantling and a shredder, then add magnetic and air separation as volumes justify the investment — the Green Permits cost tiers reflect exactly this staged path.",
  },
  {
    q: "What's the realistic timeline to get a plant running?",
    a: "Setup typically takes three to six months from site readiness to commissioning, largely driven by SPCB/CPCB inspection scheduling rather than machinery lead time.",
  },
  {
    q: "Why does electrostatic separation matter for PCBs?",
    a: "PCBs mix conductive metal with non-conductive plastic and fibre at a very fine scale after shredding — electrostatic separation, which sorts by conductivity in a high-voltage field, is what makes clean metal recovery possible at that scale.",
  },
  {
    q: "What's the single biggest operational risk?",
    a: "Feedstock inconsistency. Machinery is tuned to expected input; scrap that's poorly sorted before it reaches the shredder degrades separation efficiency across the whole line.",
  },
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                                */
/* ------------------------------------------------------------------ */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brandGreen/30 bg-brandGreen/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brandGreen">
      <Cog className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                       */
/* ------------------------------------------------------------------ */
export default function BuyEWasteMachineryBlog() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSchedule, setActiveSchedule] = useState<
    "Daily" | "Weekly" | "Monthly"
  >("Daily");

  return (
    <div className="relative w-full bg-background">
      <style>{`
        @keyframes pulse-down {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .flow-pulse {
          animation: pulse-down 4s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .flow-pulse { animation: none; }
        }
      `}</style>

      {/* Extra clearance so a fixed/pre-built navbar never collides with content */}
      <div className="pt-24 md:pt-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-8">
          {/* ============================================================ */}
          {/* MAIN CONTENT COLUMN                                          */}
          {/* ============================================================ */}
          <Seo
            title="Buy E-Waste: Machinery, Setup & Operations Guide"
            description="Discover the essential machinery, facility setup, operational processes, and compliance requirements for starting a successful e-waste buying business in India. Learn best practices to improve efficiency, profitability, and regulatory compliance."
            keywords={[
              "Buy E-Waste",
              "E-Waste Machinery",
              "E-Waste Business Setup",
              "E-Waste Operations",
              "Electronic Waste Management",
              "E-Waste Collection Center",
              "E-Waste Recycling Equipment",
              "E-Waste Processing",
              "E-Waste Business",
              "Waste Management Machinery",
              "CPCB E-Waste Compliance",
              "E-Waste Infrastructure",
              "Recycling Plant Setup",
              "E-Waste Business India",
              "Circular Economy",
              "What machinery is required for an e-waste business?",
              "How to set up an e-waste buying business?",
              "How to start an e-waste collection center?",
              "Essential equipment for e-waste management",
              "How to operate an e-waste business efficiently?",
              "E-waste facility setup guide",
              "How to manage e-waste operations?",
              "Best machinery for e-waste processing",
              "E-waste business setup cost in India",
              "E-waste operations and compliance guide",
            ]}
            url="https://eprnexuss.com/blog/buy-e-waste-machinery"
            type="article"
          />
          <main className="min-w-0">
            {/* 1. HERO — dark industrial panel with floating spec card */}
            <section className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 sm:px-10 sm:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
                  color: "hsl(var(--background))",
                }}
              />
              <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="animate-fade-in">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brandGreen/40 bg-brandGreen/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brandGreen">
                    <Cog className="h-3.5 w-3.5" />
                    Machinery, Setup &amp; Operations Guide
                  </span>
                  <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-background sm:text-5xl">
                    What it actually takes to{" "}
                    <span className="bg-gradient-to-r from-brandGreen to-primary bg-clip-text text-transparent">
                      run the line
                    </span>
                  </h1>
                  <p className="mt-6 max-w-xl text-lg text-background/70">
                    A grounded look at the machinery, process flow, and daily
                    operating discipline behind buying and processing e-waste
                    scrap — built for producers, recyclers, and PROs.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="#process"
                      className="inline-flex items-center gap-2 rounded-full bg-brandGreen px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:opacity-90"
                    >
                      Walk the process line
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <span className="inline-flex items-center gap-2 text-sm text-background/60">
                      <Clock className="h-4 w-4" />
                      Full deep-dive guide in progress
                    </span>
                  </div>
                </div>

                <Reveal delay={100}>
                  <div className="rounded-2xl border border-background/10 bg-background/5 p-5 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-wider text-background/50">
                      Entry-point spec
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="rounded-xl bg-brandGreen/15 p-2.5 text-brandGreen">
                        <Gauge className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-display text-2xl font-semibold text-background">
                          ₹15L–₹5Cr+
                        </p>
                        <p className="text-xs text-background/50">
                          Manual → fully automated setup cost
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 h-px bg-background/10" />
                    <div className="mt-4 flex items-center gap-3">
                      <div className="rounded-xl bg-primary/15 p-2.5 text-primary">
                        <CalendarClock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-display text-2xl font-semibold text-background">
                          3–6 months
                        </p>
                        <p className="text-xs text-background/50">
                          Typical setup-to-commissioning timeline
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* 2. SETUP COST TIERS — horizontal bar chart */}
            <section className="mt-16">
              <Reveal>
                <SectionEyebrow>Choosing your entry point</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Three ways to start, three cost floors
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Automation level is the single biggest lever on setup cost —
                  and the biggest lever on how much metal you actually recover
                  per tonne.
                </p>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-8 rounded-2xl border border-border bg-card p-4 sm:p-6"
              >
                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={setupTiers}
                      layout="vertical"
                      margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        horizontal={false}
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        type="number"
                        tick={{
                          fill: "hsl(var(--muted-foreground))",
                          fontSize: 12,
                        }}
                        axisLine={{ stroke: "hsl(var(--border))" }}
                        tickLine={false}
                        unit="L"
                      />
                      <YAxis
                        dataKey="tier"
                        type="category"
                        width={130}
                        tick={{
                          fill: "hsl(var(--muted-foreground))",
                          fontSize: 12,
                        }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        cursor={{ fill: "hsl(var(--muted))" }}
                        formatter={(v: number) => [
                          `₹${v} lakh${v >= 500 ? "+" : ""}`,
                          "Setup cost",
                        ]}
                        contentStyle={{
                          background: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.75rem",
                          color: "hsl(var(--popover-foreground))",
                          fontSize: "0.85rem",
                        }}
                      />
                      <Bar dataKey="cost" radius={[0, 8, 8, 0]}>
                        {setupTiers.map((_, i) => (
                          <Cell
                            key={i}
                            fill={i === 2 ? "#5AC361" : "hsl(var(--primary))"}
                            fillOpacity={i === 2 ? 1 : 0.4 + i * 0.2}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Info className="h-3.5 w-3.5" />
                  Source: Green Permits, "E-Waste Recycling Plant Cost in India"
                  (2025). Figures in ₹ lakh; fully automated setups commonly
                  exceed ₹5 crore.
                </p>
              </Reveal>
            </section>

            {/* 3. PROCESS FLOW — animated vertical line, signature element */}
            <section id="process" className="mt-20">
              <Reveal>
                <SectionEyebrow>The process line</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  From incoming scrap to sorted material
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Six stages, in order — each one depends on the last being done
                  properly, which is why sorting at intake matters as much as
                  the machinery further down the line.
                </p>
              </Reveal>

              <div className="relative mt-10 pl-10">
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-border">
                  <div className="flow-pulse absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-brandGreen shadow-[0_0_10px_2px] shadow-brandGreen/50" />
                </div>
                <div className="space-y-6">
                  {processFlow.map((step, i) => (
                    <Reveal key={step.title} delay={i * 70}>
                      <div className="relative">
                        <span className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-card ring-2 ring-border">
                          <step.icon className="h-4 w-4 text-brandGreen" />
                        </span>
                        <div className="rounded-2xl border border-border bg-card p-5">
                          <h3 className="font-display text-lg font-semibold text-foreground">
                            {i + 1}. {step.title}
                          </h3>
                          <p className="mt-1.5 text-sm text-muted-foreground">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. MACHINERY SPEC CARDS */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>The core machinery</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Six machines behind every process stage
                </h2>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {machinerySpecs.map((m, i) => (
                  <Reveal key={m.name} delay={i * 60}>
                    <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brandGreen/40 hover:shadow-md">
                      <div className="w-fit rounded-xl bg-primary/10 p-2.5 text-primary">
                        <m.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {m.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{m.note}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 5. MACHINERY PRICE VS CAPACITY — bar chart */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Sizing your shredder</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Price scales with throughput, not linearly
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Doubling shredder capacity doesn't double the price tag —
                  which is exactly why right-sizing your first machine against
                  real (not hoped-for) volumes matters.
                </p>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-8 rounded-2xl border border-border bg-card p-4 sm:p-6"
              >
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={shredderPricing}
                      margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        dataKey="capacity"
                        tick={{
                          fill: "hsl(var(--muted-foreground))",
                          fontSize: 12,
                        }}
                        axisLine={{ stroke: "hsl(var(--border))" }}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{
                          fill: "hsl(var(--muted-foreground))",
                          fontSize: 12,
                        }}
                        axisLine={false}
                        tickLine={false}
                        label={{
                          value: "₹ lakh",
                          angle: -90,
                          position: "insideLeft",
                          fill: "hsl(var(--muted-foreground))",
                          fontSize: 12,
                        }}
                      />
                      <Tooltip
                        cursor={{ fill: "hsl(var(--muted))" }}
                        formatter={(v: number) => [
                          `₹${v} lakh`,
                          "Indicative price",
                        ]}
                        contentStyle={{
                          background: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.75rem",
                          color: "hsl(var(--popover-foreground))",
                          fontSize: "0.85rem",
                        }}
                      />
                      <Bar
                        dataKey="price"
                        name="Indicative price"
                        fill="hsl(var(--primary))"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Info className="h-3.5 w-3.5" />
                  Source: representative e-waste shredder listings on IndiaMART.
                  Actual pricing varies by vendor, build quality, and
                  specification.
                </p>
              </Reveal>
            </section>

            {/* 6. APPROVALS — compact chip row */}
            <Reveal className="mt-16 rounded-2xl border border-dashed border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-brandGreen" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Before you commission any machinery
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                These approvals need to be in hand — commissioning ahead of them
                is one of the most common causes of forced shutdowns.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {approvals.map((a) => (
                  <span
                    key={a.label}
                    className="inline-flex items-center gap-2 rounded-full bg-secondary/40 px-3.5 py-1.5 text-sm font-medium text-secondary-foreground"
                  >
                    <a.icon className="h-3.5 w-3.5" />
                    {a.label}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* 7. OPERATIONS SCHEDULE — tabbed toggle, new interactive component */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Keeping the line running</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Operations don't stop at commissioning
                </h2>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-8 rounded-2xl border border-border bg-card p-4 sm:p-6"
              >
                <div className="flex flex-wrap gap-2">
                  {(["Daily", "Weekly", "Monthly"] as const).map((tab) => {
                    const Icon =
                      tab === "Daily"
                        ? CalendarDays
                        : tab === "Weekly"
                          ? CalendarRange
                          : CalendarClock;
                    const active = activeSchedule === tab;
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveSchedule(tab)}
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                          active
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-secondary/50"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {tab}
                      </button>
                    );
                  })}
                </div>
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {opsSchedules[activeSchedule].map((task) => (
                    <li
                      key={task}
                      className="flex items-start gap-2.5 rounded-xl bg-muted/50 p-4 text-sm text-foreground"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brandGreen" />
                      {task}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>

            {/* 8. WHO THIS IS FOR */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Built for your role</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Whichever seat you sit in at the table
                </h2>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {audiences.map((a, i) => (
                  <Reveal key={a.title} delay={i * 80}>
                    <div className="flex h-full flex-col gap-3 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent p-6">
                      <div className="w-fit rounded-xl bg-primary/10 p-2.5 text-primary">
                        <a.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {a.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{a.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 9. FAQ */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Common questions</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Before you order machinery
                </h2>
              </Reveal>
              <Reveal
                delay={80}
                className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card"
              >
                {faqs.map((item, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={item.q}>
                      <button
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                        aria-expanded={open}
                      >
                        <span className="font-medium text-foreground">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`grid overflow-hidden transition-all duration-300 ease-out ${
                          open
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="min-h-0 px-6 pb-5 text-sm text-muted-foreground">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Reveal>
            </section>

            {/* 10. CTA BANNER */}
            <Reveal className="mt-16 mb-16">
              <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-12 text-center sm:px-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brandGreen/25 blur-3xl"
                />
                <Leaf className="mx-auto h-8 w-8 text-brandGreen" />
                <h2 className="mt-4 font-display text-2xl font-bold text-background sm:text-3xl">
                  Planning a plant setup right now?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm text-background/70">
                  Our team is finalizing the complete guide to machinery
                  selection and daily operations. Need guidance on a purchase or
                  a process bottleneck today? Reach out and we'll walk you
                  through it directly.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brandGreen px-6 py-3 text-sm font-semibold text-foreground transition hover:opacity-90"
                >
                  Talk to our team
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </main>

          {/* ============================================================ */}
          {/* STICKY CONTACT FORM — right rail, scrolls with the page       */}
          {/* ============================================================ */}
          <aside id="contact" className="hidden lg:block">
            <div className="sticky top-28">
              <StickyContactForm />
            </div>
          </aside>
        </div>

        {/* Mobile fallback so the form is still reachable on small screens */}
        <div className="mx-auto mt-4 max-w-7xl px-4 pb-16 sm:px-6 lg:hidden">
          <StickyContactForm />
        </div>
      </div>
    </div>
  );
}
