import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import StickyContactForm from '@/components/StickyContactForm';

export default function CPCBComplianceGuide() {
  // State for Tabs
  const [activeTab, setActiveTab] = useState<'tab1' | 'tab2' | 'tab3' | 'tab4'>('tab1');

  // State for Accordion
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Canvas Refs for Chart.js
  const eprTargetChartRef = useRef<HTMLCanvasElement | null>(null);
  const eprTradingChartRef = useRef<HTMLCanvasElement | null>(null);
  const materialRecoveryChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Chart 1: EPR Recycling Target Bar Chart
    let chart1: Chart | null = null;
    if (eprTargetChartRef.current) {
      chart1 = new Chart(eprTargetChartRef.current, {
        type: 'bar',
        data: {
          labels: ['FY 2023-24', 'FY 2024-25', 'FY 2025-26 (Current)', 'FY 2026-27+'],
          datasets: [
            {
              label: 'Mandatory Recycling Target (%)',
              data: [60, 70, 80, 80],
              backgroundColor: ['#088395', '#05BFDB', '#1B9C85', '#4E9F3D'],
              borderRadius: 8,
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                callback: function (value) {
                  return value + '%';
                },
              },
            },
          },
          plugins: {
            legend: { display: false },
          },
        },
      });
    }

    // Chart 2: EPR Trading Flow Line Chart
    let chart2: Chart | null = null;
    if (eprTradingChartRef.current) {
      chart2 = new Chart(eprTradingChartRef.current, {
        type: 'line',
        data: {
          labels: ['Q1 (Apr-Jun)', 'Q2 (Jul-Sep)', 'Q3 (Oct-Dec)', 'Q4 (Jan-Mar)'],
          datasets: [
            {
              label: 'EPR Certificate Supply (Recyclers)',
              data: [1500, 3200, 5400, 8900],
              borderColor: '#1B9C85',
              backgroundColor: 'rgba(27, 156, 133, 0.1)',
              fill: true,
              tension: 0.3,
            },
            {
              label: 'EPR Certificate Demand (Producers)',
              data: [1200, 2800, 6100, 9500],
              borderColor: '#0A4D68',
              backgroundColor: 'rgba(10, 77, 104, 0.1)',
              fill: true,
              tension: 0.3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top' },
          },
        },
      });
    }

    // Chart 3: Material Recovery Chart
    let chart3: Chart | null = null;
    if (materialRecoveryChartRef.current) {
      chart3 = new Chart(materialRecoveryChartRef.current, {
        type: 'doughnut',
        data: {
          labels: [
            'Ferrous Metals (Iron/Steel)',
            'Non-Ferrous (Copper/Aluminium)',
            'Plastics',
            'Precious Metals (Gold/Silver)',
            'Residue/Glass',
          ],
          datasets: [
            {
              data: [45, 25, 15, 5, 10],
              backgroundColor: ['#0A4D68', '#088395', '#05BFDB', '#1B9C85', '#CBD5E1'],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'right' },
            title: {
              display: true,
              text: 'Average Material Yield Distribution per Ton of E-Waste',
            },
          },
        },
      });
    }

    return () => {
      if (chart1) chart1.destroy();
      if (chart2) chart2.destroy();
      if (chart3) chart3.destroy();
    };
  }, []);

  return (
    <div className="w-full md:mt-[130px] mt-14 min-h-screen bg-[#EBF4F6] text-[#1E293B] font-sans leading-relaxed m-0 p-0">
        <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        <div>
      {/* Header Banner */}
      <header className="w-full bg-gradient-to-br from-[#0A4D68] via-[#088395] to-[#1B9C85] text-white py-15 px-4 sm:px-10 text-center shadow-lg">
        <h1 className="text-2xl sm:text-4xl py-10 lg:text-[2.8rem] font-extrabold mb-5 leading-tight drop-shadow">
          CPCB Registration & E-Waste Management Rules 2022:<br />
          Complete Compliance Guide
        </h1>
        <p className="text-base sm:text-xl max-w-[1100px] mx-auto opacity-95 font-light">
          Everything producers, importers, refurbishers, dismantlers, and recyclers need to know to stay compliant under the new Extended Producer Responsibility (EPR) regime enforced from April 1, 2023. Updated with 2026 targets, portal workflows, and penalty framework.
        </p>
        <div className="mt-6 flex justify-center py-10 gap-3.5 flex-wrap">
          <span className="bg-white/20 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            🌱 EPR Framework 2022
          </span>
          <span className="bg-white/20 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            ⚙️ Enforced April 1, 2023
          </span>
          <span className="bg-white/20 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            📈 Active 2026 Recycling Targets
          </span>
          <span className="bg-white/20 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            ⚖️ Penalty & Audit Ready
          </span>
        </div>
      </header>

      {/* Main Container */}
      <div className="w-full py-10 px-0 sm:px-0">
        {/* Section 1: Introduction & Legislative Background */}
        <section className="bg-white rounded-2xl p-[35px] mb-[40px] shadow-sm border border-[#E2E8F0]">
          <h2 className="text-[1.8rem] text-[#0A4D68] mb-5 flex items-center gap-3 border-b-3 border-[#05BFDB] pb-2.5 font-bold">
            <span className="bg-[#EBF4F6] text-[#088395] w-[45px] h-[45px] rounded-xl inline-flex items-center justify-center text-[1.4rem] font-bold">
              01
            </span>{' '}
            Introduction & Legislative Context
          </h2>
          <p className="mb-[15px] text-[#1E293B] text-[1.05rem]">
            India is currently the third-largest producer of electronic waste (e-waste) globally. To curb environmental damage, promote a circular economy, and streamline regulatory oversight, the Ministry of Environment, Forest and Climate Change (MoEFCC) notified the <strong>E-Waste (Management) Rules, 2022</strong>, superseding the previous 2016 framework. Effective from <strong>April 1, 2023</strong>, these rules introduce a digitized, centralized, and mandatory Extended Producer Responsibility (EPR) structure governed by the Central Pollution Control Board (CPCB).
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mt-[25px]">
            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#1B9C85] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">Centralized Portal</h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Eliminates state-by-state manual filings with a single online portal for registration, target allocation, and certificate trading.
              </p>
            </div>
            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#088395] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">Expanded Scope</h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Broadened electrical and electronic equipment (EEE) categories from 2 to 106 item codes across 7 distinct categories.
              </p>
            </div>
            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#1B9C85] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">Market Mechanism</h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Introduces verifiable EPR Certificate trading between registered recyclers and producers to fulfill mandatory targets.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Key Stakeholders & Categorization */}
        <section className="bg-white rounded-2xl p-[35px] mb-[40px] shadow-sm border border-[#E2E8F0]">
          <h2 className="text-[1.8rem] text-[#0A4D68] mb-5 flex items-center gap-3 border-b-3 border-[#05BFDB] pb-2.5 font-bold">
            <span className="bg-[#EBF4F6] text-[#088395] w-[45px] h-[45px] rounded-xl inline-flex items-center justify-center text-[1.4rem] font-bold">
              02
            </span>{' '}
            Key Stakeholder Roles Under the 2022 Rules
          </h2>
          <p className="mb-[15px] text-[#1E293B] text-[1.05rem]">
            The 2022 Rules apply directly to four primary entity types. Every entity operating in the EEE supply chain must register independently under its specific category on the CPCB Portal.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-[30px]">
            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#088395] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">1. Producers & Importers</h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Any entity manufacturing, assembling, or importing EEE under its own brand or selling imported EEE in India. Responsible for meeting mandatory annual EPR recycling targets through purchasing EPR certificates.
              </p>
            </div>
            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#1B9C85] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">2. Refurbishers</h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Entities repairing or extending the lifecycle of used EEE. Refurbishing extends product life and generates refurbishing certificates that can defer producer EPR obligations.
              </p>
            </div>
            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#1B9C85] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">3. Recyclers</h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Authorized facilities extracting end-of-life materials (metals, plastics, precious elements). They are the sole generators of tradable EPR certificates based on actual recycling yield.
              </p>
            </div>
            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#088395] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">4. Bulk Consumers & Manufacturers</h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Bulk consumers (corporate bodies, government departments) must route e-waste exclusively through registered entities, ensuring transparent end-to-end audit trails.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: EEE Categories Expansion */}
        <section className="bg-white rounded-2xl p-[35px] mb-[40px] shadow-sm border border-[#E2E8F0]">
          <h2 className="text-[1.8rem] text-[#0A4D68] mb-5 flex items-center gap-3 border-b-3 border-[#05BFDB] pb-2.5 font-bold">
            <span className="bg-[#EBF4F6] text-[#088395] w-[45px] h-[45px] rounded-xl inline-flex items-center justify-center text-[1.4rem] font-bold">
              03
            </span>{' '}
            Expanded Scope of Electrical & Electronic Equipment (EEE)
          </h2>
          <p className="mb-[15px] text-[#1E293B] text-[1.05rem]">
            The E-Waste Rules 2022 significantly expanded covered items from basic IT and consumer electronics to cover 106 specific item codes categorized into 7 main categories:
          </p>

          <div className="flex gap-[10px] mb-[20px] border-b-2 border-[#E2E8F0] overflow-x-auto pb-1">
            <button
              className={`px-6 py-3 text-base font-semibold border-b-3 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'tab1'
                  ? 'text-[#0A4D68] border-b-[#1B9C85] bg-[#E8F5E9] rounded-t-lg'
                  : 'text-[#64748B] border-b-transparent hover:text-[#0A4D68]'
              }`}
              onClick={() => setActiveTab('tab1')}
            >
              IT & Telecom
            </button>
            <button
              className={`px-6 py-3 text-base font-semibold border-b-3 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'tab2'
                  ? 'text-[#0A4D68] border-b-[#1B9C85] bg-[#E8F5E9] rounded-t-lg'
                  : 'text-[#64748B] border-b-transparent hover:text-[#0A4D68]'
              }`}
              onClick={() => setActiveTab('tab2')}
            >
              Consumer Goods
            </button>
            <button
              className={`px-6 py-3 text-base font-semibold border-b-3 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'tab3'
                  ? 'text-[#0A4D68] border-b-[#1B9C85] bg-[#E8F5E9] rounded-t-lg'
                  : 'text-[#64748B] border-b-transparent hover:text-[#0A4D68]'
              }`}
              onClick={() => setActiveTab('tab3')}
            >
              Large & Small Equipment
            </button>
            <button
              className={`px-6 py-3 text-base font-semibold border-b-3 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'tab4'
                  ? 'text-[#0A4D68] border-b-[#1B9C85] bg-[#E8F5E9] rounded-t-lg'
                  : 'text-[#64748B] border-b-transparent hover:text-[#0A4D68]'
              }`}
              onClick={() => setActiveTab('tab4')}
            >
              Tools & Medical Devices
            </button>
          </div>

          {activeTab === 'tab1' && (
            <div className="p-5 bg-[#FAFAFA] rounded-lg border border-[#E2E8F0]">
              <h4 className="font-bold text-[#0A4D68] text-lg mb-2">
                Category I: Information Technology & Telecommunication Equipment
              </h4>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Includes centralized data processing systems, mainframes, minicomputers, personal computers, laptops, notebooks, notepad computers, printers, copying equipment, telephones, cellular phones, smartwatches, and routers.
              </p>
            </div>
          )}

          {activeTab === 'tab2' && (
            <div className="p-5 bg-[#FAFAFA] rounded-lg border border-[#E2E8F0]">
              <h4 className="font-bold text-[#0A4D68] text-lg mb-2">
                Category II: Consumer Electronics & Photovoltaic Panels
              </h4>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Includes television sets, monitors, liquid crystal display (LCD) & LED screens, refrigerators, washing machines, air conditioners, and Solar Photovoltaic (PV) Panels/Modules.
              </p>
            </div>
          )}

          {activeTab === 'tab3' && (
            <div className="p-5 bg-[#FAFAFA] rounded-lg border border-[#E2E8F0]">
              <h4 className="font-bold text-[#0A4D68] text-lg mb-2">
                Category III & IV: Large & Small Electrical/Electronic Tools
              </h4>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Covers microwave ovens, vacuum cleaners, lawn mowers, drills, saws, sewing machines, video games, sports equipment with electric components, and vending machines.
              </p>
            </div>
          )}

          {activeTab === 'tab4' && (
            <div className="p-5 bg-[#FAFAFA] rounded-lg border border-[#E2E8F0]">
              <h4 className="font-bold text-[#0A4D68] text-lg mb-2">
                Category V & VI: Medical Devices & Laboratory Equipment
              </h4>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Includes X-ray units, radiotherapy equipment, cardiology equipment, dialysis machines, analyzers, laboratory centrifuges, and automated diagnostic tools (excluding infected/contaminated devices).
              </p>
            </div>
          )}
        </section>

        {/* Section 4: Progressive EPR Targets (2023–2026+) */}
        <section className="bg-white rounded-2xl p-[35px] mb-[40px] shadow-sm border border-[#E2E8F0]">
          <h2 className="text-[1.8rem] text-[#0A4D68] mb-5 flex items-center gap-3 border-b-3 border-[#05BFDB] pb-2.5 font-bold">
            <span className="bg-[#EBF4F6] text-[#088395] w-[45px] h-[45px] rounded-xl inline-flex items-center justify-center text-[1.4rem] font-bold">
              04
            </span>{' '}
            EPR Recycling Trajectory & 2026 Targets
          </h2>
          <p className="mb-[15px] text-[#1E293B] text-[1.05rem]">
            Under the EPR framework, producers are mandated to collect and recycle a specific percentage of e-waste generated based on historical sales and standard product average lifespans.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            <div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mt-[15px] bg-white rounded-lg overflow-hidden border border-[#E2E8F0]">
                  <thead>
                    <tr className="bg-[#0A4D68] text-white">
                      <th className="p-3.5 sm:p-4 border-b border-[#E2E8F0] text-left font-semibold">
                        Financial Year (FY)
                      </th>
                      <th className="p-3.5 sm:p-4 border-b border-[#E2E8F0] text-left font-semibold">
                        Required Recycling Target (% of Generation)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E2E8F0]">
                      <td className="p-3.5 sm:p-4">2023 – 2024</td>
                      <td className="p-3.5 sm:p-4">60%</td>
                    </tr>
                    <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                      <td className="p-3.5 sm:p-4">2024 – 2025</td>
                      <td className="p-3.5 sm:p-4">70%</td>
                    </tr>
                    <tr className="border-b border-[#E2E8F0]">
                      <td className="p-3.5 sm:p-4 font-bold">2025 – 2026 (Current)</td>
                      <td className="p-3.5 sm:p-4 font-bold">80%</td>
                    </tr>
                    <tr className="bg-[#F8FAFC]">
                      <td className="p-3.5 sm:p-4">2026 – 2027 & Onwards</td>
                      <td className="p-3.5 sm:p-4">80% (100% Target Monitoring)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-[#FFFBEB] border-l-5 border-[#FCD34D] text-[#92400E] p-[20px] rounded-lg my-[20px] flex gap-[15px] items-center">
                <span className="text-[1.8rem]">⚠️</span>
                <div>
                  <strong>Note for New Entities:</strong> Entities commencing operations after April 1, 2023, benefit from deferred multi-year scaling targets depending on average product lifespans.
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-center text-[#0A4D68] mb-[10px] font-bold text-lg">
                EPR Recycling Target Growth Trend (%)
              </h4>
              <div className="relative w-full h-[300px] sm:h-[400px]">
                <canvas ref={eprTargetChartRef}></canvas>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: CPCB Online Portal Workflow */}
        <section className="bg-white rounded-2xl p-[35px] mb-[40px] shadow-sm border border-[#E2E8F0]">
          <h2 className="text-[1.8rem] text-[#0A4D68] mb-5 flex items-center gap-3 border-b-3 border-[#05BFDB] pb-2.5 font-bold">
            <span className="bg-[#EBF4F6] text-[#088395] w-[45px] h-[45px] rounded-xl inline-flex items-center justify-center text-[1.4rem] font-bold">
              05
            </span>{' '}
            CPCB Registration Workflow & Step-by-Step Portal Guide
          </h2>
          <p className="mb-[15px] text-[#1E293B] text-[1.05rem]">
            Registration must be completed on the official CPCB E-Waste Portal before initiating sales, imports, or recycling activities. Operating without registration is illegal under the Environment (Protection) Act, 1986.
          </p>

          <div className="flex flex-col gap-[15px]">
            <div className="flex items-start gap-[20px] bg-[#F8FAFC] border-l-5 border-[#088395] p-[20px] rounded-lg">
              <div className="bg-[#088395] text-white w-[36px] h-[36px] rounded-full flex items-center justify-center font-bold shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-[#0A4D68] text-lg mb-1">Account Creation & Entity Profiling</h4>
                <p className="text-[#1E293B] text-[1.05rem] mb-0">
                  Sign up on the portal selecting your specific role (Producer, Importer, Refurbisher, Recycler). Upload Company PAN, GST, Director/Proprietor IDs, and Authorized Signatory credentials.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[20px] bg-[#F8FAFC] border-l-5 border-[#088395] p-[20px] rounded-lg">
              <div className="bg-[#088395] text-white w-[36px] h-[36px] rounded-full flex items-center justify-center font-bold shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-[#0A4D68] text-lg mb-1">Sales Data Submission & Lifespan Calculation</h4>
                <p className="text-[#1E293B] text-[1.05rem] mb-0">
                  Producers submit historical sales data item code-wise for previous years corresponding to the standard average lifespan defined by CPCB for each EEE item.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[20px] bg-[#F8FAFC] border-l-5 border-[#088395] p-[20px] rounded-lg">
              <div className="bg-[#088395] text-white w-[36px] h-[36px] rounded-full flex items-center justify-center font-bold shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-[#0A4D68] text-lg mb-1">Automated Target Generation</h4>
                <p className="text-[#1E293B] text-[1.05rem] mb-0">
                  The automated CPCB portal engine calculates your exact EPR target (in tonnes) for each metallic and non-metallic material stream for the current financial year.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[20px] bg-[#F8FAFC] border-l-5 border-[#088395] p-[20px] rounded-lg">
              <div className="bg-[#088395] text-white w-[36px] h-[36px] rounded-full flex items-center justify-center font-bold shrink-0">
                4
              </div>
              <div>
                <h4 className="font-bold text-[#0A4D68] text-lg mb-1">Certificate Purchase & Compliance Filing</h4>
                <p className="text-[#1E293B] text-[1.05rem] mb-0">
                  Fulfill your targets by purchasing EPR Certificates directly from registered recyclers via the portal's online settlement engine and file quarterly/annual returns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: EPR Certificate Mechanism & Trading Ecosystem */}
        <section className="bg-white rounded-2xl p-[35px] mb-[40px] shadow-sm border border-[#E2E8F0]">
          <h2 className="text-[1.8rem] text-[#0A4D68] mb-5 flex items-center gap-3 border-b-3 border-[#05BFDB] pb-2.5 font-bold">
            <span className="bg-[#EBF4F6] text-[#088395] w-[45px] h-[45px] rounded-xl inline-flex items-center justify-center text-[1.4rem] font-bold">
              06
            </span>{' '}
            EPR Certificate Trading Ecosystem & Credit System
          </h2>
          <p className="mb-[15px] text-[#1E293B] text-[1.05rem]">
            The 2022 rules replaced physical collection proofs with digitized <strong>EPR Certificates</strong>. Here is how the circular economy framework operates in practice:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-6">
            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#1B9C85] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">Generation of EPR Certificates</h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Recyclers process e-waste and upload proof of recycling along with end-product recovery data. The CPCB portal automatically issues non-duplicable digital EPR certificates to recyclers credited per metric ton of recovered material.
              </p>
            </div>
            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#088395] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">Trading & Target Settlement</h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Producers purchase these certificates online to balance their compliance obligations. All transactions are logged in real-time, preventing fraud, double-counting, or phantom recycling reporting.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[300px] sm:h-[350px]">
            <canvas ref={eprTradingChartRef}></canvas>
          </div>
        </section>

        {/* Section 7: Reduction of Hazardous Substances (RoHS) Compliance */}
        <section className="bg-white rounded-2xl p-[35px] mb-[40px] shadow-sm border border-[#E2E8F0]">
          <h2 className="text-[1.8rem] text-[#0A4D68] mb-5 flex items-center gap-3 border-b-3 border-[#05BFDB] pb-2.5 font-bold">
            <span className="bg-[#EBF4F6] text-[#088395] w-[45px] h-[45px] rounded-xl inline-flex items-center justify-center text-[1.4rem] font-bold">
              07
            </span>{' '}
            Reduction of Hazardous Substances (RoHS) Mandate
          </h2>
          <p className="mb-[15px] text-[#1E293B] text-[1.05rem]">
            Every producer must ensure that all new EEE launched into the market complies with strict RoHS threshold limits. Non-compliant products face mandatory market recalls.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            <div>
              <p className="font-bold text-[#1E293B] text-[1.05rem] mb-2">
                Restricted Substances & Maximum Permitted Limits:
              </p>
              <ul className="pl-[20px] leading-8 list-disc text-[#1E293B] text-[1.05rem]">
                <li>
                  <strong>Lead (Pb):</strong> &lt; 0.1% by weight
                </li>
                <li>
                  <strong>Mercury (Hg):</strong> &lt; 0.1% by weight
                </li>
                <li>
                  <strong>Hexavalent Chromium (Cr6+):</strong> &lt; 0.1% by weight
                </li>
                <li>
                  <strong>Polybrominated Biphenyls (PBB):</strong> &lt; 0.1% by weight
                </li>
                <li>
                  <strong>Polybrominated Diphenyl Ethers (PBDE):</strong> &lt; 0.1% by weight
                </li>
                <li>
                  <strong>Cadmium (Cd):</strong> &lt; 0.01% by weight
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#088395] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">
                RoHS Verification & Self-Declaration
              </h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Producers must maintain detailed Technical Files (encompassing component test reports from NABL accredited labs) and submit a RoHS Self-Declaration during product registration and renewal cycles.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Refurbisher Ecosystem & Target Adjustments */}
        <section className="bg-white rounded-2xl p-[35px] mb-[40px] shadow-sm border border-[#E2E8F0]">
          <h2 className="text-[1.8rem] text-[#0A4D68] mb-5 flex items-center gap-3 border-b-3 border-[#05BFDB] pb-2.5 font-bold">
            <span className="bg-[#EBF4F6] text-[#088395] w-[45px] h-[45px] rounded-xl inline-flex items-center justify-center text-[1.4rem] font-bold">
              08
            </span>{' '}
            Role of Refurbishers & EPR Target Offsetting
          </h2>
          <p className="mb-[15px] text-[#1E293B] text-[1.05rem]">
            Refurbishers play a pivotal role in extending product lifespans, reducing overall waste generation, and providing flexibility to registered producers.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px]">
            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#1B9C85] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">Lifecycle Extension</h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Refurbishers register on the portal and record every unit repaired and re-entered into the commercial market.
              </p>
            </div>
            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#088395] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">Refurbishing Certificates</h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Refurbishing generates formal certificates that can be transferred or sold to producers.
              </p>
            </div>
            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#1B9C85] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">Target Deferment</h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                When a producer uses a Refurbishing Certificate, their EPR obligation for that specific unit is deferred by the exact number of years added to the product's lifespan.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Recycler Capacity & Real-Time Monitoring */}
        <section className="bg-white rounded-2xl p-[35px] mb-[40px] shadow-sm border border-[#E2E8F0]">
          <h2 className="text-[1.8rem] text-[#0A4D68] mb-5 flex items-center gap-3 border-b-3 border-[#05BFDB] pb-2.5 font-bold">
            <span className="bg-[#EBF4F6] text-[#088395] w-[45px] h-[45px] rounded-xl inline-flex items-center justify-center text-[1.4rem] font-bold">
              09
            </span>{' '}
            Recycler Compliance, Capacity Audits & Yield Factors
          </h2>
          <p className="mb-[15px] text-[#1E293B] text-[1.05rem]">
            Recyclers are subject to standard operating procedures (SOPs), environmental audit protocols, and strict conversion yield monitoring by State Pollution Control Boards (SPCBs) and CPCB.
          </p>

          <div className="relative w-full h-[300px] sm:h-[400px] my-5">
            <canvas ref={materialRecoveryChartRef}></canvas>
          </div>

          <p className="mt-[15px] text-[#1E293B] text-[1.05rem]">
            Certificates are generated based on actual end-material recovery (e.g., copper, aluminum, iron, precious metals, gold, plastics) rather than simple total weight received at the gate.
          </p>
        </section>

        {/* Section 10: Environmental Compensation & Penalty Framework */}
        <section className="bg-white rounded-2xl p-[35px] mb-[40px] shadow-sm border border-[#E2E8F0]">
          <h2 className="text-[1.8rem] text-[#0A4D68] mb-5 flex items-center gap-3 border-b-3 border-[#05BFDB] pb-2.5 font-bold">
            <span className="bg-[#EBF4F6] text-[#088395] w-[45px] h-[45px] rounded-xl inline-flex items-center justify-center text-[1.4rem] font-bold">
              10
            </span>{' '}
            Environmental Compensation (EC) & Penalty Framework
          </h2>
          <p className="mb-[15px] text-[#1E293B] text-[1.05rem]">
            The "Polluter Pays" principle is strictly enforced under the 2022 framework. Failure to fulfill EPR targets, operating without CPCB registration, or submitting false data results in severe financial penalties termed <strong>Environmental Compensation (EC)</strong>.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse mt-[15px] bg-white rounded-lg overflow-hidden border border-[#E2E8F0]">
              <thead>
                <tr className="bg-[#0A4D68] text-white">
                  <th className="p-3.5 sm:p-4 border-b border-[#E2E8F0] text-left font-semibold">
                    Violation / Delay Type
                  </th>
                  <th className="p-3.5 sm:p-4 border-b border-[#E2E8F0] text-left font-semibold">
                    Financial Penalty Structure / Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E2E8F0]">
                  <td className="p-3.5 sm:p-4">Shortfall in EPR Target Fulfillment</td>
                  <td className="p-3.5 sm:p-4">
                    EC charged per ton of target shortfall (set higher than average EPR certificate market rate).
                  </td>
                </tr>
                <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                  <td className="p-3.5 sm:p-4">Delay in Quarterly / Annual Return Filing</td>
                  <td className="p-3.5 sm:p-4">
                    Tiered daily financial penalties up to ₹10,000/day until compliance is met.
                  </td>
                </tr>
                <tr className="border-b border-[#E2E8F0]">
                  <td className="p-3.5 sm:p-4">Unregistered Operation / Sales</td>
                  <td className="p-3.5 sm:p-4">
                    Immediate closure notice, seizure of inventory, and penal EC assessed retrospectively.
                  </td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-3.5 sm:p-4">Fraudulent Certificate Trading</td>
                  <td className="p-3.5 sm:p-4">
                    Cancellation of registration, EC equal to 200% of certificate value, and prosecution under Section 15 of EP Act.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#FFFBEB] border-l-5 border-[#FCD34D] text-[#92400E] p-[20px] rounded-lg my-[20px] flex gap-[15px] items-center">
            <span className="text-[1.8rem]">💡</span>
            <div>
              <strong>EC Refund Clause:</strong> If a producer fulfills their target shortfall within 3 years of paying Environmental Compensation, a portion of the EC is refunded (75% in Year 1, 60% in Year 2, and 40% in Year 3). No refund is granted after 3 years.
            </div>
          </div>
        </section>

        {/* Section 11: Annual Returns & Record Keeping */}
        <section className="bg-white rounded-2xl p-[35px] mb-[40px] shadow-sm border border-[#E2E8F0]">
          <h2 className="text-[1.8rem] text-[#0A4D68] mb-5 flex items-center gap-3 border-b-3 border-[#05BFDB] pb-2.5 font-bold">
            <span className="bg-[#EBF4F6] text-[#088395] w-[45px] h-[45px] rounded-xl inline-flex items-center justify-center text-[1.4rem] font-bold">
              11
            </span>{' '}
            Filing Compliance Returns & Audit Preparation
          </h2>
          <p className="mb-[15px] text-[#1E293B] text-[1.05rem]">
            All registered stakeholders must maintain meticulous records and submit periodic compliance returns on the CPCB portal:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#088395] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">Quarterly Filing Deadlines</h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Recyclers and Refurbishers must log quantity of e-waste received, processed, and certificates generated at the end of each quarter.
              </p>
            </div>
            <div className="bg-white border border-[#E2E8F0] border-t-5 border-t-[#1B9C85] rounded-xl p-[25px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#05BFDB]">
              <h3 className="text-[#0A4D68] mb-[12px] text-[1.3rem] font-bold">Annual Compliance Return</h3>
              <p className="text-[#1E293B] text-[1.05rem] mb-0">
                Producers must file annual returns on or before <strong>June 30th</strong> following the financial year end, detailing certificate purchases and complete sales reconciliation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 12: Frequently Asked Questions (FAQs) */}
        <section className="bg-white rounded-2xl p-[35px] mb-[40px] shadow-sm border border-[#E2E8F0]">
          <h2 className="text-[1.8rem] text-[#0A4D68] mb-5 flex items-center gap-3 border-b-3 border-[#05BFDB] pb-2.5 font-bold">
            <span className="bg-[#EBF4F6] text-[#088395] w-[45px] h-[45px] rounded-xl inline-flex items-center justify-center text-[1.4rem] font-bold">
              12
            </span>{' '}
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="border border-[#E2E8F0] rounded-lg mb-[12px] overflow-hidden">
            <div
              className="bg-[#F8FAFC] p-[18px] font-semibold cursor-pointer flex justify-between items-center text-[#0A4D68] hover:bg-[#EBF4F6]"
              onClick={() => toggleAccordion(1)}
            >
              1. Is physical collection of e-waste still required for producers under 2022 rules?
              <span>{openAccordion === 1 ? '▲' : '▼'}</span>
            </div>
            {openAccordion === 1 && (
              <div className="p-[20px] bg-white border-t border-[#E2E8F0] text-[#1E293B] text-[1.05rem]">
                Under the 2022 framework, producers fulfill obligations primarily through purchasing digital EPR Certificates generated by registered recyclers. However, producers remain responsible for awareness campaigns and establishing voluntary take-back systems.
              </div>
            )}
          </div>

          <div className="border border-[#E2E8F0] rounded-lg mb-[12px] overflow-hidden">
            <div
              className="bg-[#F8FAFC] p-[18px] font-semibold cursor-pointer flex justify-between items-center text-[#0A4D68] hover:bg-[#EBF4F6]"
              onClick={() => toggleAccordion(2)}
            >
              2. Can an entity register under multiple roles (e.g., Importer AND Recycler)?
              <span>{openAccordion === 2 ? '▲' : '▼'}</span>
            </div>
            {openAccordion === 2 && (
              <div className="p-[20px] bg-white border-t border-[#E2E8F0] text-[#1E293B] text-[1.05rem]">
                Yes, but the entity must register separately for each distinct business function on the portal and maintain segregated, audited accounts for trading and recycling activities.
              </div>
            )}
          </div>

          <div className="border border-[#E2E8F0] rounded-lg mb-[12px] overflow-hidden">
            <div
              className="bg-[#F8FAFC] p-[18px] font-semibold cursor-pointer flex justify-between items-center text-[#0A4D68] hover:bg-[#EBF4F6]"
              onClick={() => toggleAccordion(3)}
            >
              3. What happens if a producer buys more certificates than required?
              <span>{openAccordion === 3 ? '▲' : '▼'}</span>
            </div>
            {openAccordion === 3 && (
              <div className="p-[20px] bg-white border-t border-[#E2E8F0] text-[#1E293B] text-[1.05rem]">
                Surplus EPR certificates purchased in a given financial year can be carried forward to meet the compliance target of the succeeding financial year.
              </div>
            )}
          </div>

          <div className="border border-[#E2E8F0] rounded-lg mb-[12px] overflow-hidden">
            <div
              className="bg-[#F8FAFC] p-[18px] font-semibold cursor-pointer flex justify-between items-center text-[#0A4D68] hover:bg-[#EBF4F6]"
              onClick={() => toggleAccordion(4)}
            >
              4. Are foreign manufacturers required to obtain CPCB registration directly?
              <span>{openAccordion === 4 ? '▲' : '▼'}</span>
            </div>
            {openAccordion === 4 && (
              <div className="p-[20px] bg-white border-t border-[#E2E8F0] text-[#1E293B] text-[1.05rem]">
                No. Foreign manufacturers selling in India must operate through an Authorized Indian Entity or Registered Importer who acts as the designated producer responsible for EPR compliance.
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#0A4D68] text-white text-center p-[30px] mt-[40px]">
        <p className="text-white text-[1.05rem] mb-0">
          © 2026 E-Waste Management Rules Compliance Portal Guide. Designed for Producers, Recyclers & Regulatory Compliance.
        </p>
      </footer>
      </div>
        <aside className="hidden lg:block shrink-0 w-[320px]">
          <div className="sticky top-28 px-2">
            <StickyContactForm />
          </div>
        </aside>
      </div>
    </div>
  );
}