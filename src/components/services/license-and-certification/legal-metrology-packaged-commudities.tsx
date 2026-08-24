import StickyContactForm from '@/components/StickyContactForm';
import React, { useState } from 'react';

export default function LmpcComplianceGuide(): React.JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full md:mt-[130px] min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#eef2ff] text-[#0f172a] font-sans scroll-smooth m-0 p-0 ">
      {/* Main Container - Edge to edge, zero side padding/margin */}
      <div className="w-full m-0 p-0">
         <div className="flex flex-col lg:flex-row gap-2 items-stretch">
            <div>
        {/* Hero Header */}
        <header className="w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="w-full relative z-10">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#a7f3d0] mb-2.5">
              Compliance Blog
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-3">
              LMPC Compliance Guide : The Complete Guide for Manufacturers & Importers
            </h1>
            <p className="text-white/88 text-base sm:text-lg max-w-4xl mb-3 leading-relaxed">
              A practical guide for manufacturing and recycling businesses in India. Understand the core labeling rules, who needs compliance, common mistakes, key documents, and how EPR Nexuss helps you move faster.
            </p>
            <div className="text-white/72 text-sm mb-5">
              Legal Metrology Packaged Commodities for manufacturing, import, packaging, and recycling businesses
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0f172a] font-bold rounded-full px-5 py-3 shadow-md hover:-translate-y-0.5 transition-transform no-underline"
              >
                Contact Us
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-2 bg-white/8 text-white border border-white/15 font-bold rounded-full px-5 py-3 hover:bg-white/12 hover:-translate-y-0.5 transition-all no-underline"
              >
                Read FAQs
              </a>
            </div>

            {/* Quick Navigation / Table of Contents */}
            <nav className="flex flex-wrap gap-2.5 pt-2" aria-label="Quick navigation">
              <a href="#intro" className="inline-flex items-center text-[#e2e8f0] border border-white/12 bg-white/6 hover:bg-white/12 px-3 py-2 rounded-full text-xs sm:text-sm transition-colors no-underline">
                Introduction
              </a>
              <a href="#what-is-lmpc" className="inline-flex items-center text-[#e2e8f0] border border-white/12 bg-white/6 hover:bg-white/12 px-3 py-2 rounded-full text-xs sm:text-sm transition-colors no-underline">
                What is LMPC?
              </a>
              <a href="#who-needs-it" className="inline-flex items-center text-[#e2e8f0] border border-white/12 bg-white/6 hover:bg-white/12 px-3 py-2 rounded-full text-xs sm:text-sm transition-colors no-underline">
                Who Needs It?
              </a>
              <a href="#labeling" className="inline-flex items-center text-[#e2e8f0] border border-white/12 bg-white/6 hover:bg-white/12 px-3 py-2 rounded-full text-xs sm:text-sm transition-colors no-underline">
                Labeling
              </a>
              <a href="#documents" className="inline-flex items-center text-[#e2e8f0] border border-white/12 bg-white/6 hover:bg-white/12 px-3 py-2 rounded-full text-xs sm:text-sm transition-colors no-underline">
                Documents
              </a>
              <a href="#faq" className="inline-flex items-center text-[#e2e8f0] border border-white/12 bg-white/6 hover:bg-white/12 px-3 py-2 rounded-full text-xs sm:text-sm transition-colors no-underline">
                FAQs
              </a>
            </nav>
          </div>
        </header>

        {/* Content Section Container */}
        <main className="w-full flex flex-col gap-5 py-6 px-4 sm:px-8">
          {/* Section: Introduction */}
          <section className="bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm" id="intro">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-3 leading-snug">
              Introduction
            </h2>
            <p className="text-[#1f2937] text-base leading-relaxed mb-3">
              India’s manufacturing and recycling sectors are growing fast, especially in plastic, tyre, e-waste, battery, paper, metal, and solar recycling. Along with machinery, land, approvals, and production planning, businesses also need to address Legal Metrology Packaged Commodities (LMPC) compliance.
            </p>
            <p className="text-[#1f2937] text-base leading-relaxed m-0">
              If your business manufactures, imports, repacks, or sells packaged goods, proper labeling is not optional. A small error in packaging can lead to notices, delays, penalties, and avoidable rework.
            </p>
          </section>

          {/* Section: What is LMPC? */}
          <section className="bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm" id="what-is-lmpc">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-3 leading-snug">
              What is LMPC?
            </h2>
            <p className="text-[#1f2937] text-base leading-relaxed mb-3">
              LMPC is the legal framework that governs weights, measurements, quantity declarations, and labeling for packaged commodities in India. It is covered under the Legal Metrology Act, 2009 and the Legal Metrology (Packaged Commodities) Rules, 2011.
            </p>
            <p className="text-[#1f2937] text-base leading-relaxed mb-6">
              The purpose is simple: ensure transparency, accurate product declarations, and fair trade for consumers and businesses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-b from-white to-[#f8fafc] border border-[#e5e7eb] rounded-2xl p-5">
                <strong className="block text-[#14532d] text-base sm:text-lg mb-1.5 font-bold">
                  Why it matters
                </strong>
                <p className="text-[#1f2937] text-sm sm:text-base leading-relaxed m-0">
                  It reduces labeling mistakes, improves trust, and helps businesses avoid compliance issues before products enter the market.
                </p>
              </div>
              <div className="bg-gradient-to-b from-white to-[#f8fafc] border border-[#e5e7eb] rounded-2xl p-5">
                <strong className="block text-[#14532d] text-base sm:text-lg mb-1.5 font-bold">
                  Core obligation
                </strong>
                <p className="text-[#1f2937] text-sm sm:text-base leading-relaxed m-0">
                  Every package must show the mandatory declarations required under the applicable legal metrology rules.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Who Needs It? */}
          <section className="bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm" id="who-needs-it">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-3 leading-snug">
              Who Needs LMPC Compliance?
            </h2>
            <p className="text-[#1f2937] text-base leading-relaxed mb-4">
              Many people assume LMPC applies only to importers. In reality, it may apply to a wider set of businesses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="border border-[#e5e7eb] rounded-xl bg-white p-4">
                <strong className="block text-[#0f172a] font-bold mb-1">Manufacturers</strong>
                <p className="text-[#64748b] text-sm m-0">Products packed before sale.</p>
              </div>
              <div className="border border-[#e5e7eb] rounded-xl bg-white p-4">
                <strong className="block text-[#0f172a] font-bold mb-1">Importers</strong>
                <p className="text-[#64748b] text-sm m-0">Packaged goods or machinery brought into India.</p>
              </div>
              <div className="border border-[#e5e7eb] rounded-xl bg-white p-4">
                <strong className="block text-[#0f172a] font-bold mb-1">Packers & Repackers</strong>
                <p className="text-[#64748b] text-sm m-0">Businesses relabeling or repackaging products.</p>
              </div>
              <div className="border border-[#e5e7eb] rounded-xl bg-white p-4">
                <strong className="block text-[#0f172a] font-bold mb-1">Recycling Businesses</strong>
                <p className="text-[#64748b] text-sm m-0">Packaged recycled raw materials and industrial products.</p>
              </div>
              <div className="border border-[#e5e7eb] rounded-xl bg-white p-4">
                <strong className="block text-[#0f172a] font-bold mb-1">E-commerce Sellers</strong>
                <p className="text-[#64748b] text-sm m-0">Packaged commodities sold online.</p>
              </div>
              <div className="border border-[#e5e7eb] rounded-xl bg-white p-4">
                <strong className="block text-[#0f172a] font-bold mb-1">Brand Owners</strong>
                <p className="text-[#64748b] text-sm m-0">Products marketed under their own brand, even if outsourced.</p>
              </div>
            </div>
          </section>

          {/* Section: Labeling Requirements */}
          <section className="bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm" id="labeling">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-3 leading-snug">
              Labeling Requirements
            </h2>
            <p className="text-[#1f2937] text-base leading-relaxed mb-3">
              Most compliance issues happen because labels are incomplete or outdated. Before release, a package should generally carry:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-[#1f2937] text-sm sm:text-base leading-relaxed pl-2">
              <li>Name and address of the manufacturer, importer, or packer.</li>
              <li>Name of the commodity and net quantity.</li>
              <li>Month and year of manufacture, packing, or import.</li>
              <li>Maximum Retail Price (MRP), inclusive of taxes.</li>
              <li>Consumer care details and country of origin, where applicable.</li>
              <li>Other declarations required under the law.</li>
            </ul>
            <p className="text-[#1f2937] text-base leading-relaxed m-0">
              For recycling businesses, this is especially important because industrial buyers expect clear product information before procurement.
            </p>
          </section>

          {/* Section: Why Businesses Overlook It */}
          <section className="bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-3 leading-snug">
              Why Businesses Overlook It
            </h2>
            <p className="text-[#1f2937] text-base leading-relaxed mb-3">
              Many entrepreneurs come from backgrounds such as trading, logistics, construction, chemicals, packaging, or import-export. The recycling industry adds a different layer of environmental, product, and packaging compliance.
            </p>
            <p className="text-[#1f2937] text-base leading-relaxed m-0">
              As a result, LMPC is often missed until products are ready to dispatch. That is usually when redesigns, delays, and extra costs begin.
            </p>
          </section>

          {/* Section: Common Mistakes */}
          <section className="bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-4 leading-snug">
              Common Mistakes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-b from-white to-[#f8fafc] border border-[#e5e7eb] rounded-2xl p-5">
                <strong className="block text-[#14532d] text-base sm:text-lg mb-1 font-bold">
                  Ignoring applicability
                </strong>
                <p className="text-[#1f2937] text-sm sm:text-base leading-relaxed m-0">
                  Not checking whether the product falls under LMPC rules.
                </p>
              </div>
              <div className="bg-gradient-to-b from-white to-[#f8fafc] border border-[#e5e7eb] rounded-2xl p-5">
                <strong className="block text-[#14532d] text-base sm:text-lg mb-1 font-bold">
                  Incorrect label design
                </strong>
                <p className="text-[#1f2937] text-sm sm:text-base leading-relaxed m-0">
                  Missing declarations or wrong measurement units.
                </p>
              </div>
              <div className="bg-gradient-to-b from-white to-[#f8fafc] border border-[#e5e7eb] rounded-2xl p-5">
                <strong className="block text-[#14532d] text-base sm:text-lg mb-1 font-bold">
                  Outdated artwork
                </strong>
                <p className="text-[#1f2937] text-sm sm:text-base leading-relaxed m-0">
                  Using packaging that no longer matches current requirements.
                </p>
              </div>
              <div className="bg-gradient-to-b from-white to-[#f8fafc] border border-[#e5e7eb] rounded-2xl p-5">
                <strong className="block text-[#14532d] text-base sm:text-lg mb-1 font-bold">
                  Late planning
                </strong>
                <p className="text-[#1f2937] text-sm sm:text-base leading-relaxed m-0">
                  Starting compliance only after production has already begun.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Documents Required */}
          <section className="bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm" id="documents">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-3 leading-snug">
              Documents Required
            </h2>
            <p className="text-[#1f2937] text-base leading-relaxed mb-3">
              The exact list depends on the business, but the commonly required records include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#1f2937] text-sm sm:text-base leading-relaxed pl-2 m-0">
              <li>Business registration documents.</li>
              <li>PAN and GST registration.</li>
              <li>Premises address proof.</li>
              <li>Product details and packaging artwork.</li>
              <li>Manufacturing or import information.</li>
              <li>Authorized signatory details and customer care information.</li>
            </ul>
          </section>

          {/* Section: Consequences of Non-Compliance */}
          <section className="bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-3 leading-snug">
              Consequences of Non-Compliance
            </h2>
            <p className="text-[#1f2937] text-base leading-relaxed m-0">
              Incorrect or incomplete LMPC labeling can lead to notices, penalties, product detention in some cases, and delays in distribution. It can also damage credibility with distributors and customers.
            </p>
          </section>

          {/* Section: Why Early Planning Helps */}
          <section className="bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-3 leading-snug">
              Why Early Planning Helps
            </h2>
            <p className="text-[#1f2937] text-base leading-relaxed m-0">
              LMPC should be part of the project plan, not the final step. Early planning reduces artwork revisions, avoids launch delays, and keeps production, packaging, and compliance aligned from the beginning.
            </p>
          </section>

          {/* Section: How EPR Nexuss Helps */}
          <section className="bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-3 leading-snug">
              How EPR Nexuss Helps
            </h2>
            <p className="text-[#1f2937] text-base leading-relaxed mb-3">
              EPR Nexuss supports manufacturing and recycling businesses with a structured compliance roadmap, packaging review, documentation support, licensing coordination, and regulatory guidance tailored to project needs.
            </p>
            <p className="text-[#1f2937] text-base leading-relaxed m-0">
              Instead of handling each approval separately, you get a coordinated approach that saves time, reduces rework, and improves readiness for commercial operations.
            </p>
          </section>

          {/* Section: FAQs */}
          <section className="bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm" id="faq">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-4 leading-snug">
              FAQs
            </h2>

            <div className="space-y-3">
              {[
                {
                  q: "What is LMPC?",
                  a: "LMPC is the legal framework that governs packaging declarations, labeling, and quantity standards for packaged commodities in India."
                },
                {
                  q: "Who needs LMPC compliance?",
                  a: "Manufacturers, importers, packers, repackers, e-commerce sellers, brand owners, and certain recycling businesses may need it, depending on the product and sale format."
                },
                {
                  q: "Does a recycling business require LMPC?",
                  a: "If the business packs or sells commodities covered under the applicable rules, LMPC compliance may be required."
                },
                {
                  q: "What should appear on the label?",
                  a: "Typical declarations include the manufacturer or importer details, product name, net quantity, date information, MRP, customer care details, and other required declarations."
                },
                {
                  q: "How can EPR Nexuss help?",
                  a: "EPR Nexuss provides end-to-end help with compliance planning, documentation, packaging review, and coordination with related approvals."
                },
                {
                  q: "Why choose one compliance partner?",
                  a: "A single partner helps avoid repeated documentation, conflicting advice, and delays across different approvals."
                }
              ].map((faq, idx) => (
                <div key={idx} className="border border-[#e5e7eb] rounded-xl overflow-hidden bg-white">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left font-bold py-3.5 px-4 text-[#111827] text-sm sm:text-base flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="ml-2 font-mono text-lg">{openFaq === idx ? '−' : '+'}</span>
                  </button>
                  {openFaq === idx && (
                    <div className="p-4 text-[#334155] text-sm sm:text-base leading-relaxed border-t border-[#e5e7eb]">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section: CTA Banner */}
          <div className="bg-gradient-to-br from-[#0f766e] to-[#14532d] text-white rounded-2xl p-6 sm:p-8 shadow-lg text-center" id="contact">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2.5">
              Need help with compliance?
            </h2>
            <p className="text-white/90 text-sm sm:text-base mb-6 leading-relaxed max-w-2xl mx-auto">
              Connect with EPR Nexuss for LMPC, licensing, certification, and related regulatory support.
            </p>
            <div>
              <a
                href="http://eprnexuss.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0f172a] font-bold rounded-full px-6 py-3 shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all no-underline text-sm sm:text-base"
              >
                Please Feel Free to Contact Us
              </a>
            </div>
          </div>
        </main>
        </div>
      <aside className="hidden lg:block shrink-0 w-[320px]">
        <div className="sticky top-28 px-2">
    <StickyContactForm/>
        </div>
      </aside>

        </div>
      </div>
    </div>
  );
}