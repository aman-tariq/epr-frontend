import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import StickyContactForm from '@/components/StickyContactForm';

Chart.register(...registerables);

export default function RegisteredVehicleScrappingFacility(): JSX.Element {
  const revenueChartRef = useRef<HTMLCanvasElement | null>(null);
  const materialChartRef = useRef<HTMLCanvasElement | null>(null);

  // State to manage Accordion open/close without requiring external JS libraries
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  useEffect(() => {
    let revenueChartInstance: Chart | null = null;
    let materialChartInstance: Chart | null = null;

    if (revenueChartRef.current) {
      revenueChartInstance = new Chart(revenueChartRef.current, {
        type: 'pie',
        data: {
          labels: [
            'Vehicle Deregistration',
            'Metal Recovery',
            'Parts Recovery',
            'Documentation & Compliance',
            'Service & Advisory Revenue',
          ],
          datasets: [
            {
              data: [30, 28, 18, 14, 10],
              backgroundColor: [
                '#16a34a',
                '#0ea5e9',
                '#22c55e',
                '#f59e0b',
                '#64748b',
              ],
              borderColor: '#ffffff',
              borderWidth: 3,
              hoverOffset: 8,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 18,
                color: '#0f172a',
                font: {
                  size: 12,
                  weight: 600,
                },
              },
            },
            tooltip: {
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              titleColor: '#fff',
              bodyColor: '#e2e8f0',
              padding: 12,
              cornerRadius: 10,
            },
          },
        },
      });
    }

    if (materialChartRef.current) {
      materialChartInstance = new Chart(materialChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Steel', 'Aluminum', 'Copper', 'Rubber', 'Glass', 'Oil'],
          datasets: [
            {
              label: 'Recovery Potential',
              data: [90, 75, 55, 40, 32, 18],
              backgroundColor: [
                '#0ea5e9',
                '#16a34a',
                '#22c55e',
                '#38bdf8',
                '#f59e0b',
                '#64748b',
              ],
              borderRadius: 12,
              borderSkipped: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: '#334155',
                font: {
                  weight: 600,
                },
              },
            },
            y: {
              beginAtZero: true,
              suggestedMax: 100,
              grid: {
                color: 'rgba(15, 23, 42, 0.08)',
              },
              ticks: {
                callback: function (value) {
                  return value + '%';
                },
                color: '#64748b',
                font: {
                  weight: 600,
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              titleColor: '#fff',
              bodyColor: '#e2e8f0',
              padding: 12,
              cornerRadius: 10,
            },
          },
        },
      });
    }

    return () => {
      if (revenueChartInstance) revenueChartInstance.destroy();
      if (materialChartInstance) materialChartInstance.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-[#f8fafc] text-[#0f172a] font-sans antialiased m-0 p-0">
      <div className="w-full py-10 lg:py-16 px-1 md:px-2 mt-[40px] md:mt-[100px]">
         <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        <div>
        
        {/* HERO CARD */}
        <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0f6b42]/96 via-[#198754]/92 to-[#023609] text-white shadow-[0_22px_60px_rgba(15,23,42,0.22)] mb-8 w-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(34,197,94,0.15),transparent_30%)] pointer-events-none" />
          <div className="relative z-10 p-6 sm:p-10 lg:p-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/16 text-primary px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide mb-5 backdrop-blur-md">
              <span> Sustainable Mobility • Compliance • Circular Economy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-black tracking-tight leading-tight mb-4">
              Registered Vehicle Scrapping Facility: India’s Path to Sustainable Mobility
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-7xl mb-6">
              A professionally structured, compliant, and future-ready overview of the Registered Vehicle Scrapping Facility (RVSF) ecosystem in India, designed for clarity, decision-making, and conversion-focused reading.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/9 border border-white/12 text-black/90 text-sm font-semibold">
                Policy-driven setup
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/9 border border-white/12 text-black/90 text-sm font-semibold">
                Market opportunity
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/9 border border-white/12 text-black/90 text-sm font-semibold">
                Licensing &amp; approvals
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-5">
              <div className="bg-white/8 border border-white/12 rounded-[18px] p-4 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl font-black text-brandGreen leading-tight mb-1">129</div>
                <p className="text-primary text-sm leading-snug m-0">Operational RVSFs in India as of January 2026</p>
              </div>
              <div className="bg-white/8 border border-white/12 rounded-[18px] p-4 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl font-black text-brandGreen leading-tight mb-1">430,000+</div>
                <p className="text-primary text-sm leading-snug m-0">End-of-life vehicles scrapped collectively</p>
              </div>
              <div className="bg-white/8 border border-white/12 rounded-[18px] p-4 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl font-black text-brandGreen leading-tight mb-1">End-to-End</div>
                <p className="text-primary text-sm leading-snug m-0">Consulting support from planning to compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="bg-white/96 border border-[#0f172a]/8 rounded-[24px] p-6 lg:p-8 shadow-[0_12px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_44px_rgba(15,23,42,0.10)] transition-all mb-8 w-full">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#16a34a] mb-2">Overview</span>
          <h2 className="relative pl-4 text-xl sm:text-2xl lg:text-3xl font-black text-[#0f172a] mb-4 tracking-tight before:content-[''] before:absolute before:left-0 before:top-[0.22em] before:w-[5px] before:h-[1.1em] before:rounded-full before:bg-gradient-to-b before:from-[#16a34a] before:to-[#0ea5e9]">
            Introduction to Registered Vehicle Scrapping Facility (RVSF)
          </h2>
          <p className="text-[#1e293b] text-base sm:text-lg leading-relaxed mb-3.5">
            Establishing a <strong>Registered Vehicle Scrapping Facility</strong> in India is a structured process that goes beyond simply dismantling old vehicles.
            It involves business planning, environmental clearances, operational approvals, and strict compliance management.
            With India’s <strong>Vehicle Scrappage Policy (2021)</strong> and the <strong>Environment Protection (End-of-Life Vehicles) Rules, 2025</strong>, RVSFs have become vital to sustainable mobility.
          </p>
          <p className="text-[#1e293b] text-base sm:text-lg leading-relaxed mb-3.5">
            As of <strong>January 2026</strong>, India has <strong>129 operational RVSFs</strong>, collectively scrapping more than <strong>430,000 end-of-life vehicles</strong>.
            This reflects both the scale of opportunity and the importance of aligning with regulatory frameworks to ensure smooth registration and long-term success.
          </p>
          <p className="text-[#1e293b] text-base sm:text-lg leading-relaxed m-0">
            For investors and entrepreneurs, professional consultation is key.
            <a href="https://eprnexuss.com" target="_blank" rel="noopener noreferrer" className="text-[#16a34a] font-bold hover:underline ml-1"><strong>EPR Nexus</strong></a> provides end-to-end support — guiding clients through licensing, approvals, and compliance —
            making the setup process efficient, profitable, and future-ready.
          </p>
        </section>

        {/* SETUP ESSENTIALS */}
        <section id="setup" className="bg-white/96 border border-[#0f172a]/8 rounded-[24px] p-6 lg:p-8 shadow-[0_12px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_44px_rgba(15,23,42,0.10)] transition-all mb-8 w-full">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#16a34a] mb-2">Setup Essentials</span>
          <h2 className="relative pl-4 text-xl sm:text-2xl lg:text-3xl font-black text-[#0f172a] mb-4 tracking-tight before:content-[''] before:absolute before:left-0 before:top-[0.22em] before:w-[5px] before:h-[1.1em] before:rounded-full before:bg-gradient-to-b before:from-[#16a34a] before:to-[#0ea5e9]">
            Prerequisites Before Setting Up an RVSF Plant
          </h2>
          <p className="text-[#1e293b] text-base sm:text-lg leading-relaxed mb-4">
            Before beginning the registration and approval process, certain essentials must be carefully planned to ensure smooth setup and long-term success of your facility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-4">
            <div className="flex gap-3 items-start p-4 bg-white border border-[#0f172a]/8 rounded-[18px] shadow-[0_8px_22px_rgba(15,23,42,0.04)]">
              <div className="w-[42px] h-[42px] rounded-xl flex-shrink-0 grid place-items-center bg-gradient-to-br from-[#16a34a]/12 to-[#0ea5e9]/12 text-[#0f172a] text-lg font-bold">
                📍
              </div>
              <div>
                <div className="font-extrabold text-[#0f172a] mb-1">Land Requirements</div>
                <p className="text-[#64748b] text-sm leading-relaxed m-0">Identify suitable industrial or non-agricultural land with adequate area.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-4 bg-white border border-[#0f172a]/8 rounded-[18px] shadow-[0_8px_22px_rgba(15,23,42,0.04)]">
              <div className="w-[42px] h-[42px] rounded-xl flex-shrink-0 grid place-items-center bg-gradient-to-br from-[#16a34a]/12 to-[#0ea5e9]/12 text-[#0f172a] text-lg font-bold">
                🏢
              </div>
              <div>
                <div className="font-extrabold text-[#0f172a] mb-1">Legal Structure</div>
                <p className="text-[#64748b] text-sm leading-relaxed m-0">Form your company and establish the right legal framework.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-4 bg-white border border-[#0f172a]/8 rounded-[18px] shadow-[0_8px_22px_rgba(15,23,42,0.04)]">
              <div className="w-[42px] h-[42px] rounded-xl flex-shrink-0 grid place-items-center bg-gradient-to-br from-[#16a34a]/12 to-[#0ea5e9]/12 text-[#0f172a] text-lg font-bold">
                🛠️
              </div>
              <div>
                <div className="font-extrabold text-[#0f172a] mb-1">Machinery &amp; Equipment</div>
                <p className="text-[#64748b] text-sm leading-relaxed m-0">Plan for certified dismantling, recycling, and safety gear.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-4 bg-white border border-[#0f172a]/8 rounded-[18px] shadow-[0_8px_22px_rgba(15,23,42,0.04)]">
              <div className="w-[42px] h-[42px] rounded-xl flex-shrink-0 grid place-items-center bg-gradient-to-br from-[#16a34a]/12 to-[#0ea5e9]/12 text-[#0f172a] text-lg font-bold">
                🛡️
              </div>
              <div>
                <div className="font-extrabold text-[#0f172a] mb-1">Compliance Awareness</div>
                <p className="text-[#64748b] text-sm leading-relaxed m-0">Understand environmental regulations and RVSF certification norms.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-4 bg-white border border-[#0f172a]/8 rounded-[18px] shadow-[0_8px_22px_rgba(15,23,42,0.04)]">
              <div className="w-[42px] h-[42px] rounded-xl flex-shrink-0 grid place-items-center bg-gradient-to-br from-[#16a34a]/12 to-[#0ea5e9]/12 text-[#0f172a] text-lg font-bold">
                🔒
              </div>
              <div>
                <div className="font-extrabold text-[#0f172a] mb-1">Licensing</div>
                <p className="text-[#64748b] text-sm leading-relaxed m-0">Secure mandatory licenses and approvals for operations.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-4 bg-white border border-[#0f172a]/8 rounded-[18px] shadow-[0_8px_22px_rgba(15,23,42,0.04)]">
              <div className="w-[42px] h-[42px] rounded-xl flex-shrink-0 grid place-items-center bg-gradient-to-br from-[#16a34a]/12 to-[#0ea5e9]/12 text-[#0f172a] text-lg font-bold">
                🗄️
              </div>
              <div>
                <div className="font-extrabold text-[#0f172a] mb-1">Data Management</div>
                <p className="text-[#64748b] text-sm leading-relaxed m-0">Implement systems for tracking sales, purchases, and recycling records.</p>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#0f172a]/10 to-transparent my-6" />

          <p className="text-[#1e293b] text-base sm:text-lg leading-relaxed m-0">
            At <a href="https://eprnexuss.com" target="_blank" rel="noopener noreferrer" className="text-[#16a34a] font-bold hover:underline"><strong>EPR Nexus</strong></a>, we provide complete consultation support — from project planning and documentation to approvals and post-registration compliance — ensuring your business is built on a strong foundation.
          </p>
        </section>

        {/* OPPORTUNITY */}
        <section id="opportunity" className="bg-white/96 border border-[#0f172a]/8 rounded-[24px] p-6 lg:p-8 shadow-[0_12px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_44px_rgba(15,23,42,0.10)] transition-all mb-8 w-full">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#16a34a] mb-2">Opportunity</span>
          <h2 className="relative pl-4 text-xl sm:text-2xl lg:text-3xl font-black text-[#0f172a] mb-4 tracking-tight before:content-[''] before:absolute before:left-0 before:top-[0.22em] before:w-[5px] before:h-[1.1em] before:rounded-full before:bg-gradient-to-b before:from-[#16a34a] before:to-[#0ea5e9]">
            Business Opportunities in Registered Vehicle Scrapping Facilities (RVSF)
          </h2>
          <p className="text-[#1e293b] text-base sm:text-lg leading-relaxed mb-3.5">
            A <strong>Registered Vehicle Scrapping Facility (RVSF)</strong> license opens significant business opportunities in India, particularly for young entrepreneurs and forward-thinking investors.
            These facilities act as centralized hubs where end-of-life vehicles (ELVs) are processed, and valuable materials are recovered efficiently.
          </p>
          <p className="text-[#1e293b] text-base sm:text-lg leading-relaxed mb-3.5">
            When a vehicle is dismantled at an RVSF, components such as <strong>aluminium, iron, copper, steel, rubber, glass, silencers, tires, and oils</strong> are carefully segregated and directed to authorized recyclers.
            This streamlined process reduces the challenges recyclers face in sourcing scrap, while ensuring compliance with environmental norms.
          </p>
          <p className="text-[#1e293b] text-base sm:text-lg leading-relaxed mb-3.5">
            By supplying high-quality scrap to recyclers, RVSFs play a vital role in the circular economy.
            Recyclers can transform recovered materials into new products — from <strong>steel ingots</strong> to <strong>plastic moulded components</strong> — fueling growth across industries and creating profitable revenue streams.
          </p>
          <p className="text-[#1e293b] text-base sm:text-lg leading-relaxed m-0">
            Partnering with <a href="https://eprnexuss.com" target="_blank" rel="noopener noreferrer" className="text-[#16a34a] font-bold hover:underline"><strong>EPR Nexus</strong></a> ensures you leverage these opportunities with expert guidance, compliance support, and a proven roadmap for success.
          </p>
        </section>

        {/* EXPLANATORY BLOCKS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 w-full">
          <div id="why" className="bg-white/96 border border-[#0f172a]/8 rounded-[24px] p-6 lg:p-8 shadow-[0_12px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_44px_rgba(15,23,42,0.10)] transition-all h-full">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#16a34a] mb-2">Why It Exists</span>
            <h2 className="relative pl-4 text-xl sm:text-2xl font-black text-[#0f172a] mb-4 tracking-tight before:content-[''] before:absolute before:left-0 before:top-[0.22em] before:w-[5px] before:h-[1.1em] before:rounded-full before:bg-gradient-to-b before:from-[#16a34a] before:to-[#0ea5e9]">
              Why Registered Vehicle Scrapping Facilities Exist
            </h2>
            <p className="text-[#1e293b] text-base leading-relaxed mb-4">
              Registered Vehicle Scrapping Facilities (RVSFs) were introduced to replace the informal scrapping ecosystem with a structured, compliant, and environmentally responsible model.
              Their purpose is defined by national policy objectives, ensuring safety, sustainability, and accountability across the vehicle disposal process.
            </p>

            <div className="bg-gradient-to-b from-white to-[#f8fafc] border border-[#0f172a]/8 rounded-[20px] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] mt-4">
              <ul className="divide-y divide-[#0f172a]/8 list-none p-0 m-0 text-[#1e293b]">
                <li className="py-3.5 first:pt-0 last:pb-0">Reduce air, soil, and water pollution caused by unmanaged vehicle waste.</li>
                <li className="py-3.5 first:pt-0 last:pb-0">Improve road safety by removing unfit vehicles from circulation.</li>
                <li className="py-3.5 first:pt-0 last:pb-0">Support the circular economy through structured material recovery.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/96 border border-[#0f172a]/8 rounded-[24px] p-6 lg:p-8 shadow-[0_12px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_44px_rgba(15,23,42,0.10)] transition-all h-full">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#16a34a] mb-2">Policy Role</span>
            <h2 className="relative pl-4 text-xl sm:text-2xl font-black text-[#0f172a] mb-4 tracking-tight before:content-[''] before:absolute before:left-0 before:top-[0.22em] before:w-[5px] before:h-[1.1em] before:rounded-full before:bg-gradient-to-b before:from-[#16a34a] before:to-[#0ea5e9]">
              The Role of RVSFs in Policy Framework
            </h2>
            <p className="text-[#1e293b] text-base leading-relaxed mb-4">
              RVSFs are more than commercial ventures — they are compliance-driven facilities designed to align with India’s vehicle scrappage policy.
              Their existence ensures traceability, transparency, and efficiency in the recycling ecosystem.
            </p>

            <div className="bg-gradient-to-b from-white to-[#f8fafc] border border-[#0f172a]/8 rounded-[20px] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] mt-4">
              <ul className="divide-y divide-[#0f172a]/8 list-none p-0 m-0 text-[#1e293b]">
                <li className="py-3.5 first:pt-0 last:pb-0">Replace informal scrapping with authorized, regulated processes.</li>
                <li className="py-3.5 first:pt-0 last:pb-0">Establish traceability and compliance across vehicle disposal.</li>
                <li className="py-3.5 first:pt-0 last:pb-0">Enable certificate-linked revenue models for sustainable business growth.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* MARKET INSIGHTS & CHARTS */}
        <section id="charts" className="mb-8 w-full">
          <div className="text-center mb-6">
            <span className="inline-block bg-[#16a34a] text-white px-4 py-1.5 text-sm font-bold rounded-full shadow-sm">
              Business Intelligence
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 mb-2 tracking-tight text-[#0f172a]">
              RVSF Market Insights
            </h2>
            <p className="text-[#64748b] text-base sm:text-lg m-0">
              Revenue opportunities and material recovery potential of a Registered Vehicle Scrapping Facility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pie Chart */}
            <div className="bg-white rounded-[24px] border border-[#0f172a]/8 shadow-[0_14px_36px_rgba(15,23,42,0.06)] overflow-hidden h-full">
              <div className="bg-gradient-to-r from-[#16a34a] to-[#15803d] px-5 py-4 text-white font-extrabold text-lg tracking-tight">
                Revenue Distribution
              </div>
              <div className="p-5 bg-gradient-to-b from-white to-[#f8fafc]">
                <div className="relative w-full h-[360px]">
                  <canvas ref={revenueChartRef}></canvas>
                </div>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-white rounded-[24px] border border-[#0f172a]/8 shadow-[0_14px_36px_rgba(15,23,42,0.06)] overflow-hidden h-full">
              <div className="bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] px-5 py-4 text-white font-extrabold text-lg tracking-tight">
                Material Recovery Potential
              </div>
              <div className="p-5 bg-gradient-to-b from-white to-[#f8fafc]">
                <div className="relative w-full h-[360px]">
                  <canvas ref={materialChartRef}></canvas>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section id="faq" className="w-full">
          <div className="bg-white/96 border border-[#0f172a]/8 rounded-[24px] p-6 lg:p-10 shadow-[0_12px_32px_rgba(15,23,42,0.06)]">
            <span className="inline-block bg-[#16a34a] text-white px-3.5 py-1.5 text-sm font-bold rounded-full shadow-sm mb-3">
              Frequently Asked Questions
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-[#0f172a] tracking-tight">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-3">
              {[
                {
                  id: 1,
                  q: 'What is a Registered Vehicle Scrapping Facility (RVSF)?',
                  a: 'A Registered Vehicle Scrapping Facility (RVSF) is an authorized facility approved by the government to scientifically dismantle and recycle End-of-Life Vehicles (ELVs) while complying with environmental and safety regulations.',
                },
                {
                  id: 2,
                  q: 'Why is an RVSF important?',
                  a: 'RVSFs reduce pollution, improve road safety, recover valuable materials, promote the circular economy, and ensure environmentally responsible disposal of old vehicles.',
                },
                {
                  id: 3,
                  q: 'What are the basic requirements for setting up an RVSF?',
                  a: 'Key requirements include suitable industrial land, company registration, approved machinery, environmental compliance, necessary licenses, trained manpower, and proper record management systems.',
                },
                {
                  id: 4,
                  q: 'Which materials can be recovered from scrapped vehicles?',
                  a: 'Valuable materials recovered include steel, iron, aluminium, copper, rubber, glass, plastics, tyres, engine oil, batteries, catalytic converters, and reusable automotive components.',
                },
                {
                  id: 5,
                  q: 'Is operating an RVSF a profitable business?',
                  a: 'Yes. Revenue is generated through dismantling services, sale of recovered scrap, reusable spare parts, recyclable materials, and partnerships with authorized recyclers.',
                },
                {
                  id: 6,
                  q: 'How does an RVSF support the circular economy?',
                  a: 'By recovering metals, plastics, glass, rubber, and other reusable materials from old vehicles, RVSFs reduce waste, conserve natural resources, and supply quality recycled materials to manufacturing industries.',
                },
                {
                  id: 7,
                  q: 'Which regulations govern RVSFs in India?',
                  a: "RVSFs operate under India's Vehicle Scrappage Policy and the Environment Protection (End-of-Life Vehicles) Rules along with applicable environmental, pollution control, and transport regulations.",
                },
                {
                  id: 8,
                  q: 'How can EPR Nexus help in establishing an RVSF?',
                  a: 'EPR Nexus provides end-to-end consultancy including project planning, documentation, licensing, regulatory approvals, compliance management, and post-registration support for establishing a Registered Vehicle Scrapping Facility.',
                },
              ].map((faq) => (
                <div key={faq.id} className="border border-[#0f172a]/8 rounded-2xl overflow-hidden shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className={`w-full text-left font-bold text-[#0f172a] p-[18px] transition-colors flex justify-between items-center ${
                      openFaq === faq.id
                        ? 'bg-gradient-to-r from-[#16a34a]/8 to-[#0ea5e9]/8'
                        : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <span>{faq.q}</span>
                    <span className="text-xl font-light ml-2">{openFaq === faq.id ? '−' : '+'}</span>
                  </button>
                  {openFaq === faq.id && (
                    <div className="p-[18px] bg-white text-[#334155] leading-relaxed border-t border-[#0f172a]/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block w-[320px] shrink-0">
            <div className=" sticky top-28 px-2"><StickyContactForm /></div>
            
          </aside>
      </div>
      </div>
    </div>
  );
}