import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import StickyContactForm from "@/components/StickyContactForm";
import {motion} from "framer-motion"

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

export default function EprTyreCreditDashboard() {
  const pieChartRef = useRef<HTMLCanvasElement | null>(null);
  const barChartRef = useRef<HTMLCanvasElement | null>(null);

  const pieChartInstance = useRef<Chart | null>(null);
  const barChartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    // Initialize Pie/Doughnut Chart
    if (pieChartRef.current) {
      if (pieChartInstance.current) pieChartInstance.current.destroy();

      pieChartInstance.current = new Chart(pieChartRef.current, {
        type: "doughnut",
        data: {
          labels: ["Formal recycling channel", "Uncaptured market"],
          datasets: [
            {
              data: [28, 72],
              backgroundColor: ["#5AC361", "#1e293b"],
              borderColor: ["#ffffff", "#ffffff"],
              borderWidth: 3,
              hoverOffset: 8,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          cutout: "62%",
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                boxWidth: 10,
                font: { family: "Inter", size: 12 },
              },
            },
            title: {
              display: true,
              text: "Estimated formal vs informal flow of ELT volume",
              font: { family: "Inter", size: 15, weight: 600 },
              color: "#0f172a",
            },
            subtitle: {
              display: true,
              text: "Based on the 28% formal recycling share reference",
              font: { family: "Inter", size: 12, weight: 400 },
              color: "#64748b",
              padding: { bottom: 10 },
            },
          },
        },
      });
    }

    // Initialize Bar Chart
    if (barChartRef.current) {
      if (barChartInstance.current) barChartInstance.current.destroy();

      barChartInstance.current = new Chart(barChartRef.current, {
        type: "bar",
        data: {
          labels: ["2024 market size", "2030 projected size"],
          datasets: [
            {
              label: "₹ Cr",
              data: [9200, 21400],
              backgroundColor: ["rgba(90,195,97,0.9)", "rgba(30,41,59,0.9)"],
              borderRadius: 14,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return "₹" + value.toLocaleString("en-IN");
                },
              },
              grid: { color: "rgba(148,163,184,0.18)" },
            },
            x: { grid: { display: false } },
          },
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: "Market size projection (₹ Cr)",
              font: { family: "Inter", size: 15, weight: 600 },
              color: "#0f172a",
            },
          },
        },
      });
    }

    return () => {
      if (pieChartInstance.current) pieChartInstance.current.destroy();
      if (barChartInstance.current) barChartInstance.current.destroy();
    };
  }, []);

  // Custom inline style mapping for dynamic gradients matching the original CSS rules
  const bodyBackgroundStyle = {
    background: `radial-gradient(circle at top, rgba(90, 195, 97, 0.12), transparent 25%), linear-gradient(180deg, #f8fafc 0%, #eff8f0 100%)`,
  };

  const glassClass =
    "bg-[rgba(255,255,255,0.78)] backdrop-blur-[14px] border border-[rgba(148,163,184,0.18)] shadow-[0_20px_50px_rgba(15,23,42,0.08)]";
  const softShadowClass = "shadow-[0_12px_30px_rgba(15,23,42,0.08)]";
  const sectionCardClass =
    "border border-[rgba(148,163,184,0.22)] shadow-[0_18px_40px_rgba(15,23,42,0.06)]";
  const kpiClass =
    "border border-[rgba(90,195,97,0.18)] bg-gradient-to-b from-[rgba(90,195,97,0.09)] to-[rgba(255,255,255,0.95)]";
  const chipClass =
    "border border-[rgba(90,195,97,0.22)] bg-[rgba(90,195,97,0.08)]";

  return (
    <div
      style={bodyBackgroundStyle}
      className="max-w-8xl  text-[#0f172a] font-sans antialiased selection:bg-[#5AC361]/30 scroll-smooth"
    >
      <main className="max-w-8xl mt-[50px]">
        <div className="flex flex-col lg:flex-row gap-0 items-stretch">
          <div className="container mt-10 ">
        
        <motion.header
        initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }} 
        className="container mx-auto px-1 pt-8 pb-10">
          <div className={`${glassClass} rounded-[2rem] overflow-hidden`}>
            <div className="p-6 md:p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-3 mb-6 justify-center">
                <span
                  className={`${chipClass} text-[#5AC361] font-semibold px-2 py-2 rounded-full text-sm`}
                >
                  EPR Tyre Credit
                </span>
                <span
                  className={`${chipClass} text-slate-700 font-semibold px-4 py-2 rounded-full text-sm`}
                >
                  Market Intelligence
                </span>
                <span
                  className={`${chipClass} text-slate-700 font-semibold px-4 py-2 rounded-full text-sm`}
                >
                  Growth Opportunities
                </span>
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-['Outfit',system-ui,sans-serif] text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-tight">
                  EPR Tyre Credit : Stretegic Market Intelligence & Growth
                  Opportunities
                </h1>
                <p className="mt-5 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-8">
                  A practical, mobile-friendly guide to tyre recycling market
                  analysis, business strategy, sustainability, segment
                  selection, and growth planning in India.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                <div className={`${kpiClass} rounded-2xl p-5`}>
                  <p className="text-sm text-slate-500 font-semibold">
                    Core theme
                  </p>
                  <p className="text-lg font-bold text-slate-950 mt-1">
                    Market analysis
                  </p>
                  <p className="text-sm text-slate-600 mt-2 leading-6">
                    Understand the tyre recycling market landscape and identify
                    the segment with the strongest fit.
                  </p>
                </div>
                <div className={`${kpiClass} rounded-2xl p-5`}>
                  <p className="text-sm text-slate-500 font-semibold">
                    Commercial lens
                  </p>
                  <p className="text-lg font-bold text-slate-950 mt-1">
                    Business strategy
                  </p>
                  <p className="text-sm text-slate-600 mt-2 leading-6">
                    Move from opportunity mapping to a sustainable and
                    financeable operating model.
                  </p>
                </div>
                <div className={`${kpiClass} rounded-2xl p-5`}>
                  <p className="text-sm text-slate-500 font-semibold">
                    Execution lens
                  </p>
                  <p className="text-lg font-bold text-slate-950 mt-1">
                    Sustainability
                  </p>
                  <p className="text-sm text-slate-600 mt-2 leading-6">
                    Align growth with compliance, circularity, and long-term
                    buyer demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        <Reveal delay={0.05}> <section  className="container mx-auto px-1 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            <article
              className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8 animate-[fade-in_0.6s_ease-out_forwards]`}
            >
              <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
                Introduction
              </h2>
              <div className="mt-5 text-slate-700 leading-8 space-y-4">
                <p>
                  Understand the tyre recycling market landscape, identify
                  target segments, and build a sustainable business model. That
                  is the purpose of market intelligence that actually supports
                  investment decisions.
                </p>
                <p>
                  EPR Tyre market analysis helps promoters understand where
                  value is created, where buyers are concentrated, and which
                  product streams can support long-term growth.
                </p>
                <p>
                  The right strategy connects scrap supply, processing
                  capability, pricing discipline, and compliance into a business
                  that can scale without losing control.
                </p>
              </div>
            </article>

            <article
              className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8 animate-[fade-in_0.6s_ease-out_forwards]`}
            >
              <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
                EPR Tyre Market Analysis, Business Strategy, Sustainability
              </h2>
              <div className="mt-5 text-slate-700 leading-8 space-y-4">
                <p className="font-semibold text-slate-900 text-center">
                  A market analysis is not a report. It is a decision-making
                  tool.
                </p>
                <p>
                  It helps clients choose the right segment, validate revenue
                  assumptions, reduce entry risk, and define a clear growth
                  path.
                </p>
                <p>
                  In practical terms, it answers four questions: what to
                  process, where to sell, how to price, and how to scale
                  responsibly.
                </p>
              </div>
            </article>
          </div>
        </section> </Reveal>

        <Reveal delay={0.05}> <section  className="container mx-auto px-1 pb-8">
          <div
            className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
          >
            <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
              Problem
            </h2>
            <div className="mt-5 text-slate-700 leading-8 space-y-4">
              <p className="font-semibold text-slate-900 text-center">
                Your segment is already waiting.
              </p>
              <p>
                Every year, India discards over 150 million end-of-life tyres.
                Most go nowhere near a formal recycling system. That is not a
                waste problem. That is an uncaptured market.
              </p>
              <p>
                Many projects fail because they enter the market with a general
                idea instead of a segment-specific plan. The result is poor
                pricing visibility, weak buyer fit, and avoidable capital risk.
              </p>
            </div>
          </div>
        </section> </Reveal>

        <Reveal delay={0.05}> <section  className="container mx-auto px-1 pb-8">
          <div
            className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
          >
            <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
              Solution
            </h2>
            <p className="mt-5 text-slate-700 leading-8 max-w-5xl mx-auto text-center">
              Build the project around evidence: quantify feedstock
              availability, define the target product mix, map the buyer base,
              and connect each assumption to actual market demand. Then convert
              that intelligence into a phased business plan with clear capacity
              milestones.
            </p>
          </div>
        </section> </Reveal>

        <Reveal delay={0.05}> <section  className="container mx-auto px-1 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            <article
              className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
            >
              <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
                Requirements
              </h2>
              <div className="mt-5 text-slate-700 leading-8 space-y-4">
                <p>
                  A strong market-entry plan begins with the right inputs:
                  feedstock availability, buyer proximity, product definition,
                  and a realistic understanding of capital and operating
                  constraints.
                </p>
                <p>
                  The project should also map whether it is targeting crumb
                  rubber, pyrolysis oil, recovered carbon black, steel recovery,
                  retreading supply chains, or EPR-linked recycling capacity.
                </p>
                <p>
                  A market analysis works best when it is tied to location,
                  local demand, logistics cost, and the scale at which the plant
                  can stay competitive.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white border border-slate-200 p-5">
                  <p className="font-semibold text-slate-950 text-center">
                    Feedstock mapping
                  </p>
                  <p className="mt-2 text-slate-600 leading-7 text-center">
                    Assess supply, scrap quality, and collection radius before
                    investing.
                  </p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-5">
                  <p className="font-semibold text-slate-950 text-center">
                    Buyer mapping
                  </p>
                  <p className="mt-2 text-slate-600 leading-7 text-center">
                    Identify industrial buyers, traders, and offtake routes
                    early.
                  </p>
                </div>
              </div>
            </article>

            <article
              className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
            >
              <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
                Roadmap
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-4">
                <div className="rounded-2xl bg-white border border-slate-200 p-5">
                  <p className="font-bold text-slate-950">
                    1. Define the opportunity
                  </p>
                  <p className="mt-2 text-slate-600 leading-7">
                    Select the tyre waste segment and product stream that
                    matches your capital and geography.
                  </p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-5">
                  <p className="font-bold text-slate-950">2. Validate demand</p>
                  <p className="mt-2 text-slate-600 leading-7">
                    Confirm buyer appetite, pricing band, and specification
                    requirements with real market conversations.
                  </p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-5">
                  <p className="font-bold text-slate-950">
                    3. Build the financial model
                  </p>
                  <p className="mt-2 text-slate-600 leading-7">
                    Convert procurement, logistics, processing, and sales
                    assumptions into a measurable margin model.
                  </p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-5">
                  <p className="font-bold text-slate-950">4. Phase for scale</p>
                  <p className="mt-2 text-slate-600 leading-7">
                    Start with one strong segment, then add adjacent revenue
                    streams after operational stability is achieved.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section> </Reveal>

        <Reveal delay={0.05}> <section  className="container mx-auto px-1 pb-8">
          <div
            className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
          >
            <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
              Pitfalls
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="rounded-2xl bg-white border border-slate-200 p-5">
                <p className="font-bold text-slate-950 text-center">
                  Wrong segment choice
                </p>
                <p className="mt-3 text-slate-600 leading-7 text-center">
                  The wrong product category can trap capital in a market with
                  weak buyer depth.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5">
                <p className="font-bold text-slate-950 text-center">
                  No pricing discipline
                </p>
                <p className="mt-3 text-slate-600 leading-7 text-center">
                  A project without pricing benchmarks loses leverage in both
                  procurement and sales.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5">
                <p className="font-bold text-slate-950 text-center">
                  Ignoring logistics
                </p>
                <p className="mt-3 text-slate-600 leading-7 text-center">
                  Transport, storage, and handling costs can erase margins if
                  the radius is too wide.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5">
                <p className="font-bold text-slate-950 text-center">
                  Weak compliance integration
                </p>
                <p className="mt-3 text-slate-600 leading-7 text-center">
                  If compliance is treated as an afterthought, scaling becomes
                  slower and more expensive.
                </p>
              </div>
            </div>
          </div>
        </section> </Reveal>

        <Reveal delay={0.05}> <section  className="container mx-auto px-1 pb-8">
          <div
            className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
          >
            <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
              Your segment is already waiting
            </h2>
            <div className="mt-5 text-slate-700 leading-8 space-y-4 max-w-5xl mx-auto">
              <p className="text-center">
                Every year, India discards over 150 million end-of-life tyres.
                Most go nowhere near a formal recycling system. That is not a
                waste problem. That is an uncaptured market.
              </p>
              <p className="text-center">
                The right market analysis helps you see where demand already
                exists, where supply is fragmented, and where a well-positioned
                business can enter with less friction.
              </p>
              <div className="flex justify-center pt-2">
                <a
                  href="https://eprnexuss.com/contactus"
                  className={`inline-flex items-center justify-center rounded-full bg-[#5AC361] px-6 py-3 text-white font-semibold ${softShadowClass} transition hover:opacity-95`}
                >
                  Talk to Our Team
                </a>
              </div>
            </div>
          </div>
        </section> </Reveal>

        <Reveal delay={0.05}> <section  className="container mx-auto px-1 pb-8">
          <div
            className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
          >
            <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
              What this analysis helps clients understand
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 text-center">
                <p className="text-sm text-slate-500 font-semibold">
                  Market size
                </p>
                <p className="mt-2 text-3xl font-extrabold text-slate-950">
                  ₹9,200 Cr+
                </p>
                <p className="mt-2 text-slate-600 leading-7">
                  India tyre recycling market size in 2024.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-6 text-center">
                <p className="text-sm text-slate-500 font-semibold">
                  Growth rate
                </p>
                <p className="mt-2 text-3xl font-extrabold text-slate-950">
                  14.8% CAGR
                </p>
                <p className="mt-2 text-slate-600 leading-7">
                  Projected through 2030.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-6 text-center">
                <p className="text-sm text-slate-500 font-semibold">
                  Annual ELT generation
                </p>
                <p className="mt-2 text-3xl font-extrabold text-slate-950">
                  1.52 Mn MT
                </p>
                <p className="mt-2 text-slate-600 leading-7">
                  Estimated annual end-of-life tyre generation in 2024.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-6 text-center">
                <p className="text-sm text-slate-500 font-semibold">
                  Formal channel share
                </p>
                <p className="mt-2 text-3xl font-extrabold text-slate-950">
                  28% Formal
                </p>
                <p className="mt-2 text-slate-600 leading-7">
                  Share of ELT volume entering formal recycling channels.
                </p>
              </div>
            </div>
          </div>
        </section> </Reveal>

        <Reveal delay={0.05}> <section  className="container mx-auto px-1 pb-8">
          <div
            className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
          >
            <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
              Segments covered
            </h2>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="font-semibold text-slate-950">Crumb Rubber</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="font-semibold text-slate-950">
                  Pyrolysis Oil (TDO)
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="font-semibold text-slate-950">
                  Carbon Black (rCB)
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="font-semibold text-slate-950">Steel Wire Scrap</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="font-semibold text-slate-950">
                  Tyre-Derived Fuel
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="font-semibold text-slate-950">Retreading</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="font-semibold text-slate-950">Export Markets</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="font-semibold text-slate-950">EPR Compliance</p>
              </div>
            </div>
          </div>
        </section> </Reveal>

        <Reveal delay={0.05}> <section  className="container mx-auto px-1 pb-8">
          <div
            className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
          >
            <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
              Understanding the size and shape of the tyre recycling market
            </h2>
            <div className="mt-5 text-slate-700 leading-8 space-y-4">
              <p>
                The tyre waste recycling market in India is a
                multi-thousand-crore industry growing at double-digit rates.
                Market size matters, but so does the shape of demand by region,
                buyer type, and product stream.
              </p>
              <p>
                Some regions are stronger for feedstock aggregation, some for
                industrial offtake, and some for export-linked movement. A
                serious analysis identifies where a project can win on
                logistics, specification, and repeat demand.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="text-sm text-slate-500 font-semibold">
                  Estimated size
                </p>
                <p className="mt-2 text-2xl font-extrabold text-slate-950">
                  ₹9,200 Cr
                </p>
                <p className="mt-2 text-slate-600 leading-7">
                  India tyre waste recycling market in 2024.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="text-sm text-slate-500 font-semibold">
                  Projected size
                </p>
                <p className="mt-2 text-2xl font-extrabold text-slate-950">
                  ₹21,400 Cr
                </p>
                <p className="mt-2 text-slate-600 leading-7">
                  Projected by 2030 at 14.8% CAGR.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="text-sm text-slate-500 font-semibold">
                  Annual generation
                </p>
                <p className="mt-2 text-2xl font-extrabold text-slate-950">
                  1.52 Mn MT
                </p>
                <p className="mt-2 text-slate-600 leading-7">
                  Estimated annual end-of-life tyre generation.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="text-sm text-slate-500 font-semibold">
                  Formal route
                </p>
                <p className="mt-2 text-2xl font-extrabold text-slate-950">
                  28%
                </p>
                <p className="mt-2 text-slate-600 leading-7">
                  Approximate share entering formal recycling channels.
                </p>
              </div>
            </div>
          </div>
        </section> </Reveal>

        <Reveal delay={0.05}> <section  className="container mx-auto px-1 pb-8">
          <div
            className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
          >
            <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
              Dynamic pie graph and bar graph
            </h2>
            <p className="mt-4 text-center text-slate-600 leading-7 max-w-4xl mx-auto">
              The chart pair below is designed to support an evidence-led blog
              narrative. The pie view presents the formal-versus-informal
              channel split, and the bar chart below helps visualize the market
              scale projection.
            </p>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-[1.5rem] bg-white border border-slate-200 p-4 min-h-[320px]">
                <canvas
                  ref={pieChartRef}
                  className="w-full h-full !important"
                ></canvas>
              </div>
              <div className="rounded-[1.5rem] bg-white border border-slate-200 p-4 min-h-[320px]">
                <canvas
                  ref={barChartRef}
                  className="w-full h-full !important"
                ></canvas>
              </div>
            </div>
          </div>
        </section> </Reveal>

        <Reveal delay={0.05}> <section  className="container mx-auto px-1 pb-8">
          <div
            className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
          >
            <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
              What clients gain from a proper market analysis
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="text-sm text-[#5AC361] font-bold">01</p>
                <p className="mt-2 font-bold text-slate-950">Right Segment</p>
                <p className="mt-2 text-slate-600 leading-7">
                  Enter the segment that fits your capital, location, and buyer
                  proximity.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="text-sm text-[#5AC361] font-bold">02</p>
                <p className="mt-2 font-bold text-slate-950">
                  Validated Revenue
                </p>
                <p className="mt-2 text-slate-600 leading-7">
                  Revenue projections grounded in actual buyer conversations.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="text-sm text-[#5AC361] font-bold">03</p>
                <p className="mt-2 font-bold text-slate-950">
                  Lower Entry Risk
                </p>
                <p className="mt-2 text-slate-600 leading-7">
                  Competitive blind spots identified before capital is
                  committed.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                <p className="text-sm text-[#5AC361] font-bold">04</p>
                <p className="mt-2 font-bold text-slate-950">
                  Clear Growth Path
                </p>
                <p className="mt-2 text-slate-600 leading-7">
                  A two-segment and three-segment roadmap for sustainable
                  scaling.
                </p>
              </div>
            </div>
          </div>
        </section> </Reveal>

        <Reveal delay={0.05}> <section  className="container mx-auto px-1 pb-8">
          <div className="grid grid-cols-1 xl:grid-cols-1 gap-6">
            <article
              className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
            >
              <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
                Brief case study
              </h2>
              <div className="mt-5 text-slate-700 leading-8 space-y-4">
                <p>
                  A tyre recycling project entered with a broad market thesis
                  but limited clarity on where demand was strongest. The initial
                  plan had too many product assumptions and not enough buyer
                  validation.
                </p>
                <p>
                  We narrowed the opportunity to the most commercially fit
                  segment, checked the buyer landscape, and tied the business
                  model to realistic logistics and margin assumptions.
                </p>
                <p>
                  The result was a more focused entry path, lower execution
                  risk, and a clearer route to scale.
                </p>
              </div>
            </article>

            <article
              className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
            >
              <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
                Turn guidance into compliant action
              </h2>
              <div className="mt-5 text-slate-700 leading-8 space-y-4">
                <p>
                  Use this post as a foundation for your EPR program. Keep a
                  documented chain of custody, partner with authorised
                  recyclers, and maintain transparent CPCB reporting for every
                  waste stream.
                </p>
                <p>
                  Market intelligence is most useful when it is paired with
                  responsible execution and consistent compliance discipline.
                </p>
                <div className="flex justify-center pt-2">
                  <a
                    href="https://eprnexuss.com/contactus"
                    className={`inline-flex items-center justify-center rounded-full bg-[#5AC361] px-6 py-3 text-white font-semibold ${softShadowClass} transition hover:opacity-95`}
                  >
                    Talk to Our Team
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section> </Reveal>

        <Reveal delay={0.05}> <section  className="container mx-auto px-1 pb-10">
          <div
            className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
          >
            <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
              <details className="rounded-2xl p-5 border border-[rgba(148,163,184,0.18)] bg-white group">
                <summary className="cursor-pointer font-semibold text-slate-950 list-none [&::-webkit-details-marker]:hidden">
                  Why is market analysis important before starting a tyre
                  recycling project?
                </summary>
                <p className="mt-3 text-slate-600 leading-7">
                  It helps define the right segment, validate demand, estimate
                  pricing, and reduce the risk of investing in a weak commercial
                  model.
                </p>
              </details>
              <details className="rounded-2xl p-5 border border-[rgba(148,163,184,0.18)] bg-white group">
                <summary className="cursor-pointer font-semibold text-slate-950 list-none [&::-webkit-details-marker]:hidden">
                  Which segments should be evaluated?
                </summary>
                <p className="mt-3 text-slate-600 leading-7">
                  A serious assessment usually covers crumb rubber, pyrolysis
                  oil, recovered carbon black, steel wire scrap, tyre-derived
                  fuel, retreading, export markets, and EPR compliance-linked
                  channels.
                </p>
              </details>
              <details className="rounded-2xl p-5 border border-[rgba(148,163,184,0.18)] bg-white group">
                <summary className="cursor-pointer font-semibold text-slate-950 list-none [&::-webkit-details-marker]:hidden">
                  How does the formal channel share affect planning?
                </summary>
                <p className="mt-3 text-slate-600 leading-7">
                  The 28% formal share indicates that large volumes still move
                  outside formal recycling routes. That creates opportunity, but
                  it also requires stronger sourcing and compliance systems.
                </p>
              </details>
              <details className="rounded-2xl p-5 border border-[rgba(148,163,184,0.18)] bg-white group">
                <summary className="cursor-pointer font-semibold text-slate-950 list-none [&::-webkit-details-marker]:hidden">
                  What makes a market strategy credible?
                </summary>
                <p className="mt-3 text-slate-600 leading-7">
                  It is credible when it is based on buyer conversations,
                  logistics realities, capacity logic, and a realistic view of
                  what the market can absorb.
                </p>
              </details>
            </div>
          </div>
        </section> </Reveal>
        </div>
        <aside className="hidden lg:block shrink-0 w-[320px]">
          <div className="sticky top-[140px] px-2">
            <StickyContactForm />
          </div>
        </aside>
        </div>
      </main>
    </div>
  );
}
