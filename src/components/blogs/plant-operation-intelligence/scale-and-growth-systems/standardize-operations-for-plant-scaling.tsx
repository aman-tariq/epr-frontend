'use client';

import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const StandardizeOperationsBlog = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const chart3Ref = useRef(null);
  const chart4Ref = useRef(null);

  // Initialize Charts
  useEffect(() => {
    // Chart 1: Bar - Standardized vs Ad-Hoc
    if (chart1Ref.current) {
      new Chart(chart1Ref.current, {
        type: 'bar',
        data: {
          labels: ['Startup Delay', 'Rework Hours', 'Change Requests', 'Handover Time', 'Audit Findings'],
          datasets: [
            { label: 'Standardized Operations', data: [22, 18, 14, 16, 10], backgroundColor: '#137A4D', borderRadius: 8 },
            { label: 'Ad-Hoc Operations', data: [68, 54, 49, 61, 38], backgroundColor: '#CFE8D7', borderRadius: 8 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'top' } },
          scales: {
            x: { grid: { display: false } },
            y: { grid: { color: '#E8EFEA' } }
          }
        }
      });
    }

    // Chart 2: Line - Documentation Load
    if (chart2Ref.current) {
      new Chart(chart2Ref.current, {
        type: 'line',
        data: {
          labels: ['Project Setup', 'Mechanical Completion', 'Pre-Commissioning', 'FAT Testing', 'SAT Testing', 'Startup', 'Handover'],
          datasets: [
            {
              label: 'Documentation Demand',
              data: [20, 42, 60, 55, 68, 48, 28],
              borderColor: '#137A4D',
              backgroundColor: 'rgba(19,122,77,0.12)',
              fill: true,
              tension: 0.38,
              pointRadius: 5
            },
            {
              label: 'Operational Stress if Unstandardized',
              data: [16, 36, 58, 64, 70, 61, 34],
              borderColor: '#8BBFA2',
              backgroundColor: 'rgba(207,232,215,0.18)',
              fill: true,
              tension: 0.38,
              pointRadius: 5
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'top' } },
          scales: { y: { suggestedMax: 80 } }
        }
      });
    }

    // Chart 3: Horizontal Bar - Time Saved
    if (chart3Ref.current) {
      new Chart(chart3Ref.current, {
        type: 'bar',
        data: {
          labels: ['Document Search', 'Approval Cycles', 'Training Onboarding', 'Handover Prep', 'Troubleshooting'],
          datasets: [
            { label: 'Before Standardization', data: [38, 30, 24, 44, 52], backgroundColor: '#DDF0E4', borderRadius: 8 },
            { label: 'After Standardization', data: [14, 12, 10, 18, 20], backgroundColor: '#137A4D', borderRadius: 8 }
          ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'top' } }
        }
      });
    }

    // Chart 4: Doughnut
    if (chart4Ref.current) {
      new Chart(chart4Ref.current, {
        type: 'doughnut',
        data: {
          labels: ['Documentation', 'Training', 'Digital Workflow', 'QA Controls', 'Commissioning Standards'],
          datasets: [{
            data: [26, 18, 22, 16, 18],
            backgroundColor: ['#137A4D', '#1F9B63', '#8BBFA2', '#CFE8D7', '#5D7B68'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '68%',
          plugins: { legend: { position: 'bottom' } }
        }
      });
    }

    return () => {
      [chart1Ref, chart2Ref, chart3Ref, chart4Ref].forEach(ref => {
        if (ref.current) Chart.getChart(ref.current)?.destroy();
      });
    };
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F7FBF7] text-[#173024] font-sans">
      {/* HERO */}
      <header className="relative bg-gradient-to-br from-[#0E1F18] via-[#123525] to-[#185C3A] text-white py-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-6 py-3 rounded-full text-xs font-bold tracking-widest">
            Industrial Scaling Playbook
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-black mt-8 leading-tight">
            Standardize <span className="text-[#B8F0CC]">Operations</span> Before Your Plant Outgrows the System
          </h1>
          <p className="mt-6 text-xl max-w-3xl text-white/80 italic">
            The fastest-growing plants are not the ones that improvise better — they are the ones that standardize early, scale cleanly, and keep every team moving in the same direction.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            {['2026 Edition', 'White-label Industrial Blog', 'Operations, Expansion & Efficiency'].map((item, i) => (
              <div key={i} className="bg-white/10 border border-white/20 px-5 py-2.5 rounded-full text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* LEAD */}
        <div className="lead border-l-8 border-[#137A4D] bg-gradient-to-r from-white to-[#F4FBF6] p-8 rounded-2xl shadow mb-12 text-lg">
          Faster plant scaling is not just about adding equipment or hiring more people. It starts with a repeatable operating model.
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { num: "3×", lbl: "Faster handover with standardized workflows" },
            { num: "42%", lbl: "Less rework when documentation is consistent" },
            { num: "28%", lbl: "Lower startup delays after standardization" },
            { num: "1", lbl: "Single operating playbook across sites" }
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-[#DDE8E1] rounded-2xl p-8 shadow text-center">
              <span className="block text-4xl font-serif font-bold text-[#137A4D]">{stat.num}</span>
              <div className="text-xs uppercase tracking-widest mt-3 text-[#5E7268]">{stat.lbl}</div>
            </div>
          ))}
        </div>

        {/* WHY IT MATTERS */}
        <div className="uppercase text-[#137A4D] text-xs font-bold tracking-widest mb-3">Why It Matters</div>
        <h2 className="text-4xl font-serif font-bold">How Standardized Operations Help Plants Scale Faster</h2>
        <p className="mt-6 text-[#294337]">When a plant expands, complexity rises faster than capacity...</p>

        {/* TWO COLUMN - CHART 1 + PHASES */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white border border-[#DDE8E1] rounded-2xl p-8 shadow">
            <div className="uppercase text-xs tracking-widest text-[#5D7B68] font-bold mb-4">Standardized vs. Ad-Hoc Operations</div>
            <div className="h-80"><canvas ref={chart1Ref} /></div>
          </div>

          <div className="bg-white border border-[#DDE8E1] rounded-2xl p-8 shadow">
            <div className="uppercase text-xs tracking-widest text-[#5D7B68] font-bold mb-4">Where Standardization Pays Off Most</div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Mechanical Completion", desc: "Reduces punch-list confusion and improves readiness." },
                { title: "Pre-Commissioning", desc: "Supports consistent checks, inspections, and sign-offs." },
                { title: "FAT & SAT Testing", desc: "Keeps vendor testing and site verification aligned." },
                { title: "Operational Readiness", desc: "Makes training and acceptance smoother for teams." },
                { title: "Project Closeout", desc: "Improves turnover package quality and traceability." }
              ].map((phase, i) => (
                <div key={i} className="bg-white border border-[#DDE8E1] rounded-xl p-6">
                  <h4 className="font-semibold text-[#137A4D]">{phase.title}</h4>
                  <p className="text-sm text-[#5E7268] mt-2">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CORE FRAMEWORK */}
        <div className="mt-20">
          <div className="uppercase text-[#137A4D] text-xs font-bold tracking-widest mb-3">Core Framework</div>
          <h2 className="text-4xl font-serif font-bold">The Operating Standard That Keeps Expansion Under Control</h2>
        </div>

        {/* TWO COLUMN - CHART 2 + DATABASE */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white border border-[#DDE8E1] rounded-2xl p-8 shadow">
            <div className="uppercase text-xs tracking-widest text-[#5D7B68] font-bold mb-4">Documentation Load Across the Commissioning Lifecycle</div>
            <div className="h-80"><canvas ref={chart2Ref} /></div>
          </div>

          <div className="bg-white border border-[#DDE8E1] rounded-2xl p-8 shadow">
            <div className="uppercase text-xs tracking-widest text-[#5D7B68] font-bold mb-4">Document Database: What Good Scaling Needs</div>
            <div className="overflow-auto border border-[#DDE8E1] rounded-xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#137A4D] to-[#145C3A] text-white">
                    <th className="p-4 text-left">Document</th>
                    <th className="p-4 text-left">Phase</th>
                    <th className="p-4 text-left">Owner</th>
                    <th className="p-4 text-left">Purpose</th>
                    <th className="p-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ["Commissioning Plan", "Project Setup", "Project Lead", "Defines sequence, scope, and controls", "Mandatory"],
                    ["Commissioning Checklist", "Pre-Commissioning", "Commissioning Eng.", "Tracks readiness and sign-off", "Mandatory"],
                    ["Mechanical Completion Records", "Construction Close", "Construction Lead", "Confirms systems are complete", "Mandatory"],
                    ["FAT Testing Report", "Vendor Verification", "QA / Vendor", "Validates equipment before shipping", "Mandatory"],
                    ["SAT Testing Report", "Site Verification", "Site Eng.", "Confirms real-world performance", "Mandatory"],
                    ["Startup Documentation", "Launch", "Operations", "Records initial operating conditions", "Mandatory"],
                    ["Turnover Package", "Handover", "Project Controls", "Transfers the asset cleanly to ops", "Mandatory"],
                    ["O&M Documentation", "Operations", "Reliability", "Supports maintenance and uptime", "Recommended"],
                    ["Commissioning Report", "Closeout", "Project Manager", "Summarizes outcomes and exceptions", "Mandatory"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-[#F8FCF9]">
                      <td className="p-4 font-medium">{row[0]}</td>
                      <td className="p-4 text-[#5E7268]">{row[1]}</td>
                      <td className="p-4">{row[2]}</td>
                      <td className="p-4 text-[#5E7268]">{row[3]}</td>
                      <td className="p-4"><span className="text-xs font-bold px-3 py-1 bg-[#E6F5EB] text-[#137A4D] rounded-full">{row[4]}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* TIME SAVED CHARTS */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white border border-[#DDE8E1] rounded-2xl p-8 shadow">
            <div className="uppercase text-xs tracking-widest text-[#5D7B68] font-bold mb-4">Time Saved After Standardization</div>
            <div className="h-80"><canvas ref={chart3Ref} /></div>
          </div>
          <div className="bg-white border border-[#DDE8E1] rounded-2xl p-8 shadow">
            <div className="uppercase text-xs tracking-widest text-[#5D7B68] font-bold mb-4">Key Standardization Levers</div>
            <div className="h-80"><canvas ref={chart4Ref} /></div>
          </div>
        </div>

        {/* CASE STUDY CALLOUT */}
        <div className="mt-20 bg-gradient-to-br from-[#0F2C20] to-[#175137] text-white rounded-2xl p-10 relative overflow-hidden shadow">
          <div className="uppercase text-xs font-black tracking-widest absolute right-8 top-8 rotate-90">CASE STUDY</div>
          <h3 className="text-3xl font-serif font-bold text-[#BFF0D0]">How a Chemical Plant Cut Expansion Delays by 30% with One Standard Playbook</h3>
          <p className="mt-6 opacity-90">A mid-sized chemical manufacturer... (full story as in original)</p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
              <strong className="block text-4xl text-[#CFF4DD]">30%</strong>
              <span className="text-sm opacity-75">Faster expansion handover</span>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
              <strong className="block text-4xl text-[#CFF4DD]">45%</strong>
              <span className="text-sm opacity-75">Less rework in startup</span>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
              <strong className="block text-4xl text-[#CFF4DD]">2×</strong>
              <span className="text-sm opacity-75">Better documentation quality</span>
            </div>
          </div>
        </div>

        {/* BEST PRACTICES */}
        <div className="mt-20">
          <div className="uppercase text-[#137A4D] text-xs font-bold tracking-widest mb-3">Best Practices</div>
          <h2 className="text-4xl font-serif font-bold">Best Practices for Standardizing Operations</h2>
          <ul className="mt-8 space-y-6">
            {[
              "Start with the commissioning lifecycle. Build the process around mechanical completion checklist...",
              "Make every document reusable. Use one format for commissioning documentation checklist...",
              "Train the team on the standard, not the workaround.",
              "Keep the standard alive digitally.",
              "Audit the process regularly."
            ].map((text, i) => (
              <li key={i} className="pl-12 relative bg-white border border-[#DDE8E1] rounded-2xl p-6">
                <span className="absolute left-6 top-7 w-7 h-7 bg-[#137A4D] text-white rounded-full flex items-center justify-center text-sm font-bold">{i+1}</span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <div className="uppercase text-[#137A4D] text-xs font-bold tracking-widest mb-3">FAQs</div>
          <h2 className="text-4xl font-serif font-bold">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-[#DDE8E1] rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-[#F7FCF9]"
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl text-[#137A4D]">{openFaq === index ? '−' : '+'}</span>
                </button>
                <div className={`px-8 pb-8 text-[#5E7268] ${openFaq === index ? 'block' : 'hidden'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KEYWORDS */}
        <div className="mt-20">
          <div className="uppercase text-[#137A4D] text-xs font-bold tracking-widest mb-3">Keyword Coverage</div>
          <h2 className="text-4xl font-serif font-bold">Keywords Used Across the Blog</h2>
          <div className="flex flex-wrap gap-3 mt-10">
            {keywords.map((kw, i) => (
              <span key={i} className={`px-5 py-2.5 rounded-full text-sm border ${kw.primary ? 'bg-[#E8F7EE] border-[#CBEBD8] text-[#137A4D]' : 'bg-white border-[#DDE8E1]'}`}>
                {kw.text}
              </span>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="footer-cta mt-20 bg-gradient-to-br from-[#E9F8EF] to-[#F7FCF9] border border-[#DDE8E1] rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-serif font-bold">Build a Plant That Can Scale Without Slowing Down</h2>
          <p className="mt-6 max-w-2xl mx-auto text-[#335044]">Standardized operations make growth repeatable. With the right documentation, the right workflow, and the right controls, faster plant scaling becomes a managed process instead of a risky leap.</p>
        </div>
      </main>
    </div>
  );
};

// FAQ Data
const faqData = [
  { question: "What is setup and commissioning documentation?", answer: "It is the full record set that captures how a plant moves from construction to operation..." },
  { question: "Why is commissioning documentation important?", answer: "Because it protects the plant’s operational memory..." },
  { question: "What should be included in a commissioning checklist?", answer: "A complete checklist should cover mechanical completion, installation verification..." },
  { question: "What is the difference between FAT and SAT testing?", answer: "FAT testing happens at the vendor location before shipment..." },
  { question: "What is pre-commissioning in industrial projects?", answer: "Pre-commissioning is the stage where systems are checked, cleaned, verified..." },
  { question: "How do you prepare commissioning reports?", answer: "Use a structure that records the scope, results, deviations..." },
  { question: "What is a turnover package in commissioning?", answer: "It is the complete handover bundle that transfers responsibility..." },
  { question: "What are O&M manuals in commissioning projects?", answer: "O&M documentation gives operations and maintenance teams the instructions..." },
  { question: "What documents are required before plant startup?", answer: "At minimum, a plant should have the commissioning checklist..." },
  { question: "How do as-built drawings support commissioning?", answer: "They show the actual installed condition of the plant..." }
];

// Keywords
const keywords = [
  { text: "setup and commissioning documentation", primary: true },
  { text: "commissioning documentation", primary: true },
  { text: "commissioning checklist", primary: true },
  { text: "commissioning plan", primary: true },
  { text: "startup documentation", primary: true },
  { text: "pre-commissioning checklist", primary: true },
  { text: "handover documentation", primary: true },
  { text: "commissioning report", primary: true },
  { text: "O&M documentation", primary: true },
  { text: "as-built documentation", primary: true },
  { text: "mechanical completion" },
  { text: "FAT testing" },
  { text: "SAT testing" },
  { text: "operational readiness" },
  { text: "industrial commissioning" },
  { text: "digital documentation workflow" },
  { text: "commissioning management system" },
  // Add more as needed from original
];

export default StandardizeOperationsBlog;
