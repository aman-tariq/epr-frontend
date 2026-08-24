"use client";

import Seo from "@/components/Seo";
import React from "react";
import StickyContactForm from "@/components/StickyContactForm";
import {motion} from "framer-motion"

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

const UsingDataToImprovePlantEfficiency: React.FC = () => {
  return (
    // Base light background with strong dark slate body copy for readability
    <div className="min-h-screen mt-[80px] bg-[#f8fafc] text-[#1e293b] font-sans">
      <div className="flex flex-col lg:flex-row gap-2 items-stretch max-w-8xl mx-0 p-4 md:p-6">
        
        {/* Main Content Column */}
        <div className="flex-1 min-w-0">
          <Seo
            title="Using Data to Track and Improve Plant Efficiency"
            description="Learn how data-driven insights help track and improve plant efficiency through KPI monitoring, predictive analytics, real-time reporting, process optimization, and continuous performance improvement."
            keywords={[
              "Plant Efficiency",
              "Data-Driven Manufacturing",
              "Plant Performance",
              "Industrial Analytics",
              "Manufacturing Data",
              "Operational Efficiency",
              "KPI Tracking",
              "Real-Time Monitoring",
              "Plant Operation Intelligence",
              "Process Optimization",
              "Manufacturing Analytics",
              "Performance Monitoring",
              "Industrial Automation",
              "Continuous Improvement",
              "Smart Manufacturing",
              "How to improve plant efficiency using data?",
              "How to measure plant performance?",
              "Benefits of data analytics in manufacturing",
              "How to track manufacturing KPIs?",
              "Real-time data for industrial operations",
              "How to reduce production inefficiencies?",
              "Plant performance monitoring guide",
              "Data-driven operational excellence",
              "Manufacturing process optimization",
              "Plant efficiency improvement strategies",
            ]}
            url="https://eprnexuss.com/blog/using-data-to-improve-plant-efficiency"
            type="article"
          />

          <div className="max-w-8xl mx-auto py-6">
            
            {/* HERO — Built with an organic light gradient mesh mixing green/blue tones */}
            <Reveal delay={0.05}> <section  className="relative overflow-hidden rounded-[32px] p-6 md:p-12 border border-blue-200 shadow-xs bg-white"
              style={{
                background: 'linear-gradient(135deg, rgba(240,253,244,0.95), rgba(219,234,254,0.70)), #ffffff'
              }}>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-300 rounded-full opacity-20 blur-3xl" />
              <div className="absolute -left-10 -top-10 w-60 h-60 bg-sky-300 rounded-full opacity-25 blur-3xl" />

              <div className="grid md:grid-cols-5 gap-2 items-center relative z-10">
                <div className="md:col-span-3">
                  <div className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full text-xs font-bold tracking-widest mb-6 uppercase shadow-xs">
                    Data-Driven Plant Performance
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900">
                    Using Data to Track and Improve{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                      Plant Efficiency
                    </span>
                  </h1>
                  
                  <p className="mt-6 text-lg md:text-xl font-bold text-slate-800 border-l-4 border-green-500 pl-4 bg-white/60 py-2 rounded-r-xl">
                    Turn plant data into better efficiency, faster decisions, and cleaner margins.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold rounded-2xl shadow-sm transition-all duration-200">
                      Explore Strategies
                    </button>
                    <button className="px-6 py-3.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-2xl shadow-xs transition-colors">
                      View Charts
                    </button>
                  </div>
                </div>

                {/* Live Panel Sidebar Widget using clear status-color tiles */}
                <div className="md:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-4">
                    <div className="text-xs font-bold text-green-800 uppercase tracking-wide mb-1">Current OEE</div>
                    <div className="text-4xl font-black text-green-600">81.4%</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                      <div className="text-xs font-bold text-blue-800 uppercase">Downtime</div>
                      <div className="text-2xl font-black mt-1 text-blue-600">18 min</div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                      <div className="text-xs font-bold text-emerald-800 uppercase">Yield</div>
                      <div className="text-2xl font-black mt-1 text-emerald-600">94.2%</div>
                    </div>
                  </div>
                </div>
              </div>
            </section> </Reveal>

            {/* Why Data Matters Split Column Field */}
            <Reveal delay={0.05}> <section  id="insights" className="mt-12 grid md:grid-cols-1 gap-8">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-xs">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                  Why data is the real efficiency engine
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  A plant usually does not become inefficient overnight. Small issues build up. Data brings those patterns into view.
                </p>
                <ul className="space-y-3">
                  {[
                    { text: "Downtime tracking to identify repeat stoppages", style: "border-l-blue-500 bg-blue-50/50 text-blue-900" },
                    { text: "Throughput to understand actual output", style: "border-l-green-500 bg-green-50/50 text-green-900" },
                    { text: "Yield and scrap rate to reduce waste", style: "border-l-amber-500 bg-amber-50/50 text-amber-900" },
                    { text: "Energy consumption to spot hidden leaks", style: "border-l-purple-500 bg-purple-50/50 text-purple-900" },
                  ].map((li, idx) => (
                    <li key={idx} className={`p-3 border-l-4 rounded-r-xl font-medium text-xs md:text-sm ${li.style}`}>
                      {li.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-blue-100 rounded-3xl p-6 md:p-10 shadow-xs">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                  What data does for the team
                </h2>
                <div className="space-y-4">
                  {[
                    { role: "Operators", text: "can see shift targets instantly", color: "text-blue-700 bg-blue-50 border-blue-100" },
                    { role: "Supervisors", text: "can compare line performance", color: "text-green-700 bg-green-50 border-green-100" },
                    { role: "Maintenance", text: "can prioritize based on impact", color: "text-purple-700 bg-purple-50 border-purple-100" },
                    { role: "Management", text: "can make decisions using numbers", color: "text-orange-700 bg-orange-50 border-orange-100" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <span className={`px-3 py-1.5 rounded-lg font-bold text-xs border uppercase tracking-wider w-28 text-center shrink-0 ${item.color}`}>
                        {item.role}
                      </span>
                      <p className="text-slate-600 text-sm font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section> </Reveal>

            {/* Charts Section Layout */}
            <Reveal delay={0.05}> <section  id="charts" className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 text-center md:text-left">
                Graph view: where efficiency is gained or lost
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Custom Colored Progress Bars */}
                <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs">
                  <h3 className="font-bold text-slate-800 text-base mb-6">Performance Breakdown</h3>
                  <div className="space-y-5">
                    {[
                      { label: "Availability", value: 78, barColor: "from-blue-500 to-blue-600" },
                      { label: "Performance", value: 84, barColor: "from-green-500 to-green-600" },
                      { label: "Quality", value: 91, barColor: "from-emerald-500 to-emerald-600" },
                      { label: "Energy Efficiency", value: 69, barColor: "from-amber-500 to-amber-600" },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <div className="w-36 font-semibold text-slate-700 text-xs md:text-sm">{item.label}</div>
                        <div className="flex-1 h-3.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
                          <div
                            className={`h-full bg-gradient-to-r ${item.barColor} rounded-full`}
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                        <div className="w-12 text-left md:text-right font-mono font-bold text-sm text-slate-800">
                          {item.value}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trend Area Mock */}
                <div className="bg-white border border-blue-100 rounded-3xl p-6 md:p-8 shadow-xs flex flex-col">
                  <h3 className="font-bold text-slate-800 text-base mb-6">Weekly Production Trend</h3>
                  <div className="flex-1 min-h-[180px] bg-gradient-to-br from-blue-50/50 to-green-50/50 border border-blue-100 border-dashed rounded-2xl flex items-center justify-center p-6 text-center text-xs md:text-sm font-semibold text-slate-600">
                    📈 [Interactive Trend Line Chart Area - Production improving over 9 weeks]
                  </div>
                </div>
              </div>
            </section> </Reveal>

            {/* Database Snap Table Frame */}
            <Reveal delay={0.05}> <section  id="database" className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                Database view: sample plant efficiency records
              </h2>
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs md:text-sm min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-50 text-slate-800 border-b border-slate-200 font-bold">
                        <th className="p-4 text-left">Shift</th>
                        <th className="p-4 text-left">Output</th>
                        <th className="p-4 text-left">Downtime</th>
                        <th className="p-4 text-left">Scrap</th>
                        <th className="p-4 text-left">Energy / unit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      {[
                        ["Morning", "1,240", "18 min", "1.8%", "2.4 kWh", "text-blue-700 bg-blue-50/60 border-blue-100"],
                        ["Afternoon", "1,180", "24 min", "2.1%", "2.7 kWh", "text-amber-700 bg-amber-50/60 border-amber-100"],
                        ["Night", "1,315", "12 min", "1.4%", "2.2 kWh", "text-green-700 bg-green-50/60 border-green-100"],
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-bold text-slate-800">{row[0]}</td>
                          <td className="p-4 font-mono font-medium">{row[1]}</td>
                          <td className="p-4"><span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium font-mono text-xs border border-slate-200">{row[2]}</span></td>
                          <td className="p-4 text-xs font-mono font-semibold text-rose-600">{row[3]}</td>
                          <td className="p-4"><span className={`px-2 py-0.5 rounded-md border font-mono font-bold text-xs ${row[5]}`}>{row[4]}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section> </Reveal>

            {/* Case Study Section Grid Layout */}
            <Reveal delay={0.05}> <section  id="case-study" className="mt-12 bg-amber-50/60 border border-amber-200 rounded-3xl p-6 md:p-10 shadow-xs">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-900">
                Case Study: A plant that improved efficiency with simple data habits
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "Before", text: "Downtime recorded late, scrap reviewed only at end of day.", color: "bg-rose-600 text-rose-100" },
                  { label: "Action", text: "Live KPI tracking + daily review of output, quality, and energy.", color: "bg-green-600 text-green-100" },
                  { label: "After", text: "Repeat stoppages dropped, energy became predictable, supervisors responded faster.", color: "bg-blue-600 text-blue-100" }
                ].map((box, i) => (
                  <div key={i} className="bg-white border border-amber-100 rounded-2xl p-5 shadow-xs flex flex-col gap-3">
                    <span className={`px-3 py-1 font-extrabold text-xs rounded-lg tracking-wide w-fit ${box.color}`}>
                      {box.label}
                    </span>
                    <p className="text-slate-700 text-xs md:text-sm font-medium leading-relaxed">
                      {box.text}
                    </p>
                  </div>
                ))}
              </div>
            </section> </Reveal>

            {/* FAQ Accordion Component Segment */}
            <Reveal delay={0.05}> <section  id="faq" className="mt-12 bg-white border border-blue-100 rounded-3xl p-6 md:p-10 shadow-xs">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900">FAQs</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What is the easiest way to start tracking plant efficiency?",
                    a: "Begin with a few practical KPIs: output, downtime, scrap rate, energy consumption.",
                    style: "border-blue-200 bg-blue-50/20"
                  },
                  {
                    q: "Do I need advanced software?",
                    a: "Not always. A clean process, consistent database, and visible dashboard can create strong improvements.",
                    style: "border-green-200 bg-green-50/20"
                  },
                  {
                    q: "Why are graphs important?",
                    a: "Graphs make trends easy to understand at a glance.",
                    style: "border-purple-200 bg-purple-50/20"
                  },
                ].map((item, i) => (
                  <details
                    key={i}
                    className={`border rounded-2xl p-5 group transition-all duration-300 ${item.style}`}
                  >
                    <summary className="font-bold text-slate-800 cursor-pointer text-sm md:text-base flex justify-between items-center outline-none list-none select-none">
                      {item.q}
                      <span className="text-lg font-light text-slate-400 group-open:rotate-45 transition-transform duration-200">
                        ＋
                      </span>
                    </summary>
                    <p className="mt-4 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-200/60 pt-4">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section> </Reveal>

            {/* Bottom Insight Footer tag */}
            <div className="text-center text-slate-400 font-semibold mt-12 py-6 text-xs md:text-sm uppercase tracking-wider bg-slate-100/60 border border-slate-200 rounded-2xl">
              ✨ Data turns operations into measurable, improvable performance.
            </div>
          </div>
        </div>

        {/* Sticky Form Sidebar panel */}
        <aside className="hidden lg:block shrink-0 w-[340px]">
          <div className="sticky top-12 px-1 py-6 bg-white border border-slate-200 rounded-3xl shadow-sm mt-6">
            <StickyContactForm />
          </div>
        </aside>

      </div>
    </div>
  );
};

export default UsingDataToImprovePlantEfficiency;