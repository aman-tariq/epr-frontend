'use client';

import React from 'react';

const CommissioningChecklistsReadiness: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b1220] text-[#e5eefc] font-sans">
      <div className="max-w-[1180px] mx-auto px-5 py-10">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#1a253f] to-[#0f172a] border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#ffd166] rounded-full opacity-10 blur-3xl" />

          <div className="inline-block px-5 py-2 bg-white/10 rounded-full text-[#52d6c5] text-sm tracking-widest mb-6">
            Operational Readiness Blog
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            How Commissioning Checklists Improve<br />Operational Readiness
          </h1>

          <p className="text-xl text-[#b7c4dd] max-w-4xl">
            In modern industrial projects, operational readiness is a business-critical strategy. Commissioning checklists reduce startup delays, strengthen safety compliance, and ensure smoother handover to operations.
          </p>

          <div className="mt-8 p-6 bg-white/5 border-l-4 border-[#52d6c5] rounded-2xl">
            <strong>The most expensive startup problem is usually the one that was never checked before commissioning.</strong>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { num: '92%', lbl: 'Better readiness visibility' },
              { num: '68%', lbl: 'Reduction in startup delays' },
              { num: '74%', lbl: 'Lower rework exposure' },
              { num: '81%', lbl: 'Higher team accountability' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-[#52d6c5]">{stat.num}</div>
                <div className="text-sm text-[#b7c4dd] mt-2">{stat.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Commissioning Readiness is a Business Priority */}
        <section className="mt-12 bg-[#111b31] border border-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-6">Why commissioning readiness is now a business priority</h2>
          <p className="text-[#b7c4dd] mb-6">
            Across industrial sectors, companies are investing heavily in automation and digital tools. Yet many plants still struggle during startup due to poor commissioning management.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Common startup risks without checklists</h3>
              <ul className="space-y-3 text-[#b7c4dd]">
                {['Incomplete equipment testing', 'Missed safety validation steps', 'Improper SOP handover', 'Untrained operations teams', 'Delayed utility readiness', 'Poor inter-department communication'].map((item, i) => (
                  <li key={i} className="flex gap-3">• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Business advantages of checklist-driven commissioning</h3>
              <ul className="space-y-3 text-[#b7c4dd]">
                {['Faster production ramp-up', 'Improved operational stability', 'Lower commissioning risk', 'Reduced startup downtime', 'Higher documentation traceability', 'Better audit & compliance readiness'].map((item, i) => (
                  <li key={i} className="flex gap-3">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why Checklists Matter */}
        <div className="grid md:grid-cols-5 gap-6 mt-12">
          <div className="md:col-span-3 bg-[#111b31] border border-white/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">Why commissioning checklists matter</h2>
            <p className="mb-6">Commissioning is the critical bridge between construction and operations. A structured checklist ensures every system is verified before energization.</p>
            <p className="mb-6">They create a single source of truth and help all stakeholders confirm that prerequisites are truly complete.</p>

            <div className="bg-[#52d6c5]/10 border-l-4 border-[#52d6c5] p-6 rounded-2xl my-8">
              <strong>Operational readiness improves when everyone can answer:</strong><br />
              Is it installed correctly? Is it tested correctly? Is the documentation complete? Is the team prepared?
            </div>
          </div>

          <div className="md:col-span-2 bg-[#111b31] border border-white/10 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold mb-6">Key outcomes of a strong checklist</h3>
            <div className="flex flex-wrap gap-3">
              {['Clear ownership', 'Faster handover', 'Reduced startup errors', 'Better traceability', 'Safer operations'].map((tag, i) => (
                <span key={i} className="px-5 py-2 bg-white/10 text-[#7aa7ff] rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* How Checklists Improve Readiness */}
        <section className="mt-12 bg-[#111b31] border border-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-8">How checklists improve readiness in real life</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">1) They reduce missed steps</h3>
                <p className="text-[#b7c4dd]">Multiple teams working in parallel makes it easy to overlook critical tasks.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">2) They improve communication</h3>
                <p className="text-[#b7c4dd]">Everyone works from the same source of truth.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">3) They support safety and compliance</h3>
                <p className="text-[#b7c4dd]">Closes gaps in interlocks, permits, and calibrations.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">4) They create accountability</h3>
                <p className="text-[#b7c4dd]">Every item has an owner and deadline.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">5) They shorten stabilization time</h3>
                <p className="text-[#b7c4dd]">Fewer hidden problems after handover.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">6) They improve audit readiness</h3>
                <p className="text-[#b7c4dd]">Strong records for reviews and troubleshooting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual View - Impact Bars */}
        <section className="mt-12 bg-[#111b31] border border-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-2">Visual view: where checklists add the most value</h2>
          <p className="text-[#b7c4dd] mb-8">Relative impact across typical commissioning outcomes</p>

          <div className="space-y-6">
            {[
              { label: 'Visibility of pending work', value: 92 },
              { label: 'Fewer startup errors', value: 84 },
              { label: 'Faster handover to operations', value: 78 },
              { label: 'Better safety compliance', value: 88 },
              { label: 'Improved cross-team coordination', value: 81 },
            ].map((bar, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="w-60 font-medium">{bar.label}</div>
                <div className="flex-1 h-4 bg-[#16233f] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#52d6c5] to-[#7aa7ff] rounded-full"
                    style={{ width: `${bar.value}%` }}
                  />
                </div>
                <div className="w-12 text-right font-mono">{bar.value}%</div>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Database View */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-[#111b31] border border-white/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">Sample database view for commissioning control</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5">
                  <th className="text-left p-4">System</th>
                  <th className="text-left p-4">Task</th>
                  <th className="text-left p-4">Owner</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  ['Utilities', 'Verify compressed air pressure', 'Maintenance', 'Complete'],
                  ['Electrical', 'Check panel termination', 'Electrical team', 'In progress'],
                  ['Instrumentation', 'Calibrate transmitters', 'Instrumentation', 'Complete'],
                  ['Safety', 'Validate ESD logic', 'HSE + Operations', 'Pending'],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-4">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4 text-[#b7c4dd]">{row[2]}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${row[3] === 'Complete' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {row[3]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#111b31] border border-white/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">What the data tells us</h2>
            <p className="mb-6">Live tracking helps identify bottlenecks instantly.</p>
            <div className="bg-[#52d6c5]/10 p-6 rounded-2xl border-l-4 border-[#52d6c5]">
              <strong>Best practice:</strong> Use one consistent checklist format, assign clear owners, and review status daily.
            </div>
          </div>
        </div>

        {/* Case Study */}
        <section className="mt-12 bg-[#111b31] border border-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-6">Case study: turning a delayed start-up into a controlled launch</h2>
          <p className="mb-4"><strong>Situation:</strong> Scattered spreadsheets and verbal follow-ups caused repeated delays.</p>
          <p className="mb-4"><strong>Action:</strong> Implemented a structured commissioning checklist with owners and daily reviews.</p>
          <p><strong>Result:</strong> Clearer visibility, smoother handover, and confident operations team from day one.</p>
        </section>

        {/* Readiness Stages */}
        <section className="mt-12 bg-[#111b31] border border-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-8">Understanding operational readiness in simple stages</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div><h3 className="font-semibold">Stage 1: Physical completion</h3><p className="text-[#b7c4dd]">Equipment installed and verified.</p></div>
              <div><h3 className="font-semibold">Stage 2: Technical verification</h3><p className="text-[#b7c4dd]">Tests and loop checks completed.</p></div>
              <div><h3 className="font-semibold">Stage 3: Documentation readiness</h3><p className="text-[#b7c4dd]">SOPs, manuals, and records ready.</p></div>
            </div>
            <div className="space-y-8">
              <div><h3 className="font-semibold">Stage 4: Team readiness</h3><p className="text-[#b7c4dd]">Operators fully trained.</p></div>
              <div><h3 className="font-semibold">Stage 5: Handover readiness</h3><p className="text-[#b7c4dd]">All issues resolved and signed off.</p></div>
              <div><h3 className="font-semibold">Stage 6: Stable operations</h3><p className="text-[#b7c4dd]">Plant runs reliably with minimal deviations.</p></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 bg-[#111b31] border border-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-8">FAQs</h2>
          <div className="space-y-4">
            {[
              { q: 'What is a commissioning checklist?', a: 'A structured list of tasks, verifications, and approvals used to confirm that a system or plant is ready for start-up.' },
              { q: 'Why does operational readiness depend on checklists?', a: 'Because readiness includes testing, documentation, safety, training, and clear ownership.' },
              { q: 'Can digital checklists be better than paper-based ones?', a: 'Yes. They allow real-time tracking, evidence attachment, and live reporting.' },
            ].map((faq, i) => (
              <details key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 group">
                <summary className="font-semibold cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-[#b7c4dd]">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final Thought */}
        <section className="mt-12 bg-[#111b31] border border-white/10 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Final Thought</h2>
          <p className="max-w-3xl mx-auto text-lg text-[#b7c4dd]">
            Commissioning checklists improve operational readiness by bringing structure, visibility, and accountability to the most critical phase of any project.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CommissioningChecklistsReadiness;
