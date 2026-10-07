"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import {
  Area,
  AreaChart,
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
  Banknote,
  Building2,
  ChevronDown,
  ClipboardCheck,
  Factory,
  FileCheck2,
  Gauge,
  Landmark,
  LineChart as LineChartIcon,
  Recycle,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  Wallet,
} from "lucide-react";

import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

function MarketplaceButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href="https://www.eprnexuss.com/marketplace/"
      className={`inline-flex items-center gap-2 rounded-xl bg-brandGreen px-5 py-3 text-sm font-semibold text-[#0B1210] transition-transform hover:scale-[1.03] hover:shadow-lg hover:shadow-brandGreen/20 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

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
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
      className={[
        "transition-all duration-700 ease-out",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function useCountUp(
  end: number,
  active: boolean,
  duration = 1400,
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;

      const progress = Math.min(
        (timestamp - start) / duration,
        1,
      );

      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(eased * end));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [active, end, duration]);

  return value;
}

/* ============================================================================
   ILLUSTRATIVE DATA ONLY
============================================================================ */

const TICKER_ITEMS = [
  {
    label: "Steel Scrap (HMS)",
    price: "₹28,400/t",
    delta: "+1.8%",
    up: true,
  },
  {
    label: "Aluminium Scrap",
    price: "₹1,58,200/t",
    delta: "+2.4%",
    up: true,
  },
  {
    label: "Copper Scrap",
    price: "₹6,84,000/t",
    delta: "−0.9%",
    up: false,
  },
  {
    label: "Cast Iron Scrap",
    price: "₹24,100/t",
    delta: "+0.6%",
    up: true,
  },
  {
    label: "Mixed Metal Lot",
    price: "₹31,600/t",
    delta: "−1.3%",
    up: false,
  },
  {
    label: "Zinc Scrap",
    price: "₹2,12,000/t",
    delta: "+1.1%",
    up: true,
  },
];

const MARKET_SIZE_DATA = [
  {
    name: "Steel",
    value: 420,
    fill: "#5AC361",
  },
  {
    name: "Aluminium",
    value: 260,
    fill: "#3E9A47",
  },
  {
    name: "Copper",
    value: 180,
    fill: "#C97B4A",
  },
  {
    name: "Others",
    value: 95,
    fill: "#22702D",
  },
];

const PRICE_TREND_DATA = [
  { month: "Feb", index: 100 },
  { month: "Mar", index: 106 },
  { month: "Apr", index: 111 },
  { month: "May", index: 108 },
  { month: "Jun", index: 118 },
  { month: "Jul", index: 126 },
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
              "linear-gradient(#5AC361 1px, transparent 1px), linear-gradient(90deg, #5AC361 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 animate-[pulse_5s_ease-in-out_infinite] rounded-full bg-brandGreen/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-[#C97B4A]/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-brandGreen/30 bg-brandGreen/10 px-4 py-1.5 text-xs font-medium tracking-wide text-brandGreen">
          <TrendingUp className="h-3.5 w-3.5" />
          MARKET ANALYSIS · EPR METALS CREDITS
        </div>

        <h1
          className="animate-slide-up mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          EPR Metals Credits:
          <span className="block text-brandGreen">
            Market Analysis & Business Opportunity
          </span>
        </h1>

        <p
          className="animate-slide-up mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          Where demand for metal scrap credits is heading, who stands to gain
          from it, and how producers, recyclers, and PROs can position
          themselves before the market matures.
        </p>

        <div
          className="animate-slide-up mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#opportunity"
            className="inline-flex items-center gap-2 rounded-xl bg-brandGreen px-5 py-3 text-sm font-semibold text-[#0B1210] transition-transform hover:scale-[1.03] hover:shadow-lg hover:shadow-brandGreen/20"
          >
            See the Opportunity
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#faq"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Read the FAQs
          </a>

          {/* MARKETPLACE CTA #1 */}
          <MarketplaceButton>
            Explore EPR Metals Marketplace
          </MarketplaceButton>
        </div>
      </div>

      <div className="relative z-10 mt-12 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
        {[
          {
            icon: Recycle,
            label: "Metal Recovery",
          },
          {
            icon: BadgeCheck,
            label: "Credit Certification",
          },
          {
            icon: TrendingUp,
            label: "Market Trading",
          },
        ].map((item, i) => (
          <div
            key={item.label}
            className="animate-fade-in flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-5 backdrop-blur-sm"
            style={{
              animationDelay: `${320 + i * 100}ms`,
            }}
          >
            <item.icon className="h-6 w-6 text-brandGreen" />

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

// function ComingSoonBanner() {
//   return (
//     <Reveal>
//       <div className="flex flex-col items-start gap-4 rounded-2xl border border-brandGreen/25 bg-brandGreen/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
//         <div className="flex items-start gap-3 sm:items-center">
//           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brandGreen/15 text-brandGreen">
//             <Sparkles className="h-5 w-5" />
//           </div>
//           <div>
//             <p className="mt-0.5 text-sm text-muted-foreground">
//               Our team is finalizing verified pricing data, category-wise demand
//               forecasts, and margin benchmarks. In the meantime, this overview
//               and our team can get you moving.
//             </p>
//           </div>
//         </div>

//         <a
//           href="#contact-form"
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
    <div className="flex flex-col items-center px-4 py-2 text-center">
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
        end={4}
        suffix=""
        label="Major Scrap Categories"
        active={visible}
      />

      <StatItem
        end={18}
        suffix="%"
        label="Indicative YoY Demand Growth"
        active={visible}
      />

      <StatItem
        end={6}
        suffix="mo"
        label="Typical Time to First Trade"
        active={visible}
      />

      <StatItem
        end={3}
        suffix=""
        label="Core Revenue Streams"
        active={visible}
      />
    </div>
  );
}

/* ============================================================================
   4. MARKET ANALYSIS CHARTS
============================================================================ */

function ShareTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="font-medium text-popover-foreground">
        {payload[0].payload.name}
      </p>

      <p className="text-brandGreen">
        {payload[0].value} indicative share units
      </p>
    </div>
  );
}

function TrendTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="font-medium text-popover-foreground">
        {label}
      </p>

      <p className="text-[#C97B4A]">
        Price index: {payload[0].value}
      </p>
    </div>
  );
}

function MarketAnalysisCharts() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Indicative Demand by Metal Category
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Relative demand across the major scrap categories that feed
              EPR-linked metal recovery.
            </p>
          </div>

          <Gauge className="hidden h-8 w-8 shrink-0 text-brandGreen/40 sm:block" />
        </div>

        <div className="h-64 w-full sm:h-72">
          {visible && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={MARKET_SIZE_DATA}
                margin={{
                  top: 8,
                  right: 8,
                  left: 8,
                  bottom: 8,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  className="stroke-border"
                />

                <XAxis
                  dataKey="name"
                  tick={{
                    fontSize: 12,
                    fill: "currentColor",
                  }}
                  className="text-muted-foreground"
                />

                <YAxis
                  tick={{
                    fontSize: 11,
                    fill: "currentColor",
                  }}
                  className="text-muted-foreground"
                />

                <Tooltip
                  content={<ShareTooltip />}
                  cursor={{
                    fill: "rgba(90,195,97,0.08)",
                  }}
                />

                <Bar
                  dataKey="value"
                  radius={[6, 6, 0, 0]}
                  animationDuration={1200}
                >
                  {MARKET_SIZE_DATA.map((entry) => (
                    <Cell
                      key={entry.name}
                      fill={entry.fill}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Indicative Scrap Price Index Trend
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              A stylised index (base 100) showing the shape of recent price
              movement — not actual quoted rates.
            </p>
          </div>

          <LineChartIcon className="hidden h-8 w-8 shrink-0 text-[#C97B4A]/50 sm:block" />
        </div>

        <div className="h-64 w-full sm:h-72">
          {visible && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={PRICE_TREND_DATA}
                margin={{
                  top: 8,
                  right: 8,
                  left: 8,
                  bottom: 8,
                }}
              >
                <defs>
                  <linearGradient
                    id="priceIndexFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#C97B4A"
                      stopOpacity={0.35}
                    />

                    <stop
                      offset="100%"
                      stopColor="#C97B4A"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  className="stroke-border"
                />

                <XAxis
                  dataKey="month"
                  tick={{
                    fontSize: 12,
                    fill: "currentColor",
                  }}
                  className="text-muted-foreground"
                />

                <YAxis
                  tick={{
                    fontSize: 11,
                    fill: "currentColor",
                  }}
                  className="text-muted-foreground"
                />

                <Tooltip content={<TrendTooltip />} />

                <Area
                  type="monotone"
                  dataKey="index"
                  stroke="#C97B4A"
                  strokeWidth={2}
                  fill="url(#priceIndexFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   5. PRICE TICKER
============================================================================ */

function PriceTicker() {
  const loop = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-[#0F1512] py-3">
      <style>{`
        @keyframes epr-metals-marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .epr-metals-marquee-track {
          animation: epr-metals-marquee 34s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .epr-metals-marquee-track {
            animation: none;
          }
        }
      `}</style>

      <div className="epr-metals-marquee-track flex w-max gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-2 font-mono text-sm"
          >
            <span className="text-white/60">
              {item.label}
            </span>

            <span className="font-semibold text-white">
              {item.price}
            </span>

            <span
              className={
                item.up
                  ? "text-brandGreen"
                  : "text-rose-400"
              }
            >
              {item.up ? "▲" : "▼"} {item.delta}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-2 px-4 text-[10px] text-white/30">
        Illustrative prices, not a live feed
      </p>
    </div>
  );
}

/* ============================================================================
   6. WHAT ARE METAL CREDITS
============================================================================ */

const BASICS = [
  {
    icon: Recycle,
    title: "Tied to recovered metal",
    text: "Each credit is issued against a documented quantity of metal scrap recovered and processed through a registered facility.",
  },
  {
    icon: ShieldCheck,
    title: "Verified before it trades",
    text: "Weighment, category, and processing records are checked before a credit becomes eligible for the marketplace.",
  },
  {
    icon: TrendingUp,
    title: "Priced by category & grade",
    text: "Steel, aluminium, and copper credits move differently — grade and purity affect both recovery value and credit price.",
  },
];

function WhatAreMetalCredits() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {BASICS.map((item, i) => (
        <Reveal
          key={item.title}
          delay={i * 80}
        >
          <div className="h-full rounded-2xl border border-border bg-card p-5">
            <item.icon className="h-6 w-6 text-brandGreen" />

            <h3 className="mt-3 font-display text-base font-semibold text-card-foreground">
              {item.title}
            </h3>

            <p className="mt-1.5 text-sm text-muted-foreground">
              {item.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ============================================================================
   7. BUSINESS OPPORTUNITY
============================================================================ */

const OPPORTUNITIES = [
  {
    icon: Factory,
    title: "Recovery & processing margin",
    text: "Recyclers earn on the underlying metal itself — scrap value doesn't disappear once a credit is issued against it.",
  },
  {
    icon: Banknote,
    title: "Credit sale to producers",
    text: "Surplus credits beyond your own obligation can be sold to producers running short, adding a second revenue line.",
  },
  {
    icon: Building2,
    title: "Aggregation & brokerage",
    text: "PROs and aggregators can earn a margin coordinating supply across many smaller scrap dealers and larger buyers.",
  },
];

function BusinessOpportunity() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {OPPORTUNITIES.map((item, i) => (
        <Reveal
          key={item.title}
          delay={i * 90}
        >
          <div className="h-full rounded-2xl border border-border bg-gradient-to-b from-card to-muted/40 p-6 transition-all hover:-translate-y-1 hover:border-brandGreen/40 hover:shadow-lg hover:shadow-brandGreen/5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brandGreen/10">
              <item.icon className="h-5 w-5 text-brandGreen" />
            </div>

            <h3 className="mt-4 font-display text-base font-semibold text-card-foreground">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ============================================================================
   8. HOW CREDITS ARE GENERATED
============================================================================ */

type Step = {
  title: string;
  detail: string;
  icon: any;
};

const GENERATION_STEPS: Step[] = [
  {
    icon: Truck,
    title: "Scrap intake & weighment",
    detail:
      "Incoming metal scrap is logged by category, weight, and source before processing begins.",
  },
  {
    icon: ClipboardCheck,
    title: "Sorting & grading",
    detail:
      "Material is sorted by metal type and grade — purity directly affects both recovery yield and credit value.",
  },
  {
    icon: Factory,
    title: "Processing & recovery",
    detail:
      "Shredding, melting, or refining recovers usable metal, with volumes logged against the original intake record.",
  },
  {
    icon: ScanSearch,
    title: "Credit verification",
    detail:
      "Recovery records are checked against documentation before a credit is certified as tradeable.",
  },
  {
    icon: Wallet,
    title: "Listing & settlement",
    detail:
      "Verified credits are listed on the marketplace and settled against buyer demand from producers or PROs.",
  },
  {
    icon: FileCheck2,
    title: "Compliance reporting",
    detail:
      "Transactions and retirements are logged for the annual EPR return and available for audit.",
  },
];

function GenerationSteps() {
  return (
    <ol className="relative space-y-8 pl-2">
      <div className="absolute bottom-2 left-[27px] top-2 w-px bg-gradient-to-b from-brandGreen via-brandGreen/40 to-transparent" />

      {GENERATION_STEPS.map((step, i) => (
        <Reveal
          key={step.title}
          delay={i * 80}
        >
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

/* ============================================================================
   9. STAKEHOLDER ROLES
============================================================================ */

const STAKEHOLDERS = [
  {
    icon: Factory,
    role: "Producers (OEMs & Brand Owners)",
    detail:
      "Carry a metal-recovery obligation tied to what they place on the market. Buy credits to cover any shortfall against that target.",
  },
  {
    icon: Recycle,
    role: "Recyclers & Scrap Processors",
    detail:
      "Generate credits by recovering and processing metal scrap through registered facilities, then sell surplus on the marketplace.",
  },
  {
    icon: Landmark,
    role: "Producer Responsibility Organisations",
    detail:
      "Aggregate obligations across producers, coordinate sourcing with recyclers, and often broker trades on their behalf.",
  },
];

function StakeholderRoles() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {STAKEHOLDERS.map((s, i) => (
        <Reveal
          key={s.role}
          delay={i * 90}
        >
          <div className="h-full rounded-2xl border border-border bg-card p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brandGreen/10">
              <s.icon className="h-5 w-5 text-brandGreen" />
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
   10. RISKS & CHALLENGES
============================================================================ */

const RISKS = [
  "Price volatility across metal categories can compress margins for recyclers holding unsold credits.",
  "Inconsistent grading or weighment records can get a batch of credits rejected during verification.",
  "Thin trading volume in smaller metal categories may make it harder to price or exit a position quickly.",
  "Regulatory definitions of eligible scrap and recovery methods can shift, affecting which credits qualify.",
  "Relying on a single buyer or PRO for offtake concentrates counterparty risk that spot-market trading is meant to reduce.",
];

function RisksSection() {
  return (
    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
          <AlertTriangle className="h-5 w-5" />
        </div>

        <h3 className="font-display text-lg font-semibold text-foreground">
          What to Weigh Before You Commit
        </h3>
      </div>

      <ul className="space-y-3">
        {RISKS.map((p, i) => (
          <Reveal
            key={p}
            delay={i * 70}
          >
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
    q: "How is a metal credit's value actually determined?",
    a: "Value tracks the underlying scrap category and grade, plus real supply and demand between recyclers with surplus and producers with a shortfall — there's no fixed regulatory price.",
  },
  {
    q: "Can a recycler sell credits without an EPR obligation of their own?",
    a: "Yes — recyclers typically don't carry a recovery obligation themselves, so credits generated from processing become a saleable output rather than something used for compliance.",
  },
  {
    q: "Do all metal categories trade at similar liquidity?",
    a: "No — higher-volume categories like steel tend to trade more actively than smaller categories, which is worth factoring into how quickly you can exit a position.",
  },
  {
    q: "What's the realistic entry point for a smaller recycler?",
    a: "Most start by getting facility registration and documentation in order, since that's the gate to credit eligibility, before scaling processing volume.",
  },
  {
    q: "Is this the complete, final market guide?",
    a: "This is a working overview while our team finalizes a full deep-dive with verified pricing and demand data. Reach out for current, situation-specific guidance in the meantime.",
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
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
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
        <Reveal
          key={f.q}
          delay={i * 60}
        >
          <FAQItem
            q={f.q}
            a={f.a}
            isOpen={open === i}
            onToggle={() =>
              setOpen(open === i ? null : i)
            }
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
    <div className="relative overflow-hidden rounded-3xl border border-border bg-[#0B1210] px-6 py-12 text-center text-white sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brandGreen/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-xl">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brandGreen/15 text-brandGreen">
          <TrendingUp className="h-6 w-6" />
        </div>

        <h3 className="font-display text-2xl font-bold sm:text-3xl">
          We're Here to Help
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
          Talk to our team now for guidance tailored to your position in the market.
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
    <section
      id={id}
      className="scroll-mt-28"
    >
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

      <div className="mt-8">
        {children}
      </div>
    </section>
  );
}

/* ============================================================================
   PAGE
============================================================================ */

export default function EPRMetalsCreditsMarketAnalysis() {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 lg:pt-32">
      <div className="container mx-auto px-1 pb-20 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-4">

          {/* MAIN CONTENT */}
          <main className="min-w-0 space-y-16 sm:space-y-20">

            <Seo
              title="EPR Metals Credits: Market Analysis & Business Opportunity"
              description="Explore the EPR Metals Credits market with in-depth analysis, business opportunities, demand trends, pricing insights, and strategies to maximize value through metal recycling and EPR credit trading in India."
              keywords={[
                "EPR Metals Credits",
                "Metal EPR Credits",
                "Metal Credit Trading",
                "Metal Credit Marketplace",
                "EPR Credit Market",
                "Metal Recycling",
                "Extended Producer Responsibility",
                "Metal Waste Management",
                "Metal Recycling Certificates",
                "Metal EPR Compliance",
                "Scrap Metal Trading",
                "Circular Economy",
                "Environmental Compliance",
                "Metal Credit Business",
                "CPCB EPR Credits",
                "How do Metal EPR credits work?",
                "What are Metal EPR credits?",
                "How to buy and sell Metal EPR credits?",
                "Metal EPR credit market in India",
                "How to earn from Metal EPR credits?",
                "Benefits of Metal EPR credit trading",
                "Metal EPR pricing trends",
                "Metal recycling business opportunities",
                "Metal EPR compliance guide",
                "Metal EPR market analysis 2026",
              ]}
              url="https://eprnexuss.com/blog/epr-metals-analysis"
              type="article"
            />

            <HeroSection />

            {/* <ComingSoonBanner /> */}

            <QuickStatsBar />

            {/* <PriceTicker /> */}

            {/* mobile-only contact form */}
            <div
              id="contact-form"
              className="lg:hidden"
            >
              <StickyContactForm />
            </div>

            <BlogSection
              id="market-analysis"
              eyebrow="Market Analysis"
              title="What the Metals Credit Market Looks Like"
              intro="Category-wise demand and a stylised price trend — enough to see the shape of the market while the verified numbers are finalized."
            >
              <MarketAnalysisCharts />
            </BlogSection>

            <BlogSection
              id="basics"
              eyebrow="The Basics"
              title="What an EPR Metal Credit Actually Represents"
            >
              <WhatAreMetalCredits />
            </BlogSection>

            <BlogSection
              id="opportunity"
              eyebrow="Business Opportunity"
              title="Where the Revenue Actually Comes From"
              intro="Metal credits open more than one revenue line — here's how producers, recyclers, and PROs each capture value."
            >
              <BusinessOpportunity />

              {/* MARKETPLACE CTA #2 */}
              <div className="mt-8">
                <MarketplaceButton>
                  Buy & Sell EPR Metal Credits
                </MarketplaceButton>
              </div>
            </BlogSection>

            <BlogSection
              id="how-it-works"
              eyebrow="How It Works"
              title="How a Credit Gets Generated, Scrap to Settlement"
            >
              <GenerationSteps />
            </BlogSection>

            <BlogSection
              id="stakeholders"
              eyebrow="Who's Involved"
              title="Producers, Recyclers, and PROs Each Play a Different Hand"
            >
              <StakeholderRoles />
            </BlogSection>

            <BlogSection
              id="risks"
              eyebrow="Go In Informed"
              title="What to Weigh Before You Commit"
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

            {/* MARKETPLACE CTA #3 */}
            <Reveal>
              <div className="flex justify-center">
                <MarketplaceButton>
                  Trade EPR Metals Credits
                </MarketplaceButton>
              </div>
            </Reveal>

            <Reveal>
              <FinalCTA />
            </Reveal>

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