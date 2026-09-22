import React from "react";
import { blogPosts } from "@/lib/blog"; // Adjust the path if your blog.ts is elsewhere
import { Link } from "react-router-dom"; // Assuming you use react-router
import StickyContactForm from "@/components/StickyContactForm";
export default function CBGPlantSetup(): React.JSX.Element {
  return (
    <>
      <style>{`
        :root {
          --ink: #07382a;
          --ink-2: #154c3d;
          --muted: #5e7990;
          --line: #dce5e1;
          --soft: #e8f1ed;
          --paper: #ffffff;
          --bg: #eef2ef;
          --accent: #dcece5;
          --accent-2: #e7f2ed;
          --white: #fff;
          --shadow: 0 12px 36px rgba(8, 42, 31, .045);
          --radius: 30px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: var(--bg);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
          line-height: 1.7;
        }
        a { color: inherit; }
        .page {
          max-width: 1780px;
          margin: 26px auto;
          padding: 0 22px;
        }
        .shell {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 313px;
          gap: 34px;
          align-items: start;
        }
        
        .shell > * {
         margin-top: 100px;
         align-self: start;
         }
        .main, .side {
          background: var(--paper);
          border: 1px solid #d9e2de;
          border-radius: 32px;
          box-shadow: var(--shadow);
        }
        .main { padding: 68px 74px 74px; }
        .side {
          padding: 60px 56px;
          position: sticky;
          top: 24px;
          background: #082f23;
          color: var(--white);
          min-height: 780px;
          overflow: hidden;
        }

        .eyebrow {
          display: inline-flex;
          padding: 11px 22px;
          border-radius: 999px;
          background: var(--soft);
          color: var(--ink);
          font-size: 14px;
          letter-spacing: .14em;
          font-weight: 800;
          text-transform: uppercase;
        }
        h1, h2, h3 { line-height: 1.06; margin: 0 0 18px; letter-spacing: -.03em; }
        h1 { font-size: clamp(52px, 5.35vw, 90px); max-width: 980px; margin-top: 38px; }
        h2 { font-size: clamp(32px, 3vw, 46px); }
        h3 { font-size: 23px; }
        p { font-size: 18px; color: var(--muted); margin: 0 0 20px; }
        .intro {
          margin-top: 30px;
          max-width: 1050px;
          font-size: 20px;
          line-height: 1.9;
        }
        .rule {
          height: 1px;
          background: var(--line);
          margin: 38px 0 26px;
        }

        .facts {
          // display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          margin: 34px 0 46px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .fact {
          padding: 20px 24px 20px 0;
          border-right: 1px solid var(--line);
        }
        .fact:nth-child(2) { padding-left: 24px; }
        .fact:last-child { border-right: 0; padding-left: 24px; }
        .fact strong { display: block; font-size: 30px; color: var(--ink); margin-bottom: 3px; }
        .fact span { font-size: 14px; color: var(--muted); line-height: 1.55; }

        .lead-grid {
          // display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 30px 0 50px;
        }
        .card {
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 28px;
          background: linear-gradient(180deg, #fff, #f8fbf9);
        }
        .card p { font-size: 16px; line-height: 1.6; }
        .num {
          width: 38px; height: 38px; border-radius: 50%;
          display: grid; place-items: center;
          background: var(--soft); font-weight: 800; margin-bottom: 18px;
        }

        .section { margin: 64px 0; }
        .section > p { max-width: 950px; }
        .section-tag {
          display: inline-block;
          margin-bottom: 12px;
          color: var(--ink-2);
          font-size: 13px;
          letter-spacing: .16em;
          text-transform: uppercase;
          font-weight: 850;
        }

        .machinery {
          // display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 24px;
        }
        .machine {
          display: flex;
          gap: 16px;
          padding: 20px;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: #fbfcfb;
        }
        .machine .icon {
          flex: 0 0 44px; height: 44px; border-radius: 12px;
          display: grid; place-items: center;
          background: var(--accent-2); font-size: 20px; font-weight: 900;
        }
        .machine strong { display: block; margin-bottom: 3px; }
        .machine span { font-size: 15px; color: var(--muted); }

        .flow {
          // display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
          margin: 28px 0 10px;
        }
        .flow-step {
          position: relative;
          padding: 18px 14px;
          background: var(--soft);
          border-radius: 17px;
          min-height: 112px;
          font-weight: 800;
          font-size: 14px;
        }
        .flow-step small {
          display: block;
          font-weight: 500;
          color: var(--muted);
          margin-top: 7px;
          line-height: 1.45;
        }

        .split {
          // display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 26px;
          align-items: start;
          margin-top: 28px;
        }
        .issue-list {
          display: grid;
          gap: 12px;
        }
        .issue {
          padding: 17px 18px;
          border: 1px solid var(--line);
          border-radius: 16px;
          background: #fff;
        }
        .issue strong { display: block; margin-bottom: 3px; }
        .issue span { font-size: 15px; color: var(--muted); }

        .dark-box {
          margin-top: 28px;
          padding: 30px;
          border-radius: 24px;
          background: var(--ink);
          color: #fff;
        }
        .dark-box p { color: #d6e7df; }
        .dark-box .pill {
          display: inline-block;
          padding: 9px 14px;
          border: 1px solid rgba(255, 255, 255, .18);
          border-radius: 999px;
          font-size: 13px;
          font-weight: 800;
          margin: 4px 6px 0 0;
        }

        .table-wrap { overflow: auto; border: 1px solid var(--line); border-radius: 20px; }
        table { border-collapse: collapse; width: 100%; min-width: 700px; background: #fff; }
        th, td { padding: 16px 18px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; }
        th { font-size: 14px; letter-spacing: .03em; background: var(--soft); }
        td { font-size: 15px; color: #3d5569; }
        tr:last-child td { border-bottom: 0; }

        .cta {
          padding: 38px;
          border-radius: 26px;
          background: linear-gradient(135deg, #eaf3ee, #f8fbf9);
          border: 1px solid var(--line);
          margin-top: 52px;
        }
        .cta p { max-width: 840px; }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
          text-decoration: none;
          padding: 14px 20px;
          border-radius: 999px;
          background: var(--ink);
          color: #fff;
          font-weight: 850;
        }

        .side-eyebrow {
          display: inline-block;
          padding: 9px 15px;
          border: 1px solid rgba(255, 255, 255, .18);
          border-radius: 999px;
          color: #dcece5;
          font-size: 12px;
          letter-spacing: .12em;
          font-weight: 800;
          margin-bottom: 28px;
        }

        .side h2 {
          font-size: clamp(44px, 4vw, 66px);
          max-width: 480px;
          line-height: 1.06;
        }
        .side p {
          color: #d7e7e0;
          line-height: 1.85;
          font-size: 18px;
        }
        .side .mini-rule { height: 1px; background: rgba(255, 255, 255, .18); margin: 26px 0; }
        .side-list { display: grid; gap: 12px; margin: 0; padding: 0; list-style: none; }
        .side-list li {
          padding: 14px 0;
          border-bottom: 1px solid rgba(255, 255, 255, .12);
          color: #eef6f2;
        }
        .side-list strong { display: block; }
        .side .tagline {
          position: absolute;
          left: 44px;
          right: 44px;
          bottom: 34px;
          font-size: 13px;
          color: #b9d4c8;
          letter-spacing: .08em;
          text-transform: uppercase;
          font-weight: 800;
        }

        .faq-list {
          display: grid;
          gap: 12px;
          margin-top: 28px;
        }
        details {
          border: 1px solid var(--line);
          border-radius: 18px;
          background: #fff;
          overflow: hidden;
        }
        summary {
          cursor: pointer;
          list-style: none;
          padding: 20px 52px 20px 22px;
          position: relative;
          font-weight: 850;
          font-size: 17px;
          color: var(--ink);
        }
        summary::-webkit-details-marker { display: none; }
        summary::after {
          content: "+";
          position: absolute;
          right: 20px;
          top: 14px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--soft);
          color: var(--ink);
          font-size: 22px;
          font-weight: 500;
        }
        details[open] summary::after { content: "−"; }
        details p {
          margin: 0;
          padding: 0 22px 22px;
          font-size: 16px;
          max-width: 1000px;
        }

        .source-note {
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid var(--line);
        }
        .source-note p { font-size: 13px; margin-bottom: 8px; }
        .source-note a { color: var(--ink-2); text-decoration: none; }
        footer {
          margin-top: 28px;
          padding: 36px 42px;
          border-radius: 26px;
          background: var(--ink);
          color: #fff;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr;
          gap: 26px;
          align-items: start;
        }
        footer h3 { font-size: 22px; }
        footer p, footer a { color: #d1e3dc; font-size: 15px; text-decoration: none; }
        .contact { display: grid; gap: 9px; }
        .contact b { color: #fff; }
        .copyright {
          border-top: 1px solid rgba(255, 255, 255, .14);
          margin-top: 24px; padding-top: 18px;
          font-size: 12px; color: #aecbc0;
        }

        @media (max-width: 1100px) {
          .shell { grid-template-columns: 1fr; }
          .side { position: relative; top: auto; min-height: unset; }
          .side .tagline { position: static; margin-top: 28px; }
          .main { padding: 48px; }
        }
        @media (max-width: 760px) {
          .page { padding: 0 10px; margin: 10px auto; }
          .main, .side { border-radius: 22px; }
          .main { padding: 32px 22px; }
          .side { padding: 32px 24px; }
          h1 { font-size: 48px; line-height: 1.02; }
          .facts, .lead-grid, .machinery, .split, .footer-grid { grid-template-columns: 1fr; }
          .fact, .fact:nth-child(2), .fact:last-child {
            padding: 18px 0;
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }
          .fact:last-child { border-bottom: 0; }
          .flow { grid-template-columns: 1fr 1fr; }
          .flow-step { min-height: 98px; }
          p { font-size: 16px; }
          .intro { font-size: 18px; }
          .side h2 { font-size: 34px; }
          .cta { padding: 26px 22px; }
          footer { padding: 28px 22px; }
        }
      `}</style>

      <div className="page">
        <div className="shell">
          <main className="main">
            <span className="eyebrow">COMPRESSED BIOGAS SET-UP</span>
            <h1>Compressed Biogas Plant Machinery and Plant Setup</h1>
            <p className="intro">
              Setting up a Compressed Biogas (CBG) plant is not simply about buying a digester and a gas compressor.
              The project has to work as one connected system — feedstock, process design, machinery, land, utilities,
              safety, registrations, pollution-control permissions, gas quality, offtake and day-to-day operations.
            </p>

            <div className="facts" aria-label="Key CBG facts">
              <div className="fact">
                <strong>217</strong>
                <span>CBG/Bio-CNG plants commissioned, as reported on 6 Aug 2026</span>
              </div>
              <div className="fact">
                <strong>339</strong>
                <span>Plants under construction in the same national update</span>
              </div>
              <div className="fact">
                <strong>₹10 Cr</strong>
                <span>Maximum MNRE central financial assistance per project under the cited programme</span>
              </div>
            </div>

            <div className="lead-grid">
              <article className="card">
                <div className="num">01</div>
                <h3>Start with feedstock</h3>
                <p>Before selecting machinery, establish what organic material you can secure, in what quantity, with what seasonality and at what delivered cost.</p>
              </article>
              <article className="card">
                <div className="num">02</div>
                <h3>Design the complete process</h3>
                <p>Digesters, gas cleaning, upgrading, compression, storage and digestate handling must be sized around the actual feedstock and target gas output.</p>
              </article>
              <article className="card">
                <div className="num">03</div>
                <h3>Plan approvals early</h3>
                <p>CBG projects can involve pollution-control consent, factory and local permissions, fire and pressure-safety requirements, registrations and other project-specific approvals.</p>
              </article>
              <article className="card">
                <div className="num">04</div>
                <h3>Build for operations</h3>
                <p>A technically impressive plant can still lose money when feedstock logistics, operator capability, maintenance, quality testing or working capital are overlooked.</p>
              </article>
            </div>

            <section className="section" id="setup">
              <span className="section-tag">01 / Plant Setup</span>
              <h2>Compressed Biogas Plant Setup and Support</h2>
              <p>
                A practical CBG project moves through a sequence of decisions rather than a single purchase order.
                The right approach is to lock the commercial and regulatory assumptions first, then freeze the plant
                configuration and machinery around those assumptions.
              </p>

              <div className="flow">
                <div className="flow-step">Feedstock Study<small>Availability, quality, seasonality, logistics</small></div>
                <div className="flow-step">Feasibility<small>Capacity, technology, land, economics</small></div>
                <div className="flow-step">Approvals<small>Consent, safety, factory, local permissions</small></div>
                <div className="flow-step">EPC & Machinery<small>Procurement, civil, utilities, installation</small></div>
                <div className="flow-step">Commissioning<small>Trials, gas quality, performance, operations</small></div>
              </div>

              <div className="dark-box">
                <h3>What makes a CBG project bankable?</h3>
                <p>
                  A credible project normally needs a traceable feedstock plan, realistic production assumptions,
                  a suitable site, clear technology selection, a documented approval pathway, a commercial/offtake
                  strategy and a capital plan that includes contingency and working capital.
                </p>
                <span className="pill">Feedstock visibility</span>
                <span className="pill">Technology fit</span>
                <span className="pill">Compliance roadmap</span>
                <span className="pill">Offtake strategy</span>
                <span className="pill">O&M readiness</span>
              </div>
            </section>

            <section className="section" id="machinery">
              <span className="section-tag">02 / Machinery</span>
              <h2>Key Machinery and Plant Sections</h2>
              <p>
                The exact equipment list changes with feedstock — for example agricultural residue, press mud,
                animal waste or source-segregated organic waste. A good design does not force every feedstock into
                the same process line.
              </p>

              <div className="machinery">
                <div className="machine"><div className="icon">01</div><div><strong>Feedstock receiving & storage</strong><span>Weighing, unloading, storage bays, conveyors, hoppers and controlled feeding.</span></div></div>
                <div className="machine"><div className="icon">02</div><div><strong>Pre-processing system</strong><span>Shredding, chopping, screening, slurry preparation, de-packaging and contamination removal as required.</span></div></div>
                <div className="machine"><div className="icon">03</div><div><strong>Anaerobic digester</strong><span>Reactor system selected to match solids content, retention time, temperature and feedstock characteristics.</span></div></div>
                <div className="machine"><div className="icon">04</div><div><strong>Biogas collection & storage</strong><span>Gas holders, pressure management, condensate handling and safe routing of raw biogas.</span></div></div>
                <div className="machine"><div className="icon">05</div><div><strong>Gas cleaning</strong><span>Removal of moisture, hydrogen sulphide and other contaminants to protect downstream equipment.</span></div></div>
                <div className="machine"><div className="icon">06</div><div><strong>Gas upgrading</strong><span>CO₂ separation using a suitable upgrading technology to produce biomethane/CBG quality gas.</span></div></div>
                <div className="machine"><div className="icon">07</div><div><strong>Compression & high-pressure storage</strong><span>Gas compression, cascade storage and dispensing/dispatch equipment designed for the intended delivery route.</span></div></div>
                <div className="machine"><div className="icon">08</div><div><strong>Digestate / manure handling</strong><span>Solid-liquid separation, storage and downstream handling of organic manure or other project by-products.</span></div></div>
              </div>

              <p style={{ marginTop: '22px' }}>
                <strong style={{ color: 'var(--ink)' }}>Quality matters:</strong>
                {" "}BIS identifies <strong style={{ color: 'var(--ink)' }}>IS 16087:2016</strong> as the specification for biomethane used in
                automotive, piped-network, stationary and industrial applications. BIS also lists <strong style={{ color: 'var(--ink)' }}>IS 9478:2023</strong>
                {" "}for design, construction, installation and operation of biogas/biomethane plants.
              </p>
            </section>

            <section className="section" id="new-industry">
              <span className="section-tag">03 / For First-Time Entrepreneurs</span>
              <h2>Coming from Another Industry? These Are the Issues You Usually Face</h2>
              <p>
                A common mistake is to assume that a successful entrepreneur in manufacturing, trading, agriculture,
                waste management or another industrial segment can simply replicate the same business playbook in CBG.
                The risk profile is different because a CBG plant combines biology, process engineering, high-pressure
                gas systems, logistics, environmental compliance and long-term operations.
              </p>

              <div className="split">
                <div className="issue-list">
                  <div className="issue"><strong>Unfamiliar feedstock economics</strong><span>The lowest purchase price is not always the lowest delivered cost once transport, moisture, contamination and seasonality are counted.</span></div>
                  <div className="issue"><strong>Over-reliance on EPC quotations</strong><span>Different vendors may quote different output assumptions, scope boundaries and utility requirements. Comparing only the headline price can be misleading.</span></div>
                  <div className="issue"><strong>Wrong machinery for the feedstock</strong><span>Agri-residue, press mud, dung and segregated organic waste do not behave the same way inside a digester or pre-processing line.</span></div>
                  <div className="issue"><strong>Approval delays</strong><span>Project-specific permissions can involve multiple authorities. The requirements also vary with feedstock, site, storage, pressure systems and local rules.</span></div>
                  <div className="issue"><strong>Working-capital pressure</strong><span>Construction bills arrive before a new plant reaches stable production. Feedstock inventory, utilities, manpower and trial operations require cash.</span></div>
                  <div className="issue"><strong>Operations capability gap</strong><span>Running a CBG plant requires trained operators, preventive maintenance, lab/testing discipline and process monitoring — not only a one-time installation team.</span></div>
                </div>

                <div className="card">
                  <h3>The smarter entry point</h3>
                  <p>
                    Treat the project as an industrial system from day one. Validate feedstock and site first,
                    define the output target second, map approvals third, and only then finalise engineering and machinery.
                  </p>
                  <p>
                    This approach reduces the chance of buying equipment that is technically capable but commercially
                    mismatched to the project.
                  </p>
                </div>
              </div>
            </section>

            <section className="section" id="compliance">
              <span className="section-tag">04 / Compliance & Registration</span>
              <h2>CBG Registrations and Compliance: What Should Be Mapped?</h2>
              <p>
                CBG projects should not be described as having one universal “CBG licence”. The actual compliance
                pathway depends on the plant design, feedstock, location, storage and end use. CPCB’s current
                categorisation, for example, differentiates CBG projects by feedstock: the published classification
                lists MSW/process-waste CBG plants under Red category and crop-residue CBG plants under Orange category.
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Area</th>
                      <th>What needs attention</th>
                      <th>Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pollution control</td>
                      <td>Consent/authorisation pathway as applicable to the actual feedstock and plant configuration</td>
                      <td>Wrong categorisation or incomplete application can lead to avoidable rework.</td>
                    </tr>
                    <tr>
                      <td>Land & local permissions</td>
                      <td>Land use, building/site permissions, utilities and local development requirements</td>
                      <td>A technically good project can stall if the site is not development-ready.</td>
                    </tr>
                    <tr>
                      <td>Pressure & gas safety</td>
                      <td>High-pressure storage, compression, fire and safety systems and applicable statutory approvals</td>
                      <td>CBG storage and dispensing involve significant pressure and safety considerations.</td>
                    </tr>
                    <tr>
                      <td>Factory / labour compliance</td>
                      <td>Project-specific registration, occupational safety and workforce requirements</td>
                      <td>Operations depend on a compliant and safe industrial workplace.</td>
                    </tr>
                    <tr>
                      <td>Gas quality</td>
                      <td>Testing and conformity with the quality specifications relevant to the intended application</td>
                      <td>Gas quality affects customer acceptance, equipment protection and commercial dispatch.</td>
                    </tr>
                    <tr>
                      <td>Commercial registrations</td>
                      <td>GST, banking, contracts, offtake documentation and any sector-specific registration</td>
                      <td>Registration is only useful when it is linked to the project’s actual transaction flow.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="section" id="epr">
              <span className="section-tag">05 / EPR Nexuss Support</span>
              <h2>How EPR Nexuss Helps Clients Avoid Costly Trial-and-Error</h2>
              <p>
                A new CBG entrepreneur often receives advice from equipment suppliers, civil contractors, consultants,
                finance intermediaries and different government-facing service providers. Each party may address only one
                piece of the project. The result can be duplicated work, inconsistent assumptions and money spent before the
                overall plan is properly aligned.
              </p>

              <div className="lead-grid">
                <article className="card">
                  <div className="num">A</div>
                  <h3>Start with a project roadmap</h3>
                  <p>EPR Nexuss can help structure the project requirements into a sequence: business model, feedstock, site, capacity, registrations, compliance, documentation and execution support.</p>
                </article>
                <article className="card">
                  <div className="num">B</div>
                  <h3>Coordinate the documentation</h3>
                  <p>Instead of treating each registration as a separate exercise, the documentation can be organised around the same core project facts so that forms, technical papers and supporting records stay consistent.</p>
                </article>
                <article className="card">
                  <div className="num">C</div>
                  <h3>Support compliance planning</h3>
                  <p>Compliance can be mapped against the plant’s actual feedstock, machinery, storage and operating model, helping the promoter understand what applies before commitments are made.</p>
                </article>
                <article className="card">
                  <div className="num">D</div>
                  <h3>Stay involved after registration</h3>
                  <p>Compliance is not finished when the certificate is issued. Renewals, record keeping, changes in plant configuration and ongoing statutory actions may still need attention.</p>
                </article>
              </div>

              <div className="dark-box">
                <h3>Our working principle</h3>
                <p>
                  <strong style={{ color: '#fff' }}>Do not buy first and ask compliance questions later.</strong>
                  {" "}Validate the project assumptions first, map the approvals and documentation, and then align the
                  machinery and execution scope.
                </p>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">06 / Industry Direction</span>
              <h2>Why CBG Is Getting Serious Attention in India</h2>
              <p>
                Government data shows a growing project pipeline. A PIB update dated 6 August 2026 reported
                {" "}<strong style={{ color: 'var(--ink)' }}>1,908 CBG/Bio-CNG plants registered</strong> nationally, with
                {" "}<strong style={{ color: 'var(--ink)' }}>217 commissioned</strong> and <strong style={{ color: 'var(--ink)' }}>339 under construction</strong>.
                That is a real market signal: interest is increasing, but getting from registration to a stable operating plant
                still requires disciplined execution.
              </p>
              <p>
                Under the cited MNRE Waste-to-Energy programme, central financial assistance for a new BioCNG/CBG project
                is stated at <strong style={{ color: 'var(--ink)' }}>₹4 crore per 4,800 kg/day</strong> of capacity, subject to
                scheme conditions, with a <strong style={{ color: 'var(--ink)' }}>maximum of ₹10 crore per project</strong>.
                Incentive eligibility should be checked against the current programme and the actual project structure before
                making financial assumptions.
              </p>
            </section>

            <section className="section" id="faqs">
              <span className="section-tag">07 / Frequently Asked Questions</span>
              <h2>Frequently Asked Questions About CBG Plant Setup</h2>
              <p>
                These are the questions promoters commonly ask before moving from the idea stage to a working
                Compressed Biogas plant. The exact answer can change with feedstock, capacity, state, site and
                the intended end use of the gas.
              </p>

              <div className="faq-list">
                <details open>
                  <summary>How much does it cost to set up a CBG plant in India?</summary>
                  <p>
                    There is no single standard project cost. Investment depends on feedstock, daily processing
                    capacity, pre-treatment requirements, digester technology, gas upgrading method, compression
                    and storage, civil works, utilities, land development and the level of automation. A realistic
                    project budget should therefore be prepared after a feedstock and site assessment rather than
                    by applying a fixed cost per tonne or per kg of CBG.
                  </p>
                </details>

                <details>
                  <summary>Which feedstocks can be used for a CBG plant?</summary>
                  <p>
                    Depending on the technology and local supply chain, projects may use agricultural residues,
                    press mud, cattle dung, food and organic waste, sewage or other suitable biodegradable
                    materials. The important question is not only whether a feedstock is technically digestible,
                    but whether it is consistently available, affordable to collect and transportable to the plant.
                  </p>
                </details>

                <details>
                  <summary>How much land is required for a CBG plant?</summary>
                  <p>
                    Land requirement varies depending on daily feedstock volume, storage requirements, digester footprint,
                    gas upgrading and compression units, digestate processing, safety buffer zones, and internal logistics.
                    Typically, a mid-scale commercial plant (e.g., 5 to 10 tonnes per day CBG production) requires anywhere 
                    from 3 to 8 acres of land.
                  </p>
                </details>

                <details>
                  <summary>What major approvals and clearances are required?</summary>
                  <p>
                    Key clearances usually include SPCB Consent to Establish (CTE) and Consent to Operate (CTO), Petroleum
                    and Explosives Safety Organization (PESO) approval for high-pressure storage/cascades, Fire NOC, Factory
                    License, Local Panchayat/Municipal NOC, and power/water connection sanctions.
                  </p>
                </details>
              </div>
            </section>

            <div className="cta">
              <h2>Ready to Plan Your CBG Project?</h2>
              <p>
                Avoid expensive trial-and-error by establishing a clear compliance, feedstock, and machinery strategy 
                before placing equipment orders.
              </p>
              <a href="#contact" className="cta-btn">
                Get Expert Guidance &rarr;
              </a>
            </div>

            <div className="source-note">
              <p>
                * Reference data sourced from Ministry of New and Renewable Energy (MNRE) and PIB updates (August 2026).
              </p>
            </div>
          </main>

                    {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block w-[315px], flex-shrink-0 self-start" style={{ position: "sticky", top: "7rem" }}>
            <StickyContactForm />
          </aside>
        </div>

        <footer id="contact">
          <div className="footer-grid">
            <div>
              <h3>CBG Plant Setup Support</h3>
              <p>End-to-end advisory and compliance solutions for compressed biogas infrastructure in India.</p>
            </div>
            <div>
              <h3>Key Focus Areas</h3>
              <p>Feedstock Analysis<br />Technology Selection<br />SPCB & PESO Approvals<br />Central Subsidies</p>
            </div>
            <div className="contact">
              <h3>Contact Us</h3>
              <p><b>EPR Nexuss</b><br />Email: info@eprnexuss.com<br />India</p>
            </div>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} EPR Nexuss. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

