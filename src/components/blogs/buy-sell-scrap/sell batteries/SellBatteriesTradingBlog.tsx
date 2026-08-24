"use client";

import StickyContactForm from "@/components/StickyContactForm";
import { motion, Variants } from "framer-motion";
import {
  Handshake,
  Network,
  ShieldCheck,
  Search,
  FileCheck2,
  Truck,
  Building2,
  Users,
  Recycle,
  HelpCircle,
  ArrowRight,
  Landmark,
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

const ecosystemRoles = [
  {
    icon: Building2,
    title: "Producers and brand owners",
    body: "Battery and equipment manufacturers carry Extended Producer Responsibility obligations and need a steady, documented supply of recycled material to meet their targets.",
  },
  {
    icon: Users,
    title: "Sellers and waste generators",
    body: "Businesses, fleets, and facilities holding end-of-life batteries need a compliant, fair-value outlet, but rarely have visibility into which recyclers are properly registered.",
  },
  {
    icon: Recycle,
    title: "Registered recyclers and refurbishers",
    body: "CPCB and State Pollution Control Board registered processors need consistent, well-sorted feedstock to run efficiently, but sourcing directly from thousands of small sellers is slow and costly.",
  },
];

const platformSteps = [
  {
    title: "Submit your battery inventory",
    body: "Tell EPR Nexuss what you are holding, chemistry, approximate volume, and condition, through a simple intake process.",
  },
  {
    title: "Get matched with a verified recycler",
    body: "EPR Nexuss routes your listing to registered recyclers or refurbishers whose current capacity and licensing match your specific waste stream.",
  },
  {
    title: "Receive a documented quote",
    body: "Compare offers with clear pricing logic instead of a single unverifiable number from an unknown buyer.",
  },
  {
    title: "Coordinate compliant pickup",
    body: "Transport is arranged with proper manifest documentation, so the chain of custody for hazardous waste is recorded from your site to the recycler's facility.",
  },
  {
    title: "Get your compliance paperwork",
    body: "Once processed, you receive documentation confirming recycling, which you can retain for your own environmental and audit records.",
  },
];

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "Registration verification",
    body: "Every recycler and refurbisher in the network is checked against CPCB and State Pollution Control Board registration records before being onboarded.",
  },
  {
    icon: FileCheck2,
    title: "Documentation on every transaction",
    body: "Manifests, quotes, and recycling confirmations are tracked so both sellers and recyclers have a clear paper trail if questioned by regulators or auditors.",
  },
  {
    icon: Search,
    title: "Ongoing capacity matching",
    body: "Recycler capacity changes over time. Matching sellers to partners who currently have processing bandwidth avoids the delays common with a single fixed buyer relationship.",
  },
];

const faqs = [
  {
    q: "What exactly does EPR Nexuss do in the transaction?",
    a: "EPR Nexuss acts as the connective layer between businesses holding battery waste and registered recyclers or refurbishers who can legally process it, handling verification, matching, and documentation so both sides can transact with confidence.",
  },
  {
    q: "Why not just sell directly to a local scrap buyer?",
    a: "A local buyer may not be registered under the Battery Waste Management Rules, 2022, which means the sale falls outside the compliant recycling chain and generates no EPR credit or documentation for either party.",
  },
  {
    q: "Does EPR Nexuss handle both lead-acid and lithium-ion batteries?",
    a: "Yes. The platform works with recyclers across chemistries, since lead-acid and lithium-ion waste streams typically go to different specialised processors within the same regulatory framework.",
  },
  {
    q: "Is this only useful for large-volume sellers?",
    a: "No. While consolidated volumes are efficient for recyclers, the matching process is designed to work for both large industrial generators and smaller commercial sellers who still need a compliant, verified outlet.",
  },
];

export default function EprNexussBridgesSellersRecyclersBlog() {
  return (
    <div className="bg-background mt-[120px] min-h-screen">
      <section className="relative overflow-hidden border-b border-border mt-[60px]">
        <div className="absolute inset-0 bg-gradient-to-br from-brandGreen/10 via-background to-primary/10" />
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
              <span className="text-brandGreen">The EPR Nexuss Model</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Turning Battery Waste into a Legal Asset: How EPR Nexuss
              Bridges the Gap Between Sellers and Registered Recyclers
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Compliant battery recycling in India involves three parties
              who rarely find each other easily on their own: waste
              generators, registered recyclers, and the regulatory system
              tracking it all. Here is how a bridge platform closes that gap.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Handshake className="h-4 w-4" /> Verified recycler network
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                <FileCheck2 className="h-4 w-4" /> Full documentation trail
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-8xl mx-auto px-1 sm:px-2 lg:px-2 py-12">
        <div className="flex flex-col lg:flex-row gap-4">
          <main className="flex-1 min-w-0 space-y-16">
            <Section id="intro" index={0}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Most businesses generating battery waste are not experts in
                environmental regulation, and most registered recyclers are
                focused on running efficient processing operations, not
                marketing to individual sellers. That gap is exactly where
                unregistered middlemen have historically stepped in, often
                offering convenience at the cost of compliance. EPR Nexuss
                exists to close that gap directly.
              </p>
            </Section>

            <Section id="ecosystem" index={1}>
              <SectionHeading
                eyebrow="The three sides of the market"
                title="Who actually makes up the battery recycling ecosystem"
                icon={Network}
              />
              <div className="grid sm:grid-cols-3 gap-5 mt-2">
                {ecosystemRoles.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <item.icon className="h-5 w-5 text-brandGreen mb-3" />
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

            <Section id="the-gap" index={2}>
              <SectionHeading
                eyebrow="The problem"
                title="Why the gap exists in the first place"
                icon={Landmark}
              />
              <p className="text-muted-foreground leading-relaxed">
                The Battery Waste Management Rules, 2022 set up a clear
                framework on paper, registration for recyclers and
                refurbishers, Extended Producer Responsibility obligations
                for producers, and a CPCB portal to track certificates. But
                a facilities manager trying to clear out a warehouse of used
                UPS batteries has no easy way to find, verify, and negotiate
                with a registered processor directly. That friction is what
                keeps informal, unregistered buyers in business.
              </p>
            </Section>

            <Section id="how-it-works" index={3}>
              <SectionHeading
                eyebrow="The process"
                title="How EPR Nexuss connects sellers to recyclers"
                icon={Handshake}
              />
              <div className="space-y-4 mt-2">
                {platformSteps.map((step, idx) => (
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

            <Section id="trust" index={4}>
              <SectionHeading
                eyebrow="Why it's reliable"
                title="What keeps the network trustworthy"
                icon={ShieldCheck}
              />
              <div className="grid sm:grid-cols-3 gap-5 mt-2">
                {trustPillars.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <item.icon className="h-5 w-5 text-brandGreen mb-3" />
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

            <Section id="for-sellers" index={5}>
              <SectionHeading
                eyebrow="On the seller's side"
                title="What sellers gain from a bridge platform"
                icon={Users}
              />
              <p className="text-muted-foreground leading-relaxed">
                Sellers get access to multiple verified recyclers instead of
                relying on whichever buyer happens to show up, along with
                documentation that protects them if their disposal process
                is ever reviewed by an auditor or regulator. That is a
                meaningfully different position than depending on a single,
                unverified relationship built on trust alone.
              </p>
            </Section>

            <Section id="for-recyclers" index={6}>
              <SectionHeading
                eyebrow="On the recycler's side"
                title="What registered recyclers gain in return"
                icon={Recycle}
              />
              <p className="text-muted-foreground leading-relaxed">
                Registered recyclers gain a steadier, better-sorted flow of
                feedstock, which supports the recycling volumes they need to
                report against EPR obligations, without having to build and
                staff their own sourcing network from scratch across every
                city and industry sector.
              </p>
            </Section>

            <Section id="why-not-direct" index={7}>
              <SectionHeading
                eyebrow="Direct vs. bridged"
                title="Why going direct isn't always simpler"
                icon={Search}
              />
              <p className="text-muted-foreground leading-relaxed">
                Even when a seller does find a registered recycler on their
                own, there is no guarantee that recycler currently has
                capacity for their specific chemistry or volume, or offers
                competitive pricing compared to others in the market. A
                platform that matches across a verified network removes
                that guesswork and gives sellers a point of comparison.
              </p>
            </Section>

            <Section id="documentation" index={8}>
              <SectionHeading
                eyebrow="Paper trail"
                title="The documentation that makes it a legal asset"
                icon={FileCheck2}
              />
              <p className="text-muted-foreground leading-relaxed">
                A transaction only becomes a genuine compliance asset when
                it is documented: a manifest for the transport leg, and a
                confirmation of recycling once processing is complete. EPR
                Nexuss builds this documentation into the transaction flow
                itself, rather than leaving it to be requested and chased
                down after the fact.
              </p>
            </Section>

            <Section id="logistics" index={9}>
              <SectionHeading
                eyebrow="Getting it there safely"
                title="Compliant transport, handled end to end"
                icon={Truck}
              />
              <p className="text-muted-foreground leading-relaxed">
                Battery waste is hazardous waste, and moving it requires
                appropriate packaging and manifest documentation regardless
                of chemistry. Coordinating pickup through the platform means
                the transport leg is planned with the recycler's
                requirements in mind from the start, reducing the chance of
                a shipment being rejected or delayed at the recycler's gate.
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
                  Let EPR Nexuss bridge the gap for you
                </h2>
                <p className="mt-3 text-primary-foreground/90 leading-relaxed">
                  Submit your battery inventory and get matched with a
                  verified, registered recycler, backed by documentation at
                  every step.
                </p>
                <a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors">
                  Start the match <ArrowRight className="h-4 w-4" />
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