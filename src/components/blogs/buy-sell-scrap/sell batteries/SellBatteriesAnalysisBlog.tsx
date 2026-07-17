"use client";

import StickyContactForm from "@/components/StickyContactForm";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  AlertTriangle,
  FileCheck2,
  Battery,
  BatteryCharging,
  ClipboardCheck,
  Truck,
  Scale,
  XCircle,
  CheckCircle2,
  ArrowRight,
  Landmark,
  Warehouse,
  Recycle,
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

const storageRisks = [
  {
    icon: AlertTriangle,
    title: "Unlabeled or mixed chemistries",
    body: "Lead-acid and lithium-ion cells stored together without clear labeling create fire and acid-leak risks, and make it impossible for a registered recycler to quote an accurate price.",
  },
  {
    icon: Warehouse,
    title: "No secondary containment",
    body: "Battery Waste Management Rules, 2022 requires waste batteries to be stored in a manner that prevents damage, leakage, and environmental contamination before collection.",
  },
  {
    icon: FileCheck2,
    title: "Missing waste inventory records",
    body: "Auditors and recyclers both expect a running log of battery type, quantity, and date of decommissioning. Without it, buyers discount your offer to cover their own compliance risk.",
  },
];

const complianceChecklist = [
  "Segregate lead-acid, lithium-ion, and other chemistries in clearly marked, ventilated storage areas",
  "Keep terminals insulated or capped to prevent short circuits during storage and transport",
  "Maintain a battery waste register with acquisition date, chemistry, weight, and condition",
  "Store away from heat sources, direct sunlight, and incompatible chemicals",
  "Use spill trays or acid-resistant flooring for lead-acid battery storage",
  "Verify the buyer's CPCB or State Pollution Control Board registration before releasing stock",
  "Insist on a manifest or transport document for every outbound consignment",
  "Retain copies of EPR-linked recycling certificates issued after the sale",
];

const sellSteps = [
  {
    title: "Audit your inventory",
    body: "Count units by chemistry, capacity, and condition. A clean inventory sheet is the single biggest driver of a fast, fair quote.",
  },
  {
    title: "Confirm the buyer's registration",
    body: "Only sell to entities registered as recyclers or refurbishers under the Battery Waste Management Rules, 2022. Ask for their CPCB registration number directly.",
  },
  {
    title: "Request a documented quote",
    body: "A credible buyer prices lead-acid by weight and lithium-ion by chemistry, capacity, and residual charge, and puts the basis of the quote in writing.",
  },
  {
    title: "Arrange compliant transport",
    body: "Batteries are transported as hazardous waste under manifest documentation, with proper packaging to prevent short-circuit or leakage in transit.",
  },
  {
    title: "Collect your EPR certificate",
    body: "Once processed, a registered recycler can issue documentation confirming the battery waste was recycled, which your company can retain for its own compliance records.",
  },
];

const nonComplianceRisks = [
  {
    icon: Scale,
    title: "Environmental compensation",
    body: "Selling to unregistered dealers can expose a company to environmental compensation and enforcement action under the Environment (Protection) Act, 1986.",
  },
  {
    icon: XCircle,
    title: "Loss of EPR credit",
    body: "Waste sold outside the formal system generates no EPR certificate, which means the producer or brand owner up the chain cannot claim recycling credit for it.",
  },
  {
    icon: AlertTriangle,
    title: "Workplace safety incidents",
    body: "Improperly stored or handled lithium-ion waste is a documented fire risk; damaged cells can go into thermal runaway even while idle in a warehouse.",
  },
];

const faqs = [
  {
    q: "Can any scrap dealer legally buy our industrial batteries?",
    a: "No. Under the Battery Waste Management Rules, 2022, waste batteries can only be handed over to entities registered as recyclers, refurbishers, or authorised collection agents. A generic scrap dealer without this registration is not a compliant outlet, even if they offer a competitive price.",
  },
  {
    q: "Do lithium-ion and lead-acid batteries follow the same disposal process?",
    a: "Both fall under the same rulebook, but they are handled differently in practice. Lead-acid batteries are valued largely by lead content and weight, while lithium-ion batteries are assessed by chemistry, cell health, and recoverable metals such as cobalt, nickel, and lithium.",
  },
  {
    q: "What paperwork should we receive after the sale?",
    a: "At minimum, expect a signed transport manifest and, once processing is complete, documentation from the recycler confirming the batch was recycled. Keep both with your internal compliance records.",
  },
  {
    q: "How long can we store used batteries before selling them?",
    a: "The rules do not fix a single universal holding period, but batteries should not be stockpiled indefinitely in conditions that risk leakage, corrosion, or fire. Selling in planned batches to a registered recycler is safer than long-term accumulation.",
  },
];

export default function LegallySellIndustrialBatteriesBlog() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
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
              <span>Sell Batteries</span>
              <span>/</span>
              <span className="text-brandGreen">Compliance Guide</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Is Your Stored Lead-Acid and Lithium Waste Compliant? How to
              Legally Sell Industrial Batteries for Maximum Returns
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Every pallet of spent industrial batteries sitting in a
              warehouse is both a liability and an asset. Sell it the wrong
              way and you risk penalties and safety incidents. Sell it the
              right way and you turn hazardous waste into documented,
              audit-ready revenue.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <ShieldCheck className="h-4 w-4" /> EPR Compliant Process
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                <BatteryCharging className="h-4 w-4" /> Lead-Acid &amp;
                Lithium-Ion
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
                Industrial and commercial operations across India accumulate
                used batteries faster than most facilities managers realise:
                UPS banks reach end of life, forklift and telecom batteries
                are swapped out, and decommissioned equipment leaves lithium
                packs behind. The Battery Waste Management Rules, 2022
                brought all of this under a single Extended Producer
                Responsibility framework, which means the way you store,
                document, and sell this waste is no longer a back-office
                detail. It is a compliance obligation with real financial
                upside when done correctly.
              </p>
            </Section>

            <Section id="why-compliance-matters" index={1}>
              <SectionHeading
                eyebrow="Regulatory context"
                title="Why battery compliance is now a boardroom issue"
                icon={Landmark}
              />
              <p className="text-muted-foreground leading-relaxed">
                Before 2022, waste battery management in India was governed
                by rules dating back to 2001, written for a market with far
                less lithium-ion penetration. The Battery Waste Management
                Rules, 2022, notified by the Ministry of Environment, Forest
                and Climate Change, replaced that framework and extended
                Extended Producer Responsibility to cover portable,
                automotive, industrial, and electric vehicle batteries alike.
                For any company generating battery waste, this means the
                counterparty you sell to, and the paper trail you keep, are
                now directly tied to national recycling targets.
              </p>
            </Section>

            <Section id="storage-risks" index={2}>
              <SectionHeading
                eyebrow="Before the sale"
                title="Common storage mistakes that create compliance risk"
                icon={Warehouse}
              />
              <div className="grid sm:grid-cols-2 gap-5 mt-2">
                {storageRisks.map((item) => (
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

            <Section id="chemistry-differences" index={3}>
              <SectionHeading
                eyebrow="Know your waste"
                title="Lead-acid vs. lithium-ion: different risks, different value"
                icon={Battery}
              />
              <div className="grid sm:grid-cols-2 gap-5 mt-2">
                <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6">
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    Lead-acid batteries
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Heavy, corrosive, and highly recyclable, lead-acid
                    batteries are valued primarily on weight and lead
                    content. Nearly all of the lead and plastic casing in a
                    properly processed unit can be recovered, which is why
                    formal recyclers can offer stable, predictable pricing.
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary/10 border border-secondary/30 p-6">
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    Lithium-ion batteries
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Valued for recoverable cobalt, nickel, copper, and
                    lithium, but priced with more variability, since state
                    of health, cell swelling, and chemistry (LFP vs NMC, for
                    example) all change what a recycler can safely extract.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="checklist" index={4}>
              <SectionHeading
                eyebrow="Get audit-ready"
                title="The pre-sale compliance checklist"
                icon={ClipboardCheck}
              />
              <div className="rounded-2xl border border-border bg-card p-6">
                <ul className="space-y-3">
                  {complianceChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brandGreen shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Section>

            <Section id="how-to-sell" index={5}>
              <SectionHeading
                eyebrow="Step by step"
                title="How to legally sell industrial battery waste"
                icon={Truck}
              />
              <div className="space-y-4 mt-2">
                {sellSteps.map((step, idx) => (
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

            <Section id="risks" index={6}>
              <SectionHeading
                eyebrow="What's at stake"
                title="The real cost of selling to unregistered buyers"
                icon={AlertTriangle}
              />
              <div className="grid sm:grid-cols-3 gap-5 mt-2">
                {nonComplianceRisks.map((item) => (
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

            <Section id="maximise-returns" index={7}>
              <SectionHeading
                eyebrow="Get the best price"
                title="How to maximise returns without cutting corners"
                icon={Gauge}
              />
              <p className="text-muted-foreground leading-relaxed">
                Compliance and profitability are not competing goals. A
                registered recycler needs accurate volume and chemistry data
                to plan logistics and processing, so a well-documented,
                pre-sorted consignment consistently attracts a better quote
                than a mixed, undocumented pile. Selling in consolidated
                batches, keeping cells uncontaminated by moisture or
                physical damage, and negotiating directly with a registered
                processor instead of a middleman all protect your margin.
              </p>
            </Section>

            <Section id="how-epr-nexuss-helps" index={8}>
              <SectionHeading
                eyebrow="Where we fit in"
                title="How EPR Nexuss simplifies the process"
                icon={Recycle}
              />
              <p className="text-muted-foreground leading-relaxed">
                EPR Nexuss works with verified, registered recyclers across
                India to help businesses move stored battery waste through a
                documented, compliant channel. Instead of chasing down
                registration certificates yourself, you get connected to a
                vetted recycling partner, along with the paperwork trail
                your compliance and finance teams will ask for later.
              </p>
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
                  Ready to clear your battery inventory the right way?
                </h2>
                <p className="mt-3 text-primary-foreground/90 leading-relaxed">
                  Talk to EPR Nexuss about connecting your stored lead-acid
                  and lithium-ion batteries with a registered recycler, so
                  you get a fair, documented price and stay on the right
                  side of the Battery Waste Management Rules, 2022.
                </p>
                <a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors">
                  Get a compliant quote <ArrowRight className="h-4 w-4" />
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