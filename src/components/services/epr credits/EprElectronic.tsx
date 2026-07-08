"use client";

import React, { useState, useEffect, useRef } from "react";
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
/* Small local helper: corner-bracket frame — the page's signature motif  */
/* (used sparingly, echoes a diagnostic / oscilloscope readout panel)     */
/* ---------------------------------------------------------------------- */
const CornerFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <span className="pointer-events-none absolute -top-px -left-px w-3.5 h-3.5 border-t-2 border-l-2 border-amber-400/70 rounded-tl-sm" />
    <span className="pointer-events-none absolute -top-px -right-px w-3.5 h-3.5 border-t-2 border-r-2 border-amber-400/70 rounded-tr-sm" />
    <span className="pointer-events-none absolute -bottom-px -left-px w-3.5 h-3.5 border-b-2 border-l-2 border-amber-400/70 rounded-bl-sm" />
    <span className="pointer-events-none absolute -bottom-px -right-px w-3.5 h-3.5 border-b-2 border-r-2 border-amber-400/70 rounded-br-sm" />
    {children}
  </div>
);

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-emerald-400/90 mb-3">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
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
    const gridColor = "rgba(148, 163, 184, 0.12)";
    const tickColor = "#8291ab";

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
              backgroundColor: "#f2b134",
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
                font: { family: "monospace", size: 10 },
              },
            },
            x: {
              grid: { display: false },
              ticks: {
                color: tickColor,
                font: { family: "monospace", size: 10 },
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
              borderColor: "#34d399",
              backgroundColor: "transparent",
              tension: 0.3,
              borderWidth: 2.5,
              pointRadius: 3,
              pointBackgroundColor: "#34d399",
            },
            {
              label: "EPR Credits Realized (MT)",
              data: [38, 44, 51, 59, 67, 74, 83],
              borderColor: "#f2b134",
              backgroundColor: "transparent",
              tension: 0.3,
              borderWidth: 2.5,
              pointRadius: 3,
              pointBackgroundColor: "#f2b134",
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
                font: { family: "monospace", size: 10 },
                boxWidth: 10,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: gridColor },
              ticks: {
                color: tickColor,
                font: { family: "monospace", size: 10 },
              },
            },
            x: {
              grid: { display: false },
              ticks: {
                color: tickColor,
                font: { family: "monospace", size: 10 },
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
              backgroundColor: "rgba(148,163,184,0.25)",
              borderRadius: 5,
              maxBarThickness: 18,
            },
            {
              label: "Processed & Verified",
              data: [38, 44, 51, 59, 67, 74, 83],
              backgroundColor: "#34d399",
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
                font: { family: "monospace", size: 10 },
                boxWidth: 10,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: gridColor },
              ticks: {
                color: tickColor,
                font: { family: "monospace", size: 10 },
              },
            },
            x: {
              grid: { display: false },
              ticks: {
                color: tickColor,
                font: { family: "monospace", size: 10 },
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
                "#f2b134",
                "#34d399",
                "#5eead4",
                "#fbbf24",
                "#475569",
              ],
              borderWidth: 2,
              borderColor: "#0a0e1a",
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
                boxWidth: 10,
                font: { family: "monospace", size: 10 },
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
    <div className="min-h-screen mt-[49px] bg-[#0a0e1a] text-slate-200 antialiased selection:bg-amber-400/30">
      {/* faint circuit-trace backdrop, fixed behind everything */}
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
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.05] -z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(52,211,153,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.6) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* LEFT CONTENT COLUMN */}
        <div className="lg:col-span-3 space-y-16 py-12">
          {/* 1. HERO — split readout panel */}
          <header className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
            <div className="lg:col-span-3 rounded-2xl border border-slate-800 bg-gradient-to-b from-[#0f1524] to-[#0a0e1a] p-6 sm:p-10">
              <Eyebrow>CPCB-Aligned WEEE Compliance</Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05] mb-5 text-white">
                EPR Credits for
                <br />
                Electronic Waste
              </h1>
              <p className="text-slate-400 leading-relaxed max-w-xl mb-8">
                Every circuit board and appliance shell has a second life. We
                turn certified e-waste dismantling and recovery into a trackable
                compliance asset — so producers, importers, and brand owners
                meet CPCB targets without a year-end scramble.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-[#0a0e1a] bg-amber-400 hover:bg-amber-300 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" /> View compliance metrics
                </a>
                <a
                  href="#ledger"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-slate-200 border border-slate-700 hover:border-slate-500 transition-colors"
                >
                  <Table className="w-4 h-4" /> Open data ledger
                </a>
              </div>
            </div>

            {/* signature readout panel */}
            <CornerFrame className="lg:col-span-2 rounded-2xl border border-slate-800 bg-[#0d1220] p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] tracking-widest uppercase text-slate-500">
                  Live Readout
                </span>
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="space-y-5">
                {[
                  {
                    label: "WEEE collected YTD",
                    value: "506 MT",
                    tone: "text-emerald-400",
                  },
                  {
                    label: "Credits realized YTD",
                    value: "416 MT",
                    tone: "text-amber-400",
                  },
                  {
                    label: "Target achievement",
                    value: "82%",
                    tone: "text-slate-100",
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between border-b border-slate-800 pb-3"
                  >
                    <span className="text-xs text-slate-500 font-mono">
                      {row.label}
                    </span>
                    <span
                      className={`font-mono text-2xl font-bold ${row.tone}`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[11px] text-slate-600 font-mono leading-relaxed">
                &gt; auto-synced with CPCB EPR portal filings
              </p>
            </CornerFrame>
          </header>

          {/* 2. OVERVIEW */}
          <section id="overview" className="scroll-mt-24">
            <Eyebrow>Why It Matters</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8 max-w-2xl">
              Understanding EPR Obligations for Electronics
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed">
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
                      className="flex items-center gap-2 text-xs font-mono text-slate-400"
                    >
                      <span className="text-emerald-400">▸</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-3 rounded-2xl border border-slate-800 bg-[#0d1220] p-5 h-72">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-slate-500">
                  <Radio className="w-3.5 h-3.5 text-amber-400" /> Monthly
                  Credit Generation
                </div>
                <div className="w-full h-56">
                  <canvas ref={growthChartRef}></canvas>
                </div>
              </div>
            </div>
          </section>

          {/* 3. PROCESS — horizontal trace/timeline (genuinely sequential) */}
          <section id="process" className="scroll-mt-24">
            <Eyebrow>The Recovery Circuit</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8 max-w-2xl">
              Certified E-Waste Recovery Lifecycle
            </h2>

            <div className="relative">
              <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-slate-800" />
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
                {[
                  {
                    title: "Collection",
                    desc: "Discarded devices logged at collection centers.",
                  },
                  {
                    title: "Segregation",
                    desc: "Sorted by category — IT, appliances, electronics.",
                  },
                  {
                    title: "Dismantling",
                    desc: "Safe manual dismantling at registered facilities.",
                  },
                  {
                    title: "Material Recovery",
                    desc: "Metals, plastics & boards separated for processing.",
                  },
                  {
                    title: "Credit Issuance",
                    desc: "Verified tonnage converted into tradeable credits.",
                  },
                ].map((step, i) => (
                  <div key={step.title} className="relative pt-0 md:pt-10">
                    <div className="hidden md:block absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400 ring-4 ring-[#0a0e1a]" />
                    <div className="rounded-xl border border-slate-800 bg-[#0d1220] p-4">
                      <span className="font-mono text-[10px] text-slate-600">
                        STEP {i + 1}
                      </span>
                      <h4 className="font-semibold text-sm text-slate-100 mt-1 mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-8">
              <div className="lg:col-span-3 rounded-2xl border border-slate-800 bg-[#0d1220] p-5 h-72">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-slate-500">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />{" "}
                  Collected vs Credited Volumes
                </div>
                <div className="w-full h-56">
                  <canvas ref={comparisonChartRef}></canvas>
                </div>
              </div>
              <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-[#0d1220] p-6">
                <h3 className="font-semibold text-slate-100 mb-2">
                  Audit transparency, built-in
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Automated matching gives compliance teams instant access to
                  dismantler certificates and CPCB filing status — avoiding
                  last-minute delays and strengthening credibility with
                  regulators and retail partners.
                </p>
              </div>
            </div>
          </section>

          {/* 4. CATEGORY BREAKDOWN */}
          <section id="categories" className="scroll-mt-24">
            <Eyebrow>Source Mix</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8 max-w-2xl">
              Where Electronic Waste Actually Comes From
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
              <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-[#0d1220] p-5 h-80">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-slate-500">
                  <CircuitBoard className="w-3.5 h-3.5 text-amber-400" /> WEEE
                  Category Share
                </div>
                <div className="w-full h-64">
                  <canvas ref={categoryChartRef}></canvas>
                </div>
              </div>
              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: MonitorSmartphone,
                    title: "IT & Telecom",
                    desc: "Laptops, servers, routers and handsets — the largest, fastest-growing share.",
                  },
                  {
                    icon: Zap,
                    title: "Large Appliances",
                    desc: "Fridges, washing machines and ACs — high-tonnage, metal-rich streams.",
                  },
                  {
                    icon: Cpu,
                    title: "Small Appliances",
                    desc: "Mixers and kitchen electronics adding steady distributed volume.",
                  },
                  {
                    icon: Boxes,
                    title: "Consumer Electronics",
                    desc: "TVs and audio equipment collected year-round via retail take-back.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 p-4 rounded-xl border border-slate-800 bg-[#0d1220]"
                  >
                    <item.icon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-xs text-slate-100 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. BENEFITS — datasheet-style rows, not cards */}
          <section id="benefits" className="scroll-mt-24">
            <Eyebrow>Spec Sheet</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8 max-w-2xl">
              What Clean Processing Actually Buys You
            </h2>

            <div className="rounded-2xl border border-slate-800 bg-[#0d1220] divide-y divide-slate-800 overflow-hidden">
              {[
                {
                  icon: Scale,
                  title: "Audit safety",
                  desc: "Dismantling and recycling ledgers pre-vetted against CPCB and state pollution board queries.",
                },
                {
                  icon: Handshake,
                  title: "Corporate alignment",
                  desc: "Verification evidence provided directly to board rooms and ESG audit panels.",
                },
                {
                  icon: Globe,
                  title: "Circular supply",
                  desc: "Recovered metals and plastics reintroduced cleanly into manufacturing streams.",
                },
              ].map((row) => (
                <div
                  key={row.title}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5"
                >
                  <div className="flex items-center gap-3 sm:w-56 shrink-0">
                    <row.icon className="w-5 h-5 text-amber-400" />
                    <span className="font-semibold text-sm text-slate-100">
                      {row.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {row.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. LEDGER / DATABASE — terminal style table */}
          <section id="ledger" className="scroll-mt-24">
            <Eyebrow>Data Ledger</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8 max-w-2xl">
              WEEE(Waste Electrical and Electronic Equipment) Tonnage Ledger
            </h2>

            <div className="rounded-2xl border border-slate-800 bg-[#0d1220] overflow-x-scroll mb-6">
              <div className="overflow-x-scroll">
                <table className="w-full text-left border-collapse font-mono text-xs">
                  <thead>
                    <tr className="text-slate-500 uppercase tracking-wider border-b border-slate-800">
                      <th className="p-4 font-medium">Window</th>
                      <th className="p-4 font-medium">Ingest (MT)</th>
                      <th className="p-4 font-medium">Yield (MT)</th>
                      <th className="p-4 font-medium">Credits</th>
                      <th className="p-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/70">
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
                        className="hover:bg-slate-800/30 transition-colors"
                      >
                        <td className="p-4 md:text-[12px] text-[9px] text-slate-300">
                          {row.m}
                        </td>
                        <td className="p-4 text-slate-400">{row.c}</td>
                        <td className="p-4 text-slate-400">{row.r}</td>
                        <td className="p-4 text-slate-400">{row.g}</td>
                        <td className="p-4">
                          <span
                            className={`px-1 py-0.5 rounded text-[7px] md:text-[12px] font-bold ${
                              row.s === "PENDING"
                                ? "bg-amber-400/10 text-amber-400 border border-amber-400/20"
                                : "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20"
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

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-[#0d1220] p-6">
                <h3 className="font-semibold text-slate-100 mb-2">
                  Consolidation advantages
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Consolidating collection records removes manual tracking risk
                  and builds a reliable verification baseline — compliance teams
                  answer regulatory queries in minutes, not weeks.
                </p>
              </div>
              <div className="lg:col-span-3 rounded-2xl border border-slate-800 bg-[#0d1220] p-5 h-72">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-slate-500">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />{" "}
                  Historical Trend
                </div>
                <div className="w-full h-56">
                  <canvas ref={databaseChartRef}></canvas>
                </div>
              </div>
            </div>
          </section>

          {/* 7. SECTOR DEPLOYMENTS */}
          <section id="sectors" className="scroll-mt-24">
            <Eyebrow>Who This Serves</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8 max-w-2xl">
              Enterprise Infrastructure Deployments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: Factory,
                  title: "Electronics Manufacturers",
                  desc: "Compliance mapping for IT hardware, appliance and consumer electronics lines.",
                },
                {
                  icon: Briefcase,
                  title: "Importers & Retailers",
                  desc: "Bulk validation for imported device batches and take-back program logging.",
                },
                {
                  icon: CircuitBoard,
                  title: "Authorized Dismantlers",
                  desc: "Processing data workflows connecting recovery output to central registries.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl border border-slate-800 bg-[#0d1220] hover:border-amber-400/40 transition-colors"
                >
                  <item.icon className="w-6 h-6 text-amber-400 mb-3" />
                  <h3 className="font-semibold text-sm text-slate-100 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. CASE STUDY — signature frame reused here */}
          <section id="case-study" className="scroll-mt-24">
            <Eyebrow>Field Report</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8 max-w-2xl">
              National Retail Take-Back Consolidation
            </h2>

            <CornerFrame className="rounded-2xl border border-slate-800 bg-gradient-to-br from-[#0f1524] to-[#0a0e1a] p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    Unifying data across 40+ retail collection points
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    A consumer electronics brand ran independent e-waste
                    collection logs across 40+ retail outlets and three regional
                    warehouses. Mismatched entries between store-level pickup
                    receipts and dismantler certificates were slowing the annual
                    CPCB return filing and creating duplicate reporting risk.
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Routing every collection point through a single verification
                    ledger — and matching each pickup to an authorized
                    dismantler certificate in real time — let the compliance
                    team close its annual return well ahead of deadline for the
                    first time in three years.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-slate-800 bg-[#0d1220] text-xs space-y-2.5 text-slate-400 font-mono">
                  <h4 className="font-semibold text-slate-200 mb-1 font-sans">
                    Measurable upgrades:
                  </h4>
                  <p>▸ Filing prep time cut by more than half</p>
                  <p>▸ Duplicate entries eliminated across all outlets</p>
                  <p>▸ Single dashboard view for regional managers</p>
                  <p>▸ Credit shortfall flagged & closed two quarters early</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { val: "58%", lbl: "Faster Filing" },
                  { val: "40+", lbl: "Outlets Unified" },
                  { val: "2 Qtrs", lbl: "Target Achieved Early" },
                  { val: "0", lbl: "Duplicate Entries" },
                ].map((stat) => (
                  <div
                    key={stat.lbl}
                    className="bg-[#0d1220] border border-slate-800 rounded-xl p-4 text-center"
                  >
                    <strong className="block font-mono text-2xl font-bold text-amber-400 mb-0.5">
                      {stat.val}
                    </strong>
                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                      {stat.lbl}
                    </span>
                  </div>
                ))}
              </div>
            </CornerFrame>
          </section>

          {/* 9. FAQ */}
          <section id="faq" className="scroll-mt-24">
            <Eyebrow>Q &amp; A</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8 max-w-2xl">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
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
                  className="rounded-xl border border-slate-800 bg-[#0d1220] overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === idx ? null : idx)
                    }
                    className="w-full flex justify-between items-center text-left p-5 text-sm font-semibold text-slate-100 hover:bg-slate-800/30 transition-colors focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-amber-400">
                        Q{String(idx + 1).padStart(2, "0")}
                      </span>
                      {faq.q}
                    </span>
                    <HelpCircle
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300 ${
                        openFaqIndex === idx ? "rotate-180 text-amber-400" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openFaqIndex === idx
                        ? "max-h-[300px] border-t border-slate-800"
                        : "max-h-0"
                    }`}
                  >
                    <p className="text-xs text-slate-400 leading-relaxed p-5 pt-4 pl-11">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 10. BOTTOM CTA */}
          <section>
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-[#0f1524] to-[#0a0e1a] p-8 sm:p-12 text-center">
              <Eyebrow>Ready When You Are</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
                Close Your Electronics EPR Gap Before the Deadline
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-6 text-sm">
                Automating your WEEE collection and credit validation simplifies
                tracking, keeps logs audit-ready, and ensures clear reporting at
                every step.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-[#0a0e1a] bg-amber-400 hover:bg-amber-300 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" /> Review metrics again
                </a>
                <a
                  href="#ledger"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-slate-200 border border-slate-700 hover:border-slate-500 transition-colors"
                >
                  <Table className="w-4 h-4" /> Open logs
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* STICKY SIDEBAR */}
        <aside className="lg:col-span-1 py-12">
          <div className="lg:sticky lg:top-28 space-y-6">
            <StickyContactForm />
          </div>
        </aside>
      </div>

      {/* Mini footer info strip */}
      <div className="border-t border-slate-800 bg-[#0a0e1a] py-10 mt-12 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <strong className="text-slate-200 font-semibold block mb-1 flex items-center justify-center gap-2">
            <Recycle className="w-4 h-4 text-emerald-400" /> EPR Electronic
            Credit Allocation Strategy
          </strong>
          <p className="max-w-xl mx-auto text-xs leading-relaxed text-slate-500">
            A dedicated layout focused on electronic waste ledger balances,
            cross-facility data mapping, and streamlined WEEE compliance
            logging.
          </p>
        </div>
      </div>
    </div>
  );
}
