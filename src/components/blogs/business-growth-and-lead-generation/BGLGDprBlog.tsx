"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  ShieldCheck,
  Globe2,
  Users2,
  Repeat,
  BarChart3,
  Compass,
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

export default function MarketTrendsBlog() {
  return (
    <div className="font-sans mt-[100px] bg-gradient-to-b from-white via-primary/[0.03] to-secondary/[0.05] text-gray-800 leading-[1.75]">
      <Seo
        title="Top Recycling & Compliance Market Trends Shaping Business Today"
        description="A look at the key recycling, EPR, and sustainability market trends reshaping how businesses compete — and what to do to stay ahead of them."
        keywords={[
          "EPR market trends",
          "recycling industry trends India",
          "ESG business trends",
          "circular economy business",
          "extended producer responsibility trends",
          "sustainability trends 2026",
          "EPR Nexuss",
        ]}
        url="https://eprnexuss.com/blog/recycling-compliance-market-trends"
        type="article"
      />

      <div className="w-full max-w-8xl mx-auto px-1 pt-8 pb-16">
        

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div>
            {/* Banner */}
        <section className="relative overflow-hidden rounded-[32px] mb-7 border border-primary/10 bg-gradient-to-br from-primary via-secondary/80 to-secondary shadow-lg">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -left-14 -bottom-12 w-44 h-44 rounded-full bg-white/10" />
          <div className="relative z-10 px-6 sm:px-16 py-16 sm:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 mb-6"
            >
              <LineChart className="w-8 h-8 text-white" />
            </motion.div>
            <div className="inline-block px-3 py-1.5 rounded-full text-[13px] font-bold tracking-wide mb-5 text-white bg-white/15 border border-white/20">
              Business Growth &amp; Lead Generation
            </div>
            <h1
              className="font-display font-extrabold text-white mb-4 tracking-tight"
              style={{ fontSize: "clamp(28px, 4.2vw, 50px)", lineHeight: 1.1 }}
            >
              Top Recycling &amp; Compliance
              <br className="hidden sm:block" /> Market Trends Shaping Business Today
            </h1>
            <p className="mx-auto text-white/90 max-w-[700px]" style={{ fontSize: "clamp(15px, 1.4vw, 19px)" }}>
              The rules around waste and responsibility are shifting fast —
              here's what every business should be watching right now.
            </p>
          </div>
        </section>
          <div className="flex-1 min-w-0 w-full">
            {/* 1. Why trends matter */}
            <Reveal>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-3">
                  1. Why market trends around recycling matter for every business
                </h2>
                <p className="text-gray-600 text-[15px] mb-0">
                  Waste and compliance regulations used to move slowly.
                  That's changed. New rules, buyer expectations, and
                  reporting standards are arriving faster than most internal
                  compliance calendars are built for. Businesses that track
                  these shifts early adapt smoothly; those that don't often
                  find themselves reacting under pressure — during an audit,
                  a tender deadline, or a client's due-diligence review.
                </p>
              </section>
            </Reveal>

            {/* 2. Trend 1: ESG stricter */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    2. Trend 1 — Corporate ESG requirements are getting stricter
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  Large corporations are tightening their own ESG reporting,
                  and that pressure flows directly down to their vendors.
                  Where a basic compliance certificate once sufficed,
                  companies are now being asked for detailed data — recycling
                  volumes, material recovery rates, and year-over-year
                  progress — as part of standard supplier evaluation.
                </p>
              </section>
            </Reveal>

            {/* 3. Trend 2: EPR expanding */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Globe2 className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    3. Trend 2 — Extended Producer Responsibility scope is expanding
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  EPR obligations, once mostly associated with electronics
                  and batteries, are steadily expanding to cover more
                  product categories including packaging and certain
                  plastics. Businesses that assume their current product
                  line falls outside EPR scope should revisit that
                  assumption regularly, since coverage tends to widen rather
                  than shrink over time.
                </p>
              </section>
            </Reveal>

            {/* 4. Trend 3: Consumers */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users2 className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    4. Trend 3 — Consumers are actively seeking sustainable brands
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  Beyond corporate buyers, everyday consumers are increasingly
                  factoring sustainability into purchase decisions — checking
                  packaging claims, researching brands, and favouring
                  companies that visibly manage their environmental impact.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Package recyclability", "Brand sustainability pages", "Take-back programs", "Public compliance reporting"].map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full text-[13px] font-semibold text-primary bg-primary/10 border border-primary/20">
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
                    5. How fast these trends are gaining ground
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-5">
                  A general view of how much weight each trend currently
                  carries in business decision-making.
                </p>
                <div className="flex flex-col gap-4">
                  <BarRow label="Stricter ESG vendor checks" width="86%" delay={0} />
                  <BarRow label="Expanding EPR categories" width="74%" delay={0.1} />
                  <BarRow label="Consumer sustainability demand" width="81%" delay={0.2} />
                  <BarRow label="Circular economy adoption" width="70%" delay={0.3} />
                </div>
              </section>
            </Reveal>

            {/* 6. Trend 4: circular economy */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Repeat className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    6. Trend 4 — Circular economy models replacing linear supply chains
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  Instead of the traditional make-use-dispose model,
                  businesses are increasingly designing supply chains where
                  materials are recovered and reused rather than discarded.
                  This shift is being driven both by regulation and by cost —
                  recovered material is often cheaper than sourcing new raw
                  material, especially as commodity prices fluctuate.
                </p>
              </section>
            </Reveal>

            {/* 7. Future-proofing with EPR Nexuss */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-secondary/20 bg-secondary/[0.06] mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brandGreen/15 flex items-center justify-center flex-shrink-0">
                    <Compass className="w-5 h-5 text-brandGreen" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    7. How to future-proof your business against these trends
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-4">
                  We help businesses stay ahead of these shifts rather than
                  reacting to them — monitoring regulatory changes, keeping
                  documentation current, and advising on where your product
                  categories may fall under expanding EPR requirements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Ongoing regulatory monitoring on your behalf",
                    "Early guidance as EPR scope expands",
                    "Support building circular-economy practices",
                    "Reporting that keeps pace with tightening ESG asks",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
                      <Sparkles className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-gray-700 text-[13.5px]">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 8. Trend 5: digital reporting */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    8. Trend 5 — Digital reporting and real-time compliance tracking
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  Regulatory bodies and corporate buyers alike are moving
                  away from static, once-a-year compliance paperwork toward
                  digital portals and dashboards that reflect real-time
                  status. Businesses relying on manual, spreadsheet-based
                  tracking increasingly find themselves scrambling to match
                  the pace of digital verification systems that buyers and
                  regulators now expect as standard.
                </p>
              </section>
            </Reveal>

            {/* 9. Trend 6: green financing */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    9. Trend 6 — The rise of green financing and sustainability-linked terms
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  Some lenders and investors now offer better terms to
                  businesses that meet defined sustainability benchmarks,
                  including waste management and compliance standards. As
                  this becomes more common, a business's environmental
                  track record starts to influence not just its customer
                  base, but its access to capital and the terms attached to it.
                </p>
              </section>
            </Reveal>

            {/* 10. Internal monitoring process */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  10. Building an internal process for monitoring these trends
                </h2>
                <p className="text-gray-600 text-[15px] mb-4">
                  Rather than reacting to each regulatory update as it
                  appears, businesses benefit from a lightweight, ongoing
                  monitoring habit.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Quarterly compliance review", text: "A short internal check-in to confirm nothing has changed in your regulatory obligations." },
                    { title: "Assign clear ownership", text: "One person or team responsible for tracking updates, rather than leaving it to whoever notices first." },
                    { title: "Subscribe to regulatory updates", text: "Following relevant government and industry bulletins catches changes earlier than word of mouth." },
                    { title: "Partner-based monitoring", text: "A compliance partner can flag relevant changes as part of an ongoing engagement, reducing internal workload." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <h4 className="text-gray-900 text-[15px] font-bold mb-1.5">{title}</h4>
                      <p className="text-gray-600 text-[14px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 11. Industry-specific implications */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-gray-200 bg-white shadow-sm mb-6">
                <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px] mb-4">
                  11. What these trends mean for different industries
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Electronics", text: "Faces the widest existing EPR obligations, with growing pressure around battery and component recovery specifically." },
                    { title: "Packaging", text: "Plastic packaging rules are tightening quickly, with more categories being brought under mandatory recovery targets." },
                    { title: "Manufacturing", text: "Increasingly expected to demonstrate circular sourcing, not just end-of-life disposal compliance." },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-gray-200 p-4 bg-gray-50">
                      <h4 className="text-gray-900 text-[14.5px] font-bold mb-1">{title}</h4>
                      <p className="text-gray-600 text-[13.5px] m-0">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* 12. Building a 3-year roadmap */}
            <Reveal delay={0.05}>
              <section className="rounded-[24px] p-6 sm:p-8 border border-secondary/20 bg-secondary/[0.06] mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brandGreen/15 flex items-center justify-center flex-shrink-0">
                    <Compass className="w-5 h-5 text-brandGreen" />
                  </div>
                  <h2 className="font-display font-extrabold text-gray-900 text-[22px] sm:text-[26px]">
                    12. Preparing a forward-looking roadmap aligned with these trends
                  </h2>
                </div>
                <p className="text-gray-600 text-[15px] mb-0">
                  A useful exercise is mapping out where your business
                  expects to be over the next few years against each of
                  these trends — which categories might come under EPR next,
                  what digital reporting tools you may need to adopt, and
                  how your compliance story should evolve as buyer
                  expectations rise. Businesses that plan ahead this way
                  rarely find themselves caught off guard when a new
                  requirement becomes mandatory.
                </p>
              </section>
            </Reveal>

            {/* Closing CTA */}
            <Reveal delay={0.05}>
              <section className="text-center rounded-[32px] px-6 sm:px-10 py-12 sm:py-16 border border-primary/10 bg-gradient-to-br from-primary to-secondary shadow-lg">
                <h2 className="font-display font-extrabold text-white mb-3" style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}>
                  Stay ahead of what's coming next
                </h2>
                <p className="max-w-[640px] mx-auto text-white/90 text-[15px] mb-0">
                  Talk to us about how these trends apply to your specific
                  industry and product lines.
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