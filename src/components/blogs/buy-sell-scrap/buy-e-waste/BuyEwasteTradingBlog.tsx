"use client";

import { motion } from "framer-motion";
import {
  IndianRupee,
  Weight,
  Cpu,
  Layers,
  TrendingUp,
  Percent,
  Calculator,
  PackageSearch,
  Info,
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

export default function HowPricingIsCalculatedBlog() {
  return (
    <div className="font-sans mt-[100px] bg-gradient-to-b from-white via-primary/[0.03] to-secondary/[0.05] text-gray-800 leading-[1.75]">
      <Seo
        title="How Is the Price of Your E-Waste Calculated?"
        description="Understand exactly how e-waste pricing works — from weight and material composition to market rates — so you know what to expect before you sell."
        keywords={[
          "e-waste price calculation",
          "how much is my e-waste worth",
          "e-waste scrap rates",
          "sell e-waste price",
          "e-waste value factors",
          "scrap metal price e-waste",
          "e-waste weighing rates",
        ]}
        url="https://eprnexuss.com/blog/how-pricing-is-calculated"
        type="article"
      />

      <div className="w-full max-w-8xl mx-auto px-1 pt-8 pb-16">
       

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div>
             {/* Banner */}
        <section className="relative overflow-hidden rounded-[32px] mb-7 border border-primary/10 bg-gradient-to-br from-primary via-secondary/85 to-secondary shadow-lg">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -left-14 -bottom-12 w-44 h-44 rounded-full bg-white/10" />
          <div className="relative z-10 px-6 sm:px-16 py-16 sm:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 mb-6"
            >
              <IndianRupee className="w-8 h-8 text-white" />
            </motion.div>
            <div className="inline-block px-3 py-1.5 rounded-full text-[13px] font-bold tracking-wide mb-5 text-white bg-white/15 border border-white/20">
              Buy &amp; Sell Scrap &middot; Buy E-Waste
            </div>
            <h1
              className="font-display font-extrabold text-white mb-4 tracking-tight"
              style={{ fontSize: "clamp(30px, 4.5vw, 54px)", lineHeight: 1.08 }}
            >
              How Is the Price of Your
              <br className="hidden sm:block" /> E-Waste Calculated?
            </h1>
            <p className="mx-auto text-white/90 max-w-[680px]" style={{ fontSize: "clamp(15px, 1.4vw, 19px)" }}>
              No guesswork, no vague estimates — here's exactly what goes
              into the number we quote you.
            </p>
          </div>
        </section>
          <div className="flex-1 min-w-0 w-full">
            {/* Intro */}
            <Reveal>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <p className="text-gray-600 text-[16px] mb-4">
                  "How much will I get for this?" is usually the first
                  question people ask before selling their old electronics —
                  and a fair one. Unlike everyday retail pricing, e-waste
                  value depends on a mix of physical and market factors,
                  not just the brand or age of the device.
                </p>
                <p className="text-gray-600 text-[16px] mb-0">
                  Here's a transparent look at exactly how we arrive at the
                  number we quote you.
                </p>
              </section>
            </Reveal>

            {/* Key factors grid */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px] mb-5">
                  The four main pricing factors
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Weight,
                      title: "Weight of the item",
                      text: "Most e-waste is priced per kilogram. Heavier appliances like refrigerators and ACs naturally carry a higher base value than small gadgets.",
                    },
                    {
                      icon: Layers,
                      title: "Material composition",
                      text: "Copper, aluminium, and circuit boards with recoverable gold or silver traces are worth more than plastic-heavy casings.",
                    },
                    {
                      icon: Cpu,
                      title: "Type & category of device",
                      text: "Laptops and IT equipment often carry more valuable internals than basic small appliances of the same weight.",
                    },
                    {
                      icon: TrendingUp,
                      title: "Current market scrap rates",
                      text: "Metal and component prices shift with global commodity markets, so rates are updated regularly rather than fixed.",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <motion.div
                      key={title}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-2xl border border-gray-200 p-5 bg-gradient-to-br from-primary/[0.04] to-secondary/[0.04]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-gray-900 text-[16px] font-bold mb-1.5">{title}</h4>
                      <p className="text-gray-600 text-[14px] m-0">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Table: condition impact */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Percent className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    Does condition affect the price?
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  Working or broken, most e-waste still holds recoverable
                  value — but condition does shift the number slightly,
                  since some items can be refurbished rather than only
                  stripped for parts.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full border-collapse bg-white" style={{ minWidth: 640 }}>
                    <thead>
                      <tr>
                        {["Condition", "What happens to it", "Price impact"].map((h) => (
                          <th key={h} className="text-gray-900 text-left px-4 py-3 text-[13.5px] border-b border-gray-200 bg-primary/5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Fully working", "May be refurbished and reused", "Highest value"],
                        ["Partially working", "Parts salvaged for reuse or repair", "Moderate to good value"],
                        ["Non-working / broken", "Dismantled for material recovery", "Priced by material weight"],
                        ["Heavily damaged / corroded", "Recycled for base metal content only", "Lower value, still accepted"],
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-primary/[0.03]">
                          {row.map((cell, j) => (
                            <td key={j} className="border-t border-gray-200 px-4 py-3 text-[14px] text-gray-700 align-top">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </Reveal>

            {/* How we quote */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    How We Prepare Your Proposal
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  After understanding your business requirements, compliance obligations, and project scope, our experts assess your needs and prepare a tailored proposal. We provide transparent recommendations, estimated timelines, and cost details before execution—ensuring complete clarity with no hidden surprises.
                </p>
              </section>
            </Reveal>

            {/* Category-specific drivers */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px] mb-5">
                  What actually drives the price, category by category
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Phones & laptops", text: "Priced mainly on circuit board content, screen condition, and whether the battery is intact and safe to handle." },
                    { title: "Large appliances", text: "Driven largely by total weight and the copper content in motors, compressors, and internal wiring." },
                    { title: "Cables & chargers", text: "Valued almost entirely by copper weight — thicker, longer cables carry proportionally higher value." },
                    { title: "Printers & office equipment", text: "A mix of plastic bulk and internal metal parts, plus toner or ink cartridges which are often handled separately." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <h4 className="text-gray-900 text-[15px] font-bold mb-1.5">{title}</h4>
                      <p className="text-gray-600 text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Getting the best value */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    Simple ways to get the best possible value
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  You don't need to do anything drastic — a few small habits
                  make a noticeable difference to your final quote.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Sell in batches", text: "Combining multiple items into a single pickup often gets slightly better per-kilogram rates than one-off sales." },
                    { title: "Keep chargers together", text: "Selling a device with its charger or accessories together avoids separately misplacing small, valuable cables." },
                    { title: "Sell sooner rather than later", text: "Devices left in storage for years can corrode or degrade, which can reduce recoverable material quality." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-4 bg-gray-50">
                      <h4 className="text-gray-900 text-[14.5px] font-bold mb-1">{title}</h4>
                      <p className="text-gray-600 text-[13.5px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Callout */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-secondary/20 bg-secondary/[0.06] mb-6">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-brandGreen/15 flex items-center justify-center flex-shrink-0">
                    <PackageSearch className="w-5 h-5 text-brandGreen" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 text-[17px] font-bold mb-1.5">
                      Selling in bulk? You get better per-unit rates
                    </h3>
                    <p className="text-gray-600 text-[14.5px] m-0">
                      Larger quantities — whether a household clear-out or an
                      office decommission — are typically priced at slightly
                      better per-kilogram rates than single small items.
                    </p>
                  </div>
                </div>
              </section>
            </Reveal>

            {/* FAQ */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px] mb-5">
                  Frequently asked questions
                </h2>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      q: "Will I get an exact price before pickup?",
                      a: "You'll get an approximate range based on the details you share. The exact figure is confirmed once items are weighed and inspected during pickup.",
                    },
                    {
                      q: "Do prices change from week to week?",
                      a: "Yes, since they're tied to broader scrap and commodity markets, rates are refreshed regularly rather than fixed indefinitely.",
                    },
                    {
                      q: "Does brand or age of the device affect the price?",
                      a: "Only indirectly — what mainly matters is the material inside, though newer devices with intact, higher-grade components can sometimes fetch a bit more.",
                    },
                    {
                      q: "Is there ever a case where I'd need to pay for disposal instead of being paid?",
                      a: "For standard e-waste categories, no — value is recovered from the materials themselves, so payment flows to you, not the other way around.",
                    },
                  ].map(({ q, a }) => (
                    <div key={q} className="rounded-2xl px-5 py-4 border border-gray-200 bg-gray-50">
                      <h4 className="text-gray-900 text-[15.5px] font-bold mb-1.5">{q}</h4>
                      <p className="text-gray-600 text-[14px] m-0">{a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Info note */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-5 sm:p-6 border border-primary/20 bg-primary/[0.05] mb-6 flex gap-3 items-start">
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-600 text-[14px] m-0">
                  Scrap and material rates can shift week to week with the
                  broader commodities market, so the quote you receive
                  reflects current rates at the time of pickup, not a fixed
                  price list.
                </p>
              </section>
            </Reveal>

            {/* Closing CTA */}
            <Reveal delay={0.05}>
              <section className="text-center rounded-[32px] px-6 sm:px-10 py-12 sm:py-16 border border-primary/10 bg-gradient-to-br from-primary to-secondary shadow-lg">
                <h2 className="font-display font-extrabold text-white mb-3" style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}>
                  Want to know what your e-waste is worth?
                </h2>
                <p className="max-w-[640px] mx-auto text-white/90 text-[15px] mb-0">
                  Share the item type and quantity with us for a free,
                  no-obligation estimate before you decide to sell.
                </p>
              </section>
            </Reveal>
          </div>
          </div>

          <aside className="hidden lg:block w-[280px] flex-shrink-0 self-start" style={{ position: "sticky", top: "5.5rem" }}>
            <StickyContactForm />
          </aside>
        </div>
      </div>
    </div>
  );
}