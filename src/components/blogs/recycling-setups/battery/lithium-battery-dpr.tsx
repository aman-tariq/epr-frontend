import React, { useEffect } from 'react';
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

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
        const gridColor = 'rgba(15,23,42,0.08)';
        const textColor = '#5B6B7A';

        // Financial Bar Chart
        new (window as any).Chart(document.getElementById('financialBar'), {
            type: 'bar',
            data: {
                labels: ['Year 1', 'Year 3', 'Year 5'],
                datasets: [
                    { label: 'Revenue', data: [420, 675, 890], backgroundColor: '#3B82F6', borderRadius: 8 },
                    { label: 'EBITDA', data: [155, 295, 415], backgroundColor: '#5AC361', borderRadius: 8 },
                    { label: 'Profit After Tax', data: [82, 178, 268], backgroundColor: '#F59E0B', borderRadius: 8 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
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
                    backgroundColor: ['#3B82F6', '#5AC361', '#F59E0B', '#A855F7', '#EF4444', '#14B8A6', '#F97316'],
                    borderColor: '#ffffff',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '62%',
                plugins: {
                    legend: { position: 'bottom', labels: { color: textColor, boxWidth: 12 } }
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
                    backgroundColor: ['#3B82F6', '#5AC361', '#F59E0B', '#A855F7', '#14B8A6', '#F97316'],
                    borderColor: '#ffffff',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { color: textColor, boxWidth: 12 } }
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
                    backgroundColor: ['#5AC361', '#3B82F6', '#F59E0B'],
                    borderRadius: 8
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
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
        <div className="min-h-screen bg-background text-foreground font-sans">
            <div className="max-w-8xl mt-10 mx-auto px-2 md:px-2 py-2 md:py-12">

                {/* HERO */}
                <div className="hero bg-gradient-to-br from-[#EEF6FF] to-[#F3FBF3] border border-border rounded-3xl p-4 md:p-10 md:p-16 mb-12 relative overflow-hidden shadow-sm">
                    <div className="badge inline-block bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#2563EB] px-4 md:px-6 py-2 rounded-full text-sm font-medium mb-6">
                        🔋 Detailed Project Report | Lithium-Ion Battery Recycling Plant
                    </div>
                    <h1 className="font-display text-xl md:text-5xl md:text-6xl font-bold leading-tight mb-8 text-[#10241A]">
                        Turning Battery Waste into High-Value Resources:<br />
                        <span className="text-brandGreen">5 TPD Black Mass + 2 TPD Hydromet Plant</span>
                    </h1>
                    <p className="text-muted-foreground max-w-3xl">
                        An integrated, CPCB-aligned recycling facility designed to recover Lithium, Cobalt, Nickel, Manganese & Graphite.
                    </p>
                </div>

                {/* Two-Column Layout Wrapper */}
                <div className="lg:flex lg:gap-4 lg:items-start">
                    
                    {/* Main Content Column */}
                    <div className="flex-1 min-w-0 space-y-12 overflow-hidden">
                        
                        {/* How EPR Nexuss Helps */}
                        <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                            <h2 className="font-display text-lg md:text-4xl font-bold mb-6 text-[#10241A]">How EPR Nexuss Can Help Create a Detailed Project Report</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                EPR Nexuss helps clients create a detailed project report by turning a complex idea into a clear, practical, and business-ready plan.
                                From plant capacity and machinery needs to raw material sourcing, approvals, utilities, layout, cost structure, and expected returns —
                                we cover every aspect so you can make confident decisions and present a bankable project to lenders and regulators.
                            </p>
                        </div>

                        {/* Project Backbone */}
                        <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                            <h2 className="font-display text-lg md:text-3xl font-bold mb-6 text-[#10241A]">🏭 Project Backbone: Green Permits Consulting & G.Kumar Electro Pvt Ltd</h2>
                            <p className="text-muted-foreground mb-6">
                                <strong className="text-[#10241A]">G.Kumar Electro Private Limited</strong> (Lucknow) is the driving force behind this initiative.
                                With <strong className="text-[#10241A]">Green Permits Consulting</strong>, we bring unmatched expertise in recycling plant design, regulatory navigation, and end-to-end execution.
                            </p>
                        </div>

                        {/* Executive Snapshot */}
                        <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                            <h2 className="font-display text-lg md:text-3xl font-bold mb-6 text-[#10241A]">📌 Executive Snapshot: Why This Plant Matters</h2>
                            <p className="text-muted-foreground mb-8">
                                The facility processes <strong className="text-[#10241A]">5 tons per day</strong> of end-of-life batteries into black mass, followed by <strong className="text-[#10241A]">2 TPD hydrometallurgical refining</strong>.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                {[
                                    { num: "5 TPD", label: "Mechanical recycling" },
                                    { num: "2 TPD", label: "Hydromet processing" },
                                    { num: "95%+", label: "Target recovery efficiency" },
                                    { num: "2022", label: "Compliant with Battery Waste Rules" }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-muted/50 border border-border rounded-2xl p-4 md:p-6 text-center">
                                        <div className="text-lg md:text-4xl font-bold text-brandGreen mb-2">{stat.num}</div>
                                        <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technology & Equipment + ETP */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                                <h2 className="font-display text-lg md:text-3xl font-bold mb-6 text-[#10241A]">⚙️ Technology & Equipment</h2>
                                <ul className="space-y-4 text-muted-foreground">
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

                            <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                                <h2 className="font-display text-lg md:text-3xl font-bold mb-6 text-[#10241A]">💧 ETP & Pollution Control</h2>
                                <ul className="space-y-4 text-muted-foreground">
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
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                                <h2 className="font-display text-lg md:text-3xl font-bold mb-6 text-[#10241A]">💰 Subsidies & Incentives</h2>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li>• State capital subsidy (15-25%)</li>
                                    <li>• SIDBI Green Finance interest subvention</li>
                                    <li>• Priority sector lending</li>
                                    <li>• Waste to Wealth Mission support</li>
                                </ul>
                            </div>
                            <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                                <h2 className="font-display text-lg md:text-3xl font-bold mb-6 text-[#10241A]">📦 Raw Material Procurement</h2>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li>• EV OEM & e-rickshaw manufacturers</li>
                                    <li>• EPR Producer tie-ups</li>
                                    <li>• E-waste aggregators in NCR & UP</li>
                                    <li>• Institutional UPS & telecom battery scrap</li>
                                </ul>
                            </div>
                        </div>

                        {/* Visual Dashboard */}
                        <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                            <h2 className="font-display text-lg md:text-3xl font-bold mb-8 text-center md:text-left text-[#10241A]">📊 At-a-Glance Visual Dashboard</h2>

                            <div className="space-y-12">
                                {/* Financial Projections */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-center md:text-left text-[#10241A]">Financial Projections (₹ Lakhs)</h3>
                                    <div className="bg-muted/40 rounded-2xl p-4 md:p-6">
                                        <div className="h-72 md:h-80 relative w-full">
                                            <canvas id="financialBar" className="w-full h-full" />
                                        </div>
                                    </div>
                                </div>

                                {/* Project Cost Breakdown */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-center md:text-left text-[#10241A]">Project Cost Breakdown</h3>
                                    <div className="bg-muted/40 rounded-2xl p-4 md:p-6">
                                        <div className="flex justify-center">
                                            <div className="w-full max-w-[280px] sm:max-w-[450px] h-80 relative">
                                                <canvas id="costDonut" className="w-full h-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Two Charts Side by Side */}
<div className="grid md:grid-cols-2 gap-8">
    {/* Recovery Pie */}
    <div className="min-w-0"> {/* min-w-0 ensures grid item boundaries are strictly respected */}
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left break-words whitespace-normal text-[#10241A]">
            Recovered Output Composition (% by value)
        </h3>
        <div className="bg-muted/40 rounded-2xl p-4 md:p-6">
            <div className="flex justify-center">
                <div className="w-full max-w-[280px] sm:max-w-[320px] h-80 relative">
                    <canvas id="recoveryPie" className="w-full h-full" />
                </div>
            </div>
        </div>
    </div>

    {/* Means of Finance */}
    <div className="min-w-0">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left break-words whitespace-normal text-[#10241A]">
            Means of Finance
        </h3>
        <div className="bg-muted/40 rounded-2xl p-4 md:p-6">
            <div className="h-72 relative w-full">
                <canvas id="financeBar" className="w-full h-full" />
            </div>
        </div>
    </div>
</div>
                            </div>
                        </div>

                        {/* CAPITAL OUTLAY & FINANCIAL PLAN */}
                        <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                            <h2 className="font-display text-lg md:text-3xl font-bold mb-6 text-[#10241A]">📊 Capital Outlay Estimates & Financial Plan</h2>

                            <p className="text-xl font-semibold mb-6 text-brandGreen">Project Cost (₹ Lakhs)</p>

                            <ul className="space-y-4 text-muted-foreground mb-8">
                                <li>• Land & site development (owned by client) — ₹75 Lakhs</li>
                                <li>• Building & civil works (plant shed, office, stores) — ₹85 Lakhs</li>
                                <li>• Plant & machinery (mechanical + hydromet line) — ₹210 Lakhs</li>
                                <li>• ETP + pollution control systems — ₹38 Lakhs</li>
                                <li>• Electricals, DG set, utilities — ₹32 Lakhs</li>
                                <li>• Pre-operative expenses, commissioning — ₹15 Lakhs</li>
                                <li>• Working capital margin — ₹40 Lakhs</li>
                            </ul>

                            <p className="text-2xl font-bold mb-6 text-[#10241A]">
                                Total Project Outlay: <span className="text-brandGreen">₹495 Lakhs (₹4.95 Cr)</span>
                            </p>

                            <div className="bg-[#FFFBEB] border-l-4 border-[#F59E0B] p-6 rounded-2xl mb-10">
                                <strong className="text-[#B45309]">Means of Finance:</strong> <span className="text-[#78350F]">Promoter contribution 25% (~₹1.24 Cr) + Term loan 65% + state subsidy 10%.
                                Projected IRR: 22-25% | Payback: ~4.5 years.</span>
                            </div>

                            <h3 className="text-2xl font-semibold mb-4 text-[#10241A]">📈 Financial Projections (Year 1-5)</h3>
                            <div className="overflow-x-auto rounded-2xl border border-border mb-8">
                                <table className="w-full min-w-[500px]">
                                    <thead>
                                        <tr className="bg-muted/50">
                                            <th className="text-left p-4 border-b border-border text-[#10241A]">Particulars (₹ Lakhs)</th>
                                            <th className="text-center p-4 border-b border-border text-[#10241A]">Year 1</th>
                                            <th className="text-center p-4 border-b border-border text-[#10241A]">Year 3</th>
                                            <th className="text-center p-4 border-b border-border text-[#10241A]">Year 5</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-muted-foreground">
                                        <tr className="border-b border-border"><td className="p-4">Revenue</td><td className="text-center p-4">420</td><td className="text-center p-4">675</td><td className="text-center p-4">890</td></tr>
                                        <tr className="border-b border-border"><td className="p-4">Operating Expenses</td><td className="text-center p-4">265</td><td className="text-center p-4">380</td><td className="text-center p-4">475</td></tr>
                                        <tr className="border-b border-border"><td className="p-4 font-semibold text-[#2563EB]">EBITDA</td><td className="text-center p-4 font-semibold">155</td><td className="text-center p-4 font-semibold">295</td><td className="text-center p-4 font-semibold">415</td></tr>
                                        <tr><td className="p-4 font-semibold text-brandGreen">Profit After Tax</td><td className="text-center p-4 font-semibold">82</td><td className="text-center p-4 font-semibold">178</td><td className="text-center p-4 font-semibold">268</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-muted-foreground">CMA Data highlights: DSCR &gt; 1.85, comfortable liquidity. The project is highly bankable.</p>
                        </div>

                        {/* Project Execution Strategy + Process Flow */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                                <h2 className="font-display text-lg md:text-3xl font-bold mb-6 text-[#10241A]">📅 Project Execution Strategy (Phased)</h2>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {[
                                        "Phase 1: Site selection & lease",
                                        "Phase 2: Civil & utilities",
                                        "Phase 3: Machinery procurement & installation",
                                        "Phase 4: ETP & safety systems",
                                        "Phase 5: Trial runs & CPCB consent",
                                        "Phase 6: Commercial operations"
                                    ].map((phase, i) => (
                                        <div key={i} className="bg-muted/50 px-5 py-3 rounded-full text-sm border border-border text-[#2C3B33]">
                                            {phase}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-muted-foreground">Total timeline: <strong className="text-[#10241A]">10-12 months</strong> from approval.</p>
                            </div>

                            <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                                <h2 className="font-display text-lg md:text-3xl font-bold mb-6 text-[#10241A]">🔄 Process Flow (Mechanical + Hydromet)</h2>
                                <ol className="space-y-4 text-muted-foreground">
                                    <li><strong className="text-[#10241A]">Step 1:</strong> Battery collection & sorting → Discharge</li>
                                    <li><strong className="text-[#10241A]">Step 2:</strong> Dismantling & de-casing → Shredding</li>
                                    <li><strong className="text-[#10241A]">Step 3:</strong> Sieving, magnetic & eddy current separation → Black mass</li>
                                    <li><strong className="text-[#10241A]">Step 4:</strong> Black mass to hydromet → Leaching</li>
                                    <li><strong className="text-[#10241A]">Step 5:</strong> Solvent extraction (Co, Ni, Mn)</li>
                                    <li><strong className="text-[#10241A]">Step 6:</strong> Lithium precipitation & crystallization</li>
                                    <li><strong className="text-[#10241A]">Step 7:</strong> Drying & packing of final products</li>
                                </ol>
                            </div>
                        </div>

                        {/* Regulatory Compliance + Hazardous Waste */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                                <h2 className="font-display text-lg md:text-3xl font-bold mb-6 text-[#10241A]">📜 Regulatory Compliance Requirements</h2>
                                <ul className="space-y-4 text-muted-foreground">
                                    <li><strong className="text-[#10241A]">Battery Waste Management Rules, 2022</strong> – CPCB Recycler Registration</li>
                                    <li><strong className="text-[#10241A]">Hazardous Waste Rules, 2016</strong> – Authorisation for storage & processing</li>
                                    <li><strong className="text-[#10241A]">CTE & CTO</strong> from State Pollution Control Board</li>
                                    <li>Factory License, Fire NOC, Public Liability Insurance</li>
                                    <li>ISO 14001 & 45001 recommended</li>
                                </ul>
                            </div>

                            <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                                <h2 className="font-display text-lg md:text-3xl font-bold mb-6 text-[#10241A]">⚠️ Hazardous Waste Handling & Safety Plan</h2>
                                <ul className="space-y-4 text-muted-foreground">
                                    <li>Climate-controlled storage with fire suppression</li>
                                    <li>Emergency response for thermal runaway</li>
                                    <li>Proper labelling and manifest system</li>
                                    <li>PPEs and regular mock drills</li>
                                    <li>Health monitoring of employees</li>
                                </ul>
                            </div>
                        </div>

                        {/* Waste Management & Circular Economy */}
                        <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                            <h2 className="font-display text-lg md:text-3xl font-bold mb-6 text-[#10241A]">♻️ Waste Management & Circular Economy Approach</h2>
                            <p className="text-muted-foreground mb-6">
                                The plant ensures <strong className="text-[#10241A]">zero hazardous landfilling</strong>. All outputs (metals, graphite, copper, aluminium) are sent to secondary industries.
                            </p>
                            <p className="text-muted-foreground mb-8">
                                Collection network includes authorized centres across Uttar Pradesh & NCR and EPR tie-ups with producers.
                            </p>
                            <div className="bg-[#F3FBF3] border-l-4 border-brandGreen p-6 rounded-2xl text-[#2C3B33]">
                                🌱 Every ton of recycled Li-ion battery saves 5 tons of CO₂ compared to virgin mining and strengthens India's critical mineral security.
                            </div>
                        </div>

                        {/* References & Conclusion */}
                        <div className="card bg-card border border-border rounded-3xl p-4 md:p-10 shadow-sm">
                            <h2 className="font-display text-lg md:text-3xl font-bold mb-6 text-[#10241A]">📚 References & Conclusion</h2>
                            <p className="text-muted-foreground mb-6">
                                Prepared using Battery Waste Management Rules 2022, CPCB guidelines, and international best practices.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                The proposed 5 TPD mechanical + 2 TPD hydromet Lithium-Ion Battery Recycling Plant is technically feasible, commercially viable, and environmentally responsible.
                                This DPR serves as a ready-to-execute blueprint for entrepreneurs and investors.
                            </p>
                            <p className="italic text-[#2563EB]">Prepared by Green Permits Consulting & G.Kumar Electro Private Limited — A bankable, future-ready recycling model.</p>
                        </div>

                        {/* Footer Note */}
                        <div className="text-center text-muted-foreground text-sm py-8 border-t border-border">
                            📍 Detailed Project Report – Complete version includes all technical, financial, legal, and operational data.
                            For funding or partnership inquiries, reach out to G.Kumar Electro Pvt Ltd, Lucknow.
                        </div>

                        {/* Final CTA */}
                        <div className="bg-gradient-to-br from-brandGreen to-[#3FA24A] text-white rounded-3xl p-4 md:p-12 text-center shadow-sm">
                            <h2 className="font-display text-xl md:text-4xl font-bold mb-6">Ready to Build Your Battery Recycling Plant?</h2>
                            <p className="text-lg md:text-xl mb-8 text-white/90">Get a complete bankable DPR with technical, financial, and regulatory support.</p>
                            <button className="bg-white hover:bg-gray-100 text-[#10241A] font-bold px-12 py-5 rounded-2xl text-lg transition shadow-sm">
                                Request Full DPR Consultation
                            </button>
                        </div>

                    </div>

                    {/* ── STICKY SIDEBAR ── */}
                    <aside className="hidden lg:block w-[280px] flex-shrink-0 self-start" style={{ position: "sticky", top: "7rem" }}>
                        <StickyContactForm />
                    </aside>

                </div>
            </div>
        </div>
        </>
    );
};

export default LithiumBatteryDpr;