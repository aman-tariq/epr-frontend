import React from "react";
import StickyContactForm from '@/components/StickyContactForm';

const styles = {
  body: {
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(180deg,#eef4ff 0%, #f8fafc 35%, #f4f7fb 100%)",
    color: "#1f2937",
    lineHeight: "1.8",
  } as React.CSSProperties,

  hero: {
    background: "linear-gradient(135deg,#0f172a 0%, #1d4ed8 52%, #0ea5e9 100%)",
  } as React.CSSProperties,

  heroBefore: {
    position: "absolute" as const,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.09)",
    filter: "blur(0.5px)",
    width: "260px",
    height: "260px",
    top: "-80px",
    right: "-80px",
  } as React.CSSProperties,

  heroAfter: {
    position: "absolute" as const,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.09)",
    filter: "blur(0.5px)",
    width: "180px",
    height: "180px",
    bottom: "-60px",
    left: "-50px",
  } as React.CSSProperties,

  heroH1: {
    fontSize: "clamp(30px,3.8vw,52px)",
    lineHeight: "1.08",
    fontWeight: 800,
    marginBottom: "18px",
  } as React.CSSProperties,

  heroP: {
    fontSize: "clamp(15px,1.3vw,18px)",
    color: "rgba(255,255,255,0.94)",
    maxWidth: "850px",
    margin: "0 auto",
  } as React.CSSProperties,

  sectionH2: {
    fontSize: "clamp(22px,2vw,32px)",
    lineHeight: "1.15",
    color: "#0f172a",
    marginBottom: "14px",
  } as React.CSSProperties,

  highlight: {
    background: "linear-gradient(135deg,#ecfeff 0%, #e0f2fe 50%, #eff6ff 100%)",
    borderLeft: "6px solid #0ea5e9",
    borderRadius: "18px",
    padding: "clamp(14px, 3vw, 22px)",
    margin: "22px 0",
  } as React.CSSProperties,

  stepNumber: {
    background: "linear-gradient(135deg,#1d4ed8,#0ea5e9)",
    boxShadow: "0 8px 18px rgba(29,78,216,0.24)",
  } as React.CSSProperties,

  barFill: {
    background: "linear-gradient(90deg,#1d4ed8 0%, #0ea5e9 50%, #22c55e 100%)",
  } as React.CSSProperties,

  dbBox: {
    background: "linear-gradient(180deg,#ffffff 0%, #f8fbff 100%)",
  } as React.CSSProperties,

  caseStudy: {
    background: "linear-gradient(135deg,#fff7ed 0%, #fff1d6 100%)",
    border: "1px solid #fde68a",
  } as React.CSSProperties,

  checkCard: {
    background: "linear-gradient(180deg,#ffffff 0%, #f8fbff 100%)",
  } as React.CSSProperties,

  checkNum: {
    background: "linear-gradient(135deg,#0f172a,#1d4ed8)",
    flexShrink: 0,
  } as React.CSSProperties,

  closing: {
    background: "linear-gradient(135deg,#07111f 0%, #123b76 55%, #0f766e 100%)",
    boxShadow: "0 12px 35px rgba(15,23,42,0.08)",
  } as React.CSSProperties,

  card: {
    boxShadow: "0 12px 35px rgba(15,23,42,0.08)",
  } as React.CSSProperties,
};

const EWasteApprovalsBlog: React.FC = () => {
  return (
    <div className="w-full" style={{...styles.body, overflowX:"clip"}}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* ── OUTER PAGE WRAPPER ── */}
      <div className="w-full max-w-[1380px] mx-auto px-1 lg:px-8 py-[34px] pb-[60px]">

        {/* ── HERO: full width above two-col layout ── */}
        <section
          className="relative overflow-hidden text-white px-5 sm:px-[42px] py-12 sm:py-[78px] rounded-[30px] mb-[30px]"
          style={styles.hero}
        >
          <div className="absolute rounded-full pointer-events-none" style={styles.heroBefore} />
          <div className="absolute rounded-full pointer-events-none" style={styles.heroAfter} />
          <div className="relative z-10 w-full max-w-[900px] mx-auto text-center break-words">
            <div
              className="inline-block px-3 py-2 rounded-full text-[13px] font-semibold tracking-[0.4px] mb-[18px] max-w-full"
              style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.18)" }}
            >
              E-Waste Recycling Plant | Approvals, Compliance & Project Planning
            </div>
            <h1 style={styles.heroH1}>Approvals on E-Waste Recycling Plant</h1>
            <p style={styles.heroP}>
              "Before the shredder starts, let the approvals lead the way."
              <br /><br />
              A successful e-waste recycling plant is not built only with machines.
              It is built with the right permissions, a smart approval roadmap, and a compliance-first mindset.
            </p>
            <div className="mt-[24px] text-[16px] sm:text-[18px] font-semibold text-white opacity-95">
              A compliant plant is not just legal — it is faster to launch, easier to trust, and better to scale.
            </div>
          </div>
        </section>

        {/* ── TWO-COLUMN: main content left, sticky sidebar right ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── MAIN CONTENT ── */}
          <div className="flex-1 min-w-0 w-full flex flex-col gap-6">

            {/* Two intro cards */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-[24px]" style={{ gridTemplateColumns: undefined }}>
              <section className="bg-white rounded-[22px] p-4 sm:p-[32px] border border-[rgba(229,231,235,0.8)]" style={styles.card}>
                <h2 style={styles.sectionH2}>Why approvals matter before plant setup</h2>
                <p className="text-[18px] text-[#334155] mb-[14px]">
                  Many new plant owners focus first on machinery, capacity, and space. But in an e-waste recycling project,
                  approvals shape the entire business from the beginning.
                </p>
                <p className="text-[#5b6472] text-[17px] mb-[14px]">
                  The approval process decides how the site is used, where waste is stored, how material moves inside the plant,
                  what kind of pollution-control system is needed, and when commercial operations can legally begin.
                </p>
                <p className="text-[#5b6472] text-[17px] mb-[14px]">
                  In simple words, approvals are not a formality. They are the foundation of a safe, trusted, and future-ready recycling unit.
                </p>
                <div style={styles.highlight}>
                  <strong className="text-[#0f172a]">Client-friendly insight:</strong>{" "}
                  when approvals are planned early, the project avoids redesign, saves time,
                  and reduces the risk of delays during commissioning.
                </div>
                <div className="flex flex-wrap gap-[8px] mt-[16px]">
                  {["Compliance planning", "Safe operations", "Better investor confidence", "Faster commissioning"].map((pill) => (
                    <span key={pill} className="text-[13px] font-semibold px-[14px] py-[8px] rounded-full"
                      style={{ background: "#eef2ff", color: "#3730a3", border: "1px solid #c7d2fe" }}>
                      {pill}
                    </span>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-[22px] p-4 sm:p-[32px] border border-[rgba(229,231,235,0.8)]" style={styles.card}>
                <h2 style={styles.sectionH2}>What a client needs to understand first</h2>
                <p className="text-[#5b6472] text-[17px] mb-[14px]">
                  An e-waste recycling plant is not approved in one step. It usually moves through a sequence of permissions, checks, and submissions.
                </p>
                <p className="text-[#5b6472] text-[17px] mb-[14px]">
                  That is why a good project report should explain the approval journey in a clear way,
                  so the promoter, consultant, and investor can all see the same roadmap.
                </p>
                <div style={styles.highlight}>
                  <strong className="text-[#0f172a]">Main idea:</strong> if the plant design and the approval process do not match,
                  the project can face avoidable changes later.
                </div>
                <p className="text-[13px] text-[#64748b] mt-[10px]">
                  This is why approval planning should begin before civil work and before equipment purchase.
                </p>
              </section>
            </div>

            {/* Major Approvals Table */}
            <section className="bg-white rounded-[22px] p-4 sm:p-[32px] border border-[rgba(229,231,235,0.8)]" style={styles.card}>
              <h2 style={styles.sectionH2}>Major approvals required for an e-waste recycling plant</h2>
              <p className="text-[#5b6472] text-[17px] mb-[14px]">
                The exact permissions may vary by state and site conditions, but most e-waste projects need the following approvals.
              </p>
              <div className="overflow-x-auto rounded-[18px] border border-[#e5e7eb] mt-[18px]">
                <table className="w-full border-collapse bg-white" style={{ minWidth: "520px" }}>
                  <thead>
                    <tr>
                      {["Approval", "Why it is needed", "What it protects"].map((h) => (
                        <th key={h} className="text-left text-[14px]"
                          style={{ background: "#0f172a", color: "#fff", padding: "14px 16px" }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["E-waste authorization / registration", "Legal right to collect, store, dismantle, or process e-waste", "Core operation approval"],
                      ["Consent to Establish", "Required before construction or infrastructure setup", "Plant design and land use"],
                      ["Consent to Operate", "Needed before starting production or commercial activity", "Operational legality"],
                      ["Factory license", "Industrial compliance for the working facility", "Labour and factory safety"],
                      ["Fire NOC", "Confirms fire safety readiness for storage and processing areas", "People, plant, and inventory safety"],
                      ["Building / land-use clearance", "Checks whether the site is valid for industrial use", "Land legality and zoning fit"],
                    ].map(([approval, why, what], i) => (
                      <tr key={i} className="hover:bg-[#f8fbff]">
                        <td className="text-[14px] text-[#334155] align-top" style={{ padding: "13px 16px", borderTop: "1px solid #e5e7eb" }}>{approval}</td>
                        <td className="text-[14px] text-[#334155] align-top" style={{ padding: "13px 16px", borderTop: "1px solid #e5e7eb" }}>{why}</td>
                        <td className="text-[14px] text-[#334155] align-top" style={{ padding: "13px 16px", borderTop: "1px solid #e5e7eb" }}>{what}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Checklist Grid */}
            <section className="bg-white rounded-[22px] p-4 sm:p-[32px] border border-[rgba(229,231,235,0.8)]" style={styles.card}>
              <h2 style={styles.sectionH2}>Licences & Approvals — The Complete Checklist</h2>
              <p className="text-[#5b6472] text-[17px] mb-[14px]">
                Below is a simple breakdown of the most important licences and approvals for an e-waste recycling plant.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mt-[18px]">
                {[
                  { num: 1, title: "Company registration", sub: "Before anything else, the business should exist as a legal entity such as a Pvt. Ltd., LLP, or other registered structure.", body: "This makes the plant official, allows contracts in the company name, and gives the project a proper legal identity." },
                  { num: 2, title: "GST Registration + Pollution Cess Exemption", sub: "GST registration is needed for invoicing and business operations. Any applicable pollution-cess or exemption-related filing should be checked with the right authority and consultant.", body: "This keeps the business ready for billing, taxation, and clean financial compliance from the start." },
                  { num: 3, title: "Consent to Establish (CTE)", sub: "This is the approval needed before setting up the plant, civil work, or infrastructure.", body: "It confirms that the proposed site and layout are acceptable from the pollution-control point of view." },
                  { num: 4, title: "Consent to Operate (CTO)", sub: "This approval is needed once the plant is ready and before the unit starts commercial operation.", body: "It is the final green signal that the facility can run under the approved environmental conditions." },
                  { num: 5, title: "Hazardous Waste Authorisation", sub: "If the plant handles hazardous residues, waste fractions, or related material under the rules, this authorisation becomes important.", body: "It ensures the waste is stored, moved, and managed in a legally safe way." },
                  { num: 6, title: "Fire NOC", sub: "This confirms that the building, storage area, exits, and safety systems are ready for fire risk protection.", body: "For recycling plants with stored materials, this is one of the most important safety approvals." },
                  { num: 7, title: "Factory Licence", sub: "Every industrial plant needs to follow the local factory law and labour-related compliance requirements.", body: "This supports employee safety, workplace legality, and proper operating conditions." },
                  { num: 8, title: "EPR Registration on CPCB Portal", sub: "For e-waste-related business activities, the CPCB portal is used for EPR-linked registration and compliance processing.", body: "This is a major step for keeping the project aligned with current e-waste responsibility requirements." },
                ].map(({ num, title, sub, body }) => (
                  <div key={num} className="border border-[#e5e7eb] rounded-[18px] p-[20px]" style={styles.checkCard}>
                    <div className="flex items-start gap-[12px] mb-[10px]">
                      <div className="flex-shrink-0 w-[38px] h-[38px] rounded-full flex items-center justify-center text-white font-bold" style={styles.checkNum}>
                        {num}
                      </div>
                      <div>
                        <h4 className="text-[16px] text-[#0f172a] m-0">{title}</h4>
                        <p className="text-[13px] text-[#5b6472] m-0 mt-1">{sub}</p>
                      </div>
                    </div>
                    <p className="text-[13px] text-[#5b6472] m-0">{body}</p>
                  </div>
                ))}
              </div>
              <div style={styles.highlight}>
                <strong className="text-[#0f172a]">Easy client explanation:</strong> these approvals work like a project shield. They protect the plant, the business, and the investment before operations begin.
              </div>
            </section>

            {/* Steps */}
            <section className="bg-white rounded-[22px] p-4 sm:p-[32px] border border-[rgba(229,231,235,0.8)]" style={styles.card}>
              <h2 style={styles.sectionH2}>The approval roadmap in simple steps</h2>
              <p className="text-[#5b6472] text-[17px] mb-[14px]">
                A client understands compliance better when it is shown as a sequence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] mt-[18px]">
                {[
                  { n: 1, title: "Site finalization", body: "Check whether the land, building, and location are suitable for an industrial recycling unit." },
                  { n: 2, title: "Document preparation", body: "Prepare the project report, layout plan, pollution-control plan, and supporting records." },
                  { n: 3, title: "Authority filing", body: "Submit the approval applications with proper documents and technical details." },
                  { n: 4, title: "Inspection and launch", body: "Complete inspection, resolve queries, and move toward trial production and operation." },
                ].map(({ n, title, body }) => (
                  <div key={n} className="border border-[#e5e7eb] rounded-[18px] p-[18px] sm:min-h-[150px]"
                    style={{ background: "linear-gradient(180deg,#f8fbff 0%, #ffffff 100%)" }}>
                    <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full text-white font-bold mb-[12px]" style={styles.stepNumber}>
                      {n}
                    </div>
                    <h4 className="text-[15px] text-[#0f172a] mb-[8px]">{title}</h4>
                    <p className="text-[13px] text-[#5b6472] m-0">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bar Chart + Readiness */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-[24px]">
              <section className="bg-white rounded-[22px] p-4 sm:p-[28px] border border-[rgba(229,231,235,0.8)]" style={styles.card}>
                <h2 className="text-[20px] leading-[1.2] text-[#0f172a] mb-[8px]">Bar graph: approval effort</h2>
                <p className="text-[#5b6472] mb-[16px] text-[13px]">Which approvals usually demand the most attention.</p>
                <div className="flex flex-col gap-[14px]">
                  {[
                    { label: "SPCB authorization", pct: 95 },
                    { label: "Consent to Establish", pct: 90 },
                    { label: "Land & building clearance", pct: 82 },
                    { label: "Fire and safety approval", pct: 72 },
                    { label: "Local utility compliance", pct: 58 },
                  ].map(({ label, pct }) => (
                    <div key={label} className="flex items-center gap-[10px]">
                      <div className="text-[12px] font-semibold text-[#1f2937] w-[110px] sm:w-[140px] flex-shrink-0 truncate">{label}</div>
                      <div className="flex-1 h-[14px] bg-[#e5e7eb] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, ...styles.barFill }} />
                      </div>
                      <div className="text-[12px] font-bold text-[#0f172a] w-[32px] text-right flex-shrink-0">{pct}%</div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[#64748b] mt-[10px]">Higher bars = more planning effort needed.</p>
              </section>

              <section className="bg-white rounded-[22px] p-4 sm:p-[28px] border border-[rgba(229,231,235,0.8)]" style={styles.card}>
                <h2 className="text-[20px] leading-[1.2] text-[#0f172a] mb-[8px]">Project readiness score</h2>
                <p className="text-[#5b6472] mb-[16px] text-[13px]">Is the project truly ready to move ahead?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
                  {[
                    { title: "Site readiness", body: "Land use verified, access road checked, and industrial suitability reviewed." },
                    { title: "Document readiness", body: "Project report, drawings, layout, and technical details prepared in one file." },
                    { title: "Approval readiness", body: "Applications mapped according to authority sequence and compliance needs." },
                    { title: "Operations readiness", body: "Storage, safety, manpower, and utility planning aligned with plant launch." },
                  ].map(({ title, body }) => (
                    <div key={title} className="border border-[#e5e7eb] rounded-[14px] p-[12px]" style={styles.dbBox}>
                      <h4 className="text-[13px] mb-[6px] text-[#0f172a] font-semibold">{title}</h4>
                      <p className="text-[12px] text-[#5b6472] m-0">{body}</p>
                    </div>
                  ))}
                </div>
                <div style={{ ...styles.highlight, marginTop: "16px", padding: "14px" }}>
                  <strong className="text-[#0f172a] text-[13px]">Readiness message:</strong>{" "}
                  <span className="text-[13px]">when all four areas are aligned, the project feels less risky and more investable.</span>
                </div>
              </section>
            </div>

            {/* Additional Topics */}
            <section className="bg-white rounded-[22px] p-4 sm:p-[32px] border border-[rgba(229,231,235,0.8)]" style={styles.card}>
              <h2 style={styles.sectionH2}>Additional topics for clients</h2>
              <p className="text-[#5b6472] text-[17px] mb-[14px]">
                A strong blog should not stop at approvals alone. Clients also want to understand how the approval process connects with plant design, daily operations, and business growth.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
                <div>
                  <h3 className="text-[18px] leading-[1.2] text-[#0f172a] mt-[16px] mb-[10px]">1. Plant layout and approval connection</h3>
                  <p className="text-[#5b6472] text-[15px] mb-[12px]">The layout of the plant should match the approval requirements from the beginning. Storage areas, dismantling zones, processing areas, fire exits, and waste-handling points must all be planned carefully.</p>
                  <h3 className="text-[18px] leading-[1.2] text-[#0f172a] mt-[16px] mb-[10px]">2. Document checklist</h3>
                  <p className="text-[#5b6472] text-[15px] mb-[12px]">A clean document set makes the process much easier. Most delays happen because a file is incomplete, inconsistent, or missing technical support documents.</p>
                </div>
                <div>
                  <h3 className="text-[18px] leading-[1.2] text-[#0f172a] mt-[16px] mb-[10px]">3. Risk if approvals are delayed</h3>
                  <p className="text-[#5b6472] text-[15px] mb-[12px]">Delayed approvals can affect construction, machinery installation, trial runs, and commercial launch. In many cases, the cost of delay becomes more expensive than the approval itself.</p>
                  <h3 className="text-[18px] leading-[1.2] text-[#0f172a] mt-[16px] mb-[10px]">4. Why compliance builds trust</h3>
                  <p className="text-[#5b6472] text-[15px] mb-[12px]">Buyers, vendors, regulators, and investors all trust a plant more when its compliance structure is clear. A compliant plant is easier to scale and easier to defend in the long term.</p>
                </div>
              </div>
              <div style={styles.highlight}>
                <strong className="text-[#0f172a]">Easy explanation for clients:</strong>{" "}
                approvals tell the market that the plant is serious, safe, and ready for long-term business.
              </div>
            </section>

            {/* Tracking Database Table */}
            <section className="bg-white rounded-[22px] p-4 sm:p-[32px] border border-[rgba(229,231,235,0.8)]" style={styles.card}>
              <h2 style={styles.sectionH2}>Approval tracking database</h2>
              <p className="text-[#5b6472] text-[17px] mb-[14px]">
                This section works like a project dashboard. It helps the client understand what is done, what is pending, and what risk may appear if a stage is delayed.
              </p>
              <div className="overflow-x-auto rounded-[18px] border border-[#e5e7eb] mt-[18px]">
                <table className="w-full border-collapse bg-white" style={{ minWidth: "480px" }}>
                  <thead>
                    <tr>
                      {["Stage", "Department", "Status", "Risk if delayed"].map((h) => (
                        <th key={h} className="text-left text-[13px]"
                          style={{ background: "#0f172a", color: "#fff", padding: "12px 14px" }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Land selection", "Project team", "Completed", "Wrong industrial zoning"],
                      ["SPCB consultation", "Compliance team", "In progress", "Layout mismatch"],
                      ["Consent to Establish", "Authority filing", "Pending", "Construction delay"],
                      ["Fire safety review", "Safety consultant", "Pending", "Storage restrictions"],
                      ["Operational authorization", "Pollution control board", "Upcoming", "Cannot begin production"],
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-[#f8fbff]">
                        {row.map((cell, j) => (
                          <td key={j} className="text-[13px] text-[#334155] align-top"
                            style={{ padding: "12px 14px", borderTop: "1px solid #e5e7eb" }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Case Study */}
            <section className="rounded-[22px] p-4 sm:p-[32px]" style={{ ...styles.card, ...styles.caseStudy }}>
              <h2 style={{ ...styles.sectionH2, color: "#7c2d12" }}>
                Case study: how proper approvals saved a recycling project
              </h2>
              <p className="text-[#5b6472] text-[17px] mb-[14px]">
                A mid-sized e-waste recycling company wanted to begin operations quickly near a metro city. The promoter had already shortlisted machinery and was ready to move fast.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px] mt-[18px]">
                {[
                  { title: "The challenge", body: "The plant layout was not fully aligned with pollution-control expectations, and the safety spacing in the storage area needed improvement." },
                  { title: "The solution", body: "The layout was adjusted, the compliance file was reorganized, and approvals were mapped before final execution." },
                  { title: "The result", body: "The client avoided repeated redesign, reduced delay risk, and moved toward commissioning with much more clarity." },
                ].map(({ title, body }) => (
                  <div key={title} className="bg-white rounded-[18px] p-[18px]" style={{ border: "1px solid #fbd38d" }}>
                    <h4 className="text-[15px] mb-[8px]" style={{ color: "#9a3412" }}>{title}</h4>
                    <p className="m-0 text-[13px]" style={{ color: "#6b4b21" }}>{body}</p>
                  </div>
                ))}
              </div>
              <div style={{ ...styles.highlight, marginTop: "18px" }}>
                <strong className="text-[#0f172a]">Lesson from the case:</strong>{" "}
                when approvals are planned early, the project becomes easier to execute and safer to manage.
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-[22px] p-4 sm:p-[32px] border border-[rgba(229,231,235,0.8)]" style={styles.card}>
              <h2 style={styles.sectionH2}>Frequently asked questions</h2>
              <div className="grid gap-[12px] mt-[16px]">
                {[
                  { q: "Why should approvals come before machinery purchase?", a: "Because the plant design may need to change based on authority expectations. Early approvals reduce the risk of buying the wrong setup." },
                  { q: "Do all states follow the same process?", a: "The overall structure is similar, but the exact application path, document list, and timelines can change from state to state." },
                  { q: "What makes a recycling project easier to approve?", a: "A clear site plan, strong compliance documentation, proper safety design, and a clean project report make the process smoother." },
                ].map(({ q, a }) => (
                  <div key={q} className="border border-[#e5e7eb] rounded-[18px] p-[18px] bg-white">
                    <h4 className="text-[16px] mb-[6px] text-[#0f172a]">{q}</h4>
                    <p className="m-0 text-[14px] text-[#5b6472]">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Closing */}
            <section className="text-center text-white px-4 sm:px-[30px] py-10 sm:py-[58px] rounded-[30px]" style={styles.closing}>
              <h2 className="text-white mb-[12px] font-bold" style={{ fontSize: "clamp(24px,2.6vw,36px)" }}>
                Final Thoughts
              </h2>
              <p className="text-[rgba(255,255,255,0.94)] max-w-[900px] mx-auto mb-[14px] text-[17px]">
                An e-waste recycling plant becomes a strong business only when compliance, design, and operations work together.
                Approvals are not paperwork to be finished at the end. They are the backbone of a stable, scalable, and trusted recycling unit.
              </p>
              <p className="text-[rgba(255,255,255,0.94)] max-w-[900px] mx-auto mb-[14px] text-[17px]">
                When a client understands the approval journey clearly, the project feels less confusing and much more achievable.
              </p>
              <div className="text-[27px] font-bold mt-[20px] text-white">
                "Strong approvals build stronger recycling businesses."
              </div>
            </section>

          </div>{/* end main content */}

          {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0 self-start" style={{ position: "sticky", top: "7rem" }}>
            <StickyContactForm />
          </aside>

        </div>{/* end flex row */}
      </div>
    </div>
  );
};

export default EWasteApprovalsBlog;
