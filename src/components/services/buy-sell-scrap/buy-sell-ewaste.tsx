  import React, { useEffect } from 'react';
  import Chart from 'chart.js/auto';
  import Seo from "@/components/Seo";

  const BuySellEWaste: React.FC = () => {
    useEffect(() => {
      // E-Waste Material Composition (Pie Chart)
      new Chart(document.getElementById('pieChart') as HTMLCanvasElement, {
        type: 'pie',
        data: {
          labels: ['Metals', 'PCBs', 'Plastic', 'Cables', 'Reusable Parts'],
          datasets: [{
            data: [35, 25, 15, 15, 10],
            backgroundColor: ['#17a673', '#0d7f56', '#8fdcc0', '#d4efe5', '#21493a']
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'bottom' }
          }
        }
      });

      // Recovery Efficiency (Bar Chart)
      new Chart(document.getElementById('barChart') as HTMLCanvasElement, {
        type: 'bar',
        data: {
          labels: ['Unsorted Scrap', 'Basic Sorting', 'Professional Sorting', 'Structured Recycling'],
          datasets: [{
            label: 'Recovery Efficiency',
            data: [30, 52, 78, 94],
            backgroundColor: '#17a673',
            borderRadius: 10
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true, max: 100 }
          },
          plugins: {
            legend: { display: false }
          }
        }
      });
    }, []);

    return (
      <>
        <Seo
          title="EPR Nexuss | Premium E-Waste Scrap Management - Buy & Sell Responsibly"
          description="Professional e-waste scrap management services. Buy and sell IT equipment, cables, PCBs, and electronic scrap with transparency and maximum value recovery."
          keywords={["e-waste scrap", "buy e-waste", "sell electronic scrap", "PCB scrap", "cable scrap", "responsible recycling", "IT asset disposal", "e-waste management"]}
          url="https://eprnexuss.com/blog/e-waste-scrap"
          type="article"
        />

        <div className="font-sans bg-[#f3f6f5] text-[#1f2937] overflow-x-hidden">
          {/* HERO SECTION */}
          <section className="relative min-h-[92vh] flex items-center bg-cover bg-center px-6 md:px-8 py-20"
            style={{
              backgroundImage: `linear-gradient(rgba(8,25,20,0.82), rgba(8,25,20,0.86)), 
                              url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop')`
            }}>
            <div className="max-w-[760px] text-white z-10">
              <div className="inline-block px-6 py-3 border border-white/20 rounded-full backdrop-blur-md mb-6 text-sm tracking-widest uppercase">
                EPR Nexuss • E-Waste Scrap Management
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[5.6rem] leading-[1.05] font-bold mb-6">
                Transform electronic scrap into sustainable business value.
              </h1>
              <p className="text-xl text-white/90 mb-10 max-w-[680px]">
                Buying and selling e-waste scrap should not feel complicated. EPR Nexuss helps businesses manage electronic scrap responsibly through organized recycling support, transparent processes, and value-driven handling.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#services" className="bg-[#17a673] text-white px-8 py-4 rounded-2xl font-bold hover:-translate-y-1 transition-all shadow-xl shadow-[#17a673]/30">
                  Explore Services
                </a>
                <a href="#faq" className="border border-white/30 text-white px-8 py-4 rounded-2xl font-bold backdrop-blur-md hover:bg-white/10 transition-all">
                  View FAQs
                </a>
              </div>
            </div>
          </section>

          {/* PROFESSIONAL SUPPORT */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-14">
                <span className="text-[#17a673] uppercase font-bold tracking-widest">Professional Support</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#10231c]">
                  Helping businesses buy and sell e-waste scrap with confidence
                </h2>
                <p className="max-w-3xl mx-auto mt-6 text-[#5f6f67]">
                  EPR Nexuss supports companies looking to dispose of outdated electronics, recover value from scrap materials, and move toward responsible recycling practices without operational confusion.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" id="services">
                {[
                  { num: "01", title: "Scrap Evaluation", desc: "We help assess e-waste categories including cables, boards, systems, reusable components, and mixed electronic scrap." },
                  { num: "02", title: "Buyer & Seller Support", desc: "Our workflow simplifies transactions for businesses looking to buy or sell e-waste scrap responsibly." },
                  { num: "03", title: "Responsible Recycling", desc: "We encourage environmentally conscious recycling practices that support safer material recovery." },
                  { num: "04", title: "Business Transparency", desc: "Clients benefit from organized communication, category-wise understanding, and practical guidance." }
                ].map((card, i) => (
                  <div key={i} className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all border border-black/5">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#17a673] to-[#0d7f56] rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-6">
                      {card.num}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#11241d]">{card.title}</h3>
                    <p className="text-[#66756e]">{card.desc}</p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 mt-16">
                {[
                  { value: "90%", label: "Businesses prefer organized scrap handling over informal disposal." },
                  { value: "75%", label: "Electronic scrap contains reusable or recoverable material value." },
                  { value: "24/7", label: "Growing awareness around sustainable e-waste recycling practices." }
                ].map((stat, i) => (
                  <div key={i} className="bg-gradient-to-b from-white to-[#f7faf9] rounded-3xl p-8 text-center shadow border border-black/5">
                    <h3 className="text-5xl font-bold text-[#17a673] mb-3">{stat.value}</h3>
                    <p className="text-[#5f6f67]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* VISUAL INSIGHTS - CHARTS */}
          <section className="bg-[#edf3f1] py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <span className="text-[#17a673] uppercase font-bold tracking-widest">Visual Insights</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#10231c]">E-waste scrap analysis and recovery potential</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6 text-[#10231c]">E-Waste Material Composition</h3>
                  <canvas id="pieChart" className="w-full h-[380px]"></canvas>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6 text-[#10231c]">Improved Value Through Proper Handling</h3>
                  <canvas id="barChart" className="w-full h-[380px]"></canvas>
                </div>
              </div>
            </div>
          </section>

          {/* TABLE - COMMON CATEGORIES */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <span className="text-[#17a673] uppercase font-bold tracking-widest">Database View</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#10231c]">Common e-waste scrap categories</h2>
              </div>

              <div className="overflow-x-auto rounded-3xl shadow-lg">
                <table className="w-full bg-white border-collapse">
                  <thead>
                    <tr className="bg-[#10231c] text-white">
                      <th className="text-left p-6 font-semibold">Scrap Category</th>
                      <th className="text-left p-6 font-semibold">Common Materials</th>
                      <th className="text-left p-6 font-semibold">Business Importance</th>
                      <th className="text-left p-6 font-semibold">Suggested Process</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ["IT Equipment Scrap", "CPUs, desktops, routers, monitors", "Contains reusable and recoverable parts", "Separate reusable units before recycling"],
                      ["Wire & Cable Scrap", "Mixed electrical and data cables", "High metal recovery potential", "Bundle by type and weight"],
                      ["PCB Scrap", "Motherboards, cards, electronic boards", "Contains valuable metals", "Handle separately for recovery efficiency"],
                      ["Plastic Components", "Casings, covers, electronic shells", "Useful for recycling streams", "Keep free from contamination"]
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        {row.map((cell, j) => <td key={j} className="p-6 text-[#5c6963]">{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* CASE STUDY */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="bg-gradient-to-br from-[#10231c] to-[#16382c] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
                <span className="uppercase tracking-widest text-[#7de6be] font-bold">Case Study</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight max-w-3xl">
                  How a growing business transformed unused electronic waste into organized value recovery
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                  {[
                    { title: "The Situation", text: "An office facility had accumulated outdated desktops, damaged peripherals, cables, and storage equipment over time." },
                    { title: "The Challenge", text: "The company lacked a structured process for identifying valuable materials and handling disposal responsibly." },
                    { title: "Our Support", text: "EPR Nexuss guided the client through sorting, category-wise handling, and organized scrap movement." },
                    { title: "The Outcome", text: "The client improved space utilization, gained better material understanding, and moved toward cleaner recycling practices." }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-8">
                      <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                      <p className="opacity-90">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-[#f6f8f7] py-20" id="faq">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <span className="text-[#17a673] uppercase font-bold tracking-widest">Frequently Asked Questions</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#10231c]">Everything clients usually ask us</h2>
              </div>

              <div className="space-y-6 max-w-4xl mx-auto">
                {[
                  ["What types of electronic scrap can be sold?", "Businesses can sell computers, cables, servers, UPS systems, PCBs, networking devices, printers, and mixed e-waste materials."],
                  ["Why should businesses recycle e-waste properly?", "Responsible recycling reduces environmental impact, improves recovery efficiency, and supports safer disposal practices."],
                  ["How does EPR Nexuss support clients?", "We help clients understand material categories, organize the process, and simplify buying and selling workflows."],
                  ["Can bulk office scrap be managed efficiently?", "Yes. Organized collection and sorting significantly improve handling efficiency and material recovery potential."],
                  ["Is it better to separate cables, boards, and plastics before selling?", "Yes. Separation helps buyers evaluate the scrap more accurately and often makes the process smoother for both sides."],
                  ["Do businesses need a long-term scrap management plan?", "A long-term plan helps reduce storage issues, improves disposal timing, and makes future asset replacement more organized."]
                ].map(([question, answer], i) => (
                  <div key={i} className="bg-white rounded-2xl p-8 shadow">
                    <h4 className="font-semibold text-xl mb-4 text-[#10231c]">{question}</h4>
                    <p className="text-[#5f6f67]">{answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="bg-gradient-to-br from-[#17a673] to-[#0d7f56] rounded-3xl p-16 md:p-20 text-center text-white shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Build a smarter future with responsible e-waste recycling</h2>
                <p className="max-w-3xl mx-auto text-lg opacity-95">
                  EPR Nexuss helps businesses manage electronic scrap through practical support, organized handling, and environmentally responsible recycling solutions designed for long-term sustainability.
                </p>
              </div>
            </div>
          </section>

          <footer className="text-center py-10 text-[#6c7b75] border-t border-gray-200">
            © EPR Nexuss • Premium Corporate E-Waste Scrap Blog Design
          </footer>
        </div>
      </>
    );
  };

  export default BuySellEWaste;