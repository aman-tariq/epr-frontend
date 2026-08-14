import StickyContactForm from "@/components/StickyContactForm";
import React, { useState } from "react";

export default function BisIsiMark(): JSX.Element {
  const [faqOpen, setFaqOpen] = useState<{ [key: number]: boolean }>({});

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main className="w-full md:mt-[75px] mt-14 m-0 p-0 font-sans text-[#102033] bg-[radial-gradient(circle_at_top_left,rgba(11,107,83,0.10),transparent_26%),radial-gradient(circle_at_top_right,rgba(23,74,122,0.09),transparent_28%),#f5f7fb] leading-relaxed">
      <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        <div>
          {/* HERO SECTION */}
          <section className="w-full m-0 px-0 pt-[18px] sm:pt-[56px] pb-[24px]">
            <div className="w-full px-0 mx-0">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#081a2b] via-[#11395a] to-[#0b6b53] text-white rounded-none  p-6 sm:p-[42px] shadow-[0_18px_48px_rgba(16,32,51,0.08)]">
                {/* Background Accent Decorative Circle */}
                <div className="absolute -right-[130px] -bottom-[150px] w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_66%)] pointer-events-none" />

                <div className="flex flex-wrap gap-[10px] mb-[18px]">
                  <span className="inline-flex items-center gap-[8px] px-[12px] py-[8px] rounded-full bg-white/10 border border-white/15 text-[0.92rem] backdrop-blur-md">
                    BIS ISI Mark
                  </span>
                  <span className="inline-flex items-center gap-[8px] px-[12px] py-[8px] rounded-full bg-white/10 border border-white/15 text-[0.92rem] backdrop-blur-md">
                    Quality • Safety • Trust
                  </span>
                  <span className="inline-flex items-center gap-[8px] px-[12px] py-[8px] rounded-full bg-white/10 border border-white/15 text-[0.92rem] backdrop-blur-md">
                    Business registration support
                  </span>
                </div>

                <h1 className="m-0 text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] leading-[1.08] tracking-[-0.03em] max-w-[980px] font-extrabold">
                  BIS ISI Mark — Build Market Trust with Quality, Safety &
                  Product Excellence
                </h1>

                <p className="mt-[18px] mb-0 max-w-[980px] text-white/90 text-[1.05rem]">
                  <strong>
                    BIS ISI Mark for Trusted Quality and Market Trust
                  </strong>
                  . This article explains how ISI certification strengthens
                  brand credibility, protects buyers, and helps businesses
                  launch regulated products with less risk and more confidence.
                </p>

                <div className="flex flex-wrap gap-[12px] mt-[24px]">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-[18px] py-[13px] rounded-[14px] font-extrabold bg-white text-[#081a2b] border border-transparent hover:-translate-y-[1px] transition-transform duration-200"
                  >
                    Contact EPR Nexuss
                  </a>
                  <a
                    href="#faq"
                    className="inline-flex items-center justify-center px-[18px] py-[13px] rounded-[14px] font-extrabold bg-transparent text-white border border-white/25 hover:-translate-y-[1px] transition-transform duration-200"
                  >
                    Read FAQs
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: BIS and the ISI Mark */}
          <section className="w-full m-0 px-0 py-[18px] sm:py-[24px]">
            <div className="w-full px-0 mx-0">
              <h2 className="m-0 mb-[10px] text-[1.45rem] sm:text-[2.15rem] leading-[1.15] tracking-[-0.02em] font-bold">
                BIS and the ISI Mark
              </h2>
              <p className="m-0 mb-[18px] text-[#5d6b7d] max-w-[980px]">
                BIS is India’s national standards body. Its certification scheme
                is generally voluntary, but BIS also states that for certain
                products compliance becomes compulsory when the Central
                Government issues a notification for public interest, health,
                safety, environment, unfair trade practices, or national
                security. BIS’s current product certification pages group Scheme
                I, testing, surveillance, fees, and application guidance in one
                place.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
                <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] border-t-5 border-t-[#0b6b53]">
                  <p className="m-0 mb-[6px] font-black text-[1.9rem] tracking-[-0.03em] text-[#174a7a]">
                    Scheme I
                  </p>
                  <p className="m-0 text-[#5d6b7d]">
                    The ISI mark route is covered under Scheme I of BIS’s
                    conformity assessment framework./p&gt;
                  </p>
                </article>

                <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] border-t-5 border-t-[#0b6b53]">
                  <p className="m-0 mb-[6px] font-black text-[1.9rem] tracking-[-0.03em] text-[#174a7a]">
                    July 10, 2026
                  </p>
                  <p className="m-0 text-[#5d6b7d]">
                    The BIS Scheme I page shows a current update date of 10 July
                    2026.
                  </p>
                </article>

                <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] border-t-5 border-t-[#0b6b53]">
                  <p className="m-0 mb-[6px] font-black text-[1.9rem] tracking-[-0.03em] text-[#174a7a]">
                    Consumer trust
                  </p>
                  <p className="m-0 text-[#5d6b7d]">
                    The ISI mark is presented in industry guidance as a quality
                    signal that improves buyer confidence and market acceptance.
                  </p>
                </article>

                <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] border-t-5 border-t-[#0b6b53]">
                  <p className="m-0 mb-[6px] font-black text-[1.9rem] tracking-[-0.03em] text-[#174a7a]">
                    Live product list
                  </p>
                  <p className="m-0 text-[#5d6b7d]">
                    BIS’s compulsory certification list includes products such
                    as cement and household electrical appliances, and the list
                    is updated as notifications change.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* SECTION: Build market trust */}
          <section className="w-full m-0 px-0 py-[18px] sm:py-[24px]">
            <div className="w-full px-0 mx-0 grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
              <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                <span className="inline-block px-[10px] py-[6px] rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                  Why it matters
                </span>
                <h2 className="m-0 mb-[10px] text-[1.45rem] sm:text-[2.15rem] leading-[1.15] tracking-[-0.02em] font-bold">
                  Build market trust with ISI certification
                </h2>
                <p className="m-0 text-[#5d6b7d]">
                  The ISI Mark is more than a logo on packaging. For many
                  products, it is the most visible sign that the product has
                  gone through testing, factory-level review, and formal
                  conformity checks. In business terms, that means the mark
                  supports credibility at the point of sale, in procurement
                  discussions, and in distributor conversations.
                </p>
                <ul className="m-0 mt-[14px] p-0 list-none">
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    It signals product conformity to the applicable Indian
                    Standard.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    It improves buyer confidence in safety and performance.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    It helps businesses present a stronger, more defensible
                    compliance story.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    It reduces confusion for customers comparing certified and
                    uncertified products.
                  </li>
                </ul>
              </article>

              <article className="bg-gradient-to-br from-[#0b6b53]/8 to-[#174a7a]/7 border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                <span className="inline-block px-[10px] py-[6px] rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                  Quality + safety
                </span>
                <h2 className="m-0 mb-[10px] text-[1.45rem] sm:text-[2.15rem] leading-[1.15] tracking-[-0.02em] font-bold">
                  A distinguished mark of quality, safety, and product
                  excellence
                </h2>
                <p className="m-0 text-[#5d6b7d]">
                  For manufacturers, importers, and brand owners, the ISI Mark
                  works like a shorthand for disciplined production. It tells
                  the market that the product has passed through a formal
                  certification route and is backed by standard-based
                  verification, which is why it is widely used as a quality and
                  safety cue in business-facing sales conversations.
                </p>
                <ul className="m-0 mt-[14px] p-0 list-none">
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Quality: supports consistency from batch to batch.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Safety: helps reduce the chance of product-related failure
                    or harm.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Excellence: shows the product has passed a formal conformity
                    pathway.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* SECTION: STEPS */}
          <section className="w-full m-0 px-0 py-[18px] sm:py-[24px]">
            <div className="w-full px-0 mx-0">
              <h2 className="m-0 mb-[10px] text-[1.45rem] sm:text-[2.15rem] leading-[1.15] tracking-[-0.02em] font-bold">
                What businesses usually need to do for ISI compliance
              </h2>
              <p className="m-0 mb-[18px] text-[#5d6b7d] max-w-[980px]">
                A smoother launch usually depends on sequence: identify the
                standard, test the product, prepare the file, submit the
                application, and handle inspection and follow-up without
                avoidable rework. That sequence is consistent with the
                BIS-linked guidance published by compliance advisers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] [counter-reset:step]">
                <article className="relative bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] pl-[62px] sm:pl-[72px] min-h-[54px] before:[counter-increment:step] before:content-[counter(step)] before:absolute before:left-4 sm:before:left-[24px] before:top-5 sm:before:top-[24px] before:w-[38px] sm:before:w-[42px] before:h-[38px] sm:before:h-[42px] before:rounded-[12px] sm:before:rounded-[14px] before:bg-[#0b6b53] before:text-white before:grid before:place-items-center before:font-black">
                  <h3 className="m-0 mb-[10px] text-[1.12rem] leading-[1.35] font-bold">
                    Identify the correct Indian Standard
                  </h3>
                  <p className="m-0 text-[#5d6b7d]">
                    The product must be mapped to the correct BIS standard
                    before anything else. A wrong mapping can push the file into
                    avoidable corrections and delays.
                  </p>
                </article>

                <article className="relative bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] pl-[62px] sm:pl-[72px] min-h-[54px] before:[counter-increment:step] before:content-[counter(step)] before:absolute before:left-4 sm:before:left-[24px] before:top-5 sm:before:top-[24px] before:w-[38px] sm:before:w-[42px] before:h-[38px] sm:before:h-[42px] before:rounded-[12px] sm:before:rounded-[14px] before:bg-[#0b6b53] before:text-white before:grid before:place-items-center before:font-black">
                  <h3 className="m-0 mb-[10px] text-[1.12rem] leading-[1.35] font-bold">
                    Test the product properly
                  </h3>
                  <p className="m-0 text-[#5d6b7d]">
                    Testing must match the applicable standard and product
                    profile. BIS guidance and compliance guides both place
                    product testing at the center of the process.
                  </p>
                </article>

                <article className="relative bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] pl-[62px] sm:pl-[72px] min-h-[54px] before:[counter-increment:step] before:content-[counter(step)] before:absolute before:left-4 sm:before:left-[24px] before:top-5 sm:before:top-[24px] before:w-[38px] sm:before:w-[42px] before:h-[38px] sm:before:h-[42px] before:rounded-[12px] sm:before:rounded-[14px] before:bg-[#0b6b53] before:text-white before:grid before:place-items-center before:font-black">
                  <h3 className="m-0 mb-[10px] text-[1.12rem] leading-[1.35] font-bold">
                    Prepare and submit the application
                  </h3>
                  <p className="m-0 text-[#5d6b7d]">
                    Application Form V typically carries product details,
                    manufacturing-unit information, production-process details,
                    and quality control system information.
                  </p>
                </article>

                <article className="relative bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] pl-[62px] sm:pl-[72px] min-h-[54px] before:[counter-increment:step] before:content-[counter(step)] before:absolute before:left-4 sm:before:left-[24px] before:top-5 sm:before:top-[24px] before:w-[38px] sm:before:w-[42px] before:h-[38px] sm:before:h-[42px] before:rounded-[12px] sm:before:rounded-[14px] before:bg-[#0b6b53] before:text-white before:grid before:place-items-center before:font-black">
                  <h3 className="m-0 mb-[10px] text-[1.12rem] leading-[1.35] font-bold">
                    Handle inspection and surveillance
                  </h3>
                  <p className="m-0 text-[#5d6b7d]">
                    After the application, BIS process guidance includes factory
                    inspection, product verification, and continuing
                    surveillance after grant of licence.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* SECTION: Documents required */}
          <section className="w-full m-0 px-0 py-[18px] sm:py-[24px]">
            <div className="w-full px-0 mx-0">
              <h2 className="m-0 mb-[10px] text-[1.45rem] sm:text-[2.15rem] leading-[1.15] tracking-[-0.02em] font-bold">
                Documents required for business registration, compliance &
                licensing
              </h2>
              <p className="m-0 mb-[18px] text-[#5d6b7d] max-w-[980px]">
                The exact list depends on the product, manufacturing setup, and
                certification route, but the commonly required documents for
                ISI-style licensing include the following.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
                <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                  <span className="inline-block px-[10px] py-[6px] rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                    Core documents
                  </span>
                  <h3 className="m-0 mb-[10px] text-[1.12rem] leading-[1.35] font-bold">
                    Business and legal papers
                  </h3>
                  <ul className="m-0 mt-[14px] p-0 list-none">
                    <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Certificate of Incorporation, LLP documents, or
                      partnership deed.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      PAN and GST registration.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Factory licence or manufacturing registration, where
                      applicable.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Manufacturing-unit address proof and utility bills.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Board resolution or authorization letter for the
                      signatory.
                    </li>
                  </ul>
                </article>

                <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                  <span className="inline-block px-[10px] py-[6px] rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                    Technical papers
                  </span>
                  <h3 className="m-0 mb-[10px] text-[1.12rem] leading-[1.35] font-bold">
                    Product and compliance papers
                  </h3>
                  <ul className="m-0 mt-[14px] p-0 list-none">
                    <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Product details, specifications, model numbers, and
                      drawings.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Test reports from a BIS-recognized laboratory.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Manufacturing-process details and quality-control plan.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Raw material information and sourcing details.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                      Trademark certificate, if the product is to be marked
                      under a brand name.
                    </li>
                  </ul>
                </article>
              </div>

              <p className="mt-[12px] text-[#5d6b7d] text-[0.92rem]">
                Compliance guides also note that BIS testing, factory review,
                and supporting documents are all checked before certification is
                granted.
              </p>
            </div>
          </section>

          {/* SECTION: Pain points & EPR Nexuss support */}
          <section className="w-full m-0 px-0 py-[18px] sm:py-[24px]">
            <div className="w-full px-0 mx-0 grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
              <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                <span className="inline-block px-[10px] py-[6px] rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                  Pain points
                </span>
                <h2 className="m-0 mb-[10px] text-[1.45rem] sm:text-[2.15rem] leading-[1.15] tracking-[-0.02em] font-bold">
                  Issues faced while entering a regulated product business from
                  another industry
                </h2>
                <p className="m-0 text-[#5d6b7d]">
                  When a business moves from trading, general manufacturing, or
                  importing into a regulated product category, compliance
                  becomes the hardest part of the restart. The team may know
                  operations, but not the product-approval sequence.
                </p>
                <ul className="m-0 mt-[14px] p-0 list-none">
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Unclear whether the product needs ISI certification, a
                    different BIS route, or another approval.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Confusion over the correct Indian Standard and supporting
                    paperwork.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Delays in testing, sample handling, or application filing.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Repeated corrections because the file was prepared without a
                    proper compliance checklist.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Budget leakage from rework, resubmission, and internal time
                    loss.
                  </li>
                </ul>
              </article>

              <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                <span className="inline-block px-[10px] py-[6px] rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                  EPR Nexuss support
                </span>
                <h2 className="m-0 mb-[10px] text-[1.45rem] sm:text-[2.15rem] leading-[1.15] tracking-[-0.02em] font-bold">
                  How EPR Nexuss helps clients solve these issues
                </h2>
                <p className="m-0 text-[#5d6b7d]">
                  EPR Nexuss helps by turning a complicated certification
                  process into a controlled business workflow. The goal is to
                  make the launch plan practical, traceable, and less stressful.
                </p>
                <ul className="m-0 mt-[14px] p-0 list-none">
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Maps the product to the right compliance route and standard.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Builds a document checklist before submission begins.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Coordinates the process so the client does not lose time
                    moving between labs and filings.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Helps manage queries, corrections, and follow-up until the
                    file becomes stable.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Supports the client from planning to market readiness.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* SECTION: Time & Cost / Comparison */}
          <section className="w-full m-0 px-0 py-[18px] sm:py-[24px]">
            <div className="w-full px-0 mx-0 grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
              <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                <span className="inline-block px-[10px] py-[6px] rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                  Time and cost
                </span>
                <h2 className="m-0 mb-[10px] text-[1.45rem] sm:text-[2.15rem] leading-[1.15] tracking-[-0.02em] font-bold">
                  How EPR Nexuss helps clients save money and time
                </h2>
                <p className="m-0 text-[#5d6b7d]">
                  The biggest compliance cost is usually not the official fee.
                  It is the cost of mistakes. When a product is mapped
                  incorrectly or a file is sent incomplete, the business pays in
                  extra weeks, extra corrections, and extra effort.
                </p>
                <ul className="m-0 mt-[14px] p-0 list-none">
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Fewer application errors mean fewer repeat submissions.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Better document planning reduces avoidable consultant time
                    and internal delays.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Cleaner testing coordination reduces the chance of
                    retesting.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    Faster readiness helps the business move toward revenue
                    sooner.
                  </li>
                </ul>
              </article>

              <article className="bg-white border border-[#d9e3ef]/95 rounded-[22px] shadow-[0_18px_48px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                <span className="inline-block px-[10px] py-[6px] rounded-full bg-[#eaf6f1] text-[#0b6b53] font-extrabold text-[0.84rem] mb-[10px]">
                  Why others fall short
                </span>
                <h2 className="m-0 mb-[10px] text-[1.45rem] sm:text-[2.15rem] leading-[1.15] tracking-[-0.02em] font-bold">
                  Why many consulting providers do not fully help in licensing
                  and certification
                </h2>
                <p className="m-0 text-[#5d6b7d]">
                  Some consultants explain the rule but do not take
                  responsibility for the workflow. That leaves the client with
                  unanswered questions right when accuracy matters most.
                </p>
                <ul className="m-0 mt-[14px] p-0 list-none">
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    They provide theory instead of practical execution.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    They miss product-specific details that create delays later.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    They do not keep the client ready for queries or
                    corrections.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5d6b7d] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-black">
                    They often stop after giving a checklist, while the real
                    work still needs support.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* SECTION: FAQ */}
          <section className="w-full m-0 px-0 py-[18px] sm:py-[24px]">
            <div className="w-full px-0 mx-0">
              <h2 className="m-0 mb-[10px] text-[1.45rem] sm:text-[2.15rem] leading-[1.15] tracking-[-0.02em] font-bold">
                Frequently asked questions
              </h2>

              <div className="space-y-[12px]" id="faq">
                {/* FAQ 1 */}
                <div className="border border-[#d9e3ef] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_26px_rgba(16,32,51,0.05)]">
                  <div
                    onClick={() => toggleFaq(1)}
                    className="cursor-pointer font-extrabold select-none flex justify-between items-center"
                  >
                    <span>What is the ISI Mark?</span>
                    <span className="ml-2 font-normal text-lg">
                      {faqOpen[1] ? "▲" : "▼"}
                    </span>
                  </div>
                  {faqOpen[1] && (
                    <div className="mt-[12px] text-[#5d6b7d]">
                      The ISI Mark is BIS’s certification mark under Scheme I.
                      It shows that the product conforms to the relevant Indian
                      Standard and sits within BIS’s product-certification
                      framework.
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="border border-[#d9e3ef] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_26px_rgba(16,32,51,0.05)]">
                  <div
                    onClick={() => toggleFaq(2)}
                    className="cursor-pointer font-extrabold select-none flex justify-between items-center"
                  >
                    <span>
                      Is ISI certification mandatory for every product?
                    </span>
                    <span className="ml-2 font-normal text-lg">
                      {faqOpen[2] ? "▲" : "▼"}
                    </span>
                  </div>
                  {faqOpen[2] && (
                    <div className="mt-[12px] text-[#5d6b7d]">
                      No. BIS says certification is generally voluntary, but the
                      Central Government can make compliance mandatory for
                      notified products through QCOs.
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="border border-[#d9e3ef] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_26px_rgba(16,32,51,0.05)]">
                  <div
                    onClick={() => toggleFaq(3)}
                    className="cursor-pointer font-extrabold select-none flex justify-between items-center"
                  >
                    <span>
                      What documents are usually required for certification?
                    </span>
                    <span className="ml-2 font-normal text-lg">
                      {faqOpen[3] ? "▲" : "▼"}
                    </span>
                  </div>
                  {faqOpen[3] && (
                    <div className="mt-[12px] text-[#5d6b7d]">
                      Typical documents include incorporation papers, PAN, GST,
                      factory registration, premises proof, product
                      specifications, test reports, quality-control documents,
                      and authorization letters.
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="border border-[#d9e3ef] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_26px_rgba(16,32,51,0.05)]">
                  <div
                    onClick={() => toggleFaq(4)}
                    className="cursor-pointer font-extrabold select-none flex justify-between items-center"
                  >
                    <span>
                      Why do businesses get delayed during certification?
                    </span>
                    <span className="ml-2 font-normal text-lg">
                      {faqOpen[4] ? "▲" : "▼"}
                    </span>
                  </div>
                  {faqOpen[4] && (
                    <div className="mt-[12px] text-[#5d6b7d]">
                      The usual reasons are wrong standard mapping, incomplete
                      documents, testing delays, and weak follow-up. These
                      issues are common when a business is moving into a
                      regulated category for the first time.
                    </div>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className="border border-[#d9e3ef] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_26px_rgba(16,32,51,0.05)]">
                  <div
                    onClick={() => toggleFaq(5)}
                    className="cursor-pointer font-extrabold select-none flex justify-between items-center"
                  >
                    <span>How does ISI certification help a business?</span>
                    <span className="ml-2 font-normal text-lg">
                      {faqOpen[5] ? "▲" : "▼"}
                    </span>
                  </div>
                  {faqOpen[5] && (
                    <div className="mt-[12px] text-[#5d6b7d]">
                      It strengthens buyer trust, supports safer product
                      positioning, and helps the business show verified
                      conformity instead of just making a quality claim.
                    </div>
                  )}
                </div>

                {/* FAQ 6 */}
                <div className="border border-[#d9e3ef] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_26px_rgba(16,32,51,0.05)]">
                  <div
                    onClick={() => toggleFaq(6)}
                    className="cursor-pointer font-extrabold select-none flex justify-between items-center"
                  >
                    <span>
                      How does EPR Nexuss help with licensing and certification?
                    </span>
                    <span className="ml-2 font-normal text-lg">
                      {faqOpen[6] ? "▲" : "▼"}
                    </span>
                  </div>
                  {faqOpen[6] && (
                    <div className="mt-[12px] text-[#5d6b7d]">
                      By reducing mistakes, preventing rework, coordinating the
                      workflow, and helping the client avoid repeated testing or
                      repeated filings.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: Contact / Footer */}
          <section
            className="w-full m-0 px-0 py-[18px] sm:py-[24px]"
            id="contact"
          >
            <div className="w-full px-0 mx-0">
              <footer className="my-[28px] mb-[40px] bg-[#081a2b] text-white rounded-none sm:rounded-[28px] p-[28px] shadow-[0_18px_48px_rgba(16,32,51,0.08)]">
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[18px] items-start">
                  <div>
                    <h2 className="text-[1.45rem] sm:text-[2.15rem] leading-[1.15] tracking-[-0.02em] font-bold text-white mb-[10px]">
                      Contact us
                    </h2>
                    <p className="text-white/90">
                      Need support for BIS ISI certification, compliance
                      planning, or documentation for a product launch? EPR
                      Nexuss can help you move from confusion to a clear and
                      market-ready path.
                    </p>
                    <p className="text-white/90">
                      Trusted support for manufacturers, importers, and
                      regulated-product launches.
                    </p>
                  </div>

                  <div>
                    <ul className="list-none p-0 m-0 mt-[14px]">
                      <li className="my-[8px] text-white/90">
                        <strong>Phone:</strong> +91 8796711793
                      </li>
                      <li className="my-[8px] text-white/90">
                        <strong>Landline:</strong> 0120-4605014
                      </li>
                      <li className="my-[8px] text-white/90">
                        <strong>Email:</strong> info@eprnexuss.com
                      </li>
                      <li className="my-[8px] text-white/90">
                        <strong>Address:</strong> H-73, No.107, Sector-63, Noida
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
  );
}
