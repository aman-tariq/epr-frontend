import React from 'react';
import StickyContactForm from '@/components/StickyContactForm';

export default function RVSFLicenseGuide(): JSX.Element {
  return (
    <main className="w-full min-h-screen m-0 px-1 sm:px-2 lg:px-2 py-6 bg-gradient-to-b from-[#f8fbf8] to-[#eef7f1] text-[#0f172a] font-sans antialiased">
      <div className="w-full max-w-none mt-[40px] md:mt-[100px]">
        <div className= "flex flex-col lg:flex-row gap-2 items-stretch">
          <div>
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-3xl px-5 py-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] sm:px-7 sm:py-10 lg:px-12 lg:py-14 bg-gradient-to-br from-[#0f6b42]/95 to-[#198754]/90">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-white blur-3xl"></div>
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-lime-300 blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-2 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-md">
                RVSF License Guide
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-md">
                Application
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-md">
                Renewal
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-md">
                Documentation
              </span>
            </div>

            <div className="mx-auto mt-6 max-w-none text-center">
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-['Outfit',system-ui,sans-serif]">
                EPR RVSF License : Procedural Guidelines for RVSF License Application, Renewal, and Documentation
              </h1>
              <p className="mx-auto mt-4 max-w-none text-base leading-8 text-white/85 sm:text-lg">
                A focused, compliance-first guide to the Registered Vehicle Scrapping Facility (RVSF) process in India —
                covering how to apply, what to keep ready, how renewal works, and which documentation and operational records
                matter most.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <div className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-bold text-[#0f6b42]">Application</div>
                <h2 className="mt-3 text-lg font-semibold text-white">File through the prescribed portal</h2>
                <p className="mt-2 leading-7 text-white/80">
                  The RVSF framework uses a formal application route with document upload, fee payment, and scrutiny by the competent authority.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <div className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-bold text-[#0f6b42]">Renewal</div>
                <h2 className="mt-3 text-lg font-semibold text-white">Plan before expiry</h2>
                <p className="mt-2 leading-7 text-white/80">
                  RVSF registration is not permanent. Renewal should be tracked well in advance so compliance records, fees, and inspections do not create delays.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <div className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-bold text-[#0f6b42]">Documentation</div>
                <h2 className="mt-3 text-lg font-semibold text-white">Build a complete file</h2>
                <p className="mt-2 leading-7 text-white/80">
                  A clean paper trail reduces back-and-forth during review, inspection, and audit, especially for site, environmental, and operational records.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-[#0f6b42]/25 to-transparent"></div>

        {/* CONTENT SECTIONS */}
        <div className="mt-8 space-y-6 w-full">
          
          {/* OVERVIEW SECTION */}
          <section id="overview" className="bg-white/95 border border-slate-900/5 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur-md rounded-3xl p-5 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-none text-center">
              <span className="inline-flex items-center rounded-full border border-[#5AC361]/20 bg-[#5AC361]/10 px-3 py-1 text-xs font-bold text-[#166534]">
                Overview
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl font-['Outfit',system-ui,sans-serif]">
                What an RVSF License Covers
              </h2>
              <p className="mt-4 text-[#475569] leading- relaxed sm:leading-8">
                An RVSF is a regulated facility that receives end-of-life vehicles, verifies documents, de-pollutes the
                vehicle, dismantles it, segregates materials, and issues the relevant scrapping records through the approved
                system. The framework also expects access control, traceability, and compliance with health, safety, and
                environmental requirements.
              </p>
            </div>
          </section>

          {/* APPLICATION SECTION */}
          <section id="application" className="bg-white/95 border border-slate-900/5 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur-md rounded-3xl p-5 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-none text-center">
              <span className="inline-flex items-center rounded-full border border-[#5AC361]/20 bg-[#5AC361]/10 px-3 py-1 text-xs font-bold text-[#166534]">
                Application Process
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl font-['Outfit',system-ui,sans-serif]">
                Procedural Guidelines for RVSF License Application
              </h2>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white bg-gradient-to-br from-[#16a34a] to-[#0f6b42] shadow-[0_10px_25px_rgba(22,163,74,0.22)] flex-shrink-0">
                    1
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">Prepare the project and entity profile</h3>
                </div>
                <p className="mt-3 leading-7 text-slate-600">
                  Start with the legal entity details, ownership or lease proof for the site, and a basic project plan.
                  The facility should be designed around vehicle intake, de-pollution, dismantling, segregation, storage,
                  and outbound movement to authorised recyclers where needed.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white bg-gradient-to-br from-[#16a34a] to-[#0f6b42] shadow-[0_10px_25px_rgba(22,163,74,0.22)] flex-shrink-0">
                    2
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">Compile the application pack</h3>
                </div>
                <p className="mt-3 leading-7 text-slate-600">
                  Keep the incorporation documents, PAN/GST details, authorised signatory proofs, site papers, layout map,
                  machinery list, and environmental support documents ready before submission.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white bg-gradient-to-br from-[#16a34a] to-[#0f6b42] shadow-[0_10px_25px_rgba(22,163,74,0.22)] flex-shrink-0">
                    3
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">Submit through the portal</h3>
                </div>
                <p className="mt-3 leading-7 text-slate-600">
                  The RVSF system is designed for a single-window style submission with documents and fees. After filing,
                  the authority may seek clarifications or schedule inspection before approval.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white bg-gradient-to-br from-[#16a34a] to-[#0f6b42] shadow-[0_10px_25px_rgba(22,163,74,0.22)] flex-shrink-0">
                    4
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">Prepare for scrutiny and inspection</h3>
                </div>
                <p className="mt-3 leading-7 text-slate-600">
                  Keep the plant, paperwork, fire-safety arrangements, waste-handling arrangements, and staff readiness in
                  order. The facility may be reviewed for technical and compliance readiness before registration is issued.
                </p>
              </div>
            </div>
          </section>

          {/* RENEWAL SECTION */}
          <section id="renewal" className="bg-white/95 border border-slate-900/5 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur-md rounded-3xl p-5 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-none text-center">
              <span className="inline-flex items-center rounded-full border border-[#5AC361]/20 bg-[#5AC361]/10 px-3 py-1 text-xs font-bold text-[#166534]">
                Renewal
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl font-['Outfit',system-ui,sans-serif]">
                Procedural Guidelines for RVSF License Renewal
              </h2>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-center text-lg font-semibold text-slate-900">Validity and timing</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  The draft RVSF framework provides an initial registration period of 10 years, with renewal for 10 years
                  at a time. Renewal should be started before expiry so that the facility does not face an operational gap.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-center text-lg font-semibold text-slate-900">What to keep ready for renewal</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Keep updated site records, compliance certificates, inspection logs, waste-handling records, staff
                  training proof, maintenance records, and any state-specific renewal fee or security deposit documents.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-center text-lg font-semibold text-slate-900">Form and fee pathway</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  The notified form structure allows renewal to be filed as a specific renewal application. State or Union
                  Territory rules may also prescribe the applicable fee and security deposit.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-center text-lg font-semibold text-slate-900">Operational continuity</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  A renewal-ready RVSF should maintain traceability for incoming vehicles, issued certificates, cut-piece
                  retention, and record retention so that audits and re-verification are straightforward.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTATION SECTION */}
          <section id="documentation" className="bg-white/95 border border-slate-900/5 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur-md rounded-3xl p-5 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-none text-center">
              <span className="inline-flex items-center rounded-full border border-[#5AC361]/20 bg-[#5AC361]/10 px-3 py-1 text-xs font-bold text-[#166534]">
                Documentation
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl font-['Outfit',system-ui,sans-serif]">
                RVSF Documentation Checklist
              </h2>
              <p className="mt-4 text-[#475569] leading-relaxed sm:leading-8">
                The documentation below is organized to match the practical filing sequence used for RVSF setup and ongoing
                compliance.
              </p>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Entity and signatory documents</h3>
                <ul className="mt-3 space-y-2 text-slate-600 leading-7 list-none p-0">
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    GST certificate of the firm
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    PAN of the firm
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Authorised signatory Aadhaar and PAN
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Board/authorisation resolution, where applicable
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Site and infrastructure documents</h3>
                <ul className="mt-3 space-y-2 text-slate-600 leading-7 list-none p-0">
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Business premises land papers or lease proof
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Electricity bill copy
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Layout map of the business premises
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    GPS location of the site
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Machinery details and capacity list
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Compliance support documents</h3>
                <ul className="mt-3 space-y-2 text-slate-600 leading-7 list-none p-0">
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Chartered Accountant statement
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    TSDF agreement
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Recycler agreements
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Air pollutants measuring device details
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Project and environmental support files
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* COMPLIANCE SECTION */}
          <section id="compliance" className="bg-white/95 border border-slate-900/5 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur-md rounded-3xl p-5 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-none text-center">
              <span className="inline-flex items-center rounded-full border border-[#5AC361]/20 bg-[#5AC361]/10 px-3 py-1 text-xs font-bold text-[#166534]">
                Compliance
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl font-['Outfit',system-ui,sans-serif]">
                Post-Approval Compliance and Operating Records
              </h2>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-center text-lg font-semibold text-slate-900">Core compliance items</h3>
                <ul className="mt-3 space-y-2 text-slate-600 leading-7 list-none p-0">
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Detailed Project Report (DPR)
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Environment Management Plan
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Emergency Response Plan
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Consent to Establish and Consent to Operate
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Hazardous Waste Management Authorization
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Environment, Health and Safety compliance records
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    MORTH registration and operational status
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    EPR compliance for RVSF where applicable
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-center text-lg font-semibold text-slate-900">Record-keeping and traceability</h3>
                <ul className="mt-3 space-y-2 text-slate-600 leading-7 list-none p-0">
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Verification of original vehicle documents
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Certificate of Deposit and scrapping certificate trail
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Safe custody of cut chassis piece for the prescribed period
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Copies of all documents for audit and examination
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Cybersecurity access control for portal/database use
                  </li>
                  <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#16a34a] before:text-xl before:leading-none">
                    Authorised recycler transfer records for materials not processed in-house
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section id="faq" className="bg-white/95 border border-slate-900/5 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur-md rounded-3xl p-5 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-none text-center">
              <span className="inline-flex items-center rounded-full border border-[#5AC361]/20 bg-[#5AC361]/10 px-3 py-1 text-xs font-bold text-[#166534]">
                FAQ
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl font-['Outfit',system-ui,sans-serif]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-5 space-y-3.5">
              <details className="border border-slate-900/10 bg-white/95 rounded-2xl p-4 shadow-[0_10px_25px_rgba(15,23,42,0.05)] cursor-pointer" open>
                <summary className="font-bold text-slate-900 list-none outline-none [&::-webkit-details-marker]:hidden">
                  What is the first step in the RVSF application process?
                </summary>
                <p className="text-[#475569] leading-7 mt-3">
                  Start with the legal entity details, site readiness, and the complete document pack. A clean application
                  file reduces objections and improves the chance of a smooth inspection cycle.
                </p>
              </details>

              <details className="border border-slate-900/10 bg-white/95 rounded-2xl p-4 shadow-[0_10px_25px_rgba(15,23,42,0.05)] cursor-pointer">
                <summary className="font-bold text-slate-900 list-none outline-none [&::-webkit-details-marker]:hidden">
                  How long is an RVSF registration valid?
                </summary>
                <p className="text-[#475569] leading-7 mt-3">
                  The draft framework states that registration is valid for an initial 10-year period and can be renewed
                  for 10 years at a time.
                </p>
              </details>

              <details className="border border-slate-900/10 bg-white/95 rounded-2xl p-4 shadow-[0_10px_25px_rgba(15,23,42,0.05)] cursor-pointer">
                <summary className="font-bold text-slate-900 list-none outline-none [&::-webkit-details-marker]:hidden">
                  What documents are most important for renewal?
                </summary>
                <p className="text-[#475569] leading-7 mt-3">
                  Updated compliance certificates, inspection and maintenance records, operational logs, fee or security
                  deposit proofs, and evidence that the facility has stayed aligned with environmental and safety norms.
                </p>
              </details>

              <details className="border border-slate-900/10 bg-white/95 rounded-2xl p-4 shadow-[0_10px_25px_rgba(15,23,42,0.05)] cursor-pointer">
                <summary className="font-bold text-slate-900 list-none outline-none [&::-webkit-details-marker]:hidden">
                  Why are recycler and TSDF agreements important?
                </summary>
                <p className="text-[#475569] leading-7 mt-3">
                  They demonstrate that hazardous or non-processable materials have a lawful onward route, which is a key
                  part of environmental compliance for a vehicle scrapping facility.
                </p>
              </details>

              <details className="border border-slate-900/10 bg-white/95 rounded-2xl p-4 shadow-[0_10px_25px_rgba(15,23,42,0.05)] cursor-pointer">
                <summary className="font-bold text-slate-900 list-none outline-none [&::-webkit-details-marker]:hidden">
                  Why is document retention important in an RVSF?
                </summary>
                <p className="text-[#475569] leading-7 mt-3">
                  RVSF operations are audit-sensitive. Keeping complete records helps with inspection, renewal, and proof of
                  lawful handling for each vehicle and material stream.
                </p>
              </details>
            </div>
          </section>

          {/* CTA SECTION */}
          <section id="cta" className="overflow-hidden rounded-3xl p-6 text-center text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] sm:p-8 bg-gradient-to-br from-[#0f6b42]/95 to-[#198754]/90">
            <h2 className="text-2xl font-bold sm:text-3xl font-['Outfit',system-ui,sans-serif]">Need Help With the RVSF Filing File?</h2>
            <p className="mx-auto mt-3 max-w-none leading-8 text-white/85">
              If you are preparing an RVSF application, renewal pack, or documentation checklist, build the file around
              site readiness, environmental compliance, traceability, and renewal evidence from the start.
            </p>
            <a
              href="https://eprnexuss.com/contacts"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[#0f6b42] transition hover:scale-[1.02] hover:shadow-lg"
            >
              Contact Us Today
            </a>
          </section>

        </div>
        </div>
         {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block w-[320px] shrink-0">
            <div className=" sticky top-28 px-2"><StickyContactForm /></div>
            
          </aside>

        </div>
      </div>
    </main>
  );
}