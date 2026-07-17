import StickyContactForm from "@/components/StickyContactForm";
import React from "react";

const EprLithiumCreditsGuide: React.FC = () => {
  // Inject JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "EPR Lithium Credits: Credit Trading and Marketplace Strategy Guide",
    "description": "A premium blog on EPR lithium credits covering trading, marketplace strategy, value creation, workflow, risks, and opportunities.",
    "author": {
      "@type": "Organization",
      "name": "EPR Nexuss"
    }
  };

  return (
    <div className="min-h-screen font-sans text-[#1f2937] antialiased  from-white to-green bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_25%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.10),transparent_22%)]">
      
      {/* Head section for Next.js SEO configuration */}
      

      <div id="top" className="max-w-8xl mt-[80px] mx-auto px-2 pt-7 pb-14">
        

        {/* HERO SECTION */}
        <section className="grid grid-cols-1 gap-4.5 mb-4.5">
          <div className="bg-white border p-10 border-[rgba(174,196,230,0.14)] rounded-[24px] shadow-[0_18px_40px_rgba(0,0,0,0.06)] overflow-hidden p-8.5 relative isolate text-[#111827]">
            <div className="absolute inset-3 rounded-[18px] bg-gradient-to-br from-[#dce9ff] via-[#06b6d4]/5 to-[#34v15e]/5 z-[-1]" />
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0f766e] font-black">
              Market Analysis • Trading Logic • Compliance Value
            </div>
            <h1 className="text-[clamp(2.05rem,4vw,4.3rem)] font-bold leading-[1.02] my-3.5 tracking-tight">
              EPR Lithium Credits: Credit Trading and Marketplace Strategy Guide
            </h1>
            <div className="inline-block my-2 md:my-4.5 px-4 py-3 rounded-ebd bg-gradient-to-br from-[#7c3aed]/18 to-[#06b6d4]/12 border border-[#7c3aed]/22 font-black text-[#111827] rounded-xl">
              Build a smarter marketplace model around compliance, traceability, and verified recovery.
            </div>
            <p className="max-w-[68ch] text-[#4b5563] text-[1.03rem] mb-3.5">
              EPR lithium credits are not just a regulatory requirement. They create a marketplace where collection, recovery, documentation,
              and verification can turn into commercial value. This guide explains how the ecosystem works and where the business opportunity sits.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-3.5">
              {["Credit Generation", "Marketplace Strategy", "Traceability", "Compliance Services", "Circular Economy"].map((chip, idx) => (
                <span key={idx} className="px-3 py-2 bg-white border border-[rgba(174,196,230,0.14)] rounded-full text-[0.92rem] font-extrabold text-[#111827]">
                  {chip}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-7">
              <div className="p-3.5 rounded-[18px] bg-white border border-[rgba(174,196,230,0.14)] text-[#111827]">
                <strong className="block text-base font-bold mb-1">Business lens</strong>
                <span className="text-[#4b5563] text-[0.95rem]">See where value is created in the EPR chain.</span>
              </div>
              <div className="p-3.5 rounded-[18px] bg-white border border-[rgba(174,196,230,0.14)] text-[#111827]">
                <strong className="block text-base font-bold mb-1">Trading lens</strong>
                <span className="text-[#4b5563] text-[0.95rem]">Understand how credits can move through the market.</span>
              </div>
              <div className="p-3.5 rounded-[18px] bg-white border border-[rgba(174,196,230,0.14)] text-[#111827]">
                <strong className="block text-base font-bold mb-1">Growth lens</strong>
                <span className="text-[#4b5563] text-[0.95rem]">Find scalable services around operations and reporting.</span>
              </div>
            </div>
          </div>

          {/* <div className="bg-white border border-[rgba(174,196,230,0.14)] rounded-[24px] shadow-[0_18px_40px_rgba(0,0,0,0.06)] overflow-hidden p-6 flex items-center justify-center min-h-full text-[#111827]">
            <svg aria-label="EPR lithium marketplace illustration" role="img" viewBox="0 0 520 560" className="w-full h-auto block">
              <defs>
                <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed"></stop>
                  <stop offset="100%" stopColor="#06b6d4"></stop>
                </linearGradient>
                <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e"></stop>
                  <stop offset="100%" stopColor="#f59e0b"></stop>
                </linearGradient>
              </defs>
              <rect fill="rgba(15,23,42,0.02)" height="470" rx="34" stroke="rgba(15,23,42,0.06)" width="450" x="35" y="40"></rect>
              <circle cx="260" cy="180" fill="url(#g1)" opacity=".92" r="92"></circle>
              <path d="M260 100 L316 168 L260 236 L204 168 Z" fill="rgba(255,255,255,.2)"></path>
              <rect fill="rgba(255,255,255,.8)" height="112" rx="24" stroke="rgba(15,23,42,0.08)" width="246" x="137" y="300"></rect>
              <text fill="#111827" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="800" textAnchor="middle" x="260" y="346">EPR CREDIT</text>
              <text fill="#4b5563" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" textAnchor="middle" x="260" y="378">Generated • Verified • Traded</text>
              <circle cx="100" cy="140" fill="url(#g2)" r="26"></circle>
              <circle cx="420" cy="140" fill="url(#g2)" r="26"></circle>
              <circle cx="105" cy="420" fill="url(#g2)" r="26"></circle>
              <circle cx="415" cy="420" fill="url(#g2)" r="26"></circle>
              <path d="M126 140 C170 140, 188 160, 210 175" fill="none" stroke="#06b6d4" strokeWidth="4" opacity="0.4"></path>
              <path d="M394 140 C350 140, 332 160, 310 175" fill="none" stroke="#06b6d4" strokeWidth="4" opacity="0.4"></path>
              <path d="M130 420 C176 420, 196 396, 218 382" fill="none" stroke="#06b6d4" strokeWidth="4" opacity="0.4"></path>
              <path d="M390 420 C344 420, 326 396, 304 382" fill="none" stroke="#06b6d4" strokeWidth="4" opacity="0.4"></path>
              <text fill="#111827" fontSize="14" fontWeight="800" textAnchor="middle" x="100" y="186">Producer</text>
              <text fill="#111827" fontSize="14" fontWeight="800" textAnchor="middle" x="420" y="186">Recycler</text>
              <text fill="#111827" fontSize="14" fontWeight="800" textAnchor="middle" x="105" y="466">Collector</text>
              <text fill="#111827" fontSize="14" fontWeight="800" textAnchor="middle" x="415" y="466">Marketplace</text>
            </svg>
          </div> */}
        </section>
        <div className="flex flex-col lg:flex-row gap-2 items-stretch">
          <div className="container">

        {/* MARKETPLACE MODEL */}
        <section className="mt-4.5 scroll-mt-4.5 bg-white border border-[rgba(174,196,230,0.14)] rounded-[24px] shadow-[0_18px_40px_rgba(0,0,0,0.06)] p-6 text-[#111827]">
          <h2 className="text-[clamp(1.45rem,2.4vw,2.2rem)] font-bold leading-[1.12] mb-3 text-[#111827]">Marketplace Model</h2>
          <p className="text-[#4b5563] text-lg max-w-[92ch] mb-3.5">
            A strong EPR marketplace connects three things: verified recovery output, clean documentation, and buyers who need to fulfill obligations. When those pieces align, the credit becomes more than a record — it becomes a tradable compliance asset.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4.5">
            <div className="bg-white p-3 border border-[rgba(174,196,230,0.14)] rounded-[22px] p-5.5 shadow-[0_18px_40px_rgba(0,0,0,0.06)] text-[#111827]">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-ebd grid place-items-center bg-gradient-to-br from-[#7c3aed]/18 to-[#06b6d4]/14 border border-[rgba(174,196,230,0.14)] text-lg rounded-xl">🧩</div>
                <h3 className="text-[1.12rem] font-bold leading-[1.25] m-0 text-[#111827]">Supply side</h3>
              </div>
              <p className="text-[#4b5563] m-0">Credits originate from collection systems, dismantling activity, recovery operations, and evidence-backed output.</p>
            </div>
            <div className="bg-white p-3 border border-[rgba(174,196,230,0.14)] rounded-[22px] p-5.5 shadow-[0_18px_40px_rgba(0,0,0,0.06)] text-[#111827]">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-ebd grid place-items-center bg-gradient-to-br from-[#7c3aed]/18 to-[#06b6d4]/14 border border-[rgba(174,196,230,0.14)] text-lg rounded-xl">🛒</div>
                <h3 className="text-[1.12rem] font-bold leading-[1.25] m-0 text-[#111827]">Demand side</h3>
              </div>
              <p className="text-[#4b5563] m-0">Producers and obligated entities look for timely credit availability, compliance certainty, and reliable documentation.</p>
            </div>
            <div className="bg-white p-3 border border-[rgba(174,196,230,0.14)] rounded-[22px] p-5.5 shadow-[0_18px_40px_rgba(0,0,0,0.06)] text-[#111827]">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-ebd grid place-items-center bg-gradient-to-br from-[#7c3aed]/18 to-[#06b6d4]/14 border border-[rgba(174,196,230,0.14)] text-lg rounded-xl">🔐</div>
                <h3 className="text-[1.12rem] font-bold leading-[1.25] m-0 text-[#111827]">Trust layer</h3>
              </div>
              <p className="text-[#4b5563] m-0">Verification, chain-of-custody, and audit-ready records create market trust and help reduce disputes.</p>
            </div>
          </div>
        </section>

        {/* CREDIT TRADING LIFECYCLE */}
        <section className="mt-4.5 scroll-mt-4.5 bg-white border border-[rgba(174,196,230,0.14)] rounded-[24px] shadow-[0_18px_40px_rgba(0,0,0,0.06)] p-6 text-[#111827]">
          <h2 className="text-[clamp(1.45rem,2.4vw,2.2rem)] font-bold leading-[1.12] mb-3 text-[#111827]">Credit Trading Lifecycle</h2>
          <p className="text-[#4b5563] text-lg max-w-[92ch] mb-3.5">
            The EPR credit trading process is easier to understand when broken into a simple flow. This makes the model useful for business teams, compliance teams, and partners who need a clear operational picture.
          </p>
          <div className="bg-white border border-[rgba(174,196,230,0.14)] rounded-[22px] p-4.5 mt-4.5 text-[#111827]">
            <svg aria-label="Credit trading flow chart" role="img" viewBox="0 0 1240 240" className="w-full h-auto block">
              <defs>
                <linearGradient id="fa" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed"></stop>
                  <stop offset="100%" stopColor="#06b6d4"></stop>
                </linearGradient>
                <linearGradient id="fb" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e"></stop>
                  <stop offset="100%" stopColor="#f59e0b"></stop>
                </linearGradient>
              </defs>
              <rect fill="rgba(15,23,42,0.02)" height="184" rx="28" stroke="rgba(15,23,42,0.06)" width="1200" x="20" y="28"></rect>
              <g fontFamily="Arial, sans-serif" fontSize="20" fontWeight="800" textAnchor="middle">
                <rect fill="url(#fa)" height="88" rx="20" width="150" x="50" y="72"></rect>
                <text fill="#fff" x="125" y="106">Register</text>
                <text fill="#eefbff" fontSize="14" fontWeight="700" x="125" y="132">Obligation mapping</text>
                <path d="M203 116h56" stroke="#06b6d4" strokeLinecap="round" strokeWidth="6" opacity="0.5"></path>
                <polygon fill="#06b6d4" points="259,116 243,106 243,126"></polygon>
                
                <rect fill="url(#fb)" height="88" rx="20" width="150" x="273" y="72"></rect>
                <text fill="#fff" x="348" y="106">Collect</text>
                <text fill="#fff7e6" fontSize="14" fontWeight="700" x="348" y="132">Return channels</text>
                <path d="M426 116h56" stroke="#06b6d4" strokeLinecap="round" strokeWidth="6" opacity="0.5"></path>
                <polygon fill="#06b6d4" points="482,116 466,106 466,126"></polygon>
                
                <rect fill="url(#fa)" height="88" rx="20" width="150" x="496" y="72"></rect>
                <text fill="#fff" x="571" y="106">Verify</text>
                <text fill="#eefbff" fontSize="14" fontWeight="700" x="571" y="132">Proof &amp; traceability</text>
                <path d="M649 116h56" stroke="#06b6d4" strokeLinecap="round" strokeWidth="6" opacity="0.5"></path>
                <polygon fill="#06b6d4" points="705,116 689,106 689,126"></polygon>
                
                <rect fill="url(#fb)" height="88" rx="20" width="150" x="719" y="72"></rect>
                <text fill="#fff" x="794" y="106">Trade</text>
                <text fill="#fff7e6" fontSize="14" fontWeight="700" x="794" y="132">Market transfer</text>
                <path d="M872 116h56" stroke="#06b6d4" strokeLinecap="round" strokeWidth="6" opacity="0.5"></path>
                <polygon fill="#06b6d4" points="928,116 912,106 912,126"></polygon>
                
                <rect fill="url(#fa)" height="88" rx="20" width="150" x="942" y="72"></rect>
                <text fill="#fff" x="1017" y="106">Report</text>
                <text fill="#eefbff" fontSize="14" fontWeight="700" x="1017" y="132">Compliance closure</text>
              </g>
            </svg>
            <div className="text-[0.92rem] text-[#4b5563] mt-2.5">Registration → Collection → Verification → Trading → Reporting</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-3 border border-[rgba(174,196,230,0.14)] rounded-[22px] p-5.5 shadow-[0_18px_40px_rgba(0,0,0,0.06)] text-[#111827]">
              <div className="flex items-center gap-2.5 mb-3 ">
                <div className="w-10 h-10 rounded-ebd grid place-items-center bg-gradient-to-br from-[#7c3aed]/18 to-[#06b6d4]/14 border border-green-900 text-base font-bold rounded-xl">1</div>
                <h3 className="text-[1.12rem] font-bold leading-[1.25] m-0 text-[#111827]">Map obligations</h3>
              </div>
              <p className="text-[#4b5563] m-0">Define who is responsible, what is covered, and what evidence is needed to complete compliance.</p>
            </div>
            <div className="bg-white p-3 border border-[rgba(174,196,230,0.14)] rounded-[22px] p-5.5 shadow-[0_18px_40px_rgba(0,0,0,0.06)] text-[#111827]">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-ebd grid place-items-center bg-gradient-to-br from-[#7c3aed]/18 to-[#06b6d4]/14 border border-green-900 text-base font-bold rounded-xl">2</div>
                <h3 className="text-[1.12rem] font-bold leading-[1.25] m-0 text-[#111827]">Generate credits</h3>
              </div>
              <p className="text-[#4b5563] m-0">Collection and recovery activities must be documented so the output can be verified and counted properly.</p>
            </div>
            <div className="bg-white p-3 border border-[rgba(174,196,230,0.14)] rounded-[22px] p-5.5 shadow-[0_18px_40px_rgba(0,0,0,0.06)] text-[#111827]">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-ebd grid place-items-center bg-gradient-to-br from-[#7c3aed]/18 to-[#06b6d4]/14 border border-green-900 text-base font-bold rounded-xl">3</div>
                <h3 className="text-[1.12rem] font-bold leading-[1.25] m-0 text-[#111827]">Transfer Credits</h3>
              </div>
              <p className="text-[#4b5563] m-0">Credits can then be transferred or matched with demand through a trusted marketplace workflow.</p>
            </div>
          </div>
        </section>

        {/* MARKETPLACE STRATEGY */}
        <section className="mt-4.5 scroll-mt-4.5 bg-white border border-[rgba(174,196,230,0.14)] rounded-[24px] shadow-[0_18px_40px_rgba(0,0,0,0.06)] p-6 text-[#111827]">
          <h2 className="text-[clamp(1.45rem,2.4vw,2.2rem)] font-bold leading-[1.12] mb-3 text-[#111827]">Marketplace Strategy</h2>
          <p className="text-[#4b5563] text-lg max-w-[92ch] mb-3.5">
            Strong marketplace strategy is not only about buying and selling credits. It is about controlling the full stack: sourcing, verification, timing, documentation, and customer trust.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4.5">
            <div className="bg-white p-6 border border-[rgba(174,196,230,0.14)] rounded-[22px] p-5.5 shadow-[0_18px_40px_rgba(0,0,0,0.06)] text-[#111827]">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-ebd grid place-items-center bg-gradient-to-br from-[#7c3aed]/18 to-[#06b6d4]/14 border border-[rgba(174,196,230,0.14)] text-lg rounded-xl">📈</div>
                <h3 className="text-[1.12rem] font-bold leading-[1.25] m-0 text-[#111827]">What drives demand</h3>
              </div>
              <p className="text-[#4b5563] mb-3.5">Compliance deadlines, reporting pressure, and the need for reliable fulfillment create consistent market demand.</p>
              <ul className="list-disc pl-5 text-[#4b5563] space-y-2">
                <li>Regulatory obligation timelines</li>
                <li>Need for audit-ready records</li>
                <li>Preference for verified supply</li>
              </ul>
            </div>
            <div className="bg-white border p-6 border-[rgba(174,196,230,0.14)] rounded-[22px] p-5.5 shadow-[0_18px_40px_rgba(0,0,0,0.06)] text-[#111827]">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-ebd grid place-items-center bg-gradient-to-br from-[#7c3aed]/18 to-[#06b6d4]/14 border border-[rgba(174,196,230,0.14)] text-lg rounded-xl">🏭</div>
                <h3 className="text-[1.12rem] font-bold leading-[1.25] m-0 text-[#111827]">What drives supply</h3>
              </div>
              <p className="text-[#4b5563] mb-3.5">Supply depends on collection efficiency, recycling capacity, and how quickly evidence can be produced.</p>
              <ul className="list-disc pl-5 text-[#4b5563] space-y-2">
                <li>Return collection channels</li>
                <li>Sorting and dismantling quality</li>
                <li>Recovery output documentation</li>
              </ul>
            </div>
          </div>
          <div className="mt-4.5 p-4 px-4.5 rounded-[18px] font-semibold bg-[#f59e0b]/10 border border-[#f59e0b]/22 text-[#374151]">
            Best strategy: build a bundled offering instead of selling one isolated step.
          </div>
        </section>

        {/* BUSINESS OPPORTUNITIES */}
        <section className="mt-4.5 scroll-mt-4.5 bg-white border border-[rgba(174,196,230,0.14)] rounded-[24px] shadow-[0_18px_40px_rgba(0,0,0,0.06)] p-6 text-[#111827]">
          <h2 className="text-[clamp(1.45rem,2.4vw,2.2rem)] font-bold leading-[1.12] mb-3 text-[#111827]">Business Opportunities</h2>
          <p className="text-[#4b5563] text-lg max-w-[92ch] mb-3.5">
            The biggest opportunity lies in bridging the gap between a compliance obligation and a reliable, easy-to-use market solution. Businesses can monetize that gap through services, software, logistics, and advisory models.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 mt-4.5">
            <div className="p-6 rounded-[18px] border border-[rgba(174,196,230,0.14)] bg-white text-[#111827]">
              <h3 className="text-[1.12rem] font-bold leading-[1.25] m-0 text-[#111827]">Service models</h3>
              <ul className="list-disc pl-5 mt-2.5 space-y-2 text-[#4b5563]">
                <li>Managed compliance and reporting</li>
                <li>Credit aggregation and brokerage</li>
                <li>Reverse logistics coordination</li>
                <li>Audit and advisory support</li>
              </ul>
            </div>
            <div className="p-6 rounded-[18px] border border-[rgba(174,196,230,0.14)] bg-white text-[#111827]">
              <h3 className="text-[1.12rem] font-bold leading-[1.25] m-0 text-[#111827]">Technology models</h3>
              <ul className="list-disc pl-5 mt-2.5 space-y-2 text-[#4b5563]">
                <li>Traceability dashboards</li>
                <li>Automation for records and approvals</li>
                <li>Workflow tools for recovery tracking</li>
                <li>Data systems for proof management</li>
              </ul>
            </div>
          </div>
          <div className="mt-4.5 p-4 px-4.5 rounded-[18px] font-semibold bg-[#22c55e]/10 border border-[#22c55e]/22 text-[#374151]">
            Opportunity signal: the market rewards businesses that reduce complexity and increase trust.
          </div>
        </section>

        {/* CORE ADVANTAGES AND RISKS */}
        <section className="mt-4.5 scroll-mt-4.5 bg-white border border-[rgba(174,196,230,0.14)] rounded-[24px] shadow-[0_18px_40px_rgba(0,0,0,0.06)] p-6 text-[#111827]">
          <h2 className="text-[clamp(1.45rem,2.4vw,2.2rem)] font-bold leading-[1.12] mb-3 text-[#111827]">Core Advantages and Risks</h2>
          <p className="text-[#4b5563] text-lg max-w-[92ch] mb-3.5">
            A credit marketplace can scale only when the value chain stays clean. That means strong records, clear ownership, and reliable execution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-2 mt-4.5">
            <div className="bg-white border p-4  border-[rgba(174,196,230,0.14)] rounded-[22px] p-5.5 shadow-[0_18px_40px_rgba(0,0,0,0.06)] text-[#111827]">
              <h3 className="text-[1.12rem] font-bold leading-[1.25] mb-2 text-[#111827]">Advantages</h3>
              <p className="text-[#4b5563] m-0">More trust, more transparency, better fulfillment, and a stronger position in the compliance ecosystem.</p>
            </div>
            <div className="bg-white border p-4 border-[rgba(174,196,230,0.14)] rounded-[22px] p-5.5 shadow-[0_18px_40px_rgba(0,0,0,0.06)] text-[#111827]">
              <h3 className="text-[1.12rem] font-bold leading-[1.25] mb-2 text-[#111827]">Operational risks</h3>
              <p className="text-[#4b5563] m-0">Poor data, chain-of-custody gaps, and delayed reporting can weaken the entire model.</p>
            </div>
            <div className="bg-white border p-4 border-[rgba(174,196,230,0.14)] rounded-[22px] p-5.5 shadow-[0_18px_40px_rgba(0,0,0,0.06)] text-[#111827]">
              <h3 className="text-[1.12rem] font-bold leading-[1.25] mb-2 text-[#111827]">Commercial risks</h3>
              <p className="text-[#4b5563] m-0">Fragmented service delivery can reduce margins and make the offering harder to scale.</p>
            </div>
          </div>
        </section>

        {/* QUICK STRATEGY CHECKLIST */}
        <section className="mt-4.5 scroll-mt-4.5 bg-white border border-[rgba(174,196,230,0.14)] rounded-[24px] shadow-[0_18px_40px_rgba(0,0,0,0.06)] p-6 text-[#111827]">
          <h2 className="text-[clamp(1.45rem,2.4vw,2.2rem)] font-bold leading-[1.12] mb-3 text-[#111827]">Quick Strategy Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-4.5">
            <div className="p-4 bg-white border border-[rgba(174,196,230,0.14)] rounded-[18px] text-[#111827]">
              <div className="w-[34px] h-[34px] rounded-full grid place-items-center bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] text-white font-bold mb-2.5">1</div>
              <strong className="text-black font-semibold">Understand obligations</strong>
              <p className="text-[0.92rem] text-[#4b5563] mt-1">Know the coverage area, timelines, and evidence requirements.</p>
            </div>
            <div className="p-4 bg-white border border-[rgba(174,196,230,0.14)] rounded-[18px] text-[#111827]">
              <div className="w-[34px] h-[34px] rounded-full grid place-items-center bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] text-white font-bold mb-2.5">2</div>
              <strong className="text-black font-semibold">Secure supply</strong>
              <p className="text-[0.92rem] text-[#4b5563] mt-1">Build collection and recovery channels with dependable partners.</p>
            </div>
            <div className="p-4 bg-white border border-[rgba(174,196,230,0.14)] rounded-[18px] text-[#111827]">
              <div className="w-[34px] h-[34px] rounded-full grid place-items-center bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] text-white font-bold mb-2.5">3</div>
              <strong className="text-black font-semibold">Document everything</strong>
              <p className="text-[0.92rem] text-[#4b5563] mt-1">Keep traceable records for every movement and verification step.</p>
            </div>
            <div className="p-4 bg-white border border-[rgba(174,196,230,0.14)] rounded-[18px] text-[#111827]">
              <div className="w-[34px] h-[34px] rounded-full grid place-items-center bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] text-white font-bold mb-2.5">4</div>
              <strong className="text-black font-semibold">Trade with trust</strong>
              <p className="text-[0.92rem] text-[#4b5563] mt-1">Use a transparent marketplace model that supports repeated business.</p>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="mt-4.5 scroll-mt-4.5 bg-white border border-[rgba(174,196,230,0.14)] rounded-[24px] shadow-[0_18px_40px_rgba(0,0,0,0.06)] p-6 text-[#111827]">
          <h2 className="text-[clamp(1.45rem,2.4vw,2.2rem)] font-bold leading-[1.12] mb-3 text-[#111827]">FAQs</h2>
          <div className="grid grid-cols-1 gap-3 mt-4.5">
            <div className="p-4.5 bg-white border border-[rgba(174,196,230,0.14)] rounded-[18px] text-[#111827]">
              <h3 className="text-[1.12rem] font-bold leading-[1.25] mb-2 text-[#111827]">What are EPR lithium credits?</h3>
              <p className="text-[#4b5563] m-0">EPR lithium credits are compliance-based value units backed by verified collection, recovery, and documentation.</p>
            </div>
            <div className="p-4.5 bg-white border border-[rgba(174,196,230,0.14)] rounded-[18px] text-[#111827]">
              <h3 className="text-[1.12rem] font-bold leading-[1.25] mb-2 text-[#111827]">Why is a marketplace needed?</h3>
              <p className="text-[#4b5563] m-0">A marketplace helps connect verified supply with obligated demand in a more organized and transparent way.</p>
            </div>
            <div className="p-4.5 bg-white border border-[rgba(174,196,230,0.14)] rounded-[18px] text-[#111827]">
              <h3 className="text-[1.12rem] font-bold leading-[1.25] mb-2 text-[#111827]">Who benefits most?</h3>
              <p className="text-[#4b5563] m-0">Producers, recyclers, collectors, logistics teams, consultants, and technology providers can all benefit from the ecosystem.</p>
            </div>
            <div className="p-4.5 bg-white border border-[rgba(174,196,230,0.14)] rounded-[18px] text-[#111827]">
              <h3 className="text-[1.12rem] font-bold leading-[1.25] mb-2 text-[#111827]">What makes the model successful?</h3>
              <p className="text-[#4b5563] m-0">Success depends on trust, traceability, timely execution, and reliable reporting.</p>
            </div>
          </div>
        </section>

        {/* FINAL NOTE */}
        <section className="mt-4.5 scroll-mt-4.5 bg-white border border-[rgba(174,196,230,0.14)] rounded-[24px] shadow-[0_18px_40px_rgba(0,0,0,0.06)] p-6 text-[#111827]">
          <h2 className="text-[clamp(1.45rem,2.4vw,2.2rem)] font-bold leading-[1.12] mb-3 text-[#111827]">Final Note</h2>
          <p className="text-[#4b5563] text-lg max-w-[92ch] mb-3.5">
            EPR lithium credits become valuable when the workflow is clear and the marketplace is trusted. The strongest businesses will not only move credits — they will own the process, the data, and the customer relationship behind them.
          </p>
          <div className="mt-3.5">
            <a href="#top" className="inline-block mr-2 mb-2 px-3 py-2 rounded-full bg-white border border-[rgba(174,196,230,0.14)] font-bold decoration-none text-sm transition-colors hover:bg-slate-50">
              Top ↑
            </a>
          </div>
          <div className="mt-4.5 p-6 rounded-[24px] bg-white border border-slate-200/60 shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
            <h2 className="m-0 mb-2 text-[clamp(1.45rem,2.4vw,2.2rem)] font-bold leading-[1.12] text-[#111827]">Turn compliance into a commercial advantage</h2>
            <p className="m-0 text-[#374151]">Build a marketplace system that is simple, traceable, and ready for scale.</p>
          </div>
        </section>
        </div>
          <aside className="hidden lg:block shrink-0 width-[320px]">
            <div className="sticky top-28 px-2">
              <StickyContactForm/>
            </div>
          </aside>
          </div>

      </div>
    </div>
  );
};

export default EprLithiumCreditsGuide;