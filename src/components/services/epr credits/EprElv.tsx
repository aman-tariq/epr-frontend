import StickyContactForm from '@/components/StickyContactForm';
import React, { useState } from 'react';

// Mock/Placeholder Component for the Sticky Contact Form provided in your prompt


export default function EprCreditsElv() {
  // FAQ Interactive State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Live Metric Calculator States
  const [vehicleType, setVehicleType] = useState<string>('car');
  const [quantity, setQuantity] = useState<number>(100);

  const estimatedValueMap: Record<string, number> = {
    twowheeler: 480,
    threewheeler: 920,
    car: 3200,
    lcv: 5800,
    hcv: 12500,
  };

  const currentEstimatedValue = (estimatedValueMap[vehicleType] || 0) * quantity;

  const faqs = [
    { q: "What exactly is an EPR credit for End-of-Life Vehicles?", a: "An EPR ELV credit is a tradeable certificate issued to a Registered Vehicle Scrapping Facility (RVSF) or an authorised dismantler when a vehicle is processed in an environmentally compliant manner. Each certificate represents a specific quantity of material recovered or a specific activity completed — such as full depollution or re-use of a part." },
    { q: "Who is legally required to hold EPR ELV credits?", a: "Under the proposed EPR ELV framework, every vehicle manufacturer, importer, and large fleet operator above a threshold size is required to demonstrate EPR compliance. The obligation is calculated based on the number and weight category of vehicles sold or imported in preceding years." },
    { q: "How are EPR credit rates determined — and do they change?", a: "Credit rates are determined by a combination of commodity market prices (for metal recovery credits), regulatory floor pricing set by CPCB, and supply-demand dynamics on the EPR portal." },
    { q: "Can I sell surplus EPR credits if I generate more than I need?", a: "Absolutely — and this is one of the most significant financial opportunities in the ELV framework. If your collection and scrapping activities generate more credits than your annual obligation requires, the surplus can be sold to other producers who are running short." },
    { q: "How quickly can credits be transferred after I place an order?", a: "Our standard SLA is 48 hours from execution of the transfer agreement to credit appearance in your CPCB EPR account. For urgent compliance deadlines, we offer an express 6-hour transfer service." }
  ];

  return (
    <div className="bg-emerald-50/30 text-emerald-950 font-sans min-h-screen antialiased selection:bg-green-200">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-emerald-50/60 py-16 lg:py-24 border-b mt-20 border-green-100">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-green-200/50 to-emerald-100/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-emerald-200/30 blur-2xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-green-300 rounded-full px-4 py-1.5 text-xs font-bold text-green-700 tracking-wider uppercase shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              EPR End-of-Life Vehicle Compliance
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-serif text-green-900 tracking-tight leading-[1.1] mb-6">
              Every Scrapped Vehicle Is a <span className="text-green-600 italic font-normal">Credit Waiting</span> To Be Claimed.
            </h1>
            <p className="text-lg text-emerald-800/80 max-w-2xl leading-relaxed mb-8">
              India's EPR ELV framework rewards producers who act. We handle the entire credit lifecycle — so you comply, earn, and lead.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#audit-calculator" className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-8 py-4 shadow-lg shadow-green-600/20 transition transform hover:-translate-y-0.5">
                Calculate Credit Value
              </a>
              <a href="#credits" className="bg-white border border-green-300 hover:bg-emerald-50 text-green-700 font-semibold rounded-full px-8 py-4 transition">
                Explore Credit Types
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SPLIT LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-2 space-y-20">
            
            {/* INTRO: WHAT IS EPR */}
            <section className="space-y-6">
              <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Overview</span>
              <h2 className="text-3xl font-bold font-serif text-green-900">The Regulation That Rewards Responsible Automakers</h2>
              <p className="text-zinc-700 leading-relaxed text-base">
                Extended Producer Responsibility for End-of-Life Vehicles (EPR ELV) is a policy framework mandated under India's Draft ELV Policy that makes vehicle manufacturers, importers, and dealers responsible for the safe collection, dismantling, and recycling of vehicles at the end of their useful life.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm bg-white p-4 border-l-4 border-green-500 rounded-r-xl shadow-sm">
                Rather than treating compliance as a burden, savvy companies are discovering that EPR credits can be traded, sold, and transferred — turning environmental obligation into financial opportunity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-emerald-50/50 border border-green-200 rounded-xl p-5 hover:border-green-400 transition shadow-sm"><div className="text-2xl mb-2">♻️</div><h4 className="font-bold text-green-900 text-sm mb-1">Recover Metals</h4><p className="text-xs text-zinc-600">Steel, aluminium & copper credits from certified dismantling</p></div>
                <div className="bg-emerald-50/50 border border-green-200 rounded-xl p-5 hover:border-green-400 transition shadow-sm"><div className="text-2xl mb-2">📜</div><h4 className="font-bold text-green-900 text-sm mb-1">Get Certified</h4><p className="text-xs text-zinc-600">CPCB-recognised certificates issued on every transaction</p></div>
                <div className="bg-emerald-50/50 border border-green-200 rounded-xl p-5 hover:border-green-400 transition shadow-sm"><div className="text-2xl mb-2">💸</div><h4 className="font-bold text-green-900 text-sm mb-1">Trade Credits</h4><p className="text-xs text-zinc-600">Transfer or sell surplus credits on the EPR portal</p></div>
                <div className="bg-emerald-50/50 border border-green-200 rounded-xl p-5 hover:border-green-400 transition shadow-sm"><div className="text-2xl mb-2">🛡️</div><h4 className="font-bold text-green-900 text-sm mb-1">Stay Compliant</h4><p className="text-xs text-zinc-600">Avoid hefty penalties and production shutdowns</p></div>
              </div>
            </section>

            {/* INTERACTIVE AUDIT CALCULATOR */}
            <section id="audit-calculator" className="bg-gradient-to-br from-green-800 to-emerald-950 text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none select-none text-9xl font-bold font-serif">⚡</div>
              <span className="text-green-300 text-xs font-bold uppercase tracking-widest block mb-2">Interactive Tool</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Estimate Your Scrap Credit Potential</h2>
              <p className="text-green-100/80 text-sm mb-6">Select your primary vehicle portfolio stream metrics to see approximate market portfolio return capabilities.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative z-10">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-green-200 mb-2">Vehicle Category Segment</label>
                    <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} className="w-full text-zinc-900 bg-white rounded-lg p-3 text-sm focus:ring-2 focus:ring-green-400 focus:outline-none">
                      <option value="twowheeler">2-Wheeler (Avg ₹480/unit)</option>
                      <option value="threewheeler">3-Wheeler (Avg ₹920/unit)</option>
                      <option value="car">Passenger Car (Avg ₹3,200/unit)</option>
                      <option value="lcv">Light Commercial Vehicle (Avg ₹5,800/unit)</option>
                      <option value="hcv">Heavy Truck / Bus (Avg ₹12,500/unit)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-green-200 mb-2">Annual Scrapped Volume Target</label>
                    <input type="range" min="10" max="5000" step="10" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full accent-green-400 cursor-ew-resize" />
                    <div className="flex justify-between text-xs text-green-300 mt-1 font-mono"><span>10 units</span><span>5,000 units</span></div>
                  </div>
                </div>

                <div className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl p-6 text-center space-y-2 relative overflow-hidden">
                  <span className="text-xs uppercase text-green-300 tracking-wider block">Estimated EPR Value</span>
                  <div className="text-3xl md:text-4xl font-black font-serif text-green-300 transition-all duration-300 scale-100 group-hover:scale-105">
                    ₹{currentEstimatedValue.toLocaleString('en-IN')}
                  </div>
                  <p className="text-xs text-green-100/60 font-mono">Based on selected metrics for {quantity} tracked units</p>
                </div>
              </div>
            </section>

            {/* TYPES OF EPR CREDITS */}
            <section id="credits" className="space-y-6">
              <div>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Ecosystem Streams</span>
                <h2 className="text-3xl font-bold font-serif text-green-900 mt-2">Types of EPR Credits for End-of-Life Vehicles</h2>
                <p className="text-zinc-600 text-sm mt-2">Not all credits are created equal. Understanding each category helps you maximize value.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Ferrous Metal Recovery", color: "bg-green-800", rate: "₹8–₹18 / kg steel", text: "Awarded for the recovery of iron and steel from ELVs through RVSF-certified dismantlers." },
                  { title: "Non-Ferrous Metal Credits", color: "bg-green-600", rate: "₹25–₹55 / kg aluminium", text: "Covers aluminium, copper, and other metals routed safely to authorized recyclers." },
                  { title: "Hazardous Component", color: "bg-emerald-700", rate: "₹120–₹280 / unit (HV battery)", text: "Issued for safe disposal of batteries, airbags, and catalytic converters." },
                  { title: "Depollution Activity", color: "bg-green-700", rate: "₹350–₹500 / vehicle", text: "Granted when an RVSF carries out structural depollution prior to system processing." },
                  { title: "Re-use Part Credits", color: "bg-emerald-600", rate: "₹500–₹3,500 / engine", text: "Parts harvested, tested, and re-sold through fully certified logistics channels." },
                  { title: "Transfer / Traded Credits", color: "bg-emerald-500", rate: "Market-linked pricing", text: "Any structural credits transferred cleanly via primary ecosystem trading." }
                ].map((credit, idx) => (
                  <div key={idx} className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 transform hover:-translate-y-0.5">
                    <div className={`${credit.color} text-white font-semibold text-sm px-4 py-3 flex items-center gap-2`}>
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-mono">{idx + 1}</span>
                      {credit.title}
                    </div>
                    <div className="p-4 space-y-3">
                      <p className="text-zinc-600 text-xs leading-relaxed">{credit.text}</p>
                      <span className="inline-block bg-green-50 text-green-700 font-bold text-xs px-2.5 py-1 rounded-md border border-green-100">{credit.rate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* VISUAL BENCHMARKS & PROGRESS BARS */}
            <section className="space-y-6">
              <div>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Market Metrics</span>
                <h2 className="text-3xl font-bold font-serif text-green-900 mt-2">Market Benchmarks & Rates</h2>
                <p className="text-zinc-600 text-sm mt-1">Average benchmark distribution values expected under core operational metrics.</p>
              </div>

              {/* CLEAN TABLE INTERFACE */}
              <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-green-800 text-white font-medium">
                        <th className="p-3.5">Credit Type</th>
                        <th className="p-3.5">Unit</th>
                        <th className="p-3.5">Avg Rate</th>
                        <th className="p-3.5 text-right">Demand Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 font-medium">
                      <tr className="hover:bg-zinc-50/50 transition"><td className="p-3.5 text-zinc-900">Ferrous Metal</td><td className="p-3.5 text-zinc-500 font-mono">₹ / kg</td><td className="p-3.5 text-zinc-900 font-mono">₹13</td><td className="p-3.5 text-right"><span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">Strong</span></td></tr>
                      <tr className="hover:bg-zinc-50/50 transition"><td className="p-3.5 text-zinc-900">Aluminium</td><td className="p-3.5 text-zinc-500 font-mono">₹ / kg</td><td className="p-3.5 text-zinc-900 font-mono">₹38</td><td className="p-3.5 text-right"><span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">Strong</span></td></tr>
                      <tr className="hover:bg-zinc-50/50 transition"><td className="p-3.5 text-zinc-900">HV Battery (EV)</td><td className="p-3.5 text-zinc-500 font-mono">₹ / unit</td><td className="p-3.5 text-zinc-900 font-mono">₹195</td><td className="p-3.5 text-right"><span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded text-[10px]">Premium</span></td></tr>
                      <tr className="hover:bg-zinc-50/50 transition"><td className="p-3.5 text-zinc-900">Depollution Activity</td><td className="p-3.5 text-zinc-500 font-mono">₹ / vehicle</td><td className="p-3.5 text-zinc-900 font-mono">₹420</td><td className="p-3.5 text-right"><span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px]">Moderate</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* PROGRESS BARS & STAT CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-zinc-200 rounded-xl p-5 space-y-4 shadow-sm">
                  <h4 className="text-sm font-bold text-green-900">Value Distribution Share</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1 font-medium"><span>Ferrous Scrap Metals</span><span className="font-bold">28%</span></div>
                      <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden"><div className="bg-green-700 h-2 rounded-full transition-all duration-1000" style={{width: '28%'}} /></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1 font-medium"><span>Aluminium Recovery</span><span className="font-bold">18%</span></div>
                      <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden"><div className="bg-green-500 h-2 rounded-full transition-all duration-1000" style={{width: '18%'}} /></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1 font-medium"><span>Depollution Tasks</span><span className="font-bold">16%</span></div>
                      <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden"><div className="bg-emerald-600 h-2 rounded-full transition-all duration-1000" style={{width: '16%'}} /></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-zinc-200 rounded-xl p-5 space-y-4 shadow-sm flex flex-col justify-center">
                  <h4 className="text-sm font-bold text-green-900 mb-1">Why Timely Compliance Pays</h4>
                  <div className="space-y-3 text-xs text-zinc-600 font-medium">
                    <div className="flex gap-2 items-start"><span className="text-green-600 font-bold">✓</span><span>Avoid rolling penalty blocks up to ₹10 Lakhs.</span></div>
                    <div className="flex gap-2 items-start"><span className="text-green-600 font-bold">✓</span><span>Protect assembly line configuration pipeline stability.</span></div>
                    <div className="flex gap-2 items-start"><span className="text-green-600 font-bold">✓</span><span>Gain distinct validation trust from ESG institutional funds.</span></div>
                  </div>
                </div>
              </div>
            </section>

            {/* COMPARATIVE ANALYSIS */}
            <section id="benefits" className="space-y-6">
              <div>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Strategic Path</span>
                <h2 className="text-3xl font-bold font-serif text-green-900 mt-2">EPR Execution Frameworks</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-900 text-white p-6 rounded-xl space-y-4 shadow-sm border border-green-800">
                  <h3 className="font-serif font-bold text-lg text-green-300 flex items-center gap-2">✦ Streamlined Network</h3>
                  <ul className="text-xs space-y-2.5 text-green-100/90 font-medium">
                    <li className="flex gap-2"><span>✓</span> Dedicated compliance manager assigned within 24 hours</li>
                    <li className="flex gap-2"><span>✓</span> Real-time CPCB portal integration and ledger tracking</li>
                    <li className="flex gap-2"><span>✓</span> Pre-vetted RVSF structural supply alignment</li>
                    <li className="flex gap-2"><span>✓</span> Protected legal documentation processing</li>
                  </ul>
                </div>
                <div className="bg-white border border-zinc-200 p-6 rounded-xl space-y-4 shadow-sm">
                  <h3 className="font-serif font-bold text-lg text-zinc-400 flex items-center gap-2">✕ Fragmented Execution</h3>
                  <ul className="text-xs space-y-2.5 text-zinc-500 font-medium">
                    <li className="flex gap-2"><span>✕</span> Fragmented, unverified individual provider searches</li>
                    <li className="flex gap-2"><span>✕</span> Exposure risks to uncertified legacy scrap elements</li>
                    <li className="flex gap-2"><span>✕</span> Manual validation processing bottlenecks</li>
                    <li className="flex gap-2"><span>✕</span> Heavy resource burdens shifting inward on processing teams</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CASE STUDY HIGHLIGHT */}
            <section id="case-study" className="bg-gradient-to-br from-green-900 to-green-700 text-white rounded-2xl p-6 md:p-8 space-y-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none select-none text-8xl font-black">🏢</div>
              <span className="bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block">Real World Impact</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Case Study: How a Leading OEM Turned Compliance Into ₹2.4 Cr Annual Value</h2>
              
              <p className="text-sm text-green-100 leading-relaxed">
                An automotive enterprise facing significant credit volume obligations integrated structured logistics workflows. Within a single operating cycle, they wiped out their operational compliance liability while generating high-margin trading inventory.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 font-medium">
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm"><div className="text-xl font-bold text-green-300 font-serif">₹2.4 Cr</div><div className="text-[10px] text-green-100/70 uppercase">Value Generated</div></div>
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm"><div className="text-xl font-bold text-green-300 font-serif">14,200</div><div className="text-[10px] text-green-100/70 uppercase">Ledger Clearances</div></div>
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm"><div className="text-xl font-bold text-green-300 font-serif">Zero</div><div className="text-[10px] text-green-100/70 uppercase">Fines Incurred</div></div>
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm"><div className="text-xl font-bold text-green-300 font-serif">32 Days</div><div className="text-[10px] text-green-100/70 uppercase">Deployment Speed</div></div>
              </div>

              <blockquote className="border-l-2 border-green-300 pl-4 text-xs italic text-green-100/90 pt-2">
                "What we initially managed as an overhead profile structural bottleneck quickly resolved into a clear, strategic risk protection strategy."
                <cite className="block font-semibold not-italic text-[10px] text-green-300 mt-1 uppercase tracking-wider font-sans">— Sustainability Lead, Automotive Manufacturing Group</cite>
              </blockquote>
            </section>

            {/* ACCORDION FAQS */}
            <section id="faq" className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-green-900">Frequently Asked Questions</h2>
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-zinc-200 rounded-xl overflow-hidden transition-all shadow-sm">
                    <button onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} className="w-full flex justify-between items-center text-left p-4 text-sm font-semibold text-green-900 hover:bg-emerald-50/40 transition focus:outline-none">
                      <span>{faq.q}</span>
                      <span className={`text-xs text-green-600 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    <div className={`transition-all duration-300 overflow-hidden ${openFaqIndex === index ? 'max-h-[500px] border-t border-zinc-100 bg-zinc-50/40 p-4' : 'max-h-0'}`}>
                      <p className="text-xs text-zinc-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* DESKTOP STICKY SIDEBAR */}
          <aside className="hidden lg:block sticky top-28 self-start lg:col-span-1">
            <StickyContactForm />
          </aside>

        </div>
      </div>

    </div>
  );
}