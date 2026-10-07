import React, { useEffect, useRef } from "react";

import Chart from "chart.js/auto";

import StickyContactForm from "@/components/StickyContactForm";

import { motion } from "framer-motion";

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

function MarketplaceButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="https://www.eprnexuss.com/marketplace/"
      className={`inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:scale-[1.03] ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
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
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy();
      }

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
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }

      barChartInstance.current = new Chart(barChartRef.current, {
        type: "bar",
        data: {
          labels: ["2024 market size", "2030 projected size"],
          datasets: [
            {
              label: "₹ Cr",
              data: [9200, 21400],
              backgroundColor: [
                "rgba(90,195,97,0.9)",
                "rgba(30,41,59,0.9)",
              ],
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
              grid: {
                color: "rgba(148,163,184,0.18)",
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
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
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy();
      }

      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }
    };
  }, []);

  const bodyBackgroundStyle = {
    background:
      "radial-gradient(circle at top, rgba(90, 195, 97, 0.12), transparent 25%), linear-gradient(180deg, #f8fafc 0%, #eff8f0 100%)",
  };

  const glassClass =
    "bg-[rgba(255,255,255,0.78)] backdrop-blur-[14px] border border-[rgba(148,163,184,0.18)] shadow-[0_20px_50px_rgba(15,23,42,0.08)]";

  const softShadowClass =
    "shadow-[0_12px_30px_rgba(15,23,42,0.08)]";

  const sectionCardClass =
    "border border-[rgba(148,163,184,0.22)] shadow-[0_18px_40px_rgba(15,23,42,0.06)]";

  const kpiClass =
    "border border-[rgba(90,195,97,0.18)] bg-gradient-to-b from-[rgba(90,195,97,0.09)] to-[rgba(255,255,255,0.95)]";

  const chipClass =
    "border border-[rgba(90,195,97,0.22)] bg-[rgba(90,195,97,0.08)]";

  return (
    <div
      style={bodyBackgroundStyle}
      className="max-w-8xl text-[#0f172a] font-sans antialiased selection:bg-[#5AC361]/30 scroll-smooth"
    >
      <main className="max-w-8xl mt-[50px]">
        <div className="flex flex-col lg:flex-row gap-0 items-stretch">
          <div className="container mt-10">
            <motion.header
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="container mx-auto px-1 pt-8 pb-10"
            >
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
                      A practical, mobile-friendly guide to tyre recycling
                      market analysis, business strategy, sustainability,
                      segment selection, and growth planning in India.
                    </p>

                    <div className="flex justify-center pt-6">
                      <MarketplaceButton>
                        Explore EPR Tyre Credits Marketplace
                      </MarketplaceButton>
                    </div>
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
                        Understand the tyre recycling market landscape and
                        identify the segment with the strongest fit.
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
                        Align growth with compliance, circularity, and
                        long-term buyer demand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.header>

            <Reveal delay={0.05}>
              <section className="container mx-auto px-1 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                  <article
                    className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
                  >
                    <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
                      What this analysis helps clients understand
                    </h2>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white border border-slate-200 p-5">
                        <p className="text-sm text-[#5AC361] font-bold">
                          Market Size
                        </p>

                        <p className="mt-2 text-slate-600 leading-7">
                          Understand the current scale of the tyre recycling
                          market and its expected growth trajectory.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white border border-slate-200 p-5">
                        <p className="text-sm text-[#5AC361] font-bold">
                          Demand Mapping
                        </p>

                        <p className="mt-2 text-slate-600 leading-7">
                          Identify where demand exists across tyre recycling
                          products and compliance-linked channels.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white border border-slate-200 p-5">
                        <p className="text-sm text-[#5AC361] font-bold">
                          Segment Selection
                        </p>

                        <p className="mt-2 text-slate-600 leading-7">
                          Compare opportunities such as crumb rubber,
                          pyrolysis, recovered carbon black, steel and other
                          outputs.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white border border-slate-200 p-5">
                        <p className="text-sm text-[#5AC361] font-bold">
                          Growth Planning
                        </p>

                        <p className="mt-2 text-slate-600 leading-7">
                          Build a realistic roadmap based on capacity,
                          logistics, buyers and compliance requirements.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.05}>
              <section className="container mx-auto px-1 pb-8">
                <div
                  className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
                >
                  <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
                    Segments covered
                  </h2>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {[
                      "Crumb Rubber",
                      "Pyrolysis Oil",
                      "Recovered Carbon Black",
                      "Steel Wire Scrap",
                      "Tyre Derived Fuel",
                      "Retreading",
                      "Export Markets",
                      "EPR Compliance",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-white border border-slate-200 p-5 text-center"
                      >
                        <p className="text-sm text-[#5AC361] font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <p className="mt-2 font-bold text-slate-950">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-7">
                    <MarketplaceButton>
                      Buy EPR Tyre Credits
                    </MarketplaceButton>
                  </div>
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.05}>
              <section className="container mx-auto px-1 pb-8">
                <div
                  className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
                >
                  <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
                    Understanding the size and shape of the tyre recycling
                    market
                  </h2>

                  <div className="mt-5 text-slate-700 leading-8 space-y-4">
                    <p>
                      India’s tyre recycling ecosystem includes formal
                      recyclers, informal collection networks, processors,
                      manufacturers, exporters and compliance-linked
                      stakeholders.
                    </p>

                    <p>
                      Understanding the size and structure of this market helps
                      businesses identify where the strongest commercial
                      opportunities exist and where operational risks need to
                      be managed.
                    </p>

                    <p>
                      A proper market assessment should combine market size,
                      collection volumes, processing capacity, product demand,
                      pricing, logistics and regulatory requirements.
                    </p>
                  </div>
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.05}>
              <section className="container mx-auto px-1 pb-8">
                <div
                  className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
                >
                  <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
                    Dynamic pie graph and bar graph
                  </h2>

                  <p className="mt-4 text-center text-slate-600 leading-7 max-w-4xl mx-auto">
                    The chart pair below is designed to support an evidence-led
                    blog narrative. The pie view presents the
                    formal-versus-informal channel split, and the bar chart
                    below helps visualize the market scale projection.
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
              </section>
            </Reveal>

            <Reveal delay={0.05}>
              <section className="container mx-auto px-1 pb-8">
                <div
                  className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
                >
                  <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
                    What clients gain from a proper market analysis
                  </h2>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                      <p className="text-sm text-[#5AC361] font-bold">01</p>

                      <p className="mt-2 font-bold text-slate-950">
                        Right Segment
                      </p>

                      <p className="mt-2 text-slate-600 leading-7">
                        Enter the segment that fits your capital, location, and
                        buyer proximity.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
                      <p className="text-sm text-[#5AC361] font-bold">02</p>

                      <p className="mt-2 font-bold text-slate-950">
                        Validated Revenue
                      </p>

                      <p className="mt-2 text-slate-600 leading-7">
                        Revenue projections grounded in actual buyer
                        conversations.
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
              </section>
            </Reveal>

            <Reveal delay={0.05}>
              <section className="container mx-auto px-1 pb-8">
                <div className="grid grid-cols-1 xl:grid-cols-1 gap-6">
                  <article
                    className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
                  >
                    <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
                      Brief case study
                    </h2>

                    <div className="mt-5 text-slate-700 leading-8 space-y-4">
                      <p>
                        A tyre recycling project entered with a broad market
                        thesis but limited clarity on where demand was
                        strongest. The initial plan had too many product
                        assumptions and not enough buyer validation.
                      </p>

                      <p>
                        We narrowed the opportunity to the most commercially
                        fit segment, checked the buyer landscape, and tied the
                        business model to realistic logistics and margin
                        assumptions.
                      </p>

                      <p>
                        The result was a more focused entry path, lower
                        execution risk, and a clearer route to scale.
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
                        Use this post as a foundation for your EPR program.
                        Keep a documented chain of custody, partner with
                        authorised recyclers, and maintain transparent CPCB
                        reporting for every waste stream.
                      </p>

                      <p>
                        Market intelligence is most useful when it is paired
                        with responsible execution and consistent compliance
                        discipline.
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
              </section>
            </Reveal>

            <div className="flex justify-center py-4">
              <MarketplaceButton>
                Trade EPR Tyre Credits
              </MarketplaceButton>
            </div>

            <Reveal delay={0.05}>
              <section className="container mx-auto px-1 pb-10">
                <div
                  className={`${sectionCardClass} ${glassClass} rounded-[2rem] p-6 md:p-8`}
                >
                  <h2 className="text-center font-['Outfit',system-ui,sans-serif] text-2xl md:text-3xl font-bold text-slate-950">
                    Frequently Asked Questions
                  </h2>

                  <div className="mt-6 space-y-4">
                    <details className="rounded-2xl p-5 border border-[rgba(148,163,184,0.18)] bg-white group">
                      <summary className="cursor-pointer font-semibold text-slate-950 list-none [&::-webkit-details-marker]:hidden">
                        Why is market analysis important before starting a
                        tyre recycling project?
                      </summary>

                      <p className="mt-3 text-slate-600 leading-7">
                        It helps define the right segment, validate demand,
                        estimate pricing, and reduce the risk of investing in a
                        weak commercial model.
                      </p>
                    </details>

                    <details className="rounded-2xl p-5 border border-[rgba(148,163,184,0.18)] bg-white group">
                      <summary className="cursor-pointer font-semibold text-slate-950 list-none [&::-webkit-details-marker]:hidden">
                        Which segments should be evaluated?
                      </summary>

                      <p className="mt-3 text-slate-600 leading-7">
                        A serious assessment usually covers crumb rubber,
                        pyrolysis oil, recovered carbon black, steel wire
                        scrap, tyre-derived fuel, retreading, export markets,
                        and EPR compliance-linked channels.
                      </p>
                    </details>

                    <details className="rounded-2xl p-5 border border-[rgba(148,163,184,0.18)] bg-white group">
                      <summary className="cursor-pointer font-semibold text-slate-950 list-none [&::-webkit-details-marker]:hidden">
                        How does the formal channel share affect planning?
                      </summary>

                      <p className="mt-3 text-slate-600 leading-7">
                        The 28% formal share indicates that large volumes still
                        move outside formal recycling routes. That creates
                        opportunity, but it also requires stronger sourcing and
                        compliance systems.
                      </p>
                    </details>

                    <details className="rounded-2xl p-5 border border-[rgba(148,163,184,0.18)] bg-white group">
                      <summary className="cursor-pointer font-semibold text-slate-950 list-none [&::-webkit-details-marker]:hidden">
                        What makes a market strategy credible?
                      </summary>

                      <p className="mt-3 text-slate-600 leading-7">
                        It is credible when it is based on buyer conversations,
                        logistics realities, capacity logic, and a realistic
                        view of what the market can absorb.
                      </p>
                    </details>
                  </div>
                </div>
              </section>
            </Reveal>
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