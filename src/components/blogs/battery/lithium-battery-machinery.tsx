import React from 'react';
import Seo from "@/components/Seo";

const LithiumBatteryMachinery: React.FC = () => {
  return (
    <>
      <Seo
        title="Best Machinery for Lithium Ion Battery Recycling Plant in India 2026"
        description="Complete guide to choosing the right machinery for lithium battery recycling plant. Learn about shredders, separators, dismantling stations, hydromet equipment, dust control systems, and how to select machines for maximum recovery and profitability."
        keywords={[
          "Machinery for Lithium Battery Recycling Plant",
          "Best Shredder for Battery Recycling",
          "Lithium Ion Battery Recycling Equipment",
          "Battery Dismantling Machine India",
          "Black Mass Processing Machinery",
          "Hydrometallurgical Equipment for Battery Recycling",
          "How to Choose Machinery for EV Battery Recycling",
          "Battery Recycling Plant Setup Cost Machinery",
          "Dust Collection System for Battery Recycling",
          "Lithium Battery Recycling Plant Layout",
          "Best Machines for E-Waste and Battery Recycling",
          "EV Battery Recycling Equipment List",
          "Battery Recycling Plant Machinery Suppliers India"
        ]}
        url="https://eprnexuss.com/blog/lithium-battery-machinery"
        type="article"
      />
    <div className="min-h-screen bg-[#0b1220] text-[#e5eefc] font-sans">
      <div className="max-w-6xl mx-auto px-2 md:px-6 py-12">

        {/* HERO */}
        <section className="hero relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f766e] border border-[#38bdf8]/30 rounded-3xl p-2 md:p-10 md:p-16 mb-12">
          <div className="kicker inline-block bg-white/10 border border-white/20 text-[#d7f2ff] px-2 md:px-6 py-2 rounded-full text-sm font-medium mb-6">
            ⚙️ Machinery Solutions for Lithium Ion Battery Recycling
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Build a Smarter Recycling Plant with the Right Machinery
          </h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed opacity-90">
            The right machinery does more than process battery waste. It saves time, improves safety, increases recovery, and helps your plant run like a real business.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="pill px-2 md:px-5 py-2 bg-white/10 border border-white/20 rounded-full text-sm">Capacity planning</span>
            <span className="pill px-2 md:px-5 py-2 bg-white/10 border border-white/20 rounded-full text-sm">Safety-first operations</span>
            <span className="pill px-2 md:px-5 py-2 bg-white/10 border border-white/20 rounded-full text-sm">Higher recovery</span>
          </div>
        </section>

        <div className="grid  gap-8 mb-12">
          {/* How we help clients with machinery */}
          <div className="card bg-[#121c31] border border-[#23304a] rounded-3xl p-2 md:p-8 md:p-10">
            <h2 className="text-lg md:text-3xl font-bold mb-6">How we help clients with machinery</h2>
            <p className="text-[#9fb0cf] mb-8">
              Every recycling plant needs the right equipment at the right stage. We guide clients from planning to installation so they do not waste money on the wrong machine.
            </p>

            <h3 className="font-semibold text-xl mb-4">We support with:</h3>
            <ul className="space-y-3 text-[#9fb0cf]">
              {[
                "Machinery selection based on plant capacity",
                "Shredding, dismantling, and sorting solutions",
                "Material handling and dust control setup",
                "Automation and plant layout planning",
                "Safety, compliance, and workflow improvement",
                "Energy-efficient equipment planning",
                "Upgrade paths for future expansion"
              ].map((item, i) => (
                <li key={i} className="flex gap-3">• {item}</li>
              ))}
            </ul>

            <div className="mt-10 bg-[#0f172a] border border-[#38bdf8]/30 rounded-2xl p-6">
              <p><span className="text-[#38bdf8] font-semibold">Our focus:</span> help clients choose equipment that is practical, efficient, and profitable — not just expensive.</p>
            </div>
          </div>

          {/* Performance Comparison */}
          <div className="card bg-[#121c31] border border-[#23304a] rounded-3xl p-2 md:p-8 md:p-10">
            <h2 className="text-lg md:text-3xl font-bold mb-6">Performance Comparison</h2>
            <p className="text-[#9fb0cf] mb-8">A simple view of how the right machinery setup changes plant performance.</p>

            <div className="space-y-8">
              {[
                { label: "Processing speed", before: "55%", after: "90%" },
                { label: "Material recovery", before: "60%", after: "88%" },
                { label: "Downtime reduction", before: "30%", after: "12%" },
              ].map((bar, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{bar.label}</span>
                    <span>{bar.before} → <span className="text-[#22c55e] font-semibold">{bar.after}</span></span>
                  </div>
                  <div className="h-4 bg-[#23304a] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#38bdf8] to-[#22c55e] rounded-full" style={{ width: bar.after }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Practical Points */}
        <div className="card bg-[#121c31] border border-[#23304a] rounded-3xl p-2 md:p-8 md:p-10 mb-12">
          <h2 className="text-lg md:text-3xl font-bold mb-6">Practical points clients usually ask about</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "A", label: "Does the plant match my target capacity?" },
              { num: "B", label: "Can the layout reduce manual handling?" },
              { num: "C", label: "Will the system support future growth?" }
            ].map((item, i) => (
              <div key={i} className="bg-[#0f172a] border border-[#23304a] rounded-2xl p-6">
                <div className="text-lg md:text-3xl font-bold text-[#38bdf8] mb-3">{item.num}</div>
                <div className="text-[#9fb0cf]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Machinery Workflow + Case Study */}
        <div className="grid  gap-8 mb-12">
          {/* Workflow */}
          <div className="card bg-[#121c31] border border-[#23304a] rounded-3xl p-2 md:p-8 md:p-10">
            <h2 className="text-lg md:text-3xl font-bold mb-6">How the Machinery Workflow Works</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Raw battery input", "Safe dismantling", "Shredding / crushing", "Sorting & separation", "Recovered material output"].map((step, i) => (
                <div key={i} className="bg-[#0f172a] border border-[#23304a] px-2 md:px-5 py-3 rounded-full text-sm">
                  {step}
                </div>
              ))}
            </div>

            <h3 className="font-semibold text-lg md:text-xl mb-4">Suggested Machinery Database</h3>
            <div className="overflow-x-auto rounded-2xl border border-[#23304a]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0f172a]">
                    <th className="text-left p-4">Machine</th>
                    <th className="text-left p-4">Use</th>
                    <th className="text-left p-4">Main Benefit</th>
                  </tr>
                </thead>
                <tbody className="text-[#9fb0cf]">
                  <tr className="border-t border-[#23304a]"><td className="p-4">Dismantling station</td><td className="p-4">Safe opening of packs</td><td className="p-4">Reduces risk</td></tr>
                  <tr className="border-t border-[#23304a]"><td className="p-4">Shredder / crusher</td><td className="p-4">Breaks material</td><td className="p-4">Improves speed</td></tr>
                  <tr className="border-t border-[#23304a]"><td className="p-4">Separation unit</td><td className="p-4">Sorts metals & black mass</td><td className="p-4">Raises recovery</td></tr>
                  <tr className="border-t border-[#23304a]"><td className="p-4">Dust collection system</td><td className="p-4">Controls particles</td><td className="p-4">Improves safety</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Case Study */}
          <div className="card bg-[#121c31] border-l-4 border-[#22c55e] rounded-3xl p-2 md:p-8 md:p-10">
            <h2 className="text-lg md:text-3xl font-bold mb-6">Case Study: Mid-size Recycler in Gujarat</h2>
            <div className="space-y-6 text-[#9fb0cf]">
              <p><strong>Problem:</strong> Poor output quality, frequent downtime, and uneven recovery due to unbalanced machinery layout.</p>
              <p><strong>Our Solution:</strong> Redesigned the line, selected proper shredding & sorting setup, improved dust control.</p>
              <p><strong>Result:</strong> Improved material recovery, reduced stoppages, and easier operation with smaller team.</p>
            </div>
          </div>
        </div>

        {/* Final Thought */}
        <div className="footer bg-gradient-to-br from-[#22c55e]/10 to-[#38bdf8]/10 border border-[#23304a] rounded-3xl p-2 md:p-10 text-center">
          <p className="text-lg md:text-xl font-semibold mb-4">
            In lithium-ion battery recycling, machinery is the backbone of the plant.
          </p>
          <p className="text-[#9fb0cf] max-w-3xl mx-auto">
            When the setup is right, the business becomes safer, faster, and more profitable.
          </p>
          <p className="mt-8 text-[#38bdf8] font-medium">Partner with us to build a recycling plant that works smoothly from day one.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default LithiumBatteryMachinery;