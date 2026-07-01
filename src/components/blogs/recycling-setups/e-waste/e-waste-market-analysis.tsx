import StickyContactForm from '@/components/StickyContactForm';

export default function EWasteMarketAnalysisBlog() {
  return (
    <div
      style={{
        overflowX: "clip",
        fontFamily: "'Inter', sans-serif",
        background: `
          radial-gradient(circle at top left, rgba(96,165,250,.12), transparent 28%),
          radial-gradient(circle at top right, rgba(52,211,153,.12), transparent 28%),
          linear-gradient(180deg, #07131f 0%, #0f1f32 100%)
        `,
        color: '#e8f0fb',
        lineHeight: '1.75',
      }}
    >
      <div className="w-full max-w-[1180px] mx-auto px-1 pt-[32px] pb-[60px]">

        {/* Hero */}
        <section
          className="relative overflow-hidden rounded-[32px] px-5 sm:px-[42px] py-12 sm:py-[84px] mb-[26px] border border-white/[0.08]"
          style={{
            background: `
              linear-gradient(135deg, rgba(96,165,250,.16), rgba(52,211,153,.10)),
              linear-gradient(135deg, #0b1728 0%, #123056 50%, #0c1725 100%)
            `,
            boxShadow: '0 18px 50px rgba(0,0,0,.28)',
          }}
        >
          <span
            className="absolute rounded-full"
            style={{ width: 280, height: 280, right: -90, top: -90, background: 'rgba(255,255,255,.06)' }}
          />
          <span
            className="absolute rounded-full"
            style={{ width: 180, height: 180, left: -60, bottom: -60, background: 'rgba(255,255,255,.06)' }}
          />
          <div className="relative z-10 w-full max-w-[960px] mx-auto text-center break-words">
            <div
              className="inline-block px-3 py-2 rounded-full text-[13px] font-bold tracking-[0.3px] mb-[18px] text-[#dbeafe] max-w-full"
              style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)' }}
            >
              E-Waste Recycling Plant | Market Strategy &amp; Segment Planning
            </div>
            <h1
              className="font-extrabold mb-[18px] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(34px, 4.8vw, 64px)', lineHeight: 1.04 }}
            >
              Market Analysis and Target Market Segments in E-Waste Recycling Plant
            </h1>
            <p
              className="mx-auto"
              style={{ fontSize: 'clamp(16px, 1.55vw, 20px)', color: '#d9e6f7', maxWidth: 900 }}
            >
              <strong>Know the market, and the market starts working for you.</strong>
              <br /><br />
              A strong e-waste recycling plant is not built only on machines and approvals.
              It also needs a clear understanding of who will supply the waste, who will buy the output, and which market segments give the best opportunity for growth.
            </p>
            <div className="mt-[22px] text-[16px] sm:text-[18px] font-bold text-white">
              A recycling business becomes stronger when it knows where the material comes from and where the value goes.
            </div>
          </div>
        </section>

        {/* Main flex layout: content + sticky sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Main content */}
          <div className="flex-1 min-w-0 w-full">

            {/* 2-col intro grid */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-[22px] my-[22px]">

              {/* Why market analysis matters */}
              <section
                className="rounded-[24px] p-4 sm:p-[30px] border border-white/[0.08] mb-[22px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                  boxShadow: '0 18px 50px rgba(0,0,0,.28)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <h2
                  className="font-extrabold mb-[14px] text-[#f7fbff]"
                  style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
                >
                  Why market analysis matters
                </h2>
                <p className="text-[#a8b7cc] text-[16px] mb-[14px]">
                  Market analysis gives the client a real picture of the business environment.
                  It helps answer important questions such as: Is there enough material available? Who are the major buyers?
                  Which segment offers the best value? How fast can the business grow?
                </p>
                <p className="text-[#a8b7cc] text-[16px] mb-[14px]">
                  In an e-waste recycling plant, the business does not depend on one single customer type.
                  It depends on a mix of scrap generators, bulk suppliers, aggregators, traders, manufacturers, and downstream buyers.
                </p>
                <p className="text-[#a8b7cc] text-[16px] mb-[14px]">
                  When these segments are understood properly, the client can plan capacity, collection, sales, pricing, and expansion with much more confidence.
                </p>
                <div
                  className="border-l-[6px] border-[#34d399] rounded-[18px] px-5 py-[18px] my-[18px]"
                  style={{ background: 'linear-gradient(135deg, rgba(96,165,250,.10), rgba(52,211,153,.10))' }}
                >
                  <strong className="text-white">Simple idea:</strong> <span className="text-[#a8b7cc]">a good market study reduces guesswork and helps the client build a recycling plant that matches real demand.</span>
                </div>
                <div className="flex flex-wrap gap-[8px] mt-[14px]">
                  <span className="px-[13px] py-2 rounded-full text-[13px] font-bold text-[#e8f0fb]" style={{ background: 'rgba(96,165,250,.10)', border: '1px solid rgba(96,165,250,.20)' }}>Supply mapping</span>
                  <span className="px-[13px] py-2 rounded-full text-[13px] font-bold text-[#e8f0fb]" style={{ background: 'rgba(52,211,153,.10)', border: '1px solid rgba(52,211,153,.20)' }}>Buyer analysis</span>
                  <span className="px-[13px] py-2 rounded-full text-[13px] font-bold text-[#e8f0fb]" style={{ background: 'rgba(245,158,11,.10)', border: '1px solid rgba(245,158,11,.20)' }}>Pricing logic</span>
                </div>
              </section>

              {/* How we help */}
              <section
                className="rounded-[24px] p-4 sm:p-[30px] border border-white/[0.08] mb-[22px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                  boxShadow: '0 18px 50px rgba(0,0,0,.28)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <h2
                  className="font-extrabold mb-[14px] text-[#f7fbff]"
                  style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
                >
                  How we help the client
                </h2>
                <p className="text-[#a8b7cc] text-[16px] mb-[14px]">
                  We help clients understand the full market picture before the project moves into execution.
                  This includes studying waste sources, demand patterns, buyer categories, and business opportunities.
                </p>
                <p className="text-[#a8b7cc] text-[16px] mb-[14px]">
                  Our support also includes segment identification, market size logic, material flow understanding,
                  and a practical view of how the plant can earn money in the real market.
                </p>
                <div
                  className="border-l-[6px] border-[#34d399] rounded-[18px] px-5 py-[18px] my-[18px]"
                  style={{ background: 'linear-gradient(135deg, rgba(96,165,250,.10), rgba(52,211,153,.10))' }}
                >
                  <strong className="text-white">Client benefit:</strong> <span className="text-[#a8b7cc]">when the market is clearly studied, the business model becomes more realistic and more stable.</span>
                </div>
              </section>
            </div>

            {/* Market journey steps */}
            <section
              className="rounded-[24px] p-4 sm:p-[30px] border border-white/[0.08] mb-[22px]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                boxShadow: '0 18px 50px rgba(0,0,0,.28)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-[#f7fbff]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                The market journey in simple steps
              </h2>
              <p className="text-[#a8b7cc] text-[16px] mb-[14px]">
                Clients understand the market better when the process is shown step by step.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] mt-[18px]">
                {[
                  { num: 1, title: 'Study waste sources', text: 'We identify where e-waste comes from, how often it appears, and how stable the supply can be.' },
                  { num: 2, title: 'Map target buyers', text: 'We study who will buy the recovered material and which industries are active in that space.' },
                  { num: 3, title: 'Check value segments', text: 'We separate high-value segments from low-value ones so the client knows where the best opportunity lies.' },
                  { num: 4, title: 'Plan the business model', text: 'We connect market demand, plant capacity, and product sales into one practical plan.' },
                ].map(({ num, title, text }) => (
                  <div
                    key={num}
                    className="border border-white/[0.08] rounded-[20px] p-[18px] sm:min-h-[156px]"
                    style={{ background: 'rgba(255,255,255,.03)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-[#08111b] mb-3"
                      style={{
                        background: 'linear-gradient(135deg,#93c5fd,#6ee7b7)',
                        boxShadow: '0 10px 18px rgba(96,165,250,.18)',
                      }}
                    >
                      {num}
                    </div>
                    <h4 className="text-white text-[17px] font-bold mb-2">{title}</h4>
                    <p className="text-[#a8b7cc] text-[14px] m-0">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Target segments table */}
            <section
              className="rounded-[24px] p-4 sm:p-[30px] border border-white/[0.08] mb-[22px]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                boxShadow: '0 18px 50px rgba(0,0,0,.28)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-[#f7fbff]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                Target market segments in e-waste recycling
              </h2>
              <p className="text-[#a8b7cc] text-[16px] mb-[14px]">
                A recycling plant usually serves more than one market segment. The real strength of the business comes from identifying the right group and serving it well.
              </p>
              <div className="overflow-x-auto rounded-[20px] border border-white/[0.08] mt-[18px]">
                <table className="w-full border-collapse" style={{ minWidth: 780, background: 'rgba(255,255,255,.02)' }}>
                  <thead>
                    <tr>
                      {['Target segment', 'What they provide or buy', 'Why they matter'].map((h) => (
                        <th key={h} className="text-white text-left px-4 py-[15px] text-[14px] border-b border-white/[0.08]" style={{ background: 'rgba(255,255,255,.06)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Bulk waste generators', 'Office, institutional, and corporate e-waste', 'Stable source of regular scrap supply'],
                      ['Aggregators', 'Collected mixed scrap from local networks', 'Useful for building input volume quickly'],
                      ['Traders / dealers', 'Buy and sell scrap fractions', 'Help move material faster in the market'],
                      ['Downstream recyclers', 'Buy recovered metals and usable fractions', 'Important for product sales and revenue'],
                      ['Manufacturing buyers', 'May use recycled raw material', 'Create better value for clean output'],
                      ['Institutional clients', 'Need compliant disposal support', 'Support long-term service-based business'],
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.03]">
                        {row.map((cell, j) => (
                          <td key={j} className="border-t border-white/[0.08] px-4 py-[14px] text-[14px] text-[#c8d6e8] align-top">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Bar graph + DB tracker */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-[22px] mb-[22px]">

              {/* Bar graph */}
              <section
                className="rounded-[24px] p-1 sm:p-[28px] border border-white/[0.08]"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                  boxShadow: '0 18px 50px rgba(0,0,0,.28)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <h2 className="text-white font-extrabold text-[24px] mb-2">Bar graph: market opportunity by segment</h2>
                <p className="text-[#a8b7cc] text-[15px] mb-[18px]">
                  This chart gives a simple view of where the strongest opportunity often sits in the e-waste business.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { label: 'Bulk waste generators', width: '94%', type: 'blue' },
                    { label: 'Downstream recyclers', width: '88%', type: 'green' },
                    { label: 'Aggregators', width: '80%', type: 'default' },
                    { label: 'Traders / dealers', width: '72%', type: 'amber' },
                    { label: 'Manufacturing buyers', width: '66%', type: 'green' },
                  ].map(({ label, width, type }) => (
                    <div key={label} className="grid items-center gap-5" style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr) 54px' }}>
                      <div className="text-[#e8f0fb] text-[10px] font-bold">{label}</div>
                      <div className="h-4 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,.08)' }}>
                        <div
                          className="h-full rounded-full"
                          style={{
                            width,
                            background:
                              type === 'blue' ? 'linear-gradient(90deg,#60a5fa,#7dd3fc)'
                              : type === 'green' ? 'linear-gradient(90deg,#34d399,#86efac)'
                              : type === 'amber' ? 'linear-gradient(90deg,#f59e0b,#fcd34d)'
                              : 'linear-gradient(90deg,#60a5fa,#7dd3fc)',
                          }}
                        />
                      </div>
                      <div className="text-right text-[14px] font-extrabold text-white">{width}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[13px] text-[#9db1ca] mt-[10px]">
                  Higher values show stronger opportunity, but the final decision should always depend on plant size, location, and material quality.
                </p>
              </section>

              {/* Segment readiness tracker */}
              <section
                className="rounded-[24px] p-4 sm:p-[28px] border border-white/[0.08]"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                  boxShadow: '0 18px 50px rgba(0,0,0,.28)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <h2 className="text-white font-extrabold text-[24px] mb-2">Database view: segment readiness tracker</h2>
                <p className="text-[#a8b7cc] text-[15px] mb-[18px]">
                  A simple database helps the client see which segment is ready to support the project and which one needs more work.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] mt-[18px]">
                  {[
                    { title: 'Supply availability', text: 'How often material comes in and how reliable the source is.' },
                    { title: 'Buyer demand', text: 'How strong the market is for recovered output and recycled fractions.' },
                    { title: 'Price stability', text: 'Whether the segment gives steady pricing or moves sharply with demand.' },
                    { title: 'Compliance fit', text: "Whether the segment works smoothly with the plant's approval and operating model." },
                  ].map(({ title, text }) => (
                    <div key={title} className="border border-white/[0.08] rounded-[18px] p-[18px]" style={{ background: 'rgba(255,255,255,.03)' }}>
                      <h4 className="text-white text-[16px] font-bold mb-2">{title}</h4>
                      <p className="text-[#a8b7cc] text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="border-l-[6px] border-[#34d399] rounded-[18px] px-5 py-[18px] mt-[18px]"
                  style={{ background: 'linear-gradient(135deg, rgba(96,165,250,.10), rgba(52,211,153,.10))' }}
                >
                  <strong className="text-white">Why this helps:</strong> <span className="text-[#a8b7cc]">when the market data is organized, the client can choose the right segment with more certainty.</span>
                </div>
              </section>
            </div>

            {/* How we explain target market */}
            <section
              className="rounded-[24px] p-4 sm:p-[30px] border border-white/[0.08] mb-[22px]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                boxShadow: '0 18px 50px rgba(0,0,0,.28)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-[#f7fbff]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                How we explain the target market to clients
              </h2>
              <p className="text-[#a8b7cc] text-[16px] mb-[14px]">
                Many clients want the business to grow quickly, but growth works better when the right segment is chosen first.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { title: 'Input side', text: 'We explain where the waste will come from, how regular it can be, and what kind of volume the plant can expect.' },
                  { title: 'Output side', text: 'We identify who will buy the recovered material and which product fractions are most useful in the market.' },
                  { title: 'Commercial side', text: 'We connect supply, processing, and sales so the client can see the full business cycle in one clear picture.' },
                  { title: 'Growth side', text: 'We show where the plant can expand later once the first market segment starts performing well.' },
                ].map(({ title, text }) => (
                  <div key={title} className="border border-white/[0.08] rounded-[18px] p-[18px]" style={{ background: 'rgba(255,255,255,.03)' }}>
                    <h4 className="text-white text-[16px] font-bold mb-[6px]">{title}</h4>
                    <p className="text-[#a8b7cc] text-[14px] m-0">{text}</p>
                  </div>
                ))}
              </div>
              <div
                className="border-l-[6px] border-[#34d399] rounded-[18px] px-5 py-[18px] my-[18px]"
                style={{ background: 'linear-gradient(135deg, rgba(96,165,250,.10), rgba(52,211,153,.10))' }}
              >
                <strong className="text-white">Easy client explanation:</strong> <span className="text-[#a8b7cc]">the right market segment is the one that gives steady material, healthy margins, and repeat business.</span>
              </div>
            </section>

            {/* Market summary table */}
            <section
              className="rounded-[24px] p-4 sm:p-[30px] border border-white/[0.08] mb-[22px]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                boxShadow: '0 18px 50px rgba(0,0,0,.28)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-[#f7fbff]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                Market analysis summary database
              </h2>
              <p className="text-[#a8b7cc] text-[16px] mb-[14px]">
                This quick project database gives a snapshot of the market position.
              </p>
              <div className="overflow-x-auto rounded-[20px] border border-white/[0.08] mt-[18px]">
                <table className="w-full border-collapse" style={{ minWidth: 780, background: 'rgba(255,255,255,.02)' }}>
                  <thead>
                    <tr>
                      {['Market factor', 'Observed strength', 'Meaning for the client'].map((h) => (
                        <th key={h} className="text-white text-left px-4 py-[15px] text-[14px] border-b border-white/[0.08]" style={{ background: 'rgba(255,255,255,.06)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Waste generation', 'High', 'Good supply potential for the plant'],
                      ['Buyer activity', 'Medium to High', 'Sales can be built with the right channel'],
                      ['Value of recovered products', 'Strong', 'Good scope for revenue from sorting and processing'],
                      ['Competition', 'Moderate', 'Opportunity exists with a smarter plan'],
                      ['Business expansion', 'Promising', 'Plant can grow into a bigger market later'],
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.03]">
                        {row.map((cell, j) => (
                          <td key={j} className="border-t border-white/[0.08] px-4 py-[14px] text-[14px] text-[#c8d6e8] align-top">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Case study */}
            <section
              className="rounded-[24px] p-4 sm:p-[30px] border mb-[22px]"
              style={{
                background: 'linear-gradient(180deg, rgba(245,158,11,.08), rgba(255,255,255,.03))',
                borderColor: 'rgba(245,158,11,.24)',
                boxShadow: '0 18px 50px rgba(0,0,0,.28)',
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-[#f7fbff]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                Case study: finding the right market segment for a new plant
              </h2>
              <p className="text-[#a8b7cc] text-[16px] mb-[14px]">
                A new client wanted to enter the e-waste recycling business but was unsure whether to focus on scrap collection,
                product recovery, or trading recovered fractions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px] mt-[18px]">
                {[
                  { title: 'The challenge', text: 'The client had a strong project idea but no clear target market. Without segment planning, the business risked slow sales and weak material flow.' },
                  { title: 'The solution', text: 'We studied supply sources, buyer demand, material quality, and pricing patterns. Then we identified the segments with the best practical fit.' },
                  { title: 'The result', text: 'The client moved forward with a clearer business model, stronger confidence, and a plan that matched real market conditions instead of assumptions.' },
                ].map(({ title, text }) => (
                  <div key={title} className="rounded-[18px] p-[18px] border border-white/[0.08]" style={{ background: 'rgba(255,255,255,.03)' }}>
                    <h4 className="text-white text-[16px] font-bold mb-2">{title}</h4>
                    <p className="text-[#a8b7cc] text-[14px] m-0">{text}</p>
                  </div>
                ))}
              </div>
              <div
                className="border-l-[6px] border-[#34d399] rounded-[18px] px-5 py-[18px] mt-[18px]"
                style={{ background: 'linear-gradient(135deg, rgba(96,165,250,.10), rgba(52,211,153,.10))' }}
              >
                <strong className="text-white">Lesson from the case:</strong> <span className="text-[#a8b7cc]">market analysis is not just research. It is a decision-making tool that can shape the whole business.</span>
              </div>
            </section>

            {/* Additional topics */}
            <section
              className="rounded-[24px] p-4 sm:p-[30px] border border-white/[0.08] mb-[22px]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                boxShadow: '0 18px 50px rgba(0,0,0,.28)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-[#f7fbff]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                Additional topics that make the market study more useful
              </h2>
              <p className="text-[#a8b7cc] text-[16px] mb-[14px]">
                To make the blog more complete for clients, it helps to explain a few practical points beyond the basic segment list.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px]">
                <div>
                  <h3 className="text-[#f7fbff] text-[22px] font-bold mt-[18px] mb-[10px]">Why location matters</h3>
                  <p className="text-[#a8b7cc] text-[16px] mb-[14px]">The location of the plant affects collection cost, transport speed, buyer access, and the overall business reach.</p>
                  <h3 className="text-[#f7fbff] text-[22px] font-bold mt-[18px] mb-[10px]">Why product quality matters</h3>
                  <p className="text-[#a8b7cc] text-[16px] mb-[14px]">The cleaner and better-separated the output is, the easier it becomes to sell and the better the price can be.</p>
                </div>
                <div>
                  <h3 className="text-[#f7fbff] text-[22px] font-bold mt-[18px] mb-[10px]">Why competition matters</h3>
                  <p className="text-[#a8b7cc] text-[16px] mb-[14px]">A good market analysis shows not just who is present, but where the opportunity is still open.</p>
                  <h3 className="text-[#f7fbff] text-[22px] font-bold mt-[18px] mb-[10px]">Why long-term demand matters</h3>
                  <p className="text-[#a8b7cc] text-[16px] mb-[14px]">A good segment is not just active today. It should remain useful for the future of the plant as well.</p>
                </div>
              </div>
              <div
                className="border-l-[6px] border-[#34d399] rounded-[18px] px-5 py-[18px] my-[18px]"
                style={{ background: 'linear-gradient(135deg, rgba(96,165,250,.10), rgba(52,211,153,.10))' }}
              >
                <strong className="text-white">Client-friendly point:</strong> <span className="text-[#a8b7cc]">the best market strategy is the one that connects material supply, buyer demand, and plant growth in one plan.</span>
              </div>
            </section>

            {/* FAQ */}
            <section
              className="rounded-[24px] p-4 sm:p-[30px] border border-white/[0.08] mb-[22px]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                boxShadow: '0 18px 50px rgba(0,0,0,.28)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-[#f7fbff]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                Frequently asked questions
              </h2>
              <div className="flex flex-col gap-3 mt-[14px]">
                {[
                  { q: 'Why does a recycling plant need market analysis?', a: 'Because the plant must know where material will come from and who will buy the recovered output. That is what makes the business practical.' },
                  { q: 'What is the most important target segment?', a: 'It depends on the project. For some plants, bulk waste generators matter most. For others, downstream buyers or aggregators are more useful.' },
                  { q: 'Can the target market change later?', a: 'Yes. As the plant grows, the market focus can expand. A good plan keeps room for future changes.' },
                ].map(({ q, a }) => (
                  <div key={q} className="border border-white/[0.08] rounded-[18px] px-5 py-[18px]" style={{ background: 'rgba(255,255,255,.03)' }}>
                    <h4 className="text-white text-[16px] font-bold mb-[6px]">{q}</h4>
                    <p className="text-[#a8b7cc] text-[14px] m-0">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Closing */}
            <section
              className="text-center text-white rounded-[32px] px-4 sm:px-[30px] py-10 sm:py-[56px] mt-6 border border-white/[0.08]"
              style={{
                background: `
                  radial-gradient(circle at top, rgba(96,165,250,.16), transparent 34%),
                  linear-gradient(135deg,#07131f 0%,#12345c 50%,#0f766e 100%)
                `,
                boxShadow: '0 18px 50px rgba(0,0,0,.28)',
              }}
            >
              <h2
                className="text-white font-extrabold mb-[10px]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                Final Thoughts
              </h2>
              <p className="max-w-[920px] mx-auto mb-3 text-[16px] text-[#dbeafe]">
                Market analysis gives the e-waste recycling plant a clear direction.
                When the client understands supply, demand, and target segments, the project becomes smarter, stronger, and easier to scale.
              </p>
              <p className="max-w-[920px] mx-auto mb-3 text-[16px] text-[#dbeafe]">
                The right market choice does not just support sales. It supports the full journey of the plant from setup to long-term growth.
              </p>
              <div className="text-[28px] font-extrabold mt-[18px] text-white">
                "The right market segment turns planning into profit."
              </div>
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
