import StickyContactForm from "@/components/StickyContactForm";
import React, { useState } from "react";

export default function BisCrsGuide(): JSX.Element {
  const [faqOpen, setFaqOpen] = useState<{ [key: number]: boolean }>({});

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main className="w-full md:mt-[60px]  m-0 p-0  font-sans text-[#102033] bg-[radial-gradient(circle_at_top_left,rgba(11,107,83,0.09),transparent_26%),radial-gradient(circle_at_top_right,rgba(22,75,122,0.10),transparent_28%),#f6f8fb] leading-relaxed">
      <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        <div>
          {/* HERO SECTION */}
          <section className="w-full  m-0 px-0 pt-[72px] sm:pt-[72px] pb-[28px]">
            <div className="w-full px-0 mx-0">
              <div className="relative bg-gradient-to-br from-[#0a1f33] via-[#103a5a] to-[#0b6b53] text-white rounded-none  p-6 sm:p-[42px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] overflow-hidden">
                {/* Background Accent Decorative Circle */}
                <div className="absolute -right-[120px] -bottom-[140px] w-[320px] h-[320px] bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_65%)] rounded-full pointer-events-none" />

                <div className="flex flex-wrap gap-[10px] mb-[18px]">
                  <span className="inline-flex items-center gap-[8px] px-[12px] py-[8px] rounded-full bg-white/10 border border-white/16 text-[0.92rem] backdrop-blur-md">
                    BIS CRS
                  </span>
                  <span className="inline-flex items-center gap-[8px] px-[12px] py-[8px] rounded-full bg-white/10 border border-white/16 text-[0.92rem] backdrop-blur-md">
                    Business registration
                  </span>
                  <span className="inline-flex items-center gap-[8px] px-[12px] py-[8px] rounded-full bg-white/10 border border-white/16 text-[0.92rem] backdrop-blur-md">
                    Compliance & licensing
                  </span>
                  <span className="inline-flex items-center gap-[8px] px-[12px] py-[8px] rounded-full bg-white/10 border border-white/16 text-[0.92rem] backdrop-blur-md">
                    Market-ready launch
                  </span>
                </div>

                <h1 className="m-0 text-[2rem] sm:text-[2.8rem] lg:text-[3.6rem] leading-[1.1] tracking-[-0.02em] max-w-[900px] font-extrabold">
                  BIS CRS Compliance — Business Registration, Licensing, and
                  Mandatory Certification Support
                </h1>

                <p className="mt-[18px] mb-0 max-w-[920px] text-[1.06rem] text-white/90">
                  <strong>BIS CRS Business Compliance & Licensing Guide</strong>
                  . This guide explains what CRS means, why it matters for
                  regulated products, where businesses usually get stuck, and
                  how EPR Nexuss supports the process from first review to final
                  registration.
                </p>

                <div className="flex flex-wrap gap-[12px] mt-[24px]">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-[18px] py-[13px] rounded-[14px] font-bold bg-white text-[#0a1f33] border border-transparent hover:-translate-y-[1px] transition-transform duration-200"
                  >
                    Contact EPR Nexuss
                  </a>
                  <a
                    href="#faq"
                    className="inline-flex items-center justify-center px-[18px] py-[13px] rounded-[14px] font-bold bg-transparent text-white border border-white/26 hover:-translate-y-[1px] transition-transform duration-200"
                  >
                    Read FAQs
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* STATS SECTION */}
          <section className="w-full m-0 px-0 py-5 sm:py-[26px]">
            <div className="w-full px-0 mx-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
                <article className="bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] border-t-5 border-t-[#0b6b53]">
                  <p className="text-[1.95rem] font-extrabold tracking-[-0.03em] m-0 mb-[4px] text-[#164b7a]">
                    BIS Act, 2016
                  </p>
                  <p className="m-0 text-[#5c6b7f] text-[0.96rem]">
                    BIS is India’s national standards body under the BIS Act,
                    2016.
                  </p>
                </article>

                <article className="bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] border-t-5 border-t-[#0b6b53]">
                  <p className="text-[1.95rem] font-extrabold tracking-[-0.03em] m-0 mb-[4px] text-[#164b7a]">
                    Voluntary by default
                  </p>
                  <p className="m-0 text-[#5c6b7f] text-[0.96rem]">
                    BIS certification is generally voluntary, but it becomes
                    mandatory for notified products.
                  </p>
                </article>

                <article className="bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] border-t-5 border-t-[#0b6b53]">
                  <p className="text-[1.95rem] font-extrabold tracking-[-0.03em] m-0 mb-[4px] text-[#164b7a]">
                    Scheme II
                  </p>
                  <p className="m-0 text-[#5c6b7f] text-[0.96rem]">
                    BIS Scheme II is the Registration Scheme for electronics and
                    IT goods under compulsory registration.
                  </p>
                </article>

                <article className="bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] border-t-5 border-t-[#0b6b53]">
                  <p className="text-[1.95rem] font-extrabold tracking-[-0.03em] m-0 mb-[4px] text-[#164b7a]">
                    Live list
                  </p>
                  <p className="m-0 text-[#5c6b7f] text-[0.96rem]">
                    BIS keeps the compulsory certification product list updated
                    on its official website.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* RELEVANCE SECTION */}
          <section className="w-full m-0 px-0 py-5 sm:py-[26px]">
            <div className="w-full px-0 mx-0 grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
              <article className="bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                <span className="inline-block px-[10px] py-[6px] bg-[#e8f6f1] text-[#0b6b53] rounded-full font-bold text-[0.84rem] mb-[10px]">
                  Business relevance
                </span>
                <h2 className="m-0 mb-[12px] text-[1.5rem] sm:text-[2.2rem] leading-[1.15] tracking-[-0.02em] font-bold">
                  Why BIS matters for business registration, compliance &
                  licensing
                </h2>
                <p className="m-0 text-[#5c6b7f]">
                  BIS states that certification is generally voluntary, but the
                  Central Government can make compliance mandatory for specified
                  products through notification. For a business, that means the
                  product launch plan must include the correct standard, test
                  evidence, and registration route before sales begin.
                </p>
                <ul className="m-0 mt-[14px] p-0 list-none">
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    It protects product quality and consumer safety.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    It creates a lawful pathway for selling regulated goods in
                    India.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    It helps businesses avoid blocked launches and avoidable
                    rework.
                  </li>
                </ul>
              </article>

              <article className="bg-gradient-to-br from-[#0b6b53]/10 to-[#164b7a]/8 border border-[#0b6b53]/12 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                <span className="inline-block px-[10px] py-[6px] bg-[#e8f6f1] text-[#0b6b53] rounded-full font-bold text-[0.84rem] mb-[10px]">
                  What the BIS pages show
                </span>
                <h2 className="m-0 mb-[12px] text-[1.5rem] sm:text-[2.2rem] leading-[1.15] tracking-[-0.02em] font-bold">
                  Where businesses must pay attention
                </h2>
                <p className="m-0 text-[#5c6b7f]">
                  BIS’s compulsory certification pages show multiple schemes,
                  including Scheme I, Scheme II, Scheme IV, and Scheme X. Scheme
                  II is the Registration Scheme for electronics and IT goods
                  under compulsory registration. That makes product
                  classification and scheme mapping a core business task, not a
                  side task.
                </p>
              </article>
            </div>
          </section>

          {/* COMPLIANCE PATH STEPS */}
          <section className="w-full m-0 px-0 py-5 sm:py-[26px]">
            <div className="w-full px-0 mx-0">
              <h2 className="m-0 mb-[12px] text-[1.5rem] sm:text-[2.2rem] leading-[1.15] tracking-[-0.02em] font-bold">
                A practical BIS compliance path for businesses
              </h2>
              <p className="m-0 mb-[18px] text-[#5c6b7f] max-w-[900px]">
                A smooth launch usually depends on sequence: identify the
                product, confirm the standard, complete testing, prepare
                documents, submit the application, and handle queries without
                avoidable rework.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] [counter-reset:step]">
                <article className="relative bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] pl-[62px] sm:pl-[74px] min-h-[56px] before:[counter-increment:step] before:content-[counter(step)] before:absolute before:left-4 sm:before:left-[24px] before:top-5 sm:before:top-[24px] before:w-[38px] sm:before:w-[44px] before:h-[38px] sm:before:h-[44px] before:rounded-[12px] sm:before:rounded-[14px] before:bg-[#0b6b53] before:text-white before:grid before:place-items-center before:font-extrabold">
                  <h3 className="m-0 mb-[8px] text-[1.15rem] leading-[1.35] font-bold">
                    Product and scheme mapping
                  </h3>
                  <p className="m-0 text-[#5c6b7f]">
                    First, the product must be matched to the correct BIS
                    notification and Indian Standard. This is where many
                    businesses lose time because the product family looks
                    simple, but the compliance route is not.
                  </p>
                </article>

                <article className="relative bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] pl-[62px] sm:pl-[74px] min-h-[56px] before:[counter-increment:step] before:content-[counter(step)] before:absolute before:left-4 sm:before:left-[24px] before:top-5 sm:before:top-[24px] before:w-[38px] sm:before:w-[44px] before:h-[38px] sm:before:h-[44px] before:rounded-[12px] sm:before:rounded-[14px] before:bg-[#0b6b53] before:text-white before:grid before:place-items-center before:font-extrabold">
                  <h3 className="m-0 mb-[8px] text-[1.15rem] leading-[1.35] font-bold">
                    Testing in a recognised lab
                  </h3>
                  <p className="m-0 text-[#5c6b7f]">
                    Test coordination must follow the applicable BIS process and
                    the lab result has to support the exact product variant
                    being filed.
                  </p>
                </article>

                <article className="relative bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] pl-[62px] sm:pl-[74px] min-h-[56px] before:[counter-increment:step] before:content-[counter(step)] before:absolute before:left-4 sm:before:left-[24px] before:top-5 sm:before:top-[24px] before:w-[38px] sm:before:w-[44px] before:h-[38px] sm:before:h-[44px] before:rounded-[12px] sm:before:rounded-[14px] before:bg-[#0b6b53] before:text-white before:grid before:place-items-center before:font-extrabold">
                  <h3 className="m-0 mb-[8px] text-[1.15rem] leading-[1.35] font-bold">
                    Documentation and submission
                  </h3>
                  <p className="m-0 text-[#5c6b7f]">
                    Business identity documents, technical files, labels,
                    declarations, and authorisations must be complete and
                    internally consistent before filing.
                  </p>
                </article>

                <article className="relative bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px] pl-[62px] sm:pl-[74px] min-h-[56px] before:[counter-increment:step] before:content-[counter(step)] before:absolute before:left-4 sm:before:left-[24px] before:top-5 sm:before:top-[24px] before:w-[38px] sm:before:w-[44px] before:h-[38px] sm:before:h-[44px] before:rounded-[12px] sm:before:rounded-[14px] before:bg-[#0b6b53] before:text-white before:grid before:place-items-center before:font-extrabold">
                  <h3 className="m-0 mb-[8px] text-[1.15rem] leading-[1.35] font-bold">
                    Follow-up until registration
                  </h3>
                  <p className="m-0 text-[#5c6b7f]">
                    After submission, the process often needs clarification
                    handling, corrections, and status tracking so the final
                    registration does not drift.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* PAIN POINTS & EPR NEXUSS SUPPORT */}
          <section className="w-full m-0 px-0 py-5 sm:py-[26px]">
            <div className="w-full px-0 mx-0 grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
              <article className="bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                <span className="inline-block px-[10px] py-[6px] bg-[#e8f6f1] text-[#0b6b53] rounded-full font-bold text-[0.84rem] mb-[10px]">
                  Pain points
                </span>
                <h2 className="m-0 mb-[12px] text-[1.5rem] sm:text-[2.2rem] leading-[1.15] tracking-[-0.02em] font-bold">
                  Issues businesses face when entering a regulated product
                  business from another industry
                </h2>
                <p className="m-0 text-[#5c6b7f]">
                  When a company moves from a different industry into a
                  regulated product business, compliance complexity usually
                  increases before operations even begin. The challenge is not
                  just the product or the office setup; it is the number of
                  registrations, technical documents, and approvals that must
                  align at the same time.
                </p>
                <ul className="m-0 mt-[14px] p-0 list-none">
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    Confusion about whether the product falls under CRS, an
                    ISI-mark route, or another BIS requirement.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    Delays because testing, labeling, and documentation are not
                    prepared in the right sequence.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    Repeated corrections when the application is filed without a
                    complete compliance checklist.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    Money lost on retesting, rework, courier cycles, and
                    internal follow-up.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    Delayed launch because procurement, sales, and compliance
                    teams are not synchronized.
                  </li>
                </ul>
              </article>

              <article className="bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                <span className="inline-block px-[10px] py-[6px] bg-[#e8f6f1] text-[#0b6b53] rounded-full font-bold text-[0.84rem] mb-[10px]">
                  EPR Nexuss support
                </span>
                <h2 className="m-0 mb-[12px] text-[1.5rem] sm:text-[2.2rem] leading-[1.15] tracking-[-0.02em] font-bold">
                  How EPR Nexuss helps clients solve these issues
                </h2>
                <p className="m-0 text-[#5c6b7f]">
                  EPR Nexuss helps the client start with the right roadmap, then
                  aligns registration, compliance, and follow-up work with the
                  project timeline. The goal is simple: fewer mistakes, fewer
                  delays, and clearer execution.
                </p>
                <ul className="m-0 mt-[14px] p-0 list-none">
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    Checks the product category and maps the likely compliance
                    route.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    Prepares a document checklist before testing and filing.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    Coordinates the process so the client does not lose time
                    moving between agencies and labs.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    Guides the client on filing quality, follow-up, and
                    resolution of queries.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    Helps convert a technical regulation into a workable launch
                    plan.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* COST / CONSULTANT COMPARISON */}
          <section className="w-full m-0 px-0 py-5 sm:py-[26px]">
            <div className="w-full px-0 mx-0 grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
              <article className="bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                <span className="inline-block px-[10px] py-[6px] bg-[#e8f6f1] text-[#0b6b53] rounded-full font-bold text-[0.84rem] mb-[10px]">
                  Time and cost
                </span>
                <h2 className="m-0 mb-[12px] text-[1.5rem] sm:text-[2.2rem] leading-[1.15] tracking-[-0.02em] font-bold">
                  How EPR Nexuss saves money and time
                </h2>
                <p className="m-0 text-[#5c6b7f]">
                  Most compliance costs increase because of rework. A missed
                  document, the wrong standard, or a test report mismatch can
                  force a fresh cycle. The right consulting support helps
                  prevent that waste.
                </p>
                <ul className="m-0 mt-[14px] p-0 list-none">
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    Fewer application errors means fewer repeat submissions.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    Clear document planning reduces duplicate testing and
                    avoidable consultant hours.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    Structured follow-up shortens the waiting time between
                    steps.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    Better readiness supports earlier market entry and faster
                    sales activation.
                  </li>
                </ul>
              </article>

              <article className="bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                <span className="inline-block px-[10px] py-[6px] bg-[#e8f6f1] text-[#0b6b53] rounded-full font-bold text-[0.84rem] mb-[10px]">
                  Why others fall short
                </span>
                <h2 className="m-0 mb-[12px] text-[1.5rem] sm:text-[2.2rem] leading-[1.15] tracking-[-0.02em] font-bold">
                  Why many consultants do not fully support registration,
                  licensing, and certification
                </h2>
                <p className="m-0 text-[#5c6b7f]">
                  In many cases, consultants stop at theory or merely forward a
                  list of documents. That is not enough when a business needs a
                  live launch.
                </p>
                <ul className="m-0 mt-[14px] p-0 list-none">
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    They explain the rule but do not manage the workflow.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    They miss the product-specific nuances that drive delays.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    They do not coordinate closely with labs, creating avoidable
                    correction cycles.
                  </li>
                  <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                    They leave the client to handle follow-up, which increases
                    stress and timelines.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* REQUIRED DOCUMENTS */}
          <section className="w-full m-0 px-0 py-5 sm:py-[26px]">
            <div className="w-full px-0 mx-0">
              <h2 className="m-0 mb-[12px] text-[1.5rem] sm:text-[2.2rem] leading-[1.15] tracking-[-0.02em] font-bold">
                Documents required for business registration, compliance &
                licensing
              </h2>
              <p className="m-0 mb-[18px] text-[#5c6b7f] max-w-[900px]">
                The exact list depends on the product category and the
                applicable BIS scheme, but these are the documents businesses
                most commonly need to keep ready before filing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
                <article className="bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                  <h3 className="m-0 mb-[10px] text-[1.15rem] leading-[1.35] font-bold">
                    Business and identity documents
                  </h3>
                  <ul className="m-0 mt-[14px] p-0 list-none">
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      Certificate of Incorporation, Partnership Deed, or
                      Proprietorship proof.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      PAN card of the business entity.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      GST registration certificate, if applicable.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      Address proof of the registered office and factory
                      premises.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      Identity proof of the authorised signatory.
                    </li>
                  </ul>
                </article>

                <article className="bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                  <h3 className="m-0 mb-[10px] text-[1.15rem] leading-[1.35] font-bold">
                    Technical and product documents
                  </h3>
                  <ul className="m-0 mt-[14px] p-0 list-none">
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      Product description, model details, and technical
                      specifications.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      Product images and label artwork.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      Test report from a BIS-recognised or notified laboratory,
                      where required.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      Indian Standard reference and product category mapping.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      User manual, datasheet, and declaration of conformity
                      support files.
                    </li>
                  </ul>
                </article>

                <article className="bg-white border border-[#dbe5f0]/95 rounded-[22px] shadow-[0_18px_50px_rgba(16,32,51,0.08)] p-5 sm:p-[24px]">
                  <h3 className="m-0 mb-[10px] text-[1.15rem] leading-[1.35] font-bold">
                    Licensing and authorisation documents
                  </h3>
                  <ul className="m-0 mt-[14px] p-0 list-none">
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      Board resolution or authorisation letter for filing.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      Trademark or brand ownership authorisation, if the brand
                      belongs to another entity.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      Importer IEC, if the business is importing regulated
                      goods.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      Foreign manufacturer authorisation, where the product is
                      made outside India.
                    </li>
                    <li className="relative pl-[26px] my-[10px] text-[#5c6b7f] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#0b6b53] before:font-extrabold">
                      Any additional scheme-specific declaration required by
                      BIS.
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* FREQUENTLY ASKED QUESTIONS */}
          <section className="w-full m-0 px-0 py-5 sm:py-[26px]" id="faq">
            <div className="w-full px-0 mx-0">
              <h2 className="m-0 mb-[12px] text-[1.5rem] sm:text-[2.2rem] leading-[1.15] tracking-[-0.02em] font-bold">
                Frequently asked questions
              </h2>

              <div className="space-y-[12px]">
                {/* FAQ 1 */}
                <div className="border border-[#dbe5f0] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_30px_rgba(16,32,51,0.05)]">
                  <div
                    onClick={() => toggleFaq(1)}
                    className="cursor-pointer font-bold select-none flex justify-between items-center"
                  >
                    <span>
                      What is BIS Compulsory Registration Scheme (CRS)?
                    </span>
                    <span className="ml-2 font-normal text-lg">
                      {faqOpen[1] ? "▲" : "▼"}
                    </span>
                  </div>
                  {faqOpen[1] && (
                    <div className="mt-[12px] text-[#5c6b7f]">
                      CRS is BIS’s mandatory registration route for notified
                      products. It applies when the Central Government requires
                      compliance with the applicable Indian Standard before the
                      product can be sold legally in India.
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="border border-[#dbe5f0] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_30px_rgba(16,32,51,0.05)]">
                  <div
                    onClick={() => toggleFaq(2)}
                    className="cursor-pointer font-bold select-none flex justify-between items-center"
                  >
                    <span>
                      How is CRS different from voluntary BIS certification?
                    </span>
                    <span className="ml-2 font-normal text-lg">
                      {faqOpen[2] ? "▲" : "▼"}
                    </span>
                  </div>
                  {faqOpen[2] && (
                    <div className="mt-[12px] text-[#5c6b7f]">
                      Voluntary certification is optional for many products, but
                      CRS becomes mandatory for products that the government has
                      notified. BIS’s own overview states that certification is
                      generally voluntary, while some products are made
                      compulsory.
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="border border-[#dbe5f0] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_30px_rgba(16,32,51,0.05)]">
                  <div
                    onClick={() => toggleFaq(3)}
                    className="cursor-pointer font-bold select-none flex justify-between items-center"
                  >
                    <span>
                      Why do businesses get delayed in the CRS process?
                    </span>
                    <span className="ml-2 font-normal text-lg">
                      {faqOpen[3] ? "▲" : "▼"}
                    </span>
                  </div>
                  {faqOpen[3] && (
                    <div className="mt-[12px] text-[#5c6b7f]">
                      Delays usually happen because the product is mapped to the
                      wrong scheme, documents are incomplete, test reports do
                      not match the required format, or follow-up is not handled
                      systematically.
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="border border-[#dbe5f0] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_30px_rgba(16,32,51,0.05)]">
                  <div
                    onClick={() => toggleFaq(4)}
                    className="cursor-pointer font-bold select-none flex justify-between items-center"
                  >
                    <span>
                      Can a business launch before registration is complete?
                    </span>
                    <span className="ml-2 font-normal text-lg">
                      {faqOpen[4] ? "▲" : "▼"}
                    </span>
                  </div>
                  {faqOpen[4] && (
                    <div className="mt-[12px] text-[#5c6b7f]">
                      Not safely or compliantly for a notified product. The
                      launch should happen only after the correct registration
                      or conformity requirement has been fulfilled.
                    </div>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className="border border-[#dbe5f0] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_30px_rgba(16,32,51,0.05)]">
                  <div
                    onClick={() => toggleFaq(5)}
                    className="cursor-pointer font-bold select-none flex justify-between items-center"
                  >
                    <span>
                      How does EPR Nexuss help reduce compliance cost?
                    </span>
                    <span className="ml-2 font-normal text-lg">
                      {faqOpen[5] ? "▲" : "▼"}
                    </span>
                  </div>
                  {faqOpen[5] && (
                    <div className="mt-[12px] text-[#5c6b7f]">
                      By reducing rework, improving filing accuracy,
                      coordinating the process, and helping the client avoid
                      repeated testing or repeated submission cycles.
                    </div>
                  )}
                </div>

                {/* FAQ 6 */}
                <div className="border border-[#dbe5f0] rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_30px_rgba(16,32,51,0.05)]">
                  <div
                    onClick={() => toggleFaq(6)}
                    className="cursor-pointer font-bold select-none flex justify-between items-center"
                  >
                    <span>Does EPR Nexuss help only with registration?</span>
                    <span className="ml-2 font-normal text-lg">
                      {faqOpen[6] ? "▲" : "▼"}
                    </span>
                  </div>
                  {faqOpen[6] && (
                    <div className="mt-[12px] text-[#5c6b7f]">
                      No. The support also includes document planning,
                      application readiness, follow-up, and compliance guidance
                      so the client gets a more complete launch support package.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
        <aside className="hidden lg:block shrink-0 w-[320px]">
          <div className="sticky top-28 px-2">
            <StickyContactForm />
          </div>
        </aside>
      </div>
    </main>
  );
}
