import StickyContactForm from '@/components/StickyContactForm';
import React, { useState } from 'react';

export default function DgftLandingPage(): React.JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full md:mt-[130px] min-h-screen bg-gradient-to-b from-[#f6f8fc] via-[#eef3f9] to-[#ffffff] text-[#0f172a] font-['Inter',sans-serif] scroll-smooth m-0 p-0">
      
      <main className="w-full m-0 p-0">
         <div className="flex flex-col lg:flex-row gap-2 items-stretch">
            <div>


        {/* Hero Section */}
        <section className="w-full py-12 sm:py-20 px-4 sm:px-8 bg-[radial-gradient(circle_at_top_left,rgba(89,211,155,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(106,167,255,0.16),transparent_30%),linear-gradient(180deg,#07111f_0%,#09101b_55%,#0b1323_100%)] text-[#e9f1ff] rounded-none">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-7/12">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="border border-white/8 bg-white text-[#0f172a] font-semibold text-xs sm:text-sm py-2 px-4 rounded-full">
                    Strategic DGFT Solutions
                  </span>
                  <span className="border border-white/8 bg-white text-[#0f172a] font-semibold text-xs sm:text-sm py-2 px-4 rounded-full">
                    Seamless Trade Compliance
                  </span>
                  <span className="border border-white/8 bg-white text-[#0f172a] font-semibold text-xs sm:text-sm py-2 px-4 rounded-full">
                    Humanized, Practical Guidance
                  </span>
                </div>
                <h1 className="font-extrabold tracking-tight leading-[1.05] text-3xl sm:text-5xl lg:text-6xl mb-4">
                  DGFT Solutions for Seamless Import-Export Compliance in Global Trade
                </h1>
                <p className="text-[#a9bbd4] text-base sm:text-lg leading-relaxed max-w-5xl mb-6">
                  Global trade moves faster when compliance is handled with clarity. A strategic DGFT approach helps businesses secure the right registrations, manage documentation, reduce delays, and stay aligned with India’s foreign trade framework. For companies entering recycling from another industry, the right guidance matters even more because the regulatory path is wider, stricter, and more document-heavy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-white/8 bg-white text-[#0f172a] font-semibold text-xs sm:text-sm py-2 px-4 rounded-full">
                    Export compliance
                  </span>
                  <span className="border border-white/8 bg-white text-[#0f172a] font-semibold text-xs sm:text-sm py-2 px-4 rounded-full">
                    Import documentation
                  </span>
                  <span className="border border-white/8 bg-white text-[#0f172a] font-semibold text-xs sm:text-sm py-2 px-4 rounded-full">
                    Recycling business support
                  </span>
                  <span className="border border-white/8 bg-white text-[#0f172a] font-semibold text-xs sm:text-sm py-2 px-4 rounded-full">
                    EPR Nexus consulting
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-5/12">
                <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.4rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-6 text-[#0f172a]">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-[1.25rem] bg-white border border-[#0f172a]/[0.08] h-full">
                      <div className="text-[#07111f] text-xl sm:text-2xl font-extrabold leading-tight">
                        US$ 34.89T
                      </div>
                      <div className="text-[#475569] mt-1 text-xs sm:text-sm">
                        World trade in goods and commercial services in 2025
                      </div>
                    </div>
                    <div className="p-4 rounded-[1.25rem] bg-white border border-[#0f172a]/[0.08] h-full">
                      <div className="text-[#07111f] text-xl sm:text-2xl font-extrabold leading-tight">
                        27.5%
                      </div>
                      <div className="text-[#475569] mt-1 text-xs sm:text-sm">
                        Share of services in global trade, highest since 2005
                      </div>
                    </div>
                    <div className="p-4 rounded-[1.25rem] bg-white border border-[#0f172a]/[0.08] h-full">
                      <div className="text-[#07111f] text-xl sm:text-2xl font-extrabold leading-tight">
                        US$ 437.70B
                      </div>
                      <div className="text-[#475569] mt-1 text-xs sm:text-sm">
                        India’s merchandise exports in 2024–25
                      </div>
                    </div>
                    <div className="p-4 rounded-[1.25rem] bg-white border border-[#0f172a]/[0.08] h-full">
                      <div className="text-[#07111f] text-xl sm:text-2xl font-extrabold leading-tight">
                        24
                      </div>
                      <div className="text-[#475569] mt-1 text-xs sm:text-sm">
                        DGFT regional offices supporting trade facilitation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Why DGFT matters */}
        <section className="w-full pt-4 pb-8 px-4 sm:px-8">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/18 to-transparent my-5" />
          <div className="mb-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1.5 text-[#0f172a]">
              Why DGFT matters in real business operations
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm sm:text-base mb-5">
              The Directorate General of Foreign Trade (DGFT) is central to India’s export-import ecosystem. Its online systems and policy framework help businesses obtain the Importer-Exporter Code (IEC), understand item-wise trade policy, manage export promotion schemes, and complete compliance actions through a structured government pathway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] h-full p-5 sm:p-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[rgba(89,211,155,0.10)] to-[rgba(106,167,255,0.10)] border border-[#0f172a]/[0.08] text-xl mb-4">
                🧭
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-[#0f172a]">Policy and route guidance</h3>
              <p className="text-[#475569] leading-relaxed text-sm">
                DGFT helps businesses understand what is allowed, what needs authorisation, and which filings must happen before moving goods across borders.
              </p>
            </div>

            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] h-full p-5 sm:p-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[rgba(89,211,155,0.10)] to-[rgba(106,167,255,0.10)] border border-[#0f172a]/[0.08] text-xl mb-4">
                🪪
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-[#0f172a]">IEC as the entry point</h3>
              <p className="text-[#475569] leading-relaxed text-sm">
                For most import and export activity, IEC is the basic business identifier. Without it, customs and bank-related trade workflows become difficult to start.
              </p>
            </div>

            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] h-full p-5 sm:p-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[rgba(89,211,155,0.10)] to-[rgba(106,167,255,0.10)] border border-[#0f172a]/[0.08] text-xl mb-4">
                🗂️
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-[#0f172a]">Digital compliance support</h3>
              <p className="text-[#475569] leading-relaxed text-sm">
                DGFT’s services include IEC profile management, authorisations, trade notices, restricted-item checks, and other workflow tools that reduce manual friction.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Global Trade stats & Strategic Solutions */}
        <section className="w-full pt-4 pb-8 px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-[#0f172a]">
                Global trade is large, active, and compliance-sensitive
              </h2>
              <p className="text-[#475569] leading-relaxed text-sm sm:text-base mb-3">
                The World Trade Organization reported that in 2025, world trade in goods and commercial services reached <span className="text-[#07111f] font-bold">US$ 34.89 trillion</span>, with services accounting for <span className="text-[#07111f] font-bold">27.5%</span> of global trade. On India’s side, the Department of Commerce recorded merchandise exports of <span className="text-[#07111f] font-bold">US$ 437.70 billion</span> in 2024–25, while imports reached <span className="text-[#07111f] font-bold">US$ 721.20 billion</span>.
              </p>
              <p className="text-[#475569] leading-relaxed text-sm sm:text-base mb-0">
                These figures show one thing clearly: international trade is not a side activity anymore. It is a serious operating system. One missing document, one classification error, or one delayed authorisation can turn into lost time, blocked shipments, or avoidable cost.
              </p>
            </div>

            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-[#0f172a]">
                What strategic DGFT solutions actually do
              </h2>
              <ul className="list-disc pl-5 text-[#475569] leading-relaxed text-sm sm:text-base space-y-2">
                <li>Map the correct import-export process before the first shipment moves.</li>
                <li>Help with IEC, policy checks, authorisations, and supporting documents.</li>
                <li>Reduce rework by aligning paperwork with customs and trade requirements.</li>
                <li>Improve planning for duty savings, documentation, and follow-up actions.</li>
                <li>Keep compliance practical for founders, manufacturers, traders, and recyclers.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Import-export compliance explained simply */}
        <section className="w-full pt-4 pb-8 px-4 sm:px-8">
          <div className="mb-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1.5 text-[#0f172a]">
              Import-export compliance explained simply
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm sm:text-base mb-5">
              Import-export compliance means following the correct legal and procedural steps when goods enter or leave India. It is not only about filling forms. It also includes the right code selection, policy check, documentation, declarations, permissions, and after-filing follow-up.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6">
              <h4 className="text-base font-bold mb-2 text-[#0f172a]">1. Correct registration</h4>
              <p className="text-[#475569] leading-relaxed text-sm">
                IEC, profile details, and business records should be aligned before trade begins.
              </p>
            </div>
            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6">
              <h4 className="text-base font-bold mb-2 text-[#0f172a]">2. Product policy check</h4>
              <p className="text-[#475569] leading-relaxed text-sm">
                Items may be free, restricted, or subject to conditions. That classification changes the process.
              </p>
            </div>
            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6">
              <h4 className="text-base font-bold mb-2 text-[#0f172a]">3. Documentation</h4>
              <p className="text-[#475569] leading-relaxed text-sm">
                Invoices, packing lists, declarations, certificates, and supporting letters must match the transaction.
              </p>
            </div>
            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6">
              <h4 className="text-base font-bold mb-2 text-[#0f172a]">4. Ongoing monitoring</h4>
              <p className="text-[#475569] leading-relaxed text-sm">
                Compliance does not end after filing. It continues through verification, updates, and response handling.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Industry Shift & Transition */}
        <section className="w-full pt-4 pb-8 px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-[#0f172a]">
                  When a business shifts from another industry to recycling
                </h2>
                <p className="text-[#475569] leading-relaxed text-sm sm:text-base mb-3">
                  This is where many founders underestimate the complexity. A recycling business can involve import-export activity, waste classification, environmental approvals, EPR-related coordination, plant-level readiness, and multiple interlinked registrations. A founder coming from a different industry often faces a steep learning curve.
                </p>
                <ul className="list-disc pl-5 text-[#475569] leading-relaxed text-sm sm:text-base space-y-2">
                  <li>Unclear regulatory map: business owners may not know which authority handles which approval.</li>
                  <li>Document mismatch: company records, plant details, product category, and trade documents often do not align.</li>
                  <li>Time loss: repeated queries, corrections, and resubmissions slow the project.</li>
                  <li>Cost leakage: delays create hidden costs in staffing, rent, logistics, and opportunity loss.</li>
                  <li>Technical unfamiliarity: recycling terms, licences, and certification paths may be completely new.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-[#0f172a]">
                  Why this transition needs expert consulting
                </h2>
                <p className="text-[#475569] leading-relaxed text-sm sm:text-base mb-4">
                  A recycling venture is not just a new product line. It is often a new compliance universe. The business may need to coordinate trade permissions, pollution-control requirements, operational certifications, and sector-specific registrations before revenue can scale.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[rgba(89,211,155,0.14)] to-[rgba(106,167,255,0.14)] border border-white/10 rounded-[1.4rem] p-5">
                <strong className="block mb-2 text-[#0f172a]">Practical reality:</strong>
                <p className="text-[#475569] leading-relaxed text-sm sm:text-base m-0">
                  A founder who wants to restart in recycling usually needs more than a form-filler. They need a guide who can translate rules into actions, coordinate documents, and help them move from confusion to execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: EPR Nexus Savings */}
        <section className="w-full pt-4 pb-8 px-4 sm:px-8">
          <div className="mb-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1.5 text-[#0f172a]">
              How EPR Nexus helps clients save time and money
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm sm:text-base mb-5">
              The strongest consulting value comes from preventing rework. EPR Nexus can position itself as the team that does not just submit documents, but also helps clients prepare them correctly, track the process, and reduce avoidable back-and-forth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6">
              <h4 className="text-base font-bold mb-2 text-[#0f172a]">End-to-end support</h4>
              <p className="text-[#475569] leading-relaxed text-sm">
                One coordinated workflow is easier and cheaper than using separate people for research, drafting, filing, and follow-up.
              </p>
            </div>
            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6">
              <h4 className="text-base font-bold mb-2 text-[#0f172a]">Fewer corrections</h4>
              <p className="text-[#475569] leading-relaxed text-sm">
                Better documentation from day one reduces the chance of rejections, delays, and repeated professional fees.
              </p>
            </div>
            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6">
              <h4 className="text-base font-bold mb-2 text-[#0f172a]">Faster decisions</h4>
              <p className="text-[#475569] leading-relaxed text-sm">
                Clear next steps help founders move without hesitation, especially when they are entering a highly regulated business.
              </p>
            </div>
            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6">
              <h4 className="text-base font-bold mb-2 text-[#0f172a]">Lower hidden cost</h4>
              <p className="text-[#475569] leading-relaxed text-sm">
                Time saved on clarifications, resubmissions, and authority follow-up directly protects working capital.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Consultants Comparison */}
        <section className="w-full pt-4 pb-8 px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-[#0f172a]">
                Why many consultants fail to deliver real value
              </h2>
              <p className="text-[#475569] leading-relaxed text-sm sm:text-base mb-3">
                In the market, some consultants focus only on paperwork and leave the client to manage the rest. That approach can work for very simple cases, but it becomes weak in trade-heavy or recycling-related projects where multiple approvals move together.
              </p>
              <ul className="list-disc pl-5 text-[#475569] leading-relaxed text-sm sm:text-base space-y-2">
                <li>They file without fully mapping the business model.</li>
                <li>They do not explain what happens after submission.</li>
                <li>They do not coordinate the different regulators involved.</li>
                <li>They disappear when clarification or follow-up is needed.</li>
              </ul>
            </div>

            <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-[#0f172a]">
                  What clients should expect instead
                </h2>
                <p className="text-[#475569] leading-relaxed text-sm sm:text-base mb-4">
                  A strong consulting partner should simplify complexity, give document clarity, and stay accountable until the process reaches a workable outcome. That is especially important for founders entering recycling from another sector, where the cost of a wrong assumption can be high.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[rgba(89,211,155,0.14)] to-[rgba(106,167,255,0.14)] border border-white/10 rounded-[1.4rem] p-5">
                <strong className="block mb-2 text-[#0f172a]">Best-positioning line for the blog:</strong>
                <p className="text-[#475569] leading-relaxed text-sm sm:text-base m-0">
                  “EPR Nexus turns compliance into a guided business process, helping clients move faster, spend smarter, and avoid the delays that come from fragmented consultation.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full pt-4 pb-8 px-4 sm:px-8">
          <div className="mb-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1.5 text-[#0f172a]">
              Frequently asked questions
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm sm:text-base mb-5">
              A few quick answers to help readers understand DGFT, trade compliance, and recycling-sector entry better.
            </p>
          </div>

          <div className="space-y-4 w-full">
            {[
              {
                q: "What is DGFT in simple words?",
                a: "DGFT is the government body that manages India’s foreign trade policy, import-export procedures, and related online services such as IEC and trade authorisations."
              },
              {
                q: "Why is compliance so important for import-export?",
                a: "Because customs, banks, and regulators expect the right documents, declarations, and permissions. Small mistakes can cause delays, penalties, or shipment hold-ups."
              },
              {
                q: "Why is recycling business setup harder for new entrants?",
                a: "Because it usually combines trade compliance, environmental approvals, documentation discipline, and operational readiness. Entrepreneurs coming from other industries often need help translating all those requirements into a workable plan."
              },
              {
                q: "How does EPR Nexus help clients?",
                a: "By helping clients prepare documentation correctly, guiding them through the process, reducing follow-up delays, and making compliance less expensive in terms of both time and rework."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#0f172a]/[0.08] rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className={`w-full text-left font-bold py-4 px-5 text-sm sm:text-base flex justify-between items-center transition-colors ${
                    openFaq === idx
                      ? 'bg-[rgba(89,211,155,0.12)] text-[#0f172a]'
                      : 'bg-[#0f172a]/[0.04] text-[#0f172a]'
                  }`}
                >
                  <span>{faq.q}</span>
                  <span className="ml-2 font-mono text-lg">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="p-5 text-[#475569] leading-relaxed text-sm sm:text-base bg-white border-t border-[#0f172a]/[0.08]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final Takeaway */}
        <section className="w-full pt-4 pb-20 px-4 sm:px-8">
          <div className="bg-white border border-[#0f172a]/[0.08] rounded-[1.35rem] shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 sm:p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="lg:w-8/12">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-[#0f172a]">
                  Final takeaway
                </h2>
                <p className="text-[#475569] leading-relaxed text-sm sm:text-base mb-0">
                  DGFT is not just a compliance office; it is a trade-enablement system. When businesses use strategic DGFT support, they move with more confidence, fewer errors, and better control over import-export execution. For recycling entrepreneurs, this becomes even more valuable because the regulatory journey is more complex and the cost of confusion is higher. EPR Nexus can be positioned as the partner that simplifies the journey from application to approval.
                </p>
              </div>
              <div className="lg:w-4/12 text-left lg:text-right w-full">
                <a
                  href="#top"
                  className="inline-block bg-[#198754] hover:bg-[#157347] text-white font-medium text-base sm:text-lg py-3 px-6 rounded-lg transition-colors shadow-sm"
                >
                  Back to Top
                </a>
              </div>
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
      
    </div>
   
  );
}