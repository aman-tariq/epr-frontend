import React, { useState, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import StickyContactForm from "@/components/StickyContactForm";

Chart.register(...registerables);

export default function RVSFSetupIndia(): JSX.Element {
  const pieChartRef = useRef<HTMLCanvasElement | null>(null);
  const barChartRef = useRef<HTMLCanvasElement | null>(null);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    let pieChartInstance: Chart | null = null;
    let barChartInstance: Chart | null = null;

    if (pieChartRef.current) {
      pieChartInstance = new Chart(pieChartRef.current, {
        type: "pie",
        data: {
          labels: [
            "Uttar Pradesh",
            "Haryana",
            "Gujarat",
            "Rajasthan",
            "Maharashtra",
          ],
          datasets: [
            {
              data: [43, 11, 8, 6, 4],
              backgroundColor: [
                "#198754",
                "#0dcaf0",
                "#ffc107",
                "#0d6efd",
                "#dc3545",
              ],
              borderColor: "#ffffff",
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                boxWidth: 14,
                usePointStyle: true,
                pointStyle: "circle",
              },
            },
          },
        },
      });
    }

    if (barChartRef.current) {
      barChartInstance = new Chart(barChartRef.current, {
        type: "bar",
        data: {
          labels: [
            "Uttar Pradesh",
            "Haryana",
            "Gujarat",
            "Rajasthan",
            "Maharashtra",
          ],
          datasets: [
            {
              label: "Vehicles Scrapped",
              data: [185000, 46000, 35000, 25000, 19000],
              backgroundColor: "#198754",
              borderRadius: 8,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: true },
          },
          plugins: {
            legend: { display: false },
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
    <div className="min-h-screen bg-[#f8fafc] text-[#1f2937] font-sans antialiased w-full m-0 p-0">
      <main className="w-full py-4 lg:py-10 px-1 md:px-2 mt-[40px] md:mt-[100px]">
        <div className="flex flex-col lg:flex-row gap-2 items-stretch">
          <div>
            {/* HERO SECTION */}
            <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f5132] via-[#198754] to-[#20a66c] p-6 lg:p-12 text-white shadow-[0_14px_40px_rgba(16,24,40,0.08)] mb-6 lg:mb-10 w-full">
              <div className="absolute top-[-70px] right-[-60px] w-[220px] h-[220px] rounded-full bg-white/10 blur-[2px] pointer-events-none" />
              <div className="absolute bottom-[-50px] left-[-40px] w-[160px] h-[160px] rounded-full bg-white/10 blur-[2px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 text-white font-bold text-sm tracking-wide mb-4">
                    Sustainable Mobility • Circular Economy • Compliance
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                    RVSF Recycling Setup India: Building a Sustainable Future
                  </h1>
                  <p className="text-white/90 text-lg lg:text-xl max-w-[58rem]">
                    A practical guide for operators, investors, and policymakers
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <div className="bg-white/12 border border-white/16 backdrop-blur-md rounded-2xl p-4">
                    <div className="text-xs text-white/85 mb-1">Focus</div>
                    <p className="font-extrabold text-lg m-0">
                      Policy, Setup, Operations
                    </p>
                  </div>
                  <div className="bg-white/12 border border-white/16 backdrop-blur-md rounded-2xl p-4">
                    <div className="text-xs text-white/85 mb-1">Value</div>
                    <p className="font-extrabold text-lg m-0">
                      Compliance + Business Opportunity
                    </p>
                  </div>
                  <div className="bg-white/12 border border-white/16 backdrop-blur-md rounded-2xl p-4">
                    <div className="text-xs text-white/85 mb-1">Format</div>
                    <p className="font-extrabold text-lg m-0">
                      Guided, Visual, Actionable
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* INTRODUCTION */}
            <section
              id="introduction"
              className="bg-white/96 border border-[#e5e7eb] rounded-[1.25rem] p-6 shadow-[0_14px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_18px_50px_rgba(16,24,40,0.12)] transition-all mb-6 scroll-mt-[90px] w-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#198754] to-[#8ddf9f] ring-4 ring-[#198754]/10 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight m-0">
                  Introduction
                </h2>
              </div>
              <p className="text-[#6b7280] leading-relaxed mb-0 text-base sm:text-lg">
                India’s push toward sustainable mobility has led to the
                establishment of{" "}
                <strong>Registered Vehicle Scrapping Facilities (RVSFs)</strong>
                . As of{" "}
                <strong>
                  January 2026, 129 RVSFs are operational nationwide, scrapping
                  over 430,000 end‑of‑life vehicles (ELVs)
                </strong>
                . This initiative reduces pollution, recycles valuable
                materials, and supports the government’s Vehicle Scrappage
                Policy (2021).
              </p>
            </section>

            {/* WHY NOW IS THE RIGHT TIME TO INVEST */}
            <section className="bg-white/96 border border-[#e5e7eb] rounded-[1.25rem] p-6 shadow-[0_14px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_18px_50px_rgba(16,24,40,0.12)] transition-all mb-6 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#198754] to-[#8ddf9f] ring-4 ring-[#198754]/10 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight m-0">
                  Why Now Is the Right Time to Invest
                </h2>
              </div>
              <ul className="divide-y divide-[#e5e7eb] rounded-2xl overflow-hidden border border-[#e5e7eb] list-none p-0 m-0">
                <li className="p-4 bg-white hover:bg-[#198754]/5 transition-colors">
                  <strong>Policy Push &amp; Compliance Mandate</strong> — MoRTH
                  and state transport departments require all government
                  agencies and PSUs to scrap obsolete fleet vehicles exclusively
                  through registered RVSFs, ensuring consistent demand.
                </li>
                <li className="p-4 bg-white hover:bg-[#198754]/5 transition-colors">
                  <strong>Industrial Recognition</strong> — States such as
                  Odisha, Tamil Nadu, and Maharashtra classify RVSFs as
                  industrial units, making them eligible for land allocation,
                  MSME benefits, and fiscal incentives.
                </li>
                <li className="p-4 bg-white hover:bg-[#198754]/5 transition-colors">
                  <strong>Circular Economy &amp; Raw Material Recovery</strong>{" "}
                  — Each scrapped vehicle yields 70–75% recyclable materials
                  (steel, aluminum, copper, plastics), directly supplying mills
                  and foundries at reduced carbon costs.
                </li>
                <li className="p-4 bg-white hover:bg-[#198754]/5 transition-colors">
                  <strong>Digital Transparency</strong> — Licensing and
                  operations are streamlined via the National Single Window
                  System (NSWS), integrating MoRTH, SPCBs, and state industry
                  departments into one workflow.
                </li>
              </ul>
            </section>

            {/* HOW TO SET UP AN RVSF PLANT */}
            <section className="bg-white/96 border border-[#e5e7eb] rounded-[1.25rem] p-6 shadow-[0_14px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_18px_50px_rgba(16,24,40,0.12)] transition-all mb-6 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#198754] to-[#8ddf9f] ring-4 ring-[#198754]/10 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight m-0">
                  How to Set Up an RVSF Plant
                </h2>
              </div>
              <p className="text-[#6b7280] leading-relaxed mb-4">
                Establishing a Registered Vehicle Scrapping Facility (RVSF)
                requires careful planning and adherence to regulatory standards.
                A minimum of <strong>2 acres of land</strong> is essential,
                designated as either industrial or non‑agricultural. In line
                with the RVSF policy, the facility must be equipped with
                specialized machinery including hydraulic cylinders, lift jacks,
                bailers, and a dedicated fluid‑collection tank. Separate storage
                zones must be created for hazardous and non‑hazardous waste
                materials recovered during dismantling.
              </p>
              <p className="text-[#6b7280] leading-relaxed mb-6">
                Each facility is mandated to{" "}
                <strong>crush the extracted engine</strong> and{" "}
                <strong>sever the chassis frame</strong> of every vehicle
                processed. Detailed records of these operations must be
                maintained and submitted to the Transport Department under
                MoRTH, enabling the official cancellation of the vehicle’s
                registration number. This ensures transparency, compliance, and
                alignment with national sustainability goals.
              </p>
              <ul className="divide-y divide-[#e5e7eb] rounded-2xl overflow-hidden border border-[#e5e7eb] list-none p-0 m-0">
                <li className="p-4 bg-white">
                  <strong>Land Requirement:</strong> Minimum 2 acres, industrial
                  or non‑agricultural classification.
                </li>
                <li className="p-4 bg-white">
                  <strong>Mandatory Equipment:</strong> Hydraulic cylinders,
                  lift jacks, bailers, fluid‑collection tanks.
                </li>
                <li className="p-4 bg-white">
                  <strong>Waste Management:</strong> Segregated storage for
                  hazardous and non‑hazardous materials.
                </li>
                <li className="p-4 bg-white">
                  <strong>Operational Mandates:</strong> Engine crushing and
                  chassis severing for every vehicle.
                </li>
                <li className="p-4 bg-white">
                  <strong>Compliance Reporting:</strong> Submission of
                  dismantling records to MoRTH for registration cancellation.
                </li>
              </ul>
            </section>

            {/* STEP-BY-STEP PROCESS */}
            <section
              id="process"
              className="bg-white/96 border border-[#e5e7eb] rounded-[1.25rem] p-4 sm:p-6 shadow-[0_14px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_18px_50px_rgba(16,24,40,0.12)] transition-all mb-6 scroll-mt-[90px] w-full"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#198754] to-[#8ddf9f] ring-4 ring-[#198754]/10 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight m-0 text-gray-900">
                  Step-by-Step Process to Set Up a Vehicle Scrapping Plant
                </h2>
              </div>

              {/* Mobile View: Card Stack (visible on screens smaller than md) */}
              <div className="md:hidden flex flex-col gap-4">
                {[
                  {
                    stage: "1. Project Concept & Feasibility",
                    desc: "Market analysis of ELV availability, logistics mapping, and profitability study.",
                    authority: "Private consultant",
                  },
                  {
                    stage: "2. Site Selection & Land Use Approval",
                    desc: "Industrial zoning or conversion of non-agricultural land; minimum 5–10 acres for medium RVSF.",
                    authority: "State Industries Dept / Industrial Dev Corp",
                  },
                  {
                    stage: "3. Consent to Establish (CTE)",
                    desc: "Approval under Air & Water Acts; includes pollution control and stormwater plan.",
                    authority: "State Pollution Control Board (SPCB)",
                  },
                  {
                    stage: "4. RVSF Registration (Form-1)",
                    desc: "File online via NSWS.gov.in → MoRTH → “Vehicle Scrapping Facility.” Attach land deeds, layout, CTE, and company KYC.",
                    authority: "MoRTH / State Transport Dept",
                  },
                  {
                    stage: "5. Consent to Operate (CTO)",
                    desc: "Apply post-construction with pollution monitoring devices installed.",
                    authority: "SPCB",
                  },
                  {
                    stage: "6. Inspection & Verification",
                    desc: "Physical/virtual inspection by MoRTH/SPCB teams to confirm compliance with GSR 653(E).",
                    authority: "MoRTH / SPCB",
                  },
                  {
                    stage: "7. Issue of RVSF Certificate",
                    desc: "Five-year license granted via portal; renewable thereafter.",
                    authority: "MoRTH",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-[#e5e7eb] rounded-xl p-4 bg-[#198754]/[0.02] flex flex-col gap-2.5"
                  >
                    <div className="text-sm font-bold text-[#14532d] bg-[#ecfdf3] px-3 py-1.5 rounded-lg border border-[#cdeed6] inline-block w-fit">
                      {item.stage}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 m-0 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="text-xs text-gray-500 pt-1 border-t border-[#e5e7eb]/80">
                      <span className="font-semibold text-gray-700">
                        Key Authority:
                      </span>{" "}
                      {item.authority}
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View: Standard Table (visible on md screens and up) */}
              <div className="hidden md:block overflow-x-auto w-full">
                <table className="w-full text-left border-collapse border border-[#e5e7eb]">
                  <thead>
                    <tr className="bg-gradient-to-b from-[#ecfdf3] to-[#d9f7e4] text-[#14532d]">
                      <th className="p-3 border border-[#cdeed6] font-extrabold whitespace-nowrap text-sm">
                        Stage
                      </th>
                      <th className="p-3 border border-[#cdeed6] font-extrabold text-sm">
                        Description / Approvals Required
                      </th>
                      <th className="p-3 border border-[#cdeed6] font-extrabold whitespace-nowrap text-sm">
                        Key Authority
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e7eb] text-sm text-gray-800">
                    <tr className="odd:bg-[#198754]/[0.035]">
                      <td className="p-3 border border-[#e5e7eb] font-medium">
                        1. Project Concept &amp; Feasibility
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        Market analysis of ELV availability, logistics mapping,
                        and profitability study.
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        Private consultant
                      </td>
                    </tr>
                    <tr className="odd:bg-[#198754]/[0.035]">
                      <td className="p-3 border border-[#e5e7eb] font-medium">
                        2. Site Selection &amp; Land Use Approval
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        Industrial zoning or conversion of non-agricultural
                        land; minimum 5–10 acres for medium RVSF.
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        State Industries Dept / Industrial Dev Corp
                      </td>
                    </tr>
                    <tr className="odd:bg-[#198754]/[0.035]">
                      <td className="p-3 border border-[#e5e7eb] font-medium">
                        3. Consent to Establish (CTE)
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        Approval under Air &amp; Water Acts; includes pollution
                        control and stormwater plan.
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        State Pollution Control Board (SPCB)
                      </td>
                    </tr>
                    <tr className="odd:bg-[#198754]/[0.035]">
                      <td className="p-3 border border-[#e5e7eb] font-medium">
                        4. RVSF Registration (Form-1)
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        File online via NSWS.gov.in → MoRTH → “Vehicle Scrapping
                        Facility.” Attach land deeds, layout, CTE, and company
                        KYC.
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        MoRTH / State Transport Dept
                      </td>
                    </tr>
                    <tr className="odd:bg-[#198754]/[0.035]">
                      <td className="p-3 border border-[#e5e7eb] font-medium">
                        5. Consent to Operate (CTO)
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        Apply post-construction with pollution monitoring
                        devices installed.
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">SPCB</td>
                    </tr>
                    <tr className="odd:bg-[#198754]/[0.035]">
                      <td className="p-3 border border-[#e5e7eb] font-medium">
                        6. Inspection &amp; Verification
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        Physical/virtual inspection by MoRTH/SPCB teams to
                        confirm compliance with GSR 653(E).
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        MoRTH / SPCB
                      </td>
                    </tr>
                    <tr className="odd:bg-[#198754]/[0.035]">
                      <td className="p-3 border border-[#e5e7eb] font-medium">
                        7. Issue of RVSF Certificate
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        Five-year license granted via portal; renewable
                        thereafter.
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">MoRTH</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* REGULATORY SNAPSHOT */}
            <section className="bg-white/96 border border-[#e5e7eb] rounded-[1.25rem] p-6 shadow-[0_14px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_18px_50px_rgba(16,24,40,0.12)] transition-all mb-6 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#198754] to-[#8ddf9f] ring-4 ring-[#198754]/10 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight m-0">
                  Regulatory Snapshot — Mandatory Documents
                </h2>
              </div>
              <ul className="divide-y divide-[#e5e7eb] rounded-2xl overflow-hidden border border-[#e5e7eb] list-none p-0 m-0">
                <li className="p-4 bg-white">Company PAN &amp; CIN</li>
                <li className="p-4 bg-white">
                  GST Certificate and Land Lease Deed
                </li>
                <li className="p-4 bg-white">CTE and CTO from SPCB</li>
                <li className="p-4 bg-white">
                  Layout Plan &amp; Geo-coordinates
                </li>
                <li className="p-4 bg-white">
                  Machinery List and Process Flow Diagram
                </li>
                <li className="p-4 bg-white">
                  Fire NOC and Occupational Safety Plan
                </li>
                <li className="p-4 bg-white">Authorized Signatory ID Proof</li>
                <li className="p-4 bg-white">
                  Environmental Impact Statement (optional for &gt;10 acre
                  projects)
                </li>
              </ul>
            </section>

            {/* INFRASTRUCTURE AND TECHNICAL REQUIREMENTS */}
            <section className="bg-white/96 border border-[#e5e7eb] rounded-[1.25rem] p-6 shadow-[0_14px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_18px_50px_rgba(16,24,40,0.12)] transition-all mb-6 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#198754] to-[#8ddf9f] ring-4 ring-[#198754]/10 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight m-0">
                  Infrastructure and Technical Requirements
                </h2>
              </div>
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse border border-[#e5e7eb] min-w-[600px]">
                  <thead>
                    <tr className="bg-gradient-to-b from-[#ecfdf3] to-[#d9f7e4] text-[#14532d]">
                      <th className="p-3 border border-[#cdeed6] font-extrabold whitespace-nowrap">
                        Facility Component
                      </th>
                      <th className="p-3 border border-[#cdeed6] font-extrabold whitespace-nowrap">
                        Requirement as per MoRTH RVSF Rules
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e7eb]">
                    <tr className="odd:bg-[#198754]/[0.035]">
                      <td className="p-3 border border-[#e5e7eb]">
                        Depollution Zone
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        Systems for fuel, oil, coolant, and AC gas recovery.
                      </td>
                    </tr>
                    <tr className="odd:bg-[#198754]/[0.035]">
                      <td className="p-3 border border-[#e5e7eb]">
                        Dismantling Zone
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        Mechanized tools for battery, engine, tyre removal;
                        avoid manual cutting.
                      </td>
                    </tr>
                    <tr className="odd:bg-[#198754]/[0.035]">
                      <td className="p-3 border border-[#e5e7eb]">
                        Hazardous Waste Storage
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        Secure storage with SPCB authorization for fluids,
                        batteries, and filters.
                      </td>
                    </tr>
                    <tr className="odd:bg-[#198754]/[0.035]">
                      <td className="p-3 border border-[#e5e7eb]">
                        Material Segregation
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        Segregate metals, plastics, rubber, glass; record
                        weights digitally.
                      </td>
                    </tr>
                    <tr className="odd:bg-[#198754]/[0.035]">
                      <td className="p-3 border border-[#e5e7eb]">
                        Weighbridge &amp; CCTV
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        Mandatory for incoming/outgoing vehicles with real-time
                        feed to transport portal.
                      </td>
                    </tr>
                    <tr className="odd:bg-[#198754]/[0.035]">
                      <td className="p-3 border border-[#e5e7eb]">
                        IT System Integration
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        Data link with Vahan for vehicle de-registration and
                        certificate issuance.
                      </td>
                    </tr>
                    <tr className="odd:bg-[#198754]/[0.035]">
                      <td className="p-3 border border-[#e5e7eb]">
                        Safety &amp; Fire Measures
                      </td>
                      <td className="p-3 border border-[#e5e7eb]">
                        Fire hydrants, PPE, and safety training records must be
                        maintained.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CHARTS */}
            <section
              id="charts"
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 scroll-mt-[90px] w-full"
            >
              <div className="bg-white/96 border border-[#e5e7eb] rounded-[1.25rem] p-6 shadow-[0_14px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_18px_50px_rgba(16,24,40,0.12)] transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#198754] to-[#8ddf9f] ring-4 ring-[#198754]/10 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight m-0">
                    Data Visualizations
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  State-wise distribution of RVSFs shows where opportunities are
                  strongest:
                </p>
                <div className="bg-gradient-to-b from-white to-[#f9fffb] border border-[#e5e7eb] rounded-2xl p-4">
                  <div className="relative min-h-[340px] w-full">
                    <canvas ref={pieChartRef}></canvas>
                  </div>
                </div>
              </div>

              <div className="bg-white/96 border border-[#e5e7eb] rounded-[1.25rem] p-6 shadow-[0_14px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_18px_50px_rgba(16,24,40,0.12)] transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#198754] to-[#8ddf9f] ring-4 ring-[#198754]/10 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight m-0">
                    Data Visualizations
                  </h2>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  Throughput of scrapped vehicles per state highlights
                  operational efficiency:
                </p>
                <div className="bg-gradient-to-b from-white to-[#f9fffb] border border-[#e5e7eb] rounded-2xl p-4">
                  <div className="relative min-h-[340px] w-full">
                    <canvas ref={barChartRef}></canvas>
                  </div>
                </div>
              </div>
            </section>

            {/* BUSINESS OPPORTUNITY */}
            <section className="bg-white/96 border border-[#e5e7eb] rounded-[1.25rem] p-6 shadow-[0_14px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_18px_50px_rgba(16,24,40,0.12)] transition-all mb-6 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#198754] to-[#8ddf9f] ring-4 ring-[#198754]/10 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight m-0">
                  Business Opportunity
                </h2>
              </div>
              <p className="text-[#6b7280] leading-relaxed mb-4">
                Setting up an RVSF is not just about compliance — it’s a
                profitable venture. With India’s vehicle population crossing{" "}
                <strong>300 million</strong>, the scrappage demand is immense.
                Steel, aluminum, and plastics recovered from ELVs feed directly
                into manufacturing, reducing raw material costs.
              </p>
              <ul className="divide-y divide-[#e5e7eb] rounded-2xl overflow-hidden border border-[#e5e7eb] list-none p-0 m-0">
                <li className="p-4 bg-white">
                  <strong>Revenue Streams:</strong> Sale of recycled metals,
                  spare parts, and scrap certificates.
                </li>
                <li className="p-4 bg-white">
                  <strong>Government Incentives:</strong> Tax rebates, reduced
                  GST, and discounts on new vehicle purchases.
                </li>
                <li className="p-4 bg-white">
                  <strong>CSR Impact:</strong> Clients gain sustainability
                  credentials, boosting brand reputation.
                </li>
              </ul>
            </section>

            {/* REQUIREMENTS */}
            <section className="bg-white/96 border border-[#e5e7eb] rounded-[1.25rem] p-6 shadow-[0_14px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_18px_50px_rgba(16,24,40,0.12)] transition-all mb-6 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#198754] to-[#8ddf9f] ring-4 ring-[#198754]/10 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight m-0">
                  Requirements
                </h2>
              </div>
              <p className="text-[#6b7280] leading-relaxed mb-4">
                To establish an RVSF, clients must ensure:
              </p>
              <ul className="divide-y divide-[#e5e7eb] rounded-2xl overflow-hidden border border-[#e5e7eb] list-none p-0 m-0">
                <li className="p-4 bg-white">
                  Land area of <strong>5,000–10,000 sq. meters</strong>.
                </li>
                <li className="p-4 bg-white">
                  Equipment: hydraulic presses, depollution kits, shredders,
                  cranes.
                </li>
                <li className="p-4 bg-white">
                  Licenses: MoRTH approval, pollution control board clearance.
                </li>
                <li className="p-4 bg-white">
                  Digital infrastructure for compliance reporting.
                </li>
              </ul>
            </section>

            {/* HOW DO WE HELP OUR CLIENTS */}
            <section className="bg-white/96 border border-[#e5e7eb] rounded-[1.25rem] p-6 shadow-[0_14px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_18px_50px_rgba(16,24,40,0.12)] transition-all mb-6 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#198754] to-[#8ddf9f] ring-4 ring-[#198754]/10 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight m-0">
                  How Do We Help Our Clients to Establish Business
                </h2>
              </div>
              <p className="text-[#6b7280] leading-relaxed text-lg mb-4">
                At{" "}
                <a
                  href="https://eprnexuss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#198754] hover:underline font-bold"
                >
                  EPR Nexus
                </a>
                , we provide end‑to‑end consulting and compliance support for
                setting up
                <strong>
                  {" "}
                  Registered Vehicle Scrapping Facilities (RVSFs)
                </strong>
                . Our expertise ensures that clients navigate the complex
                regulatory landscape with confidence, while securing approvals
                and building sustainable operations.
              </p>
              <ul className="divide-y divide-[#e5e7eb] rounded-2xl overflow-hidden border border-[#e5e7eb] list-none p-0 m-0">
                <li className="p-4 bg-white">
                  <strong>Licensing &amp; Approvals:</strong> Guidance on
                  obtaining Consent to Establish (CTE), Consent to Operate
                  (CTO), and RVSF registration through the National Single
                  Window System (NSWS).
                </li>
                <li className="p-4 bg-white">
                  <strong>Land &amp; Infrastructure Support:</strong> Assistance
                  with industrial land allocation, zoning approvals, and
                  facility layout planning in compliance with MoRTH and SPCB
                  norms.
                </li>
                <li className="p-4 bg-white">
                  <strong>Machinery &amp; Technical Setup:</strong> Advisory on
                  procuring mandatory equipment such as hydraulic presses,
                  bailers, depollution systems, and IT integration with Vahan.
                </li>
                <li className="p-4 bg-white">
                  <strong>Regulatory Compliance:</strong> Preparation of
                  documentation including PAN, GST, CIN, fire safety NOC,
                  occupational safety plans, and environmental impact
                  assessments.
                </li>
                <li className="p-4 bg-white">
                  <strong>Operational Training:</strong> Support in establishing
                  depollution zones, dismantling processes, hazardous waste
                  storage, and digital record‑keeping for transparent reporting.
                </li>
                <li className="p-4 bg-white">
                  <strong>Investor &amp; Partnership Facilitation:</strong>{" "}
                  Connecting clients with OEMs and industry partners to maximize
                  revenue streams and long‑term sustainability.
                </li>
              </ul>
              <p className="text-[#6b7280] leading-relaxed mt-4 mb-0">
                With <strong>EPR Nexus</strong>, clients benefit from a single
                trusted partner who delivers professional guidance, fast‑tracked
                approvals, and complete compliance solutions for building a
                profitable and sustainable RVSF business in India.
              </p>
            </section>

            {/* FAQ ACCORDION */}
            <section
              id="faq"
              className="bg-white/96 border border-[#e5e7eb] rounded-[1.25rem] p-6 shadow-[0_14px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_18px_50px_rgba(16,24,40,0.12)] transition-all mb-6 scroll-mt-[90px] w-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#198754] to-[#8ddf9f] ring-4 ring-[#198754]/10 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight m-0">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  {
                    q: "What is the minimum land requirement for setting up an RVSF?",
                    a: "A minimum of 2 acres of land is required, designated as either industrial or non‑agricultural, to establish a compliant vehicle scrapping facility.",
                  },
                  {
                    q: "What machinery is mandatory under the RVSF policy?",
                    a: "Facilities must be equipped with hydraulic cylinders, lift jacks, bailers, and fluid‑collection tanks, along with designated storage zones for hazardous and non‑hazardous waste.",
                  },
                  {
                    q: "What operational mandates must an RVSF follow?",
                    a: "Each facility is required to crush the extracted engine and sever the chassis frame of every vehicle. Detailed records of these processes must be submitted to MoRTH for registration cancellation.",
                  },
                  {
                    q: "Why is now the right time to invest in RVSFs?",
                    a: "Government mandates, industrial recognition, circular economy benefits, and digital transparency through the National Single Window System (NSWS) make this the most favorable time to invest in RVSFs.",
                  },
                  {
                    q: "What approvals and documents are required?",
                    a: "Mandatory documents include PAN & CIN, GST certificate, land lease deed, CTE and CTO from SPCB, layout plan, machinery list, fire NOC, safety plan, and authorized signatory ID proof. Larger projects may also require an Environmental Impact Statement.",
                  },
                  {
                    q: "What infrastructure is essential for compliance?",
                    a: "Facilities must include a depollution zone, dismantling zone, hazardous waste storage, material segregation systems, weighbridge, CCTV, IT integration with Vahan, and fire safety measures.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-[0_8px_22px_rgba(16,24,40,0.04)]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className={`w-full text-left font-bold p-4 flex justify-between items-center transition-colors ${
                        openFaq === index
                          ? "text-[#0f5f3b] bg-[#e9f7ef]"
                          : "bg-white text-[#1f2937]"
                      }`}
                    >
                      <span>{faq.q}</span>
                      <span className="text-xl">
                        {openFaq === index ? "−" : "+"}
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="p-4 bg-white border-t border-[#e5e7eb] text-[#6b7280]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section
              id="contact"
              className="bg-gradient-to-br from-[#0f5132]/98 to-[#198754]/98 text-white rounded-[1.5rem] p-8 lg:p-12 text-center shadow-[0_14px_40px_rgba(16,24,40,0.08)] mb-6 w-full"
            >
              <h2 className="text-2xl sm:text-3xl text-black font-bold mb-3">
                Ready to Build Your Vehicle Scrapping Plant?
              </h2>
              <p className="text-lg text-black max-w-3xl mx-auto mb-6">
                Gain expert guidance, secure fast‑tracked approvals, and ensure
                end‑to‑end compliance with
                <strong>
                  {" "}
                  India’s trusted environmental consulting partner
                </strong>
                . We provide the strategic support you need to establish a fully
                compliant RVSF facility with confidence.
              </p>
              <a
                href="https://eprnexuss.com/contacts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#198754] font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors border border-black text-lg"
              >
                Contact Us Today
              </a>
            </section>
          </div>
          {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block w-[320px] shrink-0">
            <div className=" sticky top-28 px-2">
              <StickyContactForm />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
