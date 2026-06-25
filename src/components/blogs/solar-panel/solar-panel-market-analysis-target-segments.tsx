// src/components/blogs/solar-panel/solar-panel-market-analysis-target-segments.tsx
import React from 'react';

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
    <div className="w-full bg-gradient-to-b from-[#fcfaf6] via-[#faf7f2] to-[#f5f2ea] text-slate-800 font-[Poppins]">

      {/* HERO */}
      {/* <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-indigo-950 via-purple-900 to-orange-700 text-white px-5 sm:px-8 lg:px-10 py-14 md:py-20 shadow-2xl mb-8">
        <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-24 -right-24"></div>
        <div className="absolute w-52 h-52 bg-white/10 rounded-full -bottom-20 -left-20"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/10 text-sm font-semibold mb-6">
              Solar Panel Recycling | Market Analysis & Target Segments
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Where the Solar Recycling Market Turns Into Real Opportunity
            </h1>

            <p className="text-base md:text-lg text-white/90 leading-8">
              “The next big clean-energy story is not only about making solar power — it is also about recovering value when the panels retire.”
              <br /><br />
              We help clients understand where demand is coming from, which market segments matter most, and how to position their recycling business for stronger results.
            </p>

            <div className="mt-8 text-lg font-semibold">
              The smartest recycling plans do not chase every buyer — they focus on the right segment at the right time.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { number: "5", text: "key target market segments highlighted in this blog" },
              { number: "3", text: "main value streams: collection, recovery, and resale" },
              { number: "1", text: "clear market roadmap helps the client sell faster" },
              { number: "100%", text: "of business decisions get easier with segment clarity" },
            ].map((item, index) => (
              <div key={index} className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-5">
                <div className="text-4xl font-extrabold mb-2">{item.number}</div>
                <p className="text-sm text-white/90 leading-6">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* TOP GRID */}
      <div className="grid lg:grid-cols-1 gap-6 mb-8">
        {/* Why market analysis matters */}
        <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-5 text-indigo-950">Why market analysis matters in solar panel recycling</h2>
          <p className="text-lg text-slate-600 mb-4">
            A solar panel recycling business works best when it understands who needs the service, who buys the recovered material, and which part of the chain produces the most value.
          </p>
          <p className="text-slate-600 mb-4">
            Market analysis is not only about numbers. It is about understanding the people, businesses, and projects that are most likely to pay for collection, dismantling, recycling, reuse, or recovered material.
          </p>
          <p className="text-slate-600 mb-4">
            When the market is mapped properly, a client can focus on the most profitable and realistic segment instead of trying to serve everyone at once.
          </p>

          <div className="bg-gradient-to-r from-orange-50 via-purple-50 to-purple-100 border-l-4 border-orange-600 rounded-2xl p-5 my-6">
            <strong>Client-friendly insight:</strong> clear market focus helps a recycling business grow faster, speak to the right buyers, and avoid wasted effort.
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            {["Market clarity", "Segment focus", "Better pricing", "Stronger demand fit"].map((item, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-purple-100 text-purple-800 border border-purple-200 text-sm font-semibold">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* What the market is really looking for */}
        <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-5 text-indigo-950">What the market is really looking for</h2>
          <p className="text-slate-600 mb-4">
            Most buyers in this space want three things: reliable pickup, transparent sorting, and confidence that the recycled output has value.
          </p>
          <p className="text-slate-600 mb-6">
            On the supply side, installers, asset owners, EPC companies, and plant operators want a partner who can handle end-of-life panels without creating extra work.
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
      </div>

      {/* TABLE */}
      <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8 mb-8">
        <h2 className="text-3xl font-bold mb-5 text-indigo-950">Target market segments in solar panel recycling</h2>
        <p className="text-slate-600 mb-6">Below is a practical view of the customer groups that usually matter most.</p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full table-auto min-w-full">
            <thead className="bg-indigo-950 text-white">
              <tr>
                <th className="text-left px-6 py-4">Target segment</th>
                <th className="text-left px-6 py-4">What they need</th>
                <th className="text-left px-6 py-4">Why they matter</th>
              </tr>
            </thead>
            <tbody>
              {targetSegments.map((item, index) => (
                <tr key={index} className="border-t border-slate-200 hover:bg-purple-50 transition-colors">
                  <td className="px-6 py-5 font-semibold break-words whitespace-normal">{item.segment}</td>
                  <td className="px-6 py-5 text-slate-600 break-words whitespace-normal">{item.need}</td>
                  <td className="px-6 py-5 text-slate-600 break-words whitespace-normal">{item.matter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8 mb-8">
        <h2 className="text-3xl font-bold mb-5 text-indigo-950">How the market usually behaves</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
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
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Bar Graph */}
        <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-3 text-indigo-950">Bar graph: segment attractiveness</h2>
          <p className="text-slate-500 mb-8">Illustrative scores to show which segments usually feel strongest.</p>

          <div className="space-y-7">
            {bars.map((bar, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{bar.label}</span>
                  <span className="font-bold text-indigo-950">{bar.value}</span>
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
          <h2 className="text-3xl font-bold mb-3 text-indigo-950">Database view: market segmentation dashboard</h2>
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
            <strong>Database insight:</strong> when a client tracks segment size, intent, fit, and growth together, it becomes much easier to choose a winning market.
          </div>
        </section>
      </div>

      {/* Where value is created */}
      <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8 mb-8">
        <h2 className="text-3xl font-bold mb-5 text-indigo-950">Where value is created in the market</h2>
        <p className="text-slate-600 mb-6">
          In solar panel recycling, value does not come from one place. It comes from collection, sorting, processing, and the final sale of recovered materials.
          A strong market strategy understands all four.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-6">
          <div className="border border-[#e7e2da] rounded-2xl p-6 bg-gradient-to-b from-white to-[#fcfbf8]">
            <h3 className="text-xl font-semibold mb-4">1. Collection value</h3>
            <p className="text-[#606a76]">The first opportunity is often the collection service itself. Clients with reliable pickup and handling are easier to trust, especially when large volumes are involved.</p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">2. Processing value</h3>
            <p className="text-[#606a76]">Clean processing creates better output. When panels are dismantled and sorted properly, the recovered fractions become easier to sell.</p>
          </div>

          <div className="border border-[#e7e2da] rounded-2xl p-6 bg-gradient-to-b from-white to-[#fcfbf8]">
            <h3 className="text-xl font-semibold mb-4">3. Material resale value</h3>
            <p className="text-[#606a76]">Glass, aluminum, copper, and other recoverable parts can create an extra revenue stream if they are properly graded and sold to the right buyer.</p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">4. Reputation value</h3>
            <p className="text-[#606a76]">A business that handles solar recycling well builds trust, and trust brings repeat business, referrals, and stronger partnerships.</p>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#fff7ed] to-[#f5f3ff] border-l-6 border-[#d97706]">
          <strong>Client takeaway:</strong> the best market strategy is not only to find demand — it is to create value at every stage of the journey.
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-gradient-to-r from-[#fff7ed] to-[#ecfdf5] border border-[#fed7aa] rounded-3xl p-6 md:p-8 mb-8">
        <h2 className="text-3xl font-bold mb-5 text-indigo-950">Case study: a market strategy that helped a recycling company grow faster</h2>
        <p className="text-slate-600 mb-6">
          A solar recycling startup wanted to enter the market but was unsure whether to focus on installers, plant owners, or material buyers. 
          The team had a good technical setup, but the sales message was too broad.
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
          <strong>Case study lesson:</strong> a focused target market is usually stronger than a broad market message.
        </div>
      </section>

      {/* How we help + Why clients value */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-5 text-indigo-950">How we help clients choose the right segment</h2>
          <p className="text-slate-600 mb-4">
            We guide clients by looking at where the panel flow is coming from, how much the segment can pay, and how easy it is to serve that customer group well.
          </p>
          <p className="text-slate-600 mb-6">
            This helps the client enter the market with a plan instead of trial and error.
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
          <h2 className="text-3xl font-bold mb-5 text-indigo-950">Why clients value this approach</h2>
          <p className="text-slate-600 mb-4">
            Because it makes the business easier to explain, easier to sell, and easier to scale. Clients get a clearer picture of where the money is, where the supply comes from, and where the growth can happen next.
          </p>
          <p className="text-slate-600">
            It also helps them avoid common mistakes like chasing the wrong buyer, underpricing services, or focusing only on material resale.
          </p>
        </section>
      </div>

      {/* FAQ */}
      <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-indigo-950">Frequently asked questions</h2>
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
        <h2 className="text-4xl font-bold mb-6">Final Thoughts</h2>
        <p className="max-w-4xl mx-auto text-lg leading-9 text-white/90">
          The solar panel recycling market is growing into a real business opportunity, but the strongest results come from understanding who the customer is, what they need, and why they would choose one recycling partner over another.
        </p>
        <p className="max-w-4xl mx-auto text-lg leading-9 text-white/90 mt-6">
          When clients have the market map in front of them, the business becomes clearer, faster, and more convincing.
        </p>
        <div className="mt-10 text-2xl md:text-3xl font-bold">
          “The right segment turns a recycling idea into a real market.”
        </div>
      </section>

    </div>
  );
};




export default SolarPanelMarketAnalysisTargetSegments;