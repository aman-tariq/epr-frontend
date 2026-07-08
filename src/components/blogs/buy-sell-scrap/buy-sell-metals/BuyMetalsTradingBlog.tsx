"use client";

/**
 * Buy & Sell Metals: Credit Trading & Marketplace Guide
 * -----------------------------------------------------------
 * Single-file blog page for a producer/recycler/PRO audience navigating
 * price risk, trade finance, and B2B marketplaces in metal scrap trading.
 *
 * Unlike battery scrap, metal scrap has no EPR-style certificate market —
 * so "credit trading" here means three real, distinct things: commodity
 * hedging on MCX, supply-chain/trade finance built into B2B marketplaces,
 * and GST input tax credit mechanics. The page is structured around that
 * distinction, with a price-exposure line chart as the signature visual
 * instead of a process pipeline or trading loop.
 *
 * Ten content sections + a persistent sticky contact form.
 * Uses the project's existing design tokens (primary / secondary /
 * brandGreen, hsl(var(--...)) system).
 *
 * Requires: framer-motion, recharts, lucide-react.
 *
 * Navbar/footer are assumed to already exist in the layout — this file is
 * content only, with top padding reserved so it never collapses under a
 * fixed/sticky navbar.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  TrendingUp,
  ShieldCheck,
  Landmark,
  Receipt,
  FileCheck2,
  Handshake,
  ChevronDown,
  Gauge,
  Building2,
  Scale,
  Percent,
  BarChart3,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/* Shared bits                                                          */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brandGreen">
      <span className="h-1.5 w-1.5 rounded-full bg-brandGreen" />
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

/* ------------------------------------------------------------------ */
/* 1. Hero                                                              */
/* ------------------------------------------------------------------ */

function Hero() {
  const stats = [
    {
      label: "MCX base metal futures, regulated since",
      value: "2003",
      source: "SEBI-regulated exchange",
    },
    {
      label: "Steel sold through mjunction's e-marketplace",
      value: "12M+ t",
      source: "mjunction, Tata Steel–SAIL JV",
    },
    {
      label: "Price realisation gain after moving online",
      value: "Up to 23%",
      source: "mjunction client data",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-4 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:pb-24 md:pt-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Eyebrow>Credit Trading · Marketplace</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Buy &amp; sell metals: credit trading &amp; marketplace guide
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Metal scrap doesn't run on certificate trading the way battery waste
            does — here, "credit" means price-risk hedging, the trade finance
            built into B2B marketplaces, and GST input tax credit. This is how
            each actually works.
          </p>
          <div className="mt-6 rounded-xl border border-border bg-muted/40 p-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                Our team is finalizing the full deep-dive.
              </span>{" "}
              Reach out for immediate guidance in the meantime — the form on
              this page reaches a live specialist, not a queue.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#hedging"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              See how hedging works
            </a>
            <a
              href="#marketplace"
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Compare marketplaces
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="grid grid-cols-1 gap-3 self-start rounded-2xl border border-border bg-card p-4 shadow-sm sm:grid-cols-3 md:grid-cols-1"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-muted/40 p-4 transition hover:bg-muted/70"
            >
              <div className="font-display text-2xl font-bold text-brandGreen md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-foreground">
                {s.label}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {s.source}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Why "credit" means something different here                      */
/* ------------------------------------------------------------------ */

function WhyDifferent() {
  const cards = [
    {
      icon: TrendingUp,
      title: "Price-risk hedging",
      copy: "Producers, recyclers, and traders use MCX base metal futures to lock in prices ahead of a sale or purchase — insulating margins from LME and rupee swings.",
    },
    {
      icon: Handshake,
      title: "Marketplace trade finance",
      copy: "Large B2B platforms bundle supply-chain finance directly into the buying process, so a purchase and its financing happen in the same transaction.",
    },
    {
      icon: Receipt,
      title: "GST input tax credit",
      copy: "Every registered link in the scrap chain claims back GST paid on inputs — a genuine credit mechanism, distinct from any certificate scheme.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Set the right expectation first"
        title="There's no EPR-style certificate market for metal scrap"
        description="Battery and e-waste recyclers trade compliance certificates. Metal scrap doesn't have that system — instead, three separate, very real credit mechanisms shape how the business actually runs."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <Icon className="h-6 w-6 text-brandGreen" />
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.copy}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. MCX contract specs                                                */
/* ------------------------------------------------------------------ */

function MCXContracts() {
  const rows = [
    {
      metal: "Aluminium",
      lot: "5,000 kg per lot",
      note: "Also available as a smaller Aluminium Mini contract",
    },
    {
      metal: "Copper",
      lot: "Standard + smaller-lot variants",
      note: "One of MCX's most liquid base metal contracts",
    },
    {
      metal: "Zinc",
      lot: "Standard + Zinc Mini contract",
      note: "Less liquid than copper and aluminium historically",
    },
    {
      metal: "Lead",
      lot: "Standard + Lead Mini contract",
      note: "Tracks LME lead alongside domestic battery-sector demand",
    },
    {
      metal: "Nickel",
      lot: "Standard contract",
      note: "Added alongside base metals in MCX's futures line-up",
    },
  ];

  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Where the hedging actually happens"
          title="MCX base metal(Multi Commodity Exchange of India) futures, at a glance"
          description="The Multi Commodity Exchange has run SEBI-regulated base metal futures since 2003, with contracts benchmarked against LME prices and settled or delivered through MCXCCL."
        />
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-5 py-4 font-display font-semibold text-foreground">
                  Metal
                </th>
                <th className="px-5 py-4 font-display font-semibold text-foreground">
                  Contract sizing
                </th>
                <th className="px-5 py-4 font-display font-semibold text-foreground">
                  Note
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.metal} className={i % 2 ? "bg-muted/20" : ""}>
                  <td className="px-5 py-4 align-top font-medium text-foreground">
                    {r.metal}
                  </td>
                  <td className="px-5 py-4 align-top text-muted-foreground">
                    {r.lot}
                  </td>
                  <td className="px-5 py-4 align-top text-muted-foreground">
                    {r.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Source: MCX contract specifications and product pages, 2026; Zerodha
          Varsity base metals module. Confirm current lot sizes and margin
          requirements directly with MCX or your broker before trading —
          contract terms are revised periodically.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Hedging signature chart                                          */
/* ------------------------------------------------------------------ */

// Illustrative price-exposure comparison — not live market data. It
// demonstrates the mechanics of hedging (locking a forward price) rather
// than forecasting any actual metal price. Aluminium's lot size of 5,000
// kg and the resulting ₹5,000 P&L per ₹1/kg move are real, published
// contract facts used here to make the mechanics concrete.
const hedgeData = [
  { month: "Month 1", spot: 230, hedged: 230 },
  { month: "Month 2", spot: 242, hedged: 230 },
  { month: "Month 3", spot: 219, hedged: 230 },
  { month: "Month 4", spot: 251, hedged: 230 },
  { month: "Month 5", spot: 205, hedged: 230 },
  { month: "Month 6", spot: 238, hedged: 230 },
];

function HedgingSignature() {
  return (
    <section id="hedging" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="What hedging actually does"
        title="Locking a price vs. riding the spot market"
        description="A futures contract doesn't predict the price — it fixes what you'll pay or receive, regardless of which way the spot market moves afterward."
      />
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="mb-1 flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-brandGreen" />
          <h3 className="font-display text-lg font-semibold text-foreground">
            Illustrative price path: spot vs. a hedged position
          </h3>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          Indexed values for illustration only — not a price forecast for any
          metal.
        </p>
        <div className="h-72 w-full">
          <ResponsiveContainer>
            <AreaChart data={hedgeData} margin={{ left: -10 }}>
              <defs>
                <linearGradient id="spotFill" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0.25}
                  />
                  <stop
                    offset="100%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
                domain={[190, 260]}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Area
                type="monotone"
                dataKey="spot"
                name="Spot market (unhedged)"
                stroke="hsl(var(--primary))"
                fill="url(#spotFill)"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="hedged"
                name="Futures-locked price"
                stroke="#5AC361"
                strokeWidth={3}
                dot={false}
                strokeDasharray="6 4"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 rounded-xl bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">In real terms:</span>{" "}
          MCX's Aluminium contract trades in lots of 5,000 kg — so every ₹1/kg
          move in the spot price is a ₹5,000 swing in unhedged exposure per lot.
          A futures position sized to your actual scrap volume converts that
          swing into a known, fixed number well before delivery.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5. mjunction case study                                              */
/* ------------------------------------------------------------------ */

function MjunctionCaseStudy() {
  const facts = [
    {
      icon: Building2,
      label: "Ownership",
      value: "50:50 joint venture between Tata Steel and SAIL",
    },
    {
      icon: TrendingUp,
      label: "Track record",
      value: "Over 12 million tonnes of steel sold through its e-marketplace",
    },
    {
      icon: Gauge,
      label: "Auction cadence",
      value: "700–800 auctions conducted every month",
    },
    {
      icon: Percent,
      label: "Price impact",
      value:
        "Clients reported price realisation gains of up to 23% after moving online",
    },
    {
      icon: Landmark,
      label: "Finance network",
      value:
        "Tied up with 14 banks and NBFCs for buyer and channel supply-chain finance",
    },
  ];

  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="A real case study"
          title="How mjunction bundles marketplace and finance together"
          description="This is the clearest example of what 'marketplace credit' looks like in metals — not a certificate, but financing wired directly into the transaction."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {facts.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.label}
                className="flex gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brandGreen/10 text-brandGreen">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {f.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {f.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Source: mjunction company materials and Tracxn/industry reporting on
          the Tata Steel–SAIL joint venture, 2025–2026.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Marketplace landscape                                             */
/* ------------------------------------------------------------------ */

const marketplaces = [
  {
    name: "mjunction",
    detail:
      "The largest e-marketplace for steel and coal in India, running hundreds of auctions monthly with financing built in — best suited to high-volume, recurring scrap and secondary steel sales.",
  },
  {
    name: "MSTC",
    detail:
      "The government-linked e-auction platform for PSU, defence, and railway scrap disposal — the route into public-sector scrap volumes, with its own registration and EMD requirements.",
  },
  {
    name: "Traditional B2B directories",
    detail:
      "General listing platforms still move a large share of smaller-lot, regional scrap trade — useful for sourcing and price discovery, but without integrated financing or auction mechanics.",
  },
];

function MarketplaceLandscape() {
  return (
    <section id="marketplace" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Where the volume actually moves"
        title="Three different kinds of marketplace"
        description="Picking the right one depends on your volume, whether you're selling to PSUs, and whether you need financing bundled in."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {marketplaces.map((m) => (
          <div
            key={m.name}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Landmark className="h-5.5 w-5.5" />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-foreground">
              {m.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {m.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7. GST input tax credit flow                                         */
/* ------------------------------------------------------------------ */

function GSTCredit() {
  const steps = [
    {
      icon: Receipt,
      title: "GST paid on purchase",
      detail:
        "18% GST applies on metal scrap purchases, whether bought directly or self-assessed under RCM from an unregistered seller.",
    },
    {
      icon: FileCheck2,
      title: "Invoice reflected in GSTR-2B",
      detail:
        "The supplier must have filed GSTR-1 and GSTR-3B, with the invoice showing up in the buyer's GSTR-2B statement.",
    },
    {
      icon: ShieldCheck,
      title: "Goods received, used for business",
      detail:
        "ITC is only valid once the scrap is physically received and used in the course of business — not merely invoiced.",
    },
    {
      icon: Scale,
      title: "Credit claimed, net liability reduced",
      detail:
        "The buyer offsets the GST paid against their own output tax liability, reducing net cash tax outflow.",
    },
  ];

  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="The credit mechanism that's actually written into law"
          title="How GST input tax credit flows through a scrap transaction"
          description="This is the one 'credit' in metal scrap trading that works exactly like a certificate scheme — except it's tax law, not a compliance market."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="flex gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brandGreen/10 text-brandGreen">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8. Trade credit & payment terms                                      */
/* ------------------------------------------------------------------ */

function TradeCreditTerms() {
  const terms = [
    {
      title: "Advance payment",
      copy: "The buyer pays some or all of the value upfront — common for new counterparties or high-value non-ferrous lots where trust hasn't yet been established.",
    },
    {
      title: "Credit period (net terms)",
      copy: "Payment due a fixed number of days after delivery or invoice — standard between established buyers and sellers with an ongoing relationship.",
    },
    {
      title: "Bank guarantee / letter of credit",
      copy: "Used for larger transactions or first-time high-value deals, shifting counterparty risk onto a bank rather than either trading party.",
    },
    {
      title: "Marketplace-financed purchase",
      copy: "Platforms like mjunction route buyer financing through partner banks directly at the point of purchase, rather than leaving credit terms to bilateral negotiation.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="How payment actually gets structured"
        title="The credit terms scrap trades run on"
        description="None of these are unique to metals, but which one you use changes your working capital cycle more than almost any other decision in the business."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {terms.map((t) => (
          <div
            key={t.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="font-display text-base font-semibold text-foreground">
              {t.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 9. FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "Can a small scrap trader actually use MCX to hedge?",
    a: "Yes — mini contracts exist alongside standard-size contracts specifically to bring the minimum lot size down for smaller hedgers. That said, futures trading carries real risk and margin requirements, so it's worth working through the mechanics with a broker before committing capital.",
  },
  {
    q: "Is GST input tax credit the same thing as an EPR certificate?",
    a: "No. ITC is a tax mechanism that reduces your net GST liability based on tax already paid on your purchases. An EPR certificate, by contrast, is a tradable compliance instrument tied to recycling obligations — metal scrap simply doesn't have an equivalent to the latter.",
  },
  {
    q: "Why would I use a marketplace instead of trading bilaterally?",
    a: "Platforms like mjunction report meaningful price realisation gains from moving to transparent online auctions, plus bundled access to buyer financing — advantages that are harder to replicate through one-off bilateral deals, especially at higher volumes.",
  },
  {
    q: "What's the safest payment structure for a first-time buyer or seller?",
    a: "A bank guarantee or letter of credit is the standard tool for shifting counterparty risk onto a bank when you don't yet have a track record with the other party — worth the extra step for any high-value first transaction.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          eyebrow="Common questions"
          title="Before you reach out"
        />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-xl border border-border bg-card"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-sm font-semibold text-foreground">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 10. Final CTA                                                        */
/* ------------------------------------------------------------------ */

function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center md:px-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <h2 className="relative font-display text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Full credit trading &amp; marketplace deep-dive coming soon
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
          We're finalizing hedging playbooks, marketplace onboarding steps, and
          trade-finance comparisons built specifically for metal scrap.
          Producers, recyclers, and PROs who need guidance now don't have to
          wait for the full guide — talk to our team today.
        </p>
        <div className="relative mt-8 flex justify-center">
          <a
            href="/contact"
            className="rounded-full bg-background px-7 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:opacity-90"
          >
            Get immediate guidance
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function BuySellMetalsCreditTradingGuide() {
  return (
    <main className="bg-background pt-24 md:pt-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-0 lg:grid-cols-[1fr_340px] lg:gap-6 lg:px-6">
        {/* Main content column */}
        <Seo
          title="Buy & Sell Metals: Credit Trading & Marketplace Guide"
          description="Explore how metal credit trading and digital marketplaces are transforming the scrap metal industry. Learn trading strategies, compliance requirements, pricing factors, and opportunities for producers, recyclers, and PROs."
          keywords={[
            "Buy and Sell Metals",
            "Metal Credit Trading",
            "Metal Marketplace",
            "Metal Trading Platform",
            "Scrap Metal Marketplace",
            "Metal Recycling",
            "Metal Trading Business",
            "Industrial Metal Trading",
            "Metal Scrap Business",
            "Recycling Marketplace",
            "Circular Economy",
            "Commodity Trading",
            "Metal Market Trends",
            "Scrap Metal Buyers",
            "Metal Trading India",
            "How does metal credit trading work?",
            "How to buy and sell metal scrap online?",
            "Best metal trading marketplace in India",
            "How to find metal scrap buyers?",
            "How to trade recycled metals?",
            "Metal trading business opportunities",
            "How to maximize profits in metal trading?",
            "Digital marketplace for metal recycling",
            "Metal trading compliance guide",
            "Metal marketplace guide 2026",
          ]}
          url="https://eprnexuss.com/blog/buy-sell-metals-trading"
          type="article"
        />
        <div className="min-w-0">
          <Hero />
          <WhyDifferent />
          <MCXContracts />
          <HedgingSignature />
          <MjunctionCaseStudy />
          <MarketplaceLandscape />
          <GSTCredit />
          <TradeCreditTerms />
          <FAQ />

          {/* Contact form inline for mobile / tablet, where the sticky sidebar is hidden */}
          <div id="contact" className="mx-auto max-w-6xl px-4 pt-4 lg:hidden">
            <StickyContactForm />
          </div>

          <FinalCTA />
        </div>

        {/* Sticky sidebar column — desktop only */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 px-2">
            <StickyContactForm />
          </div>
        </aside>
      </div>
    </main>
  );
}
