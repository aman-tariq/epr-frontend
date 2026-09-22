import StickyContactForm from '@/components/StickyContactForm';
import React, { useState } from 'react';

export default function EprGuide(): JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="w-full m-0 p-0 md:mt-[130px] font-sans text-slate-900 bg-gradient-to-b from-[#f7f9fc] via-[#eef3f9] to-white">
         <div className="flex flex-col lg:flex-row gap-2 items-stretch">
            <div>
      {/* HERO SECTION */}
      <section className="w-full m-0 px-0 pt-20 pb-12 mb-6  text-[#e5eefb] overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(24,166,106,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_28%),linear-gradient(180deg,#050b14_0%,#0a1322_100%)]">
        <div className="w-full px-0 mx-0">
          <div className="flex flex-col lg:flex-row items-center gap-8 w-full px-4 md:px-8">
            <div className="w-full lg:w-7/12">
              <h1 className="text-[2.1rem] sm:text-[2.25rem] md:text-[3.5rem] lg:text-[4.7rem] leading-[1.03] tracking-[-0.045em] font-extrabold mb-4">
                Extended Producer Responsibility: the licensing map for modern business
              </h1>
              <p className="text-[#b7c6da] leading-relaxed text-base md:text-[1.05rem] max-w-[58rem] mb-6">
                Extended Producer Responsibility (EPR) is now a practical business compliance system, not just a regulatory phrase. It connects producers, importers, brand owners, processors, and scrapping facilities to the legal life cycle of waste. For businesses handling plastic, battery waste, e-waste, used oil, tyre waste, construction and demolition waste, non-ferrous scrap, RVSF, and ELV, the right registration and certification path decides how smoothly the business can launch, operate, and grow.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="border border-white/12 bg-white/7 text-[#f0f6ff] rounded-full px-[0.95rem] py-[0.68rem] font-semibold text-sm">
                  Producers
                </span>
                <span className="border border-white/12 bg-white/7 text-[#f0f6ff] rounded-full px-[0.95rem] py-[0.68rem] font-semibold text-sm">
                  Importers
                </span>
                <span className="border border-white/12 bg-white/7 text-[#f0f6ff] rounded-full px-[0.95rem] py-[0.68rem] font-semibold text-sm">
                  Brand owners
                </span>
                <span className="border border-white/12 bg-white/7 text-[#f0f6ff] rounded-full px-[0.95rem] py-[0.68rem] font-semibold text-sm">
                  Processors
                </span>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="bg-white/5 border border-white/10 rounded-[1.5rem] p-[1.1rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-[1.2rem] border border-white/14 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.14)] h-full">
                    <div className="text-[1.55rem] font-extrabold leading-tight text-slate-900">
                      Common
                    </div>
                    <div className="text-slate-600 text-[0.94rem] mt-[0.35rem] leading-relaxed">
                      CPCB’s Common EPR Portal brings multiple compliance categories into one filing system.
                    </div>
                  </div>
                  <div className="bg-white rounded-[1.2rem] border border-white/14 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.14)] h-full">
                    <div className="text-[1.55rem] font-extrabold leading-tight text-slate-900">
                      CEPR ID
                    </div>
                    <div className="text-slate-600 text-[0.94rem] mt-[0.35rem] leading-relaxed">
                      Registered users access the portal with a CEPR ID on the EPR platform.
                    </div>
                  </div>
                  <div className="bg-white rounded-[1.2rem] border border-white/14 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.14)] h-full">
                    <div className="text-[1.55rem] font-extrabold leading-tight text-slate-900">
                      7 modules
                    </div>
                    <div className="text-slate-600 text-[0.94rem] mt-[0.35rem] leading-relaxed">
                      Battery, C&D, e-waste, scrap of non-ferrous metals, plastic, tyre, and used oil.
                    </div>
                  </div>
                  <div className="bg-white rounded-[1.2rem] border border-white/14 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.14)] h-full">
                    <div className="text-[1.55rem] font-extrabold leading-tight text-slate-900">
                      Business
                    </div>
                    <div className="text-slate-600 text-[0.94rem] mt-[0.35rem] leading-relaxed">
                      A single workflow for registrations, filings, and supporting documents.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHY EPR MATTERS */}
      <section className="w-full py-[1.1rem] pb-[2.2rem]">
        <div className="w-full px-4 md:px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-900/12 to-transparent my-[1.2rem]" />
          <div className="w-full lg:w-9/12">
            <h2 className="text-[1.38rem] sm:text-[1.65rem] font-extrabold tracking-[-0.03em] mb-[0.35rem]">
              Why EPR matters for modern business operations
            </h2>
            <p className="text-slate-600 leading-relaxed mb-[1.35rem]">
              EPR changes waste handling from a side issue into a business responsibility. It asks a company to plan for collection, channelization, recovery, and proof of compliance. In practical terms, that means the registration, documentation, and reporting system must work together before the business starts scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] h-full p-[1.08rem] sm:p-[1.3rem]">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#18a66a]/12 to-[#2563eb]/10 border border-slate-900/6 text-xl mb-4">
                ♻️
              </div>
              <h3 className="text-[1.06rem] font-extrabold mb-[0.55rem]">Plastic waste</h3>
              <p className="text-slate-600 leading-relaxed text-[0.98rem] mb-0">
                Plastic Waste Management includes PIBO obligations, portal registration, collection planning, and EPR certificate tracking for compliant market access.
              </p>
            </div>

            <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] h-full p-[1.08rem] sm:p-[1.3rem]">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#18a66a]/12 to-[#2563eb]/10 border border-slate-900/6 text-xl mb-4">
                🔋
              </div>
              <h3 className="text-[1.06rem] font-extrabold mb-[0.55rem]">Battery waste</h3>
              <p className="text-slate-600 leading-relaxed text-[0.98rem] mb-0">
                Battery compliance depends on traceability, take-back coordination, and portal-based reporting that keeps the recovery chain audit-ready.
              </p>
            </div>

            <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] h-full p-[1.08rem] sm:p-[1.3rem]">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#18a66a]/12 to-[#2563eb]/10 border border-slate-900/6 text-xl mb-4">
                🛠️
              </div>
              <h3 className="text-[1.06rem] font-extrabold mb-[0.55rem]">ELV and RVSF</h3>
              <p className="text-slate-600 leading-relaxed text-[0.98rem] mb-0">
                End-of-life vehicles and registered scrapping facilities turn dismantling and material recovery into a documented business process.
              </p>
            </div>

            <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] h-full p-[1.08rem] sm:p-[1.3rem]">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#18a66a]/12 to-[#2563eb]/10 border border-slate-900/6 text-xl mb-4">
                🧾
              </div>
              <h3 className="text-[1.06rem] font-extrabold mb-[0.55rem]">Portal compliance</h3>
              <p className="text-slate-600 leading-relaxed text-[0.98rem] mb-0">
                Most delays happen when forms, documents, and category details do not match the portal requirements. Clean filing saves time and money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SOP-BACKED COMPLIANCE */}
      <section className="w-full py-[1.1rem] pb-[2.2rem]">
        <div className="w-full px-4 md:px-8">
          <div className="flex flex-col items-center">
            <div className="w-full lg:w-10/12 text-left mb-6">
              <h2 className="text-[1.38rem] sm:text-[1.65rem] font-extrabold tracking-[-0.03em] mb-2">
                SOP-backed compliance areas for business operations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-10/12">
              <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-[1.08rem] sm:p-[1.3rem] h-full">
                <h3 className="text-[1.06rem] font-extrabold mb-[0.55rem]">Battery Waste Management</h3>
                <p className="text-slate-600 leading-relaxed text-[0.98rem] mb-0">
                  Built around producer responsibility, organized collection, channelization, and verifiable compliance for battery-related business obligations.
                </p>
              </div>

              <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-[1.08rem] sm:p-[1.3rem] h-full">
                <h3 className="text-[1.06rem] font-extrabold mb-[0.55rem]">Construction and Demolition Waste Management</h3>
                <p className="text-slate-600 leading-relaxed text-[0.98rem] mb-0">
                  Focuses on systematic debris segregation, authorized movement, and business practices that keep project execution compliant and efficient.
                </p>
              </div>

              <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-[1.08rem] sm:p-[1.3rem] h-full">
                <h3 className="text-[1.06rem] font-extrabold mb-[0.55rem]">E-Waste Management</h3>
                <p className="text-slate-600 leading-relaxed text-[0.98rem] mb-0">
                  Covers producer registration, collection planning, authorised processing pathways, and well-documented compliance records for electrical and electronic business obligations.
                </p>
              </div>

              <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-[1.08rem] sm:p-[1.3rem] h-full">
                <h3 className="text-[1.06rem] font-extrabold mb-[0.55rem]">Scrap of Non-Ferrous Metals</h3>
                <p className="text-slate-600 leading-relaxed text-[0.98rem] mb-0">
                  Supports the compliant sorting, aggregation, recovery, and handling of non-ferrous scrap streams used across industrial business operations.
                </p>
              </div>

              <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-[1.08rem] sm:p-[1.3rem] h-full">
                <h3 className="text-[1.06rem] font-extrabold mb-[0.55rem]">Plastic Waste Management</h3>
                <p className="text-slate-600 leading-relaxed text-[0.98rem] mb-0">
                  Encompasses PIBO obligations, registration, collection targets, channelization, and evidence-backed compliance support.
                </p>
              </div>

              <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-[1.08rem] sm:p-[1.3rem] h-full">
                <h3 className="text-[1.06rem] font-extrabold mb-[0.55rem]">Tyre Waste Management</h3>
                <p className="text-slate-600 leading-relaxed text-[0.98rem] mb-0">
                  Centers on collection, authorized processing, and proof of recovery, ensuring tyre obligations move through a regulated and traceable business chain.
                </p>
              </div>

              <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-[1.08rem] sm:p-[1.3rem] h-full">
                <h3 className="text-[1.06rem] font-extrabold mb-[0.55rem]">Used Oil Management</h3>
                <p className="text-slate-600 leading-relaxed text-[0.98rem] mb-0">
                  Addresses collection, processing, and documentation for used oil so the business can stay compliant and operationally clean.
                </p>
              </div>

              <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-[1.08rem] sm:p-[1.3rem] h-full">
                <h3 className="text-[1.06rem] font-extrabold mb-[0.55rem]">What these SOPs mean in practice</h3>
                <p className="text-slate-600 leading-relaxed text-[0.98rem] mb-0">
                  They guide the business on what to register, what to document, and how to move material through a legally valid compliance process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROBLEMS VS EPR NEXUSS */}
      <section className="w-full py-[1.1rem] pb-[2.2rem]">
        <div className="w-full px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-[1.08rem] sm:p-[1.3rem] h-full">
              <h2 className="text-[1.38rem] sm:text-[1.65rem] font-extrabold tracking-[-0.03em] mb-2">
                What usually goes wrong when founders enter a regulated EPR business
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Many founders already understand business, but EPR adds a different layer: portal filings, category mapping, document matching, and compliance sequencing. That is where projects slow down.
              </p>
              <ul className="pl-[1.1rem] m-0 list-disc text-slate-600 leading-relaxed text-[0.98rem]">
                <li className="mb-[0.4rem]">They are unsure which approval belongs to which compliance category.</li>
                <li className="mb-[0.4rem]">Documents are filed before the business model is fully mapped.</li>
                <li className="mb-[0.4rem]">Registrations and compliance tasks are handled in the wrong order.</li>
                <li className="mb-[0.4rem]">Repeated corrections waste both time and budget.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-[1.08rem] sm:p-[1.3rem] h-full">
              <h2 className="text-[1.38rem] sm:text-[1.65rem] font-extrabold tracking-[-0.03em] mb-2">
                How EPR Nexuss helps businesses save time and money
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                EPR Nexuss helps the client start with the right roadmap, then aligns registration, compliance, and follow-up work with the project timeline. The goal is simple: fewer mistakes, fewer delays, and clearer execution.
              </p>
              <div className="bg-gradient-to-br from-[#18a66a]/8 to-[#2563eb]/8 border border-slate-900/6 rounded-[1.35rem] p-[1.2rem]">
                <strong className="block mb-2 font-bold text-slate-900">Why that matters:</strong>
                <span className="text-slate-600 leading-relaxed text-[0.98rem]">
                  When the first consultant stops at filing and the next consultant starts from scratch, the business loses time and money. A structured partner reduces rework and keeps the project moving.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DOCUMENTS REQUIRED */}
      <section className="w-full py-[1.1rem] pb-[2.2rem]">
        <div className="w-full px-4 md:px-8">
          <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-[1.08rem] sm:p-[1.3rem]">
            <h2 className="text-[1.38rem] sm:text-[1.65rem] font-extrabold tracking-[-0.03em] mb-2">
              Documents required for EPR registration and portal filing
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              The exact list varies by category, but most EPR applications for modern businesses ask for a core set of business, premises, and compliance documents. Keeping these ready in advance helps reduce delays and repeat queries.
            </p>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left align-middle border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-3 px-4 font-bold text-slate-900">Document</th>
                    <th className="py-3 px-4 font-bold text-slate-900">Why it is needed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 text-[0.98rem]">
                  <tr>
                    <td className="py-3 px-4">Certificate of incorporation, LLP deed, partnership deed, or proprietorship proof</td>
                    <td className="py-3 px-4">Confirms the legal identity of the business.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">PAN and GST registration</td>
                    <td className="py-3 px-4">Establishes tax identity and business traceability.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Authorized signatory details and board resolution / authorization letter</td>
                    <td className="py-3 px-4">Shows who is permitted to file and communicate on behalf of the business.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Registered office or factory address proof</td>
                    <td className="py-3 px-4">Verifies the business location used in the application.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Identity and address proof of the signatory</td>
                    <td className="py-3 px-4">Usually Aadhaar, passport, voter ID, or another accepted ID document.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">IEC certificate</td>
                    <td className="py-3 px-4">Required for import-related business applications.</td>
                    </tr>

                  <tr>
                    <td className="py-3 px-4">Product list, brand details, or category-wise material details</td>
                    <td className="py-3 px-4">Helps map the correct EPR category and compliance route.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Plant layout, machinery details, or process flow note</td>
                    <td className="py-3 px-4">Useful for processors, facilities, and businesses that handle material recovery.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Agreement or tie-up details with authorised processors, vendors, or collection partners</td>
                    <td className="py-3 px-4">Supports proof of channelization and business readiness.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Label, packaging, or technical specifications, where applicable</td>
                    <td className="py-3 px-4">Useful for producer-side filings and category verification.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 mb-0 text-slate-600 leading-relaxed text-[0.98rem]">
              Category-specific annexures may also be requested by the authority, especially where the business handles batteries, plastic packaging, tyres, used oil, e-waste, or vehicles. Preparing a clean file before submission usually saves the most time.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="w-full py-[1.1rem] pb-[2.2rem]">
        <div className="w-full px-4 md:px-8">
          <div className="bg-white border border-slate-900/8 rounded-[1.35rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-[1.08rem] sm:p-[1.3rem]">
            <h2 className="text-[1.38rem] sm:text-[1.65rem] font-extrabold tracking-[-0.03em] mb-2">
              Frequently asked questions
            </h2>
            <p className="text-slate-600 leading-relaxed mb-[1.35rem]">
              A few quick answers to help readers understand EPR, portal filing, and business compliance better.
            </p>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="border border-slate-900/8 rounded-2xl overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => toggleFaq(0)}
                  className={`w-full text-left font-bold p-[1.1rem] flex justify-between items-center transition-colors ${
                    openFaq === 0 ? 'bg-[#18a66a]/9 text-slate-900' : 'bg-white text-slate-900'
                  }`}
                >
                  <span>What is EPR in simple language?</span>
                  <span className="ml-2 font-normal text-lg">{openFaq === 0 ? '−' : '+'}</span>
                </button>
                {openFaq === 0 && (
                  <div className="p-[1.1rem] bg-white text-slate-600 leading-relaxed">
                    EPR means the business stays responsible for its product after sale and, in some cases, after it becomes waste. The company must support collection, recovery, and proof of compliance in the correct legal format.
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="border border-slate-900/8 rounded-2xl overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => toggleFaq(1)}
                  className={`w-full text-left font-bold p-[1.1rem] flex justify-between items-center transition-colors ${
                    openFaq === 1 ? 'bg-[#18a66a]/9 text-slate-900' : 'bg-white text-slate-900'
                  }`}
                >
                  <span>Why do business compliance projects get delayed?</span>
                  <span className="ml-2 font-normal text-lg">{openFaq === 1 ? '−' : '+'}</span>
                </button>
                {openFaq === 1 && (
                  <div className="p-[1.1rem] bg-white text-slate-600 leading-relaxed">
                    Most delays happen when the category is unclear, documents are incomplete, or the registration plan starts too late in the project cycle.
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="border border-slate-900/8 rounded-2xl overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => toggleFaq(2)}
                  className={`w-full text-left font-bold p-[1.1rem] flex justify-between items-center transition-colors ${
                    openFaq === 2 ? 'bg-[#18a66a]/9 text-slate-900' : 'bg-white text-slate-900'
                  }`}
                >
                  <span>How does EPR Nexuss save time and money?</span>
                  <span className="ml-2 font-normal text-lg">{openFaq === 2 ? '−' : '+'}</span>
                </button>
                {openFaq === 2 && (
                  <div className="p-[1.1rem] bg-white text-slate-600 leading-relaxed">
                    By reducing rework, preventing avoidable document corrections, and guiding the business through a single organised compliance process instead of scattered follow-ups.
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="border border-slate-900/8 rounded-2xl overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => toggleFaq(3)}
                  className={`w-full text-left font-bold p-[1.1rem] flex justify-between items-center transition-colors ${
                    openFaq === 3 ? 'bg-[#18a66a]/9 text-slate-900' : 'bg-white text-slate-900'
                  }`}
                >
                  <span>Which business categories are covered in this guide?</span>
                  <span className="ml-2 font-normal text-lg">{openFaq === 3 ? '−' : '+'}</span>
                </button>
                {openFaq === 3 && (
                  <div className="p-[1.1rem] bg-white text-slate-600 leading-relaxed">
                    Battery waste, construction and demolition waste, e-waste, scrap of non-ferrous metals, plastic waste including PIBO obligations, tyre waste, used oil, RVSF, and ELV.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="w-full py-[1.1rem] pb-20">
        <div className="w-full px-4 md:px-8">
          <div className="bg-gradient-to-b from-white to-[#f7fbff] border border-slate-900/8 rounded-[1.4rem] shadow-[0_18px_50px_rgba(15,23,42,0.08)] text-center p-6 md:p-8">
            <h2 className="text-[1.38rem] sm:text-[1.65rem] font-extrabold tracking-[-0.03em] mb-2">
              Need help with business compliance?
            </h2>
            <p className="mb-6 mx-auto max-w-[760px] text-slate-600 leading-relaxed">
              Connect with EPR Nexuss for structured support on licensing, certifications, compliance planning, and regulatory coordination for modern business operations.
            </p>
            <a
              href="http://eprnexuss.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-[1.35rem] py-[0.92rem] font-extrabold bg-gradient-to-br from-[#18a66a] to-[#2563eb] text-white shadow-[0_14px_28px_rgba(37,99,235,0.18)] hover:opacity-95 transition-opacity"
            >
              Please feel free to contact us
            </a>
          </div>
        </div>
      </section>
      </div>
      <aside className="hidden lg:block shrink-0 w-[320px]">
        <div className="sticky top-28 px-2">
    <StickyContactForm/>
        </div>
      </aside>

        </div>
    </main>
  );
}