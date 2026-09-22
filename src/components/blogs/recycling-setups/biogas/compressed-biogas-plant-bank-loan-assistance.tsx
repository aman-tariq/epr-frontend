import React from 'react';
import StickyContactForm from '@/components/StickyContactForm';
export default function CBGLoanAssistance() {
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
          --radius:32px;
        }
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{
          margin:0;background:var(--bg);color:var(--ink);
          font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
          line-height:1.7;
        }
        a{color:inherit}
        .page{max-width:1780px;margin:26px auto;padding:0 22px}
        .shell{display:grid;grid-template-columns:minmax(0,1fr) 313px;gap:34px;align-items:start}
        .shell > * {margin-top: 100px; align-self: start;}
        .main,.side{background:var(--paper);border:1px solid #d9e2de;border-radius:32px;box-shadow:var(--shadow)}
        .main{padding:68px 74px 74px}
        .side{padding:60px 56px;position:sticky;top:24px;background:#082f23;color:#fff;min-height:780px;overflow:hidden}
        .eyebrow{
          display:inline-flex;padding:11px 22px;border-radius:999px;background:var(--soft);
          color:var(--ink);font-size:14px;letter-spacing:.14em;font-weight:800;text-transform:uppercase
        }
        h1,h2,h3{line-height:1.06;margin:0 0 18px;letter-spacing:-.03em}
        h1{font-size:clamp(52px,5.35vw,90px);max-width:980px;margin-top:38px}
        h2{font-size:clamp(32px,3vw,46px)}
        h3{font-size:23px}
        p{font-size:18px;color:var(--muted);margin:0 0 20px}
        .intro{margin-top:30px;max-width:1050px;font-size:20px;line-height:1.9}
        .facts{grid-template-columns:repeat(3,1fr);gap:0;margin:34px 0 46px;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .fact{padding:20px 24px 20px 0;border-right:1px solid var(--line)}
        .fact:nth-child(2){padding-left:24px}.fact:last-child{border-right:0;padding-left:24px}
        .fact strong{display:block;font-size:30px;color:var(--ink);margin-bottom:3px}
        .fact span{font-size:14px;color:var(--muted);line-height:1.55}
        .lead-grid{/*display:grid*/;grid-template-columns:repeat(2,1fr);gap:20px;margin:30px 0 50px}
        .card{border:1px solid var(--line);border-radius:22px;padding:28px;background:linear-gradient(180deg,#fff,#f8fbf9)}
        .card p{font-size:16px;line-height:1.6}
        .num{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:var(--soft);font-weight:800;margin-bottom:18px}
        .section{margin:68px 0}
        .section > p{max-width:1020px}
        .section-tag{display:inline-block;margin-bottom:12px;color:var(--ink2);font-size:13px;letter-spacing:.16em;text-transform:uppercase;font-weight:850}
        .flow{/*display:grid*/;grid-template-columns:repeat(5,1fr);gap:10px;margin:28px 0 10px}
        .flow-step{padding:18px 14px;background:var(--soft);border-radius:17px;min-height:112px;font-weight:800;font-size:14px}
        .flow-step small{display:block;font-weight:500;color:var(--muted);margin-top:7px;line-height:1.45}
        .dark-box{margin-top:28px;padding:30px;border-radius:24px;background:var(--ink);color:#fff}
        .dark-box p{color:#d6e7df}.pill{display:inline-block;padding:9px 14px;border:1px solid rgba(255,255,255,.18);border-radius:999px;font-size:13px;font-weight:800;margin:4px 6px 0 0}
        .split{/*display:grid*/;grid-template-columns:1.1fr .9fr;gap:26px;align-items:start;margin-top:28px}
        .issue-list{display:grid;gap:12px}
        .issue{padding:17px 18px;border:1px solid var(--line);border-radius:16px;background:#fff}
        .issue strong{display:block;margin-bottom:3px}.issue span{font-size:15px;color:var(--muted)}
        .loan-grid{/*display:grid*/;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:26px}
        .loan-card{border:1px solid var(--line);border-radius:20px;padding:22px;background:#fbfcfb}
        .loan-card .label{font-size:12px;font-weight:850;letter-spacing:.1em;text-transform:uppercase;color:var(--ink2)}
        .loan-card strong{display:block;font-size:28px;line-height:1.15;margin:8px 0}
        .loan-card span{font-size:14px;color:var(--muted)}
        .table-wrap{overflow:auto;border:1px solid var(--line);border-radius:20px}
        table{border-collapse:collapse;width:100%;min-width:850px;background:#fff}
        th,td{padding:16px 18px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}
        th{font-size:14px;letter-spacing:.03em;background:var(--soft)} td{font-size:15px;color:#3d5569} tr:last-child td{border-bottom:0}
        .checklist{/*display:grid*/;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:24px}
        .check{padding:17px 18px;border:1px solid var(--line);border-radius:16px;background:#fff}
        .check strong{display:block;margin-bottom:4px}.check span{font-size:15px;color:var(--muted)}
        .timeline{display:grid;gap:0;margin-top:28px}
        .trow{/*display:grid*/;grid-template-columns:74px 1fr;gap:18px}
        .tnum{width:48px;height:48px;border-radius:50%;background:var(--soft);display:grid;place-items:center;font-weight:900;position:relative}
        .trow:not(:last-child) .tnum:after{content:"";position:absolute;top:48px;left:23px;width:2px;height:74px;background:var(--line)}
        .tbody{padding:3px 0 32px}.tbody strong{display:block;font-size:18px;margin-bottom:3px}.tbody span{font-size:15px;color:var(--muted)}
        .faq-list{display:grid;gap:12px;margin-top:28px}
        details{border:1px solid var(--line);border-radius:18px;background:#fff;overflow:hidden}
        summary{cursor:pointer;list-style:none;padding:20px 52px 20px 22px;position:relative;font-weight:850;font-size:17px;color:var(--ink)}
        summary::-webkit-details-marker{display:none}
        summary:after{content:"+";position:absolute;right:20px;top:14px;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:var(--soft);color:var(--ink);font-size:22px;font-weight:500}
        details[open] summary:after{content:"−"}
        details p{margin:0;padding:0 22px 22px;font-size:16px;max-width:1000px}
        .cta{padding:40px;border-radius:26px;background:linear-gradient(135deg,#eaf3ee,#f8fbf9);border:1px solid var(--line);margin-top:52px}
        .cta p{max-width:900px}.cta-btn{display:inline-flex;margin-top:10px;text-decoration:none;padding:14px 20px;border-radius:999px;background:var(--ink);color:#fff;font-weight:850}
        .side-eyebrow{display:inline-block;padding:9px 15px;border:1px solid rgba(255,255,255,.18);border-radius:999px;color:#dcece5;font-size:12px;letter-spacing:.12em;font-weight:800;margin-bottom:28px}
        .side h2{font-size:clamp(44px,4vw,66px);max-width:480px;line-height:1.06}
        .side p{color:#d7e7e0;line-height:1.85;font-size:18px}
        .side .mini-rule{height:1px;background:rgba(255,255,255,.18);margin:26px 0}
        .side-list{display:grid;gap:12px;margin:0;padding:0;list-style:none}
        .side-list li{padding:14px 0;border-bottom:1px solid rgba(255,255,255,.12);color:#eef6f2}
        .side-list strong{display:block}
        .side .tagline{position:absolute;left:56px;right:56px;bottom:34px;font-size:13px;color:#b9d4c8;letter-spacing:.08em;text-transform:uppercase;font-weight:800}
        .source-note{margin-top:44px;padding-top:24px;border-top:1px solid var(--line)}
        .source-note p{font-size:13px;margin-bottom:8px}.source-note a{color:var(--ink2);text-decoration:none}
        footer{margin-top:28px;padding:36px 42px;border-radius:26px;background:var(--ink);color:#fff}
        .footer-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:26px;align-items:start}
        footer h3{font-size:22px} footer p,footer a{color:#d1e3dc;font-size:15px;text-decoration:none}
        .contact{display:grid;gap:9px}.contact b{color:#fff}
        .copyright{border-top:1px solid rgba(255,255,255,.14);margin-top:24px;padding-top:18px;font-size:12px;color:#aecbc0}
        .disclaimer{font-size:12px!important;color:#7a8d9b!important}
        @media(max-width:1200px){.shell{grid-template-columns:1fr}.side{position:relative;top:auto;min-height:unset}.side .tagline{position:static;margin-top:28px}}
        @media(max-width:860px){.main{padding:48px 34px}.loan-grid{grid-template-columns:1fr 1fr}.checklist{grid-template-columns:1fr}.facts{grid-template-columns:1fr}.fact,.fact:nth-child(2),.fact:last-child{padding:18px 0;border-right:0;border-bottom:1px solid var(--line)}.fact:last-child{border-bottom:0}.flow{grid-template-columns:1fr 1fr}.split{grid-template-columns:1fr}}
        @media(max-width:640px){.page{padding:0 10px;margin:10px auto}.main,.side{border-radius:22px}.main{padding:32px 22px}.side{padding:32px 24px}h1{font-size:48px;line-height:1.02}.intro{font-size:18px;line-height:1.75}p{font-size:16px}.lead-grid,.loan-grid{grid-template-columns:1fr}.flow{grid-template-columns:1fr}.flow-step{min-height:auto}.footer-grid{grid-template-columns:1fr}footer{padding:28px 22px}.cta{padding:28px 22px}.side h2{font-size:40px}}
      `}</style>

      <div className="page">
        <div className="shell">
          <main className="main">
            <span className="eyebrow">CBG FINANCE • SATAT • INDIA</span>
            <h1>Compressed Bio Gas Plant Bank Loan Assistance</h1>
            <p className="intro">
              A CBG plant is a capital-intensive project, and getting the right bank loan is often as important as selecting
              the right technology. Lenders typically want to see a workable project, identified feedstock, credible offtake,
              promoter contribution, realistic financial projections, security structure and the statutory approvals required
              for the project. This guide explains how CBG financing works in practice and where EPR Nexuss can help.
            </p>

            <div className="facts">
              <div className="fact">
                <strong>₹50 Cr</strong>
                <span>SBI's published SATAT CBG product: maximum loan quantum handled by R&amp;DB; amounts above ₹50 crore are handled by CCG.</span>
              </div>
              <div className="fact">
                <strong>70%</strong>
                <span>IREDA's current CBG product states a maximum financing limit of up to 70% of project cost.</span>
              </div>
              <div className="fact">
                <strong>10–15 yrs</strong>
                <span>Published bank schemes show long repayment structures, subject to the lender, project and offtake agreement.</span>
              </div>
            </div>

            <div className="lead-grid">
              <article className="card"><div className="num">01</div><h3>Build the loan case</h3><p>Turn the business idea into a lender-ready project: capacity, feedstock, site, technology, revenue model, cost and repayment capacity.</p></article>
              <article className="card"><div className="num">02</div><h3>Get the commercial linkage right</h3><p>Under published SATAT financing products, an OMC Letter of Intent or offtake arrangement can be a key pre-condition for processing finance.</p></article>
              <article className="card"><div className="num">03</div><h3>Prepare approvals and documents</h3><p>Loan appraisal becomes easier when the project entity, land, approvals, quotations, agreements and financial records tell one consistent story.</p></article>
              <article className="card"><div className="num">04</div><h3>Plan promoter contribution</h3><p>Loan does not mean zero investment. Margin, equity contribution, working capital and project contingencies must be planned before approaching the bank.</p></article>
            </div>

            <section className="section">
              <span className="section-tag">01 / How Financing Works</span>
              <h2>Compressed Bio Gas Plant Bank Loan Assistance — What Banks Actually Look At</h2>
              <p>
                CBG finance is closer to project finance than a conventional small-business loan. A lender is assessing whether
                the proposed plant can be built, commissioned and operated long enough to generate predictable cash flows.
                The bank therefore looks beyond the promoter's profile and examines the project itself.
              </p>

              <div className="flow">
                <div className="flow-step">Project<br />Concept<small>Capacity, feedstock and site</small></div>
                <div className="flow-step">Commercial<br />Linkage<small>OMC LOI / offtake</small></div>
                <div className="flow-step">Technical &amp;<br />Financial Model<small>Cost, output, DSCR, cash flow</small></div>
                <div className="flow-step">Credit<br />Appraisal<small>Margin, security, promoter strength</small></div>
                <div className="flow-step">Sanction &amp;<br />Disbursement<small>Milestones and conditions</small></div>
              </div>

              <div className="dark-box">
                <h3>A strong loan file answers five questions</h3>
                <p>
                  <strong style={{ color: "#fff" }}>What will you process?</strong>  
                  <strong style={{ color: "#fff" }}>Where will the feedstock come from?</strong>
                  <strong style={{ color: "#fff" }}>Who will buy the CBG?</strong>
                  <strong style={{ color: "#fff" }}>How much will the project cost?</strong>
                  <strong style={{ color: "#fff" }}>How will the loan be repaid?</strong>
                </p>
                <span className="pill">Feedstock</span><span className="pill">Offtake</span><span className="pill">Project cost</span><span className="pill">Cash flow</span><span className="pill">Security</span>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">02 / Eligibility</span>
              <h2>CBG Loan Eligibility and Core Criteria</h2>
              <p>
                Eligibility differs by lender. Indian Bank's current SATAT CBG scheme is for entrepreneurs including individuals/sole
                proprietors, partnerships, companies and cooperative societies that have received OMC LOIs; Indian Bank states that
                obtaining the LOI is a pre-condition for processing the loan. SBI's published CBG product similarly requires an OMC LOI.
                IREDA's dedicated CBG product goes further by requiring an OMC sale contract with a 100% offtake guarantee and a legally
                binding raw-material purchase agreement with a tenure extending beyond the loan duration.
              </p>

              <div className="loan-grid">
                <div className="loan-card"><div className="label">Commercial</div><strong>OMC LOI / Offtake</strong><span>Published SATAT products treat the buyer/offtake linkage as a core credit requirement.</span></div>
                <div className="loan-card"><div className="label">Feedstock</div><strong>Supply Agreement</strong><span>Lenders need confidence that the plant will receive sufficient raw material for the project life.</span></div>
                <div className="loan-card"><div className="label">Promoter</div><strong>Equity + Margin</strong><span>The promoter must bring the required contribution and satisfy the lender's margin conditions.</span></div>
                <div className="loan-card"><div className="label">Technical</div><strong>Bankable DPR</strong><span>Technology, plant capacity, output, costs and implementation schedule should be internally consistent.</span></div>
                <div className="loan-card"><div className="label">Security</div><strong>Primary + Collateral</strong><span>Security can include project assets and, depending on the case, collateral or other acceptable structures.</span></div>
                <div className="loan-card"><div className="label">Compliance</div><strong>Approvals Roadmap</strong><span>The application should reflect the actual statutory and environmental pathway for the proposed plant.</span></div>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">03 / Published Financing Examples</span>
              <h2>What Current Bank &amp; IREDA Schemes Say</h2>
              <p>
                The figures below are not a promise of sanction. They are examples taken from current or published official
                financing pages and show why comparing lenders matters. Final pricing, collateral, appraisal and sanction depend
                on the borrower and the project.
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Financier / Scheme</th><th>Published criteria</th><th>Published financing terms</th><th>Important point</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>State Bank of India</strong><br />SATAT CBG</td>
                      <td>Entrepreneurs with OMC LOI; LOI is a pre-condition for processing.</td>
                      <td>Up to ₹50 crore handled by R&amp;DB; above ₹50 crore by CCG. Minimum 30% term-loan margin; minimum 25% working-capital margin.</td>
                      <td>Term loan repayable over 10–12 years; overall door-to-door tenor cannot exceed the offtake agreement tenor, stated as 15 years and extendable by mutual consent.</td>
                    </tr>
                    <tr>
                      <td><strong>Indian Bank</strong><br />SATAT CBG</td>
                      <td>Minimum designed CBG capacity of 2.0 TPD; eligible entities include individuals/sole proprietors, partnerships, companies and cooperative societies with OMC LOI.</td>
                      <td>Up to ₹100 crore per borrower from the banking system can be classified under Priority Sector–Agriculture; 25% term-loan margin; 30% working-capital margin.</td>
                      <td>Term loan repayable in 10–15 years; moratorium stated as minimum 6 months and maximum 2 years.</td>
                    </tr>
                    <tr>
                      <td><strong>IREDA</strong><br />CBG under SATAT</td>
                      <td>OMC sale contract with 100% offtake guarantee plus legally binding raw-material purchase agreement; other IREDA norms apply.</td>
                      <td>Loan limit up to 70% of project cost; debt-equity ratio 70:30; interest as per IREDA policy.</td>
                      <td>Loan tenure up to 10 years excluding moratorium/construction period or 80% of the CBG sale-contract life, whichever is less; moratorium up to 1 year and construction period up to 1.5 years.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">04 / Documents</span>
              <h2>Documents Normally Needed for a CBG Loan File</h2>
              <p>
                Exact checklists vary by lender and project. A promoter should expect the bank to ask for documents that establish
                identity, ownership, technical feasibility, project cost, cash generation, statutory compliance and the commercial
                agreements behind the revenue model.
              </p>
              <div className="checklist">
                <div className="check"><strong>Constitution documents</strong><span>Company/LLP/partnership/individual records, KYC and promoter profiles.</span></div>
                <div className="check"><strong>Land and site papers</strong><span>Ownership or lease documents, site details and relevant land-use/site permissions.</span></div>
                <div className="check"><strong>Detailed Project Report</strong><span>Capacity, process, technology, layout, capex, opex, production assumptions and implementation schedule.</span></div>
                <div className="check"><strong>OMC commercial linkage</strong><span>LOI / sale contract / offtake documentation, as required by the lender and SATAT structure.</span></div>
                <div className="check"><strong>Feedstock agreement</strong><span>Supply contracts or legally binding arrangements demonstrating adequate raw-material availability.</span></div>
                <div className="check"><strong>Machinery quotations</strong><span>Technology vendor quotations, specifications, scope of supply, warranties and payment schedules.</span></div>
                <div className="check"><strong>Financial model</strong><span>Project cost, means of finance, revenue, expenses, debt service, sensitivity and cash-flow projections.</span></div>
                <div className="check"><strong>Compliance records</strong><span>Applications/approvals and the applicable registration or consent pathway for the project.</span></div>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">05 / First-Time Promoters</span>
              <h2>Starting CBG After Coming From Another Industry? The Financing Problems Are Different</h2>
              <p>
                A promoter who has successfully run a manufacturing, trading, agriculture, logistics or other business may still
                face a learning curve in CBG finance. The bank is not only funding machinery; it is funding a biological and
                industrial process whose performance depends on feedstock quality, operating discipline, gas upgrading, safety,
                maintenance and long-term commercial arrangements.
              </p>
              <div className="split">
                <div className="issue-list">
                  <div className="issue"><strong>“I have capital, but I don't have a CBG track record.”</strong><span>The lender may need stronger technical, promoter and project evidence to compensate for limited sector history.</span></div>
                  <div className="issue"><strong>“The EPC vendor gave me a quotation — why isn't the loan ready?”</strong><span>A bank still needs a complete project story: feedstock, land, output, offtake, approvals, cost and repayment capacity.</span></div>
                  <div className="issue"><strong>“I have feedstock available, but nothing is formally documented.”</strong><span>Informal assurances may not carry the same weight as the contracts and evidence required for appraisal.</span></div>
                  <div className="issue"><strong>“I assumed the subsidy would reduce my upfront equity.”</strong><span>Financial assistance can have specific conditions, timing and treatment. It should not be booked as immediate cash before eligibility and disbursement rules are confirmed.</span></div>
                  <div className="issue"><strong>“I approached several banks with different numbers.”</strong><span>Inconsistent project cost, capacity or cash-flow assumptions can create avoidable questions and slow down the appraisal.</span></div>
                </div>
                <div className="card">
                  <h3>The solution: prepare once, use consistently</h3>
                  <p>
                    The core project facts should remain consistent across the DPR, bank application, quotations,
                    offtake documents, feedstock agreements and registration filings.
                  </p>
                  <p>
                    This is where professional coordination can save time: the objective is not to “push a loan” but to
                    make the project understandable and credit-ready.
                  </p>
                </div>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">06 / EPR Nexuss</span>
              <h2>How EPR Nexuss Supports Bank Loan, Registration &amp; Compliance</h2>
              <p>
                Many promoters lose time because loan documentation, plant registration and compliance work are handled by
                different people without a common project file. EPR Nexuss brings these workstreams together so the information
                used for financing and the information used for regulatory submissions is properly aligned.
              </p>

              <div className="lead-grid">
                <article className="card"><div className="num">A</div><h3>Loan-readiness assessment</h3><p>Review the proposed capacity, promoter profile, site, feedstock, offtake, project cost and finance requirement before the application is presented.</p></article>
                <article className="card"><div className="num">B</div><h3>DPR &amp; financial coordination</h3><p>Help structure the technical and financial information needed to communicate the project clearly to a lender.</p></article>
                <article className="card"><div className="num">C</div><h3>Bank loan facilitation</h3><p>Support the promoter with lender documentation, coordination, clarifications and submission tracking. Loan sanction remains subject to the lender's independent appraisal.</p></article>
                <article className="card"><div className="num">D</div><h3>Registration &amp; compliance</h3><p>Coordinate the applicable registrations, consents and project compliance documentation so the regulatory story matches the financed project.</p></article>
              </div>

              <div className="dark-box">
                <h3>Why clients lose money when the process is fragmented</h3>
                <p>
                  A promoter may pay for a DPR, then redesign it after a bank asks for a different capacity; purchase machinery
                  before an approval condition is clear; or discover that the feedstock agreement does not support the financial
                  model. EPR Nexuss focuses on sequencing and coordination so that decisions are made with the whole project in view.
                </p>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">07 / Financing Journey</span>
              <h2>From Business Idea to Bank Disbursement</h2>
              <div className="timeline">
                <div className="trow"><div className="tnum">01</div><div className="tbody"><strong>Initial project screening</strong><span>Understand feedstock, location, target capacity, promoter contribution and intended offtake.</span></div></div>
                <div className="trow"><div className="tnum">02</div><div className="tbody"><strong>Commercial and technical groundwork</strong><span>Build the project concept, technology plan, cost estimate, OMC linkage and feedstock arrangements.</span></div></div>
                <div className="trow"><div className="tnum">03</div><div className="tbody"><strong>DPR + compliance mapping</strong><span>Prepare the core project file and map registrations, consents, safety and other applicable approvals.</span></div></div>
                <div className="trow"><div className="tnum">04</div><div className="tbody"><strong>Bank submission &amp; appraisal</strong><span>Submit the application and supporting documents; answer lender queries and complete due diligence requirements.</span></div></div>
                <div className="trow"><div className="tnum">05</div><div className="tbody"><strong>Sanction, disbursement &amp; execution</strong><span>Meet sanction conditions, bring promoter contribution, and disburse against agreed project milestones.</span></div></div>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">08 / Government Support</span>
              <h2>How SATAT, Priority Sector Lending and MNRE Support Fit Together</h2>
              <p>
                SATAT was launched in 2018 to promote CBG. A PIB release dated 14 December 2023 reported that CBG projects
                fall under agriculture infrastructure under RBI guidelines and that loans to agriculture infrastructure are
                classified under priority sector lending. The same release noted that several major public-sector banks had
                developed exclusive CBG financing products.
              </p>
              <p>
                The release also described support measures including Central Financial Assistance under the National Bioenergy
                Programme, assistance around municipal solid waste based CBG projects, support for fermented organic manure,
                biomass aggregation machinery, CBG/CGD synchronization and phased CBG blending requirements.
              </p>
              <p>
                These mechanisms are complementary, not interchangeable. A bank loan is a credit facility, SATAT is the policy
                framework, OMC offtake is a commercial linkage, and MNRE financial assistance has its own eligibility and
                disbursement conditions.
              </p>
            </section>

            <section className="section" id="faq">
              <span className="section-tag">09 / Frequently Asked Questions</span>
              <h2>Questions Promoters Ask Before Applying for a CBG Plant Loan</h2>
              <div className="faq-list">
                <details open><summary>Can a new entrepreneur get a bank loan for a CBG plant?</summary><p>Yes, new entrepreneurs can be considered under dedicated CBG financing products, but the lender will still evaluate promoter contribution, project viability, commercial contracts, technical feasibility, security and financial strength. An OMC LOI is a stated pre-condition under the published SBI and Indian Bank SATAT products.</p></details>
                <details><summary>Is an OMC LOI mandatory for every CBG loan?</summary><p>Not every conceivable financing route is identical, but the SATAT CBG products published by SBI and Indian Bank specifically state that an OMC LOI is a pre-condition for processing the loan. IREDA's current product requires an OMC sale contract with a 100% offtake guarantee.</p></details>
                <details><summary>How much loan can I get for a CBG plant?</summary><p>There is no universal amount. SBI's published product states up to ₹50 crore handled by R&amp;DB and above ₹50 crore by CCG. Indian Bank states up to ₹100 crore per borrower from the banking system can be classified under Priority Sector–Agriculture. IREDA states a maximum loan limit of up to 70% of project cost. The actual sanction depends on appraisal.</p></details>
                <details><summary>Do I have to bring my own money even after getting a loan?</summary><p>Yes. Banks normally require promoter margin/equity. For example, SBI states a minimum 30% term-loan margin, while Indian Bank states 25% margin for term loans and 30% for working capital. IREDA's current product states a 70:30 debt-equity ratio and requires at least half of the promoters' contribution to be brought upfront as pure equity.</p></details>
                <details><summary>Can the MNRE financial assistance be counted as my initial equity?</summary><p>Do not assume that it can. Financial assistance is subject to scheme eligibility, documentation and disbursement conditions. Indian Bank's published page says proposals seeking MNRE support are submitted through the bank/financial institution on the BIOURJA portal. The timing and accounting treatment should be confirmed for the specific project.</p></details>
                <details><summary>What happens if my feedstock agreement is weak?</summary><p>It can become a major credit issue because production depends on steady raw-material supply. IREDA's current CBG product explicitly requires a legally binding raw-material purchase agreement whose tenure should exceed the loan duration. A strong feedstock plan should cover quantity, quality, price, logistics and duration.</p></details>
                <details><summary>Will the bank finance working capital too?</summary><p>Some dedicated products do. SBI lists term loan and working capital facilities; Indian Bank lists term loan, working capital and certain non-fund based limits. The amount and margin depend on the lender's appraisal and the operating cycle of the project.</p></details>
                <details><summary>How does EPR Nexuss help with bank loan applications?</summary><p>EPR Nexuss can help organise the lender-ready project file, coordinate documentation, support DPR/financial information, assist with registration and compliance documentation, and coordinate with the chosen financing channel. Final loan sanction remains the independent decision of the bank or financial institution.</p></details>
                <details><summary>Why should I complete compliance work before the bank application is finished?</summary><p>Because the lender needs to understand the project that it is financing. If the plant capacity, land use, feedstock, technology, approvals or project cost later changes, the appraisal may have to be revisited. Aligning the regulatory and financing story early can reduce rework.</p></details>
                <details><summary>Can I approach multiple banks for the same CBG project?</summary><p>You can evaluate different financing routes, but the project information should remain consistent. Changing the project cost, capacity, promoter contribution or revenue assumptions from one lender submission to another can create credibility issues. Compare terms first, then prepare the final lender-specific submission.</p></details>
              </div>
            </section>

            <div className="cta">
              <h2>Planning a CBG Plant and Need Bank Loan Assistance?</h2>
              <p>
                Start with the complete picture: feedstock, site, capacity, technology, OMC linkage, project cost,
                promoter contribution, registrations, compliance and financing strategy. EPR Nexuss can help you organise
                these pieces into a coordinated project pathway.
              </p>
              <a className="cta-btn" href="tel:+918796711794">Talk to EPR Nexuss →</a>
            </div>

            <div className="source-note">
              <p><strong>Important:</strong> Loan products, interest rates, margins, security requirements and government schemes can change. The figures in this article are based on the cited pages accessed in August 2026 and should be re-checked with the relevant lender before financial commitment.</p>
              <p><strong>Primary references used:</strong></p>
              <p>• <a href="https://indianbank.bank.in/en/compressed-bio-gas-plant-financing-under-sustainable-alternative-towards-affordable-transportation" target="_blank" rel="noopener">Indian Bank — Compressed Bio Gas plant financing under SATAT</a></p>
              <p>• <a href="https://sbi.bank.in/web/business/sme/sme-loans/compressed-bio-gas-under-satat-scheme" target="_blank" rel="noopener">State Bank of India — Compressed Bio Gas under SATAT Scheme</a></p>
              <p>• <a href="https://www.ireda.in/IredaWebPortal/loan-products/sectors/cbg" target="_blank" rel="noopener">IREDA — Compressed Bio Gas (CBG) loan product</a></p>
              <p>• <a href="https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1986252&reg=48&lang=2" target="_blank" rel="noopener">PIB / Ministry of Petroleum &amp; Natural Gas — Compressed Bio Gas Projects, 14 Dec 2023</a></p>
              <p>• <a href="https://msmeloans.in/loans-for-cbg-plants-in-india/" target="_blank" rel="noopener">MSMELoans — Banks that give loans for CBG plants in India</a></p>
              <p>• <a href="https://kipfinancial.com/ireda-loan-scheme-for-compressed-bio-gas-cbg-under-satat-scheme/" target="_blank" rel="noopener">KIP Financial — IREDA CBG financing overview</a></p>
            </div>
          </main>

          {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block w-[315px] flex-shrink-0 self-start sticky top-32 z-10">
            <StickyContactForm />
          </aside>
        </div>

        <footer>
          <div className="footer-grid">
            <div>
              <h3>EPR Nexuss</h3>
              <p>Support for CBG bank loan facilitation, registrations, documentation and compliance planning.</p>
            </div>
            <div className="contact">
              <p><b>Mobile</b><br /><a href="tel:+919289659966">9289659966</a></p>
              <p><b>Landline</b><br /><a href="tel:+911204605014">0120-4605014</a></p>
            </div>
            <div className="contact">
              <p><b>Website</b><br /><a href="https://www.eprnexuss.com" target="_blank" rel="noopener">www.eprnexuss.com</a></p>
              <p><b>Email</b><br /><a href="mailto:info@eprnexuss.com">info@eprnexuss.com</a></p>
            </div>
          </div>
          <div className="copyright">© 2026 EPR Nexuss. For general information only. Final loan sanction, interest rate, security, eligibility and government-assistance treatment are subject to the applicable lender and scheme.</div>
        </footer>
      </div>
    </>
  );
}