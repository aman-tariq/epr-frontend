import React, { FormEvent, useEffect, useState } from "react";
import StickyContactForm from "@/components/StickyContactForm";
type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How many types of LFP batteries are used in electric vehicles?",
    answer:
      "There is no single official number of LFP battery types used in EVs. LFP is a chemistry, while the practical battery specification changes by cell format, series/parallel configuration, voltage, capacity, discharge rate, cooling system, BMS, enclosure and vehicle application. In real projects, the same LFP chemistry can therefore appear as very different battery packs.",
  },
  {
    question: "Is LPF the same as LFP?",
    answer:
      "The standard abbreviation is LFP, meaning Lithium Iron Phosphate. “LPF” is commonly used as a typo or word-order mistake. In technical documents, specifications, quotations and compliance submissions, use LFP consistently.",
  },
  {
    question: "What is the nominal voltage of an LFP cell?",
    answer:
      "A typical LFP cell is commonly treated as approximately 3.2 V nominal. Pack voltage then depends on how many cells are connected in series. For example, a 16S pack is about 51.2 V nominal and a 24S pack is about 76.8 V nominal. These are engineering examples, not universal vehicle standards.",
  },
  {
    question: "What are the main LFP cell formats used in EVs?",
    answer:
      "The three broad cell formats are prismatic, cylindrical and pouch. Current industry data shows prismatic cells are dominant globally, and the IEA reports that LFP EV batteries rely almost exclusively on prismatic cells in current large-scale deployments.",
  },
  {
    question: "Do LFP batteries need a BMS?",
    answer:
      "Yes. A properly engineered LFP traction pack needs a battery management system to monitor and protect cell voltage, pack current and temperature, manage balancing, estimate state of charge and state of health, and communicate relevant information to the vehicle or charger. Safety compliance is not achieved by chemistry alone.",
  },
  {
    question: "Does choosing LFP automatically make an EV compliant in India?",
    answer:
      "No. Battery chemistry is only one part of compliance. The applicable vehicle category, traction battery design, testing, documentation, type approval and production controls matter. For example, AIS-156 applies to L-category electric power-train vehicles, while AIS-038 (Rev. 2) covers M and N category electric power-train vehicles with traction-battery requirements.",
  },
  {
    question: "Is battery EPR the same as vehicle type approval?",
    answer:
      "No. They address different obligations. Vehicle type approval deals with vehicle and traction-system compliance under the motor-vehicle regulatory framework. Battery EPR sits under the Battery Waste Management Rules and addresses the battery's end-of-life responsibility and waste-management chain.",
  },
  {
    question: "What should a business restarting LFP battery or EV activity do first?",
    answer:
      "Start with a compliance-and-product gap assessment before spending on fresh testing or registrations. Freeze the proposed product and battery specification, identify the exact business role, map the applicable approvals, check old documents and portal status, and then build a submission sequence around the current requirements.",
  },
];

const lfpSpecificationRows = [
  {
    parameter: "Cell format",
    variants: "Prismatic / Cylindrical / Pouch",
    meaning:
      "Physical construction of the cell. Prismatic is especially important for today's LFP EV packs.",
  },
  {
    parameter: "Nominal cell voltage",
    variants: "Typically about 3.2 V",
    meaning:
      "The reference voltage of one LFP cell. Pack voltage rises with cells connected in series.",
  },
  {
    parameter: "Series count",
    variants: "16S / 20S / 24S / 32S / 96S / 108S / etc.",
    meaning:
      "Sets the nominal pack voltage. The exact series count is an engineering choice for the vehicle architecture.",
  },
  {
    parameter: "Parallel count",
    variants: "1P / 2P / 4P / higher",
    meaning:
      "Increases current capability and Ah capacity while keeping the nominal series voltage unchanged.",
  },
  {
    parameter: "Capacity",
    variants: "Ah, then pack energy in kWh",
    meaning:
      "Capacity determines how much charge the battery can store. Approximate energy is voltage × Ah ÷ 1000.",
  },
  {
    parameter: "Power / C-rate",
    variants: "Continuous and peak discharge / charge rate",
    meaning:
      "Describes how quickly the pack can deliver or accept energy under defined thermal and operating conditions.",
  },
  {
    parameter: "Thermal management",
    variants: "Air / liquid / plate or integrated cooling approaches",
    meaning:
      "Controls cell temperature and supports repeatable performance, safety and useful life.",
  },
  {
    parameter: "BMS",
    variants: "Protection, balancing, SOC/SOH, CAN and diagnostics",
    meaning:
      "The control layer that supervises the pack and communicates critical battery information.",
  },
  {
    parameter: "Mechanical enclosure",
    variants: "IP-rated pack housing, mounting and protection",
    meaning:
      "Provides structural protection, environmental resistance, service access and vehicle integration.",
  },
  {
    parameter: "Traceability",
    variants: "Cell, module, BMS, charger, serial/batch data",
    meaning:
      "Creates an auditable record that helps with testing, quality control, troubleshooting and regulatory verification.",
  },
];

const exampleConfigurations = [
  {
    title: "48–52 V class",
    formula: "16S LFP ≈ 51.2 V nominal",
    use: "Typical engineering territory for compact electric mobility and low-voltage traction designs.",
  },
  {
    title: "72–77 V class",
    formula: "24S LFP ≈ 76.8 V nominal",
    use: "Useful example for higher-voltage two/three-wheeler and light-traction architectures.",
  },
  {
    title: "100–103 V class",
    formula: "32S LFP ≈ 102.4 V nominal",
    use: "Illustrates how adding series cells raises pack voltage without changing cell chemistry.",
  },
  {
    title: "300–400+ V class",
    formula: "96S ≈ 307.2 V; 120S ≈ 384 V; 128S ≈ 409.6 V nominal",
    use: "Illustrative high-voltage architecture range for passenger-car and larger traction systems.",
  },
];

export default function LFPBatterySpecificationsEVBlog() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Open at the top so the hero is visible (stops the browser/router restoring an old scroll position).
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    toTop();
    const t1 = window.setTimeout(toTop, 0);
    const t2 = window.setTimeout(toTop, 150);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    document.title =
      "How Many Types of LFP Battery Specifications Are Used in Electric Vehicles?";

    const description =
      "A practical guide to LFP battery specifications, cell formats, voltage, capacity, BMS, EV compliance, Battery EPR and business restart support in India.";

    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Capture the form now: event.currentTarget is null inside async callbacks.
    const form = event.currentTarget;
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      alert(
        "Thank you. Your requirement has been captured. Connect this form to your CRM/API before production deployment."
      );
      form.reset();
    }, 500);
  };

  return (
    <article className="lfp-blog">
      <style>{`
        .lfp-blog {
          --green: #5AC361;
          --green-dark: #167a3f;
          --green-soft: #eef9f0;
          --blue: #123a63;
          --blue-soft: #eef5fb;
          --ink: #13251b;
          --muted: #617068;
          --line: #dfe8e2;
          --surface: #ffffff;
          --surface-alt: #f7faf8;
          --shadow: 0 18px 50px rgba(14, 46, 27, 0.09);
          --lfp-header: clamp(140px, 11vw, 215px); /* height of your fixed site header (top bar + nav) */
          color: var(--ink);
          background: #ffffff;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          line-height: 1.75;
          overflow-wrap: break-word;
          overflow-x: clip;
        }

        .lfp-blog * {
          box-sizing: border-box;
        }

        .lfp-wrap {
          width: min(1840px, calc(100% - 86px));
          margin: 0 auto;
        }

        .lfp-hero {
          position: relative;
          padding: var(--lfp-header) 0 48px;
          
          border-bottom: 1px solid var(--line);
          background:
            radial-gradient(circle at 15% 20%, rgba(90, 195, 97, 0.12), transparent 30%),
            radial-gradient(circle at 90% 10%, rgba(18, 58, 99, 0.10), transparent 27%),
            linear-gradient(180deg, #f9fcfa 0%, #ffffff 100%);
        }

        .lfp-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 420px;
          gap: 40px;
          align-items: start;
        }

        .lfp-blog [id] {
          scroll-margin-top: calc(var(--lfp-header) + 12px);
        }

        .lfp-hero-card {
          padding: 44px;
          border-radius: 28px;
          color: #ffffff;
          background:
            radial-gradient(circle at 85% 100%, rgba(18, 90, 150, 0.55), transparent 55%),
            linear-gradient(135deg, #0c3b2a 0%, #0f4f34 55%, #0f3f66 100%);
          box-shadow: var(--shadow);
        }

        .lfp-hero-card .lfp-eyebrow {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
        }

        .lfp-hero-card .lfp-eyebrow span {
          background: #7fe0a0;
        }

        .lfp-hero-card .lfp-title {
          margin-top: 22px;
          color: #ffffff;
          font-size: clamp(30px, 4vw, 50px);
        }

        .lfp-hero-card .lfp-title .accent {
          color: #86e3a4;
        }

        .lfp-hero-card .lfp-lead {
          color: rgba(255, 255, 255, 0.85);
        }

        .lfp-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 26px;
        }

        .lfp-hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 22px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 800;
          text-decoration: none;
          color: #ffffff;
        }

        .lfp-hero-btn.primary {
          background: #26905a;
        }

        .lfp-hero-btn.ghost {
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.08);
        }

        .lfp-hero-card .lfp-stat {
          border-color: rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.08);
        }

        .lfp-hero-card .lfp-stat strong {
          color: #9ce5a3;
        }

        .lfp-hero-card .lfp-stat span {
          color: rgba(255, 255, 255, 0.75);
        }

        .lfp-hero .lfp-form-card {
          padding: 26px 28px 28px;
          border-radius: 26px;
        }

        .lfp-hero .lfp-form-card::before {
          content: "";
          display: block;
          height: 4px;
          margin-bottom: 22px;
          border-radius: 4px;
          background: linear-gradient(90deg, var(--green-dark), var(--blue));
        }

        .lfp-hero .lfp-form-head h2 {
          font-size: 22px;
        }

        .lfp-call-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          margin: 16px 0 14px;
          border-radius: 12px;
          background: #26905a;
          color: #ffffff;
          font-weight: 800;
          text-decoration: none;
        }

        .lfp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 13px;
          border-radius: 999px;
          background: var(--green-soft);
          color: var(--green-dark);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .lfp-eyebrow span {
          display: inline-block;
          flex: 0 0 auto;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
        }

        .lfp-title {
          margin: 19px 0 18px;
          max-width: none;
          font-size: clamp(36px, 5vw, 60px);
          line-height: 1.05;
          letter-spacing: -0.04em;
          font-weight: 900;
        }

        .lfp-title .accent {
          color: var(--green-dark);
        }

        .lfp-lead {
          max-width: 980px;
          margin: 0;
          color: var(--muted);
          font-size: clamp(17px, 2vw, 20px);
        }

        .lfp-trust-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 28px;
        }

        .lfp-stat {
          padding: 14px 16px;
          border: 1px solid var(--line);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.86);
        }

        .lfp-stat strong {
          display: block;
          color: var(--blue);
          font-size: 21px;
          line-height: 1.15;
        }

        .lfp-stat span {
          display: block;
          margin-top: 5px;
          color: var(--muted);
          font-size: 13px;
        }

        /* Sticky form column. Set top to your fixed header height + ~16px. */
        .lfp-form-sticky {
          position: sticky;
          top: calc(var(--lfp-header) + 12px);
          align-self: start;
        }

        .lfp-form-card {
          padding: 24px;
          border: 1px solid #d8e8dc;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: var(--shadow);
        }

        .lfp-form-head h2 {
          margin: 0;
          font-size: 25px;
          line-height: 1.2;
        }

        .lfp-form-head p {
          margin: 8px 0 19px;
          color: var(--muted);
          font-size: 14px;
        }

        .lfp-form {
          display: grid;
          gap: 11px;
        }

        .lfp-form label {
          display: grid;
          gap: 6px;
          color: #324238;
          font-size: 12px;
          font-weight: 800;
        }

        .lfp-form input,
        .lfp-form textarea {
          width: 100%;
          border: 1px solid #d5e0d8;
          border-radius: 12px;
          padding: 11px 12px;
          outline: none;
          background: #fbfdfb;
          color: var(--ink);
          font: inherit;
          font-size: 14px;
          transition: 0.2s ease;
        }

        .lfp-form input:focus,
        .lfp-form textarea:focus {
          border-color: var(--green);
          box-shadow: 0 0 0 3px rgba(90, 195, 97, 0.15);
          background: #ffffff;
        }

        .lfp-form textarea {
          min-height: 86px;
          resize: vertical;
        }

        .lfp-btn {
          border: 0;
          border-radius: 13px;
          padding: 13px 16px;
          background: linear-gradient(135deg, var(--green-dark), var(--green));
          color: #ffffff;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(23, 122, 63, 0.22);
        }

        .lfp-btn:disabled {
          cursor: not-allowed;
          opacity: 0.75;
        }

        .lfp-form-note {
          margin: 0;
          color: #708078;
          font-size: 11px;
          line-height: 1.55;
        }

        .lfp-visual {
          position: relative;
          min-height: 265px;
          margin-top: 30px;
          padding: 24px;
          border-radius: 24px;
          background: linear-gradient(135deg, #0e1c14 0%, #102f20 48%, #0f2340 100%);
          color: #ffffff;
          overflow: hidden;
          box-shadow: 0 22px 60px rgba(7, 28, 18, 0.18);
        }

        .lfp-visual::before,
        .lfp-visual::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.14);
        }

        .lfp-visual::before {
          width: 300px;
          height: 300px;
          top: -170px;
          right: -100px;
        }

        .lfp-visual::after {
          width: 220px;
          height: 220px;
          bottom: -130px;
          left: -80px;
        }

        .battery-illustration {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 15px;
        }

        .battery-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }

        .battery-top strong {
          font-size: 18px;
        }

        .battery-chip {
          padding: 7px 10px;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          font-size: 11px;
          font-weight: 800;
        }

        .battery-pack {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 5px;
          padding: 13px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          background: rgba(255,255,255,0.06);
        }

        .battery-cell {
          height: 74px;
          border-radius: 7px;
          background:
            linear-gradient(180deg, rgba(126, 245, 144, 0.92) 0 35%, rgba(45, 161, 83, 0.95) 35% 100%);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
        }

        .battery-copy {
          display: grid;
          gap: 4px;
        }

        .battery-copy span {
          color: rgba(255,255,255,0.72);
          font-size: 12px;
        }

        .battery-copy strong {
          font-size: 24px;
          line-height: 1.1;
        }

        .lfp-section {
          padding: 66px 0;
        }

        .lfp-section.alt {
          background: var(--surface-alt);
        }

        .lfp-section.blue {
          background: var(--blue);
          color: #ffffff;
        }

        .lfp-heading {
          max-width: 1100px;
          margin-bottom: 28px;
        }

        .lfp-kicker {
          margin: 0 0 8px;
          color: var(--green-dark);
          font-weight: 900;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .lfp-section.blue .lfp-kicker {
          color: #9ce5a3;
        }

        .lfp-heading h2 {
          margin: 0;
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .lfp-heading p {
          margin: 12px 0 0;
          color: var(--muted);
          font-size: 17px;
        }

        .lfp-section.blue .lfp-heading p {
          color: rgba(255,255,255,0.72);
        }

        .lfp-prose {
          max-width: none;
        }

        .lfp-prose p {
          margin: 0 0 17px;
          color: #415049;
          font-size: 16px;
        }

        .lfp-section.blue .lfp-prose p {
          color: rgba(255,255,255,0.78);
        }

        .lfp-prose strong {
          color: var(--ink);
        }

        .lfp-section.blue .lfp-prose strong {
          color: #ffffff;
        }

        .lfp-step-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 28px;
        }

        .lfp-step-card {
          padding: 22px;
          border: 1px solid var(--line);
          border-radius: 20px;
          background: #ffffff;
        }

        .lfp-step-number {
          display: inline-grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--green-soft);
          color: var(--green-dark);
          font-weight: 900;
          font-size: 13px;
        }

        .lfp-step-card h3 {
          margin: 13px 0 8px;
          font-size: 20px;
          line-height: 1.25;
        }

        .lfp-step-card p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
        }

        .lfp-callout {
          margin: 28px 0;
          padding: 20px 22px;
          border-left: 4px solid var(--green);
          border-radius: 0 16px 16px 0;
          background: var(--green-soft);
        }

        .lfp-callout strong {
          display: block;
          margin-bottom: 4px;
          color: var(--green-dark);
        }

        .lfp-callout p {
          margin: 0;
          color: #415049;
          font-size: 15px;
        }

        .lfp-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin-top: 24px;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 12px 35px rgba(14, 46, 27, 0.05);
        }

        .lfp-table {
          width: 100%;
          min-width: 790px;
          border-collapse: collapse;
        }

        .lfp-table th,
        .lfp-table td {
          padding: 15px 16px;
          border-bottom: 1px solid var(--line);
          text-align: left;
          vertical-align: top;
          font-size: 14px;
        }

        .lfp-table th {
          background: #f2f8f3;
          color: #284132;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .lfp-table tr:last-child td {
          border-bottom: 0;
        }

        .lfp-table td:first-child {
          width: 18%;
          font-weight: 800;
          color: var(--blue);
        }

        .lfp-example-grid,
        .lfp-service-grid,
        .lfp-pain-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 24px;
        }

        .lfp-example-card,
        .lfp-service-card,
        .lfp-pain-card {
          padding: 21px;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: #ffffff;
        }

        .lfp-example-card h3,
        .lfp-service-card h3,
        .lfp-pain-card h3 {
          margin: 0 0 7px;
          font-size: 18px;
        }

        .lfp-example-card .formula {
          display: inline-block;
          margin-bottom: 8px;
          padding: 6px 9px;
          border-radius: 8px;
          background: var(--blue-soft);
          color: var(--blue);
          font-size: 13px;
          font-weight: 900;
        }

        .lfp-example-card p,
        .lfp-service-card p,
        .lfp-pain-card p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
        }

        .lfp-comparison {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 18px;
          margin-top: 26px;
        }

        .lfp-compare-card {
          padding: 22px;
          border-radius: 20px;
          border: 1px solid var(--line);
          background: #ffffff;
        }

        .lfp-compare-card h3 {
          margin: 0 0 12px;
          font-size: 20px;
        }

        .lfp-compare-card ul {
          margin: 0;
          padding-left: 18px;
          color: var(--muted);
        }

        .lfp-compare-card li {
          margin: 7px 0;
        }

        .lfp-step-list {
          display: grid;
          gap: 14px;
          margin-top: 28px;
        }

        .lfp-roadmap {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 16px 17px;
          align-items: start;
        }

        .lfp-roadmap-num {
          display: grid;
          place-items: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--green);
          color: #0b2010;
          font-weight: 900;
        }

        .lfp-roadmap h3 {
          margin: 0 0 4px;
          font-size: 19px;
        }

        .lfp-roadmap p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
        }

        .lfp-compliance-strip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 25px;
        }

        .lfp-strip-item {
          padding: 15px;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 15px;
          background: rgba(255,255,255,0.05);
        }

        .lfp-strip-item strong {
          display: block;
          font-size: 15px;
        }

        .lfp-strip-item span {
          display: block;
          margin-top: 4px;
          color: rgba(255,255,255,0.63);
          font-size: 12px;
        }

        .lfp-faq-list {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .lfp-faq {
          border: 1px solid var(--line);
          border-radius: 16px;
          background: #ffffff;
          overflow: hidden;
        }

        .lfp-faq button {
          width: 100%;
          border: 0;
          padding: 18px 20px;
          display: flex;
          justify-content: space-between;
          gap: 15px;
          align-items: center;
          background: transparent;
          color: var(--ink);
          text-align: left;
          font: inherit;
          font-weight: 900;
          cursor: pointer;
        }

        .lfp-faq-icon {
          flex: 0 0 auto;
          color: var(--green-dark);
          font-size: 20px;
          line-height: 1;
        }

        .lfp-faq-answer {
          padding: 0 20px 19px;
          color: var(--muted);
          font-size: 14px;
        }

        .lfp-source-box {
          padding: 23px;
          border: 1px solid var(--line);
          border-radius: 20px;
          background: #ffffff;
        }

        .lfp-source-box h3 {
          margin: 0 0 12px;
          font-size: 20px;
        }

        .lfp-source-box p {
          margin: 7px 0;
          color: var(--muted);
          font-size: 13px;
        }

        .lfp-source-box a {
          color: var(--blue);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .lfp-disclaimer {
          margin-top: 18px;
          color: #77857e;
          font-size: 12px;
          line-height: 1.55;
        }

        .lfp-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 26px;
          padding: 27px;
          border-radius: 24px;
          background: linear-gradient(135deg, #0f2719 0%, #133e27 60%, #123b63 100%);
          color: #ffffff;
        }

        .lfp-cta h2 {
          margin: 0;
          font-size: 29px;
          line-height: 1.15;
        }

        .lfp-cta p {
          margin: 8px 0 0;
          color: rgba(255,255,255,0.72);
          font-size: 14px;
        }

        .lfp-cta a {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 17px;
          border-radius: 12px;
          background: #ffffff;
          color: #0f2719;
          text-decoration: none;
          font-weight: 900;
        }

        /* ---------- Responsive ---------- */

        @media (max-width: 1100px) {
          .lfp-hero-grid {
            grid-template-columns: minmax(0, 1fr) 340px;
            gap: 28px;
          }
        }

        @media (max-width: 980px) {
          .lfp-hero-grid {
            grid-template-columns: 1fr;
          }

          .lfp-form-sticky {
            position: static;
          }

          .lfp-form-card {
            max-width: 640px;
          }

          .lfp-trust-row {
            max-width: 800px;
          }

          .lfp-compliance-strip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .lfp-wrap {
            width: min(100% - 24px, 680px);
          }

          .lfp-hero {
            padding: 130px 0 32px;
          }

          .lfp-hero-card {
            padding: 26px 20px;
            border-radius: 22px;
          }

          .lfp-hero-btn {
            flex: 1 1 100%;
          }

          .lfp-hero .lfp-form-card {
            padding: 20px 18px 22px;
          }

          .lfp-section {
            padding: 44px 0;
          }

          .lfp-title {
            font-size: clamp(30px, 9vw, 42px);
          }

          .lfp-heading h2 {
            font-size: clamp(24px, 7vw, 32px);
          }

          .lfp-heading p {
            font-size: 16px;
          }

          .lfp-trust-row,
          .lfp-step-grid,
          .lfp-example-grid,
          .lfp-service-grid,
          .lfp-pain-grid,
          .lfp-comparison,
          .lfp-compliance-strip {
            grid-template-columns: 1fr;
          }

          .lfp-stat strong {
            font-size: 18px;
          }

          .lfp-form-card {
            padding: 18px;
            border-radius: 18px;
          }

          /* 16px prevents iOS Safari from zooming in on focus */
          .lfp-form input,
          .lfp-form textarea {
            font-size: 16px;
          }

          .lfp-visual {
            min-height: 0;
            padding: 16px;
          }

          .battery-pack {
            grid-template-columns: repeat(8, 1fr);
          }

          .battery-cell {
            height: 48px;
          }

          .battery-copy strong {
            font-size: 18px;
          }

          .battery-top {
            flex-wrap: wrap;
          }

          .lfp-roadmap {
            gap: 12px;
          }

          .lfp-faq button {
            padding: 15px 16px;
          }

          .lfp-faq-answer {
            padding: 0 16px 16px;
          }

          .lfp-cta {
            flex-direction: column;
            align-items: stretch;
            padding: 20px;
          }

          .lfp-cta h2 {
            font-size: 23px;
          }

          .lfp-cta a {
            width: 100%;
          }
        }

        @media (max-width: 400px) {
          .battery-pack {
            grid-template-columns: repeat(5, 1fr);
          }

          .lfp-eyebrow {
            font-size: 11px;
          }

          .lfp-step-card,
          .lfp-compare-card,
          .lfp-example-card,
          .lfp-service-card,
          .lfp-pain-card {
            padding: 16px;
          }
        }
      `}</style>

      <header className="lfp-hero">
        <div className="lfp-wrap lfp-hero-grid">
          <div>
            <div className="lfp-hero-card">
            <div className="lfp-eyebrow">
              <span />
              EV Battery • LFP • India Compliance
            </div>

            <h1 className="lfp-title">
              How Many Types of <span className="accent">LFP Battery Specifications</span> Are Used in Electric Vehicles?
            </h1>

            <p className="lfp-lead">
              LFP is not a single battery “size” or a fixed list of battery types.
              The chemistry stays LFP, while the specification changes according to
              cell format, voltage, capacity, power, BMS, thermal design and the
              vehicle it has to move.
            </p>

            <div className="lfp-hero-actions">
              <a className="lfp-hero-btn primary" href="#lfp-specs">
                View Key Specifications
              </a>
              <a className="lfp-hero-btn ghost" href="#lfp-contact">
                Talk to an Expert
              </a>
            </div>

            <div className="lfp-trust-row">
              <div className="lfp-stat">
                <strong>55%+</strong>
                <span>LFP share of global EV battery deployment in 2025</span>
              </div>
              <div className="lfp-stat">
                <strong>1.2 TWh</strong>
                <span>Global EV battery deployment in 2025</span>
              </div>
              <div className="lfp-stat">
                <strong>50%+</strong>
                <span>LFP share of electric-car batteries in India in 2024</span>
              </div>
            </div>
            </div>

            <div className="lfp-visual" aria-label="Conceptual LFP battery illustration">
              <div className="battery-illustration">
                {/* // <div className="battery-top">
                  <strong>Inside an LFP traction pack</strong>
                  <div className="battery-chip">Chemistry: LiFePO₄</div>
                </div>
{/*  
                <div className="battery-pack">
                  {Array.from({ length: 40 }).map((_, index) => (
                    <div className="battery-cell" key={index} />
                  ))}
                </div> */}

                <div className="battery-copy">
                  <span>Same chemistry — different engineering specification</span>
                  <strong>3.2 V cell → series + parallel → EV pack</strong>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – Sticky Form */}
          <aside
            className="hidden lg:block"
            style={{
              position: "sticky",
              top: "2rem",
              width: "320px",
              flexShrink: 0,
              alignSelf: "start",
              
            }}
          >
            <StickyContactForm />
          </aside>
        </div>
      </header>

      <section className="lfp-section">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">First, clear up the terminology</p>
            <h2>LFP is a chemistry. The “types” are really different specifications.</h2>
          </div>

          <div className="lfp-prose">
            <p>
              LFP stands for <strong>Lithium Iron Phosphate</strong> and is also written
              as LiFePO₄. The important point for a new EV-business owner is that LFP
              does not come in one universal battery specification. A battery supplier
              can offer the same chemistry in a prismatic, cylindrical or pouch cell,
              then configure those cells into very different voltages, capacities and
              power levels.
            </p>

            <p>
              This is why two products can both be called “LFP batteries” while one is
              a compact low-voltage traction pack and another is a high-voltage passenger
              vehicle pack. The chemistry is the starting point; the engineering
              specification is what makes the battery fit the vehicle.
            </p>

            <div className="lfp-callout">
              <strong>Use the correct term in your business documents</strong>
              <p>
                The standard abbreviation is <strong>LFP</strong>, not LPF. In a
                quotation, product datasheet, test request or compliance file, consistency
                matters because the battery chemistry is only one part of the approval
                story.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lfp-section alt">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">Step 1</p>
            <h2>Why LFP is now a major EV battery chemistry</h2>
            <p>
              Cost, cycle durability and thermal stability have pushed LFP far beyond a
              niche position.
            </p>
          </div>

          <div className="lfp-prose">
            <p>
              The International Energy Agency reported that LFP batteries accounted for
              <strong> more than 55% of global EV batteries deployed in 2025</strong>,
              rising from nearly half in 2024. Global EV battery deployment itself reached
              about <strong>1.2 TWh in 2025</strong>, nearly 30% above 2024.
            </p>

            <p>
              The same IEA analysis says LFP battery packs were, on average, more than
              <strong> 40% cheaper per kWh than NMC packs in 2025</strong>, although the
              comparison includes both EV and stationary-storage applications. LFP also
              avoids cobalt in the cathode chemistry, while its lower energy density can
              require a different pack design.
            </p>

            <p>
              India is part of this shift. In the IEA's 2025 review of 2024 battery
              markets, LFP represented <strong>more than half of the electric-car battery
              market in India</strong>, with domestic production led by Tata Motors cited
              as a major driver.
            </p>

            <div className="lfp-compare-card" style={{ marginTop: 24 }}>
              <h3>What LFP usually trades</h3>
              <ul>
                <li>Lower energy density than high-nickel chemistries, so pack size and mass can be higher for the same energy.</li>
                <li>Strong cycle-life potential and good thermal stability when the complete pack is properly designed.</li>
                <li>Lower material-cost pressure than nickel/cobalt-rich chemistries in many applications.</li>
                <li>Good fit for applications where frequent charging, cost control and predictable operation matter.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="lfp-section" id="lfp-specs">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">Step 2</p>
            <h2>The main LFP battery specifications used in EV engineering</h2>
            <p>
              There is no fixed count. A useful way to understand LFP packs is to
              classify the specification into the following engineering layers.
            </p>
          </div>

          <div className="lfp-table-wrap">
            <table className="lfp-table">
              <thead>
                <tr>
                  <th>Specification</th>
                  <th>Common variants / examples</th>
                  <th>What it changes</th>
                </tr>
              </thead>
              <tbody>
                {lfpSpecificationRows.map((row) => (
                  <tr key={row.parameter}>
                    <td>{row.parameter}</td>
                    <td>{row.variants}</td>
                    <td>{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="lfp-section alt">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">Step 3</p>
            <h2>Understand LFP cell formats: prismatic, cylindrical and pouch</h2>
          </div>

          <div className="lfp-prose">
            <p>
              Cell format is one of the first specifications a buyer should lock.
              Globally, <strong>prismatic cells accounted for more than 60% of EV and
              stationary-storage batteries in 2025</strong>, according to the IEA. Its
              report also notes that current LFP EV batteries rely almost exclusively on
              prismatic cells.
            </p>
          </div>

          <div className="lfp-step-grid">
            <div className="lfp-step-card">
              <span className="lfp-step-number">A</span>
              <h3>Prismatic LFP</h3>
              <p>
                A rigid rectangular cell. The format is widely associated with current
                large LFP traction packs and can support compact packaging with fewer
                cell interconnections.
              </p>
            </div>

            <div className="lfp-step-card">
              <span className="lfp-step-number">B</span>
              <h3>Cylindrical LFP</h3>
              <p>
                A round can-style cell. It can be scaled using large numbers of cells,
                but pack architecture, interconnects and thermal management must be
                engineered around the cylindrical geometry.
              </p>
            </div>

            <div className="lfp-step-card">
              <span className="lfp-step-number">C</span>
              <h3>Pouch LFP</h3>
              <p>
                A flexible laminated package. It can be space-efficient, but swelling
                control, compression, mechanical protection and enclosure design become
                especially important.
              </p>
            </div>

            <div className="lfp-step-card">
              <span className="lfp-step-number">D</span>
              <h3>Module or cell-to-pack architecture</h3>
              <p>
                Cells may be assembled into modules first, or integrated more directly
                into the pack. The architecture affects packaging, cooling, serviceability,
                energy density and end-of-life dismantling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lfp-section">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">Step 4</p>
            <h2>Voltage is decided by series connection — not by the word “LFP”</h2>
            <p>
              A typical LFP cell is treated as about 3.2 V nominal. The pack voltage
              rises as more cells are connected in series.
            </p>
          </div>

          <div className="lfp-example-grid">
            {exampleConfigurations.map((example) => (
              <div className="lfp-example-card" key={example.title}>
                <h3>{example.title}</h3>
                <div className="formula">{example.formula}</div>
                <p>{example.use}</p>
              </div>
            ))}
          </div>

          <div className="lfp-callout">
            <strong>Simple calculation</strong>
            <p>
              Approximate pack energy in kWh = nominal pack voltage × Ah ÷ 1000.
              Therefore, a 51.2 V × 100 Ah example gives 5.12 kWh, while a 307.2 V ×
              160 Ah example gives about 49.15 kWh. These are calculation examples,
              not declarations that every EV uses those exact packs.
            </p>
          </div>
        </div>
      </section>

      <section className="lfp-section alt">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">Step 5</p>
            <h2>Capacity, current and C-rate: where many new businesses get confused</h2>
          </div>

          <div className="lfp-prose">
            <p>
              <strong>Ah tells you how much electrical charge is stored.</strong> kWh is
              the more useful energy figure for the whole pack. But a battery with a
              high Ah rating is not automatically a high-power battery.
            </p>

            <p>
              Power depends on voltage and current, while safe current depends on cell
              capability, temperature, interconnections, BMS protection and cooling.
              That is why a supplier saying “280 Ah LFP cell” is not enough information
              to approve a traction pack. You still need discharge capability, thermal
              limits, cycle data, dimensions, weight, terminal design and traceability.
            </p>

            <div className="lfp-step-grid">
              <div className="lfp-step-card">
                <span className="lfp-step-number">1</span>
                <h3>Ah</h3>
                <p>
                  Charge capacity. Example: 100 Ah or 280 Ah is a cell rating, not the
                  same thing as the final pack's usable kWh.
                </p>
              </div>

              <div className="lfp-step-card">
                <span className="lfp-step-number">2</span>
                <h3>kWh</h3>
                <p>
                  Energy stored by the pack. This is the figure that connects most
                  directly to vehicle range and charging energy.
                </p>
              </div>

              <div className="lfp-step-card">
                <span className="lfp-step-number">3</span>
                <h3>C-rate</h3>
                <p>
                  Charge/discharge rate relative to rated capacity. Always interpret it
                  together with test temperature, SOC window and the manufacturer's test method.
                </p>
              </div>

              <div className="lfp-step-card">
                <span className="lfp-step-number">4</span>
                <h3>Peak versus continuous current</h3>
                <p>
                  A vehicle may need a short high-power burst while climbing, starting
                  or accelerating, but continuous operation creates a different thermal
                  load.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lfp-section">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">Step 6</p>
            <h2>BMS is not an accessory — it is part of the traction battery system</h2>
          </div>

          <div className="lfp-prose">
            <p>
              New entrants sometimes focus on the cells first and treat the BMS as a
              later purchase. For a traction pack, that approach can create rework. The
              BMS has to fit the cell count, sensing architecture, current path,
              temperature sensors, charger strategy and vehicle communication.
            </p>

            <p>
              Depending on the design, a traction BMS can monitor individual cell
              voltages, pack current, temperatures, balancing status, SOC, SOH,
              protection faults and communication signals. India's traction-battery
              requirements also place emphasis on traceability and BMS-related safety
              architecture in the applicable vehicle category standards. A 2022
              amendment to AIS-156, for example, specifies additional safety and
              traceability provisions for L-category traction battery systems.
            </p>
          </div>
        </div>
      </section>

      <section className="lfp-section alt">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">Step 7</p>
            <h2>Match the LFP specification to the EV application</h2>
          </div>

          <div className="lfp-comparison">
            <div className="lfp-compare-card">
              <h3>For compact urban mobility</h3>
              <ul>
                <li>Focus on repeated stop-start duty and frequent charging.</li>
                <li>Weight, packaging and thermal behaviour can matter more than headline energy density.</li>
                <li>Make sure the BMS and charger are matched to the actual series count.</li>
              </ul>
            </div>

            <div className="lfp-compare-card">
              <h3>For passenger cars</h3>
              <ul>
                <li>Pack energy, high-voltage architecture and crash protection become central.</li>
                <li>Cooling strategy and high-power charge/discharge behaviour need system-level validation.</li>
                <li>Vehicle category determines the applicable approval route.</li>
              </ul>
            </div>

            <div className="lfp-compare-card">
              <h3>For buses and commercial fleets</h3>
              <ul>
                <li>Duty cycle and daily kilometres become critical sizing inputs.</li>
                <li>Thermal control, cycle life and serviceability can materially affect operating cost.</li>
                <li>Traceability and fleet-level battery history become increasingly valuable.</li>
              </ul>
            </div>

            <div className="lfp-compare-card">
              <h3>For battery assembly businesses</h3>
              <ul>
                <li>Do not buy cells first and “find compliance later.”</li>
                <li>Freeze the BOM, BMS, charger and pack architecture early.</li>
                <li>Map product testing, vehicle approval and Battery EPR as separate workstreams.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="lfp-section blue">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">Step 8</p>
            <h2>What changes when you restart an old business in the EV battery sector?</h2>
            <p>
              A restart is rarely just “renew the certificate.” The product may have
              changed, the rules may have changed, and the portal records may no longer
              match the current business model.
            </p>
          </div>

          <div className="lfp-pain-grid">
            <div className="lfp-pain-card">
              <h3>1. The old documents may not match the new product</h3>
              <p>
                A business may return with an old company profile, old product description,
                old supplier data or old test reports while planning a new LFP pack.
              </p>
            </div>

            <div className="lfp-pain-card">
              <h3>2. The owner may not know which approval comes first</h3>
              <p>
                Testing, type approval, plant permissions, battery EPR and product
                registration can look like one large task until they are separated into
                clear workstreams.
              </p>
            </div>

            <div className="lfp-pain-card">
              <h3>3. Supplier documents may be incomplete</h3>
              <p>
                Cell datasheets alone may not provide the complete evidence required for
                a traction pack: traceability, test reports, BMS data, configuration,
                manufacturing records and supporting declarations may still be needed.
              </p>
            </div>

            <div className="lfp-pain-card">
              <h3>4. Waiting between disconnected activities burns money</h3>
              <p>
                When each consultant handles only one piece of the process, the client
                may spend weeks coordinating documents, labs, portals and responses.
                A restart plan should minimise avoidable hand-offs.
              </p>
            </div>

            <div className="lfp-pain-card">
              <h3>5. The EPR obligation can be overlooked</h3>
              <p>
                The Battery Waste Management Rules, 2022 cover EV batteries, and the CPCB
                maintains a dedicated EPR portal for producers, recyclers and refurbishers.
              </p>
            </div>

            <div className="lfp-pain-card">
              <h3>6. Regulations continue to evolve</h3>
              <p>
                India's Battery Waste Management Rules have been amended after 2022.
                For example, the 2025 amendment introduced options around displaying the
                EPR registration number through a barcode or QR code and clarified marking
                thresholds for cadmium and lead.
              </p>
            </div>
          </div>

          <div className="lfp-compliance-strip">
            <div className="lfp-strip-item">
              <strong>Product mapping</strong>
              <span>Chemistry + cell + pack</span>
            </div>
            <div className="lfp-strip-item">
              <strong>Approval mapping</strong>
              <span>Vehicle category + tests</span>
            </div>
            <div className="lfp-strip-item">
              <strong>EPR mapping</strong>
              <span>Producer + battery waste</span>
            </div>
            <div className="lfp-strip-item">
              <strong>Documentation</strong>
              <span>Traceability + submissions</span>
            </div>
          </div>
        </div>
      </section>

      <section className="lfp-section">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">Step 9</p>
            <h2>How EPR Nexuss can help restart an EV battery business</h2>
            <p>
              The objective is to turn a confusing restart into a sequence of decisions,
              documents and submissions.
            </p>
          </div>

          <div className="lfp-service-grid">
            <div className="lfp-service-card">
              <h3>Start with a gap assessment</h3>
              <p>
                EPR Nexuss can review the current business model, product, old approvals,
                test documents and registration status before recommending fresh work.
                This helps avoid repeating work that is still valid and identify work
                that is no longer sufficient.
              </p>
            </div>

            <div className="lfp-service-card">
              <h3>Freeze the product specification</h3>
              <p>
                Instead of beginning from a generic “LFP battery,” the project can be
                defined by cell format, nominal voltage, series/parallel arrangement,
                Ah, kWh, BMS, enclosure, cooling and intended vehicle category.
              </p>
            </div>

            <div className="lfp-service-card">
              <h3>Build a compliance roadmap</h3>
              <p>
                The roadmap can separate vehicle type approval, battery safety testing,
                manufacturing documentation, pollution-control requirements where
                applicable, and Battery EPR so the client knows what happens, why it
                happens and what evidence is needed.
              </p>
            </div>

            <div className="lfp-service-card">
              <h3>Coordinate registrations and submissions</h3>
              <p>
                The practical value is not just form filling. A coordinated checklist
                helps keep company details, product descriptions, quantities, test
                reports and declarations consistent across the relevant submission chain.
              </p>
            </div>

            <div className="lfp-service-card">
              <h3>Keep the client moving instead of waiting blindly</h3>
              <p>
                Where a fragmented process can create long gaps between activities, EPR
                Nexuss can structure the work in parallel wherever the rules and evidence
                allow it — preparing documents while testing is scheduled and closing
                submission gaps as they appear.
              </p>
            </div>

            <div className="lfp-service-card">
              <h3>Connect compliance with the business plan</h3>
              <p>
                A restart should end with a usable operating model, not a certificate
                folder. The compliance roadmap should make sense alongside the product,
                supplier chain, production plan, sales channel and end-of-life battery
                responsibility.
              </p>
            </div>
          </div>

          <div className="lfp-callout" style={{ marginTop: 30 }}>
            <strong>What makes the approach practical</strong>
            <p>
              The aim is to reduce the “one document, then wait” pattern. A client should
              be able to see the next action, the dependency, the document required and
              the responsible party at every stage of the restart.
            </p>
          </div>
        </div>
      </section>

      <section className="lfp-section alt">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">Step 10</p>
            <h2>How EV battery compliance and registration should be planned in India</h2>
          </div>

          <div className="lfp-step-list">
            <div className="lfp-roadmap">
              <div className="lfp-roadmap-num">1</div>
              <div>
                <h3>Define the exact role</h3>
                <p>
                  Manufacturer, assembler, importer, producer, recycler or refurbisher
                  can create different obligations. Start by identifying what the
                  business actually does with the battery.
                </p>
              </div>
            </div>

            <div className="lfp-roadmap">
              <div className="lfp-roadmap-num">2</div>
              <div>
                <h3>Define the vehicle category and product</h3>
                <p>
                  L-category and M/N-category vehicles do not follow one identical
                  technical route. MoRTH states that AIS-156 covers L-category electric
                  power-train vehicles, while AIS-038 (Rev. 2) addresses M and N category
                  electric power-train vehicles.
                </p>
              </div>
            </div>

            <div className="lfp-roadmap">
              <div className="lfp-roadmap-num">3</div>
              <div>
                <h3>Lock the battery specification</h3>
                <p>
                  Confirm cell make/model, format, nominal voltage, Ah, series/parallel
                  count, BMS, cooling, enclosure, charger and communication interface
                  before starting major compliance work.
                </p>
              </div>
            </div>

            <div className="lfp-roadmap">
              <div className="lfp-roadmap-num">4</div>
              <div>
                <h3>Build the technical evidence package</h3>
                <p>
                  Collect cell documentation, test reports, drawings, BOM, BMS details,
                  traceability information, manufacturing records and other evidence
                  needed for the applicable route. AIS-038 Rev. 2 Amendment 2 explicitly
                  states that cells used for M/N-category traction battery packs shall be
                  certified to IS 16893 Parts 2 and 3 by a NABL-accredited laboratory.
                </p>
              </div>
            </div>

            <div className="lfp-roadmap">
              <div className="lfp-roadmap-num">5</div>
              <div>
                <h3>Plan vehicle / traction-battery testing</h3>
                <p>
                  Use the applicable AIS requirements and notified testing/type-approval
                  route. Battery chemistry alone does not replace vehicle-level
                  compliance.
                </p>
              </div>
            </div>

            <div className="lfp-roadmap">
              <div className="lfp-roadmap-num">6</div>
              <div>
                <h3>Plan Battery EPR separately</h3>
                <p>
                  Battery Waste Management Rules, 2022 establish the EPR framework for
                  battery producers and a central online registration/reporting system.
                  CPCB operates the EPR Battery portal for producers, recyclers and
                  refurbishers.
                </p>
              </div>
            </div>

            <div className="lfp-roadmap">
              <div className="lfp-roadmap-num">7</div>
              <div>
                <h3>Keep labels and records aligned</h3>
                <p>
                  The 2025 Battery Waste Management amendment introduced provisions for
                  displaying the EPR registration number through a barcode or QR code and
                  changed certain marking requirements.
                </p>
              </div>
            </div>

            <div className="lfp-roadmap">
              <div className="lfp-roadmap-num">8</div>
              <div>
                <h3>Plan for post-sale and end-of-life responsibility</h3>
                <p>
                  A battery business should think beyond manufacturing: documentation,
                  waste-battery channels, recycler/refurbisher relationships and EPR
                  reporting all become part of the lifecycle.
                </p>
              </div>
            </div>
          </div>

          <div className="lfp-callout" style={{ marginTop: 30 }}>
            <strong>Important distinction</strong>
            <p>
              EV type approval and Battery EPR are not the same registration. One is
              linked to the road-vehicle regulatory framework; the other addresses the
              battery's waste-management responsibility under environmental rules.
            </p>
          </div>
        </div>
      </section>

      <section className="lfp-section">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">Step 11</p>
            <h2>Real-world battery data: what a new business should learn from the market</h2>
          </div>

          <div className="lfp-prose">
            <p>
              The market data tells a simple story: LFP is no longer a fringe chemistry.
              In 2025 it represented more than half of global EV battery deployment, while
              prismatic cells represented more than 60% of global EV and stationary-storage
              battery use.
            </p>

            <p>
              But market share does not mean one universal LFP design. The same chemistry
              still has to be engineered around a vehicle's voltage window, torque demand,
              charge profile, cooling strategy, packaging constraints, safety system,
              software and regulatory category.
            </p>

            <p>
              This is exactly where restart projects can lose time: the business owner
              sees a large and growing LFP market and assumes that buying a popular cell
              plus a generic BMS is enough. The compliance path begins much earlier, with
              the exact product definition.
            </p>

            <div className="lfp-callout">
              <strong>Regulatory data is also becoming more operational</strong>
              <p>
                MoEF's 2025 annual report states that, by the end of December 2025,
                approximately 4,100 producers and 490 recyclers were registered on the
                battery EPR portal, with around 64.37 lakh tonnes of battery waste
                recycled. The figures cover the battery-waste system overall, not EV
                batteries alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lfp-section alt">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">Step 12</p>
            <h2>A practical restart checklist for a new EV-battery entrant</h2>
          </div>

          <div className="lfp-step-grid">
            <div className="lfp-step-card">
              <h3>Business</h3>
              <p>Define whether you are manufacturing, assembling, importing, branding, refurbishing or recycling.</p>
            </div>
            <div className="lfp-step-card">
              <h3>Product</h3>
              <p>Freeze cell format, chemistry, series/parallel configuration, voltage, Ah, kWh, current and BMS.</p>
            </div>
            <div className="lfp-step-card">
              <h3>Technical</h3>
              <p>Prepare BOM, drawings, cell documents, BMS data, thermal strategy, traceability and test evidence.</p>
            </div>
            <div className="lfp-step-card">
              <h3>Vehicle</h3>
              <p>Identify the applicable L / M / N category and the current AIS approval route.</p>
            </div>
            <div className="lfp-step-card">
              <h3>Environmental</h3>
              <p>Map Battery EPR, portal registration and end-of-life responsibilities under the current rules.</p>
            </div>
            <div className="lfp-step-card">
              <h3>Commercial</h3>
              <p>Compare supplier lead times, testing cost, compliance dependencies and launch dates before committing capital.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lfp-section">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">FAQs</p>
            <h2>Frequently Asked Questions about LFP EV Batteries</h2>
            <p>
              The questions below cover the points that usually create confusion for
              first-time EV battery entrants and restarting businesses.
            </p>
          </div>

          <div className="lfp-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div className="lfp-faq" key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="lfp-faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>

                  {isOpen && (
                    <div className="lfp-faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lfp-section alt">
        <div className="lfp-wrap">
          <div className="lfp-heading">
            <p className="lfp-kicker">References</p>
            <h2>Sources used for this article</h2>
          </div>

          <div className="lfp-source-box">
            <h3>Market and technical reading</h3>
            <p>
              IEA, Global EV Outlook 2026 — Electric vehicle batteries:
              <a
                href="https://www.iea.org/reports/global-ev-outlook-2026/electric-vehicle-batteries"
                target="_blank"
                rel="noreferrer"
              >
                {" "}View source
              </a>
            </p>

            <p>
              IEA, Global EV Outlook 2025 — Electric vehicle batteries:
              <a
                href="https://www.iea.org/reports/global-ev-outlook-2025/electric-vehicle-batteries"
                target="_blank"
                rel="noreferrer"
              >
                {" "}View source
              </a>
            </p>

            <p>
              MG Motor India — Types of Batteries Used in Electric Vehicles:
              <a
                href="https://www.mgmotor.co.in/blogs/types-of-ev-batteries"
                target="_blank"
                rel="noreferrer"
              >
                {" "}View source
              </a>
            </p>

            <p>
              Enterclimate — Electric Vehicles Battery Types Used in India:
              <a
                href="https://enterclimate.com/blog/electric-vehicles-battery-types-used-in-india/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}View source
              </a>
            </p>

            <p>
              ChargeLab — Lithium Iron Phosphate Batteries:
              <a
                href="https://chargelab.co/blog/lithium-iron-phosphate-batteries"
                target="_blank"
                rel="noreferrer"
              >
                {" "}View source
              </a>
            </p>

            <p>
              EVs UAE — LFP Battery Explained:
              <a
                href="https://evsuae.com/blog/lfp-battery-explained"
                target="_blank"
                rel="noreferrer"
              >
                {" "}View source
              </a>
            </p>

            <h3 style={{ marginTop: 24 }}>India compliance and regulatory sources</h3>

            <p>
              ARAI — AIS-156: Specific Requirements for L Category Electric Power Train Vehicles:
              <a
                href="https://hmr.araiindia.com/api/AISFiles/AIS-156_F_d27c559e-8a1a-407b-a992-0dbf5564c4f3.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {" "}View standard
              </a>
            </p>

            <p>
              MoRTH — AIS-038 (Rev. 2) Amendment 2, including technical requirements
              for traction batteries of M and N category electric power-train vehicles:
              <a
                href="https://www.morth.gov.in/sites/default/files/ASI/AIS%20038%20%28Rev2%29_Amend%202.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {" "}View amendment
              </a>
            </p>

            <p>
              CPCB — EPR Battery Portal:
              <a
                href="https://eprbattery.cpcb.gov.in/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}Open portal
              </a>
            </p>

            <p>
              MoEFCC — Battery Waste Management Rules, 2022:
              <a
                href="https://moef.gov.in/uploads/pdf-uploads/pdf_676567459cdfe9.16099796.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {" "}View notification
              </a>
            </p>

            <p>
              MoEFCC / CPCB — Battery Waste Management Amendment Rules, 2025:
              <a
                href="https://cpcb.nic.in/uploads/hwmd/Battery-WasteManagementRules-2025.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {" "}View amendment
              </a>
            </p>

            <p className="lfp-disclaimer">
              This article is written for educational and business-planning purposes.
              Regulatory applicability can vary with the exact product, vehicle category,
              business role, plant/process and current notifications. Final submissions
              should be checked against the latest applicable government requirements
              and test-agency instructions.
            </p>
          </div>

          <div className="lfp-cta">
            <div>
              <h2>Restart your LFP / EV battery project with a compliance roadmap.</h2>
              <p>
                Define the product, map the approvals, prepare the evidence and plan the
                registration sequence before you commit more time and money.
              </p>
            </div>

            <a href="#lfp-contact">Speak to EPR Nexuss</a>
          </div>
        </div>
      </section>
    </article>
  );
}
