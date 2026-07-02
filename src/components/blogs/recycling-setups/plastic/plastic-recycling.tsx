import React from "react";
import Seo from "@/components/Seo";

import {
  BarChart3,
  Factory,
  Recycle,
  ShieldCheck,
  TrendingUp,
  Users,
  Wrench,
  Droplets,
  IndianRupee,
  CheckCircle2,
  Building2,
  ClipboardCheck,
  ArrowRight,
  Briefcase,
  Layers3,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  CartesianGrid,
} from "recharts";

const financialData = [
  { year: "Year 1", Revenue: 360, EBITDA: 110, Profit: 52 },
  { year: "Year 3", Revenue: 560, EBITDA: 215, Profit: 118 },
  { year: "Year 5", Revenue: 760, EBITDA: 322, Profit: 186 },
];

const projectCostData = [
  { name: "Land", value: 45 },
  { name: "Civil", value: 70 },
  { name: "Machinery", value: 165 },
  { name: "ETP", value: 32 },
  { name: "Utilities", value: 28 },
  { name: "Working Capital", value: 60 },
];

const recoveryData = [
  { name: "Flakes", value: 35 },
  { name: "Granules", value: 28 },
  { name: "Rejects", value: 12 },
  { name: "Regrind", value: 10 },
  { name: "Moisture Loss", value: 8 },
  { name: "Contamination", value: 7 },
];

const financeData = [
  { name: "Promoter", value: 102 },
  { name: "Term Loan", value: 266 },
  { name: "Subsidy", value: 41 },
];

const COLORS = [
  "#0891b2",
  "#16a34a",
  "#f59e0b",
  "#7c3aed",
  "#ea580c",
  "#0f766e",
];

const PlasticRecycling: React.FC = () => {
  return (
    <>
    <Seo
        title="Plastic Recycling Plant Detailed Project Report (DPR) India 2026"
        description="Comprehensive Plastic Recycling Plant DPR for India. Learn about project cost, machinery, financial projections, raw material sourcing, compliance requirements, recycling process, subsidies, manpower planning, and profitability analysis for plastic recycling businesses."
        keywords={[
          "Plastic Recycling Plant DPR",
    "Plastic Recycling Plant Detailed Project Report",
    "Plastic Recycling Plant Project Report India",
    "Plastic Recycling Business Plan",
    "Plastic Recycling Plant Cost",
    "Plastic Recycling Machinery",
    "Plastic Recycling Plant Financial Projection",
    "Plastic Waste Recycling Project",
    "Plastic Granules Manufacturing Plant",
    "Plastic Flakes Production Business",
    "Plastic Recycling Plant Profitability",
    "Plastic Recycling Plant Investment",
    "Plastic Recycling Plant Subsidy India",
    "Plastic Recycling Plant Loan Project Report",
    "Plastic Waste Management Business",
    "Plastic Recycling Plant Setup Guide",
    "Plastic Recycling Plant Feasibility Study",
    "Plastic Recycling Plant Raw Material Procurement",
    "Plastic Recycling Plant Compliance Requirements",
    "Plastic Waste Collection Business",
    "PET HDPE PP Recycling Plant",
    "Plastic Recycling Equipment List",
    "Plastic Recycling Plant Financial Model",
    "Plastic Recycling Industry India",
    "Plastic Recycling Plant Recovery Analysis",
    "Plastic Recycling Plant Manpower Requirement",
    "Plastic Recycling Plant EPR Opportunity",
    "Plastic Recycling Plant Project Cost Breakdown",
    "Plastic Recycling Plant Business Opportunity",
    "How to Start Plastic Recycling Plant in India"
        ]}
        url="https://eprnexuss.com/blog/plastic-recycling-plant-dpr"
        type="article"
      />
      {/* CUSTOM CSS */}
      <style>{`
      @media (max-width: 768px) {
        .p-8{
        padding: 2px;}
      }
        .p-6{
        padding: 6px 2px;
        }
        .recharts-wrapper{
        max-width: 240px !important;
        padding-bottom: 20px !important;}
        tr{display: flex; flex-direction: column; border-bottom: 1px solid #e5e7eb;}
        .lg:p-6{ padding: 6px 2px !important;}
    `}</style>

    <article className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8 bg-white">

      {/* HERO SECTION */}
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm mb-10">
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            "Plastic Recycling",
            "Circular Economy",
            "Sustainability",
            "Waste Management",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
          Turning Plastic Waste into Reusable Materials
        </h1>

        <p className="text-slate-700 text-lg leading-8 max-w-5xl">
          A complete detailed project report structure for a modern plastic
          recycling plant designed to convert post-consumer and post-industrial
          plastic waste into reusable flakes, granules, and recycled resin.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          {[
            "10 TPD Recycling Plant",
            "Sorting + Washing Line",
            "Granules & Flakes Production",
            "Compliance Ready",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* DPR SECTION */}
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 md:p-8 shadow-sm mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-5">
          How EPR Nexuss Creates Powerful DPRs
        </h2>

        <p className="text-slate-700 leading-8">
          EPR Nexuss helps clients build professional detailed project reports
          through structured planning, financial modeling, machinery mapping,
          utility analysis, compliance strategy, and execution planning. The
          DPR is prepared for investor presentation, bank loan discussions,
          subsidy applications, and operational planning.
        </p>
      </section>

      {/* EXECUTIVE SNAPSHOT */}
      <section className="mb-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              title: "Plant Capacity",
              value: "10 TPD",
              icon: Factory,
            },
            {
              title: "Recovery Target",
              value: "85%+",
              icon: Recycle,
            },
            {
              title: "Execution Time",
              value: "12 Months",
              icon: TrendingUp,
            },
            {
              title: "Employment",
              value: "15-20",
              icon: Users,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 mb-5">
                  <Icon className="h-7 w-7 text-cyan-700" />
                </div>

                <h3 className="text-slate-500 text-sm mb-2">
                  {item.title}
                </h3>

                <div className="text-3xl font-bold text-slate-900">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BUSINESS FLOW */}
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 md:p-8 shadow-sm mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-5">
          The Business Flow from Waste to Product
        </h2>

        <p className="text-slate-700 leading-8 mb-8">
          Plastic recycling transforms discarded waste into reusable industrial
          material through sorting, washing, shredding, drying, and extrusion.
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {[
            "Plastic Collection",
            "Sorting & Segregation",
            "Washing & Cleaning",
            "Shredding & Granulation",
            "Pelletizing & Packaging",
            "Dispatch to Buyers",
          ].map((item, index) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-700 text-white font-bold">
                  {index + 1}
                </div>

                <ArrowRight className="text-cyan-700" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY + UTILITIES */}
      <section className="grid gap-8 md:grid-cols-2 mb-10">

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <Wrench className="h-7 w-7 text-cyan-700" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Technology & Equipment
            </h2>
          </div>

          <ul className="space-y-4">
            {[
              "Sorting conveyor and segregation platform",
              "Primary shredder and granulator",
              "Washing tanks and friction washer",
              "Hot washing system",
              "Dewatering and thermal dryer",
              "Extruder and pelletizer",
              "Magnetic separator and metal detector",
              "Dust extraction and utility system",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-slate-700 leading-7"
              >
                <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <Droplets className="h-7 w-7 text-cyan-700" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Utilities & Pollution Control
            </h2>
          </div>

          <ul className="space-y-4">
            {[
              "Water recycling and circulation",
              "Effluent treatment plant",
              "Air and dust management",
              "Fire safety systems",
              "Waste reject handling",
              "Utility and electrical management",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-slate-700 leading-7"
              >
                <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SUBSIDY + RAW MATERIAL */}
      <section className="grid gap-8 md:grid-cols-2 mb-10">

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <IndianRupee className="h-7 w-7 text-cyan-700" />

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Subsidies & Incentives
            </h2>
          </div>

          <ul className="space-y-4">
            {[
              "State industrial support schemes",
              "Green project capital subsidy",
              "MSME-linked benefits",
              "Interest support programs",
              "EPR-driven business opportunities",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-slate-700"
              >
                <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <Layers3 className="h-7 w-7 text-cyan-700" />

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Raw Material Procurement
            </h2>
          </div>

          <ul className="space-y-4">
            {[
              "Municipal plastic waste collection",
              "Scrap dealers and aggregators",
              "Industrial plastic scrap",
              "Collection partnerships",
              "Long-term supply contracts",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-slate-700"
              >
                <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TABLE SECTION */}
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 md:p-8 shadow-sm mb-10">

        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Which Products Fit Which Buyers
        </h2>

        <div className="overflow-hidden rounded-3xl border border-slate-200">

          {/* Desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-cyan-50">
                <tr>
                  {[
                    "Segment",
                    "What They Need",
                    "Best Product",
                    "Priority",
                  ].map((item) => (
                    <th
                      key={item}
                      className="px-6 py-5 text-left text-sm font-semibold text-cyan-700"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {[
                  [
                    "Packaging converters",
                    "Consistent recycled material",
                    "rPET flakes",
                    "High",
                  ],
                  [
                    "FMCG brands",
                    "Traceable recycled content",
                    "Recycled resin",
                    "High",
                  ],
                  [
                    "Automotive suppliers",
                    "Engineered recycled resin",
                    "Compounded pellets",
                    "Medium-High",
                  ],
                  [
                    "Construction makers",
                    "Durable low-cost resin",
                    "HDPE/PP regrind",
                    "Medium",
                  ],
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-slate-200 text-slate-700"
                  >
                    {row.map((cell) => (
                      <td key={cell} className="px-6 py-5 text-sm">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="grid gap-4 p-4 block md:hidden">
            {[
              {
                segment: "Packaging converters",
                need: "Consistent recycled material",
                product: "rPET flakes",
                priority: "High",
              },
              {
                segment: "FMCG brands",
                need: "Traceable recycled content",
                product: "Recycled resin",
                priority: "High",
              },
              {
                segment: "Automotive suppliers",
                need: "Engineered recycled resin",
                product: "Compounded pellets",
                priority: "Medium-High",
              },
            ].map((item) => (
              <div
                key={item.segment}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex flex-col gap-4"
              >
                <div>
                  <p className="text-xs uppercase font-semibold tracking-wider text-cyan-700">
                    Segment
                  </p>

                  <p className="text-slate-800">
                    {item.segment}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase font-semibold tracking-wider text-cyan-700">
                    Need
                  </p>

                  <p className="text-slate-700">
                    {item.need}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase font-semibold tracking-wider text-cyan-700">
                    Product
                  </p>

                  <p className="text-slate-700">
                    {item.product}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase font-semibold tracking-wider text-cyan-700">
                    Priority
                  </p>

                  <p className="text-slate-700">
                    {item.priority}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="mb-10">

        <h2 className="text-4xl font-bold text-slate-900 mb-8">
          Financial Dashboard & Charts
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* BAR CHART */}
          <div className="rounded-[32px] border border-slate-200 bg-white lg:p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Financial Projection
            </h3>

            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={financialData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Bar dataKey="Revenue" fill="#0891b2" radius={[8, 8, 0, 0]} />
                <Bar dataKey="EBITDA" fill="#16a34a" radius={[8, 8, 0, 0]} />
                <Bar dataKey="Profit" fill="#f59e0b" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* PIE CHART */}
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Project Cost Breakdown
            </h3>

            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={projectCostData}
                  dataKey="value"
                  outerRadius={120}
                  label
                >
                  {projectCostData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* RECOVERY PIE */}
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Recovery Output Mix
            </h3>

            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={recoveryData}
                  dataKey="value"
                  outerRadius={120}
                  label
                >
                  {recoveryData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* FINANCE BAR */}
          <div className="rounded-[32px] border border-slate-200 bg-white lg:p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Means of Finance
            </h3>

            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={financeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#0891b2"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* MANPOWER */}
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 md:p-8 shadow-sm mb-10">

        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="h-7 w-7 text-cyan-700" />

          <h2 className="text-3xl font-bold text-slate-900">
            Manpower Requirement
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full border border-slate-200 rounded-3xl overflow-hidden">

            <thead className="bg-cyan-50">
              <tr>
                {[
                  "Role",
                  "Category",
                  "Count",
                  "Qualification",
                ].map((item) => (
                  <th
                    key={item}
                    className="px-6 py-5 text-left text-sm font-semibold text-cyan-700"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>

              {[
                [
                  "Plant Manager",
                  "Management",
                  "1",
                  "5+ Years Experience",
                ],
                [
                  "Production Supervisor",
                  "Technical",
                  "2",
                  "Diploma / Engineering",
                ],
                [
                  "Machine Operators",
                  "Operations",
                  "4-6",
                  "ITI / Skilled",
                ],
                [
                  "Sorting Staff",
                  "Operations",
                  "4-6",
                  "Material Handling",
                ],
              ].map((row, idx) => (
                <tr
                  key={idx}
                  className="border-t border-slate-200"
                >
                  {row.map((cell) => (
                    <td
                      key={cell}
                      className="px-6 py-5 text-sm text-slate-700"
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

      {/* EXECUTION */}
      <section className="grid gap-8 md:grid-cols-2 mb-10">

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <ClipboardCheck className="h-7 w-7 text-cyan-700" />

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Execution Strategy
            </h2>
          </div>

          <div className="space-y-4">

            {[
              "Site Selection & Planning",
              "Civil Works & Utilities",
              "Machinery Procurement",
              "Installation & Trial",
              "Compliance Approvals",
              "Commercial Operations",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-cyan-700 text-white font-bold">
                  {index + 1}
                </div>

                <p className="text-sm md:text-base text-slate-700 font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white lg:p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck className="h-7 w-7 text-cyan-700" />

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Compliance Requirements
            </h2>
          </div>

          <ul className="space-y-4">
            {[
              "SPCB approvals",
              "Plastic Waste Management Registration",
              "Factory License",
              "Fire Safety Approval",
              "Air & Water Compliance",
              "Waste Handling Authorization",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-slate-700"
              >
                <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="rounded-[32px] border border-slate-200 bg-white lg:p-6 md:p-8 shadow-sm">

        <h2 className="text-3xl font-bold text-slate-900 mb-5">
          Conclusion
        </h2>

        <p className="text-slate-700 leading-8">
          The Plastic Recycling Plant is technically practical, commercially
          scalable, and aligned with circular economy goals. With proper
          collection systems, sorting quality, modern machinery, and strong
          buyer linkages, the project can become a profitable and sustainable
          recycling business.
        </p>
      </section>
    </article>
    </>
  );
};

export default PlasticRecycling;