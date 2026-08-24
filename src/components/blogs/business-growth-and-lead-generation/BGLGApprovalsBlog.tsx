"use client";

import { motion } from "framer-motion";
import {
  Target,
  Search,
  FileText,
  MessageSquareText,
  BarChart3,
  AlertTriangle,
  Building2,
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

export default function SustainabilityLeadGenBlog() {
  return (
    <div className="font-sans mt-[100px] bg-gradient-to-b from-white via-secondary/[0.03] to-primary/[0.05] text-gray-800 leading-[1.75]">
      <Seo
        title="Why Sustainability Is Becoming Your Best Lead Generation Strategy"
        description="Sustainability credentials are quietly becoming one of the strongest lead-generation channels businesses have. Here's how compliance data turns into real inbound inquiries."
        keywords={[
          "sustainability lead generation",
          "EPR lead generation",
          "green marketing leads",
          "compliance as marketing asset",
          "ESG inbound leads",
          "sustainable business leads India",
          "EPR Nexuss",
        ]}
        url="https://eprnexuss.com/blog/sustainability-lead-generation"
        type="article"
      />

      <div className="w-full max-w-8xl mx-auto px-1 pt-8 pb-16">
        

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div>
            {/* Banner */}
        <section className="relative overflow-hidden rounded-[32px] mb-7 border border-secondary/10 bg-gradient-to-br from-secondary via-secondary/90 to-primary shadow-lg">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -left-14 -bottom-12 w-44 h-44 rounded-full bg-white/10" />
          <div className="relative z-10 px-6 sm:px-16 py-16 sm:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 mb-6"
            >
              <Target className="w-8 h-8 text-white" />
            </motion.div>
            <div className="inline-block px-3 py-1.5 rounded-full text-[13px] font-bold tracking-wide mb-5 text-white bg-white/15 border border-white/20">
              Business Growth &amp; Lead Generation
            </div>
            <h1
              className="font-display font-extrabold text-white mb-4 tracking-tight"
              style={{ fontSize: "clamp(28px, 4.2vw, 50px)", lineHeight: 1.1 }}
            >
              Why Sustainability Is Becoming
              <br className="hidden sm:block" /> Your Best Lead Generation Strategy
            </h1>
            <p className="mx-auto text-white/90 max-w-[700px]" style={{ fontSize: "clamp(15px, 1.4vw, 19px)" }}>
              Buyers are searching for compliant, responsible vendors before
              they ever fill out a contact form. Here's how to be found.
            </p>
          </div>
        </section>

          
          <div className="flex-1 min-w-0 w-full">
            {/* 1. The shift */}
            <Reveal>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-3">
                  1. The shift: sustainability as a lead magnet
                </h2>
                <p className="text-gray-600 text-[15px] mb-0">
                  Traditional lead generation relies on ads, cold outreach,
                  and referrals. A newer channel has quietly grown alongside
                  those: buyers actively searching for vendors who can prove
                  environmental compliance before they even reach out. A
                  strong, visible EPR and recycling program isn't just
                  reputation management anymore — it's actively pulling in
                  qualified inquiries from buyers who were already looking.
                </p>
              </section>
            </Reveal>

            {/* 2. What buyers search for */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Search className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    2. What today's buyers actually search for before choosing a vendor
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Valid registration & certificates", text: "Buyers check whether a company holds current, verifiable EPR registration before engaging further." },
                    { title: "Public compliance data", text: "Recycling volumes, targets met, and sustainability reports are increasingly searched for directly." },
                    { title: "Third-party recognition", text: "Certifications and partnerships with recognised recyclers add credibility that buyers actively look for." },
                    { title: "Clear ownership of responsibility", text: "Buyers want to see that a company takes accountability for its products at end of life, not just at sale." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <h4 className="text-gray-900 text-[15px] font-bold mb-1.5">{title}</h4>
                      <p className="text-gray-600 text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 3. Content and visibility */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    3. Content and visibility: how compliance data generates inbound interest
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  Businesses that publish their recycling numbers, EPR
                  status, and sustainability practices on their website and
                  in proposals give search engines and buyers something
                  concrete to find. This turns compliance from a private
                  internal record into public-facing content — one that
                  quietly works as a lead magnet, answering exactly the
                  questions a cautious buyer is already asking before they
                  pick up the phone.
                </p>
              </section>
            </Reveal>

            {/* 4. Case pattern */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquareText className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    4. Case pattern: companies converting green credentials into inquiries
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  A recognisable pattern shows up across industries: once a
                  company makes its compliance story visible, prospective
                  clients start referencing it directly in first-contact
                  conversations — often before pricing is even discussed.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Packaging supplier", text: "Added an EPR compliance page to its site and began receiving inbound RFPs referencing it directly." },
                    { title: "Electronics brand", text: "Used its take-back program in outreach emails, noticeably increasing response rates from corporate buyers." },
                    { title: "Manufacturing vendor", text: "Shared verified recycling metrics in pitch decks, shortening the trust-building phase of new deals." },
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
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    5. Lead sources most influenced by sustainability positioning
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-5">
                  Here's a general picture of where a visible, well-documented
                  compliance story tends to move the needle most.
                </p>
                <div className="flex flex-col gap-4">
                  <BarRow label="Corporate RFP inquiries" width="85%" delay={0} />
                  <BarRow label="Organic search visibility" width="72%" delay={0.1} />
                  <BarRow label="Referral conversations" width="77%" delay={0.2} />
                  <BarRow label="Repeat client inquiries" width="69%" delay={0.3} />
                  <BarRow label="Export & international leads" width="64%" delay={0.4} />
                </div>
              </section>
            </Reveal>

            {/* 6. Common mistakes */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    6. Common lead-generation mistakes businesses make around compliance
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Keeping compliance data private", text: "Certificates locked away in a filing cabinet do nothing to attract new business." },
                    { title: "Vague sustainability claims", text: "Generic statements without numbers or proof are often ignored by cautious buyers." },
                    { title: "Outdated documentation", text: "Expired registrations discovered during due diligence can end a deal instantly." },
                    { title: "No mention in sales materials", text: "Sales teams often forget to bring up compliance credentials that could close a deal faster." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <h4 className="text-gray-900 text-[15px] font-bold mb-1.5">{title}</h4>
                      <p className="text-gray-600 text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 7. How EPR Nexuss helps */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-primary/20 bg-primary/[0.06] mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brandGreen/15 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-brandGreen" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    7. How EPR Nexuss helps position your business for more inbound leads
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  We help you build the compliance foundation, then turn it
                  into material you can actually use — clear documentation,
                  current certificates, and reporting that's ready to be
                  shared the moment a prospective client asks for proof.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Always-current EPR certificates and records",
                    "Clear recycling data you can publish confidently",
                    "Support presenting compliance in proposals and pitches",
                    "Ongoing reporting so nothing lapses mid-deal",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-[13.5px]">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 8. Trust signals */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  8. Building trust signals into your website and proposals
                </h2>
                <p className="text-gray-600 text-[15px] mb-4">
                  A prospective client rarely takes a compliance claim at
                  face value — they look for supporting evidence. Building
                  visible trust signals into your existing materials makes
                  it easy for them to verify what you're saying without
                  having to ask.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "A dedicated compliance page", text: "A simple page outlining your EPR registration, recycling partners, and reporting cadence answers buyer questions before they're asked." },
                    { title: "Certificates embedded in proposals", text: "Attaching your current registration directly to a proposal removes a step from the buyer's due-diligence process." },
                    { title: "Specific numbers, not vague claims", text: "\"12 tonnes recycled last quarter\" builds more trust than \"we care about the environment.\"" },
                    { title: "Named recycling partners", text: "Referencing your certified recycling partner by name adds a layer of independent credibility." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <h4 className="text-gray-900 text-[15px] font-bold mb-1.5">{title}</h4>
                      <p className="text-gray-600 text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 9. Case studies & testimonials */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    9. Using case studies and testimonials from sustainability wins
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  If a previous client chose you partly because of your
                  compliance record, that's worth documenting. A short case
                  study — even a few sentences describing the situation and
                  outcome — gives future prospects a concrete reason to
                  trust your claims, rather than asking them to take your
                  word for it. Testimonials specifically mentioning
                  sustainability or compliance carry extra weight, since
                  they come from someone who had no reason to exaggerate.
                </p>
              </section>
            </Reveal>

            {/* 10. Aligning sales & compliance teams */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  10. Aligning sales and compliance teams for consistent messaging
                </h2>
                <p className="text-gray-600 text-[15px] mb-4">
                  A surprising number of leads are lost simply because the
                  sales team doesn't know what the compliance team has
                  already achieved — or worse, gives inconsistent answers
                  when a buyer asks a direct question about certifications.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Shared compliance fact sheet for sales", "Regular updates when certificates renew", "Common language across proposals & pitches", "One point of contact for buyer questions"].map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full text-[13px] font-semibold text-secondary bg-secondary/10 border border-secondary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 11. Measuring lead quality */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  11. Tracking and measuring lead quality from sustainability positioning
                </h2>
                <p className="text-gray-600 text-[15px] mb-4">
                  To know whether this strategy is working, it helps to
                  track a few simple indicators over time rather than
                  relying on a general impression.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Source of inquiry", text: "Note when a lead mentions finding you through compliance content or sustainability pages." },
                    { title: "Time to close", text: "Compare deal cycles for leads who reference your compliance record against those who don't." },
                    { title: "Deal size", text: "Sustainability-driven leads, particularly corporate ones, often come with larger contract values." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-4 bg-gray-50">
                      <h4 className="text-gray-900 text-[14.5px] font-bold mb-1">{title}</h4>
                      <p className="text-gray-600 text-[13.5px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 12. Long-term nurturing */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-primary/20 bg-primary/[0.06] mb-6">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display font-extrabold text-gray-900 text-[20px] sm:text-[22px] mb-2">
                      12. Long-term lead nurturing through continued transparency
                    </h2>
                    <p className="text-gray-600 text-[14.5px] m-0">
                      This isn't a one-time content push. Buyers who are
                      genuinely evaluating compliance often return to check
                      whether your public data is still current months
                      later. Keeping your reporting and certificates
                      up to date isn't just a compliance requirement at that
                      point — it's what keeps the lead-generation engine
                      running instead of quietly going stale.
                    </p>
                  </div>
                </div>
              </section>
            </Reveal>

            {/* Closing CTA */}
            <Reveal delay={0.05}>
              <section className="text-center rounded-[32px] px-6 sm:px-10 py-12 sm:py-16 border border-secondary/10 bg-gradient-to-br from-secondary to-primary shadow-lg">
                <h2 className="font-display font-extrabold text-white mb-3" style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}>
                  Let your compliance start generating leads
                </h2>
                <p className="max-w-[640px] mx-auto text-white/90 text-[15px] mb-0">
                  We'll help you build documentation that doesn't just tick
                  a legal box — it actively attracts the next client.
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