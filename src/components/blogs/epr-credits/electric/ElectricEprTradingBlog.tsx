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

import { motion } from "framer-motion";



const GLASS =

  "bg-white/80 backdrop-blur-md border border-slate-400/20 shadow-[0_20px_50px_rgba(15,23,42,0.08)]";

const SECTION_CARD =

  "border border-slate-400/25 shadow-[0_18px_40px_rgba(15,23,42,0.06)]";

const CHIP = "border border-brandGreen/25 bg-brandGreen/10";

const CHIP_NEUTRAL = "border border-slate-300 bg-white";

const KPI =

  "border border-brandGreen/20 bg-gradient-to-b from-brandGreen/10 to-white/95";

const SOFT_SHADOW = "shadow-[0_12px_30px_rgba(15,23,42,0.08)]";



const kpis = [

  {

    label: "Commercial focus",

    title: "Scrap sourcing",

    desc: "Buy the right input at the right value and route it into the right process.",

  },

  {

    label: "Execution focus",

    title: "Material grading",

    desc: "Classify material correctly so the plant can recover more value with less friction.",

  },

  {

    label: "Revenue focus",

    title: "Market linkage",

    desc: "Sell recovered products through the right buyer channel at the right time.",

  },

];



const problemFocus = [

  {

    title: "Scrap sourcing",

    desc: "Build a reliable collection network and identify material with real recoverable value.",

  },

  {

    title: "Material grading",

    desc: "Inspect and classify scrap so the commercial value is visible before processing starts.",

  },

  {

    title: "Market linkage",

    desc: "Connect recovered outputs to the right trader, recycler, or industrial buyer.",

  },

  {

    title: "Sales planning",

    desc: "Plan pricing, dispatch, and payment flow so sales stay smooth and repeatable.",

  },

];



const cycleSteps = [

  {

    title: "1. Source the scrap",

    desc: "We help clients identify where e-waste scrap can come from and how to build a reliable collection network.",

  },

  {

    title: "2. Check quality",

    desc: "Scrap is inspected, sorted, and grouped so the client knows what has real value and what needs treatment.",

  },

  {

    title: "3. Find the right buyer",

    desc: "Recovered products and recyclable fractions are matched with the right market, trader, or industrial buyer.",

  },

  {

    title: "4. Close the deal",

    desc: "Pricing, dispatch, documentation, and payment flow are planned so the transaction stays smooth and clear.",

  },

];



const requirements = [

  {

    title: "Supplier network",

    desc: "A steady source of e-waste scrap with predictable collection pathways.",

  },

  {

    title: "Buyer map",

    desc: "A list of traders, recyclers, and industrial buyers matched to each product stream.",

  },

  {

    title: "Rate benchmarks",

    desc: "A pricing view that reflects purity, quantity, and current demand conditions.",

  },

  {

    title: "Movement plan",

    desc: "Transport, dispatch, and payment coordination for smoother transactions.",

  },

];



const pitfalls = [

  {

    title: "Buying without grading",

    desc: "Weak input quality makes value recovery harder downstream.",

  },

  {

    title: "Selling without buyer fit",

    desc: "The wrong buyer slows sales and weakens pricing confidence.",

  },

  {

    title: "Ignoring inventory timing",

    desc: "Stock left too long can trap working capital and reduce flexibility.",

  },

  {

    title: "No movement planning",

    desc: "Poor dispatch and payment flow can create avoidable friction.",

  },

];



const roadmaps = [

  {

    title: "1. Source",

    desc: "Build the input network and confirm how scrap will enter the plant.",

  },

  {

    title: "2. Grade",

    desc: "Inspect, sort, and group material for accurate commercial decisions.",

  },

  {

    title: "3. Match",

    desc: "Connect each recovered product to the most suitable market channel.",

  },

  {

    title: "4. Execute",

    desc: "Plan pricing, dispatch, and payment to make sales repeatable.",

  },

];



const analysisStats = [

  {

    label: "Generated e-waste",

    value: "1.77 Mn MT",

    desc: "India's e-waste generation in FY 2023-24, as reported in CPCB summaries cited by national reporting.",

  },

  {

    label: "Collected",

    value: "7,98,493 MT",

    desc: "Material collected through formal systems in FY 2023-24.",

  },

  {

    label: "Recycled",

    value: "7,68,406 MT",

    desc: "Material recycled in FY 2023-24 through registered channels.",

  },

  {

    label: "Registered recyclers",

    value: "295",

    desc: "Registered as of 10-12-2024 in the cited CPCB report summary.",

  },

];



const focusAreas = [

  {

    title: "How scrap grading affects pricing",

    desc: "Even small differences in purity, cleanliness, or separation can change the final sale price.",

  },

  {

    title: "Why buyer mapping is important",

    desc: "The right buyer improves pricing, speed of closure, and trust in future deals.",

  },

  {

    title: "How inventory control helps sales",

    desc: "When stock is tracked properly, the client knows what is ready, what is pending, and what should be sold first.",

  },

  {

    title: "Why market timing matters",

    desc: "The same scrap can perform differently depending on demand, so timing can support a better margin and smoother movement.",

  },

];



const snapshotStats = [

  { label: "Generated (2023-24)", value: "1.751 Mn MT" },

  { label: "Authorized processing", value: "43%" },

  { label: "Uncaptured gap", value: "57%" },

];



const faqs = [

  {

    q: "Why does buying strategy matter in e-waste recycling?",

    a: "It determines input quality, processing efficiency, and the value that can be recovered later in the sales cycle.",

  },

  {

    q: "What is the most important factor in scrap grading?",

    a: "Consistent classification. Even small differences in quality, purity, and separation can change the final value significantly.",

  },

  {

    q: "How does market linkage help a plant?",

    a: "It connects the recovered product to the most suitable buyer group, improving price confidence and transaction speed.",

  },

  {

    q: "What makes sales planning useful?",

    a: "It creates order in pricing, dispatch, documentation, and payment flow so sales become repeatable and easier to scale.",

  },

  {

    q: "Can this structure be used for a project proposal?",

    a: "Yes. The page is designed to work as a blog, planning document, and commercial explanation for a recycling business audience.",

  },

];



const pieData = [

  { name: "Collected", value: 798493 },

  { name: "Recycled", value: 768406 },

  { name: "Unrecycled gap", value: 30087 },

];

const pieColors = ["#5AC361", "#1e293b", "#cbd5e1"];



const barData = [

  { name: "Generated", value: 1751000 },

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

      className={`inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:scale-[1.03] ${className}`}

    >

      {children}

      <span aria-hidden="true">→</span>

    </a>

  );

}



export default function ElectricEprTradingBlog() {

  return (

    <main className="min-h-screen w-full mt-[90px] bg-gradient-to-b from-slate-50 to-[#edf7ef]">

      <div className="flex flex-col lg:flex-row lg:gap-2 lg:items-start px-0 pt-8 pb-10">

        <div className="flex-1 min-w-0 w-8xl">

          <motion.header

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true, amount: 0.2 }}

            transition={{ duration: 0.6, ease: "easeOut" }}

            className={`${GLASS} rounded-[2rem] overflow-hidden`}

          >

            <div className="p-6 md:p-10 lg:p-14">

              <div className="flex flex-wrap items-center gap-3 mb-6 justify-center">

                <span

                  className={`${CHIP} text-brandGreen font-semibold px-4 py-2 rounded-full text-sm`}

                >

                  E-Waste Recycling

                </span>

                <span

                  className={`${CHIP_NEUTRAL} text-slate-700 font-semibold px-4 py-2 rounded-full text-sm`}

                >

                  Credit Trading

                </span>

                <span

                  className={`${CHIP_NEUTRAL} text-slate-700 font-semibold px-4 py-2 rounded-full text-sm`}

                >

                  Marketplace Strategy

                </span>

              </div>



              <div className="max-w-4xl mx-auto text-center">

                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-tight">

                  EPR Electronics Credit : Credit Trading and Market Place

                  Stretegy Guide

                </h1>

                <p className="mt-5 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-8">

                  A practical guide to e-waste recycling, credit trading,

                  buying and selling scrap, and building a stronger market

                  strategy for electronics recycling businesses.

                </p>



                <div className="mt-8 flex justify-center">

                  <MarketplaceButton>

                    Explore EPR Electronics Marketplace

                  </MarketplaceButton>

                </div>



                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

                  {kpis.map((item) => (

                    <div

                      key={item.title}

                      className={`${KPI} rounded-2xl p-5 text-left`}

                    >

                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500 font-semibold">

                        {item.label}

                      </p>

                      <h3 className="mt-2 text-xl font-bold text-slate-950">

                        {item.title}

                      </h3>

                      <p className="mt-2 text-sm text-slate-600 leading-6">

                        {item.desc}

                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </motion.header>



          {/* Existing page sections remain unchanged here */}

          {/* Marketplace CTA 2 can be placed after the main buying/selling cycle section */}

          <Reveal delay={0.05}>

            <section className="py-8">

              <div className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                  <div>

                    <p className="text-sm font-semibold text-brandGreen uppercase tracking-wide">

                      EPR Credit Trading

                    </p>

                    <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-slate-950">

                      Buy & Sell EPR Electronics Credits

                    </h2>

                    <p className="mt-2 text-slate-600 leading-7">

                      Explore available EPR electronics credits and connect your

                      compliance requirements with the right market opportunity.

                    </p>

                  </div>



                  <div className="flex-shrink-0">

                    <MarketplaceButton>

                      Buy & Sell Electronics Credits

                    </MarketplaceButton>

                  </div>

                </div>

              </div>

            </section>

          </Reveal>



          {/* Keep all your original sections between the CTAs exactly as they were */}



          <Reveal delay={0.05}>

            <section className="pb-8">

              <div

                className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}

              >

                <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">

                  Real-world data snapshot

                </h2>

                <p className="mt-4 text-center text-slate-600 leading-7 max-w-4xl mx-auto">

                  India generated around 1.751 million metric tonnes of e-waste

                  in 2023-24, and about 43% was processed through authorized

                  channels, according to a recent academic summary drawing on

                  current Indian e-waste reporting.

                </p>



                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

                  {snapshotStats.map((item) => (

                    <div

                      key={item.label}

                      className="rounded-2xl bg-white border border-slate-200 p-5"

                    >

                      <p className="text-sm text-slate-500 font-semibold">

                        {item.label}

                      </p>

                      <p className="text-3xl font-extrabold text-slate-950 mt-2">

                        {item.value}

                      </p>

                    </div>

                  ))}

                </div>



                <div className="mt-6 rounded-[1.5rem] bg-white border border-slate-200 p-2 min-h-[320px]">

                  <ResponsiveContainer width="100%" height={320}>

                    <PieChart>

                      <Pie

                        data={pieData}

                        dataKey="value"

                        nameKey="name"

                        innerRadius={70}

                        outerRadius={110}

                        paddingAngle={2}

                      >

                        {pieData.map((entry, index) => (

                          <Cell

                            key={entry.name}

                            fill={pieColors[index]}

                            stroke="#ffffff"

                            strokeWidth={3}

                          />

                        ))}

                      </Pie>

                      <Tooltip

                        formatter={(value: number) =>

                          value.toLocaleString("en-IN")

                        }

                      />

                    </PieChart>

                  </ResponsiveContainer>

                  <p className="text-center text-sm font-semibold text-slate-900 -mt-2">

                    FY 2023-24 e-waste movement snapshot

                  </p>

                  <p className="text-center text-xs text-slate-500 pb-2">

                    Cited Indian e-waste reporting: 7,98,493 MT collected and

                    7,68,406 MT recycled

                  </p>

                </div>



                <div className="mt-5 rounded-[1.5rem] bg-white border border-slate-200 p-4 min-h-[320px]">

                  <ResponsiveContainer width="100%" height={320}>

                    <BarChart data={barData}>

                      <XAxis dataKey="name" axisLine={false} tickLine={false} />

                      <YAxis

                        axisLine={false}

                        tickLine={false}

                        tickFormatter={(v: number) => formatValue(v)}

                        grid-color="rgba(148,163,184,0.18)"

                      />

                      <Tooltip

                        formatter={(value: number) => formatValue(value)}

                      />

                      <Bar dataKey="value" radius={[14, 14, 0, 0]}>

                        {barData.map((entry, index) => (

                          <Cell

                            key={entry.name}

                            fill={

                              [

                                "rgba(90,195,97,0.9)",

                                "rgba(30,41,59,0.9)",

                                "rgba(148,163,184,0.9)",

                              ][index]

                            }

                          />

                        ))}

                      </Bar>

                    </BarChart>

                  </ResponsiveContainer>

                  <p className="text-center text-sm font-semibold text-slate-900">

                    FY 2023-24 generation vs movement

                  </p>

                </div>

              </div>

            </section>

          </Reveal>



          <Reveal delay={0.05}>

            <section className="pb-8">

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                <article

                  className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}

                >

                  <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">

                    Brief case study

                  </h2>

                  <div className="mt-5 text-slate-700 leading-8 space-y-4">

                    <p>

                      A recycling client had strong input volumes but weak sales

                      consistency. The issue was not processing capacity. It was

                      the lack of a clean market route for recovered material.

                    </p>

                    <p>

                      After tightening the grading system, shortlisting buyers

                      by product type, and planning dispatch more carefully, the

                      client moved toward a more stable and repeatable

                      commercial cycle.

                    </p>

                  </div>

                </article>



                <article

                  className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}

                >

                  <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">

                    Turn guidance into compliant action

                  </h2>

                  <div className="mt-5 text-slate-700 leading-8 space-y-4">

                    <p>

                      Use this post as a foundation for your EPR program. Keep a

                      documented chain of custody, partner with authorised

                      recyclers, and maintain transparent CPCB reporting for

                      every waste stream.

                    </p>

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

            </section>

          </Reveal>



          <Reveal delay={0.05}>

            <section className="pb-10">

              <div

                className={`${SECTION_CARD} ${GLASS} rounded-[2rem] p-6 md:p-8`}

              >

                <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">

                  Frequently Asked Questions

                </h2>

                <div className="mt-6 space-y-4">

                  {faqs.map((item) => (

                    <details

                      key={item.q}

                      className="rounded-2xl p-5 border border-slate-400/20 bg-white [&_summary::-webkit-details-marker]:hidden"

                    >

                      <summary className="cursor-pointer font-semibold text-slate-950 list-none">

                        {item.q}

                      </summary>

                      <p className="mt-3 text-slate-600 leading-7">

                        {item.a}

                      </p>

                    </details>

                  ))}

                </div>

              </div>

            </section>

          </Reveal>



          <footer className="pb-8">

            <div className="rounded-[2rem] bg-slate-950 text-white px-6 py-6 md:px-8 md:py-8">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>

                  <p className="font-display text-xl font-bold">

                    EPR Electronics Credit : Credit Trading and Market Place

                    Stretegy Guide

                  </p>

                  <p className="text-slate-300 mt-2">

                    A structured commercial guide for e-waste recycling

                    businesses, buy-sell planning, and market execution.

                  </p>

                </div>
                  
              </div>



              <div className="mt-6 flex justify-center">

                <MarketplaceButton className="bg-secondary text-slate-950 hover:bg-slate-100">

                  Trade EPR Electronics Credits

                </MarketplaceButton>

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