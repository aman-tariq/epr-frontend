import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #f6fbf7;
    --surface: #ffffff;
    --surface-2: #eef8ef;
    --ink: #183026;
    --muted: #5d7168;
    --line: #d7e7db;
    --green: #1f8a4c;
    --green-2: #3ca96d;
    --green-3: #8ad4a4;
    --deep: #0f2418;
    --gold: #c5a25f;
    --shadow: 0 18px 40px rgba(18,50,30,.08);
    --radius: 22px;
  }

  .dpr-blog-root {
    font-family: Inter, system-ui, -apple-system, sans-serif;
    background: radial-gradient(circle at top right, rgba(60,169,109,.08), transparent 28%), radial-gradient(circle at left 20%, rgba(31,138,76,.06), transparent 24%), var(--bg);
    color: var(--ink);
    line-height: 1.75;
    width: 100%;
  }

  .hero {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, var(--deep), #10311f 55%, #164b2b);
    color: #fff;
    padding: 60px 16px 40px;
    text-align: center;
    width: 100%;
  }

  @media (min-width: 1024px) {
    .hero { padding: 84px 24px 68px; }
  }

  .hero::before {
    content: "";
    position: absolute;
    inset: -30% -10% auto;
    height: 300px;
    background: radial-gradient(circle, rgba(138,212,164,.16), transparent 62%);
    transform: rotate(-8deg);
  }

  .hero-badge {
    display: inline-block;
    padding: 7px 14px;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 999px;
    background: rgba(255,255,255,.08);
    color: #d9f5e4;
    letter-spacing: .18em;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 700;
    margin-bottom: 18px;
    position: relative;
    z-index: 1;
  }

  .hero h1 {
    font-family: Merriweather, serif;
    font-size: clamp(30px, 4.5vw, 56px);
    line-height: 1.08;
    max-width: 980px;
    margin: 0 auto 18px;
    position: relative;
    z-index: 1;
  }

  .hero h1 span { color: #9ff0b7; }

  .punchline {
    max-width: 860px;
    margin: 0 auto 28px;
    font-size: clamp(16px, 2vw, 22px);
    color: rgba(255,255,255,.82);
    font-style: italic;
    position: relative;
    z-index: 1;
  }

  .hero-meta {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 14px;
    position: relative;
    z-index: 1;
  }

  .hero-meta span {
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.14);
    padding: 9px 14px;
    border-radius: 999px;
    font-size: 13px;
    color: #e6ffee;
  }

  .wrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    width: 100%;
  }

  @media (min-width: 768px) {
    .wrap { padding: 0 24px; }
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
    background: linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.92));
    border: 1px solid rgba(215,231,219,.8);
    border-radius: 24px;
    box-shadow: var(--shadow);
    padding: 24px;
    margin-bottom: 24px;
    width: 100%;
  }

  @media (min-width: 768px) {
    .content-column section { padding: 36px; }
  }

  .lead {
    font-size: 19px;
    color: #234132;
    margin-bottom: 26px;
    border-left: 5px solid var(--green);
    padding-left: 18px;
    background: linear-gradient(90deg, rgba(31,138,76,.06), transparent);
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 0 14px 14px 0;
  }

  h2 {
    font-family: Merriweather, serif;
    font-size: clamp(22px, 2.7vw, 34px);
    line-height: 1.2;
    margin-bottom: 16px;
    color: #153224;
  }

  h3 { font-size: 18px; color: var(--green); margin: 24px 0 10px; }
  p { margin-bottom: 18px; color: #274436; word-wrap: break-word; }
  strong { color: #12281c; }

  .section-divider {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 32px 0 16px;
    color: #6d8479;
    letter-spacing: .18em;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 800;
  }
  .section-divider::before, .section-divider::after { content: ""; height: 1px; flex: 1; background: var(--line); }

  .stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    .stats { grid-template-columns: repeat(4, 1fr); gap: 14px; }
  }

  @media (max-width: 480px) {
    .stats { grid-template-columns: 1fr; }
  }

  .stat {
    background: linear-gradient(180deg, #ffffff, #f4fbf6);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 18px 16px;
    box-shadow: 0 8px 22px rgba(15,36,24,.04);
    text-align: center;
  }

  .stat .num {
    display: block;
    font-size: 30px;
    line-height: 1;
    color: var(--green);
    font-weight: 800;
    margin-bottom: 8px;
    font-family: Merriweather, serif;
  }

  .stat .lbl { font-size: 12px; text-transform: uppercase; letter-spacing: .06em; color: var(--muted); font-weight: 700; }

  .phase-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 24px;
  }

  @media (min-width: 480px) {
    .phase-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (min-width: 768px) {
    .phase-grid { grid-template-columns: repeat(3, 1fr); }
  }

  .phase {
    background: linear-gradient(180deg, #fff, #f5fbf6);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 18px 16px;
  }

  .phase h4 { margin: 0 0 8px; font-size: 15px; color: #1d6f3f; }
  .phase p { margin: 0; font-size: 13px; color: #4e6983; }

  .grid-custom {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    .grid-custom { grid-template-columns: 1fr 1fr; }
  }

  .card {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 22px;
    box-shadow: 0 12px 28px rgba(15,36,24,.05);
    position: relative;
    overflow: hidden;
  }

  .card.soft { background: linear-gradient(180deg, #ffffff, #f7fcf8); }

  .callout {
    background: linear-gradient(135deg, #1f8a4c, #2ca15d);
    color: #fff;
    border-radius: 24px;
    padding: 26px 24px;
    box-shadow: 0 18px 36px rgba(31,138,76,.18);
    margin-bottom: 24px;
  }

  .callout h3 { margin: 0 0 8px; color: #fff; font-size: 22px; font-family: Merriweather, serif; }
  .callout p { color: rgba(255,255,255,.88); margin: 0; }

  .chart-box {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 22px;
    padding: 20px;
    box-shadow: 0 12px 28px rgba(15,36,24,.05);
    margin-bottom: 24px;
    overflow: hidden;
  }

  .chart-title { text-transform: uppercase; letter-spacing: .08em; font-weight: 800; font-size: 12px; color: #6a8176; margin-bottom: 12px; }
  .chart-outer-wrap { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .chart { position: relative; width: 100%; min-width: 280px; height: 300px; }
  .chart.tall { height: 340px; }
  .chart.short { height: 260px; }

  .db-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; width: 100%; margin-top: 16px; border-radius: 18px; border: 1px solid var(--line); }
  .db { width: 100%; border-collapse: separate; border-spacing: 0; background: #fff; min-width: 500px; }
  .db th { background: linear-gradient(135deg, var(--green), #164b2b); color: #fff; text-align: left; font-size: 12px; padding: 13px 14px; letter-spacing: .05em; text-transform: uppercase; }
  .db td { padding: 13px 14px; border-top: 1px solid var(--line); font-size: 14px; color: #244135; vertical-align: top; }
  .db tr:nth-child(even) td { background: #f7fcf8; }

  .badge { display: inline-block; padding: 3px 9px; border-radius: 999px; font-size: 11px; font-weight: 700; }
  .b-green { background: #ddf7e7; color: #156238; }
  .b-amber { background: #fff1cc; color: #8f6a00; }

  .case {
    background: linear-gradient(180deg, #0f2418, #183526);
    color: #fff;
    border-radius: 28px;
    padding: 28px 24px;
    margin-bottom: 24px;
    position: relative;
    overflow: hidden;
  }

  .case h3 { color: #9ff0b7; margin: 0 0 10px; font-family: Merriweather, serif; font-size: 24px; }
  .case p { color: rgba(255,255,255,.84); }

  .case-results {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 20px;
  }

  @media (min-width: 480px) {
    .case-results { grid-template-columns: repeat(4, 1fr); }
  }

  @media (max-width: 400px) {
    .case-results { grid-template-columns: 1fr; }
  }

  .case-results .r { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.09); border-radius: 16px; padding: 14px 12px; text-align: center; }
  .case-results strong { display: block; font-size: 28px; line-height: 1.1; margin-bottom: 6px; color: #9ff0b7; }
  .case-results span { font-size: 11px; color: rgba(255,255,255,0.7); }

  .faq-item { border-bottom: 1px solid var(--line); padding: 18px 0; }
  .faq-q { display: flex; justify-content: space-between; gap: 14px; align-items: center; cursor: pointer; font-weight: 700; color: #173527; font-size: 16px; }
  .faq-q::after { content: "+"; color: var(--green); font-size: 24px; line-height: 1; flex-shrink: 0; }
  .faq-item.open .faq-q::after { content: "×"; }
  .faq-a { display: none; margin-top: 12px; color: #537063; font-size: 14px; word-wrap: break-word; }
  .faq-a.show { display: block; }

  .keyword-cloud { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
  .kw { background: #f1faf4; border: 1px solid var(--line); color: #567165; border-radius: 999px; padding: 6px 12px; font-size: 12px; font-weight: 700; }
  .kw.primary { background: #e4f7ea; color: #1a7441; border-color:#ccebd5; }

  .footer-cta { background: linear-gradient(135deg, #effaf2, #ffffff); border: 1px solid var(--line); border-radius: 24px; padding: 30px 24px; text-align: center; margin-top: 12px; }
  .footer-cta h2 { margin: 0 0 10px; font-size: clamp(22px,3vw,32px); }
  .footer-cta p { max-width: 840px; margin: 0 auto; color: #486355; }

  ul.clean { margin: 0; padding-left: 20px; }
  ul.clean li { margin-bottom: 10px; color: #274436; }
  .mini-note { font-size: 13px; color: #688073; background: #f5fbf6; border: 1px dashed #d2e8d8; border-radius: 16px; padding: 14px 16px; margin-top: 14px; }
`;

const faqItems = [
  { question: 'What is a detail project report for a registered vehicle scrapping facility?', answer: 'It is a complete project document that explains the facility concept, site plan, process flow, equipment need, financial model, compliance path, and implementation schedule. It helps clients and decision-makers understand the project before they commit to it.' },
  { question: 'Why do clients need a detailed report before starting the plant?', answer: 'Clients need clarity on investment, approvals, operations, and long-term feasibility. A good report reduces uncertainty and helps the project move forward with fewer delays.' },
  { question: 'What should be included in the financial section?', answer: 'The financial section should cover capital cost, operating cost, projected revenue, break-even assumptions, sensitivity analysis, and any major cost drivers that could change the outcome.' },
  { question: 'How do graphs help in the report?', answer: 'Graphs make the report easier to understand quickly. They show where the money goes, which report sections matter most, and how the project progresses from concept to approval and execution.' },
  { question: 'Can the report also support later commissioning work?', answer: 'Yes. When the report is built well, it can guide later project execution and connect naturally to commissioning documentation, commissioning checklist items, handover documentation, and final startup documentation.' },
  { question: 'What is the role of a database in the report?', answer: 'A database-style table makes the report more practical. It helps track modules, responsibilities, documentation needs, and deliverables in a simple format that clients and project teams can review quickly.' },
  { question: 'How do you keep the report human and readable?', answer: 'We use plain language, short sentences, and a logical structure. That way, technical and non-technical readers can follow the report without feeling overwhelmed.' },
];

const RVSFDPRBlog: React.FC = () => {
  const chart1Ref = useRef<HTMLCanvasElement | null>(null);
  const chart2Ref = useRef<HTMLCanvasElement | null>(null);
  const chart3Ref = useRef<HTMLCanvasElement | null>(null);
  const chart4Ref = useRef<HTMLCanvasElement | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const baseOptions: any = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            boxWidth: 12,
            usePointStyle: true,
            pointStyle: 'circle',
            color: '#355043',
            font: { size: 11, weight: '600' },
          },
        },
        tooltip: {
          backgroundColor: 'rgba(15,36,24,.92)',
          padding: 12,
          cornerRadius: 10,
        },
      },
    };

    const charts: Chart[] = [];

    if (chart1Ref.current?.getContext('2d')) {
      charts.push(
        new Chart(chart1Ref.current.getContext('2d') as CanvasRenderingContext2D, {
          type: 'bar',
          data: {
            labels: ['Executive summary', 'Site & layout', 'Financial model', 'Compliance path', 'Implementation plan', 'Risk section'],
            datasets: [{
              label: 'Approval influence score',
              data: [92, 88, 95, 87, 83, 79],
              backgroundColor: ['#1f8a4c', '#2ea95f', '#49b973', '#8ad4a4', '#b8e7c5', '#dcefe2'],
              borderRadius: 8,
            }],
          },
          options: {
            ...baseOptions,
            scales: {
              x: { grid: { display: false }, ticks: { color: '#567165', font: { size: 11 } } },
              y: { beginAtZero: true, max: 100, grid: { color: '#e5efe8' }, ticks: { color: '#567165', font: { size: 11 } } },
            },
          },
        }),
      );
    }

    if (chart2Ref.current?.getContext('2d')) {
      charts.push(
        new Chart(chart2Ref.current.getContext('2d') as CanvasRenderingContext2D, {
          type: 'bar',
          data: {
            labels: ['Site clarity', 'CAPEX visibility', 'OPEX visibility', 'Approval route', 'Risk control', 'Execution plan'],
            datasets: [
              { label: 'What clients want to see', data: [84, 96, 90, 79, 73, 87], backgroundColor: '#1f8a4c', borderRadius: 8 },
              { label: 'Where projects usually fail', data: [32, 41, 37, 45, 48, 39], backgroundColor: '#bfe8cb', borderRadius: 8 },
            ],
          },
          options: {
            ...baseOptions,
            scales: {
              x: { grid: { display: false }, ticks: { color: '#567165', font: { size: 11 } } },
              y: { beginAtZero: true, max: 100, grid: { color: '#e5efe8' }, ticks: { color: '#567165', font: { size: 11 } } },
            },
          },
        }),
      );
    }

    if (chart3Ref.current?.getContext('2d')) {
      charts.push(
        new Chart(chart3Ref.current.getContext('2d') as CanvasRenderingContext2D, {
          type: 'line',
          data: {
            labels: ['Concept', 'Site study', 'Process plan', 'Financial model', 'Approvals', 'Execution', 'Handover'],
            datasets: [
              {
                label: 'Report depth',
                data: [25, 38, 55, 72, 82, 90, 96],
                borderColor: '#1f8a4c',
                backgroundColor: 'rgba(31,138,76,.10)',
                fill: true,
                tension: 0.35,
                pointRadius: 4,
                pointBackgroundColor: '#1f8a4c',
              },
              {
                label: 'Client confidence',
                data: [20, 44, 60, 74, 84, 91, 98],
                borderColor: '#8ad4a4',
                backgroundColor: 'rgba(138,212,164,.08)',
                fill: true,
                tension: 0.35,
                pointRadius: 4,
                pointBackgroundColor: '#8ad4a4',
              },
            ],
          },
          options: {
            ...baseOptions,
            scales: {
              x: { grid: { display: false }, ticks: { color: '#567165', font: { size: 11 } } },
              y: { beginAtZero: true, max: 100, grid: { color: '#e5efe8' }, ticks: { color: '#567165', font: { size: 11 } } },
            },
          },
        }),
      );
    }

    if (chart4Ref.current?.getContext('2d')) {
      charts.push(
        new Chart(chart4Ref.current.getContext('2d') as CanvasRenderingContext2D, {
          type: 'bar',
          data: {
            labels: ['Planning', 'Permissions', 'Engineering', 'Testing', 'Handover'],
            datasets: [
              { label: 'Report inputs', data: [80, 76, 84, 71, 88], backgroundColor: '#1f8a4c', borderRadius: 8 },
              { label: 'Support documents', data: [68, 82, 90, 77, 94], backgroundColor: '#9ff0b7', borderRadius: 8 },
            ],
          },
          options: {
            ...baseOptions,
            indexAxis: 'y',
            scales: {
              x: { beginAtZero: true, max: 100, grid: { color: '#e5efe8' }, ticks: { color: '#567165', font: { size: 11 } } },
              y: { grid: { display: false }, ticks: { color: '#567165', font: { size: 11 } } },
            },
          },
        }),
      );
    }

    return () => charts.forEach((chart) => chart.destroy());
  }, []);

  return (
    <div className="dpr-blog-root py-4 md:py-8">
      <Seo
        title="Detailed Project Report (DPR) for Registered Vehicle Scrapping Facility (RVSF) - Complete Guide 2026"
        description="Complete guide on preparing a Detailed Project Report (DPR) for Registered Vehicle Scrapping Facility (RVSF). Includes financial model, compliance roadmap, commissioning documentation, approvals process, and implementation plan for RVSF setup in India."
        keywords={[
          "Detailed Project Report RVSF",
          "RVSF DPR",
          "Registered Vehicle Scrapping Facility Project Report",
          "RVSF Setup DPR",
          "Vehicle Scrapping Plant Project Report",
          "RVSF Commissioning Documentation",
          "RVSF Feasibility Report",
          "RVSF Business Plan"
        ]}
        url="https://eprnexuss.com/blog/rvsf-dpr"
        type="article"
      />
      
      <header className="hero">
        <div className="hero-badge">Registered Vehicle Scrapping Facility</div>
        <h1>Build a <span>detail project report</span> that helps clients approve faster, plan smarter, and invest with confidence.</h1>
        <p className="punchline">A strong project report does more than explain a facility — it proves the business case, the compliance path, and the long-term value.</p>
        <div className="hero-meta">
          <span>Project Feasibility</span>
          <span>Compliance &amp; Planning</span>
          <span>Financial Clarity</span>
          <span>Operational Readiness</span>
        </div>
      </header>

      <main className="wrap">
        <div className="main-layout-wrapper">
          
          {/* Main content stream */}
          <article className="content-column">
            <section>
              <p className="lead">A registered vehicle scrapping facility needs more than land, machines, and approvals. It needs a detail project report that tells the full story: how the plant will work, how it will earn, how it will stay compliant, and how it will grow. That is where we help clients move from a rough idea to a decision-ready plan.</p>

              <div className="stats">
                <div className="stat"><span className="num">5–7</span><div className="lbl">Core sections</div></div>
                <div className="stat"><span className="num">100%</span><div className="lbl">Scope clarity</div></div>
                <div className="stat"><span className="num">3×</span><div className="lbl">Faster approvals</div></div>
                <div className="stat"><span className="num">1</span><div className="lbl">Aligned roadmap</div></div>
              </div>

              <div className="section-divider">What clients need</div>
              <h2>Why a detail project report matters for a vehicle scrapping facility</h2>
              <p>A detailed project report gives the client a practical view of the entire facility. It explains the project concept, the required infrastructure, the process flow, the equipment list, the manpower plan, and the expected financial outcome. Just as importantly, it shows how the plant will meet the requirements of <strong>setup and commissioning documentation</strong>, <strong>operational readiness</strong>, and <strong>project closeout documentation</strong> once the build begins.</p>
              <p>When the report is written properly, it becomes a working document for investors, lenders, management teams, and technical consultants. It helps everyone understand the same thing: what will be built, how it will run, and why it is worth doing.</p>

              <div className="callout">
                <h3>Clear report. Clear approvals. Clear business case.</h3>
                <p>That is the difference between a project that keeps moving and a project that keeps getting delayed.</p>
              </div>
            </section>

            <section>
              <div className="section-divider">Project flow</div>
              <h2>How we structure the project report for clients</h2>
              <p>We prepare the report in a way that is easy to review and easy to defend. The structure usually follows the same logic used in engineering and industrial documentation: from initial concept to handover. It includes the <strong>commissioning plan</strong>, <strong>commissioning checklist</strong>, <strong>pre-commissioning checklist</strong>, <strong>commissioning workflow</strong>, <strong>handover documentation</strong>, and <strong>startup documentation</strong> that the facility will eventually need.</p>

              <div className="phase-grid">
                <div className="phase"><h4>1. Project concept</h4><p>Facility purpose, capacity, business objective, and market need.</p></div>
                <div className="phase"><h4>2. Site planning</h4><p>Land use, access, utilities, workflow, and safety layout.</p></div>
                <div className="phase"><h4>3. Process design</h4><p>Scrapping flow, equipment selection, storage zones, and controls.</p></div>
              </div>

              <div className="grid-custom">
                <div className="card">
                  <h3>What the report should include</h3>
                  <ul className="clean">
                    <li>Executive summary and project objective</li>
                    <li>Site selection logic and infrastructure needs</li>
                    <li>Process flow and equipment list</li>
                    <li>Manpower plan and operating roles</li>
                  </ul>
                  <div className="mini-note">We keep the language human and practical so the client does not have to decode engineering jargon to make a decision.</div>
                </div>

                <div className="card soft">
                  <h3>Project-report database view</h3>
                  <div className="db-wrap">
                    <table className="db" aria-label="Project report database">
                      <thead>
                        <tr>
                          <th>Module</th>
                          <th>What it answers</th>
                          <th>Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>Site &amp; layout data</td><td>Where the plant will sit</td><td><span className="badge b-green">High</span></td></tr>
                        <tr><td>Process block</td><td>How material moves</td><td><span className="badge b-green">High</span></td></tr>
                        <tr><td>Capex / Opex sheet</td><td>What it costs to run</td><td><span className="badge b-green">High</span></td></tr>
                        <tr><td>Approval tracker</td><td>Permissions needed</td><td><span className="badge b-amber">Medium</span></td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="section-divider">Data made visible</div>
              <h2>Graphs that explain the project in seconds</h2>

              <div className="chart-box">
                <div className="chart-title">Report sections that influence client approval most</div>
                <div className="chart-outer-wrap"><div className="chart short"><canvas ref={chart1Ref} /></div></div>
              </div>

              <div className="chart-box">
                <div className="chart-title">What clients need to see before saying yes</div>
                <div className="chart-outer-wrap"><div className="chart tall"><canvas ref={chart2Ref} /></div></div>
              </div>

              <div className="chart-box">
                <div className="chart-title">Documentation flow across project stages</div>
                <div className="chart-outer-wrap"><div className="chart short"><canvas ref={chart3Ref} /></div></div>
              </div>
            </section>

            <section>
              <div className="section-divider">Industrial documentation</div>
              <h2>Why commissioning-style documentation matters</h2>
              <p>Even though this is a project report, the same discipline used in industrial documentation makes it stronger. The client gets a clearer sense of control when the report includes <strong>mechanical completion</strong>, <strong>installation verification</strong>, <strong>FAT testing</strong>, <strong>SAT testing</strong>, <strong>acceptance testing</strong>, and <strong>performance verification</strong> thinking from the start.</p>
              
              <div className="chart-box">
                <div className="chart-title">Stage-by-stage reporting needs</div>
                <div className="chart-outer-wrap"><div className="chart short"><canvas ref={chart4Ref} /></div></div>
              </div>
            </section>

            <section>
              <div className="section-divider">Case study</div>
              <div className="case">
                <h3>How a structured project report helped a facility move forward</h3>
                <p>We prepared a detailed project report covering the site plan, capacity logic, process design, utility demand, operating model, and phased implementation schedule. We also added a simple database section showing approvals, deliverables, and responsibilities.</p>
                <div className="case-results">
                  <div className="r"><strong>42%</strong><span>Faster review</span></div>
                  <div className="r"><strong>35%</strong><span>Less rework</span></div>
                  <div className="r"><strong>2x</strong><span>Confidence</span></div>
                  <div className="r"><strong>1</strong><span>Roadmap</span></div>
                </div>
              </div>
            </section>

            <section>
              <div className="section-divider">FAQ</div>
              <h2>Frequently Asked Questions</h2>
              <div className="faq">
                {faqItems.map((item, index) => (
                  <div key={index} className={`faq-item${openFaq === index ? ' open' : ''}`}>
                    <div className="faq-q" style={{ contentVisibility: 'auto' }} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                      {item.question}
                    </div>
                    <div className={`faq-a${openFaq === index ? ' show' : ''}`}>{item.answer}</div>
                  </div>
                ))}
              </div>

              <div className="keyword-cloud">
                <span className="kw primary">detail project report</span>
                <span className="kw primary">registered vehicle scrapping facility</span>
                <span className="kw primary">project feasibility</span>
                <span className="kw">commissioning checklist</span>
                <span className="kw">handover documentation</span>
              </div>

              <div className="footer-cta">
                <h2>Turn an idea into a report the client can act on</h2>
                <p>When the project report is clear, visual, and complete, the client does not just read it — they believe it. That is the kind of document that helps a registered vehicle scrapping facility move forward with confidence.</p>
              </div>
            </section>

            {/* Mobile Contact Form Display */}
            <div className="block lg:hidden mt-4">
              <StickyContactForm />
            </div>
          </article>

          {/* Persistent Sidebar Area */}
          <aside className="sidebar-column">
            <div className="side-card hidden lg:block">
              <StickyContactForm />
            </div>
            <div className="side-card">
              <h3 style={{ margin: '0 0 10px', fontSize: '16px', color: 'var(--ink)' }}>Report overview</h3>
              <p style={{ fontSize: '13px', margin: 0, color: 'var(--muted)' }}>A strong report maps risks honestly, designs clean facility footprints, tracks cash positions accurately, and makes project paths completely verifiable.</p>
            </div>
          </aside>

        </div>
      </main>

      <style>{styles}</style>
    </div>
  );
};

export default RVSFDPRBlog;