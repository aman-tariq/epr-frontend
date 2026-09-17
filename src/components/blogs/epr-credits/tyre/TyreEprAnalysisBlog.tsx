"use client";

import StickyContactForm from "@/components/StickyContactForm";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import {motion} from "framer-motion"

const pieData = [
  { name: "Recyclers", value: 405 },
  { name: "Producers", value: 173 },
];
const PIE_COLORS = ["#5AC361", "#0f172a"];

const barData = [
  { year: "2023-24", Producers: 96, Recyclers: 27 },
  { year: "2024-25", Producers: 173, Recyclers: 405 },
];

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


export default function TyreBlog1() {
  return (
    <div
      className="min-h-screen font-sans text-slate-950 antialiased"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(90,195,97,0.10), transparent 34%), radial-gradient(circle at top right, rgba(15,23,42,0.04), transparent 25%), #f6f8fb",
      }}
    >
      <main className="mx-auto max-w-8xl mt-[110px] px-1  py-6 sm:px-2 lg:px-2 ">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          <div className="container">
            {/* Header */}
            <motion.header 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[28px] overflow-hidden bg-white/80 backdrop-blur-xl border border-slate-900/[0.08] shadow-[0_18px_40px_rgba(10,15,25,0.08)]">
              <div className="grid gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:px-10 lg:py-10">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-[0.45rem] text-xs font-bold tracking-[0.03em] bg-brandGreen/10 text-green-800 border border-brandGreen/[0.22]">
                    EPR Nexuss Blog
                  </span>
                  <h1 className="font-display tracking-tight mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">
                    EPR Tyre Credit : The compliance Registration and Regulatory
                    compliance road map
                  </h1>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                    A practical, data-backed guide for setting up a tyre waste
                    recycling plant in India with the right approvals from the
                    start: CTE, CTO, hazardous waste authorization, and the
                    environmental clearances that can shape the project
                    timeline.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 text-sm">
                    <a
                      href="#intro"
                      className="rounded-full bg-slate-950 px-4 py-2 font-semibold text-white transition hover:bg-slate-800"
                    >
                      Read introduction
                    </a>
                    <a
                      href="#charts"
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:border-brandGreen hover:text-brandGreen"
                    >
                      See data charts
                    </a>
                    <a
                      href="#faq"
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:border-brandGreen hover:text-brandGreen"
                    >
                      Open FAQ
                    </a>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white p-4 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
                      <div className="text-2xl font-bold text-slate-950">
                        CTE
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        Consent before construction / setup.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
                      <div className="text-2xl font-bold text-slate-950">
                        CTO
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        Consent before operation begins.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
                      <div className="text-2xl font-bold text-slate-950">
                        Hazardous Authorization
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        Handling / storage / recycling permission.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.header>

            {/* Real-world markers */}
             <Reveal delay={0.05}> <section  className="mt-6 grid gap-4 lg:grid-cols-3">
              <article className="rounded-[26px] bg-white p-5 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brandGreen">
                  Real-world marker
                </div>
                <div className="mt-3 text-3xl font-bold text-slate-950">
                  173 / 405
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  MoEFCC&rsquo;s 2024-25 annual report records 173 producers and
                  405 recyclers registered on the Waste Tyre EPR portal.
                </p>
              </article>
              <article className="rounded-[26px] bg-white p-5 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brandGreen">
                  Earlier baseline
                </div>
                <div className="mt-3 text-3xl font-bold text-slate-950">
                  96 / 27
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The 2023-24 annual report records 96 producers and 27
                  recyclers on the same portal, showing the ecosystem&rsquo;s
                  growth.
                </p>
              </article>
              <article className="rounded-[26px] bg-white p-5 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brandGreen">
                  Regulatory starting point
                </div>
                <div className="mt-3 text-3xl font-bold text-slate-950">
                  2022
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The Waste Tyre EPR framework was notified through amendments
                  to the Hazardous and Other Wastes rules.
                </p>
              </article>
            </section> </Reveal>

            {/* Intro + Why approvals matter */}
             <Reveal delay={0.05}> <section  id="intro" className="mt-8 grid gap-6 lg:grid-cols-1">
              <article className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
                <h2 className="font-display tracking-tight text-2xl font-bold text-slate-950">
                  Introduction
                </h2>
                <div className="mt-4 space-y-[0.9rem] text-[15px] leading-7 text-slate-600">
                  <p>
                    Master the approval process for tyre recycling plants with
                    CTE, CTO, hazardous waste authorization, and the
                    environmental clearances that can apply to the project.
                  </p>
                  <p>
                    <strong>CTE</strong> (Consent to Establish) is the first
                    pollution-control approval for setting up the plant. It is
                    the stage where the layout, equipment list, emissions
                    control, water management, and site design are aligned
                    before construction or installation moves too far ahead.
                  </p>
                  <p>
                    <strong>CTO</strong> (Consent to Operate) is the next step,
                    issued when the unit is ready to run and can show that
                    controls are installed and functioning. In practical terms,
                    CTO is the permission to begin commercial operation.
                  </p>
                  <p>
                    <strong>Hazardous waste authorization</strong> is essential
                    where the unit receives, stores, handles, transports,
                    preprocesses, or recycles waste streams covered under the
                    Hazardous and Other Wastes framework. For tyre projects,
                    this becomes especially important when the business model
                    includes scrap receipt, shredder output, pre-processing, or
                    other controlled waste handling.
                  </p>
                  <p>
                    <strong>Environmental Clearance</strong> may also be
                    relevant depending on the project category, capacity, site
                    sensitivity, and local regulatory trigger. In India&rsquo;s
                    EIA process, the application is normally built around Form
                    1, pre-feasibility information, screening, scoping, public
                    consultation, and appraisal.
                  </p>
                </div>
              </article>

              <article className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
                <h2 className="font-display tracking-tight text-2xl font-bold text-slate-950">
                  Why approvals matter in tyre waste recycling
                </h2>
                <div className="mt-4 space-y-[0.9rem] text-[15px] leading-7 text-slate-600">
                  <p>
                    Tyre waste recycling is a practical business, but it is also
                    a heavily regulated one. The project handles waste material,
                    industrial equipment, storage, and commercial processing.
                  </p>
                  <p>
                    When approvals are handled early, the client can design the
                    plant properly, keep the site aligned with regulations, and
                    avoid major problems during operation.
                  </p>
                  <p className="rounded-2xl p-4 text-slate-700 border-l-4 border-brandGreen bg-gradient-to-b from-brandGreen/10 to-white/80">
                    Approvals are not just legal documents &mdash; they are part
                    of the project&rsquo;s foundation.
                  </p>
                  <p>
                    A compliant plant is easier to finance, easier to insure,
                    and easier to scale because lenders, investors, and buyers
                    can see that the regulatory path is under control.
                  </p>
                </div>
              </article>
            </section> </Reveal>

            {/* Problem + Brief solution */}
             <Reveal delay={0.05}> <section  className="mt-8 grid gap-6 lg:grid-cols-1">
              <article className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100 lg:col-span-1">
                <h2 className="font-display tracking-tight text-2xl font-bold text-slate-950">
                  Problem
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Many tyre recycling projects get delayed because approvals are
                  treated as a final paperwork exercise instead of a project
                  design input. That creates avoidable problems: wrong site
                  selection, delayed utilities, incomplete pollution control
                  systems, weak documentation, and a mismatch between plant
                  capacity and the approved scope.
                </p>
              </article>

              <article className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100 lg:col-span-2">
                <h2 className="font-display tracking-tight text-2xl font-bold text-slate-950">
                  Brief solution
                </h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Design approvals first",
                      text: "Build the plant layout, process flow, and pollution controls around the compliance path, not after it.",
                    },
                    {
                      title: "Document everything",
                      text: "Keep land, layout, process, equipment, and waste-handling records ready before filing.",
                    },
                    {
                      title: "Map the authorities",
                      text: "Identify the SPCB/PCC, local bodies, fire authority, factory inspectorate, and any EC pathway early.",
                    },
                    {
                      title: "Operate with controls",
                      text: "Install pollution control, storage discipline, and recordkeeping systems before the CTO request.",
                    },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl bg-slate-50 p-4">
                      <div className="text-sm font-semibold text-slate-900">
                        {title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </section> </Reveal>

            {/* Roadmap + Requirements */}
             <Reveal delay={0.05}> <section  className="mt-8 grid gap-6 lg:grid-cols-1">
              <article className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
                <h2 className="font-display tracking-tight text-2xl font-bold text-slate-950">
                  Roadmap
                </h2>
                <ol className="mt-5 space-y-4">
                  {[
                    {
                      title: "Project scoping and site fit",
                      text: "Confirm zoning, access, utilities, buffer, and whether the chosen site creates any environmental or local authority trigger.",
                    },
                    {
                      title: "Prepare technical submission",
                      text: "Process flow, machinery list, water balance, air control design, storage plan, fire safety, and layout drawing.",
                    },
                    {
                      title: "File for CTE and related permissions",
                      text: "Submit the establishment application before construction starts, together with supporting ownership and project documents.",
                    },
                    {
                      title: "Install and validate controls",
                      text: "Commission pollution control equipment, storage systems, and operational SOPs; verify that actual installation matches the approved design.",
                    },
                    {
                      title: "Obtain CTO and start operations",
                      text: "Request operational consent after site readiness; then maintain records, emissions control, and reporting discipline throughout the year.",
                    },
                  ].map(({ title, text }, i) => (
                    <li key={title} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brandGreen/15 font-bold text-brandGreen">
                        {i + 1}
                      </span>
                      <div>
                        <div className="font-semibold text-slate-950">
                          {title}
                        </div>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>

              <article className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
                <h2 className="font-display tracking-tight text-2xl font-bold text-slate-950">
                  Requirements
                </h2>
                <ul className="mt-5 space-y-3 text-[15px] leading-7 text-slate-600">
                  {[
                    "Land ownership / lease documents and site location map",
                    "Company incorporation and signatory documents",
                    "Process flow, machinery list, utility load, and plant capacity plan",
                    "Layout drawing with raw material, finished goods, and waste storage zones",
                    "Air, water, noise, stormwater, and firefighting control measures",
                    "Waste tyre handling SOP, manifest / recordkeeping approach, and emergency plan",
                    "Any EC-related forms, pre-feasibility information, or state-specific submissions if triggered",
                  ].map((item) => (
                    <li key={item} className="rounded-2xl bg-slate-50 p-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </section> </Reveal>

            {/* Pitfalls + client message */}
             <Reveal delay={0.05}> <section  className="mt-8 grid gap-6 lg:grid-cols-1">
              <article className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
                <h2 className="font-display tracking-tight text-2xl font-bold text-slate-950">
                  Pitfalls
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Starting construction too early",
                      text: "This can force redesign, rework, and avoidable compliance delays.",
                    },
                    {
                      title: "Ignoring site sensitivity",
                      text: "Location issues can affect consent and clearance timelines.",
                    },
                    {
                      title: "Weak documentation",
                      text: "Mismatch between drawings, equipment, and actual field setup often causes objections.",
                    },
                    {
                      title: "Under-sizing controls",
                      text: "Storage, emissions, and waste handling systems must match the declared capacity.",
                    },
                  ].map(({ title, text }) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <div className="font-semibold text-slate-950">
                        {title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
                <h2 className="font-display tracking-tight text-2xl font-bold text-slate-950">
                  A practical client message
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  A tyre waste recycling plant becomes easier to build, finance,
                  and operate when the compliance path is clear from the start.
                  Good approvals reduce surprises, improve lender confidence,
                  and give the project a stronger operational foundation. In
                  India, that means working with the right consent workflow,
                  hazardous waste authorization where applicable, and any
                  environmental clearance path that the site or project category
                  requires.
                </p>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  For plant owners, the message is simple: do not treat
                  approvals as a separate department. Treat them as part of
                  engineering, procurement, and execution.
                </p>
              </article>
            </section> </Reveal>

            {/* Charts */}
             <Reveal delay={0.05}> <section  id="charts" className="mt-8 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[28px] bg-white p-2 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
                <h2 className="font-display tracking-tight text-xl md:text-2xl font-bold text-center text-slate-950">
                      Dynamic Pie Graph
                    </h2>
                <div className="flex items-end justify-center gap-4">
                  <div>
                    
                    <p className="mt-1 md:text-sm text-[12px] leading-6 text-slate-600">
                      Waste Tyre EPR portal registrations in 2024-25.
                    </p>
                  </div>
                  
                </div>
                <div className="rounded-full bg-brandGreen/10 px-3 py-1 text-xs font-semibold text-center text-brandGreen whitespace-nowrap">
                    Official annual report data
                  </div>
                <div className="relative w-full min-h-[320px] mt-4">
                  <ResponsiveContainer width="100%" height={320}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius="55%"
                        outerRadius="80%"
                        paddingAngle={2}
                      >
                        {pieData.map((entry, index) => (
                          <Cell
                            key={entry.name}
                            fill={PIE_COLORS[index % PIE_COLORS.length]}
                            stroke="#fff"
                            strokeWidth={3}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value: number, name: string) => {
                          const total = pieData.reduce(
                            (a, b) => a + b.value,
                            0,
                          );
                          const pct = ((value / total) * 100).toFixed(1);
                          return [`${value} (${pct}%)`, name];
                        }}
                      />
                      <Legend verticalAlign="bottom" iconType="circle" />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </article>

              <article className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
                <h2 className="font-display tracking-tight text-xl md:text-2xl font-bold text-slate-950">
                      Bar Graph Below Dynamic Pie Graph
                    </h2>
                <div className="flex items-end justify-between gap-4">
                  <div>

                    <p className="mt-1 md:text-sm text-[12px] leading-6 text-slate-600">
                      Registration growth from 2023-24 to 2024-25.
                    </p>
                  </div>
                  
                </div>
                <div className="rounded-full bg-brandGreen/10 px-3 py-1 text-center text-xs font-semibold text-brandGreen whitespace-nowrap">
                    Year-on-year comparison
                  </div>
                <div className="relative w-full min-h-[320px] mt-4">
                  <ResponsiveContainer width="100%" height={320}>
                    <BarChart data={barData}>
                      <CartesianGrid
                        vertical={false}
                        stroke="rgba(15,23,42,0.08)"
                      />
                      <XAxis
                        dataKey="year"
                        tick={{
                          fill: "#475569",
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fill: "#64748b", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          background: "#0f172a",
                          border: "none",
                          borderRadius: 8,
                        }}
                        labelStyle={{ color: "#fff" }}
                        itemStyle={{ color: "#fff" }}
                      />
                      <Legend verticalAlign="bottom" iconType="circle" />
                      <Bar
                        dataKey="Producers"
                        fill="#5AC361"
                        radius={[10, 10, 0, 0]}
                        barSize={28}
                      />
                      <Bar
                        dataKey="Recyclers"
                        fill="#0f172a"
                        radius={[10, 10, 0, 0]}
                        barSize={28}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </article>
            </section> </Reveal>

            {/* Why data matters */}
             <Reveal delay={0.05}> <section  className="mt-8 rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100">
              <h2 className="font-display tracking-tight text-2xl font-bold text-slate-950">
                Why these data points matter
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Market validation",
                    text: "Higher portal registrations indicate that the waste tyre compliance ecosystem is active and expanding.",
                  },
                  {
                    title: "Project planning",
                    text: "The 7.4 million tonnes hazardous waste context helps position tyre projects inside India\u2019s broader industrial waste landscape.",
                  },
                  {
                    title: "Compliance credibility",
                    text: "Using official figures makes the blog stronger for clients, search engines, and business discussions.",
                  },
                ].map(({ title, text }) => (
                  <div key={title} className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-slate-950">
                      {title}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </section> </Reveal>

            {/* FAQ */}
             <Reveal delay={0.05}> <section 
              id="faq"
              className="mt-8 rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(10,15,25,0.08)] border border-slate-100"
            >
              <h2 className="font-display tracking-tight text-2xl font-bold text-slate-950">
                Frequently Asked Questions
              </h2>
              <div className="mt-5 space-y-4">
                {[
                  {
                    q: "What is the difference between CTE and CTO?",
                    a: "CTE is the permission to establish or set up the project. CTO is the permission to operate after the plant is built and pollution-control systems are in place.",
                  },
                  {
                    q: "Does every tyre recycling plant need Environmental Clearance?",
                    a: "Not every project does. It depends on the project category, capacity, location, and whether the site or activity triggers the EIA process or another environmental requirement.",
                  },
                  {
                    q: "Why is hazardous waste authorization important for tyre recycling?",
                    a: "It gives legal permission to receive, store, handle, transport, and process the covered waste stream and supports traceability and environmental control.",
                  },
                  {
                    q: "When should the approval process start?",
                    a: "At the project planning stage, before the final plant layout and before any construction begins. That is where most project delays can be prevented.",
                  },
                  {
                    q: "What is the safest way to present the project to investors?",
                    a: "Show the compliance roadmap, the site strategy, the pollution-control design, the approval timeline, and the recordkeeping system together as one bankable project story.",
                  },
                ].map(({ q, a }) => (
                  <details
                    key={q}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <summary className="cursor-pointer font-semibold text-slate-950 [&::-webkit-details-marker]:hidden list-none">
                      {q}
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{a}</p>
                  </details>
                ))}
              </div>
            </section> </Reveal>
          </div>
          <aside className="hidden lg:block shrink-0 w-[320px]">
            <div className="sticky top-28 px-2">
              <StickyContactForm />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
