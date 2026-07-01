import React from "react";
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';
import {
	BarChart3,
	CheckCircle2,
	Factory,
	Package,
	Recycle,
	ShoppingBag,
	TrendingUp,
	Truck,
	Users,
} from "lucide-react";

const profitFactors = [
	{ label: "Scrap Quality", value: 10, color: "bg-emerald-500" },
	{ label: "Supply Consistency", value: 9, color: "bg-green-400" },
	{ label: "Product Quality", value: 10, color: "bg-blue-700" },
	{ label: "Buyer Demand", value: 9, color: "bg-slate-700" },
	{ label: "Negotiation", value: 8, color: "bg-amber-500" },
	{ label: "Packaging", value: 7, color: "bg-sky-400" },
];

const performanceData = [
	{ label: "Scrap Quality", before: 6, after: 10 },
	{ label: "Processing Loss", before: 9, after: 4 },
	{ label: "Buyer Response", before: 5, after: 9 },
	{ label: "Cash Flow", before: 6, after: 9 },
	{ label: "Margin Growth", before: 5, after: 9 },
];

const PlasticBuySelling: React.FC = () => {
	return (
		<>	
			<Seo
				title="How to Buy Plastic Scrap and Sell Recycled Material Profitably - Complete Guide 2026"
				description="Learn practical strategies to buy quality plastic scrap (PET, HDPE, PP) at good prices and sell recycled flakes & pellets for better margins. Expert tips for plastic recycling business success in India."
				keywords={[
					"How to Buy Plastic Scrap",
					"How to Sell Recycled Plastic Flakes and Pellets",
					"Plastic Recycling Business Profit",
					"Best Way to Buy PET HDPE PP Scrap",
					"Plastic Scrap Trading Guide India",
					"How to Improve Margin in Plastic Recycling",
					"Buying and Selling Recycled Plastic",
					"Plastic Recycling Plant Profit Strategy",
					"PET Bottle Scrap Buying Tips",
					"HDPE PP Flakes Selling Guide",
					"Plastic Waste Recycling Business",
					"How to Start Plastic Scrap Business",
					"Best Suppliers for Plastic Scrap",
					"How to Grade Plastic Scrap for Recycling",
					"Plastic Recycling Scrap Sourcing",
					"Selling Recycled Plastic Pellets Profitably",
					"Plastic Recycling Business Tips India"
				]}
				url="https://eprnexuss.com/blog/plastic-buy-selling"
				type="article"
			/>
			{/* Removed component overflow hidden properties to ensure tracking handles cleanly */}
			<article className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 w-full max-w-full min-w-0">
				{/* HERO */}
				<section className="relative overflow-hidden border-b border-border w-full">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_30%)]"></div>

					<div className="mx-auto max-w-7xl px-4 py-16 lg:py-24 w-full">
						<div className="grid items-center gap-10 grid-cols-1 w-full">
							<div className="w-full min-w-0">
								<div className="mb-5 flex flex-wrap gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
									{[
										"Plastic Recycling",
										"Business Growth",
										"Scrap Trading",
										"Margins",
									].map((tag) => (
										<span
											key={tag}
											className="rounded-full border border-emerald-200 bg-emerald-100/70 px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap"
										>
											{tag}
										</span>
									))}
								</div>

								<h1 className="mb-6 max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl break-words">
									From Scrap to Sale, We Help Clients Build a Stronger
									Recycling Business
								</h1>

								<p className="mb-8 max-w-3xl text-base md:text-lg leading-8 text-muted-foreground break-words">
									In a plastic recycling plant, profit depends on more than
									machinery. The real difference comes from buying the right
									scrap, keeping quality under control, and selling the final
									product to the right buyer at the right value.
								</p>

								<div className="flex flex-wrap gap-4">
									<a
										href="#contact"
										className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 text-sm sm:text-base font-semibold text-white transition hover:scale-[1.02] hover:bg-emerald-700 shadow-sm"
									>
										Get Expert Support
									</a>

									<a
										href="#case-study"
										className="inline-flex items-center rounded-xl border border-border bg-white px-5 py-3 text-sm sm:text-base font-semibold text-foreground transition hover:bg-muted shadow-sm"
									>
										View Case Study
									</a>
								</div>
							</div>

							<div className="grid gap-5 w-full min-w-0">
								<div className="rounded-3xl border border-border bg-white p-4 sm:p-7 shadow-sm w-full min-w-0">
									<h3 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900 break-words">
										What Clients Need Most
									</h3>

									<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 w-full">
										{[
											{
												title: "Better Margins",
												desc: "Buy smarter and sell stronger",
												icon: TrendingUp,
											},
											{
												title: "Lower Waste",
												desc: "Reduce contamination and rejection",
												icon: Recycle,
											},
											{
												title: "Stable Supply",
												desc: "Keep the plant running smoothly",
												icon: Truck,
											},
											{
												title: "Faster Sales",
												desc: "Match product with demand",
												icon: ShoppingBag,
											},
										].map((item) => (
											<div
												key={item.title}
												className="rounded-2xl border border-border bg-slate-50 p-4 sm:p-5 w-full min-w-0"
											>
												<item.icon className="mb-3 h-7 w-7 sm:h-8 sm:w-8 text-emerald-600 shrink-0" />
												<h4 className="mb-1 font-bold text-slate-900 break-words text-sm sm:text-base">
													{item.title}
												</h4>
												<p className="text-xs sm:text-sm text-muted-foreground break-words">
													{item.desc}
												</p>
											</div>
										))}
									</div>
								</div>

								<div className="rounded-3xl border border-border bg-white p-4 sm:p-7 shadow-sm w-full min-w-0">
									<h3 className="mb-4 text-lg sm:text-xl font-bold text-slate-900 break-words">
										Quick Business Focus
									</h3>

									<div className="flex flex-wrap gap-2 sm:gap-3">
										{[
											"PET Scrap",
											"HDPE Scrap",
											"PP Waste",
											"Washed Flakes",
											"Pellets",
										].map((item) => (
											<span
												key={item}
												className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 whitespace-nowrap"
											>
												{item}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 
				  CORE GRID SYSTEM: 
				  Using items-stretch ensures that the column height mirrors the content area.
				*/}
				<div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">
					
					{/* LEFT FLOW BLOCK (PRIMARY MAIN) */}
					<main className="lg:col-span-2 w-full min-w-0 space-y-16">
						
						{/* WHY IMPORTANT */}
						<section className="w-full min-w-0">
							<div className="mb-8">
								<h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 break-words">
									Why Buying and Selling Matter So Much
								</h2>

								<p className="text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground break-words">
									A recycling plant cannot grow only by processing plastic. It
									must also manage market flow. Good buying brings clean
									feedstock. Good selling brings cash flow. Together, they keep
									the business healthy.
								</p>
							</div>

							<div className="grid gap-4 sm:grid-cols-2 w-full">
								{[
									{
										title: "Scrap Quality",
										desc: "Directly affects processing loss and output quality",
									},
									{
										title: "Supply Consistency",
										desc: "Prevents machine idle time and disruption",
									},
									{
										title: "Buyer Demand",
										desc: "Determines how quickly output can be sold",
									},
									{
										title: "Price Discipline",
										desc: "Protects margins on both input and output",
									},
								].map((item) => (
									<div
										key={item.title}
										className="rounded-3xl border border-border bg-white p-5 sm:p-6 shadow-sm w-full min-w-0"
									>
										<h3 className="mb-2 text-lg sm:text-xl font-bold text-slate-900 break-words">
											{item.title}
										</h3>

										<p className="text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground break-words">
											{item.desc}
										</p>
									</div>
								))}
							</div>
						</section>

						{/* MOBILE & TABLET FALLBACK INLINE FORM CONTAINER */}
						<div className="block lg:hidden w-full min-w-0">
							<div className="rounded-3xl border-2 border-emerald-500/20 bg-emerald-50/40 p-4 sm:p-6 shadow-sm w-full min-w-0">
								<h3 className="text-lg font-bold text-slate-900 mb-1 break-words">Connect With Our Experts</h3>
								<p className="text-xs text-muted-foreground mb-4 break-words">Have questions regarding scrap sourcing, sales strategies, or market deployment?</p>
								<div className="w-full max-w-full overflow-hidden rounded-2xl border border-border bg-white p-1">
									<StickyContactForm />
								</div>
							</div>
						</div>

						{/* BUYING */}
						<section className="w-full min-w-0">
							<div className="mb-8">
								<h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 break-words">
									How We Help Clients in Scrap Buying
								</h2>

								<p className="text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground break-words">
									Scrap buying is not only about price. It is about quality,
									consistency, logistics, and fit for the plant. A cheaper
									load can become expensive if it creates contamination or high
									rejection.
								</p>
							</div>

							<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 w-full">
								{[
									{
										title: "Scrap Sourcing",
										desc: "We help clients identify reliable suppliers for PET, HDPE, PP, rigid plastic, and industrial scrap.",
										icon: Factory,
									},
									{
										title: "Quality Checking",
										desc: "We look at contamination, moisture, mix level, and material condition before purchase.",
										icon: CheckCircle2,
									},
									{
										title: "Price Comparison",
										desc: "We compare market rates so clients know whether the deal is actually profitable.",
										icon: TrendingUp,
									},
								].map((item) => (
									<div
										key={item.title}
										className="rounded-3xl border border-border bg-white p-5 sm:p-6 shadow-sm w-full min-w-0 flex flex-col justify-between"
									>
										<div>
											<item.icon className="mb-4 h-8 w-8 text-emerald-600 shrink-0" />
											<h3 className="mb-2 text-xl font-bold text-slate-900 break-words">
												{item.title}
											</h3>
											<p className="text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground break-words">
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>

							<div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 w-full">
								<div className="rounded-3xl border border-border bg-white p-5 sm:p-6 shadow-sm w-full min-w-0">
									<h3 className="mb-4 text-lg font-bold text-slate-900 break-words">
										Types of Scrap We Assess
									</h3>

									<ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
										{[
											"PET bottles and preforms",
											"HDPE containers and drums",
											"PP crates, caps, and molded waste",
											"Mixed rigid plastic",
											"Industrial and post-consumer waste",
										].map((item) => (
											<li key={item} className="flex items-start gap-2.5">
												<span className="mt-1.5 h-2 w-2 min-w-[8px] rounded-full bg-emerald-500 shrink-0"></span>
												<span className="break-words">{item}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="rounded-3xl border border-border bg-white p-5 sm:p-6 shadow-sm w-full min-w-0">
									<h3 className="mb-4 text-lg font-bold text-slate-900 break-words">
										What Clients Should Avoid
									</h3>

									<ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
										{[
											"Overpriced dirty scrap",
											"Unverified suppliers",
											"Mixed loads with low recovery value",
											"Irregular supply sources",
										].map((item) => (
											<li key={item} className="flex items-start gap-2.5">
												<span className="mt-1.5 h-2 w-2 min-w-[8px] rounded-full bg-red-500 shrink-0"></span>
												<span className="break-words">{item}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="rounded-3xl border border-border bg-white p-5 sm:p-6 shadow-sm w-full min-w-0 sm:col-span-2 xl:col-span-1">
									<h3 className="mb-4 text-lg font-bold text-slate-900 break-words">
										What We Focus On
									</h3>

									<ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
										{[
											"Better recovery value",
											"Lower processing loss",
											"Better plant efficiency",
											"Stronger supplier relationships",
										].map((item) => (
											<li key={item} className="flex items-start gap-2.5">
												<span className="mt-1.5 h-2 w-2 min-w-[8px] rounded-full bg-blue-600 shrink-0"></span>
												<span className="break-words">{item}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</section>

						{/* SELLING */}
						<section className="w-full min-w-0">
							<div className="mb-8">
								<h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 break-words">
									How We Help Clients in Product Selling
								</h2>

								<p className="text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground break-words">
									Once the plant starts producing flakes or pellets, the goal is
									to sell the product in the right market at the right value.
									Product presentation matters almost as much as product quality.
								</p>
							</div>

							<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 w-full">
								{[
									{
										title: "Buyer Identification",
										desc: "We help clients connect with traders, processors, manufacturers, and compounders.",
										icon: Users,
									},
									{
										title: "Product Positioning",
										desc: "We guide clients in showing the product as clean, graded, and reliable instead of ordinary bulk material.",
										icon: Package,
									},
									{
										title: "Sales Strategy",
										desc: "We support pricing, negotiation, packaging, and communication so the product sells better.",
										icon: BarChart3,
									},
								].map((item) => (
									<div
										key={item.title}
										className="rounded-3xl border border-border bg-white p-5 sm:p-6 shadow-sm w-full min-w-0 flex flex-col justify-between"
									>
										<div>
											<item.icon className="mb-4 h-8 w-8 text-emerald-600 shrink-0" />
											<h3 className="mb-2 text-xl font-bold text-slate-900 break-words">
												{item.title}
											</h3>
											<p className="text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground break-words">
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>

							{/* GRAPH 1 */}
							<div className="mt-8 rounded-3xl border border-border bg-white p-4 sm:p-6 lg:p-8 shadow-sm w-full min-w-0">
								<h3 className="mb-6 text-xl sm:text-2xl font-bold text-slate-900 break-words">
									Business Factors That Drive Profit
								</h3>

								<div className="space-y-5 w-full">
									{profitFactors.map((item) => (
										<div key={item.label} className="w-full">
											<div className="mb-1.5 flex items-center justify-between gap-4 text-sm font-semibold text-slate-700">
												<span className="break-words min-w-0 flex-1">{item.label}</span>
												<span className="text-slate-900 shrink-0">{item.value}/10</span>
											</div>

											<div className="h-3.5 overflow-hidden rounded-full bg-slate-100 border border-slate-200/40 w-full">
												<div
													className={`h-full rounded-full ${item.color} transition-all duration-500`}
													style={{ width: `${item.value * 10}%` }}
												></div>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* DATABASE MATRIX VIEW */}
						<section className="w-full min-w-0">
							<div className="mb-6">
								<h2 className="mb-3 text-2xl sm:text-3xl font-black tracking-tight text-slate-900 break-words">
									Simple Database View for Client Understanding
								</h2>

								<p className="text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground break-words">
									This matrix provides side-by-side processing comparative telemetry for feedstock control profiles.
								</p>
							</div>

							<div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm w-full max-w-full">
								{/* Desktop Table */}
								<div className="hidden overflow-x-auto md:block w-full">
									<table className="min-w-full table-auto border-collapse">
										<thead className="bg-slate-100">
											<tr>
												<th className="px-5 py-4 text-left text-xs sm:text-sm font-bold uppercase tracking-wide text-slate-700 min-w-[140px]">
													Area
												</th>
												<th className="px-5 py-4 text-left text-xs sm:text-sm font-bold uppercase tracking-wide text-slate-700 min-w-[220px]">
													What We Check
												</th>
												<th className="px-5 py-4 text-left text-xs sm:text-sm font-bold uppercase tracking-wide text-slate-700 min-w-[220px]">
													Why It Matters
												</th>
											</tr>
										</thead>

										<tbody className="divide-y divide-border/60">
											{[
												[
													"Scrap Source",
													"Supplier trust, location, volume, consistency",
													"Helps keep the plant supplied without breaks",
												],
												[
													"Scrap Quality",
													"Contamination, moisture, mix, recovery level",
													"Reduces loss during washing and processing",
												],
												[
													"Scrap Pricing",
													"Market rate, transport cost, actual recovery value",
													"Protects purchase margin",
												],
												[
													"Final Product",
													"Flakes, pellets, or regrind",
													"Decides the buyer category and selling method",
												],
												[
													"Product Quality",
													"Purity, color, moisture, uniformity",
													"Improves buyer confidence and pricing",
												],
												[
													"Buyer Type",
													"Traders, manufacturers, compounders",
													"Helps match product to the right market",
												],
											].map((row, index) => (
												<tr key={index}>
													<td className="px-5 py-4 text-sm font-semibold text-slate-800 align-top break-words">
														{row[0]}
													</td>
													<td className="px-5 py-4 text-sm leading-6 text-muted-foreground align-top break-words">
														{row[1]}
													</td>
													<td className="px-5 py-4 text-sm leading-6 text-muted-foreground align-top break-words">
														{row[2]}
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>

								{/* Mobile Safe Fallback Interface List */}
								<div className="grid gap-4 p-4 md:hidden w-full">
									{[
										{
											area: "Scrap Source",
											check: "Supplier trust, location, volume, consistency",
											why: "Helps keep the plant supplied without breaks",
										},
										{
											area: "Scrap Quality",
											check: "Contamination, moisture, mix, recovery level",
											why: "Reduces loss during washing and processing",
										},
										{
											area: "Scrap Pricing",
											check: "Market rate, transport cost, actual recovery value",
											why: "Protects purchase margin",
										},
										{
											area: "Final Product",
											check: "Flakes, pellets, or regrind",
											why: "Decides the buyer category and selling method",
										},
										{
											area: "Product Quality",
											check: "Purity, color, moisture, uniformity",
											why: "Improves buyer confidence and pricing",
										},
										{
											area: "Buyer Type",
											check: "Traders, manufacturers, compounders",
											why: "Helps match product to the right market",
										},
									].map((item, index) => (
										<div
											key={index}
											className="rounded-2xl border border-border bg-slate-50/70 p-4 w-full min-w-0 text-xs sm:text-sm"
										>
											<div className="mb-2">
												<p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Area</p>
												<h4 className="text-base font-bold text-slate-900 break-words">{item.area}</h4>
											</div>
											<div className="mb-2">
												<p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">What We Check</p>
												<p className="text-muted-foreground break-words leading-5">{item.check}</p>
											</div>
											<div>
												<p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Why It Matters</p>
												<p className="text-muted-foreground break-words leading-5">{item.why}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* BEFORE AFTER GRAPH */}
						<section className="w-full min-w-0">
							<div className="mb-6">
								<h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 break-words">
									Before vs After Better Buying and Selling
								</h2>
							</div>

							<div className="rounded-3xl border border-border bg-white p-4 sm:p-6 lg:p-8 shadow-sm w-full min-w-0">
								<div className="space-y-6 w-full">
									{performanceData.map((item) => (
										<div key={item.label} className="w-full border-b border-slate-100 last:border-none pb-4 last:pb-0">
											<div className="mb-3 flex flex-wrap items-center justify-between gap-2">
												<h4 className="font-bold text-sm sm:text-base text-slate-900 break-words">
													{item.label}
												</h4>

												<div className="flex items-center gap-4 text-xs font-medium text-slate-500">
													<div className="flex items-center gap-1.5">
														<div className="h-2.5 w-2.5 rounded-full bg-slate-400"></div>
														Before
													</div>

													<div className="flex items-center gap-1.5">
														<div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
														After
													</div>
												</div>
											</div>

											<div className="space-y-2 w-full text-xs sm:text-sm">
												<div className="flex items-center gap-3 w-full">
													<div className="w-10 text-slate-500 font-medium shrink-0">Before</div>
													<div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100 border border-slate-200/30">
														<div
															className="h-full rounded-full bg-slate-400"
															style={{ width: `${item.before * 10}%` }}
														></div>
													</div>
													<div className="w-6 text-right font-bold text-slate-700 shrink-0">{item.before}</div>
												</div>

												<div className="flex items-center gap-3 w-full">
													<div className="w-10 text-slate-500 font-medium shrink-0">After</div>
													<div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100 border border-slate-200/30">
														<div
															className="h-full rounded-full bg-emerald-500"
															style={{ width: `${item.after * 10}%` }}
														></div>
													</div>
													<div className="w-6 text-right font-bold text-emerald-700 shrink-0">{item.after}</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* CASE STUDY */}
						<section id="case-study" className="rounded-3xl bg-slate-900 p-4 sm:p-6 lg:p-8 text-white w-full min-w-0 shadow-md">
							<div className="mb-8">
								<h2 className="mb-3 text-2xl sm:text-3xl font-black tracking-tight break-words">
									Case Study: Improving Margin Through Better Scrap and Product Planning
								</h2>

								<p className="text-sm sm:text-base leading-6 sm:leading-7 text-slate-300 break-words">
									A client had a recycling plant that was facing uneven scrap quality and weak product pricing.
								</p>
							</div>

							<div className="grid gap-4 sm:grid-cols-2 w-full text-xs sm:text-sm">
								<div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur w-full min-w-0">
									<h3 className="mb-4 text-lg font-bold text-white break-words">Challenge</h3>
									<ul className="space-y-2.5 text-slate-300">
										{[
											"Scrap loads had mixed contamination",
											"Processing loss was higher than expected",
											"Finished product was not clearly graded",
											"Buyers were offering low prices",
										].map((item) => (
											<li key={item} className="flex items-start gap-2">
												<span className="mt-1.5 h-2 w-2 min-w-[8px] rounded-full bg-red-400 shrink-0"></span>
												<span className="break-words">{item}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur w-full min-w-0">
									<h3 className="mb-4 text-lg font-bold text-emerald-400 break-words">Our Solution</h3>
									<ul className="space-y-2.5 text-slate-300">
										{[
											"Shortlisted cleaner and more reliable suppliers",
											"Improved material checking before purchase",
											"Separated product by grade and quality",
											"Adjusted market positioning and buyer communication",
										].map((item) => (
											<li key={item} className="flex items-start gap-2">
												<span className="mt-1.5 h-2 w-2 min-w-[8px] rounded-full bg-emerald-400 shrink-0"></span>
												<span className="break-words">{item}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</section>

						{/* PROCESS STEP ROADMAP */}
						<section className="w-full min-w-0">
							<div className="mb-8">
								<h2 className="mb-3 text-2xl sm:text-3xl font-black tracking-tight text-slate-900 break-words">
									Step-by-Step Process We Follow
								</h2>

								<p className="text-base text-muted-foreground break-words">
									This makes the work easy for the client to understand and easy for the plant to manage.
								</p>
							</div>

							<div className="grid gap-4 w-full">
								{[
									{
										num: "1",
										title: "Understand the Business",
										desc: "We first study the scrap type, product target, plant capacity, and expected market.",
									},
									{
										num: "2",
										title: "Review Sourcing Options",
										desc: "We evaluate scrap sources, quality, and price before the client makes a purchase decision.",
									},
									{
										num: "3",
										title: "Support Product Planning",
										desc: "We help the client present the output in a way buyers can easily understand and accept.",
									},
									{
										num: "4",
										title: "Improve Business Flow",
										desc: "We help keep buying, processing, and selling aligned so the plant stays stable and profitable.",
									},
								].map((item) => (
									<div
										key={item.num}
										className="flex flex-col sm:flex-row gap-4 rounded-3xl border border-border bg-white p-5 sm:p-6 shadow-sm w-full min-w-0"
									>
										<div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-lg sm:text-xl font-black text-white">
											{item.num}
										</div>

										<div className="min-w-0 flex-1">
											<h3 className="mb-1 text-lg sm:text-xl font-bold text-slate-900 break-words">
												{item.title}
											</h3>

											<p className="text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground break-words">
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>
						</section>

						{/* FAQ */}
						<section className="w-full min-w-0">
							<div className="mb-6">
								<h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 break-words">
									Frequently Asked Questions
								</h2>
							</div>

							<div className="space-y-3 w-full">
								{[
									{
										q: "Is cheap scrap always a good deal?",
										a: "No. Cheap scrap can cost more later if it has high contamination, poor recovery, or sorting problems.",
									},
									{
										q: "How do we make product easier to sell?",
										a: "Product quality, clean grading, moisture control, and clear presentation help buyers trust the material.",
									},
									{
										q: "Can small plants also benefit from this approach?",
										a: "Yes. Even small plants can improve profit by buying better scrap and selling better-grade output.",
									},
									{
										q: "Why is supplier selection important?",
										a: "A reliable supplier gives stable quality and stable supply, which keeps production more predictable.",
									},
								].map((item) => (
									<details
										key={item.q}
										className="rounded-2xl border border-border bg-white p-4 sm:p-5 shadow-sm group w-full min-w-0"
									>
										<summary className="cursor-pointer text-sm sm:text-base font-bold text-slate-900 list-none flex justify-between items-center group-open:mb-3">
											<span className="break-words max-w-[90%]">{item.q}</span>
											<span className="text-slate-400 transition-transform group-open:rotate-180 text-xs shrink-0 ml-2">▼</span>
										</summary>

										<p className="text-xs sm:text-sm leading-6 text-muted-foreground border-t border-slate-100 pt-2.5 break-words">
											{item.a}
										</p>
									</details>
								))}
							</div>
						</section>

						{/* FOOTER CTA */}
						<section id="contact" className="w-full min-w-0">
							<div className="rounded-[32px] bg-gradient-to-br from-emerald-500 to-teal-600 p-6 sm:p-10 text-center text-white shadow-md w-full">
								<h2 className="mb-4 text-xl sm:text-3xl font-black tracking-tight break-words">
									Need Help with Scrap Buying or Product Selling?
								</h2>

								<p className="mx-auto mb-6 max-w-2xl text-sm sm:text-base leading-6 text-emerald-50 break-words">
									We help clients make better decisions, improve margins, and
									build a stronger recycling business from both sides of the market.
								</p>

								<a
									href="mailto:info@eprnexuss.com"
									className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold text-emerald-700 transition hover:scale-[1.02] shadow-sm"
								>
									Contact Us
								</a>
							</div>
						</section>
					</main>

					{/* 
					  RIGHT COLUMN: DESKTOP FLOATING STICKY PANEL 
					  By using h-full, the aside column matches the height of the main content column,
					  giving the internal sticky child the vertical track it needs to float down.
					*/}
					<aside className="hidden lg:block lg:col-span-1 h-full w-full min-w-0">
						<div className="sticky top-28 self-start w-full bg-white/80 p-6 rounded-3xl border border-border shadow-sm backdrop-blur-md">
							<h3 className="text-xl font-bold text-slate-900 mb-1 break-words">Connect With Our Experts</h3>
							<p className="text-xs text-muted-foreground mb-6 break-words">Have questions regarding scrap sourcing, sales strategies, or market deployment?</p>
							<div className="w-full max-w-full">
								<StickyContactForm />
							</div>
						</div>
					</aside>

				</div>
			</article>
		</>
	);
};

export default PlasticBuySelling;