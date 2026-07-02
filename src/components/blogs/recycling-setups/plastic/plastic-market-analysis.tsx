import React from "react";
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

import {
  BarChart3,
  PieChart,
  TrendingUp,
  Factory,
  Recycle,
  ShieldCheck,
  Package,
  Car,
  Building2,
  ArrowRight,
  CircleDollarSign,
  AlertTriangle,
  CheckCircle2,
  Database,
} from "lucide-react";

const stats = [
  {
    title: "India plastics market",
    value: "₹46.77B",
    color: "text-cyan-600",
  },
  {
    title: "Recycled plastics market",
    value: "₹4.44B",
    color: "text-emerald-600",
  },
  {
    title: "Plastic recycling market",
    value: "₹2.1B",
    color: "text-amber-600",
  },
  {
    title: "Plastic packaging market",
    value: "₹13.2B",
    color: "text-violet-600",
  },
];

const segments = [
  {
    icon: Package,
    title: "Packaging converters",
    desc: "Film, sheet, bottles, caps, crates, and rigid packaging buyers.",
  },
  {
    icon: ShieldCheck,
    title: "FMCG brands",
    desc: "Companies needing recycled-content packaging with predictable quality.",
  },
  {
    icon: Car,
    title: "Automotive suppliers",
    desc: "Molded parts, trims, under-bonnet components, and engineered plastics.",
  },
  {
    icon: Building2,
    title: "Construction product makers",
    desc: "Pipes, profiles, panels, and durable plastic infrastructure products.",
  },
];

const feedstockData = [
  {
    name: "PET Bottles",
    value: 34,
    color: "bg-cyan-500",
  },
  {
    name: "HDPE Scrap",
    value: 26,
    color: "bg-emerald-500",
  },
  {
    name: "PP Scrap",
    value: 18,
    color: "bg-amber-500",
  },
  {
    name: "Commercial Waste",
    value: 12,
    color: "bg-violet-500",
  },
  {
    name: "Film Scrap",
    value: 10,
    color: "bg-orange-500",
  },
];

const priorityData = [
  {
    name: "Packaging",
    value: 95,
    color: "bg-emerald-500",
  },
  {
    name: "FMCG",
    value: 88,
    color: "bg-cyan-500",
  },
  {
    name: "Automotive",
    value: 80,
    color: "bg-amber-500",
  },
  {
    name: "Construction",
    value: 76,
    color: "bg-violet-500",
  },
  {
    name: "Traders",
    value: 68,
    color: "bg-orange-500",
  },
];

const buyerStrength = [
  {
    name: "Direct Brands",
    value: 92,
  },
  {
    name: "Converters",
    value: 88,
  },
  {
    name: "Compounders",
    value: 79,
  },
  {
    name: "Traders",
    value: 66,
  },
];

const PlasticMarketAnalysis: React.FC = () => {
  return (
    <>
      <Seo
        title="Plastic Recycling Market Analysis & Target Segments in India 2026"
        description="Complete market analysis for Plastic Recycling Plant in India. Learn the most profitable target segments (packaging, FMCG, automotive, construction), feedstock mix, buyer demand, and practical strategies to build a successful plastic recycling business."
        keywords={[
          "Plastic Recycling Market Analysis",
          "Plastic Recycling Target Segments India",
          "How to Find Buyers for Recycled Plastic",
          "Best Market Segments for Plastic Recycling",
          "Plastic Scrap Market Demand India",
          "PET HDPE PP Recycling Business Strategy",
          "Plastic Recycling Plant Market Opportunity",
          "Who Buys Recycled Plastic Flakes and Pellets",
          "Packaging Converters Recycled Plastic",
          "FMCG Brands Recycled Content Demand",
          "Automotive Plastic Recycling Market",
          "How to Start Profitable Plastic Recycling Business"
        ]}
        url="https://eprnexuss.com/blog/plastic-market-analysis"
        type="article"
      />

      <style>{`
        @media (max-width: 420px) {
          table, thead, tbody, th, td, tr { display: block; width: 100%; }
          thead tr { display: none; }
          tr { margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; }
          td { padding: 12px 16px; border: none; }
        }
      `}</style>

      <article className="mx-auto max-w-7xl px-4 py-14 text-slate-900">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-emerald-50 p-2 lg:p-14">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">
              <Recycle className="h-4 w-4" />
              Plastic Recycling Plant
            </div>

            <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              Turn plastic waste into the supply chain everyone depends on.
            </h1>

            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-700 md:text-lg">
              Plastic recycling is no longer just a compliance story. It is a
              growing business built on steady scrap supply, rising
              recycled-content demand, and brands that need a cleaner material
              story. This blog breaks down the market, the best target segments,
              the buying logic behind each segment, and a real-world style case
              study that shows how the model works in practice.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Packaging demand",
                "Consumer goods",
                "Automotive parts",
                "Construction products",
                "EPR-driven sourcing",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* MARKET OVERVIEW */}
        <section className="mt-14">
          <div className="mb-6 flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-cyan-600" />
            <h2 className="text-3xl font-bold text-slate-900">
              Why This Market Keeps Opening Up
            </h2>
          </div>

          <p className="max-w-5xl leading-8 text-slate-700">
            A plastic recycling plant sits at the crossing point of three strong
            forces: more plastic consumption, tighter waste rules, and faster
            demand for recycled material. Current industry estimates show India’s
            plastics market remains very large, while the recycled plastics and
            plastic recycling markets are expanding steadily.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className={`text-4xl font-black ${item.color}`}>
                  {item.value}
                </div>

                <p className="mt-3 text-sm text-slate-600">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-800">
            The opportunity is not only in collecting waste. It is in matching
            the right scrap stream to the right buyer and the right recycling
            route.
          </div>
        </section>

        {/* MARKET DRIVERS + TARGET SEGMENTS */}
        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-2 lg:p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <Factory className="h-7 w-7 text-emerald-600" />
              <h2 className="text-2xl font-bold text-slate-900">
                Market Drivers That Matter Most
              </h2>
            </div>

            <ul className="space-y-5 text-slate-700">
              {[
                "Packaging demand keeps generating high plastic volume.",
                "Brands are under pressure to use recycled material.",
                "EPR compliance creates demand for dependable recyclers.",
                "Recycled resin can provide cost advantages.",
                "Local sourcing reduces logistics and contamination losses.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-800">
              A strong plant focuses on scrap streams that are easiest to collect,
              clean, and sell.
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-2 lg:p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <BarChart3 className="h-7 w-7 text-cyan-600" />
              <h2 className="text-2xl font-bold text-slate-900">
                Best Target Market Segments
              </h2>
            </div>

            <div className="space-y-5">
              {segments.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
                      <Icon className="h-6 w-6 text-cyan-700" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-7 text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* VISUAL DASHBOARD */}
        <section className="mt-14">
          <div className="mb-8 flex items-center gap-3">
            <PieChart className="h-8 w-8 text-violet-600" />

            <h2 className="text-3xl font-bold text-slate-900">
              At-a-Glance Visual Dashboard
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-2 lg:p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-semibold text-slate-900">
                Target Segment Priority Score
              </h3>

              <div className="space-y-5">
                {priorityData.map((item) => (
                  <div key={item.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-700">{item.name}</span>

                      <span className="font-semibold text-slate-900">
                        {item.value}%
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-2 lg:p-8 shadow-sm">
              <h3 className="mb-8 text-xl font-semibold text-slate-900">
                Feedstock Mix Distribution
              </h3>

              <div className="flex flex-col items-center gap-8 lg:flex-row">
                <div className="relative flex h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 items-center justify-center rounded-full bg-[conic-gradient(#06b6d4_0deg_122deg,#22c55e_122deg_216deg,#f59e0b_216deg_281deg,#8b5cf6_281deg_324deg,#f97316_324deg_360deg)]">
                  <div className="flex h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 items-center justify-center rounded-full bg-white shadow-md text-center">
                    <div>
                      <div className="text-3xl font-black text-slate-900">
                        100%
                      </div>

                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Feedstock
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  {feedstockData.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-4 w-4 rounded-full ${item.color}`}
                        />

                        <span className="text-slate-700">
                          {item.name}
                        </span>
                      </div>

                      <span className="font-semibold text-slate-900">
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUYER STRENGTH */}
        <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-2 lg:p-8 shadow-sm">
          <div className="mb-8 flex items-center gap-3">
            <CircleDollarSign className="h-7 w-7 text-emerald-600" />

            <h2 className="text-3xl font-bold text-slate-900">
              Buyer Types & Sales Channel Strength
            </h2>
          </div>

          <div className="space-y-6">
            {buyerStrength.map((item) => (
              <div key={item.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-700">{item.name}</span>

                  <span className="font-semibold text-slate-900">
                    {item.value}%
                  </span>
                </div>

                <div className="h-4 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TARGET MARKET TABLE */}
        <section className="mt-14">
          <div className="mb-8 flex items-center gap-3">
            <Database className="h-8 w-8 text-cyan-600" />

            <h2 className="text-3xl font-bold text-slate-900">
              Target Market Database
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-cyan-50">
                  <tr>
                    {[
                      "Segment",
                      "What They Need",
                      "Best Product",
                      "Priority",
                    ].map((item) => (
                      <th
                        key={item}
                        className="px-6 py-5 text-left text-sm font-semibold text-cyan-700"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {[
                    [
                      "Packaging converters",
                      "Consistent recycled material",
                      "rPET flakes",
                      "High",
                    ],
                    [
                      "FMCG brands",
                      "Traceable recycled content",
                      "Recycled resin",
                      "High",
                    ],
                    [
                      "Automotive suppliers",
                      "Engineered recycled resin",
                      "Compounded pellets",
                      "Medium-High",
                    ],
                    [
                      "Construction makers",
                      "Durable low-cost resin",
                      "HDPE/PP regrind",
                      "Medium",
                    ],
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-slate-200 text-slate-700"
                    >
                      {row.map((cell) => (
                        <td key={cell} className="px-6 py-5 text-sm">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* POSITIONING + RISKS */}
        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-2 lg:p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <ArrowRight className="h-7 w-7 text-cyan-600" />

              <h2 className="text-2xl font-bold text-slate-900">
                How To Position The Plant
              </h2>
            </div>

            <ul className="space-y-5 text-slate-700">
              {[
                "Start with reliable scrap streams.",
                "Sell quality instead of only material.",
                "Use multiple sales channels.",
                "Build trust with documentation and traceability.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-600" />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-2 lg:p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <AlertTriangle className="h-7 w-7 text-amber-600" />

              <h2 className="text-2xl font-bold text-slate-900">
                Risks That Can Slow Growth
              </h2>
            </div>

            <ul className="space-y-5 text-slate-700">
              {[
                "Contamination increases processing costs.",
                "Virgin resin pricing affects recycled demand.",
                "Collection gaps reduce plant utilization.",
                "Different buyers require different quality grades.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <AlertTriangle className="mt-1 h-5 w-5 text-amber-600" />

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-800">
              The best protection is steady sourcing, flexible product grades,
              and loyal repeat buyers.
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="mt-14 rounded-3xl border border-emerald-200 bg-emerald-50 p-2 lg:p-8 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Case Study: Turning Scrap Into Stable Sales
              </h2>

              <p className="mt-3 max-w-3xl text-slate-700">
                A mid-sized plastic recycler shifted from unstable open-market
                selling to a cleaner strategy focused on PET bottle waste, HDPE
                rigid scrap, and controlled buyer channels.
              </p>
            </div>

            <span className="rounded-full border border-emerald-300 bg-white px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
              Case Study
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Feedstock mix", "3 core streams"],
              ["Buyer channels", "3 sales routes"],
              ["Waste loss", "Lower over time"],
              ["Outcome", "More stable orders"],
            ].map((item) => (
              <div
                key={item[0]}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-sm text-slate-500">
                  {item[0]}
                </div>

                <div className="mt-2 text-2xl font-black text-slate-900">
                  {item[1]}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 leading-8 text-slate-700">
            The key lesson was simple: a recycling plant grows faster when it
            stops behaving like a waste collector and starts behaving like a
            supply partner.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-2 lg:p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">
            Conclusion
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            The plastic recycling market rewards plants that know exactly who
            they are serving. Packaging, FMCG, automotive, and construction are
            the strongest practical markets to build around.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            A well-positioned recycling plant does more than process waste. It
            creates a dependable material supply chain and turns discarded
            plastic into a commercial asset.
          </p>
        </section>

        {/* STICKY FORM LAYOUT */}
        <div className="mt-16 lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            {/* All main content is above */}
          </div>

          {/* Desktop Sticky Sidebar */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 self-start z-30">
              <StickyContactForm />
            </div>
          </aside>
        </div>

        {/* Mobile Form */}
        <section className="mt-12 block lg:hidden">
          <StickyContactForm />
        </section>
      </article>
    </>
  );
};

export default PlasticMarketAnalysis;