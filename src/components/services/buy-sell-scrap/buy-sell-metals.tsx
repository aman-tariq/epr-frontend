import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";
import StickyContactForm from "@/components/StickyContactForm";

// Framer Motion Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

// Reusable Scroll Reveal Wrapper
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

const BuySellScrapMetals = () => {
  useEffect(() => {
    // Pie Chart - Metal Value Mix
    const pieCanvas = document.getElementById("pieChart") as HTMLCanvasElement;
    let pieChartInstance: Chart | null = null;
    if (pieCanvas) {
      pieChartInstance = new Chart(pieCanvas, {
        type: "pie",
        data: {
          labels: ["Copper", "Aluminium", "Steel", "Brass", "Mixed Metals"],
          datasets: [
            {
              data: [32, 24, 22, 12, 10],
              backgroundColor: [
                "#0f766e",
                "#16a085",
                "#b8892b",
                "#8b6b2b",
                "#295e4b",
              ],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "bottom" },
          },
        },
      });
    }

    // Bar Chart - Recovery Value
    const barCanvas = document.getElementById("barChart") as HTMLCanvasElement;
    let barChartInstance: Chart | null = null;
    if (barCanvas) {
      barChartInstance = new Chart(barCanvas, {
        type: "bar",
        data: {
          labels: [
            "Unsorted",
            "Basic Sorting",
            "Good Sorting",
            "Professional Handling",
          ],
          datasets: [
            {
              label: "Relative Recovery Value",
              data: [30, 52, 76, 93],
              backgroundColor: "#0f766e",
              borderRadius: 10,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: { stepSize: 20 },
            },
          },
          plugins: {
            legend: { display: false },
          },
        },
      });
    }

    return () => {
      if (pieChartInstance) pieChartInstance.destroy();
      if (barChartInstance) barChartInstance.destroy();
    };
  }, []);

  return (
    <>
      <Seo
        title="EPR Nexuss | Buy & Sell Scrap Metals"
        description="Professional scrap metal trading platform. Buy and sell copper, aluminium, steel, brass and mixed metal scrap with transparent pricing and responsible recycling support."
        keywords={[
          "scrap metals",
          "buy scrap metal",
          "sell scrap metal",
          "copper scrap",
          "aluminium scrap",
          "steel scrap",
          "metal recycling",
        ]}
        url="https://eprnexuss.com/services/buy-sell-scrap-metals"
        type="article"
      />

      <div className="font-sans md:mt-[130px] bg-[#f3f6f4] text-[#10231d] overflow-x-hidden md:overflow-x-visible">
        <div className="flex flex-col lg:flex-row gap-2 mt-10 items-stretch">
          <div className="container">
            {/* HERO */}
            <section
              className="relative min-h-[88vh] flex items-center bg-cover bg-center px-6 md:px-12 py-20"
              style={{
                backgroundImage: `linear-gradient(rgba(6,22,19,0.78), rgba(6,22,19,0.84)), 
                             url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop')`,
              }}
            >
              <Reveal delay={0.1}>
                <div className="max-w-[820px] text-white z-10">
                  <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-sm font-bold mb-8 backdrop-blur-md">
                    EPR Nexuss • Premium Metal Scrap Solutions
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-[5.6rem] leading-[1.02] font-bold mb-6">
                    Turn scrap metals into clean value with the right partner.
                  </h1>
                  <p className="text-xl text-white/90 mb-10 max-w-[760px]">
                    Buying and selling scrap metals should feel practical, fair,
                    and reliable. EPR Nexuss supports clients with organized
                    scrap handling, transparent communication, and responsible
                    recycling guidance.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#support"
                      className="bg-white text-[#0b5b55] px-8 py-4 rounded-2xl font-bold hover:-translate-y-1 transition-all shadow-xl"
                    >
                      See How We Help
                    </a>
                    <a
                      href="#faq"
                      className="border border-white/30 text-white px-8 py-4 rounded-2xl font-bold backdrop-blur-md hover:bg-white/10 transition-all"
                    >
                      Read FAQs
                    </a>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* Professional Support */}
            <section className="py-20" id="support">
              <div className="max-w-7xl mx-auto px-6">
                <Reveal delay={0.1}>
                  <div className="text-center mb-14">
                    <span className="text-[#0f766e] uppercase font-bold tracking-widest">
                      Why this matters
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#10231d]">
                      Metal scrap is more than waste — it is a recoverable
                      business resource
                    </h2>
                    <p className="max-w-3xl mx-auto mt-6 text-[#5f7069]">
                      Old metals from offices, factories, warehouses,
                      construction sites, and electronic equipment often still
                      have strong value.
                    </p>
                  </div>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      num: "01",
                      title: "Clear Assessment",
                      desc: "We help identify what type of metal scrap you have, how it should be sorted, and which material can be recovered efficiently.",
                    },
                    {
                      num: "02",
                      title: "Buyer Support",
                      desc: "We support buyers who need dependable scrap metal sourcing with clean classification and transparent handling.",
                    },
                    {
                      num: "03",
                      title: "Seller Support",
                      desc: "We guide sellers on how to prepare, group, and present scrap so they can move material in a more structured way.",
                    },
                    {
                      num: "04",
                      title: "Responsible Recycling",
                      desc: "We encourage metal scrap to move through the right recycling route instead of being left idle or discarded poorly.",
                    },
                  ].map((card, i) => (
                    <Reveal delay={0.1 * (i + 1)} key={i}>
                      <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all border border-black/5 h-full">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#0f766e] to-[#0b5b55] rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-6">
                          {card.num}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-[#10231d]">
                          {card.title}
                        </h3>
                        <p className="text-[#5f7069]">{card.desc}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-16">
                  {[
                    {
                      value: "Fast sorting",
                      label:
                        "Helps separate high-value and mixed materials early.",
                    },
                    {
                      value: "Better pricing",
                      label:
                        "Proper grading improves price clarity for both sides.",
                    },
                    {
                      value: "Lower risk",
                      label:
                        "Organized handling reduces confusion and waste loss.",
                    },
                  ].map((kpi, i) => (
                    <Reveal delay={0.15 * (i + 1)} key={i}>
                      <div className="bg-gradient-to-b from-white to-[#f7fbfa] rounded-3xl p-8 border border-[#dae6e2] text-center h-full">
                        <h3 className="text-4xl font-bold text-[#0f766e] mb-3">
                          {kpi.value}
                        </h3>
                        <p className="text-[#5f7069]">{kpi.label}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            {/* Charts Section */}
            <section className="bg-[#edf4f1] py-20 overflow-x-scroll">
              <div className="max-w-7xl mx-auto px-6">
                <Reveal delay={0.1}>
                  <div className="text-center mb-12">
                    <span className="text-[#0f766e] uppercase font-bold tracking-widest">
                      Visual Insights
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#10231d]">
                      Charts that make metal scrap easier to understand
                    </h2>
                  </div>
                </Reveal>

                <div className="grid lg:grid-cols-2 gap-8">
                  <Reveal delay={0.2}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                      <h3 className="text-2xl font-semibold mb-6 text-[#10231d]">
                        Typical Scrap Metal Value Mix
                      </h3>
                      <canvas
                        id="pieChart"
                        className="w-full h-[380px]"
                      ></canvas>
                    </div>
                  </Reveal>

                  <Reveal delay={0.3}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                      <h3 className="text-2xl font-semibold mb-6 text-[#10231d]">
                        Recovery Improves With Better Handling
                      </h3>
                      <canvas
                        id="barChart"
                        className="w-full h-[380px]"
                      ></canvas>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* Table */}
            <section className="py-20">
              <div className="max-w-7xl mx-auto px-6">
                <Reveal delay={0.1}>
                  <div className="text-center mb-12">
                    <span className="text-[#0f766e] uppercase font-bold tracking-widest">
                      Database View
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#10231d]">
                      Sample scrap metal categories database
                    </h2>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="overflow-x-auto rounded-3xl shadow-lg">
                    <table className="w-full bg-white border-collapse">
                      <thead>
                        <tr className="bg-[#10231d] text-white">
                          <th className="text-left p-6 font-semibold">
                            Category
                          </th>
                          <th className="text-left p-6 font-semibold">
                            Common examples
                          </th>
                          <th className="text-left p-6 font-semibold">
                            Why it is useful
                          </th>
                          <th className="text-left p-6 font-semibold">
                            Suggested handling
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {[
                          [
                            "Copper scrap",
                            "Wires, coils, conductors, pipe parts",
                            "High recovery demand and strong resale interest",
                            "Keep dry and separate from mixed waste",
                          ],
                          [
                            "Aluminium scrap",
                            "Frames, panels, shells, sections",
                            "Lightweight and recyclable in many streams",
                            "Sort by grade where possible",
                          ],
                          [
                            "Steel scrap",
                            "Racks, machine parts, appliances, structural pieces",
                            "Widely used in manufacturing and recycling",
                            "Separate from non-ferrous metals",
                          ],
                          [
                            "Brass scrap",
                            "Fittings, fixtures, connectors, valves",
                            "Useful for recovery and secondary production",
                            "Remove contamination before sale",
                          ],
                          [
                            "Mixed metal scrap",
                            "Combined scrap from dismantling or old equipment",
                            "Can still be valuable if sorted correctly",
                            "Classify before pricing and pickup",
                          ],
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-gray-50">
                            {row.map((cell, j) => (
                              <td key={j} className="p-6 text-[#5e7069]">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* Case Study */}
            <section className="py-20 bg-[#10231d] text-white">
              <div className="max-w-7xl mx-auto px-6">
                <Reveal delay={0.1}>
                  <div className="text-center mb-12">
                    <span className="uppercase tracking-widest text-[#7de6be] font-bold">
                      Case Study
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-6">
                      How one business turned unused metal scrap into organized
                      value
                    </h2>
                  </div>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "The challenge",
                      text: "Mixed metal items, unclear categories, and no structured process for moving the scrap forward.",
                    },
                    {
                      title: "Our support",
                      text: "We guided the client through classification, collection planning, and practical commercial discussion.",
                    },
                    {
                      title: "The result",
                      text: "The business cleared space, reduced uncertainty, and moved the scrap into a more manageable recycling route.",
                    },
                    {
                      title: "What made the difference",
                      text: "Clear guidance, human communication, and a process that felt structured from start to finish.",
                    },
                  ].map((item, i) => (
                    <Reveal delay={0.1 * (i + 1)} key={i}>
                      <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-8 h-full">
                        <h4 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h4>
                        <p className="opacity-90">{item.text}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#f6f8f7] py-20" id="faq">
              <div className="max-w-7xl mx-auto px-6">
                <Reveal delay={0.1}>
                  <div className="text-center mb-12">
                    <span className="text-[#0f766e] uppercase font-bold tracking-widest">
                      FAQs
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#10231d]">
                      Frequently asked questions
                    </h2>
                  </div>
                </Reveal>

                <div className="space-y-6 max-w-4xl mx-auto">
                  {[
                    [
                      "What kinds of scrap metals can EPR Nexuss help with?",
                      "We can support copper, aluminium, steel, brass, iron, stainless steel, wire scrap, and mixed metal materials from industrial or office sources.",
                    ],
                    [
                      "How do you determine scrap value?",
                      "Value usually depends on metal type, quantity, condition, purity, sorting quality, and market demand at the time of the transaction.",
                    ],
                    [
                      "Do I need to sort the scrap before selling?",
                      "Sorting helps, but we can also guide you through the process if the material is mixed or not fully separated.",
                    ],
                    [
                      "Can businesses sell bulk scrap metal?",
                      "Yes. Bulk scrap is common, and we often help clients who need a clean and organized route for larger quantities.",
                    ],
                    [
                      "Why is responsible metal recycling important?",
                      "Responsible recycling reduces waste, supports resource recovery, and helps keep metal materials in use for longer.",
                    ],
                  ].map(([q, a], i) => (
                    <Reveal delay={0.05 * (i + 1)} key={i}>
                      <div className="bg-white rounded-2xl p-8 shadow">
                        <h4 className="font-semibold text-xl mb-4 text-[#10231d]">
                          {q}
                        </h4>
                        <p className="text-[#5f7069]">{a}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-20">
              <div className="max-w-7xl mx-auto px-6">
                <Reveal delay={0.1}>
                  <div className="bg-gradient-to-br from-[#0f766e] to-[#134f49] rounded-3xl p-16 md:p-20 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      Let your metal scrap work for your business
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg opacity-95">
                      EPR Nexuss supports clients who want a clear, practical, and
                      responsible way to buy and sell scrap metals.
                    </p>
                  </div>
                </Reveal>
              </div>
            </section>
          </div>

          <aside className="hidden lg:block shrink-0 w-[340px]">
            <div className="sticky top-28 px-2">
              <StickyContactForm />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default BuySellScrapMetals;