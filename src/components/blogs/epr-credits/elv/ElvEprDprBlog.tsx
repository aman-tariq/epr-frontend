"use client";

import { useEffect, useRef, useState } from "react";
import {
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
  Banknote,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Factory,
  FileCheck2,
  FileText,
  Flame,
  Gauge,
  Landmark,
  MapPin,
  ShieldCheck,
  Sparkles,
  Timer,
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
   SHARED DATA
============================================================================ */

const CAPEX_DATA = [
  { name: "Land &\nCivil Work", value: 35, fill: "#5AC361" },
  { name: "Machinery &\nDepollution Eqpt.", value: 30, fill: "#3E9A47" },
  { name: "Pollution\nControl Systems", value: 20, fill: "#2F853A" },
  { name: "Working Capital\n& Contingency", value: 15, fill: "#22702D" },
];

/* ============================================================================
   1. HERO SECTION
============================================================================ */

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-[#0B1210] px-6 py-14 sm:px-10 sm:py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#5AC361 1px, transparent 1px), linear-gradient(90deg, #5AC361 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brandGreen/20 blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brandGreen/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-brandGreen/30 bg-brandGreen/10 px-4 py-1.5 text-xs font-medium tracking-wide text-brandGreen">
          <FileText className="h-3.5 w-3.5" />
          PROJECT PLANNING · EPR END-OF-LIFE VEHICLE CREDITS
        </div>

        <h1
          className="animate-slide-up mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          EPR ELV Credits:
          <span className="block text-brandGreen">
            Detailed Project Report (DPR) Essentials
          </span>
        </h1>

        <p
          className="animate-slide-up mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          The DPR is the document every approval, bank, and investor will judge
          your ELV recycling plant by. Here's what a report built to hold up
          actually needs to cover.
        </p>

        <div
          className="animate-slide-up mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#dpr-essentials"
            className="inline-flex items-center gap-2 rounded-xl bg-brandGreen px-5 py-3 text-sm font-semibold text-[#0B1210] transition-transform hover:scale-[1.03] hover:shadow-lg hover:shadow-brandGreen/20"
          >
            See the DPR Checklist
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

      {/* Illustrative graphic placeholder — swap with a licensed photo
          at /images/epr-elv-dpr-hero.jpg for production use */}
      <div className="relative z-10 mt-12 grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
        {[
          { icon: FileText, label: "Technical Design" },
          { icon: Calculator, label: "Financial Modelling" },
          { icon: ShieldCheck, label: "Regulatory Mapping" },
        ].map((item, i) => (
          <div
            key={item.label}
            className="animate-fade-in flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-5 backdrop-blur-sm"
            style={{ animationDelay: `${320 + i * 100}ms` }}
          >
            <item.icon className="h-6 w-6 text-brandGreen" />
            <span className="text-[11px] font-medium text-white/70 text-center px-1">
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
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-brandGreen/25 bg-brandGreen/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-3 sm:items-center">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brandGreen/15 text-brandGreen">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              The full DPR deep-dive is on its way
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Our team is finalizing a downloadable DPR template with worked
              financial models. In the meantime, this overview and our team can
              get you moving.
            </p>
          </div>
        </div>
        <a
          href="#contact"
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
    <div className="flex flex-col items-center text-center px-4 py-2">
      <span className="font-display text-3xl font-bold text-foreground sm:text-4xl">
        {value}
        <span className="text-brandGreen">{suffix}</span>
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
      className="grid grid-cols-2 divide-x divide-y divide-border rounded-2xl border border-border bg-card sm:grid-cols-4 sm:divide-y-0"
    >
      <StatItem
        end={9}
        suffix=""
        label="Core Sections in a Bankable DPR"
        active={visible}
      />
      <StatItem
        end={10}
        suffix="L"
        label="Bank Guarantee (₹, Reported)"
        active={visible}
      />
      <StatItem
        end={60}
        suffix="d"
        label="Single-Window Review Timeline"
        active={visible}
      />
      <StatItem
        end={10}
        suffix="yr"
        label="RVSF Registration Validity"
        active={visible}
      />
    </div>
  );
}

/* ============================================================================
   4. WHY THE DPR MATTERS (stakeholder cards)
============================================================================ */

const WHY_IT_MATTERS = [
  {
    icon: Factory,
    title: "For Recyclers Setting Up an RVSF",
    detail:
      "The DPR is the technical and financial backbone of your registration file — site layout, capacity, and pollution-control design all trace back to it.",
  },
  {
    icon: Banknote,
    title: "For Producers Backing Capacity",
    detail:
      "Producers evaluating a tie-up or investment in RVSF capacity read the DPR first — it's the fastest way to judge whether a facility can actually deliver certificates at scale.",
  },
  {
    icon: Users,
    title: "For PROs Structuring Deals",
    detail:
      "A well-built DPR gives a PRO the mass-balance and capacity data needed to model how much certificate supply a facility can realistically commit to.",
  },
];

function WhyItMattersSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {WHY_IT_MATTERS.map((a, i) => (
        <Reveal key={a.title} delay={i * 90}>
          <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brandGreen/40 hover:shadow-lg hover:shadow-brandGreen/5">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brandGreen/10 text-brandGreen transition-transform group-hover:scale-110">
              <a.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-base font-semibold text-foreground">
              {a.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {a.detail}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ============================================================================
   5. CAPEX ALLOCATION CHART
============================================================================ */

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="font-medium text-popover-foreground">
        {label?.replace("\n", " ")}
      </p>
      <p className="text-brandGreen">{payload[0].value}% of indicative capex</p>
    </div>
  );
}

function CapexChart() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            Typical Capex Allocation
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            An illustrative split most DPRs for ELV recycling plants land
            around, before financing and working-capital terms are factored in.
          </p>
        </div>
        <Calculator className="hidden h-8 w-8 shrink-0 text-brandGreen/40 sm:block" />
      </div>

      <div className="h-72 w-full sm:h-80">
        {visible && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={CAPEX_DATA}
              margin={{ top: 8, right: 8, left: -16, bottom: 8 }}
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
                interval={0}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "currentColor" }}
                className="text-muted-foreground"
                label={{
                  value: "% of Capex",
                  angle: -90,
                  position: "insideLeft",
                  fontSize: 11,
                }}
              />
              <Tooltip
                content={<ChartTooltip />}
                cursor={{ fill: "rgba(90,195,97,0.08)" }}
              />
              <Bar
                dataKey="value"
                radius={[6, 6, 0, 0]}
                animationDuration={1200}
              >
                {CAPEX_DATA.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        * Illustrative planning split, not a fixed rule — actual allocation
        shifts with land cost, state incentives, and depollution equipment
        specification.
      </p>
    </div>
  );
}

/* ============================================================================
   6. DPR ESSENTIALS (signature checklist/flow element)
============================================================================ */

type Step = { title: string; detail: string; icon: any };

function EssentialSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative space-y-8 pl-2">
      <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-brandGreen via-brandGreen/40 to-transparent" />
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 80}>
          <li className="relative flex gap-5">
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-brandGreen bg-background font-display text-sm font-bold text-brandGreen shadow-sm">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex-1 rounded-2xl border border-border bg-card p-5 transition-all hover:border-brandGreen/40">
              <div className="flex items-center gap-2">
                <step.icon className="h-4 w-4 text-brandGreen" />
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

const DPR_STEPS: Step[] = [
  {
    icon: FileText,
    title: "Executive Summary & Promoter Profile",
    detail:
      "Promoter background, business rationale, and a snapshot of the market opportunity — the section a bank or partner reads first.",
  },
  {
    icon: MapPin,
    title: "Site & Land Documentation",
    detail:
      "Location, land area, ownership or lease proof, zoning classification, and buffer-distance compliance, backed by an approved layout plan.",
  },
  {
    icon: Wrench,
    title: "Technical Process Design",
    detail:
      "The depollution line, dismantling bays, and segregation zones for steel, aluminium, plastic, and rubber, with equipment specifications for each.",
  },
  {
    icon: Gauge,
    title: "Capacity & Mass Balance",
    detail:
      "Annual ELV intake target and expected recovered-material output by category — the numbers that ultimately size your EPR certificate potential.",
  },
  {
    icon: ShieldCheck,
    title: "Environmental & Pollution Control Plan",
    detail:
      "Effluent treatment, hazardous waste storage design, and emission control — this section feeds almost directly into your CTE application.",
  },
  {
    icon: Calculator,
    title: "Financial Projections",
    detail:
      "Capex breakup, working capital, revenue streams (scrap sale, service fees, certificate income), break-even point, and ROI.",
  },
  {
    icon: Users,
    title: "Manpower & Organizational Plan",
    detail:
      "Technical staff, safety personnel, and a named compliance officer, plus a training plan for depollution and hazardous-material handling.",
  },
  {
    icon: ClipboardList,
    title: "Regulatory Compliance Roadmap",
    detail:
      "A mapped list of every approval the DPR needs to support — CTE, CTO, RVSF registration, hazardous waste authorization, and Fire NOC.",
  },
  {
    icon: Timer,
    title: "Implementation Timeline",
    detail:
      "A phased construction-to-commissioning schedule aligned with the single-window review clock, so approvals and construction don't stall each other.",
  },
];

/* ============================================================================
   7. LINKED APPROVALS
============================================================================ */

const LINKED_APPROVALS = [
  {
    icon: ShieldCheck,
    title: "Consent to Establish (CTE)",
    detail:
      "Your DPR's site, layout, and pollution-control design is what the SPCB reviews for CTE.",
  },
  {
    icon: FileCheck2,
    title: "Consent to Operate (CTO)",
    detail:
      "Trial-run and commissioning data compared against your DPR's stated design capacity.",
  },
  {
    icon: Landmark,
    title: "RVSF Registration (MoRTH)",
    detail:
      "The DPR is a core document in the RVSF application filed through the single-window system.",
  },
  {
    icon: AlertTriangle,
    title: "Hazardous Waste Authorization",
    detail:
      "Your DPR's waste-handling section underpins the authorization application under the HOWM Rules, 2016.",
  },
  {
    icon: Flame,
    title: "Fire NOC",
    detail:
      "Depollution and fuel-storage zones described in the DPR must satisfy the Fire Department's layout norms.",
  },
];

function LinkedApprovalsSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {LINKED_APPROVALS.map((c, i) => (
        <Reveal key={c.title} delay={i * 70}>
          <div className="h-full rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-md">
            <c.icon className="h-5 w-5 text-brandGreen" />
            <h4 className="mt-3 font-display text-sm font-semibold text-foreground">
              {c.title}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {c.detail}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ============================================================================
   8. WHERE DPRs FALL SHORT
============================================================================ */

const GAPS = [
  "Land and layout documents that don't match the pollution-control design later submitted for CTE, forcing revisions.",
  "Mass-balance figures that don't reconcile with the plant's stated dismantling capacity.",
  "Financial projections built on generic scrap prices instead of regional market rates.",
  "No depollution-zone or fire-safety buffer designed into the layout from the start.",
  "ISO 9001 / 14001 / 45001 certification left out of the timeline, even though it's typically due within 12 months of starting operations.",
];

function GapsSection() {
  return (
    <div className="overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">
          Where DPRs Commonly Fall Short
        </h3>
      </div>
      <ul className="space-y-3">
        {GAPS.map((p, i) => (
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
   9. FAQ SECTION
============================================================================ */

const FAQS = [
  {
    q: "Who is qualified to prepare the DPR?",
    a: "It's typically prepared by a Chartered Accountant or another qualified technical/financial expert, since the report needs to hold up to bank and investor scrutiny as well as regulatory review.",
  },
  {
    q: "Does the DPR replace the CTE application?",
    a: "No — the DPR feeds into it. The effluent, emissions, and hazardous-waste sections of your DPR are what the SPCB scrutinizes when you file for CTE.",
  },
  {
    q: "How much land should the DPR plan for?",
    a: "Reported requirements vary widely, from a couple of acres up to 5–10 acres depending on capacity and state-specific norms — confirm the current threshold for the state you're building in.",
  },
  {
    q: "Do I still need a DPR if I already hold SPCB consents?",
    a: "Yes. Most RVSF registration and financing applications require a DPR regardless of where you stand on environmental consents — it's a separate document serving a separate purpose.",
  },
  {
    q: "Is this the complete, final DPR guide?",
    a: "This is a working overview while our team finalizes a full deep-dive with a downloadable DPR template and worked financial models. Reach out for current, situation-specific guidance in the meantime.",
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
          className={`h-4 w-4 shrink-0 text-brandGreen transition-transform duration-300 ${
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
   10. FINAL CTA
============================================================================ */

function FinalCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-[#0B1210] px-6 py-12 text-center text-white sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brandGreen/20 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-xl">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brandGreen/15 text-brandGreen">
          <FileText className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl font-bold sm:text-3xl">
          The Full DPR Deep-Dive Is Coming
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
          We're finalizing a downloadable DPR template with worked financial
          models and a state-wise land and layout checklist. Talk to our team
          now for guidance tailored to your project.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
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
        <p className="text-xs font-semibold uppercase tracking-wider text-brandGreen">
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

export default function EPRELVCreditsDPREssentials() {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 lg:pt-32">
      <div className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
          {/* MAIN CONTENT */}
          <main className="min-w-0 space-y-16 sm:space-y-20">
            <Seo
              title="EPR ELV Credits: Detailed Project Report (DPR) Essentials"
              description="Learn how to prepare a Detailed Project Report (DPR) for EPR ELV Credits. Explore project planning, compliance requirements, financial projections, infrastructure, feasibility, and operational strategies for successful ELV EPR credit management."
              keywords={[
                "EPR ELV Credits",
                "ELV EPR DPR",
                "Detailed Project Report",
                "ELV Project Report",
                "ELV Business Plan",
                "End-of-Life Vehicle Credits",
                "ELV EPR Compliance",
                "Vehicle Recycling",
                "Vehicle Scrappage",
                "Automobile Recycling",
                "Extended Producer Responsibility",
                "CPCB EPR Registration",
                "Project Feasibility Report",
                "Financial Projections",
                "Environmental Compliance",
                "How to prepare an ELV EPR DPR?",
                "What is included in an ELV project report?",
                "How to create an ELV business plan?",
                "Documents required for an ELV DPR",
                "Why is a DPR important for ELV projects?",
                "ELV project feasibility report",
                "ELV EPR business planning guide",
                "Best practices for an ELV DPR",
                "ELV credit project report format",
                "ELV EPR implementation guide",
              ]}
              url="https://eprnexuss.com/blog/epr-elv-dpr"
              type="article"
            />
            <HeroSection />

            <ComingSoonBanner />

            <QuickStatsBar />

            {/* mobile-only contact form, appears inline (not sticky) */}
            <div className="lg:hidden">
              <StickyContactForm />
            </div>

            <BlogSection
              id="why-it-matters"
              eyebrow="Getting Oriented"
              title="Why the DPR Is the Document That Decides Everything Else"
              intro="Before a single approval is filed, the DPR sets the technical and financial baseline every reviewer, banker, and partner will measure your project against."
            >
              <WhyItMattersSection />
            </BlogSection>

            <BlogSection
              id="capex"
              eyebrow="Planning the Numbers"
              title="What a Typical Capex Plan Looks Like"
              intro="Financial projections are one of the sections reviewers scrutinize hardest. Here's an indicative allocation to sanity-check your own numbers against."
            >
              <CapexChart />
            </BlogSection>

            <BlogSection
              id="dpr-essentials"
              eyebrow="The Core Document"
              title="The 9 Sections Every DPR Needs"
              intro="From promoter background to implementation timeline, here's what a report built to survive regulatory and financial scrutiny actually contains."
            >
              <EssentialSteps steps={DPR_STEPS} />
            </BlogSection>

            <BlogSection
              id="linked-approvals"
              eyebrow="Where It Feeds In"
              title="How the DPR Connects to Your Approvals"
              intro="A strong DPR isn't a standalone document — its sections directly support the applications that follow it."
            >
              <LinkedApprovalsSection />
            </BlogSection>

            <BlogSection
              id="gaps"
              eyebrow="Learn From Others"
              title="Where DPRs Commonly Fall Short"
            >
              <GapsSection />
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

            <p className="text-xs leading-relaxed text-muted-foreground">
              This overview is for general informational purposes and reflects
              publicly reported practice around DPRs for ELV recycling
              facilities in India — it isn't legal, financial, or investment
              advice. Land, capacity, and financial norms vary by state and
              project scale, so confirm current requirements with your state
              authorities and a qualified compliance or financial professional
              before acting.
            </p>
          </main>

          {/* SIDEBAR */}
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
