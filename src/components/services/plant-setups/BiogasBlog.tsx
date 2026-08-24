import StickyContactForm from "@/components/StickyContactForm";
import React from "react";

export const metadata = {
  title: "Compressed Biogas (CBG) Plant Machinery & Setup in India | EPR Nexuss",
  description:
    "Complete guide to Compressed Biogas (CBG) plant setup in India: feedstock planning, machinery, digesters, gas upgrading, compression, compliance, CPCB categorisation, MNRE assistance, and how EPR Nexuss supports registration and documentation.",
  keywords: [
    "CBG plant setup India",
    "Compressed Biogas plant machinery",
    "Bio-CNG plant",
    "CBG digester",
    "biogas upgrading",
    "CBG plant cost India",
    "MNRE Waste to Energy CBG",
    "IS 16087 biomethane",
    "CBG pollution control consent",
    "EPR Nexuss CBG",
    "press mud CBG plant",
    "agricultural residue biogas plant",
  ],
  authors: [{ name: "EPR Nexuss" }],
  creator: "EPR Nexuss",
  publisher: "EPR Nexuss",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://eprnexuss.com/services/biogas-plant-setup", // update to your real path
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://eprnexuss.com/services/biogas-plant-setup", // update to your real path
    siteName: "EPR Nexuss",
    title: "Compressed Biogas (CBG) Plant Machinery & Setup in India",
    description:
      "Plan a bankable CBG plant: feedstock, process design, machinery, approvals, gas quality (IS 16087), offtake and operations. EPR Nexuss helps with registration and compliance.",
    // images: [{ url: "https://eprnexuss.com/og-cbg-plant.jpg", width: 1200, height: 630, alt: "CBG Plant Setup India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compressed Biogas (CBG) Plant Machinery & Setup in India | EPR Nexuss",
    description:
      "Feedstock-first CBG plant setup: machinery sections, compliance roadmap, MNRE CFA notes, and practical FAQs for first-time promoters in India.",
    // images: ["https://eprnexuss.com/og-cbg-plant.jpg"],
  },
  category: "Bioenergy",
};

export default function CBGPlantSetup(): JSX.Element {
  return (
    <div className="w-full min-h-screen bg-[#eef2ef] text-[#07382a] font-sans antialiased m-0 p-0">
      {/* Outer Shell Wrapper - Full Width, No Horizontal Padding/Margin */}
      <div className="w-full md:mt-[110px] mt-[60px] px-0 py-2 md:py-6">
        <div className="flex flex-col lg:flex-row gap-2 items-stretch">
          <div>
            {/* Main Content Area */}
            <main className="bg-white border border-[#d9e2de] rounded-3xl md:rounded-[32px] shadow-[0_12px_36px_rgba(8,42,31,0.045)] p-4 sm:p-8 md:p-12 lg:p-[68px_74px_74px] w-full box-border">
              <span className="inline-flex px-5 py-2.5 rounded-full bg-[#e8f1ed] text-[#07382a] text-xs sm:text-sm tracking-[0.14em] font-extrabold uppercase">
                BIOENERGY • CBG • INDIA
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[90px] font-bold leading-[1.04] tracking-[-0.03em] max-w-[980px] mt-8 mb-[18px]">
                Compressed Biogas Plant Machinery and Plant Setup
              </h1>

              <p className="mt-[30px] max-w-[1050px] text-lg sm:text-xl text-[#5e7990] leading-[1.9] mb-5">
                Setting up a Compressed Biogas (CBG) plant is not simply about buying a digester and a gas compressor.
                The project has to work as one connected system — feedstock, process design, machinery, land, utilities,
                safety, registrations, pollution-control permissions, gas quality, offtake and day-to-day operations.
              </p>

              {/* Key Facts */}
              <div className="grid grid-cols-1 md:grid-cols-3 my-[34px] mb-[46px] border-y border-[#dce5e1]" aria-label="Key CBG facts">
                <div className="py-[20px] md:pr-6 border-b md:border-b-0 md:border-r border-[#dce5e1]">
                  <strong className="block text-3xl font-bold text-[#07382a] mb-[3px]">217</strong>
                  <span className="text-sm text-[#5e7990] leading-[1.55]">CBG/Bio-CNG plants commissioned, as reported on 6 Aug 2026</span>
                </div>
                <div className="py-[20px] md:px-6 border-b md:border-b-0 md:border-r border-[#dce5e1]">
                  <strong className="block text-3xl font-bold text-[#07382a] mb-[3px]">339</strong>
                  <span className="text-sm text-[#5e7990] leading-[1.55]">Plants under construction in the same national update</span>
                </div>
                <div className="py-[20px] md:pl-6">
                  <strong className="block text-3xl font-bold text-[#07382a] mb-[3px]">₹10 Cr</strong>
                  <span className="text-sm text-[#5e7990] leading-[1.55]">Maximum MNRE central financial assistance per project under the cited programme</span>
                </div>
              </div>

              {/* Lead Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] my-[30px] mb-[50px]">
                <article className="border border-[#dce5e1] rounded-[22px] p-[28px] bg-gradient-to-b from-white to-[#f8fbf9]">
                  <div className="w-[38px] h-[38px] rounded-full grid place-items-center bg-[#e8f1ed] font-extrabold mb-[18px]">01</div>
                  <h3 className="text-[23px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Start with feedstock</h3>
                  <p className="text-base text-[#5e7990] leading-[1.6] m-0">Before selecting machinery, establish what organic material you can secure, in what quantity, with what seasonality and at what delivered cost.</p>
                </article>
                <article className="border border-[#dce5e1] rounded-[22px] p-[28px] bg-gradient-to-b from-white to-[#f8fbf9]">
                  <div className="w-[38px] h-[38px] rounded-full grid place-items-center bg-[#e8f1ed] font-extrabold mb-[18px]">02</div>
                  <h3 className="text-[23px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Design the complete process</h3>
                  <p className="text-base text-[#5e7990] leading-[1.6] m-0">Digesters, gas cleaning, upgrading, compression, storage and digestate handling must be sized around the actual feedstock and target gas output.</p>
                </article>
                <article className="border border-[#dce5e1] rounded-[22px] p-[28px] bg-gradient-to-b from-white to-[#f8fbf9]">
                  <div className="w-[38px] h-[38px] rounded-full grid place-items-center bg-[#e8f1ed] font-extrabold mb-[18px]">03</div>
                  <h3 className="text-[23px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Plan approvals early</h3>
                  <p className="text-base text-[#5e7990] leading-[1.6] m-0">CBG projects can involve pollution-control consent, factory and local permissions, fire and pressure-safety requirements, registrations and other project-specific approvals.</p>
                </article>
                <article className="border border-[#dce5e1] rounded-[22px] p-[28px] bg-gradient-to-b from-white to-[#f8fbf9]">
                  <div className="w-[38px] h-[38px] rounded-full grid place-items-center bg-[#e8f1ed] font-extrabold mb-[18px]">04</div>
                  <h3 className="text-[23px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Build for operations</h3>
                  <p className="text-base text-[#5e7990] leading-[1.6] m-0">A technically impressive plant can still lose money when feedstock logistics, operator capability, maintenance, quality testing or working capital are overlooked.</p>
                </article>
              </div>

              {/* Section 01 */}
              <section className="my-[64px]" id="setup">
                <span className="inline-block mb-3 text-[#154c3d] text-[13px] tracking-[0.16em] uppercase font-[850]">01 / Plant Setup</span>
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Compressed Biogas Plant Setup and Support</h2>
                <p className="max-w-[950px] text-lg text-[#5e7990] mb-5">
                  A practical CBG project moves through a sequence of decisions rather than a single purchase order.
                  The right approach is to lock the commercial and regulatory assumptions first, then freeze the plant
                  configuration and machinery around those assumptions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 my-7 mb-[10px]">
                  <div className="relative p-[18px_14px] bg-[#e8f1ed] rounded-[17px] min-h-[112px] font-extrabold text-sm">
                    Feedstock Study
                    <small className="block font-medium text-[#5e7990] mt-1.5 leading-[1.45]">Availability, quality, seasonality, logistics</small>
                  </div>
                  <div className="relative p-[18px_14px] bg-[#e8f1ed] rounded-[17px] min-h-[112px] font-extrabold text-sm">
                    Feasibility
                    <small className="block font-medium text-[#5e7990] mt-1.5 leading-[1.45]">Capacity, technology, land, economics</small>
                  </div>
                  <div className="relative p-[18px_14px] bg-[#e8f1ed] rounded-[17px] min-h-[112px] font-extrabold text-sm">
                    Approvals
                    <small className="block font-medium text-[#5e7990] mt-1.5 leading-[1.45]">Consent, safety, factory, local permissions</small>
                  </div>
                  <div className="relative p-[18px_14px] bg-[#e8f1ed] rounded-[17px] min-h-[112px] font-extrabold text-sm">
                    EPC & Machinery
                    <small className="block font-medium text-[#5e7990] mt-1.5 leading-[1.45]">Procurement, civil, utilities, installation</small>
                  </div>
                  <div className="relative p-[18px_14px] bg-[#e8f1ed] rounded-[17px] min-h-[112px] font-extrabold text-sm">
                    Commissioning
                    <small className="block font-medium text-[#5e7990] mt-1.5 leading-[1.45]">Trials, gas quality, performance, operations</small>
                  </div>
                </div>

                <div className="mt-7 p-[30px] rounded-[24px] bg-[#07382a] text-white">
                  <h3 className="text-[23px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">What makes a CBG project bankable?</h3>
                  <p className="text-[#d6e7df] text-lg mb-5">
                    A credible project normally needs a traceable feedstock plan, realistic production assumptions,
                    a suitable site, clear technology selection, a documented approval pathway, a commercial/offtake
                    strategy and a capital plan that includes contingency and working capital.
                  </p>
                  <span className="inline-block px-3.5 py-2 border border-white/20 rounded-full text-[13px] font-extrabold mr-1.5 mt-1">Feedstock visibility</span>
                  <span className="inline-block px-3.5 py-2 border border-white/20 rounded-full text-[13px] font-extrabold mr-1.5 mt-1">Technology fit</span>
                  <span className="inline-block px-3.5 py-2 border border-white/20 rounded-full text-[13px] font-extrabold mr-1.5 mt-1">Compliance roadmap</span>
                  <span className="inline-block px-3.5 py-2 border border-white/20 rounded-full text-[13px] font-extrabold mr-1.5 mt-1">Offtake strategy</span>
                  <span className="inline-block px-3.5 py-2 border border-white/20 rounded-full text-[13px] font-extrabold mr-1.5 mt-1">O&M readiness</span>
                </div>
              </section>

              {/* Section 02 */}
              <section className="my-[64px]" id="machinery">
                <span className="inline-block mb-3 text-[#154c3d] text-[13px] tracking-[0.16em] uppercase font-[850]">02 / Machinery</span>
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Key Machinery and Plant Sections</h2>
                <p className="max-w-[950px] text-lg text-[#5e7990] mb-5">
                  The exact equipment list changes with feedstock — for example agricultural residue, press mud,
                  animal waste or source-segregated organic waste. A good design does not force every feedstock into
                  the same process line.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-6">
                  <div className="flex gap-4 p-5 border border-[#dce5e1] rounded-[18px] bg-[#fbfcfb]">
                    <div className="flex-none w-[44px] h-[44px] rounded-xl grid place-items-center bg-[#e7f2ed] font-black text-xl">01</div>
                    <div><strong className="block mb-0.5">Feedstock receiving & storage</strong><span className="text-[15px] text-[#5e7990]">Weighing, unloading, storage bays, conveyors, hoppers and controlled feeding.</span></div>
                  </div>
                  <div className="flex gap-4 p-5 border border-[#dce5e1] rounded-[18px] bg-[#fbfcfb]">
                    <div className="flex-none w-[44px] h-[44px] rounded-xl grid place-items-center bg-[#e7f2ed] font-black text-xl">02</div>
                    <div><strong className="block mb-0.5">Pre-processing system</strong><span className="text-[15px] text-[#5e7990]">Shredding, chopping, screening, slurry preparation, de-packaging and contamination removal as required.</span></div>
                  </div>
                  <div className="flex gap-4 p-5 border border-[#dce5e1] rounded-[18px] bg-[#fbfcfb]">
                    <div className="flex-none w-[44px] h-[44px] rounded-xl grid place-items-center bg-[#e7f2ed] font-black text-xl">03</div>
                    <div><strong className="block mb-0.5">Anaerobic digester</strong><span className="text-[15px] text-[#5e7990]">Reactor system selected to match solids content, retention time, temperature and feedstock characteristics.</span></div>
                  </div>
                  <div className="flex gap-4 p-5 border border-[#dce5e1] rounded-[18px] bg-[#fbfcfb]">
                    <div className="flex-none w-[44px] h-[44px] rounded-xl grid place-items-center bg-[#e7f2ed] font-black text-xl">04</div>
                    <div><strong className="block mb-0.5">Biogas collection & storage</strong><span className="text-[15px] text-[#5e7990]">Gas holders, pressure management, condensate handling and safe routing of raw biogas.</span></div>
                  </div>
                  <div className="flex gap-4 p-5 border border-[#dce5e1] rounded-[18px] bg-[#fbfcfb]">
                    <div className="flex-none w-[44px] h-[44px] rounded-xl grid place-items-center bg-[#e7f2ed] font-black text-xl">05</div>
                    <div><strong className="block mb-0.5">Gas cleaning</strong><span className="text-[15px] text-[#5e7990]">Removal of moisture, hydrogen sulphide and other contaminants to protect downstream equipment.</span></div>
                  </div>
                  <div className="flex gap-4 p-5 border border-[#dce5e1] rounded-[18px] bg-[#fbfcfb]">
                    <div className="flex-none w-[44px] h-[44px] rounded-xl grid place-items-center bg-[#e7f2ed] font-black text-xl">06</div>
                    <div><strong className="block mb-0.5">Gas upgrading</strong><span className="text-[15px] text-[#5e7990]">CO₂ separation using a suitable upgrading technology to produce biomethane/CBG quality gas.</span></div>
                  </div>
                  <div className="flex gap-4 p-5 border border-[#dce5e1] rounded-[18px] bg-[#fbfcfb]">
                    <div className="flex-none w-[44px] h-[44px] rounded-xl grid place-items-center bg-[#e7f2ed] font-black text-xl">07</div>
                    <div><strong className="block mb-0.5">Compression & high-pressure storage</strong><span className="text-[15px] text-[#5e7990]">Gas compression, cascade storage and dispensing/dispatch equipment designed for the intended delivery route.</span></div>
                  </div>
                  <div className="flex gap-4 p-5 border border-[#dce5e1] rounded-[18px] bg-[#fbfcfb]">
                    <div className="flex-none w-[44px] h-[44px] rounded-xl grid place-items-center bg-[#e7f2ed] font-black text-xl">08</div>
                    <div><strong className="block mb-0.5">Digestate / manure handling</strong><span className="text-[15px] text-[#5e7990]">Solid-liquid separation, storage and downstream handling of organic manure or other project by-products.</span></div>
                  </div>
                </div>

                <p className="mt-[22px] text-lg text-[#5e7990]">
                  <strong className="text-[#07382a]">Quality matters:</strong>{" "}
                  BIS identifies <strong className="text-[#07382a]">IS 16087:2016</strong> as the specification for biomethane used in
                  automotive, piped-network, stationary and industrial applications. BIS also lists <strong className="text-[#07382a]">IS 9478:2023</strong>
                  {" "}for design, construction, installation and operation of biogas/biomethane plants.
                </p>
              </section>

              {/* Section 03 */}
              <section className="my-[64px]" id="new-industry">
                <span className="inline-block mb-3 text-[#154c3d] text-[13px] tracking-[0.16em] uppercase font-[850]">03 / For First-Time Entrepreneurs</span>
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Coming from Another Industry? These Are the Issues You Usually Face</h2>
                <p className="max-w-[950px] text-lg text-[#5e7990] mb-5">
                  A common mistake is to assume that a successful entrepreneur in manufacturing, trading, agriculture,
                  waste management or another industrial segment can simply replicate the same business playbook in CBG.
                  The risk profile is different because a CBG plant combines biology, process engineering, high-pressure
                  gas systems, logistics, environmental compliance and long-term operations.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-[26px] items-start mt-[28px]">
                  <div className="grid gap-[12px]">
                    <div className="p-[17px_18px] border border-[#dce5e1] rounded-[16px] bg-white">
                      <strong className="block mb-0.5">Unfamiliar feedstock economics</strong>
                      <span className="text-[15px] text-[#5e7990]">The lowest purchase price is not always the lowest delivered cost once transport, moisture, contamination and seasonality are counted.</span>
                    </div>
                    <div className="p-[17px_18px] border border-[#dce5e1] rounded-[16px] bg-white">
                      <strong className="block mb-0.5">Over-reliance on EPC quotations</strong>
                      <span className="text-[15px] text-[#5e7990]">Different vendors may quote different output assumptions, scope boundaries and utility requirements. Comparing only the headline price can be misleading.</span>
                    </div>
                    <div className="p-[17px_18px] border border-[#dce5e1] rounded-[16px] bg-white">
                      <strong className="block mb-0.5">Wrong machinery for the feedstock</strong>
                      <span className="text-[15px] text-[#5e7990]">Agri-residue, press mud, dung and segregated organic waste do not behave the same way inside a digester or pre-processing line.</span>
                    </div>
                    <div className="p-[17px_18px] border border-[#dce5e1] rounded-[16px] bg-white">
                      <strong className="block mb-0.5">Approval delays</strong>
                      <span className="text-[15px] text-[#5e7990]">Project-specific permissions can involve multiple authorities. The requirements also vary with feedstock, site, storage, pressure systems and local rules.</span>
                    </div>
                    <div className="p-[17px_18px] border border-[#dce5e1] rounded-[16px] bg-white">
                      <strong className="block mb-0.5">Working-capital pressure</strong>
                      <span className="text-[15px] text-[#5e7990]">Construction bills arrive before a new plant reaches stable production. Feedstock inventory, utilities, manpower and trial operations require cash.</span>
                    </div>
                    <div className="p-[17px_18px] border border-[#dce5e1] rounded-[16px] bg-white">
                      <strong className="block mb-0.5">Operations capability gap</strong>
                      <span className="text-[15px] text-[#5e7990]">Running a CBG plant requires trained operators, preventive maintenance, lab/testing discipline and process monitoring — not only a one-time installation team.</span>
                    </div>
                  </div>

                  <div className="border border-[#dce5e1] rounded-[22px] p-[28px] bg-gradient-to-b from-white to-[#f8fbf9]">
                    <h3 className="text-[23px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">The smarter entry point</h3>
                    <p className="text-base text-[#5e7990] leading-[1.6] mb-5">
                      Treat the project as an industrial system from day one. Validate feedstock and site first,
                      define the output target second, map approvals third, and only then finalise engineering and machinery.
                    </p>
                    <p className="text-base text-[#5e7990] leading-[1.6] m-0">
                      This approach reduces the chance of buying equipment that is technically capable but commercially
                      mismatched to the project.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 04 */}
              <section className="my-[64px]" id="compliance">
                <span className="inline-block mb-3 text-[#154c3d] text-[13px] tracking-[0.16em] uppercase font-[850]">04 / Compliance & Registration</span>
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">CBG Registrations and Compliance: What Should Be Mapped?</h2>
                <p className="max-w-[950px] text-lg text-[#5e7990] mb-5">
                  CBG projects should not be described as having one universal “CBG licence”. The actual compliance
                  pathway depends on the plant design, feedstock, location, storage and end use. CPCB’s current
                  categorisation, for example, differentiates CBG projects by feedstock: the published classification
                  lists MSW/process-waste CBG plants under Red category and crop-residue CBG plants under Orange category.
                </p>

                <div className="overflow-x-auto border border-[#dce5e1] rounded-[20px]">
                  <table className="w-full min-w-[700px] border-collapse bg-white text-left align-top">
                    <thead>
                      <tr className="bg-[#e8f1ed]">
                        <th className="p-[16px_18px] text-sm tracking-[0.03em] border-b border-[#dce5e1]">Area</th>
                        <th className="p-[16px_18px] text-sm tracking-[0.03em] border-b border-[#dce5e1]">What needs attention</th>
                        <th className="p-[16px_18px] text-sm tracking-[0.03em] border-b border-[#dce5e1]">Why it matters</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#dce5e1]">
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">Pollution control</td>
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">Consent/authorisation pathway as applicable to the actual feedstock and plant configuration</td>
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">Wrong categorisation or incomplete application can lead to avoidable rework.</td>
                      </tr>
                      <tr className="border-b border-[#dce5e1]">
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">Land & local permissions</td>
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">Land use, building/site permissions, utilities and local development requirements</td>
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">A technically good project can stall if the site is not development-ready.</td>
                      </tr>
                      <tr className="border-b border-[#dce5e1]">
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">Pressure & gas safety</td>
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">High-pressure storage, compression, fire and safety systems and applicable statutory approvals</td>
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">CBG storage and dispensing involve significant pressure and safety considerations.</td>
                      </tr>
                      <tr className="border-b border-[#dce5e1]">
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">Factory / labour compliance</td>
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">Project-specific registration, occupational safety and workforce requirements</td>
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">Operations depend on a compliant and safe industrial workplace.</td>
                      </tr>
                      <tr className="border-b border-[#dce5e1]">
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">Gas quality</td>
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">Testing and conformity with the quality specifications relevant to the intended application</td>
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">Gas quality affects customer acceptance, equipment protection and commercial dispatch.</td>
                      </tr>
                      <tr>
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">Commercial registrations</td>
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">GST, banking, contracts, offtake documentation and any sector-specific registration</td>
                        <td className="p-[16px_18px] text-[15px] text-[#3d5569]">Registration is only useful when it is linked to the project’s actual transaction flow.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 05 */}
              <section className="my-[64px]" id="epr">
                <span className="inline-block mb-3 text-[#154c3d] text-[13px] tracking-[0.16em] uppercase font-[850]">05 / EPR Nexuss Support</span>
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">How EPR Nexuss Helps Clients Avoid Costly Trial-and-Error</h2>
                <p className="max-w-[950px] text-lg text-[#5e7990] mb-5">
                  A new CBG entrepreneur often receives advice from equipment suppliers, civil contractors, consultants,
                  finance intermediaries and different government-facing service providers. Each party may address only one
                  piece of the project. The result can be duplicated work, inconsistent assumptions and money spent before the
                  overall plan is properly aligned.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] my-[30px] mb-[50px]">
                  <article className="border border-[#dce5e1] rounded-[22px] p-[28px] bg-gradient-to-b from-white to-[#f8fbf9]">
                    <div className="w-[38px] h-[38px] rounded-full grid place-items-center bg-[#e8f1ed] font-extrabold mb-[18px]">A</div>
                    <h3 className="text-[23px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Start with a project roadmap</h3>
                    <p className="text-base text-[#5e7990] leading-[1.6] m-0">EPR Nexuss can help structure the project requirements into a sequence: business model, feedstock, site, capacity, registrations, compliance, documentation and execution support.</p>
                  </article>
                  <article className="border border-[#dce5e1] rounded-[22px] p-[28px] bg-gradient-to-b from-white to-[#f8fbf9]">
                    <div className="w-[38px] h-[38px] rounded-full grid place-items-center bg-[#e8f1ed] font-extrabold mb-[18px]">B</div>
                    <h3 className="text-[23px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Coordinate the documentation</h3>
                    <p className="text-base text-[#5e7990] leading-[1.6] m-0">Instead of treating each registration as a separate exercise, the documentation can be organised around the same core project facts so that forms, technical papers and supporting records stay consistent.</p>
                  </article>
                  <article className="border border-[#dce5e1] rounded-[22px] p-[28px] bg-gradient-to-b from-white to-[#f8fbf9]">
                    <div className="w-[38px] h-[38px] rounded-full grid place-items-center bg-[#e8f1ed] font-extrabold mb-[18px]">C</div>
                    <h3 className="text-[23px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Support compliance planning</h3>
                    <p className="text-base text-[#5e7990] leading-[1.6] m-0">Compliance can be mapped against the plant’s actual feedstock, machinery, storage and operating model, helping the promoter understand what applies before commitments are made.</p>
                  </article>
                  <article className="border border-[#dce5e1] rounded-[22px] p-[28px] bg-gradient-to-b from-white to-[#f8fbf9]">
                    <div className="w-[38px] h-[38px] rounded-full grid place-items-center bg-[#e8f1ed] font-extrabold mb-[18px]">D</div>
                    <h3 className="text-[23px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Stay involved after registration</h3>
                    <p className="text-base text-[#5e7990] leading-[1.6] m-0">Compliance is not finished when the certificate is issued. Renewals, record keeping, changes in plant configuration and ongoing statutory actions may still need attention.</p>
                  </article>
                </div>

                <div className="mt-7 p-[30px] rounded-[24px] bg-[#07382a] text-white">
                  <h3 className="text-[23px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Our working principle</h3>
                  <p className="text-[#d6e7df] text-lg m-0">
                    <strong className="text-white">Do not buy first and ask compliance questions later.</strong>
                    {" "}Validate the project assumptions first, map the approvals and documentation, and then align the
                    machinery and execution scope.
                  </p>
                </div>
              </section>

              {/* Section 06 */}
              <section className="my-[64px]">
                <span className="inline-block mb-3 text-[#154c3d] text-[13px] tracking-[0.16em] uppercase font-[850]">06 / Industry Direction</span>
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Why CBG Is Getting Serious Attention in India</h2>
                <p className="max-w-[950px] text-lg text-[#5e7990] mb-5">
                  Government data shows a growing project pipeline. A PIB update dated 6 August 2026 reported
                  {" "}<strong className="text-[#07382a]">1,908 CBG/Bio-CNG plants registered</strong> nationally, with
                  {" "}<strong className="text-[#07382a]">217 commissioned</strong> and <strong className="text-[#07382a]">339 under construction</strong>.
                  That is a real market signal: interest is increasing, but getting from registration to a stable operating plant
                  still requires disciplined execution.
                </p>
                <p className="max-w-[950px] text-lg text-[#5e7990] mb-5">
                  Under the cited MNRE Waste-to-Energy programme, central financial assistance for a new BioCNG/CBG project
                  is stated at <strong className="text-[#07382a]">₹4 crore per 4,800 kg/day</strong> of capacity, subject to
                  scheme conditions, with a <strong className="text-[#07382a]">maximum of ₹10 crore per project</strong>.
                  Incentive eligibility should be checked against the current programme and the actual project structure before
                  making financial assumptions.
                </p>
              </section>

              {/* Section 07 - FAQs */}
              <section className="my-[64px]" id="faqs">
                <span className="inline-block mb-3 text-[#154c3d] text-[13px] tracking-[0.16em] uppercase font-[850]">07 / Frequently Asked Questions</span>
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Frequently Asked Questions About CBG Plant Setup</h2>
                <p className="max-w-[950px] text-lg text-[#5e7990] mb-5">
                  These are the questions promoters commonly ask before moving from the idea stage to a working
                  Compressed Biogas plant. The exact answer can change with feedstock, capacity, state, site and
                  the intended end use of the gas.
                </p>

                <div className="grid gap-[12px] mt-[28px]">
                  <details className="border border-[#dce5e1] rounded-[18px] bg-white overflow-hidden group" open>
                    <summary className="cursor-pointer list-none p-[20px_52px_20px_22px] relative font-extrabold text-[17px] text-[#07382a] select-none [&::-webkit-details-marker]:hidden">
                      How much does it cost to set up a CBG plant in India?
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full grid place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:hidden">+</span>
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full hidden place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:grid">−</span>
                    </summary>
                    <p className="m-0 p-[0_22px_22px] text-base text-[#5e7990] max-w-[1000px]">
                      There is no single standard project cost. Investment depends on feedstock, daily processing
                      capacity, pre-treatment requirements, digester technology, gas upgrading method, compression
                      and storage, civil works, utilities, land development and the level of automation. A realistic
                      project budget should therefore be prepared after a feedstock and site assessment rather than
                      by applying a fixed cost per tonne or per kg of CBG.
                    </p>
                  </details>

                  <details className="border border-[#dce5e1] rounded-[18px] bg-white overflow-hidden group">
                    <summary className="cursor-pointer list-none p-[20px_52px_20px_22px] relative font-extrabold text-[17px] text-[#07382a] select-none [&::-webkit-details-marker]:hidden">
                      Which feedstocks can be used for a CBG plant?
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full grid place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:hidden">+</span>
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full hidden place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:grid">−</span>
                    </summary>
                    <p className="m-0 p-[0_22px_22px] text-base text-[#5e7990] max-w-[1000px]">
                      Depending on the technology and local supply chain, projects may use agricultural residues,
                      press mud, cattle dung, food and organic waste, sewage or other suitable biodegradable
                      materials. The important question is not only whether a feedstock is technically digestible,
                      but whether it is consistently available, affordable to collect and transportable to the plant.
                    </p>
                  </details>

                  <details className="border border-[#dce5e1] rounded-[18px] bg-white overflow-hidden group">
                    <summary className="cursor-pointer list-none p-[20px_52px_20px_22px] relative font-extrabold text-[17px] text-[#07382a] select-none [&::-webkit-details-marker]:hidden">
                      How much land is required for a CBG plant?
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full grid place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:hidden">+</span>
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full hidden place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:grid">−</span>
                    </summary>
                    <p className="m-0 p-[0_22px_22px] text-base text-[#5e7990] max-w-[1000px]">
                      Land requirement varies with plant capacity and layout. Feedstock storage, pre-processing,
                      digesters, gas cleaning and upgrading, compression, digestate handling, roads, fire and safety
                      clearances, utilities and future expansion all affect the footprint. The land requirement should
                      be calculated from the proposed process flow and storage strategy.
                    </p>
                  </details>

                  <details className="border border-[#dce5e1] rounded-[18px] bg-white overflow-hidden group">
                    <summary className="cursor-pointer list-none p-[20px_52px_20px_22px] relative font-extrabold text-[17px] text-[#07382a] select-none [&::-webkit-details-marker]:hidden">
                      Is a pollution-control consent required for a CBG plant?
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full grid place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:hidden">+</span>
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full hidden place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:grid">−</span>
                    </summary>
                    <p className="m-0 p-[0_22px_22px] text-base text-[#5e7990] max-w-[1000px]">
                      The applicable pollution-control permissions depend on the feedstock and project configuration.
                      CPCB&apos;s published sector classification distinguishes CBG projects by feedstock, so a promoter
                      should not assume that every CBG plant follows exactly the same approval route. The consent and
                      authorisation pathway should be mapped before construction and procurement.
                    </p>
                  </details>

                  <details className="border border-[#dce5e1] rounded-[18px] bg-white overflow-hidden group">
                    <summary className="cursor-pointer list-none p-[20px_52px_20px_22px] relative font-extrabold text-[17px] text-[#07382a] select-none [&::-webkit-details-marker]:hidden">
                      What machinery is essential in a CBG plant?
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full grid place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:hidden">+</span>
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full hidden place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:grid">−</span>
                    </summary>
                    <p className="m-0 p-[0_22px_22px] text-base text-[#5e7990] max-w-[1000px]">
                      A typical plant may include feedstock receiving and storage, pre-processing, anaerobic digestion,
                      biogas collection, gas cleaning, gas upgrading, compression and high-pressure storage, plus
                      digestate handling and plant utilities. The final equipment list should be engineered around the
                      actual feedstock and target gas quality rather than copied from another plant.
                    </p>
                  </details>

                  <details className="border border-[#dce5e1] rounded-[18px] bg-white overflow-hidden group">
                    <summary className="cursor-pointer list-none p-[20px_52px_20px_22px] relative font-extrabold text-[17px] text-[#07382a] select-none [&::-webkit-details-marker]:hidden">
                      How long does it take to set up a CBG plant?
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full grid place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:hidden">+</span>
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full hidden place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:grid">−</span>
                    </summary>
                    <p className="m-0 p-[0_22px_22px] text-base text-[#5e7990] max-w-[1000px]">
                      Timelines vary significantly. Feedstock studies, land readiness, statutory approvals, financing,
                      detailed engineering, equipment manufacturing, civil construction, installation, commissioning
                      and performance stabilisation can all affect the schedule. It is safer to build a project
                      milestone plan than to rely on a generic construction period.
                    </p>
                  </details>

                  <details className="border border-[#dce5e1] rounded-[18px] bg-white overflow-hidden group">
                    <summary className="cursor-pointer list-none p-[20px_52px_20px_22px] relative font-extrabold text-[17px] text-[#07382a] select-none [&::-webkit-details-marker]:hidden">
                      Can a person from another industry start a CBG business?
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full grid place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:hidden">+</span>
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full hidden place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:grid">−</span>
                    </summary>
                    <p className="m-0 p-[0_22px_22px] text-base text-[#5e7990] max-w-[1000px]">
                      Yes, but entering CBG requires more than capital. A first-time promoter should understand
                      feedstock logistics, process engineering, gas quality, safety, compliance, plant operations and
                      offtake. Bringing specialist technical and compliance support into the project early can reduce
                      avoidable trial-and-error.
                    </p>
                  </details>

                  <details className="border border-[#dce5e1] rounded-[18px] bg-white overflow-hidden group">
                    <summary className="cursor-pointer list-none p-[20px_52px_20px_22px] relative font-extrabold text-[17px] text-[#07382a] select-none [&::-webkit-details-marker]:hidden">
                      Does EPR Nexuss provide machinery for the plant?
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full grid place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:hidden">+</span>
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full hidden place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:grid">−</span>
                    </summary>
                    <p className="m-0 p-[0_22px_22px] text-base text-[#5e7990] max-w-[1000px]">
                      EPR Nexuss can support the registration, documentation and compliance side of the project. The
                      machinery should be selected on the basis of feedstock, capacity, process design and commercial
                      requirements. Keeping compliance and engineering assumptions aligned helps the promoter compare
                      vendors more effectively.
                    </p>
                  </details>

                  <details className="border border-[#dce5e1] rounded-[18px] bg-white overflow-hidden group">
                    <summary className="cursor-pointer list-none p-[20px_52px_20px_22px] relative font-extrabold text-[17px] text-[#07382a] select-none [&::-webkit-details-marker]:hidden">
                      How does EPR Nexuss help before the project starts?
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full grid place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:hidden">+</span>
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full hidden place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:grid">−</span>
                    </summary>
                    <p className="m-0 p-[0_22px_22px] text-base text-[#5e7990] max-w-[1000px]">
                      EPR Nexuss can help organise the project roadmap, identify the applicable registration and
                      compliance requirements, prepare and coordinate documentation, and support the promoter through
                      the relevant filing and approval process. This helps reduce duplicated submissions, inconsistent
                      project information and avoidable delays.
                    </p>
                  </details>

                  <details className="border border-[#dce5e1] rounded-[18px] bg-white overflow-hidden group">
                    <summary className="cursor-pointer list-none p-[20px_52px_20px_22px] relative font-extrabold text-[17px] text-[#07382a] select-none [&::-webkit-details-marker]:hidden">
                      What should I do before buying CBG plant machinery?
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full grid place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:hidden">+</span>
                      <span className="absolute right-[20px] top-[14px] w-[30px] h-[30px] rounded-full hidden place-items-center bg-[#e8f1ed] text-[#07382a] text-[22px] font-medium group-open:grid">−</span>
                    </summary>
                    <p className="m-0 p-[0_22px_22px] text-base text-[#5e7990] max-w-[1000px]">
                      First validate feedstock quantity and quality, site suitability, expected production, utility
                      availability, approval requirements, offtake assumptions and the financial model. Once these are
                      stable, machinery specifications can be compared against the project instead of choosing equipment
                      first and trying to fit the business around it.
                    </p>
                  </details>
                </div>
              </section>

              {/* CTA */}
              <div className="p-6 sm:p-9 md:p-[38px] rounded-[26px] bg-gradient-to-br from-[#eaf3ee] to-[#f8fbf9] border border-[#dce5e1] mt-[52px]">
                <h2 className="text-3xl sm:text-4xl font-bold leading-[1.06] tracking-[-0.03em] mb-[18px]">Planning a CBG Plant?</h2>
                <p className="max-w-[840px] text-lg text-[#5e7990] mb-5">
                  Begin with the project fundamentals: feedstock availability, proposed capacity, site, technology,
                  machinery, approvals, offtake and financing. EPR Nexuss can support the registration and compliance side
                  of the journey and help you organise the project documentation before you commit time and capital.
                </p>
                <a className="inline-flex items-center gap-2 mt-2.5 px-[20px] py-[14px] rounded-full bg-[#07382a] text-white font-black no-underline" href="tel:+918796711794">
                  Talk to EPR Nexuss →
                </a>
              </div>
            </main>
          </div>
          <aside className="hidden lg:block shrink-0 w-[320px]">
            <div className="sticky top-28 px-2">
              <StickyContactForm />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}