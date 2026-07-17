"use client";

import StickyContactForm from "@/components/StickyContactForm";
import { motion, Variants } from "framer-motion";
import {
  Landmark,
  ShieldCheck,
  FileCheck2,
  Ship,
  Factory,
  ClipboardCheck,
  Scale,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  Recycle,
  CalendarClock,
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

const registrationSteps = [
  {
    title: "Confirm which role you hold",
    body: "The framework separately defines producers, manufacturers, importers, recyclers, refurbishers, and collection agents. A single company can fall under more than one definition and must register under each that applies.",
  },
  {
    title: "Register on the CPCB portal",
    body: "The Central Pollution Control Board maintains the centralised online portal where all stakeholders in the non-ferrous metal scrap chain must register before undertaking regulated activity.",
  },
  {
    title: "Understand your specific obligation",
    body: "Producers generally owe a recycling obligation tied to the quantity of designated products placed on the market, while importers are typically expected to account for the full quantity of non-ferrous metal they bring into the country.",
  },
  {
    title: "Plan your certificate strategy",
    body: "Decide whether you will meet obligations by recycling directly, purchasing EPR certificates from registered recyclers, or using refurbish certificates for products that get a second life.",
  },
  {
    title: "File returns on schedule",
    body: "Stakeholders are required to file periodic returns, generally covering the first half of the financial year by October 31 and the full preceding year by June 30, so returns tracking needs to be built into your compliance calendar.",
  },
];

const importerNotes = [
  {
    icon: Ship,
    title: "Importers face a distinct standard",
    body: "Unlike domestic producers, whose obligation is generally tied to products placed on the market, importers are expected to account for the full quantity of non-ferrous metals or scrap they import in the relevant year.",
  },
  {
    icon: Factory,
    title: "Downstream manufacturers are not exempt",
    body: "Businesses that manufacture finished products using imported or domestically produced non-ferrous metal still carry recycled-content and reporting obligations tied to what they place on the market.",
  },
  {
    icon: FileCheck2,
    title: "Dual registration can apply",
    body: "A company that both imports raw non-ferrous metal and manufactures finished products from it may need to register under more than one stakeholder category on the CPCB portal.",
  },
];

const avoidPenaltyChecklist = [
  "Register every applicable entity and role on the CPCB portal well before the compliance deadline",
  "Build an internal tracking system for quantities placed on the market or imported each year",
  "Source EPR certificates only from recyclers who are themselves registered under the framework",
  "File half-yearly and annual returns on time, every time",
  "Keep documentation for every scrap transaction that supports your recycling or certificate claims",
  "Review recycled-content requirements annually, since obligations are designed to increase over time",
];

const faqs = [
  {
    q: "What is the difference between an EPR certificate and a refurbish certificate?",
    a: "An EPR certificate is issued to registered recyclers based on the quantity of non-ferrous metal they have recycled, and can be purchased by producers to offset their own recycling obligation. A refurbish certificate is issued when a specified product is repaired and given extended life by a registered refurbisher, and can also be used to offset part of a producer's obligation, subject to conditions.",
  },
  {
    q: "Do importers have a heavier compliance burden than domestic producers?",
    a: "In practical terms, yes, since importers are generally expected to account for the full quantity of non-ferrous metal they bring into the country in a given year, rather than an obligation scaled to what is eventually sold.",
  },
  {
    q: "What triggers environmental compensation under this framework?",
    a: "Environmental compensation can be imposed by the Central Pollution Control Board, after due process, when non-compliance results in or risks environmental or public health harm. It is a penalty layered on top of the underlying recycling shortfall, not a substitute for meeting it.",
  },
  {
    q: "Can we carry forward a recycling shortfall to a future year?",
    a: "Recycling shortfalls can generally be carried forward for a limited number of years, but this is a deferral mechanism, not a way to avoid the obligation permanently, and repeated shortfalls still carry compliance risk.",
  },
];

export default function NavigatingNonFerrousEprFrameworkBlog() {
  return (
    <div className="bg-background min-h-screen">
      <section className="relative overflow-hidden border-b border-border mt-[60px]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-brandGreen/10" />
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
              <span className="text-brandGreen">Compliance Guide</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Navigating the Non-Ferrous Metal EPR Framework: How Importers
              and Producers Can Avoid Environmental Compensation Penalties
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              The rules for aluminium, copper, and zinc producers and
              importers are more specific than most companies realise, and
              the obligations differ depending on which role you actually
              hold in the supply chain.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Landmark className="h-4 w-4" /> Producers &amp; Importers
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                <ShieldCheck className="h-4 w-4" /> Avoid environmental
                compensation
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
                Producers and importers of aluminium, copper, zinc, and their
                alloys are now stepping into one of India's newest Extended
                Producer Responsibility regimes. Unlike more established EPR
                frameworks for e-waste or plastic packaging, this one is
                still new enough that many obligated companies have not yet
                built the internal processes to comply with it properly.
                Getting the basics right early avoids both compensation
                penalties and a scramble closer to the enforcement date.
              </p>
            </Section>

            <Section id="framework-overview" index={1}>
              <SectionHeading
                eyebrow="The framework"
                title="What the non-ferrous metal EPR framework actually covers"
                icon={Landmark}
              />
              <p className="text-muted-foreground leading-relaxed">
                Introduced as a new chapter under the Hazardous and Other
                Wastes (Management and Transboundary Movement) Rules, the
                framework applies to scrap of aluminium, copper, zinc, and
                their alloys, and to products manufactured from them. It
                sets recycled-content requirements for new products, creates
                a market for tradeable EPR and refurbish certificates, and
                centralises registration and reporting through a CPCB
                portal.
              </p>
            </Section>

            <Section id="registration-steps" index={2}>
              <SectionHeading
                eyebrow="Getting compliant"
                title="The registration and compliance process, step by step"
                icon={ClipboardCheck}
              />
              <div className="space-y-4 mt-2">
                {registrationSteps.map((step, idx) => (
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

            <Section id="importer-specifics" index={3}>
              <SectionHeading
                eyebrow="Importers, read this closely"
                title="Why importers face a different compliance standard"
                icon={Ship}
              />
              <div className="grid sm:grid-cols-3 gap-5 mt-2">
                {importerNotes.map((item) => (
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

            <Section id="recycled-content" index={4}>
              <SectionHeading
                eyebrow="What producers must do"
                title="Recycled-content obligations for new products"
                icon={Recycle}
              />
              <p className="text-muted-foreground leading-relaxed">
                Producers manufacturing new products from aluminium, copper,
                or zinc are required to incorporate a minimum proportion of
                recycled material, with that minimum designed to increase
                over successive years. Because the exact schedule differs by
                metal and product category, producers should check the
                current notification and its schedules directly rather than
                relying on a single flat figure.
              </p>
            </Section>

            <Section id="certificates" index={5}>
              <SectionHeading
                eyebrow="How obligations are met"
                title="EPR certificates and refurbish certificates explained"
                icon={FileCheck2}
              />
              <p className="text-muted-foreground leading-relaxed">
                Producers do not have to recycle metal themselves. They can
                purchase EPR certificates from registered recyclers,
                reflecting metal that has genuinely been recycled, or
                refurbish certificates from registered refurbishers, when a
                product's life is extended through repair rather than being
                scrapped. Both instruments are tracked and traded through
                the CPCB portal, which is what makes them auditable.
              </p>
            </Section>

            <Section id="returns-timeline" index={6}>
              <SectionHeading
                eyebrow="Don't miss these"
                title="Returns filing: a compliance calendar you need to track"
                icon={CalendarClock}
              />
              <p className="text-muted-foreground leading-relaxed">
                Stakeholders across the chain are expected to file periodic
                returns, generally a half-yearly filing covering April to
                September, and an annual filing covering the full preceding
                financial year. Missing these deadlines is one of the more
                avoidable ways a compliant company ends up flagged for
                enforcement action.
              </p>
            </Section>

            <Section id="avoiding-penalties" index={7}>
              <SectionHeading
                eyebrow="The checklist"
                title="How to actually avoid environmental compensation"
                icon={ShieldCheck}
              />
              <div className="rounded-2xl border border-border bg-card p-6">
                <ul className="space-y-3">
                  {avoidPenaltyChecklist.map((item) => (
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

            <Section id="common-mistakes" index={8}>
              <SectionHeading
                eyebrow="What trips companies up"
                title="Mistakes that turn a manageable obligation into a penalty"
                icon={AlertTriangle}
              />
              <p className="text-muted-foreground leading-relaxed">
                The most common failure point is not malicious
                non-compliance, it is simply treating this as a future
                problem. Companies that wait until close to the enforcement
                date to register, that source certificates from
                unregistered recyclers, or that lack internal systems to
                track import and production volumes, end up exposed even
                when their underlying intent was to comply.
              </p>
            </Section>

            <Section id="how-we-help" index={9}>
              <SectionHeading
                eyebrow="Where EPR Nexuss fits"
                title="Sourcing certificates and material from verified partners"
                icon={Factory}
              />
              <p className="text-muted-foreground leading-relaxed">
                EPR Nexuss helps producers and importers connect with
                CPCB-registered recyclers and refurbishers for both sourcing
                verified scrap and structuring EPR certificate purchases, so
                your compliance strategy is built on documented,
                audit-ready relationships rather than a scramble to find a
                registered partner at the last minute.
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
                  Get your compliance strategy in place before 2026
                </h2>
                <p className="mt-3 text-primary-foreground/90 leading-relaxed">
                  Talk to EPR Nexuss about registration, certificate
                  sourcing, and building a documented, compliant metal
                  supply chain.
                </p>
                <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors">
                  Talk to a compliance specialist{" "}
                  <ArrowRight className="h-4 w-4" />
                </button>
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