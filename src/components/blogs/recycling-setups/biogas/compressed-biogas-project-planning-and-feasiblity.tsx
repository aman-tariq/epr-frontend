import React from "react";
import StickyContactForm from '@/components/StickyContactForm';

const CBGProjectFeasibility: React.FC = () => {
  return (
    <>
      <style>{`
        :root{
          --ink:#07382a;
          --ink2:#154c3d;
          --muted:#5e7990;
          --line:#dce5e1;
          --soft:#e8f1ed;
          --paper:#fff;
          --bg:#eef2ef;
          --white:#fff;
          --shadow:0 12px 36px rgba(8,42,31,.045);
        }
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{
          margin:0;background:var(--bg);color:var(--ink);
          font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
          line-height:1.7;
        }
        a{color:inherit}

        .page {
          max-width: 1780px;
          margin: 26px auto;
          padding: 0 22px;
        }

        .shell {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 28px;
          align-items: start;
        }

        .shell > * {
          align-self: start;
        }
        
        .main,.side{
          min-width:0;max-width:100%;
          background:var(--paper);
          border:1px solid #d9e2de;
          border-radius:32px;
          box-shadow:var(--shadow);
        }
        .main{
          padding:82px 74px 74px;
          margin-top:100px !important;
          overflow:hidden;
          margin:0;
        }

        .side{
          padding:60px 56px;position:sticky;top:24px;
          background:#082f23;color:#fff;min-height:780px;overflow:hidden
        }
        .eyebrow{
          display:inline-flex;padding:11px 22px;border-radius:999px;background:var(--soft);
          color:var(--ink);font-size:14px;letter-spacing:.14em;font-weight:800;text-transform:uppercase
        }
        h1,h2,h3{line-height:1.06;margin:0 0 18px;letter-spacing:-.03em}
        h1{font-size:clamp(52px,5.35vw,90px);max-width:1000px;margin-top:100px}
        h2{font-size:clamp(32px,3vw,46px)}
        h3{font-size:23px}
        p{font-size:18px;color:var(--muted);margin:0 0 20px}
        .intro{margin-top:1--px;max-width:1070px;font-size:20px;line-height:1.9}
        .facts{display:grid;
          margin:34px 0 46px;border-top:1px solid var(--line);border-bottom:1px solid var(--line)
        }
        .fact{padding:20px 24px 20px 0;border-right:1px solid var(--line)}
        .fact:nth-child(2){padding-left:24px}.fact:last-child{border-right:0;padding-left:24px}
        .fact strong{display:block;font-size:30px;color:var(--ink);margin-bottom:3px}
        .fact span{font-size:14px;color:var(--muted);line-height:1.55}
        .lead-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin:30px 0 50px}
        .card{
          border:1px solid var(--line);border-radius:22px;padding:28px;
          background:linear-gradient(180deg,#fff,#f8fbf9)
        }
        .card p{font-size:16px;line-height:1.6}
        .num{
          width:38px;height:38px;border-radius:50%;place-items:center;
          background:var(--soft);font-weight:800;margin-bottom:18px
        }
        .section{margin:32px 0}.section > p{max-width:1040px}
        .section-tag{
          display:inline-block;margin-bottom:12px;color:var(--ink2);font-size:13px;
          letter-spacing:.16em;text-transform:uppercase;font-weight:850
        }
        .flow{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin:28px 0 10px}
        .flow-step{
          padding:18px 14px;background:var(--soft);border-radius:17px;
          min-height:112px;font-weight:800;font-size:14px
        }
        .flow-step small{display:block;font-weight:500;color:var(--muted);margin-top:7px;line-height:1.45}
        .dark-box{margin-top:28px;padding:30px;border-radius:24px;background:var(--ink);color:#fff}
        .dark-box p{color:#d6e7df}
        .pill{
          display:inline-block;padding:9px 14px;border:1px solid rgba(255,255,255,.18);
          border-radius:999px;font-size:13px;font-weight:800;margin:4px 6px 0 0
        }
        .feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:26px}
        .feature-card{border:1px solid var(--line);border-radius:20px;padding:22px;background:#fbfcfb}
        .feature-card .label{font-size:12px;font-weight:850;letter-spacing:.1em;text-transform:uppercase;color:var(--ink2)}
        .feature-card strong{display:block;font-size:24px;line-height:1.15;margin:8px 0}
        .feature-card span{font-size:14px;color:var(--muted)}
        .table-wrap{overflow:auto;border:1px solid var(--line);border-radius:20px}
        table{border-collapse:collapse;width:100%;min-width:900px;background:#fff}
        th,td{padding:16px 18px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}
        th{font-size:14px;letter-spacing:.03em;background:var(--soft)}
        td{font-size:15px;color:#3d5569}
        tr:last-child td{border-bottom:0}
        .checklist{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:24px}
        .check{padding:17px 18px;border:1px solid var(--line);border-radius:16px;background:#fff}
        .check strong{display:block;margin-bottom:4px}.check span{font-size:15px;color:var(--muted)}
        .issue-list{gap:8px}
        .issue{padding:5px 5px;border:1px solid var(--line);border-radius:16px;background:#fff}
        .issue strong{display:block;margin-bottom:3px}.issue span{font-size:15px;color:var(--muted)}
        .split{grid-template-columns:1.1fr .9fr;gap:26px;align-items:start;margin-top:28px}
        .timeline{display:grid;gap:0;margin-top:28px}
        .trow{display:grid;grid-template-columns:74px 1fr;gap:18px}
        .tnum{
          width:48px;height:48px;border-radius:50%;background:var(--soft);
          display:grid;place-items:center;font-weight:900;position:relative
        }
        .trow:not(:last-child) .tnum:after{
          content:"";position:absolute;top:48px;left:23px;width:2px;height:74px;background:var(--line)
        }
        .tbody{padding:3px 0 32px}.tbody strong{display:block;font-size:18px;margin-bottom:3px}
        .tbody span{font-size:15px;color:var(--muted)}
        .faq-list{display:grid;gap:12px;margin-top:28px}
        details{border:1px solid var(--line);border-radius:18px;background:#fff;overflow:hidden}
        summary{
          cursor:pointer;list-style:none;padding:20px 52px 20px 22px;position:relative;
          font-weight:850;font-size:17px;color:var(--ink)
        }
        summary::-webkit-details-marker{display:none}
        summary:after{
          content:"+";position:absolute;right:20px;top:14px;width:30px;height:30px;
          border-radius:50%;display:grid;place-items:center;background:var(--soft);
          color:var(--ink);font-size:22px;font-weight:500
        }
        details[open] summary:after{content:"−"}
        details p{margin:0;padding:0 22px 22px;font-size:16px;max-width:1000px}
        .cta{
          padding:40px;border-radius:26px;background:linear-gradient(135deg,#eaf3ee,#f8fbf9);
          border:1px solid var(--line);margin-top:52px
        }
        .cta p{max-width:930px}
        .cta-btn{
          display:inline-flex;margin-top:10px;text-decoration:none;padding:14px 20px;
          border-radius:999px;background:var(--ink);color:#fff;font-weight:850
        }
        .side-eyebrow{
          display:inline-block;padding:9px 15px;border:1px solid rgba(255,255,255,.18);
          border-radius:999px;color:#dcece5;font-size:12px;letter-spacing:.12em;font-weight:800;margin-bottom:28px
        }
        .side h2{font-size:clamp(44px,4vw,66px);max-width:480px;line-height:1.06}
        .side p{color:#d7e7e0;line-height:1.85;font-size:18px}
        .side .mini-rule{height:1px;background:rgba(255,255,255,.18);margin:26px 0}
        .side-list{display:grid;gap:12px;margin:0;padding:0;list-style:none}
        .side-list li{padding:14px 0;border-bottom:1px solid rgba(255,255,255,.12);color:#eef6f2}
        .side-list strong{display:block}
        .side .tagline{
          position:absolute;left:56px;right:56px;bottom:34px;font-size:13px;
          color:#b9d4c8;letter-spacing:.08em;text-transform:uppercase;font-weight:800
        }
        .source-note{margin-top:44px;padding-top:24px;border-top:1px solid var(--line)}
        .source-note p{font-size:13px;margin-bottom:8px}
        .source-note a{color:var(--ink2);text-decoration:none;overflow-wrap:anywhere}
        .disclaimer{font-size:12px!important;color:#7a8d9b!important}
        .blog-sidebar{
          width:100%;
          min-width:0;
          position:sticky;
          top:24px;
          align-self:start;
          z-index:5;
        }
        .blog-sidebar > *{
          width:100%;
          max-width:100%;
        }
        footer{margin-top:28px;padding:36px 42px;border-radius:26px;background:var(--ink);color:#fff}
        .footer-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:26px;align-items:start}
        footer h3{font-size:22px} footer p,footer a{color:#d1e3dc;font-size:15px;text-decoration:none}
        .contact{display:grid;gap:9px}.contact b{color:#fff}
        .copyright{
          border-top:1px solid rgba(255,255,255,.14);margin-top:24px;padding-top:18px;
          font-size:12px;color:#aecbc0
        }
        @media(max-width:1250px){
          .shell{grid-template-columns:1fr}
          .side{position:relative;top:auto;min-height:unset}
          .side .tagline{position:static;margin-top:28px}
        }
        @media(max-width:860px){
          .main{padding:48px 34px}
          .feature-grid{grid-template-columns:1fr 1fr}
          .checklist{display:grid;grid-template-columns:1fr}
          .facts{display:grid;grid-template-columns:1fr}
          .fact,.fact:nth-child(2),.fact:last-child{padding:18px 0;border-right:0;border-bottom:1px solid var(--line)}
          .fact:last-child{border-bottom:0}
          .flow{display:grid;grid-template-columns:1fr 1fr}
          .split{display:grid;grid-template-columns:1fr}
        }
        @media(max-width:640px){
          .page{padding:0 10px;margin:10px auto}
          tr{    display: flex;
    flex-direction: column;}
          .main,.side{border-radius:22px}
          .main{padding:32px 22px; margin-top: 50px !important; }
          .side{padding:32px 24px}
          h1{font-size:48px;line-height:1.02}
          .intro{font-size:18px;line-height:1.75}
          p{font-size:16px}
          .lead-grid,.feature-grid{grid-template-columns:1fr}
          .flow{display:grid;grid-template-columns:1fr}
          .flow-step{min-height:auto}
          .footer-grid{grid-template-columns:1fr}
          footer{padding:28px 22px}
          .cta{padding:28px 22px}
          .side h2{font-size:40px}
        }
      `}</style>

      <div className="page">
        <div className="shell">
          <main className="main">
            <span className="eyebrow">CBG PROJECT • FEASIBILITY • INDIA</span>
            <h1>Compressed Biogas Project Planning and Feasibility</h1>
            <p className="intro">
              A CBG plant should not begin with a machinery quotation. It should
              begin with a feasibility question: can the proposed plant secure the
              right feedstock, operate reliably, meet gas-quality requirements,
              receive the necessary approvals and generate enough cash to support
              the investment? A well-prepared feasibility study answers those
              questions before major capital is committed.
            </p>

            <div className="facts">
              <div className="fact">
                <strong>1,929</strong>
                <span>
                  CBG/Bio-CNG plants registered in India as of 13 August 2026,
                  according to the latest PIB update.
                </span>
              </div>
              <div className="fact">
                <strong>217</strong>
                <span>
                  Plants had been commissioned by that date, with 357 reported
                  under construction.
                </span>
              </div>
              <div className="fact">
                <strong>₹23,731 Cr</strong>
                <span>
                  Outlay for the new GOBARdhan National Circular Bioenergy Scheme
                  for FY 2026–27 to FY 2035–36.
                </span>
              </div>
            </div>

            <div className="lead-grid">
              <article className="card">
                <div className="num">01</div>
                <h3>Feasibility before fabrication</h3>
                <p>
                  Validate feedstock, site, capacity, technology, utilities and
                  economics before placing major equipment orders.
                </p>
              </article>
              <article className="card">
                <div className="num">02</div>
                <h3>Build the right project model</h3>
                <p>
                  Production assumptions should reflect actual feedstock
                  characteristics, plant efficiency, operating days and realistic
                  losses.
                </p>
              </article>
              <article className="card">
                <div className="num">03</div>
                <h3>Make the numbers bankable</h3>
                <p>
                  A strong DPR connects capex and opex to revenue, debt service,
                  promoter contribution, working capital and sensitivity analysis.
                </p>
              </article>
              <article className="card">
                <div className="num">04</div>
                <h3>Plan compliance alongside engineering</h3>
                <p>
                  Site, land, safety, pollution-control and registration
                  requirements can change layout, costs and project timelines.
                </p>
              </article>
            </div>

            <section className="section">
              <span className="section-tag">01 / What Feasibility Means</span>
              <h2>
                Compressed Biogas Project Planning and Feasibility — The Real
                Question
              </h2>
              <p>
                A feasibility study is not just a report with a project cost at
                the end. It is a structured test of whether the proposed CBG
                business can work technically, commercially, financially and
                legally. The strongest project reports bring together market
                assessment, raw-material availability, machinery, utilities,
                process design, capital expenditure, working capital, operating
                costs, projected revenue, break-even, debt-service capacity and
                sensitivity analysis. Industry project-report structures commonly
                include these same areas.
              </p>

              <div className="flow">
                <div className="flow-step">
                  Feedstock
                  <small>Quantity, quality, seasonality, delivered cost</small>
                </div>
                <div className="flow-step">
                  Site
                  <small>Land, access, utilities, safety and logistics</small>
                </div>
                <div className="flow-step">
                  Process
                  <small>Digestion, cleaning, upgrading, compression</small>
                </div>
                <div className="flow-step">
                  Commercial
                  <small>Offtake, pricing, by-products and market</small>
                </div>
                <div className="flow-step">
                  Finance
                  <small>CAPEX, OPEX, debt, equity, DSCR &amp; risk</small>
                </div>
              </div>

              <div className="dark-box">
                <h3>
                  A feasibility study should be able to say “why this project
                  works”
                </h3>
                <p>
                  It should also be willing to say “do not invest yet” when the
                  feedstock, site, commercial arrangement, technology or economics
                  are not ready. That is often more valuable than a polished
                  report that simply confirms the promoter's original idea.
                </p>
                <span className="pill">Technical</span>
                <span className="pill">Commercial</span>
                <span className="pill">Financial</span>
                <span className="pill">Regulatory</span>
                <span className="pill">Operational</span>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">02 / Feedstock Feasibility</span>
              <h2>Why Feedstock Is the First Commercial Decision</h2>
              <p>
                CBG is made from biological material through anaerobic digestion.
                Suitable projects can use agricultural residues, animal waste,
                food and organic waste, press mud and other biodegradable streams,
                depending on the technology and local conditions. The biggest
                planning error is to treat “available waste” and “contracted,
                usable feedstock” as the same thing.
              </p>

              <div className="feature-grid">
                <div className="feature-card">
                  <div className="label">01</div>
                  <strong>Availability</strong>
                  <span>
                    How much material can actually be secured every month,
                    including lean or seasonal periods?
                  </span>
                </div>
                <div className="feature-card">
                  <div className="label">02</div>
                  <strong>Quality</strong>
                  <span>
                    Moisture, solids, contamination and biodegradability directly
                    affect the process and gas yield.
                  </span>
                </div>
                <div className="feature-card">
                  <div className="label">03</div>
                  <strong>Logistics</strong>
                  <span>
                    Transport distance, loading, unloading and storage can turn
                    low-cost waste into expensive feedstock.
                  </span>
                </div>
                <div className="feature-card">
                  <div className="label">04</div>
                  <strong>Price</strong>
                  <span>
                    Use delivered cost rather than the headline source price for
                    the financial model.
                  </span>
                </div>
                <div className="feature-card">
                  <div className="label">05</div>
                  <strong>Contract length</strong>
                  <span>
                    Longer, credible supply arrangements reduce a major operating
                    risk for lenders and investors.
                  </span>
                </div>
                <div className="feature-card">
                  <div className="label">06</div>
                  <strong>Competing use</strong>
                  <span>
                    Check whether the material is already used for fodder, fuel,
                    compost, soil amendment or another industry.
                  </span>
                </div>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">03 / Process &amp; Machinery</span>
              <h2>Technology Selection Should Follow the Feedstock</h2>
              <p>
                A CBG line typically includes feedstock reception and
                pre-processing, anaerobic digestion, raw-biogas collection, gas
                cleaning, upgrading, compression and storage, together with
                digestate handling and plant utilities. The process is not
                identical for every feedstock, and a machinery list copied from
                another plant can create avoidable CAPEX and operating problems.
              </p>
              <div className="checklist">
                <div className="check">
                  <strong>Feedstock handling</strong>
                  <span>
                    Weighing, unloading, storage, shredding, screening,
                    de-packaging and controlled feeding as required.
                  </span>
                </div>
                <div className="check">
                  <strong>Anaerobic digestion</strong>
                  <span>
                    Reactor sizing around organic loading, retention time, solids
                    content and operating conditions.
                  </span>
                </div>
                <div className="check">
                  <strong>Gas cleaning</strong>
                  <span>
                    Moisture and hydrogen-sulphide control to protect downstream
                    equipment and maintain gas quality.
                  </span>
                </div>
                <div className="check">
                  <strong>Biogas upgrading</strong>
                  <span>
                    CO₂ removal using a technology selected for the feed gas,
                    target quality and project scale.
                  </span>
                </div>
                <div className="check">
                  <strong>Compression &amp; storage</strong>
                  <span>
                    High-pressure compression, cascade/storage and dispatch
                    configuration for the intended offtake route.
                  </span>
                </div>
                <div className="check">
                  <strong>Digestate management</strong>
                  <span>
                    Solid-liquid separation, storage and product handling for
                    organic manure or other approved outputs.
                  </span>
                </div>
              </div>

              <p>
                BIS identifies{" "}
                <strong style={{ color: "var(--ink)" }}>IS 16087:2016</strong> as
                the specification for biogas/biomethane used in automotive,
                piped-network, stationary and industrial applications. BIS also
                identifies{" "}
                <strong style={{ color: "var(--ink)" }}>IS 9478:2023</strong> for
                design, construction, installation and operation of
                biogas/biomethane plants.
              </p>
            </section>

            <section className="section">
              <span className="section-tag">04 / Site &amp; Infrastructure</span>
              <h2>
                Site Feasibility Can Change the Project Cost More Than Expected
              </h2>
              <p>
                A site should be evaluated as an operating location, not just as a
                piece of land. The feasibility study should examine feedstock
                access, road connectivity, water, electricity, drainage, process-
                and fire-safety requirements, gas dispatch route, digestate
                movement, future expansion and the distance between the plant and
                major feedstock sources.
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Site factor</th>
                      <th>What to examine</th>
                      <th>What can go wrong</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Feedstock radius</strong>
                      </td>
                      <td>
                        Distance, road quality, seasonal accessibility and
                        transport cost.
                      </td>
                      <td>
                        Plant is technically sound but receives insufficient or
                        expensive feedstock.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Land &amp; layout</strong>
                      </td>
                      <td>
                        Plant footprint, storage, internal roads, safety
                        distances, expansion and utility space.
                      </td>
                      <td>
                        Late layout changes increase civil and equipment costs.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Utilities</strong>
                      </td>
                      <td>
                        Power, water, backup supply, process heat and drainage.
                      </td>
                      <td>
                        Production becomes unstable or utility cost is
                        underestimated.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Gas evacuation</strong>
                      </td>
                      <td>
                        Dispatch method, compression, cascade, trucking or
                        pipeline connectivity.
                      </td>
                      <td>
                        Gas is produced but cannot be moved to the buyer
                        economically.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Local approvals</strong>
                      </td>
                      <td>
                        Land use, local development, environmental and safety
                        requirements.
                      </td>
                      <td>
                        Construction starts before an important permission or
                        condition is understood.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Digestate route</strong>
                      </td>
                      <td>
                        Storage, processing, offtake and compliance for
                        solid/liquid by-products.
                      </td>
                      <td>
                        By-product becomes an operating bottleneck or unplanned
                        cost.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">05 / Market &amp; Revenue</span>
              <h2>A Feasible Plant Needs More Than Gas Production</h2>
              <p>
                The revenue model should include the sale of CBG and, where
                commercially and legally appropriate, value from digestate/organic
                manure and other eligible by-products. A project should not rely
                on optimistic output numbers: actual production depends on
                feedstock composition, biological stability, uptime, gas losses,
                upgrading efficiency and plant discipline.
              </p>

              <div className="feature-grid">
                <div className="feature-card">
                  <div className="label">Revenue 01</div>
                  <strong>CBG sales</strong>
                  <span>
                    The primary revenue stream. The model should use the
                    applicable offtake arrangement and current pricing framework.
                  </span>
                </div>
                <div className="feature-card">
                  <div className="label">Revenue 02</div>
                  <strong>Organic manure</strong>
                  <span>
                    Digestate can become a saleable product when quality,
                    classification and market arrangements are properly
                    established.
                  </span>
                </div>
                <div className="feature-card">
                  <div className="label">Revenue 03</div>
                  <strong>Carbon / environmental value</strong>
                  <span>
                    Potential additional value depends on project eligibility,
                    methodology, verification and market conditions.
                  </span>
                </div>
              </div>

              <div className="dark-box">
                <h3>Use sensitivity, not only one “best case”</h3>
                <p>
                  Model at least a base case and downside case for feedstock cost,
                  plant utilisation, CBG output, selling price, electricity,
                  maintenance, transport and working capital. A project that
                  survives reasonable downside conditions is more investable than
                  one that only works at 100% utilisation.
                </p>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">
                06 / Project Cost &amp; Financial Feasibility
              </span>
              <h2>What a Bankable CBG Financial Model Should Include</h2>
              <p>
                Published project-report frameworks commonly include land and site
                development, buildings, plant and machinery, other fixed assets,
                pre-operative expenses, contingencies, working capital, production
                schedules, operating costs, projected sales and financial ratios
                such as break-even, DSCR, ROI and payback.
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Financial block</th>
                      <th>What should be calculated</th>
                      <th>Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>CAPEX</strong>
                      </td>
                      <td>
                        Land/site development, civil works, digesters, upgrading,
                        compression, storage, utilities, electricals, laboratory
                        and installation.
                      </td>
                      <td>
                        Defines the actual funding requirement and promoter
                        contribution.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Working capital</strong>
                      </td>
                      <td>
                        Feedstock inventory, operating expenses, wages, utilities,
                        maintenance and receivables/payables cycle.
                      </td>
                      <td>
                        Prevents a plant from running short of cash after
                        commissioning.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Production model</strong>
                      </td>
                      <td>
                        Feedstock throughput, biogas yield, methane recovery, CBG
                        output, plant utilisation and downtime.
                      </td>
                      <td>Drives the revenue forecast.</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>OPEX</strong>
                      </td>
                      <td>
                        Feedstock, transport, power, manpower, consumables,
                        maintenance, insurance and administration.
                      </td>
                      <td>
                        Shows the real operating margin, not just gross sales.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Debt service</strong>
                      </td>
                      <td>
                        Interest, principal repayment, moratorium and
                        lender-specific terms.
                      </td>
                      <td>
                        Tests whether the project can service debt from operating
                        cash flow.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Sensitivity</strong>
                      </td>
                      <td>
                        Downside cases for output, utilisation, feedstock cost,
                        price and operating expenses.
                      </td>
                      <td>Shows where the project is financially fragile.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="disclaimer">
                Third-party project-report sources sometimes publish illustrative
                costs, returns or capacity examples. Those numbers should not be
                copied into a new CBG project's financial plan without validating
                the technology, state, feedstock and current vendor quotations.
                For example, NIIR's published profile shows a specific
                illustrative project and explicitly warns that project cost,
                capacity and return can change.
              </p>
            </section>

            <section className="section">
              <span className="section-tag">
                07 / Government &amp; Market Context
              </span>
              <h2>Why Feasibility Matters Even More in Today's CBG Market</h2>
              <p>
                The market is moving from policy ambition to actual project
                deployment. PIB reported that, as of 13 August 2026, 1,929
                CBG/Bio-CNG plants had been registered nationally, 217 had been
                commissioned and 357 were under construction. The same update
                reported that the National Circular Bioenergy Scheme/GOBARdhan has
                a ₹23,731 crore outlay for FY 2026–27 to FY 2035–36.
              </p>
              <p>
                This makes feasibility more important, not less. A larger project
                pipeline means promoters can learn from operating plants — but it
                also means feedstock sourcing, technology selection, EPC scope,
                offtake, compliance and financing need to be evaluated with real
                project discipline.
              </p>
            </section>

            <section className="section">
              <span className="section-tag">08 / New Industry Promoters</span>
              <h2>
                Coming From Another Industry? These Are the Feasibility Problems
                You May Face
              </h2>
              <p>
                A successful entrepreneur in manufacturing, trading, agriculture,
                logistics or real estate may be comfortable with land and
                investment decisions, yet still underestimate the biological and
                regulatory complexity of CBG. The following issues show up
                repeatedly when a project is started from a different industry.
              </p>
              <div className="split">
                <div className="issue-list">
                  <div className="issue">
                    <strong>
                      “The feedstock is free, so the plant must be profitable.”
                    </strong>
                    <span>
                      Collection, sorting, transport, storage, contamination and
                      seasonal gaps can make “free” feedstock expensive.
                    </span>
                  </div>
                  <div className="issue">
                    <strong>
                      “The vendor has already told me the gas output.”
                    </strong>
                    <span>
                      Output should be independently tested against feedstock
                      data, process assumptions, uptime and losses.
                    </span>
                  </div>
                  <div className="issue">
                    <strong>
                      “I will decide the site after choosing machinery.”
                    </strong>
                    <span>
                      Site constraints can change layout, storage, utilities,
                      transport and approval requirements.
                    </span>
                  </div>
                  <div className="issue">
                    <strong>“The project report is enough.”</strong>
                    <span>
                      A report is useful only when its assumptions match
                      contracts, quotations, land, technology and current policy.
                    </span>
                  </div>
                  <div className="issue">
                    <strong>“I can sort compliance later.”</strong>
                    <span>
                      Late compliance discoveries can force redesign, new costs or
                      delays in financing and construction.
                    </span>
                  </div>
                </div>
                <div className="card">
                  <h3>The better approach</h3>
                  <p>
                    Treat feasibility as a decision gate. Move to the next stage
                    only when feedstock, site, technology, commercial linkage,
                    cost and approvals are sufficiently validated.
                  </p>
                  <p>
                    This protects the promoter from spending first and discovering
                    project constraints later.
                  </p>
                </div>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">09 / EPR Nexuss Support</span>
              <h2>
                How EPR Nexuss Helps With CBG Project Planning, Feasibility &amp;
                Compliance
              </h2>
              <p>
                Many promoters can find a project report online. The difficult
                part is turning a generic report into a project that matches the
                promoter's actual feedstock, site, technology, financing strategy
                and approvals. EPR Nexuss focuses on coordination so the project
                plan is practical before the promoter commits major capital.
              </p>

              <div className="lead-grid">
                <article className="card">
                  <div className="num">01</div>
                  <h3>Project screening</h3>
                  <p>
                    Review the proposed business model, feedstock, capacity, site,
                    end-use and investment approach before the project is
                    finalised.
                  </p>
                </article>
                <article className="card">
                  <div className="num">02</div>
                  <h3>Feasibility coordination</h3>
                  <p>
                    Help organise technical, commercial and financial inputs so
                    that the DPR reflects the actual project rather than a generic
                    template.
                  </p>
                </article>
                <article className="card">
                  <div className="num">03</div>
                  <h3>Registration &amp; compliance mapping</h3>
                  <p>
                    Coordinate applicable registrations, consents and supporting
                    documentation so the compliance pathway is considered during
                    planning.
                  </p>
                </article>
                <article className="card">
                  <div className="num">04</div>
                  <h3>Bank / investor readiness</h3>
                  <p>
                    Help align project cost, funding requirement, promoter
                    contribution, agreements and financial assumptions for lender
                    or investor discussions.
                  </p>
                </article>
              </div>

              <div className="dark-box">
                <h3>Why fragmented consultants cost more than they appear to</h3>
                <p>
                  One party may prepare a DPR, another chooses the machinery, a
                  third handles registration and a fourth talks to the bank. When
                  the capacity, project cost or feedstock assumptions change
                  between these workstreams, the promoter pays in rework. EPR
                  Nexuss aims to keep a common project narrative across planning,
                  compliance and financing.
                </p>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">10 / Execution Roadmap</span>
              <h2>From Feasibility to a CBG Plant You Can Actually Operate</h2>
              <div className="timeline">
                <div className="trow">
                  <div className="tnum">01</div>
                  <div className="tbody">
                    <strong>Define the project</strong>
                    <span>
                      Feedstock, site, target capacity, business model, offtake
                      and promoter investment.
                    </span>
                  </div>
                </div>
                <div className="trow">
                  <div className="tnum">02</div>
                  <div className="tbody">
                    <strong>Validate the assumptions</strong>
                    <span>
                      Feedstock testing, technology fit, logistics, utility
                      availability and initial cost benchmarks.
                    </span>
                  </div>
                </div>
                <div className="trow">
                  <div className="tnum">03</div>
                  <div className="tbody">
                    <strong>Build the feasibility model</strong>
                    <span>
                      DPR, production model, CAPEX/OPEX, working capital, cash
                      flow, sensitivity and financing structure.
                    </span>
                  </div>
                </div>
                <div className="trow">
                  <div className="tnum">04</div>
                  <div className="tbody">
                    <strong>Map registrations &amp; compliance</strong>
                    <span>
                      Identify applicable approvals and prepare documentation
                      before construction decisions become irreversible.
                    </span>
                  </div>
                </div>
                <div className="trow">
                  <div className="tnum">05</div>
                  <div className="tbody">
                    <strong>Finance &amp; execute</strong>
                    <span>
                      Coordinate lender/investor discussions, vendor scope,
                      construction and commissioning around the approved project.
                    </span>
                  </div>
                </div>
                <div className="trow">
                  <div className="tnum">06</div>
                  <div className="tbody">
                    <strong>Operate and optimise</strong>
                    <span>
                      Monitor feedstock, uptime, gas quality, maintenance,
                      digestate and financial performance after commissioning.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">11 / Frequently Asked Questions</span>
              <h2>
                Client-Impressive FAQs on CBG Project Planning &amp; Feasibility
              </h2>
              <div className="faq-list">
                <details open>
                  <summary>What is a CBG feasibility study?</summary>
                  <p>
                    It is a structured assessment of whether the proposed CBG
                    project is technically, commercially, financially and
                    regulatorily workable. It normally covers feedstock, process
                    technology, site, machinery, CAPEX, OPEX, revenue, working
                    capital, financing, risks and implementation.
                  </p>
                </details>
                <details>
                  <summary>
                    How do I know whether my feedstock is sufficient for a CBG
                    plant?
                  </summary>
                  <p>
                    Do not rely only on annual availability. Assess monthly
                    availability, moisture and solids, contamination, transport
                    distance, competing uses, price and a realistic contracted
                    supply quantity. A plant should be sized against dependable
                    feedstock rather than the theoretical maximum.
                  </p>
                </details>
                <details>
                  <summary>How much does a CBG plant cost?</summary>
                  <p>
                    There is no single market-wide number. Cost changes with
                    capacity, feedstock pre-treatment, digestion technology,
                    gas-upgrading system, compression/storage, civil works,
                    utilities, automation, land and local conditions. Published
                    project-report examples are illustrative and must be replaced
                    with project-specific vendor quotations and engineering.
                  </p>
                </details>
                <details>
                  <summary>
                    Can I use a standard project report downloaded from the
                    internet?
                  </summary>
                  <p>
                    It can be a useful reference, but it should not automatically
                    be treated as the financial model for your project. Your
                    feedstock, capacity, site, state, vendor quotations,
                    approvals, financing terms and offtake conditions may all be
                    different.
                  </p>
                </details>
                <details>
                  <summary>
                    What should be included in a bankable CBG DPR?
                  </summary>
                  <p>
                    At a minimum, the report should connect project background,
                    market, feedstock, technology, machinery, site, utilities,
                    manpower, implementation schedule, CAPEX, working capital,
                    OPEX, revenue, cash flow, debt service and sensitivity
                    analysis. Lenders may request additional project- and
                    promoter-specific information.
                  </p>
                </details>
                <details>
                  <summary>Is CBG feasibility only about profit?</summary>
                  <p>
                    No. A project can look profitable on paper and still fail
                    because of feedstock supply, poor uptime, gas-quality
                    problems, approval delays, high logistics costs or
                    insufficient working capital. Feasibility should identify
                    these risks before investment.
                  </p>
                </details>
                <details>
                  <summary>
                    Can a person from another industry start a CBG plant?
                  </summary>
                  <p>
                    Yes, but the promoter should add specialist support for
                    process engineering, feedstock validation, gas systems,
                    safety, compliance and project finance. Entering a new
                    industry without understanding those areas can make the
                    project more expensive than expected.
                  </p>
                </details>
                <details>
                  <summary>
                    When should I start compliance and registration work?
                  </summary>
                  <p>
                    As early as the planning stage. Site, land use,
                    pollution-control requirements, safety and other approvals can
                    affect plant layout, cost and timelines. Starting late can
                    lead to redesign or delays.
                  </p>
                </details>
                <details>
                  <summary>
                    Can EPR Nexuss guarantee project feasibility or profitability?
                  </summary>
                  <p>
                    No. A professional feasibility process should be
                    evidence-based, not a guarantee. EPR Nexuss can help structure
                    the feasibility, documentation, registration and compliance
                    work so the promoter can make an informed investment decision.
                  </p>
                </details>
                <details>
                  <summary>
                    What makes EPR Nexuss different from a company that only
                    prepares a DPR?
                  </summary>
                  <p>
                    EPR Nexuss focuses on the full project pathway: planning,
                    feasibility, registration, compliance and financing readiness.
                    The objective is to keep the assumptions consistent across
                    documents so that the promoter spends less time correcting one
                    document because another part of the project changed.
                  </p>
                </details>
              </div>
            </section>

            <div className="cta">
              <h2>Thinking About a CBG Project?</h2>
              <p>
                Before buying land, equipment or committing capital, test the
                project properly. EPR Nexuss can help you structure the
                feasibility and project-planning process, align registrations and
                compliance, and prepare the project for financing and execution
                discussions.
              </p>
              <a className="cta-btn" href="tel:+919289659966">
                Talk to EPR Nexuss →
              </a>
            </div>

            <div className="source-note">
              <p>
                <strong>Research note:</strong> The article combines current
                government information with industry project-report structures.
                Project costs, output, profitability and timelines vary by
                technology, feedstock, capacity, site and commercial terms. They
                should be validated before financial commitment.
              </p>
              <p>
                <strong>Government references:</strong>
              </p>
              <p>
                •{" "}
                <a
                  href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2298869&lang=2&reg=48"
                  target="_blank"
                  rel="noopener"
                >
                  PIB — Bio-Energy update, 13 August 2026: 1,929 registered
                  CBG/Bio-CNG plants, 217 commissioned and 357 under
                  construction.
                </a>
              </p>
              <p>
                •{" "}
                <a
                  href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2295494&lang=2&reg=48"
                  target="_blank"
                  rel="noopener"
                >
                  PIB — GOBARdhan National Circular Bioenergy Scheme, approved 6
                  August 2026.
                </a>
              </p>
              <p>
                •{" "}
                <a
                  href="https://services.bis.gov.in/php/BIS_2.0/bisconnect/standard_review/Standard_review/Isdetails?ID=MjA3"
                  target="_blank"
                  rel="noopener"
                >
                  BIS — IS 16087:2016, Biogas (Biomethane) Specification.
                </a>
              </p>
              <p>
                •{" "}
                <a
                  href="https://www.bis.gov.in/wp-content/uploads/2024/10/Brochure-Biogas-Plants.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  BIS — Biogas plant standards brochure, including IS 9478:2023
                  and IS 16087:2016.
                </a>
              </p>
              <p>
                <strong>Industry references reviewed:</strong>{" "}
                <a
                  href="https://www.synod.in/compressed-biogas-project/"
                  target="_blank"
                  rel="noopener"
                >
                  Synod
                </a>
                ,{" "}
                <a
                  href="https://shardaassociates.in/pr-samples/compressed-bio-gas-plant-project/"
                  target="_blank"
                  rel="noopener"
                >
                  Sharda Associates
                </a>
                ,{" "}
                <a
                  href="https://www.niir.org/profile-project-reports/profile/1342/compressed-biogas-manufacturing-plant-detailed-project-report-profile-business-plan-industry-trends-market-research-survey-manufacturing-process-machinery-raw-materials-feasibility-study-investment-opportunities-cost-revenue.html"
                  target="_blank"
                  rel="noopener"
                >
                  NIIR Project Consultancy
                </a>
                ,{" "}
                <a
                  href="https://www.pmfias.com/compressed-biogas-sector/"
                  target="_blank"
                  rel="noopener"
                >
                  PMF IAS
                </a>
                ,{" "}
                <a
                  href="https://www.scribd.com/presentation/764074268/Compressed-Biogas-CBG-Production-Plant-a-Detailed-Project-Report"
                  target="_blank"
                  rel="noopener"
                >
                  Scribd presentation
                </a>
                .
              </p>
            </div>
          </main>

          {/* ── STICKY SIDEBAR ── */}
          <aside
            className="hidden lg:block"
            style={{
              position: "sticky",
              top: "8rem",
              width: "320px",
              flexShrink: 0,
              alignSelf: "start",
            }}
          >
            <StickyContactForm />
          </aside>
        </div>

        <footer>
          <div className="footer-grid">
            <div>
              <h3>EPR Nexuss</h3>
              <p>
                Support for CBG project planning, feasibility, documentation,
                registration and compliance.
              </p>
            </div>
            <div className="contact">
              <p>
                <b>Mobile</b>
                <br />
                <a href="tel:+919289659966">+91 9289659966</a>
              </p>
            </div>
            <div className="contact">
              <p>
                <b>Website</b>
                <br />
                <a
                  href="https://www.eprnexuss.com"
                  target="_blank"
                  rel="noopener"
                >
                  www.eprnexuss.com
                </a>
              </p>
              <p>
                <b>Email</b>
                <br />
                <a href="mailto:info@eprnexuss.com">info@eprnexuss.com</a>
              </p>
            </div>
          </div>
          <div className="copyright">
            © 2026 EPR Nexuss. For general information only. Project cost,
            feasibility, approvals, incentives and commercial results depend on
            the specific CBG project and current applicable rules.
          </div>
        </footer>
      </div>
    </>
  );
};

export default CBGProjectFeasibility;