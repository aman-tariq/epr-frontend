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
  Gem,
  Building2,
  Leaf,
  Info,
  Clock,
  Smartphone,
  Globe2,
  Warehouse,
  Truck,
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
  AreaChart,
  Area,
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
/* Sources: Global E-waste Monitor 2024 (ITU/UNITAR); CPCB (via IMARC   */
/* Group market analysis, 2025); PIB.                                   */
/* ------------------------------------------------------------------ */
const tickerFacts = [
  { label: "Global e-waste generated (2022)", value: "62 Mt", trend: "up" },
  { label: "Formally recycled worldwide", value: "22.3%", trend: "down" },
  { label: "Raw material value embedded", value: "$91B", trend: "up" },
  { label: "India's global rank, e-waste", value: "#3", trend: "up" },
  {
    label: "Gold content in circuit boards",
    value: "250–300 g/t",
    trend: "up",
  },
  { label: "India market CAGR to 2034", value: "11.6%", trend: "up" },
];

const globalGapData = [
  { year: "2010", generated: 34, recycled: 8 },
  { year: "2022", generated: 62, recycled: 13.8 },
  { year: "2030 (proj.)", generated: 82, recycled: 16.4 },
];

const indiaMarketData = [
  { year: "2020", value: 1.92 },
  { year: "2025", value: 3.32 },
  { year: "2030 (proj.)", value: 5.74 },
  { year: "2034 (proj.)", value: 9.95 },
];

const indiaStats = [
  {
    icon: Warehouse,
    value: "1.40 Mt",
    label: "E-waste generated in India, FY2024-25 (CPCB)",
  },
  {
    icon: Building2,
    value: "~450",
    label: "CPCB-authorised recycling facilities (2024-25)",
  },
  {
    icon: Globe2,
    value: "3rd",
    label: "India's rank among global e-waste generators",
  },
  {
    icon: TrendingUp,
    value: "11.6%",
    label: "Projected India market CAGR through 2034",
  },
];

const opportunityPoints = [
  {
    icon: Gem,
    title: "Precious metals are concentrated, not scattered",
    body: "Gold in printed circuit boards runs 250-300 grams per tonne — roughly 60 times richer than typical mined ore — which is what makes buying and refining scrap economically attractive at any scale.",
  },
  {
    icon: Smartphone,
    title: "Small devices, real recovery",
    body: "Industry recovery data puts roughly 34 kg of gold, 350 kg of silver, and 15 kg of palladium recoverable from every one million mobile phones processed responsibly.",
  },
  {
    icon: BarChart3,
    title: "Formal recycling is catching up fast",
    body: "India's formally recycled share rose from about 22% in FY2019-20 to over 70% in FY2024-25 as EPR enforcement tightened — a structural shift that keeps rewarding buyers who can prove compliant sourcing.",
  },
];

const buyingModels = [
  {
    icon: Truck,
    title: "Doorstep take-back platforms",
    body: "Consumer-facing pickup services quote a fair market price, collect the device, and issue certified data-wiping proof — a model recyclers have scaled through direct-to-consumer apps since 2024.",
  },
  {
    icon: BarChart3,
    title: "Digital scrap marketplaces",
    body: "Platforms now match unorganised scrap sellers with authorised buyers using live, AI-assisted pricing, moving what used to be a phone-and-handshake trade onto a transparent order book.",
  },
  {
    icon: Factory,
    title: "OEM-tied collection contracts",
    body: "Producers under EPR obligations increasingly sign exclusive take-back agreements with authorised recyclers, guaranteeing feedstock volume in exchange for compliance documentation.",
  },
];

const audiences = [
  {
    icon: Factory,
    title: "Producers & Brand Owners",
    body: "Understand where scrap volumes are concentrated so your EPR collection targets are met through real supply, not just paperwork.",
  },
  {
    icon: Recycle,
    title: "Recyclers & Processors",
    body: "See where formal buyers are winning volume away from informal channels, and what price and service levels it takes to compete.",
  },
  {
    icon: Building2,
    title: "PROs & Aggregators",
    body: "Get the market context to structure sourcing partnerships and defend the pricing you offer to producer members.",
  },
];

const faqs = [
  {
    q: "Is buying e-waste scrap actually profitable?",
    a: "Margins come mainly from precious-metal recovery — gold, silver, palladium and copper — rather than the plastics or glass fraction. Profitability depends heavily on sourcing cost, processing scale, and whether recovery is done in-house or contracted to a licensed refiner.",
  },
  {
    q: "Do I need a CPCB authorisation to buy e-waste in India?",
    a: "Any entity dismantling, recycling, or refurbishing notified e-waste categories in India needs to operate under the E-Waste (Management) Rules framework and register with the CPCB or relevant State Pollution Control Board.",
  },
  {
    q: "Why is the informal sector still such a large share of the market?",
    a: "Historically, informal scrap dealers offered faster payment and simpler pickup than formal channels. That gap has been narrowing as digital marketplaces and EPR-linked contracts make formal buying more competitive on both price and convenience.",
  },
  {
    q: "Which categories carry the most recoverable value?",
    a: "Printed circuit boards and connectors from IT hardware and telecom equipment carry the highest precious-metal concentration by weight, even though consumer electronics contribute the largest volume overall.",
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
/* Main component                                                       */
/* ------------------------------------------------------------------ */
export default function BuyEWasteBlog() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative w-full bg-background">
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker-scroll 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }
      `}</style>

      <Seo
        title="Buy E-Waste: Market Analysis & Business Opportunity"
        description="Explore the growing e-waste market, emerging business opportunities, pricing trends, and profitable strategies for buying e-waste responsibly while supporting recycling and the circular economy."
        keywords={[
          "Buy E-Waste",
          "E-Waste Market Analysis",
          "E-Waste Business Opportunity",
          "Electronic Waste Recycling",
          "E-Waste Management",
          "E-Waste Trading",
          "Scrap Electronics",
          "E-Waste Buyers",
          "E-Waste Collection",
          "Circular Economy",
          "Electronic Scrap",
          "E-Waste Business",
          "Recycling Business",
          "E-Waste Pricing",
          "Sustainable Recycling",
          "How to buy e-waste legally?",
          "Is the e-waste business profitable?",
          "How to start an e-waste business?",
          "Where to buy electronic scrap in India?",
          "How to identify valuable e-waste?",
          "What is the e-waste market size in India?",
          "How to earn from e-waste recycling?",
          "Best opportunities in the e-waste industry",
          "How to sell and buy e-waste?",
          "E-waste market trends 2026",
        ]}
        url="https://eprnexuss.com/blog/buy-e-waste-analysis"
        type="article"
      />

      {/* Extra clearance so a fixed/pre-built navbar never collides with content */}
      <div className="pt-24 md:pt-32">
        <div className="md:mx-auto mx-0 my-0 grid max-w-7xl grid-cols-1 gap-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-8">
          {/* ============================================================ */}
          {/* MAIN CONTENT COLUMN                                          */}
          {/* ============================================================ */}
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
                  Market Analysis &amp; Business Opportunity
                </SectionEyebrow>
                <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  Buy e-waste: the{" "}
                  <span className="bg-gradient-to-r from-brandGreen to-primary bg-clip-text text-transparent">
                    market opportunity
                  </span>{" "}
                  behind the scrap
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                  A practical, data-backed look at the market for buying e-waste
                  scrap — built for producers, recyclers, and PROs weighing
                  where the real recoverable value sits.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#opportunity"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
                  >
                    See the opportunity
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Full deep-dive guide in progress
                  </span>
                </div>
              </div>
            </section>

            {/* 2. LIVE FACT TICKER — signature element, real figures only */}
            <Reveal className="mt-10">
              <div className="overflow-hidden rounded-2xl border border-border bg-foreground/95 py-4">
                <div className="ticker-track flex w-max gap-10 px-6">
                  {[...tickerFacts, ...tickerFacts].map((item, i) => (
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
                Source: Global E-waste Monitor 2024 (ITU/UNITAR); CPCB, via
                IMARC Group market analysis.
              </p>
            </Reveal>

            {/* 3. INDIA STATS BAR */}
            <Reveal
              className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
              delay={50}
            >
              {indiaStats.map((s) => (
                <StatCard
                  key={s.label}
                  icon={s.icon}
                  value={s.value}
                  label={s.label}
                />
              ))}
            </Reveal>

            {/* 4. GLOBAL GENERATED VS RECYCLED — bar chart */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>The global gap</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Generation is outrunning recycling
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  E-waste generated worldwide nearly doubled between 2010 and
                  2022, while the formally recycled share barely moved — every
                  tonne of that widening gap is scrap someone still has to buy,
                  sort, and process.
                </p>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-8 rounded-2xl border border-border bg-card p-4 sm:p-6"
              >
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={globalGapData}
                      margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                    >
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
                        label={{
                          value: "Million tonnes",
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
                      <Legend wrapperStyle={{ fontSize: "0.8rem" }} />
                      <Bar
                        dataKey="generated"
                        name="Generated"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.55}
                        radius={[8, 8, 0, 0]}
                      />
                      <Bar
                        dataKey="recycled"
                        name="Formally recycled"
                        fill="#5AC361"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Info className="h-3.5 w-3.5" />
                  Source: Global E-waste Monitor 2024 (ITU/UNITAR). 2030 figures
                  are the report's business-as-usual projection.
                </p>
              </Reveal>
            </section>

            {/* 5. WHY IT'S A BUSINESS OPPORTUNITY */}
            <section id="opportunity" className="mt-20">
              <Reveal>
                <SectionEyebrow>Where the value sits</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Why buying scrap pencils out
                </h2>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {opportunityPoints.map((p, i) => (
                  <Reveal key={p.title} delay={i * 80}>
                    <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                      <div className="w-fit rounded-xl bg-brandGreen/15 p-2.5 text-brandGreen">
                        <p.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{p.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 6. INDIA MARKET SIZE — area chart */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>Market trajectory</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  India's e-waste management market is scaling fast
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Market size has nearly doubled since 2020 and is projected to
                  keep compounding as EPR enforcement pushes more volume into
                  formal, buyable channels.
                </p>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-8 rounded-2xl border border-border bg-card p-4 sm:p-6"
              >
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={indiaMarketData}
                      margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="marketFill"
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
                        label={{
                          value: "USD Billion",
                          angle: -90,
                          position: "insideLeft",
                          fill: "hsl(var(--muted-foreground))",
                          fontSize: 12,
                        }}
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
                        dataKey="value"
                        name="Market size"
                        stroke="#5AC361"
                        strokeWidth={2.5}
                        fill="url(#marketFill)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Info className="h-3.5 w-3.5" />
                  Source: IMARC Group, India E-Waste Management Market analysis
                  (2025 report cycle).
                </p>
              </Reveal>
            </section>

            {/* 7. BUYING MODELS */}
            <section className="mt-20">
              <Reveal>
                <SectionEyebrow>How buying happens</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Three channels sourcing scrap today
                </h2>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {buyingModels.map((m, i) => (
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
                  Before you start buying
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
                  The full deep-dive is on its way
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm text-background/70">
                  Our team is finalizing the complete guide to buying e-waste
                  scrap and building a sourcing business around it. Need
                  guidance on a sourcing deal today? Reach out and we'll walk
                  you through it directly.
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
