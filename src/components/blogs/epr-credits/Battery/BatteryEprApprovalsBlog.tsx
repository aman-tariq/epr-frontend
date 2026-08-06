"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Factory,
  Recycle,
  Landmark,
  ShieldCheck,
  FileCheck2,
  ClipboardList,
  Route,
  CalendarClock,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  CircleDot,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/*  DATA — indicative; confirm against the current CPCB/state portal   */
/*  workflow before publishing final numbers.                          */
/* ------------------------------------------------------------------ */

const roadmapStages = [
  { label: "Application", icon: ClipboardList },
  { label: "Document review", icon: FileCheck2 },
  { label: "Site / capability check", icon: ShieldCheck },
  { label: "Approval granted", icon: CheckCircle2 },
  { label: "Annual renewal", icon: CalendarClock },
];

const eligibility = [
  {
    icon: Factory,
    title: "Producers",
    body: "Any entity manufacturing, importing, or brand-owning batteries placed on the Indian market needs registration before the first sale — not after.",
  },
  {
    icon: Recycle,
    title: "Recyclers",
    body: "Authorisation requires demonstrated processing capacity and environmentally sound handling — approval is tied to facility capability, not just paperwork.",
  },
  
];

const checklist = [
  "Business incorporation and GST documents",
  "Battery category and estimated annual sales volume",
  "Waste management plan or PRO engagement agreement",
  "Facility authorisation (recyclers only)",
  "Board resolution nominating an authorised signatory",
];

const approvalDays = [
  { label: "State PCB", value: 45 },
  { label: "CPCB (import/multi-state)", value: 75 },
];

const statusSplit = [
  { label: "Approved", value: 62, color: "#5AC361" },
  { label: "Under review", value: 27, color: "#F2A63A" },
  { label: "Returned for correction", value: 11, color: "#94A3B8" },
];

const rejectionReasons = [
  "Incomplete waste management or take-back plan",
  "Mismatch between declared and actual sales category",
  "Missing facility authorisation for recycling partners",
  "Unsigned or incorrectly nominated authorised signatory",
];

const renewalLedger = [
  {
    code: "R-01",
    title: "60 days before expiry",
    body: "Renewal window opens; portal flags upcoming expiry automatically.",
  },
  {
    code: "R-02",
    title: "Annual return filing",
    body: "Prior-year sales, collection, and recycling figures must be reconciled first.",
  },
  {
    code: "R-03",
    title: "Re-verification",
    body: "Recyclers may face a fresh facility check if capacity has changed.",
  },
  {
    code: "R-04",
    title: "Renewed certificate",
    body: "Valid for the next compliance year, subject to on-time filing.",
  },
];

const faqs = [
  {
    q: "How long does first-time registration actually take?",
    a: "State-level approvals typically move faster than central approvals for importers or multi-state producers, mainly because fewer parties need to sign off. Build buffer time before your first planned sale.",
  },
  {
    q: "Can a producer sell before approval comes through?",
    a: "No — registration is meant to precede the first sale in most workflows. Selling ahead of approval is one of the most common compliance gaps we see.",
  },
  {
    q: "What's the single biggest reason applications get returned?",
    a: "An incomplete or vague waste management plan. Reviewers want a concrete collection-and-recycling mechanism, not a placeholder statement.",
  },
  {
    q: "Does a PRO agreement replace the need for a producer's own registration?",
    a: "No. A PRO agreement covers the operational recycling obligation, but the producer still needs its own registration on record.",
  },
];

/* ------------------------------------------------------------------ */
/*  ATOMS                                                              */
/* ------------------------------------------------------------------ */

function Eyebrow({
  code,
  children,
}: {
  code: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs tracking-widest text-brandGreen">
        {code}
      </span>
      <span className="h-px flex-1 max-w-10 bg-brandGreen/40" />
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {children}
      </span>
    </div>
  );
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Signature element: a fixed vertical roadmap stepper that lights up
   stage-by-stage as the reader scrolls through the page. */
function RoadmapRail() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-5">
      {roadmapStages.map((stage, i) => {
        const start = i / roadmapStages.length;
        const end = (i + 1) / roadmapStages.length;
        return (
          <RailNode
            key={stage.label}
            stage={stage}
            start={start}
            end={end}
            progress={scrollYProgress}
            isLast={i === roadmapStages.length - 1}
          />
        );
      })}
    </div>
  );
}

function RailNode({
  stage,
  start,
  end,
  progress,
  isLast,
}: {
  stage: { label: string; icon: any };
  start: number;
  end: number;
  progress: any;
  isLast: boolean;
}) {
  const opacity = useTransform(progress, [start, (start + end) / 2], [0.3, 1]);
  const scale = useTransform(progress, [start, (start + end) / 2], [0.85, 1]);
  return (
    <div className="flex flex-col items-center">
      <motion.div
        style={{ opacity, scale }}
        className="w-9 h-9 rounded-full bg-background border-2 border-brandGreen flex items-center justify-center"
      >
        <stage.icon className="w-4 h-4 text-brandGreen" />
      </motion.div>
      {!isLast && <div className="w-px h-8 bg-border mt-1" />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 1 — Hero                                                   */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-brandGreen/5 px-6 py-14 sm:px-10 sm:py-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 w-72 h-72 rounded-full bg-brandGreen/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <Reveal>
        <Eyebrow code="EPR / BATTERY">Compliance roadmap</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground max-w-3xl">
          EPR Battery Credits: Approvals, Registration{" "}
          <span className="text-brandGreen">&amp; Compliance Roadmap</span>
        </h1>
      </Reveal>
      <Reveal delay={0.15} className="max-w-2xl">
        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          A practical, step-by-step guide covering approvals, registration, and
          the compliance roadmap for EPR battery — built for producers and recyclers. Our team is finalizing the full deep-dive; reach
          out for immediate guidance in the meantime.
        </p>
      </Reveal>
      <Reveal delay={0.25}>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Get immediate guidance <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#roadmap"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            See the full roadmap
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 2 — Roadmap overview (horizontal stepper)                  */
/* ------------------------------------------------------------------ */

function RoadmapOverview() {
  return (
    <section id="roadmap" className="mt-16 scroll-mt-28">
      <Reveal>
        <Eyebrow code="EPR-A0">The path, end to end</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Five stages between application and an active certificate
        </h2>
      </Reveal>
      <Reveal
        delay={0.1}
        className="mt-8 rounded-2xl border border-border bg-card p-8 overflow-x-auto"
      >
        <div className="flex items-center justify-between min-w-[640px] relative">
          <div className="absolute left-8 right-8 top-7 h-[2px] bg-border" />
          <motion.div
            className="absolute left-8 top-7 h-[2px] bg-brandGreen"
            initial={{ width: 0 }}
            whileInView={{ width: "calc(100% - 4rem)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
          {roadmapStages.map((s) => (
            <div
              key={s.label}
              className="relative z-10 flex flex-col items-center gap-2 flex-1"
            >
              <div className="w-14 h-14 rounded-full bg-background border-2 border-brandGreen flex items-center justify-center">
                <s.icon className="w-6 h-6 text-brandGreen" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground text-center max-w-[7rem]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 3 — Who needs to register                                  */
/* ------------------------------------------------------------------ */

function EligibilityCards() {
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="EPR-A1">Who needs to register</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Registration isn't one-size-fits-all
        </h2>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-2 gap-5">
        {eligibility.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 flex flex-col hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-full bg-brandGreen/10 flex items-center justify-center mb-5">
                <s.icon className="w-5 h-5 text-brandGreen" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 4 — Document checklist                                     */
/* ------------------------------------------------------------------ */

function DocumentChecklist() {
  return (
    <section className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
      <Reveal>
        <Eyebrow code="EPR-A2">Before you apply</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          What the portal will ask for
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Most delays come from documents assembled after the application is
          already open. Having these ready before you start turns a multi-week
          back-and-forth into a single clean submission.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <ul className="space-y-3">
          {checklist.map((line, i) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4"
            >
              <CheckCircle2 className="w-4 h-4 mt-0.5 text-brandGreen shrink-0" />
              <span className="text-sm text-foreground">{line}</span>
            </motion.li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 5 — Approval timeline bar chart                             */
/* ------------------------------------------------------------------ */

function ApprovalTimelineChart() {
  const max = Math.max(...approvalDays.map((d) => d.value));
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="EPR-A3">Timelines</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          How long approval realistically takes
        </h2>
      </Reveal>
      <Reveal
        delay={0.1}
        className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8"
      >
        <p className="text-xs text-muted-foreground mb-6 font-mono">
          Indicative average days to approval, by authority
        </p>
        <div className="space-y-6">
          {approvalDays.map((d, i) => (
            <div key={d.label}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground font-medium">{d.label}</span>
                <span className="font-mono text-muted-foreground">
                  {d.value} days
                </span>
              </div>
              <div className="h-3 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brandGreen to-emerald-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(d.value / max) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 6 — Application status donut                                */
/* ------------------------------------------------------------------ */

function StatusDonut() {
  const total = statusSplit.reduce((s, d) => s + d.value, 0);
  const r = 70;
  const circumference = 2 * Math.PI * r;
  let offsetAcc = 0;

  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="EPR-A4">Where applications land</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Indicative outcome split, first-time applicants
        </h2>
      </Reveal>
      <Reveal
        delay={0.1}
        className="mt-8 rounded-2xl border border-border bg-card p-8 grid sm:grid-cols-2 gap-8 items-center"
      >
        <svg
          viewBox="0 0 180 180"
          className="w-full max-w-[220px] mx-auto -rotate-90"
        >
          <circle
            cx="90"
            cy="90"
            r={r}
            fill="none"
            stroke="currentColor"
            className="text-muted"
            strokeWidth="20"
          />
          {statusSplit.map((d, i) => {
            const dash = (d.value / total) * circumference;
            const el = (
              <motion.circle
                key={d.label}
                cx="90"
                cy="90"
                r={r}
                fill="none"
                stroke={d.color}
                strokeWidth="20"
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offsetAcc}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              />
            );
            offsetAcc += dash;
            return el;
          })}
        </svg>
        <div className="space-y-4">
          {statusSplit.map((d) => (
            <div key={d.label} className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: d.color }}
              />
              <span className="text-sm text-foreground flex-1">{d.label}</span>
              <span className="font-mono text-sm text-muted-foreground">
                {d.value}%
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 7 — Common rejection reasons                                */
/* ------------------------------------------------------------------ */

function RejectionReasons() {
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="EPR-A5">Avoid the resubmission cycle</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          The reasons applications bounce back
        </h2>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {rejectionReasons.map((r, i) => (
          <Reveal key={r} delay={i * 0.08}>
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <AlertTriangle className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" />
              <span className="text-sm text-foreground">{r}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 8 — Renewal ledger                                         */
/* ------------------------------------------------------------------ */

function RenewalLedger() {
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="EPR-A6">After approval</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Approval isn't the finish line — renewal is annual
        </h2>
      </Reveal>
      <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">
        {renewalLedger.map((step, i) => (
          <Reveal key={step.code} delay={i * 0.06}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-5">
              <span className="font-mono text-xs text-brandGreen w-16 shrink-0">
                {step.code}
              </span>
              <h3 className="font-medium text-foreground w-full sm:w-52 shrink-0">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 9 — CTA banner                                             */
/* ------------------------------------------------------------------ */

function CTABanner() {
  return (
    <section className="mt-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 sm:px-12 sm:py-16 text-primary-foreground">
          <Route className="absolute -right-6 -bottom-8 w-40 h-40 opacity-10" />
          <span className="font-mono text-xs tracking-widest opacity-80">
            EPR-A7 / NEXT STEP
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold max-w-xl">
            Next steps for your application
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base opacity-90">
            talk to our team for step-by-step guidance on
            your specific registration.
          </p>
          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:scale-[1.03] transition-transform"
          >
            Reach out for guidance <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 10 — FAQ accordion                                         */
/* ------------------------------------------------------------------ */

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mt-20 mb-4">
      <Reveal>
        <Eyebrow code="EPR-A8">Common questions</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Before you apply
        </h2>
      </Reveal>
      <div className="mt-8 rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-foreground text-sm sm:text-base">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-brandGreen shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function EPRBatteryApprovalsRoadmap() {
  return (
    <div className="bg-background min-h-screen">
      <RoadmapRail />
      <div className="w-full md:mr-auto md:ml-auto md-pr-2rem md-pl-2rem pt-28 sm:pt-32 pb-24">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-10 xl:gap-4">
          <main className="min-w-0">
            <Seo
              title="EPR Battery Credits: Approvals, Registration & Compliance Roadmap"
              description="Learn the complete approval, registration, and compliance process for EPR Battery Credits in India. Understand CPCB requirements, Battery Waste Management Rules, documentation, and how to stay compliant while trading battery EPR credits."
              keywords={[
                "EPR Battery Credits",
                "Battery EPR Registration",
                "Battery EPR Compliance",
                "Battery Waste Management Rules",
                "CPCB Battery Registration",
                "Battery Credit Trading",
                "Battery EPR Certificate",
                "Extended Producer Responsibility",
                "Battery Recycling",
                "Battery Waste Compliance",
                "Environmental Compliance",
                "Battery Credit Marketplace",
                "Business Compliance",
                "Regulatory Compliance",
                "Battery Credit Registration",
                "How to register for Battery EPR?",
                "How to get Battery EPR approval?",
                "Who needs Battery EPR registration?",
                "Documents required for Battery EPR registration",
                "How to comply with Battery Waste Management Rules?",
                "Battery EPR compliance checklist",
                "How to avoid Battery EPR penalties?",
                "Battery credit trading compliance",
                "Battery EPR registration process in India",
                "CPCB Battery EPR guidelines",
              ]}
              url="https://eprnexuss.com/blog/epr-battery-approvals"
              type="article"
            />
            <Hero />
            <RoadmapOverview />
            <EligibilityCards />
            <DocumentChecklist />
            <ApprovalTimelineChart />
            <StatusDonut />
            <RejectionReasons />
            <RenewalLedger />
            <CTABanner />
            <FAQAccordion />
          </main>

          <aside
            id="contact"
            className="lg:sticky lg:top-28 lg:self-start scroll-mt-28"
          >
            <StickyContactForm />
          </aside>
        </div>
      </div>
    </div>
  );
}
