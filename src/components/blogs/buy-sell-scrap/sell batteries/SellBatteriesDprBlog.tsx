"use client";

import StickyContactForm from "@/components/StickyContactForm";
import { motion, Variants } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  ClipboardList,
  Flame,
  Truck,
  FileCheck2,
  Coins,
  Leaf,
  Network,
  HelpCircle,
  ArrowRight,
  AlertTriangle,
  MapPin,
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

const safetyProtocols = [
  {
    icon: Flame,
    title: "Fire risk management",
    body: "Damaged or swollen lithium-ion cells can enter thermal runaway even while idle. Store them separately, away from heat sources and flammable materials, ideally in fire-rated cabinets.",
  },
  {
    icon: ShieldCheck,
    title: "Personal protective equipment",
    body: "Staff handling lead-acid batteries should have access to acid-resistant gloves and eye protection, given the corrosive electrolyte inside.",
  },
  {
    icon: MapPin,
    title: "Designated storage zones",
    body: "A ventilated, bunded area with spill containment for lead-acid, and a cool, dry, monitored area for lithium-ion, keeps both chemistries safely apart.",
  },
];

const complianceFramework = [
  "Register as a bulk waste generator with your State Pollution Control Board if your volumes require it",
  "Sell only to CPCB or SPCB registered recyclers, refurbishers, or dismantlers",
  "Maintain a battery waste register across all company sites, not just head office",
  "Retain transport manifests and recycling confirmations for internal audit purposes",
  "Align disposal records with your company's Extended Producer Responsibility reporting if you are also a producer or importer",
];

const profitabilitySteps = [
  {
    title: "Consolidate before you sell",
    body: "Batching waste across multiple sites into fewer, larger shipments typically earns a better per-unit price than frequent small pickups.",
  },
  {
    title: "Sort by chemistry and condition",
    body: "Clean segregation reduces the recycler's processing overhead, and that saving is usually passed back to you in the quote.",
  },
  {
    title: "Get comparative quotes",
    body: "Pricing varies between registered recyclers based on their current capacity and material needs, so a single quote is rarely the best available price.",
  },
  {
    title: "Negotiate a standing arrangement",
    body: "For companies generating waste continuously, a recurring collection agreement with a trusted recycler can smooth out pricing and logistics over time.",
  },
];

const pitfalls = [
  {
    icon: AlertTriangle,
    title: "Inconsistent policy across sites",
    body: "Large corporates with multiple facilities often have one site fully compliant and another quietly selling to an unregistered local buyer. A single company-wide policy closes that gap.",
  },
  {
    icon: FileCheck2,
    title: "No centralised record keeping",
    body: "When each site manages its own paperwork, a company-wide compliance picture becomes impossible to produce quickly during an audit or regulatory inquiry.",
  },
  {
    icon: Network,
    title: "Over-reliance on a single vendor",
    body: "Depending on one buyer for all sites limits your negotiating position and creates a single point of failure if that vendor's capacity or registration status changes.",
  },
];

const faqs = [
  {
    q: "Do we need a formal internal policy for battery disposal?",
    a: "For any company generating meaningful volumes of battery waste across multiple sites, a written internal policy, covering storage, approved vendors, and documentation, makes compliance consistent rather than dependent on individual site managers' judgement.",
  },
  {
    q: "Can we sell lead-acid and lithium-ion batteries to the same recycler?",
    a: "Some registered recyclers handle both chemistries, others specialise. It is worth confirming a recycler's specific registration and processing capability for each battery type before committing your full inventory to them.",
  },
  {
    q: "How do we handle batteries from multiple sites efficiently?",
    a: "Centralising your inventory data, even if collection happens locally, lets you negotiate as a single account with a recycler or platform, which generally improves both pricing and consistency of documentation.",
  },
  {
    q: "What records should we keep for how long?",
    a: "At minimum, retain transport manifests and recycler-issued recycling confirmations. Many companies align retention periods with their broader environmental and financial audit cycles rather than a single fixed minimum.",
  },
];

export default function CorporateGuideOffloadingScrapBatteriesBlog() {
  return (
    <div className="bg-background min-h-screen">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-brandGreen/10" />
        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 mt-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
              <span>Sell Batteries</span>
              <span>/</span>
              <span className="text-brandGreen">Corporate Guide</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              The Ultimate Corporate Guide to Offloading Scrap Batteries
              Safely, Profitably, and Compliantly
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              For companies managing battery waste across multiple sites,
              disposal is a policy question as much as a transaction. Here
              is how to build a process that protects your people, your
              compliance record, and your margins at the same time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Building2 className="h-4 w-4" /> Multi-site ready
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                <ShieldCheck className="h-4 w-4" /> Safety-first framework
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
                Corporates rarely deal with a single battery at a time.
                Fleet operators retire vehicle batteries by the hundreds,
                telecom and data centre operators cycle through UPS banks
                continuously, and manufacturers decommission equipment with
                embedded lithium packs. At that scale, a casual, ad hoc
                approach to disposal is not just inefficient, it is a
                genuine safety and compliance liability. This guide lays out
                a framework that treats battery disposal as a managed
                corporate process.
              </p>
            </Section>

            <Section id="why-a-policy" index={1}>
              <SectionHeading
                eyebrow="Start here"
                title="Why battery disposal needs a written company policy"
                icon={ClipboardList}
              />
              <p className="text-muted-foreground leading-relaxed">
                Without a documented policy, disposal practices tend to vary
                site by site, shaped by whichever local buyer happens to be
                convenient. A written policy, covering approved storage
                practices, approved vendors, and required documentation,
                creates a consistent standard that every facility can
                follow, and gives your compliance and sustainability teams
                something concrete to audit against.
              </p>
            </Section>

            <Section id="safety" index={2}>
              <SectionHeading
                eyebrow="Protect your people"
                title="Safety protocols for storage and handling"
                icon={Flame}
              />
              <div className="grid sm:grid-cols-3 gap-5 mt-2">
                {safetyProtocols.map((item) => (
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

            <Section id="compliance-framework" index={3}>
              <SectionHeading
                eyebrow="Stay on the right side of the law"
                title="The compliance framework corporates need in place"
                icon={ShieldCheck}
              />
              <div className="rounded-2xl border border-border bg-card p-6">
                <ul className="space-y-3">
                  {complianceFramework.map((item) => (
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

            <Section id="choosing-a-partner" index={4}>
              <SectionHeading
                eyebrow="Vendor selection"
                title="How to choose the right recycling partner"
                icon={Network}
              />
              <p className="text-muted-foreground leading-relaxed">
                Beyond checking registration status, evaluate whether a
                recycler or refurbisher can service all your sites, handles
                the specific chemistries you generate, and can commit to
                consistent turnaround times. A partner that works well for a
                single warehouse may not scale to a nationwide facility
                footprint without added logistics planning.
              </p>
            </Section>

            <Section id="profitability" index={5}>
              <SectionHeading
                eyebrow="Protect your margins"
                title="Making disposal profitable, not just compliant"
                icon={Coins}
              />
              <div className="space-y-4 mt-2">
                {profitabilitySteps.map((step, idx) => (
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

            <Section id="logistics" index={6}>
              <SectionHeading
                eyebrow="Getting it out the door"
                title="Transport and logistics that hold up to scrutiny"
                icon={Truck}
              />
              <p className="text-muted-foreground leading-relaxed">
                Every outbound shipment of battery waste should travel with
                a transport manifest, packaged to prevent short-circuit and
                leakage risk. For multi-site operations, standardising
                packaging and labelling requirements across locations makes
                it far easier to coordinate pickups with a recycling
                partner without repeated back-and-forth over specifications.
              </p>
            </Section>

            <Section id="documentation" index={7}>
              <SectionHeading
                eyebrow="Keep the paper trail"
                title="Documentation and record keeping that scales"
                icon={FileCheck2}
              />
              <p className="text-muted-foreground leading-relaxed">
                A centralised record, even a shared spreadsheet or system
                that aggregates manifests and recycling confirmations from
                every site, turns disposal from a scattered set of local
                transactions into an auditable company-wide record. This is
                the difference between answering a regulator's question in
                minutes versus weeks.
              </p>
            </Section>

            <Section id="esg" index={8}>
              <SectionHeading
                eyebrow="Beyond compliance"
                title="Connecting disposal to your sustainability reporting"
                icon={Leaf}
              />
              <p className="text-muted-foreground leading-relaxed">
                Documented, compliant battery recycling gives sustainability
                teams verifiable data, tonnage recycled, chemistries
                diverted from landfill, that can feed directly into ESG
                disclosures. That only works if the underlying disposal
                records are complete and consistent, which loops back to
                the documentation practices above.
              </p>
            </Section>

            <Section id="pitfalls" index={9}>
              <SectionHeading
                eyebrow="Watch out for these"
                title="Pitfalls specific to multi-site corporates"
                icon={AlertTriangle}
              />
              <div className="grid sm:grid-cols-3 gap-5 mt-2">
                {pitfalls.map((item) => (
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

            <Section id="how-we-help" index={10}>
              <SectionHeading
                eyebrow="Where EPR Nexuss fits"
                title="A single compliant channel across every site"
                icon={ShieldCheck}
              />
              <p className="text-muted-foreground leading-relaxed">
                EPR Nexuss helps corporates standardise battery disposal
                across locations by connecting every site to a verified
                network of registered recyclers, with consistent
                documentation and comparative pricing, so your compliance
                policy is enforced by the process itself, not left to
                individual site discretion.
              </p>
            </Section>

            <Section id="faqs" index={11}>
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

            <Section id="conclusion" index={12}>
              <div className="rounded-2xl bg-primary text-primary-foreground p-8">
                <h2 className="font-display text-2xl font-semibold">
                  Build one compliant disposal process for every site
                </h2>
                <p className="mt-3 text-primary-foreground/90 leading-relaxed">
                  Talk to EPR Nexuss about setting up a standardised,
                  audit-ready battery disposal channel across your entire
                  organisation.
                </p>
                <a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors">
                  Talk to our team <ArrowRight className="h-4 w-4" />
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