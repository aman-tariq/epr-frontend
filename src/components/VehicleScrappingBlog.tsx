import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import StickyContactForm from './StickyContactForm';

const VehicleScrappingBlog: React.FC = () => {
  useEffect(() => {
    // ELV growth forecast chart
    const elvData = [
      { y: '2020', v: 32, a: true }, { y: '2021', v: 36, a: true }, { y: '2022', v: 40, a: true },
      { y: '2023', v: 44, a: true }, { y: '2024', v: 48, a: true }, { y: '2025', v: 56, a: false },
      { y: '2026', v: 65, a: false }, { y: '2027', v: 76, a: false }, { y: '2028', v: 88, a: false },
      { y: '2029', v: 102, a: false }, { y: '2030', v: 118, a: false }
    ];
    const elvChart = document.getElementById('elvChart');
    if (elvChart && elvChart.children.length === 0) {
      elvData.forEach(d => {
        const col = document.createElement('div');
        col.className = 'bar-col';
        const h = Math.round((d.v / 118) * 168);
        col.innerHTML = `<div class="bar-top">${d.v}L</div><div class="bar ${d.a ? '' : 'alt'}" style="height:${h}px"></div><div class="bar-label">${d.y}</div>`;
        elvChart.appendChild(col);
      });
    }

    // Recovery database chart
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
    const matDb = document.getElementById('materialDb');
    if (matDb && matDb.children.length === 0) {
      matData.forEach(d => {
        const row = document.createElement('div');
        row.className = 'db-row';
        row.innerHTML = `
          <div class="db-name">${d.name}</div>
          <div class="db-bar"><div class="db-fill" style="width:${d.pct}%;background:${d.color};"></div></div>
          <div class="db-right">${d.val} · Recovery ${d.pct}%</div>
        `;
        matDb.appendChild(row);
      });
    }

    // Setup timeline chart
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
    const timelineChart = document.getElementById('timelineChart');
    if (timelineChart && timelineChart.children.length === 0) {
      timelineData.forEach(d => {
        const col = document.createElement('div');
        col.className = 'bar-col';
        const h = Math.max(26, Math.round((d.dur / 10) * 160));
        const left = (d.start / 24) * 100;
        const width = (d.dur / 24) * 100;
        col.style.minWidth = '120px';
        col.innerHTML = `
          <div class="bar-top">M${d.start + 1}–${d.start + d.dur}</div>
          <div style="position:relative;height:168px;background:#f4f8fc;border:1px solid var(--line);border-radius:16px;overflow:hidden;">
            <div style="position:absolute;left:${left}%;bottom:0;width:${width}%;height:${h}px;background:${d.color};border-radius:14px 14px 6px 6px;"></div>
          </div>
          <div class="bar-label">${d.label}</div>
        `;
        timelineChart.appendChild(col);
      });
    }

    // Investment split chart
    const capexData = [
      { label: 'Machinery', val: 2.8, color: '#0f5fff' },
      { label: 'Civil works', val: 1.6, color: '#0f8b8d' },
      { label: 'ETP & safety', val: 1.2, color: '#16a34a' },
      { label: 'Working capital', val: 1.0, color: '#22c55e' },
      { label: 'Licensing', val: 0.6, color: '#f59e0b' },
    ];
    const capexChart = document.getElementById('capexChart');
    if (capexChart && capexChart.children.length === 0) {
      capexData.forEach(d => {
        const col = document.createElement('div');
        col.className = 'bar-col';
        const h = Math.round((d.val / 2.8) * 168);
        col.innerHTML = `<div class="bar-top">₹${d.val} Cr</div><div class="bar orange" style="height:${h}px;background:${d.color}"></div><div class="bar-label">${d.label}</div>`;
        capexChart.appendChild(col);
      });
    }
  }, []);

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
          <div className="hero-grid" style={styles.heroGrid}>
            <div>
              <h1>When a vehicle reaches the end of the road, <em style={{ fontStyle: 'normal', color: '#fde68a' }}>the real value begins.</em></h1>
              <p>A scrapping facility can convert old vehicles into a clean, organised revenue stream. The right setup creates income from metal recovery, parts resale, certificate processing, and collection partnerships.</p>
            </div>
            <div style={styles.heroSide}>
              <h3>Market pulse</h3>
              <div style={styles.gridMini}>
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
        <div className="layout-grid" style={styles.layout}>
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
            <div className="story-grid" style={styles.storyGrid}>
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
        <div style={styles.section}>
          <div style={styles.chart}>
            <div style={styles.chartHead}>
              <div>
                <h3>ELV growth forecast</h3>
                <p>Planning curve for a vehicle scrapping project</p>
              </div>
              <p>Units in lakh vehicles</p>
            </div>
            <div style={styles.barWrap} id="elvChart"></div>
          </div>

          {/* <div style={styles.chart}>
          <div style={styles.chartHead}>
            <div>
              <h3>Recovery database</h3>
              <p>Quick view of the most valuable input streams</p>
            </div>
            <p>Recovery score and indicative value</p>
          </div>
          <div style={styles.db} id="materialDb"></div>
        </div> */}

          <div style={styles.chart}>
            <div style={styles.chartHead}>
              <div>
                <h3>Vehicle type split</h3>
                <p>Useful for capacity, layout, and workflow planning</p>
              </div>
            </div>
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

        {/* LAYOUT 2 */}
        <div className="layout-grid section-gap" style={{ ...styles.layout, ...styles.sectionGap }}>
          <div style={styles.card}>
            <h2 style={styles.title}>Site selection and land strategy</h2>
            <p style={styles.sub}>A smart plot makes the facility safer, cleaner, and easier to grow.</p>
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

            <div className="land-grid" style={styles.landGrid}>
              <div style={styles.landCard}><div style={styles.landIcon}>🏢</div><div style={styles.landLabel}>Starter unit</div><div style={styles.landVal}>1–2 Acres</div><div style={styles.landDesc}>Useful for collection, sorting, and smaller recovery work.</div></div>
              <div style={{ ...styles.landCard, ...styles.landCardFeatured }}><div style={styles.landIcon}>⭐</div><div style={styles.landLabel}>Best fit</div><div style={styles.landVal}>3–6 Acres</div><div style={styles.landDesc}>Balanced for intake, processing, and future expansion.</div></div>
              <div style={styles.landCard}><div style={styles.landIcon}>🏭</div><div style={styles.landLabel}>Large plant</div><div style={styles.landVal}>10+ Acres</div><div style={styles.landDesc}>Higher automation and larger storage capacity.</div></div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.title}>Approval path</h2>
            <p style={styles.sub}>A clear sequence keeps the launch moving and avoids bottlenecks.</p>
            <div style={styles.timeline}>
              <div style={styles.step}><div style={styles.num}>1</div><div><h4>MoRTH RVSF registration</h4><p>Main authorisation to operate as a recognised scrapping facility.</p><span style={styles.time}>45–90 days</span></div></div>
              <div style={styles.step}><div style={styles.num}>2</div><div><h4>Consent to Establish</h4><p>Needed before civil work and machine installation start.</p><span style={styles.time}>60–90 days</span></div></div>
              <div style={styles.step}><div style={styles.num}>3</div><div><h4>Hazardous waste authorisation</h4><p>For fluids, batteries, residues, and safe handling flow.</p><span style={styles.time}>30–60 days</span></div></div>
              <div style={styles.step}><div style={styles.num}>4</div><div><h4>Factory licence and Fire NOC</h4><p>Supports worker protection and emergency readiness.</p><span style={styles.time}>20–45 days</span></div></div>
              <div style={styles.step}><div style={styles.num}>5</div><div><h4>Consent to Operate</h4><p>Final clearance before the facility receives vehicles commercially.</p><span style={styles.time}>30–60 days</span></div></div>
            </div>
          </div>
        </div>

        <div style={{ ...styles.chart, ...styles.sectionGap }}>
          {/* <div style={styles.chartHead}>
          <div>
            <h3>Setup timeline</h3>
            <p>A month-wise roadmap for disciplined execution</p>
          </div>
        </div>
        <div style={styles.barWrap} id="timelineChart"></div> */}
        </div>

        <div style={styles.chart}>
          <div style={styles.chartHead}>
            <div>
              <h3>Investment split</h3>
              <p>Indicative capex mix for a mid-scale scrapping business</p>
            </div>
          </div>
          <div style={styles.barWrap} id="capexChart"></div>
        </div>

        {/* CASE STUDY */}
        <div style={styles.case}>
          <div style={styles.caseHead}>
            <div style={styles.caseTag}>Case study</div>
            <h3>A mid-scale facility in Pune turned structured recovery into a stable business line</h3>
          </div>
          <div style={styles.caseBody}>
            <div className="kpi-grid" style={styles.kpis}>
              <div style={styles.kpi}><div style={styles.kpiV}>6,000 / yr</div><div style={styles.kpiL}>Vehicle capacity</div></div>
              <div style={styles.kpi}><div style={styles.kpiV}>₹7.2 Cr</div><div style={styles.kpiL}>Illustrative capex</div></div>
              <div style={styles.kpi}><div style={styles.kpiV}>21 Mo</div><div style={styles.kpiL}>Concept to launch</div></div>
            </div>

            <div className="cols-grid" style={styles.cols}>
              <div>
                <h2 style={{ ...styles.title, fontSize: '18px', marginBottom: '10px' }}>What they needed</h2>
                <ul style={styles.list}>
                  <li>Industrial land with the correct permissions</li>
                  <li>A full approval path across departments</li>
                  <li>A formal intake network for vehicles</li>
                  <li>Higher margins than informal scrap handling</li>
                </ul>
              </div>
              <div>
                <h2 style={{ ...styles.title, fontSize: '18px', marginBottom: '10px' }}>What was implemented</h2>
                <ul style={styles.list}>
                  <li>Structured licensing and registration workflow</li>
                  <li>Collection tie-ups with dealers and fleet operators</li>
                  <li>Digital tracking for certificates and inventory</li>
                  <li>Recovery lines for safe dismantling and sorting</li>
                </ul>
              </div>
            </div>

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
                <tr><td>Operating cost</td><td style={{ ...styles.profitTd, color: '#dc2626', fontWeight: 800 }}>-₹310 L</td><td style={{ ...styles.profitTd, color: '#dc2626', fontWeight: 800 }}>-₹390 L</td></tr>
                <tr><td>Debt servicing</td><td style={{ ...styles.profitTd, color: '#dc2626', fontWeight: 800 }}>-₹85 L</td><td style={{ ...styles.profitTd, color: '#dc2626', fontWeight: 800 }}>-₹85 L</td></tr>
                <tr><td>Net result</td><td style={{ ...styles.profitTd, color: '#16a34a', fontWeight: 900 }}>₹555 L</td><td style={{ ...styles.profitTd, color: '#16a34a', fontWeight: 900 }}>₹1,010 L</td></tr>
              </tbody>
            </table>

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
            <button
              className="btn-p"
              onClick={() => window.location.href = '/contact'}
            >
              Book Free Consultation ↗
            </button>

            <button
              className="btn-s"
              onClick={() => window.open('tel:+919773870268')}
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


        {/* STICKY */}
        {/* <div style={styles.sticky}>
        <div style={styles.stickySmall}><strong>EPR Nexuss</strong> — from blueprint to first vehicle scrapped, with a compliance-first approach.</div>
        <button style={{...styles.btn, ...styles.btnPrimary}} onClick={() => window.location.href='mailto:contact@eprnexuss.com'}>Talk to an Expert</button>
      </div> */}
      </div>
      <div className="form-column">
        <StickyContactForm />
      </div>
    </div>
  );
};

// Static inline styles
const styles: { [key: string]: React.CSSProperties } = {
  blogWrap: { maxWidth: '1220px', margin: '0 auto', padding: '22px 18px 40px', marginTop: '130px', background: '#f5f7fb' },
  topChips: { display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' },
  chip: { background: '#fff', border: '1px solid #d9e2ef', color: '#2d3a4e', fontSize: '12px', fontWeight: 800, padding: '8px 12px', borderRadius: '999px', boxShadow: '0 8px 18px rgba(15,23,42,.04)' },

  hero: { position: 'relative', overflow: 'hidden', borderRadius: '34px', padding: '34px', color: '#fff', background: 'linear-gradient(135deg,#081726 0%,#0d2b43 48%,#0f766e 100%)', boxShadow: '0 18px 48px rgba(15,23,42,.10)' },
  heroBefore: { content: '""', position: 'absolute', width: '360px', height: '360px', right: '-140px', top: '-130px', background: 'radial-gradient(circle, rgba(255,255,255,.16), transparent 66%)', borderRadius: '50%', pointerEvents: 'none' },
  heroAfter: { content: '""', position: 'absolute', width: '240px', height: '240px', left: '-90px', bottom: '-110px', background: 'radial-gradient(circle, rgba(255,255,255,.10), transparent 66%)', borderRadius: '50%', pointerEvents: 'none' },
  eyebrow: { display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '999px', padding: '7px 12px', background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.16)', color: '#d8fffb', fontSize: '12px', fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '16px', position: 'relative', zIndex: 1 },
  heroGrid: { position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.18fr .82fr', gap: '22px', alignItems: 'end' },
  heroSide: { borderRadius: '24px', padding: '18px', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.16)', backdropFilter: 'blur(12px)' },
  gridMini: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  miniStat: { minHeight: '88px', padding: '14px 12px', borderRadius: '18px', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)' },
  miniStatV: { fontSize: '24px', fontWeight: 900, lineHeight: 1.1 },
  miniStatL: { marginTop: '6px', fontSize: '12px', color: 'rgba(255,255,255,.82)' },

  meta: { display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '12px', color: '#64748b', margin: '16px 2px 22px' },

  layout: { display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: '18px', marginBottom: '18px' },
  card: { background: '#ffffff', border: '1px solid rgba(217,226,239,.85)', borderRadius: '28px', boxShadow: '0 18px 48px rgba(15,23,42,.10)', padding: '22px' },
  title: { margin: '0 0 10px', fontSize: '24px', lineHeight: 1.12, letterSpacing: '-.02em' },
  sub: { margin: '0 0 16px', color: '#64748b' },
  featureNote: { marginTop: '16px', borderLeft: '5px solid #f59e0b', padding: '16px 18px', borderRadius: '18px', background: 'linear-gradient(135deg, rgba(245,158,11,.12), rgba(37,99,235,.08))', fontWeight: 850, color: '#5f3d00' },
  tags: { display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' },
  tag: { padding: '8px 12px', borderRadius: '999px', background: '#eef7ff', border: '1px solid #d8e7ff', color: '#1d4ed8', fontSize: '12px', fontWeight: 800 },

  storyGrid: { display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: '12px', marginTop: '16px' },
  story: { borderRadius: '20px', border: '1px solid #d9e2ef', background: 'linear-gradient(180deg,#fff,#fcfdff)', padding: '16px', minHeight: '150px' },
  storyIcon: { fontSize: '24px' },

  section: { display: 'grid', gap: '18px', marginTop: '18px' },
  chart: { background: '#fff', border: '1px solid #d9e2ef', borderRadius: '30px', boxShadow: '0 18px 48px rgba(15,23,42,.10)', padding: '22px' },
  chartHead: { display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: '14px' },
  barWrap: { display: 'flex', alignItems: 'flex-end', gap: '12px', minHeight: '220px', overflow: 'auto', paddingTop: '8px' },
  barCol: { flex: 1, minWidth: '68px', textAlign: 'center' },

  db: { display: 'grid', gap: '10px' },
  dbRow: { display: 'grid', gridTemplateColumns: '1.6fr 1fr .95fr', gap: '10px', alignItems: 'center', background: '#fff', border: '1px solid #d9e2ef', borderRadius: '16px', padding: '12px 14px' },
  dbName: { fontWeight: 850 },
  dbBar: { height: '12px', background: '#edf2f7', overflow: 'hidden', borderRadius: '999px' },
  dbFill: { height: '100%', borderRadius: '999px' },

  table: { width: '100%', borderCollapse: 'collapse', overflow: 'hidden', border: '1px solid #d9e2ef', borderRadius: '20px' },
  tableTh: { background: '#0f172a', color: '#fff', padding: '12px 14px', textAlign: 'left', fontSize: '13px' },
  tableTd: { padding: '12px 14px', borderTop: '1px solid #d9e2ef', background: '#fff', fontSize: '13px', verticalAlign: 'top' },
  badge: { display: 'inline-flex', padding: '4px 8px', borderRadius: '999px', background: '#eef7ff', color: '#1d4ed8', fontSize: '11px', fontWeight: 800 },

  landGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '12px', marginTop: '14px' },
  landCard: { textAlign: 'center', background: '#fff', border: '1px solid #d9e2ef', borderRadius: '20px', padding: '16px' },
  landCardFeatured: { background: 'linear-gradient(180deg,#0f172a,#0f5fff)', color: '#fff', borderColor: 'transparent' },
  landIcon: { fontSize: '26px', marginBottom: '8px' },
  landLabel: { marginBottom: '6px', fontSize: '10px', fontWeight: 800, letterSpacing: '.05em', color: '#64748b', textTransform: 'uppercase' },
  landVal: { marginBottom: '4px', fontSize: '18px', fontWeight: 900, color: '#16a34a' },
  landDesc: { fontSize: '11px', color: '#64748b', lineHeight: 1.5 },

  timeline: { display: 'grid', gap: '12px' },
  step: { display: 'grid', gridTemplateColumns: '56px 1fr', gap: '14px', background: '#fff', border: '1px solid #d9e2ef', borderRadius: '20px', padding: '16px' },
  num: { width: '56px', height: '56px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '18px', background: 'linear-gradient(135deg,#2563eb,#0f766e)' },
  time: { display: 'inline-block', marginTop: '10px', fontSize: '11px', fontWeight: 900, color: '#2563eb', background: '#eef7ff', padding: '4px 8px', borderRadius: '999px' },

  case: { background: '#fff', border: '1px solid #d9e2ef', borderRadius: '30px', boxShadow: '0 18px 48px rgba(15,23,42,.10)', overflow: 'hidden' },
  caseHead: { padding: '24px', color: '#fff', background: 'linear-gradient(135deg,#081726 0%,#0d2b43 48%,#0f766e 100%)' },
  caseTag: { display: 'inline-block', padding: '6px 10px', borderRadius: '999px', background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.14)', fontSize: '11px', letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 800, marginBottom: '10px' },
  caseBody: { padding: '22px' },
  kpis: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '18px' },
  kpi: { borderRadius: '18px', border: '1px solid #d9e2ef', background: '#fff', padding: '16px', textAlign: 'center' },
  kpiV: { fontSize: '22px', fontWeight: 900, color: '#2563eb' },
  kpiL: { marginTop: '4px', fontSize: '12px', color: '#64748b' },
  cols: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' },
  list: { listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '8px' },
  profit: { width: '100%', borderCollapse: 'collapse', marginTop: '10px', overflow: 'hidden', borderRadius: '18px' },
  profitTh: { borderBottom: '1px solid #d9e2ef', padding: '10px 12px', fontSize: '13px', background: '#f8fafc', textAlign: 'left' },
  profitTd: { borderBottom: '1px solid #d9e2ef', padding: '10px 12px', fontSize: '13px' },

  callout: { background: '#fff8e8', border: '1px solid #ffe1a8', color: '#73511c', borderRadius: '16px', padding: '14px 16px', fontSize: '13px', lineHeight: 1.6, marginTop: '16px' },
  inlineCta: { background: '#eef7ff', border: '1px solid #d8e7ff', borderRadius: '14px', padding: '14px 16px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px', alignItems: 'center', margin: '22px 0' },
  inlineCtaIt: { fontSize: '13px', color: '#0f172a' },
  btn: { border: 'none', borderRadius: '10px', padding: '10px 16px', fontSize: '12px', fontWeight: 800, color: '#fff', background: '#2563eb', cursor: 'pointer', whiteSpace: 'nowrap' },

  cta: { marginTop: '18px', background: 'linear-gradient(135deg,#08111d 0%, #0f2742 42%, #0b7a75 100%)', color: '#fff', borderRadius: '34px', padding: '30px', textAlign: 'center', boxShadow: '0 18px 48px rgba(15,23,42,.10)' },
  btns: { display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' },
  btnPrimary: { background: '#fff', color: '#0f172a' },
  btnSecondary: { background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.22)' },

  sticky: { position: 'sticky', bottom: 0, marginTop: '18px', display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'center', flexWrap: 'wrap', background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(12px)', border: '1px solid rgba(217,226,239,.92)', boxShadow: '0 18px 48px rgba(15,23,42,.10)', borderRadius: '18px', padding: '12px 14px' },
  stickySmall: { fontSize: '12px', color: '#64748b' },
  sectionGap: { marginTop: '18px' },


};

const staticStyles = `
  @media (max-width:900px){
    .hero-grid,.layout,.cols,.kpis{grid-template-columns:1fr 1fr}
  }
  @media (max-width:680px){
    .wrap{padding:14px}
    .hero{padding:22px;border-radius:28px}
    .card,.chart,.case-body{padding:16px}
    .hero-grid,.layout,.cols,.kpis,.land-grid{grid-template-columns:1fr}
    .title{font-size:22px}
    .db-row{grid-template-columns:1fr}
    .db-right{text-align:left}
    .step{grid-template-columns:1fr}
    .num{width:48px;height:48px;border-radius:14px}
    .cta h2{font-size:24px}
    .hero-side{padding:14px}
  }

  .bar-col {
    flex: 1;
    min-width: 58px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
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
    transition: all 0.6s ease;
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

  /* Responsive */
  @media (max-width: 680px) {
    .bar-col { min-width: 48px; }
    .bar-top { font-size: 12px; }
  }
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
  .cta-inline{background:#E1F5EE;border:0.5px solid #5DCAA5;border-radius:10px;padding:14px 18px;margin:26px 0;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;}
          .cta-inline-text{font-size:13px;color:#085041;line-height:1.5;}
          .cta-inline-btn{background:#1D9E75;color:#fff;border:none;border-radius:8px;padding:9px 16px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;}

          /* ===== MAIN CTA ===== */
          .cta-main{background:linear-gradient(145deg, rgb(11, 31, 58) 0%, rgb(28, 61, 110) 50%, rgb(11, 31, 58) 100%);border-radius:18px;padding:40px 28px;margin-top:36px;text-align:center;position:relative;overflow:hidden;}
          .cta-main::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:300px;height:300px;background:'radial-gradient(circle,rgba(29,158,117,.2) 0%,transparent 70%)';pointer-events:none;}
          .cta-eyebrow{font-size:10px;color:#5DCAA5;font-weight:700;letter-spacing:.1em;margin-bottom:12px;text-transform:uppercase;}
          .cta-h{font-family:'Playfair Display',serif;font-size:24px;font-weight:900;color:#fff;line-height:1.3;margin-bottom:10px;}
          .cta-h em{font-style:normal;color:#5DCAA5;}
          .cta-sub{font-size:13px;color:#9CA3AF;line-height:1.7;margin-bottom:26px;max-width:440px;margin-left:auto;margin-right:auto;}
          .cta-btns{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:22px;}
          .btn-p{background:#1D9E75;color:#fff;border:none;border-radius:10px;padding:13px 28px;font-size:13px;font-weight:700;cursor:pointer;}
          .btn-s{background:transparent;color:#9CA3AF;border:1px solid #374151;border-radius:10px;padding:13px 28px;font-size:13px;font-weight:500;cursor:pointer;}
          .cta-trust{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}
          .cta-ti{font-size:11px;color:#6B7280;display:flex;align-items:center;gap:4px;}
          .ck{width:14px;height:14px;background:#1D9E75;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:8px;}

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
@media (max-width: 900px) {
  .wrap.has-sticky {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .form-column {
    order: -1; /* Form appears first on mobile */
  }
}
  @media (max-width: 980px) {
  .wrap.has-sticky {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 16px 12px 40px;
    margin: 60px auto 20px;
  }
  
  .form-column {
    order: -1;           /* Form appears FIRST on mobile */
    width: 100%;
    position: relative;
    margin-bottom: 20px;
  }

  /* Make charts scrollable on mobile */
  .bar-chart, .bar-wrap {
    overflow-x: auto;
    padding-bottom: 12px;
  }

  .bar-col {
    min-width: 60px;
  }

  /* Better table mobile */
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  .land-grid, .prob-grid {
    grid-template-columns: 1fr;
  }

  .hero-h {
    font-size: 26px;
  }
}

@media (max-width: 640px) {
  .wrap.has-sticky {
    padding: 12px 10px 30px;
  }
  
  .hero {
    padding: 24px 18px;
  }
}

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

    /* Charts scrollable */
    .bar-wrap, .bar-chart {
      overflow-x: auto;
      padding-bottom: 12px;
    }
    .bar-col { min-width: 60px; flex-shrink: 0; }

    /* Tables scrollable */
    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }

    /* Grids stack */
    .layout, .land-grid, .hero-grid, .cols, .kpis, .mini-grid, .prob-grid {
      grid-template-columns: 1fr !important;
    }

    .hero { padding: 24px 18px; border-radius: 24px; }
    .hero-h { font-size: 26px; }
  }

  @media (max-width: 640px) {
    .wrap.has-sticky {
      padding: 12px 10px 30px !important;
    }
  }

  /* Your existing media queries + chart styles */
  @media (max-width:900px){
    .hero-grid,.layout,.cols,.kpis{grid-template-columns:1fr 1fr}
  }
  @media (max-width:680px){
    .wrap{padding:14px}
    .hero{padding:22px;border-radius:28px}
    .card,.chart,.case-body{padding:16px}
    .hero-grid,.layout,.cols,.kpis,.land-grid{grid-template-columns:1fr}
    .title{font-size:22px}
    .db-row{grid-template-columns:1fr}
    .step{grid-template-columns:1fr}
    .num{width:48px;height:48px;border-radius:14px}
  }

  /* Chart styles */
  .bar-col {
    flex: 1;
    min-width: 58px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .bar {
    width: 100%;
    background: linear-gradient(180deg, #14b8a6, #0f766e);
    border-radius: 8px 8px 0 0;
  }

  /* CTA buttons */
  .cta-btns { display: flex; gap: 14px; flex-wrap: wrap; }
  .btn-p, .btn-s { flex: 1; min-width: 160px; }

  // -----------changes-------------------

  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }

  /* ===== CORE RESPONSIVE LAYOUT ===== */
  .wrap.has-sticky {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 32px;
    max-width: 1480px;
    margin: 80px auto 40px;
    padding: 24px 18px 36px;
    background: #f5f7fb;
  }

  .page-body { width: 100%; }
  .form-column { width: 320px; position: relative; }

  /* ===== CHARTS & TABLES ===== */
  .bar-wrap, .bar-chart {
    overflow-x: auto;
    padding-bottom: 12px;
    scrollbar-width: thin;
  }

  .bar-col {
    flex: 1;
    min-width: 58px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    border-collapse: collapse;
  }

  /* ===== RESPONSIVE BREAKPOINTS ===== */
  @media (max-width: 980px) {
    .wrap.has-sticky {
      grid-template-columns: 1fr !important;
      gap: 24px;
      padding: 16px 12px 40px;
      margin: 60px auto 20px;
    }
    .form-column {
      order: -1;
      width: 100% !important;
      margin-bottom: 30px;
    }
    .hero-grid, .layout, .cols, .kpis, .land-grid, .gridMini {
      grid-template-columns: 1fr !important;
    }
    .hero { padding: 24px 18px; border-radius: 24px; }
    .bar-col { min-width: 60px; }
  }

  @media (max-width: 640px) {
    .wrap.has-sticky { padding: 12px 10px 30px !important; }
    .hero { padding: 22px; }
    .card, .chart, .case-body { padding: 16px; }
    .title { font-size: 22px; }
  }

  /* CTA Buttons */
  .cta-btns {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn-p {
    background: linear-gradient(135deg, #16a34a, #22c55e);
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-s {
    background: #fff;
    color: #0f172a;
    border: 1px solid #cbd5f5;
    padding: 12px 22px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
  }

  /* Other existing styles you already had... */
  .db-row { display: grid; grid-template-columns: 1.6fr 1fr .95fr; gap: 10px; align-items: center; }
  @media (max-width: 680px) {
    .db-row { grid-template-columns: 1fr; }
  }
    /* =========================================
   FULL MOBILE RESPONSIVE FIX
========================================= */

/* Layout grids */
.hero-grid{
  display:grid;
  grid-template-columns:1.18fr .82fr;
  gap:22px;
  align-items:end;
}

.layout-grid{
  display:grid;
  grid-template-columns:1.05fr .95fr;
  gap:18px;
}

.story-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:12px;
}

.land-grid{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:12px;
}

.kpi-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:12px;
}

.cols-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
}

/* =========================================
   TABLE RESPONSIVE
========================================= */

table{
  width:100%;
}

@media(max-width:768px){

  table{
    display:block;
    overflow-x:auto;
    white-space:nowrap;
    border-radius:14px;
  }

  th, td{
    font-size:12px !important;
    padding:10px !important;
  }
}

/* =========================================
   MOBILE RESPONSIVE
========================================= */

@media (max-width: 980px){

  .wrap.has-sticky{
    grid-template-columns:1fr !important;
    padding:14px 12px 40px !important;
    margin-top:70px !important;
  }

  .form-column{
    width:100% !important;
    order:-1;
  }

  .hero-grid,
  .layout-grid,
  .cols-grid,
  .kpi-grid,
  .land-grid{
    grid-template-columns:1fr !important;
  }

  .story-grid{
    grid-template-columns:1fr 1fr;
  }

  .hero{
    padding:24px 18px !important;
    border-radius:24px !important;
  }

  .hero h1{
    font-size:34px !important;
    line-height:1.25 !important;
  }

  .hero-side{
    margin-top:10px;
  }

  .gridMini{
    grid-template-columns:1fr 1fr !important;
  }

  .miniStat{
    min-height:auto !important;
  }

  .chart,
  .card{
    padding:18px !important;
    border-radius:22px !important;
  }

  .bar-wrap{
    overflow-x:auto;
    padding-bottom:14px;
  }

  .bar-col{
    min-width:64px;
    flex-shrink:0;
  }

  .cta-main{
    padding:28px 18px !important;
  }

  .cta-h{
    font-size:28px !important;
    line-height:1.3 !important;
  }

  .cta-sub{
    font-size:13px !important;
  }

  .cta-btns{
    flex-direction:column;
    width:100%;
  }

  .btn-p,
  .btn-s{
    width:100%;
  }
}

/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 640px){

  .hero h1{
    font-size:28px !important;
  }

  .title{
    font-size:21px !important;
    line-height:1.3 !important;
  }

  .story-grid{
    grid-template-columns:1fr;
  }

  .gridMini{
    grid-template-columns:1fr;
  }

  .miniStatV{
    font-size:20px !important;
  }

  .hero{
    padding:20px 16px !important;
  }

  .chart,
  .card{
    padding:16px !important;
  }

  .meta{
    gap:8px !important;
  }

  .topChips{
    gap:8px !important;
  }

  .chip{
    font-size:11px !important;
    padding:7px 10px !important;
  }

  .kpi-grid{
    grid-template-columns:1fr;
  }

  .inlineCta{
    flex-direction:column;
    align-items:flex-start !important;
  }

  .inlineCta button{
    width:100%;
  }
}

/* =========================================
   EXTRA SMALL DEVICES
========================================= */

@media (max-width: 420px){

  .hero h1{
    font-size:24px !important;
  }

  .cta-h{
    font-size:24px !important;
  }

  .miniStatV{
    font-size:18px !important;
  }

  .btn-p,
  .btn-s{
    font-size:14px !important;
    padding:12px 16px !important;
  }
    .page-body{
    width: 40% !important;}
}
`;


export default VehicleScrappingBlog;