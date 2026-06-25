import React, { useEffect } from 'react';
import Seo from "@/components/Seo";

const LithiumBatteryDpr: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            initializeCharts();
        };

        return () => {
            if (document.body.contains(script)) document.body.removeChild(script);
        };
    }, []);

    const initializeCharts = () => {
        const gridColor = 'rgba(34,52,83,0.6)';
        const textColor = '#a8b6d3';

        // Financial Bar Chart
        new (window as any).Chart(document.getElementById('financialBar'), {
            type: 'bar',
            data: {
                labels: ['Year 1', 'Year 3', 'Year 5'],
                datasets: [
                    { label: 'Revenue', data: [420, 675, 890], backgroundColor: '#38bdf8', borderRadius: 8 },
                    { label: 'EBITDA', data: [155, 295, 415], backgroundColor: '#22c55e', borderRadius: 8 },
                    { label: 'Profit After Tax', data: [82, 178, 268], backgroundColor: '#f59e0b', borderRadius: 8 }
                ]
            },
            options: {
                responsive: true,
                plugins: { legend: { labels: { color: textColor } } },
                scales: {
                    x: { grid: { color: gridColor }, ticks: { color: textColor } },
                    y: { grid: { color: gridColor }, ticks: { color: textColor, callback: (v: number) => '₹' + v } }
                }
            }
        });

        // Cost Donut
        new (window as any).Chart(document.getElementById('costDonut'), {
            type: 'doughnut',
            data: {
                labels: ['Land & Site Dev.', 'Building & Civil', 'Plant & Machinery', 'ETP & Pollution Ctrl', 'Electricals', 'Pre-op', 'Working Capital'],
                datasets: [{
                    data: [75, 85, 210, 38, 32, 15, 40],
                    backgroundColor: ['#38bdf8', '#22c55e', '#f59e0b', '#a855f7', '#ef4444', '#14b8a6', '#f97316'],
                    borderColor: '#0b1729',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                cutout: '62%',
                plugins: {
                    legend: { position: 'right', labels: { color: textColor, boxWidth: 12 } }
                }
            }
        });

        // Recovery Pie
        new (window as any).Chart(document.getElementById('recoveryPie'), {
            type: 'pie',
            data: {
                labels: ['Lithium', 'Cobalt', 'Nickel', 'Manganese', 'Graphite', 'Copper & Aluminium'],
                datasets: [{
                    data: [22, 28, 20, 10, 12, 8],
                    backgroundColor: ['#38bdf8', '#22c55e', '#f59e0b', '#a855f7', '#14b8a6', '#f97316'],
                    borderColor: '#0b1729',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'right', labels: { color: textColor, boxWidth: 12 } }
                }
            }
        });

        // Finance Bar
        new (window as any).Chart(document.getElementById('financeBar'), {
            type: 'bar',
            data: {
                labels: ['Promoter (25%)', 'Term Loan (65%)', 'Subsidy (10%)'],
                datasets: [{
                    label: '₹ Lakhs',
                    data: [123.75, 321.75, 49.5],
                    backgroundColor: ['#22c55e', '#38bdf8', '#f59e0b'],
                    borderRadius: 8
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { color: gridColor }, ticks: { color: textColor } },
                    y: { grid: { color: 'transparent' }, ticks: { color: textColor } }
                }
            }
        });
    };

    return (
        <>
      <Seo
        title="Detailed Project Report (DPR) for Lithium Ion Battery Recycling Plant 2026"
        description="Complete Detailed Project Report (DPR) for 5 TPD Mechanical + 2 TPD Hydromet Lithium Battery Recycling Plant. Includes machinery list, capital cost, financial projections, subsidies, CPCB approvals, ETP design, and bankable project plan."
        keywords={[
          "Detailed Project Report Lithium Battery Recycling",
          "DPR for Lithium Ion Battery Recycling Plant",
          "5 TPD Battery Recycling Plant Project Report",
          "Lithium Battery Recycling Plant Cost",
          "CPCB Authorization Battery Recycling",
          "Battery Recycling Plant Financial Projections",
          "Hydrometallurgical Lithium Battery Recycling",
          "Black Mass Processing Plant DPR",
          "Lithium Battery Recycling Subsidies India",
          "Battery Waste Recycling Plant Setup Cost",
          "Battery Recycling Plant Machinery List",
          "Bankable DPR for Lithium Battery Recycling",
          "EV Battery Recycling Project Report 2026"
        ]}
        url="https://eprnexuss.com/blog/lithium-battery-dpr"
            type="article"
      />
        <div className="min-h-screen bg-[#07111f] text-[#e8f0ff] font-sans">
            <div className="max-w-6xl mx-auto px-2 md:px-6 py-2 md:py-12">

                {/* HERO */}
                <div className="hero bg-gradient-to-br from-[#0f1c33] to-[#111f38] border border-[#38bdf8]/30 rounded-3xl p-2 md:p-10 md:p-16 mb-12 relative overflow-hidden">
                    <div className="badge inline-block bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] px-2 md:px-6 py-2 rounded-full text-sm font-medium mb-6">
                        🔋 Detailed Project Report | Lithium-Ion Battery Recycling Plant
                    </div>
                    <h1 className="text-xl md:text-5xl md:text-6xl font-bold leading-tight mb-8">
                        Turning Battery Waste into High-Value Resources:<br />
                        <span className="text-[#38bdf8]">5 TPD Black Mass + 2 TPD Hydromet Plant</span>
                    </h1>
                    <p className="text-[#d1e2ff] max-w-3xl">
                        An integrated, CPCB-aligned recycling facility designed to recover Lithium, Cobalt, Nickel, Manganese & Graphite.
                    </p>
                </div>

                {/* How EPR Nexuss Helps */}
                <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10 mb-12">
                    <h2 className="text-lg md:text-4xl font-bold mb-6">How EPR Nexuss Can Help Create a Detailed Project Report</h2>
                    <p className="text-[#a8b6d3] leading-relaxed text-lg">
                        EPR Nexuss helps clients create a detailed project report by turning a complex idea into a clear, practical, and business-ready plan.
                        From plant capacity and machinery needs to raw material sourcing, approvals, utilities, layout, cost structure, and expected returns —
                        we cover every aspect so you can make confident decisions and present a bankable project to lenders and regulators.
                    </p>
                </div>

                {/* Project Backbone */}
                <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10 mb-12">
                    <h2 className="text-lg md:text-3xl font-bold mb-6">🏭 Project Backbone: Green Permits Consulting & G.Kumar Electro Pvt Ltd</h2>
                    <p className="text-[#a8b6d3] mb-6">
                        <strong>G.Kumar Electro Private Limited</strong> (Lucknow) is the driving force behind this initiative.
                        With <strong>Green Permits Consulting</strong>, we bring unmatched expertise in recycling plant design, regulatory navigation, and end-to-end execution.
                    </p>
                </div>

                {/* Executive Snapshot */}
                <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10 mb-12">
                    <h2 className="text-lg md:text-3xl font-bold mb-6">📌 Executive Snapshot: Why This Plant Matters</h2>
                    <p className="text-[#a8b6d3] mb-8">
                        The facility processes <strong>5 tons per day</strong> of end-of-life batteries into black mass, followed by <strong>2 TPD hydrometallurgical refining</strong>.
                    </p>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { num: "5 TPD", label: "Mechanical recycling" },
                            { num: "2 TPD", label: "Hydromet processing" },
                            { num: "95%+", label: "Target recovery efficiency" },
                            { num: "2022", label: "Compliant with Battery Waste Rules" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#111f38] border border-[#223453] rounded-2xl p-6 text-center">
                                <div className="text-lg md:text-4xl font-bold text-[#38bdf8] mb-2">{stat.num}</div>
                                <div className="text-sm text-[#a8b6d3]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technology & Equipment + ETP */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10">
                        <h2 className="text-lg md:text-3xl font-bold mb-6">⚙️ Technology & Equipment</h2>
                        <ul className="space-y-4 text-[#a8b6d3]">
                            {[
                                "Battery discharge station",
                                "Primary & secondary shredders (5 TPD)",
                                "Hammer mill & granulator",
                                "Magnetic & eddy current separators",
                                "Hydrometallurgical reactors & leaching tanks",
                                "Solvent extraction & electrowinning setup",
                                "Lithium precipitation unit",
                                "Dust collection & bag filters"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3">• {item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10">
                        <h2 className="text-lg md:text-3xl font-bold mb-6">💧 ETP & Pollution Control</h2>
                        <ul className="space-y-4 text-[#a8b6d3]">
                            {[
                                "Multi-stage Effluent Treatment Plant (ETP)",
                                "Air pollution control (bag filters + scrubbers)",
                                "Zero Liquid Discharge approach",
                                "Hazardous waste storage with spill containment",
                                "Online emission & effluent monitoring"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3">• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Subsidies + Raw Material */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10">
                        <h2 className="text-lg md:text-3xl font-bold mb-6">💰 Subsidies & Incentives</h2>
                        <ul className="space-y-3 text-[#a8b6d3]">
                            <li>• State capital subsidy (15-25%)</li>
                            <li>• SIDBI Green Finance interest subvention</li>
                            <li>• Priority sector lending</li>
                            <li>• Waste to Wealth Mission support</li>
                        </ul>
                    </div>
                    <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10">
                        <h2 className="text-lg md:text-3xl font-bold mb-6">📦 Raw Material Procurement</h2>
                        <ul className="space-y-3 text-[#a8b6d3]">
                            <li>• EV OEM & e-rickshaw manufacturers</li>
                            <li>• EPR Producer tie-ups</li>
                            <li>• E-waste aggregators in NCR & UP</li>
                            <li>• Institutional UPS & telecom battery scrap</li>
                        </ul>
                    </div>
                </div>

                {/* ==================== RESPONSIVE DASHBOARD ==================== */}
                <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10 mb-12">
                    <h2 className="text-lg md:text-3xl font-bold mb-8 text-center md:text-left">📊 At-a-Glance Visual Dashboard</h2>

                    <div className="space-y-12">

                        {/* Financial Projections */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Financial Projections (₹ Lakhs)</h3>
                            <div className="bg-[#111f38] rounded-2xl p-4 md:p-6">
                                <div className="h-72 md:h-80">
                                    <canvas id="financialBar" className="w-full h-full" />
                                </div>
                            </div>
                        </div>

                        {/* Project Cost Breakdown */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Project Cost Breakdown</h3>
                            <div className="bg-[#111f38] rounded-2xl p-4 md:p-6">
                                <div className="flex justify-center">
                                    <div className="w-full max-w-[320px] md:max-w-[380px]">
                                        <canvas id="costDonut" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Two Charts Side by Side on larger screens */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Recovery Pie */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Recovered Output Composition (% by value)</h3>
                                <div className="bg-[#111f38] rounded-2xl p-4 md:p-6">
                                    <div className="flex justify-center">
                                        <div className="w-full max-w-[300px]">
                                            <canvas id="recoveryPie" className="w-full h-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Means of Finance */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Means of Finance</h3>
                                <div className="bg-[#111f38] rounded-2xl p-4 md:p-6">
                                    <div className="h-72">
                                        <canvas id="financeBar" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="min-h-screen bg-[#07111f] text-[#e8f0ff] font-sans">
                    <div className="max-w-6xl mx-auto px-2 md:px-6 py-2 md:py-12">

                        {/* Previous sections (Hero, How EPR Nexuss Helps, Executive Snapshot, etc.) remain the same */}

                        {/* CAPITAL OUTLAY & FINANCIAL PLAN */}
                        <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10 mb-12">
                            <h2 className="text-lg md:text-3xl font-bold mb-6">📊 Capital Outlay Estimates & Financial Plan</h2>

                            <p className="text-xl font-semibold mb-6 text-[#38bdf8]">Project Cost (₹ Lakhs)</p>

                            <ul className="space-y-4 text-[#a8b6d3] mb-8">
                                <li>• Land & site development (owned by client) — ₹75 Lakhs</li>
                                <li>• Building & civil works (plant shed, office, stores) — ₹85 Lakhs</li>
                                <li>• Plant & machinery (mechanical + hydromet line) — ₹210 Lakhs</li>
                                <li>• ETP + pollution control systems — ₹38 Lakhs</li>
                                <li>• Electricals, DG set, utilities — ₹32 Lakhs</li>
                                <li>• Pre-operative expenses, commissioning — ₹15 Lakhs</li>
                                <li>• Working capital margin — ₹40 Lakhs</li>
                            </ul>

                            <p className="text-2xl font-bold mb-6">
                                Total Project Outlay: <span className="text-[#38bdf8]">₹495 Lakhs (₹4.95 Cr)</span>
                            </p>

                            <div className="bg-[#111f38] border-l-4 border-[#f59e0b] p-6 rounded-2xl mb-10">
                                <strong className="text-[#f59e0b]">Means of Finance:</strong> Promoter contribution 25% (~₹1.24 Cr) + Term loan 65% + state subsidy 10%.
                                Projected IRR: 22-25% | Payback: ~4.5 years.
                            </div>

                            <h3 className="text-2xl font-semibold mb-4">📈 Financial Projections (Year 1-5)</h3>
                            <div className="overflow-x-auto rounded-2xl border border-[#223453] mb-8">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-[#111f38]">
                                            <th className="text-left p-4 border-b border-[#223453]">Particulars (₹ Lakhs)</th>
                                            <th className="text-center p-4 border-b border-[#223453]">Year 1</th>
                                            <th className="text-center p-4 border-b border-[#223453]">Year 3</th>
                                            <th className="text-center p-4 border-b border-[#223453]">Year 5</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[#a8b6d3]">
                                        <tr className="border-b border-[#223453]"><td className="p-4">Revenue</td><td className="text-center p-4">420</td><td className="text-center p-4">675</td><td className="text-center p-4">890</td></tr>
                                        <tr className="border-b border-[#223453]"><td className="p-4">Operating Expenses</td><td className="text-center p-4">265</td><td className="text-center p-4">380</td><td className="text-center p-4">475</td></tr>
                                        <tr className="border-b border-[#223453]"><td className="p-4 font-semibold text-[#38bdf8]">EBITDA</td><td className="text-center p-4 font-semibold">155</td><td className="text-center p-4 font-semibold">295</td><td className="text-center p-4 font-semibold">415</td></tr>
                                        <tr><td className="p-4 font-semibold text-[#22c55e]">Profit After Tax</td><td className="text-center p-4 font-semibold">82</td><td className="text-center p-4 font-semibold">178</td><td className="text-center p-4 font-semibold">268</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-[#a8b6d3]">CMA Data highlights: DSCR &gt; 1.85, comfortable liquidity. The project is highly bankable.</p>
                        </div>

                        {/* Project Execution Strategy + Process Flow */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10">
                                <h2 className="text-lg md:text-3xl font-bold mb-6">📅 Project Execution Strategy (Phased)</h2>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {[
                                        "Phase 1: Site selection & lease",
                                        "Phase 2: Civil & utilities",
                                        "Phase 3: Machinery procurement & installation",
                                        "Phase 4: ETP & safety systems",
                                        "Phase 5: Trial runs & CPCB consent",
                                        "Phase 6: Commercial operations"
                                    ].map((phase, i) => (
                                        <div key={i} className="bg-[#111f38] px-5 py-3 rounded-full text-sm border border-[#223453]">
                                            {phase}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[#a8b6d3]">Total timeline: <strong>10-12 months</strong> from approval.</p>
                            </div>

                            <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10">
                                <h2 className="text-lg md:text-3xl font-bold mb-6">🔄 Process Flow (Mechanical + Hydromet)</h2>
                                <ol className="space-y-4 text-[#a8b6d3]">
                                    <li><strong>Step 1:</strong> Battery collection & sorting → Discharge</li>
                                    <li><strong>Step 2:</strong> Dismantling & de-casing → Shredding</li>
                                    <li><strong>Step 3:</strong> Sieving, magnetic & eddy current separation → Black mass</li>
                                    <li><strong>Step 4:</strong> Black mass to hydromet → Leaching</li>
                                    <li><strong>Step 5:</strong> Solvent extraction (Co, Ni, Mn)</li>
                                    <li><strong>Step 6:</strong> Lithium precipitation & crystallization</li>
                                    <li><strong>Step 7:</strong> Drying & packing of final products</li>
                                </ol>
                            </div>
                        </div>

                        {/* Regulatory Compliance + Hazardous Waste */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10">
                                <h2 className="text-lg md:text-3xl font-bold mb-6">📜 Regulatory Compliance Requirements</h2>
                                <ul className="space-y-4 text-[#a8b6d3]">
                                    <li><strong>Battery Waste Management Rules, 2022</strong> – CPCB Recycler Registration</li>
                                    <li><strong>Hazardous Waste Rules, 2016</strong> – Authorisation for storage & processing</li>
                                    <li><strong>CTE & CTO</strong> from State Pollution Control Board</li>
                                    <li>Factory License, Fire NOC, Public Liability Insurance</li>
                                    <li>ISO 14001 & 45001 recommended</li>
                                </ul>
                            </div>

                            <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10">
                                <h2 className="text-lg md:text-3xl font-bold mb-6">⚠️ Hazardous Waste Handling & Safety Plan</h2>
                                <ul className="space-y-4 text-[#a8b6d3]">
                                    <li>Climate-controlled storage with fire suppression</li>
                                    <li>Emergency response for thermal runaway</li>
                                    <li>Proper labelling and manifest system</li>
                                    <li>PPEs and regular mock drills</li>
                                    <li>Health monitoring of employees</li>
                                </ul>
                            </div>
                        </div>

                        {/* Waste Management & Circular Economy */}
                        <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10 mb-12">
                            <h2 className="text-lg md:text-3xl font-bold mb-6">♻️ Waste Management & Circular Economy Approach</h2>
                            <p className="text-[#a8b6d3] mb-6">
                                The plant ensures <strong>zero hazardous landfilling</strong>. All outputs (metals, graphite, copper, aluminium) are sent to secondary industries.
                            </p>
                            <p className="text-[#a8b6d3] mb-8">
                                Collection network includes authorized centres across Uttar Pradesh & NCR and EPR tie-ups with producers.
                            </p>
                            <div className="bg-[#111f38] border-l-4 border-[#22c55e] p-6 rounded-2xl">
                                🌱 Every ton of recycled Li-ion battery saves 5 tons of CO₂ compared to virgin mining and strengthens India’s critical mineral security.
                            </div>
                        </div>

                        {/* References & Conclusion */}
                        <div className="card bg-[#0f1c33] border border-[#223453] rounded-3xl p-2 md:p-10 mb-12">
                            <h2 className="text-lg md:text-3xl font-bold mb-6">📚 References & Conclusion</h2>
                            <p className="text-[#a8b6d3] mb-6">
                                Prepared using Battery Waste Management Rules 2022, CPCB guidelines, and international best practices.
                            </p>
                            <p className="text-[#a8b6d3] leading-relaxed mb-8">
                                The proposed 5 TPD mechanical + 2 TPD hydromet Lithium-Ion Battery Recycling Plant is technically feasible, commercially viable, and environmentally responsible.
                                This DPR serves as a ready-to-execute blueprint for entrepreneurs and investors.
                            </p>
                            <p className="italic text-[#94bbff]">Prepared by Green Permits Consulting & G.Kumar Electro Private Limited — A bankable, future-ready recycling model.</p>
                        </div>

                        {/* Footer Note */}
                        <div className="text-center text-[#a8b6d3] text-sm py-8 border-t border-[#223453]">
                            📍 Detailed Project Report – Complete version includes all technical, financial, legal, and operational data.
                            For funding or partnership inquiries, reach out to G.Kumar Electro Pvt Ltd, Lucknow.
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="bg-gradient-to-br from-[#38bdf8] to-[#22c55e] text-[#07111f] rounded-3xl p-2 md:p-12 text-center">
                    <h2 className="text-xl md:text-4xl font-bold mb-6">Ready to Build Your Battery Recycling Plant?</h2>
                    <p className="text-lg md:text-xl mb-8">Get a complete bankable DPR with technical, financial, and regulatory support.</p>
                    <button className="bg-white hover:bg-gray-100 text-[#07111f] font-bold px-12 py-5 rounded-2xl text-lg transition">
                        Request Full DPR Consultation
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default LithiumBatteryDpr;