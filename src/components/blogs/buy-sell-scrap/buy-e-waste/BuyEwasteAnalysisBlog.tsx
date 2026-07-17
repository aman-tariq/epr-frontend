"use client";

import { motion } from "framer-motion";
import {
  Recycle,
  AlertTriangle,
  Banknote,
  Leaf,
  ShieldCheck,
  Battery,
  Droplets,
  TrendingUp,
  CheckCircle2,
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

export default function WhySellEwasteBlog() {
  return (
    <div className="font-sans bg-gradient-to-b from-white via-primary/[0.03] to-secondary/[0.05] text-gray-800 leading-[1.75]">
      <Seo
        title="Why You Should Sell Your E-Waste Instead of Throwing It Away"
        description="Learn why selling your old electronics to a certified e-waste buyer is safer, greener, and more rewarding than throwing them in the trash."
        keywords={[
          "sell e-waste",
          "buy e-waste",
          "e-waste recycling",
          "why recycle electronics",
          "e-waste disposal India",
          "certified e-waste buyer",
          "old electronics pickup",
          "scrap electronics value",
        ]}
        url="https://eprnexuss.com/blog/why-sell-e-waste"
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
              <Recycle className="w-8 h-8 text-white" />
            </motion.div>
            <div className="inline-block px-3 py-1.5 rounded-full text-[13px] font-bold tracking-wide mb-5 text-white bg-white/15 border border-white/20">
              Buy &amp; Sell Scrap &middot; Buy E-Waste
            </div>
            <h1
              className="font-display font-extrabold text-white mb-4 tracking-tight"
              style={{ fontSize: "clamp(30px, 4.5vw, 54px)", lineHeight: 1.08 }}
            >
              Why You Should Sell Your E-Waste
              <br className="hidden sm:block" /> Instead of Throwing It Away
            </h1>
            <p className="mx-auto text-white/90 max-w-[680px]" style={{ fontSize: "clamp(15px, 1.4vw, 19px)" }}>
              That old phone, laptop, or fan in your storeroom is worth more
              than a spot in the bin — for your wallet, and for the planet.
            </p>
          </div>
        </section>

        {/* Content + Sticky Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex-1 min-w-0 w-full">
            {/* Intro */}
            <Reveal>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <p className="text-gray-600 text-[16px] mb-4">
                  Every year, households and offices across India quietly
                  throw away tonnes of old electronics — broken chargers, dead
                  batteries, retired laptops, unused phones. It feels harmless.
                  It isn't.
                </p>
                <p className="text-gray-600 text-[16px] mb-0">
                  Electronic waste is one of the fastest-growing waste
                  streams in the world, and most of it is completely
                  recoverable. When you sell your e-waste to a certified
                  buyer instead of tossing it in the trash, you turn clutter
                  into cash and keep hazardous material out of landfills. Here
                  is why that choice matters.
                </p>
              </section>
            </Reveal>

            {/* Problem section */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-red-100 bg-red-50/50 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px]">
                    What happens when e-waste is thrown away?
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  Old electronics contain lead, mercury, cadmium, and other
                  toxic elements. When dumped in regular trash, these
                  materials leak into soil and groundwater as devices break
                  down over time.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { icon: Droplets, text: "Toxic metals contaminate soil and water sources near landfills." },
                    { icon: Battery, text: "Damaged batteries can leak, corrode, or catch fire in waste piles." },
                    { icon: AlertTriangle, text: "Valuable materials like copper and gold are lost forever." },
                  ].map(({ icon: Icon, text }, i) => (
                    <div key={i} className="rounded-2xl bg-white border border-red-100 p-4">
                      <Icon className="w-5 h-5 text-red-400 mb-2" />
                      <p className="text-gray-600 text-[13.5px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Benefits grid */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px] mb-2">
                  What you gain by selling instead
                </h2>
                <p className="text-gray-600 text-[15px] mb-5">
                  Selling e-waste to a certified buyer replaces every one of
                  those risks with a real benefit.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Banknote,
                      title: "You earn money back",
                      text: "Copper, aluminium, and precious metals inside your old devices have real resale value — money that otherwise goes straight into a bin.",
                    },
                    {
                      icon: Leaf,
                      title: "You reduce environmental harm",
                      text: "Certified recycling recovers materials safely instead of letting them leach into landfills, cutting the plant's need for fresh mining.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "You stay compliant",
                      text: "Selling through a registered buyer means your disposal is documented and legal, which matters for businesses under EPR rules.",
                    },
                    {
                      icon: TrendingUp,
                      title: "You support the circular economy",
                      text: "Recovered metals and plastics go back into making new electronics, reducing overall demand for virgin raw material.",
                    },
                  ].map(({ icon: Icon, title, text }, i) => (
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

            {/* Common items list */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px] mb-4">
                  Everyday items worth selling, not binning
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Old smartphones", "Laptops & desktops", "Chargers & cables",
                    "Dead batteries", "Routers & modems", "Printers & scanners",
                    "Old televisions", "Air conditioners", "Kitchen appliances",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-gray-700 text-[13.5px]">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Hidden value inside devices */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Battery className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px]">
                    The hidden value sitting inside your old devices
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  Most people look at a dead laptop or a broken television
                  and see only trash. In reality, that same device is a
                  small deposit of recoverable material. A single laptop can
                  contain copper wiring, aluminium from its casing, and a
                  circuit board with trace amounts of gold and silver used
                  for conductivity. A washing machine carries a copper motor
                  winding worth far more than the plastic drum around it.
                  None of that value disappears when the device stops
                  working — it just sits unused until someone recovers it.
                </p>
                <p className="text-gray-600 text-[15px] mb-0">
                  Certified buyers price these materials individually rather
                  than guessing a flat rate for "old electronics," which is
                  exactly why selling almost always beats throwing away: you
                  are being paid for what is genuinely inside the product,
                  not for how it looks on the outside.
                </p>
              </section>
            </Reveal>

            {/* Myths section */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px] mb-5">
                  Common myths that stop people from selling
                </h2>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      myth: "\"It's broken, so it's worthless.\"",
                      truth: "Broken devices are still recycled for their metal and component content — condition affects the price, not whether we buy it at all.",
                    },
                    {
                      myth: "\"It's too small a quantity to bother with.\"",
                      truth: "Even a single old phone or a bag of cables is worth something, and pickups are arranged for small lots too, not just bulk orders.",
                    },
                    {
                      myth: "\"My data isn't safe if I hand over my old phone or laptop.\"",
                      truth: "A certified buyer follows proper data-wiping and destruction steps for storage devices before recycling, which an informal scrap dealer typically will not.",
                    },
                    {
                      myth: "\"Recycling centres are far and inconvenient.\"",
                      truth: "Most certified buyers, including us, offer doorstep pickup so you never have to transport anything yourself.",
                    },
                  ].map(({ myth, truth }) => (
                    <div key={myth} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <p className="text-gray-900 text-[15px] font-bold mb-1.5">{myth}</p>
                      <p className="text-gray-600 text-[14px] m-0">{truth}</p>
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
                    <Leaf className="w-5 h-5 text-brandGreen" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 text-[17px] font-bold mb-1.5">
                      A small habit, a big collective impact
                    </h3>
                    <p className="text-gray-600 text-[14.5px] m-0">
                      If every household sold its retired electronics instead
                      of discarding them, the reduction in landfill toxins and
                      raw-material demand would be enormous. It starts with
                      one drawer of old gadgets at a time.
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
                      q: "Do I need to clean or prepare my devices before selling?",
                      a: "No preparation is required. You can hand over devices exactly as they are — dusty, broken, or incomplete — and they'll still be evaluated fairly.",
                    },
                    {
                      q: "What if I only have one or two small items?",
                      a: "That's completely fine. Pickups are arranged for any quantity, from a single old phone to a full room of equipment.",
                    },
                    {
                      q: "Will selling my e-waste really make a difference environmentally?",
                      a: "Yes. Every device recycled through a certified channel is one less source of toxic leakage into soil and water, and one less demand on newly mined raw material.",
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
              <section className="text-center rounded-[32px] px-6 sm:px-10 py-12 sm:py-16 border border-primary/10 bg-gradient-to-br from-primary to-secondary shadow-lg">
                <h2 className="font-display font-extrabold text-white mb-3" style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}>
                  Turn your old electronics into value today
                </h2>
                <p className="max-w-[640px] mx-auto text-white/90 text-[15px] mb-0">
                  We buy e-waste directly from households and businesses, with
                  fair pricing and fully compliant, documented disposal. Reach
                  out to schedule a pickup near you.
                </p>
              </section>
            </Reveal>
          </div>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0 self-start" style={{ position: "sticky", top: "7rem" }}>
            <StickyContactForm />
          </aside>
        </div>
      </div>
    </div>
  );
}