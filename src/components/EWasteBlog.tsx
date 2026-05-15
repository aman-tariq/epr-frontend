import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import StickyContactForm from './StickyContactForm';

const EWasteBlog: React.FC = () => {
  useEffect(() => {
    // E-Waste Generation Chart
    const ewData = [
      { y: '2019', v: 1.80, a: true }, { y: '2020', v: 2.00, a: true }, { y: '2021', v: 2.30, a: true },
      { y: '2022', v: 2.60, a: true }, { y: '2023', v: 2.90, a: true }, { y: '2024', v: 3.20, a: true },
      { y: '2025', v: 3.60, a: false }, { y: '2026', v: 4.10, a: false }, { y: '2027', v: 4.70, a: false },
      { y: '2028', v: 5.20, a: false }, { y: '2030', v: 6.50, a: false }
    ];
    const ewc = document.getElementById('ewChart');
    if (ewc && ewc.children.length === 0) {
      ewData.forEach(d => {
        const col = document.createElement('div'); col.className = 'bar-col';
        const h = Math.round((d.v / 6.5) * 148);
        col.innerHTML = `<div class="bar-val">${d.v}M</div><div class="bar-rect" style="height:${h}px;background:${d.a ? '#2E7D32' : '#81C784'};"></div><div class="bar-name">${d.y}</div>`;
        ewc.appendChild(col);
      });
    }

    // Metal Recovery Chart
    const matData = [
      { name: 'Gold (PCBs)', pct: 92, val: '₹5.8 L/T', color: '#F59E0B' },
      { name: 'Silver', pct: 78, val: '₹2.1 L/T', color: '#9CA3AF' },
      { name: 'Palladium', pct: 65, val: '₹1.4 L/T', color: '#8B5CF6' },
      { name: 'Copper', pct: 88, val: '₹0.95 L/T', color: '#D97706' },
      { name: 'Aluminium', pct: 95, val: '₹0.35 L/T', color: '#60A5FA' },
      { name: 'Steel / Iron', pct: 98, val: '₹0.12 L/T', color: '#6B7280' },
      { name: 'Plastics (granules)', pct: 70, val: '₹0.18 L/T', color: '#34D399' },
    ];
    const md = document.getElementById('matDb');
    if (md && md.children.length === 0) {
      matData.forEach(d => {
        md.innerHTML += `<div class="mat-row"><div class="mat-name">${d.name}</div><div class="mat-bar-wrap"><div class="mat-bar" style="width:${d.pct}%;background:${d.color};"></div></div><div class="mat-val">${d.val}</div><div class="mat-price">Recovery: ${d.pct}%</div></div>`;
      });
    }

    // Investment Chart
    const invData = [
      { label: 'Machinery', val: 5.2, color: '#1B5E20' },
      { label: 'Civil Works', val: 2.8, color: '#2E7D32' },
      { label: 'ETP & Safety', val: 2.1, color: '#4CAF50' },
      { label: 'Working Cap', val: 1.5, color: '#66BB6A' },
      { label: 'Licensing', val: 0.8, color: '#81C784' },
    ];
    const ic = document.getElementById('investChart');
    if (ic && ic.children.length === 0) {
      invData.forEach(d => {
        const col = document.createElement('div'); col.className = 'bar-col';
        const h = Math.round((d.val / 5.2) * 148);
        col.innerHTML = `<div class="bar-val">₹${d.val}Cr</div><div class="bar-rect" style="height:${h}px;background:${d.color};"></div><div class="bar-name">${d.label}</div>`;
        ic.appendChild(col);
      });
    }

    // Gantt Chart
    const ganttData = [
      { name: 'Site & Land Finalisation', start: 0, dur: 2, color: '#1B5E20' },
      { name: 'CPCB EPR Registration', start: 0, dur: 1, color: '#4CAF50' },
      { name: 'CTE Application', start: 1, dur: 5, color: '#2E7D32' },
      { name: 'Civil & Construction', start: 5, dur: 6, color: '#66BB6A' },
      { name: 'Equipment Procurement', start: 4, dur: 6, color: '#4CAF50' },
      { name: 'ETP & Scrubber Install', start: 8, dur: 4, color: '#81C784' },
      { name: 'CTO Application', start: 11, dur: 3, color: '#1B5E20' },
      { name: 'SPCB Recycler Auth.', start: 10, dur: 3, color: '#2E7D32' },
      { name: 'Staff Hiring & Training', start: 10, dur: 4, color: '#66BB6A' },
      { name: 'Trial Runs', start: 14, dur: 3, color: '#4CAF50' },
      { name: 'Collection Network', start: 6, dur: 10, color: '#81C784' },
      { name: 'First Commercial Batch', start: 17, dur: 7, color: '#2E7D32' },
    ];
    const gm = document.getElementById('ganttMonths');
    const gr = document.getElementById('ganttRows');
    if (gm && gm.children.length === 0) {
      for (let i = 1; i <= 24; i++) {
        const d = document.createElement('div'); d.className = 'gantt-month'; d.textContent = 'M' + i; gm.appendChild(d);
      }
    }
    if (gr && gr.children.length === 0) {
      ganttData.forEach(d => {
        const row = document.createElement('div'); row.className = 'gantt-row';
        const lp = (d.start / 24) * 100, wp = (d.dur / 24) * 100;
        row.innerHTML = `<div class="gantt-label">${d.name}</div><div class="gantt-bar-wrap"><div class="gantt-bar" style="margin-left:${lp}%;width:${wp}%;background:${d.color};">${d.dur}mo</div></div>`;
        gr.appendChild(row);
      });
    }

    // Revenue/Profit Line Chart
    const lc = document.getElementById('lineChart');
    if (lc && lc.children.length === 0) {
      const yrs = ['Yr 1', 'Yr 2', 'Yr 3', 'Yr 4', 'Yr 5'];
      const rev = [7.1, 12.75, 17.2, 21.8, 26.5];
      const profit = [2.1, 5.8, 9.4, 13.2, 17.0];
      const W = 600, H = 180, PL = 54, PR = 20, PT = 20, PB = 30;
      const cW = W - PL - PR, cH = H - PT - PB;
      const sx = i => PL + i * (cW / 4);
      const sy = v => PT + cH - ((v / 28)) * cH;

      for (let v = 0; v <= 28; v += 7) {
        const y = sy(v);
        lc.innerHTML += `<line x1="${PL}" y1="${y}" x2="${W - PR}" y2="${y}" stroke="rgba(0,0,0,.06)" stroke-width="1"/>`;
        lc.innerHTML += `<text x="${PL - 5}" y="${y + 4}" text-anchor="end" font-size="9" fill="#999">₹${v}Cr</text>`;
      }
      let rp = `M${sx(0)},${sy(rev[0])}`;
      rev.forEach((v, i) => { if (i > 0) rp += ` L${sx(i)},${sy(v)}`; });
      lc.innerHTML += `<path d="${rp} L${sx(4)},${sy(0)} L${sx(0)},${sy(0)} Z" fill="rgba(46,125,50,.12)"/>`;
      lc.innerHTML += `<path d="${rp}" fill="none" stroke="#2E7D32" stroke-width="2.5" stroke-linejoin="round"/>`;
      let pp = `M${sx(0)},${sy(profit[0])}`;
      profit.forEach((v, i) => { if (i > 0) pp += ` L${sx(i)},${sy(v)}`; });
      lc.innerHTML += `<path d="${pp}" fill="none" stroke="#81C784" stroke-width="2" stroke-dasharray="6,3" stroke-linejoin="round"/>`;
      yrs.forEach((y, i) => {
        lc.innerHTML += `<circle cx="${sx(i)}" cy="${sy(rev[i])}" r="4" fill="#2E7D32"/>`;
        lc.innerHTML += `<text x="${sx(i)}" y="${sy(rev[i]) - 9}" text-anchor="middle" font-size="9" font-weight="700" fill="#1B5E20">₹${rev[i]}Cr</text>`;
        lc.innerHTML += `<circle cx="${sx(i)}" cy="${sy(profit[i])}" r="3" fill="#81C784"/>`;
        lc.innerHTML += `<text x="${sx(i)}" y="${H - 5}" text-anchor="middle" font-size="10" fill="#666">${y}</text>`;
      });
      lc.innerHTML += `<text x="${W - PR - 5}" y="${PT + 14}" text-anchor="end" font-size="10" fill="#2E7D32" font-weight="700">— Revenue</text>`;
      lc.innerHTML += `<text x="${W - PR - 5}" y="${PT + 27}" text-anchor="end" font-size="10" fill="#81C784" font-weight="700">- - Net Profit</text>`;
    }
  }, []);

  return (
    <div style={styles.blogWrap} className='wrap has-sticky'>
      <style>{staticStyles}</style>

      <div className="page-body">
        {/* TAGS */}
        <div style={styles.tagRow}>
          <span style={{ ...styles.tag, ...styles.tg }}>EPR Nexuss | Ultimate Guide</span>
          <span style={{ ...styles.tag, ...styles.to }}>🖥️ E-Waste Plant Edition</span>
          <span style={{ ...styles.tag, ...styles.tb }}>📊 Data + Case Study</span>
          <span style={{ ...styles.tag, ...styles.tr }}>🔥 2026 Complete Blueprint</span>
        </div>

        {/* HERO */}
        <div style={styles.hero}>
          <div style={styles.heroCircuit}></div>
          <div style={styles.heroGlow}></div>
          <div style={styles.heroGlow2}></div>
          <div style={styles.heroBadge}>
            <span style={styles.pulse}></span>
            INDIA'S E-WASTE CRISIS — AND YOUR OPPORTUNITY
          </div>
          <div style={styles.heroH} className='heroH'>
            India’s E-Waste Crisis Demands Responsible Action.
            <em style={{ fontStyle: 'normal', color: 'hsl(var(--secondary))', display: 'block' }}>Build a Recycling Facility That Delivers Impact and Growth.</em>
          </div>
          <div style={styles.heroSub}>
            India generates 3.2 million tonnes of e-waste every year — the third largest in the world. Less than 22% is formally recycled. The rest is burned, buried, or picked apart by children with bare hands in toxic junkyards. The entrepreneurs who build certified E-waste recycling plants in 2026 won't just profit — they will become part of the most important industrial story of this decade.
          </div>
          <div style={styles.heroStats}>
            <div style={styles.hstat}><div style={styles.hstatN}>3.2MT</div><div style={styles.hstatL}>India's annual e-waste generation</div></div>
            <div style={styles.hstat}><div style={styles.hstatN}>78%</div><div style={styles.hstatL}>Informally handled — zero compliance</div></div>
            <div style={styles.hstat}><div style={styles.hstatN}>₹18K Cr</div><div style={styles.hstatL}>India e-waste market size by 2027</div></div>
            <div style={styles.hstat}><div style={styles.hstatN}>₹8L+</div><div style={styles.hstatL}>Precious metals per tonne of PCBs</div></div>
          </div>
        </div>

        <div style={styles.meta}>
          <span>By <span style={styles.brand}>EPR Nexuss Team</span></span>
          <span>April 2026</span>
          <span>12 min read</span>
          <span>♻️ Most Complete E-Waste Guide in India</span>
        </div>

        <p style={styles.bodyText}>
          Every phone you upgrade, every laptop you discard, every television you replace — it goes somewhere. In India, that "somewhere" is almost always a cluster of informal workers in Delhi's Seelampur, Mumbai's Dharavi, or Bengaluru's outskirts, melting circuit boards over open fires to extract gold and copper. The toxic fumes cause irreversible lung damage. The acids contaminate rivers. The lead poisons soil for decades.
        </p>
        <p style={styles.bodyText}>
          This is not just an environmental crime. It is an economic failure — because those same circuit boards contain gold, silver, palladium, and copper worth lakhs of rupees per tonne. And right now, <span style={styles.brandI}>EPR Nexuss</span> is helping forward-thinking businesses capture that value legally, profitably, and at scale. Here is the complete blueprint.
        </p>

        <div style={styles.hbox}>
          "India throws away ₹1,00,000 crore worth of recoverable precious metals every single year by allowing e-waste to flow into the informal sector. Every certified E-waste recycling plant built today is a direct claim on that treasure — with full government backing."
        </div>

        {/* SECTION 1: CRISIS */}
        <div style={styles.secTitle}>The Crisis Behind The Opportunity</div>
        <div style={styles.probGrid} className='probGrid'>
          <div style={{ ...styles.probCard }}>
            <span style={styles.probIcon}>☠️</span>
            <div style={styles.probTitle}>Toxic Informal Processing</div>
            <div style={styles.probText}>Over 1.5 million workers — including children — handle e-waste informally. Open-air acid baths, burning cables, and mercury extraction cause permanent health damage with zero safety measures.</div>
          </div>
          <div style={{ ...styles.probCard, ...styles.probCardLight }}>
            <span style={styles.probIcon}>📉</span>
            <div style={styles.probTitle}>₹1 Lakh Crore Lost Annually</div>
            <div style={styles.probText}>Gold, silver, palladium, copper — recoverable at 95%+ purity through certified processes — are lost to inefficient informal extraction that recovers barely 30% of available value.</div>
          </div>
          <div style={{ ...styles.probCard, ...styles.probCardLight }}>
            <span style={styles.probIcon}>⚖️</span>
            <div style={styles.probTitle}>E-Waste Management Rules 2022</div>
            <div style={styles.probText}>India's updated EWMR 2022 makes EPR mandatory for ALL producers and importers of electronics. Non-compliance triggers CPCB penalties, import bans, and licence revocations.</div>
          </div>
          <div style={{ ...styles.probCard }}>
            <span style={styles.probIcon}>📈</span>
            <div style={styles.probTitle}>The Infrastructure Gap</div>
            <div style={styles.probText}>India has only ~312 registered e-waste recyclers for 3.2 MT of annual waste. At current growth rates, India will need 3× this capacity by 2028. That gap is your business opportunity.</div>
          </div>
        </div>

        {/* CHART 1 */}
        <div style={styles.chartWrap}>
          <div style={styles.chartTitle}>📈 India E-Waste Generation (Million Tonnes) — 2019 to 2030</div>
          <div style={styles.chartSub}>Actual data 2019–2024 | Projected 2025–2030 | Source: MoEFCC & ASSOCHAM</div>
          <div style={styles.barChart} id="ewChart"></div>
          <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
            <span style={{ fontSize: '11px', color: 'var(--color-text-secondary,#666)' }}>
              <span style={{ color: '#2E7D32' }}>■</span> Actual &nbsp;<span style={{ color: '#81C784' }}>■</span> Projected
            </span>
          </div>
        </div>

        {/* CHART 2 */}
        {/* <div style={styles.chartWrap}>
        <div style={styles.chartTitle}>💰 Precious & Base Metal Recovery Value per Tonne of E-Waste (₹ Lakhs)</div>
        <div style={styles.chartSub}>Based on Q1 2026 LME prices | PCB-rich stream (computers, servers, mobiles)</div>
        <div style={styles.matDb} id="matDb"></div>
      </div> */}

        {/* DONUT */}
        <div style={styles.chartWrap}>
          <div style={styles.chartTitle}>🗂️ India E-Waste Composition by Category (2025)</div>
          <div style={styles.chartSub}>Source: Central Pollution Control Board Annual Report</div>
          <div style={styles.donutWrap}>
            <svg width="140" height="140" viewBox="0 0 140 140">
              <circle cx="70" cy="70" r="54" fill="none" stroke="#E8F5E9" strokeWidth="24" />
              <circle cx="70" cy="70" r="54" fill="none" stroke="#1B5E20" strokeWidth="24" strokeDasharray="122 217" strokeDashoffset="0" transform="rotate(-90 70 70)" />
              <circle cx="70" cy="70" r="54" fill="none" stroke="#2E7D32" strokeWidth="24" strokeDasharray="61 278" strokeDashoffset="-122" transform="rotate(-90 70 70)" />
              <circle cx="70" cy="70" r="54" fill="none" stroke="#4CAF50" strokeWidth="24" strokeDasharray="47 292" strokeDashoffset="-183" transform="rotate(-90 70 70)" />
              <circle cx="70" cy="70" r="54" fill="none" stroke="#81C784" strokeWidth="24" strokeDasharray="34 305" strokeDashoffset="-230" transform="rotate(-90 70 70)" />
              <circle cx="70" cy="70" r="54" fill="none" stroke="#C8E6C9" strokeWidth="24" strokeDasharray="22 317" strokeDashoffset="-264" transform="rotate(-90 70 70)" />
              <text x="70" y="65" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--color-text-primary,#111)">3.2 MT</text>
              <text x="70" y="80" textAnchor="middle" fontSize="10" fill="var(--color-text-secondary,#666)">total / yr</text>
            </svg>
            <div style={styles.donutLegend}>
              <div style={styles.legendItem}><span style={{ ...styles.legendDot, background: '#1B5E20' }}></span><span><strong>IT Equipment</strong> (computers, laptops, servers) — 40%</span></div>
              <div style={styles.legendItem}><span style={{ ...styles.legendDot, background: '#2E7D32' }}></span><span><strong>Telecom Equipment</strong> (phones, routers) — 20%</span></div>
              <div style={styles.legendItem}><span style={{ ...styles.legendDot, background: '#4CAF50' }}></span><span><strong>Consumer Electronics</strong> (TV, audio) — 15%</span></div>
              <div style={styles.legendItem}><span style={{ ...styles.legendDot, background: '#81C784' }}></span><span><strong>Electrical Equipment</strong> (UPS, panels) — 11%</span></div>
              <div style={styles.legendItem}><span style={{ ...styles.legendDot, background: '#C8E6C9' }}></span><span><strong>Others</strong> (appliances, medical) — 14%</span></div>
            </div>
          </div>
        </div>

        {/* <div style={styles.ctaInline}>
        <div style={styles.ctaIt}>Want a profitability model for your e-waste plant? <strong>EPR Nexuss builds free custom feasibility reports for serious investors.</strong></div>
        <button style={styles.ctaIb} onClick={() => window.location.href='mailto:contact@eprnexuss.com'}>Get Feasibility Report ↗</button>
      </div> */}

        {/* SECTION 2: LAND */}
        <div style={styles.secTitle}>Land Requirements — What You Need, Where & Why</div>
        <p style={styles.bodyText}>
          E-waste recycling involves hazardous chemicals, precious metal recovery, and significant logistics. Land selection is not just about cost — it's about zoning compliance, regulatory proximity, feedstock access, and long-term operational viability.
        </p>

        <div style={styles.landGrid} className='landGrid'>
          <div style={styles.landCard}>
            <div style={styles.landIcon}>🏠</div>
            <div style={styles.landLabel}>SMALL SCALE</div>
            <div style={styles.landVal}>0.5–1 Acre</div>
            <div style={styles.landDesc}>Manual dismantling + basic segregation. Up to 500 TPY. Suitable for Tier-2 city collection hubs.</div>
          </div>
          <div style={{ ...styles.landCard, ...styles.landCardFeat }}>
            <div style={styles.landIcon}>⚙️</div>
            <div style={styles.landLabel}>MID SCALE ★ IDEAL</div>
            <div style={styles.landVal}>2–5 Acres</div>
            <div style={styles.landDesc}>Full processing: shredding, PCB refining, metal recovery. 500–5,000 TPY. Best ROI band. Requires MIDC / industrial zone.</div>
          </div>
          <div style={styles.landCard}>
            <div style={styles.landIcon}>🏗️</div>
            <div style={styles.landLabel}>LARGE SCALE</div>
            <div style={styles.landVal}>8–15 Acres</div>
            <div style={styles.landDesc}>Integrated precious metal refinery + hydrometallurgy. 5,000+ TPY. SEZ or large industrial park required.</div>
          </div>
        </div>

        {/* REQUIREMENTS TABLE */}
        <table style={styles.reqTable}>
          <thead>
            <tr>
              <th style={{ ...styles.reqTableTh }}>Land Parameter</th>
              <th style={{ ...styles.reqTableTh }}>Specification</th>
              <th style={{ ...styles.reqTableTh }}>Regulatory Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={styles.reqTableTd}><strong>Zoning</strong></td><td style={styles.reqTableTd}>Industrial / MIDC / SEZ only</td><td style={styles.reqTableTd}>EWMR 2022 — residential zones prohibited</td></tr>
            <tr><td style={styles.reqTableTd}><strong>Distance from water bodies</strong></td><td style={styles.reqTableTd}>Minimum 500 metres</td><td style={styles.reqTableTd}>CPCB hazardous waste proximity norms</td></tr>
            <tr><td style={styles.reqTableTd}><strong>Distance from residential areas</strong></td><td style={styles.reqTableTd}>Minimum 500 metres</td><td style={styles.reqTableTd}>Acid fume & emission safety buffer</td></tr>
            <tr><td style={styles.reqTableTd}><strong>ETP space</strong></td><td style={styles.reqTableTd}>20% of total plot area</td><td style={styles.reqTableTd}>Mandatory for acid/chemical wastewater treatment</td></tr>
            <tr><td style={styles.reqTableTd}><strong>Storage area — hazardous</strong></td><td style={styles.reqTableTd}>Separate impermeable bunded yard</td><td style={styles.reqTableTd}>HWM Rules 2016 Schedule II compliance</td></tr>
            <tr><td style={styles.reqTableTd}><strong>Ventilation & emissions</strong></td><td style={styles.reqTableTd}>CPCB-approved stack height, scrubbers</td><td style={styles.reqTableTd}>Air (Prevention & Control of Pollution) Act</td></tr>
            <tr><td style={styles.reqTableTd}><strong>Road access</strong></td><td style={styles.reqTableTd}>Min 9m wide approach road</td><td style={styles.reqTableTd}>Heavy vehicle logistics — container trucks</td></tr>
            <tr><td style={styles.reqTableTd}><strong>Power requirement</strong></td><td style={styles.reqTableTd}>3-phase, minimum 200 KVA</td><td style={styles.reqTableTd}>Shredders, furnaces, refining equipment</td></tr>
            <tr><td style={styles.reqTableTd}><strong>Preferred locations</strong></td><td style={styles.reqTableTd}>Delhi NCR, Mumbai, Bengaluru, Chennai, Hyderabad, Pune</td><td style={styles.reqTableTd}>Highest e-waste generation density nationally</td></tr>
            <tr><td style={styles.reqTableTd}><strong>Water supply</strong></td><td style={styles.reqTableTd}>Min 10 KLD clean water supply</td><td style={styles.reqTableTd}>Wet chemical processing and ETP operations</td></tr>
          </tbody>
        </table>

        {/* <div style={styles.ctaInline}>
        <div style={styles.ctaIt}>Need help identifying the perfect industrial plot? <strong>EPR Nexuss connects you with MIDC-approved land advisors in your target state.</strong></div>
        <button style={styles.ctaIb} onClick={() => window.location.href='mailto:contact@eprnexuss.com'}>Find My Land ↗</button>
      </div> */}

        {/* SECTION 3: LICENCES */}
        <div style={styles.secTitle}>Complete Licence & Approval Roadmap</div>
        <p style={styles.bodyText}>
          An E-waste recycling plant touches multiple regulatory bodies. Every single approval is non-negotiable — missing one means your plant cannot legally process a single kilogram of e-waste. Here is every licence, who issues it, and exactly how long it takes.
        </p>

        <div style={styles.licWrap}>
          {[
            { num: '1', name: 'GST + Pollution Cess Exemptions', auth: 'GST Council / MoEFCC Green Industry Scheme', desc: 'Certified e-waste recyclers may qualify for reduced GST on recovered materials, exemption from pollution cess, and green industry subsidies under state industrial promotion policies.', time: '⏱ 10–20 days' },
            { num: '2', name: 'Consent to Establish (CTE)', auth: 'State Pollution Control Board (SPCB)', desc: 'Required before any construction begins. Evaluates the plant layout, ETP design, air emission controls, and hazardous waste storage systems.', time: '⏱ 60–120 days' },
            { num: '3', name: 'Consent to Operate (CTO)', auth: 'State Pollution Control Board (SPCB)', desc: 'Issued after construction is complete, ETP is functional, and equipment is installed and verified. The SPCB inspector must physically sign off.', time: '⏱ 30–60 days post-construction' },
            { num: '4', name: 'Hazardous Waste Authorisation', auth: 'State Pollution Control Board (SPCB)', desc: 'E-waste processing generates hazardous by-products — leaded glass, mercury-containing lamps, brominated flame retardants, CRT dust.', time: '⏱ 30–60 days' },
            { num: '5', name: 'EPR Registration — CPCB Portal', auth: 'Central Pollution Control Board (CPCB)', desc: 'Mandatory under E-Waste Management Rules 2022 for all recyclers. This is the foundational registration that enables you to generate and trade EPR credits.', time: '⏱ 15–25 days' },
            { num: '6', name: 'Factory Licence', auth: 'State Labour Department / Factory Inspector', desc: 'Under the Factories Act 1948. Required for any processing facility with 10+ workers and powered machinery.', time: '⏱ 30–45 days' },
            { num: '7', name: 'Authorisation as E-Waste Recycler', auth: 'State Pollution Control Board (SPCB)', desc: 'Under EWMR 2022, every recycler must obtain SPCB authorisation specifying the categories of e-waste they are permitted to handle.', time: '⏱ 45–90 days' },
            { num: '8', name: 'Fire & Explosive Safety NOC', auth: 'State Fire Department + PESO (if solvents used)', desc: 'E-waste shredding generates combustible dust, CRT displays contain explosive vacuum chambers. Fire suppression systems verified before NOC issuance.', time: '⏱ 20–40 days' },
          ].map((lic, idx) => (
            <div key={idx} style={styles.licItem}>
              <div style={styles.licLeft}>
                <div style={styles.licNum}>{lic.num}</div>
                {idx < 7 && <div style={styles.licLine}></div>}
              </div>
              <div style={styles.licBody}>
                <div style={styles.licName}>{lic.name}</div>
                <div style={styles.licAuth}>{lic.auth}</div>
                <div style={styles.licDesc}>{lic.desc}</div>
                <span style={styles.licTime}>{lic.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* INVESTMENT CHART */}
        <div style={styles.chartWrap}>
          <div style={styles.chartTitle}>🏗️ Plant Investment Split by Cost Head (₹ Cr) — Mid-Scale Plant</div>
          <div style={styles.chartSub}>Total capex range ₹8–18 Cr depending on location and technology mix</div>
          <div style={styles.barChart} id="investChart"></div>
        </div>

        {/* <div style={styles.ctaInline}>
        <div style={styles.ctaIt}>Ready to map your 24-month plant journey? <strong>EPR Nexuss project-manages your entire setup — from land selection to first commercial batch.</strong></div>
        <button style={styles.ctaIb} onClick={() => window.location.href='mailto:contact@eprnexuss.com'}>Start My Plant Journey ↗</button>
      </div> */}

        {/* CASE STUDY */}
        <div style={styles.secTitle}>Real Case Study — SAMS Recycling Pvt. Ltd., Hapur</div>
        <p style={styles.bodyText}>
          Here is a verified, anonymised case study of a successful mid-scale e-waste recycling plant that <span style={styles.brandI}>EPR Nexuss</span> supported from concept to commercial operations — including the full financial performance in its first two operating years.
        </p>

        <div style={styles.csCard}>
          <div style={styles.csHead}>
            <div style={styles.csBadge}>📋 VERIFIED CASE STUDY — EPR NEXUSS PARTNER</div>
            <div style={styles.csTitle}>SAMS Recycling Pvt. Ltd.<br />Hapur</div>
          </div>
          <div style={styles.csBody}>
            <div style={styles.csMeta}>
              <div style={styles.csMetaCard}><div style={styles.csMetaVal}>3,200 TPY</div><div style={styles.csMetaLabel}>Processing Capacity</div></div>
              <div style={styles.csMetaCard}><div style={styles.csMetaVal}>₹12.4 Cr</div><div style={styles.csMetaLabel}>Total Capex Invested</div></div>
              <div style={styles.csMetaCard}><div style={styles.csMetaVal}>19 Months</div><div style={styles.csMetaLabel}>Concept to First Batch</div></div>
            </div>

            <div style={styles.csSecTitle}>📍 Background & Challenge</div>
            <ul style={styles.csList}>
              <li><span style={styles.csCk}>▸</span>Promoter: IT asset disposal company seeking vertical integration into formal recycling</li>
              <li><span style={styles.csCk}>▸</span>Challenge: No prior recycling plant experience, zero regulatory relationships</li>
              <li><span style={styles.csCk}>▸</span>Engaged EPR Nexuss at Month 1 for end-to-end plant design, all licences</li>
              <li><span style={styles.csCk}>▸</span>Target: Achieve profitability by end of Year 1 of operations</li>
            </ul>

            <div style={styles.csSecTitle}>🔑 What EPR Nexuss Delivered</div>
            <ul style={styles.csList}>
              <li><span style={styles.csCk}>✓</span>SPCB CTE & CTO secured in 108 days (industry average: 180+ days)</li>
              <li><span style={styles.csCk}>✓</span>CPCB EPR registration as certified recycler — 21 days</li>
              <li><span style={styles.csCk}>✓</span>Technology partner: German shredder line + domestic PCB hydrometallurgy</li>
              <li><span style={styles.csCk}>✓</span>Collection MoUs signed with 7 IT OEMs, 3 telecom companies, and 12 corporate IT asset managers</li>
              <li><span style={styles.csCk}>✓</span>CPCB-integrated ERP + weighbridge tracking system deployed in Week 1</li>
              <li><span style={styles.csCk}>✓</span>Zero-Liquid Discharge (ZLD) ETP designed and installed — zero deficiencies</li>
              <li><span style={styles.csCk}>✓</span>Full staff training program (38 workers + 4 specialists) with HSE compliance support</li>
            </ul>

            <div style={styles.csSecTitle}>🎯 Outcomes & What Happened Next</div>
            <ul style={styles.csList}>
              <li><span style={styles.csCk}>✓</span>Plant hit 82% capacity utilisation by Month 10 — ahead of 18-month target</li>
              <li><span style={styles.csCk}>✓</span>Full ROI payback projected at <strong>2.8 years</strong> from first commercial batch</li>
              <li><span style={styles.csCk}>✓</span>Signed exclusive 3-year collection agreement with a Bengaluru-based laptop OEM</li>
              <li><span style={styles.csCk}>✓</span>Expanded PCB precious metal refinery — Phase II adding ₹3 Cr annual revenue</li>
              <li><span style={styles.csCk}>✓</span>ISO 14001 + OHSAS 18001 certified — unlocking ESG-linked financing</li>
              <li><span style={styles.csCk}>✓</span>Won 2 state government contracts for public sector IT asset disposal — ₹85 lakhs</li>
            </ul>
          </div>
        </div>

        <div style={styles.urgency}>
          <span style={{ fontSize: '18px', flexShrink: 0 }}>⏳</span>
          <span><strong>SAMS Recycling started exactly where you are right now.</strong> No recycling experience. No licences. No collection network. 19 months and ₹12.4 Cr later, they generated ₹7.1 Cr net profit in Year 1 alone — with Year 2 nearly doubling it. EPR Nexuss delivered every piece of that journey. Your story could start today.</span>
        </div>

        {/* <div style={styles.ctaInline}>
        <div style={styles.ctaIt}>Want to replicate SAMS Recycling's success in your city? <strong>EPR Nexuss will build your complete e-waste plant blueprint — first consultation is free.</strong></div>
        <button style={styles.ctaIb} onClick={() => window.location.href='mailto:contact@eprnexuss.com'}>Build My Blueprint ↗</button>
      </div> */}

        {/* MAIN CTA */}
        <div style={styles.ctaMain}>
          <div style={styles.ctaEyebrow}>⚡ EPR Nexuss — India's Complete E-Waste Recycling Partner</div>
          <div style={styles.ctaH}>
            The Blueprint Is In Your Hands.
            <em style={{ fontStyle: 'normal', color: '#81C784' }}>Now It's Time To Build.</em>
          </div>
          <div style={styles.ctaSub}>
            Licences. Land. Technology. Collection networks. EPR certificates. Precious metal offtake. EPR Nexuss manages every step of your e-waste plant journey — so you can focus on building India's most profitable green business. First consultation is completely free.
          </div>
          <div className="cta-wrapper">
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
          </div>
          <div style={styles.ctaTrust}>
            <span style={styles.ctaTi}><span style={styles.ck}>✓</span> Free consultation</span>
            <span style={styles.ctaTi}><span style={styles.ck}>✓</span> End-to-end licensing</span>
            <span style={styles.ctaTi}><span style={styles.ck}>✓</span> Technology partners</span>
            <span style={styles.ctaTi}><span style={styles.ck}>✓</span> EPR certificate guaranteed</span>
            <span style={styles.ctaTi}><span style={styles.ck}>✓</span> Pan-India coverage</span>
            <span style={styles.ctaTi}><span style={styles.ck}>✓</span> 7-day fast-track option</span>
          </div>
        </div>
      </div>
      <div className="form-column">
        <StickyContactForm />
      </div>      {/* STICKY */}
      {/* <div style={styles.stickyBar}>
        <div style={styles.stickyText}><strong>EPR Nexuss</strong> — From blueprint to first batch. Every step, together.</div>
        <button style={styles.stickyBtn} onClick={() => window.location.href='mailto:contact@eprnexuss.com'}>Talk to an Expert ↗</button>
      </div> */}
    </div>
  );
};

// Static inline styles
const styles: { [key: string]: React.CSSProperties } = {
  blogWrap: { maxWidth: '1200px', margin: '80px auto 0', padding: '150px 24px 40px', backgroundColor: '#e5f0f5' },
  tagRow: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' },
  tag: { fontSize: '11px', padding: '4px 13px', borderRadius: '20px', fontWeight: 700, letterSpacing: '.04em' },
  tg: { background: '#E8F5E9', color: '#1b1e5e' },
  to: { background: '#FFF3E0', color: '#E65100' },
  tb: { background: '#E3F2FD', color: '#0D47A1' },
  tr: { background: '#FCE4EC', color: '#880E4F' },

  hero: { background: 'linear-gradient(145deg, rgb(11, 31, 58) 0%, rgb(28, 61, 110) 50%, rgb(11, 31, 58) 100%)', borderRadius: '22px', padding: '44px 32px 38px', marginBottom: '32px', position: 'relative', overflow: 'hidden' },
  heroCircuit: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: .06, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 30px,rgba(76,175,80,.5) 30px,rgba(76,175,80,.5) 31px)', pointerEvents: 'none' },
  heroGlow: { position: 'absolute', top: '-60px', right: '-60px', width: '260px', height: '260px', background: 'radial-gradient(circle,rgba(76,175,80,.2) 0%,transparent 70%)', pointerEvents: 'none' },
  heroGlow2: { position: 'absolute', bottom: '-80px', left: '-40px', width: '220px', height: '220px', background: 'radial-gradient(circle,rgba(33,150,243,.1) 0%,transparent 70%)', pointerEvents: 'none' },
  heroBadge: { display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(76,175,80,.15)', border: '1px solid rgba(76,175,80,.4)', color: '#81C784', fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', padding: '5px 14px', borderRadius: '20px', marginBottom: '18px' },
  pulse: { width: '7px', height: '7px', background: '#4CAF50', borderRadius: '50%', animation: 'pulse 1.4s infinite' },
  heroH: { fontFamily: "'Fraunces',serif", fontSize: '32px', fontWeight: 900, color: '#fff', lineHeight: 1.22, marginBottom: '16px' },
  heroSub: { fontSize: '14px', color: '#A5D6A7', lineHeight: 1.78, marginBottom: '24px', borderLeft: '2px solid #4CAF50', paddingLeft: '14px' },
  heroStats: { display: 'flex', gap: 0, background: 'rgba(0,0,0,.25)', borderRadius: '12px', overflow: 'hidden', flexWrap: 'wrap' },
  hstat: { flex: 1, minWidth: '120px', padding: '14px 16px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,.07)' },
  hstatN: { fontSize: '20px', fontWeight: 800, color: '#81C784' },
  hstatL: { fontSize: '10px', color: '#66BB6A', marginTop: '3px', lineHeight: 1.4 },

  meta: { display: 'flex', gap: '14px', fontSize: '12px', color: '#666', marginBottom: '24px', flexWrap: 'wrap', paddingBottom: '12px', borderBottom: '.5px solid #e5e7eb' },
  brand: { color: '#2E7D32', fontWeight: 700 },
  brandI: { color: '#2E7D32', fontWeight: 700 },
  secTitle: { fontFamily: "'Fraunces',serif", fontSize: '21px', fontWeight: 700, margin: '34px 0 10px' },
  bodyText: { fontSize: '14px', lineHeight: 1.85, marginBottom: '14px' },
  hbox: { background: '#E8F5E9', borderLeft: '3px solid #4CAF50', borderRadius: '0 8px 8px 0', padding: '13px 17px', margin: '18px 0', fontSize: '14px', color: '#1B5E20', lineHeight: 1.65, fontStyle: 'italic' },

  probGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '20px 0' },
  probCard: { borderRadius: '12px', padding: '16px', border: '.5px solid #e5e7eb' },
  probCardDark: { background: '#0D1B0E', borderColor: '#2E7D32' },
  probCardLight: { background: '#f9fafb' },
  probIcon: { fontSize: '24px', marginBottom: '8px', display: 'block' },
  probTitle: { fontSize: '13px', fontWeight: 700, marginBottom: '5px' },
  probText: { fontSize: '12px', lineHeight: 1.6 },

  chartWrap: { background: '#f9fafb', borderRadius: '14px', padding: '20px', margin: '20px 0', overflowX: 'auto' },
  chartTitle: { fontSize: '13px', fontWeight: 700, marginBottom: '3px' },
  chartSub: { fontSize: '11px', color: '#666', marginBottom: '14px' },
  barChart: { display: 'flex', alignItems: 'flex-end', gap: '8px', height: '160px', overflowX: 'auto', paddingBottom: '10px' },
  barCol: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', flex: '0 0 auto', minWidth: '70px' },
  barRect: { width: '100%', borderRadius: '6px 6px 0 0', minWidth: '28px', cursor: 'pointer' },
  barVal: { fontSize: '10px', fontWeight: 700, color: '#111' },
  barName: { fontSize: '10px', color: '#666', textAlign: 'center', lineHeight: 1.3 },

  donutWrap: { display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', margin: '14px 0' },
  donutLegend: { display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 },
  legendItem: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' },
  legendDot: { width: '10px', height: '10px', borderRadius: '50%', flexShrink: 0 },

  landGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', margin: '20px 0' },
  landCard: { borderRadius: '12px', padding: '16px', textAlign: 'center', border: '.5px solid #e5e7eb' },
  landCardFeat: { background: '#0D1B0E', borderColor: '#4CAF50' },
  landIcon: { fontSize: '26px', marginBottom: '8px' },
  landLabel: { fontSize: '10px', fontWeight: 700, letterSpacing: '.04em', marginBottom: '6px', color: '#666' },
  landVal: { fontSize: '18px', fontWeight: 800, color: '#2E7D32', marginBottom: '4px' },
  landDesc: { fontSize: '11px', color: '#666', lineHeight: 1.5 },

  reqTable: { width: '100%', borderCollapse: 'collapse', margin: '20px 0', fontSize: '13px' },
  reqTableTh: { background: '#1B5E20', color: '#E8F5E9', padding: '10px 14px', textAlign: 'left', fontWeight: 600 },
  reqTableTd: { padding: '10px 14px', borderBottom: '.5px solid #e5e7eb', verticalAlign: 'top', fontSize: '12px' },

  licWrap: { margin: '20px 0' },
  licItem: { display: 'flex', gap: '14px', marginBottom: '6px' },
  licLeft: { display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '36px' },
  licNum: { width: '36px', height: '36px', borderRadius: '50%', background: '#2E7D32', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, flexShrink: 0 },
  licLine: { flex: 1, width: '2px', background: 'linear-gradient(145deg, rgb(11, 31, 58) 0%, rgb(28, 61, 110) 50%, rgb(11, 31, 58) 100%)', marginTop: '3px', minHeight: '28px' },
  licBody: { padding: '2px 0 20px' },
  licName: { fontSize: '14px', fontWeight: 700, marginBottom: '3px' },
  licAuth: { fontSize: '12px', color: '#2E7D32', fontWeight: 600, marginBottom: '4px' },
  licDesc: { fontSize: '12px', color: '#666', lineHeight: 1.55 },
  licTime: { display: 'inline-block', marginTop: '5px', background: '#E8F5E9', color: '#1B5E20', fontSize: '10px', fontWeight: 700, padding: '2px 9px', borderRadius: '10px' },

  matDb: { margin: '20px 0' },
  matRow: { display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: '.5px solid #e5e7eb' },
  matName: { fontSize: '13px', fontWeight: 600, width: '110px', flexShrink: 0 },
  matBarWrap: { flex: 1, background: 'rgba(0,0,0,.05)', borderRadius: '4px', height: '14px', overflow: 'hidden' },
  matBar: { height: '100%', borderRadius: '4px' },
  matVal: { fontSize: '12px', fontWeight: 700, color: '#2E7D32', width: '70px', textAlign: 'right', flexShrink: 0 },
  matPrice: { fontSize: '11px', color: '#666', width: '90px', textAlign: 'right', flexShrink: 0 },

  ctaInline: { background: '#E8F5E9', border: '.5px solid #81C784', borderRadius: '10px', padding: '14px 18px', margin: '26px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' },
  ctaIt: { fontSize: '13px', color: '#1B5E20', lineHeight: 1.5 },
  ctaIb: { background: '#2E7D32', color: '#fff', border: 'none', borderRadius: '8px', padding: '9px 16px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' },

  urgency: { background: '#FFF8E1', border: '.5px solid #FFC107', borderRadius: '10px', padding: '13px 16px', margin: '20px 0', display: 'flex', gap: '9px', alignItems: 'flex-start', fontSize: '13px', color: '#6D4C41', lineHeight: 1.6 },

  ctaMain: { background: 'linear-gradient(145deg, rgb(11, 31, 58) 0%, rgb(28, 61, 110) 50%, rgb(11, 31, 58) 100%)', borderRadius: '20px', padding: '42px 30px', marginTop: '36px', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  ctaEyebrow: { fontSize: '10px', color: '#81C784', fontWeight: 700, letterSpacing: '.1em', marginBottom: '12px', textTransform: 'uppercase' },
  ctaH: { fontFamily: "'Fraunces',serif", fontSize: '25px', fontWeight: 900, color: '#fff', lineHeight: 1.3, marginBottom: '12px' },
  ctaSub: { fontSize: '13px', color: '#A5D6A7', lineHeight: 1.75, marginBottom: '28px', maxWidth: '440px', margin: '12px auto 28px' },
  ctaBtns: { display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '22px' },
  btnP: { background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '10px', padding: '13px 28px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' },
  btnS: { background: 'transparent', color: '#A5D6A7', border: '1px solid rgba(129,199,132,.4)', borderRadius: '10px', padding: '13px 28px', fontSize: '13px', fontWeight: 500, cursor: 'pointer' },
  ctaTrust: { display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' },
  ctaTi: { fontSize: '11px', color: '#66BB6A', display: 'flex', alignItems: 'center', gap: '4px' },
  ck: { width: '14px', height: '14px', background: '#4CAF50', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '8px' },

  stickyBar: { position: 'sticky', bottom: 0, background: '#fff', borderTop: '.5px solid #e5e7eb', padding: '11px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap', marginTop: '22px' },
  stickyText: { fontSize: '12px', color: '#666' },
  stickyBtn: { background: '#2E7D32', color: '#fff', border: 'none', borderRadius: '8px', padding: '9px 18px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' },
  csCard: { border: '1.5px solid #4CAF50', borderRadius: '18px', overflow: 'hidden', margin: '22px 0' },
  csHead: { background: 'linear-gradient(145deg, rgb(11, 31, 58) 0%, rgb(28, 61, 110) 50%, rgb(11, 31, 58) 100%)', padding: '22px 24px' },
  csBadge: { display: 'inline-block', background: 'rgba(129,199,132,.2)', border: '1px solid #81C784', color: '#81C784', fontSize: '10px', fontWeight: 700, letterSpacing: '.06em', padding: '3px 10px', borderRadius: '10px', marginBottom: '10px' },
  csTitle: { fontFamily: "'Fraunces',serif", fontSize: '19px', fontWeight: 700, color: '#E8F5E9', lineHeight: 1.3 },
  csBody: { padding: '20px 22px' },
  csMeta: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginBottom: '18px' },
  csMetaCard: { background: '#f9fafb', borderRadius: '8px', padding: '10px 12px', textAlign: 'center' },
  csMetaVal: { fontSize: '16px', fontWeight: 800, color: '#2E7D32' },
  csMetaLabel: { fontSize: '10px', color: '#666', marginTop: '2px', lineHeight: 1.4 },
  csSecTitle: { fontSize: '11px', fontWeight: 700, color: '#2E7D32', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '7px' },
  csList: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' },
  csCk: { color: '#4CAF50', flexShrink: 0, fontWeight: 700 },
};

const staticStyles = `
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.2; }
  }
  @media(max-width:768px) {
    .blog-wrap { padding: 80px 20px 40px; }
    .prob-grid { grid-template-columns: 1fr; }
    .land-grid { grid-template-columns: 1fr 1fr; }
    .cs-meta { grid-template-columns: 1fr 1fr; }
    .hero-h { font-size: 22px; }
    .cta-btns { flex-direction: column; align-items: stretch; }
  }
  @media(max-width:480px) {
    .blog-wrap { padding: 70px 16px 30px; }
    .land-grid { grid-template-columns: 1fr; }
  }
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
  .wrap.has-sticky { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 32px; }
.page-body { width: 100%; }
.form-column { position: relative; width: 320px; }
.wrap.has-sticky {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 32px;
  // max-width: 1480px;
  // margin: 80px auto 40px;
  padding: 24px 18px 36px;
  background: #f5f7fb;
  position: relative;
  max-width: 100% !important;
  padding: 150px 24px 40px !important;
  margin: 0 !important;

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
    // grid-template-columns: 1fr;
    gap: 24px;
  }
  
}
  @media (max-width: 980px) {
  .wrap.has-sticky {
    grid-template-columns: 1fr !important;
    gap: 24px;
    padding: 16px 12px 40px;
    margin: 60px auto 20px;
  }
  
  .form-column {
    // order: -1;
    // width: 100% !important;
    max-width: none;
    position: relative;
    margin-bottom: 30px;
  }

  .bar-chart, .bar-wrap, .chart {
    overflow-x: auto;
    padding-bottom: 12px;
  }

  .bar-col {
    min-width: 60px;
    flex-shrink: 0;
  }

  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  .hero-grid, .layout, .cols, .kpis, .mini-grid, .land-grid, .prob-grid {
    grid-template-columns: 1fr !important;
  }

  .hero { padding: 24px 18px; }
  .hero-h { font-size: 26px; }
}

@media (max-width: 640px) {
  .wrap.has-sticky { padding: 12px 10px 30px !important; }
  .hero { padding: 24px 18px; }
  .probGrid, .landGrid {
    grid-template-columns: 1fr !important;
  }
    .page-body{
    width: 40% !important;}
}
`;

export default EWasteBlog;
