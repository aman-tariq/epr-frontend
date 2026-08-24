"use client";

import StickyContactForm from "@/components/StickyContactForm";
import { motion, Variants } from "framer-motion";
import {
  Coins,
  TrendingUp,
  BatteryCharging,
  Layers,
  Gauge,
  AlertTriangle,
  FileCheck2,
  Globe,
  Leaf,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  BarChart3,
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

const valueDrivers = [
  {
    icon: Layers,
    title: "Chemistry",
    body: "LFP (lithium iron phosphate), NMC (nickel manganese cobalt), and LCO cells recover different materials in different proportions, so chemistry is the first thing a recycler checks, not the last.",
  },
  {
    icon: Gauge,
    title: "State of health",
    body: "A pack with high remaining capacity may be a better candidate for refurbishment or second-life use than for recycling, which usually commands a different price than pure material recovery.",
  },
  {
    icon: BatteryCharging,
    title: "Form factor",
    body: "Cylindrical cells, prismatic cells, and pouch cells are dismantled differently. Uniform, well-labelled packs are faster and cheaper for a recycler to process than mixed, unlabelled lots.",
  },
  {
    icon: ShieldCheck,
    title: "Physical condition",
    body: "Swollen, punctured, or visibly damaged cells require specialised handling and safe discharge before processing, which adds cost and can lower the price a recycler is willing to offer.",
  },
];

const marketForces = [
  {
    title: "Global commodity cycles",
    body: "Lithium carbonate, cobalt, and nickel are traded on global markets, and their prices move with EV demand, mining output, and battery manufacturing capacity worldwide. Recycled scrap value tracks these cycles with a lag.",
  },
  {
    title: "Domestic recycling capacity",
    body: "As more CPCB-registered recycling facilities come online in India, competition for feedstock increases, which can improve the price sellers receive for consistent, well-documented volumes.",
  },
  {
    title: "EPR obligations of producers",
    body: "Because battery producers must meet Extended Producer Responsibility recycling obligations, registered recyclers have a standing need for consistent volumes of end-of-life battery waste, not just a one-time spot demand.",
  },
];

const undervalueMistakes = [
  "Selling mixed chemistries in a single unsorted lot",
  "Storing damaged or swollen cells alongside healthy ones without separation",
  "Skipping a written quote and accepting a verbal, unverifiable price",
  "Selling in small, irregular batches instead of consolidated volumes",
  "Not asking whether the buyer is a registered recycler or an unregistered aggregator",
  "Failing to disclose known damage, which erodes trust and future pricing",
];

const faqs = [
  {
    q: "Is there a fixed market rate for lithium-ion scrap in India?",
    a: "No single published rate applies everywhere. Pricing depends on chemistry, condition, volume, and the recycler's current processing capacity, and it moves with global commodity prices for lithium, cobalt, and nickel. Any quote should be treated as time-bound and specific to your batch.",
  },
  {
    q: "Do damaged or swollen batteries still have scrap value?",
    a: "Often yes, but less than healthy cells, and they require careful, compliant handling to prevent fire risk. A registered recycler will usually still take them, but expect a lower per-unit price to cover the extra safety measures involved.",
  },
  {
    q: "Does selling in bulk get a better price than selling piecemeal?",
    a: "Generally yes. Consolidated, well-documented volumes reduce a recycler's collection and processing overhead, which is typically reflected in a more competitive quote compared to frequent small pickups.",
  },
  {
    q: "How can we get an accurate, current quote?",
    a: "Share an inventory breakdown by chemistry, approximate weight or unit count, and condition with a registered recycler or a platform like EPR Nexuss, and ask for a written quote tied to that specific batch rather than a generic per-kilogram figure.",
  },
];

export default function ScrapValueLithiumIonBlog() {
  return (
    <div className="bg-background mt-[120px] min-h-screen">
      <section className="relative overflow-hidden border-b border-border mt-[60px]">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-brandGreen/10" />
        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
              <span>Sell Batteries</span>
              <span>/</span>
              <span className="text-brandGreen">Scrap Value</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Are You Missing Out on Cash? What Is the Current Scrap Value of
              Commercial Lithium-Ion Batteries?
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Lithium-ion scrap value is not a fixed number you can look up
              once and forget. It shifts with commodity markets, battery
              condition, and how well your batch is sorted and documented.
              Here is what actually moves the price.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <TrendingUp className="h-4 w-4" /> Market-linked pricing
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                <Coins className="h-4 w-4" /> No fixed rate — get a real quote
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-2 py-12">
        <div className="flex flex-col lg:flex-row gap-4">
          <main className="flex-1 min-w-0 space-y-16">
            <Section id="intro" index={0}>
              <p className="text-base leading-relaxed text-muted-foreground">
                If your business is sitting on retired UPS packs, telecom
                batteries, EV fleet cells, or industrial energy storage
                units, a natural question comes up fast: what are they
                actually worth? The honest answer is that scrap value for
                commercial lithium-ion batteries is a moving target, driven
                by global metal markets and the specific condition of your
                batch, not a single published price list.
              </p>
            </Section>

            <Section id="why-fluctuates" index={1}>
              <SectionHeading
                eyebrow="Set expectations"
                title="Why lithium-ion scrap value changes constantly"
                icon={TrendingUp}
              />
              <p className="text-muted-foreground leading-relaxed">
                Unlike lead-acid batteries, where lead content gives buyers a
                fairly stable pricing benchmark, lithium-ion packs contain a
                mix of recoverable materials, cobalt, nickel, copper, and
                lithium itself, whose prices are set on international
                commodity markets. When demand for electric vehicles or grid
                storage shifts globally, the price recyclers can afford to
                pay for scrap shifts with it. Treat any number you hear as a
                snapshot, not a permanent rate.
              </p>
            </Section>

            <Section id="value-drivers" index={2}>
              <SectionHeading
                eyebrow="What actually sets the price"
                title="The four biggest drivers of scrap value"
                icon={BarChart3}
              />
              <div className="grid sm:grid-cols-2 gap-5 mt-2">
                {valueDrivers.map((item) => (
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

            <Section id="how-evaluated" index={3}>
              <SectionHeading
                eyebrow="Behind the quote"
                title="How a registered recycler actually evaluates your batteries"
                icon={Gauge}
              />
              <p className="text-muted-foreground leading-relaxed">
                Before quoting a price, a credible recycler typically wants
                to know the chemistry breakdown of your lot, approximate
                total weight or unit count, whether packs are intact or
                damaged, and whether battery management systems are still
                attached. This is not bureaucracy for its own sake, it
                directly affects how much material can be safely and
                economically recovered, which is what the price is based on.
              </p>
            </Section>

            <Section id="market-forces" index={4}>
              <SectionHeading
                eyebrow="Bigger picture"
                title="The market forces behind today's pricing"
                icon={Globe}
              />
              <div className="space-y-4 mt-2">
                {marketForces.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <h3 className="font-display font-semibold text-foreground text-sm">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="damage-condition" index={5}>
              <SectionHeading
                eyebrow="Handle with care"
                title="How damage and poor storage quietly erode value"
                icon={AlertTriangle}
              />
              <p className="text-muted-foreground leading-relaxed">
                A swollen or punctured lithium-ion cell is not just worth
                less, it is genuinely more dangerous to store and transport.
                Moisture exposure, physical crushing, and prolonged storage
                in high heat all degrade cells further and add safety
                handling costs that a recycler will factor into the price
                they can offer. Careful storage from day one protects both
                safety and resale value.
              </p>
            </Section>

            <Section id="mistakes" index={6}>
              <SectionHeading
                eyebrow="Avoid these"
                title="Common mistakes that leave money on the table"
                icon={FileCheck2}
              />
              <div className="rounded-2xl border border-border bg-card p-6">
                <ul className="space-y-3">
                  {undervalueMistakes.map((item) => (
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

            <Section id="getting-a-quote" index={7}>
              <SectionHeading
                eyebrow="Do this instead"
                title="How to get a realistic, current quote"
                icon={Coins}
              />
              <p className="text-muted-foreground leading-relaxed">
                Prepare a simple inventory: chemistry type, approximate
                weight or cell count, general condition, and whether the
                units are intact packs or loose cells. Share this with a
                registered recycler or through EPR Nexuss's network, and ask
                for a written quote tied specifically to that batch. Compare
                more than one quote where possible, since pricing can vary
                between recyclers based on their current processing
                capacity and material needs.
              </p>
            </Section>

            <Section id="beyond-price" index={8}>
              <SectionHeading
                eyebrow="It's not only about cash"
                title="The value beyond the invoice"
                icon={Leaf}
              />
              <p className="text-muted-foreground leading-relaxed">
                Recycling lithium-ion batteries through a registered
                channel recovers materials like cobalt and nickel that
                would otherwise need fresh mining, and keeps hazardous
                waste out of informal, unsafe recycling operations. For
                many businesses, documented, compliant disposal also
                supports internal ESG and sustainability reporting
                alongside the direct cash return.
              </p>
            </Section>

            <Section id="how-we-help" index={9}>
              <SectionHeading
                eyebrow="Where EPR Nexuss fits"
                title="Getting the best price without the guesswork"
                icon={ShieldCheck}
              />
              <p className="text-muted-foreground leading-relaxed">
                EPR Nexuss connects businesses with vetted, registered
                recyclers and helps structure your inventory for the best
                possible quote, so you are not negotiating blind or
                relying on a single buyer's number. You get transparent
                pricing logic and the compliance paperwork to go with it.
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
                  Find out what your battery inventory is really worth
                </h2>
                <p className="mt-3 text-primary-foreground/90 leading-relaxed">
                  Share your inventory details with EPR Nexuss and get a
                  current, batch-specific quote from a registered recycler,
                  not a guess based on an outdated number.
                </p>
                <a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors">
                  Request a live quote <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Section>
          </main>

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