import React from "react";
import Seo from "@/components/Seo";
import StickyContactForm from "@/components/StickyContactForm";
import { motion, Variants } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Motion Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const checklistChartData = [
  { name: "Company", value: 10 },
  { name: "GST + Exemption", value: 9 },
  { name: "CTE", value: 10 },
  { name: "CTO", value: 10 },
  { name: "Hazardous", value: 7 },
  { name: "Fire NOC", value: 8 },
  { name: "Factory", value: 9 },
  { name: "EPR", value: 9 },
];

const priorityChartData = [
  { name: "CTE", value: 10 },
  { name: "CTO", value: 10 },
  { name: "Site / Land", value: 9 },
  { name: "Fire Safety", value: 8 },
  { name: "EPR / Reporting", value: 8 },
  { name: "Hazardous", value: 7 },
];

const stageChartData = [
  { name: "Planning", value: 6 },
  { name: "Construction", value: 8 },
  { name: "Pre-Operation", value: 9 },
  { name: "Operation", value: 7 },
  { name: "Renewal / Audit", value: 6 },
];

const caseStudyChartData = [
  {
    name: "Document Readiness",
    before: 4,
    after: 9,
  },
  {
    name: "Approval Clarity",
    before: 3,
    after: 9,
  },
  {
    name: "Delay Risk",
    before: 9,
    after: 3,
  },
  {
    name: "Confidence",
    before: 4,
    after: 9,
  },
  {
    name: "Rework",
    before: 8,
    after: 2,
  },
];

const approvals = [
  "Consent to Establish (CTE) before construction",
  "Consent to Operate (CTO) before production",
  "Plastic waste / EPR-linked compliance",
  "Hazardous waste authorization (if applicable)",
  "Local body / building approvals",
  "Safety and fire clearance",
];

const checklistSteps = [
  {
    no: "1",
    title: "Company registration",
    desc: "The business must first exist in a legal form such as proprietorship, partnership, LLP, or private limited company.",
  },
  {
    no: "2",
    title: "GST Registration + Pollution Cess Exemption",
    desc: "GST registration supports business operations, and pollution-related exemption planning can help improve cost efficiency where applicable.",
  },
  {
    no: "3",
    title: "Consent to Establish (CTE)",
    desc: "This is the first core environmental approval before construction or plant setup begins.",
  },
  {
    no: "4",
    title: "Consent to Operate (CTO)",
    desc: "Once the plant is installed and ready, CTO is required before starting regular production.",
  },
  {
    no: "5",
    title: "Hazardous Waste Authorisation",
    desc: "If the plant handles controlled waste streams such as sludge, used oil, or other regulated waste, this approval may be required.",
  },
  {
    no: "6",
    title: "Fire NOC",
    desc: "Fire safety planning, emergency exits, extinguishers, and access routes are reviewed through this clearance.",
  },
  {
    no: "7",
    title: "Factory Licence",
    desc: "This supports lawful factory operation where machinery and labor are used for manufacturing activity.",
  },
  {
    no: "8",
    title: "EPR Registration on CPCB Portal",
    desc: "Recyclers and processors must be aligned with the CPCB portal framework for reporting and compliance records.",
  },
];

const ChartCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-3xl border border-border bg-background/60 p-4 md:p-6 shadow-sm w-full min-w-0">
    <h3 className="mb-6 text-xl font-semibold text-foreground break-words">{title}</h3>
    <div className="h-[300px] md:h-[340px] w-full">{children}</div>
  </div>
);

const PlasticApprovals: React.FC = () => {
  return (
    <>
      <Seo
        title="Plastic Recycling Plant Approvals & CPCB Compliance Guide - How to Get CTE & CTO"
        description="Complete guide on Plastic Recycling Plant Approvals in India. Learn how to get Consent to Establish (CTE), Consent to Operate (CTO), EPR Registration, Hazardous Waste Authorization, and full compliance checklist for starting a plastic recycling business."
        keywords={[
          "Plastic Recycling Plant Approvals",
          "How to Get CPCB Approval for Plastic Recycling Plant",
          "Consent to Establish Plastic Recycling",
          "Consent to Operate Plastic Plant",
          "Plastic Waste Recycling Compliance",
          "CPCB EPR Registration for Recyclers",
          "How to Start Plastic Recycling Plant in India",
          "Plastic Recycling Plant License and Approvals",
          "CTE CTO for Plastic Recycling",
          "Plastic Waste Management Rules Compliance"
        ]}
        url="https://eprnexuss.com/blog/plastic-approvals"
        type="article"
      />
      
      {/* GLOBAL SCROLLABLE CONTENT WRAPPER */}
      <div className="w-full mt-[119px] max-w-full space-y-16 p-1 min-w-0">
        
        

        {/* RESPONSIVE LAYOUT MATRIX */}
        <div className="flex flex-col lg:flex-row gap-3 items-stretch">
          <div>
            {/* HERO */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="rounded-[32px] border border-border bg-gradient-to-br from-background to-secondary/5 p-6 md:p-12 mx-1 shadow-sm"
        >
          <motion.div variants={fadeInUp} className="mb-5 flex  flex-wrap gap-2 text-[10px] md:text-xs uppercase tracking-[0.3em] text-secondary font-semibold">
            {["Plastic Recycling", "Approvals", "CPCB", "Compliance"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary/10 px-3 py-1.5 md:px-4 md:py-2"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>

          <motion.h1 variants={fadeInUp} className="max-w-4xl text-3xl font-bold leading-tight text-foreground md:text-6xl break-words">
            Turn Compliance Into a Smooth Start, Not a Last-Minute Panic
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-6 max-w-3xl text-base md:text-lg leading-7 md:leading-8 text-muted-foreground">
            A plastic recycling plant works best when the approvals are planned
            early. The right sequence saves time, avoids rework, and helps the
            business move from idea to operation with confidence.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3 md:gap-4">
            <button className="rounded-2xl bg-secondary px-5 py-3 text-sm md:text-base font-semibold text-secondary-foreground transition hover:scale-105">
              Get Approval Guidance
            </button>

            <button className="rounded-2xl border border-border px-5 py-3 text-sm md:text-base font-semibold text-foreground transition hover:bg-muted">
              See Real-World Example
            </button>
          </motion.div>
        </motion.section>
          
          {/* LEFT/CENTER PRIMARY FLOW */}
          <main className="lg:col-span-2 w-full min-w-0 flex flex-col gap-16">
            
            {/* WHY APPROVALS */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="space-y-5 w-full"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground break-words">
                Why Approvals Matter So Much
              </h2>

              <p className="leading-7 md:leading-8 text-muted-foreground text-sm md:text-base">
                Good approvals do more than satisfy a formality. They protect the
                project, support operations, and give the client a cleaner path to
                start-up. When approvals are delayed, the plant delays too. When
                approvals are planned well, the project feels manageable.
              </p>

              <motion.div variants={staggerContainer} className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Land & Site Fit",
                    desc: "The site must suit industrial activity and utility needs",
                  },
                  {
                    title: "Environmental Consent",
                    desc: "CTE and CTO keep the plant legally aligned",
                  },
                  {
                    title: "Waste Handling",
                    desc: "Additional authorization may apply for regulated waste streams",
                  },
                  {
                    title: "Reporting Discipline",
                    desc: "Recyclers/processors follow annual reporting requirements",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    className="rounded-3xl border border-border bg-background p-5 md:p-6"
                  >
                    <h3 className="mb-2 text-lg md:text-xl font-semibold text-foreground break-words">
                      {item.title}
                    </h3>

                    <p className="text-sm md:text-base leading-6 md:leading-7 text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* MOBILE ONLY CONTACT INLINE CONTAINER */}
            <div className="block lg:hidden w-full">
              <div className="rounded-3xl border border-border bg-background/60 p-5 shadow-sm">
                <h3 className="text-lg font-bold mb-1 text-foreground">Connect With Our Experts</h3>
                <p className="text-xs text-muted-foreground mb-4">Have questions regarding approvals or your compliance roadmap?</p>
                <StickyContactForm />
              </div>
            </div>

            {/* APPROVALS */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="space-y-5 w-full"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground break-words">
                Main Approvals Clients Usually Need
              </h2>

              <p className="leading-7 md:leading-8 text-muted-foreground text-sm md:text-base">
                The exact list depends on the plant design, location, and process
                line. Most clients need CTE, CTO, plastic waste compliance,
                hazardous waste authorization if applicable, local body approvals,
                and fire clearance.
              </p>

              <motion.div variants={staggerContainer} className="grid gap-4 sm:grid-cols-2">
                {approvals.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeInUp}
                    className="rounded-3xl border border-border bg-background p-5"
                  >
                    <p className="text-sm md:text-base leading-6 md:leading-7 text-muted-foreground break-words">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* CHECKLIST */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="space-y-8 w-full"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground break-words">
                  Licences & Approvals — The Complete Checklist
                </h2>

                <p className="mt-4 leading-7 md:leading-8 text-muted-foreground text-sm md:text-base">
                  This checklist gives clients a clear order to follow. When
                  approvals are handled in sequence, the project is easier to manage
                  and far less stressful.
                </p>
              </div>

              <motion.div variants={staggerContainer} className="space-y-4">
                {checklistSteps.map((step) => (
                  <motion.div
                    key={step.no}
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-4 rounded-3xl border border-border bg-background p-5 md:p-6"
                  >
                    <div className="flex h-12 w-12 min-w-[48px] items-center justify-center rounded-2xl bg-secondary text-base font-bold text-secondary-foreground shrink-0">
                      {step.no}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-lg md:text-xl font-semibold text-foreground break-words">
                        {step.title}
                      </h3>

                      <p className="text-sm md:text-base leading-6 md:leading-7 text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* TABLE */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="space-y-6 w-full"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground break-words">
                Approval Database for Client Understanding
              </h2>

              <p className="leading-7 md:leading-8 text-muted-foreground text-sm md:text-base">
                This simple table helps clients see the approval, why it matters,
                and when it usually comes into the project flow.
              </p>

              <div className="overflow-x-auto rounded-3xl border border-border w-full">
                <table className="w-full min-w-[800px] border-collapse table-auto">
                  <thead className="bg-muted/40">
                    <tr>
                      <th className="p-4 text-left text-sm font-semibold text-foreground min-w-[140px]">Approval</th>
                      <th className="p-4 text-left text-sm font-semibold text-foreground min-w-[180px]">Why it matters</th>
                      <th className="p-4 text-left text-sm font-semibold text-foreground min-w-[120px]">Who issues it</th>
                      <th className="p-4 text-left text-sm font-semibold text-foreground min-w-[130px]">Usual stage</th>
                      <th className="p-4 text-left text-sm font-semibold text-foreground min-w-[160px]">Support documents</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-border">
                    {[
                      [
                        "Consent to Establish (CTE)",
                        "Allows the plant to move ahead with setup in a compliant way",
                        "SPCB / PCC",
                        "Before construction",
                        "Site details, layout, process note",
                      ],
                      [
                        "Consent to Operate (CTO)",
                        "Required before regular production",
                        "SPCB / PCC",
                        "After installation",
                        "Installed machinery list, utilities",
                      ],
                      [
                        "Plastic waste / EPR-linked reporting",
                        "Kekeeps recycler/processors inside reporting framework",
                        "CPCB / SPCB",
                        "Operation phase",
                        "Registration details, capacity",
                      ],
                      [
                        "Hazardous waste authorization",
                        "Needed where regulated waste is handled",
                        "SPCB / PCC",
                        "Before handling waste",
                        "Waste details and safety plan",
                      ],
                    ].map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, idx) => (
                          <td
                            key={idx}
                            className="p-4 align-top text-xs md:text-sm leading-6 text-muted-foreground break-words whitespace-normal"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* CHECKLIST CHART */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="w-full min-w-0"
            >
              <ChartCard title="Checklist Priority Chart">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={checklistChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: "#94a3b8", fontSize: 10 }}
                      interval={0}
                      angle={-25}
                      textAnchor="end"
                      height={50}
                    />
                    <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} />
                    <Tooltip />
                    <Bar
                      dataKey="value"
                      radius={[6, 6, 0, 0]}
                      fill="#16a34a"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </motion.section>

            {/* PRIORITY CHART */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="space-y-6 w-full min-w-0"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground break-words">
                  Approval Priority Chart
                </h2>

                <p className="mt-4 leading-7 md:leading-8 text-muted-foreground text-sm md:text-base">
                  Not every approval has the same urgency. Some approvals are
                  decision-makers at the start, while others become important once
                  the plant is nearing operation.
                </p>
              </div>

              <ChartCard title="Approval Priority">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={priorityChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: "#94a3b8", fontSize: 10 }}
                      interval={0}
                      angle={-25}
                      textAnchor="end"
                      height={50}
                    />
                    <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} />
                    <Tooltip />
                    <Bar
                      dataKey="value"
                      radius={[6, 6, 0, 0]}
                      fill="#2563eb"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </motion.section>

            {/* ROADMAP */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="space-y-6 w-full"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground break-words">
                Approval Roadmap Made Easy
              </h2>

              <p className="leading-7 md:leading-8 text-muted-foreground text-sm md:text-base">
                A client understands the project much better when the sequence is
                simple. This is the usual flow we recommend.
              </p>

              <motion.div variants={staggerContainer} className="grid gap-4">
                {[
                  "Check the site first",
                  "Prepare the project file",
                  "Apply for CTE",
                  "Install the plant",
                  "Apply for CTO and operational approvals",
                  "Start reporting and compliance tracking",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    variants={fadeInUp}
                    className="flex items-center gap-4 rounded-3xl border border-border bg-background p-4 md:p-5"
                  >
                    <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-2xl bg-secondary text-sm font-bold text-secondary-foreground shrink-0">
                      {index + 1}
                    </div>

                    <h3 className="text-base md:text-lg font-semibold text-foreground break-words">
                      {item}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* STAGE CHART */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="space-y-6 w-full min-w-0"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground break-words">
                  Compliance Load by Project Stage
                </h2>

                <p className="mt-4 leading-7 md:leading-8 text-muted-foreground text-sm md:text-base">
                  This chart shows how the compliance work changes from the start of
                  the project to the operating phase.
                </p>
              </div>

              <ChartCard title="Compliance Load">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stageChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: "#94a3b8", fontSize: 10 }}
                      interval={0}
                      angle={-20}
                      textAnchor="end"
                      height={45}
                    />
                    <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} />
                    <Tooltip />
                    <Bar
                      dataKey="value"
                      radius={[6, 6, 0, 0]}
                      fill="#0f766e"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </motion.section>

            {/* CASE STUDY */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="space-y-8 w-full min-w-0"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground break-words">
                  Case Study: A Client Who Avoided Delays by Planning Approvals Early
                </h2>

                <p className="mt-4 leading-7 md:leading-8 text-muted-foreground text-sm md:text-base">
                  A mid-sized plastic recycler wanted to start quickly and had
                  already identified machinery, but the approvals side was not
                  organized.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-background p-5 md:p-6">
                  <h3 className="mb-3 text-xl font-semibold text-foreground break-words">
                    The challenge
                  </h3>

                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                    <li>• Project file did not match machinery plan</li>
                    <li>• Land and site documents were incomplete</li>
                    <li>• Construction planning started too early</li>
                    <li>• Approval sequence was unclear</li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-border bg-background p-5 md:p-6">
                  <h3 className="mb-3 text-xl font-semibold text-foreground break-words">
                    What we changed
                  </h3>

                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                    <li>• Rebuilt the approval sequence</li>
                    <li>• Prepared a cleaner project file</li>
                    <li>• Organized documents into one pack</li>
                    <li>• Helped the client move step by step</li>
                  </ul>
                </div>
              </div>

              <ChartCard title="Before vs After Better Approval Planning">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={caseStudyChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: "#94a3b8", fontSize: 10 }}
                      interval={0}
                      angle={-20}
                      textAnchor="end"
                      height={45}
                    />
                    <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} />
                    <Tooltip />
                    {/* Fixed TS2769: Changed 'pt' to valid standard CSS property 'paddingTop' */}
                    <Legend wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />

                    <Bar
                      dataKey="before"
                      radius={[6, 6, 0, 0]}
                      fill="#94a3b8"
                    />

                    <Bar
                      dataKey="after"
                      radius={[6, 6, 0, 0]}
                      fill="#16a34a"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </motion.section>

            {/* CLIENT GAINS */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="space-y-6 w-full"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground break-words">
                What the Client Gains
              </h2>

              <motion.div variants={staggerContainer} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    title: "Clear Direction",
                    desc: "The client knows what comes next",
                  },
                  {
                    title: "Better Timing",
                    desc: "Approvals are sequenced properly",
                  },
                  {
                    title: "Fewer Revisions",
                    desc: "Documents are prepared more carefully",
                  },
                  {
                    title: "Strong Launch",
                    desc: "The plant starts with more confidence",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    className="rounded-3xl border border-border bg-background p-5"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-foreground break-words">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-6">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* FAQ */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="space-y-5 w-full"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground break-words">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {[
                  {
                    q: "Do all plastic recycling plants need the same approvals?",
                    a: "No. The exact approvals depend on the plant size, process, location, and the kind of waste handled.",
                  },
                  {
                    q: "What should come first, machine purchase or approvals?",
                    a: "Approvals and project planning should come first. Machine purchase is safer once the approval path is understood.",
                  },
                  {
                    q: "Why do clients often get delayed?",
                    a: "Most delays come from incomplete documents, unclear site planning, and starting work before the consent sequence is ready.",
                  },
                  {
                    q: "Is annual reporting important for recyclers?",
                    a: "Yes. Recyclers and processors are part of the reporting framework in the Plastic Waste Management Rules.",
                  },
                ].map((item) => (
                  <details
                    key={item.q}
                    className="rounded-3xl border border-border bg-background p-5 group"
                  >
                    <summary className="cursor-pointer text-base md:text-lg font-semibold text-foreground list-none flex justify-between items-center group-open:mb-4">
                      <span className="break-words max-w-[90%]">{item.q}</span>
                      <span className="text-muted-foreground transition-transform group-open:rotate-180 text-sm">▼</span>
                    </summary>

                    <p className="text-sm md:text-base leading-6 md:leading-7 text-muted-foreground border-t border-border/40 pt-3">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </motion.section>
          </main>
          </div>

          {/* RIGHT COLUMN: DESKTOP STICKY SIDEBAR AREA */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-24 self-start w-[490px]">
            <StickyContactForm />
          </aside>

        </div>
      </div>
    </>
  );
};

export default PlasticApprovals;