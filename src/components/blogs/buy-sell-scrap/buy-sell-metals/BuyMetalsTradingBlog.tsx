"use client";

import StickyContactForm from "@/components/StickyContactForm";
import { motion, Variants } from "framer-motion";
import {
  Factory,
  ShieldCheck,
  Network,
  Layers,
  FileCheck2,
  AlertTriangle,
  Gauge,
  Handshake,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
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

const informalRisks = [
  {
    icon: AlertTriangle,
    title: "Inconsistent material quality",
    body: "Informal suppliers rarely guarantee alloy grade or contamination levels, which means a foundry finds out about quality problems only after the melt is already underway.",
  },
  {
    icon: XCircle,
    title: "No usable documentation",
    body: "Scrap sourced informally typically comes with no paper trail, which means it cannot support the buyer's own EPR certificate claims under the non-ferrous metal framework.",
  },
  {
    icon: Network,
    title: "Unreliable supply volumes",
    body: "Informal channels depend on personal relationships and local availability, making it hard to plan production around a predictable, scalable feedstock supply.",
  },
];

const marketplaceBenefits = [
  {
    icon: ShieldCheck,
    title: "Verified supplier network",
    body: "Every seller on the EPR Nexuss marketplace is checked against registration status, so foundries and smelters know exactly who they are buying from.",
  },
  {
    icon: Layers,
    title: "Graded, documented material",
    body: "Listings include grade and condition detail upfront, reducing the surprises that come with unsorted, undocumented scrap lots.",
  },
  {
    icon: FileCheck2,
    title: "EPR-eligible paperwork",
    body: "Transactions come with documentation that can support the buyer's own recycling and EPR certificate reporting, not just a receipt for the metal itself.",
  },
  {
    icon: Gauge,
    title: "Comparative, transparent pricing",
    body: "Buyers can compare offers across multiple verified sellers instead of depending on a single informal relationship for pricing.",
  },
];

const switchingSteps = [
  {
    title: "Define your material specification",
    body: "Set out the alloy grades, volumes, and quality thresholds your furnace or process actually needs.",
  },
  {
    title: "Get matched with verified sellers",
    body: "EPR Nexuss connects your requirement with registered suppliers whose current inventory matches your specification.",
  },
  {
    title: "Review documented listings",
    body: "Compare grade, condition, and sourcing documentation across multiple sellers before committing to a purchase.",
  },
  {
    title: "Transact with a paper trail",
    body: "Every purchase is backed by documentation that supports your own compliance and quality assurance records.",
  },
  {
    title: "Build repeat, reliable sourcing",
    body: "Move from one-off spot purchases to a more predictable sourcing relationship with verified suppliers over time.",
  },
];

const faqs = [
  {
    q: "Why would a foundry pay more attention to sourcing now than in the past?",
    a: "With a formal EPR framework now covering non-ferrous metal scrap, foundries and smelters that also act as producers or manufacturers need documented, verified scrap to support their own recycling and certificate obligations, which informal sourcing simply cannot provide.",
  },
  {
    q: "Does using a verified marketplace mean paying a higher price than informal channels?",
    a: "Not necessarily. Verified marketplaces let buyers compare multiple sellers directly, which often surfaces more competitive pricing than depending on a single informal supplier, while also adding documentation value that informal channels cannot offer.",
  },
  {
    q: "Can smaller foundries use a platform like this, or is it only for large smelters?",
    a: "The matching process is designed to work across scale, connecting both large-volume smelters and smaller foundries with verified sellers whose current listings match their specific material needs.",
  },
  {
    q: "What happens if a supplier's registration status changes after we start working with them?",
    a: "A verified marketplace should recheck supplier registration on an ongoing basis, which is one of the practical advantages over an informal relationship where registration status is rarely, if ever, re-confirmed.",
  },
];

export default function ForwardThinkingFoundriesSmeltersMarketplaceBlog() {
  return (
    <div className="bg-background min-h-screen mt-[10px]">
      

      <div className="max-w-8xl mx-auto px-1 sm:px-2 lg:px-2 py-12">
        <div className="flex flex-col lg:flex-row gap-4">
          <div>
            <section className="relative overflow-hidden border-b border-border mt-[60px]">
        <div className="absolute inset-0 bg-gradient-to-br from-brandGreen/10 via-background to-secondary/10" />
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
              <span className="text-brandGreen">Verified Marketplace</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Why Forward-Thinking Foundries and Smelters Prefer the EPR
              Nexuss Verified Marketplace Over Informal Sourcing Channels
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              As non-ferrous metal scrap moves under a formal Extended
              Producer Responsibility framework, the foundries and smelters
              sourcing it well ahead of the curve are the ones already
              working through verified, documented channels.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Factory className="h-4 w-4" /> Built for foundries &amp;
                smelters
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                <ShieldCheck className="h-4 w-4" /> Verified suppliers only
              </span>
            </div>
          </motion.div>
        </div>
      </section>


          <main className="flex-1 min-w-0 space-y-16">
            <Section id="intro" index={0}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Foundries and smelters have historically sourced non-ferrous
                metal scrap through informal, relationship-based channels,
                local dealers, personal networks, and word of mouth. That
                approach worked when there was no formal compliance
                framework attached to where scrap came from. With a
                dedicated EPR regime now covering aluminium, copper, and
                zinc scrap, sourcing strategy itself has become a
                compliance and quality decision, not just a cost one.
              </p>
            </Section>

            <Section id="informal-problem" index={1}>
              <SectionHeading
                eyebrow="The old way"
                title="What informal sourcing channels actually cost you"
                icon={AlertTriangle}
              />
              <div className="grid sm:grid-cols-3 gap-5 mt-2">
                {informalRisks.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5"
                  >
                    <item.icon className="h-5 w-5 text-destructive mb-3" />
                    <h3 className="font-display font-semibold text-foreground text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="what-foundries-need" index={2}>
              <SectionHeading
                eyebrow="What actually matters"
                title="What a modern foundry or smelter operation actually needs"
                icon={Factory}
              />
              <p className="text-muted-foreground leading-relaxed">
                Beyond price, a foundry needs predictable grade and
                consistency to plan melt schedules, a supply volume it can
                rely on for production planning, and increasingly,
                documentation that supports its own reporting under the
                non-ferrous metal EPR framework. Informal channels have
                never been built to deliver on that third requirement.
              </p>
            </Section>

            <Section id="marketplace-model" index={3}>
              <SectionHeading
                eyebrow="The alternative"
                title="How a verified marketplace changes the equation"
                icon={Network}
              />
              <div className="grid sm:grid-cols-2 gap-5 mt-2">
                {marketplaceBenefits.map((item) => (
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

            <Section id="quality-consistency" index={4}>
              <SectionHeading
                eyebrow="Fewer surprises"
                title="Quality and consistency, not just compliance"
                icon={Layers}
              />
              <p className="text-muted-foreground leading-relaxed">
                A verified marketplace is not only about registration
                status. Listings that specify grade, alloy composition, and
                condition upfront let a foundry plan its charge mix with
                more confidence, reducing the rejected batches and
                unexpected downtime that come from unpredictable informal
                supply.
              </p>
            </Section>

            <Section id="epr-alignment" index={5}>
              <SectionHeading
                eyebrow="The compliance advantage"
                title="Sourcing that actually supports your EPR obligations"
                icon={FileCheck2}
              />
              <p className="text-muted-foreground leading-relaxed">
                Where a smelter or foundry is itself a registered producer
                or manufacturer under the non-ferrous metal EPR framework,
                sourcing documented, verified scrap directly supports the
                recycled-content and certificate requirements it needs to
                report against. That turns sourcing strategy into part of
                the compliance strategy, rather than a separate, disconnected
                process.
              </p>
            </Section>

            <Section id="how-it-works" index={6}>
              <SectionHeading
                eyebrow="The process"
                title="How foundries and smelters switch to verified sourcing"
                icon={Handshake}
              />
              <div className="space-y-4 mt-2">
                {switchingSteps.map((step, idx) => (
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

            <Section id="risk-reduction" index={7}>
              <SectionHeading
                eyebrow="Lower your exposure"
                title="Reducing regulatory and reputational risk"
                icon={ShieldCheck}
              />
              <p className="text-muted-foreground leading-relaxed">
                Buying scrap from unregistered informal sources exposes a
                foundry or smelter to the same compliance risk as selling
                into an informal channel does for a waste generator. As
                enforcement of the non-ferrous metal EPR framework
                increases, being able to demonstrate a verified,
                documented sourcing chain becomes a genuine protection, not
                just good practice.
              </p>
            </Section>

            <Section id="comparison" index={8}>
              <SectionHeading
                eyebrow="Side by side"
                title="Verified marketplace vs. informal sourcing"
                icon={Gauge}
              />
              <div className="grid sm:grid-cols-2 gap-5 mt-2">
                <div className="rounded-2xl bg-brandGreen/5 border border-brandGreen/30 p-6">
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    Verified marketplace
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Registration checked before listing",
                      "Grade and condition disclosed upfront",
                      "Documentation supports EPR reporting",
                      "Multiple sellers to compare",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-foreground/90">
                        <CheckCircle2 className="h-4 w-4 text-brandGreen shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-destructive/5 border border-destructive/20 p-6">
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    Informal sourcing
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Registration status rarely confirmed",
                      "Quality and grade often unclear until delivery",
                      "Little to no usable documentation",
                      "Pricing set by a single relationship",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-foreground/90">
                        <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            <Section id="faqs" index={9}>
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

            <Section id="conclusion" index={10}>
              <div className="rounded-2xl bg-primary text-primary-foreground p-8">
                <h2 className="font-display text-2xl font-semibold">
                  Source your next batch through a verified network
                </h2>
                <p className="mt-3 text-primary-foreground/90 leading-relaxed">
                  Tell EPR Nexuss what your furnace needs and get matched
                  with registered, documented sellers of non-ferrous metal
                  scrap.
                </p>
                <a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors">
                  Find verified sellers <ArrowRight className="h-4 w-4" />
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