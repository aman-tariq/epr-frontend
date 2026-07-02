import React, { useEffect } from 'react';
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

const LithiumBatteryMarketAnalysis: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => initializeCharts();

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const initializeCharts = () => {
    const gridColor = 'rgba(34,52,83,0.6)';
    const textColor = '#a8b6d3';

    // Present Collection Strength Bar
    new (window as any).Chart(document.getElementById('presentStrengthChart'), {
      type: 'bar',
      data: {
        labels: ['Mobile batteries', 'E-rickshaw batteries', 'Car batteries'],
        datasets: [{
          label: 'Collection strength',
          data: [9.2, 7.8, 8.5],
          backgroundColor: '#38bdf8',
          borderRadius: 8
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { min: 0, max: 10, grid: { color: gridColor }, ticks: { color: textColor } },
          y: { grid: { color: 'transparent' }, ticks: { color: textColor } }
        }
      }
    });

    // Source Mix Doughnut
    new (window as any).Chart(document.getElementById('sourceMixChart'), {
      type: 'doughnut',
      data: {
        labels: ['Repair shops', 'Fleet operators', 'Service centres', 'Charging points', 'Dealerships'],
        datasets: [{
          data: [30, 24, 22, 12, 12],
          backgroundColor: ['#38bdf8', '#22c55e', '#f59e0b', '#a855f7', '#f97316'],
          borderColor: '#0b1729',
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: { position: 'bottom', labels: { color: textColor, boxWidth: 12, padding: 15 } }
        }
      }
    });

    // Future Roadmap Line
    new (window as any).Chart(document.getElementById('futureRoadmapChart'), {
      type: 'line',
      data: {
        labels: ['Now', 'Phase 1', 'Phase 2', 'Phase 3'],
        datasets: [{
          label: 'EV readiness score',
          data: [2, 5, 7, 10],
          tension: 0.4,
          fill: true,
          backgroundColor: 'rgba(34,197,94,0.15)',
          borderColor: '#22c55e',
          borderWidth: 3,
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor } },
          y: { min: 0, max: 10, grid: { color: gridColor }, ticks: { color: textColor, stepSize: 2 } }
        }
      }
    });
  };

  return (
    <>
      <Seo
        title="Lithium Battery Recycling Market Analysis India 2026 | Mobile, E-Rickshaw & Car Batteries"
        description="Comprehensive market analysis of lithium battery recycling in India. Focus on mobile batteries, e-rickshaw batteries, car batteries, collection strategies, pricing trends, and future EV battery readiness for profitable recycling business planning."
        keywords={[
          "Lithium Battery Recycling Market Analysis India",
          "Mobile Battery Recycling Market",
          "E-Rickshaw Battery Scrap Trading",
          "Car Battery Recycling Business",
          "Battery Scrap Collection Strategy India",
          "EV Battery Recycling Market Growth",
          "Lithium Ion Battery Scrap Price Trends",
          "How to Start Battery Recycling Plant India",
          "Battery Recycling Collection Network",
          "Present vs Future Battery Recycling Market",
          "E-Waste and Battery Recycling Opportunity 2026",
          "Profitable Battery Scrap Trading Guide"
        ]}
        url="https://eprnexuss.com/blog/lithium-battery-market-analysis"
        type="article"
      />
    <div className="min-h-screen bg-[#07111f] text-[#e8f0ff] font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-12">

        {/* HERO */}
        <div className="hero bg-gradient-to-br from-[#0f1c33] to-[#111f38] border border-[#38bdf8]/30 rounded-3xl p-5 md:p-10 md:p-16 mb-12">
          <div className="badge inline-block bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 max-w-full break-words text-center">
            🔋 Recycling Market View | Present Batteries First
          </div>
          <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-6 break-words">
            Market Analysis of Mobile, E-Rickshaw and Car Batteries in Recycling
          </h1>
          <p className="text-[#d1e2ff] text-sm md:text-lg max-w-3xl leading-relaxed">
            The strongest recycling businesses are built on what is already moving through the market today. Mobile batteries, e-rickshaw batteries, and car batteries create the real collection base.
          </p>
        </div>

        {/* Two-Column Layout Wrapper */}
        <div className="lg:flex lg:gap-10 lg:items-start">
          
          {/* Main Content Column */}
          <div className="flex-1 space-y-12 overflow-hidden">

            {/* Current Market Overview */}
            <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-5 md:p-10">
              <h2 className="text-xl md:text-3xl font-bold mb-6 break-words">What This Market Looks Like Today</h2>
              <p className="text-[#a8b6d3] text-sm md:text-base mb-6">
                The present battery market is driven by everyday use, repeated replacement cycles, and easy collection from local repair and service networks.
              </p>
              <p className="text-[#a8b6d3] text-sm md:text-base">
                A smart plant builds a mix of small-volume, medium-volume, and structured replacement batteries to stay active throughout the year.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {[
                  { num: "3", label: "Current battery streams" },
                  { num: "1", label: "Collection network plan" },
                  { num: "2", label: "Market phases: present and future" },
                  { num: "100%", label: "Focus on practical feedstock" }
                ].map((stat, i) => (
                  <div key={i} className="bg-[#111f38] border border-[#223453] rounded-2xl p-4 md:p-6 text-center flex flex-col justify-center min-w-0">
                    <div className="text-xl md:text-2xl font-bold text-[#38bdf8] mb-2 truncate">{stat.num}</div>
                    <div className="text-xs md:text-sm text-[#a8b6d3] break-words">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ==================== RESPONSIVE DASHBOARD SECTION ==================== */}
            <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-5 md:p-10">
              <h2 className="text-xl md:text-3xl font-bold mb-4 text-center md:text-left break-words">Quick Visual Dashboard</h2>
              <p className="text-[#a8b6d3] mb-8 text-sm md:text-base text-center md:text-left">A fast view of the three current battery streams and the future EV plan.</p>

              <div className="space-y-12">
                {/* Present Collection Strength */}
                <div className="min-w-0">
                  <h3 className="text-base md:text-xl font-semibold mb-4 text-center md:text-left break-words whitespace-normal">Present Collection Strength</h3>
                  <div className="bg-[#111f38] rounded-2xl p-4 md:p-6">
                    <div className="h-64 md:h-72 relative w-full">
                      <canvas id="presentStrengthChart" />
                    </div>
                  </div>
                </div>

                {/* Collection Source Mix */}
                <div className="min-w-0">
                  <h3 className="text-base md:text-xl font-semibold mb-4 text-center md:text-left break-words whitespace-normal">Collection Source Mix</h3>
                  <div className="bg-[#111f38] rounded-2xl p-4 md:p-6">
                    <div className="flex justify-center">
                      <div className="w-full max-w-[280px] sm:max-w-[340px] h-80 relative">
                        <canvas id="sourceMixChart" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Future Readiness Roadmap */}
                <div className="min-w-0">
                  <h3 className="text-base md:text-xl font-semibold mb-4 text-center md:text-left break-words whitespace-normal">Future Readiness Roadmap</h3>
                  <div className="bg-[#111f38] rounded-2xl p-4 md:p-6">
                    <div className="h-52 md:h-64 relative w-full">
                      <canvas id="futureRoadmapChart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================== MARKET PROFILE - RESPONSIVE BARS ==================== */}
            <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-5 md:p-10">
              <h2 className="text-xl md:text-3xl font-bold mb-6 break-words">Market Profile of the Three Current Battery Types</h2>
              
              <div className="space-y-8">
                {[
                  { name: "Mobile batteries", strength: "92%", color: "from-[#38bdf8] to-[#22c55e]" },
                  { name: "E-rickshaw batteries", strength: "78%", color: "from-[#22c55e] to-[#f59e0b]" },
                  { name: "Car batteries", strength: "84%", color: "from-[#38bdf8] to-[#22c55e]" }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-3 text-sm md:text-base">
                      <span className="font-medium">{item.name}</span>
                      <span className="font-semibold text-[#38bdf8]">{item.strength}</span>
                    </div>
                    <div className="h-4 bg-[#23304a] rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all`}
                        style={{ width: item.strength }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ==================== DATABASE TABLE 1 - RESPONSIVE ==================== */}
            <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-5 md:p-10">
              <h2 className="text-xl md:text-3xl font-bold mb-6 break-words">Database: Present Battery Segments</h2>
              
              <div className="overflow-x-auto rounded-2xl border border-[#223453]">
                <table className="w-full min-w-[600px] text-xs md:text-sm">
                  <thead>
                    <tr className="bg-[#111f38]">
                      <th className="text-left p-4 font-semibold text-white">Battery type</th>
                      <th className="text-left p-4 font-semibold text-white">Main source</th>
                      <th className="text-left p-4 font-semibold text-white">Collection cycle</th>
                      <th className="text-left p-4 font-semibold text-white">Business priority</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#a8b6d3] divide-y divide-[#223453]">
                    <tr>
                      <td className="p-4 font-medium text-white">Mobile batteries</td>
                      <td className="p-4">Consumers, repair shops</td>
                      <td className="p-4">Small packs, frequent</td>
                      <td className="p-4"><span className="bg-emerald-900/80 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold">Very High</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">E-rickshaw batteries</td>
                      <td className="p-4">Fleet operators, charging points</td>
                      <td className="p-4">Regular replacement cycle</td>
                      <td className="p-4"><span className="bg-emerald-900/80 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold">Very High</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">Car batteries</td>
                      <td className="p-4">Garages, service stations</td>
                      <td className="p-4">Structured replacement cycle</td>
                      <td className="p-4"><span className="bg-emerald-900/80 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold">Very High</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile, E-Rickshaw Details */}
            <div className="grid gap-8">
              <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-5 md:p-10">
                <h2 className="text-xl md:text-3xl font-bold mb-6 break-words">Mobile Batteries: The Small but Steady Stream</h2>
                <p className="text-[#a8b6d3] text-sm md:text-base mb-6">
                  Mobile batteries come in small units, but they are available in large numbers. They help the plant build a dependable collection pipeline.
                </p>
                <div className="bg-[#111f38] rounded-2xl p-5 text-sm md:text-base space-y-1">
                  <div><strong>Best collection source:</strong> Repair shops</div>
                  <div><strong>Planning value:</strong> Steady volume</div>
                </div>
              </div>

              <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-5 md:p-10">
                <h2 className="text-xl md:text-3xl font-bold mb-6 break-words">E-Rickshaw Batteries: The City Market Opportunity</h2>
                <p className="text-[#a8b6d3] text-sm md:text-base mb-6">
                  E-rickshaw batteries are a strong recycling source because they follow city transport movement and create repeated replacement cycles.
                </p>
                <div className="bg-[#111f38] rounded-2xl p-5 text-sm md:text-base space-y-1">
                  <div><strong>Best collection source:</strong> Fleet operators</div>
                  <div><strong>Planning value:</strong> Repeatable source</div>
                </div>
              </div>
            </div>

            {/* Car Batteries + Positioning */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-5 md:p-10">
                <h2 className="text-xl md:text-3xl font-bold mb-6 break-words">Car Batteries: The Structured Channel</h2>
                <p className="text-[#a8b6d3] text-sm md:text-base">
                  Car batteries are one of the cleanest sources to organize because they move through service stations, garages, and dealerships.
                </p>
              </div>
              <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-5 md:p-10">
                <h2 className="text-xl md:text-3xl font-bold mb-6 break-words">How the Plant Should Position Itself</h2>
                <ul className="space-y-3 text-[#a8b6d3] text-sm md:text-base">
                  <li>• Focus on mobile, e-rickshaw, and car batteries first</li>
                  <li>• Build direct tie-ups with repair shops and fleet operators</li>
                  <li>• Use today’s market to prepare systems for EV batteries tomorrow</li>
                </ul>
              </div>
            </div>

            {/* Case Study + Future Plan */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-5 md:p-10">
                <h2 className="text-xl md:text-3xl font-bold mb-6 break-words">Case Study: City Collection Network</h2>
                <p className="text-[#a8b6d3] text-sm md:text-base">
                  A practical recycling model connects mobile repair shops, e-rickshaw charging points, and car service centres in the same region.
                </p>
              </div>
              <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-5 md:p-10">
                <h2 className="text-xl md:text-3xl font-bold mb-6 break-words">Future Plan: EV Battery Readiness</h2>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { phase: "Phase 1", title: "Build present collection base" },
                    { phase: "Phase 2", title: "Upgrade safety systems" },
                    { phase: "Phase 3", title: "Enter EV battery recycling" }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#111f38] border border-[#223453] rounded-2xl p-3 text-center flex flex-col justify-between min-w-0">
                      <div className="text-xs font-semibold text-[#38bdf8]">{item.phase}</div>
                      <div className="text-[11px] md:text-xs text-[#a8b6d3] font-medium mt-2 leading-tight break-words">{item.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ==================== DATABASE TABLE 2 - RESPONSIVE ==================== */}
            <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-5 md:p-10">
              <h2 className="text-xl md:text-3xl font-bold mb-6 break-words">Quick Database: Market Action Plan</h2>
              <div className="overflow-x-auto rounded-2xl border border-[#223453]">
                <table className="w-full min-w-[550px] text-xs md:text-sm">
                  <thead>
                    <tr className="bg-[#111f38]">
                      <th className="text-left p-4 font-semibold text-white">Focus area</th>
                      <th className="text-left p-4 font-semibold text-white">Current action</th>
                      <th className="text-left p-4 font-semibold text-white">Future benefit</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#a8b6d3]">
                    <tr className="border-t border-[#223453]"><td className="p-4 font-medium text-white">Mobile batteries</td><td className="p-4">Build shop-level collection</td><td className="p-4">Stable daily feedstock</td></tr>
                    <tr className="border-t border-[#223453]"><td className="p-4 font-medium text-white">E-rickshaw batteries</td><td className="p-4">Sign fleet tie-ups</td><td className="p-4">Recurring bulk returns</td></tr>
                    <tr className="border-t border-[#223453]"><td className="p-4 font-medium text-white">Car batteries</td><td className="p-4">Link garages</td><td className="p-4">Structured inflow</td></tr>
                    <tr className="border-t border-[#223453]"><td className="p-4 font-medium text-white">EV readiness</td><td className="p-4">Plan safety & logistics</td><td className="p-4">Future growth capacity</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Conclusion */}
            <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-5 md:p-10 text-center">
              <h2 className="text-xl md:text-3xl font-bold mb-6 break-words">Conclusion</h2>
              <p className="text-[#a8b6d3] text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                This market works best when the plant stays focused on present battery streams first. Mobile, e-rickshaw, and car batteries create the real collection base today — and they also help build the systems needed for EV batteries in the future.
              </p>
            </div>

          </div>

          {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0 self-start" style={{ position: "sticky", top: "7rem" }}>
            <StickyContactForm />
          </aside>

        </div>
      </div>
    </div>
    </>
  );
};

export default LithiumBatteryMarketAnalysis;