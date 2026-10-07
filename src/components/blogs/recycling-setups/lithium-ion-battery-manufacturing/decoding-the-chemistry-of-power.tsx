import React, { useEffect, useState } from "react";
import StickyContactForm from "@/components/StickyContactForm";

/**
 * Decoding the Chemistry of Power: Lithium-Ion Battery Manufacturing
 *
 * - All styling is inline Tailwind (no <style> block, no global CSS).
 * - Layout: StickyContactForm (right column, spans BOTH rows) | hero (row 1) | content (row 2).
 *   The form starts level with the hero and stays sticky while the whole article scrolls.
 *   Below 1150px everything stacks: form -> hero -> content (same order as before).
 * - Sticky only works if no ancestor has overflow hidden/auto/scroll (this file's wrappers don't).
 */

/* ------------------------------------------------------------------ */
/* Shared class strings                                                */
/* ------------------------------------------------------------------ */

// Typography (colour is always set explicitly so nothing depends on global CSS)
const H2 =
  "mb-[11px] text-[clamp(23px,2.8vw,32px)] font-extrabold leading-[1.2] text-[#0a3925]";
const H2_SPAN = "text-[#176b45]";
const H3 = "mb-2 text-[19px] font-bold text-[#43a96d]";
const H4 = "mb-[7px] text-base font-bold text-[#0a3925]";
const P = "mb-3 text-[#03170f]";
const STRONG = "text-[#0a3925]";

// Layout
const SEC = "mx-auto mb-[52px] scroll-mt-[30px] last:mb-0";
const DIVIDER = "border-t border-[#dbe7df] pt-[46px]";
const CENTER_HEAD = "mx-auto mb-7 max-w-[820px] text-center";
const LEAD = "mb-3 max-w-[880px] text-base text-[#03170f] max-[620px]:text-[15px]";

// Responsive grids (mobile-first; breakpoints match the original 620 / 820 / 1150)
const GRID_3 = "grid grid-cols-1 gap-4 min-[621px]:grid-cols-2 min-[1151px]:grid-cols-3";
const GRID_4_GAP3 = "grid grid-cols-1 gap-3 min-[621px]:grid-cols-2 min-[1151px]:grid-cols-4";
const GRID_4_GAP4 = "grid grid-cols-1 gap-4 min-[621px]:grid-cols-2 min-[1151px]:grid-cols-4";
const GRID_2 = "grid grid-cols-1 gap-[18px] min-[821px]:grid-cols-2";

// Cards
const INFO_CARD = "min-h-full rounded-2xl border border-[#dbe7df] bg-[#fbfdfc] p-5";
const CHEM_CARD =
  "relative overflow-hidden rounded-2xl border border-[#dbe7df] bg-white p-5 shadow-[0_6px_18px_rgba(8,48,32,.04)] transition hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(8,48,32,.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";
const LIST = "mb-[15px] mt-2.5 list-none p-0";
const LIST_ITEM = "mb-1.5 flex items-start gap-2 text-[13px] text-[#3d4f47]";
const BTN =
  "inline-flex items-center justify-center rounded-xl px-[22px] py-3 text-[15px] font-bold text-white transition hover:-translate-y-px max-[620px]:w-full motion-reduce:transition-none motion-reduce:hover:translate-y-0";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const chemistryData = [
  {
    code: "LFP",
    badge: "Safety + Longevity",
    badgeClass: "bg-emerald-50 text-emerald-700",
    name: "Lithium Iron Phosphate",
    points: [
      ["Specific energy", "Moderate"],
      ["Cycle life", "High"],
      ["Thermal stability", "Very high"],
    ],
    bestFor:
      "Electric 3-wheelers, buses, commercial mobility and stationary energy storage where durability and thermal robustness matter.",
    plantImpact:
      "A strong choice when long service life, safety margin and repeatable pack economics are more important than maximum gravimetric energy density.",
  },
  {
    code: "NMC",
    badge: "Energy Density",
    badgeClass: "bg-blue-50 text-blue-700",
    name: "Nickel Manganese Cobalt",
    points: [
      ["Specific energy", "High"],
      ["Cycle life", "Moderate to high"],
      ["Power capability", "High"],
    ],
    bestFor:
      "Passenger EVs, two-wheelers and applications where higher energy density and compact packaging are important design objectives.",
    plantImpact:
      "Requires disciplined cell screening, thermal design and process control because energy density targets can reduce the design margin for abuse conditions.",
  },
  {
    code: "LCO",
    badge: "Compact Consumer Power",
    badgeClass: "bg-violet-50 text-violet-700",
    name: "Lithium Cobalt Oxide",
    points: [
      ["Specific energy", "High"],
      ["Cycle life", "Moderate"],
      ["Thermal stability", "Lower than LFP"],
    ],
    bestFor:
      "Portable electronics and compact consumer products where size, weight and energy density can dominate the design brief.",
    plantImpact:
      "The process must place strong emphasis on quality control, protection circuitry and controlled operating limits rather than simply maximizing capacity.",
  },
  {
    code: "LMO",
    badge: "Power Capability",
    badgeClass: "bg-orange-50 text-orange-700",
    name: "Lithium Manganese Oxide",
    points: [
      ["Power delivery", "Strong"],
      ["Thermal behaviour", "Good"],
      ["Cycle life", "Moderate"],
    ],
    bestFor:
      "Power tools, mobility and systems where high current delivery is valuable and the operating profile is well controlled.",
    plantImpact:
      "Cell matching and heat management remain important because application-specific duty cycles can accelerate ageing when the pack is pushed hard.",
  },
  {
    code: "NCA",
    badge: "High-Performance Energy",
    badgeClass: "bg-pink-50 text-pink-700",
    name: "Nickel Cobalt Aluminum",
    points: [
      ["Specific energy", "Very high"],
      ["Power", "High"],
      ["Control margin", "Design-critical"],
    ],
    bestFor:
      "High-performance EV and specialty applications where range and energy density justify more demanding control and thermal engineering.",
    plantImpact:
      "The line needs tight process windows, strong traceability and robust thermal/BMS validation to convert high energy density into a reliable product.",
  },
  {
    code: "LTO",
    badge: "Ultra-High Cycle Life",
    badgeClass: "bg-yellow-50 text-yellow-700",
    name: "Lithium Titanate",
    points: [
      ["Cycle life", "Very high"],
      ["Charge capability", "Very high"],
      ["Energy density", "Lower"],
    ],
    bestFor:
      "Fast-charge fleets, high-utilisation industrial systems and specialised energy storage where long life can outweigh energy-density penalties.",
    plantImpact:
      "Higher material and pack cost makes application economics central; the business case usually depends on exceptional utilisation and lifetime value.",
  },
];

const manufacturingSteps = [
  {
    number: "01",
    phase: "Product definition",
    title: "Market, chemistry and cell specification",
    description:
      "Freeze the application first: required voltage, capacity, C-rate, cycle life, operating temperature, pack dimensions, charging profile and target cost. Then select chemistry, cell format and supplier strategy.",
    output: "Cell specification + product requirements",
  },
  {
    number: "02",
    phase: "Electrode production",
    title: "Mixing, coating and drying",
    description:
      "In true cell manufacturing, active materials, conductive additives, binder and solvent are mixed into controlled slurries. The slurry is coated onto current-collector foil and dried under tightly controlled process conditions.",
    output: "Uniform electrode coating",
  },
  {
    number: "03",
    phase: "Electrode finishing",
    title: "Calendering, slitting and inspection",
    description:
      "Electrodes are compressed to the required density and thickness, slit to specification and inspected for defects, dimensions and coating consistency before entering cell assembly.",
    output: "Dimensionally controlled electrodes",
  },
  {
    number: "04",
    phase: "Cell assembly",
    title: "Stacking or winding and enclosure",
    description:
      "Depending on cylindrical, prismatic or pouch design, electrodes and separator are wound or stacked, connected to tabs/current collectors and placed into the cell enclosure. Contamination control is critical.",
    output: "Assembled dry cell",
  },
  {
    number: "05",
    phase: "Electrolyte + sealing",
    title: "Electrolyte filling and controlled sealing",
    description:
      "Electrolyte is introduced under controlled conditions and the cell is sealed according to its form factor. Moisture management and process discipline are central to cell reliability.",
    output: "Sealed cell ready for electrochemical activation",
  },
  {
    number: "06",
    phase: "Electrochemical activation",
    title: "Formation, aging and grading",
    description:
      "New cells undergo controlled charge/discharge cycles to form the required electrochemical interface. Cells are then aged and tested for capacity, voltage, internal resistance and other acceptance criteria before grading.",
    output: "Tested and graded cells",
  },
  {
    number: "07",
    phase: "Pack manufacturing",
    title: "Cell matching, welding, BMS and thermal system",
    description:
      "In a pack plant, matched cells are arranged into modules or packs, electrically joined, fitted with protection and BMS hardware, and integrated with cooling, enclosure, fusing and service interfaces as required.",
    output: "Validated battery module / pack",
  },
  {
    number: "08",
    phase: "End-of-line quality",
    title: "Safety, electrical and traceability checks",
    description:
      "The final product should pass defined electrical, insulation, communication, functional, mechanical and application-specific tests. Serialisation and production data make every critical component traceable.",
    output: "Release-ready battery product",
  },
];

const parameters = [
  ["Nominal voltage", "Defines the system voltage and the required series configuration."],
  ["Capacity (Ah)", "Determines how much charge the cell or pack can store at a defined test condition."],
  ["Energy (Wh / kWh)", "Connects voltage and capacity to the usable energy target of the application."],
  ["C-rate / power", "Defines how aggressively the battery charges or discharges relative to capacity."],
  ["Internal resistance", "Important for heat generation, power delivery, matching and quality screening."],
  ["Cycle life", "Must be evaluated against the application’s actual charge, discharge and temperature profile."],
  ["Operating temperature", "Influences thermal management, performance, ageing and protection strategy."],
  ["Physical tolerances", "Cell dimensions, tabs, terminals, enclosure and connector tolerances determine machine compatibility."],
  ["BMS architecture", "Defines sensing, protection, balancing, communication and diagnostic requirements."],
  ["Cooling strategy", "Air, liquid or passive approaches change pack structure and thermal validation requirements."],
  ["Traceability", "Serial numbers and process records connect cells, materials, operators and tests to the final pack."],
  ["EOL test plan", "Defines the electrical, insulation, communication, functional and application-specific checks before release."],
];

const applicationRows = [
  ["2W / 3W mobility", "Cost, cycle life, safety, packaging", "LFP or NMC depending on vehicle target", "Cell consistency, BMS calibration, vibration, thermal design and EOL testing"],
  ["Passenger EV", "Range, power, fast charge, mass and safety", "NMC / NCA / LFP depending on vehicle architecture", "High-quality cell screening, thermal system integration, BMS validation and pack abuse testing"],
  ["Solar / stationary storage", "Lifetime, safety, cost and serviceability", "LFP is commonly considered where long life and safety are priorities", "Cycle testing, thermal control, enclosure/IP design, BMS and system integration"],
  ["Portable electronics", "Size, weight, energy density", "LCO, NMC and related systems depending on product", "Compact assembly, protection electronics, consistency and thermal limits"],
  ["Fast-charge / high-utilisation systems", "Charge rate, power, life", "Application-specific; LTO can be considered where extreme cycle/charge capability dominates", "Thermal management, high-current connections, controls and lifetime validation"],
];

const qualityGates = [
  ["01", "Incoming inspection", "Verify supplier cells, materials, certificates, dimensions, electrical parameters and batch identity before release to production."],
  ["02", "Process control", "Monitor the critical parameters that affect joining, insulation, alignment, torque, resistance and thermal interfaces."],
  ["03", "BMS validation", "Verify sensing, limits, communication, balancing, fault handling and software behaviour against the product specification."],
  ["04", "End-of-line release", "Combine electrical, functional, safety and traceability checks into a defined release decision for every battery."],
];

const utilities = [
  ["Environmental control", "Depending on the process, moisture, temperature, cleanliness and dust control can become critical manufacturing variables."],
  ["Electrical infrastructure", "Production and testing equipment require stable, appropriately protected electrical supply and distribution."],
  ["Fire and safety engineering", "Battery storage, charging, test areas and production zones require a risk-based fire and emergency-response design."],
  ["Material flow", "Separate incoming, quarantine, WIP, finished goods and rejected-material routes to prevent mix-ups and uncontrolled movement."],
  ["Test capability", "Plan the laboratory and end-of-line test capacity before commissioning so production does not outgrow verification."],
  ["Digital traceability", "Track critical component lots, process results and final serial numbers to support quality investigations and field-service control."],
];

const faqItems = [
  {
    id: "faq1",
    question: "Which lithium-ion chemistry is best for a new battery manufacturing plant?",
    answer:
      "There is no universal winner. LFP is often attractive for applications prioritising thermal robustness, long service life and cost control, while NMC or NCA may be selected when higher energy density is a stronger requirement. The correct choice should be made only after mapping the target vehicle or energy-storage application, duty cycle, cell format, supplier availability, safety requirements and target selling price.",
  },
  {
    id: "faq2",
    question: "What is the difference between a lithium-ion cell factory and a battery pack assembly plant?",
    answer:
      "A cell factory makes the electrochemical cell itself, including electrode processing, cell assembly, electrolyte filling, formation and grading. A pack assembly plant normally purchases qualified cells and converts them into modules or complete packs using processes such as cell sorting, welding, busbar assembly, BMS integration, thermal management, enclosure assembly and end-of-line testing. The capital intensity, utilities, process controls and technical skill requirements are very different.",
  },
  {
    id: "faq3",
    question: "Which battery form factor should a startup choose: cylindrical, prismatic or pouch?",
    answer:
      "Choose the form factor that best fits your target product and manufacturing strategy. Cylindrical cells can support highly automated assembly and standardised designs; prismatic cells can simplify module and pack architecture through rigid housings; pouch cells can deliver efficient packaging but require careful mechanical compression and swelling management. Supplier ecosystem, automation level, serviceability and thermal design should be considered together.",
  },
  {
    id: "faq4",
    question: "What technical data should I freeze before buying battery manufacturing machinery?",
    answer:
      "At minimum, define chemistry, cell format, cell dimensions, nominal and maximum voltage, capacity, allowable current or C-rate, target cycle life, internal-resistance limits, electrode or cell tolerances where applicable, module and pack configuration, welding method, BMS architecture, cooling approach, test requirements and production capacity. Buying equipment before these parameters are frozen can lock the project into an unsuitable process window.",
  },
  {
    id: "faq5",
    question: "Can I start with battery pack assembly instead of manufacturing lithium-ion cells?",
    answer:
      "Yes. For many new entrants, pack assembly is the more practical starting point because the business can focus on application engineering, cell sourcing, BMS, thermal management, mechanical design, testing and customer integration without building a complete electrode-to-cell production line. The correct route depends on your technology ambition, capital availability, sourcing strategy and target market.",
  },
  {
    id: "faq6",
    question: "What makes a battery manufacturing line reliable rather than simply fast?",
    answer:
      "Reliable output comes from process capability, not only machine speed. Important controls include incoming-cell or raw-material inspection, environmental control, calibrated welding, consistent torque and electrical connections, accurate test equipment, BMS validation, traceability, quarantine procedures and disciplined end-of-line testing. A slower line with stable quality can be commercially stronger than a high-speed line that produces excessive rejects and rework.",
  },
  {
    id: "faq7",
    question: "What Indian compliance requirements should a lithium-ion battery business examine?",
    answer:
      "The answer depends on what you manufacture and where the battery is used. Battery producers are subject to the Battery Waste Management Rules, 2022 and their EPR framework. BIS requirements depend on the applicable product and standard; for example, BIS lists IS 16046 Part 2 for lithium systems used in portable applications. EV traction batteries also sit within vehicle-approval requirements such as the applicable AIS requirements. Compliance should therefore be mapped to the exact product category rather than treated as a one-size-fits-all licence list.",
  },
  {
    id: "faq8",
    question: "How does EPR Nexuss help before a battery plant invests in equipment?",
    answer:
      "The practical value is in connecting commercial requirements with engineering and compliance decisions before purchase orders are issued. The scope can include market-to-chemistry mapping, cell and pack specifications, line-capacity planning, process-flow definition, utility and facility planning, BMS and safety architecture, testing strategy, environmental approvals and EPR planning. The objective is to reduce avoidable redesign, unsuitable equipment purchases and compliance delays.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function DecodingPower() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq((current) => (current === id ? null : id));
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
    <>
      <title>
        Decoding the Chemistry of Power | Lithium-Ion Battery Manufacturing | EPR Nexuss
      </title>
      <meta
        name="description"
        content="A practical guide to lithium-ion battery manufacturing, covering LFP, NMC, LCO, LMO, NCA and LTO chemistry, cell formats, manufacturing steps, plant planning, quality control and Indian compliance considerations."
      />

      <div className="bg-[#f5f8f6] font-sans text-base leading-[1.7] text-[#17211c]">
        {/* pt clears the fixed navbar on desktop; both hero and form start below it */}
        <div className="mx-auto w-[calc(100%-16px)] max-w-[1680px] pb-[46px] pt-[120px] max-[820px]:pb-9 max-[820px]:pt-5">
          {/*
            Grid: form (col 2, spans both rows, sticky) | hero (row 1, col 1) | content (row 2, col 1).
            Below 1150px the DOM order gives: form -> hero -> content.
          */}
          <div className="grid grid-cols-1 items-start gap-[18px] min-[1151px]:grid-cols-[minmax(0,1fr)_320px] min-[1151px]:gap-6">
            {/* ================= STICKY CONTACT FORM ================= */}
            <aside
              aria-label="Contact form"
              className="z-20 min-w-0 min-[1151px]:sticky min-[1151px]:top-[7.5rem] min-[1151px]:col-start-2 min-[1151px]:row-span-2 min-[1151px]:row-start-1 min-[1151px]:max-h-[calc(100vh-8.5rem)] min-[1151px]:self-start min-[1151px]:overflow-y-auto"
            >
              <StickyContactForm />
            </aside>

            {/* ======================= HERO ======================= */}
            <header className="relative min-h-[500px] min-w-0 overflow-hidden rounded-[20px] bg-[radial-gradient(circle_at_88%_18%,rgba(84,198,131,.25),transparent_25%),radial-gradient(circle_at_15%_100%,rgba(42,117,181,.2),transparent_30%),linear-gradient(135deg,#061e14,#0c4b30_55%,#123e63)] text-white after:pointer-events-none after:absolute after:inset-0 after:opacity-45 after:content-[''] after:[background-image:radial-gradient(rgba(255,255,255,.1)_1px,transparent_1px)] after:[background-size:26px_26px] max-[820px]:min-h-0 max-[820px]:rounded-2xl min-[1151px]:col-start-1 min-[1151px]:row-start-1">
              <div className="relative z-[1] max-w-[980px] px-9 pb-11 pt-[38px] max-[820px]:px-5 max-[820px]:pb-[34px] max-[820px]:pt-7">
                <div className="mb-[18px] inline-flex items-center gap-2 rounded-full border border-white/[.28] bg-white/[.06] px-[13px] py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#dff8ea]">
                  <span className="h-2 w-2 rounded-full bg-[#9ae5b8]" />
                  2026 Industry Masterclass
                </div>
                <h1 className="mb-3.5 max-w-[760px] text-[clamp(28px,4vw,46px)] font-extrabold leading-[1.12] tracking-[-0.03em] max-[620px]:text-2xl">
                  Decoding the <span className="text-[#9ae5b8]">Chemistry of Power</span>
                </h1>
                <p className="mb-[22px] max-w-[720px] text-base leading-[1.75] text-white max-[620px]:text-sm">
                  Lithium-ion battery manufacturing is not one process and not
                  one chemistry. The winning plant starts by connecting the{" "}
                  <strong className="font-bold text-[#b8f5d0]">
                    application, chemistry, cell format, manufacturing route,
                    safety architecture and compliance pathway
                  </strong>{" "}
                  before serious capital is committed.
                </p>
                <h3 className={H3}>First Strategic Decision: What Exactly Will You Manufacture?</h3>
                <p className="mb-3 text-white">
                  Cell manufacturing is a materials-and-process business. It depends on electrode uniformity,
                  moisture control, formation discipline and statistical process control.
                  Pack assembly is an application-engineering business.
                  It depends on cell sourcing, electrical joining, thermal architecture, BMS validation and end-of-line testing.
                  Confusing the two leads to the wrong building layout, the wrong machine list and the wrong hiring plan.
                  For most first-time investors in India, starting with pack assembly is commercially safer. It allows the business to learn customer requirements, build a supplier base and establish quality systems before committing the higher capital intensity of electrode-to-cell production. Cell manufacturing remains attractive when the strategy is long-term technology ownership, localisation depth and scale.
                </p>
                <div className="mt-[22px] flex flex-wrap gap-3 max-[620px]:flex-col">
                  <a href="#chemistries" className={`${BTN} bg-[#1a925f] hover:bg-[#157f51]`}>
                    Explore Chemistries
                  </a>
                  <a
                    href="#manufacturing"
                    className={`${BTN} border-2 border-white/30 bg-white/[.08] hover:bg-white/[.15]`}
                  >
                    See Manufacturing Process
                  </a>
                </div>
              </div>
            </header>

            {/* ===================== CONTENT ===================== */}
            <div className="min-w-0 overflow-hidden rounded-[20px] border border-[#dbe7df] bg-white shadow-[0_14px_40px_rgba(10,52,35,.07)] max-[820px]:rounded-2xl min-[1151px]:col-start-1 min-[1151px]:row-start-2">
              <div className="w-full px-7 pb-12 pt-[38px] max-[820px]:px-5 max-[820px]:pb-9 max-[820px]:pt-[26px] max-[620px]:px-[15px] max-[620px]:pb-[30px] max-[620px]:pt-[22px]">
                {/* ---------- Platform, not a product ---------- */}
                <section className={SEC}>
                  <div className={CENTER_HEAD}>
                    <h2 className={H2}>
                      Lithium-Ion Is a <span className={H2_SPAN}>Platform, Not a Product</span>
                    </h2>
                    <p className={LEAD}>
                      The phrase “lithium-ion battery” describes a family of
                      electrochemical systems. What a manufacturer actually
                      sells is a carefully engineered combination of chemistry,
                      cell construction, electrical configuration, BMS,
                      thermal management, mechanical protection and software.
                    </p>
                  </div>

                  <div className={GRID_3}>
                    {[
                      ["Chemistry", "Controls the battery’s behaviour", "Chemistry influences energy density, power capability, life, thermal behaviour, charge characteristics and cost. It is the first engineering decision—not simply a purchasing preference."],
                      ["Cell format", "Controls the mechanical architecture", "Cylindrical, prismatic and pouch cells require different handling, joining, cooling, compression and enclosure strategies. The form factor affects both CapEx and pack design."],
                      ["Pack system", "Turns cells into a usable energy system", "Series-parallel configuration, busbars, BMS, fuses, contactors, cooling, structure and communication decide how the final battery behaves inside the customer’s product."],
                    ].map(([kicker, title, copy]) => (
                      <div key={kicker} className={INFO_CARD}>
                        <div className="mb-1.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#176b45]">
                          {kicker}
                        </div>
                        <h3 className={H3}>{title}</h3>
                        <p className="mb-0 text-[#03170f]">{copy}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ---------- What will you manufacture ---------- */}
                <section id="manufacturing-level" className={`${SEC} ${DIVIDER}`}>
                  <h2 className={H2}>
                    First Strategic Decision: <span className={H2_SPAN}>What Exactly Will You Manufacture?</span>
                  </h2>
                  <p className={LEAD}>
                    Many new entrepreneurs use “battery manufacturing” to mean
                    pack assembly. They are not the same industrial project.
                    Defining the manufacturing level early prevents an
                    unsuitable factory design and equipment budget.
                  </p>

                  <div className={GRID_2}>
                    <div className="rounded-2xl border border-[#b9dec9] bg-gradient-to-br from-[#effaf4] to-white p-[22px]">
                      <span className="mb-2.5 inline-block rounded-full bg-[#eaf7ef] px-[9px] py-1 text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#176b45]">
                        Route A · Cell manufacturing
                      </span>
                      <h3 className={H3}>Electrode-to-cell production</h3>
                      <p className={P}>
                        This route includes electrode manufacturing, cell
                        assembly, electrolyte filling, sealing, formation,
                        aging and grading. It needs much tighter environmental,
                        material, process and quality controls than a typical
                        pack assembly operation.
                      </p>
                      <ul className={LIST}>
                        {[
                          "Higher process depth and technology ownership",
                          "Larger equipment, utility and process-control requirements",
                          "Requires a robust cell quality and traceability system",
                        ].map((t) => (
                          <li key={t} className={LIST_ITEM}>
                            <span className="font-extrabold text-[#176b45]">✓</span> {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-[#dbe7df] bg-white p-[22px]">
                      <span className="mb-2.5 inline-block rounded-full bg-[#eaf7ef] px-[9px] py-1 text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#176b45]">
                        Route B · Pack assembly
                      </span>
                      <h3 className={H3}>Qualified-cell-to-battery production</h3>
                      <p className={P}>
                        The business purchases cells and converts them into
                        application-specific modules or battery packs. The
                        engineering focus moves toward cell sorting, joining,
                        BMS, thermal management, mechanical integration and
                        end-of-line testing.
                      </p>
                      <ul className={LIST}>
                        {[
                          "Lower process complexity than cell production",
                          "Strong fit for application-specific battery businesses",
                          "Supplier qualification becomes a critical control point",
                        ].map((t) => (
                          <li key={t} className={LIST_ITEM}>
                            <span className="font-extrabold text-[#176b45]">✓</span> {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ---------- Chemistries ---------- */}
                <section id="chemistries" className={`${SEC} ${DIVIDER}`}>
                  <div className={CENTER_HEAD}>
                    <h2 className={H2}>
                      The 6 Major <span className={H2_SPAN}>Li-Ion Chemistries</span>
                    </h2>
                    <p className={LEAD}>
                      There is no single “best” chemistry. The correct chemistry
                      is the one whose technical characteristics match the
                      customer’s duty cycle, safety target, package size,
                      lifetime requirement and economics.
                    </p>
                  </div>

                  <div className={GRID_3}>
                    {chemistryData.map((item) => (
                      <article key={item.code} className={CHEM_CARD}>
                        <div className="pointer-events-none absolute -right-1.5 -top-1.5 text-[52px] font-black leading-none text-[rgba(10,57,37,.06)]">
                          {item.code}
                        </div>
                        <span className={`mb-2 inline-block rounded-full px-[9px] py-[3px] text-[11px] font-bold ${item.badgeClass}`}>
                          {item.badge}
                        </span>
                        <h3 className={H3}>{item.code}</h3>
                        <p className="mb-2 text-[13px] text-[#5f6d65]">{item.name}</p>
                        <ul className={LIST}>
                          {item.points.map(([label, value]) => (
                            <li key={label} className={LIST_ITEM}>
                              <span className="font-extrabold text-[#176b45]">✓</span>
                              <span>
                                <strong className={STRONG}>{label}:</strong> {value}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="border-t border-[#dbe7df] pt-[11px] text-[13px] text-[#5f6d65]">
                          <strong className="mb-[5px] block text-[11px] uppercase tracking-[0.05em] text-[#176b45]">
                            Best-fit applications
                          </strong>
                          {item.bestFor}
                        </div>
                        <div className="mt-2.5 border-t border-dashed border-[#d6e3db] pt-2.5 text-xs leading-[1.6] text-[#53645d]">
                          <strong className={STRONG}>Plant implication:</strong> {item.plantImpact}
                        </div>
                      </article>
                    ))}
                  </div>
                  <p className="mb-0 mt-3.5 text-xs text-[#718079]">
                    Indicative comparisons only. Actual energy density, cycle life,
                    power, cost and thermal behaviour depend on cell design,
                    materials, operating window, manufacturing quality and duty cycle.
                  </p>
                </section>

                {/* ---------- Form factors ---------- */}
                <section id="form-factors" className={`${SEC} ${DIVIDER}`}>
                  <div className="grid grid-cols-1 items-stretch gap-[22px] min-[1151px]:grid-cols-[minmax(0,1fr)_1.5fr]">
                    <div>
                      <h2 className={H2}>
                        Manufacturing <span className={H2_SPAN}>Form Factors</span>
                      </h2>
                      <p className={P}>
                        Chemistry tells you how the cell behaves; form factor
                        tells you how the cell must be manufactured, handled and
                        packaged. Changing form factor can change your welding,
                        inspection, cooling, tooling and automation strategy.
                      </p>
                      <p className={P}>
                        The most common formats are{" "}
                        <strong className={STRONG}>cylindrical, prismatic and pouch</strong>. Each can be engineered for
                        different applications, capacities and pack topologies.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 min-[621px]:grid-cols-3">
                      {[
                        ["Cylindrical", "h-10 w-[26px] rounded-[13px]", "Standardised geometry, strong automation potential and mature high-volume handling. Cell-to-pack architecture and thermal interfaces need careful design."],
                        ["Prismatic", "h-10 w-[34px] rounded-lg", "Rigid enclosure with efficient volumetric packaging. Attractive for many LFP and vehicle applications where structural integration matters."],
                        ["Pouch", "mt-1.5 h-7 w-11 rounded-[9px]", "Lightweight flexible enclosure with efficient packaging, but mechanical restraint, swelling management and handling precision become especially important."],
                      ].map(([title, shape, copy]) => (
                        <div key={title} className="rounded-[14px] border border-[#dbe7df] bg-[#f8fbf9] p-[18px] text-center">
                          <div className={`mx-auto mb-2.5 border-2 border-[#176b45] ${shape}`} />
                          <h4 className={H4}>{title}</h4>
                          <p className="mb-0 text-xs text-[#5f6d65]">{copy}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ---------- Parameters ---------- */}
                <section id="parameters" className={`${SEC} ${DIVIDER}`}>
                  <div className={CENTER_HEAD}>
                    <h2 className={H2}>
                      The Technical Numbers That <span className={H2_SPAN}>Drive Plant Decisions</span>
                    </h2>
                    <p className={LEAD}>
                      A machinery quotation is incomplete until the product
                      specification is complete. These parameters connect the
                      customer requirement to the manufacturing process.
                    </p>
                  </div>

                  <div className={GRID_4_GAP3}>
                    {parameters.map(([title, description]) => (
                      <div key={title} className="rounded-[14px] border border-[#dbe7df] bg-[#fbfdfc] p-4">
                        <strong className={`mb-[5px] block text-sm ${STRONG}`}>{title}</strong>
                        <span className="block text-xs leading-[1.55] text-[#5f6d65]">{description}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ---------- Manufacturing process ---------- */}
                <section id="manufacturing" className={`${SEC} ${DIVIDER}`}>
                  <div className={CENTER_HEAD}>
                    <h2 className={H2}>
                      Lithium-Ion Battery <span className={H2_SPAN}>Manufacturing Process</span>
                    </h2>
                    <p className={LEAD}>
                      The complete manufacturing journey depends on whether you
                      are producing cells or assembling packs. A cell factory
                      follows an electrode-to-cell process; a pack plant starts
                      with qualified cells. The stages below show the full
                      technology chain.
                    </p>
                  </div>

                  <div className="grid gap-3.5">
                    {manufacturingSteps.map((step) => (
                      <article
                        key={step.number}
                        className="w-full rounded-[14px] border border-[#dbe7df] border-l-4 border-l-[#176b45] bg-white px-[22px] py-[18px] shadow-[0_5px_16px_rgba(8,48,32,.04)]"
                      >
                        <div className="mb-[5px] text-[11px] font-extrabold uppercase tracking-[0.07em] text-[#176b45]">
                          {step.number} · {step.phase}
                        </div>
                        <h4 className={H4}>{step.title}</h4>
                        <p className="mb-0 text-sm text-[#03170f]">{step.description}</p>
                        <div className="mt-2.5 border-t border-dashed border-[#d6e3db] pt-[9px] text-xs font-bold text-[#105338]">
                          Output: {step.output}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                {/* ---------- Applications matrix ---------- */}
                <section id="applications" className={`${SEC} ${DIVIDER}`}>
                  <div className={CENTER_HEAD}>
                    <h2 className={H2}>
                      Match the Chemistry to the <span className={H2_SPAN}>Application</span>
                    </h2>
                    <p className={LEAD}>
                      A battery should be selected from the customer backwards.
                      The same chemistry can be excellent in one duty cycle and
                      commercially weak in another.
                    </p>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-[#dbe7df]">
                    <table className="w-full min-w-[820px] border-collapse bg-white">
                      <thead>
                        <tr>
                          {["Application", "Common design priority", "Chemistry direction", "What the plant must control"].map((h) => (
                            <th
                              key={h}
                              className="border-b border-[#dbe7df] bg-[#f1f7f3] px-3.5 py-[13px] text-left align-top text-[13px] font-extrabold text-[#0a3925]"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="[&>tr:last-child>td]:border-b-0">
                        {applicationRows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, i) => (
                              <td
                                key={i}
                                className="border-b border-[#dbe7df] px-3.5 py-[13px] text-left align-top text-[13px]"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ---------- Quality ---------- */}
                <section id="quality" className={`${SEC} ${DIVIDER}`}>
                  <div className={CENTER_HEAD}>
                    <h2 className={H2}>
                      A Profitable Battery Plant Is Built on <span className={H2_SPAN}>Quality Gates</span>
                    </h2>
                    <p className={LEAD}>
                      Speed only creates value when the process produces repeatable
                      cells or packs. Quality must be designed into the line,
                      not added after production.
                    </p>
                  </div>

                  <div className={GRID_4_GAP4}>
                    {qualityGates.map(([number, title, description]) => (
                      <div key={number} className="rounded-[15px] border border-[#dbe7df] bg-white p-[18px]">
                        <div className="mb-2.5 inline-flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#eaf7ef] text-xs font-black text-[#176b45]">
                          {number}
                        </div>
                        <h3 className={H3}>{title}</h3>
                        <p className="mb-0 text-[13px] text-[#03170f]">{description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ---------- Plant planning ---------- */}
                <section id="plant" className={`${SEC} ${DIVIDER}`}>
                  <div className={CENTER_HEAD}>
                    <h2 className={H2}>
                      Factory Planning: <span className={H2_SPAN}>Equipment Is Only One Part</span>
                    </h2>
                    <p className={LEAD}>
                      A battery plant is an integrated production system. The
                      line, building, utilities, material flow, safety systems,
                      test laboratory and people must be designed as one
                      operating model.
                    </p>
                  </div>

                  <div className={GRID_3}>
                    {utilities.map(([title, description]) => (
                      <div
                        key={title}
                        className="rounded-xl border border-[#dbe7df] border-l-4 border-l-[#176b45] bg-[#fbfdfc] p-[17px]"
                      >
                        <h4 className={H4}>{title}</h4>
                        <p className="mb-0 text-[13px] text-[#03170f]">{description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ---------- Strategy ---------- */}
                <section id="strategy" className={`${SEC} ${DIVIDER}`}>
                  <h2 className={H2}>
                    Stop Buying Machinery Before You <span className={H2_SPAN}>Freeze the Blueprint</span>
                  </h2>
                  <p className={LEAD}>
                    The most expensive mistakes often happen before the first
                    machine is installed. A technically strong plant starts with
                    a defined product, a measurable process and a clear route to
                    compliance.
                  </p>

                  <div className={GRID_2}>
                    <div className="rounded-2xl border border-[#fecaca] bg-gradient-to-br from-[#fef2f2] to-white p-[22px]">
                      <h3 className="mb-2 text-[19px] font-bold text-[#b91c1c]">Where Projects Go Wrong</h3>
                      <ul className={LIST}>
                        {[
                          "Purchasing equipment before the cell, format and pack specification are frozen.",
                          "Treating battery assembly and cell manufacturing as the same business model.",
                          "Underestimating testing, traceability, environmental control and quality engineering.",
                          "Treating Indian environmental and product requirements as an afterthought.",
                        ].map((t) => (
                          <li key={t} className="mb-1.5 flex items-start gap-2 text-sm text-[#3d4f47]">
                            <span className="text-[#dc2626]">✗</span> {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-[#a7f3d0] bg-gradient-to-br from-[#ecfdf5] to-white p-[22px]">
                      <h3 className="mb-2 text-[19px] font-bold text-[#176b45]">The EPR Nexuss Strategy</h3>
                      <ul className={LIST}>
                        {[
                          "Start with market requirements and translate them into an engineered battery specification.",
                          "Map chemistry, cell format, BMS, thermal system and manufacturing route before equipment procurement.",
                          "Build testing, quality gates and traceability into the plant from the beginning.",
                          "Map applicable approvals and EPR obligations to the exact product category and intended use.",
                        ].map((t) => (
                          <li key={t} className="mb-1.5 flex items-start gap-2 text-sm text-[#3d4f47]">
                            <span className="text-[#047857]">✓</span> {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ---------- Compliance ---------- */}
                <section id="compliance" className={`${SEC} ${DIVIDER}`}>
                  <div className="mb-[18px] rounded-[18px] bg-gradient-to-br from-[#07382b] to-[#0d5338] p-6 text-white">
                    <h3 className="mb-2 text-[19px] font-bold text-white">
                      Indian Compliance Must Be Mapped to the Product
                    </h3>
                    <p className="mb-0 text-white/[.78]">
                      There is no universal licence list for every lithium-ion
                      battery business. Applicability depends on the product,
                      intended use, battery category, manufacturing activity and
                      regulatory framework involved.
                    </p>
                  </div>

                  <div className={GRID_3}>
                    {[
                      ["Battery Waste Management Rules", "Battery producers are subject to the Battery Waste Management Rules, 2022 and the associated Extended Producer Responsibility framework. Registration and EPR obligations should be mapped to the battery category and business role."],
                      ["BIS requirements", "BIS standards are product-specific. For example, BIS identifies IS 16046 Part 2:2018 for safety requirements for portable sealed secondary cells and batteries using lithium systems. Do not treat it as a universal standard for every industrial or EV battery without checking scope."],
                      ["EV approval pathway", "EV traction systems fall within the applicable automotive type-approval framework. AIS requirements, vehicle category and the relevant approval route should be mapped before the battery design is frozen."],
                    ].map(([title, copy]) => (
                      <div key={title} className="rounded-[15px] border border-[#dbe7df] bg-[#f8fbf9] p-[18px]">
                        <h3 className={H3}>{title}</h3>
                        <p className="mb-0 text-[13px] text-[#03170f]">{copy}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-[18px] rounded-[14px] border border-[#dbe7df] bg-[#f3f7f5] px-[18px] py-4 text-xs text-[#5f6d65]">
                    <strong className={STRONG}>Primary references:</strong>{" "}
                    <a
                      href="https://lims.bis.gov.in/home/search_is_number/?is_number__doc_no=16046"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-[#1e6da8] hover:underline"
                    >
                      BIS IS 16046 listings
                    </a>
                    {" · "}
                    <a
                      href="https://cpcb.nic.in/uploads/hwmd/Battery-WasteManagementRules-2022.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-[#1e6da8] hover:underline"
                    >
                      CPCB Battery Waste Management Rules, 2022
                    </a>
                    {" · "}
                    <a
                      href="https://morth.nic.in/sites/default/files/ASI/AIS-156.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-[#1e6da8] hover:underline"
                    >
                      MoRTH AIS-156 reference
                    </a>
                  </div>
                </section>

                {/* ---------- FAQ ---------- */}
                <section id="faq" className={`${SEC} ${DIVIDER}`}>
                  <div className={CENTER_HEAD}>
                    <h2 className={H2}>
                      Client Questions About <span className={H2_SPAN}>Lithium-Ion Battery Manufacturing</span>
                    </h2>
                    <p className={LEAD}>
                      These are the questions a serious investor should ask before
                      selecting chemistry, suppliers, machinery or a compliance
                      strategy.
                    </p>
                  </div>

                  <div>
                    {faqItems.map((item) => {
                      const isOpen = openFaq === item.id;
                      return (
                        <div key={item.id} className="mb-[9px] overflow-hidden rounded-xl border border-[#dbe7df] bg-white">
                          <button
                            type="button"
                            className="flex w-full cursor-pointer items-center justify-between gap-3 bg-[#f8fbf9] px-4 py-[15px] text-left text-sm font-bold text-[#0a3925] hover:bg-[#eef5f1]"
                            onClick={() => toggleFaq(item.id)}
                            aria-expanded={isOpen}
                          >
                            <span>{item.question}</span>
                            <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                          </button>
                          {isOpen && (
                            <div className="border-t border-[#dbe7df] px-4 py-3.5 text-sm leading-[1.75] text-[#5f6d65]">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>

              {/* ---------- CTA footer ---------- */}
              <div
                id="consult"
                className="rounded-b-[20px] bg-gradient-to-br from-[#06261a] to-[#0e4a31] px-6 py-[42px] text-center text-white max-[620px]:rounded-b-2xl max-[620px]:px-4 max-[620px]:py-[34px]"
              >
                <h2 className="mb-2.5 text-[26px] font-extrabold leading-[1.2] text-white max-[620px]:text-[21px]">
                  Ready to Engineer Your Battery Manufacturing Plant?
                </h2>
                <p className="mx-auto mb-5 max-w-[660px] text-[#cfe3d8]">
                  Move from chemistry selection to a practical plant blueprint:
                  product specification, manufacturing route, equipment scope,
                  quality architecture and applicable compliance requirements.
                </p>
                <a
                  href="mailto:contact@eprnexuss.com"
                  className="inline-block rounded-full bg-[#1a925f] px-[26px] py-[13px] font-bold text-white transition hover:-translate-y-px hover:bg-[#157f51] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  Consult with an EPR Nexuss Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}