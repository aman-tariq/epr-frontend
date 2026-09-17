import React, { useEffect } from 'react';
import StickyContactForm from '../../StickyContactForm';

const TyreRecycling = () => {
  useEffect(() => {
    // Waste Volume Chart
    const wasteData = [
      { label: '2022', val: 1800, actual: true },
      { label: '2023', val: 2100, actual: true },
      { label: '2024', val: 2450, actual: true },
      { label: '2025', val: 2800, actual: false },
      { label: '2026', val: 3200, actual: false },
      { label: '2027', val: 3600, actual: false },
      { label: '2028', val: 4100, actual: false },
      { label: '2030', val: 5200, actual: false },
    ];

    const wasteChart = document.getElementById('wasteChart');
    if (wasteChart) {
      wasteChart.innerHTML = '';
      wasteData.forEach((d) => {
        const h = Math.round((d.val / 5200) * 170);
        const col = document.createElement('div');
        col.className = `
          flex flex-col items-center gap-1.5 sm:gap-2 
          min-w-[42px] sm:min-w-[52px] md:min-w-[65px]
        `;
       col.innerHTML = `
          <div class="text-[10px] sm:text-xs font-bold text-center">${d.val}K</div>
          <div class="w-6 sm:w-8 md:w-10 rounded-t-2xl transition-all" 
               style="height: ${h}px; background: ${d.actual ? '#0f766e' : '#14b8a6'};"></div>
          <div class="text-[9px] sm:text-[10px] text-gray-600 text-center">${d.label}</div>
        `;
        wasteChart.appendChild(col);
      });
    }

    // Material Value Chart
    const materialData = [
      { label: 'Rubber', val: 2.8, color: '#0f766e' },
      { label: 'Steel', val: 1.6, color: '#2563eb' },
      { label: 'Carbon Black', val: 1.2, color: '#14b8a6' },
      { label: 'Textile', val: 0.4, color: '#34d399' },
    ];

    const materialChart = document.getElementById('materialChart');
    if (materialChart) {
      materialChart.innerHTML = '';
      materialData.forEach((d) => {
        const h = Math.round((d.val / 2.8) * 170);
        const col = document.createElement('div');
        
        col.className = `
          flex flex-col items-center gap-1.5 sm:gap-2 
          min-w-[52px] sm:min-w-[65px]
        `;
        
        col.innerHTML = `
          <div class="text-[10px] sm:text-xs font-bold text-center">₹${d.val}L</div>
          <div class="w-6 sm:w-8 md:w-10 rounded-t-2xl" 
               style="height: ${h}px; background: ${d.color};"></div>
          <div class="text-[9px] sm:text-[10px] text-gray-600 text-center">${d.label}</div>
        `;
        materialChart.appendChild(col);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e5f0f5] to-[#f8f9fa] py-10 px-4 font-sans pt-24 lg:pt-36">
      {/* Custom CSS for Grid + Sticky Form */}
      <style>{`
        .tyre-recycling-wrap.has-sticky {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 40px;
          align-items: start;
        }

        .page-body { min-width: 0; }

        @media (max-width: 1024px) {
          .tyre-recycling-wrap.has-sticky {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        /* Chart responsiveness */
        #wasteChart, #materialChart {
          display: flex;
          align-items: end;
          gap: 8px;
          justify-content: center;
          flex-wrap: nowrap;
          overflow-x: auto;
          padding-bottom: 8px;
          scrollbar-width: thin;
        }

        @media (max-width: 640px) {
          #wasteChart, #materialChart {
            gap: 6px;
          }
        }
      `}</style>

      <div className="max-w-[1480px] mx-auto tyre-recycling-wrap has-sticky">
        
        {/* ==================== MAIN CONTENT ==================== */}
        <div className="page-body">
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-5 py-2 bg-white rounded-full text-xs font-bold tracking-widest border border-gray-200">
              EPR Nexuss | Official Guide
            </span>
            <span className="px-5 py-2 bg-white rounded-full text-xs font-bold tracking-widest border border-gray-200">
              🏭 Plant Setup
            </span>
            <span className="px-5 py-2 bg-white rounded-full text-xs font-bold tracking-widest border border-gray-200">
              📊 Market + Compliance
            </span>
          </div>

          {/* Hero Section */}
          <div className="relative bg-gradient-to-br from-[#0B1F3A] via-[#1C3D6E] to-[#0B1F3A] rounded-3xl p-6 md:p-12 md:p-16 text-white overflow-hidden mb-12 shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#5DCAA5]/20 rounded-full blur-3xl" />

            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/30 text-[#5DCAA5] text-sm font-bold px-6 py-2.5 rounded-full mb-6">
              <div className="w-2.5 h-2.5 bg-[#5DCAA5] rounded-full animate-pulse" />
              COMPLETE TYRE RECYCLING GUIDE 2026
            </div>

            <h1 className="text-xl md:text-5xl lg:text-6xl font-black leading-tight font-serif mb-6">
              ₹12,000 Crore Opportunity
              <br />
              <span className="text-[#5DCAA5]">Turn Waste Tyres Into Profit</span>
            </h1>

            <p className=" md:text-xl lg:text-2xl text-white/90 max-w-3xl">
              Complete step-by-step blueprint with EPR compliance, licences, land requirements, investment details, and real success stories.
            </p>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-2 md:gap-6 text-sm text-gray-600 mb-6 md:mb-12">
            <span><i className="fas fa-user mr-2"></i> By EPR Nexuss Team</span>
            <span><i className="fas fa-calendar mr-2"></i> April 2026</span>
            <span><i className="fas fa-clock mr-2"></i> 12 min read</span>
          </div>

          {/* Why Approvals Matter */}
          <h2 className="text-xl md:text-3xl font-bold text-[#0B1F3A] mb-4 font-serif">Why Approvals Matter Before Plant Setup</h2>
          <p className="text-[15.5px] leading-relaxed text-gray-700 mb-8">
            <strong>Brief Explanation:</strong> Starting construction without legal approvals can lead to heavy fines, legal notices, forced shutdown, or even demolition of the plant. Getting all clearances first is the safest and smartest way.
          </p>

          <div className="bg-[#E1F5EE] border-l-4 border-[#1D9E75] p-8 rounded-r-2xl mb-12 italic text-[#0A4A3A]">
            <strong>Client-Friendly Insight:</strong> Approvals are like your legal foundation. Without them, even the best machinery and land can become a very expensive mistake.
          </div>

          {/* What Client Needs to Understand */}
          <h2 className="text-xl lg:text-3xl font-bold text-[#0B1F3A] mb-4 font-serif">What Every Client Needs to Understand First</h2>
          <p className="text-[15.5px] leading-relaxed text-gray-700 mb-12">
            <strong>Brief Explanation:</strong> Tyre recycling is treated as hazardous waste activity. You must follow Extended Producer Responsibility (EPR) rules and get multiple environmental clearances before buying land or starting construction.
          </p>

          {/* Major Approvals */}
          <h2 className="text-xl md:text-3xl font-bold text-[#0B1F3A] mb-6 font-serif">Major Approvals Required</h2>
          <p className="text-[15.5px] leading-relaxed text-gray-700 mb-6">
            <strong>Brief Explanation:</strong> You need permissions from pollution boards and government departments to legally collect, store, and process used tyres.
          </p>
          <ul className="space-y-4 text-[15.5px] mb-12">
            {[
              "EPR Registration – Central Pollution Control Board (CPCB)",
              "Consent to Establish (CTE) – State Pollution Control Board (SPCB)",
              "Consent to Operate (CTO) – State Pollution Control Board (SPCB)",
              "Hazardous Waste Authorisation",
              "Factory Licence & Fire NOC"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#1D9E75] mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Approval Roadmap */}
          <h2 className="text-xl md:text-3xl font-bold text-[#0B1F3A] mb-6 font-serif">The Approval Roadmap in Simple Steps</h2>
          <p className="text-[15.5px] leading-relaxed text-gray-700 mb-8">
            <strong>Brief Explanation:</strong> Follow this sequence to avoid delays and rejections.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { step: "Step 1", title: "EPR Registration on CPCB Portal", time: "15–30 days" },
              { step: "Step 2", title: "Consent to Establish (CTE)", time: "45–90 days" },
              { step: "Step 3", title: "Consent to Operate (CTO) after construction", time: "30–60 days" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <strong className="text-[#1D9E75] block mb-2">{item.step}:</strong>
                <div className="font-semibold text-lg mb-2">{item.title}</div>
                <small className="text-gray-500">{item.time}</small>
              </div>
            ))}
          </div>

          {/* Market Opportunity */}
          <h2 className="text-xl md:text-3xl font-bold text-[#0B1F3A] mb-6 font-serif">Market Opportunity – Why Now is the Right Time</h2>
          <p className="text-[15.5px] leading-relaxed text-gray-700 mb-8">
            <strong>Brief Explanation:</strong> India generates millions of scrap tyres every year. This creates a huge business opportunity for recycling.
          </p>

          {/* Waste Volume Chart */}
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
            <div className="font-bold text-xl mb-6 flex items-center gap-3">
              📈 Scrap Tyre Waste Volume (Metric Tonnes)
            </div>
            <div id="wasteChart" className="flex items-end gap-6 h-[260px] pt-6" />
          </div>

          {/* Material Value Chart */}
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-16">
            <div className="font-bold text-xl mb-6 flex items-center gap-3">
              💰 Recoverable Value per Tonne (₹ Lakhs)
            </div>
            <div id="materialChart" className="flex items-end gap-6 h-[260px] pt-6" />
          </div>

          {/* Land Requirements */}
          <h2 className="text-xl md:text-3xl font-bold text-[#0B1F3A] mb-6 font-serif">Land Requirements – What You Need</h2>
          <p className="text-[15.5px] leading-relaxed text-gray-700 mb-10">
            <strong>Brief Explanation:</strong> Choosing the right land is critical because you need space for tyre storage and safety buffers.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-4 md:p-10 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Small Scale</h3>
              <h2 className="text-xl md:text-5xl font-bold text-[#1D9E75] mb-3">0.75–1.5 Acre</h2>
              <p className="text-gray-600">Up to 2,000 TPY</p>
            </div>

            <div className="bg-gradient-to-br from-[#0B1F3A] to-[#1C3D6E] text-white p-4 md:p-10 rounded-2xl shadow-xl text-center scale-105">
              <h3 className="text-xl font-semibold mb-4">Mid Scale ★ Recommended</h3>
              <h2 className="text-xl md:text-5xl font-bold text-[#5DCAA5] mb-3">2–6 Acres</h2>
              <p>2,000–10,000 TPY (Best ROI)</p>
            </div>

            <div className="bg-white p-4 md:p-10 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Large Scale</h3>
              <h2 className="text-xl md:text-5xl font-bold text-[#1D9E75] mb-3">10–25 Acres</h2>
              <p className="text-gray-600">10,000+ TPY</p>
            </div>
          </div>

          {/* Case Study */}
          <h2 className="text-xl md:text-3xl font-bold text-[#0B1F3A] mb-6 font-serif">Real Success Story</h2>
          <div className="bg-white p-4 md:p-10 rounded-3xl shadow-xl mb-16">
            <strong className="text-xl">GreenRubber Recycling Pvt. Ltd., Coimbatore</strong>
            <div className="mt-6 grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div><strong>Capacity:</strong><br />6,000 TPY</div>
              <div><strong>Investment:</strong><br />₹7.8 Cr</div>
              <div><strong>Timeline:</strong><br />13 Months to First Batch</div>
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-xl md:text-3xl font-bold text-[#0B1F3A] mb-8 font-serif">Frequently Asked Questions (FAQs)</h2>
          <div className="bg-white rounded-3xl p-4 md:p-10 shadow-xl space-y-8 text-[15.5px]">
            <div>
              <strong>Q: How long do approvals take?</strong><br />
              <span className="text-gray-700">A: Usually 4–8 months with expert guidance.</span>
            </div>
            <div>
              <strong>Q: What is the biggest pain point?</strong><br />
              <span className="text-gray-700">A: Getting consistent tyre supply and clearing multiple approvals.</span>
            </div>
            <div>
              <strong>Q: Is Fire NOC mandatory?</strong><br />
              <span className="text-gray-700">A: Yes — tyres are highly flammable and need strict safety measures.</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-20 bg-gradient-to-br from-[#0B1F3A] to-[#1C3D6E] rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-xl md:text-4xl font-bold mb-6">Ready to Build Your Profitable Tyre Recycling Plant?</h2>
            <button
              onClick={() => window.location.href = 'mailto:info@eprnexuss.com'}
              className="bg-gradient-to-r from-[#16a34a] to-[#22c55e] hover:from-[#15803d] hover:to-[#16a34a] text-white font-bold  md:text-xl px-6 md:px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all active:scale-95"
            >
              Book Your Free Consultation Now ↗
            </button>
          </div>
        </div>

        {/* ==================== STICKY FORM ==================== */}
        <div className="hidden lg:block sticky top-28 self-start">
          <StickyContactForm />
        </div>
      </div>
    </div>
  );
};

export default TyreRecycling;