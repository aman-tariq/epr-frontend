"use client";

import { useEffect, useRef, useState } from "react";
import {
  Recycle,
  TrendingUp,
  Factory,
  Users,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  BarChart3,
  Repeat,
  Handshake,
  Building2,
  Leaf,
  Info,
  Clock,
  ArrowLeftRight,
  Gauge,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
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
/* Data                                                                 */
/* ------------------------------------------------------------------ */
// const tickerData = [
//   { label: "Rigid Plastic (Cat I)", value: "₹18–24 / kg", trend: "up" },
//   { label: "Flexible Plastic (Cat II)", value: "₹28–36 / kg", trend: "up" },
//   { label: "Multi-layered (Cat III)", value: "₹42–55 / kg", trend: "down" },
//   { label: "Plastic Sheet (Cat IV)", value: "₹12–16 / kg", trend: "up" },
//   { label: "PET Bottle Credits", value: "₹20–27 / kg", trend: "up" },
//   { label: "Post-Consumer HDPE", value: "₹22–30 / kg", trend: "down" },
// ];

const priceData = [
  { name: "Cat I\nRigid", price: 21 },
  { name: "Cat II\nFlexible", price: 32 },
  { name: "Cat III\nMLP", price: 48 },
  { name: "Cat IV\nSheet", price: 14 },
];

const complianceData = [
  { year: "2024", target: 60 },
  { year: "2025", target: 70 },
  { year: "2026", target: 80 },
  { year: "2027", target: 90 },
  { year: "2028", target: 100 },
];

const steps = [
  {
    icon: Factory,
    title: "Obligation is set",
    body: "A brand owner, producer, or importer receives an annual EPR target for the plastic categories it places on the market.",
  },
  {
    icon: Recycle,
    title: "Recyclers generate certificates",
    body: "Registered recyclers and processors log verified recycling volumes on the EPR portal, which mints tradeable credits.",
  },
  {
    icon: ArrowLeftRight,
    title: "Credits move on the marketplace",
    body: "Producers short of their target buy credits from recyclers or PROs who hold a surplus, at a price the market sets.",
  },
  {
    icon: ShieldCheck,
    title: "Obligation is closed",
    body: "Purchased credits are retired against the producer's annual filing, closing the compliance gap for that period.",
  },
];

const models = [
  {
    icon: Handshake,
    title: "Bilateral trade",
    body: "A producer and a recycler agree on price and volume directly. Simple, but price discovery is opaque and deals take longer to close.",
  },
  {
    icon: BarChart3,
    title: "Marketplace exchange",
    body: "Listed credits, visible pricing, and standardized contracts. Faster matching, and rates reflect real supply and demand.",
  },
  {
    icon: Gauge,
    title: "PRO-brokered pooling",
    body: "A Producer Responsibility Organization aggregates credits across several recyclers and sells them on as a single pooled lot.",
  },
];

const audiences = [
  {
    icon: Factory,
    title: "Producers & Brand Owners",
    body: "Close your annual EPR gap without overbuying credits you don't need, and time purchases against price cycles.",
  },
  {
    icon: Recycle,
    title: "Recyclers & Processors",
    body: "Turn verified recycling volume into revenue, and understand how listing strategy affects the price you realize.",
  },
  {
    icon: Building2,
    title: "PROs & Aggregators",
    body: "Structure pooled credit sales, manage counterparty risk, and keep pricing defensible for every member you represent.",
  },
];

const faqs = [
  {
    q: "What exactly is an EPR plastic credit?",
    a: "It's a certificate representing one unit of verified plastic waste that has been collected, recycled, or processed. Producers buy these certificates to demonstrate they've met their extended producer responsibility target for the year.",
  },
  {
    q: "Can credits be carried over between years?",
    a: "Carry-forward rules depend on the current CPCB notification in force and the category of plastic involved, so this should be confirmed against the latest circular before you plan around it.",
  },
  {
    q: "Who sets the price of a credit?",
    a: "Price is a function of available supply from recyclers, aggregate demand from obligated producers, and how close the filing deadline is. Marketplace-listed credits tend to price this in faster than bilateral deals.",
  },
  {
    q: "Is trading credits the same as outsourcing recycling?",
    a: "No. Credit trading closes a compliance obligation on paper; it doesn't replace the physical collection and recycling infrastructure a producer may also need to invest in directly.",
  },
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                                */
/* ------------------------------------------------------------------ */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brandGreen/30 bg-brandGreen/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brandGreen">
      <Leaf className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function StatCard({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="font-display text-3xl font-semibold text-foreground">
        {value}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */
export default function EPRPlasticCreditsBlog() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative w-full bg-background">
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker-scroll 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }
      `}</style>

      {/* Extra clearance so fixed/pre-built navbar never collides with content */}
      <div className="pt-24 md:pt-32">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-4 lg:px-8">
          {/* ============================================================ */}
          {/* MAIN CONTENT COLUMN                                          */}
          {/* ============================================================ */}
          <Seo
            title="EPR Plastic Credits: Credit Trading & Marketplace Guide"
            description="Discover how EPR Plastic credit trading works in India. Learn about plastic credit marketplaces, pricing, compliance requirements, CPCB guidelines, and strategies to maximize value through Plastic EPR credits."
            keywords={[
              "EPR Plastic Credits",
              "Plastic EPR Credit Trading",
              "Plastic Credit Marketplace",
              "Plastic EPR Certificates",
              "Plastic Credit Trading",
              "Plastic Recycling Credits",
              "Plastic Waste Management",
              "Extended Producer Responsibility",
              "Plastic Recycling",
              "CPCB Plastic EPR",
              "Plastic EPR Compliance",
              "Plastic Credit Exchange",
              "Plastic Recycling Certificates",
              "Circular Economy",
              "Environmental Compliance",
              "How does Plastic EPR credit trading work?",
              "How to buy and sell Plastic EPR credits?",
              "What is a Plastic EPR marketplace?",
              "How to trade Plastic EPR certificates in India?",
              "Plastic EPR credit pricing",
              "Best Plastic EPR trading platform",
              "Benefits of Plastic EPR credit trading",
              "Plastic credit marketplace India",
              "Plastic EPR compliance guide",
              "Plastic EPR credit trading 2026",
            ]}
            url="https://eprnexuss.com/blog/epr-plastic-trading"
            type="article"
          />
          <main className="min-w-0">
            {/* 1. HERO */}
            <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/40 via-background to-brandGreen/10 px-6 py-14 sm:px-10 sm:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brandGreen/20 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
              />
              <div className="relative animate-fade-in">
                <SectionEyebrow>
                  Credit Trading &amp; Marketplace Guide
                </SectionEyebrow>
                <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  EPR Plastic Credits: how the{" "}
                  <span className="bg-gradient-to-r from-brandGreen to-primary bg-clip-text text-transparent">
                    trading marketplace
                  </span>{" "}
                  actually works
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                  A practical, step-by-step walkthrough of credit trading for
                  EPR plastic — built for producers, recyclers, and PROs who
                  need to close compliance gaps without overpaying for credits
                  they don't need.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
                  >
                    See how trading works
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </section>

            {/* 2. LIVE TICKER — signature element */}
            {/* <Reveal className="mt-10">
              <div className="overflow-hidden rounded-2xl border border-border bg-foreground/95 py-4">
                <div className="ticker-track flex w-max gap-10 px-6">
                  {[...tickerData, ...tickerData].map((item, i) => (
                    <div
                      key={i}
                      className="flex shrink-0 items-center gap-3 whitespace-nowrap text-sm"
                    >
                      <span className="font-medium text-background/90">
                        {item.label}
                      </span>
                      <span className="font-display font-semibold text-brandGreen">
                        {item.value}
                      </span>
                      <TrendingUp
                        className={`h-3.5 w-3.5 ${
                          item.trend === "up"
                            ? "text-brandGreen"
                            : "rotate-180 text-destructive"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Info className="h-3.5 w-3.5" />
                Illustrative price ranges for orientation only — confirm live
                rates on your EPR marketplace or the CPCB portal.
              </p>
            </Reveal> */}

            {/* 3. STATS BAR */}
            <Reveal
              className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
              delay={50}
            >
              <StatCard
                icon={Recycle}
                value="4"
                label="Plastic credit categories"
              />
              <StatCard
                icon={Users}
                value="3"
                label="Core market participants"
              />
              <StatCard
                icon={Repeat}
                value="12 mo"
                label="Typical obligation cycle"
              />
              <StatCard
                icon={ShieldCheck}
                value="100%"
                label="Target filed against credits"
              />
            </Reveal>

            {/* 4. HOW IT WORKS — real sequence, numbering earns its place */}
            <section id="how-it-works" className="mt-20">
              <Reveal>
                <SectionEyebrow>The credit lifecycle</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  From obligation to closed filing
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  A plastic credit only exists because a real obligation and a
                  real recycling event both happened. Here's the order those
                  events follow.
                </p>
              </Reveal>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {steps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 80}>
                    <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
                      <div className="flex flex-col items-center">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brandGreen/15 font-display font-semibold text-brandGreen">
                          {i + 1}
                        </div>
                        {i < steps.length - 1 && (
                          <div className="mt-2 hidden w-px flex-1 bg-border sm:block" />
                        )}
                      </div>
                      <div>
                        <step.icon className="mb-2 h-5 w-5 text-primary" />
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-muted-foreground">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 5. BAR CHART — price by category */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Market snapshot</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Credit pricing by plastic category
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Multi-layered plastic (Category III) typically commands the
                  highest credit price — it's the hardest and most expensive
                  category to recycle at scale.
                </p>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-8 rounded-2xl border border-border bg-card p-4 sm:p-6"
              >
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={priceData}
                      margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        dataKey="name"
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
                        label={{
                          value: "₹ / kg",
                          angle: -90,
                          position: "insideLeft",
                          fill: "hsl(var(--muted-foreground))",
                          fontSize: 12,
                        }}
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
                      <Bar dataKey="price" radius={[8, 8, 0, 0]}>
                        {priceData.map((_, i) => (
                          <Cell
                            key={i}
                            fill={i === 2 ? "#5AC361" : "hsl(var(--primary))"}
                            fillOpacity={i === 2 ? 1 : 0.55}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Reveal>
            </section>

            {/* 6. COMPLIANCE TRAJECTORY CHART */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Why demand keeps rising</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Recycling targets are climbing every cycle
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  As mandated recycling percentages step up year over year, the
                  gap producers need to close with purchased credits tends to
                  widen before it narrows.
                </p>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-8 rounded-2xl border border-border bg-card p-4 sm:p-6"
              >
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={complianceData}
                      margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="targetFill"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#5AC361"
                            stopOpacity={0.5}
                          />
                          <stop
                            offset="100%"
                            stopColor="#5AC361"
                            stopOpacity={0.02}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        dataKey="year"
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
                      />
                      <Tooltip
                        contentStyle={{
                          background: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.75rem",
                          color: "hsl(var(--popover-foreground))",
                          fontSize: "0.85rem",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="target"
                        stroke="#5AC361"
                        strokeWidth={2.5}
                        fill="url(#targetFill)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Reveal>
            </section>

            {/* 7. MARKETPLACE MODELS */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Trading models</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Three ways credits change hands
                </h2>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {models.map((m, i) => (
                  <Reveal key={m.title} delay={i * 80}>
                    <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition hover:border-brandGreen/50 hover:shadow-md">
                      <div className="w-fit rounded-xl bg-secondary p-2.5 text-secondary-foreground">
                        <m.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {m.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{m.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 8. WHO THIS IS FOR */}
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

            {/* 9. FAQ ACCORDION */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Common questions</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Before you start trading
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

            {/* 10. COMING SOON / CTA BANNER */}
            <Reveal className="mt-20 mb-16">
              <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-12 text-center sm:px-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brandGreen/25 blur-3xl"
                />
                <Leaf className="mx-auto h-8 w-8 text-brandGreen" />
                <h2 className="mt-4 font-display text-2xl font-bold text-background sm:text-3xl">
                  Want to learn more?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm text-background/70">
                 Need guidance on a
                  live filing or a trade today? Reach out and we'll walk you
                  through it directly.
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
          {/* STICKY CONTACT FORM — right rail, scrolls with the page      */}
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
