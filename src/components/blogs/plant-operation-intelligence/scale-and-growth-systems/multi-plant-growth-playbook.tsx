'use client';

import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MultiPlantGrowthBlog = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const chart1Ref = useRef<HTMLCanvasElement | null>(null);
  const chart2Ref = useRef<HTMLCanvasElement | null>(null);
  const chart3Ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Chart 1 - Bar Comparison
    if (chart1Ref.current) {
      new Chart(chart1Ref.current, {
        type: 'bar',
        data: {
          labels: ['Startup Delay', 'Rework Rate', 'Audit Readiness', 'Response Time', 'Cross-Site Consistency'],
          datasets: [
            { label: 'Standardized Operations', data: [18, 22, 88, 79, 91], backgroundColor: '#1f7fcf', borderRadius: 8 },
            { label: 'Siloed Operations', data: [57, 68, 41, 46, 33], backgroundColor: '#a8d8ff', borderRadius: 8 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'top' } },
          scales: {
            x: { grid: { display: false } },
            y: { beginAtZero: true, max: 100, grid: { color: '#e7eef5' } }
          }
        }
      });
    }

    // Chart 2 - Line
    if (chart2Ref.current) {
      new Chart(chart2Ref.current, {
        type: 'line',
        data: {
          labels: ['Plant A', 'Plant B', 'Plant C', 'Plant D', 'Plant E', 'Plant F'],
          datasets: [
            {
              label: 'Documentation Quality Score',
              data: [54, 61, 68, 74, 82, 89],
              borderColor: '#1f7fcf',
              backgroundColor: 'rgba(31,127,207,0.12)',
              fill: true,
              tension: 0.35,
              pointRadius: 5
            },
            {
              label: 'Operational Readiness Score',
              data: [49, 56, 64, 71, 80, 87],
              borderColor: '#2a9d8f',
              backgroundColor: 'rgba(42,157,143,0.10)',
              fill: true,
              tension: 0.35,
              pointRadius: 5
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'top' } },
          scales: {
            y: { beginAtZero: true, max: 100, grid: { color: '#e7eef5' } }
          }
        }
      });
    }

    // Chart 3 - Horizontal Bar
    if (chart3Ref.current) {
      new Chart(chart3Ref.current, {
        type: 'bar',
        data: {
          labels: ['Document Retrieval', 'Handover Prep', 'Audit Packaging', 'Startup Coordination', 'Closeout Reporting', 'Training Updates'],
          datasets: [
            { label: 'Traditional Hours', data: [28, 42, 36, 31, 24, 18], backgroundColor: '#a8d8ff', borderRadius: 8 },
            { label: 'Digital Hours', data: [6, 14, 12, 10, 8, 5], backgroundColor: '#1f7fcf', borderRadius: 8 }
          ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'top' } },
          scales: {
            x: { beginAtZero: true, grid: { color: '#e7eef5' } },
            y: { grid: { display: false } }
          }
        }
      });
    }

    return () => {
      [chart1Ref, chart2Ref, chart3Ref].forEach(ref => {
        if (ref.current) Chart.getChart(ref.current)?.destroy();
      });
    };
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-[#1e2d3a] font-sans">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-br from-white via-[#eef8ff] to-white border-b border-[#d9eaf7] py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-6 py-2.5 bg-[#eaf7ff] text-[#1f7fcf] text-xs font-bold tracking-widest rounded-full mb-6">
            Multi-Plant Growth Series
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight tracking-tight text-[#11324d]">
            Scale Faster When <span className="text-[#1f7fcf]">Every Plant</span> Runs on the Same Playbook.
          </h1>
          <p className="mt-6 text-2xl text-[#35546f] font-serif italic max-w-3xl mx-auto">
            Using Data-Driven Systems to Support Multi-Plant Growth - because expansion should feel structured, not chaotic.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mt-10 text-sm">
            {['Digital operations blueprint', 'Industrial scaling focus', 'Content + data visuals'].map((item, i) => (
              <span key={i} className="bg-white border border-[#d9eaf7] px-6 py-3 rounded-full shadow-sm">{item}</span>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* LEAD */}
        <div className="panel border-l-4 border-[#7cc7ff] bg-white p-8 rounded-3xl mb-12 text-lg leading-relaxed">
          When a company adds more plants, success depends on more than equipment and headcount. It depends on a repeatable operating system...
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { num: "1", lbl: "shared standard for startup, turnover, and reporting across every site" },
            { num: "24/7", lbl: "visibility through digital documentation workflow and live dashboards" },
            { num: "0", lbl: "tolerance for missing commissioning deliverables or loose handover records" },
            { num: "100%", lbl: "traceability from mechanical completion to operational readiness" }
          ].map((stat, i) => (
            <div key={i} className="stat bg-gradient-to-b from-white to-[#f4fbff] border border-[#d9eaf7] rounded-2xl p-8 text-center">
              <span className="block text-4xl font-serif font-bold text-[#1f7fcf]">{stat.num}</span>
              <div className="text-sm mt-4 text-[#667784]">{stat.lbl}</div>
            </div>
          ))}
        </div>

        {/* WHY IT MATTERS */}
        <div className="section-tag bg-[#eaf7ff] text-[#1f7fcf] px-5 py-2 rounded-full inline-block text-xs font-bold tracking-widest mb-4">
          Why It Matters
        </div>
        <h2 className="text-4xl font-serif font-bold tracking-tight">What Data-Driven Systems Actually Solve in Multi-Plant Growth</h2>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div>
            <p>Data-driven systems connect the work that happens before startup with the performance that happens after handover...</p>
            <p className="mt-6">That matters because growth creates friction...</p>
          </div>
          <div className="callout bg-gradient-to-br from-[#f7fcff] to-[#ebf8ff] border border-[#d9eaf7] p-8 rounded-2xl">
            <strong className="text-[#1f7fcf] block mb-4">The practical payoff</strong>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><span className="text-[#1f7fcf]">•</span> speed up operational readiness</li>
              <li className="flex gap-3"><span className="text-[#1f7fcf]">•</span> reduce confusion during industrial plant startup</li>
              <li className="flex gap-3"><span className="text-[#1f7fcf]">•</span> compare performance across sites</li>
              <li className="flex gap-3"><span className="text-[#1f7fcf]">•</span> reuse lessons from one commissioning report</li>
            </ul>
          </div>
        </div>

        {/* CHART 1 */}
        <div className="chart-card mt-12">
          <div className="chart-title">Standardized Operations vs. Siloed Growth - Sample Performance Comparison</div>
          <div className="chart-box h-80"><canvas ref={chart1Ref} /></div>
        </div>

        {/* COMMISSIONING FOUNDATION */}
        <div className="mt-20">
          <div className="section-tag">Commissioning Foundation</div>
          <h2 className="text-4xl font-serif font-bold">Why Setup and Commissioning Documentation Becomes the Backbone of Scaling</h2>
        </div>

        {/* TIMELINE */}
        <div className="timeline grid md:grid-cols-5 gap-6 mt-12">
          {[
            { n: "1", title: "Mechanical Completion", desc: "Track the mechanical completion checklist and turnover package..." },
            { n: "2", title: "FAT Testing", desc: "Use FAT testing records and a clear FAT and SAT documentation checklist..." },
            { n: "3", title: "SAT Testing", desc: "Confirm field performance through SAT testing..." },
            { n: "4", title: "Handover", desc: "Close the loop with project closeout documentation..." },
            { n: "5", title: "Operations", desc: "Lock in the knowledge through operator training manuals..." }
          ].map((step, i) => (
            <div key={i} className="step border border-[#d9eaf7] bg-gradient-to-b from-white to-[#f7fbff] rounded-2xl p-6">
              <div className="n">{step.n}</div>
              <h4 className="font-semibold">{step.title}</h4>
              <p className="text-sm text-[#667784] mt-3">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CHART 2 */}
        <div className="chart-card mt-12">
          <div className="chart-title">Where Documentation Quality Impacts Growth Readiness Most</div>
          <div className="chart-box h-64"><canvas ref={chart2Ref} /></div>
        </div>

        {/* DATABASE TABLE */}
        <div className="mt-20">
          <div className="section-tag">Database View</div>
          <h2 className="text-4xl font-serif font-bold">Multi-Plant Documentation Database for Faster Decision-Making</h2>
          <div className="table-wrap overflow-auto mt-8 border border-[#d9eaf7] rounded-2xl bg-white">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr>
                  <th className="text-left p-5 bg-gradient-to-r from-[#1f7fcf] to-[#3aa3ff] text-white">Document</th>
                  <th className="text-left p-5 bg-gradient-to-r from-[#1f7fcf] to-[#3aa3ff] text-white">Plant Phase</th>
                  <th className="text-left p-5 bg-gradient-to-r from-[#1f7fcf] to-[#3aa3ff] text-white">Owner</th>
                  <th className="text-left p-5 bg-gradient-to-r from-[#1f7fcf] to-[#3aa3ff] text-white">System Role</th>
                  <th className="text-left p-5 bg-gradient-to-r from-[#1f7fcf] to-[#3aa3ff] text-white">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Setup and commissioning documentation", "Project start", "PMO", "Creates the master record structure", "Core"],
                  ["Commissioning documentation", "Commissioning", "Site lead", "Tracks progress and approvals", "Active"],
                  ["Commissioning checklist", "Pre-startup", "Commissioning engineer", "Confirms readiness by system", "Mandatory"],
                  ["Commissioning plan", "Planning", "Project controls", "Defines sequence and milestones", "Approved"],
                  ["Startup documentation", "Go-live", "Operations manager", "Guides safe plant launch", "Mandatory"],
                  ["Pre-commissioning checklist", "Before energization", "QA/QC", "Validates installation and cleanliness", "Mandatory"],
                  ["Handover documentation", "Turnover", "Document control", "Transfers ownership to operations", "Mandatory"],
                  ["Commissioning report", "Closeout", "Commissioning manager", "Summarizes results and deviations", "Required"],
                  ["O&M documentation", "Operations", "Reliability lead", "Supports maintenance and learning", "Required"],
                  ["As-built documentation", "Post-change", "Engineering", "Preserves the final plant reality", "Required"]
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[#fbfeff]">
                    <td className="p-5 font-medium">{row[0]}</td>
                    <td className="p-5 text-[#667784]">{row[1]}</td>
                    <td className="p-5">{row[2]}</td>
                    <td className="p-5 text-[#667784]">{row[3]}</td>
                    <td className="p-5"><span className="badge ok text-xs">{row[4]}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* DIGITAL ADVANTAGE + CHART 3 */}
        <div className="chart-card mt-16">
          <div className="chart-title">Digital Documentation Workflow - Time Saved by Process</div>
          <div className="chart-box h-64"><canvas ref={chart3Ref} /></div>
        </div>

        {/* CASE STUDY */}
        <div className="case mt-20 bg-gradient-to-br from-[#f8fdff] to-[#eef9ff] border border-[#d9eaf7] rounded-3xl p-10">
          <h2 className="text-3xl font-serif font-bold">Case Study: A Packaging Company Scales from 3 Plants to 9 Without Losing Control</h2>
          <p className="mt-6">A regional packaging manufacturer expanded quickly...</p>
          <div className="case-results grid md:grid-cols-3 gap-6 mt-12">
            <div className="res bg-white border border-[#d9eaf7] rounded-2xl p-6 text-center">
              <strong className="text-4xl text-[#1f7fcf]">38%</strong>
              <span className="block text-sm text-[#667784] mt-2">faster startup document retrieval</span>
            </div>
            <div className="res bg-white border border-[#d9eaf7] rounded-2xl p-6 text-center">
              <strong className="text-4xl text-[#1f7fcf]">46%</strong>
              <span className="block text-sm text-[#667784] mt-2">less time spent on handover cleanup</span>
            </div>
            <div className="res bg-white border border-[#d9eaf7] rounded-2xl p-6 text-center">
              <strong className="text-4xl text-[#1f7fcf]">2×</strong>
              <span className="block text-sm text-[#667784] mt-2">better cross-site consistency</span>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <div className="section-tag">FAQ</div>
          <h2 className="text-4xl font-serif font-bold">Frequently Asked Questions</h2>
          <div className="faq mt-10 space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item border border-[#d9eaf7] rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleFaq(index)}
                  className="faq-q w-full text-left px-8 py-6 flex justify-between items-center hover:bg-[#f8fcff]"
                >
                  {faq.question}
                  <span className="text-2xl text-[#1f7fcf]">{openFaq === index ? '-' : '+'}</span>
                </button>
                <div className={`faq-a px-8 pb-8 text-[#4b6376] ${openFaq === index ? 'block' : 'hidden'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KEYWORDS */}
        <div className="mt-20">
          <div className="section-tag">Keyword Coverage</div>
          <h2 className="text-4xl font-serif font-bold">Attached Keywords Used Across the Blog</h2>
          <div className="keywords flex flex-wrap gap-3 mt-10">
            {keywords.map((kw, i) => (
              <span key={i} className={`kw px-5 py-2.5 text-sm rounded-full border ${kw.primary ? 'bg-[#eaf7ff] border-[#7cc7ff] text-[#1f7fcf]' : ''}`}>
                {kw.text}
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER CTA */}
        <div className="footer-cta mt-20 text-white text-center">
          <h2 className="text-4xl font-serif font-bold">Build the Same Operating Logic in Every Plant</h2>
          <p className="mt-6">Multi-plant growth becomes far easier when the data, documents, and decisions all follow one standard.</p>
        </div>
      </main>
    </div>
  );
};

// Full FAQ Data
const faqData = [
  { question: "What is setup and commissioning documentation?", answer: "It is the complete record set that supports plant startup..." },
  { question: "Why is commissioning documentation important?", answer: "It supports safe startup, reduces rework..." },
  { question: "What should be included in a commissioning checklist?", answer: "A good commissioning checklist should cover mechanical completion..." },
  { question: "What is the difference between FAT and SAT testing?", answer: "FAT testing happens before shipment..." },
  { question: "What is pre-commissioning in industrial projects?", answer: "It is the stage where the site verifies readiness..." },
  { question: "How do you prepare commissioning reports?", answer: "A strong commissioning report should summarize completed work..." },
  { question: "What is a turnover package in commissioning?", answer: "A turnover package is the complete set of records transferred..." },
  { question: "What are O&M manuals in commissioning projects?", answer: "They are the guides that help teams maintain and operate..." },
  { question: "What is mechanical completion documentation?", answer: "It confirms that construction is complete..." },
  { question: "How does commissioning improve plant performance?", answer: "It creates verified baselines, reduces ambiguity..." },
  { question: "What documents are required before plant startup?", answer: "Most teams need the pre-commissioning checklist..." },
  { question: "What is the commissioning process in industrial plants?", answer: "It is the full sequence from planning to handover..." },
  { question: "How do as-built drawings support commissioning?", answer: "They show the final installed condition of the plant..." },
  { question: "What are the stages of commissioning documentation?", answer: "The stages usually include planning, pre-commissioning..." },
  { question: "What is operational readiness in commissioning?", answer: "It means the plant, people, and documents are all ready..." }
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
  { text: "plant operations documentation" },
  { text: "commissioning standards" }
];

export default MultiPlantGrowthBlog;
