import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

// Framer Motion Animation Variants
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

const LithiumBatteryApprovals: React.FC = () => {
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
    const gridC = 'rgba(15,23,42,0.08)';
    const textC = '#5B6B7A';

    // Growth Chart
    new (window as any).Chart(document.getElementById('growthChart'), {
      type: 'bar',
      data: {
        labels: ['2023','2024','2025','2026','2027','2028','2029','2030'],
        datasets: [
          { label: 'Waste (000 MT)', data: [50,65,80,96,115,136,158,182], backgroundColor: '#5AC361', borderRadius: 6 },
          { label: 'Market (₹ Cr)', data: [2200,3600,5200,7400,9800,12800,16000,18000], backgroundColor: '#3B82F6', borderRadius: 6 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: textC } } },
        scales: {
          x: { grid: { color: gridC }, ticks: { color: textC } },
          y: { grid: { color: gridC }, ticks: { color: textC } }
        }
      }
    });

    // Case Study Chart
    new (window as any).Chart(document.getElementById('caseChart'), {
      type: 'bar',
      data: {
        labels: ['CTE','HW Auth','Factory Lic.','Fire NOC','EPR Reg.','CTO'],
        datasets: [
          { label: 'ADS Recycling (Parallel)', data: [3,3,2,2,1,2], backgroundColor: '#5AC361', borderRadius: 6 },
          { label: 'Industry Average (Sequential)', data: [5,5,4,3,2,3], backgroundColor: '#BFE8C2', borderRadius: 6 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: textC } } },
        scales: {
          x: { grid: { color: gridC }, ticks: { color: textC } },
          y: { grid: { color: gridC }, ticks: { color: textC }, title: { display: true, text: 'Months', color: textC } }
        }
      }
    });
  };

  return (
    <>
      <Seo
        title="Lithium Battery Recycling Plant Approvals & CPCB Authorization Guide 2026"
        description="Complete guide to Lithium-Ion Battery Recycling Plant Approvals in India. Learn how to get CPCB Authorization, Consent to Establish (CTE), Consent to Operate (CTO), Hazardous Waste Authorisation, Fire NOC and full regulatory roadmap for starting a profitable lithium battery recycling business."
        keywords={[
          "Lithium Battery Recycling Plant Approvals",
          "CPCB Authorization for Battery Recycling",
          "Lithium Ion Battery Recycling Plant License",
          "Consent to Establish CTE Battery Recycling",
          "Consent to Operate CTO Lithium Battery Plant",
          "Hazardous Waste Authorisation for Battery Recycling",
          "How to start Lithium Battery Recycling Plant",
          "Lithium Battery Recycling Compliance Guide",
          "Battery Waste Management Rules 2022",
          "Lithium Battery Recycling Project Approvals",
          "Fire NOC for Battery Recycling Plant"
        ]}
        url="https://eprnexuss.com/blog/lithium-battery-approvals"
        type="article"
      />
      <div className="min-h-screen bg-background text-foreground font-sans">
       

        {/* Two-Column Main Content Container */}
        <div className="max-w-8xl mx-auto px-1 md:px-2 py-6 md:py-12 lg:flex lg:gap-4 lg:items-start">
          <div>
           {/* HERO */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero bg-gradient-to-br from-[#F3FBF3] via-white to-[#EEF6FF] border border-border rounded-3xl p-2 md:p-10 mx-1 md:mx-auto md:mb-2 max-w-8xl md:mt-[70px] mt-[60px] relative overflow-hidden shadow-sm"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brandGreen/10 rounded-full blur-3xl" />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-eyebrow inline-flex items-center gap-2 bg-brandGreen/10 border border-brandGreen/30 text-[#2F8A3A] text-xs font-bold tracking-widest px-5 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-brandGreen rounded-full animate-pulse" /> EPR NEXUSS — INDIA'S BATTERY RECYCLING GUIDE 2026
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-2xl md:text-5xl font-bold leading-tight mb-6 text-[#10241A]"
          >
            Dead batteries aren't waste —<br />
            <span className="text-brandGreen">they're a goldmine waiting for the right approvals.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground max-w-3xl leading-relaxed mb-8"
          >
            India's EV surge is producing more battery waste than the country can currently handle.
            The entrepreneurs who move through the regulatory process quickly — and correctly — will build the most profitable green businesses of this decade.
          </motion.p>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3"
          >
            {["Complete Licence Checklist", "8-Month Approval Roadmap", "Live Market Data", "Real Case Study"].map((pill, i) => (
              <motion.span 
                key={i} 
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pill px-5 py-2 bg-white border border-border shadow-sm text-sm rounded-2xl text-[#2C3B33] font-medium cursor-pointer"
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Meta */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-5xl mx-auto px-6 py-6 flex flex-wrap gap-6 text-sm text-muted-foreground border-b border-border"
        >
          <span>By <span className="text-brandGreen font-semibold">EPR Nexuss</span></span>
          <span>May 2026</span>
          <span>8 min read</span>
          <span>Regulatory Guide · India</span>
        </motion.div>

          {/* Main Content Body */}
          <div className="flex-1 min-w-0 space-y-20">

            {/* MARKET SECTION */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="font-display text-3xl font-bold mb-4 text-[#10241A]">
                Why this opportunity won't wait
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-8 leading-relaxed">
                India generated around 50,000 metric tonnes of lithium-ion battery waste in 2023. By 2030, that number will exceed 180,000 MT.
              </motion.p>

              <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 mx-2">
                {[
                  { value: "₹18K Cr", label: "India Li-ion recycling market value by 2030", color: "text-brandGreen" },
                  { value: "3×", label: "Battery waste volume growth from 2023 to 2030", color: "text-[#3B82F6]" },
                  { value: "8 Months", label: "Time to secure all approvals with parallel filing", color: "text-[#D97706]" },
                  { value: "90%+", label: "Metal recovery rate achievable with modern processes", color: "text-[#DC2626]" },
                ].map((m, i) => (
                  <motion.div 
                    key={i} 
                    variants={scaleUp}
                    whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                    className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm"
                  >
                    <div className={`text-2xl md:text-4xl font-bold mb-2 ${m.color}`}>{m.value}</div>
                    <div className="text-xs text-muted-foreground leading-tight">{m.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeIn} className="bg-card border border-border rounded-3xl p-2 md:p-8 shadow-sm">
                <canvas id="growthChart" className="w-full h-64" />
              </motion.div>
            </motion.section>

            {/* LICENSES CHECKLIST */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="font-display text-3xl font-bold mb-4 text-[#10241A]">
                Licences & Approvals — The Complete Checklist
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-10">
                A lithium-ion battery recycling plant needs approvals from multiple government bodies. With proper parallel filing, the entire process can be completed in 8 months.
              </motion.p>

              <motion.div variants={staggerContainer} className="space-y-8">
                {[
                  { num: "1", title: "GST Registration + Pollution Cess Exemption", auth: "GST Council / MoEFCC", time: "10–20 days | Month 1" },
                  { num: "2", title: "Consent to Establish (CTE)", auth: "State Pollution Control Board (SPCB)", time: "60–90 days | Month 2–4" },
                  { num: "3", title: "Hazardous Waste Authorisation", auth: "State Pollution Control Board (SPCB)", time: "45–90 days | Month 2–4" },
                  { num: "4", title: "Fire NOC", auth: "State Fire Department", time: "20–30 days | Month 3" },
                  { num: "5", title: "Factory Licence", auth: "State Labour Department", time: "30–45 days | Month 3–4" },
                  { num: "6", title: "Consent to Operate (CTO)", auth: "State Pollution Control Board (SPCB)", time: "30–60 days | Month 7–8" },
                  { num: "7", title: "EPR Registration on CPCB Portal", auth: "Central Pollution Control Board", time: "15–30 days | Month 1" },
                ].map((lic, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeIn}
                    whileHover={{ scale: 1.01 }}
                    className="flex gap-6 bg-card border border-border rounded-3xl p-2 md:p-8 shadow-sm transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brandGreen text-white flex items-center justify-center font-bold flex-shrink-0">{lic.num}</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-[#10241A]">{lic.title}</h4>
                      <p className="text-brandGreen text-sm mb-3">{lic.auth}</p>
                      <p className="text-muted-foreground">{/* Add full description here if needed */}</p>
                      <span className="inline-block mt-4 text-xs bg-brandGreen/10 text-[#2F8A3A] px-4 py-1 rounded-full">{lic.time}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* 8-Month Roadmap */}
              <motion.div 
                variants={fadeIn}
                whileHover={{ scale: 1.01 }}
                className="mt-16 bg-gradient-to-br from-[#5AC361] to-[#3FA24A] border border-brandGreen rounded-3xl p-10 shadow-sm"
              >
                <h3 className="text-white/90 font-bold tracking-widest text-sm mb-6">YOUR 8-MONTH PARALLEL FILING ROADMAP</h3>
                <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                  {[
                    "Month 1: Company Reg + GST + EPR",
                    "Month 2–4: CTE + Hazardous Waste Auth.",
                    "Month 3–4: Factory Licence + Fire NOC",
                    "Month 7–8: Consent to Operate (CTO)"
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={scaleUp}
                      whileHover={{ scale: 1.03 }}
                      className="bg-white/15 backdrop-blur-sm rounded-2xl p-6"
                    >
                      <div className="font-mono text-white/90 text-sm mb-2">PHASE {i + 1}</div>
                      <p className="font-medium text-white">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.section>

            {/* ==================== CASE STUDY SECTION ==================== */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="py-6 md:py-16"
            >
              <motion.div variants={fadeIn} className="text-center mb-12">
                <h2 className="font-display text-2xl md:text-4xl font-bold mb-4 text-[#10241A]">Case Study — ADS Recycling, Roorkee</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                  Reading about approvals is useful. Seeing how a real company handled them is more useful.
                  ADS Recycling is India's largest lithium-ion battery recycler, and their expansion in Uttarakhand gives a clear picture of what the process looks like.
                </p>
              </motion.div>

              {/* Main Case Study Card */}
              <motion.div variants={scaleUp} className="bg-card border border-brandGreen/40 rounded-3xl overflow-hidden mb-12 shadow-sm">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#5AC361] to-[#3FA24A] p-4 md:p-8 md:p-10">
                  <div className="inline-block bg-white/20 border border-white/40 text-white text-xs font-bold tracking-widest px-5 py-1.5 rounded-full mb-4">
                    VERIFIED CASE STUDY
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight font-display">
                    ADS Recycling Pvt. Ltd.<br />
                    Roorkee, Uttarakhand — 10,000 MT/year Li-ion expansion
                  </h3>
                </div>

                {/* Body */}
                <div className="p-4 md:p-8 md:p-10 space-y-10">
                  {/* Stats */}
                  <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { value: "10,000 MT", label: "Annual processing capacity" },
                      { value: "8 months", label: "Core approvals with parallel filing" },
                      { value: "90%+", label: "Metal recovery rate (Co, Li, Ni, Mn)" },
                    ].map((stat, i) => (
                      <motion.div key={i} variants={fadeIn} whileHover={{ y: -3 }} className="bg-muted/50 border border-border rounded-2xl p-6 text-center">
                        <div className="text-lg md:text-4xl font-bold text-brandGreen mb-2">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Background */}
                  <motion.div variants={fadeIn}>
                    <h4 className="text-brandGreen uppercase tracking-widest text-sm font-semibold mb-4">Background</h4>
                    <ul className="space-y-4 text-[#2C3B33]">
                      {[
                        "ADS Recycling launched its Li-ion battery recycling expansion in 2021, targeting a dedicated 10,000 MT/year processing line in Uttarakhand",
                        "They had prior experience with e-waste recycling, but the battery line required fresh authorisations across multiple regulatory bodies",
                        "Their approach: file CTE and EIA simultaneously rather than waiting for one before starting the other"
                      ].map((text, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-brandGreen mt-1">▸</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* What Worked */}
                  <motion.div variants={fadeIn}>
                    <h4 className="text-brandGreen uppercase tracking-widest text-sm font-semibold mb-4">What Worked</h4>
                    <ul className="space-y-4 text-[#2C3B33]">
                      {[
                        "CTE secured from UKPCB through parallel filing — simultaneous submission of CTE and Hazardous Waste Authorisation cut the queue time significantly",
                        "CPCB EPR registration completed early, allowing collection partnerships to begin while plant construction was underway",
                        "All core approvals completed within 8 months using the parallel filing approach",
                        "Fire NOC caused a delay — the fluorine gas suppression system requirement wasn't captured in the initial plan"
                      ].map((text, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-brandGreen mt-1">✓</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Key Lessons */}
                  <motion.div variants={fadeIn}>
                    <h4 className="text-brandGreen uppercase tracking-widest text-sm font-semibold mb-4">Key Lessons</h4>
                    <ul className="space-y-4 text-[#2C3B33]">
                      {[
                        "Parallel filing of CTE and HW Authorisation saved an estimated 3–4 months",
                        "The Fire NOC delay was entirely preventable — engage a fire safety consultant before submitting",
                        "Starting EPR registration in Month 1 meant collection partnerships were active before the plant was commissioned"
                      ].map((text, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-brandGreen mt-1">✓</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>

              {/* Chart */}
              <motion.div variants={fadeIn} className="bg-card border border-border rounded-3xl p-2 md:p-8 mb-10 shadow-sm">
                <h4 className="text-center text-brandGreen uppercase text-sm font-semibold tracking-widest mb-6">
                  Parallel Filing vs Industry Average
                </h4>
                <div className="h-80 md:h-96">
                  <canvas id="caseChart" className="w-full h-full" />
                </div>
                <div className="flex justify-center gap-8 mt-6 text-sm text-[#2C3B33]">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-3 bg-brandGreen rounded"></div>
                    <span>ADS Recycling (Parallel)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-3 bg-[#BFE8C2] rounded"></div>
                    <span>Industry Average (Sequential)</span>
                  </div>
                </div>
              </motion.div>

              {/* Urgency Box */}
              <motion.div 
                variants={fadeIn}
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] border border-[#F59E0B] rounded-3xl p-4 md:p-8 md:p-10 md:flex gap-6 text-[#78350F] shadow-sm"
              >
                <span className="text-lg md:text-4xl flex-shrink-0">⏳</span>
                <p className="leading-relaxed text-[15px]">
                  ADS Recycling's core lesson is simple: the companies that move fastest through approvals aren't cutting corners —
                  they're filing everything in parallel, with complete documents, on Day 1.
                  <strong> The 8-month timeline isn't an exception. It's what happens when you do this right.</strong>
                </p>
              </motion.div>
            </motion.section>

            {/* FINAL CTA */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-br from-[#F3FBF3] to-[#EAF7EC] border border-brandGreen/40 rounded-3xl p-12 text-center relative overflow-hidden shadow-sm"
            >
              <div className="text-brandGreen text-sm font-bold tracking-widest mb-4">EPR NEXUSS — END-TO-END BATTERY RECYCLING PARTNER</div>
              <h2 className="font-display text-lg md:text-4xl font-bold mb-6 text-[#10241A]">You have the roadmap.<br />Let's build it together.</h2>
              <p className="max-w-xl mx-auto text-muted-foreground mb-10">Licences, technology, collection network, and full compliance support.</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brandGreen hover:bg-[#4CAE54] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-colors shadow-sm"
              >
                Book Free Consultation
              </motion.button>
            </motion.div>

          </div>
          </div>

          {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block w-[320px] flex-shrink-0 self-start" style={{ position: "sticky", top: "8rem" }}>
            <StickyContactForm />
          </aside>

        </div>
      </div>
    </>
  );
};

export default LithiumBatteryApprovals;