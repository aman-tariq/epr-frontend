import React, { useEffect } from 'react';
import Seo from "@/components/Seo";
import Chart from 'chart.js/auto';
import StickyContactForm from '@/components/StickyContactForm';

const TyreDpr: React.FC = () => {
    useEffect(() => {
        // Bar Chart - Major Focus Areas in DPR
        new Chart(document.getElementById('dprFocusChart') as HTMLCanvasElement, {
            type: 'bar',
            data: {
                labels: ['Financial Planning', 'Technical Structure', 'Approval Planning', 'Machinery Selection', 'Market Study'],
                datasets: [{
                    label: 'Focus Level (%)',
                    data: [95, 89, 82, 75, 68],
                    // Utilizing primary, secondary, and balancing colors across the light framework
                    backgroundColor: ['#38bdf8', '#22c55e', '#f59e0b', '#fb7185', '#60a5fa'],
                    borderRadius: 8,
                }]
            },
            options: {
                responsive: true,
                indexAxis: 'y',
                plugins: { legend: { display: false } },
                scales: {
                    x: { max: 100, ticks: { color: '#475569' }, grid: { color: 'rgba(0,0,0,0.06)' } },
                    y: { ticks: { color: '#1e293b', font: { size: 14 } }, grid: { display: false } }
                }
            }
        });
    }, []);

    return (
        <>
            <Seo
                title="Detailed Project Report (DPR) for Tyre Waste Recycling Plant India 2026"
                description="Complete guide to creating a bankable Detailed Project Report (DPR) for tyre waste recycling plant. Includes financial projections, machinery planning, approval roadmap, market analysis, and full project structuring for tyre recycling business in India."
                keywords={[
                    "Detailed Project Report Tyre Recycling",
                    "DPR for Tyre Waste Recycling Plant",
                    "Tyre Recycling Plant Project Report",
                    "Tyre Waste Recycling Business Plan",
                    "Bankable DPR Tyre Recycling India",
                    "Tyre Recycling Plant Cost and Financials",
                    "Tyre Recycling Approvals in DPR",
                    "Machinery Planning Tyre Recycling Plant",
                    "Tyre Crumb Rubber Recycling DPR",
                    "Pyrolysis Oil TDO Recycling Project Report",
                    "How to Prepare DPR for Tyre Recycling"
                ]}
                url="https://eprnexuss.com/blog/tyre-dpr"
                type="article"
            />
            
            {/* Main Outer Container shifted to a bright, readable light slate layout */}
            <div className="bg-[#f8fafc] text-[#1e293b] font-['Inter'] min-h-screen pb-16">

                {/* HERO — Revamped with a light blue and secondary teal-sky gradient background */}
                <section className="relative overflow-hidden rounded-3xl mx-4 md:mx-6 mt-8 p-4 lg:p-12 md:p-20 text-center border border-[#d0e1f9]"
                    style={{
                        background: 'linear-gradient(135deg, rgba(240,246,255,0.95), rgba(56,189,248,0.15)), linear-gradient(135deg,#ffffff 0%,#e2f1e9 55%,#e0f2fe 100%)'
                    }}>
                    <div className="absolute w-[100px] h-[100px] lg:w-[300px] lg:h-[300px] bg-[#38bdf8]/10 rounded-full -top-16 -right-20" />
                    <div className="absolute w-[180px] h-[180px] bg-[#22c55e]/10 rounded-full -bottom-12 -left-12" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="inline-block px-4 lg:px-6 py-3 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-sm font-bold tracking-wider mb-8 text-[#0369a1]">
                            Tyre Waste Recycling | DPR Planning & Project Structuring
                        </div>
                        <h1 className="text-2xl lg:text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-8 text-[#0f172a]">
                            We turn your tyre recycling idea into a bankable DPR
                        </h1>
                        <p className="text-lg md:text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed mb-8">
                            Every successful tyre waste recycling plant starts with a clear plan. We help clients convert their vision into a professionally organized Detailed Project Report.
                        </p>
                        <div className="text-xl font-semibold text-[#0f172a]">
                            “A strong DPR gives your recycling business clarity before construction even begins.”
                        </div>
                    </div>
                </section>

                {/* Content and Sidebar Responsive Grid Split */}
                <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr,350px] gap-8 lg:gap-12 items-start">
                        
                        {/* MAIN CONTENT COLUMN */}
                        <main className="min-w-0">
                            
                            {/* WHY + HOW WE HELP */}
                            <div className="grid md:grid-cols-1 gap-8 mb-12">
                                <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 lg:p-8 md:p-10 shadow-sm">
                                    <h2 className="text-xl lg:text-3xl font-bold mb-6 text-[#0f172a]">Why a bankable DPR matters</h2>
                                    <p className="text-[#475569] mb-6">
                                        In tyre waste recycling, the DPR is more than a formal document. It becomes the foundation of the entire project.
                                    </p>
                                    <p className="text-[#475569] mb-8">
                                        It helps understand operations, investment needs, approvals, and revenue potential.
                                    </p>
                                    <div className="highlight bg-[#f0f6ff] border-l-4 border-[#38bdf8] p-6 rounded-2xl">
                                        <strong className="text-[#0f172a]">Simple understanding:</strong> the DPR turns an idea into a practical business roadmap that people can trust.
                                    </div>
                                    <div className="flex flex-wrap gap-3 mt-8">
                                        {["Project roadmap", "Investment planning", "Approval support", "Business clarity"].map((chip) => (
                                            <span key={chip} className="px-5 py-2 text-sm font-bold rounded-full bg-[#f8fafc] border border-[#cbd5e1] text-[#334155]">{chip}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 lg:p-8 md:p-10 shadow-sm">
                                    <h2 className="text-xl lg:text-3xl font-bold mb-6 text-[#0f172a]">How we help our clients</h2>
                                    <p className="text-[#475569] mb-8">
                                        We simplify DPR preparation — delivering a detailed, readable, and commercially practical report.
                                    </p>
                                    <div className="highlight bg-[#e2f1e9] border-l-4 border-[#22c55e] p-6 rounded-2xl">
                                        <strong className="text-[#0f172a]">Client benefit:</strong> The project becomes easier to explain, finance, and execute.
                                    </div>
                                </div>
                            </div>

                            {/* WHO THIS IS FOR */}
                            <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 lg:p-8 md:p-10 mb-12 shadow-sm">
                                <h2 className="text-xl lg:text-3xl font-bold mb-6 text-[#0f172a]">Who this DPR is for</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        ["New entrepreneurs", "Starting a tyre recycling business for the first time"],
                                        ["Existing recyclers", "Planning expansion or new processing lines"],
                                        ["Investors", "Needing clear commercial & technical overview"],
                                        ["Financial institutions", "Requiring project logic for funding"]
                                    ].map(([title, desc]) => (
                                        <div key={title} className="bg-[#f0f6ff] p-4 lg:p-6 rounded-2xl border border-[#cbd5e1]">
                                            <h4 className="font-semibold text-lg mb-3 text-[#0f172a]">{title}</h4>
                                            <p className="text-[#475569] text-sm">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* BUSINESS VALUE CHAIN */}
                            <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 lg:p-8 md:p-10 mb-12 shadow-sm">
                                <h2 className="text-xl lg:text-3xl font-bold mb-6 text-[#0f172a]">How the tyre recycling business works</h2>
                                <p className="text-[#475569] mb-10">Complete value chain from input to final output.</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { n: "1", t: "Tyre collection", d: "Sourced from transport operators, scrap dealers, garages" },
                                        { n: "2", t: "Sorting", d: "Segregated by type and processing suitability" },
                                        { n: "3", t: "Processing", d: "Mechanical or thermal conversion into reusable material" },
                                        { n: "4", t: "Output products", d: "Rubber granules, steel, fibre, pyrolysis oil, carbon black" },
                                        { n: "5", t: "Sales", d: "Supplied to manufacturers and industrial buyers" }
                                    ].map((s) => (
                                        <div key={s.n} className="text-center bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6">
                                            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[#38bdf8] to-[#22c55e] flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-sm">
                                                {s.n}
                                            </div>
                                            <h4 className="font-semibold mb-2 text-[#0f172a]">{s.t}</h4>
                                            <p className="text-sm text-[#475569]">{s.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* DPR TOPICS TABLE */}
                            <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 lg:p-8 md:p-10 mb-12 shadow-sm">
                                <h2 className="text-xl lg:text-3xl font-bold mb-6 text-[#0f172a]">Key topics included in the DPR</h2>
                                <div className="overflow-x-auto rounded-2xl border border-[#cbd5e1]">
                                    <table className="w-full min-w-[900px]">
                                        <thead>
                                            <tr className="bg-[#f0f6ff]">
                                                <th className="text-left p-4 md:p-6 text-sm md:text-base text-[#0f172a] font-bold">DPR Section</th>
                                                <th className="text-left p-4 md:p-6 text-sm md:text-base text-[#0f172a] font-bold">Purpose</th>
                                                <th className="text-left p-4 md:p-6 text-sm md:text-base text-[#0f172a] font-bold">Why it matters</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[#cbd5e1] text-[#475569]">
                                            {[
                                                ["Project overview", "Explains business concept", "Clear starting point"],
                                                ["Industry overview", "Tyre waste opportunity", "Market context"],
                                                ["Market analysis", "Demand & opportunity", "Project viability"],
                                                ["Target customers", "Who buys the output", "Sales planning"],
                                                ["Plant process", "Recycling flow", "Operational understanding"],
                                                ["Machinery planning", "Equipment & design", "Technical clarity"],
                                                ["Financial planning", "Investment & revenue", "Funding support"],
                                                ["Risk analysis", "Challenges & controls", "Preparedness"],
                                                ["Approval mapping", "Permissions needed", "Legal readiness"]
                                            ].map(([a, b, c]) => (
                                                <tr key={a} className="hover:bg-[#f8fafc]/50 transition-colors">
                                                    <td className="p-4 md:p-6 font-semibold text-[#1e293b] text-sm md:text-base">{a}</td>
                                                    <td className="p-4 md:p-6 text-sm md:text-base">{b}</td>
                                                    <td className="p-4 md:p-6 text-sm md:text-base">{c}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* CHARTS SECTION */}
                            <div className="grid md:grid-cols-1 gap-8 mb-12">
                                {/* Focus Areas Bar Chart Container */}
                                <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 md:p-8 shadow-sm">
                                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#0f172a]">
                                        Major Focus Areas in DPR Preparation
                                    </h3>

                                    <div className="relative w-full h-[300px] md:h-80 overflow-hidden">
                                        <canvas
                                            id="dprFocusChart"
                                            className="!w-full !h-full"
                                        />
                                    </div>
                                </div>

                                {/* Readiness Tracker */}
                                <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 lg:p-8 md:p-10 shadow-sm">
                                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#0f172a]">DPR Readiness Tracker</h3>
                                    <div className="grid grid-cols-1 gap-6">
                                        {[
                                            ["Project Input", "Client requirements, capacity, business model"],
                                            ["Technical Data", "Machinery, process flow, utilities"],
                                            ["Financial Data", "Investment & revenue model"],
                                            ["Approval Data", "Licences and compliance planning"]
                                        ].map(([title, desc]) => (
                                            <div key={title} className="bg-[#f8fafc] p-6 rounded-2xl border border-[#cbd5e1]">
                                                <h4 className="font-semibold mb-2 text-[#0f172a]">{title}</h4>
                                                <p className="text-sm text-[#475569]">{desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* TARGET MARKETS & REVENUE STREAMS */}
                            <div className="grid md:grid-cols-1 gap-8 mb-12">
                                <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 lg:p-8 md:p-10 shadow-sm">
                                    <h2 className="text-xl lg:text-3xl font-bold mb-6 text-[#0f172a]">Target Market Segments</h2>
                                    {[
                                        ["Rubber product manufacturers", "Flooring, molded goods, industrial products"],
                                        ["Steel scrap buyers", "Steel wire from tyres"],
                                        ["Fuel & energy users", "Derived fuel / oil outputs"],
                                        ["Construction firms", "Rubber in surfacing & modified materials"]
                                    ].map(([title, desc]) => (
                                        <div key={title} className="mb-6 last:mb-0 bg-[#f8fafc] p-6 rounded-2xl border border-[#cbd5e1]">
                                            <h4 className="font-semibold mb-2 text-[#0f172a]">{title}</h4>
                                            <p className="text-sm text-[#475569]">{desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 lg:p-8 md:p-10 shadow-sm">
                                    <h2 className="text-xl lg:text-3xl font-bold mb-6 text-[#0f172a]">What the business can earn from</h2>
                                    <div className="grid grid-cols-1 gap-5">
                                        {[
                                            ["Material sales", "Recycled rubber, steel, carbon products"],
                                            ["Tipping/collection fees", "Waste processing services"],
                                            ["By-product sales", "Secondary value streams"],
                                            ["Long-term contracts", "Stable cash flow"],
                                            ["Expansion opportunities", "Future growth potential"]
                                        ].map(([title, desc]) => (
                                            <div key={title} className="flex gap-4 bg-[#f8fafc] p-5 rounded-2xl border border-[#cbd5e1]">
                                                <div className="w-8 h-8 rounded-full bg-[#22c55e] flex-shrink-0 flex items-center justify-center font-bold text-white shadow-sm">✓</div>
                                                <div>
                                                    <h4 className="font-semibold text-[#0f172a]">{title}</h4>
                                                    <p className="text-sm text-[#475569]">{desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* RISKS SECTION */}
                            <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 lg:p-8 md:p-10 mb-12 shadow-sm">
                                <h2 className="text-xl lg:text-3xl font-bold mb-6 text-[#0f172a]">Risks and how the DPR addresses them</h2>
                                <p className="text-[#475569] mb-10">
                                    Every project has challenges. A good DPR does not hide them; it explains them and shows how they can be managed.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        ["Feedstock availability", "The report evaluates where tyres will come from and how supply can be secured."],
                                        ["Market volatility", "The report considers pricing risk and dependence on buyer demand."],
                                        ["Operational efficiency", "The report maps process flow so bottlenecks can be reduced."],
                                        ["Compliance delay", "The report identifies approvals early so project timelines stay realistic."]
                                    ].map(([title, desc]) => (
                                        <div key={title} className="bg-[#f8fafc] p-6 rounded-2xl border border-[#cbd5e1]">
                                            <h4 className="font-semibold text-lg mb-3 text-[#0f172a]">{title}</h4>
                                            <p className="text-[#475569] text-sm">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* IMPLEMENTATION ROADMAP */}
                            <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 lg:p-8 md:p-10 mb-12 shadow-sm">
                                <h2 className="text-xl lg:text-3xl font-bold mb-6 text-[#0f172a]">Implementation roadmap</h2>
                                <p className="text-[#475569] mb-10">
                                    Clients often understand a project better when the full journey is shown in stages.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { num: "1", title: "Concept review", desc: "Clarify the business idea, scale, and goals." },
                                        { num: "2", title: "Feasibility study", desc: "Check market demand, sourcing, and economics." },
                                        { num: "3", title: "DPR drafting", desc: "Document technical, financial, and approval details." },
                                        { num: "4", title: "Investor discussion", desc: "Use the DPR to support funding and internal approvals." },
                                        { num: "5", title: "Project execution", desc: "Move toward procurement, setup, and commissioning." }
                                    ].map((item) => (
                                        <div key={item.num} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 text-center">
                                            <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-[#38bdf8] to-[#22c55e] flex items-center justify-center text-xl font-bold text-white mb-4 shadow-sm">
                                                {item.num}
                                            </div>
                                            <h4 className="font-semibold mb-3 text-[#0f172a]">{item.title}</h4>
                                            <p className="text-sm text-[#475569]">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* HOW WE MAKE DPR EASIER */}
                            <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 lg:p-8 md:p-10 mb-12 shadow-sm">
                                <h2 className="text-xl lg:text-3xl font-bold mb-6 text-[#0f172a]">How we make the DPR easier for clients to understand</h2>
                                <p className="text-[#475569] mb-10">
                                    A project report should not feel confusing. We organize the content in a practical way.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        ["Clear business explanation", "The report explains what the plant will do, how it will work, and how it may generate revenue."],
                                        ["Simple financial structure", "Investment and operational costs are presented in a practical and readable way."],
                                        ["Execution planning", "The DPR connects the report with real plant requirements and site planning."],
                                        ["Compliance mapping", "Approvals and regulatory requirements are connected directly to the project workflow."]
                                    ].map(([title, desc]) => (
                                        <div key={title} className="bg-[#f8fafc] p-6 rounded-2xl border border-[#cbd5e1]">
                                            <h4 className="font-semibold text-lg mb-3 text-[#0f172a]">{title}</h4>
                                            <p className="text-[#475569] text-sm">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CASE STUDY */}
                            <div className="bg-white border border-[#f59e0b]/40 rounded-3xl p-4 lg:p-8 md:p-10 mb-12 shadow-sm">
                                <h2 className="text-xl lg:text-3xl font-bold mb-6 text-[#0f172a]">Case Study: Turning an Idea into a Structured Project</h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {[
                                        ["The Challenge", "Project idea existed but no structured document"],
                                        ["The Solution", "Complete DPR with process, costing, approvals & structure"],
                                        ["The Outcome", "Gained clarity, confidence and professional edge"]
                                    ].map(([title, desc]) => (
                                        <div key={title} className="bg-[#fffbeb] p-6 rounded-2xl border border-[#f59e0b]/20">
                                            <h4 className="font-semibold text-lg mb-3 text-[#d97706]">{title}</h4>
                                            <p className="text-[#475569] text-sm">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="bg-white border border-[#d0e1f9] rounded-3xl p-4 lg:p-8 md:p-10 mb-12 shadow-sm">
                                <h2 className="text-xl lg:text-3xl font-bold mb-8 text-[#0f172a]">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    {[
                                        ["Why is a DPR important?", "It connects business idea, technical planning, approvals, financials, and execution into one document."],
                                        ["Can DPR help in funding?", "Yes. Banks and investors require a well-prepared DPR for project financing."],
                                        ["Why get it professionally done?", "Professional structure reduces confusion and builds credibility."]
                                    ].map(([q, a]) => (
                                        <div key={q} className="bg-[#f0f6ff] p-4 lg:p-8 rounded-2xl border border-[#cbd5e1]">
                                            <h4 className="font-semibold text-lg mb-4 text-[#0f172a]">{q}</h4>
                                            <p className="text-[#475569] text-sm">{a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CLOSING CALL TO ACTION SECTION */}
                            <div className="closing rounded-3xl p-12 md:p-20 text-center border border-[#d0e1f9] mt-12 bg-gradient-to-br from-[#ffffff] via-[#f0f6ff] to-[#e2f1e9]">
                                <h2 className="text-xl lg:text-4xl font-bold mb-6 text-[#0f172a]">Final Thoughts</h2>
                                <p className="text-lg text-[#475569] max-w-3xl mx-auto">
                                    A strong Detailed Project Report is the backbone of a successful tyre waste recycling project.
                                </p>
                                <div className="mt-10 text-lg lg:text-2xl font-bold text-[#0f172a]">
                                    “We turn recycling ideas into structured business opportunities.”
                                </div>
                            </div>

                        </main>
                        
                        {/* STICKY SIDEBAR COLUMN — Aligned with the light blue theme frames */}
                        <aside className="hidden lg:block sticky top-24 self-start h-fit will-change-transform z-30">
                            <div className="rounded-3xl border border-[#d0e1f9] bg-white p-1 shadow-sm">
                                <StickyContactForm />
                            </div>
                        </aside>

                    </div>
                </div>
            </div>
        </>
    );
};

export default TyreDpr;