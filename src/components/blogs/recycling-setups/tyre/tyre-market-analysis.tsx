import React, { useEffect } from 'react';
import Seo from "@/components/Seo";

const TyreMarketAnalysis: React.FC = () => {
  useEffect(() => {
    // Load Chart.js if not already loaded
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      initializeCharts();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeCharts = () => {
    const tc = { color: "#7a9cbf" };
    const tcL = { color: "#b9cbe5" };
    const grid = "rgba(255,255,255,0.06)";
    const leg = { color: "#b9cbe5" };

    // Market Size Chart
    new (window as any).Chart(document.getElementById("marketSizeChart"), {
      type: "bar",
      data: {
        labels: ["2019","2020","2021","2022","2023","2024","2025E","2026E","2027E","2028E","2029E","2030E"],
        datasets: [
          {
            label: "Market Size (₹ Crore)",
            data: [4200,4550,5100,6000,7400,9200,10600,12100,13900,16000,18400,21400],
            backgroundColor: "rgba(39,192,138,0.28)",
            borderColor: "#27c08a",
            borderWidth: 2,
            borderRadius: 6,
            yAxisID: "y"
          },
          {
            label: "YoY Growth (%)",
            data: [null,8.3,12.1,17.6,23.3,24.3,15.2,14.2,14.9,15.1,15.0,16.3],
            type: "line",
            borderColor: "#f3bc4a",
            backgroundColor: "transparent",
            borderWidth: 2.5,
            pointRadius: 4,
            pointBackgroundColor: "#f3bc4a",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            tension: 0.4,
            yAxisID: "y2"
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: leg } },
        scales: {
          x: { ticks: tc, grid: { color: grid } },
          y: { ticks: { ...tc, callback: (v: number) => "₹" + v.toLocaleString() + " Cr" }, grid: { color: grid } },
          y2: { position: "right", ticks: { ...tc, callback: (v: number) => v + "%" }, grid: { drawOnChartArea: false }, min: 0, max: 30 }
        }
      }
    });

    // Gap Chart
    new (window as any).Chart(document.getElementById("gapChart"), {
      type: "bar",
      data: {
        labels: ["2018","2019","2020","2021","2022","2023","2024","2025E"],
        datasets: [
          { label: "ELT Generated (Lakh MT)", data: [9.4,10.1,10.6,11.4,12.3,13.4,15.2,16.4], backgroundColor: "rgba(77,182,255,0.3)", borderColor: "#4db6ff", borderWidth: 2, borderRadius: 5 },
          { label: "Formally Recycled (Lakh MT)", data: [1.8,2.1,2.4,2.9,3.5,4.2,5.1,6.3], backgroundColor: "#27c08a", borderRadius: 5, borderWidth: 0 }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: leg } },
        scales: {
          x: { ticks: tc, grid: { color: grid } },
          y: { beginAtZero: true, ticks: { ...tc, callback: (v: number) => v + " L MT" }, grid: { color: grid } }
        }
      }
    });

    // Demand Index Chart
    new (window as any).Chart(document.getElementById("demandIndexChart"), {
      type: "line",
      data: {
        labels: ["2020","2021","2022","2023","2024","2025E"],
        datasets: [
          { label: "Crumb Rubber", data: [100,113,131,154,183,212], borderColor: "#27c08a", backgroundColor: "rgba(39,192,138,0.07)", fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: "#27c08a", pointBorderColor: "#fff", pointBorderWidth: 2 },
          { label: "Pyrolysis Oil (TDO)", data: [100,118,145,178,218,262], borderColor: "#4db6ff", backgroundColor: "rgba(77,182,255,0.06)", fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: "#4db6ff", pointBorderColor: "#fff", pointBorderWidth: 2 },
          { label: "Recovered Carbon Black", data: [100,122,160,210,290,382], borderColor: "#f3bc4a", backgroundColor: "rgba(243,188,74,0.06)", fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: "#f3bc4a", pointBorderColor: "#fff", pointBorderWidth: 2, borderDash: [5,4] },
          { label: "EPR Compliance Processing", data: [100,140,220,340,500,720], borderColor: "#a78bfa", backgroundColor: "rgba(167,139,250,0.06)", fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: "#a78bfa", pointBorderColor: "#fff", pointBorderWidth: 2, borderDash: [3,3] },
          { label: "Steel Wire Scrap", data: [100,105,112,116,121,128], borderColor: "#b9cbe5", backgroundColor: "rgba(185,203,229,0.05)", fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: "#b9cbe5", pointBorderColor: "#fff", pointBorderWidth: 2 }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { ...leg, font: { size: 12 } } } },
        scales: {
          x: { ticks: tc, grid: { color: grid } },
          y: { beginAtZero: false, ticks: { ...tc }, grid: { color: grid }, title: { display: true, text: "Index (2020 = 100)", color: "#7a9cbf" } }
        }
      }
    });

    // Market Share Doughnut
    new (window as any).Chart(document.getElementById("marketShareChart"), {
      type: "doughnut",
      data: {
        labels: ["Pyrolysis Oil / TDO (33%)","Crumb Rubber (31%)","Steel Wire Scrap (12%)","Rubber Powder (11%)","EPR Compliance (4%)","Tyre-Derived Fuel (7%)", "rCB (2%)"],
        datasets: [{
          data: [33,31,12,11,7,4,2],
          backgroundColor: ["#4db6ff","#27c08a","#b9cbe5","#52d7a4","#a78bfa","#f3bc4a","#f06055"],
          borderColor: "rgba(7,17,31,0.8)",
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "right", labels: { ...leg, padding: 14, font: { size: 12 } } },
          tooltip: { callbacks: { label: (ctx: any) => ctx.label } }
        }
      }
    });

    // Margin Chart
    new (window as any).Chart(document.getElementById("marginChart"), {
      type: "bar",
      data: {
        labels: ["Crumb Rubber","Rubber Powder","Pyrolysis Oil","Carbon Black (rCB)","Steel Wire","EPR Processing"],
        datasets: [
          { label: "Commodity-Grade Margin (%)", data: [18,22,24,14,12,20], backgroundColor: "#4a5e74", borderRadius: 7, borderWidth: 0 },
          { label: "Specification-Grade Margin (%)", data: [34,38,42,55,22,30], backgroundColor: "#27c08a", borderRadius: 7, borderWidth: 0 }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: leg } },
        scales: {
          x: { ticks: tc, grid: { color: grid } },
          y: { beginAtZero: true, max: 60, ticks: { ...tc, callback: (v: number) => v + "%" }, grid: { color: grid } }
        }
      }
    });

    // Regional Demand Chart
    new (window as any).Chart(document.getElementById("regionalChart"), {
      type: "bar",
      data: {
        labels: ["Maharashtra","Gujarat","Rajasthan","Tamil Nadu","Punjab / Haryana","Telangana","West Bengal"],
        datasets: [
          { label: "Crumb Rubber", data: [9,8,9,7,8,6,5], backgroundColor: "rgba(39,192,138,0.8)", borderRadius: 5, borderWidth: 0 },
          { label: "Pyrolysis Oil", data: [8,9,7,8,6,8,6], backgroundColor: "rgba(77,182,255,0.8)", borderRadius: 5, borderWidth: 0 },
          { label: "rCB", data: [7,6,5,9,5,7,4], backgroundColor: "rgba(243,188,74,0.8)", borderRadius: 5, borderWidth: 0 },
          { label: "Steel Wire", data: [8,9,7,6,9,6,8], backgroundColor: "rgba(185,203,229,0.6)", borderRadius: 5, borderWidth: 0 }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: leg } },
        scales: {
          x: { ticks: tc, grid: { color: grid } },
          y: { beginAtZero: true, max: 10, ticks: tc, grid: { color: grid }, title: { display: true, text: "Demand Score (1–10)", color: "#7a9cbf" } }
        }
      }
    });

    // Bubble Chart
    new (window as any).Chart(document.getElementById("bubbleChart"), {
      type: "bubble",
      data: {
        datasets: [
          { label: "Crumb Rubber", data: [{ x: 1.2, y: 26, r: 16 }], backgroundColor: "rgba(39,192,138,0.7)" },
          { label: "Rubber Powder", data: [{ x: 2.4, y: 30, r: 12 }], backgroundColor: "rgba(82,215,164,0.7)" },
          { label: "Pyrolysis Oil", data: [{ x: 2.6, y: 33, r: 18 }], backgroundColor: "rgba(77,182,255,0.7)" },
          { label: "Recovered Carbon Black", data: [{ x: 0.4, y: 42, r: 28 }], backgroundColor: "rgba(243,188,74,0.8)" },
          { label: "Steel Wire Scrap", data: [{ x: 0, y: 17, r: 8 }], backgroundColor: "rgba(185,203,229,0.6)" },
          { label: "EPR Compliance", data: [{ x: 0.1, y: 25, r: 35 }], backgroundColor: "rgba(167,139,250,0.7)" },
          { label: "Tyre-Derived Fuel", data: [{ x: 0.3, y: 13, r: 10 }], backgroundColor: "rgba(240,96,85,0.6)" }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { ...leg, font: { size: 12 } } },
          tooltip: { callbacks: { label: (ctx: any) => `${ctx.dataset.label}: ₹${ctx.raw.x} Cr capex, ${ctx.raw.y}% margin` } }
        },
        scales: {
          x: { title: { display: true, text: "Min. Entry Capital (₹ Crore)", color: "#7a9cbf" }, ticks: tc, grid: { color: grid } },
          y: { title: { display: true, text: "Gross Margin %", color: "#7a9cbf" }, beginAtZero: true, max: 65, ticks: { ...tc, callback: (v: number) => v + "%" }, grid: { color: grid } }
        }
      }
    });

    // Case Study Chart
    new (window as any).Chart(document.getElementById("caseChart"), {
      type: "bar",
      data: {
        labels: ["Month 3","Month 6","Month 9","Month 12","Month 18","Month 24","Month 30","Month 36"],
        datasets: [
          {
            label: "Original Plan — Pyrolysis Entry (₹ L/month)",
            data: [0,0,14,22,28,34,38,42],
            backgroundColor: "rgba(74,94,116,0.7)",
            borderRadius: 7,
            borderWidth: 0
          },
          {
            label: "Market-Driven — Crumb Rubber Entry (₹ L/month)",
            data: [8,22,31,38,46,56,68,78],
            backgroundColor: "#27c08a",
            borderRadius: 7,
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: leg } },
        scales: {
          x: { ticks: tc, grid: { color: grid } },
          y: { beginAtZero: true, ticks: { ...tc, callback: (v: number) => "₹" + v + " L" }, grid: { color: grid } }
        }
      }
    });
  };

  return (
    <>
      <Seo
        title="Tyre Waste Recycling Market Analysis India 2026 | Crumb Rubber, Pyrolysis Oil, rCB"
        description="Comprehensive Tyre Waste Recycling Market Analysis for India 2026. Detailed insights on market size (₹9,200 Cr+), growth (14.8% CAGR), ELT vs recycling gap, segment margins, demand drivers, and best entry strategies for new tyre recycling plants."
        keywords={[
          "Tyre Waste Recycling Market Analysis India",
          "Tyre Recycling Market Size Growth 2026",
          "Crumb Rubber Market India",
          "Pyrolysis Oil TDO Market Analysis",
          "Recovered Carbon Black rCB Demand",
          "ELT Generation vs Recycling Gap",
          "Tyre Recycling Profit Margins India",
          "Best Segment for Tyre Recycling Plant",
          "Tyre Waste Recycling Business Opportunity",
          "EPR Tyre Recycling Market Trends",
          "Tyre Derived Fuel TDF Market",
          "Tyre Recycling Plant Entry Strategy 2026"
        ]}
        url="https://eprnexuss.com/blog/tyre-market-analysis"
        type="article"
      />
    <div className="min-h-screen bg-[#07111f] text-[#eef5ff] font-sans">
      {/* Topbar */}
      

     

      {/* HERO */}
      <header className="pt-16 pb-20 bg-gradient-to-br from-[#07111f] via-[#0c1830] to-[#07111f]">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#27c08a]/10 border border-[#27c08a]/30 text-[#8af0c5] text-sm font-bold mb-6">
              Market Analysis — Tyre Waste Recycling
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.04em] mb-8">
              The Market Is Wide Open.<br />Your Segment Is Already Waiting.
            </h1>
            <p className="text-xl text-[#b9cbe5] max-w-2xl mb-10">
              Every year, India discards over 150 million end-of-life tyres. Most go nowhere near a formal recycling system. 
              That is not a waste problem — that is an uncaptured market.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-[#27c08a] to-[#4db6ff] text-[#06111c] font-bold rounded-2xl hover:scale-105 transition-transform">Talk to Our Team</a>
              <a href="#case-study" className="px-8 py-4 border border-white/30 hover:bg-white/5 rounded-2xl font-semibold transition-colors">See a Real Entry Story</a>
            </div>
          </div>

          <div className="md:col-span-5 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-4">What this analysis helps clients understand</h3>
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="text-3xl font-bold text-[#27c08a]">₹9,200 Cr+</div>
                  <div className="text-sm text-[#b9cbe5]">India tyre recycling market size (2024)</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="text-3xl font-bold text-[#27c08a]">14.8% CAGR</div>
                  <div className="text-sm text-[#b9cbe5]">Projected through 2030</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">Segments covered</h3>
              <div className="flex flex-wrap gap-2">
                {["Crumb Rubber","Pyrolysis Oil (TDO)","Carbon Black (rCB)","Steel Wire Scrap","Tyre-Derived Fuel","Retreading","Export Markets","EPR Compliance"].map((s,i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MARKET SIZE */}
      <section id="market-size" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-lg md:text-4xl  font-bold mb-4">Understanding the Size and Shape of the Tyre Recycling Market</h2>
        <p className="text-[#b9cbe5] max-w-3xl text-lg mb-12">
          The tyre waste recycling market in India is a multi-thousand-crore industry growing at double-digit rates.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { value: "₹9,200 Cr", label: "Estimated size of India's tyre waste recycling market in 2024" },
            { value: "₹21,400 Cr", label: "Projected market size by 2030 at 14.8% CAGR" },
            { value: "1.52 Mn MT", label: "Annual end-of-life tyre generation (2024)" },
            { value: "28% Formal", label: "Share of ELT volume entering formal recycling channels" }
          ].map((kpi, i) => (
            <div key={i} className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-8">
              <div className="text-lg md:text-4xl font-bold mb-2">{kpi.value}</div>
              <div className="text-sm text-[#b9cbe5]">{kpi.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-2">India Tyre Waste Recycling Market Size — Actual and Projected (₹ Crore, 2019–2030)</h3>
          <canvas id="marketSizeChart" className="w-full" height="200"></canvas>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Why the market is growing now</h3>
            <p className="text-[#b9cbe5] mb-6">India has crossed 300 million registered vehicles... EPR rules create structural pull.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Where the informal market still dominates</h3>
            <p className="text-[#b9cbe5]">72% of ELT volume goes to informal channels — representing supply for formal players.</p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mt-8">
          <h3 className="text-lg md:text-2xl font-semibold mb-2">ELT Generation vs. Formal Recycling Capacity — India (2018–2025)</h3>
          <canvas id="gapChart" className="w-full" height="200"></canvas>
        </div>
      </section>

      {/* TARGET SEGMENTS */}
      <section id="segments" className="bg-[#0c1830] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-lg md:text-4xl font-bold mb-4">The Five Target Segments Every Tyre Recycler Needs to Understand</h2>
          <p className="text-[#b9cbe5] max-w-3xl mb-12">Each segment has its own buyer base, margin structure, and growth trajectory.</p>

          {/* Segment Cards */}
          {[
            { color: "emerald", title: "Crumb Rubber and Rubber Powder", badge: "HIGHEST VOLUME", content: "Crumb rubber is typically 35–42% of input tyre weight... Highway projects and sports surfaces drive demand." },
            { color: "sky", title: "Pyrolysis Oil (TDO)", badge: "HIGHEST PRICE VELOCITY", content: "Primary buyer: cement plants, steel mills, ceramic kilns. Strong cost advantage over conventional fuels." },
            { color: "gold", title: "Recovered Carbon Black (rCB)", badge: "HIGHEST UPSIDE POTENTIAL", content: "The segment with the most significant long-term commercial upside. Technical consistency is key." },
            { color: "coral", title: "Steel Wire Scrap", badge: "MOST PREDICTABLE", content: "15–20% steel wire by weight in commercial tyres. Cleanliness determines pricing." },
            { color: "purple", title: "EPR Compliance Processing and Tyre-Derived Fuel (TDF)", badge: "REGULATORY GROWTH SEGMENT", content: "Producers pay for compliance. Stable revenue stream for registered plants." }
          ].map((seg, idx) => (
            <div key={idx} className={`mb-8 bg-white/5 border-l-4 border-${seg.color === 'emerald' ? '[#27c08a]' : seg.color === 'sky' ? '[#4db6ff]' : seg.color === 'gold' ? '[#f3bc4a]' : seg.color === 'coral' ? '[#f06055]' : '[#a78bfa]'} rounded-3xl p-9`}>
              <span className="inline-block px-5 py-1 rounded-full text-xs font-bold tracking-widest bg-white/10 mb-4">{seg.badge}</span>
              <h3 className="text-3xl font-bold mb-6">{seg.title}</h3>
              <p className="text-[#b9cbe5] leading-relaxed">{seg.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEMAND DRIVERS */}
      <section id="demand-drivers" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-lg md:text-4xl font-bold mb-4">What Is Driving Demand Across Every Segment</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "National Highway Policy and Rubberised Bitumen",
            "Industrial Fuel Cost Pressure",
            "EPR Mandates for Tyre Producers",
            "Virgin Carbon Black Price and Supply Uncertainty",
            "Urban Infrastructure and Sports Facility Growth",
            "Export Market Activation"
          ].map((title, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="font-semibold text-xl mb-4">{title}</h3>
              <p className="text-[#b9cbe5] text-sm">Key structural driver shaping buyer behavior.</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-semibold mb-2">Demand Growth Index by Tyre Recycling Segment — India (2020–2025)</h3>
          <canvas id="demandIndexChart" className="w-full" height="200"></canvas>
        </div>
      </section>

      {/* DATA & TABLES */}
      {/* ==================== RESPONSIVE CHARTS SECTION ==================== */}
<section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    {/* Doughnut Chart Card */}
    <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-5 sm:p-8">
      <h3 className="text-white text-xl sm:text-2xl font-semibold mb-6 text-center">
        Tyre Recycling Market Revenue Share — India 2024
      </h3>
      
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-[260px] sm:max-w-[300px] aspect-square">
          <canvas id="marketShareChart" className="w-full h-full"></canvas>
        </div>
      </div>

      {/* Responsive Legend */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        {[
          { label: "Pyrolysis Oil / TDO", percent: "33%", color: "#4db6ff" },
          { label: "Crumb Rubber", percent: "31%", color: "#27c08a" },
          { label: "Steel Wire Scrap", percent: "12%", color: "#b9cbe5" },
          { label: "Rubber Powder", percent: "11%", color: "#52d7a4" },
          { label: "Tyre-Derived Fuel", percent: "7%", color: "#f3bc4a" },
          { label: "EPR Compliance", percent: "4%", color: "#a78bfa" },
          { label: "rCB", percent: "2%", color: "#f06055" },
        ].map((item, i) => (
          <div 
            key={i} 
            className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-3"
          >
            <div 
              className="w-4 h-4 rounded flex-shrink-0" 
              style={{ backgroundColor: item.color }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-white/80 text-sm truncate">{item.label}</p>
            </div>
            <span className="font-bold text-white text-base">{item.percent}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Margin Bar Chart Card */}
    <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-5 sm:p-8 flex flex-col">
      <h3 className="text-white text-xl sm:text-2xl font-semibold mb-6 text-center">
        Gross Margin Range by Segment
      </h3>
      
      {/* Chart Container with Responsive Height */}
      <div className="flex-1 min-h-[320px] sm:min-h-[360px] md:min-h-[400px] relative">
        <canvas id="marginChart" className="absolute inset-0 w-full h-full"></canvas>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-3.5 bg-[#4a5e74] rounded-sm"></div>
          <span className="text-white/70">Commodity Grade</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-3.5 bg-[#27c08a] rounded-sm"></div>
          <span className="text-white/70">Specification Grade</span>
        </div>
      </div>
    </div>
  </div>
</section>
     {/* ==================== CASE STUDY SECTION ==================== */}
<section id="case-study" className="max-w-6xl mx-auto px-6 py-20">
  <div className="text-center mb-12">
    <h2 className="text-lg md:text-4xl  font-bold mb-6 leading-tight">
      Case Study: How One Operator Found the Right Entry Point
    </h2>
    <p className="text-[#b9cbe5] max-w-3xl mx-auto text-lg">
      A first-generation entrepreneur in Maharashtra had capital, land, and genuine interest in the tyre recycling sector.
      He came to us before placing an order for pyrolysis equipment.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8 mb-12">
    {/* Market Analysis Revealed */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
      <h3 className="text-2xl font-semibold mb-6 text-[#27c08a]">What the market analysis revealed</h3>
      <ul className="space-y-4 text-[#b9cbe5]">
        {[
          "Location was 85 km from cement cluster — good for TDO but not ideal for high-volume TDF",
          "Three existing pyrolysis operators competing for the same buyers",
          "Crumb rubber market in region almost entirely unserved by specification-grade suppliers",
          "Major highway project within 60 km requiring rubberised bitumen",
          "₹1.8 Cr capital perfectly suited for mechanical crumb rubber plant"
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-[#27c08a] mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Recommended Strategy */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
      <h3 className="text-2xl font-semibold mb-6 text-[#27c08a]">Market-driven entry strategy we recommended</h3>
      <ul className="space-y-4 text-[#b9cbe5]">
        {[
          "Enter through mechanical crumb rubber production targeting local road contractors",
          "Develop specification-grade 30-mesh certified crumb rubber from day one",
          "Build EPR compliance registration for additional stable revenue",
          "Plan pyrolysis as Phase 2 (18–24 months later)",
          "Secure secondary buyers in sports surface & playground segment"
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-[#27c08a] mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Case Study Chart */}
  {/* <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12">
    <h3 className="text-2xl font-semibold mb-2 text-center">Original Plan vs. Market-Driven Entry Strategy</h3>
    <p className="text-center text-[#b9cbe5] mb-8">
      Projected monthly revenue comparison (Year 1–3)
    </p>
    <div className="h-[380px]">
      <canvas id="caseChart" className="w-full h-full"></canvas>
    </div>
  </div> */}

  {/* KPI Results */}
  <div className="grid md:grid-cols-2  gap-6 mb-12">
    {[
      { value: "₹38 L/month", label: "Projected Year 1 monthly revenue (vs ₹24 L for original plan)" },
      { value: "14 months", label: "Projected payback period (vs 26 months for pyrolysis)" },
      { value: "3 segments", label: "Revenue streams active by end of Year 2" },
      { value: "Zero competing", label: "Specification-grade crumb rubber suppliers within 150 km" }
    ].map((kpi, i) => (
      <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 text-center">
        <strong className="block text-2xl text-[#27c08a] mb-3">{kpi.value}</strong>
        <span className="text-sm text-[#b9cbe5] leading-tight">{kpi.label}</span>
      </div>
    ))}
  </div>

  {/* Conclusion Card */}
  <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
    <h3 className="text-2xl font-semibold mb-6">What this case illustrates</h3>
    <p className="text-[#b9cbe5] leading-relaxed mb-6">
      This entrepreneur was not making a bad decision by considering pyrolysis. The problem was that his specific location, capital, and competitive landscape made crumb rubber the dramatically better entry point.
    </p>
    <p className="text-[#b9cbe5] leading-relaxed">
      Market analysis is not about confirming assumptions. It is about replacing assumptions with data.
    </p>
  </div>
</section>

{/* ==================== WHAT CLIENTS GAIN SECTION ==================== */}
<section className="max-w-6xl mx-auto px-6 py-20 bg-[#0c1830]">
  <div className="text-center mb-12">
    <h2 className="text-lg md:text-4xl  font-bold mb-4">What Clients Gain From a Proper Market Analysis</h2>
    <p className="text-[#b9cbe5] max-w-2xl mx-auto">
      A market analysis is not a report. It is a decision-making tool.
    </p>
  </div>

  <div className="grid md:grid-cols-4 gap-6">
    {[
      {
        title: "Right Segment",
        desc: "Enter the segment that fits your capital, location, and buyer proximity"
      },
      {
        title: "Validated Revenue",
        desc: "Revenue projections grounded in actual buyer conversations"
      },
      {
        title: "Lower Entry Risk",
        desc: "Competitive blind spots identified before capital is committed"
      },
      {
        title: "Clear Growth Path",
        desc: "A two-segment and three-segment roadmap for sustainable scaling"
      }
    ].map((item, i) => (
      <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#27c08a]/30 transition-colors group">
        <div className="text-5xl font-bold text-[#27c08a] mb-4 group-hover:scale-110 transition-transform">0{i + 1}</div>
        <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
        <p className="text-[#b9cbe5]">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* ==================== FAQ SECTION ==================== */}
<section id="faq" className="max-w-6xl mx-auto px-6 py-20">
  <div className="text-center mb-12">
    <h2 className="text-lg md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
    <p className="text-[#b9cbe5]">The questions we hear most from clients entering the tyre recycling market.</p>
  </div>

  <div className="max-w-4xl mx-auto space-y-4">
    {[
      {
        q: "Is pyrolysis always the best entry point for a new tyre recycling plant?",
        a: "No — and this is one of the most persistent misconceptions. For many first-time operators, a mechanical crumb rubber plant is a faster, lower-risk, and often higher-margin entry point."
      },
      {
        q: "How competitive is the crumb rubber market in India right now?",
        a: "The commodity crumb rubber market is competitive. However, the specification-grade crumb rubber market (30-mesh wire-free, tested) has significantly less competition."
      },
      {
        q: "What does EPR registration actually mean for a tyre recycling plant?",
        a: "It allows you to generate EPR certificates for tyre producers. This creates a stable, less price-sensitive revenue stream in addition to product sales."
      },
      {
        q: "Which region in India has the best demand fundamentals?",
        a: "Maharashtra, Gujarat, Rajasthan, and Tamil Nadu are strong. However, underserved regions often offer the best first-mover advantages."
      },
      {
        q: "How long does it take to qualify as a supplier for recovered carbon black?",
        a: "Buyer qualification cycles for rCB typically take 6 to 18 months. Start the process early — ideally 6–9 months before full production."
      }
    ].map((faq, i) => (
      <details
        key={i}
        className="bg-white/5 border border-white/10 rounded-3xl p-8 group hover:border-[#27c08a]/30 transition-all"
      >
        <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
          {faq.q}
          <span className="text-2xl text-[#27c08a] group-open:rotate-45 transition-transform">+</span>
        </summary>
        <p className="mt-6 text-[#b9cbe5] leading-relaxed">{faq.a}</p>
      </details>
    ))}
  </div>
</section>
      {/* CTA */}
      <section id="contact" className="bg-gradient-to-br from-[#ffffff] via-[#4db6ff] to-[#27c08a] text-[#06111c] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Ready to Find Your Place in the Tyre Recycling Market?</h2>
          <a href="mailto:info@eprnexuss.com" className="inline-block mt-8 px-12 py-5 bg-white font-bold text-xl rounded-2xl hover:bg-white/90 transition-colors">Request a Market Analysis</a>
        </div>
      </section>

      <footer className="py-12 text-center text-[#b9cbe5] text-sm border-t border-white/10">
        © 2026 EPR Nexuss Solutions | Tyre Waste Recycling — Market Analysis
      </footer>
    </div>
    </>
  );
};

export default TyreMarketAnalysis;
