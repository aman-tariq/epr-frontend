import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #fff;
    --panel: #f8fafc;
    --ink: #0f172a;
    --muted: #526071;
    --line: #e5e7eb;
    --brand: #0f766e;
    --shadow: 0 14px 40px rgba(15,23,42,.08);
  }

  .buying-selling-blog-root {
    font-family: 'Inter', system-ui, sans-serif;
    background: var(--bg);
    color: var(--ink);
    line-height: 1.75;
    width: 100%;
  } 

  .hero {
    padding: 60px 16px 40px;
    border-bottom: 1px solid var(--line);
    background: linear-gradient(180deg, rgba(15,118,110,.03), rgba(15,23,42,0));
    width: 100%;
  }

  @media (min-width: 1024px) {
    .hero { padding: 80px 24px 60px; }
  }

  .hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 28px;
  }

  @media (min-width: 1024px) {
    .hero-inner {
      grid-template-columns: 1.5fr 1fr;
      align-items: end;
    }
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 800;
    color: var(--brand);
    background: rgba(15,118,110,.08);
    padding: 8px 12px;
    border-radius: 999px;
    margin-bottom: 18px;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: clamp(28px, 4.5vw, 62px);
    line-height: 1.1;
    letter-spacing: -.02em;
    margin-bottom: 16px;
  }

  h1 .accent { color: var(--brand); }

  .punchline {
    font-size: clamp(16px, 2vw, 22px);
    color: #334155;
    margin-bottom: 22px;
  }

  .hero-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .badge {
    padding: 6px 12px;
    border: 1px solid var(--line);
    background: #fff;
    border-radius: 999px;
    font-size: 12px;
    color: #334155;
    font-weight: 600;
  }

  .hero-card {
    background: #ffffff;
    border: 1px solid var(--line);
    border-radius: 24px;
    box-shadow: var(--shadow);
    padding: 20px;
    width: 100%;
  }

  .hero-card h3 {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--brand);
    margin-bottom: 12px;
  }

  .hero-card .metric {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  @media (max-width: 480px) {
    .hero-card .metric { grid-template-columns: 1fr; }
  }

  .metric div {
    padding: 14px;
    border-radius: 18px;
    background: var(--panel);
    border: 1px solid var(--line);
  }

  .metric strong {
    display: block;
    font-size: 24px;
    line-height: 1.1;
    margin-bottom: 4px;
  }

  .metric span { font-size: 12px; color: var(--muted); }

  .container {
    margin: 0 auto;
    padding: 0 16px;
    max-width: 1200px;
    width: 100%;
  }

  @media (min-width: 768px) {
    .container { padding: 0 24px; }
  }

  .main-layout-wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 40px;
    width: 100%;
  }

  @media (min-width: 1024px) {
    .main-layout-wrapper {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  .content-column {
    flex: 1;
    min-width: 0;
    width: 100%;
  }

  .sidebar-column {
    width: 100%;
  }

  @media (min-width: 1024px) {
    .sidebar-column {
      width: 320px;
      flex-shrink: 0;
      position: -webkit-sticky;
      position: sticky;
      top: 100px;
      z-index: 40;
    }
  }

  .content-column section, .sidebar-column .side-card {
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 24px;
    box-shadow: var(--shadow);
    padding: 20px;
    margin-bottom: 24px;
    width: 100%;
  }

  @media (min-width: 768px) {
    .content-column section { padding: 26px; }
  }

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(22px, 3vw, 36px);
    line-height: 1.15;
    margin-bottom: 14px;
    letter-spacing: -.01em;
  }

  p { margin-bottom: 14px; color: #334155; word-wrap: break-word; }
  
  .lead {
    font-size: 18px;
    border-left: 4px solid var(--brand);
    padding-left: 14px;
    color: #1e293b;
    margin-bottom: 18px;
  }

  @media (min-width: 768px) {
    .lead { font-size: 20px; padding-left: 18px; }
  }

  .note {
    background: linear-gradient(180deg, rgba(20,184,166,.08), rgba(20,184,166,.03));
    border: 1px solid rgba(20,184,166,.18);
    border-radius: 18px;
    padding: 16px 18px;
    color: #0f3d39;
    margin: 18px 0;
  }

  .stat-strip {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin: 18px 0 12px;
  }

  @media (min-width: 768px) {
    .stat-strip { grid-template-columns: repeat(4, 1fr); gap: 14px; }
  }

  @media (max-width: 480px) {
    .stat-strip { grid-template-columns: 1fr; }
  }

  .stat {
    border: 1px solid var(--line);
    background: #fff;
    border-radius: 20px;
    padding: 14px 10px;
    text-align: center;
  }

  .stat strong {
    display: block;
    font-size: 26px;
    line-height: 1.05;
    color: var(--brand);
    margin-bottom: 6px;
  }

  .stat span { font-size: 12px; color: var(--muted); }

  .phase-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 16px;
  }

  @media (min-width: 480px) {
    .phase-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (min-width: 768px) {
    .phase-grid { grid-template-columns: repeat(3, 1fr); }
  }

  .phase {
    border: 1px solid var(--line);
    background: var(--panel);
    border-radius: 14px;
    padding: 14px;
  }

  .phase b { display: block; margin-bottom: 4px; color: var(--brand); font-size: 14px; }
  .phase p { font-size: 12px; margin: 0; color: var(--muted); }

  .chart-box {
    border: 1px solid var(--line);
    border-radius: 22px;
    background: #fff;
    padding: 16px;
    margin: 20px 0;
    overflow: hidden;
  }

  .chart-title {
    font-size: 11px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 800;
    color: var(--muted);
    margin-bottom: 12px;
  }

  .chart-outer-container {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .chart {
    position: relative;
    width: 100%;
    min-width: 280px;
    height: 280px;
  }

  .chart.small { height: 220px; }

  .data-table-wrap {
    overflow-x: auto;
    margin-top: 16px;
    border-radius: 14px;
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
    -webkit-overflow-scrolling: touch;
    width: 100%;
  }

  .db {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    min-width: 600px;
  }

  .db th {
    text-align: left;
    background: var(--brand);
    color: #fff;
    padding: 14px 12px;
    font-size: 11px;
    text-transform: uppercase;
  }

  .db td {
    padding: 13px 12px;
    border-bottom: 1px solid var(--line);
  }

  .db tr:nth-child(even) td { background: #fbfdfe; }

  .pill {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
  }
  .pill.green { background: #dcfce7; color: #166534; }
  .pill.amber { background: #fef3c7; color: #92400e; }
  .pill.blue { background: #dbeafe; color: #1e3a8a; }

  .case {
    background: #0f172a;
    color: #fff;
    border-radius: 24px;
    padding: 24px;
    margin-top: 8px;
  }

  .case h3 { color: #f8fafc; margin-top: 0; font-size: 18px; margin-bottom: 12px; }
  .case p { color: rgba(255,255,255,0.8); }

  .case-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-top: 18px;
  }

  @media (max-width: 480px) {
    .case-stats { grid-template-columns: 1fr; }
  }

  .case-stats div {
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 16px;
    padding: 14px;
    text-align: center;
  }

  .case-stats strong { display: block; font-size: 24px; color: #fde68a; line-height: 1.1; }
  .case-stats span { display: block; color: rgba(255,255,255,.72); font-size: 11px; margin-top: 4px; }

  .faq-item { border-bottom: 1px solid var(--line); padding: 16px 0; }
  .faq-q {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    font-weight: 700;
    color: #1e293b;
    font-size: 15px;
  }
  .faq-q:after { content: "+"; color: var(--brand); font-size: 22px; line-height: 1; }
  .faq-q.open:after { content: "×"; }
  .faq-a { display: none; padding-top: 10px; color: var(--muted); font-size: 14px; word-wrap: break-word; }
  .faq-a.show { display: block; }

  .cta { margin-top: 18px; background: rgba(15,118,110,.05); border: 1px solid var(--line); border-radius: 24px; padding: 24px; }
  .cta h3 { margin-top: 0; font-size: 18px; margin-bottom: 8px; }
`;

const faqItems = [
  {
    question: 'Why is market analysis important for a registered vehicle scrapping facility?',
    answer: 'Because it helps the facility understand where demand comes from, which customer groups are most valuable, and how to prioritize outreach. Without market analysis, pricing and sales efforts often become reactive instead of planned.',
  },
  {
    question: 'What target market segments should a scrapping facility focus on first?',
    answer: 'The strongest starting points are usually fleet operators, private vehicle owners, insurance partners, commercial asset owners, dealerships, and salvage buyers. Each segment has different needs and different buying triggers.',
  },
  {
    question: 'How do you decide which segment is most profitable?',
    answer: 'We compare order size, speed of conversion, repeat potential, logistics cost, and the level of trust needed to close the deal. The most profitable segment is not always the largest one; it is often the one with the best balance of margin and volume.',
  },
  {
    question: 'Can the same message work for all clients?',
    answer: 'Usually not. A private owner wants simplicity and fair pricing, while a fleet customer wants compliance, speed, and scale. Segment-based messaging performs much better than generic outreach.',
  },
  {
    question: 'How does data help improve buying and selling at the plant?',
    answer: 'Data reveals which products move fastest, which regions deliver volume, and which customer groups care most about price, speed, or documentation. That makes the entire sales process more accurate and much easier to manage.',
  },
  {
    question: 'What should be tracked every month?',
    answer: 'A good monthly review should include lead sources, segment conversion, average deal size, pickup time, resale channel performance, and regional demand shifts. Those indicators show whether the market strategy is working.',
  },
];

const RVSFBuyingSellingBlog: React.FC = () => {
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
              x: { grid: { display: false }, ticks: { font: { size: 10 } } },
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
              x: { grid: { display: false }, ticks: { font: { size: 10 } } },
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
              { label: 'Manual (mins)', data: [22, 18, 26, 19, 30], backgroundColor: '#cbd5e1', borderRadius: 8 },
              { label: 'Digital (mins)', data: [8, 5, 7, 6, 9], backgroundColor: '#0f766e', borderRadius: 8 },
            ],
          },
          options: {
            ...base,
            indexAxis: 'y',
            plugins: { legend: { display: true, position: 'top', labels: { font: { size: 10 } } } },
            scales: {
              x: { beginAtZero: true, ticks: { font: { size: 10 } } },
              y: { grid: { display: false }, ticks: { font: { size: 10 } } },
            },
          } as any,
        }),
      );
    }

    return () => charts.forEach((chart) => chart.destroy());
  }, []);

  return (
    <div className="buying-selling-blog-root py-4 md:py-8">
      <Seo
        title="How to Buy and Sell Scrap at Registered Vehicle Scrapping Facility (RVSF) - Complete Guide"
        description="Learn the complete buying and selling process at a Registered Vehicle Scrapping Facility (RVSF). Best practices for scrap purchase, reusable parts selling, documentation, pricing, and maximizing profit in vehicle scrapping business."
        keywords={["RVSF Buy Sell", "Registered Vehicle Scrapping Facility", "Vehicle Scrapping Buy Sell Process"]}
        url="https://eprnexuss.com/blog/rvsf-buy-selling"
        type="article"
      />
      
      <header className="hero">
        <div className="hero-inner">
          <div>
            <div className="eyebrow">Registered Vehicle Scrapping Facility</div>
            <h1>Turn End-of-Life Vehicles into <span className="accent">Real Business Value</span></h1>
            <p className="punchline">The right scrapping facility does more than dismantle vehicles — it builds trust, improves recovery, and creates a clean buying and selling engine for scrap.</p>
            <div className="hero-badges">
              <span className="badge">Scrap buying</span>
              <span className="badge">Reusable products</span>
              <span className="badge">Compliance-first operations</span>
            </div>
          </div>
          <aside className="hero-card">
            <h3>At-a-glance impact</h3>
            <div className="metric">
              <div><strong>5</strong><span>value streams</span></div>
              <div><strong>100%</strong><span>traceable</span></div>
            </div>
          </aside>
        </div>
      </header>

      <main className="container">
        <div className="main-layout-wrapper">
          
          {/* Content Area */}
          <article className="content-column">
            <section>
              <div className="lead">When a vehicle reaches the end of its road, the opportunity is just beginning.</div>
              <p>At a modern <strong>registered vehicle scrapping facility</strong>, the buying and selling process is not random. It is built on a clear system that identifies the vehicle, verifies ownership, removes polluting components safely, and separates what can be recycled, resold, or responsibly disposed of.</p>
              <div className="stat-strip">
                <div className="stat"><strong>5</strong><span>recoverable streams</span></div>
                <div className="stat"><strong>24/7</strong><span>traceable</span></div>
                <div className="stat"><strong>0</strong><span>guesswork</span></div>
                <div className="stat"><strong>100%</strong><span>documented</span></div>
              </div>
              <div className="note"><strong>Human insight:</strong> buyers do not pay more because the scrap is old; they pay more because the scrap is sorted, clean, verified, and ready to use.</div>
            </section>

            <section>
              <h2>How the buying and selling workflow works</h2>
              <p>The first step is intake. After that, the vehicle moves through depollution, dismantling, segregation, and grading. Once materials are graded, the facility sells them to the right channel.</p>
              <div className="phase-grid">
                <div className="phase"><b>1. Intake</b><p>Verify ownership and assess condition.</p></div>
                <div className="phase"><b>2. Depollution</b><p>Drain fluids and isolate hazardous items.</p></div>
                <div className="phase"><b>3. Dismantling</b><p>Separate reusable parts and recyclables.</p></div>
              </div>
            </section>

            <section>
              <h2>Data-driven visuals</h2>
              <div className="chart-box">
                <div className="chart-title">Revenue mix by recovered material</div>
                <div className="chart-outer-container"><div className="chart small"><canvas ref={revMixRef} /></div></div>
              </div>
              <div className="chart-box">
                <div className="chart-title">Operational flow: from intake to sale</div>
                <div className="chart-outer-container"><div className="chart"><canvas ref={processFlowRef} /></div></div>
              </div>
              <div className="chart-box">
                <div className="chart-title">Buyer demand by channel</div>
                <div className="chart-outer-container"><div className="chart small"><canvas ref={buyerMixRef} /></div></div>
              </div>
              <div className="chart-box">
                <div className="chart-title">Manual vs digital documentation time</div>
                <div className="chart-outer-container"><div className="chart"><canvas ref={docTimeRef} /></div></div>
              </div>
            </section>

            <section>
              <h2>Document database for a clean transaction</h2>
              <div className="data-table-wrap">
                <table className="db">
                  <thead>
                    <tr><th>Record</th><th>Why it matters</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Vehicle intake form</td><td>Tracks origin and handover confirmation.</td><td><span className="pill blue">Required</span></td></tr>
                    <tr><td>Inspection and grading sheet</td><td>Helps price the vehicle accurately.</td><td><span className="pill green">Critical</span></td></tr>
                    <tr><td>Depollution log</td><td>Documents fluid removal & safety steps.</td><td><span className="pill green">Critical</span></td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Case study: how one facility improved recovery</h2>
              <div className="case">
                <h3>Illustrative case study: plant workflow overhaul</h3>
                <p>The plant introduced a structured buying and selling workflow. Every vehicle received a digital intake record, materials were sorted into separate lot codes, reusable components were graded before sale, and scrap buyers were segmented by material type.</p>
                <div className="case-stats">
                  <div><strong>+28%</strong><span>value recovery</span></div>
                  <div><strong>-41%</strong><span>manual rework</span></div>
                  <div><strong>2x</strong><span>buyer turnover</span></div>
                </div>
              </div>
            </section>

            <section>
              <h2>Frequently asked questions</h2>
              <div className="faq">
                {faqItems.map((item, index) => (
                  <div key={index} className="faq-item">
                    <div className="faq-q" style={{ contentVisibility: 'auto' }} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                      {item.question}
                    </div>
                    <div className={`faq-a${openFaq === index ? ' show' : ''}`}>{item.answer}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Mobile Contact Form Display */}
            <div className="block lg:hidden mt-4">
              <StickyContactForm />
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="sidebar-column">
            <div className="side-card hidden lg:block">
              <StickyContactForm />
            </div>
            <div className="side-card">
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Quick buyer lens</h2>
              <p style={{ fontSize: '14px', margin: 0, color: 'var(--muted)' }}>People buy better when the facility feels organized. A good display yard, clean weighing practice, visible grading, and fast settlement help build trust.</p>
            </div>
          </aside>

        </div>
      </main>

      <style>{styles}</style>
    </div>
  );
};

export default RVSFBuyingSellingBlog;