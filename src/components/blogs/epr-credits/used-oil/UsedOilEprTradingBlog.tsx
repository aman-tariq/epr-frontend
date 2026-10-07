/**

 * Blog: EPR Used Oil: Credit Trading and Marketplace Guide

 * Route: /blogs/eprcredits/used-oil  (second post in this category, give it its own slug in blog.ts)

 *

 * Sections

 *  1. Hero + stats strip

 *  2. The credit market at a glance (sellers vs buyers)

 *  3. How a recycler generates a certificate (interactive stepper)

 *  4. How buying works for producers and importers

 *  5. Rules of the trading platform

 *  6. Buyer / seller checklist (tabs)

 *  7. Risks to avoid

 *  + FAQ accordion, CTA, sticky contact form sidebar

 *

 * Stack: Vite + react-router-dom (no next/* imports).

 * NOTE: adjust the StickyContactForm import path to match your project.

 */



import { useState, type ReactNode } from "react";

import { Link } from "react-router-dom";

import { motion, AnimatePresence, type Variants } from "framer-motion";

import {

  FaOilCan,

  FaExchangeAlt,

  FaStore,

  FaIndustry,

  FaRecycle,

  FaCertificate,

  FaDatabase,

  FaFlask,

  FaCogs,

  FaFileAlt,

  FaPaperPlane,

  FaShieldAlt,

  FaBan,

  FaCheckCircle,

  FaChevronDown,

  FaArrowRight,

  FaExclamationTriangle,

  FaSearch,

  FaClipboardList,

  FaSyncAlt,

  FaUserShield,

  FaBalanceScale,

} from "react-icons/fa";

import StickyContactForm from "@/components/StickyContactForm";

function MarketplaceButton({
  children,
  className = "",
}: {
  children: ReactNode;
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

  { value: "1 portal", label: "CPCB EPR portal handles generation and transfer", Icon: FaDatabase },

  { value: "6 steps", label: "In the recycler certificate module", Icon: FaClipboardList },

  { value: "Auto", label: "Buyer's target adjusts when a certificate is bought", Icon: FaSyncAlt },

  { value: "No brokers", label: "Allowed on authorised trading platforms", Icon: FaBan },

];



const TONE_BOX = {

  green: "bg-[#5AC361]/10 text-[#5AC361] border-[#5AC361]/30",

  blue: "bg-sky-500/10 text-sky-500 border-sky-500/30",

};

const TONE_BAR = {

  green: "from-[#5AC361] to-emerald-400",

  blue: "from-sky-500 to-blue-500",

};



const SELLERS = [

  "Registered used oil recyclers (re-refiners)",

  "Generate certificates after processing and selling re-refined oil",

  "Certificate value is expressed in metric tonnes (MT)",

];

const BUYERS = [

  "Producers of base oil or lubricating oil",

  "Importers of used oil",

  "Buy certificates to meet their annual recycling target",

];



const GEN_STEPS = [

  {

    title: "Procurement data",

    Icon: FaDatabase,

    text: "The recycler records the used oil it procures: the source, the type of used oil, the quantity and the date. Everything downstream is built on this record, so accuracy here matters.",

  },

  {

    title: "Production data",

    Icon: FaCogs,

    text: "Next comes the quantity of used oil processed and the re-refined oil produced. This links what came in to what went out.",

  },

  {

    title: "Generate certificate",

    Icon: FaCertificate,

    text: "Once re-refined oil is sold, the portal generates the certificate. CPCB's guidance says it considers the technology used and the quality of the re-refined oil.",

  },

  {

    title: "Denominate certificate",

    Icon: FaFlask,

    text: "The generated value is divided into denominations so it can be sold in practical lots rather than as one large block.",

  },

  {

    title: "Certificate details",

    Icon: FaFileAlt,

    text: "The recycler can review the certificate details, including its total value in MT, before offering it to a buyer.",

  },

  {

    title: "Transfer certificate",

    Icon: FaPaperPlane,

    text: "The denominated certificate is transferred to the buyer through the portal, which keeps a record of the transaction.",

  },

];



const BUY_POINTS = [

  {

    title: "Register on the portal",

    text: "Producers and importers register on the CPCB EPR portal for used oil before they can transact.",

    Icon: FaUserShield,

    tone: "green" as const,

  },

  {

    title: "Know your target",

    text: "An importer's target is 100% of the used oil imported in the previous year. Producers' targets rise each year as prescribed.",

    Icon: FaBalanceScale,

    tone: "blue" as const,

  },

  {

    title: "Purchase certificates",

    text: "Buy certificates from registered recyclers, directly or through an authorised trading platform.",

    Icon: FaExchangeAlt,

    tone: "green" as const,

  },

  {

    title: "Auto-adjustment",

    text: "On purchase, your target is adjusted against the certificate's recycling value, and the certificate is extinguished.",

    Icon: FaSyncAlt,

    tone: "blue" as const,

  },

];



const PLATFORM_RULES = [

  {

    title: "Run by an authorised operator",

    text: "The rules let CPCB, or an agency accredited by CPCB, create trading platforms for buying and selling certificates.",

    Icon: FaStore,

  },

  {

    title: "No obligated entities as operators",

    text: "CPCB's guidelines bar entities with an EPR obligation from being empanelled as platform providers or sitting on the operator's board.",

    Icon: FaShieldAlt,

  },

  {

    title: "No brokers",

    text: "The guidelines do not permit brokers on the platform, so trades happen between registered entities.",

    Icon: FaBan,

  },

  {

    title: "Portal stays the source of truth",

    text: "Certificates are generated and transferred on CPCB's centralised EPR portal. The platform helps parties find each other and settle.",

    Icon: FaDatabase,

  },

];



const CHECKLISTS = {

  buyer: {

    label: "I'm a buyer",

    Icon: FaIndustry,

    items: [

      "Confirm the recycler is registered on the CPCB used oil EPR portal",

      "Check your own target for the year before you start buying",

      "Agree quantity, delivery timing and settlement terms in writing",

      "Buy through the portal or an authorised platform so the transfer is recorded",

      "Verify your target was adjusted after the transfer",

      "Keep records ready for returns and audits",

    ],

  },

  seller: {

    label: "I'm a recycler",

    Icon: FaRecycle,

    items: [

      "Record procurement data accurately, date by date",

      "Keep production and sales records that match your portal entries",

      "Denominate certificates in lots your buyers can actually use",

      "Vet buyers: they must be registered producers or importers",

      "Transfer only through the portal and confirm the transaction details",

      "File returns on time and stay audit-ready",

    ],

  },

};



const RISKS = [

  {

    title: "Over-generation from false data",

    text: "Submitting incorrect information to generate more certificates than your real processing supports is a violation under the rules.",

  },

  {

    title: "Buying from unregistered sellers",

    text: "A certificate only counts if it was generated on the CPCB portal by a registered recycler. Always verify before you pay.",

  },

  {

    title: "Paying outside the system",

    text: "Informal deals without a recorded portal transfer will not adjust your target, however much money changes hands.",

  },

  {

    title: "Leaving it to the last minute",

    text: "Targets run on an annual cycle. Buying late can mean fewer sellers, rushed due diligence and avoidable pressure.",

  },

];



const FAQS = [

  {

    q: "Who sells and who buys EPR certificates for used oil?",

    a: "Registered recyclers generate and sell certificates. Producers of base oil or lubricating oil and importers of used oil buy them to meet their targets.",

  },

  {

    q: "What happens to a certificate after I buy it?",

    a: "When a producer or importer buys a certificate, their EPR target is automatically adjusted against its recycling value. The certificate is then extinguished, so it cannot be reused.",

  },

  {

    q: "Is there a trading platform for used oil certificates?",

    a: "The rules allow CPCB, or an agency accredited with CPCB, to create trading platforms. CPCB has also issued guidelines for authorising electronic trading and settlement platform operators, covering used oil among other EPR streams.",

  },

  {

    q: "Can brokers trade on the platform?",

    a: "No. CPCB's guidelines for authorised trading platform operators do not permit brokers on the platform.",

  },

  {

    q: "How does a recycler generate certificates?",

    a: "Through the certificate module on the used oil EPR portal: record procurement data, record production data, generate the certificate, denominate it, review details and transfer it to the buyer.",

  },

  {

    q: "Where can EPR Nexuss help?",

    a: "We help producers, importers and recyclers with registration, certificate sourcing, documentation and reporting. Use the contact form on this page to reach our team.",

  },

];



/* ------------------------------------------------------------------ */

/* Building blocks                                                     */

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



function MarketExchange() {

  return (

    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-stretch gap-6">

        {/* Sellers */}

        <motion.div

          variants={fadeUp}

          initial="hidden"

          whileInView="show"

          viewport={{ once: true }}

          className="rounded-xl border border-[#5AC361]/30 bg-[#5AC361]/5 p-5"

        >

          <div className="flex items-center gap-3">

            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5AC361] text-white">

              <FaRecycle className="text-lg" />

            </span>

            <h3

              className="text-lg font-semibold text-foreground"

              style={{ fontFamily: "Outfit, sans-serif" }}

            >

              Sellers

            </h3>

          </div>

          <ul className="mt-4 space-y-2">

            {SELLERS.map((s) => (

              <li key={s} className="flex gap-2 text-sm text-muted-foreground">

                <FaCheckCircle className="mt-0.5 shrink-0 text-[#5AC361]" />

                {s}

              </li>

            ))}

          </ul>

        </motion.div>



        {/* Animated exchange */}

        <div className="flex flex-col items-center justify-center gap-2 py-2">

          <motion.div

            animate={{ x: [-6, 6, -6] }}

            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}

            className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#5AC361] to-sky-500 text-white shadow-lg"

          >

            <FaExchangeAlt className="text-xl" />

          </motion.div>

          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">

            Certificates

          </span>

        </div>



        {/* Buyers */}

        <motion.div

          variants={fadeUp}

          initial="hidden"

          whileInView="show"

          viewport={{ once: true }}

          className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-5"

        >

          <div className="flex items-center gap-3">

            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500 text-white">

              <FaIndustry className="text-lg" />

            </span>

            <h3

              className="text-lg font-semibold text-foreground"

              style={{ fontFamily: "Outfit, sans-serif" }}

            >

              Buyers

            </h3>

          </div>

          <ul className="mt-4 space-y-2">

            {BUYERS.map((b) => (

              <li key={b} className="flex gap-2 text-sm text-muted-foreground">

                <FaCheckCircle className="mt-0.5 shrink-0 text-sky-500" />

                {b}

              </li>

            ))}

          </ul>

        </motion.div>

      </div>

    </div>

  );

}



function GenerationStepper() {

  const [active, setActive] = useState(0);

  const step = GEN_STEPS[active];

  const ActiveIcon = step.Icon;



  return (

    <div className="rounded-2xl border border-border bg-card p-5 sm:p-8">

      {/* Step pills */}

      <div className="flex flex-wrap gap-2">

        {GEN_STEPS.map((s, i) => {

          const isActive = i === active;

          return (

            <button

              key={s.title}

              type="button"

              onClick={() => setActive(i)}

              className={

                isActive

                  ? "flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5AC361] to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow"

                  : "flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition hover:border-[#5AC361] hover:text-foreground"

              }

            >

              <span

                className={

                  isActive

                    ? "flex h-5 w-5 items-center justify-center rounded-full bg-white/25 text-xs"

                    : "flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs"

                }

              >

                {i + 1}

              </span>

              <span className="hidden sm:inline">{s.title}</span>

            </button>

          );

        })}

      </div>



      {/* Progress bar */}

      <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-muted">

        <motion.div

          className="h-full rounded-full bg-gradient-to-r from-[#5AC361] to-sky-500"

          animate={{ width: `${((active + 1) / GEN_STEPS.length) * 100}%` }}

          transition={{ duration: 0.4, ease: "easeOut" }}

        />

      </div>



      {/* Detail panel */}

      <AnimatePresence mode="wait">

        <motion.div

          key={step.title}

          initial={{ opacity: 0, y: 14 }}

          animate={{ opacity: 1, y: 0 }}

          exit={{ opacity: 0, y: -14 }}

          transition={{ duration: 0.25 }}

          className="mt-6 flex gap-4"

        >

          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5AC361] to-sky-500 text-2xl text-white">

            <ActiveIcon />

          </span>

          <div>

            <p className="text-xs font-bold uppercase tracking-widest text-sky-500">

              Step {active + 1} of {GEN_STEPS.length}

            </p>

            <h3

              className="mt-1 text-xl font-semibold text-foreground"

              style={{ fontFamily: "Outfit, sans-serif" }}

            >

              {step.title}

            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>

          </div>

        </motion.div>

      </AnimatePresence>



      {/* Prev / Next */}

      <div className="mt-6 flex justify-between">

        <button

          type="button"

          disabled={active === 0}

          onClick={() => setActive((v) => Math.max(0, v - 1))}

          className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition disabled:opacity-40"

        >

          Previous

        </button>

        <button

          type="button"

          disabled={active === GEN_STEPS.length - 1}

          onClick={() => setActive((v) => Math.min(GEN_STEPS.length - 1, v + 1))}

          className="rounded-full bg-[#5AC361] px-5 py-2 text-sm font-semibold text-slate-900 transition hover:brightness-110 disabled:opacity-40"

        >

          Next

        </button>

      </div>

    </div>

  );

}



function ChecklistTabs() {

  const [tab, setTab] = useState<"buyer" | "seller">("buyer");

  const data = CHECKLISTS[tab];



  return (

    <div className="rounded-2xl border border-border bg-card p-5 sm:p-8">

      <div className="inline-flex rounded-full border border-border bg-muted p-1">

        {(Object.keys(CHECKLISTS) as Array<"buyer" | "seller">).map((key) => {

          const { label, Icon } = CHECKLISTS[key];

          const isActive = tab === key;

          return (

            <button

              key={key}

              type="button"

              onClick={() => setTab(key)}

              className={

                isActive

                  ? "flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5AC361] to-sky-500 px-5 py-2 text-sm font-semibold text-white"

                  : "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-muted-foreground"

              }

            >

              <Icon /> {label}

            </button>

          );

        })}

      </div>



      <AnimatePresence mode="wait">

        <motion.ul

          key={tab}

          initial={{ opacity: 0, x: 20 }}

          animate={{ opacity: 1, x: 0 }}

          exit={{ opacity: 0, x: -20 }}

          transition={{ duration: 0.25 }}

          className="mt-6 space-y-3"

        >

          {data.items.map((item) => (

            <li

              key={item}

              className="flex gap-3 rounded-xl border border-border px-4 py-3 text-sm text-foreground"

            >

              <FaCheckCircle className="mt-0.5 shrink-0 text-[#5AC361]" />

              {item}

            </li>

          ))}

        </motion.ul>

      </AnimatePresence>

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



export default function UsedOilTradingBlog() {

  return (

    <article className="bg-background text-foreground">

       <div className="flex flex-col lg:flex-row gap-2 items-stretch">

        <div>

      {/* ============================ HERO ============================ */}

      <header className="relative mt-14 overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-sky-950">

        <motion.div

          aria-hidden="true"

          className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl"

          animate={{ y: [0, 24, 0], x: [0, -16, 0] }}

          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}

        />

        <motion.div

          aria-hidden="true"

          className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-[#5AC361]/25 blur-3xl"

          animate={{ y: [0, -24, 0], x: [0, 16, 0] }}

          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}

        />



        {/* Certificate + coin illustration */}

        <svg

          aria-hidden="true"

          viewBox="0 0 220 180"

          className="hidden lg:block absolute right-12 top-14 h-56 w-72"

        >

          <defs>

            <linearGradient id="certGrad" x1="0" x2="1" y1="0" y2="1">

              <stop offset="0%" stopColor="#5AC361" />

              <stop offset="100%" stopColor="#0ea5e9" />

            </linearGradient>

          </defs>

          <motion.g

            animate={{ y: [0, -10, 0] }}

            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}

          >

            <rect x="30" y="30" width="150" height="104" rx="12" fill="url(#certGrad)" opacity="0.95" />

            <rect x="46" y="48" width="70" height="8" rx="4" fill="white" opacity="0.85" />

            <rect x="46" y="66" width="104" height="6" rx="3" fill="white" opacity="0.5" />

            <rect x="46" y="80" width="90" height="6" rx="3" fill="white" opacity="0.5" />

            <circle cx="148" cy="108" r="16" fill="white" opacity="0.9" />

            <path d="M141 108 l5 5 l10 -11" stroke="#0ea5e9" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

          </motion.g>

          <motion.circle

            cx="190"

            cy="40"

            r="12"

            fill="#5AC361"

            animate={{ cy: [40, 28, 40] }}

            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}

          />

          <motion.circle

            cx="26"

            cy="150"

            r="9"

            fill="#0ea5e9"

            animate={{ cy: [150, 138, 150] }}

            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}

          />

        </svg>



        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

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

                Credit Trading & Marketplace Guide

              </span>

            </motion.h1>



            <motion.p variants={fadeUp} className="mt-6 text-lg text-slate-300 leading-relaxed">

              EPR certificates are the currency of India's used oil framework. This guide

              explains who sells them, who buys them, how a certificate is created and

              transferred, and what to check before you trade.

            </motion.p>



            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">

              <a

                href="#generation"

                className="inline-flex items-center gap-2 rounded-full bg-[#5AC361] px-6 py-3 font-semibold text-slate-900 transition hover:brightness-110"

              >

                How certificates are made <FaArrowRight />

              </a>

              <a

                href="#checklist"

                className="inline-flex items-center gap-2 rounded-full border border-sky-400/50 px-6 py-3 font-semibold text-sky-300 transition hover:bg-sky-400/10"

              >

                Trading checklist

              </a>

              <MarketplaceButton>
                Explore Used Oil EPR Marketplace
              </MarketplaceButton>

            </motion.div>

          </motion.div>

        </div>

      </header>



      {/* ========================= STATS STRIP ======================== */}

      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-2 sm:px-6 lg:px-8">

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

      <div className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-2 py-16">

          {/* ------------------------ MAIN COLUMN ------------------------ */}

          <div className="min-w-0 space-y-20">

            {/* 1. Market at a glance */}

            <section id="market">

              <SectionHeading

                index="01"

                eyebrow="The market"

                title="The credit market at a glance"

                subtitle="Used oil EPR runs on a simple exchange. Recyclers do the physical work of recycling, producers and importers carry the obligation, and certificates move value between them."

              />

              <MarketExchange />

              <div className="mt-6">
                <MarketplaceButton>
                  Buy &amp; Sell Used Oil EPR Credits
                </MarketplaceButton>
              </div>

              <motion.p

                variants={fadeUp}

                initial="hidden"

                whileInView="show"

                viewport={{ once: true }}

                className="mt-6 text-sm leading-relaxed text-muted-foreground"

              >

                Each certificate represents a quantity of used oil that has been recycled,

                calculated using a conversion factor prescribed by CPCB. That is what gives

                it value to the buyer: it is documented proof that the recycling happened.

              </motion.p>

            </section>



            {/* 2. Generation stepper */}

            <section id="generation">

              <SectionHeading

                index="02"

                eyebrow="For recyclers"

                title="How a recycler generates a certificate"

                subtitle="CPCB's certificate module for recyclers follows six steps. Tap through them to see what happens at each stage."

              />

              <GenerationStepper />

            </section>



            {/* 3. Buying */}

            <section id="buying">

              <SectionHeading

                index="03"

                eyebrow="For producers and importers"

                title="How buying works"

                subtitle="You do not need to recycle oil yourself. You meet your target by purchasing certificates, and the system does the bookkeeping."

              />

              <motion.div

                variants={stagger}

                initial="hidden"

                whileInView="show"

                viewport={{ once: true, margin: "-60px" }}

                className="grid grid-cols-1 sm:grid-cols-2 gap-5"

              >

                {BUY_POINTS.map(({ title, text, Icon, tone }) => (

                  <motion.div

                    key={title}

                    variants={popIn}

                    whileHover={{ y: -6 }}

                    className="relative overflow-hidden rounded-2xl border border-border bg-card p-6"

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

                      className="mt-4 text-lg font-semibold text-foreground"

                      style={{ fontFamily: "Outfit, sans-serif" }}

                    >

                      {title}

                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>

                  </motion.div>

                ))}

              </motion.div>

            </section>



            {/* 4. Platform rules */}

            <section id="platform">

              <SectionHeading

                index="04"

                eyebrow="The marketplace"

                title="Rules of the trading platform"

                subtitle="Trading platforms make it easier to find counterparties. CPCB has set guardrails so that the marketplace stays fair and the portal stays the record of truth."

              />

              <div className="relative ml-3 border-l-2 border-dashed border-sky-500/40 pl-8 space-y-8">

                {PLATFORM_RULES.map(({ title, text, Icon }, i) => (

                  <motion.div

                    key={title}

                    variants={fadeUp}

                    initial="hidden"

                    whileInView="show"

                    viewport={{ once: true, margin: "-40px" }}

                    transition={{ delay: i * 0.05 }}

                    className="relative"

                  >

                    <span className="absolute -left-[50px] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#5AC361] to-sky-500 text-white ring-4 ring-background">

                      <Icon className="text-sm" />

                    </span>

                    <h3

                      className="text-xl font-semibold text-foreground"

                      style={{ fontFamily: "Outfit, sans-serif" }}

                    >

                      {title}

                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>

                  </motion.div>

                ))}

              </div>

            </section>



            {/* 5. Checklist tabs */}

            <section id="checklist">

              <SectionHeading

                index="05"

                eyebrow="Practical guide"

                title="Your trading checklist"

                subtitle="Pick your side of the market to see what to check before, during and after a transaction."

              />

              <ChecklistTabs />

            </section>



            {/* 6. Risks */}

            <section id="risks">

              <SectionHeading

                index="06"

                eyebrow="Stay safe"

                title="Risks to avoid"

                subtitle="Most problems in certificate markets come from the same few mistakes."

              />

              <motion.div

                variants={stagger}

                initial="hidden"

                whileInView="show"

                viewport={{ once: true, margin: "-60px" }}

                className="grid grid-cols-1 sm:grid-cols-2 gap-5"

              >

                {RISKS.map(({ title, text }) => (

                  <motion.div

                    key={title}

                    variants={popIn}

                    className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5"

                  >

                    <div className="flex items-center gap-3">

                      <FaExclamationTriangle className="shrink-0 text-amber-500" />

                      <h3

                        className="font-semibold text-foreground"

                        style={{ fontFamily: "Outfit, sans-serif" }}

                      >

                        {title}

                      </h3>

                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>

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

                <FaSearch className="mt-1 shrink-0 text-xl text-sky-500" />

                <p className="text-sm leading-relaxed text-muted-foreground">

                  <strong className="text-foreground">Rule of thumb:</strong> if a deal

                  cannot be seen on the CPCB portal, it does not count toward your target.

                </p>

              </motion.div>

            </section>



            {/* 7. FAQ + CTA */}

            <section id="faq">

              <SectionHeading index="07" eyebrow="FAQ" title="Frequently asked questions" />

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

                  Need help buying or selling used oil EPR certificates?

                </h3>

                <p className="mx-auto mt-3 max-w-xl text-white/90">

                  Our team can support registration, certificate sourcing and reporting.

                </p>

                <Link

                  to="/contact"

                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-slate-900 transition hover:scale-105"

                >

                  Contact us <FaArrowRight />

                </Link>

                <div className="mt-4">
                  <MarketplaceButton>
                    Trade Used Oil EPR Credits
                  </MarketplaceButton>
                </div>

              </motion.div>



              <p className="mt-8 text-xs leading-relaxed text-muted-foreground">

                Based on the Hazardous and Other Wastes (Management and Transboundary

                Movement) Second Amendment Rules, 2023, CPCB's used oil EPR portal guidance

                and CPCB's guidelines for EPR electronic trading platform operators.

                Procedures and targets can change, so confirm current requirements on the CPCB

                EPR portal before transacting.

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