"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Gavel,
  ShieldCheck,
  FileText,
  Ban,
  BadgeCheck,
  Building2,
  Users,
  AlertCircle,
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

export default function IsSellingEwasteLegalBlog() {
  return (
    <div className="font-sans bg-gradient-to-b from-white via-secondary/[0.03] to-primary/[0.05] text-gray-800 leading-[1.75]">
      <Seo
        title="Is Selling E-Waste Legal in India? What You Should Know"
        description="A clear explanation of India's E-Waste (Management) Rules, who they apply to, and how selling to a certified buyer keeps you fully compliant."
        keywords={[
          "e-waste rules India",
          "is selling e-waste legal",
          "e-waste management rules",
          "EPR compliance e-waste",
          "certified e-waste recycler India",
          "e-waste disposal law",
          "sell e-waste legally",
        ]}
        url="https://eprnexuss.com/blog/is-selling-e-waste-legal"
        type="article"
      />

      <div className="w-full max-w-8xl mx-auto px-1 pt-8 pb-16">
        {/* Banner */}
        <section className="relative overflow-hidden rounded-[32px] mb-7 border border-secondary/10 bg-gradient-to-br from-secondary via-primary/80 to-primary shadow-lg">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -left-14 -bottom-12 w-44 h-44 rounded-full bg-white/10" />
          <div className="relative z-10 px-6 sm:px-16 py-16 sm:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 mb-6"
            >
              <Scale className="w-8 h-8 text-white" />
            </motion.div>
            <div className="inline-block px-3 py-1.5 rounded-full text-[13px] font-bold tracking-wide mb-5 text-white bg-white/15 border border-white/20">
              Buy &amp; Sell Scrap &middot; Buy E-Waste
            </div>
            <h1
              className="font-display font-extrabold text-white mb-4 tracking-tight"
              style={{ fontSize: "clamp(30px, 4.5vw, 54px)", lineHeight: 1.08 }}
            >
              Is Selling E-Waste Legal in India?
            </h1>
            <p className="mx-auto text-white/90 max-w-[680px]" style={{ fontSize: "clamp(15px, 1.4vw, 19px)" }}>
              Yes — but only when it's done through the right channel. Here's
              what the rules actually say, in plain language.
            </p>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex-1 min-w-0 w-full">
            {/* Intro */}
            <Reveal>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <p className="text-gray-600 text-[16px] mb-4">
                  Selling your old electronics is completely legal in India —
                  the law doesn't stop people from doing it. What it does
                  regulate is <strong className="text-gray-900">who</strong>{" "}
                  is allowed to collect, dismantle, and recycle that waste,
                  and how the transaction gets recorded.
                </p>
                <p className="text-gray-600 text-[16px] mb-0">
                  This is where the E-Waste (Management) Rules come in, and
                  why it matters whether you sell to a certified buyer or an
                  unregistered scrap dealer.
                </p>
              </section>
            </Reveal>

            {/* The rules explained */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Gavel className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px]">
                    What the E-Waste Rules actually cover
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  India's E-Waste (Management) Rules place responsibility on
                  manufacturers, producers, and recyclers to ensure
                  electronic waste is collected and processed through
                  authorised channels, rather than left to informal,
                  unregulated scrap handling.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Building2,
                      title: "Producers & manufacturers",
                      text: "Required to meet Extended Producer Responsibility (EPR) targets for collecting back end-of-life products.",
                    },
                    {
                      icon: BadgeCheck,
                      title: "Authorised recyclers",
                      text: "Must hold valid registration to legally dismantle, process, and recover materials from e-waste.",
                    },
                    {
                      icon: Users,
                      title: "Bulk consumers",
                      text: "Businesses generating e-waste in volume must maintain records and route disposal through registered recyclers.",
                    },
                    {
                      icon: Ban,
                      title: "Informal scrap handling",
                      text: "Selling to unregistered dealers who dismantle waste unsafely falls outside the compliant, legal channel.",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-gray-900 text-[15.5px] font-bold mb-1.5">{title}</h4>
                      <p className="text-gray-600 text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Table: certified vs informal */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  Certified buyer vs. informal scrap dealer
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full border-collapse bg-white" style={{ minWidth: 640 }}>
                    <thead>
                      <tr>
                        {["Aspect", "Certified buyer", "Informal dealer"].map((h) => (
                          <th key={h} className="text-gray-900 text-left px-4 py-3 text-[13.5px] border-b border-gray-200 bg-secondary/5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Documentation", "Receipt & compliance record provided", "Usually none"],
                        ["Handling of hazardous parts", "Safe, regulated dismantling", "Often unsafe, manual breakdown"],
                        ["Pricing transparency", "Category-wise, weighed rates", "Negotiated, inconsistent"],
                        ["Legal standing", "Fully compliant with e-waste rules", "Falls outside the regulated channel"],
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-secondary/[0.03]">
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

            {/* Why it matters for businesses */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    Why this matters more for businesses
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  For individuals, selling to a certified buyer is simply the
                  safer, cleaner choice. For businesses, it's often a
                  compliance requirement — bulk consumers and producers
                  need documented proof that their e-waste was disposed of
                  through an authorised channel, which only a registered
                  buyer or recycler can provide.
                </p>
              </section>
            </Reveal>

            {/* Risks of informal disposal */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[24px] sm:text-[28px] mb-4">
                  What can go wrong with informal disposal
                </h2>
                <p className="text-gray-600 text-[15px] mb-4">
                  Selling to an unregistered scrap dealer isn't illegal for
                  you as an individual, but it does carry real downsides
                  that most people don't think about until it's too late.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Unsafe dismantling", text: "Informal handling often involves burning or acid-stripping components, releasing toxic fumes and residue." },
                    { title: "No accountability", text: "Without registration or a receipt, there's no record of where your data-bearing devices actually ended up." },
                    { title: "No compliance proof", text: "Businesses in particular can face difficulty demonstrating proper disposal during audits or inspections." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-4 bg-gray-50">
                      <h4 className="text-gray-900 text-[14.5px] font-bold mb-1">{title}</h4>
                      <p className="text-gray-600 text-[13.5px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Responsibilities by user type */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    What compliance looks like for different sellers
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-primary/20 p-5 bg-primary/[0.05]">
                    <h4 className="text-gray-900 text-[15.5px] font-bold mb-1.5">Individuals & households</h4>
                    <p className="text-gray-600 text-[14px] m-0">
                      No formal paperwork is required from you — simply
                      choosing a certified buyer is enough to ensure your
                      e-waste is handled legally and safely from that point
                      onward.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-secondary/20 p-5 bg-secondary/[0.05]">
                    <h4 className="text-gray-900 text-[15.5px] font-bold mb-1.5">Businesses & bulk consumers</h4>
                    <p className="text-gray-600 text-[14px] m-0">
                      You're generally expected to maintain records of how
                      e-waste is disposed of, which is why a documented
                      receipt from a registered recycler is important for
                      your own compliance file.
                    </p>
                  </div>
                </div>
              </section>
            </Reveal>

            {/* Callout */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-primary/20 bg-primary/[0.06] mb-6">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 text-[17px] font-bold mb-1.5">
                      A quick way to check
                    </h3>
                    <p className="text-gray-600 text-[14.5px] m-0">
                      Ask any buyer for their registration details and a
                      receipt before handing over your e-waste. A legitimate,
                      certified buyer will always provide both without
                      hesitation.
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
                      q: "Do I personally need any registration to sell my old electronics?",
                      a: "No. Individuals and households don't need any registration — the compliance requirement sits with the recycler and any bulk-consumer businesses, not with everyday sellers.",
                    },
                    {
                      q: "What proof should I ask for when selling e-waste?",
                      a: "A receipt or transaction record showing the buyer's registration is a reasonable thing to request, and any certified buyer will provide it without issue.",
                    },
                    {
                      q: "Are there penalties for improper e-waste disposal in India?",
                      a: "The rules primarily place obligations and penalties on producers, recyclers, and bulk consumers who fail to meet compliance requirements, rather than on individual sellers.",
                    },
                    {
                      q: "How do I know if a recycler is genuinely certified?",
                      a: "A certified recycler should be able to share their registration details on request. If a buyer hesitates or can't provide this, that's a sign to look elsewhere.",
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
                  Sell with full peace of mind
                </h2>
                <p className="max-w-[640px] mx-auto text-white/90 text-[15px] mb-0">
                  We are a certified e-waste buyer, and every transaction
                  comes with proper documentation — so you stay compliant,
                  and the planet stays a little cleaner.
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