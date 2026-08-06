"use client";

import StickyContactForm from "@/components/StickyContactForm";
import { motion, Variants } from "framer-motion";
import {
  Landmark,
  AlertTriangle,
  ShieldCheck,
  FileCheck2,
  Network,
  Scale,
  Factory,
  Truck,
  XCircle,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Gauge,
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

const whoIsAffected = [
  {
    icon: Factory,
    title: "Producers and manufacturers",
    body: "Any business placing aluminium, copper, zinc, or their alloys into the market, or manufacturing products from them, now carries a recycling obligation tied to what it sells.",
  },
  {
    icon: Truck,
    title: "Collection agents and bulk consumers",
    body: "Bulk consumers of non-ferrous metals are expected to set up collection points and hand scrap only to registered collection agents or recyclers, not informal buyers.",
  },
  {
    icon: Network,
    title: "Recyclers and refurbishers",
    body: "Recycling and refurbishing units that want to issue tradeable EPR certificates need to be registered with the Central Pollution Control Board, not just operating locally with a state license.",
  },
];

const exposurePoints = [
  "Selling scrap to unregistered dealers instead of CPCB-registered recyclers or collection agents",
  "No documented chain of custody from generation to final recycling",
  "Treating metal scrap sourcing as an informal, cash-and-carry transaction",
  "Assuming existing state pollution board consent is sufficient without central portal registration",
  "No internal process for verifying a buyer's or supplier's registration status before a deal",
];

const faqs = [
  {
    q: "Are these new EPR rules for non-ferrous metals actually in force yet?",
    a: "The framework has moved from a 2024 draft notification to a finalised rule under the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, with an enforcement date set for April 1, 2026. Businesses in the aluminium, copper, and zinc supply chain should be preparing now rather than waiting for the deadline.",
  },
  {
    q: "Does this apply only to large industrial producers?",
    a: "No. The framework names producers, manufacturers, recyclers, refurbishers, collection agents, and bulk consumers as regulated stakeholders, which means mid-sized foundries, fabricators, and scrap traders are all in scope, not just the largest metal companies.",
  },
  {
    q: "What happens if we're found non-compliant?",
    a: "Non-compliance that leads to environmental or public health harm can result in environmental compensation imposed by the CPCB after due process, on top of the reputational and commercial risk of being flagged as an unverified link in the supply chain.",
  },
  {
    q: "How do we know if our current supplier is compliant?",
    a: "Ask directly for their CPCB registration status under the non-ferrous metal EPR framework, and request documentation for how scrap is sourced and where it is recycled. A credible, forward-looking supplier should be able to answer both without hesitation.",
  },
];

export default function TraditionalScrapSupplyChainsFinesBlog() {
  return (
    <div className="bg-background mt-[10px] min-h-screen">
      

      <div className="max-w-8xl mx-auto px-1 sm:px-2 lg:px-2 py-12">
        <div className="flex flex-col lg:flex-row gap-4">
          <div>
            <section className="relative overflow-hidden border-b border-border mt-[60px]">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-background to-brandGreen/10" />
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
              <span className="text-brandGreen">Regulatory Risk</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Why Are Traditional Metal Scrap Supply Chains Facing Massive
              Fines Under the New EPR Portal Guidelines?
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              India's non-ferrous metal scrap trade has run informally for
              decades. A new Extended Producer Responsibility framework is
              about to change what "business as usual" costs anyone still
              operating outside a registered, documented supply chain.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Landmark className="h-4 w-4" /> Non-Ferrous Metal EPR
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                <ShieldCheck className="h-4 w-4" /> Effective April 2026
              </span>
            </div>
          </motion.div>
        </div>
      </section>


          <main className="flex-1 min-w-0 space-y-16">
            <Section id="intro" index={0}>
              <p className="text-base leading-relaxed text-muted-foreground">
                For years, non-ferrous metal scrap, aluminium, copper, zinc,
                and their alloys, moved through India's industrial economy
                largely outside formal environmental oversight. That is
                changing. A new Extended Producer Responsibility framework,
                built under the Hazardous and Other Wastes (Management and
                Transboundary Movement) Rules, now brings this entire supply
                chain under a central registration and reporting system, and
                the businesses least prepared for it are the ones still
                buying and selling scrap the old way.
              </p>
            </Section>

            <Section id="what-changed" index={1}>
              <SectionHeading
                eyebrow="The regulation"
                title="What actually changed, in plain terms"
                icon={Landmark}
              />
              <p className="text-muted-foreground leading-relaxed">
                Following a draft notification in August 2024, the Ministry
                of Environment, Forest and Climate Change finalised an
                Extended Producer Responsibility framework specifically for
                scrap of non-ferrous metals, covering aluminium, copper,
                zinc, and their alloys. The rules require producers,
                manufacturers, recyclers, refurbishers, collection agents,
                and bulk consumers to register on a centralised online
                portal operated by the Central Pollution Control Board, and
                to meet progressively increasing recycled-content and
                recycling obligations in the years ahead.
              </p>
            </Section>

            <Section id="who-is-affected" index={2}>
              <SectionHeading
                eyebrow="Who this touches"
                title="Who is actually in scope"
                icon={Network}
              />
              <div className="grid sm:grid-cols-3 gap-5 mt-2">
                {whoIsAffected.map((item) => (
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

            <Section id="why-informal-chains-fail" index={3}>
              <SectionHeading
                eyebrow="The exposure"
                title="Why informal scrap chains are suddenly at risk"
                icon={AlertTriangle}
              />
              <p className="text-muted-foreground leading-relaxed">
                Traditional metal scrap trading has relied on relationships
                and cash transactions rather than documented chains of
                custody. Under the new framework, scrap generated by bulk
                consumers must be handed over only to registered collection
                agents, recyclers, or refurbishers, and producers meet their
                obligations partly by purchasing EPR certificates issued
                against verified, registered recycling activity. A
                transaction with no registration behind it does not count
                toward anyone's compliance, no matter how the price was
                negotiated.
              </p>
            </Section>

            <Section id="exposure-points" index={4}>
              <SectionHeading
                eyebrow="Where the risk hides"
                title="Common exposure points in traditional scrap sourcing"
                icon={Scale}
              />
              <div className="rounded-2xl border border-border bg-card p-6">
                <ul className="space-y-3">
                  {exposurePoints.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Section>

            <Section id="environmental-compensation" index={5}>
              <SectionHeading
                eyebrow="The penalty mechanism"
                title="How environmental compensation actually works"
                icon={Scale}
              />
              <p className="text-muted-foreground leading-relaxed">
                Non-compliance under the framework can trigger environmental
                compensation, a financial penalty imposed by the Central
                Pollution Control Board after due process, when
                non-compliance causes or risks environmental or public
                health harm. Recycling shortfalls can also be carried
                forward for a limited number of years, but that is a
                deferral, not a way to avoid the obligation altogether.
              </p>
            </Section>

            <Section id="registration-portal" index={6}>
              <SectionHeading
                eyebrow="What compliance looks like"
                title="The central registration and certificate system"
                icon={FileCheck2}
              />
              <p className="text-muted-foreground leading-relaxed">
                The CPCB's online portal is designed to be the single point
                of registration, return filing, and EPR certificate trading
                for every stakeholder in the non-ferrous metal scrap chain.
                Producers can meet part of their obligation by purchasing
                EPR certificates from registered recyclers, or refurbishing
                certificates from registered refurbishers, but only
                transactions recorded through this system count.
              </p>
            </Section>

            <Section id="business-case" index={7}>
              <SectionHeading
                eyebrow="Beyond avoiding fines"
                title="Why formalising your supply chain is good business, too"
                icon={Gauge}
              />
              <p className="text-muted-foreground leading-relaxed">
                Foundries and manufacturers that source from registered,
                documented channels get more than legal protection. They
                get predictable supply, verifiable material quality, and a
                paper trail that supports their own EPR and ESG reporting.
                As enforcement ramps up toward the 2026 deadline, that
                predictability becomes a real competitive advantage over
                buyers still scrambling to find compliant suppliers.
              </p>
            </Section>

            <Section id="how-we-help" index={8}>
              <SectionHeading
                eyebrow="Where EPR Nexuss fits"
                title="A verified alternative to the informal scrap market"
                icon={ShieldCheck}
              />
              <p className="text-muted-foreground leading-relaxed">
                EPR Nexuss connects buyers and sellers of non-ferrous metal
                scrap through a network of verified, registered
                participants, so every transaction can be backed by proper
                documentation from day one, well ahead of the compliance
                deadline rather than in a rush to catch up with it.
              </p>
            </Section>

            <Section id="getting-ready" index={9}>
              <SectionHeading
                eyebrow="Practical next steps"
                title="How to start preparing today"
                icon={CheckCircle2}
              />
              <p className="text-muted-foreground leading-relaxed">
                Start by mapping your current suppliers and buyers against
                their registration status, review your internal scrap
                handling process for documentation gaps, and build a
                relationship with at least one CPCB-registered recycler or
                collection agent before the 2026 enforcement date arrives.
                Waiting until the deadline leaves no room to fix a broken
                supply chain.
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
                  Move your metal scrap sourcing onto a verified footing
                </h2>
                <p className="mt-3 text-primary-foreground/90 leading-relaxed">
                  Talk to EPR Nexuss about connecting with registered
                  recyclers and collection agents before the new EPR
                  framework takes full effect.
                </p>
                <a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors">
                  Check your exposure <ArrowRight className="h-4 w-4" />
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