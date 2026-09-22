"use client";

import { useEffect, useRef, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Factory,
  FileCheck2,
  FileSpreadsheet,
  Gauge,
  IndianRupee,
  Landmark,
  Leaf,
  MapPin,
  Recycle,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ============================================================================
   UTILITIES
============================================================================ */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={[
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function useCountUp(end: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let frame: number;
    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, end, duration]);
  return value;
}

/* ============================================================================
   ⚠ ILLUSTRATIVE DATA ONLY
   Capex splits, revenue curve, and stats below are placeholders written to
   populate the charts — not sourced from a real DPR, lender template, or
   verified project financials. Swap before publishing.
============================================================================ */

const CAPEX_BREAKDOWN_DATA = [
  { name: "Land &\nCivil Works", value: 32, fill: "hsl(var(--primary))" },
  { name: "Machinery &\nEquipment", value: 41, fill: "#5AC361" },
  {
    name: "Utilities &\nInfrastructure",
    value: 15,
    fill: "hsl(var(--primary))",
  },
  { name: "Working\nCapital", value: 12, fill: "#5AC361" },
];

const REVENUE_PROJECTION_DATA = [
  { year: "Yr 1", revenue: 40 },
  { year: "Yr 2", revenue: 62 },
  { year: "Yr 3", revenue: 85 },
  { year: "Yr 4", revenue: 104 },
  { year: "Yr 5", revenue: 128 },
];

/* ============================================================================
   1. HERO
============================================================================ */

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-[#0B1210] px-6 py-14 text-white sm:px-10 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 animate-[pulse_5s_ease-in-out_infinite] rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brandGreen/15 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-grey-500 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white">
          <FileSpreadsheet className="h-3.5 w-3.5" />
          PROJECT FINANCING · EPR METALS CREDITS
        </div>

        <h1
          className="animate-slide-up mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          EPR Metals Credits:
          <span className="block text-brandGreen">
            Detailed Project Report (DPR) Essentials
          </span>
        </h1>

        <p
          className="animate-slide-up mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          What a lender, investor, or authority actually wants to see in a metal
          scrap recycling DPR — the sections, numbers, and detail that separate
          a fundable report from a rejected one.
        </p>

        <div
          className="animate-slide-up mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#dpr-sections"
            className="inline-flex items-center gap-2 rounded-xl bg-brandGreen px-5 py-3 text-sm font-semibold text-[#0B1210] transition-transform hover:scale-[1.03] hover:shadow-lg hover:shadow-brandGreen/20"
          >
            See What Goes In a DPR
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#faq"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Read the FAQs
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-12 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
        {[
          { icon: Calculator, label: "Financial Modelling" },
          { icon: Factory, label: "Capacity Planning" },
          { icon: Landmark, label: "Lender-Ready Format" },
        ].map((item, i) => (
          <div
            key={item.label}
            className="animate-fade-in flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-5 backdrop-blur-sm"
            style={{ animationDelay: `${320 + i * 100}ms` }}
          >
            <item.icon className="h-6 w-6 text-secondary" />
            <span className="px-1 text-center text-[11px] font-medium text-white/70">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================================
   2. COMING SOON BANNER
============================================================================ */

function ComingSoonBanner() {
  return (
    <Reveal>
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-primary/25 bg-primary/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-3 sm:items-center">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              The full DPR template is on its way
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Our team is finalizing a downloadable DPR template with worked
              financial models and lender-ready formatting. In the meantime,
              this overview and our team can get you moving.
            </p>
          </div>
        </div>
        <a
          href="#contact-form"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brandGreen px-4 py-2.5 text-sm font-semibold text-[#0B1210] transition-transform hover:scale-[1.03]"
        >
          Get Guidance Now
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </Reveal>
  );
}

/* ============================================================================
   3. QUICK STATS BAR
============================================================================ */

function StatItem({
  end,
  suffix,
  label,
  active,
}: {
  end: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const value = useCountUp(end, active);
  return (
    <div className="flex flex-col items-center px-4 py-2 text-center">
      <span className="font-display text-3xl font-bold text-foreground sm:text-4xl">
        {value}
        <span className="text-primary">{suffix}</span>
      </span>
      <span className="mt-1 text-xs text-muted-foreground sm:text-sm">
        {label}
      </span>
    </div>
  );
}

function QuickStatsBar() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="grid grid-cols-2 divide-x divide-y divide-border rounded-2xl border border-border sm:grid-cols-4 sm:divide-y-0"
    >
      <StatItem end={8} suffix="" label="Core DPR Sections" active={visible} />
      <StatItem
        end={5}
        suffix="yr"
        label="Typical Projection Horizon"
        active={visible}
      />
      <StatItem
        end={4}
        suffix=""
        label="Capex Categories to Justify"
        active={visible}
      />
      <StatItem
        end={3}
        suffix=""
        label="Audiences a DPR Must Satisfy"
        active={visible}
      />
    </div>
  );
}

/* ============================================================================
   4. FINANCIAL CHARTS
============================================================================ */

function CapexTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="font-medium text-popover-foreground">
        {String(payload[0].payload.name).replace("\n", " ")}
      </p>
      <p style={{ color: payload[0].payload.fill }}>
        {payload[0].value}% of indicative capex
      </p>
    </div>
  );
}

function RevenueTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="font-medium text-popover-foreground">{label}</p>
      <p style={{ color: "hsl(var(--primary))" }}>
        ₹{payload[0].value}L indicative revenue
      </p>
    </div>
  );
}

function DPRCharts() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Indicative Capex Allocation
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              A rough shape of how project cost typically splits across major
              heads in a scrap recycling facility DPR.
            </p>
          </div>
          <Gauge className="hidden h-8 w-8 shrink-0 text-primary/40 sm:block" />
        </div>
        <div className="h-64 w-full sm:h-72">
          {visible && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={CAPEX_BREAKDOWN_DATA}
                margin={{ top: 8, right: 8, left: 8, bottom: 8 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  className="stroke-border"
                />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: "currentColor" }}
                  className="text-muted-foreground"
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "currentColor" }}
                  className="text-muted-foreground"
                />
                <Tooltip
                  content={<CapexTooltip />}
                  cursor={{ fill: "rgba(90,195,97,0.08)" }}
                />
                <Bar
                  dataKey="value"
                  radius={[6, 6, 0, 0]}
                  animationDuration={1200}
                >
                  {CAPEX_BREAKDOWN_DATA.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Indicative 5-Year Revenue Curve
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              The kind of ramp-up shape lenders expect to see modelled and
              justified, not just asserted.
            </p>
          </div>
          <BarChart3 className="hidden h-8 w-8 shrink-0 text-primary/40 sm:block" />
        </div>
        <div className="h-64 w-full sm:h-72">
          {visible && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={REVENUE_PROJECTION_DATA}
                margin={{ top: 8, right: 8, left: 8, bottom: 8 }}
              >
                <defs>
                  <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="hsl(var(--primary))"
                      stopOpacity={0.35}
                    />
                    <stop
                      offset="100%"
                      stopColor="hsl(var(--primary))"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  className="stroke-border"
                />
                <XAxis
                  dataKey="year"
                  tick={{ fontSize: 12, fill: "currentColor" }}
                  className="text-muted-foreground"
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "currentColor" }}
                  className="text-muted-foreground"
                />
                <Tooltip content={<RevenueTooltip />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  fill="url(#revenueFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <p className="text-xs text-muted-foreground lg:col-span-2">
        * Both charts show illustrative placeholder figures built to demonstrate
        the layout — not actual project financials. Every real DPR needs numbers
        built from your own site, equipment, and market assumptions.
      </p>
    </div>
  );
}

/* ============================================================================
   5. WHAT A DPR ACTUALLY IS
============================================================================ */

const BASICS = [
  {
    icon: FileSpreadsheet,
    title: "More than a business plan",
    text: "A DPR combines technical, financial, and regulatory detail into one document lenders and authorities can act on directly.",
  },
  {
    icon: Calculator,
    title: "Numbers, not just narrative",
    text: "Every claim — capacity, revenue, payback period — needs to trace back to a stated assumption or calculation, not just a round figure.",
  },
  {
    icon: BadgeCheck,
    title: "Built for more than one reader",
    text: "The same DPR typically has to satisfy a bank's credit team, a regulator's compliance check, and your own internal planning.",
  },
];

function WhatIsADPR() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {BASICS.map((item, i) => (
        <Reveal key={item.title} delay={i * 80}>
          <div className="h-full rounded-2xl border border-border bg-card p-5">
            <item.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display text-base font-semibold text-card-foreground">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ============================================================================
   6. CORE DPR SECTIONS — signature step flow
============================================================================ */

type Step = { title: string; detail: string; icon: any };

const DPR_STEPS: Step[] = [
  {
    icon: ClipboardList,
    title: "Executive summary & objectives",
    detail:
      "A concise statement of what the facility does, its capacity, and why it's viable — the section every reader starts with.",
  },
  {
    icon: Users,
    title: "Promoter & organisational background",
    detail:
      "Track record, management structure, and relevant experience that back the project's ability to actually execute.",
  },
  {
    icon: Wrench,
    title: "Technology & process description",
    detail:
      "How scrap moves through the facility — sorting, processing, recovery — described in enough technical detail to be credible.",
  },
  {
    icon: Factory,
    title: "Capacity & machinery plan",
    detail:
      "Installed capacity, equipment list, and utilisation assumptions, matched against the market demand you're targeting.",
  },
  {
    icon: MapPin,
    title: "Site, infrastructure & utilities",
    detail:
      "Land status, layout, power, water, and logistics access — the operational backbone the financial model depends on.",
  },
  {
    icon: IndianRupee,
    title: "Financial projections & means of finance",
    detail:
      "Capex, working capital, revenue, cost structure, and repayment capacity, typically projected over a 5-year horizon.",
  },
  {
    icon: Leaf,
    title: "Environmental & regulatory compliance",
    detail:
      "Consents, authorizations, and pollution-control measures that show the project can legally operate as designed.",
  },
  {
    icon: FileCheck2,
    title: "Implementation schedule & manpower plan",
    detail:
      "A realistic timeline from approval to commissioning, plus the staffing plan needed to run at stated capacity.",
  },
];

function DPRSections() {
  return (
    <ol className="relative space-y-8 pl-2">
      <div className="absolute bottom-2 left-[27px] top-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
      {DPR_STEPS.map((step, i) => (
        <Reveal key={step.title} delay={i * 70}>
          <li className="relative flex gap-5">
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-primary bg-background font-display text-sm font-bold text-primary shadow-sm">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex-1 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40">
              <div className="flex items-center gap-2">
                <step.icon className="h-4 w-4 text-primary" />
                <h4 className="font-display text-sm font-semibold text-foreground sm:text-base">
                  {step.title}
                </h4>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.detail}
              </p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

/* ============================================================================
   7. WHO NEEDS A DPR, AND WHY IT DIFFERS
============================================================================ */

const STAKEHOLDERS = [
  {
    icon: Factory,
    role: "Recyclers & Facility Promoters",
    detail:
      "Need a DPR to secure project financing and regulatory authorization — this is usually the primary DPR audience.",
  },
  {
    icon: Recycle,
    role: "Producers Backing a Facility",
    detail:
      "Sometimes co-invest in or guarantee offtake for a recycling facility, in which case the DPR needs to reflect that commercial arrangement.",
  },
  {
    icon: Landmark,
    role: "Producer Responsibility Organisations",
    detail:
      "May require a DPR from empanelled facilities as part of due diligence before committing volume or credits to them.",
  },
];

function StakeholderRoles() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {STAKEHOLDERS.map((s, i) => (
        <Reveal key={s.role} delay={i * 90}>
          <div className="h-full rounded-2xl border border-border bg-card p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-card-foreground">
              {s.role}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.detail}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ============================================================================
   8. WHERE DPRs GET REJECTED
============================================================================ */

const RISKS = [
  "Revenue projections that aren't tied to a stated capacity, price, or utilisation assumption are the fastest way to lose credibility with a lender.",
  "Technology descriptions copied from a generic template rarely match the actual equipment list, which reviewers do check.",
  "Underestimating working capital needs is one of the most common gaps found during credit appraisal.",
  "Skipping a realistic ramp-up period and projecting full capacity from year one reads as unrealistic to experienced reviewers.",
  "Missing or outdated environmental consent status can stall financing even when the numbers themselves are sound.",
];

function RisksSection() {
  return (
    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">
          Where DPRs Most Often Get Sent Back
        </h3>
      </div>
      <ul className="space-y-3">
        {RISKS.map((p, i) => (
          <Reveal key={p} delay={i * 70}>
            <li className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              {p}
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================================
   FAQ
============================================================================ */

const FAQS = [
  {
    q: "Is a DPR the same thing as a business plan?",
    a: "They overlap, but a DPR is typically more technical and numbers-heavy — built to satisfy a lender's or regulator's specific evaluation criteria rather than just tell a growth story.",
  },
  {
    q: "How far out should financial projections go?",
    a: "Five years is a common horizon for a recycling facility DPR, long enough to show the ramp-up curve and repayment capacity without projecting too far into uncertain territory.",
  },
  {
    q: "Do I need a DPR if I'm not seeking a loan?",
    a: "Often yes — PROs and larger producers may request one as part of due diligence, even when external financing isn't involved.",
  },
  {
    q: "Who typically prepares a DPR — internal team or a consultant?",
    a: "Both approaches are common. What matters more than who writes it is whether the technical and financial detail is defensible under scrutiny.",
  },
  {
    q: "Is this the complete, final DPR guide?",
    a: "This is a working overview while our team finalizes a downloadable template with worked examples. Reach out for guidance tailored to your project in the meantime.",
  },
];

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display text-sm font-semibold text-foreground sm:text-base">
          {q}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {FAQS.map((f, i) => (
        <Reveal key={f.q} delay={i * 60}>
          <FAQItem
            q={f.q}
            a={f.a}
            isOpen={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        </Reveal>
      ))}
    </div>
  );
}

/* ============================================================================
   FINAL CTA
============================================================================ */

function FinalCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-[#0B1210] px-6 py-12 text-center text-white sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-xl ">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-secondary border border-white">
          <Banknote className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl font-bold sm:text-3xl">
          Need a DPR for Your Metal EPR Project?
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
           Talk to our team now for guidance
          tailored to your project.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 rounded-xl bg-brandGreen px-5 py-3 text-sm font-semibold text-[#0B1210] transition-transform hover:scale-[1.03]"
          >
            Talk to Our Team
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   SECTION WRAPPER
============================================================================ */

function BlogSection({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {intro}
          </p>
        )}
      </Reveal>
      <div className="mt-8">{children}</div>
    </section>
  );
}

/* ============================================================================
   PAGE
============================================================================ */

export default function EPRMetalsDPREssentials() {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 lg:pt-32">
      <div className="container mx-auto px-1 pb-20 sm:px-6 lg:px-2">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-4">
          {/* MAIN CONTENT — min-w-0 stops wide children (charts) from
              stretching this column and throwing off the sticky sidebar
              next to it */}
          <main className="min-w-0 space-y-16 sm:space-y-20">
            <Seo
              title="EPR Metals Credits: Detailed Project Report (DPR) Essentials"
              description="Learn how to prepare a Detailed Project Report (DPR) for EPR Metals Credits. Explore project planning, compliance requirements, financial projections, infrastructure, risk assessment, and operational strategies for successful Metal EPR credit management."
              keywords={[
                "EPR Metals Credits",
                "Metal EPR DPR",
                "Detailed Project Report",
                "Metal EPR Project Report",
                "Metal Credit Business Plan",
                "Metal EPR Compliance",
                "Metal Waste Management",
                "Extended Producer Responsibility",
                "Metal Recycling",
                "Metal Credit Trading",
                "CPCB EPR Registration",
                "Metal EPR Registration",
                "Project Feasibility Report",
                "Financial Projections",
                "Environmental Compliance",
                "How to prepare a Metal EPR DPR?",
                "What is included in a Metal EPR project report?",
                "How to create a Metal EPR business plan?",
                "Documents required for a Metal EPR DPR",
                "Why is a DPR important for Metal EPR projects?",
                "Metal EPR project feasibility report",
                "Metal EPR business planning guide",
                "Best practices for a Metal EPR DPR",
                "Metal credit project report format",
                "Metal EPR implementation guide",
              ]}
              url="https://eprnexuss.com/blog/epr-metals-dpr"
              type="article"
            />
            <HeroSection />

            {/* <ComingSoonBanner /> */}

            <QuickStatsBar />

            {/* mobile-only contact form, appears inline (not sticky) —
                sits after the intro content, ahead of the long-form
                sections, so it never overlaps anything below it */}
            <div id="contact-form" className="lg:hidden">
              <StickyContactForm />
            </div>

            {/* <BlogSection
              id="financials"
              eyebrow="The Numbers"
              title="What the Financial Section Needs to Show"
              intro="A capex breakdown and a revenue curve — the two charts every reviewer looks for first."
            >
              <DPRCharts />
            </BlogSection> */}

            <BlogSection
              id="basics"
              eyebrow="The Basics"
              title="What a DPR Actually Is"
            >
              <WhatIsADPR />
            </BlogSection>

            <BlogSection
              id="dpr-sections"
              eyebrow="Section by Section"
              title="The Core Sections Every DPR Needs"
            >
              <DPRSections />
            </BlogSection>

            <BlogSection
              id="stakeholders"
              eyebrow="Who's Involved"
              title="Who Needs a DPR, and Why It Differs"
            >
              <StakeholderRoles />
            </BlogSection>

            <BlogSection
              id="risks"
              eyebrow="Go In Informed"
              title="Where DPRs Most Often Get Sent Back"
            >
              <RisksSection />
            </BlogSection>

            <BlogSection
              id="faq"
              eyebrow="Quick Answers"
              title="Frequently Asked Questions"
            >
              <FAQSection />
            </BlogSection>

            <Reveal>
              <FinalCTA />
            </Reveal>

            {/* <p className="text-xs leading-relaxed text-muted-foreground">
              This overview is for general informational purposes and does not
              reflect a verified or lender-approved DPR format — it isn't
              financial, legal, or investment advice. Figures shown are
              illustrative placeholders. Confirm current requirements and build
              your actual financial model with your team and a qualified
              professional before submission.
            </p> */}
          </main>

          {/* SIDEBAR — sticky contact form, nothing else in this column,
              scrolls with the page, and clears the fixed navbar via the
              top-6 offset plus the page-level pt-24/28/32 above */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 max-h-[calc(100vh-3rem)] overflow-y-auto pr-1">
              <StickyContactForm />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
