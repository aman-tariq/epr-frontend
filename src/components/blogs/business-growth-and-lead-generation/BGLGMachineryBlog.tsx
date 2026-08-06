"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  FileText,
  Handshake,
  Globe,
  BarChart3,
  Workflow,
  Rocket,
  Sparkles,
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

function BarRow({ label, width, delay }: { label: string; width: string; delay: number }) {
  return (
    <div className="grid items-center gap-3" style={{ gridTemplateColumns: "minmax(0,1fr) minmax(0,2fr) 56px" }}>
      <div className="text-gray-800 text-[14.5px] font-semibold">{label}</div>
      <div className="h-4 rounded-full overflow-hidden bg-gray-100">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-secondary to-primary"
          initial={{ width: 0 }}
          whileInView={{ width }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay }}
        />
      </div>
      <div className="text-right font-extrabold text-gray-900 text-[14px]">{width}</div>
    </div>
  );
}

export default function ComplianceOpportunitiesBlog() {
  return (
    <div className="font-sans mt-[100px] bg-gradient-to-b from-white via-secondary/[0.03] to-primary/[0.05] text-gray-800 leading-[1.75]">
      <Seo
        title="How EPR Nexuss Turns Environmental Compliance Into New Business Opportunities"
        description="Compliance doesn't have to be a cost center. Here's how a well-managed EPR program opens doors to partnerships, tenders, and markets you couldn't access before."
        keywords={[
          "EPR business opportunities",
          "compliance as business asset",
          "EPR Nexuss services",
          "environmental compliance benefits",
          "EPR partnership growth",
          "compliance tender access",
        ]}
        url="https://eprnexuss.com/blog/epr-nexuss-compliance-opportunities"
        type="article"
      />

      <div className="w-full max-w-8xl mx-auto px-1 pt-8 pb-16">
       

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div>
             {/* Banner */}
        <section className="relative overflow-hidden rounded-[32px] mb-7 border border-secondary/10 bg-gradient-to-br from-secondary via-primary/85 to-primary shadow-lg">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -left-14 -bottom-12 w-44 h-44 rounded-full bg-white/10" />
          <div className="relative z-10 px-6 sm:px-16 py-16 sm:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 mb-6"
            >
              <Lightbulb className="w-8 h-8 text-white" />
            </motion.div>
            <div className="inline-block px-3 py-1.5 rounded-full text-[13px] font-bold tracking-wide mb-5 text-white bg-white/15 border border-white/20">
              Business Growth &amp; Lead Generation
            </div>
            <h1
              className="font-display font-extrabold text-white mb-4 tracking-tight"
              style={{ fontSize: "clamp(28px, 4.2vw, 50px)", lineHeight: 1.1 }}
            >
              How EPR Nexuss Turns Environmental Compliance
              <br className="hidden sm:block" /> Into New Business Opportunities
            </h1>
            <p className="mx-auto text-white/90 max-w-[700px]" style={{ fontSize: "clamp(15px, 1.4vw, 19px)" }}>
              Compliance doesn't have to sit in a filing cabinet. Managed
              well, it opens doors that pure sales effort alone can't.
            </p>
          </div>
        </section>
          <div className="flex-1 min-w-0 w-full">
            {/* 1. Cost center changing */}
            <Reveal>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-3">
                  1. Compliance is often seen as a cost center — here's why that's changing
                </h2>
                <p className="text-gray-600 text-[15px] mb-0">
                  Most businesses budget for EPR compliance the same way
                  they budget for insurance: a necessary expense with no
                  visible upside. That mindset is shifting as more companies
                  realise that the documentation, data, and relationships
                  built through compliance can be redirected toward winning
                  new business — not just avoiding penalties.
                </p>
              </section>
            </Reveal>

            {/* 2. Compliance as sales asset */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    2. Turning your compliance documentation into a sales asset
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  The same certificate you keep for regulatory audits can be
                  attached to proposals, referenced in pitch decks, and
                  shared with procurement teams evaluating your business.
                  Repurposing it this way costs nothing extra — it's already
                  been created; it just needs to be used more widely.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Proposal attachments", "Website trust pages", "Sales deck slides", "Vendor questionnaire answers"].map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full text-[13px] font-semibold text-primary bg-primary/10 border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 3. Better partnerships */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    3. How compliant businesses access better partnerships and contracts
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  Large partners and distributors increasingly prefer working
                  with vendors who won't create compliance headaches for
                  them down the line. A business with clean, current EPR
                  records is simply easier to say yes to — it removes a
                  layer of due-diligence friction that could otherwise stall
                  or kill a partnership discussion.
                </p>
              </section>
            </Reveal>

            {/* 4. Real areas opened */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    4. Real business areas opened by strong compliance
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Government tenders", text: "Many public tenders require valid EPR documentation as a basic eligibility criterion." },
                    { title: "Retail partnerships", text: "Larger retail chains often prefer suppliers who can demonstrate responsible packaging practices." },
                    { title: "Export markets", text: "Several export destinations have their own environmental compliance expectations for imported goods." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-4 bg-gray-50">
                      <h4 className="text-gray-900 text-[14.5px] font-bold mb-1">{title}</h4>
                      <p className="text-gray-600 text-[13.5px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 5. Chart */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    5. Opportunity areas unlocked by strong compliance
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-5">
                  A general view of where solid EPR compliance tends to open
                  the most doors for growing businesses.
                </p>
                <div className="flex flex-col gap-4">
                  <BarRow label="Government tender eligibility" width="89%" delay={0} />
                  <BarRow label="Corporate partnership access" width="80%" delay={0.1} />
                  <BarRow label="Retail chain onboarding" width="73%" delay={0.2} />
                  <BarRow label="Export compliance readiness" width="67%" delay={0.3} />
                </div>
              </section>
            </Reveal>

            {/* 6. Our role */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Workflow className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    6. Our role: from registration to ongoing opportunity support
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  We don't just help you register and walk away. Our
                  involvement continues through renewals, reporting, and
                  whenever your compliance documentation needs to be
                  presented for a new business opportunity — so you're never
                  scrambling to pull records together under deadline
                  pressure.
                </p>
              </section>
            </Reveal>

            {/* 7. Getting started */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-secondary/20 bg-secondary/[0.06] mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brandGreen/15 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-brandGreen" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    7. Getting started with EPR Nexuss
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  Whether you're registering for the first time or looking
                  to turn existing compliance into a growth asset, we start
                  with a simple assessment of where your business stands
                  today.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "A quick review of your current compliance status",
                    "A plan to close any documentation gaps",
                    "Guidance on using compliance in sales conversations",
                    "Ongoing support as new opportunities come up",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
                      <Sparkles className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-gray-700 text-[13.5px]">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 8. Long-term relationships */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  8. Building long-term relationships instead of one-off compliance
                </h2>
                <p className="text-gray-600 text-[15px] mb-4">
                  Some businesses treat EPR registration as a single event —
                  something completed once and then forgotten until renewal
                  time. The companies that get the most business value out
                  of compliance treat it instead as an ongoing relationship
                  with regulators, recyclers, and buyers, one that's
                  actively maintained rather than revisited only under
                  deadline pressure.
                </p>
                <p className="text-gray-600 text-[15px] mb-0">
                  This ongoing approach means documentation is always ready,
                  relationships with certified recyclers stay strong, and
                  there's rarely a scramble when a new opportunity requires
                  proof of compliance on short notice.
                </p>
              </section>
            </Reveal>

            {/* 9. Investor & funding conversations */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    9. How compliance data supports investor and funding conversations
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  Beyond customers and partners, investors evaluating a
                  business increasingly ask about environmental risk and
                  compliance standing as part of their due diligence. A
                  business that can produce clear, current compliance
                  records without delay signals operational maturity — a
                  quality that matters just as much to investors as revenue
                  figures, particularly for companies seeking growth capital.
                </p>
              </section>
            </Reveal>

            {/* 10. Common obstacles */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  10. Common obstacles businesses face turning compliance into opportunity
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Documentation scattered across teams", text: "Certificates and reports sitting with different departments make it slow to respond when a buyer requests them." },
                    { title: "No one owns the compliance story externally", text: "Compliance details often live only with the legal or operations team, never reaching sales or marketing." },
                    { title: "Renewals slipping through the cracks", text: "Without a clear renewal calendar, certificates can lapse right when they're needed most." },
                    { title: "Underselling what's already achieved", text: "Many businesses simply don't realise how valuable their existing compliance record already is to a buyer." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <h4 className="text-gray-900 text-[15px] font-bold mb-1.5">{title}</h4>
                      <p className="text-gray-600 text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 11. Measuring ROI */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  11. Measuring the ROI of a compliance-driven growth approach
                </h2>
                <p className="text-gray-600 text-[15px] mb-4">
                  It's worth tracking a few simple metrics to see the actual
                  return this approach generates, rather than treating it as
                  a vague reputational benefit.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Tender win rate", text: "Compare bid success before and after compliance documentation was made tender-ready." },
                    { title: "Partnership approval time", text: "Track how quickly new partnership discussions move past due-diligence stages." },
                    { title: "Deal value from compliance-led leads", text: "Note which contracts referenced your compliance record directly during negotiation." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-4 bg-gray-50">
                      <h4 className="text-gray-900 text-[14.5px] font-bold mb-1">{title}</h4>
                      <p className="text-gray-600 text-[13.5px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 12. Case walkthrough */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-primary/20 bg-primary/[0.06] mb-6">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display font-extrabold text-gray-900 text-[20px] sm:text-[22px] mb-2">
                      12. A typical journey from registration to opportunity
                    </h2>
                    <p className="text-gray-600 text-[14.5px] m-0">
                      A business usually starts with basic EPR registration
                      to meet legal requirements. Over the following months,
                      as reporting stays current and documentation gets
                      organised, that same business starts referencing its
                      compliance record in proposals. Within a year or two,
                      it often becomes eligible for tenders and partnerships
                      that were previously out of reach — not because
                      anything dramatic changed, but because the same
                      compliance work was finally being used to its full
                      potential.
                    </p>
                  </div>
                </div>
              </section>
            </Reveal>

            {/* Closing CTA */}
            <Reveal delay={0.05}>
              <section className="text-center rounded-[32px] px-6 sm:px-10 py-12 sm:py-16 border border-secondary/10 bg-gradient-to-br from-secondary to-primary shadow-lg">
                <h2 className="font-display font-extrabold text-white mb-3" style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}>
                  Let's turn your compliance into opportunity
                </h2>
                <p className="max-w-[640px] mx-auto text-white/90 text-[15px] mb-0">
                  Reach out and we'll walk you through where your business
                  stands and what doors are already open to you.
                </p>
              </section>
            </Reveal>
          </div>
          </div>

          <aside className="hidden lg:block w-[280px] flex-shrink-0 self-start" style={{ position: "sticky", top: "5.5rem" }}>
            <StickyContactForm />
          </aside>
        </div>
      </div>
    </div>
  );
}