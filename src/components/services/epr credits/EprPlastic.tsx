'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Chart from 'chart.js/auto';
import { 
  Leaf, 
  ArrowRight, 
  Table, 
  Star, 
  Recycle, 
  FileCheck2, 
  ShieldAlert, 
  BarChart3, 
  Globe, 
  TrendingUp, 
  Database, 
  Scale, 
  Handshake, 
  Layers, 
  Coins, 
  Timer, 
  Factory, 
  Briefcase, 
  HelpCircle, 
  ArrowUpRight,
  FolderTree,
  Search,
  CheckCircle2,
  CalendarDays,
  ClipboardList
} from 'lucide-react';
import StickyContactForm from '@/components/StickyContactForm';

export default function EprCreditsPlasticsBlog() {
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
            data: [35, 44, 52, 60, 71, 83, 92],
            backgroundColor: ['#0b7cff', '#1484ff', '#1f8dff', '#2a9dff', '#44a9ff', '#58b5ff', '#6cc1ff'],
            borderRadius: 12
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, grid: { color: '#e8edf4' } },
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
              label: 'Plastic Recovered (MT)',
              data: [35, 44, 52, 60, 71, 83, 92],
              borderColor: '#0b7cff',
              backgroundColor: 'transparent',
              tension: 0.35,
              borderWidth: 3,
              pointRadius: 4,
            },
            {
              label: 'EPR Credits Generated',
              data: [30, 41, 49, 58, 68, 79, 88],
              borderColor: '#2a9dff',
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
            y: { beginAtZero: true, grid: { color: '#e8edf4' } },
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
          label: 'Waste Collected',
          data: [50, 58, 66, 75, 84, 96, 105],
          backgroundColor: '#dcecff',
          borderRadius: 10
        },
        {
          label: 'Waste Recycled',
          data: [35, 44, 52, 60, 71, 83, 92], // Fixed: Numerical data array
          backgroundColor: '#0b7cff',         // Fixed: Assigned to background color
          borderRadius: 10
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' } },
      scales: {
        y: { beginAtZero: true, grid: { color: '#e8edf4' } },
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
    <div className="min-h-screen mt-20 text-[#141414] bg-gradient-to-b from-[#f6f8fc] via-white to-[#f3f7ff] selection:bg-blue-100 antialiased">
      
      {/* Sub-Navigation Links */}
      {/* <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-[#e8edf4] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br from-[#0b7cff] to-[#2a9dff] shadow-lg shadow-blue-500/20">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-lg tracking-tight">EPR Plastic Insights</div>
              <small className="text-[#5c6675] font-semibold block -mt-1">White-theme client-ready blog</small>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#5c6675] font-bold text-sm">
            <a href="#about" className="hover:text-[#0b7cff] transition-colors">About</a>
            <a href="#process" className="hover:text-[#0b7cff] transition-colors">Process</a>
            <a href="#benefits" className="hover:text-[#0b7cff] transition-colors">Benefits</a>
            <a href="#types" className="hover:text-[#0b7cff] transition-colors">Credit Types</a>
            <a href="#rates" className="hover:text-[#0b7cff] transition-colors">Rates</a>
            <a href="#database" className="hover:text-[#0b7cff] transition-colors">Database</a>
            <a href="#case-study" className="hover:text-[#0b7cff] transition-colors">Case Study</a>
            <a href="#faq" className="hover:text-[#0b7cff] transition-colors">FAQs</a>
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
            className="bg-gradient-to-b from-white to-[#f6f9ff] border border-[#e8edf4] rounded-[34px] p-6 sm:p-10 shadow-xl shadow-blue-950/5 relative overflow-hidden"
          >
            <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-blue-500/5 pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-[#0b7cff] text-xs font-extrabold mb-6 relative z-10">
              <Star className="w-3.5 h-3.5 fill-[#0b7cff] text-[#0b7cff]" /> Compliance made simple, credible, and measurable
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none mb-6 max-w-3xl">
              EPR Credits of EPR Plastic
            </h1>
            
            <p className="text-lg text-[#5c6675] leading-relaxed max-w-2xl mb-8">
              In a market where sustainability is becoming a business expectation, EPR Plastic Credits give companies a practical way to prove responsibility, improve recycling outcomes, and strengthen their compliance story.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8 relative z-10">
              <a href="#about" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-white bg-gradient-to-br from-[#0b7cff] to-[#2a9dff] shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-all">
                <ArrowRight className="w-4 h-4" /> Read the full guide
              </a>
              <a href="#case-study" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-[#141414] bg-white border border-[#e8edf4] hover:scale-[1.02] transition-all">
                <Briefcase className="w-4 h-4" /> View case study
              </a>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8 relative z-10">
              {['EPR compliance', 'Plastic waste management', 'EPR registration', 'Recycling credits', 'Sustainable packaging', 'Environmental compliance'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white border border-[#e8edf4] text-[#344054] font-bold text-xs shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-[28px] bg-white border border-[#e8edf4] shadow-sm relative z-10">
              <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-[#f3f7ff]">
                <Recycle className="w-5 h-5 text-[#0b7cff]" />
                <strong className="text-2xl font-black leading-none mt-1">85%</strong>
                <span className="text-xs text-[#5c6675] font-semibold">Better recycling tracking</span>
              </div>
              <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-[#f3f7ff]">
                <FileCheck2 className="w-5 h-5 text-[#0b7cff]" />
                <strong className="text-2xl font-black leading-none mt-1">70%</strong>
                <span className="text-xs text-[#5c6675] font-semibold">Faster reporting cycles</span>
              </div>
              <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-[#f3f7ff]">
                <ShieldAlert className="w-5 h-5 text-[#0b7cff]" />
                <strong className="text-2xl font-black leading-none mt-1">60%</strong>
                <span className="text-xs text-[#5c6675] font-semibold">Less compliance confusion</span>
              </div>
              <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-[#f3f7ff]">
                <BarChart3 className="w-5 h-5 text-[#0b7cff]" />
                <strong className="text-2xl font-black leading-none mt-1">90%</strong>
                <span className="text-xs text-[#5c6675] font-semibold">Stronger visibility</span>
              </div>
            </div>
          </motion.header>

          {/* Section: About */}
          <section id="about" className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">What Are EPR Credits in Plastic Compliance?</h2>
              <p className="text-[#5c6675] leading-relaxed">
                EPR stands for Extended Producer Responsibility. The business that introduces plastic packaging into the market is responsible for helping manage what happens to that material after use. EPR credits are the measurable proof that this obligation has been met.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="p-8 rounded-[34px] border border-[#e8edf4] shadow-md bg-white">
                <h3 className="text-xl font-bold mb-3">Why businesses search for EPR Plastic Credits</h3>
                <p className="text-[#5c6675] text-sm leading-relaxed mb-4">
                  Companies want clear compliance systems that are easy to present to clients, auditors, and regulators. That is why terms like <strong>plastic EPR compliance</strong>, <strong>EPR certificate</strong>, and <strong>producer responsibility</strong> are becoming baseline operational standards.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Verified recycling', 'Traceable records', 'Compliance proof', 'Audit readiness', 'Circular economy'].map(chip => (
                    <span key={chip} className="px-3 py-1 rounded-full bg-[#f6f8fc] border border-[#e8edf4] text-xs font-bold text-[#344054]">{chip}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-[34px] border border-[#e8edf4] shadow-md bg-white h-72 relative">
                <div className="flex items-center gap-2 mb-3 text-sm font-bold"><BarChart3 className="w-4 h-4 text-[#0b7cff]" /> Monthly EPR Credit Growth</div>
                <div className="w-full h-56"><canvas ref={growthChartRef}></canvas></div>
              </div>
            </div>
          </section>

          {/* Core Values Columns */}
          <section className="bg-white border border-[#e8edf4] rounded-[34px] p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5">
                <Scale className="w-8 h-8 text-[#0b7cff] mb-3" />
                <h3 className="font-bold text-lg mb-1.5">Compliance certainty</h3>
                <p className="text-sm text-[#5c6675] leading-relaxed">Companies can show that they are meeting plastic waste responsibility with documented and verifiable actions.</p>
              </div>
              <div className="p-5">
                <Handshake className="w-8 h-8 text-[#0b7cff] mb-3" />
                <h3 className="font-bold text-lg mb-1.5">Stronger trust</h3>
                <p className="text-sm text-[#5c6675] leading-relaxed">Brands that show responsibility in packaging waste management tend to look more credible to buyers and partners.</p>
              </div>
              <div className="p-5">
                <Globe className="w-8 h-8 text-[#0b7cff] mb-3" />
                <h3 className="font-bold text-lg mb-1.5">Real sustainability value</h3>
                <p className="text-sm text-[#5c6675] leading-relaxed">Credits create measurable contribution toward recycling and environmental compliance, not just marketing language.</p>
              </div>
            </div>
          </section>

          {/* Section: Process Loop */}
          <section id="process" className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">How the EPR Credit System Works</h2>
              <p className="text-[#5c6675]">The process becomes easier to understand when broken into functional deployment stages.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[
                { n: '01', title: 'Market Entry', desc: 'Producers or brand owners place plastic packaging into circulation.' },
                { n: '02', title: 'Calculation', desc: 'The business measures plastic footprint obligations linked to volume.' },
                { n: '03', title: 'Processing', desc: 'Authorized collection partners recover plastic via documented channels.' },
                { n: '04', title: 'Verification', desc: 'Records, receipts, and audit trails confirm safe waste handling.' },
                { n: '05', title: 'Credit Issuance', desc: 'Verified recovery transforms natively into strategic credit values.' },
              ].map((step, idx) => (
                <div key={idx} className="p-5 bg-white border border-[#e8edf4] rounded-2xl shadow-sm hover:border-blue-300 transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-[#0b7cff] bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/40 mb-4 text-lg font-mono">
                    {step.n}
                  </div>
                  <h4 className="font-bold text-sm mb-1.5">{step.title}</h4>
                  <p className="text-xs text-[#5c6675] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="p-6 rounded-[34px] border border-[#e8edf4] shadow-md bg-white h-72 relative">
                <div className="flex items-center gap-2 mb-3 text-sm font-bold"><TrendingUp className="w-4 h-4 text-[#0b7cff]" /> Plastic Recovery vs Credit Generation</div>
                <div className="w-full h-56"><canvas ref={comparisonChartRef}></canvas></div>
              </div>
              <div className="p-8 rounded-[34px] border border-[#e8edf4] shadow-md bg-white">
                <h3 className="text-xl font-bold mb-3">What clients understand immediately</h3>
                <p className="text-[#5c6675] text-sm leading-relaxed mb-4">
                  When a company can demonstrate how waste moves from market placement to recovery, the compliance narrative simplifies dramatically during stakeholder presentations.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Traceability', 'Verification', 'Reporting', 'Transparency', 'Responsibility'].map(chip => (
                    <span key={chip} className="px-3 py-1 rounded-full bg-[#f6f8fc] border border-[#e8edf4] text-xs font-bold text-[#344054]">{chip}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section: Benefits Matrix */}
          <section id="benefits" className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">Key Benefits of EPR Credits for Business</h2>
              <p className="text-[#5c6675]">A strong EPR strategy improves internal operational execution alongside compliance verification.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#e8edf4] shadow-sm">
                <FolderTree className="w-6 h-6 text-[#0b7cff] mb-3" />
                <h4 className="font-bold text-sm mb-1">Better record management</h4>
                <p className="text-xs text-[#5c6675] leading-relaxed">One structured database is easier to maintain than scattered spreadsheet assets.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#e8edf4] shadow-sm">
                <Search className="w-6 h-6 text-[#0b7cff] mb-3" />
                <h4 className="font-bold text-sm mb-1">More audit confidence</h4>
                <p className="text-xs text-[#5c6675] leading-relaxed">Audit-ready records reduce stress when environmental evidence paths are required quickly.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#e8edf4] shadow-sm">
                <Leaf className="w-6 h-6 text-[#0b7cff] mb-3" />
                <h4 className="font-bold text-sm mb-1">Sustainability goals</h4>
                <p className="text-xs text-[#5c6675] leading-relaxed">Recycling data and EPR credits help businesses communicate measurable green action plans.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#e8edf4] shadow-sm">
                <Star className="w-6 h-6 text-[#0b7cff] mb-3" />
                <h4 className="font-bold text-sm mb-1">Stronger brand reputation</h4>
                <p className="text-xs text-[#5c6675] leading-relaxed">Customers recognize corporate partners that manage packaging lifecycle streams securely.</p>
              </div>
            </div>
          </section>

          {/* Section: Types of Credits */}
          <section id="types" className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">What Are the Different Types of Credits?</h2>
              <p className="text-[#5c6675]">Credits vary across targeted extraction vectors, processing layouts, and technical separation criteria.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-[#e8edf4] bg-white shadow-sm">
                <Recycle className="w-7 h-7 text-[#0b7cff] mb-3" />
                <h3 className="font-bold text-base mb-1.5">Recycling credits</h3>
                <p className="text-xs text-[#5c6675] leading-relaxed">Generated when plastic waste streams convert back into valid secondary raw materials within documented facilities.</p>
              </div>
              <div className="p-6 rounded-2xl border border-[#e8edf4] bg-white shadow-sm">
                <Factory className="w-7 h-7 text-[#0b7cff] mb-3" />
                <h3 className="font-bold text-base mb-1.5">Recovery credits</h3>
                <p className="text-xs text-[#5c6675] leading-relaxed">Reflects responsible handling routed toward co-processing pipelines or approved structural end-use pathways.</p>
              </div>
              <div className="p-6 rounded-2xl border border-[#e8edf4] bg-white shadow-sm">
                <Layers className="w-7 h-7 text-[#0b7cff] mb-3" />
                <h3 className="font-bold text-base mb-1.5">Category-based credits</h3>
                <p className="text-xs text-[#5c6675] leading-relaxed">Tracked specifically by packaging architecture groups including rigid, flexible, or multi-layered polymers.</p>
              </div>
            </div>
          </section>

          {/* Section: Rates Market Analysis */}
          <section id="rates" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-white to-[#f6f8fc] border border-[#e8edf4] rounded-[34px] p-8">
              <h2 className="text-2xl font-black mb-2">What Are the Average Rates?</h2>
              <p className="text-sm text-[#5c6675] mb-6">EPR credit rates depend on material purity, verification protocols, regional constraints, and procurement volume.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-[#e8edf4]">
                  <h4 className="font-bold mb-2 text-sm text-[#0b7cff]">Pricing Influence Elements</h4>
                  <p className="text-xs text-[#5c6675] leading-relaxed">
                    Stricter tracing metrics and multi-layered configurations introduce additional process steps, adjusting production realities. Consolidated industrial commitments typically receive adjusted volume efficiency conditions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#e8edf4]">
                  <h4 className="font-bold mb-2 text-sm text-[#0b7cff]">How to Evaluate Portfolio Quotes</h4>
                  <p className="text-xs text-[#5c6675] leading-relaxed">
                    A lower rate is risky if underlying audit documentation trails fail verification challenges. Quality assurance focuses on structural audit trail readiness over basic low-cost choices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Database Layout */}
          <section id="database" className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">Compliance Database Snapshot</h2>
              <p className="text-[#5c6675]">Tracking ledger entries mapping baseline ingestion data smoothly across current fiscal intervals.</p>
            </div>

            <div className="border border-[#e8edf4] rounded-3xl shadow-sm overflow-hidden bg-white mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#0b7cff] to-[#2a9dff] text-white font-bold text-sm">
                      <th className="p-4">Month</th>
                      <th className="p-4">Collected (MT)</th>
                      <th className="p-4">Recycled (MT)</th>
                      <th className="p-4">Credits Generated</th>
                      <th className="p-4">Status Profile</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-[#edf2f7] font-medium text-[#3f4a5a]">
                    {[
                      { m: 'January', c: 50, r: 35, g: 35, s: 'Partial' },
                      { m: 'February', c: 58, r: 44, g: 44, s: 'Improving' },
                      { m: 'March', c: 66, r: 52, g: 52, s: 'Strong' },
                      { m: 'April', c: 75, r: 60, g: 60, s: 'Strong' },
                      { m: 'May', c: 84, r: 71, g: 71, s: 'Excellent' },
                      { m: 'June', c: 96, r: 83, g: 83, s: 'Excellent' },
                      { m: 'July', c: 105, r: 92, g: 92, s: 'Excellent' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-blue-50/20 transition-colors">
                        <td className="p-4 font-bold">{row.m}</td>
                        <td className="p-4 font-mono">{row.c}</td>
                        <td className="p-4 font-mono">{row.r}</td>
                        <td className="p-4 font-mono">{row.g}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                            row.s === 'Excellent' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-blue-50 text-blue-700 border border-blue-100'
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
              <div className="p-8 rounded-[34px] border border-[#e8edf4] shadow-md bg-white">
                <h3 className="text-xl font-bold mb-3">Why this table matters</h3>
                <p className="text-[#5c6675] text-sm leading-relaxed mb-6">
                  Structured arrays make multi-facility performance trends simple to isolate and report. Clean matrices remove human tracking errors before submittals go live on oversight portals.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Monthly reporting', 'Audit trail', 'Trend analysis', 'Process clarity'].map(chip => (
                    <span key={chip} className="px-3 py-1 rounded-full bg-[#f6f8fc] border border-[#e8edf4] text-xs font-bold text-[#344054]">{chip}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-[34px] border border-[#e8edf4] shadow-md bg-white h-72 relative">
                <div className="flex items-center gap-2 mb-3 text-sm font-bold"><Database className="w-4 h-4 text-[#0b7cff]" /> Compliance Data Trend</div>
                <div className="w-full h-56"><canvas ref={databaseChartRef}></canvas></div>
              </div>
            </div>
          </section>

          {/* Timely Compliance Grid */}
          <section className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">Proactive Operational Timelines</h2>
              <p className="text-[#5c6675]">Timely processing provides absolute control and eliminates last-minute verification bottlenecks.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#e8edf4]">
                <CheckCircle2 className="w-6 h-6 text-[#0b7cff] mb-2" />
                <h4 className="font-bold text-sm mb-1">Lower risk</h4>
                <p className="text-xs text-[#5c6675] leading-relaxed">Submitting compliance on time reduces correction flags and processing holds.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#e8edf4]">
                <CalendarDays className="w-6 h-6 text-[#0b7cff] mb-2" />
                <h4 className="font-bold text-sm mb-1">Better planning</h4>
                <p className="text-xs text-[#5c6675] leading-relaxed">Early structural action balances internal tracking ledgers cleanly before target windows close.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#e8edf4]">
                <ClipboardList className="w-6 h-6 text-[#0b7cff] mb-2" />
                <h4 className="font-bold text-sm mb-1">Stronger reporting</h4>
                <p className="text-xs text-[#5c6675] leading-relaxed">Regular intervals yield clean, audit-ready data models matching cross-department logs.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#e8edf4]">
                <Briefcase className="w-6 h-6 text-[#0b7cff] mb-2" />
                <h4 className="font-bold text-sm mb-1">Better brand trust</h4>
                <p className="text-xs text-[#5c6675] leading-relaxed">Sustained compliance confirms reliable, professional governance to institutional investors.</p>
              </div>
            </div>
          </section>

          {/* Section: Case Study */}
          <section id="case-study" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-white via-[#fcfdfe] to-[#f5f9ff] border border-[#e8edf4] rounded-[36px] p-6 sm:p-10 shadow-lg">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl sm:text-3xl font-black mb-2">Case Study: Improving Plastic Compliance With EPR Credits</h2>
                <p className="text-xs text-[#5c6675]">Transitioning internal frameworks from fragmented tracking habits into reliable execution layers.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
                <div className="space-y-4 text-sm text-[#5c6675] leading-relaxed">
                  <p>
                    A mid-sized packaging brand was struggling with fragmented operations. Recycler certificates arrived late, data entries were scattered across multiple spreadsheets, and preparing monthly performance files created heavy overhead.
                  </p>
                  <p>
                    By moving to a unified logging tracking sequence—assigning transparent collection paths and standardizing database models—they converted manual tasks into a predictable tracking layout.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-white border border-[#e8edf4] rounded-2xl text-center shadow-sm">
                    <strong className="block text-2xl font-black text-[#0b7cff] font-serif">65%</strong>
                    <span className="text-[11px] text-[#5c6675] font-bold">Faster reporting</span>
                  </div>
                  <div className="p-4 bg-white border border-[#e8edf4] rounded-2xl text-center shadow-sm">
                    <strong className="block text-2xl font-black text-[#0b7cff] font-serif">80%</strong>
                    <span className="text-[11px] text-[#5c6675] font-bold">Data accuracy</span>
                  </div>
                  <div className="p-4 bg-white border border-[#e8edf4] rounded-2xl text-center shadow-sm">
                    <strong className="block text-2xl font-black text-[#0b7cff] font-serif">75%</strong>
                    <span className="text-[11px] text-[#5c6675] font-bold">Higher visibility</span>
                  </div>
                  <div className="p-4 bg-white border border-[#e8edf4] rounded-2xl text-center shadow-sm">
                    <strong className="block text-2xl font-black text-[#0b7cff] font-serif">90%</strong>
                    <span className="text-[11px] text-[#5c6675] font-bold">Stronger trust</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: FAQs Accordion */}
          <section id="faq" className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">Frequently Asked Questions</h2>
              <p className="text-[#5c6675]">Common functional inquiries covering plastic compliance validation metrics.</p>
            </div>
            <div className="space-y-3">
              {[
                { q: 'What are EPR Credits of EPR Plastic?', a: 'EPR Credits are verified digital certificates proving that plastic waste has been responsibly collected and processed to meet your business footprint obligations.' },
                { q: 'Who needs EPR Plastic Credits?', a: 'Producers, importers, and brand owners who place plastic packaging into commercial circulation typically manage these obligations.' },
                { q: 'Why are EPR credits important for audits?', a: 'They establish a clear, verifiable transaction trail, simplifying reporting when regulatory agencies request proof of plastic reclamation.' },
                { q: 'Can EPR credits improve brand value?', a: 'Yes. Verifiable compliance tracks real asset allocation data, transforming abstract sustainability goals into clear proof for buyers and partners.' },
                { q: 'What is the best way to manage EPR reporting?', a: 'Centralizing tracking indices into an organized database ensures smooth updates and clean quarterly submittals.' }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-[#e8edf4] rounded-2xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex justify-between items-center text-left p-5 text-sm font-bold text-[#141414] hover:bg-slate-50 transition focus:outline-none"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#0b7cff] shrink-0" /> {faq.q}
                    </span>
                    <span className={`text-xs text-[#0b7cff] transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${openFaqIndex === idx ? 'max-h-[300px] border-t border-[#edf2f7] bg-slate-50/40 p-5' : 'max-h-0'}`}>
                    <p className="text-xs text-[#5c6675] leading-relaxed pl-6">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Action Callout Block */}
          <section>
            <div className="bg-gradient-to-br from-white via-[#f3f8ff] to-white border border-[#e8edf4] rounded-[36px] p-8 sm:p-12 text-center shadow-md">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">Build a stronger EPR compliance story</h2>
              <p className="text-[#5c6675] max-w-2xl mx-auto mb-6">Tracking your data metrics in a structured way creates a clean operational framework and a more reliable stakeholder experience.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="#about" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-white bg-gradient-to-br from-[#0b7cff] to-[#2a9dff] shadow-md hover:scale-[1.02] transition-all">
                  <ArrowUpRight className="w-4 h-4" /> Explore full blog
                </a>
                <a href="#database" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-[#141414] bg-white border border-[#e8edf4] hover:scale-[1.02] transition-all">
                  <Table className="w-4 h-4" /> Review the database
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* Right Layout Column: Sticky Form Wrapper */}
        <aside className="lg:col-span-1 py-12">
          <div className="sticky top-28 space-y-6">
            
            {/* Quick Informational Meta Widget */}
            {/* <div className="bg-white border border-[#e8edf4] p-6 rounded-3xl shadow-sm">
              <h3 className="font-black text-base mb-1">Operational Metrics</h3>
              <p className="text-xs text-[#5c6675] leading-relaxed mb-4">
                Managing processing balances inside an active database clarifies regulatory positions before reporting schedules open.
              </p>
              <div className="grid grid-cols-2 gap-2 text-center font-bold">
                <div className="bg-[#f6f8fc] p-3 rounded-xl border border-[#e8edf4]"><span className="block font-black text-lg text-[#0b7cff] leading-none">100%</span><span className="text-[10px] text-[#5c6675] block mt-0.5 uppercase tracking-wide">Aligned</span></div>
                <div className="bg-[#f6f8fc] p-3 rounded-xl border border-[#e8edf4]"><span className="block font-black text-lg text-[#0b7cff] leading-none">Clean</span><span className="text-[10px] text-[#5c6675] block mt-0.5 uppercase tracking-wide">Audit Trail</span></div>
              </div>
            </div> */}

            {/* Imported Prebuilt Shared Component Trigger Entry */}
            <StickyContactForm />
            
          </div>
        </aside>

      </div>

      {/* Embedded Mini Foot-strip Info Banner */}
      <div className="border-t border-[#e8edf4] bg-white/80 py-10 mt-12 text-center text-sm text-[#5c6675]">
        <div className="max-w-7xl mx-auto px-4">
          <strong className="text-[#141414] font-bold block mb-1">EPR Plastic Compliance & Sustainable Waste Management</strong>
          <p className="max-w-xl mx-auto text-xs leading-relaxed">Premium white-theme content designed to explain EPR credits, plastic recycling, compliance tracking, and sustainability strategy in a client-ready format.</p>
        </div>
      </div>

    </div>
  );
}