import Seo from "@/components/Seo";
import StickyContactForm from "@/components/StickyContactForm";
import { motion, Variants } from "framer-motion";

// Standard fade-in variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Container variant for staggering child animations
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function EWasteMarketAnalysisBlog() {
  return (
    <div
      style={{
        overflowX: "clip",
        fontFamily: "'Inter', sans-serif",
        background: `
          radial-gradient(circle at top left, rgba(96,165,250,.08), transparent 35%),
          radial-gradient(circle at top right, rgba(52,211,153,.08), transparent 35%),
          linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)
        `,
        color: "#334155",
        lineHeight: "1.75",
      }}
    >
      <Seo
        title="How We Help Clients Create a Detailed Project Report (DPR) for E-Waste Recycling Plants"
        description="Learn how our experts help businesses prepare a Detailed Project Report (DPR) for e-waste recycling plants. Explore project planning, financial projections, compliance, feasibility analysis, and documentation for successful approvals."
        keywords={[
          "E-Waste DPR",
          "Detailed Project Report",
          "E-Waste Recycling Plant DPR",
          "E-Waste Project Report",
          "E-Waste Business Plan",
          "E-Waste Recycling Business",
          "Project Feasibility Report",
          "Financial Projections",
          "E-Waste Plant Setup",
          "CPCB Compliance",
          "E-Waste Registration",
          "Environmental Compliance",
          "Business Project Report",
          "Recycling Plant Documentation",
          "E-Waste Consulting",
          "How to prepare an E-Waste DPR?",
          "What is included in an e-waste project report?",
          "How to start an e-waste recycling plant?",
          "Documents required for an e-waste DPR",
          "Why is a DPR important for an e-waste recycling plant?",
          "E-waste recycling project feasibility report",
          "Best practices for preparing an e-waste DPR",
          "E-waste business planning guide",
          "E-waste project report format",
          "How to get approval for an e-waste recycling plant?",
        ]}
        url="https://eprnexuss.com/blog/e-waste-dpr"
        type="article"
      />
      <div className="w-full max-w-8xl mt-[84px] mx-auto px-4 pt-[32px] pb-[60px]">


        {/* Main flex layout: content + sticky sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div>
                    {/* Hero */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative overflow-hidden rounded-[32px] px-5 sm:px-[42px] py-12 sm:py-[84px] mb-[26px] border border-slate-200/80"
          style={{
            background: `
              linear-gradient(135deg, rgba(219,234,254,0.5), rgba(209,250,229,0.4)),
              linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)
            `,
            boxShadow: "0 20px 40px rgba(148,163,184,0.12)",
          }}
        >
          <span
            className="absolute rounded-full"
            style={{
              width: 280,
              height: 280,
              right: -90,
              top: -90,
              background: "rgba(96,165,250,0.06)",
            }}
          />
          <span
            className="absolute rounded-full"
            style={{
              width: 180,
              height: 180,
              left: -60,
              bottom: -60,
              background: "rgba(52,211,153,0.06)",
            }}
          />
          <div className="relative z-10 w-full max-w-[960px] mx-auto text-center break-words">
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-2 rounded-full text-[13px] font-bold tracking-[0.3px] mb-[18px] text-slate-700 max-w-full shadow-sm"
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
              }}
            >
              E-Waste Recycling Plant | Market Strategy &amp; Segment Planning
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-extrabold mb-[18px] tracking-[-0.03em] text-slate-900"
              style={{ fontSize: "clamp(34px, 4.8vw, 64px)", lineHeight: 1.04 }}
            >
              Market Analysis and Target Market Segments in E-Waste Recycling
              Plant
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mx-auto"
              style={{
                fontSize: "clamp(16px, 1.55vw, 20px)",
                color: "#475569",
                maxWidth: 900,
              }}
            >
              <strong>
                Know the market, and the market starts working for you.
              </strong>
              <br />
              <br />A strong e-waste recycling plant is not built only on
              machines and approvals. It also needs a clear understanding of who
              will supply the waste, who will buy the output, and which market
              segments give the best opportunity for growth.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-[22px] text-[16px] sm:text-[18px] font-bold text-slate-800"
            >
              A recycling business becomes stronger when it knows where the
              material comes from and where the value goes.
            </motion.div>
          </div>
        </motion.section>
          {/* Main content */}
          <div className="flex-1 min-w-0 w-full">
            {/* 2-col intro grid */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-[22px] my-[22px]">
              {/* Why market analysis matters */}
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="rounded-[24px] p-4 sm:p-[30px] border border-slate-200 bg-white mb-[22px]"
                style={{
                  boxShadow: "0 12px 30px rgba(148,163,184,0.08)",
                }}
              >
                <h2
                  className="font-extrabold mb-[14px] text-slate-900"
                  style={{
                    fontSize: "clamp(26px, 2.8vw, 40px)",
                    lineHeight: 1.12,
                  }}
                >
                  Why market analysis matters
                </h2>
                <p className="text-slate-600 text-[16px] mb-[14px]">
                  Market analysis gives the client a real picture of the
                  business environment. It helps answer important questions such
                  as: Is there enough material available? Who are the major
                  buyers? Which segment offers the best value? How fast can the
                  business grow?
                </p>
                <p className="text-slate-600 text-[16px] mb-[14px]">
                  In an e-waste recycling plant, the business does not depend on
                  one single customer type. It depends on a mix of scrap
                  generators, bulk suppliers, aggregators, traders,
                  manufacturers, and downstream buyers.
                </p>
                <p className="text-slate-600 text-[16px] mb-[14px]">
                  When these segments are understood properly, the client can
                  plan capacity, collection, sales, pricing, and expansion with
                  much more confidence.
                </p>
                <div
                  className="border-l-[6px] border-emerald-500 rounded-[18px] px-5 py-[18px] my-[18px]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(219,234,254,0.6), rgba(209,250,229,0.5))",
                  }}
                >
                  <strong className="text-slate-900">Simple idea:</strong>{" "}
                  <span className="text-slate-700">
                    a good market study reduces guesswork and helps the client
                    build a recycling plant that matches real demand.
                  </span>
                </div>
                <div className="flex flex-wrap gap-[8px] mt-[14px]">
                  <span className="px-[13px] py-2 rounded-full text-[13px] font-bold text-blue-700 bg-blue-50 border border-blue-200 shadow-sm">
                    Supply mapping
                  </span>
                  <span className="px-[13px] py-2 rounded-full text-[13px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 shadow-sm">
                    Buyer analysis
                  </span>
                  <span className="px-[13px] py-2 rounded-full text-[13px] font-bold text-amber-700 bg-amber-50 border border-amber-200 shadow-sm">
                    Pricing logic
                  </span>
                </div>
              </motion.section>

              {/* How we help */}
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="rounded-[24px] p-4 sm:p-[30px] border border-slate-200 bg-white mb-[22px]"
                style={{
                  boxShadow: "0 12px 30px rgba(148,163,184,0.08)",
                }}
              >
                <h2
                  className="font-extrabold mb-[14px] text-slate-900"
                  style={{
                    fontSize: "clamp(26px, 2.8vw, 40px)",
                    lineHeight: 1.12,
                  }}
                >
                  How we help the client
                </h2>
                <p className="text-slate-600 text-[16px] mb-[14px]">
                  We help clients understand the full market picture before the
                  project moves into execution. This includes studying waste
                  sources, demand patterns, buyer categories, and business
                  opportunities.
                </p>
                <p className="text-slate-600 text-[16px] mb-[14px]">
                  Our support also includes segment identification, market size
                  logic, material flow understanding, and a practical view of
                  how the plant can earn money in the real market.
                </p>
                <div
                  className="border-l-[6px] border-emerald-500 rounded-[18px] px-5 py-[18px] my-[18px]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(219,234,254,0.6), rgba(209,250,229,0.5))",
                  }}
                >
                  <strong className="text-slate-900">Client benefit:</strong>{" "}
                  <span className="text-slate-700">
                    when the market is clearly studied, the business model
                    becomes more realistic and more stable.
                  </span>
                </div>
              </motion.section>
            </div>

            {/* Market journey steps */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="rounded-[24px] p-4 sm:p-[30px] border border-slate-200 bg-white mb-[22px]"
              style={{
                boxShadow: "0 12px 30px rgba(148,163,184,0.08)",
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-slate-900"
                style={{
                  fontSize: "clamp(26px, 2.8vw, 40px)",
                  lineHeight: 1.12,
                }}
              >
                The market journey in simple steps
              </h2>
              <p className="text-slate-600 text-[16px] mb-[14px]">
                Clients understand the market better when the process is shown
                step by step.
              </p>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] mt-[18px]"
              >
                {[
                  {
                    num: 1,
                    title: "Study waste sources",
                    text: "We identify where e-waste comes from, how often it appears, and how stable the supply can be.",
                  },
                  {
                    num: 2,
                    title: "Map target buyers",
                    text: "We study who will buy the recovered material and which industries are active in that space.",
                  },
                  {
                    num: 3,
                    title: "Check value segments",
                    text: "We separate high-value segments from low-value ones so the client knows where the best opportunity lies.",
                  },
                  {
                    num: 4,
                    title: "Plan the business model",
                    text: "We connect market demand, plant capacity, and product sales into one practical plan.",
                  },
                ].map(({ num, title, text }) => (
                  <motion.div
                    key={num}
                    variants={fadeInUp}
                    className="border border-slate-100 rounded-[20px] p-[18px] sm:min-h-[156px] bg-slate-50/60 shadow-sm"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-slate-900 mb-3"
                      style={{
                        background:
                          "linear-gradient(135deg, #bfdbfe, #a7f3d0)",
                        boxShadow: "0 4px 10px rgba(191,219,254,0.4)",
                      }}
                    >
                      {num}
                    </div>
                    <h4 className="text-slate-900 text-[17px] font-bold mb-2">
                      {title}
                    </h4>
                    <p className="text-slate-600 text-[14px] m-0">{text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Target segments table */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="rounded-[24px] p-4 sm:p-[30px] border border-slate-200 bg-white mb-[22px]"
              style={{
                boxShadow: "0 12px 30px rgba(148,163,184,0.08)",
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-slate-900"
                style={{
                  fontSize: "clamp(26px, 2.8vw, 40px)",
                  lineHeight: 1.12,
                }}
              >
                Target market segments in e-waste recycling
              </h2>
              <p className="text-slate-600 text-[16px] mb-[14px]">
                A recycling plant usually serves more than one market segment.
                The real strength of the business comes from identifying the
                right group and serving it well.
              </p>
              <div className="overflow-x-auto rounded-[20px] border border-slate-200 mt-[18px] shadow-sm">
                <table
                  className="w-full border-collapse"
                  style={{ minWidth: 780, background: "#ffffff" }}
                >
                  <thead>
                    <tr>
                      {[
                        "Target segment",
                        "What they provide or buy",
                        "Why they matter",
                      ].map((h) => (
                        <th
                          key={h}
                          className="text-slate-800 text-left px-4 py-[15px] text-[14px] font-bold border-b border-slate-200 bg-slate-50"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Bulk waste generators",
                        "Office, institutional, and corporate e-waste",
                        "Stable source of regular scrap supply",
                      ],
                      [
                        "Aggregators",
                        "Collected mixed scrap from local networks",
                        "Useful for building input volume quickly",
                      ],
                      [
                        "Traders / dealers",
                        "Buy and sell scrap fractions",
                        "Help move material faster in the market",
                      ],
                      [
                        "Downstream recyclers",
                        "Buy recovered metals and usable fractions",
                        "Important for product sales and revenue",
                      ],
                      [
                        "Manufacturing buyers",
                        "May use recycled raw material",
                        "Create better value for clean output",
                      ],
                      [
                        "Institutional clients",
                        "Need compliant disposal support",
                        "Support long-term service-based business",
                      ],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="border-t border-slate-100 px-4 py-[14px] text-[14px] text-slate-700 align-top"
                          >
                            {j === 0 ? (
                              <strong className="text-slate-900">
                                {cell}
                              </strong>
                            ) : (
                              cell
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* Bar graph + DB tracker */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-[22px] mb-[22px]">
              {/* Bar graph */}
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="rounded-[24px] p-5 sm:p-[28px] border border-slate-200 bg-white"
                style={{
                  boxShadow: "0 12px 30px rgba(148,163,184,0.08)",
                }}
              >
                <h2 className="text-slate-900 font-extrabold text-[24px] mb-2">
                  Bar graph: market opportunity by segment
                </h2>
                <p className="text-slate-600 text-[15px] mb-[18px]">
                  This chart gives a simple view of where the strongest
                  opportunity often sits in the e-waste business.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      label: "Bulk waste generators",
                      width: "94%",
                      type: "blue",
                    },
                    {
                      label: "Downstream recyclers",
                      width: "88%",
                      type: "green",
                    },
                    { label: "Aggregators", width: "80%", type: "default" },
                    { label: "Traders / dealers", width: "72%", type: "amber" },
                    {
                      label: "Manufacturing buyers",
                      width: "66%",
                      type: "green",
                    },
                  ].map(({ label, width, type }) => (
                    <div
                      key={label}
                      className="grid items-center gap-5"
                      style={{
                        gridTemplateColumns:
                          "minmax(0,1.2fr) minmax(0,2fr) 54px",
                      }}
                    >
                      <div className="text-slate-700 text-[13px] font-semibold">
                        {label}
                      </div>
                      <div className="h-4 rounded-full overflow-hidden bg-slate-100 shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-full rounded-full"
                          style={{
                            background:
                              type === "blue"
                                ? "linear-gradient(90deg, #3b82f6, #60a5fa)"
                                : type === "green"
                                ? "linear-gradient(90deg, #10b981, #34d399)"
                                : type === "amber"
                                ? "linear-gradient(90deg, #f59e0b, #fbbf24)"
                                : "linear-gradient(90deg, #64748b, #94a3b8)",
                          }}
                        />
                      </div>
                      <div className="text-right text-[14px] font-extrabold text-slate-900">
                        {width}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[13px] text-slate-500 mt-[14px]">
                  Higher values show stronger opportunity, but the final
                  decision should always depend on plant size, location, and
                  material quality.
                </p>
              </motion.section>

              {/* Segment readiness tracker */}
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="rounded-[24px] p-4 sm:p-[28px] border border-slate-200 bg-white"
                style={{
                  boxShadow: "0 12px 30px rgba(148,163,184,0.08)",
                }}
              >
                <h2 className="text-slate-900 font-extrabold text-[24px] mb-2">
                  Database view: segment readiness tracker
                </h2>
                <p className="text-slate-600 text-[15px] mb-[18px]">
                  A simple database helps the client see which segment is ready
                  to support the project and which one needs more work.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] mt-[18px]">
                  {[
                    {
                      title: "Supply availability",
                      text: "How often material comes in and how reliable the source is.",
                    },
                    {
                      title: "Buyer demand",
                      text: "How strong the market is for recovered output and recycled fractions.",
                    },
                    {
                      title: "Price stability",
                      text: "Whether the segment gives steady pricing or moves sharply with demand.",
                    },
                    {
                      title: "Compliance fit",
                      text: "Whether the segment works smoothly with the plant's approval and operating model.",
                    },
                  ].map(({ title, text }) => (
                    <div
                      key={title}
                      className="border border-slate-100 rounded-[18px] p-[18px] bg-slate-50/60 shadow-sm"
                    >
                      <h4 className="text-slate-900 text-[16px] font-bold mb-2">
                        {title}
                      </h4>
                      <p className="text-slate-600 text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="border-l-[6px] border-emerald-500 rounded-[18px] px-5 py-[18px] mt-[18px]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(219,234,254,0.6), rgba(209,250,229,0.5))",
                  }}
                >
                  <strong className="text-slate-900">Why this helps:</strong>{" "}
                  <span className="text-slate-700">
                    when the market data is organized, the client can choose the
                    right segment with more certainty.
                  </span>
                </div>
              </motion.section>
            </div>

            {/* How we explain target market */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="rounded-[24px] p-4 sm:p-[30px] border border-slate-200 bg-white mb-[22px]"
              style={{
                boxShadow: "0 12px 30px rgba(148,163,184,0.08)",
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-slate-900"
                style={{
                  fontSize: "clamp(26px, 2.8vw, 40px)",
                  lineHeight: 1.12,
                }}
              >
                How we explain the target market to clients
              </h2>
              <p className="text-slate-600 text-[16px] mb-[14px]">
                Many clients want the business to grow quickly, but growth works
                better when the right segment is chosen first.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "Input side",
                    text: "We explain where the waste will come from, how regular it can be, and what kind of volume the plant can expect.",
                  },
                  {
                    title: "Output side",
                    text: "We identify who will buy the recovered material and which product fractions are most useful in the market.",
                  },
                  {
                    title: "Commercial side",
                    text: "We connect supply, processing, and sales so the client can see the full business cycle in one clear picture.",
                  },
                  {
                    title: "Growth side",
                    text: "We show where the plant can expand later once the first market segment starts performing well.",
                  },
                ].map(({ title, text }) => (
                  <div
                    key={title}
                    className="border border-slate-100 rounded-[18px] p-[18px] bg-slate-50/60 shadow-sm"
                  >
                    <h4 className="text-slate-900 text-[16px] font-bold mb-[6px]">
                      {title}
                    </h4>
                    <p className="text-slate-600 text-[14px] m-0">{text}</p>
                  </div>
                ))}
              </div>
              <div
                className="border-l-[6px] border-emerald-500 rounded-[18px] px-5 py-[18px] my-[18px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(219,234,254,0.6), rgba(209,250,229,0.5))",
                }}
              >
                <strong className="text-slate-900">
                  Easy client explanation:
                </strong>{" "}
                <span className="text-slate-700">
                  the right market segment is the one that gives steady
                  material, healthy margins, and repeat business.
                </span>
              </div>
            </motion.section>

            {/* Market summary table */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="rounded-[24px] p-4 sm:p-[30px] border border-slate-200 bg-white mb-[22px]"
              style={{
                boxShadow: "0 12px 30px rgba(148,163,184,0.08)",
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-slate-900"
                style={{
                  fontSize: "clamp(26px, 2.8vw, 40px)",
                  lineHeight: 1.12,
                }}
              >
                Market summary database
              </h2>
              <p className="text-slate-600 text-[16px] mb-[14px]">
                This quick project database gives a snapshot of the market
                position.
              </p>
              <div className="overflow-x-auto rounded-[20px] border border-slate-200 mt-[18px] shadow-sm">
                <table
                  className="w-full border-collapse"
                  style={{ minWidth: 780, background: "#ffffff" }}
                >
                  <thead>
                    <tr>
                      {[
                        "Market factor",
                        "Observed strength",
                        "Meaning for the client",
                      ].map((h) => (
                        <th
                          key={h}
                          className="text-slate-800 text-left px-4 py-[15px] text-[14px] font-bold border-b border-slate-200 bg-slate-50"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Waste generation",
                        "High",
                        "Good supply potential for the plant",
                      ],
                      [
                        "Buyer activity",
                        "Medium to High",
                        "Sales can be built with the right channel",
                      ],
                      [
                        "Value of recovered products",
                        "Strong",
                        "Good scope for revenue from sorting and processing",
                      ],
                      [
                        "Competition",
                        "Moderate",
                        "Opportunity exists with a smarter plan",
                      ],
                      [
                        "Business expansion",
                        "Promising",
                        "Plant can grow into a bigger market later",
                      ],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="border-t border-slate-100 px-4 py-[14px] text-[14px] text-slate-700 align-top"
                          >
                            {j === 0 ? (
                              <strong className="text-slate-900">
                                {cell}
                              </strong>
                            ) : (
                              cell
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* Case study */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="rounded-[24px] p-4 sm:p-[30px] border mb-[22px] bg-white"
              style={{
                borderColor: "rgba(245,158,11,.35)",
                background:
                  "linear-gradient(180deg, rgba(254,243,199,0.4), #ffffff 120px)",
                boxShadow: "0 12px 30px rgba(245,158,11,0.05)",
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-slate-900"
                style={{
                  fontSize: "clamp(26px, 2.8vw, 40px)",
                  lineHeight: 1.12,
                }}
              >
                Case study: finding the right market segment for a new plant
              </h2>
              <p className="text-slate-700 text-[16px] mb-[14px]">
                A new client wanted to enter the e-waste recycling business but
                was unsure whether to focus on scrap collection, product
                recovery, or trading recovered fractions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px] mt-[18px]">
                {[
                  {
                    title: "The challenge",
                    text: "The client had a strong project idea but no clear target market. Without segment planning, the business risked slow sales and weak material flow.",
                  },
                  {
                    title: "The solution",
                    text: "We studied supply sources, buyer demand, material quality, and pricing patterns. Then we identified the segments with the best practical fit.",
                  },
                  {
                    title: "The result",
                    text: "The client moved forward with a clearer business model, stronger confidence, and a plan that matched real market conditions instead of assumptions.",
                  },
                ].map(({ title, text }) => (
                  <div
                    key={title}
                    className="rounded-[18px] p-[18px] border border-slate-100 bg-white/80 shadow-sm"
                  >
                    <h4 className="text-slate-900 text-[16px] font-bold mb-2">
                      {title}
                    </h4>
                    <p className="text-slate-600 text-[14px] m-0">{text}</p>
                  </div>
                ))}
              </div>
              <div
                className="border-l-[6px] border-emerald-500 rounded-[18px] px-5 py-[18px] mt-[18px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(219,234,254,0.6), rgba(209,250,229,0.5))",
                }}
              >
                <strong className="text-slate-900">
                  Lesson from the case:
                </strong>{" "}
                <span className="text-slate-700">
                  market analysis is not just research. It is a decision-making
                  tool that can shape the whole business.
                </span>
              </div>
            </motion.section>

            {/* Additional topics */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="rounded-[24px] p-4 sm:p-[30px] border border-slate-200 bg-white mb-[22px]"
              style={{
                boxShadow: "0 12px 30px rgba(148,163,184,0.08)",
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-slate-900"
                style={{
                  fontSize: "clamp(26px, 2.8vw, 40px)",
                  lineHeight: 1.12,
                }}
              >
                Additional topics that make the market study more useful
              </h2>
              <p className="text-slate-600 text-[16px] mb-[14px]">
                To make the blog more complete for clients, it helps to explain
                a few practical points beyond the basic segment list.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px]">
                <div>
                  <h3 className="text-slate-900 text-[22px] font-bold mt-[18px] mb-[10px]">
                    Why location matters
                  </h3>
                  <p className="text-slate-600 text-[16px] mb-[14px]">
                    The location of the plant affects collection cost, transport
                    speed, buyer access, and the overall business reach.
                  </p>
                  <h3 className="text-slate-900 text-[22px] font-bold mt-[18px] mb-[10px]">
                    Why product quality matters
                  </h3>
                  <p className="text-slate-600 text-[16px] mb-[14px]">
                    The cleaner and better-separated the output is, the easier
                    it becomes to sell and the better the price can be.
                  </p>
                </div>
                <div>
                  <h3 className="text-slate-900 text-[22px] font-bold mt-[18px] mb-[10px]">
                    Why competition matters
                  </h3>
                  <p className="text-slate-600 text-[16px] mb-[14px]">
                    A good market analysis shows not just who is present, but
                    where the opportunity is still open.
                  </p>
                  <h3 className="text-slate-900 text-[22px] font-bold mt-[18px] mb-[10px]">
                    Why long-term demand matters
                  </h3>
                  <p className="text-slate-600 text-[16px] mb-[14px]">
                    A good segment is not just active today. It should remain
                    useful for the future of the plant as well.
                  </p>
                </div>
              </div>
              <div
                className="border-l-[6px] border-emerald-500 rounded-[18px] px-5 py-[18px] my-[18px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(219,234,254,0.6), rgba(209,250,229,0.5))",
                }}
              >
                <strong className="text-slate-900">
                  Client-friendly point:
                </strong>{" "}
                <span className="text-slate-700">
                  the best market strategy is the one that connects material
                  supply, buyer demand, and plant growth in one plan.
                </span>
              </div>
            </motion.section>

            {/* FAQ */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="rounded-[24px] p-4 sm:p-[30px] border border-slate-200 bg-white mb-[22px]"
              style={{
                boxShadow: "0 12px 30px rgba(148,163,184,0.08)",
              }}
            >
              <h2
                className="font-extrabold mb-[14px] text-slate-900"
                style={{
                  fontSize: "clamp(26px, 2.8vw, 40px)",
                  lineHeight: 1.12,
                }}
              >
                Frequently asked questions
              </h2>
              <div className="flex flex-col gap-3 mt-[14px]">
                {[
                  {
                    q: "Why does a recycling plant need market analysis?",
                    a: "Because the plant must know where material will come from and who will buy the recovered output. That is what makes the business practical.",
                  },
                  {
                    q: "What is the most important target segment?",
                    a: "It depends on the project. For some plants, bulk waste generators matter most. For others, downstream buyers or aggregators are more useful.",
                  },
                  {
                    q: "Can the target market change later?",
                    a: "Yes. As the plant grows, the market focus can expand. A good plan keeps room for future changes.",
                  },
                ].map(({ q, a }) => (
                  <div
                    key={q}
                    className="border border-slate-100 rounded-[18px] px-5 py-[18px] bg-slate-50/60 shadow-sm"
                  >
                    <h4 className="text-slate-900 text-[16px] font-bold mb-[6px]">
                      {q}
                    </h4>
                    <p className="text-slate-600 text-[14px] m-0">{a}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Closing */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="text-center rounded-[32px] px-4 sm:px-[30px] py-10 sm:py-[56px] mt-6 border border-slate-200"
              style={{
                background: `
                  radial-gradient(circle at top, rgba(96,165,250,.10), transparent 40%),
                  linear-gradient(135deg, #ffffff 0%, #f1f5f9 60%, #e2e8f0 100%)
                `,
                boxShadow: "0 20px 40px rgba(148,163,184,0.1)",
              }}
            >
              <h2
                className="text-slate-900 font-extrabold mb-[10px]"
                style={{
                  fontSize: "clamp(26px, 2.8vw, 40px)",
                  lineHeight: 1.12,
                }}
              >
                Final Thoughts
              </h2>
              <p className="max-w-[920px] mx-auto mb-3 text-[16px] text-slate-700">
                Market analysis gives the e-waste recycling plant a clear
                direction. When the client understands supply, demand, and
                target segments, the project becomes smarter, stronger, and
                easier to scale.
              </p>
              <p className="max-w-[920px] mx-auto mb-3 text-[16px] text-slate-700">
                The right market choice does not just support sales. It supports
                the full journey of the plant from setup to long-term growth.
              </p>
              <div className="text-[26px] font-extrabold mt-[18px] text-slate-900 tracking-tight">
                "The right market segment turns planning into profit."
              </div>
            </motion.section>
          </div>
          {/* end main content */}
          </div>

          {/* Sticky Sidebar */}
          <aside
            className="hidden lg:block w-[280px] flex-shrink-0 self-start"
            style={{ position: "sticky", top: "5.5rem" }}
          >
            <StickyContactForm />
          </aside>
        </div>
        {/* end flex layout */}
      </div>
    </div>
  );
}