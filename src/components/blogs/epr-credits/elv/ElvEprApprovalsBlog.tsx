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
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock,
  Download,
  Droplets,
  Factory,
  FileCheck2,
  FileWarning,
  Flame,
  Gauge,
  Landmark,
  Layers,
  MapPin,
  Recycle,
  Scale,
  ShieldCheck,
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

const TIMELINE_DATA = [
  { name: "CTE", days: 45, fill: "#5AC361" },
  { name: "Hazardous\nWaste Auth.", days: 30, fill: "#4CAE54" },
  { name: "RVSF\nRegistration", days: 30, fill: "#3E9A47" },
  { name: "Fire NOC", days: 20, fill: "#2F853A" },
  { name: "CTO", days: 60, fill: "#22702D" },
];

/* ============================================================================
   1. HERO SECTION
============================================================================ */

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-[#0B1210] px-6 py-14 sm:px-10 sm:py-20 text-white">
      {/* ambient background elements */}
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
          <Recycle className="h-3.5 w-3.5" />
          COMPLIANCE ROADMAP · END-OF-LIFE VEHICLE RECYCLING
        </div>

        <h1
          className="animate-slide-up mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          ELV Recycling Plant Approvals:
          <span className="block text-brandGreen">
            Your Complete Compliance Roadmap
          </span>
        </h1>

        <p
          className="animate-slide-up mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          From site selection to Consent to Establish (CTE), Consent to Operate
          (CTO), and every environmental clearance in between — a practical,
          stage-by-stage guide for setting up a compliant end-of-life vehicle
          recycling facility in India.
        </p>

        <div
          className="animate-slide-up mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#cte-roadmap"
            className="inline-flex items-center gap-2 rounded-xl bg-brandGreen px-5 py-3 text-sm font-semibold text-[#0B1210] transition-transform hover:scale-[1.03] hover:shadow-lg hover:shadow-brandGreen/20"
          >
            View the Roadmap
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

      {/* Illustrative plant graphic placeholder — swap with a licensed photo
          at /images/elv-plant-hero.jpg for production use */}
      <div className="relative z-10 mt-12 grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
        {[
          { icon: Factory, label: "Site & Layout" },
          { icon: ShieldCheck, label: "CTE / CTO" },
          { icon: Recycle, label: "Depollution" },
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
   2. QUICK STATS BAR
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
        end={2}
        suffix=""
        label="Core Consents (CTE + CTO)"
        active={visible}
      />
      <StatItem
        end={6}
        suffix="+"
        label="Clearances Typically Involved"
        active={visible}
      />
      <StatItem
        end={90}
        suffix="+"
        label="Days, Site-to-CTO (indicative)"
        active={visible}
      />
      <StatItem
        end={3}
        suffix=""
        label="Authorities in the Loop"
        active={visible}
      />
    </div>
  );
}

/* ============================================================================
   3. REGULATORY LANDSCAPE
============================================================================ */

const AUTHORITIES = [
  {
    icon: Landmark,
    title: "State Pollution Control Board (SPCB)",
    detail:
      "Issues CTE and CTO under the Water (Prevention & Control of Pollution) Act, 1974 and the Air (Prevention & Control of Pollution) Act, 1981. The primary authority you'll deal with, start to finish.",
  },
  {
    icon: ShieldCheck,
    title: "Central Pollution Control Board (CPCB)",
    detail:
      "Sets national guidelines for ELV recycling facilities, hazardous waste handling norms, and depollution standards that SPCBs apply at the state level.",
  },
  {
    icon: Building2,
    title: "Ministry of Road Transport & Highways (MoRTH)",
    detail:
      "Governs registration as a Registered Vehicle Scrapping Facility (RVSF) under the Vehicle Scrappage Policy, separate from environmental consents.",
  },
  {
    icon: MapPin,
    title: "Local Municipal Authority",
    detail:
      "Handles land-use permissions, building plan approvals, and trade licenses — usually the first stop before any environmental application.",
  },
];

function RegulatoryLandscape() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {AUTHORITIES.map((a, i) => (
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
   5. APPROVAL TIMELINE CHART
============================================================================ */

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="font-medium text-popover-foreground">
        {label?.replace("\n", " ")}
      </p>
      <p className="text-brandGreen">{payload[0].value} days (indicative)</p>
    </div>
  );
}

function ApprovalTimelineChart() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            Indicative Processing Timelines
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Typical duration per approval, assuming a complete application.
            Actual timelines vary by state and case complexity.
          </p>
        </div>
        <Clock className="hidden h-8 w-8 shrink-0 text-brandGreen/40 sm:block" />
      </div>

      <div className="h-72 w-full sm:h-80">
        {visible && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={TIMELINE_DATA}
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
                  value: "Days",
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
                dataKey="days"
                radius={[6, 6, 0, 0]}
                animationDuration={1200}
              >
                {TIMELINE_DATA.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        * Figures are illustrative planning estimates, not statutory deadlines.
        Confirm current timelines with your state's SPCB and transport
        department.
      </p>
    </div>
  );
}

/* ============================================================================
   6 & 7. ROADMAP STEPS (shared component, used for CTE and CTO)
============================================================================ */

type Step = { title: string; detail: string; icon: any };

function RoadmapSteps({
  steps,
  accent = "brandGreen",
}: {
  steps: Step[];
  accent?: string;
}) {
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

const CTE_STEPS: Step[] = [
  {
    icon: MapPin,
    title: "Site Selection & Zoning Check",
    detail:
      "Confirm the plot is in an industrial or permitted zone, and meets buffer-distance norms from residential areas, water bodies, and eco-sensitive zones.",
  },
  {
    icon: FileWarning,
    title: "Applicability Screening",
    detail:
      "Determine whether the facility's scale triggers Environmental Clearance under the EIA Notification, 2006, in addition to CTE.",
  },
  {
    icon: ClipboardList,
    title: "Detailed Project Report (DPR)",
    detail:
      "Prepare a DPR covering site layout, effluent and emission control systems, hazardous waste storage design, and depollution process flow.",
  },
  {
    icon: FileCheck2,
    title: "CTE Application to SPCB",
    detail:
      "Submit Form 1 under the Water Act and Air Act with the DPR, layout plan, and pollution-control undertakings to the State Pollution Control Board.",
  },
  {
    icon: Gauge,
    title: "SPCB Site Inspection",
    detail:
      "Board officials verify the proposed site, surrounding land use, and adequacy of the planned control measures before recommending approval.",
  },
  {
    icon: ShieldCheck,
    title: "CTE Granted",
    detail:
      "Consent to Establish is issued with specific conditions on construction, effluent treatment, and monitoring — construction may now begin.",
  },
];

const CTO_STEPS: Step[] = [
  {
    icon: Factory,
    title: "Construction as per Approved Layout",
    detail:
      "Build strictly to the CTE-approved layout, including impervious flooring, containment bunds, and designated hazardous-waste storage areas.",
  },
  {
    icon: Droplets,
    title: "Install Pollution Control Infrastructure",
    detail:
      "Commission oil-water separators, effluent treatment systems, and depollution equipment for fluids, batteries, tyres, and airbags.",
  },
  {
    icon: Gauge,
    title: "Trial Run & Commissioning",
    detail:
      "Operate the plant on a trial basis to validate that emissions, effluents, and waste handling stay within consented limits.",
  },
  {
    icon: ClipboardList,
    title: "CTO Application & Compliance Report",
    detail:
      "File the CTO application with a compliance report demonstrating that all CTE conditions have been met during construction and trial run.",
  },
  {
    icon: FileCheck2,
    title: "Final SPCB Inspection",
    detail:
      "The Board re-inspects the operational facility to confirm installed systems match commitments made at the CTE stage.",
  },
  {
    icon: CheckCircle2,
    title: "CTO Granted — Plant Operational",
    detail:
      "Consent to Operate is issued for a fixed validity period. Renewal before expiry is mandatory to continue lawful operations.",
  },
];

/* ============================================================================
   8. OTHER CLEARANCES
============================================================================ */

const OTHER_CLEARANCES = [
  {
    icon: FileWarning,
    title: "Hazardous Waste Authorization",
    detail:
      "Required under the Hazardous and Other Wastes (Management & Transboundary Movement) Rules, 2016 for storing and transferring oils, batteries, and other hazardous ELV waste streams.",
  },
  {
    icon: Scale,
    title: "RVSF Registration",
    detail:
      "Registration as a Registered Vehicle Scrapping Facility under MoRTH's Vehicle Scrappage Policy — separate from, and in addition to, environmental consents.",
  },
  {
    icon: Flame,
    title: "Fire NOC",
    detail:
      "A No-Objection Certificate from the state Fire Department, given the presence of fuel residues, oils, and flammable materials on site.",
  },
  {
    icon: Droplets,
    title: "Groundwater Extraction NOC",
    detail:
      "Needed from the Central Ground Water Authority (CGWA) if the facility draws groundwater for operations or dust suppression.",
  },
  {
    icon: Building2,
    title: "Municipal Trade License",
    detail:
      "Local body approval for the building plan and trade activity, typically required before applying for CTE.",
  },
  {
    icon: Layers,
    title: "Factory License",
    detail:
      "Applicable under the Factories Act, 1948 where the facility crosses the prescribed worker-count or power-usage threshold.",
  },
];

function OtherClearances() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {OTHER_CLEARANCES.map((c, i) => (
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
   9. COMMON PITFALLS
============================================================================ */

const PITFALLS = [
  "Starting civil construction before CTE is granted, which can force costly rework or demolition.",
  "Underestimating hazardous waste storage design, leading to rejected or delayed CTO inspections.",
  "Overlooking state-specific amendments to buffer distances and siting criteria.",
  "Treating RVSF registration and environmental consents as one process — they run on separate tracks.",
  "Missing CTO renewal deadlines, which can suspend operations until re-approval.",
];

function PitfallsSection() {
  return (
    <div className="overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">
          Common Pitfalls That Delay Approvals
        </h3>
      </div>
      <ul className="space-y-3">
        {PITFALLS.map((p, i) => (
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
   10. FAQ SECTION
============================================================================ */

const FAQS = [
  {
    q: "What's the difference between CTE and CTO?",
    a: "CTE (Consent to Establish) permits you to build the facility according to an approved plan. CTO (Consent to Operate) permits you to actually run it, and is granted only after the SPCB verifies that the built facility matches the CTE conditions.",
  },
  {
    q: "How long does the full approval process take?",
    a: "From site finalization to an operational CTO, plan for roughly three to four months in a straightforward case, though complex sites or incomplete applications can extend this considerably.",
  },
  {
    q: "Is Environmental Clearance mandatory for every ELV recycling plant?",
    a: "Not always. It depends on whether the facility's scale and processes fall within the categories listed under the EIA Notification, 2006. A screening step early in the process clarifies this.",
  },
  {
    q: "Can CTE or CTO be transferred if plant ownership changes?",
    a: "Generally, consents are tied to the operating entity and site, and a change in ownership or legal structure typically requires informing the SPCB and may need a fresh or amended consent.",
  },
  {
    q: "What happens if a plant operates without a valid CTO?",
    a: "Operating without CTO exposes the facility to closure directions, penalties, and legal action under the Water and Air Acts. It also jeopardizes RVSF registration standing.",
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
   11. FINAL CTA
============================================================================ */

function FinalCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-[#0B1210] px-6 py-12 text-center text-white sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brandGreen/20 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-xl">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brandGreen/15 text-brandGreen">
          <Download className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl font-bold sm:text-3xl">
          Talk to Experts
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
          Talk to our compliance team about your specific site. CTE, CTO, and
          every allied clearance your ELV recycling plant will need
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {/* <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-brandGreen px-5 py-3 text-sm font-semibold text-[#0B1210] transition-transform hover:scale-[1.03]"
          >
            Download Checklist
            <Download className="h-4 w-4" />
          </a> */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Talk to Expert
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

export default function ELVRecyclingApprovalsBlog() {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 lg:pt-32">
      <div className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-4">
          {/* MAIN CONTENT */}
          <main className="min-w-0 space-y-16 sm:space-y-20">
            <Seo
              title="EPR ELV Credits: Approvals, Registration & Compliance Roadmap"
              description="Learn the complete approvals, registration, and compliance roadmap for EPR ELV Credits in India. Understand CPCB requirements, End-of-Life Vehicle regulations, documentation, eligibility, and legal obligations for EPR credit trading."
              keywords={[
                "EPR ELV Credits",
                "ELV EPR Registration",
                "ELV EPR Compliance",
                "End-of-Life Vehicle Registration",
                "ELV Credit Trading",
                "ELV Compliance",
                "Extended Producer Responsibility",
                "Vehicle Recycling",
                "Vehicle Scrappage Policy",
                "CPCB EPR Registration",
                "Environmental Compliance",
                "ELV Credit Marketplace",
                "Regulatory Compliance",
                "Automobile Recycling",
                "ELV Waste Management",
                "How to register for ELV EPR credits?",
                "How to get ELV EPR approval?",
                "Who needs ELV EPR registration?",
                "Documents required for ELV EPR registration",
                "How to comply with ELV regulations?",
                "ELV EPR compliance checklist",
                "How to avoid ELV compliance penalties?",
                "ELV registration process in India",
                "CPCB ELV guidelines",
                "ELV EPR compliance roadmap",
              ]}
              url="https://eprnexuss.com/blog/epr-elv-approvals"
              type="article"
            />
            <HeroSection />

            <QuickStatsBar />

            {/* mobile-only contact form, appears inline (not sticky) */}
            <div className="lg:hidden">
              <StickyContactForm />
            </div>

            <BlogSection
              id="overview"
              eyebrow="Getting Started"
              title="What Approvals Does an ELV Recycling Plant Actually Need?"
              intro="Setting up a compliant end-of-life vehicle recycling facility means navigating environmental consents, hazardous-waste authorization, and transport-department registration — each issued by a different authority, on a different timeline. Here's how the pieces fit together."
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: ShieldCheck,
                    label: "Environmental Consents",
                    sub: "CTE & CTO from SPCB",
                  },
                  {
                    icon: FileWarning,
                    label: "Hazardous Waste",
                    sub: "Authorization under HOWM Rules",
                  },
                  {
                    icon: Scale,
                    label: "RVSF Registration",
                    sub: "MoRTH Scrappage Policy",
                  },
                ].map((b, i) => (
                  <Reveal key={b.label} delay={i * 90}>
                    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                      <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-brandGreen" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {b.label}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {b.sub}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </BlogSection>

            <BlogSection
              id="regulatory-landscape"
              eyebrow="Know the Players"
              title="The Regulatory Landscape"
              intro="Four bodies typically touch an ELV recycling plant's approval file. Understanding who owns what keeps applications from bouncing between desks."
            >
              <RegulatoryLandscape />
            </BlogSection>

            {/* <BlogSection
              id="timeline"
              eyebrow="Plan Your Runway"
              title="How Long Approvals Usually Take"
              intro="No two states move at the same pace, but these indicative timelines help you build a realistic project schedule."
            >
              <ApprovalTimelineChart />
            </BlogSection> */}

            <BlogSection
              id="cte-roadmap"
              eyebrow="Stage One"
              title="The CTE Roadmap"
              intro="Consent to Establish is the gate you must clear before laying a single brick. Here's the sequence, start to finish."
            >
              <RoadmapSteps steps={CTE_STEPS} />
            </BlogSection>

            <BlogSection
              id="cto-roadmap"
              eyebrow="Stage Two"
              title="The CTO Roadmap"
              intro="Once construction is complete, Consent to Operate turns a built facility into a licensed, running plant."
            >
              <RoadmapSteps steps={CTO_STEPS} />
            </BlogSection>

            <BlogSection
              id="other-clearances"
              eyebrow="Beyond CTE & CTO"
              title="Other Clearances You'll Likely Need"
              intro="CTE and CTO are the backbone, but most plants need a handful of allied approvals running in parallel."
            >
              <OtherClearances />
            </BlogSection>

            <BlogSection
              id="pitfalls"
              eyebrow="Learn From Others"
              title="Common Pitfalls That Delay Approvals"
            >
              <PitfallsSection />
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
              This article is for general informational purposes and reflects a
              typical approval sequence — it isn't legal advice. Requirements,
              forms, and timelines vary by state and change over time, so
              confirm current procedures with your State Pollution Control Board
              and a qualified compliance professional before acting.
            </p> */}
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
