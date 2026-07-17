"use client";

import { motion } from "framer-motion";
import {
  Coins,
  ClipboardList,
  BookOpenText,
  KeyRound,
  BarChart3,
  Radar,
  Building2,
  Sparkles,
  Users2,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

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

function BarRow({ label, width, delay }: { label: string; width: string; delay: number }) {
  return (
    <div className="grid items-center gap-3" style={{ gridTemplateColumns: "minmax(0,1fr) minmax(0,2fr) 56px" }}>
      <div className="text-gray-800 text-[14.5px] font-semibold">{label}</div>
      <div className="h-4 rounded-full overflow-hidden bg-gray-100">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          whileInView={{ width }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay }}
        />
      </div>
      <div className="text-right font-extrabold text-gray-900 text-[14px]">{width}</div>
    </div>
  );
}

const steps = [
  {
    icon: ClipboardList,
    title: "Assess your current position",
    text: "Review what waste you generate, what compliance obligations apply, and where your current documentation stands.",
  },
  {
    icon: BookOpenText,
    title: "Build it into your brand story",
    text: "Turn your recycling and compliance practices into a clear, honest narrative you can share with customers and partners.",
  },
  {
    icon: KeyRound,
    title: "Unlock new markets and leads",
    text: "Use verified compliance data to access tenders, partnerships, and buyers who specifically look for it.",
  },
  {
    icon: Radar,
    title: "Monitor trends and adapt",
    text: "Keep watching regulatory and market shifts so your strategy evolves before it's forced to.",
  },
];

export default function WasteToWealthBlog() {
  return (
    <div className="font-sans bg-gradient-to-b from-white via-primary/[0.03] to-secondary/[0.05] text-gray-800 leading-[1.75]">
      <Seo
        title="From Waste to Wealth: Building a Growth Strategy Around Recycling & Compliance"
        description="A step-by-step approach to turning recycling and EPR compliance from a back-office task into a genuine growth strategy for your business."
        keywords={[
          "waste to wealth business",
          "recycling growth strategy",
          "EPR growth strategy",
          "circular economy business strategy",
          "compliance driven growth",
          "EPR Nexuss",
        ]}
        url="https://eprnexuss.com/blog/waste-to-wealth-growth-strategy"
        type="article"
      />

      <div className="w-full max-w-8xl mx-auto px-1 pt-8 pb-16">
        {/* Banner */}
        <section className="relative overflow-hidden rounded-[32px] mb-7 border border-primary/10 bg-gradient-to-br from-primary via-primary/90 to-secondary shadow-lg">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -left-14 -bottom-12 w-44 h-44 rounded-full bg-white/10" />
          <div className="relative z-10 px-6 sm:px-16 py-16 sm:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 mb-6"
            >
              <Coins className="w-8 h-8 text-white" />
            </motion.div>
            <div className="inline-block px-3 py-1.5 rounded-full text-[13px] font-bold tracking-wide mb-5 text-white bg-white/15 border border-white/20">
              Business Growth &amp; Lead Generation
            </div>
            <h1
              className="font-display font-extrabold text-white mb-4 tracking-tight"
              style={{ fontSize: "clamp(28px, 4.2vw, 50px)", lineHeight: 1.1 }}
            >
              From Waste to Wealth: Building a Growth
              <br className="hidden sm:block" /> Strategy Around Recycling &amp; Compliance
            </h1>
            <p className="mx-auto text-white/90 max-w-[700px]" style={{ fontSize: "clamp(15px, 1.4vw, 19px)" }}>
              What if the waste your business already produces became one
              of your strongest growth assets? Here's how to build toward
              that.
            </p>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex-1 min-w-0 w-full">
            {/* 1. Rethinking waste */}
            <Reveal>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-3">
                  1. Rethinking waste as a strategic business asset
                </h2>
                <p className="text-gray-600 text-[15px] mb-0">
                  Most businesses think of waste management purely as a cost
                  to minimise. A more useful lens is to treat it as an asset
                  to manage — one that carries recoverable material value,
                  produces compliance data worth showcasing, and shapes how
                  customers and partners perceive your business. The
                  strategy below walks through how to build that shift
                  step by step.
                </p>
              </section>
            </Reveal>

            {/* Steps 2-5 */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px] mb-5">
                  The four-step growth strategy
                </h2>
                <div className="flex flex-col gap-4">
                  {steps.map(({ icon: Icon, title, text }, i) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="flex gap-4 items-start rounded-2xl border border-gray-200 p-5 bg-gradient-to-br from-primary/[0.03] to-secondary/[0.04]"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-extrabold text-[15px] flex-shrink-0">
                        {i + 2}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon className="w-4 h-4 text-primary" />
                          <h4 className="text-gray-900 text-[16px] font-bold m-0">{title}</h4>
                        </div>
                        <p className="text-gray-600 text-[14.5px] m-0">{text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 6. Chart */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    6. How value builds across each stage of the strategy
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-5">
                  Businesses that follow this progression typically see
                  compounding returns as each stage builds on the last.
                </p>
                <div className="flex flex-col gap-4">
                  <BarRow label="Assessment & baseline" width="45%" delay={0} />
                  <BarRow label="Brand story integration" width="62%" delay={0.1} />
                  <BarRow label="Market & lead access" width="80%" delay={0.2} />
                  <BarRow label="Sustained competitive edge" width="91%" delay={0.3} />
                </div>
              </section>
            </Reveal>

            {/* 7. How EPR Nexuss supports */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-secondary/20 bg-secondary/[0.06] mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brandGreen/15 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-brandGreen" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    7. How EPR Nexuss supports every step of this journey
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  We work alongside you through each stage — from the initial
                  assessment through to ongoing trend monitoring — so the
                  strategy isn't something you build once and forget, but
                  something that keeps generating value as your business
                  grows.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Baseline assessment of your current waste & compliance",
                    "Help shaping your sustainability narrative",
                    "Documentation ready for tenders and partnerships",
                    "Ongoing trend monitoring and strategy updates",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
                      <Sparkles className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-gray-700 text-[13.5px]">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 8. Common pitfalls */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  8. Common pitfalls when building a waste-based growth strategy
                </h2>
                <div className="flex flex-col gap-3">
                  {[
                    { pitfall: "Treating it as a marketing exercise only", fix: "Without real recycling data and compliance behind it, the story falls apart the moment a buyer asks for proof." },
                    { pitfall: "Moving straight to messaging without an assessment", fix: "Skipping the baseline review often means overstating claims that don't hold up under scrutiny." },
                    { pitfall: "Expecting overnight results", fix: "The value of this strategy compounds over months and years, not weeks — patience matters." },
                  ].map(({ pitfall, fix }) => (
                    <div key={pitfall} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <p className="text-gray-900 text-[15px] font-bold mb-1.5">{pitfall}</p>
                      <p className="text-gray-600 text-[14px] m-0">{fix}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 9. Aligning internal teams */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Users2 className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    9. Aligning internal teams around the strategy
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  This strategy touches more departments than people expect —
                  operations manages the actual waste and recycling,
                  compliance handles the documentation, and sales or
                  marketing eventually carries the story to customers. When
                  these teams operate in silos, the strategy stalls. A short
                  regular check-in between them keeps everyone working from
                  the same current information, rather than each team
                  discovering gaps only when a client or auditor asks a
                  question no one was ready for.
                </p>
              </section>
            </Reveal>

            {/* 10. KPIs to track */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  10. Measuring success: KPIs worth tracking over time
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Material recovery volume", text: "How much waste is being diverted from landfill and recovered each quarter." },
                    { title: "Cost offset from recovered material", text: "How much of your waste-management cost is being recouped through material resale." },
                    { title: "Compliance-referenced deals", text: "How many new contracts or partnerships specifically cited your compliance record." },
                    { title: "Brand awareness of sustainability efforts", text: "Whether customers and partners can accurately describe your recycling practices when asked." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <h4 className="text-gray-900 text-[15px] font-bold mb-1.5">{title}</h4>
                      <p className="text-gray-600 text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 11. Industry examples */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  11. Industry examples of the waste-to-wealth shift in action
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Electronics manufacturer", text: "Turned its e-waste take-back program into a headline feature of its retail packaging and marketing." },
                    { title: "Packaging business", text: "Redesigned materials for recyclability, then used that redesign as a lead differentiator with retail clients." },
                    { title: "Industrial supplier", text: "Recovered metal scrap revenue that now meaningfully offsets its overall waste-management budget." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-4 bg-gray-50">
                      <h4 className="text-gray-900 text-[14.5px] font-bold mb-1">{title}</h4>
                      <p className="text-gray-600 text-[13.5px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 12. Long-term vision */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-primary/20 bg-primary/[0.06] mb-6">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display font-extrabold text-gray-900 text-[20px] sm:text-[22px] mb-2">
                      12. The long-term vision: becoming a sustainability leader in your sector
                    </h2>
                    <p className="text-gray-600 text-[14.5px] m-0">
                      The businesses that go furthest with this approach
                      eventually stop treating sustainability as a
                      supporting feature of their offering and start
                      treating it as a core part of their identity in the
                      market. That shift takes time, but it's built entirely
                      out of the steps already covered here — assessment,
                      storytelling, market access, and continuous
                      monitoring, repeated consistently over years rather
                      than treated as a single campaign.
                    </p>
                  </div>
                </div>
              </section>
            </Reveal>

            {/* Closing CTA */}
            <Reveal delay={0.05}>
              <section className="text-center rounded-[32px] px-6 sm:px-10 py-12 sm:py-16 border border-primary/10 bg-gradient-to-br from-primary to-secondary shadow-lg">
                <h2 className="font-display font-extrabold text-white mb-3" style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}>
                  Build your growth strategy around what you already have
                </h2>
                <p className="max-w-[640px] mx-auto text-white/90 text-[15px] mb-0">
                  Let's map out how your existing waste and compliance data
                  can start working toward your next stage of growth.
                </p>
              </section>
            </Reveal>
          </div>

          <aside className="hidden lg:block w-[280px] flex-shrink-0 self-start" style={{ position: "sticky", top: "7rem" }}>
            <StickyContactForm />
          </aside>
        </div>
      </div>
    </div>
  );
}