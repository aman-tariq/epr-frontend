import StickyContactForm from '@/components/StickyContactForm';
import React from 'react';

export default function EWasteCompliancePage() {
  return (
    <div className="w-full md:mt-[120px] mt-12 min-h-screen bg-gradient-to-b from-white via-[#f5fbff] to-[#f5fbff] text-[#0f172a] font-sans leading-relaxed">
       <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        <div>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Complete E-Waste Compliance & Consultancy Solutions in India",
            "description": " “A practical, industry-focused guide for producers, brand owners, importers, recyclers, refurbishers, and business teams that need practical compliance support, CPCB portal guidance, documentation help, and end-to-end execution.”.",
            "author": {
              "@type": "Organization",
              "name": "EPR Nexuss"
            },
            "publisher": {
              "@type": "Organization",
              "name": "EPR Nexuss"
            }
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is e-waste registration mandatory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For covered stakeholders under India’s e-waste rules, registration through the CPCB portal is the expected compliance route."
                }
              },
              {
                "@type": "Question",
                "name": "What does complete e-waste consultancy include?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It usually includes eligibility review, document support, CPCB portal filing, clarification handling, return support, and ongoing compliance tracking."
                }
              },
              {
                "@type": "Question",
                "name": "Can this blog be customised for another brand?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The title, sections, chart values, FAQs, and colours can be changed easily."
                }
              }
            ]
          }),
        }}
      />


      {/* Hero Section */}
      <section className="py-[8px] pb-[18px] w-full">
        <div className="w-full">
          <div className="overflow-hidden border border-[#0f5bff]/12 bg-gradient-to-br from-[#0f5bff]/96 via-[#143b8c]/95 to-[#10b981]/90 text-white md:rounded-[32px] shadow-[0_18px_45px_rgba(15,91,255,0.12)] relative after:content-[''] after:absolute after:-bottom-[18%] after:-right-[12%] after:w-[380px] after:h-[380px] after:rounded-full after:bg-white/8 after:blur-md">
            <div className="gap-6 p-5 sm:p-[34px] items-center relative z-10">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/14 border border-white/18 text-xs sm:text-sm font-bold tracking-wider">
                  Complete E-Waste Compliance Solution
                </span>
                <h1 className="my-3.5 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
                  Complete E-Waste Compliance & Consultancy Solutions in India
                </h1>
                <p className="mb-5.5 max-w-[64ch] text-base sm:text-lg text-white/92">
                  A premium, SEO-friendly guide for producers, brand owners, importers, recyclers, refurbishers, and business teams that need
                  practical compliance support, CPCB portal guidance, documentation help, and end-to-end execution.
                </p>
                <div className="flex gap-3.5 mt-4 flex-wrap">
                  <a
                    className="inline-flex items-center justify-center  px-5 py-3.5 rounded-xl font-extrabold border border-transparent transition-all duration-200 hover:-translate-y-0.5 bg-white text-[#143b8c]"
                    href="#solutions"
                  >
                    Explore Services
                  </a>
                  <a
                    className="inline-flex items-center px-5 justify-center py-3.5 rounded-xl font-extrabold border transition-all duration-200 hover:-translate-y-0.5 bg-white/12 text-white border-white/18"
                    href="#process"
                  >
                    See Process
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="py-[28px] pb-[60px] w-full">
        <div className="w-full grid grid-cols-1  gap-6 items-start">
          <article className="grid gap-5.5 w-full">
            
            {/* Overview Card */}
            <section className="bg-white border border-[#d8e5f3] md:rounded-[24px] shadow-[0_18px_45px_rgba(15,91,255,0.12)] p-5 sm:p-[26px]" id="overview">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#10b981]/10 text-[#0f766e] font-extrabold text-xs border border-[#10b981]/15 mb-3">
                Why this topic matters
              </span>
              <h2 className="mb-3 text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                What is complete e-waste compliance?
              </h2>
              <p className="text-base sm:text-lg text-[#516076] m-0">
                Complete e-waste compliance means more than just registration. It means understanding the business role, identifying the correct
                compliance path, preparing the right documents, filing through the CPCB portal, managing queries, tracking obligations, and keeping
                records ready for future reporting. That is why a consultancy-led approach is useful for businesses that want fewer errors and a
                more organized process.
              </p>

              <div className="flex flex-wrap gap-2.5 mt-4" aria-label="Table of contents">
                <a href="#solutions" className="px-3.5 py-2 rounded-full bg-[#eff7ff] border border-[#d6e7ff] text-[#1b4b9b] text-sm font-bold hover:bg-[#e2f2ff]">
                  Services
                </a>
                <a href="#eligibility" className="px-3.5 py-2 rounded-full bg-[#eff7ff] border border-[#d6e7ff] text-[#1b4b9b] text-sm font-bold hover:bg-[#e2f2ff]">
                  Who needs it
                </a>
                <a href="#process" className="px-3.5 py-2 rounded-full bg-[#eff7ff] border border-[#d6e7ff] text-[#1b4b9b] text-sm font-bold hover:bg-[#e2f2ff]">
                  Process
                </a>
                <a href="#docs" className="px-3.5 py-2 rounded-full bg-[#eff7ff] border border-[#d6e7ff] text-[#1b4b9b] text-sm font-bold hover:bg-[#e2f2ff]">
                  Documents
                </a>
                <a href="#charts" className="px-3.5 py-2 rounded-full bg-[#eff7ff] border border-[#d6e7ff] text-[#1b4b9b] text-sm font-bold hover:bg-[#e2f2ff]">
                  Charts
                </a>
                <a href="#faq" className="px-3.5 py-2 rounded-full bg-[#eff7ff] border border-[#d6e7ff] text-[#1b4b9b] text-sm font-bold hover:bg-[#e2f2ff]">
                  FAQs
                </a>
              </div>
            </section>

            {/* Solutions Card */}
            <section className="bg-white border border-[#d8e5f3] md:rounded-[24px] shadow-[0_18px_45px_rgba(15,91,255,0.12)] p-5 sm:p-[26px]" id="solutions">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#10b981]/10 text-[#0f766e] font-extrabold text-xs border border-[#10b981]/15 mb-3">
                Consultancy solution
              </span>
              <h2 className="mb-3 text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                Complete e-waste compliance and consultancy solution
              </h2>
              <p className="text-base sm:text-lg text-[#516076] m-0">
                The goal is simple: reduce confusion, prevent delays, and move your business from raw paperwork to a valid compliance file with
                a workable filing strategy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
                {[
                  { icon: '📝', title: 'EPR registration', desc: 'Support for the right registration route and application setup.' },
                  { icon: '🌐', title: 'CPCB portal filing', desc: 'Organized online submission and status monitoring.' },
                  { icon: '📂', title: 'Document management', desc: 'Compilation, review, formatting, and gap-checking.' },
                  { icon: '♻️', title: 'Recycler coordination', desc: 'Support for authorised recycler linkage and compliance records.' },
                  { icon: '📊', title: 'Target compliance', desc: 'Help understanding obligations and reporting needs.' },
                  { icon: '📑', title: 'Annual return support', desc: 'Assistance with filing, follow-up, and documentation readiness.' },
                  { icon: '🔍', title: 'Audit readiness', desc: 'Keeping records in shape for future checks and reviews.' },
                  { icon: '⚙️', title: 'Amendments & updates', desc: 'Support for changes in address, signatory, or business details.' },
                  { icon: '🤝', title: 'Dedicated consultant', desc: 'A single point of ownership for the full compliance journey.' },
                  { icon: '🚀', title: 'End-to-end execution', desc: 'From assessment to follow-up, managed as one clear project.' }
                ].map((s, idx) => (
                  <div key={idx} className="border border-[#d8e5f3] rounded-2xl p-4.5 bg-gradient-to-b from-white to-[#fbfdff] flex gap-3.5">
                    <div className="w-[46px] h-[46px] rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#0f5bff]/12 to-[#10b981]/14 text-[#143b8c] text-xl shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="m-0 mb-1.5 text-base font-bold">{s.title}</h3>
                      <p className="m-0 text-[#516076] text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 mt-4.5">
                <div className="bg-gradient-to-br from-[#0f5bff]/6 to-[#10b981]/6 border border-[#0f5bff]/14 rounded-2xl p-5">
                  <h3 className="mt-0 mb-2 text-base font-bold">What a good consultancy usually handles</h3>
                  <ul className="m-0 pl-5 text-[#516076] list-disc">
                    <li className="my-2">Eligibility review and compliance mapping</li>
                    <li className="my-2">CPCB portal registration support</li>
                    <li className="my-2">Target understanding and obligation planning</li>
                    <li className="my-2">Returns, records, and compliance tracking</li>
                    <li className="my-2">Coordination with internal teams and external stakeholders</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#0f5bff]/6 to-[#10b981]/6 border border-[#0f5bff]/14 rounded-2xl p-5">
                  <h3 className="mt-0 mb-2 text-base font-bold">Why businesses use consultants</h3>
                  <ul className="m-0 pl-5 text-[#516076] list-disc">
                    <li className="my-2">Reduce errors in documentation</li>
                    <li className="my-2">Save management time</li>
                    <li className="my-2">Keep the process organized</li>
                    <li className="my-2">Improve response quality to portal queries</li>
                    <li className="my-2">Create a reliable compliance workflow</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Eligibility Card */}
            <section className="bg-white border border-[#d8e5f3] md:rounded-[24px] shadow-[0_18px_45px_rgba(15,91,255,0.12)] p-5 sm:p-[26px]" id="eligibility">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#10b981]/10 text-[#0f766e] font-extrabold text-xs border border-[#10b981]/15 mb-3">
                Applicability
              </span>
              <h2 className="mb-3 text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                Who needs e-waste compliance support?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { role: 'Producers', desc: 'Businesses placing electronic or electrical equipment into the market.' },
                  { role: 'Importers', desc: 'Companies importing covered products or components for sale in India.' },
                  { role: 'Brand owners', desc: 'Businesses selling products under their own name or label.' },
                  { role: 'Manufacturers', desc: 'Units making covered products that may have compliance obligations.' },
                  { role: 'Recyclers', desc: 'Operators that collect, process, and recycle e-waste streams.' },
                  { role: 'Refurbishers', desc: 'Businesses extending the life of equipment through repair and reuse.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-[18px] rounded-[18px] bg-gradient-to-b from-white to-[#f8fcff] border border-[#d8e5f3]">
                    <strong className="block text-base mb-1.5">{item.role}</strong>
                    <p className="m-0 text-[#516076] text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#6a7a91] mt-2.5">
                The CPCB portal is the operational gateway for registration under the E-Waste (Management) Rules, 2022. This page is written as a
                business-friendly explainer, not a legal opinion.
              </p>
            </section>

            {/* Process Card */}
            <section className="bg-white border border-[#d8e5f3] md:rounded-[24px] shadow-[0_18px_45px_rgba(15,91,255,0.12)] p-5 sm:p-[26px]" id="process">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#10b981]/10 text-[#0f766e] font-extrabold text-xs border border-[#10b981]/15 mb-3">
                Work flow
              </span>
              <h2 className="mb-3 text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                Step-by-step consultancy process
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-4">
                {[
                  { num: '1. Business assessment', desc: 'Identify the correct stakeholder category and compliance scope.' },
                  { num: '2. Document collection', desc: 'Gather company, product, GST, PAN, and signatory information.' },
                  { num: '3. Portal filing', desc: 'Prepare and submit the application through the CPCB system.' },
                  { num: '4. Follow-up', desc: 'Resolve queries, monitor status, and support future reporting.' }
                ].map((item, idx) => (
                  <div key={idx} className="border border-[#d8e5f3] rounded-[18px] p-4 bg-gradient-to-b from-white to-[#fbfdff] relative min-h-[138px]">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0f5bff] to-[#10b981] absolute top-4 right-4 shadow-[0_0_0_6px_rgba(15,91,255,0.09)]" />
                    <strong className="block mb-1.5 text-base">{item.num}</strong>
                    <p className="m-0 text-[#516076] text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3.5 mt-4.5">
                {[
                  { step: '1', title: 'Business and product review', desc: 'We identify the covered category, role, and compliance need so the right route is selected from the start.' },
                  { step: '2', title: 'Document checklist and gap check', desc: 'Missing documents are flagged early to avoid rejection, delay, or repeated correction cycles.' },
                  { step: '3', title: 'Application drafting and portal filing', desc: 'We prepare the application pack and submit the relevant information on the CPCB system with care.' },
                  { step: '4', title: 'Clarification handling and approval follow-up', desc: 'We support responses, status checks, and updates until the application is ready for closure.' }
                ].map((s, idx) => (
                  <div key={idx} className="grid grid-cols-[auto_1fr] gap-3.5 items-start bg-white border border-[#d8e5f3] rounded-[18px] p-4">
                    <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-[18px] grid place-items-center bg-gradient-to-br from-[#0f5bff] to-[#10b981] text-white font-black text-xl shadow-[0_12px_25px_rgba(15,91,255,0.18)]">
                      {s.step}
                    </div>
                    <div>
                      <h4 className="m-0 mb-1.5 font-bold text-base sm:text-lg">{s.title}</h4>
                      <p className="m-0 text-[#516076] text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Documents Card */}
            <section className="bg-white border border-[#d8e5f3] md:rounded-[24px] shadow-[0_18px_45px_rgba(15,91,255,0.12)] p-5 sm:p-[26px]" id="docs">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#10b981]/10 text-[#0f766e] font-extrabold text-xs border border-[#10b981]/15 mb-3">
                Documents
              </span>
              <h2 className="mb-3 text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                Typical documents required
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
                <div>
                  <ul className="pl-5 m-0 text-[#516076] list-disc">
                    <li className="my-1.5">Company incorporation documents</li>
                    <li className="my-1.5">Authorised signatory details</li>
                    <li className="my-1.5">PAN, GST, and address proof</li>
                    <li className="my-1.5">Product and brand details</li>
                    <li className="my-1.5">Authorisation letters, as applicable</li>
                  </ul>
                </div>
                <div>
                  <ul className="pl-5 m-0 text-[#516076] list-disc">
                    <li className="my-1.5">Process description or business profile</li>
                    <li className="my-1.5">Factory / office details</li>
                    <li className="my-1.5">Agreement or licence documents for recyclers</li>
                    <li className="my-1.5">Compliance declarations and supporting records</li>
                    <li className="my-1.5">Any additional CPCB query-response documents</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Common Mistakes Card */}
            <section className="bg-white border border-[#d8e5f3] md:rounded-[24px] shadow-[0_18px_45px_rgba(15,91,255,0.12)] p-5 sm:p-[26px]">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#10b981]/10 text-[#0f766e] font-extrabold text-xs border border-[#10b981]/15 mb-3">
                Common issues
              </span>
              <h2 className="mb-3 text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                Common mistakes businesses make
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-[18px] rounded-[18px] bg-gradient-to-b from-white to-[#f8fcff] border border-[#d8e5f3]">
                  <strong className="block text-base mb-1.5">Wrong category selection</strong>
                  <p className="m-0 text-[#516076] text-sm">Registering as the wrong stakeholder can create avoidable delays.</p>
                </div>
                <div className="p-[18px] rounded-[18px] bg-gradient-to-b from-white to-[#f8fcff] border border-[#d8e5f3]">
                  <strong className="block text-base mb-1.5">Incomplete document sets</strong>
                  <p className="m-0 text-[#516076] text-sm">Missing pages, mismatched names, or unsupported claims are common triggers for queries.</p>
                </div>
                <div className="p-[18px] rounded-[18px] bg-gradient-to-b from-white to-[#f8fcff] border border-[#d8e5f3]">
                  <strong className="block text-base mb-1.5">No internal tracking</strong>
                  <p className="m-0 text-[#516076] text-sm">Without a clear owner, compliance tasks slip and deadlines become hard to manage.</p>
                </div>
              </div>
            </section>

            {/* Charts Section */}
            <section className="bg-white border border-[#d8e5f3] md:rounded-[24px] shadow-[0_18px_45px_rgba(15,91,255,0.12)] p-5 sm:p-[26px]" id="charts">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#10b981]/10 text-[#0f766e] font-extrabold text-xs border border-[#10b981]/15 mb-3">
                Visuals
              </span>
              <h2 className="mb-3 text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                Data Visualization
              </h2>
              <p className="text-base sm:text-lg text-[#516076] m-0">
                These visualizations provide a clear overview of compliance effort allocation and stakeholder engagement.
                Data can be customized to reflect specific client metrics for actionable insights
              </p>

              <div className="grid gap-4.5 mt-4.5">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4.5 items-stretch">
                  
                  {/* Bar Chart Box */}
                  <div className="border border-[#d8e5f3] rounded-[24px] p-[20px] bg-gradient-to-b from-white to-[#fbfdff]">
                    <h3 className="m-0 mb-1.5 text-lg font-bold">Illustrative compliance activity split</h3>
                    <p className="m-0 mb-4 text-[#516076] text-sm">How a consultancy typically spends effort across the project lifecycle.</p>
                    
                    <div className="grid gap-3.5 mt-2.5" aria-label="Bar chart">
                      {[
                        { label: 'Documentation & review', width: '92%', val: '92%' },
                        { label: 'Portal filing', width: '84%', val: '84%' },
                        { label: 'Query resolution', width: '72%', val: '72%' },
                        { label: 'Obligation tracking', width: '68%', val: '68%' },
                        { label: 'Audit readiness', width: '58%', val: '58%' }
                      ].map((bar, idx) => (
                        <div key={idx} className="grid grid-cols-1 sm:grid-cols-[160px_1fr_50px] gap-2 sm:gap-3 items-center">
                          <div className="font-bold text-[#24324a] text-sm">{bar.label}</div>
                          <div className="h-4 bg-[#eaf2fb] rounded-full overflow-hidden relative w-full">
                            <div className="h-full rounded-full bg-gradient-to-r from-[#0f5bff] to-[#10b981]" style={{ width: bar.width }} />
                          </div>
                          <div className="font-extrabold text-left sm:text-right text-[#1f3353] text-sm">{bar.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pie Chart Box */}
                  <div className="border border-[#d8e5f3] rounded-[24px] p-[20px] bg-gradient-to-b from-white to-[#fbfdff]">
                    <h3 className="m-0 mb-1.5 text-lg font-bold">Illustrative stakeholder mix</h3>
                    <p className="m-0 mb-4 text-[#516076] text-sm">A simple visual breakdown for the article design.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4.5 items-center">
                      <div
                        className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full relative shadow-[0_18px_45px_rgba(15,91,255,0.12)] mx-auto"
                        style={{
                          background: 'conic-gradient(#0f5bff 0 34%, #10b981 34% 58%, #2dd4bf 58% 76%, #8b5cf6 76% 90%, #f59e0b 90% 100%)'
                        }}
                        aria-hidden="true"
                      >
                        <div className="absolute inset-[36px] bg-white rounded-full shadow-[inset_0_0_0_1px_#e8eef8]" />
                      </div>
                      <div className="grid gap-3">
                        <div className="flex items-center gap-2.5 text-[#516076] text-sm"><span className="w-3 h-3 rounded-[4px] bg-[#0f5bff]" /> Producers — 34%</div>
                        <div className="flex items-center gap-2.5 text-[#516076] text-sm"><span className="w-3 h-3 rounded-[4px] bg-[#10b981]" /> Importers — 24%</div>
                        <div className="flex items-center gap-2.5 text-[#516076] text-sm"><span className="w-3 h-3 rounded-[4px] bg-[#2dd4bf]" /> Brand owners — 18%</div>
                        <div className="flex items-center gap-2.5 text-[#516076] text-sm"><span className="w-3 h-3 rounded-[4px] bg-[#8b5cf6]" /> Recyclers — 14%</div>
                        <div className="flex items-center gap-2.5 text-[#516076] text-sm"><span className="w-3 h-3 rounded-[4px] bg-[#f59e0b]" /> Refurbishers — 10%</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-white border border-[#d8e5f3] md:rounded-[24px] shadow-[0_18px_45px_rgba(15,91,255,0.12)] p-5 sm:p-[26px]">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#10b981]/10 text-[#0f766e] font-extrabold text-xs border border-[#10b981]/15 mb-3">
                Why choose us
              </span>
              <h2 className="mb-3 text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                Why businesses prefer end-to-end consultancy
              </h2>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mt-4.5">
                <div className="bg-white border border-[#d8e5f3] rounded-2xl p-4.5 text-center">
                  <strong className="block text-2xl sm:text-3xl font-extrabold leading-none">500+</strong>
                  <span className="block mt-1.5 text-[#516076] text-sm">Projects handled</span>
                </div>
                <div className="bg-white border border-[#d8e5f3] rounded-2xl p-4.5 text-center">
                  <strong className="block text-2xl sm:text-3xl font-extrabold leading-none">100+</strong>
                  <span className="block mt-1.5 text-[#516076] text-sm">Clients supported</span>
                </div>
                <div className="bg-white border border-[#d8e5f3] rounded-2xl p-4.5 text-center">
                  <strong className="block text-2xl sm:text-3xl font-extrabold leading-none">25+</strong>
                  <span className="block mt-1.5 text-[#516076] text-sm">Industry segments</span>
                </div>
                <div className="bg-white border border-[#d8e5f3] rounded-2xl p-4.5 text-center">
                  <strong className="block text-2xl sm:text-3xl font-extrabold leading-none">100%</strong>
                  <span className="block mt-1.5 text-[#516076] text-sm">Process focus</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 mt-4.5">
                <div className="p-[18px] rounded-[18px] bg-gradient-to-b from-white to-[#f8fcff] border border-[#d8e5f3]">
                  <strong className="block text-base mb-1.5">One point of ownership</strong>
                  <p className="m-0 text-[#516076] text-sm">Instead of moving between legal, operations, and documentation teams, the project has one clear compliance workflow.</p>
                </div>
                <div className="p-[18px] rounded-[18px] bg-gradient-to-b from-white to-[#f8fcff] border border-[#d8e5f3]">
                  <strong className="block text-base mb-1.5">Faster execution</strong>
                  <p className="m-0 text-[#516076] text-sm">With a structured document checklist and portal plan, the submission process becomes smoother and more predictable.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
                {[
                  { icon: '✅', title: 'Clear guidance', desc: 'Simple explanation of the process, obligations, and timelines.' },
                  { icon: '⏱️', title: 'Time saving', desc: 'Less back-and-forth, fewer reworks, and better document readiness.' },
                  { icon: '🛡️', title: 'Risk reduction', desc: 'A structured approach helps avoid avoidable filing mistakes.' },
                  { icon: '📞', title: 'Dedicated support', desc: 'A single consultant keeps the work organised from start to finish.' }
                ].map((item, idx) => (
                  <div key={idx} className="border border-[#d8e5f3] rounded-2xl p-4.5 bg-gradient-to-b from-white to-[#fbfdff]">
                    <div className="w-[46px] h-[46px] rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#0f5bff]/12 to-[#10b981]/14 text-[#143b8c] text-xl mb-2.5">
                      {item.icon}
                    </div>
                    <h3 className="m-0 mb-1.5 text-base font-bold">{item.title}</h3>
                    <p className="m-0 text-[#516076] text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white border border-[#d8e5f3] md:rounded-[24px] shadow-[0_18px_45px_rgba(15,91,255,0.12)] p-5 sm:p-[26px]" id="faq">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#10b981]/10 text-[#0f766e] font-extrabold text-xs border border-[#10b981]/15 mb-3">
                FAQ
              </span>
              <h2 className="mb-3 text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                Frequently asked questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3.5">
                <div className="border border-[#d8e5f3] rounded-[18px] p-4 bg-white">
                  <strong className="block mb-1.5 font-bold">Is e-waste registration mandatory?</strong>
                  <p className="m-0 text-[#516076] text-sm">For covered stakeholders under the rules, registration through the CPCB portal is the expected compliance route.</p>
                </div>
                <div className="border border-[#d8e5f3] rounded-[18px] p-4 bg-white">
                  <strong className="block mb-1.5 font-bold">What does complete e-waste consultancy include?</strong>
                  <p className="m-0 text-[#516076] text-sm">It usually includes eligibility review, document support, CPCB portal filing, clarification handling, return support, and ongoing compliance tracking.</p>
                </div>
                <div className="border border-[#d8e5f3] rounded-[18px] p-4 bg-white">
                  <strong className="block mb-1.5 font-bold">How can this blog be customised?</strong>
                  <p className="m-0 text-[#516076] text-sm">You can easily change the title, sections, chart values, FAQs, colours, and CTA text.</p>
                </div>
                <div className="border border-[#d8e5f3] rounded-[18px] p-4 bg-white">
                  <strong className="block mb-1.5 font-bold">Can the blog fit WordPress too?</strong>
                  <p className="m-0 text-[#516076] text-sm">Yes. The layout is a single-page HTML structure that can be adapted into WordPress or a custom website template.</p>
                </div>
              </div>
            </section>

          </article>
        </div>
      </main>
       </div>
        <aside className="hidden lg:block shrink-0 w-[320px]">
          <div className="sticky top-28 px-2">
            <StickyContactForm />
          </div>
        </aside>
      </div>
    </div>
  );
}