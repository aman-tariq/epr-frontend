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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const DecodingLithiumIonChemistries: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <Seo
        title="Decoding Lithium-Ion Battery Chemistries | Types of Li-Ion Manufacturing 2026"
        description="Complete guide to the 6 major Lithium-Ion battery chemistries (LFP, NMC, LCO, LMO, NCA, LTO), form factors, and the EPR Nexuss master blueprint for starting a profitable battery manufacturing plant in India."
        keywords={[
          "Lithium Ion Battery Chemistries",
          "LFP vs NMC",
          "Types of Lithium Ion Batteries",
          "Battery Manufacturing Plant India",
          "LFP Prismatic Cells",
          "NMC Cylindrical Cells",
          "Battery Form Factors",
          "Dry Room Battery Manufacturing",
          "AIS 156 BMS Design",
          "CPCB EPR Battery Manufacturing",
        ]}
        url="https://eprnexuss.com/blog/decoding-lithium-ion-chemistries"
        type="article"
      />

      <div className="min-h-screen pt-[70px] bg-[#030712] text-gray-200 font-sans pb-12">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .font-tech { font-family: 'Outfit', Inter, system-ui, sans-serif; }
              .glass-panel {
                background: rgba(17, 24, 39, 0.6);
                backdrop-filter: blur(16px);
                border: 1px solid rgba(255, 255, 255, 0.05);
              }
              .glass-card {
                background: linear-gradient(145deg, rgba(31, 41, 55, 0.4) 0%, rgba(17, 24, 39, 0.8) 100%);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.08);
                transition: all 0.4s ease;
              }
              .glass-card:hover {
                transform: translateY(-4px);
                background: linear-gradient(145deg, rgba(31, 41, 55, 0.6) 0%, rgba(17, 24, 39, 0.9) 100%);
              }
              .text-gradient-blue {
                background: linear-gradient(to right, #00e5ff, #3b82f6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
              .text-gradient-green {
                background: linear-gradient(to right, #39ff14, #10b981);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            `,
          }}
        />

        <div className="max-w-8xl mx-auto px-2 md:px-2 py-6 md:py-12">
          {/* Two-Column Layout */}
          <div className="lg:flex lg:gap-4 lg:items-start">
            <div>
              {/* HERO */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl mx-2 md:mx-0 mb-12 px-6 md:px-12 py-14 md:py-20 bg-gradient-to-br from-[#0a1628] via-[#030712] to-[#0a1f1a] border border-white/10 shadow-2xl"
              >
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#00e5ff]/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#39ff14]/10 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#00e5ff]/30 mb-6"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
                    <span className="text-xs font-tech font-bold text-[#00e5ff] tracking-widest uppercase">
                      2026 Industry Masterclass
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    className="font-tech text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
                  >
                    Decoding the <br />
                    <span className="text-gradient-blue">Chemistry of Power</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed"
                  >
                    Types of Lithium-Ion Battery Manufacturing. Choosing the{" "}
                    <strong className="text-white">exact right chemistry</strong> is the absolute
                    first step to plant profitability. Don&apos;t guess—engineer your success.
                  </motion.p>
                </div>
              </motion.section>

              {/* Main Content */}
              <div className="flex-1 min-w-0 space-y-12 px-1 md:px-0">
                {/* Intro */}
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeIn}
                  className="glass-card rounded-3xl p-6 md:p-10"
                >
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    The global EV and Energy Storage boom has made battery manufacturing the most
                    lucrative industrial sector of this decade. But here is the brutal truth:{" "}
                    <strong className="text-white">
                      &quot;Lithium-ion&quot; is not a single product.
                    </strong>{" "}
                    It is an umbrella term for radically different chemical architectures.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Buying a generic Chinese assembly line without first mapping your target market
                    (e.g., 2-Wheeler EVs vs. Grid Solar) to the correct chemical family will result
                    in immediate financial hemorrhage. Let&apos;s decode the 6 core chemistries
                    dominating the market today.
                  </p>
                </motion.section>

                {/* 6 Chemistries */}
                <motion.section
                  id="chemistries"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeIn} className="mb-8">
                    <h2 className="font-tech text-2xl md:text-4xl font-black text-white mb-2">
                      The 6 Major{" "}
                      <span className="text-gradient-green">Li-Ion Chemistries</span>
                    </h2>
                    <p className="text-gray-400">
                      Match the molecular architecture to your client&apos;s exact use-case.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      {
                        code: "LFP",
                        name: "Lithium Iron Phosphate",
                        tag: "The Workhorse",
                        color: "#39ff14",
                        stats: [
                          ["Cycle Life", "3,000 - 5,000+"],
                          ["Safety", "Extremely High (No cobalt)"],
                        ],
                        best: "EV Buses, 3-Wheelers, Solar ESS. Highly bankable, zero-fire-risk packs for heavy industrial use.",
                      },
                      {
                        code: "NMC",
                        name: "Nickel Manganese Cobalt",
                        tag: "The Sprinter",
                        color: "#00e5ff",
                        stats: [
                          ["Energy Density", "Very High"],
                          ["Cycle Life", "1,000 - 2,000"],
                        ],
                        best: "2W EVs, Passenger Cars. Maximizes range in tight spaces; high demand for modern E-mobility.",
                      },
                      {
                        code: "LCO",
                        name: "Lithium Cobalt Oxide",
                        tag: "The Pocket Power",
                        color: "#a855f7",
                        stats: [
                          ["Specific Energy", "Excellent"],
                          ["Thermal Safety", "Low"],
                        ],
                        best: "Smartphones, Laptops, IoT. Ultra-compact pouch formats yield high margins in consumer electronics.",
                      },
                      {
                        code: "LMO",
                        name: "Lithium Manganese Oxide",
                        tag: "The Heavy Lifter",
                        color: "#f97316",
                        stats: [
                          ["Current Draw", "Very High"],
                          ["Fast Charging", "Excellent"],
                        ],
                        best: "Power Tools, Medical Devices. Cost-effective for applications demanding sudden bursts of power.",
                      },
                      {
                        code: "NCA",
                        name: "Nickel Cobalt Aluminum",
                        tag: "The Premium Drive",
                        color: "#ec4899",
                        stats: [
                          ["Energy Density", "Pinnacle"],
                          ["Cost", "High"],
                        ],
                        best: "Premium Passenger EVs (e.g. Tesla). Ultimate powertrain performance and longest driving ranges.",
                      },
                      {
                        code: "LTO",
                        name: "Lithium Titanate",
                        tag: "The Immortal",
                        color: "#eab308",
                        stats: [
                          ["Cycle Life", "20,000+"],
                          ["Charge Speed", "Ultra-Fast (10 mins)"],
                        ],
                        best: "Fast-charge infrastructure, Extreme Temps (-30°C). Longevity offsets high initial capital cost.",
                      },
                    ].map((c) => (
                      <motion.div
                        key={c.code}
                        variants={scaleUp}
                        className="glass-card rounded-2xl p-6 relative overflow-hidden group"
                        style={{ borderTop: `2px solid ${c.color}` }}
                      >
                        <div
                          className="absolute -right-6 -top-6 text-7xl font-black opacity-5 font-tech group-hover:opacity-10 transition"
                          style={{ color: c.color }}
                        >
                          {c.code}
                        </div>
                        <div className="relative z-10">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-black font-tech text-white">{c.code}</h3>
                            <span
                              className="text-xs font-bold px-2.5 py-1 rounded border"
                              style={{
                                backgroundColor: `${c.color}15`,
                                color: c.color,
                                borderColor: `${c.color}40`,
                              }}
                            >
                              {c.tag}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-gray-400 mb-3">{c.name}</p>
                          <ul className="text-sm text-gray-300 space-y-2 mb-4">
                            {c.stats.map(([label, val]) => (
                              <li key={label} className="flex items-center gap-2">
                                <span style={{ color: c.color }}>✓</span>
                                <strong>{label}:</strong> {val}
                              </li>
                            ))}
                          </ul>
                          <div className="pt-3 border-t border-white/10">
                            <p
                              className="text-xs font-bold uppercase tracking-wider mb-1"
                              style={{ color: c.color }}
                            >
                              Best For
                            </p>
                            <p className="text-sm text-gray-400">{c.best}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Form Factors */}
                <motion.section
                  id="form-factors"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeIn}
                  className="glass-card rounded-3xl p-6 md:p-10"
                >
                  <h2 className="font-tech text-2xl md:text-3xl font-black text-white mb-3">
                    Manufacturing <span className="text-gradient-blue">Form Factors</span>
                  </h2>
                  <p className="text-gray-400 text-sm mb-8 max-w-2xl">
                    Once chemistry is selected, the physical shape dictates your assembly line
                    machinery. You cannot easily switch a cylindrical line to pouch manufacturing
                    without massive CapEx.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Cylindrical",
                        desc: "18650, 21700, 4680. Highly automated, mass production standard. Easy thermal management.",
                        border: "border-[#00e5ff]/40",
                        accent: "border-[#00e5ff]",
                      },
                      {
                        title: "Prismatic",
                        desc: "Rigid aluminum casing. Dominant in LFP and structural EV packs (Cell-to-Pack).",
                        border: "border-[#39ff14]/40",
                        accent: "border-[#39ff14]",
                      },
                      {
                        title: "Pouch",
                        desc: "Lightweight laminated film. Highest energy density but requires precise pressure management.",
                        border: "border-purple-500/40",
                        accent: "border-purple-500",
                      },
                    ].map((f) => (
                      <div
                        key={f.title}
                        className={`glass-panel p-5 rounded-xl border ${f.border} text-center hover:border-opacity-80 transition`}
                      >
                        <div
                          className={`w-12 h-14 mx-auto border-2 ${f.accent} rounded mb-4 opacity-80`}
                        />
                        <h4 className="font-tech font-bold text-white mb-2">{f.title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Master Blueprint Timeline */}
                <motion.section
                  id="timeline"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeIn} className="text-center mb-10">
                    <h2 className="font-tech text-2xl md:text-4xl font-black text-white mb-2">
                      The <span className="text-[#39ff14]">EPR Nexuss</span> Master Blueprint
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      How we help entrepreneurs start or restart a highly profitable Lithium-Ion
                      manufacturing plant without wasting a single rupee.
                    </p>
                  </motion.div>

                  <div className="space-y-5">
                    {[
                      {
                        phase: "PHASE 01",
                        color: "#00e5ff",
                        title: "Market-to-Chemistry Mapping",
                        body: "We analyze your target demographic (e.g., Indian 2W market vs Solar ESS). We map the exact chemistry (NMC vs LFP) to ensure your product aligns perfectly with local demand, pricing, and subsidy policies.",
                      },
                      {
                        phase: "PHASE 02",
                        color: "#39ff14",
                        title: "Tech Specs & Dry Room Engineering",
                        body: "Competitors waste millions on wrong HVAC units. We design ultra-precise Dry Rooms with guaranteed -40°C Dew Point. We draft custom technical specs for machinery to avoid buying incompatible generic lines.",
                      },
                      {
                        phase: "PHASE 03",
                        color: "#00e5ff",
                        title: "Smart BMS & Pack Design",
                        body: "We integrate advanced Battery Management Systems (BMS) with active balancing and thermal runaway protocols. Ensures maximum safety certifications (AIS 156) for your battery packs.",
                      },
                      {
                        phase: "PHASE 04",
                        color: "#39ff14",
                        title: "CPCB Compliance & EPR Reg.",
                        body: "Navigating the Battery Waste Management (BWM) Rules 2022 is complex. We handle your complete CPCB registrations, CTE/CTO clearances, and set up Extended Producer Responsibility frameworks to turn recycling into revenue.",
                      },
                      {
                        phase: "PHASE 05",
                        color: "#00e5ff",
                        title: "Commissioning & Training",
                        body: "EPR Nexuss engineers remain on-site to calibrate welders, run initial factory acceptance tests (FAT), and train your local workforce on sub-micron precision assembly techniques.",
                      },
                    ].map((step, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn}
                        className="glass-card rounded-2xl p-6 border-l-4"
                        style={{ borderLeftColor: step.color }}
                      >
                        <span
                          className="font-tech font-black text-sm tracking-wider block mb-1"
                          style={{ color: step.color }}
                        >
                          {step.phase}
                        </span>
                        <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{step.body}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Stop Wasting Capital */}
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeIn}
                >
                  <h2 className="font-tech text-2xl md:text-3xl font-black text-white mb-2 text-center">
                    Stop Wasting Capital
                  </h2>
                  <p className="text-gray-400 text-center mb-8">
                    The stark reality of launching a battery plant.
                  </p>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="rounded-2xl p-6 bg-gradient-to-br from-red-900/20 to-[#030712] border border-red-500/30">
                      <h3 className="text-xl font-bold text-red-400 mb-5 flex items-center gap-2">
                        <span>✗</span> Where Others Fail
                      </h3>
                      <ul className="space-y-4 text-sm text-gray-300">
                        <li className="flex gap-2">
                          <span className="text-red-500">✗</span>
                          Buying generic &quot;off-the-shelf&quot; Chinese machines that aren&apos;t
                          calibrated for specific LFP/NMC tolerances.
                        </li>
                        <li className="flex gap-2">
                          <span className="text-red-500">✗</span>
                          Choosing high-energy NMC cells for rugged industrial applications,
                          leading to thermal runaway returns.
                        </li>
                        <li className="flex gap-2">
                          <span className="text-red-500">✗</span>
                          Ignoring BWM Rules, resulting in plant shutdowns by the CPCB within 6
                          months of operating.
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-2xl p-6 bg-gradient-to-br from-[#39ff14]/10 to-[#030712] border border-[#39ff14]/30">
                      <h3 className="text-xl font-bold text-[#39ff14] mb-5 flex items-center gap-2">
                        <span>✓</span> The EPR Nexuss Strategy
                      </h3>
                      <ul className="space-y-4 text-sm text-gray-300">
                        <li className="flex gap-2">
                          <span className="text-[#39ff14]">✓</span>
                          Custom-drafting technical specs for every machine (welders, sorters,
                          aging racks) before you issue a PO.
                        </li>
                        <li className="flex gap-2">
                          <span className="text-[#39ff14]">✓</span>
                          Exact chemistry mapping and BMS programming tailored to your
                          end-client&apos;s thermal demands.
                        </li>
                        <li className="flex gap-2">
                          <span className="text-[#39ff14]">✓</span>
                          Turnkey environmental compliance. We get your CTE/CTO and EPR portal
                          registrations cleared smoothly.
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* FAQ */}
                <motion.section
                  id="faq"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                  className="glass-card rounded-3xl p-6 md:p-10"
                >
                  <motion.h2
                    variants={fadeIn}
                    className="font-tech text-2xl md:text-3xl font-black text-white mb-8 text-center"
                  >
                    Strategic <span className="text-[#00e5ff]">Insights</span> (FAQs)
                  </motion.h2>

                  <div className="space-y-3">
                    {[
                      {
                        id: "faq1",
                        q: "Which battery type is best for a startup manufacturing plant in India?",
                        a: (
                          <>
                            For Indian startups, <strong>LFP (Lithium Iron Phosphate)</strong> in a
                            Prismatic or Cylindrical format is highly recommended. It offers
                            incredible thermal stability for Indian summers, is cobalt-free
                            (cheaper supply chain), and serves massive markets like 3W EVs,
                            telecom towers, and Solar ESS perfectly.
                          </>
                        ),
                      },
                      {
                        id: "faq2",
                        q: "How does EPR Nexuss help restart a failed battery plant?",
                        a: (
                          <>
                            Failed plants usually suffer from mismatched machinery, expired
                            compliance, or severe product returns due to bad BMS logic. EPR Nexuss
                            conducts a total technical audit. We recalibrate existing machinery,
                            rewrite BMS firmware to meet AIS 156 standards, fix Dry Room HVAC
                            logic, and clear all pending CPCB regulatory hurdles.
                          </>
                        ),
                      },
                      {
                        id: "faq3",
                        q: "What are the crucial technical specs I need to know before buying machinery?",
                        a: (
                          <>
                            You must know the exact welding frequencies (ultrasonic vs laser)
                            required for your tab thicknesses, the Internal Resistance (IR) sorting
                            resolution down to the milliohm, and the exact HVAC tonnage required
                            to hit a -40°C Dew Point. EPR Nexuss drafts all these specs for you.
                          </>
                        ),
                      },
                      {
                        id: "faq4",
                        q: "How do EPR regulations impact my manufacturing business?",
                        a: (
                          <>
                            Under BWM Rules, if you produce batteries, you are legally responsible
                            for their end-of-life recycling. Failing to meet EPR targets results in
                            hefty fines and license cancellation. With EPR Nexuss, you can monetize
                            EPR credits by partnering with certified recyclers, creating a
                            secondary revenue stream.
                          </>
                        ),
                      },
                    ].map((item) => (
                      <motion.div
                        key={item.id}
                        variants={fadeIn}
                        className="glass-panel border border-white/10 rounded-xl overflow-hidden"
                      >
                        <button
                          type="button"
                          className="w-full px-5 py-4 text-left flex justify-between items-center gap-4"
                          onClick={() => toggleFaq(item.id)}
                        >
                          <span className="font-semibold text-white font-tech text-sm md:text-base">
                            {item.q}
                          </span>
                          <svg
                            className={`w-5 h-5 text-[#00e5ff] shrink-0 transition-transform ${
                              openFaq === item.id ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {openFaq === item.id && (
                          <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3">
                            {item.a}
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
                  className="rounded-3xl p-8 md:p-12 text-center bg-gradient-to-br from-[#0a1f1a] to-[#0a1628] border border-[#39ff14]/30"
                >
                  <h2 className="font-tech text-2xl md:text-4xl font-black text-white mb-4">
                    Ready to Engineer Your Success?
                  </h2>
                  <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    Stop guessing with chemistry and compliance. Let EPR Nexuss build the master
                    blueprint for your battery manufacturing plant.
                  </p>
                  <a
                    href="mailto:info@eprnexuss.com"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#39ff14] text-[#030712] font-tech font-black text-lg hover:scale-105 transition-transform shadow-[0_0_25px_rgba(57,255,20,0.35)]"
                  >
                    Consult with an Expert Today
                  </a>
                </motion.div>
              </div>
            </div>

            {/* STICKY SIDEBAR */}
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

export default DecodingLithiumIonChemistries;