  import Seo from "@/components/Seo";
  import { motion } from "framer-motion";
  import { Link, useParams, Navigate } from "react-router-dom";
  import { ArrowLeft, CheckCircle, Mail, ShieldCheck, Sparkles, ClipboardList } from "lucide-react";
  import serviceBanner from "@/assets/epr-services-banner.jpg";
  import recyclingProcess from "@/assets/recycling-process.jpg";
  import { services } from "@/lib/services";
  import LithiumBatteryBlog from "@/components/services/recycling-setups/LithiumBatteryBlog";
  import EWasteBlog from "@/components/services/recycling-setups/EWasteBlog";
  import VehicleScrappingBlog from "@/components/services/recycling-setups/VehicleScrappingBlog";
  import SolarPanelBlog from "@/components/services/recycling-setups/SolarPanelBlog";
  import PlasticRecyclingBlog from "@/components/PlasticRecyclingBlog";
  import BusinessGrowth from "./BusinessGrowth";
  import SetupCommissioningDocumentation from "../components/services/plant operation intelligence/SetupCommissioningDocumentation";
  import ScaleAndGrowthSystems from "../components/services/plant operation intelligence/ScaleAndGrowthSystems";import OperationPerformanceManagement from "../components/services/plant operation intelligence/OperationPerformanceManagement";  import StickyContactForm from "@/components/StickyContactForm";
import BusinessGrowthAndLeadGeneration from "../components/services/business growth and lead generation/BusinessGrowthAndLeadGeneration";
import EprElv from "../components/services/epr credits/EprElv"
import EprCreditsMetalsBlog from "@/components/services/epr credits/EprMetals";
import EprCreditsPlasticsBlog from "@/components/services/epr credits/EprPlastic";
import EprCreditsTyreWasteBlog from "@/components/services/epr credits/EprTyre";
import EprUsedOilBlog from "@/components/services/epr credits/EprUsedOil";
  const ServiceDetails = () => {
    const { serviceSlug } = useParams();
    const service = services.find((item) => item.slug === serviceSlug);

    if (!service) {
      return <Navigate replace to="/services" />;
    }

    // Special Full Blog Pages
    if (service.slug === "recycling-lithium-ion-battery" || service.slug === "epr-lithium") {
      return <LithiumBatteryBlog />;
    }

    if (service.slug === "recycling-ewaste") {
      return <EWasteBlog />;
    }

    if (service.slug === "epr-plastic") {
      return <EprCreditsPlasticsBlog />;
    }

    if (service.slug === "epr-electronic") {
      return <EWasteBlog />;
    }

    if (service.slug === "epr-tyre") {
      return <EprCreditsTyreWasteBlog />;
    }

    if (service.slug === "epr-elv") {
      return <EprElv />;
    }

    if (service.slug === "epr-used-oil") {
      return <EprUsedOilBlog />;
    }

    if (service.slug === "epr-metals") {
      return <EprCreditsMetalsBlog/>;
    }

    if (service.slug === "epr-battery") {
      return <EWasteBlog />;
    }

    if (service.slug === "recycling-vehicles-scrapping") {
      return <VehicleScrappingBlog />;
    }

    if (service.slug === "recycling-solar-panel") {
      return <SolarPanelBlog />;
    }

    if (service.slug === "recycling-plastic") {
      return <PlasticRecyclingBlog />;
    }

    if (service.slug === "business-growth") {
      return <BusinessGrowthAndLeadGeneration />;
    }

    if (service.slug === "setup-and-commissioning-documentation") {
      return <SetupCommissioningDocumentation />;
    }

    if (service.slug === "scale-and-growth-systems") {
      return <ScaleAndGrowthSystems />;
    }

    const getScopedBlogHtml = (html: string) => {
      const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
      const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      const rawCss = styleMatch?.[1] ?? "";
      const rawBody = bodyMatch?.[1] ?? html;

      const normalizeSelectors = (css: string) => {
        return css
          .replace(/:root/g, ".embedded-blog")
          .replace(/\bhtml\b/g, ".embedded-blog")
          .replace(/\bbody\b/g, ".embedded-blog")
          .replace(/\*\s*\{/g, ".embedded-blog * {");
      };

      const scopeCssRules = (css: string): string => {
        const trimmed = css.trim();
        const rules = trimmed.split("}");

        return rules
          .map((rule) => {
            const parts = rule.split("{");
            if (parts.length < 2) return "";

            const selector = parts[0].trim();
            const body = parts.slice(1).join("{").trim();
            if (!selector || !body) return "";

            if (selector.startsWith("@")) {
              return `${selector} { ${scopeCssRules(body)} }`;
            }

            const scopedSelectors = selector
              .split(",")
              .map((sel) => {
                const trimmedSelector = sel.trim();
                if (trimmedSelector.startsWith(".embedded-blog") || trimmedSelector.startsWith("@")) {
                  return trimmedSelector;
                }
                return `.embedded-blog ${trimmedSelector}`;
              })
              .join(", ");

            return `${scopedSelectors} { ${body} }`;
          })
          .join(" ");
      };

      const scopeCss = scopeCssRules(normalizeSelectors(rawCss));
      const overflowFix = `
        .embedded-blog {
          width: 100%;
          max-width: 100%;
          min-width: 0 !important;
          box-sizing: border-box;
          overflow-x: hidden;
        }
        .embedded-blog *, .embedded-blog *::before, .embedded-blog *::after {
          box-sizing: inherit;
          min-width: 0 !important;
        }
        .embedded-blog .wrap,
        .embedded-blog .blog-container,
        .embedded-blog .page,
        .embedded-blog .container {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .embedded-blog img,
        .embedded-blog video,
        .embedded-blog iframe,
        .embedded-blog svg {
          max-width: 100% !important;
          width: 100% !important;
          height: auto !important;
        }
        .embedded-blog table {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          table-layout: auto !important;
        }
        .embedded-blog .grid,
        .embedded-blog .layout,
        .embedded-blog .grid-2,
        .embedded-blog .story-grid,
        .embedded-blog .two-col,
        .embedded-blog .flow,
        .embedded-blog .case-grid,
        .embedded-blog .mini-grid,
        .embedded-blog .chart-card,
        .embedded-blog .db-grid,
        .embedded-blog .visual-grid {
          grid-template-columns: 1fr !important;
        }
        .embedded-blog .hero,
        .embedded-blog .card,
        .embedded-blog .section,
        .embedded-blog .table-wrap,
        .embedded-blog .card.section {
          overflow-x: hidden !important;
          min-width: 0 !important;
        }
      `;

      return `<style>${scopeCss}</style><style>${overflowFix}</style><div class="embedded-blog">${rawBody}</div>`;
    };

    // Operation Performance Management Special Case
    if (service.slug === "operationperformancemanagement") {
      return <OperationPerformanceManagement />;
    }

    // ==================== MAIN SERVICE DETAIL PAGE ====================
    return (
      <>
      <Seo
  title={service.title}
  description={service.desc || service.subtitle}
  keywords={[service.title, "EPR Service", "CPCB Compliance"]}
  url={`https://eprnexuss.com/services/${serviceSlug}`}
  type="service"
/>
        {/* Dark Hero */}
        <section className="pt-32 pb-24 bg-[#0A1428] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428] via-[#0F1F3A] to-[#1A2A4D]" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl"
              >
                <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20">
                  Service Details
                </span>

                <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
                  {service.title}
                </h1>

                <p className="text-lg text-white/80 mt-6 leading-relaxed">
                  {service.subtitle}
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {service.features?.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-3xl p-5">
                      <CheckCircle className="h-6 w-6 text-[#22c55e] mt-0.5 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 hover:border-white/60 bg-white/5 px-6 py-3.5 text-white font-medium transition"
                  >
                    <ArrowLeft size={18} /> Back to Services
                  </Link>
                  <a
                    href="mailto:info@eprnexuss.com"
                    className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] hover:bg-[#16a34a] px-8 py-3.5 text-black font-semibold transition"
                  >
                    <Mail size={18} /> Request a Quote
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hidden lg:block rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img src={serviceBanner} alt={service.title} className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Light Content */}
              {/* Main Light Content - Better Sticky Right Sidebar */}
        <section className="py-20 bg-[#F8FAFC] overflow-visible">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.55fr] items-start">
              
              {/* Main Content Area */}
              <div className="space-y-10">
                {/* Overview */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl bg-white border border-gray-100 p-10 shadow-sm">
                  <h2 className="text-3xl font-semibold text-gray-900">Comprehensive service overview</h2>
                  <p className="mt-5 text-gray-600 leading-8">{service.desc}</p>
                  <p className="mt-5 text-gray-600 leading-8">{service.details}</p>
                </motion.div>

                {/* Use Cases */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl bg-white border border-gray-100 p-10 shadow-sm">
                  <div className="flex items-center gap-3 text-emerald-600 mb-5">
                    <ClipboardList className="h-5 w-5" />
                    <h3 className="text-2xl font-semibold text-gray-900">Typical use cases</h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.useCases?.map((useCase, i) => (
                      <div key={i} className="rounded-3xl border border-gray-100 bg-white p-5">
                        <p className="text-gray-600">{useCase}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Process */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl bg-white border border-gray-100 p-10 shadow-sm">
                  <div className="flex items-center gap-3 text-emerald-600 mb-5">
                    <Sparkles className="h-5 w-5" />
                    <h3 className="text-2xl font-semibold text-gray-900">How the process works</h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.processSteps?.map((step, index) => (
                      <div key={step.title} className="rounded-3xl border border-gray-100 bg-white p-5">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 font-semibold">
                          {index + 1}
                        </span>
                        <h4 className="mt-4 font-semibold text-gray-900">{step.title}</h4>
                        <p className="mt-2 text-gray-600 text-sm leading-6">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Advantages */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl bg-white border border-gray-100 p-10 shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-5">Key advantages</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.highlights.map((highlight, i) => (
                      <div key={i} className="rounded-3xl border border-gray-100 bg-white p-5">
                        <div className="flex items-center gap-3 text-emerald-600">
                          <ShieldCheck className="h-5 w-5" />
                          <p className="font-medium text-gray-900">{highlight}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* FIXED RIGHT FORM - Most Reliable Method */}
              <aside className="hidden lg:block sticky top-28 self-startx">
                
                  <StickyContactForm />
              </aside>

            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[2rem] overflow-hidden border border-border bg-card shadow-2xl shadow-secondary/10">
                <img src={recyclingProcess} alt="EPR process flow" className="h-full w-full object-cover" />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                <span className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm">
                  Process & performance
                </span>
                <h2 className="text-3xl font-semibold text-foreground">A complete service ecosystem for EPR success</h2>
                <p className="text-muted-foreground leading-8">
                  From waste collection to recycling and compliance reporting, our service framework is designed to support every step of the EPR journey. We partner with verified recyclers, transporters and auditors to deliver measurable performance.
                </p>
                <div className="grid gap-4">
                  <div className="rounded-3xl border border-border bg-card p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-secondary">Impact</p>
                    <p className="mt-3 text-foreground font-semibold">Improved resource recovery and reduced landfill dependence.</p>
                  </div>
                  <div className="rounded-3xl border border-border bg-card p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-secondary">Efficiency</p>
                    <p className="mt-3 text-foreground font-semibold">Streamlined EPR audit trails and faster regulatory closure.</p>
                  </div>
                  <div className="rounded-3xl border border-border bg-card p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-secondary">Assurance</p>
                    <p className="mt-3 text-foreground font-semibold">Verified documentation aligned with CPCB expectations.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </>
    );
  };

  export default ServiceDetails;