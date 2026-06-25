import React, { useEffect } from 'react';
import Seo from "@/components/Seo";
import Chart from 'chart.js/auto';

const TyreMachinery: React.FC = () => {

  useEffect(() => {
    // Daily Processing Capacity Chart
    new Chart(document.getElementById('capacityChart') as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: ['Unplanned Setup', 'Optimized Setup'],
        datasets: [{
          label: 'Daily Production (Tons)',
          data: [4, 10],
          backgroundColor: ['#f59e0b', '#0f766e'],
          borderRadius: 8,
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } } }
    });

    // Recovery Efficiency Chart
    new Chart(document.getElementById('recoveryChart') as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: ['Unplanned Setup', 'Optimized Setup'],
        datasets: [{
          label: 'Recovery Rate (%)',
          data: [72, 91],
          backgroundColor: ['#f59e0b', '#0f766e'],
          borderRadius: 8,
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } } }
    });
  }, []);

  return (
    <>
      <Seo
        title="Best Machinery for Tyre Waste Recycling Plant in India 2026"
        description="Complete guide to choosing the right machinery for tyre recycling plant. Learn about tyre shredders, granulators, crumb rubber machines, steel separators, plant layout, and how to improve recovery rate and production efficiency."
        keywords={[
          "Tyre Recycling Plant Machinery",
          "Best Tyre Shredder Machine India",
          "Crumb Rubber Machinery",
          "Tyre Granulator Machine",
          "Tyre Waste Recycling Equipment",
          "Tyre Recycling Plant Setup Machinery",
          "Steel Wire Separator for Tyre Recycling",
          "How to Choose Machinery for Tyre Recycling",
          "Tyre Shredding and Granulation Machine",
          "Tyre Recycling Plant Layout and Machinery",
          "Rubber Powder Making Machine",
          "Tyre Recycling Machinery Cost India"
        ]}
        url="https://eprnexuss.com/blog/tyre-machinery"
        type="article"
      />
    <div className="blog-container font-['Poppins'] bg-gradient-to-b from-[#eff6ff] via-[#f8fafc] to-[#f4f7fb] text-[#1f2937] pb-12">

      {/* HERO */}
      <section className="hero relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#0f766e] to-[#f59e0b] text-white rounded-[30px] px-2 lg:px-8 md:px-12 py-4 md:py-20 mb-8 shadow-2xl">
        <div className="absolute w-[260px] h-[260px] bg-white/10 rounded-full -top-20 -right-20" />
        <div className="absolute w-[180px] h-[180px] bg-white/10 rounded-full -bottom-16 -left-12" />
        <div className="hero-inner relative z-10 text-center max-w-4xl mx-auto">
          <div className="eyebrow inline-block px-5 py-2.5 rounded-full border border-white/20 bg-white/10 text-sm font-semibold tracking-widest mb-6">
            Advanced Tyre Waste Recycling Machinery Solutions
          </div>
          <h1 className=" text-lg md:text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            We Match The Right Machine To Your Business Goal
          </h1>
          <p className="md:text-lg md:text-xl leading-relaxed text-white/95 max-w-3xl mx-auto">
            From tyre shredding and granulation to steel recovery and plant optimization, we help clients build efficient recycling systems that improve production, reduce downtime, and support long-term growth.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-2 md:px-6">

        {/* Growing Importance */}
        <section className="card bg-white rounded-3xl p-2 md:p-8 shadow-xl border border-[#e5e7eb] mb-8">
          <h2 className="text-lg md:text-3xl font-bold mb-6 text-[#0f172a]">The Growing Importance of Tyre Waste Recycling</h2>
          <p className="text-[#5b6472] mb-6">
            Tyre waste has become one of the fastest-growing environmental and industrial challenges. Every year, millions of tyres reach the end of their usable life, creating a major opportunity for recycling businesses.
          </p>
          <p className="text-[#5b6472] mb-6">Modern tyre recycling plants can produce:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#5b6472] mb-6">
            <li>Crumb rubber for sports surfaces and flooring</li>
            <li>Rubber granules for industrial applications</li>
            <li>Recovered steel wire</li>
            <li>Alternative fuel material</li>
            <li>Reusable raw materials for manufacturing industries</li>
          </ul>
          <div className="highlight p-2 md:p-6 bg-gradient-to-r from-amber-50 to-white border-l-4 border-amber-500 rounded-2xl">
            A successful tyre recycling business starts with proper machinery planning, balanced production flow, and efficient recovery systems.
          </div>
        </section>

        {/* Why Machinery Selection Matters */}
        <section className="card bg-white rounded-3xl p-2 md:p-8 shadow-xl border border-[#e5e7eb] mb-8">
          <h2 className="text-lg md:text-3xl font-bold mb-6 text-[#0f172a]">Why Machinery Selection Matters in Tyre Recycling</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[#5b6472] mb-6">
                Tyres are strong and complex materials. Without the right equipment, recycling plants often struggle with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#5b6472]">
                <li>Low production speed</li>
                <li>Frequent breakdowns</li>
                <li>High electricity usage</li>
                <li>Uneven output quality</li>
                <li>Poor recovery efficiency</li>
                <li>High maintenance cost</li>
              </ul>
            </div>
            <div className="highlight p-2 md:p-6 bg-gradient-to-r from-emerald-50 to-white border-l-4 border-emerald-600 rounded-2xl">
              The right machinery setup transforms tyre waste into a profitable industrial opportunity.
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="card bg-white rounded-3xl p-2 md:p-8 shadow-xl border border-[#e5e7eb] mb-8">
          <h2 className="text-lg md:text-3xl font-bold mb-6 text-[#0f172a]">How We Help Clients with Tyre Recycling Machinery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Project Understanding", "We study production goals, capacity, and target output before recommending machinery."],
              ["Machinery Selection", "We recommend shredders, granulators, separators that match your requirements."],
              ["Plant Layout Planning", "Proper layout reduces bottlenecks and improves workflow."],
              ["Capacity Matching", "We balance machine capacities to avoid delays."],
              ["Operational Optimization", "We help improve recovery rates and consistency."],
              ["Long-Term Support", "Maintenance planning and future scalability guidance."]
            ].map(([title, desc], i) => (
              <div key={i} className="p-2 md:p-6 bg-[#f8fafc] rounded-2xl border border-[#e5e7eb]">
                <h3 className="font-semibold text-lg mb-3 text-[#0f172a]">{title}</h3>
                <p className="text-[#5b6472] text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Flow */}
        <section className="card bg-white rounded-3xl p-2 md:p-8 shadow-xl border border-[#e5e7eb] mb-8">
          <h2 className="text-lg md:text-3xl font-bold mb-6 text-[#0f172a]">Typical Tyre Waste Recycling Process Flow</h2>
          <div className="bg-[#0b1220] text-white p-2 md:p-8 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto">
            Used Tyres → Primary Tyre Shredder → Secondary Crusher → Granulation System →<br />
            Magnetic Steel Separation → Screening & Sorting → Final Output: Crumb Rubber / Steel / Fibre
          </div>
        </section>

        {/* Performance Graphs */}
        {/* Performance Graphs - Fully Responsive */}
<section className="card bg-white rounded-3xl p-2 md:p-8 shadow-xl border border-[#e5e7eb] mb-8">
  <h2 className="text-lg md:text-3xl font-bold mb-8 text-[#0f172a]">Plant Performance Comparison</h2>
  
  <div className="grid md:grid-cols-2 gap-8">
    
    {/* Daily Processing Capacity */}
    <div>
      <h3 className="font-semibold mb-4 text-center md:text-left">Daily Processing Capacity</h3>
      <div className="relative md:h-72 md:h-80 bg-slate-50 rounded-2xl p-4 border border-slate-100">
        <canvas id="capacityChart" className="w-full h-full"></canvas>
      </div>
    </div>

    {/* Material Recovery Efficiency */}
    <div>
      <h3 className="font-semibold mb-4 text-center md:text-left">Material Recovery Efficiency</h3>
      <div className="relative md:h-72 md:h-80 bg-slate-50 rounded-2xl p-4 border border-slate-100">
        <canvas id="recoveryChart" className="w-full h-full"></canvas>
      </div>
    </div>
  </div>
</section>

        {/* Case Study */}
        <section className="card bg-white rounded-3xl p-2 md:p-8 shadow-xl border border-[#e5e7eb] mb-8">
          <h2 className="text-lg md:text-3xl font-bold mb-6 text-[#0f172a]">Case Study: Improving Efficiency in a Tyre Recycling Plant</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Main Challenges", "Frequent breakdowns, low recovery, high maintenance"],
              ["Our Approach", "Analyzed line, redesigned flow, optimized separators"],
              ["Results", "Daily output increased from 5 to 9 tons, recovery from 74% to 89%"]
            ].map(([title, desc], i) => (
              <div key={i} className="p-2 md:p-6 bg-[#f8fafc] rounded-2xl border border-[#e5e7eb]">
                <h4 className="font-bold mb-3">{title}</h4>
                <p className="text-[#5b6472]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="card bg-white rounded-3xl p-2 md:p-8 shadow-xl border border-[#e5e7eb] mb-8">
          <h2 className="text-lg md:text-3xl font-bold mb-6 text-[#0f172a]">Benefits Clients Receive</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Better Production Control", "Balanced machinery improves stability"],
              ["Reduced Downtime", "Efficient layouts reduce interruptions"],
              ["Higher Recovery Value", "Better separation improves material value"],
              ["Lower Operational Risk", "Smart planning avoids costly mistakes"],
              ["Long-Term Scalability", "Easy to expand in future"],
              ["Improved Profitability", "Efficient machinery boosts margins"]
            ].map(([title, desc], i) => (
              <div key={i} className="p-2 md:p-6 bg-[#f8fafc] rounded-2xl border border-[#e5e7eb]">
                <h4 className="font-semibold mb-3 text-[#0f172a]">{title}</h4>
                <p className="text-sm text-[#5b6472]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="card bg-white rounded-3xl p-2 md:p-8 shadow-xl border border-[#e5e7eb] mb-8">
          <h2 className="text-lg md:text-3xl font-bold mb-8 text-[#0f172a]">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              ["What type of machinery is used in tyre waste recycling?", "Tyre shredders, crushers, granulators, magnetic separators, conveyors, and screening systems."],
              ["How do I know which machine is right for my business?", "It depends on your target output, daily capacity, space, budget, and desired end products."],
              ["Can an existing tyre recycling plant be improved?", "Yes. Many plants can be significantly improved by balancing capacity and optimizing flow."],
              ["Why is recovery efficiency important?", "Higher recovery means more usable material and better profitability."],
            ].map(([q, a], i) => (
              <div key={i} className="p-2 md:p-6 bg-[#f8fafc] rounded-2xl border border-[#e5e7eb]">
                <h4 className="font-bold mb-3 text-[#0f172a]">{q}</h4>
                <p className="text-[#5b6472]">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="closing relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#0f766e] to-[#f59e0b] text-white rounded-[30px] px-2 lg:px-8 md:px-12 py-16 max-w-6xl mx-auto">
          <div className="absolute w-[260px] h-[260px] bg-white/10 rounded-full -top-20 -right-20" />
          <div className="absolute w-[180px] h-[180px] bg-white/10 rounded-full -bottom-16 -left-12" />
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <h2 className="text-lg md:text-4xl font-extrabold mb-6">Build a Smarter Tyre Recycling Plant</h2>
            <p className="text-lg text-white/90 mb-8">
              Whether you are starting new or upgrading an existing plant, the right machinery strategy can dramatically improve your efficiency and profitability.
            </p>
            <button className="bg-white text-[#0f172a] font-bold px-10 py-4 rounded-2xl text-lg hover:bg-amber-400 transition">
              Get Machinery Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default TyreMachinery;