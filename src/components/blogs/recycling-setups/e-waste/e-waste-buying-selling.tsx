import StickyContactForm from '@/components/StickyContactForm';

export default function EWasteBuyingSellingBlog() {
  return (
    <div
      className="min-h-screen"
      style={{
        overflowX: "clip",
        fontFamily: "'Poppins', sans-serif",
        background: 'linear-gradient(180deg, #eef4ff 0%, #f8fafc 35%, #f4f7fb 100%)',
        color: '#1f2937',
        lineHeight: '1.8',
      }}
    >
      {/* Blog Container */}
      <div className="w-full max-w-[1180px] mx-auto px-1 pt-[34px] pb-[60px]">

        {/* Hero */}
        <section
          className="relative overflow-hidden text-white px-1 sm:px-[20px] py-12 sm:py-[78px] rounded-[30px] mb-[30px]"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 52%, #0ea5e9 100%)',
            boxShadow: '0 12px 35px rgba(15,23,42,0.08)',
          }}
        >
          {/* decorative circles */}
          <span
            className="absolute rounded-full"
            style={{
              width: 260, height: 260,
              top: -80, right: -80,
              background: 'rgba(255,255,255,0.09)',
            }}
          />
          <span
            className="absolute rounded-full"
            style={{
              width: 180, height: 180,
              bottom: -60, left: -50,
              background: 'rgba(255,255,255,0.09)',
            }}
          />
          <div className="relative z-10 w-full max-w-[900px] mx-auto text-center break-words">
            <div
              className="inline-block px-3 py-2 rounded-full text-[13px] font-semibold tracking-wide mb-[18px] max-w-full"
              style={{
                background: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.18)',
              }}
            >
              E-Waste Recycling Business | Scrap Buying, Selling &amp; Product Movement
            </div>
            <h1
              className="font-extrabold mb-[18px]"
              style={{ fontSize: 'clamp(34px, 4.3vw, 58px)', lineHeight: 1.08 }}
            >
              How We Help Clients Buy and Sell Scrap and Products in E-Waste Recycling Plant
            </h1>
            <p style={{ fontSize: 'clamp(17px, 1.55vw, 21px)', color: 'rgba(255,255,255,0.94)', maxWidth: 850, margin: '0 auto' }}>
              <strong>Turning scrap into smart value — and products into better profit.</strong>
              <br /><br />
              In e-waste recycling, success is not only about processing material.
              It is also about buying the right scrap, finding the right buyers, and moving the right products at the right time.
            </p>
            <div className="mt-6 text-[18px] font-semibold text-white" style={{ opacity: 0.95 }}>
              A well-planned buying and selling system can turn a recycling plant into a stronger, faster-growing business.
            </div>
          </div>
        </section>

        {/* Main layout: content + sticky sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Main content column */}
          <div className="flex-1 min-w-0 w-full">

            {/* 2-col grid: Why this matters + What we do */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
              {/* Why this part matters */}
              <section
                className="bg-white rounded-[22px] p-4 sm:p-8 border mb-0"
                style={{ boxShadow: '0 12px 35px rgba(15,23,42,0.08)', borderColor: 'rgba(229,231,235,0.8)' }}
              >
                <h2
                  className="font-bold text-[#0f172a] mb-[14px]"
                  style={{ fontSize: 'clamp(26px, 2.6vw, 38px)', lineHeight: 1.15 }}
                >
                  Why this part of the business matters
                </h2>
                <p className="text-[#334155] text-[18px] mb-[14px]">
                  Many clients think an e-waste recycling plant is only about collection and dismantling.
                  In reality, the business becomes truly profitable when scrap and output products move smoothly in the market.
                </p>
                <p className="text-[#5b6472] text-[17px] mb-[14px]">
                  We help clients not only set up the plant, but also understand how to buy scrap at the right rate,
                  classify it correctly, and sell recovered products to the right channel.
                </p>
                <p className="text-[#5b6472] text-[17px] mb-[14px]">
                  This creates a healthy cycle: better input, better processing, better output, and better revenue.
                </p>
                <div
                  className="rounded-[18px] p-[22px] my-[22px] border-l-[6px] border-[#0ea5e9]"
                  style={{ background: 'linear-gradient(135deg, #ecfeff 0%, #e0f2fe 50%, #eff6ff 100%)' }}
                >
                  <strong className="text-[#0f172a]">Simple client message:</strong> if the plant buys wisely and sells smartly, the margins become more stable and the project becomes easier to scale.
                </div>
                <div className="flex flex-wrap gap-[8px] mt-4">
                  {['Scrap sourcing', 'Material grading', 'Market linkage', 'Sales planning'].map((pill) => (
                    <span
                      key={pill}
                      className="text-[13px] font-semibold px-[14px] py-2 rounded-full"
                      style={{ background: '#eef2ff', color: '#3730a3', border: '1px solid #c7d2fe' }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </section>

              {/* What we do */}
              <section
                className="bg-white rounded-[22px] p-4 sm:p-8 border mb-0"
                style={{ boxShadow: '0 12px 35px rgba(15,23,42,0.08)', borderColor: 'rgba(229,231,235,0.8)' }}
              >
                <h2
                  className="font-bold text-[#0f172a] mb-[14px]"
                  style={{ fontSize: 'clamp(26px, 2.6vw, 38px)', lineHeight: 1.15 }}
                >
                  What we do for the client
                </h2>
                <p className="text-[#5b6472] text-[17px] mb-[14px]">
                  We support the client across both sides of the business:
                  buying material at the right value and selling recovered products through the right route.
                </p>
                <p className="text-[#5b6472] text-[17px] mb-[14px]">
                  This includes scrap identification, buyer-seller coordination, pricing guidance, product classification,
                  and movement planning.
                </p>
                <div
                  className="rounded-[18px] p-[22px] my-[22px] border-l-[6px] border-[#0ea5e9]"
                  style={{ background: 'linear-gradient(135deg, #ecfeff 0%, #e0f2fe 50%, #eff6ff 100%)' }}
                >
                  <strong className="text-[#0f172a]">Our goal:</strong> help the client reduce waste in the business process, not just in the plant process.
                </div>
                <p className="text-[13px] text-[#64748b] mt-[10px]">
                  A recycling business grows faster when the commercial side is as organized as the technical side.
                </p>
              </section>
            </div>

            {/* Full buying & selling cycle */}
            <section
              className="bg-white rounded-[22px] p-4 sm:p-8 border mb-6"
              style={{ boxShadow: '0 12px 35px rgba(15,23,42,0.08)', borderColor: 'rgba(229,231,235,0.8)' }}
            >
              <h2
                className="font-bold text-[#0f172a] mb-[14px]"
                style={{ fontSize: 'clamp(26px, 2.6vw, 38px)', lineHeight: 1.15 }}
              >
                The full buying and selling cycle in an e-waste plant
              </h2>
              <p className="text-[#5b6472] text-[17px] mb-[14px]">
                To make the process easier for clients, we explain the entire commercial flow in a simple and practical way.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] mt-[18px]">
                {[
                  { num: 1, title: 'Source the scrap', text: 'We help clients identify where e-waste scrap can come from and how to build a reliable collection network.' },
                  { num: 2, title: 'Check quality', text: 'Scrap is inspected, sorted, and grouped so the client knows what has real value and what needs treatment.' },
                  { num: 3, title: 'Find the right buyer', text: 'Recovered products and recyclable fractions are matched with the right market, trader, or industrial buyer.' },
                  { num: 4, title: 'Close the deal', text: 'Pricing, dispatch, documentation, and payment flow are planned so the transaction stays smooth and clear.' },
                ].map(({ num, title, text }) => (
                  <div key={num} className="border border-[#e5e7eb] rounded-[18px] p-[18px] bg-white sm:min-h-[140px]">
                    <div
                      className="w-[38px] h-[38px] flex items-center justify-center rounded-full text-white font-bold mb-3"
                      style={{ background: 'linear-gradient(135deg, #1d4ed8, #0ea5e9)' }}
                    >
                      {num}
                    </div>
                    <h4 className="text-[17px] font-semibold text-[#0f172a] mb-2">{title}</h4>
                    <p className="text-[14px] text-[#5b6472] m-0">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Types of scrap table */}
            <section
              className="bg-white rounded-[22px] p-4 sm:p-8 border mb-6"
              style={{ boxShadow: '0 12px 35px rgba(15,23,42,0.08)', borderColor: 'rgba(229,231,235,0.8)' }}
            >
              <h2
                className="font-bold text-[#0f172a] mb-[14px]"
                style={{ fontSize: 'clamp(26px, 2.6vw, 38px)', lineHeight: 1.15 }}
              >
                Types of scrap and products we help clients handle
              </h2>
              <p className="text-[#5b6472] text-[17px] mb-[14px]">
                Every plant deals with different material streams. The business becomes easier when those streams are classified properly.
              </p>
              <div className="overflow-x-auto rounded-[18px] border border-[#e5e7eb] mt-[18px]">
                <table className="w-full border-collapse bg-white" style={{ minWidth: 760 }}>
                  <thead>
                    <tr>
                      {['Material Type', 'How it is handled', 'Why it matters for business'].map((h) => (
                        <th key={h} className="bg-[#0f172a] text-white text-left px-[18px] py-4 text-[15px] tracking-wide">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Mixed e-waste scrap', 'Collected, sorted, and graded before processing', 'Helps determine the real recoverable value'],
                      ['Dismantled plastic parts', 'Separated by quality and color', 'Useful for downstream recycling buyers'],
                      ['Metal fractions', 'Sorted and sold to metal recyclers or traders', 'Often one of the strongest revenue streams'],
                      ['PCBs and high-value components', 'Handled with careful grading and proper channeling', 'Can generate better value when sold correctly'],
                      ['Copper, aluminium, and wire scrap', 'Separated and priced by purity and weight', 'Directly affects plant profitability'],
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-[#f8fbff]">
                        {row.map((cell, j) => (
                          <td key={j} className="px-[18px] py-[15px] border-t border-[#e5e7eb] text-[15px] text-[#334155] align-top">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Bar graph + database grid */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
              {/* Bar graph */}
              <section
                className="bg-white rounded-[22px] p-4 sm:p-[30px] border"
                style={{ boxShadow: '0 12px 35px rgba(15,23,42,0.08)', borderColor: 'rgba(229,231,235,0.8)' }}
              >
                <h2 className="text-[24px] font-bold text-[#0f172a] mb-2 leading-[1.2]">Bar graph: value focus by material stream</h2>
                <p className="text-[#5b6472] mb-[18px] text-[15px]">
                  This visual shows which material categories often deserve more attention in sales planning.
                </p>
                <div className="flex flex-col gap-[18px]">
                  {[
                    { label: 'Copper-bearing material', width: '95%', val: '95%' },
                    { label: 'PCBs and components', width: '88%', val: '88%' },
                    { label: 'Aluminium fractions', width: '76%', val: '76%' },
                    { label: 'Plastic recyclables', width: '64%', val: '64%' },
                    { label: 'Low-grade mixed scrap', width: '48%', val: '48%' },
                  ].map(({ label, width, val }) => (
                    <div
                      key={label}
                      className="grid items-center gap-[14px]"
                      style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr) 64px' }}
                    >
                      <div className="text-[15px] font-semibold text-[#1f2937]">{label}</div>
                      <div className="h-4 bg-[#e5e7eb] rounded-full overflow-hidden relative">
                        <div
                          className="h-full rounded-full"
                          style={{ width, background: 'linear-gradient(90deg, #1d4ed8 0%, #0ea5e9 50%, #22c55e 100%)' }}
                        />
                      </div>
                      <div className="text-[14px] font-bold text-[#0f172a] text-right">{val}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[13px] text-[#64748b] mt-[10px]">
                  Higher value does not always mean easier sales. We help clients match each material with the right buyer and the right pricing logic.
                </p>
              </section>

              {/* Database view */}
              <section
                className="bg-white rounded-[22px] p-4 sm:p-[30px] border"
                style={{ boxShadow: '0 12px 35px rgba(15,23,42,0.08)', borderColor: 'rgba(229,231,235,0.8)' }}
              >
                <h2 className="text-[24px] font-bold text-[#0f172a] mb-2 leading-[1.2]">Database view: sales readiness tracker</h2>
                <p className="text-[#5b6472] mb-[18px] text-[15px]">
                  A simple database helps clients understand whether the material is ready for sale or still needs work.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[18px]">
                  {[
                    { title: 'Scrap status', text: 'Identified, weighed, sorted, and checked for quality before market movement.' },
                    { title: 'Buyer status', text: 'Trader, recycler, or industrial buyer shortlisted based on material type.' },
                    { title: 'Pricing status', text: 'Rate benchmark reviewed with material purity, demand, and quantity in mind.' },
                    { title: 'Dispatch status', text: 'Transport, invoice, and loading process aligned for smooth delivery.' },
                  ].map(({ title, text }) => (
                    <div
                      key={title}
                      className="border border-[#e5e7eb] rounded-[18px] p-[18px]"
                      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)' }}
                    >
                      <h4 className="text-[16px] font-semibold text-[#0f172a] mb-[10px]">{title}</h4>
                      <p className="text-[14px] text-[#5b6472] m-0">{text}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="rounded-[18px] p-[22px] mt-[18px] border-l-[6px] border-[#0ea5e9]"
                  style={{ background: 'linear-gradient(135deg, #ecfeff 0%, #e0f2fe 50%, #eff6ff 100%)' }}
                >
                  <strong className="text-[#0f172a]">Why this matters:</strong> when the database is clear, the client sees the business more like a system and less like guesswork.
                </div>
              </section>
            </div>

            {/* How we help clients sell */}
            <section
              className="bg-white rounded-[22px] p-4 sm:p-8 border mb-6"
              style={{ boxShadow: '0 12px 35px rgba(15,23,42,0.08)', borderColor: 'rgba(229,231,235,0.8)' }}
            >
              <h2
                className="font-bold text-[#0f172a] mb-[14px]"
                style={{ fontSize: 'clamp(26px, 2.6vw, 38px)', lineHeight: 1.15 }}
              >
                How we help clients sell recovered products better
              </h2>
              <p className="text-[#5b6472] text-[17px] mb-[14px]">
                A recycling plant creates output products after segregation and processing.
                These outputs need the right commercial strategy to deliver the best value.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" >
                <div>
                  <h3 className="text-[22px] font-semibold text-[#0f172a] mt-5 mb-3">Better product positioning</h3>
                  <p className="text-[#5b6472] text-[17px] mb-[14px]">
                    We help clients understand which output should go to which buyer group.
                    For example, one category may suit a scrap trader, while another may suit a direct industrial buyer.
                  </p>
                  <h3 className="text-[22px] font-semibold text-[#0f172a] mt-5 mb-3">Better price confidence</h3>
                  <p className="text-[#5b6472] text-[17px] mb-[14px]">
                    Pricing becomes easier when the client understands quantity, quality, and market demand together.
                    That is why we guide them with a practical view, not just a rate sheet.
                  </p>
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold text-[#0f172a] mt-5 mb-3">Better transaction flow</h3>
                  <p className="text-[#5b6472] text-[17px] mb-[14px]">
                    We also support the selling process with documentation planning, dispatch planning, and payment coordination.
                    This reduces confusion and improves trust.
                  </p>
                  <h3 className="text-[22px] font-semibold text-[#0f172a] mt-5 mb-3">Better business repeatability</h3>
                  <p className="text-[#5b6472] text-[17px] mb-[14px]">
                    Once the process is organized, the client can repeat the same model again and again,
                    which supports long-term growth.
                  </p>
                </div>
              </div>
              <div
                className="rounded-[18px] p-[22px] my-[22px] border-l-[6px] border-[#0ea5e9]"
                style={{ background: 'linear-gradient(135deg, #ecfeff 0%, #e0f2fe 50%, #eff6ff 100%)' }}
              >
                <strong className="text-[#0f172a]">Client benefit:</strong> a well-managed selling process converts plant output into reliable revenue, not just leftover material.
              </div>
            </section>

            {/* Commercial journey table */}
            <section
              className="bg-white rounded-[22px] p-4 sm:p-8 border mb-6"
              style={{ boxShadow: '0 12px 35px rgba(15,23,42,0.08)', borderColor: 'rgba(229,231,235,0.8)' }}
            >
              <h2
                className="font-bold text-[#0f172a] mb-[14px]"
                style={{ fontSize: 'clamp(26px, 2.6vw, 38px)', lineHeight: 1.15 }}
              >
                Graph-based view of the commercial journey
              </h2>
              <p className="text-[#5b6472] text-[17px] mb-[14px]">
                Here is a simple visual explanation of how value moves through the business.
              </p>
              <div className="overflow-x-auto rounded-[18px] border border-[#e5e7eb] mt-[18px]">
                <table className="w-full border-collapse bg-white" style={{ minWidth: 760 }}>
                  <thead>
                    <tr>
                      {['Business Stage', 'Activity', 'Commercial Outcome'].map((h) => (
                        <th key={h} className="bg-[#0f172a] text-white text-left px-[18px] py-4 text-[15px] tracking-wide">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Collection', 'Scrap is sourced from suppliers, aggregators, or bulk generators', 'Input material reaches the plant'],
                      ['Sorting', 'Material is separated by type and value', 'Better pricing clarity'],
                      ['Processing', 'Useful fractions are recovered from the waste stream', 'Marketable output is created'],
                      ['Selling', 'Products are matched with the right buyers', 'Revenue is realized'],
                      ['Reinvestment', 'Profit is used to improve plant performance', 'Business growth becomes stronger'],
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-[#f8fbff]">
                        {row.map((cell, j) => (
                          <td key={j} className="px-[18px] py-[15px] border-t border-[#e5e7eb] text-[15px] text-[#334155] align-top">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Case study */}
            <section
              className="rounded-[22px] p-4 sm:p-8 border mb-6"
              style={{
                background: 'linear-gradient(135deg, #fff7ed 0%, #fff1d6 100%)',
                border: '1px solid #fde68a',
                boxShadow: '0 12px 35px rgba(15,23,42,0.08)',
              }}
            >
              <h2
                className="font-bold mb-[14px]"
                style={{ fontSize: 'clamp(26px, 2.6vw, 38px)', lineHeight: 1.15, color: '#7c2d12' }}
              >
                Case study: helping a client turn scrap into sales
              </h2>
              <p className="text-[#5b6472] text-[17px] mb-[14px]">
                A mid-sized e-waste recycling client had a plant, but the business was not performing well.
                The reason was simple: scrap was being bought without a clear grading process,
                and recovered materials were being sold to random buyers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-[18px]">
                {[
                  { title: 'The challenge', text: 'The client lacked a clear system for identifying high-value fractions, and pricing varied from one deal to another.', titleColor: '#9a3412' },
                  { title: 'The solution', text: 'We helped create a scrap classification method, a buyer shortlist, and a simple sales tracker for output products.', titleColor: '#9a3412' },
                  { title: 'The result', text: 'The business became more organized, selling decisions improved, and the client gained better control over cash flow.', titleColor: '#9a3412' },
                ].map(({ title, text, titleColor }) => (
                  <div key={title} className="bg-white border border-[#fbd38d] rounded-[18px] p-[18px]">
                    <h4 className="text-[16px] font-semibold mb-2" style={{ color: titleColor }}>{title}</h4>
                    <p className="m-0 text-[14px] text-[#6b4b21]">{text}</p>
                  </div>
                ))}
              </div>
              <div
                className="rounded-[18px] p-[22px] mt-[18px] border-l-[6px] border-[#0ea5e9]"
                style={{ background: 'linear-gradient(135deg, #ecfeff 0%, #e0f2fe 50%, #eff6ff 100%)' }}
              >
                <strong className="text-[#0f172a]">Lesson from the case:</strong> profit improves when buying and selling are planned with the same level of care as plant operations.
              </div>
            </section>

            {/* Additional topics */}
            <section
              className="bg-white rounded-[22px] p-4 sm:p-8 border mb-6"
              style={{ boxShadow: '0 12px 35px rgba(15,23,42,0.08)', borderColor: 'rgba(229,231,235,0.8)' }}
            >
              <h2
                className="font-bold text-[#0f172a] mb-[14px]"
                style={{ fontSize: 'clamp(26px, 2.6vw, 38px)', lineHeight: 1.15 }}
              >
                Additional topics that make the blog more useful for clients
              </h2>
              <p className="text-[#5b6472] text-[17px] mb-[14px]">
                To help the client understand the full picture, it is useful to talk about more than just buying and selling.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" >
                <div>
                  <h3 className="text-[22px] font-semibold text-[#0f172a] mt-5 mb-3">1. How scrap grading affects pricing</h3>
                  <p className="text-[#5b6472] text-[17px] mb-[14px]">
                    Better grading means better value. Even a small difference in purity, cleanliness, or separation can change the final sale price.
                  </p>
                  <h3 className="text-[22px] font-semibold text-[#0f172a] mt-5 mb-3">2. Why buyer mapping is important</h3>
                  <p className="text-[#5b6472] text-[17px] mb-[14px]">
                    Not every buyer is suitable for every product. The right buyer improves pricing, speed of closure, and trust in future deals.
                  </p>
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold text-[#0f172a] mt-5 mb-3">3. How inventory control helps sales</h3>
                  <p className="text-[#5b6472] text-[17px] mb-[14px]">
                    When stock is tracked properly, the client knows what is ready, what is pending, and what should be sold first.
                  </p>
                  <h3 className="text-[22px] font-semibold text-[#0f172a] mt-5 mb-3">4. Why market timing matters</h3>
                  <p className="text-[#5b6472] text-[17px] mb-[14px]">
                    The same scrap can perform differently depending on demand. Good timing can support a better margin and smoother movement.
                  </p>
                </div>
              </div>
              <div
                className="rounded-[18px] p-[22px] my-[22px] border-l-[6px] border-[#0ea5e9]"
                style={{ background: 'linear-gradient(135deg, #ecfeff 0%, #e0f2fe 50%, #eff6ff 100%)' }}
              >
                <strong className="text-[#0f172a]">Easy client explanation:</strong> the business becomes stronger when material flow, stock control, and sales planning work together.
              </div>
            </section>

            {/* FAQ */}
            <section
              className="bg-white rounded-[22px] p-4 sm:p-8 border mb-6"
              style={{ boxShadow: '0 12px 35px rgba(15,23,42,0.08)', borderColor: 'rgba(229,231,235,0.8)' }}
            >
              <h2
                className="font-bold text-[#0f172a] mb-[14px]"
                style={{ fontSize: 'clamp(26px, 2.6vw, 38px)', lineHeight: 1.15 }}
              >
                Frequently asked questions
              </h2>
              <div className="flex flex-col gap-3 mt-4">
                {[
                  { q: 'Do you help only with buying scrap?', a: 'No. We support both sides of the business — buying scrap and selling the recovered products in an organized way.' },
                  { q: 'Why is scrap grading so important?', a: 'Because pricing, buyer interest, and final revenue all depend on the quality and separation of the material.' },
                  { q: 'How does a database help the client?', a: 'A simple database shows what material is available, who the buyer is, what rate is possible, and what action should happen next.' },
                ].map(({ q, a }) => (
                  <div key={q} className="border border-[#e5e7eb] rounded-[18px] px-5 py-[18px] bg-white">
                    <h4 className="text-[17px] font-semibold text-[#0f172a] mb-[6px]">{q}</h4>
                    <p className="m-0 text-[14px] text-[#5b6472]">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Closing */}
            <section
              className="text-center text-white px-4 sm:px-[30px] py-10 sm:py-[58px] rounded-[30px] mt-[28px]"
              style={{
                background: 'linear-gradient(135deg, #07111f 0%, #123b76 55%, #0f766e 100%)',
                boxShadow: '0 12px 35px rgba(15,23,42,0.08)',
              }}
            >
              <h2
                className="font-bold text-white mb-3"
                style={{ fontSize: 'clamp(26px, 2.6vw, 38px)', lineHeight: 1.15 }}
              >
                Final Thoughts
              </h2>
              <p className="max-w-[900px] mx-auto mb-[14px] text-[17px]" style={{ color: 'rgba(255,255,255,0.94)' }}>
                An e-waste recycling plant grows faster when the commercial side is managed with the same clarity as the technical side.
                Buying the right scrap, organizing the right buyers, and selling recovered products with a clear plan creates stronger business value.
              </p>
              <p className="max-w-[900px] mx-auto mb-[14px] text-[17px]" style={{ color: 'rgba(255,255,255,0.94)' }}>
                When clients understand both the material flow and the sales flow, they make smarter decisions and build a more stable recycling business.
              </p>
              <div className="text-[27px] font-bold mt-5 text-white">"Buy smart. Sell smart. Grow stronger."</div>
            </section>

          </div>{/* end main content */}

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0 self-start" style={{ position: "sticky", top: "7rem" }}>
            <StickyContactForm />
          </aside>

        </div>{/* end flex layout */}
      </div>
    </div>
  );
}
