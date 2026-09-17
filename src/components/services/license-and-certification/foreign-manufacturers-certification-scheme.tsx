import StickyContactForm from "@/components/StickyContactForm";
import React from "react";

export default function FmcsCertificationPage(): JSX.Element {
  return (
    <div className="w-full min-h-screen md:mt-[80px] mt-12 m-0 p-0 box-border bg-[#f5f7fb] bg-[radial-gradient(circle_at_top_left,rgba(11,107,83,0.10),transparent_26%),radial-gradient(circle_at_top_right,rgba(23,74,122,0.10),transparent_28%),#f5f7fb] font-sans text-[#102033] leading-[1.68] scroll-smooth">
      <main className="w-full m-0 p-0">
        <div className="flex flex-col lg:flex-row gap-2 items-stretch">
          <div>
            {/* Hero Section */}
            <section className="w-full pt-6 md:pt-14 pb-6 px-0 mx-0">
              <div className="w-full mx-0 px-0">
                <div className="relative overflow-hidden text-white rounded-none sm:rounded-[30px] p-6 sm:p-10 md:p-[42px] bg-[linear-gradient(135deg,#081a2b_0%,#11395a_52%,#0b6b53_100%)] shadow-[0_18px_48px_rgba(16,32,51,0.08)] after:content-[''] after:absolute after:-right-[120px] after:-bottom-[150px] after:w-[340px] after:h-[340px] after:rounded-full after:bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_66%)] after:pointer-events-none">
                  <div className="flex flex-wrap gap-2.5 mb-[18px]">
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/15 text-[0.92rem] backdrop-blur-md">
                      BIS FMCS
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/15 text-[0.92rem] backdrop-blur-md">
                      Foreign manufacturers
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/15 text-[0.92rem] backdrop-blur-md">
                      Indian market entry
                    </span>
                  </div>
                  <h1 className="m-0 text-[clamp(2rem,4vw,3.45rem)] leading-[1.08] tracking-[-0.03em] font-bold">
                    Compliance Support & Certification: Foreign Manufacturer
                    Certification Scheme (FMCS)
                  </h1>
                  <p className="mt-[18px] mb-0 text-white/90 text-[1.05rem]">
                    <strong>
                      Expand into the Indian market confidently with
                      comprehensive FMCS certification and compliance support
                    </strong>
                    . This guide explains the BIS FMCS route, why it matters for
                    foreign manufacturers, how it supports product conformity
                    for the Indian market, and how EPR Nexuss can help with a
                    smoother compliance journey.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-[24px]">
                    <a
                      className="inline-flex items-center justify-center px border border-transparent rounded-[14px] font-extrabold transition-all duration-200 ease-in-out hover:-translate-y-[1px] bg-white text-[#081a2b] px-[18px] py-[13px]"
                      href="#contact"
                    >
                      Contact EPR Nexuss
                    </a>
                    <a
                      className="inline-flex items-center justify-center border border-white/25 rounded-[14px] font-extrabold transition-all duration-200 ease-in-out hover:-translate-y-[1px] bg-transparent text-white px-[18px] py-[13px]"
                      href="#faq"
                    >
                      Read FAQs
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 1: Overview */}
            <section className="w-full py-4 md:py-6 px-0 mx-0">
              <div className="w-full mx-0 px-0">
                <h2 className="m-0 mb-2.5 text-[clamp(1.45rem,2.6vw,2.15rem)] leading-[1.15] tracking-[-0.02em] font-bold">
                  BIS - FMCS
                </h2>
                <p className="m-0 mb-[18px] text-[#5d6b7d]">
                  BIS says FMCS has been operating since 2000 under the BIS Act,
                  2016 and the Conformity Assessment Regulations, 2018. Under
                  this scheme, BIS grants a licence to a foreign manufacturer to
                  use the Standard Mark on a product that conforms to the
                  relevant Indian Standard. BIS also notes that FMCS applies to
                  products for which an Indian Standard exists and is amenable
                  to certification, except Electronics &amp; IT goods notified
                  under CRS. The licence is issued by the Foreign Manufacturers
                  Certification Department (FMCD) at BIS Headquarters in New
                  Delhi, and applications can be filed online through the
                  Manakonline portal.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
                  <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6 border-t-5 border-t-[#0b6b53]">
                    <p className="m-0 mb-[6px] font-black text-[1.9rem] tracking-[-0.03em] text-[#174a7a]">
                      Since 2000
                    </p>
                    <p className="m-0 text-[#5d6b7d]">
                      BIS has operated FMCS since the year 2000.
                    </p>
                  </article>
                  <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6 border-t-5 border-t-[#0b6b53]">
                    <p className="m-0 mb-[6px] font-black text-[1.9rem] tracking-[-0.03em] text-[#174a7a]">
                      FMCD
                    </p>
                    <p className="m-0 text-[#5d6b7d]">
                      Licences are granted by BIS’s Foreign Manufacturers
                      Certification Department in New Delhi.
                    </p>
                  </article>
                  <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6 border-t-5 border-t-[#0b6b53]">
                    <p className="m-0 mb-[6px] font-black text-[1.9rem] tracking-[-0.03em] text-[#174a7a]">
                      AIR
                    </p>
                    <p className="m-0 text-[#5d6b7d]">
                      A foreign manufacturer must nominate an Authorized Indian
                      Representative for compliance support.
                    </p>
                  </article>
                  <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6 border-t-5 border-t-[#0b6b53]">
                    <p className="m-0 mb-[6px] font-black text-[1.9rem] tracking-[-0.03em] text-[#174a7a]">
                      Manakonline
                    </p>
                    <p className="m-0 text-[#5d6b7d]">
                      Applications can be submitted online through BIS’s portal.
                    </p>
                  </article>
                </div>
              </div>
            </section>

            {/* Section 2: Value & Support */}
            <section className="w-full py-4 md:py-6 px-0 mx-0">
              <div className="w-full mx-0 px-0 grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
                <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                    What FMCS does
                  </span>
                  <h2 className="m-0 mb-2.5 text-[clamp(1.45rem,2.6vw,2.15rem)] leading-[1.15] tracking-[-0.02em] font-bold">
                    How FMCS helps a foreign manufacturer enter India with
                    confidence
                  </h2>
                  <p className="m-0 text-[#5d6b7d]">
                    FMCS is more than a formality. It is a structured way to
                    show the Indian market that a foreign-made product conforms
                    to the relevant Indian Standard and can carry BIS’s Standard
                    Mark. That matters because trust is often the real barrier
                    to entry: distributors want certainty, buyers want proof,
                    and regulators want compliance.
                  </p>
                  <ul className="mt-[14px] mb-0 p-0 list-none">
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      It converts a foreign product into a standards-backed
                      product for India.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      It supports stronger buyer trust and market acceptance.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      It gives the manufacturer a formal compliance path instead
                      of an informal entry attempt.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      It reduces commercial uncertainty when selling into a
                      regulated market.
                    </li>
                  </ul>
                </article>

                <article className="bg-gradient-to-br from-[rgba(11,107,83,0.08)] to-[rgba(23,74,122,0.07)] border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                    Where it fits
                  </span>
                  <h2 className="m-0 mb-2.5 text-[clamp(1.45rem,2.6vw,2.15rem)] leading-[1.15] tracking-[-0.02em] font-bold">
                    The practical value of comprehensive compliance support
                  </h2>
                  <p className="m-0 text-[#5d6b7d]">
                    A foreign manufacturer usually needs more than a licence
                    application. It needs standard mapping, document readiness,
                    lab coordination, AIR nomination support, and follow-up
                    discipline until the file is complete.
                  </p>
                  <ul className="mt-[14px] mb-0 p-0 list-none">
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Standard identification and product mapping.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Preparation of the application and supporting documents.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Coordination with Indian compliance requirements and the
                      AIR role.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Ongoing follow-up until the licence is granted and
                      operational.
                    </li>
                  </ul>
                </article>
              </div>
            </section>

            {/* Section 3: Steps */}
            <section className="w-full py-4 md:py-6 px-0 mx-0">
              <div className="w-full mx-0 px-0">
                <h2 className="m-0 mb-2.5 text-[clamp(1.45rem,2.6vw,2.15rem)] leading-[1.15] tracking-[-0.02em] font-bold">
                  Key FMCS steps:
                </h2>
                <p className="m-0 mb-[18px] text-[#5d6b7d]">
                  The process becomes easier when the business understands the
                  sequence before it starts.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px] [counter-reset:step]">
                  <article className="relative bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6 pl-[62px] sm:pl-[72px] min-h-[54px] before:[counter-increment:step] before:content-[counter(step)] before:absolute before:left-5 before:top-5 sm:before:top-6 before:w-[38px] sm:before:w-[42px] before:h-[38px] sm:before:h-[42px] before:rounded-[12px] sm:before:rounded-[14px] before:grid before:place-items-center before:bg-[#0b6b53] before:text-white before:font-black">
                    <h3 className="m-0 mb-[10px] text-[1.12rem] leading-[1.35] font-bold">
                      Confirm the correct Indian Standard
                    </h3>
                    <p className="m-0 text-[#5d6b7d]">
                      The product must be matched to the relevant Indian
                      Standard. If the wrong standard is chosen, the rest of the
                      file becomes unstable.
                    </p>
                  </article>

                  <article className="relative bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6 pl-[62px] sm:pl-[72px] min-h-[54px] before:[counter-increment:step] before:content-[counter(step)] before:absolute before:left-5 before:top-5 sm:before:top-6 before:w-[38px] sm:before:w-[42px] before:h-[38px] sm:before:h-[42px] before:rounded-[12px] sm:before:rounded-[14px] before:grid before:place-items-center before:bg-[#0b6b53] before:text-white before:font-black">
                    <h3 className="m-0 mb-[10px] text-[1.12rem] leading-[1.35] font-bold">
                      Nominate an Authorized Indian Representative
                    </h3>
                    <p className="m-0 text-[#5d6b7d]">
                      BIS requires an AIR. The AIR is the India-based compliance
                      contact and takes responsibility for the scheme
                      obligations.
                    </p>
                  </article>

                  <article className="relative bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6 pl-[62px] sm:pl-[72px] min-h-[54px] before:[counter-increment:step] before:content-[counter(step)] before:absolute before:left-5 before:top-5 sm:before:top-6 before:w-[38px] sm:before:w-[42px] before:h-[38px] sm:before:h-[42px] before:rounded-[12px] sm:before:rounded-[14px] before:grid before:place-items-center before:bg-[#0b6b53] before:text-white before:font-black">
                    <h3 className="m-0 mb-[10px] text-[1.12rem] leading-[1.35] font-bold">
                      Prepare testing and documentation
                    </h3>
                    <p className="m-0 text-[#5d6b7d]">
                      The product, reports, declarations, and factory-related
                      details must be arranged in a format BIS can review
                      efficiently.
                    </p>
                  </article>

                  <article className="relative bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6 pl-[62px] sm:pl-[72px] min-h-[54px] before:[counter-increment:step] before:content-[counter(step)] before:absolute before:left-5 before:top-5 sm:before:top-6 before:w-[38px] sm:before:w-[42px] before:h-[38px] sm:before:h-[42px] before:rounded-[12px] sm:before:rounded-[14px] before:grid before:place-items-center before:bg-[#0b6b53] before:text-white before:font-black">
                    <h3 className="m-0 mb-[10px] text-[1.12rem] leading-[1.35] font-bold">
                      Apply, respond, and secure the licence
                    </h3>
                    <p className="m-0 text-[#5d6b7d]">
                      Once the application is filed, the process often needs
                      clarifications, corrections, and follow-up until the
                      licence is ready for use.
                    </p>
                  </article>
                </div>
              </div>
            </section>

            {/* Section 4: Pain Points & Solutions */}
            <section className="w-full py-4 md:py-6 px-0 mx-0">
              <div className="w-full mx-0 px-0 grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
                <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                    Business pain points
                  </span>
                  <h2 className="m-0 mb-2.5 text-[clamp(1.45rem,2.6vw,2.15rem)] leading-[1.15] tracking-[-0.02em] font-bold">
                    Issues businesses face when entering India from another
                    industry
                  </h2>
                  <p className="m-0 text-[#5d6b7d]">
                    When a business moves from a different industry into a
                    regulated product category or an export-oriented setup,
                    compliance is often the hardest part. The team may already
                    understand operations, but it may not understand how product
                    standards, licensing, and certification overlap.
                  </p>
                  <ul className="mt-[14px] mb-0 p-0 list-none">
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Unclear whether the product needs FMCS, BIS certification,
                      or another route.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Difficulty mapping products to the correct Indian Standard
                      and testing pathway.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Delays due to missing documents, weak applications, or
                      wrong sequence of work.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Budget loss from repeat corrections and avoidable rework.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Stress caused by mixed advice from different consultants
                      and service providers.
                    </li>
                  </ul>
                </article>

                <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                    EPR Nexuss support
                  </span>
                  <h2 className="m-0 mb-2.5 text-[clamp(1.45rem,2.6vw,2.15rem)] leading-[1.15] tracking-[-0.02em] font-bold">
                    How EPR Nexuss helps clients solve those issues
                  </h2>
                  <p className="m-0 text-[#5d6b7d]">
                    EPR Nexuss helps by making the compliance route workable
                    rather than theoretical. The objective is simple: reduce
                    friction, reduce waste, and make the client market-ready
                    with a clearer document trail.
                  </p>
                  <ul className="mt-[14px] mb-0 p-0 list-none">
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Maps the product to the correct compliance requirement.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Builds a practical checklist before filing begins.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Coordinates the process so time is not lost between labs,
                      files, and follow-up.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Helps manage corrections and clarifications until the
                      application stabilizes.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Supports the client from planning through launch.
                    </li>
                  </ul>
                </article>
              </div>
            </section>

            {/* Section 5: Benefits */}
            <section className="w-full py-4 md:py-6 px-0 mx-0">
              <div className="w-full mx-0 px-0 grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
                <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                    Save money and time
                  </span>
                  <h2 className="m-0 mb-2.5 text-[clamp(1.45rem,2.6vw,2.15rem)] leading-[1.15] tracking-[-0.02em] font-bold">
                    How EPR Nexuss helps clients save money and time
                  </h2>
                  <p className="m-0 text-[#5d6b7d]">
                    The expensive part of compliance is usually not the official
                    fee. It is the cost of delay, rework, retesting, and
                    follow-up confusion. A structured consultant reduces those
                    hidden costs.
                  </p>
                  <ul className="mt-[14px] mb-0 p-0 list-none">
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Fewer mistakes mean fewer resubmissions.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Better planning means fewer lab and document cycles.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Cleaner communication means less back-and-forth.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Earlier readiness can mean an earlier commercial start.
                    </li>
                  </ul>
                </article>

                <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                    Why others fall short
                  </span>
                  <h2 className="m-0 mb-2.5 text-[clamp(1.45rem,2.6vw,2.15rem)] leading-[1.15] tracking-[-0.02em] font-bold">
                    Why some consulting support fails in licensing and
                    certification
                  </h2>
                  <p className="m-0 text-[#5d6b7d]">
                    Many providers stop after giving a basic checklist. That is
                    not enough when the business needs execution, timing, and
                    accountability.
                  </p>
                  <ul className="mt-[14px] mb-0 p-0 list-none">
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      They explain the rule but do not manage the workflow.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      They miss product-specific nuances that trigger delays.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      They leave the client to handle corrections alone.
                    </li>
                    <li className="relative pl-[26px] my-2.5 text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      They do not coordinate the moving parts needed for a
                      successful filing.
                    </li>
                  </ul>
                </article>
              </div>
            </section>

            {/* Section 6: Required Documents */}
            <section className="w-full py-4 md:py-6 px-0 mx-0">
              <div className="w-full mx-0 px-0">
                <h2 className="m-0 mb-2.5 text-[clamp(1.45rem,2.6vw,2.15rem)] leading-[1.15] tracking-[-0.02em] font-bold">
                  Documents required for business registration, licensing &amp;
                  certification
                </h2>
                <p className="m-0 mb-[18px] text-[#5d6b7d]">
                  The exact list depends on the product and manufacturing
                  location, but the following documents are typically needed for
                  FMCS readiness and licence processing.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                  <div className="bg-white border border-[#d9e3ef] rounded-[18px] p-[18px]">
                    <strong className="block mb-[6px] text-[#174a7a]">
                      Company registration records
                    </strong>
                    <span className="text-[#5d6b7d] text-[0.92rem]">
                      Certificate of incorporation, partnership deed, or
                      business registration proof, depending on the legal
                      structure.
                    </span>
                  </div>
                  <div className="bg-white border border-[#d9e3ef] rounded-[18px] p-[18px]">
                    <strong className="block mb-[6px] text-[#174a7a]">
                      Authorized signatory documents
                    </strong>
                    <span className="text-[#5d6b7d] text-[0.92rem]">
                      Board resolution, power of attorney, and identity/address
                      proof for the person signing and handling compliance.
                    </span>
                  </div>
                  <div className="bg-white border border-[#d9e3ef] rounded-[18px] p-[18px]">
                    <strong className="block mb-[6px] text-[#174a7a]">
                      Foreign manufacturer profile
                    </strong>
                    <span className="text-[#5d6b7d] text-[0.92rem]">
                      Manufacturing premises details, company profile, contact
                      details, and manufacturing authorization records.
                    </span>
                  </div>
                  <div className="bg-white border border-[#d9e3ef] rounded-[18px] p-[18px]">
                    <strong className="block mb-[6px] text-[#174a7a]">
                      AIR nomination
                    </strong>
                    <span className="text-[#5d6b7d] text-[0.92rem]">
                      Nomination form and AIR consent, because BIS requires an
                      Authorized Indian Representative for FMCS.
                    </span>
                  </div>
                  <div className="bg-white border border-[#d9e3ef] rounded-[18px] p-[18px]">
                    <strong className="block mb-[6px] text-[#174a7a]">
                      Product technical file
                    </strong>
                    <span className="text-[#5d6b7d] text-[0.92rem]">
                      Product description, model list, specifications, drawings,
                      and the correct Indian Standard reference.
                    </span>
                  </div>
                  <div className="bg-white border border-[#d9e3ef] rounded-[18px] p-[18px]">
                    <strong className="block mb-[6px] text-[#174a7a]">
                      Testing documents
                    </strong>
                    <span className="text-[#5d6b7d] text-[0.92rem]">
                      Indian Standard test report, sample details, and any
                      supporting technical evidence required by BIS.
                    </span>
                  </div>
                  <div className="bg-white border border-[#d9e3ef] rounded-[18px] p-[18px]">
                    <strong className="block mb-[6px] text-[#174a7a]">
                      Marking and label artwork
                    </strong>
                    <span className="text-[#5d6b7d] text-[0.92rem]">
                      Product marking, label layout, Standard Mark placement,
                      and required declarations that must match the application.
                    </span>
                  </div>
                  <div className="bg-white border border-[#d9e3ef] rounded-[18px] p-[18px]">
                    <strong className="block mb-[6px] text-[#174a7a]">
                      Quality-control documents
                    </strong>
                    <span className="text-[#5d6b7d] text-[0.92rem]">
                      Quality manual, in-process control plan, inspection
                      records, and any system documents that support compliance.
                    </span>
                  </div>
                </div>
                <p className="border-l-4 border-l-[#0b6b53] bg-white p-4 sm:p-[16px_18px] rounded-[16px] text-[#5d6b7d] shadow-[0_10px_24px_rgba(16,32,51,0.05)] text-[0.95rem] mt-[18px]">
                  BIS asks applicants to submit the prescribed form with the
                  necessary documentation, nominate an AIR, and ensure the
                  application is complete before filing. FMCS applications can
                  be submitted online through Manakonline, so filing mode and
                  document readiness should be checked before submission.
                </p>
              </div>
            </section>

            {/* Section 7: Consulting Gaps */}
            <section className="w-full py-4 md:py-6 px-0 mx-0">
              <div className="w-full mx-0 px-0">
                <h2 className="m-0 mb-2.5 text-[clamp(1.45rem,2.6vw,2.15rem)] leading-[1.15] tracking-[-0.02em] font-bold">
                  Why many consulting providers do not fully help in licensing
                  and certification
                </h2>
                <p className="m-0 mb-[18px] text-[#5d6b7d]">
                  A useful consultant should do more than pass on a checklist.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
                  <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                      Common gap
                    </span>
                    <h3 className="m-0 mb-[10px] text-[1.12rem] leading-[1.35] font-bold">
                      They explain the rule but do not manage the workflow
                    </h3>
                    <p className="m-0 text-[#5d6b7d]">
                      The client gets information, but not execution. That
                      usually leads to confusion later.
                    </p>
                  </article>

                  <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                      Common gap
                    </span>
                    <h3 className="m-0 mb-[10px] text-[1.12rem] leading-[1.35] font-bold">
                      They ignore product-specific details
                    </h3>
                    <p className="m-0 text-[#5d6b7d]">
                      Small mapping mistakes can create long delays when the
                      product is actually filed.
                    </p>
                  </article>

                  <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                      Common gap
                    </span>
                    <h3 className="m-0 mb-[10px] text-[1.12rem] leading-[1.35] font-bold">
                      They do not coordinate the moving parts
                    </h3>
                    <p className="m-0 text-[#5d6b7d]">
                      Testing, documentation, AIR nomination, and filing have to
                      work together.
                    </p>
                  </article>

                  <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-6">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                      Common gap
                    </span>
                    <h3 className="m-0 mb-[10px] text-[1.12rem] leading-[1.35] font-bold">
                      They disappear after submission
                    </h3>
                    <p className="m-0 text-[#5d6b7d]">
                      Real support continues through clarification, correction,
                      and completion.
                    </p>
                  </article>
                </div>
              </div>
            </section>

            {/* Section 8: FAQ */}
            <section className="w-full py-4 md:py-6 px-0 mx-0">
              <div className="w-full mx-0 px-0">
                <h2 className="m-0 mb-2.5 text-[clamp(1.45rem,2.6vw,2.15rem)] leading-[1.15] tracking-[-0.02em] font-bold">
                  Frequently asked questions
                </h2>
                <div className="space-y-[12px]" id="faq">
                  <details className="border border-[#d9e3ef] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_26px_rgba(16,32,51,0.05)] group">
                    <summary className="cursor-pointer font-extrabold list-none [&::-webkit-details-marker]:hidden">
                      What is FMCS?
                    </summary>
                    <div className="mt-[12px] text-[#5d6b7d]">
                      FMCS is BIS’s Foreign Manufacturers Certification Scheme.
                      It allows a foreign manufacturer to obtain a BIS licence
                      and use the Standard Mark on products that conform to the
                      relevant Indian Standard.
                    </div>
                  </details>

                  <details className="border border-[#d9e3ef] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_26px_rgba(16,32,51,0.05)] group">
                    <summary className="cursor-pointer font-extrabold list-none [&::-webkit-details-marker]:hidden">
                      Who can apply under FMCS?
                    </summary>
                    <div className="mt-[12px] text-[#5d6b7d]">
                      The foreign manufacturer applies under FMCS. BIS says the
                      importer cannot apply on behalf of the manufacturer under
                      this scheme.
                    </div>
                  </details>

                  <details className="border border-[#d9e3ef] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_26px_rgba(16,32,51,0.05)] group">
                    <summary className="cursor-pointer font-extrabold list-none [&::-webkit-details-marker]:hidden">
                      Why is an AIR required?
                    </summary>
                    <div className="mt-[12px] text-[#5d6b7d]">
                      BIS requires an Authorized Indian Representative in India
                      to handle compliance obligations and act as the local
                      contact for the licence. The AIR must be an Indian
                      resident and is responsible for the scheme terms.
                    </div>
                  </details>

                  <details className="border border-[#d9e3ef] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_26px_rgba(16,32,51,0.05)] group">
                    <summary className="cursor-pointer font-extrabold list-none [&::-webkit-details-marker]:hidden">
                      Does FMCS apply to electronics and IT goods?
                    </summary>
                    <div className="mt-[12px] text-[#5d6b7d]">
                      BIS says FMCS is applicable for products with an Indian
                      Standard except Electronics &amp; IT goods notified under
                      CRS.
                    </div>
                  </details>

                  <details className="border border-[#d9e3ef] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_26px_rgba(16,32,51,0.05)] group">
                    <summary className="cursor-pointer font-extrabold list-none [&::-webkit-details-marker]:hidden">
                      How does the application get filed?
                    </summary>
                    <div className="mt-[12px] text-[#5d6b7d]">
                      BIS says the application must be complete, include the
                      prescribed documents and AIR nomination, and can be filed
                      online through Manakonline. From 1 June 2026, only online
                      applications are accepted.
                    </div>
                  </details>

                  <details className="border border-[#d9e3ef] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_26px_rgba(16,32,51,0.05)] group">
                    <summary className="cursor-pointer font-extrabold list-none [&::-webkit-details-marker]:hidden">
                      Why does the business need to plan early?
                    </summary>
                    <div className="mt-[12px] text-[#5d6b7d]">
                      Because incomplete applications, wrong standard mapping,
                      and late document preparation can delay launch, increase
                      cost, and reduce market confidence.
                    </div>
                  </details>
                </div>
              </div>
            </section>

            {/* Section 9: Footer/Contact */}
            <section className="w-full py-4 md:py-6 px-0 mx-0" id="contact">
              <div className="w-full mx-0 px-0">
                <footer className="mt-[28px] mb-[40px] bg-[#081a2b] text-white rounded-none sm:rounded-[28px] p-7 shadow-[0_18px_48px_rgba(16,32,51,0.08)]">
                  <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[18px] items-start">
                    <div>
                      <h2 className="text-[clamp(1.45rem,2.6vw,2.15rem)] leading-[1.15] tracking-[-0.02em] font-bold text-white mb-2.5">
                        Contact us
                      </h2>
                      <p className="text-white/90">
                        Need support for FMCS certification, BIS licence
                        planning, or Indian market-entry compliance? EPR Nexuss
                        can help you turn the process into a structured and
                        confident launch path.
                      </p>
                      <p className="text-white/90">
                        Support for foreign manufacturers, business launch
                        teams, and regulated product projects.
                      </p>
                    </div>
                    <div>
                      <ul className="list-none p-0 mt-[14px] mb-0">
                        <li className="my-2 text-white/90">
                          <strong>Phone:</strong> +91 8796711793
                        </li>
                        <li className="my-2 text-white/90">
                          <strong>Landline:</strong> 0120-4605014
                        </li>
                        <li className="my-2 text-white/90">
                          <strong>Email:</strong> info@eprnexuss.com
                        </li>
                        <li className="my-2 text-white/90">
                          <strong>Address:</strong> H-73, No.107, Sector-63,
                          Noida
                        </li>
                      </ul>
                    </div>
                  </div>
                </footer>
              </div>
            </section>
          </div>
          <aside className="hidden lg:block shrink-0 w-[320px]">
            <div className="sticky top-[130px] px-2">
              <StickyContactForm />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
