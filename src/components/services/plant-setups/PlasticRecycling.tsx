import React from "react";
import StickyContactForm from "../../StickyContactForm";

/* -------------------------------------------------------------------------- */
/*  Shared Tailwind class strings (static, no interpolation)                   */
/* -------------------------------------------------------------------------- */

const th =
  "text-left bg-[#eef7f1] text-[#22543a] px-3.5 py-3 text-[11px] font-bold uppercase tracking-[0.03em] border-b border-[#e3ebe6]";
const td = "px-3.5 py-3 text-left text-[13px] leading-normal border-b border-[#e3ebe6] align-top";
const headingFont = "font-display";

/* -------------------------------------------------------------------------- */
/*  Reusable pieces                                                            */
/* -------------------------------------------------------------------------- */

function Section({
  id,
  alt,
  title,
  sub,
  children,
}: {
  id?: string;
  alt?: boolean;
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`mt-6 rounded-3xl border border-[#e3ebe6] shadow-[0_18px_50px_rgba(16,32,24,0.06)] ${
        alt ? "bg-gradient-to-b from-white to-[#fbfdfc]" : "bg-white"
      }`}
    >
      <div className="p-4 sm:p-8">
        <div className="mb-6">
          <h2 className={`${headingFont} mb-2 text-2xl sm:text-[28px] font-black leading-[1.2]`}>{title}</h2>
          <p className="text-sm leading-relaxed text-[#5e6d65]">{sub}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function DataTable({ headers, children }: { headers: string[]; children: React.ReactNode }) {
  return (
    <div className="w-full overflow-x-auto rounded-[14px] border border-[#e3ebe6]">
      <table className="w-full min-w-[500px] border-collapse bg-white">
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

type BarTone = "green" | "mint" | "gold" | "dark" | "pale" | "teal" | "light";

const barToneCls: Record<BarTone, string> = {
  green: "from-[#1e7a4c] to-[#2ea66a]",
  mint: "from-[#2ea66a] to-[#8fd3a6]",
  gold: "from-[#d99b2b] to-[#efc26a]",
  dark: "from-[#173224] to-[#29513d]",
  pale: "from-[#99bfa8] to-[#d5eadc]",
  teal: "from-[#6ca487] to-[#bfe8cb]",
  light: "from-[#8fd3a6] to-[#cfeeda]",
};

type BarItem = { label: string; top: string; value: number; tone: BarTone };

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
    <div className="rounded-2xl border border-[#e3ebe6] bg-white p-3 sm:p-4">
      <div className="mb-2 text-[15px] font-extrabold">{title}</div>
      <div className="mb-10 text-xs text-[#5e6d65]">{sub}</div>
      {children}
    </div>
  );
}

function BarChart({ items, max }: { items: BarItem[]; max: number }) {
  return (
    <div className="w-full overflow-x-auto overflow-y-hidden pb-2">
      <div className="flex h-[190px] min-w-[520px] items-end gap-[15px] pt-5">
        {items.map((d) => {
          // Height stays inline on purpose (dynamic value)
          const h = Math.round((d.value / max) * 140);
          return (
            <div key={d.label} className="flex min-w-[45px] flex-1 flex-col items-center gap-2">
              <div className="text-[10px] font-bold text-[#102018]">{d.top}</div>
              <div
                className={`min-h-[4px] w-full rounded-t-md bg-gradient-to-b transition-[height] duration-300 ${barToneCls[d.tone]}`}
                style={{ height: `${h}px` }}
              />
              <div className="whitespace-nowrap text-center text-[10px] text-[#5e6d65]">{d.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MiniCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-[#e3ebe6] bg-white p-4">
      <div className="mb-2 text-2xl">{icon}</div>
      <h4 className="mb-1.5 text-sm font-bold">{title}</h4>
      <p className="text-xs leading-relaxed text-[#5e6d65]">{text}</p>
    </div>
  );
}

function StackCard({
  heading,
  items,
  accent,
}: {
  heading: string;
  items: { t: string; d: string }[];
  accent: "green" | "gold";
}) {
  const accentCls = accent === "green" ? "text-[#1e7a4c] bg-[#eaf8f0]" : "text-[#aa7320] bg-[#fff7e9]";
  return (
    <div className="rounded-2xl border border-[#e3ebe6] bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
      <div className={`mb-[18px] inline-block rounded px-2.5 py-1 text-[11px] font-extrabold tracking-[0.08em] ${accentCls}`}>
        {heading}
      </div>
      {items.map((it) => (
        <div key={it.t} className="border-b border-dashed border-[#e3ebe6] py-3 last:border-b-0">
          <h5 className="mb-1 text-sm font-bold text-[#102018]">{it.t}</h5>
          <p className="text-xs leading-normal text-[#5e6d65]">{it.d}</p>
        </div>
      ))}
    </div>
  );
}

function DbBox({ head, rows }: { head: string; rows: [string, string, string][] }) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-[#e3ebe6] bg-white">
      <div className="bg-[#173224] px-3.5 py-3 text-[11px] font-bold uppercase text-[#effaf3]">{head}</div>
      {rows.map((r) => (
        <div
          key={r[0]}
          className="grid grid-cols-[1.2fr_1fr_.8fr] gap-2 border-t border-[#e3ebe6] px-3.5 py-3 text-xs"
        >
          <span>{r[0]}</span>
          <span>{r[1]}</span>
          <span className="font-bold text-[#1e7a4c]">{r[2]}</span>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */



const trustChips = [
  "Clear planning",
  "Compliance-led setup",
  "Market-oriented design",
  "Investor-friendly structure",
];

const wasteData = [
  { y: "2019", v: 3.2, a: true },
  { y: "2020", v: 3.4, a: true },
  { y: "2021", v: 3.7, a: true },
  { y: "2022", v: 4.0, a: true },
  { y: "2023", v: 4.3, a: true },
  { y: "2024", v: 4.6, a: true },
  { y: "2025", v: 4.9, a: false },
  { y: "2026", v: 5.3, a: false },
  { y: "2027", v: 5.7, a: false },
  { y: "2028", v: 6.2, a: false },
];
const wasteItems: BarItem[] = wasteData.map((d) => ({
  label: d.y,
  top: `${d.v.toFixed(1)}M`,
  value: d.v,
  tone: d.a ? "green" : "light",
}));
const wasteMax = Math.max(...wasteData.map((d) => d.v));

const investData: { name: string; value: number; tone: BarTone }[] = [
  { name: "Machinery", value: 2.4, tone: "green" },
  { name: "Civil Works", value: 1.5, tone: "mint" },
  { name: "ETP & Safety", value: 0.9, tone: "gold" },
  { name: "Working Capital", value: 0.7, tone: "dark" },
  { name: "Licensing", value: 0.3, tone: "pale" },
  { name: "QC / Tools", value: 0.2, tone: "teal" },
];
const investItems: BarItem[] = investData.map((d) => ({
  label: d.name,
  top: `₹${d.value.toFixed(1)} Cr`,
  value: d.value,
  tone: d.tone,
}));
const investMax = Math.max(...investData.map((d) => d.value));

const revData: { name: string; value: number; tone: BarTone }[] = [
  { name: "Pellet Sales", value: 100, tone: "green" },
  { name: "Processing Fees", value: 72, tone: "mint" },
  { name: "Compliance Services", value: 58, tone: "dark" },
  { name: "Residue Handling", value: 35, tone: "gold" },
];
const revItems: BarItem[] = revData.map((d) => ({
  label: d.name,
  top: `${d.value}%`,
  value: d.value,
  tone: d.tone,
}));
const revMax = Math.max(...revData.map((d) => d.value));

type TlCls = "dark" | "soft" | "green" | "gold";
const tlToneCls: Record<TlCls, string> = {
  green: "from-[#1e7a4c] to-[#2ea66a]",
  soft: "from-[#8fd3a6] to-[#bfe8cb]",
  gold: "from-[#d99b2b] to-[#efc26a]",
  dark: "from-[#173224] to-[#29513d]",
};
const timelineData: { label: string; start: number; width: number; cls: TlCls; note: string }[] = [
  { label: "Land finalisation", start: 0, width: 18, cls: "dark", note: "Month 1–2" },
  { label: "Approvals & applications", start: 12, width: 26, cls: "soft", note: "Month 2–5" },
  { label: "Civil work", start: 26, width: 28, cls: "green", note: "Month 4–8" },
  { label: "Machine procurement", start: 22, width: 34, cls: "gold", note: "Month 4–9" },
  { label: "Installation", start: 48, width: 18, cls: "green", note: "Month 8–10" },
  { label: "Trial production", start: 64, width: 10, cls: "soft", note: "Month 11" },
  { label: "Commercial launch", start: 74, width: 24, cls: "dark", note: "Month 12+" },
];

const businessWants = [
  "Reliable processing capacity",
  "Regulatory readiness",
  "Consistent pellet quality",
  "Stable collection and logistics",
  "Future expansion potential",
];

const landMini = [
  {
    icon: "📍",
    title: "Industrial zoning",
    text: "Choose land that is permitted for industrial use and suitable for waste-processing activities.",
  },
  {
    icon: "🚚",
    title: "Logistics access",
    text: "Wide approach roads and truck movement space improve collection efficiency and dispatch speed.",
  },
  {
    icon: "💧",
    title: "Water and drainage",
    text: "Washing lines need reliable water supply, drainage planning, and effluent treatment space.",
  },
  {
    icon: "⚡",
    title: "Power readiness",
    text: "Shredders, washers, dryers, and extrusion systems need steady three-phase electrical support.",
  },
];

const landTable: { p: React.ReactNode; r: React.ReactNode; w: string }[] = [
  {
    p: "Plot size",
    r: (
      <>
        Small unit: 3,000–8,000 sq ft
        <br />
        Mid-scale unit: 15,000–30,000 sq ft
        <br />
        Large unit: 40,000+ sq ft
      </>
    ),
    w: "Space must support sorting, storage, machinery, utilities, and movement corridors.",
  },
  {
    p: "Zone type",
    r: "Industrial land preferred",
    w: "Helps avoid approval complications and makes plant planning easier.",
  },
  {
    p: "Storage area",
    r: "Covered and protected shed space",
    w: "Plastic waste should be stored neatly and safely before processing.",
  },
  {
    p: "Water management",
    r: "ETP-friendly layout with drainage",
    w: "Wash water and wastewater handling must be planned from the beginning.",
  },
  {
    p: "Road access",
    r: "Truck-friendly approach road",
    w: "Collection and dispatch vehicles need smooth entry and exit.",
  },
];

const licenceMetrics = [
  { n: "1", t: "Consent to Establish", d: "Needed before construction and installation start." },
  { n: "2", t: "Consent to Operate", d: "Required once the plant is built and ready for inspection." },
  { n: "3", t: "PWM / waste authorisation", d: "Supports legal handling and processing of plastic waste." },
];

const regDb: [string, string, string][] = [
  ["Consent to Establish", "State Pollution Control Board", "Build approval"],
  ["Consent to Operate", "State Pollution Control Board", "Start operations"],
  ["PWM Authorisation", "Pollution Control Authority", "Plastic handling"],
  ["Factory / registration", "Labour Dept", "Workforce safety"],
  ["Fire and safety NOC", "Fire Department", "Risk control"],
];

const timeDb: [string, string, string][] = [
  ["Initial approvals", "30–90 days", "Planning stage"],
  ["Civil work", "60–120 days", "Plant build"],
  ["Machine install", "30–60 days", "Setup stage"],
  ["Trial runs", "15–30 days", "Quality checks"],
  ["Commercial start", "After clearance", "Go-live"],
];

const mainLine = [
  { t: "1. Sorting Conveyor", d: "Smooth multi-operator belt system for manual stream segregation." },
  { t: "2. Industrial Shredder", d: "High-torque split shafts to achieve rapid volume reductions." },
  { t: "3. Granulator & Crusher", d: "Precision dynamic blades ensuring strict size calibrations." },
  { t: "4. Hot Wash Line", d: "Continuous thermal baths to strip adhesives and surface chemicals." },
  { t: "5. Centrifugal Dryer", d: "High-speed cyclical rotation ensuring final moisture limits <1%." },
  { t: "6. Extruder & Pelletiser", d: "Automated uniform degasification and melt crystal cutting system." },
];

const auxLine = [
  { t: "Effluent Treatment Plant (ETP)", d: "Closed-loop operational water filtering for complete discharge safety." },
  { t: "Heavy Weighbridge System", d: "Digital load cell integrations mapping raw batch intakes accurately." },
  { t: "Industrial Fire Networks", d: "Ceiling localized sprinklers and high-pressure fire line stations." },
  { t: "CCTV & Operational Logs", d: "Central real-time process tracing logs ensuring batch consistency." },
  { t: "Protected Storage Sheds", d: "Climate isolated material holds preserving feedstock dryness." },
  { t: "Safety PPE Depots", d: "Strict zone entry points stocked with industrial worker gears." },
];

const revenueTable = [
  ["Recycled pellet sales", "Primary income", "Main product line after washing and extrusion"],
  ["Waste processing service", "Secondary income", "Processing material for outside clients or aggregators"],
  ["EPR-linked services", "Strategic income", "Supports compliance-driven partnerships"],
  ["Rejected material handling", "Support income", "Mixed residue may be routed to other approved channels"],
];

const caseStats = [
  { v: "4 TPD", l: "Planned processing capacity" },
  { v: "16 months", l: "Setup-to-startup window" },
  { v: "₹4.8 Cr", l: "Illustrative project budget" },
];

const caseChecks = [
  {
    h: "Challenge:",
    t: "The promoter needed a full plant roadmap, including land planning, approvals, machine selection, and buyer alignment.",
  },
  {
    h: "Solution:",
    t: "The project was organised step-by-step, from documentation and site planning to installation, testing, and launch.",
  },
  {
    h: "Result:",
    t: "The plant entered operations with a more structured supply chain and clearer product positioning.",
  },
  {
    h: "Outcome:",
    t: "Better planning improved decision-making, plant readiness, and presentation to partners.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

const PlasticRecycling: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-3 pb-6 pt-[76px] font-sans text-[#102018] sm:px-4 sm:pt-20 sm:pb-10 lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8 lg:pt-[100px]">
      {/* IMPORTANT: no overflow-hidden/auto on any ancestor of the sticky sidebar */}
      <div className="mt-6 min-w-0 w-full sm:mt-[50px]">
        {/* Topbar badges */}
        

        {/* Hero */}
        <section className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#0f2018] to-[#163325] px-4 py-6 text-white sm:rounded-[28px] sm:px-8 sm:py-10">
          <div className="grid items-center gap-6 md:grid-cols-[1.2fr_.8fr] md:gap-8">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#bff3d0]/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.05em] text-[#bff3d0]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#7df0a6]" />
                FROM WASTE STREAM TO WEALTH STREAM
              </div>
              <h1 className={`${headingFont} mb-4 text-2xl font-black leading-[1.15] sm:text-4xl`}>
                Plastic Waste Is Not the End of the Story.
                <span className="block text-[#a8f0bd]">It Is the Start of a Profitable Industry.</span>
              </h1>
              <p className="mb-5 text-[15px] leading-[1.75] text-[#d7eadf]">
                A well-planned plastic recycling plant turns discarded packaging into commercial
                output, compliance value, and long-term industrial growth. This guide is designed for
                investors, manufacturers, and entrepreneurs who want a practical roadmap for setting
                up a plant with clarity, structure, and business potential.
              </p>
              <div className="flex flex-wrap gap-2">
                {trustChips.map((t) => (
                  <span key={t} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-[11px] text-[#cfe9d8]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.06] p-5">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.06em] text-[#a8f0bd]">
                Quick Market Snapshot
              </h3>
              <div className="grid grid-cols-1 gap-3 min-[581px]:grid-cols-2">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-3.5">
                  <div className="text-[26px] font-black leading-none">3.5M+</div>
                  <div className="mt-1.5 text-[11px] leading-[1.4] text-[#d7eadf]">
                    tonnes of plastic waste generated annually in India, creating a large recovery
                    opportunity
                  </div>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-3.5">
                  <div className="text-[26px] font-black leading-none">70%</div>
                  <div className="mt-1.5 text-[11px] leading-[1.4] text-[#d7eadf]">
                    of value often remains untapped when waste is not sorted and processed efficiently
                  </div>
                </div>
                <div className="col-span-full rounded-xl border border-white/[0.06] bg-white/[0.04] p-3.5">
                  <div className="text-[26px] font-black leading-none">
                    Recycling plant = processing + compliance + revenue
                  </div>
                  <div className="mt-1.5 text-[11px] leading-[1.4] text-[#d7eadf]">
                    The business works best when collection, segregation, machinery, and approvals
                    move together.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blueprint */}
        <Section
          id="blueprint"
          alt
          title="Why This Plant Model Matters"
          sub="Plastic recycling is more than machinery. It is a structured industrial system that depends on feedstock sourcing, process control, legal approvals, and buyer demand."
        >
          <div className="mb-5 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#1a3a2b] bg-[#0f221a] p-6 text-[#e8f7ee]">
              <h3 className="mb-3.5 text-lg font-bold text-white">The business logic</h3>
              <p className="mb-2 text-sm leading-[1.65]">
                A recycling plant can create value from PET, HDPE, PP, and mixed plastic streams by
                sorting, washing, shredding, and converting material into reusable output. When
                operated correctly, the plant becomes a supply partner for packaging, moulding, and
                downstream manufacturers.
              </p>
              <p className="mb-2 text-sm leading-[1.65] opacity-70">
                Strong systems reduce waste loss, improve product quality, and make the unit easier
                to scale over time.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e3ebe6] bg-[#f8fbf9] p-6">
              <h3 className="mb-3.5 text-lg font-bold">What clients are really buying</h3>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-[1.65]">
                {businessWants.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-r-xl border-l-4 border-[#1e7a4c] bg-[#eefaf2] px-5 py-4 text-sm italic text-[#173523]">
            “The strongest recycling projects are not built on hype. They are built on land
            discipline, process discipline, and compliance discipline.”
          </div>
        </Section>

        {/* Waste chart */}
        <Section
          title="Market Movement in One Chart"
          sub="A simple view of how plastic waste generation can rise over time, which increases the need for formal recycling capacity."
        >
          <ChartBox
            title="Plastic Waste Growth Trend"
            sub="Illustrative growth pattern showing the long-term need for more organised recycling plants."
          >
            <BarChart items={wasteItems} max={wasteMax} />
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#d5eadc] bg-[#edf7f0] px-2.5 py-1 text-[11px] font-bold text-[#1b6040]">
                Actual period
              </span>
              <span className="rounded-full border border-[#f1dec0] bg-[#fff5e8] px-2.5 py-1 text-[11px] font-bold text-[#986622]">
                Projected period
              </span>
            </div>
          </ChartBox>
        </Section>

        {/* Land */}
        <Section
          alt
          title="Land Requirements and Site Fit"
          sub="The right land is not only about area. It should support movement of raw material, segregation space, storage, utilities, and future scaling."
        >
          <div className="grid grid-cols-1 gap-4 min-[581px]:grid-cols-2 md:grid-cols-4">
            {landMini.map((m) => (
              <MiniCard key={m.title} {...m} />
            ))}
          </div>

          <div className="mt-4">
            <DataTable headers={["Land Parameter", "Recommended Requirement", "Why It Matters"]}>
              {landTable.map((r, i) => (
                <tr key={i}>
                  <td className={`${td} font-bold`}>{r.p}</td>
                  <td className={td}>{r.r}</td>
                  <td className={td}>{r.w}</td>
                </tr>
              ))}
            </DataTable>
          </div>
        </Section>

        {/* Licence */}
        <Section
          title="Licence and Approval Roadmap"
          sub="A plastic recycling plant usually passes through pollution control approvals, labour compliance, safety approvals, and business registrations before commercial operations begin."
        >
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            {licenceMetrics.map((m) => (
              <div key={m.n} className="rounded-[14px] border border-[#e3ebe6] bg-[#f8fbf9] p-4">
                <div className="text-2xl font-black text-[#1e7a4c]">{m.n}</div>
                <div className="mt-1 text-xs leading-normal text-[#5e6d65]">
                  <strong>{m.t}</strong>
                  <br />
                  {m.d}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 w-full overflow-x-auto pb-2">
            <div className="grid min-w-[600px] grid-cols-2 gap-4">
              <DbBox head="Regulatory Database" rows={regDb} />
              <DbBox head="Time Window Overview" rows={timeDb} />
            </div>
          </div>
        </Section>

        {/* Machine stack */}
        <Section
          alt
          title="Machine Stack and Plant Infrastructure"
          sub="A premium engineering lineup organized systematically by process flow from reception to output delivery."
        >
          <div className="mb-6 grid gap-5 md:grid-cols-2">
            <StackCard heading="MAIN PRODUCTION LINE" items={mainLine} accent="green" />
            <StackCard heading="AUXILIARY SUPPORT INFRASTRUCTURE" items={auxLine} accent="gold" />
          </div>

          <ChartBox
            title="Sample Cost Split for a Mid-Scale Plant"
            sub="A simple visual breakdown of where the money typically goes in a setup model."
          >
            <BarChart items={investItems} max={investMax} />
          </ChartBox>
        </Section>

        {/* Timeline */}
        <Section
          title="Project Timeline at a Glance"
          sub="This sample timeline shows how a plant can move from idea to production in stages, rather than all at once."
        >
          <div className="w-full overflow-x-auto pb-2">
            <div className="grid min-w-[550px] grid-cols-[150px_1fr] items-center gap-3">
              {timelineData.map((item) => (
                <React.Fragment key={item.label}>
                  <div className="text-xs font-bold text-[#21382c]">{item.label}</div>
                  <div className="relative h-5 rounded bg-[#eef2ef]">
                    <div
                      className={`absolute top-0 flex h-full items-center justify-end rounded bg-gradient-to-r pr-2 ${tlToneCls[item.cls]}`}
                      style={{ left: `${item.start}%`, width: `${item.width}%` }}
                    >
                      <span className="whitespace-nowrap text-[9px] font-bold text-white">{item.note}</span>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Section>

        {/* Financial */}
        <Section
          alt
          title="Illustrative Financial Database"
          sub="This is a sample operating model for presentation use. It helps explain how revenue streams can be split across pellets, services, and by-product handling."
        >
          <DataTable headers={["Revenue Head", "Contribution", "Role in the Business Model"]}>
            {revenueTable.map((r) => (
              <tr key={r[0]}>
                <td className={`${td} font-bold`}>{r[0]}</td>
                <td className={td}>{r[1]}</td>
                <td className={td}>{r[2]}</td>
              </tr>
            ))}
          </DataTable>

          <div className="mt-4">
            <ChartBox
              title="Revenue Mix Comparison"
              sub="A bar view that helps explain which income line usually drives the plant most strongly."
            >
              <BarChart items={revItems} max={revMax} />
            </ChartBox>
          </div>
        </Section>

        {/* Case study */}
        <Section
          title="Sample Case Study"
          sub="A presentation-friendly example showing how a mid-scale project may move from setup to stable operations."
        >
          <div className="overflow-hidden rounded-2xl border border-[#e3ebe6] bg-white">
            <div className="bg-[#0f2018] p-6 text-white">
              <div className="mb-2 inline-block rounded bg-[#a8f0bd]/10 px-2 py-1 text-[10px] uppercase text-[#a8f0bd]">
                Illustrative client story
              </div>
              <h3 className={`${headingFont} text-xl font-bold`}>
                GreenLoop Recyclables — Mid-Scale Plant Journey
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="mb-5 grid grid-cols-1 gap-3 min-[581px]:grid-cols-3">
                {caseStats.map((s) => (
                  <div
                    key={s.l}
                    className="rounded-xl border border-[#e3ebe6] bg-[#f8fbf9] p-3 text-center"
                  >
                    <div className="text-xl font-extrabold text-[#1e7a4c]">{s.v}</div>
                    <div className="mt-1 text-[11px] text-[#5e6d65]">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {caseChecks.map((c) => (
                  <div
                    key={c.h}
                    className="flex gap-3 rounded-xl border border-[#e3ebe6] bg-[#f8fbf9] p-3.5 text-[13px] leading-normal"
                  >
                    <span className="font-bold text-[#1e7a4c]">✓</span>
                    <div>
                      <strong>{c.h}</strong> {c.t}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <section
          id="contact"
          className="mt-6 rounded-3xl bg-gradient-to-br from-[#0f2018] to-[#173224] p-6 text-white sm:p-8"
        >
          <h2 className={`${headingFont} mb-2 text-[26px] font-black`}>
            Turn the Idea Into a Plant That Works.
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-[#d7eadf]">
            Whether you are starting with a small recycling setup or planning a larger industrial
            unit, the winning formula stays the same: right land, right approvals, right equipment,
            and right operating structure. EPR Nexuss can help you present that story clearly and
            professionally.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600"
              onClick={() => (window.location.href = "/contact")}
            >
              Book Free Consultation ↗
            </button>
            <button
              type="button"
              className="rounded-lg border border-[#e3ebe6] bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
              onClick={() => window.open("tel:+919289659966")}
            >
              Call Now
            </button>
          </div>
        </section>
      </div>

      {/* Sidebar form: pure CSS sticky, sits below the navbar (top-28 = 112px) */}
      <div className="mx-auto mt-8 w-full max-w-[480px] lg:mx-0 lg:mt-[50px] lg:max-w-none lg:sticky lg:top-28 lg:self-start">
        <StickyContactForm />
      </div>
    </div>
  );
};

export default PlasticRecycling;