"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import {
  Cog,
  Magnet,
  Flame,
  Filter,
  Droplets,
  Factory,
  Wrench,
  Shield,
  ClipboardList,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Gauge,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/*  DATA — indicative; confirm against your equipment vendor's actual   */
/*  specs and site conditions before publishing final numbers.          */
/* ------------------------------------------------------------------ */

const processLine = [
  { label: "Shredding", icon: Cog },
  { label: "Sorting", icon: Magnet },
  { label: "Processing", icon: Flame },
  { label: "Refining", icon: Filter },
  { label: "Effluent handling", icon: Droplets },
];

const coreMachinery = [
  {
    icon: Cog,
    title: "Shredder / crusher",
    body: "First point of size reduction — throughput here sets the pace for every downstream stage, so undersizing it becomes a permanent bottleneck.",
  },
  {
    icon: Magnet,
    title: "Magnetic & eddy-current separator",
    body: "Splits ferrous, non-ferrous, and plastic fractions before the material reaches thermal or chemical processing.",
  },
  {
    icon: Flame,
    title: "Furnace / hydrometallurgical reactor",
    body: "Where recoverable metals are actually extracted — the choice between thermal and wet-chemical routes depends on the battery chemistry being handled.",
  },
  {
    icon: Filter,
    title: "Refining & classification unit",
    body: "Brings recovered material to a sellable purity grade and separates it by particle size or composition.",
  },
  {
    icon: Droplets,
    title: "Effluent treatment plant",
    body: "Non-negotiable for authorisation — wastewater and off-gas handling is checked as closely as the core process itself.",
  },
];

const setupConsiderations = [
  "Load-bearing floor and vibration isolation for shredding equipment",
  "Segregated storage for incoming waste vs. processed output",
  "Utility sizing — power draw and water demand scale with capacity, not just footprint",
  "Fire suppression rated for battery chemistry, not generic industrial defaults",
  "Buffer zone and ventilation around thermal or chemical process units",
];

const machineryCost = [
  { label: "Shredding & sorting line", value: 32 },
  { label: "Furnace / reactor system", value: 38 },
  { label: "Effluent treatment", value: 18 },
  { label: "Automation & controls", value: 12 },
];

const shiftThroughput = [
  { label: "Shift A", value: 14 },
  { label: "Shift B", value: 12 },
  { label: "Shift C", value: 9 },
];

const opsLedger = [
  {
    code: "OPS-01",
    title: "Pre-shift safety check",
    body: "PPE, fire suppression, and emergency stop verification before the line starts.",
  },
  {
    code: "OPS-02",
    title: "Feed intake & sorting",
    body: "Incoming batteries logged by chemistry and category before entering the shredder.",
  },
  {
    code: "OPS-03",
    title: "Processing run",
    body: "Continuous monitoring of temperature, throughput rate, and separator efficiency.",
  },
  {
    code: "OPS-04",
    title: "Waste stream handling",
    body: "Effluent and residue routed and logged per the environmental clearance conditions.",
  },
  {
    code: "OPS-05",
    title: "Shift handover log",
    body: "Output volume, downtime, and any deviations recorded for the next shift and for EPR reporting.",
  },
];

const maintenanceFlags = [
  "Deferred shredder blade replacement, quietly cutting throughput",
  "Effluent treatment running past its rated capacity without flagging it",
  "No documented deviation log between shifts",
  "Safety drills treated as a formality instead of a real test",
];

const faqs = [
  {
    q: "How do I size the shredder correctly for my target capacity?",
    a: "Size it against your peak feed rate, not your average — a shredder that only meets average throughput becomes the bottleneck the moment volumes spike.",
  },
  {
    q: "Does the machinery list change with battery chemistry?",
    a: "Yes, meaningfully. Lithium-ion lines typically need additional thermal safety controls, while lead-acid lines lean more heavily on the effluent and smelting side.",
  },
  {
    q: "What's the most commonly underbuilt part of a new setup?",
    a: "Effluent treatment. It's easy to size the core process line generously and treat waste handling as an afterthought, which is exactly what authorisation reviewers check first.",
  },
  {
    q: "How many shifts does a typical line run to hit its rated capacity?",
    a: "Most facilities plan around two to three shifts, with output usually tapering slightly on the last shift due to maintenance and handover time.",
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

/* Signature element: a fixed dashboard-style gauge, needle sweeping as
   the reader scrolls — reads like a live line-efficiency gauge rather
   than a document stepper, matching the machinery/operations subject. */
function EfficiencyGauge() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const pct = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [display, setDisplay] = useState(0);
  useMotionValueEvent(pct, "change", (v) => setDisplay(Math.round(v)));

  return (
    <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-2">
      <svg viewBox="0 0 120 70" className="w-24">
        <path
          d="M 10 65 A 50 50 0 0 1 110 65"
          fill="none"
          stroke="currentColor"
          className="text-muted"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <motion.path
          d="M 10 65 A 50 50 0 0 1 110 65"
          fill="none"
          stroke="#5AC361"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="157"
          style={{
            strokeDashoffset: useTransform(scrollYProgress, [0, 1], [157, 0]),
          }}
        />
        <motion.line
          x1="60"
          y1="65"
          x2="60"
          y2="20"
          stroke="currentColor"
          className="text-foreground"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ rotate, originX: "60px", originY: "65px" }}
        />
        <circle
          cx="60"
          cy="65"
          r="4"
          fill="currentColor"
          className="text-foreground"
        />
      </svg>
      <div className="flex items-center gap-1.5">
        <Gauge className="w-3.5 h-3.5 text-brandGreen" />
        <span className="font-mono text-[10px] text-muted-foreground">
          {display}% read
        </span>
      </div>
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
        <Eyebrow code="EPR / BATTERY">Machinery &amp; operations</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground max-w-3xl">
          EPR Battery Credits: Machinery, Setup{" "}
          <span className="text-brandGreen">&amp; Operations Guide</span>
        </h1>
      </Reveal>
      <Reveal delay={0.15} className="max-w-2xl">
        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          A practical, step-by-step guide covering machinery, setup, and
          operations for EPR battery recycling — built for producers, recyclers,
          and PROs. Our team is finalizing the full deep-dive; reach out for
          immediate guidance in the meantime.
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
            href="#line"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            See the process line
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 2 — Process line overview                                  */
/* ------------------------------------------------------------------ */

function ProcessLine() {
  return (
    <section id="line" className="mt-16 scroll-mt-28">
      <Reveal>
        <Eyebrow code="OPS-00">The physical line</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Five stages, one continuous run
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
          {processLine.map((s) => (
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
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="absolute top-6 w-2 h-2 rounded-full bg-brandGreen"
              initial={{ left: "2rem" }}
              animate={{ left: ["2rem", "calc(100% - 2rem)"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 3 — Core machinery                                         */
/* ------------------------------------------------------------------ */

function CoreMachinery() {
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="OPS-01">Core machinery</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          What actually sits on the floor
        </h2>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {coreMachinery.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 flex flex-col hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-full bg-brandGreen/10 flex items-center justify-center mb-5">
                <s.icon className="w-5 h-5 text-brandGreen" />
              </div>
              <h3 className="font-display font-semibold text-base text-foreground">
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
/*  SECTION 4 — Setup considerations                                   */
/* ------------------------------------------------------------------ */

function SetupConsiderations() {
  return (
    <section className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
      <Reveal>
        <Eyebrow code="OPS-02">Before installation</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          What the layout needs to account for
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Machinery specs get most of the attention; the site conditions around
          them decide whether that machinery runs at rated capacity or
          underperforms from day one.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <ul className="space-y-3">
          {setupConsiderations.map((line, i) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4"
            >
              <Wrench className="w-4 h-4 mt-0.5 text-brandGreen shrink-0" />
              <span className="text-sm text-foreground">{line}</span>
            </motion.li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 5 — Machinery cost bar chart                               */
/* ------------------------------------------------------------------ */

function MachineryCostChart() {
  const max = Math.max(...machineryCost.map((d) => d.value));
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="OPS-03">Investment split</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Where machinery cost concentrates
        </h2>
      </Reveal>
      <Reveal
        delay={0.1}
        className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8"
      >
        <p className="text-xs text-muted-foreground mb-6 font-mono">
          Indicative share of total machinery cost
        </p>
        <div className="space-y-6">
          {machineryCost.map((d, i) => (
            <div key={d.label}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground font-medium">{d.label}</span>
                <span className="font-mono text-muted-foreground">
                  {d.value}%
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
/*  SECTION 6 — Shift throughput bar chart                             */
/* ------------------------------------------------------------------ */

function ShiftThroughputChart() {
  const max = Math.max(...shiftThroughput.map((d) => d.value));
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="OPS-04">Daily output</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Throughput by shift
        </h2>
      </Reveal>
      <Reveal
        delay={0.1}
        className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8"
      >
        <p className="text-xs text-muted-foreground mb-2 font-mono">
          Indicative tonnes processed per shift
        </p>
        <div className="flex items-end gap-4 sm:gap-8 h-56 pt-6">
          {shiftThroughput.map((d, i) => (
            <div
              key={d.label}
              className="flex flex-col items-center gap-2 flex-1"
            >
              <span className="font-mono text-xs text-foreground">
                {d.value}t
              </span>
              <div className="w-full h-40 flex items-end rounded-md bg-muted overflow-hidden">
                <motion.div
                  className="w-full rounded-md bg-gradient-to-t from-brandGreen to-emerald-300"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(d.value / max) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: i * 0.12,
                    ease: "easeOut",
                  }}
                />
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                {d.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 7 — Daily operations ledger                                */
/* ------------------------------------------------------------------ */

function OpsLedger() {
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="OPS-05">A shift, start to finish</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          The daily operating rhythm
        </h2>
      </Reveal>
      <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">
        {opsLedger.map((step, i) => (
          <Reveal key={step.code} delay={i * 0.06}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-5">
              <span className="font-mono text-xs text-brandGreen w-16 shrink-0">
                {step.code}
              </span>
              <h3 className="font-medium text-foreground w-full sm:w-48 shrink-0">
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
/*  SECTION 8 — Maintenance red flags                                  */
/* ------------------------------------------------------------------ */

function MaintenanceFlags() {
  return (
    <section className="mt-20">
      <Reveal>
        <Eyebrow code="OPS-06">Don't let these slide</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Small neglects that become big downtime
        </h2>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {maintenanceFlags.map((r, i) => (
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
/*  SECTION 9 — CTA banner                                             */
/* ------------------------------------------------------------------ */

function CTABanner() {
  return (
    <section className="mt-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 sm:px-12 sm:py-16 text-primary-foreground">
          <Factory className="absolute -right-6 -bottom-8 w-40 h-40 opacity-10" />
          <span className="font-mono text-xs tracking-widest opacity-80">
            OPS-07 / NEXT STEP
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold max-w-xl">
            Ready to set up your line and start generating EPR battery credits?
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base opacity-90">
            If you're specifying machinery or setting up a line right now, talk
            to our team for guidance specific to your chemistry and target
            capacity.
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
        <Eyebrow code="OPS-08">Common questions</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">
          Before you order equipment
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

export default function EPRBatteryMachineryOperations() {
  return (
    <div className="bg-background min-h-screen">
      <EfficiencyGauge />
      <div className="md:container pt-28 sm:pt-32 pb-24">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-10 xl:gap-14">
          <main className="min-w-0">
            <Seo
              title="EPR Battery Credits: Machinery, Setup & Operations Guide"
              description="Learn the machinery, infrastructure, setup, and operational requirements for Battery EPR credit generation and management. Explore compliance, collection systems, recycling processes, and best practices for producers, recyclers, and PROs."
              keywords={[
                "EPR Battery Credits",
                "Battery EPR Machinery",
                "Battery EPR Setup",
                "Battery EPR Operations",
                "Battery Recycling Equipment",
                "Battery Collection Infrastructure",
                "Battery Waste Management",
                "Battery EPR Compliance",
                "Battery Recycling Plant",
                "Battery Processing Equipment",
                "Battery Credit Generation",
                "Battery EPR Business",
                "Battery Recycling Operations",
                "PRO Battery Management",
                "CPCB Battery EPR",
                "What machinery is required for Battery EPR?",
                "How to set up a Battery EPR business?",
                "How to generate Battery EPR credits?",
                "Battery recycling plant setup guide",
                "Battery collection and processing infrastructure",
                "How to manage Battery EPR operations?",
                "Battery EPR compliance guide",
                "Battery recycling equipment in India",
                "Battery EPR implementation process",
                "Battery EPR operations guide 2026",
              ]}
              url="https://eprnexuss.com/blog/epr-battery-machinery"
              type="article"
            />
            <Hero />
            <ProcessLine />
            <CoreMachinery />
            <SetupConsiderations />
            <MachineryCostChart />
            {/* <ShiftThroughputChart /> */}
            <OpsLedger />
            <MaintenanceFlags />
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
