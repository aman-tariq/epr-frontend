"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FileCheck2,
  PlayCircle,
  FlaskConical,
  HeartPulse,
  ShieldAlert,
  BadgeCheck,
  Award,
  Globe2,
  Scale,
  Radio,
  Ship,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface LicenseCategory {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

// -----------------------------------------------------------------------------
// Data — static const map (no dynamic Tailwind class interpolation)
// -----------------------------------------------------------------------------

const LICENSE_CATEGORIES: LicenseCategory[] = [
  {
    id: "consent-to-establish",
    title: "Consent To Establish",
    shortTitle: "CTE",
    description:
      "Prior environmental clearance required from the State Pollution Control Board before setting up an industrial or manufacturing unit.",
    href: "/services/consent-to-establish",
    icon: FileCheck2,
  },
  {
    id: "consent-to-operate",
    title: "Consent To Operate",
    shortTitle: "CTO",
    description:
      "Operational authorization confirming your facility meets prescribed pollution control norms before commencing production.",
    href: "/services/consent-to-operate",
    icon: PlayCircle,
  },
  {
    id: "hazardous-waste-authorization",
    title: "Hazardous Waste Authorization",
    shortTitle: "HWA",
    description:
      "Mandatory authorization under the Hazardous & Other Wastes Rules for generation, storage, transport, and disposal of hazardous waste.",
    href: "/services/hazardous-waste-authorization",
    icon: FlaskConical,
  },
  {
    id: "bio-medical-waste-authorization",
    title: "Bio Medical Waste Authorization",
    shortTitle: "BMW",
    description:
      "Authorization under the BMWM Rules, 2016 for healthcare facilities generating, handling, and disposing of bio-medical waste.",
    href: "/services/bio-medical-waste-authorization",
    icon: HeartPulse,
  },
  {
    id: "hazardous-waste-impact-authorization",
    title: "Hazardous Waste Impact Authorization",
    shortTitle: "HWIA",
    description:
      "Impact assessment and authorization for units whose hazardous waste generation, use, or import affects surrounding environment.",
    href: "/services/hazardous-waste-impact-authorization",
    icon: ShieldAlert,
  },
  {
    id: "compulsory-registration-scheme",
    title: "BIS: Compulsory Registration Scheme",
    shortTitle: "CRS",
    description:
      "BIS registration under the Compulsory Registration Scheme for notified electronics and IT products sold in India.",
    href: "/services/complusory-registration-scheme",
    icon: BadgeCheck,
  },
  {
    id: "indian-standards-institute",
    title: "BIS: Indian Standards Institute",
    shortTitle: "ISI",
    description:
      "ISI mark licensing that certifies products conform to the relevant Indian Standard specified by the Bureau of Indian Standards.",
    href: "/services/indian-standards-institute",
    icon: Award,
  },
  {
    id: "foreign-manufacturers-certification-scheme",
    title: "BIS: Foreign Manufacturers Certification Scheme",
    shortTitle: "FMCS",
    description:
      "BIS certification route enabling overseas manufacturers to obtain a license to use the Standard Mark on exports to India.",
    href: "/services/foreign-manufacturers-certification-scheme",
    icon: Globe2,
  },
  {
    id: "legal-metrology-packaged-commodities",
    title: "Legal Metrology Packaged Commodities",
    shortTitle: "LMPC",
    description:
      "Registration under the Legal Metrology Act for pre-packaged commodities, covering declarations, net quantity, and MRP compliance.",
    href: "/services/legal-metrology-packaged-commudities",
    icon: Scale,
  },
  {
    id: "wireless-planning-commission",
    title: "Wireless Planning Commission",
    shortTitle: "WPC",
    description:
      "Equipment type approval (ETA) and import licensing for wireless and radio-frequency devices from the WPC Wing, DoT.",
    href: "/services/wireless-planning-commision",
    icon: Radio,
  },
  {
    id: "directorate-general-of-foreign-trade",
    title: "Directorate General of Foreign Trade",
    shortTitle: "DGFT",
    description:
      "IEC issuance and export-import licensing support for businesses engaged in cross-border trade under India's Foreign Trade Policy.",
    href: "/services/directorate-general-of-foreign-trade",
    icon: Ship,
  },
  {
    id: "extended-producer-responsibility",
    title: "Extended Producer Responsibility",
    shortTitle: "EPR",
    description:
      "EPR registration and compliance for producers, importers, and brand owners under the Plastic Waste Management Rules, E-Waste Rules, and other applicable regulations.",
    href: "/services/extended-producer-responsibility",
    icon: Award,
  },
];

// -----------------------------------------------------------------------------
// Animation variants
// -----------------------------------------------------------------------------

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// -----------------------------------------------------------------------------
// Hero Section
// -----------------------------------------------------------------------------

function LicenseHero() {
  return (
    <section className="relative overflow-hidden md:mt-10 bg-background">
      {/* Ambient background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(90, 195, 97, 0.14)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(90, 195, 97, 0.08)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground"
        >
          <ShieldCheck className="h-4 w-4" style={{ color: "#5AC361" }} />
          Regulatory Licensing & Certification
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          Every license your business needs,
          <span style={{ color: "#5AC361" }}> under one roof.</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="mt-5 max-w-2xl text-lg text-muted-foreground"
        >
          From environmental clearances to BIS product certification, trade
          licenses, and statutory authorizations — we handle the paperwork,
          approvals, and compliance so your operations never stall.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#categories"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "#5AC361" }}
          >
            Explore Licenses
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Talk to an Expert
          </Link>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#5AC361" }} />
            {LICENSE_CATEGORIES.length} License Categories
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#5AC361" }} />
            End-to-End Documentation Support
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#5AC361" }} />
            Pan-India Regulatory Coverage
          </span>
        </motion.div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Category Card
// -----------------------------------------------------------------------------

function LicenseCard({ category, index }: { category: LicenseCategory; index: number }) {
  const Icon = category.icon;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
    >
      <Link
        to={category.href}
        className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        style={{ overflow: "hidden" }}
      >
        {/* Corner accent glow on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundColor: "rgba(90, 195, 97, 0.18)" }}
        />

        <div className="flex items-center justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
            style={{ backgroundColor: "rgba(90, 195, 97, 0.12)" }}
          >
            <Icon className="h-6 w-6" style={{ color: "#5AC361" }} />
          </div>
          <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground">
            {category.shortTitle}
          </span>
        </div>

        <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-foreground">
          {category.title}
        </h3>

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>

        <div
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-2.5"
          style={{ color: "#5AC361" }}
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </div>
      </Link>
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// Grid Section
// -----------------------------------------------------------------------------

function LicenseGrid() {
  return (
    <section id="categories" className="relative bg-background pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-2">
          <span
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: "#5AC361" }}
          >
            Compliance Categories
          </span>
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Licenses & Certifications We Facilitate
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LICENSE_CATEGORIES.map((category, index) => (
            <LicenseCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Page Export
// -----------------------------------------------------------------------------

export default function LicenseCertificationPage() {
  return (
    <main className="min-h-screen bg-background">
      <LicenseHero />
      <LicenseGrid />
    </main>
  );
}