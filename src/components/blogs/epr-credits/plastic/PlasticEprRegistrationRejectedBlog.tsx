"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Building2,
  Tag,
  FileWarning,
  PackageSearch,
  Factory,
  GitCompareArrows,
  ChevronDown,
  ArrowRight,
  ClipboardList,
  FileSearch,
  PenLine,
  UploadCloud,
  Send,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ShieldAlert,
  Users,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";

/* ------------------------------------------------------------------
 * SEO / METADATA
 * Move into your central blog.ts registry the same way other posts
 * are wired in; kept here so the page is self-sufficient.
 * ---------------------------------------------------------------- */
export const plasticEprRejectionMeta = {
  title: "Why Is My Plastic EPR Registration Rejected? Common Reasons & Solutions",
  description:
    "Plastic EPR registration rejected? Learn the common reasons for rejection, document mistakes, incorrect data, category issues and how to fix your application.",
  slug: "plastic-epr-registration-rejected-reasons",
  keywords: [
    "Plastic EPR Registration Rejected",
    "Plastic EPR Rejection Reasons",
    "CPCB EPR Registration",
    "Plastic EPR Registration Problems",
    "Plastic EPR Application",
    "EPR Registration India",
    "CPCB Plastic EPR",
  ],
  openGraph: {
    title: "Why Is My Plastic EPR Registration Rejected? Common Reasons & Solutions",
    description:
      "The most common reasons Plastic EPR registrations get rejected in India — and the exact fix for each, plus what to do after a rejection.",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does Plastic EPR registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The processing time can depend on the completeness of the application and whether clarification or additional information is required. An incomplete application can take longer because additional review may be necessary.",
      },
    },
    {
      "@type": "Question",
      name: "Can I correct a rejected Plastic EPR application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the applicable CPCB system provides an opportunity to address deficiencies or resubmit, the applicant should correct the identified issues and follow the prescribed process.",
      },
    },
    {
      "@type": "Question",
      name: "Why is my Plastic EPR application pending?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An application may remain under processing while the information and documents are being reviewed. If clarification is requested, respond with accurate supporting information rather than repeatedly submitting the same application.",
      },
    },
    {
      "@type": "Question",
      name: "Can wrong plastic quantity cause EPR problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Packaging quantities are important because they affect the determination of EPR obligations. Businesses should maintain reliable records and avoid unsupported estimates.",
      },
    },
    {
      "@type": "Question",
      name: "Can a consultant help with Plastic EPR registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A compliance consultant can help prepare documentation, identify the appropriate category and review the application. However, the business remains responsible for ensuring that the information submitted is accurate.",
      },
    },
  ],
};

/* ------------------------------------------------------------------
 * DATA
 * ---------------------------------------------------------------- */
const reasons = [
  {
    icon: Building2,
    title: "Incorrect business or applicant details",
    problem:
      "Legal entity name, registered address, PAN, GST details, authorized-person information or company registration details don't match the supporting documents.",
    fix: "Compare the application against your official company documents before submitting, and keep every field consistent with them.",
  },
  {
    icon: Tag,
    title: "Choosing the wrong EPR category",
    problem:
      "The application is filed under the wrong applicant type — Producer, Importer, Brand Owner or Plastic Waste Processor each carry different reporting requirements.",
    fix: "Determine your actual category against CPCB's definitions before starting the application, not just your company's general business activity.",
  },
  {
    icon: FileWarning,
    title: "Missing or incorrect documents",
    problem:
      "Required documents are missing, or an unrelated file is uploaded just because the portal asks for an attachment, without actually supporting the information given.",
    fix: "Build a document checklist specific to your applicant category and verify every file actually supports what you've entered before uploading.",
  },
  {
    icon: PackageSearch,
    title: "Incorrect plastic packaging information",
    problem:
      "Wrong quantities, the wrong packaging category, inconsistent figures, or quantities estimated without supporting records.",
    fix: "Maintain packaging data category-wise, and back every figure with invoices, production records and purchase records.",
  },
  {
    icon: Factory,
    title: "Incorrect or inconsistent production data",
    problem:
      "Reported production capacity doesn't line up with what's shown in supporting documentation — for Producers, this includes the process flow diagram.",
    fix: "Have production, operations and compliance teams cross-check figures before submission. The goal is accuracy, not the largest or smallest number.",
  },
  {
    icon: GitCompareArrows,
    title: "Application doesn't match existing records",
    problem:
      "Company address, factory address, authorized person, business name, production details or packaging quantities differ from what's already on file elsewhere.",
    fix: "Use one verified master set of company information across the application — especially important with multiple manufacturing locations or brands.",
  },
];

const fixSteps = [
  {
    icon: FileSearch,
    title: "Identify the exact issue",
    body: "Read the rejection or clarification reason carefully. Don't change unrelated information.",
  },
  {
    icon: ClipboardList,
    title: "Check your supporting documents",
    body: "Find the document or data that actually addresses the issue raised.",
  },
  {
    icon: PenLine,
    title: "Correct the application",
    body: "Make sure the revised information is accurate and internally consistent.",
  },
  {
    icon: UploadCloud,
    title: "Upload required information",
    body: "Use the format specified by the system for any supporting documents.",
  },
  {
    icon: Send,
    title: "Resubmit through the prescribed process",
    body: "CPCB's guidance provides for deficiencies and clarifications to be addressed through the registration process itself.",
  },
];

const checklist = [
  { label: "Business details", verify: "Legal name, PAN, GST and address" },
  { label: "Applicant category", verify: "Producer / Importer / Brand Owner" },
  { label: "Documents", verify: "All applicable documents uploaded" },
  { label: "Packaging data", verify: "Correct category and quantity" },
  { label: "Production data", verify: "Accurate and supportable figures" },
  { label: "Authorized person", verify: "Correct name, designation and contact" },
  { label: "Consents", verify: "Applicable regulatory approvals" },
  { label: "Consistency", verify: "Application matches supporting documents" },
];

const internalLinks = [
  { title: "Plastic EPR Registration Guide", slug: "plastic-epr-registration-guide" },
  { title: "Plastic EPR Target Calculation", slug: "plastic-epr-target-calculation-guide" },
  { title: "How to Buy Plastic EPR Certificates", slug: "buy-plastic-epr-certificates-guide" },
  { title: "Plastic Waste Processor Registration", slug: "plastic-waste-processor-registration" },
];

const faqs = [
  {
    q: "How long does Plastic EPR registration take?",
    a: "The processing time can depend on the completeness of the application and whether clarification or additional information is required. An incomplete application can take longer because additional review may be necessary.",
  },
  {
    q: "Can I correct a rejected Plastic EPR application?",
    a: "If the applicable CPCB system provides an opportunity to address deficiencies or resubmit, correct the identified issues and follow the prescribed process.",
  },
  {
    q: "Why is my Plastic EPR application pending?",
    a: "An application may remain under processing while information and documents are being reviewed. If clarification is requested, respond with accurate supporting information rather than repeatedly resubmitting the same application.",
  },
  {
    q: "Can wrong plastic quantity cause EPR problems?",
    a: "Yes. Packaging quantities affect the determination of EPR obligations, so maintain reliable records and avoid unsupported estimates.",
  },
  {
    q: "Can a consultant help with Plastic EPR registration?",
    a: "Yes — a compliance consultant can help prepare documentation, identify the appropriate category and review the application. The business remains responsible for the accuracy of what's submitted.",
  },
];

/* ------------------------------------------------------------------
 * MOTION — one orchestrated hero reveal only
 * ---------------------------------------------------------------- */
const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const heroItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

/* ------------------------------------------------------------------
 * SUBCOMPONENTS
 * ---------------------------------------------------------------- */
function SectionShell({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden bg-card">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 hover:bg-secondary/5 transition-colors"
            >
              <span className="font-medium text-foreground text-[15px] sm:text-base">
                {item.q}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------
 * PAGE
 * ---------------------------------------------------------------- */
export default function PlasticEprRejectionPage() {
  return (
    <main className="w-full bg-background text-foreground font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col lg:flex-row gap-2 items-stretch md:mt-[130px]">
        <div>

       

      {/* ---------------- HERO ---------------- */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <svg
          className="absolute -right-20 -bottom-20 h-[400px] w-[400px] opacity-[0.13] pointer-events-none"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path d="M100 20 L180 100 L100 180 L20 100 Z" stroke="white" strokeWidth="3" />
          <path d="M100 55 L145 100 L100 145 L55 100 Z" stroke="white" strokeWidth="3" />
        </svg>

        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28 relative">
          <motion.div variants={heroContainer} initial="hidden" animate="show" className="max-w-3xl">
            <motion.span
              variants={heroItem}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs sm:text-sm font-medium backdrop-blur-sm"
            >
              <ShieldAlert className="h-4 w-4" />
              6 common causes, all fixable
            </motion.span>

            <motion.h1
              variants={heroItem}
              className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-semibold mt-5"
            >
              Why is my Plastic EPR registration rejected?
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="text-white/85 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed"
            >
              Most rejections come down to one thing: information that
              can't be supported by your own documents. Here's every common
              cause, the exact fix, and what to do once you've been
              rejected.
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-wrap gap-3 mt-8">
              <a
                href="#reasons"
                className="rounded-lg bg-white text-primary font-medium text-sm sm:text-[15px] px-5 py-3 hover:bg-white/90 transition-colors"
              >
                See the common reasons
              </a>
              <a
                href="#checklist"
                className="rounded-lg border border-white/40 font-medium text-sm sm:text-[15px] px-5 py-3 hover:bg-white/10 transition-colors"
              >
                Get the pre-submission checklist
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- QUICK STATS ---------------- */}
      <SectionShell className="-mt-8 sm:-mt-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { label: "Common rejection causes", value: "6", sub: "From details to data mismatches" },
            { label: "Steps to fix a rejection", value: "5", sub: "Identify → correct → resubmit" },
            { label: "Checklist items", value: "8", sub: "To verify before you submit" },
            { label: "Core principle", value: "1", sub: "Accurate data, properly supported" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-card border border-border p-4 sm:p-5 shadow-sm">
              <p className="text-2xl sm:text-3xl font-display font-semibold text-primary">
                {s.value}
              </p>
              <p className="text-sm font-medium text-foreground mt-1">{s.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* ---------------- COMMON REASONS ---------------- */}
      <SectionShell className="py-14 sm:py-20" id="reasons">
        <p className="text-secondary font-medium text-sm mb-2">Root causes</p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
          Six common reasons for rejection
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
          In most cases, rejection traces back to incorrect information,
          missing documents, category mistakes, or inconsistencies between
          the application and your own supporting records.
        </p>

        <div className="grid lg:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="flex items-start gap-3 p-5 sm:p-6 pb-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <r.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Reason {i + 1}</p>
                  <h3 className="font-display text-base sm:text-lg font-medium leading-snug">
                    {r.title}
                  </h3>
                </div>
              </div>
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-3">
                <div className="flex gap-2.5">
                  <XCircle className="h-4 w-4 text-rose-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.problem}</p>
                </div>
                <div className="flex gap-2.5 rounded-xl bg-secondary/10 p-3">
                  <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground/90 leading-relaxed">{r.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* ---------------- WHAT TO DO IF REJECTED ---------------- */}
      <SectionShell className="py-14 sm:py-20 bg-primary/5">
        <p className="text-secondary font-medium text-sm mb-2">After a rejection</p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
          A rejection isn't the end of the road
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
          Rejection doesn't necessarily mean you can't register. Read the
          reason carefully, then work through it methodically rather than
          resubmitting the same application unchanged.
        </p>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />
          <div className="space-y-6 sm:space-y-8">
            {fixSteps.map((s, i) => (
              <div key={s.title} className="flex gap-4 sm:gap-5 relative">
                <div className="h-10 w-10 shrink-0 rounded-full bg-secondary text-white flex items-center justify-center font-display font-medium text-sm z-10">
                  {i + 1}
                </div>
                <div className="pt-1.5">
                  <div className="flex items-center gap-2">
                    <s.icon className="h-4 w-4 text-primary hidden sm:block" />
                    <h3 className="font-medium text-foreground text-[15px] sm:text-base">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ---------------- REJECTION CHECKLIST ---------------- */}
      <SectionShell className="py-14 sm:py-20" id="checklist">
        <p className="text-secondary font-medium text-sm mb-2">Before you submit</p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
          The pre-submission checklist
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
          A five-minute review against this list before submitting — or
          resubmitting — can save considerably more time later.
        </p>

        <div className="rounded-2xl border border-border overflow-hidden">
          {checklist.map((c, i) => (
            <div
              key={c.label}
              className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 sm:px-6 py-4 ${
                i % 2 === 0 ? "bg-card" : "bg-secondary/5"
              } ${i !== checklist.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex items-center gap-2.5 sm:w-56 shrink-0">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                <span className="text-sm font-medium text-foreground">{c.label}</span>
              </div>
              <span className="text-sm text-muted-foreground">{c.verify}</span>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* ---------------- CONSULTANT NOTE ---------------- */}
      <SectionShell className="py-14 sm:py-20 bg-secondary/5">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:items-center">
          <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
            <Users className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h3 className="font-display text-lg font-medium mb-1.5">
              A consultant helps — but responsibility stays with you
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A compliance consultant can help prepare documentation,
              identify the right category and review the application
              before submission. The business is still ultimately
              responsible for making sure the information submitted is
              accurate.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* ---------------- CLOSING BANNER (no form) ---------------- */}
      <SectionShell className="py-14 sm:py-20">
        <div className="rounded-2xl bg-gradient-to-br from-secondary to-primary text-white p-6 sm:p-10">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="h-5 w-5" />
            <p className="font-display text-lg sm:text-xl font-medium">
              One principle covers most of it
            </p>
          </div>
          <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed max-w-2xl">
            Submit accurate information that your own documents can
            support. Confirm your category, verify company details,
            prepare the right documents and organize your packaging data —
            and if you've already been rejected, fix the specific issue
            named rather than resubmitting unchanged.
          </p>
        </div>
      </SectionShell>

      {/* ---------------- FAQ ---------------- */}
      <SectionShell className="pb-14 sm:pb-20">
        <p className="text-secondary font-medium text-sm mb-2">FAQs</p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">
          Frequently asked questions
        </h2>
        <FaqAccordion />
      </SectionShell>

      {/* ---------------- RELATED READING (internal links) ---------------- */}
      <SectionShell className="pb-14 sm:pb-20">
        <p className="text-secondary font-medium text-sm mb-2">Keep reading</p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">
          Related EPR compliance guides
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {internalLinks.map((link) => (
            <a
              key={link.slug}
              href={`/blog/${link.slug}`}
              className="group rounded-xl border border-border bg-card p-4 flex items-center justify-between gap-3 hover:border-secondary/50 transition-colors"
            >
              <span className="text-sm font-medium text-foreground">{link.title}</span>
              <ArrowRight className="h-4 w-4 text-secondary shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </a>
          ))}
        </div>
      </SectionShell>

      {/* ---------------- SOURCES ---------------- */}
      <SectionShell className="pb-16">
        <div className="border-t border-border pt-6 text-xs text-muted-foreground">
          <p className="font-medium text-foreground mb-2">Sources</p>
          <ul className="space-y-1">
            <li className="flex items-center gap-1.5">
              <ExternalLink className="h-3 w-3" /> CPCB Plastic Waste Management Portal
            </li>
            <li className="flex items-center gap-1.5">
              <ExternalLink className="h-3 w-3" /> CPCB Plastic EPR guidance and FAQs
            </li>
          </ul>
        </div>
      </SectionShell>
       </div>
       <aside className="hidden lg:block shrink-0 w-[320px]">
        <div className="sticky top-28 px-2">
          <StickyContactForm/>
        </div>

      </aside>
      </div>
    </main>
  );
}