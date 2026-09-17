"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Car,
  Recycle,
  Factory,
  Landmark,
  ArrowRightLeft,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  Users,
  Gauge,
  BadgeCheck,
  ChevronDown,
  CheckCircle2,
  Banknote,
  ClipboardCheck,
  Wallet,
  ScanSearch,
  Clock,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* -------------------------------------------------------------------------
 * DATA — illustrative / indicative figures for a teaser page.
 * Swap these for verified numbers when the full deep-dive publishes.
 * ---------------------------------------------------------------------- */

const tickerItems = [
  { label: "2W ELV Credits", price: "₹2,180", delta: "+3.2%", up: true },
  { label: "PV ELV Credits", price: "₹4,760", delta: "+1.4%", up: true },
  { label: "CV ELV Credits", price: "₹6,050", delta: "−0.8%", up: false },
  { label: "3W ELV Credits", price: "₹1,940", delta: "+2.1%", up: true },
  { label: "Bulk RVSF Lot", price: "₹5,320", delta: "+0.6%", up: true },
  { label: "Spot Settlement", price: "₹3,410", delta: "−1.1%", up: false },
];


const avgPriceData = [
  { category: "2-Wheeler", price: 1824 },
  { category: "LGV", price: 3132 },
  { category: "LPV", price: 5972 },
  { category: "HGV", price: 9351 },
  { category: "LMV", price: 10814 },
];

const steps = [
  {
    icon: ClipboardCheck,
    title: "Register & complete KYC",
    body: "Producers, RVSFs, scrappers, and PROs onboard onto the marketplace with entity verification and EPR registration details.",
  },
  {
    icon: ScanSearch,
    title: "Credits get verified",
    body: "Recycling and scrapping evidence is checked against vehicle-level data before a credit is certified as tradeable.",
  },
  {
    icon: ArrowRightLeft,
    title: "List, discover, negotiate",
    body: "Sellers list surplus credits by vehicle category; buyers with a shortfall search, compare pricing, and negotiate.",
  },
  {
    icon: Wallet,
    title: "Settle in escrow",
    body: "Payment and credit transfer move together through an escrow layer, so neither side releases first.",
  },
  {
    icon: Banknote,
    title: "Bank or carry forward",
    body: "Unused surplus credits can typically be banked against future obligation years, subject to validity rules.",
  },
  {
    icon: FileCheck2,
    title: "File compliance",
    body: "Final obligation status — credits owned, purchased, and retired — is reported through the annual EPR return.",
  },
];

const stakeholders = [
  {
    icon: Factory,
    role: "Producers (OEMs & Importers)",
    detail:
      "Carry an annual ELV recycling obligation tied to vehicles sold. Buy credits on the marketplace to cover any shortfall against that target.",
  },
  {
    icon: Recycle,
    role: "Recyclers & RVSFs",
    detail:
      "Generate credits by processing end-of-life vehicles through registered scrapping facilities. Sell surplus credits once their own targets are met.",
  },
  {
    icon: Landmark,
    role: "Producer Responsibility Organisations",
    detail:
      "Aggregate obligations across producers, coordinate with RVSFs, and often operate or plug into the marketplace to route credits efficiently.",
  },
];

const mechanics = [
  {
    icon: ShieldCheck,
    title: "Verified credit registry",
    text: "Every credit traces back to a specific scrapped vehicle and facility.",
  },
  {
    icon: Gauge,
    title: "Live price discovery",
    text: "Category-wise pricing responds to real supply and demand, not a fixed rate.",
  },
  {
    icon: Wallet,
    title: "Escrow-backed settlement",
    text: "Funds and credits move in the same transaction step, reducing counterparty risk.",
  },
  {
    icon: BadgeCheck,
    title: "Audit-ready trail",
    text: "Every transfer is timestamped and exportable for regulator or auditor review.",
  },
];

const timeline = [
  {
    phase: "Phase 1",
    title: "Registration window",
    text: "Producers, PROs, and RVSFs register and complete verification on the marketplace.",
  },
  {
    phase: "Phase 2",
    title: "Obligation year begins",
    text: "Recycling targets apply; credit generation and trading activity ramps up.",
  },
  {
    phase: "Phase 3",
    title: "Reconciliation & filing",
    text: "Year-end reconciliation, credit retirement, and compliance filing close the cycle.",
  },
];

const faqs = [
  {
    q: "What exactly is an EPR ELV credit?",
    a: "It is a tradeable unit representing a documented quantity of end-of-life vehicle material recycled through an authorised facility, which a producer can hold or purchase to demonstrate compliance with its recycling obligation.",
  },
  {
    q: "Can credits be carried forward to the next obligation year?",
    a: "In most frameworks a portion of surplus credits can be banked forward, though validity windows and caps vary — this is one of the areas our full guide will map in detail.",
  },
  {
    q: "Who actually sets the credit price?",
    a: "The marketplace, not a regulator, sets price through matched supply and demand between recyclers holding surplus credits and producers with a shortfall.",
  },
  {
    q: "Do PROs trade on behalf of producers, or do producers trade directly?",
    a: "Both models exist. Some producers trade directly on the marketplace; others route obligations through a PRO that handles sourcing and settlement on their behalf.",
  },
  {
    q: "What happens if a producer doesn\u2019t buy enough credits?",
    a: "A shortfall against the recycling target typically carries a financial or regulatory consequence, which is why active credit trading matters well before year-end.",
  },
];

/* -------------------------------------------------------------------------
 * REVEAL — lightweight scroll-triggered animation, no external motion lib
 * ---------------------------------------------------------------------- */

function useInView<T extends HTMLElement>() {
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
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      className={`${inView ? "animate-slide-up" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------
 * 1. HERO
 * ---------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#0F1512] via-[#132018] to-[#0B100D] px-6 py-14 sm:px-10 sm:py-16">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #5AC361 0%, transparent 70%)",
        }}
      />
      <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brandGreen/30 bg-brandGreen/10 px-3 py-1 text-xs font-medium tracking-wide text-brandGreen">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brandGreen" />
           TALK TO OUR TEAM NOW
          </span>
          <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            EPR ELV Credits: Credit Trading &amp; Marketplace Guide
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
            A practical, step-by-step walkthrough of how end-of-life vehicle
            recycling credits are generated, verified, priced, and traded —
            built for producers, recyclers, and PROs who need to act now, not
            after the rules tighten.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-lg bg-brandGreen px-5 py-3 text-sm font-semibold text-[#0B100D] transition-transform hover:scale-[1.03]"
            >
              Get immediate guidance
              <ArrowRightLeft className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              See how trading works
            </a>
          </div>
        </div>

        {/* Signature illustration: vehicle → recycling → credit flow */}
        <div className="relative mx-auto w-full max-w-md">
          <svg viewBox="0 0 480 340" className="w-full" aria-hidden="true">
            <defs>
              <linearGradient id="creditGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#5AC361" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#3E4C59" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <circle
              cx="240"
              cy="170"
              r="150"
              fill="url(#creditGlow)"
              opacity="0.08"
            />

            {/* car */}
            <g transform="translate(30,120)">
              <rect
                x="0"
                y="30"
                width="120"
                height="34"
                rx="10"
                fill="#E8EDEA"
              />
              <path
                d="M14 30 Q30 4 60 4 Q90 4 106 30 Z"
                fill="#5AC361"
                opacity="0.85"
              />
              <circle cx="26" cy="66" r="12" fill="#14181C" />
              <circle cx="96" cy="66" r="12" fill="#14181C" />
            </g>

            {/* arrow */}
            <path
              d="M165 150 L215 150"
              stroke="#5AC361"
              strokeWidth="3"
              strokeDasharray="6 6"
              markerEnd="url(#arrow)"
            />

            {/* recycle symbol */}
            <g transform="translate(225,110)">
              <circle
                cx="40"
                cy="40"
                r="40"
                fill="#1B241D"
                stroke="#5AC361"
                strokeWidth="2"
              />
              <path
                d="M40 16 L52 32 L44 32 L44 48 L36 48 L36 32 L28 32 Z"
                fill="#5AC361"
                transform="rotate(0 40 40)"
              />
              <path
                d="M40 16 L52 32 L44 32 L44 48 L36 48 L36 32 L28 32 Z"
                fill="#5AC361"
                transform="rotate(120 40 40)"
                opacity="0.8"
              />
              <path
                d="M40 16 L52 32 L44 32 L44 48 L36 48 L36 32 L28 32 Z"
                fill="#5AC361"
                transform="rotate(240 40 40)"
                opacity="0.6"
              />
            </g>

            {/* arrow 2 */}
            <path
              d="M320 150 L365 150"
              stroke="#E8A33D"
              strokeWidth="3"
              strokeDasharray="6 6"
            />

            {/* credit coin */}
            <g transform="translate(375,115)">
              <circle
                cx="35"
                cy="35"
                r="35"
                fill="#E8A33D"
                opacity="0.15"
                stroke="#E8A33D"
                strokeWidth="2"
              />
              <text
                x="35"
                y="42"
                textAnchor="middle"
                fontSize="20"
                fontFamily="Outfit, sans-serif"
                fill="#E8A33D"
                fontWeight="700"
              >
                ₹
              </text>
            </g>

            <text
              x="90"
              y="220"
              fontSize="12"
              fill="#8FA396"
              fontFamily="Inter, sans-serif"
            >
              End-of-life vehicle
            </text>
            <text
              x="245"
              y="220"
              fontSize="12"
              fill="#8FA396"
              fontFamily="Inter, sans-serif"
            >
              Certified recycling
            </text>
            <text
              x="378"
              y="220"
              fontSize="12"
              fill="#E8A33D"
              fontFamily="Inter, sans-serif"
            >
              Tradeable credit
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 2. TICKER STRIP — signature marketplace motif
 * ---------------------------------------------------------------------- */

// function TickerStrip() {
//   const loop = [...tickerItems, ...tickerItems];
//   return (
//     <div className="relative overflow-hidden rounded-xl border border-border bg-[#0F1512] py-3">
//       <style>{`
//         @keyframes elv-marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .elv-marquee-track {
//           animation: elv-marquee 32s linear infinite;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .elv-marquee-track { animation: none; }
//         }
//       `}</style>
//       <div className="flex w-max gap-10 whitespace-nowrap elv-marquee-track">
//         {loop.map((item, i) => (
//           <div key={i} className="flex items-center gap-2 px-2 font-mono text-sm">
//             <span className="text-white/60">{item.label}</span>
//             <span className="font-semibold text-white">{item.price}</span>
//             <span className={item.up ? 'text-brandGreen' : 'text-rose-400'}>
//               {item.up ? '▲' : '▼'} {item.delta}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

/* -------------------------------------------------------------------------
 * 3. MARKET SNAPSHOT — bar + area charts
 * ---------------------------------------------------------------------- */

function MarketSnapshot() {
  return (
    <section>
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-widest text-brandGreen">
          Indicative market data
        </span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          What the credit market looks like today
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          The figures below are based on publicly available DigiELV and NITI Aayog data. They represent historical average Certificate of Deposit (CoD) trade prices and transaction volumes, and should be treated as reference values rather than live market prices.
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal
          delay={80}
          className="rounded-2xl border border-border bg-card p-5"
        >
          <h3 className="font-display text-sm font-semibold text-card-foreground">
            Credits traded by category ('000s, indicative)
          </h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={avgPriceData} margin={{ left: -10 }}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                  vertical={false}
                />
                <XAxis
                  dataKey="category"
                  tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: "rgba(90,195,97,0.08)" }}
                  contentStyle={{
                    background: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="price" fill="#5AC361" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Reveal>
        <p className="text-gray-500 mt-8">
          LGV - Light Goods Vehicle<br/>
          LPV - Light Passenger Vehicle<br/>
          HGV - Heavy Goods Vehicle<br/>
          LMV - Light Motor Vehicle<br/>
        </p>

       
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 4. WHAT ARE CREDITS
 * ---------------------------------------------------------------------- */

function WhatAreCredits() {
  return (
    <section>
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-widest text-brandGreen">
          The basics
        </span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          What an EPR ELV credit actually represents
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Each credit is issued against documented, verified recycling of an
          end-of-life vehicle — not a promise, an estimate, or a bulk allowance.
          That traceability is what makes the credit tradeable.
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          {
            icon: Car,
            title: "Tied to a real vehicle",
            text: "Each credit references a specific ELV and its scrapping record.",
          },
          {
            icon: ShieldCheck,
            title: "Verified before trade",
            text: "Facility-level documentation is checked before a credit can list.",
          },
          {
            icon: TrendingUp,
            title: "Priced by the market",
            text: "Value moves with category-wise supply and producer demand.",
          },
        ].map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 80}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <item.icon className="h-6 w-6 text-brandGreen" />
            <h3 className="mt-3 font-display text-base font-semibold text-card-foreground">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 5. HOW TRADING WORKS — six-step process
 * ---------------------------------------------------------------------- */

function HowTradingWorks() {
  return (
    <section id="how-it-works">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-widest text-brandGreen">
          The process
        </span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          How credit trading actually works, step by step
        </h2>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {steps.map((step, i) => (
          <Reveal
            key={step.title}
            delay={i * 70}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brandGreen/40"
          >
            <span className="font-display text-3xl font-bold text-brandGreen/15 transition-colors group-hover:text-brandGreen/25">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="mt-1 flex items-start gap-3">
              <step.icon className="mt-0.5 h-5 w-5 shrink-0 text-brandGreen" />
              <div>
                <h3 className="font-display text-base font-semibold text-card-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 6. STAKEHOLDER ROLES
 * ---------------------------------------------------------------------- */

function StakeholderRoles() {
  return (
    <section>
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-widest text-brandGreen">
          Who's involved
        </span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Producers, recyclers, and PROs each play a different hand
        </h2>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {stakeholders.map((s, i) => (
          <Reveal
            key={s.role}
            delay={i * 90}
            className="rounded-2xl border border-border bg-gradient-to-b from-card to-muted/40 p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brandGreen/10">
              <s.icon className="h-5 w-5 text-brandGreen" />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-card-foreground">
              {s.role}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 7. MARKETPLACE MECHANICS
 * ---------------------------------------------------------------------- */

function MarketplaceMechanics() {
  return (
    <section>
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-widest text-brandGreen">
          Under the hood
        </span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          What a credible marketplace needs to get right
        </h2>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {mechanics.map((m, i) => (
          <Reveal
            key={m.title}
            delay={i * 70}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brandGreen/10">
              <m.icon className="h-5 w-5 text-brandGreen" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-card-foreground">
                {m.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 8. COMPLIANCE TIMELINE
 * ---------------------------------------------------------------------- */

function ComplianceTimeline() {
  return (
    <section className="rounded-3xl border border-border bg-[#0F1512] p-6 sm:p-10">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-widest text-brandGreen">
          Obligation cycle
        </span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
          A typical EPR ELV obligation year
        </h2>
        {/* <p className="mt-3 max-w-2xl text-white/60">
          Exact dates vary by notification and category — this is the shape of
          the cycle producers plan around.
        </p> */}
      </Reveal>

      <div className="relative mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="absolute left-0 right-0 top-5 hidden h-px bg-white/10 sm:block" />
        {timeline.map((t, i) => (
          <Reveal key={t.phase} delay={i * 100} className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brandGreen/40 bg-[#0F1512] text-brandGreen">
                <Clock className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-brandGreen">
                {t.phase}
              </span>
            </div>
            <h3 className="mt-3 font-display text-base font-semibold text-white">
              {t.title}
            </h3>
            <p className="mt-1.5 text-sm text-white/60">{t.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 9. FAQ
 * ---------------------------------------------------------------------- */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section>
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-widest text-brandGreen">
          Common questions
        </span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Before you reach out, a few quick answers
        </h2>
      </Reveal>

      <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="px-5">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-sm font-medium text-card-foreground sm:text-base">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-brandGreen transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] pb-4 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 10. FINAL CTA
 * ---------------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-brandGreen/30 bg-gradient-to-br from-brandGreen/10 via-card to-card p-8 text-center sm:p-12">
      <CheckCircle2 className="mx-auto h-8 w-8 text-brandGreen" />
      <h2 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl">
        Need help navigating your EPR ELV credit obligations?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
        Our team can walk you through
        exactly what applies to your obligation right now.
      </p>
      <a
        href="#contact-form"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brandGreen px-6 py-3 text-sm font-semibold text-[#0B100D] transition-transform hover:scale-[1.03]"
      >
        Talk to our team
        <ArrowRightLeft className="h-4 w-4" />
      </a>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * PAGE — composes all sections + sticky form column
 * ---------------------------------------------------------------------- */

export default function EprElvCreditsBlog() {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 lg:pt-32">
      <div className="md:container mx-auto px-1 pb-20 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-4">
          {/* Main content — min-w-0 stops wide children (charts, ticker,
              SVGs) from stretching this column and throwing off the
              sticky sibling next to it */}
          <main className="min-w-0 space-y-16 sm:space-y-20">
            <Seo
              title="EPR ELV Credits: Credit Trading & Marketplace Guide"
              description="Discover how EPR ELV credit trading works in India. Learn about ELV credit marketplaces, pricing, compliance requirements, CPCB guidelines, and strategies to maximize value through End-of-Life Vehicle EPR credits."
              keywords={[
                "EPR ELV Credits",
                "ELV EPR Credit Trading",
                "ELV Credit Marketplace",
                "End-of-Life Vehicle Credits",
                "ELV Credit Trading",
                "Vehicle Recycling Credits",
                "ELV EPR Certificates",
                "Extended Producer Responsibility",
                "Vehicle Recycling",
                "Vehicle Scrappage",
                "Automobile Recycling",
                "ELV Compliance",
                "CPCB ELV Guidelines",
                "Circular Economy",
                "Environmental Compliance",
                "How does ELV EPR credit trading work?",
                "How to buy and sell ELV EPR credits?",
                "What is an ELV credit marketplace?",
                "How to trade ELV EPR certificates in India?",
                "ELV EPR credit pricing",
                "Best ELV EPR trading platform",
                "Benefits of ELV EPR credit trading",
                "ELV credit marketplace India",
                "ELV EPR compliance guide",
                "ELV EPR credit trading 2026",
              ]}
              url="https://eprnexuss.com/blog/epr-elv-trading"
              type="article"
            />
            <Hero />
            {/* <TickerStrip /> */}

            {/* mobile-only contact form, appears inline (not sticky) */}
            <div id="contact-form" className="lg:hidden">
              <StickyContactForm />
            </div>

            <MarketSnapshot />
            <WhatAreCredits />
            <HowTradingWorks />
            <StakeholderRoles />
            <MarketplaceMechanics />
            <ComplianceTimeline />
            <FAQSection />
            <FinalCTA />
          </main>

          {/* Sticky contact form — nothing else goes in this column */}
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
