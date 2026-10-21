import React from "react";
import { motion, type Variants } from "framer-motion";
import StickyContactForm from "../../StickyContactForm";
import Seo from "@/components/Seo";

/* -------------------------------------------------------------------------- */
/*  Motion                                                                     */
/* -------------------------------------------------------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared class strings (static, no interpolation)                            */
/* -------------------------------------------------------------------------- */

const navyGradient = "bg-gradient-to-br from-[#0b1f3a] via-[#1c3d6e] to-[#0b1f3a]";
const secTitle =
  "font-display text-xl sm:text-[22px] font-bold mt-8 mb-2.5 text-[#111] leading-[1.3]";
const bodyText = "text-sm leading-[1.85] mb-3.5 text-[#111]";
const th = `${navyGradient} text-[#E1F5EE] px-3.5 py-2.5 text-left font-semibold text-[13px]`;
const td = "px-3.5 py-2.5 border-b border-[#e5e7eb] align-top text-[13px]";

/* -------------------------------------------------------------------------- */
/*  Reusable pieces                                                            */
/* -------------------------------------------------------------------------- */

function ChartBox({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 overflow-x-auto rounded-[14px] bg-[#f9fafb] p-4 sm:p-5">
      <div className="mb-4">
        <div className="text-[13px] font-bold text-[#111]">{title}</div>
        <div className="mt-0.5 text-[11px] text-[#666]">{sub}</div>
      </div>
      {children}
    </div>
  );
}

type BarItem = { label: string; top: string; value: number; bg: string };

function BarChart({ items, max }: { items: BarItem[]; max: number }) {
  return (
    <div className="flex h-[190px] min-w-[520px] items-end gap-1.5 pb-0.5 sm:gap-2.5">
      {items.map((d) => {
        // Height stays inline on purpose (dynamic value)
        const h = Math.round((d.value / max) * 140);
        return (
          <div
            key={d.label}
            className="flex min-w-[70px] flex-none flex-col items-center gap-1.5"
          >
            <div className="text-[10px] font-bold text-[#111]">{d.top}</div>
            <div
              className={`w-full min-w-[32px] rounded-t-md transition-opacity duration-200 hover:opacity-80 ${d.bg}`}
              style={{ height: `${h}px` }}
            />
            <div className="text-center text-[10px] leading-[1.3] text-[#666]">{d.label}</div>
          </div>
        );
      })}
    </div>
  );
}

function CsList({ title, mark, items }: { title: string; mark: string; items: React.ReactNode[] }) {
  return (
    <div className="mb-3.5">
      <div className="mb-1.5 text-xs font-bold uppercase tracking-[0.05em] text-[#1D9E75]">
        {title}
      </div>
      <ul className="flex flex-col gap-[5px]">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2 text-[13px] leading-[1.55]">
            <span className="shrink-0 font-bold text-[#1D9E75]">{mark}</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const wasteData = [
  { label: "2022", val: 120, actual: true },
  { label: "2023", val: 185, actual: true },
  { label: "2024", val: 290, actual: true },
  { label: "2025", val: 420, actual: false },
  { label: "2026", val: 580, actual: false },
  { label: "2027", val: 730, actual: false },
  { label: "2028", val: 820, actual: false },
  { label: "2030", val: 900, actual: false },
];
const wasteItems: BarItem[] = wasteData.map((d) => ({
  label: d.label,
  top: `${d.val}K`,
  value: d.val,
  bg: d.actual ? "bg-[#0f766e]" : "bg-[#14b8a6]",
}));
const wasteMax = Math.max(...wasteData.map((d) => d.val));

const metalData = [
  { label: "Cobalt", val: 3.8, bg: "bg-[#0f766e]" },
  { label: "Nickel", val: 2.1, bg: "bg-[#2563eb]" },
  { label: "Lithium", val: 1.4, bg: "bg-[#14b8a6]" },
  { label: "Copper", val: 0.9, bg: "bg-[#34d399]" },
  { label: "Manganese", val: 0.4, bg: "bg-[#6ee7b7]" },
  { label: "Aluminium", val: 0.3, bg: "bg-[#a7f3d0]" },
];
const metalItems: BarItem[] = metalData.map((d) => ({
  label: d.label,
  top: `₹${d.val}L`,
  value: d.val,
  bg: d.bg,
}));
const metalMax = Math.max(...metalData.map((d) => d.val));

// Donut: segments are computed from percentages so they always add up to 100%
const capex = [
  { label: "Machinery & Equipment", pct: 43, color: "#0f766e", dot: "bg-[#0f766e]" },
  { label: "Land & Civil Works", pct: 22, color: "#2563eb", dot: "bg-[#2563eb]" },
  { label: "ETP & Safety Systems", pct: 17, color: "#14b8a6", dot: "bg-[#14b8a6]" },
  { label: "Working Capital", pct: 12, color: "#f59e0b", dot: "bg-[#f59e0b]" },
  { label: "Licensing & Compliance", pct: 6, color: "#dc2626", dot: "bg-[#dc2626]" },
];
const DONUT_R = 50;
const DONUT_C = 2 * Math.PI * DONUT_R;
const donutSegments = capex.reduce<{ dash: number; offset: number; color: string }[]>((acc, s) => {
  const prev = acc.length ? acc[acc.length - 1] : null;
  const offset = prev ? prev.offset + prev.dash : 0;
  acc.push({ dash: (s.pct / 100) * DONUT_C, offset, color: s.color });
  return acc;
}, []);

const landCards = [
  {
    icon: "🏭",
    label: "SMALL SCALE",
    val: "0.5–1 Acre",
    desc: "Up to 500 TPY capacity. Pre-processing & manual dismantling only. Suitable for Tier-2 cities.",
    featured: false,
  },
  {
    icon: "⚙️",
    label: "MID SCALE ★ RECOMMENDED",
    val: "2–5 Acres",
    desc: "500–5,000 TPY. Full shredding + hydro line. Requires MIDC / industrial zone land. Most viable ROI band.",
    featured: true,
  },
  {
    icon: "🏗️",
    label: "LARGE SCALE",
    val: "8–20 Acres",
    desc: "5,000+ TPY. Integrated pyrometallurgy + hydrometallurgy. Requires SEZ or large industrial park.",
    featured: false,
  },
];

const landTable = [
  ["Zoning", "Industrial / MIDC / SEZ", "Residential zones not permitted for hazardous battery processing"],
  ["Distance from water bodies", "Minimum 500m", "CPCB norm to prevent groundwater contamination"],
  ["Distance from residential areas", "Minimum 300m", "Emission and fire safety compliance requirement"],
  ["ETP space allocation", "15–20% of total plot", "Effluent Treatment Plant mandatory for acid/leach wastewater"],
  ["Fire safety clearance zone", "30m buffer", "Li-ion thermal runaway risk management"],
  ["Road access", "Min. 9m wide approach road", "Heavy truck movement for battery collection logistics"],
  ["Power supply", "3-phase, min. 100 KVA", "Shredding, furnaces, and processing equipment load"],
  ["Preferred states", "Maharashtra, Gujarat, Karnataka, Tamil Nadu", "High EV adoption = consistent feedstock supply"],
];

const licences = [
  {
    name: "GST Registration + Pollution Cess Exemption",
    auth: "GST Council / MoEFCC",
    desc: "Battery recyclers may qualify for reduced GST on recovered materials and pollution cess exemptions under green industry incentive schemes. EPR Nexuss helps navigate these benefits.",
    time: "10–20 days",
  },
  {
    name: "Consent to Establish (CTE)",
    auth: "State Pollution Control Board (SPCB)",
    desc: "Required before plant construction begins. Evaluates proposed location, processes, ETP design, and emission impact. No civil work can legally begin without this document in hand.",
    time: "60–120 days",
  },
  {
    name: "Consent to Operate (CTO)",
    auth: "State Pollution Control Board (SPCB)",
    desc: "Issued after construction and ETP installation are complete and verified. Without CTO, the plant cannot process a single battery commercially. This is the final green light.",
    time: "30–60 days post-construction",
  },
  {
    name: "Hazardous Waste Authorisation",
    auth: "State Pollution Control Board (SPCB)",
    desc: "Li-ion batteries are classified as Schedule II hazardous waste under HWM Rules 2016. This authorisation permits collection, storage, treatment, and disposal. Must be renewed every 5 years.",
    time: "45–90 days",
  },
  {
    name: "EPR Registration on CPCB Portal",
    auth: "Central Pollution Control Board (CPCB)",
    desc: "Mandatory under Battery Waste Management Rules 2022. Required before any battery collection or recycling activity can begin legally. Applies to producers, importers, and recyclers alike.",
    time: "15–30 days",
  },
  {
    name: "Factory Licence",
    auth: "State Labour Department / Factory Inspector",
    desc: "Under the Factories Act 1948. Required for any manufacturing/processing facility employing 10+ workers with power. Covers worker safety, working hours, and health standards.",
    time: "30–45 days",
  },
  {
    name: "Fire NOC",
    auth: "State Fire Department",
    desc: "Mandatory due to thermal runaway risk in battery storage and processing. Requires fire suppression systems, evacuation plans, and inert gas discharge systems in shredding areas.",
    time: "20–45 days",
  },
];

const csMeta = [
  { v: "2,400 TPY", l: "Processing Capacity" },
  { v: "₹8.5 Cr", l: "Total Capex Invested" },
  { v: "14 Months", l: "Concept to First Batch" },
];

const csBackground = [
  "Promoter: Former automotive components manufacturer seeking green diversification",
  "Challenge: No prior experience in battery recycling, hazardous waste licensing, or metal recovery processes",
  "Engaged EPR Nexuss in Month 1 for end-to-end plant setup, licensing, and EPR compliance architecture",
];

const csDelivered = [
  "Complete SPCB CTE & CTO filing and follow-up — approved in 94 days (industry avg: 150 days)",
  "CPCB EPR registration secured in 18 days",
  "Technology partner selection: nitrogen shredding line + hydrometallurgical pilot system",
  "Pan-India battery collection MoUs with 3 EV OEMs and 11 electronics brands",
  "Staff training program for 22 plant workers and 3 specialists",
  "ERP + CPCB portal integration for real-time batch tracking",
];

const csOutcomes: React.ReactNode[] = [
  "Plant achieved 78% capacity utilisation by Month 8 of operations",
  <>
    Projected full ROI payback: <strong>3.8 years</strong> from first commercial batch
  </>,
  "Expansion Phase II (additional 1,500 TPY) approved and under construction",
  "Signed supply agreement with a Tier-1 Indian EV manufacturer for guaranteed feedstock 2026–2028",
  "ISO 14001 Environmental Management certification obtained in Month 18",
];

const heroPills = ["📋 Licences Required", "🏗️ Land Specs", "📊 Live Data Charts", "🔬 Real Case Study"];

const ctaTrust = [
  "Free consultation",
  "End-to-end licensing",
  "Technology partners",
  "EPR certificate guaranteed",
  "Pan-India coverage",
];

const seoKeywords = [
  "Lithium-Ion Battery Recycling",
  "Battery Recycling Plant",
  "Lithium Battery Recycling Plant",
  "Battery Recycling Business",
  "Battery Recycling Guide 2026",
  "Battery Recycling Plant Setup",
  "Battery Waste Management",
  "Battery EPR Compliance",
  "CPCB Battery Registration",
  "Battery Recycling Machinery",
  "Detailed Project Report",
  "Battery Recycling Investment",
  "Battery Recycling Business India",
  "EV Battery Recycling",
  "Circular Economy",
  "How to start a lithium-ion battery recycling plant?",
  "Battery recycling plant setup cost in India",
  "How to get CPCB approval for a battery recycling plant?",
  "Documents required for battery recycling plant",
  "Battery recycling business opportunities in India",
  "Lithium battery recycling machinery",
  "Battery recycling plant investment guide",
  "EV battery recycling business",
  "Best battery recycling consultants in India",
  "Lithium-ion battery recycling plant guide 2026",
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

const LithiumBatteryBlog: React.FC = () => {
  return (
    <>
      <Seo
        title="Lithium-Ion Battery Recycling Plant Setup Guide | India 2026"
        description="Build a profitable lithium-ion battery recycling plant in India with our complete 2026 guide. Learn about licenses, DPRs, machinery, land requirements, investments, CPCB approvals, compliance, and business opportunities."
        keywords={seoKeywords}
        url="https://eprnexuss.com/services/recycling-lithium-ion-battery"
        type="article"
      />

      <div className="mx-auto w-full max-w-[1400px] px-3 pb-10 pt-[76px] sm:px-4 sm:pt-20 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-8 lg:pt-[100px]">
        {/* IMPORTANT: no overflow-hidden/auto on any ancestor of the sticky sidebar */}
        <div className="mt-6 w-full min-w-0 sm:mt-10">
          {/* TAGS */}
          
          {/* HERO */}
          <Reveal>
            <div
              className={`relative mb-8 overflow-hidden rounded-[20px] px-5 pb-8 pt-7 sm:px-8 sm:pb-9 sm:pt-[42px] ${navyGradient}`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 bg-[radial-gradient(circle,rgba(29,158,117,0.25)_0%,transparent_70%)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-5 -right-2.5 select-none font-display text-[60px] font-black leading-none text-[#1D9E75]/5 sm:text-[100px]"
              >
                RECYCLE
              </div>

              <div className="relative">
                <div className="mb-[18px] inline-flex items-center gap-1.5 rounded-full border border-[#1D9E75]/35 bg-[#1D9E75]/15 px-3.5 py-[5px] text-[11px] font-bold tracking-[0.08em] text-[#5DCAA5]">
                  <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[#1D9E75]" />
                  INDIA'S #1 BATTERY RECYCLING GUIDE 2026
                </div>
                <h1 className="mb-3.5 font-display text-[21px] font-black leading-[1.3] text-white min-[481px]:text-2xl md:text-[32px] md:leading-[1.2]">
                  ₹100 Crore Is Sitting In India's Junkyards.
                  <br />
                  <em className="not-italic text-[#5DCAA5]">Here's Exactly How to Claim It.</em>
                </h1>
                <p className="mb-6 border-l-2 border-[#1D9E75] pl-3.5 text-[13px] leading-[1.7] text-gray-400 sm:text-sm sm:leading-[1.75]">
                  The complete blueprint to building a lithium-ion battery recycling plant in India —
                  licences, land, timelines, investment, and a real case study that proves the numbers
                  work. Everything your consultant won't tell you for free.
                </p>
                <div className="flex flex-wrap gap-2">
                  {heroPills.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-[5px] text-[11px] font-semibold text-[#D1FAE5]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* META */}
          <Reveal>
            <div className="mb-6 flex flex-wrap gap-2 border-b border-[#e5e7eb] pb-3 text-xs text-[#666] sm:gap-3.5">
              <span>
                By <span className="font-bold text-[#1D9E75]">EPR Nexuss Team</span>
              </span>
              <span>April 2026</span>
              <span>10 min read</span>
              <span>🔥 Most Detailed Guide in India</span>
            </div>
          </Reveal>

          <Reveal>
            <p className={bodyText}>
              You've read about the opportunity. You've seen the market numbers. Now it's time to get
              serious. This blog is not a motivational piece — it's a technical and financial
              blueprint. By the time you finish reading, you'll know exactly what licences to apply
              for, what land to buy, how long it takes to get operational, and what a real recycling
              plant looks like when it succeeds. Welcome to the most complete guide to lithium-ion
              battery recycling plant setup in India.
            </p>
          </Reveal>

          <Reveal>
            <div className="my-[18px] rounded-r-lg border-l-[3px] border-[#1D9E75] bg-[#E1F5EE] px-[17px] py-[13px] text-sm italic leading-[1.65] text-[#085041]">
              "The difference between companies that talk about recycling and companies that profit
              from it is one thing: a clear, structured plan. This blog is that plan."
            </div>
          </Reveal>

          {/* SECTION 1: MARKET DATA */}
          <Reveal>
            <h2 className={secTitle}>India Battery Recycling Market — The Data That Demands Action</h2>
            <p className={bodyText}>
              Before investing, understand the scale. These are not projections — these are verified
              market figures from industry reports and government data that every serious investor
              must know.
            </p>
          </Reveal>

          <Reveal>
            <ChartBox
              title="📈 India Li-ion Battery Waste Volume (Metric Tonnes)"
              sub="Projected growth 2022–2030 | Source: MoEFCC & Industry Reports"
            >
              <BarChart items={wasteItems} max={wasteMax} />
              <div className="mt-3 flex flex-wrap gap-4 text-[11px] text-[#666]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#0f766e]" /> Actual
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#14b8a6]" /> Projected
                </span>
              </div>
            </ChartBox>
          </Reveal>

          <Reveal>
            <ChartBox
              title="💰 Recoverable Metal Value per Tonne of Black Mass (₹ Lakhs)"
              sub="Based on Q1 2026 international commodity prices"
            >
              <BarChart items={metalItems} max={metalMax} />
            </ChartBox>
          </Reveal>

          <Reveal>
            <ChartBox
              title="🏗️ Typical Plant Investment Split (₹5–15 Cr mid-scale plant)"
              sub="Capex allocation across major cost heads"
            >
              <div className="flex flex-wrap items-center gap-6">
                <svg width="130" height="130" viewBox="0 0 130 130" role="img" aria-label="Capex split donut chart">
                  <circle cx="65" cy="65" r={DONUT_R} fill="none" stroke="#e7f6f4" strokeWidth="22" />
                  {donutSegments.map((s, i) => (
                    <circle
                      key={i}
                      cx="65"
                      cy="65"
                      r={DONUT_R}
                      fill="none"
                      stroke={s.color}
                      strokeWidth="22"
                      strokeDasharray={`${s.dash} ${DONUT_C - s.dash}`}
                      strokeDashoffset={-s.offset}
                      transform="rotate(-90 65 65)"
                    />
                  ))}
                  <text x="65" y="60" textAnchor="middle" fontSize="13" fontWeight="800" fill="#111">
                    ₹10 Cr
                  </text>
                  <text x="65" y="75" textAnchor="middle" fontSize="10" fill="#666">
                    avg capex
                  </text>
                </svg>
                <div className="flex flex-col gap-2">
                  {capex.map((c) => (
                    <div key={c.label} className="flex items-center gap-2 text-xs">
                      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${c.dot}`} />
                      <span>
                        <strong>{c.label}</strong> — {c.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ChartBox>
          </Reveal>

          {/* SECTION 2: LAND */}
          <Reveal>
            <h2 className={secTitle}>Land Requirements — What You Need, Where, and Why</h2>
            <p className={bodyText}>
              Choosing the wrong land is the single most expensive mistake a recycling entrepreneur
              can make. Location, zoning, proximity to waste sources, and ETP space requirements all
              determine whether your plant passes inspections and operates profitably.
            </p>
          </Reveal>

          <Reveal>
            <div className="my-5 grid grid-cols-1 gap-2.5 md:grid-cols-3">
              {landCards.map((c) => (
                <div
                  key={c.label}
                  className={`rounded-xl border p-4 text-center ${
                    c.featured ? `border-[#1D9E75] ${navyGradient}` : "border-[#e5e7eb]"
                  }`}
                >
                  <div className="mb-2 text-[26px]">{c.icon}</div>
                  <div
                    className={`mb-1.5 text-[11px] font-bold tracking-[0.04em] ${
                      c.featured ? "text-[#9FE1CB]" : "text-[#666]"
                    }`}
                  >
                    {c.label}
                  </div>
                  <div
                    className={`mb-1 text-lg font-extrabold ${
                      c.featured ? "text-[#5DCAA5]" : "text-[#1D9E75]"
                    }`}
                  >
                    {c.val}
                  </div>
                  <div
                    className={`text-[11px] leading-normal ${
                      c.featured ? "text-[#6EE7B7]" : "text-[#666]"
                    }`}
                  >
                    {c.desc}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="my-5 w-full overflow-x-auto rounded-lg">
              <table className="w-full min-w-[560px] border-collapse text-[13px]">
                <thead>
                  <tr>
                    {["Land Parameter", "Requirement", "Reason"].map((h) => (
                      <th key={h} className={th}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {landTable.map((r) => (
                    <tr key={r[0]} className="even:bg-black/[0.02]">
                      <td className={`${td} font-bold`}>{r[0]}</td>
                      <td className={td}>{r[1]}</td>
                      <td className={td}>{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* SECTION 3: LICENCES */}
          <Reveal>
            <h2 className={secTitle}>Licences & Approvals — The Complete Checklist</h2>
            <p className={bodyText}>
              A lithium-ion battery recycling plant requires approvals from 4–6 government bodies.
              Missing even one can result in forced shutdown. Here is every licence you need, who
              issues it, and how long it takes.
            </p>
          </Reveal>

          <Reveal>
            <div className="my-5">
              {licences.map((l, i) => (
                <div key={l.name} className="mb-1.5 flex gap-3.5">
                  <div className="flex min-w-[36px] flex-col items-center">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1D9E75] text-xs font-extrabold text-white">
                      {i + 1}
                    </div>
                    {i < licences.length - 1 && (
                      <div className="mt-[3px] min-h-[28px] w-0.5 flex-1 bg-gradient-to-b from-[#0b1f3a] via-[#1c3d6e] to-[#0b1f3a]" />
                    )}
                  </div>
                  <div className="pb-5 pt-0.5">
                    <div className="mb-[3px] text-sm font-bold">{l.name}</div>
                    <div className="mb-[3px] text-xs font-semibold text-[#1D9E75]">{l.auth}</div>
                    <div className="text-xs leading-[1.55] text-[#666]">{l.desc}</div>
                    <span className="mt-[5px] inline-block rounded-[10px] bg-[#E1F5EE] px-[9px] py-0.5 text-[10px] font-bold text-[#0F6E56]">
                      ⏱ {l.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* SECTION 6: CASE STUDY */}
          <Reveal>
            <h2 className={secTitle}>Real Case Study — ADS Recycling, Pvt. Ltd.</h2>
            <p className={bodyText}>
              Theory is important. But nothing convinces like a real story. Here is an anonymised but
              verified case study of a mid-scale Li-ion battery recycling plant that EPR Nexuss
              supported from licensing to first commercial batch.
            </p>
          </Reveal>

          <Reveal>
            <div className="my-5 overflow-hidden rounded-2xl border-[1.5px] border-[#1D9E75]">
              <div className={`${navyGradient} px-[22px] py-5`}>
                <div className="mb-2.5 inline-block rounded-[10px] border border-[#5DCAA5] bg-[#5DCAA5]/20 px-2.5 py-[3px] text-[10px] font-bold tracking-[0.06em] text-[#5DCAA5]">
                  📋 VERIFIED CASE STUDY
                </div>
                <div className="font-display text-lg font-bold leading-[1.3] text-[#67f5b5]">
                  ADS Recycling, Pvt. Ltd.
                  <br />
                  Meerut, Uttar Pradesh
                </div>
              </div>

              <div className="px-4 py-5 sm:px-[22px]">
                <div className="mb-4 grid grid-cols-1 gap-2.5 min-[481px]:grid-cols-3">
                  {csMeta.map((m) => (
                    <div key={m.l} className="rounded-lg bg-[#f9fafb] px-3 py-2.5 text-center">
                      <div className="text-base font-extrabold text-[#1D9E75]">{m.v}</div>
                      <div className="mt-0.5 text-[10px] text-[#666]">{m.l}</div>
                    </div>
                  ))}
                </div>

                <CsList title="📍 Background & Challenge" mark="▸" items={csBackground} />
                <CsList title="🔑 What EPR Nexuss Delivered" mark="✓" items={csDelivered} />
                <CsList title="🎯 Outcomes & Expansion" mark="✓" items={csOutcomes} />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="my-5 flex items-start gap-[9px] rounded-[10px] border border-[#F59E0B] bg-[#FEF3C7] px-4 py-[13px] text-[13px] leading-[1.6] text-[#78350F]">
              <span className="shrink-0 text-lg">⏳</span>
              <span>
                <strong>ADS Recycling started where you are right now.</strong> No prior recycling
                experience. No existing licences. No collection network. 14 months later, they were
                profitable. The only difference between them and the next success story is the
                decision to start. EPR Nexuss provides the same end-to-end support to every partner
                we work with.
              </span>
            </div>
          </Reveal>

          {/* MAIN CTA */}
          <Reveal>
            <div
              className={`relative mt-9 overflow-hidden rounded-[18px] px-[18px] py-[30px] text-center sm:px-7 sm:py-10 ${navyGradient}`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(29,158,117,0.2)_0%,transparent_70%)]"
              />
              <div className="relative">
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#5DCAA5]">
                  ⚡ EPR Nexuss — India's Complete Battery Recycling Partner
                </div>
                <div className="mb-2.5 font-display text-[22px] font-black leading-[1.3] text-white sm:text-2xl">
                  You Now Have The Blueprint.
                  <br />
                  <em className="not-italic text-[#5DCAA5]">Let EPR Nexuss Build It With You.</em>
                </div>
                <div className="mx-auto mb-[26px] max-w-[440px] text-[13px] leading-[1.7] text-gray-400">
                  Licences. Land. Technology. Collection. EPR certificates. We handle every step — so
                  you focus on building the most profitable green business of the decade. First
                  consultation is completely free.
                </div>

                <div className="mb-[22px] flex flex-col flex-wrap justify-center gap-3.5 min-[481px]:flex-row">
                  <button
                    type="button"
                    className="w-full rounded-lg bg-gradient-to-br from-green-600 to-green-500 px-6 py-3 text-[15px] font-semibold text-white shadow-[0_6px_18px_rgba(34,197,94,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:from-green-700 hover:to-green-600 hover:shadow-[0_10px_24px_rgba(34,197,94,0.35)] active:scale-[0.97] min-[481px]:w-auto"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Book Free Consultation ↗
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-lg border border-slate-300 bg-white px-[22px] py-3 text-[15px] font-medium text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 active:scale-[0.97] min-[481px]:w-auto"
                    onClick={() => window.open("tel:+919289659966")}
                  >
                    Call Now
                  </button>
                </div>

                <div className="flex flex-wrap justify-center gap-3.5">
                  {ctaTrust.map((t) => (
                    <span key={t} className="flex items-center gap-1 text-[11px] text-gray-500">
                      <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#1D9E75] text-[8px] text-white">
                        ✓
                      </span>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Sidebar form: pure CSS sticky, sits below the navbar (top-28 = 112px) */}
        <div className="mx-auto mt-8 w-full max-w-[480px] lg:sticky lg:top-28 lg:mx-0 lg:mt-10 lg:max-w-none lg:self-start">
          <StickyContactForm />
        </div>
      </div>
    </>
  );
};

export default LithiumBatteryBlog;