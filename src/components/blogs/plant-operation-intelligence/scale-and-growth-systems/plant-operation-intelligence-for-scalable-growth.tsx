import Seo from "@/components/Seo";
import React from "react";
import StickyContactForm from "@/components/StickyContactForm";

const PlantIntelligenceDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f4f7fa] text-[#1e293b] font-sans">
      <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        <div className="flex-1 min-w-0">
      <style>{`
        :root {
          --bg: #f4f7fa;
          --bg2: #ffffff;
          --card: #ffffff;
          --card2: #f8fafc;
          --line: rgba(148, 163, 184, 0.15);
          --text: #1e293b;
          --muted: #64748b;
          --accent: #2563eb; /* Primary Blue */
          --accent2: #16a34a; /* Secondary Green */
          --accent3: #ea580c; /* Orange Accent */
          --good: #15803d;
          --warn: #b45309;
          --shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
          --radius: 24px;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 20px;
          padding: 28px;
          background: linear-gradient(135deg, #ffffff, #f8fafc);
          border: 1px solid var(--line);
          border-radius: 34px;
          box-shadow: var(--shadow);
          overflow: hidden;
          margin-top: 60px;
        }

        .eyebrow {
          display: inline-flex;
          gap: 10px;
          align-items: center;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(37, 99, 235, 0.08);
          color: #1e40af;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: .4px;
          text-transform: uppercase;
        }

        .glass {
          width: 100%;
          background: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(248,250,252,0.9));
          border: 1px solid var(--line);
          border-radius: 28px;
          padding: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }

        .glass::before {
          content: "";
          position: absolute;
          inset: -35% -10% auto auto;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.12), transparent 68%);
        }

        .pill {
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(22, 163, 74, 0.08);
          border: 1px solid rgba(22, 163, 74, 0.2);
          color: #166534;
          font-size: 0.88rem;
          font-weight: 500;
        }

        .section {
          margin-top: 22px;
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 24px;
        }

        .card {
          background: #f8fafc;
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 18px;
        }

        .bar-track {
          height: 18px;
          background: #e2e8f0;
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,.04);
        }

        .bar-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          box-shadow: 0 0 15px rgba(37, 99, 235, 0.2);
        }

        .bar-fill.alt {
          background: linear-gradient(90deg, var(--accent3), #f97316);
        }

        .db table {
          width: 100%;
          border-collapse: collapse;
          min-width: 680px;
        }

        .db th, .db td {
          padding: 12px 10px;
          border-bottom: 1px solid #e2e8f0;
          text-align: left;
          vertical-align: top;
        }

        .db th {
          color: #1e3a8a;
          font-size: 0.92rem;
          text-transform: uppercase;
          letter-spacing: .05em;
          background: #f1f5f9;
        }

        .metric {
          background: linear-gradient(180deg, rgba(37, 99, 235, 0.06), rgba(22, 163, 74, 0.04));
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 16px;
        }

        @media (max-width: 980px) {
          .hero, .grid-2, .chart-wrap, .faq, .casebox, .cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <Seo
        title="How Plant Operation Intelligence Supports Scalable Growth"
        description="Discover how Plant Operation Intelligence enables scalable business growth through real-time monitoring, KPI tracking, predictive analytics, process optimization, automation, and data-driven operational decisions."
        keywords={[
          "Plant Operation Intelligence",
          "Scalable Growth",
          "Plant Performance",
          "Industrial Operations",
          "Operational Intelligence",
          "Manufacturing Intelligence",
          "Operational Excellence",
          "Plant Efficiency",
          "Real-Time Monitoring",
          "KPI Tracking",
          "Process Optimization",
          "Industrial Analytics",
          "Smart Manufacturing",
          "Digital Plant Operations",
          "Business Growth",
          "How does Plant Operation Intelligence support business growth?",
          "How to scale manufacturing operations?",
          "Benefits of Plant Operation Intelligence",
          "How to improve plant productivity?",
          "Real-time monitoring for industrial growth",
          "How to optimize manufacturing processes?",
          "Data-driven manufacturing strategies",
          "Plant performance management guide",
          "Operational intelligence for industrial plants",
          "Scalable manufacturing operations guide",
        ]}
        url="https://eprnexuss.com/blog/plant-operation-intelligence-for-scalable-growth"
        type="article"
      />

      <div className="max-w-8xl mx-auto px-4 py-7">
        {/* HERO */}
        <section className="hero">
          <div>
            <span className="eyebrow">Plant intelligence for faster scale</span>
            <h1 className="text-[clamp(2.1rem,4vw,4.3rem)] leading-[1.02] mt-4 mb-3.5 font-bold text-[#0f172a]">
              How Plant Operation Intelligence Supports Scalable Growth
            </h1>
            <p className="text-[1.08rem] text-[#475569] max-w-[60ch] mb-5">
              The plants that scale smoothly are not the ones that work harder.
              They are the ones that see farther. With plant operation
              intelligence, leaders turn real-time production visibility, KPI
              tracking, and predictive maintenance into a practical growth
              engine.
            </p>
            <div className="text-[1.15rem] text-[#2563eb] font-bold mb-3">
              Smarter operations today. Bigger capacity tomorrow.
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Plant Operation Intelligence",
                "Scalable Growth",
                "Operational Excellence",
                "OEE & KPI Monitoring",
                "Predictive Maintenance",
                "Process Optimization",
              ].map((tag, i) => (
                <span key={i} className="pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-art">
            <div className="glass">
              <h3 className="mb-2 text-[1.2rem] font-semibold text-[#0f172a]">
                What growth looks like in a connected plant
              </h3>
              <p className="text-[#475569] mb-6">
                Less downtime, better throughput, faster decisions, and a team
                that can scale without losing control.
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4">
                  <div className="text-2xl font-black text-[#dc2626]">-32%</div>
                  <div className="text-sm text-[#475569]">
                    unplanned downtime
                  </div>
                </div>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4">
                  <div className="text-2xl font-black text-[#16a34a]">+21%</div>
                  <div className="text-sm text-[#475569]">throughput gain</div>
                </div>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4">
                  <div className="text-2xl font-black text-[#2563eb]">+18%</div>
                  <div className="text-sm text-[#475569]">
                    asset utilization
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span
                  className="pill"
                  style={{
                    background: "rgba(234,88,12,0.08)",
                    borderColor: "rgba(234,88,12,0.2)",
                    color: "#c2410c"
                  }}
                >
                  Dashboards
                </span>
                <span className="pill">Database-driven insights</span>
                <span className="pill">Performance management</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="section">
          <h2 className="text-3xl font-semibold mb-2 text-[#0f172a]">
            Why plant operation intelligence matters
          </h2>
          <p className="text-[#475569] mb-8">
            As plants grow, manual tracking starts to slow everything down.
            Plant operation intelligence brings machine data, production data,
            maintenance data, and quality data together so teams can act before
            small problems become expensive ones. That is how scalable growth
            becomes stable growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                num: "1.",
                title: "Real-time visibility",
                desc: "Managers can see bottlenecks, downtime causes, and output trends the moment they happen.",
              },
              {
                num: "2.",
                title: "Better decision-making",
                desc: "Instead of guessing, teams use accurate KPI dashboards to prioritize the next best action.",
              },
              {
                num: "3.",
                title: "Repeatable scaling",
                desc: "Standardized workflows and data-backed controls make it easier to expand capacity with confidence.",
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <h3 className="text-xl font-semibold mb-2 text-[#0f172a]">{item.title}</h3>
                <p className="text-[#475569]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GROWTH BENEFITS */}
        <section className="section">
          <h2 className="text-3xl font-semibold mb-2 text-[#0f172a]">
            Growth benefits in plain numbers
          </h2>
          <p className="text-[#475569] mb-8">
            These visuals show how plant operation intelligence improves the
            numbers that matter most to leadership.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bar Chart */}
            <div className="card">
              <h3 className="font-semibold mb-4 text-[#0f172a]">
                Operational performance before vs after
              </h3>
              <div className="flex gap-4 mb-6 text-sm">
                <span className="flex items-center gap-1.5 text-[#475569]">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#2563eb]"></span>
                  Before intelligence
                </span>
                <span className="flex items-center gap-1.5 text-[#475569]">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ea580c]"></span>
                  After intelligence
                </span>
              </div>

              {[
                { label: "Downtime", width: "78%", val: "78", alt: true },
                { label: "Throughput", width: "88%", val: "88" },
                { label: "Quality yield", width: "84%", val: "84" },
                { label: "Asset utilization", width: "91%", val: "91" },
              ].map((bar, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[140px_1fr_56px] gap-3 items-center mb-4"
                >
                  <div className="font-medium text-[#0f172a]">{bar.label}</div>
                  <div className="bar-track">
                    <div
                      className={`bar-fill ${bar.alt ? "alt" : ""}`}
                      style={{ width: bar.width }}
                    ></div>
                  </div>
                  <div className="text-right font-semibold text-[#0f172a]">{bar.val}</div>
                </div>
              ))}

              <p className="text-sm text-[#64748b] mt-4">
                The bars represent the growth in performance after adopting
                KPI-driven plant operation intelligence. Higher output and lower
                downtime create room for scale without chaos.
              </p>
            </div>

            {/* Growth Levers */}
            <div className="card">
              <h3 className="font-semibold mb-4 text-[#0f172a]">
                Growth levers that move the curve
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Production visibility",
                    desc: "Find bottlenecks before they spread across shifts.",
                  },
                  {
                    title: "Predictive maintenance",
                    desc: "Reduce emergency repairs and protect uptime.",
                  },
                  {
                    title: "Process optimization",
                    desc: "Standardize high-performing actions across lines and sites.",
                  },
                ].map((lever, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                    <strong className="text-[#2563eb]">{lever.title}</strong>
                    <br />
                    <span className="text-[#475569] text-sm">{lever.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* KPI TABLE */}
        <section className="section">
          <h2 className="text-3xl font-semibold mb-2 text-[#0f172a]">
            Database-style KPI view
          </h2>
          <p className="text-[#475569] mb-6">
            A clean database helps teams compare shifts, lines, and plants. It
            turns raw data into a leadership-friendly story.
          </p>

          <div className="db bg-white border border-slate-200 shadow-sm rounded-3xl p-5 overflow-auto">
            <table>
              <thead>
                <tr>
                  <th>KPI</th>
                  <th>What it tells you</th>
                  <th>Why it matters for scalable growth</th>
                  <th>Sample improvement</th>
                </tr>
              </thead>
              <tbody className="text-[#475569]">
                {[
                  [
                    "OEE",
                    "Overall equipment effectiveness across availability, performance, and quality.",
                    "Shows whether the plant can grow without losing control.",
                    "72% → 84%",
                  ],
                  [
                    "MTBF",
                    "Mean time between failures for critical assets.",
                    "Signals reliability and helps plan capacity with less disruption.",
                    "18 hrs → 31 hrs",
                  ],
                  [
                    "MTTR",
                    "Mean time to repair after a failure.",
                    "Shorter repair cycles protect production targets during growth phases.",
                    "95 min → 54 min",
                  ],
                  [
                    "Throughput",
                    "Output volume over a given period.",
                    "Directly reflects whether the plant can support higher demand.",
                    "1,200 → 1,520 units/day",
                  ],
                  [
                    "Downtime",
                    "Planned and unplanned loss of operating time.",
                    "Lower downtime frees capacity for expansion without new assets.",
                    "11.8% → 7.1%",
                  ],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="font-semibold text-[#0f172a]">{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td className="font-semibold text-emerald-600">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="section">
          <h2 className="text-3xl font-semibold mb-3 text-[#0f172a]">
            Case study: scaling without losing efficiency
          </h2>
          <p className="text-[#475569] mb-8">
            A mid-sized manufacturing plant wanted to raise output by 25% while
            keeping service levels high. Instead of adding pressure to the
            floor, the leadership team introduced plant operation intelligence
            with KPI dashboards, shift-level tracking, and a connected
            maintenance workflow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { value: "+27%", label: "production growth within 6 months" },
              {
                value: "-34%",
                label: "unplanned downtime across critical assets",
              },
              { value: "+19%", label: "better on-time order fulfillment" },
            ].map((metric, i) => (
              <div key={i} className="metric">
                <div className="text-4xl font-black text-[#1e3a8a]">
                  {metric.value}
                </div>
                <div className="text-[#475569] mt-1 text-sm font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          <p className="text-[#475569]">
            What changed? Teams started reviewing live KPIs every shift,
            maintenance moved from reactive to predictive, and process
            bottlenecks were resolved using trend data instead of assumptions.
            The result was a stronger plant that could grow without a quality or
            uptime penalty.
          </p>
        </section>

        {/* FAQ */}
        <section className="section">
          <h2 className="text-3xl font-semibold mb-6 text-[#0f172a]">FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              [
                "What is plant operation intelligence?",
                "It is the use of connected data, dashboards, and analytics to improve plant performance, reliability, and decision-making.",
              ],
              [
                "How does it support scalable growth?",
                "It helps plants spot inefficiencies early, improve throughput, and standardize the best operating practices across teams and sites.",
              ],
              [
                "Which KPIs should be tracked first?",
                "OEE, downtime, throughput, MTBF, MTTR, and quality yield are usually the most useful starting points.",
              ],
              [
                "Is a database necessary?",
                "A structured database is important because it keeps KPI data clean, searchable, and ready for reporting and trend analysis.",
              ],
            ].map(([q, a], i) => (
              <div key={i} className="card p-6">
                <strong className="block mb-3 text-lg text-[#0f172a]">{q}</strong>
                <p className="text-[#475569]">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING */}
        <section className="section">
          <h2 className="text-3xl font-semibold mb-4 text-[#0f172a]">Closing thought</h2>
          <p className="text-[#475569] mb-6">
            Scalable growth is not about pushing the plant harder. It is about
            building an operation that understands itself better every day. With
            plant operation intelligence, leaders gain visibility, teams gain
            clarity, and growth becomes much easier to repeat.
          </p>
          <p className="text-xl font-bold text-[#1e3a8a]">
            When the right data leads the right action, the plant stops reacting
            and starts scaling.
          </p>
        </section>

        <div className="text-center text-[#64748b] text-sm mt-12">
          React version • Light enterprise theme with modern data storytelling
        </div>
      </div>
    </div>
        <aside className="hidden lg:block shrink-0 w-[320px]">
          <div className="sticky top-28 px-2">
            <StickyContactForm />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PlantIntelligenceDashboard;