import React, { useEffect } from "react";
import StickyContactForm from "./StickyContactForm";

const PlasticRecyclingBlog: React.FC = () => {
  useEffect(() => {
    const wasteData = [
      { y: "2019", v: 3.2, a: true },
      { y: "2020", v: 3.4, a: true },
      { y: "2021", v: 3.7, a: true },
      { y: "2022", v: 4.0, a: true },
      { y: "2023", v: 4.3, a: true },
      { y: "2024", v: 4.6, a: true },
      { y: "2025", v: 4.9, a: false },
      { y: "2026", v: 5.3, a: false },
      { y: "2027", v: 5.7, a: false },
      { y: "2028", v: 6.2, a: false },
    ];

    const wasteEl = document.getElementById("wasteChart");
    if (wasteEl && wasteEl.children.length === 0) {
      const wasteMax = 6.2;
      wasteData.forEach((d) => {
        const col = document.createElement("div");
        col.className = "bar-col";
        const h = Math.round((d.v / wasteMax) * 160);
        col.innerHTML = `
          <div class="bar-val">${d.v.toFixed(1)}M</div>
          <div class="bar-rect" style="height:${h}px;background:${d.a ? 'linear-gradient(180deg,#1e7a4c,#2ea66a)' : 'linear-gradient(180deg,#8fd3a6,#cfeeda)'}"></div>
          <div class="bar-name">${d.y}</div>
        `;
        wasteEl.appendChild(col);
      });
    }

    const investData = [
      { name: "Machinery", value: 2.4, color: "linear-gradient(180deg,#1e7a4c,#2ea66a)" },
      { name: "Civil Works", value: 1.5, color: "linear-gradient(180deg,#2ea66a,#8fd3a6)" },
      { name: "ETP & Safety", value: 0.9, color: "linear-gradient(180deg,#d99b2b,#efc26a)" },
      { name: "Working Capital", value: 0.7, color: "linear-gradient(180deg,#173224,#29513d)" },
      { name: "Licensing", value: 0.3, color: "linear-gradient(180deg,#99bfa8,#d5eadc)" },
      { name: "QC / Tools", value: 0.2, color: "linear-gradient(180deg,#6ca487,#bfe8cb)" },
    ];

    const invEl = document.getElementById("investChart");
    if (invEl && invEl.children.length === 0) {
      investData.forEach((d) => {
        const col = document.createElement("div");
        col.className = "bar-col";
        const h = Math.round((d.value / 2.4) * 160);
        col.innerHTML = `
          <div class="bar-val">₹${d.value.toFixed(1)} Cr</div>
          <div class="bar-rect" style="height:${h}px;background:${d.color}"></div>
          <div class="bar-name">${d.name}</div>
        `;
        invEl.appendChild(col);
      });
    }

    const revData = [
      { name: "Pellet Sales", value: 100, color: "linear-gradient(180deg,#1e7a4c,#2ea66a)" },
      { name: "Processing Fees", value: 72, color: "linear-gradient(180deg,#2ea66a,#8fd3a6)" },
      { name: "Compliance Services", value: 58, color: "linear-gradient(180deg,#173224,#29513d)" },
      { name: "Residue Handling", value: 35, color: "linear-gradient(180deg,#d99b2b,#efc26a)" },
    ];

    const revEl = document.getElementById("revChart");
    if (revEl && revEl.children.length === 0) {
      revData.forEach((d) => {
        const col = document.createElement("div");
        col.className = "bar-col";
        const h = Math.round((d.value / 100) * 160);
        col.innerHTML = `
          <div class="bar-val">${d.value}%</div>
          <div class="bar-rect" style="height:${h}px;background:${d.color}"></div>
          <div class="bar-name">${d.name}</div>
        `;
        revEl.appendChild(col);
      });
    }

    const timelineData = [
      { label: "Land finalisation", start: 0, width: 18, cls: "dark", note: "Month 1–2" },
      { label: "Approvals & applications", start: 12, width: 26, cls: "soft", note: "Month 2–5" },
      { label: "Civil work", start: 26, width: 28, cls: "green", note: "Month 4–8" },
      { label: "Machine procurement", start: 22, width: 34, cls: "gold", note: "Month 4–9" },
      { label: "Installation", start: 48, width: 18, cls: "green", note: "Month 8–10" },
      { label: "Trial production", start: 64, width: 10, cls: "soft", note: "Month 11" },
      { label: "Commercial launch", start: 74, width: 24, cls: "dark", note: "Month 12+" },
    ];

    const tl = document.getElementById("timeline");
    if (tl && tl.children.length === 0) {
      timelineData.forEach((item) => {
        const label = document.createElement("div");
        label.className = "tl-label";
        label.textContent = item.label;
        const track = document.createElement("div");
        track.className = "tl-track";
        track.innerHTML = `<div class="tl-bar ${item.cls}" style="left:${item.start}%; width:${item.width}%"><span class="tl-note">${item.note}</span></div>`;
        tl.appendChild(label);
        tl.appendChild(track);
      });
    }
  }, []);

  return (
    <div className="wrap mt-4 plastic-wrap has-sticky">
      <style>{staticStyles}</style>
      <div className="page-body">
        <div className="topbar mt-4">
          <span className="badge green">EPR Nexuss Solutions</span>
          <span className="badge gold">Plastic Recycling Plant Blog</span>
          <span className="badge blue">Charts • Tables • Database</span>
          <span className="badge dark">Updated Design + New Copy</span>
        </div>

        <section className="hero">
          <div className="hero-grid">
            <div>
              <div className="kicker">
                <span className="pulse" /> FROM WASTE STREAM TO WEALTH STREAM
              </div>
              <h1>
                Plastic Waste Is Not the End of the Story.
                <span className="h1-em">It Is the Start of a Profitable Industry.</span>
              </h1>
              <p>
                A well-planned plastic recycling plant turns discarded packaging into commercial output, compliance value, and long-term industrial growth. This guide is designed for investors, manufacturers, and entrepreneurs who want a practical roadmap for setting up a plant with clarity, structure, and business potential.
              </p>
              {/* <p>
              Below you will find a simplified explanation of the opportunity, a clean breakdown of land and licence needs, a database-style equipment list, visual charts, and a sample operating model.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#blueprint">
                Explore the Blueprint
              </a>
              <a className="btn secondary" href="#contact">
                Talk to EPR Nexuss
              </a>
            </div> */}
              <div className="trust-row">
                <span className="trust">Clear planning</span>
                <span className="trust">Compliance-led setup</span>
                <span className="trust">Market-oriented design</span>
                <span className="trust">Investor-friendly structure</span>
              </div>
            </div>

            <div className="hero-card">
              <h3>Quick Market Snapshot</h3>
              <div className="stat-grid">
                <div className="stat">
                  <div className="num">3.5M+</div>
                  <div className="lbl">tonnes of plastic waste generated annually in India, creating a large recovery opportunity</div>
                </div>
                <div className="stat">
                  <div className="num">70%</div>
                  <div className="lbl">of value often remains untapped when waste is not sorted and processed efficiently</div>
                </div>
                <div className="stat big">
                  <div className="num">Recycling plant = processing + compliance + revenue</div>
                  <div className="lbl">The business works best when collection, segregation, machinery, and approvals move together.</div>
                </div>
              </div>
              {/* <div className="mini-note">
              Attractive opening line: <strong>“What others throw away, your plant can turn into a revenue cycle.”</strong>
              <br />
              That is the core idea behind every modern plastic recycling project.
            </div> */}
            </div>
          </div>
        </section>

        <section className="section alt" id="blueprint">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <h2 className="section-title">Why This Plant Model Matters</h2>
                <p className="section-sub">Plastic recycling is more than machinery. It is a structured industrial system that depends on feedstock sourcing, process control, legal approvals, and buyer demand.</p>
              </div>
            </div>

            <div className="two-col">
              <div className="card dark">
                <h3>The business logic</h3>
                <p>
                  A recycling plant can create value from PET, HDPE, PP, and mixed plastic streams by sorting, washing, shredding, and converting material into reusable output. When operated correctly, the plant becomes a supply partner for packaging, moulding, and downstream manufacturers.
                </p>
                <p className="muted">
                  Strong systems reduce waste loss, improve product quality, and make the unit easier to scale over time.
                </p>
              </div>
              <div className="card">
                <h3>What clients are really buying</h3>
                <ul>
                  <li>Reliable processing capacity</li>
                  <li>Regulatory readiness</li>
                  <li>Consistent pellet quality</li>
                  <li>Stable collection and logistics</li>
                  <li>Future expansion potential</li>
                </ul>
              </div>
            </div>

            <div className="quote">
              “The strongest recycling projects are not built on hype. They are built on land discipline, process discipline, and compliance discipline.”
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <h2 className="section-title">Market Movement in One Chart</h2>
                <p className="section-sub">A simple view of how plastic waste generation can rise over time, which increases the need for formal recycling capacity.</p>
              </div>
            </div>
            <div className="chart-wrap">
              <div className="chart-title">Plastic Waste Growth Trend</div>
              <div className="chart-sub">Illustrative growth pattern showing the long-term need for more organised recycling plants.</div>
              <div className="bar-chart" id="wasteChart" />
              <div className="pill-row">
                <span className="pill">Actual period</span>
                <span className="pill warn">Projected period</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <h2 className="section-title">Land Requirements and Site Fit</h2>
                <p className="section-sub">The right land is not only about area. It should support movement of raw material, segregation space, storage, utilities, and future scaling.</p>
              </div>
            </div>

            <div className="grid-4">
              <div className="mini">
                <div className="icon">📍</div>
                <h4>Industrial zoning</h4>
                <p>Choose land that is permitted for industrial use and suitable for waste-processing activities.</p>
              </div>
              <div className="mini">
                <div className="icon">🚚</div>
                <h4>Logistics access</h4>
                <p>Wide approach roads and truck movement space improve collection efficiency and dispatch speed.</p>
              </div>
              <div className="mini">
                <div className="icon">💧</div>
                <h4>Water and drainage</h4>
                <p>Washing lines need reliable water supply, drainage planning, and effluent treatment space.</p>
              </div>
              <div className="mini">
                <div className="icon">⚡</div>
                <h4>Power readiness</h4>
                <p>Shredders, washers, dryers, and extrusion systems need steady three-phase electrical support.</p>
              </div>
            </div>

            <div style={{ height: 16 }} />

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Land Parameter</th>
                    <th>Recommended Requirement</th>
                    <th>Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Plot size</strong></td>
                    <td>Small unit: 3,000–8,000 sq ft<br />Mid-scale unit: 15,000–30,000 sq ft<br />Large unit: 40,000+ sq ft</td>
                    <td>Space must support sorting, storage, machinery, utilities, and movement corridors.</td>
                  </tr>
                  <tr>
                    <td><strong>Zone type</strong></td>
                    <td>Industrial land preferred</td>
                    <td>Helps avoid approval complications and makes plant planning easier.</td>
                  </tr>
                  <tr>
                    <td><strong>Storage area</strong></td>
                    <td>Covered and protected shed space</td>
                    <td>Plastic waste should be stored neatly and safely before processing.</td>
                  </tr>
                  <tr>
                    <td><strong>Water management</strong></td>
                    <td>ETP-friendly layout with drainage</td>
                    <td>Wash water and wastewater handling must be planned from the beginning.</td>
                  </tr>
                  <tr>
                    <td><strong>Road access</strong></td>
                    <td>Truck-friendly approach road</td>
                    <td>Collection and dispatch vehicles need smooth entry and exit.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <h2 className="section-title">Licence and Approval Roadmap</h2>
                <p className="section-sub">A plastic recycling plant usually passes through pollution control approvals, labour compliance, safety approvals, and business registrations before commercial operations begin.</p>
              </div>
            </div>

            <div className="metric-grid">
              <div className="metric"><div className="mnum">1</div><div className="mlbl"><strong>Consent to Establish</strong><br />Needed before construction and installation start.</div></div>
              <div className="metric"><div className="mnum">2</div><div className="mlbl"><strong>Consent to Operate</strong><br />Required once the plant is built and ready for inspection.</div></div>
              <div className="metric"><div className="mnum">3</div><div className="mlbl"><strong>PWM / waste authorisation</strong><br />Supports legal handling and processing of plastic waste.</div></div>
            </div>

            <div style={{ height: 16 }} />

            <div className="databox">
              <div className="db">
                <div className="db-head">Regulatory Database</div>
                <div className="db-row"><span>Consent to Establish</span><span>State Pollution Control Board</span><span>Build approval</span></div>
                <div className="db-row"><span>Consent to Operate</span><span>State Pollution Control Board</span><span>Start operations</span></div>
                <div className="db-row"><span>PWM Authorisation</span><span>Pollution Control Authority</span><span>Plastic handling</span></div>
                <div className="db-row"><span>Factory / labour registration</span><span>Labour Department</span><span>Workforce safety</span></div>
                <div className="db-row"><span>Fire and safety NOC</span><span>Fire Department</span><span>Risk control</span></div>
              </div>

              <div className="db">
                <div className="db-head">Time Window Overview</div>
                <div className="db-row"><span>Initial approvals</span><span>30–90 days</span><span>Planning stage</span></div>
                <div className="db-row"><span>Civil work</span><span>60–120 days</span><span>Plant build</span></div>
                <div className="db-row"><span>Machine installation</span><span>30–60 days</span><span>Setup stage</span></div>
                <div className="db-row"><span>Trial runs</span><span>15–30 days</span><span>Quality checks</span></div>
                <div className="db-row"><span>Commercial start</span><span>After clearance</span><span>Go-live</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <h2 className="section-title">Machine Stack and Plant Infrastructure</h2>
                <p className="section-sub">A good plant is built around smooth material flow: receiving, sorting, shredding, washing, drying, extrusion, and final testing.</p>
              </div>
            </div>

            <div className="two-col">
              <div className="card">
                <h3>Main equipment</h3>
                <ul>
                  <li>Sorting conveyor</li>
                  <li>Industrial shredder</li>
                  <li>Granulator / crusher</li>
                  <li>Hot wash line</li>
                  <li>Centrifugal dryer</li>
                  <li>Extruder and pelletiser</li>
                  <li>Quality testing tools</li>
                </ul>
              </div>
              <div className="card">
                <h3>Support systems</h3>
                <ul>
                  <li>ETP or water treatment</li>
                  <li>Weighbridge / weighing scale</li>
                  <li>Fire safety tools</li>
                  <li>CCTV and record tracking</li>
                  <li>Warehousing and covered storage</li>
                  <li>PPE and worker safety gear</li>
                </ul>
              </div>
            </div>

            <div style={{ height: 16 }} />

            <div className="chart-wrap">
              <div className="chart-title">Sample Cost Split for a Mid-Scale Plant</div>
              <div className="chart-sub">A simple visual breakdown of where the money typically goes in a setup model.</div>
              <div className="bar-chart" id="investChart" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <h2 className="section-title">Project Timeline at a Glance</h2>
                <p className="section-sub">This sample timeline shows how a plant can move from idea to production in stages, rather than all at once.</p>
              </div>
            </div>

            <div className="timeline" id="timeline" />
          </div>
        </section>

        <section className="section alt">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <h2 className="section-title">Illustrative Financial Database</h2>
                <p className="section-sub">This is a sample operating model for presentation use. It helps explain how revenue streams can be split across pellets, services, and by-product handling.</p>
              </div>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Revenue Head</th>
                    <th>Contribution</th>
                    <th>Role in the Business Model</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Recycled pellet sales</strong></td><td>Primary income</td><td>Main product line after washing and extrusion</td></tr>
                  <tr><td><strong>Waste processing service</strong></td><td>Secondary income</td><td>Processing material for outside clients or aggregators</td></tr>
                  <tr><td><strong>EPR-linked services</strong></td><td>Strategic income</td><td>Supports compliance-driven partnerships</td></tr>
                  <tr><td><strong>Rejected material handling</strong></td><td>Support income</td><td>Mixed residue may be routed to other approved channels</td></tr>
                </tbody>
              </table>
            </div>

            <div style={{ height: 16 }} />

            <div className="chart-wrap">
              <div className="chart-title">Revenue Mix Comparison</div>
              <div className="chart-sub">A bar view that helps explain which income line usually drives the plant most strongly.</div>
              <div className="bar-chart" id="revChart" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <h2 className="section-title">Sample Case Study</h2>
                <p className="section-sub">A presentation-friendly example showing how a mid-scale project may move from setup to stable operations.</p>
              </div>
            </div>

            <div className="case">
              <div className="case-top">
                <div className="eyebrow">Illustrative client story</div>
                <h3>GreenLoop Recyclables — Mid-Scale Plant Journey</h3>
              </div>
              <div className="case-body">
                <div className="case-stats">
                  <div className="s"><div className="v">4 TPD</div><div className="l">Planned processing capacity</div></div>
                  <div className="s"><div className="v">16 months</div><div className="l">Setup-to-startup window</div></div>
                  <div className="s"><div className="v">₹4.8 Cr</div><div className="l">Illustrative project budget</div></div>
                </div>

                <div className="checks">
                  <div className="check"><span className="dot">✓</span><div><strong>Challenge:</strong> The promoter needed a full plant roadmap, including land planning, approvals, machine selection, and buyer alignment.</div></div>
                  <div className="check"><span className="dot">✓</span><div><strong>Solution:</strong> The project was organised step-by-step, from documentation and site planning to installation, testing, and launch.</div></div>
                  <div className="check"><span className="dot">✓</span><div><strong>Result:</strong> The plant entered operations with a more structured supply chain and clearer product positioning.</div></div>
                  <div className="check"><span className="dot">✓</span><div><strong>Outcome:</strong> Better planning improved decision-making, plant readiness, and presentation to partners.</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <h2>Turn the Idea Into a Plant That Works.</h2>
          <p>
            Whether you are starting with a small recycling setup or planning a larger industrial unit, the winning formula stays the same: right land, right approvals, right equipment, and right operating structure. EPR Nexuss can help you present that story clearly and professionally.
          </p>
          <div className="cta-btns">
            <button
              className="btn-p"
              onClick={() => window.location.href = '/contact'}
            >
              Book Free Consultation ↗
            </button>

            <button
              className="btn-s"
              onClick={() => window.open('tel:+919289659966')}
            >
              Call Now
            </button>
          </div>
        </section>

        {/* <div className="sticky">
        <div className="small"><strong>EPR Nexuss</strong> — build a clean, compliant, and investor-ready plastic recycling project.</div>
        <a className="btn primary" href="mailto:info@eprnexuss.com">Contact Now</a>
      </div> */}
      </div>
      <div className="form-column">
        <StickyContactForm />
      </div>
    </div>
  );
};

const staticStyles = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

:root{
  --bg:#f4f7f5;
  --panel:#ffffff;
  --panel-2:#f8fbf9;
  --text:#102018;
  --muted:#5e6d65;
  --line:#e3ebe6;
  --green:#1e7a4c;
  --green-2:#2ea66a;
  --green-3:#8fd3a6;
  --gold:#d99b2b;
  --red:#c45454;
  --shadow:0 18px 50px rgba(16,32,24,.08);
  --radius:24px;
}

*{box-sizing:border-box}
.wrap{margin:0 auto;padding:18px 16px 28px;max-width:1180px;background:radial-gradient(circle at top left, rgba(46,166,106,.08), transparent 26%),radial-gradient(circle at top right, rgba(217,155,43,.08), transparent 24%),linear-gradient(180deg,#fbfdfc 0%, #eef5f1 100%); padding-top: 8rem; color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;}

.topbar{display:flex;flex-wrap:wrap;gap:10px;margin:8px 0 18px}
.badge{font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:7px 12px;border-radius:999px;background:#fff;border:1px solid var(--line);box-shadow:0 8px 20px rgba(16,32,24,.04)}
.badge.green{background:#eaf8f0;color:var(--green);border-color:#cfeeda}
.badge.gold{background:#fff7e9;color:#aa7320;border-color:#f0e0b5}
.badge.blue{background:#ecf5ff;color:#205f9a;border-color:#d7e8ff}
.badge.dark{background:#1a2a22;color:#fff;border-color:#1a2a22}

.hero{position:relative;overflow:hidden;border-radius:34px;padding:38px 34px;background:linear-gradient(135deg,#0f2018 0%, #163325 48%, #0e1c15 100%);box-shadow:var(--shadow); color:#fff;}
.hero:before,.hero:after{content:"";position:absolute;border-radius:50%;pointer-events:none;}
.hero:before{width:320px;height:320px;background:rgba(143,211,166,.16);top:-130px;right:-110px;filter:blur(6px)}
.hero:after{width:250px;height:250px;background:rgba(46,166,106,.10);bottom:-120px;left:-80px;filter:blur(6px)}

.hero-grid{position:relative;display:grid;grid-template-columns:1.3fr .9fr;gap:28px;align-items:stretch}
.kicker{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#bff3d0;background:rgba(191,243,208,.08);border:1px solid rgba(191,243,208,.25);padding:7px 12px;border-radius:999px;margin-bottom:18px}
.pulse{width:8px;height:8px;border-radius:50%;background:#7df0a6;box-shadow:0 0 0 0 rgba(125,240,166,.8);animation:pulse 1.5s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(125,240,166,.55)}70%{box-shadow:0 0 0 12px rgba(125,240,166,0)}100%{box-shadow:0 0 0 0 rgba(125,240,166,0)}}

h1{font-family:'Fraunces',serif;font-size:32px;line-height:1.03;margin:0 0 14px;font-weight:900}
.h1-em{color:#a8f0bd;display:block}
.hero p{color:#d7eadf;line-height:1.8;font-size:15px;margin:0 0 18px;max-width:66ch}

.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:18px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:13px 18px;border-radius:14px;border:1px solid transparent;font-weight:800;font-size:13px;cursor:pointer;text-decoration:none}
.btn.primary{background:#7df0a6;color:#10321f}
.btn.secondary{background:transparent;color:#fff;border-color:rgba(255,255,255,.22)}
.btn:hover{transform:translateY(-1px)}
.trust-row{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}
.trust{font-size:11px;color:#cfe9d8;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);padding:7px 10px;border-radius:999px}

.hero-card{background:rgba(255,255,255,.08);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.12);border-radius:28px;padding:18px;display:flex;flex-direction:column;gap:12px}
.hero-card h3{margin:0;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#a8f0bd}
.stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.stat{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:16px}
.stat .num{font-weight:900;font-size:28px;line-height:1;color:#fff}
.stat .lbl{margin-top:6px;font-size:11px;line-height:1.4;color:#d7eadf}
.stat.big{grid-column:1 / -1;background:linear-gradient(135deg, rgba(125,240,166,.13), rgba(255,255,255,.04))}
.mini-note{font-size:12px;line-height:1.7;color:#d7eadf;background:rgba(0,0,0,.16);padding:14px;border-radius:18px;border:1px solid rgba(255,255,255,.08)}

.section{margin-top:24px;background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden}
.section-inner{padding:28px}
.section.alt{background:linear-gradient(180deg, #fff 0%, #fbfdfc 100%)}
.section-head{display:flex;justify-content:space-between;gap:16px;align-items:end;flex-wrap:wrap;margin-bottom:16px}
.section-title{font-family:'Fraunces',serif;font-size:clamp(24px,3vw,34px);line-height:1.1;margin:0}
.section-sub{margin:0;color:var(--muted);line-height:1.7;max-width:72ch;font-size:14px}

.quote{margin:18px 0 0;padding:18px 20px;border-left:5px solid var(--green);border-radius:18px;background:#eefaf2;color:#173523;font-size:14px;line-height:1.8;font-style:italic}

.two-col{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.card{background:var(--panel-2);border:1px solid var(--line);border-radius:20px;padding:18px}
.card.dark{background:linear-gradient(180deg,#0f221a 0%, #173224 100%);color:#e8f7ee;border-color:#274535}
.card h3{margin:0 0 8px;font-size:18px;line-height:1.3}
.card p,.card li{color:inherit;line-height:1.72;font-size:14px}
.card .muted{color:var(--muted)}
.card.dark .muted{color:#b6d6c3}

.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.mini{border-radius:18px;padding:16px;border:1px solid var(--line);background:#fff}
.mini .icon{font-size:24px;margin-bottom:8px}
.mini h4{margin:0 0 6px;font-size:14px}
.mini p{margin:0;color:var(--muted);font-size:12px;line-height:1.65}

.chart-wrap{background:linear-gradient(180deg,#ffffff 0%, #f8fbf9 100%);border:1px solid var(--line);border-radius:22px;padding:18px}
.chart-title{font-size:15px;font-weight:900;margin:0 0 4px}
.chart-sub{font-size:12px;color:var(--muted);margin:0 0 14px;line-height:1.6}
.bar-chart{display:flex;align-items:flex-end;gap:9px;height:190px}
.bar-col{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px}
.bar-val{font-size:10px;font-weight:900}
.bar-rect{width:100%;min-width:26px;border-radius:10px 10px 0 0}
.bar-name{font-size:10px;color:var(--muted);text-align:center;line-height:1.35}

.pill-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.pill{font-size:11px;font-weight:800;padding:6px 10px;border-radius:999px;background:#edf7f0;color:#1b6040;border:1px solid #d5eadc}
.pill.warn{background:#fff5e8;color:#986622;border-color:#f1dec0}

.metric-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.metric{background:var(--panel-2);border:1px solid var(--line);border-radius:18px;padding:16px}
.metric .mnum{font-weight:900;font-size:24px;color:var(--green)}
.metric .mlbl{font-size:11px;color:var(--muted);margin-top:4px;line-height:1.5}

.table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:20px}
table{width:100%;border-collapse:collapse;min-width:820px;background:#fff}
th,td{padding:13px 14px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top;font-size:13px;line-height:1.65}
th{background:#eef7f1;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#22543a}
tr:last-child td{border-bottom:none}
td strong{color:#173523}

.timeline{display:grid;grid-template-columns:180px 1fr;gap:10px;align-items:center}
.timeline-row{display:contents}
.tl-label{font-size:13px;font-weight:700;color:#21382c}
.tl-track{position:relative;height:18px;background:#eef2ef;border-radius:999px;overflow:hidden}
.tl-bar{position:absolute;top:0;height:100%;border-radius:999px;background:linear-gradient(90deg,var(--green) 0%, var(--green-2) 100%)}
.tl-bar.soft{background:linear-gradient(90deg,#8fd3a6 0%, #bfe8cb 100%)}
.tl-bar.gold{background:linear-gradient(90deg,#d99b2b 0%, #efc26a 100%)}
.tl-bar.dark{background:linear-gradient(90deg,#173224 0%, #29513d 100%)}
.tl-note{position:absolute;right:10px;top:50%;transform:translateY(-50%);font-size:10px;font-weight:800;color:#fff}

.databox{display:grid;grid-template-columns:1.1fr .9fr;gap:16px}
.db{border:1px solid var(--line);border-radius:20px;overflow:hidden;background:#fff}
.db-head{padding:14px 16px;background:#173224;color:#effaf3;font-size:12px;letter-spacing:.08em;text-transform:uppercase;font-weight:900}
.db-row{display:grid;grid-template-columns:1.2fr .8fr .7fr;gap:10px;padding:13px 16px;border-top:1px solid var(--line);font-size:13px}
.db-row:nth-child(even){background:#fbfdfc}
.db-row span:last-child{font-weight:800;color:var(--green)}

.case{border-radius:24px;overflow:hidden;border:1px solid var(--line);box-shadow:var(--shadow);background:#fff}
.case-top{background:linear-gradient(135deg,#102018 0%, #173224 100%);color:#fff;padding:22px 24px}
.case-top .eyebrow{display:inline-block;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#a8f0bd;background:rgba(168,240,189,.08);border:1px solid rgba(168,240,189,.18);padding:6px 10px;border-radius:999px;margin-bottom:10px}
.case-top h3{margin:0;font-size:24px;line-height:1.3;font-family:'Fraunces',serif}
.case-body{padding:22px 24px}
.case-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:18px}
.case-stats .s{border:1px solid var(--line);background:#f8fbf9;border-radius:18px;padding:14px;text-align:center}
.case-stats .v{font-size:22px;font-weight:900;color:var(--green)}
.case-stats .l{font-size:11px;color:var(--muted);margin-top:4px;line-height:1.4}
.checks{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.check{display:flex;gap:10px;padding:14px;border-radius:18px;background:#f8fbf9;border:1px solid var(--line)}
.dot{width:22px;height:22px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:#e7f7ed;color:var(--green);font-weight:900;flex:0 0 22px}

.cta{background:linear-gradient(135deg,#0f2018 0%, #173224 100%);color:#fff;border-radius:30px;padding:32px 28px;position:relative;overflow:hidden;margin-top:24px}
.cta:after{content:"";position:absolute;inset:auto -70px -100px auto;width:320px;height:320px;border-radius:50%;background:rgba(143,211,166,.14);filter:blur(4px)}
.cta h2{font-family:'Fraunces',serif;margin:0 0 10px;font-size:clamp(26px,3vw,40px);line-height:1.1}
.cta p{margin:0 0 18px;color:#d7eadf;line-height:1.75;max-width:72ch}
.cta-actions{display:flex;gap:12px;flex-wrap:wrap;position:relative;z-index:1}
.cta .btn.secondary{border-color:rgba(255,255,255,.26)}

.sticky{margin-top:18px;position:sticky;bottom:0;background:rgba(255,255,255,.9);backdrop-filter:blur(12px);border:1px solid var(--line);border-radius:18px;padding:12px 14px;display:flex;justify-content:space-between;gap:10px;align-items:center}
.sticky strong{color:var(--green)}
.small{font-size:12px;color:var(--muted);line-height:1.6}

@media (max-width: 960px){.hero-grid,.two-col,.databox{grid-template-columns:1fr}.grid-4{grid-template-columns:repeat(2,1fr)}.metric-grid,.case-stats{grid-template-columns:1fr 1fr}.checks{grid-template-columns:1fr}.timeline{grid-template-columns:140px 1fr}}
@media (max-width: 640px){.wrap{padding:12px}.hero{padding:24px 18px;border-radius:24px}.section-inner{padding:18px}.grid-4,.metric-grid,.case-stats{grid-template-columns:1fr}.timeline{grid-template-columns:1fr}.tl-label{margin-bottom:-2px}.sticky{flex-direction:column;align-items:flex-start}}

               /* Container */
.cta-btns {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

/* Primary Button (Main CTA) */
.btn-p {
  background: linear-gradient(135deg, #16a34a, #22c55e); /* premium green */
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 18px rgba(34, 197, 94, 0.25);
}

.btn-p:hover {
  background: linear-gradient(135deg, #15803d, #16a34a);
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(34, 197, 94, 0.35);
}

.btn-p:active {
  transform: scale(0.97);
}

/* Secondary Button */
.btn-s {
  background: #ffffff;
  color: #0f172a;
  border: 1px solid #cbd5f5;
  padding: 12px 22px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-s:hover {
  background: #f8fafc;
  border-color: #94a3b8;
  transform: translateY(-2px);
}

.btn-s:active {
  transform: scale(0.97);
}
  .cta-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
}
  .wrap.has-sticky {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 32px;
  max-width: 1480px;
  margin: 80px auto 40px;
  padding: 24px 18px 36px;
  background: #f5f7fb;
  position: relative;
}

.page-body {
  width: 100%;
}

.form-column {
  position: relative;
  display: block;
  width: 320px;
}

/* Mobile fallback */
@media (max-width: 980px) {
  .wrap.has-sticky {
    grid-template-columns: 1fr !important;
    gap: 24px;
    margin: 60px auto 20px;
    padding: 16px 12px 40px;
  }
  .form-column {
    order: -1;
    width: 100% !important;
    max-width: none;
    position: relative;
    margin-bottom: 30px;
  }
  .bar-wrap, .bar-chart, .chart {
    overflow-x: auto;
    padding-bottom: 12px;
  }
  .bar-col { min-width: 60px; flex-shrink: 0; }
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
  .hero-grid, .layout, .cols, .kpis, .mini-grid, .land-grid, .prob-grid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 640px) {
  .wrap.has-sticky { padding: 12px 10px 30px !important; }
}


.wrap.has-sticky {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 24px;
  max-width: 1400px;
  margin: 80px auto 40px;
  padding: 20px 16px 32px;
}

/* Tablet */
@media (max-width: 1024px) {
  .wrap.has-sticky {
    grid-template-columns: 1fr;
  }

  .form-column {
    order: -1;
    width: 100%;
  }
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 24px;
}

/* Mobile Fix */
@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 24px;
    line-height: 1.2;
  }

  .hero p {
    font-size: 14px;
  }
}
  .table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  min-width: 600px;
}

@media (max-width: 768px) {
  .two-col {
    grid-template-columns: 1fr;
  }

  .grid-4 {
    grid-template-columns: 1fr;
  }

  .metric-grid {
    grid-template-columns: 1fr;
  }

  .case-stats {
    grid-template-columns: 1fr;
  }

  .databox {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .timeline {
    grid-template-columns: 1fr;
  }

  .tl-track {
    height: 14px;
  }

  .tl-label {
    font-size: 12px;
  }
}

.cta-btns {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}
`;

export default PlasticRecyclingBlog;
