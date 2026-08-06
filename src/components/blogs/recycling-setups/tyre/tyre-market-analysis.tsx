import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

const fadeInVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

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
    // Light theme chart configuration tweaks
    const tc = { color: "#4a5e74" };
    const grid = "rgba(0, 0, 0, 0.05)";
    const leg = { color: "#334155" };

    // Market Size Chart
    new (window as any).Chart(document.getElementById("marketSizeChart"), {
      type: "bar",
      data: {
        labels: ["2019","2020","2021","2022","2023","2024","2025E","2026E","2027E","2028E","2029E","2030E"],
        datasets: [
          {
            label: "Market Size (₹ Crore)",
            data: [4200,4550,5100,6000,7400,9200,10600,12100,13900,16000,18400,21400],
            backgroundColor: "rgba(39,192,138,0.2)",
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
          { label: "ELT Generated (Lakh MT)", data: [9.4,10.1,10.6,11.4,12.3,13.4,15.2,16.4], backgroundColor: "rgba(77,182,255,0.25)", borderColor: "#4db6ff", borderWidth: 2, borderRadius: 5 },
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
          { label: "Crumb Rubber", data: [100,113,131,154,183,212], borderColor: "#27c08a", backgroundColor: "rgba(39,192,138,0.05)", fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: "#27c08a", pointBorderColor: "#fff", pointBorderWidth: 2 },
          { label: "Pyrolysis Oil (TDO)", data: [100,118,145,178,218,262], borderColor: "#4db6ff", backgroundColor: "rgba(77,182,255,0.05)", fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: "#4db6ff", pointBorderColor: "#fff", pointBorderWidth: 2 },
          { label: "Recovered Carbon Black", data: [100,122,160,210,290,382], borderColor: "#f3bc4a", backgroundColor: "rgba(243,188,74,0.04)", fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: "#f3bc4a", pointBorderColor: "#fff", pointBorderWidth: 2, borderDash: [5,4] },
          { label: "EPR Compliance Processing", data: [100,140,220,340,500,720], borderColor: "#a78bfa", backgroundColor: "rgba(167,139,250,0.04)", fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: "#a78bfa", pointBorderColor: "#fff", pointBorderWidth: 2, borderDash: [3,3] },
          { label: "Steel Wire Scrap", data: [100,105,112,116,121,128], borderColor: "#64748b", backgroundColor: "rgba(100,116,139,0.03)", fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: "#64748b", pointBorderColor: "#fff", pointBorderWidth: 2 }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { ...leg, font: { size: 12 } } } },
        scales: {
          x: { ticks: tc, grid: { color: grid } },
          y: { beginAtZero: false, ticks: tc, grid: { color: grid }, title: { display: true, text: "Index (2020 = 100)", color: "#4a5e74" } }
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
          backgroundColor: ["#4db6ff","#27c08a","#94a3b8","#52d7a4","#a78bfa","#f3bc4a","#f06055"],
          borderColor: "#ffffff",
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
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
          { label: "Commodity-Grade Margin (%)", data: [18,22,24,14,12,20], backgroundColor: "#94a3b8", borderRadius: 7, borderWidth: 0 },
          { label: "Specification-Grade Margin (%)", data: [34,38,42,55,22,30], backgroundColor: "#27c08a", borderRadius: 7, borderWidth: 0 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: tc, grid: { color: grid } },
          y: { beginAtZero: true, max: 60, ticks: { ...tc, callback: (v: number) => v + "%" }, grid: { color: grid } }
        }
      }
    });
  };

  return (
    <>
      <Seo
        title="Tyre Waste Recycling Market Analysis India 2026 | Crumb Rubber, Pyrolysis Oil, rCB"
        description="Comprehensive Tyre Waste Recycling Market Analysis for India 2026. Detailed insights on market size (₹9,200 Cr+), growth (14.8% CAGR), ELT vs recycling gap, segment margins, demand drivers, and best entry strategies for new tyre recycling plants."
        keywords={["Tyre Waste Recycling Market Analysis India", "Tyre Recycling Market Size Growth 2026", "Crumb Rubber Market India"]}
        url="https://eprnexuss.com/blog/tyre-market-analysis"
        type="article"
      />
      
      {/* Outer wrapper converted to clean light slate */}
      <div className="min-h-screen mt-[90px] bg-[#f8fafc] text-[#1e293b] font-sans">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-1 py-8 flex flex-col lg:flex-row gap-1 items-stretch">
          
          {/* Main Content Stream */}
          <div className="flex-1 min-w-0 w-full lg:max-w-[calc(100%-352px)]">
            
            {/* HERO — Soft light blue gradient context with clear borders */}
            <motion.header 
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className="pt-12 pb-16 bg-gradient-to-br from-[#f0f6ff] via-[#f8fafc] to-[#f0f6ff] rounded-3xl px-6 sm:px-10 border border-[#d0e1f9] mb-12 shadow-sm"
            >
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#27c08a]/10 border border-[#27c08a]/30 text-[#15803d] text-sm font-bold mb-6">
                  Market Analysis — Tyre Waste Recycling
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-[-0.03em] mb-8 text-[#0f172a]">
                  The Market Is Wide Open.<br className="hidden sm:inline" /> Your Segment Is Already Waiting.
                </h1>
                <p className="text-lg sm:text-xl text-[#475569] max-w-2xl mb-10 leading-relaxed">
                  Every year, India discards over 150 million end-of-life tyres. Most go nowhere near a formal recycling system. 
                  That is not a waste problem — that is an uncaptured market.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-[#27c08a] to-[#4db6ff] text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-md">Talk to Our Team</a>
                  <a href="#case-study" className="px-8 py-4 border border-[#cbd5e1] text-[#334155] bg-white hover:bg-[#f1f5f9] rounded-2xl font-semibold transition-colors">See a Real Entry Story</a>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <div className="bg-white border border-[#d0e1f9] rounded-3xl p-6 sm:p-8 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-[#1e293b]">Key Market Metrics (2024)</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#f0f6ff] border border-[#e2e8f0] rounded-2xl p-4">
                      <div className="text-2xl sm:text-3xl font-bold text-[#27c08a]">₹9,200 Cr+</div>
                      <div className="text-xs text-[#64748b] mt-1">Market Size (2024)</div>
                    </div>
                    <div className="bg-[#f0f6ff] border border-[#e2e8f0] rounded-2xl p-4">
                      <div className="text-2xl sm:text-3xl font-bold text-[#4db6ff]">14.8% CAGR</div>
                      <div className="text-xs text-[#64748b] mt-1">Projected Thru 2030</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-[#d0e1f9] rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-[#1e293b]">Segments Covered</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Crumb Rubber","Pyrolysis Oil (TDO)","Carbon Black (rCB)","Steel Wire Scrap","Tyre-Derived Fuel","EPR Compliance"].map((s,i) => (
                      <span key={i} className="px-3 py-1.5 bg-[#f1f5f9] border border-[#e2e8f0] rounded-full text-xs font-medium text-[#475569]">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.header>

            {/* MARKET SIZE */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              id="market-size" 
              className="py-12 border-b border-[#e2e8f0]"
            >
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 tracking-tight text-[#0f172a]">Understanding the Size and Shape of the Tyre Recycling Market</h2>
              <p className="text-[#475569] text-lg mb-8 max-w-3xl">
                The tyre waste recycling market in India is a multi-thousand-crore industry growing at double-digit rates structural shifts driven by formalisation.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[
                  { value: "₹9,200 Cr", label: "Estimated market size in India (2024)", border: "border-[#27c08a]" },
                  { value: "₹21,400 Cr", label: "Projected market size by 2030", border: "border-[#4db6ff]" },
                  { value: "1.52 Mn MT", label: "Annual ELT generation volume", border: "border-[#cbd5e1]" },
                  { value: "28% Formal", label: "Volume entering managed recycling pipelines", border: "border-[#cbd5e1]" }
                ].map((kpi, i) => (
                  <div key={i} className={`bg-white border ${kpi.border} rounded-2xl p-6 shadow-sm`}>
                    <div className="text-2xl sm:text-3xl font-bold mb-1 text-[#0f172a]">{kpi.value}</div>
                    <div className="text-xs text-[#64748b] leading-snug">{kpi.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 sm:p-8 mb-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-[#1e293b]">India Tyre Waste Recycling Market Size — Actual and Projected (₹ Crore, 2019–2030)</h3>
                <canvas id="marketSizeChart" className="w-full" height="180"></canvas>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 sm:p-8 shadow-sm">
                  <h4 className="text-lg font-semibold mb-4 text-[#166534]">Why the market is growing now</h4>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    India has crossed 300 million registered vehicles with automotive generation compound curves shifting upward. Mandatory EPR rules create structural pull-through obligations on OEM manufacturers.
                  </p>
                </div>
                <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 sm:p-8 shadow-sm">
                  <h4 className="text-lg font-semibold mb-4 text-[#0369a1]">Where the informal market still dominates</h4>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    Nearly 72% of ELT volume historically defaults through informal channels. Transforming this flow represents predictable feedstock acquisition pipelines for scaled formal industry stakeholders.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 sm:p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-[#1e293b]">ELT Generation vs. Formal Recycling Capacity — India (2018–2025)</h3>
                <canvas id="gapChart" className="w-full" height="180"></canvas>
              </div>
            </motion.section>

            {/* TARGET SEGMENTS */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              id="segments" 
              className="py-12 border-b border-[#e2e8f0]"
            >
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 tracking-tight text-[#0f172a]">The Five Target Segments Every Tyre Recycler Needs to Understand</h2>
              <p className="text-[#475569] mb-8 max-w-2xl">Each product derivative yields custom commercial end-buyer parameters, margin behaviors, and barrier-to-entry infrastructure requirements.</p>

              <div className="space-y-6">
                {[
                  { border: "border-[#27c08a]", bg: "bg-[#27c08a]/5", title: "Crumb Rubber and Rubber Powder", badge: "HIGHEST VOLUME", content: "Crumb rubber processes yield roughly 35–42% of output tyre weight matrices. National highways, custom infra asphalt additives, and localized multi-sport athletic flooring generate predictable off-take demands." },
                  { border: "border-[#4db6ff]", bg: "bg-[#4db6ff]/5", title: "Pyrolysis Oil (TDO)", badge: "HIGHEST PRICE VELOCITY", content: "Acts as directly substitute industrial furnace fuel targeting multi-kiln cement production plants, structural steel mills, and glassworks processing furnaces. Holds substantial arbitrage benefits over conventional industrial heating oil profiles." },
                  { border: "border-[#f3bc4a]", bg: "bg-amber-50/50", title: "Recovered Carbon Black (rCB)", badge: "HIGHEST UPSIDE POTENTIAL", content: "Represents the highest upside technological play within deep industrial circularity ecosystems. Technical standardization, micronization processing tiers, and consistent volatile reduction are key parameters." },
                  { border: "border-[#f06055]", bg: "bg-rose-50/50", title: "Steel Wire Scrap", badge: "MOST PREDICTABLE", content: "Comprising roughly 15–20% of commercial vehicle tire profiles by gross weight. High metal purity extraction allows immediate processing flows into secondary regional steel casting foundries." },
                  { border: "border-[#a78bfa]", bg: "bg-purple-50/50", title: "EPR Compliance Processing and Tyre-Derived Fuel (TDF)", badge: "REGULATORY GROWTH SEGMENT", content: "Producers pay transparent processing fees directly to registered recyling entities to mitigate legal liability mandates. Creates highly predictable multi-tier revenue structures independent of strict base material asset valuation." }
                ].map((seg, idx) => (
                  <div key={idx} className={`bg-white border ${seg.border} border-l-4 rounded-2xl p-6 sm:p-8 shadow-sm`}>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-[#f1f5f9] text-[#475569] mb-3">{seg.badge}</span>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#0f172a]">{seg.title}</h3>
                    <p className="text-[#475569] text-sm sm:text-base leading-relaxed">{seg.content}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* DEMAND DRIVERS & RESPONSIVE CHARTS MIX */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              id="demand-drivers" 
              className="py-12 border-b border-[#e2e8f0]"
            >
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 tracking-tight text-[#0f172a]">What Is Driving Demand Across Every Segment</h2>
              <p className="text-[#475569] text-base mb-8 max-w-2xl">Macro trends and regulatory infrastructure adjustments supporting the rapid capital cycle evolution of structural processing infrastructure.</p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {[
                  "National Highway Policy and Rubberised Bitumen",
                  "Industrial Fuel Cost Pressure Alternatives",
                  "EPR Compliance Mandates for Registered Importers",
                  "Virgin Carbon Black Price Supply Elasticity Volatility",
                  "Urban Infrastructure and Sports Turf Facility Growth",
                  "Global Export Recycling Pipeline Activation"
                ].map((title, i) => (
                  <div key={i} className="bg-white border border-[#cbd5e1] rounded-2xl p-5 shadow-sm hover:border-[#4db6ff] transition-colors">
                    <h3 className="font-semibold text-base mb-2 text-[#0f172a]">{title}</h3>
                    <p className="text-[#64748b] text-xs leading-normal">Key systemic policy adjustments changing asset procurement models across tier-1 B2B off-takers.</p>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 sm:p-8 mb-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-[#1e293b]">Demand Growth Index by Tyre Recycling Segment — India (2020–2025)</h3>
                <canvas id="demandIndexChart" className="w-full" height="180"></canvas>
              </div>

              {/* TWO CHART FLEX RECONCILIATION */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <div className="bg-white border border-[#d0e1f9] rounded-3xl p-5 sm:p-6 shadow-sm">
                  <h3 className="text-[#1e293b] text-lg font-semibold mb-6 text-center">
                    Tyre Recycling Market Revenue Share — India 2024
                  </h3>
                  <div className="flex justify-center mb-6">
                    <div className="w-full max-w-[220px] aspect-square">
                      <canvas id="marketShareChart" className="w-full h-full"></canvas>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      { label: "Pyrolysis Oil / TDO", percent: "33%", color: "#4db6ff" },
                      { label: "Crumb Rubber", percent: "31%", color: "#27c08a" },
                      { label: "Steel Wire Scrap", percent: "12%", color: "#94a3b8" },
                      { label: "Rubber Powder", percent: "11%", color: "#52d7a4" },
                      { label: "Tyre-Derived Fuel", percent: "7%", color: "#f3bc4a" },
                      { label: "EPR Compliance", percent: "4%", color: "#a78bfa" },
                      { label: "rCB", percent: "2%", color: "#f06055" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-2.5">
                        <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }} />
                        <div className="flex-1 min-w-0">
                          <p className="text-[#334155] text-xs truncate">{item.label}</p>
                        </div>
                        <span className="font-bold text-[#0f172a] text-xs">{item.percent}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-[#d0e1f9] rounded-3xl p-5 sm:p-6 flex flex-col shadow-sm">
                  <h3 className="text-[#1e293b] text-lg font-semibold mb-6 text-center">
                    Gross Margin Range by Segment
                  </h3>
                  <div className="flex-1 min-h-[260px] relative">
                    <canvas id="marginChart" className="absolute inset-0 w-full h-full"></canvas>
                  </div>
                  <div className="flex justify-center gap-6 mt-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#94a3b8] rounded-sm"></div>
                      <span className="text-[#475569]">Commodity Grade</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#27c08a] rounded-sm"></div>
                      <span className="text-[#475569]">Specification Grade</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* CASE STUDY SECTION */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              id="case-study" 
              className="py-12 border-b border-[#e2e8f0]"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-4xl font-bold mb-4 tracking-tight text-[#0f172a]">Case Study: How One Operator Found the Right Entry Point</h2>
                <p className="text-[#475569] text-base max-w-3xl">
                  A first-generation entrepreneur based out of Maharashtra possessed unutilized manufacturing land plots, available structural capital lines, and clear processing ambitions but required optimization modeling before deploying heavy hardware budgets.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-[#d0e1f9] rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-[#166534]">What the market analysis revealed</h3>
                  <ul className="space-y-3 text-sm text-[#475569]">
                    <li className="flex gap-2">
                      <span className="text-[#27c08a] font-bold">•</span>
                      <span>Target site located roughly 85 km from dominant cement clusters — functional for TDO logistics but asset-prohibitive for raw volume TDF strategies.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#27c08a] font-bold">•</span>
                      <span>Three active, competing regional pyrolysis processing lines already battling for baseline feedstock tyre acquisition resources locally.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#27c08a] font-bold">•</span>
                      <span>Local crumb rubber demand matrices structurally under-serviced for high-grade, fully de-wired mesh configurations.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-[#d0e1f9] rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-[#0369a1]">Market-driven entry strategy recommended</h3>
                  <ul className="space-y-3 text-sm text-[#475569]">
                    <li className="flex gap-2">
                      <span className="text-[#4db6ff] font-bold">•</span>
                      <span>De-risk upfront exposure via clean mechanical crumbing processing avenues rather than thermal batch plant configurations initially.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4db6ff] font-bold">•</span>
                      <span>Target exact 30-mesh processing criteria parameters required by localized major highway modernization tender road builders.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4db6ff] font-bold">•</span>
                      <span>Secure structural platform compliance certifications to yield monetization from formal EPR offset certificates during Phase 1.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#f0f6ff] border border-[#cbd5e1] rounded-2xl p-6">
                <h4 className="font-semibold text-base mb-2 text-[#0f172a]">Strategic Analytical Summary</h4>
                <p className="text-[#334155] text-sm leading-relaxed">
                  Market sizing operations protect corporate developers from capital deployment confirmation biases. Transitioning execution targets away from crowded local processing methods toward verified regional supply voids minimizes deployment stabilization risk factors.
                </p>
              </div>
            </motion.section>

            {/* FAQ SECTION */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              id="faq" 
              className="py-12"
            >
              <h2 className="text-2xl sm:text-4xl font-bold mb-6 tracking-tight text-center text-[#0f172a]">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  {
                    q: "Is pyrolysis always the best entry point for a new tyre recycling plant?",
                    a: "No. Pyrolysis systems involve specific operational regulatory permits, emission processing steps, and highly localized competitive procurement environments. Mechanical crumbing infrastructure often yields accelerated cash flow generation properties at lowered initial asset-exposure boundaries."
                  },
                  {
                    q: "How competitive is the crumb rubber market in India right now?",
                    a: "Commodity-grade unseparated tire chips show standardized pricing competition. However, specialized certified multi-mesh configuration profiles completely separated from wire composites carry high pricing flexibility with fewer institutional sources."
                  },
                  {
                    q: "What does EPR registration actually mean for a tyre recycling plant?",
                    a: "Registration enables verified structural volume recyclers to upload evidence tracking logs onto unified government portals, minting official compliance certificates which can be legally traded to premium manufacturers seeking regulatory compliance offsets."
                  }
                ].map((faq, i) => (
                  <details key={i} className="bg-white border border-[#cbd5e1] rounded-2xl p-5 sm:p-6 group hover:border-[#4db6ff] transition-all shadow-sm">
                    <summary className="font-semibold text-base sm:text-lg cursor-pointer flex justify-between items-center text-[#1e293b] list-none">
                      {faq.q}
                      <span className="text-xl text-[#27c08a] group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <p className="mt-4 text-[#475569] text-sm leading-relaxed border-t border-[#e2e8f0] pt-4">{faq.a}</p>
                  </details>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              id="contact" 
              className="bg-gradient-to-br from-white via-[#f0f6ff] to-[#e0ffd0]/50 text-[#0f172a] border-2 border-[#27c08a] p-8 sm:p-12 rounded-3xl text-center mt-12 shadow-sm"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Ready to Find Your Place in the Tyre Recycling Market?</h2>
              <p className="text-[#334155] text-sm sm:text-base max-w-xl mx-auto mb-6 font-medium">
                Do not base multi-crore machinery acquisitions on assumptions. Acquire localized supply and baseline off-take tracking metrics tailored specifically to your geographical zone.
              </p>
              <a href="mailto:info@eprnexuss.com" className="inline-block px-8 py-4 bg-[#0f172a] text-white font-bold text-base rounded-xl hover:bg-[#1e293b] transition-colors shadow-lg">Request a Market Analysis</a>
            </motion.section>

          </div>

          {/* STICKY SIDEBAR COLUMN — Coordinated with Light blue borders */}
          <aside className="hidden lg:block shrink-0 w-[320px] sticky top-24">
            <div className="sticky top-28 px-2">
              <StickyContactForm />
            </div>
          </aside>

        </div>
      </div>
    </>
  );
};

export default TyreMarketAnalysis;