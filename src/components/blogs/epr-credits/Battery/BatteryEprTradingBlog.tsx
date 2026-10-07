"use client";



import { useEffect, useRef, useState } from "react";

import {

  motion,

  useScroll,

  useTransform,

  useInView,

  AnimatePresence,

} from "framer-motion";

import {

  Tag,

  Repeat,

  Lock,

  HandCoins,

  CheckCircle2,

  Factory,

  Recycle,

  Landmark,

  TrendingUp,

  TrendingDown,

  ShieldAlert,

  ArrowRight,

  ChevronDown,

  Activity,

} from "lucide-react";

import StickyContactForm from "@/components/StickyContactForm";

import Seo from "@/components/Seo";

function MarketplaceButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="https://www.eprnexuss.com/marketplace/"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#5AC361] px-6 py-3 font-semibold text-[#0B1210] no-underline transition-all duration-200 hover:scale-[1.03] hover:bg-[#4fb457] hover:shadow-lg ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}




/* ------------------------------------------------------------------ */

/*  DATA — indicative; confirm against the live registry/marketplace    */

/*  platform before publishing final numbers.                           */

/* ------------------------------------------------------------------ */



const tradeLifecycle = [

  { label: "List certificate", icon: Tag },

  { label: "Bid / ask match", icon: Repeat },

  { label: "Escrow lock-in", icon: Lock },

  { label: "Settlement", icon: HandCoins },

  { label: "Reconciliation", icon: CheckCircle2 },

];



const whoTrades = [

  {

    icon: Factory,

    title: "Producers",

    body: "The buy side. They purchase certificates to close the gap between their obligation and what they've recycled directly — usually as the compliance deadline gets closer.",

  },

  {

    icon: Recycle,

    title: "Recyclers",

    body: "The sell side. Verified recycling volume becomes inventory the moment a certificate is issued, and holding it too long just means sitting on unrealised value.",

  },

  {

    icon: Landmark,

    title: "PROs",

    body: "Often the market maker — aggregating supply from multiple recyclers and quoting it to producers, which is what keeps price discovery from being one-off and opaque.",

  },

];



const orderBook = [

  { price: 118, bid: 42, ask: 12 },

  { price: 122, bid: 30, ask: 22 },

  { price: 126, bid: 16, ask: 34 },

  { price: 130, bid: 8, ask: 48 },

];



const priceIndex = [

  { label: "W1", value: 100 },

  { label: "W2", value: 108 },

  { label: "W3", value: 104 },

  { label: "W4", value: 121 },

  { label: "W5", value: 132 },

];



const contractTypes = [

  {

    title: "Spot trade",

    body: "Certificate changes hands against payment, settled almost immediately. Good fit when you need to close a compliance gap now.",

    points: [

      "Price locked at trade time",

      "Fast settlement",

      "No exposure to future price moves",

    ],

  },

  {

    title: "Forward contract",

    body: "Price and volume agreed today, delivery and payment at a future date — useful for producers planning around a known annual obligation.",

    points: [

      "Price certainty ahead of deadline",

      "Depends on seller's future output",

      "Needs a credit-risk view on the counterparty",

    ],

  },

];



const settlementLedger = [

  {

    code: "TRD-01",

    title: "Trade match",

    body: "A bid and ask are matched on price and volume, either directly or through a PRO as intermediary.",

  },

  {

    code: "TRD-02",

    title: "Escrow lock-in",

    body: "Buyer's payment is held in escrow before the certificate transfer is triggered.",

  },

  {

    code: "TRD-03",

    title: "Certificate transfer",

    body: "Ownership of the certificate updates on the central registry.",

  },

  {

    code: "TRD-04",

    title: "Payment release",

    body: "Escrowed funds release to the seller once the transfer is confirmed on-registry.",

  },

  {

    code: "TRD-05",

    title: "Reconciliation",

    body: "Both parties' compliance ledgers reflect the trade for the annual filing.",

  },

];



const tradingPitfalls = [

  "Paying before the certificate transfer is confirmed on-registry",

  "Not checking a certificate's vintage or remaining validity window",

  "Treating a quoted price as firm without checking counterparty volume",

  "Concentrating all purchases with a single seller near the deadline",

];



const faqs = [

  {

    q: "Is EPR battery credit pricing centrally fixed?",

    a: "No — price moves with supply and demand in a given compliance cycle, which is exactly why it behaves like a market rather than a fixed fee.",

  },

  {

    q: "What actually protects a buyer in a trade?",

    a: "An escrow step that only releases payment after the certificate transfer shows up on the registry, rather than trusting a bilateral handshake.",

  },

  {

    q: "Should a producer wait for a lower price near the deadline?",

    a: "That's a real trade-off — prices often tighten as the compliance deadline approaches and available supply thins out, so waiting carries its own risk.",

  },

  {

    q: "Can PROs trade on their own account, not just as intermediaries?",

    a: "In practice, many PROs do take positions as aggregators, which is worth knowing when you're assessing whether a quote is coming from a neutral party or an interested one.",

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



/* Signature element: a fixed live-ticker rail — a small self-animating

   sparkline plus a ticking index number, styled like a marketplace

   price feed rather than a document or machinery gauge. */

function MarketTickerRail() {

  const { scrollYProgress } = useScroll();

  const railHeight = useTransform(scrollYProgress, [0, 1], ["6%", "100%"]);

  const [tick, setTick] = useState(1000);

  const [dir, setDir] = useState<1 | -1>(1);



  useEffect(() => {

    const id = setInterval(() => {

      setDir((prev) => (Math.random() > 0.5 ? 1 : -1));

      setTick((prev) =>

        Math.max(

          950,

          prev + (Math.random() > 0.5 ? 1 : -1) * Math.round(Math.random() * 4),

        ),

      );

    }, 1800);

    return () => clearInterval(id);

  }, []);



  return (

    <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-2">

      <div className="flex items-center gap-1">

        <Activity className="w-3.5 h-3.5 text-brandGreen" />

        <span className="font-mono text-[11px] text-foreground">{tick}</span>

        {dir === 1 ? (

          <TrendingUp className="w-3 h-3 text-brandGreen" />

        ) : (

          <TrendingDown className="w-3 h-3 text-amber-500" />

        )}

      </div>

      <div className="relative w-2.5 h-40 rounded-full bg-muted border border-border overflow-hidden">

        <motion.div

          style={{ height: railHeight }}

          className="absolute bottom-0 left-0 w-full rounded-full bg-gradient-to-t from-brandGreen to-emerald-300"

        />

      </div>

      <span className="font-mono text-[10px] text-muted-foreground rotate-90 mt-2 origin-center">

        MARKET

      </span>

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

        className="pointer-events-none absolute -right-24 -top-24 w-72 h-72 rounded-full bg-brandGreen/10 blur-3xl"

        animate={{ scale: [1, 1.15, 1] }}

        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}

      />

      <Reveal>

        <Eyebrow code="EPR / BATTERY">Trading & marketplace</Eyebrow>

      </Reveal>

      <Reveal delay={0.05}>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground max-w-3xl">

          EPR Battery Credits: Credit Trading{" "}

          <span className="text-brandGreen">& Marketplace Guide</span>

        </h1>

      </Reveal>

      <Reveal delay={0.15} className="max-w-2xl">

        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">

          A practical, step-by-step guide covering credit trading and the

          marketplace for EPR battery — built for producers and recyclers. Our team is finalizing the full deep-dive; reach out for

          immediate guidance in the meantime.

        </p>

      </Reveal>

      <Reveal delay={0.25}>

        <div className="mt-9 flex flex-wrap items-center gap-4">

          <a

            href="#contact"

            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"

          >

            Get immediate guidance <ArrowRight className="w-4 h-4" />

          </a>

          <a

            href="#lifecycle"

            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"

          >

            See how a trade works

          </a>

        </div>

      </Reveal>

    </section>

  );

}



/* ------------------------------------------------------------------ */

/*  SECTION 2 — Trade lifecycle overview                               */

/* ------------------------------------------------------------------ */



function TradeLifecycle() {

  return (

    <section id="lifecycle" className="mt-16 scroll-mt-28">

      <Reveal>

        <Eyebrow code="TRD-00">One trade, start to finish</Eyebrow>

        <h2 className="font-display md:text-3xl text-2xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">

          Five steps from listing to reconciliation

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

          {tradeLifecycle.map((s) => (

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

/*  SECTION 3 — Who trades what                                        */

/* ------------------------------------------------------------------ */



function WhoTrades() {

  return (

    <section className="mt-20">

      <Reveal>

        <Eyebrow code="TRD-01">Who's on each side</Eyebrow>

        <h2 className="font-display md:text-3xl text-xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">

          Buyers, sellers, and the market maker

        </h2>

      </Reveal>

      <div className="mt-8 grid sm:grid-cols-3 gap-5">

        {whoTrades.map((s, i) => (

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

/*  SECTION 4 — Order book depth chart                                 */

/* ------------------------------------------------------------------ */



function OrderBookChart() {

  const maxVol = Math.max(...orderBook.flatMap((d) => [d.bid, d.ask]));

  return (

    <section className="mt-20">

      <Reveal>

        <Eyebrow code="TRD-02">Price discovery</Eyebrow>

        <h2 className="font-display md:text-3xl text-xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">

          What an order book snapshot looks like

        </h2>

      </Reveal>

      <Reveal

        delay={0.1}

        className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8"

      >

        <p className="text-xs text-muted-foreground mb-6 font-mono">

          Indicative bid (green) vs ask (amber) volume by price level

        </p>

        <div className="space-y-3">

          {orderBook.map((d, i) => (

            <div key={d.price} className="flex items-center gap-3">

              <div className="flex-1 flex justify-end">

                <motion.div

                  className="h-5 rounded-l-md bg-gradient-to-l from-brandGreen to-emerald-300"

                  initial={{ width: 0 }}

                  whileInView={{ width: `${(d.bid / maxVol) * 100}%` }}

                  viewport={{ once: true }}

                  transition={{ duration: 0.8, delay: i * 0.1 }}

                />

              </div>

              <span className="font-mono text-xs text-foreground w-14 text-center shrink-0">

                ₹{d.price}

              </span>

              <div className="flex-1">

                <motion.div

                  className="h-5 rounded-r-md bg-gradient-to-r from-amber-400 to-amber-300"

                  initial={{ width: 0 }}

                  whileInView={{ width: `${(d.ask / maxVol) * 100}%` }}

                  viewport={{ once: true }}

                  transition={{ duration: 0.8, delay: i * 0.1 }}

                />

              </div>

            </div>

          ))}

        </div>

        <div className="mt-4 flex items-center gap-6 text-xs text-muted-foreground">

          <span className="flex items-center gap-1.5">

            <span className="w-2.5 h-2.5 rounded-full bg-brandGreen" /> Bid

            volume

          </span>

          <span className="flex items-center gap-1.5">

            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Ask

            volume

          </span>

        </div>

      </Reveal>

    </section>

  );

}



/* ------------------------------------------------------------------ */

/*  SECTION 5 — Price index line chart                                 */

/* ------------------------------------------------------------------ */



const batteryCreditPriceTrend = [

  { label: "Q1 FY25", value: 24 },

  { label: "Q2 FY25", value: 29 },

  { label: "Q3 FY25", value: 35 },

  { label: "Q4 FY25", value: 41 },

];



function PriceIndexChart() {

  const values = batteryCreditPriceTrend.map((d) => d.value);

  const max = Math.max(...values);

  const min = Math.min(...values);

  const range = max - min || 1;



  const w = 340;

  const h = 140;



  // inset padding on all sides so circles/stroke/labels never touch the

  // viewBox edge — this is what was causing the cropped look

  const padX = 20;

  const padY = 16;

  const plotW = w - padX * 2;

  const plotH = h - padY * 2;

  const step = plotW / (batteryCreditPriceTrend.length - 1);



  const points = batteryCreditPriceTrend.map((d, i) => [

    padX + i * step,

    padY + plotH - ((d.value - min) / range) * plotH,

  ]);



  const path = points

    .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`)

    .join(" ");



  // smooth area fill under the line for a bit more visual weight

  const areaPath = `${path} L ${points[points.length - 1][0]} ${h - padY} L ${points[0][0]} ${h - padY} Z`;



  return (

    <section className="mt-20">

      <Reveal>

        <Eyebrow code="TRD-03">Where price has moved</Eyebrow>

        <h2 className="font-display md:text-3xl text-xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">

          Battery EPR credit pricing, quarter over quarter

        </h2>

      </Reveal>

      <Reveal

        delay={0.1}

        className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8"

      >

        <p className="text-xs text-muted-foreground mb-2 font-mono">

          Indicative price, ₹ per kg of certified battery waste recycled

        </p>

        <svg

          viewBox={`0 0 ${w} ${h + 30}`}

          className="w-full h-auto mt-4 overflow-visible"

        >

          <motion.path

            d={areaPath}

            fill="url(#priceGradient)"

            stroke="none"

            initial={{ opacity: 0 }}

            whileInView={{ opacity: 1 }}

            viewport={{ once: true }}

            transition={{ duration: 1, delay: 0.3 }}

          />

          <defs>

            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">

              <stop offset="0%" stopColor="#5AC361" stopOpacity="0.25" />

              <stop offset="100%" stopColor="#5AC361" stopOpacity="0" />

            </linearGradient>

          </defs>

          <motion.path

            d={path}

            fill="none"

            stroke="#5AC361"

            strokeWidth="3"

            strokeLinecap="round"

            initial={{ pathLength: 0 }}

            whileInView={{ pathLength: 1 }}

            viewport={{ once: true }}

            transition={{ duration: 1.4, ease: "easeInOut" }}

          />

          {points.map((p, i) => (

            <g key={i}>

              <circle cx={p[0]} cy={p[1]} r="4" fill="#5AC361" />

              <text

                x={p[0]}

                y={p[1] - 12}

                textAnchor={

                  i === 0

                    ? "start"

                    : i === points.length - 1

                      ? "end"

                      : "middle"

                }

                className="fill-foreground font-mono text-[11px] font-medium"

              >

                ₹{batteryCreditPriceTrend[i].value}

              </text>

              <text

                x={p[0]}

                y={h + 22}

                textAnchor={

                  i === 0

                    ? "start"

                    : i === points.length - 1

                      ? "end"

                      : "middle"

                }

                className="fill-muted-foreground font-mono text-[10px]"

              >

                {batteryCreditPriceTrend[i].label}

              </text>

            </g>

          ))}

        </svg>

        <p className="mt-4 font-mono text-[11px] text-muted-foreground">

          Indicative range based on publicly reported battery EPR certificate

          pricing (\~₹20–₹50/kg), which fluctuates 20–30% with supply-demand

          swings. Actual pricing varies by battery chemistry and registry.

        </p>

      </Reveal>

    </section>

  );

}



/* ------------------------------------------------------------------ */

/*  SECTION 6 — Contract types                                        */

/* ------------------------------------------------------------------ */



function ContractTypes() {

  return (

    <section className="mt-20">

      <Reveal>

        <Eyebrow code="TRD-04">How you can structure a trade</Eyebrow>

        <h2 className="font-display md:text-3xl text-xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">

          Spot or forward — the choice changes your exposure

        </h2>

      </Reveal>

      <div className="mt-8 grid sm:grid-cols-2 gap-5">

        {contractTypes.map((c, i) => (

          <Reveal key={c.title} delay={i * 0.1}>

            <div className="h-full rounded-2xl border border-border bg-card p-6">

              <h3 className="font-display font-semibold text-lg text-foreground">

                {c.title}

              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">

                {c.body}

              </p>

              <ul className="mt-4 space-y-2">

                {c.points.map((p) => (

                  <li

                    key={p}

                    className="flex items-start gap-2 text-xs text-foreground"

                  >

                    <span className="w-1.5 h-1.5 rounded-full bg-brandGreen mt-1.5 shrink-0" />

                    {p}

                  </li>

                ))}

              </ul>

            </div>

          </Reveal>

        ))}

      </div>

    </section>

  );

}



/* ------------------------------------------------------------------ */

/*  SECTION 7 — Settlement ledger                                      */

/* ------------------------------------------------------------------ */



function SettlementLedger() {

  return (

    <section className="mt-20">

      <Reveal>

        <Eyebrow code="TRD-05">Behind the trade</Eyebrow>

        <h2 className="font-display md:text-3xl text-xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">

          How settlement actually clears

        </h2>

      </Reveal>

      <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">

        {settlementLedger.map((step, i) => (

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

/*  SECTION 8 — Trading pitfalls                                       */

/* ------------------------------------------------------------------ */



function TradingPitfalls() {

  return (

    <section className="mt-20">

      <Reveal>

        <Eyebrow code="TRD-06">Trade carefully</Eyebrow>

        <h2 className="font-display md:text-3xl text-xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">

          Where trades most often go wrong

        </h2>

      </Reveal>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">

        {tradingPitfalls.map((r, i) => (

          <Reveal key={r} delay={i * 0.08}>

            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">

              <ShieldAlert className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" />

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

          <Repeat className="absolute -right-6 -bottom-8 w-40 h-40 opacity-10" />

          <span className="font-mono text-xs tracking-widest opacity-80">

            TRD-07 / NEXT STEP

          </span>

          <h2 className="mt-3 font-display md:text-2xl text-xl sm:text-3xl font-semibold max-w-xl">

            Need help structuring a trade or checking a counterparty?

          </h2>

          <p className="mt-3 max-w-xl text-sm sm:text-base opacity-90">

            If you're placing or receiving a trade right now, talk to our team

            for guidance on structuring it and checking the counterparty before

            you commit.

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

        <Eyebrow code="TRD-08">Common questions</Eyebrow>

        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground max-w-2xl">

          Before you place a trade

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



export default function EPRBatteryTradingMarketplace() {

  return (

    <div className="bg-background min-h-screen">

      <MarketTickerRail />

      <div className="md:container pt-28 sm:pt-32 pb-24">

        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-10 xl:gap-14">

          <main className="min-w-0">

            <Seo

              title="EPR Battery Credits: Credit Trading & Marketplace Guide"

              description="Discover how Battery EPR credit trading works in India. Learn about EPR credit marketplaces, pricing, compliance, CPCB guidelines, and strategies to maximize the value of Battery EPR credits."

              keywords={[

                "EPR Battery Credits",

                "Battery EPR Credit Trading",

                "Battery EPR Marketplace",

                "Battery Credit Marketplace",

                "Battery EPR Certificates",

                "Battery EPR Trading",

                "Battery Waste Management",

                "Battery Recycling",

                "Extended Producer Responsibility",

                "CPCB Battery Credits",

                "Battery EPR Compliance",

                "Battery Credit Exchange",

                "Battery Recycling Certificates",

                "Circular Economy",

                "Environmental Compliance",

                "How does Battery EPR credit trading work?",

                "How to buy and sell Battery EPR credits?",

                "What is a Battery EPR marketplace?",

                "How to trade Battery EPR certificates in India?",

                "Battery EPR credit pricing",

                "Battery EPR trading platform",

                "Benefits of Battery EPR credit trading",

                "Battery credit marketplace India",

                "Battery EPR compliance guide",

                "Battery EPR credit trading 2026",

              ]}

              url="https\://eprnexuss.com/blog/epr-battery-trading"

              type="article"

            />

            <Hero />
          <div className="mt-8 mb-16 flex flex-wrap">
            <MarketplaceButton>
              Explore EPR Battery Marketplace
            </MarketplaceButton>
          </div>

            <TradeLifecycle />

            <WhoTrades />

            {/* <OrderBookChart /> */}

            <PriceIndexChart />
          <div className="mt-8 mb-16 flex flex-wrap">
            <MarketplaceButton>
              Buy & Sell Battery EPR Credits
            </MarketplaceButton>
          </div>

            <ContractTypes />

            <SettlementLedger />

            <TradingPitfalls />

            <CTABanner />
          <div className="mt-8 mb-16 flex justify-center">
            <MarketplaceButton>
              Trade EPR Battery Credits
            </MarketplaceButton>
          </div>

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
