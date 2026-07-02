'use client';

import React from 'react';

const PerformanceManagementStrategies: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07111f] text-[#eaf4ff] font-sans">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-[#0b1b31]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1180px] mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3aa0ff] to-[#33d6c8] flex items-center justify-center text-white font-bold">EP</div>
            <div>
              <div className="font-bold text-lg">Industrial Insights</div>
              <div className="text-xs text-[#a9bfd9]">Performance • Operations • Intelligence</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#overview" className="hover:text-[#3aa0ff] transition-colors">Overview</a>
            <a href="#strategies" className="hover:text-[#3aa0ff] transition-colors">Strategies</a>
            <a href="#visuals" className="hover:text-[#3aa0ff] transition-colors">Visuals</a>
            <a href="#case-study" className="hover:text-[#3aa0ff] transition-colors">Case Study</a>
            <a href="#faqs" className="hover:text-[#3aa0ff] transition-colors">FAQs</a>
          </nav>
        </div>
      </header>

      <div className="max-w-[1180px] mx-auto px-6 py-10">
        {/* Hero */}
        <section className="hero-card bg-gradient-to-br from-[#0a182d] to-[#0e213b] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
          <div className="hero-inner grid md:grid-cols-[1.3fr_0.9fr] gap-8 p-8 md:p-12">
            <div>
              <div className="eyebrow text-sm">
                Modern Plant Operations <span className="text-[#ffcc66]">Performance Blog</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mt-4">
                Key Performance Management Strategies for Modern Plant Operations
              </h1>
              <p className="punch text-xl md:text-2xl mt-6">
                Turn daily plant activity into measurable wins — faster decisions, fewer delays, tighter control, and stronger output.
              </p>
              <p className="text-[#a9bfd9] mt-6 text-[17px]">
                The strongest teams use real-time visibility, clear KPIs, and simple action routines to keep production stable, quality high, and downtime low.
              </p>

              <div className="chip-row flex flex-wrap gap-3 mt-10">
                {["Real-time visibility", "OEE and throughput", "Downtime control", "Quality assurance", "Data-led decisions"].map((chip, i) => (
                  <span key={i} className="chip px-5 py-2 bg-white/10 border border-white/20 rounded-full text-sm">{chip}</span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="hero-metrics grid grid-cols-2 gap-4">
              {[
                { num: "24/7", label: "Operational monitoring", desc: "Keep a live pulse on plant activity" },
                { num: "+18%", label: "Typical efficiency gain", desc: "From disciplined KPI tracking" },
                { num: "-30%", label: "Reduced downtime risk", desc: "Prevent small stoppages" },
                { num: "1 view", label: "Single source of truth", desc: "Production + Maintenance + Quality" },
              ].map((m, i) => (
                <div key={i} className="metric bg-[#06101e]/70 border border-white/10 rounded-2xl p-6">
                  <div className="num text-3xl text-[#3aa0ff]">{m.num}</div>
                  <div className="label text-[#d7e6ff] font-semibold">{m.label}</div>
                  <div className="desc text-sm mt-3 text-[#a9bfd9]">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Performance Management Matters */}
        <section id="overview" className="section mt-16 grid md:grid-cols-2 gap-8">
          <div className="card p-10">
            <h2 className="text-3xl font-bold mb-6">Why performance management matters more than ever</h2>
            <p className="lead text-[#eff7ff]">A modern plant can lose value in dozens of small ways. Performance management connects those moments to one question: what is helping the plant run better?</p>
            <p className="mt-6 text-[#a9bfd9]">When the team tracks the right indicators, every shift becomes more predictable.</p>
          </div>

          <div className="card p-10">
            <h2 className="text-3xl font-bold mb-6">Strategy Stack for Modern Plant Leaders</h2>
            <div className="space-y-6">
              {[
                { title: "Standardize the data", desc: "Use one format for shift logs, downtime, and quality records." },
                { title: "Visualize bottlenecks", desc: "Show where time is lost and which assets cause the most stoppages." },
                { title: "Assign ownership", desc: "Every KPI needs a clear owner." },
              ].map((s, i) => (
                <div key={i} className="strategy bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-[#a9bfd9]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Topics */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Major topics every plant should include</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Maintenance reliability", desc: "Preventive and predictive maintenance reduce surprise failures." },
              { title: "Root cause analysis", desc: "Move from symptoms to real solutions." },
              { title: "Workforce engagement", desc: "Operators closest to the process drive faster improvement." },
              { title: "Digital dashboards", desc: "Automation + dashboards reduce manual reporting." },
              { title: "Energy & sustainability", desc: "Manage performance and resource use together." },
              { title: "Shift handover discipline", desc: "Structured handovers prevent information loss." },
            ].map((topic, i) => (
              <div key={i} className="card p-8">
                <h3 className="text-xl font-semibold mb-3 text-[#3aa0ff]">{topic.title}</h3>
                <p className="text-[#a9bfd9]">{topic.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Performance Gains */}
        <section id="visuals" className="mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="chart-box p-8 bg-[#0e213b] border border-white/10 rounded-3xl">
              <h2 className="text-2xl font-bold mb-2">Performance gains by strategy focus</h2>
              <p className="text-sm text-[#a9bfd9] mb-8">Illustrative impact comparison</p>
              <div className="bars space-y-5">
                {[
                  { label: "Downtime reduction", value: 82, color: "from-[#3aa0ff] to-[#33d6c8]" },
                  { label: "Throughput improvement", value: 76, color: "from-[#5ee08a] to-[#a5f3a0]" },
                  { label: "Quality consistency", value: 69, color: "from-[#ffcc66] to-[#ff9e5a]" },
                  { label: "Energy efficiency", value: 63, color: "from-[#9b8cff] to-[#c2b8ff]" },
                  { label: "Schedule adherence", value: 71, color: "from-[#ff6b87] to-[#ff98ad]" },
                ].map((bar, i) => (
                  <div key={i} className="bar-row grid grid-cols-[160px_1fr_60px] items-center gap-4">
                    <div className="name text-sm font-medium">{bar.label}</div>
                    <div className="bar-track">
                      <div className={`bar-fill h-full rounded-full bg-gradient-to-r ${bar.color}`} style={{ width: `${bar.value}%` }} />
                    </div>
                    <div className="bar-value text-right font-bold">{bar.value}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ring Charts */}
            <div className="chart-box p-8 bg-[#0e213b] border border-white/10 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6">Health Score Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { percent: 84, label: "Asset Uptime", color: "#33d6c8" },
                  { percent: 77, label: "First-pass Yield", color: "#5ee08a" },
                  { percent: 68, label: "Energy Efficiency", color: "#ffcc66" },
                ].map((ring, i) => (
                  <div key={i} className="text-center">
                    <div className="mx-auto w-28 h-28 rounded-full border-8 border-white/10 flex items-center justify-center relative" style={{ background: `conic-gradient(${ring.color} ${ring.percent}%, #1a2a4a ${ring.percent}%)` }}>
                      <div className="w-20 h-20 bg-[#0b1728] rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold">{ring.percent}%</span>
                      </div>
                    </div>
                    <h3 className="mt-4 font-semibold">{ring.label}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Database Snapshot */}
        <section className="mt-16">
          <div className="card p-10">
            <h2 className="text-3xl font-bold mb-6">Performance Database Snapshot</h2>
            <table className="w-full">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-5 text-left">KPI</th>
                  <th className="p-5 text-left">Current State</th>
                  <th className="p-5 text-left">Why it matters</th>
                  <th className="p-5 text-left">Action Trigger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  ["OEE", "78.4%", "Combines availability, performance & quality", "Review if below target for 2 shifts"],
                  ["Downtime minutes", "42 min/shift", "Shows line stoppages", "Escalate repeat losses"],
                  ["First-pass yield", "93.1%", "Measures good output first time", "Investigate downward trends"],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-5 font-semibold">{row[0]}</td>
                    <td className="p-5 text-[#a9bfd9]">{row[1]}</td>
                    <td className="p-5 text-[#a9bfd9]">{row[2]}</td>
                    <td className="p-5 text-[#a9bfd9]">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Case Study */}
        <section id="case-study" className="mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-10">
              <h2 className="text-3xl font-bold mb-6">Case Study: How one plant tightened control</h2>
              <p className="mb-6">A manufacturing plant had good equipment but inconsistent daily control due to scattered data.</p>
              <p className="mb-6"><strong>Action:</strong> Introduced a single performance dashboard with daily KPI reviews and ownership model.</p>
              <p><strong>Result:</strong> Faster issue response, better shift handovers, and improved production stability.</p>
            </div>
            <div className="card p-10">
              <h2 className="text-3xl font-bold mb-6">What made the difference</h2>
              <ul className="space-y-6 text-[#a9bfd9]">
                <li><strong>Visibility</strong> — Teams knew what happened in the last shift</li>
                <li><strong>Ownership</strong> — Every issue had a clear owner</li>
                <li><strong>Consistency</strong> — Same KPI definitions across teams</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="mt-16 card p-10">
          <h2 className="text-3xl font-bold mb-8">FAQs</h2>
          <div className="space-y-6">
            {[
              { q: "What is the most important KPI?", a: "OEE is often the best starting point as it combines availability, speed, and quality." },
              { q: "How often should performance be reviewed?", a: "Daily for immediate issues, weekly for patterns, monthly for strategic resets." },
              { q: "Why do dashboards matter?", a: "They turn large amounts of data into a simple, actionable story." },
            ].map((faq, i) => (
              <details key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <summary className="font-semibold cursor-pointer text-lg">{faq.q}</summary>
                <p className="mt-4 text-[#a9bfd9]">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="text-center text-[#a9bfd9] py-12 text-sm">
          Built for modern plant teams that want clearer decisions, stronger control, and better results.
        </div>
      </div>
    </div>
  );
};

export default PerformanceManagementStrategies;
