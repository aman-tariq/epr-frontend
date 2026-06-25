import React from 'react';
import StickyContactForm from '@/components/StickyContactForm';

const OperationPerformanceManagement = () => {
  return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-8 md:pt-20 pb-20">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid gap-8 lg:grid-cols-[1.65fr_280px]">
          <div className="space-y-12">

        {/* ==================== HERO SECTION ==================== */}
        <section className="bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden mb-12">
          {/* <div className="absolute -right-20 -bottom-32 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-100 to-transparent pointer-events-none" /> */}
          
          <span className="inline-block px-5 py-2.5 bg-emerald-100 text-emerald-700 text-sm font-semibold tracking-widest rounded-full border border-emerald-200">
            Business Growth Blog
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6">
            Operation and Performance Management 
          </h1>

          {/* Featured Image */}
          {/* <div className="featured-image relative h-80 rounded-3xl border border-slate-200 mb-8 overflow-hidden flex items-center justify-center bg-gradient-to-br from-emerald-100 via-amber-100 to-transparent">
            <div className="text-center z-10 px-8">
              <span className="inline-block px-6 py-3 border border-dashed border-slate-300 rounded-2xl text-slate-600 bg-white/90 backdrop-blur-sm">
                Featured Image / Blog Cover Placeholder
              </span>
            </div>
          </div> */}

          <p className="max-w-3xl text-lg text-slate-700 leading-relaxed">
            Great businesses do not grow by luck. They grow when operations stay organized, performance stays visible, and every team knows exactly what success looks like.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              { title: "Faster", desc: "Decision-making through live tracking and clear KPIs." },
              { title: "Smarter", desc: "Teams work with data, not assumptions." },
              { title: "Lean", desc: "Less waste, fewer delays, better resource use." },
              { title: "Scalable", desc: "Processes stay strong as the business expands." }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6">
                <strong className="block text-2xl mb-2 text-slate-900">{stat.title}</strong>
                <span className="text-slate-700 text-[15px]">{stat.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why it matters + Core Benefits */}
        <div className="grid l gap-8 mb-12">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6">Why operation and performance management matters</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Operation and performance management is the discipline that keeps a business running smoothly while helping it improve over time. It connects planning, execution, tracking, and correction into one practical system. When this system is strong, teams can spot delays early, reduce errors, improve output, and deliver better customer experiences.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              It is not only about efficiency. It is also about clarity. A business may have talented people and good tools, but without a clear process for monitoring performance, progress becomes hard to measure.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Process control', 'KPI monitoring', 'Resource planning', 'Continuous improvement', 'Quality assurance'].map((chip, i) => (
                <span key={i} className="px-5 py-2 bg-slate-100 border border-slate-200 rounded-full text-sm text-slate-700">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-6 text-slate-900">Core benefits at a glance</h3>
            <ul className="space-y-4 text-slate-700">
              {[
                "Better visibility into daily performance",
                "Faster response to bottlenecks and issues",
                "Stronger accountability across teams",
                "More consistent quality in delivery",
                "Lower operational cost over time"
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Major Topics */}
        <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 mb-12">
          <h2 className="text-3xl font-bold mb-3">Major topics every strong operation should cover</h2>
          <p className="text-slate-700 mb-10">These are the building blocks that help businesses stay efficient, stable, and ready for growth.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { tag: "KPI strategy", title: "Measure what truly matters", desc: "Choose the right indicators for speed, quality, cost, and customer experience so performance stays clear and actionable." },
              { tag: "Bottleneck control", title: "Find delays early", desc: "Spot where work slows down, why it slows down, and how to remove the block before it affects the whole process." },
              { tag: "Resource planning", title: "Use people and tools wisely", desc: "Balance labor, equipment, time, and inventory so the business does not waste capacity or miss demand." },
              { tag: "Quality control", title: "Keep standards steady", desc: "Create checks that protect output quality and reduce rework, defects, and customer complaints." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <span className="inline-block px-4 py-1 text-xs font-bold bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200">{item.tag}</span>
                <h3 className="text-xl font-semibold mt-5 mb-3">{item.title}</h3>
                <p className="text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Practical Side + Timeline */}
        <div className="grid  gap-8 mb-12">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6">The practical side of strong operations</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Good operations are built on simple habits done well. Leaders define the goal, teams follow the process, and performance gets reviewed often enough to make real changes.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              In real life, this means fewer missed deadlines, cleaner handoffs between teams, better inventory movement, and sharper use of time and money.
            </p>
            <h3 className="text-xl font-semibold mb-4">What high-performing teams usually do</h3>
            <ul className="space-y-3 text-slate-700">
              {[
                "Set clear targets for speed, quality, and output",
                "Track performance every day or every shift",
                "Review root causes instead of only symptoms",
                "Train people around standard workflows",
                "Use dashboards to keep progress visible"
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-emerald-600">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-6">Simple improvement loop</h3>
            <div className="space-y-6">
              {[
                { num: "1", title: "Plan", desc: "Set targets, rules, and expected outcomes." },
                { num: "2", title: "Execute", desc: "Run the process consistently across teams." },
                { num: "3", title: "Measure", desc: "Track performance through dashboards and reports." },
                { num: "4", title: "Improve", desc: "Fix bottlenecks and repeat what works." }
              ].map((step, i) => (
                <div key={i} className="flex gap-5 border-b border-slate-200 pb-6 last:border-none">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center border border-emerald-200 flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <strong>{step.title}</strong>
                    <p className="text-slate-700 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Dashboard */}
        <section className="grid  gap-8 mb-12">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6">Performance dashboard</h2>
            <p className="text-slate-700 mb-10">This visual section shows how a well-managed operation can translate business activity into clear, measurable outcomes.</p>

            {/* Bar Charts */}
            <div className="space-y-8 mb-12">
              {[
                { label: "On-time delivery", val: 92, color: "from-emerald-500 to-lime-400" },
                { label: "Process efficiency", val: 84, color: "from-amber-400 to-orange-400" },
                { label: "Quality consistency", val: 88, color: "from-emerald-500 to-lime-400" },
                { label: "Waste reduction", val: 67, color: "from-rose-400 to-orange-400" }
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-[130px_1fr_52px] gap-4 items-center">
                  <div className="text-sm text-slate-700">{item.label}</div>
                  <div className="h-4 bg-slate-200 rounded-full overflow-hidden border border-slate-200">
                    <div className={`h-full bg-gradient-to-r ${item.color}`} style={{ width: `${item.val}%` }} />
                  </div>
                  <div className="font-bold text-right tabular-nums">{item.val}%</div>
                </div>
              ))}
            </div>

            {/* Donut Charts */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { percent: 72, label: "Output utilization", title: "Capacity use", color: "#22c55e" },
                { percent: 64, label: "Team reliability", title: "Task completion", color: "#4ade80" },
                { percent: 81, label: "Customer impact", title: "Satisfaction score", color: "#facc15" },
                { percent: 22, label: "Risk indicator", title: "Delay risk", color: "#fb7185" }
              ].map((d, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                  <span className="inline-block px-4 py-1 text-xs font-bold bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200">{d.label}</span>
                  <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
                    <div
                      className="w-32 h-32 rounded-full relative flex-shrink-0 flex items-center justify-center"
                      style={{ background: `conic-gradient(${d.color} 0 ${d.percent}%, rgba(15,23,42,0.08) ${d.percent}% 100%)` }}
                    >
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border border-slate-200">
                        <span className="text-4xl font-bold text-slate-900">{d.percent}%</span>
                      </div>
                    </div>
                    <div>
                      <strong className="block text-xl mb-2">{d.title}</strong>
                      <p className="text-slate-700">A healthy system keeps equipment, people, and time working near the right level.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database Snapshot */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6">Database snapshot</h2>
            <p className="text-slate-700 mb-8">A simple operations database keeps performance visible and easy to review.</p>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left p-5 border-b border-slate-200">Metric</th>
                    <th className="text-left p-5 border-b border-slate-200">Current</th>
                    <th className="text-left p-5 border-b border-slate-200">Goal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    ["Cycle time", "18 min", "15 min"],
                    ["Order accuracy", "97%", "99%"],
                    ["Idle time", "6%", "3%"],
                    ["Rework rate", "4%", "2%"],
                    ["Service response", "11 min", "8 min"]
                  ].map(([metric, current, goal], i) => (
                    <tr key={i}>
                      <td className="p-5">{metric}</td>
                      <td className="p-5 font-medium">{current}</td>
                      <td className="p-5 text-slate-700">{goal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-700 text-sm mt-8">This table acts like a mini control room. It helps leaders compare actual performance with the target and act quickly.</p>
          </div>
        </section>

        {/* Case Study */}
        <div className="grid gap-8 mb-12">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-8">Case study: how a mid-size operation improved performance</h2>
            <p><strong>Company profile:</strong> A mid-size manufacturing business was facing late deliveries, frequent rework, and rising costs. The team was busy every day, but the results were still uneven.</p>
            <p className="mt-6"><strong>What changed:</strong> The company introduced a simple performance management system with daily KPIs, shift dashboards, weekly review meetings, and a clear root-cause process. Managers stopped guessing and started using data to guide action.</p>
            <p className="mt-6"><strong>Results after three months:</strong> On-time delivery improved from 76% to 92%. Rework dropped by 35%. Team leaders reported fewer last-minute fire drills because problems were detected earlier.</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-6 text-slate-900">Case study takeaways</h3>
            <ul className="space-y-4 text-slate-700">
              {[
                "Visibility creates accountability.",
                "Small daily checks prevent bigger failures.",
                "Clear KPIs align teams around one goal.",
                "Data-backed reviews make improvement faster."
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-emerald-600">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 mb-12">
          <h2 className="text-3xl font-bold mb-10">FAQs</h2>
          <div className="space-y-4">
            {[
              ["What is operation and performance management?", "It is the process of running daily work efficiently while measuring results and improving them over time. It links planning, execution, reporting, and continuous improvement."],
              ["Why is it important for growing businesses?", "Because growth brings more work, more complexity, and more pressure on teams. Strong management keeps quality stable even when demand increases."],
              ["Which KPIs matter most?", "The best KPIs depend on the business, but common ones include cycle time, on-time delivery, accuracy, productivity, cost per unit, and customer satisfaction."],
              ["How often should performance be reviewed?", "Fast-moving teams may review daily. Others may review weekly or monthly. The key is to review often enough to correct problems before they spread."]
            ].map(([q, a], i) => (
              <details key={i} className="group bg-slate-50 border border-slate-200 rounded-2xl p-7">
                <summary className="font-semibold cursor-pointer text-lg">{q}</summary>
                <p className="text-slate-700 mt-5 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>
        

        {/* Final Thought */}
        <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">Final thought</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
            Operation and performance management is not a theory for boardrooms only. It is a practical business habit that keeps teams focused, reduces waste, and supports long-term growth. When a company can see its work clearly, it can improve it quickly. That is how steady operations become strong performance—and strong performance becomes business growth.
          </p>
        </section>
          </div>
          {/* Sidebar */}
      <aside className="hidden lg:block sticky top-28 self-start">
        <StickyContactForm />
      </aside>
            
           
        </div>
      </main>
    </div>
  );
};

export default OperationPerformanceManagement;