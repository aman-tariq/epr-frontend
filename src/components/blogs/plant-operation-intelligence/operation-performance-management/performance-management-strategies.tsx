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

const PerformanceManagementStrategies: React.FC = () => {
  return (
    // Outer canvas using a soft modern slate-light background instead of deep dark mode
    <div className="min-h-screen mt-[80px] bg-[#f8fafc] text-[#1e293b] font-sans">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-[1440px] mx-auto p-4 md:p-6">
        
        {/* MAIN CONTENT FIELD */}
        <div className="flex-1 min-w-0">
          <Seo
            title="Key Performance Management Strategies for Modern Plant Operations"
            description="Discover proven performance management strategies for modern plant operations. Learn how KPIs, process optimization, predictive maintenance, data analytics, and continuous improvement drive operational excellence and productivity."
            keywords={[
              "Performance Management Strategies",
              "Plant Operations",
              "Plant Performance Management",
              "Operational Excellence",
              "Manufacturing Performance",
              "Industrial Operations",
              "Key Performance Indicators",
              "Process Optimization",
              "Plant Productivity",
              "Operational Efficiency",
              "Predictive Maintenance",
              "Continuous Improvement",
              "Industrial Automation",
              "Lean Manufacturing",
              "Performance Analytics",
              "How to improve plant performance?",
              "Best performance management strategies for manufacturing",
              "How to optimize plant operations?",
              "How to increase manufacturing productivity?",
              "Plant operations best practices",
              "How to measure operational performance?",
              "Performance management framework for plants",
              "Industrial performance improvement strategies",
              "Manufacturing operations management guide",
              "Plant performance strategies 2026",
            ]}
            url="https://eprnexuss.com/blog/performance-management-strategies"
            type="article"
          />

          <div className="max-w-[1180px] mx-auto py-6">
            
            {/* HERO — Revamped with a light green/blue mesh gradient profile layout */}
            <Reveal delay={0.05}> <section className="hero-card border border-blue-200 rounded-[32px] overflow-hidden shadow-xs bg-white relative"
              style={{
                background: 'linear-gradient(135deg, rgba(240,253,244,0.9), rgba(219,234,254,0.6)), #ffffff'
              }}>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-300 rounded-full opacity-20 blur-3xl" />
              <div className="absolute -left-10 -top-10 w-60 h-60 bg-sky-300 rounded-full opacity-25 blur-3xl" />

              <div className="hero-inner grid gap-8 p-6 md:p-12 relative z-10">
                <div>
                  <div className="eyebrow text-xs md:text-sm font-bold tracking-wider uppercase text-blue-800">
                    Modern Plant Operations{" "}
                    <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 border border-amber-200 rounded-md text-xs font-semibold ml-1">
                      Performance Blog
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mt-4 text-slate-900">
                    Key Performance Management Strategies for{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                      Modern Plant Operations
                    </span>
                  </h1>
                  
                  <p className="punch text-lg md:text-xl font-bold mt-6 text-slate-800 border-l-4 border-green-500 pl-4 bg-white/60 py-2 rounded-r-xl">
                    Turn daily plant activity into measurable wins — faster decisions, fewer delays, tighter control, and stronger output.
                  </p>
                  
                  <p className="text-slate-600 mt-4 text-base leading-relaxed max-w-3xl">
                    The strongest teams use real-time visibility, clear KPIs, and simple action routines to keep production stable, quality high, and downtime low.
                  </p>

                  <div className="chip-row flex flex-wrap gap-2 mt-8">
                    {[
                      { txt: "Real-time visibility", color: "bg-blue-50 text-blue-700 border-blue-200" },
                      { txt: "OEE and throughput", color: "bg-green-50 text-green-700 border-green-200" },
                      { txt: "Downtime control", color: "bg-amber-50 text-amber-700 border-amber-200" },
                      { txt: "Quality assurance", color: "bg-purple-50 text-purple-700 border-purple-200" },
                      { txt: "Data-led decisions", color: "bg-cyan-50 text-cyan-700 border-cyan-200" },
                    ].map((chip, i) => (
                      <span
                        key={i}
                        className={`chip px-4 py-1.5 border rounded-full text-xs font-bold shadow-xs ${chip.color}`}
                      >
                        {chip.txt}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Matrix using distinct brand color border tiles */}
                <div className="hero-metrics grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {[
                    { num: "24/7", label: "Operational monitoring", desc: "Keep a live pulse on plant activity", border: "border-blue-200 bg-blue-50/30", text: "text-blue-600" },
                    { num: "+18%", label: "Typical efficiency gain", desc: "From disciplined KPI tracking", border: "border-green-200 bg-green-50/30", text: "text-green-600" },
                    { num: "-30%", label: "Reduced downtime risk", desc: "Prevent small stoppages", border: "border-amber-200 bg-amber-50/30", text: "text-amber-600" },
                    { num: "1 view", label: "Single source of truth", desc: "Production + Maintenance + Quality", border: "border-purple-200 bg-purple-50/30", text: "text-purple-600" },
                  ].map((m, i) => (
                    <div
                      key={i}
                      className={`metric border rounded-2xl p-5 shadow-xs bg-white ${m.border}`}
                    >
                      <div className={`num text-3xl font-black ${m.text}`}>{m.num}</div>
                      <div className="label text-slate-800 font-bold text-sm mt-1">{m.label}</div>
                      <div className="desc text-xs mt-2 text-slate-500 font-medium">{m.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section> </Reveal>

            {/* Why Performance Management Matters Split Block */}
            <Reveal delay={0.05}> <section id="overview" className="section mt-12 grid md:grid-cols-2 gap-8">
              <div className="card bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-xs">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                  Why performance management matters more than ever
                </h2>
                <p className="lead text-slate-700 font-medium mb-4">
                  A modern plant can lose value in dozens of small ways. Performance management connects those moments to one question: what is helping the plant run better?
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  When the team tracks the right indicators, every shift becomes more predictable.
                </p>
              </div>

              <div className="card bg-white border border-blue-100 rounded-3xl p-6 md:p-10 shadow-xs">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                  Strategy Stack for Modern Plant Leaders
                </h2>
                <div className="space-y-4">
                  {[
                    { title: "Standardize the data", desc: "Use one format for shift logs, downtime, and quality records.", border: "border-l-blue-500 bg-blue-50/40" },
                    { title: "Visualize bottlenecks", desc: "Show where time is lost and which assets cause the most stoppages.", border: "border-l-green-500 bg-green-50/40" },
                    { title: "Assign ownership", desc: "Every KPI needs a clear owner.", border: "border-l-amber-500 bg-amber-50/40" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className={`strategy border border-slate-200 border-l-4 rounded-xl p-4 ${s.border}`}
                    >
                      <h3 className="font-bold text-slate-800 text-sm mb-1">{s.title}</h3>
                      <p className="text-slate-600 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section> </Reveal>

            {/* Major Topics Panel Grid */}
            <Reveal delay={0.05}> <section className="mt-12 bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-xs">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 text-center md:text-left">
                Major topics every plant should include
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Maintenance reliability", desc: "Preventive and predictive maintenance reduce surprise failures.", theme: "border-blue-200 text-blue-700 bg-blue-50/20" },
                  { title: "Root cause analysis", desc: "Move from symptoms to real solutions.", theme: "border-green-200 text-green-700 bg-green-50/20" },
                  { title: "Workforce engagement", desc: "Operators closest to the process drive faster improvement.", theme: "border-purple-200 text-purple-700 bg-purple-50/20" },
                  { title: "Digital dashboards", desc: "Automation + dashboards reduce manual reporting.", theme: "border-cyan-200 text-cyan-700 bg-cyan-50/20" },
                  { title: "Energy & sustainability", desc: "Manage performance and resource use together.", theme: "border-emerald-200 text-emerald-700 bg-emerald-50/20" },
                  { title: "Shift handover discipline", desc: "Structured handovers prevent information loss.", theme: "border-amber-200 text-amber-700 bg-amber-50/20" },
                ].map((topic, i) => (
                  <div key={i} className={`card border p-5 rounded-2xl shadow-xs transition-transform duration-200 hover:scale-[1.01] ${topic.theme}`}>
                    <h3 className="text-base font-extrabold mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{topic.desc}</p>
                  </div>
                ))}
              </div>
            </section> </Reveal>

            {/* Visual Performance Charts Simulation */}
            <Reveal delay={0.05}> <section id="visuals" className="mt-12">
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Horizontal Bar Chart Graphic */}
                <div className="chart-box p-6 md:p-8 bg-white border border-blue-100 rounded-3xl shadow-xs">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                    Performance gains by strategy focus
                  </h2>
                  <p className="text-xs text-slate-400 mb-8 font-medium">
                    Illustrative impact comparison
                  </p>
                  <div className="bars space-y-4">
                    {[
                      { label: "Downtime reduction", value: 82, color: "from-blue-500 to-blue-600" },
                      { label: "Throughput improvement", value: 76, color: "from-green-500 to-green-600" },
                      { label: "Quality consistency", value: 69, color: "from-amber-400 to-amber-500" },
                      { label: "Energy efficiency", value: 63, color: "from-indigo-400 to-indigo-500" },
                      { label: "Schedule adherence", value: 71, color: "from-rose-400 to-rose-500" },
                    ].map((bar, i) => (
                      <div
                        key={i}
                        className="bar-row grid grid-cols-[140px_1fr_45px] items-center gap-3"
                      >
                        <div className="name text-xs md:text-sm font-semibold text-slate-700">{bar.label}</div>
                        <div className="bar-track h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
                          <div
                            className={`bar-fill h-full rounded-full bg-gradient-to-r ${bar.color}`}
                            style={{ width: `${bar.value}%` }}
                          />
                        </div>
                        <div className="bar-value text-right font-mono font-bold text-xs md:text-sm text-slate-800">
                          {bar.value}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ring Performance Charts Graphic */}
                <div className="chart-box p-6 md:p-8 bg-white border border-green-100 rounded-3xl shadow-xs">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Health Score Overview</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { percent: 84, label: "Asset Uptime", color: "#22c55e", bgTrack: "#e2f1e9" }, // Emerald 500
                      { percent: 77, label: "First-pass Yield", color: "#2563eb", bgTrack: "#dbeafe" }, // Blue 600
                      { percent: 68, label: "Energy Efficiency", color: "#d97706", bgTrack: "#fef3c7" }, // Amber 600
                    ].map((ring, i) => (
                      <div key={i} className="text-center flex flex-col items-center">
                        <div
                          className="w-24 h-24 rounded-full flex items-center justify-center relative shadow-xs"
                          style={{
                            background: `conic-gradient(${ring.color} ${ring.percent}%, ${ring.bgTrack} ${ring.percent}%)`,
                          }}
                        >
                          <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center border border-slate-100 shadow-inner">
                            <span className="text-lg font-black text-slate-800">
                              {ring.percent}%
                            </span>
                          </div>
                        </div>
                        <h3 className="mt-3 font-bold text-xs md:text-sm text-slate-700">{ring.label}</h3>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </section> </Reveal>

            {/* Database Snapshot Custom Table Layout */}
            <Reveal delay={0.05}> <section className="mt-12">
              <div className="card bg-white border border-slate-200 rounded-3xl p-5 md:p-8 shadow-xs overflow-hidden">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
                  Performance Database Snapshot
                </h2>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-xs md:text-sm min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-50 text-slate-800 border-b border-slate-200 font-bold">
                        <th className="p-4 text-left">KPI</th>
                        <th className="p-4 text-left">Current State</th>
                        <th className="p-4 text-left">Why it matters</th>
                        <th className="p-4 text-left">Action Trigger</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      {[
                        [
                          "OEE",
                          "78.4%",
                          "Combines availability, performance & quality",
                          "Review if below target for 2 shifts",
                          "text-blue-700 bg-blue-50/50"
                        ],
                        [
                          "Downtime minutes",
                          "42 min/shift",
                          "Shows line stoppages",
                          "Escalate repeat losses",
                          "text-amber-700 bg-amber-50/50"
                        ],
                        [
                          "First-pass yield",
                          "93.1%",
                          "Measures good output first time",
                          "Investigate downward trends",
                          "text-green-700 bg-green-50/50"
                        ],
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-bold text-slate-800">{row[0]}</td>
                          <td className="p-4"><span className={`px-2.5 py-0.5 rounded-md border font-mono font-bold text-xs ${row[4]}`}>{row[1]}</span></td>
                          <td className="p-4 text-xs font-medium text-slate-500">{row[2]}</td>
                          <td className="p-4 text-xs font-semibold text-slate-700">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section> </Reveal>

            {/* Case Study Section Container */}
            <Reveal delay={0.05}> <section id="case-study" className="mt-12">
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Left Card */}
                <div className="card bg-white border border-l-4 border-l-blue-600 border-blue-100 rounded-3xl p-6 md:p-10 shadow-xs">
                  <h2 className="text-2xl font-bold mb-4 text-blue-900">
                    Case Study: How one plant tightened control
                  </h2>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    A manufacturing plant had good equipment but inconsistent daily control due to scattered data.
                  </p>
                  <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <p className="text-xs text-slate-700">
                      <strong className="text-blue-700 font-bold">Action:</strong> Introduced a single performance dashboard with daily KPI reviews and ownership model.
                    </p>
                    <p className="text-xs text-slate-700">
                      <strong className="text-green-700 font-bold">Result:</strong> Faster issue response, better shift handovers, and improved production stability.
                    </p>
                  </div>
                </div>

                {/* Right Card */}
                <div className="card bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-3xl p-6 md:p-10 shadow-xs flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-6 text-slate-900">
                    What made the difference
                  </h2>
                  <ul className="space-y-4 text-slate-700 font-medium text-sm">
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span><strong className="text-blue-800 font-bold">Visibility</strong> — Teams knew what happened in the last shift</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md bg-green-600 text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span><strong className="text-green-800 font-bold">Ownership</strong> — Every issue had a clear owner</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md bg-amber-500 text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span><strong className="text-amber-700 font-bold">Consistency</strong> — Same KPI definitions across teams</span>
                    </li>
                  </ul>
                </div>

              </div>
            </section> </Reveal>

            {/* Accordion Style FAQ Segment */}
            <Reveal delay={0.05}> <section id="faqs" className="mt-12 bg-white border border-blue-100 rounded-3xl p-6 md:p-10 shadow-xs">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">FAQs</h2>
              <div className="space-y-4">
                {[
                  { q: "What is the most important KPI?", a: "OEE is often the best starting point as it combines availability, speed, and quality.", border: "border-blue-200 bg-blue-50/20" },
                  { q: "How often should performance be reviewed?", a: "Daily for immediate issues, weekly for patterns, monthly for strategic resets.", border: "border-green-200 bg-green-50/20" },
                  { q: "Why do dashboards matter?", a: "They turn large amounts of data into a simple, actionable story.", border: "border-purple-200 bg-purple-50/20" },
                ].map((faq, i) => (
                  <details
                    key={i}
                    className={`border rounded-2xl p-5 group transition-all duration-300 ${faq.border}`}
                  >
                    <summary className="font-bold text-slate-800 cursor-pointer text-sm md:text-base flex justify-between items-center outline-none list-none select-none">
                      {faq.q}
                      <span className="text-lg font-light text-slate-400 group-open:rotate-45 transition-transform duration-200">
                        ＋
                      </span>
                    </summary>
                    <p className="mt-4 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-200/60 pt-4">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section> </Reveal>

            {/* Bottom Tag Footer */}
            <div className="text-center text-slate-400 font-semibold mt-12 py-6 text-xs md:text-sm uppercase tracking-wider bg-slate-100/60 border border-slate-200 rounded-2xl">
              ✨ Built for modern plant teams that want clearer decisions, stronger control, and better results.
            </div>
          </div>
        </div>

        {/* STICKY RIGHT COLUMN PROFILE FORM */}
        <aside className="hidden lg:block shrink-0 w-[340px]">
          <div className="sticky top-12 px-1 py-6 bg-white border border-slate-200 rounded-3xl shadow-sm mt-6">
            <StickyContactForm />
          </div>
        </aside>

      </div>
    </div>
  );
};

export default PerformanceManagementStrategies;