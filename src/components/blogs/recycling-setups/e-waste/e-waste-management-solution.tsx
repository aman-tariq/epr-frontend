import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import StickyContactForm from '@/components/StickyContactForm';

export default function EWasteManagementPage() {
  const pieChartRef = useRef<HTMLCanvasElement | null>(null);
  const barChartRef = useRef<HTMLCanvasElement | null>(null);

  const pieChartInstance = useRef<Chart | null>(null);
  const barChartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    // Material Recovery Pie Chart
    if (pieChartRef.current) {
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy();
      }
      const ctxPie = pieChartRef.current.getContext('2d');
      if (ctxPie) {
        pieChartInstance.current = new Chart(ctxPie, {
          type: 'pie',
          data: {
            labels: [
              'Metals (45%)',
              'Plastics (25%)',
              'Glass (15%)',
              'Precious Metals (10%)',
              'Others (5%)',
            ],
            datasets: [
              {
                data: [45, 25, 15, 10, 5],
                backgroundColor: [
                  '#10b981',
                  '#3b82f6',
                  '#f59e0b',
                  '#8b5cf6',
                  '#64748b',
                ],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    }

    // E-Waste Growth Bar Chart
    if (barChartRef.current) {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }
      const ctxBar = barChartRef.current.getContext('2d');
      if (ctxBar) {
        barChartInstance.current = new Chart(ctxBar, {
          type: 'bar',
          data: {
            labels: ['2022', '2023', '2024', '2025', '2026'],
            datasets: [
              {
                label: 'E-Waste Generation (Million Metric Tonnes)',
                data: [1.6, 1.75, 2.0, 2.3, 2.7],
                backgroundColor: '#10b981',
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: { beginAtZero: true },
            },
          },
        });
      }
    }

    return () => {
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy();
      }
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full md:mt-[120px] mt-12 min-h-screen bg-[#f8fafc] text-[#334155] font-sans leading-relaxed m-0 p-0">
        <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        <div>
      
      {/* Main Container without horizontal margins or padding to ensure edge-to-edge layout */}
      <div className="w-full my-0 py-2 px-0">
        
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-16 px-4 sm:px-8 text-center rounded-none mb-8">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Electronic Waste Recycling in India: Complete E-Waste Management Solution for Businesses (2026)
          </h1>
          <p className="text-base sm:text-xl text-[#94a3b8] max-w-4xl mx-auto mb-8">
            Transforming Electronic Waste into Sustainable Resources. Helping producers, importers, manufacturers, and recyclers achieve complete E-Waste compliance with end-to-end consultancy solutions.
          </p>
          <div className="flex justify-center gap-4"></div>
        </section>

        {/* Section 1 */}
        <section className="w-full bg-white py-10 px-4 sm:px-8 rounded-none mb-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-6 pb-1 border-b-4 border-[#10b981] inline-block">
            Section 1: Understanding Electronic Waste Recycling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p>
                <strong className="text-[#1e293b]">What is E-Waste?</strong> Electronic waste (e-waste) refers to discarded electrical or electronic devices. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered e-waste.
              </p>
              <br />
              <p>
                <strong className="text-[#1e293b]">Why Recycling is Important:</strong> E-waste contains hazardous components like lead, mercury, and cadmium that can leach into soil and groundwater. Proper recycling prevents toxic contamination and recovers valuable finite resources.
              </p>
              <br />
              <p>
                <strong className="text-[#1e293b]">Environmental and Economic Impact:</strong> Recycling reduces carbon footprint, minimizes landfill pressure, and transforms spent hardware into critical manufacturing raw materials, fueling the circular economy.
              </p>
            </div>
            <div>
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Computer_Recycling.JPG"
                alt="Computers collected for recycling at an e-waste collection drive"
                className="w-full rounded-lg h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="w-full bg-white py-10 px-4 sm:px-8 rounded-none mb-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-6 pb-1 border-b-4 border-[#10b981] inline-block">
            Section 2: Types of Electronic Waste
          </h2>
          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Electronic_waste.jpg"
            alt="Mixed pile of discarded electronic devices and components"
            className="w-full max-h-[320px] object-cover rounded-lg mb-6"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981]">
              <h3 className="font-bold text-lg mb-2 text-[#1e293b]">Mobile Phones</h3>
              <p className="text-sm text-[#334155]">Smartphones, feature phones, and accessories.</p>
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981]">
              <h3 className="font-bold text-lg mb-2 text-[#1e293b]">Laptops & Computers</h3>
              <p className="text-sm text-[#334155]">Desktops, laptops, monitors, keyboards, and mice.</p>
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981]">
              <h3 className="font-bold text-lg mb-2 text-[#1e293b]">Televisions</h3>
              <p className="text-sm text-[#334155]">LED, LCD, CRT screens, and smart TVs.</p>
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981]">
              <h3 className="font-bold text-lg mb-2 text-[#1e293b]">Batteries</h3>
              <p className="text-sm text-[#334155]">Lithium-ion, lead-acid, and industrial power units.</p>
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981]">
              <h3 className="font-bold text-lg mb-2 text-[#1e293b]">Printers</h3>
              <p className="text-sm text-[#334155]">Inkjet, laser printers, scanners, and copiers.</p>
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981]">
              <h3 className="font-bold text-lg mb-2 text-[#1e293b]">Networking Equipment</h3>
              <p className="text-sm text-[#334155]">Routers, switches, servers, and modems.</p>
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981]">
              <h3 className="font-bold text-lg mb-2 text-[#1e293b]">Household Appliances</h3>
              <p className="text-sm text-[#334155]">Refrigerators, washing machines, ACs, and microwaves.</p>
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981]">
              <h3 className="font-bold text-lg mb-2 text-[#1e293b]">Industrial Electronics</h3>
              <p className="text-sm text-[#334155]">Control panels, medical equipment, and heavy machinery circuits.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="w-full bg-white py-10 px-4 sm:px-8 rounded-none mb-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-6 pb-1 border-b-4 border-[#10b981] inline-block">
            Section 3: Why E-Waste Recycling Matters
          </h2>
          <p className="mb-6">
            Proper e-waste recycling underpins modern corporate sustainability goals. It fulfills regulatory requirements while insulating supply chains through resource recovery.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981] font-medium text-[#334155]">
              <strong className="text-[#1e293b]">Resource Conservation:</strong> Recovers precious gold, silver, and copper.
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981] font-medium text-[#334155]">
              <strong className="text-[#1e293b]">Pollution Prevention:</strong> Safe management of heavy toxic metals.
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981] font-medium text-[#334155]">
              <strong className="text-[#1e293b]">Energy Savings:</strong> Processing secondary raw material uses significantly less energy.
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981] font-medium text-[#334155]">
              <strong className="text-[#1e293b]">Circular Economy:</strong> Closes the loop from manufacturing to re-use.
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981] font-medium text-[#334155]">
              <strong className="text-[#1e293b]">Regulatory Compliance:</strong> Avoids legal penalties under CPCB standards.
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981] font-medium text-[#334155]">
              <strong className="text-[#1e293b]">Sustainable Development:</strong> Protects communities and eco-systems.
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#1e293b] mb-4">Recovered Materials from E-Waste</h3>
          <div className="relative w-full max-w-[500px] h-[300px] sm:h-[350px] mx-auto my-8">
            <canvas ref={pieChartRef}></canvas>
          </div>
        </section>

        {/* Section 4 */}
        <section className="w-full bg-white py-10 px-4 sm:px-8 rounded-none mb-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-6 pb-1 border-b-4 border-[#10b981] inline-block">
            Section 4: Electronic Waste Recycling Process
          </h2>
          <p className="mb-6">
            Below is the step-by-step breakdown of how e-waste flows from collection to recycled raw material:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#1e293b] text-white py-3 px-6 rounded-md w-[90%] sm:w-[80%] max-w-[400px] text-center font-medium">
                Electronic Waste
              </div>
              <div className="text-xl text-[#10b981] font-bold">↓</div>
              <div className="bg-[#1e293b] text-white py-3 px-6 rounded-md w-[90%] sm:w-[80%] max-w-[400px] text-center font-medium">
                Collection & Transportation
              </div>
              <div className="text-xl text-[#10b981] font-bold">↓</div>
              <div className="bg-[#1e293b] text-white py-3 px-6 rounded-md w-[90%] sm:w-[80%] max-w-[400px] text-center font-medium">
                Sorting & Manual Dismantling
              </div>
              <div className="text-xl text-[#10b981] font-bold">↓</div>
              <div className="bg-[#1e293b] text-white py-3 px-6 rounded-md w-[90%] sm:w-[80%] max-w-[400px] text-center font-medium">
                Component Separation
              </div>
              <div className="text-xl text-[#10b981] font-bold">↓</div>
              <div className="bg-[#1e293b] text-white py-3 px-6 rounded-md w-[90%] sm:w-[80%] max-w-[400px] text-center font-medium">
                Material Recovery & Refining
              </div>
              <div className="text-xl text-[#10b981] font-bold">↓</div>
              <div className="bg-[#1e293b] text-white py-3 px-6 rounded-md w-[90%] sm:w-[80%] max-w-[400px] text-center font-medium">
                Hazardous Disposal & Raw Recycled Material
              </div>
            </div>
            <div>
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Cellphones_being_disassembled_and_sorted_for_recycling.jpg"
                alt="Cellphones being disassembled and sorted during e-waste recycling"
                className="w-full rounded-lg h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="w-full bg-white py-10 px-4 sm:px-8 rounded-none mb-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-6 pb-1 border-b-4 border-[#10b981] inline-block">
            Section 5: E-Waste Recycling in India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <p>
              India is one of the world's fastest-growing producers of electronic waste. The Central Pollution Control Board (CPCB) enforces strict Extended Producer Responsibility (EPR) mandates requiring brand owners, importers, and manufacturers to meet recycling targets through authorized processing networks.
            </p>
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Ewaste-delhi.jpg"
              alt="Electronic waste collected for recycling in Delhi, India"
              className="w-full rounded-lg h-auto object-cover"
            />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#1e293b] mb-4 text-center sm:text-left">
              India's E-Waste Generation Growth (2022–2026)
            </h3>
            <div className="relative w-full max-w-[700px] h-[300px] sm:h-[350px] mx-auto my-4">
              <canvas ref={barChartRef}></canvas>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="w-full bg-white py-10 px-4 sm:px-8 rounded-none mb-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-6 pb-1 border-b-4 border-[#10b981] inline-block">
            Section 6: EPR Compliance & CPCB Guidelines for Businesses
          </h2>
          <p className="mb-6">
            Under the <strong className="text-[#1e293b]">E-Waste (Management) Rules, 2022</strong>, every producer, manufacturer, importer, and brand owner selling electrical or electronic equipment in India must register on the CPCB's centralized EPR portal and meet annual recycling targets for the products they place in the market.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981]">
              <h3 className="font-bold text-lg mb-2 text-[#1e293b]">Producer Registration</h3>
              <p className="text-sm text-[#334155]">Mandatory EPR registration on the CPCB portal before selling any electronic product in India.</p>
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981]">
              <h3 className="font-bold text-lg mb-2 text-[#1e293b]">Annual Recycling Targets</h3>
              <p className="text-sm text-[#334155]">Progressive year-on-year targets calculated against the quantity of equipment sold.</p>
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981]">
              <h3 className="font-bold text-lg mb-2 text-[#1e293b]">EPR Certificates</h3>
              <p className="text-sm text-[#334155]">Tradeable certificates issued to producers who process e-waste through authorised recyclers.</p>
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded-lg border-l-4 border-[#10b981]">
              <h3 className="font-bold text-lg mb-2 text-[#1e293b]">Annual Reporting</h3>
              <p className="text-sm text-[#334155]">Mandatory filing of collection and recycling data to demonstrate compliance every year.</p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="w-full bg-white py-10 px-4 sm:px-8 rounded-none mb-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-6 pb-1 border-b-4 border-[#10b981] inline-block">
            Section 7: How to Choose the Right Authorised E-Waste Recycler
          </h2>
          <p className="mb-6">
            Not every recycler is built the same. Businesses should evaluate a few critical factors before handing over their electronic waste for processing:
          </p>
          <ul className="list-none mt-4 space-y-3">
            <li className="flex items-start gap-3 py-2 border-b border-dashed border-[#e2e8f0]">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#10b981] text-white flex items-center justify-center font-bold text-xs">✓</span>
              <div>
                <strong className="text-[#1e293b]">Valid CPCB Authorisation:</strong> Confirm the recycler holds a current, valid authorisation under the E-Waste Rules.
              </div>
            </li>
            <li className="flex items-start gap-3 py-2 border-b border-dashed border-[#e2e8f0]">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#10b981] text-white flex items-center justify-center font-bold text-xs">✓</span>
              <div>
                <strong className="text-[#1e293b]">International Certifications:</strong> Look for R2 or e-Stewards certification for environmentally sound processing.
              </div>
            </li>
            <li className="flex items-start gap-3 py-2 border-b border-dashed border-[#e2e8f0]">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#10b981] text-white flex items-center justify-center font-bold text-xs">✓</span>
              <div>
                <strong className="text-[#1e293b]">Secure Data Destruction:</strong> Ensure certified data-wiping or physical destruction for all storage devices.
              </div>
            </li>
            <li className="flex items-start gap-3 py-2 border-b border-dashed border-[#e2e8f0]">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#10b981] text-white flex items-center justify-center font-bold text-xs">✓</span>
              <div>
                <strong className="text-[#1e293b]">End-to-End Traceability:</strong> Digital tracking of waste from pickup to final material recovery.
              </div>
            </li>
            <li className="flex items-start gap-3 py-2 border-b border-dashed border-[#e2e8f0]">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#10b981] text-white flex items-center justify-center font-bold text-xs">✓</span>
              <div>
                <strong className="text-[#1e293b]">Transparent Documentation:</strong> Timely issuance of recycling certificates and EPR credits.
              </div>
            </li>
            <li className="flex items-start gap-3 py-2 border-b border-dashed border-[#e2e8f0]">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#10b981] text-white flex items-center justify-center font-bold text-xs">✓</span>
              <div>
                <strong className="text-[#1e293b]">Pan-India Logistics:</strong> Reliable collection network across multiple states and facilities.
              </div>
            </li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="w-full bg-white py-10 px-4 sm:px-8 rounded-none mb-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-6 pb-1 border-b-4 border-[#10b981] inline-block">
            Section 8: Benefits of Partnering with a Professional E-Waste Recycler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Business%20people%20discussing%20in%20the%20cafe%20(44876336845).jpg"
                alt="Business team discussing an e-waste compliance partnership"
                className="w-full rounded-lg h-auto object-cover"
              />
            </div>
            <div className="space-y-4">
              <p>
                <strong className="text-[#1e293b]">Reduced Compliance Risk:</strong> A professional partner manages registrations, filings, and target tracking so your business stays audit-ready year-round.
              </p>
              <p>
                <strong className="text-[#1e293b]">Stronger ESG & CSR Reporting:</strong> Verified recycling data strengthens sustainability disclosures and investor reporting.
              </p>
              <p>
                <strong className="text-[#1e293b]">Brand Reputation:</strong> Demonstrating responsible disposal builds customer and stakeholder trust.
              </p>
              <p>
                <strong className="text-[#1e293b]">Cost Efficiency:</strong> Bulk collection agreements and EPR credit trading reduce overall compliance costs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9 */}
        <section className="w-full bg-white py-10 px-4 sm:px-8 rounded-none mb-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-6 pb-1 border-b-4 border-[#10b981] inline-block">
            Section 9: Legal Framework, Penalties & Compliance Timeline
          </h2>
          <p className="mb-6">
            Non-compliance with the E-Waste (Management) Rules, 2022 can result in environmental compensation, cancellation of registration, or legal action under the Environment Protection Act.
          </p>
          <div className="overflow-x-auto w-full">
            <table className="w-full border-collapse mt-6 text-left text-sm sm:text-base">
              <thead>
                <tr className="bg-[#1e293b] text-white">
                  <th className="p-3 sm:p-4 border-b border-[#e2e8f0]">Compliance Stage</th>
                  <th className="p-3 sm:p-4 border-b border-[#e2e8f0]">Requirement</th>
                  <th className="p-3 sm:p-4 border-b border-[#e2e8f0]">Responsible Party</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-[#f1f5f9] border-b border-[#e2e8f0]">
                  <td className="p-3 sm:p-4">Registration</td>
                  <td className="p-3 sm:p-4">Obtain EPR registration on CPCB portal</td>
                  <td className="p-3 sm:p-4">Producer / Importer</td>
                </tr>
                <tr className="even:bg-[#f1f5f9] border-b border-[#e2e8f0]">
                  <td className="p-3 sm:p-4">Target Fulfilment</td>
                  <td className="p-3 sm:p-4">Meet annual e-waste recycling targets</td>
                  <td className="p-3 sm:p-4">Producer</td>
                </tr>
                <tr className="even:bg-[#f1f5f9] border-b border-[#e2e8f0]">
                  <td className="p-3 sm:p-4">Authorised Processing</td>
                  <td className="p-3 sm:p-4">Route waste only through CPCB-authorised recyclers</td>
                  <td className="p-3 sm:p-4">Producer / Recycler</td>
                </tr>
                <tr className="even:bg-[#f1f5f9] border-b border-[#e2e8f0]">
                  <td className="p-3 sm:p-4">Annual Return Filing</td>
                  <td className="p-3 sm:p-4">Submit yearly compliance and collection reports</td>
                  <td className="p-3 sm:p-4">Producer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-white py-10 px-4 sm:px-8 rounded-none mb-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-6 pb-1 border-b-4 border-[#10b981] inline-block">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <details className="border border-[#e2e8f0] rounded-lg overflow-hidden group">
              <summary className="p-4 cursor-pointer font-semibold text-[#1e293b] flex justify-between items-center list-none group-open:border-b group-open:border-[#e2e8f0]">
                What is EPR in e-waste management?
                <span className="text-[#10b981] text-2xl font-bold transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="p-4 text-sm sm:text-base">
                Extended Producer Responsibility (EPR) makes producers, importers, and brand owners responsible for the environmentally sound collection and recycling of the electronic products they sell in India.
              </p>
            </details>

            <details className="border border-[#e2e8f0] rounded-lg overflow-hidden group">
              <summary className="p-4 cursor-pointer font-semibold text-[#1e293b] flex justify-between items-center list-none group-open:border-b group-open:border-[#e2e8f0]">
                Is EPR registration mandatory for all electronics businesses?
                <span className="text-[#10b981] text-2xl font-bold transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="p-4 text-sm sm:text-base">
                Yes. Under the E-Waste (Management) Rules, 2022, any entity manufacturing, selling, or importing electrical and electronic equipment in India must register on the CPCB EPR portal.
              </p>
            </details>

            <details className="border border-[#e2e8f0] rounded-lg overflow-hidden group">
              <summary className="p-4 cursor-pointer font-semibold text-[#1e293b] flex justify-between items-center list-none group-open:border-b group-open:border-[#e2e8f0]">
                How are EPR recycling targets calculated?
                <span className="text-[#10b981] text-2xl font-bold transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="p-4 text-sm sm:text-base">
                Targets are calculated as a percentage of the quantity of electronic equipment a producer places in the market, with the percentage increasing progressively each year.
              </p>
            </details>

            <details className="border border-[#e2e8f0] rounded-lg overflow-hidden group">
              <summary className="p-4 cursor-pointer font-semibold text-[#1e293b] flex justify-between items-center list-none group-open:border-b group-open:border-[#e2e8f0]">
                What happens if a business misses its recycling target?
                <span className="text-[#10b981] text-2xl font-bold transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="p-4 text-sm sm:text-base">
                Businesses that miss annual targets may be required to pay environmental compensation and could face compliance restrictions until the shortfall is addressed.
              </p>
            </details>

            <details className="border border-[#e2e8f0] rounded-lg overflow-hidden group">
              <summary className="p-4 cursor-pointer font-semibold text-[#1e293b] flex justify-between items-center list-none group-open:border-b group-open:border-[#e2e8f0]">
                How can EPR Nexuss help my business?
                <span className="text-[#10b981] text-2xl font-bold transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="p-4 text-sm sm:text-base">
                EPR Nexuss manages end-to-end EPR compliance, including registration, authorised recycler coordination, documentation, and annual reporting, so your business stays compliant year-round.
              </p>
            </details>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-6 px-4 text-[#94a3b8] text-sm bg-[#1e293b]">
        &copy; 2026 EPR Nexuss. All rights reserved. | Complete E-Waste Management & EPR Compliance Solutions for Businesses in India.
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