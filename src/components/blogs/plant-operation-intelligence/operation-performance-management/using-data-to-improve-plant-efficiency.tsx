'use client';

import React from 'react';

const UsingDataToImprovePlantEfficiency: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07111f] text-[#eaf3ff] font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0b1b31]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1180px] mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#46d3ff] to-[#41e1a6] flex items-center justify-center text-[#07111f] font-bold text-xl">PIQ</div>
            <div>
              <div className="font-bold text-xl tracking-tight">PlantIQ Blog</div>
              <div className="text-xs text-[#a9bdd7]">Data • Efficiency • Operations</div>
            </div>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#insights" className="hover:text-white transition-colors">Insights</a>
            <a href="#charts" className="hover:text-white transition-colors">Charts</a>
            <a href="#database" className="hover:text-white transition-colors">Database</a>
            <a href="#case-study" className="hover:text-white transition-colors">Case Study</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
          </div>
        </div>
      </nav>

      <div className="max-w-[1180px] mx-auto px-6 py-12">
        {/* Hero */}
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full text-sm tracking-widest mb-6">
              Data-Driven Plant Performance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
              Using Data to Track and Improve <span className="text-[#41e1a6]">Plant Efficiency</span>
            </h1>
            <p className="mt-6 text-xl text-[#a9bdd7]">
              Turn plant data into better efficiency, faster decisions, and cleaner margins.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#46d3ff] to-[#41e1a6] text-[#07111f] font-bold rounded-2xl">Explore Strategies</button>
              <button className="px-8 py-4 border border-white/30 hover:bg-white/10 rounded-2xl transition-colors">View Charts</button>
            </div>
          </div>

          <div className="md:col-span-2 bg-[#0e223b] border border-white/10 rounded-3xl p-8">
            <div className="bg-[#102743] rounded-2xl p-6 mb-6">
              <div className="text-sm text-[#a9bdd7] mb-1">Current OEE</div>
              <div className="text-5xl font-bold text-[#41e1a6]">81.4%</div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-[#102743] rounded-2xl p-5">
                <div className="text-[#46d3ff]">Downtime</div>
                <div className="text-3xl font-bold mt-1">18 min</div>
              </div>
              <div className="bg-[#102743] rounded-2xl p-5">
                <div className="text-[#41e1a6]">Yield</div>
                <div className="text-3xl font-bold mt-1">94.2%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Data Matters */}
        <section id="insights" className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-[#0e223b] border border-white/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">Why data is the real efficiency engine</h2>
            <p className="text-[#a9bdd7] text-lg">A plant usually does not become inefficient overnight. Small issues build up. Data brings those patterns into view.</p>
            <ul className="mt-8 space-y-4 text-[#d2e2f8]">
              <li className="flex gap-3">• Downtime tracking to identify repeat stoppages</li>
              <li className="flex gap-3">• Throughput to understand actual output</li>
              <li className="flex gap-3">• Yield and scrap rate to reduce waste</li>
              <li className="flex gap-3">• Energy consumption to spot hidden leaks</li>
            </ul>
          </div>

          <div className="bg-[#0e223b] border border-white/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">What data does for the team</h2>
            <ul className="space-y-6 text-[#a9bdd7]">
              <li><strong className="text-white">Operators</strong> can see shift targets instantly</li>
              <li><strong className="text-white">Supervisors</strong> can compare line performance</li>
              <li><strong className="text-white">Maintenance</strong> can prioritize based on impact</li>
              <li><strong className="text-white">Management</strong> can make decisions using numbers</li>
            </ul>
          </div>
        </section>

        {/* Charts Section */}
        <section id="charts" className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Graph view: where efficiency is gained or lost</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bar Chart */}
            <div className="bg-[#0e223b] border border-white/10 rounded-3xl p-8">
              <h3 className="font-semibold mb-6">Performance Breakdown</h3>
              <div className="space-y-6">
                {[
                  { label: "Availability", value: 78 },
                  { label: "Performance", value: 84 },
                  { label: "Quality", value: 91 },
                  { label: "Energy Efficiency", value: 69 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-40 text-sm">{item.label}</div>
                    <div className="flex-1 h-4 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#46d3ff] to-[#41e1a6]" style={{ width: `${item.value}%` }} />
                    </div>
                    <div className="w-12 text-right font-bold">{item.value}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trend Line */}
            <div className="bg-[#0e223b] border border-white/10 rounded-3xl p-8">
              <h3 className="font-semibold mb-6">Weekly Production Trend</h3>
              <div className="h-72 bg-[#102743] rounded-2xl flex items-end justify-center text-xs text-[#a9bdd7]">
                [Interactive Trend Line Chart Area - Production improving over 9 weeks]
              </div>
            </div>
          </div>
        </section>

        {/* Database View */}
        <section id="database" className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Database view: sample plant efficiency records</h2>
          <div className="bg-[#0e223b] border border-white/10 rounded-3xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-5 text-left">Shift</th>
                  <th className="p-5 text-left">Output</th>
                  <th className="p-5 text-left">Downtime</th>
                  <th className="p-5 text-left">Scrap</th>
                  <th className="p-5 text-left">Energy / unit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  ["Morning", "1,240", "18 min", "1.8%", "2.4 kWh"],
                  ["Afternoon", "1,180", "24 min", "2.1%", "2.7 kWh"],
                  ["Night", "1,315", "12 min", "1.4%", "2.2 kWh"],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-5 font-medium">{row[0]}</td>
                    <td className="p-5">{row[1]}</td>
                    <td className="p-5 text-[#a9bdd7]">{row[2]}</td>
                    <td className="p-5 text-[#a9bdd7]">{row[3]}</td>
                    <td className="p-5 text-[#a9bdd7]">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Case Study */}
        <section id="case-study" className="mt-20 bg-[#0e223b] border border-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-6">Case Study: A plant that improved efficiency with simple data habits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-[#ffd166] font-bold text-xl mb-2">Before</div>
              <p className="text-[#a9bdd7]">Downtime recorded late, scrap reviewed only at end of day.</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-[#41e1a6] font-bold text-xl mb-2">Action</div>
              <p className="text-[#a9bdd7]">Live KPI tracking + daily review of output, quality, and energy.</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-[#46d3ff] font-bold text-xl mb-2">After</div>
              <p className="text-[#a9bdd7]">Repeat stoppages dropped, energy became predictable, supervisors responded faster.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-20">
          <h2 className="text-3xl font-bold mb-8">FAQs</h2>
          <div className="space-y-4">
            {[
              { q: "What is the easiest way to start tracking plant efficiency?", a: "Begin with a few practical KPIs: output, downtime, scrap rate, energy consumption." },
              { q: "Do I need advanced software?", a: "Not always. A clean process, consistent database, and visible dashboard can create strong improvements." },
              { q: "Why are graphs important?", a: "Graphs make trends easy to understand at a glance." },
            ].map((item, i) => (
              <details key={i} className="bg-[#0e223b] border border-white/10 rounded-2xl p-6">
                <summary className="font-semibold cursor-pointer">{item.q}</summary>
                <p className="mt-4 text-[#a9bdd7]">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="text-center py-16 text-[#a9bdd7]">
          Data turns operations into measurable, improvable performance.
        </div>
      </div>
    </div>
  );
};

export default UsingDataToImprovePlantEfficiency;
