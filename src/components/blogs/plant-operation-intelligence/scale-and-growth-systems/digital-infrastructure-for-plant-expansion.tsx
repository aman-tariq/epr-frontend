'use client';

import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DigitalInfrastructureBlog = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const chart1Ref = useRef<HTMLCanvasElement | null>(null);
  const chart2Ref = useRef<HTMLCanvasElement | null>(null);
  const chart3Ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chart1Ref.current) {
      new Chart(chart1Ref.current, {
        type: 'bar',
        data: {
          labels: ['Document retrieval speed', 'Startup readiness', 'Handover accuracy', 'Expansion repeatability'],
          datasets: [
            { label: 'Low maturity', data: [38, 42, 45, 33], backgroundColor: '#d8e5ef', borderRadius: 6 },
            { label: 'Medium maturity', data: [68, 66, 63, 60], backgroundColor: '#8fb3c6', borderRadius: 6 },
            { label: 'High maturity', data: [92, 90, 88, 86], backgroundColor: '#195d7a', borderRadius: 6 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: true, position: 'top', labels: { boxWidth: 12, color: '#5d6b7a' } } },
          scales: {
            x: { grid: { color: '#e8eef5' }, ticks: { color: '#5d6b7a' } },
            y: { grid: { color: '#e8eef5' }, ticks: { color: '#5d6b7a' } }
          }
        }
      });
    }

    if (chart2Ref.current) {
      new Chart(chart2Ref.current, {
        type: 'bar',
        data: {
          labels: ['Data silos', 'Version confusion', 'Approval delays', 'Training gaps', 'Handover rework'],
          datasets: [{
            label: 'Friction score',
            data: [84, 78, 72, 67, 81],
            backgroundColor: ['#d8e5ef', '#c4d9e5', '#a8c7d6', '#8fb3c6', '#195d7a'],
            borderRadius: 6
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: '#e8eef5' }, ticks: { color: '#5d6b7a' } },
            y: { grid: { display: false }, ticks: { color: '#5d6b7a' } }
          }
        }
      });
    }

    if (chart3Ref.current) {
      new Chart(chart3Ref.current, {
        type: 'line',
        data: {
          labels: ['Concept', 'Design', 'Procure', 'Build', 'Pre-Comm', 'SAT', 'Start-up', 'Handover'],
          datasets: [
            {
              label: 'Document readiness',
              data: [25, 35, 45, 58, 76, 85, 92, 96],
              borderColor: '#195d7a',
              backgroundColor: 'rgba(25,93,122,0.08)',
              fill: true,
              tension: 0.38,
              pointRadius: 5,
              pointBackgroundColor: '#195d7a'
            },
            {
              label: 'Operational readiness',
              data: [10, 18, 26, 40, 58, 72, 88, 94],
              borderColor: '#d67f2f',
              backgroundColor: 'rgba(214,127,47,0.08)',
              fill: true,
              tension: 0.38,
              pointRadius: 5,
              pointBackgroundColor: '#d67f2f'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: true, position: 'top', labels: { boxWidth: 12, color: '#5d6b7a' } } },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#5d6b7a' } },
            y: { grid: { color: '#e8eef5' }, ticks: { color: '#5d6b7a', callback: (v: any) => `${v}%` } }
          }
        }
      });
    }

    return () => {
      Chart.getChart(chart1Ref.current ?? undefined)?.destroy();
      Chart.getChart(chart2Ref.current ?? undefined)?.destroy();
      Chart.getChart(chart3Ref.current ?? undefined)?.destroy();
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-[#17212b] font-sans">
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f9fcff] to-white border-b border-[#dbe6f2] py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-[#dbe6f2] bg-white rounded-full text-[#195d7a] text-xs font-bold tracking-widest shadow">
            <div className="w-2 h-2 bg-[#2d8f9f] rounded-full" /> White Paper Style Blog
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-black mt-8 leading-tight tracking-tighter">
            The Role of <span className="text-[#195d7a]">Digital Infrastructure</span> in Plant Expansion
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-xl text-[#314255] italic">
            Expansion does not fail because the plant is too small — it fails when the information backbone cannot grow with it.
          </p>
          <div className="flex justify-center gap-4 flex-wrap mt-8">
            {['Industrial & EPC Focus', 'Digital Documentation Workflow', 'Plant Operations Documentation'].map((item, i) => (
              <span key={i} className="bg-white border border-[#dbe6f2] px-5 py-2 rounded-full text-sm shadow text-[#5d6b7a]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="border-l-8 border-[#195d7a] bg-gradient-to-r from-white to-[#fbfdff] p-8 rounded-2xl shadow mb-12 text-lg leading-relaxed">
          When a plant expands, every new line, utility, and control loop depends on more than steel and instruments. It depends on digital infrastructure: the systems that keep design data, commissioning records, compliance files, training content, and handover information aligned from day one. Done well, this foundation strengthens industrial commissioning, speeds the plant commissioning process, and protects uptime as the asset grows.
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { num: '5', lbl: 'Core expansion phases' },
            { num: '24/7', lbl: 'Data availability for teams' },
            { num: '↓', lbl: 'Less rework and delay risk' },
            { num: '↑', lbl: 'Faster operational readiness' }
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-[#dbe6f2] rounded-2xl p-8 text-center shadow">
              <span className="block text-4xl font-black text-[#195d7a]">{stat.num}</span>
              <div className="text-xs uppercase tracking-widest mt-3 text-[#5d6b7a]">{stat.lbl}</div>
            </div>
          ))}
        </div>

        <div className="uppercase text-[#195d7a] text-xs font-bold tracking-widest mb-3">What digital infrastructure does</div>
        <h2 className="text-4xl font-serif font-bold tracking-tight">Why Plant Expansion Needs a Digital Backbone</h2>
        <p className="mt-6 text-[#243241]">Plant expansion is never only a construction project. It is a documentation problem, a data coordination problem, and a readiness problem.</p>
        <p className="mt-6 text-[#243241]">A strong digital layer ties together setup and commissioning documentation, commissioning documentation, commissioning checklist workflows, commissioning plan updates, and the final handover documentation package.</p>

        <div className="grid md:grid-cols-5 gap-6 mt-12">
          {[
            { title: 'Planning', desc: 'Define the commissioning lifecycle, system boundaries, naming rules, and commissioning standards before design freezes.' },
            { title: 'Design & Build', desc: 'Link engineering turnover package items, installation verification records, and quality assurance documentation to live asset data.' },
            { title: 'Pre-Startup', desc: 'Track mechanical completion, pre-commissioning checklist items, FAT testing, SAT testing, and acceptance testing in one workflow.' },
            { title: 'Handover', desc: 'Bundle turnover package files, operator training manuals, startup and shutdown procedures, and commissioning report outputs.' },
            { title: 'Operate & Expand Again', desc: 'Reuse plant operations documentation, performance verification baselines, and digital documentation workflow history for the next phase.' }
          ].map((phase, i) => (
            <div key={i} className="bg-white border border-[#dbe6f2] rounded-2xl p-7 shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-3 text-[#195d7a]">{phase.title}</h4>
              <p className="text-sm text-[#5d6b7a]">{phase.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="uppercase text-[#195d7a] text-xs font-bold tracking-widest mb-3">The data picture</div>
          <h2 className="text-4xl font-serif font-bold tracking-tight">How Digital Infrastructure Improves Expansion Performance</h2>
          <p className="mt-6 text-[#243241]">Digital infrastructure helps teams reduce waiting time between construction and startup.</p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white border border-[#dbe6f2] rounded-2xl p-8 shadow">
              <div className="uppercase text-xs tracking-widest text-[#5d6b7a] font-bold mb-4">Expansion outcomes by infrastructure maturity</div>
              <div className="h-[300px]"><canvas ref={chart1Ref} /></div>
            </div>
            <div className="bg-white border border-[#dbe6f2] rounded-2xl p-8 shadow">
              <div className="uppercase text-xs tracking-widest text-[#5d6b7a] font-bold mb-4">Where digital gaps cause the most friction</div>
              <div className="h-[300px]"><canvas ref={chart2Ref} /></div>
            </div>
          </div>

          <div className="bg-white border border-[#dbe6f2] rounded-2xl p-8 shadow mt-8">
            <div className="uppercase text-xs tracking-widest text-[#5d6b7a] font-bold mb-4">Information flow across the commissioning lifecycle</div>
            <div className="h-[300px]"><canvas ref={chart3Ref} /></div>
          </div>
        </div>

        <div className="mt-20">
          <div className="uppercase text-[#195d7a] text-xs font-bold tracking-widest mb-3">Digital infrastructure database</div>
          <h2 className="text-4xl font-serif font-bold tracking-tight">Reference Database for a Plant Expansion Program</h2>
          <div className="bg-white border border-[#dbe6f2] rounded-2xl overflow-hidden shadow mt-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#f7f9fc]">
                  <th className="p-5 text-left font-medium">Digital Layer</th>
                  <th className="p-5 text-left font-medium">Expansion Purpose</th>
                  <th className="p-5 text-left font-medium">Linked Records</th>
                  <th className="p-5 text-left font-medium">Owner</th>
                  <th className="p-5 text-left font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dbe6f2]">
                <tr>
                  <td className="p-5 font-medium">Document Control System</td>
                  <td className="p-5 text-[#5d6b7a]">Single source for setup and commissioning documentation</td>
                  <td className="p-5 text-[#5d6b7a]">Commissioning documentation, commissioning report, as-built documentation</td>
                  <td className="p-5">Project Controls</td>
                  <td className="p-5"><span className="px-4 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800">Core</span></td>
                </tr>
                <tr>
                  <td className="p-5 font-medium">Asset Information Platform</td>
                  <td className="p-5 text-[#5d6b7a]">Protect asset history through each plant expansion</td>
                  <td className="p-5 text-[#5d6b7a]">Mechanical completion, installation verification, engineering turnover package</td>
                  <td className="p-5">Engineering</td>
                  <td className="p-5"><span className="px-4 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800">Core</span></td>
                </tr>
                <tr>
                  <td className="p-5 font-medium">Workflow Automation</td>
                  <td className="p-5 text-[#5d6b7a]">Track approvals and closure in real time</td>
                  <td className="p-5 text-[#5d6b7a]">Commissioning checklist, pre-commissioning checklist, acceptance testing</td>
                  <td className="p-5">Commissioning</td>
                  <td className="p-5"><span className="px-4 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-800">High Value</span></td>
                </tr>
                <tr>
                  <td className="p-5 font-medium">Training Repository</td>
                  <td className="p-5 text-[#5d6b7a]">Prepare teams for industrial plant startup</td>
                  <td className="p-5 text-[#5d6b7a]">Operator training manuals, startup documentation, startup and shutdown procedures</td>
                  <td className="p-5">Operations</td>
                  <td className="p-5"><span className="px-4 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800">Core</span></td>
                </tr>
                <tr>
                  <td className="p-5 font-medium">Compliance Archive</td>
                  <td className="p-5 text-[#5d6b7a]">Maintain audit-ready project closeout documentation</td>
                  <td className="p-5 text-[#5d6b7a]">Compliance documentation, quality assurance documentation, commissioning standards</td>
                  <td className="p-5">HSE / QA</td>
                  <td className="p-5"><span className="px-4 py-1 text-xs font-bold rounded-full bg-amber-100 text-amber-800">Critical</span></td>
                </tr>
                <tr>
                  <td className="p-5 font-medium">Operations Knowledge Base</td>
                  <td className="p-5 text-[#5d6b7a]">Support long-term plant operations documentation</td>
                  <td className="p-5 text-[#5d6b7a]">O&M documentation, O&M manuals for commissioning projects, plant operations documentation</td>
                  <td className="p-5">Operations</td>
                  <td className="p-5"><span className="px-4 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800">Core</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#fffaf5] to-white border-l-4 border-[#d67f2f] p-8 rounded-2xl italic text-[#37485b]">
          A plant can buy new equipment in months, but it can only absorb new complexity when its digital documentation workflow is fast, accurate, and visible to every team that depends on it.
        </div>

        <div className="mt-20">
          <div className="uppercase text-[#195d7a] text-xs font-bold tracking-widest mb-3">Key components</div>
          <h2 className="text-4xl font-serif font-bold tracking-tight">What a Strong Digital Expansion Package Should Include</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white border border-[#dbe6f2] rounded-2xl p-8 shadow">
              <h3 className="font-semibold text-xl mb-4 text-[#195d7a]">Operational documents</h3>
              <p className="text-[#243241]">Startup documentation, handover documentation, startup and shutdown procedures, O&M documentation, plant operations documentation, and operator training manuals help the plant run smoothly after expansion.</p>
            </div>
            <div className="bg-white border border-[#dbe6f2] rounded-2xl p-8 shadow">
              <h3 className="font-semibold text-xl mb-4 text-[#195d7a]">Engineering documents</h3>
              <p className="text-[#243241]">Engineering documentation, equipment testing documentation, performance verification, installation verification, and as-built documentation keep the asset reliable and traceable.</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="uppercase text-[#195d7a] text-xs font-bold tracking-widest mb-3">Best practices</div>
          <h2 className="text-4xl font-serif font-bold tracking-tight">Best Practices for Commissioning Documentation in Expansion Projects</h2>
          <ul className="mt-10 space-y-4">
            {[
              'Start the commissioning plan before detailed engineering closes so the digital structure matches the project from the beginning.',
              'Build the commissioning checklist and pre-commissioning checklist into the same workflow used for approvals and site progress.',
              'Require FAT testing and SAT testing evidence to be stored beside the related equipment record for clean traceability.',
              'Use the same digital environment for acceptance testing, performance verification, and commissioning report generation.',
              'Connect the engineering turnover package to as-built documentation so future expansion teams can reuse the record without rebuilding it.',
              'Capture O&M manuals for commissioning projects and all O&M documentation before the handover documentation is accepted.',
              'Treat commissioning standards as part of compliance documentation, not as a separate afterthought.'
            ].map((item, i) => (
              <li key={i} className="pl-14 relative bg-white border border-[#dbe6f2] rounded-2xl p-6 shadow">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#195d7a] text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 bg-white border border-[#dbe6f2] rounded-2xl p-10 shadow relative">
          <div className="uppercase text-xs font-black tracking-widest text-[#195d7a] absolute top-6 right-6">CASE STUDY</div>
          <h3 className="text-3xl font-serif font-bold text-[#195d7a]">Case Study: How a Process Plant Cut Expansion Delays with Better Digital Infrastructure</h3>
          <p className="mt-6 text-[#243241]">A mid-size process plant added a new production line while keeping the main facility online...</p>
          <p className="mt-6 text-[#243241]">To fix the issue, the project team introduced a digital documentation workflow...</p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#f7f9fc] border border-[#dbe6f2] rounded-2xl p-6 text-center">
              <strong className="block text-4xl text-[#195d7a]">38%</strong>
              <span className="text-sm text-[#5d6b7a]">Faster document retrieval</span>
            </div>
            <div className="bg-[#f7f9fc] border border-[#dbe6f2] rounded-2xl p-6 text-center">
              <strong className="block text-4xl text-[#195d7a]">29%</strong>
              <span className="text-sm text-[#5d6b7a]">Less rework during handover</span>
            </div>
            <div className="bg-[#f7f9fc] border border-[#dbe6f2] rounded-2xl p-6 text-center">
              <strong className="block text-4xl text-[#195d7a]">2×</strong>
              <span className="text-sm text-[#5d6b7a]">Cleaner expansion readiness</span>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="uppercase text-[#195d7a] text-xs font-bold tracking-widest mb-3">FAQs</div>
          <h2 className="text-4xl font-serif font-bold tracking-tight">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-[#dbe6f2] rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-[#f7f9fc]"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-3xl text-[#195d7a] transition-transform">{openFaq === index ? '−' : '+'}</span>
                </button>
                <div className={`px-8 pb-8 text-[#5d6b7a] ${openFaq === index ? 'block' : 'hidden'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="uppercase text-[#195d7a] text-xs font-bold tracking-widest mb-3">Keyword coverage</div>
          <h2 className="text-4xl font-serif font-bold tracking-tight">Keywords Included Throughout the Blog</h2>
          <div className="flex flex-wrap gap-3 mt-10">
            {keywords.map((kw, i) => (
              <span key={i} className={`px-5 py-2.5 text-sm rounded-full border ${kw.primary ? 'border-[#195d7a] bg-[#195d7a]/5 text-[#195d7a]' : 'border-[#dbe6f2] bg-white'}`}>
                {kw.text}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-b from-white to-[#f9fcff] border border-[#dbe6f2] rounded-3xl p-16 text-center shadow">
          <h2 className="text-4xl font-serif font-bold">Build expansion on a digital foundation</h2>
          <p className="max-w-2xl mx-auto mt-6 text-[#5d6b7a]">Plant expansion moves faster when the documentation, workflow, training, compliance, and commissioning records all live in one connected system. That is how digital infrastructure protects performance, supports handover, and makes the next expansion easier than the last.</p>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  { question: 'What is setup and commissioning documentation?', answer: 'It is the complete set of records used to move a plant from construction into safe, verified operation. In an expansion, it includes commissioning documentation, startup documentation, handover documentation, as-built documentation, and the final commissioning report.' },
  { question: 'Why is commissioning documentation important?', answer: 'It protects the commissioning lifecycle by keeping engineering decisions, tests, and approvals traceable. That supports industrial commissioning, compliance documentation, and faster recovery during issues.' },
  { question: 'What should be included in a commissioning checklist?', answer: 'A commissioning checklist should include mechanical completion items, installation verification, FAT testing, SAT testing, acceptance testing, performance verification, and sign-offs tied to the commissioning standards.' },
  { question: 'What is the difference between FAT and SAT testing?', answer: 'FAT testing happens at the vendor site before shipment. SAT testing happens at the plant after installation. Both are essential parts of equipment testing documentation.' },
  { question: 'What is pre-commissioning in industrial projects?', answer: 'Pre-commissioning is the stage before live startup when systems are checked, cleaned, tested, and prepared. The pre-commissioning checklist is the main tool for tracking those activities.' },
  { question: 'How do you prepare commissioning reports?', answer: 'A good commissioning report summarizes the work completed, the results of acceptance testing and performance verification, any gaps found, and the status of the system at handover.' },
  { question: 'What is a turnover package in commissioning?', answer: 'The turnover package is the formal bundle of documents moved from project to operations.' },
  { question: 'What are O&M manuals in commissioning projects?', answer: 'O&M manuals explain how to operate and maintain the equipment after handover.' },
  { question: 'What is mechanical completion documentation?', answer: 'Mechanical completion documentation confirms construction is finished and that a system is ready for pre-commissioning and commissioning activities.' },
  { question: 'How does commissioning improve plant performance?', answer: 'Commissioning improves plant performance by establishing verified baselines, reducing confusion during startup, and keeping engineering documentation aligned with actual plant conditions.' },
  { question: 'What documents are required before plant startup?', answer: 'Before plant startup, teams usually need the commissioning plan, pre-commissioning checklist results, acceptance testing evidence, startup and shutdown procedures, operational readiness sign-off, and the relevant commissioning report.' },
  { question: 'What is the commissioning process in industrial plants?', answer: 'The commissioning process in industrial plants usually runs through planning, mechanical completion, pre-commissioning, FAT testing, SAT testing, acceptance testing, startup, and handover.' },
  { question: 'How do as-built drawings support commissioning?', answer: 'As-built drawings show what was actually installed, not just what was designed.' },
  { question: 'What are the stages of commissioning documentation?', answer: 'The stages typically move from setup and commissioning documentation planning to pre-commissioning checklist completion, FAT and SAT testing, performance verification, handover documentation, and project closeout documentation.' },
  { question: 'What is operational readiness in commissioning?', answer: 'Operational readiness is the point where the plant, the systems, and the operating team are all prepared for safe service.' }
];

const keywords = [
  { text: 'setup and commissioning documentation', primary: true },
  { text: 'commissioning documentation', primary: true },
  { text: 'commissioning checklist', primary: true },
  { text: 'commissioning plan', primary: true },
  { text: 'startup documentation', primary: true },
  { text: 'pre-commissioning checklist', primary: true },
  { text: 'handover documentation', primary: true },
  { text: 'commissioning report', primary: true },
  { text: 'O&M documentation', primary: true },
  { text: 'as-built documentation', primary: true },
  { text: 'mechanical completion' },
  { text: 'FAT testing' },
  { text: 'SAT testing' },
  { text: 'acceptance testing' },
  { text: 'operational readiness' },
  { text: 'installation verification' },
  { text: 'performance verification' },
  { text: 'project closeout documentation' },
  { text: 'operator training manuals' },
  { text: 'turnover package' },
  { text: 'startup and shutdown procedures' },
  { text: 'commissioning workflow' },
  { text: 'commissioning deliverables' },
  { text: 'plant startup checklist' },
  { text: 'engineering documentation' },
  { text: 'industrial commissioning' },
  { text: 'EPC project documentation' },
  { text: 'plant commissioning process' },
  { text: 'digital documentation workflow' },
  { text: 'commissioning management system' },
  { text: 'compliance documentation' },
  { text: 'plant operations documentation' }
];

export default DigitalInfrastructureBlog;
