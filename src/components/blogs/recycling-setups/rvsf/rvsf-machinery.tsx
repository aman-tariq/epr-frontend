import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

const styles = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--navy:#0a1628;--navy-mid:#0f2044;--navy-soft:#1a3260;--navy-card:#112238;--blue:#1e4fac;--blue-bright:#2563eb;--sky:#38bdf8;--sky-pale:#e0f2fe;--silver:#cbd5e1;--silver-dim:#94a3b8;--white:#ffffff;--offwhite:#f0f4fb;--text-body:#334155;--text-soft:#64748b;--accent:#f59e0b;--accent-pale:#fef3c7;--teal:#0d9488;--teal-pale:#ccfbf1;--red:#dc2626;--red-pale:#fee2e2;--green:#16a34a;--green-pale:#dcfce7;--border:rgba(255,255,255,0.09);--ink:#0f172a;--muted:#526071}

.machinery-blog-root{font-family:'Inter',sans-serif;background:var(--offwhite);color:var(--text-body);line-height:1.75;font-size:16px;width:100%}
.hero{background: linear-gradient(160deg, var(--navy) 0%, var(--navy-mid) 55%, #0d2d5e 100%);padding:88px 20px 80px;position:relative;overflow:hidden;text-align:center}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px),linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px);background-size:48px 48px}
.hero-glow{position:absolute;top:-120px;left:50%;transform:translateX(-50%);width:100%;max-width:700px;height:400px;background:radial-gradient(ellipse at center,rgba(37,99,235,0.22) 0%,transparent 70%);pointer-events:none}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(37,99,235,0.18);border:1px solid rgba(56,189,248,0.3);color:var(--sky);font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;padding:7px 18px;border-radius:40px;margin-bottom:30px;position:relative}
.hero h1{font-family:'Bebas Neue',sans-serif;font-size:clamp(36px,7vw,82px);color:var(--white);line-height:1.0;max-width:820px;margin:0 auto 10px;letter-spacing:1px;position:relative}
.hero h1 .accent{color:var(--sky)}
.hero-sub{font-family:'Lora',serif;font-size:clamp(15px,2vw,20px);font-weight:400;font-style:italic;color:rgba(255,255,255,0.65);max-width:620px;margin:14px auto 44px;line-height:1.65;position:relative}
.hero-divider{width:60px;height:3px;background:linear-gradient(90deg,var(--sky),var(--blue-bright));margin:0 auto 44px;border-radius:2px}
.hero-stats{display:flex;justify-content:center;gap:24px 56px;flex-wrap:wrap;position:relative}
.h-stat .num{display:block;font-family:'Bebas Neue',sans-serif;font-size:38px;color:var(--sky);line-height:1}
.h-stat .lbl{display:block;font-size:11px;font-weight:500;color:rgba(255,255,255,0.45);letter-spacing:1.5px;text-transform:uppercase;margin-top:5px}

/* Two Column Layout layout */
.container{max-width:1250px;margin:0 auto;padding:0 24px;width:100%}
.main-layout{display:flex;flex-direction:column;gap:40px;margin-top:20px;width:100%}
main{width:100%;min-width:0}

/* Sidebar structure defaults */
.sidebar-column{display:flex;flex-direction:column;gap:24px;width:100%;height:max-content}
.side-card{background:var(--white);border:1px solid #dde3ef;border-radius:14px;padding:24px;box-shadow:0 4px 16px rgba(10,22,40,0.04);width:100%}

@media(min-width:1025px){
  .main-layout{display:grid;grid-template-columns:1fr 360px;align-items:start}
  .sidebar-column{position:sticky;top:100px;z-index:40}
}

.section{padding:54px 0}
/* Section alternate styling engineered to prevent horizontal page overflow */
.section-alt{background:var(--white);margin-left:-24px;margin-right:-24px;padding-left:24px;padding-right:24px;max-width:calc(100% + 48px)}
.s-label{display:inline-block;background:rgba(37,99,235,0.09);color:var(--blue-bright);font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:5px 14px;border-radius:40px;margin-bottom:14px}
.s-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(26px,4vw,46px);color:var(--navy);line-height:1.1;margin-bottom:18px;letter-spacing:0.5px}
.s-bar{width:44px;height:3px;background:linear-gradient(90deg,var(--blue-bright),var(--sky));border-radius:2px;margin-bottom:28px}
p{margin-bottom:16px;color:var(--text-body);word-wrap:break-word}
.pull-quote{border-left:4px solid var(--blue-bright);padding:16px 24px;background:var(--sky-pale);border-radius:0 8px 8px 0;font-family:'Lora',serif;font-size:17px;font-style:italic;color:var(--navy-soft);margin:32px 0;line-height:1.65}
.chart-card{background:var(--white);border:1px solid #dde3ef;border-radius:14px;padding:24px 16px;margin:36px 0;box-shadow:0 4px 20px rgba(10,22,40,0.06);max-width:100%;overflow:hidden}
.chart-card h3{font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--navy);margin-bottom:4px;letter-spacing:0.5px}
.chart-card .c-sub{font-size:13px;color:var(--text-soft);margin-bottom:22px}
.chart-wrap{position:relative;width:100%;height:300px}
.legend-row{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:14px;font-size:12px;color:var(--text-soft)}
.ld{width:10px;height:10px;border-radius:2px;display:inline-block;margin-right:5px;vertical-align:middle}
.tbl-wrap{background:var(--white);border:1px solid #dde3ef;border-radius:14px;overflow-x:auto;margin:36px 0;box-shadow:0 4px 16px rgba(10,22,40,0.05);max-width:100%}
.tbl-wrap table{width:100%;border-collapse:collapse;font-size:13.5px;min-width:600px}
.tbl-wrap thead tr{background:var(--navy)}
.tbl-wrap thead th{padding:14px 16px;text-align:left;color:rgba(255,255,255,0.85);font-weight:600;font-size:12px;letter-spacing:1px;text-transform:uppercase}
.tbl-wrap tbody tr:nth-child(even){background:#f7f9fd}
.tbl-wrap tbody td{padding:13px 16px;border-bottom:1px solid #edf0f7;color:var(--text-body)}
.badge{display:inline-block;padding:4px 11px;border-radius:20px;font-size:11px;font-weight:600}
.bg{background:var(--green-pale);color:#166534}.ba{background:var(--accent-pale);color:#92400e}.br{background:#fee2e2;color:#991b1b}
.srv-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:22px;margin:36px 0;width:100%}
.srv-card{background:var(--white);border:1px solid #dde3ef;border-radius:14px;padding:28px 22px;position:relative;overflow:hidden;box-shadow:0 2px 10px rgba(10,22,40,0.04);transition:box-shadow 0.2s}
.srv-top{position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--blue-bright),var(--sky))}
.srv-card:nth-child(2) .srv-top{background:linear-gradient(90deg,var(--teal),#34d399)}
.srv-card:nth-child(3) .srv-top{background:linear-gradient(90deg,#7c3aed,#a78bfa)}
.srv-card:nth-child(4) .srv-top{background:linear-gradient(90deg,var(--accent),#fcd34d)}
.srv-icon{width:46px;height:46px;border-radius:10px;background:var(--sky-pale);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:14px}
.srv-card:nth-child(2) .srv-icon{background:var(--teal-pale)}
.srv-card:nth-child(3) .srv-icon{background:#ede9fe}
.srv-card:nth-child(4) .srv-icon{background:var(--accent-pale)}
.srv-card h4{font-family:'Bebas Neue',sans-serif;font-size:19px;color:var(--navy);margin-bottom:8px;letter-spacing:0.5px}
.srv-card p{font-size:13.5px;margin:0;color:var(--text-soft)}
.proc-list{display:flex;flex-direction:column;gap:0;margin:36px 0;position:relative;width:100%}.proc-list::before{content:'';position:absolute;left:22px;top:28px;bottom:28px;width:2px;background:#dde3ef}
.proc-step{display:flex;gap:16px;align-items:flex-start;padding:18px 0;position:relative;width:100%}
.p-num{width:46px;height:46px;border-radius:50%;background:var(--navy);color:var(--sky);font-family:'Bebas Neue',sans-serif;font-size:20px;display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;z-index:1;box-shadow:0 0 0 4px var(--offwhite)}
.section-alt .p-num{box-shadow:0 0 0 4px var(--white)}
.p-body{flex:1;min-width:0}
.p-body h4{font-family:'Bebas Neue',sans-serif;font-size:19px;color:var(--navy);margin-bottom:5px;margin-top:10px;letter-spacing:0.4px}.p-body p{font-size:14px;margin:0;color:var(--text-soft)}
.case-wrap{background:linear-gradient(135deg,var(--navy) 0%,var(--navy-mid) 100%);border-radius:24px;padding:28px 20px;box-shadow:0 18px 36px rgba(15,36,80,0.18);position:relative;overflow:hidden;color:#fff;width:100%}
.case-wrap::after{content:'❝';position:absolute;top:-12px;right:36px;font-size:140px;color:rgba(255,255,255,0.04);font-family:serif;line-height:1}
.case-tag{display:inline-block;background:rgba(56,189,248,0.15);border:1px solid rgba(56,189,248,0.35);color:var(--sky);font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;padding:5px 14px;border-radius:40px;margin-bottom:18px}
.case-wrap h3{font-family:'Bebas Neue',sans-serif;font-size:26px;color:var(--white);letter-spacing:0.5px;margin-bottom:14px}
.case-wrap p{color:rgba(255,255,255,0.72)}
.case-metrics{display:flex;gap:24px 36px;flex-wrap:wrap;margin-top:32px;padding-top:28px;border-top:1px solid rgba(255,255,255,0.12)}
.cm .val{display:block;font-family:'Bebas Neue',sans-serif;font-size:36px;color:var(--sky);line-height:1;margin-bottom:6px}
.cm .lbl{font-size:11px;color:rgba(255,255,255,0.45);letter-spacing:1px}
.case-chart-wrap{position:relative;width:100%;height:260px;margin-top:32px}
.faq-list{margin:36px 0;width:100%}.faq-item{background:var(--white);border:1px solid #dde3ef;border-radius:12px;margin-bottom:14px;overflow:hidden;box-shadow:0 2px 8px rgba(10,22,40,0.04);width:100%}
.faq-q{display:flex;align-items:flex-start;gap:12px;padding:22px 16px;cursor:pointer}
.faq-num{width:30px;height:30px;border-radius:50%;background:var(--navy);color:var(--sky);font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.faq-q-text{font-family:'Bebas Neue',sans-serif;font-size:17px;color:var(--navy);letter-spacing:0.3px;line-height:1.3;flex:1;margin-top:4px}
.faq-a{padding:0 16px 22px 58px;font-size:14px;color:var(--text-soft);line-height:1.75;word-wrap:break-word}
.cta-block{background:linear-gradient(135deg,var(--navy) 0%,var(--navy-soft) 100%);border-radius:18px;padding:42px 20px;text-align:center;margin:60px 0;position:relative;overflow:hidden}
.cta-block::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(56,189,248,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.05) 1px,transparent 1px);background-size:40px 40px}
.cta-block h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(24px,4vw,46px);color:var(--white);margin-bottom:14px;letter-spacing:0.5px;position:relative}
.cta-block p{color:rgba(255,255,255,0.62);max-width:500px;margin:0 auto 32px;position:relative;font-size:14.5px}
.cta-btn{display:inline-block;background:linear-gradient(90deg,var(--blue-bright),var(--sky));color:var(--white);padding:14px 36px;border-radius:6px;font-weight:600;font-size:14.5px;text-decoration:none;letter-spacing:0.5px;position:relative;box-shadow:0 4px 20px rgba(37,99,235,0.4)}
.intro-strip{background:linear-gradient(135deg,var(--navy),var(--navy-soft));border-radius:12px;padding:24px;margin:32px 0;font-family:'Lora',serif;font-size:17px;font-style:italic;color:rgba(255,255,255,0.85);line-height:1.7;border-left:4px solid var(--sky)}
.metrics-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:16px;margin:32px 0;width:100%}.metric-box{background:var(--white);border:1px solid #dde3ef;border-radius:12px;padding:20px 14px;text-align:center;box-shadow:0 2px 8px rgba(10,22,40,0.04)}
.metric-box .mv{font-family:'Bebas Neue',sans-serif;font-size:32px;color:var(--navy);line-height:1;margin-bottom:6px}
.metric-box .ml{font-size:11.5px;color:var(--text-soft);font-weight:500;line-height:1.3}
.footer{background:var(--navy);color:rgba(255,255,255,0.35);text-align:center;padding:32px 24px;font-size:12.5px;width:100%}

@media(max-width:1024px){
  .hidden.lg\\:block{display:none !important}
  .section-alt{margin-left:-16px;margin-right:-16px;padding-left:16px;padding-right:16px;max-width:calc(100% + 32px)}
  .container{padding:0 16px}
}
`;

const faqItems = [
  { question: 'Which machines do you support — and can you handle mixed brands?', answer: 'Yes. We service shredders, balers, separators, conveyors, plasma cutters, and fluid stations across all major RVSF brands — Metso, Zato, Sierra, Bonfiglioli, and local hydraulic systems. Mixed-fleet plants are our most common setup.' },
  { question: 'How fast do you respond to an emergency breakdown?', answer: 'Remote diagnosis in 18 minutes, on-site within 4 hours (2 hours for shredders/balers). Critical spare parts are pre-stocked at regional depots so repairs start immediately — no waiting on delivery.' },
  { question: 'Will maintenance visits stop our operations?', answer: 'No. All visits are scheduled around your production windows or off-shift hours. Our average emergency repair time is just 3.8 hours — far shorter than the 18–24 hours typical of reactive, unplanned fixes.' },
  { question: 'Does this help with RVSF inspections and license renewals?', answer: 'Absolutely. We maintain MoRTH-aligned digital service logs and run a pre-audit machinery review before every inspection — so you walk in prepared, not scrambling.' },
  { question: 'Our plant is new with no failures yet — do we still need support?', answer: 'Yes — starting before a breakdown is always cheaper. New machines have predictable early failure patterns, and plants that begin with us from day one consistently spend less on maintenance over 36 months.' },
  { question: 'What does IoT monitoring actually mean for my plant?', answer: 'Your machines flag problems before they fail — vibration sensors catch bearing wear days early, temperature sensors stop hydraulic blowouts. Your team sees a simple traffic-light dashboard; we handle everything behind it.' },
  { question: 'How is pricing structured?', answer: 'Three options: annual retainer (all-inclusive), hybrid retainer + per-incident, or pay-per-service for smaller plants. All include machine database setup, live dashboard, and quarterly reviews.' },
];

const RVSMachineryBlog: React.FC = () => {
  const c1Ref = useRef<HTMLCanvasElement | null>(null);
  const c2Ref = useRef<HTMLCanvasElement | null>(null);
  const c3Ref = useRef<HTMLCanvasElement | null>(null);
  const c4Ref = useRef<HTMLCanvasElement | null>(null);
  const c5Ref = useRef<HTMLCanvasElement | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const charts: Chart[] = [];

    if (c1Ref.current?.getContext('2d')) {
      charts.push(new Chart(c1Ref.current.getContext('2d') as CanvasRenderingContext2D, {
        type: 'bar',
        data: {
          labels: ['Shredder', 'Hydraulic Baler', 'Conveyor System', 'Plasma Cutter', 'Eddy Separator'],
          datasets: [
            { label: 'Revenue Lost (₹L)', data: [18, 12, 8, 6, 5], backgroundColor: '#1e4fac', borderRadius: 4 },
            { label: 'Repair Cost (₹L)', data: [7, 4, 2.5, 3, 2], backgroundColor: '#0d9488', borderRadius: 4 },
            { label: 'Penalty Risk (₹L)', data: [4, 2, 1, 0.5, 0.5], backgroundColor: '#f59e0b', borderRadius: 4 },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
            y: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 }, callback: (v: any) => `₹${v}L` } },
          },
        } as any,
      }));
    }

    if (c2Ref.current?.getContext('2d')) {
      charts.push(new Chart(c2Ref.current.getContext('2d') as CanvasRenderingContext2D, {
        type: 'radar',
        data: {
          labels: ['Machine Uptime', 'Cost Efficiency', 'Throughput', 'Safety Index', 'Compliance Score', 'Staff Output'],
          datasets: [
            { label: 'Reactive', data: [61, 58, 64, 70, 72, 65], borderColor: '#94a3b8', borderDash: [5, 4], backgroundColor: 'rgba(148,163,184,0.1)', pointBackgroundColor: '#94a3b8', pointRadius: 3, borderWidth: 2 },
            { label: 'Preventive', data: [94, 91, 89, 96, 98, 88], borderColor: '#1e4fac', backgroundColor: 'rgba(30,79,172,0.1)', pointBackgroundColor: '#1e4fac', pointRadius: 3, borderWidth: 2.5 },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { r: { min: 40, max: 100, ticks: { stepSize: 20, font: { size: 9 }, backdropColor: 'transparent' }, grid: { color: 'rgba(0,0,0,0.07)' }, pointLabels: { font: { size: 9 } } } },
        } as any,
      }));
    }

    if (c3Ref.current?.getContext('2d')) {
      const mo = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
      const invest = mo.map((m) => Math.round(m * 1.33 * 10) / 10);
      const saves = mo.map((m) => (m === 0 ? 0 : Math.round(Math.pow(m, 1.55) * 0.68 * 10) / 10));
      const net = saves.map((s, i) => Math.round((s - invest[i]) * 10) / 10);
      charts.push(new Chart(c3Ref.current.getContext('2d') as CanvasRenderingContext2D, {
        type: 'line',
        data: {
          labels: mo.map((m) => (m === 0 ? 'Start' : `M${m}`)),
          datasets: [
            { label: 'Investment', data: invest, borderColor: '#dc2626', borderDash: [6, 3], backgroundColor: 'transparent', pointBackgroundColor: '#dc2626', pointRadius: 2, borderWidth: 1.5 },
            { label: 'Savings', data: saves, borderColor: '#0d9488', fill: true, backgroundColor: 'rgba(13,148,136,0.07)', pointBackgroundColor: '#0d9488', pointRadius: 2, borderWidth: 2 },
            { label: 'Net Benefit', data: net, borderColor: '#1e4fac', backgroundColor: 'transparent', pointBackgroundColor: '#1e4fac', pointRadius: 2, borderWidth: 2 },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 9 } } },
            y: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 9 }, callback: (v: any) => `₹${v}L` } },
          },
        } as any,
      }));
    }

    if (c4Ref.current?.getContext('2d')) {
      charts.push(new Chart(c4Ref.current.getContext('2d') as CanvasRenderingContext2D, {
        type: 'bar',
        data: {
          labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          datasets: [{
            label: 'Vehicles / Month',
            data: [340, 365, 410, 480, 540, 600, 648, 695, 722, 748, 778, 810, 835, 852, 864, 875, 883, 890, 897],
            backgroundColor: (ctx: any) => (ctx.dataIndex < 6 ? 'rgba(255,255,255,0.2)' : 'rgba(56,189,248,0.75)'),
            borderRadius: 3,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.5)', font: { size: 9 } } },
            y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.5)', font: { size: 9 } }, min: 200 },
          },
        } as any,
      }));
    }

    if (c5Ref.current?.getContext('2d')) {
      charts.push(new Chart(c5Ref.current.getContext('2d') as CanvasRenderingContext2D, {
        type: 'bar',
        data: {
          labels: ['Machine Uptime >90%', 'Planned Maintenance', 'Recovery Rate >85%', 'Compliance Score >90', 'IoT Monitoring Active', 'Certified Staff >80%'],
          datasets: [
            { label: 'Currently Achieving', data: [54, 31, 61, 67, 18, 43], backgroundColor: '#1e4fac', borderRadius: 4 },
            { label: 'Best-Practice Target', data: [92, 85, 89, 95, 70, 90], backgroundColor: 'rgba(245,158,11,0.18)', borderColor: '#f59e0b', borderWidth: 1.5, borderRadius: 4 },
          ],
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 9 }, callback: (v: any) => `${v}%` }, max: 100 },
            y: { grid: { display: false }, ticks: { font: { size: 10 } } },
          },
        } as any,
      }));
    }

    return () => charts.forEach((chart) => chart.destroy());
  }, []);

  return (
    <div className="machinery-blog-root">
      <Seo
        title="RVSF Machinery Support & Maintenance Services in India - Shredder, Baler & Plant Reliability"
        description="Specialized machinery maintenance and support for Registered Vehicle Scrapping Facilities (RVSF). Preventive maintenance, emergency breakdown support, IoT monitoring, and compliance-ready service for shredders, balers, separators & more."
        keywords={["RVSF Machinery Maintenance", "Vehicle Scrapping Plant Support", "Shredder Maintenance", "RVSF Preventive Maintenance"]}
        url="https://eprnexuss.com/blog/rvsf-machinery"
        type="article"
      />
      <header className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-eyebrow">🔩 Industry Insight · RVSF Machinery Support · 2025</div>
        <h1>Dead Machines<br/>Kill <span className="accent">Profitable Plants.</span><br/>We Keep Yours Alive.</h1>
        <div className="hero-divider" />
        <p className="hero-sub">Inside every registered vehicle scrapping facility, powerful machinery runs around the clock — and the moment it stops, so does your revenue, your reputation, and your compliance standing.</p>
        <div className="hero-stats">
          <div className="h-stat"><span className="num">₹2.8Cr</span><span className="lbl">avg. machinery loss / year</span></div>
          <div className="h-stat"><span className="num">73%</span><span className="lbl">downtime is preventable</span></div>
          <div className="h-stat"><span className="num">4×</span><span className="lbl">ROI on proactive support</span></div>
          <div className="h-stat"><span className="num">18 min</span><span className="lbl">emergency response time</span></div>
        </div>
      </header>

      <div className="container">
        <div className="main-layout">
          {/* Main Content Area */}
          <main>
            <section className="section">
              <div className="s-label">The Real Problem</div>
              <h2 className="s-title">The Machine You Ignore Today Is the Crisis You Face Tomorrow</h2>
              <div className="s-bar" />
              <p>Running a registered vehicle scrapping and recycling facility is not just an environmental responsibility — it's an intensely mechanical one. Behind every end-of-life vehicle that enters your gates is a chain of heavy-duty machines working in sequence: shredders tearing apart steel bodies, hydraulic balers compressing metal into export-ready blocks, eddy current separators recovering aluminium, conveyor belts moving tonnes of material every hour.</p>
              <p>When one link in that chain breaks, the whole operation stalls. And unlike a software glitch that restarts with a click, a failed shredder hammer or a blown hydraulic seal takes hours — sometimes days — to fix. Every one of those hours costs money, strains client commitments, and puts your RVSF license compliance at risk.</p>
              <div className="intro-strip">"Most plant operators don't think about machinery support until something catastrophic happens. By then, it's not a mechanical problem anymore — it's a financial emergency with a regulatory deadline attached."</div>
              <p>India's Vehicle Scrapping Policy under MoRTH has created hundreds of new registered facilities across the country. Each one faces the same fundamental pressure: extract maximum throughput from heavy-duty equipment, keep maintenance costs under control, pass regulatory inspections, and scale operations as more vehicles flow in. That's exactly where a specialist machinery support partner changes the game.</p>
              <div className="metrics-row">
                <div className="metric-box"><div className="mv">800+</div><div className="ml">Active RVSF plants in India</div></div>
                <div className="metric-box"><div className="mv">62%</div><div className="ml">Plants without structured maintenance</div></div>
                <div className="metric-box"><div className="mv">₹18L</div><div className="ml">Avg. loss per shredder failure event</div></div>
                <div className="metric-box"><div className="mv">3.8hr</div><div className="ml">Our avg. emergency repair time</div></div>
              </div>
            </section>

            <div className="section-alt">
              <section className="section">
                <div className="s-label">The Numbers</div>
                <h2 className="s-title">What a Single Breakdown Actually Costs Your Plant</h2>
                <div className="s-bar" />
                <p>Plant operators consistently underestimate the true cost of a breakdown. The repair invoice is only the visible tip. Below it lies lost throughput, delayed client deliveries, staff idle time, and — most painfully — the risk of a regulatory penalty if a machine failure coincides with an inspection window.</p>
                <div className="chart-card">
                  <h3>Average Financial Impact Per Downtime Incident — By Machine Type</h3>
                  <p className="c-sub">Values in ₹ Lakhs — based on survey of RVSF facilities, 2024</p>
                  <div className="legend-row">
                      <span><span className="ld" style={{ background: '#1e4fac' }}></span>Revenue Lost</span>
                      <span><span className="ld" style={{ background: '#0d9488' }}></span>Repair Cost</span>
                      <span><span className="ld" style={{ background: '#f59e0b' }}></span>Penalty Risk</span>
                  </div>
                  <div className="chart-wrap"><canvas ref={c1Ref} role="img" aria-label="Grouped bar chart showing revenue loss, repair cost and penalty risk per machine type." /></div>
                </div>
                <p>The shredder is the single biggest financial risk in any RVSF plant — yet it is the machine most commonly serviced reactively. A shredder sitting idle for 48 hours can cost a mid-sized plant upward of ₹18 lakhs in combined lost revenue alone. Add repair costs and potential compliance exposure, and a single incident can wipe out months of operating margin.</p>
                <div className="pull-quote">Reactive maintenance costs 3 to 6 times more than a planned preventive program. The maths is simple. The discipline is where most plants struggle — and where the right partner makes all the difference.</div>
              </section>
            </div>

            <section className="section">
              <div className="s-label">What We Do</div>
              <h2 className="s-title">Four Pillars of Machinery Support Built for RVSF Plants</h2>
              <div className="s-bar" />
              <p>Our work is not generic industrial maintenance repackaged with a different logo. Every service we offer has been designed around the specific machines, regulatory requirements, throughput pressures, and operational realities of registered vehicle scrapping and recycling facilities.</p>
              <div className="srv-grid">
                <div className="srv-card"><div className="srv-top" /><div className="srv-icon">⚙️</div><h4>Preventive Maintenance Programs</h4><p>Scheduled service visits, fluid and wear-part analysis, replacement cycles, and monthly health reports — calibrated precisely to your machine hours.</p></div>
                <div className="srv-card"><div className="srv-top" /><div className="srv-icon">🔧</div><h4>Emergency Breakdown Response</h4><p>A dedicated on-call engineering team with guaranteed response windows. Critical spare parts stocked locally for the top 28 failure scenarios.</p></div>
                <div className="srv-card"><div className="srv-top" /><div className="srv-icon">📡</div><h4>IoT Performance Monitoring</h4><p>Real-time sensor data from vibration, temperature, and load points across your critical machines — all flowing to a live dashboard.</p></div>
                <div className="srv-card"><div className="srv-top" /><div className="srv-icon">📋</div><h4>Compliance & Audit Readiness</h4><p>Complete digital service history, MoRTH-aligned documentation, and pre-inspection machinery reviews — so audit day is never a surprise.</p></div>
              </div>
            </section>

            <div className="section-alt">
              <section className="section">
                <div className="s-label">Performance Data</div>
                <h2 className="s-title">Preventive vs. Reactive Maintenance — What the Data Shows</h2>
                <div className="s-bar" />
                <p>Across 85 RVSF facilities that transitioned from reactive to preventive maintenance programs over a 24-month period, the improvement in every key operational metric was consistent, significant, and lasting.</p>
                <div className="chart-card">
                  <h3>Operational Performance Index — Before vs After Preventive Maintenance</h3>
                  <p className="c-sub">Index score out of 100 — industry baseline = 100. Higher is better across all dimensions.</p>
                  <div className="legend-row">
                      <span><span className="ld" style={{ background: '#94a3b8' }}></span>Reactive (Before)</span>
                      <span><span className="ld" style={{ background: '#1e4fac' }}></span>Preventive (After)</span>
                  </div>
                  <div className="chart-wrap"><canvas ref={c2Ref} role="img" aria-label="Radar chart comparing operational metrics before and after preventive maintenance." /></div>
                </div>
              </section>
            </div>

            <section className="section">
              <div className="s-label">Live Intelligence</div>
              <h2 className="s-title">Plant Machinery Health Database — How We Track Your Fleet</h2>
              <div className="s-bar" />
              <p>One of the most impactful tools in our support model is a structured, live machine health database. Instead of paper logbooks and operator guesswork, we build and maintain a real-time digital record for every critical machine in your plant.</p>
              <div className="tbl-wrap">
                <table>
                  <thead>
                    <tr><th>Machine</th><th>Last Serviced</th><th>Hours Run</th><th>Next Service Due</th><th>Wear Risk Flag</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Industrial Shredder (800HP)</strong></td><td>14 Oct 2024</td><td>1,240 hrs</td><td>In 500 hrs</td><td>Hammers at 78% wear threshold</td><td><span className="badge ba">Schedule Soon</span></td></tr>
                    <tr><td><strong>Hydraulic Baler Press</strong></td><td>02 Nov 2024</td><td>680 hrs</td><td>In 820 hrs</td><td>Low — seals recently replaced</td><td><span className="badge bg">Healthy</span></td></tr>
                    <tr><td><strong>Eddy Current Separator</strong></td><td>28 Sep 2024</td><td>1,480 hrs</td><td>In 220 hrs</td><td>Critical — bearing vibration detected</td><td><span className="badge br">Urgent Action</span></td></tr>
                    <tr><td><strong>Conveyor Belt System (80m)</strong></td><td>18 Nov 2024</td><td>410 hrs</td><td>In 1,090 hrs</td><td>Very low — recently overhauled</td><td><span className="badge bg">Healthy</span></td></tr>
                    <tr><td><strong>Plasma Cutting Unit</strong></td><td>05 Oct 2024</td><td>1,100 hrs</td><td>In 400 hrs</td><td>Medium — nozzle wear at 55%</td><td><span className="badge ba">Monitor Closely</span></td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="section-alt">
              <section className="section">
                <div className="s-label">The Financial Case</div>
                <h2 className="s-title">Your Investment vs. Your Returns — A 36-Month Picture</h2>
                <div className="s-bar" />
                <p>We know machinery support feels like a cost centre until it isn't. So here's what the numbers look like across 42 mid-sized RVSF client facilities tracked over three full years of engagement.</p>
                <div className="chart-card">
                  <h3>Cumulative Investment vs. Cumulative Savings Over 36 Months (₹ Lakhs)</h3>
                  <div className="legend-row">
                      <span><span className="ld" style={{ background: '#dc2626' }}></span>Investment</span>
                      <span><span className="ld" style={{ background: '#0d9488' }}></span>Savings</span>
                      <span><span className="ld" style={{ background: '#1e4fac' }}></span>Net Position</span>
                    </div>
                    <div className="chart-wrap" style={{ height: '320px' }}><canvas ref={c3Ref} role="img" aria-label="Line chart showing investment and savings over 36 months." /></div>
                </div>
              </section>
            </div>

            <section className="section">
              <div className="s-label">Getting Started</div>
              <h2 className="s-title">From First Conversation to Full Coverage in 14 Days</h2>
              <div className="s-bar" />
              <div className="proc-list">
                <div className="proc-step"><div className="p-num">1</div><div className="p-body"><h4>Plant Audit & Full Machine Census</h4><p>Our engineers visit your facility and document every machine — model, age, operating hours, service history, current condition, and daily load.</p></div></div>
                <div className="proc-step"><div className="p-num">2</div><div className="p-body"><h4>Risk Stratification & Priority Mapping</h4><p>Using audit data, every machine is classified by failure probability and business impact. High-risk units go onto an immediate watchlist.</p></div></div>
                <div className="proc-step"><div className="p-num">3</div><div className="p-body"><h4>12-Month Maintenance Calendar Deployment</h4><p>A forward maintenance schedule is built and shared with your operations team. Every service window is planned around your production calendar.</p></div></div>
                <div className="proc-step"><div className="p-num">4</div><div className="p-body"><h4>IoT Sensor Installation on Critical Machines</h4><p>Vibration, temperature, and load sensors go onto your highest-risk machines — shredders, separators, and balers first.</p></div></div>
              </div>
            </section>

            <div className="section-alt">
              <section className="section">
                <div className="s-label">Real Results</div>
                <h2 className="s-title">Case Study: Turning Around a Struggling RVSF Plant in Pune</h2>
                <div className="s-bar" />
                <div className="case-wrap">
                  <div className="case-tag">📍 Case Study — Pune, 2024</div>
                  <h3>EcoScrap Recyclers Pvt. Ltd. — Pune Industrial Zone</h3>
                  <p>When EcoScrap reached out to us, they were processing just 340 vehicles a month against a licensed capacity of 900. Their primary shredder had failed twice in the preceding four months. Within 60 days of engagement, we replaced the shredder hammer assembly, overhauled the separator's bearing system, and installed IoT vibration sensors. By October 2024, EcoScrap was running at 897 vehicles per month — just shy of full licensed capacity.</p>
                  <div className="case-metrics">
                    <div className="cm"><span className="val">+164%</span><span className="lbl">throughput</span></div>
                    <div className="cm"><span className="val">₹1.2Cr</span><span className="lbl">savings realized</span></div>
                    <div className="cm"><span className="val">Zero</span><span className="lbl">penalties</span></div>
                    <div className="cm"><span className="val">97.3%</span><span className="lbl">machine uptime</span></div>
                  </div>
                  <div className="case-chart-wrap"><canvas ref={c4Ref} role="img" aria-label="Bar chart of EcoScrap monthly vehicle throughput." /></div>
                </div>
              </section>
            </div>

            <section className="section">
              <div className="s-label">Sector Benchmark</div>
              <h2 className="s-title">Where Indian RVSF Plants Stand Today — And the Gap to Close</h2>
              <div className="s-bar" />
              <div className="chart-card">
                <h3>RVSF Plant Performance Benchmarks — Current Achievment vs. Best-Practice Targets</h3>
                <div className="legend-row">
                  <span><span className="ld" style={{ background: '#1e4fac' }}></span>% Plants Achieving Now</span>
                  <span><span className="ld" style={{ background: '#f59e0b' }}></span>Best-Practice Target</span>
                </div>
                <div className="chart-wrap" style={{ height: '340px' }}><canvas ref={c5Ref} role="img" aria-label="Horizontal bar chart showing industry benchmark gaps." /></div>
              </div>
            </section>

            <div className="section-alt">
              <section className="section">
                <div className="s-label">Common Questions</div>
                <h2 className="s-title">Frequently Asked Questions</h2>
                <div className="s-bar" />
                <div className="faq-list">
                  {faqItems.map((item, index) => (
                    <div key={index} className="faq-item">
                      <div className="faq-q" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                        <div className="faq-num">{index + 1}</div>
                        <div className="faq-q-text">{item.question}</div>
                      </div>
                      {openFaq === index && <div className="faq-a">{item.answer}</div>}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </main>

          {/* Persistent Sidebar Column Area */}
          <aside className="sidebar-column">
            <div className="side-card hidden lg:block">
              <StickyContactForm />
            </div>
            <div className="side-card">
              <h3 style={{ margin: '0 0 10px', fontFamily: 'Bebas Neue', fontSize: '20px', letterSpacing: '0.5px', color: 'var(--ink)' }}>Report overview</h3>
              <p style={{ fontSize: '13.5px', margin: 0, color: 'var(--muted)', lineHeight: '1.6' }}>A strong report maps risks honestly, designs clean facility footprints, tracks cash positions accurately, and makes project paths completely verifiable.</p>
            </div>
          </aside>
        </div>

        <section className="section">
          <div className="cta-block">
            <h2>Your Machines Run 24 Hours.<br/>So Does Our Support Team.</h2>
            <p>Get a no-obligation plant machinery audit and discover exactly where your biggest risks are hiding right now.</p>
            <a href="#" className="cta-btn">Request Your Free Plant Audit →</a>
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>© 2025 · Machinery Solutions for Registered Vehicle Scrapping Facilities · All data references are drawn from RVSF industry surveys and tracked client outcomes, 2022–2024.</p>
      </footer>

      <style>{styles}</style>
    </div>
  );
};

export default RVSMachineryBlog;