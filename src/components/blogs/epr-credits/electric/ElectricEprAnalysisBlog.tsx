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
const DOT = "w-2.5 h-2.5 rounded-full bg-brandGreen shadow-[0_0_0_6px_rgba(90,195,97,0.12)] flex-shrink-0";
const TABLE_TD = "px-4 py-4 bg-white first:rounded-l-2xl last:rounded-r-2xl";
const TABLE_TH = "text-left text-sm text-slate-500 px-4 py-2";

const kpis = [
  {
    label: "Core focus",
    title: "Market analysis",
    desc: "Understand who supplies waste, who buys output, and where growth sits.",
  },
  {
    label: "Commercial focus",
    title: "Target segments",
    desc: "Align waste sources, buyer categories, and pricing strategy.",
  },
  {
    label: "Execution focus",
    title: "Growth planning",
    desc: "Use market logic to plan capacity, sales, and expansion.",
  },
];

const roadmaps = [
  { title: "1. Study waste sources", desc: "Identify where e-waste comes from, how often it appears, and how stable the supply can be." },
  { title: "2. Map target buyers", desc: "Study who will buy the recovered material and which industries are active in that space." },
  { title: "3. Check value segments", desc: "Separate high-value segments from low-value ones so the client knows where the best opportunity lies." },
  { title: "4. Plan the business model", desc: "Connect market demand, plant capacity, and product sales into one practical plan." },
];

const requirements = [
  "Reliable data on waste generation, regional supply, and collection radius.",
  "Buyer mapping by product fraction, industry, and commercial channel.",
  "Price logic that accounts for purity, demand, and transport cost.",
  "Approval and compliance alignment with the intended operating model.",
];

const journeySteps = [
  { title: "Study waste sources", desc: "Identify where e-waste comes from, how often it appears, and how stable the supply can be." },
  { title: "Map target buyers", desc: "Study who will buy the recovered material and which industries are active in that space." },
  { title: "Check value segments", desc: "Separate high-value segments from low-value ones so the client knows where the best opportunity lies." },
  { title: "Plan the business model", desc: "Connect market demand, plant capacity, and product sales into one practical plan." },
];

const segmentsTable = [
  { segment: "Bulk waste generators", provide: "Office, institutional, and corporate e-waste", why: "Stable source of regular scrap supply" },
  { segment: "Aggregators", provide: "Collected mixed scrap from local networks", why: "Useful for building input volume quickly" },
  { segment: "Traders / dealers", provide: "Buy and sell scrap fractions", why: "Help move material faster in the market" },
  { segment: "Downstream recyclers", provide: "Buy recovered metals and usable fractions", why: "Important for product sales and revenue" },
  { segment: "Manufacturing buyers", provide: "May use recycled raw material", why: "Create better value for clean output" },
  { segment: "Institutional clients", provide: "Need compliant disposal support", why: "Support long-term service-based business" },
];

const readinessTracker = [
  { title: "Supply availability", desc: "How often material comes in and how reliable the source is." },
  { title: "Buyer demand", desc: "How strong the market is for recovered output and recycled fractions." },
  { title: "Price stability", desc: "Whether the segment gives steady pricing or moves sharply with demand." },
  { title: "Compliance fit", desc: "Whether the segment works smoothly with the plant's approval and operating model." },
];

const clientExplainer = [
  { title: "Input side", desc: "We explain where the waste will come from, how regular it can be, and what kind of volume the plant can expect." },
  { title: "Output side", desc: "We identify who will buy the recovered material and which product fractions are most useful in the market." },
  { title: "Commercial side", desc: "We connect supply, processing, and sales so the client can see the full business cycle in one clear picture." },
  { title: "Growth side", desc: "We show where the plant can expand later once the first market segment starts performing well." },
];

const marketStudyEssentials = [
  { title: "Why location matters", desc: "The location of the plant affects collection cost, transport speed, buyer access, and the overall business reach." },
  { title: "Why product quality matters", desc: "The cleaner and better-separated the output is, the easier it becomes to sell and the better the price can be." },
  { title: "Why competition matters", desc: "A good market analysis shows not just who is present, but where the opportunity is still open." },
  { title: "Why long-term demand matters", desc: "A good segment is not just active today. It should remain useful for the future of the plant as well." },
];

const snapshotStats = [
  { label: "Generated", value: "1.751 Mn MT" },
  { label: "Authorized processing", value: "43%" },
  { label: "Market gap", value: "57%" },
];

const faqs = [
  { q: "Why is market analysis important before setting up a plant?", a: "It shows whether the business has real demand, available supply, and a practical route to growth before capital is committed." },
  { q: "Which segments are most relevant in e-waste recycling?", a: "Bulk waste generators, aggregators, traders, downstream recyclers, manufacturing buyers, and institutional clients are all relevant depending on the business model." },
  { q: "How does the market gap affect opportunity?", a: "When formal processing does not capture the full waste flow, a well-positioned plant can win by improving sourcing, quality, and buyer linkage." },
  { q: "What makes a growth plan more credible?", a: "Credible growth plans are built on actual waste sources, measurable buyer demand, and a segment strategy that matches the plant's capacity." },
];

const pieData = [
  { name: "Authorized processing", value: 43 },
  { name: "Remaining market gap", value: 57 },
];
const pieColors = ["#5AC361", "#1e293b"];

const barData = [
  { name: "Generated", value: 100 },
  { name: "Authorized", value: 43 },
  { name: "Remaining gap", value: 57 },
];
const barColors = ["rgba(30,41,59,0.9)", "rgba(90,195,97,0.9)", "rgba(148,163,184,0.9)"];

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

export default function ElectricEprAnalysisBlog() {
  return (
    <main className="min-h-screen w-full mt-[90px] bg-gradient-to-b from-slate-50 to-[#eef7ef]">
      <div className="flex flex-col lg:flex-row lg:gap-2 lg:items-start px-0 pt-8 pb-10">
        <div className="flex-1 min-w-0 w-8xl">
  
            <header className={`${GLASS} rounded-[2rem] overflow-hidden`}>
              <motion.div
               initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-6 md:p-10 lg:p-14">
                <div className="flex flex-wrap items-center gap-3 justify-center mb-6">
                  <span className={`${CHIP} text-brandGreen font-semibold px-4 py-2 rounded-full text-sm`}>
                    Market Intelligence
                  </span>
                  <span className={`${CHIP_NEUTRAL} text-slate-700 font-semibold px-4 py-2 rounded-full text-sm`}>
                    Target Segments
                  </span>
                  <span className={`${CHIP_NEUTRAL} text-slate-700 font-semibold px-4 py-2 rounded-full text-sm`}>
                    Growth Opportunities
                  </span>
                </div>

                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-tight">
                    EPR Electronics Credit : Strategic Market Intelligence Growth Opportunities
                  </h1>
                  <p className="mt-5 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-8">
                    Know the market, and the market starts working for you.
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
             <Reveal><section className="pt-8 pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                  <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Introduction</h2>
                  <div className="mt-5 text-slate-700 leading-8 space-y-4">
                    <p>
                      Market Analysis and Target Market Segments in E-Waste Recycling Plant. Know the market, and the market starts working for you.
                    </p>
                    <p>
                      A strong e-waste recycling plant is not built only on machines and approvals. It also needs a clear understanding of who will supply the waste, who will buy the output, and which market segments give the best opportunity for growth.
                    </p>
                  </div>
                </article>

                <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                  <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Problem</h2>
                  <div className="mt-5 text-slate-700 leading-8 space-y-4">
                    <p>
                      Many projects begin with capacity and equipment discussions but do not first map the real market.
                      That creates a gap between what the plant can process and what the market can absorb.
                    </p>
                    <p>
                      When supply, buyers, and pricing are not understood early, the project can face slow sales, weak expansion logic, and avoidable commercial risk.
                    </p>
                  </div>
                </article>
              </div>
            </section></Reveal>     
            

                  <Reveal delay={0.05}>
                    <section className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Solution</h2>
              <p className="mt-5 text-slate-700 leading-8 max-w-5xl mx-auto text-center">
                Build the project around market intelligence: identify supply sources, target the right buyers, match product quality to demand, and convert segment data into a practical business plan. That makes growth more deliberate and less dependent on guesswork.
              </p>
            </div>
          </section>
                  </Reveal>
          
                  <Reveal delay={0.05}>
                  <section className="pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Roadmaps</h2>
                <div className="mt-5 grid grid-cols-1 gap-4">
                  {roadmaps.map((item) => (
                    <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5">
                      <p className="font-bold text-slate-950">{item.title}</p>
                      <p className="mt-2 text-slate-600 leading-7">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Requirements</h2>
                <ul className="mt-5 space-y-3 text-slate-700 leading-7">
                  {requirements.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className={`${DOT} mt-2`}></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
                  </Reveal>
          
                <Reveal delay={0.05}>
                  <section className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Why market analysis matters</h2>
              <div className="mt-5 text-slate-700 leading-8 space-y-4">
                <p>
                  Market analysis gives the client a real picture of the business environment. It helps answer important questions such as: Is there enough material available? Who are the major buyers? Which segment offers the best value? How fast can the business grow?
                </p>
                <p>
                  In an e-waste recycling plant, the business does not depend on one single customer type. It depends on a mix of scrap generators, bulk suppliers, aggregators, traders, manufacturers, and downstream buyers.
                </p>
                <p>
                  When these segments are understood properly, the client can plan capacity, collection, sales, pricing, and expansion with much more confidence.
                </p>
              </div>
            </div>
          </section>
                  </Reveal>   
          
                  <Reveal delay={0.05}>
                  <section className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                The market journey in simple steps
              </h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {journeySteps.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5">
                    <p className="font-bold text-slate-950 text-center">{item.title}</p>
                    <p className="mt-3 text-slate-600 leading-7 text-center">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
                  </Reveal>
                

                <Reveal delay={0.05}>
                  <section className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                Target market segments in e-waste recycling
              </h2>
              <p className="mt-4 text-center text-slate-600 leading-7 max-w-4xl mx-auto">
                A recycling plant usually serves more than one market segment. The real strength of the business comes from identifying the right group and serving it well.
              </p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[900px] border-separate border-spacing-y-3">
                  <thead>
                    <tr>
                      <th className={TABLE_TH}>Target segment</th>
                      <th className={TABLE_TH}>What they provide or buy</th>
                      <th className={TABLE_TH}>Why they matter</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    {segmentsTable.map((row) => (
                      <tr key={row.segment}>
                        <td className={`${TABLE_TD} font-semibold text-slate-950`}>{row.segment}</td>
                        <td className={TABLE_TD}>{row.provide}</td>
                        <td className={TABLE_TD}>{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
                </Reveal>
          
                    <Reveal delay={0.05}>
                     <section className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                Database view: segment readiness tracker
              </h2>
              <p className="mt-4 text-center text-slate-600 leading-7 max-w-4xl mx-auto">
                A simple database helps the client see which segment is ready to support the project and which one needs more work.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {readinessTracker.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5">
                    <p className="font-bold text-slate-950 text-center">{item.title}</p>
                    <p className="mt-3 text-slate-600 leading-7 text-center">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
                    </Reveal>
         
                <Reveal delay={0.05}>
                <section className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                How we explain the target market to clients
              </h2>
              <p className="mt-4 text-center text-slate-600 leading-7 max-w-4xl mx-auto">
                Many clients want the business to grow quickly, but growth works better when the right segment is chosen first.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {clientExplainer.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5">
                    <p className="font-bold text-slate-950 text-center">{item.title}</p>
                    <p className="mt-3 text-slate-600 leading-7 text-center">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
                </Reveal>
          
                <Reveal delay={0.05}>
                <section className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Market study essentials</h2>
              <p className="mt-4 text-center text-slate-600 leading-7 max-w-4xl mx-auto">
                To make the blog more complete, it helps to explain a few practical points beyond the basic segment list.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {marketStudyEssentials.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5">
                    <p className="font-bold text-slate-950 text-center">{item.title}</p>
                    <p className="mt-3 text-slate-600 leading-7 text-center">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
                </Reveal>
          
                <Reveal delay={0.05}>
                     <section className="pb-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                  Why this market analysis matters commercially
                </h2>
                <div className="mt-5 text-slate-700 leading-8 space-y-4">
                  <p>
                    A market analysis is not only about counting volumes. It helps build a business model that is realistic, bankable, and scalable.
                  </p>
                  <p>
                    When supply, demand, pricing, and compliance are studied together, the project becomes easier to position and easier to defend.
                  </p>
                </div>
              </article>

              <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                  Real-world data snapshot
                </h2>
                <div className="mt-5 text-slate-700 leading-8 space-y-4">
                  <p className="text-center">
                    India generated around 1.751 million metric tonnes of e-waste in 2023-24, with about 43% processed through authorized channels.
                  </p>
                  <p className="text-center">
                    This is enough to justify a focused market strategy because the formal system does not capture the entire flow.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {snapshotStats.map((item) => (
                    <div key={item.label} className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                      <p className="text-sm text-slate-500 font-semibold">{item.label}</p>
                      <p className="mt-2 text-2xl font-extrabold text-slate-950">{item.value}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>
                </Reveal>

                <Reveal delay={0.05}>
                  <section className="pb-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                  Why this market analysis matters commercially
                </h2>
                <div className="mt-5 text-slate-700 leading-8 space-y-4">
                  <p>
                    A market analysis is not only about counting volumes. It helps build a business model that is realistic, bankable, and scalable.
                  </p>
                  <p>
                    When supply, demand, pricing, and compliance are studied together, the project becomes easier to position and easier to defend.
                  </p>
                </div>
              </article>

              <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                  Real-world data snapshot
                </h2>
                <div className="mt-5 text-slate-700 leading-8 space-y-4">
                  <p className="text-center">
                    India generated around 1.751 million metric tonnes of e-waste in 2023-24, with about 43% processed through authorized channels.
                  </p>
                  <p className="text-center">
                    This is enough to justify a focused market strategy because the formal system does not capture the entire flow.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {snapshotStats.map((item) => (
                    <div key={item.label} className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                      <p className="text-sm text-slate-500 font-semibold">{item.label}</p>
                      <p className="mt-2 text-2xl font-extrabold text-slate-950">{item.value}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>
                </Reveal>
          
                  <Reveal delay={0.05}>
                  <section className="pb-8">
            <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Dynamic pie graph</h2>
              <p className="mt-4 text-center text-slate-600 leading-7 max-w-4xl mx-auto">
                The chart below shows how much of the e-waste flow reaches authorized processing versus the remaining market gap.
              </p>
              <div className="mt-6 rounded-[1.5rem] bg-white border border-slate-200 p-4 min-h-[320px]">
                <ResponsiveContainer width="100%" height={320}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={2}>
                      {pieData.map((entry, index) => (
                        <Cell key={entry.name} fill={pieColors[index]} stroke="#ffffff" strokeWidth={3} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-center text-sm font-semibold text-slate-900 -mt-2">
                  Authorized vs remaining market flow
                </p>
                <p className="text-center text-xs text-slate-500 pb-2">
                  Based on 1.751 Mn MT generated and ~43% authorized processing
                </p>
              </div>
              <div className="mt-5 rounded-[1.5rem] bg-white border border-slate-200 p-4 min-h-[320px]">
                <ResponsiveContainer width="100%" height={320}>
                  <BarChart data={barData}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      domain={[0, 100]}
                      tickFormatter={(v: number) => `${v}%`}
                    />
                    <Tooltip formatter={(value: number) => `${value}%`} />
                    <Bar dataKey="value" radius={[14, 14, 0, 0]}>
                      {barData.map((entry, index) => (
                        <Cell key={entry.name} fill={barColors[index]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-center text-sm font-semibold text-slate-900">Market flow in percentage terms</p>
              </div>
            </div>
          </section>
                  </Reveal>
          
                      <Reveal delay={0.05}>
                         <section className="pb-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Case study</h2>
                <div className="mt-5 text-slate-700 leading-8 space-y-4">
                  <p>
                    A new client wanted to enter the e-waste recycling business but was unsure whether to focus on scrap collection, product recovery, or trading recovered fractions.
                  </p>
                  <p>
                    We studied supply sources, buyer demand, material quality, and pricing patterns. Then we identified the segments with the best practical fit.
                  </p>
                  <p>
                    The client moved forward with a clearer business model, stronger confidence, and a plan that matched real market conditions instead of assumptions.
                  </p>
                </div>
              </article>

              <article className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>
                <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                  Turn guidance into compliant action
                </h2>
                <div className="mt-5 text-slate-700 leading-8 space-y-4">
                  <p>
                    Use this post as a foundation for your EPR program. Keep a documented chain of custody, partner with authorised recyclers, and maintain transparent CPCB reporting for every waste stream.
                  </p>
                </div>
              </article>
            </div>
          </section>
                      </Reveal>
         
                      <Reveal delay={0.05}>
                      <section className="pb-10">
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
          </section>
                      </Reveal>
          
                <Reveal delay={0.05}>
                <footer className="pb-8">
            <div className="rounded-[2rem] bg-slate-950 text-white px-6 py-6 md:px-8 md:py-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="font-display text-xl font-bold">
                    EPR Electronics Credit : Strategic Market Intelligence Growth Opportunities
                  </p>
                  <p className="text-slate-300 mt-2">
                    Market-first content for e-waste recycling, target segment planning, and EPR growth strategy.
                  </p>
                </div>
                <div className="text-sm text-slate-400">Built with brandGreen-led styling and mobile-first layout.</div>
              </div>
            </div>
          </footer>
                </Reveal>
          
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