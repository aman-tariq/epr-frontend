import React from "react";
import Seo from "@/components/Seo";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";

const machineData = [
	{ name: "Shredder / Crusher", value: 10 },
	{ name: "Washing Line", value: 9 },
	{ name: "Drying Unit", value: 8 },
	{ name: "Extruder / Pelletizer", value: 10 },
	{ name: "Sorting Conveyor", value: 7 },
	{ name: "Control Panel", value: 8 },
];

const performanceData = [
	{
		name: "Output Consistency",
		before: 6,
		after: 10,
	},
	{
		name: "Breakdowns",
		before: 9,
		after: 4,
	},
	{
		name: "Material Wastage",
		before: 8,
		after: 3,
	},
	{
		name: "Labor Dependency",
		before: 7,
		after: 5,
	},
	{
		name: "Production Confidence",
		before: 6,
		after: 10,
	},
];

const PlasticMachinery: React.FC = () => (
	<>
		<Seo
			title="How to Choose the Right Machinery for Plastic Recycling Plant - Complete Guide 2026"
			description="Complete guide on selecting the best machinery for Plastic Recycling Plant in India. Learn about shredder, washing line, extruder, pelletizer, and smart equipment planning to start a profitable plastic recycling business."
			keywords={[
				"How to Choose Machinery for Plastic Recycling Plant",
				"Best Machines for Plastic Recycling",
				"Plastic Recycling Plant Machinery Guide",
				"Shredder Washing Line Extruder for Plastic Recycling",
				"How to Start Plastic Recycling Plant Machinery",
				"Plastic Scrap Recycling Equipment Selection",
				"Plastic Recycling Business Setup Machinery",
				"PET HDPE PP Recycling Machinery Cost",
				"Best Plastic Recycling Machines in India",
				"Plastic Flakes to Pellets Machinery",
				"Plastic Recycling Plant Layout and Machinery",
				"Plastic Waste Recycling Plant Setup Guide"
			]}
			url="https://eprnexuss.com/blog/plastic-machinery"
      		type="article"
		/>
	<article className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
		{/* Tags */}
		<div className="mb-5 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
			{[
				"Plastic Recycling",
				"Machinery",
				"Equipment",
				"Plant Design",
			].map((tag) => (
				<span
					key={tag}
					className="rounded-full bg-secondary/10 px-3 py-1"
				>
					{tag}
				</span>
			))}
		</div>

		{/* Intro */}
		<div className="mb-14 rounded-3xl border border-border bg-card p-6 md:p-10">
			<h1 className="mb-5 max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl">
				From Plastic Waste to a Smarter, More Profitable Plant
			</h1>

			<p className="max-w-4xl text-lg leading-8 text-muted-foreground">
				The right machinery does more than process waste. It
				improves quality, reduces downtime, lowers operating
				cost, and helps your recycling business grow with
				confidence.
			</p>
		</div>

		{/* Stats */}
		<section className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
			{[
				[
					"Better Output",
					"Stable processing and consistent material quality",
				],
				[
					"Lower Waste",
					"Less rejection during washing, drying, and pelletizing",
				],
				[
					"Less Downtime",
					"Machines selected to suit real operating conditions",
				],
				[
					"Easy Expansion",
					"Layout and capacity planned for future growth",
				],
			].map(([title, desc]) => (
				<div
					key={title}
					className="rounded-3xl border border-border bg-card p-6"
				>
					<h3 className="mb-2 text-xl font-semibold text-foreground">
						{title}
					</h3>

					<p className="leading-7 text-muted-foreground">
						{desc}
					</p>
				</div>
			))}
		</section>

		{/* Why Machinery Matters */}
		<section className="mb-16">
			<h2 className="mb-5 text-3xl font-semibold text-foreground md:text-4xl">
				Why Machinery Selection Matters So Much
			</h2>

			<p className="mb-10 max-w-5xl leading-8 text-muted-foreground">
				A recycling plant can only perform well when the
				machinery matches the material, capacity, and business
				model. A machine that looks powerful on paper may not
				be suitable for the actual waste stream. That is why
				planning is important.
			</p>

			<div className="grid gap-6 lg:grid-cols-3">
				{[
					[
						"Right machine, right purpose",
						"PET bottles, HDPE containers, rigid plastic, and mixed scrap all need different handling. Choosing the correct line avoids unnecessary losses and poor output.",
					],
					[
						"Better plant performance",
						"Good machinery improves speed, quality, and consistency. This helps the client meet buyer demand with confidence.",
					],
					[
						"Long-term savings",
						"Well-planned setups reduce maintenance issues, labor pressure, and power waste over time.",
					],
				].map(([title, desc]) => (
					<div
						key={title}
						className="rounded-3xl border border-border bg-card p-6"
					>
						<h3 className="mb-3 text-xl font-semibold text-foreground">
							{title}
						</h3>

						<p className="leading-7 text-muted-foreground">
							{desc}
						</p>
					</div>
				))}
			</div>
		</section>

		{/* How We Help */}
		<section className="mb-16">
			<h2 className="mb-5 text-3xl font-semibold text-foreground md:text-4xl">
				How We Help Clients at Every Stage
			</h2>

			<p className="mb-10 max-w-5xl leading-8 text-muted-foreground">
				We guide clients from the first discussion to final
				commissioning. The goal is to make the project simple,
				practical, and easy to understand.
			</p>

			<div className="grid gap-6 lg:grid-cols-2">
				{[
					{
						title: "1. Understanding the client’s goal",
						items: [
							"What plastic will be processed?",
							"What product will be sold: flakes or pellets?",
							"What is the daily capacity target?",
							"What is the budget and growth plan?",
						],
					},
					{
						title: "2. Designing the plant flow",
						items: [
							"Raw material receiving",
							"Sorting and size reduction",
							"Washing and cleaning",
							"Drying and final processing",
						],
					},
					{
						title: "3. Recommending the right machines",
						items: [
							"Crusher or shredder",
							"Sorting conveyor",
							"Washing tank and friction washer",
							"Dewatering and drying system",
							"Extruder and pelletizer",
						],
					},
					{
						title: "4. Supporting installation and trial run",
						items: [
							"Machine placement support",
							"Utility planning",
							"Operator training",
							"Trial production checks",
						],
					},
				].map((card) => (
					<div
						key={card.title}
						className="rounded-3xl border border-border bg-card p-6"
					>
						<h3 className="mb-4 text-xl font-semibold text-foreground">
							{card.title}
						</h3>

						<ul className="space-y-3 pl-5 text-muted-foreground">
							{card.items.map((item) => (
								<li
									key={item}
									className="list-disc leading-7"
								>
									{item}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>

		{/* Machinery */}
		<section className="mb-16">
			<h2 className="mb-5 text-3xl font-semibold text-foreground md:text-4xl">
				Key Machinery Explained in Simple Words
			</h2>

			<p className="mb-10 max-w-5xl leading-8 text-muted-foreground">
				Clients understand machinery better when each machine
				is explained in terms of its job and value in the
				process.
			</p>

			<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{[
					[
						"Shredder / Crusher",
						"Breaks large plastic into small pieces so it can move through the line more easily.",
					],
					[
						"Sorting Conveyor",
						"Helps separate unwanted material before washing, improving quality and reducing waste.",
					],
					[
						"Washing Line",
						"Removes dirt, labels, glue, and contamination from the plastic material.",
					],
					[
						"Dewatering Unit",
						"Removes excess water before drying, saving energy and improving output quality.",
					],
					[
						"Drying System",
						"Reduces moisture so the final material is suitable for further processing.",
					],
					[
						"Extruder / Pelletizer",
						"Converts plastic flakes into pellets that can be reused in manufacturing.",
					],
				].map(([title, desc]) => (
					<div
						key={title}
						className="rounded-3xl border border-border bg-card p-6"
					>
						<h3 className="mb-3 text-xl font-semibold text-foreground">
							{title}
						</h3>

						<p className="leading-7 text-muted-foreground">
							{desc}
						</p>
					</div>
				))}
			</div>
		</section>

		{/* Machinery Chart */}
		<section className="mb-16 rounded-3xl border border-border bg-card p-6 md:p-8">
			<h2 className="mb-8 text-3xl font-semibold text-foreground">
				Machinery Importance Chart
			</h2>

			<div className="h-[420px] w-full">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={machineData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="value" radius={[10, 10, 0, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</section>

		{/* Table */}
		<section className="mb-16">
			<h2 className="mb-5 text-3xl font-semibold text-foreground md:text-4xl">
				Business Goals and the Right Machine Strategy
			</h2>

			<p className="mb-8 max-w-5xl leading-8 text-muted-foreground">
				Different clients need different setups. This table
				makes the decision easier by linking the business goal
				to the right machinery choice.
			</p>

			<div className="overflow-hidden rounded-3xl border border-border bg-card">
				<div className="hidden md:block overflow-x-auto">
					<table className="min-w-full">
						<thead className="bg-muted/40">
							<tr>
								<th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wide">
									Business Goal
								</th>

								<th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wide">
									Recommended Setup
								</th>

								<th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wide">
									Why It Helps
								</th>
							</tr>
						</thead>

						<tbody>
							{[
								[
									"Low investment entry",
									"Basic shredder, sorting, wash line, drying unit",
									"Simple start with controlled budget and manageable operations",
								],
								[
									"Medium-scale production",
									"Crusher, wash line, dewatering, dryer, extruder",
									"Balanced output and better product quality",
								],
								[
									"Premium pellet production",
									"Advanced washing, strong drying, efficient pelletizer",
									"Improves final material value and market acceptance",
								],
								[
									"Future expansion",
									"Modular setup with room for upgrades",
									"Makes the plant easier to scale later",
								],
							].map((row, index) => (
								<tr
									key={index}
									className="border-t border-border"
								>
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
							goal: "Low investment entry",
							setup: "Basic shredder, sorting, wash line, drying unit",
							help: "Simple start with controlled budget and manageable operations",
						},
						{
							goal: "Medium-scale production",
							setup: "Crusher, wash line, dewatering, dryer, extruder",
							help: "Balanced output and better product quality",
						},
						{
							goal: "Premium pellet production",
							setup: "Advanced washing, strong drying, efficient pelletizer",
							help: "Improves final material value and market acceptance",
						},
						{
							goal: "Future expansion",
							setup: "Modular setup with room for upgrades",
							help: "Makes the plant easier to scale later",
						},
					].map((item) => (
						<div
							key={item.goal}
							className="rounded-2xl border border-border p-4"
						>
							<div className="mb-4">
								<h4 className="mb-1 text-sm font-semibold uppercase tracking-wide text-foreground">
									Business Goal
								</h4>

								<p className="text-muted-foreground">
									{item.goal}
								</p>
							</div>

							<div className="mb-4">
								<h4 className="mb-1 text-sm font-semibold uppercase tracking-wide text-foreground">
									Recommended Setup
								</h4>

								<p className="text-muted-foreground">
									{item.setup}
								</p>
							</div>

							<div>
								<h4 className="mb-1 text-sm font-semibold uppercase tracking-wide text-foreground">
									Why It Helps
								</h4>

								<p className="text-muted-foreground">
									{item.help}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>

		{/* Case Study */}
		<section className="mb-16">
			<h2 className="mb-5 text-3xl font-semibold text-foreground md:text-4xl">
				Case Study: Helping a Client Build a Stable Recycling
				Plant
			</h2>

			<p className="mb-10 max-w-5xl leading-8 text-muted-foreground">
				A mid-sized client wanted to start a plant for rigid
				plastic recycling. Their priority was to begin
				production quickly, but they also wanted a setup that
				would not become outdated after a short period.
			</p>

			<div className="grid gap-6 lg:grid-cols-2">
				<div className="rounded-3xl border border-border bg-card p-6">
					<h3 className="mb-4 text-2xl font-semibold text-foreground">
						Challenge
					</h3>

					<ul className="space-y-3 pl-5 text-muted-foreground">
						{[
							"Unclear machine sizing",
							"Limited space for the plant",
							"Need for stable daily output",
							"Concern about future expansion",
						].map((item) => (
							<li
								key={item}
								className="list-disc leading-7"
							>
								{item}
							</li>
						))}
					</ul>
				</div>

				<div className="rounded-3xl border border-border bg-card p-6">
					<h3 className="mb-4 text-2xl font-semibold text-foreground">
						Our Solution
					</h3>

					<ul className="space-y-3 pl-5 text-muted-foreground">
						{[
							"Selected machines based on actual waste type",
							"Recommended a practical plant layout",
							"Balanced the setup between cost and performance",
							"Planned the line so it could grow later",
						].map((item) => (
							<li
								key={item}
								className="list-disc leading-7"
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>

		{/* Performance Chart */}
		<section className="mb-16 rounded-3xl border border-border bg-card p-6 md:p-8">
			<h2 className="mb-8 text-3xl font-semibold text-foreground">
				Performance Improvement
			</h2>

			<div className="h-[420px] w-full">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={performanceData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar
							dataKey="before"
							radius={[10, 10, 0, 0]}
						/>

						<Bar
							dataKey="after"
							radius={[10, 10, 0, 0]}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</section>

		{/* Benefits */}
		<section className="mb-16">
			<h2 className="mb-5 text-3xl font-semibold text-foreground md:text-4xl">
				What the Client Gains
			</h2>

			<p className="mb-10 max-w-5xl leading-8 text-muted-foreground">
				Clients do not just need machines. They need clarity,
				confidence, and a setup that works in real life.
			</p>

			<div className="grid gap-6 lg:grid-cols-3">
				{[
					[
						"Clear decision-making",
						"Clients understand what to buy, why to buy it, and how each machine supports the overall plant.",
					],
					[
						"Better financial control",
						"Proper planning prevents overbuying, underbuying, and unnecessary upgrades later.",
					],
					[
						"Strong plant foundation",
						"Properly planned machinery lines help businesses operate smoothly from the beginning.",
					],
				].map(([title, desc]) => (
					<div
						key={title}
						className="rounded-3xl border border-border bg-card p-6"
					>
						<h3 className="mb-3 text-xl font-semibold text-foreground">
							{title}
						</h3>

						<p className="leading-7 text-muted-foreground">
							{desc}
						</p>
					</div>
				))}
			</div>
		</section>

		{/* Timeline */}
		<section className="mb-16">
			<h2 className="mb-5 text-3xl font-semibold text-foreground md:text-4xl">
				Step-by-Step Process for Clients
			</h2>

			<p className="mb-10 max-w-5xl leading-8 text-muted-foreground">
				This section helps clients understand how the project
				usually moves from idea to implementation.
			</p>

			<div className="space-y-5">
				{[
					[
						"1",
						"Requirement discussion",
						"We first understand the client’s material type, target output, budget, and plant expectations.",
					],
					[
						"2",
						"Machine planning",
						"We recommend machinery that fits the plant goals and avoids unnecessary extra cost.",
					],
					[
						"3",
						"Layout and utility planning",
						"We help arrange the line so space, power, and water usage are planned properly.",
					],
					[
						"4",
						"Installation and testing",
						"The line is installed, checked, tested, and prepared for actual production.",
					],
				].map(([num, title, desc]) => (
					<div
						key={num}
						className="flex gap-5 rounded-3xl border border-border bg-card p-5"
					>
						<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-lg font-bold text-white">
							{num}
						</div>

						<div>
							<h3 className="mb-2 text-xl font-semibold text-foreground">
								{title}
							</h3>

							<p className="leading-7 text-muted-foreground">
								{desc}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>

		{/* FAQ */}
		<section className="mb-16">
			<h2 className="mb-5 text-3xl font-semibold text-foreground md:text-4xl">
				Frequently Asked Questions
			</h2>

			<p className="mb-10 max-w-5xl leading-8 text-muted-foreground">
				These answers help clients understand the basics
				before they start planning the plant.
			</p>

			<div className="space-y-4">
				{[
					[
						"How do I know which machine I need first?",
						"Start with the raw material type and final product goal. The machine choice changes depending on whether you want flakes, washed output, or pellets.",
					],
					[
						"Can a small plant grow later?",
						"Yes. A modular and properly planned setup allows expansion without replacing the full line.",
					],
					[
						"Why is plant layout important?",
						"A good layout improves material flow, reduces manual handling, and makes the plant easier to manage.",
					],
					[
						"What is the biggest mistake clients make?",
						"The biggest mistake is buying machines without checking if they match the real material, capacity, and business plan.",
					],
				].map(([question, answer]) => (
					<details
						key={question}
						className="rounded-2xl border border-border bg-card p-5"
					>
						<summary className="cursor-pointer text-lg font-semibold text-foreground">
							{question}
						</summary>

						<p className="mt-4 leading-7 text-muted-foreground">
							{answer}
						</p>
					</details>
				))}
			</div>
		</section>

		{/* CTA */}
		<section className="rounded-3xl border border-border bg-card p-8 text-center md:p-12">
			<h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
				Need a Practical Machinery Plan?
			</h2>

			<p className="mx-auto mb-8 max-w-3xl leading-8 text-muted-foreground">
				We help clients choose the right machinery, simplify
				plant planning, and create a setup that is easy to
				understand and easy to run.
			</p>

			<button className="rounded-xl bg-secondary px-7 py-4 font-semibold text-secondary-foreground transition hover:opacity-90">
				Contact Us
			</button>
		</section>
	</article>
	</>
);

export default PlasticMachinery;