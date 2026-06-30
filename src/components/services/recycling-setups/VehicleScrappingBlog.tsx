import React from 'react';
import { ChevronRight } from 'lucide-react';
import StickyContactForm from '../../StickyContactForm';

const VehicleScrappingBlog: React.FC = () => {
  // --- Static Data Definitions ---
  const elvData = [
    { y: '2020', v: 32, a: true }, { y: '2021', v: 36, a: true }, { y: '2022', v: 40, a: true },
    { y: '2023', v: 44, a: true }, { y: '2024', v: 48, a: true }, { y: '2025', v: 56, a: false },
    { y: '2026', v: 65, a: false }, { y: '2027', v: 76, a: false }, { y: '2028', v: 88, a: false },
    { y: '2029', v: 102, a: false }, { y: '2030', v: 118, a: false }
  ];

  const matData = [
    { name: 'Steel body & chassis', pct: 96, val: '₹28K/T', color: '#64748b' },
    { name: 'Aluminium frames', pct: 92, val: '₹1.1L/T', color: '#0f8b8d' },
    { name: 'Copper wiring', pct: 85, val: '₹6.8L/T', color: '#d97706' },
    { name: 'Catalytic converter', pct: 80, val: '₹3.2L/T', color: '#7c3aed' },
    { name: 'Lead battery', pct: 98, val: '₹1.5L/T', color: '#475569' },
    { name: 'Used engine oil', pct: 90, val: '₹38/L', color: '#92400e' },
    { name: 'Tyres / rubber', pct: 70, val: '₹12K/T', color: '#16a34a' },
    { name: 'Glass / windshield', pct: 60, val: '₹8K/T', color: '#2563eb' },
  ];

  const timelineData = [
    { label: 'Land finalization', start: 0, dur: 2, color: '#0f5fff' },
    { label: 'Company setup', start: 0, dur: 1, color: '#0f8b8d' },
    { label: 'CTE filing', start: 1, dur: 4, color: '#2563eb' },
    { label: 'Civil works', start: 4, dur: 6, color: '#0f8b8d' },
    { label: 'Equipment ordering', start: 4, dur: 5, color: '#16a34a' },
    { label: 'Utility install', start: 8, dur: 4, color: '#22c55e' },
    { label: 'Safety approvals', start: 8, dur: 3, color: '#f59e0b' },
    { label: 'CTO process', start: 11, dur: 3, color: '#0f5fff' },
    { label: 'Hiring & training', start: 11, dur: 4, color: '#0f8b8d' },
    { label: 'Trial operations', start: 15, dur: 3, color: '#16a34a' },
    { label: 'Collection network', start: 6, dur: 10, color: '#2563eb' },
    { label: 'First vehicle intake', start: 18, dur: 6, color: '#0f172a' },
  ];

  const capexData = [
    { label: 'Machinery', val: 2.8, color: '#0f5fff' },
    { label: 'Civil works', val: 1.6, color: '#0f8b8d' },
    { label: 'ETP & safety', val: 1.2, color: '#16a34a' },
    { label: 'Working capital', val: 1.0, color: '#22c55e' },
    { label: 'Licensing', val: 0.6, color: '#f59e0b' },
  ];

  return (
    <div style={styles.blogWrap} className='wrap has-sticky'>
      <style>{staticStyles}</style>
      
      <div className="page-body">
        {/* TAGS */}
        <div style={styles.topChips}>
          <div style={styles.chip}>EPR Nexuss</div>
          <div style={styles.chip}>Vehicle Scrapping Facility</div>
          <div style={styles.chip}>Unique design edition</div>
          <div style={styles.chip}>Investor-ready storytelling</div>
        </div>

        {/* HERO */}
        <div style={styles.hero}>
          <div style={styles.heroBefore}></div>
          <div style={styles.heroAfter}></div>
          <div style={styles.eyebrow}>A business built from recovery, compliance, and smart logistics</div>
          <div className="hero-grid">
            <div>
              <h1>When a vehicle reaches the end of the road, <em style={{ fontStyle: 'normal', color: '#fde68a' }}>the real value begins.</em></h1>
              <p>A scrapping facility can convert old vehicles into a clean, organised revenue stream. The right setup creates income from metal recovery, parts resale, certificate processing, and collection partnerships.</p>
            </div>
            <div style={styles.heroSide}>
              <h3>Market pulse</h3>
              <div className="grid-mini">
                <div style={styles.miniStat}><div style={styles.miniStatV}>51L+</div><div style={styles.miniStatL}>End-of-life vehicles available</div></div>
                <div style={styles.miniStat}><div style={styles.miniStatV}>₹10K Cr</div><div style={styles.miniStatL}>Illustrative opportunity value</div></div>
                <div style={styles.miniStat}><div style={styles.miniStatV}>3–6 Acres</div><div style={styles.miniStatL}>Best mid-scale footprint</div></div>
                <div style={styles.miniStat}><div style={styles.miniStatV}>18–22 Mo</div><div style={styles.miniStatL}>Project execution cycle</div></div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.meta}>
          <span>Prepared by <strong style={{ color: '#2563eb' }}>EPR Nexuss Team</strong></span>
          <span>April 2026</span>
          <span>Vehicle scrapping business blog</span>
        </div>

        {/* LAYOUT 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-[22px] my-[22px]">
          <div style={styles.card}>
            <h2 style={styles.title}>Why the organised route wins</h2>
            <p style={styles.sub}>A registered scrapping facility performs better because it controls the process, the documentation, and the revenue flow.</p>
            <p>Instead of handling vehicles as loose scrap, a formal plant works with a structured intake, depollution stage, dismantling section, recovery line, and traceable certificate workflow. That gives the business more credibility, more control, and more ways to earn.</p>
            <div style={styles.featureNote}>Punch line: Old vehicles are not a burden when the system knows how to unlock their hidden value.</div>
            <div style={styles.tags}>
              <span style={styles.tag}>Metal recovery</span>
              <span style={styles.tag}>Digital certificates</span>
              <span style={styles.tag}>Fleet partnerships</span>
              <span style={styles.tag}>Compliance-focused model</span>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.title}>What happens inside the plant</h2>
            <div className="story-grid">
              <div style={styles.story}>
                <div style={styles.storyIcon}>🚗</div>
                <h3>Receiving</h3>
                <p>Vehicles are inspected, recorded, weighed, and tagged before processing begins.</p>
              </div>
              <div style={styles.story}>
                <div style={styles.storyIcon}>🧪</div>
                <h3>Depollution</h3>
                <p>Fluids, batteries, and other hazardous components are safely removed first.</p>
              </div>
              <div style={styles.story}>
                <div style={styles.storyIcon}>🔩</div>
                <h3>Dismantling</h3>
                <p>Reusable parts are separated and sent to resale or refurbishment channels.</p>
              </div>
              <div style={styles.story}>
                <div style={styles.storyIcon}>📊</div>
                <h3>Tracking</h3>
                <p>Vehicle identity, certificate flow, and material movement are documented digitally.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION */}
        <div className="section-block">
          {/* ELV Forecast Chart */}
          <div style={styles.chart} className="chart-card-container">
            <div style={styles.chartHead}>
              <div>
                <h3>ELV growth forecast</h3>
                <p>Planning curve for a vehicle scrapping project</p>
              </div>
              <p>Units in lakh vehicles</p>
            </div>
            <div className="chart-scroll-container">
              <div className="bar-chart-canvas">
                {elvData.map((d, index) => {
                  const h = Math.round((d.v / 118) * 168);
                  return (
                    <div className="bar-col" key={index}>
                      <div className="bar-top">{d.v}L</div>
                      <div className={`bar ${d.a ? '' : 'alt'}`} style={{ height: `${h}px` }}></div>
                      <div className="bar-label">{d.y}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Recovery Database Chart */}
          <div style={styles.chart} className="chart-card-container">
            <div style={styles.chartHead}>
              <div>
                <h3>Recovery database</h3>
                <p>Quick view of the most valuable input streams</p>
              </div>
              <p>Recovery score and indicative value</p>
            </div>
            <div className="db-layout-container">
              {matData.map((d, index) => (
                <div className="db-row-custom" key={index}>
                  <div className="db-name-custom">{d.name}</div>
                  <div className="db-bar-custom">
                    <div className="db-fill-custom" style={{ width: `${d.pct}%`, background: d.color }}></div>
                  </div>
                  <div className="db-right-custom">{d.val} · Recovery {d.pct}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Vehicle Type Split Table */}
          <div style={styles.chart} className="chart-card-container">
            <div style={styles.chartHead}>
              <div>
                <h3>Vehicle type split</h3>
                <p>Useful for capacity, layout, and workflow planning</p>
              </div>
            </div>
            <div className="table-wrapper">
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.tableTh}>Vehicle type</th>
                    <th style={styles.tableTh}>Estimated share</th>
                    <th style={styles.tableTh}>Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={styles.tableTd}>Two-wheelers</td><td style={styles.tableTd}><span style={styles.badge}>42%</span></td><td style={styles.tableTd}>High intake volume with fast movement through the line.</td></tr>
                  <tr><td style={styles.tableTd}>Passenger cars / SUVs</td><td style={styles.tableTd}><span style={styles.badge}>24%</span></td><td style={styles.tableTd}>Good resale parts and balanced material recovery.</td></tr>
                  <tr><td style={styles.tableTd}>Commercial vehicles</td><td style={styles.tableTd}><span style={styles.badge}>15%</span></td><td style={styles.tableTd}>Heavier recovery, more steel, and larger dismantling work.</td></tr>
                  <tr><td style={styles.tableTd}>Three-wheelers</td><td style={styles.tableTd}><span style={styles.badge}>9%</span></td><td style={styles.tableTd}>Urban collection opportunity with steady throughput.</td></tr>
                  <tr><td style={styles.tableTd}>Tractors / others</td><td style={styles.tableTd}><span style={styles.badge}>10%</span></td><td style={styles.tableTd}>Regional inflow stream for broader reach.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* LAYOUT 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-[22px] my-[22px]">
          <div style={styles.card}>
            <h2 style={styles.title}>Site selection and land strategy</h2>
            <p style={styles.sub}>A smart plot makes the facility safer, cleaner, and easier to grow.</p>
            <div className="table-wrapper">
              <table style={styles.table}>
                <thead><tr><th style={styles.tableTh}>Requirement</th><th style={styles.tableTh}>Preferred specification</th></tr></thead>
                <tbody>
                  <tr><td style={styles.tableTd}>Zoning</td><td style={styles.tableTd}>Industrial, auto-cluster, or approved manufacturing land</td></tr>
                  <tr><td style={styles.tableTd}>Access</td><td style={styles.tableTd}>Wide approach for trucks, tow vehicles, and storage movement</td></tr>
                  <tr><td style={styles.tableTd}>Built-up layout</td><td style={styles.tableTd}>Receiving bay, depollution area, dismantling line, and storage</td></tr>
                  <tr><td style={styles.tableTd}>Power</td><td style={styles.tableTd}>3-phase industrial supply with room for equipment load</td></tr>
                  <tr><td style={styles.tableTd}>Safety buffer</td><td style={styles.tableTd}>Fire lane, spill control, and emergency access area</td></tr>
                  <tr><td style={styles.tableTd}>Expansion</td><td style={styles.tableTd}>Space reserved for future automation or more storage</td></tr>
                </tbody>
              </table>
            </div>

            <div className="land-grid">
              <div style={styles.landCard}><div style={styles.landIcon}>🏢</div><div style={styles.landLabel}>Starter unit</div><div style={styles.landVal}>1–2 Acres</div><div style={styles.landDesc}>Useful for collection, sorting, and smaller recovery work.</div></div>
              <div style={{ ...styles.landCard, ...styles.landCardFeatured }}><div style={styles.landIcon}>⭐</div><div style={styles.landLabel}>Best fit</div><div style={styles.landVal}>3–6 Acres</div><div style={styles.landDesc}>Balanced for intake, processing, and future expansion.</div></div>
              <div style={styles.landCard}><div style={styles.landIcon}>🏭</div><div style={styles.landLabel}>Large plant</div><div style={styles.landVal}>10+ Acres</div><div style={styles.landDesc}>Higher automation and larger storage capacity.</div></div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.title}>Approval path</h2>
            <p style={styles.sub}>A clear sequence keeps the launch moving and avoids bottlenecks.</p>
            <div className="timeline-flow-list">
              <div style={styles.step}><div style={styles.num}>1</div><div><h4>MoRTH RVSF registration</h4><p>Main authorisation to operate as a recognised scrapping facility.</p><span style={styles.time}>45–90 days</span></div></div>
              <div style={styles.step}><div style={styles.num}>2</div><div><h4>Consent to Establish</h4><p>Needed before civil work and machine installation start.</p><span style={styles.time}>60–90 days</span></div></div>
              <div style={styles.step}><div style={styles.num}>3</div><div><h4>Hazardous waste authorisation</h4><p>For fluids, batteries, residues, and safe handling flow.</p><span style={styles.time}>30–60 days</span></div></div>
              <div style={styles.step}><div style={styles.num}>4</div><div><h4>Factory licence and Fire NOC</h4><p>Supports worker protection and emergency readiness.</p><span style={styles.time}>20–45 days</span></div></div>
              <div style={styles.step}><div style={styles.num}>5</div><div><h4>Consent to Operate</h4><p>Final clearance before the facility receives vehicles commercially.</p><span style={styles.time}>30–60 days</span></div></div>
            </div>
          </div>
        </div>

        {/* Setup Timeline Chart Block */}
        <div style={{ ...styles.chart, ...styles.sectionGap }} className="chart-card-container">
          <div style={styles.chartHead}>
            <div>
              <h3>Setup timeline</h3>
              <p>A month-wise roadmap for disciplined execution</p>
            </div>
          </div>
          <div className="chart-scroll-container">
            <div className="timeline-chart-canvas">
              {timelineData.map((d, index) => {
                const h = Math.max(26, Math.round((d.dur / 10) * 160));
                const left = (d.start / 24) * 100;
                const width = (d.dur / 24) * 100;
                return (
                  <div className="timeline-bar-col" key={index}>
                    <div className="bar-top">M{d.start + 1}–{d.start + d.dur}</div>
                    <div className="timeline-track-window">
                      <div className="timeline-filled-span" style={{ left: `${left}%`, width: `${width}%`, height: `${h}px`, background: d.color }}></div>
                    </div>
                    <div className="bar-label">{d.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Investment Split Chart Block */}
        <div style={{ ...styles.chart, ...styles.sectionGap }} className="chart-card-container">
          <div style={styles.chartHead}>
            <div>
              <h3>Investment split</h3>
              <p>Indicative capex mix for a mid-scale scrapping business</p>
            </div>
          </div>
          <div className="chart-scroll-container">
            <div className="bar-chart-canvas">
              {capexData.map((d, index) => {
                const h = Math.round((d.val / 2.8) * 168);
                return (
                  <div className="bar-col" key={index}>
                    <div className="bar-top">₹{d.val} Cr</div>
                    <div className="bar orange" style={{ height: `${h}px`, background: d.color }}></div>
                    <div className="bar-label">{d.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CASE STUDY */}
        <div style={styles.case}>
          <div style={styles.caseHead}>
            <div style={styles.caseTag}>Case study</div>
            <h3>A mid-scale facility in Pune turned structured recovery into a stable business line</h3>
          </div>
          <div style={styles.caseBody}>
            <div className="kpi-grid">
              <div style={styles.kpi}><div style={styles.kpiV}>6,000 / yr</div><div style={styles.kpiL}>Vehicle capacity</div></div>
              <div style={styles.kpi}><div style={styles.kpiV}>₹7.2 Cr</div><div style={styles.kpiL}>Illustrative capex</div></div>
              <div style={styles.kpi}><div style={styles.kpiV}>21 Mo</div><div style={styles.kpiL}>Concept to launch</div></div>
            </div>

            <div className="cols-grid">
              <div>
                <h2 style={{ ...styles.title, fontSize: '18px', marginBottom: '10px' , color: 'blue'}}>What they needed</h2>
                <ul style={styles.list}>
                  <li>Industrial land with the correct permissions</li>
                  <li>A full approval path across departments</li>
                  <li>A formal intake network for vehicles</li>
                  <li>Higher margins than informal scrap handling</li>
                </ul>
              </div>
              <div>
                <h2 style={{ ...styles.title, fontSize: '18px', marginBottom: '10px' , color: 'green'}}>What was implemented</h2>
                <ul style={styles.list}>
                  <li>Structured licensing and registration workflow</li>
                  <li>Collection tie-ups with dealers and fleet operators</li>
                  <li>Digital tracking for certificates and inventory</li>
                  <li>Recovery lines for safe dismantling and sorting</li>
                </ul>
              </div>
            </div>

            <div className="table-wrapper" style={{ marginTop: '16px' }}>
              <table style={styles.profit}>
                <thead>
                  <tr><th style={styles.profitTh}>Revenue / Cost head</th><th style={styles.profitTh}>Year 1</th><th style={styles.profitTh}>Year 2</th></tr>
                </thead>
                <tbody>
                  <tr><td>Ferrous scrap sales</td><td style={{ ...styles.profitTd, color: '#16a34a', fontWeight: 800 }}>₹290 L</td><td style={{ ...styles.profitTd, color: '#16a34a', fontWeight: 800 }}>₹440 L</td></tr>
                  <tr><td>Non-ferrous metal sales</td><td style={{ ...styles.profitTd, color: '#16a34a', fontWeight: 800 }}>₹185 L</td><td style={{ ...styles.profitTd, color: '#16a34a', fontWeight: 800 }}>₹280 L</td></tr>
                  <tr><td>Usable parts resale</td><td style={{ ...styles.profitTd, color: '#16a34a', fontWeight: 800 }}>₹210 L</td><td style={{ ...styles.profitTd, color: '#16a34a', fontWeight: 800 }}>₹330 L</td></tr>
                  <tr><td>Fluid recovery income</td><td style={{ ...styles.profitTd, color: '#16a34a', fontWeight: 800 }}>₹55 L</td><td style={{ ...styles.profitTd, color: '#16a34a', fontWeight: 800 }}>₹85 L</td></tr>
                  <tr><td>Certificate / service fees</td><td style={{ ...styles.profitTd, color: '#16a34a', fontWeight: 800 }}>₹120 L</td><td style={{ ...styles.profitTd, color: '#16a34a', fontWeight: 800 }}>₹190 L</td></tr>
                  <tr><td>Operating cost</td><td style={{ ...styles.profitTd, color: '#dc2626', fontWeight: 800, }}>-₹310 L</td><td style={{ ...styles.profitTd, color: '#dc2626', fontWeight: 800 }}>-₹390 L</td></tr>
                  <tr><td>Debt servicing</td><td style={{ ...styles.profitTd, color: '#dc2626', fontWeight: 800 }}>-₹85 L</td><td style={{ ...styles.profitTd, color: '#dc2626', fontWeight: 800 }}>-₹85 L</td></tr>
                  <tr><td>Net result</td><td style={{ ...styles.profitTd, color: '#16a34a', fontWeight: 900 }}>₹555 L</td><td style={{ ...styles.profitTd, color: '#16a34a', fontWeight: 900 }}>₹1,010 L</td></tr>
                </tbody>
              </table>
            </div>

            <div style={styles.callout}>
              The turning point was the shift from manual scrap handling to a fully documented recovery system. That improved buyer confidence, compliance clarity, and long-term value capture.
            </div>
          </div>
        </div>

        <div style={styles.inlineCta}>
          <div style={styles.inlineCtaIt}>Need a project plan for your own site? <strong style={{ color: '#1d4ed8' }}>EPR Nexuss can help map the full scrapping plant journey from land to launch.</strong></div>
          <button style={styles.btn} onClick={() => window.location.href = 'mailto:contact@eprnexuss.com'}>Get My Plan</button>
        </div>

        {/* CTA */}
        <div className="cta-main">
          <div className="cta-eyebrow">⚡ EPR Nexuss — India's Complete Vehicle Recycling Partner</div>
          <div className="cta-h">You Now Have The Blueprint.<br /><em>Let EPR Nexuss Build It With You.</em></div>
          <div className="cta-sub">Licences. Land. Technology. Collection. EPR certificates. We handle every step — so you focus on building the most profitable green business of the decade. First consultation is completely free.</div>
          <div className="cta-btns">
            <button className="btn-p" onClick={() => window.location.href = '/contact'}>
              Book Free Consultation ↗
            </button>
            <button className="btn-s" onClick={() => window.open('tel:+919289659966')}>
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

      {/* STICKY SIDEBAR CONTAINER */}
      <div className="form-column">
        <div className="sticky-form-wrapper">
          <StickyContactForm />
        </div>
      </div>
    </div>
  );
};

// --- Fluid Real-Time Responsive Layout Matrix Stylesheet ---
const staticStyles = `
  * { box-sizing: border-box; max-width: 100%; }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    max-width: 100vw;
  }

  /* Master Core Layout Configuration */
  .wrap.has-sticky {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 32px;
    align-items: start;
  }

  .page-body {
    width: 100%;
    min-width: 0;
  }

  .form-column {
    width: 320px;
    height: 100%; /* Establishes full structural alignment window for sticky offsets */
  }

  .sticky-form-wrapper {
    position: -webkit-sticky;
    position: sticky;
    top: 140px; /* Aligns comfortably below fixed navbar frames */
    z-index: 40;
  }

  /* Structural Content Components */
  .hero-grid {
    display: grid;
    grid-template-columns: 1.18fr 0.82fr;
    gap: 22px;
    align-items: end;
  }

  .layout-grid {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 18px;
    margin-bottom: 18px;
  }

  .story-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin-top: 16px;
  }

  .land-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    margin-top: 14px;
  }

  .kpi-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 18px;
  }

  .cols-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-left: 30px;
  }

  .grid-mini {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .section-block {
    display: grid;
    gap: 18px;
    margin-top: 18px;
  }

  /* Strict Axis Horizontal Scroll Containment Fixes */
  .chart-card-container {
    width: 100%;
    min-width: 0; 
    overflow: hidden; 
  }

  .chart-scroll-container {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 12px;
    scrollbar-width: thin;
    -webkit-overflow-scrolling: touch;
    display: block;
  }

  .bar-chart-canvas {
    display: flex;
    align-items: flex-end;
    gap: 12px;
    min-height: 220px;
    width: max-content; 
    padding-right: 16px;
  }

  .timeline-chart-canvas {
    display: flex;
    align-items: flex-end;
    gap: 12px;
    min-height: 220px;
    width: max-content;
    padding-right: 16px;
  }

  .table-wrapper {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 14px;
    border: 1px solid #d9e2ef;
  }

  /* Native Responsive Chart Structural Units */
  .bar-col {
    width: 58px; 
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    text-align: center;
  }

  .timeline-bar-col {
    width: 120px; 
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
    text-align: center;
  }

  .bar-top {
    font-size: 13px;
    font-weight: 700;
    color: #0f766e;
    white-space: nowrap;
  }

  .bar {
    width: 100%;
    background: linear-gradient(180deg, #14b8a6, #0f766e);
    border-radius: 8px 8px 0 0;
    box-shadow: 0 4px 12px rgba(20, 184, 166, 0.25);
    transition: all 0.3s ease;
  }

  .bar.alt {
    background: linear-gradient(180deg, #22d3ee, #0e7490);
  }

  .bar-label {
    font-size: 12px;
    font-weight: 600;
    color: #475569;
    margin-top: 6px;
  }

  .timeline-track-window {
    position: relative;
    height: 168px;
    background: #f4f8fc;
    border: 1px solid #d9e2ef;
    border-radius: 16px;
    overflow: hidden;
    width: 100%;
  }

  .timeline-filled-span {
    position: absolute;
    bottom: 0;
    border-radius: 14px 14px 6px 6px;
    transition: all 0.3s ease;
  }

  /* Recovery Custom Flexible Database Layout */
  .db-layout-container {
    display: grid;
    gap: 10px;
    width: 100%;
  }

  .db-row-custom {
    display: grid;
    grid-template-columns: 1.6fr 1fr 0.95fr;
    gap: 10px;
    align-items: center;
    background: #fff;
    border: 1px solid #d9e2ef;
    border-radius: 16px;
    padding: 12px 14px;
  }

  .db-name-custom {
    font-weight: 850;
    font-size: 13px;
  }

  .db-bar-custom {
    height: 12px;
    background: #edf2f7;
    overflow: hidden;
    border-radius: 999px;
    width: 100%;
  }

  .db-fill-custom {
    height: 100%;
    border-radius: 999px;
  }

  .db-right-custom {
    font-size: 13px;
    text-align: right;
    color: #475569;
  }

  /* Core Premium CTA Configurations */
  .cta-btns {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    justify-content: center;
  }

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
    box-shadow: 0 6px 18px rgba(34, 197, 94, 0.25);
  }

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

  .cta-main {
    background: linear-gradient(145deg, rgb(11, 31, 58) 0%, rgb(28, 61, 110) 50%, rgb(11, 31, 58) 100%);
    border-radius: 18px;
    padding: 40px 28px;
    margin-top: 36px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .cta-eyebrow { font-size: 10px; color: #5DCAA5; font-weight: 700; letter-spacing: .1em; margin-bottom: 12px; text-transform: uppercase; }
  .cta-h { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 900; color: #fff; line-height: 1.3; margin-bottom: 10px; }
  .cta-sub { font-size: 13px; color: #9CA3AF; line-height: 1.7; margin-bottom: 26px; max-width: 440px; margin-left: auto; margin-right: auto; }
  .cta-trust { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 15px }
  .cta-ti { font-size: 11px; color: #6B7280; display: flex; align-items: center; gap: 4px; }
  .ck { width: 14px; height: 14px; background: #1D9E75; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: #fff; font-size: 8px; }

  /* --- Strict Responsive Layout System Target Interceptors --- */
  @media (max-width: 980px) {
    .wrap.has-sticky {
      grid-template-columns: 1fr !important;
      padding: 16px 12px 40px !important;
    }

    .form-column {
      width: 100% !important;
      height: auto !important;
      order: -1; 
      margin-bottom: 24px;
    }

    .sticky-form-wrapper {
      position: relative !important;
      top: 0 !important;
    }

    .hero-grid,
    .layout-grid,
    .cols-grid,
    .kpi-grid,
    .land-grid {
      grid-template-columns: 1fr !important;
    }

    .story-grid {
      grid-template-columns: 1fr 1fr;
    }

    .db-row-custom {
      grid-template-columns: 1fr !important;
      gap: 6px;
    }

    .db-right-custom {
      text-align: left;
    }

    .cta-btns {
      flex-direction: column;
      width: 100%;
    }

    .btn-p, .btn-s {
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    .story-grid,
    .grid-mini {
      grid-template-columns: 1fr !important;
    }

    .bar-col {
      width: 52px;
    }

    .timeline-bar-col {
      width: 100px;
    }
  }
`;

// Static inline styles for component level logic passes
const styles: { [key: string]: React.CSSProperties } = {
  blogWrap: { maxWidth: '1480px', margin: '0 auto', padding: '22px 18px 40px', marginTop: '130px', background: '#f5f7fb' },
  topChips: { display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' },
  chip: { background: '#fff', border: '1px solid #d9e2ef', color: '#2d3a4e', fontSize: '12px', fontWeight: 800, padding: '8px 12px', borderRadius: '999px', boxShadow: '0 8px 18px rgba(15,23,42,.04)' },
  hero: { position: 'relative', overflow: 'hidden', borderRadius: '34px', padding: '34px', color: '#fff', background: 'linear-gradient(135deg,#081726 0%,#0d2b43 48%,#0f766e 100%)', boxShadow: '0 18px 48px rgba(15,23,42,.10)' },
  heroBefore: { content: '""', position: 'absolute', width: '360px', height: '360px', right: '-140px', top: '-130px', background: 'radial-gradient(circle, rgba(255,255,255,.16), transparent 66%)', borderRadius: '50%', pointerEvents: 'none' },
  heroAfter: { content: '""', position: 'absolute', width: '240px', height: '240px', left: '-90px', bottom: '-110px', background: 'radial-gradient(circle, rgba(255,255,255,.10), transparent 66%)', borderRadius: '50%', pointerEvents: 'none' },
  eyebrow: { display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '999px', padding: '7px 12px', background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.16)', color: '#d8fffb', fontSize: '12px', fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '16px', position: 'relative', zIndex: 1 },
  heroSide: { borderRadius: '24px', padding: '18px', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.16)', backdropFilter: 'blur(12px)' },
  miniStat: { minHeight: '88px', padding: '14px 12px', borderRadius: '18px', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)' },
  miniStatV: { fontSize: '24px', fontWeight: 900, lineHeight: 1.1 },
  miniStatL: { marginTop: '6px', fontSize: '12px', color: 'rgba(255,255,255,.82)' },
  meta: { display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '12px', color: '#64748b', margin: '16px 2px 22px' },
  card: { background: '#ffffff', border: '1px solid rgba(217,226,239,.85)', borderRadius: '28px', boxShadow: '0 18px 48px rgba(15,23,42,.10)', padding: '22px' },
  title: { margin: '0 0 10px', fontSize: '24px', lineHeight: 1.12, letterSpacing: '-.02em' },
  sub: { margin: '0 0 16px', color: '#64748b' },
  featureNote: { marginTop: '16px', borderLeft: '5px solid #f59e0b', padding: '16px 18px', borderRadius: '18px', background: 'linear-gradient(135deg, rgba(245,158,11,.12), rgba(37,99,235,.08))', fontWeight: 850, color: '#5f3d00' },
  tags: { display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' },
  tag: { padding: '8px 12px', borderRadius: '999px', background: '#eef7ff', border: '1px solid #d8e7ff', color: '#1d4ed8', fontSize: '12px', fontWeight: 800 },
  story: { borderRadius: '20px', border: '1px solid #d9e2ef', background: 'linear-gradient(180deg,#fff,#fcfdff)', padding: '16px', minHeight: '150px' },
  storyIcon: { fontSize: '24px' },
  chart: { background: '#fff', border: '1px solid #d9e2ef', borderRadius: '30px', boxShadow: '0 18px 48px rgba(15,23,42,.10)', padding: '22px' },
  chartHead: { display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: '14px' },
  table: { width: '100%', borderCollapse: 'collapse', overflow: 'hidden' },
  tableTh: { background: '#0f172a', color: '#fff', padding: '12px 14px', textAlign: 'left', fontSize: '13px' },
  tableTd: { padding: '12px 14px', borderTop: '1px solid #d9e2ef', background: '#fff', fontSize: '13px', verticalAlign: 'top' },
  badge: { display: 'inline-flex', padding: '4px 8px', borderRadius: '999px', background: '#eef7ff', color: '#1d4ed8', fontSize: '11px', fontWeight: 800 },
  landCard: { textAlign: 'center', background: '#fff', border: '1px solid #d9e2ef', borderRadius: '20px', padding: '16px' },
  landCardFeatured: { background: 'linear-gradient(180deg,#0f172a,#0f5fff)', color: '#fff', borderColor: 'transparent' },
  landIcon: { fontSize: '26px', marginBottom: '8px' },
  landLabel: { marginBottom: '6px', fontSize: '10px', fontWeight: 800, letterSpacing: '.05em', color: '#64748b', textTransform: 'uppercase' },
  landVal: { marginBottom: '4px', fontSize: '18px', fontWeight: 900, color: '#16a34a' },
  landDesc: { fontSize: '11px', color: '#64748b', lineHeight: 1.5 },
  step: { display: 'grid', gridTemplateColumns: '56px 1fr', gap: '14px', background: '#fff', border: '1px solid #d9e2ef', borderRadius: '20px', padding: '16px', marginBottom: '12px' },
  num: { width: '56px', height: '56px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '18px', background: 'linear-gradient(135deg,#2563eb,#0f766e)', flexShrink: 0 },
  time: { display: 'inline-block', marginTop: '10px', fontSize: '11px', fontWeight: 900, color: '#2563eb', background: '#eef7ff', padding: '4px 8px', borderRadius: '999px' },
  case: { background: '#fff', border: '1px solid #d9e2ef', borderRadius: '30px', boxShadow: '0 18px 48px rgba(15,23,42,.10)', overflow: 'hidden' },
  caseHead: { padding: '24px', color: '#fff', background: 'linear-gradient(135deg,#081726 0%,#0d2b43 48%,#0f766e 100%)' },
  caseTag: { display: 'inline-block', padding: '6px 10px', borderRadius: '999px', background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.14)', fontSize: '11px', letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 800, marginBottom: '10px' },
  caseBody: { padding: '22px' },
  kpi: { borderRadius: '18px', border: '1px solid #d9e2ef', background: '#fff', padding: '16px', textAlign: 'center' },
  kpiV: { fontSize: '22px', fontWeight: 900, color: '#2563eb' },
  kpiL: { marginTop: '4px', fontSize: '12px', color: '#64748b' },
  list: { listStyle: 'disc', padding: '0', margin: '0', display: 'grid', gap: '8px' },
  profit: { width: '100%', borderCollapse: 'collapse', overflow: 'hidden' },
  profitTh: { borderBottom: '1px solid #d9e2ef', padding: '10px 12px', fontSize: '13px', background: '#f8fafc', textAlign: 'left' },
  profitTd: { borderBottom: '1px solid #d9e2ef', padding: '10px 8px', fontSize: '13px' },
  callout: { background: '#fff8e8', border: '1px solid #ffe1a8', color: '#73511c', borderRadius: '16px', padding: '14px 16px', fontSize: '13px', lineHeight: 1.6, marginTop: '16px' },
  inlineCta: { background: '#eef7ff', border: '1px solid #d8e7ff', borderRadius: '14px', padding: '14px 16px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px', alignItems: 'center', margin: '22px 0' },
  inlineCtaIt: { fontSize: '13px', color: '#0f172a' },
  btn: { border: 'none', borderRadius: '10px', padding: '10px 16px', fontSize: '12px', fontWeight: 800, color: '#fff', background: '#2563eb', cursor: 'pointer', whiteSpace: 'nowrap' },
  sectionGap: { marginTop: '18px' }
};

export default VehicleScrappingBlog;