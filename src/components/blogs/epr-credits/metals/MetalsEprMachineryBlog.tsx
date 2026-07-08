import React from "react";
import StickyContactForm from "@/components/StickyContactForm";
import { useNavigate } from "react-router-dom";
import Seo from "@/components/Seo";

// ==========================================
// INTERNAL SUB-COMPONENTS (10 distinct layout blocks)
// ==========================================

// 1. HeroHeader: Immersive display title matching custom configuration font families
const HeroHeader: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandGreen/10 border border-brandGreen/20 text-brandGreen text-sm font-medium tracking-wide">
      <span className="w-2 h-2 rounded-full bg-brandGreen animate-pulse" />
      Industrial Compliance Hub
    </div>
    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
      EPR Metals Credits:{" "}
      <span className="text-brandGreen">Machinery, Setup & Operations</span>{" "}
      Guide
    </h1>
    <p className="text-xl text-muted-foreground font-sans max-w-3xl leading-relaxed">
      A practical, data-driven framework covering infrastructure deployment,
      sorting technology, and digital tracking protocols for metal scrap—built
      for producers, recyclers, and PROs.
    </p>
    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-2 border-b border-border pb-6 font-sans">
      <div className="flex items-center gap-2">
        <svg
          className="w-4 h-4 text-brandGreen"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span>
          Reading Time: <strong>9 mins</strong>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <svg
          className="w-4 h-4 text-brandGreen"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>
          Updated: <strong>Q3 2026</strong>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <svg
          className="w-4 h-4 text-brandGreen"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
        <span>Verified Regulatory Standard</span>
      </div>
    </div>
  </div>
);

// 2. ExecutiveSummary: Grounding contextual framework
const ExecutiveSummary: React.FC = () => (
  <section className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-4 shadow-sm font-sans animate-slide-up">
    <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
      <svg
        className="w-6 h-6 text-brandGreen"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Executive Overview: The Metal EPR Imperative
    </h2>
    <p className="text-muted-foreground leading-relaxed">
      Extended Producer Responsibility (EPR) regulations mandate that
      electronics, automotive, and industrial equipment manufacturers trace and
      reclaim end-of-life metals. Under current environmental policy frameworks,
      sourcing compliant scrap and validating its origin yields{" "}
      <strong>EPR Credits</strong>. These credits fulfill corporate obligations
      or trade on open environmental asset registries.
    </p>
    <div className="p-4 bg-muted rounded-md border-l-4 border-brandGreen text-sm text-foreground space-y-1">
      <span className="font-semibold text-brandGreen tracking-wider uppercase text-xs block">
        Key Directive
      </span>
      Success depends entirely on a closed loop: high-efficiency automated
      segregation pipelines matching certified weight verification chains.
    </div>
  </section>
);

// 3. AnalyticsChart: Native responsive SVG visual reporting credit allocation matrix
const AnalyticsChart: React.FC = () => (
  <section className="space-y-4 font-sans">
    <div className="space-y-1">
      <h3 className="font-display text-xl font-bold text-foreground">
        Credit Multiplication Matrix
      </h3>
      <p className="text-sm text-muted-foreground">
        Estimated credit value multipliers based on metal purity and recycling
        complexity parameters.
      </p>
    </div>

    <div className="bg-card border border-border rounded-lg p-6 space-y-6 shadow-sm">
      {/* Custom Flex Bar Chart */}
      <div className="space-y-4">
        {[
          {
            label: "Non-Ferrous High Purity (Copper/Al)",
            value: "94%",
            width: "w-[94%]",
            color: "bg-brandGreen",
          },
          {
            label: "Ferrous Alloys (Shredded Structural Steel)",
            value: "78%",
            width: "w-[78%]",
            color: "bg-primary",
          },
          {
            label: "E-Waste Contained Precious Metals",
            value: "88%",
            width: "w-[88%]",
            color: "bg-accent",
          },
          {
            label: "Mixed Contaminated Scrap Fractions",
            value: "42%",
            width: "w-[42%]",
            color: "bg-muted-foreground/30",
          },
        ].map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-foreground">{item.label}</span>
              <span className="text-muted-foreground">
                {item.value} Credit Yield Index
              </span>
            </div>
            <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
              <div
                className={`${item.color} ${item.width} h-full rounded-full transition-all duration-1000 ease-out`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border text-center">
        <div>
          <div className="text-2xl font-bold text-foreground font-display">
            98.2%
          </div>
          <div className="text-xs text-muted-foreground">
            Average Sort Accuracy
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-brandGreen font-display">
            1.2x
          </div>
          <div className="text-xs text-muted-foreground">
            Precious Metal Multiplier
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-primary font-display">
            15,000+
          </div>
          <div className="text-xs text-muted-foreground">
            MT Annual Baseline Cap
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-foreground font-display">
            100%
          </div>
          <div className="text-xs text-muted-foreground">
            Audit Traceability
          </div>
        </div>
      </div>
    </div>
  </section>
);

// 4. MachineryBreakdown: Layout detailing operational infrastructure
const MachineryBreakdown: React.FC = () => (
  <section className="space-y-6 font-sans">
    <h2 className="font-display text-2xl font-bold text-foreground">
      1. Core Processing Machinery Infrastructure
    </h2>
    <p className="text-muted-foreground leading-relaxed">
      Transforming bulk end-of-life metal components into liquid, tradable EPR
      certificates requires clean mechanical isolation. Traditional hand-sorting
      scales unreliably and fails third-party batch assays.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-card border border-border p-5 rounded-lg space-y-3">
        <div className="w-10 h-10 rounded-md bg-brandGreen/10 flex items-center justify-center text-brandGreen">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>
        <h4 className="font-display font-bold text-lg text-foreground">
          Heavy-Duty Twin-Shaft Shredders
        </h4>
        <p className="text-sm text-muted-foreground">
          Utilizes low-speed, high-torque shearing to break major assemblies
          down into isotropic $50\text100\text$ size matrices, freeing
          mechanical joints and surface bonds.
        </p>
      </div>

      <div className="bg-card border border-border p-5 rounded-lg space-y-3">
        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h4 className="font-display font-bold text-lg text-foreground">
          Overband Magnetic Separators
        </h4>
        <p className="text-sm text-muted-foreground">
          Suspended high-intensity neodymium cross-belt systems that extract
          ferromagnetic elements (iron, steel) immediately post-shredding step.
        </p>
      </div>

      <div className="bg-card border border-border p-5 rounded-lg space-y-3">
        <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center text-accent">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.213 6H16"
            />
          </svg>
        </div>
        <h4 className="font-display font-bold text-lg text-foreground">
          Eddy Current Separators (ECS)
        </h4>
        <p className="text-sm text-muted-foreground">
          Induces magnetic fields within non-conductive streams to forcefully
          repel valuable non-ferrous elements like aluminum and copper away from
          inert matrices.
        </p>
      </div>

      <div className="bg-card border border-border p-5 rounded-lg space-y-3">
        <div className="w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center text-secondary">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2m0 10V7"
            />
          </svg>
        </div>
        <h4 className="font-display font-bold text-lg text-foreground">
          High-Density Hydraulic Balers
        </h4>
        <p className="text-sm text-muted-foreground">
          Compresses separated uniform outputs into dense, stackable cubical
          structures optimizing downstream logistics configurations and storage
          constraints.
        </p>
      </div>
    </div>
  </section>
);

// 5. FlowDiagram: Customized visual material flow chart
const FlowDiagram: React.FC = () => (
  <section className="space-y-4 font-sans">
    <div className="space-y-1">
      <h3 className="font-display text-xl font-bold text-foreground">
        Material Processing & Logging Flow
      </h3>
      <p className="text-sm text-muted-foreground">
        Logical layout mapping mechanical extraction stages down to certified
        ledger synchronization.
      </p>
    </div>

    <div className="bg-muted p-6 rounded-lg border border-border overflow-x-auto">
      <div className="flex items-center justify-between min-w-[640px] space-x-4">
        {[
          {
            step: "01",
            title: "Bulk Infeed",
            desc: "Gross weight verification",
          },
          { step: "02", title: "Shred & Size", desc: "Mechanical liberation" },
          {
            step: "03",
            title: "Multi-Stage Sort",
            desc: "Magnetic / Eddy Current",
          },
          { step: "04", title: "Assay & Log", desc: "EPR Credit generation" },
        ].map((item, idx, arr) => (
          <React.Fragment key={idx}>
            <div className="flex-1 bg-card border border-border p-4 rounded-md text-center space-y-1 shadow-sm">
              <span className="text-xs font-bold text-brandGreen tracking-wider uppercase font-display block">
                Stage {item.step}
              </span>
              <div className="font-bold text-sm text-foreground">
                {item.title}
              </div>
              <div className="text-xs text-muted-foreground">{item.desc}</div>
            </div>
            {idx < arr.length - 1 && (
              <div className="text-muted-foreground flex items-center justify-center">
                <svg
                  className="w-5 h-5 animate-pulse text-brandGreen"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

// 6. SetupChecklist: Technical prerequisites grid
const SetupChecklist: React.FC = () => (
  <section className="space-y-6 font-sans">
    <h2 className="font-display text-2xl font-bold text-foreground">
      2. Facility Setup Prerequisites & Site Selection
    </h2>
    <p className="text-muted-foreground leading-relaxed">
      Siting a high-volume metal processing asset requires careful configuration
      of logistical corridors, heavy grid connectivity, and regulatory
      clearances. Below is the minimum operational deployment matrix:
    </p>

    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-muted border-b border-border text-xs font-semibold tracking-wider text-muted-foreground uppercase font-display">
            <th className="p-4">Operational Domain</th>
            <th className="p-4">Minimum Engineering Specification</th>
            <th className="p-4">Compliance Function</th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-border text-foreground">
          <tr>
            <td className="p-4 font-medium">Power Infrastructure</td>
            <td className="p-4 text-muted-foreground">
              Dedicated 3-Phase $440\text connection; minimum $250\text 400\text
              capacity allocation.
            </td>
            <td className="p-4">
              <span className="text-xs px-2.5 py-1 rounded bg-secondary/30 text-foreground font-medium">
                Critical Path
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-4 font-medium">Zoning & Foundations</td>
            <td className="p-4 text-muted-foreground">
              Heavy industrial zone rating; $300\text reinforced anti-vibration
              concrete beds.
            </td>
            <td className="p-4">
              <span className="text-xs px-2.5 py-1 rounded bg-secondary/30 text-foreground font-medium">
                Structural Integrity
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-4 font-medium">Environmental Controls</td>
            <td className="p-4 text-muted-foreground">
              Acoustic enclosures minimizing noise below $75\text localized dry
              baghouse dust collectors.
            </td>
            <td className="p-4">
              <span className="text-xs px-2.5 py-1 rounded bg-brandGreen/10 text-brandGreen font-medium">
                SPCB Clearances
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-4 font-medium">Weighbridge Integration</td>
            <td className="p-4 text-muted-foreground">
              Minimum 60-Metric Ton dual-platform pitless layout; linked digital
              API logging interfaces.
            </td>
            <td className="p-4">
              <span className="text-xs px-2.5 py-1 rounded bg-brandGreen/10 text-brandGreen font-medium">
                EPR Audit Base
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

// 7. OperationsWorkflow: Tactical steps
const OperationsWorkflow: React.FC = () => (
  <section className="space-y-6 font-sans">
    <div className="space-y-1">
      <h2 className="font-display text-2xl font-bold text-foreground">
        3. Step-by-Step Operations Workflow
      </h2>
      <p className="text-muted-foreground">
        Daily process mapping standardizing material tracking and optimizing
        line processing speeds.
      </p>
    </div>

    <div className="space-y-4">
      {[
        {
          title: "Inbound Verification & Material Triage",
          desc: "Vehicles traverse the integrated digital weighbridge. Material manifests undergo matching against primary producer source codes to verify environmental chain-of-custody origins.",
        },
        {
          title: "Mechanical Sizing & Liberation",
          desc: "Bulk assemblies load via hydraulic cranes into the primary twin-shaft shredder, transforming complex components into size-optimized fractions ready for stream distribution.",
        },
        {
          title: "Automated Magnetic & Density Extraction",
          desc: "Materials pass along rapid belts through overband magnets and high-frequency eddy current separators, generating distinct, clean fractions of ferrous and non-ferrous metals.",
        },
        {
          title: "Assaying, Weighing & Immutable Credit Registration",
          desc: "Sorted outputs undergo moisture, composition, and purity testing before moving to final weight validation. Data uploads directly to central regulatory clearinghouses for credit issuance.",
        },
      ].map((step, idx) => (
        <div
          key={idx}
          className="flex gap-4 p-4 rounded-lg border border-border bg-card shadow-sm hover:border-brandGreen/30 transition-colors"
        >
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brandGreen text-primary-foreground font-display font-bold flex items-center justify-center text-sm">
            {idx + 1}
          </div>
          <div className="space-y-1">
            <h4 className="font-display font-bold text-foreground text-base">
              {step.title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// 8. AuditingFramework: Data and tracing protocols
const AuditingFramework: React.FC = () => (
  <section className="space-y-4 font-sans">
    <h2 className="font-display text-2xl font-bold text-foreground">
      4. Assaying, Weight Verification & Digital Auditing
    </h2>
    <p className="text-muted-foreground leading-relaxed">
      An EPR credit carries no legal or commercial value if its foundational
      tracking log is compromised. Independent national audit networks require
      full verification files tracking raw inputs directly to clean, processed
      material blocks.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div className="p-4 bg-muted border border-border rounded-lg space-y-2">
        <span className="font-bold text-foreground block">
          XRF Spectrometry
        </span>
        <p className="text-muted-foreground text-xs leading-relaxed">
          Handheld or integrated inline X-ray fluorescence units instantly
          identify elemental composition down to hundredths of a percent,
          eliminating grading disputes.
        </p>
      </div>
      <div className="p-4 bg-muted border border-border rounded-lg space-y-2">
        <span className="font-bold text-foreground block">
          API Weighbridge Systems
        </span>
        <p className="text-muted-foreground text-xs leading-relaxed">
          Direct hardware-to-cloud connections eliminate human input steps,
          reducing clerical modification vectors and keeping weight metrics
          true.
        </p>
      </div>
      <div className="p-4 bg-muted border border-border rounded-lg space-y-2">
        <span className="font-bold text-foreground block">
          Batch Traceability
        </span>
        <p className="text-muted-foreground text-xs leading-relaxed">
          Every individual container or compacted bale receives a permanent
          barcode tracking its shredding run, machine operator team, and purity
          assay profile.
        </p>
      </div>
    </div>
  </section>
);

// 9. FinancialReturnGrid: Financial viability metrics
const FinancialReturnGrid: React.FC = () => (
  <section className="space-y-4 font-sans">
    <h2 className="font-display text-2xl font-bold text-foreground">
      5. Financial Return & Credit Monetization Architecture
    </h2>
    <p className="text-muted-foreground leading-relaxed">
      Deploying high-performance processing lines balances infrastructure CapEx
      against two core revenue streams: physical recycled clean commodities and
      environmental compliance certificate premiums.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="p-5 border border-border rounded-lg bg-card space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-brandGreen font-display">
          Revenue Catalyst A
        </div>
        <div className="text-xl font-bold text-foreground">
          Physical Commodity Premium
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Generating highly separated, unpolluted copper or aluminum fragments
          commands top prices from foundational smelting centers, boosting
          baseline gross processing margins.
        </p>
      </div>
      <div className="p-5 border border-border rounded-lg bg-card space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary font-display">
          Revenue Catalyst B
        </div>
        <div className="text-xl font-bold text-foreground">
          Regulatory Credit Premiums
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Producers facing strict mandatory reclamation goals buy validated
          credits to fulfill environmental requirements, establishing
          high-margin institutional cash flows.
        </p>
      </div>
    </div>
  </section>
);

// 10. ClosingNotice: Prominent notice component containing the required user quote text
const ClosingNotice: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-br from-card to-muted border-2 border-brandGreen/30 rounded-xl p-6 md:p-8 text-center space-y-4 font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brandGreen/5 rounded-full translate-x-10 -translate-y-10 blur-xl" />
      <h3 className="font-display text-2xl font-bold text-foreground">
        Accelerate Your EPR Implementation Framework
      </h3>
      <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
        Our team is finalizing the full deep-dive; reach out for immediate
        guidance in the meantime. We help your operation deploy optimized
        processing lines, integrate digital scale architectures, and execute
        seamless credit compliance registration.
      </p>
      <div className="pt-2">
        <div
          onClick={() => navigate("/contact")}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brandGreen text-white font-medium rounded-md text-sm shadow hover:bg-brandGreen/90 transition-colors cursor-pointer"
        >
          Request Integration Blueprint
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// MAIN COMPONENT ENTRY POINT (Single File Layout)
// ==========================================
export default function EPRMetalsCreditsGuide() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-brandGreen/20 pt-28 pb-16 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid System: Main content stream on the left, sticky contact form on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Main Article Stream (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-12 pb-12 border-b lg:border-b-0 border-border">
            <Seo
              title="EPR Metals Credits: Machinery, Setup & Operations Guide"
              description="Discover the machinery, facility setup, infrastructure, and operational requirements for Metal EPR Credits. Learn best practices for metal collection, recycling, compliance, and EPR credit generation for producers, recyclers, and PROs."
              keywords={[
                "EPR Metals Credits",
                "Metal EPR Machinery",
                "Metal EPR Setup",
                "Metal EPR Operations",
                "Metal Recycling Equipment",
                "Metal Collection Infrastructure",
                "Metal Waste Management",
                "Metal EPR Compliance",
                "Metal Recycling Plant",
                "Metal Processing Equipment",
                "Metal Credit Generation",
                "Metal EPR Business",
                "Scrap Metal Recycling",
                "PRO Metal Management",
                "CPCB Metal EPR",
                "What machinery is required for Metal EPR?",
                "How to set up a Metal EPR business?",
                "How to generate Metal EPR credits?",
                "Metal recycling plant setup guide",
                "Metal collection and processing infrastructure",
                "How to manage Metal EPR operations?",
                "Metal EPR compliance guide",
                "Metal recycling equipment in India",
                "Metal EPR implementation process",
                "Metal EPR operations guide 2026",
              ]}
              url="https://eprnexuss.com/blog/epr-metals-machinery"
              type="article"
            />

            {/* Component 1: Main Header Section */}
            <HeroHeader />

            {/* Component 2: Contextual Overview */}
            <ExecutiveSummary />

            {/* Component 3: Data Visualization Dashboard */}
            <AnalyticsChart />

            {/* Component 4: Machinery Infrastructure Matrix */}
            <MachineryBreakdown />

            {/* Component 5: Embedded Processing Logic Diagram */}
            <FlowDiagram />

            {/* Component 6: Engineering Siting Prerequisites */}
            <SetupChecklist />

            {/* Component 7: Process Action Workflow */}
            <OperationsWorkflow />

            {/* Component 8: Data Audit Framework Section */}
            <AuditingFramework />

            {/* Component 9: ROI Grid Architecture */}
            <FinancialReturnGrid />

            {/* Component 10: Deep-Dive Advisory Call Notice */}
            <ClosingNotice />
          </div>

          {/* Sticky Interactive Contact Form Column */}
          <div className="lg:col-span-1 lg:sticky lg:top-32 space-y-6">
            <div className="bg-card border border-border rounded-xl p-1 shadow-sm hover:shadow-md transition-shadow">
              {/* <div className="p-4 bg-muted/50 rounded-t-lg border-b border-border">
                <div className="text-xs font-bold text-brandGreen uppercase tracking-wider font-display">Direct Consultation Line</div>
                <h3 className="font-display font-bold text-lg text-foreground">Speak with an EPR Specialist</h3>
                <p className="text-xs text-muted-foreground mt-1">Get custom infrastructure blueprints and credit yield estimates for your recycling facility.</p>
              </div> */}
              <div className="p-4 bg-card rounded-b-lg">
                <StickyContactForm />
              </div>
            </div>

            {/* Supplementary Context Card */}
            {/* <div className="bg-muted/40 rounded-lg p-4 border border-border/60 text-xs text-muted-foreground space-y-2 font-sans">
              <span className="font-semibold text-foreground flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-brandGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0 0v2m0-2h2m-2 0H10m3.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                Compliance Update Notice
              </span>
              <p className="leading-relaxed">
                All data, processing parameters, and equipment profiles mirror current 2026 industrial waste regulations and CPCB/SPCB monitoring requirements.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
