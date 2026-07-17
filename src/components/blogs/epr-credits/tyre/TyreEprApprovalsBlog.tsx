"use client";

import StickyContactForm from "@/components/StickyContactForm";
import { useState } from "react";
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

type YearKey = "2023-24" | "2024-25";

const dataMap: Record<YearKey, { producers: number; recyclers: number }> = {
  "2023-24": { producers: 96, recyclers: 27 },
  "2024-25": { producers: 173, recyclers: 405 },
};

const PIE_COLORS = ["#5AC361", "#1e293b"];

export default function TyreBlog2() {
  const [year, setYear] = useState<YearKey>("2024-25");
  const { producers, recyclers } = dataMap[year];
  const total = producers + recyclers;
  const pieData = [
    { name: "Producers", value: producers },
    { name: "Recyclers", value: recyclers },
  ];
  const barData = [{ name: "Producers", value: producers }, { name: "Recyclers", value: recyclers }];

  return (
    <div
      className="min-h-screen font-sans text-slate-950"
      style={{
        background:
          "radial-gradient(circle at top, rgba(90,195,97,0.12), transparent 28%), linear-gradient(180deg, #f8fafc 0%, #eef7ef 100%)",
      }}
    >
      <main className="min-h-screen max-w-8xl">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          <div className="container">

         
       
        {/* Header */}
        <header className="container mx-auto px-1 mt-10 pt-8 pb-10">
          <div className="rounded-[2rem] overflow-hidden bg-white/[0.78] backdrop-blur-xl border border-slate-400/[0.18] shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="p-6 md:p-4 lg:p-14">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-brandGreen font-semibold px-4 py-2 rounded-full text-sm border border-brandGreen/[0.22] bg-brandGreen/[0.08]">
                  EPR Tyre Credit
                </span>
                <span className="text-slate-700 font-semibold px-4 py-2 rounded-full text-sm border border-brandGreen/[0.22] bg-brandGreen/[0.08]">
                  Credit Trading
                </span>
                <span className="text-slate-700 font-semibold px-4 py-2 rounded-full text-sm border border-brandGreen/[0.22] bg-brandGreen/[0.08]">
                  Marketplace Strategy
                </span>
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-tight">
                  EPR Tyre Credit : Credit Trading and Market Place Strategy Guide
                </h1>
                <p className="mt-5 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-8">
                  A practical guide for tyre recycling plants, traders, and
                  EPR teams to source scrap intelligently, assess quality
                  with confidence, and sell recycled outputs at the right
                  market price.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {[
                  { label: "Focus", title: "Buying, grading, selling", text: "From source selection to offtake conversion, with compliance built into the workflow." },
                  { label: "Commercial lens", title: "Margin protection", text: "Reduce leakage from bad scrap, weak grading, and delayed sales." },
                  { label: "Compliance lens", title: "Traceable movement", text: "Keep custody, authorization, and reporting aligned with the operating model." },
                ].map(({ label, title, text }) => (
                  <div key={label} className="rounded-2xl p-5 border border-brandGreen/[0.18] bg-gradient-to-b from-brandGreen/[0.09] to-white/90">
                    <p className="text-sm text-slate-500 font-semibold">{label}</p>
                    <p className="text-lg font-bold text-slate-950 mt-1">{title}</p>
                    <p className="text-sm text-slate-600 mt-2 leading-6">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Intro + Problem */}
        <section className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            <article className="rounded-[2rem] p-6 md:p-8 bg-white/[0.78] backdrop-blur-xl border border-slate-400/[0.22] shadow-[0_18px_40px_rgba(15,23,42,0.06)] animate-fade-in">
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Introduction</h2>
              <div className="mt-5 text-slate-700 leading-8 space-y-4">
                <p>
                  Tyre recycling becomes materially stronger when the
                  commercial path is designed before the first tonne of
                  scrap is purchased. A plant that understands sourcing,
                  grading, offtake, and compliance can protect margin at
                  every step.
                </p>
                <p>
                  The business is built around four questions: where to buy
                  scrap, how to grade it, what product stream to make from
                  it, and who will buy that output at a reliable
                  specification.
                </p>
                <p>
                  In practice, the market rewards operators who keep
                  feedstock traceable, product quality stable, and paperwork
                  audit-ready.
                </p>
              </div>
            </article>
            <article className="rounded-[2rem] p-6 md:p-8 bg-white/[0.78] backdrop-blur-xl border border-slate-400/[0.22] shadow-[0_18px_40px_rgba(15,23,42,0.06)] animate-fade-in">
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Problem</h2>
              <div className="mt-5 text-slate-700 leading-8 space-y-4">
                <p className="font-semibold text-slate-900">Scrap that sits is money that walks away.</p>
                <p>
                  Used tyres carry commercial value in crumb rubber,
                  pyrolysis oil, recovered carbon black, and steel wire. But
                  value is lost quickly when the plant buys the wrong grade,
                  stores material poorly, or delays sales.
                </p>
                <p>
                  The result is a double loss: weaker recovery from the
                  incoming scrap and lower realization on the outgoing
                  product. That is why the buying desk and the sales desk
                  must work as one operating system.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Brief solution */}
        <section className="container mx-auto px-4 pb-8">
          <div className="rounded-[2rem] p-6 md:p-8 bg-white/[0.78] backdrop-blur-xl border border-slate-400/[0.22] shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Brief Solution</h2>
            <p className="mt-5 text-slate-700 leading-8 max-w-5xl mx-auto text-center">
              Build a controlled sourcing and sales process: buy only from
              verified suppliers, inspect every load against a defined
              grading matrix, document chain of custody, and sell outputs
              against written specification sheets and test reports. When
              the commercial model is paired with compliance discipline, the
              plant becomes easier to finance, easier to operate, and easier
              to scale.
            </p>
          </div>
        </section>

        {/* Roadmap + Requirements */}
        <section className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            <article className="rounded-[2rem] p-6 md:p-8 bg-white/[0.78] backdrop-blur-xl border border-slate-400/[0.22] shadow-[0_18px_40px_rgba(15,23,42,0.06)] lg:col-span-2">
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Roadmap</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "1. Source design", text: "Map local tyre generators, aggregators, and transporters. Lock the inbound route before volume expansion." },
                  { title: "2. Load inspection", text: "Record tread depth mix, contamination, moisture, and foreign matter. Reject material that harms yield." },
                  { title: "3. Processing choice", text: "Route scrap to crumb rubber, pyrolysis, or shredding based on plant capability and buyer demand." },
                  { title: "4. Offtake build", text: "Pre-negotiate with cement plants, compounders, foundries, and traders so inventory turns faster." },
                ].map(({ title, text }) => (
                  <div key={title} className="rounded-2xl p-5 bg-white border border-slate-200">
                    <p className="font-bold text-slate-950">{title}</p>
                    <p className="mt-2 text-slate-600 leading-7">{text}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="rounded-[2rem] p-6 md:p-8 bg-white/[0.78] backdrop-blur-xl border border-slate-400/[0.22] shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Requirements</h2>
              <ul className="mt-6 space-y-3 text-slate-700 leading-7">
                {[
                  "Documented supplier due diligence and purchase records.",
                  "Material grading checklist for used tyres, wire content, and contamination.",
                  "Authorised transport, storage, and handling controls.",
                  "Test reports for products such as TDO and recovered carbon black.",
                  "Sales contracts aligned to weight, mesh size, purity, and delivery terms.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 shrink-0 w-2.5 h-2.5 rounded-full bg-brandGreen shadow-[0_0_0_6px_rgba(90,195,97,0.12)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* Pitfalls */}
        <section className="container mx-auto px-4 pb-8">
          <div className="rounded-[2rem] p-6 md:p-8 bg-white/[0.78] backdrop-blur-xl border border-slate-400/[0.22] shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Pitfalls</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {[
                { title: "Buying on price only", text: "Low-cost feedstock can still destroy yield when it carries dirt, textiles, moisture, or mixed polymer content." },
                { title: "No grade discipline", text: "Without a standard inspection sheet, every inward load becomes a negotiation instead of a measured decision." },
                { title: "Weak buyer network", text: "Finished goods sit longer, discounts widen, and working capital gets trapped in inventory." },
                { title: "Compliance lag", text: "Missing records can slow sales, frustrate lenders, and weaken trust with industrial buyers." },
              ].map(({ title, text }) => (
                <div key={title} className="rounded-2xl bg-white border border-slate-200 p-5">
                  <p className="font-bold text-slate-950 text-center">{title}</p>
                  <p className="mt-3 text-slate-600 leading-7 text-center">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What clients come to us for */}
        <section className="container mx-auto px-4 pb-8">
          <div className="rounded-[2rem] p-6 md:p-8 bg-white/[0.78] backdrop-blur-xl border border-slate-400/[0.22] shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">What clients come to us for</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {[
                { title: "Better Prices", text: "Commercial positioning that improves realization instead of leaving value on the table." },
                { title: "Verified Buyers", text: "Connections to serious buyers that match product quality and payment expectations." },
                { title: "Stable Supply", text: "Feedstock planning that protects production continuity and reduces procurement shocks." },
                { title: "Faster Sales", text: "Shorter conversion cycles from finished product to cash through market-fit specification." },
              ].map(({ title, text }) => (
                <div key={title} className="rounded-2xl bg-white border border-slate-200 p-5">
                  <p className="text-center font-bold text-slate-950">{title}</p>
                  <p className="mt-2 text-center text-slate-600 leading-7">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products and scrap we cover */}
        <section className="container mx-auto px-4 pb-8">
          <div className="rounded-[2rem] p-6 md:p-8 bg-white/[0.78] backdrop-blur-xl border border-slate-400/[0.22] shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Products and scrap we cover</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {["Crumb Rubber", "Pyrolysis Oil (TDO)", "Carbon Black (rCB)", "Steel Wire Scrap", "Rubber Powder", "Tyre-Derived Fuel", "Wire-Free Granules", "Used Tyre Scrap"].map((item) => (
                <div key={item} className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                  <p className="font-semibold text-slate-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outputs & buyers + data snapshot */}
        <section className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 xl:grid-cols- gap-6">
            <article className="rounded-[2rem] p-6 md:p-8 bg-white/[0.78] backdrop-blur-xl border border-slate-400/[0.22] shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
              <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">
                What comes out of a tyre recycling plant &mdash; and who buys it
              </h2>
              <p className="mt-4 text-center text-slate-600 leading-7 max-w-4xl mx-auto">
                A well-run tyre recycling plant creates value only when each
                output stream is matched to the right buyer, grade, and
                contract structure.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { title: "Crumb Rubber and Rubber Powder", text: "Highest-volume output. Used in sports surfaces, road construction, moulded products, and footwear. Pricing depends heavily on mesh size, purity, and consistency." },
                  { title: "Pyrolysis Oil (TDO)", text: "Strong demand as furnace fuel in cement plants, boilers, and industrial kilns. Buyers typically expect proper test data and stable supply terms." },
                  { title: "Recovered Carbon Black (rCB)", text: "Often the most undervalued product. Realisation improves when the material is processed to specification and supported by test reports." },
                  { title: "Steel Wire Scrap", text: "A predictable revenue stream when separation is clean. Efficient metal recovery improves overall plant economics and lowers waste loss." },
                ].map(({ title, text }) => (
                  <div key={title} className="rounded-2xl bg-white border border-slate-200 p-5">
                    <p className="font-bold text-slate-950 text-center">{title}</p>
                    <p className="mt-2 text-slate-600 leading-7 text-center">{text}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] p-6 md:p-8 bg-white/[0.78] backdrop-blur-xl border border-slate-400/[0.22] shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h2 className="text-center sm:text-left font-display text-2xl md:text-3xl font-bold text-slate-950 flex-1">
                  Real-world data snapshot
                </h2>
                <div className="flex gap-2 justify-center sm:justify-end">
                  <button
                    onClick={() => setYear("2023-24")}
                    className={`px-4 py-2 rounded-full font-semibold shadow-[0_12px_30px_rgba(15,23,42,0.08)] ${
                      year === "2023-24" ? "bg-brandGreen text-white" : "bg-white border border-slate-300 text-slate-700"
                    }`}
                  >
                    2023-24
                  </button>
                  <button
                    onClick={() => setYear("2024-25")}
                    className={`px-4 py-2 rounded-full font-semibold shadow-[0_12px_30px_rgba(15,23,42,0.08)] ${
                      year === "2024-25" ? "bg-brandGreen text-white" : "bg-white border border-slate-300 text-slate-700"
                    }`}
                  >
                    2024-25
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="rounded-2xl bg-white border border-slate-200 p-5">
                  <p className="text-sm text-slate-500 font-semibold">Producers registered</p>
                  <p className="text-3xl font-extrabold text-slate-950 mt-2">{producers}</p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-5">
                  <p className="text-sm text-slate-500 font-semibold">Recyclers registered</p>
                  <p className="text-3xl font-extrabold text-slate-950 mt-2">{recyclers}</p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-5">
                  <p className="text-sm text-slate-500 font-semibold">Total registered entities</p>
                  <p className="text-3xl font-extrabold text-slate-950 mt-2">{total}</p>
                </div>
              </div>
              <div className="mt-6 rounded-[1.5rem] bg-white border border-slate-200 p-4 min-h-[320px]">
                <p className="text-center text-[15px] font-semibold text-slate-950 mb-2">
                  Waste Tyre EPR portal registrations by entity type ({year})
                </p>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" innerRadius="55%" outerRadius="80%" paddingAngle={2}>
                      {pieData.map((entry, index) => (
                        <Cell key={entry.name} fill={PIE_COLORS[index % PIE_COLORS.length]} stroke="#fff" strokeWidth={3} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-5 rounded-[1.5rem] bg-white border border-slate-200 p-4 min-h-[320px]">
                <p className="text-center text-[15px] font-semibold text-slate-950 mb-2">
                  Count comparison for {year}
                </p>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={barData}>
                    <CartesianGrid vertical={false} stroke="rgba(148,163,184,0.18)" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis allowDecimals={false} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#0f172a", border: "none", borderRadius: 8 }} labelStyle={{ color: "#fff" }} itemStyle={{ color: "#fff" }} />
                    <Bar dataKey="value" radius={[14, 14, 0, 0]}>
                      {barData.map((entry, index) => (
                        <Cell key={entry.name} fill={index === 0 ? "rgba(90,195,97,0.9)" : "rgba(30,41,59,0.9)"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-xs text-slate-500 leading-6">
                The figures above are drawn from MoEFCC annual report
                references for Waste Tyre EPR portal registrations in 2023-24
                and 2024-25. The chart is intended for business planning and
                market context.
              </p>
            </article>
          </div>
        </section>

        {/* Turn guidance into action */}
        <section className="container mx-auto px-4 pb-8">
          <div className="rounded-[2rem] p-6 md:p-8 bg-white/[0.78] backdrop-blur-xl border border-slate-400/[0.22] shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Turn guidance into compliant action</h2>
            <p className="mt-5 text-center text-slate-700 leading-8 max-w-5xl mx-auto">
              Use this post as a foundation for your EPR program. Keep a
              documented chain of custody, partner with authorised
              recyclers, and maintain transparent reporting for every waste
              stream. When commerce and compliance move together, the
              business becomes more bankable and more scalable.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 pb-10">
          <div className="rounded-[2rem] p-6 md:p-8 bg-white/[0.78] backdrop-blur-xl border border-slate-400/[0.22] shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-950">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: "Why does scrap grading matter so much?", a: "Because tyre scrap quality directly affects throughput, contamination loss, product recovery, and buyer acceptance. A small change in cleanliness or composition can change the economics of an entire lot." },
                { q: "What is the most important sales discipline for recycled tyre products?", a: "Sell against specification, not assumption. Weight, mesh size, ash, moisture, and contamination controls reduce disputes and improve repeat orders." },
                { q: "How do buyers usually price TDO and rCB?", a: "Buyers typically compare them against furnace-fuel economics, quality test data, and consistency of supply. The stronger the documentation, the stronger the negotiation position." },
                { q: "Why is compliance part of the commercial model?", a: "Because plant approvals, authorised handling, and transparent records reduce operational risk. That lowers friction with lenders, auditors, and industrial offtakers." },
                { q: "How should a new tyre recycling project start?", a: "Start with the feedstock plan, product plan, compliance pathway, and offtake network together. If any one of them is missing, the project becomes harder to execute profitably." },
              ].map(({ q, a }) => (
                <details key={q} className="rounded-2xl p-5 border border-slate-400/[0.18] bg-white">
                  <summary className="cursor-pointer font-semibold text-slate-950 [&::-webkit-details-marker]:hidden list-none">{q}</summary>
                  <p className="mt-3 text-slate-600 leading-7">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        </div>
        <aside className="hidden lg:block w-[320px] shrink-0">
          <div className="sticky top-28 px-2">
            <StickyContactForm />
          </div>
        </aside>
         </div>

        
      </main>
    </div>
    
  );
}