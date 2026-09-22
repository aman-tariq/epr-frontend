import StickyContactForm from '@/components/StickyContactForm';
import React from 'react';

export default function EprEwasteGuide() {
  return (
    <div className="w-full md:mt-[130px] mt-14 m-0 p-0 font-sans text-[#16261F] bg-[#F1EFE6] leading-relaxed min-h-screen">
       <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        <div>
      {/* Hero Section */}
      <header className="w-full m-0 bg-[radial-gradient(circle_at_15%_20%,rgba(110,156,125,0.35),transparent_45%),linear-gradient(160deg,#1E4632_0%,#12301F_100%)] text-[#F1EFE6] pt-18 pb-14 px-4 sm:px-8 mb-2">
        <div className="max-w-full mx-auto">
          <div className="font-mono pt-10 text-xs sm:text-[13px] tracking-[0.14em] uppercase text-[#6E9C7D] flex items-center gap-2.5 mb-4.5 before:content-[''] before:w-7 before:h-[1px] before:bg-[#6E9C7D]">
            E-Waste Management Rules, 2022 compliance
          </div>
          <h1 className="font-serif font-semibold text-3xl sm:text-5xl md:text-[52px] leading-[1.08] mb-5 max-w-6xl">
            EPR E-Waste Registration, explained simply — the complete guide
          </h1>
          <p className="text-base sm:text-lg text-[#DCE5DE] max-w-6xl mb-5">
            Everything a manufacturer, producer, refurbisher or recycler needs to know about Extended Producer Responsibility in India — what it is, why it exists, what it costs, and exactly how to register — without the legal jargon.
          </p>
          <nav className="flex flex-wrap gap-x-4.5 gap-y-2 mt-2.5 font-mono text-[12.5px]"></nav>
        </div>
      </header>

      {/* Main Content Container with NO Horizontal Padding/Margin on outer flow */}
      <main className="w-full m-0 p-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-25">
          
          {/* Section 01 */}
          <section id="what-is-epr" className="py-13 border-b border-[#D8D3C2] scroll-mt-5">
            <h2 className="font-serif font-semibold text-2xl sm:text-[28px] text-[#12301F] mb-2 flex items-baseline gap-3.5">
              <span className="font-mono text-sm text-[#A85C32] tracking-[0.05em]">01</span>
              What is EPR in E-Waste?
            </h2>
            <p className="text-[#445048] my-3.5 text-base">
              Every phone, laptop, television or kitchen appliance we throw away becomes <strong className="text-[#16261F]">e-waste</strong> — and most of it doesn't disappear responsibly on its own. A huge share ends up with informal scrap dealers who strip out valuable metals using unsafe, polluting methods, releasing lead, mercury and other toxins into soil, water and air along the way. India is now among the largest generators of electronic waste in the world, and the volume keeps growing every year as gadgets get cheaper and life cycles get shorter.
            </p>
            <p className="text-[#445048] my-3.5 text-base">
              <strong className="text-[#16261F]">Extended Producer Responsibility (EPR)</strong> is the policy idea designed to fix this. It shifts responsibility for a product's end-of-life back onto the company that made or sold it — not just the government, not just the consumer, and not just informal waste pickers. In simple terms:
            </p>
            <p className="text-[#445048] my-3.5 text-base">
              The idea isn't unique to India — EPR frameworks exist across Europe, Japan, South Korea and elsewhere for electronics, packaging, batteries and plastics. In India, the electronics-specific version of this rule is set out in the <strong className="text-[#16261F]">E-Waste (Management) Rules, 2022</strong>, administered by the <strong className="text-[#16261F]">Central Pollution Control Board (CPCB)</strong> under the Ministry of Environment, Forest and Climate Change.
            </p>
            <p className="text-[#445048] my-3.5 text-base">
              Registering for EPR is how a business formally tells the government: <em className="italic">"here is how much electronic equipment I'm putting into the market, and here is my plan to collect and recycle an equivalent share of it once it's discarded."</em> Without this registration, a company cannot legally manufacture, import, or sell notified electronic equipment in India.
            </p>
          </section>

          {/* Section 02 */}
          <section id="rules-2022" className="py-13 border-b border-[#D8D3C2] scroll-mt-5">
            <h2 className="font-serif font-semibold text-2xl sm:text-[28px] text-[#12301F] mb-2 flex items-baseline gap-3.5">
              <span className="font-mono text-sm text-[#A85C32] tracking-[0.05em]">02</span>
              Inside the E-Waste (Management) Rules, 2022
            </h2>
            <p className="text-[#445048] my-3.5 text-base">
              The 2022 Rules replaced the earlier 2016 framework and introduced a stricter, more transparent EPR system. The Ministry of Environment, Forest and Climate Change has also published amendments after 2022, so it is important to read this guide as the 2022 Rules <em className="italic">as amended</em>. It's worth understanding the key shifts, because they explain why the registration and reporting process looks the way it does today.
            </p>
            <div className="flex flex-wrap gap-2.5 my-4.5">
              <span className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-full px-4 py-2 text-[13.5px] text-[#12301F] font-medium">106 EEE items now covered</span>
              <span className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-full px-4 py-2 text-[13.5px] text-[#12301F] font-medium">Fully online registration</span>
              <span className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-full px-4 py-2 text-[13.5px] text-[#12301F] font-medium">Online EPR certificate purchase</span>
              <span className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-full px-4 py-2 text-[13.5px] text-[#12301F] font-medium">Environmental compensation for shortfalls</span>
              <span className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-full px-4 py-2 text-[13.5px] text-[#12301F] font-medium">Solar PV modules added</span>
              <span className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-full px-4 py-2 text-[13.5px] text-[#12301F] font-medium">Mandatory audits & verification</span>
            </div>
            <h4 className="font-semibold text-[15.5px] text-[#12301F] mt-4.5 mb-1.5">What changed from the 2016 rules</h4>
            <ul className="pl-0 my-4 list-none">
              <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">
                <strong className=" mx-4 text-[#16261F]">Wider coverage:</strong> Schedule I was expanded, and roughly 106 categories of electrical and electronic equipment now fall under the EPR regime — far more than before.
              </li>
              <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">
                <strong className=" mx-4 text-[#16261F]">Real recycling targets:</strong> Producers no longer just report "collection" — targets are now tied to actual recycling of end products, so the quantity recycled is computed based on verified output rather than a paper claim.
              </li>
              <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">
                <strong className=" mx-4 text-[#16261F]">EPR certificates on the portal:</strong> Registered recyclers generate EPR certificates for the e-waste they process, and producers who fall short of their own target can purchase certificates on the portal to cover the gap.
              </li>
              <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">
                <strong className=" mx-4 text-[#16261F]">Environmental compensation:</strong> Producers who miss their targets can face financial penalties (environmental compensation) under the Rules.
              </li>
              <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">
                <strong className=" mx-4 text-[#16261F]">Verification and audits:</strong> CPCB and designated agencies can inspect facilities and verify claims, closing the loophole where producers used to self-report without independent checks.
              </li>
              <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">
                <strong className=" mx-4 text-[#16261F]">Solar PV modules included:</strong> Management of solar panels, modules and cells was added to the rules, reflecting India's growing renewable energy footprint.
              </li>
            </ul>
          </section>

          {/* Section 03 */}
          <section id="why" className="py-13 border-b border-[#D8D3C2] scroll-mt-5">
            <h2 className="font-serif font-semibold text-2xl sm:text-[28px] text-[#12301F] mb-2 flex items-baseline gap-3.5">
              <span className="font-mono text-sm text-[#A85C32] tracking-[0.05em]">03</span>
              Why EPR registration is needed
            </h2>
            <p className="text-[#445048] my-3.5 text-base">
              EPR registration isn't just paperwork sitting in a government file — it changes how a business operates and how it's perceived, while also changing what happens to a product long after it's sold.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-[14px] p-6 sm:p-[26px] border-t-3 border-t-[#1E4632]">
                <h3 className="font-serif font-semibold text-xl text-[#12301F] mt-0 mb-2.5">For companies</h3>
                <ul className="pl-0 my-4 list-none">
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">It's a legal requirement — no registration means no legal manufacturing, importing or selling of notified EEE</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Customs authorities now check EPR compliance before allowing imports of components and finished products</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Builds trust with customers, investors, and regulators who increasingly screen suppliers for compliance</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Keeps operations running without disruption, recalls, or last-minute shipment holds</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Opens partnerships with authorized recyclers, dismantlers, and collection networks</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Avoids environmental compensation charges for missed targets</li>
                </ul>
              </div>
              <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-[14px] p-6 sm:p-[26px] border-t-3 border-t-[#6E9C7D]">
                <h3 className="font-serif font-semibold text-xl text-[#12301F] mt-0 mb-2.5">For the environment</h3>
                <ul className="pl-0 my-4 list-none">
                  <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Less e-waste ending up in landfills or unsafe informal recyclers</li>
                  <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Valuable metals like copper, gold, silver and aluminium get recovered, not wasted</li>
                  <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Less lead, mercury and cadmium leaking into soil and water near dismantling sites</li>
                  <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Formal recycling protects the health of workers who would otherwise handle e-waste with no protective equipment</li>
                  <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Supports a circular, reuse-first economy instead of a throwaway one</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 04 */}
          <section id="who" className="py-13 border-b border-[#D8D3C2] scroll-mt-5">
            <h2 className="font-serif font-semibold text-2xl sm:text-[28px] text-[#12301F] mb-2 flex items-baseline gap-3.5">
              <span className="font-mono text-sm text-[#A85C32] tracking-[0.05em]">04</span>
              Who needs to register?
            </h2>
            <p className="text-[#445048] my-3.5 text-base">
              Under the E-Waste Rules, four broad categories of entities are required to register on the CPCB EPR portal. Each has a slightly different role and slightly different obligations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 mt-5">
              <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-xl p-5 sm:p-[22px]">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#6E9C7D] mb-2 block">Category 1</span>
                <h3 className="font-serif font-semibold text-[17px] text-[#12301F] mt-0 mb-1.5">Manufacturers</h3>
                <p className="text-[#445048] text-[14.5px] m-0">Companies that produce electrical and electronic equipment, or parts and components used in them, within India.</p>
              </div>
              <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-xl p-5 sm:p-[22px]">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#6E9C7D] mb-2 block">Category 2</span>
                <h3 className="font-serif font-semibold text-[17px] text-[#12301F] mt-0 mb-1.5">Producers</h3>
                <p className="text-[#445048] text-[14.5px] m-0">Businesses that manufacture and sell Electrical and Electronic Equipment (EEE) under their own brand, import EEE for sale in India, or sell EEE under their own brand manufactured by others.</p>
              </div>
              <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-xl p-5 sm:p-[22px]">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#6E9C7D] mb-2 block">Category 3</span>
                <h3 className="font-serif font-semibold text-[17px] text-[#12301F] mt-0 mb-1.5">Refurbishers</h3>
                <p className="text-[#445048] text-[14.5px] m-0">Entities that repair, restore or upgrade used electronics for resale, extending the working life of a product before it becomes waste.</p>
              </div>
              <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-xl p-5 sm:p-[22px]">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#6E9C7D] mb-2 block">Category 4</span>
                <h3 className="font-serif font-semibold text-[17px] text-[#12301F] mt-0 mb-1.5">Recyclers</h3>
                <p className="text-[#445048] text-[14.5px] m-0">Units that dismantle and process e-waste to recover metals, plastics and other reusable materials in an environmentally sound way.</p>
              </div>
            </div>
            <p className="text-[#445048] my-3.5 text-base">Entities in these categories must obtain the required CPCB registration before carrying out the activities covered by the Rules.</p>
          </section>

          {/* Section 05 */}
          <section id="composition" className="py-13 border-b border-[#D8D3C2] scroll-mt-5">
            <h2 className="font-serif font-semibold text-2xl sm:text-[28px] text-[#12301F] mb-2 flex items-baseline gap-3.5">
              <span className="font-mono text-sm text-[#A85C32] tracking-[0.05em]">05</span>
              Inside e-waste: what gets recovered and what needs careful handling
            </h2>
            <p className="text-[#445048] my-3.5 text-base">
              This is part of why proper recycling matters so much — a typical device is a mix of genuinely valuable, recoverable material and substances that need careful handling.
            </p>

            <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-[14px] p-7 grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-8 items-stretch">
              <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-[18px] p-[18px] min-h-[320px] flex items-center justify-center">
                <svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of common e-waste parts including metals, plastics, circuit boards, and hazardous components">
                  <defs>
                    <linearGradient id="ewBg" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#FBFAF5"/>
                      <stop offset="100%" stopColor="#F4F0E4"/>
                    </linearGradient>
                    <linearGradient id="metal" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#1E4632"/>
                      <stop offset="100%" stopColor="#6E9C7D"/>
                    </linearGradient>
                    <linearGradient id="plastic" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#DCC27B"/>
                      <stop offset="100%" stopColor="#C79A3C"/>
                    </linearGradient>
                    <linearGradient id="hazard" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#A85C32"/>
                      <stop offset="100%" stopColor="#D17A43"/>
                    </linearGradient>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#A08D67" floodOpacity="0.16"/>
                    </filter>
                  </defs>

                  <rect x="0" y="0" width="720" height="360" rx="22" fill="url(#ewBg)"/>
                  <circle cx="118" cy="84" r="42" fill="#E1E8DD"/>
                  <circle cx="612" cy="84" r="34" fill="#F1DDB4"/>
                  <circle cx="590" cy="270" r="58" fill="#E9E1CF"/>

                  <g filter="url(#shadow)">
                    <rect x="54" y="110" width="210" height="132" rx="14" fill="#FFFFFF" stroke="#D8D3C2" strokeWidth="2"/>
                    <rect x="72" y="126" width="174" height="92" rx="10" fill="#E9F0EA"/>
                    <rect x="38" y="244" width="242" height="16" rx="8" fill="#D8D3C2"/>
                    <rect x="92" y="256" width="134" height="10" rx="5" fill="#B8C4B9"/>
                    <rect x="150" y="142" width="38" height="24" rx="4" fill="url(#metal)"/>
                    <rect x="156" y="172" width="26" height="16" rx="4" fill="#6E9C7D"/>
                  </g>

                  <g filter="url(#shadow)">
                    <rect x="286" y="78" width="94" height="168" rx="18" fill="#FFFFFF" stroke="#D8D3C2" strokeWidth="2"/>
                    <rect x="298" y="94" width="70" height="120" rx="10" fill="#F3F0E5"/>
                    <rect x="321" y="224" width="24" height="8" rx="4" fill="#B8C4B9"/>
                    <circle cx="333" cy="40" r="16" fill="url(#plastic)"/>
                    <path d="M325 40h16M333 32v16" stroke="#FBFAF5" strokeWidth="4" strokeLinecap="round"/>
                  </g>

                  <g filter="url(#shadow)">
                    <rect x="434" y="106" width="130" height="76" rx="18" fill="#FFFFFF" stroke="#D8D3C2" strokeWidth="2"/>
                    <rect x="447" y="120" width="92" height="48" rx="12" fill="#E9F0EA"/>
                    <rect x="534" y="128" width="16" height="28" rx="4" fill="url(#plastic)"/>
                    <path d="M475 156l18-24 7 16 17-20" fill="none" stroke="#1E4632" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>

                  <g filter="url(#shadow)">
                    <rect x="456" y="214" width="178" height="96" rx="16" fill="#DDE9DE" stroke="#D8D3C2" strokeWidth="2"/>
                    <rect x="474" y="230" width="54" height="22" rx="6" fill="#1E4632"/>
                    <rect x="540" y="230" width="24" height="22" rx="6" fill="#6E9C7D"/>
                    <rect x="572" y="230" width="42" height="22" rx="6" fill="#A85C32"/>
                    <circle cx="498" cy="272" r="12" fill="#C79A3C"/>
                    <circle cx="542" cy="272" r="12" fill="#FBFAF5" stroke="#6E9C7D" strokeWidth="4"/>
                    <circle cx="588" cy="272" r="12" fill="#FBFAF5" stroke="#A85C32" strokeWidth="4"/>
                    <path d="M516 242v18M552 242v18M590 242v18" stroke="#B8C4B9" strokeWidth="4" strokeLinecap="round"/>
                  </g>

                  <g transform="translate(394,188)" filter="url(#shadow)">
                    <circle cx="0" cy="0" r="52" fill="#FFFFFF" stroke="#D8D3C2" strokeWidth="2"/>
                    <path d="M-18 -24a34 34 0 0 1 40 2" fill="none" stroke="#1E4632" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M18 -16l10 -2 -4 9" fill="none" stroke="#1E4632" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 24a34 34 0 0 1 -40 -2" fill="none" stroke="#A85C32" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M-18 16l-10 2 4 -9" fill="none" stroke="#A85C32" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="-13" y="-9" width="26" height="18" rx="4" fill="#6E9C7D"/>
                  </g>

                  <g font-family="IBM Plex Sans, sans-serif" fontSize="15" fontWeight="600">
                    <rect x="44" y="40" width="118" height="34" rx="17" fill="#1E4632"/>
                    <text x="103" y="62" textAnchor="middle" fill="#FBFAF5">Valuable metals</text>

                    <rect x="270" y="286" width="96" height="34" rx="17" fill="#C79A3C"/>
                    <text x="318" y="308" textAnchor="middle" fill="#FBFAF5">Plastics</text>

                    <rect x="504" y="40" width="136" height="34" rx="17" fill="#A85C32"/>
                    <text x="572" y="62" textAnchor="middle" fill="#FBFAF5">Hazardous parts</text>

                    <rect x="438" y="310" width="142" height="28" rx="14" fill="#F4E7CE"/>
                    <text x="509" y="329" textAnchor="middle" fill="#7B5A2F" fontSize="13">Circuit boards &amp; chips</text>
                  </g>
                </svg>
              </div>

              <div className="flex flex-col gap-3 justify-center">
                <div className="flex items-center gap-2.5 text-[14.5px] text-[#445048]"><span className="w-3 h-3 rounded-[3px] shrink-0 bg-[#1E4632]"></span><span>Metals and alloys</span></div>
                <div className="flex items-center gap-2.5 text-[14.5px] text-[#445048]"><span className="w-3 h-3 rounded-[3px] shrink-0 bg-[#6E9C7D]"></span><span>Plastics and polymers</span></div>
                <div className="flex items-center gap-2.5 text-[14.5px] text-[#445048]"><span className="w-3 h-3 rounded-[3px] shrink-0 bg-[#C79A3C]"></span><span>Glass and ceramics</span></div>
                <div className="flex items-center gap-2.5 text-[14.5px] text-[#445048]"><span className="w-3 h-3 rounded-[3px] shrink-0 bg-[#A85C32]"></span><span>Circuit boards and components</span></div>
                <div className="flex items-center gap-2.5 text-[14.5px] text-[#445048]"><span className="w-3 h-3 rounded-[3px] shrink-0 bg-[#7A3B2E]"></span><span>Hazardous substances</span></div>
                <div className="flex items-center gap-2.5 text-[14.5px] text-[#445048]"><span className="w-3 h-3 rounded-[3px] shrink-0 bg-[#B8C4B9]"></span><span>Other materials</span></div>
                <p className="text-[13px] text-[#7A8078] mt-2 italic">Material mix varies widely by product type; this illustration is conceptual, not a fixed percentage breakdown.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-4.5">
              <span className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-full px-4 py-2 text-[13.5px] text-[#12301F] font-medium">Recoverable metals</span>
              <span className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-full px-4 py-2 text-[13.5px] text-[#12301F] font-medium">Reusable plastics</span>
              <span className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-full px-4 py-2 text-[13.5px] text-[#12301F] font-medium">Safe handling matters</span>
            </div>

            <p className="text-[#445048] my-3.5 text-base">The metals and circuit-board fraction is why formal recycling can actually be profitable when done at scale — recovering copper, aluminium and trace precious metals is often more efficient than mining virgin ore. The hazardous fraction is why informal, unregulated dismantling is so damaging — those same substances, handled without protective equipment or containment, leach directly into soil and groundwater.</p>
          </section>

          {/* Section 06 */}
          <section id="targets" className="py-13 border-b border-[#D8D3C2] scroll-mt-5">
            <h2 className="font-serif font-semibold text-2xl sm:text-[28px] text-[#12301F] mb-2 flex items-baseline gap-3.5">
              <span className="font-mono text-sm text-[#A85C32] tracking-[0.05em]">06</span>
              Understanding your EPR recycling obligation
            </h2>
            <p className="text-[#445048] my-3.5 text-base">Once registered, a producer does not just get a certificate and move on — every year, they receive an annual <strong className="text-[#16261F]">EPR obligation</strong> based on the quantities placed on the market and the applicable schedule under the Rules. This obligation is tracked on the portal and fulfilled through collection and recycling, with phased implementation where applicable.</p>

            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5 mt-6">
              <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-[14px] p-5 sm:p-5.5 shadow-[0_10px_24px_rgba(22,38,31,0.04)]">
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#A85C32]">Visual guide</div>
                <h3 className="font-serif font-semibold text-xl text-[#12301F] mt-0 mb-2">From products sold to waste recycled</h3>
                <svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration showing the EPR recycling loop from sales to collection and recycling" className="w-full h-auto block mt-3">
                  <defs>
                    <linearGradient id="bgGrad" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#FBFAF5"/>
                      <stop offset="100%" stopColor="#F4EFE3"/>
                    </linearGradient>
                    <linearGradient id="leafGrad" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#6E9C7D"/>
                      <stop offset="100%" stopColor="#1E4632"/>
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="760" height="330" rx="22" fill="url(#bgGrad)"/>
                  <circle cx="156" cy="145" r="84" fill="#E6EFE6"/>
                  <circle cx="156" cy="145" r="70" fill="none" stroke="#6E9C7D" strokeWidth="6" strokeDasharray="12 10"/>
                  <path d="M156 78 A67 67 0 0 1 220 142" fill="none" stroke="#A85C32" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M223 145 l-18 -11 2 22z" fill="#A85C32"/>
                  <path d="M200 198 A67 67 0 0 1 131 212" fill="none" stroke="#A85C32" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M125 214 l19 -9 -6 21z" fill="#A85C32"/>
                  <rect x="125" y="112" width="62" height="42" rx="6" fill="#FBFAF5" stroke="#1E4632" strokeWidth="3"/>
                  <rect x="138" y="121" width="36" height="18" rx="3" fill="#6E9C7D"/>
                  <rect x="148" y="154" width="16" height="14" rx="2" fill="#C79A3C"/>
                  <text x="156" y="236" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="13" fill="#445048">Sale → use → return</text>

                  <rect x="300" y="66" width="168" height="198" rx="20" fill="#FFFFFF" stroke="#D8D3C2"/>
                  <text x="384" y="99" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="#A85C32">TARGET TRACKER</text>
                  <text x="384" y="138" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="32" fontWeight="600" fill="#1E4632">60%</text>
                  <text x="384" y="164" textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="14" fill="#445048">collect and recycle</text>
                  <rect x="332" y="184" width="104" height="18" rx="9" fill="#E6EFE6"/>
                  <rect x="332" y="184" width="74" height="18" rx="9" fill="url(#leafGrad)"/>
                  <text x="384" y="226" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="#7A8078">verified through CPCB</text>

                  <g transform="translate(540 78)">
                    <circle cx="74" cy="86" r="74" fill="#FBFAF5" stroke="#E0D7C4" strokeWidth="2"/>
                    <rect x="45" y="48" width="58" height="56" rx="8" fill="#F1EFE6" stroke="#1E4632" strokeWidth="2"/>
                    <rect x="58" y="59" width="32" height="20" rx="3" fill="#6E9C7D"/>
                    <path d="M71 106 L66 121 H86 L81 106" fill="#C79A3C"/>
                    <path d="M27 84 A49 49 0 0 1 54 39" fill="none" stroke="#A85C32" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M59 32 l0 0 l-18 0 8 -15z" fill="#A85C32"/>
                    <path d="M112 84 A49 49 0 0 1 85 129" fill="none" stroke="#A85C32" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M80 136 l18 0 -8 15z" fill="#A85C32"/>
                    <path d="M85 45 A49 49 0 0 1 116 79" fill="none" stroke="#A85C32" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M123 83 l-8 -15 -9 14z" fill="#A85C32"/>
                  </g>

                  <text x="590" y="274" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="13" fill="#445048">Collect • verify • recycle • report</text>
                </svg>
                <div className="mt-3.5 p-3.5 sm:p-4 rounded-xl bg-[#FBF6E9] border border-[#E7D9A8] text-[#445048] text-[14.5px]">This picture shows the full EPR loop: products are sold, waste is collected back, recycling is verified, and the target is measured against certified recovery.</div>
              </div>

              <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-[14px] p-5 sm:p-5.5 shadow-[0_10px_24px_rgba(22,38,31,0.04)] flex flex-col">
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#A85C32]">Flow chart</div>
                <h3 className="font-serif font-semibold text-xl text-[#12301F] mt-0 mb-2">How the recycling target works</h3>
                <div className="flex flex-col gap-3 mt-3.5">
                  <div className="grid grid-cols-[38px_1fr] gap-3.5 items-start relative">
                    <div className="w-[38px] h-[38px] rounded-full bg-[#1E4632] text-[#F1EFE6] flex items-center justify-center font-mono text-sm shrink-0 shadow-[0_8px_18px_rgba(30,70,50,0.16)]">1</div>
                    <div>
                      <h4 className="font-semibold text-[#12301F] text-[15px] mt-0 mb-1">Product sales are recorded</h4>
                      <p className="text-[#445048] text-sm m-0">The company tracks the quantity of electronic products placed in the market during the year.</p>
                    </div>
                  </div>
                  <div className="h-3.5 w-[2px] bg-gradient-to-b from-[#6E9C7D] to-[rgba(110,156,125,0.15)] ml-[18px] relative after:content-[''] after:absolute after:-left-[3px] after:-bottom-[4px] after:border-l-[4px] after:border-l-transparent after:border-r-[4px] after:border-r-transparent after:border-t-[6px] after:border-t-[#6E9C7D]"></div>
                  <div className="grid grid-cols-[38px_1fr] gap-3.5 items-start relative">
                    <div className="w-[38px] h-[38px] rounded-full bg-[#1E4632] text-[#F1EFE6] flex items-center justify-center font-mono text-sm shrink-0 shadow-[0_8px_18px_rgba(30,70,50,0.16)]">2</div>
                    <div>
                      <h4 className="font-semibold text-[#12301F] text-[15px] mt-0 mb-1">CPCB assigns a target percentage</h4>
                      <p className="text-[#445048] text-sm m-0">Based on the E-Waste Rules, a percentage of end-of-life waste must be collected and recycled.</p>
                    </div>
                  </div>
                  <div className="h-3.5 w-[2px] bg-gradient-to-b from-[#6E9C7D] to-[rgba(110,156,125,0.15)] ml-[18px] relative after:content-[''] after:absolute after:-left-[3px] after:-bottom-[4px] after:border-l-[4px] after:border-l-transparent after:border-r-[4px] after:border-r-transparent after:border-t-[6px] after:border-t-[#6E9C7D]"></div>
                  <div className="grid grid-cols-[38px_1fr] gap-3.5 items-start relative">
                    <div className="w-[38px] h-[38px] rounded-full bg-[#1E4632] text-[#F1EFE6] flex items-center justify-center font-mono text-sm shrink-0 shadow-[0_8px_18px_rgba(30,70,50,0.16)]">3</div>
                    <div>
                      <h4 className="font-semibold text-[#12301F] text-[15px] mt-0 mb-1">Collection and recycling happen</h4>
                      <p className="text-[#445048] text-sm m-0">The producer works with authorised recyclers, dismantlers, or collection partners to process the waste.</p>
                    </div>
                  </div>
                  <div className="h-3.5 w-[2px] bg-gradient-to-b from-[#6E9C7D] to-[rgba(110,156,125,0.15)] ml-[18px] relative after:content-[''] after:absolute after:-left-[3px] after:-bottom-[4px] after:border-l-[4px] after:border-l-transparent after:border-r-[4px] after:border-r-transparent after:border-t-[6px] after:border-t-[#6E9C7D]"></div>
                  <div className="grid grid-cols-[38px_1fr] gap-3.5 items-start relative">
                    <div className="w-[38px] h-[38px] rounded-full bg-[#1E4632] text-[#F1EFE6] flex items-center justify-center font-mono text-sm shrink-0 shadow-[0_8px_18px_rgba(30,70,50,0.16)]">4</div>
                    <div>
                      <h4 className="font-semibold text-[#12301F] text-[15px] mt-0 mb-1">Certificates complete the compliance loop</h4>
                      <p className="text-[#445048] text-sm m-0">Verified recycling is turned into EPR certificates, closing any shortfall and keeping the record compliant.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 07 */}
          <section id="documents" className="py-13 border-b border-[#D8D3C2] scroll-mt-5">
            <h2 className="font-serif font-semibold text-2xl sm:text-[28px] text-[#12301F] mb-2 flex items-baseline gap-3.5">
              <span className="font-mono text-sm text-[#A85C32] tracking-[0.05em]">07</span>
              Documents required
            </h2>
            <p className="text-[#445048] my-3.5 text-base">The exact list varies slightly by category, but keep everything scanned, clear, and self-attested in PDF or image format — incomplete documentation is the single biggest reason applications get delayed.</p>
            <ul className="pl-0 my-4 list-none">
              <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">
                <strong className=" mx-4 text-[#16261F]">Company documents:</strong> PAN, GST Certificate, and CIN or IEC Certificate
              </li>
              <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">
                <strong className="mx-4 text-[#16261F]">Environmental clearances:</strong> CTE/CTO and Hazardous Waste authorization, where applicable
              </li>
              <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">
                <strong className="mx-4 text-[#16261F]">EPR Plan</strong> and agreements with dealers, collection centers, dismantlers or recyclers
              </li>
              <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">
                <strong className="mx-4 text-[#16261F]">Facility proof:</strong> geo-tagged photographs and a short operational video
              </li>
              <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">
                <strong className="mx-4 text-[#16261F]">Self-declaration letter</strong> confirming data authenticity and safety compliance
              </li>
              <li className="relative pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">
                <strong className="mx-4 text-[#16261F]">For recyclers/refurbishers:</strong> Relevant State Pollution Control Board authorization and consent documents, where applicable
              </li>
            </ul>
          </section>

          {/* Section 08 */}
          <section id="process" className="py-13 border-b border-[#D8D3C2] scroll-mt-5">
            <h2 className="font-serif font-semibold text-2xl sm:text-[28px] text-[#12301F] mb-2 flex items-baseline gap-3.5">
              <span className="font-mono text-sm text-[#A85C32] tracking-[0.05em]">08</span>
              The registration process, step by step
            </h2>
            <p className="text-[#445048] my-3.5 text-base">The entire registration process is conducted online through the CPCB's dedicated EPR portal. Processing time depends on the completeness of the application and CPCB scrutiny, so missing documents or unclear details can take considerably longer.</p>
            <div className="flex flex-col gap-0 mt-7">

              <div className="grid grid-cols-[56px_1fr] gap-5 relative">
                <div className="flex flex-col items-center">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#1E4632] text-[#F1EFE6] flex items-center justify-center font-mono font-medium text-base shrink-0 z-10">1</div>
                  <div className="w-[2px] flex-1 bg-[#6E9C7D] min-h-[36px]"></div>
                </div>
                <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-xl p-4 sm:p-[22px] mb-5.5">
                  <h3 className="font-serif font-semibold text-[17px] text-[#12301F] mt-0 mb-1.5">Create an account on the CPCB portal</h3>
                  <p className="text-[#445048] text-[15px] mt-0 mb-2">Visit the official CPCB EPR portal and sign up using your company's PAN, GST number, email ID and mobile number.</p>
                  <ul className="pl-0 mt-2 mb-0 list-none">
                    <li className=" pl-6.5 mb-2.5 text-[#445048] text-sm before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Verify your account through the OTP or email link sent to you</li>
                    <li className=" pl-6.5 mb-2.5 text-[#445048] text-sm before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Set up your login credentials securely — this account will be used for all future filings too</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-[56px_1fr] gap-5 relative">
                <div className="flex flex-col items-center">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#1E4632] text-[#F1EFE6] flex items-center justify-center font-mono font-medium text-base shrink-0 z-10">2</div>
                  <div className="w-[2px] flex-1 bg-[#6E9C7D] min-h-[36px]"></div>
                </div>
                <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-xl p-4 sm:p-[22px] mb-5.5">
                  <h3 className="font-serif font-semibold text-[17px] text-[#12301F] mt-0 mb-1.5">Fill out the application form</h3>
                  <p className="text-[#445048] text-[15px] mt-0 mb-2">Log in and choose your category — Manufacturer, Producer, Refurbisher or Recycler.</p>
                  <ul className="pl-0 mt-2 mb-0 list-none">
                    <li className=" pl-6.5 mb-2.5 text-[#445048] text-sm before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Enter company details, product categories, and estimated quantities of electronic equipment placed in the market</li>
                    <li className=" pl-6.5 mb-2.5 text-[#445048] text-sm before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Submit your EPR Plan — your strategy for how you'll collect and recycle e-waste to meet yearly targets</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-[56px_1fr] gap-5 relative">
                <div className="flex flex-col items-center">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#1E4632] text-[#F1EFE6] flex items-center justify-center font-mono font-medium text-base shrink-0 z-10">3</div>
                  <div className="w-[2px] flex-1 bg-[#6E9C7D] min-h-[36px]"></div>
                </div>
                <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-xl p-4 sm:p-[22px] mb-5.5">
                  <h3 className="font-serif font-semibold text-[17px] text-[#12301F] mt-0 mb-1.5">Upload the required documents</h3>
                  <p className="text-[#445048] text-[15px] mt-0 mb-2">Upload all documents listed above in the specified format.</p>
                  <ul className="pl-0 mt-2 mb-0 list-none">
                    <li className=" pl-6.5 mb-2.5 text-[#445048] text-sm before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Double-check that company names and addresses match exactly across every document</li>
                    <li className=" pl-6.5 mb-2.5 text-[#445048] text-sm before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Make sure geo-tagged photos and videos are recent, clear, and actually show the registered facility</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-[56px_1fr] gap-5 relative">
                <div className="flex flex-col items-center">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#1E4632] text-[#F1EFE6] flex items-center justify-center font-mono font-medium text-base shrink-0 z-10">4</div>
                  <div className="w-[2px] flex-1 bg-[#6E9C7D] min-h-[36px]"></div>
                </div>
                <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-xl p-4 sm:p-[22px] mb-5.5">
                  <h3 className="font-serif font-semibold text-[17px] text-[#12301F] mt-0 mb-1.5">Pay the registration fee</h3>
                  <p className="text-[#445048] text-[15px] mt-0 mb-2">Pay the applicable fee through the portal's online payment option.</p>
                  <ul className="pl-0 mt-2 mb-0 list-none">
                    <li className=" pl-6.5 mb-2.5 text-[#445048] text-sm before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Fees vary by business size, category and turnover — check the current fee structure on the portal before paying</li>
                    <li className=" pl-6.5 mb-2.5 text-[#445048] text-sm before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Keep the payment receipt safe; you'll need it for your records and any future audit</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-[56px_1fr] gap-5 relative">
                <div className="flex flex-col items-center">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#1E4632] text-[#F1EFE6] flex items-center justify-center font-mono font-medium text-base shrink-0 z-10">5</div>
                  <div className="w-[2px] flex-1 bg-[#6E9C7D] min-h-[36px]"></div>
                </div>
                <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-xl p-4 sm:p-[22px] mb-5.5">
                  <h3 className="font-serif font-semibold text-[17px] text-[#12301F] mt-0 mb-1.5">CPCB reviews the application</h3>
                  <p className="text-[#445048] text-[15px] mt-0 mb-2">CPCB verifies your application and supporting documents.</p>
                  <ul className="pl-0 mt-2 mb-0 list-none">
                    <li className=" pl-6.5 mb-2.5 text-[#445048] text-sm before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">They may reach out with queries or request additional documents if anything is missing or unclear</li>
                    <li className=" pl-6.5 mb-2.5 text-[#445048] text-sm before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Respond promptly — delayed replies are one of the most common causes of stalled applications</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-[56px_1fr] gap-5 relative">
                <div className="flex flex-col items-center">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#1E4632] text-[#F1EFE6] flex items-center justify-center font-mono font-medium text-base shrink-0 z-10">6</div>
                </div>
                <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-xl p-4 sm:p-[22px] mb-5.5">
                  <h3 className="font-serif font-semibold text-[17px] text-[#12301F] mt-0 mb-1.5">Approval and EPR certificate</h3>
                  <p className="text-[#445048] text-[15px] mt-0 mb-2">Once everything checks out, CPCB issues your EPR Certificate/Authorization.</p>
                  <ul className="pl-0 mt-2 mb-0 list-none">
                    <li className=" pl-6.5 mb-2.5 text-[#445048] text-sm before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Valid for a set number of years and must be renewed before expiry</li>
                    <li className=" pl-6.5 mb-2.5 text-[#445048] text-sm before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">You're now officially authorized to manufacture, import or sell your electronic products in India</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* Section 09 */}
          <section id="help" className="py-13 border-b border-[#D8D3C2] scroll-mt-5">
            <h2 className="font-serif font-semibold text-2xl sm:text-[28px] text-[#12301F] mb-2 flex items-baseline gap-3.5">
              <span className="font-mono text-sm text-[#A85C32] tracking-[0.05em]">09</span>
              How EPR Nexuss Can Help You with E-Waste EPR Registration
            </h2>
            <p className="text-[#445048] my-3.5 text-base">Navigating E-Waste EPR registration can be complex. EPR Nexuss provides complete consultancy from registration to ongoing compliance.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-[14px] p-6 sm:p-[26px] border-t-3 border-t-[#1E4632]">
                <h3 className="font-serif font-semibold text-xl text-[#12301F] mt-0 mb-2.5">Our Services</h3>
                <ul className="pl-0 my-4 list-none">
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">CPCB E-Waste EPR Registration</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Documentation Support</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">EPR Action Plan</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Portal Filing</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">CPCB Query Handling</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Annual Compliance & Returns</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Renewal & Amendments</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Authorized Recycler Support</li>
                </ul>
              </div>
              <div className="bg-[#FBFAF5] border border-[#D8D3C2] rounded-[14px] p-6 sm:p-[26px] border-t-3 border-t-[#6E9C7D]">
                <h3 className="font-serif font-semibold text-xl text-[#12301F] mt-0 mb-2.5">Why Choose EPR Nexuss?</h3>
                <ul className="pl-0 my-4 list-none">
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Experienced EPR Consultants</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Fast Processing</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Transparent Support</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">Pan-India Services</li>
                  <li className=" pl-6.5 mb-2.5 text-[#445048] text-[15.5px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#6E9C7D] before:rounded-[2px] before:rotate-45">End-to-End Compliance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="faq" className="py-13 border-b-0 scroll-mt-5">
            <h2 className="font-serif font-semibold text-2xl sm:text-[28px] text-[#12301F] mb-2 flex items-baseline gap-3.5">
              <span className="font-mono text-sm text-[#A85C32] tracking-[0.05em]">10</span>
              Frequently asked questions
            </h2>
            <div className="border-b border-[#D8D3C2] py-4.5">
              <h3 className="font-serif font-semibold text-[16.5px] text-[#12301F] mt-0 mb-1.5">How long does EPR e-waste registration usually take?</h3>
              <p className="text-[#445048] text-[15px] m-0">Processing time depends on the completeness of the application and CPCB scrutiny. Missing documents or unclear details can extend it significantly.</p>
            </div>
            <div className="border-b border-[#D8D3C2] py-4.5">
              <h3 className="font-serif font-semibold text-[16.5px] text-[#12301F] mt-0 mb-1.5">Who issues the EPR registration, and who generates EPR certificates?</h3>
              <p className="text-[#445048] text-[15px] m-0">The Central Pollution Control Board (CPCB), under the Ministry of Environment, Forest and Climate Change, grants the EPR registration certificate. Registered recyclers generate EPR certificates on the portal.</p>
            </div>
            <div className="border-b border-[#D8D3C2] py-4.5">
              <h3 className="font-serif font-semibold text-[16.5px] text-[#12301F] mt-0 mb-1.5">What should importers of electronics check first?</h3>
              <p className="text-[#445048] text-[15px] m-0">Importers should check the exact product category and obligation on the CPCB portal, because the applicable requirement depends on the item, the entity type, and the current rules.</p>
            </div>
            <div className="border-b border-[#D8D3C2] py-4.5">
              <h3 className="font-serif font-semibold text-[16.5px] text-[#12301F] mt-0 mb-1.5">Do small or new businesses get any relief on targets?</h3>
              <p className="text-[#445048] text-[15px] m-0">Businesses with shorter sales histories may be placed on a phased obligation schedule under the Rules. The exact applicability should be checked against the current CPCB guidance for the product category.</p>
            </div>
            <div className="border-b-0 py-4.5">
              <h3 className="font-serif font-semibold text-[16.5px] text-[#12301F] mt-0 mb-1.5">Can I buy my way out of a shortfall entirely?</h3>
              <p className="text-[#445048] text-[15px] m-0">You can cover a shortfall by purchasing EPR certificates from registered recyclers, but this is generally more costly than building your own efficient collection network, and doesn't remove the need for accurate reporting.</p>
            </div>
          </section>

          <footer className="text-center pt-9 text-[#8C9188] text-[13px]">
            A complete, simple guide to EPR E-Waste Registration under the E-Waste (Management) Rules, 2022.
          </footer>

        </div>
      </main>
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