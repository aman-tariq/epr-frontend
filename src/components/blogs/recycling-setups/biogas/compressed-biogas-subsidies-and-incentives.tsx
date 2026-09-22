import React from 'react';
import StickyContactForm from '@/components/StickyContactForm';
const styles = `
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
.page{max-width:1780px;margin:26px auto;padding:0 22px}
.shell{
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(360px,313px);
  gap:34px;
  align-items:start;
}
.shell > * {
margin-top: 100px;
align-self: start;
}
.main,.side{
  min-width:0;
  max-width:100%;
  background:var(--paper);
  border:1px solid #d9e2de;
  border-radius:32px;
  box-shadow:var(--shadow);
}
.main{padding:68px 74px 74px;overflow:hidden}
.side{
  padding:60px 56px;
  position:sticky;
  top:24px;
  background:#082f23;
  color:#fff;
  min-height:780px;
  overflow:hidden;
}
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
.facts{/*display:grid*/;grid-template-columns:repeat(3,1fr);gap:0;margin:34px 0 46px;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
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
.dark-box p{color:#d6e7df}
.pill{display:inline-block;padding:9px 14px;border:1px solid rgba(255,255,255,.18);border-radius:999px;font-size:13px;font-weight:800;margin:4px 6px 0 0}
.loan-grid{/*display:grid*/;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:26px}
.loan-card{border:1px solid var(--line);border-radius:20px;padding:22px;background:#fbfcfb}
.loan-card .label{font-size:12px;font-weight:850;letter-spacing:.1em;text-transform:uppercase;color:var(--ink2)}
.loan-card strong{display:block;font-size:25px;line-height:1.15;margin:8px 0}
.loan-card span{font-size:14px;color:var(--muted)}
.table-wrap{overflow:auto;border:1px solid var(--line);border-radius:20px}
table{border-collapse:collapse;width:100%;min-width:850px;background:#fff}
th,td{padding:16px 18px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}
th{font-size:14px;letter-spacing:.03em;background:var(--soft)}
td{font-size:15px;color:#3d5569}
tr:last-child td{border-bottom:0}
.checklist{/*display:grid*/;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:24px}
.check{padding:17px 18px;border:1px solid var(--line);border-radius:16px;background:#fff}
.check strong{display:block;margin-bottom:4px}.check span{font-size:15px;color:var(--muted)}
.issue-list{/*display:grid*/;gap:12px}
.issue{padding:17px 18px;border:1px solid var(--line);border-radius:16px;background:#fff}
.issue strong{display:block;margin-bottom:3px}.issue span{font-size:15px;color:var(--muted)}
// .split{/*display:grid*/;
grid-template-columns:1.1fr .9fr;gap:26px;align-items:start;margin-top:28px}
.timeline{display:grid;gap:0;margin-top:28px}
.trow{display:grid;grid-template-columns:74px 1fr;gap:18px}
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
.cta p{max-width:900px}
.cta-btn{display:inline-flex;margin-top:10px;text-decoration:none;padding:14px 20px;border-radius:999px;background:var(--ink);color:#fff;font-weight:850}
.side-eyebrow{display:inline-block;padding:9px 15px;border:1px solid rgba(255,255,255,.18);border-radius:999px;color:#dcece5;font-size:12px;letter-spacing:.12em;font-weight:800;margin-bottom:28px}
.side h2{font-size:clamp(44px,4vw,66px);max-width:480px;line-height:1.06}
.side p{color:#d7e7e0;line-height:1.85;font-size:18px}
.side .mini-rule{height:1px;background:rgba(255,255,255,.18);margin:26px 0}
.side-list{display:grid;gap:12px;margin:0;padding:0;list-style:none}
.side-list li{padding:14px 0;border-bottom:1px solid rgba(255,255,255,.12);color:#eef6f2}
.side-list strong{display:block}
.side .tagline{position:absolute;left:56px;right:56px;bottom:34px;font-size:13px;color:#b9d4c8;letter-spacing:.08em;text-transform:uppercase;font-weight:800}
.source-note{margin-top:44px;padding-top:24px;border-top:1px solid var(--line)}
.source-note p{font-size:13px;margin-bottom:8px}
.source-note a{color:var(--ink2);text-decoration:none;overflow-wrap:anywhere}
.source-note,.card,.issue,.check,.loan-card,.fact,.side,.side-list{overflow-wrap:anywhere}
.disclaimer{font-size:12px!important;color:#7a8d9b!important}
footer{margin-top:28px;padding:36px 42px;border-radius:26px;background:var(--ink);color:#fff}
.footer-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:26px;align-items:start}
footer h3{font-size:22px} footer p,footer a{color:#d1e3dc;font-size:15px;text-decoration:none}
.contact{display:grid;gap:9px}.contact b{color:#fff}
.copyright{border-top:1px solid rgba(255,255,255,.14);margin-top:24px;padding-top:18px;font-size:12px;color:#aecbc0}
@media(max-width:1250px){
  .shell{grid-template-columns:1fr}
  .side{position:relative;top:auto;min-height:unset}
  .side .tagline{position:static;margin-top:28px}
}
@media(max-width:860px){
  .main{padding:48px 34px}.loan-grid{grid-template-columns:1fr 1fr}
  .checklist{grid-template-columns:1fr}.facts{grid-template-columns:1fr}
  .fact,.fact:nth-child(2),.fact:last-child{padding:18px 0;border-right:0;border-bottom:1px solid var(--line)}
  .fact:last-child{border-bottom:0}.flow{grid-template-columns:1fr 1fr}.split{grid-template-columns:1fr}
}
@media(max-width:640px){
  .page{padding:0 10px;margin:10px auto}.main,.side{border-radius:22px}
  .main{padding:32px 22px}.side{padding:32px 24px}h1{font-size:48px;line-height:1.02}
  .intro{font-size:18px;line-height:1.75}p{font-size:16px}
  .lead-grid,.loan-grid{grid-template-columns:1fr}.flow{grid-template-columns:1fr}
  .flow-step{min-height:auto}.footer-grid{grid-template-columns:1fr}footer{padding:28px 22px}
  .cta{padding:28px 22px}.side h2{font-size:40px}
}
`;

export default function CBGSubsidies() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="page">
        <div className="shell">
          <main className="main">
            <span className="eyebrow">CBG SUBSIDY • INCENTIVES • INDIA</span>
            <h1>Compressed Biogas Subsidies and Incentives</h1>
            <p className="intro">
              Subsidy is only one part of the CBG opportunity. In India, support for Compressed Biogas can also come through
              capital assistance, assured offtake, pricing frameworks, pipeline support, credit support, biomass aggregation
              measures, organic-manure support and state-level incentives. The important part is knowing which benefit applies
              to your project, when to apply, and what must be completed before money is committed.
            </p>

            <div className="facts">
              <div className="fact">
                <strong>₹2 Cr / TPD</strong>
                <span>Capital assistance announced under the new GOBARdhan National Circular Bioenergy Scheme for eligible greenfield CBG projects, subject to scheme conditions.</span>
              </div>
              <div className="fact">
                <strong>₹23,731 Cr</strong>
                <span>Total outlay announced for GOBARdhan, to be implemented from FY 2026–27 to FY 2035–36.</span>
              </div>
              <div className="fact">
                <strong>₹2,110/MMBTU</strong>
                <span>Administered CBG price announced under the new framework, with a minimum ten-year horizon described by PIB.</span>
              </div>
            </div>

            <div className="lead-grid">
              <article className="card"><div className="num">01</div><h3>Do not confuse subsidy with every incentive</h3><p>A capital grant reduces investment burden; an offtake framework reduces market risk; a credit guarantee supports financing. They solve different problems.</p></article>
              <article className="card"><div className="num">02</div><h3>Start with the current policy</h3><p>The older MNRE Waste-to-Energy Programme Phase-I was for FY 2021–22 to FY 2025–26. For a new project in FY 2026–27, check the new GOBARdhan framework and current implementing rules.</p></article>
              <article className="card"><div className="num">03</div><h3>Eligibility is project-specific</h3><p>Feedstock, capacity, greenfield/brownfield status, promoter type, location, plant configuration and application timing can affect eligibility.</p></article>
              <article className="card"><div className="num">04</div><h3>Compliance protects the incentive</h3><p>A claim can become difficult when the sanctioned project, commissioned plant, invoices, performance and statutory records do not match.</p></article>
            </div>

            <section className="section">
              <span className="section-tag">01 / The 2026 Picture</span>
              <h2>What Are the Main CBG Subsidies and Incentives in India?</h2>
              <p>
                As of August 2026, the most important development is the Union Cabinet approval of GOBARdhan, the National
                Circular Bioenergy Scheme. PIB says the scheme has a total outlay of ₹23,731 crore, runs from FY 2026–27 to
                FY 2035–36 and integrates assured offtake, stable pricing, capital assistance, pipeline infrastructure,
                credit support and ecosystem development for CBG.
              </p>

              <div className="flow">
                <div className="flow-step">Capital Assistance<small>Reduce initial capital burden for eligible projects</small></div>
                <div className="flow-step">Offtake Assurance<small>Create a more predictable buyer-side market</small></div>
                <div className="flow-step">Stable Pricing<small>Improve long-term revenue visibility</small></div>
                <div className="flow-step">Pipeline Support<small>Improve gas evacuation and market reach</small></div>
                <div className="flow-step">Credit Support<small>Improve access to institutional finance</small></div>
              </div>

              <div className="dark-box">
                <h3>The key idea: incentives should improve project bankability</h3>
                <p>
                  A good incentive package does more than reduce CAPEX. It can improve the project's ability to secure debt,
                  obtain predictable revenue, reduce logistics costs and build a credible long-term operating model.
                </p>
                <span className="pill">CAPEX support</span><span className="pill">Offtake</span><span className="pill">Pricing</span><span className="pill">Pipelines</span><span className="pill">Credit</span>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">02 / New GOBARdhan Scheme</span>
              <h2>The Biggest Change for New CBG Projects in FY 2026–27</h2>
              <p>
                The new GOBARdhan framework is important because it brings several previously separate support mechanisms into one
                national platform. PIB describes six growth engines: assured CBG offtake, a stable pricing framework, capital
                assistance, pipeline infrastructure, credit guarantee support and a CBG Ecosystem Challenge Fund.
              </p>

              <div className="loan-grid">
                <div className="loan-card"><div className="label">Component 1</div><strong>Offtake assurance</strong><span>CGD procurement is linked to the notified CBG obligation trajectory of 3% in FY 2026–27, 4% in FY 2027–28 and 5% from FY 2028–29 onwards for CNG transport and domestic PNG segments.</span></div>
                <div className="loan-card"><div className="label">Component 2</div><strong>₹2,110/MMBTU</strong><span>PIB announced an administered CBG price framework with a minimum ten-year horizon to improve revenue visibility.</span></div>
                <div className="loan-card"><div className="label">Component 3</div><strong>Up to ₹2 Cr/TPD</strong><span>Eligible greenfield CBG projects can receive capital assistance of up to ₹2 crore per TPD of installed capacity; brownfield capacity expansion is also covered.</span></div>
                <div className="loan-card"><div className="label">Component 4</div><strong>Pipeline infrastructure</strong><span>Support for cluster and standalone pipeline infrastructure can reduce evacuation cost and improve connectivity to trunk pipelines and CGD networks.</span></div>
                <div className="loan-card"><div className="label">Component 5</div><strong>Credit guarantee</strong><span>A dedicated mechanism is intended to increase institutional credit for eligible MSME-based CBG projects and reduce lender risk.</span></div>
                <div className="loan-card"><div className="label">Component 6</div><strong>Ecosystem Fund</strong><span>District-level feedstock mapping, aggregation, technology adoption, organic-manure value addition and capacity building are included in the framework.</span></div>
              </div>

              <p className="disclaimer">
                These are scheme-level announcements. Actual eligibility, application format, release schedule, documentation,
                agency roles and operating guidelines should be confirmed once the applicable implementation guidelines are issued
                for the specific component.
              </p>
            </section>

            <section className="section">
              <span className="section-tag">03 / Earlier MNRE CFA</span>
              <h2>What About the Earlier MNRE CBG Subsidy?</h2>
              <p>
                The previous MNRE Waste-to-Energy Programme under National Bioenergy Programme Phase-I covered FY 2021–22 through
                FY 2025–26. Its published CFA for BioCNG/Enriched Biogas/Compressed Biogas was ₹4 crore per 4,800 kg/day for a new
                biogas plant and ₹3 crore per 4,800 kg/day for upgrading an existing biogas plant, with a maximum CFA of ₹10 crore
                per project. The scheme also stated that applications were online, bank-financed and self-financed projects could
                be considered, and IREDA was the implementing agency.
              </p>

              <div className="dark-box">
                <h3>Important for entrepreneurs in 2026</h3>
                <p>
                  Do not build a new project's financial model by assuming the older ₹4 crore / 4,800 kg/day formula is automatically
                  available today. The previous Phase-I programme ended with FY 2025–26, while the new GOBARdhan framework starts
                  from FY 2026–27. The two frameworks should not be treated as the same incentive.
                </p>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">04 / SATAT and Market Incentives</span>
              <h2>Not Every Benefit Arrives as a “Subsidy”</h2>
              <p>
                SATAT remains an important policy foundation for CBG because it connects producers with Oil Marketing Companies
                and has historically provided the commercial route for selling CBG. The newer GOBARdhan framework builds on that
                foundation with an integrated offtake and pricing architecture.
              </p>

              <div className="checklist">
                <div className="check"><strong>Assured / structured offtake</strong><span>Reduces uncertainty around who will buy the CBG and how the product enters the gas ecosystem.</span></div>
                <div className="check"><strong>Pricing visibility</strong><span>Improves the ability to model revenue and debt repayment over a longer period.</span></div>
                <div className="check"><strong>Credit support</strong><span>Credit-guarantee mechanisms can make institutional finance more accessible for eligible projects.</span></div>
                <div className="check"><strong>Pipeline connectivity</strong><span>Lower evacuation costs can improve the commercial model where CGD connectivity is relevant.</span></div>
                <div className="check"><strong>Organic manure value</strong><span>FOM/LFOM and other bio-manure support can create an additional revenue stream around digestate.</span></div>
                <div className="check"><strong>Biomass aggregation support</strong><span>Feedstock-collection equipment and aggregation systems can address one of the biggest operational bottlenecks.</span></div>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">05 / Eligibility</span>
              <h2>Who Can Benefit — and What Decides Eligibility?</h2>
              <p>
                There is no universal “CBG subsidy eligibility certificate.” A project's eligibility is determined by the
                applicable scheme and its conditions. In practice, the following facts usually matter.
              </p>
              <div className="split">
                <div className="issue-list">
                  <div className="issue"><strong>Project type</strong><span>Greenfield plant, existing biogas upgrade or brownfield expansion may fall under different support provisions.</span></div>
                  <div className="issue"><strong>Feedstock</strong><span>Agricultural residue, cattle dung, press mud, municipal organic waste and other biomass streams can have different technical and regulatory implications.</span></div>
                  <div className="issue"><strong>Capacity</strong><span>Capacity and installed output can determine the quantum or ceiling of support under a particular component.</span></div>
                  <div className="issue"><strong>Promoter and entity</strong><span>Private developers, MSMEs, cooperatives, rural entrepreneurs and other eligible entities may be addressed differently by specific programmes.</span></div>
                  <div className="issue"><strong>Application timing</strong><span>For many financial-assistance programmes, applying before commissioning or within the defined application window is critical.</span></div>
                  <div className="issue"><strong>Performance and records</strong><span>Plant commissioning, output, invoices, equipment records and compliance documentation may determine release of support.</span></div>
                </div>
                <div className="card">
                  <h3>One rule saves a lot of money</h3>
                  <p>
                    Never purchase major equipment on the assumption that a subsidy will definitely reimburse it later.
                    First establish the applicable scheme, eligibility, approval sequence and documentary requirements.
                  </p>
                  <p>
                    The financial model should work even when subsidy timing is slower than expected.
                  </p>
                </div>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">06 / State Incentives</span>
              <h2>State-Level Incentives Can Change the Project Economics</h2>
              <p>
                Central support is only one layer. States may separately offer industrial-policy benefits such as capital investment
                support, electricity-duty or stamp-duty concessions, land or infrastructure support, tax-related incentives,
                exemptions or assistance for feedstock aggregation. The exact package depends on the state's active policy, the
                project's location, category and eligibility.
              </p>

              <div className="table-wrap">
                <table>
                  <thead><tr><th>Incentive layer</th><th>What it can mean for a CBG project</th><th>What EPR Nexuss should verify</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Central scheme</strong></td><td>Capital assistance, offtake, pricing, credit or infrastructure support under the applicable national framework.</td><td>Current notification, application window, implementing agency, eligibility and release conditions.</td></tr>
                    <tr><td><strong>State industrial policy</strong></td><td>Capital subsidy, duties/taxes, power-related concessions, infrastructure or land-linked incentives, depending on the state.</td><td>Whether CBG/waste-to-energy is a notified eligible activity and whether benefits can be combined.</td></tr>
                    <tr><td><strong>Feedstock support</strong></td><td>Biomass aggregation machinery and local collection infrastructure can reduce the delivered cost of raw material.</td><td>Eligible machinery, promoter contribution, procurement rules and documentation.</td></tr>
                    <tr><td><strong>Organic manure support</strong></td><td>FOM/LFOM can improve total project revenue and may receive market-development support.</td><td>Product classification, quality requirements, offtake arrangements and applicable scheme terms.</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">07 / New Industry Promoters</span>
              <h2>Coming From Another Industry? Incentives Are Not the Hard Part — Coordination Is</h2>
              <p>
                A promoter from manufacturing, real estate, logistics, agriculture, trading or another business may quickly find
                CBG unfamiliar. The difficult part is that the incentive, financing, technical and compliance documents all have
                to describe the same project.
              </p>
              <div className="lead-grid">
                <article className="card"><div className="num">A</div><h3>“I heard there is a ₹10 crore subsidy.”</h3><p>The old MNRE ceiling should not be copied into a new FY 2026–27 business plan. Current support needs to be checked under the new GOBARdhan framework and applicable rules.</p></article>
                <article className="card"><div className="num">B</div><h3>“My equipment vendor will manage the subsidy.”</h3><p>Equipment suppliers may help with technical documents, but incentive eligibility and statutory compliance are project-level matters. The promoter should understand the full approval path.</p></article>
                <article className="card"><div className="num">C</div><h3>“I can apply after commissioning.”</h3><p>Some programmes require in-principle approval or application before commissioning. Missing the right stage can be expensive.</p></article>
                <article className="card"><div className="num">D</div><h3>“Central and state incentives automatically stack.”</h3><p>Not necessarily. State policies may include conditions around availing another subsidy or define cumulative ceilings. Combination rules must be checked.</p></article>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">08 / EPR Nexuss Support</span>
              <h2>How EPR Nexuss Helps Clients Capture Incentives Without Wasting Time</h2>
              <p>
                The biggest cost in an incentive process is often not the official fee. It is rework: preparing the wrong
                application, buying equipment too early, changing the DPR later, submitting inconsistent project data, or learning
                about an eligibility condition after the investment has already been made.
              </p>
              <div className="lead-grid">
                <article className="card"><div className="num">01</div><h3>Incentive mapping before investment</h3><p>Review the proposed CBG project and identify which central and state support mechanisms appear relevant before major commitments are made.</p></article>
                <article className="card"><div className="num">02</div><h3>Compliance + subsidy coordination</h3><p>Align project registration, pollution-control permissions, entity records, land documents and technical information with the incentive application.</p></article>
                <article className="card"><div className="num">03</div><h3>Application and documentation support</h3><p>Organise DPRs, declarations, invoices, plant details, performance records and other supporting documents required for the applicable process.</p></article>
                <article className="card"><div className="num">04</div><h3>Track the project after approval</h3><p>Support the promoter in maintaining a documentation trail so that commissioning and release-stage requirements are easier to address.</p></article>
              </div>

              <div className="dark-box">
                <h3>Why clients lose money with a fragmented approach</h3>
                <p>
                  One consultant handles registration, another prepares the DPR, an equipment vendor shares a different capacity,
                  and a bank receives a third version of the project. The incentive application then becomes harder because the
                  project facts do not line up. EPR Nexuss focuses on a single coordinated project record.
                </p>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">09 / Incentive Application Journey</span>
              <h2>From CBG Idea to Incentive Claim</h2>
              <div className="timeline">
                <div className="trow"><div className="tnum">01</div><div className="tbody"><strong>Project screening</strong><span>Feedstock, site, capacity, greenfield/brownfield status, promoter entity and commercial model.</span></div></div>
                <div className="trow"><div className="tnum">02</div><div className="tbody"><strong>Scheme mapping</strong><span>Identify the current central framework, relevant state policy and possible support for feedstock, pipelines and finance.</span></div></div>
                <div className="trow"><div className="tnum">03</div><div className="tbody"><strong>Eligibility + compliance check</strong><span>Verify timing, approvals, technical conditions, application route and implementing agency.</span></div></div>
                <div className="trow"><div className="tnum">04</div><div className="tbody"><strong>Application / in-principle approval</strong><span>Prepare and submit the required documents through the applicable portal or agency at the correct stage.</span></div></div>
                <div className="trow"><div className="tnum">05</div><div className="tbody"><strong>Construction + evidence trail</strong><span>Maintain contracts, invoices, equipment records, commissioning data and statutory documentation.</span></div></div>
                <div className="trow"><div className="tnum">06</div><div className="tbody"><strong>Claim / release support</strong><span>Present the required performance and documentary evidence and resolve queries with the relevant agency.</span></div></div>
              </div>
            </section>

            <section className="section">
              <span className="section-tag">10 / Frequently Asked Questions</span>
              <h2>Client-Impressive FAQs on CBG Subsidies and Incentives</h2>
              <div className="faq-list">
                <details open><summary>Is there a ₹10 crore subsidy for every CBG plant in India?</summary><p>No. The ₹10 crore maximum came from the earlier MNRE Waste-to-Energy Programme Phase-I, which ran through FY 2025–26. For projects starting in FY 2026–27, the new GOBARdhan framework announced a different capital-assistance structure of up to ₹2 crore per TPD for eligible greenfield projects, subject to its conditions and implementation rules.</p></details>
                <details><summary>What is the biggest CBG incentive announced in 2026?</summary><p>The major development is the ₹23,731 crore GOBARdhan National Circular Bioenergy Scheme, approved in August 2026. It combines capital assistance with offtake assurance, stable pricing, pipeline infrastructure, credit support and ecosystem development.</p></details>
                <details><summary>How much capital assistance can a greenfield CBG project receive?</summary><p>PIB states that eligible greenfield CBG projects can receive capital assistance of up to ₹2 crore per tonne per day of installed CBG capacity. Actual eligibility, limits, release conditions and application procedures should be checked against the operational guidelines for the project.</p></details>
                <details><summary>Is the subsidy paid before the plant is built?</summary><p>Do not assume that it is. Earlier MNRE guidance included in-principle approval before commissioning and performance-linked release. The new GOBARdhan framework should be followed according to its notified implementation process. A project should be financially planned so that construction does not depend on immediate subsidy cash.</p></details>
                <details><summary>Can I take a bank loan and still claim government support?</summary><p>Yes, government frameworks can be designed alongside bank finance. The previous MNRE Waste-to-Energy Programme explicitly considered bank-financed projects. The new GOBARdhan framework also includes credit support. However, the lender and incentive scheme must agree on how the assistance is treated in the project finance structure.</p></details>
                <details><summary>Can I claim both central and state incentives?</summary><p>Possibly, but never assume automatic stacking. The applicable state policy may have its own ceilings, exclusions, sunset dates or conditions if another subsidy is availed. A project-specific incentive mapping should be completed first.</p></details>
                <details><summary>What documents should I prepare before applying for a CBG subsidy?</summary><p>Typically, the promoter should be ready with entity/KYC documents, land/site records, a detailed project report, feedstock information, technical specifications, quotations, project cost and funding plan, commercial/offtake documents and the applicable compliance records. The exact checklist depends on the scheme and implementing agency.</p></details>
                <details><summary>Why can an approved subsidy still become difficult to claim?</summary><p>Because the release stage may depend on commissioning, performance, invoices, plant specifications, statutory records and other evidence. If the final plant is different from the approved project or the documentary trail is incomplete, queries can delay release.</p></details>
                <details><summary>Can EPR Nexuss guarantee that I will receive a subsidy?</summary><p>No responsible consultant should guarantee a government grant. EPR Nexuss can help assess eligibility, prepare documentation, coordinate registration and compliance, and support the application process. The final decision belongs to the applicable government agency under the active scheme.</p></details>
                <details><summary>What makes EPR Nexuss different from a consultant who only files forms?</summary><p>The goal is to connect the subsidy application with the entire project: business structure, compliance, registrations, DPR, financing, technical information and implementation. This reduces the chance of paying for a filing today that has to be redone after the project changes tomorrow.</p></details>
              </div>
            </section>

            <div className="cta">
              <h2>Want to Know Which CBG Incentives Apply to Your Project?</h2>
              <p>
                Before buying machinery or finalising the project cost, get the incentive map right. EPR Nexuss can help you
                review the project, identify the applicable registration and compliance pathway, coordinate documentation and
                structure the incentive process around the actual plant.
              </p>
              <a className="cta-btn" href="tel:+918796711794">Talk to EPR Nexuss →</a>
            </div>

            <div className="source-note">
              <p><strong>Important 2026 policy note:</strong> This article deliberately distinguishes the earlier MNRE National Bioenergy Programme Phase-I from the new GOBARdhan National Circular Bioenergy Scheme approved in August 2026. Government schemes, application portals, detailed guidelines and eligibility conditions can change. Verify the current notification before financial commitment.</p>
              <p><strong>Primary government source:</strong> <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2295494&lang=2&reg=48" target="_blank" rel="noopener noreferrer">PIB — Cabinet approves GOBARdhan, India’s National Unified Scheme for Compressed Biogas, 6 Aug 2026</a>.</p>
              <p><strong>Earlier MNRE source:</strong> <a href="https://mnre.gov.in/En/Waste-to-Energy/" target="_blank" rel="noopener noreferrer">MNRE — Waste to Energy Programme</a> and <a href="https://biourja.mnre.gov.in/about-the-programme" target="_blank" rel="noopener noreferrer">BioUrja — Programme details</a>.</p>
              <p><strong>Industry references reviewed:</strong>
                <a href="https://www.pelletrates.com/policies-and-schemes/news/cbg-plant-india-setup-guide-subsidies-process" target="_blank" rel="noopener noreferrer">PelletRates</a>,
                <a href="https://koshishindia.in/blogs/biogas-subsidies-in-india-government-subsidies-and-incentives-for-biogas-projects/" target="_blank" rel="noopener noreferrer">Koshish India</a>,
                <a href="https://www.torqbiogreen.com/incentives" target="_blank" rel="noopener noreferrer">Torq Bio Green</a>,
                <a href="https://biopower.co.in/blog/government-subsidies-for-biogas-plants.html" target="_blank" rel="noopener noreferrer">BioPower</a>,
                <a href="https://costmos.in/government-policies-and-incentives-for-cbg-projects-in-india/" target="_blank" rel="noopener noreferrer">Costmos</a>,
                <a href="https://www.corpseed.com/knowledge-centre/government-initiatives-of-compressed-biogas-cbg-subsidy" target="_blank" rel="noopener noreferrer">Corpseed</a>.
              </p>
            </div>
          </main>

                    {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block w-[315px] flex-shrink-0 self-start" style={{ position: "sticky", top: "7rem" }}>
            <StickyContactForm />
          </aside>
        </div>

        <footer>
          <div className="footer-grid">
            <div>
              <h3>EPR Nexuss</h3>
              <p>Support for CBG subsidies and incentives, registrations, documentation and compliance planning.</p>
            </div>
            <div className="contact">
              <p><b>Mobile</b><br /><a href="tel:+91-9289659966">9289659966</a></p>
              <p><b>Landline</b><br /><a href="tel:+911204605014">0120-4605014</a></p>
            </div>
            <div className="contact">
              <p><b>Website</b><br /><a href="https://www.eprnexuss.com" target="_blank" rel="noopener noreferrer">www.eprnexuss.com</a></p>
              <p><b>Email</b><br /><a href="mailto:info@eprnexuss.com">info@eprnexuss.com</a></p>
            </div>
          </div>
          <div className="copyright">© 2026 EPR Nexuss. For general information only. Government scheme eligibility, assistance amounts, release conditions and implementation guidelines are subject to the applicable notification and competent authority.</div>
        </footer>
      </div>
    </>
  );
}