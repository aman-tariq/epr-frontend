import StickyContactForm from "@/components/StickyContactForm";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function EPRLithiumCredits() {
  return (
    <>
      {/* Head Metadata / SEO Support */}
      {/* 
        If you are using Next.js, you can wrap these tags in <Head> from 'next/head'.
        If you are using Gatsby or Vite + React, you can use React Helmet.
      */}
      <title>
        EPR Lithium Credits: Strategic Market Intelligence & Growth
        Opportunities
      </title>
      <meta
        name="description"
        content="EPR Lithium Credits: Strategic Market Intelligence & Growth Opportunities — a premium, SEO-ready pillar blog covering market drivers, business models, demand-supply dynamics, workflow, risks, FAQs, and visual analysis for producers, recyclers, and compliance teams."
      />
      <meta name="robots" content="index, follow" />

      {/* JSON-LD Schema Integration */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "EPR Lithium Credits: Strategic Market Intelligence & Growth Opportunities",
            description:
              "A premium pillar blog on EPR lithium credits with market outlook, compliance workflow, business opportunities, risks, FAQs, and visual SEO-ready sections.",
            author: {
              "@type": "Organization",
              name: "EPR Nexuss",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are EPR lithium credits?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EPR lithium credits represent proof-based compliance value created when battery recovery, traceability, and documentation can be verified against an obligation.",
                },
              },
              {
                "@type": "Question",
                name: "Why is the lithium credit market growing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Growth is driven by rising battery use, stronger collection needs, improved traceability systems, and increasing demand for accountable compliance support.",
                },
              },
              {
                "@type": "Question",
                name: "Who can benefit from this market?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Producers, recyclers, PROs, logistics teams, compliance consultants, and software providers can all build value through the EPR lithium ecosystem.",
                },
              },
            ],
          }),
        }}
      />

      {/* Core Layout Wrap with Ambient Radial Gradients */}
      <div
        className="min-h-screen font-sans text-[#13213c] leading-relaxed antialiased selection:bg-purple-100 selection:text-purple-900"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(124, 58, 237, 0.18), transparent 26%),
            radial-gradient(circle at top right, rgba(6, 182, 212, 0.14), transparent 22%),
            radial-gradient(circle at bottom left, rgba(34, 197, 94, 0.1), transparent 24%),
            radial-gradient(circle at bottom right, rgba(245, 158, 11, 0.1), transparent 22%),
            linear-gradient(180deg, #f7f1ff 0%, #f7fbff 100%)
          `,
        }}
      >
        <div className="max-w-8xl mt-[120px] mx-auto px-4.5 pt-7 pb-14 md:px-3.5 md:pt-4 md:pb-10">

          
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div>
              {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-5.5 animate-[fadeUp_0.8s_ease_both]"
          >
            <div className="relative overflow-hidden p-8 bg-gradient-to-b from-white/98 to-[#f8fbff]/95 border border-[#d8e4f2]/98 rounded-3xl shadow-[0_18px_48px_rgba(16,32,51,0.12)] p-8.5 text-center isolate">
              {/* Internal Accent Glow overlay */}
              <div className="absolute inset-3 rounded-[18px] bg-gradient-to-br from-[rgba(107,110,249,0.08)] via-[rgba(33,199,212,0.06)] to-[rgba(16,185,129,0.05)] z-[-1]" />

              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#5d6bff] font-extrabold mx-auto mb-3.5">
                Market Analysis • Business Opportunities • Compliance Value
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#163a66] leading-[1.03] max-w-[90%] mx-auto my-3.5">
                EPR Lithium Credits: Strategic Market Intelligence &amp; Growth
                Opportunities
              </h1>

              <div className="inline-block px-4 py-3 rounded-ece bg-gradient-to-br from-[rgba(93,107,255,0.16)] to-[rgba(33,199,212,0.12)] border border-[rgba(93,107,255,0.24)] font-black text-[#183b72] rounded-xl mb-4.5 mx-auto">
                Transform compliance pressure into a growth engine, revenue
                stream, and strategic advantage.
              </div>

              <p className="text-base text-[#3c5878] max-w-[68ch] mx-auto mb-5.5">
                EPR lithium credits are more than a compliance task. They sit
                inside a larger ecosystem of collection, recovery, traceability,
                and reporting where producers, recyclers, PROs, and technology
                providers can create durable value.
              </p>

              {/* Dynamic Pill Tags (Optimized with `w-fit` and `flex-wrap` preventing full-width layout) */}
              <div className="flex flex-wrap gap-2.5 mt-3 justify-center items-center">
                {[
                  "Producer Responsibility",
                  "Credit Trading Logic",
                  "Traceability Systems",
                  "Compliance Services",
                  "Circular Economy",
                ].map((chipText, index) => (
                  <span
                    key={index}
                    className="w-fit px-3 py-2 rounded-full bg-gradient-to-br from-[#f1f6ff] to-[#f9fdff] border border-[#dccff6] text-[#35516f] font-extrabold text-sm whitespace-nowrap"
                  >
                    {chipText}
                  </span>
                ))}
              </div>

              {/* Meta Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5.5">
                <div className="p-3.5 rounded-2xl bg-[#f7fbff] border border-[#dccff6] text-left">
                  <strong className="block text-[1.05rem] font-bold text-[#13213c] mb-1">
                    Market lens
                  </strong>
                  <span className="text-[#5a6786] text-[0.95rem]">
                    Understand where demand, recovery, and compliance value
                    intersect.
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#f7fbff] border border-[#dccff6] text-left">
                  <strong className="block text-[1.05rem] font-bold text-[#13213c] mb-1">
                    Business lens
                  </strong>
                  <span className="text-[#5a6786] text-[0.95rem]">
                    Identify revenue streams across collection, recycling, and
                    advisory.
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#f7fbff] border border-[#dccff6] text-left">
                  <strong className="block text-[1.05rem] font-bold text-[#13213c] mb-1">
                    Growth lens
                  </strong>
                  <span className="text-[#5a6786] text-[0.95rem]">
                    Build a scalable model around lithium credit generation.
                  </span>
                </div>
              </div>
            </div>
          </motion.section>
            <div className="container max-w-5xl">
              {/* Section: Lithium Credit Lifecycle */}
              <Reveal delay={0.05}>
                {" "}
                <section
                  className="mt-5.5 scroll-mt-5 p-6 md:p-4.5 bg-gradient-to-b from-white/98 to-[#f8fbff]/95 border border-[#d8e4f2]/98 rounded-3xl shadow-[0_18px_48px_rgba(16,32,51,0.12)] overflow-hidden relative"
                  id="credit-lifecycle"
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#163a66] tracking-tight mb-2.5">
                    Lithium Credit Lifecycle
                  </h2>
                  <p className="text-base text-[#5a6786] max-w-[92ch] mb-4.5">
                    This section replaces the old industry overview with a
                    sharper, more visual topic. It shows how a lithium credit
                    moves from collection to verification, then into credit
                    issuance and final reporting. The goal is to make the
                    compliance journey easy to understand at a glance.
                  </p>

                  {/* End to end flowchart visualization card */}
                  <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl shadow-[0_18px_48px_rgba(16,32,51,0.12)] p-[22px] mb-4.5">
                    <div className="flex items-center  gap-2.5 mb-2.5">
                      <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-[rgba(63,114,175,0.12)] to-[rgba(76,201,240,0.12)] border border-[#dccff6] text-lg">
                        🔄
                      </div>
                      <h3 className="text-[1.13rem] font-bold text-[#13213c]">
                        End-to-end credit flow
                      </h3>
                    </div>

                    <div
                      aria-label="Lithium credit lifecycle flow chart"
                      className="mt-4.5 p-8 rounded-[22px] bg-gradient-to-b from-white to-[#f8f4ff] border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)] overflow-auto"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 1240 240"
                        className="w-full h-auto min-w-[960px] block"
                      >
                        <defs>
                          <linearGradient
                            id="flowA"
                            x1="0"
                            x2="1"
                            y1="0"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#7c3aed" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                          <linearGradient
                            id="flowB"
                            x1="0"
                            x2="1"
                            y1="0"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#22c55e" />
                            <stop offset="100%" stopColor="#f59e0b" />
                          </linearGradient>
                        </defs>
                        <rect
                          fill="#f9f6ff"
                          height="188"
                          rx="28"
                          stroke="#dccff6"
                          width="1200"
                          x="20"
                          y="26"
                        />
                        <g
                          fontFamily="Inter, Arial, sans-serif"
                          fontSize="20"
                          fontWeight="800"
                          textAnchor="middle"
                        >
                          <rect
                            fill="url(#flowA)"
                            height="88"
                            rx="20"
                            width="150"
                            x="52"
                            y="72"
                          />
                          <text fill="#fff" x="127" y="106">
                            Collection
                          </text>
                          <text
                            fill="#eefbff"
                            fontSize="14"
                            fontWeight="700"
                            x="127"
                            y="132"
                          >
                            Battery return points
                          </text>
                          <path
                            d="M205 116h56"
                            stroke="#7c3aed"
                            strokeLinecap="round"
                            strokeWidth="6"
                          />
                          <polygon
                            fill="#7c3aed"
                            points="261,116 245,106 245,126"
                          />

                          <rect
                            fill="url(#flowB)"
                            height="88"
                            rx="20"
                            width="150"
                            x="275"
                            y="72"
                          />
                          <text fill="#fff" x="350" y="106">
                            Sorting
                          </text>
                          <text
                            fill="#fff7e6"
                            fontSize="14"
                            fontWeight="700"
                            x="350"
                            y="132"
                          >
                            Safe segregation
                          </text>
                          <path
                            d="M428 116h56"
                            stroke="#7c3aed"
                            strokeLinecap="round"
                            strokeWidth="6"
                          />
                          <polygon
                            fill="#7c3aed"
                            points="484,116 468,106 468,126"
                          />

                          <rect
                            fill="url(#flowA)"
                            height="88"
                            rx="20"
                            width="150"
                            x="498"
                            y="72"
                          />
                          <text fill="#fff" x="573" y="106">
                            Dismantling
                          </text>
                          <text
                            fill="#eefbff"
                            fontSize="14"
                            fontWeight="700"
                            x="573"
                            y="132"
                          >
                            Controlled processing
                          </text>
                          <path
                            d="M651 116h56"
                            stroke="#7c3aed"
                            strokeLinecap="round"
                            strokeWidth="6"
                          />
                          <polygon
                            fill="#7c3aed"
                            points="707,116 691,106 691,126"
                          />

                          <rect
                            fill="url(#flowB)"
                            height="88"
                            rx="20"
                            width="150"
                            x="721"
                            y="72"
                          />
                          <text fill="#fff" x="796" y="106">
                            Recovery
                          </text>
                          <text
                            fill="#fff7e6"
                            fontSize="14"
                            fontWeight="700"
                            x="796"
                            y="132"
                          >
                            Verified output
                          </text>
                          <path
                            d="M874 116h56"
                            stroke="#7c3aed"
                            strokeLinecap="round"
                            strokeWidth="6"
                          />
                          <polygon
                            fill="#7c3aed"
                            points="930,116 914,106 914,126"
                          />

                          <rect
                            fill="url(#flowA)"
                            height="88"
                            rx="20"
                            width="150"
                            x="944"
                            y="72"
                          />
                          <text fill="#fff" x="1019" y="106">
                            Verification
                          </text>
                          <text
                            fill="#eefbff"
                            fontSize="14"
                            fontWeight="700"
                            x="1019"
                            y="132"
                          >
                            Audit-ready proof
                          </text>
                          <path
                            d="M1097 116h56"
                            stroke="#7c3aed"
                            strokeLinecap="round"
                            strokeWidth="6"
                          />
                          <polygon
                            fill="#7c3aed"
                            points="1153,116 1137,106 1137,126"
                          />
                        </g>
                      </svg>
                      <div className="mt-2.5 text-[#5a6786] text-[0.94rem]">
                        Collection → Sorting → Dismantling → Recovery →
                        Verification → Credit issuance → Transfer → Reporting
                      </div>
                    </div>
                  </div>

                  {/* Info Cards Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-[rgba(63,114,175,0.12)] to-[rgba(76,201,240,0.12)] border border-[#dccff6] text-lg">
                          ⚡
                        </div>
                        <h3 className="text-[1.13rem] font-bold text-[#13213c]">
                          Why this flow matters
                        </h3>
                      </div>
                      <p className="text-[#5a6786]">
                        Clear flow improves trust, reduces delays, and makes
                        compliance work easier to audit and scale.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-[rgba(63,114,175,0.12)] to-[rgba(76,201,240,0.12)] border border-[#dccff6] text-lg">
                          🧾
                        </div>
                        <h3 className="text-[1.13rem] font-bold text-[#13213c]">
                          Where value builds
                        </h3>
                      </div>
                      <p className="text-[#5a6786]">
                        Each stage adds measurable value through documentation,
                        safe handling, and verified recovery output.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-[rgba(63,114,175,0.12)] to-[rgba(76,201,240,0.12)] border border-[#dccff6] text-lg">
                          📦
                        </div>
                        <h3 className="text-[1.13rem] font-bold text-[#13213c]">
                          How to present it
                        </h3>
                      </div>
                      <p className="text-[#5a6786]">
                        Use this section as a visual explanation for buyers,
                        compliance teams, and operational partners.
                      </p>
                    </div>
                  </div>
                </section>{" "}
              </Reveal>

              {/* Section: Market Lens & Growth Outlook */}
              <Reveal delay={0.05}>
                {" "}
                <section
                  className="mt-5.5 scroll-mt-5 p-6 md:p-4.5 bg-gradient-to-b from-white/98 to-[#f8fbff]/95 border border-[#d8e4f2]/98 rounded-3xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]"
                  id="market-lens"
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#163a66] tracking-tight mb-2.5">
                    Market Lens &amp; Growth Outlook
                  </h2>
                  <p className="text-base text-[#5a6786] max-w-[92ch] mb-4.5">
                    A strong market analysis should explain direction without
                    pretending certainty. Over the next several years, lithium
                    EPR is expected to expand as battery use rises, recovery
                    systems mature, and documentation standards become more
                    important. The strongest growth will likely come from
                    businesses that combine operations with data, reporting, and
                    traceability.
                  </p>

                  {/* Numerical Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5">
                    <div className="p-[18px] rounded-2xl bg-gradient-to-b from-white to-[#f7fbff] border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <strong className="block text-[1.8rem] font-black text-[#2b1b5a] mb-1">
                        1
                      </strong>
                      <span className="text-[#5a6786] text-[0.94rem]">
                        Battery use is expanding across mobility, consumer
                        devices, and energy storage.
                      </span>
                    </div>
                    <div className="p-[18px] rounded-2xl bg-gradient-to-b from-white to-[#f7fbff] border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <strong className="block text-[1.8rem] font-black text-[#2b1b5a] mb-1">
                        2
                      </strong>
                      <span className="text-[#5a6786] text-[0.94rem]">
                        Collection efficiency is becoming a competitive
                        advantage, not just a sustainability goal.
                      </span>
                    </div>
                    <div className="p-[18px] rounded-2xl bg-gradient-to-b from-white to-[#f7fbff] border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <strong className="block text-[1.8rem] font-black text-[#2b1b5a] mb-1">
                        3
                      </strong>
                      <span className="text-[#5a6786] text-[0.94rem]">
                        Traceability tools improve trust, audit readiness, and
                        reporting quality.
                      </span>
                    </div>
                    <div className="p-[18px] rounded-2xl bg-gradient-to-b from-white to-[#f7fbff] border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <strong className="block text-[1.8rem] font-black text-[#2b1b5a] mb-1">
                        4
                      </strong>
                      <span className="text-[#5a6786] text-[0.94rem]">
                        Compliance services can be bundled into higher-value
                        advisory offerings.
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-4.5 mt-4.5 items-start">
                    {/* Chart Visual Column */}
                    <div className="p-[18px] rounded-[20px] bg-white border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <div className="flex flex-wrap items-end justify-between gap-2 mb-3">
                        <strong className="text-[1.05rem] font-bold">
                          Growth Drivers vs Friction Points
                        </strong>
                        <span className="text-[0.9rem] text-[#5a6786]">
                          Illustrative market intelligence view
                        </span>
                      </div>

                      <svg
                        aria-label="Growth drivers chart"
                        height="auto"
                        viewBox="0 0 640 300"
                        width="100%"
                        className="w-full"
                      >
                        <rect
                          fill="#f8fbff"
                          height="300"
                          rx="20"
                          width="640"
                          x="0"
                          y="0"
                        />
                        <line
                          stroke="#cfe0f0"
                          strokeWidth="2"
                          x1="70"
                          x2="590"
                          y1="250"
                          y2="250"
                        />
                        <line
                          stroke="#cfe0f0"
                          strokeWidth="2"
                          x1="70"
                          x2="70"
                          y1="50"
                          y2="250"
                        />

                        <rect
                          fill="#21c7d4"
                          height="130"
                          rx="12"
                          width="56"
                          x="110"
                          y="120"
                        />
                        <rect
                          fill="#6b6ef9"
                          height="155"
                          rx="12"
                          width="56"
                          x="190"
                          y="95"
                        />
                        <rect
                          fill="#10b981"
                          height="115"
                          rx="12"
                          width="56"
                          x="270"
                          y="135"
                        />
                        <rect
                          fill="#ffb347"
                          height="85"
                          rx="12"
                          width="56"
                          x="350"
                          y="165"
                        />
                        <rect
                          fill="#3f72af"
                          height="140"
                          rx="12"
                          width="56"
                          x="430"
                          y="110"
                        />
                        <rect
                          fill="#ea5d7a"
                          height="100"
                          rx="12"
                          width="56"
                          x="510"
                          y="150"
                        />

                        <text fill="#5c6e86" fontSize="12" x="108" y="274">
                          Demand
                        </text>
                        <text fill="#5c6e86" fontSize="12" x="186" y="274">
                          Traceability
                        </text>
                        <text fill="#5c6e86" fontSize="12" x="262" y="274">
                          Recovery
                        </text>
                        <text fill="#5c6e86" fontSize="12" x="343" y="274">
                          Policy
                        </text>
                        <text fill="#5c6e86" fontSize="12" x="420" y="274">
                          Logistics
                        </text>
                        <text fill="#5c6e86" fontSize="12" x="502" y="274">
                          Fragmentation
                        </text>
                      </svg>

                      <div className="grid grid-cols-2 gap-2 mt-3 text-[0.92rem] text-[#40556f]">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-3 h-3 rounded-full"
                            style={{ background: "#21c7d4" }}
                          ></span>
                          Collection and demand growth
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className="w-3 h-3 rounded-full"
                            style={{ background: "#6b6ef9" }}
                          ></span>
                          Traceability and reporting
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className="w-3 h-3 rounded-full"
                            style={{ background: "#10b981" }}
                          ></span>
                          Recovery economics
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className="w-3 h-3 rounded-full"
                            style={{ background: "#ea5d7a" }}
                          ></span>
                          Operational fragmentation
                        </div>
                      </div>
                    </div>

                    {/* Execution Timeline Column */}
                    <div className="p-[18px] rounded-[20px] bg-white border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <div className="flex flex-wrap items-end justify-between gap-2 mb-3">
                        <strong className="text-[1.05rem] font-bold">
                          What future winners will control
                        </strong>
                        <span className="text-[0.9rem] text-[#5a6786]">
                          Execution stack
                        </span>
                      </div>

                      <div className="relative pl-7 before:content-[''] before:absolute before:left-[9px] before:top-0 before:bottom-0 before:width-[2px] before:w-0.5 before:bg-gradient-to-b before:from-violet-600 before:to-emerald-500">
                        <div className="relative pb-4.5 before:content-[''] before:absolute before:-left-7 before:top-1.5 before:w-4.5 before:h-4.5 before:rounded-full before:bg-white before:border-4 before:border-violet-600">
                          <strong className="block mb-1">
                            2026–2027: System consolidation
                          </strong>
                          <span className="text-sm text-[#5a6786]">
                            The market focuses on compliance mapping, partner
                            onboarding, and process standardization.
                          </span>
                        </div>
                        <div className="relative pb-4.5 before:content-[''] before:absolute before:-left-7 before:top-1.5 before:w-4.5 before:h-4.5 before:rounded-full before:bg-white before:border-4 before:border-violet-600">
                          <strong className="block mb-1">
                            2028–2030: Scale and digitization
                          </strong>
                          <span className="text-sm text-[#5a6786]">
                            Traceability platforms, automated reporting, and
                            workflow tools become more common.
                          </span>
                        </div>
                        <div className="relative pb-4.5 before:content-[''] before:absolute before:-left-7 before:top-1.5 before:w-4.5 before:h-4.5 before:rounded-full before:bg-white before:border-4 before:border-violet-600">
                          <strong className="block mb-1">
                            2031 onward: Mature market behavior
                          </strong>
                          <span className="text-sm text-[#5a6786]">
                            Credit economics, quality standards, and
                            multi-stakeholder coordination become the norm.
                          </span>
                        </div>
                      </div>

                      <div className="mt-4.5 p-4 border-l-5 border-emerald-500 bg-[#edfaf5] rounded-2xl text-[#1d5247] font-semibold">
                        Forecast takeaway:{" "}
                        <strong>
                          The biggest winners will own the operating system of
                          compliance, not just one step in the process.
                        </strong>
                      </div>
                    </div>
                  </div>
                </section>{" "}
              </Reveal>

              {/* Section: Demand vs Supply Analysis */}
              <Reveal delay={0.05}>
                {" "}
                <section
                  className="mt-5.5 scroll-mt-5 p-6 md:p-4.5 bg-gradient-to-b from-white/98 to-[#f8fbff]/95 border border-[#d8e4f2]/98 rounded-3xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]"
                  id="demand-supply"
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#163a66] tracking-tight mb-2.5">
                    Demand vs Supply Analysis
                  </h2>
                  <p className="text-base text-[#5a6786] max-w-[92ch] mb-4.5">
                    Demand and supply in EPR lithium credits rarely stay
                    balanced for long. Demand is driven by compliance
                    obligations and reporting deadlines, while supply depends on
                    collection efficiency, reverse logistics strength, and the
                    quality of documentation attached to recovered batteries.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 mt-4.5">
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-[rgba(63,114,175,0.12)] to-[rgba(76,201,240,0.12)] border border-[#dccff6] text-lg">
                          📈
                        </div>
                        <h3 className="text-[1.13rem] font-bold text-[#13213c]">
                          Demand side
                        </h3>
                      </div>
                      <p className="text-[#5a6786]">
                        Demand comes from producers and obligated entities that
                        need reliable, timely, and compliant credit fulfillment.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-[rgba(63,114,175,0.12)] to-[rgba(76,201,240,0.12)] border border-[#dccff6] text-lg">
                          🏭
                        </div>
                        <h3 className="text-[1.13rem] font-bold text-[#13213c]">
                          Supply side
                        </h3>
                      </div>
                      <p className="text-[#5a6786]">
                        Supply depends on recyclers, collection systems, and
                        verified recovery output backed by strong documentation.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4.5 p-4 border-l-5 border-emerald-500 bg-[#edfaf5] rounded-2xl text-[#1d5247] font-semibold">
                    Practical insight:{" "}
                    <strong>
                      When supply is fragmented and demand is urgent, premium
                      service providers can command stronger margins.
                    </strong>
                  </div>
                </section>{" "}
              </Reveal>

              {/* Section: Business Opportunities */}
              <Reveal delay={0.05}>
                {" "}
                <section
                  className="mt-5.5 scroll-mt-5 p-6 md:p-4.5 bg-gradient-to-b from-white/98 to-[#f8fbff]/95 border border-[#d8e4f2]/98 rounded-3xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]"
                  id="opportunities"
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#163a66] tracking-tight mb-2.5">
                    Business Opportunities
                  </h2>
                  <p className="text-base text-[#5a6786] max-w-[92ch] mb-4.5">
                    The most attractive opportunities are the ones that sit
                    between complexity and accountability. Businesses can
                    monetize that gap by offering complete solutions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
                    <div className="grid gap-3">
                      <div className="p-4 rounded-2xl bg-white border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                        <strong className="block mb-1 font-bold text-[#13213c]">
                          Compliance management services
                        </strong>
                        <span className="text-sm text-[#5a6786]">
                          Managed reporting, documentation, and responsibility
                          fulfillment for producers and importers.
                        </span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                        <strong className="block mb-1 font-bold text-[#13213c]">
                          Credit aggregation and brokerage
                        </strong>
                        <span className="text-sm text-[#5a6786]">
                          Organize verified credits and connect sellers to
                          buyers with transparent execution.
                        </span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                        <strong className="block mb-1 font-bold text-[#13213c]">
                          Reverse logistics solutions
                        </strong>
                        <span className="text-sm text-[#5a6786]">
                          Collection, transport, storage, and chain-of-custody
                          design.
                        </span>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      <div className="p-4 rounded-2xl bg-white border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                        <strong className="block mb-1 font-bold text-[#13213c]">
                          Recycling operations support
                        </strong>
                        <span className="text-sm text-[#5a6786]">
                          Partnering with recyclers to improve recovery
                          economics and documentation quality.
                        </span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                        <strong className="block mb-1 font-bold text-[#13213c]">
                          Technology platforms
                        </strong>
                        <span className="text-sm text-[#5a6786]">
                          Dashboards, traceability systems, and automated
                          compliance workflow products.
                        </span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                        <strong className="block mb-1 font-bold text-[#13213c]">
                          Advisory and audit services
                        </strong>
                        <span className="text-sm text-[#5a6786]">
                          Strategic planning, gap assessment, readiness checks,
                          and training.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4.5 p-4 border-l-5 border-emerald-500 bg-[#edfaf5] rounded-2xl text-[#1d5247] font-semibold">
                    Best practice:{" "}
                    <strong>
                      Bundle services instead of selling one isolated task. The
                      market pays more for certainty than for fragments.
                    </strong>
                  </div>
                </section>{" "}
              </Reveal>

              {/* Section: Credit Trading Process & Complete EPR Workflow */}
              <Reveal delay={0.05}>
                {" "}
                <section
                  className="mt-5.5 scroll-mt-5 p-6 md:p-4.5 bg-gradient-to-b from-white/98 to-[#f8fbff]/95 border border-[#d8e4f2]/98 rounded-3xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]"
                  id="workflow"
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#163a66] tracking-tight mb-2.5">
                    Credit Trading Process &amp; Complete EPR Workflow
                  </h2>
                  <p className="text-base text-[#5a6786] max-w-[92ch] mb-4.5">
                    This section is designed for featured snippets and
                    operational clarity. Keep it concise, practical, and easy to
                    scan.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div className="p-4 bg-white border border-[#dccff6] rounded-2xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <div className="w-8.5 h-8.5 rounded-full grid place-items-center bg-gradient-to-br from-violet-600 to-cyan-500 text-white font-black mb-2.5">
                        1
                      </div>
                      <strong className="block mb-1">
                        Register obligations
                      </strong>
                      <p className="text-sm text-[#5a6786]">
                        Identify the entities, products, and targets that fall
                        under EPR responsibility.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-[#dccff6] rounded-2xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <div className="w-8.5 h-8.5 rounded-full grid place-items-center bg-gradient-to-br from-violet-600 to-cyan-500 text-white font-black mb-2.5">
                        2
                      </div>
                      <strong className="block mb-1">Collect batteries</strong>
                      <p className="text-sm text-[#5a6786]">
                        Build channels for safe return, aggregation, and reverse
                        logistics.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-[#dccff6] rounded-2xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <div className="w-8.5 h-8.5 rounded-full grid place-items-center bg-gradient-to-br from-violet-600 to-cyan-500 text-white font-black mb-2.5">
                        3
                      </div>
                      <strong className="block mb-1">Verify recovery</strong>
                      <p className="text-sm text-[#5a6786]">
                        Ensure traceability, documentation, and compliant
                        recycling outcomes.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-[#dccff6] rounded-2xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <div className="w-8.5 h-8.5 rounded-full grid place-items-center bg-gradient-to-br from-violet-600 to-cyan-500 text-white font-black mb-2.5">
                        4
                      </div>
                      <strong className="block mb-1">Transfer credits</strong>
                      <p className="text-sm text-[#5a6786]">
                        Match verified output with obligated demand and record
                        the transaction.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4.5 p-4 border-l-5 border-emerald-500 bg-[#edfaf5] rounded-2xl text-[#1d5247] font-semibold">
                    Featured snippet answer:{" "}
                    <strong>
                      The EPR credit trading process usually follows
                      registration, collection, verification, credit generation,
                      transfer, and reporting.
                    </strong>
                  </div>

                  <div className="relative pl-7 before:content-[''] before:absolute before:left-[9px] before:top-0 before:bottom-0 before:width-[2px] before:w-0.5 before:bg-gradient-to-b before:from-violet-600 before:to-emerald-500 mt-4.5">
                    <div className="relative pb-4.5 before:content-[''] before:absolute before:-left-7 before:top-1.5 before:w-4.5 before:h-4.5 before:rounded-full before:bg-white before:border-4 before:border-violet-600">
                      <strong className="block mb-1">Step A: Planning</strong>
                      <span className="text-sm text-[#5a6786]">
                        Map obligations, partners, geography, and reporting
                        structure.
                      </span>
                    </div>
                    <div className="relative pb-4.5 before:content-[''] before:absolute before:-left-7 before:top-1.5 before:w-4.5 before:h-4.5 before:rounded-full before:bg-white before:border-4 before:border-violet-600">
                      <strong className="block mb-1">Step B: Operations</strong>
                      <span className="text-sm text-[#5a6786]">
                        Run collection, storage, recovery, and documentation
                        workflows.
                      </span>
                    </div>
                    <div className="relative pb-4.5 before:content-[''] before:absolute before:-left-7 before:top-1.5 before:w-4.5 before:h-4.5 before:rounded-full before:bg-white before:border-4 before:border-violet-600">
                      <strong className="block mb-1">
                        Step C: Compliance closure
                      </strong>
                      <span className="text-sm text-[#5a6786]">
                        Prepare proofs, reconcile records, and close the
                        reporting cycle.
                      </span>
                    </div>
                  </div>
                </section>{" "}
              </Reveal>

              {/* Section: Documentation & Approval Roadmap */}
              <Reveal delay={0.05}>
                {" "}
                <section
                  className="mt-5.5 scroll-mt-5 p-6 md:p-4.5 bg-gradient-to-b from-white/98 to-[#f8fbff]/95 border border-[#d8e4f2]/98 rounded-3xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]"
                  id="documentation-roadmap"
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#163a66] tracking-tight mb-2.5">
                    Documentation &amp; Approval Roadmap
                  </h2>
                  <p className="text-base text-[#5a6786] max-w-[92ch] mb-4.5">
                    Instead of stakeholder mapping, this section focuses on the
                    papers, records, and approvals that keep a lithium credit
                    project moving. It is practical, searchable, and closely
                    tied to the topic.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-[rgba(63,114,175,0.12)] to-[rgba(76,201,240,0.12)] border border-[#dccff6] text-lg">
                          📄
                        </div>
                        <h3 className="text-[1.13rem] font-bold text-[#13213c]">
                          Key documents
                        </h3>
                      </div>
                      <ul className="list-disc pl-5 text-[#5a6786] space-y-1">
                        <li>Collection records and handover logs</li>
                        <li>Recovery or recycling output evidence</li>
                        <li>Chain-of-custody and transport records</li>
                        <li>Verification and reconciliation sheets</li>
                        <li>Credit issuance and reporting file set</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-[rgba(63,114,175,0.12)] to-[rgba(76,201,240,0.12)] border border-[#dccff6] text-lg">
                          ✅
                        </div>
                        <h3 className="text-[1.13rem] font-bold text-[#13213c]">
                          Approval sequence
                        </h3>
                      </div>
                      <ol className="list-decimal pl-5 text-[#5a6786] space-y-1">
                        <li>Map the obligation and service scope</li>
                        <li>Collect and sort material with traceability</li>
                        <li>Validate recovery output against records</li>
                        <li>Prepare evidence pack for reporting</li>
                        <li>Close the cycle with final documentation</li>
                      </ol>
                    </div>
                  </div>

                  <div className="mt-4.5 p-4 border-l-5 border-amber-500 bg-[#fffaf0] rounded-2xl text-[#735900] font-semibold">
                    Practical takeaway:{" "}
                    <strong>
                      the strongest credit files are the ones that combine
                      operational proof, clean records, and a simple reporting
                      trail.
                    </strong>
                  </div>
                </section>{" "}
              </Reveal>

              {/* Section: Value Drivers & Market Edge */}
              <Reveal delay={0.05}>
                {" "}
                <section
                  className="mt-5.5 scroll-mt-5 p-6 md:p-4.5 bg-gradient-to-b from-white/98 to-[#f8fbff]/95 border border-[#d8e4f2]/98 rounded-3xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]"
                  id="value-drivers"
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#163a66] tracking-tight mb-2.5">
                    Value Drivers &amp; Market Edge
                  </h2>
                  <p className="text-base text-[#5a6786] max-w-[92ch] mb-4.5">
                    This new section replaces the risk discussion with a more
                    positive, topic-aligned angle. It explains what makes one
                    operator more valuable than another in the lithium credit
                    ecosystem.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-2">
                        Traceability
                      </h3>
                      <p className="text-[#5a6786]">
                        Better records create better trust, which helps with
                        reporting, verification, and deal confidence.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-2">
                        Process quality
                      </h3>
                      <p className="text-[#5a6786]">
                        Simple, repeatable workflows reduce confusion and make
                        operations easier to scale.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-2">
                        Market timing
                      </h3>
                      <p className="text-[#5a6786]">
                        Strong timing helps operators meet demand when
                        obligations are urgent and supply is limited.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-2">
                        Service packaging
                      </h3>
                      <p className="text-[#5a6786]">
                        Bundled services feel more complete and usually carry
                        stronger commercial value.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-2">
                        Digital records
                      </h3>
                      <p className="text-[#5a6786]">
                        Dashboards and templates speed up documentation and help
                        with audit readiness.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-2">
                        Trust layer
                      </h3>
                      <p className="text-[#5a6786]">
                        Reliable execution builds repeat business and makes the
                        workflow easier to expand.
                      </p>
                    </div>
                  </div>
                </section>{" "}
              </Reveal>

              {/* Section: Strategic Market Intelligence Dashboard */}
              <Reveal delay={0.05}>
                {" "}
                <section
                  className="mt-5.5 scroll-mt-5 p-6 md:p-4.5 bg-gradient-to-b from-white/98 to-[#f8fbff]/95 border border-[#d8e4f2]/98 rounded-3xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]"
                  id="market-intelligence"
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#163a66] tracking-tight mb-2.5">
                    Strategic Market Intelligence Dashboard
                  </h2>
                  <p className="text-base text-[#5a6786] max-w-[92ch] mb-4.5">
                    The EPR lithium credit market rewards businesses that can
                    combine operational control with clear documentation.
                    Collection performance, recycling output, traceability, and
                    verified reporting are now the real competitive levers. The
                    strongest players will be the ones that turn fragmented
                    compliance work into a repeatable commercial system.
                  </p>

                  {/* Quick Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 mb-4.5">
                    <div className="p-[18px] rounded-2xl bg-gradient-to-b from-white to-[#f7fbff] border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <strong className="block text-[1.8rem] font-black text-[#2b1b5a] mb-1">
                        4
                      </strong>
                      <span className="text-[#5a6786] text-[0.94rem]">
                        Core levers: compliance, collection, recovery, reporting
                      </span>
                    </div>
                    <div className="p-[18px] rounded-2xl bg-gradient-to-b from-white to-[#f7fbff] border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <strong className="block text-[1.8rem] font-black text-[#2b1b5a] mb-1">
                        3
                      </strong>
                      <span className="text-[#5a6786] text-[0.94rem]">
                        Stakeholders most affected: producers, recyclers, PROs
                      </span>
                    </div>
                    <div className="p-[18px] rounded-2xl bg-gradient-to-b from-white to-[#f7fbff] border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <strong className="block text-[1.8rem] font-black text-[#2b1b5a] mb-1">
                        5+
                      </strong>
                      <span className="text-[#5a6786] text-[0.94rem]">
                        Revenue routes across services and technology
                      </span>
                    </div>
                    <div className="p-[18px] rounded-2xl bg-gradient-to-b from-white to-[#f7fbff] border border-[#dccff6] shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <strong className="block text-[1.8rem] font-black text-[#2b1b5a] mb-1">
                        24/7
                      </strong>
                      <span className="text-[#5a6786] text-[0.94rem]">
                        Need for traceability and audit-ready visibility
                      </span>
                    </div>
                  </div>

                  {/* Deep-Dive Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-2">
                        Growth Drivers
                      </h3>
                      <p className="text-[#5a6786]">
                        Rising battery usage, stricter compliance expectations,
                        and stronger demand for end-to-end support are pushing
                        the market forward.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-2">
                        Revenue Opportunities
                      </h3>
                      <p className="text-[#5a6786]">
                        Credit aggregation, advisory services, reverse
                        logistics, traceability platforms, and managed
                        compliance can all become monetizable offerings.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-2">
                        Competitive Advantage
                      </h3>
                      <p className="text-[#5a6786]">
                        Businesses that provide reliable reporting, clean
                        records, and predictable execution will win long-term
                        trust from obligated entities.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-2">
                        Digital Traceability
                      </h3>
                      <p className="text-[#5a6786]">
                        Dashboards, automated workflows, and documentation
                        systems reduce errors and improve the speed of
                        compliance closure.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-2">
                        Risk &amp; Compliance
                      </h3>
                      <p className="text-[#5a6786]">
                        Weak chain-of-custody, poor data quality, and delayed
                        reporting can damage both margins and credibility.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-white/98 to-[#f6faff]/98 border border-[#d8e4f2]/98 rounded-2xl p-[22px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_22px_62px_rgba(22,58,102,0.14)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-2">
                        Future Outlook
                      </h3>
                      <p className="text-[#5a6786]">
                        As the market matures, integrated service providers and
                        technology-enabled operators are likely to capture the
                        best opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4.5 p-4 border-l-5 border-emerald-500 bg-[#edfaf5] rounded-2xl text-[#1d5247] font-semibold">
                    <strong>
                      The most valuable business is not just credit trading — it
                      is owning the workflow, the data, and the trust behind it.
                    </strong>
                  </div>
                </section>{" "}
              </Reveal>

              {/* Section: FAQs & Quick Answers */}
              <Reveal delay={0.05}>
                {" "}
                <section
                  className="mt-5.5 scroll-mt-5 p-6 md:p-4.5 bg-gradient-to-b from-white/98 to-[#f8fbff]/95 border border-[#d8e4f2]/98 rounded-3xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]"
                  id="faq"
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#163a66] tracking-tight mb-4.5">
                    FAQs &amp; Quick Answers
                  </h2>
                  <div className="grid gap-3">
                    <div className="p-[18px] bg-white border border-[#dccff6] rounded-2xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-1">
                        What are EPR lithium credits?
                      </h3>
                      <p className="text-[#5a6786]">
                        EPR lithium credits are proof-based compliance value
                        created when battery recovery, traceability, and
                        documentation can be verified against an obligation.
                      </p>
                    </div>
                    <div className="p-[18px] bg-white border border-[#dccff6] rounded-2xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-1">
                        Why is the lithium credit market growing?
                      </h3>
                      <p className="text-[#5a6786]">
                        Growth is driven by rising battery use, stronger
                        collection needs, improved traceability systems, and
                        increasing demand for accountable compliance support.
                      </p>
                    </div>
                    <div className="p-[18px] bg-white border border-[#dccff6] rounded-2xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-1">
                        Who can benefit from this market?
                      </h3>
                      <p className="text-[#5a6786]">
                        Producers, recyclers, PROs, logistics teams, compliance
                        consultants, and software providers can all build value
                        through the EPR lithium ecosystem.
                      </p>
                    </div>
                    <div className="p-[18px] bg-white border border-[#dccff6] rounded-2xl shadow-[0_18px_48px_rgba(16,32,51,0.12)]">
                      <h3 className="text-[1.13rem] font-bold text-[#13213c] mb-1">
                        What is the best business model?
                      </h3>
                      <p className="text-[#5a6786]">
                        The strongest model usually bundles compliance
                        management, logistics coordination, traceability,
                        reporting, and advisory services into one integrated
                        offering.
                      </p>
                    </div>
                  </div>
                </section>{" "}
              </Reveal>

              {/* Section: CTA Placement (Empty placeholder preserved from original source) */}
              <section className="mt-5.5 scroll-mt-5" id="cta" />
              </div>
            </div>
            <aside className="hidden lg:block shrink-0 width-[320px]">
              <div className="sticky top-28 px-2">
                <StickyContactForm />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
