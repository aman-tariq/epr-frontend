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

const card =
  "bg-white border border-[#d9e2ef]/85 rounded-[28px] shadow-[0_18px_48px_rgba(15,23,42,0.10)] p-4 sm:p-[22px]";
const chartCard =
  "bg-white border border-[#d9e2ef] rounded-[30px] shadow-[0_18px_48px_rgba(15,23,42,0.10)] p-4 sm:p-[22px] w-full min-w-0";
const cardTitle = "mb-2.5 text-xl sm:text-2xl font-bold leading-[1.12] tracking-[-0.02em]";
const cardSub = "mb-4 text-slate-500";
const th = "bg-slate-900 text-white px-3.5 py-3 text-left text-[13px] font-bold";
const td = "px-3.5 py-3 border-t border-[#d9e2ef] bg-white text-[13px] align-top";

/* -------------------------------------------------------------------------- */
/*  Reusable pieces                                                            */
/* -------------------------------------------------------------------------- */

function ChartHead({ title, sub, note }: { title: string; sub: string; note?: string }) {
  return (
    <div className="mb-3.5 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-[13px] text-slate-500">{sub}</p>
      </div>
      {note && <p className="text-[13px] text-slate-500">{note}</p>}
    </div>
  );
}

function DataTable({ headers, children }: { headers: string[]; children: React.ReactNode }) {
  return (
    <div className="w-full overflow-x-auto rounded-[14px] border border-[#d9e2ef]">
      <table className="w-full min-w-[480px] border-collapse">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className={th}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

type BarItem = { label: string; top: string; value: number; bg: string };

function BarChart({ items, max }: { items: BarItem[]; max: number }) {
  return (
    <div className="w-full overflow-x-auto overflow-y-hidden pb-3">
      <div className="flex min-h-[220px] w-max items-end gap-3 pr-4">
        {items.map((d) => {
          // Height stays inline on purpose (dynamic value)
          const h = Math.round((d.value / max) * 168);
          return (
            <div
              key={d.label}
              className="flex w-[52px] shrink-0 flex-col items-center gap-1.5 text-center min-[681px]:w-[58px]"
            >
              <div className="whitespace-nowrap text-[13px] font-bold text-[#0f766e]">{d.top}</div>
              <div
                className={`w-full rounded-t-lg shadow-[0_4px_12px_rgba(20,184,166,0.25)] transition-all duration-300 ${d.bg}`}
                style={{ height: `${h}px` }}
              />
              <div className="mt-1.5 text-xs font-semibold text-slate-600">{d.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const ACTUAL = "bg-gradient-to-b from-[#14b8a6] to-[#0f766e]";
const PROJECTED = "bg-gradient-to-b from-[#22d3ee] to-[#0e7490]";

const elvData = [
  { y: "2020", v: 32, a: true },
  { y: "2021", v: 36, a: true },
  { y: "2022", v: 40, a: true },
  { y: "2023", v: 44, a: true },
  { y: "2024", v: 48, a: true },
  { y: "2025", v: 56, a: false },
  { y: "2026", v: 65, a: false },
  { y: "2027", v: 76, a: false },
  { y: "2028", v: 88, a: false },
  { y: "2029", v: 102, a: false },
  { y: "2030", v: 118, a: false },
];
const elvItems: BarItem[] = elvData.map((d) => ({
  label: d.y,
  top: `${d.v}L`,
  value: d.v,
  bg: d.a ? ACTUAL : PROJECTED,
}));
const elvMax = Math.max(...elvData.map((d) => d.v));

const matData = [
  { name: "Steel body & chassis", pct: 96, val: "₹28K/T", bg: "bg-[#64748b]" },
  { name: "Aluminium frames", pct: 92, val: "₹1.1L/T", bg: "bg-[#0f8b8d]" },
  { name: "Copper wiring", pct: 85, val: "₹6.8L/T", bg: "bg-[#d97706]" },
  { name: "Catalytic converter", pct: 80, val: "₹3.2L/T", bg: "bg-[#7c3aed]" },
  { name: "Lead battery", pct: 98, val: "₹1.5L/T", bg: "bg-[#475569]" },
  { name: "Used engine oil", pct: 90, val: "₹38/L", bg: "bg-[#92400e]" },
  { name: "Tyres / rubber", pct: 70, val: "₹12K/T", bg: "bg-[#16a34a]" },
  { name: "Glass / windshield", pct: 60, val: "₹8K/T", bg: "bg-[#2563eb]" },
];

const timelineData = [
  { label: "Land finalization", start: 0, dur: 2, bg: "bg-[#0f5fff]" },
  { label: "Company setup", start: 0, dur: 1, bg: "bg-[#0f8b8d]" },
  { label: "CTE filing", start: 1, dur: 4, bg: "bg-[#2563eb]" },
  { label: "Civil works", start: 4, dur: 6, bg: "bg-[#0f8b8d]" },
  { label: "Equipment ordering", start: 4, dur: 5, bg: "bg-[#16a34a]" },
  { label: "Utility install", start: 8, dur: 4, bg: "bg-[#22c55e]" },
  { label: "Safety approvals", start: 8, dur: 3, bg: "bg-[#f59e0b]" },
  { label: "CTO process", start: 11, dur: 3, bg: "bg-[#0f5fff]" },
  { label: "Hiring & training", start: 11, dur: 4, bg: "bg-[#0f8b8d]" },
  { label: "Trial operations", start: 15, dur: 3, bg: "bg-[#16a34a]" },
  { label: "Collection network", start: 6, dur: 10, bg: "bg-[#2563eb]" },
  { label: "First vehicle intake", start: 18, dur: 6, bg: "bg-slate-900" },
];
const TOTAL_MONTHS = 24;

const capexData = [
  { label: "Machinery", val: 2.8, bg: "bg-[#0f5fff]" },
  { label: "Civil works", val: 1.6, bg: "bg-[#0f8b8d]" },
  { label: "ETP & safety", val: 1.2, bg: "bg-[#16a34a]" },
  { label: "Working capital", val: 1.0, bg: "bg-[#22c55e]" },
  { label: "Licensing", val: 0.6, bg: "bg-[#f59e0b]" },
];
const capexItems: BarItem[] = capexData.map((d) => ({
  label: d.label,
  top: `₹${d.val} Cr`,
  value: d.val,
  bg: d.bg,
}));
const capexMax = Math.max(...capexData.map((d) => d.val));


const marketStats = [
  { v: "51L+", l: "End-of-life vehicles available" },
  { v: "₹10K Cr", l: "Illustrative opportunity value" },
  { v: "3–6 Acres", l: "Best mid-scale footprint" },
  { v: "18–22 Mo", l: "Project execution cycle" },
];

const whyTags = ["Metal recovery", "Digital certificates", "Fleet partnerships", "Compliance-focused model"];

const plantStory = [
  { icon: "🚗", title: "Receiving", text: "Vehicles are inspected, recorded, weighed, and tagged before processing begins." },
  { icon: "🧪", title: "Depollution", text: "Fluids, batteries, and other hazardous components are safely removed first." },
  { icon: "🔩", title: "Dismantling", text: "Reusable parts are separated and sent to resale or refurbishment channels." },
  { icon: "📊", title: "Tracking", text: "Vehicle identity, certificate flow, and material movement are documented digitally." },
];

const vehicleSplit = [
  ["Two-wheelers", "42%", "High intake volume with fast movement through the line."],
  ["Passenger cars / SUVs", "24%", "Good resale parts and balanced material recovery."],
  ["Commercial vehicles", "15%", "Heavier recovery, more steel, and larger dismantling work."],
  ["Three-wheelers", "9%", "Urban collection opportunity with steady throughput."],
  ["Tractors / others", "10%", "Regional inflow stream for broader reach."],
];

const siteTable = [
  ["Zoning", "Industrial, auto-cluster, or approved manufacturing land"],
  ["Access", "Wide approach for trucks, tow vehicles, and storage movement"],
  ["Built-up layout", "Receiving bay, depollution area, dismantling line, and storage"],
  ["Power", "3-phase industrial supply with room for equipment load"],
  ["Safety buffer", "Fire lane, spill control, and emergency access area"],
  ["Expansion", "Space reserved for future automation or more storage"],
];

const landCards = [
  { icon: "🏢", label: "Starter unit", val: "1–2 Acres", desc: "Useful for collection, sorting, and smaller recovery work.", featured: false },
  { icon: "⭐", label: "Best fit", val: "3–6 Acres", desc: "Balanced for intake, processing, and future expansion.", featured: true },
  { icon: "🏭", label: "Large plant", val: "10+ Acres", desc: "Higher automation and larger storage capacity.", featured: false },
];

const approvals = [
  { t: "MoRTH RVSF registration", d: "Main authorisation to operate as a recognised scrapping facility.", time: "45–90 days" },
  { t: "Consent to Establish", d: "Needed before civil work and machine installation start.", time: "60–90 days" },
  { t: "Hazardous waste authorisation", d: "For fluids, batteries, residues, and safe handling flow.", time: "30–60 days" },
  { t: "Factory licence and Fire NOC", d: "Supports worker protection and emergency readiness.", time: "20–45 days" },
  { t: "Consent to Operate", d: "Final clearance before the facility receives vehicles commercially.", time: "30–60 days" },
];

const caseKpis = [
  { v: "6,000 / yr", l: "Vehicle capacity" },
  { v: "₹7.2 Cr", l: "Illustrative capex" },
  { v: "21 Mo", l: "Concept to launch" },
];

const caseNeeded = [
  "Industrial land with the correct permissions",
  "A full approval path across departments",
  "A formal intake network for vehicles",
  "Higher margins than informal scrap handling",
];

const caseImplemented = [
  "Structured licensing and registration workflow",
  "Collection tie-ups with dealers and fleet operators",
  "Digital tracking for certificates and inventory",
  "Recovery lines for safe dismantling and sorting",
];

type ProfitRow = { name: string; y1: string; y2: string; tone: "pos" | "neg"; total?: boolean };

const profitRows: ProfitRow[] = [
  { name: "Ferrous scrap sales", y1: "₹290 L", y2: "₹440 L", tone: "pos" },
  { name: "Non-ferrous metal sales", y1: "₹185 L", y2: "₹280 L", tone: "pos" },
  { name: "Usable parts resale", y1: "₹210 L", y2: "₹330 L", tone: "pos" },
  { name: "Fluid recovery income", y1: "₹55 L", y2: "₹85 L", tone: "pos" },
  { name: "Certificate / service fees", y1: "₹120 L", y2: "₹190 L", tone: "pos" },
  { name: "Operating cost", y1: "-₹310 L", y2: "-₹390 L", tone: "neg" },
  { name: "Debt servicing", y1: "-₹85 L", y2: "-₹85 L", tone: "neg" },
  { name: "Net result", y1: "₹555 L", y2: "₹1,010 L", tone: "pos", total: true },
];
const toneCls = { pos: "text-[#16a34a]", neg: "text-[#dc2626]" } as const;

const ctaTrust = [
  "Free consultation",
  "End-to-end licensing",
  "Technology partners",
  "EPR certificate guaranteed",
  "Pan-India coverage",
];

const seoKeywords = [
  "Vehicle Scrapping Plant",
  "ELV Recycling Plant",
  "Vehicle Recycling",
  "End-of-Life Vehicle Recycling",
  "Vehicle Scrapping Business",
  "ELV Plant Setup",
  "Vehicle Dismantling Plant",
  "Automobile Recycling",
  "Vehicle Scrappage Policy",
  "Vehicle Scrapping Machinery",
  "Detailed Project Report",
  "CPCB Compliance",
  "RVSF Setup",
  "Metal Recovery",
  "Circular Economy",
  "How to start a vehicle scrapping business?",
  "Vehicle scrapping plant setup cost in India",
  "How to get approval for a vehicle scrapping plant?",
  "Documents required for an ELV recycling plant",
  "Vehicle recycling business opportunities",
  "Best vehicle scrapping consultants in India",
  "RVSF registration process",
  "Vehicle dismantling machinery guide",
  "ELV recycling plant investment",
  "Vehicle scrapping business guide 2026",
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

const VehicleScrappingBlog: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-[1480px] bg-[#f5f7fb] px-3 pb-10 pt-[76px] text-slate-900 sm:px-[18px] sm:pt-20 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-8 lg:pt-[130px]">
      <Seo
        title="Vehicle Scrapping Plant Setup Services | Build a Profitable ELV Recycling Business"
        description="Start a compliant vehicle scrapping and ELV recycling plant in India. Learn about approvals, machinery, land, DPRs, compliance, operations, and profitable business opportunities in end-of-life vehicle recycling."
        keywords={seoKeywords}
        url="https://eprnexuss.com/services/recycling-vehicles-scrapping"
        type="article"
      />

      {/* IMPORTANT: no overflow-hidden/auto on any ancestor of the sticky sidebar */}
      <div className="mt-6 w-full min-w-0 sm:mt-10 lg:mt-0">
        

        {/* HERO */}
        <Reveal delay={0.2}>
          <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#081726] via-[#0d2b43] to-[#0f766e] p-5 text-white shadow-[0_18px_48px_rgba(15,23,42,0.10)] sm:rounded-[34px] sm:p-[34px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-[140px] -top-[130px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_66%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-[110px] -left-[90px] h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10),transparent_66%)]"
            />

            <div className="relative z-10 mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.16] bg-white/10 px-3 py-[7px] text-xs font-extrabold uppercase tracking-[0.08em] text-[#d8fffb]">
              A business built from recovery, compliance, and smart logistics
            </div>

            <div className="relative z-10 grid items-end gap-[22px] lg:grid-cols-[1.18fr_.82fr]">
              <div>
                <h1 className="mb-3 text-[24px] font-bold leading-[1.06] tracking-[-0.03em] sm:text-[clamp(26px,4vw,48px)]">
                  When a vehicle reaches the end of the road,{" "}
                  <em className="not-italic text-[#fde68a]">the real value begins.</em>
                </h1>
                <p className="max-w-[640px] text-base text-white/90">
                  A scrapping facility can convert old vehicles into a clean, organised revenue stream.
                  The right setup creates income from metal recovery, parts resale, certificate
                  processing, and collection partnerships.
                </p>
              </div>

              <div className="rounded-3xl border border-white/[0.16] bg-white/[0.08] p-[18px] backdrop-blur-[12px]">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.06em]">Market pulse</h3>
                <div className="grid grid-cols-1 gap-2.5 min-[681px]:grid-cols-2">
                  {marketStats.map((s) => (
                    <div
                      key={s.v}
                      className="min-h-[88px] rounded-[18px] border border-white/[0.12] bg-white/[0.08] px-3 py-3.5"
                    >
                      <div className="text-2xl font-black leading-[1.1]">{s.v}</div>
                      <div className="mt-1.5 text-xs text-white/80">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* META */}
        <Reveal delay={0.25}>
          <div className="mx-0.5 mb-[22px] mt-4 flex flex-wrap gap-3.5 text-xs text-slate-500">
            <span>
              Prepared by <strong className="text-[#2563eb]">EPR Nexuss Team</strong>
            </span>
            <span>April 2026</span>
            <span>Vehicle scrapping business blog</span>
          </div>
        </Reveal>

        {/* LAYOUT 1 */}
        <div className="my-[22px] grid grid-cols-1 gap-[22px]">
          <Reveal delay={0.1}>
            <div className={card}>
              <h2 className={cardTitle}>Why the organised route wins</h2>
              <p className={cardSub}>
                A registered scrapping facility performs better because it controls the process, the
                documentation, and the revenue flow.
              </p>
              <p>
                Instead of handling vehicles as loose scrap, a formal plant works with a structured
                intake, depollution stage, dismantling section, recovery line, and traceable
                certificate workflow. That gives the business more credibility, more control, and more
                ways to earn.
              </p>
              <div className="mt-4 rounded-r-[18px] border-l-[5px] border-[#f59e0b] bg-gradient-to-br from-[#f59e0b]/[0.12] to-[#2563eb]/[0.08] px-[18px] py-4 font-extrabold text-[#5f3d00]">
                Punch line: Old vehicles are not a burden when the system knows how to unlock their
                hidden value.
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {whyTags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#d8e7ff] bg-[#eef7ff] px-3 py-2 text-xs font-extrabold text-[#1d4ed8]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className={card}>
              <h2 className={cardTitle}>What happens inside the plant</h2>
              <div className="mt-4 grid grid-cols-1 gap-3 min-[681px]:grid-cols-2">
                {plantStory.map((s) => (
                  <div
                    key={s.title}
                    className="min-h-[150px] rounded-[20px] border border-[#d9e2ef] bg-gradient-to-b from-white to-[#fcfdff] p-4"
                  >
                    <div className="text-2xl">{s.icon}</div>
                    <h3 className="mb-2 mt-2.5 text-base font-bold">{s.title}</h3>
                    <p className="text-[13px] text-slate-500">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* CHARTS */}
        <div className="mt-[18px] grid gap-[18px]">
          <Reveal delay={0.1}>
            <div className={chartCard}>
              <ChartHead
                title="ELV growth forecast"
                sub="Planning curve for a vehicle scrapping project"
                note="Units in lakh vehicles"
              />
              <BarChart items={elvItems} max={elvMax} />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className={chartCard}>
              <ChartHead
                title="Recovery database"
                sub="Quick view of the most valuable input streams"
                note="Recovery score and indicative value"
              />
              <div className="grid w-full gap-2.5">
                {matData.map((d) => (
                  <div
                    key={d.name}
                    className="grid grid-cols-1 items-center gap-1.5 rounded-2xl border border-[#d9e2ef] bg-white px-3.5 py-3 lg:grid-cols-[1.6fr_1fr_.95fr] lg:gap-2.5"
                  >
                    <div className="text-[13px] font-extrabold">{d.name}</div>
                    <div className="h-3 w-full overflow-hidden rounded-full bg-[#edf2f7]">
                      <div className={`h-full rounded-full ${d.bg}`} style={{ width: `${d.pct}%` }} />
                    </div>
                    <div className="text-left text-[13px] text-slate-600 lg:text-right">
                      {d.val} · Recovery {d.pct}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className={chartCard}>
              <ChartHead
                title="Vehicle type split"
                sub="Useful for capacity, layout, and workflow planning"
              />
              <DataTable headers={["Vehicle type", "Estimated share", "Why it matters"]}>
                {vehicleSplit.map((r) => (
                  <tr key={r[0]}>
                    <td className={td}>{r[0]}</td>
                    <td className={td}>
                      <span className="inline-flex rounded-full bg-[#eef7ff] px-2 py-1 text-[11px] font-extrabold text-[#1d4ed8]">
                        {r[1]}
                      </span>
                    </td>
                    <td className={td}>{r[2]}</td>
                  </tr>
                ))}
              </DataTable>
            </div>
          </Reveal>
        </div>

        {/* LAYOUT 2 */}
        <div className="my-[22px] grid grid-cols-1 gap-[22px]">
          <Reveal delay={0.1}>
            <div className={card}>
              <h2 className={cardTitle}>Site selection and land strategy</h2>
              <p className={cardSub}>A smart plot makes the facility safer, cleaner, and easier to grow.</p>
              <DataTable headers={["Requirement", "Preferred specification"]}>
                {siteTable.map((r) => (
                  <tr key={r[0]}>
                    <td className={td}>{r[0]}</td>
                    <td className={td}>{r[1]}</td>
                  </tr>
                ))}
              </DataTable>

              <div className="mt-3.5 grid grid-cols-1 gap-3 lg:grid-cols-3">
                {landCards.map((c) => (
                  <div
                    key={c.label}
                    className={`rounded-[20px] border p-4 text-center ${
                      c.featured
                        ? "border-transparent bg-gradient-to-b from-slate-900 to-[#0f5fff] text-white"
                        : "border-[#d9e2ef] bg-white"
                    }`}
                  >
                    <div className="mb-2 text-[26px]">{c.icon}</div>
                    <div
                      className={`mb-1.5 text-[10px] font-extrabold uppercase tracking-[0.05em] ${
                        c.featured ? "text-white/70" : "text-slate-500"
                      }`}
                    >
                      {c.label}
                    </div>
                    <div className={`mb-1 text-lg font-black ${c.featured ? "text-[#4ade80]" : "text-[#16a34a]"}`}>
                      {c.val}
                    </div>
                    <div className={`text-[11px] leading-normal ${c.featured ? "text-white/80" : "text-slate-500"}`}>
                      {c.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className={card}>
              <h2 className={cardTitle}>Approval path</h2>
              <p className={cardSub}>A clear sequence keeps the launch moving and avoids bottlenecks.</p>
              <div>
                {approvals.map((a, i) => (
                  <div
                    key={a.t}
                    className="mb-3 grid grid-cols-[48px_1fr] gap-3 rounded-[20px] border border-[#d9e2ef] bg-white p-4 sm:grid-cols-[56px_1fr] sm:gap-3.5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#2563eb] to-[#0f766e] text-base font-black text-white sm:h-14 sm:w-14 sm:rounded-[18px] sm:text-lg">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="mb-1 text-base font-bold">{a.t}</h4>
                      <p className="text-[13px] text-slate-500">{a.d}</p>
                      <span className="mt-2.5 inline-block rounded-full bg-[#eef7ff] px-2 py-1 text-[11px] font-black text-[#2563eb]">
                        {a.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* SETUP TIMELINE */}
        <Reveal delay={0.1} className="mt-[18px]">
          <div className={chartCard}>
            <ChartHead title="Setup timeline" sub="A month-wise roadmap for disciplined execution" />
            <div className="w-full overflow-x-auto overflow-y-hidden pb-3">
              <div className="flex min-h-[220px] w-max items-end gap-3 pr-4">
                {timelineData.map((d) => {
                  // Dynamic geometry stays inline on purpose
                  const h = Math.max(26, Math.round((d.dur / 10) * 160));
                  const left = (d.start / TOTAL_MONTHS) * 100;
                  const width = (d.dur / TOTAL_MONTHS) * 100;
                  return (
                    <div
                      key={d.label}
                      className="flex w-[100px] shrink-0 flex-col items-stretch gap-1.5 text-center min-[681px]:w-[120px]"
                    >
                      <div className="whitespace-nowrap text-[13px] font-bold text-[#0f766e]">
                        M{d.start + 1}–{d.start + d.dur}
                      </div>
                      <div className="relative h-[168px] w-full overflow-hidden rounded-2xl border border-[#d9e2ef] bg-[#f4f8fc]">
                        <div
                          className={`absolute bottom-0 rounded-t-[14px] rounded-b-md transition-all duration-300 ${d.bg}`}
                          style={{ left: `${left}%`, width: `${width}%`, height: `${h}px` }}
                        />
                      </div>
                      <div className="mt-1.5 text-xs font-semibold text-slate-600">{d.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* INVESTMENT SPLIT */}
        <Reveal delay={0.2} className="mt-[18px]">
          <div className={chartCard}>
            <ChartHead
              title="Investment split"
              sub="Indicative capex mix for a mid-scale scrapping business"
            />
            <BarChart items={capexItems} max={capexMax} />
          </div>
        </Reveal>

        {/* CASE STUDY */}
        <Reveal delay={0.1} className="mt-[22px]">
          <div className="overflow-hidden rounded-[30px] border border-[#d9e2ef] bg-white shadow-[0_18px_48px_rgba(15,23,42,0.10)]">
            <div className="bg-gradient-to-br from-[#081726] via-[#0d2b43] to-[#0f766e] p-6 text-white">
              <div className="mb-2.5 inline-block rounded-full border border-white/[0.14] bg-white/[0.12] px-2.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.06em]">
                Case study
              </div>
              <h3 className="text-xl font-bold leading-[1.2] sm:text-2xl">
                A mid-scale facility in Pune turned structured recovery into a stable business line
              </h3>
            </div>

            <div className="p-4 sm:p-[22px]">
              <div className="mb-[18px] grid grid-cols-1 gap-3 sm:grid-cols-3">
                {caseKpis.map((k) => (
                  <div key={k.l} className="rounded-[18px] border border-[#d9e2ef] bg-white p-4 text-center">
                    <div className="text-[22px] font-black text-[#2563eb]">{k.v}</div>
                    <div className="mt-1 text-xs text-slate-500">{k.l}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-2">
                {[
                  { title: "What they needed", titleCls: "text-[#2563eb]", items: caseNeeded },
                  { title: "What was implemented", titleCls: "text-[#16a34a]", items: caseImplemented },
                ].map((col) => (
                  <div key={col.title}>
                    <h2 className={`mb-2.5 text-lg font-bold leading-[1.12] tracking-[-0.02em] ${col.titleCls}`}>
                      {col.title}
                    </h2>
                    <ul className="grid list-disc gap-2 pl-5 text-sm">
                      {col.items.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-4 w-full overflow-x-auto rounded-[14px] border border-[#d9e2ef]">
                <table className="w-full min-w-[420px] border-collapse">
                  <thead>
                    <tr>
                      {["Revenue / Cost head", "Year 1", "Year 2"].map((h) => (
                        <th
                          key={h}
                          className="border-b border-[#d9e2ef] bg-slate-50 px-3 py-2.5 text-left text-[13px] font-bold"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {profitRows.map((r) => {
                      const weight = r.total ? "font-black" : "font-extrabold";
                      return (
                        <tr key={r.name} className={r.total ? "bg-[#f0fdf4]" : ""}>
                          <td
                            className={`border-b border-[#d9e2ef] px-3 py-2.5 text-[13px] ${
                              r.total ? "font-black" : ""
                            }`}
                          >
                            {r.name}
                          </td>
                          <td className={`border-b border-[#d9e2ef] px-3 py-2.5 text-[13px] ${weight} ${toneCls[r.tone]}`}>
                            {r.y1}
                          </td>
                          <td className={`border-b border-[#d9e2ef] px-3 py-2.5 text-[13px] ${weight} ${toneCls[r.tone]}`}>
                            {r.y2}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 rounded-2xl border border-[#ffe1a8] bg-[#fff8e8] px-4 py-3.5 text-[13px] leading-[1.6] text-[#73511c]">
                The turning point was the shift from manual scrap handling to a fully documented
                recovery system. That improved buyer confidence, compliance clarity, and long-term
                value capture.
              </div>
            </div>
          </div>
        </Reveal>

        {/* INLINE CTA */}
        <Reveal delay={0.1}>
          <div className="my-[22px] flex flex-wrap items-center justify-between gap-2.5 rounded-[14px] border border-[#d8e7ff] bg-[#eef7ff] px-4 py-3.5">
            <div className="text-[13px] text-slate-900">
              Need a project plan for your own site?{" "}
              <strong className="text-[#1d4ed8]">
                EPR Nexuss can help map the full scrapping plant journey from land to launch.
              </strong>
            </div>
            <button
              type="button"
              className="whitespace-nowrap rounded-[10px] bg-[#2563eb] px-4 py-2.5 text-xs font-extrabold text-white transition-colors hover:bg-[#1d4ed8]"
              onClick={() => (window.location.href = "mailto:contact@eprnexuss.com")}
            >
              Get My Plan
            </button>
          </div>
        </Reveal>

        {/* MAIN CTA */}
        <Reveal delay={0.2}>
          <div className="relative mt-9 overflow-hidden rounded-[18px] bg-gradient-to-br from-[#0b1f3a] via-[#1c3d6e] to-[#0b1f3a] px-[18px] py-[34px] text-center sm:px-7 sm:py-10">
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#5DCAA5]">
              ⚡ EPR Nexuss — India's Complete Vehicle Recycling Partner
            </div>
            <div className="mb-2.5 font-display text-[22px] font-black leading-[1.3] text-white sm:text-2xl">
              You Now Have The Blueprint.
              <br />
              <em className="not-italic text-[#5DCAA5]">Let EPR Nexuss Build It With You.</em>
            </div>
            <div className="mx-auto mb-[26px] max-w-[440px] text-[13px] leading-[1.7] text-gray-400">
              Licences. Land. Technology. Collection. EPR certificates. We handle every step — so you
              focus on building the most profitable green business of the decade. First consultation
              is completely free.
            </div>

            <div className="flex flex-col flex-wrap justify-center gap-3.5 min-[681px]:flex-row">
              <button
                type="button"
                className="w-full rounded-lg bg-gradient-to-br from-green-600 to-green-500 px-6 py-3 text-[15px] font-semibold text-white shadow-[0_6px_18px_rgba(34,197,94,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:from-green-700 hover:to-green-600 min-[681px]:w-auto"
                onClick={() => (window.location.href = "/contact")}
              >
                Book Free Consultation ↗
              </button>
              <button
                type="button"
                className="w-full rounded-lg border border-slate-300 bg-white px-[22px] py-3 text-[15px] font-medium text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 min-[681px]:w-auto"
                onClick={() => window.open("tel:+919289659966")}
              >
                Call Now
              </button>
            </div>

            <div className="mt-[15px] flex flex-wrap justify-center gap-3.5">
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
        </Reveal>
      </div>

      {/* Sidebar form: pure CSS sticky, below the navbar (top-32 = 128px) */}
      <div className="mx-auto mt-8 w-full max-w-[480px] lg:sticky lg:top-32 lg:mx-0 lg:mt-0 lg:max-w-none lg:self-start">
        <StickyContactForm />
      </div>
    </div>
  );
};

export default VehicleScrappingBlog;