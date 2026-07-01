'use client';

import React from 'react';

const PlantSetupHandoverBestPractices: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#10233f] font-sans">
      <div className="max-w-[1240px] mx-auto px-5 py-12">
        {/* Hero */}
        <section className="bg-gradient-to-br from-white via-[#f8fbff] to-white border border-[#10233f]/10 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-xl">
          <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-[#d4a74c] rounded-full opacity-10 blur-3xl" />
          <div className="absolute -left-32 -top-32 w-80 h-80 bg-[#1f7ae0] rounded-full opacity-10 blur-3xl" />

          <div className="inline-flex items-center gap-2 bg-[#0f4c81]/10 text-[#0f4c81] px-5 py-2 rounded-full text-sm tracking-widest mb-6">
            Plant Handover & Documentation Strategy
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Best Practices for Organizing Plant Setup and Handover Files
          </h1>

          <p className="text-[#5f6f87] text-lg max-w-4xl">
            A plant handover should never feel like a scramble. When setup files, commissioning records, drawings, test reports, punch lists, SOPs, and approvals are organized properly, the handover becomes faster, cleaner, and far easier for operations to trust.
          </p>

          <div className="mt-8 bg-[#d4a74c]/10 border-l-4 border-[#d4a74c] p-6 rounded-2xl font-semibold">
            A well-organized handover file system does more than store documents — it protects startup speed, operational confidence, and long-term plant performance.
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { num: '↑', lbl: 'Document clarity' },
              { num: '↓', lbl: 'Handover delays' },
              { num: '↑', lbl: 'Team trust' },
              { num: '↓', lbl: 'Missing records' },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-[#10233f]/10 rounded-2xl p-6 text-center shadow">
                <div className="text-4xl font-bold text-[#0f4c81]">{stat.num}</div>
                <div className="text-sm text-[#5f6f87] mt-2">{stat.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why It Matters */}
        <div className="grid md:grid-cols-5 gap-6 mt-12">
          <div className="md:col-span-3 bg-white border border-[#10233f]/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">Why plant setup and handover files matter</h2>
            <p className="mb-6">Plant setup files are the backbone of commissioning, handover, and early operations. They include the evidence that a system was installed correctly, tested properly, and approved for use.</p>
            <p className="mb-6">Without a clear file structure, critical information gets buried. Organized files reduce risk and create a stronger handover experience.</p>

            <div className="bg-[#1f7ae0]/10 border-l-4 border-[#1f7ae0] p-6 rounded-2xl my-8">
              <strong>Operational reality:</strong> a plant is only as ready as its records. If the paperwork is incomplete, the handover is incomplete.
            </div>
          </div>

          <div className="md:col-span-2 bg-white border border-[#10233f]/10 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold mb-6">What well-organized files help with</h3>
            <div className="flex flex-wrap gap-3">
              {['Faster sign-off', 'Better traceability', 'Easy audits', 'Safer startup', 'Stronger compliance'].map((tag, i) => (
                <span key={i} className="px-5 py-2.5 bg-[#0f4c81]/10 text-[#0f4c81] rounded-full text-sm border border-[#0f4c81]/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <section className="mt-12 bg-white border border-[#10233f]/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-8">Best practices for organizing setup and handover files</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div>
                <h3 className="font-semibold text-xl mb-3">1) Create one master structure</h3>
                <p className="text-[#5f6f87]">Use a standard folder hierarchy for every project so the file system is predictable.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">2) Name files consistently</h3>
                <p className="text-[#5f6f87]">Include system name, document type, revision, and date.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">3) Separate active and closed items</h3>
                <p className="text-[#5f6f87]">Keep pending items separate from finished files.</p>
              </div>
            </div>
            <div className="space-y-10">
              <div>
                <h3 className="font-semibold text-xl mb-3">4) Add ownership to every record</h3>
                <p className="text-[#5f6f87]">Every checklist and report should have a responsible person.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">5) Use version control</h3>
                <p className="text-[#5f6f87]">Make sure teams always know which version is the latest approved one.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">6) Store evidence with the file</h3>
                <p className="text-[#5f6f87]">Link photos, test results, and sign-offs directly to documents.</p>
              </div>
            </div>
          </div>
        </section>

        {/* File Categories */}
        <section className="mt-12 bg-white border border-[#10233f]/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-8">Simple file categories every plant should have</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Technical documents', desc: 'Drawings, P&IDs, manuals, datasheets, design references.' },
              { title: 'Commissioning records', desc: 'Checklists, test sheets, punch lists, inspections.' },
              { title: 'Operations handover', desc: 'SOPs, training records, maintenance plans.' },
              { title: 'Safety and compliance', desc: 'Permits, HSE sign-offs, risk assessments.' },
              { title: 'Asset and maintenance', desc: 'Asset register, warranty papers, spare parts lists.' },
              { title: 'Final closure files', desc: 'Handover certificates, closeout summaries.' },
            ].map((cat, i) => (
              <div key={i} className="bg-gradient-to-b from-white to-[#f8fbff] border border-[#10233f]/10 rounded-2xl p-7 shadow">
                <strong className="block text-lg mb-3">{cat.title}</strong>
                <p className="text-[#5f6f87] text-sm">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visual View - Bars */}
        <section className="mt-12 bg-white border border-[#10233f]/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-2">Visual view: where good file organization adds value</h2>
          <p className="text-[#5f6f87] mb-8">Most visible benefits of a structured handover file system</p>

          <div className="space-y-6">
            {[
              { label: 'Faster document retrieval', val: 93 },
              { label: 'Cleaner handover process', val: 88 },
              { label: 'Fewer missing records', val: 85 },
              { label: 'Stronger audit readiness', val: 90 },
              { label: 'Better team confidence', val: 87 },
            ].map((bar, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="w-64 font-medium text-sm">{bar.label}</div>
                <div className="flex-1 h-4 bg-[#e6edf7] rounded-full overflow-hidden border border-[#10233f]/10">
                  <div
                    className="h-full bg-gradient-to-r from-[#0f4c81] to-[#1f7ae0] rounded-full"
                    style={{ width: `${bar.val}%` }}
                  />
                </div>
                <div className="w-12 font-mono text-right">{bar.val}%</div>
              </div>
            ))}
          </div>
        </section>

        {/* Database Tracker */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white border border-[#10233f]/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">Database-style handover tracker</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#eef5fc]">
                  <th className="text-left p-4">File Category</th>
                  <th className="text-left p-4">Example Record</th>
                  <th className="text-left p-4">Owner</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ['Electrical', 'Motor test report', 'Electrical team', 'Approved'],
                  ['Mechanical', 'Installation checklist', 'Mechanical team', 'Complete'],
                  ['Instrumentation', 'Calibration certificate', 'Instrumentation', 'Pending review'],
                  ['Operations', 'SOP training record', 'Operations lead', 'In progress'],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[#f8fbff]">
                    <td className="p-4 font-medium">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4 text-[#5f6f87]">{row[2]}</td>
                    <td className="p-4">
                      <span className="px-4 py-1 text-xs rounded-full bg-green-100 text-green-700">{row[3]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-[#10233f]/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">What a database approach solves</h2>
            <p className="mb-6">Teams can filter by system, owner, or status instead of hunting through folders.</p>
            <div className="bg-[#1f7ae0]/10 border-l-4 border-[#1f7ae0] p-6 rounded-2xl">
              <strong>Best practice:</strong> Every key file should have a status, owner, revision, and linked evidence.
            </div>
          </div>
        </div>

        {/* Case Study */}
        <section className="mt-12 bg-white border border-[#10233f]/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-6">Case study: how a structured file system improved handover</h2>
          <p className="mb-4"><strong>Situation:</strong> Scattered versions and no standard structure caused confusion during handover.</p>
          <p className="mb-4"><strong>Action:</strong> Implemented standardized folder structure, naming rules, and a master tracker.</p>
          <p><strong>Result:</strong> Faster document access, cleaner handover, and higher confidence for the operations team.</p>
        </section>

        {/* Workflow Stages */}
        <section className="mt-12 bg-white border border-[#10233f]/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-8">Understanding the handover workflow in simple stages</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              ['Stage 1: Collect', 'Gather all technical, safety, and operations documents.'],
              ['Stage 2: Classify', 'Sort files into clear categories.'],
              ['Stage 3: Verify', 'Check completeness and approvals.'],
              ['Stage 4: Control', 'Apply version control and ownership.'],
              ['Stage 5: Transfer', 'Deliver final package to operations.'],
              ['Stage 6: Maintain', 'Keep system updated after handover.'],
            ].map(([title, desc], i) => (
              <div key={i}>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-[#5f6f87]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 bg-white border border-[#10233f]/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-8">FAQs</h2>
          <div className="space-y-4">
            {[
              { q: 'What should be included in plant handover files?', a: 'Technical drawings, commissioning records, SOPs, training records, safety documents, and maintenance references.' },
              { q: 'Why is file organization important during handover?', a: 'It prevents delays, confusion, and missing records for the operations team.' },
              { q: 'Is a digital handover database better than folders alone?', a: 'Yes. It adds visibility, searchability, and accountability.' },
            ].map((faq, i) => (
              <details key={i} className="bg-[#fbfdff] border border-[#10233f]/10 rounded-2xl p-6">
                <summary className="font-semibold cursor-pointer">{faq.q}</summary>
                <p className="mt-4 text-[#5f6f87]">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final Thought */}
        <section className="mt-12 bg-white border border-[#10233f]/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Final Thought</h2>
          <p className="max-w-3xl mx-auto text-lg text-[#5f6f87]">
            Organizing plant setup and handover files is part of operational readiness. A strong file system helps the project hand over cleaner, the operations team take over faster, and the business protect performance from day one.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PlantSetupHandoverBestPractices;
