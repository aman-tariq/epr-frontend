import StickyContactForm from '@/components/StickyContactForm';
import React, { useState, useEffect } from 'react';

export default function HazardousWasteGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [progressWidth, setProgressWidth] = useState<number>(0);
  const currentYear = new Date().getFullYear();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgressWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen md:mt-[130px] bg-[#F7FBF9] text-[#0E2A21] font-sans m-0 p-0">
        <div className="flex flex-col lg:flex-row gap-2 items-stretch">
            <div>
      {/* HERO */}
      <header className="px-[6vw] pt-[90px] pb-[60px] bg-[radial-gradient(circle_at_15%_20%,_rgba(47,168,118,0.16),_transparent_45%),radial-gradient(circle_at_85%_10%,_rgba(30,146,204,0.16),_transparent_45%)] bg-[#F7FBF9] flex flex-wrap items-center gap-[48px] w-full">
        <div className="flex-1 basis-[480px]">
          <div className="inline-flex items-center gap-2 font-mono text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#0B5A8C] bg-[#BFE3F5] px-3 py-[6px] rounded-[20px] mb-[18px]">
            <span className="w-[7px] h-[7px] rounded-full bg-[#0F6E4F]" /> Environmental Compliance, Simplified
          </div>
          <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] font-bold text-[#0E2A21] mb-5">
            Hazardous Waste <span className="bg-gradient-to-r from-[#0F6E4F] to-[#0B5A8C] bg-clip-text text-transparent">Authorization</span>
          </h1>
          <p className="text-[1.08rem] leading-[1.65] text-[#3C5850] max-w-[56ch] mb-[28px]">
            Manage hazardous waste responsibly through compliant handling, storage, transportation, and disposal authorizations. This guide breaks down what that really means, who needs it, how the approval process works, and why it matters — for factory owners, recyclers, transporters, and anyone curious about how hazardous waste is legally managed.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a href="#what-is" className="font-semibold text-[0.95rem] px-[24px] py-[13px] rounded-[10px] bg-[#0F6E4F] text-white shadow-[0_10px_30px_rgba(11,90,140,0.10)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,110,79,0.25)] transition-all flex items-center gap-2">
              Start Reading ↓
            </a>
            <a href="#process" className="font-semibold text-[0.95rem] px-[24px] py-[13px] rounded-[10px] bg-transparent text-[#0B5A8C] border-[1.5px] border-[#1E92CC] hover:bg-[#BFE3F5] transition-all flex items-center gap-2">
              Jump to the Process
            </a>
          </div>
        </div>
        <div className="flex-1 basis-[340px] flex justify-center">
          <div className="relative w-[280px] h-[280px]">
            <div className="absolute w-[180px] h-[180px] rounded-[20px] flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(11,90,140,0.10)] text-white font-mono rotate-45 bg-gradient-to-br from-[#2FA876] to-[#0F6E4F] top-0 left-[20px] z-[2]">
              <div className="rotate-[-45deg] text-center">
                <div className="text-[2rem] font-bold">HW</div>
                <div className="text-[0.62rem] tracking-[0.06em] uppercase mt-[2px]">Authorized</div>
              </div>
            </div>
            <div className="absolute w-[180px] h-[180px] rounded-[20px] flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(11,90,140,0.10)] text-white font-mono rotate-45 bg-gradient-to-br from-[#1E92CC] to-[#0B5A8C] top-[60px] left-[80px] z-[1] opacity-85">
              <div className="rotate-[-45deg] text-center">
                <div className="text-[2rem] font-bold">✓</div>
                <div className="text-[0.62rem] tracking-[0.06em] uppercase mt-[2px]">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PILLARS STRIP */}
      <section className="w-full px-[6vw] pb-[72px] pt-0 bg-[#F7FBF9]">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="grid gap-[18px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] -mt-6">
            <div className="bg-white rounded-[14px] p-[22px_24px] border-l-[5px] border-l-[#0F6E4F] shadow-[0_6px_20px_rgba(11,90,140,0.09)]">
              <span className="inline-block font-mono text-[0.75rem] font-bold text-[#0B5A8C] bg-[#BFE3F5] px-[9px] py-[3px] rounded-[6px] mb-2.5">01</span>
              <h3 className="m-0 mb-[6px] text-[1.05rem] font-bold uppercase tracking-[0.01em] text-[#0E2A21]">Handling</h3>
              <p className="m-0 text-[#3C5850] text-[0.9rem] leading-[1.55]">Safe segregation, labeling, and on-site handling that keeps waste from cross-contaminating people or processes.</p>
            </div>
            <div className="bg-white rounded-[14px] p-[22px_24px] border-l-[5px] border-l-[#0B5A8C] shadow-[0_6px_20px_rgba(11,90,140,0.09)]">
              <span className="inline-block font-mono text-[0.75rem] font-bold text-[#0F6E4F] bg-[#BFEBD6] px-[9px] py-[3px] rounded-[6px] mb-2.5">02</span>
              <h3 className="m-0 mb-[6px] text-[1.05rem] font-bold uppercase tracking-[0.01em] text-[#0E2A21]">Storage</h3>
              <p className="m-0 text-[#3C5850] text-[0.9rem] leading-[1.55]">Approved containers, leak-proof flooring, and time-limited holding areas that meet safety norms.</p>
            </div>
            <div className="bg-white rounded-[14px] p-[22px_24px] border-l-[5px] border-l-[#0F6E4F] shadow-[0_6px_20px_rgba(11,90,140,0.09)]">
              <span className="inline-block font-mono text-[0.75rem] font-bold text-[#0B5A8C] bg-[#BFE3F5] px-[9px] py-[3px] rounded-[6px] mb-2.5">03</span>
              <h3 className="m-0 mb-[6px] text-[1.05rem] font-bold uppercase tracking-[0.01em] text-[#0E2A21]">Transportation</h3>
              <p className="m-0 text-[#3C5850] text-[0.9rem] leading-[1.55]">Authorized vehicles, manifests, and routes that keep waste traceable in transit.</p>
            </div>
            <div className="bg-white rounded-[14px] p-[22px_24px] border-l-[5px] border-l-[#0B5A8C] shadow-[0_6px_20px_rgba(11,90,140,0.09)]">
              <span className="inline-block font-mono text-[0.75rem] font-bold text-[#0F6E4F] bg-[#BFEBD6] px-[9px] py-[3px] rounded-[6px] mb-2.5">04</span>
              <h3 className="m-0 mb-[6px] text-[1.05rem] font-bold uppercase tracking-[0.01em] text-[#0E2A21]">Disposal</h3>
              <p className="m-0 text-[#3C5850] text-[0.9rem] leading-[1.55]">Treatment, recycling, or final disposal at facilities equipped to handle it without harming the environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 1. WHAT IS HAZARDOUS WASTE */}
      <section className="w-full px-[6vw] py-[72px] bg-[#F7FBF9]" id="what-is">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-start gap border-none gap-[18px] mb-[36px]">
            <div className="flex-none w-[52px] h-[52px] rounded-[12px] rotate-45 flex items-center justify-center shadow-[0_10px_30px_rgba(11,90,140,0.10)] bg-gradient-to-br from-[#2FA876] to-[#0F6E4F]">
              <div className="-rotate-45 text-white font-mono font-bold text-[1.05rem]">01</div>
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] mt-[2px] mb-[6px] text-[#0E2A21] font-bold">What Counts as Hazardous Waste?</h2>
              <p className="text-[#3C5850] text-[1rem] max-w-[70ch] leading-[1.6] m-0">Before understanding "authorization," it helps to know what it's authorizing. Hazardous waste is any waste that, because of its chemical, physical, or biological properties, poses a risk to human health or the environment if handled, stored, or disposed of carelessly.</p>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <svg className="w-[44px] h-[44px] mb-[14px]" viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="36" height="36" rx="10" fill="#BFEBD6"/><path d="M24 14v14M24 32h.02" stroke="#0F6E4F" strokeWidth="3" strokeLinecap="round"/></svg>
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Chemical &amp; Industrial</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Acids, solvents, spent catalysts, paint sludge, and process residues from manufacturing units.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <svg className="w-[44px] h-[44px] mb-[14px]" viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="36" height="36" rx="10" fill="#BFE3F5"/><path d="M16 32l8-16 8 16H16z" stroke="#0B5A8C" strokeWidth="3" strokeLinejoin="round"/></svg>
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Bio-medical Waste</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Expired drugs, contaminated sharps, and clinical residues from hospitals and labs.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <svg className="w-[44px] h-[44px] mb-[14px]" viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="36" height="36" rx="10" fill="#BFEBD6"/><circle cx="24" cy="24" r="9" stroke="#0F6E4F" strokeWidth="3"/><path d="M24 15v4M24 29v4M15 24h4M29 24h4" stroke="#0F6E4F" strokeWidth="3" strokeLinecap="round"/></svg>
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">E-Waste &amp; Batteries</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Circuit boards, used batteries, and discarded electronics containing heavy metals.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <svg className="w-[44px] h-[44px] mb-[14px]" viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="36" height="36" rx="10" fill="#BFE3F5"/><path d="M14 30l10-16 10 16H14z" stroke="#0B5A8C" strokeWidth="3" strokeLinejoin="round"/><path d="M24 22v4" stroke="#0B5A8C" strokeWidth="3" strokeLinecap="round"/></svg>
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Used Oil &amp; Sludge</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Used lubricants, oily rags, and effluent treatment plant (ETP) sludge from operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS AUTHORIZATION */}
      <section className="w-full px-[6vw] py-[72px] bg-[#F2FAF5]">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-start gap-[18px] mb-[36px]">
            <div className="flex-none w-[52px] h-[52px] rounded-[12px] rotate-45 flex items-center justify-center shadow-[0_10px_30px_rgba(11,90,140,0.10)] bg-gradient-to-br from-[#1E92CC] to-[#0B5A8C]">
              <div className="-rotate-45 text-white font-mono font-bold text-[1.05rem]">02</div>
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] mt-[2px] mb-[6px] text-[#0E2A21] font-bold">What "Authorization" Actually Means</h2>
              <p className="text-[#3C5850] text-[1rem] max-w-[70ch] leading-[1.6] m-0">Authorization is a formal, written permission granted by the pollution-control authority that legally allows a business to generate, store, treat, recycle, transport, or dispose of hazardous waste — within specific limits, timeframes, and conditions.</p>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">It's a Permission, Not a Formality</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Without it, handling hazardous waste is treated as an unauthorized and often illegal activity, regardless of intent.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">It's Activity-Specific</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">An authorization spells out exactly which waste types, quantities, and processes (storage, treatment, recycling) are permitted.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">It's Time-Bound</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Authorizations are issued for a fixed validity period and must be renewed before they lapse to remain compliant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEGAL FRAMEWORK TIMELINE */}
      <section className="w-full px-[6vw] py-[72px] bg-[#F7FBF9]" id="legal">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-start gap-[18px] mb-[36px]">
            <div className="flex-none w-[52px] h-[52px] rounded-[12px] rotate-45 flex items-center justify-center shadow-[0_10px_30px_rgba(11,90,140,0.10)] bg-gradient-to-br from-[#2FA876] to-[#0F6E4F]">
              <div className="-rotate-45 text-white font-mono font-bold text-[1.05rem]">03</div>
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] mt-[2px] mb-[6px] text-[#0E2A21] font-bold">The Legal Backbone</h2>
              <p className="text-[#3C5850] text-[1rem] max-w-[70ch] leading-[1.6] m-0">Hazardous waste regulation didn't appear overnight — it evolved through a series of environmental laws and rules designed to close gaps as industry and waste volumes grew.</p>
            </div>
          </div>
          <div className="relative pl-[36px] before:content-[''] before:absolute before:left-[9px] before:top-[6px] before:bottom-[6px] before:w-[3px] before:bg-gradient-to-b before:from-[#2FA876] before:to-[#1E92CC] before:rounded-[3px]">
            <div className="relative pb-8 before:content-[''] before:absolute before:-left-[36px] before:top-[2px] before:w-[20px] before:h-[20px] before:rounded-full before:bg-white before:border-[4px] before:border-[#1E92CC]">
              <div className="font-mono font-bold text-[#0B5A8C] text-[0.85rem] tracking-[0.04em]">Foundational Law</div>
              <div className="font-bold my-[4px] text-[1.05rem]">Environment Protection Act</div>
              <div className="text-[#3C5850] text-[0.92rem] leading-[1.55] max-w-[65ch]">Provides the umbrella legal authority under which all hazardous-substance and waste rules are framed.</div>
            </div>
            <div className="relative pb-8 before:content-[''] before:absolute before:-left-[36px] before:top-[2px] before:w-[20px] before:h-[20px] before:rounded-full before:bg-white before:border-[4px] before:border-[#2FA876]">
              <div className="font-mono font-bold text-[#0F6E4F] text-[0.85rem] tracking-[0.04em]">Early Rules</div>
              <div className="font-bold my-[4px] text-[1.05rem]">First Hazardous Waste Rules</div>
              <div className="text-[#3C5850] text-[0.92rem] leading-[1.55] max-w-[65ch]">Introduced the concept of listing hazardous wastes by category and requiring authorization for handling them.</div>
            </div>
            <div className="relative pb-8 before:content-[''] before:absolute before:-left-[36px] before:top-[2px] before:w-[20px] before:h-[20px] before:rounded-full before:bg-white before:border-[4px] before:border-[#1E92CC]">
              <div className="font-mono font-bold text-[#0B5A8C] text-[0.85rem] tracking-[0.04em]">Refinement</div>
              <div className="font-bold my-[4px] text-[1.05rem]">Amendments &amp; Expanded Scope</div>
              <div className="text-[#3C5850] text-[0.92rem] leading-[1.55] max-w-[65ch]">Later amendments broadened definitions, added transboundary movement controls, and tightened storage/transport norms.</div>
            </div>
            <div className="relative pb-0 before:content-[''] before:absolute before:-left-[36px] before:top-[2px] before:w-[20px] before:h-[20px] before:rounded-full before:bg-white before:border-[4px] before:border-[#2FA876]">
              <div className="font-mono font-bold text-[#0F6E4F] text-[0.85rem] tracking-[0.04em]">Current Framework</div>
              <div className="font-bold my-[4px] text-[1.05rem]">Hazardous &amp; Other Wastes (Management &amp; Transboundary Movement) Rules</div>
              <div className="text-[#3C5850] text-[0.92rem] leading-[1.55] max-w-[65ch]">The present-day rulebook that governs generation, collection, storage, transport, treatment, recycling, and disposal — and the authorization process this guide focuses on.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO NEEDS AUTHORIZATION */}
      <section className="w-full px-[6vw] py-[72px] bg-[#EAF6FB]" id="who">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-start gap-[18px] mb-[36px]">
            <div className="flex-none w-[52px] h-[52px] rounded-[12px] rotate-45 flex items-center justify-center shadow-[0_10px_30px_rgba(11,90,140,0.10)] bg-gradient-to-br from-[#1E92CC] to-[#0B5A8C]">
              <div className="-rotate-45 text-white font-mono font-bold text-[1.05rem]">04</div>
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] mt-[2px] mb-[6px] text-[#0E2A21] font-bold">Who Actually Needs to Apply?</h2>
              <p className="text-[#3C5850] text-[1rem] max-w-[70ch] leading-[1.6] m-0">Authorization isn't limited to big factories. Anyone in the waste's lifecycle — from creation to final disposal — typically needs their own authorization for their specific role.</p>
            </div>
          </div>
          <div className="overflow-x-auto rounded-[16px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] bg-white">
            <table className="w-full border-collapse bg-white min-w-[600px] text-left">
              <thead>
                <tr className="bg-gradient-to-r from-[#0F6E4F] to-[#0B5A8C] text-white font-semibold">
                  <th className="p-[14px_18px] text-[0.92rem]">Role in the Lifecycle</th>
                  <th className="p-[14px_18px] text-[0.92rem]">Typical Activity</th>
                  <th className="p-[14px_18px] text-[0.92rem]">Why Authorization Applies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eef4f1]">
                <tr className="hover:bg-[#BFE3F5]/30 transition-colors">
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Generator</td>
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Factories, hospitals, workshops producing waste as a by-product</td>
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Must account for waste generated and its safe handling on-site</td>
                </tr>
                <tr className="bg-[#F2FAF5] hover:bg-[#BFE3F5]/30 transition-colors">
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Storage Facility Operator</td>
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Temporary holding of waste before treatment or transport</td>
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Storage conditions and duration directly affect contamination risk</td>
                </tr>
                <tr className="hover:bg-[#BFE3F5]/30 transition-colors">
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Recycler / Re-processor</td>
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Recovering usable material from waste (e.g. used oil, metals)</td>
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Recycling processes themselves can generate secondary hazards</td>
                </tr>
                <tr className="bg-[#F2FAF5] hover:bg-[#BFE3F5]/30 transition-colors">
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Transporter</td>
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Moving waste between sites in approved vehicles</td>
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Transit is a high-risk point for spills and mishandling</td>
                </tr>
                <tr className="hover:bg-[#BFE3F5]/30 transition-colors">
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Treatment / Disposal Facility</td>
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Incineration, landfilling, or chemical treatment</td>
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Final disposal must meet strict environmental safeguards</td>
                </tr>
                <tr className="bg-[#F2FAF5] hover:bg-[#BFE3F5]/30 transition-colors">
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Importer / Exporter</td>
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Cross-border movement of hazardous waste</td>
                  <td className="p-[14px_18px] text-[#3C5850] text-[0.92rem]">Transboundary movement requires additional clearances</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. APPLICATION PROCESS */}
      <section className="w-full px-[6vw] py-[72px] bg-[#F2FAF5]" id="process">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-start gap-[18px] mb-[36px]">
            <div className="flex-none w-[52px] h-[52px] rounded-[12px] rotate-45 flex items-center justify-center shadow-[0_10px_30px_rgba(11,90,140,0.10)] bg-gradient-to-br from-[#1E92CC] to-[#0B5A8C]">
              <div className="-rotate-45 text-white font-mono font-bold text-[1.05rem]">06</div>
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] mt-[2px] mb-[6px] text-[#0E2A21] font-bold">The Application Process, Step by Step</h2>
              <p className="text-[#3C5850] text-[1rem] max-w-[70ch] leading-[1.6] m-0">While exact portals and forms vary by state and authority, the overall journey from application to approval generally follows the same logical sequence.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5 items-start bg-white rounded-[16px] p-[22px_24px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border-l-[5px] border-l-[#2FA876]">
              <div className="font-bold text-[1.3rem] text-white bg-[#0F6E4F] w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-none">1</div>
              <div><h3 className="m-0 mb-[6px] text-[1.05rem] font-bold">Identify Your Category</h3><p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Determine whether you're a generator, storer, recycler, transporter, or disposer — this decides which application form and conditions apply to you.</p></div>
            </div>
            <div className="flex gap-5 items-start bg-white rounded-[16px] p-[22px_24px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border-l-[5px] border-l-[#1E92CC]">
              <div className="font-bold text-[1.3rem] text-white bg-[#0B5A8C] w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-none">2</div>
              <div><h3 className="m-0 mb-[6px] text-[1.05rem] font-bold">Prepare Facility Details</h3><p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Document your site layout, storage capacity, safety equipment, and waste-handling processes.</p></div>
            </div>
            <div className="flex gap-5 items-start bg-white rounded-[16px] p-[22px_24px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border-l-[5px] border-l-[#2FA876]">
              <div className="font-bold text-[1.3rem] text-white bg-[#0F6E4F] w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-none">3</div>
              <div><h3 className="m-0 mb-[6px] text-[1.05rem] font-bold">Submit the Application</h3><p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">File the prescribed form with the relevant pollution control authority, typically through an online portal, along with the fee.</p></div>
            </div>
            <div className="flex gap-5 items-start bg-white rounded-[16px] p-[22px_24px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border-l-[5px] border-l-[#1E92CC]">
              <div className="font-bold text-[1.3rem] text-white bg-[#0B5A8C] w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-none">4</div>
              <div><h3 className="m-0 mb-[6px] text-[1.05rem] font-bold">Site Inspection</h3><p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Officials may inspect the facility to verify that storage, safety, and handling arrangements match what was declared.</p></div>
            </div>
            <div className="flex gap-5 items-start bg-white rounded-[16px] p-[22px_24px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border-l-[5px] border-l-[#2FA876]">
              <div className="font-bold text-[1.3rem] text-white bg-[#0F6E4F] w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-none">5</div>
              <div><h3 className="m-0 mb-[6px] text-[1.05rem] font-bold">Review &amp; Clarifications</h3><p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">The authority may seek additional documents or clarifications before proceeding further.</p></div>
            </div>
            <div className="flex gap-5 items-start bg-white rounded-[16px] p-[22px_24px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border-l-[5px] border-l-[#1E92CC]">
              <div className="font-bold text-[1.3rem] text-white bg-[#0B5A8C] w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-none">6</div>
              <div><h3 className="m-0 mb-[6px] text-[1.05rem] font-bold">Grant of Authorization</h3><p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Once satisfied, the authority issues a formal authorization certificate specifying waste types, quantities, and validity period.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DOCUMENTS CHECKLIST */}
      <section className="w-full px-[6vw] py-[72px] bg-[#F7FBF9]">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-start gap-[18px] mb-[36px]">
            <div className="flex-none w-[52px] h-[52px] rounded-[12px] rotate-45 flex items-center justify-center shadow-[0_10px_30px_rgba(11,90,140,0.10)] bg-gradient-to-br from-[#2FA876] to-[#0F6E4F]">
              <div className="-rotate-45 text-white font-mono font-bold text-[1.05rem]">07</div>
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] mt-[2px] mb-[6px] text-[#0E2A21] font-bold">Documents &amp; Information Checklist</h2>
              <p className="text-[#3C5850] text-[1rem] max-w-[70ch] leading-[1.6] m-0">Having these ready before applying can significantly shorten the review cycle.</p>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">📋 Facility Consent</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Existing consent to establish/operate from the pollution control authority, if applicable.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">🗺️ Site Layout Plan</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Clear diagram showing waste storage areas, drainage, and safety zones.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">🧪 Waste Inventory</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">List of waste categories, estimated quantities, and their source processes.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">🚛 Handling &amp; Transport Plan</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Details of how waste moves within and outside the facility, including vehicle authorization.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">🛡️ Safety Measures</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Fire-fighting equipment, spill-control kits, and personal protective equipment on site.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">🧾 Financial Assurance</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Bank guarantee or insurance proof, where required for higher-risk categories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. VALIDITY & RENEWAL */}
      <section className="w-full px-[6vw] py-[72px] bg-[#EAF6FB]">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-start gap-[18px] mb-[36px]">
            <div className="flex-none w-[52px] h-[52px] rounded-[12px] rotate-45 flex items-center justify-center shadow-[0_10px_30px_rgba(11,90,140,0.10)] bg-gradient-to-br from-[#1E92CC] to-[#0B5A8C]">
              <div className="-rotate-45 text-white font-mono font-bold text-[1.05rem]">08</div>
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] mt-[2px] mb-[6px] text-[#0E2A21] font-bold">Validity, Renewal &amp; Amendment</h2>
              <p className="text-[#3C5850] text-[1rem] max-w-[70ch] leading-[1.6] m-0">An authorization isn't a one-time achievement — it needs active upkeep.</p>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Fixed Validity</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Most authorizations are issued for a defined number of years and expire automatically after that period.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Renewal Window</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Applications for renewal are typically expected well before expiry — waiting until the last date risks a compliance gap.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Amendments</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Any change in waste type, quantity, or process usually requires an amendment to the existing authorization, not a fresh one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHO REGULATES */}
      <section className="w-full px-[6vw] py-[72px] bg-[#F7FBF9]">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-start gap-[18px] mb-[36px]">
            <div className="flex-none w-[52px] h-[52px] rounded-[12px] rotate-45 flex items-center justify-center shadow-[0_10px_30px_rgba(11,90,140,0.10)] bg-gradient-to-br from-[#2FA876] to-[#0F6E4F]">
              <div className="-rotate-45 text-white font-mono font-bold text-[1.05rem]">09</div>
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] mt-[2px] mb-[6px] text-[#0E2A21] font-bold">Who's Who in Regulation</h2>
              <p className="text-[#3C5850] text-[1rem] max-w-[70ch] leading-[1.6] m-0">Multiple layers of authority work together to keep the system consistent nationwide while staying responsive locally.</p>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Central Ministry</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Sets national policy direction and frames the overarching rules and standards.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Central Pollution Control Board</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Issues technical guidelines, monitors compliance trends, and coordinates across states.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">State Pollution Control Boards</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Process applications, conduct inspections, and grant or renew authorizations at the ground level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NON-COMPLIANCE & PENALTIES */}
      <section className="w-full px-[6vw] py-[72px] bg-[#F2FAF5]" id="compliance">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-start gap-[18px] mb-[36px]">
            <div className="flex-none w-[52px] h-[52px] rounded-[12px] rotate-45 flex items-center justify-center shadow-[0_10px_30px_rgba(11,90,140,0.10)] bg-gradient-to-br from-[#1E92CC] to-[#0B5A8C]">
              <div className="-rotate-45 text-white font-mono font-bold text-[1.05rem]">10</div>
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] mt-[2px] mb-[6px] text-[#0E2A21] font-bold">What Happens Without Authorization?</h2>
              <p className="text-[#3C5850] text-[1rem] max-w-[70ch] leading-[1.6] m-0">Operating without valid authorization — or beyond its conditions — is treated as a serious environmental offence, not a paperwork lapse.</p>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Closure Orders</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Authorities can direct immediate stoppage of the non-compliant activity.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Financial Penalties</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Monetary fines proportional to the violation and environmental damage caused.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Legal Proceedings</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Serious or repeated violations can lead to prosecution under environmental law.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Liability for Damage</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Operators may be held responsible for remediation costs of any contamination caused.</p>
            </div>
          </div>
          
          <div className="h-[24px]" />
          <div className="flex gap-4 items-start bg-white rounded-[16px] p-[22px_24px] border-[1.5px] border-dashed border-[#D99A2B] shadow-[0_4px_18px_rgba(217,154,43,0.1)]">
            <svg className="flex-none w-[34px] h-[34px] text-[#D99A2B]" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 21h20L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 9v5M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.6]">
              <strong className="text-[#0E2A21]">Good to remember:</strong> "I didn't know I needed one" is rarely accepted as a defence. If your operations touch hazardous waste in any way, it's worth confirming your authorization status early rather than after an inspection.
            </p>
          </div>
        </div>
      </section>

      {/* 11. BENEFITS */}
      <section className="w-full px-[6vw] py-[72px] bg-[#F7FBF9]">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-start gap-[18px] mb-[36px]">
            <div className="flex-none w-[52px] h-[52px] rounded-[12px] rotate-45 flex items-center justify-center shadow-[0_10px_30px_rgba(11,90,140,0.10)] bg-gradient-to-br from-[#2FA876] to-[#0F6E4F]">
              <div className="-rotate-45 text-white font-mono font-bold text-[1.05rem]">11</div>
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] mt-[2px] mb-[6px] text-[#0E2A21] font-bold">Why Staying Authorized Actually Helps You</h2>
              <p className="text-[#3C5850] text-[1rem] max-w-[70ch] leading-[1.6] m-0">Beyond avoiding penalties, a valid authorization is genuinely good for business.</p>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Uninterrupted Operations</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">No sudden closure orders disrupting production schedules.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Better Business Credibility</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Clients, investors, and partners increasingly check environmental compliance before deals.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Safer Workplaces</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">The process itself pushes better storage, handling, and safety practices on-site.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Access to Facilities</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">Authorized recyclers and treatment plants generally only accept waste from other authorized parties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW EPR NEXUS HELPS YOU STAY AUTHORIZED */}
      <section className="w-full px-[6vw] py-[72px] bg-[#F7FBF9]">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-start gap-[18px] mb-[36px]">
            <div className="flex-none w-[52px] h-[52px] rounded-[12px] rotate-45 flex items-center justify-center shadow-[0_10px_30px_rgba(11,90,140,0.10)] bg-gradient-to-br from-[#2FA876] to-[#0F6E4F]">
              <div className="-rotate-45 text-white font-mono font-bold text-[1.05rem]">12</div>
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] mt-[2px] mb-[6px] text-[#0E2A21] font-bold">How EPR Nexus Helps You Stay Authorized</h2>
              <p className="text-[#3C5850] text-[1rem] max-w-[70ch] leading-[1.6] m-0">Reading the rules is one thing — getting through the paperwork, inspections, and renewals without losing momentum is another. That's where EPR Nexus steps in, as your compliance partner from first application to every renewal after.</p>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <svg className="w-[44px] h-[44px] mb-[14px]" viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="36" height="36" rx="10" fill="#BFEBD6"/><path d="M16 24l6 6 10-12" stroke="#0F6E4F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">End-to-End Application Support</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">EPR Nexus prepares and files your authorization application, so nothing gets stuck for a missing form or wrong annexure.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <svg className="w-[44px] h-[44px] mb-[14px]" viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="36" height="36" rx="10" fill="#BFE3F5"/><path d="M14 34V18l10-8 10 8v16H14z" stroke="#0B5A8C" strokeWidth="3" strokeLinejoin="round"/></svg>
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Documentation &amp; Site Readiness</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">From site layout plans to waste inventories, the team helps get every document inspection-ready before you submit.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <svg className="w-[44px] h-[44px] mb-[14px]" viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="36" height="36" rx="10" fill="#BFEBD6"/><circle cx="24" cy="24" r="9" stroke="#0F6E4F" strokeWidth="3"/><path d="M24 19v5l4 2" stroke="#0F6E4F" strokeWidth="3" strokeLinecap="round"/></svg>
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Renewal Tracking</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">EPR Nexus tracks your authorization's validity and flags renewals well before expiry, so you're never caught off guard.</p>
            </div>
            <div className="bg-white rounded-[16px] p-[26px] shadow-[0_4px_18px_rgba(11,90,140,0.08)] border border-[#0F6E4F]/10 hover:-translate-y-[4px] hover:shadow-[0_16px_30px_rgba(11,90,140,0.14)] transition-all">
              <svg className="w-[44px] h-[44px] mb-[14px]" viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="36" height="36" rx="10" fill="#BFE3F5"/><path d="M24 14v20M16 20l8-6 8 6" stroke="#0B5A8C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h3 className="m-0 mb-2 text-[1.08rem] text-[#0E2A21] font-bold">Ongoing Compliance Advisory</h3>
              <p className="m-0 text-[#3C5850] text-[0.93rem] leading-[1.55]">As rules and quantities change, EPR Nexus helps you amend authorizations and stay aligned with the latest requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="w-full px-[6vw] py-[72px] bg-[#EAF6FB]" id="faq">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-start gap-[18px] mb-[36px]">
            <div className="flex-none w-[52px] h-[52px] rounded-[12px] rotate-45 flex items-center justify-center shadow-[0_10px_30px_rgba(11,90,140,0.10)] bg-gradient-to-br from-[#1E92CC] to-[#0B5A8C]">
              <div className="-rotate-45 text-white font-mono font-bold text-[1.05rem]">13</div>
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] mt-[2px] mb-[6px] text-[#0E2A21] font-bold">Frequently Asked Questions</h2>
              <p className="text-[#3C5850] text-[1rem] max-w-[70ch] leading-[1.6] m-0">Quick answers to the questions that come up most often.</p>
            </div>
          </div>

          <div>
            {/* FAQ 1 */}
            <div className="bg-white rounded-[14px] mb-[12px] shadow-[0_4px_14px_rgba(11,90,140,0.07)] overflow-hidden">
              <div 
                className="flex justify-between items-center gap-3 p-[18px_22px] cursor-pointer font-semibold text-[0.98rem]"
                onClick={() => toggleFaq(0)}
              >
                Does a small workshop generating tiny amounts of waste still need authorization?
                <span className={`transition-transform duration-250 text-[#0B5A8C] text-[1.3rem] flex-none ${openFaq === 0 ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openFaq === 0 && (
                <div className="px-[22px] pb-[20px] text-[#3C5850] text-[0.92rem] leading-[1.6]">
                  <p className="m-0">Generally yes — authorization requirements are usually based on waste category and type rather than the scale of the business, though some rules do define minimum thresholds. It's best to check the specific waste category against current rules.</p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-[14px] mb-[12px] shadow-[0_4px_14px_rgba(11,90,140,0.07)] overflow-hidden">
              <div 
                className="flex justify-between items-center gap-3 p-[18px_22px] cursor-pointer font-semibold text-[0.98rem]"
                onClick={() => toggleFaq(1)}
              >
                Can I transport hazardous waste using any regular vehicle?
                <span className={`transition-transform duration-250 text-[#0B5A8C] text-[1.3rem] flex-none ${openFaq === 1 ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openFaq === 1 && (
                <div className="px-[22px] pb-[20px] text-[#3C5850] text-[0.92rem] leading-[1.6]">
                  <p className="m-0">No. Transport typically requires vehicles that meet specific labeling, containment, and safety standards, along with authorized transporters and proper manifests documenting the movement.</p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-[14px] mb-[12px] shadow-[0_4px_14px_rgba(11,90,140,0.07)] overflow-hidden">
              <div 
                className="flex justify-between items-center gap-3 p-[18px_22px] cursor-pointer font-semibold text-[0.98rem]"
                onClick={() => toggleFaq(2)}
              >
                What happens if my authorization expires while renewal is pending?
                <span className={`transition-transform duration-250 text-[#0B5A8C] text-[1.3rem] flex-none ${openFaq === 2 ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openFaq === 2 && (
                <div className="px-[22px] pb-[20px] text-[#3C5850] text-[0.92rem] leading-[1.6]">
                  <p className="m-0">This varies by jurisdiction and timing of the renewal application. It's safest to apply well ahead of expiry and confirm your status directly with the relevant authority rather than assuming automatic continuity.</p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-[14px] mb-[12px] shadow-[0_4px_14px_rgba(11,90,140,0.07)] overflow-hidden">
              <div 
                className="flex justify-between items-center gap-3 p-[18px_22px] cursor-pointer font-semibold text-[0.98rem]"
                onClick={() => toggleFaq(3)}
              >
                Is authorization the same as a "No Objection Certificate"?
                <span className={`transition-transform duration-250 text-[#0B5A8C] text-[1.3rem] flex-none ${openFaq === 3 ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openFaq === 3 && (
                <div className="px-[22px] pb-[20px] text-[#3C5850] text-[0.92rem] leading-[1.6]">
                  <p className="m-0">They're related but distinct. A broader consent/NOC generally permits establishing and operating a facility, while hazardous waste authorization is a specific permission for handling that particular waste stream.</p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-[14px] mb-[12px] shadow-[0_4px_14px_rgba(11,90,140,0.07)] overflow-hidden">
              <div 
                className="flex justify-between items-center gap-3 p-[18px_22px] cursor-pointer font-semibold text-[0.98rem]"
                onClick={() => toggleFaq(4)}
              >
                Who do I contact to start the process?
                <span className={`transition-transform duration-250 text-[#0B5A8C] text-[1.3rem] flex-none ${openFaq === 4 ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openFaq === 4 && (
                <div className="px-[22px] pb-[20px] text-[#3C5850] text-[0.92rem] leading-[1.6]">
                  <p className="m-0">Applications are typically filed with your State Pollution Control Board or Pollution Control Committee, often through an online portal designed for consent and authorization management.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full px-[6vw] py-9 bg-[#0E2A21] text-[#cfe9de] text-[0.85rem] flex flex-wrap justify-between gap-3">
        <div>© <span>{currentYear}</span> Hazardous Waste Authorization Guide — Educational content, not legal advice.</div>
        <div>Always verify current requirements with your local Pollution Control Board.</div>
      </footer>
      </div>
      <aside className="hidden lg:block shrink-0 w-[320px]">
        <div className="sticky top-28 px-2">
    <StickyContactForm/>
        </div>
      </aside>

        </div>


    </div>
  );
}