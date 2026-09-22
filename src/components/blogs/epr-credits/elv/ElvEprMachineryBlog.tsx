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
  Battery,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Cog,
  Droplets,
  Factory,
  FileCheck2,
  FileText,
  Flame,
  Gauge,
  Layers,
  Radio,
  Recycle,
  ShieldCheck,
  Sparkles,
  Timer,
  Truck,
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

const CAPACITY_DATA = [
  { name: "Small\nFacility", vehicles: 3000, fill: "#5AC361" },
  { name: "Medium\nFacility", vehicles: 8000, fill: "#3E9A47" },
  { name: "Large\nFacility", vehicles: 21000, fill: "#22702D" },
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
          <Cog className="h-3.5 w-3.5" />
          FACILITY SETUP · EPR END-OF-LIFE VEHICLE CREDITS
        </div>

        <h1
          className="animate-slide-up mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          EPR ELV Credits:
          <span className="block text-brandGreen">
            Machinery, Setup & Operations Guide
          </span>
        </h1>

        <p
          className="animate-slide-up mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          What actually goes on the floor of a compliant ELV recycling plant —
          the equipment you need, how the process runs vehicle to vehicle, and
          where operations most often fall out of compliance.
        </p>

        <div
          className="animate-slide-up mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#operations-flow"
            className="inline-flex items-center gap-2 rounded-xl bg-brandGreen px-5 py-3 text-sm font-semibold text-[#0B1210] transition-transform hover:scale-[1.03] hover:shadow-lg hover:shadow-brandGreen/20"
          >
            See the Operations Flow
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
          at /images/epr-elv-machinery-hero.jpg for production use */}
      <div className="relative z-10 mt-12 grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
        {[
          { icon: Droplets, label: "Depollution" },
          { icon: Layers, label: "Dismantling" },
          { icon: Recycle, label: "Shredding & Baling" },
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

// function ComingSoonBanner() {
//   return (
//     <Reveal>
//       <div className="flex flex-col items-start gap-4 rounded-2xl border border-brandGreen/25 bg-brandGreen/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
//         <div className="flex items-start gap-3 sm:items-center">
//           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brandGreen/15 text-brandGreen">
//             <Sparkles className="h-5 w-5" />
//           </div>
//           <div>
//             <p className="text-sm font-semibold text-foreground">
//               The full machinery deep-dive is on its way
//             </p>
//             <p className="mt-0.5 text-sm text-muted-foreground">
//               Our team is finalizing detailed equipment specs, vendor
//               shortlists, and throughput benchmarks. In the meantime, this
//               overview and our team can get you moving.
//             </p>
//           </div>
//         </div>
//         <a
//           href="#contact"
//           className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brandGreen px-4 py-2.5 text-sm font-semibold text-[#0B1210] transition-transform hover:scale-[1.03]"
//         >
//           Get Guidance Now
//           <ArrowRight className="h-4 w-4" />
//         </a>
//       </div>
//     </Reveal>
//   );
// }

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
        end={5}
        suffix=""
        label="Core Equipment Categories"
        active={visible}
      />
      <StatItem
        end={8}
        suffix="Cr"
        label="Typical Capex, Upper Range (₹)"
        active={visible}
      />
      <StatItem
        end={12}
        suffix="mo"
        label="Concept-to-Commissioning (up to)"
        active={visible}
      />
      <StatItem
        end={4}
        suffix=""
        label="Shredded-Residue Fractions"
        active={visible}
      />
    </div>
  );
}

/* ============================================================================
   4. EQUIPMENT CATEGORIES
============================================================================ */

const EQUIPMENT = [
  {
    icon: Droplets,
    title: "Depollution Equipment",
    detail:
      "Fluid-extraction rigs for fuel, oil, and coolant, plus mandatory refrigerant-recovery units — fluids are drained in sequence into labelled hazardous-class containers.",
  },
  {
    icon: Battery,
    title: "Battery Handling & Testing",
    detail:
      "Lithium-ion packs are removed during depollution and capacity-tested before routing to second-life use or a certified recycler under the Battery Waste Management Rules, 2022.",
  },
  {
    icon: Layers,
    title: "Dismantling & Lifting Equipment",
    detail:
      "Hydraulic cutters, vehicle lifts, cranes, and forklifts sized for the mix of two-wheelers, cars, and commercial vehicles the facility plans to handle.",
  },
  {
    icon: Recycle,
    title: "Shredding & Baling",
    detail:
      "A shredder and baler for the depolluted hulk — installed on-site or contracted to a shared shredding facility, depending on throughput and capex plan.",
  },
  {
    icon: Radio,
    title: "Digital Tracking Systems",
    detail:
      "VIN capture and mass-balance logging integrated with the VAHAN database, needed for Certificate of Deposit and Certificate of Scrapping issuance.",
  },
];

function EquipmentSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {EQUIPMENT.map((a, i) => (
        <Reveal key={a.title} delay={i * 80}>
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
   5. CAPACITY BENCHMARK CHART
============================================================================ */

// function ChartTooltip({ active, payload, label }: any) {
//   if (!active || !payload?.length) return null;
//   return (
//     <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-md">
//       <p className="font-medium text-popover-foreground">
//         {label?.replace("\n", " ")}
//       </p>
//       <p className="text-brandGreen">
//         {payload[0].value.toLocaleString()} vehicles / year
//       </p>
//     </div>
//   );
// }

// function CapacityChart() {
//   const { ref, visible } = useReveal<HTMLDivElement>();
//   return (
//     <div
//       ref={ref}
//       className="rounded-2xl border border-border bg-card p-6 sm:p-8"
//     >
//       <div className="mb-6 flex items-start justify-between gap-4">
//         <div>
//           <h3 className="font-display text-lg font-semibold text-foreground">
//             Facility Scale vs. Annual Capacity
//           </h3>
//           <p className="mt-1 text-sm text-muted-foreground">
//             Indicative processing volumes reported at operating facilities of
//             different sizes — useful for sizing your own equipment and layout
//             plan.
//           </p>
//         </div>
//         <Gauge className="hidden h-8 w-8 shrink-0 text-brandGreen/40 sm:block" />
//       </div>

//       <div className="h-72 w-full sm:h-80">
//         {visible && (
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               data={CAPACITY_DATA}
//               margin={{ top: 8, right: 8, left: 8, bottom: 8 }}
//             >
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 vertical={false}
//                 className="stroke-border"
//               />
//               <XAxis
//                 dataKey="name"
//                 tick={{ fontSize: 12, fill: "currentColor" }}
//                 className="text-muted-foreground"
//               />
//               <YAxis
//                 tick={{ fontSize: 11, fill: "currentColor" }}
//                 className="text-muted-foreground"
//                 label={{
//                   value: "Vehicles / Year",
//                   angle: -90,
//                   position: "insideLeft",
//                   fontSize: 11,
//                 }}
//               />
//               <Tooltip
//                 content={<ChartTooltip />}
//                 cursor={{ fill: "rgba(90,195,97,0.08)" }}
//               />
//               <Bar
//                 dataKey="vehicles"
//                 radius={[6, 6, 0, 0]}
//                 animationDuration={1200}
//               >
//                 {CAPACITY_DATA.map((entry) => (
//                   <Cell key={entry.name} fill={entry.fill} />
//                 ))}
//               </Bar>
//             </BarChart>
//           </ResponsiveContainer>
//         )}
//       </div>
//       <p className="mt-4 text-xs text-muted-foreground">
//         * Indicative benchmarks drawn from publicly reported facility
//         capacities, not a guaranteed output for any given site — actual
//         throughput depends on equipment, staffing, and ELV inflow.
//       </p>
//     </div>
//   );
// }

/* ============================================================================
   6. OPERATIONS FLOW (signature element)
============================================================================ */

type Step = { title: string; detail: string; icon: any };

function OperationsSteps({ steps }: { steps: Step[] }) {
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

const OPERATIONS_STEPS: Step[] = [
  {
    icon: ClipboardList,
    title: "Intake, Inspection & Documentation",
    detail:
      "Ownership, VIN, and vehicle history are verified against VAHAN records before a vehicle is accepted onto the floor.",
  },
  {
    icon: Droplets,
    title: "Sequenced Depollution",
    detail:
      "Fuel, oil, and coolant are drained in sequence into labelled hazardous-class containers; refrigerant is recovered rather than vented.",
  },
  {
    icon: Battery,
    title: "Battery Removal & Testing",
    detail:
      "Lead-acid and lithium-ion packs are pulled and tested, then routed to second-life use or a certified battery recycler.",
  },
  {
    icon: Wrench,
    title: "Dismantling & Parts Recovery",
    detail:
      "Reusable components are extracted and catalogued as certified second-hand parts before the remaining structure moves on.",
  },
  {
    icon: Layers,
    title: "Material Segregation",
    detail:
      "Steel, aluminium, plastic, rubber, and glass are sorted into designated zones ahead of shredding or direct sale.",
  },
  {
    icon: Recycle,
    title: "Shredding & Baling",
    detail:
      "The depolluted hulk is shredded and baled — on-site or at a shared facility — separating ferrous scrap from residue fractions.",
  },
  {
    icon: FileCheck2,
    title: "Certificate Generation & Digital Reporting",
    detail:
      "Certificate of Deposit and Certificate of Scrapping are issued, VAHAN is updated, and the mass-balance record is logged for audit.",
  },
];

/* ============================================================================
   7. COMPLIANCE RISKS
============================================================================ */

const RISKS = [
  "Operating without RVSF registration exposes the facility to penalties under the Motor Vehicles Act and Environmental Acts.",
  "Improper hazardous waste handling can draw penalties reported up to ₹1 lakh per day under the Hazardous Waste (Management & Transboundary Movement) Rules.",
  "Non-reporting or mismatched mass-balance data risks suspension and blacklisting from VAHAN integration.",
  "Fire or safety non-compliance found at inspection can trigger immediate revocation of authorization.",
  "Vehicles processed outside the registered, documented flow no longer count toward EPR compliance under the current framework.",
];

function RisksSection() {
  return (
    <div className="overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">
          Where Operations Most Often Slip Out of Compliance
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
   8. FAQ SECTION
============================================================================ */

const FAQS = [
  {
    q: "What equipment is an RVSF actually required to hold?",
    a: "The AIS-129 industry standard sets out a recommended equipment list for depollution, dismantling, and shredding operations, which inspecting authorities check against during registration and audit.",
  },
  {
    q: "Can shredding be outsourced instead of installed on-site?",
    a: "Yes — some facilities install a shredder on-site, while others send the depolluted hulk to a shared shredding facility. Both are recognized approaches; the right choice depends on your throughput and capex plan.",
  },
  {
    q: "How long does setup typically take from concept to commissioning?",
    a: "Reported timelines run roughly six to twelve months for a well-planned facility, though this varies with state-specific processes, construction pace, and equipment lead times.",
  },
  {
    q: "What happens to a lithium-ion battery pack pulled from an EV?",
    a: "It's tested for remaining capacity and routed either to a second-life application or a certified recycler under the Battery Waste Management Rules, 2022.",
  },
  {
    q: "Is this the complete, final operations guide?",
    a: "This is a working overview while our team finalizes a full deep-dive with detailed equipment specs and throughput benchmarks. Reach out for current, situation-specific guidance in the meantime.",
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
   9. FINAL CTA
============================================================================ */

function FinalCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-[#0B1210] px-6 py-12 text-center text-white sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brandGreen/20 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-xl">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brandGreen/15 text-brandGreen">
          <Factory className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl font-bold sm:text-3xl">
          Ready to Set Up Your ELV Recycling Facility?
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
         Talk to our team now for
          guidance tailored to your setup.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/contact"
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

export default function EPRELVCreditsMachinerySetupOperations() {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 lg:pt-32">
      <div className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-4">
          {/* MAIN CONTENT */}
          <main className="min-w-0 space-y-16 sm:space-y-20">
            <Seo
              title="EPR ELV Credits: Machinery, Setup & Operations Guide"
              description="Learn the machinery, facility setup, infrastructure, and operational requirements for EPR ELV Credits. Explore vehicle dismantling equipment, recycling processes, compliance requirements, and best practices for producers, recyclers, and PROs."
              keywords={[
                "EPR ELV Credits",
                "ELV Machinery",
                "ELV Recycling Equipment",
                "Vehicle Dismantling Equipment",
                "ELV Business Setup",
                "ELV Operations",
                "End-of-Life Vehicle Recycling",
                "Vehicle Scrappage Facility",
                "Automobile Recycling",
                "ELV Processing Equipment",
                "Vehicle Recycling Plant",
                "ELV Compliance",
                "Extended Producer Responsibility",
                "PRO Services",
                "Environmental Compliance",
                "What machinery is required for ELV recycling?",
                "How to set up an ELV recycling facility?",
                "How to generate ELV EPR credits?",
                "Vehicle dismantling plant setup guide",
                "ELV recycling equipment in India",
                "How to manage ELV operations?",
                "ELV compliance guide",
                "Vehicle recycling business setup",
                "ELV implementation process",
                "ELV operations guide 2026",
              ]}
              url="https://eprnexuss.com/blog/epr-elv-machinery"
              type="article"
            />
            <HeroSection />

            {/* <ComingSoonBanner /> */}

            <QuickStatsBar />

            {/* mobile-only contact form, appears inline (not sticky) */}
            <div className="lg:hidden">
              <StickyContactForm />
            </div>

            <BlogSection
              id="equipment"
              eyebrow="What's on the Floor"
              title="The Core Equipment Categories"
              intro="AIS-129 sets out the equipment inspecting authorities check for. Here's how it groups by function, from first fluid drain to final certificate."
            >
              <EquipmentSection />
            </BlogSection>

            {/* <BlogSection
              id="capacity"
              eyebrow="Sizing Your Setup"
              title="How Facility Scale Shapes Equipment Needs"
              intro="Throughput ambitions drive equipment choice as much as compliance does. Here's how reported capacity scales with facility size."
            >
              <CapacityChart />
            </BlogSection> */}

            <BlogSection
              id="operations-flow"
              eyebrow="How It Runs"
              title="The Operations Flow, Vehicle to Vehicle"
              intro="From intake to certificate, here's the sequence a compliant facility follows for every vehicle that comes through the gate."
            >
              <OperationsSteps steps={OPERATIONS_STEPS} />
            </BlogSection>

            <BlogSection
              id="risks"
              eyebrow="Learn From Others"
              title="Where Operations Most Often Slip"
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
              This overview is for general informational purposes and reflects
              publicly reported practice around ELV recycling plant equipment
              and operations in India — it isn't legal, financial, or
              engineering advice. Equipment norms, capacities, and penalties
              vary by state and change over time, so confirm current
              requirements with your state authorities and a qualified
              compliance or technical professional before acting.
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
