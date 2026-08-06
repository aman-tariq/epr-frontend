import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

// Framer Motion Variants for Fade In & Motion Effects
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

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
    // Light-theme compatible chart adjustments
    const gridColor = 'rgba(226, 232, 240, 0.8)'; // slate-200 equivalent
    const textColor = '#64748b'; // slate-500 equivalent

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
          backgroundColor: ['#38bdf8', '#5AC361', '#f59e0b', '#a855f7', '#f97316'],
          borderColor: '#ffffff',
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
          backgroundColor: 'rgba(90, 195, 97, 0.1)',
          borderColor: '#5AC361',
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
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className=" mx-auto px-1 md:px-1 mt-[100px] py-6 md:py-6">

        

        {/* Two-Column Layout Wrapper */}
        <div className="lg:flex lg:gap-4 lg:items-start">
          <div>
            {/* HERO */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero bg-gradient-to-br from-slate-100 via-white to-emerald-50/50 border border-brandGreen rounded-3xl p-5 md:p-10 mb-12 shadow-sm"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="badge inline-block bg-slate-100 border border-border text-slate-800 px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 max-w-full break-words text-center"
          >
            🔋 Recycling Market View | Present Batteries First
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-5xl font-bold font-display text-slate-900 leading-tight mb-6 break-words"
          >
            Market Analysis of Mobile, E-Rickshaw and Car Batteries in Recycling
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground text-sm md:text-lg max-w-3xl leading-relaxed"
          >
            The strongest recycling businesses are built on what is already moving through the market today. Mobile batteries, e-rickshaw batteries, and car batteries create the real collection base.
          </motion.p>
        </motion.div>
          
          {/* Main Content Column */}
          <div className="flex-1 space-y-12 overflow-hidden">

            {/* Current Market Overview */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="card bg-gradient-to-br from-slate-100 via-white to-emerald-50/50 bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm"
            >
              <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">What This Market Looks Like Today</h2>
              <p className="text-muted-foreground text-sm md:text-base mb-6">
                The present battery market is driven by everyday use, repeated replacement cycles, and easy collection from local repair and service networks.
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                A smart plant builds a mix of small-volume, medium-volume, and structured replacement batteries to stay active throughout the year.
              </p>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
              >
                {[
                  { num: "3", label: "Current battery streams" },
                  { num: "1", label: "Collection network plan" },
                  { num: "2", label: "Market phases: present and future" },
                  { num: "100%", label: "Focus on practical feedstock" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i} 
                    variants={scaleUp}
                    whileHover={{ y: -4 }}
                    className="bg-slate-50 border border-border rounded-2xl p-4 md:p-6 text-center flex flex-col justify-center min-w-0 shadow-sm"
                  >
                    <div className="text-xl md:text-2xl font-bold text-slate-900 mb-2 truncate">{stat.num}</div>
                    <div className="text-xs md:text-sm text-muted-foreground break-words">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ==================== RESPONSIVE DASHBOARD SECTION ==================== */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="card bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm"
            >
              <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-4 text-center md:text-left break-words">Quick Visual Dashboard</h2>
              <p className="text-muted-foreground mb-8 text-sm md:text-base text-center md:text-left">A fast view of the three current battery streams and the future EV plan.</p>

              <div className="space-y-12">
                {/* Present Collection Strength */}
                <div className="min-w-0">
                  <h3 className="text-base md:text-xl font-semibold text-slate-900 mb-4 text-center md:text-left break-words whitespace-normal">Present Collection Strength</h3>
                  <div className="bg-slate-50 border border-border rounded-2xl p-4 md:p-6 shadow-sm">
                    <div className="h-64 md:h-72 relative w-full">
                      <canvas id="presentStrengthChart" />
                    </div>
                  </div>
                </div>

                {/* Collection Source Mix */}
                <div className="min-w-0">
                  <h3 className="text-base md:text-xl font-semibold text-slate-900 mb-4 text-center md:text-left break-words whitespace-normal">Collection Source Mix</h3>
                  <div className="bg-slate-50 border border-border rounded-2xl p-4 md:p-6 shadow-sm">
                    <div className="flex justify-center">
                      <div className="w-full max-w-[280px] sm:max-w-[340px] h-80 relative">
                        <canvas id="sourceMixChart" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Future Readiness Roadmap */}
                <div className="min-w-0">
                  <h3 className="text-base md:text-xl font-semibold text-slate-900 mb-4 text-center md:text-left break-words whitespace-normal">Future Readiness Roadmap</h3>
                  <div className="bg-slate-50 border border-border rounded-2xl p-4 md:p-6 shadow-sm">
                    <div className="h-52 md:h-64 relative w-full">
                      <canvas id="futureRoadmapChart" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ==================== MARKET PROFILE - RESPONSIVE BARS ==================== */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="card bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm"
            >
              <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">Market Profile of the Three Current Battery Types</h2>
              
              <div className="space-y-8">
                {[
                  { name: "Mobile batteries", strength: "92%", color: "from-[#38bdf8] to-[#5AC361]" },
                  { name: "E-rickshaw batteries", strength: "78%", color: "from-[#5AC361] to-[#f59e0b]" },
                  { name: "Car batteries", strength: "84%", color: "from-[#38bdf8] to-[#5AC361]" }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-3 text-sm md:text-base text-slate-700">
                      <span className="font-medium">{item.name}</span>
                      <span className="font-semibold text-slate-900">{item.strength}</span>
                    </div>
                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.strength }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ==================== DATABASE TABLE 1 - RESPONSIVE ==================== */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="card bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm"
            >
              <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">Database: Present Battery Segments</h2>
              
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[600px] text-xs md:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-border">
                      <th className="text-left p-4 font-semibold text-slate-900">Battery type</th>
                      <th className="text-left p-4 font-semibold text-slate-900">Main source</th>
                      <th className="text-left p-4 font-semibold text-slate-900">Collection cycle</th>
                      <th className="text-left p-4 font-semibold text-slate-900">Business priority</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700 divide-y divide-border">
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-slate-900">Mobile batteries</td>
                      <td className="p-4">Consumers, repair shops</td>
                      <td className="p-4">Small packs, frequent</td>
                      <td className="p-4"><span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-200">Very High</span></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-slate-900">E-rickshaw batteries</td>
                      <td className="p-4">Fleet operators, charging points</td>
                      <td className="p-4">Regular replacement cycle</td>
                      <td className="p-4"><span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-200">Very High</span></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-slate-900">Car batteries</td>
                      <td className="p-4">Garages, service stations</td>
                      <td className="p-4">Structured replacement cycle</td>
                      <td className="p-4"><span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-200">Very High</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Mobile, E-Rickshaw Details */}
            <div className="grid gap-8">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="card bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm"
              >
                <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">Mobile Batteries: The Small but Steady Stream</h2>
                <p className="text-muted-foreground text-sm md:text-base mb-6">
                  Mobile batteries come in small units, but they are available in large numbers. They help the plant build a dependable collection pipeline.
                </p>
                <div className="bg-slate-50 border border-border rounded-2xl p-5 text-sm md:text-base space-y-1 text-slate-700">
                  <div><strong className="text-slate-900">Best collection source:</strong> Repair shops</div>
                  <div><strong className="text-slate-900">Planning value:</strong> Steady volume</div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="card bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm"
              >
                <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">E-Rickshaw Batteries: The City Market Opportunity</h2>
                <p className="text-muted-foreground text-sm md:text-base mb-6">
                  E-rickshaw batteries are a strong recycling source because they follow city transport movement and create repeated replacement cycles.
                </p>
                <div className="bg-slate-50 border border-border rounded-2xl p-5 text-sm md:text-base space-y-1 text-slate-700">
                  <div><strong className="text-slate-900">Best collection source:</strong> Fleet operators</div>
                  <div><strong className="text-slate-900">Planning value:</strong> Repeatable source</div>
                </div>
              </motion.div>
            </div>

            {/* Car Batteries + Positioning */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="card bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm"
              >
                <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">Car Batteries: The Structured Channel</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Car batteries are one of the cleanest sources to organize because they move through service stations, garages, and dealerships.
                </p>
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="card bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm"
              >
                <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">How the Plant Should Position Itself</h2>
                <ul className="space-y-3 text-slate-700 text-sm md:text-base">
                  <li>• Focus on mobile, e-rickshaw, and car batteries first</li>
                  <li>• Build direct tie-ups with repair shops and fleet operators</li>
                  <li>• Use today’s market to prepare systems for EV batteries tomorrow</li>
                </ul>
              </motion.div>
            </div>

            {/* Case Study + Future Plan */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="card bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm"
              >
                <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">Case Study: City Collection Network</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  A practical recycling model connects mobile repair shops, e-rickshaw charging points, and car service centres in the same region.
                </p>
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="card bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm"
              >
                <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">Future Plan: EV Battery Readiness</h2>
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-3 gap-3">
                  {[
                    { phase: "Phase 1", title: "Build present collection base" },
                    { phase: "Phase 2", title: "Upgrade safety systems" },
                    { phase: "Phase 3", title: "Enter EV battery recycling" }
                  ].map((item, i) => (
                    <motion.div key={i} variants={scaleUp} whileHover={{ y: -3 }} className="bg-slate-50 border border-border rounded-2xl p-3 text-center flex flex-col justify-between min-w-0 shadow-sm">
                      <div className="text-xs font-semibold text-slate-900">{item.phase}</div>
                      <div className="text-[11px] md:text-xs text-muted-foreground font-medium mt-2 leading-tight break-words">{item.title}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* ==================== DATABASE TABLE 2 - RESPONSIVE ==================== */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="card bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm"
            >
              <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">Quick Database: Market Action Plan</h2>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[550px] text-xs md:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-border">
                      <th className="text-left p-4 font-semibold text-slate-900">Focus area</th>
                      <th className="text-left p-4 font-semibold text-slate-900">Current action</th>
                      <th className="text-left p-4 font-semibold text-slate-900">Future benefit</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700 divide-y divide-border">
                    <tr className="bg-white"><td className="p-4 font-medium text-slate-900">Mobile batteries</td><td className="p-4">Build shop-level collection</td><td className="p-4">Stable daily feedstock</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium text-slate-900">E-rickshaw batteries</td><td className="p-4">Sign fleet tie-ups</td><td className="p-4">Recurring bulk returns</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium text-slate-900">Car batteries</td><td className="p-4">Link garages</td><td className="p-4">Structured inflow</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium text-slate-900">EV readiness</td><td className="p-4">Plan safety & logistics</td><td className="p-4">Future growth capacity</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Conclusion */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ scale: 1.01 }}
              className="card bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 border border-border rounded-3xl p-5 md:p-10 text-center shadow-sm"
            >
              <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">Conclusion</h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                This market works best when the plant stays focused on present battery streams first. Mobile, e-rickshaw, and car batteries create the real collection base today — and they also help build the systems needed for EV batteries in the future.
              </p>
            </motion.div>

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