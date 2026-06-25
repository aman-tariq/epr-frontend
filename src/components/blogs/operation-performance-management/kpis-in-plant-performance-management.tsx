"use client";

import React from 'react';

const KPIsInPlantPerformance: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f4f8fb] text-[#10253d] font-sans">
      <div className="max-w-[1240px] mx-auto px-6 py-12">
        {/* Hero */}
        <section className="hero bg-white border border-[#10253d]/10 rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-xl">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#1dbf73] rounded-full opacity-10 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#1677ff] rounded-full opacity-10 blur-3xl" />

          <div className="badge-row flex flex-wrap gap-3 mb-8">
            {["Plant Operation Intelligence", "Performance Management", "KPI Dashboard", "Operational Excellence"].map((b, i) => (
              <span key={i} className="badge px-5 py-2 bg-[#10253d]/5 border border-[#10253d]/10 rounded-full text-sm text-[#29435c]">{b}</span>
            ))}
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
                The Role of <span className="text-[#1677ff]">KPIs</span> in Plant Operation Performance Management
              </h1>
              <p className="punch text-xl md:text-2xl mt-8 text-[#35516b]">
                The numbers do not lie — the right KPIs turn plant performance into clear action.
              </p>
              <p className="mt-8 text-lg text-[#5f7488]">
                When production stalls, maintenance slips, or energy costs rise, strong teams don’t guess — they track the right KPIs and act with confidence.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="side-panel p-8 rounded-3xl">
                <div className="ring mx-auto mb-6" style={{ background: 'conic-gradient(#1dbf73 0deg 259deg, #f59e0b 259deg 360deg)' }}>
                  <div className="w-36 h-36 bg-white rounded-full mx-auto mt-6 flex items-center justify-center text-4xl font-bold text-[#10253d]">92%</div>
                </div>
                <p className="text-center text-[#29435c] font-medium">Performance visibility improves when KPI signals are reviewed daily.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why KPIs Matter */}
        <section className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-[#10253d]/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">Why KPIs matter in plant operation performance management</h2>
            <p className="text-[#5f7488]">KPIs give plant leaders a shared language for production output, machine availability, maintenance planning, energy efficiency, quality rate, throughput, downtime, and process optimization.</p>
          </div>

          <div className="bg-white border border-[#10253d]/10 rounded-3xl p-10">
            <h3 className="text-xl font-semibold mb-4 text-[#1677ff]">What KPIs Reveal</h3>
            <ul className="space-y-4 text-[#5f7488]">
              <li>Bottlenecks and recurring downtime</li>
              <li>Slow changeovers and quality losses</li>
              <li>Maintenance effectiveness and energy leaks</li>
            </ul>
          </div>

          <div className="bg-white border border-[#10253d]/10 rounded-3xl p-10">
            <h3 className="text-xl font-semibold mb-4 text-[#1dbf73]">What Improves Fastest</h3>
            <div className="flex flex-wrap gap-3">
              {["OEE", "Uptime", "MTBF", "MTTR", "Yield", "Energy Efficiency"].map((kpi, i) => (
                <span key={i} className="px-5 py-2 bg-[#1677ff]/10 text-[#1677ff] rounded-full text-sm border border-[#1677ff]/20">{kpi}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Visual KPI Snapshot */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Visual KPI Snapshot</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#10253d]/10 rounded-3xl p-10">
              <h3 className="font-semibold mb-8">Monthly KPI Trend</h3>
              <div className="space-y-8">
                {[
                  { label: "OEE", value: 81, color: "#1677ff" },
                  { label: "Uptime", value: 89, color: "#1dbf73" },
                  { label: "Yield", value: 94, color: "#f59e0b" },
                  { label: "Downtime", value: 12, color: "#e85d75" },
                ].map((bar, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-40 font-medium">{bar.label}</div>
                    <div className="flex-1 h-4 bg-[#e6eef7] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${bar.value}%`, background: bar.color }} />
                    </div>
                    <div className="font-mono font-bold w-12 text-right">{bar.value}%</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#10253d]/10 rounded-3xl p-10">
              <h3 className="font-semibold mb-6">How to read this dashboard</h3>
              <ul className="space-y-6 text-[#5f7488]">
                <li><strong>OEE</strong> — Overall plant effectiveness</li>
                <li><strong>Uptime</strong> — Equipment availability</li>
                <li><strong>Yield</strong> — Quality without rework</li>
                <li><strong>Downtime</strong> — Hidden production losses</li>
              </ul>
            </div>
          </div>
        </section>

        {/* KPI Database */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Practical KPI Database for Plant Managers</h2>
          <div className="bg-white border border-[#10253d]/10 rounded-3xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f4f8fb]">
                  <th className="p-6 text-left">KPI</th>
                  <th className="p-6 text-left">Why it matters</th>
                  <th className="p-6 text-left">Target range</th>
                  <th className="p-6 text-left">Action signal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#10253d]/10">
                {[
                  ["OEE", "Measures plant effectiveness", "75% - 85%+", "Review if below target"],
                  ["Uptime", "Shows equipment availability", "85% - 95%", "Investigate drops"],
                  ["MTBF", "Reveals reliability", "Rising trend", "Watch for decline"],
                  ["First-pass yield", "Quality without rework", "95%+", "Investigate downward trends"],
                  ["Energy per unit", "Energy efficiency", "Lower trend", "Cost pressure alert"],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-6 font-semibold">{row[0]}</td>
                    <td className="p-6 text-[#5f7488]">{row[1]}</td>
                    <td className="p-6 text-[#5f7488]">{row[2]}</td>
                    <td className="p-6 text-[#5f7488]">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Case Study */}
        <section className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-[#10253d]/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">Case Study: How KPI discipline changed plant performance</h2>
            <p>A manufacturing plant struggled with repeated downtime and uneven throughput. They introduced daily KPI reviews covering OEE, uptime, MTBF, MTTR, yield, and energy efficiency.</p>
            <p className="mt-6"><strong>Result:</strong> Downtime dropped, output rose, and performance became more predictable.</p>
          </div>
          <div className="bg-white border border-[#10253d]/10 rounded-3xl p-10">
            <h3 className="font-semibold mb-6">What the plant learned</h3>
            <p>The biggest change was turning performance tracking into a daily habit. Once everyone could see the same numbers, decisions became clearer and faster.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">FAQs</h2>
          <div className="space-y-4">
            {[
              { q: "What are the most important KPIs for a plant?", a: "OEE, uptime, downtime, MTBF, MTTR, yield, energy efficiency, and schedule adherence." },
              { q: "How often should KPIs be reviewed?", a: "Daily for operations, weekly for patterns, and monthly for strategic adjustments." },
              { q: "Why do KPIs help performance management?", a: "They turn plant work into measurable facts and create a shared version of truth." },
            ].map((faq, i) => (
              <details key={i} className="bg-white border border-[#10253d]/10 rounded-3xl p-8">
                <summary className="font-semibold cursor-pointer text-lg">{faq.q}</summary>
                <p className="mt-6 text-[#5f7488]">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Keyword Cloud */}
        <section className="mt-20">
          <h3 className="text-center text-[#5f7488] mb-6">Common Search Terms Covered</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {["plant operation performance management", "KPI tracking", "OEE improvement", "downtime reduction", "operational visibility", "process optimization", "data-driven decisions"].map((kw, i) => (
              <span key={i} className="px-6 py-3 bg-white border border-[#10253d]/10 rounded-full text-sm text-[#29435c]">{kw}</span>
            ))}
          </div>
        </section>

        <div className="text-center text-[#5f7488] mt-20 text-sm">
          Designed for modern plant teams that want measurable performance and operational excellence.
        </div>
      </div>
    </div>
  );
};

export default KPIsInPlantPerformance;
