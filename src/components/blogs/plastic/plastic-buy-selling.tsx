import React from "react";
import Seo from "@/components/Seo";
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
		<article className="bg-gradient-to-br from-slate-50 via-white to-emerald-50">
			{/* HERO */}
			<section className="relative overflow-hidden border-b border-border">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_30%)]"></div>

				<div className="container relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
					<div className="grid items-center gap-10 lg:grid-cols-1">
						<div>
							<div className="mb-5 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
								{[
									"Plastic Recycling",
									"Business Growth",
									"Scrap Trading",
									"Margins",
								].map((tag) => (
									<span
										key={tag}
										className="rounded-full border border-emerald-200 bg-emerald-100/70 px-4 py-2"
									>
										{tag}
									</span>
								))}
							</div>

							<h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
								From Scrap to Sale, We Help Clients Build a Stronger
								Recycling Business
							</h1>

							<p className="mb-8 max-w-3xl text-lg leading-8 text-muted-foreground">
								In a plastic recycling plant, profit depends on more than
								machinery. The real difference comes from buying the right
								scrap, keeping quality under control, and selling the final
								product to the right buyer at the right value.
							</p>

							<div className="flex flex-wrap gap-4">
								<a
									href="#contact"
									className="inline-flex items-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-emerald-700"
								>
									Get Expert Support
								</a>

								<a
									href="#case-study"
									className="inline-flex items-center rounded-xl border border-border bg-white px-6 py-3 font-semibold text-foreground transition hover:bg-muted"
								>
									View Case Study
								</a>
							</div>
						</div>

						<div className="grid gap-5">
							<div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
								<h3 className="mb-4 text-2xl font-bold text-slate-900">
									What Clients Need Most
								</h3>

								<div className="grid gap-4 sm:grid-cols-2">
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
											className="rounded-2xl border border-border bg-slate-50 p-5"
										>
											<item.icon className="mb-3 h-8 w-8 text-emerald-600" />
											<h4 className="mb-1 font-bold text-slate-900">
												{item.title}
											</h4>
											<p className="text-sm text-muted-foreground">
												{item.desc}
											</p>
										</div>
									))}
								</div>
							</div>

							<div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
								<h3 className="mb-4 text-xl font-bold text-slate-900">
									Quick Business Focus
								</h3>

								<div className="flex flex-wrap gap-3">
									{[
										"PET Scrap",
										"HDPE Scrap",
										"PP Waste",
										"Washed Flakes",
										"Pellets",
									].map((item) => (
										<span
											key={item}
											className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
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

			{/* WHY IMPORTANT */}
			<section className="container mx-auto max-w-7xl px-4 py-16">
				<div className="mb-10">
					<h2 className="mb-5 text-4xl font-black tracking-tight text-slate-900">
						Why Buying and Selling Matter So Much
					</h2>

					<p className="max-w-4xl text-lg leading-8 text-muted-foreground">
						A recycling plant cannot grow only by processing plastic. It
						must also manage market flow. Good buying brings clean
						feedstock. Good selling brings cash flow. Together, they keep
						the business healthy.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
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
							className="rounded-3xl border border-border bg-white p-6 shadow-sm"
						>
							<h3 className="mb-3 text-xl font-bold text-slate-900">
								{item.title}
							</h3>

							<p className="leading-7 text-muted-foreground">
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* BUYING */}
			<section className="bg-slate-50 py-16">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="mb-10">
						<h2 className="mb-5 text-4xl font-black tracking-tight text-slate-900">
							How We Help Clients in Scrap Buying
						</h2>

						<p className="max-w-4xl text-lg leading-8 text-muted-foreground">
							Scrap buying is not only about price. It is about quality,
							consistency, logistics, and fit for the plant. A cheaper
							load can become expensive if it creates contamination or high
							rejection.
						</p>
					</div>

					<div className="grid gap-6 lg:grid-cols-3">
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
								className="rounded-3xl border border-border bg-white p-7 shadow-sm"
							>
								<item.icon className="mb-5 h-10 w-10 text-emerald-600" />

								<h3 className="mb-4 text-2xl font-bold text-slate-900">
									{item.title}
								</h3>

								<p className="leading-8 text-muted-foreground">
									{item.desc}
								</p>
							</div>
						))}
					</div>

					<div className="mt-8 grid gap-6 lg:grid-cols-3">
						<div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
							<h3 className="mb-5 text-2xl font-bold text-slate-900">
								Types of Scrap We Assess
							</h3>

							<ul className="space-y-3 text-muted-foreground">
								{[
									"PET bottles and preforms",
									"HDPE containers and drums",
									"PP crates, caps, and molded waste",
									"Mixed rigid plastic",
									"Industrial and post-consumer waste",
								].map((item) => (
									<li key={item} className="flex gap-3">
										<span className="mt-2 h-2 w-2 rounded-full bg-emerald-500"></span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
							<h3 className="mb-5 text-2xl font-bold text-slate-900">
								What Clients Should Avoid
							</h3>

							<ul className="space-y-3 text-muted-foreground">
								{[
									"Overpriced dirty scrap",
									"Unverified suppliers",
									"Mixed loads with low recovery value",
									"Irregular supply sources",
								].map((item) => (
									<li key={item} className="flex gap-3">
										<span className="mt-2 h-2 w-2 rounded-full bg-red-500"></span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
							<h3 className="mb-5 text-2xl font-bold text-slate-900">
								What We Focus On
							</h3>

							<ul className="space-y-3 text-muted-foreground">
								{[
									"Better recovery value",
									"Lower processing loss",
									"Better plant efficiency",
									"Stronger supplier relationships",
								].map((item) => (
									<li key={item} className="flex gap-3">
										<span className="mt-2 h-2 w-2 rounded-full bg-blue-600"></span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* SELLING */}
			<section className="container mx-auto max-w-7xl px-4 py-16">
				<div className="mb-10">
					<h2 className="mb-5 text-4xl font-black tracking-tight text-slate-900">
						How We Help Clients in Product Selling
					</h2>

					<p className="max-w-4xl text-lg leading-8 text-muted-foreground">
						Once the plant starts producing flakes or pellets, the goal is
						to sell the product in the right market at the right value.
						Product presentation matters almost as much as product quality.
					</p>
				</div>

				<div className="grid gap-6 lg:grid-cols-3">
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
							className="rounded-3xl border border-border bg-white p-7 shadow-sm"
						>
							<item.icon className="mb-5 h-10 w-10 text-emerald-600" />

							<h3 className="mb-4 text-2xl font-bold text-slate-900">
								{item.title}
							</h3>

							<p className="leading-8 text-muted-foreground">
								{item.desc}
							</p>
						</div>
					))}
				</div>

				{/* GRAPH 1 */}
				<div className="mt-12 rounded-3xl border border-border bg-white p-2 lg:p-8 shadow-sm">
					<h3 className="mb-8 text-3xl font-bold text-slate-900">
						Business Factors That Drive Profit
					</h3>

					<div className="space-y-6">
						{profitFactors.map((item) => (
							<div key={item.label}>
								<div className="mb-2 flex items-center justify-between">
									<span className="font-semibold text-slate-700">
										{item.label}
									</span>

									<span className="text-sm font-bold text-slate-900">
										{item.value}/10
									</span>
								</div>

								<div className="h-4 overflow-hidden rounded-full bg-slate-200">
									<div
										className={`h-full rounded-full ${item.color}`}
										style={{ width: `${item.value * 10}%` }}
									></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* TABLE */}
			<section className="bg-slate-50 py-16">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="mb-10">
						<h2 className="mb-5 text-4xl font-black tracking-tight text-slate-900">
							Simple Database View for Client Understanding
						</h2>

						<p className="max-w-4xl text-lg leading-8 text-muted-foreground">
							This table helps clients compare the buying side and the
							selling side in one place.
						</p>
					</div>

					<div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
	{/* Desktop Table */}
	<div className="hidden overflow-x-auto md:block">
		<table className="min-w-full">
			<thead className="bg-slate-100">
				<tr>
					<th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wide text-slate-700">
						Area
					</th>

					<th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wide text-slate-700">
						What We Check
					</th>

					<th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wide text-slate-700">
						Why It Matters
					</th>
				</tr>
			</thead>

			<tbody>
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
					<tr key={index} className="border-t border-border">
						{row.map((cell) => (
							<td
								key={cell}
								className="px-6 py-5 leading-7 text-muted-foreground"
							>
								{cell}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	</div>

	{/* Mobile Cards */}
	<div className="grid gap-4 p-4 md:hidden">
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
				className="rounded-2xl border border-border bg-slate-50 p-5"
			>
				<div className="mb-4">
					<p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-500">
						Area
					</p>

					<h3 className="text-lg font-bold text-slate-900">
						{item.area}
					</h3>
				</div>

				<div className="mb-4">
					<p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-500">
						What We Check
					</p>

					<p className="leading-7 text-muted-foreground">
						{item.check}
					</p>
				</div>

				<div>
					<p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-500">
						Why It Matters
					</p>

					<p className="leading-7 text-muted-foreground">
						{item.why}
					</p>
				</div>
			</div>
		))}
	</div>
</div>
				</div>
			</section>

			{/* BEFORE AFTER GRAPH */}
			<section className="container mx-auto max-w-7xl px-4 py-16">
				<div className="mb-10">
					<h2 className="mb-5 text-4xl font-black tracking-tight text-slate-900">
						Before vs After Better Buying and Selling
					</h2>
				</div>

				<div className="rounded-3xl border border-border bg-white p-2 lg:p-8 shadow-sm">
					<div className="space-y-8">
						{performanceData.map((item) => (
							<div key={item.label}>
								<div className="mb-3 flex items-center justify-between">
									<h4 className="font-bold text-slate-900">
										{item.label}
									</h4>

									<div className="flex items-center gap-5 text-sm">
										<div className="flex items-center gap-2">
											<div className="h-3 w-3 rounded-full bg-slate-400"></div>
											Before
										</div>

										<div className="flex items-center gap-2">
											<div className="h-3 w-3 rounded-full bg-emerald-500"></div>
											After
										</div>
									</div>
								</div>

								<div className="grid gap-3">
									<div className="flex items-center gap-4">
										<div className="w-16 text-sm font-medium text-slate-600">
											Before
										</div>

										<div className="h-4 flex-1 overflow-hidden rounded-full bg-slate-200">
											<div
												className="h-full rounded-full bg-slate-400"
												style={{
													width: `${item.before * 10}%`,
												}}
											></div>
										</div>

										<div className="w-8 text-right text-sm font-bold text-slate-700">
											{item.before}
										</div>
									</div>

									<div className="flex items-center gap-4">
										<div className="w-16 text-sm font-medium text-slate-600">
											After
										</div>

										<div className="h-4 flex-1 overflow-hidden rounded-full bg-slate-200">
											<div
												className="h-full rounded-full bg-emerald-500"
												style={{
													width: `${item.after * 10}%`,
												}}
											></div>
										</div>

										<div className="w-8 text-right text-sm font-bold text-emerald-700">
											{item.after}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CASE STUDY */}
			<section
				id="case-study"
				className="bg-gradient-to-br from-slate-900 to-slate-900 py-16 text-white"
			>
				<div className="container mx-auto max-w-7xl px-4">
					<div className="mb-10">
						<h2 className="mb-5 text-4xl font-black tracking-tight">
							Case Study: Improving Margin Through Better Scrap and
							Product Planning
						</h2>

						<p className="max-w-4xl text-lg leading-8 text-slate-300">
							A client had a recycling plant that was facing uneven scrap
							quality and weak product pricing. The plant was working, but
							the business was not performing as well as expected.
						</p>
					</div>

					<div className="grid gap-6 lg:grid-cols-2">
						<div className="rounded-3xl border border-white/10 bg-white/5 p-2 lg:p-8 backdrop-blur">
							<h3 className="mb-5 text-2xl font-bold">Challenge</h3>

							<ul className="space-y-3 text-slate-300">
								{[
									"Scrap loads had mixed contamination",
									"Processing loss was higher than expected",
									"Finished product was not clearly graded",
									"Buyers were offering low prices",
								].map((item) => (
									<li key={item} className="flex gap-3">
										<span className="mt-2 h-2 w-2 rounded-full bg-red-400"></span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="rounded-3xl border border-white/10 bg-white/5 p-2 lg:p-8 backdrop-blur">
							<h3 className="mb-5 text-2xl font-bold">Our Solution</h3>

							<ul className="space-y-3 text-slate-300">
								{[
									"Shortlisted cleaner and more reliable suppliers",
									"Improved material checking before purchase",
									"Separated product by grade and quality",
									"Adjusted market positioning and buyer communication",
								].map((item) => (
									<li key={item} className="flex gap-3">
										<span className="mt-2 h-2 w-2 rounded-full bg-emerald-400"></span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* PROCESS */}
			<section className="container mx-auto max-w-7xl px-4 py-16">
				<div className="mb-10">
					<h2 className="mb-5 text-4xl font-black tracking-tight text-slate-900">
						Step-by-Step Process We Follow
					</h2>

					<p className="max-w-4xl text-lg leading-8 text-muted-foreground">
						This makes the work easy for the client to understand and easy
						for the plant to manage.
					</p>
				</div>

				<div className="grid gap-6">
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
							className="flex gap-5 rounded-3xl border border-border bg-white p-7 shadow-sm"
						>
							<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-500 text-2xl font-black text-white">
								{item.num}
							</div>

							<div>
								<h3 className="mb-3 text-2xl font-bold text-slate-900">
									{item.title}
								</h3>

								<p className="leading-8 text-muted-foreground">
									{item.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* FAQ */}
			<section className="bg-slate-50 py-16">
				<div className="container mx-auto max-w-5xl px-4">
					<div className="mb-10">
						<h2 className="mb-5 text-4xl font-black tracking-tight text-slate-900">
							Frequently Asked Questions
						</h2>

						<p className="text-lg leading-8 text-muted-foreground">
							These answers help clients understand the practical side of
							buying and selling in plastic recycling.
						</p>
					</div>

					<div className="space-y-5">
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
								className="rounded-3xl border border-border bg-white p-6 shadow-sm"
							>
								<summary className="cursor-pointer text-xl font-bold text-slate-900">
									{item.q}
								</summary>

								<p className="mt-4 leading-8 text-muted-foreground">
									{item.a}
								</p>
							</details>
						))}
					</div>
				</div>
			</section>

			{/* CONTACT */}
			<section
				id="contact"
				className="container mx-auto max-w-5xl px-4 py-16"
			>
				<div className="rounded-[32px] border border-border bg-gradient-to-br from-emerald-500 to-emerald-500 p-10 text-center text-white shadow-xl">
					<h2 className="mb-5 text-4xl font-black tracking-tight">
						Need Help with Scrap Buying or Product Selling?
					</h2>

					<p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-emerald-50">
						We help clients make better decisions, improve margins, and
						build a stronger recycling business from both sides of the
						market.
					</p>

					<a
						href="mailto:info@eprnexuss.com"
						className="inline-flex rounded-xl bg-white px-7 py-4 font-bold text-emerald-700 transition hover:scale-[1.02]"
					>
						Contact Us
					</a>
				</div>
			</section>
		</article>
		</>
	);
};

export default PlasticBuySelling;