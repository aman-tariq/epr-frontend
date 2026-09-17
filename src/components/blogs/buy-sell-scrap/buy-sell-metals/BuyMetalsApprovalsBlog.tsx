"use client";

import StickyContactForm from "@/components/StickyContactForm";
import { motion, Variants } from "framer-motion";
import {
  Coins,
  TrendingUp,
  BarChart3,
  Layers,
  ShieldCheck,
  Truck,
  FileCheck2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  Gauge,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: "easeOut" },
  }),
};

function SectionHeading({
  eyebrow,
  title,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brandGreen/10 text-brandGreen">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-brandGreen">
          {eyebrow}
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mt-1">
          {title}
        </h2>
      </div>
    </div>
  );
}

function Section({
  id,
  children,
  index,
}: {
  id: string;
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
}

const pricingFactors = [
  {
    icon: BarChart3,
    title: "Global benchmark pricing",
    body: "Copper, aluminium, and zinc scrap is typically priced against London Metal Exchange reference rates, adjusted with a discount that reflects grade, purity, and processing cost, not a locally invented number.",
  },
  {
    icon: Layers,
    title: "Grade and purity",
    body: "Clean, single-alloy scrap commands a stronger price than mixed or contaminated material, since a smelter or foundry can use it with far less pre-processing.",
  },
  {
    icon: ShieldCheck,
    title: "Verified sourcing",
    body: "Scrap that arrives with a documented chain of custody is increasingly valuable to buyers who need it to count toward their own Extended Producer Responsibility obligations.",
  },
  {
    icon: Truck,
    title: "Volume and logistics",
    body: "Consolidated, well-packaged bulk lots reduce a buyer's handling and transport cost per tonne, which is usually reflected back in a stronger quote.",
  },
];

const pricingMistakes = [
  "Accepting a verbal quote with no reference to a benchmark price",
  "Selling mixed-alloy scrap without basic sorting by metal type",
  "Not disclosing contamination, coatings, or attached non-metal components upfront",
  "Selling in small, inconsistent batches instead of planned bulk consignments",
  "Ignoring the added value that documented, EPR-eligible sourcing brings to a buyer",
  "Relying on a single buyer instead of comparing quotes across the market",
];

const gettingFairPriceSteps = [
  {
    title: "Sort and grade before you sell",
    body: "Separate scrap by metal type and, where practical, by alloy grade. This alone often has the single biggest impact on the price a buyer will offer.",
  },
  {
    title: "Ask what benchmark the quote is tied to",
    body: "A credible buyer should be able to explain their quote in relation to current metal reference prices, not just state a flat number.",
  },
  {
    title: "Disclose condition honestly",
    body: "Coatings, oxidation, attached fasteners, or mixed materials all affect processing cost. Disclosing this upfront avoids disputes and builds a pricing relationship that holds up over repeat transactions.",
  },
  {
    title: "Consolidate before selling",
    body: "Where possible, aggregate scrap from multiple sources or over a short period into a single larger consignment to improve your negotiating position.",
  },
  {
    title: "Compare more than one verified buyer",
    body: "Pricing can vary meaningfully between registered recyclers and smelters depending on their current material needs and processing capacity.",
  },
];

const faqs = [
  {
    q: "Is scrap metal priced the same way everywhere in India?",
    a: "No. While reference prices for metals like copper, aluminium, and zinc are set on global markets, the price a specific seller receives depends on grade, purity, volume, logistics cost, and the buyer's current material needs, so quotes can vary meaningfully between buyers.",
  },
  {
    q: "Does documentation actually affect the price we get?",
    a: "Increasingly, yes. Buyers who need verified, traceable scrap to meet their own Extended Producer Responsibility obligations often place a premium on material that comes with a clear, documented chain of custody over undocumented, informally sourced scrap.",
  },
  {
    q: "Should we sort our scrap before contacting a buyer?",
    a: "Sorting by metal type and grade before you sell is one of the most reliable ways to improve pricing, since it reduces the processing work a recycler or smelter has to do before the material is usable.",
  },
  {
    q: "How do we avoid being underpaid on a large industrial lot?",
    a: "Get quotes from more than one verified buyer, ask each to explain the benchmark their price is based on, and be transparent about condition and grade so the comparison between quotes is genuinely apples to apples.",
  },
];

export default function FairMarketPricingBulkScrapBlog() {
  return (
    <div className="bg-background mt-[10px] min-h-screen">
      

      <div className="max-w-8xl mx-auto px-1 sm:px-2 lg:px-2 py-12">
        <div className="flex flex-col lg:flex-row gap-4">
          <div>
            <section className="relative overflow-hidden border-b border-border mt-[60px]">
        <div className="absolute  inset-0 bg-gradient-to-br from-secondary/10 via-background to-brandGreen/10" />
        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
              <span>Buy &amp; Sell Metals</span>
              <span>/</span>
              <span className="text-brandGreen">Fair Pricing</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Is Your Business Maximizing Revenue on Bulk Scrap? How to
              Secure Fair Market Pricing on Verified Industrial Metal Streams
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Industrial metal scrap does not have one fixed price. It moves
              with global benchmarks, grade, and how well-documented your
              stream is. Here is what actually determines whether you are
              getting a fair deal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <TrendingUp className="h-4 w-4" /> Benchmark-linked pricing
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                <ShieldCheck className="h-4 w-4" /> Verified buyer network
              </span>
            </div>
          </motion.div>
        </div>
      </section>


          <main className="flex-1 min-w-0 space-y-16">
            <Section id="intro" index={0}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Businesses generating industrial metal scrap, machining
                swarf, offcuts, decommissioned equipment, or process
                by-products, often accept whatever price a familiar local
                buyer offers, without checking whether that number actually
                reflects the material's market value. With non-ferrous
                metal scrap now sitting inside a formal regulatory
                framework, understanding how pricing really works is worth
                more than ever.
              </p>
            </Section>

            <Section id="not-one-number" index={1}>
              <SectionHeading
                eyebrow="Set the record straight"
                title="Why 'scrap price' is not a single number"
                icon={BarChart3}
              />
              <p className="text-muted-foreground leading-relaxed">
                Copper, aluminium, and zinc all trade with reference prices
                set on international commodity exchanges. Domestic scrap
                pricing is generally benchmarked against these rates, then
                adjusted down for grade, purity, contamination, and
                processing cost. Two sellers with the same metal but
                different grades or documentation can legitimately receive
                very different quotes.
              </p>
            </Section>

            <Section id="pricing-factors" index={2}>
              <SectionHeading
                eyebrow="What actually moves the price"
                title="The four biggest factors in your quote"
                icon={Gauge}
              />
              <div className="grid sm:grid-cols-2 gap-5 mt-2">
                {pricingFactors.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-card p-5 hover:border-brandGreen/40 transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-brandGreen mb-3" />
                    <h3 className="font-display font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="verified-premium" index={3}>
              <SectionHeading
                eyebrow="The compliance angle"
                title="Why verified scrap is starting to command a premium"
                icon={ShieldCheck}
              />
              <p className="text-muted-foreground leading-relaxed">
                Under the new non-ferrous metal EPR framework, producers can
                meet part of their recycling obligation by purchasing EPR
                certificates issued against verified recycling activity.
                That gives registered recyclers and smelters a growing
                incentive to source scrap they can document, which means a
                well-documented, traceable stream is no longer just a
                compliance nicety, it is a genuine pricing advantage for the
                seller.
              </p>
            </Section>

            <Section id="grade-purity" index={4}>
              <SectionHeading
                eyebrow="The basics still matter"
                title="Grade and purity remain the biggest lever you control"
                icon={Layers}
              />
              <p className="text-muted-foreground leading-relaxed">
                No amount of documentation replaces clean, well-sorted
                material. Mixed alloys, coated metals, and scrap with
                attached non-metal components all require extra processing
                before a smelter can use them, and that cost is reflected
                directly in the price offered. Basic on-site sorting before
                a sale is often the single most effective way to lift your
                return.
              </p>
            </Section>

            <Section id="mistakes" index={5}>
              <SectionHeading
                eyebrow="Avoid these"
                title="Common pricing mistakes that cost sellers money"
                icon={AlertTriangle}
              />
              <div className="rounded-2xl border border-border bg-card p-6">
                <ul className="space-y-3">
                  {pricingMistakes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-brandGreen mt-2 shrink-0" />
                      <span className="text-sm text-foreground/90 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Section>

            <Section id="logistics" index={6}>
              <SectionHeading
                eyebrow="Don't overlook this"
                title="How logistics quietly shapes your net return"
                icon={Truck}
              />
              <p className="text-muted-foreground leading-relaxed">
                Transport cost per tonne drops sharply as volume increases,
                which is part of why consolidated bulk lots are priced more
                favourably than frequent small pickups. If your operation
                generates scrap continuously, planning collection in larger,
                scheduled batches is usually worth more than selling every
                small lot as soon as it accumulates.
              </p>
            </Section>

            <Section id="steps-to-fair-price" index={7}>
              <SectionHeading
                eyebrow="Put it into practice"
                title="How to actually secure a fair market price"
                icon={Coins}
              />
              <div className="space-y-4 mt-2">
                {gettingFairPriceSteps.map((step, idx) => (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brandGreen text-white font-display font-semibold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="documentation" index={8}>
              <SectionHeading
                eyebrow="Protect the deal"
                title="Documentation that backs up your price"
                icon={FileCheck2}
              />
              <p className="text-muted-foreground leading-relaxed">
                A written quote tied to a specific batch, weight, and grade
                protects both sides of the transaction and gives you
                something concrete to compare against future offers. It
                also becomes part of the record a registered recycler needs
                to support their own EPR reporting, which is exactly what
                makes verified scrap streams more valuable in the first
                place.
              </p>
            </Section>

            <Section id="how-we-help" index={9}>
              <SectionHeading
                eyebrow="Where EPR Nexuss fits"
                title="Getting matched with buyers who value verified scrap"
                icon={ShieldCheck}
              />
              <p className="text-muted-foreground leading-relaxed">
                EPR Nexuss connects sellers of industrial metal scrap with
                verified recyclers, smelters, and foundries who are actively
                looking for documented, EPR-eligible material, so you are
                pricing against real demand instead of a single familiar
                buyer's take-it-or-leave-it offer.
              </p>
            </Section>

            <Section id="faqs" index={10}>
              <SectionHeading
                eyebrow="Questions we hear often"
                title="Frequently asked questions"
                icon={HelpCircle}
              />
              <div className="space-y-4">
                {faqs.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <h3 className="font-display font-semibold text-foreground text-sm">
                      {item.q}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="conclusion" index={11}>
              <div className="rounded-2xl bg-primary text-primary-foreground p-8">
                <h2 className="font-display text-2xl font-semibold">
                  Find out what your metal scrap is really worth
                </h2>
                <p className="mt-3 text-primary-foreground/90 leading-relaxed">
                  Share your inventory with EPR Nexuss and get comparative,
                  benchmark-linked quotes from verified buyers.
                </p>
                <a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors">
                  Request a quote <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Section>
          </main>
          </div>

          <aside className="w-full lg:w-[320px] lg:shrink-0">
            <div className="lg:sticky lg:top-24">
              <StickyContactForm />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}