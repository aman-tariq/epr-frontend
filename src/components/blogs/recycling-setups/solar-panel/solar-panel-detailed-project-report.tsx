// src/components/blogs/solar-panel/DetailedProjectReport.tsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import StickyContactForm from '@/components/StickyContactForm';

const DetailedProjectReport: React.FC = () => {
  const materialValueRef = useRef<HTMLCanvasElement>(null);
  const revenueRef = useRef<HTMLCanvasElement>(null);
  const segmentRef = useRef<HTMLCanvasElement>(null);
  const circularRef = useRef<HTMLCanvasElement>(null);
  const wasteRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Material Value Share
const materialChart = new Chart(materialValueRef.current!, {
  type: 'doughnut',
  data: {
    labels: ['Glass (68%)', 'Aluminium (18%)', 'Copper (7%)', 'Silver/Silicon (4%)', 'Others (3%)'],
    datasets: [
      { 
        data: [68, 18, 7, 4, 3], 
        backgroundColor: ['#0f766e', '#c2410c', '#eab308', '#6b7280', '#94a3b8']
        // Removed 'cutout' from here
      }
    ]
  },
  options: { 
    responsive: true, 
    cutout: '55%', // Moved 'cutout' to the main options object
    plugins: { 
      legend: { position: 'bottom' } 
    } 
  }
});

    // Revenue per ton
    const revenueChart = new Chart(revenueRef.current!, {
      type: 'bar',
      data: {
        labels: ['Glass', 'Aluminum', 'Copper', 'Silver trace', 'Plastic'],
        datasets: [{ label: 'USD per ton', data: [38, 1850, 3100, 11200, 85], backgroundColor: '#0f766e', borderRadius: 8 }]
      },
      options: { responsive: true, scales: { y: { title: { display: true, text: 'USD/ton' } } } }
    });

    // Segment Attractiveness
    const segmentChart = new Chart(segmentRef.current!, {
      type: 'bar',
      data: {
        labels: ['Installers/EPC', 'Asset owners', 'Scrap buyers', 'OEMs', 'Govt programs'],
        datasets: [{ label: 'Attractiveness score', data: [94, 91, 85, 79, 72], backgroundColor: '#c2410c', borderRadius: 8 }]
      },
      options: { responsive: true, scales: { y: { max: 100, beginAtZero: true } } }
    });

    // Circular Value Chain
    const circularChart = new Chart(circularRef.current!, {
      type: 'line',
      data: {
        labels: ['Basic shredding', 'Mechanical separation', 'Density/Eddy current', 'AI optical sorting', 'High-purity refining'],
        datasets: [{ label: 'Value index', data: [24, 48, 69, 88, 100], borderColor: '#0f766e', tension: 0.3, fill: true, pointBackgroundColor: '#c2410c' }]
      },
      options: { responsive: true, scales: { y: { min: 0, max: 105 } } }
    });

    // Waste Forecast
    const wasteChart = new Chart(wasteRef.current!, {
      type: 'line',
      data: {
        labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
        datasets: [{ label: 'Annual solar waste (million tons)', data: [1.1, 1.6, 2.3, 3.2, 4.3, 5.8], borderColor: '#d97706', backgroundColor: 'rgba(217,119,6,0.1)', fill: true, tension: 0.3 }]
      },
      options: { responsive: true }
    });

    return () => {
      materialChart.destroy();
      revenueChart.destroy();
      segmentChart.destroy();
      circularChart.destroy();
      wasteChart.destroy();
    };
  }, []);

  return (
    // Note: Removed global overflow-x-hidden here to ensure CSS position: sticky computes perfectly
    <div className="page font-['Manrope'] bg-gradient-to-b from-[#fefaf5] to-[#f8f6f2] text-[#1f2937] w-full p-4 md:p-6 lg:p-8">
      
      {/* The parent element wrapper. `items-start` prevents the aside 
        from stretching to full height, which would otherwise break stickiness.
      */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start relative w-full h-full min-h-screen">
        
        {/* MAIN CONTENT COLUMN */}
        <main className="flex-1 w-full min-w-0">
          {/* HERO */}
          <section className="hero relative overflow-hidden bg-gradient-to-br from-[#0b2f2c] via-[#0f766e] to-[#c2410c] text-white rounded-[34px] px-6 md:px-12 py-16 md:py-20 mb-8 shadow-2xl w-full">
            <div className="absolute w-[300px] h-[300px] bg-white/10 rounded-full -top-20 -right-20 pointer-events-none" />
            <div className="absolute w-[200px] h-[200px] bg-white/10 rounded-full -bottom-16 -left-16 pointer-events-none" />
            
            <div className="hero-inner relative z-10 text-center max-w-4xl mx-auto">
              <div className="badge inline-block px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-white/20 bg-white/10 text-xs md:text-sm font-bold tracking-widest mb-6 max-w-full truncate">
                Solar Panel Recycling Plant | DPR & Feasibility
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 break-words">
                Detailed Project Report: Solar Panel Recycling Plant
              </h1>
              <p className="text-base md:text-xl leading-relaxed text-white/95">
                <strong>The sun gave energy — now let the panels give back materials.</strong><br /><br />
                A complete project report for a solar panel recycling facility: from plant layout, machinery, and financials to market segments and environmental impact.
              </p>
              <div className="mt-8 text-base md:text-lg font-semibold">
                A structured DPR turns waste streams into revenue streams — and builds the circular solar economy.
              </div>
            </div>
          </section>

          {/* MOBILE ONLY FORM PLACEMENT (Falls cleanly inline for better UX, disappears on desktop) */}
          <div className="block lg:hidden w-full mb-8">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#e3dbcf]">
              <h3 className="text-xl font-bold mb-4 text-[#0b2f2c]">Connect With Our Experts</h3>
              <StickyContactForm />
            </div>
          </div>

          {/* Grid 2 */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 w-full">
            <section className="card bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#e3dbcf] w-full min-w-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-[#0b2f2c]">Why solar panel recycling needs a strong DPR</h2>
              <p className="mb-4">The first wave of solar installations (2005–2015) is now retiring. By 2030, cumulative end-of-life solar panels will exceed 8 million tons globally.</p>
              <p>A good DPR answers: What capacity? Which technology? How much investment? What revenue from recovered glass, aluminum, copper, and silicon?</p>
              <div className="highlight mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <strong>Core advantage:</strong> Solar panel recycling is not waste management — it is urban mining. The DPR makes that value visible.
              </div>
              <div className="chips flex flex-wrap gap-2 mt-6">
                <span className="chip bg-[#0f766e]/10 text-[#0f766e] px-3 py-1 rounded-full text-xs font-semibold">Circular economy</span>
                <span className="chip bg-[#c2410c]/10 text-[#c2410c] px-3 py-1 rounded-full text-xs font-semibold">High recovery rates</span>
                <span className="chip bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">Growing demand</span>
              </div>
            </section>

            <section className="card bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#e3dbcf] w-full min-w-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-[#0b2f2c]">How we help build the project report</h2>
              <p>We guide clients from concept to a bankable DPR — covering technology selection, material flow, cost estimation, revenue modeling, and compliance mapping.</p>
              <div className="highlight mt-6 p-4 bg-teal-50 rounded-xl border border-teal-200">
                <strong>Client benefit:</strong> A ready-to-use DPR that shortens funding cycles and removes guesswork from plant execution.
              </div>
            </section>
          </div>

          {/* Steps */}
          <section className="card bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#e3dbcf] mb-8 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0b2f2c]">DPR preparation journey for solar recycling plant</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
              {[
                { num: "1", title: "Project scoping", desc: "Capacity (tons/year), target material streams, location and utility planning." },
                { num: "2", title: "Technology & machinery", desc: "Selection of semi-auto or fully automated line, dust collection, separation units." },
                { num: "3", title: "Financial modeling", desc: "CAPEX, OPEX, revenue from recyclables, payback period & IRR." },
                { num: "4", title: "Approval & compliance", desc: "Environmental clearances, EPR, waste handling licenses." },
              ].map((step, i) => (
                <div key={i} className="step border border-[#e3dbcf] rounded-2xl p-5 bg-gradient-to-b from-white to-[#fffdf9] w-full">
                  <div className="num w-11 h-11 rounded-full bg-gradient-to-br from-[#0f766e] to-[#c2410c] text-white font-bold flex items-center justify-center mb-4">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-[#5f6b7a]">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DPR Sections Table */}
          <section className="card bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#e3dbcf] mb-8 w-full overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0b2f2c]">What a complete solar panel recycling DPR includes</h2>
            <div className="overflow-x-auto rounded-2xl border border-[#e3dbcf] w-full">
              <table className="w-full table-auto min-w-[600px]">
                <thead>
                  <tr className="bg-gradient-to-r from-[#0f766e] to-[#c2410c] text-white">
                    <th className="text-left px-4 py-3 md:px-6 md:py-4 text-sm md:text-base">DPR Section</th>
                    <th className="text-left px-4 py-3 md:px-6 md:py-4 text-sm md:text-base">Content focus</th>
                    <th className="text-left px-4 py-3 md:px-6 md:py-4 text-sm md:text-base">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Project overview", "Plant capacity, location advantage, sourcing radius", "Defines business scope and target waste volume"],
                    ["Market analysis", "Solar installation lifespan data, waste generation forecast", "Shows long-term feedstock security"],
                    ["Technical process", "Manual dismantling → mechanical shredding → density & eddy current separation", "Explains how glass, Al, Cu, and Si are recovered"],
                    ["Machinery spec list", "PV panel shredder, hammer mill, air classifier, electrostatic separator", "Directly impacts recovery purity and ROI"],
                    ["Financial plan", "Investment breakdown, per-ton processing cost, revenue model", "Critical for investors & bank loans"],
                    ["Approvals matrix", "State pollution board, CPCB authorisation, EPR registration", "Ensures legal operation & offtake confidence"],
                  ].map(([sec, focus, why], i) => (
                    <tr key={i} className="border-t border-[#e3dbcf] hover:bg-[#f8f6f2]">
                      <td className="px-4 py-4 md:px-6 md:py-5 font-medium text-sm md:text-base break-words max-w-[150px]">{sec}</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-[#5f6b7a] text-sm md:text-base break-words max-w-[200px]">{focus}</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-[#5f6b7a] text-sm md:text-base break-words max-w-[200px]">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Charts Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 w-full">
            <section className="card bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#e3dbcf] w-full min-w-0">
              <h2 className="text-xl md:text-2xl font-bold mb-4">📊 Recovered material value share</h2>
              <div className="w-full relative flex justify-center items-center">
                <canvas ref={materialValueRef} className="max-w-full" />
              </div>
              <p className="note mt-4 text-xs md:text-sm text-[#5f6b7a]">By weight glass dominates; by value, copper & silver lead.</p>
            </section>

            <section className="card bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#e3dbcf] w-full min-w-0">
              <h2 className="text-xl md:text-2xl font-bold mb-4">💰 Revenue per ton (USD)</h2>
              <div className="w-full relative">
                <canvas ref={revenueRef} className="max-w-full" />
              </div>
              <p className="note mt-4 text-xs md:text-sm text-[#5f6b7a]">Proper separation increases aluminium & copper purity, lifting total revenue by 40%.</p>
            </section>
          </div>

          {/* Bar + Segment */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 w-full">
            <section className="card bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#e3dbcf] w-full min-w-0">
              <h2 className="text-xl md:text-2xl font-bold mb-4">🎯 Target segment attractiveness (score /100)</h2>
              <div className="w-full relative">
                <canvas ref={segmentRef} className="max-w-full" />
              </div>
            </section>

            <section className="card bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#e3dbcf] w-full min-w-0">
              <h2 className="text-xl md:text-2xl font-bold mb-6">Bar graph: DPR effort distribution</h2>
              <div className="bars space-y-4 md:space-y-6 w-full">
                {[
                  { label: "Technology selection", value: "92%" },
                  { label: "Financial modelling", value: "96%" },
                  { label: "Market & waste sourcing", value: "85%" },
                  { label: "Approval mapping", value: "78%" },
                  { label: "Logistics & collection", value: "74%" },
                ].map((item, i) => (
                  <div key={i} className="bar-row grid grid-cols-[140px_1fr_45px] sm:grid-cols-[210px_1fr_54px] gap-2 md:gap-3 items-center w-full">
                    <div className="bar-label font-semibold text-xs md:text-sm truncate">{item.label}</div>
                    <div className="track h-3 md:h-4 bg-[#e9edf3] rounded-full overflow-hidden w-full">
                      <div className="fill h-full rounded-full bg-gradient-to-r from-[#c2410c] to-[#fbbf24]" style={{ width: item.value }} />
                    </div>
                    <div className="value font-bold text-xs md:text-sm text-[#0b2f2c] text-right">{item.value}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Database View */}
          <section className="card bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#e3dbcf] mb-8 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0b2f2c]">🗄️ Database view: Solar recycling DPR readiness tracker</h2>
            <div className="grid sm:grid-cols-2 gap-5 w-full">
              {[
                { title: "Feedstock intelligence", desc: "Solar installation age map, collection radius, estimated inflow per quarter." },
                { title: "Technology benchmark", desc: "Machine specs, recovery efficiency %, energy consumption per ton." },
                { title: "Financial metrics", desc: "CAPEX, per-ton OPEX, break-even volume, IRR 27-34%." },
                { title: "Compliance checklist", desc: "EPR, hazardous waste authorisation, export/import of recovered materials." },
              ].map((db, i) => (
                <div key={i} className="db bg-gradient-to-b from-white to-[#fcfbf8] border border-[#e3dbcf] rounded-2xl p-5 w-full">
                  <h4 className="font-bold text-lg mb-2">{db.title}</h4>
                  <p className="text-sm text-[#5f6b7a]">{db.desc}</p>
                </div>
              ))}
            </div>
            <div className="highlight mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm md:text-base">
              <strong>Why a database-style DPR works:</strong> it transforms scattered information into a decision-ready dashboard for directors and lenders.
            </div>
          </section>

          {/* Case Study */}
          <section className="card case bg-gradient-to-b from-[#fff9f1] to-white border border-[#fed7aa] rounded-3xl p-6 md:p-8 shadow-xl mb-8 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-[#0b2f2c]">📌 Case study: SunCircle Recycling</h2>
            <p className="mb-6 text-sm md:text-base">A mid-sized recycling startup wanted to enter solar panel recycling but lacked a comprehensive project report.</p>
            
            <div className="grid sm:grid-cols-3 gap-5 w-full">
              {[
                { title: "The challenge", desc: "No clear breakdown of machinery cost, uncertain recovery rates, missing approval roadmap." },
                { title: "Our support", desc: "We delivered a full DPR with technology selection, Capex/Opex, revenue from glass, Al, Cu, and compliance flowchart." },
                { title: "The result", desc: "Client secured $1.2M in funding, operational within 9 months, achieved 22% net margin in first full year." },
              ].map((item, i) => (
                <div key={i} className="case-box bg-white border border-[#fad9a8] rounded-2xl p-5 w-full">
                  <h4 className="font-semibold text-[#9a3412] mb-3 text-base">{item.title}</h4>
                  <p className="text-xs md:text-sm text-[#6b4b21]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Financial Snapshot */}
          <section className="card bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#e3dbcf] mb-8 w-full overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0b2f2c]">Financial snapshot (5 tons/day)</h2>
            <div className="overflow-x-auto rounded-2xl border border-[#e3dbcf] w-full">
              <table className="w-full table-auto min-w-[500px]">
                <thead>
                  <tr className="bg-gradient-to-r from-[#0f766e] to-[#c2410c] text-white">
                    <th className="text-left px-4 py-3 md:px-6 md:py-4 text-sm md:text-base">Parameter</th>
                    <th className="text-left px-4 py-3 md:px-6 md:py-4 text-sm md:text-base">Value (USD)</th>
                    <th className="text-left px-4 py-3 md:px-6 md:py-4 text-sm md:text-base">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Total capital investment", "$890,000", "Land, machinery, erection, pre-operative"],
                    ["Monthly processing cost", "$41,200", "Labour, power, consumables, maintenance"],
                    ["Monthly revenue", "$68,500", "Glass, Al, Cu, silver traces, plastic"],
                    ["Gross monthly profit", "$27,300", "Before interest & depreciation"],
                    ["Payback period", "3.8 years", "Based on 85% capacity utilization"],
                    ["Internal rate of return (IRR)", "29.4%", "Attractive for green investors"],
                  ].map(([param, value, note], i) => (
                    <tr key={i} className="border-t border-[#e3dbcf]">
                      <td className="px-4 py-4 md:px-6 md:py-5 font-medium text-sm md:text-base break-words max-w-[150px]">{param}</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 font-semibold text-sm md:text-base text-[#0f766e]">{value}</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-[#5f6b7a] text-sm md:text-base break-words max-w-[200px]">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* More Charts */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 w-full">
            <section className="card bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#e3dbcf] w-full min-w-0">
              <h2 className="text-xl md:text-2xl font-bold mb-4">♻️ Circular value chain (indexed)</h2>
              <div className="w-full relative">
                <canvas ref={circularRef} className="max-w-full" />
              </div>
            </section>
            <section className="card bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#e3dbcf] w-full min-w-0">
              <h2 className="text-xl md:text-2xl font-bold mb-4">📈 Yearly waste inflow forecast</h2>
              <div className="w-full relative">
                <canvas ref={wasteRef} className="max-w-full" />
              </div>
            </section>
          </div>

          {/* Trust Section */}
          <section className="card bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#e3dbcf] mb-8 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0b2f2c]">Why clients trust our DPR</h2>
            <div className="grid sm:grid-cols-2 gap-6 w-full">
              {[
                { title: "Industry-specific knowledge", desc: "We understand delamination, PV module composition, and downstream markets." },
                { title: "Bank-friendly format", desc: "Structured in a way that financial institutions recognise and approve faster." },
                { title: "Realistic financials", desc: "Based on actual operating data from functional solar recycling plants." },
                { title: "Approval roadmap", desc: "Complete list of environmental, municipal, and EPR requirements." },
              ].map((item, i) => (
                <div key={i} className="mini border border-[#e3dbcf] rounded-2xl p-5 bg-white w-full">
                  <h4 className="font-bold mb-2 text-base">{item.title}</h4>
                  <p className="text-sm text-[#5f6b7a]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="card bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#e3dbcf] mb-8 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0b2f2c]">Frequently asked questions</h2>
            <div className="space-y-4 w-full">
              {[
                { q: "What capacity is ideal for a first solar panel recycling plant?", a: "2–5 tons per day is a common entry point, balancing investment and operational learning." },
                { q: "Can we recover silver from solar panels profitably?", a: "Yes — silver paste on cells has high value; advanced separation yields 85%+ recovery." },
                { q: "Is government subsidy available for solar recycling?", a: "Many regions offer incentives under EPR schemes and circular economy grants." },
                { q: "How long does DPR preparation take?", a: "Typically 2–3 weeks, depending on project complexity." },
              ].map((faq, i) => (
                <div key={i} className="faq-item border border-[#e3dbcf] rounded-2xl p-5 w-full">
                  <h4 className="font-semibold mb-3 text-sm md:text-base">{faq.q}</h4>
                  <p className="text-xs md:text-sm text-[#5f6b7a]">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing */}
          <section className="closing text-white text-center py-12 md:py-16 rounded-[34px] bg-gradient-to-br from-[#0b2f2c] via-[#0f766e] to-[#c2410c] px-4 w-full">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Final Thoughts — Your solar recycling project starts with the right DPR</h2>
            <p className="max-w-3xl mx-auto text-sm md:text-lg leading-relaxed opacity-95">
              A detailed project report for solar panel recycling is not just paperwork — it's your roadmap to turning retired solar modules into a profitable, sustainable business.
            </p>
            <div className="final mt-10 text-xl md:text-3xl font-bold">“Solar panels never truly retire — they transform into new resources.”</div>
          </section>
        </main>

        {/* FIXED STICKY SIDEBAR: 
          - Used `sticky top-28` to guarantee spacing below headers.
          - Added `items-start` on the layout flex wrapper so the component has a defined bounding height to anchor along while scrolling.
        */}
        <aside className="hidden lg:block sticky top-28 self-start w-[360px] min-w-[360px] h-fit will-change-transform z-20 bg-white p-6 rounded-3xl shadow-xl">
          <StickyContactForm />
        </aside>

      </div>
    </div>
  );
};

export default DetailedProjectReport;