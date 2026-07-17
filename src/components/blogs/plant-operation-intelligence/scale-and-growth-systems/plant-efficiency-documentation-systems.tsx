'use client';

import React, { useState } from 'react';
import StickyContactForm from "@/components/StickyContactForm";

const PlantEfficiencyBlog = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-[#1e293b] font-sans">
      <div className="flex flex-col lg:flex-row gap-4 mt-10 items-stretch p-4 md:p-2">
        <div className="flex-1 min-w-0">
      {/* HERO */}
      <header className="pt-8 pb-6 px-2 max-w-8xl mx-auto">
        <div className="bg-gradient-to-br from-[#f8fafc] via-[#edf2f7] to-[#e2e8f0] border-2 border-blue-200 rounded-[34px] shadow-xl overflow-hidden relative">
          <div className="grid ">
            <div className="p-10 md:p-11">
              <div className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase font-bold text-green-700 bg-green-100 border-2 border-green-300 px-5 py-2 rounded-full mb-6">
                Industrial Plant Systems Blog
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.03] tracking-[-0.04em] text-slate-900">
                Build systems that help plants <span className="text-green-600 underline decoration-blue-500 decoration-wavy">grow</span> without losing efficiency.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-slate-700 max-w-3xl font-medium border-l-4 border-blue-500 pl-4">
                The smartest plants do not simply expand output. They protect uptime, keep teams aligned, and turn every workflow into a repeatable advantage. That is where setup and commissioning documentation, commissioning workflow discipline, and digital documentation workflow design start paying off.
              </p>
              <p className="mt-8 text-xl font-bold text-blue-900 max-w-2xl bg-white/80 p-4 rounded-2xl border border-blue-100 shadow-xs">
                Strong systems are not built for the launch day alone — they are built so the plant keeps performing when the pressure rises.
              </p>
              <div className="flex flex-wrap gap-3 mt-10">
                {['Operational readiness', 'Industrial commissioning', 'EPC project documentation', 'Plant operations documentation'].map((tag, i) => (
                  <div key={i} className="bg-white border-2 border-blue-400 text-sm font-semibold px-5 py-2.5 rounded-full text-blue-700 shadow-xs">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <aside className="p-8 md:p-10 flex items-stretch bg-gradient-to-r from-blue-50 to-green-50 border-t-2 border-slate-200">
              <div className="flex-1 bg-white border-2 border-green-400 rounded-3xl p-8 flex flex-col shadow-xs">
                <div>
                  <h3 className="uppercase tracking-widest text-green-700 text-sm font-black">Efficiency in one line</h3>
                  <div className="text-6xl font-black text-slate-900 mt-4 mb-3">3-in-1</div>
                  <p className="text-slate-700 font-medium">One system for growth, one for control, and one for proof. When those three stay connected, the plant scales without confusion.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-10">
                  {[
                    { label: 'Fast', desc: 'installation verification, startup documentation, and handover documentation stay easy to retrieve.', border: 'border-blue-300 bg-blue-50/50 text-blue-900' },
                    { label: 'Clear', desc: 'commissioning standards and quality assurance documentation reduce repeat work.', border: 'border-green-300 bg-green-50/50 text-green-900' },
                    { label: 'Safe', desc: 'startup and shutdown procedures stay consistent for every shift.', border: 'border-amber-300 bg-amber-50/50 text-amber-900' },
                    { label: 'Smart', desc: 'commissioning management system data becomes long-term plant memory.', border: 'border-purple-300 bg-purple-50/50 text-purple-900' }
                  ].map((item, i) => (
                    <div key={i} className={`border-2 rounded-2xl p-5 ${item.border}`}>
                      <strong className="block text-2xl font-extrabold">{item.label}</strong>
                      <span className="text-xs font-semibold mt-1 block leading-relaxed">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* LEAD SECTION */}
        <section className="bg-white border-2 border-green-500 border-l-8 rounded-3xl p-8 md:p-10 my-12 text-lg font-medium leading-relaxed shadow-xs text-slate-800">
          A modern plant grows best when operations, documentation, and performance are designed together. When the <strong>commissioning plan</strong>, <strong>commissioning documentation</strong>, and <strong>O&M documentation</strong> all speak the same language, teams move faster, troubleshoot better, and avoid the waste that usually comes from disconnected systems.
        </section>

        {/* TOC */}
        <div className="flex flex-wrap gap-3 mb-12">
          {[
            { id: 'framework', label: 'System framework', color: 'hover:bg-blue-500 hover:text-white border-blue-300 text-blue-700' },
            { id: 'data', label: 'Efficiency data', color: 'hover:bg-green-500 hover:text-white border-green-300 text-green-700' },
            { id: 'database', label: 'Documentation database', color: 'hover:bg-purple-500 hover:text-white border-purple-300 text-purple-700' },
            { id: 'case', label: 'Case study', color: 'hover:bg-amber-500 hover:text-white border-amber-300 text-amber-700' },
            { id: 'faqs', label: 'FAQs', color: 'hover:bg-indigo-500 hover:text-white border-indigo-300 text-indigo-700' },
            { id: 'keywords', label: 'Keyword map', color: 'hover:bg-rose-500 hover:text-white border-rose-300 text-rose-700' }
          ].map(item => (
            <a key={item.id} href={`#${item.id}`} className={`px-5 py-3 bg-white border-2 rounded-full text-sm font-bold shadow-xs transition-all duration-200 ${item.color}`}>
              {item.label}
            </a>
          ))}
        </div>

        {/* FRAMEWORK */}
        <div id="framework" className="flex items-center gap-3 text-green-700 font-bold text-xs uppercase tracking-widest mb-3">
          <div className="h-1 w-8 bg-green-500 rounded-full" /> What makes a plant efficient
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">The real job: help the plant grow while the process stays lean</h2>
        <p className="mt-6 text-slate-700 text-lg font-medium">Any plant can chase output for a few months. The harder part is keeping quality steady, keeping the team calm, and making sure the system can absorb growth without adding chaos. That is why setup and commissioning documentation matters so much.</p>

        <div className="grid md:grid-cols-3 gap-6 my-12">
          {[
            { kicker: '1. Foundation', title: 'Design the process before the pressure hits', desc: 'A strong commissioning checklist and a practical pre-commissioning checklist keep the plant from rushing into startup before the system is ready.', border: 'border-blue-400 bg-blue-50/40 text-blue-950', kickColor: 'text-blue-700' },
            { kicker: '2. Execution', title: 'Use one source of truth', desc: 'A modern commissioning management system and technical documentation management process help teams avoid duplicated files, missing approvals, and version confusion.', border: 'border-green-400 bg-green-50/40 text-green-950', kickColor: 'text-green-700' },
            { kicker: '3. Continuity', title: 'Make the handover useful', desc: 'Good handover documentation and as-built documentation should help the operations team on day 1, day 100, and day 1,000.', border: 'border-purple-400 bg-purple-50/40 text-purple-950', kickColor: 'text-purple-700' }
          ].map((card, i) => (
            <div key={i} className={`border-2 rounded-3xl p-8 shadow-xs ${card.border}`}>
              <div className={`text-xs font-black uppercase tracking-widest mb-4 ${card.kickColor}`}>{card.kicker}</div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{card.title}</h4>
              <p className="text-sm font-medium leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* DATA SECTION */}
        <div id="data" className="flex items-center gap-3 text-blue-700 font-bold text-xs uppercase tracking-widest mt-20 mb-3">
          <div className="h-1 w-8 bg-blue-500 rounded-full" /> Data picture
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900">Where efficiency is won or lost</h2>
        <p className="mt-6 text-slate-700 font-medium text-lg">The simplest way to see plant performance is to compare how much friction the system creates.</p>

        {/* Main Efficiency Bars */}
        <div className="mt-12 bg-white border-2 border-blue-200 rounded-3xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Illustrative efficiency balance across plant system types</h3>
          <p className="text-sm font-bold text-slate-500 mb-8">Higher bars mean better overall balance between growth and operating efficiency.</p>
          <div className="space-y-7 mt-10">
            {[
              { label: 'Lean operating system', width: '88%', value: '88', color: 'from-green-500 to-blue-600' },
              { label: 'Digitally managed plant', width: '82%', value: '82', color: 'from-blue-500 to-indigo-600' },
              { label: 'Hybrid manual system', width: '63%', value: '63', color: 'from-amber-500 to-orange-600' },
              { label: 'Overbuilt but weakly controlled', width: '41%', value: '41', color: 'from-rose-500 to-red-600' }
            ].map((bar, i) => (
              <div key={i} className="grid grid-cols-[100px_1fr_40px] md:grid-cols-[240px_1fr_60px] items-center gap-4 md:gap-6">
                <div className="font-bold text-xs md:text-sm text-slate-800">{bar.label}</div>
                <div className="h-5 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-200 shadow-inner">
                  <div className={`h-full rounded-full bg-gradient-to-r ${bar.color}`} style={{ width: bar.width }} />
                </div>
                <div className="font-black text-right font-mono text-slate-900 text-sm md:text-base">{bar.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Visuals */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Time Loss */}
          <div className="bg-white border-2 border-green-200 rounded-3xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900">Where plants usually lose time</h3>
            <div className="space-y-7 mt-10">
              {[
                { label: 'Search for records', width: '74%', value: '74%', color: 'from-orange-500 to-rose-500' },
                { label: 'Repeat approvals', width: '68%', value: '68%', color: 'from-orange-400 to-amber-500' },
                { label: 'Late punch-list closeout', width: '57%', value: '57%', color: 'from-blue-400 to-blue-600' },
                { label: 'Operator retraining', width: '49%', value: '49%', color: 'from-green-400 to-green-600' }
              ].map((bar, i) => (
                <div key={i} className="grid grid-cols-[120px_1fr_50px] md:grid-cols-[180px_1fr_60px] items-center gap-3 md:gap-4">
                  <div className="text-xs md:text-sm font-semibold text-slate-700">{bar.label}</div>
                  <div className="h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200 shadow-inner">
                    <div className={`h-full rounded-full bg-gradient-to-r ${bar.color}`} style={{ width: bar.width }} />
                  </div>
                  <div className="font-bold font-mono text-xs md:text-sm text-right text-slate-800">{bar.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation Maturity */}
          <div className="bg-white border-2 border-blue-200 rounded-3xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900">Documentation maturity vs operating outcome</h3>
            <div className="space-y-7 mt-10">
              {[
                { label: 'Poor document control', width: '28%', value: '28', color: 'from-red-400 to-rose-600' },
                { label: 'Basic filing structure', width: '46%', value: '46', color: 'from-amber-400 to-amber-600' },
                { label: 'Integrated workflow', width: '79%', value: '79', color: 'from-blue-400 to-blue-600' },
                { label: 'Digital + standards-driven', width: '92%', value: '92', color: 'from-green-400 to-green-600' }
              ].map((bar, i) => (
                <div key={i} className="grid grid-cols-[120px_1fr_50px] md:grid-cols-[180px_1fr_60px] items-center gap-3 md:gap-4">
                  <div className="text-xs md:text-sm font-semibold text-slate-700">{bar.label}</div>
                  <div className="h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200 shadow-inner">
                    <div className={`h-full rounded-full bg-gradient-to-r ${bar.color}`} style={{ width: bar.width }} />
                  </div>
                  <div className="font-bold font-mono text-xs md:text-sm text-right text-slate-800">{bar.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DOCUMENTATION DATABASE */}
        <div id="database" className="mt-24">
          <div className="flex items-center gap-3 text-purple-700 font-bold text-xs uppercase tracking-widest mb-3">
            <div className="h-1 w-8 bg-purple-500 rounded-full" /> Documentation database
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">A practical database for keeping growth efficient</h2>
          <p className="mt-6 text-slate-700 font-medium text-lg">This is the part many teams skip: a simple database view that ties every step of the plant lifecycle to a document, owner, and status.</p>

          <div className="mt-10 overflow-x-auto rounded-3xl border-2 border-purple-300 shadow-lg bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-purple-100 to-blue-50 border-b-2 border-purple-200 text-slate-800">
                  <th className="p-5 text-xs font-black uppercase tracking-widest text-purple-900">System / record</th>
                  <th className="p-5 text-xs font-black uppercase tracking-widest text-slate-700">Why it matters</th>
                  <th className="p-5 text-xs font-black uppercase tracking-widest text-blue-900">Best owner</th>
                  <th className="p-5 text-xs font-black uppercase tracking-widest text-green-900">Status style</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 text-xs md:text-sm font-medium text-slate-700">
                {[
                  ["setup and commissioning documentation", "Creates the full map from build phase to stable operation.", "Project + operations", "Core record", "bg-blue-100 text-blue-800 border-blue-300"],
                  ["commissioning documentation", "Tracks system readiness, sign-off, and traceability through the commissioning workflow.", "Commissioning lead", "Mandatory", "bg-red-100 text-red-800 border-red-300"],
                  ["commissioning checklist", "Prevents missed steps during startup and protects plant reliability.", "Field engineer", "Daily use", "bg-green-100 text-green-800 border-green-300"],
                  ["commissioning plan", "Sets the sequence, timing, and acceptance path for handover.", "Project manager", "Required", "bg-purple-100 text-purple-800 border-purple-300"],
                  ["startup documentation", "Supports safe industrial plant startup and repeatable handoffs.", "Operations lead", "Critical", "bg-rose-100 text-rose-800 border-rose-300"],
                  ["pre-commissioning checklist", "Verifies readiness before live energization or pressurization.", "Commissioning engineer", "High priority", "bg-orange-100 text-orange-800 border-orange-300"],
                  ["handover documentation", "Transfers control cleanly to the team that will run the asset.", "Owner / operator", "Must have", "bg-emerald-100 text-emerald-800 border-emerald-300"],
                  ["commissioning report", "Summarizes results, deviations, and final readiness status.", "Commissioning manager", "Reviewable", "bg-indigo-100 text-indigo-800 border-indigo-300"],
                  ["O&M documentation", "Keeps maintenance and operations aligned after startup.", "O&M team", "Live asset support", "bg-cyan-100 text-cyan-800 border-cyan-300"],
                  ["as-built documentation", "Shows what was actually installed, not just what was intended.", "Engineering", "Reference set", "bg-slate-200 text-slate-800 border-slate-400"]
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-purple-50/40 transition-colors">
                    <td className="p-5 font-bold text-slate-900 capitalize">{row[0]}</td>
                    <td className="p-5 text-slate-600 italic font-normal">{row[1]}</td>
                    <td className="p-5 font-semibold text-blue-800">{row[2]}</td>
                    <td className="p-5">
                      <span className={`inline-block border px-4 py-1.5 rounded-full text-xs font-bold shadow-xs ${row[4]}`}>{row[3]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FLOW */}
        <div className="mt-24">
          <div className="flex items-center gap-3 text-green-700 font-bold text-xs uppercase tracking-widest mb-6">
            <div className="h-1 w-8 bg-green-500 rounded-full" /> How the system holds together
          </div>
          <h2 className="text-4xl font-black text-slate-900">Build the documentation path first, then scale the plant</h2>
          <div className="grid md:grid-cols-5 gap-4 md:gap-6 mt-12">
            {[
              { num: '1', title: 'Prepare', desc: 'Use the commissioning plan, engineering documentation, and quality assurance documentation to set expectations before site work begins.', border: 'border-blue-300 bg-blue-50/50', numColor: 'bg-blue-600 text-white' },
              { num: '2', title: 'Verify', desc: 'Run installation verification, acceptance testing, and equipment testing documentation so the team has proof, not guesses.', border: 'border-green-300 bg-green-50/50', numColor: 'bg-green-600 text-white' },
              { num: '3', title: 'Train', desc: 'Turn operator training manuals and startup and shutdown procedures into practical tools the crew can actually use.', border: 'border-amber-300 bg-amber-50/50', numColor: 'bg-amber-500 text-white' },
              { num: '4', title: 'Hand over', desc: 'Complete the turnover package, engineering turnover package, and handover documentation before moving into steady operations.', border: 'border-purple-300 bg-purple-50/50', numColor: 'bg-purple-600 text-white' },
              { num: '5', title: 'Improve', desc: 'Feed data back into the commissioning management system so the plant keeps learning after startup.', border: 'border-rose-300 bg-rose-50/50', numColor: 'bg-rose-600 text-white' }
            ].map((step, i) => (
              <div key={i} className={`border-2 rounded-3xl p-6 shadow-xs flex flex-col justify-between ${step.border}`}>
                <div>
                  <div className={`w-10 h-10 font-black rounded-full flex items-center justify-center mb-6 text-xl shadow-xs ${step.numColor}`}>{step.num}</div>
                  <h4 className="font-extrabold text-base mb-3 text-slate-900">{step.title}</h4>
                </div>
                <p className="text-xs font-semibold leading-relaxed text-slate-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CASE STUDY */}
        <div id="case" className="mt-24 bg-gradient-to-br from-blue-900 to-slate-900 border-2 border-blue-400 rounded-3xl p-8 md:p-11 shadow-xl text-white">
          <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-200">Example case study: a growing industrial plant that stopped losing efficiency</h3>
          <p className="mt-6 text-blue-100 font-medium text-lg leading-relaxed">An industrial manufacturing site expanded production capacity by nearly 30 percent... (full story from original)</p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-7 text-center backdrop-blur-xs">
              <strong className="block text-5xl font-black text-green-300 font-mono">24%</strong>
              <span className="text-xs md:text-sm text-blue-200 font-semibold mt-2 block">less time lost in handover-related confusion</span>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-7 text-center backdrop-blur-xs">
              <strong className="block text-5xl font-black text-blue-300 font-mono">31%</strong>
              <span className="text-xs md:text-sm text-blue-200 font-semibold mt-2 block">faster startup tasks after standardization</span>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-7 text-center backdrop-blur-xs">
              <strong className="block text-5xl font-black text-amber-300 font-mono">42%</strong>
              <span className="text-xs md:text-sm text-blue-200 font-semibold mt-2 block">better retrieval of as-built and O&M files</span>
            </div>
          </div>
        </div>

        {/* BEST PRACTICES */}
        <div className="mt-20">
          <div className="flex items-center gap-3 text-amber-700 font-bold text-xs uppercase tracking-widest mb-3">
            <div className="h-1 w-8 bg-amber-500 rounded-full" /> Best practices
          </div>
          <h2 className="text-4xl font-black text-slate-900">Best practices for commissioning documentation</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Start early and stay consistent', desc: 'Use the complete commissioning process documentation guide mindset from day one.', border: 'border-blue-300 bg-gradient-to-b from-blue-50 to-white' },
              { title: 'Write for the people on shift', desc: 'The setup and commissioning checklist for plant startup should be practical and readable.', border: 'border-green-300 bg-gradient-to-b from-green-50 to-white' },
              { title: 'Keep the record alive', desc: 'Update as-built documentation requirements for commissioning whenever the plant changes.', border: 'border-purple-300 bg-gradient-to-b from-purple-50 to-white' }
            ].map((item, i) => (
              <div key={i} className={`border-2 rounded-3xl p-8 shadow-xs ${item.border}`}>
                <h4 className="font-extrabold text-lg mb-4 text-slate-900">{item.title}</h4>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CALLOUT */}
        <div className="mt-16 bg-gradient-to-r from-green-100 to-blue-100 border-2 border-blue-300 rounded-3xl p-10 md:p-12 text-center text-xl md:text-2xl font-extrabold italic text-slate-800 shadow-sm">
          "A plant can grow fast and still stay efficient — but only when its documents, systems, and people move together."
        </div>

        {/* FAQS */}
        <div id="faqs" className="mt-24">
          <div className="flex items-center gap-3 text-indigo-700 font-bold text-xs uppercase tracking-widest mb-3">
            <div className="h-1 w-8 bg-indigo-500 rounded-full" /> FAQs
          </div>
          <h2 className="text-4xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-4 mt-10">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-xs transition-all duration-200 hover:border-blue-400">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center bg-slate-50/60 hover:bg-blue-50/40 transition-all text-base md:text-lg font-bold text-slate-800"
                >
                  {faq.question}
                  <span className="text-2xl font-black text-blue-600 transition-transform duration-200">{openFaq === index ? '−' : '+'}</span>
                </button>
                <div className={`px-8 pb-8 pt-4 text-slate-700 font-medium leading-relaxed border-t border-slate-100 bg-white ${openFaq === index ? 'block' : 'hidden'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KEYWORDS */}
        <div id="keywords" className="mt-24">
          <div className="flex items-center gap-3 text-rose-700 font-bold text-xs uppercase tracking-widest mb-3">
            <div className="h-1 w-8 bg-rose-500 rounded-full" /> Keyword map
          </div>
          <h2 className="text-4xl font-black text-slate-900">All keywords woven into one clean reference set</h2>
          <div className="flex flex-wrap gap-3 mt-10">
            {keywords.map((kw, i) => (
              <span key={i} className={`px-5 py-2.5 rounded-full text-sm font-bold border-2 shadow-xs ${kw.style}`}>
                {kw.text}
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER CTA */}
        <div className="footer-cta mt-20 bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 border-2 border-blue-200 rounded-3xl p-10 md:p-12 text-center shadow-md">
          <h2 className="text-4xl font-black text-slate-900">When systems grow with the plant, efficiency stays intact.</h2>
          <p className="mt-6 text-lg font-medium text-slate-700 max-w-2xl mx-auto">That is the real win: better structure, clearer ownership, cleaner handover, and a plant that can expand without becoming harder to run.</p>
        </div>
      </main>
    </div>
        <aside className="hidden lg:block shrink-0 w-[340px]">
          <div className="sticky top-28 p-1 bg-white border-2 border-slate-200 rounded-3xl shadow-md mt-8">
            <StickyContactForm />
          </div>
        </aside>
      </div>
    </div>
  );
};

const faqData = [
  { question: 'What is setup and commissioning documentation?', answer: 'It is the complete record set that captures how a plant moves from construction into safe and stable operation. It usually includes the commissioning checklist, commissioning report, handover documentation, and the final turnover package.' },
  { question: 'Why is commissioning documentation important?', answer: 'It protects the plant from confusion, missed steps, and repeated work. Strong commissioning documentation also supports compliance documentation, faster troubleshooting, and better long-term performance.' },
  { question: 'What should be included in a commissioning checklist?', answer: 'A good checklist should include readiness checks, sign-offs, test results, deviation notes, and final approvals.' },
  { question: 'What is the difference between FAT and SAT testing?', answer: 'FAT testing happens before shipment in a controlled environment. SAT testing happens after installation on site.' },
  { question: 'What is pre-commissioning in industrial projects?', answer: 'It is the stage before live startup when the team confirms everything is ready for operation.' },
  { question: 'How do you prepare commissioning reports?', answer: 'A strong commissioning report should summarize the work done, the results found, the deviations closed, and the remaining actions.' },
  { question: 'What is a turnover package in commissioning?', answer: 'It is the final set of records handed to operations. A complete package often includes as-built documentation, manuals, test results, and the engineering turnover package.' },
  { question: 'What are O&M manuals in commissioning projects?', answer: 'They are the operating and maintenance instructions that help teams run and care for the plant after startup.' },
  { question: 'What is mechanical completion documentation?', answer: 'It confirms that construction work is complete enough to move into testing and startup.' },
  { question: 'How does commissioning improve plant performance?', answer: 'It improves performance by setting clear baselines, reducing startup mistakes, and helping operators act faster.' },
  { question: 'What documents are required before plant startup?', answer: 'Before startup, the team should have completed installation verification, approved test records, readiness sign-offs, startup documentation, and the main parts of the handover documentation package.' },
  { question: 'What is the commissioning process in industrial plants?', answer: 'The process usually starts with planning, then moves through mechanical completion, FAT testing, SAT testing, startup, and closeout.' },
  { question: 'How do as-built drawings support commissioning?', answer: 'They show the real installed condition of the plant. That makes troubleshooting, maintenance, and future upgrades much easier.' },
  { question: 'What are the stages of commissioning documentation?', answer: 'The stages move from planning to verification to handover.' },
  { question: 'What is operational readiness in commissioning?', answer: 'It means the plant, the documents, and the people are all ready for live operation.' }
];

const keywords = [
  { text: 'setup and commissioning documentation', style: 'bg-emerald-50 border-emerald-400 text-emerald-800' },
  { text: 'commissioning documentation', style: 'bg-blue-50 border-blue-400 text-blue-800' },
  { text: 'commissioning checklist', style: 'bg-green-50 border-green-400 text-green-800' },
  { text: 'industrial commissioning', style: 'bg-purple-50 border-purple-400 text-purple-800' },
  { text: 'O&M documentation', style: 'bg-amber-50 border-amber-400 text-amber-800' },
  { text: 'as-built documentation', style: 'bg-slate-50 border-slate-400 text-slate-800' }
];

export default PlantEfficiencyBlog;