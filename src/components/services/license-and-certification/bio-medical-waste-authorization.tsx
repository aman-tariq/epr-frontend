import StickyContactForm from "@/components/StickyContactForm";
import React, { useState, useEffect } from "react";

export default function BiomedicalWasteGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const bars = document.querySelectorAll<HTMLElement>(".bar-element");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (target.dataset.width) {
              target.style.width = target.dataset.width;
            }
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.25 },
    );
    bars.forEach((b) => observer.observe(b));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full md:mt-[130px] m-0 p-0  font-sans text-[#17324d] bg-[#f7fbfd] leading-relaxed min-h-screen">
      <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        <div>
          {/* Hero Section */}
          <header className="hero relative overflow-hidden min-h-[560px] flex items-center bg-gradient-to-br from-[#eafaf4] via-[#f6fcff] to-[#eaf5ff] w-full m-0 p-0">
            {/* Background Decorative Circles */}
            <div className="absolute w-[430px] h-[430px] bg-[#bfeeda] rounded-full blur-[2px] opacity-65 -right-[110px] -top-[160px] pointer-events-none" />
            <div className="absolute w-[330px] h-[330px] bg-[#c6e7ff] rounded-full blur-[2px] opacity-65 -left-[130px] -bottom-[180px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center py-14 lg:py-[75px] px-4 md:px-8 w-full m-0">
              <div>
                <h1 className="text-[2.3rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] leading-[1.05] my-[18px] tracking-[-2px] font-extrabold text-[#17324d]">
                  Bio-Medical Waste{" "}
                  <span className="bg-gradient-to-r from-[#0f7d55] to-[#1677c8] bg-clip-text text-transparent">
                    Authorization
                  </span>
                </h1>
                <p className="text-[1.12rem] max-w-[760px] text-[#4d6477]">
                  A simple, practical compliance guide for healthcare facilities
                  and other establishments that generate or handle bio-medical
                  waste in India. Understand the authorization journey,
                  documents, application steps, segregation, records and ongoing
                  compliance.
                </p>
                <div className="flex gap-3 flex-wrap mt-[28px]">
                  <a
                    className="inline-flex items-center justify-center px border border-transparent rounded-[12px] font-extrabold bg-gradient-to-r from-[#159a68] to-[#1677c8] text-white px-4 py-3"
                    href="#process"
                  >
                    Explore the Process →
                  </a>
                  <a
                    className="inline-flex items-center justify-center border border-[#cfe0ea] rounded-[12px] font-extrabold bg-white text-[#17324d] px-4 py-3"
                    href="#checklist"
                  >
                    View Checklist
                  </a>
                </div>
                <div className="mt-[18px] flex flex-wrap gap-1">
                  <span className="inline-block px-[10px] py-[6px] bg-[#eef8f5] text-[#0f7d55] rounded-full text-[0.78rem] font-extrabold m-[4px]">
                    BMWM Rules, 2016
                  </span>
                  <span className="inline-block px-[10px] py-[6px] bg-[#eef8f5] text-[#0f7d55] rounded-full text-[0.78rem] font-extrabold m-[4px]">
                    SPCB / PCC
                  </span>
                  <span className="inline-block px-[10px] py-[6px] bg-[#eef8f5] text-[#0f7d55] rounded-full text-[0.78rem] font-extrabold m-[4px]">
                    Safe Waste Handling
                  </span>
                </div>
              </div>
              <div className="bg-white/86 border border-[#d7eaf3] rounded-[26px] p-7 shadow-[0_12px_35px_rgba(22,83,115,0.10)]">
                <div className="grid grid-cols-2 gap-[14px]">
                  <div className="bg-gradient-to-br from-white to-[#f1fbff] border border-[#dcecf3] rounded-[18px] p-[20px] text-center">
                    <div className="text-[2.6rem]">🏥</div>
                    <strong className="block mt-[6px]">Healthcare</strong>
                    <small className="text-[#60758a]">
                      Hospitals & clinics
                    </small>
                  </div>
                  <div className="bg-gradient-to-br from-white to-[#f1fbff] border border-[#dcecf3] rounded-[18px] p-[20px] text-center">
                    <div className="text-[2.6rem]">🧪</div>
                    <strong className="block mt-[6px]">Diagnostics</strong>
                    <small className="text-[#60758a]">Labs & testing</small>
                  </div>
                  <div className="bg-gradient-to-br from-white to-[#f1fbff] border border-[#dcecf3] rounded-[18px] p-[20px] text-center">
                    <div className="text-[2.6rem]">♻️</div>
                    <strong className="block mt-[6px]">Segregation</strong>
                    <small className="text-[#60758a]">Separate at source</small>
                  </div>
                  <div className="bg-gradient-to-br from-white to-[#f1fbff] border border-[#dcecf3] rounded-[18px] p-[20px] text-center">
                    <div className="text-[2.6rem]">📋</div>
                    <strong className="block mt-[6px]">Authorization</strong>
                    <small className="text-[#60758a]">
                      Regulatory permission
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Section 01: Overview */}
          <section
            className="py-[50px] md:py-[70px] px-4 md:px-8 w-full m-0"
            id="overview"
          >
            <div className="max-w-[900px] mb-[35px]">
              <div className="text-[0.78rem] uppercase tracking-[1.8px] text-[#1677c8] font-black">
                01 • Basics
              </div>
              <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.15] my-[8px] font-bold">
                What is Bio-Medical Waste Authorization?
              </h2>
              <p className="text-[#60758a] text-[1.02rem]">
                Bio-Medical Waste Authorization is the regulatory permission
                required for covered establishments handling bio-medical waste.
                Under the Bio-Medical Waste Management Rules, 2016, the
                prescribed authority is generally the State Pollution Control
                Board (SPCB) or Pollution Control Committee (PCC), depending on
                the State/UT.
              </p>
            </div>
            <div className="border-l-[5px] border-l-[#159a68] bg-[#eafaf3] p-[18px_20px] rounded-[12px] my-[20px]">
              <strong>In simple words:</strong> if your healthcare activity
              generates or handles bio-medical waste, authorization helps the
              regulator verify that the waste will be segregated, stored,
              transported, treated and disposed of in an environmentally sound
              manner.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🛡️
                </div>
                <h3 className="text-xl font-bold mb-2">Protects Health</h3>
                <p className="text-[#60758a] mb-0">
                  Proper handling reduces exposure risks for workers, patients,
                  waste handlers and the community.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🌱
                </div>
                <h3 className="text-xl font-bold mb-2">Protects Environment</h3>
                <p className="text-[#60758a] mb-0">
                  Controlled treatment and disposal help prevent contamination
                  and unsafe release of waste.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  📑
                </div>
                <h3 className="text-xl font-bold mb-2">Supports Compliance</h3>
                <p className="text-[#60758a] mb-0">
                  Authorization creates a formal regulatory framework for waste
                  management activities.
                </p>
              </div>
            </div>
          </section>

          {/* Section 02: Applicability */}
          <section
            className="py-[50px] md:py-[70px] px-4 md:px-8 w-full m-0 bg-white"
            id="applicability"
          >
            <div className="max-w-[900px] mb-[35px]">
              <div className="text-[0.78rem] uppercase tracking-[1.8px] text-[#1677c8] font-black">
                02 • Applicability
              </div>
              <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.15] my-[8px] font-bold">
                Who May Need Bio-Medical Waste Authorization?
              </h2>
              <p className="text-[#60758a] text-[1.02rem]">
                The exact applicability depends on the activity and the rules
                applicable to the establishment.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🏥
                </div>
                <h3 className="text-xl font-bold mb-2">Hospitals</h3>
                <p className="text-[#60758a] mb-0">
                  Government or private healthcare facilities handling
                  bio-medical waste.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🩺
                </div>
                <h3 className="text-xl font-bold mb-2">Clinics</h3>
                <p className="text-[#60758a] mb-0">
                  Clinics and other healthcare establishments that generate
                  regulated waste.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🔬
                </div>
                <h3 className="text-xl font-bold mb-2">Laboratories</h3>
                <p className="text-[#60758a] mb-0">
                  Diagnostic, pathological and research-related healthcare
                  facilities.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🚑
                </div>
                <h3 className="text-xl font-bold mb-2">Other HCFs</h3>
                <p className="text-[#60758a] mb-0">
                  Dental, veterinary, blood-related and other covered healthcare
                  activities.
                </p>
              </div>
            </div>
            <div className="border-l-[5px] border-l-[#e3a52d] bg-[#fff8e7] p-[18px_20px] rounded-[12px] my-[20px]">
              <strong>Important:</strong> Authorization requirements can vary by
              State/UT and facility type. Always verify the latest application
              requirements of the relevant SPCB/PCC before filing.
            </div>
          </section>

          {/* Section 03: Rules */}
          <section
            className="py-[50px] md:py-[70px] px-4 md:px-8 w-full m-0"
            id="rules"
          >
            <div className="max-w-[900px] mb-[35px]">
              <div className="text-[0.78rem] uppercase tracking-[1.8px] text-[#1677c8] font-black">
                03 • Legal Framework
              </div>
              <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.15] my-[8px] font-bold">
                Rules and Regulatory Framework
              </h2>
              <p className="text-[#60758a] text-[1.02rem]">
                The principal framework is the Bio-Medical Waste Management
                Rules, 2016, notified under the Environment (Protection) Act,
                1986, along with applicable amendments, CPCB guidance and
                directions issued by the relevant pollution-control authority.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  ⚖️
                </div>
                <h3 className="text-xl font-bold mb-2">BMWM Rules, 2016</h3>
                <p className="text-[#60758a] mb-0">
                  Sets requirements for segregation, handling, treatment,
                  disposal, responsibilities and authorization.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🏛️
                </div>
                <h3 className="text-xl font-bold mb-2">SPCB / PCC</h3>
                <p className="text-[#60758a] mb-0">
                  Acts as the prescribed authority for implementation in the
                  respective State or Union Territory, subject to the applicable
                  framework.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  📘
                </div>
                <h3 className="text-xl font-bold mb-2">CPCB Guidance</h3>
                <p className="text-[#60758a] mb-0">
                  Technical guidance supports practical implementation,
                  monitoring and environmentally sound management.
                </p>
              </div>
            </div>
          </section>

          {/* Section 04: Categories */}
          <section
            className="py-[50px] md:py-[70px] px-4 md:px-8 w-full m-0 bg-white"
            id="categories"
          >
            <div className="max-w-[900px] mb-[35px]">
              <div className="text-[0.78rem] uppercase tracking-[1.8px] text-[#1677c8] font-black">
                04 • Waste Segregation
              </div>
              <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.15] my-[8px] font-bold">
                Understand the Four Colour-Coded Waste Streams
              </h2>
              <p className="text-[#60758a] text-[1.02rem]">
                Correct segregation at the point of generation is one of the
                most important parts of bio-medical waste management.
              </p>
            </div>
            <div className="overflow-x-auto border border-[#dce9f2] rounded-[16px] bg-white shadow-[0_12px_35px_rgba(22,83,115,0.10)]">
              <table className="w-full border-collapse min-w-[720px] text-left">
                <thead>
                  <tr className="bg-[#eef8fc] text-[#164b6d]">
                    <th className="p-[15px_17px] border-b border-[#e7eff4] font-bold">
                      Colour Category
                    </th>
                    <th className="p-[15px_17px] border-b border-[#e7eff4] font-bold">
                      Typical Waste Examples
                    </th>
                    <th className="p-[15px_17px] border-b border-[#e7eff4] font-bold">
                      Basic Handling Idea
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-[15px_17px] border-b border-[#e7eff4]">
                      <strong>Yellow</strong>
                    </td>
                    <td className="p-[15px_17px] border-b border-[#e7eff4]">
                      Human/animal anatomical waste, soiled waste,
                      expired/discarded medicines and specified chemical waste.
                    </td>
                    <td className="p-[15px_17px] border-b border-[#e7eff4]">
                      Collect separately and send through the prescribed
                      treatment/disposal route.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-[15px_17px] border-b border-[#e7eff4]">
                      <strong>Red</strong>
                    </td>
                    <td className="p-[15px_17px] border-b border-[#e7eff4]">
                      Contaminated recyclable plastic items such as tubing,
                      bottles and gloves where applicable.
                    </td>
                    <td className="p-[15px_17px] border-b border-[#e7eff4]">
                      Segregate at source and send for authorized
                      treatment/recycling route.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-[15px_17px] border-b border-[#e7eff4]">
                      <strong>White (Translucent)</strong>
                    </td>
                    <td className="p-[15px_17px] border-b border-[#e7eff4]">
                      Sharps including needles, syringes with fixed needles and
                      other specified sharps.
                    </td>
                    <td className="p-[15px_17px] border-b border-[#e7eff4]">
                      Use puncture-proof, leak-proof and tamper-proof
                      containers.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-[15px_17px] border-b-0">
                      <strong>Blue</strong>
                    </td>
                    <td className="p-[15px_17px] border-b-0">
                      Glassware and specified metallic implants.
                    </td>
                    <td className="p-[15px_17px] border-b-0">
                      Use the prescribed blue container/bag and treatment route.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[0.88rem] text-[#688092] mt-3">
              Always follow the latest applicable BMWM Rules, CPCB guidance and
              instructions of the local pollution-control authority for exact
              category handling.
            </p>
          </section>

          {/* Section 05: Process */}
          <section
            className="py-[50px] md:py-[70px] px-4 md:px-8 w-full m-0"
            id="process"
          >
            <div className="max-w-[900px] mb-[35px]">
              <div className="text-[0.78rem] uppercase tracking-[1.8px] text-[#1677c8] font-black">
                05 • Application Journey
              </div>
              <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.15] my-[8px] font-bold">
                Bio-Medical Waste Authorization Process
              </h2>
              <p className="text-[#60758a] text-[1.02rem]">
                A practical high-level flow is shown below. Portal steps and
                supporting documents may differ by State/UT.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[14px]">
              <div className="relative bg-white border border-[#dce9f2] rounded-[18px] p-[22px_16px]">
                <div className="w-[36px] h-[36px] rounded-full grid place-items-center bg-gradient-to-br from-[#159a68] to-[#1677c8] text-white font-black mb-[12px]">
                  1
                </div>
                <h3 className="font-bold mb-1">Identify Applicability</h3>
                <p className="text-[#60758a] text-sm mb-0">
                  Confirm whether your facility is covered and identify the
                  prescribed authority.
                </p>
              </div>
              <div className="relative bg-white border border-[#dce9f2] rounded-[18px] p-[22px_16px]">
                <div className="w-[36px] h-[36px] rounded-full grid place-items-center bg-gradient-to-br from-[#159a68] to-[#1677c8] text-white font-black mb-[12px]">
                  2
                </div>
                <h3 className="font-bold mb-1">Prepare Details</h3>
                <p className="text-[#60758a] text-sm mb-0">
                  Collect facility, waste generation, treatment and
                  consent-related information.
                </p>
              </div>
              <div className="relative bg-white border border-[#dce9f2] rounded-[18px] p-[22px_16px]">
                <div className="w-[36px] h-[36px] rounded-full grid place-items-center bg-gradient-to-br from-[#159a68] to-[#1677c8] text-white font-black mb-[12px]">
                  3
                </div>
                <h3 className="font-bold mb-1">Apply</h3>
                <p className="text-[#60758a] text-sm mb-0">
                  Submit the prescribed authorization application, commonly
                  based on Form II under the Rules.
                </p>
              </div>
              <div className="relative bg-white border border-[#dce9f2] rounded-[18px] p-[22px_16px]">
                <div className="w-[36px] h-[36px] rounded-full grid place-items-center bg-gradient-to-br from-[#159a68] to-[#1677c8] text-white font-black mb-[12px]">
                  4
                </div>
                <h3 className="font-bold mb-1">Review</h3>
                <p className="text-[#60758a] text-sm mb-0">
                  The authority may review documents, seek clarification or
                  conduct inspection where applicable.
                </p>
              </div>
              <div className="relative bg-white border border-[#dce9f2] rounded-[18px] p-[22px_16px]">
                <div className="w-[36px] h-[36px] rounded-full grid place-items-center bg-gradient-to-br from-[#159a68] to-[#1677c8] text-white font-black mb-[12px]">
                  5
                </div>
                <h3 className="font-bold mb-1">Maintain Compliance</h3>
                <p className="text-[#60758a] text-sm mb-0">
                  Follow authorization conditions, records, reporting and
                  renewal requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Section 06: Documents */}
          <section
            className="py-[50px] md:py-[70px] px-4 md:px-8 w-full m-0 bg-white"
            id="documents"
          >
            <div className="max-w-[900px] mb-[35px]">
              <div className="text-[0.78rem] uppercase tracking-[1.8px] text-[#1677c8] font-black">
                06 • Documentation
              </div>
              <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.15] my-[8px] font-bold">
                Documents & Information Commonly Required
              </h2>
              <p className="text-[#60758a] text-[1.02rem]">
                Prepare a clean document set before filing to reduce avoidable
                queries and delays.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[13px]">
              <div className="bg-white border border-[#dce9f2] rounded-[13px] p-[14px_16px]">
                ✅ <b className="text-[#0f7d55] mr-[7px]">Facility details</b>{" "}
                Name, address, contact details and responsible person.
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[13px] p-[14px_16px]">
                ✅ <b className="text-[#0f7d55] mr-[7px]">Activity details</b>{" "}
                Nature of healthcare activity and services provided.
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[13px] p-[14px_16px]">
                ✅{" "}
                <b className="text-[#0f7d55] mr-[7px]">Bed / patient details</b>{" "}
                Applicable bed capacity and patient-treatment information.
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[13px] p-[14px_16px]">
                ✅ <b className="text-[#0f7d55] mr-[7px]">Waste details</b>{" "}
                Category-wise quantity of bio-medical waste generated.
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[13px] p-[14px_16px]">
                ✅{" "}
                <b className="text-[#0f7d55] mr-[7px]">Consent information</b>{" "}
                Applicable consent details under Water/Air legislation where
                relevant.
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[13px] p-[14px_16px]">
                ✅ <b className="text-[#0f7d55] mr-[7px]">Treatment details</b>{" "}
                On-site treatment facility or authorized common facility
                arrangements.
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[13px] p-[14px_16px]">
                ✅{" "}
                <b className="text-[#0f7d55] mr-[7px]">
                  Vendor / CBWTF details
                </b>{" "}
                Details of authorized waste collection/treatment arrangements
                where applicable.
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[13px] p-[14px_16px]">
                ✅ <b className="text-[#0f7d55] mr-[7px]">Supporting records</b>{" "}
                Site/layout, photographs, agreements or other documents
                requested by the authority.
              </div>
            </div>
          </section>

          {/* Section 07: Compliance */}
          <section
            className="py-[50px] md:py-[70px] px-4 md:px-8 w-full m-0"
            id="compliance"
          >
            <div className="max-w-[900px] mb-[35px]">
              <div className="text-[0.78rem] uppercase tracking-[1.8px] text-[#1677c8] font-black">
                07 • Ongoing Duties
              </div>
              <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.15] my-[8px] font-bold">
                What Happens After Authorization?
              </h2>
              <p className="text-[#60758a] text-[1.02rem]">
                Authorization is not the end of compliance. The facility must
                continue to manage bio-medical waste safely and maintain
                required records.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🗑️
                </div>
                <h3 className="text-xl font-bold mb-2">Segregate at Source</h3>
                <p className="text-[#60758a] mb-0">
                  Use the prescribed colour-coded system and prevent mixing of
                  incompatible waste streams.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🚚
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Use Authorized Channels
                </h3>
                <p className="text-[#60758a] mb-0">
                  Hand over waste to an appropriate authorized common treatment
                  facility/operator where applicable.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  📊
                </div>
                <h3 className="text-xl font-bold mb-2">Keep Records</h3>
                <p className="text-[#60758a] mb-0">
                  Maintain waste, treatment, training and other compliance
                  records required by the applicable rules and authority.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  👩‍⚕️
                </div>
                <h3 className="text-xl font-bold mb-2">Train Staff</h3>
                <p className="text-[#60758a] mb-0">
                  Healthcare and waste-handling staff should understand
                  segregation, PPE, emergency response and safe handling.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🧤
                </div>
                <h3 className="text-xl font-bold mb-2">Use PPE</h3>
                <p className="text-[#60758a] mb-0">
                  Provide appropriate protective equipment and safe work
                  practices for personnel handling bio-medical waste.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🔍
                </div>
                <h3 className="text-xl font-bold mb-2">Monitor Conditions</h3>
                <p className="text-[#60758a] mb-0">
                  Check whether operations remain aligned with authorization
                  conditions and regulatory requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Section 08: Internal Checklist */}
          <section className="py-[50px] md:py-[70px] px-4 md:px-8 w-full m-0 bg-white">
            <div className="max-w-[900px] mb-[35px]">
              <div className="text-[0.78rem] uppercase tracking-[1.8px] text-[#1677c8] font-black">
                8 • Internal Checklist
              </div>
              <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.15] my-[8px] font-bold">
                Bio-Medical Waste Authorization Readiness Checklist
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Facility</h3>
                <p className="text-[#60758a] mb-0">
                  Address, contact details, activity and responsible person are
                  ready.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Waste</h3>
                <p className="text-[#60758a] mb-0">
                  Waste categories and approximate quantities are identified.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Handling</h3>
                <p className="text-[#60758a] mb-0">
                  Segregation, storage and handover arrangements are defined.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Documents</h3>
                <p className="text-[#60758a] mb-0">
                  Application information and supporting documents are
                  organized.
                </p>
              </div>
            </div>
          </section>

          {/* Section 09: Benefits */}
          <section className="py-[50px] md:py-[70px] px-4 md:px-8 w-full m-0">
            <div className="max-w-[900px] mb-[35px]">
              <div className="text-[0.78rem] uppercase tracking-[1.8px] text-[#1677c8] font-black">
                9 • Benefits
              </div>
              <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.15] my-[8px] font-bold">
                Why Proper Authorization & Waste Management Matters
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px]">
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] relative hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🌿
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Environmental Protection
                </h3>
                <p className="text-[#60758a] mb-0">
                  Supports safe treatment and disposal instead of uncontrolled
                  handling.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] relative hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🧑‍⚕️
                </div>
                <h3 className="text-xl font-bold mb-2">Worker Safety</h3>
                <p className="text-[#60758a] mb-0">
                  Promotes safer segregation, storage and handling practices.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] relative hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  📋
                </div>
                <h3 className="text-xl font-bold mb-2">Regulatory Readiness</h3>
                <p className="text-[#60758a] mb-0">
                  Creates a documented framework for demonstrating compliance.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)] relative hover:-translate-y-1 transition-transform">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🏢
                </div>
                <h3 className="text-xl font-bold mb-2">Better Operations</h3>
                <p className="text-[#60758a] mb-0">
                  Clear responsibilities and waste-flow procedures can improve
                  internal management.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: EPR Nexuss Support */}
          <section
            className="py-[50px] md:py-[70px] px-4 md:px-8 w-full m-0"
            id="epr-nexuss"
          >
            <div className="max-w-[900px] mb-[35px]">
              <div className="text-[0.78rem] uppercase tracking-[1.8px] text-[#1677c8] font-black">
                10• Compliance Support
              </div>
              <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.15] my-[8px] font-bold">
                How EPR Nexuss Can Support Your Compliance Journey
              </h2>
              <p className="text-[#60758a] text-[1.02rem]">
                Regulatory applications can involve multiple documents, facility
                details and state-specific requirements. EPR Nexuss positions
                its services around practical compliance support and sustainable
                waste-management solutions for businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)]">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  📝
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Documentation Support
                </h3>
                <p className="text-[#60758a] mb-0">
                  Organize facility information, waste details and supporting
                  documentation before the application is submitted.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)]">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  🔎
                </div>
                <h3 className="text-xl font-bold mb-2">Compliance Review</h3>
                <p className="text-[#60758a] mb-0">
                  Review the application journey, operational requirements and
                  recurring compliance points so important details are easier to
                  track.
                </p>
              </div>
              <div className="bg-white border border-[#dce9f2] rounded-[18px] p-6 shadow-[0_12px_35px_rgba(22,83,115,0.10)]">
                <div className="w-[48px] h-[48px] rounded-[14px] grid place-items-center bg-gradient-to-br from-[#e5f8ef] to-[#e8f4ff] text-[1.45rem] mb-[14px]">
                  ♻️
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Sustainability Approach
                </h3>
                <p className="text-[#60758a] mb-0">
                  Connect regulatory awareness with responsible waste-management
                  practices and a broader circular-economy mindset.
                </p>
              </div>
            </div>
          </section>

          {/* Section 11: FAQs */}
          <section
            className="py-[50px] md:py-[70px] px-4 md:px-8 w-full m-0"
            id="faq"
          >
            <div className="max-w-[900px] mb-[35px]">
              <div className="text-[0.78rem] uppercase tracking-[1.8px] text-[#1677c8] font-black">
                11 • FAQs
              </div>
              <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.15] my-[8px] font-bold">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-[10px]">
              <div className="border border-[#dce9f2] bg-white rounded-[14px] overflow-hidden">
                <button
                  onClick={() => toggleFaq(1)}
                  className="w-full text-left p-[18px] text-[1rem] font-extrabold text-[#17324d] flex justify-between items-center"
                >
                  What is Bio-Medical Waste Authorization?{" "}
                  <span>{openFaq === 1 ? "−" : "+"}</span>
                </button>
                {openFaq === 1 && (
                  <div className="px-[18px] pb-[18px] text-[#60758a]">
                    It is regulatory permission for covered establishments
                    handling bio-medical waste under the applicable regulatory
                    framework.
                  </div>
                )}
              </div>

              <div className="border border-[#dce9f2] bg-white rounded-[14px] overflow-hidden">
                <button
                  onClick={() => toggleFaq(2)}
                  className="w-full text-left p-[18px] text-[1rem] font-extrabold text-[#17324d] flex justify-between items-center"
                >
                  Who is generally the prescribed authority?{" "}
                  <span>{openFaq === 2 ? "−" : "+"}</span>
                </button>
                {openFaq === 2 && (
                  <div className="px-[18px] pb-[18px] text-[#60758a]">
                    Generally, the State Pollution Control Board or Pollution
                    Control Committee is the prescribed authority for the
                    respective State/UT, subject to the applicable rules.
                  </div>
                )}
              </div>

              <div className="border border-[#dce9f2] bg-white rounded-[14px] overflow-hidden">
                <button
                  onClick={() => toggleFaq(3)}
                  className="w-full text-left p-[18px] text-[1rem] font-extrabold text-[#17324d] flex justify-between items-center"
                >
                  Is authorization required only for large hospitals?{" "}
                  <span>{openFaq === 3 ? "−" : "+"}</span>
                </button>
                {openFaq === 3 && (
                  <div className="px-[18px] pb-[18px] text-[#60758a]">
                    No. The applicable requirements depend on whether the
                    establishment is covered by the Bio-Medical Waste Management
                    Rules and the activity it undertakes. Requirements should be
                    checked with the relevant authority.
                  </div>
                )}
              </div>

              <div className="border border-[#dce9f2] bg-white rounded-[14px] overflow-hidden">
                <button
                  onClick={() => toggleFaq(4)}
                  className="w-full text-left p-[18px] text-[1rem] font-extrabold text-[#17324d] flex justify-between items-center"
                >
                  Which form is used for authorization?{" "}
                  <span>{openFaq === 4 ? "−" : "+"}</span>
                </button>
                {openFaq === 4 && (
                  <div className="px-[18px] pb-[18px] text-[#60758a]">
                    The CPCB implementation guidance identifies Form II as the
                    prescribed application format under the Bio-Medical Waste
                    Management Rules, 2016. State/UT portals may provide the
                    corresponding online workflow.
                  </div>
                )}
              </div>

              <div className="border border-[#dce9f2] bg-white rounded-[14px] overflow-hidden">
                <button
                  onClick={() => toggleFaq(5)}
                  className="w-full text-left p-[18px] text-[1rem] font-extrabold text-[#17324d] flex justify-between items-center"
                >
                  Can a facility send waste to a common treatment facility?{" "}
                  <span>{openFaq === 5 ? "−" : "+"}</span>
                </button>
                {openFaq === 5 && (
                  <div className="px-[18px] pb-[18px] text-[#60758a]">
                    Where applicable, healthcare facilities may use an
                    authorized Common Bio-Medical Waste Treatment Facility
                    (CBWTF), subject to the relevant regulatory requirements and
                    authorization conditions.
                  </div>
                )}
              </div>

              <div className="border border-[#dce9f2] bg-white rounded-[14px] overflow-hidden">
                <button
                  onClick={() => toggleFaq(6)}
                  className="w-full text-left p-[18px] text-[1rem] font-extrabold text-[#17324d] flex justify-between items-center"
                >
                  Does getting authorization end the compliance responsibility?{" "}
                  <span>{openFaq === 6 ? "−" : "+"}</span>
                </button>
                {openFaq === 6 && (
                  <div className="px-[18px] pb-[18px] text-[#60758a]">
                    No. The facility must continue following segregation,
                    handling, treatment/disposal, record keeping, reporting,
                    training and other applicable requirements.
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Section Checklist */}
          <section
            className="py-[50px] md:py-[70px] px-4 md:px-8 w-full m-0 bg-white"
            id="checklist"
          ></section>
        </div>
        <aside className="hidden lg:block shrink-0 w-[320px]">
          <div className="sticky top-28 px-2">
            <StickyContactForm />
          </div>
        </aside>
      </div>
    </div>
  );
}
