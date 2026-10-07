import React, { useEffect } from 'react';
import StickyContactForm from '@/components/StickyContactForm';

/**
 * Lithium-Ion Battery Manufacturing: Detailed Project Report
 *
 * - All styling is inline Tailwind (no <style> block, no global CSS).
 * - Layout: hero (row 1) + StickyContactForm (right column, spans BOTH rows) + content (row 2).
 *   The form starts level with the hero and stays sticky while the whole article scrolls.
 *   Below 1100px everything stacks: hero -> form -> content.
 * - Sticky only works if no ancestor has overflow hidden/auto/scroll (this file's wrappers don't).
 */

/* ------------------------------------------------------------------ */
/* Shared class strings                                                */
/* ------------------------------------------------------------------ */

// Typography
const H2_BASE =
  'mb-3.5 text-[22px] font-bold leading-[1.15] tracking-[-0.02em] min-[761px]:text-[clamp(24px,3vw,34px)]';
const H2 = `${H2_BASE} text-[#06251a]`;
const H3 = 'text-[19px] font-bold leading-[1.3] text-[#0a3525]';
const H3M = `${H3} mb-2`;
const KICKER = 'mb-1.5 text-xs font-extrabold uppercase tracking-[0.1em] text-[#146341]';
const LEAD = 'mb-3.5 text-[17px] text-[#43554c]';
const P = 'mb-3.5';
const SMALL = 'mb-3.5 text-[13px] text-[#607068]';
const METRIC_LABEL = 'mb-[7px] text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#146341]';
const STRONG_DARK = 'text-[#06251a]';

// Layout
const SECTION =
  'mx-auto mb-8 w-full max-w-none scroll-mt-5 last:mb-0 min-[481px]:mb-[38px] min-[761px]:mb-12 min-[1101px]:max-w-[1540px]';
const INTRO = 'mb-5 max-w-[1050px]';
const G2 = 'grid grid-cols-1 gap-4 min-[761px]:grid-cols-2';
const G3 = 'grid grid-cols-1 gap-4 min-[761px]:grid-cols-3';
const G4 = 'grid grid-cols-1 gap-4 min-[761px]:grid-cols-2 min-[1101px]:grid-cols-4';

// Cards (border colour is set per variant so nothing conflicts)
const CARD_BASE =
  'h-full rounded-[20px] border p-[18px] shadow-[0_6px_20px_rgba(20,48,36,.05)] min-[481px]:p-[22px]';
const CARD = `${CARD_BASE} border-[#dce7e0] bg-white`;
const ACCENT = `${CARD_BASE} border-[#cfe7d6] bg-gradient-to-b from-[#f3fbf5] to-white`;
const BLUE = `${CARD_BASE} border-[#d6e2f1] bg-gradient-to-b from-[#f4f8fd] to-white`;

// Callouts
const CALLOUT =
  'mt-[18px] rounded-r-[14px] border-l-[5px] border-[#39a95b] bg-[#e8f7ed] px-[18px] py-4';
const CALLOUT_BLUE =
  'mt-[18px] rounded-r-[14px] border-l-[5px] border-[#215d9a] bg-[#eaf2fb] px-[18px] py-4';

// Tags / buttons
const TAG_ROW = 'mt-4 flex flex-wrap gap-2';
const TAG =
  'rounded-full border border-[#d9e8dd] bg-[#eef5f0] px-2.5 py-1.5 text-xs font-bold text-[#426056]';
const BTN =
  'inline-flex items-center justify-center rounded-[11px] border border-white/20 px-4 py-3 text-sm font-extrabold hover:no-underline';

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const projectCards = [
  {
    title: 'Project Scope',
    stat: '01',
    copy: 'Define whether the project is cell manufacturing, module assembly, battery-pack assembly or an application-specific EV / ESS unit before estimating investment.',
  },
  {
    title: 'Technical Blueprint',
    stat: '02',
    copy: 'Translate product voltage, capacity, chemistry, cell format, BMS architecture, thermal design and quality targets into a practical production plan.',
  },
  {
    title: 'Financial Model',
    stat: '03',
    copy: 'Connect installed capacity with utilisation, yield, raw-material cost, manpower, utilities, working capital, selling price, margins and cash-flow requirements.',
  },
];

const processSteps = [
  {
    n: '01',
    title: 'Freeze the Product Definition',
    copy: 'Start with the product—not the machinery. Define chemistry, cell format, nominal voltage, capacity, energy rating, operating temperature, C-rate, enclosure, BMS functions and end application.',
  },
  {
    n: '02',
    title: 'Map the Bill of Materials',
    copy: 'A DPR should identify the major cells or electrode materials, busbars, connectors, insulation, thermal materials, enclosure, BMS, fasteners and packaging, together with quality grades and sourcing assumptions.',
  },
  {
    n: '03',
    title: 'Design the Process Flow',
    copy: 'The process route changes materially between cell production and pack assembly. The DPR should show incoming inspection, assembly steps, intermediate checks, formation or charging, end-of-line testing and final dispatch.',
  },
  {
    n: '04',
    title: 'Size the Plant & Utilities',
    copy: 'Capacity is not just a machine rating. Translate annual output into shifts, takt time, line balance, floor area, storage, HVAC, dry-room requirements where applicable, compressed air, power, safety systems and material movement.',
  },
  {
    n: '05',
    title: 'Build the Compliance Roadmap',
    copy: 'Map the approvals and testing obligations to the exact product and intended market. The DPR should clearly separate factory permissions, environmental obligations, product standards, vehicle-specific requirements and battery EPR duties.',
  },
  {
    n: '06',
    title: 'Model the Economics',
    copy: 'Use realistic utilisation, yield, scrap, replacement, warranty, raw-material, labour, energy and working-capital assumptions. This converts a manufacturing idea into a bankable operating scenario.',
  },
];

const machineryCards = [
  {
    title: 'For Pack Assembly',
    copy: 'Cell sorting and matching equipment, busbar preparation, welding or joining systems, insulation application, BMS integration, pack assembly fixtures, charging systems, EOL testers, labeling and traceability equipment.',
  },
  {
    title: 'For Cell Manufacturing',
    copy: 'Electrode mixing, coating, drying, calendaring, slitting, cell assembly, electrolyte filling, sealing, formation, aging, grading and specialised inspection/test systems, supported by controlled environmental infrastructure.',
  },
  {
    title: 'For Quality & Traceability',
    copy: 'Incoming inspection, dimensional checks, electrical testing, insulation resistance, OCV/IR measurement, weld inspection, data logging, barcode or serial traceability and final functional testing.',
  },
  {
    title: 'For Plant Support',
    copy: 'Power distribution, HVAC, compressed air, fire protection, material storage, ESD controls where applicable, ventilation, water systems, waste handling, maintenance facilities and safety infrastructure.',
  },
];

const parameterCards = [
  ['Energy', 'Wh / kWh', 'Determines how much energy the battery stores and directly influences product positioning.'],
  ['Voltage', 'V', 'Defines the electrical architecture and must align with the application and BMS operating window.'],
  ['Capacity', 'Ah', 'Indicates charge storage; useful for defining pack configuration and application requirements.'],
  ['C-rate', 'C', 'Expresses charge or discharge rate relative to capacity and affects thermal and power requirements.'],
  ['Cycle life', 'Cycles', 'Important for EV, ESS and industrial applications where lifetime economics matter.'],
  ['Internal resistance', 'mΩ', 'A key indicator for consistency, heat generation and cell matching in pack assembly.'],
  ['Thermal range', '°C', 'Operating and storage temperature limits influence cooling, controls and application suitability.'],
  ['Safety controls', 'BMS / protection', 'Over-voltage, under-voltage, over-current, short-circuit and temperature protection are core design considerations.'],
];

const economicsCards = [
  {
    title: 'CAPEX',
    copy: 'Land, building, process machinery, testing systems, utilities, HVAC, safety infrastructure, tooling, installation, commissioning and pre-operative expenses.',
  },
  {
    title: 'Working Capital',
    copy: 'Inventory of cells or raw materials, consumables, finished goods, receivables, payables and the cash needed during the production ramp-up.',
  },
  {
    title: 'Operating Cost',
    copy: 'Raw materials, labour, power, consumables, maintenance, testing, logistics, quality losses, warranty provisions and overheads.',
  },
  {
    title: 'Revenue & Margin',
    copy: 'Selling price should be linked to product specifications, customer segment, warranty expectations, channel economics and realistic utilisation—not headline capacity.',
  },
];

const complianceCards = [
  {
    title: 'Factory & Environmental Permissions',
    copy: 'The project should identify applicable site, land-use, fire, electrical, occupational and Pollution Control Board permissions for the proposed facility and process.',
  },
  {
    title: 'Product Testing & Standards',
    copy: 'The applicable product standards depend on the battery type and use case. The DPR should identify the relevant testing path before product finalisation and equipment procurement.',
  },
  {
    title: 'EV-Specific Requirements',
    copy: 'Traction batteries for electric vehicles may require vehicle-category-specific testing and approval pathways. The DPR should map these requirements to the intended vehicle/application.',
  },
  {
    title: 'Battery EPR',
    copy: 'Battery producers have end-of-life responsibilities under India’s Battery Waste Management Rules framework. The DPR should account for registration, reporting, recycling-related obligations and operating controls.',
  },
];

const faqs = [
  {
    q: 'Do I need a DPR if I am starting with battery-pack assembly rather than cell manufacturing?',
    a: 'Yes. The DPR is still useful because the project must define the target battery, cell sourcing strategy, pack configuration, welding/joining process, BMS architecture, testing equipment, manpower, utilities, working capital, product approvals and EPR obligations. A pack-assembly DPR may have a lower technical and capital burden than a cell-manufacturing DPR, but it still needs a rigorous operating and financial model.',
  },
  {
    q: 'What should be decided before I ask machinery suppliers for quotations?',
    a: 'Freeze the product specification, annual output, daily/shift production target, chemistry, cell format, key BOM items, BMS requirements, quality criteria, test plan, utilities and floor-space assumptions first. Otherwise, suppliers may quote different machines for different production concepts, making price comparisons misleading and increasing the risk of buying equipment that does not fit the final process.',
  },
  {
    q: 'How does the selected chemistry change the economics of the project?',
    a: 'Chemistry affects cell cost, energy density, thermal behaviour, cycle-life expectations, sourcing, pack weight and application fit. That, in turn, affects the BOM, pack architecture, cooling requirements, warranty assumptions, customer segment and selling price. A DPR should therefore model economics after the technical product has been defined, not before.',
  },
  {
    q: 'Can I buy a standard Chinese battery line and use it for any lithium-ion product?',
    a: 'Not safely as a general assumption. Equipment must be matched to the intended chemistry, cell format, throughput, tolerances, process route, testing requirements, utilities and quality system. A “standard line” may be suitable for one product but poorly matched to another. The correct comparison is technical specification versus requirement—not machine name versus machine name.',
  },
  {
    q: 'What makes a lithium-ion battery DPR bankable for a lender or investor?',
    a: 'Bankability comes from traceable assumptions. The report should connect capacity to line design, CAPEX to vendor-backed equipment scope, operating cost to the BOM and utility/manpower model, revenue to realistic utilisation and market pricing, and cash flow to the working-capital cycle. Sensitivity analysis is also important because utilisation, cell prices, yield, warranty and ramp-up can materially change project returns.',
  },
  {
    q: 'What is the biggest mistake first-time battery entrepreneurs make?',
    a: 'Buying equipment before freezing the product and commercial model is one of the most common strategic errors. It can lock the project into a capacity, process or form factor that does not match the target customer. The DPR should reduce that risk by making the product, process, compliance path and financial logic explicit before major capital is committed.',
  },
  {
    q: 'Does battery EPR have to be considered while preparing the DPR?',
    a: 'Yes. Battery waste obligations should be considered during project planning because producer responsibilities, registration/reporting processes, recycling-related costs and record-keeping can affect operating procedures and compliance planning. The exact obligation should be mapped to the product category and applicable current rules before implementation.',
  },
  {
    q: 'Can EPR Nexuss prepare a DPR for an existing battery plant that is not performing as expected?',
    a: 'A DPR can also be used as a restart or restructuring document. For an existing facility, the assessment should first identify installed equipment, actual throughput, quality losses, bottlenecks, pending approvals, customer issues, maintenance condition and working-capital constraints. The revised project model can then compare the cost and benefit of recalibration, replacement, capacity changes or a different product mix.',
  },
  {
    q: 'How can I know whether cell manufacturing or pack assembly is the better entry point?',
    a: 'Compare the two models against your target market, capital availability, technical capability, supplier dependence, required production scale, validation complexity and expected route to revenue. Pack assembly can provide a different entry profile because cells are sourced rather than produced, while cell manufacturing requires a substantially deeper process and infrastructure capability. The correct answer depends on the business model, not on the label “battery manufacturing.”',
  },
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function SectionHead({
  kicker,
  title,
  lead,
  extra,
}: {
  kicker: string;
  title: string;
  lead?: string;
  extra?: string;
}) {
  return (
    <>
      <div className={KICKER}>{kicker}</div>
      <h2 className={H2}>{title}</h2>
      {lead && (
        <div className={INTRO}>
          <p className={LEAD}>{lead}</p>
          {extra && <p className={P}>{extra}</p>}
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function LithiumDPR() {
  // Smooth anchor scrolling only while this page is mounted (and not for reduced-motion users)
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.style.scrollBehavior = reduce ? 'auto' : 'smooth';
    return () => {
      root.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <>
      <title>Lithium-Ion Battery Manufacturing: Detailed Project Report | EPR Nexuss</title>
      <meta
        name="description"
        content="Lithium-ion battery manufacturing detailed project report in India: project scope, plant requirements, machinery, raw materials, utilities, manufacturing process, compliance, economics, implementation and EPR Nexuss support."
      />
      <meta
        name="keywords"
        content="lithium ion battery manufacturing DPR India, lithium ion battery project report, battery pack assembly project report, lithium battery plant setup, battery manufacturing consultancy, battery EPR India, EPR Nexuss"
      />
      <meta name="author" content="EPR Nexuss" />
      <meta
        property="og:title"
        content="Lithium-Ion Battery Manufacturing: The Detailed Project Report That Turns a Plant Idea Into a Bankable Plan"
      />
      <meta
        property="og:description"
        content="A practical guide to preparing a lithium-ion battery manufacturing or pack-assembly DPR in India, connecting product design, plant setup, machinery, compliance and project economics."
      />
      <meta property="og:type" content="article" />

      <div className="bg-[#f5f8f6] font-sans text-base leading-[1.72] text-[#18251f] antialiased">
        {/* pt clears the fixed navbar; both hero and form start below it */}
        <div className="mx-auto w-full px-1 pb-7 pt-[116px] min-[761px]:w-[min(1780px,98%)] min-[761px]:px-1.5 min-[761px]:pb-10 min-[761px]:pt-[120px]">
          {/*
            Grid: hero (row 1, col 1) | form (col 2, spans both rows, sticky) | content (row 2, col 1).
            Below 1100px the DOM order gives: hero -> form -> content.
          */}
          <div className="grid grid-cols-1 items-start gap-[18px] min-[1101px]:grid-cols-[minmax(0,1fr)_320px] min-[1101px]:gap-5">
            {/* ===================== HERO ===================== */}
            <header className="relative min-h-0 min-w-0 overflow-hidden rounded-[20px] bg-[radial-gradient(circle_at_88%_18%,rgba(84,198,131,.25),transparent_25%),radial-gradient(circle_at_15%_100%,rgba(42,117,181,.2),transparent_30%),linear-gradient(135deg,#061e14,#0c4b30_55%,#123e63)] text-white after:pointer-events-none after:absolute after:inset-0 after:opacity-50 after:content-[''] after:[background-image:radial-gradient(rgba(255,255,255,.1)_1px,transparent_1px)] after:[background-size:26px_26px] min-[761px]:min-h-[420px] min-[761px]:rounded-[28px] min-[1101px]:col-start-1 min-[1101px]:row-start-1">
              <div className="relative z-[1] px-5 pb-9 pt-7 min-[761px]:px-7 min-[761px]:pb-11 min-[761px]:pt-9 min-[1101px]:px-10 min-[1101px]:pb-[52px] min-[1101px]:pt-12">
                <div className="mb-5 inline-flex rounded-full border border-white/[.28] bg-white/[.06] px-2.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.08em] text-[#dff8ea] min-[481px]:px-3.5 min-[481px]:py-[7px] min-[481px]:text-xs">
                  Manufacturing • DPR • India
                </div>
                <h1 className="mb-4 max-w-[640px] text-xl font-bold leading-[4] tracking-[0.1em] min-[481px]:text-2xl min-[761px]:text-[clamp(28px,4vw,46px)]">
                  Lithium-Ion Battery Manufacturing: The Detailed Project Report That Turns a Plant Idea Into a{' '}
                  <span className="text-[#9ae5b8]">Bankable Plan</span>
                </h1>
                <p className="mb-3.5 max-w-[560px] text-sm leading-[1.7] text-[#e3efe8] min-[481px]:text-[15px] min-[761px]:text-base">
                  A practical, step-by-step guide to building a project report for lithium-ion battery manufacturing or pack assembly — from project scope and machinery to compliance, plant economics, funding and implementation.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    'Project scope first',
                    'Costing built around capacity',
                    'Compliance mapped to the product',
                    'Financial projections with assumptions',
                  ].map((m) => (
                    <span
                      key={m}
                      className="rounded-[10px] border border-white/[.14] bg-white/[.06] px-[11px] py-[7px] text-xs text-white/[.78]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <div className="mt-[22px] max-w-[620px] rounded-[14px] border border-[#ecd890] bg-[#fff7df] px-4 py-3.5 text-[13px] text-[#5f5127]">
                  <strong className="text-[#4f4116]">Important:</strong> “Lithium-ion battery manufacturing” can mean very different projects. A cell manufacturing plant, a module/pack assembly unit, and a battery recycling/refurbishment facility require different technologies, machinery, investment structures, permissions and testing paths. A DPR should therefore be written around the actual project — not copied from a generic report.
                </div>
              </div>
            </header>

            {/* ================= STICKY CONTACT FORM ================= */}
            <aside
              aria-label="Contact form"
              className="z-20 min-w-0 min-[1101px]:sticky min-[1101px]:top-32 min-[1101px]:col-start-2 min-[1101px]:row-span-2 min-[1101px]:row-start-1 min-[1101px]:max-h-[calc(100vh-9rem)] min-[1101px]:self-start min-[1101px]:overflow-y-auto"
            >
              <StickyContactForm />
            </aside>

            {/* ===================== CONTENT ===================== */}
            <div className="w-full min-w-0 overflow-hidden rounded-[18px] border border-[#dce7e0] bg-white shadow-[0_16px_45px_rgba(17,48,35,.10)] min-[761px]:rounded-[28px] min-[1101px]:col-start-1 min-[1101px]:row-start-2">
              <div className="mx-auto w-full max-w-[1640px] px-[9px] pb-7 pt-5 min-[481px]:px-3 min-[481px]:pb-9 min-[481px]:pt-6 min-[761px]:px-[18px] min-[761px]:pb-11 min-[761px]:pt-8 min-[1101px]:px-[22px] min-[1101px]:pb-[58px] min-[1101px]:pt-[42px]">
                {/* 01 */}
                <section id="dpr" className={SECTION}>
                  <SectionHead
                    kicker="01 — Start with the document"
                    title="A Detailed Project Report Is the Decision Document Behind the Battery Plant"
                    lead="A strong lithium-ion battery DPR turns a manufacturing idea into a sequence of decisions: what you will manufacture, how you will manufacture it, what the facility will require, which approvals apply, how much capital is needed and under what assumptions the business can become viable."
                    extra="The real value is not the thickness of the report. It is the connection between technical reality and commercial reality. A lender should be able to understand the project. An investor should be able to challenge the assumptions. A promoter should know what has to be purchased, built, tested and approved before commercial production."
                  />

                  <div className={G3}>
                    {projectCards.map((item) => (
                      <div className={ACCENT} key={item.title}>
                        <div className={METRIC_LABEL}>{item.stat}</div>
                        <div className="mb-1 text-[26px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0a3525]">
                          {item.title}
                        </div>
                        <p className={SMALL}>{item.copy}</p>
                      </div>
                    ))}
                  </div>

                  <div className={CALLOUT}>
                    <strong className={STRONG_DARK}>The bankability test:</strong> every major number in the DPR should have an explainable origin. Capacity should connect to machine throughput; machine selection should connect to the product; raw-material consumption should connect to yield; revenue should connect to realistic output and pricing; and working capital should reflect the actual cash cycle of the business.
                  </div>
                </section>

                {/* 02 */}
                <section id="scope" className={SECTION}>
                  <SectionHead
                    kicker="02 — Define before you calculate"
                    title="The First DPR Question: What Exactly Are You Going to Manufacture?"
                    lead="“Lithium-ion battery manufacturing” is a broad expression. A DPR becomes credible only when the project boundary is explicit, because the machinery, utilities, process controls, testing and investment profile can change dramatically with the product scope."
                  />

                  <div className={`${CARD} h-full overflow-x-auto`}>
                    <table className="mt-3.5 w-full min-w-[640px] border-collapse text-[13px] min-[761px]:min-w-0">
                      <thead>
                        <tr>
                          {['Project type', 'What the factory does', 'What the DPR must prove'].map((h) => (
                            <th
                              key={h}
                              className="border-b border-[#dce7e0] bg-[#f6faf7] px-2.5 py-3 text-left align-top text-[11px] uppercase tracking-[0.06em] text-[#0a3525]"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="[&>tr:last-child>td]:border-b-0">
                        {[
                          ['Cell manufacturing', 'Produces cells through electrode and cell-processing stages under controlled production conditions.', 'Process technology, material route, environmental controls, formation/aging, testing, utilities, quality systems, supply chain and high-capital requirements.'],
                          ['Module / pack assembly', 'Uses purchased cells and integrates them into modules or finished battery packs with protection and control systems.', 'Cell sourcing, matching, joining, BMS, thermal design, enclosure, traceability, testing, product application and customer requirements.'],
                          ['Application-specific battery unit', 'Builds packs for EVs, ESS, telecom, UPS, industrial equipment or other defined applications.', 'Voltage/capacity configuration, duty cycle, BMS functions, thermal strategy, enclosure, safety, validation, warranty and after-sales assumptions.'],
                        ].map(([type, does, proves]) => (
                          <tr key={type}>
                            <td className="border-b border-[#dce7e0] px-2.5 py-3 text-left align-top">
                              <strong>{type}</strong>
                            </td>
                            <td className="border-b border-[#dce7e0] px-2.5 py-3 text-left align-top">{does}</td>
                            <td className="border-b border-[#dce7e0] px-2.5 py-3 text-left align-top">{proves}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className={`${G2} mt-4`}>
                    <div className={BLUE}>
                      <div className="mb-1.5 flex items-start gap-3">
                        <div className="grid h-[38px] w-[38px] flex-none place-items-center rounded-[11px] bg-[#e8f7ed] text-[#0e4a31]" aria-hidden="true">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 4h14v16H5z" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
                        </div>
                        <div>
                          <h3 className={H3M}>Product brief</h3>
                          <p className={SMALL}>Chemistry, form factor, voltage, capacity, application, customer segment, target price and annual output.</p>
                        </div>
                      </div>
                    </div>
                    <div className={BLUE}>
                      <div className="mb-1.5 flex items-start gap-3">
                        <div className="grid h-[38px] w-[38px] flex-none place-items-center rounded-[11px] bg-[#e8f7ed] text-[#0e4a31]" aria-hidden="true">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" /></svg>
                        </div>
                        <div>
                          <h3 className={H3M}>Implementation brief</h3>
                          <p className={SMALL}>Site, construction, machinery delivery, installation, commissioning, validation, commercial launch and ramp-up timeline.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 03 */}
                <section id="technical" className={SECTION}>
                  <SectionHead
                    kicker="03 — Build the technical identity"
                    title="From Chemistry to Pack: The Technical Story Your DPR Must Explain"
                    lead="A bankable project report does not treat the battery as a black box. It explains how chemistry, cell format and electrical specifications combine to create the final product—and how those choices affect machinery, safety, thermal management, quality and cost."
                    extra="LFP, NMC, NCA, LCO, LMO and LTO are different electrochemical systems with different trade-offs. The DPR should link the selected chemistry to the application instead of selecting a chemistry only because it is popular in another market."
                  />

                  <div className={G2}>
                    <div className={ACCENT}>
                      <h3 className={H3M}>Cell architecture</h3>
                      <p className={SMALL}>Explain why cylindrical, prismatic or pouch cells are appropriate for the product, including assembly approach, thermal management, mechanical packaging and service strategy.</p>
                      <div className={TAG_ROW}>
                        {['Cylindrical', 'Prismatic', 'Pouch'].map((t) => (
                          <span key={t} className={TAG}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className={BLUE}>
                      <h3 className={H3M}>Battery architecture</h3>
                      <p className={SMALL}>Show how cells become modules or packs through series/parallel configuration, busbars or interconnects, BMS, thermal controls, enclosure, contactors, fusing and protection.</p>
                      <div className={TAG_ROW}>
                        {['Series / Parallel', 'BMS', 'Thermal', 'Protection'].map((t) => (
                          <span key={t} className={TAG}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`${G4} mt-5`}>
                    {parameterCards.map(([name, unit, copy]) => (
                      <div className={`${CARD} min-h-[150px]`} key={name}>
                        <div className={METRIC_LABEL}>Key parameter</div>
                        <h3 className={H3M}>{name}</h3>
                        <div className="mb-[5px] text-[13px] font-extrabold text-[#215d9a]">{unit}</div>
                        <p className={SMALL}>{copy}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 04 */}
                <section id="process" className={SECTION}>
                  <SectionHead
                    kicker="04 — Manufacturing blueprint"
                    title="The Complete Lithium-Ion Battery Manufacturing Journey"
                    lead="The DPR should read like a production story: materials enter the factory, each process transforms them under defined conditions, quality is verified at critical control points, and the finished battery leaves with a traceable identity."
                  />

                  <div className={`${CARD} mt-1.5`}>
                    {processSteps.map((step) => (
                      <div
                        key={step.n}
                        className="grid grid-cols-[40px_1fr] gap-2.5 border-b border-dashed border-[#dce8e0] py-[17px] last:border-b-0 min-[481px]:grid-cols-[46px_1fr] min-[481px]:gap-3.5"
                      >
                        <div className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#0e4a31] text-[13px] font-extrabold text-white min-[481px]:h-[46px] min-[481px]:w-[46px] min-[481px]:text-[15px]">
                          {step.n}
                        </div>
                        <div>
                          <h3 className={`${H3} mb-1.5 mt-0.5`}>{step.title}</h3>
                          <p className="m-0 text-sm text-[#526158]">{step.copy}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-3.5 min-[761px]:grid-cols-2 min-[1101px]:grid-cols-3">
                    {[
                      ['CELL MANUFACTURING', 'Electrode → Cell → Formation', 'Electrode preparation, coating and drying, calendering, slitting, cell assembly, electrolyte filling, sealing, formation, aging and grading are the core process blocks that distinguish cell manufacturing from pack assembly.'],
                      ['PACK ASSEMBLY', 'Cells → Module → Pack', 'Purchased cells are inspected and matched, electrically connected, integrated with a BMS and protection system, enclosed, tested and released as a finished application-specific battery pack.'],
                      ['QUALITY SYSTEM', 'Input → In-process → EOL', 'Quality cannot be “tested in” at the end. The DPR should define incoming inspection, process controls, data traceability, defect handling, rework policy, final testing and record retention across the line.'],
                    ].map(([index, title, copy]) => (
                      <div
                        key={index}
                        className="h-full rounded-2xl border border-[#dce7e0] bg-gradient-to-b from-[#fbfdfc] to-white p-[18px]"
                      >
                        <div className="mb-1.5 text-xs font-extrabold text-[#146341]">{index}</div>
                        <h3 className={H3M}>{title}</h3>
                        <p className="m-0 text-[13px] text-[#53635b]">{copy}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 05 */}
                <section id="machinery" className={SECTION}>
                  <SectionHead
                    kicker="05 — Machinery and plant"
                    title="Machinery Should Follow the Product, Capacity and Process"
                    lead="One of the costliest DPR mistakes is starting with a machine quotation and then trying to fit the project around it. The correct sequence is the opposite: product specification → process route → capacity → line balance → equipment specification → vendor comparison → procurement."
                  />

                  <div className={G4}>
                    {machineryCards.map((item) => (
                      <div className={CARD} key={item.title}>
                        <h3 className={H3M}>{item.title}</h3>
                        <p className={SMALL}>{item.copy}</p>
                      </div>
                    ))}
                  </div>

                  <div className={CALLOUT_BLUE}>
                    <strong className={STRONG_DARK}>Procurement discipline:</strong> a machinery schedule should include throughput, takt or cycle time, repeatability, permissible tolerances, utility loads, data-logging capability, changeover requirements, safety features, acceptance criteria and post-commissioning support—not only the machine name and price.
                  </div>
                </section>

                {/* 06 */}
                <section id="plant" className={SECTION}>
                  <SectionHead
                    kicker="06 — Factory planning"
                    title="Turn Output Targets into a Real Factory Layout"
                    lead="Installed capacity is only useful when the factory can physically move materials, people, information and finished product through the process. The DPR should therefore turn annual output into a daily and hourly production model."
                  />

                  <div className={G3}>
                    {[
                      ['Production zones', 'Raw-material or cell receiving, quarantine, incoming inspection, production, assembly, testing, finished-goods storage, dispatch and controlled service/rework areas.'],
                      ['Utilities & environment', 'Electrical demand, HVAC, compressed air, ventilation, environmental controls, specialised dry-room conditions where the process requires them, and emergency systems.'],
                      ['Safety & material movement', 'Segregation, fire protection, access, emergency response, storage compatibility, handling routes and controls for defective or suspect batteries.'],
                    ].map(([title, copy]) => (
                      <div className={ACCENT} key={title}>
                        <h3 className={H3M}>{title}</h3>
                        <p className={SMALL}>{copy}</p>
                      </div>
                    ))}
                  </div>

                  <div className={`${G2} mt-4`}>
                    <div className={CARD}>
                      <h3 className={H3M}>Capacity model</h3>
                      <p className={SMALL}>Annual output should be connected to shifts, working days, line efficiency, cycle time, planned downtime, yield and ramp-up. A 100% theoretical machine rating is not the same as sellable annual production.</p>
                    </div>
                    <div className={CARD}>
                      <h3 className={H3M}>Ramp-up model</h3>
                      <p className={SMALL}>The first operating year should normally reflect commissioning, operator training, process stabilisation, qualification and customer approvals rather than assuming mature-state utilisation from day one.</p>
                    </div>
                  </div>
                </section>

                {/* 07 */}
                <section id="economics" className={SECTION}>
                  <SectionHead
                    kicker="07 — Project economics"
                    title="Make the Numbers Tell the Same Story as the Engineering"
                    lead="A technically impressive battery project can still fail financially if the DPR overstates utilisation, ignores working capital, underestimates testing and quality costs, or assumes a selling price that the target customer will not support."
                  />

                  <div className={G4}>
                    {economicsCards.map((item) => (
                      <div className={CARD} key={item.title}>
                        <div className={METRIC_LABEL}>DPR model</div>
                        <h3 className={H3M}>{item.title}</h3>
                        <p className={SMALL}>{item.copy}</p>
                      </div>
                    ))}
                  </div>

                  <div className={`${G2} mt-4`}>
                    <div className={ACCENT}>
                      <h3 className={H3M}>Useful project indicators</h3>
                      <p className={SMALL}>Depending on the financing requirement, the model may evaluate contribution margin, EBITDA, operating break-even, cash break-even, working-capital intensity, payback period, project IRR and sensitivity to key assumptions.</p>
                    </div>
                    <div className={BLUE}>
                      <h3 className={H3M}>Sensitivity matters</h3>
                      <p className={SMALL}>Test the effect of lower utilisation, cell-price movements, exchange-rate changes, warranty claims, scrap/yield deterioration, delayed customer approvals and slower market ramp-up.</p>
                    </div>
                  </div>
                </section>

                {/* 08 */}
                <section id="compliance" className={SECTION}>
                  <SectionHead
                    kicker="08 — Compliance and market access"
                    title="Compliance Should Be Designed into the DPR, Not Added at the End"
                    lead="Compliance is not one universal battery licence. The applicable pathway depends on what is manufactured, where the facility operates, how the product is marketed and whether it is being supplied into a specific application such as an electric vehicle."
                  />

                  <div className={G4}>
                    {complianceCards.map((item) => (
                      <div className={CARD} key={item.title}>
                        <h3 className={H3M}>{item.title}</h3>
                        <p className={SMALL}>{item.copy}</p>
                      </div>
                    ))}
                  </div>

                  <div className={CALLOUT}>
                    <strong className={STRONG_DARK}>Important distinction:</strong> do not write the DPR as though one battery standard automatically covers every lithium-ion product. The testing and approval route should be identified from the exact battery application, product category and market before investment is locked.
                  </div>

                  <p className="mb-3.5 mt-1.5 text-xs text-[#6a756e]">
                    Official reference points include BIS product standards, MoRTH vehicle/battery requirements and the CPCB framework under the Battery Waste Management Rules. Always map the current requirement to the specific product and application before filing or procurement.
                  </p>
                </section>

                {/* 09 */}
                <section id="implementation" className={SECTION}>
                  <SectionHead
                    kicker="09 — Implementation strategy"
                    title="From DPR Approval to Commercial Production: The Implementation Bridge"
                    lead="A DPR should not end with projected profitability. It should explain how the project moves from paper to a working line, because the highest execution risk usually sits between sanction and stable production."
                  />

                  <div className={G3}>
                    {[
                      ['Stage 1', 'Freeze the specification', 'Finalise product, cell, chemistry, BOM, BMS architecture, test requirements, line capacity and acceptance criteria.'],
                      ['Stage 2', 'Procure and install', 'Issue equipment POs against technical specifications, prepare utilities and complete installation, safety checks and line integration.'],
                      ['Stage 3', 'Qualify and ramp', 'Run trials, validate process capability, train operators, establish quality records, resolve defects and move toward repeatable commercial production.'],
                    ].map(([stage, title, copy]) => (
                      <div className={ACCENT} key={stage}>
                        <div className={METRIC_LABEL}>{stage}</div>
                        <h3 className={H3M}>{title}</h3>
                        <p className={SMALL}>{copy}</p>
                      </div>
                    ))}
                  </div>

                  <div className={CALLOUT_BLUE}>
                    <strong className={STRONG_DARK}>A practical DPR should include an implementation calendar:</strong> engineering freeze, site preparation, utilities, machinery dispatch, installation, commissioning, trial batches, testing/approval milestones, workforce training, customer qualification and target commercial date.
                  </div>
                </section>

                {/* 10 */}
                <section id="mistakes" className={SECTION}>
                  <div className={KICKER}>10 — Avoid expensive mistakes</div>
                  <h2 className={H2}>Why Battery Plant Projects Lose Time, Capital and Momentum</h2>
                  <div className={G2}>
                    <div className={`${CARD_BASE} border-[#fecaca] bg-gradient-to-br from-[#fef2f2] to-white`}>
                      <h3 className={`${H3M} !text-[#b91c1c]`}>Typical weak-DPR mistakes</h3>
                      <ul className="list-disc pl-[18px] text-sm text-[#526158]">
                        <li>Starting with machinery instead of freezing the product and process.</li>
                        <li>Using theoretical machine capacity as sellable output.</li>
                        <li>Ignoring yield, scrap, warranty and rework in the cost model.</li>
                        <li>Underestimating testing, utilities, quality and working capital.</li>
                        <li>Treating compliance as a final documentation exercise.</li>
                      </ul>
                    </div>
                    <div className={ACCENT}>
                      <h3 className={H3M}>The stronger DPR approach</h3>
                      <ul className="list-disc pl-[18px] text-sm text-[#526158]">
                        <li>Freeze scope and application before vendor selection.</li>
                        <li>Translate capacity into a line-balanced operating model.</li>
                        <li>Make assumptions visible and test sensitivities.</li>
                        <li>Build quality and traceability into the process design.</li>
                        <li>Map compliance and market access before commercial launch.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 11 */}
                <section id="epr-nexuss" className={SECTION}>
                  <SectionHead
                    kicker="11 — EPR Nexuss approach"
                    title="How EPR Nexuss Can Turn a Battery Plant Idea into an Execution Roadmap"
                    lead="The objective is not to produce a generic document. It is to create a project roadmap that a promoter can use for planning, vendor discussions, compliance coordination, financing and execution."
                  />

                  <div className={G4}>
                    {[
                      ['Project scoping', 'Define product, capacity, application, chemistry and implementation boundary.'],
                      ['Technical planning', 'Map process flow, machinery, utilities, quality checkpoints and plant requirements.'],
                      ['Compliance mapping', 'Identify the relevant factory, environmental, product and battery-EPR pathway for the project.'],
                      ['Commercial modelling', 'Build CAPEX, working capital, operating assumptions, revenue logic and scenario analysis.'],
                    ].map(([title, copy]) => (
                      <div className={BLUE} key={title}>
                        <h3 className={H3M}>{title}</h3>
                        <p className={SMALL}>{copy}</p>
                      </div>
                    ))}
                  </div>

                  <div className={CALLOUT}>
                    <strong className={STRONG_DARK}>Best outcome:</strong> the promoter finishes the DPR knowing not only “how much the project may cost,” but also what has to be manufactured, what has to be purchased, what has to be approved, what can delay the launch and which assumptions are most important to monitor.
                  </div>
                </section>

                {/* 12 */}
                <section id="faq" className={SECTION}>
                  <SectionHead
                    kicker="12 — Client questions"
                    title="Questions Clients Ask Before Commissioning a Lithium-Ion Battery Project"
                    lead="These questions often determine whether the DPR becomes a useful execution document—or just another file on a desktop."
                  />

                  {faqs.map((f) => (
                    <details
                      key={f.q}
                      className="group mb-2.5 rounded-[14px] border border-[#dce7e0] bg-white px-4"
                    >
                      <summary className="cursor-pointer list-none px-0.5 py-[15px] text-sm font-extrabold text-[#0a3525] after:float-right after:text-lg after:text-[#39a95b] after:content-['+'] group-open:after:content-['–'] [&::-webkit-details-marker]:hidden">
                        {f.q}
                      </summary>
                      <div className="px-0.5 pb-4 text-sm text-[#526158]">{f.a}</div>
                    </details>
                  ))}
                </section>

                {/* CTA */}
                <section id="consult" className={SECTION}>
                  <div className="rounded-[22px] bg-gradient-to-br from-[#06251a] to-[#0e4a31] px-[18px] py-6 text-white shadow-[0_16px_45px_rgba(17,48,35,.10)] min-[761px]:p-[34px]">
                    <h2 className={`${H2_BASE} mt-0 text-white`}>
                      Ready to Turn Your Battery Plant Idea into a Bankable DPR?
                    </h2>
                    <p className="mb-3.5 max-w-[820px] text-white/[.78]">
                      Build the project from the inside out: product definition, manufacturing process, plant and machinery, compliance roadmap, financial model and implementation plan. A strong DPR gives the promoter a decision framework before committing major capital.
                    </p>
                    <div className="mt-[18px] flex flex-wrap gap-2.5">
                      <a href="mailto:contact@eprnexuss.com" className={`${BTN} bg-white text-[#0a3525]`}>
                        Consult with an Expert
                      </a>
                      <a href="#dpr" className={`${BTN} bg-white/[.07] text-white`}>
                        Review the DPR Framework
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Lithium-Ion Battery Manufacturing: Detailed Project Report',
            description: 'A practical guide to preparing a detailed project report for lithium-ion battery manufacturing or pack assembly in India.',
            author: { '@type': 'Organization', name: 'EPR Nexuss' },
            publisher: { '@type': 'Organization', name: 'EPR Nexuss' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.eprnexuss.com/' },
            keywords: [
              'lithium-ion battery manufacturing',
              'detailed project report',
              'battery pack assembly',
              'battery EPR',
              'battery plant setup',
              'project consultancy',
            ],
          }),
        }}
      />
    </>
  );
}