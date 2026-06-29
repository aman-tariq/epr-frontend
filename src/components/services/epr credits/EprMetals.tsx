'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Chart from 'chart.js/auto';
import { 
  Cylinder, 
  ArrowRight, 
  Table, 
  Star, 
  Recycle, 
  FileCheck2, 
  Leaf, 
  BarChart3, 
  Globe, 
  TrendingUp, 
  Database, 
  Scale, 
  Handshake, 
  Layers, 
  Coins, 
  RefreshCw, 
  Timer, 
  Factory, 
  Briefcase, 
  HelpCircle, 
  ArrowUpRight 
} from 'lucide-react';
import StickyContactForm from '@/components/StickyContactForm';

export default function EprCreditsMetalsBlog() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const growthChartRef = useRef<HTMLCanvasElement | null>(null);
  const comparisonChartRef = useRef<HTMLCanvasElement | null>(null);
  const databaseChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let growthChart: Chart | null = null;
    let comparisonChart: Chart | null = null;
    let databaseChart: Chart | null = null;

    if (growthChartRef.current) {
      growthChart = new Chart(growthChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'EPR Credits Generated',
            data: [42, 49, 57, 64, 72, 79, 88],
            backgroundColor: ['#8b5cf6', '#a78bfa', '#a78bfa', '#a78bfa', '#c4b5fd', '#c4b5fd', '#ede9fe'],
            borderRadius: 12
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, grid: { color: '#ede9fe' } },
            x: { grid: { display: false } }
          }
        }
      });
    }

    if (comparisonChartRef.current) {
      comparisonChart = new Chart(comparisonChartRef.current, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [
            {
              label: 'Metal Recovered (MT)',
              data: [42, 49, 57, 64, 72, 79, 88],
              borderColor: '#8b5cf6',
              backgroundColor: 'transparent',
              tension: 0.35,
              borderWidth: 3,
              pointRadius: 4,
            },
            {
              label: 'EPR Credits Processed',
              data: [38, 45, 53, 60, 68, 75, 84],
              borderColor: '#a78bfa',
              backgroundColor: 'transparent',
              tension: 0.35,
              borderWidth: 3,
              pointRadius: 4,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' } },
          scales: {
            y: { beginAtZero: true, grid: { color: '#ede9fe' } },
            x: { grid: { display: false } }
          }
        }
      });
    }

    if (databaseChartRef.current) {
      databaseChart = new Chart(databaseChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [
            {
              label: 'Collected',
              data: [60, 68, 75, 82, 90, 98, 107],
              backgroundColor: '#ede9fe',
              borderRadius: 10
            },
            {
              label: 'Recovered',
              data: [42, 49, 57, 64, 72, 79, 88],
              backgroundColor: '#8b5cf6',
              borderRadius: 10
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' } },
          scales: {
            y: { beginAtZero: true, grid: { color: '#ede9fe' } },
            x: { grid: { display: false } }
          }
        }
      });
    }

    return () => {
      if (growthChart) growthChart.destroy();
      if (comparisonChart) comparisonChart.destroy();
      if (databaseChart) databaseChart.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen text-[#24163d] mt-20 bg-gradient-to-b from-white via-[#fbf9ff] to-[#f6f0ff] selection:bg-purple-200 antialiased">
      
      {/* Sub-Navigation Links
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-purple-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-indigo-500 shadow-lg shadow-purple-500/20">
              <Cylinder className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-lg tracking-tight">EPR Metals Registry</div>
              <small className="text-[#65567d] font-semibold block -mt-1">Premium purple tracking blog</small>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#65567d] font-bold text-sm">
            <a href="#overview" className="hover:text-purple-600 transition-colors">Overview</a>
            <a href="#process" className="hover:text-purple-600 transition-colors">Process</a>
            <a href="#benefits" className="hover:text-purple-600 transition-colors">Benefits</a>
            <a href="#database" className="hover:text-purple-600 transition-colors">Database</a>
            <a href="#case-study" className="hover:text-purple-600 transition-colors">Case Study</a>
            <a href="#faq" className="hover:text-purple-600 transition-colors">FAQs</a>
          </div>
        </div>
      </nav> */}

      {/* Main Grid Architecture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Editorial Left Content Column */}
        <div className="lg:col-span-3 space-y-16 py-12">
          
          {/* Main Hero Header Visual */}
          <motion.header 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-white to-[#faf7ff] border border-purple-100 rounded-[34px] p-6 sm:p-10 shadow-xl shadow-purple-950/5 relative overflow-hidden"
          >
            <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-purple-400/10 pointer-events-none animate-pulse" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100/60 border border-purple-200/50 text-purple-600 text-xs font-extrabold mb-6 relative z-10">
              <Star className="w-3.5 h-3.5 fill-purple-500 text-purple-500" /> Premium Metal Recycling & Value Protection
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none mb-6 max-w-2xl">
              EPR Credits of EPR Metals
            </h1>
            
            <p className="text-lg text-[#65567d] leading-relaxed max-w-2xl mb-8">
              Metal circular ecosystems are quickly redefining heavy manufacturing operations. EPR Credits turn structural scrap metal reclamation into trackable assets—simplifying validation audits, generating clear corporate data, and optimizing regulatory visibility.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8 relative z-10">
              <a href="#overview" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-white bg-gradient-to-br from-purple-600 to-purple-500 shadow-lg shadow-purple-500/20 hover:scale-[1.02] transition-all">
                <ArrowRight className="w-4 h-4" /> View compliance metrics
              </a>
              <a href="#database" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-[#24163d] bg-white border border-purple-100 hover:scale-[1.02] transition-all">
                <Table className="w-4 h-4" /> Open data ledgers
              </a>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8 relative z-10">
              {['metal recovery EPR', 'scrap processing', 'waste metal logging', 'EPR credit transfer', 'industrial auditing', 'circularity matrix'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white border border-purple-100 text-[#543b78] font-bold text-xs shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-[28px] bg-gradient-to-br from-purple-50/50 to-purple-100/40 border border-purple-100 shadow-sm relative z-10">
              <div className="flex gap-3 items-center">
                <Recycle className="w-5 h-5 text-purple-500 shrink-0" />
                <div><strong className="block text-sm font-bold">Traceable Extraction</strong><span className="text-xs text-[#65567d]">Account for raw metal tonnage</span></div>
              </div>
              <div className="flex gap-3 items-center">
                <FileCheck2 className="w-5 h-5 text-purple-500 shrink-0" />
                <div><strong className="block text-sm font-bold">Pre-Audited Transfers</strong><span className="text-xs text-[#65567d]">Clean records matching local logs</span></div>
              </div>
              <div className="flex gap-3 items-center">
                <Leaf className="w-5 h-5 text-purple-500 shrink-0" />
                <div><strong className="block text-sm font-bold">Circularity Assurance</strong><span className="text-xs text-[#65567d]">Validate corporate scope targets</span></div>
              </div>
            </div>
          </motion.header>

          {/* Section: Overview */}
          <section id="overview" className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">Understanding the Core of Metal Compliance Profiles</h2>
              <p className="text-[#65567d] leading-relaxed">
                Extended Producer Responsibility logs require real, documented tracking across raw product streams. For non-ferrous and ferrous materials, credits serve as tradeable or loggable assets confirming certified processing at matching industrial hubs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="p-8 rounded-[34px] border border-purple-100 shadow-md bg-gradient-to-b from-white to-[#fbf8ff]">
                <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 mb-6" />
                <h3 className="text-xl font-bold mb-3">Why operations monitor industrial metal metrics</h3>
                <p className="text-[#65567d] text-sm leading-relaxed mb-4">
                  Procurement officers monitor workflows focusing on keywords like <strong>metal recovery EPR</strong>, <strong>scrap processing</strong>, <strong>waste metal logging</strong>, <strong>compliance auditing</strong>, and <strong>EPR portal matching</strong> to mitigate heavy fines and secure long-term resource allocations.
                </p>
                <p className="text-[#65567d] text-sm leading-relaxed mb-6">
                  By tracking processing data natively, your operational pipelines reduce complexity and secure consistent matching ledgers before quarterly audits.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['tonnage logs', 'scrap validation', 'portal matching', 'liability protection', 'resource balancing'].map(chip => (
                    <span key={chip} className="px-3 py-1 rounded-full bg-white border border-purple-100 text-xs font-bold text-[#4c356e]">{chip}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-[34px] border border-purple-100 shadow-md bg-white h-72 relative">
                <div className="flex items-center gap-2 mb-3 text-sm font-bold"><BarChart3 className="w-4 h-4 text-purple-500" /> Active Tonnage Generation</div>
                <div className="w-full h-56"><canvas ref={growthChartRef}></canvas></div>
              </div>
            </div>
          </section>

          {/* Section: Process Loop */}
          <section id="process" className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">The Certified Metal Processing Lifecycle</h2>
              <p className="text-[#65567d]">Tracking metal scrap volumes seamlessly from industrial origin down to tradeable balance clearance.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[
                { n: '01', title: 'Batch Logging', desc: 'Raw metallurgical fractions identified and logged.' },
                { n: '02', title: 'Hub Routing', desc: 'Secure transit to approved recycling partners.' },
                { n: '03', title: 'Refining', desc: 'Material separation into high-purity trading forms.' },
                { n: '04', title: 'Ledger Audit', desc: 'Official portal verification receipts issued.' },
                { n: '05', title: 'Balance Update', desc: 'EPR targets successfully updated in real-time.' },
              ].map((step, idx) => (
                <div key={idx} className="p-5 bg-white border border-purple-100 rounded-2xl shadow-sm hover:border-purple-300 transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-purple-600 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/40 mb-4 text-lg font-mono">
                    {step.n}
                  </div>
                  <h4 className="font-bold text-sm mb-1.5">{step.title}</h4>
                  <p className="text-xs text-[#65567d] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="p-6 rounded-[34px] border border-purple-100 shadow-md bg-white h-72 relative">
                <div className="flex items-center gap-2 mb-3 text-sm font-bold"><TrendingUp className="w-4 h-4 text-purple-500" /> Tonnage vs Transferred Volumes</div>
                <div className="w-full h-56"><canvas ref={comparisonChartRef}></canvas></div>
              </div>
              <div className="p-8 rounded-[34px] border border-purple-100 shadow-md bg-white">
                <h3 className="text-xl font-bold mb-3">Audit Transparency Built-in</h3>
                <p className="text-[#65567d] text-sm leading-relaxed mb-6">
                  Automating matching workflows ensures that procurement managers have instant access to necessary regulatory documents, avoiding processing roadblocks and building brand authority with industrial partners.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['real-time updates', 'legal isolation', 'cleared certificates', 'hub monitoring'].map(chip => (
                    <span key={chip} className="px-3 py-1 rounded-full bg-white border border-purple-100 text-xs font-bold text-[#4c356e]">{chip}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section: Benefits Matrix */}
          <section id="benefits" className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">Key Values of Clear Structural Processing</h2>
              <p className="text-[#65567d]">Securing operational stability and tracking metal reclamation metrics clearly.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-gradient-to-b from-white to-[#f9f6ff] border border-purple-100 shadow-sm">
                <Scale className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">Audit Safety</h3>
                <p className="text-sm text-[#65567d] leading-relaxed">Ensure structural ledgers are pre-vetted against regional pollution board queries immediately.</p>
              </div>
              <div className="p-6 rounded-3xl bg-gradient-to-b from-white to-[#f9f6ff] border border-purple-100 shadow-sm">
                <Handshake className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">Corporate Alignment</h3>
                <p className="text-sm text-[#65567d] leading-relaxed">Provide verification evidence directly to institutional board rooms and ESG audit panels.</p>
              </div>
              <div className="p-6 rounded-3xl bg-gradient-to-b from-white to-[#f9f6ff] border border-purple-100 shadow-sm">
                <Globe className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">Supply Continuity</h3>
                <p className="text-sm text-[#65567d] leading-relaxed">Reintroduce processed heavy materials cleanly back into regional production streams.</p>
              </div>
            </div>
          </section>

          {/* Section: Database Layout */}
          <section id="database" className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">Metal Tonnage Database Matrix</h2>
              <p className="text-[#65567d]">A comprehensive data snapshot demonstrating tracking history and processing speeds month-on-month.</p>
            </div>

            <div className="border border-purple-100 rounded-3xl shadow-sm overflow-hidden bg-white mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold text-sm">
                      <th className="p-4">Reporting Window</th>
                      <th className="p-4">Metal Ingest (MT)</th>
                      <th className="p-4">Certified Yield (MT)</th>
                      <th className="p-4">EPR Credits Generated</th>
                      <th className="p-4">Audit Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-purple-50 font-medium text-[#46375c]">
                    {[
                      { m: 'January', c: 60, r: 42, g: 38, s: 'Verified' },
                      { m: 'February', c: 68, r: 49, g: 45, s: 'Verified' },
                      { m: 'March', c: 75, r: 57, g: 53, s: 'Active' },
                      { m: 'April', c: 82, r: 64, g: 60, s: 'Active' },
                      { m: 'May', c: 90, r: 72, g: 68, s: 'Outstanding' },
                      { m: 'June', c: 98, r: 79, g: 75, s: 'Outstanding' },
                      { m: 'July', c: 107, r: 88, g: 84, s: 'Outstanding' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-purple-50/30 transition-colors">
                        <td className="p-4 font-bold">{row.m}</td>
                        <td className="p-4 font-mono">{row.c}</td>
                        <td className="p-4 font-mono">{row.r}</td>
                        <td className="p-4 font-mono">{row.g}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                            row.s === 'Outstanding' ? 'bg-purple-50 text-purple-700 border border-purple-100' : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                          }`}>
                            {row.s}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="p-8 rounded-[34px] border border-purple-100 shadow-md bg-white">
                <h3 className="text-xl font-bold mb-3">Data Consolidation Advantages</h3>
                <p className="text-[#65567d] text-sm leading-relaxed mb-6">
                  Consolidating ingestion records removes manual tracking risks. It builds reliable verification baselines, ensuring your operational teams can easily answer regulatory inquiries.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['error mitigation', 'historical backups', 'tonnage reporting', 'regulatory transparency'].map(chip => (
                    <span key={chip} className="px-3 py-1 rounded-full bg-white border border-purple-100 text-xs font-bold text-[#4c356e]">{chip}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-[34px] border border-purple-100 shadow-md bg-white h-72 relative">
                <div className="flex items-center gap-2 mb-3 text-sm font-bold"><Database className="w-4 h-4 text-purple-500" /> Historical Trend Layout</div>
                <div className="w-full h-56"><canvas ref={databaseChartRef}></canvas></div>
              </div>
            </div>
          </section>

          {/* Section: Sector Solutions */}
          <section className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">Enterprise Infrastructure Deployments</h2>
              <p className="text-[#65567d]">Tailored support across primary manufacturing and logistical workflows.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-purple-100 bg-white shadow-sm hover:border-purple-300 transition-all">
                <Factory className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="font-bold mb-1.5">Automotive Units</h3>
                <p className="text-xs text-[#65567d] leading-relaxed">Streamlined compliance mapping for heavy chassis and casting infrastructure segments.</p>
              </div>
              <div className="p-6 rounded-2xl border border-purple-100 bg-white shadow-sm hover:border-purple-300 transition-all">
                <Briefcase className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="font-bold mb-1.5">Appliance Importers</h3>
                <p className="text-xs text-[#65567d] leading-relaxed">Bulk validation handling for imported white goods component batches and bulk metal casings.</p>
              </div>
              <div className="p-6 rounded-2xl border border-purple-100 bg-white shadow-sm hover:border-purple-300 transition-all">
                <Layers className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="font-bold mb-1.5">Smelting Networks</h3>
                <p className="text-xs text-[#65567d] leading-relaxed">Integrated processing data workflows connecting refining output indicators to central registries.</p>
              </div>
            </div>
          </section>

          {/* Section: Case Study */}
          <section id="case-study" className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">Case Study: Industrial Tonnage Standardization</h2>
              <p className="text-[#65567d]">Real-world operational optimization clearing multi-ton compliance liabilities efficiently.</p>
            </div>

            <div className="bg-gradient-to-br from-white to-[#f4efff] border border-purple-100 rounded-[36px] p-6 sm:p-10 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
                <div>
                  <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 mb-4" />
                  <h3 className="text-2xl font-black mb-3">Transitioning to unified metal stream balance processing</h3>
                  <p className="text-sm text-[#65567d] leading-relaxed mb-4">
                    A major equipment manufacturer was running separate data trackers across three processing facilities. This separation slowed down audit times and led to mismatched entries on the central environmental portals during annual reporting windows.
                  </p>
                  <p className="text-sm text-[#65567d] leading-relaxed">
                    By centralizing data collection into a single validation log, the team automated compliance receipts and matched internal tonnage outputs to tradeable assets smoothly within a few weeks.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-[#faf7ff] border border-purple-100 rounded-3xl shadow-sm text-sm space-y-3 text-[#65567d] font-medium">
                  <h4 className="font-bold text-[#24163d] mb-2">Measurable operational upgrades:</h4>
                  <p>• Data preparation timelines dropped by over half.</p>
                  <p>• Portfolio audit trail alignment errors were eliminated.</p>
                  <p>• Warehouse managers gained full view of regional processing loads.</p>
                  <p>• Corporate ESG reporting metrics became completely pre-vetted.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { val: '54%', lbl: 'Faster Audit Readiness' },
                  { val: '100%', lbl: 'Ledger Alignment' },
                  { val: '3.1x', lbl: 'Tracking Visibility' },
                  { val: 'Zero', lbl: 'Validation Delays' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white border border-purple-100 rounded-2xl p-4 text-center shadow-sm">
                    <strong className="block text-2xl font-black text-purple-600 mb-0.5 font-serif">{stat.val}</strong>
                    <span className="text-xs text-[#65567d] font-bold">{stat.lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: FAQs Accordion */}
          <section id="faq" className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">Frequently Asked Questions</h2>
              <p className="text-[#65567d]">Quick answers covering structural metal compliance requirements and transfer logging.</p>
            </div>
            <div className="space-y-3">
              {[
                { q: 'What categorizations determine specific credit types?', a: 'Credits are primarily determined by material type (ferrous vs non-ferrous), processing purity metrics, and verified recycling methods.' },
                { q: 'How are standard transaction rates calculated?', a: 'Rates are dynamically aligned with baseline market volume demands, commodity indices, and location-specific logistics fees.' },
                { q: 'What does the credit transfer process involve?', a: 'The process involves logging matching validation keys on the central environmental portal, transferring balances safely without creating internal liabilities.' },
                { q: 'Why is early target matching important for operations?', a: 'Early matching protects your brand from late-reporting blocks, maintains your corporate type-approvals, and keeps seasonal assembly operations run smoothly.' },
                { q: 'What defines a pre-vetted metal recycling receipt?', a: 'It is a verified digital document confirming that scrap metal volume has been fully processed by an authorized recycling plant.' }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-purple-100 rounded-2xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex justify-between items-center text-left p-5 text-sm font-bold text-[#24163d] hover:bg-purple-50/40 transition focus:outline-none"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-purple-500 shrink-0" /> {faq.q}
                    </span>
                    <span className={`text-xs text-purple-500 transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${openFaqIndex === idx ? 'max-h-[300px] border-t border-purple-50 bg-purple-50/20 p-5' : 'max-h-0'}`}>
                    <p className="text-xs text-[#65567d] leading-relaxed pl-6">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Action Callout Block */}
          <section>
            <div className="bg-gradient-to-br from-white via-[#f7f3ff] to-white border border-purple-100 rounded-[36px] p-8 sm:p-12 text-center shadow-md">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">Optimize Your Metal Compliance Portfolio Today</h2>
              <p className="text-[#65567d] max-w-2xl mx-auto mb-6">Automating your asset validation simplifies tracking, keeps logs ready for audits, and ensures clear reporting at every step.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="#overview" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-white bg-gradient-to-br from-purple-600 to-purple-500 shadow-md hover:scale-[1.02] transition-all">
                  <ArrowUpRight className="w-4 h-4" /> Review metrics again
                </a>
                <a href="#database" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-[#24163d] bg-white border border-purple-100 hover:scale-[1.02] transition-all">
                  <Table className="w-4 h-4" /> Open logs
                </a>
              </div>
            </div>
          </section>

        </div>


        <aside className="lg:col-span-1 py-12">
          <div className="sticky top-28 space-y-6">
            
            {/* Quick Informational Meta Widget
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/40 border border-purple-100 p-6 rounded-3xl shadow-sm">
              <h3 className="font-black text-base mb-1">Operational Summary</h3>
              <p className="text-xs text-[#65567d] leading-relaxed mb-4">
                Managing metal scrap through a single ledger reduces reporting overhead and provides clear visibility for internal stakeholders.
              </p>
              <div className="grid grid-cols-2 gap-2 text-center font-bold">
                <div className="bg-white p-3 rounded-xl border border-purple-200/40"><span className="block font-black text-lg text-purple-600 leading-none">94%</span><span className="text-[10px] text-[#65567d] block mt-0.5 font-sans uppercase">Precision</span></div>
                <div className="bg-white p-3 rounded-xl border border-purple-200/40"><span className="block font-black text-lg text-purple-600 leading-none">24h</span><span className="text-[10px] text-[#65567d] block mt-0.5 font-sans uppercase">SLA Sync</span></div>
              </div>
            </div> */}

            {/* Imported Prebuilt Shared Component Trigger Entry */}
            <StickyContactForm />
            
          </div>
        </aside>

      </div>

      {/* Embedded Mini Foot-strip Info Banner */}
      <div className="border-t border-purple-100 bg-white/80 py-10 mt-12 text-center text-sm text-[#65567d]">
        <div className="max-w-7xl mx-auto px-4">
          <strong className="text-[#24163d] font-bold block mb-1">EPR Metal Ledger Allocation Strategy</strong>
          <p className="max-w-xl mx-auto text-xs leading-relaxed">Premium purple enterprise layout focused on industrial metallurgical ledger balances, cross-facility data mapping, and streamlined compliance logging.</p>
        </div>
      </div>

    </div>
  );
}