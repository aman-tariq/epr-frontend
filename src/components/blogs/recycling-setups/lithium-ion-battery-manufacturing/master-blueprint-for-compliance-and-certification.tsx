import React, { useEffect, useMemo, useState } from "react";
import StickyContactForm from "@/components/StickyContactForm";

/**
 * Lithium-Ion Manufacturing: The Master Blueprint for Compliance & Certification
 *
 * - All styling is inline Tailwind (no <style> block, no global CSS).
 * - Layout: hero (row 1) + StickyContactForm (right column, spans BOTH rows) + content (row 2).
 *   The form starts level with the hero and stays sticky while the whole article scrolls.
 * - Sticky only works if no ancestor has overflow hidden/auto/scroll (this file's wrappers don't).
 */

/* ------------------------------------------------------------------ */
/* Shared class strings                                                */
/* ------------------------------------------------------------------ */

const FONT_HEADING = "font-[Montserrat,Inter,ui-sans-serif,system-ui,sans-serif]";
const SECTION = "scroll-mt-24 border-t border-[#e4ece8] first-of-type:border-t-0";
const SECTION_PX = "px-7 max-[480px]:px-4 sm:px-12 lg:px-16";
const EYEBROW = "text-xs font-extrabold uppercase tracking-[0.16em] text-[#168555]";
const H2 = "text-3xl font-bold text-[#0a4235] sm:text-4xl";
const PROCESS_CARD =
  "rounded-[20px] border border-[#dfe7e3] bg-white p-[11px] shadow-[0_8px_24px_rgba(19,57,47,.05)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(19,57,47,.09)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";
const MINI_NUMBER =
  "inline-flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-[#e9f5ee] text-[13px] font-extrabold text-[#128457]";
const DATA_CARD =
  "rounded-[20px] border border-[#dce6e1] bg-gradient-to-b from-white to-[#f5faf7] p-[22px]";
const SOURCE_CARD =
  "rounded-2xl border border-[#dfe7e3] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(19,57,47,.07)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const checklistItems = [
  {
    title: "Factory CTE/CTO Roadmap Identified",
    description:
      "State Pollution Control Board consent requirements mapped for the proposed manufacturing site.",
  },
  {
    title: "Product Standard Route Mapped",
    description:
      "The applicable BIS, automotive, product-safety, and transport requirements are identified before testing.",
  },
  {
    title: "NABL / Recognised Testing Plan Ready",
    description:
      "Samples, test configuration, technical documents, and pre-compliance checks are planned before formal testing.",
  },
  {
    title: "CPCB Battery EPR Registration Planned",
    description:
      "Producer obligations under the Battery Waste Management Rules, 2022 are incorporated into the business model.",
  },
];

const roadmap = [
  {
    number: "1",
    title: "Factory Setup: CTE & CTO",
    description: (
      <>
        Start with the site and environmental compliance pathway. Depending on
        the project and state requirements, obtain the required
        <strong> Consent to Establish (CTE)</strong> before construction and the
        applicable <strong>Consent to Operate (CTO)</strong> before operations.
      </>
    ),
    tag: "State Level",
    tagClass: "bg-slate-100 text-slate-700",
  },
  {
    number: "2",
    title: "Product Compliance: Identify the Correct Standard",
    description: (
      <>
        Do not treat every lithium battery as one regulatory product. For
        portable sealed lithium systems, <strong>IS 16046 Part 2:2018</strong>
        appears in the current BIS testing database. Other battery applications
        can fall under different product or sector-specific standards.
      </>
    ),
    tag: "BIS / Product Route",
    tagClass: "bg-blue-50 text-blue-700",
  },
  {
    number: "3",
    title: "EV Traction Batteries: AIS 156 / AIS 038",
    description: (
      <>
        For electric-powertrain vehicles, MoRTH has prescribed technical
        requirements for traction batteries under <strong>AIS 156</strong> for
        L-category vehicles and <strong>AIS 038 (Rev. 2)</strong> for M and N
        categories. The amended requirements were implemented in phases.
      </>
    ),
    tag: "MoRTH / ARAI / Type Approval",
    tagClass: "bg-emerald-50 text-emerald-700",
    featured: true,
  },
  {
    number: "4",
    title: "Transport: UN 38.3 Requirements",
    description: (
      <>
        Lithium batteries shipped through regulated transport channels must be
        prepared and documented against the applicable dangerous-goods
        transport requirements, including the relevant <strong>UN 38.3</strong>
        test requirements for lithium cells and batteries.
      </>
    ),
    tag: "Transport / Logistics",
    tagClass: "bg-slate-100 text-slate-700",
  },
  {
    number: "5",
    title: "Battery Waste: CPCB EPR",
    description: (
      <>
        The Battery Waste Management Rules, 2022 cover batteries regardless of
        chemistry, shape, volume, weight, material composition, or use. Producers
        have EPR obligations and register through the centralized CPCB battery
        portal.
      </>
    ),
    tag: "CPCB Portal",
    tagClass: "bg-amber-50 text-amber-700",
  },
];

const faqItems = [
  {
    question: "What is the difference between a lithium-ion cell and a battery pack?",
    answer: (
      <>
        A <strong>cell</strong> is the basic electrochemical unit. A battery pack
        combines multiple cells, electrical interconnections, a BMS, enclosure,
        protection devices, and—depending on the application—thermal management
        and communication hardware. A business that buys qualified cells and
        assembles packs has a very different production flow from a manufacturer
        that makes cells from electrode materials.
      </>
    ),
  },
  {
    question: "What are the main steps in lithium-ion cell manufacturing?",
    answer: (
      <>
        A typical cell-production flow covers raw-material preparation,
        electrode mixing, coating and drying, calendaring, slitting, cell
        assembly, electrolyte filling, formation, aging, and electrical/quality
        testing. The exact sequence and equipment depend on whether the cell is
        cylindrical, pouch, or prismatic.
      </>
    ),
  },
  {
    question: "Is IS 16046 mandatory for every lithium battery manufactured in India?",
    answer: (
      <>
        No blanket statement should be made. <strong>IS 16046 Part 2:2018</strong>
        is specifically titled for secondary cells and batteries containing
        lithium systems for portable applications in the BIS database. The
        applicable compliance route depends on the product, application, and
        regulation governing that product.
      </>
    ),
  },
  {
    question: "Are EV batteries covered by AIS 156 alone?",
    answer: (
      <>
        The route depends on the vehicle category. MoRTH's amended framework
        specifies traction-battery requirements through <strong>AIS 156</strong>
        for L-category electric powertrain vehicles and <strong>AIS 038 (Rev. 2)</strong>
        for M and N categories. The vehicle type-approval and conformity-of-
        production context also matters.
      </>
    ),
  },
  {
    question: "What quality checks matter before a battery reaches the market?",
    answer: (
      <>
        Typical controls include material verification, slurry consistency,
        coating thickness and loading, electrode dimensions, weld quality,
        insulation, cell voltage and resistance, capacity, formation data,
        thermal behavior, BMS protection, pack integrity, and final functional
        testing. Quality gates should be built into the process instead of
        relying only on end-of-line testing.
      </>
    ),
  },
];

const manufacturingStages = [
  {
    number: "01",
    title: "Raw Material Inspection",
    copy:
      "Verify active materials, conductive additives, binders, separator, current collectors, electrolyte, and other components against defined specifications.",
    equipment: "Weighing, material inspection and laboratory equipment",
  },
  {
    number: "02",
    title: "Electrode Mixing",
    copy:
      "Create a uniform cathode or anode slurry by controlled dispersion, homogenisation and viscosity adjustment.",
    equipment: "Planetary / vacuum mixer, viscosity and rheology checks",
  },
  {
    number: "03",
    title: "Coating & Drying",
    copy:
      "Apply the slurry uniformly to the current-collector foil and remove solvent or moisture through controlled drying.",
    equipment: "Slot-die / coating line, drying oven, solvent-management system",
  },
  {
    number: "04",
    title: "Calendering",
    copy:
      "Compress the dried electrode to the required thickness and compaction density for controlled electrochemical performance.",
    equipment: "Roll press / calendering machine",
  },
  {
    number: "05",
    title: "Slitting & Inspection",
    copy:
      "Convert large electrode rolls into accurate widths and screen for thickness, width, coating or surface defects.",
    equipment: "Automatic slitter and vision inspection",
  },
  {
    number: "06",
    title: "Cell Assembly",
    copy:
      "Combine cathode, anode and separator by winding or stacking, then weld tabs and assemble the cell housing.",
    equipment: "Winding / stacking machine, tab welding, sealing system",
  },
  {
    number: "07",
    title: "Electrolyte Filling",
    copy:
      "Dose the specified electrolyte under controlled conditions, remove unwanted air where required, and seal the cell.",
    equipment: "Precision electrolyte filling and vacuum-sealing equipment",
  },
  {
    number: "08",
    title: "Formation & Aging",
    copy:
      "Perform controlled initial charge/discharge cycles and subsequent aging so cells can stabilise and be screened for performance.",
    equipment: "Formation racks, cycling systems and aging chambers",
  },
  {
    number: "09",
    title: "Cell Grading & Testing",
    copy:
      "Measure capacity, voltage, resistance and other acceptance parameters to classify cells and remove outliers.",
    equipment: "Battery testers, IR meters and data-acquisition systems",
  },
  {
    number: "10",
    title: "Module / Pack Assembly",
    copy:
      "Match cells, connect them in the required series/parallel configuration, add BMS, protection, enclosure, wiring and thermal provisions, then complete final testing.",
    equipment: "Cell sorter, welding, busbar, BMS and end-of-line test systems",
  },
];

const rawMaterials = [
  {
    title: "Cathode Active Material",
    copy:
      "Chemistry determines many of the battery's voltage, energy, power, safety and life characteristics. Common families include LFP and NMC; application requirements determine the appropriate formulation.",
  },
  {
    title: "Anode Material",
    copy:
      "Graphite is widely used. The anode formulation and its interaction with the electrolyte strongly affect cycle life, power capability and charging behaviour.",
  },
  {
    title: "Current Collectors",
    copy:
      "Aluminium foil is commonly used on the cathode side and copper foil on the anode side. Thickness, cleanliness and coating adhesion are important process controls.",
  },
  {
    title: "Separator",
    copy:
      "The separator electrically isolates anode and cathode while allowing ionic transport. Its integrity and shutdown characteristics are safety-critical.",
  },
  {
    title: "Electrolyte",
    copy:
      "Electrolyte enables ion transport between the electrodes. Filling quantity, moisture control, compatibility and sealing quality are critical manufacturing parameters.",
  },
  {
    title: "Binder & Conductive Additives",
    copy:
      "Binders provide mechanical cohesion and conductive additives improve electronic pathways in the electrode. Their dispersion directly affects electrode consistency.",
  },
];

const cellFormats = [
  {
    title: "Cylindrical",
    copy:
      "Standardised cylindrical geometry with wound electrode structure. Often selected for scalable module designs and automated assembly.",
    examples: "Typical formats: 18650, 21700 and other cylindrical sizes",
  },
  {
    title: "Prismatic",
    copy:
      "Rigid rectangular housing with a stacked or wound internal structure. Useful where packaging efficiency and fewer cells are desired.",
    examples: "Common in EV and energy-storage pack architectures",
  },
  {
    title: "Pouch",
    copy:
      "Lightweight flexible housing with stacked or wound electrodes. Enables flexible form factors but needs disciplined handling, sealing and mechanical support.",
    examples: "Used across mobility, consumer and energy-storage applications",
  },
];

const plantZones = [
  ["Material Receiving & QC", "Incoming inspection, traceability, quarantine and approved-material storage."],
  ["Electrode Manufacturing", "Mixing, coating, drying, calendering, slitting and electrode inspection."],
  ["Controlled Assembly Area", "Winding/stacking, welding, sealing and other cell-assembly operations."],
  ["Formation & Aging", "High-density electrical testing infrastructure, thermal control and data logging."],
  ["Pack Assembly", "Cell sorting, module construction, busbars, BMS integration, enclosure and final testing."],
  ["Utilities & Safety", "Power, compressed air, HVAC/humidity control, fire protection, EHS systems and waste handling."],
];

const qualityGates = [
  ["Incoming Quality", "Chemical composition, particle characteristics, dimensions, moisture and supplier documentation."],
  ["Process Quality", "Slurry properties, coating weight, thickness, drying, compaction, dimensions and weld quality."],
  ["Cell Quality", "OCV, internal resistance, capacity, formation records, leakage checks and grading."],
  ["Pack Quality", "Isolation, BMS function, balancing, current path, thermal sensing, communication and end-of-line validation."],
];

const plantData = [
  {
    value: "3",
    label: "Core cell formats",
    note: "Cylindrical, prismatic and pouch are the principal manufacturing formats considered in the referenced production-line guides.",
  },
  {
    value: "10",
    label: "Core manufacturing stages",
    note: "A practical cell-to-pack sequence from raw-material inspection through final module/pack testing.",
  },
  {
    value: "100 MWh → 1 GWh",
    label: "Illustrative cell-line configurations",
    note: "Supplier-listed examples; real output depends on equipment configuration, yield, product specification and operating schedule.",
  },
  {
    value: "2,000–3,000 pcs/h",
    label: "Illustrative pack-line example",
    note: "One supplier-listed automated line example; not a universal production benchmark.",
  },
];

const realityPoints = [
  [
    "Cell manufacturing is a separate discipline",
    "Cell production requires electrode manufacturing, controlled assembly, electrolyte filling, formation and cell grading before a usable cell is available.",
  ],
  [
    "Pack assembly starts after qualified cells exist",
    "A pack line typically sorts and groups cells, connects cells electrically, integrates the BMS, enclosure, protection and thermal provisions, then performs end-of-line tests.",
  ],
  [
    "Compliance must follow the product",
    "A portable battery and an EV traction battery do not automatically follow the same regulatory route. Product scope, application and vehicle category must be mapped before testing.",
  ],
];

const paperworkFirst = [
  [
    "Documents Before Design Review",
    "Applications are prepared before technical gaps in the cell or pack design have been identified.",
  ],
  [
    "Testing Becomes the First Engineering Check",
    "Failures are discovered only after samples reach the laboratory, increasing redesign and retest risk.",
  ],
  [
    "EPR Is Treated as a Separate Department",
    "Battery-waste obligations are often planned late even though producer registration and recycling responsibilities affect the operating model.",
  ],
];

const blueprint = [
  [
    "Pre-Compliance Engineering Review",
    "Review cell specification, pack architecture, BMS logic, thermal strategy, electrical protection, enclosure and testing inputs before formal submission.",
  ],
  [
    "Test Strategy Before Sample Submission",
    "Map the exact product, sample configuration, laboratory scope and documentation required for each applicable test route.",
  ],
  [
    "Plant + EPR Compliance Together",
    "Connect factory permissions, production records, battery registration, waste-battery obligations and ongoing compliance controls in one roadmap.",
  ],
];

const sources = [
  {
    href: "https://xiaoweitop.com/kb/lithium-battery-manufacturing-process-guide-2/",
    title: "Lithium Battery Manufacturing Process Guide",
    copy: "Raw materials, mixing, coating, drying, calendaring, slitting, cell assembly, electrolyte filling, formation, aging and quality control.",
  },
  {
    href: "https://www.batterymaking.com/lithium-battery-assembly-plant_c80",
    title: "Lithium Battery Assembly Plant & Equipment Reference",
    copy: "Supplier-listed production-line formats, cell-manufacturing equipment and battery-pack assembly configurations.",
  },
  {
    href: "https://lims.bis.gov.in/home/search_is_number/?is_number__doc_no=16046",
    title: "BIS LIMS – IS 16046",
    copy: "Current BIS laboratory records for IS 16046, including Part 2 for lithium systems and testing scope details.",
  },
  {
    href: "https://eprbattery.cpcb.gov.in/",
    title: "CPCB Battery EPR Portal",
    copy: "Producer registration, EPR obligations and battery-waste compliance resources under the Battery Waste Management Rules, 2022.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ComplianceAndCertification() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checked, setChecked] = useState<boolean[]>(
    checklistItems.map(() => false)
  );

  const readyCount = useMemo(() => checked.filter(Boolean).length, [checked]);
  const percentage = Math.round((readyCount / checklistItems.length) * 100);

  const toggleChecklist = (index: number) => {
    setChecked((current) =>
      current.map((value, itemIndex) => (itemIndex === index ? !value : value))
    );
  };

  // Smooth anchor scrolling only while this page is mounted (and not for reduced-motion users)
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.style.scrollBehavior = reduce ? "auto" : "smooth";
    return () => {
      root.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div
      className={`min-h-screen bg-[#f6f9f7] font-sans text-[#18352d] [&_:is(h1,h2,h3,h4,h5,h6)]:font-[Montserrat,Inter,ui-sans-serif,system-ui,sans-serif]`}
    >
      <div className="mx-auto w-full max-w-[1920px] px-1.5 max-[700px]:px-1">
        {/*
          Grid: hero (row 1, col 1) | form (col 2, spans both rows, sticky) | content (row 2, col 1).
          On mobile the DOM order gives: hero -> form -> content.
        */}
        <div className="mt-[72px] grid grid-cols-1 items-start gap-[18px] pb-10 sm:mt-[84px] lg:mt-[96px] lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-[22px]">
          {/* ===================== HERO ===================== */}
          <header className="relative mt-[30px] min-h-[500px] min-w-0 overflow-hidden rounded-[18px] bg-[radial-gradient(circle_at_84%_18%,rgba(67,177,116,.22),transparent_28%),radial-gradient(circle_at_12%_90%,rgba(20,93,160,.16),transparent_25%),linear-gradient(135deg,#082d1e_0%,#0d4930_52%,#103f68_100%)] text-white after:pointer-events-none after:absolute after:inset-0 after:opacity-[.55] after:content-[''] after:[background-image:radial-gradient(rgba(255,255,255,.1)_1px,transparent_1px)] after:[background-size:26px_26px] md:rounded-3xl lg:col-start-1 lg:row-start-1">
            <div className="relative z-[1] px-2.5 pb-[15px] pt-3 md:px-[26px] md:pb-[34px] md:pt-7 lg:px-[21px] lg:pb-[21px] lg:pt-[17px]">
              <span className="inline-flex rounded-full border border-white/25 bg-white/[0.06] px-3.5 py-[7px] text-xs font-extrabold uppercase tracking-[0.08em] text-[#e4fff0]">
                Updated for 2026 Regulations
              </span>

              <h1 className="mt-6 max-w-[720px] text-2xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[29px] md:text-[clamp(32px,4vw,52px)]">
                Lithium-Ion Manufacturing:
                <br />
                <span className="text-[#8fe0ae]">
                  The Master Blueprint for Compliance &amp; Certification
                </span>
              </h1>

              <p className="mt-6 max-w-[720px] text-sm leading-[1.7] text-[#e6f1eb] sm:text-[15px] md:text-[17px]">
                From raw materials and electrode production to cell formation,
                battery-pack assembly, testing and Indian compliance, this guide
                explains how a lithium-ion manufacturing business is planned,
                built, tested and brought to market.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#manufacturing"
                  className={`rounded-xl bg-[#1a925f] px-7 py-3.5 text-center ${FONT_HEADING} text-base font-bold text-white shadow-[0_10px_25px_rgba(22,133,85,0.25)] transition hover:-translate-y-0.5 hover:bg-[#157f51]`}
                >
                  Explore Manufacturing Process
                </a>
                <a
                  href="#roadmap"
                  className={`rounded-xl border-2 border-white/30 bg-white/10 px-7 py-3.5 text-center ${FONT_HEADING} text-base font-bold text-white backdrop-blur transition hover:bg-white/15`}
                >
                  View Compliance Roadmap
                </a>
              </div>
            </div>
          </header>

          {/* ================= STICKY CONTACT FORM ================= */}
          <aside
            aria-label="Contact form"
            className="z-20 min-w-0 lg:sticky lg:top-32 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-[30px] lg:max-h-[calc(100vh-9rem)] lg:self-start lg:overflow-y-auto"
          >
            <StickyContactForm />
          </aside>

          {/* ===================== CONTENT ===================== */}
          <main
            id="top"
            className="w-full min-w-0 overflow-hidden rounded-[18px] border border-[#dce6e1] bg-white shadow-[0_18px_50px_rgba(15,55,37,.08)] md:rounded-3xl lg:col-start-1 lg:row-start-2"
          >
            {/* Reality */}
            <section id="reality" className={`${SECTION} bg-[#f3f7f5] ${SECTION_PX} py-16`}>
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold leading-tight text-[#0a4235] sm:text-4xl">
                    The Reality Check:
                    <br />
                    Lithium-Ion Manufacturing Is More Than Buying Machinery
                  </h2>

                  <p className="mt-6 leading-7 text-[#64766f]">
                    A lithium-ion battery plant is a controlled manufacturing system.
                    Material quality, electrode consistency, moisture control,
                    assembly accuracy, formation data, BMS behaviour and final
                    testing all influence the reliability of the finished product.
                    The manufacturing route also changes significantly depending on
                    whether you are producing <strong>cells</strong> or assembling
                    <strong> battery packs from purchased cells</strong>.
                  </p>

                  <div className="mt-7 space-y-5">
                    {realityPoints.map(([title, copy]) => (
                      <div key={title} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                          !
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#103f33]">{title}</h4>
                          <p className="mt-1 text-sm leading-6 text-[#687a74]">{copy}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="relative overflow-hidden rounded-3xl border border-[#d9e4df] bg-white p-8 shadow-[0_14px_40px_rgba(19,57,47,0.06)]">
                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#e3f2ea]" />
                    <div className="relative">
                      <p className="text-xl font-bold text-[#103f33]">Manufacturing Snapshot</p>
                      <div className="mt-5 grid grid-cols-2 gap-4">
                        {plantData.map((item) => (
                          <div key={item.label} className="rounded-2xl bg-[#f4f8f6] p-4">
                            <div className="text-2xl font-black tracking-tight text-[#14925e]">{item.value}</div>
                            <p className="mt-1 text-xs font-bold text-[#2d4a41]">{item.label}</p>
                            <p className="mt-2 text-[11px] leading-5 text-[#6b7c76]">{item.note}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 rounded-r-xl border-l-4 border-[#2a63b8] bg-[#eff5ff] px-5 py-4">
                        <p className="text-sm font-semibold leading-6 text-[#234568]">
                          Production capacity figures vary by cell chemistry, format,
                          yield, automation level, product mix and operating schedule.
                          Supplier figures below are illustrative, not universal benchmarks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Manufacturing */}
            <section id="manufacturing" className={`${SECTION} bg-white ${SECTION_PX} py-20`}>
              <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-4xl">
                  <span className={EYEBROW}>End-to-End Manufacturing Guide</span>
                  <h2 className={`mt-3 ${H2}`}>How Lithium-Ion Batteries Are Manufactured</h2>
                  <p className="mt-4 leading-7 text-[#667771]">
                    The manufacturing process can be viewed in two linked layers:
                    first, <strong>cell manufacturing</strong> converts electrode
                    materials into tested cells; second, <strong>pack assembly</strong>
                    converts matched cells into a functional battery system with
                    electrical protection and control electronics.
                  </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-3xl border border-[#dfe7e3] bg-[#f4f8f6] p-7">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-[#0e6047] ${FONT_HEADING} text-sm font-extrabold text-white`}>
                        CELL
                      </div>
                      <h3 className="text-2xl font-bold text-[#103f33]">Cell Manufacturing</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#687a74]">
                      Starts with electrode raw materials and continues through
                      slurry preparation, coating, drying, calendering, slitting,
                      cell assembly, electrolyte filling, formation, aging and
                      electrical classification.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-[#dfe7e3] bg-white p-7 shadow-[0_8px_24px_rgba(19,57,47,0.05)]">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-[#145da0] ${FONT_HEADING} text-sm font-extrabold text-white`}>
                        PACK
                      </div>
                      <h3 className="text-2xl font-bold text-[#103f33]">Battery-Pack Assembly</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#687a74]">
                      Starts with tested cells and adds sorting, module construction,
                      busbars or connectors, BMS, enclosure, protection devices,
                      wiring, thermal management where required, software
                      configuration and final electrical/safety tests.
                    </p>
                  </div>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {manufacturingStages.map((stage) => (
                    <article key={stage.number} className={PROCESS_CARD}>
                      <div className="flex items-center justify-between gap-4">
                        <span className={MINI_NUMBER}>{stage.number}</span>
                        <span className="rounded-full bg-[#edf6f1] px-3 py-1 text-[11px] font-bold text-[#168555]">
                          Manufacturing Stage
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-[#103f33]">{stage.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#687a74]">{stage.copy}</p>
                      <div className="mt-5 border-t border-[#e5ece8] pt-4">
                        <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7b8b85]">
                          Main equipment / control
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#52665f]">{stage.equipment}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-12 rounded-3xl border border-[#dce6e1] bg-[#f3f8f5] p-7">
                  <h3 className="text-2xl font-bold text-[#103f33]">
                    What changes between cylindrical, prismatic and pouch production?
                  </h3>
                  <div className="mt-6 grid gap-5 md:grid-cols-3">
                    {cellFormats.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-[#dfe7e3] bg-white p-5">
                        <h4 className="text-lg font-bold text-[#0e6047]">{item.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-[#687a74]">{item.copy}</p>
                        <p className="mt-4 text-xs font-semibold leading-5 text-[#52665f]">{item.examples}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Materials + factory planning */}
            <section id="materials" className={`${SECTION} bg-[#f3f7f5] ${SECTION_PX} py-20`}>
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
                  <div>
                    <span className={EYEBROW}>Material &amp; Process Control</span>
                    <h2 className={`mt-3 ${H2}`}>Raw Materials That Drive Battery Performance</h2>
                    <p className="mt-4 leading-7 text-[#667771]">
                      A manufacturing line is only as stable as its inputs and its
                      process controls. Material purity, particle characteristics,
                      moisture, surface condition, formulation and traceability
                      need defined acceptance limits before material enters production.
                    </p>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                      {rawMaterials.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-[#dfe7e3] bg-white p-5">
                          <h3 className="font-bold text-[#103f33]">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-[#687a74]">{item.copy}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="rounded-3xl border border-[#dce6e1] bg-white p-7 shadow-[0_12px_32px_rgba(19,57,47,0.06)]">
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#145da0]">
                        Plant Planning
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-[#103f33]">
                        The Factory Must Be Designed Around the Process
                      </h3>
                      <div className="mt-6 space-y-3">
                        {plantZones.map(([title, copy]) => (
                          <div key={title} className="rounded-2xl bg-[#f6f9f7] p-4">
                            <h4 className="font-bold text-[#103f33]">{title}</h4>
                            <p className="mt-1 text-sm leading-6 text-[#687a74]">{copy}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 rounded-xl border border-[#cfe0da] bg-[#edf7f1] p-4">
                        <p className="text-sm font-semibold leading-6 text-[#245448]">
                          The final layout depends on your chemistry, format, annual
                          capacity, automation level, utility requirements, hazardous
                          material controls, warehouse flow and testing strategy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quality */}
            <section id="quality" className={`${SECTION} bg-white ${SECTION_PX} py-20`}>
              <div className="mx-auto max-w-6xl">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                  <span className={EYEBROW}>Quality &amp; Safety</span>
                  <h2 className={`mt-3 ${H2}`}>Build Quality Gates Into the Production Line</h2>
                  <p className="mt-4 leading-7 text-[#667771]">
                    Modern battery manufacturing relies on process control and
                    traceability as much as final testing. A defect found early is
                    usually easier and cheaper to isolate than a failed finished pack.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {qualityGates.map(([title, copy], index) => (
                    <div key={title} className={DATA_CARD}>
                      <div className="text-3xl font-black text-[#1a925f]">0{index + 1}</div>
                      <h3 className="mt-3 text-lg font-bold text-[#103f33]">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#687a74]">{copy}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                  <div className="rounded-3xl bg-[#07382d] p-7 text-white">
                    <h3 className="text-xl font-bold">BMS Control</h3>
                    <p className="mt-3 text-sm leading-6 text-white/70">
                      Voltage, current and temperature protection, balancing,
                      communication and fault handling should be validated against
                      the actual pack architecture and application.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-[#145da0] p-7 text-white">
                    <h3 className="text-xl font-bold">Thermal Management</h3>
                    <p className="mt-3 text-sm leading-6 text-white/75">
                      Cell spacing, heat paths, sensing, enclosure design and thermal
                      propagation controls become increasingly important as energy
                      density and pack power rise.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-[#dfe7e3] bg-[#f7faf8] p-7">
                    <h3 className="text-xl font-bold text-[#103f33]">Traceability</h3>
                    <p className="mt-3 text-sm leading-6 text-[#687a74]">
                      Record material lots, cell identifiers, formation results,
                      BMS versions, assembly parameters and final-test data so a
                      non-conforming unit can be traced back to its process history.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Roadmap */}
            <section id="roadmap" className={`${SECTION} bg-white ${SECTION_PX} py-20`}>
              <div className="mx-auto max-w-5xl">
                <div className="mb-12 max-w-4xl">
                  <span className={EYEBROW}>Step-by-Step Guide</span>
                  <h2 className={`mt-3 ${H2}`}>The Complete Certification &amp; Compliance Roadmap</h2>
                  <p className="mt-4 leading-7 text-[#667771]">
                    Compliance should be mapped to your actual product and business
                    model. The following framework separates factory approvals,
                    product standards, EV homologation, transport and battery-waste
                    obligations.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {roadmap.map((item) => (
                    <article
                      key={item.number}
                      className={`rounded-2xl border border-[#dfe7e3] bg-white p-7 shadow-[0_8px_24px_rgba(19,57,47,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(19,57,47,0.09)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                        item.featured ? "border-t-4 border-t-[#16905b]" : ""
                      }`}
                    >
                      <div
                        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${FONT_HEADING} text-xl font-extrabold text-white ${
                          item.featured ? "bg-[#168555]" : "bg-[#10493a]"
                        }`}
                      >
                        {item.number}
                      </div>
                      <h3 className="text-xl font-bold text-[#103f33]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#687a74]">{item.description}</p>
                      <span className={`mt-5 inline-flex rounded-full px-3 py-1 text-xs font-bold ${item.tagClass}`}>
                        {item.tag}
                      </span>
                    </article>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-[#f1dca3] bg-[#fff9e9] p-5">
                  <p className="text-sm leading-6 text-[#6b5a23]">
                    <strong>Important:</strong> do not use the same compliance checklist
                    for every lithium battery. The applicable standard depends on the
                    product category, application, vehicle category (where relevant),
                    and the specific Indian regulation or certification scheme that
                    applies to that product.
                  </p>
                </div>
              </div>
            </section>

            {/* Advantage */}
            <section
              id="advantage"
              className={`${SECTION} relative overflow-hidden bg-[#063b2e] ${SECTION_PX} py-20 text-white`}
            >
              <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="relative z-10">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                  <h2 className="text-3xl font-bold sm:text-4xl">The EPR Nexuss Advantage</h2>
                  <p className="mt-4 leading-7 text-white/70">
                    A better consulting workflow connects engineering, plant design,
                    test planning and environmental compliance instead of treating
                    certificates as paperwork that starts after manufacturing is complete.
                  </p>
                </div>

                <div className="grid gap-7 lg:grid-cols-2">
                  <div className="rounded-3xl border border-red-400/20 bg-white/5 p-7 backdrop-blur-sm">
                    <h3 className="flex items-center gap-3 border-b border-red-400/10 pb-4 text-2xl font-bold text-red-300">
                      <span aria-hidden="true">×</span>
                      The &quot;Paperwork-First&quot; Approach
                    </h3>
                    <div className="mt-6 space-y-6">
                      {paperworkFirst.map(([title, copy]) => (
                        <div key={title} className="flex items-start gap-4">
                          <span className="mt-0.5 font-bold text-red-300">✗</span>
                          <div>
                            <h4 className="font-bold text-white/90">{title}</h4>
                            <p className="mt-1 text-sm leading-6 text-white/60">{copy}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-3xl bg-white p-7 text-[#123d32] shadow-[0_0_50px_rgba(16,185,129,0.14)]">
                    <div className="absolute right-0 top-0 h-full w-1 bg-[#1a925f]" />
                    <h3 className="flex items-center gap-3 border-b border-[#dce7e2] pb-4 text-2xl font-bold">
                      <span className="text-[#15935f]">✓</span>
                      The EPR Nexuss Blueprint
                    </h3>
                    <div className="mt-6 space-y-6">
                      {blueprint.map(([title, copy]) => (
                        <div key={title} className="flex items-start gap-4">
                          <span className="mt-0.5 font-bold text-[#15935f]">✓</span>
                          <div>
                            <h4 className="font-bold text-[#103f33]">{title}</h4>
                            <p className="mt-1 text-sm leading-6 text-[#687a74]">{copy}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Checklist */}
            <section
              id="checklist"
              className={`${SECTION} border-y border-[#dfe7e3] bg-[#f4f7f5] ${SECTION_PX} py-16`}
            >
              <div className="mx-auto max-w-4xl rounded-3xl border border-[#dfe7e3] bg-white p-7 shadow-[0_12px_32px_rgba(19,57,47,0.06)] sm:p-10">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-[#0a4235] sm:text-3xl">
                    Manufacturing &amp; Compliance Readiness Checker
                  </h2>
                  <p className="mt-2 text-sm text-[#6c7c76]">
                    Use this as an early-stage planning check before committing to full-scale testing or production.
                  </p>
                </div>

                <div className="mt-8 h-3 overflow-hidden rounded-full bg-[#e4ebe7]">
                  <div
                    className="h-full rounded-full bg-[#1a925f] transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <p className="mt-3 text-center text-sm font-bold text-[#0a4235]">{percentage}% Ready</p>

                <div className="mt-7 space-y-3">
                  {checklistItems.map((item, index) => (
                    <label
                      key={item.title}
                      className="flex cursor-pointer items-start gap-4 rounded-2xl border border-[#dfe7e3] p-4 transition hover:bg-[#f7faf8]"
                    >
                      <input
                        type="checkbox"
                        checked={checked[index]}
                        onChange={() => toggleChecklist(index)}
                        className="mt-1 h-5 w-5 shrink-0 accent-[#1a925f]"
                      />
                      <span>
                        <span className="block font-bold text-[#103f33]">{item.title}</span>
                        <span className="mt-1 block text-xs leading-5 text-[#6c7c76]">
                          {item.description}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>

                {percentage > 0 && (
                  <div
                    className={`mt-7 rounded-xl px-4 py-4 text-center text-sm font-semibold ${
                      percentage < 50
                        ? "bg-red-50 text-red-700"
                        : percentage < 100
                        ? "bg-amber-50 text-amber-700"
                        : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    {percentage < 50
                      ? "Early-stage readiness: important factory, product-testing and EPR decisions are still open."
                      : percentage < 100
                      ? "Good progress. Complete the remaining product, testing and regulatory actions before launch."
                      : "Strong starting position. Validate the exact regulatory route and documentation for your product before production release."}
                  </div>
                )}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className={`${SECTION} bg-white ${SECTION_PX} py-20`}>
              <div className="mx-auto max-w-4xl">
                <div className="mb-10 text-center">
                  <span className={EYEBROW}>FAQ</span>
                  <h2 className="mt-3 text-3xl font-bold text-[#0a4235]">
                    Frequently Asked Questions About Lithium-Ion Manufacturing
                  </h2>
                </div>

                <div className="space-y-3">
                  {faqItems.map((item, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div key={item.question} className="overflow-hidden rounded-2xl border border-[#dfe7e3]">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between gap-5 bg-[#f6f9f7] px-5 py-5 text-left font-bold text-[#103f33] transition hover:bg-[#eef5f1]"
                          onClick={() => setOpenFaq((current) => (current === index ? null : index))}
                          aria-expanded={isOpen}
                        >
                          <span>{item.question}</span>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="border-t border-[#dfe7e3] bg-white px-5 py-5 text-sm leading-7 text-[#687a74]">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Sources */}
            <section id="sources" className={`${SECTION} bg-[#f3f7f5] ${SECTION_PX} py-14`}>
              <div className="mx-auto max-w-5xl">
                <h2 className="text-2xl font-bold text-[#0a4235]">Reference &amp; Source Notes</h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-[#687a74]">
                  Manufacturing steps and equipment references were informed by the
                  production-process and battery-assembly material reviewed for this
                  article. Regulatory statements should always be checked against the
                  latest applicable government notification, standard and product scope.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {sources.map((s) => (
                    <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className={SOURCE_CARD}>
                      <h3 className="font-bold text-[#103f33]">{s.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#687a74]">{s.copy}</p>
                    </a>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-[#d6e1dc] bg-white p-5">
                  <p className="text-xs leading-5 text-[#71827b]">
                    This article is for business-planning and educational purposes.
                    Exact approvals, standards, test methods and registrations should be
                    verified for the specific product, manufacturing process, state and
                    intended market before commercial production.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className={`border-t-[7px] border-[#1a925f] bg-[#07382d] ${SECTION_PX} py-14 text-white`}>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Stop Guessing. Start Building a Compliant Battery Business.
                </h2>
                <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
                  Whether you are planning a cell-manufacturing line or a battery-pack
                  assembly plant, the safest starting point is a product-specific
                  manufacturing and compliance roadmap.
                </p>
                <a
                  href="mailto:compliance@eprnexuss.com"
                  className={`mt-8 inline-flex items-center justify-center rounded-xl bg-[#1a925f] px-8 py-4 ${FONT_HEADING} text-base font-bold text-white shadow-[0_10px_26px_rgba(16,185,129,0.18)] transition hover:bg-[#148452]`}
                >
                  Consult the Certification Experts
                </a>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 md:flex-row">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[10px] font-extrabold text-[#07382d]">
                      EN
                    </div>
                    <span className={`${FONT_HEADING} text-sm font-bold text-white/80`}>EPR NEXUSS</span>
                  </div>
                  <p className="text-xs text-white/45">
                    © 2026 EPR Nexuss. Compliance &amp; Certification Division.
                  </p>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}