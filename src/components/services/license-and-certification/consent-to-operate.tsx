import StickyContactForm from '@/components/StickyContactForm';
import React, { useState } from 'react';

export default function CtoGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen md:mt-[130px] bg-[#f6fbf9] text-[#18322e] font-sans line-relaxed  m-0 p-0">
        <div className="flex flex-col lg:flex-row gap-2 items-stretch">
            <div>
      
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#eaf9f3] via-[#f7fbff] to-[#eaf6fc] border-b border-[#d9ebe5] w-full m-0 p-0">
        {/* Background Decorative Circles */}
        <div className="absolute w-[520px] h-[520px] bg-[#bfeedd] -right-[220px] -top-[230px] opacity-50 rounded-full pointer-events-none" />
        <div className="absolute w-[360px] h-[360px] bg-[#c7eafb] -left-[180px] -bottom-[220px] opacity-50 rounded-full pointer-events-none" />

        <div className="relative z-10 py-[76px] px-4 md:px-8 max-w-[1440px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#d9f5e9] text-[#078b64] font-extrabold text-[13px] tracking-[0.7px] px-4 py-[9px] rounded-full mb-5">
            EPR NEXUSS • ENVIRONMENTAL COMPLIANCE GUIDE
          </div>

          <h1 className="max-w-[1150px] text-[38px] md:text-[6vw] lg:text-[72px] leading-[1.04] text-[#063b5c] font-bold mb-5 tracking-[-1.5px]">
            Consent to Operate (CTO): <span className="text-[#078b64]">Complete Compliance Guide</span> for Businesses
          </h1>

          <p className="max-w-[1000px] text-[17px] md:text-[19px] text-[#4e6963]">
            Understand the Consent to Operate process—from applicability and documentation to application scrutiny, approval conditions, renewal and ongoing environmental compliance—so your facility can plan its regulatory responsibilities with greater clarity.
          </p>

          <div className="flex flex-wrap gap-2.5 mt-6">
            <span className="bg-white border border-[#d5e9e2] px-3.5 py-[9px] rounded-full text-[13px] font-bold text-[#3b625a]">
              India-focused
            </span>
            <span className="bg-white border border-[#d5e9e2] px-3.5 py-[9px] rounded-full text-[13px] font-bold text-[#3b625a]">
              Beginner-friendly
            </span>
            <span className="bg-white border border-[#d5e9e2] px-3.5 py-[9px] rounded-full text-[13px] font-bold text-[#3b625a]">
              Compliance workflow
            </span>
            <span className="bg-white border border-[#d5e9e2] px-3.5 py-[9px] rounded-full text-[13px] font-bold text-[#3b625a]">
              Updated for current regulatory context • Review before use
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="#workflow"
              className="inline-block px-[19px] py-[13px] rounded-xl font-extrabold bg-gradient-to-r from-[#078b64] to-[#087fb5] text-white shadow-sm hover:opacity-95 transition-opacity"
            >
              View CTO Workflow ↓
            </a>
            <a
              href="#documents"
              className="inline-block px-[19px] py-[13px] rounded-xl font-extrabold bg-white text-[#078b64] border border-[#cde4dd] shadow-sm hover:bg-slate-50 transition-colors"
            >
              Check Documents
            </a>
          </div>
        </div>
      </header>

      {/* Section 1: What is CTO */}
      <section className="w-full py-[70px] md:py-[70px] px-4 md:px-8 bg-white m-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[950px] mx-auto mb-[42px] text-center">
            <div className="uppercase tracking-[1.5px] text-[#078b64] text-[12px] font-black">
              Start Here
            </div>
            <h2 className="text-[#063b5c] text-[29px] md:text-[4vw] lg:text-[46px] leading-[1.15] my-[9px]">
              What is Consent to Operate (CTO)?
            </h2>
            <p className="text-[#60736e] text-[17px]">
              Consent to Operate (CTO) is an operational environmental consent issued by the competent Pollution Control Authority to an applicable facility, allowing it to carry out its operations subject to prescribed pollution-control and environmental conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[28px]">
            <div className="bg-white border-l-[6px] border-[#078b64] rounded-[18px] shadow-[0_14px_38px_rgba(4,61,73,0.08)] p-7">
              <h3 className="text-[27px] text-[#063b5c] font-bold mb-2.5">Why CTO matters</h3>
              <p className="text-[#49625d] mb-3.25">
                Consent to operate (CTO) is important because it forms a key part of a facility's ongoing environment compliance.It helps ensure that applocable operation are carried out in  accordance with the conditions prescribed by the relevent Pollution Control Authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Legal Context */}
      <section className="w-full py-[54px] md:py-[70px] px-4 md:px-8 bg-[#eaf8f2] m-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[950px] mx-auto mb-[42px] text-center">
            <div className="uppercase tracking-[1.5px] text-[#078b64] text-[12px] font-black">
              Legal Context
            </div>
            <h2 className="text-[#063b5c] text-[29px] md:text-[4vw] lg:text-[46px] leading-[1.15] my-[9px]">
              Where CTO fits into environmental consent
            </h2>
            <p className="text-[#60736e] text-[17px]">
              The terminology used in consent applications can be confusing. The basic distinction is useful for planning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="border border-[#d9ebe5] rounded-[20px] bg-white p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)] border-t-[5px] border-t-[#087fb5]">
              <span className="inline-block px-2.5 py-1 rounded-full bg-[#edf7fb] text-[#087fb5] font-extrabold text-[12px] mb-2.5">
                Before establishment / expansion
              </span>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-[10px] mb-2">
                Consent to Establish (CTE)
              </h3>
              <p className="text-[#60736e]">
                Generally associated with establishing a new facility or undertaking an expansion/addition that triggers consent requirements. It addresses the proposed activity, site, process and pollution-control arrangements before operation.
              </p>
            </div>

            <div className="border border-[#d9ebe5] rounded-[20px] bg-white p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)] border-t-[5px] border-t-[#078b64]">
              <span className="inline-block px-2.5 py-1 rounded-full bg-[#eaf8f2] text-[#078b64] font-extrabold text-[12px] mb-2.5">
                Before / during operation
              </span>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-[10px] mb-2">
                Consent to Operate (CTO)
              </h3>
              <p className="text-[#60736e]">
                Relates to operation of an applicable facility under conditions prescribed by the competent pollution-control authority. The consent order can specify requirements relating to emissions, effluent, waste, monitoring, reporting and other environmental controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Applicability */}
      <section className="w-full py-[54px] md:py-[70px] px-4 md:px-8 bg-white m-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[950px] mx-auto mb-[42px] text-center">
            <div className="uppercase tracking-[1.5px] text-[#078b64] text-[12px] font-black">
              Applicability
            </div>
            <h2 className="text-[#063b5c] text-[29px] md:text-[4vw] lg:text-[46px] leading-[1.15] my-[9px]">
              When should a business check CTO applicability?
            </h2>
            <p className="text-[#60736e] text-[17px]">
              Start with the activity, pollution potential and jurisdiction—not with a generic document list.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#e8f4fb] text-[#087fb5]">
                🏭
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Industrial units</h3>
              <p className="text-[#60736e]">Manufacturing and processing facilities should assess consent requirements based on the nature and scale of their operations.</p>
            </div>

            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#e4f7ef] text-[#078b64]">
                ♻️
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Recycling & waste facilities</h3>
              <p className="text-[#60736e]">Recycling, recovery, dismantling and waste-management activities may involve additional authorizations and specific operating conditions.</p>
            </div>

            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#e8f4fb] text-[#087fb5]">
                💧
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Effluent-generating activity</h3>
              <p className="text-[#60736e]">Where operations can discharge sewage or trade effluent, water-consent requirements may become relevant.</p>
            </div>

            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#ebf0fb] text-[#063b5c]">
                🌫️
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Air-emission sources</h3>
              <p className="text-[#60736e]">Industrial plants in applicable air-pollution-control areas may need consent under the Air Act framework.</p>
            </div>

            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#ebf0fb] text-[#063b5c]">
                🧪
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Waste & chemicals</h3>
              <p className="text-[#60736e]">Hazardous waste, biomedical waste, plastic waste, e-waste, batteries or other regulated streams can create separate compliance requirements.</p>
            </div>

            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#e8f4fb] text-[#087fb5]">
                📍
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Location-specific rules</h3>
              <p className="text-[#60736e]">State, local area, industrial-estate and site conditions can influence the approval pathway and supporting documents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Workflow */}
      <section className="w-full py-[54px] md:py-[70px] px-4 md:px-8 bg-[#eef8fc] m-0" id="workflow">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[950px] mx-auto mb-[42px] text-center">
            <div className="uppercase tracking-[1.5px] text-[#078b64] text-[12px] font-black">
              Improved Flowchart
            </div>
            <h2 className="text-[#063b5c] text-[29px] md:text-[4vw] lg:text-[46px] leading-[1.15] my-[9px]">
              CTO application & compliance workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[12px]">
            <div className="relative bg-white border border-[#d9ebe5] rounded-[18px] p-5.5 py-[22px] px-[15px] text-center shadow-[0_8px_22px_rgba(4,61,73,0.05)]">
              <div className="w-10 h-10 rounded-full mx-auto mb-2.75 bg-[#063b5c] text-white font-black flex items-center justify-center">1</div>
              <h3 className="text-[17px] font-bold mb-1.5 text-[#063b5c]">Check applicability</h3>
              <p className="text-[13px] text-[#60736e]">Identify activity, category, location and consent triggers.</p>
            </div>

            <div className="relative bg-white border border-[#d9ebe5] rounded-[18px] p-5.5 py-[22px] px-[15px] text-center shadow-[0_8px_22px_rgba(4,61,73,0.05)]">
              <div className="w-10 h-10 rounded-full mx-auto mb-2.75 bg-[#063b5c] text-white font-black flex items-center justify-center">2</div>
              <h3 className="text-[17px] font-bold mb-1.5 text-[#063b5c]">Map requirements</h3>
              <p className="text-[13px] text-[#60736e]">List permits, authorizations, pollution controls and records.</p>
            </div>

            <div className="relative bg-white border border-[#d9ebe5] rounded-[18px] p-5.5 py-[22px] px-[15px] text-center shadow-[0_8px_22px_rgba(4,61,73,0.05)]">
              <div className="w-10 h-10 rounded-full mx-auto mb-2.75 bg-[#063b5c] text-white font-black flex items-center justify-center">3</div>
              <h3 className="text-[17px] font-bold mb-1.5 text-[#063b5c]">Prepare documents</h3>
              <p className="text-[13px] text-[#60736e]">Compile site, process, investment and environmental details.</p>
            </div>

            <div className="relative bg-white border border-[#d9ebe5] rounded-[18px] p-5.5 py-[22px] px-[15px] text-center shadow-[0_8px_22px_rgba(4,61,73,0.05)]">
              <div className="w-10 h-10 rounded-full mx-auto mb-2.75 bg-[#063b5c] text-white font-black flex items-center justify-center">4</div>
              <h3 className="text-[17px] font-bold mb-1.5 text-[#063b5c]">Submit application</h3>
              <p className="text-[13px] text-[#60736e]">File through the applicable state/UT consent mechanism.</p>
            </div>

            <div className="relative bg-white border border-[#d9ebe5] rounded-[18px] p-5.5 py-[22px] px-[15px] text-center shadow-[0_8px_22px_rgba(4,61,73,0.05)]">
              <div className="w-10 h-10 rounded-full mx-auto mb-2.75 bg-[#063b5c] text-white font-black flex items-center justify-center">5</div>
              <h3 className="text-[17px] font-bold mb-1.5 text-[#063b5c]">Scrutiny & queries</h3>
              <p className="text-[13px] text-[#60736e]">Respond accurately to clarifications, inspections or deficiencies.</p>
            </div>

            <div className="relative bg-white border border-[#d9ebe5] rounded-[18px] p-5.5 py-[22px] px-[15px] text-center shadow-[0_8px_22px_rgba(4,61,73,0.05)]">
              <div className="w-10 h-10 rounded-full mx-auto mb-2.75 bg-[#063b5c] text-white font-black flex items-center justify-center">6</div>
              <h3 className="text-[17px] font-bold mb-1.5 text-[#063b5c]">Operate & monitor</h3>
              <p className="text-[13px] text-[#60736e]">Follow consent conditions and track renewal/change requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Chart 1 */}
      <section className="w-full py-[54px] md:py-[70px] px-4 md:px-8 bg-white m-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[950px] mx-auto mb-[42px] text-center">
            <div className="uppercase tracking-[1.5px] text-[#078b64] text-[12px] font-black">
              Chart 1 • Percentage view
            </div>
            <h2 className="text-[#063b5c] text-[29px] md:text-[4vw] lg:text-[46px] leading-[1.15] my-[9px]">
              CTO compliance readiness overview
            </h2>
            <p className="text-[#60736e] text-[17px]">
              This chart groups the key areas a business should review before applying for Consent to Operate or starting renewal planning.
            </p>
          </div>

          <div className="grid grid-cols-1">
            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-[18px]">
                Chart 1: CTO readiness areas with illustrative percentages
              </h3>
              
              <div className="grid gap-[15px] mt-[18px]">
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_52px] gap-3 items-center">
                  <div className="font-bold text-[#365950] text-[14px]">Applicability review</div>
                  <div className="h-[18px] bg-[#e7f2ef] rounded-full overflow-hidden relative w-full">
                    <div className="h-full bg-gradient-to-r from-[#078b64] to-[#087fb5] rounded-full w-[92%]" />
                  </div>
                  <div className="font-black text-[#063b5c] text-[14px] text-right md:text-right">92%</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_52px] gap-3 items-center">
                  <div className="font-bold text-[#365950] text-[14px]">Document control</div>
                  <div className="h-[18px] bg-[#e7f2ef] rounded-full overflow-hidden relative w-full">
                    <div className="h-full bg-gradient-to-r from-[#078b64] to-[#087fb5] rounded-full w-[84%]" />
                  </div>
                  <div className="font-black text-[#063b5c] text-[14px] text-right md:text-right">84%</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_52px] gap-3 items-center">
                  <div className="font-bold text-[#365950] text-[14px]">Pollution controls</div>
                  <div className="h-[18px] bg-[#e7f2ef] rounded-full overflow-hidden relative w-full">
                    <div className="h-full bg-gradient-to-r from-[#078b64] to-[#087fb5] rounded-full w-[88%]" />
                  </div>
                  <div className="font-black text-[#063b5c] text-[14px] text-right md:text-right">88%</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_52px] gap-3 items-center">
                  <div className="font-bold text-[#365950] text-[14px]">Application follow-up</div>
                  <div className="h-[18px] bg-[#e7f2ef] rounded-full overflow-hidden relative w-full">
                    <div className="h-full bg-gradient-to-r from-[#078b64] to-[#087fb5] rounded-full w-[76%]" />
                  </div>
                  <div className="font-black text-[#063b5c] text-[14px] text-right md:text-right">76%</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_52px] gap-3 items-center">
                  <div className="font-bold text-[#365950] text-[14px]">Renewal monitoring</div>
                  <div className="h-[18px] bg-[#e7f2ef] rounded-full overflow-hidden relative w-full">
                    <div className="h-full bg-gradient-to-r from-[#078b64] to-[#087fb5] rounded-full w-[68%]" />
                  </div>
                  <div className="font-black text-[#063b5c] text-[14px] text-right md:text-right">68%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Chart 2 */}
      <section className="w-full py-[54px] md:py-[70px] px-4 md:px-8 bg-[#eef8fc] m-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[950px] mx-auto mb-[42px] text-center">
            <div className="uppercase tracking-[1.5px] text-[#078b64] text-[12px] font-black">
              Chart 2
            </div>
            <h2 className="text-[#063b5c] text-[29px] md:text-[4vw] lg:text-[46px] leading-[1.15] my-[9px]">
              What CTO approval typically covers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#e8f4fb] text-[#087fb5]">
                🌫️
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Air emissions</h3>
              <p className="text-[#60736e]">Review the pollution controls, stacks, monitoring and reporting requirements connected with emissions.</p>
            </div>

            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#e4f7ef] text-[#078b64]">
                💧
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Water & effluent</h3>
              <p className="text-[#60736e]">Check effluent handling, treatment systems, discharge limits and water-related conditions in the consent.</p>
            </div>

            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#ebf0fb] text-[#063b5c]">
                ♻️
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Waste handling</h3>
              <p className="text-[#60736e]">Track waste storage, segregation, movement, records and any additional authorization linked to the activity.</p>
            </div>

            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#e4f7ef] text-[#078b64]">
                🗂️
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Records & renewal</h3>
              <p className="text-[#60736e]">Keep consent copies, inspection replies, validity dates and renewal documents organized in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Common Mistakes */}
      <section className="w-full py-[54px] md:py-[70px] px-4 md:px-8 bg-white m-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[950px] mx-auto mb-[42px] text-center">
            <div className="uppercase tracking-[1.5px] text-[#078b64] text-[12px] font-black">
              Common Mistakes
            </div>
            <h2 className="text-[#063b5c] text-[29px] md:text-[4vw] lg:text-[46px] leading-[1.15] my-[9px]">
              What businesses should avoid
            </h2>
            <p className="text-[#60736e] text-[17px]">
              Small documentation or planning gaps can create avoidable queries and delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#ebf0fb] text-[#063b5c]">
                ⚠️
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Wrong applicability assumption</h3>
              <p className="text-[#60736e]">Using a generic internet checklist without checking the current state and activity-specific requirements.</p>
            </div>

            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#e8f4fb] text-[#087fb5]">
                📉
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Inconsistent records</h3>
              <p className="text-[#60736e]">Different capacity, address, process or investment figures across documents can create clarification requirements.</p>
            </div>

            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#e4f7ef] text-[#078b64]">
                ⏳
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Late renewal planning</h3>
              <p className="text-[#60736e]">Waiting until expiry is close can leave little time to resolve deficiencies or update records.</p>
            </div>

            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#e4f7ef] text-[#078b64]">
                🔁
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Ignoring process changes</h3>
              <p className="text-[#60736e]">Adding machinery, increasing capacity or changing raw materials without checking consent implications can create compliance risk.</p>
            </div>

            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#e8f4fb] text-[#087fb5]">
                🗃️
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Poor document control</h3>
              <p className="text-[#60736e]">Not retaining the submitted application, approval, conditions and authority communication makes future audits harder.</p>
            </div>

            <div className="bg-white border border-[#d9ebe5] rounded-[20px] p-[25px] shadow-[0_14px_38px_rgba(4,61,73,0.08)]">
              <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[24px] bg-[#ebf0fb] text-[#063b5c]">
                🚫
              </div>
              <h3 className="text-[#063b5c] text-[21px] font-bold mt-2.5 mb-2">Confusing CTO with every approval</h3>
              <p className="text-[#60736e]">CTO does not automatically replace separate registrations, authorizations, waste permissions, local approvals or other environmental requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Quick Reference Table */}
      <section className="w-full py-[54px] md:py-[70px] px-4 md:px-8 bg-[#eaf8f2] m-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[950px] mx-auto mb-[42px] text-center">
            <div className="uppercase tracking-[1.5px] text-[#078b64] text-[12px] font-black">
              Quick Reference
            </div>
            <h2 className="text-[#063b5c] text-[29px] md:text-[4vw] lg:text-[46px] leading-[1.15] my-[9px]">
              CTO planning table
            </h2>
            <p className="text-[#60736e] text-[17px]">
              Use this table to decide what to review before beginning an application or renewal.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[18px] shadow-[0_14px_38px_rgba(4,61,73,0.08)] bg-white">
            <table className="w-full border-collapse min-w-[760px]">
              <thead>
                <tr>
                  <th className="bg-[#063b5c] text-white text-left p-[15px]">Area</th>
                  <th className="bg-[#063b5c] text-white text-left p-[15px]">What to review</th>
                  <th className="bg-[#063b5c] text-white text-left p-[15px]">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#f5fcf9] transition-colors">
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top font-bold">Activity</td>
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top">Nature of manufacturing, processing, recycling or service activity</td>
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top">Determines the relevant consent pathway and conditions.</td>
                </tr>
                <tr className="hover:bg-[#f5fcf9] transition-colors">
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top font-bold">Location</td>
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top">State/UT, industrial area and site details</td>
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top">Authority procedures and local requirements can differ.</td>
                </tr>
                <tr className="hover:bg-[#f5fcf9] transition-colors">
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top font-bold">Pollution profile</td>
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top">Air emissions, water use/effluent, waste generation and control systems</td>
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top">Supports assessment of applicable environmental controls.</td>
                </tr>
                <tr className="hover:bg-[#f5fcf9] transition-colors">
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top font-bold">Documents</td>
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top">Site, process, company, investment and environmental records</td>
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top">Improves application consistency and reduces avoidable queries.</td>
                </tr>
                <tr className="hover:bg-[#f5fcf9] transition-colors">
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top font-bold">Consent order</td>
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top">Validity, limits, conditions and monitoring obligations</td>
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top">Defines what the approved operation must maintain.</td>
                </tr>
                <tr className="hover:bg-[#f5fcf9] transition-colors">
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top font-bold">Changes</td>
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top">Capacity, machinery, raw materials, process or site changes</td>
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top">May require prior approval, amendment or fresh consent depending on the applicable framework.</td>
                </tr>
                <tr className="hover:bg-[#f5fcf9] transition-colors">
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top font-bold">Renewal</td>
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top">Expiry date and authority-specific renewal window</td>
                  <td className="p-[14px_15px] border-b border-[#e5efeb] text-[#4d6660] vertical-top">Helps prevent last-minute compliance pressure.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section className="w-full py-[54px] md:py-[70px] px-4 md:px-8 bg-white m-0" id="faq">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[950px] mx-auto mb-[42px] text-center">
            <div className="uppercase tracking-[1.5px] text-[#078b64] text-[12px] font-black">
              FAQ
            </div>
            <h2 className="text-[#063b5c] text-[29px] md:text-[4vw] lg:text-[46px] leading-[1.15] my-[9px]">
              Frequently asked questions about CTO
            </h2>
            <p className="text-[#60736e] text-[17px]">
              Clear answers for businesses that are new to Consent to Operate.
            </p>
          </div>

          <div className="max-w-[1050px] mx-auto">
            {/* FAQ Item 1 */}
            <div className={`bg-white border border-[#d9ebe5] rounded-[15px] overflow-hidden mb-[12px] ${openFaq === 0 ? 'active' : ''}`}>
              <div 
                className="cursor-pointer p-[18px_22px] font-extrabold text-[#063b5c] flex justify-between items-center"
                onClick={() => toggleFaq(0)}
              >
                What does Consent to Operate mean?
                <span className={`transition-transform duration-200 text-[#078b64] text-[25px] ${openFaq === 0 ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openFaq === 0 && (
                <div className="px-[22px] pb-[20px] text-[#5a6f69]">
                  Consent to Operate is an environmental consent for an applicable facility to operate subject to conditions prescribed by the competent pollution-control authority.
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className={`bg-white border border-[#d9ebe5] rounded-[15px] overflow-hidden mb-[12px] ${openFaq === 1 ? 'active' : ''}`}>
              <div 
                className="cursor-pointer p-[18px_22px] font-extrabold text-[#063b5c] flex justify-between items-center"
                onClick={() => toggleFaq(1)}
              >
                Is CTO the same as registration?
                <span className={`transition-transform duration-200 text-[#078b64] text-[25px] ${openFaq === 1 ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openFaq === 1 && (
                <div className="px-[22px] pb-[20px] text-[#5a6f69]">
                  No. CTO is an operational environmental consent. A business may also need separate registrations, authorizations or permissions depending on its activity and location.
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className={`bg-white border border-[#d9ebe5] rounded-[15px] overflow-hidden mb-[12px] ${openFaq === 2 ? 'active' : ''}`}>
              <div 
                className="cursor-pointer p-[18px_22px] font-extrabold text-[#063b5c] flex justify-between items-center"
                onClick={() => toggleFaq(2)}
              >
                Is CTO applicable to every business?
                <span className={`transition-transform duration-200 text-[#078b64] text-[25px] ${openFaq === 2 ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openFaq === 2 && (
                <div className="px-[22px] pb-[20px] text-[#5a6f69]">
                  No. Applicability depends on the activity, pollution potential, jurisdiction and the exemptions or categories under the current framework. The relevant SPCB/PCC should be checked.
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className={`bg-white border border-[#d9ebe5] rounded-[15px] overflow-hidden mb-[12px] ${openFaq === 3 ? 'active' : ''}`}>
              <div 
                className="cursor-pointer p-[18px_22px] font-extrabold text-[#063b5c] flex justify-between items-center"
                onClick={() => toggleFaq(3)}
              >
                What is the difference between CTE and CTO?
                <span className={`transition-transform duration-200 text-[#078b64] text-[25px] ${openFaq === 3 ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openFaq === 3 && (
                <div className="px-[22px] pb-[20px] text-[#5a6f69]">
                  CTE is generally associated with establishing a facility or making certain expansions/additions, while CTO concerns operation under approved environmental conditions. Exact requirements vary by applicable rules.
                </div>
              )}
            </div>

            {/* FAQ Item 5 */}
            <div className={`bg-white border border-[#d9ebe5] rounded-[15px] overflow-hidden mb-[12px] ${openFaq === 4 ? 'active' : ''}`}>
              <div 
                className="cursor-pointer p-[18px_22px] font-extrabold text-[#063b5c] flex justify-between items-center"
                onClick={() => toggleFaq(4)}
              >
                Can a CTO be renewed?
                <span className={`transition-transform duration-200 text-[#078b64] text-[25px] ${openFaq === 4 ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openFaq === 4 && (
                <div className="px-[22px] pb-[20px] text-[#5a6f69]">
                  Consent validity and renewal procedures depend on the applicable authority and category. Businesses should track the expiry date and current renewal requirements well in advance.
                </div>
              )}
            </div>

            {/* FAQ Item 6 */}
            <div className={`bg-white border border-[#d9ebe5] rounded-[15px] overflow-hidden mb-[12px] ${openFaq === 5 ? 'active' : ''}`}>
              <div 
                className="cursor-pointer p-[18px_22px] font-extrabold text-[#063b5c] flex justify-between items-center"
                onClick={() => toggleFaq(5)}
              >
                What if the business changes its process or capacity?
                <span className={`transition-transform duration-200 text-[#078b64] text-[25px] ${openFaq === 5 ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openFaq === 5 && (
                <div className="px-[22px] pb-[20px] text-[#5a6f69]">
                  Do not assume the existing consent automatically covers a material change. Check whether an amendment, revised consent, prior approval or another application is required before implementing the change.
                </div>
              )}
            </div>

            {/* FAQ Item 7 */}
            <div className={`bg-white border border-[#d9ebe5] rounded-[15px] overflow-hidden mb-[12px] ${openFaq === 6 ? 'active' : ''}`}>
              <div 
                className="cursor-pointer p-[18px_22px] font-extrabold text-[#063b5c] flex justify-between items-center"
                onClick={() => toggleFaq(6)}
              >
                Does CTO cover waste-management compliance?
                <span className={`transition-transform duration-200 text-[#078b64] text-[25px] ${openFaq === 6 ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openFaq === 6 && (
                <div className="px-[22px] pb-[20px] text-[#5a6f69]">
                  Not necessarily. Waste-specific rules can create separate authorization, registration, reporting or recordkeeping obligations. CTO should be treated as one part of the overall compliance framework.
                </div>
              )}
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

    </div>
  );
}