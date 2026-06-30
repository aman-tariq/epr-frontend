import React, { useEffect } from 'react';
import StickyContactForm from '../../StickyContactForm';

const SolarPanelBlog: React.FC = () => {
  useEffect(() => {
    const wasteData = [
      { y: '2025', v: 0.4, t: 'Current' },
      { y: '2026', v: 0.55, t: 'Current' },
      { y: '2027', v: 0.8, t: 'Current' },
      { y: '2028', v: 1.15, t: 'Projected' },
      { y: '2029', v: 1.6, t: 'Projected' },
      { y: '2030', v: 2.2, t: 'Projected' },
      { y: '2031', v: 2.9, t: 'Projected' },
      { y: '2032', v: 3.6, t: 'Projected' },
    ];

    const wasteChart = document.getElementById('wasteChart');
    if (wasteChart && wasteChart.children.length === 0) {
      const wasteMax = 3.6;
      wasteData.forEach((d) => {
        const col = document.createElement('div');
        col.className = 'bar-col';
        const h = Math.max(26, Math.round((d.v / wasteMax) * 170));
        col.innerHTML = `
          <div class="bar-top">${d.v}M</div>
          <div class="bar ${d.t === 'Projected' ? 'alt' : ''}" style="height:${h}px"></div>
          <div class="bar-label">${d.y}</div>
        `;
        wasteChart.appendChild(col);
      });
    }

    const dbData = [
      { name: 'Glass', score: 96, value: '₹0.42 L/T' },
      { name: 'Aluminium', score: 92, value: '₹0.95 L/T' },
      { name: 'Copper', score: 86, value: '₹1.20 L/T' },
      { name: 'Silver', score: 73, value: '₹1.85 L/T' },
      { name: 'Silicon fraction', score: 64, value: '₹0.60 L/T' },
      { name: 'Polymers / EVA', score: 55, value: '₹0.18 L/T' },
      { name: 'Frames & steel', score: 88, value: '₹0.25 L/T' },
    ];
    const valueDb = document.getElementById('valueDb');
    if (valueDb && valueDb.children.length === 0) {
      dbData.forEach((item) => {
        const row = document.createElement('div');
        row.className = 'db-row';
        row.innerHTML = `
          <div class="db-name">${item.name}</div>
          <div class="db-bar"><div class="db-fill" style="width:${item.score}%"></div></div>
          <div class="db-right">${item.value} · Recovery ${item.score}%</div>
        `;
        valueDb.appendChild(row);
      });
    }

    const capexData = [
      { label: 'Machinery', value: 4.8 },
      { label: 'Civil works', value: 2.3 },
      { label: 'Safety / ETP', value: 1.6 },
      { label: 'Working capital', value: 1.2 },
      { label: 'Licensing', value: 0.7 },
    ];
    const capexChart = document.getElementById('capexChart');
    if (capexChart && capexChart.children.length === 0) {
      const capexMax = 4.8;
      capexData.forEach((d, idx) => {
        const col = document.createElement('div');
        col.className = 'bar-col';
        const h = Math.max(26, Math.round((d.value / capexMax) * 170));
        const classes = idx % 3 === 0 ? 'bar soft' : idx % 2 === 0 ? 'bar alt' : 'bar';
        col.innerHTML = `
          <div class="bar-top">₹${d.value} Cr</div>
          <div class="${classes}" style="height:${h}px"></div>
          <div class="bar-label">${d.label}</div>
        `;
        capexChart.appendChild(col);
      });
    }
  }, []);

  return (
    <div className="wrap solar-wrap has-sticky">
      <style>{staticStyles}</style>

      <div className="page-body">
        <div className="topline">
        <div className="chip">EPR Nexuss</div>
        <div className="chip">Solar Panel Recycling Plant</div>
        <div className="chip">Content + Data Dashboard Style</div>
        <div className="chip">2026 Business Blueprint</div>
      </div>

      <section className="hero">
        <div className="eyebrow">Turning end-of-life modules into a high-value circular business</div>
        <h1>
          From <em>waste</em> to wealth — build a solar recycling plant that is compliant, scalable, and future-ready.
        </h1>
        <p>
          Solar growth is creating a new wave of recoverable materials. With the right land, licences, equipment, and reverse-logistics plan, a solar panel recycling plant can become a profitable industrial asset instead of a storage problem.
        </p>

        <div className="hero-grid">
          <div className="stat">
            <div className="v">2030+</div>
            <div className="l">Expected rise in end-of-life solar modules</div>
          </div>
          <div className="stat">
            <div className="v">5+</div>
            <div className="l">Core compliance steps for a launch-ready plant</div>
          </div>
          <div className="stat">
            <div className="v">2–5 Acres</div>
            <div className="l">Practical land range for a mid-scale setup</div>
          </div>
          <div className="stat">
            <div className="v">6–18 mo</div>
            <div className="l">Planning window for a disciplined project build</div>
          </div>
        </div>
      </section>

      <div className="meta">
        <span>
          By <span className="brand">EPR Nexuss Team</span>
        </span>
        <span>April 2026</span>
        <span>Business Blog + Feasibility Guide</span>
      </div>

      <div className="grid-cols-1 lg:grid-cols-1 gap-[22px] my-[22px]">
        <section className="card">
          <h2 className="section-title">Why this business matters now</h2>
          <p className="section-sub">
            Solar panels do not disappear after use. They become a recoverable material stream containing glass, aluminium, copper, silver, silicon fractions, polymers, and safety-related residues.
          </p>
          <p>
            That means the right recycling model can earn from two sides at once: recovery of valuable fractions and service income from collection, dismantling, and compliance operations. For investors, the opportunity is not just in recycling; it is in owning the infrastructure that supports India’s solar economy for the long term.
          </p>
          <div className="punch">
            Punch line: The next solar boom will not only need installers — it will need recyclers who can unlock value at the end of the panel’s life.
          </div>
          <div className="pill-row">
            <span className="pill">Material recovery</span>
            <span className="pill">EPR alignment</span>
            <span className="pill">Industrial compliance</span>
            <span className="pill">Long-term feedstock</span>
          </div>
        </section>

        <section className="card">
          <h2 className="section-title">Business snapshot</h2>
          <div className="mini-grid">
            <div className="mini">
              <div className="icon">📦</div>
              <h3>Feedstock base</h3>
              <p>Damaged, rejected, and retired modules from EPC contractors, solar parks, rooftops, and storage yards.</p>
            </div>
            <div className="mini">
              <div className="icon">⚙️</div>
              <h3>Plant role</h3>
              <p>Receiving, dismantling, segregation, safe processing, and output preparation for downstream buyers.</p>
            </div>
            <div className="mini">
              <div className="icon">🧾</div>
              <h3>Compliance focus</h3>
              <p>Portal registration, pollution-control approvals, hazardous handling, fire safety, and factory operations.</p>
            </div>
            <div className="mini">
              <div className="icon">💡</div>
              <h3>Revenue logic</h3>
              <p>Combine material sales with recovery services, logistics support, and authorized processing fees.</p>
            </div>
          </div>
        </section>
      </div>

      <section className="section">
        <div className="chart-box">
          <div className="chart-head">
            <div>
              <h3>Projected solar waste inflow</h3>
              <p>Illustrative growth path for planning a mid-scale recycling facility</p>
            </div>
            <p>Units shown in million panels / equivalent waste flow</p>
          </div>
          <div className="bar-wrap" id="wasteChart"></div>
        </div>

        <div className="chart-box">
          <div className="chart-head">
            <div>
              <h3>Recoverable material value database</h3>
              <p>Quick-view recovery model for plant economics and buyer conversations</p>
            </div>
            <p>Recovery score and value estimate</p>
          </div>
          <div className="database" id="valueDb"></div>
        </div>

        <div className="chart-box">
          <div className="chart-head">
            <div>
              <h3>Typical solar panel composition</h3>
              <p>Useful for process design, sorting, and output estimation</p>
            </div>
          </div>
          <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Approx. share</th>
                <th>Planning note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Glass</td>
                <td><span className="badge">45%</span></td>
                <td>Main recovered fraction; large volume, lower processing complexity.</td>
              </tr>
              <tr>
                <td>Aluminium frame</td>
                <td><span className="badge">25%</span></td>
                <td>High-value metal stream with strong resale demand.</td>
              </tr>
              <tr>
                <td>Polymers / backsheet / EVA</td>
                <td><span className="badge">15%</span></td>
                <td>Needs controlled handling and residue management.</td>
              </tr>
              <tr>
                <td>Silicon, copper, silver</td>
                <td><span className="badge">10%</span></td>
                <td>Smaller volume, but the most strategic recovery stream.</td>
              </tr>
              <tr>
                <td>Others</td>
                <td><span className="badge">5%</span></td>
                <td>Trace materials, labels, junction box parts, and residues.</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </section>

      <section className="grid-cols-1 lg:grid-cols-1 gap-[22px] my-[22px]">
        <section className="card">
          <h2 className="section-title">Land and site requirements</h2>
          <p className="section-sub">A recycling plant works best on industrial land with road access, utility support, and enough room for safe storage, vehicle movement, and future expansion.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Requirement</th>
                <th>Preferred specification</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Zoning</td><td>Industrial, manufacturing, or approved recycling use</td></tr>
              <tr><td>Road access</td><td>Wider approach road for truck movement and unloading</td></tr>
              <tr><td>Covered space</td><td>Receiving bay, storage yard, and material segregation area</td></tr>
              <tr><td>Power</td><td>3-phase industrial connection for equipment and utilities</td></tr>
              <tr><td>Safety</td><td>Fire lane, emergency exits, and buffer from sensitive zones</td></tr>
              <tr><td>Expansion</td><td>Reserve land for additional processing or storage capacity</td></tr>
            </tbody>
          </table>
        </section>

        <section className="card">
          <h2 className="section-title">Land size guide</h2>
          <p className="section-sub">Choose the scale according to capacity, feedstock strategy, and automation level.</p>
          <div className="mini-grid">
            <div className="mini">
              <div className="icon">🏢</div>
              <h3>Small setup</h3>
              <p>0.5–1 acre for collection, sorting, and pre-processing support.</p>
            </div>
            <div className="mini">
              <div className="icon">⭐</div>
              <h3>Mid-scale sweet spot</h3>
              <p>2–5 acres for the most practical balance of storage, dismantling, and logistics.</p>
            </div>
            <div className="mini">
              <div className="icon">🏭</div>
              <h3>Large integrated plant</h3>
              <p>6+ acres for advanced separation, higher throughput, and expansion capacity.</p>
            </div>
            <div className="mini">
              <div className="icon">🛣️</div>
              <h3>Location advantage</h3>
              <p>Near solar corridors, EPC clusters, industrial belts, and strong transport access.</p>
            </div>
          </div>
        </section>
      </section>

      <section className="chart-box">
        <div className="chart-head">
          <div>
            <h3>Approval and licence roadmap</h3>
            <p>A clean structure for building the project without compliance surprises</p>
          </div>
        </div>
        <div className="timeline">
          <div className="step">
            <div className="num">1</div>
            <div>
              <h4>EPR / portal registration</h4>
              <p>Register the operation and maintain inventory, tracking, and reporting records for solar-related waste handling.</p>
              <span className="time">Early-stage compliance</span>
            </div>
          </div>
          <div className="step">
            <div className="num">2</div>
            <div>
              <h4>Consent to Establish</h4>
              <p>Secure pollution-control approval before civil work, layout finalisation, and equipment installation.</p>
              <span className="time">Before construction</span>
            </div>
          </div>
          <div className="step">
            <div className="num">3</div>
            <div>
              <h4>Factory and fire approvals</h4>
              <p>Prepare the plant for worker safety, evacuation planning, emergency response, and equipment operation.</p>
              <span className="time">Before commissioning</span>
            </div>
          </div>
          <div className="step">
            <div className="num">4</div>
            <div>
              <h4>Consent to Operate</h4>
              <p>Open the facility for production after the site inspection confirms readiness and compliance.</p>
              <span className="time">Launch phase</span>
            </div>
          </div>
          <div className="step">
            <div className="num">5</div>
            <div>
              <h4>Hazardous waste authorisation</h4>
              <p>Manage residues, contaminated fractions, and by-products with approved storage, handling, and disposal flow.</p>
              <span className="time">Ongoing requirement</span>
            </div>
          </div>
        </div>
      </section>

      <section className="chart-box">
        <div className="chart-head">
          <div>
            <h3>Typical investment split</h3>
            <p>Illustrative capex mix for a mid-scale solar recycling project</p>
          </div>
        </div>
        <div className="bar-wrap" id="capexChart"></div>
      </section>

      <section className="case">
        <div className="case-head">
          <div className="tag">Case study</div>
          <h3>How a Gujarat-based promoter turned a solar recycling concept into a working business</h3>
        </div>
        <div className="case-body">
          <div className="kpis">
            <div className="kpi"><div className="v">2,800 TPA</div><div className="l">Processing capacity</div></div>
            <div className="kpi"><div className="v">18 Months</div><div className="l">Concept to first batch</div></div>
            <div className="kpi"><div className="v">₹10.8 Cr</div><div className="l">Illustrative project capex</div></div>
          </div>

          <div className="cols">
            <div>
              <h3 className="section-title" style={{ fontSize: '18px', marginBottom: '10px' }}>What the promoter needed</h3>
              <ul className="list">
                <li>No licensed land or compliant site layout</li>
                <li>No established reverse-logistics network</li>
                <li>Need for a structured recovery model with strong approvals</li>
                <li>Safe handling for glass, aluminium, and mixed material fractions</li>
              </ul>
            </div>
            <div>
              <h3 className="section-title" style={{ fontSize: '18px', marginBottom: '10px' }}>What the project achieved</h3>
              <ul className="list">
                <li>Industrial land identified in a suitable zone</li>
                <li>Licensing roadmap arranged around pollution-control and fire safety</li>
                <li>Collection tie-ups formed with EPC and solar-park partners</li>
                <li>Operating flow built for sorting, dismantling, and recovery</li>
              </ul>
            </div>
          </div>

          <table className="profit">
            <thead>
              <tr><th>Revenue / Cost Head</th><th>Year 1</th><th>Year 2</th></tr>
            </thead>
            <tbody>
              <tr><td>Recovered glass sales</td><td className="pos">₹210 L</td><td className="pos">₹340 L</td></tr>
              <tr><td>Aluminium frame sales</td><td className="pos">₹160 L</td><td className="pos">₹260 L</td></tr>
              <tr><td>Copper / wire recovery</td><td className="pos">₹95 L</td><td className="pos">₹145 L</td></tr>
              <tr><td>Silver / silicon fractions</td><td className="pos">₹120 L</td><td className="pos">₹185 L</td></tr>
              <tr><td>Service and dismantling fees</td><td className="pos">₹135 L</td><td className="pos">₹205 L</td></tr>
              <tr><td>Operating and logistics costs</td><td className="neg">-₹310 L</td><td className="neg">-₹390 L</td></tr>
              <tr><td>Compliance and admin</td><td className="neg">-₹55 L</td><td className="neg">-₹65 L</td></tr>
              <tr><td>Net result</td><td className="pos">₹355 L</td><td className="pos">₹680 L</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="cta-main">
          <div className="cta-eyebrow">⚡ EPR Nexuss — India's Complete Solar Panel Recycling Partner</div>
          <div className="cta-h">You Now Have The Blueprint.<br /><em>Let EPR Nexuss Build It With You.</em></div>
          <div className="cta-sub">Licences. Land. Technology. Collection. EPR certificates. We handle every step — so you focus on building the most profitable green business of the decade. First consultation is completely free.</div>
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
          <div className="cta-trust">
            <span className="cta-ti"><span className="ck">✓</span> Free consultation</span>
            <span className="cta-ti"><span className="ck">✓</span> End-to-end licensing</span>
            <span className="cta-ti"><span className="ck">✓</span> Technology partners</span>
            <span className="cta-ti"><span className="ck">✓</span> EPR certificate guaranteed</span>
            <span className="cta-ti"><span className="ck">✓</span> Pan-India coverage</span>
          </div>
        </div>
      </div>

      <div className="hidden lg:block sticky top-28 self-start">
        <StickyContactForm />
      </div>
    </div>
  );
};

export const staticStyles = `
  :root {
    --bg: #f5f7fb;
    --surface: #ffffff;
    --surface-2: #f0f4ff;
    --ink: #102033;
    --muted: #5b6b7f;
    --line: #dbe3ef;
    --accent: #0f766e;
    --accent-2: #2563eb;
    --accent-3: #f59e0b;
    --good: #16a34a;
    --warn: #dc2626;
    --soft: #e7f6f4;
    --shadow: 0 20px 50px rgba(16, 32, 51, .08);
    --radius: 24px;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { margin: 0; }

  /* ===== LAYOUT ===== */
  .wrap {
    width: 100%;
    max-width: 1120px;
    margin: 80px auto 40px;
    padding: 24px 18px 36px;
    background: #f5f7fb;
  }

  .wrap.has-sticky {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 32px;
    max-width: 1480px;
    margin: 80px auto 40px;
    padding: 24px 18px 36px;
    background: #f5f7fb;
  }

  .page-body {
    min-width: 0;
    width: 100%;
  }

  .form-column {
    width: 320px;
    position: relative;
  }

  /* ===== TOP CHIPS ===== */
  .topline { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; }
  .chip {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .02em;
    padding: 8px 12px;
    border-radius: 999px;
    background: #fff;
    border: 1px solid var(--line);
    box-shadow: 0 8px 20px rgba(16, 32, 51, .04);
  }

  /* ===== HERO ===== */
  .hero {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #081726 0%, #0d2b43 48%, #0f766e 100%);
    color: #fff;
    border-radius: 32px;
    padding: 34px;
    box-shadow: var(--shadow);
    margin-bottom: 22px;
  }
  .hero::before, .hero::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }
  .hero::before {
    width: 320px; height: 320px;
    right: -110px; top: -120px;
    background: radial-gradient(circle, rgba(255,255,255,.16), transparent 65%);
  }
  .hero::after {
    width: 240px; height: 240px;
    left: -90px; bottom: -110px;
    background: radial-gradient(circle, rgba(255,255,255,.10), transparent 65%);
  }
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,.11);
    border: 1px solid rgba(255,255,255,.18);
    padding: 7px 12px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .hero h1 {
    margin: 0 0 12px;
    font-size: clamp(24px, 4vw, 52px);
    line-height: 1.06;
    letter-spacing: -0.03em;
    max-width: 850px;
  }
  .hero h1 em { font-style: normal; color: #fde68a; }
  .hero p { margin: 0; max-width: 880px; color: rgba(255,255,255,.9); font-size: 16px; }

  .hero-grid {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
  }
  .stat {
    background: rgba(255,255,255,.10);
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 22px;
    padding: 16px 14px;
    backdrop-filter: blur(10px);
    min-height: 92px;
  }
  .stat .v { font-size: 26px; font-weight: 800; line-height: 1.1; }
  .stat .l { margin-top: 8px; font-size: 12px; color: rgba(255,255,255,.84); }

  /* ===== META ===== */
  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 12px;
    color: var(--muted);
    margin: 0 2px 26px;
  }
  .meta span { display: inline-flex; align-items: center; gap: 8px; }
  .brand { color: var(--accent); font-weight: 800; }

  /* ===== CARDS / GRID ===== */
  .grid {
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    gap: 18px;
    margin-bottom: 18px;
  }
  .card {
    background: var(--surface);
    border: 1px solid rgba(219,227,239,.8);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 22px;
    margin-bottom: 10px;
  }
  .section-title { margin: 0 0 12px; font-size: 24px; letter-spacing: -0.02em; }
  .section-sub { margin: 0 0 16px; color: var(--muted); }

  .punch {
    background: linear-gradient(135deg, rgba(15,118,110,.10), rgba(37,99,235,.10));
    border-left: 5px solid var(--accent);
    border-radius: 18px;
    padding: 16px 18px;
    margin: 18px 0 0;
    font-weight: 700;
    color: #12344d;
  }

  .mini-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin-top: 16px;
  }
  .mini {
    border-radius: 20px;
    border: 1px solid var(--line);
    padding: 16px;
    background: linear-gradient(180deg,#fff,#fbfdff);
    min-height: 138px;
  }
  .mini .icon { font-size: 24px; }
  .mini h3 { margin: 10px 0 8px; font-size: 16px; }
  .mini p { margin: 0; color: var(--muted); font-size: 13px; }

  /* ===== SECTION + CHART BOX ===== */
  .section { margin-top: 18px; display: grid; grid-template-columns: 1fr; gap: 18px; }
  .chart-box {
    background: linear-gradient(180deg,#fff,#fbfcff);
    border: 1px solid var(--line);
    border-radius: 28px;
    box-shadow: var(--shadow);
    padding: 22px;
  }
  .chart-head {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
    align-items: end;
    margin-bottom: 14px;
  }
  .chart-head h3 { margin: 0; font-size: 20px; }
  .chart-head p { margin: 0; color: var(--muted); font-size: 13px; }

  /* ===== BAR CHARTS ===== */
  .bar-wrap {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    min-height: 220px;
    padding-top: 8px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 8px;
  }
  .bar-col { flex: 1; min-width: 58px; flex-shrink: 0; text-align: center; }
  .bar-top { font-size: 12px; font-weight: 800; color: var(--accent-2); margin-bottom: 8px; }
  .bar {
    width: 100%;
    border-radius: 16px 16px 8px 8px;
    background: linear-gradient(180deg, var(--accent-2), var(--accent));
    min-height: 24px;
    box-shadow: 0 10px 18px rgba(37,99,235,.18);
  }
  .bar.alt { background: linear-gradient(180deg,#0f766e,#14b8a6); }
  .bar.soft { background: linear-gradient(180deg,#f59e0b,#fb7185); }
  .bar-label { margin-top: 10px; font-size: 12px; color: var(--muted); font-weight: 700; }

  /* ===== VALUE DATABASE ===== */
  .database { display: grid; gap: 10px; }
  .db-row {
    display: grid;
    grid-template-columns: 1.6fr .9fr .8fr;
    gap: 10px;
    align-items: center;
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 12px 14px;
  }
  .db-name { font-weight: 800; }
  .db-bar { height: 12px; border-radius: 999px; background: #edf2f7; overflow: hidden; }
  .db-fill { height: 100%; border-radius: 999px; background: linear-gradient(90deg, var(--accent), var(--accent-2)); }
  .db-right { text-align: right; font-size: 12px; color: var(--muted); font-weight: 700; }

  /* ===== PILLS ===== */
  .pill-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
  .pill { padding: 8px 12px; border-radius: 999px; font-size: 12px; font-weight: 800; background: var(--soft); color: #0f766e; border: 1px solid #cdebe7; }

  /* ===== TABLES ===== */
  .table-wrap { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; border-radius: 20px; }
  .table { width: 100%; min-width: 480px; border-collapse: collapse; overflow: hidden; border-radius: 20px; border: 1px solid var(--line); }
  .table th { text-align: left; background: #0f172a; color: #fff; padding: 12px 14px; font-size: 13px; }
  .table td { padding: 12px 14px; border-top: 1px solid var(--line); font-size: 13px; vertical-align: top; background: #fff; }
  .table tr:nth-child(even) td { background: #fbfcfe; }
  .badge { display: inline-flex; padding: 4px 8px; border-radius: 999px; font-size: 11px; font-weight: 800; background: #e7f6f4; color: #0f766e; }

  /* ===== TIMELINE ===== */
  .timeline { display: grid; gap: 12px; }
  .step { display: grid; grid-template-columns: 58px 1fr; gap: 14px; align-items: start; background: #fff; border: 1px solid var(--line); border-radius: 20px; padding: 16px; }
  .num {
    width: 58px; height: 58px;
    border-radius: 18px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; font-weight: 900; color: #fff;
    background: linear-gradient(135deg, var(--accent-2), var(--accent));
    flex-shrink: 0;
  }
  .step h4 { margin: 0 0 4px; font-size: 16px; }
  .step p { margin: 0; color: var(--muted); font-size: 13px; }
  .time { display: inline-block; margin-top: 10px; font-size: 11px; font-weight: 800; color: #0f766e; background: #e7f6f4; padding: 4px 8px; border-radius: 999px; }

  /* ===== CASE STUDY ===== */
  .case { background: linear-gradient(180deg,#fff,#f9fbff); border: 1px solid var(--line); border-radius: 28px; box-shadow: var(--shadow); overflow: hidden; }
  .case-head { background: linear-gradient(135deg,#0f172a 0%, #0f766e 100%); color: #fff; padding: 22px; }
  .case-head .tag { display: inline-block; padding: 6px 10px; border-radius: 999px; background: rgba(255,255,255,.14); border: 1px solid rgba(255,255,255,.18); font-size: 11px; letter-spacing: .06em; text-transform: uppercase; font-weight: 800; margin-bottom: 10px; }
  .case-head h3 { margin: 0; font-size: 25px; line-height: 1.15; }
  .case-body { padding: 22px; }
  .kpis { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-bottom: 18px; }
  .kpi { border: 1px solid var(--line); background: #fff; border-radius: 18px; padding: 16px; text-align: center; }
  .kpi .v { font-size: 22px; font-weight: 900; color: var(--accent-2); }
  .kpi .l { font-size: 12px; color: var(--muted); margin-top: 4px; }
  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .list { padding: 0; margin: 0; list-style: none; display: grid; gap: 8px; }
  .list li { background: #fff; border: 1px solid var(--line); border-radius: 16px; padding: 10px 12px; font-size: 13px; color: #243447; }
  .profit { width: 100%; border-collapse: collapse; margin-top: 10px; overflow: hidden; border-radius: 18px; }
  .profit th, .profit td { padding: 10px 12px; border-bottom: 1px solid var(--line); font-size: 13px; }
  .profit th { text-align: left; background: #f8fafc; }
  .profit tr:last-child td { font-weight: 900; background: #f0fdf4; }
  .pos { color: var(--good); font-weight: 800; }
  .neg { color: var(--warn); font-weight: 800; }

  /* ===== INLINE CTA ===== */
  .cta-inline { background: #E1F5EE; border: 0.5px solid #5DCAA5; border-radius: 10px; padding: 14px 18px; margin: 26px 0; display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
  .cta-inline-text { font-size: 13px; color: #085041; line-height: 1.5; }
  .cta-inline-btn { background: #1D9E75; color: #fff; border: none; border-radius: 8px; padding: 9px 16px; font-size: 12px; font-weight: 700; cursor: pointer; white-space: nowrap; }

  /* ===== MAIN CTA ===== */
  .cta-main {
    background: linear-gradient(145deg, rgb(11,31,58) 0%, rgb(28,61,110) 50%, rgb(11,31,58) 100%);
    border-radius: 18px;
    padding: 40px 28px;
    margin-top: 36px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .cta-eyebrow { font-size: 10px; color: #5DCAA5; font-weight: 700; letter-spacing: .1em; margin-bottom: 12px; text-transform: uppercase; }
  .cta-h { font-size: 24px; font-weight: 900; color: #fff; line-height: 1.3; margin-bottom: 10px; }
  .cta-h em { font-style: normal; color: #5DCAA5; }
  .cta-sub { font-size: 13px; color: #9CA3AF; line-height: 1.7; margin-bottom: 26px; max-width: 440px; margin-left: auto; margin-right: auto; }
  .cta-btns { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 22px; }
  .cta-trust { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .cta-ti { font-size: 11px; color: #6B7280; display: flex; align-items: center; gap: 4px; }
  .ck { width: 14px; height: 14px; background: #1D9E75; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: #fff; font-size: 8px; }

  /* ===== BUTTONS ===== */
  .btn-p {
    background: linear-gradient(135deg, #16a34a, #22c55e);
    color: #ffffff;
    border: none;
    padding: 12px 24px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 18px rgba(34,197,94,.25);
  }
  .btn-p:hover { background: linear-gradient(135deg,#15803d,#16a34a); transform: translateY(-2px); }
  .btn-s {
    background: #ffffff;
    color: #0f172a;
    border: 1px solid #cbd5e1;
    padding: 12px 22px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .btn-s:hover { background: #f8fafc; border-color: #94a3b8; }

  /* ===== STICKY EXPERT ===== */
  .sticky-green {
    position: sticky;
    bottom: 20px;
    margin: 30px 0 20px;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(16px);
    border: 1px solid #a7f3d0;
    box-shadow: 0 25px 50px -12px rgba(21,128,61,.15);
    border-radius: 20px;
    padding: 16px 20px;
    z-index: 100;
  }
  .sticky-content { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
  .sticky-text { flex: 1; min-width: 200px; }
  .sticky-text strong { display: block; color: #15803d; font-size: 15px; font-weight: 800; margin-bottom: 3px; }
  .sticky-text span { font-size: 13px; color: #4a5e57; }
  .btn-expert {
    background: linear-gradient(135deg,#15803d,#22c55e);
    color: white;
    border: none;
    border-radius: 16px;
    padding: 14px 24px;
    font-weight: 800;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 10px 25px rgba(21,128,61,.25);
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  /* ===== RESPONSIVE ===== */

  /* Tablet */
  @media (max-width: 980px) {
    .wrap.has-sticky {
      grid-template-columns: 1fr;
      gap: 24px;
      margin: 60px auto 20px;
      padding: 16px 16px 40px;
    }
    .form-column {
      width: 100%;
      max-width: 100%;
    }
    .hero-grid { grid-template-columns: repeat(2, 1fr); }
    .grid { grid-template-columns: 1fr; }
    .cols { grid-template-columns: 1fr 1fr; }
    .kpis { grid-template-columns: repeat(3, 1fr); }
  }

  /* Mobile */
  @media (max-width: 680px) {
    .wrap,
    .wrap.has-sticky {
      margin: 40px auto 20px;
      padding: 12px 12px 32px;
    }

    .page-body {
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
      margin-top:30px;
    }

    .form-column {
      width: 100%;
      max-width: 100%;
    }

    .hero {
      padding: 20px;
      border-radius: 20px;
    }

    .hero h1 { font-size: 22px; }

    .hero-grid { grid-template-columns: 1fr 1fr; gap: 8px; }

    .grid,
    .cols,
    .kpis,
    .mini-grid {
      grid-template-columns: 1fr;
    }

    .section { display: flex; flex-direction: column; gap: 16px; }

    .card,
    .chart-box,
    .case-body {
      padding: 16px;
    }

    .section-title { font-size: 20px; }

    .bar-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    .bar-col { min-width: 55px; flex-shrink: 0; }

    .db-row { grid-template-columns: 1fr; gap: 6px; }
    .db-right { text-align: left; }

    .step { grid-template-columns: 48px 1fr; gap: 10px; }
    .num { width: 48px; height: 48px; border-radius: 14px; font-size: 16px; }

    .cta-btns { flex-direction: column; }
    .btn-p, .btn-s { width: 100%; }

    .sticky-green { bottom: 12px; padding: 14px 16px; }

    .profit { display: block; overflow-x: auto; }
  }

  @media (max-width: 400px) {
    .hero-grid { grid-template-columns: 1fr; }
    .kpis { grid-template-columns: 1fr 1fr; }
  }
`;

export default SolarPanelBlog;
