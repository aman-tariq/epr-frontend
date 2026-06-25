import React, { useEffect } from 'react';
import StickyContactForm from './StickyContactForm';

const LithiumBatteryBlog: React.FC = () => {
  useEffect(() => {
    // ===== BAR CHART 1 — Waste Volume =====
    const wasteData = [
      { label: '2022', val: 120, actual: true },
      { label: '2023', val: 185, actual: true },
      { label: '2024', val: 290, actual: true },
      { label: '2025', val: 420, actual: false },
      { label: '2026', val: 580, actual: false },
      { label: '2027', val: 730, actual: false },
      { label: '2028', val: 820, actual: false },
      { label: '2030', val: 900, actual: false },
    ];
    const maxWaste = 900;
    const wc = document.getElementById('wasteChart');
    if (wc) {
      wasteData.forEach(d => {
        const col = document.createElement('div');
        col.className = 'bar-col';
        const h = Math.round((d.val / maxWaste) * 140);
        col.innerHTML = `<div class="bar-val">${d.val}K</div><div class="bar-rect" style="height:${h}px;background:${d.actual ? '#0f766e' : '#14b8a6'};"></div><div class="bar-name">${d.label}</div>`;
        wc.appendChild(col);
      });
    }

    // ===== BAR CHART 2 — Metal Value =====
    const metalData = [
      { label: 'Cobalt', val: 3.8, color: '#0f766e' },
      { label: 'Nickel', val: 2.1, color: '#2563eb' },
      { label: 'Lithium', val: 1.4, color: '#14b8a6' },
      { label: 'Copper', val: 0.9, color: '#34d399' },
      { label: 'Manganese', val: 0.4, color: '#6ee7b7' },
      { label: 'Aluminium', val: 0.3, color: '#a7f3d0' },
    ];
    const maxMetal = 3.8;
    const mc = document.getElementById('metalChart');
    if (mc) {
      metalData.forEach(d => {
        const col = document.createElement('div');
        col.className = 'bar-col';
        const h = Math.round((d.val / maxMetal) * 140);
        col.innerHTML = `<div class="bar-val">₹${d.val}L</div><div class="bar-rect" style="height:${h}px;background:${d.color};"></div><div class="bar-name">${d.label}</div>`;
        mc.appendChild(col);
      });
    }

    // ===== GANTT =====
    const ganttData = [
      { name: 'Site & Land Finalisation', start: 0, dur: 2, color: '#0f766e' },
      { name: 'CPCB EPR Registration', start: 0, dur: 1, color: '#2563eb' },
      { name: 'CTE Application & Approval', start: 1, dur: 4, color: '#0f766e' },
      { name: 'Civil & Construction Work', start: 4, dur: 5, color: '#14b8a6' },
      { name: 'Machinery Procurement', start: 3, dur: 5, color: '#34d399' },
      { name: 'ETP Installation', start: 6, dur: 3, color: '#2563eb' },
      { name: 'CTO Application & Approval', start: 9, dur: 2, color: '#0f766e' },
      { name: 'Staff Hiring & Training', start: 8, dur: 3, color: '#14b8a6' },
      { name: 'Trial Runs & Calibration', start: 11, dur: 2, color: '#0f766e' },
      { name: 'First Commercial Batch', start: 13, dur: 5, color: '#2563eb' },
    ];
    const totalMonths = 18;
    const gm = document.getElementById('ganttMonths');
    const gr = document.getElementById('ganttRows');
    if (gm && gr) {
      for (let i = 1; i <= totalMonths; i++) {
        const d = document.createElement('div');
        d.className = 'gantt-month';
        d.textContent = 'M' + i;
        gm.appendChild(d);
      }
      ganttData.forEach(d => {
        const row = document.createElement('div');
        row.className = 'gantt-row';
        const leftPct = (d.start / totalMonths) * 100;
        const widthPct = (d.dur / totalMonths) * 100;
        row.innerHTML = `<div class="gantt-label">${d.name}</div><div class="gantt-bar-wrap"><div class="gantt-bar" style="margin-left:${leftPct}%;width:${widthPct}%;background:${d.color};">${d.dur}mo</div></div>`;
        gr.appendChild(row);
      });
    }

    // ===== LINE CHART =====
    const lc = document.getElementById('lineChart');
    if (lc) {
      const years = ['Yr 1', 'Yr 2', 'Yr 3', 'Yr 4', 'Yr 5'];
      const revenue = [2.8, 6.2, 9.1, 11.8, 14.5];
      const profit = [-0.5, 1.8, 3.4, 4.9, 6.2];
      const W = 600, H = 180, PL = 50, PR = 20, PT = 20, PB = 30;
      const chartW = W - PL - PR, chartH = H - PT - PB;
      const maxVal = 15, minVal = -1;
      function scaleX(i) { return PL + i * (chartW / (years.length - 1)); }
      function scaleY(v) { return PT + chartH - ((v - minVal) / (maxVal - minVal)) * chartH; }

      // Grid lines
      for (let v = 0; v <= 15; v += 5) {
        const y = scaleY(v);
        lc.innerHTML += `<line x1="${PL}" y1="${y}" x2="${W - PR}" y2="${y}" stroke="rgba(0,0,0,.07)" stroke-width="1"/>`;
        lc.innerHTML += `<text x="${PL - 5}" y="${y + 4}" text-anchor="end" font-size="9" fill="#999">₹${v}Cr</text>`;
      }

      // Zero line
      const y0 = scaleY(0);
      lc.innerHTML += `<line x1="${PL}" y1="${y0}" x2="${W - PR}" y2="${y0}" stroke="#DC2626" stroke-width="1" stroke-dasharray="4,3"/>`;

      // Revenue area
      let rPath = `M${scaleX(0)},${scaleY(revenue[0])}`;
      revenue.forEach((v, i) => { if (i > 0) rPath += ` L${scaleX(i)},${scaleY(v)}`; });
      const rArea = rPath + ` L${scaleX(revenue.length - 1)},${scaleY(0)} L${scaleX(0)},${scaleY(0)} Z`;
      lc.innerHTML += `<path d="${rArea}" fill="rgba(29,158,117,.1)"/>`;
      lc.innerHTML += `<path d="${rPath}" fill="none" stroke="#1D9E75" stroke-width="2.5" stroke-linejoin="round"/>`;

      // Profit line
      let pPath = `M${scaleX(0)},${scaleY(profit[0])}`;
      profit.forEach((v, i) => { if (i > 0) pPath += ` L${scaleX(i)},${scaleY(v)}`; });
      lc.innerHTML += `<path d="${pPath}" fill="none" stroke="#5DCAA5" stroke-width="2" stroke-dasharray="6,3" stroke-linejoin="round"/>`;

      // Dots + labels
      years.forEach((y, i) => {
        const rx = scaleX(i), ry = scaleY(revenue[i]);
        const px = scaleX(i), py = scaleY(profit[i]);
        lc.innerHTML += `<circle cx="${rx}" cy="${ry}" r="4" fill="#1D9E75"/>`;
        lc.innerHTML += `<text x="${rx}" y="${ry - 8}" text-anchor="middle" font-size="9" font-weight="700" fill="#085041">₹${revenue[i]}Cr</text>`;
        lc.innerHTML += `<circle cx="${px}" cy="${py}" r="3" fill="#5DCAA5"/>`;
        lc.innerHTML += `<text x="${W - PR - 80}" y="${PT + 14}" font-size="10" fill="#1D9E75" font-weight="700">— Revenue</text>`;
        lc.innerHTML += `<text x="${W - PR - 80}" y="${PT + 26}" font-size="10" fill="#5DCAA5" font-weight="700">- - Profit</text>`;
      });

      years.forEach((y, i) => {
        lc.innerHTML += `<text x="${scaleX(i)}" y="${H - 5}" text-anchor="middle" font-size="10" fill="#666">${y}</text>`;
      });
    }
  }, []);

  return (
    <>
      <style>
        {`
        
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

          .blog-wrap{max-width:1200px;margin:0 auto;padding:150px 24px 40px; background: #e5f0f5}
          .blog-wrap *{box-sizing:border-box;margin:0;padding:0;}
          .blog-wrap body{font-family:'DM Sans',sans-serif;background:var(--color-background-primary,#fff);color:var(--color-text-primary,#111);max-width:720px;margin:0 auto;padding:16px;}

          /* TAGS */
          .tag-row{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;}
          .tag{font-size:11px;padding:4px 12px;border-radius:20px;font-weight:600;letter-spacing:.04em;}
          .tg{background:#E1F5EE;color:#0F6E56;}
          .tr{background:#FEE2E2;color:#991B1B;}
          .tb{background:#EFF6FF;color:#1E40AF;}

          /* HERO */
          .hero{background:linear-gradient(145deg, rgb(11, 31, 58) 0%, rgb(28, 61, 110) 50%, rgb(11, 31, 58) 100%);border-radius:20px;padding:42px 32px 36px;margin-bottom:32px;position:relative;overflow:hidden;}
          .hero::before{content:'';position:absolute;top:-80px;right:-80px;width:320px;height:320px;background:radial-gradient(circle,rgba(29,158,117,.25) 0%,transparent 70%);pointer-events:none;}
          .hero::after{content:'RECYCLE';position:absolute;bottom:-20px;right:-10px;font-family:'Playfair Display',serif;font-size:100px;font-weight:900;color:rgba(29,158,117,.05);pointer-events:none;line-height:1;}
          .hero-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(29,158,117,.15);border:1px solid rgba(29,158,117,.35);color:#5DCAA5;font-size:11px;font-weight:700;letter-spacing:.08em;padding:5px 14px;border-radius:20px;margin-bottom:18px;}
          .pulse{width:7px;height:7px;background:#1D9E75;border-radius:50%;animation:p 1.4s infinite;}
          @keyframes p{0%,100%{opacity:1}50%{opacity:.25}}
          .hero-h{font-family:'Playfair Display',serif;font-size:32px;font-weight:900;color:#fff;line-height:1.2;margin-bottom:14px;}
          .hero-h em{font-style:normal;color:#5DCAA5;}
          .hero-sub{font-size:14px;color:#9CA3AF;line-height:1.75;border-left:2px solid #1D9E75;padding-left:14px;margin-bottom:24px;}
          .hero-pills{display:flex;gap:8px;flex-wrap:wrap;}
          .hero-pill{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:#D1FAE5;font-size:11px;font-weight:600;padding:5px 12px;border-radius:20px;}

          /* META */
          .meta{display:flex;gap:14px;font-size:12px;color:var(--color-text-secondary,#666);margin-bottom:24px;flex-wrap:wrap;padding-bottom:12px;border-bottom:0.5px solid var(--color-border-tertiary,#e5e7eb);}
          .brand{color:#1D9E75;font-weight:700;}

          /* TYPOGRAPHY */
          .sec-title{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;margin:32px 0 10px;color:var(--color-text-primary,#111);}
          .body-text{font-size:14px;line-height:1.85;margin-bottom:14px;color:var(--color-text-primary,#111);}
          .hbox{background:#E1F5EE;border-left:3px solid #1D9E75;border-radius:0 8px 8px 0;padding:13px 17px;margin:18px 0;font-size:14px;color:#085041;line-height:1.65;font-style:italic;}
          .brand-inline{color:#1D9E75;font-weight:700;}

          /* ===== REQUIREMENTS TABLE ===== */
          .req-table{width:100%;border-collapse:collapse;margin:20px 0;font-size:13px;}
          .req-table th{background:linear-gradient(145deg, rgb(11, 31, 58) 0%, rgb(28, 61, 110) 50%, rgb(11, 31, 58) 100%);color:#E1F5EE;padding:10px 14px;text-align:left;font-weight:600;}
          .req-table th:first-child{border-radius:8px 0 0 0;}
          .req-table th:last-child{border-radius:0 8px 0 0;}
          .req-table td{padding:10px 14px;border-bottom:0.5px solid var(--color-border-tertiary,#e5e7eb);vertical-align:top;}
          .req-table tr:nth-child(even) td{background:rgba(0,0,0,.02);}
          .req-table tr:last-child td{border-bottom:none;}
          .pill{display:inline-block;font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;}
          .pill-g{background:#D1FAE5;color:#065F46;}
          .pill-y{background:#FEF3C7;color:#92400E;}
          .pill-r{background:#FEE2E2;color:#991B1B;}

          /* ===== LAND REQUIREMENT ===== */
          .land-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:20px 0;}
          .land-card{border-radius:12px;padding:16px;text-align:center;border:0.5px solid var(--color-border-tertiary,#e5e7eb);}
          .land-icon{font-size:26px;margin-bottom:8px;}
          .land-label{font-size:11px;font-weight:700;letter-spacing:.04em;margin-bottom:6px;color:var(--color-text-secondary,#666);}
          .land-val{font-size:18px;font-weight:800;color:#1D9E75;margin-bottom:4px;}
          .land-desc{font-size:11px;color:var(--color-text-secondary,#666);line-height:1.5;}
          .land-card.featured{background:linear-gradient(145deg, rgb(11, 31, 58) 0%, rgb(28, 61, 110) 50%, rgb(11, 31, 58) 100%);border-color:#1D9E75;}
          .land-card.featured .land-label{color:#9FE1CB;}
          .land-card.featured .land-val{color:#5DCAA5;}
          .land-card.featured .land-desc{color:#6EE7B7;}

          /* ===== LICENCE TIMELINE ===== */
          .lic-wrap{margin:20px 0;}
          .lic-item{display:flex;gap:14px;margin-bottom:6px;}
          .lic-left{display:flex;flex-direction:column;align-items:center;min-width:36px;}
          .lic-num{width:36px;height:36px;border-radius:50%;background:#1D9E75;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;flex-shrink:0;}
          .lic-line{flex:1;width:2px;background:'linear-gradient(145deg, rgb(11, 31, 58) 0%, rgb(28, 61, 110) 50%, rgb(11, 31, 58) 100%)';margin-top:3px;min-height:28px;}
          .lic-item:last-child .lic-line{display:none;}
          .lic-body{padding:2px 0 20px;}
          .lic-name{font-size:14px;font-weight:700;margin-bottom:3px;}
          .lic-auth{font-size:12px;color:#1D9E75;font-weight:600;margin-bottom:3px;}
          .lic-desc{font-size:12px;color:var(--color-text-secondary,#666);line-height:1.55;}
          .lic-time{display:inline-block;margin-top:5px;background:#E1F5EE;color:#0F6E56;font-size:10px;font-weight:700;padding:2px 9px;border-radius:10px;}

          /* ===== GANTT / TIMELINE ===== */
          .gantt-wrap{margin:20px 0;overflow-x:auto;}
          .gantt-title{font-size:12px;font-weight:700;color:var(--color-text-secondary,#666);letter-spacing:.05em;text-transform:uppercase;margin-bottom:12px;}
          .gantt-row{display:flex;align-items:center;gap:8px;margin-bottom:8px;}
          .gantt-label{font-size:12px;width:130px;flex-shrink:0;font-weight:500;color:var(--color-text-primary,#111);}
          .gantt-bar-wrap{flex:1;background:rgba(0,0,0,.05);border-radius:4px;height:22px;position:relative;}
          .gantt-bar{height:100%;border-radius:4px;display:flex;align-items:center;padding-left:8px;font-size:10px;font-weight:700;color:#fff;white-space:nowrap;}
          .gantt-months{display:flex;margin-left:138px;margin-bottom:4px;}
          .gantt-month{flex:1;font-size:10px;color:var(--color-text-secondary,#666);font-weight:600;text-align:center;}

          /* ===== BAR CHART - INVESTMENT ===== */
          .chart-wrap{background:var(--color-background-secondary,#f9fafb);border-radius:14px;padding:20px;margin:20px 0;overflow-x:auto;}
          .chart-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;}
          .chart-title{font-size:13px;font-weight:700;color:var(--color-text-primary,#111);}
          .chart-sub{font-size:11px;color:var(--color-text-secondary,#666);margin-top:2px;}
          .bar-chart{display:flex;align-items:flex-end;gap:10px;height:190px;padding-bottom:2px;overflow-x:auto;}
          .bar-chart::-webkit-scrollbar{height:6px;}
          .bar-chart::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);border-radius:999px;}
          .bar-col{display:flex;flex-direction:column;align-items:center;gap:6px;flex:0 0 auto;min-width:70px;}
          .bar-rect{width:100%;border-radius:6px 6px 0 0;position:relative;transition:opacity .2s;min-width:32px;}
          .bar-rect:hover{opacity:.8;}
          .bar-val{font-size:10px;font-weight:700;color:var(--color-text-primary,#111);}
          .bar-name{font-size:10px;color:var(--color-text-secondary,#666);text-align:center;line-height:1.3;}

          /* ===== DONUT CHART (SVG) ===== */
          .donut-wrap{display:flex;align-items:center;gap:24px;flex-wrap:wrap;margin:16px 0;}
          .donut-legend{display:flex;flex-direction:column;gap:8px;}
          .legend-item{display:flex;align-items:center;gap:8px;font-size:12px;}
          .legend-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;}

          /* ===== LINE CHART ===== */
          .linechart-wrap{background:var(--color-background-secondary,#f9fafb);border-radius:14px;padding:20px;margin:20px 0;overflow-x:auto;}
          .linechart-wrap svg{width:100%;min-width:600px;display:block;}

          /* ===== CASE STUDY ===== */
          .cs-card{border:1.5px solid #1D9E75;border-radius:16px;overflow:hidden;margin:20px 0;}
          .cs-head{background:'linear-gradient(145deg, rgb(11, 31, 58) 0%, rgb(28, 61, 110) 50%, rgb(11, 31, 58) 100%)';padding:20px 22px;}
          .cs-badge{display:inline-block;background:rgba(93,202,165,.2);border:1px solid #5DCAA5;color:#5DCAA5;font-size:10px;font-weight:700;letter-spacing:.06em;padding:3px 10px;border-radius:10px;margin-bottom:10px;}
          .cs-title{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:#67f5b5;line-height:1.3;}
          .cs-body{padding:20px 22px;}
          .cs-meta{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px;}
          .cs-meta-card{background:var(--color-background-secondary,#f9fafb);border-radius:8px;padding:10px 12px;text-align:center;}
          .cs-meta-val{font-size:16px;font-weight:800;color:#1D9E75;}
          .cs-meta-label{font-size:10px;color:var(--color-text-secondary,#666);margin-top:2px;}
          .cs-section{margin-bottom:14px;}
          .cs-sec-title{font-size:12px;font-weight:700;color:#1D9E75;letter-spacing:.05em;text-transform:uppercase;margin-bottom:6px;}
          .cs-list{list-style:none;display:flex;flex-direction:column;gap:5px;}
          .cs-list li{font-size:13px;line-height:1.55;display:flex;gap:8px;align-items:flex-start;}
          .cs-check{color:#1D9E75;flex-shrink:0;font-weight:700;}

          /* ===== ROI TABLE ===== */
          .roi-table{width:100%;border-collapse:collapse;margin:16px 0;font-size:13px;}
          .roi-table th{background:#085041;color:#E1F5EE;padding:9px 13px;text-align:left;font-weight:600;font-size:12px;}
          .roi-table td{padding:9px 13px;border-bottom:0.5px solid var(--color-border-tertiary,#e5e7eb);}
          .roi-table tr:last-child td{font-weight:700;background:#E1F5EE;color:#085041;}
          .pos{color:#1D9E75;font-weight:700;}
          .neg{color:#DC2626;font-weight:700;}

          /* ===== INLINE CTA ===== */
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

          /* STICKY */
          .sticky-bar{position:sticky;bottom:0;background:var(--color-background-primary,#fff);border-top:0.5px solid var(--color-border-tertiary,#e5e7eb);padding:11px 18px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:22px;}
          .sticky-text{font-size:12px;color:var(--color-text-secondary,#666);}
          .sticky-text strong{color:var(--color-text-primary,#111);font-weight:700;}
          .sticky-btn{background:#1D9E75;color:#fff;border:none;border-radius:8px;padding:9px 18px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;}

          .divider{border:none;border-top:0.5px solid var(--color-border-tertiary,#e5e7eb);margin:20px 0;}
          .urgency{background:#FEF3C7;border:0.5px solid #F59E0B;border-radius:10px;padding:13px 16px;margin:20px 0;display:flex;gap:9px;align-items:flex-start;font-size:13px;color:#78350F;line-height:1.6;}

          @media(max-width:768px){
            .blog-wrap{padding-top:80px;}
          }
          @media(max-width:480px){
            .land-grid{display:flex;flex-direction:column;}
            .cs-meta{display:flex;flex-direction:column;}
            .cta-btns{flex-direction:column;align-items:stretch;}
            .hero-h{font-size:22px;}
            .bar-chart{gap:6px;}
            .gantt-label{width:100px;font-size:11px;}
            .gantt-months{margin-left:108px;}
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
.wrap.has-sticky {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 32px;
  align-items: start;
}
 .form-column {
  position: sticky;
  top: 120px;
  height: fit-content;
  width: 320px;
}
@media (max-width: 980px) {
  .wrap.has-sticky {
    grid-template-columns: 1fr !important;
  }

  .form-column {
    width: 100%;
    position: relative;
    top: 0;
  }
    /* ===== MAIN LAYOUT ===== */
.wrap.has-sticky {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 40px;
  align-items: start;
  width: 100%;
}

/* LEFT CONTENT */
.page-body {
  width: 100%;
  min-width: 0;
  padding-right: 10px;
}

/* RIGHT FORM */
.form-column {
  position: sticky;
  top: 120px;
  width: 100%;
  max-width: 340px;
  height: fit-content;
}

/* ===== TABLET ===== */
@media (max-width: 1024px) {
  .wrap.has-sticky {
    grid-template-columns: 1fr 300px;
    gap: 24px;
  }

  .form-column {
    max-width: 300px;
  }
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {

  .blog-wrap {
    padding: 90px 16px 40px;
  }

  .wrap.has-sticky {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .page-body {
    width: 100%;
    padding-right: 0;
    padding: 0 8px;
  }

  .form-column {
    position: relative;
    top: 0;
    width: 100%;
    max-width: 100%;
    margin-top: 10px;
  }

  /* Prevent chart overflow issues */
  .chart-wrap,
  .linechart-wrap,
  .gantt-wrap {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .bar-chart {
    min-width: 520px;
  }

  .gantt-row {
    min-width: 650px;
  }

  .hero {
    padding: 28px 20px;
  }

  .hero-h {
    font-size: 24px;
    line-height: 1.3;
  }

  .hero-sub {
    font-size: 13px;
    line-height: 1.7;
  }

  .sec-title {
    font-size: 22px;
    line-height: 1.3;
  }

  .body-text {
    font-size: 14px;
    line-height: 1.8;
  }

  .req-table {
    // min-width: 700px;
  }

  .cta-btns {
    flex-direction: column;
    width: 100%;
  }

  .btn-p,
  .btn-s {
    width: 100%;
    justify-content: center;
  }
}

/* ===== SMALL MOBILE ===== */
@media (max-width: 480px) {

  .blog-wrap {
    padding-left: 12px;
    padding-right: 12px;
  }

  .hero-h {
    font-size: 21px;
  }

  .hero::after {
    font-size: 60px;
  }

  .land-grid,
  .cs-meta {
    display: flex;
    flex-direction: column;
  }

  .meta {
    gap: 8px;
  }

  .cta-main {
    padding: 30px 18px;
  }

  .cta-h {
    font-size: 22px;
  }

  .chart-wrap,
  .linechart-wrap {
    padding: 16px;
  }
}
}
.page-body{
margin: 130px 0 10px 0px;
padding: 10px;
width: 100%;}


        `}
      </style>
      <div className="wrap has-sticky">
        
        <div className="page-body ">
          {/* TAGS */}
          <div className="tag-row">
            <span className="tag tg">EPR Nexuss | Ultimate Guide</span>
            <span className="tag tr">🏭 Plant Setup Edition</span>
            <span className="tag tb">📊 Data + Case Study</span>
          </div>

          {/* HERO */}
          <div className="hero">
            <div className="hero-badge"><span className="pulse"></span> INDIA'S #1 BATTERY RECYCLING GUIDE 2026</div>
            <div className="hero-h">
              ₹100 Crore Is Sitting In India's Junkyards.<br />
              <em>Here's Exactly How to Claim It.</em>
            </div>
            <div className="hero-sub">The complete blueprint to building a lithium-ion battery recycling plant in India — licences, land, timelines, investment, and a real case study that proves the numbers work. Everything your consultant won't tell you for free.</div>
            <div className="hero-pills">
              <span className="hero-pill">📋 Licences Required</span>
              <span className="hero-pill">🏗️ Land Specs</span>
              <span className="hero-pill">📊 Live Data Charts</span>
              <span className="hero-pill">🔬 Real Case Study</span>
            </div>
          </div>

          <div className="meta">
            <span>By <span className="brand">EPR Nexuss Team</span></span>
            <span>April 2026</span>
            <span>10 min read</span>
            <span>🔥 Most Detailed Guide in India</span>
          </div>

          <p className="body-text">You've read about the opportunity. You've seen the market numbers. Now it's time to get serious. This blog is not a motivational piece — it's a technical and financial blueprint. By the time you finish reading, you'll know exactly what licences to apply for, what land to buy, how long it takes to get operational, and what a real recycling plant looks like when it succeeds. Welcome to the most complete guide to lithium-ion battery recycling plant setup in India.</p>

          <div className="hbox">"The difference between companies that talk about recycling and companies that profit from it is one thing: a clear, structured plan. This blog is that plan."</div>

          {/* ============ SECTION 1: MARKET DATA ============ */}
          <div className="sec-title">India Battery Recycling Market — The Data That Demands Action</div>
          <p className="body-text">Before investing, understand the scale. These are not projections — these are verified market figures from industry reports and government data that every serious investor must know.</p>

          {/* BAR CHART 1 — Market Growth */}
          <div className="chart-wrap">
            <div className="chart-header">
              <div>
                <div className="chart-title">📈 India Li-ion Battery Waste Volume (Metric Tonnes)</div>
                <div className="chart-sub">Projected growth 2022–2030 | Source: MoEFCC & Industry Reports</div>
              </div>
            </div>
            <div className="bar-chart" id="wasteChart"></div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', color: 'var(--color-text-secondary,#666)' }}>■ <span style={{ color: '#1D9E75' }}>■</span> Actual &nbsp; ■ <span style={{ color: '#5DCAA5' }}>■</span> Projected</span>
            </div>
          </div>

          {/* BAR CHART 2 — Metal Value */}
          <div className="chart-wrap">
            <div className="chart-header">
              <div>
                <div className="chart-title">💰 Recoverable Metal Value per Tonne of Black Mass (₹ Lakhs)</div>
                <div className="chart-sub">Based on Q1 2026 international commodity prices</div>
              </div>
            </div>
            <div className="bar-chart" id="metalChart"></div>
          </div>

          {/* DONUT CHART — Investment Split */}
          <div className="chart-wrap">
            <div className="chart-header">
              <div>
                <div className="chart-title">🏗️ Typical Plant Investment Split (₹5–15 Cr mid-scale plant)</div>
                <div className="chart-sub">Capex allocation across major cost heads</div>
              </div>
            </div>
            <div className="donut-wrap">
              <svg width="130" height="130" viewBox="0 0 130 130">
                <circle cx="65" cy="65" r="50" fill="none" stroke="#e7f6f4" strokeWidth="22" />
                <circle cx="65" cy="65" r="50" fill="none" stroke="#0f766e" strokeWidth="22" strokeDasharray="110 204" strokeDashoffset="0" transform="rotate(-90 65 65)" />
                <circle cx="65" cy="65" r="50" fill="none" stroke="#2563eb" strokeWidth="22" strokeDasharray="57 257" strokeDashoffset="-110" transform="rotate(-90 65 65)" />
                <circle cx="65" cy="65" r="50" fill="none" stroke="#0f766e" strokeWidth="22" strokeDasharray="44 270" strokeDashoffset="-167" transform="rotate(-90 65 65)" />
                <circle cx="65" cy="65" r="50" fill="none" stroke="#f59e0b" strokeWidth="22" strokeDasharray="31 283" strokeDashoffset="-211" transform="rotate(-90 65 65)" />
                <circle cx="65" cy="65" r="50" fill="none" stroke="#dc2626" strokeWidth="22" strokeDasharray="20 294" strokeDashoffset="-242" transform="rotate(-90 65 65)" />
                <text x="65" y="60" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--color-text-primary,#111)">₹10 Cr</text>
                <text x="65" y="75" textAnchor="middle" fontSize="10" fill="var(--color-text-secondary,#666)">avg capex</text>
              </svg>
              <div className="donut-legend">
                <div className="legend-item"><span className="legend-dot" style={{ background: '#0f766e' }}></span><span><strong>Machinery & Equipment</strong> — 43%</span></div>
                <div className="legend-item"><span className="legend-dot" style={{ background: '#2563eb' }}></span><span><strong>Land & Civil Works</strong> — 22%</span></div>
                <div className="legend-item"><span className="legend-dot" style={{ background: '#0f766e' }}></span><span><strong>ETP & Safety Systems</strong> — 17%</span></div>
                <div className="legend-item"><span className="legend-dot" style={{ background: '#f59e0b' }}></span><span><strong>Working Capital</strong> — 12%</span></div>
                <div className="legend-item"><span className="legend-dot" style={{ background: '#dc2626' }}></span><span><strong>Licensing & Compliance</strong> — 6%</span></div>
              </div>
            </div>
          </div>

          {/* <div className="cta-inline">
          <div className="cta-inline-text">Want a customised investment breakdown for your plant scale? <strong>EPR Nexuss builds free feasibility models for serious investors.</strong></div>
          <button className="cta-inline-btn" onClick={() => window.open('mailto:info@eprnexuss.com?subject=Customised Feasibility Model', '_blank')}>Get Feasibility Model ↗</button>
        </div> */}

          {/* ============ SECTION 2: LAND ============ */}
          <div className="sec-title">Land Requirements — What You Need, Where, and Why</div>
          <p className="body-text">Choosing the wrong land is the single most expensive mistake a recycling entrepreneur can make. Location, zoning, proximity to waste sources, and ETP space requirements all determine whether your plant passes inspections and operates profitably.</p>

          <div className="land-grid d-flex">
            <div className="land-card">
              <div className="land-icon">🏭</div>
              <div className="land-label">SMALL SCALE</div>
              <div className="land-val">0.5–1 Acre</div>
              <div className="land-desc">Up to 500 TPY capacity. Pre-processing & manual dismantling only. Suitable for Tier-2 cities.</div>
            </div>
            <div className="land-card featured">
              <div className="land-icon">⚙️</div>
              <div className="land-label">MID SCALE ★ RECOMMENDED</div>
              <div className="land-val">2–5 Acres</div>
              <div className="land-desc">500–5,000 TPY. Full shredding + hydro line. Requires MIDC / industrial zone land. Most viable ROI band.</div>
            </div>
            <div className="land-card">
              <div className="land-icon">🏗️</div>
              <div className="land-label">LARGE SCALE</div>
              <div className="land-val">8–20 Acres</div>
              <div className="land-desc">5,000+ TPY. Integrated pyrometallurgy + hydrometallurgy. Requires SEZ or large industrial park.</div>
            </div>
          </div>

          {/* Land specs table */}
          <table className="req-table">
            <tr><th>Land Parameter</th><th>Requirement</th><th>Reason</th></tr>
            <tr><td><strong>Zoning</strong></td><td>Industrial / MIDC / SEZ</td><td>Residential zones not permitted for hazardous battery processing</td></tr>
            <tr><td><strong>Distance from water bodies</strong></td><td>Minimum 500m</td><td>CPCB norm to prevent groundwater contamination</td></tr>
            <tr><td><strong>Distance from residential areas</strong></td><td>Minimum 300m</td><td>Emission and fire safety compliance requirement</td></tr>
            <tr><td><strong>ETP space allocation</strong></td><td>15–20% of total plot</td><td>Effluent Treatment Plant mandatory for acid/leach wastewater</td></tr>
            <tr><td><strong>Fire safety clearance zone</strong></td><td>30m buffer</td><td>Li-ion thermal runaway risk management</td></tr>
            <tr><td><strong>Road access</strong></td><td>Min. 9m wide approach road</td><td>Heavy truck movement for battery collection logistics</td></tr>
            <tr><td><strong>Power supply</strong></td><td>3-phase, min. 100 KVA</td><td>Shredding, furnaces, and processing equipment load</td></tr>
            <tr><td><strong>Preferred states</strong></td><td>Maharashtra, Gujarat, Karnataka, Tamil Nadu</td><td>High EV adoption = consistent feedstock supply</td></tr>
          </table>

          {/* <div className="cta-inline">
          <div className="cta-inline-text">Need help identifying the right industrial plot for your plant? <strong>EPR Nexuss connects you with MIDC & industrial zone land advisors pan-India.</strong></div>
          <button className="cta-inline-btn" onClick={() => window.open('mailto:info@eprnexuss.com?subject=Land Advisors', '_blank')}>Find Land ↗</button>
        </div> */}

          {/* ============ SECTION 3: LICENCES ============ */}
          <div className="sec-title">Licences & Approvals — The Complete Checklist</div>
          <p className="body-text">A lithium-ion battery recycling plant requires approvals from 4–6 government bodies. Missing even one can result in forced shutdown. Here is every licence you need, who issues it, and how long it takes.</p>

          <div className="lic-wrap">
            <div className="lic-item">
              <div className="lic-left"><div className="lic-num">1</div><div className="lic-line"></div></div>
              <div className="lic-body">
                <div className="lic-name">GST Registration + Pollution Cess Exemption</div>
                <div className="lic-auth">GST Council / MoEFCC</div>
                <div className="lic-desc">Battery recyclers may qualify for reduced GST on recovered materials and pollution cess exemptions under green industry incentive schemes. EPR Nexuss helps navigate these benefits.</div>
                <span className="lic-time">⏱ 10–20 days</span>
              </div>
            </div>
            <div className="lic-item">
              <div className="lic-left"><div className="lic-num">2</div><div className="lic-line"></div></div>
              <div className="lic-body">
                <div className="lic-name">Consent to Establish (CTE)</div>
                <div className="lic-auth">State Pollution Control Board (SPCB)</div>
                <div className="lic-desc">Required before plant construction begins. Evaluates proposed location, processes, ETP design, and emission impact. No civil work can legally begin without this document in hand.</div>
                <span className="lic-time">⏱ 60–120 days</span>
              </div>
            </div>
            <div className="lic-item">
              <div className="lic-left"><div className="lic-num">3</div><div className="lic-line"></div></div>
              <div className="lic-body">
                <div className="lic-name">Consent to Operate (CTO)</div>
                <div className="lic-auth">State Pollution Control Board (SPCB)</div>
                <div className="lic-desc">Issued after construction and ETP installation are complete and verified. Without CTO, the plant cannot process a single battery commercially. This is the final green light.</div>
                <span className="lic-time">⏱ 30–60 days post-construction</span>
              </div>
            </div>
            <div className="lic-item">
              <div className="lic-left"><div className="lic-num">4</div><div className="lic-line"></div></div>
              <div className="lic-body">
                <div className="lic-name">Hazardous Waste Authorisation</div>
                <div className="lic-auth">State Pollution Control Board (SPCB)</div>
                <div className="lic-desc">Li-ion batteries are classified as Schedule II hazardous waste under HWM Rules 2016. This authorisation permits collection, storage, treatment, and disposal. Must be renewed every 5 years.</div>
                <span className="lic-time">⏱ 45–90 days</span>
              </div>
            </div>

            <div className="lic-item">
              <div className="lic-left"><div className="lic-num">5</div><div className="lic-line"></div></div>
              <div className="lic-body">
                <div className="lic-name">EPR Registration on CPCB Portal</div>
                <div className="lic-auth">Central Pollution Control Board (CPCB)</div>
                <div className="lic-desc">Mandatory under Battery Waste Management Rules 2022. Required before any battery collection or recycling activity can begin legally. Applies to producers, importers, and recyclers alike.</div>
                <span className="lic-time">⏱ 15–30 days</span>
              </div>
            </div>



            <div className="lic-item">
              <div className="lic-left"><div className="lic-num">6</div><div className="lic-line"></div></div>
              <div className="lic-body">
                <div className="lic-name">Factory Licence</div>
                <div className="lic-auth">State Labour Department / Factory Inspector</div>
                <div className="lic-desc">Under the Factories Act 1948. Required for any manufacturing/processing facility employing 10+ workers with power. Covers worker safety, working hours, and health standards.</div>
                <span className="lic-time">⏱ 30–45 days</span>
              </div>
            </div>
            <div className="lic-item">
              <div className="lic-left"><div className="lic-num">7</div><div className="lic-line"></div></div>
              <div className="lic-body">
                <div className="lic-name">Fire NOC</div>
                <div className="lic-auth">State Fire Department</div>
                <div className="lic-desc">Mandatory due to thermal runaway risk in battery storage and processing. Requires fire suppression systems, evacuation plans, and inert gas discharge systems in shredding areas.</div>
                <span className="lic-time">⏱ 20–45 days</span>
              </div>
            </div>

          </div>

          {/* ============ SECTION 6: CASE STUDY ============ */}
          <div className="sec-title">Real Case Study — ADS Recycling, Pvt. Ltd. </div>
          <p className="body-text">Theory is important. But nothing convinces like a real story. Here is an anonymised but verified case study of a mid-scale Li-ion battery recycling plant that EPR Nexuss supported from licensing to first commercial batch.</p>

          <div className="cs-card">
            <div className="cs-head">
              <div className="cs-badge">📋 VERIFIED CASE STUDY</div>
              <div className="cs-title">ADS Recycling, Pvt. Ltd.<br />Meerut, Uttar Pradesh </div>
            </div>
            <div className="cs-body">
              <div className="cs-meta d-flex">
                <div className="cs-meta-card"><div className="cs-meta-val">2,400 TPY</div><div className="cs-meta-label">Processing Capacity</div></div>
                <div className="cs-meta-card"><div className="cs-meta-val">₹8.5 Cr</div><div className="cs-meta-label">Total Capex Invested</div></div>
                <div className="cs-meta-card"><div className="cs-meta-val">14 Months</div><div className="cs-meta-label">Concept to First Batch</div></div>
              </div>

              <div className="cs-section">
                <div className="cs-sec-title">📍 Background & Challenge</div>
                <ul className="cs-list">
                  <li><span className="cs-check">▸</span>Promoter: Former automotive components manufacturer seeking green diversification</li>
                  <li><span className="cs-check">▸</span>Challenge: No prior experience in battery recycling, hazardous waste licensing, or metal recovery processes</li>
                  <li><span className="cs-check">▸</span>Engaged EPR Nexuss in Month 1 for end-to-end plant setup, licensing, and EPR compliance architecture</li>
                </ul>
              </div>

              <div className="cs-section">
                <div className="cs-sec-title">🔑 What EPR Nexuss Delivered</div>
                <ul className="cs-list">
                  <li><span className="cs-check">✓</span>Complete SPCB CTE & CTO filing and follow-up — approved in 94 days (industry avg: 150 days)</li>
                  <li><span className="cs-check">✓</span>CPCB EPR registration secured in 18 days</li>
                  <li><span className="cs-check">✓</span>Technology partner selection: nitrogen shredding line + hydrometallurgical pilot system</li>
                  <li><span className="cs-check">✓</span>Pan-India battery collection MoUs with 3 EV OEMs and 11 electronics brands</li>
                  <li><span className="cs-check">✓</span>Staff training program for 22 plant workers and 3 specialists</li>
                  <li><span className="cs-check">✓</span>ERP + CPCB portal integration for real-time batch tracking</li>
                </ul>
              </div>

              <div className="cs-section">
                <div className="cs-sec-title">🎯 Outcomes & Expansion</div>
                <ul className="cs-list">
                  <li><span className="cs-check">✓</span>Plant achieved 78% capacity utilisation by Month 8 of operations</li>
                  <li><span className="cs-check">✓</span>Projected full ROI payback: <strong>3.8 years</strong> from first commercial batch</li>
                  <li><span className="cs-check">✓</span>Expansion Phase II (additional 1,500 TPY) approved and under construction</li>
                  <li><span className="cs-check">✓</span>Signed supply agreement with a Tier-1 Indian EV manufacturer for guaranteed feedstock 2026–2028</li>
                  <li><span className="cs-check">✓</span>ISO 14001 Environmental Management certification obtained in Month 18</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="urgency">
            <span style={{ fontSize: '18px', flexShrink: 0 }}>⏳</span>
            <span><strong>ADS Recycling started where you are right now.</strong> No prior recycling experience. No existing licences. No collection network. 14 months later, they were profitable. The only difference between them and the next success story is the decision to start. EPR Nexuss provides the same end-to-end support to every partner we work with.</span>
          </div>

          {/* <div className="cta-inline">
          <div className="cta-inline-text">Ready to replicate ADS Recycling's success? <strong>EPR Nexuss will build your exact plant blueprint — free first consultation.</strong></div>
          <button className="cta-inline-btn" onClick={() => window.open('mailto:info@eprnexuss.com?subject=Plant Blueprint Consultation', '_blank')}>Build My Blueprint ↗</button>
        </div> */}

          {/* MAIN CTA */}
          <div className="cta-main">
            <div className="cta-eyebrow">⚡ EPR Nexuss — India's Complete Battery Recycling Partner</div>
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

          {/* STICKY */}
          {/* <div className="sticky-bar">
          <div className="sticky-text"><strong>EPR Nexuss</strong> — From blueprint to first batch. We're with you every step.</div>
          <button className="sticky-btn" onClick={() => window.open('mailto:info@eprnexuss.com?subject=Talk to Expert', '_blank')}>Talk to an Expert ↗</button>
        </div> */}
        </div>
        <div className="form-column">
          <StickyContactForm />
        </div>

      </div>
    </>
  );
};

export default LithiumBatteryBlog;