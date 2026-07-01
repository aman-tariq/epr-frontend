import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import Seo from "@/components/Seo";

const SellLithiumBattery = () => {
  useEffect(() => {
    // Price Chart
    new Chart(document.getElementById('priceChart') as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: ['12V 100Ah', '24V 100Ah', '48V 50Ah', '51.2V 100Ah'],
        datasets: [{
          label: 'Indicative Price (₹)',
          data: [12500, 23900, 17500, 64900],
          backgroundColor: '#57a05c',
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { callback: (v) => '₹' + v.toLocaleString('en-IN') }
          }
        },
        plugins: { legend: { display: true } }
      }
    });

    // Demand Chart
    new Chart(document.getElementById('demandChart') as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: ['Solar Backup', 'EV Use', 'Industrial UPS', 'Retail Resale'],
        datasets: [{
          label: 'Demand Score',
          data: [92, 85, 78, 66],
          backgroundColor: '#2d6d33',
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true, max: 100 } },
        plugins: { legend: { display: true } }
      }
    });
  }, []);

  return (
    <>
      <Seo
        title="Buy and Sell Lithium Battery | Trusted Lithium Battery Trading Guide"
        description="A practical guide on buying and selling lithium batteries in India with pricing insights, case study, FAQs, charts, and trading database."
        keywords={["buy and sell lithium battery", "lithium battery trading", "lithium battery supplier", "used lithium battery buyers", "lithium battery price in India"]}
        url="https://eprnexuss.com/services/sell-lithium-battery"
        type="article"
      />

      <div className="font-sans bg-[#f4fff4] text-[#16301a]">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-[#e7fbe7] to-[#f8fff8] border border-[#cfe6cf] rounded-3xl overflow-hidden px-6 md:px-12 py-16 md:py-20 mx-4 md:mx-auto max-w-[1180px] shadow-xl">
          <div className="max-w-4xl">
            <span className="inline-block bg-[#edfced] border border-[#d7f0d7] text-[#29662e] px-5 py-2 rounded-full text-sm font-bold tracking-widest">Buy & Sell Lithium Battery in India</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-6 mb-6">
              Power your profit with smarter lithium battery trading.
            </h1>
            <p className="text-lg md:text-xl text-[#4f6b54] max-w-3xl">
              Whether you are looking to buy lithium batteries for business use or sell lithium batteries at the best possible price, the right information can save money, reduce risk, and improve decision-making.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "₹12,000+", label: "Typical entry-level trading value for small packs" },
              { value: "₹65,000+", label: "Common price range for higher-capacity battery packs" },
              { value: "24/7", label: "Demand from solar, EV, UPS, and backup power users" },
              { value: "Safe", label: "Better sourcing means better long-term value" }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-[#cfe6cf] rounded-2xl p-6 shadow">
                <strong className="block text-3xl text-[#2d6d33]">{stat.value}</strong>
                <span className="text-[#4f6b54] text-sm mt-2 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-[1180px] mx-auto px-6 py-16">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-6">Why the lithium battery market is growing so fast</h2>
              <p className="text-[#234128] leading-relaxed">
                India’s interest in clean energy, electric mobility, and backup power has pushed lithium batteries into the spotlight. Businesses want lighter batteries, longer life, faster charging, and lower maintenance.
              </p>
              <div className="highlight-box bg-[#f0fff0] border-l-4 border-[#57a05c] p-6 my-8">
                <strong>Smart buying rule:</strong> Do not judge a battery by price alone. Capacity, warranty, brand reputation, cycle count, and condition matter just as much.
              </div>
            </div>

            <div className="md:col-span-2 bg-white border border-[#cfe6cf] rounded-3xl p-8">
              <h3 className="font-bold mb-6">Quick Market View</h3>
              <div className="flex flex-wrap gap-3">
                {["buy lithium battery", "sell lithium battery", "lithium battery wholesale", "used battery buyers", "battery trading India"].map((tag, i) => (
                  <span key={i} className="bg-[#edfced] border border-[#d7f0d7] px-4 py-2 rounded-full text-sm font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Charts */}
        <section className="bg-white py-16">
          <div className="max-w-[1180px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Visual comparison of pricing and demand</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-[#cfe6cf] rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-6">Indicative Price by Battery Type</h3>
                <canvas id="priceChart" className="w-full h-80"></canvas>
              </div>
              <div className="bg-white border border-[#cfe6cf] rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-6">Market Demand by Use Case</h3>
                <canvas id="demandChart" className="w-full h-80"></canvas>
              </div>
            </div>
          </div>
        </section>

        {/* Database Table */}
        <section className="max-w-[1180px] mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Sample Lithium Battery Database</h2>
          <div className="overflow-x-auto rounded-3xl shadow border border-[#cfe6cf]">
            <table className="w-full">
              <thead className="bg-[#effcef]">
                <tr>
                  <th className="p-6 text-left">Battery Type</th>
                  <th className="p-6 text-left">Condition</th>
                  <th className="p-6 text-left">Qty</th>
                  <th className="p-6 text-left">Indicative Price</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["12V 100Ah", "New", "25", "₹12,500"],
                  ["24V 100Ah", "New", "18", "₹23,900"],
                  ["48V 50Ah", "Used", "12", "₹17,500"],
                  ["51.2V 100Ah", "New", "10", "₹64,900"]
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[#f8fff8]">
                    {row.map((cell, j) => <td key={j} className="p-6">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Case Study */}
        <section className="bg-white py-16">
          <div className="max-w-[1180px] mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Case Study: A small solar trader improved resale value</h2>
            <p className="text-[#234128] leading-relaxed max-w-3xl">
              A small solar equipment trader in Jaipur had 40 used lithium batteries that were difficult to sell because the listings were vague and inconsistent.
            </p>
            <p className="text-[#234128] leading-relaxed max-w-3xl mt-6">
              After testing every battery, documenting capacity, separating units by condition, and adding transparent details, they improved buyer confidence and achieved a better overall selling price.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-[#f4fff4]">
          <div className="max-w-[1180px] mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                ["How do I know a lithium battery is worth buying or selling?", "Check the capacity, cycle life, warranty, voltage, condition, and the seller's documentation."],
                ["What affects lithium battery resale price in India?", "Battery chemistry, age, brand, remaining capacity, condition, warranty, and quantity."],
                ["Can used lithium batteries be sold safely?", "Yes, if they are tested, stored properly, and sold through a responsible process with accurate condition details."],
              ].map(([q, a], i) => (
                <details key={i} className="bg-white border border-[#cfe6cf] rounded-2xl p-6">
                  <summary className="font-semibold cursor-pointer">{q}</summary>
                  <p className="mt-4 text-[#4f6b54]">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <footer className="text-center py-12 text-[#4f6b54]">
          © EPR Nexuss • Buy and Sell Lithium Battery Guide
        </footer>
      </div>
    </>
  );
};

export default SellLithiumBattery;