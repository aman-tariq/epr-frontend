export interface ServiceItem {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  details: string;
  features: string[];
  useCases?: string[];
  processSteps?: { title: string; description: string }[];
  compliancePoints?: string[];
  highlights: string[];
  path: string;
  category: "epr-credits" | "sops-kpis-checklists" | "buy-sell" | "recycling-setups" | "business-growth-lead-generation";
  subcategory?: string;
  fullContent?: string;
}

export const services: ServiceItem[] = [
  {
    slug: "epr-plastic",
    title: "EPR Plastic",
    subtitle: "CPCB-aligned plastic waste collection, segregation and recycling.",
    desc: "Integrated management for plastic waste under the Plastic Waste Management Rules, with CPCB-aligned documentation and certified EPR credit issuance.",
    details:
      "Our EPR Plastic service follows Central Pollution Control Board guidance and the Plastic Waste Management Rules, 2016. We manage collection, segregation, recycling and chain-of-custody documentation to support producers and brand owners in meeting compliance requirements.",
    features: ["CPCB-aligned compliance", "Segregation & recycling", "Verifiable EPR reporting"],
    useCases: [
      "Packaging scrap and flexible film recovery",
      "Post-consumer plastic collection from retail outlets",
      "Rigid plastic recycling for consumer goods producers",
    ],
    processSteps: [
      { title: "Collection planning", description: "We design collection routes and material segregation systems aligned with CPCB requirements." },
      { title: "Certified transport", description: "Plastic waste is moved using authorized carriers with tracked chain-of-custody documentation." },
      { title: "Authorized recycling", description: "Materials are delivered to certified recyclers that meet CPCB EPR standards." },
      { title: "Credit reporting", description: "We provide audit-ready EPR credit certificates and compliance reports." },
    ],
    compliancePoints: [
      "CPCB-approved documentation and certificates",
      "Segregation of plastic waste streams at source",
      "Recycling through authorized facilities",
    ],
    highlights: ["Plastic waste traceability", "Certification-ready documentation", "Authorized recycling partners"],
    path: "/services/epr-plastic",
    category: "epr-credits",
    subcategory: "EPR Plastic",
  },
  {
    slug: "epr-electronic",
    title: "EPR Electronic",
    subtitle: "Comprehensive e-waste collection and recycling under EPR guidelines.",
    desc: "End-to-end electronic waste management including collection, dismantling, and material recovery with CPCB-aligned EPR compliance.",
    details:
      "Our EPR Electronic service manages all types of electronic waste from consumer electronics to industrial equipment. We ensure secure collection, data destruction, material recovery, and full EPR documentation in line with CPCB guidelines.",
    features: ["E-waste collection & dismantling", "Data destruction services", "Material recovery"],
    useCases: [
      "Consumer electronics recycling (phones, laptops, TVs)",
      "IT asset disposal for businesses",
      "Industrial electronic waste management",
    ],
    processSteps: [
      { title: "Secure collection", description: "We collect e-waste from generators with proper documentation and chain-of-custody tracking." },
      { title: "Data destruction", description: "Sensitive data is securely wiped or physically destroyed before processing." },
      { title: "Dismantling & sorting", description: "Devices are disassembled and components sorted for recycling." },
      { title: "Material recovery", description: "Precious metals, plastics, and other materials are recovered by authorized recyclers." },
      { title: "EPR reporting", description: "We provide certified EPR credits and compliance documentation." },
    ],
    compliancePoints: [
      "E-Waste Management Rules alignment",
      "Authorized dismantlers and recyclers",
      "Data security and privacy compliance",
    ],
    highlights: ["Secure e-waste handling", "Precious metal recovery", "CPCB-approved processes"],
    path: "/services/epr-electronic",
    category: "epr-credits",
    subcategory: "EPR Electronic",
  },
  {
    slug: "epr-tyre",
    title: "EPR Tyre",
    category: "epr-credits",       
  subcategory: "EPR Tyre", 
    subtitle: "Comprehensive end-of-life tyre management and EPR compliance.",
    desc: "Responsible tyre waste collection, material recovery and energy recovery solutions in line with CPCB and EPR requirements.",
    details:
      "Our EPR Tyre service supports producers with tyre waste protocols that align with CPCB guidance. We provide secure collection, retreading, recycling and recovery by authorized processors, backed by documented EPR credit issuance.",
    features: ["Tyre reverse logistics", "Energy recovery pathways", "Regulatory reporting"],
    useCases: [
      "End-of-life passenger and commercial tyres",
      "Retreading and secondary use preparation",
      "Tyre-derived fuel and material recovery operations",
    ],
    processSteps: [
      { title: "Secure pickup", description: "We collect tyres from warehouses, dealers, and reuse centers using documented transport practices." },
      { title: "Sorting and grading", description: "Tyres are graded for reuse, retreading or recycling to maximize material value." },
      { title: "Recovery processing", description: "Recyclers split materials for rubber, steel and textile recovery under CPCB norms." },
      { title: "EPR documentation", description: "We deliver certified records for tyre EPR credit compliance." },
    ],
    compliancePoints: [
      "Authorized end-of-life tyre processors",
      "Documentation for retreading and recycling",
      "Safe handling of tyre-derived fuels and residues",
    ],
    highlights: ["Retreading and recycling", "Pyrolysis-ready processing", "CPCB-approved documentation"],
    path: "/services/epr-tyre",
  },
  {
    slug: "epr-elv",
    title: "EPR ELV",
    subtitle: "Authorized end-of-life vehicle depollution and material recovery.",
    desc: "Complete ELV dismantling, depollution and material recovery consistent with CPCB and environmental norms.",
    details:
      "Our EPR ELV service handles end-of-life vehicles through authorized depollution centers and material recovery facilities. We deliver full documentation and EPR credit support in accordance with CPCB guidelines for vehicle waste handling.",
    features: ["Authorized depollution", "Hazardous fluid recovery", "Material salvage"],
    useCases: [
      "End-of-life car and two-wheeler dismantling",
      "Hazardous fluid and battery removal",
      "Recycling of steel, aluminium and plastic auto parts",
    ],
    processSteps: [
      { title: "Depollution", description: "Our team removes fluids, batteries and hazardous components before dismantling." },
      { title: "Component recovery", description: "Reusable and recyclable parts are sorted for material recovery." },
      { title: "Secure recycling", description: "Vehicles are processed by authorized recyclers in CPCB-approved facilities." },
      { title: "Compliance reporting", description: "We prepare full ELV documentation for regulator review." },
    ],
    compliancePoints: [
      "CPCB-aligned depollution and dismantling procedures",
      "Safe handling of hazardous vehicle materials",
      "Traceable recovery and reporting systems",
    ],
    highlights: ["ELV dismantling compliance", "Metal and plastic recovery", "EPR reporting support"],
    path: "/services/epr-elv",
    category: "epr-credits",
    subcategory: "EPR ELV",
  },
  {
    slug: "epr-used-oil",
    title: "EPR Used Oil",
    subtitle: "Safe collection and recycling of used oil under CPCB and EPR frameworks.",
    desc: "Compliant used oil management, regeneration and disposal with verifiable EPR credits and CPCB-aligned handling.",
    details:
      "Our EPR Used Oil service ensures secure collection, transportation and recovery of spent oil. We partner with CPCB-approved recyclers and provide regulator-ready documentation for producers and industrial generators.",
    features: ["Secure oil logistics", "Re-refining & recovery", "Compliance documentation"],
    useCases: [
      "Industrial engine oil and compressor oil collection",
      "Spent lubricant recovery from service centers",
      "Regeneration and packaging of used oil products",
    ],
    processSteps: [
      { title: "Source collection", description: "Used oil is collected from generators with complete material tracking." },
      { title: "Hazardous handling", description: "Transport and storage meet CPCB safety standards for used oil." },
      { title: "Refining and reuse", description: "Oil is re-refined or repurposed in approved facilities." },
      { title: "Compliance certification", description: "We provide audit-ready EPR documentation for used oil management." },
    ],
    compliancePoints: [
      "CPCB-approved storage and transport",
      "Regulated re-refining pathways",
      "Complete audit trail for used oil disposal",
    ],
    highlights: ["Used oil traceability", "CPCB-approved handling", "Verified EPR credit records"],
    path: "/services/epr-used-oil",
    category: "epr-credits",
    subcategory: "EPR Used Oil",
  },
  {
    slug: "epr-metals",
    title: "EPR Metals",
    subtitle: "Certified metal waste recycling and resource recovery services.",
    desc: "Ferrous and non-ferrous metal waste management with CPCB-aligned recycling and EPR credit support.",
    details:
      "Our EPR Metals service manages scrap metal collection, sorting and authorized recovery. We ensure compliance with CPCB guidelines and provide transparent documentation for EPR credit issuance.",
    features: ["Scrap metal logistics", "Authorized recycling", "Compliance-ready reports"],
    useCases: [
      "Ferrous and non-ferrous scrap collection from industrial sites",
      "Metal recovery from construction and manufacturing waste",
      "Sorting of mixed metal streams for authorized recycling",
    ],
    processSteps: [
      { title: "Scrap assessment", description: "We evaluate metal waste quality and plan recovery routes for efficient processing." },
      { title: "Sorting and grading", description: "Metals are separated and graded for authorized recycling and downstream reuse." },
      { title: "Authorized processing", description: "Materials are delivered to CPCB-approved metal recyclers for recovery." },
      { title: "Reporting", description: "Compliance documentation is created for every recovered metal batch." },
    ],
    compliancePoints: [
      "Traceable metal scrap transportation",
      "Authorized recycler documentation",
      "CPCB-aligned EPR credit reporting",
    ],
    highlights: ["Ferrous and non-ferrous recovery", "Documented waste streams", "EPR-ready delivery"],
    path: "/services/epr-metals",
    category: "epr-credits",
    subcategory: "EPR Metals",
  },
  {
    slug: "epr-battery",
    title: "EPR Battery",
    subtitle: "Safe battery waste collection and CPCB-approved recycling.",
    desc: "End-to-end battery management for lead acid and lithium-ion waste under the Battery Waste Management Rules and CPCB EPR guidance.",
    details:
      "Our EPR Battery service handles all battery waste types with CPCB-aligned safety standards. We manage secure pickup, transport, recycling and material recovery while delivering certified EPR credits and regulator-ready documentation.",
    features: ["Battery reverse logistics", "Hazardous material safety", "Regulatory EPR reporting"],
    useCases: [
      "Lead acid battery returns from UPS and telecom sectors",
      "Lithium-ion battery disposal from EV and consumer electronics",
      "Battery pack recovery for reuse and material separation",
    ],
    processSteps: [
      { title: "Secure collection", description: "We collect spent batteries following battery waste handling rules and safety procedures." },
      { title: "Safe segregation", description: "Batteries are segregated by chemistry and condition for proper processing." },
      { title: "Responsible recycling", description: "Materials are sent to certified facilities for metal recovery and safe disposal." },
      { title: "EPR reporting", description: "We deliver end-to-end documentation for CPCB-compliant battery EPR credits." },
    ],
    compliancePoints: [
      "Battery Waste Management Rules alignment",
      "Hazardous battery handling safety",
      "Documented EPR credit issuance",
    ],
    highlights: ["Lead acid and lithium-ion handling", "Certified recyclers", "Traceable compliance records"],
    path: "/services/epr-battery",
    category: "epr-credits",
    subcategory: "EPR Battery",
  },
  {
    slug: "epr-lithium",
    title: "EPR Lithium",
    subtitle: "Specialized lithium-ion battery waste management and recycling.",
    desc: "Safe handling, recycling, and material recovery of lithium-ion batteries under EPR and environmental regulations.",
    details:
      "Our EPR Lithium service focuses on lithium-ion battery waste from EVs, consumer electronics, and energy storage systems. We provide secure collection, testing, recycling, and EPR credit support with full regulatory compliance.",
    features: ["Lithium battery logistics", "Thermal runaway prevention", "Material recovery"],
    useCases: [
      "EV battery pack recycling",
      "Consumer device battery disposal",
      "Energy storage system waste management",
    ],
    processSteps: [
      { title: "Safe collection", description: "Batteries are collected with safety protocols to prevent thermal runaway." },
      { title: "Condition assessment", description: "Batteries are tested and categorized for recycling or disposal." },
      { title: "Discharge & dismantling", description: "Safe discharge and disassembly of battery packs." },
      { title: "Material recovery", description: "Lithium, cobalt, nickel, and other materials are recovered." },
      { title: "EPR documentation", description: "Certified EPR credits and compliance reports are provided." },
    ],
    compliancePoints: [
      "Battery Waste Management Rules compliance",
      "Hazardous waste handling standards",
      "Material recovery traceability",
    ],
    highlights: ["Lithium-ion battery expertise", "Safe recycling processes", "EPR credit certification"],
    path: "/services/epr-lithium",
    category: "epr-credits",
    subcategory: "EPR Lithium",
  },
  {
    slug: "sops",
    title: "SOPs (Standard Operating Procedures)",
    subtitle: "Comprehensive standard operating procedures for EPR compliance.",
    desc: "Detailed SOPs designed to streamline your EPR operations and ensure consistent compliance across all waste streams.",
    details: "Our SOPs provide step-by-step guidance for collection, segregation, transportation, and recycling processes aligned with CPCB requirements and industry best practices.",
    features: ["Process standardization", "Compliance alignment", "Operational efficiency"],
    highlights: ["Clear process documentation", "CPCB-aligned procedures", "Audit-ready SOPs"],
    path: "/services/sops",
    category: "sops-kpis-checklists",
    subcategory: "SOPs",
  },
  {
    slug: "operationperformancemanagement",
    title: "Operation & Performance Management",
    subtitle: "Operational performance systems, KPI visibility, and process intelligence.",
    desc: "A complete operational performance service that combines KPI dashboards, process control, and continuous improvement for stronger plant operations.",
    details: "Our operation and performance management service builds a performance-first operating system with KPI monitoring, bottleneck tracking, and data-driven decision support.",
    features: ["Performance tracking", "Benchmarking", "Data-driven insights"],
    highlights: ["Real-time KPI dashboards", "Industry benchmarks", "Actionable insights"],
    path: "/services/operationperformancemanagement",
    category: "sops-kpis-checklists",
    subcategory: "Operation & Performance management",
    fullContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Operation and Performance Management</title>
  <style>
    :root{--bg:#07111f;--panel:#0e1b2d;--panel-2:#12233a;--text:#eaf2ff;--muted:#aac0dd;--accent:#6ee7ff;--accent-2:#8bffb0;--accent-3:#ffd36e;--danger:#ff8a8a;--line:rgba(255,255,255,.10);--shadow:0 16px 40px rgba(0,0,0,.28);--radius:24px;}*{box-sizing:border-box}body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:radial-gradient(circle at top left,rgba(110,231,255,.16),transparent 28%),radial-gradient(circle at top right,rgba(139,255,176,.12),transparent 24%),linear-gradient(180deg,#06101d,#091525 40%,#07111f);color:var(--text);line-height:1.65;}.wrap{max-width:1200px;margin:0 auto;padding:28px 18px 64px}.hero{background:linear-gradient(135deg,rgba(18,35,58,.94),rgba(8,18,31,.96));border:1px solid var(--line);border-radius:32px;padding:34px;box-shadow:var(--shadow);overflow:hidden;position:relative;}.hero::after{content:"";position:absolute;inset:auto -80px -120px auto;width:280px;height:280px;border-radius:50%;background:radial-gradient(circle,rgba(110,231,255,.20),transparent 68%);pointer-events:none;}.eyebrow{display:inline-block;padding:8px 14px;border-radius:999px;background:rgba(110,231,255,.12);color:var(--accent);font-size:13px;letter-spacing:.4px;text-transform:uppercase;border:1px solid rgba(110,231,255,.18);}h1{font-size:clamp(2rem,4vw,4rem);line-height:1.05;margin:16px 0 12px}.sub{max-width:820px;color:var(--muted);font-size:1.08rem}.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:24px}.stat{background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:22px;padding:18px;}.stat strong{display:block;font-size:1.5rem;margin-bottom:4px}.section{margin-top:22px}.grid{display:grid;grid-template-columns:1.3fr .9fr;gap:18px;align-items:start}.card{background:linear-gradient(180deg,rgba(18,35,58,.92),rgba(12,24,41,.92));border:1px solid var(--line);border-radius:var(--radius);padding:24px;box-shadow:var(--shadow);}h2{font-size:1.7rem;margin:0 0 12px}h3{font-size:1.08rem;margin:0 0 10px;color:#f4fbff}p{margin:0 0 14px;color:var(--text)}.muted{color:var(--muted)}.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}.chip{padding:8px 12px;border-radius:999px;background:rgba(255,255,255,.05);border:1px solid var(--line);color:var(--muted);font-size:13px;}.list{padding-left:18px;margin:0}.list li{margin:8px 0;color:var(--text)}.chart-box{display:grid;gap:16px}.bar-group{display:grid;gap:12px}.bar-row{display:grid;grid-template-columns:130px 1fr 52px;gap:12px;align-items:center}.label{font-size:14px;color:var(--muted)}.bar{height:14px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden;position:relative;border:1px solid rgba(255,255,255,.08);}.fill{height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--accent),var(--accent-2));}.fill.alt{background:linear-gradient(90deg,var(--accent-3),#ffb86e)}.fill.warn{background:linear-gradient(90deg,#fca5a5,var(--danger))}.pct{font-variant-numeric:tabular-nums;text-align:right;color:#fff}.mini-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.donut-card{background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:22px;padding:18px;}.donut-wrap{display:flex;align-items:center;gap:16px}.ring{width:120px;height:120px;border-radius:50%;background:conic-gradient(var(--accent) 0 72%,rgba(255,255,255,.08) 72% 100%);display:grid;place-items:center;position:relative;flex:0 0 auto;}.ring::after{content:"";width:78px;height:78px;border-radius:50%;background:linear-gradient(180deg,rgba(14,27,45,.98),rgba(8,18,31,.98));border:1px solid var(--line);position:absolute;}.ring span{position:relative;z-index:1;font-size:1.4rem;font-weight:700}.ring2{background:conic-gradient(var(--accent-2) 0 64%,rgba(255,255,255,.08) 64% 100%)}.ring3{background:conic-gradient(var(--accent-3) 0 81%,rgba(255,255,255,.08) 81% 100%)}.ring4{background:conic-gradient(var(--danger) 0 22%,rgba(255,255,255,.08) 22% 100%)}.tag{display:inline-block;font-size:12px;padding:5px 10px;border-radius:999px;background:rgba(110,231,255,.12);color:var(--accent);border:1px solid rgba(110,231,255,.18)}table{width:100%;border-collapse:collapse;margin-top:10px;overflow:hidden;border-radius:18px}th,td{padding:14px 12px;border-bottom:1px solid var(--line);text-align:left;font-size:14px}th{color:#dff6ff;background:rgba(255,255,255,.04)}td{color:var(--text)}.faq details{background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:18px;padding:16px 18px;margin-bottom:12px;}.faq summary{cursor:pointer;font-weight:700;color:#f8fbff}.faq p{margin-top:10px;color:var(--muted)}.timeline{display:grid;gap:12px}.step{display:grid;grid-template-columns:70px 1fr;gap:14px;align-items:start;padding:14px 0;border-bottom:1px solid var(--line)}.step:last-child{border-bottom:none}.num{width:54px;height:54px;border-radius:18px;display:grid;place-items:center;font-weight:800;background:rgba(110,231,255,.12);color:var(--accent);border:1px solid rgba(110,231,255,.2)}.footer-note{margin-top:18px;color:var(--muted);font-size:13px}.featured-image{margin:18px 0 8px;border-radius:28px;overflow:hidden;border:1px solid var(--line);background:linear-gradient(135deg,rgba(110,231,255,.12),rgba(139,255,176,.08)),linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.03));box-shadow:var(--shadow);min-height:280px;position:relative;}.featured-image::before{content:"Featured Image Area";position:absolute;top:18px;left:18px;padding:8px 12px;border-radius:999px;background:rgba(7,17,31,.55);color:var(--accent);font-size:12px;letter-spacing:.4px;text-transform:uppercase;border:1px solid rgba(110,231,255,.18);z-index:2;}.featured-image::after{content:"Add a hero visual, banner, or blog cover image here";position:absolute;left:18px;bottom:18px;padding:10px 14px;border-radius:16px;background:rgba(7,17,31,.62);color:var(--muted);border:1px solid var(--line);max-width:min(92%,520px);z-index:2;}.featured-image .image-placeholder{position:absolute;inset:0;background:radial-gradient(circle at 20% 25%,rgba(255,255,255,.18),transparent 18%),radial-gradient(circle at 80% 30%,rgba(110,231,255,.20),transparent 22%),radial-gradient(circle at 50% 70%,rgba(139,255,176,.16),transparent 24%),linear-gradient(135deg,rgba(11,23,39,.92),rgba(15,29,47,.84));display:grid;place-items:center;}.featured-image .image-placeholder span{display:inline-block;padding:14px 18px;border-radius:18px;border:1px dashed rgba(255,255,255,.18);color:#f4fbff;background:rgba(255,255,255,.04);backdrop-filter:blur(4px);font-weight:600;}@media (max-width:900px){.stats,.grid,.mini-grid{grid-template-columns:1fr}.bar-row{grid-template-columns:92px 1fr 44px}.hero{padding:24px}}
  </style>
</head>
<body>
  <div class="wrap">
    <section class="hero">
      <span class="eyebrow">Business Growth Blog</span>
      <h1>Operation and Performance Management</h1>
      <div class="featured-image" aria-label="Featured image area">
        <div class="image-placeholder">
          <span>Featured Image / Blog Cover Placeholder</span>
        </div>
      </div>
      <p class="sub">Great businesses do not grow by luck. They grow when operations stay organized, performance stays visible, and every team knows exactly what success looks like.</p>
      <div class="stats">
        <div class="stat"><strong>Faster</strong><span class="muted">Decision-making through live tracking and clear KPIs.</span></div>
        <div class="stat"><strong>Smarter</strong><span class="muted">Teams work with data, not assumptions.</span></div>
        <div class="stat"><strong>Lean</strong><span class="muted">Less waste, fewer delays, better resource use.</span></div>
        <div class="stat"><strong>Scalable</strong><span class="muted">Processes stay strong as the business expands.</span></div>
      </div>
    </section>
    <section class="section grid">
      <article class="card">
        <h2>Why operation and performance management matters</h2>
        <p>Operation and performance management is the discipline that keeps a business running smoothly while helping it improve over time. It connects planning, execution, tracking, and correction into one practical system. When this system is strong, teams can spot delays early, reduce errors, improve output, and deliver better customer experiences.</p>
        <p>It is not only about efficiency. It is also about clarity. A business may have talented people and good tools, but without a clear process for monitoring performance, progress becomes hard to measure. Operation and performance management brings structure to everyday work and turns scattered effort into repeatable results.</p>
        <div class="chips">
          <span class="chip">Process control</span>
          <span class="chip">KPI monitoring</span>
          <span class="chip">Resource planning</span>
          <span class="chip">Continuous improvement</span>
          <span class="chip">Quality assurance</span>
        </div>
      </article>
      <aside class="card">
        <h3>Core benefits at a glance</h3>
        <ul class="list">
          <li>Better visibility into daily performance</li>
          <li>Faster response to bottlenecks and issues</li>
          <li>Stronger accountability across teams</li>
          <li>More consistent quality in delivery</li>
          <li>Lower operational cost over time</li>
        </ul>
      </aside>
    </section>
    <section class="section card">
      <h2>Major topics every strong operation should cover</h2>
      <p class="muted">These are the building blocks that help businesses stay efficient, stable, and ready for growth.</p>
      <div class="mini-grid">
        <div class="donut-card"><span class="tag">KPI strategy</span><h3 style="margin-top:12px">Measure what truly matters</h3><p class="muted">Choose the right indicators for speed, quality, cost, and customer experience so performance stays clear and actionable.</p></div>
        <div class="donut-card"><span class="tag">Bottleneck control</span><h3 style="margin-top:12px">Find delays early</h3><p class="muted">Spot where work slows down, why it slows down, and how to remove the block before it affects the whole process.</p></div>
        <div class="donut-card"><span class="tag">Resource planning</span><h3 style="margin-top:12px">Use people and tools wisely</h3><p class="muted">Balance labor, equipment, time, and inventory so the business does not waste capacity or miss demand.</p></div>
        <div class="donut-card"><span class="tag">Quality control</span><h3 style="margin-top:12px">Keep standards steady</h3><p class="muted">Create checks that protect output quality and reduce rework, defects, and customer complaints.</p></div>
      </div>
    </section>
    <section class="section grid">
      <article class="card">
        <h2>The practical side of strong operations</h2>
        <p>Good operations are built on simple habits done well. Leaders define the goal, teams follow the process, and performance gets reviewed often enough to make real changes. This creates a loop of improvement: plan, execute, measure, improve.</p>
        <h3>What high-performing teams usually do</h3>
        <ul class="list">
          <li>Set clear targets for speed, quality, and output</li>
          <li>Track performance every day or every shift</li>
          <li>Review root causes instead of only symptoms</li>
          <li>Train people around standard workflows</li>
          <li>Use dashboards to keep progress visible</li>
        </ul>
      </article>
      <aside class="card">
        <h3>Simple improvement loop</h3>
        <div class="timeline">
          <div class="step"><div class="num">1</div><div><strong>Plan</strong><div class="muted">Set targets, rules, and expected outcomes.</div></div></div>
          <div class="step"><div class="num">2</div><div><strong>Execute</strong><div class="muted">Run the process consistently across teams.</div></div></div>
          <div class="step"><div class="num">3</div><div><strong>Measure</strong><div class="muted">Track performance through dashboards and reports.</div></div></div>
          <div class="step"><div class="num">4</div><div><strong>Improve</strong><div class="muted">Fix bottlenecks and repeat what works.</div></div></div>
        </div>
      </aside>
    </section>
    <section class="section grid">
      <article class="card">
        <h2>Performance dashboard</h2>
        <p class="muted">This visual section shows how a well-managed operation can translate business activity into clear, measurable outcomes.</p>
        <div class="chart-box">
          <div class="bar-group">
            <div class="bar-row"><div class="label">On-time delivery</div><div class="bar"><div class="fill" style="width:92%"></div></div><div class="pct">92%</div></div>
            <div class="bar-row"><div class="label">Process efficiency</div><div class="bar"><div class="fill alt" style="width:84%"></div></div><div class="pct">84%</div></div>
            <div class="bar-row"><div class="label">Quality consistency</div><div class="bar"><div class="fill" style="width:88%"></div></div><div class="pct">88%</div></div>
            <div class="bar-row"><div class="label">Waste reduction</div><div class="bar"><div class="fill warn" style="width:67%"></div></div><div class="pct">67%</div></div>
          </div>
        </div>
      </article>
      <aside class="card">
        <h2>Database snapshot</h2>
        <p class="muted">A simple operations database keeps performance visible and easy to review.</p>
        <table>
          <thead><tr><th>Metric</th><th>Current</th><th>Goal</th></tr></thead>
          <tbody>
            <tr><td>Cycle time</td><td>18 min</td><td>15 min</td></tr>
            <tr><td>Order accuracy</td><td>97%</td><td>99%</td></tr>
            <tr><td>Idle time</td><td>6%</td><td>3%</td></tr>
            <tr><td>Rework rate</td><td>4%</td><td>2%</td></tr>
            <tr><td>Service response</td><td>11 min</td><td>8 min</td></tr>
          </tbody>
        </table>
        <p class="footer-note">This table acts like a mini control room. It helps leaders compare actual performance with the target and act quickly.</p>
      </aside>
    </section>
    <section class="section grid">
      <article class="card">
        <h2>Case study: how a mid-size operation improved performance</h2>
        <p><strong>Company profile:</strong> A mid-size manufacturing business was facing late deliveries, frequent rework, and rising costs. The team was busy every day, but the results were still uneven.</p>
        <p><strong>What changed:</strong> The company introduced a simple performance management system with daily KPIs, shift dashboards, weekly review meetings, and a clear root-cause process. Managers stopped guessing and started using data to guide action.</p>
        <p><strong>Results after three months:</strong> On-time delivery improved from 76% to 92%. Rework dropped by 35%. Team leaders reported fewer last-minute fire drills because problems were detected earlier.</p>
      </article>
      <aside class="card">
        <h3>Case study takeaways</h3>
        <ul class="list">
          <li>Visibility creates accountability.</li>
          <li>Small daily checks prevent bigger failures.</li>
          <li>Clear KPIs align teams around one goal.</li>
          <li>Data-backed reviews make improvement faster.</li>
        </ul>
      </aside>
    </section>
    <section class="section card faq">
      <h2>FAQs</h2>
      <details>
        <summary>What is operation and performance management?</summary>
        <p>It is the process of running daily work efficiently while measuring results and improving them over time. It links planning, execution, reporting, and continuous improvement.</p>
      </details>
      <details>
        <summary>Why is it important for growing businesses?</summary>
        <p>Because growth brings more work, more complexity, and more pressure on teams. Strong management keeps quality stable even when demand increases.</p>
      </details>
      <details>
        <summary>Which KPIs matter most?</summary>
        <p>The best KPIs depend on the business, but common ones include cycle time, on-time delivery, accuracy, productivity, cost per unit, and customer satisfaction.</p>
      </details>
      <details>
        <summary>How often should performance be reviewed?</summary>
        <p>Fast-moving teams may review daily. Others may review weekly or monthly. The key is to review often enough to correct problems before they spread.</p>
      </details>
    </section>
    <section class="section card">
      <h2>Final thought</h2>
      <p>Operation and performance management is not a theory for boardrooms only. It is a practical business habit that keeps teams focused, reduces waste, and supports long-term growth. When a company can see its work clearly, it can improve it quickly. That is how steady operations become strong performance—and strong performance becomes business growth.</p>
    </section>
  </div>
</body>
</html>`,
  },
  {
    slug: "checklists",
    title: "Checklists",
    subtitle: "Pre-audit and compliance checklists for EPR requirements.",
    desc: "Comprehensive checklists to ensure you meet all EPR compliance requirements before audits and regulatory inspections.",
    details: "Our checklists cover documentation, process implementation, record-keeping, and reporting requirements specific to each waste category and CPCB guidelines.",
    features: ["Audit readiness", "Compliance verification", "Risk mitigation"],
    highlights: ["Pre-audit checklists", "Compliance verification tools", "Documentation guides"],
    path: "/services/checklists",
    category: "sops-kpis-checklists",
    subcategory: "Checklists",
  },
  {
    slug: "buy-ewaste",
    title: "Buy E-Waste",
    subtitle: "Purchase certified e-waste for material recovery and recycling.",
    desc: "Access quality e-waste streams directly from our verified network of collection centers for your recycling and material recovery operations.",
    details: "We connect buyers with certified e-waste sources, ensuring material quality, traceability, and compliance with all environmental standards.",
    features: ["Certified sources", "Quality assurance", "Reliable supply"],
    highlights: ["Verified quality", "Traceable sourcing", "Competitive pricing"],
    path: "/services/buy-ewaste",
    category: "buy-sell",
    subcategory: "E-Waste",
  },
  {
    slug: "sell-batteries",
    title: "Sell Batteries",
    subtitle: "Sell your battery waste to certified recyclers and processors.",
    desc: "Monetize your battery waste streams by connecting with qualified buyers in our platform marketplace for batteries of all types.",
    details: "Our marketplace connects battery sellers with certified buyers, ensuring fair pricing, proper handling, and full regulatory compliance throughout the transaction.",
    features: ["Market access", "Fair pricing", "Compliance assured"],
    highlights: ["Direct buyer connections", "Transparent pricing", "Regulatory compliance"],
    path: "/services/sell-batteries",
    category: "buy-sell",
    subcategory: "Batteries",
  },
  {
    slug: "buy-sell-metals",
    title: "Buy & Sell Metals",
    subtitle: "Trade ferrous and non-ferrous metals with certified partners.",
    desc: "Access a comprehensive marketplace for buying and selling metals, including scrap metals, recovery materials, and certified recycled metals.",
    details: "Our metals trading platform connects buyers and sellers of ferrous and non-ferrous metals, ensuring quality assurance, fair market pricing, and full traceability throughout the transaction process.",
    features: ["Certified metal sources", "Market transparency", "Quality verification"],
    highlights: ["Direct trading platform", "Fair pricing", "Certified suppliers"],
    path: "/services/buy-sell-metals",
    category: "buy-sell",
    subcategory: "Metals",
  },
  {
    slug: "recycling-lithium-ion-battery",
    title: "Lithium Ion Battery",
    subtitle: "State-of-the-art lithium ion battery recycling plant.",
    desc: "Advanced recycling facility for lithium ion batteries with recovery of valuable materials including lithium, cobalt, and nickel.",
    details: "Our lithium ion battery recycling setup uses certified processes to safely dismantle, segregate, and recover valuable materials from spent batteries, ensuring environmental compliance and maximum material recovery.",
    features: ["Material recovery", "Safety compliance", "Environmental standards"],
    highlights: ["Advanced processing", "Material efficiency", "Certified facility"],
    path: "/services/recycling-lithium-ion-battery",
    category: "recycling-setups",
    subcategory: "Lithium Ion Battery",
  },
  {
    slug: "recycling-ewaste",
    title: "E-Waste",
    subtitle: "Comprehensive e-waste recycling and material recovery facility.",
    desc: "Full-scale e-waste recycling plant equipped to process all types of electronic waste with proper segregation and certified material recovery.",
    details: "Our e-waste recycling setup provides secure collection, dismantling, data destruction, and material recovery with complete traceability and regulatory compliance.",
    features: ["Secure processing", "Data destruction", "Material recovery"],
    highlights: ["Full automation", "High recovery rates", "Certified operations"],
    path: "/services/recycling-ewaste",
    category: "recycling-setups",
    subcategory: "E-Waste",
  },
  {
    slug: "recycling-vehicles-scrapping",
    title: "Registered Vehicles Scraping Faculty Plant",
    subtitle: "Authorized vehicle scrapping and depollution facility.",
    desc: "Licensed registered vehicle scrapping plant for end-of-life vehicles with authorized depollution and certified material recovery processes.",
    details: "Our registered vehicles scrapping faculty operates under government authorization, ensuring proper depollution procedures, hazardous fluid removal, and comprehensive material segregation for recycling.",
    features: ["Authorized operation", "Depollution services", "Material segregation"],
    highlights: ["Government registered", "Complete compliance", "Certified dismantlers"],
    path: "/services/recycling-vehicles-scrapping",
    category: "recycling-setups",
    subcategory: "Registered Vehicles Scraping Faculty Plant",
  },
  {
    slug: "recycling-plastic",
    title: "Plastic Recycling",
    subtitle: "Plastic recycling facility setup and compliance-ready recovery solutions.",
    desc: "Plastic recycling setup for waste collection, sorting, washing, extrusion, and documented recovery aligned with regulatory best practices.",
    details:
      "Our Plastic Recycling setup service helps promoters design and launch formal plastic recovery facilities that handle PET, HDPE, PP and mixed polymer streams. We assist with site planning, equipment selection, permitting, and end-to-end compliance documentation.",
    features: [
      "Feedstock segregation planning",
      "Authorized recycling process",
      "Quality output monitoring",
      "ETP and wastewater planning",
    ],
    useCases: [
      "Post-consumer plastic packaging recovery",
      "Rigid and flexible plastic recycling",
      "PET bottle and film washing and pelletising",
    ],
    processSteps: [
      { title: "Site & layout planning", description: "Design plant flow for receiving, sorting, washing, drying and extrusion." },
      { title: "Equipment selection", description: "Specify conveyors, shredders, wash lines, dryers and pelletisers for the right capacity." },
      { title: "Compliance approvals", description: "Support permits, pollution control clearances and ETP planning." },
      { title: "Operational setup", description: "Help with commissioning, trial runs and reporting for stable plant operations." },
    ],
    compliancePoints: [
      "Plastic Waste Management Rules alignment",
      "ETP and wastewater management",
      "Authorized recycler partnerships",
    ],
    highlights: ["Formal plastic recovery", "Regulatory-ready plant design", "Investor-friendly setup"],
    path: "/services/recycling-plastic",
    category: "recycling-setups",
    subcategory: "Plastic",
  },
  {
    slug: "recycling-solar-panel",
    title: "Solar Panel",
    subtitle: "Specialized solar panel recycling and material recovery.",
    desc: "Dedicated recycling facility for end-of-life solar panels with recovery of glass, silicon, and metal components.",
    details: "Our solar panel recycling setup safely processes retired panels, recovering valuable materials while ensuring environmental safety and regulatory compliance.",
    features: ["Material recovery", "Glass processing", "Silicon recovery"],
    highlights: ["Eco-friendly process", "High recovery rates", "Certified technology"],
    path: "/services/recycling-solar-panel",
    category: "recycling-setups",
    subcategory: "Solar Panel",
  },
  {
    slug: "business-growth",
    title: "Business Growth & Lead Generation",
    subtitle: "Find the right buyers through targeted digital campaigns, SEO-driven content, and structured lead conversion systems.",
    desc: "Strategic business growth services that generate qualified leads, build digital brand authority, and create sales pipelines that convert. We help established businesses break through visibility barriers and scale predictably through targeted campaigns, SEO optimization, and conversion systems.",
    details:
      "We partner with established businesses ready to scale beyond referrals. You have built a great product or service, but your pipeline is dry, you are losing deals to weaker competitors, and growth has plateaued. We become your growth partner by building your digital visibility, generating qualified leads through targeted campaigns and SEO, and structuring your sales pipeline so enquiries convert to deals. We handle ad management, cold calling outreach, lead nurturing, CRM setup, and sales team support on your behalf.",
    features: [
      "Targeted digital campaigns & ad management",
      "SEO-driven content strategy",
      "Cold calling & lead outreach",
      "Lead conversion & CRM systems",
      "Brand authority building",
      "Sales team support",
    ],
    useCases: [
      "Established businesses with great products but low visibility",
      "Companies losing contracts to weaker competitors",
      "Service providers ready to scale beyond referrals",
      "Businesses with long sales cycles and cold leads",
      "Entrepreneurs with proven products seeking predictable lead flow",
    ],
    processSteps: [
      { title: "Visibility Audit", description: "We assess why your pipeline is dry. Market analysis, competitor positioning, and digital presence gaps are identified." },
      { title: "Campaign Strategy", description: "Develop targeted digital campaigns and ad strategy to reach your ideal buyer profile directly." },
      { title: "Content & SEO", description: "Create SEO-optimized content and position you as the authority in your category so buyers find you." },
      { title: "Lead Generation", description: "Launch targeted campaigns, manage ad spend, execute cold calling, and nurture leads through the sales funnel." },
      { title: "Pipeline Setup", description: "Implement CRM systems, follow-up automation, and structured processes so leads convert to deals." },
      { title: "Sales Support", description: "If your product is the right fit, our sales team works on your behalf to close deals." },
      { title: "Optimization", description: "Continuously monitor metrics, refine campaigns, and optimize conversion rates for maximum ROI." },
    ],
    highlights: [
      "End-to-end growth partnership",
      "Digital brand authority building",
      "Qualified lead generation",
      "Ad management & cold calling",
      "Lead conversion optimization",
      "Revenue predictability",
      "Sales team support",
    ],
    path: "/services/business-growth",
    category: "business-growth-lead-generation",
    subcategory: "Business Growth & Lead Generation",
  },
];

export const serviceDropdown = [
  { label: "EPR Plastic", path: "/services/epr-plastic" },
  { label: "EPR Electronic", path: "/services/epr-electronic" },
  { label: "EPR Tyre", path: "/services/epr-tyre" },
  { label: "EPR ELV", path: "/services/epr-elv" },
  { label: "EPR Used Oil", path: "/services/epr-used-oil" },
  { label: "EPR Metals", path: "/services/epr-metals" },
  { label: "EPR Battery", path: "/services/epr-battery" },
  { label: "EPR Lithium", path: "/services/epr-lithium" },
  { label: "Setup & commissioning documentation", path: "/services/sops" },
  { label: "Operation & Performance management", path: "/services/operationperformancemanagement" },
  { label: "Scale and growth system", path: "/services/checklists" },
  { label: "Buy E-Waste", path: "/services/buy-ewaste" },
  { label: "Sell Batteries", path: "/services/sell-batteries" },
  { label: "Buy & Sell Metals", path: "/services/buy-sell-metals" },
  { label: "Lithium Battery Recycling", path: "/services/recycling-lithium-ion-battery" },
  { label: "E-Waste Recycling", path: "/services/recycling-ewaste" },
  { label: "Registered Vehicles Scraping Facility Plant", path: "/services/recycling-vehicles-scrapping" },
  { label: "Solar Panel Recycling", path: "/services/recycling-solar-panel" },
  { label: "Plastic Recycling", path: "/services/recycling-plastic" },
  { label: "Business Growth & Lead Generation", path: "/services/business-growth" },
];

export interface ServiceCategory {
  name: string;
  subcategories: Array<{
    label: string;
    path: string;
  }>;
}

export const serviceCategoriesNav: ServiceCategory[] = [
  {
    name: "Recycling Setups",
    subcategories: [
      { label: "Lithium Battery Recycling", path: "/services/recycling-lithium-ion-battery" },
      { label: "E-Waste Recycling", path: "/services/recycling-ewaste" },
      { label: "Registered Vehicles Scraping Facility Plant", path: "/services/recycling-vehicles-scrapping" },
      { label: "Solar Panel Recycling", path: "/services/recycling-solar-panel" },
      { label: "Plastic Recycling", path: "/services/recycling-plastic" },
    ],
  },
  {
    name: "EPR Credits",
    subcategories: [
      { label: "EPR Plastic", path: "/services/epr-plastic" },
      { label: "EPR Electronic", path: "/services/epr-electronic" },
      { label: "EPR Tyre", path: "/services/epr-tyre" },
      { label: "EPR ELV", path: "/services/epr-elv" },
      { label: "EPR Used Oil", path: "/services/epr-used-oil" },
      { label: "EPR Metals", path: "/services/epr-metals" },
      { label: "EPR Battery", path: "/services/epr-battery" },
      { label: "EPR Lithium", path: "/services/epr-lithium" },
    ],
  },
  {
    name: "Plant Operation Intelligence",
    subcategories: [
      { label: "Setup & commissioning documentation", path: "/services/sops" },
      { label: "Operation & Performance management", path: "/services/operationperformancemanagement" },
      { label: "Scale and growth system", path: "/services/checklists" },
    ],
  },

  {
    name: "Buy & Sell Scrap",
    subcategories: [
      { label: "Buy E-Waste", path: "/services/buy-ewaste" },
      { label: "Sell Batteries", path: "/services/sell-batteries" },
      { label: "Buy & Sell Metals", path: "/services/buy-sell-metals" },
    ],
  },
  {
    name: "Business Growth & Lead Generation",
    subcategories: [
      { label: "Business Growth & Lead Generation", path: "/services/business-growth" },
    ],
  },
];
