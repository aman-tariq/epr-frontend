import React, { useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";
import Seo from "@/components/Seo";
import StickyContactForm from "@/components/StickyContactForm";

// Framer Motion Animation Variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const checklistItems = [
  {
    title: "State CTE/CTO Acquired",
    description: "Pollution control board consent to establish and operate.",
  },
  {
    title: "BMS Programmed for IS 16046 Specs",
    description:
      "Overcharge, short circuit, and thermal cut-offs strictly calibrated.",
  },
  {
    title: "NABL Lab Testing Initiated",
    description:
      "Samples submitted to an accredited lab for BIS and AIS testing.",
  },
  {
    title: "CPCB EPR Portal Registration",
    description:
      "Registered as a Producer under Battery Waste Management Rules 2022.",
  },
];

const roadmap = [
  {
    number: "1",
    title: "Factory Setup: CTE & CTO",
    description: (
      <>
        Before setting up machinery, you need{" "}
        <strong>Consent to Establish (CTE)</strong> and{" "}
        <strong>Consent to Operate (CTO)</strong> from the State Pollution
        Control Board. It validates your factory&apos;s waste management infra.
      </>
    ),
    tag: "State Level",
    tagClass: "bg-slate-100 text-slate-700",
  },
  {
    number: "2",
    title: "Cell & Pack Safety: BIS IS 16046",
    description: (
      <>
        The core standard (IS 16046:2018 / IEC 62133). Involves rigorous NABL
        lab testing for short circuits, thermal abuse, and crushing.{" "}
        <strong>Absolutely mandatory for any lithium cell/pack.</strong>
      </>
    ),
    tag: "National / BIS",
    tagClass: "bg-blue-50 text-blue-700",
  },
  {
    number: "3",
    title: "EV Specific: AIS 156 Phase 2",
    description: (
      <>
        If making batteries for Electric Vehicles, AIS 156 testing is enforced
        by MoRTH. Focuses heavily on smart BMS communication, thermal
        propagation, and water resistance (IP67).
      </>
    ),
    tag: "ARAI / ICAT",
    tagClass: "bg-emerald-50 text-emerald-700",
    featured: true,
  },
  {
    number: "4",
    title: "Transportation: UN 38.3",
    description: (
      <>
        Lithium batteries are classified as Class 9 Dangerous Goods. UN 38.3
        certification is legally required to transport your batteries via air,
        sea, or road safely.
      </>
    ),
    tag: "International",
    tagClass: "bg-slate-100 text-slate-700",
  },
  {
    number: "5",
    title: "Sustainability: EPR Registration",
    description: (
      <>
        Under the Battery Waste Management Rules 2022, manufacturers must
        register on the CPCB portal and meet recycling targets to offset their
        market footprint.
      </>
    ),
    tag: "CPCB Portal",
    tagClass: "bg-amber-50 text-amber-700",
  },
];

const faqItems = [
  {
    question: "How long does BIS IS 16046 certification take?",
    answer: (
      <>
        Typically, if your battery passes the lab tests on the first try, the
        process takes about <strong>45 to 60 days</strong>. However, without
        pre-compliance checks, companies often fail the first test, dragging
        the timeline out to 4-6 months. EPR Nexuss ensures first-time
        clearance.
      </>
    ),
  },
  {
    question: "Can EPR Nexuss help if our plant was sealed by the CPCB?",
    answer: (
      <>
        <strong>Yes.</strong> If your plant was shut down due to BWM Rules 2022
        non-compliance (lack of EPR registration or unmet recycling targets),
        we initiate an emergency restart protocol. We represent you before the
        board, file backdated returns, procure the necessary EPR credits from
        authorized recyclers, and petition for immediate un-sealing.
      </>
    ),
  },
  {
    question: "Is AIS 156 Phase 2 mandatory for all batteries?",
    answer: (
      <>
        No, it is specifically mandatory for batteries used in{" "}
        <strong>Electric Vehicles (EVs)</strong> operating in India. If you are
        manufacturing batteries for Solar ESS, Medical devices, or consumer
        electronics, BIS IS 16046 is sufficient. We help you map exactly which
        licenses apply to your product line to save you money.
      </>
    ),
  },
  {
    question: "Why do batteries fail the lab tests?",
    answer: (
      <>
        The most common reasons are: 1) The BMS does not cut off current
        accurately during overcharge simulations. 2) Poor spot-welding causing
        high internal resistance leading to thermal runaway. 3) Incorrect
        casing materials that melt or crack under pressure testing. EPR Nexuss
        audits all these specs before testing.
      </>
    ),
  },
];

function ArrowDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`h-5 w-5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}

const LithiumIonBatteryComplianceCertification: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checked, setChecked] = useState<boolean[]>(
    checklistItems.map(() => false)
  );

  const readyCount = useMemo(
    () => checked.filter(Boolean).length,
    [checked]
  );
  const percentage = Math.round(
    (readyCount / checklistItems.length) * 100
  );

  const toggleChecklist = (index: number) => {
    setChecked((current) =>
      current.map((value, itemIndex) =>
        itemIndex === index ? !value : value
      )
    );
  };

  return (
    <>
      <Seo
        title="Lithium-Ion Battery Manufacturing Compliance & Certification Guide 2026"
        description="Complete guide to Lithium-Ion Battery Manufacturing Compliance in India. BIS IS 16046, AIS 156 Phase 2, CTE/CTO, UN 38.3 and CPCB EPR registration. Learn how EPR Nexuss helps you get certified faster."
        keywords={[
          "Lithium Ion Battery Compliance",
          "BIS IS 16046 Certification",
          "AIS 156 Phase 2",
          "Battery Manufacturing License India",
          "CTE CTO Battery Plant",
          "CPCB EPR Registration Battery",
          "UN 38.3 Certification",
          "Battery Waste Management Rules 2022",
          "Lithium Battery Certification Guide",
          "NABL Lab Testing Battery",
        ]}
        url="https://eprnexuss.com/blog/lithium-ion-battery-compliance-certification"
        type="article"
      />

      <div className="min-h-screen mt-[70px] bg-[#f8fafc] text-[#1f2937] font-sans pb-12">
        {/* Two-Column Layout Container (same as buy-selling blog) */}
        <div className="max-w-8xl mx-auto px-1 py-12 lg:flex lg:gap-4 lg:items-start">
          <div>
            {/* HERO */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="hero relative overflow-hidden bg-gradient-to-br from-[#0f766e] to-[#2563eb] text-white rounded-3xl mx-4 md:mx-auto max-w-8xl mt-10 px-8 md:px-12 py-16 md:py-20 shadow-2xl"
            >
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-4xl mx-auto">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="inline-block mb-6 rounded-full bg-white/15 px-5 py-2 text-xs font-bold uppercase tracking-widest"
                >
                  Updated for 2026 Regulations
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-3xl md:text-5xl font-bold leading-tight mb-6"
                >
                  Lithium-Ion Manufacturing:
                  <br />
                  The Master Blueprint for Compliance & Certification
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-lg md:text-xl leading-relaxed opacity-95"
                >
                  Manufacturing without the right certifications isn&apos;t just
                  risky—it&apos;s illegal. Discover how EPR Nexuss helps you
                  navigate BIS IS 16046, AIS 156, and BWM Rules 2022 to launch,
                  scale, or rescue your battery plant with zero wasted capital.
                </motion.p>
              </div>
            </motion.section>

            {/* Main Content Column */}
            <div className="flex-1 space-y-16 mt-12 px-2 md:px-4">
              {/* REALITY CHECK */}
              <motion.section
                id="reality"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
                className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm"
              >
                <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold mb-6">
                  The Reality Check: Why Licenses are Non-Negotiable
                </motion.h2>

                <motion.p variants={fadeIn} className="text-[#334155] mb-8 leading-relaxed">
                  The Lithium-ion market is exploding, but regulatory bodies
                  (BIS, CPCB, MoRTH) have tightened the noose on substandard
                  manufacturers. Producing highly volatile energy storage units
                  without strict adherence to safety and environmental
                  standards leads to immediate plant sealing, massive fines,
                  and brand destruction.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    {[
                      [
                        "Safety & Thermal Runaway",
                        "Uncertified packs risk fire (thermal runaway). AIS 156 Phase 2 compliance is mandatory to prove your BMS can handle thermal events.",
                      ],
                      [
                        "Legal Market Access (BIS)",
                        "Without BIS IS 16046 certification, you cannot legally sell, import, or distribute a single battery in the Indian market.",
                      ],
                      [
                        "CPCB Penalties & BWM 2022",
                        "Failure to register for EPR (Extended Producer Responsibility) results in Environmental Compensation fines and immediate factory shutdown.",
                      ],
                    ].map(([title, copy]) => (
                      <motion.div key={title} variants={fadeIn} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 text-sm font-bold">
                          !
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1f2937]">{title}</h4>
                          <p className="mt-1 text-sm text-[#64748b] leading-relaxed">{copy}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div variants={scaleUp} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6">
                    <p className="font-bold text-lg text-[#1f2937]">Did You Know?</p>
                    <div className="mt-4 text-5xl font-black text-emerald-600">68%</div>
                    <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                      Of new battery manufacturing startups fail to pass NABL
                      lab testing on their first 3 attempts due to incorrect
                      BMS calibration and thermal design.
                    </p>
                    <div className="mt-5 rounded-r-xl border-l-4 border-blue-500 bg-blue-50 px-4 py-3">
                      <p className="text-sm font-medium text-blue-900">
                        Every failed lab test costs lakhs of rupees and sets
                        your launch back by 30-45 days.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

              {/* ROADMAP */}
              <motion.section
                id="roadmap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm"
              >
                <motion.div variants={fadeIn} className="mb-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                    Step-by-Step Guide
                  </span>
                  <h2 className="mt-2 text-2xl md:text-3xl font-bold">
                    The Complete Certification Roadmap
                  </h2>
                  <p className="mt-3 text-[#64748b] leading-relaxed">
                    From raw factory floors to legally selling high-capacity EV
                    packs, here are the mandatory licenses required.
                  </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                  {roadmap.map((item) => (
                    <motion.article
                      key={item.number}
                      variants={fadeIn}
                      whileHover={{ y: -3 }}
                      className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition ${
                        item.featured ? "border-t-4 border-t-emerald-500" : ""
                      }`}
                    >
                      <div
                        className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold text-white ${
                          item.featured ? "bg-emerald-600" : "bg-slate-800"
                        }`}
                      >
                        {item.number}
                      </div>
                      <h3 className="text-lg font-bold text-[#1f2937]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                        {item.description}
                      </p>
                      <span
                        className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.tagClass}`}
                      >
                        {item.tag}
                      </span>
                    </motion.article>
                  ))}
                </div>
              </motion.section>

              {/* ADVANTAGE */}
              <motion.section
                id="advantage"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className="bg-slate-900 text-white rounded-3xl p-6 md:p-10 shadow-sm overflow-hidden relative"
              >
                <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:28px_28px]" />
                
                <div className="relative z-10">
                  <motion.div variants={fadeIn} className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold">The EPR Nexuss Advantage</h2>
                    <p className="mt-3 text-white/70 max-w-2xl mx-auto">
                      Why trusting consultants who only push paper will bankrupt
                      you, and how our engineering-first approach guarantees
                      certification.
                    </p>
                  </motion.div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <motion.div variants={fadeIn} className="rounded-2xl border border-red-400/20 bg-white/5 p-6">
                      <h3 className="flex items-center gap-2 text-xl font-bold text-red-300 mb-5">
                        <span>×</span> The &quot;Average Consultant&quot; Approach
                      </h3>
                      <div className="space-y-5">
                        {[
                          [
                            "Paperwork Only",
                            "They file forms without auditing your technical specs. When the battery reaches the NABL lab, it fails the overcharge test due to poor BMS logic.",
                          ],
                          [
                            "Hidden Timelines & Costs",
                            "Quote low initially, but charge extra every time the lab fails your battery. Months pass without legal market access.",
                          ],
                          [
                            "Ignorant of EPR",
                            "They ignore BWM 2022 rules, leaving you vulnerable to sudden CPCB raids and heavy environmental compensation fines.",
                          ],
                        ].map(([title, copy]) => (
                          <div key={title} className="flex gap-3">
                            <span className="text-red-300 font-bold">✗</span>
                            <div>
                              <h4 className="font-semibold text-white/90">{title}</h4>
                              <p className="mt-1 text-sm text-white/60 leading-relaxed">{copy}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div variants={fadeIn} className="rounded-2xl bg-white p-6 text-[#1f2937] relative overflow-hidden">
                      <div className="absolute right-0 top-0 h-full w-1 bg-emerald-500" />
                      <h3 className="flex items-center gap-2 text-xl font-bold mb-5">
                        <span className="text-emerald-600">✓</span> The EPR Nexuss Blueprint
                      </h3>
                      <div className="space-y-5">
                        {[
                          [
                            "Pre-Compliance Engineering Audit",
                            "Our engineers audit your BMS logic, thermal packing, and laser welding specs before sending samples to the lab. We guarantee it passes.",
                          ],
                          [
                            "Guaranteed Turnaround Times",
                            "Because our tech specs are flawless, we bypass the loop of lab rejections. We get your BIS IS 16046 and AIS 156 approvals in record time.",
                          ],
                          [
                            "Turnkey BWM 2022 Management",
                            "We handle your CPCB portal, procure EPR credits for you, and keep your plant 100% compliant and un-sealable by authorities.",
                          ],
                        ].map(([title, copy]) => (
                          <div key={title} className="flex gap-3">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <div>
                              <h4 className="font-semibold">{title}</h4>
                              <p className="mt-1 text-sm text-[#64748b] leading-relaxed">{copy}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.section>

              {/* CHECKLIST */}
              <motion.section
                id="checklist"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeIn}
                className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold">Compliance Readiness Checker</h2>
                  <p className="mt-2 text-sm text-[#64748b]">
                    Are you legally ready to manufacture? Check off your current status.
                  </p>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <p className="mt-3 text-center text-sm font-bold text-[#1f2937]">
                  {percentage}% Ready
                </p>

                <div className="mt-8 space-y-3">
                  {checklistItems.map((item, index) => (
                    <label
                      key={item.title}
                      className="flex cursor-pointer items-start gap-4 rounded-2xl border border-gray-200 p-4 transition hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        checked={checked[index]}
                        onChange={() => toggleChecklist(index)}
                        className="mt-1 h-5 w-5 shrink-0 accent-emerald-600"
                      />
                      <span>
                        <span className="block font-semibold text-[#1f2937]">{item.title}</span>
                        <span className="mt-1 block text-xs text-[#64748b] leading-relaxed">
                          {item.description}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>

                {percentage > 0 && (
                  <div
                    className={`mt-7 rounded-xl px-4 py-4 text-center text-sm font-semibold ${
                      percentage < 50
                        ? "bg-red-50 text-red-700"
                        : percentage < 100
                        ? "bg-amber-50 text-amber-700"
                        : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    {percentage < 50
                      ? "Warning: Operating at this stage is illegal. Contact EPR Nexuss immediately."
                      : percentage < 100
                      ? "Almost there. A single missing license can halt production. Let us help you cross the finish line."
                      : "Excellent! You are fully compliant. Scale your production with confidence."}
                  </div>
                )}
              </motion.section>

              {/* FAQ */}
              <motion.section
                id="faq"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm"
              >
                <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold text-center mb-8">
                  Frequently Asked Questions
                </motion.h2>

                <div className="space-y-3">
                  {faqItems.map((item, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <motion.div
                        key={item.question}
                        variants={fadeIn}
                        className="overflow-hidden rounded-2xl border border-gray-200"
                      >
                        <button
                          type="button"
                          className="flex w-full items-center justify-between gap-4 bg-gray-50 px-5 py-4 text-left font-semibold text-[#1f2937] transition hover:bg-gray-100"
                          onClick={() =>
                            setOpenFaq((current) =>
                              current === index ? null : index
                            )
                          }
                          aria-expanded={isOpen}
                        >
                          <span>{item.question}</span>
                          <ArrowDownIcon open={isOpen} />
                        </button>

                        {isOpen && (
                          <div className="border-t border-gray-200 bg-white px-5 py-4 text-sm leading-relaxed text-[#64748b]">
                            {item.answer}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>

              {/* FINAL CTA */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white rounded-3xl p-10 md:p-14 text-center shadow-lg"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Stop Guessing. Start Scaling Legally.
                </h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                  Whether you are setting up a new line or need to rescue a
                  struggling plant, our engineering and compliance teams
                  guarantee your success.
                </p>
                <a
                  href="mailto:info@eprnexuss.com"
                  className="inline-flex rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
                >
                  Consult the Certification Experts
                </a>
              </motion.div>
            </div>
          </div>

          {/* ── STICKY SIDEBAR (same as reference blog) ── */}
          <aside
            className="hidden lg:block w-[280px] flex-shrink-0 self-start"
            style={{ position: "sticky", top: "7rem" }}
          >
            <StickyContactForm />
          </aside>
        </div>
      </div>
    </>
  );
};

export default LithiumIonBatteryComplianceCertification;