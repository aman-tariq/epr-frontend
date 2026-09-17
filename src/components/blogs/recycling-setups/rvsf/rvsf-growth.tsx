import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import StickyContactForm from '@/components/StickyContactForm';

Chart.register(...registerables);

export default function VehicleScrappingPlantSetup(): JSX.Element {
  const pieChartRef = useRef<HTMLCanvasElement | null>(null);
  const barChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let pieChartInstance: Chart | null = null;
    let barChartInstance: Chart | null = null;

    if (pieChartRef.current) {
      pieChartInstance = new Chart(pieChartRef.current, {
        type: 'pie',
        data: {
          labels: ['Uttar Pradesh', 'Haryana', 'Gujarat', 'Rajasthan', 'Maharashtra'],
          datasets: [
            {
              data: [43, 11, 8, 6, 4],
              backgroundColor: ['#198754', '#0dcaf0', '#ffc107', '#0d6efd', '#dc3545'],
              borderColor: '#ffffff',
              borderWidth: 3,
              hoverOffset: 10,
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
                boxWidth: 10,
                padding: 18,
              },
            },
          },
        },
      });
    }

    if (barChartRef.current) {
      barChartInstance = new Chart(barChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Uttar Pradesh', 'Haryana', 'Gujarat', 'Rajasthan', 'Maharashtra'],
          datasets: [
            {
              label: 'Vehicles Scrapped',
              data: [185000, 46000, 35000, 25000, 19000],
              backgroundColor: '#198754',
              borderRadius: 10,
              barThickness: 28,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0,0,0,.08)',
              },
            },
          },
        },
      });
    }

    return () => {
      if (pieChartInstance) pieChartInstance.destroy();
      if (barChartInstance) barChartInstance.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-[#f4f8f6] text-[#1f2d2a] font-sans antialiased m-0 p-0">
      <main className="w-full py-4 lg:py-10 px-1 md:px-2 mt-[40px] md:mt-[100px]">
        <div className= "flex flex-col lg:flex-row gap-2 items-stretch">

        
        <div>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f6b42]/96 to-[#198754]/92 bg-cover bg-center shadow-[0_18px_50px_rgba(16,24,40,0.15)] mb-6 lg:mb-10 w-full" style={{ backgroundImage: "linear-gradient(135deg, rgba(15,107,66,.96), rgba(25,135,84,.92)), url('https://images.unsplash.com/photo-1523037191307-3d887f9a8f2c?auto=format&fit=crop&w=1600&q=80')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-white/5 pointer-events-none" />
          <div className="relative z-10 p-6 sm:p-10 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/14 text-white border border-white/18 text-sm font-medium tracking-wide mb-4">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16"><path d="M5.338 1.59a.75.75 0 0 0-.542.221L.616 6.002a.75.75 0 0 0-.22.542v7.706c0 .414.336.75.75.75h13.708a.75.75 0 0 0 .75-.75V6.544a.75.75 0 0 0-.22-.542L11.204 1.811a.75.75 0 0 0-.542-.221H5.338zm.344 1.5h4.636l3.5 3.5H2.182l3.5-3.5zM1.646 7.854h12.708v5.646H1.646V7.854z"/></svg>
                  Sustainable recycling | Compliance-focused
                </span>
                <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4 drop-shadow-md">
                  Vehicle Scrapping Plant Setup: Driving Sustainable Growth
                </h1>
                <p className="text-white/92 text-lg sm:text-xl max-w-3xl mb-6">
                  A practical guide for investors, operators, and policymakers
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#procedure" className="inline-flex items-center bg-white text-[#1f2d2a] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                    Explore Setup Roadmap
                  </a>
                  <a href="#charts" className="inline-flex items-center border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                    View Market Charts
                  </a>
                </div>
              </div>
              
              <div className="lg:col-span-4">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                  <div className="bg-white/12 border border-white/15 rounded-2xl p-4 text-white shadow-lg">
                    <div className="text-xs uppercase tracking-widest text-white/75 mb-1">Regulatory Shift</div>
                    <p className="text-xl font-bold m-0">01 April 2025</p>
                  </div>
                  <div className="bg-white/12 border border-white/15 rounded-2xl p-4 text-white shadow-lg">
                    <div className="text-xs uppercase tracking-widest text-white/75 mb-1">Investment Range</div>
                    <p className="text-xl font-bold m-0">₹20–35 crore</p>
                  </div>
                  <div className="bg-white/12 border border-white/15 rounded-2xl p-4 text-white shadow-lg">
                    <div className="text-xs uppercase tracking-widest text-white/75 mb-1">Compliance Model</div>
                    <p className="text-xl font-bold m-0">Portal-Based</p>
                  </div>
                  <div className="bg-white/12 border border-white/15 rounded-2xl p-4 text-white shadow-lg">
                    <div className="text-xs uppercase tracking-widest text-white/75 mb-1">Business Impact</div>
                    <p className="text-xl font-bold m-0">Circular Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section id="introduction" className="bg-white/92 border-0 rounded-[1.5rem] p-6 lg:p-8 shadow-[0_10px_30px_rgba(16,24,40,0.08)] hover:shadow-[0_16px_38px_rgba(16,24,40,0.12)] transition-all mb-6 w-full">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#198754]/10 text-[#0f6b42] text-sm font-semibold">
              Introduction
            </span>
          </div>
          <h2 className="relative text-2xl lg:text-3xl font-extrabold text-[#1f2d2a] mb-6 pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[72px] after:h-[4px] after:rounded-full after:bg-gradient-to-r after:from-[#198754] after:to-[#0dcaf0]">
            Introduction
          </h2>

          <p className="text-[#44534f] text-base sm:text-lg leading-relaxed mb-4">
            From <strong>01 April 2025</strong>, vehicle scrapping in India entered a new regulatory era.
            Facilities now operate under both the <strong>Motor Vehicles Rules, 2021</strong> and the <strong>Environment Protection (End-of-Life Vehicles) Rules, 2025</strong>.
            This shift means a scrapping plant is no longer just a dismantling yard — it is:
          </p>

          <ul className="divide-y divide-black/5 list-none p-0 mb-4 text-[#3c4c47]">
            <li className="py-3">A regulated environmental activity</li>
            <li className="py-3">A data-driven steel recovery system</li>
            <li className="py-3">A portal-based compliance model</li>
            <li className="py-3">A certificate-linked revenue mechanism</li>
          </ul>

          <div className="bg-gradient-to-r from-[#198754]/8 to-[#0dcaf0]/7 border border-[#198754]/12 rounded-2xl p-4 sm:p-5 mb-6 text-[#1f2d2a]">
            Without structured compliance, investments of <strong>₹20–35 crore</strong> risk delays, highlighting the need for expert guidance.
          </div>

          <h3 className="text-xl font-bold mt-6 mb-2">Understanding Vehicle Scrapping</h3>
          <p className="text-[#44534f] text-base sm:text-lg leading-relaxed mb-4">
            Scrapping is the systematic dismantling of end-of-life vehicles (ELVs) to recover reusable parts and recycle materials.
            Old vehicles contribute to pollution through poor fuel efficiency and harmful emissions, making safe disposal essential under India’s scrappage policy.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2">What is a Vehicle Scrapping Plant?</h3>
          <p className="text-[#44534f] text-base sm:text-lg leading-relaxed mb-0">
            A scrapping plant manages the complete ELV process — dismantling, material segregation, component reuse, and safe disposal of hazardous waste.
            Demand for such facilities is rising, driven by sustainability goals and the mandatory <strong>scrapping certificate</strong> for deregistering old vehicles.
          </p>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="bg-white/92 border-0 rounded-[1.5rem] p-6 lg:p-8 shadow-[0_10px_30px_rgba(16,24,40,0.08)] hover:shadow-[0_16px_38px_rgba(16,24,40,0.12)] transition-all mb-6 w-full">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#198754]/10 text-[#0f6b42] text-sm font-semibold">
              Business Value
            </span>
          </div>
          <h2 className="relative text-2xl lg:text-3xl font-extrabold text-[#1f2d2a] mb-6 pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[72px] after:h-[4px] after:rounded-full after:bg-gradient-to-r after:from-[#198754] after:to-[#0dcaf0]">
            Benefits of Vehicle Scrapping Plant
          </h2>
          <p className="text-[#44534f] text-base sm:text-lg leading-relaxed mb-4">
            Setting up a vehicle scrapping plant delivers powerful advantages — driving sustainability, profitability, and compliance, while creating new opportunities for growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <strong className="block mb-2 text-[#198754] font-bold">Environmental Impact</strong>
              Recycling reduces harmful emissions and ensures safe disposal of toxic materials, protecting air and water quality.
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <strong className="block mb-2 text-[#198754] font-bold">Economic Gains</strong>
              Generates steady revenue from scrap sales (steel, aluminum, rubber) and attracts investment in the recycling sector.
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <strong className="block mb-2 text-[#198754] font-bold">Regulatory Compliance</strong>
              Aligns with India’s scrappage policy, avoiding penalties and ensuring smooth operations.
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <strong className="block mb-2 text-[#198754] font-bold">Employment Opportunities</strong>
              Creates jobs for technicians, recycling specialists, and administrative staff, strengthening local economies.
            </div>
          </div>
        </section>

        {/* PROCEDURE */}
        <section id="procedure" className="bg-white/92 border-0 rounded-[1.5rem] p-6 lg:p-8 shadow-[0_10px_30px_rgba(16,24,40,0.08)] hover:shadow-[0_16px_38px_rgba(16,24,40,0.12)] transition-all mb-6 w-full">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#198754]/10 text-[#0f6b42] text-sm font-semibold">
              Setup Roadmap
            </span>
          </div>
          <h2 className="relative text-2xl lg:text-3xl font-extrabold text-[#1f2d2a] mb-6 pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[72px] after:h-[4px] after:rounded-full after:bg-gradient-to-r after:from-[#198754] after:to-[#0dcaf0]">
            Procedure for Establishing a Vehicle Scrapping Plant
          </h2>
          <p className="text-[#44534f] text-base sm:text-lg leading-relaxed mb-4">
            Setting up a vehicle scrapping plant requires a clear roadmap of technical, regulatory, and operational steps. Here’s a streamlined guide:
          </p>

          <ol className="list-decimal list-inside divide-y divide-black/5 p-0 m-0 space-y-3 text-[#3c4c47]">
            <li className="pt-3">
              <strong>Conduct Feasibility Study:</strong> Assess demand, availability of end-of-life vehicles (ELVs), and competitor landscape.
            </li>
            <li className="pt-3">
              <strong>Select Suitable Land:</strong> Secure 2+ acres of industrial or non-agricultural land with space for dismantling and storage.
            </li>
            <li className="pt-3">
              <strong>Obtain Approvals:</strong> Apply online for RVSF certification, submit location proof, and prepare an environmental management plan.
            </li>
            <li className="pt-3">
              <strong>Register Facility:</strong> Complete RVSF registration via NSWS, ensuring certified equipment and hazardous waste provisions.
            </li>
            <li className="pt-3">
              <strong>Procure Machinery:</strong> Invest in shredders, crushers, hydraulic presses, and protective gear for staff.
            </li>
            <li className="pt-3">
              <strong>Hire &amp; Train Staff:</strong> Train teams in dismantling techniques, safety laws, and efficient recycling practices.
            </li>
            <li className="pt-3">
              <strong>Begin Operations:</strong> Launch under strict compliance, issuing scrapping certificates for each ELV to enable RTO deregistration.
            </li>
          </ol>

          <div className="bg-gradient-to-r from-[#198754]/8 to-[#0dcaf0]/7 border border-[#198754]/12 rounded-2xl p-4 sm:p-5 mt-6 text-[#1f2d2a]">
            With structured compliance and professional guidance, your investment is safeguarded while contributing to India’s sustainable recycling ecosystem.
          </div>
        </section>

        {/* CHARTS */}
        <section id="charts" className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 w-full">
          <div className="bg-white rounded-[1.5rem] p-6 lg:p-8 shadow-[0_10px_30px_rgba(16,24,40,0.08)] h-full">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#198754]/10 text-[#0f6b42] text-sm font-semibold">
                Market Distribution
              </span>
            </div>
            <h2 className="relative text-2xl font-extrabold text-[#1f2d2a] mb-4 pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[72px] after:h-[4px] after:rounded-full after:bg-gradient-to-r after:from-[#198754] after:to-[#0dcaf0]">
              State-Wise Distribution of RVSFs
            </h2>
            <p className="text-[#44534f] leading-relaxed mb-4">Leading states in RVSF adoption demonstrate where opportunities are strongest:</p>
            <div className="relative w-full h-[380px]">
              <canvas ref={pieChartRef}></canvas>
            </div>
          </div>

          <div className="bg-white rounded-[1.5rem] p-6 lg:p-8 shadow-[0_10px_30px_rgba(16,24,40,0.08)] h-full">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#198754]/10 text-[#0f6b42] text-sm font-semibold">
                Operational Throughput
              </span>
            </div>
            <h2 className="relative text-2xl font-extrabold text-[#1f2d2a] mb-4 pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[72px] after:h-[4px] after:rounded-full after:bg-gradient-to-r after:from-[#198754] after:to-[#0dcaf0]">
              Vehicles Scrapped Per State
            </h2>
            <p className="text-[#44534f] leading-relaxed mb-4">Throughput data highlights operational efficiency and regional performance:</p>
            <div className="relative w-full h-[380px]">
              <canvas ref={barChartRef}></canvas>
            </div>
          </div>
        </section>

        {/* BUSINESS SUPPORT */}
        <section id="support" className="bg-white/92 border-0 rounded-[1.5rem] p-6 lg:p-8 shadow-[0_10px_30px_rgba(16,24,40,0.08)] hover:shadow-[0_16px_38px_rgba(16,24,40,0.12)] transition-all mb-6 w-full">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#198754]/10 text-[#0f6b42] text-sm font-semibold">
              Client Support
            </span>
          </div>
          <h2 className="relative text-2xl lg:text-3xl font-extrabold text-[#1f2d2a] mb-6 pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[72px] after:h-[4px] after:rounded-full after:bg-gradient-to-r after:from-[#198754] after:to-[#0dcaf0]">
            How We Help Our Clients Build Business
          </h2>
          <p className="text-[#44534f] text-base sm:text-lg leading-relaxed mb-4">
            At <a href="https://eprnexuss.com" target="_blank" rel="noopener noreferrer" className="text-[#0f6b42] font-semibold hover:underline"><strong>EPR Nexus</strong></a>, we provide end-to-end consulting and compliance support for setting up
            vehicle scrapping plants. Our expertise ensures that clients navigate regulations smoothly, secure approvals quickly, and build sustainable operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <strong className="block mb-2 text-[#198754] font-bold">Licensing &amp; Approvals</strong>
              Guidance on CTE, CTO, and RVSF registration via NSWS.
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <strong className="block mb-2 text-[#198754] font-bold">Land &amp; Infrastructure</strong>
              Assistance with industrial land allocation, zoning, and layout planning.
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <strong className="block mb-2 text-[#198754] font-bold">Machinery Setup</strong>
              Advisory on procuring hydraulic presses, bailers, depollution systems, and IT integration.
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <strong className="block mb-2 text-[#198754] font-bold">Compliance Support</strong>
              Preparation of PAN, GST, CIN, fire safety NOC, and environmental documentation.
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <strong className="block mb-2 text-[#198754] font-bold">Operational Training</strong>
              Establishing depollution zones, dismantling processes, and digital record-keeping.
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <strong className="block mb-2 text-[#198754] font-bold">Partnerships</strong>
              Connecting clients with OEMs and industry partners for joint ventures and revenue growth.
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="bg-white/92 border-0 rounded-[1.5rem] p-6 lg:p-8 shadow-[0_10px_30px_rgba(16,24,40,0.08)] hover:shadow-[0_16px_38px_rgba(16,24,40,0.12)] transition-all mb-6 w-full">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#198754]/10 text-[#0f6b42] text-sm font-semibold">
              Client Advantage
            </span>
          </div>
          <h2 className="relative text-2xl lg:text-3xl font-extrabold text-[#1f2d2a] mb-6 pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[72px] after:h-[4px] after:rounded-full after:bg-gradient-to-r after:from-[#198754] after:to-[#0dcaf0]">
            Our Expertise and Client Advantage
          </h2>
          <p className="text-[#44534f] text-base sm:text-lg leading-relaxed mb-4">
            At <strong>EPR Nexus</strong>, we combine regulatory expertise, industry knowledge, and cost-effective strategies to help clients establish and grow successful vehicle scrapping ventures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <strong className="block mb-2 text-[#198754] font-bold">Regulatory Compliance</strong>
              We ensure full adherence to environmental and safety laws, minimizing downtime and avoiding legal risks.
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <strong className="block mb-2 text-[#198754] font-bold">Holistic Support</strong>
              From market research to operational launch, we simplify the setup process, making your business efficient and easy to manage.
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <strong className="block mb-2 text-[#198754] font-bold">Cost-Effective Solutions</strong>
              Leveraging industry insights, we design packages that enable profitable ventures with optimized investment.
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <strong className="block mb-2 text-[#198754] font-bold">Proven Industry Knowledge</strong>
              With deep expertise in vehicle scrapping, we provide invaluable guidance that reduces risks and accelerates success.
            </div>
          </div>
        </section>

        {/* CONCLUSION */}
        <section id="conclusion" className="bg-white/92 border-0 rounded-[1.5rem] p-6 lg:p-8 shadow-[0_10px_30px_rgba(16,24,40,0.08)] hover:shadow-[0_16px_38px_rgba(16,24,40,0.12)] transition-all mb-6 text-center w-full">
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#198754]/10 text-[#0f6b42] text-sm font-semibold">
              Final Takeaway
            </span>
          </div>
          <h2 className="relative inline-block text-2xl lg:text-3xl font-extrabold text-[#1f2d2a] mb-6 pb-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-[72px] after:h-[4px] after:rounded-full after:bg-gradient-to-r after:from-[#198754] after:to-[#0dcaf0]">
            Conclusion
          </h2>
          <p className="text-[#44534f] text-base sm:text-lg leading-relaxed mb-0">
            The <strong>Vehicle Scrapping Plant Setup</strong> is more than compliance — it’s a pathway to cleaner cities, circular economy growth, and profitable investment.
            With authentic data, clear processes, and professional guidance from <strong>EPR Nexus</strong>, clients can confidently build a sustainable scrappage ecosystem in India.
          </p>
        </section>
        </div>
        {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block w-[320px] shrink-0">
            <div className=" sticky top-28 px-2"><StickyContactForm /></div>
            
          </aside>
        </div>
      </main>
    </div>
  );
}