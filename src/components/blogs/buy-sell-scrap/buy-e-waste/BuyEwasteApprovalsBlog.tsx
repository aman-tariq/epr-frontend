"use client";

import { useEffect, useRef, useState } from "react";
import {
  Recycle,
  Factory,
  Users,
  ShieldCheck,
  ArrowRight,
  Plus,
  Minus,
  Building2,
  Leaf,
  Info,
  Clock,
  FileCheck2,
  FileText,
  Landmark,
  Gavel,
  ClipboardCheck,
  BadgeCheck,
  ListChecks,
  CircleAlert,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
/* Sources: E-Waste (Management) Rules, 2022 (MoEFCC, in force 1 Apr    */
/* 2023) & Second Amendment Rules, 2023; CPCB EPR Portal SOP            */
/* (eprewastecpcb.in); Lexology / Saikrishna & Associates legal notes.  */
/* ------------------------------------------------------------------ */
const snapshot = [
  { icon: FileText, value: "106", label: "EEE product categories in scope" },
  {
    icon: Landmark,
    value: "1 Apr 2023",
    label: "E-Waste Rules 2022 came into force",
  },
  {
    icon: ClipboardCheck,
    value: "25 days",
    label: "CPCB scrutiny window for applications",
  },
  {
    icon: Gavel,
    value: "₹20k–80k",
    label: "Environmental compensation, per default",
  },
];

const roadmapSteps = [
  {
    icon: ListChecks,
    title: "Identify your registration category",
    body: "Producer, Manufacturer, Refurbisher, or Recycler/Dismantler — each has a separate registration on the CPCB EPR Portal. Entities that fall into more than one category register separately for each.",
  },
  {
    icon: Building2,
    title: "Secure state-level consents first",
    body: "Recyclers and facility-owning producers need Consent to Establish (CTE) and Consent to Operate (CTO) from their State Pollution Control Board, plus Hazardous Waste Authorisation where applicable — these are prerequisites, not paperwork you can backfill later.",
  },
  {
    icon: FileCheck2,
    title: "Create your account and file Part A & B",
    body: "Register on eprewastecpcb.in with PAN, GSTIN or CIN, verify by OTP, then submit the application in two parts covering entity details and product/EEE data, with CTE, CTO, and incorporation documents attached.",
  },
  {
    icon: ClipboardCheck,
    title: "CPCB scrutiny and query resolution",
    body: "CPCB reviews complete applications and flags shortcomings within 25 working days; you get 7 working days to respond to any query before the file moves back into the approval queue.",
  },
  {
    icon: BadgeCheck,
    title: "Registration certificate & EPR targets issued",
    body: "Once approved, the portal issues a Registration Certificate listing your registered EEE codes and — for producers — the annual EPR recycling target you're now obligated to meet.",
  },
  {
    icon: ShieldCheck,
    title: "File quarterly returns, buy certificates as needed",
    body: "Producers short of their target purchase EPR certificates from registered recyclers online and submit them with quarterly returns; certificates stay valid for two years from the end of the financial year they were generated in.",
  },
];

const targetData = [
  { period: "FY23-24", target: 60 },
  { period: "FY24-25", target: 60 },
  { period: "FY25-26", target: 70 },
  { period: "FY26-27", target: 70 },
  { period: "FY27-28", target: 80 },
];

const penaltyData = [
  { tier: "1st default", Producer: 20000, Recycler: 15000 },
  { tier: "Repeated default", Producer: 80000, Recycler: 60000 },
];

const refundSchedule = [
  { window: "Corrected within 1 year", pct: 85 },
  { window: "Corrected within 2 years", pct: 60 },
  { window: "Corrected within 3 years", pct: 30 },
  { window: "After 3 years", pct: 0 },
];

const producerDocs = [
  "PAN, GST certificate, and IEC (for importers)",
  "Certificate of Incorporation, LLP deed, or partnership deed",
  "List of EEE items to be sold (Enclosure A, per notified schedule)",
  "Signed agreements with CPCB-registered recyclers",
  "E-waste awareness plan and budget, where applicable",
];

const recyclerDocs = [
  "CTE and CTO from the State Pollution Control Board",
  "Hazardous Waste Authorisation, where applicable",
  "Registered office and plant address with geo-coordinates",
  "Installed recycling capacity and year of establishment",
  "Facility geo-video and a self-declaration letter",
];

const audiences = [
  {
    icon: Factory,
    title: "Producers & Brand Owners",
    body: "Know exactly which documents, consents, and filings stand between you and a valid EPR registration before your next launch.",
  },
  {
    icon: Recycle,
    title: "Recyclers & Processors",
    body: "Get your CTE/CTO and portal registration in order so you can legally generate and trade EPR certificates without delay.",
  },
  {
    icon: Users,
    title: "PROs & Aggregators",
    body: "Understand where your member producers' compliance risk actually sits, from filing deadlines to environmental compensation exposure.",
  },
];

const faqs = [
  {
    q: "How long does CPCB registration realistically take?",
    a: "With a complete application, CPCB's own scrutiny window is 25 working days, plus 7 working days for any query response. In practice, most applicants budget around four to six weeks end to end once documentation is ready.",
  },
  {
    q: "What happens if we miss our EPR target for the year?",
    a: "Environmental compensation is levied based on the average cost of collecting, transporting, and recycling the shortfall quantity. Paying the compensation does not remove the underlying obligation — it still needs to be met.",
  },
  {
    q: "Can environmental compensation ever be refunded?",
    a: "Yes, partially, if the shortfall is corrected afterward: 85% is returned if corrected within one year, 60% within two years, and 30% within three years. Nothing is returned after three years.",
  },
  {
    q: "Do we need separate registrations if we both manufacture and recycle?",
    a: "Yes. An entity operating in more than one category — for example, both producer and refurbisher — registers separately under each relevant category on the CPCB portal.",
  },
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                                */
/* ------------------------------------------------------------------ */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
      <Leaf className="h-3.5 w-3.5 text-brandGreen" />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                       */
/* ------------------------------------------------------------------ */
export default function BuyEWasteComplianceBlog() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative w-full bg-background">
      {/* Extra clearance so a fixed/pre-built navbar never collides with content */}
      <div className="pt-24 md:pt-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-8">
          {/* ============================================================ */}
          {/* MAIN CONTENT COLUMN                                          */}
          {/* ============================================================ */}

          <Seo
            title="Buy E-Waste: Approvals, Registration & Compliance Roadmap"
            description="Learn the approvals, registrations, and compliance requirements for buying e-waste in India. Follow a complete roadmap to meet CPCB regulations, avoid penalties, and operate legally."
            keywords={[
              "Buy E-Waste",
              "E-Waste Registration",
              "E-Waste Compliance",
              "E-Waste Approvals",
              "E-Waste Business License",
              "CPCB E-Waste Registration",
              "E-Waste Rules India",
              "Electronic Waste Management",
              "E-Waste Business Compliance",
              "E-Waste Recycling Regulations",
              "Environmental Compliance",
              "Waste Management Authorization",
              "E-Waste Trading",
              "E-Waste Business India",
              "Regulatory Compliance",
              "How to get approval to buy e-waste?",
              "How to register an e-waste business in India?",
              "What licenses are required for e-waste trading?",
              "How to comply with CPCB e-waste rules?",
              "Who can buy e-waste legally?",
              "Documents required for e-waste registration",
              "How to start an e-waste buying business?",
              "E-waste compliance checklist for businesses",
              "How to avoid e-waste compliance penalties?",
              "E-waste registration process in India",
            ]}
            url="https://eprnexuss.com/blog/buy-e-waste-approvals"
            type="article"
          />
          <main className="min-w-0">
            {/* 1. HERO — split layout, roadmap preview card on the right */}
            <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="animate-fade-in">
                <SectionEyebrow>
                  Approvals, Registration &amp; Compliance Roadmap
                </SectionEyebrow>
                <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                  Buy e-waste the{" "}
                  <span className="bg-gradient-to-r from-primary to-brandGreen bg-clip-text text-transparent">
                    compliant way
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                  A practical roadmap through CPCB registration, approvals, and
                  ongoing compliance for anyone buying e-waste scrap — built for
                  producers, recyclers, and PROs.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#roadmap"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
                  >
                    Walk the roadmap
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Full deep-dive guide in progress
                  </span>
                </div>
              </div>

              <Reveal delay={100}>
                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    At a glance
                  </p>
                  <ul className="mt-4 space-y-4">
                    {roadmapSteps.slice(0, 4).map((s, i) => (
                      <li key={s.title} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brandGreen/15 text-xs font-semibold text-brandGreen">
                          {i + 1}
                        </span>
                        <span className="text-sm text-foreground">
                          {s.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#roadmap"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    See all 6 steps
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Reveal>
            </section>

            {/* 2. COMPLIANCE SNAPSHOT — static bento grid, no ticker this time */}
            <Reveal
              className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
              delay={50}
            >
              {snapshot.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="rounded-xl bg-secondary/40 p-2.5 text-secondary-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="font-display text-2xl font-semibold text-foreground">
                    {s.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </Reveal>
            <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Info className="h-3.5 w-3.5" />
              Source: E-Waste (Management) Rules, 2022 &amp; Second Amendment
              Rules, 2023 (MoEFCC); CPCB EPR Portal SOP.
            </p>

            {/* 3. ROADMAP — vertical stepper with connecting line */}
            <section id="roadmap" className="mt-20">
              <Reveal>
                <SectionEyebrow>The registration roadmap</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Six steps from application to active trading
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  This is the real sequence CPCB's own SOP lays out — skipping
                  ahead (say, buying certificates before registration clears)
                  isn't just risky, it isn't possible on the portal.
                </p>
              </Reveal>

              <div className="relative mt-10 ml-3 space-y-8 border-l-2 border-dashed border-border pl-8">
                {roadmapSteps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 70}>
                    <div className="relative">
                      <span className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground ring-4 ring-background">
                        {i + 1}
                      </span>
                      <div className="rounded-2xl border border-border bg-card p-5">
                        <div className="flex items-center gap-2">
                          <step.icon className="h-4.5 w-4.5 text-brandGreen" />
                          <h3 className="font-display text-lg font-semibold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 4. EPR TARGET TIMELINE — stepped bar chart */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Schedule III targets</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Your recycling target rises on a fixed schedule
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Targets are set as a share of what a producer sold, averaged
                  over each product's typical lifespan, and step up every two
                  financial years.
                </p>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-8 rounded-2xl border border-border bg-card p-4 sm:p-6"
              >
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={targetData}
                      margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        dataKey="period"
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
                        unit="%"
                        domain={[0, 100]}
                      />
                      <Tooltip
                        cursor={{ fill: "hsl(var(--muted))" }}
                        contentStyle={{
                          background: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.75rem",
                          color: "hsl(var(--popover-foreground))",
                          fontSize: "0.85rem",
                        }}
                      />
                      <Bar
                        dataKey="target"
                        name="Recycling target"
                        radius={[8, 8, 0, 0]}
                      >
                        {targetData.map((_, i) => (
                          <Cell
                            key={i}
                            fill="hsl(var(--primary))"
                            fillOpacity={0.4 + i * 0.12}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Info className="h-3.5 w-3.5" />
                  Source: Schedule III, E-Waste (Management) Rules, 2022.
                </p>
              </Reveal>
            </section>

            {/* 5. DOCUMENT CHECKLIST — two-column comparison, new component type */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Paperwork, sorted</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  What each side needs on file
                </h2>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                <Reveal>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-center gap-2">
                      <Factory className="h-5 w-5 text-primary" />
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        Producers
                      </h3>
                    </div>
                    <ul className="mt-4 space-y-3">
                      {producerDocs.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-brandGreen" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-center gap-2">
                      <Recycle className="h-5 w-5 text-primary" />
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        Recyclers &amp; Dismantlers
                      </h3>
                    </div>
                    <ul className="mt-4 space-y-3">
                      {recyclerDocs.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-brandGreen" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* 6. ENVIRONMENTAL COMPENSATION — penalty bar chart + refund schedule */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>When things go wrong</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Environmental compensation escalates fast
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Penalties rise sharply after a first default, and paying them
                  doesn't erase the underlying obligation — the shortfall still
                  has to be met.
                </p>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-8 rounded-2xl border border-border bg-card p-4 sm:p-6"
              >
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={penaltyData}
                      margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        dataKey="tier"
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
                        tickFormatter={(v) => `₹${v / 1000}k`}
                      />
                      <Tooltip
                        cursor={{ fill: "hsl(var(--muted))" }}
                        formatter={(v: number) => [
                          `₹${v.toLocaleString("en-IN")}`,
                          "",
                        ]}
                        contentStyle={{
                          background: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.75rem",
                          color: "hsl(var(--popover-foreground))",
                          fontSize: "0.85rem",
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: "0.8rem" }} />
                      <Bar
                        dataKey="Producer"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.6}
                        radius={[8, 8, 0, 0]}
                      />
                      <Bar
                        dataKey="Recycler"
                        fill="#5AC361"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Info className="h-3.5 w-3.5" />
                  Source: E-Waste (Management) Rules, 2022, Environmental
                  Compensation regime (illustrative first-default and
                  repeated-default tiers reported in legal analyses of the
                  rules).
                </p>
              </Reveal>

              <Reveal
                delay={140}
                className="mt-6 rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex items-center gap-2">
                  <CircleAlert className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Compensation is partly refundable if you fix the shortfall
                  </h3>
                </div>
                <div className="space-y-4">
                  {refundSchedule.map((r) => (
                    <div key={r.window}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {r.window}
                        </span>
                        <span className="font-display font-semibold text-foreground">
                          {r.pct}% returned
                        </span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brandGreen to-primary transition-all duration-1000"
                          style={{ width: `${r.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* 7. WHO THIS IS FOR */}
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
                    <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6">
                      <div className="w-fit shrink-0 rounded-xl bg-primary/10 p-2.5 text-primary">
                        <a.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {a.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {a.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 8. FAQ — plus/minus disclosure, different from chevron style */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Common questions</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Before you register
                </h2>
              </Reveal>
              <div className="mt-8 space-y-3">
                {faqs.map((item, i) => {
                  const open = openFaq === i;
                  return (
                    <Reveal key={item.q} delay={i * 60}>
                      <div className="overflow-hidden rounded-2xl border border-border bg-card">
                        <button
                          onClick={() => setOpenFaq(open ? null : i)}
                          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                          aria-expanded={open}
                        >
                          <span className="font-medium text-foreground">
                            {item.q}
                          </span>
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/50 text-secondary-foreground">
                            {open ? (
                              <Minus className="h-3.5 w-3.5" />
                            ) : (
                              <Plus className="h-3.5 w-3.5" />
                            )}
                          </span>
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
                    </Reveal>
                  );
                })}
              </div>
            </section>

            {/* 9. STILL FINALIZING NOTICE */}
            <Reveal className="mt-16">
              <div className="flex flex-col items-start gap-4 rounded-2xl border border-dashed border-brandGreen/40 bg-brandGreen/5 p-6 sm:flex-row sm:items-center">
                <Clock className="h-6 w-6 shrink-0 text-brandGreen" />
                <p className="text-sm text-muted-foreground">
                  This roadmap covers the core registration and compliance path.
                  Our team is finalizing a full deep-dive with state-by-state
                  consent timelines and category-specific filing templates.
                </p>
              </div>
            </Reveal>

            {/* 10. CTA BANNER */}
            <Reveal className="mt-8 mb-16">
              <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-12 text-center sm:px-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brandGreen/25 blur-3xl"
                />
                <ShieldCheck className="mx-auto h-8 w-8 text-brandGreen" />
                <h2 className="mt-4 font-display text-2xl font-bold text-background sm:text-3xl">
                  Need help with a live filing?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm text-background/70">
                  Reach out for immediate guidance on registration,
                  documentation, or a compliance gap you're working through
                  right now.
                </p>
                <a
                  href="/contact"
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
