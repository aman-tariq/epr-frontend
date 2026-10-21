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
/*  Shared Tailwind class strings (static, no interpolation)                   */
/* -------------------------------------------------------------------------- */

const card =
  "bg-white border border-[#dbe3ef]/80 rounded-3xl shadow-[0_20px_50px_rgba(16,32,51,0.08)] p-4 sm:p-[22px]";
const chartBox =
  "bg-gradient-to-b from-white to-[#fbfcff] border border-[#dbe3ef] rounded-[28px] shadow-[0_20px_50px_rgba(16,32,51,0.08)] p-4 sm:p-[22px]";
const sectionTitle = "text-xl sm:text-2xl font-bold tracking-[-0.02em] mb-3";
const sectionSub = "mb-4 text-[#5b6b7f]";
const tableWrap = "w-full overflow-x-auto rounded-[20px] border border-[#dbe3ef]";
const th = "text-left bg-slate-900 text-white px-3.5 py-3 text-[13px] font-bold";
const td = "px-3.5 py-3 border-t border-[#dbe3ef] text-[13px] align-top";
const tr = "bg-white even:bg-[#fbfcfe]";
const badge =
  "inline-flex px-2 py-1 rounded-full text-[11px] font-extrabold bg-[#e7f6f4] text-[#0f766e]";

/* -------------------------------------------------------------------------- */
/*  Small reusable pieces                                                      */
/* -------------------------------------------------------------------------- */

function ChartHead({ title, sub, note }: { title: string; sub: string; note?: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 mb-3.5">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-[13px] text-[#5b6b7f]">{sub}</p>
      </div>
      {note && <p className="text-[13px] text-[#5b6b7f]">{note}</p>}
    </div>
  );
}

function MiniCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="min-h-[138px] rounded-[20px] border border-[#dbe3ef] bg-gradient-to-b from-white to-[#fbfdff] p-4">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-2.5 mb-2 text-base font-bold">{title}</h3>
      <p className="text-[13px] text-[#5b6b7f]">{text}</p>
    </div>
  );
}

function DataTable({ headers, children }: { headers: string[]; children: React.ReactNode }) {
  return (
    <div className={tableWrap}>
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

type BarVariant = "default" | "alt" | "soft";

const barVariantCls: Record<BarVariant, string> = {
  default: "from-[#2563eb] to-[#0f766e]",
  alt: "from-[#0f766e] to-[#14b8a6]",
  soft: "from-[#f59e0b] to-[#fb7185]",
};

type BarItem = { label: string; top: string; value: number; variant: BarVariant };

function BarChart({ items, max }: { items: BarItem[]; max: number }) {
  return (
    <div className="flex items-end gap-2.5 min-h-[220px] pt-2 pb-2 overflow-x-auto">
      {items.map((d) => {
        // Height stays inline on purpose (reliable across all breakpoints)
        const h = Math.max(26, Math.round((d.value / max) * 170));
        return (
          <div key={d.label} className="flex-1 min-w-[58px] shrink-0 text-center">
            <div className="mb-2 text-xs font-extrabold text-[#2563eb]">{d.top}</div>
            <div
              className={`w-full min-h-[24px] rounded-t-2xl rounded-b-lg bg-gradient-to-b shadow-[0_10px_18px_rgba(37,99,235,0.18)] ${barVariantCls[d.variant]}`}
              style={{ height: `${h}px` }}
            />
            <div className="mt-2.5 text-xs font-bold text-[#5b6b7f]">{d.label}</div>
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const wasteData = [
  { y: "2025", v: 0.4, t: "Current" },
  { y: "2026", v: 0.55, t: "Current" },
  { y: "2027", v: 0.8, t: "Current" },
  { y: "2028", v: 1.15, t: "Projected" },
  { y: "2029", v: 1.6, t: "Projected" },
  { y: "2030", v: 2.2, t: "Projected" },
  { y: "2031", v: 2.9, t: "Projected" },
  { y: "2032", v: 3.6, t: "Projected" },
];
const wasteItems: BarItem[] = wasteData.map((d) => ({
  label: d.y,
  top: `${d.v}M`,
  value: d.v,
  variant: d.t === "Projected" ? "alt" : "default",
}));
const wasteMax = Math.max(...wasteData.map((d) => d.v));

const dbData = [
  { name: "Glass", score: 96, value: "₹0.42 L/T" },
  { name: "Aluminium", score: 92, value: "₹0.95 L/T" },
  { name: "Copper", score: 86, value: "₹1.20 L/T" },
  { name: "Silver", score: 73, value: "₹1.85 L/T" },
  { name: "Silicon fraction", score: 64, value: "₹0.60 L/T" },
  { name: "Polymers / EVA", score: 55, value: "₹0.18 L/T" },
  { name: "Frames & steel", score: 88, value: "₹0.25 L/T" },
];

const capexData = [
  { label: "Machinery", value: 4.8 },
  { label: "Civil works", value: 2.3 },
  { label: "Safety / ETP", value: 1.6 },
  { label: "Working capital", value: 1.2 },
  { label: "Licensing", value: 0.7 },
];
const capexItems: BarItem[] = capexData.map((d, idx) => ({
  label: d.label,
  top: `₹${d.value} Cr`,
  value: d.value,
  variant: idx % 3 === 0 ? "soft" : idx % 2 === 0 ? "alt" : "default",
}));
const capexMax = Math.max(...capexData.map((d) => d.value));

const heroStats = [
  { v: "2030+", l: "Expected rise in end-of-life solar modules" },
  { v: "5+", l: "Core compliance steps for a launch-ready plant" },
  { v: "2–5 Acres", l: "Practical land range for a mid-scale setup" },
  { v: "6–18 mo", l: "Planning window for a disciplined project build" },
];


const whyPills = ["Material recovery", "EPR alignment", "Industrial compliance", "Long-term feedstock"];

const snapshot = [
  {
    icon: "📦",
    title: "Feedstock base",
    text: "Damaged, rejected, and retired modules from EPC contractors, solar parks, rooftops, and storage yards.",
  },
  {
    icon: "⚙️",
    title: "Plant role",
    text: "Receiving, dismantling, segregation, safe processing, and output preparation for downstream buyers.",
  },
  {
    icon: "🧾",
    title: "Compliance focus",
    text: "Portal registration, pollution-control approvals, hazardous handling, fire safety, and factory operations.",
  },
  {
    icon: "💡",
    title: "Revenue logic",
    text: "Combine material sales with recovery services, logistics support, and authorized processing fees.",
  },
];

const composition = [
  { c: "Glass", s: "45%", n: "Main recovered fraction; large volume, lower processing complexity." },
  { c: "Aluminium frame", s: "25%", n: "High-value metal stream with strong resale demand." },
  { c: "Polymers / backsheet / EVA", s: "15%", n: "Needs controlled handling and residue management." },
  { c: "Silicon, copper, silver", s: "10%", n: "Smaller volume, but the most strategic recovery stream." },
  { c: "Others", s: "5%", n: "Trace materials, labels, junction box parts, and residues." },
];

const landReq = [
  { r: "Zoning", p: "Industrial, manufacturing, or approved recycling use" },
  { r: "Road access", p: "Wider approach road for truck movement and unloading" },
  { r: "Covered space", p: "Receiving bay, storage yard, and material segregation area" },
  { r: "Power", p: "3-phase industrial connection for equipment and utilities" },
  { r: "Safety", p: "Fire lane, emergency exits, and buffer from sensitive zones" },
  { r: "Expansion", p: "Reserve land for additional processing or storage capacity" },
];

const landSize = [
  { icon: "🏢", title: "Small setup", text: "0.5–1 acre for collection, sorting, and pre-processing support." },
  {
    icon: "⭐",
    title: "Mid-scale sweet spot",
    text: "2–5 acres for the most practical balance of storage, dismantling, and logistics.",
  },
  {
    icon: "🏭",
    title: "Large integrated plant",
    text: "6+ acres for advanced separation, higher throughput, and expansion capacity.",
  },
  {
    icon: "🛣️",
    title: "Location advantage",
    text: "Near solar corridors, EPC clusters, industrial belts, and strong transport access.",
  },
];

const roadmap = [
  {
    title: "EPR / portal registration",
    text: "Register the operation and maintain inventory, tracking, and reporting records for solar-related waste handling.",
    time: "Early-stage compliance",
  },
  {
    title: "Consent to Establish",
    text: "Secure pollution-control approval before civil work, layout finalisation, and equipment installation.",
    time: "Before construction",
  },
  {
    title: "Factory and fire approvals",
    text: "Prepare the plant for worker safety, evacuation planning, emergency response, and equipment operation.",
    time: "Before commissioning",
  },
  {
    title: "Consent to Operate",
    text: "Open the facility for production after the site inspection confirms readiness and compliance.",
    time: "Launch phase",
  },
  {
    title: "Hazardous waste authorisation",
    text: "Manage residues, contaminated fractions, and by-products with approved storage, handling, and disposal flow.",
    time: "Ongoing requirement",
  },
];

const caseKpis = [
  { v: "2,800 TPA", l: "Processing capacity" },
  { v: "18 Months", l: "Concept to first batch" },
  { v: "₹10.8 Cr", l: "Illustrative project capex" },
];

const caseNeeds = [
  "No licensed land or compliant site layout",
  "No established reverse-logistics network",
  "Need for a structured recovery model with strong approvals",
  "Safe handling for glass, aluminium, and mixed material fractions",
];

const caseAchieved = [
  "Industrial land identified in a suitable zone",
  "Licensing roadmap arranged around pollution-control and fire safety",
  "Collection tie-ups formed with EPC and solar-park partners",
  "Operating flow built for sorting, dismantling, and recovery",
];

type ProfitRow = { name: string; y1: string; y2: string; tone: "pos" | "neg"; total?: boolean };

const profitRows: ProfitRow[] = [
  { name: "Recovered glass sales", y1: "₹210 L", y2: "₹340 L", tone: "pos" },
  { name: "Aluminium frame sales", y1: "₹160 L", y2: "₹260 L", tone: "pos" },
  { name: "Copper / wire recovery", y1: "₹95 L", y2: "₹145 L", tone: "pos" },
  { name: "Silver / silicon fractions", y1: "₹120 L", y2: "₹185 L", tone: "pos" },
  { name: "Service and dismantling fees", y1: "₹135 L", y2: "₹205 L", tone: "pos" },
  { name: "Operating and logistics costs", y1: "-₹310 L", y2: "-₹390 L", tone: "neg" },
  { name: "Compliance and admin", y1: "-₹55 L", y2: "-₹65 L", tone: "neg" },
  { name: "Net result", y1: "₹355 L", y2: "₹680 L", tone: "pos", total: true },
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
  "Solar Panel Recycling Plant",
  "Solar Panel Recycling",
  "Solar Recycling Business",
  "PV Panel Recycling",
  "Solar Waste Management",
  "Solar Panel Recycling Plant Setup",
  "Solar Recycling Machinery",
  "Solar Panel Waste Recycling",
  "Solar Recycling Business India",
  "Solar Recycling Investment",
  "Detailed Project Report",
  "Solar Panel Recycling Approvals",
  "CPCB Compliance",
  "Renewable Energy Recycling",
  "Circular Economy",
  "How to start a solar panel recycling plant?",
  "Solar panel recycling plant setup cost in India",
  "How to get approval for a solar recycling plant?",
  "Documents required for a solar panel recycling plant",
  "Solar panel recycling business opportunities",
  "Best solar recycling consultants in India",
  "Solar panel recycling machinery guide",
  "Solar waste recycling solutions",
  "Solar recycling plant investment",
  "Solar panel recycling business guide 2026",
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

const SolarPanelBlog: React.FC = () => {
  return (
    <div className="w-full max-w-[1480px] mx-auto mt-10 md:mt-[60px] lg:mt-20 mb-5 sm:mb-10 px-3 sm:px-4 lg:px-[18px] pt-3 sm:pt-6 pb-8 sm:pb-9 bg-[#f5f7fb] text-[#102033] lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8">
      <Seo
        title="Solar Panel Recycling Plant Setup Services | Build a Profitable Solar Recycling Business"
        description="Set up a compliant and profitable solar panel recycling plant in India. Learn about DPRs, approvals, machinery, land requirements, CPCB compliance, operations, and business opportunities in the growing solar recycling industry."
        keywords={seoKeywords}
        url="https://eprnexuss.com/services/recycling-solar-panel"
        type="article"
      />

      {/* NOTE: no overflow-hidden on any ancestor of the sticky sidebar */}
      <div className="min-w-0 w-full mt-[30px] sm:mt-10">
        {/* Top chips */}
        

        {/* Hero */}
        <Reveal delay={0.1}>
          <section className="relative overflow-hidden rounded-[20px] sm:rounded-[32px] bg-gradient-to-br from-[#081726] via-[#0d2b43] to-[#0f766e] text-white p-5 sm:p-[34px] shadow-[0_20px_50px_rgba(16,32,51,0.08)] mb-[22px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-[110px] -top-[120px] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_65%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-[90px] -bottom-[110px] h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10),transparent_65%)]"
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-[7px] rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-4">
                Turning end-of-life modules into a high-value circular business
              </div>
              <h1 className="mb-3 max-w-[850px] text-[22px] sm:text-[clamp(24px,4vw,52px)] font-bold leading-[1.06] tracking-[-0.03em]">
                From <em className="not-italic text-[#fde68a]">waste</em> to wealth — build a solar
                recycling plant that is compliant, scalable, and future-ready.
              </h1>
              <p className="max-w-[880px] text-base text-white/90">
                Solar growth is creating a new wave of recoverable materials. With the right land,
                licences, equipment, and reverse-logistics plan, a solar panel recycling plant can
                become a profitable industrial asset instead of a storage problem.
              </p>

              <div className="mt-6 grid grid-cols-1 min-[401px]:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                {heroStats.map((s) => (
                  <div
                    key={s.v}
                    className="min-h-[92px] rounded-[22px] border border-white/[0.14] bg-white/10 px-3.5 py-4 backdrop-blur-[10px]"
                  >
                    <div className="text-[26px] font-extrabold leading-[1.1]">{s.v}</div>
                    <div className="mt-2 text-xs text-white/85">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Meta */}
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-3 text-xs text-[#5b6b7f] mx-0.5 mb-[26px]">
            <span>
              By <span className="font-extrabold text-[#0f766e]">EPR Nexuss Team</span>
            </span>
            <span>April 2026</span>
            <span>Business Blog + Feasibility Guide</span>
          </div>
        </Reveal>

        {/* Why + snapshot */}
        <div className="grid grid-cols-1 gap-[22px] my-[22px]">
          <Reveal delay={0.2}>
            <section className={card}>
              <h2 className={sectionTitle}>Why this business matters now</h2>
              <p className={sectionSub}>
                Solar panels do not disappear after use. They become a recoverable material stream
                containing glass, aluminium, copper, silver, silicon fractions, polymers, and
                safety-related residues.
              </p>
              <p>
                That means the right recycling model can earn from two sides at once: recovery of
                valuable fractions and service income from collection, dismantling, and compliance
                operations. For investors, the opportunity is not just in recycling; it is in
                owning the infrastructure that supports India’s solar economy for the long term.
              </p>
              <div className="mt-[18px] rounded-[18px] border-l-[5px] border-[#0f766e] bg-gradient-to-br from-[#0f766e]/10 to-[#2563eb]/10 px-[18px] py-4 font-bold text-[#12344d]">
                Punch line: The next solar boom will not only need installers — it will need
                recyclers who can unlock value at the end of the panel’s life.
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {whyPills.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-[#cdebe7] bg-[#e7f6f4] px-3 py-2 text-xs font-extrabold text-[#0f766e]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.25}>
            <section className={card}>
              <h2 className={sectionTitle}>Business snapshot</h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {snapshot.map((m) => (
                  <MiniCard key={m.title} {...m} />
                ))}
              </div>
            </section>
          </Reveal>
        </div>

        {/* Charts */}
        <section className="mt-[18px] grid grid-cols-1 gap-4 sm:gap-[18px]">
          <Reveal>
            <div className={chartBox}>
              <ChartHead
                title="Projected solar waste inflow"
                sub="Illustrative growth path for planning a mid-scale recycling facility"
                note="Units shown in million panels / equivalent waste flow"
              />
              <BarChart items={wasteItems} max={wasteMax} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className={chartBox}>
              <ChartHead
                title="Recoverable material value database"
                sub="Quick-view recovery model for plant economics and buyer conversations"
                note="Recovery score and value estimate"
              />
              <div className="grid gap-2.5">
                {dbData.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-1 items-center gap-1.5 rounded-2xl border border-[#dbe3ef] bg-white px-3.5 py-3 sm:grid-cols-[1.6fr_.9fr_.8fr] sm:gap-2.5"
                  >
                    <div className="font-extrabold">{item.name}</div>
                    <div className="h-3 overflow-hidden rounded-full bg-[#edf2f7]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#0f766e] to-[#2563eb]"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <div className="text-left text-xs font-bold text-[#5b6b7f] sm:text-right">
                      {item.value} · Recovery {item.score}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={chartBox}>
              <ChartHead
                title="Typical solar panel composition"
                sub="Useful for process design, sorting, and output estimation"
              />
              <DataTable headers={["Component", "Approx. share", "Planning note"]}>
                {composition.map((r) => (
                  <tr key={r.c} className={tr}>
                    <td className={td}>{r.c}</td>
                    <td className={td}>
                      <span className={badge}>{r.s}</span>
                    </td>
                    <td className={td}>{r.n}</td>
                  </tr>
                ))}
              </DataTable>
            </div>
          </Reveal>
        </section>

        {/* Land */}
        <div className="grid grid-cols-1 gap-[22px] my-[22px]">
          <Reveal>
            <section className={card}>
              <h2 className={sectionTitle}>Land and site requirements</h2>
              <p className={sectionSub}>
                A recycling plant works best on industrial land with road access, utility support,
                and enough room for safe storage, vehicle movement, and future expansion.
              </p>
              <DataTable headers={["Requirement", "Preferred specification"]}>
                {landReq.map((r) => (
                  <tr key={r.r} className={tr}>
                    <td className={td}>{r.r}</td>
                    <td className={td}>{r.p}</td>
                  </tr>
                ))}
              </DataTable>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section className={card}>
              <h2 className={sectionTitle}>Land size guide</h2>
              <p className={sectionSub}>
                Choose the scale according to capacity, feedstock strategy, and automation level.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {landSize.map((m) => (
                  <MiniCard key={m.title} {...m} />
                ))}
              </div>
            </section>
          </Reveal>
        </div>

        {/* Roadmap */}
        <Reveal>
          <section className={chartBox}>
            <ChartHead
              title="Approval and licence roadmap"
              sub="A clean structure for building the project without compliance surprises"
            />
            <div className="grid gap-3">
              {roadmap.map((s, i) => (
                <div
                  key={s.title}
                  className="grid grid-cols-[48px_1fr] items-start gap-2.5 rounded-[20px] border border-[#dbe3ef] bg-white p-4 sm:grid-cols-[58px_1fr] sm:gap-3.5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#2563eb] to-[#0f766e] text-base font-black text-white sm:h-[58px] sm:w-[58px] sm:rounded-[18px] sm:text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-bold">{s.title}</h4>
                    <p className="text-[13px] text-[#5b6b7f]">{s.text}</p>
                    <span className="mt-2.5 inline-block rounded-full bg-[#e7f6f4] px-2 py-1 text-[11px] font-extrabold text-[#0f766e]">
                      {s.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Capex */}
        <Reveal delay={0.1} className="mt-[22px]">
          <section className={chartBox}>
            <ChartHead
              title="Typical investment split"
              sub="Illustrative capex mix for a mid-scale solar recycling project"
            />
            <BarChart items={capexItems} max={capexMax} />
          </section>
        </Reveal>

        {/* Case study */}
        <Reveal delay={0.15} className="mt-[22px]">
          <section className="overflow-hidden rounded-[28px] border border-[#dbe3ef] bg-gradient-to-b from-white to-[#f9fbff] shadow-[0_20px_50px_rgba(16,32,51,0.08)]">
            <div className="bg-gradient-to-br from-slate-900 to-[#0f766e] p-[22px] text-white">
              <div className="mb-2.5 inline-block rounded-full border border-white/[0.18] bg-white/[0.14] px-2.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.06em]">
                Case study
              </div>
              <h3 className="text-xl font-bold leading-[1.15] sm:text-[25px]">
                How a Gujarat-based promoter turned a solar recycling concept into a working
                business
              </h3>
            </div>

            <div className="p-4 sm:p-[22px]">
              <div className="mb-[18px] grid grid-cols-1 gap-3 sm:grid-cols-3">
                {caseKpis.map((k) => (
                  <div
                    key={k.l}
                    className="rounded-[18px] border border-[#dbe3ef] bg-white p-4 text-center"
                  >
                    <div className="text-[22px] font-black text-[#2563eb]">{k.v}</div>
                    <div className="mt-1 text-xs text-[#5b6b7f]">{k.l}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
                {[
                  { title: "What the promoter needed", items: caseNeeds },
                  { title: "What the project achieved", items: caseAchieved },
                ].map((col) => (
                  <div key={col.title}>
                    <h3 className="mb-2.5 text-lg font-bold tracking-[-0.02em]">{col.title}</h3>
                    <ul className="grid gap-2">
                      {col.items.map((li) => (
                        <li
                          key={li}
                          className="rounded-2xl border border-[#dbe3ef] bg-white px-3 py-2.5 text-[13px] text-[#243447]"
                        >
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-2.5 w-full overflow-x-auto rounded-[18px]">
                <table className="w-full min-w-[420px] border-collapse">
                  <thead>
                    <tr>
                      {["Revenue / Cost Head", "Year 1", "Year 2"].map((h) => (
                        <th
                          key={h}
                          className="border-b border-[#dbe3ef] bg-slate-50 px-3 py-2.5 text-left text-[13px] font-bold"
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
                            className={`border-b border-[#dbe3ef] px-3 py-2.5 text-[13px] ${
                              r.total ? "font-black" : ""
                            }`}
                          >
                            {r.name}
                          </td>
                          <td
                            className={`border-b border-[#dbe3ef] px-3 py-2.5 text-[13px] ${weight} ${toneCls[r.tone]}`}
                          >
                            {r.y1}
                          </td>
                          <td
                            className={`border-b border-[#dbe3ef] px-3 py-2.5 text-[13px] ${weight} ${toneCls[r.tone]}`}
                          >
                            {r.y2}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.2}>
          <div className="relative mt-9 overflow-hidden rounded-[18px] bg-gradient-to-br from-[#0b1f3a] via-[#1c3d6e] to-[#0b1f3a] px-7 py-10 text-center">
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#5DCAA5]">
              ⚡ EPR Nexuss — India's Complete Solar Panel Recycling Partner
            </div>
            <div className="mb-2.5 text-2xl font-black leading-[1.3] text-white">
              You Now Have The Blueprint.
              <br />
              <em className="not-italic text-[#5DCAA5]">Let EPR Nexuss Build It With You.</em>
            </div>
            <div className="mx-auto mb-[26px] max-w-[440px] text-[13px] leading-[1.7] text-gray-400">
              Licences. Land. Technology. Collection. EPR certificates. We handle every step — so
              you focus on building the most profitable green business of the decade. First
              consultation is completely free.
            </div>

            <div className="mb-[22px] flex flex-col flex-wrap justify-center gap-2.5 sm:flex-row">
              <button
                type="button"
                className="w-full rounded-lg bg-gradient-to-br from-green-600 to-green-500 px-6 py-3 text-[15px] font-semibold text-white shadow-[0_6px_18px_rgba(34,197,94,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:from-green-700 hover:to-green-600 sm:w-auto"
                onClick={() => (window.location.href = "/contact")}
              >
                Book Free Consultation ↗
              </button>
              <button
                type="button"
                className="w-full rounded-lg border border-slate-300 bg-white px-[22px] py-3 text-[15px] font-medium text-slate-900 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
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
        </Reveal>
      </div>

      {/* Sticky sidebar form */}
      <div className="hidden lg:block sticky top-[140px] self-start">
        <StickyContactForm />
      </div>
    </div>
  );
};

export default SolarPanelBlog;