'use client';

import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const CommissioningDocumentationChecklist: React.FC = () => {
  const chart1Ref = useRef<HTMLCanvasElement>(null);
  const chart2Ref = useRef<HTMLCanvasElement>(null);
  const chart3Ref = useRef<HTMLCanvasElement>(null);
  const chart4Ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Chart 1 - Bar Chart
    if (chart1Ref.current) {
      const ctx = chart1Ref.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Unplanned Downtime\n(hrs/year)', 'Time to Startup\n(weeks delay)', 'Maintenance Cost\n(% asset value)', 'Incident Response\n(minutes avg)'],
            datasets: [
              { label: 'Documented Plants', data: [120, 2.1, 2.3, 18], backgroundColor: '#B7410E', borderRadius: 4 },
              { label: 'Undocumented Plants', data: [410, 8.7, 4.9, 52], backgroundColor: '#E8C4A0', borderRadius: 4 },
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: true, position: 'top', labels: { boxWidth: 12, font: { size: 11 } } },
              tooltip: { callbacks: { label: (ctx) => ' ' + ctx.dataset.label + ': ' + ctx.raw } }
            },
            scales: {
              x: { ticks: { font: { size: 11 } }, grid: { display: false } },
              y: { grid: { color: '#F0EAE0' }, ticks: { font: { size: 11 } } }
            }
          }
        });
      }
    }

    // Chart 2 - Horizontal Bar
    if (chart2Ref.current) {
      const ctx = chart2Ref.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Pre-Commissioning', 'FAT Testing', 'SAT Testing', 'Live Commissioning', 'Handover & Closeout'],
            datasets: [{
              label: 'Issue Impact Score (0–100)',
              data: [88, 62, 71, 55, 84],
              backgroundColor: ['#B7410E', '#C9952B', '#E8A87C', '#E8C4A0', '#B7410E'],
              borderRadius: 4,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y' as const,
            scales: {
              x: { max: 100, grid: { color: '#F0EAE0' }, ticks: { font: { size: 11 } } },
              y: { grid: { display: false }, ticks: { font: { size: 11 } } }
            }
          }
        });
      }
    }

    // Chart 3 - Line Chart
    if (chart3Ref.current) {
      const ctx = chart3Ref.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Design', 'Procurement', 'Construction', 'Pre-Comm', 'Commissioning', 'Performance\nTesting', 'Handover'],
            datasets: [
              { 
                label: 'Mandatory Deliverables', 
                data: [5, 12, 28, 85, 120, 65, 40], 
                borderColor: '#B7410E', 
                backgroundColor: 'rgba(183,65,14,0.10)', 
                fill: true, 
                tension: 0.4, 
                pointBackgroundColor: '#B7410E', 
                pointRadius: 5 
              },
              { 
                label: 'Total Documents Generated', 
                data: [8, 18, 45, 140, 190, 95, 60], 
                borderColor: '#C9952B', 
                backgroundColor: 'rgba(201,149,43,0.08)', 
                fill: true, 
                tension: 0.4, 
                borderDash: [6, 3], 
                pointBackgroundColor: '#C9952B', 
                pointRadius: 5 
              },
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: true, position: 'top', labels: { boxWidth: 12, font: { size: 11 } } }
            },
            scales: {
              x: { grid: { display: false }, ticks: { font: { size: 11 } } },
              y: { grid: { color: '#F0EAE0' }, ticks: { font: { size: 11 } } }
            }
          }
        });
      }
    }

    // Chart 4 - Horizontal Bar
    if (chart4Ref.current) {
      const ctx = chart4Ref.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Document Creation', 'Status Reporting', 'Document Retrieval', 'Punch List Mgmt', 'Handover Prep', 'Audit & Compliance'],
            datasets: [
              { label: 'Digital System (hrs)', data: [40, 8, 4, 12, 24, 6], backgroundColor: '#B7410E', borderRadius: 4 },
              { label: 'Traditional (hrs)', data: [60, 32, 28, 45, 96, 38], backgroundColor: '#E8C4A0', borderRadius: 4 },
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y' as const,
            plugins: {
              legend: { display: true, position: 'top', labels: { boxWidth: 12, font: { size: 11 } } }
            },
            scales: {
              x: { grid: { color: '#F0EAE0' }, ticks: { font: { size: 11 } } },
              y: { grid: { display: false }, ticks: { font: { size: 11 } } }
            }
          }
        });
      }
    }
  }, []);

  // FAQ Toggle Handler
  const toggleFaq = (e: React.MouseEvent<HTMLDivElement>) => {
    const q = e.currentTarget;
    const a = q.nextElementSibling as HTMLDivElement;
    const isOpen = q.classList.contains('open');
    
    document.querySelectorAll('.faq-q').forEach(x => {
      x.classList.remove('open');
      (x.nextElementSibling as HTMLElement).classList.remove('show');
    });
    
    if (!isOpen) {
      q.classList.add('open');
      a.classList.add('show');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2C2416] font-sans">
      {/* Hero */}
      <div className="bg-[#1A1206] text-white py-20 md:py-24 px-6 md:px-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,rgba(183,65,14,.08)_40px,rgba(183,65,14,.08)_41px)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-block bg-[#B7410E] text-white text-[11px] tracking-[3px] px-6 py-1.5 font-semibold rounded mb-6">
            Industrial Intelligence Series
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-[820px] mx-auto">
            The Role of Setup Documentation in <br />Plant Operation Intelligence
          </h1>
          
          <p className="mt-8 text-lg md:text-xl italic max-w-[660px] mx-auto text-white/75 font-serif">
            The Role of Setup Documentation in Plant Operation Intelligence — and Why Every Missed Checklist Is a Missed Opportunity.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-10 text-sm text-white/55">
            <span>📅 2024 Edition</span>
            <span>⏱ 12 min read</span>
            <span>🏭 Industrial &amp; EPC Focus</span>
          </div>
        </div>
      </div>

      <div className="max-w-[920px] mx-auto px-6 py-16">
        {/* Lead */}
        <p className="text-[19px] leading-relaxed border-l-4 border-[#B7410E] pl-6 text-[#2C2416] mb-12">
          Imagine spending ₹1,660 crore building a plant — then watching it underperform for years because nobody documented how it was actually commissioned. This is not a hypothetical. It happens across refineries, power plants, and manufacturing facilities worldwide. Setup and commissioning documentation is the bridge between a constructed asset and an intelligent, high-performing operation.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { num: "73%", lbl: "Plants lack complete commissioning records" },
            { num: "40%", lbl: "Startup delays traced to poor documentation" },
            { num: "₹35 Cr+", lbl: "Average cost per unplanned outage" },
            { num: "3×", lbl: "Faster troubleshooting with good as-built docs" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#FBF7F0] border border-[#E2D9CC] rounded-xl p-6 text-center">
              <span className="block text-4xl font-serif text-[#B7410E] font-bold">{stat.num}</span>
              <div className="text-xs uppercase tracking-widest text-[#7A6E60] mt-2 font-semibold">{stat.lbl}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A6E60] mb-12">
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
          What Is Setup Documentation
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
        </div>

        <h2 className="font-serif text-4xl font-bold mb-6">What Is Setup and Commissioning Documentation?</h2>
        
        <p className="mb-6 leading-relaxed">
          At its core, <strong>setup and commissioning documentation</strong> is the complete body of written records that captures how a facility transitions from construction to live operation. It includes everything from the earliest <strong>pre-commissioning checklist</strong> to the final <strong>handover documentation</strong> passed to the operations team.
        </p>
        
        <p className="mb-12 leading-relaxed">
          This documentation is not paperwork for paperwork&apos;s sake. It is the operational memory of your plant. A well-maintained <strong>commissioning plan</strong> captures the sequence of activities, the responsible parties, the acceptance criteria, and the baseline performance data that operations teams rely on for years — sometimes decades — of service.
        </p>

        {/* Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {[
            { title: "Pre-Commissioning", desc: "Mechanical completion, punch lists, inspection records, equipment installation verification.", color: "bg-[#FFF7F3] border-[#FFCCB3] text-[#B7410E]" },
            { title: "FAT Testing", desc: "Factory acceptance testing documentation, vendor sign-offs, system function validation.", color: "bg-[#F3F8FF] border-[#B3CFFF] text-[#1A4FA0]" },
            { title: "SAT Testing", desc: "Site acceptance testing, performance verification at actual operating conditions.", color: "bg-[#F3FFF6] border-[#B3E6C0] text-[#0D6E3A]" },
            { title: "Startup", desc: "Startup documentation, loop checks, first-fire records, operational readiness sign-offs.", color: "bg-[#FFFFF3] border-[#E6E0A0] text-[#7A6800]" },
            { title: "Handover", desc: "Turnover package, as-built documentation, operator training records, project closeout.", color: "bg-[#F8F3FF] border-[#CDB3FF] text-[#5A2EA0]" },
          ].map((phase, i) => (
            <div key={i} className={`rounded-2xl p-6 border ${phase.color}`}>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">{phase.title}</h4>
              <p className="text-sm text-[#7A6E60]">{phase.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A6E60] mb-12">
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
          The Data Picture
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
        </div>

        <h2 className="font-serif text-4xl font-bold mb-8">Why Commissioning Documentation Drives Plant Performance</h2>

        {/* Chart 1 */}
        <div className="bg-white border border-[#E2D9CC] rounded-3xl p-8 mb-12">
          <div className="uppercase text-xs tracking-widest font-semibold text-[#7A6E60] mb-4">Documentation Quality vs. Plant KPIs — Benchmark Comparison</div>
          <div className="h-[280px]">
            <canvas ref={chart1Ref} />
          </div>
        </div>

        <p className="mb-12 leading-relaxed">
          Beyond startup, the value compounds. Operators who have access to complete <strong>startup and shutdown procedures</strong>, accurate <strong>as-built documentation</strong>, and structured <strong>engineering documentation</strong> make faster, safer decisions during abnormal events.
        </p>

        {/* Chart 2 */}
        <div className="bg-white border border-[#E2D9CC] rounded-3xl p-8 mb-12">
          <div className="uppercase text-xs tracking-widest font-semibold text-[#7A6E60] mb-4">Commissioning Phase — Where Documentation Gaps Cause Most Issues</div>
          <div className="h-[260px]">
            <canvas ref={chart2Ref} />
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A6E60] mb-12">
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
          Key Components
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
        </div>

        <h2 className="font-serif text-4xl font-bold mb-8">Key Components of a Commissioning Checklist</h2>

        {/* Chart 3 */}
        <div className="bg-white border border-[#E2D9CC] rounded-3xl p-8 mb-12">
          <div className="uppercase text-xs tracking-widest font-semibold text-[#7A6E60] mb-4">Commissioning Deliverables by Project Phase — Volume &amp; Priority</div>
          <div className="h-[280px]">
            <canvas ref={chart3Ref} />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#E2D9CC] rounded-3xl p-8 mb-16 overflow-x-auto">
          <div className="uppercase text-xs tracking-widest font-semibold text-[#7A6E60] mb-6">Commissioning Checklist — Document Database Reference</div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#B7410E] text-white">
                <th className="px-6 py-4 text-left font-semibold">Document Type</th>
                <th className="px-6 py-4 text-left font-semibold">Phase</th>
                <th className="px-6 py-4 text-left font-semibold">Responsible</th>
                <th className="px-6 py-4 text-left font-semibold">Typical Volume</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2D9CC]">
              {[
                ["Mechanical Completion Certificate", "Pre-Commissioning", "Construction Mgr", "1 per system", "Mandatory"],
                ["Pre-Commissioning Checklist", "Pre-Commissioning", "Commissioning Eng", "50–200 items", "Mandatory"],
                ["FAT Documentation", "FAT Testing", "Vendor + QA", "1 per major package", "Mandatory"],
                ["SAT Documentation", "Site Acceptance", "Commissioning Eng", "1 per subsystem", "Mandatory"],
                ["Loop Check Records", "Commissioning", "Instrument Tech", "100–500 loops", "Mandatory"],
                ["Performance Verification Report", "Commissioning", "Process Eng", "1 per unit op", "Recommended"],
                ["Startup & Shutdown Procedures", "Commissioning", "Operations Lead", "1 per system", "Mandatory"],
                ["As-Built Drawings", "Handover", "Engineering", "Full drawing set", "Mandatory"],
                ["Operator Training Records", "Handover", "HSE / Ops", "1 per operator", "Recommended"],
                ["Commissioning Report", "Project Closeout", "PM / Comm Mgr", "1 consolidated", "Mandatory"],
                ["Handover Documentation Package", "Project Closeout", "PM", "Full turnover pkg", "Mandatory"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-[#FBF7F0]" : ""}>
                  <td className="px-6 py-4">{row[0]}</td>
                  <td className="px-6 py-4 text-[#7A6E60]">{row[1]}</td>
                  <td className="px-6 py-4 text-[#7A6E60]">{row[2]}</td>
                  <td className="px-6 py-4 text-[#7A6E60]">{row[3]}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-0.5 text-[10px] font-semibold rounded-full ${row[4] === "Mandatory" ? "bg-[#D4EDDA] text-[#155724]" : "bg-[#FFF3CD] text-[#856404]"}`}>
                      {row[4]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A6E60] mb-12">
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
          FAT vs SAT
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
        </div>

        <h2 className="font-serif text-4xl font-bold mb-8">FAT vs SAT Testing Documentation: Understanding the Difference</h2>
        
        <p className="mb-8 leading-relaxed">
          <strong>FAT testing</strong> (Factory Acceptance Testing) and <strong>SAT testing</strong> (Site Acceptance Testing) are two of the most critical verification milestones in the commissioning process — and their documentation requirements differ significantly.
        </p>

        <div className="bg-[#B7410E] text-white p-8 md:p-12 rounded-3xl mb-12 italic text-[18px] leading-relaxed font-serif">
          &ldquo;A FAT tells you the equipment works in isolation. An SAT tells you it works in your plant. Both are irreplaceable — and both demand meticulous documentation to be actionable.&rdquo;
          <div className="mt-6 text-xs font-sans not-italic opacity-75">— Senior Commissioning Manager, Refinery Sector</div>
        </div>

        {/* Case Study */}
        <div className="bg-[#1A1206] text-white rounded-3xl p-10 md:p-14 relative mb-16 overflow-hidden">
          <div className="uppercase text-[10px] tracking-[3px] bg-[#B7410E] inline-block px-5 py-1 font-bold mb-6">Real-World Case Study</div>
          
          <h3 className="font-serif text-2xl text-[#C9952B] mb-6">Petrochemical Plant Startup: How Structured Commissioning Documentation Saved ₹150 Crore</h3>
          
          <p className="text-white/80 mb-6">
            A 2,800-tonne/day petrochemical facility in the Middle East faced chronic underperformance in its first 18 months of operation. Root-cause analysis revealed that the original commissioning team had used disconnected spreadsheets and paper checklists — none of which were properly indexed or linked to the plant&apos;s DCS configuration.
          </p>
          
          <p className="text-white/80 mb-6">
            A systematic <strong>commissioning documentation</strong> remediation program was launched... Within 12 months of the remediation, the facility achieved its design throughput for the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[
              { val: "31%", label: "Reduction in maintenance costs" },
              { val: "–71%", label: "Fewer unplanned shutdowns per year" },
              { val: "47%", label: "Faster operator response to incidents" },
            ].map((res, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                <div className="text-4xl font-serif text-[#C9952B] font-bold mb-1">{res.val}</div>
                <div className="text-xs text-white/60 tracking-wide">{res.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Transformation */}
        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A6E60] mb-12">
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
          Digital Transformation
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
        </div>

        <h2 className="font-serif text-4xl font-bold mb-8">Digital Commissioning Documentation: The Modern Approach</h2>

        {/* Chart 4 */}
        <div className="bg-white border border-[#E2D9CC] rounded-3xl p-8 mb-12">
          <div className="uppercase text-xs tracking-widest font-semibold text-[#7A6E60] mb-4">Digital vs. Traditional Documentation: Time Spent on Key Activities</div>
          <div className="h-[260px]">
            <canvas ref={chart4Ref} />
          </div>
        </div>

        {/* Best Practices */}
        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A6E60] mb-12">
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
          Best Practices
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
        </div>

        <h2 className="font-serif text-4xl font-bold mb-8">Best Practices for Commissioning Documentation</h2>
        
        <ol className="space-y-4 mb-20">
          {[
            "Start documentation planning at project sanction. The commissioning plan, document register, and naming conventions should be established before detailed engineering begins.",
            "Integrate FAT and SAT documentation into contract requirements. Vendors must understand their documentation obligations from the outset.",
            "Use a single-source commissioning management system. Fragmented documentation across email, local drives, and paper creates risk.",
            "Validate as-built documentation before mechanical completion sign-off.",
            "Engage the operations team in commissioning review. Operator training documentation and startup and shutdown procedures must be written for the people who will use them.",
            "Treat the turnover package as a living asset, not a final deliverable.",
            "Define commissioning standards upfront and enforce them consistently.",
          ].map((item, i) => (
            <li key={i} className="pl-16 relative bg-[#FBF7F0] border-l-4 border-[#E2D9CC] rounded-r-2xl p-6 text-[15px]">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#B7410E] text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</div>
              {item}
            </li>
          ))}
        </ol>

        {/* FAQ */}
        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A6E60] mb-12">
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
          FAQ
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
        </div>

        <h2 className="font-serif text-4xl font-bold mb-10">Frequently Asked Questions</h2>

        <div className="space-y-px divide-y divide-[#E2D9CC] mb-20">
          {[
            {
              q: "What is setup and commissioning documentation?",
              a: "Setup and commissioning documentation encompasses all the records created during the process of bringing a new facility or system from construction completion to full operational status."
            },
            {
              q: "Why is commissioning documentation important?",
              a: "Commissioning documentation is the institutional memory of your plant. Plants with comprehensive commissioning records experience fewer unplanned shutdowns, lower maintenance costs, and faster recovery from abnormal events."
            },
            {
              q: "What should be included in a commissioning checklist?",
              a: "A comprehensive commissioning checklist should include mechanical completion verification, instrument calibration records, safety system functional tests, utility system checks, and operator sign-off records."
            },
            {
              q: "What is the difference between FAT and SAT testing?",
              a: "FAT is conducted at the vendor's facility. SAT is conducted after installation on site."
            },
            {
              q: "What is pre-commissioning in industrial projects?",
              a: "Pre-commissioning refers to all the verification activities carried out after construction is complete but before systems are energised."
            },
          ].map((faq, i) => (
            <div key={i} className="faq-item py-7">
              <div 
                className="faq-q flex justify-between items-center cursor-pointer text-lg font-semibold" 
                onClick={toggleFaq}
              >
                {faq.q}
                <span className="text-3xl text-[#B7410E] transition-transform">+</span>
              </div>
              <div className="faq-a hidden mt-4 text-[#7A6E60] text-[15px] leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>

        {/* Keywords */}
        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A6E60] mb-8">
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
          Related Keywords
          <div className="flex-1 h-px bg-[#E2D9CC]"></div>
        </div>

        <div className="flex flex-wrap gap-3 mb-20">
          {[
            "commissioning documentation", "commissioning checklist", "commissioning plan", "handover documentation",
            "startup documentation", "mechanical completion", "FAT testing", "SAT testing", "as-built documentation",
            "turnover package", "digital commissioning documentation", "pre-commissioning checklist"
          ].map((kw, i) => (
            <span key={i} className={`px-5 py-2 text-sm rounded-full border ${i < 4 ? 'bg-[#FFF0E8] border-[#FFCCB3] text-[#B7410E] font-semibold' : 'bg-[#FBF7F0] border-[#E2D9CC] text-[#7A6E60]'}`}>
              {kw}
            </span>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="bg-[#1A1206] text-white rounded-3xl p-12 md:p-16 text-center">
          <h2 className="font-serif text-4xl text-[#C9952B] mb-6">Ready to Transform Your Commissioning Documentation?</h2>
          <p className="max-w-xl mx-auto text-white/70 text-lg">From pre-commissioning checklists to full digital handover packages — structured commissioning documentation is the foundation of plant operation intelligence.</p>
        </div>
      </div>
    </div>
  );
};

export default CommissioningDocumentationChecklist;
