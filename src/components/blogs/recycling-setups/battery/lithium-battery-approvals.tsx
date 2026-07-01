import React, { useEffect } from 'react';
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

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
    const gridC = 'rgba(255,255,255,0.07)';
    const textC = '#b9cbe5';

    // Growth Chart
    new (window as any).Chart(document.getElementById('growthChart'), {
      type: 'bar',
      data: {
        labels: ['2023','2024','2025','2026','2027','2028','2029','2030'],
        datasets: [
          { label: 'Waste (000 MT)', data: [50,65,80,96,115,136,158,182], backgroundColor: '#1D9E75', borderRadius: 6 },
          { label: 'Market (₹ Cr)', data: [2200,3600,5200,7400,9800,12800,16000,18000], backgroundColor: '#4db6ff', borderRadius: 6 }
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
          { label: 'ADS Recycling (Parallel)', data: [3,3,2,2,1,2], backgroundColor: '#1D9E75', borderRadius: 6 },
          { label: 'Industry Average (Sequential)', data: [5,5,4,3,2,3], backgroundColor: '#9FE1CB', borderRadius: 6 }
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
      <div className="min-h-screen bg-[#050E09] text-[#E1F5EE] font-sans">
        {/* HERO */}
        <div className="hero bg-[#050E09] border border-[#1D9E75]/30 rounded-3xl p-2 md:p-12 mx-4 md:mx-auto max-w-5xl mt-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#1D9E75]/10 rounded-full blur-3xl" />
          
          <div className="hero-eyebrow inline-flex items-center gap-2 bg-[#1D9E75]/10 border border-[#1D9E75]/30 text-[#5DCAA5] text-xs font-bold tracking-widest px-5 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#5DCAA5] rounded-full animate-pulse" /> EPR NEXUSS — INDIA'S BATTERY RECYCLING GUIDE 2026
          </div>

          <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-6 text-white">
            Dead batteries aren't waste —<br />
            <span className="text-[#5DCAA5]">they're a goldmine waiting for the right approvals.</span>
          </h1>

          <p className="text-[#9CA3AF] max-w-3xl leading-relaxed mb-8">
            India's EV surge is producing more battery waste than the country can currently handle. 
            The entrepreneurs who move through the regulatory process quickly — and correctly — will build the most profitable green businesses of this decade.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Complete Licence Checklist", "8-Month Approval Roadmap", "Live Market Data", "Real Case Study"].map((pill, i) => (
              <span key={i} className="pill px-5 py-2 bg-white/5 border border-white/10 text-sm rounded-2xl">{pill}</span>
            ))}
          </div>
        </div>

        {/* Meta */}
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-wrap gap-6 text-sm text-[#9CA3AF] border-b border-white/10">
          <span>By <span className="text-[#1D9E75] font-semibold">EPR Nexuss</span></span>
          <span>May 2026</span>
          <span>8 min read</span>
          <span>Regulatory Guide · India</span>
        </div>

        {/* Two-Column Main Content Container */}
        <div className="max-w-6xl mx-auto px-2 md:px-6 py-6 md:py-12 lg:flex lg:gap-10 lg:items-start">
          
          {/* Main Content Body */}
          <div className="flex-1 space-y-20">
            
            {/* MARKET SECTION */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Why this opportunity won't wait</h2>
              <p className="text-[#9CA3AF] mb-8 leading-relaxed">
                India generated around 50,000 metric tonnes of lithium-ion battery waste in 2023. By 2030, that number will exceed 180,000 MT.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 mx-2">
                {[
                  { value: "₹18K Cr", label: "India Li-ion recycling market value by 2030", color: "text-[#1D9E75]" },
                  { value: "3×", label: "Battery waste volume growth from 2023 to 2030", color: "text-[#4db6ff]" },
                  { value: "8 Months", label: "Time to secure all approvals with parallel filing", color: "text-[#F59E0B]" },
                  { value: "90%+", label: "Metal recovery rate achievable with modern processes", color: "text-[#EF4444]" },
                ].map((m, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <div className={`text-2xl md:text-4xl font-bold mb-2 ${m.color}`}>{m.value}</div>
                    <div className="text-xs text-[#9CA3AF] leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-2 md:p-8">
                <canvas id="growthChart" className="w-full h-64" />
              </div>
            </section>

            {/* LICENSES CHECKLIST */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Licences & Approvals — The Complete Checklist</h2>
              <p className="text-[#9CA3AF] mb-10">
                A lithium-ion battery recycling plant needs approvals from multiple government bodies. With proper parallel filing, the entire process can be completed in 8 months.
              </p>

              <div className="space-y-8">
                {[
                  { num: "1", title: "GST Registration + Pollution Cess Exemption", auth: "GST Council / MoEFCC", time: "10–20 days | Month 1" },
                  { num: "2", title: "Consent to Establish (CTE)", auth: "State Pollution Control Board (SPCB)", time: "60–90 days | Month 2–4" },
                  { num: "3", title: "Hazardous Waste Authorisation", auth: "State Pollution Control Board (SPCB)", time: "45–90 days | Month 2–4" },
                  { num: "4", title: "Fire NOC", auth: "State Fire Department", time: "20–30 days | Month 3" },
                  { num: "5", title: "Factory Licence", auth: "State Labour Department", time: "30–45 days | Month 3–4" },
                  { num: "6", title: "Consent to Operate (CTO)", auth: "State Pollution Control Board (SPCB)", time: "30–60 days | Month 7–8" },
                  { num: "7", title: "EPR Registration on CPCB Portal", auth: "Central Pollution Control Board", time: "15–30 days | Month 1" },
                ].map((lic, i) => (
                  <div key={i} className="flex gap-6 bg-white/5 border border-white/10 rounded-3xl p-2 md:p-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#1D9E75] text-white flex items-center justify-center font-bold flex-shrink-0">{lic.num}</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{lic.title}</h4>
                      <p className="text-[#5DCAA5] text-sm mb-3">{lic.auth}</p>
                      <p className="text-[#9CA3AF]">{/* Add full description here if needed */}</p>
                      <span className="inline-block mt-4 text-xs bg-[#1D9E75]/10 text-[#5DCAA5] px-4 py-1 rounded-full">{lic.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 8-Month Roadmap */}
              <div className="mt-16 bg-gradient-to-br from-[#063D30] to-[#0F6E56] border border-[#1D9E75] rounded-3xl p-10">
                <h3 className="text-[#5DCAA5] font-bold tracking-widest text-sm mb-6">YOUR 8-MONTH PARALLEL FILING ROADMAP</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Month 1: Company Reg + GST + EPR",
                    "Month 2–4: CTE + Hazardous Waste Auth.",
                    "Month 3–4: Factory Licence + Fire NOC",
                    "Month 7–8: Consent to Operate (CTO)"
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 rounded-2xl p-6">
                      <div className="font-mono text-[#5DCAA5] text-sm mb-2">PHASE {i + 1}</div>
                      <p className="font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ==================== CASE STUDY SECTION ==================== */}
            <section className="py-6 md:py-16">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Case Study — ADS Recycling, Roorkee</h2>
                <p className="text-[#9CA3AF] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                  Reading about approvals is useful. Seeing how a real company handled them is more useful. 
                  ADS Recycling is India's largest lithium-ion battery recycler, and their expansion in Uttarakhand gives a clear picture of what the process looks like.
                </p>
              </div>

              {/* Main Case Study Card */}
              <div className="bg-white/5 border border-[#1D9E75] rounded-3xl overflow-hidden mb-12">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#063D30] to-[#0F6E56] p-4 md:p-8 md:p-10">
                  <div className="inline-block bg-[#5DCAA5]/20 border border-[#5DCAA5] text-[#5DCAA5] text-xs font-bold tracking-widest px-5 py-1.5 rounded-full mb-4">
                    VERIFIED CASE STUDY
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    ADS Recycling Pvt. Ltd.<br />
                    Roorkee, Uttarakhand — 10,000 MT/year Li-ion expansion
                  </h3>
                </div>

                {/* Body */}
                <div className="p-4 md:p-8 md:p-10 space-y-10">
                  {/* Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { value: "10,000 MT", label: "Annual processing capacity" },
                      { value: "8 months", label: "Core approvals with parallel filing" },
                      { value: "90%+", label: "Metal recovery rate (Co, Li, Ni, Mn)" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                        <div className="text-lg md:text-4xl font-bold text-[#1D9E75] mb-2">{stat.value}</div>
                        <div className="text-sm text-[#9CA3AF]">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Background */}
                  <div>
                    <h4 className="text-[#5DCAA5] uppercase tracking-widest text-sm font-semibold mb-4">Background</h4>
                    <ul className="space-y-4 text-[#E1F5EE]">
                      {[
                        "ADS Recycling launched its Li-ion battery recycling expansion in 2021, targeting a dedicated 10,000 MT/year processing line in Uttarakhand",
                        "They had prior experience with e-waste recycling, but the battery line required fresh authorisations across multiple regulatory bodies",
                        "Their approach: file CTE and EIA simultaneously rather than waiting for one before starting the other"
                      ].map((text, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-[#1D9E75] mt-1">▸</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What Worked */}
                  <div>
                    <h4 className="text-[#5DCAA5] uppercase tracking-widest text-sm font-semibold mb-4">What Worked</h4>
                    <ul className="space-y-4 text-[#E1F5EE]">
                      {[
                        "CTE secured from UKPCB through parallel filing — simultaneous submission of CTE and Hazardous Waste Authorisation cut the queue time significantly",
                        "CPCB EPR registration completed early, allowing collection partnerships to begin while plant construction was underway",
                        "All core approvals completed within 8 months using the parallel filing approach",
                        "Fire NOC caused a delay — the fluorine gas suppression system requirement wasn't captured in the initial plan"
                      ].map((text, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-[#1D9E75] mt-1">✓</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Lessons */}
                  <div>
                    <h4 className="text-[#5DCAA5] uppercase tracking-widest text-sm font-semibold mb-4">Key Lessons</h4>
                    <ul className="space-y-4 text-[#E1F5EE]">
                      {[
                        "Parallel filing of CTE and HW Authorisation saved an estimated 3–4 months",
                        "The Fire NOC delay was entirely preventable — engage a fire safety consultant before submitting",
                        "Starting EPR registration in Month 1 meant collection partnerships were active before the plant was commissioned"
                      ].map((text, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-[#1D9E75] mt-1">✓</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-2 md:p-8 mb-10">
                <h4 className="text-center text-[#5DCAA5] uppercase text-sm font-semibold tracking-widest mb-6">
                  Parallel Filing vs Industry Average
                </h4>
                <div className="h-80 md:h-96">
                  <canvas id="caseChart" className="w-full h-full" />
                </div>
                <div className="flex justify-center gap-8 mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-3 bg-[#1D9E75] rounded"></div>
                    <span>ADS Recycling (Parallel)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-3 bg-[#9FE1CB] rounded"></div>
                    <span>Industry Average (Sequential)</span>
                  </div>
                </div>
              </div>

              {/* Urgency Box */}
              <div className="bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] border border-[#F59E0B] rounded-3xl p-4 md:p-8 md:p-10 md:flex gap-6 text-[#78350F]">
                <span className="text-lg md:text-4xl flex-shrink-0">⏳</span>
                <p className="leading-relaxed text-[15px]">
                  ADS Recycling's core lesson is simple: the companies that move fastest through approvals aren't cutting corners — 
                  they're filing everything in parallel, with complete documents, on Day 1. 
                  <strong> The 8-month timeline isn't an exception. It's what happens when you do this right.</strong>
                </p>
              </div>
            </section>

            {/* FINAL CTA */}
            <div className="bg-[#050E09] border border-[#1D9E75] rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="text-[#5DCAA5] text-sm font-bold tracking-widest mb-4">EPR NEXUSS — END-TO-END BATTERY RECYCLING PARTNER</div>
              <h2 className="text-lg md:text-4xl font-bold mb-6">You have the roadmap.<br />Let's build it together.</h2>
              <p className="max-w-xl mx-auto text-[#9CA3AF] mb-10">Licences, technology, collection network, and full compliance support.</p>
              <button className="bg-[#1D9E75] hover:bg-[#15855e] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-colors">
                Book Free Consultation
              </button>
            </div>

          </div>

          {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0 self-start" style={{ position: "sticky", top: "7rem" }}>
            <StickyContactForm />
          </aside>

        </div>
      </div>
    </>
  );
};

export default LithiumBatteryApprovals;