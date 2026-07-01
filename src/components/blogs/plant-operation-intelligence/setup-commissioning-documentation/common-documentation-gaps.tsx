'use client';

import React from 'react';

const CommonDocumentationGaps: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#2a2433] font-sans">
      <div className="max-w-[1260px] mx-auto px-5 py-12">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2a2433] to-[#5c2f61] rounded-3xl p-10 md:p-16 text-white border border-white/10 shadow-2xl">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#e76f51] rounded-full opacity-20 blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#c78a2b] rounded-full opacity-20 blur-3xl translate-y-1/3 -translate-x-1/3" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-5 py-2 rounded-full text-sm tracking-widest mb-6">
              Commissioning Documentation
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Common Documentation Gaps That Delay Commissioning
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-4xl">
              Poor documentation slows approvals, weakens operational readiness, and creates unnecessary commissioning pressure.
            </p>

            <div className="mt-8 bg-white/10 border-l-4 border-[#e76f51] p-6 rounded-2xl backdrop-blur-sm">
              <strong>Key Insight:</strong> If the evidence is incomplete, the readiness is incomplete.
            </div>
          </div>
        </section>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center justify-between gap-6 bg-white border border-[#2a2433]/10 rounded-2xl p-6 mt-8 shadow">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8b3d8f] to-[#e76f51] flex items-center justify-center text-white text-2xl font-bold">CD</div>
            <div>
              <div className="font-semibold">Industrial Documentation Team</div>
              <div className="text-sm text-[#6e667a]">Commissioning Specialists</div>
            </div>
          </div>
          <div className="flex gap-8 text-sm">
            <div><span className="text-[#6e667a]">Published</span><br /><strong>May 2026</strong></div>
            <div><span className="text-[#6e667a]">Category</span><br /><strong>Commissioning Documentation</strong></div>
            <div><span className="text-[#6e667a]">Reading Time</span><br /><strong>10 min read</strong></div>
          </div>
        </div>

        {/* Why Documentation Gaps Matter */}
        <div className="grid md:grid-cols-5 gap-6 mt-12">
          <div className="md:col-span-3 bg-white border border-[#2a2433]/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">Why documentation gaps create real commissioning problems</h2>
            <p className="mb-6">Commissioning is not just about testing equipment. It is about proving that the plant is ready to operate safely and with complete records.</p>
            <p className="mb-6">Missing signatures, outdated drawings, incomplete test reports, and unclosed punch items can stop progress and delay handover.</p>

            <div className="bg-[#fff8f3] border-l-4 border-[#e76f51] p-6 rounded-2xl my-8">
              <strong>Operational truth:</strong> If the evidence is incomplete, the readiness is incomplete.
            </div>
          </div>

          <div className="md:col-span-2 bg-white border border-[#2a2433]/10 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold mb-6">Most common gap areas</h3>
            <div className="flex flex-wrap gap-3">
              {['Missing signatures', 'Outdated drawings', 'Incomplete test reports', 'Unclosed punch items', 'No version control', 'Missing SOPs'].map((tag, i) => (
                <span key={i} className="px-5 py-2 bg-[#8b3d8f]/10 text-[#8b3d8f] rounded-full text-sm border border-[#8b3d8f]/20">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Where Delays Begin */}
        <section className="mt-12 bg-white border border-[#2a2433]/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-8">Where documentation delays usually begin</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div>
                <h3 className="font-semibold text-xl mb-3">1) Drawings and revisions are not controlled</h3>
                <p className="text-[#6e667a]">Different versions of P&IDs and drawings cause confusion during checks and troubleshooting.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">2) Inspection and test records are incomplete</h3>
                <p className="text-[#6e667a]">Missing evidence forces rework or delays in approval.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">3) Punch list items are not tracked properly</h3>
                <p className="text-[#6e667a]">Open issues remain unresolved and delay final handover.</p>
              </div>
            </div>
            <div className="space-y-10">
              <div>
                <h3 className="font-semibold text-xl mb-3">4) SOPs and training files are not ready</h3>
                <p className="text-[#6e667a]">Operations cannot take over confidently without proper procedures.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">5) Approvals are left until the last minute</h3>
                <p className="text-[#6e667a]">Creates bottlenecks and pressure at the end.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">6) Files are scattered across multiple locations</h3>
                <p className="text-[#6e667a]">Email, folders, and drives make it hard to know what is current.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual View - Impact Bars */}
        <section className="mt-12 bg-white border border-[#2a2433]/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-2">Visual view: how documentation gaps affect commissioning</h2>
          <p className="text-[#6e667a] mb-8">Biggest delay contributors</p>

          <div className="space-y-6">
            {[
              { label: 'Approval waiting time', val: 91 },
              { label: 'Document search effort', val: 86 },
              { label: 'Rework due to wrong revision', val: 79 },
              { label: 'Late punch item closure', val: 88 },
              { label: 'Delay in handover sign-off', val: 90 },
            ].map((bar, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="w-64 font-medium">{bar.label}</div>
                <div className="flex-1 h-4 bg-[#ece4d4] rounded-full overflow-hidden border border-[#2a2433]/10">
                  <div
                    className="h-full bg-gradient-to-r from-[#e76f51] to-[#c78a2b] rounded-full"
                    style={{ width: `${bar.val}%` }}
                  />
                </div>
                <div className="w-12 font-mono text-right">{bar.val}%</div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Snapshot */}
        <section className="mt-12 bg-white border border-[#2a2433]/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-8">Data snapshot: where documentation delays are most likely</h2>
          <div className="bg-[#fffdf7] border border-[#2a2433]/10 rounded-3xl p-8">
            <div className="grid grid-cols-5 gap-4 h-72 items-end">
              {[
                { height: '78%', label: 'Missing signatures', color: 'from-[#8b3d8f] to-[#c78a2b]' },
                { height: '64%', label: 'Wrong revisions', color: 'from-[#e76f51] to-[#c78a2b]' },
                { height: '72%', label: 'Open punch items', color: 'from-[#c78a2b] to-[#e76f51]' },
                { height: '58%', label: 'Incomplete test data', color: 'from-[#2f8f7f] to-[#8b3d8f]' },
                { height: '46%', label: 'Scattered files', color: 'from-[#e76f51] to-[#8b3d8f]' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-end h-full gap-3">
                  <div className={`w-full max-w-[110px] rounded-t-3xl bg-gradient-to-t ${item.color}`} style={{ height: item.height }} />
                  <div className="text-xs text-center text-[#6e667a] leading-tight">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Database Tracker */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white border border-[#2a2433]/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">Database-style tracker for closing gaps</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#fff8f3]">
                  <th className="p-4 text-left">Document Type</th>
                  <th className="p-4 text-left">Common Gap</th>
                  <th className="p-4 text-left">Owner</th>
                  <th className="p-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2433]/10">
                {[
                  ['Commissioning checklist', 'Missing evidence', 'Commissioning lead', 'In progress'],
                  ['Drawing package', 'Wrong revision', 'Engineering', 'Pending'],
                  ['Test report', 'Unsigned', 'QA/QC', 'Open'],
                  ['SOP', 'Not finalized', 'Operations', 'In review'],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-4">{row[0]}</td>
                    <td className="p-4 text-[#6e667a]">{row[1]}</td>
                    <td className="p-4 text-[#6e667a]">{row[2]}</td>
                    <td className="p-4">
                      <span className="px-4 py-1 text-xs rounded-full bg-amber-100 text-amber-700">{row[3]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-[#2a2433]/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">What the tracker solves</h2>
            <p className="mb-6">Instant visibility into bottlenecks and missing items.</p>
            <div className="bg-[#fff8f3] border-l-4 border-[#e76f51] p-6 rounded-2xl">
              <strong>Best practice:</strong> Every critical document must have status, owner, revision, and evidence.
            </div>
          </div>
        </div>

        {/* Final Thought */}
        <section className="mt-16 bg-white border border-[#2a2433]/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Final Thought</h2>
          <p className="max-w-3xl mx-auto text-lg text-[#6e667a]">
            Common documentation gaps are one of the most underestimated causes of commissioning delays. Strong documentation discipline brings clarity, control, and confidence to the entire process.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CommonDocumentationGaps;
