'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  Coins, 
  FileCheck2, 
  Timer, 
  Recycle, 
  ShieldCheck, 
  Table, 
  Workflow, 
  TrendingUp, 
  AlertTriangle, 
  FlameKindling,
  ExternalLink
} from 'lucide-react';
import StickyContactForm from '@/components/StickyContactForm';

export default function EprCreditsTyreWasteBlog() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen text-[#163225] bg-gradient-to-b from-[#edf8f1] via-white to-[#f4faf6] selection:bg-emerald-100 antialiased mt-10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Editorial Content Left Column */}
        <div className="lg:col-span-3 space-y-12">
          
          {/* Introductory Abstract block */}
          <div className="bg-white border border-[#dbe9e0] rounded-[32px] p-6 sm:p-8 shadow-xl shadow-emerald-950/5">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#16402b] mb-4">
              EPR Credits for Tyre Waste: Turn Compliance into a Smart Business Advantage
            </h1>
            <p className="text-base sm:text-lg text-[#5d7065] leading-relaxed font-medium">
              A tyre does not end its journey when it leaves the road — it starts a new one in compliance, recycling, and responsibility. This guide explains tyre waste EPR, CPCB compliance, recycling, credits, and why the system matters for businesses in India.
            </p>
          </div>

          {/* Key Topics Hub */}
          <section className="bg-white border border-[#dbe9e0] rounded-[32px] p-6 sm:p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-black text-[#16402b] tracking-tight">Key Topics Clients Ask About</h2>
              <p className="text-sm text-[#5d7065]">These four topics give readers a faster, more practical way to understand tyre EPR, pricing, transfer support, and the value of timely compliance.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#edf8f1]/50 border border-[#dbe9e0]">
                <Layers className="w-5 h-5 text-[#1f7a4a] mb-2.5" />
                <h3 className="font-bold text-base text-[#16402b] mb-1">What are the different types of credits?</h3>
                <p className="text-xs text-[#5d7065] leading-relaxed">Tyre EPR credits are generally linked to verified recycling, recovery, and compliance activity. In simple terms, each credit reflects documented action that supports waste tyre responsibility through authorized channels.</p>
              </div>
              
              <div className="p-5 rounded-2xl bg-[#edf8f1]/50 border border-[#dbe9e0]">
                <Coins className="w-5 h-5 text-[#1f7a4a] mb-2.5" />
                <h3 className="font-bold text-base text-[#16402b] mb-1">What are the average rates?</h3>
                <p className="text-xs text-[#5d7065] leading-relaxed">Rates can vary based on volume, documentation quality, recycler network, and the level of compliance support required. The best value usually comes from a clean process, reliable records, and fewer delays.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#edf8f1]/50 border border-[#dbe9e0]">
                <FileCheck2 className="w-5 h-5 text-[#1f7a4a] mb-2.5" />
                <h3 className="font-bold text-base text-[#16402b] mb-1">What are the benefits of transferring from us?</h3>
                <p className="text-xs text-[#5d7065] leading-relaxed">Transferring through us can simplify coordination, reduce manual follow-up, and keep your records organized. It also helps businesses manage compliance in a smoother and more structured way.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#edf8f1]/50 border border-[#dbe9e0]">
                <Timer className="w-5 h-5 text-[#1f7a4a] mb-2.5" />
                <h3 className="font-bold text-base text-[#16402b] mb-1">What are the benefits of timely compliance?</h3>
                <p className="text-xs text-[#5d7065] leading-relaxed">Timely compliance reduces risk, strengthens trust, and helps teams avoid last-minute pressure. It also makes reporting easier and supports a more professional sustainability story.</p>
              </div>
            </div>
          </section>

          {/* What are Tyre Credits Deep Dive */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#16402b] tracking-tight">What Are EPR Credits for Tyre Waste?</h2>
            <div className="p-6 sm:p-8 rounded-[32px] bg-white border border-[#dbe9e0] shadow-sm space-y-4">
              <p className="text-base text-[#5d7065] leading-relaxed">
                EPR credits are the compliance value created when waste tyres are processed through authorized recycling channels and recorded in the official system. For producers, importers, and recyclers, these credits help make responsibility measurable, trackable, and easier to manage.
              </p>
              <p className="text-sm text-[#5d7065] leading-relaxed">
                In practical terms, they connect waste tyre collection, recycling, and portal-based compliance into one structured process. That is why businesses increasingly search for <strong className="text-[#163225]">EPR registration for tyre waste</strong>, <strong className="text-[#163225]">waste tyre management India</strong>, <strong className="text-[#163225]">CPCB compliance for tyres</strong>, and <strong className="text-[#163225]">tyre waste EPR certificate</strong>.
              </p>
              <div className="p-4 rounded-xl bg-[#edf8f1] border-l-4 border-[#1f7a4a] text-xs font-semibold text-[#16402b]">
                <strong>Search Vectors Tracked:</strong> EPR registration for tyre waste, waste tyre management India, CPCB compliance for tyres, tyre waste EPR certificate, extended producer responsibility for tyres.
              </div>
            </div>
          </section>

          {/* Business Value Matrix & Table */}
          <section className="bg-white border border-[#dbe9e0] rounded-[32px] p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-black text-[#16402b] tracking-tight">Why EPR Credits Matter for Tyre Businesses</h2>
              <p className="text-sm text-[#5d7065] mt-1">Tyre businesses need more than a basic collection process. They need a compliance system that can be explained to auditors, management, and customers.</p>
            </div>

            <div className="border border-[#dbe9e0] rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#edf8f1] text-[#16402b] font-bold text-sm border-b border-[#dbe9e0]">
                      <th className="p-4 font-black">Benefit</th>
                      <th className="p-4 font-black">Business Impact</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm divide-y divide-[#dbe9e0] font-medium text-[#5d7065]">
                    {[
                      { b: 'Regulatory Compliance', i: 'Reduces risk of penalties and reporting gaps' },
                      { b: 'Brand Reputation', i: 'Improves trust with clients and stakeholders' },
                      { b: 'Sustainability Reporting', i: 'Supports ESG and environmental reporting' },
                      { b: 'Digital Tracking', i: 'Makes compliance easier to monitor and prove' },
                      { b: 'Waste Management Efficiency', i: 'Strengthens the recycling and recovery process' },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#edf8f1]/20 transition-colors">
                        <td className="p-4 font-bold text-[#163225]">{row.b}</td>
                        <td className="p-4">{row.i}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Process Workflow Cards */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#16402b] tracking-tight">How the Tyre EPR System Works</h2>
              <p className="text-sm text-[#5d7065]">The process is simple to understand, but it works best when the records stay clean and the partners stay registered.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { n: '1', t: 'Registration', d: 'Producers, retreaders, and recyclers register on the CPCB Waste Tyre EPR portal.' },
                { n: '2', t: 'Collection', d: 'Waste tyres are collected through authorized channels.' },
                { n: '3', t: 'Recycling', d: 'Registered recyclers process tyres into approved outputs.' },
                { n: '4', t: 'Tracking', d: 'The activity is recorded in the portal.' },
                { n: '5', t: 'Compliance', d: 'The recorded work supports EPR obligation fulfillment.' },
              ].map((step, idx) => (
                <div key={idx} className="p-4 bg-white border border-[#dbe9e0] rounded-xl text-center shadow-xs">
                  <div className="w-9 h-9 mx-auto rounded-full bg-[#edf8f1] border border-[#dbe9e0] flex items-center justify-center font-black text-[#1f7a4a] text-sm mb-3">
                    {step.n}
                  </div>
                  <h4 className="font-bold text-xs text-[#16402b] mb-1">{step.t}</h4>
                  <p className="text-[11px] text-[#5d7065] leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Visual Progress CSS Graph alternative */}
          <section className="bg-white border border-[#dbe9e0] rounded-[32px] p-6 sm:p-8 shadow-sm space-y-4">
            <div>
              <h2 className="text-2xl font-black text-[#16402b] tracking-tight">Tyre EPR Growth Graph</h2>
              <p className="text-sm text-[#5d7065]">The official system has expanded quickly, showing stronger adoption of organized tyre recycling compliance in India.</p>
            </div>

            <div className="p-4 border border-[#dbe9e0] rounded-2xl bg-slate-50/50 space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-[#16402b]">
                  <span>Registered Tyre Recyclers (2023–24)</span>
                  <span>27 Recyclers</span>
                </div>
                <div className="w-full h-4 bg-[#e7f2eb] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#1f7a4a] to-[#2e9b60] rounded-full" style={{ width: '7%' }} />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-[#16402b]">
                  <span>Registered Tyre Recyclers (Later Report)</span>
                  <span>405 Recyclers</span>
                </div>
                <div className="w-full h-4 bg-[#e7f2eb] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#1f7a4a] to-[#2e9b60] rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
            <p className="text-xs text-[#5d7065] italic">This snapshot helps clients quickly understand the explosive structural expansion of the formal tyre recycling compliance layout.</p>
          </section>

          {/* Operational Case Study Matrix */}
          <section className="bg-gradient-to-br from-white via-[#f7fcf9] to-white border border-[#dbe9e0] rounded-[32px] p-6 sm:p-8 shadow-sm space-y-4">
            <div>
              <h2 className="text-2xl font-black text-[#16402b] tracking-tight">Case Study: How a Tyre Business Improved Compliance</h2>
              <p className="text-xs text-[#5d7065]">A mid-sized tyre importer was struggling with scattered records, delayed documentation, and uncertainty about its recycling partners. The business changed its process by centralizing records, working only with registered recyclers, and reviewing obligations monthly.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium">
              <div className="p-4 bg-white border border-[#dbe9e0] rounded-xl">
                <strong className="block text-[#1f7a4a] text-sm font-bold mb-1">Old Operational Roadblocks</strong>
                <ul className="list-disc pl-4 space-y-1 text-[#5d7065]">
                  <li>Delayed portal reporting cycles</li>
                  <li>Poor overall data asset visibility</li>
                  <li>Inconsistent recycler verification logs</li>
                </ul>
              </div>
              <div className="p-4 bg-white border border-[#dbe9e0] rounded-xl">
                <strong className="block text-[#1f7a4a] text-sm font-bold mb-1">New Implementation Outcome</strong>
                <ul className="list-disc pl-4 space-y-1 text-[#5d7065]">
                  <li>Significantly faster compliance filing window</li>
                  <li>Centralized internal monitoring dashboard</li>
                  <li>Cleaner audit readiness and validation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dual Columns: Mistakes vs Best Practices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-white border border-[#dbe9e0] rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-3 text-[#b91c1c]">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="font-black text-lg text-[#16402b] m-0">Common Mistakes</h3>
              </div>
              <ul className="space-y-2 text-xs text-[#5d7065] font-medium">
                <li className="flex items-start gap-1.5">❌ <span>Keeping tyre records in separate files instead of one system.</span></li>
                <li className="flex items-start gap-1.5">❌ <span>Working with unverified recycling partners.</span></li>
                <li className="flex items-start gap-1.5">❌ <span>Waiting until the end of the cycle to review obligations.</span></li>
                <li className="flex items-start gap-1.5">❌ <span>Not assigning internal ownership for compliance tracking.</span></li>
              </ul>
            </section>

            <section className="bg-white border border-[#dbe9e0] rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-3 text-[#1f7a4a]">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-black text-lg text-[#16402b] m-0">Best Practices</h3>
              </div>
              <ul className="space-y-2 text-xs text-[#5d7065] font-medium">
                <li className="flex items-start gap-1.5">✅ <span>Keep import, sales, and disposal records in one place.</span></li>
                <li className="flex items-start gap-1.5">✅ <span>Work only with registered recyclers.</span></li>
                <li className="flex items-start gap-1.5">✅ <span>Review portal data every month.</span></li>
                <li className="flex items-start gap-1.5">✅ <span>Build an internal compliance dashboard.</span></li>
              </ul>
            </section>
          </div>

          {/* FAQ Accordion Module */}
          <section className="space-y-4">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-[#16402b] tracking-tight">FAQs on EPR Credits for Tyre Waste</h2>
              <p className="text-sm text-[#5d7065]">Common inquiries covering validation guidelines on the central registry.</p>
            </div>

            <div className="space-y-2.5">
              {[
                { q: 'What is EPR in tyre waste?', a: 'EPR for tyre waste is the responsibility framework that makes producers, importers, retreaders, and recyclers accountable for waste tyre management.' },
                { q: 'Who needs to register for tyre EPR?', a: 'Producers, retreaders, and recyclers of waste tyres are required to register on the CPCB-developed portal.' },
                { q: 'Is tyre EPR part of a separate tyre law?', a: 'No. It was notified through amendments to the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016.' },
                { q: 'Why are EPR credits important?', a: 'They turn recycling activity into a trackable compliance mechanism and help businesses meet obligations with better documentation.' },
                { q: 'Is the tyre EPR ecosystem growing?', a: 'Yes. Official reporting shows a major increase in registered recyclers, which indicates stronger adoption of the formal system.' },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-[#dbe9e0] rounded-xl overflow-hidden shadow-xs">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex justify-between items-center text-left p-4 text-xs sm:text-sm font-bold text-[#16402b] hover:bg-emerald-50/40 focus:outline-none transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#1f7a4a] shrink-0" /> {faq.q}
                    </span>
                    <span className={`text-xs text-[#1f7a4a] transition-transform duration-200 ${openFaqIndex === idx ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <div className={`transition-all duration-200 overflow-hidden ${openFaqIndex === idx ? 'max-h-[200px] border-t border-[#dbe9e0] bg-slate-50/50 p-4' : 'max-h-0'}`}>
                    <p className="text-xs text-[#5d7065] leading-relaxed pl-6">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Strategic Conclusion Block */}
          <section className="p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-[#edf8f1] to-white border border-[#dbe9e0] text-center space-y-3">
            <h3 className="text-xl sm:text-2xl font-black text-[#16402b] m-0">Final Thoughts</h3>
            <p className="text-xs sm:text-sm text-[#5d7065] max-w-2xl mx-auto leading-relaxed">
              The tyre market is changing fast, and compliance is becoming more digital, more traceable, and more important to business reputation. Companies that understand EPR credits for tyre waste, work with registered tyre recyclers, and stay aligned with the CPCB tyre EPR portal will be better positioned for long-term growth.
            </p>
          </section>

          {/* Suggested Internal Links / Related Pillars */}
          {/* <section className="space-y-3">
            <h4 className="text-xs font-bold text-[#16402b] uppercase tracking-wider">Suggested Internal Links</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'E-Waste Management Rules 2022',
                'CPCB EPR Registration Process',
                'Battery Waste Management Compliance',
                'Plastic Waste EPR Authorization',
                'Sustainability & Waste Recycling Solutions'
              ].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-[#dbe9e0] text-[#16402b] text-xs font-semibold shadow-xs cursor-pointer hover:border-emerald-300 transition-colors">
                  {tag} <ExternalLink className="w-3 h-3 text-[#5d7065]" />
                </span>
              ))}
            </div>
          </section> */}

        </div>

        {/* Form Layout Right Column */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <StickyContactForm />
          </div>
        </aside>

      </div>

      {/* Asset Meta Specifications Footer Strip */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-[#dbe9e0] text-xs text-[#5d7065] font-medium flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <span className="block font-bold text-[#16402b]">Featured Image Content Blueprint:</span>
          Smart EPR Compliance Starts with Smart Recycling
        </div>
        <div>
          <span className="block font-bold text-[#16402b]">Subtext Array Context:</span>
          Digital Tyre Waste Management • CPCB Compliance • Sustainable Recycling Solutions
        </div>
      </div> */}
    </div>
  );
}