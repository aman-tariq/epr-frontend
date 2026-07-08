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
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FileCheck2,
  FileText,
  Gauge,
  Landmark,
  ListChecks,
  Recycle,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Stamp,
  Timer,
  Factory,
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
   Timelines, stage durations, and stats below are placeholders written to
   populate the charts and roadmap — not sourced from a live portal, filing
   system, or verified regulatory record. Swap before publishing.
============================================================================ */

const APPROVAL_STAGE_DATA = [
  { stage: "Entity\nRegistration", weeks: 2, fill: "hsl(var(--primary))" },
  { stage: "Facility\nAuthorization", weeks: 5, fill: "#5AC361" },
  { stage: "PRO\nEmpanelment", weeks: 3, fill: "hsl(var(--primary))" },
  { stage: "Target &\nCredential Setup", weeks: 2, fill: "#5AC361" },
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
        <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-gray-500 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white">
          <Stamp className="h-3.5 w-3.5" />
          APPROVALS &amp; REGISTRATION · EPR METALS CREDITS
        </div>

        <h1
          className="animate-slide-up mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          EPR Metals Credits:
          <span className="block text-brandGreen">
            Approvals, Registration &amp; Compliance Roadmap
          </span>
        </h1>

        <p
          className="animate-slide-up mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          The paperwork, approvals, and sign-offs standing between "we want in"
          and "we're trading credits" — mapped out stage by stage for producers,
          recyclers, and PROs.
        </p>

        <div
          className="animate-slide-up mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#roadmap"
            className="inline-flex items-center gap-2 rounded-xl bg-brandGreen px-5 py-3 text-sm font-semibold text-[#0B1210] transition-transform hover:scale-[1.03] hover:shadow-lg hover:shadow-brandGreen/20"
          >
            See the Roadmap
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
          { icon: FileText, label: "Registration" },
          { icon: ShieldCheck, label: "Authorization" },
          { icon: BadgeCheck, label: "Compliance Filing" },
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
              The full compliance deep-dive is on its way
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Our team is finalizing document checklists, state-wise variations,
              and filing templates. In the meantime, this overview and our team
              can get you moving.
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
      className="grid grid-cols-2 divide-x divide-y divide-border rounded-2xl border border-border bg-card sm:grid-cols-4 sm:divide-y-0"
    >
      <StatItem
        end={4}
        suffix=""
        label="Core Approval Stages"
        active={visible}
      />
      <StatItem
        end={12}
        suffix="wk"
        label="Indicative Total Timeline"
        active={visible}
      />
      <StatItem
        end={8}
        suffix="+"
        label="Documents Typically Needed"
        active={visible}
      />
      <StatItem
        end={3}
        suffix=""
        label="Authorities Usually Involved"
        active={visible}
      />
    </div>
  );
}

/* ============================================================================
   4. APPROVAL TIMELINE CHART
============================================================================ */

function StageTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="font-medium text-popover-foreground">
        {String(payload[0].payload.stage).replace("\n", " ")}
      </p>
      <p style={{ color: payload[0].payload.fill }}>
        ~{payload[0].value} weeks indicative
      </p>
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
            Indicative Time per Approval Stage
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            A rough sense of how long each stage tends to take, so you can plan
            backward from when you actually need to be trading.
          </p>
        </div>
        <Gauge className="hidden h-8 w-8 shrink-0 text-primary/40 sm:block" />
      </div>

      <div className="h-72 w-full sm:h-80">
        {visible && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={APPROVAL_STAGE_DATA}
              margin={{ top: 8, right: 8, left: 8, bottom: 8 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                className="stroke-border"
              />
              <XAxis
                dataKey="stage"
                tick={{ fontSize: 12, fill: "currentColor" }}
                className="text-muted-foreground"
              />
              <YAxis
                tick={{ fontSize: 11, fill: "currentColor" }}
                className="text-muted-foreground"
                label={{
                  value: "Weeks",
                  angle: -90,
                  position: "insideLeft",
                  fontSize: 11,
                }}
              />
              <Tooltip
                content={<StageTooltip />}
                cursor={{ fill: "rgba(90,195,97,0.08)" }}
              />
              <Bar
                dataKey="weeks"
                radius={[6, 6, 0, 0]}
                animationDuration={1200}
              >
                {APPROVAL_STAGE_DATA.map((entry) => (
                  <Cell key={entry.stage} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        * Indicative timings only — actual duration varies by state authority,
        application completeness, and category. Not sourced from a live filing
        system.
      </p>
    </div>
  );
}

/* ============================================================================
   5. WHAT THE ROADMAP COVERS
============================================================================ */

const BASICS = [
  {
    icon: FileText,
    title: "Entity registration first",
    text: "Before anything else, your organisation needs to be registered as a producer, recycler, or PRO on the relevant compliance portal.",
  },
  {
    icon: ShieldCheck,
    title: "Facility-level authorization",
    text: "Recycling and processing facilities typically need a separate authorization tied to the site, not just the parent entity.",
  },
  {
    icon: BadgeCheck,
    title: "Ongoing, not one-time",
    text: "Approvals are usually renewed or re-validated periodically — compliance is a maintained status, not a single milestone.",
  },
];

function WhatIsTheRoadmap() {
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
   6. REGISTRATION ROADMAP — signature step flow
============================================================================ */

type Step = { title: string; detail: string; icon: any };

const ROADMAP_STEPS: Step[] = [
  {
    icon: ClipboardList,
    title: "Prepare entity documentation",
    detail:
      "Business registration, GST, site details, and category-specific documents are gathered before filing begins.",
  },
  {
    icon: FileText,
    title: "File entity registration",
    detail:
      "Producers, recyclers, and PROs each register through the applicable compliance portal for their role.",
  },
  {
    icon: ScanSearch,
    title: "Facility inspection & authorization",
    detail:
      "Recycling and processing sites are typically inspected before receiving site-level authorization to operate.",
  },
  {
    icon: Building2,
    title: "PRO empanelment (if applicable)",
    detail:
      "Producers routing obligations through a PRO complete an empanelment step confirming that arrangement.",
  },
  {
    icon: ListChecks,
    title: "Target & credential setup",
    detail:
      "Recovery targets and marketplace credentials are configured so credit generation and trading can begin.",
  },
  {
    icon: FileCheck2,
    title: "Ongoing compliance filing",
    detail:
      "Periodic returns, renewals, and audit documentation keep the registration active and in good standing.",
  },
];

function RoadmapSteps() {
  return (
    <ol className="relative space-y-8 pl-2">
      <div className="absolute bottom-2 left-[27px] top-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
      {ROADMAP_STEPS.map((step, i) => (
        <Reveal key={step.title} delay={i * 80}>
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
   7. REQUIRED DOCUMENTS CHECKLIST
============================================================================ */

const DOCUMENTS = [
  "Certificate of incorporation / business registration",
  "GST registration and PAN details",
  "Site layout & facility authorization documents",
  "Pollution control board consent (where applicable)",
  "Equipment and process description for recycling facilities",
  "Bank account and financial verification details",
  "Authorized signatory identification & authorization letter",
  "Previous compliance history, if any",
];

function DocumentsChecklist() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <ListChecks className="h-5 w-5" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">
          Documents You'll Likely Be Asked For
        </h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {DOCUMENTS.map((doc, i) => (
          <Reveal key={doc} delay={i * 50}>
            <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brandGreen" />
              {doc}
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-5 text-xs text-muted-foreground">
        * Exact requirements vary by role, state authority, and facility type —
        treat this as a starting checklist, not a final list.
      </p>
    </div>
  );
}

/* ============================================================================
   8. STAKEHOLDER ROLES
============================================================================ */

const STAKEHOLDERS = [
  {
    icon: Factory,
    role: "Producers (OEMs & Brand Owners)",
    detail:
      "Register their obligation, then either empanel with a PRO or manage recovery and credit purchases directly.",
  },
  {
    icon: Recycle,
    role: "Recyclers & Scrap Processors",
    detail:
      "Register the entity and get each processing facility authorized before recovery credits can be certified.",
  },
  {
    icon: Landmark,
    role: "Producer Responsibility Organisations",
    detail:
      "Register as a PRO, then complete empanelment with the producers whose obligations they'll be coordinating.",
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
   9. COMMON DELAYS & REJECTIONS
============================================================================ */

const RISKS = [
  "Incomplete or mismatched documentation is the single most common cause of filing delays.",
  "Facility inspections can get rescheduled if site records don't match what was declared on the application.",
  "PRO empanelment gaps can leave a producer's obligation technically uncovered even after entity registration is approved.",
  "Missing renewal windows can lapse an otherwise-active registration, forcing a restart of parts of the process.",
  "Skipping state-specific variations by assuming a single national process applies everywhere can stall an application.",
];

function RisksSection() {
  return (
    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">
          Where Applications Most Often Stall
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
    q: "Do producers, recyclers, and PROs all register the same way?",
    a: "No — each role typically has its own registration path and document set, even though they may use the same underlying compliance portal.",
  },
  {
    q: "How long does the full approval process usually take?",
    a: "Reported timelines commonly run several weeks to a few months end-to-end, depending on application completeness and how quickly facility inspections get scheduled.",
  },
  {
    q: "Does registration need to be renewed?",
    a: "In most frameworks, yes — registrations and authorizations are typically revalidated on a periodic cycle rather than granted permanently.",
  },
  {
    q: "Can I start trading credits while an approval is still pending?",
    a: "Generally no — credits usually can't be certified or traded until the relevant facility authorization and entity registration are both active.",
  },
  {
    q: "Is this the complete, final compliance guide?",
    a: "This is a working overview while our team finalizes a full deep-dive with document templates and state-wise detail. Reach out for current, situation-specific guidance in the meantime.",
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
    <div className="relative overflow-hidden rounded-3xl border border-white bg-[#0B1210] px-6 py-12 text-center text-white sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-xl">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center border border-white justify-center rounded-2xl bg-primary/15 text-secondary">
          <Timer className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl font-bold sm:text-3xl">
          The Full Compliance Deep-Dive Is Coming
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
          We're finalizing document templates, state-wise checklists, and
          renewal calendars. Talk to our team now for guidance on exactly where
          your registration stands.
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

export default function EPRMetalsApprovalsRegistrationRoadmap() {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 lg:pt-32">
      <div className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
          {/* MAIN CONTENT — min-w-0 stops wide children (charts) from
              stretching this column and throwing off the sticky sidebar
              next to it */}
          <main className="min-w-0 space-y-16 sm:space-y-20">
            <Seo
              title="EPR Metals Credits: Approvals, Registration & Compliance Roadmap"
              description="Learn the complete approvals, registration, and compliance roadmap for EPR Metals Credits in India. Understand CPCB requirements, documentation, eligibility, and regulatory obligations for Metal EPR credit trading."
              keywords={[
                "EPR Metals Credits",
                "Metal EPR Registration",
                "Metal EPR Compliance",
                "Metal Credit Registration",
                "Metal Credit Trading",
                "Metal EPR Marketplace",
                "Extended Producer Responsibility",
                "Metal Recycling",
                "Metal Waste Management",
                "CPCB Metal EPR",
                "Environmental Compliance",
                "Metal Recycling Certificates",
                "Business Compliance",
                "Regulatory Compliance",
                "Metal Credit Marketplace India",
                "How to register for Metal EPR credits?",
                "How to get Metal EPR approval?",
                "Who needs Metal EPR registration?",
                "Documents required for Metal EPR registration",
                "How to comply with Metal EPR regulations?",
                "Metal EPR compliance checklist",
                "How to avoid Metal EPR penalties?",
                "Metal EPR registration process in India",
                "CPCB Metal EPR guidelines",
                "Metal EPR compliance roadmap",
              ]}
              url="https://eprnexuss.com/blog/epr-metals-approvals"
              type="article"
            />
            <HeroSection />

            <ComingSoonBanner />

            <QuickStatsBar />

            {/* mobile-only contact form, appears inline (not sticky) —
                placed after the intro content, ahead of the long-form
                sections, so it never overlaps anything below it */}
            <div id="contact-form" className="lg:hidden">
              <StickyContactForm />
            </div>

            <BlogSection
              id="timeline"
              eyebrow="Plan Ahead"
              title="How Long Approvals Typically Take"
              intro="A stage-by-stage view of indicative timing, so you can work backward from your target trading date."
            >
              <ApprovalTimelineChart />
            </BlogSection>

            <BlogSection
              id="basics"
              eyebrow="The Basics"
              title="What This Roadmap Covers"
            >
              <WhatIsTheRoadmap />
            </BlogSection>

            <BlogSection
              id="roadmap"
              eyebrow="Step by Step"
              title="The Registration Roadmap, Start to Ongoing Compliance"
            >
              <RoadmapSteps />
            </BlogSection>

            <BlogSection
              id="documents"
              eyebrow="Get Paperwork Ready"
              title="Documents You'll Likely Need"
            >
              <DocumentsChecklist />
            </BlogSection>

            <BlogSection
              id="stakeholders"
              eyebrow="Who's Involved"
              title="Registration Looks Different for Each Role"
            >
              <StakeholderRoles />
            </BlogSection>

            <BlogSection
              id="risks"
              eyebrow="Go In Informed"
              title="Where Applications Most Often Stall"
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

            <p className="text-xs leading-relaxed text-muted-foreground">
              This overview is for general informational purposes and reflects a
              typical approvals sequence, not a confirmed procedure for any
              specific state or authority — it isn't legal or compliance advice.
              Timelines and document requirements shown are illustrative.
              Confirm current requirements with your team and a qualified
              compliance professional before filing.
            </p>
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
