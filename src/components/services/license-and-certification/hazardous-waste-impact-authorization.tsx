import StickyContactForm from '@/components/StickyContactForm';
import React, { useState } from 'react';

export default function HazardousWasteAuthorization(): JSX.Element {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="w-full m-0 md:mt-[130px] p-0 font-sans bg-gradient-to-br from-[#e8f5e9] via-[#e3f2fd] to-[#e8f5e9] text-[#2c3e50] leading-relaxed">
      <div className="w-full max-w-full m-0 p-0">
        <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        <div>
        
        {/* Header Section */}
        <header className="relative w-full bg-gradient-to-br from-[#2e7d32] to-[#1976d2] text-white py-12 md:py-16 px-4 text-center overflow-hidden">
          <div className="text-lg md:text-xl mb-3 opacity-95 relative z-10 flex items-center justify-center gap-2">
            <i className="fas fa-recycle"></i> EPR Nexuss Solutions
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 drop-shadow-md relative z-10 flex items-center justify-center gap-3 flex-wrap">
            <i className="fas fa-shield-alt"></i> Hazardous Waste Impact Authorization
          </h1>
          <p className="text-base md:text-xl opacity-95 relative z-10 max-w-4xl mx-auto leading-relaxed">
            Your Complete Guide to Understanding and Obtaining Authorization for Hazardous Waste Management - Empowering Compliance. Protecting the Planet.
          </p>
        </header>

        {/* Main Content Area */}
        <main className="w-full m-0 p-0">
          
          {/* Section 1: Introduction */}
          <section className="w-full bg-white my-6 py-8 md:py-12 px-4 sm:px-8 md:px-12 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-[#2e7d32] text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 flex-wrap">
              <i className="fas fa-info-circle text-[#1976d2] bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-3 rounded-full text-lg"></i> 
              What is Hazardous Waste Impact Authorization?
            </h2>
            
            <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] border-l-4 border-[#2e7d32] p-5 md:p-6 my-6 rounded-r-lg flex flex-col sm:flex-row items-start gap-4">
              <i className="fas fa-lightbulb text-2xl md:text-3xl text-[#2e7d32] shrink-0 mt-1"></i>
              <div>
                <p className="mb-4 text-base md:text-lg text-[#34495e]">
                  <strong>Hazardous Waste Impact Authorization</strong> is a mandatory legal permit required for industries and facilities that generate, handle, store, transport, treat, or dispose of hazardous waste materials. This authorization ensures that waste management practices meet environmental safety standards and protect human health.
                </p>
                <p className="mb-0 text-base md:text-lg text-[#34495e]">
                  As per the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016, this authorization is issued by State Pollution Control Boards (SPCB) and is valid for 5 years. At <strong>EPR Nexuss</strong>, we understand that environmental protection isn't just a duty — it's a partnership between industries and nature.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 md:p-8 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-shield-alt text-4xl text-[#2e7d32] mb-5 block"></i>
                <h4 className="text-[#1976d2] text-xl font-semibold mb-3">Environmental Protection</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Ensures safe handling of dangerous materials to prevent environmental contamination</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 md:p-8 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-user-shield text-4xl text-[#2e7d32] mb-5 block"></i>
                <h4 className="text-[#1976d2] text-xl font-semibold mb-3">Public Health Safety</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Protects communities from exposure to toxic and harmful waste substances</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 md:p-8 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-balance-scale text-4xl text-[#2e7d32] mb-5 block"></i>
                <h4 className="text-[#1976d2] text-xl font-semibold mb-3">Legal Compliance</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Mandatory requirement under environmental laws and regulations</p>
              </div>
            </div>
          </section>

          {/* Section 2: Why Authorization is Important */}
          <section className="w-full bg-white my-6 py-8 md:py-12 px-4 sm:px-8 md:px-12 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-[#2e7d32] text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 flex-wrap">
              <i className="fas fa-exclamation-triangle text-[#1976d2] bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-3 rounded-full text-lg"></i> 
              Why is Authorization Important?
            </h2>
            <p className="mb-6 text-base md:text-lg text-[#34495e]">
              Hazardous waste authorization is not just a regulatory requirement—it's a critical component of responsible industrial operations. Here's why it matters:
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 my-8">
              <div className="bg-gradient-to-br from-[#2e7d32] to-[#1976d2] text-white p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
                <div className="text-3xl md:text-5xl font-bold mb-2">5M+</div>
                <div className="text-xs md:text-base opacity-95">Tons of Hazardous Waste Generated Annually in India</div>
              </div>
              <div className="bg-gradient-to-br from-[#2e7d32] to-[#1976d2] text-white p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
                <div className="text-3xl md:text-5xl font-bold mb-2">120</div>
                <div className="text-xs md:text-base opacity-95">Days for Authorization Processing</div>
              </div>
              <div className="bg-gradient-to-br from-[#2e7d32] to-[#1976d2] text-white p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
                <div className="text-3xl md:text-5xl font-bold mb-2">5</div>
                <div className="text-xs md:text-base opacity-95">Years Validity Period</div>
              </div>
              <div className="bg-gradient-to-br from-[#2e7d32] to-[#1976d2] text-white p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
                <div className="text-3xl md:text-5xl font-bold mb-2">60</div>
                <div className="text-xs md:text-base opacity-95">Days to Apply After Rules Publication</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#fff3e0] to-[#ffebee] border-l-4 border-[#ff9800] p-5 md:p-6 my-6 rounded-r-lg flex flex-col sm:flex-row items-start gap-4">
              <i className="fas fa-exclamation-circle text-2xl md:text-3xl text-[#ff9800] shrink-0 mt-1"></i>
              <div>
                <h4 className="text-[#ff9800] font-bold text-lg md:text-xl mb-3">Legal Consequences of Non-Compliance</h4>
                <p className="mb-3 text-base text-[#34495e]">Operating without proper authorization can result in severe penalties including:</p>
                <ul className="list-disc pl-5 text-[#34495e] space-y-2">
                  <li>Heavy financial penalties and fines</li>
                  <li>Closure of industrial operations</li>
                  <li>Criminal liability for management</li>
                  <li>Environmental damage compensation</li>
                  <li>Revocation of other operating licenses</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] border-l-4 border-[#2e7d32] p-5 md:p-6 my-6 rounded-r-lg flex flex-col sm:flex-row items-start gap-4">
              <i className="fas fa-check-circle text-2xl md:text-3xl text-[#2e7d32] shrink-0 mt-1"></i>
              <div>
                <h4 className="text-[#2e7d32] font-bold text-lg md:text-xl mb-3">How EPR Nexuss Helps</h4>
                <p className="mb-0 text-base md:text-lg text-[#34495e]">
                  At EPR Nexuss Solutions, we help Producers, Importers, and Brand Owners (PIBOs) seamlessly meet government regulations while adopting eco-friendly waste management practices. Our expert guidance ensures you avoid these penalties and maintain 100% compliance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Who Needs Authorization */}
          <section className="w-full bg-white my-6 py-8 md:py-12 px-4 sm:px-8 md:px-12 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-[#2e7d32] text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 flex-wrap">
              <i className="fas fa-users text-[#1976d2] bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-3 rounded-full text-lg"></i> 
              Who Needs This Authorization?
            </h2>
            <p className="mb-6 text-base md:text-lg text-[#34495e]">
              Any facility or occupier engaged in the following activities involving hazardous and other wastes must obtain authorization:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-industry text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Manufacturing Units</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Industries generating hazardous waste during production processes</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-truck-loading text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Storage Facilities</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Units involved in collection, storage, and packaging of hazardous waste</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-shipping-fast text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Transporters</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Agencies involved in transportation of hazardous waste materials</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-recycle text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Treatment Plants</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Facilities for treatment, processing, recycling, and recovery of waste</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-trash-alt text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Disposal Units</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Units offering for sale, transfer, or disposal of hazardous wastes</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-globe text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Import/Export</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Businesses involved in transboundary movement of hazardous waste</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1976d2] to-[#2e7d32] p-6 md:p-10 rounded-2xl my-8 text-white">
              <h3 className="text-white text-center text-xl md:text-2xl font-bold mb-8 flex items-center justify-center gap-3">
                <i className="fas fa-cogs"></i> EPR Nexuss Services for Hazardous Waste
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white/10 p-5 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <i className="fas fa-file-contract text-3xl mb-3 block"></i>
                  <h4 className="text-lg font-semibold mb-2">Consent to Establish (CTE)</h4>
                  <p className="text-xs md:text-sm text-white/90 mb-0">Help obtaining CTE for new facilities</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <i className="fas fa-clipboard-check text-3xl mb-3 block"></i>
                  <h4 className="text-lg font-semibold mb-2">Consent to Operate (CTO)</h4>
                  <p className="text-xs md:text-sm text-white/90 mb-0">Renewal and compliance support</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <i className="fas fa-certificate text-3xl mb-3 block"></i>
                  <h4 className="text-lg font-semibold mb-2">Environmental Clearance</h4>
                  <p className="text-xs md:text-sm text-white/90 mb-0">Certificate for industries with environmental impacts</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <i className="fas fa-shield-alt text-3xl mb-3 block"></i>
                  <h4 className="text-lg font-semibold mb-2">Pollution Control Board Authorization</h4>
                  <p className="text-xs md:text-sm text-white/90 mb-0">Mandatory for hazardous waste handling</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <i className="fas fa-microchip text-3xl mb-3 block"></i>
                  <h4 className="text-lg font-semibold mb-2">E-Waste Compliance</h4>
                  <p className="text-xs md:text-sm text-white/90 mb-0">For electronic equipment manufacturers</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <i className="fas fa-plug text-3xl mb-3 block"></i>
                  <h4 className="text-lg font-semibold mb-2">Plastic Waste Management</h4>
                  <p className="text-xs md:text-sm text-white/90 mb-0">Compliance for plastic packaging businesses</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <i className="fas fa-car-battery text-3xl mb-3 block"></i>
                  <h4 className="text-lg font-semibold mb-2">Battery Waste Authorization</h4>
                  <p className="text-xs md:text-sm text-white/90 mb-0">For battery manufacturing and recycling</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <i className="fas fa-smog text-3xl mb-3 block"></i>
                  <h4 className="text-lg font-semibold mb-2">Air & Water Act Permissions</h4>
                  <p className="text-xs md:text-sm text-white/90 mb-0">For pollutant and wastewater discharge</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Types of Hazardous Waste */}
          <section className="w-full bg-white my-6 py-8 md:py-12 px-4 sm:px-8 md:px-12 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-x-auto">
            <h2 className="text-[#2e7d32] text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 flex-wrap">
              <i className="fas fa-biohazard text-[#1976d2] bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-3 rounded-full text-lg"></i> 
              Types of Hazardous Waste
            </h2>
            <p className="mb-6 text-base md:text-lg text-[#34495e]">
              Understanding what constitutes hazardous waste is crucial for proper authorization. Hazardous wastes are categorized based on their characteristics:
            </p>

            <div className="w-full overflow-x-auto rounded-xl shadow-md my-8">
              <table className="w-full border-collapse bg-white text-left min-w-[600px]">
                <thead>
                  <tr className="bg-gradient-to-r from-[#2e7d32] to-[#1976d2] text-white">
                    <th className="p-4 md:p-5 text-base md:text-lg font-semibold"><i className="fas fa-tag mr-2"></i> Category</th>
                    <th className="p-4 md:p-5 text-base md:text-lg font-semibold"><i className="fas fa-flask mr-2"></i> Examples</th>
                    <th className="p-4 md:p-5 text-base md:text-lg font-semibold"><i className="fas fa-exclamation-triangle mr-2"></i> Risk Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-[#e8f5e9] transition-colors">
                    <td className="p-4 text-[#34495e]"><strong>Chemical Waste</strong></td>
                    <td className="p-4 text-[#34495e]">Solvents, acids, alkalis, pesticides, pharmaceutical waste</td>
                    <td className="p-4"><span className="text-[#f44336] font-bold">High</span></td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200 hover:bg-[#e8f5e9] transition-colors">
                    <td className="p-4 text-[#34495e]"><strong>Biological Waste</strong></td>
                    <td className="p-4 text-[#34495e]">Medical waste, laboratory cultures, infectious materials</td>
                    <td className="p-4"><span className="text-[#ff9800] font-bold">Medium-High</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-[#e8f5e9] transition-colors">
                    <td className="p-4 text-[#34495e]"><strong>Metallic Waste</strong></td>
                    <td className="p-4 text-[#34495e]">Heavy metals, mercury, lead, cadmium, chromium</td>
                    <td className="p-4"><span className="text-[#f44336] font-bold">High</span></td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200 hover:bg-[#e8f5e9] transition-colors">
                    <td className="p-4 text-[#34495e]"><strong>Organic Waste</strong></td>
                    <td className="p-4 text-[#34495e]">Oil sludge, tar residues, organic compounds</td>
                    <td className="p-4"><span className="text-[#ff9800] font-bold">Medium-High</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-[#e8f5e9] transition-colors">
                    <td className="p-4 text-[#34495e]"><strong>Electronic Waste</strong></td>
                    <td className="p-4 text-[#34495e]">Circuit boards, batteries, fluorescent lamps</td>
                    <td className="p-4"><span className="text-[#ff9800] font-bold">Medium</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Authorization Process */}
          <section className="w-full bg-white my-6 py-8 md:py-12 px-4 sm:px-8 md:px-12 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-[#2e7d32] text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 flex-wrap">
              <i className="fas fa-tasks text-[#1976d2] bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-3 rounded-full text-lg"></i> 
              Step-by-Step Authorization Process
            </h2>
            <p className="mb-6 text-base md:text-lg text-[#34495e]">
              Obtaining hazardous waste authorization involves a systematic process. Follow these steps to ensure successful application:
            </p>

            <div className="my-8 space-y-6">
              {[
                { title: "Registration on Online Portal", text: "Begin by registering on your State Pollution Control Board's online portal (such as OCMMS, Nivesh Mitra, or state-specific portals). Create your account using personal and contact details. You'll receive login credentials via SMS and email." },
                { title: "Fill Application Form 1", text: "Complete the Common Application Form (Form 1) as per Rule 6 of Hazardous Waste Rules. Provide detailed information about your facility, production capacity, waste generation estimates, and proposed disposal methods." },
                { title: "Upload Required Documents", text: "Attach all mandatory documents including Consent to Establish/Operate, site plans, emergency response plan, agreements with authorized treatment facilities, and company registration certificates." },
                { title: "Pay Application Fees", text: "Submit the prescribed government fee online. Fee amounts vary by state and depend on waste quantity and unit size. Keep the payment receipt for your records." },
                { title: "Scrutiny and Site Inspection", text: "SPCB officials will review your application and conduct a physical inspection of your facility to verify infrastructure, storage systems, and compliance with CPCB guidelines and Standard Operating Procedures." },
                { title: "Grant of Authorization", text: "If all requirements are satisfied, the State Pollution Control Board will issue authorization in Form 2 within 120 days. The authorization is valid for 5 years and specifies the type and quantity of waste you're permitted to handle." }
              ].map((step, idx) => (
                <div key={idx} className="relative pl-16 md:pl-20">
                  <div className="absolute left-0 top-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2e7d32] to-[#1976d2] text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-md">
                    {idx + 1}
                  </div>
                  <h4 className="text-[#2e7d32] text-xl font-semibold mb-2">{step.title}</h4>
                  <p className="text-[#34495e] text-base mb-0">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] border-l-4 border-[#2e7d32] p-5 md:p-6 my-6 rounded-r-lg flex flex-col sm:flex-row items-start gap-4">
              <i className="fas fa-clock text-2xl md:text-3xl text-[#2e7d32] shrink-0 mt-1"></i>
              <div>
                <h4 className="text-[#2e7d32] font-bold text-lg md:text-xl mb-2">Important Timeline</h4>
                <p className="mb-0 text-base md:text-lg text-[#34495e]">
                  For renewal applications, submit your application at least <strong>120 days prior</strong> to the expiration of your existing authorization to avoid any lapse in compliance. EPR Nexuss helps you stay ahead of deadlines with our proactive compliance management.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Required Documents */}
          <section className="w-full bg-white my-6 py-8 md:py-12 px-4 sm:px-8 md:px-12 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-[#2e7d32] text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 flex-wrap">
              <i className="fas fa-file-alt text-[#1976d2] bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-3 rounded-full text-lg"></i> 
              Documents Required for Authorization
            </h2>
            <p className="mb-6 text-base md:text-lg text-[#34495e]">
              Proper documentation is crucial for a smooth authorization process. Ensure you have all the following documents ready before applying:
            </p>

            <div className="my-6 space-y-4">
              {[
                {
                  title: "Company Registration Documents",
                  icon: "fa-building",
                  items: [
                    "Certificate of Incorporation / Company Registration",
                    "Memorandum and Articles of Association",
                    "GST Certificate",
                    "PAN Card and Aadhar Card of applicant",
                    "Factory License or Trade License",
                    "Proof of premises ownership or lease agreement"
                  ]
                },
                {
                  title: "Pollution Control Board Certificates",
                  icon: "fa-file-contract",
                  items: [
                    "Consent to Establish (CTE) - for first-time authorization",
                    "Consent to Operate (CTO) - for renewal cases",
                    "Certificate of Registration from SPCB",
                    "Proof of installed capacity of plant and machinery"
                  ]
                },
                {
                  title: "Site and Facility Documents",
                  icon: "fa-map-marked-alt",
                  items: [
                    "Location map and site plan (plant layout)",
                    "Detailed plan of hazardous waste storage yard",
                    "Photographs of storage and handling systems",
                    "Process flow sheet with equipment details",
                    "Water balance chart and material mass balance",
                    "Photographic proof of display board at main gate (4×6 ft)"
                  ]
                },
                {
                  title: "Technical and Compliance Documents",
                  icon: "fa-clipboard-check",
                  items: [
                    "Emergency Response Plan as per CPCB guidelines (Form-I)",
                    "Agreement with Common HW Treatment Storage Disposal Facility (CHWTSDF)",
                    "Agreement with authorized recycler/reprocessor",
                    "Details of raw materials, products, and process description",
                    "Production capacity and waste generation estimates",
                    "Compliance report on hazardous waste conditions",
                    "Latest analysis reports (effluent, stack monitoring, air quality, noise)",
                    "Undertaking on non-judicial stamp paper (Rs. 10/-)",
                    "Last two years' annual returns (for renewal applications)"
                  ]
                }
              ].map((acc, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden transition-colors hover:border-[#2e7d32]">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-5 text-left font-bold text-[#2e7d32] text-base md:text-lg flex justify-between items-center transition-colors hover:bg-gradient-to-br hover:from-[#c8e6c9] hover:to-[#bbdefb]"
                  >
                    <span className="flex items-center gap-2">
                      <i className={`fas ${acc.icon}`}></i> {acc.title}
                    </span>
                    <i className={`fas fa-chevron-down transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`}></i>
                  </button>
                  {activeAccordion === index && (
                    <div className="p-5 bg-white border-t border-gray-200">
                      <ul className="list-disc pl-5 space-y-2 text-[#34495e]">
                        {acc.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] border-l-4 border-[#1976d2] p-5 md:p-6 my-6 rounded-r-lg flex flex-col sm:flex-row items-start gap-4">
              <i className="fas fa-headset text-2xl md:text-3xl text-[#1976d2] shrink-0 mt-1"></i>
              <div>
                <h4 className="text-[#1976d2] font-bold text-lg md:text-xl mb-2">Expert Documentation Support</h4>
                <p className="mb-0 text-base md:text-lg text-[#34495e]">
                  EPR Nexuss provides comprehensive documentation support including EPR compliance documentation, annual return filing, waste management planning, and government approvals. Our certified experts ensure your documentation is complete and accurate.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Environmental Impact */}
          <section className="w-full bg-white my-6 py-8 md:py-12 px-4 sm:px-8 md:px-12 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-[#2e7d32] text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 flex-wrap">
              <i className="fas fa-globe-americas text-[#1976d2] bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-3 rounded-full text-lg"></i> 
              Environmental Impact of Hazardous Waste
            </h2>
            <p className="mb-6 text-base md:text-lg text-[#34495e]">
              Improper management of hazardous waste can have devastating effects on the environment. Understanding these impacts highlights why authorization and proper handling are essential:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-tint text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Water Contamination</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Leaching of toxic chemicals into groundwater and surface water bodies, affecting drinking water sources and aquatic ecosystems</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-wind text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Air Pollution</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Release of harmful gases, particulate matter, and volatile organic compounds affecting air quality and respiratory health</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-seedling text-4xl text-[#2e7d32] mb-4 block"></i>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Contamination of soil with heavy metals and chemicals, reducing fertility and entering the food chain through crops</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-heartbeat text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Human Health Risks</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Exposure can cause cancer, respiratory diseases, neurological disorders, reproductive issues, and other serious health problems</p>
              </div>
            </div>
          </section>

          {/* Section 8: Benefits of Proper Authorization */}
          <section className="w-full bg-white my-6 py-8 md:py-12 px-4 sm:px-8 md:px-12 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-[#2e7d32] text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 flex-wrap">
              <i className="fas fa-check-circle text-[#1976d2] bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-3 rounded-full text-lg"></i> 
              Benefits of Proper Authorization
            </h2>
            <p className="mb-6 text-base md:text-lg text-[#34495e]">
              Obtaining and maintaining proper hazardous waste authorization offers numerous advantages for your business and the environment:
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 my-8">
              <div className="bg-gradient-to-br from-[#2e7d32] to-[#1976d2] text-white p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
                <i className="fas fa-shield-alt text-4xl mb-3 block"></i>
                <div className="text-sm md:text-lg font-semibold">Legal Protection & Compliance</div>
              </div>
              <div className="bg-gradient-to-br from-[#2e7d32] to-[#1976d2] text-white p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
                <i className="fas fa-star text-4xl mb-3 block"></i>
                <div className="text-sm md:text-lg font-semibold">Enhanced Corporate Reputation</div>
              </div>
              <div className="bg-gradient-to-br from-[#2e7d32] to-[#1976d2] text-white p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
                <i className="fas fa-piggy-bank text-4xl mb-3 block"></i>
                <div className="text-sm md:text-lg font-semibold">Avoid Costly Penalties</div>
              </div>
              <div className="bg-gradient-to-br from-[#2e7d32] to-[#1976d2] text-white p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
                <i className="fas fa-handshake text-4xl mb-3 block"></i>
                <div className="text-sm md:text-lg font-semibold">Better Stakeholder Relations</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] border-l-4 border-[#2e7d32] p-5 md:p-6 my-6 rounded-r-lg flex flex-col sm:flex-row items-start gap-4">
              <i className="fas fa-chart-line text-2xl md:text-3xl text-[#2e7d32] shrink-0 mt-1"></i>
              <div>
                <h4 className="text-[#2e7d32] font-bold text-lg md:text-xl mb-3">Business Advantages with EPR Nexuss</h4>
                <ul className="list-disc pl-5 space-y-2 text-[#34495e]">
                  <li><strong>Operational Continuity:</strong> Avoid shutdowns and business interruptions due to regulatory actions</li>
                  <li><strong>Market Access:</strong> Many clients and partners require environmental compliance certification</li>
                  <li><strong>Insurance Benefits:</strong> Lower premiums and better coverage options for compliant facilities</li>
                  <li><strong>Sustainable Growth:</strong> Demonstrate commitment to environmental responsibility and ESG goals</li>
                  <li><strong>Employee Safety:</strong> Create safer working conditions and reduce liability</li>
                  <li><strong>Community Relations:</strong> Build trust with local communities and regulatory bodies</li>
                  <li><strong>Instant Access to Recycling Network:</strong> EPR Nexuss provides premium recycling network partnerships</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 10: Renewal Process */}
          <section className="w-full bg-white my-6 py-8 md:py-12 px-4 sm:px-8 md:px-12 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-[#2e7d32] text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 flex-wrap">
              <i className="fas fa-sync-alt text-[#1976d2] bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-3 rounded-full text-lg"></i> 
              Authorization Renewal Process
            </h2>
            <p className="mb-6 text-base md:text-lg text-[#34495e]">
              Your hazardous waste authorization is valid for 5 years. Here's how to ensure smooth renewal:
            </p>

            <div className="relative border-l-4 border-gradient-to-b from-[#2e7d32] to-[#1976d2] ml-4 md:ml-6 pl-6 my-8 space-y-8">
              {[
                { time: "120 Days Before Expiry", text: "Begin preparing your renewal application. Gather updated documents, compliance reports, and annual returns for the last two years." },
                { time: "90 Days Before Expiry", text: "Submit your renewal application through the online portal with Form 5 and all required updated documents. Pay the renewal fees." },
                { time: "60 Days Before Expiry", text: "Expect site inspection by SPCB officials. Ensure your facility maintains compliance standards and address any queries promptly." },
                { time: "30 Days Before Expiry", text: "Follow up on application status. Provide any additional information or clarifications requested by the board." },
                { time: "Before Expiry Date", text: "Receive renewed authorization in Form 2. Review the terms and conditions carefully and display the certificate prominently at your facility." }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[35px] top-1 w-5 h-5 bg-[#2e7d32] border-4 border-[#e8f5e9] rounded-full"></div>
                  <h4 className="text-[#1976d2] text-lg md:text-xl font-bold mb-1">{item.time}</h4>
                  <p className="text-[#34495e] text-base mb-0">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 11: Compliance Requirements */}
          <section className="w-full bg-white my-6 py-8 md:py-12 px-4 sm:px-8 md:px-12 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-[#2e7d32] text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 flex-wrap">
              <i className="fas fa-clipboard-list text-[#1976d2] bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-3 rounded-full text-lg"></i> 
              Ongoing Compliance Requirements
            </h2>
            <p className="mb-6 text-base md:text-lg text-[#34495e]">
              Once you obtain authorization, maintaining compliance is an ongoing responsibility. Here's what you need to do:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-book text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Maintain Records</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Keep detailed records of waste generation, storage, transportation, and disposal for at least 5 years</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-file-upload text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Annual Returns</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Submit annual returns in Form 3 to the State Pollution Control Board by June 30th each year</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-tags text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Proper Labeling</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Ensure all waste containers are properly labeled with hazard symbols and waste information</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-user-graduate text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Staff Training</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Conduct regular training programs for employees on safe handling and emergency procedures</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-search text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Regular Inspections</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Allow SPCB officials to conduct inspections and provide necessary cooperation and information</p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] p-6 rounded-xl text-center border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-[#2e7d32] hover:shadow-xl">
                <i className="fas fa-bullhorn text-4xl text-[#2e7d32] mb-4 block"></i>
                <h4 className="text-[#1976d2] text-lg font-semibold mb-2">Display Authorization</h4>
                <p className="text-[#34495e] text-sm md:text-base mb-0">Display the authorization certificate prominently at your facility in a visible location</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1976d2] to-[#2e7d32] p-6 md:p-10 rounded-2xl my-8 text-white">
              <h3 className="text-white text-center text-xl md:text-2xl font-bold mb-8 flex items-center justify-center gap-3">
                <i className="fas fa-headset"></i> How EPR Nexuss Supports Your Compliance Journey
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-white/10 p-5 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <i className="fas fa-file-signature text-3xl mb-3 block"></i>
                  <h4 className="text-lg font-semibold mb-2">EPR Registration & Certification</h4>
                  <p className="text-xs md:text-sm text-white/90 mb-0">Complete registration support</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <i className="fas fa-file-alt text-3xl mb-3 block"></i>
                  <h4 className="text-lg font-semibold mb-2">Compliance Documentation</h4>
                  <p className="text-xs md:text-sm text-white/90 mb-0">Expert documentation & reporting</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <i className="fas fa-recycle text-3xl mb-3 block"></i>
                  <h4 className="text-lg font-semibold mb-2">Waste Management Planning</h4>
                  <p className="text-xs md:text-sm text-white/90 mb-0">Sustainable strategies</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <i className="fas fa-handshake text-3xl mb-3 block"></i>
                  <h4 className="text-lg font-semibold mb-2">Recycling Partnerships</h4>
                  <p className="text-xs md:text-sm text-white/90 mb-0">Authorized facility connections</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <i className="fas fa-balance-scale text-3xl mb-3 block"></i>
                  <h4 className="text-lg font-semibold mb-2">Legal Compliance</h4>
                  <p className="text-xs md:text-sm text-white/90 mb-0">Government approvals</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <i className="fas fa-boxes text-3xl mb-3 block"></i>
                  <h4 className="text-lg font-semibold mb-2">Supply Chain Optimization</h4>
                  <p className="text-xs md:text-sm text-white/90 mb-0">Packaging compliance</p>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="w-full bg-gradient-to-br from-[#2e7d32] to-[#1976d2] text-white text-center py-10 px-4 mt-10">
          <div className="text-xl md:text-2xl font-bold mb-3">EPR Nexuss</div>
          <p className="text-white opacity-90 text-sm md:text-base max-w-2xl mx-auto">
            Empowering Compliance. Protecting the Planet.
          </p>
        </footer>
        </div>
      <aside className="hidden lg:block shrink-0 w-[320px]">
        <div className="sticky top-28 px-2">
    <StickyContactForm/>
        </div>
      </aside>

        </div>

      </div>
      </div>
  );
}