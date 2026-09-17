"use client";


import StickyContactForm from "@/components/StickyContactForm";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {motion} from "framer-motion"

const GLASS =
  "bg-white/80 backdrop-blur-md border border-slate-400/20 shadow-[0_20px_50px_rgba(15,23,42,0.08)]";
const SECTION_CARD =
  "border border-slate-400/25 shadow-[0_18px_40px_rgba(15,23,42,0.06)]";
const CHIP = "border border-brandGreen/25 bg-brandGreen/10";
const CHIP_NEUTRAL = "border border-slate-300 bg-white";
const KPI =
  "border border-brandGreen/20 bg-gradient-to-b from-brandGreen/10 to-white/95";
const SOFT_SHADOW = "shadow-[0_12px_30px_rgba(15,23,42,0.08)]";
const TABLE_TD = "p-4 bg-white border-t border-b border-slate-200 first:border-l first:rounded-l-2xl last:border-r last:rounded-r-2xl";
const TABLE_TH = "text-left text-sm text-slate-500 px-4 pb-2";

const kpis = [
  {
    label: "Compliance focus",
    title: "Approvals before build",
    desc: "Reduce redesign, commissioning delays, and approval mismatches.",
  },
  {
    label: "Business focus",
    title: "Bankable project logic",
    desc: "Link land, layout, machinery, and compliance into one project story.",
  },
  {
    label: "Execution focus",
    title: "Faster commissioning",
    desc: "Plan the sequence of filings so the plant can launch smoothly.",
  },
];

const importanceCards = ["Compliance planning", "Safe operations", "Better investor confidence", "Faster commissioning"];

const majorApprovalsTable = [
  {
    approval: "E-waste authorization / registration",
    why: "Legal right to collect, store, dismantle, or process e-waste",
    protects: "Core operation approval",
  },
  {
    approval: "Consent to Establish",
    why: "Required before construction or infrastructure setup",
    protects: "Plant design and land use",
  },
  {
    approval: "Consent to Operate",
    why: "Needed before starting production or commercial activity",
    protects: "Operational legality",
  },
  {
    approval: "Factory license",
    why: "Industrial compliance for the working facility",
    protects: "Labour and factory safety",
  },
  {
    approval: "Fire NOC",
    why: "Confirms fire safety readiness for storage and processing areas",
    protects: "People, plant, and inventory safety",
  },
  {
    approval: "Building / land-use clearance",
    why: "Checks whether the site is valid for industrial use",
    protects: "Land legality and zoning fit",
  },
];

const checklist8 = [
  { title: "1. Company registration", desc: "Create the business as a legal entity so contracts, banking, and filings are valid." },
  { title: "2. GST Registration", desc: "Enable invoicing, tax compliance, and clean commercial operations." },
  { title: "3. Consent to Establish", desc: "Secure permission before civil work or infrastructure setup begins." },
  { title: "4. Consent to Operate", desc: "Obtain the final green signal before commercial operation starts." },
  { title: "5. Hazardous Waste Authorisation", desc: "Manage residual waste streams in a legally safe and traceable way." },
  { title: "6. Fire NOC", desc: "Confirm storage, exits, and fire protection systems are ready." },
  { title: "7. Factory Licence", desc: "Ensure workplace safety and labour-linked compliance for the plant." },
  { title: "8. EPR Registration on CPCB Portal", desc: "Align the project with current e-waste responsibility requirements." },
];

const pitfalls = [
  { title: "Starting civil work too early", desc: "This often creates redesign risk when the approval layout changes." },
  { title: "Incomplete documents", desc: "Missing technical files can delay filing and inspection cycles." },
  { title: "Layout mismatch", desc: "Storage, movement, and safety zones must match the approvals." },
  { title: "Ignoring approval sequencing", desc: "Wrong order can delay commissioning and increase project cost." },
];

const roadmaps = [
  { title: "1. Site finalisation", desc: "Check whether land, building, and location are suitable for recycling operations." },
  { title: "2. Document preparation", desc: "Prepare project report, layout plan, pollution-control plan, and records." },
  { title: "3. Authority filing", desc: "Submit approval applications with complete technical detail." },
  { title: "4. Inspection and launch", desc: "Resolve queries, pass inspection, and move toward operation." },
];

const requirements = [
  { title: "Legal entity", desc: "A registered company gives the project legal identity and contract strength." },
  { title: "Technical documents", desc: "Layout, flow, utilities, and pollution controls should be documented clearly." },
  { title: "Compliance plan", desc: "Build the approvals path into the project timeline from day one." },
  { title: "Safety readiness", desc: "Fire, storage, labour, and environmental systems must be ready before start-up." },
];

const approvalsChecklist6 = [
  { title: "CTE", desc: "Required before construction and infrastructure setup begins." },
  { title: "CTO", desc: "Needed before the plant can start commercial activity." },
  { title: "E-waste authorisation", desc: "Gives the legal right to collect, store, dismantle, or process e-waste." },
  { title: "Factory licence", desc: "Supports factory safety, labour compliance, and industrial legality." },
  { title: "Fire NOC", desc: "Confirms fire protection readiness in storage and process areas." },
  { title: "Land-use / building clearance", desc: "Checks that the site is suitable for industrial recycling use." },
];

const clientChecklist = [
  { title: "Plant layout and approval connection", desc: "Storage, dismantling, processing, fire exits, and waste-handling points must match the approval requirements from the start." },
  { title: "Document checklist", desc: "A clean document set reduces filing friction and avoids avoidable delays." },
  { title: "Risk if approvals are delayed", desc: "Delays can affect construction, machinery installation, trial runs, and launch timing." },
  { title: "Why compliance builds trust", desc: "Buyers, vendors, regulators, and investors trust a plant more when its structure is clear." },
];

const trackingTable = [
  { stage: "Land selection", dept: "Project team", status: "Completed", risk: "Wrong industrial zoning" },
  { stage: "SPCB consultation", dept: "Compliance team", status: "In progress", risk: "Layout mismatch" },
  { stage: "Consent to Establish", dept: "Authority filing", status: "Pending", risk: "Construction delay" },
  { stage: "Fire safety review", dept: "Safety consultant", status: "Pending", risk: "Storage restrictions" },
  { stage: "Operational authorization", dept: "Pollution control board", status: "Upcoming", risk: "Cannot begin production" },
];

const snapshotStats = [
  { label: "E-waste generated (FY 2023-24)", value: "1.77 Mn MT" },
  { label: "Collected (FY 2023-24)", value: "7,98,493 MT" },
  { label: "Recycled (FY 2023-24)", value: "7,68,406 MT" },
];

const faqs = [
  { q: "Why should approvals begin before civil work?", a: "Because the site plan, utility layout, and safety zones must match the approval path to avoid costly redesign later." },
  { q: "What is the most important early approval?", a: "Consent to Establish is usually one of the first critical approvals because it supports the plant design and infrastructure setup stage." },
  { q: "Why does a project report need approval mapping?", a: "It helps promoters, consultants, and investors understand the sequence of filings and the risks of delay." },
  { q: "How do approvals build investor confidence?", a: "A clear compliance plan reduces uncertainty and signals that the project can be launched and scaled responsibly." },
  { q: "Can this structure be used in a DPR or proposal?", a: "Yes. The layout is suitable for a blog, a project note, or a fuller DPR-style narrative about compliance and operational planning." },
];

const pieData = [
  { name: "Collected", value: 798493 },
  { name: "Recycled", value: 768406 },
  { name: "Unrecycled gap", value: 30087 },
];
const pieColors = ["#5AC361", "#1e293b", "#cbd5e1"];

const barData = [
  { name: "Generated", value: 1770000 },
  { name: "Collected", value: 798493 },
  { name: "Recycled", value: 768406 },
];

function formatValue(value: number) {
  return value >= 1000000
    ? `${(value / 1000000).toFixed(1)} Mn`
    : value.toLocaleString("en-IN");
}

const fadeUp = {
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

export default function ElectricEprApprovalsBlog() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-[#eef7ef]">
      <div className="flex flex-col lg:flex-row lg:gap-2 lg:items-start px-0 pt-8 pb-10">
        <div className="flex-1 min-w-0 w-8xl">
         
            <header className={`${GLASS} rounded-[2rem] overflow-hidden`}>
              <motion.div 
              initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
              className="p-6 md:p-10 lg:p-14">
                <div className="flex flex-wrap items-center mt-10 gap-3 mb-6 justify-center">
                  <span className={`${CHIP} text-brandGreen font-semibold px-4 py-2 rounded-full text-sm`}>
                    E-Waste Compliance
                  </span>
                  <span className={`${CHIP_NEUTRAL} text-slate-700 font-semibold px-4 py-2 rounded-full text-sm`}>
                    Approvals
                  </span>
                  <span className={`${CHIP_NEUTRAL} text-slate-700 font-semibold px-4 py-2 rounded-full text-sm`}>
                    Regulatory Roadmap
                  </span>
                </div>
                <div className="max-w-5xl mx-auto text-center">
                  <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-tight">
                    EPR Electronics Credit : The Complete Registration Approvals &amp; Regulatory Compliances Roadmap
                  </h1>
                  <p className="mt-5 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-8">
                    Master the approval roadmap for e-waste recycling plants with clear compliance, legal permissions, and government authorization strategies.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                  {kpis.map((k) => (
                    <div key={k.title} className={`${KPI} rounded-2xl p-5`}>
                      <p className="text-sm text-slate-500 font-semibold">{k.label}</p>
                      <p className="text-lg font-bold text-slate-950 mt-1">{k.title}</p>
                      <p className="text-sm text-slate-600 mt-2 leading-6">{k.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </header>
      
            <motion.section
            initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }} 
            className="pt-8 pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                  <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Introduction</h2>
                  <div className="mt-5 text-slate-700 leading-8 space-y-4">
                    <p>
                      E-Waste Compliance, Approvals, and Regulations define how an e-waste recycling plant is created and operated.
                      The right approval path turns a concept into a legitimate industrial project.
                    </p>
                    <p>
                      Master the approval roadmap for e-waste recycling plants with clear compliance, legal permissions, and government authorization strategies.
                    </p>
                  </div>
                </article>

                <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                  <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                    E-Waste Recycling Plant | Approvals, Compliance &amp; Project Planning
                  </h2>
                  <div className="mt-5 text-slate-700 leading-8 space-y-4">
                    <p className="font-semibold text-slate-900 text-center">
                      &ldquo;Before the shredder starts, let the approvals lead the way.&rdquo;
                    </p>
                    <p>
                      A successful e-waste recycling plant is not built only with machines. It is built with the right permissions, a smart approval roadmap, and a compliance-first mindset.
                    </p>
                    <p>A compliant plant is not just legal — it is faster to launch, easier to trust, and better to scale.</p>
                  </div>
                </article>
              </div>
            </motion.section>
       
          <motion.section
           initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }} 
          className="pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Problem</h2>
                <div className="mt-5 text-slate-700 leading-8 space-y-4">
                  <p>
                    Many new plant owners focus first on machinery, capacity, and space. But in an e-waste recycling project, approvals shape the entire business from the beginning.
                  </p>
                  <p>
                    The approval process decides how the site is used, where waste is stored, how material moves inside the plant, what kind of pollution-control system is needed, and when commercial operations can legally begin.
                  </p>
                  <p>In simple words, approvals are not a formality. They are the foundation of a safe, trusted, and future-ready recycling unit.</p>
                </div>
              </article>

              <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Solution</h2>
                <p className="mt-5 text-slate-700 leading-8 text-center">
                  Start with a compliance map, align the land and plant design with the approval path, and file the key permissions in the right sequence.
                  When approvals are planned early, the project avoids redesign, saves time, and reduces commissioning risk.
                </p>
              </article>
            </div>
          </motion.section>

          <motion.section 
          initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
          className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                Importance of Approvals Before Plant Setup
              </h2>
              <div className="mt-5 text-slate-700 leading-8 space-y-4">
                <p>
                  Many new plant owners focus first on machinery, capacity, and space. But in an e-waste recycling project, approvals shape the entire business from the beginning.
                </p>
                <p>
                  The approval process decides how the site is used, where waste is stored, how material moves inside the plant, what kind of pollution-control system is needed, and when commercial operations can legally begin.
                </p>
                <p>In simple words, approvals are not a formality. They are the foundation of a safe, trusted, and future-ready recycling unit.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                {importanceCards.map((item) => (
                  <div key={item} className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                    <p className="font-bold text-slate-950">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
          initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }} 
          className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                What a client needs to understand first
              </h2>
              <p className="mt-5 text-slate-700 leading-8 max-w-5xl mx-auto text-center">
                An e-waste recycling plant is not approved in one step. It usually moves through a sequence of permissions, checks, and submissions.
                That is why a good project report should explain the approval journey clearly so the promoter, consultant, and investor can all see the same roadmap.
              </p>
              <p className="mt-4 text-slate-700 leading-8 max-w-5xl mx-auto text-center font-semibold">
                If the plant design and the approval process do not match, the project can face avoidable changes later.
              </p>
              <p className="mt-2 text-slate-700 leading-8 max-w-5xl mx-auto text-center">
                This is why approval planning should begin before civil work and before equipment purchase.
              </p>
            </div>
          </motion.section>

          <motion.section
          initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }} 
          className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                Major approvals required for an e-waste recycling plant
              </h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[920px] border-separate border-spacing-y-3">
                  <thead>
                    <tr>
                      <th className={TABLE_TH}>Approval</th>
                      <th className={TABLE_TH}>Why it is needed</th>
                      <th className={TABLE_TH}>What it protects</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    {majorApprovalsTable.map((row) => (
                      <tr key={row.approval}>
                        <td className={`${TABLE_TD} font-semibold text-slate-950`}>{row.approval}</td>
                        <td className={TABLE_TD}>{row.why}</td>
                        <td className={TABLE_TD}>{row.protects}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>

          <motion.section
          initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
           className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                Licences &amp; Approvals — The Complete Checklist
              </h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {checklist8.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5">
                    <p className="font-bold text-slate-950 text-center">{item.title}</p>
                    <p className="mt-3 text-slate-600 leading-7 text-center">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-center text-slate-700 leading-7">
                These approvals work like a project shield. They protect the plant, the business, and the investment before operations begin.
              </p>
            </div>
          </motion.section>

          <motion.section
          initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }} 
          className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Pitfalls</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {pitfalls.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                    <p className="font-bold text-slate-950">{item.title}</p>
                    <p className="mt-2 text-slate-600 leading-7">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section 
          initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}

          className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Roadmaps</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {roadmaps.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                    <p className="font-bold text-slate-950">{item.title}</p>
                    <p className="mt-2 text-slate-600 leading-7">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
          initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
           className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Requirements</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {requirements.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                    <p className="font-bold text-slate-950">{item.title}</p>
                    <p className="mt-2 text-slate-600 leading-7">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section 
          initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
          className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                Major approvals checklist
              </h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {approvalsChecklist6.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5">
                    <p className="font-bold text-slate-950 text-center">{item.title}</p>
                    <p className="mt-2 text-slate-600 leading-7 text-center">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
          initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
          className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                Checklist for clients
              </h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {clientChecklist.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5">
                    <p className="font-bold text-slate-950 text-center">{item.title}</p>
                    <p className="mt-3 text-slate-600 leading-7 text-center">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
           initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }} 
          className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                Approval tracking database
              </h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[900px] border-separate border-spacing-y-3">
                  <thead>
                    <tr>
                      <th className={TABLE_TH}>Stage</th>
                      <th className={TABLE_TH}>Department</th>
                      <th className={TABLE_TH}>Status</th>
                      <th className={TABLE_TH}>Risk if delayed</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    {trackingTable.map((row) => (
                      <tr key={row.stage}>
                        <td className={`${TABLE_TD} font-semibold text-slate-950`}>{row.stage}</td>
                        <td className={TABLE_TD}>{row.dept}</td>
                        <td className={TABLE_TD}>{row.status}</td>
                        <td className={TABLE_TD}>{row.risk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>

          <motion.section
           initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
           className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                Real-world data snapshot
              </h2>
              <p className="mt-4 text-center text-slate-600 leading-7 max-w-4xl mx-auto">
                CPCB reported that e-waste generated from 106 notified electrical and electronic equipment items was 1.77 million tonnes in FY 2023-24 and 1.90 million tonnes in FY 2024-25.
                The same report stated that 7,98,493 MT were collected and 7,68,406 MT were recycled in FY 2023-24, and that as of 10-12-2024 there were 295 registered recyclers with 20,60,832 MT of recycling capacity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {snapshotStats.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                    <p className="text-sm text-slate-500 font-semibold">{item.label}</p>
                    <p className="text-3xl font-extrabold text-slate-950 mt-2">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-white border border-slate-200 p-4 min-h-[320px]">
                <ResponsiveContainer width="100%" height={320}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={2}>
                      {pieData.map((entry, index) => (
                        <Cell key={entry.name} fill={pieColors[index]} stroke="#ffffff" strokeWidth={3} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => value.toLocaleString("en-IN")} />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-center text-sm font-semibold text-slate-900 -mt-2">
                  FY 2023-24 e-waste movement snapshot
                </p>
                <p className="text-center text-xs text-slate-500 pb-2">
                  CPCB figures: 7,98,493 MT collected and 7,68,406 MT recycled
                </p>
              </div>

              <div className="mt-5 rounded-[1.5rem] bg-white border border-slate-200 p-4 min-h-[320px]">
                <ResponsiveContainer width="100%" height={320}>
                  <BarChart data={barData}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(v: number) => formatValue(v)} />
                    <Tooltip formatter={(value: number) => formatValue(value)} />
                    <Bar dataKey="value" radius={[14, 14, 0, 0]}>
                      {barData.map((entry, index) => (
                        <Cell key={entry.name} fill={["rgba(90,195,97,0.9)", "rgba(30,41,59,0.9)", "rgba(148,163,184,0.9)"][index]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-center text-sm font-semibold text-slate-900">
                  FY 2023-24 generation vs movement
                </p>
              </div>
              <p className="mt-4 text-xs text-slate-500 leading-6">
                The chart is intended to visualize the official FY 2023-24 generation, collection, and recycling base alongside the formal processing gap.
              </p>
            </div>
          </motion.section>

          <motion.section
           initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }} 
          className="pb-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Case study</h2>
                <div className="mt-5 text-slate-700 leading-8 space-y-4">
                  <p>
                    A recycling client wanted to launch quickly, but the approval file and plant layout were not aligned.
                    After the approval sequence was rebuilt around the actual site, the project became easier to file and easier to defend during inspection.
                  </p>
                  <p>
                    The main improvement was not only speed. It was clarity: the client could see how each approval affected design, safety, and commissioning.
                  </p>
                </div>
              </article>

              <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Final thoughts</h2>
                <div className="mt-5 text-slate-700 leading-8 space-y-4">
                  <p>
                    An e-waste recycling plant becomes a strong business only when compliance, design, and operations work together.
                    Approvals are not paperwork to be finished at the end. They are the backbone of a stable, scalable, and trusted recycling unit.
                  </p>
                  <p className="font-semibold text-slate-900 text-center">&ldquo;Strong approvals build stronger recycling businesses.&rdquo;</p>
                  <div className="flex justify-center pt-2">
                    <a
                      href="https://eprnexuss.com/contactus"
                      className={`inline-flex items-center justify-center rounded-full bg-brandGreen px-6 py-3 text-white font-semibold ${SOFT_SHADOW} transition hover:opacity-95`}
                    >
                      Talk to Our Team
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </motion.section>

          <motion.section 
          initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="pb-10">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 space-y-4">
                {faqs.map((item) => (
                  <details
                    key={item.q}
                    className="rounded-2xl p-5 border border-slate-400/20 bg-white [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="cursor-pointer font-semibold text-slate-950 list-none">{item.q}</summary>
                    <p className="mt-3 text-slate-600 leading-7">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </motion.section>

          <footer className="pb-8">
            <div className="rounded-[2rem] bg-slate-950 text-white px-6 py-6 md:px-8 md:py-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="font-display text-xl font-bold">
                    EPR Electronics Credit : The Complete Registration Approvals &amp; Regulatory Compliances Roadmap
                  </p>
                  <p className="text-slate-300 mt-2">
                    A practical compliance guide for e-waste recycling plants, project planning, and approvals.
                  </p>
                </div>
                <div className="text-sm text-slate-400">Built with brandGreen-led styling and mobile-first layout.</div>
              </div>
            </div>
          </footer>
        </div>

        <aside
          className="hidden lg:block w-[280px] flex-shrink-0 self-start"
          style={{ position: "sticky", top: "5.5rem" }}
        >
          <StickyContactForm />
        </aside>
      </div>
    </main>
  );
}