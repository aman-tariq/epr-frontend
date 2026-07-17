"use client";

import { motion } from "framer-motion";
import {
  ListChecks,
  Smartphone,
  Laptop,
  Tv,
  Refrigerator,
  Printer,
  Cable,
  BatteryFull,
  ServerCog,
  Fan,
  HelpCircle,
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

const colorClasses = {
  primary: { card: "bg-primary/[0.05]", iconWrap: "bg-primary/15", icon: "text-primary" },
  secondary: { card: "bg-secondary/[0.05]", iconWrap: "bg-secondary/15", icon: "text-secondary" },
  brandGreen: { card: "bg-brandGreen/[0.05]", iconWrap: "bg-brandGreen/15", icon: "text-brandGreen" },
} as const;

const categories = [
  {
    icon: Smartphone,
    title: "Mobile & Handheld Devices",
    items: "Smartphones, tablets, smartwatches, power banks",
    color: "primary" as const,
  },
  {
    icon: Laptop,
    title: "Computers & IT Equipment",
    items: "Laptops, desktops, monitors, keyboards, hard drives, routers",
    color: "secondary" as const,
  },
  {
    icon: Tv,
    title: "Home Entertainment",
    items: "LED/LCD TVs, set-top boxes, speakers, DVD players",
    color: "brandGreen" as const,
  },
  {
    icon: Refrigerator,
    title: "Large Home Appliances",
    items: "Refrigerators, washing machines, air conditioners, microwaves",
    color: "primary" as const,
  },
  {
    icon: Printer,
    title: "Office Equipment",
    items: "Printers, scanners, photocopiers, UPS units, projectors",
    color: "secondary" as const,
  },
  {
    icon: Fan,
    title: "Small Home Appliances",
    items: "Fans, mixers, irons, toasters, electric kettles",
    color: "brandGreen" as const,
  },
];

export default function TypesOfEwasteBlog() {
  return (
    <div className="font-sans bg-gradient-to-b from-white via-secondary/[0.03] to-primary/[0.05] text-gray-800 leading-[1.75]">
      <Seo
        title="What Types of E-Waste Do We Buy? A Complete Guide"
        description="A complete guide to the categories of electronic waste we purchase — from phones and laptops to large appliances and cables — with tips on getting the best value."
        keywords={[
          "types of e-waste",
          "e-waste categories",
          "buy e-waste",
          "sell old electronics",
          "e-waste we accept",
          "electronic scrap types",
          "sell laptops for scrap",
          "sell old appliances",
        ]}
        url="https://eprnexuss.com/blog/types-of-e-waste-we-buy"
        type="article"
      />

      <div className="w-full max-w-8xl mx-auto px-1 pt-8 pb-16">
        {/* Banner */}
        <section className="relative overflow-hidden rounded-[32px] mb-7 border border-secondary/10 bg-gradient-to-br from-secondary via-secondary/90 to-primary shadow-lg">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -left-14 -bottom-12 w-44 h-44 rounded-full bg-white/10" />
          <div className="relative z-10 px-6 sm:px-16 py-16 sm:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 mb-6"
            >
              <ListChecks className="w-8 h-8 text-white" />
            </motion.div>
            <div className="inline-block px-3 py-1.5 rounded-full text-[13px] font-bold tracking-wide mb-5 text-white bg-white/15 border border-white/20">
              Buy &amp; Sell Scrap &middot; Buy E-Waste
            </div>
            <h1
              className="font-display font-extrabold text-white mb-4 tracking-tight"
              style={{ fontSize: "clamp(30px, 4.5vw, 54px)", lineHeight: 1.08 }}
            >
              What Types of E-Waste
              <br className="hidden sm:block" /> You Can Sell
            </h1>
            <p className="mx-auto text-white/90 max-w-[680px]" style={{ fontSize: "clamp(15px, 1.4vw, 19px)" }}>
              From a single dead phone to a warehouse of retired office
              equipment — here's exactly what we take off your hands.
            </p>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex-1 min-w-0 w-full">
            {/* Intro */}
            <Reveal>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <p className="text-gray-600 text-[16px] mb-4">
                  A lot of people assume "e-waste" only means old phones and
                  laptops. In reality, almost anything with a plug, a
                  battery, or a circuit board qualifies — and most of it has
                  resale value.
                </p>
                <p className="text-gray-600 text-[16px] mb-0">
                  To make things simple, here is a full breakdown of the
                  categories we regularly purchase from households,
                  offices, and businesses.
                </p>
              </section>
            </Reveal>

            {/* Category cards */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px] mb-5">
                  Categories we accept
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {categories.map(({ icon: Icon, title, items, color }) => {
                    const c = colorClasses[color];
                    return (
                      <motion.div
                        key={title}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className={`rounded-2xl border border-gray-200 p-5 ${c.card}`}
                      >
                        <div className={`w-10 h-10 rounded-xl ${c.iconWrap} flex items-center justify-center mb-3`}>
                          <Icon className={`w-5 h-5 ${c.icon}`} />
                        </div>
                        <h4 className="text-gray-900 text-[16px] font-bold mb-1.5">{title}</h4>
                        <p className="text-gray-600 text-[14px] m-0">{items}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            </Reveal>

            {/* Table: what matters for value */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ServerCog className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    Wires, cables & components count too
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  It's not just whole devices. Loose cables, circuit boards,
                  and even individual batteries carry recoverable value on
                  their own.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full border-collapse bg-white" style={{ minWidth: 640 }}>
                    <thead>
                      <tr>
                        {["Item", "What we look for", "Typical source"].map((h) => (
                          <th key={h} className="text-gray-900 text-left px-4 py-3 text-[13.5px] border-b border-gray-200 bg-primary/5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Cables & connectors", "Copper content, connector condition", "Homes, offices, IT rooms"],
                        ["Circuit boards (PCBs)", "Chip density, gold/copper content", "Computers, appliances"],
                        ["Batteries", "Type (Li-ion, lead-acid), condition", "Laptops, UPS, power tools"],
                        ["Motors & compressors", "Copper winding, metal weight", "ACs, refrigerators, fans"],
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

            {/* Working or not */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <BatteryFull className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px]">
                    Working, broken, or incomplete — all of it counts
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  A common hesitation is thinking a device has to switch on
                  to be worth selling. That's not the case. A cracked phone
                  screen, a laptop with a dead motherboard, or a printer
                  missing its ink cartridges still has recoverable material
                  inside — the outer condition just changes how it's
                  processed, not whether it's accepted.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Fully working", text: "Assessed for possible refurbishment or resale before recycling." },
                    { title: "Partially working", text: "Usable parts are salvaged; the rest goes to material recovery." },
                    { title: "Completely non-functional", text: "Dismantled directly for metals, plastics, and components." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-4 bg-gray-50">
                      <h4 className="text-gray-900 text-[14.5px] font-bold mb-1">{title}</h4>
                      <p className="text-gray-600 text-[13.5px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Quantity guidance */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px] mb-4">
                  Small quantities and large lots, both welcome
                </h2>
                <p className="text-gray-600 text-[15px] mb-4">
                  Whether you're a household clearing out a single drawer or
                  a business decommissioning an entire IT department, the
                  same categories apply — only the scale of pickup changes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-primary/20 p-5 bg-primary/[0.05]">
                    <h4 className="text-gray-900 text-[15.5px] font-bold mb-1.5">Households</h4>
                    <p className="text-gray-600 text-[14px] m-0">
                      A few old phones, chargers, a broken kitchen appliance,
                      or a retired TV — small pickups are arranged just as
                      easily as bulk ones.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-secondary/20 p-5 bg-secondary/[0.05]">
                    <h4 className="text-gray-900 text-[15.5px] font-bold mb-1.5">Offices & businesses</h4>
                    <p className="text-gray-600 text-[14px] m-0">
                      Retired computers, servers, UPS batteries, and
                      networking equipment are collected in bulk, with
                      inventory documentation on request.
                    </p>
                  </div>
                </div>
              </section>
            </Reveal>

            {/* Not sure section */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-secondary/20 bg-secondary/[0.06] mb-6">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-brandGreen/15 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-brandGreen" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 text-[17px] font-bold mb-1.5">
                      Not sure if your item qualifies?
                    </h3>
                    <p className="text-gray-600 text-[14.5px] m-0">
                      If it runs on electricity or a battery — working or
                      broken — chances are we can take it. When in doubt,
                      send us a quick description or photo and we'll confirm
                      right away.
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
                      q: "Do you buy items that are missing parts, like a laptop without a battery?",
                      a: "Yes. Missing parts simply means the item is priced based on what remains — it doesn't disqualify it from being accepted.",
                    },
                    {
                      q: "Can I sell just cables and chargers without a full device?",
                      a: "Absolutely. Cables, chargers, and adapters are accepted on their own and priced by weight and copper content.",
                    },
                    {
                      q: "Do you collect large appliances like refrigerators and ACs?",
                      a: "Yes, large home appliances are collected directly from your location — there's no need to move them yourself.",
                    },
                    {
                      q: "What if my item doesn't fit neatly into one of these categories?",
                      a: "Send us a quick description or photo and we'll let you know right away whether it qualifies and roughly what to expect.",
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

            {/* Closing CTA */}
            <Reveal delay={0.05}>
              <section className="text-center rounded-[32px] px-6 sm:px-10 py-12 sm:py-16 border border-secondary/10 bg-gradient-to-br from-secondary to-primary shadow-lg">
                <h2 className="font-display font-extrabold text-white mb-3" style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}>
                  Have a mix of items to sell?
                </h2>
                <p className="max-w-[640px] mx-auto text-white/90 text-[15px] mb-0">
                  You don't need to sort everything yourself. Tell us what
                  you have and we'll guide you through pickup, weighing, and
                  fair payment for the full lot.
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