import React, { useEffect } from "react";
import StickyContactForm from "@/components/StickyContactForm";

/**
 * Lithium-Ion Battery Manufacturing in India
 * EPR Nexuss client-focused blog page.
 *
 * - All styling is inline Tailwind (no <style> block, no global CSS).
 * - Layout: hero + StickyContactForm share the first grid row. The form spans the
 *   whole grid height, so it starts level with the hero and stays sticky while the
 *   rest of the article scrolls.
 * - Sticky only works if no ancestor has overflow hidden/auto/scroll.
 */

/* ------------------------------------------------------------------ */
/* Shared class strings                                                */
/* ------------------------------------------------------------------ */

const H2 =
  "text-[clamp(29px,3.3vw,42px)] font-bold leading-[1.18] tracking-[-0.025em] text-[#0b3b28]";
const H3 = "text-[20px] font-bold leading-[1.3] text-[#153e2b] sm:text-[22px]";
const CARD =
  "rounded-[18px] border border-[#dce7e1] bg-white p-5 shadow-[0_8px_25px_rgba(15,55,37,.05)] md:p-[25px]";
const NUM =
  "grid h-[42px] w-[42px] place-items-center rounded-xl bg-[#eaf6ef] font-extrabold text-[#176b45]";
const INTRO =
  "rounded-r-[18px] border border-l-[5px] border-[#dce7e1] border-l-[#176b45] bg-white p-5 shadow-[0_12px_34px_rgba(15,55,37,.08)] md:p-7 [&>p]:mb-4 [&>p:last-child]:mb-0";
const HIGHLIGHT =
  "rounded-[18px] border border-[#cfe5d8] bg-gradient-to-br from-[#eaf6ef] to-white p-5 md:p-7 [&>p:last-child]:mb-0";
const BLUE_BOX =
  "rounded-[18px] border border-[#d7e8fb] bg-[#eef6ff] p-5 md:p-[27px] [&>p:last-child]:mb-0";
const GRID_3 = "grid grid-cols-1 gap-5 md:grid-cols-3";
const GRID_2 = "grid grid-cols-1 gap-5 md:grid-cols-2";
const BULLETS = "my-3 mb-[18px] list-disc pl-[22px] [&>li]:my-[7px]";
const CHECKLIST =
  "m-0 list-none p-0 [&>li]:relative [&>li]:border-b [&>li]:border-dashed [&>li]:border-[#dce7e1] [&>li]:py-[11px] [&>li]:pl-8 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[10px] [&>li]:before:font-black [&>li]:before:text-[#176b45] [&>li]:before:content-['✓']";

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

type Item = { t: string; p: string; n?: string };

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="my-[38px] scroll-mt-24 md:my-[50px]">
      <div className="mb-[22px]">
        <div className="mb-[7px] text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#176b45]">
          {kicker}
        </div>
        <h2 className={H2}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Cards({
  items,
  cols = 3,
  className = "",
}: {
  items: Item[];
  cols?: 2 | 3;
  className?: string;
}) {
  return (
    <div className={`${cols === 3 ? GRID_3 : GRID_2} ${className}`}>
      {items.map((it) => (
        <article key={it.t} className={CARD}>
          {it.n && <div className={`${NUM} mb-3.5`}>{it.n}</div>}
          <h3 className={`${H3} mb-2.5`}>{it.t}</h3>
          <p className="mb-0">{it.p}</p>
        </article>
      ))}
    </div>
  );
}

function Process({ steps }: { steps: Item[] }) {
  return (
    <div className="grid gap-4">
      {steps.map((s, i) => (
        <article
          key={s.t}
          className="grid grid-cols-[45px_1fr] gap-3 rounded-2xl border border-[#dce7e1] bg-white p-4 sm:grid-cols-[55px_1fr] sm:gap-4 sm:p-[19px]"
        >
          <div className={NUM}>{i + 1}</div>
          <div>
            <h3 className={`${H3} mb-2.5`}>{s.t}</h3>
            <p className="mb-0 text-[#5d6963]">{s.p}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function Callout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="my-[22px] rounded-[15px] border border-[#f1dfae] bg-[#fff8e8] px-6 py-[22px]">
      <strong className="text-[#795b0a]">{label}</strong> {children}
    </div>
  );
}

function Table({
  head,
  rows,
  boldCols = [0],
}: {
  head: string[];
  rows: string[][];
  boldCols?: number[];
}) {
  return (
    <div className="my-[18px] overflow-x-auto rounded-[15px] border border-[#dce7e1] bg-white">
      <table className="w-full min-w-[640px] border-collapse text-[14px] md:text-base">
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                className="border-b border-[#dce7e1] bg-[#eff7f2] p-[11px] text-left align-top text-[#0b3b28] md:px-[15px] md:py-[14px]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&>tr:last-child>td]:border-b-0">
          {rows.map((r) => (
            <tr key={r.join("|")}>
              {r.map((c, i) => (
                <td
                  key={i}
                  className="border-b border-[#dce7e1] p-[11px] text-left align-top md:px-[15px] md:py-[14px]"
                >
                  {boldCols.includes(i) ? <strong>{c}</strong> : c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group my-3 overflow-hidden rounded-[15px] border border-[#dce7e1] bg-white">
      <summary className="cursor-pointer list-none px-5 py-[18px] font-extrabold text-[#173d2c] after:float-right after:text-[22px] after:leading-none after:text-[#176b45] after:content-['+'] group-open:after:content-['−'] [&::-webkit-details-marker]:hidden">
        {q}
      </summary>
      <div className="px-5 pb-5 text-[#5d6963]">
        <p className="mb-0">{a}</p>
      </div>
    </details>
  );
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const TOC = [
  ["#why", "1. Why lithium-ion battery manufacturing matters"],
  ["#battery", "2. What lithium-ion battery manufacturing means"],
  ["#applications", "3. Battery products and target markets"],
  ["#chemistry", "4. Choosing battery chemistry for the application"],
  ["#process", "5. Lithium-ion battery production process"],
  ["#bms", "6. BMS, thermal management and electrical protection"],
  ["#quality", "7. Quality control, testing and traceability"],
  ["#setup", "8. Manufacturing setup, machinery and utilities"],
  ["#facility", "9. Facility design, safety and expansion planning"],
  ["#newentrant", "10. Challenges for entrepreneurs entering from another industry"],
  ["#economics", "11. Investment and project economics"],
  ["#dpr", "12. Detailed Project Report for battery manufacturing"],
  ["#compliance", "13. Registration, compliance and Battery EPR"],
  ["#delaycost", "14. Why project delays become expensive"],
  ["#eprnexuss", "15. How EPR Nexuss supports the project"],
  ["#startuproadmap", "16. From first discussion to implementation"],
  ["#benefits", "17. Practical business benefits"],
  ["#lfp-specs", "18. LFP battery specifications used in EVs"],
  ["#faq", "19. Client-focused FAQs"],
];

const HERO_STATS = [
  ["1,187 GWh", "Global EV battery usage reported for 2025 by IMARC Engineering"],
  ["₹10,900 Cr", "PM E-DRIVE scheme outlay launched to support India's EV ecosystem"],
  ["₹20–40 Lakh", "Published machinery reference for a medium-scale assembly setup from Entrepreneur India"],
];

const WHY: Item[] = [
  { n: "01", t: "Electric mobility", p: "Demand from electric two-wheelers, three-wheelers, commercial vehicles and specialised mobility products creates opportunities for application-specific battery packs." },
  { n: "02", t: "Energy storage", p: "Solar backup, telecom, UPS and stationary storage require batteries designed around load profile, runtime, safety and operating environment." },
  { n: "03", t: "Industrial applications", p: "Material handling, medical equipment, automation and other industrial systems can require customised voltage, capacity, enclosure and protection designs." },
];

const APPLICATIONS: Item[] = [
  { t: "EV batteries", p: "Application-specific packs for two-wheelers, three-wheelers, utility vehicles and other electric mobility products, with BMS, thermal management and protection matched to the vehicle." },
  { t: "Solar & ESS batteries", p: "Battery systems designed around daily cycling, backup duration, inverter compatibility, monitoring and installation environment." },
  { t: "Industrial batteries", p: "Power systems for machinery, automation, material handling, telecom, UPS and specialised industrial equipment." },
  { t: "Portable power", p: "Compact rechargeable products where enclosure, weight, runtime, charging interface and safety are central to product design." },
  { t: "Custom OEM batteries", p: "Build-to-spec products developed around customer drawings, electrical requirements, communication protocols and operating conditions." },
  { t: "Replacement & retrofit products", p: "Application-specific replacement batteries can create opportunities where an older system needs a reliable modern energy-storage solution." },
];

const PROCESS: Item[] = [
  { t: "Product specification", p: "Freeze voltage, capacity, current demand, application, enclosure, communication needs, operating conditions and safety requirements." },
  { t: "Component qualification", p: "Define approved suppliers and inspect incoming power-storage units, BMS hardware, busbars, connectors, fuses, cables, enclosures, insulation and thermal-management components." },
  { t: "Electrical configuration", p: "Configure the required series and parallel arrangement or approved module architecture to achieve the finished product's voltage and capacity target." },
  { t: "Interconnection and joining", p: "Use controlled welding, bolting or approved joining methods for busbars, terminals and electrical connections, with defined torque and inspection requirements." },
  { t: "BMS integration", p: "Install and configure the battery management system for voltage protection, current protection, temperature monitoring, balancing and state monitoring." },
  { t: "Thermal management", p: "Integrate cooling plates, thermal pads, sensors, air or liquid cooling arrangements where required by the battery design and duty cycle." },
  { t: "Enclosure and protection assembly", p: "Complete the mechanical enclosure, insulation, sealing, vents, connectors, service interfaces and protection features required for the application." },
  { t: "Software and parameter configuration", p: "Load or configure approved BMS parameters, protection thresholds, communication settings and application-specific controls." },
  { t: "Electrical and functional testing", p: "Verify voltage, current behaviour, insulation, continuity, communication, charging, discharge response, protection functions and system integration." },
  { t: "Safety testing", p: "Apply the relevant product and application test programme, including protection checks and tests required by the applicable standards or customer specification." },
  { t: "Aging and quality release", p: "Where required, conduct controlled aging, repeat functional checks and final inspection before releasing the finished product." },
  { t: "Labelling, documentation and dispatch", p: "Record batch information, ratings, warnings, serial or identification data, test results and shipping documentation before delivery." },
];

const BMS: Item[] = [
  { t: "Over-voltage protection", p: "The BMS must monitor the electrical operating range and respond according to the approved product strategy." },
  { t: "Under-voltage protection", p: "Protection logic helps prevent operation outside the defined electrical range." },
  { t: "Current protection", p: "Over-current and short-circuit protections help protect the finished battery and connected equipment." },
  { t: "Temperature monitoring", p: "Sensors and thermal controls help the system respond to temperature conditions during charge and discharge." },
  { t: "State monitoring", p: "SoC and SoH estimation can help the user and connected system understand available energy and battery condition." },
  { t: "Communication", p: "CAN, RS485 or other approved interfaces can connect the battery to chargers, inverters, vehicles or monitoring systems." },
];

const QUALITY: Item[] = [
  { t: "Incoming inspection", p: "Verify purchased components against approved specifications and supplier documents before production." },
  { t: "Process inspection", p: "Control joining quality, torque, insulation, assembly sequence, BMS programming and enclosure work." },
  { t: "Electrical testing", p: "Check voltage, current response, continuity, insulation and communication functions." },
  { t: "Functional testing", p: "Confirm charging, discharge response, protection actions and communication with the intended application." },
  { t: "Traceability", p: "Maintain serial, batch, supplier and test records so a production issue can be linked back to the affected finished products." },
  { t: "Final release", p: "Release products only after defined test criteria, documentation checks and quality sign-off are complete." },
];

const SETUP: Item[] = [
  { t: "1. Product definition", p: "Define voltage, capacity, current, dimensions, enclosure, application, expected life and customer requirements." },
  { t: "2. Production layout", p: "Plan incoming material, assembly, testing, storage, finished-goods movement and controlled access." },
  { t: "3. Machinery", p: "Typical equipment can include welding systems, electrical testers, BMS programming tools, charging and discharge equipment, insulation testers, torque tools and assembly fixtures." },
  { t: "4. Utilities", p: "Plan reliable electrical supply, ventilation, ESD protection, compressed air where required, lighting, fire systems and test-bench power." },
  { t: "5. Quality system", p: "Define inspection plans, test records, traceability, non-conformance handling, calibration and final release controls." },
  { t: "6. Compliance roadmap", p: "Map the registrations, product requirements, environmental obligations and application-specific approvals before operations begin." },
];

const FACILITY: Item[] = [
  { t: "Electrical safety", p: "Grounding, protection devices, safe wiring practices and controlled test benches are fundamental to production safety." },
  { t: "Fire readiness", p: "Design detection, suppression, emergency access and storage practices around the actual battery products and site risk assessment." },
  { t: "ESD protection", p: "Use appropriate ESD controls wherever sensitive electronics and BMS hardware are handled." },
  { t: "Material flow", p: "Keep incoming components, active production, inspection and finished goods organised to reduce mix-ups and unnecessary movement." },
  { t: "Testing area", p: "Provide dedicated electrical testing, charging, discharge and observation areas suited to the product and throughput." },
  { t: "Future expansion", p: "Reserve space and utility capacity for additional products, production stations or testing capability as demand grows." },
];

const NEWENTRANT: Item[] = [
  { n: "01", t: "Choosing the right product", p: "Starting with a vague idea such as “I want to manufacture lithium batteries” is not enough. The voltage, capacity, application and customer define the real project." },
  { n: "02", t: "Understanding technical requirements", p: "BMS logic, protection, thermal management, electrical integration, testing and traceability are specialised areas for a new entrant." },
  { n: "03", t: "Buying the right machinery", p: "Equipment should follow the product and process. Buying machines first can create capacity mismatch, under-used equipment or later modification costs." },
  { n: "04", t: "Understanding compliance", p: "Product certification, environmental requirements, fire and factory requirements and Battery EPR can involve different authorities and documents." },
  { n: "05", t: "Building the right team", p: "A new unit needs capable people across electrical engineering, production, quality, testing, EHS and maintenance." },
  { n: "06", t: "Managing ramp-up cash flow", p: "Capital can remain tied up in equipment, inventory, testing, certification, customer sampling and working capital before stable sales begin." },
  { n: "07", t: "Finding the first customers", p: "Battery buyers often care about consistency, documentation, warranty, safety and service—not only price." },
  { n: "08", t: "Maintaining records", p: "Serialisation, test reports, incoming records, warranty information and compliance documentation become essential as volumes increase." },
  { n: "09", t: "Knowing what to do first", p: "The entrepreneur needs a practical order of execution so technical, financial and compliance decisions do not conflict." },
];

const ECON_FACTORS: Item[] = [
  { t: "Capacity", p: "Daily output, shifts, utilisation and product mix influence equipment and working-capital needs." },
  { t: "Automation", p: "Manual, semi-automatic and automated lines have different capital, labour and quality-control requirements." },
  { t: "Product complexity", p: "EV packs, stationary systems and custom industrial batteries can require very different testing and integration capability." },
];

const DPR: Item[] = [
  { t: "01. Executive summary", p: "Business concept, location, product range, capacity and implementation plan." },
  { t: "02. Promoter profile", p: "Ownership, management capability, relevant experience and proposed technical team." },
  { t: "03. Product specification", p: "Voltage, capacity, application, battery architecture, BMS, enclosure and customer requirements." },
  { t: "04. Market analysis", p: "Target customers, use cases, competitor context, pricing assumptions and route to market." },
  { t: "05. Manufacturing process", p: "Detailed workflow from incoming components to final testing, packaging and dispatch." },
  { t: "06. Machinery & layout", p: "Equipment list, technical specifications, production stations, test benches and material movement." },
  { t: "07. Raw materials", p: "Approved components, suppliers, inventory norms, lead times and supply risks." },
  { t: "08. Utilities & infrastructure", p: "Power, ventilation, ESD controls, fire systems, testing utilities, storage and waste handling." },
  { t: "09. Manpower", p: "Engineering, production, quality, testing, maintenance, EHS and administration requirements." },
  { t: "10. CAPEX & OPEX", p: "Land, civil work, machinery, utilities, certification, staffing, inventory and recurring costs." },
  { t: "11. Financial projections", p: "Revenue, utilisation, margins, working capital, cash flow, break-even and sensitivity scenarios." },
  { t: "12. Compliance roadmap", p: "Registrations, product standards, environmental requirements, EPR responsibilities and execution sequence." },
];

const COMPLIANCE: { t: string; items: string[] }[] = [
  {
    t: "Business and factory registrations",
    items: [
      "Company or business documentation should match the proposed manufacturing activity.",
      "State and local factory, fire and industrial requirements should be assessed for the site.",
      "GST, Udyam and other commercial registrations should be aligned with the actual business model where applicable.",
    ],
  },
  {
    t: "Product and battery compliance",
    items: [
      "Identify the product standards that apply to the intended battery and application.",
      "For EV products, assess applicable automotive battery safety and certification requirements.",
      "For batteries placed on the Indian market, assess Battery EPR registration and reporting obligations.",
    ],
  },
  {
    t: "Environmental requirements",
    items: [
      "Assess pollution-control requirements based on the actual process and site.",
      "Plan waste handling, storage and disposal for manufacturing-related waste streams.",
      "Keep records that support the declared process and actual operations.",
    ],
  },
  {
    t: "Application-ready documentation",
    items: [
      "Prepare company, site, process, product and capacity information consistently.",
      "Maintain supporting drawings, photographs, invoices, agreements and technical records as required.",
      "Track authority observations and document responses instead of repeatedly resubmitting incomplete files.",
    ],
  },
];

const DELAY: Item[] = [
  { n: "01", t: "Wrong sequence", p: "Buying equipment before freezing the product can force expensive changes later." },
  { n: "02", t: "Repeated documentation", p: "If the DPR, plant details and application describe different versions of the business, work can be repeated." },
  { n: "03", t: "Unclear application status", p: "An entrepreneur needs to know what has been submitted, what is pending and what must happen next." },
  { n: "04", t: "Idle capital", p: "Capital can remain blocked in site, equipment and inventory while the compliance path is unresolved." },
  { n: "05", t: "Missed customer opportunities", p: "Unclear product specifications or delayed certification can hold back sampling and customer discussions." },
  { n: "06", t: "Owner time consumed", p: "The promoter can end up chasing multiple vendors and documents instead of building the business." },
];

const SUPPORT: Item[] = [
  { n: "01", t: "Business model assessment", p: "Understand the product, target market, expected capacity, location and current project status." },
  { n: "02", t: "DPR preparation", p: "Develop a project report covering technical scope, market, machinery, infrastructure, investment, working capital and compliance." },
  { n: "03", t: "Compliance mapping", p: "Identify registrations, product requirements, environmental obligations and EPR responsibilities that apply to the proposed activity." },
  { n: "04", t: "Document coordination", p: "Organise the company, site, process, product and technical information so the same project story appears across the file." },
  { n: "05", t: "Registration support", p: "Support applicable CPCB and other regulatory submissions with document preparation, application coordination and response tracking." },
  { n: "06", t: "Follow-up and issue tracking", p: "Maintain a clear action list for pending documents, observations, corrections and client-side decisions." },
];

const ROADMAP: Item[] = [
  { t: "Define the battery product", p: "Freeze application, voltage, capacity, operating conditions, enclosure and customer requirements." },
  { t: "Validate the business case", p: "Study target customers, price positioning, volumes, competitors, supply chain and working-capital needs." },
  { t: "Prepare the DPR", p: "Translate the product concept into process, machinery, facility, investment and financial assumptions." },
  { t: "Map compliance", p: "Identify registrations, product certification, environmental obligations, fire requirements and Battery EPR responsibilities." },
  { t: "Align the facility", p: "Match the layout, utilities, testing area, storage and safety systems to the production model." },
  { t: "Prepare and submit documents", p: "Keep company, site, product, capacity and technical information consistent across the relevant applications." },
  { t: "Close observations", p: "Track questions, missing documents and corrections with clear responsibility and status." },
  { t: "Prepare for production and sales", p: "Align quality records, testing, warranty documentation, EPR records and customer-support processes with actual operations." },
];

const BENEFITS: Item[] = [
  { t: "Clearer decisions", p: "Understand what needs to be done before making the next major investment." },
  { t: "Less avoidable rework", p: "Keep product, DPR, facility and compliance information aligned." },
  { t: "Better visibility", p: "Track applications, pending documents and authority observations in a structured workflow." },
  { t: "Stronger startup readiness", p: "Prepare the manufacturing operation around actual product and customer requirements." },
  { t: "Compliance awareness", p: "Identify the regulatory requirements that apply to the chosen battery business model." },
  { t: "More owner focus", p: "Spend more time on suppliers, customers, manpower and operations instead of disconnected paperwork." },
];

const LFP_FORMS: Item[] = [
  { t: "Prismatic cells", p: "The most widely used LFP format in passenger cars and larger commercial vehicles. Rectangular aluminium-cased cells (for example 100–280+ Ah grades) simplify module or cell-to-pack assembly and are supplied by major cell makers such as CATL and others." },
  { t: "Blade / long prismatic cells", p: "BYD’s Blade battery and similar long, thin prismatic designs. These cells are arranged side-by-side into a structural pack (cell-to-pack), improving space utilisation and simplifying cooling and structural integration." },
  { t: "Cylindrical cells", p: "Less dominant than prismatic for pure LFP in passenger cars, but used in certain applications and smaller formats (for example 32140 and related sizes). Cylindrical LFP is also seen in some two-wheeler and specialised packs." },
];

const FAQS: [string, string][] = [
  ["Can I start a lithium-ion battery manufacturing business if I come from another industry?", "Yes. The first requirement is not previous battery experience alone; it is a clear product, a realistic business model, the right technical team and a structured compliance and implementation plan."],
  ["What should I decide before purchasing machinery?", "Define the product, target capacity, application, battery architecture, testing requirements, facility constraints and compliance route first. Machinery should then be selected against those assumptions."],
  ["Can EPR Nexuss prepare a DPR for my battery manufacturing project?", "EPR Nexuss can support a project-specific DPR covering the business model, product, market, manufacturing workflow, machinery, infrastructure, manpower, investment, working capital, financial assumptions, risk and compliance roadmap."],
  ["Can EPR Nexuss help with battery EPR registration?", "EPR Nexuss can support applicable registration and documentation workflows, including organising the business, product and supporting information needed for the relevant portal process. Final registration decisions remain with the competent authority."],
  ["What if another consultant has already taken my money but the project is still waiting?", "The sensible first step is a status and gap review. Existing reports, documents, submissions and authority correspondence can be checked for what is still usable, what is outdated and what needs correction before new work is commissioned."],
  ["What products can a lithium-ion battery manufacturer target?", "Depending on capability, manufacturers can target EV applications, solar and stationary storage, telecom and UPS, industrial equipment, portable power and custom OEM battery products."],
  ["What makes a battery DPR useful instead of just a document?", "A useful DPR connects product specifications to machinery, facility needs, investment, working capital, market assumptions and compliance. It should help the promoter make decisions rather than simply describe an industry."],
  ["Can EPR Nexuss guarantee approval?", "No. Government and certification authorities make the final decisions. EPR Nexuss can support preparation, submission, documentation coordination, corrections and follow-up."],
  ["What should I keep ready before the first consultation?", "Keep company details, proposed location, product idea, target application, expected capacity, existing machinery quotations, available investment range and any earlier applications or consultant documents."],
  ["Why is compliance easier when it is planned with the DPR?", "The same product, capacity, process, location and ownership information must often appear across business and regulatory documents. Planning them together helps reduce contradictions and repeated document preparation."],
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function LithiumIonBatteryManufacturingBlog() {
  useEffect(() => {
    const prevTitle = document.title;
    const prevBehavior = document.documentElement.style.scrollBehavior;
    document.title =
      "Lithium-Ion Battery Manufacturing in India: From Battery Production to a Compliant Business";
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.title = prevTitle;
      document.documentElement.style.scrollBehavior = prevBehavior;
    };
  }, []);

  return (
    <div className="bg-[#f6f9f7] mt-32 font-sans text-base leading-[1.72] text-[#17221d] max-[480px]:text-[15px] [&_a]:text-[#145da0]">
      {/*
        Grid: hero (row 1, col 1) | form (col 2, spans both rows, sticky) | content (row 2, col 1).
        On mobile the DOM order gives: hero -> form -> content.
      */}
      <div className="mx-auto mt-[18px] grid w-[94%] max-w-[1460px] grid-cols-1 items-start gap-6 pb-[70px] md:mt-[30px] lg:grid-cols-[minmax(0,1fr)_340px]">
        {/* ============================ HERO ============================ */}
        <header className="min-w-0 overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_85%_20%,rgba(67,177,116,.22),transparent_28%),linear-gradient(135deg,#082d1e_0%,#0d4930_52%,#103f68_100%)] px-[21px] pb-9 pt-7 text-white sm:px-[30px] sm:pb-12 sm:pt-[34px] lg:col-start-1 lg:row-start-1 lg:rounded-[20px] lg:px-[42px] lg:pb-[58px] lg:pt-[42px]">
          <div className="mb-5 inline-flex rounded-full border border-white/30 px-[13px] py-[7px] text-[13px] uppercase tracking-[0.06em] text-[#e4fff0]">
            Battery Manufacturing • India • Business & Compliance
          </div>
          <h1 className="mb-[22px] max-w-[940px] text-[clamp(35px,5vw,62px)] font-bold leading-[1.08] tracking-[-0.035em]">
            Lithium-Ion Battery Manufacturing in India:{" "}
            <span className="text-[#8fe0ae]">From Battery Production to a Compliant Business</span>
          </h1>
          <p className="mb-0 max-w-[850px] text-[17px] text-[#e6f1eb] sm:text-[19px]">
            A practical guide to lithium-ion battery manufacturing focused on finished battery products,
            pack and module production, BMS integration, testing, plant setup, business planning,
            compliance and the support required to turn a battery idea into an organised commercial operation.
          </p>

          <div className="mt-9 grid max-w-[850px] grid-cols-1 gap-3.5 md:grid-cols-3">
            {HERO_STATS.map(([value, label]) => (
              <div key={value} className="rounded-[15px] border border-white/15 bg-white/[0.09] p-[17px]">
                <strong className="block text-[25px] text-white">{value}</strong>
                <small className="text-[#cfe4d8]">{label}</small>
              </div>
            ))}
          </div>
        </header>

        {/* ===================== STICKY CONTACT FORM ===================== */}
        <aside
          aria-label="Battery manufacturing consultation form"
          className="z-10 min-w-0 lg:sticky lg:top-[88px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-h-[calc(100vh-108px)] lg:self-start lg:overflow-y-auto"
        >
          <StickyContactForm />
        </aside>

        {/* =========================== CONTENT =========================== */}
        <main className="min-w-0 lg:col-start-1 lg:row-start-2">
          {/* Table of contents */}
          <nav
            aria-label="Table of contents"
            className="mb-[34px] rounded-[18px] border border-[#dce7e1] bg-white p-[21px] shadow-[0_12px_34px_rgba(15,55,37,.08)] md:p-[26px]"
          >
            <h2 className="mb-[13px] text-xl font-bold">What this guide covers</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2">
              {TOC.map(([href, label]) => (
                <a key={href} href={href} className="font-semibold">
                  {label}
                </a>
              ))}
            </div>
          </nav>

          {/* 1 */}
          <Section id="why" kicker="The opportunity" title="Why lithium-ion battery manufacturing is becoming a major business opportunity">
            <div className={INTRO}>
              <p>
                Lithium-ion batteries are used across electric mobility, solar and stationary storage,
                telecom backup, industrial equipment, portable power and specialised electronics. For an entrepreneur,
                the opportunity is not limited to one battery format. It can include standard products,
                customer-specific packs, contract manufacturing, private-label products and application-focused
                energy-storage solutions.
              </p>
              <p>
                IMARC Engineering reported global EV battery usage of about 1,187 GWh in 2025, with year-on-year growth
                of 31.7%. That figure is global rather than an India-only manufacturing number, but it illustrates the
                scale of the battery ecosystem in which Indian manufacturers are building products and supply chains.
              </p>
            </div>
            <Cards items={WHY} className="mt-5" />
          </Section>

          {/* 2 */}
          <Section id="battery" kicker="The business definition" title="What does lithium-ion battery manufacturing actually involve?">
            <p className="mb-4">
              In this guide, battery manufacturing means converting purchased battery components and approved energy-storage units
              into finished lithium-ion battery products or integrated battery packs ready for a defined application. The work
              can include electrical configuration, interconnection, BMS integration, thermal management, enclosure assembly,
              protection systems, software or parameter configuration, quality checks, charging and discharge testing,
              labelling and final dispatch.
            </p>
            <div className={GRID_2}>
              <div className={CARD}>
                <h3 className={`${H3} mb-2.5`}>Typical battery manufacturing models</h3>
                <ul className={BULLETS}>
                  <li><strong>OEM contract manufacturing:</strong> produce batteries to another company's specifications.</li>
                  <li><strong>Private-label production:</strong> manufacture products that are sold under a customer's brand.</li>
                  <li><strong>Custom battery packs:</strong> engineer voltage, capacity, enclosure, BMS and connectors around a specific application.</li>
                  <li><strong>Energy-storage products:</strong> develop battery systems for solar, backup and stationary applications.</li>
                </ul>
              </div>
              <div className={HIGHLIGHT}>
                <h3 className={`${H3} mb-2.5`}>Why the project must start with the product</h3>
                <p>
                  A battery for an e-rickshaw does not have the same requirements as a telecom backup battery or an industrial
                  energy-storage system. Voltage, capacity, discharge rate, thermal environment, enclosure, communication,
                  charging method, safety controls and testing can all change. A good project therefore defines the finished
                  battery before finalising machinery, layout or investment assumptions.
                </p>
              </div>
            </div>
          </Section>

          {/* 3 */}
          <Section id="applications" kicker="Choose the market before the machine" title="Which lithium-ion battery products can a manufacturer build?">
            <Cards items={APPLICATIONS} />
          </Section>

          {/* 4 */}
          <Section id="chemistry" kicker="Product selection" title="Choosing lithium-ion battery chemistry around the application">
            <p className="mb-4">
              Battery chemistry is a product decision. The manufacturer should evaluate the customer's energy requirement,
              power demand, cycle-life expectation, operating temperature, safety strategy, target cost and supply chain
              before freezing the product specification.
            </p>
            <Table
              head={["Chemistry", "Common positioning", "Typical application context", "Business consideration"]}
              rows={[
                ["LFP", "Durability and strong safety characteristics", "EVs and stationary storage", "Often considered where long service life and thermal characteristics are important."],
                ["NMC", "High energy-performance profile", "Mobility and higher-energy applications", "Requires careful product, thermal and protection strategy."],
                ["LCO", "Compact energy-storage applications", "Selected portable and electronic applications", "Product suitability depends on required life, power and safety profile."],
                ["LMO", "Power-oriented applications", "Selected industrial and mobility uses", "Must be evaluated against the complete operating profile."],
              ]}
            />
            <Callout label="Client takeaway:">
              do not choose a chemistry only because it is popular. Choose it because it fits the product specification and the customer's operating conditions.
            </Callout>
          </Section>

          {/* 5 */}
          <Section id="process" kicker="Manufacturing workflow" title="How lithium-ion batteries are manufactured from components to finished products">
            <Process steps={PROCESS} />
            <Callout label="Important:">
              the exact workflow depends on product type, battery architecture, application, production scale, supplier specifications and applicable standards.
            </Callout>
          </Section>

          {/* 6 */}
          <Section id="bms" kicker="The intelligence inside the battery" title="BMS, thermal management and electrical protection are central to finished battery quality">
            <Cards items={BMS} />
            <div className={`${BLUE_BOX} mt-[22px]`}>
              <h3 className={`${H3} mb-2.5`}>Why this matters commercially</h3>
              <p>
                A battery manufacturer is not only assembling hardware. The manufacturer is delivering a controlled energy-storage product whose electrical behaviour, protection logic, thermal design and documentation need to remain consistent from production through service.
              </p>
            </div>
          </Section>

          {/* 7 */}
          <Section id="quality" kicker="Quality and reliability" title="Quality control, testing and traceability should be built into battery production">
            <Cards items={QUALITY} />
            <div className={`${INTRO} mt-[22px]`}>
              <p>
                Laserax highlights automation, joining, bonding, traceability and final validation as important technologies in EV battery manufacturing. For a new manufacturer, the broader lesson is that quality must be designed into the production workflow rather than inspected only after assembly is finished.
              </p>
            </div>
          </Section>

          {/* 8 */}
          <Section id="setup" kicker="Before investment" title="What a lithium-ion battery manufacturing setup needs">
            <Cards items={SETUP} cols={2} />
          </Section>

          {/* 9 */}
          <Section id="facility" kicker="Facility engineering" title="Facility design, safety and expansion planning for a battery manufacturing plant">
            <div className={INTRO}>
              <p>
                Sudvivek's facility-design guidance identifies safety, energy efficiency, contamination control and scalability as important considerations for lithium-ion battery assembly facilities. A production site should therefore be planned around actual material flow, equipment, people movement, testing areas, storage and emergency response.
              </p>
              <p>
                The facility should also separate incoming materials, production, testing, finished goods and waste areas where the process requires it. Fire safety, ventilation, electrical protection, access control and emergency procedures should be considered during layout planning rather than added later.
              </p>
            </div>
            <Cards items={FACILITY} className="mt-5" />
          </Section>

          {/* 10 */}
          <Section id="newentrant" kicker="For entrepreneurs entering from another industry" title="What makes lithium-ion battery manufacturing difficult for a new entrant?">
            <div className={INTRO}>
              <p>
                A first-time battery entrepreneur may already understand sales, operations, finance or manufacturing management. The difficult part is connecting that experience with battery-specific product design, electrical protection, BMS, testing, safety, compliance and customer requirements.
              </p>
              <p>
                Entrepreneur India identifies technical knowledge, infrastructure, machinery, testing, compliance, workforce and financial planning among the key considerations for a battery assembly business. For someone changing industries, the challenge is often not one missing document; it is the number of decisions that must agree with each other.
              </p>
            </div>
            <Cards items={NEWENTRANT} className="mt-5" />
            <Callout label="The practical answer:">
              a new entrant does not need to solve every technical question alone. The project needs a structured path that connects the product, DPR, facility, machinery, compliance and execution plan.
            </Callout>
          </Section>

          {/* 11 */}
          <Section id="economics" kicker="Investment planning" title="How much can a lithium-ion battery manufacturing project cost?">
            <p className="mb-4">
              Battery investment figures vary significantly because a small finished-battery assembly operation and a large multi-GWh industrial plant are different businesses. Published figures should therefore be used as planning references, not as quotations for a particular project.
            </p>
            <Table
              head={["Published reference", "Scope", "Published figure", "How to interpret it"]}
              boldCols={[2]}
              rows={[
                ["Entrepreneur India, 2026", "Medium-scale battery assembly", "₹20–40 lakh machinery", "Published machinery reference for a medium-scale setup; actual equipment depends on throughput and product complexity."],
                ["Entrepreneur India, 2026", "100–200 batteries/day project example", "₹75 lakh–₹1.25 crore total investment", "Includes project-specific estimates for machinery, components, infrastructure, certification and working capital; not a universal budget."],
                ["IMARC Engineering, 2026", "1–2 GWh battery pack assembly", "₹200–400 crore", "A much larger industrial scale than a small or medium assembly workshop, showing how capacity changes the project envelope."],
              ]}
            />
            <Cards items={ECON_FACTORS} className="mt-5" />
          </Section>

          {/* 12 */}
          <Section id="dpr" kicker="Detailed Project Report" title="What should a lithium-ion battery manufacturing DPR contain?">
            <div className={INTRO}>
              <p>
                A strong DPR converts the business idea into a documented technical, commercial and financial plan. It should help an entrepreneur understand what is being manufactured, what investment is required, which approvals apply, how the plant will operate and how the business will reach customers.
              </p>
            </div>
            <Cards items={DPR} className="mt-5" />
            <div className={`${HIGHLIGHT} mt-[22px]`}>
              <h3 className={`${H3} mb-2.5`}>The DPR should answer the questions before the money is spent</h3>
              <p>
                What exactly will be manufactured? What equipment is genuinely required? What will the facility cost? Which approvals are relevant? How much working capital is needed while customers qualify the product? A DPR becomes valuable when it helps the promoter make these decisions before major commitments.
              </p>
            </div>
          </Section>

          {/* 13 */}
          <Section id="compliance" kicker="India compliance" title="Registration, compliance and Battery EPR for manufacturers">
            <p className="mb-4">
              India's Battery Waste Management Rules, 2022 create Extended Producer Responsibility obligations for covered batteries. CPCB states that persons or entities involved in manufacturing battery must register through the centralised system, and producers are responsible for meeting applicable EPR obligations for batteries placed on the market.
            </p>
            <div className={GRID_2}>
              {COMPLIANCE.map((c) => (
                <div key={c.t} className={CARD}>
                  <h3 className={`${H3} mb-2.5`}>{c.t}</h3>
                  <ul className={CHECKLIST}>
                    {c.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={`${BLUE_BOX} mt-[22px]`}>
              <h3 className={`${H3} mb-2.5`}>Why compliance should begin before production</h3>
              <p>
                CPCB's published registration SOP requires applicant information, battery information, sales data, material information, supporting documents and fees as part of the online process. That makes early documentation discipline valuable. The exact application route should always be checked against the latest authority requirements.
              </p>
            </div>
          </Section>

          {/* 14 */}
          <Section id="delaycost" kicker="The cost of waiting" title="Why a new battery business can lose time and money before the first sale">
            <div className={INTRO}>
              <p>
                For a first-time entrepreneur, delays are not limited to consultancy fees. Rent, machinery deposits, component inventory, staff costs, repeated document preparation and missed customer discussions can all continue while a project remains unresolved.
              </p>
            </div>
            <Cards items={DELAY} className="mt-5" />
            <div className={`${BLUE_BOX} mt-[22px]`}>
              <h3 className={`${H3} mb-2.5`}>Where EPR Nexuss adds value</h3>
              <p>
                EPR Nexuss can organise the project around one documented business model and connect the DPR, technical information, document checklist, registration work and follow-up into one coordinated workflow. This does not replace government review or guarantee approval; it is designed to reduce avoidable rework and unclear ownership.
              </p>
            </div>
          </Section>

          {/* 15 */}
          <Section id="eprnexuss" kicker="Client support" title="How EPR Nexuss can help you start a lithium-ion battery manufacturing business">
            <p className="mb-4">
              EPR Nexuss can support a new entrepreneur from the point where the business idea is still being defined. The objective is to understand the actual project first, then build the DPR, compliance roadmap and documentation around that project rather than forcing the client into a generic checklist.
            </p>
            <Cards items={SUPPORT} />
            <div className={`${HIGHLIGHT} mt-[22px]`}>
              <h3 className={`${H3} mb-2.5`}>Why clients value a coordinated approach</h3>
              <p>
                Instead of preparing a DPR in isolation and then starting the compliance process from scratch, the project can be organised so that the product, capacity, machinery, site, documentation and registration strategy support one another. This can reduce preventable duplication and give the promoter a clearer view of what needs to happen next.
              </p>
            </div>
          </Section>

          {/* 16 */}
          <Section id="startuproadmap" kicker="A practical implementation path" title="From first discussion to a structured battery manufacturing business">
            <Process steps={ROADMAP} />
          </Section>

          {/* 17 */}
          <Section id="benefits" kicker="What clients can gain" title="What a structured battery manufacturing project can give the promoter">
            <Cards items={BENEFITS} />
            <Callout label="Professional expectation:">
              no consultant can guarantee a government authority's decision or fixed processing time. The value of professional support is stronger preparation, better coordination, clearer tracking and more disciplined project execution.
            </Callout>
          </Section>

          {/* 18 */}
          <Section id="lfp-specs" kicker="Product engineering" title="How many types of LFP battery specifications are used in EVs?">
            <div className={INTRO}>
              <p>
                LFP (Lithium Iron Phosphate / LiFePO₄) is a single cathode chemistry, not a single product.
                In electric vehicles the same chemistry appears in multiple cell formats, voltage platforms,
                capacity grades and pack architectures. A manufacturer therefore selects an LFP specification
                according to the vehicle category, required energy, continuous and peak current, packaging
                space, thermal strategy and cost target.
              </p>
              <p>
                The main differences that matter for a battery manufacturing project are cell form factor,
                series configuration (voltage), cell capacity, and whether the design is module-based or
                cell-to-pack / blade-style.
              </p>
            </div>

            <h3 className={`${H3} mb-3.5 mt-7`}>1. Cell form factors used with LFP in EVs</h3>
            <Cards items={LFP_FORMS} />

            <h3 className={`${H3} mb-3.5 mt-8`}>2. Common voltage platforms built from LFP cells</h3>
            <p className="mb-4">
              A single LFP cell has a nominal voltage of approximately <strong>3.2 V</strong>{" "}
              (charge cut-off typically 3.60–3.65 V). Pack voltage is created by connecting cells in series.
            </p>
            <Table
              head={["Nominal pack voltage", "Typical series count", "Common EV application", "Notes for manufacturers"]}
              rows={[
                ["48 V / 51.2 V", "15S–16S", "E-rickshaws, many three-wheelers, low-speed vehicles", "51.2 V (16S) is the natural LFP equivalent of a traditional 48 V lead-acid system and is very widely used in India."],
                ["60 V / 64 V", "19S–20S", "Some three-wheelers, cargo vehicles, certain two-wheelers", "Higher continuous current capability and better motor matching on heavier vehicles."],
                ["72 V / 76.8 V", "23S–24S", "Higher-performance two- and three-wheelers, light commercial EVs", "Balances range and power for vehicles that need stronger acceleration or higher payload."],
                ["~300–400 V+", "96S and higher", "Passenger cars, larger commercial EVs", "High-voltage platforms used with prismatic or blade LFP packs (Tesla Standard Range LFP, BYD Blade, etc.)."],
              ]}
            />

            <h3 className={`${H3} mb-3.5 mt-8`}>3. Typical capacity and energy ranges by vehicle segment</h3>
            <div className={GRID_3}>
              <article className={CARD}>
                <h3 className={`${H3} mb-2.5`}>Electric two-wheelers</h3>
                <p className="mb-0">
                  Packs commonly fall in the <strong>1.5–4 kWh</strong> range. Voltage platforms of 48 V, 60 V or 72 V with capacities around 20–40 Ah are frequent, depending on target range and motor power.
                </p>
              </article>
              <article className={CARD}>
                <h3 className={`${H3} mb-2.5`}>Electric three-wheelers / e-rickshaws</h3>
                <p className="mb-0">
                  The largest volume LFP segment in India. Typical packs are <strong>51.2 V (16S)</strong> with 80–200 Ah (roughly 4–10 kWh). Daily deep cycling, safety and long cycle life are the primary design drivers.
                </p>
              </article>
              <article className={CARD}>
                <h3 className={`${H3} mb-2.5`}>Passenger cars &amp; larger EVs</h3>
                <p className="mb-0">
                  Pack energies commonly range from roughly <strong>40 kWh to 100+ kWh</strong> using large prismatic or blade LFP cells. Energy density at cell level is typically 150–180+ Wh/kg (newer generations higher), with pack-level figures lower once structure, cooling and BMS are included.
                </p>
              </article>
            </div>

            <h3 className={`${H3} mb-3.5 mt-8`}>4. Key specification parameters a manufacturer must freeze</h3>
            <div className={GRID_2}>
              <div className={CARD}>
                <h3 className={`${H3} mb-2.5`}>Electrical parameters</h3>
                <ul className={CHECKLIST}>
                  <li>Nominal and operating voltage window</li>
                  <li>Rated capacity (Ah) and total energy (kWh)</li>
                  <li>Continuous and peak discharge current</li>
                  <li>Charge current and recommended charge profile</li>
                  <li>BMS protection thresholds and communication protocol</li>
                </ul>
              </div>
              <div className={CARD}>
                <h3 className={`${H3} mb-2.5`}>Mechanical &amp; safety parameters</h3>
                <ul className={CHECKLIST}>
                  <li>Cell form factor and packing method (module / CTP / blade)</li>
                  <li>Enclosure, IP rating and thermal management approach</li>
                  <li>Cycle-life target at defined depth of discharge</li>
                  <li>Operating temperature range and low-temperature behaviour</li>
                  <li>Applicable standards (including AIS requirements for Indian EVs)</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <Callout label="Client takeaway:">
                “LFP battery” is not one SKU. A two-wheeler 48 V / 30 Ah pack, a 51.2 V / 100–150 Ah e-rickshaw pack and a 60–80 kWh passenger-car LFP pack share the same chemistry but require completely different cell selection, series-parallel architecture, BMS calibration, mechanical design and test programmes. The product specification must be frozen before machinery, layout and investment assumptions are finalised.
              </Callout>
            </div>

            <div className={`${BLUE_BOX} mt-[22px]`}>
              <h3 className={`${H3} mb-2.5`}>Emerging related chemistry</h3>
              <p>
                LMFP (Lithium Manganese Iron Phosphate) is an evolution of LFP that adds manganese. It raises nominal cell voltage (roughly 3.6–3.8 V) and energy density while retaining much of LFP’s safety and cost advantage. It is beginning to appear in selected EV programmes and may be considered alongside pure LFP when higher energy density is required without moving fully to NMC.
              </p>
            </div>
          </Section>

          {/* 19 */}
          <Section id="faq" kicker="Client questions" title="Frequently asked questions about lithium-ion battery manufacturing">
            {FAQS.map(([q, a]) => (
              <Faq key={q} q={q} a={a} />
            ))}
          </Section>
        </main>
      </div>
    </div>
  );
}