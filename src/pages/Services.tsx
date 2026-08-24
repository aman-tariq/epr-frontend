import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import serviceVisual from "@/assets/epr-services-banner.jpg";
import ServicesGrid from "@/components/ServicesGrid";

const Services = () => {
  return (
    <>
      <Seo
        title="EPR Compliance Services"
        description="Complete CPCB approved EPR services for Plastic, Lithium Battery, E-Waste, Vehicle Scrapping, Solar Panel, and Tyre recycling with full documentation support."
        keywords={[
          "EPR Services",
          "EPR Plastic",
          "Battery Recycling",
          "E-Waste Management",
          "Solar Panel Recycling",
          "Tyre EPR",
          "EPR Services India",
          "CPCB EPR Compliance",
          "Plastic EPR Services",
          "Battery EPR Recycling",
          "Solar Panel Recycling Services",
          "Tyre EPR",
          "Tyre Scrapping Services",
          "Tyre recycling services provider in India",
          "best EPR tyre recycling services in India",
          "ELV Vehicle Scrapping",
          "EPR Credit Trading",
          "Waste Recycling Services",
          "best wste recycling services in India",
          "EPR Documentation",
          "what are the services in EPR",
          "EPR service providers",
          "How can i get EPR compliance",
          "best EPR collection services Providers in India",
          "EPR recycling services provider in India",
          "EPR waste management services",
          "EPR compliance services for manufacturers",
          "EPR compliance services for importers",
        ]}
        url="https://eprnexuss.com/services"
        type="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-28 text-white">
        <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs sm:text-sm font-semibold tracking-wide text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 rounded-full">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                CPCB Approved & Regulatory Compliant
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                End-to-End <span className="text-emerald-400">EPR Compliance</span> & Recycling Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
                Simplifying Extended Producer Responsibility for Brand Owners, Importers, and Manufacturers across India with seamless portal registration, credit trading, and audit-ready documentation.
              </p>

              {/* Feature Highlights */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
                {[
                  "100% CPCB Portal Registration",
                  "End-to-End Credit Trading",
                  "Complete Documentation",
                  "Nationwide Recycling Network",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 justify-center lg:justify-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="#services-grid"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-colors duration-200 rounded-lg shadow-lg shadow-emerald-500/20"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors duration-200 rounded-lg"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Right Visual Column */}
            

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <div id="services-grid">
        <ServicesGrid />
      </div>
    </>
  );
};

export default Services;