"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Recycle,
  Factory,
  Building2,
  TrendingUp,
  ShieldCheck,
  Globe,
  BarChart3,
  CheckCircle2,
  DollarSign,
  Scale,
  Zap,
  ChevronDown,
  Lightbulb,
  Activity,
  Layers,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

// --- 1. Hero Component ---
const HeroSection = () => (
  <section className="mb-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="inline-block py-1.5 px-4 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold border border-border shadow-sm">
          Industry Guide
        </span>
        <span className="inline-block py-1.5 px-4 rounded-full bg-brandGreen/10 text-brandGreen text-sm font-bold border border-brandGreen/20 shadow-sm">
          Updated for 2026
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 tracking-tight">
        EPR Metals Credits: <br />
        <span className="text-brandGreen">
          Credit Trading & Marketplace Guide
        </span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-3xl leading-relaxed">
        A practical, step-by-step masterclass covering credit trading, pricing
        models, and marketplace dynamics for EPR metal scrap. Built specifically
        for producers, recyclers, and Producer Responsibility Organizations
        (PROs).
      </p>
    </motion.div>
  </section>
);

// --- 2. Notice/Alert Component ---
const DeepDiveNotice = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl mb-14 shadow-sm relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10">
      <Zap size={64} />
    </div>
    <div className="flex items-start gap-4 relative z-10">
      <div className="bg-primary text-primary-foreground p-2 rounded-full mt-1 shadow-md">
        <ArrowRight size={20} />
      </div>
      <div>
        <h3 className="font-display font-bold text-lg text-foreground mb-1">
          Coming Soon: The Full Deep-Dive
        </h3>
        <p className="text-muted-foreground font-sans leading-relaxed">
          Our specialized team is finalizing a comprehensive, technical
          deep-dive into metals credit trading, featuring advanced arbitrage
          strategies.
          <strong className="text-foreground">
            {" "}
            Need immediate guidance?
          </strong>{" "}
          Fill out the form on this page to speak with our EPR market
          specialists today.
        </p>
      </div>
    </div>
  </motion.div>
);

// --- 3. Introduction with Native Tailwind Horizontal Progress Bars ---
const Introduction = () => {
  const metalData = [
    { label: "Aluminum Extrusions", value: "w-[92%]", pct: "92%" },
    { label: "Industrial Steel", value: "w-[85%]", pct: "85%" },
    { label: "Copper Grade A", value: "w-[78%]", pct: "78%" },
    { label: "Zinc Alloys", value: "w-[64%]", pct: "64%" },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
        The New Standard for Metal Scrap
      </h2>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="prose prose-lg text-muted-foreground font-sans space-y-4">
          <p>
            Extended Producer Responsibility (EPR) has transformed from a
            regulatory framework into a highly active, liquid financial
            ecosystem. For metal scrap—ranging from aluminum extrusions to heavy
            steel alloys—the creation of verifiable credits ensures that
            end-of-life processing is economically viable and environmentally
            sound.
          </p>
          <p>
            Understanding the marketplace is no longer optional. It is essential
            for maintaining compliance, avoiding steep regulatory fines, and
            unlocking new revenue streams across multiple alloy categories.
          </p>
        </div>

        {/* Bulletproof Horizontal Progress Widget */}
        <div className="bg-card p-6 md:p-8 rounded-2xl shadow-xl border border-border">
          <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
            <Activity className="text-brandGreen" size={24} />
            <h3 className="font-display font-bold text-lg text-foreground">
              Avg. Recovery Yield by Metal Type
            </h3>
          </div>
          <div className="space-y-5">
            {metalData.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-foreground">{item.label}</span>
                  <span className="text-brandGreen font-bold">{item.pct}</span>
                </div>
                <div className="w-full bg-secondary h-3 rounded-full">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className={`${item.value} bg-brandGreen h-full rounded-full origin-left`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 4. Stakeholders Component ---
const Stakeholders = () => {
  const roles = [
    {
      title: "Producers (OEMs)",
      icon: <Factory size={28} />,
      desc: "Require certified credits to meet government-mandated recycling targets, avoid penalties, and achieve corporate ESG goals.",
    },
    {
      title: "Recyclers",
      icon: <Recycle size={28} />,
      desc: "Generate verifiable EPR credits by processing metal scrap and supplying them directly to the open market.",
    },
    {
      title: "PROs",
      icon: <Building2 size={28} />,
      desc: "Act as aggregators, portfolio managers, and market makers, facilitating trades on behalf of large producer networks.",
    },
  ];

  return (
    <section className="mb-20">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
        The Ecosystem Participants
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {roles.map((role, idx) => (
          <div
            key={idx}
            className="bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-sm hover:border-brandGreen/50 transition-all group"
          >
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {role.icon}
            </div>
            <h3 className="text-xl font-bold font-display mb-3">
              {role.title}
            </h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              {role.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 5. Pricing Models Component ---
const PricingModels = () => (
  <section className="mb-20 bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
    <div className="flex items-center gap-3 mb-6">
      <DollarSign
        className="text-brandGreen bg-brandGreen/10 p-2 rounded-lg"
        size={40}
      />
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
        Understanding Pricing Models
      </h2>
    </div>
    <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
      Unlike traditional commodities, EPR metal credit pricing is influenced by
      regulatory stringency, metal grade purity, and geographic scarcity.
    </p>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h4 className="font-bold text-lg flex items-center gap-2">
          <Scale size={20} className="text-primary" /> Spot Market Pricing
        </h4>
        <p className="text-muted-foreground">
          Prices fluctuate daily based on immediate supply and demand. Ideal for
          smaller producers looking to fill minor compliance gaps at the end of
          the fiscal year.
        </p>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-lg flex items-center gap-2">
          <ShieldCheck size={20} className="text-primary" /> Forward Contracts
        </h4>
        <p className="text-muted-foreground">
          Long-term agreements locking in credit prices for future years.
          Essential for large OEMs seeking budget predictability amidst rising
          regulatory targets.
        </p>
      </div>
    </div>
  </section>
);

// --- 6. Market Trends with Bulletproof Transform Bar Chart ---
const MarketTrends = () => {
  const chartData = [
    { year: "2023", hClass: "h-[20%]", label: "$30/t" },
    { year: "2024", hClass: "h-[40%]", label: "$55/t" },
    { year: "2025", hClass: "h-[60%]", label: "$85/t" },
    { year: "2026", hClass: "h-[80%]", label: "$120/t" },
    { year: "2027", hClass: "h-[100%]", label: "Proj. $165" },
  ];

  return (
    <section className="mb-20 bg-secondary/20 p-8 md:p-12 rounded-3xl border border-border flex-wrap overflow-x-scroll">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="text-brandGreen" size={32} />
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Credit Value Trajectory
        </h2>
      </div>
      <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
        The value of verified metal EPR credits has surged exponentially. Early
        adopters are securing long-term pricing structures before the projected
        2027 supply squeeze.
      </p>

      {/* Explicit Height Chart Container */}
      <div className="h-64 flex items-end justify-between gap-3 md:gap-6 border-b-2 border-border pb-2 px-2 md:px-6">
        {chartData.map((data, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-full h-full justify-end group"
          >
            <div className="text-xs md:text-sm font-bold text-foreground mb-2 opacity-100 bg-background border border-border px-1.5 py-0.5 rounded shadow-sm">
              {data.label}
            </div>
            {/* Using scaleY and origin-bottom triggers instantaneous, bulletproof layout loading */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className={`${data.hClass} w-full max-w-[70px] bg-gradient-to-t from-brandGreen/70 to-brandGreen rounded-t-lg origin-bottom shadow-md`}
            />
            <span className="mt-4 text-xs md:text-sm font-bold text-muted-foreground">
              {data.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 7. Step-by-Step Trading Guide Component ---
const TradingSteps = () => {
  const steps = [
    {
      step: "01",
      title: "Registration & Auditing",
      desc: "Recycling facilities undergo strict audits to register their processing capabilities and verify historical data.",
    },
    {
      step: "02",
      title: "Credit Minting",
      desc: "For every verified metric ton of specific metal scrap processed, standardized digital EPR credits are minted onto the registry.",
    },
    {
      step: "03",
      title: "Marketplace Listing",
      desc: "Credits are listed on the trading exchange, transparently displaying origin data, metal grade, and processing method.",
    },
    {
      step: "04",
      title: "Transaction & Retirement",
      desc: "Producers purchase required credits. Once applied to compliance targets, credits are permanently 'retired' to prevent double counting.",
    },
  ];

  return (
    <section className="mb-20">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
        How Trading Works
      </h2>
      <div className="space-y-6">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-6 p-8 bg-card border border-border rounded-2xl items-start md:items-center relative overflow-hidden group"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brandGreen/30 group-hover:bg-brandGreen transition-colors" />
            <div className="text-5xl font-display font-black text-primary/10">
              {item.step}
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 8. Platform Features Component ---
const PlatformFeatures = () => (
  <section className="mb-20">
    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
      Key Marketplace Features
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          icon: <BarChart3 className="text-brandGreen" size={24} />,
          title: "Real-Time Order Books",
          desc: "Live pricing reflecting true market supply and demand, completely transparent to all users.",
        },
        {
          icon: <ShieldCheck className="text-brandGreen" size={24} />,
          title: "Immutable Audit Trails",
          desc: "Blockchain-backed records preventing double-counting and ensuring 100% audit readiness.",
        },
        {
          icon: <Globe className="text-brandGreen" size={24} />,
          title: "Global & Regional Aggregation",
          desc: "Filter and access credits across multiple regulatory jurisdictions easily.",
        },
        {
          icon: <CheckCircle2 className="text-brandGreen" size={24} />,
          title: "Automated Compliance Sync",
          desc: "Direct API integration with national and regional government reporting portals.",
        },
      ].map((feat, idx) => (
        <div
          key={idx}
          className="flex gap-5 p-6 rounded-2xl bg-secondary/40 border border-border hover:bg-secondary/60 transition-colors"
        >
          <div className="mt-1 bg-background p-3 rounded-xl shadow-sm h-fit">
            {feat.icon}
          </div>
          <div>
            <h4 className="font-bold text-lg text-foreground font-display mb-1">
              {feat.title}
            </h4>
            <p className="text-muted-foreground leading-relaxed">{feat.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- 9. Case Study with Comparative Graphical Bar Chart ---
const CaseStudy = () => {
  const comparisonData = [
    { period: "Q1 Yield", oldH: "h-[40%]", newH: "h-[55%]" },
    { period: "Q2 Yield", oldH: "h-[45%]", newH: "h-[70%]" },
    { period: "Q3 Yield", oldH: "h-[35%]", newH: "h-[85%]" },
    { period: "Q4 Yield", oldH: "h-[50%]", newH: "h-[100%]" },
  ];

  return (
    <section className="mb-20">
      <div className="bg-card rounded-3xl border border-border overflow-hidden flex flex-col lg:flex-row shadow-sm">
        <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border">
          <div className="flex items-center gap-2 mb-4 text-primary font-bold">
            <Lightbulb size={20} />
            <span>Success Story</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Midwest Steel Recyclers Increase Revenue by 34%
          </h3>
          <p className="text-muted-foreground mb-6 text-lg">
            By onboarding onto the standardized EPR trading platform, Midwest
            Steel bypassed traditional brokers, directly listing 50,000 tons of
            verified metal credits. They secured forward contracts with two
            major automotive OEMs, stabilizing cash flow and increasing total
            margin.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm font-semibold text-foreground">
              <CheckCircle2 size={18} className="text-brandGreen" /> 50,000
              Credits Minted
            </li>
            <li className="flex items-center gap-3 text-sm font-semibold text-foreground">
              <CheckCircle2 size={18} className="text-brandGreen" /> Zero
              Compliance Rejections
            </li>
          </ul>
        </div>

        {/* Comparative Block Chart */}
        <div className="p-8 md:p-12 lg:w-1/2 bg-secondary/10 flex flex-col justify-center">
          <h4 className="font-display font-bold text-base mb-8 text-center text-foreground uppercase tracking-wider">
            Trading Efficiency Revenue Matrix
          </h4>
          <div className="h-44 flex items-end justify-around border-b border-border pb-2">
            {comparisonData.map((data, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center h-full justify-end w-12"
              >
                <div className="flex items-end gap-1.5 h-full w-full justify-center">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className={`${data.oldH} w-3.5 bg-muted rounded-t-sm origin-bottom`}
                  />
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.05 }}
                    className={`${data.newH} w-3.5 bg-brandGreen rounded-t-sm origin-bottom`}
                  />
                </div>
                <span className="text-[10px] font-bold text-muted-foreground mt-3 whitespace-nowrap">
                  {data.period}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <div className="w-2.5 h-2.5 rounded-full bg-muted"></div> Broker
              Rate
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <div className="w-2.5 h-2.5 rounded-full bg-brandGreen"></div>{" "}
              Direct Exchange
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 10. Volume Metric Cards (Replaced Circle Progress for Maximum Load Safety) ---
const MarketDistribution = () => {
  const metrics = [
    {
      title: "Automotive OEMs",
      value: "45%",
      desc: "Dominates macro credit requirements",
    },
    {
      title: "Construction Tech",
      value: "30%",
      desc: "Structural infrastructure demand",
    },
    {
      title: "Consumer Electronics",
      value: "15%",
      desc: "High-value rare alloy offsets",
    },
    {
      title: "Packaging Ecosystems",
      value: "10%",
      desc: "High velocity, light-gauge scrap",
    },
  ];

  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <Layers className="text-brandGreen" size={28} />
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Market Credit Demographics
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m, idx) => (
          <div
            key={idx}
            className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center"
          >
            <div className="text-3xl md:text-4xl font-display font-black text-brandGreen mb-2">
              {m.value}
            </div>
            <div className="font-bold text-sm text-foreground mb-1 font-display">
              {m.title}
            </div>
            <div className="text-xs text-muted-foreground">{m.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 11. Compliance & Regulations Component ---
const Compliance = () => (
  <section className="mb-20 bg-primary text-primary-foreground p-8 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
    <div className="relative z-10">
      <span className="bg-primary-foreground/20 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6 inline-block">
        Regulatory Update
      </span>
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
        Navigating Regulatory Shifts
      </h2>
      <p className="text-primary-foreground/90 max-w-2xl text-lg md:text-xl mb-10 leading-relaxed">
        EPR frameworks are tightening globally. Staying ahead means not just
        buying credits, but ensuring those credits are generated from certified
        facilities utilizing Best Available Technologies (BAT) for trace metal
        recovery.
      </p>
      <button className="bg-background text-foreground px-8 py-4 rounded-xl font-bold hover:bg-brandGreen hover:text-white transition-all duration-300 shadow-lg">
        Download the 2026 Compliance Framework
      </button>
    </div>
    <div className="absolute -right-20 -bottom-40 opacity-10 pointer-events-none">
      <ShieldCheck size={500} />
    </div>
  </section>
);

// --- 12. FAQ Component ---
const FAQ = () => {
  const faqs = [
    {
      q: "What metals are eligible for EPR credits?",
      a: "Currently, aluminum, steel, copper, and certain rare-earth metals used in electronics are highly traded. Purity grades dictate the multiplier applied to the credit.",
    },
    {
      q: "Can I trade credits across state or national borders?",
      a: "It depends on the jurisdiction. While some regions allow inter-state trading, international trades often require equivalent-standard verification via a recognized PRO.",
    },
    {
      q: "How are fraudulent credits prevented?",
      a: "Through rigorous third-party auditing of weighbridge tickets, energy consumption data, and financial records, mapped immutably to a digital registry.",
    },
  ];

  return (
    <section className="mb-20">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const [isOpen, setIsOpen] = useState(false);
          return (
            <div
              key={idx}
              className="border border-border rounded-xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-lg hover:bg-secondary/30 transition-colors"
              >
                {faq.q}
                <ChevronDown
                  className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-muted-foreground font-sans leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// --- 13. Future Outlook Component ---
const FutureOutlook = () => (
  <section className="mb-20 border-t border-border pt-16">
    <div className="flex flex-col md:flex-row gap-10 items-center">
      <div className="md:w-1/3">
        <div className="w-24 h-24 bg-brandGreen/20 rounded-full flex items-center justify-center mb-6">
          <Globe className="text-brandGreen" size={48} />
        </div>
        <h2 className="text-3xl font-display font-bold text-foreground">
          The 2028 Horizon
        </h2>
      </div>
      <div className="md:w-2/3">
        <p className="text-xl text-muted-foreground leading-relaxed">
          As we look towards 2028, the integration of AI-driven sorting at
          recycling plants will drastically increase metal purity, generating
          premium-tier credits. Furthermore, we expect universal taxonomy
          alignment, meaning a ton of steel recycled in Europe could perfectly
          offset production in North America under unified ESG frameworks.
        </p>
      </div>
    </div>
  </section>
);

// --- 14. Conclusion / Bottom CTA Component ---
const Conclusion = () => (
  <section className="mb-12 border-t border-border pt-16 pb-8">
    <div className="bg-secondary/30 rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto border border-border">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
        Ready to Optimize Your EPR Strategy?
      </h2>
      <p className="text-muted-foreground text-lg md:text-xl mb-10">
        The marketplace for metal credits is highly dynamic. Whether you are
        looking to monetize your recycling output or secure compliance credits
        for the upcoming fiscal year, our specialized team is ready to guide
        you.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity w-full sm:w-auto shadow-md">
          Open an Account
        </button>
        <div className="flex items-center gap-2 text-brandGreen font-bold cursor-pointer hover:underline">
          <span>Use the contact form to reach out</span>
          <ArrowRight className="animate-pulse" size={20} />
        </div>
      </div>
    </div>
  </section>
);

// --- MAIN PAGE LAYOUT ---
export default function EprMetalsBlog() {
  return (
    // No overflow settings globally on <main> to prevent breakages of position:sticky
    <main className="min-h-screen bg-background text-foreground pt-32 pb-20 selection:bg-brandGreen selection:text-white">
      <div className="container mx-auto px-4 md:px-8 xl:px-4 max-w-[1400px]">
        {/* Important: Removed items-start from layout grid wrapper so both columns default to equal structural height */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
          {/* Left Column: Main Blog Content */}
          <div className="w-full lg:w-[65%] xl:w-[70%]">
            <Seo
              title="EPR Metals Credits: Credit Trading & Marketplace Guide"
              description="Learn how Metal EPR credit trading works in India. Explore EPR credit marketplaces, pricing, compliance requirements, CPCB guidelines, and strategies to maximize value through Metal EPR credit trading."
              keywords={[
                "EPR Metals Credits",
                "Metal EPR Credit Trading",
                "Metal EPR Marketplace",
                "Metal Credit Marketplace",
                "Metal EPR Certificates",
                "Metal Credit Trading",
                "Extended Producer Responsibility",
                "Metal Recycling",
                "Metal Waste Management",
                "CPCB Metal EPR",
                "Metal EPR Compliance",
                "Metal Credit Exchange",
                "Metal Recycling Certificates",
                "Circular Economy",
                "Environmental Compliance",
                "How does Metal EPR credit trading work?",
                "How to buy and sell Metal EPR credits?",
                "What is a Metal EPR marketplace?",
                "How to trade Metal EPR certificates in India?",
                "Metal EPR credit pricing",
                "Metal EPR trading platform",
                "Benefits of Metal EPR credit trading",
                "Metal credit marketplace India",
                "Metal EPR compliance guide",
                "Metal EPR credit trading 2026",
              ]}
              url="https://eprnexuss.com/blog/epr-metals-trading"
              type="article"
            />
            <HeroSection />
            <DeepDiveNotice />
            <Introduction />
            <Stakeholders />
            <PricingModels />
            <MarketTrends />
            <TradingSteps />
            <PlatformFeatures />
            <CaseStudy />
            <MarketDistribution />
            <Compliance />
            <FAQ />
            <FutureOutlook />
            <Conclusion />
          </div>

          {/* Right Column: Sticky Sidebar with Contact Form */}
          <div className="w-full lg:w-[35%] xl:w-[30%]">
            {/* 
              This inner container sticks and tracks correctly across the column runtime layout length.
              top-32 prevents any collision with your fixed navigation bar layouts.
            */}
            <div className="sticky top-32 z-20 w-full pb-10">
              <div className="bg-card border border-border rounded-3xl shadow-2xl overflow-hidden">
                <StickyContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
