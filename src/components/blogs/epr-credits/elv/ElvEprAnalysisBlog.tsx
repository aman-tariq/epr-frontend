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
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock,
  Coins,
  FileCheck2,
  Landmark,
  Layers,
  Recycle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
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

const TARGET_DATA = [
  { name: "FY26", target: 8, fill: "#5AC361" },
  { name: "FY27*", target: 13, fill: "#3E9A47" },
  { name: "FY28*", target: 18, fill: "#22702D" },
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
          <Coins className="h-3.5 w-3.5" />
          MARKET ANALYSIS · EPR END-OF-LIFE VEHICLE CREDITS
        </div>

        <h1
          className="animate-slide-up mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          EPR ELV Credits:
          <span className="block text-brandGreen">
            Market Analysis & Business Opportunity
          </span>
        </h1>

        <p
          className="animate-slide-up mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          A practical look at how EPR credits move through India's end-of-life
          vehicle ecosystem — and where producers, recyclers, and PROs stand to
          gain as the market matures.
        </p>

        <div
          className="animate-slide-up mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#credit-flow"
            className="inline-flex items-center gap-2 rounded-xl bg-brandGreen px-5 py-3 text-sm font-semibold text-[#0B1210] transition-transform hover:scale-[1.03] hover:shadow-lg hover:shadow-brandGreen/20"
          >
            See How Credits Flow
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
          at /images/epr-elv-credits-hero.jpg for production use */}
      <div className="relative z-10 mt-12 grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
        {[
          { icon: Truck, label: "Producers / PIBOs" },
          { icon: Recycle, label: "Recyclers / RVSFs" },
          { icon: Users, label: "PROs & Aggregators" },
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
              The full deep-dive is on its way
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Our team is finalizing complete pricing, sizing, and state-wise
              data. In the meantime, this overview and our team can get you
              moving.
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
        end={8}
        suffix="%"
        label="FY26 Steel Recovery Target"
        active={visible}
      />
      <StatItem
        end={5}
        suffix="yr"
        label="EPR Certificate Validity"
        active={visible}
      />
      <StatItem
        end={70}
        suffix="%"
        label="FY26 Scrappage Shortfall Reported"
        active={visible}
      />
      <StatItem
        end={3}
        suffix=""
        label="Stakeholder Groups in Scope"
        active={visible}
      />
    </div>
  );
}

/* ============================================================================
   4. ECOSYSTEM / WHO'S INVOLVED
============================================================================ */

const ECOSYSTEM = [
  {
    icon: Truck,
    title: "Producers / PIBOs",
    detail:
      "Vehicle manufacturers, importers, assemblers, and brand owners who must meet annual steel-recovery targets tied to vehicles they sold 15–20 years earlier.",
  },
  {
    icon: Recycle,
    title: "Registered Vehicle Scrapping Facilities (RVSFs)",
    detail:
      "Depollute and dismantle end-of-life vehicles, verify material recovery, and generate the EPR certificates that producers rely on for compliance.",
  },
  {
    icon: Landmark,
    title: "CPCB EPR Portal",
    detail:
      "The central digital system for producer registration, target declaration, certificate issuance, and cross-verification of recycling claims.",
  },
  {
    icon: Users,
    title: "PROs & Aggregators",
    detail:
      "Producer Responsibility Organizations that pool obligations across producers and help secure verified certificate supply — a role well established in India's other EPR streams.",
  },
];

function EcosystemSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {ECOSYSTEM.map((a, i) => (
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
   5. TARGET ESCALATION CHART
============================================================================ */

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="font-medium text-popover-foreground">{label}</p>
      <p className="text-brandGreen">
        {payload[0].value}% steel recovery target
      </p>
    </div>
  );
}

function TargetEscalationChart() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            EPR Target Escalation (Indicative)
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Steel-recovery targets are reported to step up over successive years
            — a rising bar that widens the gap between demand and available
            certificates.
          </p>
        </div>
        <TrendingUp className="hidden h-8 w-8 shrink-0 text-brandGreen/40 sm:block" />
      </div>

      <div className="h-72 w-full sm:h-80">
        {visible && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={TARGET_DATA}
              margin={{ top: 8, right: 8, left: -16, bottom: 8 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                className="stroke-border"
              />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: "currentColor" }}
                className="text-muted-foreground"
              />
              <YAxis
                tick={{ fontSize: 11, fill: "currentColor" }}
                className="text-muted-foreground"
                label={{
                  value: "% Steel Recovery",
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
                dataKey="target"
                radius={[6, 6, 0, 0]}
                animationDuration={1200}
              >
                {TARGET_DATA.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        * FY26 reflects the notified target reported at rollout. FY27/FY28
        figures are indicative of the reported escalation path — rules have
        already been amended once since notification, so confirm current figures
        on the CPCB EPR portal before planning around them.
      </p>
    </div>
  );
}

/* ============================================================================
   6. CREDIT FLOW (signature roadmap element)
============================================================================ */

type Step = { title: string; detail: string; icon: any };

function FlowSteps({ steps }: { steps: Step[] }) {
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

const CREDIT_FLOW_STEPS: Step[] = [
  {
    icon: Clock,
    title: "Vehicle Classified as ELV",
    detail:
      "A vehicle is classified end-of-life after failing fitness testing or crossing its age threshold under the Motor Vehicles Rules.",
  },
  {
    icon: Truck,
    title: "Deposited at an Authorized Facility",
    detail:
      "The owner deposits the vehicle at a designated collection centre or RVSF within the prescribed window after classification.",
  },
  {
    icon: Layers,
    title: "Depollution & Dismantling",
    detail:
      "The RVSF removes fluids, batteries, and hazardous components, then dismantles the vehicle and segregates recoverable materials.",
  },
  {
    icon: FileCheck2,
    title: "Material Recovery Verified",
    detail:
      "Steel and other recovered material is measured and recorded, forming the basis for the certificates the facility can generate.",
  },
  {
    icon: ShieldCheck,
    title: "Certificate of Deposit Issued",
    detail:
      "The vehicle owner receives a Certificate of Deposit, unlocking registration fee waivers and motor vehicle tax concessions.",
  },
  {
    icon: ClipboardList,
    title: "EPR Certificate Logged on the CPCB Portal",
    detail:
      "The RVSF generates an EPR certificate reflecting verified recovery, recorded centrally for cross-verification.",
  },
  {
    icon: CheckCircle2,
    title: "Producer Applies the Certificate",
    detail:
      "A producer procures and applies the certificate against its annual steel-recovery obligation, closing the compliance loop.",
  },
];

/* ============================================================================
   7. OPPORTUNITY SEGMENTS
============================================================================ */

const OPPORTUNITIES = [
  {
    icon: Truck,
    title: "For Producers",
    detail:
      "Lock in RVSF supply relationships early. With formal ELV inflow running well below target, producers who secure certificate supply now avoid scrambling as the gap tightens.",
  },
  {
    icon: Recycle,
    title: "For Recyclers / RVSFs",
    detail:
      "Formal capacity is structurally undersupplied against demand. Compliant, well-documented facilities are positioned to capture stronger certificate pricing as scarcity persists.",
  },
  {
    icon: Users,
    title: "For PROs & Aggregators",
    detail:
      "There's open ground for aggregation — pooling smaller producers' obligations and matching them against verified RVSF capacity, much as PROs already do in other EPR streams.",
  },
];

function OpportunitySegments() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {OPPORTUNITIES.map((o, i) => (
        <Reveal key={o.title} delay={i * 90}>
          <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brandGreen/10 text-brandGreen">
              <o.icon className="h-5 w-5" />
            </div>
            <h4 className="mt-4 font-display text-sm font-semibold text-foreground sm:text-base">
              {o.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {o.detail}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ============================================================================
   8. MARKET DYNAMICS TO WATCH
============================================================================ */

const DYNAMICS = [
  "Formal ELV inflow to RVSFs is reported well below notified targets, keeping certificate supply tight.",
  "A March 2026 amendment narrowed eligible steel sources to vehicle-only scrap, removing a route producers had planned around.",
  "Scrapping infrastructure remains concentrated in a handful of states, adding logistics cost for producers elsewhere.",
  "CPCB portal cross-verification makes recycling claims digitally auditable, raising the bar for informal players.",
  "Targets and eligibility rules have already been amended once since notification — build for continued regulatory change.",
];

function DynamicsSection() {
  return (
    <div className="overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">
          Market Dynamics to Watch
        </h3>
      </div>
      <ul className="space-y-3">
        {DYNAMICS.map((p, i) => (
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
    q: "Who exactly needs to comply with ELV EPR obligations?",
    a: "Vehicle manufacturers, importers, and assemblers (PIBOs), along with bulk consumers owning more than 100 vehicles, are covered under the current framework.",
  },
  {
    q: "How is a producer's EPR target calculated?",
    a: "As a percentage of the steel-equivalent weight of vehicles the producer sold in a base year roughly 15–20 years earlier, with the percentage stepping up over successive years.",
  },
  {
    q: "Can EPR certificates be bought and sold freely?",
    a: "Certificates generated by RVSFs are logged and applied through the CPCB portal to meet a producer's target. Transfer rules have been refined since the framework took effect, so it's worth confirming current portal rules for your specific case.",
  },
  {
    q: "What role can a PRO play here?",
    a: "A Producer Responsibility Organization can aggregate obligations across multiple producers and help secure verified certificate supply — a role already well established in India's e-waste and packaging EPR streams.",
  },
  {
    q: "Is this analysis the final, complete picture?",
    a: "This is a working overview while our team finalizes a full deep-dive with detailed pricing and state-wise data. Reach out for current, situation-specific guidance in the meantime.",
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
          <Banknote className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl font-bold sm:text-3xl">
          The Full Deep-Dive Is Coming
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
          We're finalizing detailed pricing benchmarks, state-wise supply data,
          and a step-by-step playbook for each stakeholder group. Talk to our
          team now for guidance tailored to where you sit in the ELV credit
          chain.
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

export default function EPRELVCreditsMarketAnalysis() {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 lg:pt-32">
      <div className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
          {/* MAIN CONTENT */}
          <main className="min-w-0 space-y-16 sm:space-y-20">
            <Seo
              title="EPR ELV Credits: Market Analysis & Business Opportunity"
              description="Explore the EPR ELV Credits market with in-depth analysis, business opportunities, pricing trends, regulatory insights, and strategies to maximize value through End-of-Life Vehicle (ELV) recycling and EPR credit trading."
              keywords={[
                "EPR ELV Credits",
                "ELV EPR Credits",
                "End-of-Life Vehicle Credits",
                "ELV Credit Trading",
                "ELV Marketplace",
                "Vehicle Recycling",
                "ELV Recycling",
                "Extended Producer Responsibility",
                "ELV Waste Management",
                "Automobile Recycling",
                "EPR Credit Market",
                "ELV Compliance",
                "Circular Economy",
                "Vehicle Scrappage",
                "Environmental Compliance",
                "How do ELV EPR credits work?",
                "What are ELV EPR credits?",
                "How to buy and sell ELV credits?",
                "ELV credit market in India",
                "How to earn from ELV EPR credits?",
                "Benefits of ELV credit trading",
                "Vehicle recycling business opportunities",
                "ELV EPR pricing trends",
                "ELV compliance guide",
                "ELV EPR market analysis 2026",
              ]}
              url="https://eprnexuss.com/blog/epr-elv-analysis"
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
              id="ecosystem"
              eyebrow="Getting Oriented"
              title="Who's in the EPR ELV Ecosystem"
              intro="EPR credits for end-of-life vehicles move between four groups. Understanding each role is the first step to spotting where the opportunity sits for you."
            >
              <EcosystemSection />
            </BlogSection>

            <BlogSection
              id="targets"
              eyebrow="Why the Market Is Moving"
              title="Targets Are Climbing Faster Than Supply"
              intro="Steel-recovery obligations step up year over year, while formal ELV inflow to scrapping facilities continues to lag — a gap that shapes where the business opportunity lies."
            >
              <TargetEscalationChart />
            </BlogSection>

            <BlogSection
              id="credit-flow"
              eyebrow="How It Works"
              title="How an EPR Credit Actually Gets Created"
              intro="From a vehicle reaching end-of-life to a producer applying a certificate against its target, here's the full chain."
            >
              <FlowSteps steps={CREDIT_FLOW_STEPS} />
            </BlogSection>

            <BlogSection
              id="opportunity"
              eyebrow="Where the Business Case Is"
              title="The Opportunity, By Stakeholder"
              intro="The same supply-demand gap looks different depending on where you sit in the chain."
            >
              <OpportunitySegments />
            </BlogSection>

            <BlogSection
              id="dynamics"
              eyebrow="Stay Ahead"
              title="Market Dynamics to Watch"
            >
              <DynamicsSection />
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
              publicly reported figures on India's ELV EPR framework as it
              currently stands — it isn't legal, financial, or investment
              advice. Targets, eligibility rules, and certificate mechanics have
              already been amended since the rules took effect and may change
              again, so confirm current details on the CPCB EPR portal or with a
              qualified compliance professional before acting.
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
