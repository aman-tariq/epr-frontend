import React, { useEffect } from 'react';
import Seo from "@/components/Seo";
import Chart from 'chart.js/auto';


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
            backgroundColor: "rgba(77,182,255,0.35)",
            borderColor: "#4db6ff",
            borderWidth: 2,
            borderRadius: 6
          },
          {
            label: "Formally Recycled (MT, Lakhs)",
            data: [1.8, 2.1, 2.3, 2.7, 3.2, 3.8, 4.5, 5.2],
            backgroundColor: "#27c08a",
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: "#b9cbe5" } } },
        scales: {
          x: { ticks: { color: "#7a9cbf" }, grid: { color: "rgba(255,255,255,0.06)" } },
          y: { beginAtZero: true, ticks: { color: "#7a9cbf", callback: (v: number) => v + " L MT" }, grid: { color: "rgba(255,255,255,0.06)" } }
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
          backgroundColor: ["#27c08a", "#4db6ff", "#f3bc4a", "#b9cbe5"],
          borderColor: "rgba(7,17,31,0.8)",
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "right", labels: { color: "#b9cbe5", padding: 16, font: { size: 13 } } }
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
          backgroundColor: ["#27c08a", "#52d7a4", "#f3bc4a", "#4db6ff", "#b9cbe5", "#6c8ba8"],
          borderRadius: 10
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        plugins: { legend: { labels: { color: "#b9cbe5" } } },
        scales: {
          x: { ticks: { color: "#7a9cbf", callback: (v: number) => "₹" + v.toLocaleString() }, grid: { color: "rgba(255,255,255,0.06)" } },
          y: { ticks: { color: "#b9cbe5", font: { size: 12 } }, grid: { display: false } }
        }
      }
    });

    // Price Trend Line
    new Chart(document.getElementById("priceTrendChart") as HTMLCanvasElement, {
      type: "line",
      data: {
        labels: ["2020","2021","2022","2023","2024","2025"],
        datasets: [
          { label: "Crumb Rubber (₹/MT)", data: [17000,19500,22000,24500,26800,28500], borderColor: "#27c08a", backgroundColor: "rgba(39,192,138,0.08)", fill: true, tension: 0.4, pointRadius: 5, pointBackgroundColor: "#27c08a" },
          { label: "Pyrolysis Oil (₹/KL)", data: [28000,33000,40000,44000,49000,52000], borderColor: "#4db6ff", backgroundColor: "rgba(77,182,255,0.06)", fill: true, tension: 0.4, pointRadius: 5, pointBackgroundColor: "#4db6ff" },
          { label: "Recovered Carbon Black (₹/MT)", data: [6000,7500,9500,12000,15500,18000], borderColor: "#f3bc4a", backgroundColor: "rgba(243,188,74,0.06)", fill: true, tension: 0.4, pointRadius: 5, pointBackgroundColor: "#f3bc4a", borderDash: [5,4] },
          { label: "Steel Wire Scrap (₹/MT)", data: [22000,26000,32000,29000,30500,31500], borderColor: "#b9cbe5", backgroundColor: "rgba(185,203,229,0.05)", fill: true, tension: 0.4, pointRadius: 5, pointBackgroundColor: "#b9cbe5", borderDash: [3,3] }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: "#b9cbe5" } } },
        scales: {
          x: { ticks: { color: "#7a9cbf" }, grid: { color: "rgba(255,255,255,0.06)" } },
          y: { ticks: { color: "#7a9cbf", callback: (v: number) => "₹" + v.toLocaleString() }, grid: { color: "rgba(255,255,255,0.06)" } }
        }
      }
    });

    // Demand Growth Bar
    new Chart(document.getElementById("demandChart") as HTMLCanvasElement, {
      type: "bar",
      data: {
        labels: ["Road Construction\n(Crumb Rubber)", "Industrial Fuel\n(TDO)", "Rubber Compounding\n(rCB)", "Steel Re-rolling\n(Wire Scrap)", "Sports Surfaces\n(Crumb Rubber)", "Cement Co-processing\n(TDF)"],
        datasets: [
          { label: "2021–22", data: [8,12,4,6,9,7], backgroundColor: "rgba(39,192,138,0.35)" },
          { label: "2022–23", data: [11,16,7,5,12,10], backgroundColor: "rgba(77,182,255,0.5)" },
          { label: "2023–24", data: [15,19,14,6,16,13], backgroundColor: "#27c08a" },
          { label: "2024–25E", data: [18,21,22,7,19,15], backgroundColor: "#4db6ff" }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: "#b9cbe5" } } },
        scales: {
          x: { ticks: { color: "#7a9cbf" }, grid: { color: "rgba(255,255,255,0.06)" } },
          y: { beginAtZero: true, ticks: { color: "#7a9cbf", callback: (v: number) => v + "%" }, grid: { color: "rgba(255,255,255,0.06)" } }
        }
      }
    });

    // Revenue Mix
    new Chart(document.getElementById("revenueMixChart") as HTMLCanvasElement, {
      type: "bar",
      data: {
        labels: ["Pyrolysis Oil (TDO)", "Crumb Rubber", "Recovered Carbon Black", "Steel Wire Scrap"],
        datasets: [
          { label: "Before Optimisation", data: [34,42,8,16], backgroundColor: "rgba(74,94,116,0.7)" },
          { label: "After Optimisation", data: [38,34,21,7], backgroundColor: ["#4db6ff","#27c08a","#f3bc4a","#b9cbe5"] }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: "#b9cbe5" } } },
        scales: {
          x: { ticks: { color: "#b9cbe5", font: { size: 12 } }, grid: { color: "rgba(255,255,255,0.06)" } },
          y: { beginAtZero: true, max: 50, ticks: { color: "#7a9cbf", callback: (v: number) => v + "%" }, grid: { color: "rgba(255,255,255,0.06)" } }
        }
      }
    });

    // Case Study Before/After
    new Chart(document.getElementById("caseChart") as HTMLCanvasElement, {
      type: "bar",
      data: {
        labels: ["Crumb Rubber\n(₹/MT)", "TDO\n(₹/litre)", "Carbon Black\n(₹/MT)", "Steel Wire\n(₹/MT)"],
        datasets: [
          { label: "Before (2023)", data: [19500, 38, 7200, 26000], backgroundColor: "#f06055" },
          { label: "After (2024)", data: [29800, 51, 21500, 29800], backgroundColor: "#27c08a" }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: "#b9cbe5" } } },
        scales: {
          x: { ticks: { color: "#b9cbe5", font: { size: 12 } }, grid: { color: "rgba(255,255,255,0.06)" } },
          y: { beginAtZero: true, ticks: { color: "#7a9cbf", callback: (v: number) => "₹" + v.toLocaleString() }, grid: { color: "rgba(255,255,255,0.06)" } }
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
    <div className="bg-[#07111f] text-[#eef5ff] font-['Inter'] min-h-screen">
      {/* TOPBAR */}
      <div className="bg-gradient-to-r from-[#0a1426] to-[#10223f] py-3 text-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center flex-wrap gap-3">
          <span>Tyre Waste Recycling — Buying &amp; Selling Scrap and Products Made Simple</span>
          <span>Better sourcing • Stronger sales • Real market connections</span>
        </div>
      </div>

      {/* NAV */}
      {/* <nav className="sticky top-0 z-50 bg-[#07111f]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#27c08a] to-[#4db6ff]"></div>
            <div className="font-bold text-2xl tracking-tight">EPR Nexuss Solutions</div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-[#b9cbe5]">
            <a href="#opportunity" className="hover:text-white transition">Opportunity</a>
            <a href="#products" className="hover:text-white transition">Products</a>
            <a href="#how-we-help" className="hover:text-white transition">How We Help</a>
            <a href="#market-data" className="hover:text-white transition">Market Data</a>
            <a href="#case-study" className="hover:text-white transition">Case Study</a>
            <a href="#faq" className="hover:text-white transition">FAQs</a>
          </div>
        </div>
      </nav> */}

      {/* HERO */}
      <header className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid  gap-2 items-stretch">
          <div className="lg:col-span-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-4 lg:p-12 relative overflow-hidden">
            <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-6 py-3 text-sm font-bold mb-8">
              Tyre Waste Recycling — Scrap &amp; Products
            </div>
            <h1 className="text-2xl lg:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tighter mb-8">
              Scrap That Sits Is Money That Walks Away
            </h1>
            <p className="text-xl text-[#b9cbe5] max-w-2xl">
              Every used tyre that reaches your gate has real commercial value — in the crumb rubber, pyrolysis oil, steel wire, and carbon black it yields. We help tyre recycling plants buy the right scrap and sell their output at the right price.
            </p>
            <div className="flex flex-col gap-4 mt-10">
              <a href="#contact" className="bg-gradient-to-r from-[#27c08a] to-[#4db6ff] text-black font-bold px-2 lg:px-10 py-4 rounded-2xl hover:scale-105 transition">Talk to Our Team</a>
              <a href="#case-study" className="border border-white/30 hover:bg-white/10 px-2 lg:px-10 py-4 rounded-2xl font-bold transition">See a Real Result</a>
            </div>
            <p className="mt-8 text-sm text-[#b9cbe5]">We work with tyre recycling plant owners, scrap aggregators, and product buyers across India.</p>
          </div>

          {/* Hero Side Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/10 border border-white/10 rounded-3xl p-2 lg:p-8">
              <h3 className="text-2xl font-semibold mb-6">What clients come to us for</h3>
              <div className="grid lg:grid-cols-2 gap-4">
                {["Better Prices", "Verified Buyers", "Stable Supply", "Faster Sales"].map((item) => (
                  <div key={item} className="bg-white/10 rounded-2xl p-6">
                    <strong className="block text-lg">{item}</strong>
                    <span className="text-sm text-[#b9cbe5]">Market-accurate rates &amp; connections</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-2 lg:p-8">
              <h3 className="text-2xl font-semibold mb-6">Products and scrap we cover</h3>
              <div className="flex flex-wrap gap-3">
                {["Crumb Rubber", "Pyrolysis Oil (TDO)", "Carbon Black (rCB)", "Steel Wire Scrap", "Rubber Powder", "Tyre-Derived Fuel", "Wire-Free Granules", "Used Tyre Scrap"].map((chip) => (
                  <span key={chip} className="bg-white/10 border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium">{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* OPPORTUNITY SECTION */}
      <section id="opportunity" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">The Tyre Waste Market Is Bigger Than Most Clients Realise</h2>
        <p className="text-[#b9cbe5] max-w-3xl text-lg mb-12">
          India generates over 1.5 million metric tonnes of end-of-life tyres every year. Only a fraction of that volume enters formal recycling channels.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "1.5 Million MT", label: "End-of-life tyres generated in India annually — growing at 8% per year" },
            { value: "₹28,000/MT", label: "Average market realisation for quality crumb rubber" },
            { value: "₹42–55/litre", label: "Current traded price range for tyre-derived pyrolysis oil (TDO)" },
            { value: "38%", label: "Share of total tyre recycling output value captured by plants with organised buyer networks" }
          ].map((kpi, i) => (
            <div key={i} className="bg-white/10 border border-white/10 rounded-3xl p-2 lg:p-8 relative overflow-hidden">
              <div className="text-2xl md:text-4xl font-bold mb-3 text-[#27c08a]">{kpi.value}</div>
              <div className="text-[#b9cbe5] text-sm">{kpi.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-4 lg:p-10">
          <h3 className="text-2xl font-semibold mb-2">India End-of-Life Tyre Generation vs. Formal Recycling Volume (2018–2025)</h3>
          <p className="text-[#b9cbe5] mb-8">Volume in million metric tonnes — showing the structural gap</p>
          <canvas id="supplyGapChart" height="140"></canvas>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-20 bg-white/5">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">What Comes Out of a Tyre Recycling Plant — and Who Buys It</h2>
        <p className="text-[#b9cbe5] max-w-3xl mb-12">
          A well-run tyre recycling plant produces four distinct output streams. Knowing who to sell to, at what specification, and at what price is where value is lost or gained.
        </p>

        <div className="grid md:grid-cols-1 gap-8">
          {[
            { title: "Crumb Rubber and Rubber Powder", content: "Highest-volume output. Used in sports surfaces, road construction, moulded products, and footwear. Price depends heavily on mesh size and purity." },
            { title: "Pyrolysis Oil (TDO)", content: "Strong demand as furnace fuel in cement plants, boilers, and industrial kilns. Price tracks furnace oil and requires proper test reports." },
            { title: "Recovered Carbon Black (rCB)", content: "Most undervalued product. Can be sold into rubber compounding and plastics when produced to specification with test data." },
            { title: "Steel Wire Scrap", content: "15–20% of tyre weight. Predictable revenue. Clean separation significantly improves realisation." }
          ].map((item, i) => (
            <div key={i} className="bg-white/10 border border-white/10 rounded-3xl p-4 lg:p-10">
              <h3 className="text-2xl font-semibold mb-6">{item.title}</h3>
              <p className="text-[#b9cbe5]">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Charts Section - Fully Responsive */}
<div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="bg-white/10 border border-white/10 rounded-3xl p-4 md:p-10">
    <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
      Output Composition of a Typical Tyre Recycling Plant (by Weight %)
    </h3>
    <div className="relative">
      <canvas 
        id="compositionChart" 
        className="w-full max-h-[320px] md:max-h-[360px]"
      ></canvas>
    </div>
  </div>

  <div className="bg-white/10 border border-white/10 rounded-3xl p-4 md:p-10">
    <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
      Product Realisation Value per Metric Ton — Tyre Recycling Outputs (₹)
    </h3>
    <div className="relative">
      <canvas 
        id="valueChart" 
        className="w-full max-h-[320px] md:max-h-[360px]"
      ></canvas>
    </div>
  </div>
</div>
      </section>

      {/* HOW WE HELP */}
      {/* HOW WE HELP - Fully Responsive */}
<section id="how-we-help" className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-2xl md:text-4xl font-bold mb-6">How We Help Clients Buy Better and Sell Smarter</h2>
  <p className="text-[#b9cbe5] max-w-3xl mb-12">
    A clear, practical process that fills the commercial gap most plant owners face.
  </p>

  <div className="space-y-8">
    {[
      { 
        num: "01", 
        title: "Scrap Source Mapping and Inflow Planning", 
        desc: "Map reliable tyre scrap sources and build consistent supply relationships." 
      },
      { 
        num: "02", 
        title: "Product Specification Review and Testing Guidance", 
        desc: "Ensure products meet buyer specifications with proper lab testing." 
      },
      { 
        num: "03", 
        title: "Buyer Network Access and Deal Facilitation", 
        desc: "Access to verified end-use buyers across all output streams." 
      },
      { 
        num: "04", 
        title: "Pricing Intelligence and Negotiation Support", 
        desc: "Current market benchmarks and renegotiation support." 
      },
      { 
        num: "05", 
        title: "Compliance and Documentation for Commercial Sales", 
        desc: "GST, test reports, and environmental documentation." 
      }
    ].map((step) => (
      <div 
        key={step.num} 
        className="flex flex-col md:flex-row gap-6 md:gap-8 bg-white/10 border border-white/10 rounded-3xl p-4 md:p-10"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#27c08a] to-[#4db6ff] flex items-center justify-center text-2xl md:text-4xl font-bold text-black flex-shrink-0 mx-auto md:mx-0">
          {step.num}
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">{step.title}</h3>
          <p className="text-[#b9cbe5] text-base md:text-lg leading-relaxed">
            {step.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* MARKET DATA */}
      <section id="market-data" className="max-w-6xl mx-auto px-6 py-20 bg-white/5">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Market Data That Every Tyre Recycler Should Know</h2>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-4 lg:p-10 mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Tyre Recycling Product Price Trends — India Market (2020–2025)</h3>
          <canvas id="priceTrendChart" height="140"></canvas>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-4 lg:p-10 mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Buyer Demand Growth by Tyre Recycling Product Category (2021–2025)</h3>
          <canvas id="demandChart" height="140"></canvas>
        </div>

        {/* Full Table */}
        <div className="bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          <div className=" p-4 lg:p-10 pb-4">
            <h3 className="text-2xl font-semibold">Product and Scrap Reference Database</h3>
          </div>
          <div className="overflow-x-auto px-2 lg:px-10 pb-10">
            <table className="w-full min-w-[1100px] border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="text-left p-6 font-medium">Product / Scrap</th>
                  <th className="text-left p-6 font-medium">Type</th>
                  <th className="text-left p-6 font-medium">Market Price Range (India)</th>
                  <th className="text-left p-6 font-medium">Key Buyers</th>
                  <th className="text-left p-6 font-medium">Critical Quality Parameters</th>
                  <th className="text-left p-6 font-medium">Market Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-[#b9cbe5]">
                {[
                  ["Used / End-of-Life Tyres (ELT)", "Scrap Input", "₹4,000–8,500 per MT", "Tyre recycling plants, cement kilns", "Tyre type, wire-on/off, moisture", "Truck tyres command premium"],
                  ["Crumb Rubber (20–30 mesh)", "Recycled Product", "₹22,000–32,000 per MT", "Road construction, sports surfaces", "Mesh size, wire & fibre content", "30-mesh wire-free highest value"],
                  ["Pyrolysis Oil / TDO", "Recycled Product", "₹38–58 per litre", "Cement plants, industrial boilers", "Calorific value, sulphur, viscosity", "Test report essential"],
                  ["Recovered Carbon Black (rCB)", "Recycled Product", "₹8,000–22,000 per MT", "Rubber compounders, plastics", "Ash, OAN, CTAB, particle size", "Highest upside product"],
                  ["Steel Wire Scrap", "Recycled Product", "₹26,000–34,000 per MT", "Steel mills, re-rollers", "Rubber contamination &lt;2%", "Clean separation improves value 15-20%"]
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => <td key={j} className="p-6">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-white/10 border border-white/10 rounded-3xl p-4 lg:p-10">
          <h3 className="text-2xl font-semibold mb-2">Revenue Contribution by Output Stream — Well-Optimised Plant</h3>
          <canvas id="revenueMixChart" height="140"></canvas>
        </div>
      </section>

      {/* CASE STUDY */}
      <section id="case-study" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Case Study: From Commodity Pricing to Premium Markets in 8 Months</h2>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white/10 border border-white/10 rounded-3xl p-4 lg:p-10">
            <h3 className="text-red-400 text-xl md:text-2xl font-semibold mb-6">What the commercial audit found</h3>
            <ul className="space-y-4 text-[#b9cbe5] list-disc pl-5">
              <li>Crumb rubber sold ungraded at ₹19,500/MT</li>
              <li>TDO sold to single buyer at outdated rate</li>
              <li>rCB sold as low-value filler at ₹7,200/MT</li>
              <li>Steel wire with high contamination</li>
            </ul>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-3xl p-4 lg:p-10">
            <h3 className="text-emerald-400 text-2xl font-semibold mb-6">What we changed</h3>
            <ul className="space-y-4 text-[#b9cbe5] list-disc pl-5">
              <li>Graded crumb rubber → ₹29,800/MT</li>
              <li>TDO realisation to ₹51/litre with multiple buyers</li>
              <li>rCB realisation tripled with proper testing</li>
              <li>Steel wire contamination reduced significantly</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-4 lg:p-10 mb-12">
          <h3 className="text-2xl font-semibold mb-2">Revenue Per Metric Ton of Input Tyre — Before vs After</h3>
          <canvas id="caseChart" height="140"></canvas>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: "₹1.42 Cr/month", label: "Monthly revenue after (was ₹74 L before)" },
            { value: "92%", label: "Revenue increase without changing plant capacity" },
            { value: "3 new buyers", label: "Added across TDO, rCB, and crumb rubber" },
            { value: "8 months", label: "From audit to full transformation" }
          ].map((kpi, i) => (
            <div key={i} className="bg-white/10 border border-white/10 rounded-3xl p-2 lg:p-8 text-center">
              <div className="text-2xl md:text-4xl font-bold text-[#27c08a] mb-3">{kpi.value}</div>
              <div className="text-[#b9cbe5]">{kpi.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center bg-gradient-to-br from-emerald-900/30 to-sky-900/30 border border-white/10 rounded-3xl mx-6 mb-12">
        <h2 className="text-5xl font-bold mb-8">Ready to Get Better Prices on Your Scrap and Products?</h2>
        <p className="text-xl text-[#b9cbe5] mb-10 max-w-xl mx-auto">We start with a commercial audit — no sales pitch. We'll show you exactly where your biggest revenue opportunities are.</p>
        <a href="mailto:info@eprnexuss.com" className="inline-block bg-gradient-to-r from-[#27c08a] to-[#4db6ff] text-black font-bold px-12 py-5 rounded-2xl text-lg hover:scale-105 transition">Contact Our Team</a>
      </section>

      <footer className="text-center py-12 text-[#b9cbe5] border-t border-white/10">
        © 2026 EPR Nexuss Solutions | Tyre Waste Recycling — Commercial Support for Scrap Buying and Product Selling
      </footer>
    </div>
    </>
  );
};

export default TyreBuySelling;