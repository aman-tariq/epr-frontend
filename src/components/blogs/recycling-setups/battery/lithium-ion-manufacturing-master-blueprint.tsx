import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Seo from "@/components/Seo";
import StickyContactForm from "@/components/StickyContactForm";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

const LithiumIonManufacturingMasterBlueprint: React.FC = () => {
  const [activeTab, setActiveTab] = useState("ev-tab");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [capacity, setCapacity] = useState(100);
  const [chemistry, setChemistry] = useState("lfp");

  const chemMultiplier = chemistry === "nmc" ? 1.25 : chemistry === "lto" ? 1.5 : 1.0;
  const capexSavings = Math.round(capacity * 1400 * chemMultiplier);
  const setupTime = capacity < 50 ? "2.5 Months" : capacity < 300 ? "4 Months" : "7 Months";
  const eprRevenue = Math.round(capacity * 450);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Seo
        title="The Master Blueprint of Lithium-Ion Battery Manufacturing 2026 | EPR Nexuss"
        description="Complete industrial guide to lithium-ion battery manufacturing: electrode preparation, dry room dew point, domain-specific chemistries (LFP, NMC, LTO), pack assembly, CPCB compliance, CapEx optimization, and how EPR Nexuss eliminates capital wastage."
        keywords={[
          "Lithium Ion Battery Manufacturing Blueprint",
          "Li-Ion Plant Setup India",
          "Dry Room Dew Point Battery",
          "LFP NMC LTO Manufacturing",
          "Battery Pack Assembly Line",
          "CPCB Battery Manufacturing Compliance",
          "Electrode Preparation Slurry Mixing",
          "Battery Manufacturing CapEx",
          "Slot Die Coating Battery",
          "AIS 156 BMS",
          "Battery Waste Management Rules 2022",
        ]}
        url="https://eprnexuss.com/blog/lithium-ion-manufacturing-master-blueprint"
        type="article"
      />

      <div className="min-h-screen mt-[70px] bg-[#f8fafc] text-[#1f2937] font-sans pb-12">
        <div className="max-w-8xl mx-auto px-2 md:px-2 py-6 md:py-12">
          <div className="lg:flex lg:gap-4 lg:items-start">
            <div>
              {/* HERO — single H1 */}
              <motion.section
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl mx-2 md:mx-0 mb-10 px-6 md:px-12 py-12 md:py-16 bg-gradient-to-br from-[#ecfdf5] via-white to-[#e0f2fe] border border-slate-200 shadow-sm"
              >
                <div className="absolute -top-16 -right-16 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-5"
                  >
                    <span>⚡ Executive Technical Report</span>
                    <span>•</span>
                    <span>Updated 2026</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.55 }}
                    className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-5"
                  >
                    The Master Blueprint of{" "}
                    <strong className="font-black">Lithium-Ion Battery Manufacturing</strong>:{" "}
                    <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                      Domain-Specific Technologies, Hidden Layers &amp; Plant Setup
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.55 }}
                    className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed mb-6"
                  >
                    An authoritative industrial guide on{" "}
                    <strong>cell chemistry selection</strong>, precision{" "}
                    <strong>dry room</strong> specs, automated assembly lines,{" "}
                    <strong>CPCB compliance</strong> under Battery Waste Management Rules 2022, and
                    how <strong className="text-emerald-600">EPR Nexuss</strong> eliminates capital
                    wastage for new and restarting manufacturers.
                  </motion.p>

                  <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                        EN
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">EPR Nexuss Engineering Editorial</p>
                        <p className="text-xs">Industrial Battery Advisory &amp; Compliance Division</p>
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">Reading Time:</span> 14 mins
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">Audience:</span> Plant Managers,
                      Founders, Investors
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Stats */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 px-1"
              >
                {[
                  { value: "$108B+", label: "Global Li-Ion Market Target", color: "text-emerald-600" },
                  { value: "20,000+", label: "LTO Potential Cycle Life", color: "text-teal-600" },
                  { value: "-40°C", label: "Dry Room Dew Point Target", color: "text-cyan-600" },
                  { value: "40%", label: "CapEx Savings with EPR Nexuss", color: "text-emerald-500" },
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    variants={scaleUp}
                    className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm"
                  >
                    <p className={`text-xl sm:text-2xl font-black ${s.color}`}>{s.value}</p>
                    <p className="text-xs font-medium text-slate-500 mt-1 leading-tight">{s.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex-1 min-w-0 space-y-14 px-1 md:px-0">
                {/* SECTION 01 */}
                <motion.section
                  id="engineering-layers"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                  className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm"
                >
                  <motion.div variants={fadeIn} className="border-l-4 border-emerald-600 pl-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                      Section 01
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
                      The Hidden Engineering Layers of Li-Ion Manufacturing
                    </h2>
                  </motion.div>

                  <motion.p variants={fadeIn} className="text-slate-600 leading-relaxed mb-8">
                    Manufacturing a <strong>lithium-ion battery</strong> cell is not simply a matter
                    of putting active chemical powders inside a metal tube or foil pouch. It is an
                    extraordinary exercise in sub-micron chemical precision, strict atmospheric
                    regulation, and high-frequency electromechanical assembly. A single particle of
                    airborne dust or a micro-percentage deviation in ambient moisture can ruin an
                    entire production batch, leading to internal micro-short circuits or{" "}
                    <strong>thermal runaway</strong> risks.
                  </motion.p>

                  {/* Layer A */}
                  <motion.div variants={fadeIn} className="mb-8">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm">
                          A
                        </span>
                        <h3 className="text-lg font-bold text-slate-900">
                          Electrode Preparation (The Chemical Core)
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        {[
                          {
                            title: "1. Slurry Mixing (Planetary Vacuum Mixers)",
                            body: "Active materials (NMC, LFP, or LTO), conductive carbon black, and binders (PVDF or SBR/CMC) are blended under deep vacuum (< −0.09 MPa). Viscosity must be held tightly between 3,000–8,000 mPa·s to prevent particle agglomeration.",
                          },
                          {
                            title: "2. Precision Slot-Die Coating",
                            body: "Slurry is applied simultaneously to both sides of current collectors (Copper foil for Anode, Aluminum for Cathode). Slot-die pumps maintain continuous thickness with tolerances under ±1.5 μm.",
                          },
                          {
                            title: "3. Calendering (Roll Press Compaction)",
                            body: "Coated foils pass through heated hydraulic rollers to achieve target volumetric energy density (compaction density ~3.8 g/cm³ for NMC, ~2.4 g/cm³ for LFP) without crushing active particles.",
                          },
                          {
                            title: "4. Laser & Mechanical Slitting",
                            body: "Master rolls are slit into narrow strips corresponding to cell heights. Burr heights must be strictly controlled under < 7 μm to prevent separator puncture.",
                          },
                        ].map((item) => (
                          <div key={item.title} className="bg-white p-4 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-emerald-600 mb-1 text-sm">{item.title}</h4>
                            <p className="text-slate-600 text-xs leading-relaxed">{item.body}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Layer B */}
                  <motion.div variants={fadeIn} className="mb-8">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm">
                          B
                        </span>
                        <h3 className="text-lg font-bold text-slate-900">
                          Cell Assembly &amp; Electrolyte Filling
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        {[
                          {
                            title: "1. Winding / Stacking",
                            body: "Anode, separator, and cathode are wound (cylindrical) or stacked (prismatic/pouch) under controlled tension. Separator thickness and porosity directly affect ionic conductivity and safety.",
                          },
                          {
                            title: "2. Tab Welding",
                            body: "Ultrasonic or laser welding joins current-collector tabs to terminals. Weld strength and contact resistance must be validated; poor welds cause hotspots and capacity fade.",
                          },
                          {
                            title: "3. Electrolyte Filling",
                            body: "Electrolyte (typically LiPF6 in organic solvents) is injected under vacuum. Moisture and oxygen exposure must be near zero — this step is almost always done inside the dry room.",
                          },
                          {
                            title: "4. Sealing & Degassing",
                            body: "Cells are sealed, then formation cycles generate SEI. Excess gas is removed in a controlled degassing step before final sealing for pouch and prismatic formats.",
                          },
                        ].map((item) => (
                          <div key={item.title} className="bg-white p-4 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-teal-600 mb-1 text-sm">{item.title}</h4>
                            <p className="text-slate-600 text-xs leading-relaxed">{item.body}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Layer C */}
                  <motion.div variants={fadeIn}>
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 font-bold flex items-center justify-center text-sm">
                          C
                        </span>
                        <h3 className="text-lg font-bold text-slate-900">
                          Formation, Aging &amp; Grade Sorting
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        {[
                          {
                            title: "1. Formation Cycling",
                            body: "Controlled charge/discharge builds the solid-electrolyte interphase (SEI). Protocol (C-rates, voltage limits, temperature) is chemistry-specific and critical for long-term cycle life.",
                          },
                          {
                            title: "2. Aging & OCV Monitoring",
                            body: "Cells rest for days while open-circuit voltage is tracked. Abnormal self-discharge indicates micro-shorts or contamination and triggers rejection.",
                          },
                          {
                            title: "3. Capacity & IR Sorting",
                            body: "Every cell is graded by capacity and internal resistance. Tight matching is mandatory for pack-level balance and to meet AIS 156 / customer specs.",
                          },
                          {
                            title: "4. Pack Assembly & BMS",
                            body: "Matched cells are welded into modules/packs with a programmed BMS for overcharge, short-circuit, and thermal cut-offs — essential for legal sale in India.",
                          },
                        ].map((item) => (
                          <div key={item.title} className="bg-white p-4 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-cyan-600 mb-1 text-sm">{item.title}</h4>
                            <p className="text-slate-600 text-xs leading-relaxed">{item.body}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.section>

                {/* SECTION 02 — Domain Tabs */}
                <motion.section
                  id="domain-applications"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeIn}
                  className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm"
                >
                  <div className="border-l-4 border-teal-600 pl-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-600">
                      Section 02
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
                      Domain-Specific Battery Technologies
                    </h2>
                  </div>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Choosing the right <strong>lithium-ion chemistry</strong> and form factor is not
                    optional — it decides plant machinery, CapEx, and market access. Below is how
                    requirements differ by domain.
                  </p>

                  <div className="flex overflow-x-auto border-b border-slate-200 gap-1 text-sm font-semibold text-slate-500 no-scrollbar mb-6">
                    {[
                      { id: "ev-tab", label: "Electric Vehicles (EVs)" },
                      { id: "ess-tab", label: "Energy Storage (ESS & Solar)" },
                      { id: "agv-tab", label: "Industrial & AGVs" },
                      { id: "consumer-tab", label: "Consumer & IoT" },
                      { id: "medical-tab", label: "Medical Devices" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-2.5 px-3 whitespace-nowrap transition border-b-4 ${
                          activeTab === tab.id
                            ? "border-emerald-600 text-emerald-600 font-bold"
                            : "border-transparent hover:text-slate-800"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="min-h-[140px]">
                    {activeTab === "ev-tab" && (
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-lg font-bold text-slate-900">
                            Automotive &amp; E-Mobility (2W, 3W, 4W)
                          </h3>
                          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
                            280–350 Wh/kg
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Requires extreme <strong>energy density</strong>, rapid heat dispersion
                          during fast-charging, and high discharge C-rates (3C continuous, 5C–10C
                          pulse). <strong>NMC</strong> and high-nickel chemistries dominate passenger
                          EVs; <strong>LFP</strong> is preferred for 2W/3W and commercial fleets where
                          safety and cycle life matter more than peak range. Packs must meet{" "}
                          <strong>AIS 156</strong> (including Phase 2 thermal propagation) for legal
                          use in Indian EVs.
                        </p>
                      </div>
                    )}
                    {activeTab === "ess-tab" && (
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-lg font-bold text-slate-900">
                            Grid &amp; Renewable Energy Storage Systems (ESS)
                          </h3>
                          <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold">
                            6,000–20,000 Cycles
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Prioritizes levelized cost of storage (LCOS), non-flammability, zero thermal
                          runaway propagation, and ultra-long cycle life over volumetric compactness.{" "}
                          <strong>LFP prismatic</strong> and <strong>LTO</strong> dominate this
                          segment. Dry-room and formation protocols can be slightly relaxed versus
                          high-energy NMC, but calendar life and safety certifications remain strict.
                        </p>
                      </div>
                    )}
                    {activeTab === "agv-tab" && (
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-lg font-bold text-slate-900">
                            Industrial AGVs, Forklifts &amp; Material Handling
                          </h3>
                          <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold">
                            High C-Rate / Fast Charge
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Demands robust mechanical packaging, fast opportunity charging, and
                          predictable cycle life under continuous shift operation.{" "}
                          <strong>LFP</strong> and <strong>LTO</strong> packs with smart BMS thermal
                          management are the standard choice. Vibration and shock resistance are as
                          important as energy density.
                        </p>
                      </div>
                    )}
                    {activeTab === "consumer-tab" && (
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-lg font-bold text-slate-900">
                            Consumer Electronics &amp; IoT
                          </h3>
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold">
                            High Energy Density
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Ultra-compact pouch and cylindrical formats (often <strong>LCO</strong> or
                          high-nickel <strong>NMC</strong>) prioritize volumetric energy density and
                          thin form factors. Safety margins and cost pressure are higher than in EV or
                          ESS segments. <strong>BIS IS 16046</strong> certification is mandatory for
                          legal sale in India.
                        </p>
                      </div>
                    )}
                    {activeTab === "medical-tab" && (
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-lg font-bold text-slate-900">Medical Devices</h3>
                          <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-bold">
                            Safety Critical
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Requires certified chemistries, redundant protection circuits, and fully
                          traceable manufacturing records. <strong>LFP</strong> and specialized
                          medical-grade cells are preferred for implantable and portable medical
                          equipment. Documentation and lot control are non-negotiable for regulatory
                          approval.
                        </p>
                      </div>
                    )}
                  </div>
                </motion.section>

                {/* SECTION 03 — Dry Room */}
                <motion.section
                  id="dry-room"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={fadeIn}
                  className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm"
                >
                  <div className="border-l-4 border-cyan-600 pl-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
                      Section 03
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
                      Dry Room &amp; Atmospheric Control (−40°C Dew Point)
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    A proper <strong>dry room</strong> is not optional for serious cell assembly.
                    Lithium salts such as <strong>LiPF6</strong> react with moisture to form
                    hydrofluoric acid (HF), which attacks electrodes and current collectors. Target
                    dew point is typically <strong>−40°C to −50°C</strong> (moisture often under 0.5%
                    RH) in the electrolyte filling and electrode handling zones.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">•</span>
                      <span>
                        <strong>HVAC sizing</strong> must match local climate and air-lock traffic —
                        under-specced units are a common CapEx mistake.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">•</span>
                      <span>
                        <strong>Airlocks and personnel protocols</strong> prevent moisture ingress
                        when operators enter or exit.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">•</span>
                      <span>
                        Continuous monitoring of dew point and particle counts protects yield and
                        long-term cell safety.
                      </span>
                    </li>
                  </ul>
                </motion.section>

                {/* SECTION 04 — Compliance */}
                <motion.section
                  id="compliance"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={fadeIn}
                  className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm"
                >
                  <div className="border-l-4 border-emerald-600 pl-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                      Section 04
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
                      Regulatory Stack: CPCB, BIS, AIS 156 &amp; EPR
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    In India, manufacturing without the right certifications is illegal. Core
                    requirements include:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    {[
                      {
                        title: "CTE / CTO (State PCB)",
                        body: "Consent to Establish and Consent to Operate validate pollution control and waste infrastructure before and after commissioning.",
                      },
                      {
                        title: "BIS IS 16046",
                        body: "Mandatory safety standard for lithium cells/packs (aligned with IEC 62133). NABL lab testing for overcharge, short circuit, and thermal abuse.",
                      },
                      {
                        title: "AIS 156 (EV packs)",
                        body: "Required for EV batteries: BMS communication, thermal propagation, IP rating. Enforced via MoRTH / ARAI / ICAT.",
                      },
                      {
                        title: "CPCB EPR (BWM Rules 2022)",
                        body: "Producers must register on the CPCB portal and meet recycling targets. Non-compliance leads to environmental compensation and plant sealing.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* SECTION 05 — How EPR Nexuss Helps */}
                <motion.section
                  id="epr-nexuss-advantage"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={fadeIn}
                  className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm"
                >
                  <div className="border-l-4 border-teal-600 pl-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-600">
                      Section 05
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
                      How EPR Nexuss Eliminates Capital Wastage
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Most failed or delayed plants share the same root causes: wrong chemistry for the
                    market, generic machines that do not meet tolerance, under-specced dry rooms, and
                    ignored <strong>BWM Rules 2022</strong> / EPR obligations. EPR Nexuss addresses
                    each one before money is spent.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>
                        <strong>Market-to-chemistry mapping</strong> so you do not buy an NMC line
                        for an LFP-dominated 3W/ESS demand.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>
                        <strong>Machine technical specs</strong> drafted before PO — welders,
                        sorters, aging racks, coating lines matched to your cell design.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>
                        <strong>Dry room HVAC</strong> engineered to the correct dew point for your
                        climate and process zone.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>
                        <strong>CTE/CTO + CPCB EPR</strong> handled in parallel so compliance does
                        not become a post-commissioning crisis.
                      </span>
                    </li>
                  </ul>
                </motion.section>

                {/* SECTION 06 — Calculator */}
                <motion.section
                  id="calculator"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={fadeIn}
                  className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm"
                >
                  <div className="border-l-4 border-cyan-600 pl-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
                      Section 06
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
                      Interactive Plant Setup ROI Estimator
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label htmlFor="capacity-slider" className="block text-sm font-bold text-slate-800 mb-2">
                        Target Annual Assembly Capacity:{" "}
                        <span className="text-emerald-600 font-extrabold">
                          {capacity >= 1000
                            ? (capacity / 1000).toFixed(1) + " GWh"
                            : capacity + " MWh"}
                        </span>
                      </label>
                      <input
                        id="capacity-slider"
                        type="range"
                        min={10}
                        max={1000}
                        step={10}
                        value={capacity}
                        onChange={(e) => setCapacity(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      />
                      <div className="flex justify-between text-xs text-slate-400 mt-2">
                        <span>10 MWh</span>
                        <span>500 MWh</span>
                        <span>1 GWh</span>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="chemistry-select" className="block text-sm font-bold text-slate-800 mb-2">
                        Primary Target Chemistry
                      </label>
                      <select
                        id="chemistry-select"
                        value={chemistry}
                        onChange={(e) => setChemistry(e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-sm font-semibold text-slate-800 focus:outline-none focus:border-emerald-500"
                      >
                        <option value="lfp">Lithium Iron Phosphate (LFP) – EV / ESS</option>
                        <option value="nmc">Nickel Manganese Cobalt (NMC) – High Performance</option>
                        <option value="lto">Lithium Titanate (LTO) – Ultra Long Life</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                    <div className="p-4 bg-emerald-50 rounded-2xl text-center border border-emerald-100">
                      <p className="text-xs text-slate-500 font-semibold">Estimated CapEx Optimization</p>
                      <p className="text-xl sm:text-2xl font-black text-emerald-600 mt-1">
                        ${capexSavings.toLocaleString()}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Saved via EPR Nexuss technical sourcing</p>
                    </div>
                    <div className="p-4 bg-teal-50 rounded-2xl text-center border border-teal-100">
                      <p className="text-xs text-slate-500 font-semibold">Commissioning Timeframe</p>
                      <p className="text-xl sm:text-2xl font-black text-teal-600 mt-1">{setupTime}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">50% faster than industry average</p>
                    </div>
                    <div className="p-4 bg-cyan-50 rounded-2xl text-center border border-cyan-100">
                      <p className="text-xs text-slate-500 font-semibold">Est. Annual EPR Credit Potential</p>
                      <p className="text-xl sm:text-2xl font-black text-cyan-600 mt-1">
                        ${eprRevenue.toLocaleString()} / yr
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Monetized under CPCB BWM rules</p>
                    </div>
                  </div>
                </motion.section>

                {/* SECTION 07 — FAQ */}
                <motion.section
                  id="faq"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                  className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm"
                >
                  <motion.div variants={fadeIn} className="border-l-4 border-emerald-600 pl-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                      Section 07
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
                      Frequently Asked Questions
                    </h2>
                  </motion.div>

                  <div className="space-y-3">
                    {[
                      {
                        q: "What is the minimum capital requirement to restart or set up a small-scale Li-Ion pack assembly line?",
                        a: "A semi-automated 10 MWh to 20 MWh annual capacity pack assembly line can be initiated with a capital layout of approximately $120,000 to $250,000 (excluding land/building). This includes automatic cell sorters, pneumatic/laser spot welders, battery pack testers, BMS programmers, and basic aging racks. EPR Nexuss helps optimize this spend so zero money is wasted on over-specced or incompatible gear.",
                      },
                      {
                        q: "Why is dry room control (−40°C dew point) so crucial during cell assembly?",
                        a: "Lithium-ion electrolyte contains salts such as LiPF6. If moisture is present in ambient air, moisture molecules react instantly with the salt to generate hydrofluoric acid (HF). HF dissolves the electrode interfaces, corrodes current collectors, and severely compromises cell safety and life cycle. A strict −40°C to −50°C dew point keeps moisture levels under 0.5% RH.",
                      },
                      {
                        q: "Which chemistry should a new Indian plant start with?",
                        a: "For most Indian startups, LFP in prismatic or cylindrical format is the safest first bet: excellent thermal stability for Indian summers, cobalt-free supply chain, and strong demand from 3W EVs, telecom, and solar ESS. NMC is better when customers demand higher energy density (premium 2W/4W). LTO is niche but valuable for ultra-long life and extreme temperature applications.",
                      },
                      {
                        q: "How does EPR Nexuss reduce CapEx waste?",
                        a: "We draft exact technical specifications for every machine before you issue a PO, map chemistry to your real market, design dry-room HVAC for the correct dew point, and clear CTE/CTO + EPR registrations in parallel. Clients typically avoid 30–40% of the overspend that comes from buying generic lines or wrong-spec equipment.",
                      },
                      {
                        q: "Is AIS 156 mandatory for all batteries?",
                        a: "No. AIS 156 is specifically mandatory for batteries used in Electric Vehicles (EVs) in India. For Solar ESS, medical devices, or consumer electronics, BIS IS 16046 is typically sufficient. EPR Nexuss helps map exactly which licenses apply to your product line.",
                      },
                    ].map((faq, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(index)}
                          className="w-full p-4 md:p-5 text-left font-bold text-slate-900 flex justify-between items-center gap-3"
                        >
                          <span className="text-sm md:text-base">{faq.q}</span>
                          <span className="text-emerald-600 text-xl shrink-0">
                            {openFaq === index ? "−" : "+"}
                          </span>
                        </button>
                        {openFaq === index && (
                          <div className="px-4 md:px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                            {faq.a}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Final CTA */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="rounded-3xl p-8 md:p-12 text-center bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg"
                >
                  <h2 className="text-2xl md:text-3xl font-black mb-4">
                    Ready to Build Without Wasting Capital?
                  </h2>
                  <p className="text-white/90 max-w-xl mx-auto mb-8">
                    EPR Nexuss drafts the exact machine specs, chemistry map, dry-room design, and
                    compliance stack so your <strong>lithium-ion battery manufacturing</strong> plant
                    launches on time and on budget.
                  </p>
                  <a
                    href="mailto:contact@eprnexuss.com"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-emerald-700 font-bold text-lg hover:bg-slate-50 transition shadow-sm"
                  >
                    Consult EPR Nexuss Engineering
                  </a>
                </motion.div>
              </div>
            </div>

            <aside
              className="hidden lg:block w-[280px] flex-shrink-0 self-start"
              style={{ position: "sticky", top: "7rem" }}
            >
              <StickyContactForm />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default LithiumIonManufacturingMasterBlueprint;