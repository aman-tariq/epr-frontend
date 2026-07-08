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
  Tags,
  ArrowRightLeft,
  Landmark,
  BadgeIndianRupee,
  ShieldAlert,
  CheckCircle2,
  Timer,
  Layers,
  FileSearch,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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
/* Sources: "How India's e-waste rules found their teeth" (Zerodha      */
/* Daily Brief, 2026); SORT Consultancy, EPR Certificates & Credit      */
/* Trading Guide 2025; Mordor Intelligence, India E-waste Management    */
/* Market; RecycleKaro / MoEFCC data on 2024 certificate volumes.       */
/* ------------------------------------------------------------------ */
const priceRangeData = [
  { category: "Tyres", base: 0.3, range: 0.5 },
  { category: "Plastics", base: 0.5, range: 1.5 },
  { category: "E-waste", base: 10, range: 40 },
  { category: "Batteries", base: 20, range: 30 },
];

const certCategories = [
  {
    code: "ITEW",
    label: "IT & telecom equipment waste — laptops, servers, phones",
  },
  { code: "CEEW", label: "Consumer electronics waste — TVs, appliances" },
  {
    code: "LHEW",
    label: "Large household equipment waste — ACs, refrigerators",
  },
  {
    code: "SHEW",
    label: "Small household equipment waste — mixers, irons, toys",
  },
];

const marketplaceFlow = [
  {
    icon: Factory,
    title: "Target is set",
    body: "A producer's annual e-waste recycling obligation is calculated from historical sales.",
  },
  {
    icon: Recycle,
    title: "Recycler generates a certificate",
    body: "A registered recycler processes e-waste and generates a certificate on CPCB's EPRETP.",
  },
  {
    icon: ArrowRightLeft,
    title: "Certificate is traded",
    body: "Producers short of target buy certificates by category and weight at the market price.",
  },
  {
    icon: CheckCircle2,
    title: "Obligation is retired",
    body: "The purchased certificate is submitted against the producer's quarterly or annual return.",
  },
];

const lifecycleFacts = [
  {
    icon: Timer,
    value: "2 years",
    label: "Certificate validity from date of generation",
  },
  {
    icon: Layers,
    value: "Per kg",
    label: "Certificates are denominated by weight",
  },
  {
    icon: Landmark,
    value: "EPRETP",
    label: "CPCB's dedicated trading & settlement platform",
  },
  {
    icon: Tags,
    value: "By category",
    label: "Pricing varies by EEE category, not a flat rate",
  },
];

const scaleStats = [
  {
    value: "₹22/kg",
    label: "Government-set floor price for e-waste certificates (Mar 2024)",
  },
  { value: "$65M", label: "Estimated annual e-waste EPR-certificate market" },
  {
    value: "1.2 Mt",
    label: "E-waste recycled and certified in 2024 (MoEFCC data)",
  },
];

const riskFlags = [
  {
    icon: ShieldAlert,
    title: "Verify the recycler, not just the price",
    body: "A certificate only counts toward your obligation if it comes from a CPCB-registered recycler trading through the portal — a cheap certificate from an unregistered source is worthless on paper.",
  },
  {
    icon: FileSearch,
    title: "Check registration and CTO status before buying",
    body: "Recycler registration and Consent to Operate can lapse or be revoked; buyers are expected to confirm current status, not rely on a past relationship.",
  },
  {
    icon: BadgeIndianRupee,
    title: "A price far below the floor is a red flag",
    body: "With a government floor price in place for e-waste, offers significantly under it are worth extra scrutiny before you commit budget.",
  },
];

const audiences = [
  {
    icon: Factory,
    title: "Producers & Brand Owners",
    body: "Time certificate purchases against category pricing instead of buying reactively near your filing deadline.",
  },
  {
    icon: Recycle,
    title: "Recyclers & Processors",
    body: "Understand where your certificates sit in the market's price band so you're not underselling verified recycling.",
  },
  {
    icon: Building2,
    title: "PROs & Aggregators",
    body: "Pool and price certificates across member recyclers with a clear view of category-level market ranges.",
  },
];

const faqs = [
  {
    q: "Where does e-waste EPR certificate trading actually happen?",
    a: "On CPCB's EPR Electronic Trading and Settlement Platform (EPRETP), plus a small number of private marketplaces that route trades back through registered, CPCB-recognised entities.",
  },
  {
    q: "Why is e-waste priced so much higher per kg than plastic?",
    a: "E-waste certificates reflect the cost and complexity of dismantling, sorting, and recovering hazardous and precious materials safely — plastic recycling is comparatively simpler and cheaper per kilogram.",
  },
  {
    q: "Does the floor price mean all e-waste certificates cost the same?",
    a: "No — ₹22/kg is a floor, not a fixed price. Certificates still trade anywhere in the reported ₹10–₹50/kg range depending on EEE category, recycler location, and how close a buyer is to its filing deadline.",
  },
  {
    q: "Can a producer sell surplus certificates?",
    a: "Yes. If a producer or recycler generates more certified recycling than its own obligation requires, the surplus can be listed and sold to other obligated entities.",
  },
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                                */
/* ------------------------------------------------------------------ */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-secondary/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
      <ArrowRightLeft className="h-3.5 w-3.5 text-brandGreen" />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                       */
/* ------------------------------------------------------------------ */
export default function BuyEWasteCreditTradingBlog() {
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
            title="Buy E-Waste: Credit Trading & Marketplace Guide"
            description="Learn how e-waste credit trading works, explore marketplace opportunities, understand EPR credit mechanisms, and discover best practices for buying e-waste while maximizing compliance and business profitability."
            keywords={[
              "Buy E-Waste",
              "E-Waste Credit Trading",
              "E-Waste Marketplace",
              "EPR Credit Trading",
              "EPR Certificates",
              "E-Waste Business",
              "Electronic Waste Trading",
              "E-Waste Recycling",
              "EPR Compliance",
              "Circular Economy",
              "E-Waste Management",
              "Waste Credit Marketplace",
              "Sustainability Credits",
              "Recycling Business",
              "E-Waste Trading India",
              "How does e-waste credit trading work?",
              "What are EPR credits?",
              "How to buy e-waste credits?",
              "How to sell EPR certificates?",
              "E-waste marketplace in India",
              "How to earn from e-waste credit trading?",
              "Benefits of EPR credit trading",
              "How to trade recycling credits?",
              "Best e-waste trading platform",
              "E-waste credit trading guide 2026",
            ]}
            url="https://eprnexuss.com/blog/buy-e-waste-trading"
            type="article"
          />
          <main className="min-w-0">
            {/* 1. HERO — light card with ticket-style cut corners */}
            <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 sm:px-10 sm:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-secondary/40 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-brandGreen/15 blur-3xl"
              />
              <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="animate-fade-in">
                  <SectionEyebrow>
                    Credit Trading &amp; Marketplace Guide
                  </SectionEyebrow>
                  <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                    Buy e-waste credits{" "}
                    <span className="bg-gradient-to-r from-brandGreen to-primary bg-clip-text text-transparent">
                      at the right price
                    </span>
                  </h1>
                  <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                    A practical look at how EPR certificate trading for e-waste
                    actually prices and clears — built for producers, recyclers,
                    and PROs.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="#price-band"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
                    >
                      See the price band
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      Full deep-dive guide in progress
                    </span>
                  </div>
                </div>

                <Reveal delay={100}>
                  <div className="relative rounded-2xl bg-foreground p-6 text-background shadow-lg">
                    <div
                      aria-hidden
                      className="absolute -left-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-background"
                    />
                    <div
                      aria-hidden
                      className="absolute -right-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-background"
                    />
                    <p className="text-xs font-semibold uppercase tracking-wider text-background/50">
                      E-waste certificate · sample ticket
                    </p>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold text-brandGreen">
                        ₹10–₹50
                      </span>
                      <span className="text-sm text-background/60">per kg</span>
                    </div>
                    <div className="mt-3 border-t border-dashed border-background/20 pt-3 text-xs text-background/60">
                      Government floor: ₹22/kg (since Mar 2024) · Valid 2 years
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* 2. PRICE BAND GAUGE — signature element */}
            <section id="price-band" className="mt-16">
              <Reveal>
                <SectionEyebrow>Where prices actually sit</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  A floor price, not a fixed one
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Since March 2024, e-waste certificates can't legally trade
                  below ₹22/kg — but that still leaves a wide band above it for
                  category, location, and timing to move the price.
                </p>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8"
              >
                <div className="relative h-3 w-full rounded-full bg-muted">
                  <div
                    className="absolute h-3 rounded-full bg-gradient-to-r from-secondary to-brandGreen"
                    style={{ left: "20%", width: "80%" }}
                  />
                  <div
                    className="absolute -top-1 h-5 w-0.5 bg-foreground"
                    style={{ left: "44%" }}
                  />
                </div>
                <div className="mt-3 flex justify-between text-xs text-muted-foreground">
                  <span>₹0/kg</span>
                  <span>₹50/kg</span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-secondary to-brandGreen" />
                    Reported trading range: ₹10–₹50/kg
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-foreground">
                    <span className="h-3 w-0.5 bg-foreground" />
                    Government floor: ₹22/kg
                  </span>
                </div>
                <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Info className="h-3.5 w-3.5" />
                  Source: analysis of India's e-waste rules, Zerodha Daily Brief
                  (2026 reporting on 2024-25 pricing).
                </p>
              </Reveal>
            </section>

            {/* 3. CERTIFICATE CATEGORIES */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Know your category code</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Certificates trade by EEE category, not in bulk
                </h2>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {certCategories.map((c, i) => (
                  <Reveal key={c.code} delay={i * 60}>
                    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-display text-sm font-bold text-primary">
                        {c.code}
                      </span>
                      <p className="text-sm text-muted-foreground">{c.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 4. CROSS-CATEGORY PRICE COMPARISON — floating range bar chart */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>How e-waste compares</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  E-waste trades in a different league than plastic or tyres
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Recovery complexity, not just weight, sets the price — which
                  is why e-waste and batteries command a far higher per-kilogram
                  rate than bulkier waste streams.
                </p>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-8 rounded-2xl border border-border bg-card p-4 sm:p-6"
              >
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={priceRangeData}
                      layout="vertical"
                      margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
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
                        unit="/kg"
                      />
                      <YAxis
                        dataKey="category"
                        type="category"
                        width={80}
                        tick={{
                          fill: "hsl(var(--muted-foreground))",
                          fontSize: 12,
                        }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        cursor={{ fill: "hsl(var(--muted))" }}
                        formatter={(v: number, name: string, props: any) => {
                          if (name === "range") {
                            const base = props?.payload?.base ?? 0;
                            return [
                              `₹${base}–₹${(base + v).toFixed(1)}/kg`,
                              "Reported range",
                            ];
                          }
                          return [v, name];
                        }}
                        contentStyle={{
                          background: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.75rem",
                          color: "hsl(var(--popover-foreground))",
                          fontSize: "0.85rem",
                        }}
                      />
                      <Bar dataKey="base" stackId="a" fill="transparent" />
                      <Bar
                        dataKey="range"
                        stackId="a"
                        fill="hsl(var(--primary))"
                        radius={[0, 8, 8, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Info className="h-3.5 w-3.5" />
                  Source: SORT Consultancy, EPR Certificates &amp; Credit
                  Trading Guide (2025). Reported market ranges in ₹/kg; actual
                  trades vary by buyer, seller, and timing.
                </p>
              </Reveal>
            </section>

            {/* 5. MARKETPLACE FLOW — horizontal cards with connecting arrows */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>How a trade actually clears</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Four steps from obligation to closed filing
                </h2>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {marketplaceFlow.map((step, i) => (
                  <Reveal key={step.title} delay={i * 70} className="relative">
                    <div className="h-full rounded-2xl border border-border bg-card p-5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brandGreen/15 text-brandGreen">
                        <step.icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="mt-3 font-display text-base font-semibold text-foreground">
                        {i + 1}. {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                    {i < marketplaceFlow.length - 1 && (
                      <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-border lg:block" />
                    )}
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 6. CERTIFICATE LIFECYCLE FACTS */}
            <Reveal className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {lifecycleFacts.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="rounded-xl bg-secondary/40 p-2.5 text-secondary-foreground">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div className="font-display text-2xl font-semibold text-foreground">
                    {f.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{f.label}</p>
                </div>
              ))}
            </Reveal>

            {/* 7. MARKET SCALE STATS */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>The market at scale</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  A real, if young, market for e-waste credits
                </h2>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {scaleStats.map((s, i) => (
                  <Reveal key={s.label} delay={i * 80}>
                    <div className="h-full rounded-2xl bg-gradient-to-b from-brandGreen/10 to-transparent p-6 text-center">
                      <p className="font-display text-3xl font-bold text-foreground">
                        {s.value}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {s.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 8. RISK FLAGS FOR BUYERS */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Before you click buy</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Cheap certificates carry hidden risk
                </h2>
              </Reveal>
              <div className="mt-10 space-y-5">
                {riskFlags.map((r, i) => (
                  <Reveal key={r.title} delay={i * 80}>
                    <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                        <r.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {r.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-muted-foreground">
                          {r.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 9. WHO THIS IS FOR */}
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

            {/* 10. FAQ + CTA */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Common questions</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Before you trade
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

            <Reveal className="mt-16 mb-16">
              <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-12 text-center sm:px-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brandGreen/25 blur-3xl"
                />
                <Leaf className="mx-auto h-8 w-8 text-brandGreen" />
                <h2 className="mt-4 font-display text-2xl font-bold text-background sm:text-3xl">
                  The full deep-dive is on its way
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm text-background/70">
                  Our team is finalizing the complete guide to e-waste credit
                  trading and marketplace mechanics. Need guidance on a live
                  trade today? Reach out and we'll walk you through it directly.
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
