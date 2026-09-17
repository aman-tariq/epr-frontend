"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  PhoneCall,
  ClipboardList,
  Truck,
  Scale,
  Wallet,
  FileCheck2,
  Clock,
  ShieldCheck,
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

const steps = [
  {
    icon: PhoneCall,
    title: "Reach out to us",
    text: "Call, message, or fill our contact form with a rough idea of what you're selling — a few items or a full office clear-out.",
  },
  {
    icon: ClipboardList,
    title: "Get a quick estimate",
    text: "We ask a few simple questions about type, quantity, and condition, then share an approximate price range upfront.",
  },
  {
    icon: Truck,
    title: "Schedule a pickup",
    text: "Pick a date and time that works for you. Our team comes to your home, office, or warehouse — no need to transport anything yourself.",
  },
  {
    icon: Scale,
    title: "On-the-spot weighing & inspection",
    text: "Items are weighed and checked in front of you, using transparent, calibrated scales and clear category-wise rates.",
  },
  {
    icon: Wallet,
    title: "Instant payment",
    text: "Once the value is confirmed, you're paid on the spot — by cash or direct transfer, whichever you prefer.",
  },
  {
    icon: FileCheck2,
    title: "Documented, compliant disposal",
    text: "You receive a receipt for the transaction, and your e-waste is recycled through certified, compliant channels.",
  },
];

export default function HowBuyingProcessWorksBlog() {
  return (
    <div className="font-sans bg-gradient-to-b from-white via-primary/[0.03] to-secondary/[0.05] text-gray-800 leading-[1.75]">
      <Seo
        title="How Does Our E-Waste Buying Process Work?"
        description="A step-by-step look at how we buy e-waste from households and businesses — from your first call to instant payment and compliant recycling."
        keywords={[
          "e-waste buying process",
          "how to sell e-waste",
          "e-waste pickup",
          "sell electronics for cash",
          "e-waste collection process",
          "e-waste price estimate",
          "certified e-waste recycler",
        ]}
        url="https://eprnexuss.com/blog/how-buying-process-works"
        type="article"
      />

      <div className="w-full max-w-[1180px] mx-auto px-1 pt-8 pb-16">
        {/* Banner */}
        <section className="relative overflow-hidden rounded-[32px] mb-7 border border-primary/10 bg-gradient-to-br from-primary via-secondary/80 to-secondary shadow-lg">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -left-14 -bottom-12 w-44 h-44 rounded-full bg-white/10" />
          <div className="relative z-10 px-6 sm:px-16 py-16 sm:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 mb-6"
            >
              <Workflow className="w-8 h-8 text-white" />
            </motion.div>
            <div className="inline-block px-3 py-1.5 rounded-full text-[13px] font-bold tracking-wide mb-5 text-white bg-white/15 border border-white/20">
              Buy &amp; Sell Scrap &middot; Buy E-Waste
            </div>
            <h1
              className="font-display font-extrabold text-white mb-4 tracking-tight"
              style={{ fontSize: "clamp(30px, 4.5vw, 54px)", lineHeight: 1.08 }}
            >
              How Does Our E-Waste
              <br className="hidden sm:block" /> Buying Process Work?
            </h1>
            <p className="mx-auto text-white/90 max-w-[680px]" style={{ fontSize: "clamp(15px, 1.4vw, 19px)" }}>
              From your first message to cash in hand — here's exactly what
              happens at every step, with nothing hidden in between.
            </p>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex-1 min-w-0 w-full">
            {/* Intro */}
            <Reveal>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <p className="text-gray-600 text-[16px] mb-4">
                  A lot of people put off selling their old electronics simply
                  because they're not sure how the process works, or worry
                  it'll be complicated. It isn't. We've kept it deliberately
                  simple — six clear steps from your first call to a
                  documented, paid transaction.
                </p>
                <p className="text-gray-600 text-[16px] mb-0">
                  Here is exactly what to expect, whether you're clearing out
                  a single drawer of gadgets or an entire office IT room.
                </p>
              </section>
            </Reveal>

            {/* Steps timeline */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px] mb-5">
                  The six-step process
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
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-extrabold text-[15px]">
                          {i + 1}
                        </div>
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

            {/* Why it's simple */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  Why the process stays this straightforward
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: Clock, title: "No waiting around", text: "Pickup, weighing, and payment usually happen in a single visit." },
                    { icon: ShieldCheck, title: "Fully transparent", text: "Rates and weights are shown to you directly, with no hidden deductions." },
                    { icon: FileCheck2, title: "Paper trail included", text: "Every transaction comes with a receipt for your own records." },
                  ].map(({ icon: Icon, title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <h4 className="text-gray-900 text-[15.5px] font-bold mb-1.5">{title}</h4>
                      <p className="text-gray-600 text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Preparing for pickup */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px] mb-4">
                  What to prepare before pickup day
                </h2>
                <p className="text-gray-600 text-[15px] mb-4">
                  You don't need to do much, but a little preparation keeps
                  the visit quick and smooth for everyone.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Gather items in one place", text: "Keep everything you're selling in one room or area so weighing doesn't take longer than it needs to." },
                    { title: "Back up any personal data", text: "For phones, laptops, and drives, back up anything you want to keep — devices are wiped securely as part of recycling." },
                    { title: "Have an idea of quantity", text: "A rough count or weight estimate when you first reach out helps us send the right vehicle and team." },
                    { title: "Keep original boxes if handy", text: "Not required, but original packaging can occasionally support a slightly better valuation for working devices." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <h4 className="text-gray-900 text-[15px] font-bold mb-1.5">{title}</h4>
                      <p className="text-gray-600 text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* What happens after pickup */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    What happens to your items after they leave your hands
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  Once collected, items are sorted by category at our
                  processing facility. Working devices are evaluated for
                  possible refurbishment, while non-working equipment is
                  dismantled to separate metals, plastics, and hazardous
                  components like batteries and circuit boards. Each
                  material stream is then routed to the appropriate
                  authorised recycling channel — nothing is sent to a
                  landfill or handled by unregistered scrap processors.
                </p>
              </section>
            </Reveal>

            {/* Callout */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-secondary/20 bg-secondary/[0.06] mb-6">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-brandGreen/15 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-brandGreen" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 text-[17px] font-bold mb-1.5">
                      Bulk pickups for businesses
                    </h3>
                    <p className="text-gray-600 text-[14.5px] m-0">
                      For offices and warehouses with larger volumes, we can
                      arrange dedicated vehicles and a scheduled inventory
                      count ahead of pickup day, so operations aren't
                      disrupted.
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
                      q: "How long does a pickup usually take?",
                      a: "For a household lot, a visit typically takes 20 to 40 minutes including weighing and payment. Larger office pickups may take longer depending on volume.",
                    },
                    {
                      q: "Is there a minimum quantity required to schedule a pickup?",
                      a: "No strict minimum, though for very small items you can also consider a drop-off if that's more convenient for you.",
                    },
                    {
                      q: "How is payment actually handed over?",
                      a: "You can choose cash on the spot or an instant bank transfer, whichever is easier for you.",
                    },
                    {
                      q: "Can I get pickup scheduled outside regular working hours?",
                      a: "For bulk business pickups, we can often accommodate early morning or after-hours slots to avoid disrupting your operations.",
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
                  Ready to get started?
                </h2>
                <p className="max-w-[640px] mx-auto text-white/90 text-[15px] mb-0">
                  Message us with what you'd like to sell and we'll walk you
                  through pickup scheduling — most requests get a response
                  the same day.
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