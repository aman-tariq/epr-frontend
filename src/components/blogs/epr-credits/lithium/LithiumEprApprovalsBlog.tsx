import StickyContactForm from "@/components/StickyContactForm";
import React from "react";
import { motion } from "framer-motion";

// Unified explicit interfaces matching the fixed helper components
interface StepProps {
  icon: string;
  stage: string;
  details: string;
}

interface CardProps {
  kicker: string;
  title: string;
  desc: string;
}

interface BarProps {
  label: string;
  valueText: string;
  percentage: string;
  barColorStyle?: string;
}

interface ChecklistProps {
  title: string;
  desc: string;
}

interface TimelineItemProps {
  title: string;
  desc: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

interface MiniCardProps {
  title: string;
  desc: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function EprLithiumComplianceRoadmap(): React.JSX.Element {
  return (
    <div className="min-h-screen text-[#0f172a] bg-[#f5f7fb] leading-relaxed antialiased selection:bg-teal-200 selection:text-teal-900 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.12),transparent_22%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_26%)]">
      <div className="max-w-8xl mx-auto mt-[100px] px-4 pt-7 pb-15 sm:px-3 sm:pt-4 sm:pb-10">
        {/* HEADER / HERO SECTION - Fixed text readability and layout values */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-[32px] p-6 md:p-8 text-white shadow-xl"
        >
          <div className="absolute inset-0 mix-blend-multiply pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-4 relative z-10 mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 font-semibold text-sm tracking-wide text-teal-300">
              ⚡ Regulatory Blueprint
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 font-semibold text-sm tracking-wide text-blue-300">
              ♻️ EPR Lithium Credits
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8 items-start relative z-10">
            <div>
              <h1 className="my-2.5 font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white">
                EPR Lithium Credits: The Complete Registration, Approvals &
                Regulatory Compliance Roadmap
              </h1>
              <p className="mb-4 text-slate-300 text-base md:text-lg leading-relaxed">
                This comprehensive guide explains the complete registration
                process, regulatory approvals, compliance requirements,
                documentation, and lithium EPR credit management for producers,
                importers, brand owners, and authorized recyclers.
              </p>
              <p className="mb-6 text-slate-300 text-base md:text-lg leading-relaxed">
                Learn the approval workflow, required documents, compliance
                obligations, credit generation process, and practical strategies
                to maintain regulatory compliance while supporting sustainable
                battery waste management.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Registration Workflow",
                  "Approval Readiness",
                  "Credit Tracking",
                  "Compliance Planning",
                  "Risk Reduction",
                ].map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl font-medium text-xs bg-slate-800 border border-slate-700 text-teal-200"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-6 ">
                {[
                  "⏱️ 14–16 Min Read",
                  "📅 Optimized Blog Layout",
                  "🎨 Colorful Modern Design",
                  "📌 SEO-Friendly Structure",
                ].map((metaSpan, idx) => (
                  <span
                    key={idx}
                    className=" w-fit px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-sm"
                  >
                    {metaSpan}
                  </span>
                ))}
              </div>
            </div>

            <aside className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 backdrop-blur-md shadow-lg w-full">
              <h3 className="m-0 mb-3 text-lg font-bold text-white border-b border-slate-700 pb-2">
                What this blog covers
              </h3>
              <ul className="m-0 pl-4 text-slate-300 list-disc space-y-3 text-sm">
                <li>
                  Why EPR Lithium Credits matter in the battery waste cycle
                </li>
                <li>Step-by-step registration and approval workflow</li>
                <li>Key documents, target mapping, and operational checks</li>
                <li>Benefits, challenges, and common compliance mistakes</li>
              </ul>
            </aside>
          </div>
        </motion.header>
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          <div className="container">
            {/* SECTION 1: FRAMEWORK */}
            <Reveal delay={0.05}>
              {" "}
              <section
                className="mt-8 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm"
                id="overview"
              >
                <h2 className="m-0 mb-3 text-2xl font-bold tracking-tight text-slate-900">
                  1. Understanding the EPR Framework for Lithium-Ion Batteries
                </h2>
                <p className="text-slate-600 mb-6 text-base">
                  Extended Producer Responsibility, or EPR, shifts part of the
                  responsibility for post-consumer battery waste back to the
                  companies that place batteries in the market. In a structured
                  EPR system, compliance is not only about collecting waste; it
                  is also about documenting recovery, proving traceability, and
                  recording the environmental value created through recycling.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <RoleCard
                    kicker="Market Role"
                    title="Producers & Importers"
                    desc="They bring lithium batteries into circulation and carry the main responsibility to meet recycling obligations and maintain records."
                  />
                  <RoleCard
                    kicker="Recovery Role"
                    title="Authorized Recyclers"
                    desc="They process end-of-life batteries, recover materials, and support credit generation based on verified output."
                  />
                  <RoleCard
                    kicker="Execution Role"
                    title="PROs & Partners"
                    desc="They help coordinate collection, logistics, documentation, and reporting across the compliance chain."
                  />
                </div>

                <div className="my-6 p-5 bg-slate-50 border border-dashed border-slate-200 rounded-2xl">
                  <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <FlowStep
                      icon="🏭"
                      stage="Production"
                      details="Battery placed on market"
                    />
                    <div className="text-slate-400 text-xl font-bold rotate-90 lg:rotate-0">
                      ➔
                    </div>
                    <FlowStep
                      icon="📦"
                      stage="Collection"
                      details="Waste returns through channels"
                    />
                    <div className="text-slate-400 text-xl font-bold rotate-90 lg:rotate-0">
                      ➔
                    </div>
                    <FlowStep
                      icon="🔄"
                      stage="Recycling"
                      details="Material recovery & processing"
                    />
                  </div>
                </div>

                <div className="my-4 p-4 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 text-sm">
                  <strong className="font-semibold text-amber-950">
                    Compliance idea:
                  </strong>{" "}
                  A strong EPR setup works like a closed loop. The better the
                  traceability, the easier it becomes to prove responsibility,
                  avoid gaps, and maintain audit readiness.
                </div>
              </section>{" "}
            </Reveal>

            {/* SECTION 2: WHY THEY MATTER */}
            <Reveal delay={0.05}>
              {" "}
              <section
                className="mt-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm"
                id="why"
              >
                <h2 className="m-0 mb-3 text-2xl font-bold tracking-tight text-slate-900">
                  2. Why EPR Lithium Credits Matter
                </h2>
                <p className="text-slate-600 mb-6">
                  Lithium-ion batteries are everywhere: consumer electronics,
                  mobility systems, industrial devices, and energy storage
                  units. As usage grows, the volume of end-of-life batteries
                  rises too. EPR Lithium Credits are used as a structured way to
                  show that a company has fulfilled a part of its recycling
                  obligation through verified recovery activity.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                  <div className="rounded-2xl p-5 border border-slate-200 bg-slate-50/50">
                    <h3 className="m-0 mb-4 text-base font-bold text-slate-800">
                      Responsibility Split by Stakeholder Type
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div
                        className="w-40 h-40 rounded-full shrink-0 shadow-inner"
                        style={{
                          background:
                            "conic-gradient(#0f766e 0% 45%, #2563eb 45% 75%, #f59e0b 75% 92%, #7c3aed 92% 100%)",
                        }}
                      />
                      <div className="grid gap-2 w-full">
                        <LegendItem
                          dotColor="bg-teal-700"
                          text="Producers / EV brands — major share"
                        />
                        <LegendItem
                          dotColor="bg-blue-600"
                          text="Importers / partners — tracking"
                        />
                        <LegendItem
                          dotColor="bg-amber-500"
                          text="Industrial users — recovery support"
                        />
                        <LegendItem
                          dotColor="bg-purple-600"
                          text="Recyclers — credit generation"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl p-5 border border-slate-200 bg-slate-50/50">
                    <h3 className="m-0 mb-4 text-base font-bold text-slate-800">
                      Why businesses pay attention
                    </h3>
                    <ProgressBar
                      label="Regulatory preparedness"
                      valueText="High"
                      percentage="92%"
                    />
                    <ProgressBar
                      label="Traceability confidence"
                      valueText="Strong"
                      percentage="84%"
                      barColorStyle="bg-gradient-to-r from-teal-500 to-cyan-500"
                    />
                    <ProgressBar
                      label="Audit readiness"
                      valueText="Very important"
                      percentage="88%"
                      barColorStyle="bg-gradient-to-r from-amber-500 to-rose-500"
                    />
                    <ProgressBar
                      label="Operational transparency"
                      valueText="Essential"
                      percentage="90%"
                      barColorStyle="bg-gradient-to-r from-purple-500 to-blue-500"
                    />
                  </div>
                </div>
              </section>{" "}
            </Reveal>

            {/* SECTION 3: WORKFLOW */}
            <Reveal delay={0.05}>
              {" "}
              <section
                className="mt-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm"
                id="workflow"
              >
                <h2 className="m-0 mb-3 text-2xl font-bold tracking-tight text-slate-900">
                  3. Step-by-Step Portal Registration & Approval Workflow
                </h2>
                <p className="text-slate-600 mb-6">
                  A complete compliance journey is usually smoother when the
                  documents, roles, and targets are organized before filing. The
                  sequence below turns the process into a simple roadmap.
                </p>

                <div className="my-6 p-5 bg-slate-50 border border-dashed border-slate-200 rounded-2xl space-y-4">
                  <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <FlowStep
                      icon="📝"
                      stage="Step 1"
                      details="Prepare company details, certificates, and core business documents"
                    />
                    <div className="text-slate-400 text-xl font-bold rotate-90 lg:rotate-0">
                      ➔
                    </div>
                    <FlowStep
                      icon="🔍"
                      stage="Step 2"
                      details="Check eligibility, internal records, and compliance boundaries"
                    />
                    <div className="text-slate-400 text-xl font-bold rotate-90 lg:rotate-0">
                      ➔
                    </div>
                    <FlowStep
                      icon="📊"
                      stage="Step 3"
                      details="Declare market-linked quantities and credit requirements"
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <FlowStep
                      icon="🏢"
                      stage="Step 4"
                      details="Submit recycler capacity and operational proof"
                    />
                    <div className="text-slate-400 text-xl font-bold rotate-90 lg:rotate-0">
                      ➔
                    </div>
                    <FlowStep
                      icon="✅"
                      stage="Step 5"
                      details="Obtain approval, maintain logs, and monitor updates"
                    />
                    <div className="text-slate-400 text-xl font-bold rotate-90 lg:rotate-0">
                      ➔
                    </div>
                    <FlowStep
                      icon="💳"
                      stage="Step 6"
                      details="Generate, track, and reconcile credits as required"
                    />
                  </div>
                </div>

                <div className="relative pl-6 border-l-2 border-slate-200 ml-2 space-y-4">
                  <TimelineItem
                    title="Portal onboarding"
                    desc="Begin with registration and profile setup. Make sure entity names, addresses, tax records, and contact information match all supporting documents."
                  />
                  <TimelineItem
                    title="Target declaration"
                    desc="Enter the relevant market data, product categories, and reporting years so compliance obligations can be mapped properly."
                  />
                  <TimelineItem
                    title="Capacity review"
                    desc="For recyclers, capacity and process proof matter. Operational evidence should clearly show how recovery and reporting are supported."
                  />
                  <TimelineItem
                    title="Authorization and monitoring"
                    desc="Once approved, the work is ongoing. Records, reconciliation, and internal audits need to stay active through the year."
                  />
                </div>
              </section>{" "}
            </Reveal>

            {/* SECTION 4: ESCALATING TARGETS */}
            <Reveal delay={0.05}>
              {" "}
              <section
                className="mt-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm"
                id="targets"
              >
                <h2 className="m-0 mb-3 text-2xl font-bold tracking-tight text-slate-900">
                  4. Phased Compliance Windows & Material Recovery Targets
                </h2>
                <p className="text-slate-600 mb-6">
                  Compliance planning is easier when teams work backward from
                  the target date. A phased approach helps businesses manage
                  collection, recycling, and reporting without last-minute
                  pressure.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="rounded-2xl p-5 border border-slate-200 bg-slate-50/50">
                    <h3 className="m-0 mb-4 text-base font-bold text-slate-800">
                      Illustrative Recovery Progress
                    </h3>
                    <ProgressBar
                      label="Phase 1"
                      valueText="60%"
                      percentage="60%"
                    />
                    <ProgressBar
                      label="Phase 2"
                      valueText="70%"
                      percentage="70%"
                      barColorStyle="bg-gradient-to-r from-teal-500 to-blue-500"
                    />
                    <ProgressBar
                      label="Phase 3"
                      valueText="85%"
                      percentage="85%"
                      barColorStyle="bg-gradient-to-r from-amber-500 to-rose-500"
                    />
                  </div>

                  <div className="rounded-2xl p-5 border border-slate-200 bg-slate-50/50">
                    <h3 className="m-0 mb-4 text-base font-bold text-slate-800">
                      What to monitor every month
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <ChecklistItem
                        title="Sales & Placement"
                        desc="Track battery weight introduced to market."
                      />
                      <ChecklistItem
                        title="Collection Channels"
                        desc="Watch return volumes from logistics loops."
                      />
                      <ChecklistItem
                        title="Recycling Yields"
                        desc="Maintain strict output and recovery records."
                      />
                      <ChecklistItem
                        title="Credit Balances"
                        desc="Match allocations against milestones."
                      />
                    </div>
                  </div>
                </div>
              </section>{" "}
            </Reveal>

            {/* SECTION 5: REQUIRED DOCUMENTS */}
            <Reveal delay={0.05}>
              {" "}
              <section
                className="mt-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm"
                id="documents"
              >
                <h2 className="m-0 mb-3 text-2xl font-bold tracking-tight text-slate-900">
                  5. Required Documents, Data Points, and Internal Checks
                </h2>
                <p className="text-slate-600 mb-6">
                  A smooth registration process depends on document discipline.
                  The aim is to make every detail consistent across legal,
                  financial, and technical records.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <RoleCard
                    kicker="Set 1"
                    title="Identity & Legal Proofs"
                    desc="PAN, GST details, company incorporation records, and authorized signatory information."
                  />
                  <RoleCard
                    kicker="Set 2"
                    title="Operational Proof"
                    desc="Site details, process flows, operational safety parameters, and processing capacities."
                  />
                  <RoleCard
                    kicker="Set 3"
                    title="Compliance Trail"
                    desc="Sales manifests, collection sheets, recovery receipts, and cross-reconciliation ledgers."
                  />
                </div>
              </section>{" "}
            </Reveal>

            {/* SECTION 6: BUSINESS BENEFITS */}
            <Reveal delay={0.05}>
              {" "}
              <section
                className="mt-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm"
                id="benefits"
              >
                <h2 className="m-0 mb-3 text-2xl font-bold tracking-tight text-slate-900">
                  6. Business Benefits of a Strong EPR Lithium Strategy
                </h2>
                <p className="text-slate-600 mb-6">
                  A well-planned compliance system does more than satisfy
                  regulatory requirements. It can improve internal control,
                  strengthen brand trust, and create a better understanding of
                  material flows.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <RoleCard
                    kicker="Advantage 1"
                    title="Clearer Governance"
                    desc="Companies gain absolute visibility over product lifecycles, active liabilities, and statutory tracking."
                  />
                  <RoleCard
                    kicker="Advantage 2"
                    title="Impeccable Audits"
                    desc="Maintained operational records verify every single metric back to source processing units seamlessly."
                  />
                  <RoleCard
                    kicker="Advantage 3"
                    title="Minimized Risk"
                    desc="Constant continuous tracking avoids sudden fines, application stalling, or compliance gridlocks."
                  />
                </div>
              </section>{" "}
            </Reveal>

            {/* SECTION 7: RISKS AND MISTAKES */}
            <Reveal delay={0.05}>
              {" "}
              <section
                className="mt-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm"
                id="risks"
              >
                <h2 className="m-0 mb-3 text-2xl font-bold tracking-tight text-slate-900">
                  7. Common Risks, Mistakes, and How to Avoid Them
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <ChecklistItem
                    title="Entity Detail Mismatches"
                    desc="Ensure absolute textual consistency in corporation forms, tax ids, and certificates."
                  />
                  <ChecklistItem
                    title="Incomplete Record Pipelines"
                    desc="Do not delay entering recycling proof or logistics collection notes."
                  />
                  <ChecklistItem
                    title="Last-Minute Scrambling"
                    desc="Submit profile inputs early to allocate time for administrative responses."
                  />
                  <ChecklistItem
                    title="Poor Reconciliation"
                    desc="Double check calculation conversions before final balance submission."
                  />
                </div>
              </section>{" "}
            </Reveal>

            {/* SECTION 8: FAQS */}
            <Reveal delay={0.05}>
              {" "}
              <section
                className="mt-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm"
                id="faq"
              >
                <h2 className="m-0 mb-4 text-2xl font-bold tracking-tight text-slate-900">
                  8. Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  <FAQAccordion
                    question="What are EPR Lithium Credits in simple terms?"
                    answer="They are legal compliance tokens validating that an obligor has responsibly recovered and recycled specific weights of hazardous battery waste elements via certified processes."
                  />
                  <FAQAccordion
                    question="Why is documentation so critical?"
                    answer="Regulatory systems depend completely on continuous verification. Unchecked data fields or missing physical metrics compromise audit validity."
                  />
                  <FAQAccordion
                    question="Can recyclers and producers cooperate directly?"
                    answer="Yes. The regulatory dynamic sets a cooperative framework where recycler outcomes satisfy producer market assignment metrics."
                  />
                </div>
              </section>{" "}
            </Reveal>

            {/* FOOTER CTA */}
            <footer className="relative overflow-hidden bg-slate-950 border border-slate-800 text-white rounded-3xl p-6 md:p-8 mt-8 shadow-xl">
              <h2 className="m-0 mb-2.5 text-white font-bold text-2xl">
                Conclusion
              </h2>
              <p className="m-0 text-slate-400 leading-relaxed max-w-3xl text-sm md:text-base">
                EPR Lithium Credits turn battery compliance into a structured,
                trackable process. When companies treat registration, approvals,
                recovery targets, and credit reconciliation as one connected
                system, the entire workflow becomes easier to manage and audit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <MiniCard
                  title="Plan Early"
                  desc="Assemble core statutory documentation folders prior to initiation paths."
                />
                <MiniCard
                  title="Track Monthly"
                  desc="Log exact intake parameters alongside dynamic structural outputs regularized."
                />
                <MiniCard
                  title="Keep Consistent"
                  desc="Align cross-functional identity declarations seamlessly across portal inputs."
                />
                <MiniCard
                  title="Stay Audit-Ready"
                  desc="Build robust localized reference file systems verified internal reviews."
                />
              </div>
            </footer>
          </div>
          <aside className="hidden lg:block shrink-0 width-[320px]">
            <div className="sticky top-28 px-2">
              <StickyContactForm />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MODULAR COMPONENT BLOCKS
// ============================================================================

function RoleCard({ kicker, title, desc }: CardProps): React.JSX.Element {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-teal-100 text-teal-800">
        {kicker}
      </span>
      <h4 className="m-0 mb-2 text-base font-bold text-slate-900">{title}</h4>
      <p className="m-0 text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FlowStep({ icon, stage, details }: StepProps): React.JSX.Element {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm flex-1 w-full min-h-[120px] flex flex-col justify-center items-center">
      <span className="text-2xl block mb-2">{icon}</span>
      <b className="block mb-1 text-slate-900 text-sm font-bold">{stage}</b>
      <span className="text-xs text-slate-500 leading-snug max-w-[200px]">
        {details}
      </span>
    </div>
  );
}

function LegendItem({
  dotColor,
  text,
}: {
  dotColor: string;
  text: string;
}): React.JSX.Element {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-600 bg-white border border-slate-200 rounded-xl p-2.5 shadow-sm">
      <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${dotColor}`} />
      <span>{text}</span>
    </div>
  );
}

function ProgressBar({
  label,
  valueText,
  percentage,
  barColorStyle = "bg-gradient-to-r from-blue-600 to-teal-600",
}: BarProps): React.JSX.Element {
  return (
    <div className="w-full my-3">
      <div className="flex justify-between items-center text-sm text-slate-600 mb-1.5">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="text-xs font-semibold text-slate-500">
          {valueText}
        </span>
      </div>
      <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full flex justify-end items-center text-white text-[10px] font-bold pr-2 transition-all duration-500 ${barColorStyle}`}
          style={{ width: percentage }}
        >
          {percentage}
        </div>
      </div>
    </div>
  );
}

function ChecklistItem({ title, desc }: ChecklistProps): React.JSX.Element {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-600 text-sm">
      <b className="text-slate-900 block mb-1 font-bold">{title}</b>
      <p className="m-0 leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function TimelineItem({ title, desc }: TimelineItemProps): React.JSX.Element {
  return (
    <div className="relative mb-4 bg-slate-50 border border-slate-200 rounded-xl p-4">
      <div className="absolute -left-[31px] top-5 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white" />
      <strong className="block mb-1 font-bold text-slate-900 text-sm">
        {title}
      </strong>
      <p className="m-0 text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FAQAccordion({ question, answer }: FAQItemProps): React.JSX.Element {
  return (
    <details className="bg-white border border-slate-200 rounded-xl p-4 transition-all group">
      <summary className="cursor-pointer font-bold text-slate-900 text-sm select-none list-none flex justify-between items-center group-open:text-teal-700">
        <span>{question}</span>
        <span className="text-xs text-slate-400 transition-transform duration-200 group-open:rotate-180">
          ▼
        </span>
      </summary>
      <p className="m-0 mt-3 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
        {answer}
      </p>
    </details>
  );
}

function MiniCard({ title, desc }: MiniCardProps): React.JSX.Element {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-md">
      <strong className="block mb-1 text-sm font-bold text-white">
        {title}
      </strong>
      <span className="text-slate-400 text-xs leading-normal block">
        {desc}
      </span>
    </div>
  );
}
