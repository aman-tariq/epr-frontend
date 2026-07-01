'use client';

import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const CommissioningRecords: React.FC = () => {
  const c1Ref = useRef<HTMLCanvasElement>(null);
  const c2Ref = useRef<HTMLCanvasElement>(null);
  const c3Ref = useRef<HTMLCanvasElement>(null);
  const c4Ref = useRef<HTMLCanvasElement>(null);
  const c5Ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const teal = '#0A6E72';
    const amber = '#C9920A';
    const rust = '#9B3510';

    // Chart 1
    if (c1Ref.current) {
      new Chart(c1Ref.current, {
        type: 'bar',
        data: {
          labels: ['Unplanned downtime\n(hrs/yr)', 'Startup delay\n(weeks)', 'Maintenance cost\n(% asset value)', 'Incident response\n(minutes)'],
          datasets: [
            { label: 'Strong Documentation', data: [115, 2.2, 2.4, 17], backgroundColor: teal, borderRadius: 4 },
            { label: 'Weak Documentation', data: [420, 9.1, 5.1, 54], backgroundColor: '#D4C8B8', borderRadius: 4 },
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (c) => ' ' + c.dataset.label + ': ' + c.raw } }
          },
          scales: {
            x: { grid: { display: false }, ticks: { font: { size: 11 } } },
            y: { grid: { color: '#F0EAE0' }, ticks: { font: { size: 11 } } }
          }
        }
      });
    }

    // Chart 2 - Horizontal Bar
    if (c2Ref.current) {
      new Chart(c2Ref.current, {
        type: 'bar',
        data: {
          labels: ['Pre-Commissioning', 'Handover & Closeout', 'SAT Testing', 'FAT Testing', 'Live Commissioning'],
          datasets: [{
            label: 'Impact Score',
            data: [91, 86, 74, 65, 58],
            backgroundColor: [teal, teal, amber, amber, rust],
            borderRadius: 4,
          }]
        },
        options: {
          indexAxis: 'y' as const,
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { max: 100, grid: { color: '#F0EAE0' }, ticks: { font: { size: 11 } } },
            y: { grid: { display: false }, ticks: { font: { size: 11 } } }
          }
        }
      });
    }

    // Chart 3 - Line
    if (c3Ref.current) {
      new Chart(c3Ref.current, {
        type: 'line',
        data: {
          labels: ['Design', 'Procurement', 'Construction', 'Pre-Comm', 'Commissioning', 'Perf. Testing', 'Handover'],
          datasets: [
            {
              label: 'Mandatory Deliverables',
              data: [5, 13, 30, 90, 125, 68, 42],
              borderColor: teal,
              backgroundColor: 'rgba(10,110,114,0.10)',
              fill: true,
              tension: 0.4,
              pointBackgroundColor: teal,
              pointRadius: 5
            },
            {
              label: 'Total Documents',
              data: [9, 20, 48, 145, 195, 98, 62],
              borderColor: amber,
              backgroundColor: 'rgba(201,146,10,0.07)',
              fill: true,
              tension: 0.4,
              borderDash: [6, 3],
              pointBackgroundColor: amber,
              pointRadius: 5
            },
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { font: { size: 11 } } },
            y: { grid: { color: '#F0EAE0' }, ticks: { font: { size: 11 } } }
          }
        }
      });
    }

    // Chart 4
    if (c4Ref.current) {
      new Chart(c4Ref.current, {
        type: 'bar',
        data: {
          labels: ['FAT deviation\nresolution', 'SAT deviation\nresolution', 'Final commissioning\nsign-off'],
          datasets: [
            { label: 'Complete Documentation', data: [6, 9, 18], backgroundColor: teal, borderRadius: 4 },
            { label: 'Incomplete Documentation', data: [31, 44, 87], backgroundColor: rust, borderRadius: 4 },
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (c) => ' ' + c.dataset.label + ': ' + c.raw + ' hrs' } }
          },
          scales: {
            x: { grid: { display: false }, ticks: { font: { size: 11 } } },
            y: { grid: { color: '#F0EAE0' }, ticks: { font: { size: 11 } } }
          }
        }
      });
    }

    // Chart 5 - Horizontal Bar
    if (c5Ref.current) {
      new Chart(c5Ref.current, {
        type: 'bar',
        data: {
          labels: ['Document creation', 'Status reporting', 'Document retrieval', 'Punch list mgmt', 'Handover prep', 'Audit & compliance'],
          datasets: [
            { label: 'Digital System', data: [42, 9, 5, 14, 22, 7], backgroundColor: teal, borderRadius: 4 },
            { label: 'Traditional', data: [65, 35, 32, 48, 102, 42], backgroundColor: amber, borderRadius: 4 },
          ]
        },
        options: {
          indexAxis: 'y' as const,
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (c) => ' ' + c.dataset.label + ': ' + c.raw + ' hrs' } }
          },
          scales: {
            x: { grid: { color: '#F0EAE0' }, ticks: { font: { size: 11 } } },
            y: { grid: { display: false }, ticks: { font: { size: 11 } } }
          }
        }
      });
    }
  }, []);

  const toggleFaq = (e: React.MouseEvent<HTMLDivElement>) => {
    const q = e.currentTarget;
    const a = q.nextElementSibling as HTMLDivElement;
    const isOpen = q.classList.contains('open');

    document.querySelectorAll('.faq-q').forEach((x) => {
      x.classList.remove('open');
      (x.nextElementSibling as HTMLElement).classList.remove('show');
    });

    if (!isOpen) {
      q.classList.add('open');
      a.classList.add('show');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFEF9] text-[#1C1A14] font-sans">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#052A2C] via-[#0A5A5E] to-[#0A6E72] text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.03%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%27)]" />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-block bg-[#B87000] text-white text-xs tracking-[3px] px-6 py-1.5 rounded mb-6 font-semibold">
            Smart Plant Performance Series
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Your Plant Has a Memory.<br />Are You <em className="text-[#7EDBD8]">Listening to It?</em>
          </h1>
          <p className="mt-8 text-lg md:text-xl italic max-w-2xl mx-auto text-white/75 font-serif">
            Why commissioning records are the hidden engine behind every high-performing industrial operation — and what happens when you ignore them.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-white/60">
            <span>📅 2024 Edition</span>
            <span>⏱ 13 min read</span>
            <span>🏭 EPC &amp; Industrial Operations</span>
          </div>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-16">
        {/* Lead */}
        <p className="text-[18px] leading-relaxed border-l-4 border-[#0A6E72] pl-6 text-[#1C1A14] mb-12 font-serif">
          Every plant has a story — told not in press releases, but in the commissioning records that document how it was brought to life. When those records are complete, accurate, and accessible, operations teams make smarter decisions, faster.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {[
            { n: "68%", l: "Plants with poor records miss design throughput in Year 1" },
            { n: "₹35 Cr+", l: "Average cost per unplanned outage in India" },
            { n: "3.4×", l: "Faster fault resolution with complete as-built docs" },
            { n: "41%", l: "Of startup delays linked to incomplete commissioning records" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#F5F0E8] border border-[#E4DDD4] rounded-xl p-6 text-center">
              <span className="block text-4xl font-serif text-[#0A6E72] font-bold">{stat.n}</span>
              <div className="text-xs uppercase tracking-widest text-[#7A7060] mt-3 font-semibold">{stat.l}</div>
            </div>
          ))}
        </div>

        {/* Sections */}
        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A7060] my-12">
          <div className="flex-1 h-px bg-[#E4DDD4]" />
          The Foundation
          <div className="flex-1 h-px bg-[#E4DDD4]" />
        </div>

        <h2 className="font-serif text-4xl font-bold mb-6">What Makes Commissioning Records So Powerful?</h2>
        <p className="mb-8 leading-relaxed">
          The term <strong>setup and commissioning documentation</strong> covers a broad family of records — from the earliest <strong>pre-commissioning checklist</strong> to the final <strong>handover documentation</strong>.
        </p>

        {/* Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {[
            { title: "Pre-Commissioning", desc: "Mechanical completion, punch lists, installation verification, safety checks.", cls: "bg-[#EFF9F9] border-[#9DDAD8] text-[#0A6E72]" },
            { title: "FAT Testing", desc: "Factory acceptance documentation, vendor sign-offs, function validation.", cls: "bg-[#FEF3DC] border-[#F5C97A] text-[#8A5A00]" },
            { title: "SAT Testing", desc: "Site acceptance, on-site performance verification, integration checks.", cls: "bg-[#FAEAE3] border-[#F4B69A] text-[#9B3510]" },
            { title: "Live Startup", desc: "Startup documentation, loop checks, first-fire records, operational readiness.", cls: "bg-[#F0F5FF] border-[#AABFEE] text-[#1A3FA0]" },
            { title: "Handover", desc: "Turnover package, as-built drawings, operator training, project closeout.", cls: "bg-[#F3F9EC] border-[#A8D07A] text-[#2A6010]" },
          ].map((p, i) => (
            <div key={i} className={`phase p-6 rounded-2xl border ${p.cls}`}>
              <h4 className="font-semibold mb-3 text-sm uppercase">{p.title}</h4>
              <p className="text-sm text-[#7A7060]">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A7060] my-12">
          <div className="flex-1 h-px bg-[#E4DDD4]" />
          The Evidence
          <div className="flex-1 h-px bg-[#E4DDD4]" />
        </div>

        <h2 className="font-serif text-4xl font-bold mb-8">The Performance Gap: What the Data Shows</h2>

        {/* Chart 1 */}
        <div className="chart-card bg-white border border-[#E4DDD4] rounded-2xl p-8 mb-12">
          <div className="chart-label text-xs font-semibold tracking-widest text-[#7A7060] mb-4">Documentation Quality vs. Key Plant Performance Indicators</div>
          <div className="h-[300px]"><canvas ref={c1Ref} /></div>
        </div>

        {/* Chart 2 */}
        <div className="chart-card bg-white border border-[#E4DDD4] rounded-2xl p-8 mb-12">
          <div className="chart-label text-xs font-semibold tracking-widest text-[#7A7060] mb-4">Where Commissioning Documentation Gaps Hurt Most — Impact Score by Phase</div>
          <div className="h-[280px]"><canvas ref={c2Ref} /></div>
        </div>

        {/* Chart 3 */}
        <div className="chart-card bg-white border border-[#E4DDD4] rounded-2xl p-8 mb-12">
          <div className="chart-label text-xs font-semibold tracking-widest text-[#7A7060] mb-4">Commissioning Document Volume by Project Phase — Mandatory vs. Total Generated</div>
          <div className="h-[280px]"><canvas ref={c3Ref} /></div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#E4DDD4] rounded-2xl p-8 mb-16 overflow-x-auto">
          <h3 className="text-[#0A6E72] font-semibold mb-6">The Commissioning Document Database</h3>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#0A6E72] text-white">
                <th className="p-4 text-left">Document Type</th>
                <th className="p-4 text-left">Phase</th>
                <th className="p-4 text-left">Owner</th>
                <th className="p-4 text-left">Volume</th>
                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4DDD4]">
              {[
                ["Mechanical Completion Certificate", "Pre-Commissioning", "Construction Mgr", "1 per system", "Mandatory"],
                ["Pre-Commissioning Checklist", "Pre-Commissioning", "Commissioning Eng", "50–200 items", "Mandatory"],
                ["FAT Documentation Package", "FAT Testing", "Vendor + QA Lead", "1 per major pkg", "Mandatory"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-[#FDFAF5]" : ""}>
                  <td className="p-4">{row[0]}</td>
                  <td className="p-4 text-[#7A7060]">{row[1]}</td>
                  <td className="p-4 text-[#7A7060]">{row[2]}</td>
                  <td className="p-4 text-[#7A7060]">{row[3]}</td>
                  <td className="p-4">
                    <span className={`badge px-3 py-1 text-xs rounded-full ${row[4] === "Mandatory" ? "bg-[#D4EDDA] text-[#155724]" : "bg-[#FFF3CD] text-[#856404]"}`}>
                      {row[4]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAT vs SAT Section */}
        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A7060] my-12">
          <div className="flex-1 h-px bg-[#E4DDD4]" /> FAT vs SAT <div className="flex-1 h-px bg-[#E4DDD4]" />
        </div>

        <h2 className="font-serif text-4xl font-bold mb-8">FAT and SAT Testing: Why Both Sets of Records Matter</h2>

        <div className="callout bg-[#0A6E72] text-white p-10 rounded-3xl mb-12 italic text-lg leading-relaxed">
          &ldquo;The FAT showed the compressor was perfect. The SAT showed it was perfectly installed in the wrong orientation. Both records were essential...&rdquo;
          <cite className="block mt-6 text-sm not-italic opacity-75">— Senior Commissioning Engineer, LNG Sector, Chennai</cite>
        </div>

        {/* Chart 4 */}
        <div className="chart-card bg-white border border-[#E4DDD4] rounded-2xl p-8 mb-12">
          <div className="chart-label text-xs font-semibold tracking-widest text-[#7A7060] mb-4">FAT vs. SAT: Average Time to Resolve Deviations With and Without Proper Records (hours)</div>
          <div className="h-[260px]"><canvas ref={c4Ref} /></div>
        </div>

        {/* Case Study */}
        <div className="bg-[#052A2C] text-white rounded-3xl p-12 relative mb-16">
          <div className="uppercase tracking-[3px] text-xs bg-[#B87000] inline-block px-5 py-1 mb-6">Real-World Case Study</div>
          <h3 className="font-serif text-2xl text-[#7EDBD8] mb-6">How a Gujarat Petrochemical Plant Recovered ₹180 Crore in Lost Performance Through Documentation Remediation</h3>
          <p className="text-white/80 mb-6">A 3,200-tonne/day olefins facility in Gujarat had been operating at 76% of its design capacity...</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { val: "+18%", label: "Capacity utilisation improvement" },
              { val: "28%", label: "Reduction in annual maintenance cost" },
              { val: "₹180 Cr", label: "Recovered annual revenue value" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 text-center">
                <strong className="block text-4xl text-[#F0C040]">{item.val}</strong>
                <span className="text-xs text-white/60 mt-2 block">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Transformation */}
        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A7060] my-12">
          <div className="flex-1 h-px bg-[#E4DDD4]" /> Digital Transformation <div className="flex-1 h-px bg-[#E4DDD4]" />
        </div>

        <h2 className="font-serif text-4xl font-bold mb-8">Digital Commissioning Documentation: The Competitive Advantage</h2>

        {/* Chart 5 */}
        <div className="chart-card bg-white border border-[#E4DDD4] rounded-2xl p-8 mb-12">
          <div className="chart-label text-xs font-semibold tracking-widest text-[#7A7060] mb-4">Digital vs. Traditional Documentation — Time Spent on Key Activities (hours per project)</div>
          <div className="h-[320px]"><canvas ref={c5Ref} /></div>
        </div>

        {/* Best Practices */}
        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A7060] my-12">
          <div className="flex-1 h-px bg-[#E4DDD4]" /> Best Practices <div className="flex-1 h-px bg-[#E4DDD4]" />
        </div>

        <h2 className="font-serif text-4xl font-bold mb-8">Seven Best Practices for High-Value Commissioning Records</h2>

        <ol className="space-y-5 mb-20">
          {[
            "Establish your commissioning plan at project sanction...",
            "Build commissioning deliverables into every vendor and EPC contract...",
          ].map((text, i) => (
            <li key={i} className="pl-16 relative bg-[#F5F0E8] border-l-4 border-[#E4DDD4] rounded-r-2xl p-6 text-[15px]">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#0A6E72] text-white rounded-full flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              {text}
            </li>
          ))}
        </ol>

        {/* FAQ */}
        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A7060] my-12">
          <div className="flex-1 h-px bg-[#E4DDD4]" /> FAQ <div className="flex-1 h-px bg-[#E4DDD4]" />
        </div>

        <h2 className="font-serif text-4xl font-bold mb-10">Frequently Asked Questions</h2>

        <div className="space-y-6 divide-y divide-[#E4DDD4]">
          {[
            { q: "What is setup and commissioning documentation?", a: "..." },
          ].map((faq, i) => (
            <div key={i} className="faq-item pt-6">
              <div className="faq-q flex justify-between items-center cursor-pointer font-semibold text-lg" onClick={toggleFaq}>
                {faq.q}
                <span className="text-3xl text-[#0A6E72] transition-transform duration-300">+</span>
              </div>
              <div className="faq-a hidden mt-4 text-[#7A7060] text-[15px] leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>

        <div className="bg-[#052A2C] text-white rounded-3xl p-16 text-center mt-20">
          <h2 className="font-serif text-4xl text-[#7EDBD8] mb-6">Turn Your Commissioning Records Into a Performance Engine</h2>
          <p className="max-w-xl mx-auto text-white/70">From pre-commissioning checklists to digital turnover packages — every record you capture today is an operational decision you can make smarter tomorrow.</p>
        </div>
      </div>
    </div>
  );
};

export default CommissioningRecords;
