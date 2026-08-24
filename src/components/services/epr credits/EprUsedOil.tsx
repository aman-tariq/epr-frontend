"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { motion } from "framer-motion";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

// Reveal Animation Setup
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

export default function EprUsedOilBlog() {
  const growthChartRef = useRef<HTMLCanvasElement | null>(null);
  const comparisonChartRef = useRef<HTMLCanvasElement | null>(null);
  const databaseChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let growthChart: Chart | null = null;
    let comparisonChart: Chart | null = null;
    let databaseChart: Chart | null = null;

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

    if (growthChartRef.current) {
      growthChart = new Chart(growthChartRef.current, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "EPR Credits",
              data: [28, 34, 41, 49, 58, 66, 73],
              backgroundColor: [
                "#2f9e57",
                "#35a95f",
                "#3eb166",
                "#49bc6d",
                "#57c876",
                "#69d284",
                "#7bdb92",
              ],
              borderRadius: 12,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: true } },
          scales: {
            y: { beginAtZero: true, grid: { color: "#eaf3eb" } },
            x: { grid: { display: false } },
          },
        },
      });
    }

    if (comparisonChartRef.current) {
      comparisonChart = new Chart(comparisonChartRef.current, {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: "Used Oil Recovered (KL)",
              data: [28, 34, 41, 49, 58, 66, 73],
              borderColor: "#2f9e57",
              tension: 0.35,
              fill: false,
              borderWidth: 3,
              pointRadius: 4,
            },
            {
              label: "EPR Credits Generated",
              data: [24, 31, 38, 45, 54, 61, 69],
              borderColor: "#5bbf74",
              tension: 0.35,
              fill: false,
              borderWidth: 3,
              pointRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: "bottom" } },
          scales: {
            y: { beginAtZero: true, grid: { color: "#eaf3eb" } },
            x: { grid: { display: false } },
          },
        },
      });
    }

    if (databaseChartRef.current) {
      databaseChart = new Chart(databaseChartRef.current, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Collected",
              data: [40, 48, 55, 63, 71, 79, 86],
              backgroundColor: "#dff2e4",
              borderRadius: 10,
            },
            {
              label: "Recovered",
              data: [28, 34, 41, 49, 58, 66, 73],
              backgroundColor: "#2f9e57",
              borderRadius: 10,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: "bottom" } },
          scales: {
            y: { beginAtZero: true, grid: { color: "#eaf3eb" } },
            x: { grid: { display: false } },
          },
        },
      });
    }

    return () => {
      if (growthChart) growthChart.destroy();
      if (comparisonChart) comparisonChart.destroy();
      if (databaseChart) databaseChart.destroy();
    };
  }, []);

  return (
    <div
      className="min-h-screen text-[#12301f] font-sans selection:bg-[#b9e6c2] px-1 sm:px-2 lg:px-2 pt-28 pb-12 mt-10"
      style={{
        background: `radial-gradient(circle at top right, rgba(47, 158, 87, 0.08), transparent 30%), linear-gradient(180deg, #ffffff 0%, #f6fbf7 45%, #f5faf6 100%)`,
      }}
    >
      <Seo
        title="EPR Credits for Used Oil | Buy & Sell Used Oil EPR Credits in India"
        description="Buy, sell, and manage Used Oil EPR Credits in India. Meet CPCB compliance requirements, fulfill Extended Producer Responsibility obligations, support certified used oil recycling, and strengthen your sustainability goals."
        keywords={[
          "Used Oil EPR Credits",
          "EPR Credits for Used Oil",
          "Buy Used Oil EPR Credits",
          "Sell Used Oil EPR Credits",
          "Used Oil Credit Trading",
          "Used Oil Credit Marketplace",
          "Used Oil Recycling",
          "Used Oil Waste Management",
          "Extended Producer Responsibility",
          "CPCB Used Oil",
          "Used Oil EPR Compliance",
          "Hazardous Waste Management",
          "EPR Certificates",
          "Circular Economy",
          "Sustainability Compliance",
          "How to buy Used Oil EPR credits?",
          "How to sell Used Oil EPR credits?",
          "What are Used Oil EPR credits?",
          "How does Used Oil EPR credit trading work?",
          "Used Oil EPR compliance in India",
          "CPCB Used Oil registration",
          "Best Used Oil EPR credit provider",
          "Used Oil recycling credits",
          "Used Oil credit marketplace India",
          "Used Oil EPR solutions",
        ]}
        url="https://eprnexuss.com/services/epr-used-oil"
        type="article"
      />
      {/* 2-Column Grid Workspace Layout */}
      <div className="max-w-8xl px-1 md:px-2 flex flex-col lg:flex-row gap-4 items-stretch">
        {/* Main Content Area */}
        <main className="lg:col-span-8 space-y-16 w-full">
          {/* Header Section */}
          <Reveal>
            <header className="space-y-6 border border-border shadow-lg rounded-lg p-8 bg-white">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary bg-white text-[#2f9e57] text-xs sm:text-sm font-extrabold shadow-sm">
                <i className="fa-solid fa-seedling"></i> Compliance meets circular
                economy
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                EPR Credits of EPR Used Oil
              </h1>
              <p className="text-[#5e7165] text-base sm:text-lg leading-relaxed max-w-prose">
                Used oil compliance is no longer just a back-office task. It is a
                strategic part of environmental responsibility, traceability, and
                operational trust. EPR Credits for used oil help businesses show
                verified recovery, strengthen recycling systems, and present a
                cleaner sustainability story to clients and regulators.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Used oil EPR",
                  "Waste oil compliance",
                  "Oil recycling",
                  "EPR registration",
                  "Environmental compliance",
                  "Circular economy",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full border border-[#dceadf] bg-white font-bold text-xs text-[#305041] shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>
          </Reveal>

          {/* Section: About */}
          <Reveal delay={0.1}>
            <section id="about" className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  What Are EPR Credits in Used Oil Compliance?
                </h2>
                <p className="text-[#5e7165] text-sm sm:text-base leading-relaxed">
                  EPR stands for Extended Producer Responsibility. For used oil,
                  it means the companies involved in placing lubricating oil or
                  related products into the market must support responsible
                  collection, recovery, and recycling after use.
                </p>
              </div>

              <div className="bg-white border border-[#dceadf] rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="text-xl font-bold">
                  The simple business meaning of used oil EPR
                </h3>
                <p className="text-[#5e7165] text-sm leading-relaxed">
                  Instead of treating used oil as a waste problem only, EPR makes
                  it part of a traceable recovery chain. That means companies can
                  track how much oil was introduced, how much was collected, where
                  it was processed, and how the recovery was documented.
                </p>
                <div className="h-64 sm:h-72 w-full">
                  <canvas ref={growthChartRef}></canvas>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Section: Process */}
          <Reveal delay={0.1}>
            <section id="process" className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  How the Used Oil EPR System Works
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  "Used oil enters the compliance chain",
                  "Collection and aggregation begin",
                  "Processing and recycling happen",
                  "Evidence is verified",
                  "EPR credits are recorded",
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start bg-white border border-[#dceadf] rounded-xl p-4 shadow-sm"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 grid place-items-center rounded-xl bg-gradient-to-br from-[#2f9e57]/10 to-[#5bbf74]/18 text-[#2f9e57] text-base sm:text-lg font-black">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base mb-0.5">
                        {step}
                      </h4>
                      <p className="text-[#5e7165] text-xs sm:text-sm">
                        Systematic data tracking ensures audit validation at this
                        structural level.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-[#dceadf] rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="text-xl font-bold">
                  Recovery vs Credit Generation
                </h3>
                <div className="h-64 sm:h-72 w-full">
                  <canvas ref={comparisonChartRef}></canvas>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Section: Database */}
          <Reveal delay={0.1}>
            <section id="database" className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Database Snapshot for Used Oil Compliance
                </h2>
              </div>

              <div className="bg-white border border-[#dceadf] rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#2f9e57] to-[#5bbf74] text-white text-xs sm:text-sm">
                        <th className="p-3 sm:p-4">Month</th>
                        <th className="p-3 sm:p-4">Collected (KL)</th>
                        <th className="p-3 sm:p-4">Recovered (KL)</th>
                        <th className="p-3 sm:p-4">EPR Credits</th>
                        <th className="p-3 sm:p-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs sm:text-sm text-[#385246] divide-y divide-[#edf5ee]">
                      {[
                        { m: "January", c: 40, r: 28, g: 28, s: "Partial" },
                        { m: "February", c: 48, r: 34, g: 34, s: "Improving" },
                        { m: "March", c: 55, r: 41, g: 41, s: "Strong" },
                        { m: "April", c: 63, r: 49, g: 49, s: "Strong" },
                        { m: "May", c: 71, r: 58, g: 58, s: "Excellent" },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className="hover:bg-[#fbfefb]/50 transition-colors"
                        >
                          <td className="p-3 sm:p-4 font-semibold">{row.m}</td>
                          <td className="p-3 sm:p-4">{row.c}</td>
                          <td className="p-3 sm:p-4">{row.r}</td>
                          <td className="p-3 sm:p-4">{row.g}</td>
                          <td className="p-3 sm:p-4">
                            <span className="px-2 py-0.5 rounded bg-[#eef8ef] text-[10px] sm:text-xs font-bold text-[#2f9e57]">
                              {row.s}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white border border-[#dceadf] rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="text-xl font-bold">Compliance Data Trend</h3>
                <div className="h-64 sm:h-72 w-full">
                  <canvas ref={databaseChartRef}></canvas>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Section: Case Study */}
          <Reveal delay={0.1}>
            <section id="case-study">
              <div className="bg-gradient-to-br from-white to-[#f0fbf2] border border-[#dceadf] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
                <h3 className="text-2xl font-bold">
                  From scattered oil records to a reliable EPR system
                </h3>
                <p className="text-[#5e7165] text-sm leading-relaxed">
                  A growing industrial maintenance company was struggling to
                  manage used oil records. Collection receipts were stored in
                  multiple places, recovery confirmations were delayed, and
                  monthly reporting took too long. The team introduced a central
                  database for EPR credit tracking to secure dynamic verification
                  alignment.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {[
                    { num: "67%", label: "Faster reporting" },
                    { num: "81%", label: "Data accuracy" },
                    { num: "76%", label: "Higher visibility" },
                    { num: "92%", label: "Stakeholder trust" },
                  ].map((out, i) => (
                    <div
                      key={i}
                      className="bg-white border border-[#dceadf] rounded-xl p-3 text-center"
                    >
                      <strong className="block text-[#2f9e57] text-lg sm:text-xl font-black">
                        {out.num}
                      </strong>
                      <span className="text-[#5e7165] text-[10px] sm:text-xs font-medium block mt-0.5">
                        {out.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          {/* Section: FAQs */}
          <Reveal delay={0.1}>
            <section id="faq" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    q: "What are EPR Credits of EPR Used Oil?",
                    a: "They are verified records that show used oil has been collected, recovered, or recycled in a way that supports compliance responsibility.",
                  },
                  {
                    q: "Who needs used oil EPR compliance?",
                    a: "Businesses involved in producing, importing, distributing, or handling lubricants and used oil recovery activities typically need structured compliance management.",
                  },
                ].map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#dceadf] rounded-xl p-5 shadow-sm space-y-1.5"
                  >
                    <h4 className="flex items-start gap-2.5 text-sm sm:text-base font-bold">
                      <i className="fa-solid fa-circle-question text-[#2f9e57] mt-0.5 shrink-0"></i>
                      <span>{faq.q}</span>
                    </h4>
                    <p className="text-[#5e7165] text-xs sm:text-sm pl-6 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        </main>

        {/* Clean Sticky Sidebar Container containing only the form component */}
        <aside className="hidden lg:block shrink-0 w-[320px]">
          <div className="sticky top-28 px-2">
            <Reveal delay={0.2}>
              <StickyContactForm />
            </Reveal>
          </div>
        </aside>
      </div>
    </div>
  );
}