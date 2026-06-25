import StickyContactForm from '@/components/StickyContactForm';

export default function EWasteDPRBlog() {
  return (
    <div
      // className="overflow-x-hidden"
      style={{
        fontFamily: "'Manrope', sans-serif",
        background: `
          radial-gradient(circle at top left, rgba(15,118,110,.10), transparent 25%),
          radial-gradient(circle at top right, rgba(249,115,22,.10), transparent 22%),
          linear-gradient(180deg, #fffaf3 0%, #f7f3ee 100%)
        `,
        color: '#1f2937',
        lineHeight: '1.75',
      }}
    >
      {/* Page container */}
      <div className="w-full max-w-[1180px] mx-auto px-4 pt-[34px] pb-[60px] overflow-clip">

        {/* Hero */}
        <section
          className="relative overflow-hidden text-white px-1 sm:px-[44px] py-12 sm:py-[82px] rounded-[34px] mb-[26px]"
          style={{
            background: `linear-gradient(135deg, rgba(15,118,110,.96), rgba(37,99,235,.94)),
                         linear-gradient(135deg, #0f766e, #2563eb)`,
            boxShadow: '0 14px 40px rgba(16,35,63,.08)',
          }}
        >
          <span
            className="absolute rounded-full"
            style={{ width: 300, height: 300, right: -110, top: -110, background: 'rgba(255,255,255,.10)' }}
          />
          <span
            className="absolute rounded-full"
            style={{ width: 200, height: 200, left: -70, bottom: -70, background: 'rgba(255,255,255,.10)' }}
          />
          <div className="relative z-10 w-full max-w-[980px] mx-auto text-center">
            <div
              className="inline-block px-3 py-[9px] rounded-full text-[13px] font-extrabold tracking-[0.3px] mb-[18px] max-w-full"
              style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.16)' }}
            >
              E-Waste Recycling Plant | DPR Planning &amp; Project Support
            </div>
            <h1
              className="font-extrabold mb-[18px] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(34px, 5vw, 64px)', lineHeight: 1.03 }}
            >
              How Can We Help Clients in Creating a Detailed Project Report File for E-Waste Recycling Plant
            </h1>
            <p
              className="mx-auto"
              style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', maxWidth: 890, color: 'rgba(255,255,255,.95)' }}
            >
              <strong>One strong DPR can turn an idea into a fundable project.</strong>
              <br /><br />
              A detailed project report is more than a document. It is the map that explains the business, the plant, the approvals,
              the machinery, the costs, and the future growth path in one clear place.
            </p>
            <div className="mt-[22px] text-[16px] sm:text-[18px] font-bold text-white">
              A good DPR gives the client confidence before the first machine is even installed.
            </div>
          </div>
        </section>

        {/* Main flex layout: content + sticky sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Main content */}
          <div className="flex-1 min-w-0">

            {/* 2-col intro grid */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-[22px] my-[22px]">
              {/* Why DPR matters */}
              <section
                className="bg-white border border-[#e7dfd6] rounded-[26px] p-4 sm:p-[30px]"
                style={{ boxShadow: '0 14px 40px rgba(16,35,63,.08)' }}
              >
                <h2
                  className="text-[#10233f] font-extrabold mb-[14px]"
                  style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
                >
                  Why the DPR is so important
                </h2>
                <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                  For an e-waste recycling plant, the detailed project report is the foundation of the entire project journey.
                  It helps the client understand what the plant will do, how much it will cost, what approvals are needed,
                  and how the business can work in a practical way.
                </p>
                <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                  We help clients prepare a DPR that is easy to read, technically strong, and useful for investors, banks,
                  government authorities, and internal planning.
                </p>
                <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                  A well-written DPR reduces confusion. It connects the business vision with the operational reality,
                  which makes project execution much smoother.
                </p>
                <div
                  className="border-l-[6px] border-[#0f766e] rounded-[18px] px-5 py-[18px] my-[18px]"
                  style={{ background: 'linear-gradient(135deg, #e8f4f2, #f2fbff)' }}
                >
                  <strong className="text-[#10233f]">Simple truth:</strong> the DPR is not just a file. It is the business story of the plant, written in a way that others can trust.
                </div>
                <div className="flex flex-wrap gap-[8px] mt-[14px]">
                  <span className="px-[13px] py-2 rounded-full text-[13px] font-bold border" style={{ background: '#eefaf8', borderColor: '#c8ebe4', color: '#0f766e' }}>Project planning</span>
                  <span className="px-[13px] py-2 rounded-full text-[13px] font-bold border" style={{ background: '#fff4e8', borderColor: '#ffd8b7', color: '#c2410c' }}>Technical clarity</span>
                  <span className="px-[13px] py-2 rounded-full text-[13px] font-bold border" style={{ background: '#eff6ff', borderColor: '#cfe0ff', color: '#1d4ed8' }}>Funding support</span>
                </div>
              </section>

              {/* How we support */}
              <section
                className="bg-white border border-[#e7dfd6] rounded-[26px] p-4 sm:p-[30px]"
                style={{ boxShadow: '0 14px 40px rgba(16,35,63,.08)' }}
              >
                <h2
                  className="text-[#10233f] font-extrabold mb-[14px]"
                  style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
                >
                  How we support the client
                </h2>
                <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                  We guide the client through the entire DPR preparation process, from understanding the project concept to building
                  a professional file that can be used for approvals, finance, and implementation.
                </p>
                <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                  Our support includes project capacity planning, site understanding, machinery list preparation, cost estimation,
                  manpower planning, revenue projection, and approval mapping.
                </p>
                <div
                  className="border-l-[6px] border-[#0f766e] rounded-[18px] px-5 py-[18px] my-[18px]"
                  style={{ background: 'linear-gradient(135deg, #e8f4f2, #f2fbff)' }}
                >
                  <strong className="text-[#10233f]">Client benefit:</strong> when the project report is structured properly, the decision-making process becomes much easier.
                </div>
              </section>
            </div>

            {/* DPR Steps */}
            <section
              className="bg-white border border-[#e7dfd6] rounded-[26px] p-4 sm:p-[30px] my-6"
              style={{ boxShadow: '0 14px 40px rgba(16,35,63,.08)' }}
            >
              <h2
                className="text-[#10233f] font-extrabold mb-[14px]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                The DPR preparation journey in simple steps
              </h2>
              <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                Clients understand the process better when it is shown step by step.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] mt-[18px]">
                {[
                  { num: 1, title: 'Understand the project idea', text: "We first study the client's goals, budget, plant size, and target output." },
                  { num: 2, title: 'Build the project structure', text: 'We prepare the business logic, plant flow, approvals, and machinery framework.' },
                  { num: 3, title: 'Prepare the financial part', text: 'We estimate project cost, operating cost, revenue logic, and basic return expectations.' },
                  { num: 4, title: 'Finalize the report file', text: 'We shape the final DPR into a clean, usable document for the client and stakeholders.' },
                ].map(({ num, title, text }) => (
                  <div
                    key={num}
                    className="border border-[#e7dfd6] rounded-[20px] p-[18px] sm:min-h-[155px]"
                    style={{ background: 'linear-gradient(180deg,#ffffff 0%,#fffdf9 100%)' }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-full text-white font-extrabold mb-3"
                      style={{
                        background: 'linear-gradient(135deg,#0f766e,#14b8a6)',
                        boxShadow: '0 10px 18px rgba(15,118,110,.16)',
                      }}
                    >
                      {num}
                    </div>
                    <h4 className="text-[#10233f] text-[17px] font-bold mb-2">{title}</h4>
                    <p className="m-0 text-[14px] text-[#5f6b7a]">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* What goes inside DPR table */}
            <section
              className="bg-white border border-[#e7dfd6] rounded-[26px] p-4 sm:p-[30px] my-6"
              style={{ boxShadow: '0 14px 40px rgba(16,35,63,.08)' }}
            >
              <h2
                className="text-[#10233f] font-extrabold mb-[14px]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                What goes inside a strong DPR file
              </h2>
              <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                A detailed project report should explain the project in a practical and organized way.
              </p>
              <div className="overflow-x-auto rounded-[20px] border border-[#e7dfd6] mt-[18px]">
                <table className="w-full border-collapse bg-white" style={{ minWidth: 780 }}>
                  <thead>
                    <tr>
                      {['DPR Section', 'What it explains', 'Why it matters'].map((h) => (
                        <th
                          key={h}
                          className="text-white text-left px-4 py-[15px] text-[14px] tracking-[0.2px]"
                          style={{ background: 'linear-gradient(135deg,#0f766e,#2563eb)' }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Project overview', 'Basic idea, purpose, and plant objective', 'Gives the reader a clear start'],
                      ['Market study', 'Demand, supply, and business opportunity', 'Shows if the project has growth potential'],
                      ['Plant process', 'How e-waste moves through the facility', 'Explains the actual working model'],
                      ['Machinery list', 'Major machines and equipment required', 'Supports project design and costing'],
                      ['Costing & finance', 'Investment, expenses, and revenue logic', 'Helps with funding and planning'],
                      ['Approvals', 'Permissions required before and during operations', 'Keeps the project legally ready'],
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-[#fbfcfe]">
                        {row.map((cell, j) => (
                          <td key={j} className="border-t border-[#e7dfd6] px-4 py-[14px] text-[14px] text-[#334155] align-top">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Bar graph + Database tracker */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-[22px] my-6">
              {/* Bar graph */}
              <section
                className="bg-white border border-[#e7dfd6] rounded-[26px] p-4 sm:p-[28px]"
                style={{ boxShadow: '0 14px 40px rgba(16,35,63,.08)' }}
              >
                <h2 className="text-[#10233f] font-extrabold text-[24px] mb-2">Bar graph: where DPR effort usually goes</h2>
                <p className="text-[#5f6b7a] text-[15px] mb-[18px]">
                  This chart shows which sections usually need the most attention while preparing a detailed project report.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { label: 'Project finance', width: '95%', type: 'blue' },
                    { label: 'Plant process design', width: '90%', type: 'green' },
                    { label: 'Approval mapping', width: '84%', type: 'default' },
                    { label: 'Machinery selection', width: '78%', type: 'blue' },
                    { label: 'Market analysis', width: '70%', type: 'green' },
                  ].map(({ label, width, type }) => (
                    <div
                      key={label}
                      className="grid items-center gap-3"
                      style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr) 54px' }}
                    >
                      <div className="text-[15px] font-bold text-[#334155]">{label}</div>
                      <div className="h-4 rounded-full overflow-hidden" style={{ background: '#e9edf3' }}>
                        <div
                          className="h-full rounded-full"
                          style={{
                            width,
                            background:
                              type === 'blue'
                                ? 'linear-gradient(90deg,#2563eb,#38bdf8)'
                                : type === 'green'
                                ? 'linear-gradient(90deg,#0f766e,#34d399)'
                                : 'linear-gradient(90deg,#f97316,#fbbf24)',
                          }}
                        />
                      </div>
                      <div className="text-right text-[14px] font-extrabold text-[#10233f]">{width}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[13px] text-[#64748b] mt-[10px]">
                  Higher bars mean more planning work. These areas often decide whether the DPR feels strong, practical, and investor-ready.
                </p>
              </section>

              {/* DPR Readiness Tracker */}
              <section
                className="bg-white border border-[#e7dfd6] rounded-[26px] p-4 sm:p-[28px]"
                style={{ boxShadow: '0 14px 40px rgba(16,35,63,.08)' }}
              >
                <h2 className="text-[#10233f] font-extrabold text-[24px] mb-2">Database view: DPR readiness tracker</h2>
                <p className="text-[#5f6b7a] text-[15px] mb-[18px]">
                  A simple database makes it easier to track what has been completed and what still needs attention.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] mt-[18px]">
                  {[
                    { title: 'Project input', text: "Client goal, capacity, location, budget, and business model collected clearly." },
                    { title: 'Technical data', text: 'Plant flow, machinery, utilities, and space requirement organized in one place.' },
                    { title: 'Financial data', text: 'Capital cost, operating cost, and estimated revenue logic prepared for review.' },
                    { title: 'Compliance data', text: 'Required approvals and legal steps linked to the project structure.' },
                  ].map(({ title, text }) => (
                    <div
                      key={title}
                      className="border border-[#e7dfd6] rounded-[18px] p-[18px]"
                      style={{ background: 'linear-gradient(180deg,#fff 0%,#fcfbf8 100%)' }}
                    >
                      <h4 className="text-[#10233f] text-[16px] font-bold mb-2">{title}</h4>
                      <p className="m-0 text-[14px] text-[#5f6b7a]">{text}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="border-l-[6px] border-[#0f766e] rounded-[18px] px-5 py-[18px] mt-[18px]"
                  style={{ background: 'linear-gradient(135deg, #e8f4f2, #f2fbff)' }}
                >
                  <strong className="text-[#10233f]">Why this helps:</strong> when the data is organized, the client can make decisions faster and with more confidence.
                </div>
              </section>
            </div>

            {/* How we make DPR easier */}
            <section
              className="bg-white border border-[#e7dfd6] rounded-[26px] p-4 sm:p-[30px] my-6"
              style={{ boxShadow: '0 14px 40px rgba(16,35,63,.08)' }}
            >
              <h2
                className="text-[#10233f] font-extrabold mb-[14px]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                How we make the DPR easier for the client to understand
              </h2>
              <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                A good project report should not feel heavy or confusing. It should explain the project in a human and practical way.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
                {[
                  { title: 'Clear project story', text: 'We explain the plant in a simple sequence: what it is, why it is needed, how it works, and how it makes money.' },
                  { title: 'Clean financial view', text: 'We keep the cost and revenue logic easy to read so the client can understand the financial direction quickly.' },
                  { title: 'Practical layout', text: 'We connect the report with the actual plant area, machinery placement, and workflow.' },
                  { title: 'Approval support', text: 'The DPR also helps the client understand what permissions are needed and in what order they should be taken.' },
                ].map(({ title, text }) => (
                  <div key={title} className="border border-[#e7dfd6] rounded-[18px] p-[18px] bg-white">
                    <h4 className="text-[#10233f] text-[16px] font-bold mb-[6px]">{title}</h4>
                    <p className="m-0 text-[14px] text-[#5f6b7a]">{text}</p>
                  </div>
                ))}
              </div>
              <div
                className="border-l-[6px] border-[#0f766e] rounded-[18px] px-5 py-[18px] my-[18px]"
                style={{ background: 'linear-gradient(135deg, #e8f4f2, #f2fbff)' }}
              >
                <strong className="text-[#10233f]">Easy client explanation:</strong> a good DPR turns a complex recycling project into a clear business plan.
              </div>
            </section>

            {/* Project summary table */}
            <section
              className="bg-white border border-[#e7dfd6] rounded-[26px] p-4 sm:p-[30px] my-6"
              style={{ boxShadow: '0 14px 40px rgba(16,35,63,.08)' }}
            >
              <h2
                className="text-[#10233f] font-extrabold mb-[14px]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                Database-style project summary
              </h2>
              <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                This section works like a quick project dashboard for the client.
              </p>
              <div className="overflow-x-auto rounded-[20px] border border-[#e7dfd6] mt-[18px]">
                <table className="w-full border-collapse bg-white" style={{ minWidth: 780 }}>
                  <thead>
                    <tr>
                      {['Project Area', 'Status in DPR', 'Client benefit'].map((h) => (
                        <th
                          key={h}
                          className="text-white text-left px-4 py-[15px] text-[14px] tracking-[0.2px]"
                          style={{ background: 'linear-gradient(135deg,#0f766e,#2563eb)' }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Plant concept', 'Defined', 'Gives clarity on the business model'],
                      ['Machinery plan', 'Mapped', 'Helps with plant design and cost planning'],
                      ['Financial model', 'Prepared', 'Supports funding and investment discussions'],
                      ['Approval path', 'Outlined', 'Shows the legal and compliance route'],
                      ['Implementation roadmap', 'Ready', 'Helps the client move from planning to action'],
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-[#fbfcfe]">
                        {row.map((cell, j) => (
                          <td key={j} className="border-t border-[#e7dfd6] px-4 py-[14px] text-[14px] text-[#334155] align-top">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Case study */}
            <section
              className="rounded-[26px] p-4 sm:p-[30px] border border-[#ffe0bf] my-6"
              style={{
                background: 'linear-gradient(180deg,#fff9f1 0%,#fff 100%)',
                boxShadow: '0 14px 40px rgba(16,35,63,.08)',
              }}
            >
              <h2
                className="text-[#10233f] font-extrabold mb-[14px]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                Case study: how a proper DPR helped a client move faster
              </h2>
              <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                A client wanted to start an e-waste recycling project but was unsure about plant size, machinery, and investment planning.
                The idea was strong, but the project was not organized in a way that investors could easily understand.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px] mt-[18px]">
                {[
                  { title: 'The challenge', text: 'The client had a business idea, but no clear project structure, no cost roadmap, and no final approval sequence.' },
                  { title: 'The solution', text: 'We created a detailed project report with plant flow, machine list, estimated costs, approval mapping, and business explanation.' },
                  { title: 'The result', text: 'The client could present the project more confidently, understand the financial path better, and move toward execution faster.' },
                ].map(({ title, text }) => (
                  <div key={title} className="bg-white border border-[#f6d7b5] rounded-[18px] p-[18px]">
                    <h4 className="text-[#9a3412] text-[16px] font-bold mb-2">{title}</h4>
                    <p className="m-0 text-[14px] text-[#6b4b21]">{text}</p>
                  </div>
                ))}
              </div>
              <div
                className="border-l-[6px] border-[#0f766e] rounded-[18px] px-5 py-[18px] mt-[18px]"
                style={{ background: 'linear-gradient(135deg, #e8f4f2, #f2fbff)' }}
              >
                <strong className="text-[#10233f]">Lesson from the case:</strong> a well-made DPR does not just describe the project — it helps the project move forward.
              </div>
            </section>

            {/* Additional topics */}
            <section
              className="bg-white border border-[#e7dfd6] rounded-[26px] p-4 sm:p-[30px] my-6"
              style={{ boxShadow: '0 14px 40px rgba(16,35,63,.08)' }}
            >
              <h2
                className="text-[#10233f] font-extrabold mb-[14px]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                Additional topics that make the blog stronger for clients
              </h2>
              <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                To help clients understand the value of a DPR, it is useful to explain a few more practical points.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px]">
                <div>
                  <h3 className="text-[#10233f] text-[22px] font-bold mt-[18px] mb-[10px]">Why banks and investors look at DPR first</h3>
                  <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                    A clear DPR helps investors quickly see whether the project is structured, realistic, and worth reviewing further.
                  </p>
                  <h3 className="text-[#10233f] text-[22px] font-bold mt-[18px] mb-[10px]">Why the report should match the site</h3>
                  <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                    The report must reflect the actual location, space, utility availability, and plant needs. Otherwise, implementation becomes difficult later.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#10233f] text-[22px] font-bold mt-[18px] mb-[10px]">Why future expansion should be included</h3>
                  <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                    A good DPR should not only explain the present project. It should also show how the plant can grow in the future.
                  </p>
                  <h3 className="text-[#10233f] text-[22px] font-bold mt-[18px] mb-[10px]">Why simple language matters</h3>
                  <p className="text-[#5f6b7a] text-[16px] mb-[14px]">
                    Even though the report is technical, it should still be readable. Simple language makes the project easier to trust.
                  </p>
                </div>
              </div>
              <div
                className="border-l-[6px] border-[#0f766e] rounded-[18px] px-5 py-[18px] my-[18px]"
                style={{ background: 'linear-gradient(135deg, #e8f4f2, #f2fbff)' }}
              >
                <strong className="text-[#10233f]">Client-friendly point:</strong> the best DPR is one that feels complete, practical, and easy to follow.
              </div>
            </section>

            {/* FAQ */}
            <section
              className="bg-white border border-[#e7dfd6] rounded-[26px] p-4 sm:p-[30px] my-6"
              style={{ boxShadow: '0 14px 40px rgba(16,35,63,.08)' }}
            >
              <h2
                className="text-[#10233f] font-extrabold mb-[14px]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                Frequently asked questions
              </h2>
              <div className="flex flex-col gap-3 mt-[14px]">
                {[
                  {
                    q: 'What is the main purpose of a detailed project report?',
                    a: 'It explains the full project plan in one organized file so the client, investor, and authority can understand the business clearly.',
                  },
                  {
                    q: 'Can the DPR help in getting approvals?',
                    a: 'Yes. A strong DPR supports the approval process because it gives a clear picture of the plant, its design, and its compliance needs.',
                  },
                  {
                    q: 'Why do clients need professional help for DPR preparation?',
                    a: 'Because a well-prepared DPR saves time, avoids confusion, and helps the client present the project in a more trustworthy way.',
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="border border-[#e7dfd6] rounded-[18px] bg-white px-5 py-[18px]">
                    <h4 className="text-[#10233f] text-[16px] font-bold mb-[6px]">{q}</h4>
                    <p className="m-0 text-[14px] text-[#5f6b7a]">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Closing */}
            <section
              className="text-center text-white rounded-[34px] px-4 sm:px-[30px] py-10 sm:py-[56px] mt-6"
              style={{
                background: `
                  radial-gradient(circle at top, rgba(251,191,36,.16), transparent 32%),
                  linear-gradient(135deg,#0f172a 0%,#1d4ed8 52%,#0f766e 100%)
                `,
                boxShadow: '0 14px 40px rgba(16,35,63,.08)',
              }}
            >
              <h2
                className="text-white font-extrabold mb-[10px]"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.12 }}
              >
                Final Thoughts
              </h2>
              <p className="max-w-[920px] mx-auto mb-3 text-[16px]" style={{ color: 'rgba(255,255,255,.92)' }}>
                A detailed project report is the backbone of an e-waste recycling plant. It connects the idea, the machinery, the approvals,
                the financials, and the future plan into one clear project story.
              </p>
              <p className="max-w-[920px] mx-auto mb-3 text-[16px]" style={{ color: 'rgba(255,255,255,.92)' }}>
                When clients receive a well-prepared DPR, they gain clarity, confidence, and a stronger path toward execution.
              </p>
              <div className="text-[28px] font-extrabold mt-[18px] text-white">
                "A strong DPR builds a stronger recycling business."
              </div>
            </section>

          </div>{/* end main content */}

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0 sticky top-28 self-start">
            <StickyContactForm />
          </aside>

        </div>{/* end flex layout */}
      </div>
    </div>
  );
}
