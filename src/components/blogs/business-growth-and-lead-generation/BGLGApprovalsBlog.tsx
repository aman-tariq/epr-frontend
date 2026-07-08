"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  ClipboardList,
  FileText,
  Recycle,
  ShieldCheck,
  AlertTriangle,
  Calendar,
  Cpu,
  Package,
  Fuel,
  Construction,
  BatteryCharging,
  CircleDot,
  ArrowRight,
  BadgeCheck,
  Building2,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/*  Illustrations — custom vector art, no stock photography            */
/* ------------------------------------------------------------------ */

/** Hero illustration: a compliance "checklist" at the centre of the six
 *  regulated waste streams orbiting it — the shape of the whole article. */
function OrbitIllustration() {
  const nodes = [
    { angle: -90, icon: "doc" },
    { angle: -30, icon: "chip" },
    { angle: 30, icon: "battery" },
    { angle: 90, icon: "tyre" },
    { angle: 150, icon: "drop" },
    { angle: 210, icon: "box" },
  ];
  const cx = 260;
  const cy = 200;
  const r = 130;

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "chip":
        return (
          <>
            <rect x="-8" y="-8" width="16" height="16" rx="3" fill="white" />
            <rect
              x="-4"
              y="-4"
              width="8"
              height="8"
              rx="1.5"
              fill="hsl(var(--primary))"
            />
          </>
        );
      case "battery":
        return (
          <>
            <rect x="-9" y="-6" width="16" height="12" rx="2" fill="white" />
            <rect x="7" y="-3" width="3" height="6" rx="1" fill="white" />
            <rect
              x="-6"
              y="-3"
              width="9"
              height="6"
              fill="hsl(var(--primary))"
            />
          </>
        );
      case "tyre":
        return (
          <>
            <circle r="9" fill="white" />
            <circle r="3.5" fill="hsl(var(--primary))" />
          </>
        );
      case "drop":
        return (
          <path d="M0 -9 C 6 0, 8 5, 0 9 C -8 5, -6 0, 0 -9 Z" fill="white" />
        );
      case "box":
        return (
          <>
            <rect x="-9" y="-7" width="18" height="14" rx="2" fill="white" />
            <path
              d="M -9 -2 L 9 -2 M 0 -7 L 0 7"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
            />
          </>
        );
      default:
        return (
          <>
            <rect x="-8" y="-9" width="16" height="18" rx="2" fill="white" />
            <path
              d="M -4 -4 L 4 -4 M -4 0 L 4 0 M -4 4 L 1 4"
              stroke="hsl(var(--primary))"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </>
        );
    }
  };

  return (
    <svg
      viewBox="0 0 520 400"
      className="w-full h-full max-h-96"
      role="img"
      aria-label="Illustration of six regulated waste streams orbiting a central compliance checklist"
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="1.5"
        strokeDasharray="5 6"
      />
      {nodes.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        return (
          <g key={i}>
            <line
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="hsl(var(--border))"
              strokeWidth="1"
              strokeDasharray="2 5"
            />
            <circle cx={x} cy={y} r="20" fill="#5AC361" />
            <g transform={`translate(${x}, ${y})`}>{renderIcon(n.icon)}</g>
          </g>
        );
      })}
      {/* central card */}
      <rect
        x={cx - 62}
        y={cy - 78}
        width="124"
        height="156"
        rx="14"
        fill="hsl(var(--card))"
        stroke="hsl(var(--border))"
      />
      <rect
        x={cx - 62}
        y={cy - 78}
        width="124"
        height="16"
        rx="8"
        fill="hsl(var(--primary))"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${cx - 42}, ${cy - 40 + i * 24})`}>
          <rect
            width="14"
            height="14"
            rx="4"
            fill="none"
            stroke="#5AC361"
            strokeWidth="2"
          />
          {i < 3 && (
            <path
              d="M2 7 L6 11 L12 3"
              stroke="#5AC361"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <rect
            x="22"
            y="4"
            width="62"
            height="6"
            rx="3"
            fill="hsl(var(--muted-foreground))"
            opacity="0.35"
          />
        </g>
      ))}
    </svg>
  );
}

/** "Why it matters" illustration: a shipment cleared through a compliance
 *  gateway — the customs-linkage that makes EPR non-optional. */
function GatewayIllustration() {
  return (
    <svg
      viewBox="0 0 480 340"
      className="w-full h-full max-h-96"
      role="img"
      aria-label="Illustration of a shipment passing a compliance checkpoint"
    >
      <rect
        x="0"
        y="0"
        width="480"
        height="340"
        fill="hsl(var(--muted))"
        opacity="0.35"
      />
      {/* road */}
      <rect
        x="0"
        y="250"
        width="480"
        height="30"
        fill="hsl(var(--border))"
        opacity="0.5"
      />
      {[40, 110, 180, 250, 320, 390].map((x, i) => (
        <rect
          key={i}
          x={x}
          y="263"
          width="30"
          height="4"
          rx="2"
          fill="hsl(var(--background))"
        />
      ))}
      {/* gate posts */}
      <rect
        x="220"
        y="90"
        width="10"
        height="170"
        rx="4"
        fill="hsl(var(--foreground))"
        opacity="0.75"
      />
      <rect
        x="330"
        y="90"
        width="10"
        height="170"
        rx="4"
        fill="hsl(var(--foreground))"
        opacity="0.75"
      />
      <rect
        x="212"
        y="80"
        width="136"
        height="16"
        rx="8"
        fill="hsl(var(--primary))"
      />
      {/* truck / shipment */}
      <g transform="translate(60,175)">
        <rect
          x="0"
          y="0"
          width="120"
          height="60"
          rx="8"
          fill="hsl(var(--card))"
          stroke="hsl(var(--border))"
        />
        <rect
          x="0"
          y="0"
          width="120"
          height="16"
          rx="8"
          fill="hsl(var(--secondary))"
        />
        <rect
          x="130"
          y="18"
          width="46"
          height="42"
          rx="6"
          fill="hsl(var(--card))"
          stroke="hsl(var(--border))"
        />
        <circle
          cx="30"
          cy="66"
          r="10"
          fill="hsl(var(--foreground))"
          opacity="0.8"
        />
        <circle
          cx="95"
          cy="66"
          r="10"
          fill="hsl(var(--foreground))"
          opacity="0.8"
        />
        <circle
          cx="150"
          cy="66"
          r="10"
          fill="hsl(var(--foreground))"
          opacity="0.8"
        />
      </g>
      {/* clearance badge */}
      <g transform="translate(280,60)">
        <circle r="34" fill="#5AC361" />
        <path
          d="M-14 0 L-4 11 L16 -13"
          stroke="white"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/** "Common mistakes" illustration: an audit magnifier finding an error on a
 *  filing — the moment a Registered Environment Auditor's review catches. */
function AuditIllustration() {
  return (
    <svg
      viewBox="0 0 420 340"
      className="w-full h-full max-h-96"
      role="img"
      aria-label="Illustration of a document being reviewed under a magnifying glass, revealing an error"
    >
      <rect
        x="110"
        y="30"
        width="180"
        height="250"
        rx="14"
        fill="hsl(var(--card))"
        stroke="hsl(var(--border))"
      />
      <rect
        x="110"
        y="30"
        width="180"
        height="20"
        rx="10"
        fill="hsl(var(--primary))"
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x="132"
          y={66 + i * 24}
          width={i === 2 ? 90 : 136}
          height="8"
          rx="4"
          fill="hsl(var(--muted-foreground))"
          opacity="0.3"
        />
      ))}
      {/* error mark on line 3 */}
      <g transform="translate(160, 118)">
        <circle r="14" fill="hsl(var(--destructive))" opacity="0.15" />
        <path
          d="M-5 -5 L5 5 M5 -5 L-5 5"
          stroke="hsl(var(--destructive))"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      {/* magnifier */}
      <g transform="translate(255, 150)">
        <circle
          r="55"
          fill="hsl(var(--background))"
          fillOpacity="0.55"
          stroke="#5AC361"
          strokeWidth="8"
        />
        <line
          x1="40"
          y1="40"
          x2="80"
          y2="80"
          stroke="#5AC361"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared animation variants                                          */
/* ------------------------------------------------------------------ */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ------------------------------------------------------------------ */
/*  Data — grounded in the current CPCB / MoEFCC EPR framework         */
/* ------------------------------------------------------------------ */
const wasteStreams = [
  {
    icon: Package,
    title: "Plastic Packaging",
    rule: "Plastic Waste Management Rules, 2016 (amended 2022, 2024, 2026)",
    detail:
      "PIBOs register on the CPCB EPR portal by category (I–V), file annual returns by 30 June, and now meet a minimum recycled-content mandate alongside collection targets.",
  },
  {
    icon: Cpu,
    title: "E-Waste",
    rule: "E-Waste (Management) Rules, 2022",
    detail:
      "Producers of electrical and electronic equipment must recycle a rising share of what they sold in earlier years — 60% for FY24–25, stepping up to 70% for FY25–26 and FY26–27.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Waste",
    rule: "Battery Waste Management Rules, 2022 (amended Feb 2025)",
    detail:
      "Covers portable, automotive, industrial and EV batteries. A 2025 update relaxed on-pack EPR marking rules in favour of QR codes or brochure disclosures.",
  },
  {
    icon: CircleDot,
    title: "Tyre Waste",
    rule: "Hazardous & Other Wastes Rules — Schedule IX",
    detail:
      "Obligation is fixed at 100% of tyres manufactured or imported two years prior (Y-2), with importers required to recycle the full quantity brought in the previous year.",
  },
  {
    icon: Fuel,
    title: "Used Oil",
    rule: "Hazardous Waste Rules, effective April 2024",
    detail:
      "Sellers of base oil and lubricating oil must register as Producers and route used oil to registered re-refiners rather than letting it enter drains or soil.",
  },
  {
    icon: Construction,
    title: "Construction & Demolition",
    rule: "C&D Waste Management Rules, 2025 — effective April 2026",
    detail:
      "Applies to projects of 20,000 sq. m. or more. Recycling starts at 25% and is designed to climb toward full material recovery over a few years.",
  },
];

const timeline = [
  {
    year: "2011",
    label: "EPR concept introduced for e-waste, on a voluntary basis.",
  },
  {
    year: "2016",
    label:
      "Plastic Waste Management Rules and E-Waste Rules make EPR mandatory.",
  },
  {
    year: "2022",
    label:
      "E-Waste and Battery Waste Rules bring online portals, sales-linked targets and tradeable certificates.",
  },
  {
    year: "2024",
    label:
      "Recycled-content mandates begin; a ₹22/kg floor price is set for e-waste certificates.",
  },
  {
    year: "2025",
    label:
      "Environment Audit Rules create Registered Environment Auditors; battery marking rules simplified.",
  },
  {
    year: "2026",
    label:
      "PWM (Amendment) Rules tighten certificate verification; C&D EPR takes effect from April 1.",
  },
];

const checklist = [
  {
    title: "Confirm which EPR streams apply to you",
    body: "Map every product and package you place on the market — plastic packaging, EEE, batteries, tyres, oil, or construction material — against the relevant CPCB schedule before you register anything.",
  },
  {
    title: "Register on the correct CPCB portal",
    body: "Each stream has its own portal (eprplastic.cpcb.gov.in, eprewaste.cpcb.gov.in, and so on). You'll need PAN, GST, and a verified business email. Selecting the wrong plastic category is one of the most common reasons applications get rejected.",
  },
  {
    title: "Assemble your documentation",
    body: "Authorisation letters, product and packaging details, and self-attested identity documents. Keep a CA certificate on hand — auditors ask for it during annual return review.",
  },
  {
    title: "File your EPR Plan and set annual targets",
    body: "Lay out your collection mechanism, your recycling partners, and the volumes you commit to for the year. Targets are calculated on past sales, so get your historical data in order first.",
  },
  {
    title: "Work only with CPCB-registered recyclers",
    body: "Certificates from unregistered or informal recyclers are void and won't count toward your target. CPCB audits in 2024 uncovered a large volume of fraudulent certificates, so verification before every transaction matters more than ever.",
  },
  {
    title: "Source or trade EPR certificates as needed",
    body: "If your own collection falls short, buy certificates from registered processors through the formal marketplace. Plastic certificate pricing is market-driven; e-waste carries a government floor price.",
  },
  {
    title: "File quarterly and annual returns on time",
    body: "Returns are typically due in sequence — Q1 through Q4, then the annual filing — with the annual e-waste return falling due by 30 June. Even a zero-activity period needs a NIL return.",
  },
  {
    title: "Update your EPR marking and labelling",
    body: "Recent amendments allow barcodes, QR codes, or brochure disclosures in place of printed EPR numbers in some cases. Confirm which method you've chosen with CPCB so your packaging stays compliant.",
  },
  {
    title: "Prepare for a Registered Environment Auditor",
    body: "Since the Environment Audit Rules of 2025, invoice-level verification is standard. Keep digital records that reconcile cleanly with your physical documentation before an audit is called.",
  },
  {
    title: "Track shortfalls and carry-forwards",
    body: "A missed target doesn't disappear — it carries forward and compounds. Clear at least a third of any shortfall each year rather than letting environmental compensation stack up.",
  },
];

const targetData = [
  { year: "FY23–24", target: 60 },
  { year: "FY24–25", target: 60 },
  { year: "FY25–26", target: 70 },
  { year: "FY26–27", target: 70 },
  { year: "FY27–28", target: 80 },
];

const penaltyData = [
  { instance: "1st shortfall", amount: 5000 },
  { instance: "2nd consecutive", amount: 10000 },
  { instance: "3rd consecutive", amount: 20000 },
];

const mistakes = [
  {
    title: "Picking the wrong plastic category",
    body: "Category I–V selection is checked closely on the CPCB plastic portal, and a mismatch is the most frequent cause of a rejected application.",
  },
  {
    title: "Buying certificates without checking registration",
    body: "A certificate is only valid if it comes from a CPCB-registered recycler. Confirm registration status before every purchase, not just once a year.",
  },
  {
    title: "Treating annual filing as a once-a-year task",
    body: "Quarterly returns build toward the annual one. Businesses that only look at compliance in June routinely miss the earlier filings entirely.",
  },
  {
    title: "Leaving target calculations until deadline week",
    body: "Targets are based on multi-year sales history. Reconstructing that data under time pressure leads to under-reporting and avoidable shortfalls.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function EPRComplianceBlog() {
  return (
    <div className="w-full bg-background text-foreground pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          <Seo
            title="The Complete EPR Compliance Checklist Every Business Should Follow in 2026"
            description="Stay compliant with the complete 2026 EPR compliance checklist. Learn the essential steps, documentation, legal requirements, and best practices to avoid penalties while supporting sustainable business growth."
            keywords={[
              "EPR Compliance",
              "EPR Compliance Checklist",
              "Extended Producer Responsibility",
              "EPR Registration",
              "EPR Rules 2026",
              "Business Compliance",
              "Plastic Waste Management",
              "E-Waste Management",
              "Battery Waste Management",
              "CPCB EPR",
              "Business Growth",
              "Environmental Compliance",
              "Sustainability Compliance",
              "Regulatory Compliance",
              "Waste Management Rules",
              "How to comply with EPR regulations?",
              "What is the EPR compliance checklist?",
              "How to get EPR registration in India?",
              "Who needs EPR compliance?",
              "How to avoid EPR penalties?",
              "EPR compliance requirements for businesses",
              "Documents required for EPR registration",
              "How to maintain EPR compliance in 2026?",
              "Why is EPR compliance important?",
              "Best practices for EPR compliance",
            ]}
            url="https://eprnexuss.com/blog/business-growth-approvals"
            type="article"
          />
          {/* ============================================================ */}
          {/*  MAIN CONTENT                                                 */}
          {/* ============================================================ */}
          <main className="flex-1 min-w-0 pb-24">
            {/* 1. HERO ------------------------------------------------- */}
            <motion.section
              initial="hidden"
              animate="show"
              variants={stagger}
              className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/40 via-background to-brandGreen/10 p-6 sm:p-10 md:p-14"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-brandGreen/15 px-4 py-1.5 text-xs font-medium text-brandGreen"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Updated for the 2026 CPCB framework
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="font-display mt-6 text-3xl sm:text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight"
              >
                The Complete EPR Compliance{" "}
                <span className="text-primary">Checklist</span> Every Business
                Should Follow in 2026
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground"
              >
                Extended Producer Responsibility now touches six regulated waste
                streams in India, each with its own portal, targets, and audit
                expectations. Here's the roadmap our compliance team actually
                uses with clients — registration, documentation, recycling
                partnerships, and annual reporting, in the order you'll need
                them.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href="#checklist"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Jump to the checklist
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#streams"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-muted"
                >
                  See which streams apply to you
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 overflow-hidden rounded-2xl border border-border bg-muted/20 flex items-center justify-center py-6"
              >
                <OrbitIllustration />
              </motion.div>
            </motion.section>

            {/* 2. QUICK STATS -------------------------------------------- */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { value: "6", label: "Regulated waste streams under EPR" },
                { value: "70%", label: "E-waste recycling target, FY25–26" },
                {
                  value: "100%",
                  label: "Tyre EPR obligation on prior-year volume",
                },
                { value: "30 Jun", label: "Annual e-waste return deadline" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card p-5 text-center"
                >
                  <div className="font-display text-2xl sm:text-3xl font-semibold text-primary">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-muted-foreground">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.section>

            {/* 3. WHY EPR MATTERS ----------------------------------------- */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mt-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <motion.div variants={fadeUp}>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                  Why EPR compliance isn't optional anymore
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  EPR checks are now tied directly to customs clearance and
                  market access — a shipment without a valid registration number
                  can simply get held. Enforcement has also moved from
                  form-driven reporting to real-time, invoice-level verification
                  under Registered Environment Auditors, so gaps that used to
                  slip through are far more visible today.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Beyond the legal exposure, businesses that treat EPR as an
                  operational discipline — not an annual scramble — tend to
                  build steadier recycler relationships, avoid scarcity pricing
                  on certificates late in the year, and keep their ESG
                  disclosures clean for investors and retail partners.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="overflow-hidden rounded-2xl border border-border bg-muted/20 flex items-center justify-center py-4"
              >
                <GatewayIllustration />
              </motion.div>
            </motion.section>

            {/* 4. REGULATORY TIMELINE --------------------------------------- */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-20"
            >
              <motion.h2
                variants={fadeUp}
                className="font-display text-2xl sm:text-3xl font-semibold"
              >
                How we got to today's rules
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-3 text-muted-foreground max-w-2xl"
              >
                Each amendment has moved in the same direction: broader
                coverage, higher targets, and tighter verification.
              </motion.p>

              <div className="mt-10 relative border-l border-border pl-6 sm:pl-8 space-y-8">
                {timeline.map((t) => (
                  <motion.div
                    key={t.year}
                    variants={fadeUp}
                    className="relative"
                  >
                    <span className="absolute -left-[31px] sm:-left-[39px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brandGreen ring-4 ring-background" />
                    <div className="flex items-baseline gap-3">
                      <Calendar className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-display font-semibold">
                        {t.year}
                      </span>
                    </div>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                      {t.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* 5. WASTE STREAMS GRID ----------------------------------------- */}
            <motion.section
              id="streams"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-20 scroll-mt-28"
            >
              <motion.h2
                variants={fadeUp}
                className="font-display text-2xl sm:text-3xl font-semibold"
              >
                The six waste streams EPR currently covers
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-3 text-muted-foreground max-w-2xl"
              >
                Most businesses assume only one applies to them. Check the full
                list — packaging and end-of-life products both count.
              </motion.p>

              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {wasteStreams.map((w) => (
                  <motion.div
                    key={w.title}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <w.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display font-semibold">
                      {w.title}
                    </h3>
                    <p className="mt-1 text-xs text-brandGreen font-medium">
                      {w.rule}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {w.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* 6. THE CHECKLIST -------------------------------------------- */}
            <motion.section
              id="checklist"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-20 scroll-mt-28"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <ClipboardList className="h-6 w-6 text-primary" />
                <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                  The 10-step EPR compliance checklist
                </h2>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="mt-3 text-muted-foreground max-w-2xl"
              >
                Work through these in order the first time you register. In
                later years, steps 6 through 10 repeat annually.
              </motion.p>

              <div className="mt-10 space-y-4">
                {checklist.map((item, i) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="flex gap-4 sm:gap-6 rounded-2xl border border-border bg-card p-5 sm:p-6"
                  >
                    <div className="font-display shrink-0 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* 7. TARGETS CHART ---------------------------------------------- */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mt-20 rounded-3xl border border-border bg-card p-6 sm:p-10"
            >
              <motion.h2
                variants={fadeUp}
                className="font-display text-2xl sm:text-3xl font-semibold"
              >
                E-waste recycling targets are climbing
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-3 text-muted-foreground max-w-2xl"
              >
                Producers must recycle this share of their historical sales each
                financial year, under Schedule III of the E-Waste (Management)
                Rules, 2022.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 h-72 sm:h-80 w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={targetData}
                    margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="4 4"
                      className="stroke-border"
                    />
                    <XAxis
                      dataKey="year"
                      tick={{ fontSize: 12 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis
                      domain={[0, 100]}
                      tick={{ fontSize: 12 }}
                      stroke="hsl(var(--muted-foreground))"
                      unit="%"
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 12,
                        border: "1px solid hsl(var(--border))",
                        background: "hsl(var(--popover))",
                        color: "hsl(var(--popover-foreground))",
                        fontSize: 13,
                      }}
                      formatter={(v: number) => [`${v}%`, "Target"]}
                    />
                    <Bar dataKey="target" radius={[8, 8, 0, 0]}>
                      {targetData.map((_, i) => (
                        <Cell
                          key={i}
                          fill="#5AC361"
                          fillOpacity={0.65 + i * 0.08}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-xs text-muted-foreground"
              >
                Source: E-Waste (Management) Rules, 2022, Schedule III — targets
                rise to 80% from FY27–28.
              </motion.p>
            </motion.section>

            {/* 8. PENALTIES ---------------------------------------------- */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mt-20 grid md:grid-cols-2 gap-8 items-start"
            >
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                    What a missed target actually costs
                  </h2>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  For plastic packaging, environmental compensation escalates
                  with each consecutive year of shortfall, under CPCB guidelines
                  dated 4 April 2024. The shortfall itself doesn't go away — it
                  carries forward for up to three years, and most of the
                  compensation is refunded once the obligation is met.
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  E-waste shortfalls work on a separate scale: a first default
                  draws ₹20,000 for producers, rising to ₹80,000 for repeated
                  defaults, alongside possible cancellation of registration.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="h-64 sm:h-72 rounded-2xl border border-border bg-card p-6"
              >
                <p className="text-sm font-medium mb-4">
                  Plastic packaging shortfall compensation (₹ per tonne)
                </p>
                <ResponsiveContainer width="100%" height="80%">
                  <BarChart
                    data={penaltyData}
                    layout="vertical"
                    margin={{ left: 10 }}
                  >
                    <CartesianGrid
                      strokeDasharray="4 4"
                      className="stroke-border"
                      horizontal={false}
                    />
                    <XAxis
                      type="number"
                      tick={{ fontSize: 11 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis
                      type="category"
                      dataKey="instance"
                      tick={{ fontSize: 11 }}
                      stroke="hsl(var(--muted-foreground))"
                      width={100}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 12,
                        border: "1px solid hsl(var(--border))",
                        background: "hsl(var(--popover))",
                        color: "hsl(var(--popover-foreground))",
                        fontSize: 13,
                      }}
                      formatter={(v: number) => [
                        `₹${v.toLocaleString("en-IN")}`,
                        "Per tonne",
                      ]}
                    />
                    <Bar
                      dataKey="amount"
                      radius={[0, 8, 8, 0]}
                      fill="hsl(var(--primary))"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </motion.section>

            {/* 9. COMMON MISTAKES ------------------------------------------ */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-20"
            >
              <motion.h2
                variants={fadeUp}
                className="font-display text-2xl sm:text-3xl font-semibold"
              >
                Mistakes we see clients make most often
              </motion.h2>

              <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-5">
                  {mistakes.map((m) => (
                    <motion.div
                      key={m.title}
                      variants={fadeUp}
                      className="flex gap-4"
                    >
                      <BadgeCheck className="h-5 w-5 text-brandGreen shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base">
                          {m.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {m.body}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  variants={fadeUp}
                  className="overflow-hidden rounded-2xl border border-border bg-muted/20 flex items-center justify-center py-4"
                >
                  <AuditIllustration />
                </motion.div>
              </div>
            </motion.section>

            {/* 10. FINAL CTA ------------------------------------------------ */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-20 rounded-3xl bg-primary text-primary-foreground p-8 sm:p-12 text-center overflow-hidden relative"
            >
              <Building2 className="h-8 w-8 mx-auto opacity-80" />
              <h2 className="font-display mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">
                Don't wait for a customs hold to think about EPR
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-primary-foreground/85">
                Whether you're registering for the first time or trying to get
                ahead of this year's annual return, we can walk through your
                obligations stream by stream.
              </p>
              <a
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-background text-foreground px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                Talk to our compliance team
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.section>
          </main>

          {/* ============================================================ */}
          {/*  STICKY CONTACT FORM — right rail, scrolls with the page      */}
          {/* ============================================================ */}
          <aside className="hidden lg:block lg:w-80 xl:w-96 shrink-0">
            <div className="sticky top-28">
              <StickyContactForm />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
