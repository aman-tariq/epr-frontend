"use client";

/**
 * SustainableGrowthBlogPost.tsx
 * ----------------------------------------------------------------------
 * Blog: "Business Growth & Lead Generation — How Sustainable Business
 * Practices Generate More Leads and Strengthen Brand Value"
 *
 * Drop this file into your app (e.g. app/blog/sustainable-business-growth/page.tsx
 * or as a component rendered from your routing layer). It assumes:
 *   - Your existing Navbar/Footer wrap this page already (not included here).
 *   - Tailwind is configured with the theme you shared (brandGreen, primary,
 *     secondary, muted, card, border, etc. all resolve via CSS variables).
 *   - `recharts` and `lucide-react` are installed in the project.
 *   - `@/components/StickyContactForm` exists and exports a default component.
 *
 * All statistics cited below are real, sourced figures (Bain & Company 2025
 * B2B Sustainability survey, Supply Chain 24/7, and India's Plastic Waste
 * Management Rules 2025/2026 amendments under the CPCB). Sources are listed
 * at the end of the article.
 * ---------------------------------------------------------------------- */

import React, { useEffect, useRef, useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Leaf,
  Recycle,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  CalendarClock,
  Award,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  QrCode,
  FileCheck2,
  Factory,
  Users,
  Clock,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/*  Shared theme tokens (resolve to your CSS variables at runtime)     */
/* ------------------------------------------------------------------ */
const COLOR_PRIMARY = "hsl(var(--primary))";
const COLOR_SECONDARY = "hsl(var(--secondary))";
const COLOR_BRAND_GREEN = "#5AC361";
const COLOR_MUTED = "hsl(var(--muted-foreground))";
const COLOR_BORDER = "hsl(var(--border))";

/* ------------------------------------------------------------------ */
/*  Small utility hooks                                                */
/* ------------------------------------------------------------------ */
function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useCountUp(end: number, inView: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);
  return value;
}

/** Scroll-reveal wrapper using the fade-in / slide-up keyframes already
 *  defined in the Tailwind config. */
function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-in",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade-in" | "slide-up";
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      className={`${inView ? `animate-${variant}` : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Custom SVG illustrations (no stock photography, brand-themed)      */
/* ------------------------------------------------------------------ */

/** Circular recycling loop wrapped around a leaf, with a small
 *  upward-growth chip — pairs "sustainability" with "business growth". */
function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a circular recycling loop around a leaf, with a rising growth chart chip, representing sustainable business growth"
    >
      <defs>
        <linearGradient id="heroRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLOR_BRAND_GREEN} />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="200" r="172" fill="white" fillOpacity="0.06" />
      <circle
        cx="200"
        cy="200"
        r="172"
        stroke="white"
        strokeOpacity="0.12"
        strokeWidth="1"
        fill="none"
      />

      {/* three recycle-loop arcs */}
      <g
        stroke="url(#heroRing)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M200 62 A138 138 0 0 1 319 132" />
        <path d="M338 218 A138 138 0 0 1 220 338" />
        <path d="M140 318 A138 138 0 0 1 72 190" />
      </g>
      {/* arrow heads for the loop */}
      <path d="M308 112 L327 133 L299 141 Z" fill={COLOR_BRAND_GREEN} />
      <path d="M228 333 L204 342 L212 312 Z" fill="white" />
      <path d="M77 200 L60 178 L90 174 Z" fill={COLOR_BRAND_GREEN} />

      {/* central leaf */}
      <g transform="translate(200 200)">
        <path
          d="M0 -56 C 42 -50 58 -8 32 32 C 6 58 -37 46 -47 10 C -57 -27 -36 -62 0 -56 Z"
          fill="white"
        />
        <path
          d="M-2 -50 C -12 -8 -18 22 -40 44"
          stroke={COLOR_PRIMARY}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* growth chip, lower right */}
      <g transform="translate(238 246)">
        <rect x="-14" y="-14" width="92" height="60" rx="16" fill="white" />
        <g transform="translate(4 6)">
          <rect
            x="0"
            y="26"
            width="9"
            height="14"
            rx="2"
            fill={COLOR_PRIMARY}
          />
          <rect
            x="14"
            y="16"
            width="9"
            height="24"
            rx="2"
            fill={COLOR_PRIMARY}
          />
          <rect
            x="28"
            y="2"
            width="9"
            height="38"
            rx="2"
            fill={COLOR_BRAND_GREEN}
          />
          <path
            d="M0 14 L14 4 L28 -6"
            stroke={COLOR_BRAND_GREEN}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* small floating leaf accent, upper left */}
      <g transform="translate(96 92) rotate(-20)">
        <path
          d="M0 -18 C 14 -16 19 -2 10 10 C 2 18 -12 15 -15 3 C -18 -9 -12 -20 0 -18 Z"
          fill={COLOR_BRAND_GREEN}
          fillOpacity="0.9"
        />
      </g>
    </svg>
  );
}

/** Deterministic pseudo-QR pattern used purely as a decorative traceability
 *  motif (not a scannable code). */
const QR_PATTERN = [
  [1, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 0, 1],
  [1, 1, 0, 1, 1, 0],
  [0, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0, 1],
];

/** Stacked packaging boxes + a QR traceability tag + a compliance checkmark,
 *  linked by a dashed recycling arc — mirrors the EPR/traceability content. */
function ComplianceIllustration() {
  const cell = 10;
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of stacked packaging boxes with a QR traceability tag and a compliance checkmark badge, linked by a recycling loop"
    >
      <defs>
        <linearGradient id="boxGradA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COLOR_SECONDARY} />
          <stop offset="100%" stopColor={COLOR_PRIMARY} />
        </linearGradient>
      </defs>

      <rect
        x="30"
        y="30"
        width="340"
        height="340"
        rx="28"
        fill={COLOR_MUTED}
        opacity="0.08"
      />

      {/* dashed recycling arc connecting the elements */}
      <path
        d="M130 240 C 70 190 100 100 176 96"
        stroke={COLOR_BRAND_GREEN}
        strokeWidth="5"
        fill="none"
        strokeDasharray="2 11"
        strokeLinecap="round"
      />
      <path
        d="M270 150 C 320 190 300 250 236 262"
        stroke={COLOR_BRAND_GREEN}
        strokeWidth="5"
        fill="none"
        strokeDasharray="2 11"
        strokeLinecap="round"
      />

      {/* stacked packaging boxes */}
      <rect
        x="86"
        y="222"
        width="118"
        height="96"
        rx="10"
        fill="url(#boxGradA)"
      />
      <rect
        x="86"
        y="222"
        width="118"
        height="20"
        rx="8"
        fill="white"
        fillOpacity="0.22"
      />
      <line
        x1="145"
        y1="222"
        x2="145"
        y2="318"
        stroke="white"
        strokeOpacity="0.3"
        strokeWidth="2"
      />

      <rect
        x="206"
        y="246"
        width="92"
        height="72"
        rx="10"
        fill={COLOR_BRAND_GREEN}
      />
      <rect
        x="206"
        y="246"
        width="92"
        height="18"
        rx="8"
        fill="white"
        fillOpacity="0.25"
      />

      {/* QR traceability tag */}
      <g transform="translate(150 96)">
        <rect x="0" y="0" width="76" height="76" rx="12" fill="white" />
        {QR_PATTERN.map((row, ri) =>
          row.map((v, ci) =>
            v ? (
              <rect
                key={`${ri}-${ci}`}
                x={8 + ci * cell}
                y={8 + ri * cell}
                width={cell - 2}
                height={cell - 2}
                rx="1.5"
                fill={COLOR_PRIMARY}
              />
            ) : null,
          ),
        )}
      </g>

      {/* compliance checkmark badge */}
      <g transform="translate(292 150)">
        <circle cx="0" cy="0" r="28" fill="white" />
        <circle
          cx="0"
          cy="0"
          r="28"
          stroke={COLOR_BRAND_GREEN}
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M-11 0 L-3 9 L13 -11"
          stroke={COLOR_BRAND_GREEN}
          strokeWidth="5.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  1. Hero                                                            */
/* ------------------------------------------------------------------ */
function BlogHero() {
  return (
    <header
      className="relative overflow-hidden rounded-3xl border border-border"
      style={{
        background: `linear-gradient(135deg, ${COLOR_PRIMARY}, #0f2e22)`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(560px circle at 85% 12%, ${COLOR_BRAND_GREEN}55, transparent 60%)`,
        }}
      />

      <div className="relative z-10 grid grid-cols-1 gap-10 px-6 py-14 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:py-24">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm">
              <Leaf
                className="h-3.5 w-3.5"
                style={{ color: COLOR_BRAND_GREEN }}
              />
              Business Growth &amp; Lead Generation
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 max-w-3xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              How Sustainable Business Practices Generate More Leads and
              Strengthen Brand Value
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Responsible waste management and EPR compliance aren&apos;t just
              regulatory boxes to tick anymore — they&apos;ve become one of the
              clearest signals B2B buyers use to decide who they trust with
              their business.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> 9 min read
              </span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>Sustainability &amp; Compliance</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>For Brand &amp; Growth Teams</span>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={150}
          className="mx-auto h-52 w-52 sm:h-64 sm:w-64 lg:h-80 lg:w-80"
        >
          <HeroIllustration />
        </Reveal>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  2. Stat band (count-up cards)                                      */
/* ------------------------------------------------------------------ */
const TRUST_STATS = [
  {
    value: 92,
    suffix: "%",
    label:
      "of B2B buyers research a supplier's sustainability record before purchasing",
    source: "Supply Chain 24/7, 2025",
  },
  {
    value: 49,
    suffix: "%",
    label:
      "of B2B companies already buy more from their most sustainable suppliers",
    source: "Bain & Company, 2025",
  },
  {
    value: 68,
    suffix: "%",
    label:
      "plan to increase purchases from sustainable suppliers over the next 3 years",
    source: "Bain & Company, 2025",
  },
  {
    value: 80,
    suffix: "%+",
    label:
      "of B2B buyers paid a price premium on their most recent sustainable purchase",
    source: "Bain & Company, 2025",
  },
];

function StatCard({
  value,
  suffix,
  label,
  source,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  source: string;
  delay: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const count = useCountUp(value, inView);
  return (
    <div
      ref={ref}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      className={`${
        inView ? "animate-slide-up" : "opacity-0"
      } rounded-2xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      <div
        className="font-display text-4xl font-semibold sm:text-5xl"
        style={{ color: COLOR_BRAND_GREEN }}
      >
        {count}
        {suffix}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{label}</p>
      <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
        {source}
      </p>
    </div>
  );
}

function TrustStatBand() {
  return (
    <section className="mt-16">
      <Reveal>
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Buyers are already voting with their purchase orders
        </h2>
        <p className="mt-3 max-w-2xl text-foreground/70">
          Sustainability moved from a compliance checkbox to a purchasing
          criterion faster than most marketing calendars planned for.
          Here&apos;s what buyers are telling researchers right now.
        </p>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_STATS.map((s, i) => (
          <StatCard key={s.label} {...s} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. Intro narrative                                                 */
/* ------------------------------------------------------------------ */
function IntroSection() {
  return (
    <section className="mt-16 max-w-3xl">
      <Reveal>
        <p className="text-lg leading-relaxed text-foreground/80">
          For years, sustainability sat in the CSR report, next to the photos of
          tree plantation drives. Today it sits in the procurement scorecard.
          Bain &amp; Company&apos;s 2025 sustainability survey of more than 750
          global B2B buyers found that half already give more business to their
          more sustainable suppliers, and that share is expected to climb to
          two-thirds within three years. The same research found sustainability
          is on track to become the second-most important purchasing criterion
          by 2028 — behind only quality, and ahead of price.
        </p>
        <p className="mt-5 leading-relaxed text-foreground/80">
          In India, this shift has a very concrete trigger: Extended Producer
          Responsibility, or EPR. Under the Plastic Waste Management Rules and
          their 2025 amendments, every producer, importer, and brand owner
          (PIBO) placing plastic packaging on the market is now legally
          responsible for collecting, recycling, and increasingly reusing that
          packaging — with the data made public on a centralised government
          portal. That last part matters more than most compliance teams
          realise: EPR compliance is no longer just paperwork you file quietly.
          It is becoming a public, verifiable trust signal that your sales and
          marketing teams can use — or that a competitor will use against you if
          you can&apos;t show it.
        </p>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. Why buyers care — bar chart                                     */
/* ------------------------------------------------------------------ */
const BUYER_CHART_DATA = [
  { name: "Research sustainability first", value: 92 },
  { name: "Already buy more from sustainable suppliers", value: 49 },
  { name: "Plan to increase in 3 years", value: 68 },
  { name: "Paid a premium last purchase", value: 80 },
];

function WhyBuyersCareChart() {
  return (
    <section className="mt-16">
      <Reveal>
        <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          <BarChart3 className="h-4 w-4" style={{ color: COLOR_BRAND_GREEN }} />
          B2B buyer behaviour
        </div>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          What's actually changing in the buying committee
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-8 rounded-2xl border border-border bg-card p-4 sm:p-6">
          <div className="h-72 w-full sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={BUYER_CHART_DATA}
                layout="vertical"
                margin={{ top: 8, right: 24, left: 8, bottom: 8 }}
              >
                <CartesianGrid horizontal={false} stroke={COLOR_BORDER} />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                  stroke={COLOR_MUTED}
                  fontSize={12}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={190}
                  stroke={COLOR_MUTED}
                  fontSize={12}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(v: number) => [`${v}%`, "Share of B2B buyers"]}
                  contentStyle={{
                    borderRadius: 12,
                    border: `1px solid ${COLOR_BORDER}`,
                  }}
                />
                <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={26}>
                  {BUYER_CHART_DATA.map((_, i) => (
                    <Cell
                      key={i}
                      fill={i % 2 === 0 ? COLOR_BRAND_GREEN : COLOR_PRIMARY}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Source: Bain &amp; Company, The Visionary CEO&apos;s Guide to
            Sustainability, 2025; Supply Chain 24/7, 2025.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  5. EPR compliance overview (with image)                            */
/* ------------------------------------------------------------------ */
function EPRComplianceOverview() {
  return (
    <section className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
      <Reveal>
        <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          <Recycle className="h-4 w-4" style={{ color: COLOR_BRAND_GREEN }} />
          The regulatory backdrop
        </div>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Why EPR compliance is now a growth conversation, not just a legal one
        </h2>
        <p className="mt-4 leading-relaxed text-foreground/80">
          India generates roughly 9.3 million tonnes of plastic waste every year
          — around 26,000 tonnes a day — and only about 60% of it is formally
          collected. The country&apos;s installed recycling capacity (about 9.82
          million tonnes) still trails behind what&apos;s generated, which is
          exactly the gap EPR is designed to close.
        </p>
        <p className="mt-4 leading-relaxed text-foreground/80">
          PIBOs were required to collectively recycle 8.4 million tonnes of
          plastic packaging — 35% of what they placed on the market — by March
          2025, rising in stages toward full circularity later this decade. As
          of 2025, more than 50,000 PIBOs had already registered on the
          CPCB&apos;s centralised EPR portal, together accounting for roughly
          1.5 million tonnes of plastic waste a year.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Every batch of packaging must now carry a QR code, barcode, or unique ID linking it to the registered producer.",
            "Recycled-content minimums are now mandatory: 30% for rigid and PET packaging, 10% for flexible, 5% for multi-layer.",
            "Large rigid containers must be reused for up to 85% of production volume by 2029.",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm text-foreground/80">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0"
                style={{ color: COLOR_BRAND_GREEN }}
              />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={150} className="order-first lg:order-last">
        <div className="flex h-64 items-center justify-center rounded-2xl border border-border bg-card p-8 sm:h-80 lg:h-[420px]">
          <div className="h-full w-full max-w-sm">
            <ComplianceIllustration />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  6. Recycled-content mandate — bar chart                             */
/* ------------------------------------------------------------------ */
const CONTENT_MANDATE_DATA = [
  { category: "Rigid / PET", value: 30 },
  { category: "Flexible", value: 10 },
  { category: "Multi-layer", value: 5 },
];

function RecycledContentChart() {
  return (
    <section className="mt-16">
      <Reveal>
        <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
          Minimum recycled content by packaging category (effective April 2025)
        </h3>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-6 rounded-2xl border border-border bg-card p-4 sm:p-6">
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={CONTENT_MANDATE_DATA}
                margin={{ top: 8, right: 16, left: 0, bottom: 8 }}
              >
                <CartesianGrid vertical={false} stroke={COLOR_BORDER} />
                <XAxis dataKey="category" stroke={COLOR_MUTED} fontSize={12} />
                <YAxis
                  tickFormatter={(v) => `${v}%`}
                  stroke={COLOR_MUTED}
                  fontSize={12}
                />
                <Tooltip
                  formatter={(v: number) => [
                    `${v}%`,
                    "Minimum recycled content",
                  ]}
                  contentStyle={{
                    borderRadius: 12,
                    border: `1px solid ${COLOR_BORDER}`,
                  }}
                />
                <Bar
                  dataKey="value"
                  radius={[8, 8, 0, 0]}
                  barSize={64}
                  fill={COLOR_SECONDARY}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Source: India Plastic Waste Management (Amendment) Rules, 2025,
            CPCB. Category thresholds are scheduled to rise in later phases.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  7. Regulatory timeline — signature element                         */
/* ------------------------------------------------------------------ */
const TIMELINE = [
  {
    date: "Jan 2025",
    title: "PWM Rules amended",
    detail:
      "MoEFCC tightens Extended Producer Responsibility obligations and introduces stricter recycled-content requirements.",
  },
  {
    date: "Apr 1, 2025",
    title: "Recycled-content mandate begins",
    detail:
      "Minimum recycled content becomes mandatory: 30% rigid/PET, 10% flexible, 5% multi-layer packaging.",
  },
  {
    date: "Jul 1, 2025",
    title: "QR / barcode traceability required",
    detail:
      "All plastic packaging must carry a barcode, QR code, or unique ID linking each batch to its registered producer on the CPCB portal.",
  },
  {
    date: "FY 2025–26",
    title: "35% collective recycling target",
    detail:
      "PIBOs are required to recycle 8.4 million tonnes of plastic packaging — 35% of what was placed on the market.",
  },
  {
    date: "Apr 1, 2026",
    title: "EPR expands beyond plastics",
    detail:
      "New Environment Protection (EPR for Packaging) Rules bring paper, glass, metal and sanitary products into scope, alongside non-ferrous metal scrap and construction & demolition waste.",
  },
  {
    date: "2026–27",
    title: "Recycle/reuse target hits 70%",
    detail:
      "PIBOs must recycle or reuse at least 70% of the plastic waste they generate.",
  },
  {
    date: "2028–29",
    title: "100% recycle/reuse target",
    detail:
      "Full-circularity target reached, aligned with the government's 2030 goal of 100% recyclable or compostable packaging.",
  },
];

function RegulatoryTimeline() {
  return (
    <section className="mt-16">
      <Reveal>
        <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          <CalendarClock
            className="h-4 w-4"
            style={{ color: COLOR_BRAND_GREEN }}
          />
          Your compliance runway
        </div>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          The EPR roadmap through 2029
        </h2>
        <p className="mt-3 max-w-2xl text-foreground/70">
          Every deadline below is already on the statute books. Where your
          business sits on this timeline today is exactly what a
          sustainability-literate buyer will ask about in their next RFP.
        </p>
      </Reveal>

      <div
        className="relative mt-10 border-l-2 pl-6 sm:pl-10"
        style={{ borderColor: COLOR_BORDER }}
      >
        {TIMELINE.map((item, i) => (
          <Reveal
            key={item.date}
            delay={i * 90}
            className="relative mb-10 last:mb-0"
          >
            <span
              className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full sm:-left-[43px]"
              style={{ backgroundColor: COLOR_BRAND_GREEN }}
            />
            <p
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: COLOR_BRAND_GREEN }}
            >
              {item.date}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-foreground/70">
              {item.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  8. Recycle/reuse target trajectory — line chart                    */
/* ------------------------------------------------------------------ */
const TARGET_TRAJECTORY = [
  { period: "FY 2025–26", target: 35 },
  { period: "2026–27", target: 70 },
  { period: "2028–29", target: 100 },
];

function TargetTrajectoryChart() {
  return (
    <section className="mt-16">
      <Reveal>
        <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
          How fast the recycle / reuse obligation is rising
        </h3>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-6 rounded-2xl border border-border bg-card p-4 sm:p-6">
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={TARGET_TRAJECTORY}
                margin={{ top: 8, right: 24, left: 0, bottom: 8 }}
              >
                <CartesianGrid vertical={false} stroke={COLOR_BORDER} />
                <XAxis dataKey="period" stroke={COLOR_MUTED} fontSize={12} />
                <YAxis
                  tickFormatter={(v) => `${v}%`}
                  domain={[0, 100]}
                  stroke={COLOR_MUTED}
                  fontSize={12}
                />
                <Tooltip
                  formatter={(v: number) => [`${v}%`, "Recycle / reuse target"]}
                  contentStyle={{
                    borderRadius: 12,
                    border: `1px solid ${COLOR_BORDER}`,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke={COLOR_BRAND_GREEN}
                  strokeWidth={3}
                  dot={{ r: 5, fill: COLOR_BRAND_GREEN }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Source: India Plastic Waste Management Rules and 2025/2026
            amendments, CPCB; Packaging Dive, 2026.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  9. Brand value narrative                                           */
/* ------------------------------------------------------------------ */
function BrandValueSection() {
  return (
    <section className="mt-16">
      <Reveal>
        <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          <Award className="h-4 w-4" style={{ color: COLOR_BRAND_GREEN }} />
          From compliance to pipeline
        </div>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Compliance only becomes a growth lever once buyers can see it
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <TrendingUp
              className="h-6 w-6"
              style={{ color: COLOR_BRAND_GREEN }}
            />
            <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
              The cost of staying invisible
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              27% of B2B buyers will switch suppliers if sustainability
              information isn&apos;t easy to find online. Nearly half of
              corporate buyers plan to drop suppliers that don&apos;t meet their
              sustainability criteria by 2028. Silence on compliance is no
              longer neutral — it&apos;s a competitive disadvantage.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <ShieldCheck
              className="h-6 w-6"
              style={{ color: COLOR_BRAND_GREEN }}
            />
            <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
              The upside of being visible
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Growth-leading B2B companies are already embedding sustainability
              into sales conversations and incentive plans, not just annual
              reports. More than 80% of B2B buyers paid a premium on their last
              sustainable purchase — proof that transparency isn&apos;t charity,
              it&apos;s pricing power.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  10. Lead-gen checklist                                              */
/* ------------------------------------------------------------------ */
const CHECKLIST = [
  {
    icon: FileCheck2,
    title: "Publish your EPR status",
    detail:
      "Turn your CPCB registration, category, and recycled-tonnage figures into a public sustainability page buyers can find in under a minute.",
  },
  {
    icon: QrCode,
    title: "Use traceability as a trust signal",
    detail:
      "The same QR/batch traceability you built for compliance can go straight into RFP responses and procurement audits.",
  },
  {
    icon: Factory,
    title: "Document real impact, not intentions",
    detail:
      "Tonnes recycled, reuse rates achieved, and energy or emissions avoided are far more persuasive than a general sustainability statement.",
  },
  {
    icon: Users,
    title: "Brief sales on compliance status",
    detail:
      "Give your sales team a one-page cheat sheet on where you stand against 2025–2029 targets so they can answer buyer questions on the spot.",
  },
];

function LeadGenChecklist() {
  return (
    <section className="mt-16">
      <Reveal>
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Turning your compliance work into a lead-gen asset
        </h2>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {CHECKLIST.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal
              key={item.title}
              delay={i * 100}
              variant="slide-up"
              className="rounded-2xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${COLOR_BRAND_GREEN}1A` }}
              >
                <Icon
                  className="h-5 w-5"
                  style={{ color: COLOR_BRAND_GREEN }}
                />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {item.detail}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  11. FAQ                                                             */
/* ------------------------------------------------------------------ */
const FAQS = [
  {
    q: "What is EPR and who does it apply to?",
    a: "Extended Producer Responsibility (EPR) makes producers, importers, and brand owners (PIBOs) responsible for the entire lifecycle of the packaging they put on the market — from collection through recycling or reuse. It applies to any business placing plastic packaging into the Indian market, regardless of size.",
  },
  {
    q: "What happens if we don't comply?",
    a: "Non-compliance can trigger environmental compensation of roughly ₹2,900–7,900 per tonne depending on the packaging category, additional fines up to ₹1,00,000 under the Environment (Protection) Act, and public listing as non-compliant on the CPCB portal — which is exactly the kind of information sustainability-conscious buyers are checking.",
  },
  {
    q: "How does compliance actually generate leads?",
    a: "Buyers are already screening suppliers on sustainability before they ever pick up the phone. Making your EPR status, recycled content, and impact data easy to find turns a defensive compliance requirement into proactive proof points for your sales and marketing teams.",
  },
  {
    q: "What's changing next?",
    a: "From April 1, 2026, EPR obligations expand beyond plastics to cover paper, glass, metal, and sanitary products, plus non-ferrous metal scrap and construction & demolition waste. Recycle/reuse targets also step up to 70% by 2026–27 and 100% by 2028–29.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-display text-base font-medium text-foreground sm:text-lg">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          open
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-sm leading-relaxed text-foreground/70">
          {a}
        </p>
      </div>
    </div>
  );
}

function FAQSection() {
  return (
    <section className="mt-16">
      <Reveal>
        <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          <HelpCircle
            className="h-4 w-4"
            style={{ color: COLOR_BRAND_GREEN }}
          />
          Common questions
        </div>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Frequently asked questions
        </h2>
      </Reveal>
      <Reveal
        delay={100}
        className="mt-6 rounded-2xl border border-border bg-card px-6"
      >
        {FAQS.map((f) => (
          <FAQItem key={f.q} {...f} />
        ))}
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  12. Closing CTA                                                     */
/* ------------------------------------------------------------------ */
function ClosingCTA() {
  return (
    <section className="mt-16 mb-4">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-12 text-center sm:px-14 sm:py-16"
          style={{ backgroundColor: COLOR_PRIMARY }}
        >
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full opacity-30"
            style={{ backgroundColor: COLOR_BRAND_GREEN }}
          />
          <h2 className="relative font-display text-2xl font-semibold text-primary-foreground sm:text-3xl">
            Ready to turn compliance into your next competitive advantage?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Tell us where your business stands on EPR today, and we&apos;ll help
            you map it against the 2025–2029 roadmap — and the buyers already
            asking about it.
          </p>
          <a
            href="#contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Talk to our team <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sources footnote                                                    */
/* ------------------------------------------------------------------ */
function SourcesFootnote() {
  return (
    <section className="mt-14 border-t border-border pt-8">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Sources
      </h3>
      <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
        <li>
          Bain &amp; Company, "The Visionary CEO's Guide to Sustainability,"
          2025.
        </li>
        <li>
          Bain &amp; Company, "How Sustainability Is Creating B2B Growth," 2025.
        </li>
        <li>
          Supply Chain 24/7, "Missing Sustainability Info? It's a Deal-Breaker
          for 27% of B2B Buyers," 2025.
        </li>
        <li>
          ESG Today, "Half of Corporate Buyers Plan to Drop Unsustainable
          Suppliers," 2025.
        </li>
        <li>
          India Plastic Waste Management (Amendment) Rules, 2025 &amp; 2026,
          Central Pollution Control Board (CPCB).
        </li>
        <li>
          Packaging Dive / Avi Group, "EPR Plastic India 2026: New Rules,
          Penalties &amp; Compliance Guide," 2026.
        </li>
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Root export                                                         */
/* ------------------------------------------------------------------ */
export default function SustainableGrowthBlogPost() {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 lg:pt-32">
      <div className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_360px] xl:gap-16">
          {/* Main article column */}
          <article className="min-w-0">
            <Seo
              title="How Sustainable Business Practices Generate More Leads and Strengthen Brand Value"
              description="Discover how sustainable business practices attract qualified leads, build customer trust, strengthen brand value, and drive long-term business growth through responsible environmental initiatives."
              keywords={[
                "Sustainable Business Practices",
                "Business Growth",
                "Lead Generation",
                "Brand Value",
                "ESG Strategy",
                "Corporate Sustainability",
                "Green Business",
                "Sustainable Growth",
                "Environmental Responsibility",
                "Business Sustainability",
                "Brand Trust",
                "Customer Acquisition",
                "Business Reputation",
                "Sustainability Marketing",
                "Competitive Advantage",
                "How do sustainable business practices generate leads?",
                "Why is sustainability important for business growth?",
                "How to build brand value through sustainability?",
                "How to attract customers with sustainable practices?",
                "How does ESG improve business performance?",
                "How to increase customer trust through sustainability?",
                "Benefits of sustainable business practices",
                "How to grow a business with sustainability?",
                "How sustainability creates a competitive advantage?",
                "Best sustainability strategies for business growth",
              ]}
              url="https://eprnexuss.com/blog/business-growth-trading"
              type="article"
            />
            <BlogHero />
            <TrustStatBand />
            <IntroSection />
            <WhyBuyersCareChart />
            <EPRComplianceOverview />
            <RecycledContentChart />
            <RegulatoryTimeline />
            <TargetTrajectoryChart />
            <BrandValueSection />
            <LeadGenChecklist />

            {/* Mobile-only contact form, inline in the reading flow */}
            <div id="contact" className="mt-16 lg:hidden">
              <StickyContactForm />
            </div>

            <FAQSection />
            <ClosingCTA />
            <SourcesFootnote />
          </article>

          {/* Sticky sidebar contact form — desktop only */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <StickyContactForm />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
