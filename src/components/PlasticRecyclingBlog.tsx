import React, { useState, useEffect, useRef } from "react";
import StickyContactForm from "./StickyContactForm";

const PlasticRecyclingBlog: React.FC = () => {
  // --- Sticky State Control Engine ---
  const [isSticky, setIsSticky] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(340);
  const containerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !sidebarRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      setSidebarWidth(sidebarRef.current.parentElement?.getBoundingClientRect().width || 340);

      // --- CLEARANCE ADJUSTMENTS FOR NAVBAR ---
      // Changed top offset trigger from 40 to 110 to clear your global header navbar
      const triggerTop = containerRect.top <= 110; 
      
      // Stop stickiness gracefully when hitting the bottom bounds
      const hitsBottom = containerRect.bottom <= (sidebarRef.current.offsetHeight + 130);

      if (triggerTop && !hitsBottom) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // --- Static Data Definitions ---
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

  const investData = [
    { name: "Machinery", value: 2.4, color: "linear-gradient(180deg,#1e7a4c,#2ea66a)" },
    { name: "Civil Works", value: 1.5, color: "linear-gradient(180deg,#2ea66a,#8fd3a6)" },
    { name: "ETP & Safety", value: 0.9, color: "linear-gradient(180deg,#d99b2b,#efc26a)" },
    { name: "Working Capital", value: 0.7, color: "linear-gradient(180deg,#173224,#29513d)" },
    { name: "Licensing", value: 0.3, color: "linear-gradient(180deg,#99bfa8,#d5eadc)" },
    { name: "QC / Tools", value: 0.2, color: "linear-gradient(180deg,#6ca487,#bfe8cb)" },
  ];

  const revData = [
    { name: "Pellet Sales", value: 100, color: "linear-gradient(180deg,#1e7a4c,#2ea66a)" },
    { name: "Processing Fees", value: 72, color: "linear-gradient(180deg,#2ea66a,#8fd3a6)" },
    { name: "Compliance Services", value: 58, color: "linear-gradient(180deg,#173224,#29513d)" },
    { name: "Residue Handling", value: 35, color: "linear-gradient(180deg,#d99b2b,#efc26a)" },
  ];

  const timelineData = [
    { label: "Land finalisation", start: 0, width: 18, cls: "dark", note: "Month 1–2" },
    { label: "Approvals & applications", start: 12, width: 26, cls: "soft", note: "Month 2–5" },
    { label: "Civil work", start: 26, width: 28, cls: "green", note: "Month 4–8" },
    { label: "Machine procurement", start: 22, width: 34, cls: "gold", note: "Month 4–9" },
    { label: "Installation", start: 48, width: 18, cls: "green", note: "Month 8–10" },
    { label: "Trial production", start: 64, width: 10, cls: "soft", note: "Month 11" },
    { label: "Commercial launch", start: 74, width: 24, cls: "dark", note: "Month 12+" },
  ];

  return (
    <div className="wrap plastic-wrap" ref={containerRef}>
      <style>{staticStyles}</style>
      
      <div className="page-body">
        {/* Topbar badge bar */}
        <div className="topbar">
          <span className="badge green">EPR Nexuss Solutions</span>
          <span className="badge gold">Plastic Recycling Plant Blog</span>
          <span className="badge blue">Charts • Tables • Database</span>
          <span className="badge dark">Updated Design + New Copy</span>
        </div>

        {/* Hero Section */}
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
            </div>
          </div>
        </section>

        {/* Blueprint Section */}
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

        {/* Waste Generation Chart */}
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
              
              <div className="chart-scroll-box">
                <div className="bar-chart">
                  {wasteData.map((d, index) => {
                    const h = Math.round((d.v / 6.2) * 140);
                    return (
                      <div className="bar-col" key={index}>
                        <div className="bar-val">{d.v.toFixed(1)}M</div>
                        <div 
                          className="bar-rect" 
                          style={{ 
                            height: `${h}px`, 
                            background: d.a ? 'linear-gradient(180deg,#1e7a4c,#2ea66a)' : 'linear-gradient(180deg,#8fd3a6,#cfeeda)' 
                          }} 
                        />
                        <div className="bar-name">{d.y}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pill-row">
                <span className="pill">Actual period</span>
                <span className="pill warn">Projected period</span>
              </div>
            </div>
          </div>
        </section>

        {/* Land Requirements */}
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

        {/* Licence & Approval Roadmap */}
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

            <div className="databox-scroll-box">
              <div className="databox">
                <div className="db">
                  <div className="db-head">Regulatory Database</div>
                  <div className="db-row"><span>Consent to Establish</span><span>State Pollution Control Board</span><span>Build approval</span></div>
                  <div className="db-row"><span>Consent to Operate</span><span>State Pollution Control Board</span><span>Start operations</span></div>
                  <div className="db-row"><span>PWM Authorisation</span><span>Pollution Control Authority</span><span>Plastic handling</span></div>
                  <div className="db-row"><span>Factory / registration</span><span>Labour Dept</span><span>Workforce safety</span></div>
                  <div className="db-row"><span>Fire and safety NOC</span><span>Fire Department</span><span>Risk control</span></div>
                </div>

                <div className="db">
                  <div className="db-head">Time Window Overview</div>
                  <div className="db-row"><span>Initial approvals</span><span>30–90 days</span><span>Planning stage</span></div>
                  <div className="db-row"><span>Civil work</span><span>60–120 days</span><span>Plant build</span></div>
                  <div className="db-row"><span>Machine install</span><span>30–60 days</span><span>Setup stage</span></div>
                  <div className="db-row"><span>Trial runs</span><span>15–30 days</span><span>Quality checks</span></div>
                  <div className="db-row"><span>Commercial start</span><span>After clearance</span><span>Go-live</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Machine Stack and Plant Infrastructure */}
        <section className="section alt">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <h2 className="section-title">Machine Stack and Plant Infrastructure</h2>
                <p className="section-sub">A premium engineering lineup organized systematically by process flow from reception to output delivery.</p>
              </div>
            </div>

            <div className="two-col horizontal-cards">
              <div className="card detailed-card">
                <div className="card-header-accent">MAIN PRODUCTION LINE</div>
                <div className="stack-item"><h5>1. Sorting Conveyor</h5><p>Smooth multi-operator belt system for manual stream segregation.</p></div>
                <div className="stack-item"><h5>2. Industrial Shredder</h5><p>High-torque split shafts to achieve rapid volume reductions.</p></div>
                <div className="stack-item"><h5>3. Granulator & Crusher</h5><p>Precision dynamic blades ensuring strict size calibrations.</p></div>
                <div className="stack-item"><h5>4. Hot Wash Line</h5><p>Continuous thermal baths to strip adhesives and surface chemicals.</p></div>
                <div className="stack-item"><h5>5. Centrifugal Dryer</h5><p>High-speed cyclical rotation ensuring final moisture limits &lt;1%.</p></div>
                <div className="stack-item"><h5>6. Extruder & Pelletiser</h5><p>Automated uniform degasification and melt crystal cutting system.</p></div>
              </div>

              <div className="card detailed-card support">
                <div className="card-header-accent">AUXILIARY SUPPORT INFRASTRUCTURE</div>
                <div className="stack-item"><h5>Effluent Treatment Plant (ETP)</h5><p>Closed-loop operational water filtering for complete discharge safety.</p></div>
                <div className="stack-item"><h5>Heavy Weighbridge System</h5><p>Digital load cell integrations mapping raw batch intakes accurately.</p></div>
                <div className="stack-item"><h5>Industrial Fire Networks</h5><p>Ceiling localized sprinklers and high-pressure fire line stations.</p></div>
                <div className="stack-item"><h5>CCTV & Operational Logs</h5><p>Central real-time process tracing logs ensuring batch consistency.</p></div>
                <div className="stack-item"><h5>Protected Storage Sheds</h5><p>Climate isolated material holds preserving feedstock dryness.</p></div>
                <div className="stack-item"><h5>Safety PPE Depots</h5><p>Strict zone entry points stocked with industrial worker gears.</p></div>
              </div>
            </div>

            <div style={{ height: 24 }} />

            <div className="chart-wrap">
              <div className="chart-title">Sample Cost Split for a Mid-Scale Plant</div>
              <div className="chart-sub">A simple visual breakdown of where the money typically goes in a setup model.</div>
              
              <div className="chart-scroll-box">
                <div className="bar-chart">
                  {investData.map((d, index) => {
                    const h = Math.round((d.value / 2.4) * 140);
                    return (
                      <div className="bar-col" key={index}>
                        <div className="bar-val">₹{d.value.toFixed(1)} Cr</div>
                        <div className="bar-rect" style={{ height: `${h}px`, background: d.color }} />
                        <div className="bar-name">{d.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gantt Project Timeline */}
        <section className="section">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <h2 className="section-title">Project Timeline at a Glance</h2>
                <p className="section-sub">This sample timeline shows how a plant can move from idea to production in stages, rather than all at once.</p>
              </div>
            </div>

            <div className="timeline-scroll-box">
              <div className="timeline">
                {timelineData.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="tl-label">{item.label}</div>
                    <div className="tl-track">
                      <div className={`tl-bar ${item.cls}`} style={{ left: `${item.start}%`, width: `${item.width}%` }}>
                        <span className="tl-note">{item.note}</span>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Financial Model and Revenue Mix Chart */}
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
              
              <div className="chart-scroll-box">
                <div className="bar-chart">
                  {revData.map((d, index) => {
                    const h = Math.round((d.value / 100) * 140);
                    return (
                      <div className="bar-col" key={index}>
                        <div className="bar-val">{d.value}%</div>
                        <div className="bar-rect" style={{ height: `${h}px`, background: d.color }} />
                        <div className="bar-name">{d.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
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

        {/* Action CTA */}
        <section className="cta" id="contact">
          <h2>Turn the Idea Into a Plant That Works.</h2>
          <p>
            Whether you are starting with a small recycling setup or planning a larger industrial unit, the winning formula stays the same: right land, right approvals, right equipment, and right operating structure. EPR Nexuss can help you present that story clearly and professionally.
          </p>
          <div className="cta-btns">
            <button className="btn-p" onClick={() => window.location.href = '/contact'}>
              Book Free Consultation ↗
            </button>
            <button className="btn-s" onClick={() => window.open('tel:+919289659966')}>
              Call Now
            </button>
          </div>
        </section>
      </div>

      {/* REACT STICKY CONTAINER FORMS */}
      <div className="sidebar-container">
        <div 
          ref={sidebarRef}
          className={`sidebar-sticky-inner ${isSticky ? "is-js-sticky" : ""}`}
          style={{ width: isSticky ? `${sidebarWidth}px` : "100%" }}
        >
          <StickyContactForm />
        </div>
      </div>
    </div>
  );
};

// --- Custom Stylesheet with Navbar Override Clears ---
const staticStyles = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

:root {
  --bg: #f4f7f5;
  --panel: #ffffff;
  --panel-2: #f8fbf9;
  --text: #102018;
  --muted: #5e6d65;
  --line: #e3ebe6;
  --green: #1e7a4c;
  --green-2: #2ea66a;
  --green-3: #8fd3a6;
  --gold: #d99b2b;
  --shadow: 0 18px 50px rgba(16,32,24,.06);
  --radius: 24px;
}

* { box-sizing: border-box; max-width: 100%; }

body {
  margin: 0;
  padding: 0;
  background-color: #fbfdfc;
}

.wrap {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 100px 16px 40px;
  color: var(--text);
  font-family: 'Plus Jakarta Sans', sans-serif;
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 32px;
  position: relative;
}

.page-body {
  width: 100%;
  min-width: 0; 
}

.sidebar-container { 
  width: 100%;
  position: relative;
}

.sidebar-sticky-inner {
  display: block;
  position: relative;
}

/* NAVBAR ALIGNMENT FIX CODE CHANGES */
.sidebar-sticky-inner.is-js-sticky {
  position: fixed !important;
  /* Pushes form down to avoid overlapping the header (e.g., 90px navbar + 20px padding) */
  top: 110px !important; 
  /* Ensures it floats below the navbar stack layer but stays above standard elements */
  z-index: 99 !important; 
}

/* Badges and Top Header */
.topbar { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.badge { font-size: 11px; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; padding: 6px 12px; border-radius: 999px; background: #fff; border: 1px solid var(--line); }
.badge.green { background: #eaf8f0; color: var(--green); border-color: #cfeeda; }
.badge.gold { background: #fff7e9; color: #aa7320; border-color: #f0e0b5; }
.badge.blue { background: #ecf5ff; color: #205f9a; border-color: #d7e8ff; }
.badge.dark { background: #1a2a22; color: #fff; border-color: #1a2a22; }

/* Hero Core styling */
.hero { position: relative; border-radius: 28px; padding: 40px 32px; background: linear-gradient(135deg,#0f2018 0%, #163325 100%); color: #fff; overflow: hidden; }
.hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 32px; align-items: center; }
.kicker { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; color: #bff3d0; background: rgba(191,243,208,.08); padding: 6px 12px; border-radius: 999px; margin-bottom: 16px; }
.pulse { width: 8px; height: 8px; border-radius: 50%; background: #7df0a6; }

h1 { font-family: 'Fraunces', serif; font-size: 36px; line-height: 1.15; margin: 0 0 16px; font-weight: 900; }
.h1-em { color: #a8f0bd; display: block; }
.hero p { color: #d7eadf; line-height: 1.75; font-size: 15px; margin: 0 0 20px; }
.trust-row { display: flex; flex-wrap: wrap; gap: 8px; }
.trust { font-size: 11px; color: #cfe9d8; background: rgba(255,255,255,.06); padding: 6px 12px; border-radius: 999px; }

.hero-card { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 20px; }
.hero-card h3 { margin: 0 0 16px; font-size: 12px; letter-spacing: .06em; text-transform: uppercase; color: #a8f0bd; }
.stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.stat { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.06); border-radius: 12px; padding: 14px; }
.stat .num { font-weight: 900; font-size: 26px; color: #fff; line-height: 1; }
.stat .lbl { margin-top: 6px; font-size: 11px; line-height: 1.4; color: #d7eadf; }
.stat.big { grid-column: 1 / -1; }

/* Content Section Layout blocks */
.section { margin-top: 24px; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow); }
.section-inner { padding: 32px; }
.section.alt { background: linear-gradient(180deg, #fff 0%, #fbfdfc 100%); }
.section-head { margin-bottom: 24px; }
.section-title { font-family: 'Fraunces', serif; font-size: 28px; line-height: 1.2; margin: 0 0 8px; }
.section-sub { margin: 0; color: var(--muted); line-height: 1.6; font-size: 14px; }

.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
.card { background: var(--panel-2); border: 1px solid var(--line); border-radius: 16px; padding: 24px; }
.card.dark { background: #0f221a; color: #e8f7ee; border-color: #1a3a2b; }
.card h3 { margin: 0 0 14px; font-size: 18px; font-weight: 700; color: var(--text); }
.card.dark h3 { color: #fff; }
.card p { font-size: 14px; line-height: 1.65; margin-bottom: 8px; }

/* Technical Machine layout nodes */
.horizontal-cards .detailed-card {
  background: #ffffff;
  border: 1px solid var(--line);
  box-shadow: 0 4px 12px rgba(0,0,0,0.01);
  padding: 24px;
}
.card-header-accent {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--green);
  background: #eaf8f0;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 18px;
}
.support .card-header-accent {
  color: #aa7320;
  background: #fff7e9;
}
.stack-item {
  border-bottom: 1px dashed var(--line);
  padding: 12px 0;
}
.stack-item:last-child {
  border-bottom: none;
}
.stack-item h5 {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
}
.stack-item p {
  margin: 0;
  font-size: 12px;
  color: var(--muted);
  line-height: 1.5;
}

.quote { padding: 16px 20px; border-left: 4px solid var(--green); border-radius: 0 12px 12px 0; background: #eefaf2; color: #173523; font-size: 14px; font-style: italic; margin-top: 20px; }

.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.mini { border-radius: 16px; padding: 16px; border: 1px solid var(--line); background: #fff; }
.mini .icon { font-size: 24px; margin-bottom: 8px; }
.mini h4 { margin: 0 0 6px; font-size: 14px; }
.mini p { margin: 0; color: var(--muted); font-size: 12px; line-height: 1.6; }

/* Custom Presentation Charts */
.chart-wrap { background: #fff; border: 1px solid var(--line); border-radius: 16px; padding: 10px; }
.chart-title { font-size: 15px; font-weight: 800; margin: 0 0 8px; }
.chart-sub { font-size: 12px; color: var(--muted); margin: 0 0 40px; }
.chart-scroll-box { width: 100%; overflow-x: auto; overflow-y: hidden; padding-bottom: 8px; -webkit-overflow-scrolling: touch; }
.bar-chart { display: flex; align-items: flex-end; gap: 15px; height: 190px; padding-top: 20px; min-width: 520px; }
.bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px; min-width: 45px; }
.bar-val { font-size: 10px; font-weight: 700; color: var(--text); }
.bar-rect { width: 100%; border-radius: 6px 6px 0 0; min-height: 4px; transition: height 0.3s ease; }
.bar-name { font-size: 10px; color: var(--muted); text-align: center; white-space: nowrap; }
.pill-row { display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap; }
.pill { font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 999px; background: #edf7f0; color: #1b6040; border: 1px solid #d5eadc; }
.pill.warn { background: #fff5e8; color: #986622; border-color: #f1dec0; }

/* Grid Metrics and Tables Layouts */
.metric-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.metric { background: var(--panel-2); border: 1px solid var(--line); border-radius: 14px; padding: 16px; }
.metric .mnum { font-weight: 900; font-size: 24px; color: var(--green); }
.metric .mlbl { font-size: 12px; color: var(--muted); margin-top: 4px; line-height: 1.5; }

.table-wrap { width: 100%; overflow-x: auto; border: 1px solid var(--line); border-radius: 14px; }
table { width: 100%; border-collapse: collapse; min-width: 500px; background: #fff; }
th, td { padding: 12px 14px; text-align: left; font-size: 13px; line-height: 1.5; border-bottom: 1px solid var(--line); }
th { background: #eef7f1; color: #22543a; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 0.03em; }

/* Data Content Boxes */
.databox-scroll-box, .timeline-scroll-box { width: 100%; overflow-x: auto; padding-bottom: 8px; }
.databox { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; min-width: 600px; }
.db { border: 1px solid var(--line); border-radius: 14px; overflow: hidden; background: #fff; }
.db-head { padding: 12px 14px; background: #173224; color: #effaf3; font-size: 11px; font-weight: 700; text-transform: uppercase; }
.db-row { display: grid; grid-template-columns: 1.2fr 1fr 0.8fr; gap: 8px; padding: 12px 14px; border-top: 1px solid var(--line); font-size: 12px; }
.db-row span:last-child { font-weight: 700; color: var(--green); }

/* Timeline Charts */
.timeline { display: grid; grid-template-columns: 150px 1fr; gap: 12px; align-items: center; min-width: 550px; }
.tl-label { font-size: 12px; font-weight: 700; color: #21382c; }
.tl-track { position: relative; height: 20px; background: #eef2ef; border-radius: 4px; }
.tl-bar { position: absolute; top: 0; height: 100%; border-radius: 4px; display: flex; align-items: center; justify-content: flex-end; padding-right: 8px; background: linear-gradient(90deg, var(--green), var(--green-2)); }
.tl-bar.soft { background: linear-gradient(90deg, #8fd3a6, #bfe8cb); }
.tl-bar.gold { background: linear-gradient(90deg, #d99b2b, #efc26a); }
.tl-bar.dark { background: linear-gradient(90deg, #173224, #29513d); }
.tl-note { font-size: 9px; font-weight: 700; color: #fff; white-space: nowrap; }

/* Case Studies */
.case { border-radius: 16px; overflow: hidden; border: 1px solid var(--line); background: #fff; }
.case-top { background: #0f2018; color: #fff; padding: 24px; }
.case-top .eyebrow { display: inline-block; font-size: 10px; text-transform: uppercase; color: #a8f0bd; background: rgba(168,240,189,0.1); padding: 4px 8px; border-radius: 4px; margin-bottom: 8px; }
.case-top h3 { margin: 0; font-size: 20px; font-family: 'Fraunces', serif; }
.case-body { padding: 24px; }
.case-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px; }
.case-stats .s { border: 1px solid var(--line); background: var(--panel-2); border-radius: 12px; padding: 12px; text-align: center; }
.case-stats .v { font-size: 20px; font-weight: 800; color: var(--green); }
.case-stats .l { font-size: 11px; color: var(--muted); margin-top: 4px; }
.checks { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.check { display: flex; gap: 12px; padding: 14px; border-radius: 12px; background: var(--panel-2); border: 1px solid var(--line); font-size: 13px; line-height: 1.5; }
.dot { color: var(--green); font-weight: bold; }

/* CTA Buttons */
.cta { background: linear-gradient(135deg,#0f2018 0%, #173224 100%); color: #fff; border-radius: 24px; padding: 32px; margin-top: 24px; }
.cta h2 { font-family: 'Fraunces', serif; margin: 0 0 8px; font-size: 26px; }
.cta p { margin: 0 0 20px; color: #d7eadf; font-size: 14px; line-height: 1.6; }
.cta-btns { display: flex; gap: 12px; flex-wrap: wrap; }
.btn-p { background: #22c55e; color: #fff; border: none; padding: 12px 24px; font-size: 14px; font-weight: 600; border-radius: 8px; cursor: pointer; }
.btn-s { background: #fff; color: #0f172a; border: 1px solid var(--line); padding: 12px 24px; font-size: 14px; font-weight: 600; border-radius: 8px; cursor: pointer; }

/* Responsive Matrix */
@media (max-width: 1140px) {
  .wrap { grid-template-columns: 1fr; gap: 32px; padding-top: 80px; }
  .sidebar-container { position: static !important; }
  .sidebar-sticky-inner { position: static !important; width: 100% !important; max-width: 480px; margin: 0 auto; }
  .sidebar-sticky-inner.is-js-sticky { position: relative !important; top: 0 !important; }
}

@media (max-width: 840px) {
  .hero-grid { grid-template-columns: 1fr; gap: 24px; }
  .two-col { grid-template-columns: 1fr; }
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .metric-grid { grid-template-columns: 1fr; gap: 12px; }
  .checks { grid-template-columns: 1fr; }
}

@media (max-width: 580px) {
  .wrap { padding: 76px 12px 24px; }
  .hero { padding: 24px 16px; border-radius: 20px; }
  h1 { font-size: 24px; }
  .section-inner { padding: 16px; }
  .grid-4 { grid-template-columns: 1fr; }
  .case-stats { grid-template-columns: 1fr; }
  .stat-grid { grid-template-columns: 1fr; }
}
`;

export default PlasticRecyclingBlog;