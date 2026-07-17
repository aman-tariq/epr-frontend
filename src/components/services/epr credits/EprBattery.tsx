"use client";

import { useState } from "react";
import StickyContactForm from "@/components/StickyContactForm";
import Seo from "@/components/Seo";

/* ------------------------------------------------------------------ */
/*  Battery EPR Credits — service page                                 */
/*  Recolored to run entirely on this project's design tokens:         */
/*  background / foreground / primary / secondary / accent / muted /   */
/*  card / border / destructive / sidebar, plus the brandGreen accent. */
/*  Fonts: font-display (Outfit) for headings, font-sans (Inter) body. */
/*                                                                      */
/*  Two panel tones alternate down the page:                           */
/*   - "light" panels  → bg-background / text-foreground               */
/*   - "inverted" panels → bg-foreground / text-background              */
/*  Because both derive from the same two tokens, the contrast is      */
/*  correct automatically whether the site is in light or dark mode.   */
/* ------------------------------------------------------------------ */

type BatteryBarProps = {
  percent: number;
  segments?: number;
  colorClass?: string;
  trackClass?: string;
  height?: string;
};

function BatteryBar({
  percent,
  segments = 5,
  colorClass = "bg-brandGreen",
  trackClass = "bg-background/10",
  height = "h-3",
}: BatteryBarProps) {
  const filled = Math.round((percent / 100) * segments);
  return (
    <div className="flex items-center gap-1">
      <div
        className={`flex flex-1 gap-1 rounded-sm border border-current/10 p-1 ${trackClass}`}
      >
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className={`${height} flex-1 rounded-[2px] transition-colors duration-500 ${
              i < filled ? colorClass : "bg-current/10"
            }`}
          />
        ))}
      </div>
      <div className={`${height} w-1.5 rounded-r-sm bg-current/10`} />
    </div>
  );
}

function Eyebrow({
  children,
  inverted = false,
}: {
  children: React.ReactNode;
  inverted?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-display text-[11px] font-medium uppercase tracking-[0.18em] ${
        inverted
          ? "border-background/20 bg-background/10 text-background/80"
          : "border-border bg-accent text-accent-foreground"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brandGreen" />
      {children}
    </div>
  );
}

/* --------------------------- 1. HERO -------------------------------- */

function Hero() {
  return (
    <section className="relative md:mt-10 overflow-hidden border-b border-background/10 bg-foreground text-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-8 lg:pb-24 lg:pt-24">
        <div>
          <Eyebrow inverted>
            Battery Waste Management Rules, 2022 · CPCB EPR
          </Eyebrow>
          <h1 className="mt-5 font-display text-[2.1rem] font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Turn spent batteries into
            <span className="text-brandGreen"> compliant, tradable </span>
            EPR credits.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-background/70 sm:text-base">
            We run the full EPR loop for lead-acid, lithium-ion, nickel-cadmium
            and portable batteries — CPCB portal registration, collection
            design, recycler audits and BAT-code credit trading — so your
            compliance file closes every year, not just on paper.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#case-study"
              className="rounded-md bg-primary px-5 py-3 font-display text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              See the case study
            </a>
            <a
              href="#process"
              className="rounded-md border border-background/25 px-5 py-3 font-display text-sm text-background transition-colors hover:border-brandGreen hover:text-brandGreen"
            >
              How credits are generated
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-background/15 pt-6 sm:max-w-lg">
            <div>
              <p className="font-display text-2xl text-brandGreen sm:text-3xl">
                95%
              </p>
              <p className="mt-1 text-[11px] leading-tight text-background/60">
                min. lead recovery for BAT-LA credits
              </p>
            </div>
            <div>
              <p className="font-display text-2xl text-brandGreen sm:text-3xl">
                ₹5–20
              </p>
              <p className="mt-1 text-[11px] leading-tight text-background/60">
                per kg, credit trading range
              </p>
            </div>
            <div>
              <p className="font-display text-2xl text-brandGreen sm:text-3xl">
                90%
              </p>
              <p className="mt-1 text-[11px] leading-tight text-background/60">
                EV/portable recovery target, 2026‑27
              </p>
            </div>
          </div>
        </div>

        {/* Signature: live-style credit charge meter */}
        <div className="self-start rounded-lg border border-background/15 bg-background/5 p-5 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)] sm:p-6">
          <div className="flex items-center justify-between">
            <p className="font-display text-[11px] uppercase tracking-widest text-background/60">
              Credit charge meter
            </p>
            <span className="rounded-full bg-background/10 px-2 py-0.5 font-display text-[10px] text-brandGreen">
              BAT-LA
            </span>
          </div>

          <div className="mt-5 space-y-5">
            <div>
              <div className="mb-1.5 flex justify-between font-display text-xs text-background/70">
                <span>Lead recovery rate</span>
                <span className="text-brandGreen">95%</span>
              </div>
              <BatteryBar percent={95} colorClass="bg-brandGreen" />
            </div>
            <div>
              <div className="mb-1.5 flex justify-between font-display text-xs text-background/70">
                <span>EV recovery target, FY26‑27</span>
                <span className="text-primary">90%</span>
              </div>
              <BatteryBar percent={90} colorClass="bg-primary" />
            </div>
            <div>
              <div className="mb-1.5 flex justify-between font-display text-xs text-background/70">
                <span>Recycled-material mandate, FY30‑31</span>
                <span className="text-secondary-foreground">20%</span>
              </div>
              <BatteryBar percent={20} colorClass="bg-secondary" />
            </div>
          </div>

          <div className="mt-6 rounded-md bg-background/10 p-4">
            <p className="font-display text-[11px] text-background/60">
              Example, 1,000 MT recycled @ ₹7/kg
            </p>
            <p className="mt-1 font-display text-2xl text-background">
              ₹70,00,000
            </p>
            <p className="text-[11px] text-background/60">
              in BAT-LA credit value
            </p>
          </div>
        </div>
      </div>

      {/* trust strip */}
      <div className="relative border-t border-background/10 bg-background/5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-5 font-display text-[11px] uppercase tracking-wider text-background/50 sm:px-6 lg:px-8">
          <span>CPCB registered filings</span>
          <span className="hidden h-1 w-1 rounded-full bg-background/30 sm:block" />
          <span>Battery Waste Mgmt. Rules, 2022</span>
          <span className="hidden h-1 w-1 rounded-full bg-background/30 sm:block" />
          <span>CPCB EPR Portal &amp; Recykal trading</span>
          <span className="hidden h-1 w-1 rounded-full bg-background/30 sm:block" />
          <span>Form 3 / Form 4 return management</span>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 2. WHAT IS EPR -------------------------- */

const categories = [
  {
    code: "BAT-LA",
    name: "Lead-acid",
    use: "Automotive starters, inverters, UPS",
    target: "95% min. material recovery",
    accentClass: "bg-brandGreen text-white",
  },
  {
    code: "BAT-LI",
    name: "Lithium-ion",
    use: "EVs, laptops, power tools",
    target: "70% (FY25) → 90% (FY27)",
    accentClass: "bg-primary text-primary-foreground",
  },
  {
    code: "BAT-NC",
    name: "Nickel-cadmium",
    use: "Industrial & emergency lighting",
    target: "Chemistry-specific recovery",
    accentClass: "bg-secondary text-secondary-foreground",
  },
  {
    code: "BAT-PORT",
    name: "Portable / zinc-based",
    use: "Household electronics, toys",
    target: "Targets increase annually",
    accentClass: "bg-accent text-accent-foreground",
  },
];

function WhatIsEPR() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>01 · The obligation</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium text-foreground sm:text-4xl">
            What a Battery EPR credit actually is
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Under the Battery Waste Management Rules, 2022, every producer —
            including importers — must collect and recycle the batteries they
            place in the market. When a registered recycler processes waste
            batteries and clears the minimum recovery percentage for that
            chemistry, CPCB issues an EPR certificate. Producers use, buy or
            sell those certificates on the CPCB portal to close their own yearly
            obligation.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div
              key={c.code}
              className="rounded-lg border border-border bg-card p-5 text-card-foreground transition-shadow hover:shadow-lg"
            >
              <div
                className={`mb-4 flex h-9 w-9 items-center justify-center rounded-md font-display text-[10px] font-semibold ${c.accentClass}`}
              >
                {c.name.slice(0, 2).toUpperCase()}
              </div>
              <p className="font-display text-[11px] uppercase tracking-wider text-muted-foreground">
                {c.code}
              </p>
              <p className="mt-1 font-display text-lg">{c.name}</p>
              <p className="mt-2 text-[13px] leading-snug text-muted-foreground">
                {c.use}
              </p>
              <p className="mt-3 border-t border-border pt-3 text-[12px] font-medium">
                {c.target}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 3. CREDIT PRICING ------------------------ */

function CreditPricing() {
  return (
    <section className="bg-foreground py-16 text-background sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <Eyebrow inverted>02 · Credit pricing</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
              What credits trade for, by chemistry
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-background/70">
              Certificates trade on the CPCB EPR Portal and partner exchanges
              such as Recykal, priced by chemistry, recovery percentage and the
              going market rate for recovered metal.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-background/15">
          <div className="grid grid-cols-[1fr] divide-y divide-background/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div className="bg-background/5 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <p className="font-display text-xs uppercase tracking-wider text-background/60">
                  BAT-LA · Lead-acid
                </p>
                <span className="rounded-full bg-background/10 px-2 py-0.5 text-[10px] text-brandGreen">
                  most liquid
                </span>
              </div>
              <p className="mt-3 font-display text-3xl text-brandGreen">
                ₹5 – ₹10 / kg
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-background/60">
                Reflects high lead recovery — 95% minimum is required for a
                certificate to be issued. Recycling 1,000 MT of automotive
                batteries at ₹7/kg generates roughly ₹70 lakh in credit value.
              </p>
              <div className="mt-5">
                <p className="mb-1.5 font-display text-[11px] text-background/60">
                  Price position in the ₹5–20/kg market band
                </p>
                <div className="h-2 w-full overflow-hidden rounded-full bg-background/10">
                  <div className="h-full w-[35%] rounded-full bg-brandGreen" />
                </div>
              </div>
            </div>

            <div className="bg-background/5 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <p className="font-display text-xs uppercase tracking-wider text-background/60">
                  BAT-LI / BAT-NC / BAT-PORT
                </p>
                <span className="rounded-full bg-background/10 px-2 py-0.5 text-[10px] text-primary">
                  upper band
                </span>
              </div>
              <p className="mt-3 font-display text-3xl text-primary">
                ₹5 – ₹20 / kg
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-background/60">
                Lithium-ion certificates recover cobalt, lithium and graphite,
                and tend to sit toward the top of the trading band given the
                underlying metal value. Cadmium and portable-cell credits price
                case-by-case.
              </p>
              <div className="mt-5">
                <p className="mb-1.5 font-display text-[11px] text-background/60">
                  Price position in the ₹5–20/kg market band
                </p>
                <div className="h-2 w-full overflow-hidden rounded-full bg-background/10">
                  <div className="h-full w-[80%] rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 4. CASE STUDY ---------------------------- */

function CaseStudy() {
  return (
    <section id="case-study" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Eyebrow>03 · Case study</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium text-foreground sm:text-4xl">
          Lead-acid EPR credits, at India scale
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          A grounded read of how the Battery Waste Management Rules, 2022 play
          out for automotive lead-acid batteries — the most mature EPR credit
          market in the framework today.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {/* Recovery donut */}
          <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
            <p className="font-display text-xs uppercase tracking-wider text-muted-foreground">
              Material recovery, per 1,000 MT input
            </p>
            <div className="mt-5 flex items-center justify-center">
              <div
                className="relative flex h-40 w-40 items-center justify-center rounded-full"
                style={{
                  background:
                    "conic-gradient(#5AC361 0% 95%, hsl(var(--muted)) 95% 100%)",
                }}
              >
                <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-card text-center">
                  <span className="font-display text-2xl text-card-foreground">
                    950 MT
                  </span>
                  <span className="font-display text-[10px] text-muted-foreground">
                    lead recovered
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-5 text-center font-display text-xs text-muted-foreground">
              95% recovery clears the BAT-LA certification threshold.
            </p>
          </div>

          {/* Formal vs informal */}
          <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
            <p className="font-display text-xs uppercase tracking-wider text-muted-foreground">
              Who actually collects the battery
            </p>
            <div className="mt-6 flex h-40 items-end gap-6 px-2">
              <div className="flex flex-1 flex-col items-center gap-2">
                <div className="flex h-full w-full items-end">
                  <div
                    className="w-full rounded-t-md bg-brandGreen"
                    style={{ height: "20%" }}
                  />
                </div>
                <p className="font-display text-lg">20%</p>
                <p className="text-center text-[11px] leading-tight text-muted-foreground">
                  Formal, registered recyclers
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center gap-2">
                <div className="flex h-full w-full items-end">
                  <div
                    className="w-full rounded-t-md bg-destructive"
                    style={{ height: "80%" }}
                  />
                </div>
                <p className="font-display text-lg">80%</p>
                <p className="text-center text-[11px] leading-tight text-muted-foreground">
                  Informal scrap channels
                </p>
              </div>
            </div>
            <p className="mt-5 text-[12px] leading-relaxed text-muted-foreground">
              A 2024 CPCB report puts informal recycling at roughly 80% of
              India&apos;s battery waste — the core traceability gap the EPR
              certificate system is built to close.
            </p>
          </div>

          {/* Value + benchmark */}
          <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
            <p className="font-display text-xs uppercase tracking-wider text-muted-foreground">
              Credit value generated
            </p>
            <p className="mt-4 font-display text-3xl">₹70,00,000</p>
            <p className="text-[12px] text-muted-foreground">
              1,000 MT processed × 95% recovery × ₹7/kg (BAT-LA rate)
            </p>

            <div className="mt-6 border-t border-border pt-5">
              <p className="mb-2 font-display text-[11px] uppercase tracking-wider text-muted-foreground">
                Global benchmark
              </p>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-muted-foreground">
                  Sweden, retail drop-off network
                </span>
                <span className="font-display">95% collected</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[95%] rounded-full bg-primary" />
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground">
                Formalised deposit-refund and retail collection is the lever
                India&apos;s rules are pulling toward — the same mechanism
                producers can run today under Rule 4.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 5. PROCESS FLOW --------------------------- */

const steps = [
  {
    n: "01",
    title: "Register on the CPCB portal",
    body: "File as Producer, Recycler or Producer Responsibility Organisation and declare battery volumes placed in the market.",
  },
  {
    n: "02",
    title: "Build the collection channel",
    body: "Deposit-refund, buy-back or drop-off networks pull batteries away from the informal scrap trade and into your chain of custody.",
  },
  {
    n: "03",
    title: "Recycle to the recovery threshold",
    body: "Registered recyclers process the batch and must clear the minimum recovery percentage set for that chemistry.",
  },
  {
    n: "04",
    title: "CPCB issues the certificate",
    body: "Verified weight, recovery percentage and geography are logged, and a certificate is generated on the CPCB portal.",
  },
  {
    n: "05",
    title: "Trade or retire the credit",
    body: "Apply the certificate to your own obligation, or buy and sell surplus through the portal and exchanges like Recykal.",
  },
];

function ProcessFlow() {
  return (
    <section
      id="process"
      className="bg-foreground py-16 text-background sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Eyebrow inverted>04 · How it works</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
          From spent battery to tradable certificate
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-background/15 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <div key={s.n} className="bg-foreground p-6">
              <p className="font-display text-2xl text-brandGreen">{s.n}</p>
              <p className="mt-3 font-display text-base text-background">
                {s.title}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-background/60">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 6. COMPLIANCE TIMELINE --------------------- */

const timeline = [
  { year: "2024‑25", label: "EV battery recovery target", value: 70 },
  { year: "2025‑26", label: "EV battery recovery target", value: 80 },
  { year: "2026‑27", label: "EV battery recovery target", value: 90 },
  { year: "2027‑28", label: "Recycled-material use mandate", value: 5 },
  { year: "2030‑31", label: "Recycled-material use mandate", value: 20 },
];

function ComplianceTimeline() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Eyebrow>05 · The trajectory</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium text-foreground sm:text-4xl">
          Targets only get steeper from here
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Recovery and recycled-content mandates are staged by year under
          Schedule II. Building the collection and recycler relationships early
          is what keeps the later, steeper years affordable.
        </p>

        <div className="mt-10 rounded-lg border border-border bg-card p-6 text-card-foreground sm:p-8">
          <div className="space-y-6">
            {timeline.map((t) => (
              <div
                key={t.year}
                className="grid grid-cols-[72px_1fr_56px] items-center gap-4 sm:grid-cols-[88px_1fr_60px]"
              >
                <p className="font-display text-xs text-muted-foreground">
                  {t.year}
                </p>
                <div>
                  <p className="mb-1.5 text-[13px] text-muted-foreground">
                    {t.label}
                  </p>
                  <BatteryBar
                    percent={t.value}
                    segments={10}
                    height="h-2.5"
                    colorClass={
                      t.label.includes("EV") ? "bg-primary" : "bg-brandGreen"
                    }
                    trackClass="bg-muted"
                  />
                </div>
                <p className="text-right font-display text-lg">{t.value}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 7. RISK / PENALTIES ------------------------ */

function RiskPenalties() {
  return (
    <section className="bg-foreground py-16 text-background sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Eyebrow inverted>06 · What non-compliance costs</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
          Missing a target doesn&apos;t end the obligation
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-6">
            <p className="font-display text-xs uppercase tracking-wider text-destructive">
              Environmental Compensation
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-background/70">
              A shortfall triggers an EC charge, calculated on handling,
              collection, transport and processing cost — and it carries the
              obligation forward, it doesn&apos;t clear it.
            </p>
          </div>
          <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-6">
            <p className="font-display text-xs uppercase tracking-wider text-destructive">
              Refund window narrows over time
            </p>
            <div className="mt-4 flex items-end gap-4">
              {[
                { l: "Within 1 yr", v: 75 },
                { l: "Within 2 yr", v: 60 },
                { l: "Within 3 yr", v: 40 },
              ].map((r) => (
                <div
                  key={r.l}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div className="flex h-24 w-full items-end">
                    <div
                      className="w-full rounded-t-md bg-destructive/70"
                      style={{ height: `${r.v}%` }}
                    />
                  </div>
                  <p className="font-display text-sm text-background">{r.v}%</p>
                  <p className="text-center text-[10px] leading-tight text-background/60">
                    {r.l}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12px] leading-relaxed text-background/60">
              Paid EC is refundable on this sliding scale if the shortfall is
              fixed — after three years it&apos;s forfeited entirely.
            </p>
          </div>
          <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-6">
            <p className="font-display text-xs uppercase tracking-wider text-destructive">
              Beyond the fine
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-background/70">
              Under Section 15 of the Environment (Protection) Act, 1986,
              violations can carry a fine of up to ₹1,00,000, imprisonment of up
              to five years, or both — plus public listing of defaulters on the
              CPCB website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 8. WHY US -------------------------------- */

const benefits = [
  {
    title: "End-to-end portal filing",
    body: "Registration, EPR plans, and Form 3 / Form 4 returns handled and filed on time, every quarter.",
  },
  {
    title: "Verified recycler network",
    body: "Only registered recyclers that consistently clear the minimum recovery threshold for each chemistry.",
  },
  {
    title: "Credit trading desk",
    body: "We buy, sell and time BAT-LA, BAT-LI and other certificates against your yearly obligation.",
  },
  {
    title: "Chain-of-custody traceability",
    body: "Collection routes documented end to end, so volumes never quietly slip into the informal market.",
  },
  {
    title: "EC risk monitoring",
    body: "Monthly obligation tracking flags shortfalls early, before Environmental Compensation is triggered.",
  },
  {
    title: "Audit-ready documentation",
    body: "Every certificate, weighbridge slip and recovery report organised for CPCB and SPCB review.",
  },
];

function WhyUs() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Eyebrow>07 · Why run this with us</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium text-foreground sm:text-4xl">
          Compliance that survives an audit
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-lg border border-border bg-card p-6 text-card-foreground"
            >
              <div className="mb-4 h-1.5 w-8 rounded-full bg-brandGreen" />
              <p className="font-display text-lg">{b.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 9. FAQ ------------------------------------ */

const faqs = [
  {
    q: "What exactly is an EPR certificate for batteries?",
    a: "It is a CPCB-issued record confirming a specific weight of waste battery, of a given chemistry, was collected and recycled or refurbished to the required recovery percentage. Producers use it to offset their own annual collection and recycling obligation.",
  },
  {
    q: "How is a certificate priced?",
    a: "By chemistry, recovered-material value and portal demand. Lead-acid (BAT-LA) trades around ₹5–10/kg given the maturity of lead recovery; lithium-ion and other chemistries trade toward ₹5–20/kg based on cobalt, lithium and graphite content.",
  },
  {
    q: "What happens if we fall short of our target?",
    a: "You owe Environmental Compensation, and the unmet obligation carries forward for up to three years. EC is partially refundable on a sliding scale if you close the gap within that window — 75% in year one, 60% in year two, 40% in year three.",
  },
  {
    q: "Can certificates be bought, sold or carried forward?",
    a: "Yes. Certificates are exchangeable and tradable on the CPCB portal and partner platforms such as Recykal, which is what makes it possible to cover a shortfall without building your own recycling capacity.",
  },
  {
    q: "Do the rules apply to EV batteries too?",
    a: "Yes — the 2022 rules cover EV, portable, automotive and industrial batteries under one framework, with recovery and collection targets that differ by battery type and vehicle category.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-foreground py-16 text-background sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <Eyebrow inverted>08 · Questions</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
          Frequently asked, before signing on
        </h2>

        <div className="mt-8 divide-y divide-background/15 rounded-lg border border-background/15">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="bg-background/5">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[15px] text-background sm:text-base">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 font-display text-lg text-brandGreen transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 px-5 pb-5 text-[13px] leading-relaxed text-background/60 sm:px-6">
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 10. FINAL CTA ------------------------------ */

function FinalCTA() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg bg-primary px-6 py-12 text-center text-primary-foreground sm:px-10 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="relative">
            <Eyebrow inverted>09 · Get started</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
              Let&apos;s find out where your battery EPR gap actually is
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-primary-foreground/80">
              Share your battery categories and volumes placed in the market —
              we&apos;ll map your current obligation against the Schedule II
              targets and flag the fastest way to close it.
            </p>
            <a
              href="#top"
              className="mt-8 inline-block rounded-md bg-brandGreen px-6 py-3 font-display text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Talk to the EPR desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- STICKY CONTACT FORM ------------------------ */

function StickyForm() {
  return (
    <>
      {/* Desktop / large screens — a real sidebar column using this project's
          own sidebar tokens, in normal document flow so it can't overlap the
          navbar above it or the content beside it. */}
      <div className="hidden w-[320px] shrink-0 lg:block">
        <div className="sticky top-28 z-30 mt-8 max-h-[calc(100vh-8.5rem)] overflow-y-auto rounded-lg border border-sidebar-border bg-sidebar text-sidebar-foreground shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)]">
          <StickyContactForm />
        </div>
      </div>

      {/* Mobile / tablet — collapsible bar pinned to the bottom */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-sidebar-border bg-sidebar lg:hidden">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3 font-display text-xs uppercase tracking-wider text-sidebar-foreground">
            <span>Get your EPR obligation mapped</span>
            <span className="text-brandGreen transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="max-h-[60vh] overflow-y-auto border-t border-sidebar-border px-1 pb-2">
            <StickyContactForm />
          </div>
        </details>
      </div>
    </>
  );
}

/* --------------------------- PAGE COMPOSITION --------------------------- */

export default function BatteryEPRCreditsPage() {
  return (
    <div id="top" className="bg-background font-sans text-foreground">
      <div className="lg:flex lg:items-stretch">
        <Seo
          title="EPR Plastic Credits | Buy, Sell & Trade Plastic EPR Credits in India"
          description="Buy, sell, and manage EPR Plastic Credits in India. Ensure CPCB compliance, strengthen your sustainability goals, meet EPR obligations, and simplify Plastic Waste Management with trusted EPR Plastic Credit solutions."
          keywords={[
            "EPR Plastic Credits",
            "Plastic EPR Credits",
            "Buy Plastic EPR Credits",
            "Sell Plastic EPR Credits",
            "Plastic Credit Trading",
            "Plastic Credit Marketplace",
            "Plastic Waste Management",
            "Plastic EPR Compliance",
            "Extended Producer Responsibility",
            "CPCB Plastic EPR",
            "Plastic Recycling",
            "Plastic Waste Recycling",
            "EPR Certificate",
            "Circular Economy",
            "Sustainability Compliance",
            "How to buy Plastic EPR credits?",
            "How to sell Plastic EPR credits?",
            "What are Plastic EPR credits?",
            "How do Plastic EPR credits work?",
            "Plastic EPR compliance in India",
            "CPCB Plastic EPR registration",
            "Plastic credit marketplace India",
            "Best Plastic EPR credit provider",
            "Plastic recycling credits",
            "Plastic EPR solutions",
          ]}
          url="https://eprnexuss.com/services/epr-plastic"
          type="article"
        />
        {/* main content column */}
        <div className="min-w-0 flex-1">
          <Hero />
          <WhatIsEPR />
          <CreditPricing />
          <CaseStudy />
          <ProcessFlow />
          <ComplianceTimeline />
          <RiskPenalties />
          <WhyUs />
          <FAQSection />
          <FinalCTA />
        </div>

        {/* sticky sidebar column — reserves its own width, never overlaps content */}
        <StickyForm />
      </div>

      {/* mobile spacer so the collapsible bottom bar doesn't sit on top of the final CTA */}
      <div className="h-16 bg-background lg:hidden" />
    </div>
  );
}
