"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Chart from "chart.js/auto";
import {
  Cpu,
  ArrowRight,
  Table,
  Recycle,
  FileCheck2,
  ShieldCheck,
  Globe,
  Database,
  Scale,
  Handshake,
  MonitorSmartphone,
  Factory,
  Briefcase,
  HelpCircle,
  ArrowUpRight,
  Zap,
  CircuitBoard,
  Radio,
  Activity,
  Boxes,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ---------------------------------------------------------------------- */
/*  Animation Variants & Reveal Component                                 */
/* ---------------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------------- */
/* Small local helper: corner-bracket frame — the page's signature motif  */
/* (used sparingly, echoes a diagnostic / oscilloscope readout panel)     */
/* ---------------------------------------------------------------------- */
const CornerFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <span className="pointer-events-none absolute -top-px -left-px w-3.5 h-3.5 border-t-2 border-l-2 border-blue-500 rounded-tl-sm" />
    <span className="pointer-events-none absolute -top-px -right-px w-3.5 h-3.5 border-t-2 border-r-2 border-blue-500 rounded-tr-sm" />
    <span className="pointer-events-none absolute -bottom-px -left-px w-3.5 h-3.5 border-b-2 border-l-2 border-blue-500 rounded-bl-sm" />
    <span className="pointer-events-none absolute -bottom-px -right-px w-3.5 h-3.5 border-b-2 border-r-2 border-blue-500 rounded-br-sm" />
    {children}
  </div>
);

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-emerald-700 font-bold bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full mb-3">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
    {children}
  </span>
);

export default function EprElectronic() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const growthChartRef = useRef<HTMLCanvasElement | null>(null);
  const comparisonChartRef = useRef<HTMLCanvasElement | null>(null);
  const databaseChartRef = useRef<HTMLCanvasElement | null>(null);
  const categoryChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const gridColor = "rgba(148, 163, 184, 0.15)";
    const tickColor = "#475569";

    let growthChart: Chart | null = null;
    let comparisonChart: Chart | null = null;
    let databaseChart: Chart | null = null;
    let categoryChart: Chart | null = null;

    if (growthChartRef.current) {
      growthChart = new Chart(growthChartRef.current, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "EPR Credits Generated (MT)",
              data: [38, 44, 51, 59, 67, 74, 83],
              backgroundColor: "#2563eb",
              borderRadius: 6,
              maxBarThickness: 28,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: gridColor },
              ticks: {
                color: tickColor,
                font: { family: "monospace", size: 10, weight: 600 },
              },
            },
            x: {
              grid: { display: false },
              ticks: {
                color: tickColor,
                font: { family: "monospace", size: 10, weight: 600 },
              },
            },
          },
        },
      });
    }

    if (comparisonChartRef.current) {
      comparisonChart = new Chart(comparisonChartRef.current, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "WEEE Collected (MT)",
              data: [52, 58, 65, 71, 79, 86, 95],
              borderColor: "#059669",
              backgroundColor: "transparent",
              tension: 0.3,
              borderWidth: 2.5,
              pointRadius: 4,
              pointBackgroundColor: "#059669",
            },
            {
              label: "EPR Credits Realized (MT)",
              data: [38, 44, 51, 59, 67, 74, 83],
              borderColor: "#2563eb",
              backgroundColor: "transparent",
              tension: 0.3,
              borderWidth: 2.5,
              pointRadius: 4,
              pointBackgroundColor: "#2563eb",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: tickColor,
                font: { family: "monospace", size: 10, weight: 600 },
                boxWidth: 12,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: gridColor },
              ticks: {
                color: tickColor,
                font: { family: "monospace", size: 10, weight: 600 },
              },
            },
            x: {
              grid: { display: false },
              ticks: {
                color: tickColor,
                font: { family: "monospace", size: 10, weight: 600 },
              },
            },
          },
        },
      });
    }

    if (databaseChartRef.current) {
      databaseChart = new Chart(databaseChartRef.current, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Collected",
              data: [52, 58, 65, 71, 79, 86, 95],
              backgroundColor: "rgba(148, 163, 184, 0.3)",
              borderRadius: 5,
              maxBarThickness: 18,
            },
            {
              label: "Processed & Verified",
              data: [38, 44, 51, 59, 67, 74, 83],
              backgroundColor: "#059669",
              borderRadius: 5,
              maxBarThickness: 18,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: tickColor,
                font: { family: "monospace", size: 10, weight: 600 },
                boxWidth: 12,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: gridColor },
              ticks: {
                color: tickColor,
                font: { family: "monospace", size: 10, weight: 600 },
              },
            },
            x: {
              grid: { display: false },
              ticks: {
                color: tickColor,
                font: { family: "monospace", size: 10, weight: 600 },
              },
            },
          },
        },
      });
    }

    if (categoryChartRef.current) {
      categoryChart = new Chart(categoryChartRef.current, {
        type: "doughnut",
        data: {
          labels: [
            "IT & Telecom",
            "Large Appliances",
            "Small Appliances",
            "Consumer Electronics",
            "Others",
          ],
          datasets: [
            {
              data: [34, 24, 18, 16, 8],
              backgroundColor: [
                "#2563eb",
                "#059669",
                "#0d9488",
                "#d97706",
                "#64748b",
              ],
              borderWidth: 2,
              borderColor: "#ffffff",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: tickColor,
                boxWidth: 12,
                font: { family: "monospace", size: 10, weight: 600 },
              },
            },
          },
          cutout: "64%",
        },
      });
    }

    return () => {
      if (growthChart) growthChart.destroy();
      if (comparisonChart) comparisonChart.destroy();
      if (databaseChart) databaseChart.destroy();
      if (categoryChart) categoryChart.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen md:mt-[49px] bg-[#f8fafc] text-slate-800 antialiased selection:bg-blue-200">
      <Seo
        title="EPR Credits for Electronic Waste | Buy & Sell E-Waste EPR Credits in India"
        description="Buy, sell, and manage EPR Credits for Electronic Waste in India. Meet CPCB compliance targets, simplify e-waste recycling obligations, and achieve sustainable EPR compliance with certified electronic waste credit solutions."
        keywords={[
          "Electronic Waste EPR Credits",
          "E-Waste EPR Credits",
          "EPR Credits for Electronic Waste",
          "Buy E-Waste EPR Credits",
          "Sell E-Waste EPR Credits",
          "Electronic Waste Credit Trading",
          "E-Waste Credit Marketplace",
          "Electronic Waste Recycling",
          "E-Waste Compliance",
          "Extended Producer Responsibility",
          "CPCB E-Waste",
          "Electronic Waste Management",
          "EPR Certificates",
          "Circular Economy",
          "Sustainability Compliance",
          "How to buy E-Waste EPR credits?",
          "How to sell Electronic Waste EPR credits?",
          "What are E-Waste EPR credits?",
          "How does E-Waste EPR credit trading work?",
          "CPCB E-Waste compliance",
          "Electronic Waste EPR registration",
          "Best E-Waste EPR credit provider in India",
          "Electronic Waste credit marketplace",
          "Certified E-Waste recycling credits",
          "E-Waste EPR solutions",
        ]}
        url="https://eprnexuss.com/services/epr-electronic"
        type="article"
      />
      
      {/* Dynamic light-grid background pattern */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.4] -z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="max-w-8xl mx-auto px-1 py-10 sm:px-2 lg:px-2 relative grid grid-cols-1 lg:grid-cols-4 gap-2">
        {/* LEFT CONTENT COLUMN */}
        <div className="lg:col-span-3 space-y-16 py-12">
          
          {/* 1. HERO — split readout panel */}
          <header className="grid grid-cols-1 lg:grid-cols gap-6 items-stretch">
            <Reveal className="lg:col-span-3 h-full" delay={0.1}>
              <div className="h-full rounded-2xl border-2 border-emerald-200 bg-gradient-to-b from-white via-emerald-50/20 to-white p-6 sm:p-10 shadow-md">
                <Eyebrow>CPCB-Aligned WEEE Compliance</Eyebrow>
                <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mb-5 text-slate-900">
                  EPR Credits for
                  <br />
                  <span className="text-blue-600">Electronic Waste</span>
                </h1>
                <p className="text-slate-600 font-medium leading-relaxed max-w-xl mb-8">
                  Every circuit board and appliance shell has a second life. We
                  turn certified e-waste dismantling and recovery into a trackable
                  compliance asset — so producers, importers, and brand owners
                  meet CPCB targets without a year-end scramble.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#overview"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" /> View compliance metrics
                  </a>
                  <a
                    href="#ledger"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-emerald-800 bg-emerald-50 border-2 border-emerald-300 hover:bg-emerald-100 transition-colors"
                  >
                    <Table className="w-4 h-4" /> Open data ledger
                  </a>
                </div>
              </div>
            </Reveal>

            {/* signature readout panel */}
            <Reveal className="lg:col-span-2 h-full" delay={0.2}>
              <CornerFrame className="h-full rounded-2xl border-2 border-blue-200 bg-white p-6 flex flex-col justify-between shadow-md">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] tracking-widest uppercase text-slate-500 font-bold">
                      Live Readout
                    </span>
                    <Activity className="w-4 h-4 text-emerald-600 animate-pulse" />
                  </div>
                  <div className="space-y-5">
                    {[
                      {
                        label: "WEEE collected YTD",
                        value: "506 MT",
                        tone: "text-emerald-700 bg-emerald-50 border border-emerald-200",
                      },
                      {
                        label: "Credits realized YTD",
                        value: "416 MT",
                        tone: "text-blue-700 bg-blue-50 border border-blue-200",
                      },
                      {
                        label: "Target achievement",
                        value: "82%",
                        tone: "text-slate-800 bg-slate-100 border border-slate-200",
                      },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between border-b border-slate-100 pb-3"
                      >
                        <span className="text-xs text-slate-600 font-mono font-bold">
                          {row.label}
                        </span>
                        <span
                          className={`font-mono text-xl font-black px-3 py-1 rounded-lg ${row.tone}`}
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-[11px] text-blue-600 font-mono font-bold bg-blue-50/50 p-2 rounded border border-blue-100">
                  &gt; auto-synced with CPCB EPR portal filings
                </p>
              </CornerFrame>
            </Reveal>
          </header>

          {/* 2. OVERVIEW */}
          <section id="overview" className="scroll-mt-24">
            <Reveal delay={0.1}>
              <Eyebrow>Why It Matters</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 max-w-2xl">
                Understanding EPR Obligations for Electronics
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <Reveal className="lg:col-span-2 h-full" delay={0.2}>
                <div className="h-full space-y-4 bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm flex flex-col justify-between">
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    India's E-Waste (Management) Rules require every producer of
                    electrical and electronic equipment to register with CPCB, hit
                    yearly collection targets, and route recovered material
                    through authorized dismantlers and recyclers. EPR Credits are
                    the verifiable proof that this obligation was met.
                  </p>
                  <div className="space-y-2 pt-2">
                    {[
                      "WEEE collection target tracking",
                      "CPCB portal filing & matching",
                      "Producer / importer registration",
                      "Credit certificate reconciliation",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 bg-slate-50 p-1.5 rounded border border-slate-100"
                      >
                        <span className="text-emerald-600 font-black">▸</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              
              <Reveal className="lg:col-span-3 h-full" delay={0.3}>
                <div className="rounded-2xl border-2 border-blue-200 bg-white p-5 h-72 shadow-md">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg w-fit">
                    <Radio className="w-3.5 h-3.5 text-blue-600" /> Monthly
                    Credit Generation
                  </div>
                  <div className="w-full h-52">
                    <canvas ref={growthChartRef}></canvas>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* 3. PROCESS — horizontal trace/timeline (genuinely sequential) */}
          <section id="process" className="scroll-mt-24">
            <Reveal delay={0.1}>
              <Eyebrow>The Recovery Circuit</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 max-w-2xl">
                Certified E-Waste Recovery Lifecycle
              </h2>
            </Reveal>

            <div className="relative">
              <div className="hidden md:block absolute top-5 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300 via-blue-300 to-teal-300 rounded" />
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
                {[
                  {
                    title: "Collection",
                    desc: "Discarded devices logged at collection centers.",
                    border: "border-emerald-300 bg-emerald-50/40 text-emerald-900",
                  },
                  {
                    title: "Segregation",
                    desc: "Sorted by category — IT, appliances, electronics.",
                    border: "border-blue-300 bg-blue-50/40 text-blue-900",
                  },
                  {
                    title: "Dismantling",
                    desc: "Safe manual dismantling at registered facilities.",
                    border: "border-teal-300 bg-teal-50/40 text-teal-900",
                  },
                  {
                    title: "Material Recovery",
                    desc: "Metals, plastics & boards separated for processing.",
                    border: "border-amber-300 bg-amber-50/40 text-amber-900",
                  },
                  {
                    title: "Credit Issuance",
                    desc: "Verified tonnage converted into tradeable credits.",
                    border: "border-indigo-300 bg-indigo-50/40 text-indigo-900",
                  },
                ].map((step, i) => (
                  <Reveal delay={0.1 * (i + 1)} key={step.title}>
                    <div className="relative pt-0 md:pt-10">
                      <div className="hidden md:block absolute top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white shadow" />
                      <div className={`rounded-xl border-2 p-4 shadow-xs transition-transform hover:-translate-y-1 ${step.border}`}>
                        <span className="font-mono text-[10px] font-bold block mb-1 opacity-75">
                          STEP {i + 1}
                        </span>
                        <h4 className="font-extrabold text-sm mt-1 mb-1.5">
                          {step.title}
                        </h4>
                        <p className="text-xs font-medium leading-relaxed opacity-90">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-8">
              <Reveal className="lg:col-span-3 h-full" delay={0.2}>
                <div className="rounded-2xl border-2 border-emerald-200 bg-white p-5 h-72 shadow-md">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg w-fit">
                    <Activity className="w-3.5 h-3.5 text-emerald-600" />{" "}
                    Collected vs Credited Volumes
                  </div>
                  <div className="w-full h-52">
                    <canvas ref={comparisonChartRef}></canvas>
                  </div>
                </div>
              </Reveal>

              <Reveal className="lg:col-span-2 h-full" delay={0.3}>
                <div className="h-full rounded-2xl border-2 border-purple-200 bg-gradient-to-b from-white to-purple-50/30 p-6 shadow-sm flex flex-col justify-center border-l-8 border-l-purple-500">
                  <h3 className="font-extrabold text-slate-900 mb-2 text-lg">
                    Audit transparency, built-in
                  </h3>
                  <p className="text-slate-600 text-xs font-medium leading-relaxed">
                    Automated matching gives compliance teams instant access to
                    dismantler certificates and CPCB filing status — avoiding
                    last-minute delays and strengthening credibility with
                    regulators and retail partners.
                  </p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* 4. CATEGORY BREAKDOWN */}
          <section id="categories" className="scroll-mt-24">
            <Reveal delay={0.1}>
              <Eyebrow>Source Mix</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 max-w-2xl">
                Where Electronic Waste Actually Comes From
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
              <Reveal className="lg:col-span-2 h-full" delay={0.2}>
                <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 h-80 shadow-md">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg w-fit">
                    <CircuitBoard className="w-3.5 h-3.5 text-blue-600" /> WEEE
                    Category Share
                  </div>
                  <div className="w-full h-60">
                    <canvas ref={categoryChartRef}></canvas>
                  </div>
                </div>
              </Reveal>

              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: MonitorSmartphone,
                    title: "IT & Telecom",
                    desc: "Laptops, servers, routers and handsets — the largest, fastest-growing share.",
                    border: "border-blue-200 bg-blue-50/50 text-blue-900",
                    iconColor: "text-blue-600 bg-blue-100",
                  },
                  {
                    icon: Zap,
                    title: "Large Appliances",
                    desc: "Fridges, washing machines and ACs — high-tonnage, metal-rich streams.",
                    border: "border-emerald-200 bg-emerald-50/50 text-emerald-900",
                    iconColor: "text-emerald-600 bg-emerald-100",
                  },
                  {
                    icon: Cpu,
                    title: "Small Appliances",
                    desc: "Mixers and kitchen electronics adding steady distributed volume.",
                    border: "border-teal-200 bg-teal-50/50 text-teal-900",
                    iconColor: "text-teal-600 bg-teal-100",
                  },
                  {
                    icon: Boxes,
                    title: "Consumer Electronics",
                    desc: "TVs and audio equipment collected year-round via retail take-back.",
                    border: "border-amber-200 bg-amber-50/50 text-amber-900",
                    iconColor: "text-amber-600 bg-amber-100",
                  },
                ].map((item, idx) => (
                  <Reveal delay={0.1 * (idx + 1)} key={item.title}>
                    <div className={`flex gap-3 p-4 rounded-xl border-2 shadow-xs h-full ${item.border}`}>
                      <div className={`p-2 rounded-lg shrink-0 h-9 w-9 flex items-center justify-center ${item.iconColor}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[11px] font-semibold leading-relaxed opacity-90">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* 5. BENEFITS — datasheet-style rows, not cards */}
          <section id="benefits" className="scroll-mt-24">
            <Reveal delay={0.1}>
              <Eyebrow>Spec Sheet</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 max-w-2xl">
                What Clean Processing Actually Buys You
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-2xl border-2 border-slate-200 bg-white divide-y divide-slate-200 overflow-hidden shadow-md">
                {[
                  {
                    icon: Scale,
                    title: "Audit safety",
                    desc: "Dismantling and recycling ledgers pre-vetted against CPCB and state pollution board queries.",
                    bg: "hover:bg-blue-50/30",
                    iconColor: "text-blue-600 bg-blue-50",
                  },
                  {
                    icon: Handshake,
                    title: "Corporate alignment",
                    desc: "Verification evidence provided directly to board rooms and ESG audit panels.",
                    bg: "hover:bg-emerald-50/30",
                    iconColor: "text-emerald-600 bg-emerald-50",
                  },
                  {
                    icon: Globe,
                    title: "Circular supply",
                    desc: "Recovered metals and plastics reintroduced cleanly into manufacturing streams.",
                    bg: "hover:bg-teal-50/30",
                    iconColor: "text-teal-600 bg-teal-50",
                  },
                ].map((row) => (
                  <div
                    key={row.title}
                    className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5 transition-colors ${row.bg}`}
                  >
                    <div className="flex items-center gap-3 sm:w-56 shrink-0">
                      <div className={`p-2 rounded-lg ${row.iconColor}`}>
                        <row.icon className="w-5 h-5" />
                      </div>
                      <span className="font-extrabold text-sm text-slate-900">
                        {row.title}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                      {row.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* 6. LEDGER / DATABASE — terminal style table */}
          <section id="ledger" className="scroll-mt-24">
            <Reveal delay={0.1}>
              <Eyebrow>Data Ledger</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 max-w-2xl">
                WEEE(Waste Electrical and Electronic Equipment) Tonnage Ledger
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-2xl border-2 border-blue-200 bg-white overflow-hidden shadow-lg mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse font-mono text-xs">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-50 to-emerald-50 text-slate-700 uppercase tracking-wider border-b-2 border-slate-200">
                        <th className="p-4 font-bold">Window</th>
                        <th className="p-4 font-bold">Ingest (MT)</th>
                        <th className="p-4 font-bold">Yield (MT)</th>
                        <th className="p-4 font-bold">Credits</th>
                        <th className="p-4 font-bold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {[
                        { m: "January", c: 52, r: 38, g: 35, s: "VERIFIED" },
                        { m: "February", c: 58, r: 44, g: 41, s: "VERIFIED" },
                        { m: "March", c: 65, r: 51, g: 47, s: "ACTIVE" },
                        { m: "April", c: 71, r: 59, g: 55, s: "ACTIVE" },
                        { m: "May", c: 79, r: 67, g: 63, s: "PENDING" },
                        { m: "June", c: 86, r: 74, g: 70, s: "PENDING" },
                        { m: "July", c: 95, r: 83, g: 79, s: "PENDING" },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className="hover:bg-blue-50/40 transition-colors"
                        >
                          <td className="p-4 md:text-[12px] text-[8px] font-bold text-slate-900 capitalize">
                            {row.m}
                          </td>
                          <td className="p-4 text-blue-700 font-bold">{row.c}</td>
                          <td className="p-4 text-emerald-700 font-bold">{row.r}</td>
                          <td className="p-4 text-purple-700 font-bold">{row.g}</td>
                          <td className="p-4">
                            <span
                              className={`px-2 py-1 rounded text-[5px]  md:text-[11px] font-black tracking-wider ${
                                row.s === "PENDING"
                                  ? "bg-amber-100 text-amber-800 border border-amber-300"
                                  : row.s === "ACTIVE"
                                  ? "bg-blue-100 text-blue-800 border border-blue-300"
                                  : "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              }`}
                            >
                              {row.s}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <Reveal className="lg:col-span-2 h-full" delay={0.2}>
                <div className="h-full rounded-2xl border-2 border-emerald-200 bg-white p-6 shadow-sm flex flex-col justify-center border-l-8 border-l-emerald-500">
                  <h3 className="font-extrabold text-slate-900 mb-2 text-lg">
                    Consolidation advantages
                  </h3>
                  <p className="text-slate-600 text-xs font-medium leading-relaxed">
                    Consolidating collection records removes manual tracking risk
                    and builds a reliable verification baseline — compliance teams
                    answer regulatory queries in minutes, not weeks.
                  </p>
                </div>
              </Reveal>

              <Reveal className="lg:col-span-3 h-full" delay={0.3}>
                <div className="rounded-2xl border-2 border-blue-200 bg-white p-5 h-72 shadow-md">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg w-fit">
                    <Database className="w-3.5 h-3.5 text-blue-600" />{" "}
                    Historical Trend
                  </div>
                  <div className="w-full h-52">
                    <canvas ref={databaseChartRef}></canvas>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* 7. SECTOR DEPLOYMENTS */}
          <section id="sectors" className="scroll-mt-24">
            <Reveal delay={0.1}>
              <Eyebrow>Who This Serves</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 max-w-2xl">
                Enterprise Infrastructure Deployments
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: Factory,
                  title: "Electronics Manufacturers",
                  desc: "Compliance mapping for IT hardware, appliance and consumer electronics lines.",
                  border: "border-blue-200 hover:border-blue-400 bg-blue-50/20 text-blue-900",
                },
                {
                  icon: Briefcase,
                  title: "Importers & Retailers",
                  desc: "Bulk validation for imported device batches and take-back program logging.",
                  border: "border-emerald-200 hover:border-emerald-400 bg-emerald-50/20 text-emerald-900",
                },
                {
                  icon: CircuitBoard,
                  title: "Authorized Dismantlers",
                  desc: "Processing data workflows connecting recovery output to central registries.",
                  border: "border-purple-200 hover:border-purple-400 bg-purple-50/20 text-purple-900",
                },
              ].map((item, idx) => (
                <Reveal delay={0.1 * (idx + 1)} key={item.title}>
                  <div className={`p-5 rounded-xl border-2 shadow-xs transition-all duration-200 h-full ${item.border}`}>
                    <div className="p-2.5 bg-white border border-inherit rounded-xl w-fit mb-3 shadow-xs">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-extrabold text-base text-slate-900 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium opacity-90 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* 8. CASE STUDY — signature frame reused here */}
          <section id="case-study" className="scroll-mt-24">
            <Reveal delay={0.1}>
              <Eyebrow>Field Report</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 max-w-2xl">
                National Retail Take-Back Consolidation
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <CornerFrame className="rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-white via-emerald-50/10 to-white p-6 sm:p-10 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
                  <div>
                    <h3 className="font-display text-xl font-extrabold text-slate-950 mb-3 border-b-2 border-emerald-400 pb-2 w-fit">
                      Unifying data across 40+ retail collection points
                    </h3>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed mb-4">
                      A consumer electronics brand ran independent e-waste
                      collection logs across 40+ retail outlets and three regional
                      warehouses. Mismatched entries between store-level pickup
                      receipts and dismantler certificates were slowing the annual
                      CPCB return filing and creating duplicate reporting risk.
                    </p>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      Routing every collection point through a single verification
                      ledger — and matching each pickup to an authorized
                      dismantler certificate in real time — let the compliance
                      team close its annual return well ahead of deadline for the
                      first time in three years.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border-2 border-blue-200 bg-blue-50/50 text-xs space-y-2.5 text-blue-900 font-mono font-bold shadow-inner">
                    <h4 className="font-extrabold text-slate-900 mb-1 font-sans text-sm">
                      Measurable upgrades:
                    </h4>
                    <p className="flex items-center gap-2"><span className="text-blue-600">▸</span> Filing prep time cut by more than half</p>
                    <p className="flex items-center gap-2"><span className="text-blue-600">▸</span> Duplicate entries eliminated across all outlets</p>
                    <p className="flex items-center gap-2"><span className="text-blue-600">▸</span> Single dashboard view for regional managers</p>
                    <p className="flex items-center gap-2"><span className="text-blue-600">▸</span> Credit shortfall flagged & closed two quarters early</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { val: "58%", lbl: "Faster Filing", color: "border-blue-200 text-blue-700 bg-blue-50/30" },
                    { val: "40+", lbl: "Outlets Unified", color: "border-emerald-200 text-emerald-700 bg-emerald-50/30" },
                    { val: "2 Qtrs", lbl: "Target Achieved Early", color: "border-purple-200 text-purple-700 bg-purple-50/30" },
                    { val: "0", lbl: "Duplicate Entries", color: "border-teal-200 text-teal-700 bg-teal-50/30" },
                  ].map((stat) => (
                    <div
                      key={stat.lbl}
                      className={`border-2 rounded-xl p-4 text-center shadow-xs ${stat.color}`}
                    >
                      <strong className="block font-mono text-2xl font-black mb-0.5">
                        {stat.val}
                      </strong>
                      <span className="text-[10px] font-bold uppercase tracking-wider block opacity-80">
                        {stat.lbl}
                      </span>
                    </div>
                  ))}
                </div>
              </CornerFrame>
            </Reveal>
          </section>

          {/* 9. FAQ */}
          <section id="faq" className="scroll-mt-24">
            <Reveal delay={0.1}>
              <Eyebrow>Q &amp; A</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 max-w-2xl">
                Frequently Asked Questions
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-3">
                {[
                  {
                    q: "What products fall under EPR obligations for electronics?",
                    a: "Any electrical or electronic equipment listed under the E-Waste Rules Schedule I — including IT equipment, appliances, telecom devices and consumer electronics — falls under producer EPR obligations.",
                  },
                  {
                    q: "How are annual WEEE collection targets calculated?",
                    a: "Targets are typically calculated as a percentage of the quantity of electrical and electronic equipment placed on the market, based on average product life and the phased target schedule set by CPCB.",
                  },
                  {
                    q: "What does the EPR credit transfer process involve?",
                    a: "It involves matching verified collection and recycling certificates on the CPCB EPR portal, transferring credit balances safely between producers, PROs and recyclers.",
                  },
                  {
                    q: "Why is early target matching important for producers?",
                    a: "Early matching protects your brand from late-filing penalties, keeps import and manufacturing approvals active, and avoids a year-end scramble to close the compliance gap.",
                  },
                  {
                    q: "What defines a valid e-waste recycling certificate?",
                    a: "A verified digital document confirming that a specific quantity of electronic waste has been dismantled and processed by a CPCB-authorized recycling facility.",
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border-2 border-slate-200 bg-white overflow-hidden shadow-xs transition-colors hover:border-blue-300"
                  >
                    <button
                      onClick={() =>
                        setOpenFaqIndex(openFaqIndex === idx ? null : idx)
                      }
                      className="w-full flex justify-between items-center text-left p-5 text-sm font-bold text-slate-900 bg-slate-50/50 hover:bg-blue-50/30 transition-colors focus:outline-none"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          Q{String(idx + 1).padStart(2, "0")}
                        </span>
                        {faq.q}
                      </span>
                      <HelpCircle
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                          openFaqIndex === idx ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        openFaqIndex === idx
                          ? "max-h-[300px] border-t-2 border-slate-100"
                          : "max-h-0"
                      }`}
                    >
                      <p className="text-xs font-medium text-slate-600 leading-relaxed p-5 pt-4 pl-14 bg-white">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* 10. BOTTOM CTA */}
          <section>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-8 sm:p-12 text-center shadow-lg border-t-8 border-t-blue-600">
                <Eyebrow>Ready When You Are</Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 mb-3">
                  Close Your Electronics EPR Gap Before the Deadline
                </h2>
                <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-6 text-sm">
                  Automating your WEEE collection and credit validation simplifies
                  tracking, keeps logs audit-ready, and ensures clear reporting at
                  every step.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="#overview"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" /> Review metrics again
                  </a>
                  <a
                    href="#ledger"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-emerald-800 bg-emerald-50 border-2 border-emerald-300 hover:bg-emerald-100 transition-colors"
                  >
                    <Table className="w-4 h-4" /> Open logs
                  </a>
                </div>
              </div>
            </Reveal>
          </section>
        </div>

        {/* STICKY SIDEBAR */}
        <aside className="lg:col-span-1 py-12">
          <div className="lg:sticky lg:top-28 space-y-6">
            <StickyContactForm />
          </div>
        </aside>
      </div>
    </div>
  );
}