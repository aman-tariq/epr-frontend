import React, { FormEvent, useState } from 'react';
import StickyContactForm from '@/components/StickyContactForm';
export default function PoweringTheFutureLiIonGuide() {
  const [submitted, setSubmitted] = useState(false);

  const submitConsultation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <title>Powering the Future: The Ultimate Guide to Licenses & Certifications for Lithium-Ion Battery Manufacturing</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />

      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --g950: #06261a;
          --g900: #0a3925;
          --g800: #105338;
          --g700: #176b45;
          --g500: #43a96d;
          --g100: #eaf7ef;
          --b800: #123f69;
          --b500: #1e6da8;
          --b100: #edf6ff;
          --ink: #17211c;
          --muted: #5f6d65;
          --line: #dbe7df;
          --page: #f5f8f6;
          --white: #fff;
          --shadow: 0 14px 40px rgba(10,52,35,.08);
          --radius: 20px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: var(--page);
          color: var(--ink);
          font-family: Inter, Segoe UI, Roboto, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.75;
        }
        a { color: var(--b500); text-decoration: none; }
        a:hover { text-decoration: underline; }

        .page-wrap {
          width: min(1440px, 96%);
          margin: 0 auto;
          padding: 24px 0 40px;
        }

        /* ===== HERO + FORM GRID ===== */
        .hero-form-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 28px;
          align-items: start;
          margin-bottom: 36px;
        }

        .hero {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          color: #fff;
          min-height: 380px;
          top:6.5rem;
          background:
            radial-gradient(circle at 88% 18%, rgba(84,198,131,.25), transparent 25%),
            radial-gradient(circle at 15% 100%, rgba(42,117,181,.2), transparent 30%),
            linear-gradient(135deg, #061e14, #0c4b30 55%, #123e63);
        }
        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: radial-gradient(rgba(255,255,255,.1) 1px, transparent 1px);
          background-size: 26px 26px;
          opacity: .5;
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          padding: 48px 40px 52px;
        }
        .eyebrow {
          display: inline-flex;
          padding: 7px 14px;
          border: 1px solid rgba(255,255,255,.28);
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: .08em;
          font-size: 12px;
          font-weight: 700;
          color: #dff8ea;
          background: rgba(255,255,255,.06);
          margin-bottom: 20px;
        }
        .hero h1 {
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.12;
          letter-spacing: -.03em;
          max-width: 620px;
          margin-bottom: 16px;
          font-weight: 700;
        }
        .hero h1 span { color: #9ae5b8; }
        .meta {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 12px;
          font-size: 13px;
          color: #cfe3d8;
          margin-top: 8px;
        }
        .lead {
          max-width: 540px;
          color: #e3efe8;
          font-size: 16px;
          line-height: 1.7;
          margin-top: 18px;
        }

        /* ===== SIDEBAR FORM ===== */
        .sticky-sidebar {
          position: sticky;
          top: 24px;
          z-index: 20;
          height: fit-content;
        }
        .sidebar-card {
          background: linear-gradient(180deg, #eff9f2 0%, #ffffff 100%);
          border: 1px solid #bcd2c6;
          border-radius: 24px;
          box-shadow: 0 14px 40px rgba(17,55,45,.12);
          padding: 28px 24px;
        }
        .sidebar-accent {
          height: 5px;
          border-radius: 999px;
          background: linear-gradient(90deg, #1a925f, #145da0);
          margin-bottom: 18px;
        }
        .sidebar-card h2 {
          font-size: 18px;
          font-weight: 700;
          color: #132f26;
          margin-bottom: 16px;
        }
        .phone-btn {
          display: inline-flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 12px;
          background: #238451;
          color: #fff;
          font-weight: 700;
          padding: 14px 16px;
          text-decoration: none;
          transition: background .2s;
          margin-bottom: 16px;
        }
        .phone-btn:hover { background: #1d7045; text-decoration: none; color: #fff; }
        .sidebar-card input,
        .sidebar-card textarea {
          width: 100%;
          border: 1px solid #cfe1d9;
          border-radius: 12px;
          padding: 13px 15px;
          font-size: 15px;
          color: #17372e;
          background: #fff;
          outline: none;
          margin-bottom: 12px;
          transition: border-color .2s, box-shadow .2s;
        }
        .sidebar-card input:focus,
        .sidebar-card textarea:focus {
          border-color: #1a925f;
          box-shadow: 0 0 0 4px rgba(26,146,95,.1);
        }
        .sidebar-card textarea {
          resize: none;
          min-height: 100px;
        }
        .submit-btn {
          width: 100%;
          border: 0;
          border-radius: 12px;
          background: #238f59;
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          padding: 14px;
          cursor: pointer;
          transition: background .2s;
        }
        .submit-btn:hover { background: #1c764a; }
        .wa-float {
          display: flex;
          justify-content: center;
          margin-top: 18px;
        }
        .wa-float a {
          display: flex;
          width: 52px;
          height: 52px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #1fd268;
          color: #fff;
          box-shadow: 0 10px 24px rgba(31,210,104,.25);
          transition: transform .2s;
        }
        .wa-float a:hover { transform: scale(1.08); }
        .form-note {
          text-align: center;
          font-size: 12px;
          color: #64766f;
          margin-top: 14px;
          line-height: 1.5;
        }
        .success-msg {
          margin-top: 12px;
          padding: 12px;
          border-radius: 10px;
          background: #ecfdf5;
          color: #047857;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
        }

        /* ===== MAIN CONTENT ===== */
        .content-shell {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 28px;
          box-shadow: var(--shadow);
          overflow: hidden;
        }
        .content-inner {
          padding: 40px 48px 56px;
        }

        h2 {
          color: var(--g900);
          font-size: clamp(22px, 2.8vw, 28px);
          line-height: 1.25;
          margin: 36px 0 14px;
          font-weight: 700;
        }
        h3 {
          color: #153f2c;
          font-size: 18px;
          margin: 20px 0 10px;
          font-weight: 700;
        }
        p { margin-bottom: 14px; color: #3d4f47; }
        ul, ol { padding-left: 22px; margin: 10px 0 18px; }
        li { margin: 8px 0; color: #3d4f47; }
        strong { color: #17211c; }

        .intro-lead {
          font-size: 18px;
          color: #4a5c54;
          margin-bottom: 28px;
          line-height: 1.7;
        }

        .warning-box {
          padding: 18px 20px;
          background: #fef2f2;
          border-left: 4px solid #ef4444;
          border-radius: 10px;
          color: #991b1b;
          margin: 24px 0;
          font-size: 15px;
        }

        .nexuss-box {
          background: linear-gradient(135deg, #0a3925, #145b3d);
          color: #fff;
          border-radius: 20px;
          padding: 32px;
          margin: 40px 0;
          box-shadow: 0 16px 40px rgba(10,52,35,.18);
        }
        .nexuss-box h2 {
          color: #fff;
          margin-top: 0;
          font-size: 26px;
        }
        .nexuss-box p { color: #d4e8dc; }
        .nexuss-box h3 { color: #9ae5b8; }
        .nexuss-box strong { color: #fff; }
        .nexuss-box ul { list-style: none; padding: 0; }
        .nexuss-box li {
          display: flex;
          gap: 12px;
          margin-bottom: 18px;
          color: #d4e8dc;
        }
        .nexuss-box .check {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(154,229,184,.2);
          color: #9ae5b8;
          display: grid;
          place-items: center;
          font-size: 12px;
          font-weight: 700;
          margin-top: 2px;
        }
        .nexuss-inner {
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 14px;
          padding: 20px;
          margin-top: 20px;
        }
        .nexuss-inner h4 {
          color: #fff;
          font-size: 16px;
          margin-bottom: 10px;
        }
        .nexuss-inner ul {
          list-style: disc;
          padding-left: 18px;
        }
        .nexuss-inner li {
          display: list-item;
          color: #d4e8dc;
          margin-bottom: 6px;
          font-size: 14px;
        }

        .faq-item {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 18px 20px;
          margin-bottom: 12px;
          box-shadow: 0 4px 12px rgba(8,48,32,.04);
        }
        .faq-item h3 {
          margin: 0 0 8px;
          font-size: 16px;
          color: #173e2c;
        }
        .faq-item p {
          margin: 0;
          font-size: 14px;
          color: #5f6d65;
        }

        .cta-footer {
          background: #061c13;
          color: #cbdad2;
          text-align: center;
          padding: 48px 24px;
          margin-top: 40px;
          border-radius: 0 0 28px 28px;
        }
        .cta-footer h2 {
          color: #fff;
          margin: 0 0 12px;
          font-size: 24px;
        }
        .cta-footer p {
          color: #a8bdb2;
          max-width: 560px;
          margin: 0 auto 24px;
        }
        .cta-btn {
          display: inline-block;
          background: #1a925f;
          color: #fff;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 999px;
          text-decoration: none;
          transition: background .2s;
        }
        .cta-btn:hover {
          background: #157f51;
          text-decoration: none;
          color: #fff;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1100px) {
          .hero-form-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .sticky-sidebar {
            position: static;
            order: -1;
          }
          .hero-inner { padding: 36px 28px 44px; }
          .content-inner { padding: 32px 28px 44px; }
        }

        @media (max-width: 760px) {
          .page-wrap { width: 100%; padding: 12px 10px 28px; }
          .hero { border-radius: 20px; min-height: auto; }
          .hero-inner { padding: 28px 20px 36px; }
          .hero h1 { font-size: 24px; }
          .lead { font-size: 15px; }
          .sidebar-card { border-radius: 18px; padding: 20px 16px; }
          .content-shell { border-radius: 18px; }
          .content-inner { padding: 24px 16px 36px; }
          h2 { font-size: 20px; margin-top: 28px; }
          .nexuss-box { padding: 24px 18px; border-radius: 16px; }
          .nexuss-box h2 { font-size: 22px; }
          .cta-footer { border-radius: 0 0 18px 18px; padding: 36px 18px; }
          .cta-footer h2 { font-size: 20px; }
        }

        @media (max-width: 480px) {
          .hero h1 { font-size: 20px; }
          .eyebrow { font-size: 10px; padding: 5px 10px; }
          .lead { font-size: 14px; }
          .sidebar-card h2 { font-size: 16px; }
          .content-inner { padding: 20px 14px 28px; }
          .intro-lead { font-size: 16px; }
          .faq-item { padding: 14px; }
          .faq-item h3 { font-size: 15px; }
        }
      `}} />

      <div className="container">
        {/* ===== HERO + FORM ===== */}
        <div className="flex flex-col lg:flex-row gap-2 items-stretch mt-10">
          <div>
          {/* HERO */}
          <header className="hero">
            <div className="hero-inner">
              <div className="eyebrow">Manufacturing & Compliance</div>
              <h1>
                Powering the Future: The Ultimate Guide to{' '}
                <span>Licenses & Certifications</span> for Lithium-Ion Battery Manufacturing
              </h1>
              <div className="meta">
                <span>By EPR Nexuss Expert Team</span>
                <span>•</span>
                <span>Updated for 2026</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <p className="lead">
                The global electric vehicle (EV) and consumer electronics boom has turned lithium-ion battery manufacturing into a modern-day gold rush. But unlike the gold rush, you can't just set up a tent and start digging. Navigating the regulatory landscape—specifically mandatory certifications and licensing—is the actual barrier to entry.
              </p>
            </div>
          </header>

          
          
             <br /><br /><br />
        {/* ===== MAIN CONTENT ===== */}
        <div className="content-shell">
          <div className="content-inner">
            <p className="intro-lead">
              The global electric vehicle (EV) and consumer electronics boom has turned lithium-ion battery manufacturing into a modern-day gold rush. But unlike the gold rush, you can't just set up a tent and start digging. Navigating the regulatory landscape—specifically mandatory certifications and licensing—is the actual barrier to entry.
            </p>

            <h2>The Crux of Compliance: Why It's Your Biggest Business Advantage</h2>
            <p>
              Let’s be honest: most entrepreneurs view compliance as a bureaucratic nightmare. However, in the high-stakes world of energy storage, compliance is your shield. Real-world data shows that over <strong>40% of non-certified battery shipments</strong> are rejected at international borders, and domestic uncertified businesses face massive penalties or permanent closure.
            </p>
            <p>
              Certifications like <strong>BIS (Bureau of Indian Standards)</strong> and frameworks like <strong>EPR (Extended Producer Responsibility)</strong> are not just legal hoops. They guarantee safety, prevent catastrophic failures (like thermal runaway), and build immediate trust with EV OEMs, distributors, and consumers.
            </p>

            <h2>Decoding the Licenses: Mandatory vs. Optional</h2>
            <p>To legally manufacture and sell lithium-ion cells or battery packs, you need to navigate several layers of certification:</p>
            <ul>
              <li><strong>BIS Certification (IS 16046):</strong> Mandatory in India. It ensures the cells and batteries meet rigorous safety testing under various temperatures, electrical abuses, and mechanical stresses.</li>
              <li><strong>EPR Registration:</strong> Mandatory under the Battery Waste Management Rules. It holds manufacturers accountable for recycling and managing their batteries at the end of their lifecycle.</li>
              <li><strong>UN 38.3:</strong> Mandatory for the transportation of lithium batteries. If you plan to ship your batteries via air, sea, or land, you cannot avoid this.</li>
              <li><strong>UL Certification (e.g., UL 1642, UL 2054):</strong> Generally optional but highly recommended if you are targeting the North American market or premium global OEMs.</li>
              <li><strong>CE & RoHS:</strong> Crucial for exporting to the European Union, proving health, safety, and environmental protection standards.</li>
            </ul>

            {/* ===== RESTART: WHY OTHERS DELAY YOU ===== */}
            <section id="restart-issues">
              <h2>How EPR Nexuss Helps Clients Restart — While Others Keep Them Waiting</h2>
              <p>
                Many consultants only forward documents and wait for the authority.
                That model creates delay, re-testing cost and idle plant time.
              </p>

              <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "20px" }}>
                {/* LEFT: Typical consultant problems */}
                <div className="card" style={{ padding: "20px", border: "1px solid #fecaca", borderRadius: "16px", background: "linear-gradient(135deg, #fef2f2, #fff)" }}>
                  <h3 style={{ color: "#b91c1c", marginBottom: "12px" }}>What typical consultants do</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: "10px", display: "flex", gap: "8px" }}>
                      <span style={{ color: "#dc2626", fontWeight: 700 }}>✗</span>
                      <span>No factory / gap check before filing</span>
                    </li>
                    <li style={{ marginBottom: "10px", display: "flex", gap: "8px" }}>
                      <span style={{ color: "#dc2626", fontWeight: 700 }}>✗</span>
                      <span>No ownership of lab queries</span>
                    </li>
                    <li style={{ marginBottom: "10px", display: "flex", gap: "8px" }}>
                      <span style={{ color: "#dc2626", fontWeight: 700 }}>✗</span>
                      <span>No mapping of old records vs current rules</span>
                    </li>
                    <li style={{ display: "flex", gap: "8px" }}>
                      <span style={{ color: "#dc2626", fontWeight: 700 }}>✗</span>
                      <span>No clear next-action plan after each observation</span>
                    </li>
                  </ul>
                </div>

                {/* RIGHT: Result of delay */}
                <div className="card" style={{ padding: "20px", border: "1px solid #fde68a", borderRadius: "16px", background: "linear-gradient(135deg, #fffbeb, #fff)" }}>
                  <h3 style={{ color: "#92400e", marginBottom: "12px" }}>What the client loses</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: "10px" }}>• Repeated application rejections</li>
                    <li style={{ marginBottom: "10px" }}>• Extra lab and re-testing fees</li>
                    <li style={{ marginBottom: "10px" }}>• Months of idle plant and staff cost</li>
                    <li>• No clarity on whether restart is even viable</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ===== EPR NEXUSS RESTART METHOD — 5 CARDS ===== */}
            <section id="restart-method" style={{ marginTop: "40px" }}>
              <h2>The EPR Nexuss Restart Method</h2>
              <p>
                Restart is treated as a new operating model — not a repeat of old paperwork.
              </p>

              <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "20px" }}>
                <div className="card" style={{ padding: "20px", border: "1px solid #cce5d5", borderRadius: "16px", background: "#fbfdfc" }}>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#176b45", letterSpacing: ".06em", marginBottom: "8px" }}>STEP 01</div>
                  <h3 style={{ marginBottom: "8px" }}>Restart diagnosis first</h3>
                  <p style={{ margin: 0, fontSize: "14px", color: "#5f6d65" }}>
                    What has changed since the previous setup — capacity, process, site,
                    product, ownership, documents? Assessed before any re-filing.
                  </p>
                </div>

                <div className="card" style={{ padding: "20px", border: "1px solid #cce5d5", borderRadius: "16px", background: "#fbfdfc" }}>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#176b45", letterSpacing: ".06em", marginBottom: "8px" }}>STEP 02</div>
                  <h3 style={{ marginBottom: "8px" }}>Compliance-gap mapping</h3>
                  <p style={{ margin: 0, fontSize: "14px", color: "#5f6d65" }}>
                    Missing consents, expired registrations, process–document mismatch and
                    EPR status listed with a corrective sequence — so money is not spent
                    on the wrong filing order.
                  </p>
                </div>

                <div className="card" style={{ padding: "20px", border: "1px solid #cce5d5", borderRadius: "16px", background: "#fbfdfc" }}>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#176b45", letterSpacing: ".06em", marginBottom: "8px" }}>STEP 03</div>
                  <h3 style={{ marginBottom: "8px" }}>Readiness before re-application</h3>
                  <p style={{ margin: 0, fontSize: "14px", color: "#5f6d65" }}>
                    Samples, test scope, factory evidence and portal data aligned before
                    resubmission — reducing cycles of rejection.
                  </p>
                </div>

                <div className="card" style={{ padding: "20px", border: "1px solid #cce5d5", borderRadius: "16px", background: "#fbfdfc" }}>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#176b45", letterSpacing: ".06em", marginBottom: "8px" }}>STEP 04</div>
                  <h3 style={{ marginBottom: "8px" }}>Active follow-up, not waiting</h3>
                  <p style={{ margin: 0, fontSize: "14px", color: "#5f6d65" }}>
                    Lab coordination, query response and portal tracking owned end-to-end
                    so the file does not sit idle.
                  </p>
                </div>

                <div className="card" style={{ padding: "20px", border: "1px solid #cce5d5", borderRadius: "16px", background: "#fbfdfc" }}>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#176b45", letterSpacing: ".06em", marginBottom: "8px" }}>STEP 05</div>
                  <h3 style={{ marginBottom: "8px" }}>Commercial clarity</h3>
                  <p style={{ margin: 0, fontSize: "14px", color: "#5f6d65" }}>
                    Clients are told what can legally restart only after competent authority
                    decisions — no false promise of fixed approval dates, only improved
                    readiness and a documented action plan.
                  </p>
                </div>

                <div className="card" style={{ padding: "20px", border: "1px solid #a7f3d0", borderRadius: "16px", background: "linear-gradient(135deg, #ecfdf5, #fff)" }}>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#047857", letterSpacing: ".06em", marginBottom: "8px" }}>RESULT</div>
                  <h3 style={{ marginBottom: "8px", color: "#047857" }}>What the client gains</h3>
                  <p style={{ margin: 0, fontSize: "14px", color: "#5f6d65" }}>
                    Less re-testing, fewer wasted application fees, shorter idle plant time,
                    and a restart path based on current rules rather than hope.
                  </p>
                </div>
              </div>
            </section>

            {/* ===== LICENSE & CERTIFICATION SUPPORT — STAGE CARDS ===== */}
            <section id="license-support" style={{ marginTop: "48px" }}>
              <h2>How EPR Nexuss Helps Clients Get Licenses &amp; Certifications</h2>
              <p>
                Licenses and certifications are a sequence — product definition → gap analysis
                → testing → application → follow-up — not a single form at the end.
              </p>

              <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px", marginTop: "20px" }}>
                <div className="card" style={{ padding: "18px", border: "1px solid #dbe7df", borderRadius: "14px", background: "#fff" }}>
                  <h3 style={{ fontSize: "15px", marginBottom: "8px" }}>Scope definition</h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "#5f6d65" }}>
                    Maps product (cell/pack), chemistry, market and activity to the correct
                    BIS, EPR, UN 38.3, CE/RoHS or other pathway.
                  </p>
                </div>

                <div className="card" style={{ padding: "18px", border: "1px solid #dbe7df", borderRadius: "14px", background: "#fff" }}>
                  <h3 style={{ fontSize: "15px", marginBottom: "8px" }}>Gap analysis</h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "#5f6d65" }}>
                    Checks facility, process, quality evidence and documentation against
                    what labs and authorities actually require.
                  </p>
                </div>

                <div className="card" style={{ padding: "18px", border: "1px solid #dbe7df", borderRadius: "14px", background: "#fff" }}>
                  <h3 style={{ fontSize: "15px", marginBottom: "8px" }}>Sample &amp; lab path</h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "#5f6d65" }}>
                    Aligns test plan, coordinates BIS-recognised labs, monitors testing and
                    closes technical queries.
                  </p>
                </div>

                <div className="card" style={{ padding: "18px", border: "1px solid #dbe7df", borderRadius: "14px", background: "#fff" }}>
                  <h3 style={{ fontSize: "15px", marginBottom: "8px" }}>Application quality</h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "#5f6d65" }}>
                    Coherent filings for BIS (CRS), CPCB EPR, SPCB consents — so minor errors
                    do not cause months of delay.
                  </p>
                </div>

                <div className="card" style={{ padding: "18px", border: "1px solid #dbe7df", borderRadius: "14px", background: "#fff" }}>
                  <h3 style={{ fontSize: "15px", marginBottom: "8px" }}>EPR setup</h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "#5f6d65" }}>
                    Registers the producer role under Battery Waste Management Rules and
                    structures ongoing compliance — not only the first certificate.
                  </p>
                </div>

                <div className="card" style={{ padding: "18px", border: "1px solid #dbe7df", borderRadius: "14px", background: "#fff" }}>
                  <h3 style={{ fontSize: "15px", marginBottom: "8px" }}>Transport readiness</h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "#5f6d65" }}>
                    Guides UN 38.3 and logistics-related requirements when batteries will
                    be shipped.
                  </p>
                </div>

                <div className="card" style={{ padding: "18px", border: "1px solid #dbe7df", borderRadius: "14px", background: "#fff" }}>
                  <h3 style={{ fontSize: "15px", marginBottom: "8px" }}>Export add-ons</h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "#5f6d65" }}>
                    Advises CE / RoHS / UL where the target market needs them — without
                    confusing them with Indian mandatory routes.
                  </p>
                </div>

                <div className="card" style={{ padding: "18px", border: "1px solid #dbe7df", borderRadius: "14px", background: "#fff" }}>
                  <h3 style={{ fontSize: "15px", marginBottom: "8px" }}>Restart &amp; recovery</h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "#5f6d65" }}>
                    Clears stalled files, outdated licenses and backlog with a structured
                    corrective plan.
                  </p>
                </div>
              </div>

              {/* Honesty box */}
              <div style={{
                marginTop: "24px",
                padding: "18px 20px",
                background: "#f8fbf9",
                border: "1px solid #dbe7df",
                borderRadius: "14px",
                fontSize: "14px",
                color: "#5f6d65"
              }}>
                <strong style={{ color: "#0a3925" }}>What EPR Nexuss does not claim:</strong>{" "}
                guaranteed government approval or a fixed statutory timeline. The value is
                <strong style={{ color: "#0a3925" }}> readiness</strong> — correct scope,
                complete documents, lab ownership and disciplined follow-up — so capital
                and time are not burned on avoidable rejection cycles.
              </div>
            </section>

            {/* ===== KEY TAKEAWAYS — PILL / SHORT LINES ===== */}
            <section id="takeaways" style={{ marginTop: "40px" }}>
              <h2>Key Takeaways</h2>
              <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
                <div style={{ padding: "14px 18px", borderLeft: "4px solid #176b45", background: "#f4fbf7", borderRadius: "0 12px 12px 0", fontSize: "14px" }}>
                  Entering from another industry without freezing chemistry, format and
                  compliance scope is the fastest way to buy the wrong line and fail the right lab.
                </div>
                <div style={{ padding: "14px 18px", borderLeft: "4px solid #176b45", background: "#f4fbf7", borderRadius: "0 12px 12px 0", fontSize: "14px" }}>
                  Restart fails when old documents are reused without checking what the market
                  and the rules now require.
                </div>
                <div style={{ padding: "14px 18px", borderLeft: "4px solid #176b45", background: "#f4fbf7", borderRadius: "0 12px 12px 0", fontSize: "14px" }}>
                  EPR Nexuss does not “wait with the file”; it builds readiness first, then
                  drives lab and portal closure.
                </div>
                <div style={{ padding: "14px 18px", borderLeft: "4px solid #176b45", background: "#f4fbf7", borderRadius: "0 12px 12px 0", fontSize: "14px" }}>
                  Licenses and certifications are a sequence: product definition → gap analysis
                  → testing → application → follow-up — not a single form at the end.
                </div>
              </div>
            </section>


            <h2>How to Get Your Manufacturing License (The DIY Route)</h2>
            <p>If you attempt to get licensed on your own, the general roadmap looks like this:</p>
            <ol>
              <li><strong>Establish the Facility:</strong> Set up your manufacturing plant adhering to local pollution control board norms.</li>
              <li><strong>In-House Quality Check:</strong> Equip your factory with required testing machinery.</li>
              <li><strong>Sample Testing:</strong> Send your battery samples to a BIS-recognized third-party laboratory. (This often takes 30-45 days).</li>
              <li><strong>Documentation & Application:</strong> File applications on government portals (like the CRS portal for BIS and CPCB portal for EPR) with heavy technical documentation.</li>
              <li><strong>Audit & Grant:</strong> Wait for factory audits, respond to queries raised by officials, and finally receive the license.</li>
            </ol>

            <div className="warning-box">
              <strong>The Reality Check:</strong> Many businesses try this DIY route to save money, only to face continuous rejections due to minor technical errors in applications, mismatched test reports, or uncoordinated lab communications. This wastes months of time and significantly delays time-to-market.
            </div>

            {/* EPR Nexuss Section */}
            <div className="nexuss-box">
              <h2>How EPR Nexuss Transforms the Licensing Journey</h2>
              <p>
                Whether you are starting fresh or trying to restart a stalled lithium-ion battery manufacturing business, <strong>EPR Nexuss</strong> is the definitive game-changer. While other consultants act merely as postmen—forwarding your documents and charging hidden fees—EPR Nexuss acts as your strategic regulatory partner.
              </p>

              <h3>Step-by-Step Execution with EPR Nexuss:</h3>
              <ul>
                <li>
                  <span className="check">✓</span>
                  <div>
                    <strong>Phase 1: Factory & Gap Analysis</strong><br />
                    We don't just file papers. Our engineers visit your site or consult remotely to ensure your production line and raw materials meet standard requirements <em>before</em> applying, preventing costly rejections.
                  </div>
                </li>
                <li>
                  <span className="check">✓</span>
                  <div>
                    <strong>Phase 2: Seamless Lab Coordination</strong><br />
                    We have priority tie-ups with top BIS-recognized labs. We handle the sample dispatch, monitor testing phases, and resolve technical queries instantly.
                  </div>
                </li>
                <li>
                  <span className="check">✓</span>
                  <div>
                    <strong>Phase 3: Flawless Documentation & Application</strong><br />
                    Our legal and technical teams craft zero-error applications for BIS, State Pollution Control Boards, and the CPCB (for EPR).
                  </div>
                </li>
                <li>
                  <span className="check">✓</span>
                  <div>
                    <strong>Phase 4: EPR Compliance & Digital Product Passports (DPP)</strong><br />
                    We set you up with end-to-end waste management strategies and help integrate battery tracking (DPP) to keep you compliant with future global mandates.
                  </div>
                </li>
              </ul>


              <div className="nexuss-inner">
                <h4>Why Clients Choose EPR Nexuss:</h4>
                <ul>
                  <li><strong>Save Capital:</strong> No hidden fees or re-testing costs due to application errors.</li>
                  <li><strong>Save Time:</strong> We cut the standard certification timeline by up to 35% through our streamlined processes.</li>
                  <li><strong>Restart Support:</strong> If your license was suspended or business stalled due to compliance failures, our "Restart & Renew" team clears the backlog, negotiates with regulators, and gets you operational faster.</li>
                </ul>
              </div>
            </div>

            {/* FAQs */}
            <h2>Frequently Asked Questions (FAQs)</h2>

            <div className="faq-item">
              <h3>1. Is BIS certification mandatory for assembling battery packs, even if the cells are imported?</h3>
              <p>Yes. Even if your imported cells are already BIS certified, the final assembled battery pack must undergo its own separate BIS certification (IS 16046) before it can be sold in the Indian market.</p>
            </div>

            <div className="faq-item">
              <h3>2. What happens if I ignore EPR registration?</h3>
              <p>Under the Battery Waste Management Rules, failing to register for EPR or meet recycling targets results in severe environmental compensation penalties, confiscation of goods, and the suspension of your manufacturing license.</p>
            </div>

            <div className="faq-item">
              <h3>3. How long does the entire certification process take?</h3>
              <p>Typically, testing and certification take 45 to 90 days, depending on the lab queue and documentation accuracy. With an expert partner like EPR Nexuss, this timeline is tightly managed to prevent unnecessary delays.</p>
            </div>

            <div className="faq-item">
              <h3>4. Do I need UL certification to sell in India?</h3>
              <p>No, UL is generally a North American standard and is optional in India. However, having UL or CE certification alongside BIS positions your brand as a premium, globally compliant manufacturer, which attracts top-tier EV companies.</p>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="cta-footer">
            <h2>Don't Let Red Tape Slow Down Your Production</h2>
            <p>Partner with EPR Nexuss today. Focus on building world-class batteries, and let us handle the complex web of licenses, compliance, and certifications.</p>
            <a href="#consult" className="cta-btn">Get a Free Compliance Consultation</a>
          </div>
        </div>
        </div>
        {/* RIGHT COLUMN – Sticky Form */}
           <aside className="hidden lg:block shrink-0 w-[320px]">
            <div className="sticky top-28 px-2">
               <StickyContactForm />
            </div>
            
           </aside>
        </div>
                
      </div>
    </>
  );
}