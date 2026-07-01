'use client';

import React from 'react';

const PlantOperationIntelligence: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#10233f] font-sans">

      <div className="max-w-[1260px] mx-auto px-6 py-8">
        

        <div className="grid  gap-8">
          {/* Main Content */}
          <main>
            {/* Hero */}
            <section className="hero-card bg-white border border-[#10233f]/10 rounded-3xl overflow-hidden shadow-xl">
              <div className="featured-image h-[380px] md:h-[420px] relative flex items-end p-8 md:p-12 text-white" style={{
                backgroundImage: 'linear-gradient(135deg, #0f4c81 0%, #2b7de9 50%, #22a6a1 100%)',
              }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2),transparent)]" />

                <div className="relative z-10 max-w-3xl">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm tracking-widest mb-6">
                    Plant Operation Intelligence
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    How Plant Operation Intelligence Improves Daily Operational Control
                  </h1>
                  <p className="text-lg text-white/90">
                    Plant operation intelligence gives teams a clearer view of what is happening, what is changing, and what needs attention right now.
                  </p>
                  <div className="mt-6 p-5 bg-white/10 backdrop-blur-md border-l-4 border-[#d69b2d] rounded-2xl">
                    Better visibility creates better control — and better control keeps the plant steady, safe, and productive.
                  </div>
                </div>
              </div>
            </section>

            {/* Overview Section */}
            <section id="overview" className="mt-12 grid md:grid-cols-5 gap-6">
              <article className="md:col-span-3 bg-white border border-[#10233f]/10 rounded-3xl p-10">
                <h2 className="text-3xl font-bold mb-6">Why plant operation intelligence matters every day</h2>
                <p className="mb-6">Daily operational control depends on having the right information at the right moment. Plant operation intelligence reduces uncertainty by turning data into actionable guidance.</p>
                <p>It connects records, alarms, workflows, and performance trends so teams can respond faster and with more confidence.</p>
                <div className="mt-8 p-6 bg-[#f7fbff] border-l-4 border-[#22a6a1] rounded-2xl">
                  <strong>Operational reality:</strong> When the plant can see itself clearly, it can control itself better.
                </div>
              </article>

              <aside className="md:col-span-2 bg-white border border-[#10233f]/10 rounded-3xl p-10">
                <h3 className="text-2xl font-semibold mb-6">What plant intelligence improves</h3>
                <div className="flex flex-wrap gap-3">
                  {["Real-time visibility", "Better shift control", "Faster issue response", "Improved consistency", "Lower downtime", "Stronger accountability"].map((item, i) => (
                    <span key={i} className="tag px-5 py-2 bg-[#0f4c81]/10 text-[#0f4c81] rounded-full text-sm border border-[#0f4c81]/20">{item}</span>
                  ))}
                </div>
              </aside>
            </section>

            {/* Benefits */}
            <section id="benefits" className="mt-12 bg-white border border-[#10233f]/10 rounded-3xl p-10">
              <h2 className="text-3xl font-bold mb-8">How plant operation intelligence improves daily operational control</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-10">
                  <div>
                    <h3 className="font-semibold text-xl mb-3">1) Clear current situation</h3>
                    <p className="text-[#5f6f87]">Teams see what is running, delayed, or needs attention without guessing.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3">2) Faster decisions</h3>
                    <p className="text-[#5f6f87]">Supervisors can prioritize actions with reliable information.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3">3) Better shift handovers</h3>
                    <p className="text-[#5f6f87]">Structured records reduce information loss between teams.</p>
                  </div>
                </div>
                <div className="space-y-10">
                  <div>
                    <h3 className="font-semibold text-xl mb-3">4) Fewer repeated mistakes</h3>
                    <p className="text-[#5f6f87]">Historical trends help avoid recurring issues.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3">5) Stronger compliance</h3>
                    <p className="text-[#5f6f87]">Every action is traceable with time and owner.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3">6) More stable production</h3>
                    <p className="text-[#5f6f87]">Fewer surprises lead to consistent output and quality.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Visual Insights */}
            <section id="visuals" className="mt-12 grid md:grid-cols-1 gap-6">
              <div className="md:col-span-3 bg-white border border-[#10233f]/10 rounded-3xl p-10">
                <h2 className="text-3xl font-bold mb-6">Visual data: where operational intelligence creates the biggest gains</h2>
                <div className="space-y-6 mt-8">
                  {[
                    { label: "Faster issue recognition", value: 92 },
                    { label: "Better handover clarity", value: 87 },
                    { label: "Improved response timing", value: 89 },
                    { label: "Lower repeat errors", value: 80 },
                    { label: "Stronger operational control", value: 91 },
                  ].map((bar, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <div className="w-60 font-medium">{bar.label}</div>
                      <div className="flex-1 h-4 bg-[#e6eef7] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#22a6a1] to-[#2b7de9] rounded-full" style={{ width: `${bar.value}%` }} />
                      </div>
                      <div className="w-12 text-right font-mono">{bar.value}%</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 bg-white border border-[#10233f]/10 rounded-3xl p-10">
                <h2 className="text-2xl font-bold mb-6">Control impact by area</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-64 items-end">
                  {[
                    { height: "84%", label: "Visibility", color: "#0f4c81" },
                    { height: "68%", label: "Control", color: "#2b7de9" },
                    { height: "76%", label: "Speed", color: "#d69b2d" },
                    { height: "62%", label: "Consistency", color: "#22a6a1" },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-end h-full gap-3">
                      <div className="w-20 rounded-t-3xl" style={{ height: item.height, background: item.color }} />
                      <div className="text-xs text-center text-[#5f6f87]">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Database View */}
            <section className="mt-12 bg-white border border-[#10233f]/10 rounded-3xl p-10">
              <h2 className="text-3xl font-bold mb-6">Database view: what a plant intelligence system tracks</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#f7fbff]">
                    <th className="p-4 text-left">Record Type</th>
                    <th className="p-4 text-left">What it tells the team</th>
                    <th className="p-4 text-left">Owner</th>
                    <th className="p-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#10233f]/10">
                  {[
                    ["Shift handover note", "Current operational context", "Shift supervisor", "Active"],
                    ["Alarm log", "Recurring or urgent issues", "Operations", "Monitored"],
                    ["Maintenance history", "Patterns affecting performance", "Maintenance", "Updated"],
                    ["Production dashboard", "Target achievement", "Operations lead", "Live"],
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="p-4 font-medium">{row[0]}</td>
                      <td className="p-4 text-[#5f6f87]">{row[1]}</td>
                      <td className="p-4 text-[#5f6f87]">{row[2]}</td>
                      <td className="p-4"><span className="px-4 py-1 bg-green-100 text-green-700 text-xs rounded-full">{row[3]}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Case Study */}
            <section id="case-study" className="mt-12 bg-white border border-[#10233f]/10 rounded-3xl p-10">
              <h2 className="text-3xl font-bold mb-6">Case study: improving control through connected plant information</h2>
              <p><strong>Situation:</strong> Inconsistent logs and scattered information led to poor daily control.</p>
              <p><strong>Action:</strong> Implemented a connected plant intelligence system linking handovers, alarms, maintenance, and actions.</p>
              <p><strong>Result:</strong> Faster decisions, better shift handovers, and more stable production.</p>
            </section>

            {/* FAQ */}
            <section id="faqs" className="mt-12 bg-white border border-[#10233f]/10 rounded-3xl p-10">
              <h2 className="text-3xl font-bold mb-8">FAQs</h2>
              <div className="space-y-4">
                {[
                  { q: "What is plant operation intelligence?", a: "It is the ability to combine plant data, records, and workflows into a usable view that helps teams make better operational decisions." },
                  { q: "How does it improve daily operational control?", a: "It gives shift teams better visibility into current conditions, priorities, and follow-up actions." },
                ].map((faq, i) => (
                  <details key={i} className="bg-[#f7fbff] border border-[#10233f]/10 rounded-2xl p-6">
                    <summary className="font-semibold cursor-pointer">{faq.q}</summary>
                    <p className="mt-4 text-[#5f6f87]">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Final Thought */}
            <section className="mt-16 bg-white border border-[#10233f]/10 rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Final Thought</h2>
              <p className="max-w-3xl mx-auto text-lg text-[#5f6f87]">
                Plant operation intelligence improves daily operational control by turning scattered information into clear, usable guidance. Better visibility leads to better decisions and more stable operations.
              </p>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white border border-[#10233f]/10 rounded-3xl p-8">
              <h3 className="font-semibold mb-4">Post Details</h3>
              <div className="space-y-4">
                <div><span className="text-xs text-[#5f6f87] block">Category</span><strong>Plant Operation Intelligence</strong></div>
                <div><span className="text-xs text-[#5f6f87] block">Theme</span><strong>Daily Operational Control</strong></div>
              </div>
            </div>

            <div className="bg-white border border-[#10233f]/10 rounded-3xl p-8">
              <h3 className="font-semibold mb-4">On this page</h3>
              <ul className="space-y-3 text-sm text-[#5f6f87]">
                <li><a href="#overview" className="hover:text-[#0f4c81]">Why it matters</a></li>
                <li><a href="#benefits" className="hover:text-[#0f4c81]">Benefits</a></li>
                <li><a href="#visuals" className="hover:text-[#0f4c81]">Visual Insights</a></li>
                <li><a href="#case-study" className="hover:text-[#0f4c81]">Case Study</a></li>
                <li><a href="#faqs" className="hover:text-[#0f4c81]">FAQs</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PlantOperationIntelligence;
