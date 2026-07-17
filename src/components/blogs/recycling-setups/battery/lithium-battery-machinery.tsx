import React from 'react';
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

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
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-8xl mt-8 mx-auto px-4 md:px-2 py-6 md:py-12">

        {/* HERO */}
        <section className="hero relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-emerald-50 border border-brandGreen rounded-3xl p-6 md:p-10 md:p-16 mb-12 shadow-sm">
          <div className="kicker inline-block bg-white border border-border text-slate-800 shadow-sm px-4 md:px-6 py-2 rounded-full text-sm font-medium mb-6 max-w-full break-words text-center">
            ⚙️ Machinery Solutions for Lithium Ion Battery Recycling
          </div>
          <h1 className="text-2xl md:text-5xl font-bold font-display text-slate-900 leading-tight mb-6 break-words">
            Build a Smarter Recycling Plant with the Right Machinery
          </h1>
          <p className="text-base md:text-xl max-w-3xl leading-relaxed text-slate-600">
            The right machinery does more than process battery waste. It saves time, improves safety, increases recovery, and helps your plant run like a real business.
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            <span className="pill px-3 py-2 bg-white border border-brandGreen text-slate-700 rounded-full text-xs md:text-sm shadow-sm">Capacity planning</span>
            <span className="pill px-3 py-2 bg-white border border-brandGreen text-slate-700 rounded-full text-xs md:text-sm shadow-sm">Safety-first operations</span>
            <span className="pill px-3 py-2 bg-white border border-brandGreen text-slate-700 rounded-full text-xs md:text-sm shadow-sm">Higher recovery</span>
          </div>
        </section>

        {/* Two-Column Layout Wrapper */}
        <div className="lg:flex lg:gap-4 lg:items-start">
          
          {/* Main Content Column */}
          <div className="flex-1 space-y-12 overflow-hidden">

            <div className="grid gap-8">
              {/* How we help clients with machinery */}
              <div className="card bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm">
                <h2 className="text-xl md:text-3xl font-bold font-display text-primary mb-6 break-words">How we help clients with machinery</h2>
                <p className="text-muted-foreground mb-8 text-sm md:text-base">
                  Every recycling plant needs the right equipment at the right stage. We guide clients from planning to installation so they do not waste money on the wrong machine.
                </p>

                <h3 className="font-semibold text-lg md:text-xl text-secondary mb-4">We support with:</h3>
                <ul className="space-y-3 text-muted-foreground text-sm md:text-base">
                  {[
                    "Machinery selection based on plant capacity",
                    "Shredding, dismantling, and sorting solutions",
                    "Material handling and dust control setup",
                    "Automation and plant layout planning",
                    "Safety, compliance, and workflow improvement",
                    "Energy-efficient equipment planning",
                    "Upgrade paths for future expansion"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-primary">• {item}</li>
                  ))}
                </ul>

                <div className="mt-10 bg-slate-50 border border-border rounded-2xl p-6 text-sm md:text-base text-slate-700">
                  <p><span className="text-slate-900 font-semibold">Our focus:</span> help clients choose equipment that is practical, efficient, and profitable — not just expensive.</p>
                </div>
              </div>

              {/* Performance Comparison */}
              <div className="card bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm">
                <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">Performance Comparison</h2>
                <p className="text-muted-foreground mb-8 text-sm md:text-base">A simple view of how the right machinery setup changes plant performance.</p>

                <div className="space-y-8">
                  {[
                    { label: "Processing speed", before: "55%", after: "90%" },
                    { label: "Material recovery", before: "60%", after: "88%" },
                    { label: "Downtime reduction", before: "30%", after: "12%" },
                  ].map((bar, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs md:text-sm mb-2 text-slate-700">
                        <span className="font-medium">{bar.label}</span>
                        <span>{bar.before} → <span className="text-emerald-600 font-semibold">{bar.after}</span></span>
                      </div>
                      <div className="h-4 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-slate-400 to-brandGreen rounded-full" style={{ width: bar.after }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Practical Points */}
            <div className="card bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm">
              <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">Practical points clients usually ask about</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { num: "A", label: "Does the plant match my target capacity?" },
                  { num: "B", label: "Can the layout reduce manual handling?" },
                  { num: "C", label: "Will the system support future growth?" }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 border border-border rounded-2xl p-5 shadow-sm">
                    <div className="text-xl md:text-3xl font-bold text-slate-900 mb-3">{item.num}</div>
                    <div className="text-muted-foreground text-sm md:text-base">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Machinery Workflow + Case Study */}
            <div className="grid gap-8">
              {/* Workflow */}
              <div className="card bg-card text-card-foreground border border-border rounded-3xl p-5 md:p-10 shadow-sm">
                <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">How the Machinery Workflow Works</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Raw battery input", "Safe dismantling", "Shredding / crushing", "Sorting & separation", "Recovered material output"].map((step, i) => (
                    <div key={i} className="bg-slate-50 border border-border text-slate-800 px-4 py.5 px-4 py-2.5 rounded-full text-xs md:text-sm font-medium shadow-sm">
                      {step}
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold text-base md:text-xl text-slate-900 mb-4 break-words">Suggested Machinery Database</h3>
                <div className="overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full min-w-[500px] text-xs md:text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-border">
                        <th className="text-left p-4 font-semibold text-slate-900">Machine</th>
                        <th className="text-left p-4 font-semibold text-slate-900">Use</th>
                        <th className="text-left p-4 font-semibold text-slate-900">Main Benefit</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border bg-white"><td className="p-4 font-medium text-slate-900">Dismantling station</td><td className="p-4 text-slate-700">Safe opening of packs</td><td className="p-4 text-slate-700">Reduces risk</td></tr>
                      <tr className="border-b border-border bg-white"><td className="p-4 font-medium text-slate-900">Shredder / crusher</td><td className="p-4 text-slate-700">Breaks material</td><td className="p-4 text-slate-700">Improves speed</td></tr>
                      <tr className="border-b border-border bg-white"><td className="p-4 font-medium text-slate-900">Separation unit</td><td className="p-4 text-slate-700">Sorts metals & black mass</td><td className="p-4 text-slate-700">Raises recovery</td></tr>
                      <tr className="bg-white"><td className="p-4 font-medium text-slate-900">Dust collection system</td><td className="p-4 text-slate-700">Controls particles</td><td className="p-4 text-slate-700">Improves safety</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Case Study */}
              <div className="card bg-card text-card-foreground border-l-4 border-brandGreen border border-y-border border-r-border rounded-3xl p-5 md:p-10 shadow-sm">
                <h2 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-6 break-words">Case Study: Mid-size Recycler in Gujarat</h2>
                <div className="space-y-6 text-muted-foreground text-sm md:text-base">
                  <p><strong className="text-slate-900">Problem:</strong> Poor output quality, frequent downtime, and uneven recovery due to unbalanced machinery layout.</p>
                  <p><strong className="text-slate-900">Our Solution:</strong> Redesigned the line, selected proper shredding & sorting setup, improved dust control.</p>
                  <p><strong className="text-slate-900">Result:</strong> Improved material recovery, reduced stoppages, and easier operation with smaller team.</p>
                </div>
              </div>
            </div>

            {/* Final Thought */}
            <div className="footer bg-gradient-to-br from-emerald-50 via-slate-50 to-white border border-border rounded-3xl p-6 md:p-10 text-center shadow-sm">
              <p className="text-base md:text-xl font-semibold text-slate-900 mb-4 break-words">
                In lithium-ion battery recycling, machinery is the backbone of the plant.
              </p>
              <p className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto">
                When the setup is right, the business becomes safer, faster, and more profitable.
              </p>
              <p className="mt-8 text-emerald-600 font-medium text-sm md:text-base">Partner with us to build a recycling plant that works smoothly from day one.</p>
            </div>

          </div>

          {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0 self-start" style={{ position: "sticky", top: "7rem" }}>
            <StickyContactForm />
          </aside>

        </div>
      </div>
    </div>
    </>
  );
};

export default LithiumBatteryMachinery;