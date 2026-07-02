import StickyContactForm from '@/components/StickyContactForm';

export default function EWasteMachineryBlog() {
  return (
    <div
      style={{
        overflowX: "clip",
        fontFamily: "'Inter', sans-serif",
        background: `
          radial-gradient(circle at top left, rgba(56,189,248,.16), transparent 28%),
          radial-gradient(circle at top right, rgba(52,211,153,.14), transparent 26%),
          linear-gradient(180deg, #07111f 0%, #0c1729 100%)
        `,
        color: '#e5eefc',
        lineHeight: '1.75',
      }}
    >
      <div className="w-full max-w-[1180px] mx-auto px-1 pt-[32px] pb-[60px]">

        {/* Hero */}
        <section
          className="relative overflow-hidden px-5 sm:px-[10px] py-12 sm:py-[84px] rounded-[32px] mb-[26px] border border-white/[0.08]"
          style={{
            background: `
              linear-gradient(135deg, rgba(56,189,248,.16), rgba(52,211,153,.12)),
              linear-gradient(135deg, #0d1628 0%, #10233d 55%, #0b1322 100%)
            `,
            boxShadow: '0 18px 50px rgba(0,0,0,.25)',
          }}
        >
          <span
            className="absolute rounded-full"
            style={{ width: 260, height: 260, right: -70, top: -70, background: 'rgba(255,255,255,.06)', filter: 'blur(0.5px)' }}
          />
          <span
            className="absolute rounded-full"
            style={{ width: 180, height: 180, left: -60, bottom: -50, background: 'rgba(255,255,255,.06)', filter: 'blur(0.5px)' }}
          />
          <div className="relative z-10 w-full max-w-[920px] mx-auto text-center break-words">
            <div
              className="inline-block px-3 py-2 rounded-full text-[13px] font-bold tracking-[0.3px] mb-[18px] text-[#dbeafe] max-w-full"
              style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.1)' }}
            >
              E-Waste Recycling Plant | Machinery Planning &amp; Project Support
            </div>
            <h1
              className="font-extrabold mb-[18px] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(34px, 4.8vw, 62px)', lineHeight: 1.02 }}
            >
              How We Help Clients Choose the Right Machinery in E-Waste Recycling Plant
            </h1>
            <p
              className="mx-auto"
              style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', color: '#d8e7fb', maxWidth: 860 }}
            >
              <strong>Right machine. Right capacity. Right result.</strong>
              <br /><br />
              A recycling plant becomes profitable when machinery is selected with care, matched with the plant goal,
              and designed around actual business needs — not just around catalogue specifications.
            </p>
            <div className="mt-6 text-[16px] sm:text-[18px] font-bold text-white">
              Good machinery does not just process waste. It protects time, cost, and output quality.
            </div>
          </div>
        </section>

        {/* Main flex layout: content + sticky sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Main content */}
          <div className="flex-1 min-w-0 w-full">

            {/* 2-col intro grid */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-[22px] mt-[22px]">

              {/* Why machinery selection matters */}
              <section
                className="rounded-[24px] p-4 sm:p-[10px] border border-white/[0.08] mb-[22px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                  boxShadow: '0 18px 50px rgba(0,0,0,.25)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <h2
                  className="font-extrabold mb-[14px] text-[#f8fbff]"
                  style={{ fontSize: 'clamp(26px, 2.7vw, 38px)', lineHeight: 1.14 }}
                >
                  Why machinery selection matters
                </h2>
                <p className="text-[#a8b6cc] text-[16px] mb-[14px]">
                  In an e-waste recycling plant, machinery is the heart of the entire operation. It decides how fast material moves,
                  how safely it is handled, how much can be recovered, and how much profit the plant can create.
                </p>
                <p className="text-[#a8b6cc] text-[16px] mb-[14px]">
                  We help clients choose machinery based on capacity, material type, plant size, product goals, and future expansion plans.
                  This avoids over-investment in equipment that is too large, and also prevents under-sizing that slows down the business.
                </p>
                <p className="text-[#a8b6cc] text-[16px] mb-[14px]">
                  The right machinery mix gives the client smoother operation, better output consistency, and lower maintenance stress.
                </p>
                <div
                  className="border-l-[5px] border-[#34d399] rounded-[18px] px-[20px] py-[18px] my-[18px]"
                  style={{ background: 'linear-gradient(135deg, rgba(52,211,153,.12), rgba(56,189,248,.08))' }}
                >
                  <strong className="text-white">Simple client message:</strong> <span className="text-[#a8b6cc]">machinery should fit the business model first and the budget second.</span>
                </div>
                <div className="flex flex-wrap gap-[8px] mt-[14px]">
                  <span className="px-[14px] py-2 rounded-full text-[13px] font-bold text-[#d7f3ff]" style={{ background: 'rgba(56,189,248,.12)', border: '1px solid rgba(56,189,248,.22)' }}>Capacity planning</span>
                  <span className="px-[14px] py-2 rounded-full text-[13px] font-bold text-[#d7f3ff]" style={{ background: 'rgba(52,211,153,.10)', border: '1px solid rgba(52,211,153,.2)' }}>Output quality</span>
                  <span className="px-[14px] py-2 rounded-full text-[13px] font-bold text-[#d7f3ff]" style={{ background: 'rgba(245,158,11,.10)', border: '1px solid rgba(245,158,11,.2)' }}>Safe operation</span>
                </div>
              </section>

              {/* How we support */}
              <section
                className="rounded-[24px] p-4 sm:p-[10px] border border-white/[0.08] mb-[22px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                  boxShadow: '0 18px 50px rgba(0,0,0,.25)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <h2
                  className="font-extrabold mb-[14px] text-[#f8fbff]"
                  style={{ fontSize: 'clamp(26px, 2.7vw, 38px)', lineHeight: 1.14 }}
                >
                  How we support the client
                </h2>
                <p className="text-[#a8b6cc] text-[16px] mb-[14px]">
                  We do not just list machines. We help the client understand what each machine does, how it connects with the plant flow,
                  and where it adds real value.
                </p>
                <p className="text-[#a8b6cc] text-[16px] mb-[14px]">
                  Our support includes plant planning, machine comparison, technical guidance, budget balancing, and future expansion planning.
                </p>
                {[
                  { title: 'Smarter buying', text: 'We help clients avoid unnecessary machines and focus on the equipment that truly improves performance.' },
                  { title: 'Better planning', text: 'We make sure the machine list matches the plant layout, approval scope, and production target.' },
                ].map(({ title, text }, i) => (
                  <div
                    key={title}
                    className="flex gap-[14px] items-start p-[18px] rounded-[18px] border border-white/[0.08]"
                    style={{ background: 'rgba(255,255,255,.03)', marginTop: i === 0 ? 16 : 12 }}
                  >
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0 mt-2"
                      style={{ background: '#34d399', boxShadow: '0 0 0 6px rgba(52,211,153,.08)' }}
                    />
                    <div>
                      <h4 className="text-white text-[16px] font-bold mb-[5px]">{title}</h4>
                      <p className="text-[#a8b6cc] text-[14px] m-0">{text}</p>
                    </div>
                  </div>
                ))}
              </section>
            </div>

            {/* Machinery journey steps */}
            <section
              className="rounded-[24px] p-4 sm:p-[30px] border border-white/[0.08] mb-[22px]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                boxShadow: '0 18px 50px rgba(0,0,0,.25)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-[#f8fbff]"
                style={{ fontSize: 'clamp(26px, 2.7vw, 38px)', lineHeight: 1.14 }}
              >
                The machinery journey in simple steps
              </h2>
              <p className="text-[#a8b6cc] text-[16px] mb-[14px]">
                Clients understand machinery better when the process is shown like a practical roadmap.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] mt-[18px]">
                {[
                  { num: 1, title: 'Understand the material', text: 'We first study what kind of e-waste will be processed so the machine list matches the actual input.' },
                  { num: 2, title: 'Select the process flow', text: 'Based on dismantling, sorting, shredding, and recovery needs, we suggest the right plant flow.' },
                  { num: 3, title: 'Match machinery to capacity', text: 'We help the client avoid over-sized or under-sized equipment and keep the plant balanced.' },
                  { num: 4, title: 'Plan for growth', text: 'We keep future scale in mind so the client can expand without redesigning everything again.' },
                ].map(({ num, title, text }) => (
                  <div
                    key={num}
                    className="border border-white/[0.08] rounded-[20px] p-[18px] sm:min-h-[160px]"
                    style={{ background: 'rgba(255,255,255,.03)' }}
                  >
                    <div
                      className="w-[38px] h-[38px] flex items-center justify-center rounded-full font-extrabold text-[#06111f] mb-3"
                      style={{
                        background: 'linear-gradient(135deg, #38bdf8, #a5f3fc)',
                        boxShadow: '0 10px 20px rgba(56,189,248,.18)',
                      }}
                    >
                      {num}
                    </div>
                    <h4 className="text-white text-[17px] font-bold mb-2">{title}</h4>
                    <p className="text-[#a8b6cc] text-[14px] m-0">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Common machinery table */}
            <section
              className="rounded-[24px] p-4 sm:p-[30px] border border-white/[0.08] mb-[22px]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                boxShadow: '0 18px 50px rgba(0,0,0,.25)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-[#f8fbff]"
                style={{ fontSize: 'clamp(26px, 2.7vw, 38px)', lineHeight: 1.14 }}
              >
                Common machinery used in an e-waste recycling plant
              </h2>
              <p className="text-[#a8b6cc] text-[16px] mb-[14px]">
                Different plants need different equipment, but these are some of the most common machinery categories used in the sector.
              </p>
              <div className="overflow-x-auto rounded-[20px] border border-white/[0.08] mt-4">
                <table className="w-full border-collapse" style={{ minWidth: 780, background: 'rgba(255,255,255,.02)' }}>
                  <thead>
                    <tr>
                      {['Machinery', 'Purpose', 'Why it is useful'].map((h) => (
                        <th
                          key={h}
                          className="text-white text-left px-4 py-[15px] text-[14px] border-b border-white/[0.08]"
                          style={{ background: 'rgba(255,255,255,.06)' }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Dismantling tables', 'Manual separation of electronic parts', 'Helps recover components carefully and safely'],
                      ['Shredder / crusher', 'Size reduction of e-waste material', 'Supports efficient downstream sorting and recovery'],
                      ['Magnetic separator', 'Removes ferrous metals', 'Improves material purity'],
                      ['Eddy current separator', 'Separates non-ferrous metals', 'Useful for aluminium and similar fractions'],
                      ['Dust collection system', 'Controls dust and fine particles', 'Protects workers and keeps the plant cleaner'],
                      ['Conveyor system', 'Moves material through the plant', 'Improves speed and reduces manual handling'],
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.03]">
                        {row.map((cell, j) => (
                          <td key={j} className="border-t border-white/[0.08] px-4 py-[14px] text-[14px] text-[#c7d5e8] align-top">{cell}</td>
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
                className="rounded-[24px] p-4 sm:p-[28px] border border-white/[0.08]"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                  boxShadow: '0 18px 50px rgba(0,0,0,.25)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <h2 className="text-white font-extrabold text-[24px] mb-2">Bar graph: machinery importance by plant activity</h2>
                <p className="text-[#a8b6cc] text-[15px] mb-[18px]">
                  This visual shows which equipment areas usually matter the most when building a strong recycling line.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { label: 'Shredding system', width: '95%' },
                    { label: 'Sorting and separation', width: '90%' },
                    { label: 'Dust control', width: '84%' },
                    { label: 'Conveyor movement', width: '76%' },
                    { label: 'Manual dismantling station', width: '68%' },
                  ].map(({ label, width }) => (
                    <div key={label} className="grid items-center gap-3" style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr) 56px' }}>
                      <div className="text-[#e8f1ff] text-[15px] font-semibold">{label}</div>
                      <div className="h-4 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,.08)' }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width, background: 'linear-gradient(90deg, #38bdf8, #34d399)' }}
                        />
                      </div>
                      <div className="text-right font-extrabold text-white text-[14px]">{width}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[13px] text-[#9eb0c9] mt-[10px]">
                  Higher values show areas that usually need more attention while designing and budgeting the plant.
                </p>
              </section>

              {/* DB tracker */}
              <section
                className="rounded-[24px] p-4 sm:p-[28px] border border-white/[0.08]"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                  boxShadow: '0 18px 50px rgba(0,0,0,.25)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <h2 className="text-white font-extrabold text-[24px] mb-2">Database view: machinery readiness tracker</h2>
                <p className="text-[#a8b6cc] text-[15px] mb-[18px]">
                  A simple project database helps clients see what is ready, what is pending, and what still needs review.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] mt-[18px]">
                  {[
                    { title: 'Material compatibility', text: 'Checks whether the machine can handle the actual e-waste input stream.' },
                    { title: 'Capacity match', text: 'Confirms that equipment size matches the daily or monthly plant target.' },
                    { title: 'Utility readiness', text: 'Ensures power, space, and support systems are available for operation.' },
                    { title: 'Maintenance plan', text: 'Creates a future service schedule so downtime stays under control.' },
                  ].map(({ title, text }) => (
                    <div key={title} className="border border-white/[0.08] rounded-[18px] p-[18px]" style={{ background: 'rgba(255,255,255,.03)' }}>
                      <h4 className="text-white text-[16px] font-bold mb-2">{title}</h4>
                      <p className="text-[#a8b6cc] text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="border-l-[5px] border-[#34d399] rounded-[18px] px-5 py-[18px] mt-[18px]"
                  style={{ background: 'linear-gradient(135deg, rgba(52,211,153,.12), rgba(56,189,248,.08))' }}
                >
                  <strong className="text-white">Why this helps:</strong> <span className="text-[#a8b6cc]">when machine data is organized, the client can make better buying decisions and avoid costly mistakes.</span>
                </div>
              </section>
            </div>

            {/* Right machinery decision */}
            <section
              className="rounded-[24px] p-4 sm:p-[30px] border border-white/[0.08] mb-[22px]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                boxShadow: '0 18px 50px rgba(0,0,0,.25)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-[#f8fbff]"
                style={{ fontSize: 'clamp(26px, 2.7vw, 38px)', lineHeight: 1.14 }}
              >
                How we help clients make the right machinery decision
              </h2>
              <p className="text-[#a8b6cc] text-[16px] mb-[14px]">
                Machinery purchase is one of the biggest investments in an e-waste recycling plant. So we guide clients through each decision carefully.
              </p>
              <div className="grid grid-cols-2 gap-[22px]">
                <div>
                  <h3 className="text-[#f8fbff] text-[22px] font-bold mt-[18px] mb-[10px]">1. Capacity planning</h3>
                  <p className="text-[#a8b6cc] text-[16px] mb-[14px]">We help define how much material the plant should process so the machine size stays practical and cost-effective.</p>
                  <h3 className="text-[#f8fbff] text-[22px] font-bold mt-[18px] mb-[10px]">2. Process matching</h3>
                  <p className="text-[#a8b6cc] text-[16px] mb-[14px]">We select machines that support the actual recovery process, not just machines that look powerful on paper.</p>
                </div>
                <div>
                  <h3 className="text-[#f8fbff] text-[22px] font-bold mt-[18px] mb-[10px]">3. Budget balancing</h3>
                  <p className="text-[#a8b6cc] text-[16px] mb-[14px]">The goal is to create a plant that performs well without forcing the client into unnecessary overspending.</p>
                  <h3 className="text-[#f8fbff] text-[22px] font-bold mt-[18px] mb-[10px]">4. Expansion planning</h3>
                  <p className="text-[#a8b6cc] text-[16px] mb-[14px]">We think ahead so the client can add new lines or upgrade equipment later without starting from zero.</p>
                </div>
              </div>
              <div
                className="border-l-[5px] border-[#34d399] rounded-[18px] px-5 py-[18px] my-[18px]"
                style={{ background: 'linear-gradient(135deg, rgba(52,211,153,.12), rgba(56,189,248,.08))' }}
              >
                <strong className="text-white">Client-friendly point:</strong> <span className="text-[#a8b6cc]">the best machine is not always the biggest one — it is the one that fits the business perfectly.</span>
              </div>
            </section>

            {/* Machine selection table */}
            <section
              className="rounded-[24px] p-4 sm:p-[30px] border border-white/[0.08] mb-[22px]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                boxShadow: '0 18px 50px rgba(0,0,0,.25)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-[#f8fbff]"
                style={{ fontSize: 'clamp(26px, 2.7vw, 38px)', lineHeight: 1.14 }}
              >
                Graph-based machine selection view
              </h2>
              <p className="text-[#a8b6cc] text-[16px] mb-[14px]">
                This comparison makes it easier for the client to understand where the key investment areas usually sit.
              </p>
              <div className="overflow-x-auto rounded-[20px] border border-white/[0.08] mt-4">
                <table className="w-full border-collapse" style={{ minWidth: 780, background: 'rgba(255,255,255,.02)' }}>
                  <thead>
                    <tr>
                      {['Machine Area', 'Role in plant', 'Decision priority'].map((h) => (
                        <th key={h} className="text-white text-left px-4 py-[15px] text-[14px] border-b border-white/[0.08]" style={{ background: 'rgba(255,255,255,.06)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Primary dismantling', 'Initial breakdown of devices and assemblies', 'High'],
                      ['Size reduction', 'Prepares material for separation and recovery', 'Very High'],
                      ['Metal separation', 'Improves output quality and value', 'High'],
                      ['Dust / emission control', 'Protects health and compliance', 'Very High'],
                      ['Material movement system', 'Keeps flow smooth across the plant', 'Medium to High'],
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.03]">
                        {row.map((cell, j) => (
                          <td key={j} className="border-t border-white/[0.08] px-4 py-[14px] text-[14px] text-[#c7d5e8] align-top">{cell}</td>
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
                borderColor: 'rgba(245,158,11,.26)',
                boxShadow: '0 18px 50px rgba(0,0,0,.25)',
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-white"
                style={{ fontSize: 'clamp(26px, 2.7vw, 38px)', lineHeight: 1.14 }}
              >
                Case study: helping a client choose the right machine line
              </h2>
              <p className="text-[#a8b6cc] text-[16px] mb-[14px]">
                A client approached us with a plan to start an e-waste recycling plant, but the machinery list was too broad and expensive.
                The quote covered equipment that the plant did not immediately need.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px] mt-[18px]">
                {[
                  { title: 'The challenge', text: 'The client was confused between a full-scale setup and a smaller practical line. The machine list did not match the actual target capacity.' },
                  { title: 'The solution', text: 'We reviewed the input material, daily target, layout, and budget. Then we created a machine plan that matched real business needs.' },
                  { title: 'The result', text: 'The client reduced unnecessary spending, got a cleaner production flow, and felt more confident about long-term expansion.' },
                ].map(({ title, text }) => (
                  <div key={title} className="rounded-[18px] p-[18px] border border-white/[0.08]" style={{ background: 'rgba(255,255,255,.03)' }}>
                    <h4 className="text-white text-[16px] font-bold mb-2">{title}</h4>
                    <p className="text-[#a8b6cc] text-[14px] m-0">{text}</p>
                  </div>
                ))}
              </div>
              <div
                className="border-l-[5px] border-[#34d399] rounded-[18px] px-5 py-[18px] mt-[18px]"
                style={{ background: 'linear-gradient(135deg, rgba(52,211,153,.12), rgba(56,189,248,.08))' }}
              >
                <strong className="text-white">Lesson from the case:</strong> <span className="text-[#a8b6cc]">a good machinery plan saves money, space, and future correction costs.</span>
              </div>
            </section>

            {/* Additional topics */}
            <section
              className="rounded-[24px] p-4 sm:p-[30px] border border-white/[0.08] mb-[22px]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                boxShadow: '0 18px 50px rgba(0,0,0,.25)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-[#f8fbff]"
                style={{ fontSize: 'clamp(26px, 2.7vw, 38px)', lineHeight: 1.14 }}
              >
                Additional topics that help the client understand machinery better
              </h2>
              <p className="text-[#a8b6cc] text-[16px] mb-[14px]">
                To make the blog more useful, it helps to explain the link between machinery and overall plant performance.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px]">
                <div>
                  <h3 className="text-[#f8fbff] text-[22px] font-bold mt-[18px] mb-[10px]">Plant layout and machinery fit</h3>
                  <p className="text-[#a8b6cc] text-[16px] mb-[14px]">A good machine line should fit the available space, movement path, and operating logic of the plant.</p>
                  <h3 className="text-[#f8fbff] text-[22px] font-bold mt-[18px] mb-[10px]">Safety and dust control</h3>
                  <p className="text-[#a8b6cc] text-[16px] mb-[14px]">In recycling plants, safety is not optional. Dust control, guards, and safe handling points are a major part of the design.</p>
                </div>
                <div>
                  <h3 className="text-[#f8fbff] text-[22px] font-bold mt-[18px] mb-[10px]">Maintenance planning</h3>
                  <p className="text-[#a8b6cc] text-[16px] mb-[14px]">Machines run well when service and maintenance are planned from the beginning.</p>
                  <h3 className="text-[#f8fbff] text-[22px] font-bold mt-[18px] mb-[10px]">Future upgrade path</h3>
                  <p className="text-[#a8b6cc] text-[16px] mb-[14px]">We also help clients prepare for future growth so the plant can be upgraded without major redesign.</p>
                </div>
              </div>
              <div
                className="border-l-[5px] border-[#34d399] rounded-[18px] px-5 py-[18px] my-[18px]"
                style={{ background: 'linear-gradient(135deg, rgba(52,211,153,.12), rgba(56,189,248,.08))' }}
              >
                <strong className="text-white">Easy client explanation:</strong> <span className="text-[#a8b6cc]">the machinery plan should support today's business and tomorrow's growth at the same time.</span>
              </div>
            </section>

            {/* FAQ */}
            <section
              className="rounded-[24px] p-4 sm:p-[30px] border border-white/[0.08] mb-[22px]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))',
                boxShadow: '0 18px 50px rgba(0,0,0,.25)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-[#f8fbff]"
                style={{ fontSize: 'clamp(26px, 2.7vw, 38px)', lineHeight: 1.14 }}
              >
                Frequently asked questions
              </h2>
              <div className="flex flex-col gap-3 mt-4">
                {[
                  { q: 'Why is machinery selection so important in e-waste recycling?', a: 'Because the equipment determines output quality, speed, safety, and profit. A weak machine plan can slow down the entire plant.' },
                  { q: 'Do clients need a full machine line at the beginning?', a: 'Not always. The right answer depends on the material type, target capacity, and budget. We help clients choose what is practical first.' },
                  { q: 'Can machinery be expanded later?', a: 'Yes. A good plant plan keeps future expansion in mind, so new machines can be added without starting the project again.' },
                ].map(({ q, a }) => (
                  <div key={q} className="rounded-[18px] px-5 py-[18px] border border-white/[0.08]" style={{ background: 'rgba(255,255,255,.03)' }}>
                    <h4 className="text-white text-[16px] font-bold mb-[6px]">{q}</h4>
                    <p className="text-[#a8b6cc] text-[14px] m-0">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Closing */}
            <section
              className="text-center text-white rounded-[32px] px-4 sm:px-[30px] py-10 sm:py-[58px] mt-6 border border-white/[0.08]"
              style={{
                background: `
                  radial-gradient(circle at top, rgba(56,189,248,.16), transparent 38%),
                  linear-gradient(135deg, #07111f 0%, #0f2b4d 55%, #103c34 100%)
                `,
                boxShadow: '0 18px 50px rgba(0,0,0,.25)',
              }}
            >
              <h2
                className="text-white font-extrabold mb-[10px]"
                style={{ fontSize: 'clamp(26px, 2.7vw, 38px)', lineHeight: 1.14 }}
              >
                Final Thoughts
              </h2>
              <p className="max-w-[900px] mx-auto mb-3 text-[16px] text-[#dbeafe]">
                Machinery is the engine of an e-waste recycling plant, but the right machinery is chosen through planning, not guesswork.
                When the client gets the correct machine line, the plant becomes safer, faster, and more profitable.
              </p>
              <p className="max-w-[900px] mx-auto mb-3 text-[16px] text-[#dbeafe]">
                We help clients make smart machinery decisions that match the project, the budget, and the future business goal.
              </p>
              <div className="text-[28px] font-extrabold mt-[18px] text-white">
                "The right machinery builds the right recycling business."
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
