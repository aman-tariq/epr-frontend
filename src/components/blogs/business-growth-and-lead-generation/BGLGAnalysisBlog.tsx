"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Recycle,
  PiggyBank,
  Users,
  ShieldCheck,
  BarChart3,
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
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
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

export default function SustainableGrowthBlog() {
  return (
    <div className="font-sans bg-gradient-to-b from-white via-primary/[0.03] to-secondary/[0.05] text-gray-800 leading-[1.75]">
      <Seo
        title="How Sustainable Recycling Practices Drive Real Business Growth"
        description="Sustainability isn't just good ethics — it's a measurable growth lever. Here's how responsible recycling practices translate into cost savings, new customers, and stronger brand trust."
        keywords={[
          "sustainable business growth",
          "recycling business benefits",
          "EPR business growth",
          "sustainability ROI",
          "green business strategy India",
          "responsible recycling practices",
          "EPR Nexuss growth",
        ]}
        url="https://eprnexuss.com/blog/sustainable-recycling-business-growth"
        type="article"
      />

      <div className="w-full max-w-8xl mx-auto px-1 pt-8 pb-16">
        {/* Banner */}
        <section className="relative overflow-hidden rounded-[32px] mb-7 border border-primary/10 bg-gradient-to-br from-primary via-primary/90 to-secondary shadow-lg">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -left-14 -bottom-12 w-44 h-44 rounded-full bg-white/10" />
          <div className="relative z-10 px-6 sm:px-16 py-16 sm:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 mb-6"
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </motion.div>
            <div className="inline-block px-3 py-1.5 rounded-full text-[13px] font-bold tracking-wide mb-5 text-white bg-white/15 border border-white/20">
              Business Growth &amp; Lead Generation
            </div>
            <h1
              className="font-display font-extrabold text-white mb-4 tracking-tight"
              style={{ fontSize: "clamp(28px, 4.2vw, 50px)", lineHeight: 1.1 }}
            >
              How Sustainable Recycling Practices
              <br className="hidden sm:block" /> Drive Real Business Growth
            </h1>
            <p className="mx-auto text-white/90 max-w-[700px]" style={{ fontSize: "clamp(15px, 1.4vw, 19px)" }}>
              Sustainability used to be a side project. Today, it's showing
              up directly in revenue, cost savings, and the customers who
              choose to work with you.
            </p>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-4 items-start max-w-8xl">
          <div className="flex-1 max-w-8xl">
            {/* 1. Intro */}
            <Reveal>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-3">
                  1. Why growth and sustainability are no longer separate goals
                </h2>
                <p className="text-gray-600 text-[15px] mb-0">
                  For years, businesses treated environmental responsibility
                  and business growth as two separate conversations — one
                  handled by compliance teams, the other by sales. That
                  divide is closing fast. Customers, partners, and regulators
                  now expect the two to move together, and companies that
                  connect them are finding growth in places they didn't
                  expect: retention, referrals, and access to markets that
                  were previously closed to them.
                </p>
              </section>
            </Reveal>

            {/* 2. Direct benefits */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Recycle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    2. The direct business benefits of responsible recycling
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Lower disposal costs", text: "Structured recycling reduces the volume and cost of waste sent to landfill, often more than businesses expect." },
                    { title: "Recovered material value", text: "Metals, plastics, and components recovered through recycling can be resold or reused, offsetting waste-management costs." },
                    { title: "Reduced regulatory risk", text: "Consistent recycling practices keep you ahead of tightening environmental regulations instead of scrambling to catch up." },
                    { title: "Stronger operational discipline", text: "Waste tracking often surfaces inefficiencies elsewhere in the supply chain worth fixing anyway." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <h4 className="text-gray-900 text-[15px] font-bold mb-1.5">{title}</h4>
                      <p className="text-gray-600 text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 3. Cost savings */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <PiggyBank className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    3. Cost savings hidden inside compliant waste management
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  Businesses often assume compliance is purely an expense.
                  In practice, a well-managed recycling and EPR program
                  frequently pays part of itself back — through material
                  recovery revenue, fewer regulatory penalties, and reduced
                  need for emergency waste-management fixes when
                  inspections happen unannounced. The savings aren't always
                  visible on a single invoice, but they show up clearly over
                  a full financial year.
                </p>
                <p className="text-gray-600 text-[15px] mb-0">
                  There's also a less obvious saving: predictability. When
                  waste management runs on an ad-hoc basis, costs spike
                  unpredictably around audits, penalty notices, or last-minute
                  disposal needs. A structured program smooths those costs
                  into a manageable, forecastable line item — which makes
                  budgeting easier and frees up cash that would otherwise sit
                  aside as a buffer for compliance emergencies.
                </p>
              </section>
            </Reveal>

            {/* 4. New customer segments */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    4. How recycling practices open new customer segments
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  A growing group of buyers — both retail consumers and
                  corporate procurement teams — actively filter out vendors
                  who can't demonstrate responsible waste practices. Being
                  visibly compliant doesn't just retain your existing
                  customers; it unlocks entirely new segments that were
                  previously out of reach.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ESG-focused corporates", "Government tenders", "Export markets with green standards", "Environmentally conscious retail buyers"].map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full text-[13px] font-semibold text-secondary bg-secondary/10 border border-secondary/20">
                      {t}
                    </span>
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
                    5. Where sustainability influences growth the most
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-5">
                  Not every growth area benefits equally — here's a general
                  picture of where businesses tend to see the strongest
                  impact from strong recycling and compliance practices.
                </p>
                <div className="flex flex-col gap-4">
                  <BarRow label="Corporate contract wins" width="88%" delay={0} />
                  <BarRow label="Customer retention" width="79%" delay={0.1} />
                  <BarRow label="Cost reduction" width="74%" delay={0.2} />
                  <BarRow label="Brand reputation" width="83%" delay={0.3} />
                  <BarRow label="New market access" width="68%" delay={0.4} />
                </div>
              </section>
            </Reveal>

            {/* 6. Brand trust */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    6. Building a recognizable, trustworthy brand through visible action
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  Talking about sustainability is easy; demonstrating it is
                  what actually builds trust. Businesses that publish clear
                  recycling numbers, hold visible certifications, and share
                  real compliance data tend to earn faster trust from new
                  customers than those who simply claim to "care about the
                  environment" without evidence behind it.
                </p>
              </section>
            </Reveal>

            {/* 7. How EPR Nexuss helps */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-secondary/20 bg-secondary/[0.06] mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brandGreen/15 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-brandGreen" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    7. How EPR Nexuss supports your growth journey
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  We help businesses set up recycling and compliance systems
                  that don't just satisfy regulators — they generate real
                  business proof points you can use in sales conversations,
                  tenders, and marketing.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "End-to-end EPR registration and reporting",
                    "Documented recycling data you can showcase",
                    "Ongoing compliance so records never lapse",
                    "Guidance on presenting sustainability to buyers",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
                      <Sparkles className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-gray-700 text-[13.5px]">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 8. Talent & culture */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    8. How sustainability affects talent and workplace culture
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  Growth isn't only about customers and contracts — it's also
                  about the people who help you deliver on them. Employees,
                  especially younger professionals entering the workforce,
                  increasingly weigh a company's environmental practices when
                  deciding where to work. Businesses with a visible,
                  genuine recycling and compliance program often find it
                  easier to attract and retain talent, simply because
                  people want to feel their work contributes to something
                  responsible.
                </p>
                <p className="text-gray-600 text-[15px] mb-0">
                  This isn't a soft, unmeasurable benefit either. Lower
                  attrition means lower hiring and training costs, and teams
                  that believe in the company's direction tend to move
                  faster on the initiatives that actually drive growth.
                </p>
              </section>
            </Reveal>

            {/* 9. Investor & risk confidence */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    9. Reducing risk and building investor confidence
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  Investors, lenders, and insurers now routinely factor
                  environmental compliance into their risk assessments of a
                  business. A company with a documented recycling program
                  and clean EPR record presents lower regulatory and
                  reputational risk than one without — and that translates
                  into practical advantages, from smoother loan approvals to
                  better terms on business insurance.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Lower audit risk", text: "Fewer surprises during regulatory inspections or investor due diligence." },
                    { title: "Better financing terms", text: "Some lenders now factor ESG standing into loan conditions and rates." },
                    { title: "Stronger valuation story", text: "A documented compliance record supports a cleaner narrative during funding rounds or acquisitions." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-4 bg-gray-50">
                      <h4 className="text-gray-900 text-[14.5px] font-bold mb-1">{title}</h4>
                      <p className="text-gray-600 text-[13.5px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 10. Self-audit framework */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  10. A simple framework for auditing your own recycling readiness
                </h2>
                <p className="text-gray-600 text-[15px] mb-4">
                  Before you can turn sustainability into growth, it helps to
                  know exactly where you stand today. A short internal
                  review usually covers four areas:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Waste volume & type", text: "What categories of waste does your business actually generate, and in what quantity each month?" },
                    { title: "Current disposal method", text: "Is waste going through a certified recycler, or an informal channel that leaves no paper trail?" },
                    { title: "Documentation status", text: "Are your EPR certificates, targets, and reports current, or overdue for renewal?" },
                    { title: "Visibility to customers", text: "Is any of this information currently shared anywhere a prospective client or partner could find it?" },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <h4 className="text-gray-900 text-[15px] font-bold mb-1.5">{title}</h4>
                      <p className="text-gray-600 text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 11. Common obstacles */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  11. Common obstacles businesses face — and how to move past them
                </h2>
                <div className="flex flex-col gap-3">
                  {[
                    { obstacle: "\"We don't have time to manage this alongside daily operations.\"", response: "Most of the ongoing work — reporting, renewals, documentation — can be handed off to a compliance partner so it never competes with day-to-day priorities." },
                    { obstacle: "\"Our waste volumes are too small to matter.\"", response: "Even smaller businesses benefit from a documented, credible compliance record, since buyers rarely scale their expectations down for smaller vendors." },
                    { obstacle: "\"We're not sure where to even start.\"", response: "A short initial assessment is usually enough to map out exactly what applies to your business and in what order to tackle it." },
                  ].map(({ obstacle, response }) => (
                    <div key={obstacle} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <p className="text-gray-900 text-[15px] font-bold mb-1.5">{obstacle}</p>
                      <p className="text-gray-600 text-[14px] m-0">{response}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 12. Long-term roadmap */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-secondary/20 bg-secondary/[0.06] mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brandGreen/15 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-brandGreen" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    12. The long-term roadmap: from compliance to market leadership
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  Businesses that start with basic compliance and consistently
                  build on it — better data, clearer public reporting, wider
                  recognition — often find themselves recognised as
                  sustainability leaders in their sector within a few years.
                  That reputation compounds: it becomes easier to win larger
                  clients, attract better talent, and weather regulatory
                  changes that catch less-prepared competitors off guard.
                  The starting point is simple, but the destination is a real,
                  durable competitive advantage.
                </p>
              </section>
            </Reveal>

            {/* Closing CTA */}
            <Reveal delay={0.05}>
              <section className="text-center rounded-[32px] px-6 sm:px-10 py-12 sm:py-16 border border-primary/10 bg-gradient-to-br from-primary to-secondary shadow-lg">
                <h2 className="font-display font-extrabold text-white mb-3" style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}>
                  Ready to turn compliance into growth?
                </h2>
                <p className="max-w-[640px] mx-auto text-white/90 text-[15px] mb-0">
                  Talk to us about building a recycling and compliance
                  program that supports your next stage of business growth.
                </p>
              </section>
            </Reveal>
          </div>

          <aside className="hidden lg:block w-[280px] flex-shrink-0 self-start" style={{ position: "sticky", top: "7rem" }}>
            <StickyContactForm />
          </aside>
        </div>
      </div>
    </div>
  );
}