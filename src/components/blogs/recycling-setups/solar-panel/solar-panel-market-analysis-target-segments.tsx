// src/components/blogs/solar-panel/solar-panel-market-analysis-target-segments.tsx
import React from 'react';
import StickyContactForm from '@/components/StickyContactForm';

const SolarPanelMarketAnalysisTargetSegments: React.FC = () => {

  const targetSegments = [
    {
      segment: "Solar installers and EPC companies",
      need: "Collection of damaged, replaced, or retired panels",
      matter: "They are often the first source of panels entering the recycling stream",
    },
    {
      segment: "Asset owners and solar plant operators",
      need: "End-of-life module removal and responsible disposal",
      matter: "They manage large batches and need trusted service",
    },
    {
      segment: "OEMs and solar manufacturers",
      need: "Recovery, circularity, and material sourcing support",
      matter: "They care about recycled inputs and brand responsibility",
    },
    {
      segment: "Scrap traders and material buyers",
      need: "Sorted glass, aluminum, copper, and component fractions",
      matter: "They create an outlet for recovered materials",
    },
    {
      segment: "Government and industrial programs",
      need: "Structured recycling channels and compliance support",
      matter: "They support formal collection and market development",
    },
  ];

  const bars = [
    { label: "Solar installers / EPC companies", value: "94%" },
    { label: "Asset owners / plant operators", value: "91%" },
    { label: "Scrap traders / material buyers", value: "86%" },
    { label: "Manufacturers / OEMs", value: "83%" },
    { label: "Public programs / institutions", value: "76%" },
  ];

  const faqs = [
    {
      q: "Which segment is usually the best starting point?",
      a: "Many businesses start with EPC companies and asset owners because they can create more predictable panel flow.",
    },
    {
      q: "Do recovered materials matter as much as collection?",
      a: "Yes. Collection creates access, but recovered materials help improve long-term business value.",
    },
    {
      q: "Why is segmentation important in a recycling business?",
      a: "Because a focused market strategy helps the company speak to the right customer with the right offer.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#fcfaf6] via-[#faf7f2] to-[#f5f2ea] text-slate-800 font-[Poppins] overflow-x-hidden">
      
      {/* 3-COLUMN DESKTOP CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* LEFT & CENTER COLUMNS: PRIMARY MAIN CONTENT FLOW */}
        <main className="lg:col-span-2 w-full min-w-0 flex flex-col gap-8">
          
          {/* Why market analysis matters */}
          <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-indigo-950">Why market analysis matters in solar panel recycling</h2>
            <p className="text-base md:text-lg text-slate-600 mb-4">
              A solar panel recycling business works best when it understands who needs the service, who buys the recovered material, and which part of the chain produces the most value[cite: 3].
            </p>
            <p className="text-slate-600 mb-4">
              Market analysis is not only about numbers. It is about understanding the people, businesses, and projects that are most likely to pay for collection, dismantling, recycling, reuse, or recovered material[cite: 3].
            </p>
            <p className="text-slate-600 mb-4">
              When the market is mapped properly, a client can focus on the most profitable and realistic segment instead of trying to serve everyone at once[cite: 3].
            </p>

            <div className="bg-gradient-to-r from-orange-50 via-purple-50 to-purple-100 border-l-4 border-orange-600 rounded-2xl p-5 my-6">
              <strong>Client-friendly insight:</strong> clear market focus helps a recycling business grow faster, speak to the right buyers, and avoid wasted effort[cite: 3].
            </div>

            <div className="flex flex-wrap gap-3 mt-5">
              {["Market clarity", "Segment focus", "Better pricing", "Stronger demand fit"].map((item, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-purple-100 text-purple-800 border border-purple-200 text-sm font-semibold">
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* MOBILE ONLY CONTACT FORM PLACEMENT (Only displays on small screen breakpoints, hidden on desktop) */}
          <div className="block lg:hidden w-full">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200">
              <h3 className="text-xl font-bold mb-2 text-indigo-950">Connect With Our Experts</h3>
              <p className="text-xs text-slate-500 mb-4">Have questions regarding target segments or your solar recycling roadmap?</p>
              <StickyContactForm />
            </div>
          </div>

          {/* What the market is really looking for */}
          <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-indigo-950">What the market is really looking for</h2>
            <p className="text-slate-600 mb-4">
              Most buyers in this space want three things: reliable pickup, transparent sorting, and confidence that the recycled output has value[cite: 3].
            </p>
            <p className="text-slate-600 mb-6">
              On the supply side, installers, asset owners, EPC companies, and plant operators want a partner who can handle end-of-life panels without creating extra work[cite: 3].
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "For sellers", desc: "Easy pickup, fair pricing, and a dependable recycling partner." },
                { title: "For buyers", desc: "Clean material, clear grading, and consistent supply." },
                { title: "For investors", desc: "A market with long-term demand and a growing waste stream." },
                { title: "For operators", desc: "A process that is practical, compliant, and scalable." },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TABLE SECTION (Guarded against edge overflows via overflow-x-auto) */}
          <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8 overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-indigo-950">Target market segments in solar panel recycling</h2>
            <p className="text-slate-600 mb-6">Below is a practical view of the customer groups that usually matter most[cite: 3].</p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 w-full">
              <table className="w-full table-auto min-w-full">
                <thead className="bg-indigo-950 text-white">
                  <tr>
                    <th className="text-left px-6 py-4 whitespace-nowrap">Target segment</th>
                    <th className="text-left px-6 py-4 whitespace-nowrap">What they need</th>
                    <th className="text-left px-6 py-4 whitespace-nowrap">Why they matter</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {targetSegments.map((item, index) => (
                    <tr key={index} className="hover:bg-purple-50 transition-colors">
                      <td className="px-6 py-5 font-semibold text-sm md:text-base text-slate-900 break-words max-w-[180px]">{item.segment}</td>
                      <td className="px-6 py-5 text-slate-600 text-sm md:text-base break-words max-w-[220px]">{item.need}</td>
                      <td className="px-6 py-5 text-slate-600 text-sm md:text-base break-words max-w-[220px]">{item.matter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* STEPS */}
          <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-indigo-950">How the market usually behaves</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              {[
                { title: "New installations create future scrap", desc: "More solar capacity today means more panels will eventually need end-of-life handling." },
                { title: "Replacement cycles create steady demand", desc: "Damaged or underperforming panels must be removed, stored, and processed." },
                { title: "Recovered materials add value", desc: "Glass, aluminum, copper, and other recovered fractions can be sold." },
                { title: "Compliance pushes formalization", desc: "Businesses prefer documented and responsible recycling partners." },
              ].map((step, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-gradient-to-b from-purple-50 to-white p-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-900 to-orange-700 text-white flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-6">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BARS + DASHBOARD */}
          <div className="grid grid-cols-1 gap-6">
            {/* Bar Graph */}
            <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-indigo-950">Bar graph: segment attractiveness</h2>
              <p className="text-slate-500 mb-8">Illustrative scores to show which segments usually feel strongest[cite: 3].</p>

              <div className="space-y-7">
                {bars.map((bar, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2 gap-2">
                      <span className="font-medium text-sm sm:text-base text-slate-800 break-words">{bar.label}</span>
                      <span className="font-bold text-indigo-950 text-sm sm:text-base shrink-0">{bar.value}</span>
                    </div>
                    <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-900 via-violet-600 to-orange-700"
                        style={{ width: bar.value }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Database View */}
            <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-indigo-950">Database view: market segmentation dashboard</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  { title: "Segment size", desc: "How large the customer group is and how much panel flow it can generate." },
                  { title: "Buying intent", desc: "How ready the segment is to pay for collection or recycling services." },
                  { title: "Service fit", desc: "How well the business model matches the client’s recycling process." },
                  { title: "Growth outlook", desc: "How likely the segment is to expand over time." },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-orange-50 via-purple-50 to-purple-100 border-l-4 border-orange-600 rounded-2xl p-5 mt-6">
                <strong>Database insight:</strong> when a client tracks segment size, intent, fit, and growth together, it becomes much easier to choose a winning market[cite: 3].
              </div>
            </section>
          </div>

          {/* Where value is created */}
          <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-indigo-950">Where value is created in the market</h2>
            <p className="text-slate-600 mb-6">
              In solar panel recycling, value does not come from one place. It comes from collection, sorting, processing, and the final sale of recovered materials[cite: 3].
              A strong market strategy understands all four[cite: 3].
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-[#e7e2da] rounded-2xl p-6 bg-gradient-to-b from-white to-[#fcfbf8]">
                <h3 className="text-xl font-semibold mb-4">1. Collection value</h3>
                <p className="text-[#606a76]">The first opportunity is often the collection service itself. Clients with reliable pickup and handling are easier to trust, especially when large volumes are involved[cite: 3].</p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">2. Processing value</h3>
                <p className="text-[#606a76]">Clean processing creates better output. When panels are dismantled and sorted properly, the recovered fractions become easier to sell[cite: 3].</p>
              </div>

              <div className="border border-[#e7e2da] rounded-2xl p-6 bg-gradient-to-b from-white to-[#fcfbf8]">
                <h3 className="text-xl font-semibold mb-4">3. Material resale value</h3>
                <p className="text-[#606a76]">Glass, aluminum, copper, and other recoverable parts can create an extra revenue stream if they are properly graded and sold to the right buyer[cite: 3].</p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">4. Reputation value</h3>
                <p className="text-[#606a76]">A business that handles solar recycling well builds trust, and trust brings repeat business, referrals, and stronger partnerships[cite: 3].</p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#fff7ed] to-[#f5f3ff] border-l-6 border-[#d97706]">
              <strong>Client takeaway:</strong> the best market strategy is not only to find demand — it is to create value at every stage of the journey[cite: 3].
            </div>
          </section>

          {/* Case Study */}
          <section className="bg-gradient-to-r from-[#fff7ed] to-[#ecfdf5] border border-[#fed7aa] rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-indigo-950">Case study: a market strategy that helped a recycling company grow faster</h2>
            <p className="text-slate-600 mb-6">
              A solar recycling startup wanted to enter the market but was unsure whether to focus on installers, plant owners, or material buyers[cite: 3]. 
              The team had a good technical setup, but the sales message was too broad[cite: 3].
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { title: "The challenge", desc: "The company was trying to talk to every possible customer, which made the message weak and the sales cycle slow." },
                { title: "Our support", desc: "We helped them narrow the focus to EPC companies and asset owners first, then added material buyers as a second channel." },
                { title: "The result", desc: "The company improved lead quality, shortened sales conversations, and built a clearer market identity." },
              ].map((box, i) => (
                <div key={i} className="bg-white border border-[#f3d8b3] rounded-2xl p-6">
                  <h4 className="text-[#9a3412] font-semibold mb-3">{box.title}</h4>
                  <p className="text-[#7a4e23] text-[15px]">{box.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-[#111827] text-white">
              <strong>Case study lesson:</strong> a focused target market is usually stronger than a broad market message[cite: 3].
            </div>
          </section>

          {/* How we help + Why clients value */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-indigo-950">How we help clients choose the right segment</h2>
              <p className="text-slate-600 mb-4">
                We guide clients by looking at where the panel flow is coming from, how much the segment can pay, and how easy it is to serve that customer group well[cite: 3].
              </p>
              <p className="text-slate-600 mb-6">
                This helps the client enter the market with a plan instead of trial and error[cite: 3].
              </p>
              <div className="flex flex-wrap gap-3">
                {["Focus on real demand", "Choose the right buyer", "Build repeat business", "Reduce sales friction"].map((tag, i) => (
                  <span key={i} className="px-4 py-2.5 text-sm font-bold rounded-full bg-[#f5f3ff] border border-[#ddd6fe] text-[#5b21b6]">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-indigo-950">Why clients value this approach</h2>
              <p className="text-slate-600 mb-4">
                Because it makes the business easier to explain, easier to sell, and easier to scale[cite: 3]. Clients get a clearer picture of where the money is, where the supply comes from, and where the growth can happen next[cite: 3].
              </p>
              <p className="text-slate-600">
                It also helps them avoid common mistakes like chasing the wrong buyer, underpricing services, or focusing only on material resale[cite: 3].
              </p>
            </section>
          </div>

          {/* FAQ */}
          <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-950">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                  <p className="text-slate-600 leading-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CLOSING */}
          <section className="rounded-[30px] bg-gradient-to-br from-[#0f172a] via-[#0f766e] to-[#f97316] text-white text-center px-6 sm:px-10 py-16 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Final Thoughts</h2>
            <p className="max-w-4xl mx-auto text-base md:text-lg leading-8 md:text-white/90">
              The solar panel recycling market is growing into a real business opportunity, but the strongest results come from understanding who the customer is, what they need, and why they would choose one recycling partner over another[cite: 3].
            </p>
            <p className="max-w-4xl mx-auto text-base md:text-lg leading-8 md:text-white/90 mt-6">
              When clients have the market map in front of them, the business becomes clearer, faster, and more convincing[cite: 3].
            </p>
            <div className="mt-10 text-xl md:text-3xl font-bold">
              “The right segment turns a recycling idea into a real market.”[cite: 3]
            </div>
          </section>
        </main>

        {/* RIGHT COLUMN: DESKTOP STATIC CARD SIDEBAR (Stays firmly in the grid flow, completely non-sticky) */}
        <aside className="hidden lg:block lg:col-span-1 w-full h-auto bg-white p-6 rounded-[26px] shadow-xl border border-gray-200">
          <h3 className="text-xl font-bold mb-2 text-indigo-950">Connect With Our Experts</h3>
          <p className="text-sm text-slate-500 mb-6">Have questions regarding target segments or your solar recycling roadmap?</p>
          <StickyContactForm />
        </aside>

      </div>
    </div>
  );
};

export default SolarPanelMarketAnalysisTargetSegments;