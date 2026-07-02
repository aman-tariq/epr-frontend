'use client';

import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PlantStartupDocumentation: React.FC = () => {
  const c1Ref = useRef<HTMLCanvasElement>(null);
  const c2Ref = useRef<HTMLCanvasElement>(null);
  const c3Ref = useRef<HTMLCanvasElement>(null);
  const c4Ref = useRef<HTMLCanvasElement>(null);
  const c5Ref = useRef<HTMLCanvasElement>(null);
  const c6Ref = useRef<HTMLCanvasElement>(null);
  const c7Ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const NAVY = '#1A4FA0';
    const SKY = '#3A7DD4';
    const AMBER = '#8A5A00';
    const AMBER_L = '#F5C97A';
    const MUTED = '#6B7290';
    const GREEN = '#1A5C1A';
    const RED = '#8A1A1A';
    const BORDER = '#DDE3F0';

    const baseOpts = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } };

    // Chart 1: Horizontal Bar - Root causes
    if (c1Ref.current) {
      new Chart(c1Ref.current, {
        type: 'bar',
        data: {
          labels: ['Incomplete documentation', 'Unresolved punch items', 'Missing safety certifications', 'Untrained operators', 'Equipment punch list', 'Regulatory non-compliance'],
          datasets: [{ data: [44, 31, 28, 22, 18, 15], backgroundColor: [NAVY, SKY, SKY, AMBER_L, AMBER_L, MUTED], borderRadius: 4 }]
        },
        options: {
          ...baseOpts,
          indexAxis: 'y' as const,
          scales: {
            x: { max: 55, grid: { color: BORDER }, ticks: { font: { size: 11 }, callback: (v: any) => v + '%' } },
            y: { grid: { display: false }, ticks: { font: { size: 11 } } }
          }
        }
      });
    }

    // Chart 2: Line - Document readiness vs risk
    if (c2Ref.current) {
      new Chart(c2Ref.current, {
        type: 'line',
        data: {
          labels: ['40%', '50%', '60%', '70%', '80%', '90%', '100%'],
          datasets: [{
            label: 'Startup risk score',
            data: [92, 78, 62, 46, 30, 17, 11],
            borderColor: RED,
            backgroundColor: 'rgba(138,26,26,0.08)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: RED,
            pointRadius: 5,
            borderWidth: 2.5
          }]
        },
        options: {
          ...baseOpts,
          scales: {
            x: { grid: { display: false }, ticks: { font: { size: 11 } } },
            y: { grid: { color: BORDER }, ticks: { font: { size: 11 } } }
          }
        }
      });
    }

    // Chart 3: Doughnut - Punch list categories
    if (c3Ref.current) {
      new Chart(c3Ref.current, {
        type: 'doughnut',
        data: {
          labels: ['Safety-critical A-items', 'Engineering B-items', 'Cosmetic C-items', 'Deferred items'],
          datasets: [{
            data: [12, 31, 38, 19],
            backgroundColor: [NAVY, SKY, AMBER_L, MUTED],
            borderWidth: 3,
            borderColor: '#fff'
          }]
        },
        options: { ...baseOpts, cutout: '62%' }
      });
    }

    // Chart 4: Bar - Operator training
    if (c4Ref.current) {
      new Chart(c4Ref.current, {
        type: 'bar',
        data: {
          labels: ['<50% trained', '50–70% trained', '70–90% trained', '90–100% trained'],
          datasets: [{ data: [22, 41, 68, 89], backgroundColor: [RED, '#BA7517', SKY, GREEN], borderRadius: 4 }]
        },
        options: {
          ...baseOpts,
          scales: {
            y: { max: 100, grid: { color: BORDER }, ticks: { font: { size: 11 }, callback: (v: any) => v + '%' } },
            x: { grid: { display: false }, ticks: { font: { size: 11 } } }
          }
        }
      });
    }

    // Chart 5: Bar - As-built accuracy
    if (c5Ref.current) {
      new Chart(c5Ref.current, {
        type: 'bar',
        data: {
          labels: ['Below 70% accuracy', '70–90% accuracy', 'Above 90% accuracy'],
          datasets: [{ data: [8.4, 4.1, 1.3], backgroundColor: [RED, AMBER_L, GREEN], borderRadius: 4 }]
        },
        options: { ...baseOpts, scales: { y: { grid: { color: BORDER } } } }
      });
    }

    // Chart 6: Grouped Bar - Turnover package
    if (c6Ref.current) {
      new Chart(c6Ref.current, {
        type: 'bar',
        data: {
          labels: ['As-built drawings', 'O&M manuals', 'Safety certs', 'Startup procedures', 'Training records', 'Commissioning report'],
          datasets: [
            { label: 'Required', data: [100, 100, 100, 100, 100, 100], backgroundColor: NAVY, borderRadius: 4 },
            { label: 'Actually received', data: [71, 68, 82, 74, 58, 63], backgroundColor: AMBER_L, borderRadius: 4 }
          ]
        },
        options: {
          ...baseOpts,
          scales: {
            y: { max: 110, grid: { color: BORDER }, ticks: { font: { size: 11 }, callback: (v: any) => v + '%' } },
            x: { grid: { display: false }, ticks: { font: { size: 10 }, maxRotation: 35 } }
          }
        }
      });
    }

    // Chart 7: Grouped Bar - Digital vs Traditional
    if (c7Ref.current) {
      new Chart(c7Ref.current, {
        type: 'bar',
        data: {
          labels: ['Refinery', 'Power plant', 'Chemical plant', 'Manufacturing', 'Pharma GMP'],
          datasets: [
            { label: 'Digital', data: [8, 6, 5, 3, 7], backgroundColor: NAVY, borderRadius: 4 },
            { label: 'Traditional', data: [19, 16, 13, 9, 17], backgroundColor: AMBER_L, borderRadius: 4 }
          ]
        },
        options: {
          ...baseOpts,
          scales: {
            y: { grid: { color: BORDER }, ticks: { font: { size: 11 } } },
            x: { grid: { display: false }, ticks: { font: { size: 11 } } }
          }
        }
      });
    }
  }, []);

  const toggleFaq = (e: React.MouseEvent) => {
    const q = e.currentTarget as HTMLDivElement;
    const a = q.nextElementSibling as HTMLDivElement;
    const isOpen = q.classList.contains('open');

    document.querySelectorAll('.faq-q').forEach((el) => {
      el.classList.remove('open');
      (el.nextElementSibling as HTMLElement)?.classList.remove('show');
    });

    if (!isOpen) {
      q.classList.add('open');
      a.classList.add('show');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFD] text-[#1A1A2E] font-sans">
      {/* Hero */}
      <div className="bg-[#0C1F3F] text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A4FA0] via-[#3A7DD4] to-[#F5C97A]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-block bg-[#1A4FA0] text-xs tracking-[3px] px-6 py-2 rounded font-bold mb-6">Plant Startup Intelligence Series</div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            No Document, <span className="text-[#F5C97A]">No Startup.</span><br />It&apos;s That Simple.
          </h1>
          <p className="mt-8 text-lg md:text-xl italic max-w-2xl mx-auto text-white/70 font-serif">
            Every plant shutdown traced to a missing record, every delayed startup caused by an incomplete checklist — all of it was preventable.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-10 text-sm text-white/50">
            <span>📅 2024 Edition</span>
            <span>⏱ 14 min read</span>
            <span>🏭 EPC &amp; Industrial Projects</span>
            <span>🇮🇳 INR figures throughout</span>
          </div>
        </div>
      </div>

      <div className="max-w-[880px] mx-auto px-6 py-16">
        {/* Lead */}
        <p className="text-[18px] leading-relaxed border-l-4 border-[#3A7DD4] pl-6 text-[#0C1F3F] mb-12 font-serif">
          Across Indian and global industrial projects, the single most consistent cause of delayed plant startups is not engineering failure — it is documentation failure.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {[
            { n: "₹40 Cr+", l: "Average cost of one delayed startup week" },
            { n: "44%", l: "Of first-year plant failures linked to doc gaps" },
            { n: "₹28 Cr", l: "Average unplanned outage cost in Indian industry" },
            { n: "3.8×", l: "Faster startup with complete commissioning records" },
          ].map((s, i) => (
            <div key={i} className="bg-[#F4F6FB] border border-[#DDE3F0] rounded-xl p-6 text-center">
              <span className="block text-4xl font-serif text-[#1A4FA0] font-bold">{s.n}</span>
              <div className="text-xs uppercase tracking-widest text-[#6B7290] mt-3 font-semibold">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#6B7290] my-12">
          <div className="flex-1 h-px bg-[#DDE3F0]" /> Why It Matters <div className="flex-1 h-px bg-[#DDE3F0]" />
        </div>

        <h2 className="font-serif text-4xl font-bold mb-8">The Document Readiness Gap in Indian Industrial Projects</h2>

        {/* Chart 1 */}
        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-8 mb-12">
          <div className="text-xs font-bold tracking-widest text-[#6B7290] mb-4">Root causes of delayed plant startups — Indian EPC projects (% of surveyed projects)</div>
          <div className="h-[300px]"><canvas ref={c1Ref} /></div>
        </div>

        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#6B7290] my-12">
          <div className="flex-1 h-px bg-[#DDE3F0]" /> The Essential Documents <div className="flex-1 h-px bg-[#DDE3F0]" />
        </div>

        <h2 className="font-serif text-4xl font-bold mb-8">Five Categories of Documents Required Before Plant Startup</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            { num: "01", title: "Pre-Commissioning Records", desc: "Mechanical completion certificates, punch list closeouts, loop check records, instrument calibration certificates.", color: "bg-[#E6F1FB] border-[#85B7EB] text-[#0C447C]" },
            { num: "02", title: "Testing Documentation", desc: "FAT testing packages, SAT testing reports, acceptance testing sign-offs.", color: "bg-[#FEF7E6] border-[#F5C97A] text-[#8A5A00]" },
            { num: "03", title: "Safety & Compliance", desc: "Hazop closeout records, safety system functional tests, statutory inspection certificates.", color: "bg-[#EAF6EA] border-[#90D090] text-[#1A5C1A]" },
            { num: "04", title: "Operational Procedures", desc: "Startup and shutdown procedures, emergency response plans, operator training records.", color: "bg-[#F3EFFE] border-[#AFA9EC] text-[#3C3489]" },
            { num: "05", title: "Handover Package", desc: "As-built documentation, turnover package, commissioning report.", color: "bg-[#FBE9E9] border-[#F09595] text-[#8A1A1A]" },
          ].map((item, i) => (
            <div key={i} className={`doc-card p-6 rounded-xl border ${item.color}`}>
              <div className="text-4xl font-serif font-bold mb-2">{item.num}</div>
              <h4 className="font-bold mb-3">{item.title}</h4>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Chart 2 */}
        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-8 mb-12">
          <div className="text-xs font-bold tracking-widest text-[#6B7290] mb-4">Document readiness vs. startup risk — correlation across 140 industrial projects</div>
          <div className="h-[280px]"><canvas ref={c2Ref} /></div>
        </div>

        {/* Mechanical Completion Section */}
        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#6B7290] my-12">
          <div className="flex-1 h-px bg-[#DDE3F0]" /> Mechanical Completion <div className="flex-1 h-px bg-[#DDE3F0]" />
        </div>

        <h2 className="font-serif text-4xl font-bold mb-8">Mechanical Completion: The Foundation Everything Else Rests On</h2>

        {/* Chart 3 */}
        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-8 mb-12">
          <div className="text-xs font-bold tracking-widest text-[#6B7290] mb-4">Mechanical completion punch list — category distribution</div>
          <div className="h-[260px]"><canvas ref={c3Ref} /></div>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-[#6B7290]">
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#1A4FA0]" />Safety-critical A-items (12%)</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#3A7DD4]" />Engineering B-items (31%)</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#F5C97A]" />Cosmetic C-items (38%)</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#6B7290]" />Deferred items (19%)</span>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-8 mb-16 overflow-x-auto">
          <div className="text-xs font-bold tracking-widest text-[#6B7290] mb-6">Essential documents required before plant startup</div>
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="bg-[#0C1F3F] text-white">
                <th className="p-4 text-left">Document</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Responsible Party</th>
                <th className="p-4 text-left">Startup Priority</th>
                <th className="p-4 text-left">Risk if Missing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DDE3F0]">
              {[
                ["Mechanical Completion Certificate", "Pre-Commissioning", "Construction Manager", "Mandatory", "Startup blocked"],
                ["Pre-Commissioning Checklist", "Pre-Commissioning", "Commissioning Eng", "Mandatory", "Startup blocked"],
                ["FAT Documentation Package", "Testing Documentation", "Vendor + QA Lead", "Mandatory", "Quality at risk"],
                ["SAT Test Report", "Testing Documentation", "Site Test Lead", "Mandatory", "Acceptance blocked"],
                ["Loop Calibration Records", "Pre-Commissioning", "Instrument Tech", "Mandatory", "Process accuracy at risk"],
                ["Hazop Closeout Report", "Safety & Compliance", "Safety Engineer", "Mandatory", "Regulatory violation"],
                ["Safety System Acceptance", "Safety & Compliance", "Safety Review Board", "Mandatory", "Certification refused"],
                ["Operator Training Records", "Operational Procedures", "Training Coordinator", "Mandatory", "Operator errors likely"],
                ["Startup Procedures Document", "Operational Procedures", "Process Engineering", "Mandatory", "Uncontrolled startup"],
                ["As-Built Drawings", "Handover Package", "Design Engineer", "Mandatory", "Troubleshooting delayed"],
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-[#F4F6FB]" : ""}>
                  <td className="p-4 font-medium">{row[0]}</td>
                  <td className="p-4 text-[#6B7290]">{row[1]}</td>
                  <td className="p-4 text-[#6B7290]">{row[2]}</td>
                  <td className="p-4"><span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-800">{row[3]}</span></td>
                  <td className="p-4"><span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-800">{row[4]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Case Study */}
        <div className="bg-[#0C1F3F] text-white rounded-3xl p-12 mb-16 relative">
          <div className="uppercase text-xs tracking-widest bg-[#1A4FA0] inline-block px-6 py-1 mb-6">Real-World Case Study</div>
          <h3 className="font-serif text-2xl text-[#F5C97A] mb-6">How a Maharashtra Chemical Plant Avoided a ₹220 Crore Regulatory Shutdown</h3>
          <p className="text-white/80 mb-8">A specialty chemicals facility in Pune received a statutory notice requiring immediate compliance on safety documentation and training records. The plant was operating under a temporary waiver that was due to expire in 90 days. Without proper commissioning records and operator certifications, the facility faced a production shutdown notice. The solution: comprehensive document remediation and accelerated operator training. Total cost of remediation: ₹3.8 crore. Cost avoided: ₹238 crore.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { val: "₹238 Cr", label: "Regulatory shutdown cost avoided" },
              { val: "47 days", label: "Emergency remediation timeline" },
              { val: "₹3.8 Cr", label: "Cost of remediation programme" },
            ].map((cr, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 text-center">
                <strong className="text-4xl text-[#F5C97A] block">{cr.val}</strong>
                <span className="text-xs text-white/60 mt-2 block">{cr.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#6B7290] my-12">
          <div className="flex-1 h-px bg-[#DDE3F0]" /> Best Practices <div className="flex-1 h-px bg-[#DDE3F0]" />
        </div>

        <h2 className="font-serif text-4xl font-bold mb-8">Eight Practices That Ensure Document Readiness Before Startup</h2>

        <ol className="space-y-6 mb-20">
          {[
            "Lock the documentation register at project sanction — define what must be complete before FAT, before SAT, before startup.",
            "Make FAT and SAT documentation a contractual deliverable — build it into the equipment supply and testing contracts.",
            "Establish a commissioning document review gate — no startup approval without sign-off from engineering, safety, and operations.",
            "Assign one document owner per system — someone accountable for completeness, accuracy, and accessibility of all records.",
            "Run a pre-startup readiness audit — assign independent auditors to verify all mandatory documents are present and compliant.",
            "Create a handover checklist — a go/no-go document that confirms all records, training, and sign-offs are complete.",
            "Use digital document management — transition from paper to digital systems to improve traceability and accessibility.",
            "Train the operations team on using commissioning records — make records part of daily troubleshooting, maintenance, and compliance routines.",
          ].map((item, i) => (
            <li key={i} className="pl-16 relative bg-[#F4F6FB] border-l-4 border-[#DDE3F0] rounded-r-2xl p-7 text-[15px]">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#1A4FA0] text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</div>
              {item}
            </li>
          ))}
        </ol>

        {/* FAQ */}
        <div className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#6B7290] my-12">
          <div className="flex-1 h-px bg-[#DDE3F0]" /> FAQ <div className="flex-1 h-px bg-[#DDE3F0]" />
        </div>

        <h2 className="font-serif text-4xl font-bold mb-10">Frequently Asked Questions</h2>

        <div className="space-y-8 divide-y divide-[#DDE3F0]">
          {[
            { q: "What documents are required before plant startup?", a: "The minimum documentation set required before plant startup includes: (1) Mechanical Completion Certificates for all systems, (2) FAT and SAT testing packages with sign-offs, (3) Loop calibration and instrument certification records, (4) Safety system acceptance and Hazop closeouts, (5) Operator training and competency certifications, (6) Approved startup and emergency procedures, and (7) As-built drawings and O&M manuals." },
            { q: "Who is responsible for document completion?", a: "Multiple parties share responsibility: the EPC contractor (for FAT and pre-delivery documentation), the site construction/commissioning team (for mechanical completion and SAT), the equipment vendors (for equipment-specific records), and the operations team (for training and procedure validation). Assign a single document owner per system to coordinate." },
            { q: "How can we manage large volumes of commissioning documents?", a: "Digital document management systems reduce paper burden and improve traceability. Implement a system that tracks document status (in progress, submitted, approved, archived), allows version control, enables quick searches, and supports audit trails. Train all teams on the system during pre-startup phases." },
            { q: "What happens if we find documents are missing during pre-startup?", a: "Do not proceed to startup. Identify the gap, assign responsibility for closure, set a firm deadline, and re-verify. Waiving document requirements is a leading cause of post-startup issues. The cost of delaying startup by days is minor compared to the cost of operating without proper records." },
            { q: "Can digital systems replace physical safety certifications?", a: "For regulatory compliance, verify your jurisdiction's requirements. Most modern facilities now accept digital copies of certifications provided they are signed digitally and stored securely. Physical copies may still be required for certain certifications (e.g., equipment nameplates). Consult with your regulatory body early." },
          ].map((faq, i) => (
            <div key={i} className="pt-8">
              <div className="faq-q flex justify-between items-start cursor-pointer font-bold text-lg" onClick={toggleFaq}>
                {faq.q}
                <span className="text-3xl text-[#1A4FA0] transition-transform">+</span>
              </div>
              <div className="faq-a hidden mt-5 text-[#6B7290] leading-relaxed text-[15px]">{faq.a}</div>
            </div>
          ))}
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap gap-3 mt-20">
          {["setup and commissioning documentation", "commissioning checklist", "plant startup readiness", "FAT SAT documentation", "handover package", "mechanical completion", "operator training records", "as-built drawings", "startup procedures", "commissioning report", "regulatory compliance", "document management"].map((kw, i) => (
            <span key={i} className={`px-5 py-2 text-sm rounded-full border ${i < 8 ? 'bg-[#E6F1FB] border-[#85B7EB] text-[#0C447C] font-bold' : 'bg-[#F4F6FB] border-[#DDE3F0] text-[#6B7290]'}`}>{kw}</span>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="bg-[#0C1F3F] text-white rounded-3xl p-16 text-center mt-24">
          <h2 className="font-serif text-4xl text-[#F5C97A] mb-6">Make Document Readiness a Startup Prerequisite, Not an Afterthought</h2>
          <p className="max-w-2xl mx-auto text-white/70">From pre-commissioning checklists to fully verified turnover packages — every document you get right before startup is one less crisis to manage after it.</p>
        </div>
      </div>
    </div>
  );
};

export default PlantStartupDocumentation;
