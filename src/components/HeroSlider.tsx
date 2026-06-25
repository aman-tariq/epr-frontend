import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";

import hero1 from "@/assets/hero/pp1.jpg";
import hero2 from "@/assets/hero/ss1.jpg";
import hero3 from "@/assets/hero-1.jpg";
import hero4 from "@/assets/hero-2.jpg";
import hero5 from "@/assets/hero/epr-pp.png";
import hero6 from "@/assets/hero/epr-ss.png";
import hero7 from "@/assets/hero/feedstock-pp.png";
import hero8 from "@/assets/hero/network-ss.png";
import hero9 from "@/assets/company-banner.jpg";
import hero10 from "@/assets/recycling-process.jpg";
import hero11 from "@/assets/e-waste-types.jpg";
import hero12 from "@/assets/epr-trading-platform.jpg";
import hero13 from "@/assets/showcase-1.jpg";
import hero14 from "@/assets/showcase-2.jpg";

const slides = [
  {
    image: hero1,
    title: "Stuck Before Starting?",
    subtitle:
      "CPCB APPROVALS • PROCESS DESIGN • MACHINERY SELECTION • DPR",
    description:
      "You have ₹2–10 crore ready to invest in a recycling plant — but CPCB norms, SPCB approvals, hydrometallurgy process design and machinery selection are keeping you stuck at square one.",
    buttonText: "See How We Solve It",
    buttonLink: "/services/recycling-setups",
    isPainPoint: true,
  },
  {
    image: hero2,
    title: "End-to-End Plant Setup",
    subtitle:
      "BANK-APPROVED DPR • CPCB/SPCB CLEARANCE • LIVE DASHBOARD",
    description:
      "We deliver bank-approved DPRs, CPCB & SPCB clearances, BATX-grade machinery commissioning, and live digital dashboards — from groundbreaking to first production batch.",
    buttonText: "Get Plant Setup Services",
    buttonLink: "/services/recycling-setups",
    isSolution: true,
  },
  // Banner 2A — Pain
  {
    image: hero3,
    title: "Operations Out Of Control?",
    subtitle:
      "NO REAL-TIME VISIBILITY • PROCESS GAPS • MARGIN LEAKAGE • NO SOPs",
    description:
      "Your plant is running — but yield is inconsistent, shift teams operate differently, energy costs are unclear, and nobody can tell you in real time whether today's production is on target or bleeding margin.",
    buttonText: "Fix Plant Operations",
    buttonLink: "/services/operations-management",
    isPainPoint: true,
  },

  // Banner 2B — Solution
  {
    image: hero4,
    title: "Smart Plant Operations",
    subtitle:
      "LIVE KPI DASHBOARDS • SHIFT SOPs • ENERGY TRACKING • CHECKLISTS",
    description:
      "We install digital display boards showing live KPIs — daily throughput, yield percentage, energy cost per tonne, and shift-wise performance — backed by role-specific SOPs and commissioning checklists your team actually follows.",
    buttonText: "Optimize Operations",
    buttonLink: "/services/operations-management",
    isSolution: true,
  },
  // Banner 3A — Pain Point
  {
    image: hero5,
    title: "EPR Compliance Chaos?",
    subtitle:
      "CPCB PORTAL • CREDIT ISSUES • RECYCLER VERIFICATION • PENALTY RISK",
    description:
      "Your brand has mandatory EPR targets under plastic, e-waste or battery rules — but CPCB's credit portal is complex, verified recyclers are hard to find, and one wrong filing can lead to heavy penalties and operational risk.",
    buttonText: "Fix Compliance Issues",
    buttonLink: "/services/epr-services",
    isPainPoint: true,
  },

  // Banner 3B — Solution
  {
    image: hero6,
    title: "Complete EPR Compliance",
    subtitle:
      "EPR CREDIT TRADING • VERIFIED RECYCLERS • LIVE DASHBOARD",
    description:
      "We manage EPR credits across plastic, e-waste, battery and tyre categories — connecting you with CPCB-registered recyclers, handling annual return filings, and providing a live compliance dashboard for complete transparency.",
    buttonText: "Get EPR Support",
    buttonLink: "/services/epr-services",
    isSolution: true,
  },
  // Banner 4A — Pain Point
  {
    image: hero7,
    title: "Feedstock Supply Problems?",
    subtitle:
      "LOW UTILISATION • INCONSISTENT FEEDSTOCK • AGGREGATOR ISSUES",
    description:
      "Your hydrometallurgy or e-waste shredding line has the capacity — but operations are running below potential because feedstock is inconsistent, aggregators are unreliable, and there is no visibility into daily inflow versus production demand.",
    buttonText: "Stabilize Material Supply",
    buttonLink: "/services/e-waste-battery-trading",
    isPainPoint: true,
  },

  // Banner 4B — Solution
  {
    image: hero8,
    title: "Reliable Waste Supply Network",
    subtitle:
      "DAILY PROCUREMENT • MATERIAL TRACKING • COST VISIBILITY",
    description:
      "We supply e-waste and battery waste through a trusted network built over 20 years — with live procurement tracking, inbound tonnage visibility, material grade updates, and landed cost forecasting to maintain consistent plant utilisation.",
    buttonText: "Secure Feedstock Supply",
    buttonLink: "/services/e-waste-battery-trading",
    isSolution: true,
  },
  // Banner 5A — Pain Point
  // {
  //   image: hero9,
  //   title: "No Visibility, No Leads?",
  //   subtitle:
  //     "LOW BRAND RECOGNITION • DRY PIPELINE • LOST OPPORTUNITIES",
  //   description:
  //     "You have spent years building a product or service that genuinely works — but your pipeline is dry, your phone is not ringing, and weaker competitors are winning contracts simply because they are more visible in the market.",
  //   buttonText: "Increase Brand Visibility",
  //   buttonLink: "/services/business-growth",
  //   isPainPoint: true,
  // },

  // Banner 5B — Solution
  // {
  //   image: hero10,
  //   title: "Turn Visibility Into Growth",
  //   subtitle:
  //     "SEO • DIGITAL CAMPAIGNS • LEAD CONVERSION SYSTEM",
  //   description:
  //     "We help the right buyers discover your business through targeted digital campaigns, SEO-driven content, and lead conversion systems that transform your brand into the most trusted name in your industry.",
  //   buttonText: "Grow My Business",
  //   buttonLink: "/services/business-growth",
  //   isSolution: true,
  // },

  // Banner 6A — Pain Point
  // {
  //   image: hero11,
  //   title: "Leads But No Conversions?",
  //   subtitle:
  //     "COLD LEADS • LONG SALES CYCLES • LOST REVENUE",
  //   description:
  //     "You receive enquiries and attend meetings — but deals are not closing. Without a structured sales pipeline, leads go cold, follow-ups are missed, and revenue becomes inconsistent while competitors close faster.",
  //   buttonText: "Fix My Sales Process",
  //   buttonLink: "/services/business-growth",
  //   isPainPoint: true,
  // },

  // Banner 6B — Solution
  // {
  //   image: hero12,
  //   title: "Built to Close Deals",
  //   subtitle:
  //     "CRM SYSTEM • FOLLOW-UP AUTOMATION • PIPELINE MANAGEMENT",
  //   description:
  //     "We build a complete sales pipeline for your business — including CRM setup, automated follow-ups, lead tracking, and conversion management — so every enquiry moves systematically toward closure.",
  //   buttonText: "Build Sales Pipeline",
  //   buttonLink: "/services/business-growth",
  //   isSolution: true,
  // },

  // Banner 7A — Pain Point
  // {
  //   image: hero13,
  //   title: "Growth Has Stopped?",
  //   subtitle:
  //     "REFERRAL DEPENDENCY • GROWTH PLATEAU • NO DIGITAL PRESENCE",
  //   description:
  //     "Your business was built on referrals and relationships — but growth has plateaued. Without a strong digital presence and predictable lead generation system, finding new clients becomes increasingly difficult.",
  //   buttonText: "Restart Business Growth",
  //   buttonLink: "/services/business-growth",
  //   isPainPoint: true,
  // },

  // Banner 7B — Solution
  // {
  //   image: hero14,
  //   title: "Scale Beyond Referrals",
  //   subtitle:
  //     "DIGITAL BRANDING • QUALIFIED LEADS • GROWTH PARTNERSHIP",
  //   description:
  //     "We become your growth partner by building your digital brand, generating qualified leads through SEO and targeted campaigns, and supporting deal closures with structured sales systems designed for scale.",
  //   buttonText: "Scale My Business",
  //   buttonLink: "/services/business-growth",
  //   isSolution: true,
  // },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 12000);

    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        setOffsetY(window.scrollY * 0.3);
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const currentSlide = slides[current];

  const isPain = currentSlide.isPainPoint;
  const isSolution = currentSlide.isSolution;

  // ================= CUSTOM STYLES =================

  const customStyles = {
    // Heading
    headingColor: "text-white",
    headingHighlight: "text-yellow-200",
    headingFont: "'Playfair Display', serif",
    headingShadow:
      "0px 5px 35px rgba(0,0,0,0.95)",

    // Paragraph
    paragraphColor: "text-slate-100 ",
    paragraphFont: "'Poppins', sans-serif",
    paragraphShadow:
      "0px 2px 12px rgba(0,0,0,0.85)",

    // Badge
    badgeText: "text-white",
    badgeBg: "bg-white/10",
    badgeBorder: "border-white/20",

    // Buttons
    primaryBtn:
      "bg-yellow-300 hover:bg-yellow-200 text-black",

    solutionBtn:
      "bg-emerald-500 hover:bg-emerald-400 text-white",

    secondaryBtn:
      "border-white/30 text-white hover:bg-white/10 hover:border-white/60",

    // Overlay
    overlayOne: "bg-white/20",

    overlayTwo:
      "bg-gradient-to-r from-black/5 via-black/35 to-black/20",

    overlayThree:
      "bg-gradient-to-t from-black/50 via-black/10 to-black/20",
      
  };

  return (
    <section className="relative h-screen min-h-[750px] w-full overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full h-full object-cover will-change-transform"
            style={{
              transform: `translateY(${offsetY}px)`,
            }}
          />

          {/* Dark Premium Overlay */}
          {/* Extra Dark Cinematic Overlay */}
          <div className={`absolute inset-0 ${customStyles.overlayOne}`} />

          <div className={`absolute inset-0 ${customStyles.overlayTwo}`} />

          <div className={`absolute inset-0 ${customStyles.overlayThree}`} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="max-w-4xl"
            >
              {/* Badge */}
              <div className="mb-7">
                <span
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs md:text-sm font-medium uppercase tracking-[2px] border backdrop-blur-md text-white shadow-lg ${isPain
                      ? "bg-red-400/15 border-red-200/30"
                      : isSolution
                        ? "bg-emerald-300/15 border-emerald-100/30"
                        : "bg-white/10 border-white/20"
                    }`}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {isPain && (
                    <AlertTriangle
                      size={18}
                      className="text-red-200"
                    />
                  )}

                  {isSolution && (
                    <CheckCircle
                      size={18}
                      className="text-blue-200"
                    />
                  )}

                  {currentSlide.subtitle}
                </span>
              </div>

              {/* Heading */}
              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-6xl
                  lg:text-[66px]
                  font-bold
                  leading-[0.95]
                  mb-6 md:mb-8
                  tracking-tight
                  text-white-900
                "
                style={{
                  fontFamily: "'Playfair Display', serif",
                  textShadow: "0px 5px 35px rgba(0,0,0,0.95)",
                }}
              >
                <span className="text-white">
                  {currentSlide.title
                    .split(" ")
                    .slice(0, -1)
                    .join(" ")}
                </span>{" "}

                <span className="text-green-500">
                  {currentSlide.title.split(" ").slice(-1)}
                </span>
              </h1>

              {/* Description */}
              <p
                className={`
    ${customStyles.paragraphColor}
    text-sm
sm:text-base
md:text-xl
lg:text-2xl
    leading-relaxed
    mb-5 md:mb-8
    max-w-3xl
    font-light
    tracking-wide
  `}
                style={{
                  fontFamily: customStyles.paragraphFont,
                  textShadow: customStyles.paragraphShadow,
                  color: "#ffffff",
                }}
              >
                {currentSlide.description}
              </p>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Primary Button */}
                {/* Primary Button */}
                <Link
                  to={currentSlide.buttonLink}
                  className={`
    group
    ml-2
    px-6
sm:px-8
md:px-10
py-3
md:py-5
rounded-xl
md:rounded-2xl
text-sm
sm:text-base
md:text-lg
    transition-all
    duration-300
    flex
    items-center
    justify-center
    gap-3
    shadow-[0_10px_40px_rgba(0,0,0,0.45)]
    hover:scale-[1.04]
    border
    backdrop-blur-xl
    relative
    overflow-hidden
    ${isSolution
                      ? `
          bg-gradient-to-r
          from-green-400
          via-emerald-300
          to-cyan-300
          hover:from-emerald-300
          hover:via-cyan-300
          hover:to-sky-300
          border-white/20
          text-white-900
        `
                      : `
          bg-gradient-to-r
          from-blue-700
          via-blue-500
          to-blue-900
          hover:from-green-200
          hover:via-green-100
          hover:to-green-100
          border-yellow-100/40
          text-black
        `
                    }
  `}
                  style={{
                    fontFamily: "'Montserrat', 'Poppins', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    textShadow: isSolution
                      ? "0px 1px 10px rgba(0,0,0,0.35)"
                      : "0px 1px 8px rgba(255,255,255,0.2)",
                  }}
                >
                  {/* Shine Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />

                  <span className="relative z-10">
                    {currentSlide.buttonText}
                  </span>

                  <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>

                {/* Secondary Button */}
                <Link
                  to="/services"
                  className="
                    px-6
                sm:px-8
                md:px-10
                py-3
                md:py-5
                text-sm
                sm:text-base
                md:text-lg
                    border
                    border-white/30
                    text-white
                    font-semibold
                    rounded-2xl
                    transition-all
                    hover:bg-white/10
                    backdrop-blur-md
                    hover:border-white/60
                  "
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        
        className={`
          absolute
          left-1
          md:left-6
          lg:left-10          
          top-1/2
          -translate-y-1/2
          z-20
          w-8
          lg:w-14
          h-8
          lg:h-14
          rounded-full
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          flex
          items-center
          justify-center
          text-white
          hover:bg-white/20
          transition-all
          duration-300
        `}
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        
        className={`
          
          absolute
          right-1
          md:right-6
          lg:right-10
          top-1/2
          -translate-y-1/2
          z-20
          w-8
          lg:w-14
          h-8
          lg:h-14
          rounded-full
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          flex
          items-center
          justify-center
          text-white
          hover:bg-white/20
          transition-all
          duration-300
        `}
      >
        <ChevronRight size={28} />
      </button>

      {/* Progress Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all duration-300 ${i === current
                ? "w-12 bg-yellow-300"
                : "w-3 bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;