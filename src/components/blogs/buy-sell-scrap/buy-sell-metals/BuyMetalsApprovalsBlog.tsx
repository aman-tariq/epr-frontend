"use client";

/**
 * Buy & Sell Metals: Approvals, Registration & Compliance Roadmap
 * -------------------------------------------------------------------
 * Single-file blog page for a producer/recycler/PRO audience getting a
 * metal scrap trading operation registered and compliant in India.
 *
 * Ten content sections + a persistent sticky contact form.
 * Uses the project's existing design tokens (primary / secondary /
 * brandGreen, hsl(var(--...)) system).
 *
 * Requires: framer-motion, recharts, lucide-react.
 *
 * Navbar/footer are assumed to already exist in the layout — this file is
 * content only, with top padding reserved so it never collapses under a
 * fixed/sticky navbar.
 */

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  FileCheck2,
  Globe2,
  Building2,
  Landmark,
  ShieldCheck,
  Receipt,
  ChevronDown,
  AlertTriangle,
  ClipboardList,
  Radiation,
  ShipWheel,
  Gavel,
  ScrollText,
  Users,
} from "lucide-react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/* Shared bits                                                          */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brandGreen">
      <span className="h-1.5 w-1.5 rounded-full bg-brandGreen" />
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

/* ------------------------------------------------------------------ */
/* 1. Hero                                                              */
/* ------------------------------------------------------------------ */

function Hero() {
  const stats = [
    {
      label: "GST rate on metal scrap",
      value: "18%",
      source: "CGST Rate Notifications",
    },
    {
      label: "RCM & 2% TDS on B2B scrap",
      value: "Since Oct 2024",
      source: "Notif. 06 & 25/2024",
    },
    {
      label: "PSIC now waived, safe-country scrap",
      value: "11 of 19 ports",
      source: "DGFT, 2025",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-4 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:pb-24 md:pt-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Eyebrow>Approvals · Registration · Compliance</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Buy &amp; sell metals: approvals, registration &amp; compliance
            roadmap
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The registrations, tax mechanics, and import clearances that
            actually govern a metal scrap trading business in India — laid out
            in the order you'll need them.
          </p>
          <div className="mt-6 rounded-xl border border-border bg-muted/40 p-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                Our team is finalizing the full deep-dive.
              </span>{" "}
              Reach out for immediate guidance in the meantime — the form on
              this page reaches a live specialist, not a queue.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#roadmap"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              See the registration roadmap
            </a>
            <a
              href="#tax"
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Understand the tax mechanics
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="grid grid-cols-1 gap-3 self-start rounded-2xl border border-border bg-card p-4 shadow-sm sm:grid-cols-3 md:grid-cols-1"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-muted/40 p-4 transition hover:bg-muted/70"
            >
              <div className="font-display text-2xl font-bold text-brandGreen md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-foreground">
                {s.label}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {s.source}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Approval timeline chart                                           */
/* ------------------------------------------------------------------ */

// Indicative processing windows commonly cited for each approval —
// actual timelines vary by state and application quality. Presented as
// an approximate planning guide, not a guarantee.
const timelineData = [
  { step: "GST registration", days: 7 },
  { step: "IEC (import/export code)", days: 2 },
  { step: "MSME/Udyam registration", days: 1 },
  { step: "MSTC e-auction registration", days: 12 },
  { step: "CPCB/SPCB Consent (CTE/CTO)", days: 45 },
  { step: "Factory license", days: 35 },
];

function ApprovalTimelineChart() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Plan around this"
        title="How long each approval typically takes"
        description="Environmental consents are the long pole — start those first if a physical yard or processing unit is part of your plan."
      />
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="mb-1 flex items-center gap-2">
          <ClipboardList className="h-4 w-4 text-brandGreen" />
          <h3 className="font-display text-lg font-semibold text-foreground">
            Typical processing window, in working days
          </h3>
        </div>
        <div className="h-72 w-full">
          <ResponsiveContainer>
            <BarChart
              data={timelineData}
              layout="vertical"
              margin={{ left: 10 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                type="number"
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
                unit="d"
              />
              <YAxis
                type="category"
                dataKey="step"
                width={190}
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                formatter={(v: number) => [
                  `~${v} working days`,
                  "Typical window",
                ]}
                contentStyle={{
                  background: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />
              <Bar
                dataKey="days"
                fill="hsl(var(--primary))"
                radius={[0, 6, 6, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Indicative windows compiled from published processing guidance for
          each registration (GSTN, DGFT, Udyam, MSTC, SPCB consent norms).
          Actual timelines vary by state, application completeness, and unit
          category.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Registration roadmap (signature element)                          */
/* ------------------------------------------------------------------ */

const roadmapSteps = [
  {
    icon: Receipt,
    title: "GST registration",
    detail:
      "Mandatory once turnover crosses the threshold. All ferrous and non-ferrous metal scrap is taxed at 18%.",
  },
  {
    icon: Globe2,
    title: "IEC code",
    detail:
      "Required only if you plan to import or export scrap — one IEC per PAN, applied for online through DGFT.",
  },
  {
    icon: Building2,
    title: "MSME / Udyam registration",
    detail:
      "Not mandatory, but unlocks priority sector lending, delayed-payment protection, and easier access to government tenders.",
  },
  {
    icon: Landmark,
    title: "CPCB / SPCB consent",
    detail:
      "Consent to Establish, then Consent to Operate, for any physical yard, shredding, or processing setup handling scrap at scale.",
  },
  {
    icon: ShieldCheck,
    title: "Factory license",
    detail:
      "Needed once you're running mechanised processing (shredders, balers, shears) rather than pure trading.",
  },
];

function RegistrationRoadmap() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="roadmap"
      className="border-y border-border bg-muted/30 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="The order that actually works"
          title="Your registration roadmap"
          description="Skip a step out of order and you'll usually end up redoing paperwork — this is the sequence that avoids that."
        />

        <div className="relative">
          <div className="absolute left-0 right-0 top-[38px] hidden h-[3px] overflow-hidden rounded-full bg-border md:block">
            <motion.div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #5AC361 15%, hsl(var(--primary)) 50%, #5AC361 85%, transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={
                reduceMotion ? {} : { backgroundPositionX: ["0%", "200%"] }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-5 md:gap-4">
            {roadmapSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative flex flex-col items-center text-center md:items-start md:text-left"
                >
                  <div className="relative z-10 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border-2 border-brandGreen bg-brandGreen/10 bg-background text-brandGreen">
                    <Icon className="h-7 w-7" />
                    <span className="absolute -top-2 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-background">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Tax compliance cards                                              */
/* ------------------------------------------------------------------ */

const taxCards = [
  {
    icon: Receipt,
    title: "18% GST on all metal scrap",
    detail:
      "Ferrous and non-ferrous scrap — iron/steel under HSN 7204, aluminium under HSN 7602 — is taxed at a flat 18%, regardless of grade.",
  },
  {
    icon: AlertTriangle,
    title: "Reverse Charge Mechanism (RCM)",
    detail:
      "Since Notification 06/2024-Central Tax (effective 10 Oct 2024), if a registered buyer purchases scrap from an unregistered seller, the buyer — not the seller — pays the GST directly to the government.",
  },
  {
    icon: ScrollText,
    title: "2% TDS on B2B scrap sales",
    detail:
      "Introduced at the 54th GST Council meeting: a registered buyer deducts 2% TDS on the invoice value when purchasing scrap from another registered dealer.",
  },
  {
    icon: Gavel,
    title: "2% TCS under Income Tax Act",
    detail:
      "Separately from GST, sellers must collect 2% TCS under the Income Tax Act on scrap sales exceeding ₹2.5 lakh to a single buyer.",
  },
];

function TaxCompliance() {
  return (
    <section id="tax" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Where the money actually flows"
        title="The tax mechanics of a scrap transaction"
        description="Four separate rules stack on top of each other — miss one and the numbers on your invoice won't reconcile with what you actually owe."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {taxCards.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5.5 w-5.5" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Import approvals                                                  */
/* ------------------------------------------------------------------ */

function ImportApprovals() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="If you're importing scrap"
          title="The Pre-Shipment Inspection rules just got lighter"
          description="This changed recently — worth knowing if your last import playbook is more than a year old."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <Radiation className="h-6 w-6 text-brandGreen" />
            <h3 className="mt-4 font-display text-base font-semibold text-foreground">
              What a PSIC still checks
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A Pre-Shipment Inspection Certificate confirms imported metallic
              waste and scrap — shredded, unshredded, compressed, or loose —
              contains no radioactive material, explosives, arms, or war
              material, issued by a DGFT-recognised inspection agency at the
              load port.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <ShipWheel className="h-6 w-6 text-brandGreen" />
            <h3 className="mt-4 font-display text-base font-semibold text-foreground">
              Where it's now waived
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Scrap from "safe" origins — the USA, UK, Canada, New Zealand,
              Australia, and the EU — no longer needs a full PSIC when cleared
              through 11 of India's 19 designated scrap-import ports, following
              sustained advocacy by MRAI. A supplier declaration plus port-side
              radiation and explosive screening still applies.
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Source: DGFT Handbook of Procedures, Para 2.51; Recycled Materials
          Association press release on India's 2025 PSIC exemption for
          safe-country scrap.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Environmental & site approvals                                    */
/* ------------------------------------------------------------------ */

const siteApprovals = [
  {
    icon: FileCheck2,
    name: "Consent to Establish (CTE)",
    detail:
      "From the SPCB, before you build or set up processing equipment on site.",
  },
  {
    icon: FileCheck2,
    name: "Consent to Operate (CTO)",
    detail:
      "Issued once pollution control measures are installed and verified — required to actually run the site.",
  },
  {
    icon: ShieldCheck,
    name: "Hazardous waste authorisation",
    detail:
      "Applies where scrap categories fall under the Hazardous and Other Wastes Rules — batteries, certain oils, and contaminated metal are common triggers.",
  },
  {
    icon: Building2,
    name: "Factory license",
    detail:
      "Confirms industrial safety standards are met for mechanised crushing, shredding, or cutting operations.",
  },
];

function EnvironmentalApprovals() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="If you're running a physical site"
        title="Environmental and site-level approvals"
        description="Pure trading (buy low, sell high, no processing) has a lighter footprint here — the moment you shred, bale, or melt on site, this stack applies in full."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {siteApprovals.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.name}
              className="flex gap-3 rounded-xl border border-border bg-card p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brandGreen/10 text-brandGreen">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">
                  {s.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {s.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Recent regulatory changes                                         */
/* ------------------------------------------------------------------ */

const changes = [
  {
    when: "9 Sep 2024",
    what: "54th GST Council meeting introduces 2% TDS on B2B metal scrap transactions between registered businesses.",
  },
  {
    when: "10 Oct 2024",
    what: "Notification 06/2024-Central Tax (Rate) brings metal scrap (HSN Chapters 72–81) under Reverse Charge Mechanism when bought from unregistered suppliers.",
  },
  {
    when: "22 Oct 2024",
    what: "GSTN introduces a dedicated registration process (Form GST REG-07) for metal scrap buyers to comply with the new RCM rule.",
  },
  {
    when: "2025",
    what: "DGFT exempts safe-country scrap imports from full PSIC requirements at 11 designated ports, easing a long-standing import bottleneck.",
  },
];

function RecentChanges() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          eyebrow="Keep this current"
          title="What's changed in the last 18 months"
          description="This sector's compliance rules moved fast recently — this is the short version."
        />
        <div className="space-y-4">
          {changes.map((c) => (
            <div
              key={c.when}
              className="flex gap-4 rounded-xl border border-border bg-card p-4"
            >
              <div className="w-28 shrink-0 font-display text-sm font-semibold text-brandGreen">
                {c.when}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {c.what}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8. Who needs what                                                    */
/* ------------------------------------------------------------------ */

function WhoNeedsWhat() {
  const rows = [
    {
      role: "Domestic trader (no processing)",
      needs:
        "GST registration; RCM/TDS/TCS awareness; MSME/Udyam optional but recommended.",
    },
    {
      role: "Importer of scrap",
      needs:
        "All of the above, plus IEC and PSIC compliance (or safe-country exemption) at the designated port of entry.",
    },
    {
      role: "Processor (shredding/baling/melting on site)",
      needs:
        "All domestic requirements, plus CTE/CTO from the SPCB, a factory license, and hazardous waste authorisation where applicable.",
    },
    {
      role: "PSU / government auction participant",
      needs:
        "MSTC registration with valid PAN-GST-bank mapping, a Class 3 DSC, and an active EMD wallet, in addition to standard GST compliance.",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
      <SectionHeading
        eyebrow="Match your role to the checklist"
        title="Who actually needs what"
        description="Not every registration applies to every business model — this maps the stack to how you actually operate."
      />
      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-5 py-4 font-display font-semibold text-foreground">
                Business model
              </th>
              <th className="px-5 py-4 font-display font-semibold text-foreground">
                What you need
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.role} className={i % 2 ? "bg-muted/20" : ""}>
                <td className="px-5 py-4 align-top font-medium text-foreground">
                  {r.role}
                </td>
                <td className="px-5 py-4 align-top text-muted-foreground">
                  {r.needs}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 9. FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "Do I need to register for GST even as a small scrap dealer?",
    a: "GST registration becomes mandatory once your turnover crosses the applicable threshold. Below that, you can operate unregistered — but note that registered buyers purchasing from you will then owe GST themselves under the Reverse Charge Mechanism, which some buyers may factor into the price they're willing to pay.",
  },
  {
    q: "Who actually pays GST when I sell scrap to an unregistered buyer?",
    a: "RCM only applies when the buyer is registered and the seller is unregistered. If you're an unregistered seller selling to another unregistered party, standard GST registration thresholds apply as with any other goods.",
  },
  {
    q: "Does the TDS and TCS on scrap apply together?",
    a: "They're separate regimes. The 2% TDS under GST applies to B2B scrap sales between two registered dealers. The 2% TCS under the Income Tax Act applies on top, for sales exceeding ₹2.5 lakh to a single buyer — both need to be tracked independently in your filings.",
  },
  {
    q: "If PSIC is waived for my shipment, am I free of import scrutiny?",
    a: "No. Even PSIC-exempt shipments from safe-country origins must carry a supplier certificate confirming the absence of radioactive material or explosives, and are still subject to radiation and explosive screening at the port of entry.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          eyebrow="Common questions"
          title="Before you reach out"
        />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-xl border border-border bg-card"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-sm font-semibold text-foreground">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 10. Final CTA                                                        */
/* ------------------------------------------------------------------ */

function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center md:px-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <h2 className="relative font-display text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Full approvals &amp; compliance deep-dive coming soon
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
          We're finalizing state-by-state consent timelines, application
          templates, and a downloadable compliance checklist. Producers,
          recyclers, and PROs who need guidance now don't have to wait for the
          full guide — talk to our team today.
        </p>
        <div className="relative mt-8 flex justify-center">
          <a
            href="/contact"
            className="rounded-full bg-background px-7 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:opacity-90"
          >
            Get immediate guidance
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function BuySellMetalsComplianceGuide() {
  return (
    <main className="bg-background pt-24 md:pt-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-0 lg:grid-cols-[1fr_340px] lg:gap-6 lg:px-6">
        {/* Main content column */}
        <Seo
          title="Buy & Sell Metals: Approvals, Registration & Compliance Roadmap"
          description="Learn the approvals, registrations, licenses, and compliance requirements for starting a metal trading business in India. Follow a complete roadmap to operate legally, avoid penalties, and build a successful metal trading business."
          keywords={[
            "Buy and Sell Metals",
            "Metal Trading Registration",
            "Metal Trading License",
            "Metal Business Compliance",
            "Metal Trading Approvals",
            "Scrap Metal Registration",
            "Metal Recycling Compliance",
            "Metal Trading Business India",
            "GST Registration for Metal Trading",
            "Pollution Control Board Approval",
            "Environmental Compliance",
            "Metal Scrap Business",
            "Industrial Metal Trading",
            "Business Registration India",
            "Metal Trading Regulations",
            "How to start a metal trading business in India?",
            "What licenses are required for metal trading?",
            "How to register a metal trading business?",
            "Documents required for metal trading registration",
            "How to comply with metal trading regulations?",
            "How to get approval for a scrap metal business?",
            "Metal trading compliance checklist",
            "How to avoid compliance penalties in metal trading?",
            "Legal requirements for buying and selling metals",
            "Metal trading registration process in India",
          ]}
          url="https://eprnexuss.com/blog/buy-sell-metals-approvals"
          type="article"
        />
        <div className="min-w-0">
          <Hero />
          <ApprovalTimelineChart />
          <RegistrationRoadmap />
          <TaxCompliance />
          <ImportApprovals />
          <EnvironmentalApprovals />
          <RecentChanges />
          <WhoNeedsWhat />
          <FAQ />

          {/* Contact form inline for mobile / tablet, where the sticky sidebar is hidden */}
          <div id="contact" className="mx-auto max-w-6xl px-4 pt-4 lg:hidden">
            <StickyContactForm />
          </div>

          <FinalCTA />
        </div>

        {/* Sticky sidebar column — desktop only */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 px-2">
            <StickyContactForm />
          </div>
        </aside>
      </div>
    </main>
  );
}
