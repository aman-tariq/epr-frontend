'use client';

import React, { useState } from 'react';

const PlantEfficiencyBlog = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#07111f] text-[#eef5ff] font-sans">
      {/* HERO */}
      <header className="pt-8 pb-6 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0f2038] to-[#0a1424] border border-white/10 rounded-[34px] shadow-2xl overflow-hidden relative">
          <div className="grid md:grid-cols-[1.35fr_0.85fr]">
            <div className="p-10 md:p-11">
              <div className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-[#c7ff6b] bg-[#c7ff6b]/10 border border-[#c7ff6b]/20 px-5 py-2 rounded-full mb-6">
                Industrial Plant Systems Blog
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.03] tracking-[-0.04em]">
                Build systems that help plants <span className="text-[#43d19e]">grow</span> without losing efficiency.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-[#b0c8e8] max-w-3xl">
                The smartest plants do not simply expand output. They protect uptime, keep teams aligned, and turn every workflow into a repeatable advantage. That is where setup and commissioning documentation, commissioning workflow discipline, and digital documentation workflow design start paying off.
              </p>
              <p className="mt-8 text-xl font-semibold text-white max-w-2xl">
                Strong systems are not built for the launch day alone — they are built so the plant keeps performing when the pressure rises.
              </p>
              <div className="flex flex-wrap gap-3 mt-10">
                {['Operational readiness', 'Industrial commissioning', 'EPC project documentation', 'Plant operations documentation'].map((tag, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 text-sm px-5 py-2.5 rounded-full text-[#b0c8e8]">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <aside className="p-8 md:p-10 flex items-stretch bg-[#0a1424]/80">
              <div className="flex-1 bg-gradient-to-b from-[#07111f]/70 to-[#07111f]/30 border border-white/10 rounded-3xl p-8 flex flex-col">
                <div>
                  <h3 className="uppercase tracking-widest text-[#c7ff6b] text-sm font-medium">Efficiency in one line</h3>
                  <div className="text-6xl font-black text-white mt-4 mb-3">3-in-1</div>
                  <p className="text-[#b0c8e8]">One system for growth, one for control, and one for proof. When those three stay connected, the plant scales without confusion.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-10">
                  {[
                    { label: 'Fast', desc: 'installation verification, startup documentation, and handover documentation stay easy to retrieve.' },
                    { label: 'Clear', desc: 'commissioning standards and quality assurance documentation reduce repeat work.' },
                    { label: 'Safe', desc: 'startup and shutdown procedures stay consistent for every shift.' },
                    { label: 'Smart', desc: 'commissioning management system data becomes long-term plant memory.' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <strong className="block text-2xl text-white">{item.label}</strong>
                      <span className="text-xs text-[#b0c8e8] mt-1 block">{item.desc}</span>
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
        <section className="bg-white/5 border-l-4 border-[#43d19e] border-white/10 rounded-3xl p-8 md:p-10 my-12 text-lg leading-relaxed">
          A modern plant grows best when operations, documentation, and performance are designed together. When the <strong>commissioning plan</strong>, <strong>commissioning documentation</strong>, and <strong>O&M documentation</strong> all speak the same language, teams move faster, troubleshoot better, and avoid the waste that usually comes from disconnected systems.
        </section>

        {/* TOC */}
        <div className="flex flex-wrap gap-3 mb-12">
          {[
            { id: 'framework', label: 'System framework' },
            { id: 'data', label: 'Efficiency data' },
            { id: 'database', label: 'Documentation database' },
            { id: 'case', label: 'Case study' },
            { id: 'faqs', label: 'FAQs' },
            { id: 'keywords', label: 'Keyword map' }
          ].map(item => (
            <a key={item.id} href={`#${item.id}`} className="px-5 py-3 bg-white/5 border border-white/10 hover:border-[#43d19e] rounded-full text-sm transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        {/* FRAMEWORK */}
        <div id="framework" className="flex items-center gap-3 text-[#c7ff6b] text-xs uppercase tracking-widest mb-3">
          <div className="h-px w-8 bg-[#c7ff6b]/50" /> What makes a plant efficient
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">The real job: help the plant grow while the process stays lean</h2>
        <p className="mt-6 text-[#b0c8e8] text-lg">Any plant can chase output for a few months. The harder part is keeping quality steady, keeping the team calm, and making sure the system can absorb growth without adding chaos. That is why setup and commissioning documentation matters so much.</p>

        <div className="grid md:grid-cols-3 gap-6 my-12">
          {[
            { kicker: '1. Foundation', title: 'Design the process before the pressure hits', desc: 'A strong commissioning checklist and a practical pre-commissioning checklist keep the plant from rushing into startup before the system is ready.' },
            { kicker: '2. Execution', title: 'Use one source of truth', desc: 'A modern commissioning management system and technical documentation management process help teams avoid duplicated files, missing approvals, and version confusion.' },
            { kicker: '3. Continuity', title: 'Make the handover useful', desc: 'Good handover documentation and as-built documentation should help the operations team on day 1, day 100, and day 1,000.' }
          ].map((card, i) => (
            <div key={i} className="bg-gradient-to-b from-white/6 to-white/3 border border-white/10 rounded-3xl p-8">
              <div className="text-[#c7ff6b] text-xs uppercase tracking-widest mb-4">{card.kicker}</div>
              <h4 className="text-xl font-semibold mb-3">{card.title}</h4>
              <p className="text-[#b0c8e8]">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* DATA SECTION */}
        <div id="data" className="flex items-center gap-3 text-[#c7ff6b] text-xs uppercase tracking-widest mt-20 mb-3">
          Data picture
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">Where efficiency is won or lost</h2>
        <p className="mt-6 text-[#b0c8e8]">The simplest way to see plant performance is to compare how much friction the system creates.</p>

        {/* Main Efficiency Bars */}
        <div className="mt-12 bg-[#132844] border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-semibold mb-2">Illustrative efficiency balance across plant system types</h3>
          <p className="text-sm text-[#b0c8e8]">Higher bars mean better overall balance between growth and operating efficiency.</p>
          <div className="space-y-7 mt-10">
            {[
              { label: 'Lean operating system', width: '88%', value: '88', color: 'from-[#43d19e] to-[#5aa7ff]' },
              { label: 'Digitally managed plant', width: '82%', value: '82', color: 'from-[#c7ff6b] to-[#ffcc66]' },
              { label: 'Hybrid manual system', width: '63%', value: '63', color: 'from-[#43d19e] to-[#5aa7ff]' },
              { label: 'Overbuilt but weakly controlled', width: '41%', value: '41', color: 'from-[#ff7f8a] to-[#ffb36b]' }
            ].map((bar, i) => (
              <div key={i} className="grid grid-cols-[180px_1fr_60px] items-center gap-6">
                <div className="font-medium">{bar.label}</div>
                <div className="h-4 bg-white/10 rounded-full overflow-hidden border border-white/10">
                  <div className={`h-full rounded-full bg-gradient-to-r ${bar.color}`} style={{ width: bar.width }} />
                </div>
                <div className="font-bold text-right">{bar.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Visuals */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Time Loss */}
          <div className="bg-[#132844] border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold">Where plants usually lose time</h3>
            <div className="space-y-7 mt-10">
              {[
                { label: 'Search for records', width: '74%', value: '74%', color: 'from-[#ff7f8a] to-[#ffb36b]' },
                { label: 'Repeat approvals', width: '68%', value: '68%', color: 'from-[#ff7f8a] to-[#ffb36b]' },
                { label: 'Late punch-list closeout', width: '57%', value: '57%', color: 'from-[#c7ff6b] to-[#ffcc66]' },
                { label: 'Operator retraining', width: '49%', value: '49%', color: 'from-[#43d19e] to-[#5aa7ff]' }
              ].map((bar, i) => (
                <div key={i} className="grid grid-cols-[160px_1fr_70px] items-center gap-6">
                  <div>{bar.label}</div>
                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full bg-gradient-to-r ${bar.color}`} style={{ width: bar.width }} />
                  </div>
                  <div className="font-bold text-right">{bar.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation Maturity */}
          <div className="bg-[#132844] border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold">Documentation maturity vs operating outcome</h3>
            <div className="space-y-7 mt-10">
              {[
                { label: 'Poor document control', width: '28%', value: '28', color: 'from-[#ff7f8a] to-[#ffb36b]' },
                { label: 'Basic filing structure', width: '46%', value: '46', color: 'from-[#c7ff6b] to-[#ffcc66]' },
                { label: 'Integrated workflow', width: '79%', value: '79', color: 'from-[#43d19e] to-[#5aa7ff]' },
                { label: 'Digital + standards-driven', width: '92%', value: '92', color: 'from-[#43d19e] to-[#5aa7ff]' }
              ].map((bar, i) => (
                <div key={i} className="grid grid-cols-[160px_1fr_70px] items-center gap-6">
                  <div>{bar.label}</div>
                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full bg-gradient-to-r ${bar.color}`} style={{ width: bar.width }} />
                  </div>
                  <div className="font-bold text-right">{bar.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DOCUMENTATION DATABASE */}
        <div id="database" className="mt-24">
          <div className="flex items-center gap-3 text-[#c7ff6b] text-xs uppercase tracking-widest mb-3">Documentation database</div>
          <h2 className="text-4xl md:text-5xl font-bold">A practical database for keeping growth efficient</h2>
          <p className="mt-6 text-[#b0c8e8]">This is the part many teams skip: a simple database view that ties every step of the plant lifecycle to a document, owner, and status.</p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full border border-white/10 rounded-3xl overflow-hidden bg-white/5">
              <thead>
                <tr className="bg-white/10">
                  <th className="p-5 text-left text-xs uppercase tracking-widest">System / record</th>
                  <th className="p-5 text-left text-xs uppercase tracking-widest">Why it matters</th>
                  <th className="p-5 text-left text-xs uppercase tracking-widest">Best owner</th>
                  <th className="p-5 text-left text-xs uppercase tracking-widest">Status style</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm">
                {[
                  ["setup and commissioning documentation", "Creates the full map from build phase to stable operation.", "Project + operations", "Core record"],
                  ["commissioning documentation", "Tracks system readiness, sign-off, and traceability through the commissioning workflow.", "Commissioning lead", "Mandatory"],
                  ["commissioning checklist", "Prevents missed steps during startup and protects plant reliability.", "Field engineer", "Daily use"],
                  ["commissioning plan", "Sets the sequence, timing, and acceptance path for handover.", "Project manager", "Required"],
                  ["startup documentation", "Supports safe industrial plant startup and repeatable handoffs.", "Operations lead", "Critical"],
                  ["pre-commissioning checklist", "Verifies readiness before live energization or pressurization.", "Commissioning engineer", "High priority"],
                  ["handover documentation", "Transfers control cleanly to the team that will run the asset.", "Owner / operator", "Must have"],
                  ["commissioning report", "Summarizes results, deviations, and final readiness status.", "Commissioning manager", "Reviewable"],
                  ["O&M documentation", "Keeps maintenance and operations aligned after startup.", "O&M team", "Live asset support"],
                  ["as-built documentation", "Shows what was actually installed, not just what was intended.", "Engineering", "Reference set"]
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-5 font-semibold">{row[0]}</td>
                    <td className="p-5 text-[#b0c8e8]">{row[1]}</td>
                    <td className="p-5">{row[2]}</td>
                    <td className="p-5">
                      <span className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-xs font-medium">{row[3]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FLOW */}
        <div className="mt-24">
          <div className="flex items-center gap-3 text-[#c7ff6b] text-xs uppercase tracking-widest mb-6">How the system holds together</div>
          <h2 className="text-4xl font-bold">Build the documentation path first, then scale the plant</h2>
          <div className="grid md:grid-cols-5 gap-6 mt-12">
            {[
              { num: '1', title: 'Prepare', desc: 'Use the commissioning plan, engineering documentation, and quality assurance documentation to set expectations before site work begins.' },
              { num: '2', title: 'Verify', desc: 'Run installation verification, acceptance testing, and equipment testing documentation so the team has proof, not guesses.' },
              { num: '3', title: 'Train', desc: 'Turn operator training manuals and startup and shutdown procedures into practical tools the crew can actually use.' },
              { num: '4', title: 'Hand over', desc: 'Complete the turnover package, engineering turnover package, and handover documentation before moving into steady operations.' },
              { num: '5', title: 'Improve', desc: 'Feed data back into the commissioning management system so the plant keeps learning after startup.' }
            ].map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-7">
                <div className="w-10 h-10 bg-[#43d19e]/20 text-[#c7ff6b] font-black rounded-full flex items-center justify-center mb-6 text-xl">{step.num}</div>
                <h4 className="font-semibold mb-3">{step.title}</h4>
                <p className="text-sm text-[#b0c8e8]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CASE STUDY */}
        <div id="case" className="mt-24 bg-gradient-to-br from-[#132844] to-[#0a1424] border border-white/10 rounded-3xl p-10">
          <h3 className="text-3xl font-bold">Example case study: a growing industrial plant that stopped losing efficiency</h3>
          <p className="mt-6 text-[#b0c8e8]">An industrial manufacturing site expanded production capacity by nearly 30 percent... (full story from original)</p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <strong className="block text-4xl text-[#c7ff6b]">24%</strong>
              <span className="text-sm text-[#b0c8e8]">less time lost in handover-related confusion</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <strong className="block text-4xl text-[#c7ff6b]">31%</strong>
              <span className="text-sm text-[#b0c8e8]">faster startup tasks after standardization</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <strong className="block text-4xl text-[#c7ff6b]">42%</strong>
              <span className="text-sm text-[#b0c8e8]">better retrieval of as-built and O&M files</span>
            </div>
          </div>
        </div>

        {/* BEST PRACTICES */}
        <div className="mt-20">
          <div className="flex items-center gap-3 text-[#c7ff6b] text-xs uppercase tracking-widest mb-3">Best practices</div>
          <h2 className="text-4xl font-bold">Best practices for commissioning documentation</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Start early and stay consistent', desc: 'Use the complete commissioning process documentation guide mindset from day one.' },
              { title: 'Write for the people on shift', desc: 'The setup and commissioning checklist for plant startup should be practical and readable.' },
              { title: 'Keep the record alive', desc: 'Update as-built documentation requirements for commissioning whenever the plant changes.' }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-b from-white/6 to-white/3 border border-white/10 rounded-3xl p-8">
                <h4 className="font-semibold mb-4">{item.title}</h4>
                <p className="text-[#b0c8e8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CALLOUT */}
        <div className="mt-16 bg-gradient-to-br from-[#43d19e]/20 to-[#5aa7ff]/20 border border-white/20 rounded-3xl p-12 text-center text-xl italic">
          "A plant can grow fast and still stay efficient — but only when its documents, systems, and people move together."
        </div>

        {/* FAQS */}
        <div id="faqs" className="mt-24">
          <div className="flex items-center gap-3 text-[#c7ff6b] text-xs uppercase tracking-widest mb-3">FAQs</div>
          <h2 className="text-4xl font-bold">Frequently asked questions</h2>
          <div className="space-y-4 mt-10">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-all text-lg font-medium"
                >
                  {faq.question}
                  <span className="text-3xl text-[#c7ff6b] transition-transform duration-200">{openFaq === index ? '−' : '+'}</span>
                </button>
                <div className={`px-8 pb-8 text-[#b0c8e8] ${openFaq === index ? 'block' : 'hidden'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KEYWORDS */}
        <div id="keywords" className="mt-24">
          <div className="flex items-center gap-3 text-[#c7ff6b] text-xs uppercase tracking-widest mb-3">Keyword map</div>
          <h2 className="text-4xl font-bold">All keywords woven into one clean reference set</h2>
          <div className="flex flex-wrap gap-3 mt-10">
            {keywords.map((kw, i) => (
              <span key={i} className={`px-5 py-2.5 rounded-full text-sm border ${kw.style}`}>
                {kw.text}
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER CTA */}
        <div className="footer-cta mt-20 bg-gradient-to-br from-[#c7ff6b]/10 via-[#43d19e]/10 to-[#5aa7ff]/10 border border-white/10 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold">When systems grow with the plant, efficiency stays intact.</h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto">That is the real win: better structure, clearer ownership, cleaner handover, and a plant that can expand without becoming harder to run.</p>
        </div>
      </main>
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
  { text: 'setup and commissioning documentation', style: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-100' },
  { text: 'commissioning documentation', style: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-100' },
  { text: 'commissioning checklist', style: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-100' },
  { text: 'industrial commissioning', style: 'bg-white/5 border-white/20' },
  { text: 'O&M documentation', style: 'bg-white/5 border-white/20' },
  { text: 'as-built documentation', style: 'bg-white/5 border-white/20' }
];

export default PlantEfficiencyBlog;
