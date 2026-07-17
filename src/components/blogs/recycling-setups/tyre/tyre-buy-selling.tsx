import React, { useEffect } from 'react';
import Seo from "@/components/Seo";
import Chart from 'chart.js/auto';
import StickyContactForm from '@/components/StickyContactForm';

const TyreBuySelling: React.FC = () => {
  useEffect(() => {
    // Supply Gap Chart
    new Chart(document.getElementById("supplyGapChart") as HTMLCanvasElement, {
      type: "bar",
      data: {
        labels: ["2018","2019","2020","2021","2022","2023","2024","2025E"],
        datasets: [
          {
            label: "ELT Generated (MT, Lakhs)",
            data: [9.4, 10.1, 10.6, 11.4, 12.3, 13.2, 14.1, 15.2],
            backgroundColor: "rgba(59,130,246,0.15)",
            borderColor: "#3b82f6",
            borderWidth: 2,
            borderRadius: 6
          },
          {
            label: "Formally Recycled (MT, Lakhs)",
            data: [1.8, 2.1, 2.3, 2.7, 3.2, 3.8, 4.5, 5.2],
            backgroundColor: "#10b981",
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: "#1e293b", font: { weight: 600 } } } },
        scales: {
          x: { ticks: { color: "#64748b" }, grid: { color: "#e2e8f0" } },
          y: { beginAtZero: true, ticks: { color: "#64748b", callback: (v: number) => v + " L MT" }, grid: { color: "#e2e8f0" } }
        }
      }
    });

    // Composition Doughnut
    new Chart(document.getElementById("compositionChart") as HTMLCanvasElement, {
      type: "doughnut",
      data: {
        labels: ["Crumb Rubber / Rubber Powder (38%)", "Pyrolysis Oil / TDO (36%)", "Recovered Carbon Black (16%)", "Steel Wire Scrap (10%)"],
        datasets: [{
          data: [38, 36, 16, 10],
          backgroundColor: ["#10b981", "#3b82f6", "#f59e0b", "#94a3b8"],
          borderColor: "#ffffff",
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom", labels: { color: "#1e293b", padding: 16, font: { size: 12, weight: 600 } } }
        }
      }
    });

    // Value per MT Bar
    new Chart(document.getElementById("valueChart") as HTMLCanvasElement, {
      type: "bar",
      data: {
        labels: ["Rubber Powder\n(40–80 mesh)", "Crumb Rubber\n(20–30 mesh)", "Reco. Carbon\nBlack (rCB)", "Pyrolysis Oil\n(per KL)", "Steel Wire\nScrap", "Tyre-Derived\nFuel (TDF)"],
        datasets: [{
          label: "₹ per MT (or per KL for TDO)",
          data: [35000, 27000, 15000, 48000, 30000, 5000],
          backgroundColor: ["#10b981", "#34d399", "#f59e0b", "#3b82f6", "#94a3b8", "#475569"],
          borderRadius: 10
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        plugins: { legend: { labels: { color: "#1e293b", font: { weight: 600 } } } },
        scales: {
          x: { ticks: { color: "#64748b", callback: (v: number) => "₹" + v.toLocaleString() }, grid: { color: "#e2e8f0" } },
          y: { ticks: { color: "#1e293b", font: { size: 12, weight: 600 } }, grid: { display: false } }
        }
      }
    });

    // Price Trend Line
    new Chart(document.getElementById("priceTrendChart") as HTMLCanvasElement, {
      type: "line",
      data: {
        labels: ["2020","2021","2022","2023","2024","2025"],
        datasets: [
          { label: "Crumb Rubber (₹/MT)", data: [17000,19500,22000,24500,26800,28500], borderColor: "#10b981", backgroundColor: "rgba(16,185,129,0.05)", fill: true, tension: 0.4, pointRadius: 5, pointBackgroundColor: "#10b981" },
          { label: "Pyrolysis Oil (₹/KL)", data: [28000,33000,40000,44000,49000,52000], borderColor: "#3b82f6", backgroundColor: "rgba(59,130,246,0.05)", fill: true, tension: 0.4, pointRadius: 5, pointBackgroundColor: "#3b82f6" },
          { label: "Recovered Carbon Black (₹/MT)", data: [6000,7500,9500,12000,15500,18000], borderColor: "#f59e0b", backgroundColor: "rgba(245,158,17,0.05)", fill: true, tension: 0.4, pointRadius: 5, pointBackgroundColor: "#f59e0b", borderDash: [5,4] },
          { label: "Steel Wire Scrap (₹/MT)", data: [22000,26000,32000,29000,30500,31500], borderColor: "#64748b", backgroundColor: "rgba(100,116,139,0.04)", fill: true, tension: 0.4, pointRadius: 5, pointBackgroundColor: "#64748b", borderDash: [3,3] }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: "#1e293b", font: { weight: 600 } } } },
        scales: {
          x: { ticks: { color: "#64748b" }, grid: { color: "#e2e8f0" } },
          y: { ticks: { color: "#64748b", callback: (v: number) => "₹" + v.toLocaleString() }, grid: { color: "#e2e8f0" } }
        }
      }
    });

    // Demand Growth Bar
    new Chart(document.getElementById("demandChart") as HTMLCanvasElement, {
      type: "bar",
      data: {
        labels: ["Road Construction\n(Crumb Rubber)", "Industrial Fuel\n(TDO)", "Rubber Compounding\n(rCB)", "Steel Re-rolling\n(Wire Scrap)", "Sports Surfaces\n(Crumb Rubber)", "Cement Co-processing\n(TDF)"],
        datasets: [
          { label: "2021–22", data: [8,12,4,6,9,7], backgroundColor: "rgba(16,185,129,0.35)" },
          { label: "2022–23", data: [11,16,7,5,12,10], backgroundColor: "rgba(59,130,246,0.5)" },
          { label: "2023–24", data: [15,19,14,6,16,13], backgroundColor: "#10b981" },
          { label: "2024–25E", data: [18,21,22,7,19,15], backgroundColor: "#3b82f6" }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: "#1e293b", font: { weight: 600 } } } },
        scales: {
          x: { ticks: { color: "#64748b" }, grid: { color: "#e2e8f0" } },
          y: { beginAtZero: true, ticks: { color: "#64748b", callback: (v: number) => v + "%" }, grid: { color: "#e2e8f0" } }
        }
      }
    });

    // Revenue Mix
    new Chart(document.getElementById("revenueMixChart") as HTMLCanvasElement, {
      type: "bar",
      data: {
        labels: ["Pyrolysis Oil (TDO)", "Crumb Rubber", "Recovered Carbon Black", "Steel Wire Scrap"],
        datasets: [
          { label: "Before Optimisation", data: [34,42,8,16], backgroundColor: "#cbd5e1" },
          { label: "After Optimisation", data: [38,34,21,7], backgroundColor: ["#3b82f6","#10b981","#f59e0b","#94a3b8"] }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: "#1e293b", font: { weight: 600 } } } },
        scales: {
          x: { ticks: { color: "#1e293b", font: { size: 12, weight: 600 } }, grid: { color: "#e2e8f0" } },
          y: { beginAtZero: true, max: 50, ticks: { color: "#64748b", callback: (v: number) => v + "%" }, grid: { color: "#e2e8f0" } }
        }
      }
    });

    // Case Study Before/After
    new Chart(document.getElementById("caseChart") as HTMLCanvasElement, {
      type: "bar",
      data: {
        labels: ["Crumb Rubber\n(₹/MT)", "TDO\n(₹/litre)", "Carbon Black\n(₹/MT)", "Steel Wire\n(₹/MT)"],
        datasets: [
          { label: "Before (2023)", data: [19500, 38, 7200, 26000], backgroundColor: "#ef4444" },
          { label: "After (2024)", data: [29800, 51, 21500, 29800], backgroundColor: "#10b981" }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: "#1e293b", font: { weight: 600 } } } },
        scales: {
          x: { ticks: { color: "#1e293b", font: { size: 12, weight: 600 } }, grid: { color: "#e2e8f0" } },
          y: { beginAtZero: true, ticks: { color: "#64748b", callback: (v: number) => "₹" + v.toLocaleString() }, grid: { color: "#e2e8f0" } }
        }
      }
    });
  }, []);

  return (
    <>
      <Seo
        title="Tyre Waste Recycling Scrap Trading & Product Selling Guide India 2026"
        description="Complete guide to buying and selling tyre recycling outputs profitably. Learn how to source used tyres, sell crumb rubber, pyrolysis oil (TDO), recovered carbon black, steel wire scrap at best prices with verified buyers across India."
        keywords={[
          "Tyre Waste Recycling Scrap Trading",
          "Buy Used Tyre Scrap India",
          "Sell Crumb Rubber Tyre Recycling",
          "Pyrolysis Oil TDO Buyers India",
          "Recovered Carbon Black Trading",
          "Tyre Recycling Product Selling Guide",
          "Crumb Rubber Price Trends India",
          "Tyre Derived Fuel TDF Market",
          "Steel Wire Scrap from Tyres",
          "Tyre Recycling Plant Commercial Support",
          "Best Buyers for Tyre Recycling Outputs",
          "Tyre Scrap Sourcing and Selling India"
        ]}
        url="https://eprnexuss.com/blog/tyre-buy-selling"
        type="article"
      />
      <div className="bg-[#f8fafc] text-[#1e293b] font-['Inter'] min-h-screen">
        
        {/* TOPBAR */}
        <div className="bg-[#f1f5f9] py-3 text-sm border-b border-[#e2e8f0] text-[#475569]">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center flex-wrap gap-3 font-medium">
            <span>Tyre Waste Recycling — Buying &amp; Selling Scrap and Products Made Simple</span>
            <span>Better sourcing • Stronger sales • Real market connections</span>
          </div>
        </div>

        {/* HERO - Full Width at Top */}
        <header className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid gap-6 items-stretch">
            <div className="lg:col-span-8 bg-gradient-to-br from-white to-[#f1f5f9] border border-[#e2e8f0] rounded-3xl p-6 lg:p-12 relative overflow-hidden shadow-sm">
              <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full px-6 py-2 text-sm font-bold mb-8">
                Tyre Waste Recycling — Scrap &amp; Products
              </div>
              <h1 className="text-3xl lg:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-8 text-[#0f172a]">
                Scrap That Sits Is Money That Walks Away
              </h1>
              <p className="text-lg lg:text-xl text-[#475569] max-w-2xl leading-relaxed">
                Every used tyre that reaches your gate has real commercial value — in the crumb rubber, pyrolysis oil, steel wire, and carbon black it yields. We help tyre recycling plants buy the right scrap and sell their output at the right price.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <a href="#contact" className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] text-white font-bold px-8 py-4 rounded-2xl hover:opacity-95 transition shadow-md shadow-emerald-500/10">Talk to Our Team</a>
                <a href="#case-study" className="border border-[#cbd5e1] hover:bg-[#f1f5f9] text-[#1e293b] px-8 py-4 rounded-2xl font-bold transition">See a Real Result</a>
              </div>
              <p className="mt-8 text-sm text-[#64748b]">We work with tyre recycling plant owners, scrap aggregators, and product buyers across India.</p>
            </div>

            {/* Hero Side Cards */}
            <div className="lg:col-span-4 grid md:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 lg:p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-[#0f172a]">What clients come to us for</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Better Prices", "Verified Buyers", "Stable Supply", "Faster Sales"].map((item) => (
                    <div key={item} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-4">
                      <strong className="block text-base text-[#0f172a]">{item}</strong>
                      <span className="text-xs text-[#64748b]">Market-accurate rates</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 lg:p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#0f172a]">Products and scrap we cover</h3>
                <div className="flex flex-wrap gap-2">
                  {["Crumb Rubber", "Pyrolysis Oil (TDO)", "Carbon Black (rCB)", "Steel Wire Scrap", "Rubber Powder", "Tyre-Derived Fuel", "Wire-Free Granules", "Used Tyre Scrap"].map((chip) => (
                    <span key={chip} className="bg-[#f1f5f9] border border-[#e2e8f0] px-4 py-2 rounded-full text-xs font-semibold text-[#475569]">{chip}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN TWO-COLUMN WRAPPER */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 relative pb-20">
          
          {/* LEFT COLUMN - Main Content */}
          <div className="flex-1 w-full lg:w-[65%] xl:w-[70%]">
            
            {/* OPPORTUNITY SECTION */}
            <section id="opportunity" className="py-8">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-[#0f172a]">The Tyre Waste Market Is Bigger Than Most Clients Realise</h2>
              <p className="text-[#475569] max-w-3xl text-lg mb-8 leading-relaxed">
                India generates over 1.5 million metric tonnes of end-of-life tyres every year. Only a fraction of that volume enters formal recycling channels.
              </p>

              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
                {[
                  { value: "1.5 Million MT", label: "End-of-life tyres generated in India annually — growing at 8% per year" },
                  { value: "₹28,000/MT", label: "Average market realisation for quality crumb rubber" },
                  { value: "₹42–55/litre", label: "Current traded price range for tyre-derived pyrolysis oil (TDO)" },
                  { value: "38%", label: "Share of total tyre recycling output value captured by plants with organised buyer networks" }
                ].map((kpi, i) => (
                  <div key={i} className="bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-sm">
                    <div className="text-2xl lg:text-3xl font-extrabold mb-2 text-[#10b981]">{kpi.value}</div>
                    <div className="text-[#64748b] text-xs leading-relaxed">{kpi.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 lg:p-10 shadow-sm">
                <h3 className="text-xl font-bold mb-1 text-[#0f172a]">India End-of-Life Tyre Generation vs. Formal Recycling Volume (2018–2025)</h3>
                <p className="text-[#64748b] text-sm mb-6">Volume in million metric tonnes — showing the structural gap</p>
                <div className="overflow-x-auto">
                  <canvas id="supplyGapChart" height="150"></canvas>
                </div>
              </div>
            </section>

            {/* PRODUCTS SECTION */}
            <section id="products" className="py-12 px-6 lg:px-10 bg-white border border-[#e2e8f0] rounded-[32px] mb-12 shadow-sm">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-[#0f172a]">What Comes Out of a Tyre Recycling Plant — and Who Buys It</h2>
              <p className="text-[#475569] max-w-3xl text-lg mb-8 leading-relaxed">
                A well-run tyre recycling plant produces four distinct output streams. Knowing who to sell to, at what specification, and at what price is where value is lost or gained.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Crumb Rubber and Rubber Powder", content: "Highest-volume output. Used in sports surfaces, road construction, moulded products, and footwear. Price depends heavily on mesh size and purity." },
                  { title: "Pyrolysis Oil (TDO)", content: "Strong demand as furnace fuel in cement plants, boilers, and industrial kilns. Price tracks furnace oil and requires proper test reports." },
                  { title: "Recovered Carbon Black (rCB)", content: "Most undervalued product. Can be sold into rubber compounding and plastics when produced to specification with test data." },
                  { title: "Steel Wire Scrap", content: "15–20% of tyre weight. Predictable revenue. Clean separation significantly improves realisation." }
                ].map((item, i) => (
                  <div key={i} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6">
                    <h3 className="text-lg font-bold mb-3 text-[#0f172a]">{item.title}</h3>
                    <p className="text-[#475569] text-sm leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>

              {/* Charts Section */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-4 lg:p-6">
                  <h3 className="text-base font-bold mb-6 text-[#0f172a]">
                    Output Composition of a Typical Tyre Recycling Plant (by Weight %)
                  </h3>
                  <div className="relative">
                    <canvas id="compositionChart" className="w-full max-h-[300px]"></canvas>
                  </div>
                </div>

                <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-4 lg:p-6">
                  <h3 className="text-base font-bold mb-6 text-[#0f172a]">
                    Product Realisation Value per Metric Ton — Tyre Recycling Outputs (₹)
                  </h3>
                  <div className="relative">
                    <canvas id="valueChart" className="w-full max-h-[300px]"></canvas>
                  </div>
                </div>
              </div>
            </section>

            {/* HOW WE HELP SECTION */}
            <section id="how-we-help" className="py-8">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-[#0f172a]">How We Help Clients Buy Better and Sell Smarter</h2>
              <p className="text-[#475569] max-w-3xl text-lg mb-8">
                A clear, practical process that fills the commercial gap most plant owners face.
              </p>

              <div className="space-y-6">
                {[
                  { num: "01", title: "Scrap Source Mapping and Inflow Planning", desc: "Map reliable tyre scrap sources and build consistent supply relationships." },
                  { num: "02", title: "Product Specification Review and Testing Guidance", desc: "Ensure products meet buyer specifications with proper lab testing." },
                  { num: "03", title: "Buyer Network Access and Deal Facilitation", desc: "Access to verified end-use buyers across all output streams." },
                  { num: "04", title: "Pricing Intelligence and Negotiation Support", desc: "Current market benchmarks and renegotiation support." },
                  { num: "05", title: "Compliance and Documentation for Commercial Sales", desc: "GST, test reports, and environmental documentation." }
                ].map((step) => (
                  <div key={step.num} className="flex flex-col md:flex-row gap-6 bg-white border border-[#e2e8f0] rounded-2xl p-6 lg:p-8 shadow-sm">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#10b981] to-[#3b82f6] flex items-center justify-center text-xl font-bold text-white flex-shrink-0 mx-auto md:mx-0">
                      {step.num}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-lg font-bold mb-2 text-[#0f172a]">{step.title}</h3>
                      <p className="text-[#475569] text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* MARKET DATA SECTION */}
            <section id="market-data" className="py-12 px-6 lg:px-10 bg-white border border-[#e2e8f0] rounded-[32px] mb-12 shadow-sm">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 text-[#0f172a]">Market Data That Every Tyre Recycler Should Know</h2>

              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-4 lg:p-6 mb-8">
                <h3 className="text-lg font-bold mb-4 text-[#0f172a]">Tyre Recycling Product Price Trends — India Market (2020–2025)</h3>
                <canvas id="priceTrendChart" height="150"></canvas>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-4 lg:p-6 mb-8">
                <h3 className="text-lg font-bold mb-4 text-[#0f172a]">Buyer Demand Growth by Tyre Recycling Product Category (2021–2025)</h3>
                <canvas id="demandChart" height="150"></canvas>
              </div>

              {/* Full Table */}
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0f172a]">Product and Scrap Reference Database</h3>
                </div>
                <div className="overflow-x-auto px-6 pb-6">
                  <table className="w-full min-w-[1000px] border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#e2e8f0] text-[#0f172a]">
                        <th className="text-left p-4 font-bold rounded-l-lg">Product / Scrap</th>
                        <th className="text-left p-4 font-bold">Type</th>
                        <th className="text-left p-4 font-bold">Market Price Range</th>
                        <th className="text-left p-4 font-bold">Key Buyers</th>
                        <th className="text-left p-4 font-bold">Critical Parameters</th>
                        <th className="text-left p-4 font-bold rounded-r-lg">Market Note</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e2e8f0] text-[#475569]">
                      {[
                        ["Used / End-of-Life Tyres (ELT)", "Scrap Input", "₹4,000–8,500 per MT", "Tyre recycling plants, cement kilns", "Tyre type, wire-on/off, moisture", "Truck tyres command premium"],
                        ["Crumb Rubber (20–30 mesh)", "Recycled Product", "₹22,000–32,000 per MT", "Road construction, sports surfaces", "Mesh size, wire & fibre content", "30-mesh wire-free highest value"],
                        ["Pyrolysis Oil / TDO", "Recycled Product", "₹38–58 per litre", "Cement plants, industrial boilers", "Calorific value, sulphur, viscosity", "Test report essential"],
                        ["Recovered Carbon Black (rCB)", "Recycled Product", "₹8,000–22,000 per MT", "Rubber compounders, plastics", "Ash, OAN, CTAB, particle size", "Highest upside product"],
                        ["Steel Wire Scrap", "Recycled Product", "₹26,000–34,000 per MT", "Steel mills, re-rollers", "Rubber contamination < 2%", "Clean separation improves value 15-20%"]
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-white/50 transition">
                          {row.map((cell, j) => <td key={j} className="p-4">{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-4 lg:p-6">
                <h3 className="text-lg font-bold mb-4 text-[#0f172a]">Revenue Contribution by Output Stream — Well-Optimised Plant</h3>
                <canvas id="revenueMixChart" height="140"></canvas>
              </div>
            </section>

            {/* CASE STUDY SECTION */}
            <section id="case-study" className="py-8">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6 text-[#0f172a]">Case Study: From Commodity Pricing to Premium Markets in 8 Months</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-red-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-red-600 text-lg font-bold mb-4">What the commercial audit found</h3>
                  <ul className="space-y-3 text-[#475569] text-sm list-disc pl-5 leading-relaxed">
                    <li>Crumb rubber sold ungraded at ₹19,500/MT</li>
                    <li>TDO sold to single buyer at outdated rate</li>
                    <li>rCB sold as low-value filler at ₹7,200/MT</li>
                    <li>Steel wire with high contamination</li>
                  </ul>
                </div>
                <div className="bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-emerald-600 text-lg font-bold mb-4">What we changed</h3>
                  <ul className="space-y-3 text-[#475569] text-sm list-disc pl-5 leading-relaxed">
                    <li>Graded crumb rubber → ₹29,800/MT</li>
                    <li>TDO realisation to ₹51/litre with multiple buyers</li>
                    <li>rCB realisation tripled with proper testing</li>
                    <li>Steel wire contamination reduced significantly</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 lg:p-8 shadow-sm mb-8">
                <h3 className="text-lg font-bold mb-4 text-[#0f172a]">Revenue Per Metric Ton of Input Tyre — Before vs After</h3>
                <canvas id="caseChart" height="150"></canvas>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "₹1.42 Cr/m", label: "Monthly revenue after (was ₹74 L before)" },
                  { value: "92%", label: "Revenue increase without plant expansion" },
                  { value: "3 new buyers", label: "Added across TDO, rCB, and crumb rubber" },
                  { value: "8 months", label: "From audit to transformation" }
                ].map((kpi, i) => (
                  <div key={i} className="bg-white border border-[#e2e8f0] rounded-xl p-4 text-center shadow-sm flex flex-col justify-center">
                    <div className="text-xl font-extrabold text-[#10b981] mb-1">{kpi.value}</div>
                    <div className="text-[#64748b] text-xs leading-tight">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN - Sticky Sidebar Area */}
          <aside className="w-full lg:w-[35%] xl:w-[30%]">
            <div className="sticky top-28 z-10 self-start bg-white p-2 rounded-3xl border border-[#e2e8f0] shadow-sm">
              <StickyContactForm />
            </div>
          </aside>

        </div>

        {/* FINAL CTA */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16 text-center bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] border border-[#cbd5e1] rounded-3xl mb-12 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-[#0f172a]">Ready to Get Better Prices on Your Scrap and Products?</h2>
          <p className="text-lg text-[#475569] mb-8 max-w-xl mx-auto leading-relaxed">
            We start with a commercial audit — no sales pitch. We'll show you exactly where your biggest revenue opportunities are.
          </p>
          <a href="mailto:info@eprnexuss.com" className="inline-block bg-gradient-to-r from-[#10b981] to-[#3b82f6] text-white font-bold px-10 py-4 rounded-xl text-base hover:opacity-95 transition shadow-md shadow-emerald-500/10">
            Contact Our Team
          </a>
        </section>

        <footer className="text-center py-10 text-[#64748b] text-sm border-t border-[#e2e8f0] px-6 font-medium">
          © 2026 EPR Nexuss Solutions | Tyre Waste Recycling — Commercial Support for Scrap Buying and Product Selling
        </footer>
      </div>
    </>
  );
};

export default TyreBuySelling;