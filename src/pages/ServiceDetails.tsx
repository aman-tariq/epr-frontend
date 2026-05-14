import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Mail, ShieldCheck, Sparkles, ClipboardList } from "lucide-react";
import serviceBanner from "@/assets/epr-services-banner.jpg";
import recyclingProcess from "@/assets/recycling-process.jpg";
import { services } from "@/lib/services";
import LithiumBatteryBlog from "@/components/LithiumBatteryBlog";
import EWasteBlog from "@/components/EWasteBlog";
import VehicleScrappingBlog from "@/components/VehicleScrappingBlog";
import SolarPanelBlog from "@/components/SolarPanelBlog";
import PlasticRecyclingBlog from "@/components/PlasticRecyclingBlog";
import BusinessGrowth from "./BusinessGrowth";

const ServiceDetails = () => {
  const { serviceSlug } = useParams();
  const service = services.find((item) => item.slug === serviceSlug);

  if (!service) {
    return <Navigate replace to="/services" />;
  }

  if (service.slug === "recycling-lithium-ion-battery" || service.slug === "epr-lithium") {
    return <LithiumBatteryBlog />;
  }

  if (service.slug === "recycling-ewaste") {
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
    return <BusinessGrowth />;
  }

  return (
    <>
      <section className="pt-32 pb-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Service details</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-4">
                {service.title}
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mt-6">
                {service.subtitle}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div key={feature} className="rounded-3xl border border-border bg-card p-5">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:border-secondary/60 transition"
                >
                  <ArrowLeft size={16} /> Back to Services
                </Link>
                <a
                  href="mailto:info@eprnexuss.com"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary/90 transition"
                >
                  <Mail size={16} /> Request a Quote
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-secondary/10">
              <img src={serviceBanner} alt={`${service.title} banner`} className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 grid gap-10 lg:grid-cols-[1.3fr_0.95fr] items-start">
          <div className="space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-border bg-card p-10 shadow-lg shadow-secondary/10">
              <h2 className="text-3xl font-semibold text-foreground">Comprehensive service overview</h2>
              <p className="mt-5 text-muted-foreground leading-8">{service.desc}</p>
              <p className="mt-5 text-foreground/90 leading-8">{service.details}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-border bg-card p-10 shadow-lg shadow-secondary/10">
              <div className="flex items-center gap-3 text-secondary mb-5">
                <ClipboardList className="h-5 w-5" />
                <h3 className="text-2xl font-semibold">Typical use cases</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.useCases?.map((useCase) => (
                  <div key={useCase} className="rounded-3xl border border-border bg-background/80 p-5">
                    <p className="text-sm text-foreground">{useCase}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-border bg-card p-10 shadow-lg shadow-secondary/10">
              <div className="flex items-center gap-3 text-secondary mb-5">
                <Sparkles className="h-5 w-5" />
                <h3 className="text-2xl font-semibold">How the process works</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.processSteps?.map((step, index) => (
                  <div key={step.title} className="rounded-3xl border border-border bg-background/80 p-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/10 text-secondary font-semibold">{index + 1}</span>
                    <h4 className="mt-4 font-semibold text-foreground">{step.title}</h4>
                    <p className="mt-2 text-muted-foreground text-sm leading-6">{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-border bg-card p-10 shadow-lg shadow-secondary/10">
              <h3 className="text-2xl font-semibold text-foreground mb-5">Key advantages</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-3xl border border-border bg-background/80 p-5">
                    <div className="flex items-center gap-3 text-secondary">
                      <ShieldCheck className="h-5 w-5" />
                      <p className="font-medium text-foreground">{highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <aside className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">CPCB compliance checklist</h3>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                {service.compliancePoints?.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Ready for compliance?</h3>
              <p className="mt-4 text-muted-foreground leading-7">
                Our team helps you convert waste streams into verified EPR credit outcomes while keeping your operations aligned with CPCB requirements.
              </p>
              <a
                href="mailto:info@eprnexuss.com"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary/90 transition"
              >
                Speak with an expert
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Why EPR matters</h3>
              <p className="mt-4 text-muted-foreground leading-7">
                Extended Producer Responsibility is the cornerstone of sustainable waste management. Proper EPR implementation lowers risk, improves transparency and supports circular economy goals.
              </p>
            </motion.div>
          </aside>
        </div>
      </section>

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
