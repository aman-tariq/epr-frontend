import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #1a1208;
    --paper: #fdf8f0;
    --cream: #f5ede0;
    --rust: #b84a1e;
    --rust-light: #e8c4b0;
    --rust-dark: #7a2e0e;
    --gold: #c9933a;
    --gold-light: #f0dbb8;
    --green: #2d6a4f;
    --green-light: #b7e4c7;
    --slate: #3d4a5c;
    --slate-light: #c8d4e8;
    --muted: #6b5e50;
    --border: rgba(180,130,80,0.25);
    --shadow: 0 2px 24px rgba(80,40,10,0.08);
  }

  .approvals-blog-root {
    font-family: 'Source Serif 4', Georgia, serif;
    background: var(--paper);
    color: var(--ink);
    font-size: 16px;
    line-height: 1.75;
    width: 100%;
    /* Removed overflow-x hidden from here to fix standard sticky layout behavior */
  }

  @media (min-width: 768px) {
    .approvals-blog-root {
      font-size: 17px;
      line-height: 1.85;
    }
  }

  .hero {
    background: var(--ink);
    color: #fdf8f0;
    padding: 48px 16px;
    text-align: center;
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  @media (min-width: 768px) {
    .hero {
      padding: 80px 40px 72px;
    }
  }

  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 30px,
      rgba(201,147,58,0.04) 30px,
      rgba(201,147,58,0.04) 31px
    );
  }

  .hero-tag {
    display: inline-block;
    font-family: 'Source Serif 4', serif;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    border: 1px solid rgba(201,147,58,0.4);
    padding: 4px 10px;
    border-radius: 2px;
    margin-bottom: 20px;
  }

  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(24px, 5.5vw, 54px);
    font-weight: 800;
    line-height: 1.2;
    max-width: 820px;
    margin: 0 auto 16px;
    letter-spacing: -0.5px;
  }

  .punch {
    font-size: clamp(14px, 2.2vw, 20px);
    color: rgba(253,248,240,0.75);
    max-width: 620px;
    margin: 0 auto 24px;
    font-weight: 300;
    font-style: italic;
    line-height: 1.5;
  }

  .container {
    margin: 0 auto;
    padding: 0 16px;
    max-width: 1200px;
    width: 100%;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .container {
      padding: 0 28px;
    }
  }

  .blog-layout-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    align-items: start;
    width: 100%;
  }

  @media (min-width: 1024px) {
    .blog-layout-grid {
      grid-template-columns: 1fr 300px;
      gap: 40px;
    }
  }

  .content-area {
    min-width: 0;
    width: 100%;
    overflow-x: hidden; /* Encapsulate mobile responsive safety inside content area boundaries */
  }

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(20px, 4vw, 28px);
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 14px;
    margin-top: 24px;
  }

  p { margin-bottom: 16px; word-wrap: break-word; }

  .chart-card {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px;
    margin: 24px 0;
    box-shadow: var(--shadow);
    max-width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .chart-card {
      padding: 28px 24px;
      margin: 36px 0;
    }
  }

  .chart-title {
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 12px;
  }

  .chart-outer-container {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .chart-wrap {
    position: relative;
    width: 100%;
    min-width: 280px;
    height: 240px;
  }

  .chart-wrap.small {
    height: 200px;
  }

  .data-table-wrap {
    overflow-x: auto;
    margin: 24px 0;
    border-radius: 10px;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    -webkit-overflow-scrolling: touch;
    width: 100%;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    min-width: 500px;
  }

  @media (min-width: 768px) {
    .data-table {
      font-size: 14px;
    }
  }

  .data-table thead tr {
    background: var(--ink);
    color: var(--gold);
  }

  .data-table thead th {
    padding: 12px 14px;
    text-align: left;
    font-family: 'Source Serif 4', serif;
    font-weight: 600;
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .data-table tbody tr:nth-child(even) { background: var(--cream); }
  .data-table tbody td {
    padding: 12px 14px;
    color: var(--ink);
    border-bottom: 1px solid var(--border);
  }

  .badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 20px;
    font-size: 10px;
    font-weight: 600;
  }
  .badge-green { background: var(--green-light); color: var(--green); }
  .badge-blue { background: var(--slate-light); color: var(--slate); }

  .case-study {
    background: var(--slate);
    color: #e8eef6;
    border-radius: 14px;
    padding: 24px;
    margin: 24px 0;
    position: relative;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .case-study {
      padding: 48px 40px;
      margin: 36px 0;
    }
  }

  .case-study h3 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(19px, 3.5vw, 26px);
    font-weight: 700;
    color: #fff;
    margin-bottom: 16px;
  }

  .case-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 24px;
    width: 100%;
  }

  @media (min-width: 480px) {
    .case-metrics {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 16px;
    }
  }

  .case-metric {
    background: rgba(255,255,255,0.08);
    border-radius: 10px;
    padding: 14px 12px;
    text-align: center;
    box-sizing: border-box;
  }

  .case-metric .cm-num {
    font-family: 'Playfair Display', serif;
    font-size: clamp(20px, 4vw, 30px);
    font-weight: 700;
    color: #fff;
  }

  .faq-list { margin: 24px 0; width: 100%; }
  .faq-item {
    border: 1px solid var(--border);
    border-radius: 10px;
    margin-bottom: 12px;
    overflow: hidden;
    width: 100%;
  }

  .faq-q {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    cursor: pointer;
    background: var(--cream);
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 14px;
    color: var(--rust-dark);
    gap: 8px;
  }

  @media (min-width: 768px) {
    .faq-q {
      padding: 18px 22px;
      font-size: 16px;
    }
  }

  .faq-a {
    display: none;
    padding: 14px 16px;
    background: #fff;
    border-top: 1px solid var(--border);
    font-size: 14px;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .faq-a {
      padding: 16px 22px 20px;
      font-size: 15px;
    }
  }

  .faq-item.open .faq-a { display: block; }

  .keywords {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 12px;
    width: 100%;
  }

  .kw {
    font-size: 11px;
    background: var(--cream);
    padding: 4px 8px;
    border-radius: 4px;
    color: var(--muted);
  }

  .kw.primary {
    background: var(--gold-light);
    color: var(--rust-dark);
  }

  .sidebar-column {
    width: 100%;
    min-width: 0;
  }

  .side-section {
    margin-bottom: 24px;
    width: 100%;
  }

  .side-section h2 {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 0;
  }
`;

const faqItems = [
  {
    question: 'What can be bought and sold at a registered vehicle scrapping facility?',
    answer: 'A registered facility can sell ferrous and non-ferrous scrap, reusable parts, batteries and other regulated outputs through approved channels, and sorted materials such as plastics, rubber, and glass according to the facility’s process and local compliance requirements.',
  },
  {
    question: 'How is the scrap value of a vehicle decided?',
    answer: 'Value is usually based on vehicle condition, weight, recoverable metal, reusable parts, market rates, and how well the facility separates clean material from mixed waste.',
  },
  {
    question: 'Why is documentation important in a scrapping plant?',
    answer: 'Documentation protects the seller, the buyer, and the facility. It records ownership transfer, material movement, pricing, and disposal steps so the business remains transparent and audit-ready.',
  },
  {
    question: 'How do facilities improve the price they receive for scrap?',
    answer: 'They improve pricing by sorting materials properly, keeping scrap free of contamination, tracking grades, and selling each output stream to the most suitable buyer.',
  },
  {
    question: 'Can reusable products be sold separately from scrap?',
    answer: 'Yes. In a well-managed facility, reusable components are separated early, graded carefully, and sold through a different channel than bulk scrap.',
  },
  {
    question: 'What makes a scrapping facility trustworthy for clients?',
    answer: 'Clear pricing, honest inspection, safe handling, complete records, and a simple, professional buying and selling process build client confidence.',
  },
];

const RVSFApprovalsBlog: React.FC = () => {
  const revMixRef = useRef<HTMLCanvasElement | null>(null);
  const processFlowRef = useRef<HTMLCanvasElement | null>(null);
  const buyerMixRef = useRef<HTMLCanvasElement | null>(null);
  const docTimeRef = useRef<HTMLCanvasElement | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const base = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
    } as any;

    const charts: Chart[] = [];

    if (revMixRef.current?.getContext('2d')) {
      charts.push(
        new Chart(revMixRef.current.getContext('2d') as CanvasRenderingContext2D, {
          type: 'doughnut',
          data: {
            labels: ['Ferrous scrap', 'Non-ferrous metals', 'Reusable parts', 'Plastics & rubber', 'Other recoverables'],
            datasets: [{
              data: [44, 21, 19, 10, 6],
              backgroundColor: ['#0f766e', '#14b8a6', '#f59e0b', '#94a3b8', '#cbd5e1'],
              borderWidth: 0,
            }],
          },
          options: {
            ...base,
            cutout: '62%',
            plugins: {
              legend: { display: true, position: 'bottom', labels: { usePointStyle: true, boxWidth: 10, font: { size: 10 } } },
            },
          } as any,
        }),
      );
    }

    if (processFlowRef.current?.getContext('2d')) {
      charts.push(
        new Chart(processFlowRef.current.getContext('2d') as CanvasRenderingContext2D, {
          type: 'line',
          data: {
            labels: ['Intake', 'Depollution', 'Dismantling', 'Segregation', 'Grading', 'Sale'],
            datasets: [{
              label: 'Value creation index',
              data: [18, 34, 63, 72, 84, 92],
              borderColor: '#0f766e',
              backgroundColor: 'rgba(15,118,110,0.12)',
              fill: true,
              tension: 0.35,
            }],
          },
          options: {
            ...base,
            scales: {
              x: { grid: { display: false }, ticks: { font: { size: 9 } } },
              y: { beginAtZero: true, max: 100, ticks: { font: { size: 10 } } },
            },
          } as any,
        }),
      );
    }

    if (buyerMixRef.current?.getContext('2d')) {
      charts.push(
        new Chart(buyerMixRef.current.getContext('2d') as CanvasRenderingContext2D, {
          type: 'bar',
          data: {
            labels: ['Steel mills', 'Parts dealers', 'Plastic recyclers', 'Copper buyers', 'Bulk traders'],
            datasets: [{
              data: [82, 58, 36, 44, 68],
              backgroundColor: ['#0f766e', '#14b8a6', '#f59e0b', '#94a3b8', '#0b5250'],
              borderRadius: 8,
            }],
          },
          options: {
            ...base,
            scales: {
              x: { grid: { display: false }, ticks: { font: { size: 9 } } },
              y: { beginAtZero: true, max: 100, ticks: { font: { size: 10 } } },
            },
          } as any,
        }),
      );
    }

    if (docTimeRef.current?.getContext('2d')) {
      charts.push(
        new Chart(docTimeRef.current.getContext('2d') as CanvasRenderingContext2D, {
          type: 'bar',
          data: {
            labels: ['Vehicle intake', 'Price quote', 'Inventory update', 'Dispatch note', 'Compliance file'],
            datasets: [
              {
                label: 'Manual (mins)',
                data: [22, 18, 26, 19, 30],
                backgroundColor: '#cbd5e1',
                borderRadius: 8,
              },
              {
                label: 'Digital (mins)',
                data: [8, 5, 7, 6, 9],
                backgroundColor: '#0f766e',
                borderRadius: 8,
              },
            ],
          },
          options: {
            ...base,
            indexAxis: 'y',
            plugins: { legend: { display: true, position: 'top', labels: { font: { size: 10 } } } },
            scales: {
              x: { beginAtZero: true, ticks: { font: { size: 10 } } },
              y: { grid: { display: false }, ticks: { font: { size: 9 } } },
            },
          } as any,
        }),
      );
    }

    return () => charts.forEach((chart) => chart.destroy());
  }, []);

  return (
    <div className="approvals-blog-root py-4 md:py-8">

      <Seo
        title="RVSF Approvals Guide 2026 - How to Get Registered Vehicle Scrapping Facility Approval"
        description="Complete guide on Registered Vehicle Scrapping Facility (RVSF) approvals, requirements, documentation, buying & selling process, and how to set up a profitable scrapping plant in India."
        keywords={["RVSF Approvals", "Registered Vehicle Scrapping Facility", "RVSF Setup"]}
        url="https://eprnexuss.com/blog/rvsf-approvals"
        type="article"
      />

      <header className="hero mb-8 md:mb-12">
        <div className="hero-tag">Registered Vehicle Scrapping Facility</div>
        <h1>Registered Vehicle Scrapping Facility – Approvals Guide</h1>
        <p className="punch">The right scrapping facility does more than dismantle vehicles — it builds trust, improves recovery, and creates a clean buying and selling engine for scrap.</p>
      </header>

      <main className="container">
        <div className="blog-layout-grid">
          
          {/* Main Content Body */}
          <article className="content-area">
            <section className="mb-8">
              <p>At a modern <strong>registered vehicle scrapping facility</strong>, the buying and selling process is not random. It is built on a clean system that identifies the vehicle, verifies ownership, removes polluting components safely, and separates what can be recycled, resold, or responsibly disposed of.</p>
              <p>The business model is broader than metal recovery. A well-run plant can sell ferrous scrap, non-ferrous scrap, reusable components, recovered plastics, glass, rubber, and other sorted materials.</p>
            </section>

            <section className="mb-8">
              <h2>How the buying and selling workflow works</h2>
              <p>The first step is intake. The vehicle owner or seller brings the end-of-life vehicle to the facility with the required documents. Once ownership is verified, the plant inspects the vehicle, estimates recoverable value, and records the unit in the system.</p>
            </section>

            <section className="mb-8">
              <h2>Data-driven visuals</h2>
              
              <div className="chart-card">
                <div className="chart-title">Revenue mix by recovered material</div>
                <div className="chart-outer-container">
                  <div className="chart-wrap small"><canvas ref={revMixRef} /></div>
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-title">Operational flow: from intake to sale</div>
                <div className="chart-outer-container">
                  <div className="chart-wrap"><canvas ref={processFlowRef} /></div>
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-title">Buyer demand by channel</div>
                <div className="chart-outer-container">
                  <div className="chart-wrap small"><canvas ref={buyerMixRef} /></div>
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-title">Manual vs digital documentation time</div>
                <div className="chart-outer-container">
                  <div className="chart-wrap"><canvas ref={docTimeRef} /></div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2>Document database for a clean transaction</h2>
              <div className="data-table-wrap">
                <table className="data-table">
                  <thead>
                    <tr><th>Record</th><th>Why it matters</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Vehicle intake form</td><td>Tracks origin and handover confirmation.</td><td><span className="badge badge-blue">Required</span></td></tr>
                    <tr><td>Inspection sheet</td><td>Helps price the vehicle accurately.</td><td><span className="badge badge-green">Critical</span></td></tr>
                    <tr><td>Depollution log</td><td>Documents fluid removal & safety steps.</td><td><span className="badge badge-green">Critical</span></td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2>Case study: how one facility improved recovery</h2>
              <div className="case-study">
                <h3>Structured buying and selling workflow optimization</h3>
                <p>The plant introduced a structured buying and selling workflow. Every vehicle received a digital intake record, materials were sorted into separate lot codes, reusable components were graded before sale, and scrap buyers were segmented by material type.</p>
                <div className="case-metrics">
                  <div className="case-metric"><span className="cm-num block">+28%</span><span className="cm-lbl text-xs">value recovery</span></div>
                  <div className="case-metric"><span className="cm-num block">-41%</span><span className="cm-lbl text-xs">manual rework</span></div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2>Frequently asked questions</h2>
              <div className="faq-list">
                {faqItems.map((item, index) => (
                  <div key={index} className={`faq-item${openFaq === index ? ' open' : ''}`}>
                    <div className="faq-q" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                      <span>{item.question}</span>
                    </div>
                    <div className="faq-a">{item.answer}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Mobile Form Viewport: Accessible only on screens smaller than large desktop breakpoint */}
            <div className="block lg:hidden mt-8 p-4 bg-white border border-[var(--border)] rounded-xl shadow-sm">
              <h3 className="font-serif font-bold text-lg mb-4 text-[var(--ink)]">Connect With Our Team</h3>
              <StickyContactForm />
            </div>
          </article>

          {/* Sidebar Column */}
          <aside className="sidebar-column flex flex-col gap-6 md:gap-8" style={{ height: '100%' }}>
            
            <div className="side-section">
              <h2>SEO Keywords</h2>
              <div className="keywords">
                <span className="kw primary">setup documentation</span>
                <span className="kw primary">commissioning plan</span>
                <span className="kw">mechanical completion</span>
                <span className="kw">operational readiness</span>
              </div>
            </div>
            
            <div className="side-section">
              <h2>Quick buyer lens</h2>
              <p className="text-sm text-gray-600">People buy better when the facility feels organized. A good display yard, clean weighing practice, visible grading, and fast settlement help build trust.</p>
            </div>

            {/* Desktop Sticky Wrapper */}
            <div 
              className="hidden lg:block w-[280px] flex-shrink-0" 
              style={{ 
                position: '-webkit-sticky', 
                // position: 'sticky', 
                top: '130px', 
                zIndex: 10 
              }}
            >
              <StickyContactForm />
            </div>

          </aside>

        </div>
      </main>

      <style>{styles}</style>
    </div>
  );
};

export default RVSFApprovalsBlog;