"use client";

import React from 'react';

const RealTimeMonitoringDelays: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f4fbf7] text-[#143123] font-sans">
      <div className="max-w-[1180px] mx-auto px-5 py-12">
        {/* Hero */}
        <section className="hero-shell bg-white border border-[#143123]/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-24 -top-24 w-[420px] h-[420px] bg-[#21a366] rounded-full opacity-10 blur-3xl" />
          <div className="absolute -left-20 bottom-0 w-80 h-80 bg-[#2f80ed] rounded-full opacity-10 blur-3xl" />

          <div className="hero-grid grid md:grid-cols-[1.25fr_.95fr] gap-10 items-center">
            <div>
              <div className="pill flex items-center gap-3 bg-white px-5 py-2 rounded-full text-sm font-medium border">
                Operations Insight <span className="text-[#21a366] font-bold">Real-Time Monitoring</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-6 tracking-tight">
                How Real-Time Monitoring Helps Reduce Operational Delays
              </h1>
              <p className="punch text-xl md:text-2xl mt-8 text-[#123122]">
                The fastest way to cut delays is to see them early, understand them clearly, and act before they spread.
              </p>
              <p className="sub mt-6 text-[#5f7669]">
                Real-time monitoring gives plant teams a live view of production, downtime, machine health, alerts, and workflow bottlenecks.
              </p>

              <div className="chips flex flex-wrap gap-3 mt-10">
                {["Operational delay reduction", "Live alerts", "Downtime visibility", "KPI dashboards", "Production workflow control"].map((chip, i) => (
                  <span key={i} className="chip px-5 py-2 bg-white border border-[#143123]/10 rounded-full text-sm">{chip}</span>
                ))}
              </div>
            </div>

            {/* Hero Stats */}
            <div className="hero-stats grid grid-cols-2 gap-4">
              {[
                { n: "24/7", l: "Live process tracking", d: "See performance as it happens" },
                { n: "-35%", l: "Delay exposure", d: "Catch stoppages early" },
                { n: "+22%", l: "Response speed", d: "Teams act faster" },
                { n: "1 view", l: "Shared operational picture", d: "One live source of truth" },
              ].map((stat, i) => (
                <div key={i} className="stat bg-white border border-[#143123]/10 rounded-2xl p-6">
                  <div className="n text-4xl font-bold text-[#21a366]">{stat.n}</div>
                  <div className="l text-[#214d38] font-semibold mt-1">{stat.l}</div>
                  <div className="d text-sm text-[#5f7669] mt-3">{stat.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Delays Happen */}
        <section className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="card bg-white border border-[#143123]/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">Why delays happen in the first place</h2>
            <p className="lead text-[#1b3a2b]">Operational delays usually start as small, easy-to-miss signals — a slower machine, a late material refill, or a missed handover detail.</p>
            <p className="muted mt-6">Real-time monitoring makes these signals visible immediately so teams can respond before they spread.</p>
          </div>

          <div className="card bg-white border border-[#143123]/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">What real-time monitoring changes</h2>
            <div className="space-y-8">
              {[
                { title: "From guesswork to facts", desc: "Teams work with live data instead of memory." },
                { title: "From waiting to acting", desc: "Respond while the issue is still small." },
                { title: "From isolated issues to patterns", desc: "See recurring problems across the plant." },
                { title: "From manual reporting to live dashboards", desc: "Shared visibility reduces confusion." },
              ].map((item, i) => (
                <div key={i} className="item bg-[#f8fff9] border border-[#143123]/10 rounded-2xl p-6">
                  <h3 className="font-semibold mb-2 text-[#21a366]">{item.title}</h3>
                  <p className="text-[#5f7669]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Topics */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Major topics that strengthen delay reduction</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Downtime analysis", desc: "Track downtime by reason code to find repeat offenders." },
              { title: "Asset performance monitoring", desc: "Monitor machine speed and condition to prevent losses." },
              { title: "Production scheduling alignment", desc: "Connect live status with the production plan." },
              { title: "Alert management", desc: "Smart alerts to the right person at the right time." },
              { title: "Operational visibility", desc: "A shared live view for all teams." },
            ].map((topic, i) => (
              <div key={i} className="card bg-white border border-[#143123]/10 rounded-3xl p-8">
                <h3 className="font-semibold text-xl mb-3 text-[#21a366]">{topic.title}</h3>
                <p className="text-[#5f7669]">{topic.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Grid */}
        <section className="mt-16 visual-grid grid md:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="viz bg-white border border-[#143123]/10 rounded-3xl p-10">
            <h2 className="text-2xl font-bold mb-2">Delay reduction impact by monitoring focus</h2>
            <div className="bars mt-8 space-y-6">
              {[
                { label: "Faster issue detection", value: 84 },
                { label: "Shorter response time", value: 79 },
                { label: "Lower downtime minutes", value: 74 },
                { label: "Better schedule adherence", value: 68 },
                { label: "Improved workflow flow", value: 71 },
              ].map((bar, i) => (
                <div key={i} className="bar-row grid grid-cols-[180px_1fr_54px] gap-4 items-center">
                  <div className="bar-name font-medium">{bar.label}</div>
                  <div className="track">
                    <div className="fill h-full rounded-full bg-gradient-to-r from-[#21a366] to-[#14b8a6]" style={{ width: `${bar.value}%` }} />
                  </div>
                  <div className="bar-val font-bold">{bar.value}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Ring Charts */}
          <div className="viz bg-white border border-[#143123]/10 rounded-3xl p-10">
            <h2 className="text-2xl font-bold mb-8">Live health snapshot</h2>
            <div className="rings space-y-6">
              {[
                { percent: 86, label: "Alert resolution rate", color: "#21a366" },
                { percent: 73, label: "Line visibility score", color: "#2f80ed" },
                { percent: 69, label: "Delay prevention rate", color: "#f97316" },
              ].map((ring, i) => (
                <div key={i} className="ring-card bg-white border border-[#143123]/10 rounded-2xl p-6 flex items-center gap-6">
                  <div className="ring mx-auto" style={{ background: `conic-gradient(${ring.color} ${ring.percent}%, #e6f0e9 ${ring.percent}%)` }}>
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-[#143123]">{ring.percent}%</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{ring.label}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Database Snapshot */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Monitoring Database Snapshot</h2>
          <div className="bg-white border border-[#143123]/10 rounded-3xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f8fff9]">
                  <th className="p-6 text-left">Metric</th>
                  <th className="p-6 text-left">Live value</th>
                  <th className="p-6 text-left">What it tells the team</th>
                  <th className="p-6 text-left">Immediate action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#143123]/10">
                {[
                  ["Average response time", "7.2 min", "How quickly the team responds", "Escalate if above target"],
                  ["Downtime events", "11 / day", "Frequency of production stops", "Review repeat events"],
                  ["OEE", "79.6%", "Overall plant effectiveness", "Check loss categories"],
                  ["Sensor alerts", "5 active", "Live conditions that may delay", "Assign ownership now"],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-6 font-semibold">{row[0]}</td>
                    <td className="p-6">{row[1]}</td>
                    <td className="p-6 text-[#5f7669]">{row[2]}</td>
                    <td className="p-6 text-[#5f7669]">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Case Study */}
        <section className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="card bg-white border border-[#143123]/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">Case study: one plant cut delays with live visibility</h2>
            <p className="mb-6"><strong>Situation:</strong> Frequent line pauses and slow escalation.</p>
            <p className="mb-6"><strong>Action:</strong> Live monitoring dashboard with alerts and shared visibility.</p>
            <p><strong>Result:</strong> Reduced delay duration and improved escalation speed.</p>
          </div>
          <div className="card bg-white border border-[#143123]/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">Why it worked</h2>
            <ul className="space-y-6 text-[#5f7669]">
              <li><strong>Visibility at the right moment</strong> — Issues caught early</li>
              <li><strong>Clear ownership</strong> — Alerts had responsible people</li>
              <li><strong>Better communication</strong> — Shared live picture</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">FAQs</h2>
          <div className="space-y-4">
            {[
              { q: "What is real-time monitoring in a plant?", a: "Live tracking of equipment, processes, alerts, and production conditions." },
              { q: "How does monitoring reduce operational delays?", a: "It helps catch bottlenecks and issues earlier so teams can respond faster." },
              { q: "Which metrics matter most?", a: "Downtime minutes, response time, OEE, schedule adherence, and asset performance." },
            ].map((faq, i) => (
              <details key={i} className="bg-white border border-[#143123]/10 rounded-3xl p-8">
                <summary className="font-semibold cursor-pointer">{faq.q}</summary>
                <p className="mt-6 text-[#5f7669]">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="note text-center text-[#5f7669] mt-20">
          Built for operations teams that want fewer delays, faster decisions, and stronger day-to-day control.
        </div>
      </div>
    </div>
  );
};

export default RealTimeMonitoringDelays;
