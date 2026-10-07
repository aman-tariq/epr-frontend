/**

 * Blog: EPR Used Oil: Market Analysis and Business Opportunity

 * Route: /blogs/eprcredits/used-oil

 *

 * Sections

 *  1. Hero + stats strip

 *  2. What counts as used oil

 *  3. Regulatory timeline

 *  4. Who has obligations

 *  5. How EPR certificates work (animated flow)

 *  6. Business opportunities

 *  7. Roadmap to get started

 *  + FAQ accordion, CTA, sticky contact form sidebar

 *

 * NOTE: adjust the StickyContactForm import path to match your project.

 * Stack: Vite + react-router-dom (no next/* imports).

 */



import { useState } from "react";

import { Link } from "react-router-dom";

import { motion, type Variants } from "framer-motion";

import {

  FaOilCan,

  FaRecycle,

  FaGavel,

  FaIndustry,

  FaTruck,

  FaFlask,

  FaCertificate,

  FaChartLine,

  FaHandshake,

  FaLeaf,

  FaChevronDown,

  FaArrowRight,

  FaCalendarAlt,

  FaCheckCircle,

  FaWarehouse,

  FaFileSignature,

  FaBalanceScale,

  FaGlobeAsia,

  FaFire,

} from "react-icons/fa";

import StickyContactForm from "@/components/StickyContactForm";



/* ------------------------------------------------------------------ */

/* Animation variants                                                  */

/* ------------------------------------------------------------------ */



const fadeUp: Variants = {

  hidden: { opacity: 0, y: 28 },

  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },

};



const stagger: Variants = {

  hidden: {},

  show: { transition: { staggerChildren: 0.1 } },

};



const popIn: Variants = {

  hidden: { opacity: 0, scale: 0.92 },

  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },

};



/* ------------------------------------------------------------------ */

/* Static data (no dynamic Tailwind interpolation)                     */

/* ------------------------------------------------------------------ */



const STATS = [

  { value: "18 Sep 2023", label: "Rules notified (G.S.R. 677(E))", Icon: FaGavel },

  { value: "1 Apr 2024", label: "EPR for used oil in force", Icon: FaCalendarAlt },

  { value: "100%", label: "Importer target on previous-year imports", Icon: FaGlobeAsia },

  { value: "4", label: "Entity types must register on CPCB portal", Icon: FaFileSignature },

];



const OIL_TYPES = [

  "Used engine oil",

  "Gear oil & industrial gear oil",

  "Hydraulic oil",

  "Turbine & compressor oil",

  "Heat transfer oil",

  "Transformer oil",

  "Spent oil",

  "Tank bottom sludges",

];



const TIMELINE = [

  {

    date: "2 May 2023",

    title: "Draft rules released",

    text: "MoEFCC published the draft amendment proposing EPR for used oil, including targets stretching to 2030 and a dedicated EPR portal.",

  },

  {

    date: "18 Sep 2023",

    title: "Second Amendment Rules notified",

    text: "The Hazardous and Other Wastes (Management and Transboundary Movement) Second Amendment Rules, 2023 added a new EPR chapter for used oil.",

  },

  {

    date: "1 Apr 2024",

    title: "EPR obligations begin",

    text: "The framework came into effect. CPCB's EPR portal became the single point for registration, returns and certificate transactions.",

  },

  {

    date: "Ongoing",

    title: "Certificates, returns and audits",

    text: "Registered recyclers generate EPR certificates, producers and importers purchase them, and compliance is tracked through quarterly and annual filings.",

  },

];



const ENTITIES = [

  {

    title: "Producers",

    text: "Producers of base oil or lubricating oil carry an obligation based on the quantity they place on the market.",

    Icon: FaIndustry,

    tone: "green" as const,

  },

  {

    title: "Importers",

    text: "Used oil importers must meet a target equal to 100% of the used oil imported in the previous year.",

    Icon: FaGlobeAsia,

    tone: "blue" as const,

  },

  {

    title: "Collection agents",

    text: "Collect used oil from garages, workshops and industries and channel it to registered recyclers.",

    Icon: FaTruck,

    tone: "green" as const,

  },

  {

    title: "Recyclers",

    text: "Registered recyclers process used oil and earn EPR certificates that producers and importers buy.",

    Icon: FaRecycle,

    tone: "blue" as const,

  },

];



const FLOW = [

  { title: "Collect", text: "Used oil is gathered from generators", Icon: FaTruck },

  { title: "Recycle", text: "Re-refining is the preferred route", Icon: FaFlask },

  { title: "Certify", text: "CPCB issues EPR certificates", Icon: FaCertificate },

  { title: "Trade", text: "Producers and importers buy certificates", Icon: FaHandshake },

];



const OPPORTUNITIES = [

  {

    title: "Used oil collection network",

    text: "Aggregate oil from service stations, fleets and factories. Reliable, documented collection is the foundation of the entire chain.",

    Icon: FaTruck,

    tone: "green" as const,

  },

  {

    title: "Re-refining and recycling",

    text: "Recycling sits at the top of the preferred hierarchy. Registered recyclers generate the certificates the market runs on.",

    Icon: FaFlask,

    tone: "blue" as const,

  },

  {

    title: "EPR certificate supply and trading",

    text: "The rules enable CPCB-linked trading platforms and require transactions to be reported, creating a structured certificate market.",

    Icon: FaChartLine,

    tone: "green" as const,

  },

  {

    title: "Storage and logistics",

    text: "Compliant storage, transport and tracking services for generators and aggregators who need a dependable partner.",

    Icon: FaWarehouse,

    tone: "blue" as const,

  },

  {

    title: "Energy recovery",

    text: "Oil that is not suitable for recycling can go to energy recovery, the second option in the prescribed order of priority.",

    Icon: FaFire,

    tone: "green" as const,

  },

  {

    title: "Compliance advisory",

    text: "Producers and importers need help with registration, returns, certificate purchasing and audit readiness.",

    Icon: FaBalanceScale,

    tone: "blue" as const,

  },

];



const ROADMAP = [

  { title: "Identify your role", text: "Producer, importer, collection agent or recycler. Your role decides your obligations and your opportunity." },

  { title: "Register on the CPCB EPR portal", text: "All four entity types must register before operating under the framework." },

  { title: "Set up compliant operations", text: "Authorisations, storage, documentation and tracking aligned with hazardous waste rules." },

  { title: "Generate or purchase certificates", text: "Recyclers generate certificates, while producers and importers buy them to cover their targets." },

  { title: "File returns and stay audit-ready", text: "Quarterly and annual returns, plus records that stand up to an EPR compliance audit." },

];



const FAQS = [

  {

    q: "What is EPR for used oil in India?",

    a: "It is a framework under the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016, added by the Second Amendment Rules, 2023. Producers of base oil or lubricating oil and importers of used oil must ensure that specified quantities of used oil are recycled, mainly by purchasing EPR certificates from registered recyclers.",

  },

  {

    q: "When did used oil EPR come into effect?",

    a: "The rules were notified on 18 September 2023 and the framework commenced on 1 April 2024.",

  },

  {

    q: "Who needs to register on the CPCB portal?",

    a: "Producers, collection agents, recyclers and used oil importers are all required to register on the CPCB EPR portal for used oil management.",

  },

  {

    q: "What is the order of priority for managing used oil?",

    a: "Recycling comes first. Energy recovery, which means using the oil as a fuel, applies to used oil that is not suitable for recycling.",

  },

  {

    q: "Can EPR certificates be traded?",

    a: "Yes. Producers and importers can purchase certificates from registered recyclers, the rules allow trading platforms to be set up, and information on certificate transactions must be submitted to CPCB.",

  },

  {

    q: "How can EPR Nexuss help?",

    a: "We support registration, compliance planning, certificate sourcing and ongoing reporting. Use the contact form on this page and our team will get back to you.",

  },

];



/* Static colour maps */

const TONE_BOX = {

  green: "bg-[#5AC361]/10 text-[#5AC361] border-[#5AC361]/30",

  blue: "bg-sky-500/10 text-sky-500 border-sky-500/30",

};

const TONE_BAR = {

  green: "from-[#5AC361] to-emerald-400",

  blue: "from-sky-500 to-blue-500",

};

function MarketplaceButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="https://www.eprnexuss.com/marketplace/"
      className={`inline-flex items-center gap-2 rounded-full bg-[#5AC361] px-6 py-3 font-semibold text-slate-900 transition hover:brightness-110 hover:scale-[1.03] ${className}`}
    >
      {children}
      <FaArrowRight />
    </a>
  );
}




/* ------------------------------------------------------------------ */

/* Small building blocks                                               */

/* ------------------------------------------------------------------ */



function SectionHeading({

  index,

  eyebrow,

  title,

  subtitle,

}: {

  index: string;

  eyebrow: string;

  title: string;

  subtitle?: string;

}) {

  return (

    <motion.div

      variants={fadeUp}

      initial="hidden"

      whileInView="show"

      viewport={{ once: true, margin: "-60px" }}

      className="mb-8"

    >

      <div className="flex items-center gap-3 mb-3">

        <span

          className="text-sm font-bold tracking-widest text-sky-500"

          style={{ fontFamily: "Outfit, sans-serif" }}

        >

          {index}

        </span>

        <span className="h-px w-10 bg-gradient-to-r from-[#5AC361] to-sky-500" />

        <span className="text-xs font-semibold uppercase tracking-widest text-[#5AC361]">

          {eyebrow}

        </span>

      </div>

      <h2

        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight"

        style={{ fontFamily: "Outfit, sans-serif" }}

      >

        {title}

      </h2>

      {subtitle && (

        <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>

      )}

    </motion.div>

  );

}



function FlowDiagram() {

  return (

    <div className="relative">

      {/* Animated connector (desktop) */}

      <svg

        className="hidden md:block absolute left-0 right-0 top-9 w-full h-2 pointer-events-none"

        viewBox="0 0 100 2"

        preserveAspectRatio="none"

        aria-hidden="true"

      >

        <defs>

          <linearGradient id="flowGrad" x1="0" x2="1" y1="0" y2="0">

            <stop offset="0%" stopColor="#5AC361" />

            <stop offset="100%" stopColor="#0ea5e9" />

          </linearGradient>

        </defs>

        <motion.line

          x1="12"

          y1="1"

          x2="88"

          y2="1"

          stroke="url(#flowGrad)"

          strokeWidth="0.6"

          strokeDasharray="2 2"

          animate={{ strokeDashoffset: [0, -8] }}

          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}

        />

      </svg>



      <motion.div

        variants={stagger}

        initial="hidden"

        whileInView="show"

        viewport={{ once: true, margin: "-60px" }}

        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"

      >

        {FLOW.map(({ title, text, Icon }, i) => (

          <motion.div

            key={title}

            variants={popIn}

            className="relative flex flex-col items-center text-center"

          >

            <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-[#5AC361] to-sky-500 text-white shadow-lg">

              <Icon className="text-2xl" />

              <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-card border border-border text-xs font-bold text-foreground">

                {i + 1}

              </span>

            </div>

            <h3

              className="mt-4 text-lg font-semibold text-foreground"

              style={{ fontFamily: "Outfit, sans-serif" }}

            >

              {title}

            </h3>

            <p className="mt-1 text-sm text-muted-foreground">{text}</p>

          </motion.div>

        ))}

      </motion.div>

    </div>

  );

}



function FaqItem({ q, a }: { q: string; a: string }) {

  const [open, setOpen] = useState(false);

  return (

    <div className="rounded-xl border border-border bg-card overflow-hidden">

      <button

        type="button"

        onClick={() => setOpen((v) => !v)}

        aria-expanded={open}

        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"

      >

        <span className="font-semibold text-foreground">{q}</span>

        <motion.span

          animate={{ rotate: open ? 180 : 0 }}

          transition={{ duration: 0.25 }}

          className="shrink-0 text-[#5AC361]"

        >

          <FaChevronDown />

        </motion.span>

      </button>

      <motion.div

        initial={false}

        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}

        transition={{ duration: 0.3, ease: "easeInOut" }}

        style={{ overflow: "hidden" }}

      >

        <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>

      </motion.div>

    </div>

  );

}



/* ------------------------------------------------------------------ */

/* Page                                                                */

/* ------------------------------------------------------------------ */



export default function UsedOilBlog() {

  return (

    <article className="bg-background text-foreground">

       <div className="flex flex-col lg:flex-row gap-2 items-stretch ">

        <div>

      {/* ============================ HERO ============================ */}

      <header className="relative overflow-hidden bg-gradient-to-br md:mt-10 from-emerald-950 via-slate-900 to-sky-950">

        {/* Decorative blobs */}

        <motion.div

          aria-hidden="true"

          className="absolute -top-24 -left-24 h-72 w-72  rounded-full bg-[#5AC361]/25 blur-3xl"

          animate={{ y: [0, 24, 0], x: [0, 16, 0] }}

          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}

        />

        <motion.div

          aria-hidden="true"

          className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-sky-500/25 blur-3xl"

          animate={{ y: [0, -24, 0], x: [0, -16, 0] }}

          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}

        />



        {/* Oil-drop illustration */}

        <motion.svg

          aria-hidden="true"

          viewBox="0 0 120 160"

          className="hidden lg:block absolute right-16 top-16 h-56 w-44 opacity-90"

          animate={{ y: [0, -14, 0] }}

          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}

        >

          <defs>

            <linearGradient id="dropGrad" x1="0" x2="1" y1="0" y2="1">

              <stop offset="0%" stopColor="#5AC361" />

              <stop offset="100%" stopColor="#0ea5e9" />

            </linearGradient>

          </defs>

          <path

            d="M60 8 C60 8 14 66 14 102 a46 46 0 0 0 92 0 C106 66 60 8 60 8 Z"

            fill="url(#dropGrad)"

          />

          <path

            d="M38 98 a22 22 0 0 0 20 24"

            stroke="white"

            strokeOpacity="0.6"

            strokeWidth="5"

            strokeLinecap="round"

            fill="none"

          />

        </motion.svg>



        <div className="relative mx-auto max-w-7xl px-1 sm:px-1 lg:px-1 py-16 sm:py-24">

          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">

            <motion.nav variants={fadeUp} className="mb-5 text-sm text-slate-300">

              <Link to="/blogs" className="hover:text-[#5AC361]">Blogs</Link>

              <span className="mx-2">/</span>

              <Link to="/blogs/eprcredits" className="hover:text-[#5AC361]">EPR Credits</Link>

              <span className="mx-2">/</span>

              <span className="text-white">Used Oil</span>

            </motion.nav>



            <motion.span

              variants={fadeUp}

              className="inline-flex items-center gap-2 rounded-full border border-[#5AC361]/40 bg-[#5AC361]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#5AC361]"

            >

              <FaOilCan /> EPR Credits · Used Oil

            </motion.span>



            <motion.h1

              variants={fadeUp}

              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white"

              style={{ fontFamily: "Outfit, sans-serif" }}

            >

              EPR Used Oil:{" "}

              <span className="bg-gradient-to-r from-[#5AC361] to-sky-400 bg-clip-text text-transparent">

                Market Analysis & Business Opportunity

              </span>

            </motion.h1>



            <motion.p variants={fadeUp} className="mt-6 text-lg text-slate-300 leading-relaxed">

              India now has a dedicated EPR framework for used oil. Here is what the rules

              say, who is affected, how EPR certificates work, and where the real business

              opportunities sit across the value chain.

            </motion.p>



            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">

              <a

                href="#roadmap"

                className="inline-flex items-center gap-2 rounded-full bg-[#5AC361] px-6 py-3 font-semibold text-slate-900 transition hover:brightness-110"

              >

                See the roadmap <FaArrowRight />

              </a>

              <a

                href="#opportunities"

                className="inline-flex items-center gap-2 rounded-full border border-sky-400/50 px-6 py-3 font-semibold text-sky-300 transition hover:bg-sky-400/10"

              >

                Explore opportunities

              </a>

              <MarketplaceButton>
                Explore Used Oil EPR Marketplace
              </MarketplaceButton>

            </motion.div>

          </motion.div>

        </div>

      </header>



      {/* ========================= STATS STRIP ======================== */}

      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div

          variants={stagger}

          initial="hidden"

          whileInView="show"

          viewport={{ once: true }}

          className="grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-xl"

        >

          {STATS.map(({ value, label, Icon }) => (

            <motion.div key={label} variants={popIn} className="flex items-start gap-3">

              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#5AC361] to-sky-500 text-white">

                <Icon />

              </span>

              <div>

                <div

                  className="text-lg sm:text-xl font-bold text-foreground"

                  style={{ fontFamily: "Outfit, sans-serif" }}

                >

                  {value}

                </div>

                <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </section>



      {/* ====================== BODY + SIDEBAR ======================== */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

          {/* ------------------------ MAIN COLUMN ------------------------ */}

          <div className="min-w-0 space-y-20">

            {/* 1. What is used oil */}

            <section id="what-is-used-oil">

              <SectionHeading

                index="01"

                eyebrow="The basics"

                title="What counts as used oil?"

                subtitle="Under India's hazardous waste rules, used oil covers far more than old engine oil. It includes any oil derived from crude oil, or mixtures containing synthetic oil, that has been used and can no longer perform."

              />

              <motion.div

                variants={stagger}

                initial="hidden"

                whileInView="show"

                viewport={{ once: true, margin: "-60px" }}

                className="grid grid-cols-1 sm:grid-cols-2 gap-3"

              >

                {OIL_TYPES.map((t) => (

                  <motion.div

                    key={t}

                    variants={fadeUp}

                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"

                  >

                    <FaCheckCircle className="shrink-0 text-[#5AC361]" />

                    <span className="text-sm font-medium text-foreground">{t}</span>

                  </motion.div>

                ))}

              </motion.div>

              <motion.div

                variants={fadeUp}

                initial="hidden"

                whileInView="show"

                viewport={{ once: true }}

                className="mt-6 flex gap-4 rounded-xl border border-sky-500/30 bg-sky-500/10 p-5"

              >

                <FaLeaf className="mt-1 shrink-0 text-xl text-sky-500" />

                <p className="text-sm leading-relaxed text-muted-foreground">

                  <strong className="text-foreground">Why it matters:</strong> used oil is

                  classified as hazardous waste. Improper disposal can contaminate soil and

                  water, while proper collection and re-refining turns it back into a

                  usable resource.

                </p>

              </motion.div>

            </section>



            {/* 2. Timeline */}

            <section id="regulation">

              <SectionHeading

                index="02"

                eyebrow="Regulation"

                title="How the used oil EPR framework came together"

                subtitle="The framework was added to the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016 through the Second Amendment Rules, 2023."

              />

              <div className="relative ml-3 border-l-2 border-dashed border-sky-500/40 pl-8 space-y-8">

                {TIMELINE.map((item, i) => (

                  <motion.div

                    key={item.title}

                    variants={fadeUp}

                    initial="hidden"

                    whileInView="show"

                    viewport={{ once: true, margin: "-40px" }}

                    transition={{ delay: i * 0.05 }}

                    className="relative"

                  >

                    <span className="absolute -left-[45px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#5AC361] to-sky-500 ring-4 ring-background">

                      <span className="h-2 w-2 rounded-full bg-white" />

                    </span>

                    <span className="text-xs font-bold uppercase tracking-widest text-sky-500">

                      {item.date}

                    </span>

                    <h3

                      className="mt-1 text-xl font-semibold text-foreground"

                      style={{ fontFamily: "Outfit, sans-serif" }}

                    >

                      {item.title}

                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">

                      {item.text}

                    </p>

                  </motion.div>

                ))}

              </div>

            </section>



            {/* 3. Who has obligations */}

            <section id="obligations">

              <SectionHeading

                index="03"

                eyebrow="Stakeholders"

                title="Who is covered and what do they owe?"

                subtitle="Producers, collection agents, recyclers and importers must all register on the CPCB EPR portal. Each plays a different part in keeping used oil out of the environment."

              />

              <motion.div

                variants={stagger}

                initial="hidden"

                whileInView="show"

                viewport={{ once: true, margin: "-60px" }}

                className="grid grid-cols-1 sm:grid-cols-2 gap-5"

              >

                {ENTITIES.map(({ title, text, Icon, tone }) => (

                  <motion.div

                    key={title}

                    variants={popIn}

                    whileHover={{ y: -6 }}

                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6"

                  >

                    <span

                      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${TONE_BAR[tone]}`}

                    />

                    <span

                      className={`flex h-12 w-12 items-center justify-center rounded-xl border text-xl ${TONE_BOX[tone]}`}

                    >

                      <Icon />

                    </span>

                    <h3

                      className="mt-4 text-xl font-semibold text-foreground"

                      style={{ fontFamily: "Outfit, sans-serif" }}

                    >

                      {title}

                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>

                  </motion.div>

                ))}

              </motion.div>

            </section>



            {/* 4. How certificates work */}

            <section id="certificates">

              <SectionHeading

                index="04"

                eyebrow="The mechanism"

                title="How EPR certificates work"

                subtitle="Producers and importers do not have to recycle oil themselves. They meet their targets by purchasing EPR certificates generated by registered recyclers."

              />

              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">

                <FlowDiagram />

              </div>

              <motion.ul

                variants={stagger}

                initial="hidden"

                whileInView="show"

                viewport={{ once: true }}

                className="mt-6 space-y-3"

              >

                {[

                  "Recycling is the first priority. Energy recovery applies to oil not suitable for recycling.",

                  "CPCB issues EPR certificates to registered recyclers through its portal.",

                  "The rules allow CPCB, or an accredited agency, to set up trading platforms for certificates.",

                  "All certificate transactions must be reported to CPCB, and compliance is subject to audit.",

                ].map((point) => (

                  <motion.li

                    key={point}

                    variants={fadeUp}

                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"

                  >

                    <FaCheckCircle className="mt-0.5 shrink-0 text-[#5AC361]" />

                    {point}

                  </motion.li>

                ))}

              </motion.ul>

            </section>



            <div className="flex justify-center">
            <MarketplaceButton>
              Buy & Sell Used Oil EPR Credits
            </MarketplaceButton>
          </div>

          {/* 5. Opportunities */}

            <section id="opportunities">

              <SectionHeading

                index="05"

                eyebrow="Market analysis"

                title="Where the business opportunities are"

                subtitle="A mandatory, certificate-based system creates demand at every step of the chain. These are the areas businesses are looking at."

              />

              <motion.div

                variants={stagger}

                initial="hidden"

                whileInView="show"

                viewport={{ once: true, margin: "-60px" }}

                className="grid grid-cols-1 sm:grid-cols-2 gap-5"

              >

                {OPPORTUNITIES.map(({ title, text, Icon, tone }) => (

                  <motion.div

                    key={title}

                    variants={popIn}

                    whileHover={{ y: -6, scale: 1.01 }}

                    className="relative overflow-hidden rounded-2xl border border-border bg-card p-6"

                  >

                    <span

                      className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 ${TONE_BAR[tone]}`}

                    />

                    <span

                      className={`relative flex h-12 w-12 items-center justify-center rounded-xl border text-xl ${TONE_BOX[tone]}`}

                    >

                      <Icon />

                    </span>

                    <h3

                      className="relative mt-4 text-lg font-semibold text-foreground"

                      style={{ fontFamily: "Outfit, sans-serif" }}

                    >

                      {title}

                    </h3>

                    <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">

                      {text}

                    </p>

                  </motion.div>

                ))}

              </motion.div>

            </section>



            {/* 6. Roadmap */}

            <section id="roadmap">

              <SectionHeading

                index="06"

                eyebrow="Getting started"

                title="Your roadmap into used oil EPR"

                subtitle="Whether you are a producer who needs to comply or an operator who wants to enter the market, the path looks similar."

              />

              <div className="space-y-4">

                {ROADMAP.map((step, i) => (

                  <motion.div

                    key={step.title}

                    variants={fadeUp}

                    initial="hidden"

                    whileInView="show"

                    viewport={{ once: true, margin: "-40px" }}

                    className="flex gap-4 rounded-2xl border border-border bg-card p-5"

                  >

                    <span

                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#5AC361] to-sky-500 text-lg font-bold text-white"

                      style={{ fontFamily: "Outfit, sans-serif" }}

                    >

                      {i + 1}

                    </span>

                    <div>

                      <h3

                        className="text-lg font-semibold text-foreground"

                        style={{ fontFamily: "Outfit, sans-serif" }}

                      >

                        {step.title}

                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">

                        {step.text}

                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

            </section>



            {/* 7. FAQ + CTA */}

            <section id="faq">

              <SectionHeading

                index="07"

                eyebrow="FAQ"

                title="Frequently asked questions"

              />

              <div className="space-y-3">

                {FAQS.map((f) => (

                  <FaqItem key={f.q} q={f.q} a={f.a} />

                ))}

              </div>



              <motion.div

                variants={fadeUp}

                initial="hidden"

                whileInView="show"

                viewport={{ once: true }}

                className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-[#5AC361] to-sky-500 p-8 text-center sm:p-10"

              >

                <h3

                  className="text-2xl sm:text-3xl font-bold text-white"

                  style={{ fontFamily: "Outfit, sans-serif" }}

                >

                  Ready to turn used oil compliance into opportunity?

                </h3>

                <p className="mx-auto mt-3 max-w-xl text-white/90">

                  Talk to the EPR Nexuss team about registration, certificate sourcing and

                  compliance support.

                </p>

                <MarketplaceButton className="mr-2">
                  Trade Used Oil EPR Credits
                </MarketplaceButton>

                <Link

                  to="/contact"

                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-slate-900 transition hover:scale-105"

                >

                  Contact us <FaArrowRight />

                </Link>

              </motion.div>



              <p className="mt-8 text-xs leading-relaxed text-muted-foreground">

                Regulatory details are based on the Hazardous and Other Wastes (Management and

                Transboundary Movement) Second Amendment Rules, 2023 and CPCB guidance. Targets

                and procedures can change, so always confirm current requirements on the CPCB

                EPR portal before making compliance decisions.

              </p>

            </section>

          </div>

           </div>

          </div>



          {/* ------------------------ SIDEBAR ------------------------ */}

          <aside className="hidden lg:block shrink-0 w-[320px]">

            <div className="sticky top-28 px-2">

              <StickyContactForm />

            </div>

          </aside>

          </div>

    </article>

  );

} 