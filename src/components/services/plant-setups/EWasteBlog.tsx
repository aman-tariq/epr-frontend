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
const secTitle = "font-display text-xl sm:text-[21px] font-bold mt-[34px] mb-2.5 leading-[1.3]";
const bodyText = "text-sm leading-[1.85] mb-3.5";
const th = "bg-[#1B5E20] text-[#E8F5E9] px-3.5 py-2.5 text-left font-semibold text-[13px]";
const td = "px-3.5 py-2.5 border-b border-[#e5e7eb] align-top text-xs";

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
      <div className="mb-[3px] text-[13px] font-bold">{title}</div>
      <div className="mb-3.5 text-[11px] text-[#666]">{sub}</div>
      {children}
    </div>
  );
}

type BarItem = { label: string; top: string; value: number; bg: string };

function BarChart({ items, max }: { items: BarItem[]; max: number }) {
  return (
    <div className="flex h-[220px] min-w-[520px] items-end gap-2 pb-2.5">
      {items.map((d) => {
        // Height stays inline on purpose (dynamic value)
        const h = Math.round((d.value / max) * 148);
        return (
          <div key={d.label} className="flex min-w-[60px] flex-none flex-col items-center gap-[5px] sm:min-w-[70px]">
            <div className="text-[10px] font-bold text-[#111]">{d.top}</div>
            <div
              className={`w-full min-w-[28px] cursor-pointer rounded-t-md transition-opacity duration-200 hover:opacity-80 ${d.bg}`}
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
    <>
      <div className="mb-[7px] text-[11px] font-bold uppercase tracking-[0.06em] text-[#2E7D32]">
        {title}
      </div>
      <ul className="mb-4 flex flex-col gap-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2 text-[13px] leading-[1.55]">
            <span className="shrink-0 font-bold text-[#4CAF50]">{mark}</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const ewData = [
  { y: "2019", v: 1.8, a: true },
  { y: "2020", v: 2.0, a: true },
  { y: "2021", v: 2.3, a: true },
  { y: "2022", v: 2.6, a: true },
  { y: "2023", v: 2.9, a: true },
  { y: "2024", v: 3.2, a: true },
  { y: "2025", v: 3.6, a: false },
  { y: "2026", v: 4.1, a: false },
  { y: "2027", v: 4.7, a: false },
  { y: "2028", v: 5.2, a: false },
  { y: "2030", v: 6.5, a: false },
];
const ewItems: BarItem[] = ewData.map((d) => ({
  label: d.y,
  top: `${d.v}M`,
  value: d.v,
  bg: d.a ? "bg-[#2E7D32]" : "bg-[#81C784]",
}));
const ewMax = Math.max(...ewData.map((d) => d.v));

const invData = [
  { label: "Machinery", val: 5.2, bg: "bg-[#1B5E20]" },
  { label: "Civil Works", val: 2.8, bg: "bg-[#2E7D32]" },
  { label: "ETP & Safety", val: 2.1, bg: "bg-[#4CAF50]" },
  { label: "Working Cap", val: 1.5, bg: "bg-[#66BB6A]" },
  { label: "Licensing", val: 0.8, bg: "bg-[#81C784]" },
];
const invItems: BarItem[] = invData.map((d) => ({
  label: d.label,
  top: `₹${d.val}Cr`,
  value: d.val,
  bg: d.bg,
}));
const invMax = Math.max(...invData.map((d) => d.val));

// Donut: segments are computed from the percentages so they always match the legend
const composition = [
  { label: "IT Equipment", note: "(computers, laptops, servers)", pct: 40, color: "#1B5E20", dot: "bg-[#1B5E20]" },
  { label: "Telecom Equipment", note: "(phones, routers)", pct: 20, color: "#2E7D32", dot: "bg-[#2E7D32]" },
  { label: "Consumer Electronics", note: "(TV, audio)", pct: 15, color: "#4CAF50", dot: "bg-[#4CAF50]" },
  { label: "Electrical Equipment", note: "(UPS, panels)", pct: 11, color: "#81C784", dot: "bg-[#81C784]" },
  { label: "Others", note: "(appliances, medical)", pct: 14, color: "#C8E6C9", dot: "bg-[#C8E6C9]" },
];
const DONUT_R = 54;
const DONUT_C = 2 * Math.PI * DONUT_R;
const donutSegments = composition.reduce<{ dash: number; offset: number; color: string }[]>((acc, s) => {
  const prev = acc.length ? acc[acc.length - 1] : null;
  acc.push({
    dash: (s.pct / 100) * DONUT_C,
    offset: prev ? prev.offset + prev.dash : 0,
    color: s.color,
  });
  return acc;
}, []);



const heroStats = [
  { n: "3.2MT", l: "India's annual e-waste generation" },
  { n: "78%", l: "Informally handled — zero compliance" },
  { n: "₹18K Cr", l: "India e-waste market size by 2027" },
  { n: "₹8L+", l: "Precious metals per tonne of PCBs" },
];

const problems = [
  {
    icon: "☠️",
    title: "Toxic Informal Processing",
    text: "Over 1.5 million workers — including children — handle e-waste informally. Open-air acid baths, burning cables, and mercury extraction cause permanent health damage with zero safety measures.",
    tinted: false,
  },
  {
    icon: "📉",
    title: "₹1 Lakh Crore Lost Annually",
    text: "Gold, silver, palladium, copper — recoverable at 95%+ purity through certified processes — are lost to inefficient informal extraction that recovers barely 30% of available value.",
    tinted: true,
  },
  {
    icon: "⚖️",
    title: "E-Waste Management Rules 2022",
    text: "India's updated EWMR 2022 makes EPR mandatory for ALL producers and importers of electronics. Non-compliance triggers CPCB penalties, import bans, and licence revocations.",
    tinted: true,
  },
  {
    icon: "📈",
    title: "The Infrastructure Gap",
    text: "India has only ~312 registered e-waste recyclers for 3.2 MT of annual waste. At current growth rates, India will need 3× this capacity by 2028. That gap is your business opportunity.",
    tinted: false,
  },
];

const landCards = [
  {
    icon: "🏠",
    label: "SMALL SCALE",
    val: "0.5–1 Acre",
    desc: "Manual dismantling + basic segregation. Up to 500 TPY. Suitable for Tier-2 city collection hubs.",
    featured: false,
  },
  {
    icon: "⚙️",
    label: "MID SCALE ★ IDEAL",
    val: "2–5 Acres",
    desc: "Full processing: shredding, PCB refining, metal recovery. 500–5,000 TPY. Best ROI band. Requires MIDC / industrial zone.",
    featured: true,
  },
  {
    icon: "🏗️",
    label: "LARGE SCALE",
    val: "8–15 Acres",
    desc: "Integrated precious metal refinery + hydrometallurgy. 5,000+ TPY. SEZ or large industrial park required.",
    featured: false,
  },
];

const landTable = [
  ["Zoning", "Industrial / MIDC / SEZ only", "EWMR 2022 — residential zones prohibited"],
  ["Distance from water bodies", "Minimum 500 metres", "CPCB hazardous waste proximity norms"],
  ["Distance from residential areas", "Minimum 500 metres", "Acid fume & emission safety buffer"],
  ["ETP space", "20% of total plot area", "Mandatory for acid/chemical wastewater treatment"],
  ["Storage area — hazardous", "Separate impermeable bunded yard", "HWM Rules 2016 Schedule II compliance"],
  ["Ventilation & emissions", "CPCB-approved stack height, scrubbers", "Air (Prevention & Control of Pollution) Act"],
  ["Road access", "Min 9m wide approach road", "Heavy vehicle logistics — container trucks"],
  ["Power requirement", "3-phase, minimum 200 KVA", "Shredders, furnaces, refining equipment"],
  ["Preferred locations", "Delhi NCR, Mumbai, Bengaluru, Chennai, Hyderabad, Pune", "Highest e-waste generation density nationally"],
  ["Water supply", "Min 10 KLD clean water supply", "Wet chemical processing and ETP operations"],
];

const licences = [
  {
    name: "GST + Pollution Cess Exemptions",
    auth: "GST Council / MoEFCC Green Industry Scheme",
    desc: "Certified e-waste recyclers may qualify for reduced GST on recovered materials, exemption from pollution cess, and green industry subsidies under state industrial promotion policies.",
    time: "10–20 days",
  },
  {
    name: "Consent to Establish (CTE)",
    auth: "State Pollution Control Board (SPCB)",
    desc: "Required before any construction begins. Evaluates the plant layout, ETP design, air emission controls, and hazardous waste storage systems.",
    time: "60–120 days",
  },
  {
    name: "Consent to Operate (CTO)",
    auth: "State Pollution Control Board (SPCB)",
    desc: "Issued after construction is complete, ETP is functional, and equipment is installed and verified. The SPCB inspector must physically sign off.",
    time: "30–60 days post-construction",
  },
  {
    name: "Hazardous Waste Authorisation",
    auth: "State Pollution Control Board (SPCB)",
    desc: "E-waste processing generates hazardous by-products — leaded glass, mercury-containing lamps, brominated flame retardants, CRT dust.",
    time: "30–60 days",
  },
  {
    name: "EPR Registration — CPCB Portal",
    auth: "Central Pollution Control Board (CPCB)",
    desc: "Mandatory under E-Waste Management Rules 2022 for all recyclers. This is the foundational registration that enables you to generate and trade EPR credits.",
    time: "15–25 days",
  },
  {
    name: "Factory Licence",
    auth: "State Labour Department / Factory Inspector",
    desc: "Under the Factories Act 1948. Required for any processing facility with 10+ workers and powered machinery.",
    time: "30–45 days",
  },
  {
    name: "Authorisation as E-Waste Recycler",
    auth: "State Pollution Control Board (SPCB)",
    desc: "Under EWMR 2022, every recycler must obtain SPCB authorisation specifying the categories of e-waste they are permitted to handle.",
    time: "45–90 days",
  },
  {
    name: "Fire & Explosive Safety NOC",
    auth: "State Fire Department + PESO (if solvents used)",
    desc: "E-waste shredding generates combustible dust, CRT displays contain explosive vacuum chambers. Fire suppression systems verified before NOC issuance.",
    time: "20–40 days",
  },
];

const csMeta = [
  { v: "3,200 TPY", l: "Processing Capacity" },
  { v: "₹12.4 Cr", l: "Total Capex Invested" },
  { v: "19 Months", l: "Concept to First Batch" },
];

const csBackground = [
  "Promoter: IT asset disposal company seeking vertical integration into formal recycling",
  "Challenge: No prior recycling plant experience, zero regulatory relationships",
  "Engaged EPR Nexuss at Month 1 for end-to-end plant design, all licences",
  "Target: Achieve profitability by end of Year 1 of operations",
];

const csDelivered = [
  "SPCB CTE & CTO secured in 108 days (industry average: 180+ days)",
  "CPCB EPR registration as certified recycler — 21 days",
  "Technology partner: German shredder line + domestic PCB hydrometallurgy",
  "Collection MoUs signed with 7 IT OEMs, 3 telecom companies, and 12 corporate IT asset managers",
  "CPCB-integrated ERP + weighbridge tracking system deployed in Week 1",
  "Zero-Liquid Discharge (ZLD) ETP designed and installed — zero deficiencies",
  "Full staff training program (38 workers + 4 specialists) with HSE compliance support",
];

const csOutcomes: React.ReactNode[] = [
  "Plant hit 82% capacity utilisation by Month 10 — ahead of 18-month target",
  <>
    Full ROI payback projected at <strong>2.8 years</strong> from first commercial batch
  </>,
  "Signed exclusive 3-year collection agreement with a Bengaluru-based laptop OEM",
  "Expanded PCB precious metal refinery — Phase II adding ₹3 Cr annual revenue",
  "ISO 14001 + OHSAS 18001 certified — unlocking ESG-linked financing",
  "Won 2 state government contracts for public sector IT asset disposal — ₹85 lakhs",
];

const ctaTrust = [
  "Free consultation",
  "End-to-end licensing",
  "Technology partners",
  "EPR certificate guaranteed",
  "Pan-India coverage",
  "7-day fast-track option",
];

const seoKeywords = [
  "E-Waste Recycling Plant",
  "E-Waste Recycling",
  "E-Waste Plant Setup",
  "Electronic Waste Recycling",
  "E-Waste Business",
  "E-Waste Recycling Business",
  "E-Waste Management",
  "EPR Compliance",
  "CPCB Registration",
  "E-Waste Recycling Machinery",
  "Detailed Project Report",
  "Plant Approvals",
  "E-Waste Consulting",
  "Circular Economy",
  "Recycling Plant Services",
  "How to start an e-waste recycling plant?",
  "Cost of setting up an e-waste recycling plant in India",
  "How to get CPCB approval for an e-waste recycling plant?",
  "Documents required for an e-waste recycling plant",
  "Best e-waste recycling consultants in India",
  "E-waste recycling plant setup guide",
  "How to build an e-waste recycling facility?",
  "E-waste recycling business opportunities",
  "EPR compliance for e-waste recyclers",
  "E-waste recycling solutions India",
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

const EWasteBlog: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-3 pb-10 pt-[76px] sm:px-4 sm:pt-20 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-8 lg:pt-[100px]">
      <Seo
        title="E-Waste Recycling Plant Setup Services | Build a Profitable Recycling Facility"
        description="Set up a compliant e-waste recycling plant in India with expert guidance. From DPRs and approvals to machinery selection, compliance, and operations, build a sustainable recycling facility that drives growth and environmental impact."
        keywords={seoKeywords}
        url="https://eprnexuss.com/services/recycling-ewaste"
        type="article"
      />

      {/* IMPORTANT: no overflow-hidden/auto on any ancestor of the sticky sidebar */}
      <div className="mt-6 w-full min-w-0 sm:mt-10">
        {/* TAGS */}
        

        {/* HERO */}
        <Reveal delay={0.1}>
          <div className={`relative mb-8 overflow-hidden rounded-[22px] px-5 pb-[38px] pt-7 sm:px-8 sm:pt-11 ${navyGradient}`}>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(0deg,transparent,transparent_30px,rgba(76,175,80,0.5)_30px,rgba(76,175,80,0.5)_31px)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-[60px] -top-[60px] h-[260px] w-[260px] bg-[radial-gradient(circle,rgba(76,175,80,0.2)_0%,transparent_70%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-10 h-[220px] w-[220px] bg-[radial-gradient(circle,rgba(33,150,243,0.1)_0%,transparent_70%)]"
            />

            <div className="relative">
              <div className="mb-[18px] inline-flex items-center gap-[7px] rounded-full border border-[#4CAF50]/40 bg-[#4CAF50]/15 px-3.5 py-[5px] text-[11px] font-bold tracking-[0.08em] text-[#81C784]">
                <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[#4CAF50]" />
                INDIA'S E-WASTE CRISIS — AND YOUR OPPORTUNITY
              </div>

              <h1 className="mb-4 font-display text-[22px] font-black leading-[1.22] text-white min-[481px]:text-[26px] md:text-[32px]">
                India’s E-Waste Crisis Demands Responsible Action.
                <em className="block not-italic text-secondary">
                  Build a Recycling Facility That Delivers Impact and Growth.
                </em>
              </h1>

              <p className="mb-6 border-l-2 border-[#4CAF50] pl-3.5 text-[13px] leading-[1.78] text-[#A5D6A7] sm:text-sm">
                India generates 3.2 million tonnes of e-waste every year — the third largest in the
                world. Less than 22% is formally recycled. The rest is burned, buried, or picked apart
                by children with bare hands in toxic junkyards. The entrepreneurs who build certified
                E-waste recycling plants in 2026 won't just profit — they will become part of the most
                important industrial story of this decade.
              </p>

              <div className="flex flex-wrap overflow-hidden rounded-xl bg-black/25">
                {heroStats.map((s) => (
                  <div
                    key={s.n}
                    className="min-w-[120px] flex-1 border-r border-white/[0.07] px-4 py-3.5 text-center"
                  >
                    <div className="text-xl font-extrabold text-[#81C784]">{s.n}</div>
                    <div className="mt-[3px] text-[10px] leading-[1.4] text-[#66BB6A]">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* META */}
        <Reveal delay={0.05}>
          <div className="mb-6 flex flex-wrap gap-2 border-b border-[#e5e7eb] pb-3 text-xs text-[#666] sm:gap-3.5">
            <span>
              By <span className="font-bold text-[#2E7D32]">EPR Nexuss Team</span>
            </span>
            <span>April 2026</span>
            <span>12 min read</span>
            <span>♻️ Most Complete E-Waste Guide in India</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className={bodyText}>
            Every phone you upgrade, every laptop you discard, every television you replace — it goes
            somewhere. In India, that "somewhere" is almost always a cluster of informal workers in
            Delhi's Seelampur, Mumbai's Dharavi, or Bengaluru's outskirts, melting circuit boards over
            open fires to extract gold and copper. The toxic fumes cause irreversible lung damage. The
            acids contaminate rivers. The lead poisons soil for decades.
          </p>
          <p className={bodyText}>
            This is not just an environmental crime. It is an economic failure — because those same
            circuit boards contain gold, silver, palladium, and copper worth lakhs of rupees per
            tonne. And right now, <span className="font-bold text-[#2E7D32]">EPR Nexuss</span> is
            helping forward-thinking businesses capture that value legally, profitably, and at scale.
            Here is the complete blueprint.
          </p>
        </Reveal>

        <Reveal>
          <div className="my-[18px] rounded-r-lg border-l-[3px] border-[#4CAF50] bg-[#E8F5E9] px-[17px] py-[13px] text-sm italic leading-[1.65] text-[#1B5E20]">
            "India throws away ₹1,00,000 crore worth of recoverable precious metals every single year
            by allowing e-waste to flow into the informal sector. Every certified E-waste recycling
            plant built today is a direct claim on that treasure — with full government backing."
          </div>
        </Reveal>

        {/* SECTION 1: CRISIS */}
        <Reveal>
          <h2 className={secTitle}>The Crisis Behind The Opportunity</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="my-5 grid grid-cols-1 gap-2.5 md:grid-cols-2">
            {problems.map((p) => (
              <div
                key={p.title}
                className={`rounded-xl border border-[#e5e7eb] p-4 ${p.tinted ? "bg-[#f9fafb]" : ""}`}
              >
                <span className="mb-2 block text-2xl">{p.icon}</span>
                <div className="mb-[5px] text-[13px] font-bold">{p.title}</div>
                <div className="text-xs leading-[1.6]">{p.text}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CHART 1 */}
        <Reveal>
          <ChartBox
            title="📈 India E-Waste Generation (Million Tonnes) — 2019 to 2030"
            sub="Actual data 2019–2024 | Projected 2025–2030 | Source: MoEFCC & ASSOCHAM"
          >
            <BarChart items={ewItems} max={ewMax} />
            <div className="mt-2.5 flex gap-4 text-[11px] text-[#666]">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#2E7D32]" /> Actual
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#81C784]" /> Projected
              </span>
            </div>
          </ChartBox>
        </Reveal>

        {/* DONUT */}
        <Reveal>
          <ChartBox
            title="🗂️ India E-Waste Composition by Category (2025)"
            sub="Source: Central Pollution Control Board Annual Report"
          >
            <div className="my-3.5 flex flex-wrap items-center gap-6">
              <svg width="140" height="140" viewBox="0 0 140 140" role="img" aria-label="E-waste composition donut chart">
                <circle cx="70" cy="70" r={DONUT_R} fill="none" stroke="#E8F5E9" strokeWidth="24" />
                {donutSegments.map((s, i) => (
                  <circle
                    key={i}
                    cx="70"
                    cy="70"
                    r={DONUT_R}
                    fill="none"
                    stroke={s.color}
                    strokeWidth="24"
                    strokeDasharray={`${s.dash} ${DONUT_C - s.dash}`}
                    strokeDashoffset={-s.offset}
                    transform="rotate(-90 70 70)"
                  />
                ))}
                <text x="70" y="65" textAnchor="middle" fontSize="13" fontWeight="800" fill="#111">
                  3.2 MT
                </text>
                <text x="70" y="80" textAnchor="middle" fontSize="10" fill="#666">
                  total / yr
                </text>
              </svg>
              <div className="flex flex-1 flex-col gap-2">
                {composition.map((c) => (
                  <div key={c.label} className="flex items-center gap-2 text-xs">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${c.dot}`} />
                    <span>
                      <strong>{c.label}</strong> {c.note} — {c.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ChartBox>
        </Reveal>

        {/* SECTION 2: LAND */}
        <Reveal>
          <h2 className={secTitle}>Land Requirements — What You Need, Where & Why</h2>
          <p className={bodyText}>
            E-waste recycling involves hazardous chemicals, precious metal recovery, and significant
            logistics. Land selection is not just about cost — it's about zoning compliance,
            regulatory proximity, feedstock access, and long-term operational viability.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="my-5 grid grid-cols-1 gap-2.5 min-[481px]:grid-cols-2 md:grid-cols-3">
            {landCards.map((c) => (
              <div
                key={c.label}
                className={`rounded-xl border p-4 text-center ${
                  c.featured ? "border-[#4CAF50] bg-[#0D1B0E]" : "border-[#e5e7eb]"
                }`}
              >
                <div className="mb-2 text-[26px]">{c.icon}</div>
                <div
                  className={`mb-1.5 text-[10px] font-bold tracking-[0.04em] ${
                    c.featured ? "text-[#A5D6A7]" : "text-[#666]"
                  }`}
                >
                  {c.label}
                </div>
                <div
                  className={`mb-1 text-lg font-extrabold ${c.featured ? "text-[#81C784]" : "text-[#2E7D32]"}`}
                >
                  {c.val}
                </div>
                <div
                  className={`text-[11px] leading-normal ${c.featured ? "text-[#A5D6A7]" : "text-[#666]"}`}
                >
                  {c.desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* REQUIREMENTS TABLE */}
        <Reveal>
          <div className="my-5 w-full overflow-x-auto rounded-lg">
            <table className="w-full min-w-[620px] border-collapse text-[13px]">
              <thead>
                <tr>
                  {["Land Parameter", "Specification", "Regulatory Basis"].map((h) => (
                    <th key={h} className={th}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {landTable.map((r) => (
                  <tr key={r[0]}>
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
          <h2 className={secTitle}>Complete Licence & Approval Roadmap</h2>
          <p className={bodyText}>
            An E-waste recycling plant touches multiple regulatory bodies. Every single approval is
            non-negotiable — missing one means your plant cannot legally process a single kilogram of
            e-waste. Here is every licence, who issues it, and exactly how long it takes.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="my-5">
            {licences.map((l, i) => (
              <div key={l.name} className="mb-1.5 flex gap-3.5">
                <div className="flex min-w-[36px] flex-col items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2E7D32] text-xs font-extrabold text-white">
                    {i + 1}
                  </div>
                  {i < licences.length - 1 && (
                    <div className="mt-[3px] min-h-[28px] w-0.5 flex-1 bg-gradient-to-b from-[#0b1f3a] via-[#1c3d6e] to-[#0b1f3a]" />
                  )}
                </div>
                <div className="pb-5 pt-0.5">
                  <div className="mb-[3px] text-sm font-bold">{l.name}</div>
                  <div className="mb-1 text-xs font-semibold text-[#2E7D32]">{l.auth}</div>
                  <div className="text-xs leading-[1.55] text-[#666]">{l.desc}</div>
                  <span className="mt-[5px] inline-block rounded-[10px] bg-[#E8F5E9] px-[9px] py-0.5 text-[10px] font-bold text-[#1B5E20]">
                    ⏱ {l.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* INVESTMENT CHART */}
        <Reveal>
          <ChartBox
            title="🏗️ Plant Investment Split by Cost Head (₹ Cr) — Mid-Scale Plant"
            sub="Total capex range ₹8–18 Cr depending on location and technology mix"
          >
            <BarChart items={invItems} max={invMax} />
          </ChartBox>
        </Reveal>

        {/* CASE STUDY */}
        <Reveal>
          <h2 className={secTitle}>Real Case Study — SAMS Recycling Pvt. Ltd., Hapur</h2>
          <p className={bodyText}>
            Here is a verified, anonymised case study of a successful mid-scale e-waste recycling
            plant that <span className="font-bold text-[#2E7D32]">EPR Nexuss</span> supported from
            concept to commercial operations — including the full financial performance in its first
            two operating years.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="my-[22px] overflow-hidden rounded-[18px] border-[1.5px] border-[#4CAF50]">
            <div className={`px-6 py-[22px] ${navyGradient}`}>
              <div className="mb-2.5 inline-block rounded-[10px] border border-[#81C784] bg-[#81C784]/20 px-2.5 py-[3px] text-[10px] font-bold tracking-[0.06em] text-[#81C784]">
                📋 VERIFIED CASE STUDY — EPR NEXUSS PARTNER
              </div>
              <div className="font-display text-account font-bold leading-[1.3] text-[#E8F5E9] text-xl">
                SAMS Recycling Pvt. Ltd.
                <br />
                Hapur
              </div>
            </div>

            <div className="px-4 py-5 sm:px-[22px]">
              <div className="mb-[18px] grid grid-cols-1 gap-2.5 min-[481px]:grid-cols-3">
                {csMeta.map((m) => (
                  <div key={m.l} className="rounded-lg bg-[#f9fafb] px-3 py-2.5 text-center">
                    <div className="text-base font-extrabold text-[#2E7D32]">{m.v}</div>
                    <div className="mt-0.5 text-[10px] leading-[1.4] text-[#666]">{m.l}</div>
                  </div>
                ))}
              </div>

              <CsList title="📍 Background & Challenge" mark="▸" items={csBackground} />
              <CsList title="🔑 What EPR Nexuss Delivered" mark="✓" items={csDelivered} />
              <CsList title="🎯 Outcomes & What Happened Next" mark="✓" items={csOutcomes} />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="my-5 flex items-start gap-[9px] rounded-[10px] border border-[#FFC107] bg-[#FFF8E1] px-4 py-[13px] text-[13px] leading-[1.6] text-[#6D4C41]">
            <span className="shrink-0 text-lg">⏳</span>
            <span>
              <strong>SAMS Recycling started exactly where you are right now.</strong> No recycling
              experience. No licences. No collection network. 19 months and ₹12.4 Cr later, they
              generated ₹7.1 Cr net profit in Year 1 alone — with Year 2 nearly doubling it. EPR
              Nexuss delivered every piece of that journey. Your story could start today.
            </span>
          </div>
        </Reveal>

        {/* MAIN CTA */}
        <Reveal>
          <div className={`relative mt-9 overflow-hidden rounded-[20px] px-[18px] py-[34px] text-center sm:px-[30px] sm:py-[42px] ${navyGradient}`}>
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#81C784]">
              ⚡ EPR Nexuss — India's Complete E-Waste Recycling Partner
            </div>
            <div className="mb-3 font-display text-[22px] font-black leading-[1.3] text-white sm:text-[25px]">
              The Blueprint Is In Your Hands.
              <em className="block not-italic text-[#81C784]">Now It's Time To Build.</em>
            </div>
            <div className="mx-auto mb-7 mt-3 max-w-[440px] text-[13px] leading-[1.75] text-[#A5D6A7]">
              Licences. Land. Technology. Collection networks. EPR certificates. Precious metal
              offtake. EPR Nexuss manages every step of your e-waste plant journey — so you can focus
              on building India's most profitable green business. First consultation is completely
              free.
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
                <span key={t} className="flex items-center gap-1 text-[11px] text-[#66BB6A]">
                  <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#4CAF50] text-[8px] text-white">
                    ✓
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Sidebar form: pure CSS sticky, sits below the navbar (top-28 = 112px) */}
      <div className="hidden lg:sticky lg:top-[140px] lg:block lg:self-start">
        <StickyContactForm />
      </div>
    </div>
  );
};

export default EWasteBlog;