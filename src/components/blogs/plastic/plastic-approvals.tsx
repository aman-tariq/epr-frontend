import React from "react";
import Seo from "@/components/Seo";
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
  <div className="rounded-3xl border border-border bg-background/60 p-6 shadow-sm">
    <h3 className="mb-6 text-xl font-semibold text-foreground">{title}</h3>
    <div className="h-[340px] w-full">{children}</div>
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
    <div className="space-y-16">
      {/* HERO */}

      <section className="rounded-[32px] border border-border bg-gradient-to-br from-background to-secondary/5 p-8 md:p-12">
        <div className="mb-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-secondary font-semibold">
          {["Plastic Recycling", "Approvals", "CPCB", "Compliance"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary/10 px-4 py-2"
              >
                {tag}
              </span>
            )
          )}
        </div>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl">
          Turn Compliance Into a Smooth Start, Not a Last-Minute Panic
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          A plastic recycling plant works best when the approvals are planned
          early. The right sequence saves time, avoids rework, and helps the
          business move from idea to operation with confidence.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-2xl bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition hover:scale-105">
            Get Approval Guidance
          </button>

          <button className="rounded-2xl border border-border px-6 py-3 font-semibold text-foreground transition hover:bg-muted">
            See Real-World Example
          </button>
        </div>
      </section>

      {/* WHY APPROVALS */}

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold text-foreground">
          Why Approvals Matter So Much
        </h2>

        <p className="leading-8 text-muted-foreground">
          Good approvals do more than satisfy a formality. They protect the
          project, support operations, and give the client a cleaner path to
          start-up. When approvals are delayed, the plant delays too. When
          approvals are planned well, the project feels manageable.
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-background p-6"
            >
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="leading-7 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APPROVALS */}

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold text-foreground">
          Main Approvals Clients Usually Need
        </h2>

        <p className="leading-8 text-muted-foreground">
          The exact list depends on the plant design, location, and process
          line. Most clients need CTE, CTO, plastic waste compliance,
          hazardous waste authorization if applicable, local body approvals,
          and fire clearance.
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {approvals.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-border bg-background p-5"
            >
              <p className="leading-7 text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHECKLIST */}

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold text-foreground">
            Licences & Approvals — The Complete Checklist
          </h2>

          <p className="mt-4 leading-8 text-muted-foreground">
            This checklist gives clients a clear order to follow. When
            approvals are handled in sequence, the project is easier to manage
            and far less stressful.
          </p>
        </div>

        <div className="space-y-5">
          {checklistSteps.map((step) => (
            <div
              key={step.no}
              className="flex gap-5 rounded-3xl border border-border bg-background p-6"
            >
              <div className="flex h-14 w-14 min-w-[56px] items-center justify-center rounded-2xl bg-secondary text-lg font-bold text-secondary-foreground">
                {step.no}
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>

                <p className="leading-7 text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TABLE */}

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-foreground">
          Approval Database for Client Understanding
        </h2>

        <p className="leading-8 text-muted-foreground">
          This simple table helps clients see the approval, why it matters,
          and when it usually comes into the project flow.
        </p>

        <div className="overflow-x-auto rounded-3xl border border-border">
          <table className="w-full min-w-[1000px] border-collapse">
            <thead className="bg-muted/40">
              <tr>
                <th className="p-5 text-left text-foreground">Approval</th>
                <th className="p-5 text-left text-foreground">
                  Why it matters
                </th>
                <th className="p-5 text-left text-foreground">
                  Who issues it
                </th>
                <th className="p-5 text-left text-foreground">
                  Usual stage
                </th>
                <th className="p-5 text-left text-foreground">
                  Support documents
                </th>
              </tr>
            </thead>

            <tbody>
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
                  "Keeps recycler/processors inside reporting framework",
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
                <tr key={i} className="border-t border-border">
                  {row.map((cell, idx) => (
                    <td
                      key={idx}
                      className="p-5 align-top leading-7 text-muted-foreground"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CHECKLIST CHART */}

      <section>
        <ChartCard title="Checklist Priority Chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={checklistChartData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis
                dataKey="name"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <Tooltip />
              <Bar
                dataKey="value"
                radius={[10, 10, 0, 0]}
                fill="#16a34a"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      {/* PRIORITY CHART */}

      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold text-foreground">
            Approval Priority Chart
          </h2>

          <p className="mt-4 leading-8 text-muted-foreground">
            Not every approval has the same urgency. Some approvals are
            decision-makers at the start, while others become important once
            the plant is nearing operation.
          </p>
        </div>

        <ChartCard title="Approval Priority">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={priorityChartData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis
                dataKey="name"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <Tooltip />
              <Bar
                dataKey="value"
                radius={[10, 10, 0, 0]}
                fill="#2563eb"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      {/* ROADMAP */}

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-foreground">
          Approval Roadmap Made Easy
        </h2>

        <p className="leading-8 text-muted-foreground">
          A client understands the project much better when the sequence is
          simple. This is the usual flow we recommend.
        </p>

        <div className="grid gap-5">
          {[
            "Check the site first",
            "Prepare the project file",
            "Apply for CTE",
            "Install the plant",
            "Apply for CTO and operational approvals",
            "Start reporting and compliance tracking",
          ].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-5 rounded-3xl border border-border bg-background p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary font-bold text-secondary-foreground">
                {index + 1}
              </div>

              <h3 className="text-lg font-semibold text-foreground">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* STAGE CHART */}

      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold text-foreground">
            Compliance Load by Project Stage
          </h2>

          <p className="mt-4 leading-8 text-muted-foreground">
            This chart shows how the compliance work changes from the start of
            the project to the operating phase.
          </p>
        </div>

        <ChartCard title="Compliance Load">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stageChartData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis
                dataKey="name"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <Tooltip />
              <Bar
                dataKey="value"
                radius={[10, 10, 0, 0]}
                fill="#0f766e"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      {/* CASE STUDY */}

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold text-foreground">
            Case Study: A Client Who Avoided Delays by Planning Approvals Early
          </h2>

          <p className="mt-4 leading-8 text-muted-foreground">
            A mid-sized plastic recycler wanted to start quickly and had
            already identified machinery, but the approvals side was not
            organized.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-background p-6">
            <h3 className="mb-4 text-2xl font-semibold text-foreground">
              The challenge
            </h3>

            <ul className="space-y-3 text-muted-foreground">
              <li>• Project file did not match machinery plan</li>
              <li>• Land and site documents were incomplete</li>
              <li>• Construction planning started too early</li>
              <li>• Approval sequence was unclear</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-background p-6">
            <h3 className="mb-4 text-2xl font-semibold text-foreground">
              What we changed
            </h3>

            <ul className="space-y-3 text-muted-foreground">
              <li>• Rebuilt the approval sequence</li>
              <li>• Prepared a cleaner project file</li>
              <li>• Organized documents into one pack</li>
              <li>• Helped the client move step by step</li>
            </ul>
          </div>
        </div>

        <ChartCard title="Before vs After Better Approval Planning">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={caseStudyChartData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis
                dataKey="name"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <Tooltip />
              <Legend />

              <Bar
                dataKey="before"
                radius={[10, 10, 0, 0]}
                fill="#94a3b8"
              />

              <Bar
                dataKey="after"
                radius={[10, 10, 0, 0]}
                fill="#16a34a"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      {/* CLIENT GAINS */}

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-foreground">
          What the Client Gains
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-background p-6"
            >
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="leading-7 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold text-foreground">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
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
              className="rounded-3xl border border-border bg-background p-6"
            >
              <summary className="cursor-pointer text-lg font-semibold text-foreground">
                {item.q}
              </summary>

              <p className="mt-4 leading-7 text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default PlasticApprovals;