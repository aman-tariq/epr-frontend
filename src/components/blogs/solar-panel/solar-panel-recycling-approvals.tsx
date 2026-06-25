// C:\Users\lenovo\Desktop\epr-nexuss\epr-nexus\frontend\src\components\blogs\solar-panel\solar-panel-recycling-approvals.tsx
import React from 'react';

const SolarPanelRecyclingApprovals: React.FC = () => {

  return (
    <div className="blog-container font-['Poppins'] bg-gradient-to-b from-[#fff7ed] via-[#f8fafc] to-[#f4f7fb] text-[#1f2937] pb-12">

      {/* HERO */}
      <section className="hero relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#0f766e] to-[#f59e0b] text-white rounded-[30px] px-8 md:px-12 py-20 mb-8 shadow-2xl">
        <div className="absolute w-[260px] h-[260px] bg-white/10 rounded-full -top-20 -right-20" />
        <div className="absolute w-[180px] h-[180px] bg-white/10 rounded-full -bottom-16 -left-12" />

        <div className="hero-inner relative z-10 text-center max-w-4xl mx-auto">
          <div className="eyebrow inline-block px-5 py-2.5 rounded-full border border-white/20 bg-white/10 text-sm font-semibold tracking-widest mb-6">
            Solar Panel Recycling | Approvals, Licensing & Project Planning
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Approvals on Solar Panel Recycling Plant
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/95 max-w-3xl mx-auto">
            “A clean-energy future deserves a clean end-of-life plan.”<br /><br />
            Solar panels power the future, but every panel eventually reaches retirement. The real success story begins when recycling is approved, compliant, and ready to scale without regulatory roadblocks.
          </p>
          <div className="hero-quote mt-8 text-xl font-semibold">
            The right approvals do not slow a solar recycling business — they give it credibility, speed, and long-term value.
          </div>
        </div>
      </section>

      {/* Two Column Grid */}
      <div className="grid lg:grid-cols-1 gap-6 mb-8">
        <section className="card bg-white rounded-3xl p-8 shadow-xl border border-[#e5e7eb]">
          <h2 className="text-3xl font-bold mb-5 text-[#0f172a]">Why approvals matter before plant setup</h2>
          <p className="lead text-lg text-[#334155] mb-4">
            A solar panel recycling project is a strong business opportunity, but only when it is planned with the right environmental and industrial approvals from the start.
          </p>
          <p className="text-[#5b6472] mb-4">
            These approvals confirm that the plant can handle end-of-life modules, manage recovered materials safely, and operate within the legal framework expected by regulators and clients.
          </p>
          <p className="text-[#5b6472]">
            When approvals are handled early, the project becomes easier to finance, easier to operate, and easier to trust.
          </p>
          <div className="highlight mt-6">
            <strong>Client insight:</strong> approvals are not a delay in the project journey — they are the reason the project can move ahead safely and confidently.
          </div>
          <div className="pill-row flex flex-wrap gap-2 mt-6">
            <span className="pill px-4 py-2 text-sm font-semibold rounded-full bg-[#fef3c7] border border-[#fcd34d] text-[#92400e]">Environmental compliance</span>
            <span className="pill px-4 py-2 text-sm font-semibold rounded-full bg-[#fef3c7] border border-[#fcd34d] text-[#92400e]">Safe material recovery</span>
            <span className="pill px-4 py-2 text-sm font-semibold rounded-full bg-[#fef3c7] border border-[#fcd34d] text-[#92400e]">Investor confidence</span>
            <span className="pill px-4 py-2 text-sm font-semibold rounded-full bg-[#fef3c7] border border-[#fcd34d] text-[#92400e]">Faster launch readiness</span>
          </div>
        </section>

        <section className="card bg-white rounded-3xl p-8 shadow-xl border border-[#e5e7eb]">
          <h2 className="text-3xl font-bold mb-5 text-[#0f172a]">What a client should know first</h2>
          <p className="text-[#5b6472] mb-4">
            Solar panel recycling is different from ordinary scrap handling. Panels contain glass, aluminum, silicon, polymer layers, and sometimes trace materials that require careful processing.
          </p>
          <p className="text-[#5b6472] mb-4">
            Because of that, the approval route should match the plant design, storage system, safety plan, and waste-handling model.
          </p>
          <div className="highlight">
            <strong>Main idea:</strong> a recycling facility that is approved properly is easier to scale, easier to audit, and easier to partner with.
          </div>
          <p className="note mt-4">
            Early approval planning helps avoid design changes, compliance gaps, and unexpected delays later in the project.
          </p>
        </section>
      </div>

      {/* Major Approvals Table */}
      <section className="card bg-white rounded-3xl p-8 shadow-xl border border-[#e5e7eb] mb-8">
        <h2 className="text-3xl font-bold mb-5 text-[#0f172a]">Major approvals required for a solar panel recycling plant</h2>
        <p className="text-[#5b6472] mb-6">
          The exact approvals may differ by location and capacity, but most solar recycling projects need a clear set of permissions.
        </p>

        <div className="table-wrap overflow-x-auto rounded-2xl border border-[#e5e7eb]">
          <table className="w-full table-auto min-w-full">
            <thead>
              <tr className="bg-[#0f172a] text-white">
                <th className="text-left px-6 py-4">Approval</th>
                <th className="text-left px-6 py-4">Why it is needed</th>
                <th className="text-left px-6 py-4">What it protects</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Pollution control approval / consent", "Confirms that the plant can operate with environmental safeguards", "Air, water, and waste compliance"],
                ["Consent to Establish", "Needed before construction or infrastructure setup begins", "Site planning and plant design"],
                ["Consent to Operate", "Required before starting commercial recycling activity", "Operational legality"],
                ["E-waste / hazardous waste related authorization", "Required where end-of-life modules or residues are managed", "Material handling and residue safety"],
                ["Factory licence", "Provides industrial approval for the working facility", "Worker safety and legal compliance"],
                ["Fire NOC", "Ensures readiness for storage, processing, and emergency response", "People, plant, and inventory safety"],
                ["Land-use / building approval", "Checks whether the site is suitable for industrial recycling use", "Location legality and zoning fit"],
              ].map(([approval, why, protect], i) => (
                <tr key={i} className="border-t border-[#e5e7eb] hover:bg-[#fffaf0]">
                  <td className="px-6 py-5 font-medium break-words whitespace-normal">{approval}</td>
                  <td className="px-6 py-5 text-[#5b6472] break-words whitespace-normal">{why}</td>
                  <td className="px-6 py-5 text-[#5b6472] break-words whitespace-normal">{protect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Complete Checklist */}
      <section className="card bg-white rounded-3xl p-8 shadow-xl border border-[#e5e7eb] mb-8">
        <h2 className="text-3xl font-bold mb-5 text-[#0f172a]">Licences & approvals — the complete checklist</h2>
        <p className="text-[#5b6472] mb-6">Below is a practical checklist for a solar panel recycling plant.</p>

        <div className="checklist-grid grid md:grid-cols-2 gap-5">
          {[
            { num: "1", title: "Company registration", desc: "Set up the business as a legal entity before applying for plant approvals." },
            { num: "2", title: "GST registration", desc: "Needed for commercial invoicing and business operations." },
            { num: "3", title: "Consent to Establish (CTE)", desc: "This is the approval needed before civil work begins." },
            { num: "4", title: "Consent to Operate (CTO)", desc: "This is the final permission before the plant starts commercial operation." },
            { num: "5", title: "Waste handling authorization", desc: "Important when handling residues and process waste." },
            { num: "6", title: "Fire NOC", desc: "Confirms that storage, exits, and emergency systems are ready." },
            { num: "7", title: "Factory licence", desc: "Supports labour-law compliance and industrial operating conditions." },
            { num: "8", title: "EPR-linked compliance preparation", desc: "Useful for businesses involved in producer responsibility." },
          ].map((item, i) => (
            <div key={i} className="check-card border border-[#e5e7eb] rounded-2xl p-6 bg-gradient-to-b from-white to-[#fffbeb]">
              <div className="check-top">
                <div className="check-num w-10 h-10 rounded-full bg-gradient-to-br from-[#0f172a] to-[#f59e0b] text-white font-bold flex items-center justify-center">
                  {item.num}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                </div>
              </div>
              <p className="text-[#5b6472] text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="highlight mt-8">
          <strong>Easy client explanation:</strong> these approvals work like a protection layer. They keep the project legally safe, technically stable, and easier to scale.
        </div>
      </section>

      {/* Roadmap Steps */}
      <section className="card bg-white rounded-3xl p-8 shadow-xl border border-[#e5e7eb] mb-8">
        <h2 className="text-3xl font-bold mb-5 text-[#0f172a]">The approval roadmap in simple steps</h2>
        <p className="text-[#5b6472] mb-6">Clients understand compliance better when it is shown as a sequence.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { num: "1", title: "Site finalization", desc: "Confirm whether the land and location are suitable for an industrial recycling facility." },
            { num: "2", title: "Document preparation", desc: "Prepare the project report, plant layout, storage plan, and environmental details." },
            { num: "3", title: "Authority filing", desc: "Submit the applications in the correct sequence with all supporting documents." },
            { num: "4", title: "Inspection and launch", desc: "Resolve queries, complete inspections, and move toward trial production." },
          ].map((step, i) => (
            <div key={i} className="step border border-[#e5e7eb] rounded-2xl p-6 bg-gradient-to-b from-[#fffdf7] to-white">
              <div className="step-number w-10 h-10 rounded-full bg-gradient-to-br from-[#0f766e] to-[#f59e0b] text-white font-bold flex items-center justify-center mb-4">
                {step.num}
              </div>
              <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
              <p className="text-sm text-[#5b6472]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bar Graph + Readiness */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <section className="card bg-white rounded-3xl p-8 shadow-xl border border-[#e5e7eb]">
          <h2 className="text-2xl font-bold mb-4">Bar graph: where the approval effort is highest</h2>
          <p className="text-[#5b6472] mb-6">This chart helps clients understand which permissions usually need the most planning.</p>
          <div className="bars space-y-6">
            {[
              { label: "Pollution control consent", value: "96%" },
              { label: "Consent to Establish", value: "91%" },
              { label: "Land and building clearance", value: "83%" },
              { label: "Fire and safety approval", value: "74%" },
              { label: "EPR / compliance mapping", value: "68%" },
            ].map((bar, i) => (
              <div key={i} className="bar-item grid grid-cols-1 md:grid-cols-[220px_1fr_64px] gap-3 items-center">
                <div className="bar-label">{bar.label}</div>
                <div className="bar-track h-4 bg-[#e5e7eb] rounded-full overflow-hidden">
                  <div className="bar-fill h-full rounded-full bg-gradient-to-r from-[#0f766e] via-[#22c55e] to-[#f59e0b]" style={{ width: bar.value }}></div>
                </div>
                <div className="bar-value font-bold">{bar.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="card bg-white rounded-3xl p-8 shadow-xl border border-[#e5e7eb]">
          <h2 className="text-2xl font-bold mb-4">Project readiness score</h2>
          <p className="text-[#5b6472] mb-6">A simple database-style view helps clients see whether the project is ready.</p>
          <div className="mini-database grid md:grid-cols-2 gap-4">
            {[
              { title: "Site readiness", desc: "Land use verified, access checked, and industrial suitability reviewed." },
              { title: "Document readiness", desc: "Project report, drawings, safety notes, and compliance records prepared." },
              { title: "Approval readiness", desc: "Applications mapped according to authority sequence." },
              { title: "Operations readiness", desc: "Storage, manpower, utilities, and safety planning aligned." },
            ].map((item, i) => (
              <div key={i} className="db-box border border-[#e5e7eb] rounded-2xl p-6">
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-[#5b6472]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Additional Topics */}
      <section className="card bg-white rounded-3xl p-8 shadow-xl border border-[#e5e7eb] mb-8">
        <h2 className="text-3xl font-bold mb-5 text-[#0f172a]">Additional topics that help the client understand the project better</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-xl mb-3">1. Plant layout and approval connection</h3>
            <p className="text-[#5b6472]">The layout should already reflect the approval expectations.</p>
            <h3 className="font-semibold text-xl mt-8 mb-3">2. Document checklist</h3>
            <p className="text-[#5b6472]">A complete document set makes approvals smoother.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-3">3. Risk if approvals are delayed</h3>
            <p className="text-[#5b6472]">Delays can affect machinery installation and commercial launch.</p>
            <h3 className="font-semibold text-xl mt-8 mb-3">4. Why compliance builds trust</h3>
            <p className="text-[#5b6472]">Buyers, partners, and investors trust a plant more when compliance is clear.</p>
          </div>
        </div>
        <div className="highlight mt-8">
          <strong>Easy explanation for clients:</strong> approvals tell the market that the plant is serious, safe, and ready for long-term business.
        </div>
      </section>

      {/* Case Study */}
      <section className="card case-study bg-gradient-to-br from-[#fff7ed] to-[#ffedd5] border border-[#fdba74] rounded-3xl p-8 shadow-xl mb-8">
        <h2 className="text-3xl font-bold mb-5 text-[#9a3412]">Case study: how proper approvals strengthened a solar recycling project</h2>
        <p className="text-[#6b4b21] mb-6">
          A mid-sized solar recycling company wanted to launch a new plant near a growing industrial corridor.
        </p>
        <div className="case-grid grid md:grid-cols-3 gap-5">
          {[
            { title: "The challenge", desc: "The proposed layout needed better safety spacing, and the environmental file required clearer waste-handling details." },
            { title: "The solution", desc: "The plant layout was redesigned, the compliance file was reorganized, and approvals were sequenced before execution." },
            { title: "The result", desc: "The client reduced delay risk, improved investor confidence, and moved toward commissioning with a stronger compliance profile." },
          ].map((item, i) => (
            <div key={i} className="case-item bg-white border border-[#fed7aa] rounded-2xl p-6">
              <h4 className="font-semibold mb-3">{item.title}</h4>
              <p className="text-sm text-[#6b4b21]">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="highlight mt-8">
          <strong>Lesson from the case:</strong> when approvals are planned early, the project becomes easier to execute and safer to manage.
        </div>
      </section>

      {/* FAQ */}
      <section className="card bg-white rounded-3xl p-8 shadow-xl border border-[#e5e7eb] mb-8">
        <h2 className="text-3xl font-bold mb-6 text-[#0f172a]">Frequently asked questions</h2>
        <div className="faq space-y-4">
          {[
            { q: "Why should approvals come before equipment purchase?", a: "Because the plant design may change after regulatory review." },
            { q: "Do solar recycling approvals differ by location?", a: "Yes. The overall structure is similar, but the exact sequence can vary by state or region." },
            { q: "What makes a solar recycling project easier to approve?", a: "A clear site plan, strong compliance documents, proper safety design, and a clean project report." },
          ].map((faq, i) => (
            <div key={i} className="faq-item border border-[#e5e7eb] rounded-2xl p-6">
              <h4 className="font-semibold mb-3">{faq.q}</h4>
              <p className="text-[#5b6472]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing text-white text-center py-16 rounded-[30px]">
        <h2 className="text-4xl font-bold mb-6">Final Thoughts</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed opacity-95">
          Solar panel recycling is no longer a future topic. It is becoming an important part of the clean-energy economy today.
        </p>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed opacity-95 mt-4">
          Approvals are not paperwork to be handled at the end — they are the backbone of a trusted and scalable recycling plant.
        </p>
        <div className="final-line mt-10 text-3xl font-bold">“Strong approvals create stronger solar recycling businesses.”</div>
      </section>

    </div>
  );
};

export default SolarPanelRecyclingApprovals;