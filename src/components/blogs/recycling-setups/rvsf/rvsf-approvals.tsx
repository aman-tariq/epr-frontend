import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Chart from 'chart.js/auto';
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #1e293b;
    --paper: #f8fafc;
    --cream: #f1f5f9;
    --rust: #3b82f6;
    --rust-light: #dbeafe;
    --rust-dark: #1e40af;
    --gold: #0f766e;
    --gold-light: #ccfbf1;
    --green: #10b981;
    --green-light: #d1fae5;
    --slate: #475569;
    --slate-light: #e2e8f0;
    --muted: #64748b;
    --border: #e2e8f0;
    --shadow: 0 12px 30px rgba(148,163,184,0.08);
  }

  .approvals-blog-root {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: var(--paper);
    color: var(--ink);
    font-size: 16px;
    line-height: 1.75;
    width: 100%;
  }

  @media (min-width: 768px) {
    .approvals-blog-root {
      font-size: 17px;
      line-height: 1.85;
    }
  }

  .hero {
    background: linear-gradient(135deg, rgba(219,234,254,0.5), rgba(209,250,229,0.4)), linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%);
    color: var(--ink);
    padding: 48px 16px;
    text-align: center;
    position: relative;
    overflow: hidden;
    width: 100%;
    border-bottom: 1px solid var(--border);
    box-shadow: 0 20px 40px rgba(148,163,184,0.05);
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
      rgba(15,118,110,0.02) 30px,
      rgba(15,118,110,0.02) 31px
    );
  }

  .hero-tag {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--gold);
    background: #ffffff;
    border: 1px solid var(--border);
    padding: 6px 14px;
    border-radius: 9999px;
    margin-bottom: 20px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  }

  .hero h1 {
    font-size: clamp(28px, 5.5vw, 54px);
    font-weight: 800;
    line-height: 1.15;
    max-width: 820px;
    margin: 0 auto 16px;
    letter-spacing: -0.03em;
    color: #0f172a;
  }

  .punch {
    font-size: clamp(15px, 2.2vw, 19px);
    color: var(--slate);
    max-width: 660px;
    margin: 0 auto 24px;
    font-weight: 400;
    line-height: 1.6;
  }

  .container {
    margin: 0 auto;
    padding: 0 16px;
    max-width: 1800px;
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
    overflow-x: hidden;
  }

  h2 {
    font-size: clamp(22px, 4vw, 32px);
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 14px;
    margin-top: 36px;
    letter-spacing: -0.02em;
  }

  p { margin-bottom: 16px; color: #475569; word-wrap: break-word; }

  .chart-card {
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 20px;
    margin: 24px 0;
    box-shadow: var(--shadow);
    max-width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .chart-card {
      padding: 30px;
      margin: 36px 0;
    }
  }

  .chart-title {
    font-size: 16px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 18px;
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
    border-radius: 20px;
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
    background: #ffffff;
  }

  @media (min-width: 768px) {
    .data-table {
      font-size: 14px;
    }
  }

  .data-table thead tr {
    background: var(--cream);
    color: var(--ink);
  }

  .data-table thead th {
    padding: 16px;
    text-align: left;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #0f172a;
    border-bottom: 1px solid var(--border);
  }

  .data-table tbody tr:nth-child(even) { background: #f8fafc; }
  .data-table tbody td {
    padding: 14px 16px;
    color: #475569;
    border-bottom: 1px solid var(--border);
  }

  .badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
  }
  .badge-green { background: var(--green-light); color: #065f46; }
  .badge-blue { background: var(--rust-light); color: var(--rust-dark); }

  .case-study {
    background: #ffffff;
    color: #475569;
    border: 1px solid rgba(245,158,11,0.35);
    background: linear-gradient(180deg, rgba(254,243,199,0.3), #ffffff 120px);
    border-radius: 24px;
    padding: 24px;
    margin: 24px 0;
    position: relative;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 12px 30px rgba(245,158,11,0.04);
  }

  @media (min-width: 768px) {
    .case-study {
      padding: 40px;
      margin: 36px 0;
    }
  }

  .case-study h3 {
    font-size: clamp(20px, 3.5vw, 26px);
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
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
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 16px 14px;
    text-align: center;
    box-sizing: border-box;
    box-shadow: 0 4px 10px rgba(0,0,0,0.02);
  }

  .case-metric .cm-num {
    font-size: clamp(24px, 4vw, 32px);
    font-weight: 800;
    color: var(--gold);
  }
  
  .case-metric .cm-lbl {
    color: var(--muted);
    font-weight: 600;
  }

  .faq-list { margin: 24px 0; width: 100%; }
  .faq-item {
    border: 1px solid var(--border);
    border-radius: 18px;
    margin-bottom: 12px;
    overflow: hidden;
    width: 100%;
    background: #ffffff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.01);
  }

  .faq-q {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    cursor: pointer;
    background: #ffffff;
    font-weight: 700;
    font-size: 15px;
    color: #0f172a;
    gap: 8px;
    transition: background 0.2s ease;
  }

  .faq-q:hover {
    background: var(--cream);
  }

  @media (min-width: 768px) {
    .faq-q {
      padding: 20px 24px;
      font-size: 16px;
    }
  }

  .faq-a {
    display: none;
    padding: 16px 20px 20px;
    background: var(--paper);
    border-top: 1px solid var(--border);
    font-size: 14px;
    color: #475569;
    word-wrap: break-word;
    line-height: 1.65;
  }

  @media (min-width: 768px) {
    .faq-a {
      padding: 18px 24px 24px;
      font-size: 15px;
    }
  }

  .faq-item.open .faq-a { display: block; }
  .faq-item.open .faq-q { background: var(--cream); }

  .sidebar-column {
    width: 100%;
    min-width: 0;
  }

  .side-section {
    margin-bottom: 24px;
    width: 100%;
  }

  .side-section h2 {
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
              backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#64748b', '#cbd5e1'],
              borderWidth: 0,
            }],
          },
          options: {
            ...base,
            cutout: '62%',
            plugins: {
              legend: { display: true, position: 'bottom', labels: { usePointStyle: true, boxWidth: 10, font: { size: 10, weight: 600 } } },
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
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(59,130,246,0.08)',
              fill: true,
              tension: 0.35,
            }],
          },
          options: {
            ...base,
            scales: {
              x: { grid: { display: false }, ticks: { font: { size: 9, weight: 600 } } },
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
              backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#64748b', '#1d4ed8'],
              borderRadius: 6,
            }],
          },
          options: {
            ...base,
            scales: {
              x: { grid: { display: false }, ticks: { font: { size: 9, weight: 600 } } },
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
                borderRadius: 6,
              },
              {
                label: 'Digital (mins)',
                data: [8, 5, 7, 6, 9],
                backgroundColor: '#3b82f6',
                borderRadius: 6,
              },
            ],
          },
          options: {
            ...base,
            indexAxis: 'y',
            plugins: { legend: { display: true, position: 'top', labels: { font: { size: 10, weight: 600 } } } },
            scales: {
              x: { beginAtZero: true, ticks: { font: { size: 10 } } },
              y: { grid: { display: false }, ticks: { font: { size: 9, weight: 600 } } },
            },
          } as any,
        }),
      );
    }

    return () => charts.forEach((chart) => chart.destroy());
  }, []);

  return (
    <div className="approvals-blog-root mt-[80px] py-4 md:py-8">
      
      <Seo
        title="RVSF Approvals Guide 2026 - How to Get Registered Vehicle Scrapping Facility Approval"
        description="Complete guide on Registered Vehicle Scrapping Facility (RVSF) approvals, requirements, documentation, buying & selling process, and how to set up a profitable scrapping plant in India."
        keywords={["RVSF Approvals", "Registered Vehicle Scrapping Facility", "RVSF Setup"]}
        url="https://eprnexuss.com/blog/rvsf-approvals"
        type="article"
      />

     

      <main className="container">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          <div>
             <motion.header
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="hero mb-8 md:mb-12"
      >
        <div className="hero-tag">Registered Vehicle Scrapping Facility</div>
        <h1>Registered Vehicle Scrapping Facility – Approvals Guide</h1>
        <p className="punch">The right scrapping facility does more than dismantle vehicles — it builds trust, improves recovery, and creates a clean buying and selling engine for scrap.</p>
      </motion.header>
          
          {/* Main Content Body */}
          <article className="content-area">
            <motion.section
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-8"
            >
              <p>At a modern <strong>registered vehicle scrapping facility</strong>, the buying and selling process is not random. It is built on a clean system that identifies the vehicle, verifies ownership, removes polluting components safely, and separates what can be recycled, resold, or responsibly disposed of.</p>
              <p>The business model is broader than metal recovery. A well-run plant can sell ferrous scrap, non-ferrous scrap, reusable components, recovered plastics, glass, rubber, and other sorted materials.</p>
            </motion.section>

            <motion.section
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-8"
            >
              <h2>How the buying and selling workflow works</h2>
              <p>The first step is intake. The vehicle owner or seller brings the end-of-life vehicle to the facility with the required documents. Once ownership is verified, the plant inspects the vehicle, estimates recoverable value, and records the unit in the system.</p>
            </motion.section>

            <section className="mb-8">
              <motion.h2
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                Data-driven visuals
              </motion.h2>
              
              <div className="grid gap-6">
                <motion.div
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="chart-card"
                >
                  <div className="chart-title">Revenue mix by recovered material</div>
                  <div className="chart-outer-container">
                    <div className="chart-wrap small"><canvas ref={revMixRef} /></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.15)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="chart-card"
                >
                  <div className="chart-title">Operational flow: from intake to sale</div>
                  <div className="chart-outer-container">
                    <div className="chart-wrap"><canvas ref={processFlowRef} /></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="chart-card"
                >
                  <div className="chart-title">Buyer demand by channel</div>
                  <div className="chart-outer-container">
                    <div className="chart-wrap small"><canvas ref={buyerMixRef} /></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.25)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="chart-card"
                >
                  <div className="chart-title">Manual vs digital documentation time</div>
                  <div className="chart-outer-container">
                    <div className="chart-wrap"><canvas ref={docTimeRef} /></div>
                  </div>
                </motion.div>
              </div>
            </section>

            <motion.section
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-8"
            >
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
            </motion.section>

            <motion.section
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-8"
            >
              <h2>Case study: how one facility improved recovery</h2>
              <div className="case-study">
                <h3>Structured buying and selling workflow optimization</h3>
                <p>The plant introduced a structured buying and selling workflow. Every vehicle received a digital intake record, materials were sorted into separate lot codes, reusable components were graded before sale, and scrap buyers were segmented by material type.</p>
                <div className="case-metrics">
                  <div className="case-metric"><span className="cm-num block">+28%</span><span className="cm-lbl text-xs">value recovery</span></div>
                  <div className="case-metric"><span className="cm-num block">-41%</span><span className="cm-lbl text-xs">manual rework</span></div>
                </div>
              </div>
            </motion.section>

            <motion.section
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-8"
            >
              <h2>Frequently asked questions</h2>
              <div className="faq-list">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", index * 0.05)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className={`faq-item${openFaq === index ? ' open' : ''}`}
                  >
                    <div className="faq-q" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                      <span>{item.question}</span>
                    </div>
                    <div className="faq-a">{item.answer}</div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Mobile Form Viewport */}
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="block lg:hidden mt-8 p-6 bg-white border border-[var(--border)] rounded-2xl shadow-sm"
            >
              <h3 className="font-bold text-lg mb-4 text-[var(--ink)]">Connect With Our Team</h3>
              <StickyContactForm />
            </motion.div>
          </article>
          </div>

          {/* Sidebar Column */}
          <aside className="hidden lg:block shrink-0 w-[320px]">
            <div className="sticky top-[86px] px-2">
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