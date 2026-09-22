import StickyContactForm from '@/components/StickyContactForm';
import React, { useState } from 'react';

export default function WpcComplianceGuide(): React.JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f4f7fb] via-[#f8fbff] to-[#f4f7fb] text-[#14324a] font-['Inter',sans-serif] scroll-smooth">
      

      {/* Main Content Container - Edge to Edge horizontally */}
      <main className="w-full ">
                <div className="flex flex-col lg:flex-row gap-2 items-stretch">
            <div>

        {/* Hero Section */}
        <section className="w-full lg:mt-[130px] mt-16 relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#133b63] to-[#0d6efd] text-white p-6 sm:p-10 lg:p-12 rounded-none shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <div className="w-full relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-8/12">
                <span className="inline-flex items-center gap-2 bg-white/12 border border-white/16 text-white px-3.5 py-1.5 rounded-full text-sm font-semibold mb-4">
                  Wireless Planning & Coordination (WPC)
                </span>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                  Wireless Planning & Coordination (WPC) Approval: The Complete Compliance Guide for Recycling Businesses in India
                </h1>
                <p className="text-white/86 text-base sm:text-lg leading-relaxed mb-6">
                  Learn how WPC approval supports compliant wireless operations, why it matters for modern recycling facilities, and how expert consulting helps businesses obtain approvals efficiently while saving valuable time and cost.
                </p>
                
              </div>

              <div className="w-full lg:w-4/12">
                <div className="bg-gradient-to-br from-[#0d6efd]/15 to-[#12b886]/15 border border-white/20 rounded-2xl p-6 shadow-md text-white backdrop-blur-sm">
                  <h2 className="text-lg font-bold mb-3 text-white">What this guide covers</h2>
                  <ul className="space-y-3 text-sm">
                    {[
                      'What WPC is and why it matters',
                      'Where recycling plants need wireless compliance',
                      'Step-by-step approval roadmap',
                      'Common mistakes and delays',
                      'How EPR Nexus supports businesses'
                    ].map((item, idx) => (
                      <li key={idx} className="relative pl-6 leading-snug">
                        <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#0d6efd] to-[#12b886] ring-4 ring-[#0d6efd]/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outer padding wrapper for sections */}
        <div className="w-full px-4 sm:px-8 py-6 space-y-6">
          {/* Overview Section */}
          <section id="overview" className="scroll-mt-24 bg-white border border-[#14324a]/[0.08] rounded-2xl sm:rounded-3xl shadow-[0_10px_24px_rgba(15,23,42,0.07)] p-5 sm:p-8">
            <div className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight mb-2">
              Understanding <span className="text-[#0d6efd]">Wireless Planning & Coordination (WPC)</span>
            </div>
            <p className="text-[#607284] text-sm sm:text-base leading-relaxed mb-6">
              WPC operates under the Ministry of Communications, Government of India, and manages the country’s radio frequency spectrum.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#f8fbff] border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
                <div className="font-extrabold text-[#0f172a] text-base mb-2">Why it matters</div>
                <p className="text-[#14324a] text-sm leading-relaxed m-0">
                  Any organization intending to deploy wireless communication devices that operate on regulated frequencies may need to obtain the applicable approvals before commercial operation.
                </p>
              </div>
              <div className="bg-[#f8fbff] border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
                <div className="font-extrabold text-[#0f172a] text-base mb-2">Common wireless uses in recycling</div>
                <p className="text-[#14324a] text-sm leading-relaxed m-0">
                  Industrial communication systems, RFID tracking, telemetry, GPS fleet management, wireless sensors, IoT monitoring, handheld devices, remote monitoring systems, and smart warehouse solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Why Compliance Matters Section */}
          <section id="why-matters" className="scroll-mt-24 bg-white border border-[#14324a]/[0.08] rounded-2xl sm:rounded-3xl shadow-[0_10px_24px_rgba(15,23,42,0.07)] p-5 sm:p-8">
            <div className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight mb-6">
              Why <span className="text-[#0d6efd]">WPC Compliance</span> Matters in Modern Recycling Plants
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
                <p className="text-[#14324a] text-sm leading-relaxed m-0">
                  Modern recycling facilities are no longer dependent solely on manual operations. Advanced plants integrate automation, intelligent sorting systems, material tracking, production monitoring, and centralized operational controls.
                </p>
              </div>
              <div className="bg-white border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
                <p className="text-[#14324a] text-sm leading-relaxed m-0">
                  Wireless connectivity enables these systems to function efficiently across large facilities while reducing wiring complexity and improving operational flexibility.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#f8fbff] border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
                <div className="font-extrabold text-[#0f172a] text-base mb-3">Challenges without planning</div>
                <ul className="space-y-2 text-sm">
                  {[
                    'Delays during commissioning',
                    'Equipment deployment issues',
                    'Procurement interruptions',
                    'Additional compliance costs'
                  ].map((item, idx) => (
                    <li key={idx} className="relative pl-6 leading-snug">
                      <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#0d6efd] to-[#12b886]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#f8fbff] border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
                <div className="font-extrabold text-[#0f172a] text-base mb-2">Better outcome with early approval</div>
                <p className="text-[#14324a] text-sm leading-relaxed m-0">
                  Obtaining the required approvals before installation provides confidence that wireless systems are aligned with applicable regulatory requirements and are ready for smooth business operations.
                </p>
              </div>
            </div>
          </section>

          {/* Technology Transformation Section */}
          <section id="technology" className="scroll-mt-24 bg-white border border-[#14324a]/[0.08] rounded-2xl sm:rounded-3xl shadow-[0_10px_24px_rgba(15,23,42,0.07)] p-5 sm:p-8">
            <div className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight mb-4">
              The Growing <span className="text-[#0d6efd]">Technology Transformation</span> in Recycling
            </div>
            <div className="bg-white border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20 mb-4">
              <p className="text-[#14324a] text-sm sm:text-base leading-relaxed m-0">
                India’s recycling sector is rapidly embracing Industry 4.0 technologies. Modern facilities increasingly utilize Artificial Intelligence, automated conveyor systems, robotic sorting, barcode and RFID inventory management, smart weighing systems, GPS-based logistics monitoring, remote machine diagnostics, cloud-based monitoring, wireless environmental monitoring, and Industrial IoT platforms.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0d6efd]/[0.08] to-[#12b886]/[0.08] border border-[#14324a]/[0.08] rounded-2xl p-4 sm:p-5 shadow-sm">
              <strong className="text-[#0f172a]">Takeaway:</strong>{' '}
              <span className="text-[#14324a] text-sm sm:text-base">
                Regulatory compliance should be built into project planning early, not treated as an afterthought after machinery procurement.
              </span>
            </div>
          </section>

          {/* Challenges Section */}
          <section id="challenges" className="scroll-mt-24 bg-white border border-[#14324a]/[0.08] rounded-2xl sm:rounded-3xl shadow-[0_10px_24px_rgba(15,23,42,0.07)] p-5 sm:p-8">
            <div className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight mb-4">
              Starting a Recycling Business from Another Industry: <span className="text-[#0d6efd]">The Hidden Challenges</span>
            </div>
            <div className="bg-white border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20 mb-6">
              <p className="text-[#14324a] text-sm sm:text-base leading-relaxed m-0">
                Many entrepreneurs come from manufacturing, construction, logistics, automobile, trading, chemicals, packaging, electronics, engineering, pharmaceuticals, textiles, or infrastructure. Recycling introduces a different regulatory environment.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#f8fbff] border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
                <div className="font-extrabold text-[#0f172a] text-base mb-3">Common challenges</div>
                <ul className="space-y-2 text-sm">
                  {[
                    'Limited understanding of regulatory requirements',
                    'Difficulty identifying applicable licences',
                    'Coordination across multiple authorities',
                    'Procurement without compliance planning',
                    'Project delays increase overall costs'
                  ].map((item, idx) => (
                    <li key={idx} className="relative pl-6 leading-snug">
                      <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#0d6efd] to-[#12b886]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#f8fbff] border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
                <div className="font-extrabold text-[#0f172a] text-base mb-2">Why planning early matters</div>
                <p className="text-[#14324a] text-sm leading-relaxed m-0">
                  Early compliance planning helps identify applicable approvals, prepare documentation in advance, reduce duplication of work, improve coordination, avoid procurement risks, and support timely commissioning.
                </p>
              </div>
            </div>
          </section>

          {/* Roadmap Section */}
          <section id="roadmap" className="scroll-mt-24 bg-white border border-[#14324a]/[0.08] rounded-2xl sm:rounded-3xl shadow-[0_10px_24px_rgba(15,23,42,0.07)] p-5 sm:p-8">
            <div className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight mb-2">
              Wireless Planning & Coordination (WPC) Approval for Recycling Businesses: <span className="text-[#0d6efd]">Step-by-Step Compliance Roadmap</span>
            </div>
            <p className="text-[#607284] text-sm sm:text-base leading-relaxed mb-6">
              As recycling plants become increasingly automated and digitally connected, businesses should evaluate whether WPC approval or related regulatory compliance is applicable to their equipment before installation and commercial operation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  num: 1,
                  title: 'Assess the Project',
                  desc: 'Review the recycling activity, plant capacity, machinery specs, automation level, imported equipment, wireless systems, and digital monitoring infrastructure.'
                },
                {
                  num: 2,
                  title: 'Review Applicable Requirements',
                  desc: 'Evaluate environmental authorizations, pollution control approvals, factory registrations, fire safety, electrical permissions, local approvals, EPR registrations, and WPC-related compliance.'
                },
                {
                  num: 3,
                  title: 'Prepare Documentation',
                  desc: 'Compile incorporation records, identity and address proofs, process details, machinery specifications, equipment manuals, import documents, site layout, authorization letters, and declarations.'
                },
                {
                  num: 4,
                  title: 'Technical Evaluation',
                  desc: 'Assess operating frequency, communication technology, intended application, equipment certifications, and regulatory applicability.'
                },
                {
                  num: 5,
                  title: 'Submission and Coordination',
                  desc: 'Submit complete applications where applicable and respond quickly to verification or clarification requests.'
                },
                {
                  num: 6,
                  title: 'Deployment and Compliance Management',
                  desc: 'Maintain records, documents, certificates, and renewal schedules to support smooth inspections and long-term continuity.'
                }
              ].map((step) => (
                <div key={step.num} className="bg-[#f8fbff] border border-[#14324a]/[0.08] rounded-2xl p-5 flex gap-4 items-start shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0d6efd] to-[#12b886] text-white flex items-center justify-center font-extrabold text-base shadow-[0_14px_24px_rgba(13,110,253,0.20)] shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#0f172a] mb-1">{step.title}</h3>
                    <p className="text-[#607284] text-xs sm:text-sm leading-relaxed m-0">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes Section */}
          <section id="mistakes" className="scroll-mt-24 bg-white border border-[#14324a]/[0.08] rounded-2xl sm:rounded-3xl shadow-[0_10px_24px_rgba(15,23,42,0.07)] p-5 sm:p-8">
            <div className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight mb-6">
              Common <span className="text-[#0d6efd]">Mistakes</span> That Delay Recycling Projects
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Buying equipment too early', desc: 'Confirm wireless compliance considerations before procurement.' },
                { title: 'One approval mindset', desc: 'Environmental approval does not cover every regulatory need.' },
                { title: 'Incomplete documents', desc: 'Missing or inconsistent documents extend timelines.' },
                { title: 'Ignoring expansion', desc: 'Plan for new lines, extra equipment, and automation upgrades.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#f8fbff] border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
                  <div className="font-extrabold text-[#0f172a] text-sm sm:text-base mb-2">{item.title}</div>
                  <p className="text-[#14324a] text-xs sm:text-sm leading-relaxed m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Support Section */}
          <section id="support" className="scroll-mt-24 bg-white border border-[#14324a]/[0.08] rounded-2xl sm:rounded-3xl shadow-[0_10px_24px_rgba(15,23,42,0.07)] p-5 sm:p-8">
            <div className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight mb-4">
              How <span className="text-[#0d6efd]">EPR Nexus</span> Simplifies the Compliance Journey
            </div>
            <div className="bg-white border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20 mb-6">
              <p className="text-[#14324a] text-sm sm:text-base leading-relaxed m-0">
                Setting up a recycling business involves more than obtaining individual approvals. It requires a coordinated strategy that aligns technical planning, regulatory compliance, and project execution.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#f8fbff] border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
                <div className="font-extrabold text-[#0f172a] text-base mb-3">How support helps</div>
                <ul className="space-y-2 text-sm">
                  {[
                    'Project planning and feasibility assessment',
                    'Identification of applicable approvals',
                    'Regulatory documentation preparation',
                    'Coordination with relevant authorities',
                    'Technical compliance evaluation',
                    'Ongoing compliance support'
                  ].map((item, idx) => (
                    <li key={idx} className="relative pl-6 leading-snug">
                      <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#0d6efd] to-[#12b886]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#f8fbff] border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
                <div className="font-extrabold text-[#0f172a] text-base mb-2">Why businesses choose end-to-end support</div>
                <p className="text-[#14324a] text-sm leading-relaxed m-0">
                  An integrated consulting approach reduces repeated documentation efforts, minimizes stress across multiple authorities, and provides a clearer path toward operational readiness.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="bg-white border border-[#14324a]/[0.08] rounded-2xl sm:rounded-3xl shadow-[0_10px_24px_rgba(15,23,42,0.07)] p-5 sm:p-8">
            <div className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight mb-6">
              Benefits of <span className="text-[#0d6efd]">Professional Regulatory Consulting</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#f8fbff] border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
                <div className="font-extrabold text-[#0f172a] text-base mb-2">Time savings</div>
                <p className="text-[#14324a] text-sm leading-relaxed m-0">
                  Systematic planning, documentation management, and coordinated support help reduce delays in commissioning, production planning, and revenue generation.
                </p>
              </div>
              <div className="bg-[#f8fbff] border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
                <div className="font-extrabold text-[#0f172a] text-base mb-2">Cost reduction</div>
                <p className="text-[#14324a] text-sm leading-relaxed m-0">
                  Early identification of regulatory considerations helps avoid redesigns, equipment modifications, idle machinery, and higher financing expenses.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="scroll-mt-24 bg-white border border-[#14324a]/[0.08] rounded-2xl sm:rounded-3xl shadow-[0_10px_24px_rgba(15,23,42,0.07)] p-5 sm:p-8">
            <div className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight mb-6">
              Frequently Asked <span className="text-[#0d6efd]">Questions</span>
            </div>
            <div className="space-y-3">
              {[
                {
                  q: "What is WPC approval?",
                  a: "Wireless Planning & Coordination (WPC) approval relates to the regulation of certain wireless communication equipment and radio frequency spectrum usage in India. Applicability depends on the specific equipment and its intended use."
                },
                {
                  q: "Does every recycling business require WPC approval?",
                  a: "No. The requirement depends on the wireless devices and technologies being used. Businesses should assess their equipment to determine applicable regulatory obligations."
                },
                {
                  q: "Can imported machinery require additional compliance review?",
                  a: "Yes. Imported equipment containing wireless communication modules may require evaluation to determine applicable regulatory requirements before deployment."
                },
                {
                  q: "Why is early compliance planning important?",
                  a: "Early planning helps identify applicable approvals before procurement and installation, reducing the likelihood of project delays and additional costs."
                },
                {
                  q: "Which recycling industries commonly use wireless technologies?",
                  a: "Wireless technologies are increasingly used across e-waste, plastic, tyre, battery, solar panel, metal, paper, textile, glass, and hazardous waste recycling facilities."
                }
              ].map((faq, idx) => (
                <div key={idx} className="border border-[#14324a]/[0.08] rounded-2xl overflow-hidden shadow-sm bg-white">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className={`w-full text-left font-bold py-4 px-5 text-sm sm:text-base flex justify-between items-center transition-colors ${
                      openFaq === idx
                        ? 'bg-[#0d6efd]/[0.06] text-[#0d6efd]'
                        : 'bg-white text-[#0f172a]'
                    }`}
                  >
                    <span>{faq.q}</span>
                    <span className="ml-2 font-mono text-lg">{openFaq === idx ? '−' : '+'}</span>
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 text-[#14324a] leading-relaxed text-sm sm:text-base border-t border-[#14324a]/[0.08]">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Footer CTA Section */}
          <section id="contact" className="scroll-mt-24 bg-gradient-to-br from-[#0f172a] via-[#133b63] to-[#0d6efd] text-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="w-full lg:w-8/12">
                <h2 className="text-xl sm:text-3xl font-bold mb-3 text-white">Build Your Recycling Business with Confidence</h2>
                <p className="text-white/84 text-sm sm:text-base leading-relaxed m-0">
                  Every successful recycling project begins with informed planning and effective compliance management. With the right planning, technical expertise, and regulatory support, entrepreneurs can focus on innovation, sustainability, and long-term business growth while building compliant and resilient recycling operations.
                </p>
              </div>
              <div className="w-full lg:w-4/12 text-left lg:text-right">
                <a
                  href="#"
                  className="inline-block bg-white text-[#0f172a] hover:bg-slate-100 font-bold text-base py-3 px-6 rounded-xl transition-colors shadow-md no-underline"
                >
                  Contact EPR Nexus
                </a>
              </div>
            </div>
          </section>

          {/* Conclusion Section */}
          <section className="bg-white border border-[#14324a]/[0.08] rounded-2xl sm:rounded-3xl shadow-[0_10px_24px_rgba(15,23,42,0.07)] p-5 sm:p-8">
            <div className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight mb-2">Conclusion</div>
            <div className="bg-white border border-[#14324a]/[0.08] rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#0d6efd]/20">
              <p className="text-[#14324a] text-sm sm:text-base leading-relaxed m-0">
                India's recycling industry is entering a new era of digital transformation, automation, and sustainable resource management. As facilities adopt advanced wireless technologies and smart manufacturing systems, integrating regulatory compliance into project planning becomes increasingly important.
              </p>
            </div>
          </section>
        </div>
         </div>
      <aside className="hidden lg:block shrink-0 w-[320px]">
        <div className="sticky top-[130px] px-2">
    <StickyContactForm/>
        </div>
      </aside>

        </div>
      </main>
    </div>
  );
}