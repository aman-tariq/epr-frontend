import { motion } from "framer-motion";
import { Recycle, Battery, CircleDot, Car, Cog, Globe, CheckCircle, ArrowRight, Monitor, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import serviceVisual from "@/assets/epr-services-banner.jpg";
import { services, serviceDropdown } from "@/lib/services";

const iconMap = {
  "EPR Plastic": Recycle,
  "EPR Tyre": CircleDot,
  "EPR ELV": Car,
  "EPR Used Oil": Cog,
  "EPR Metals": Cog,
  "EPR Battery": Battery,
  "EPR Electronic": Monitor,
  "EPR Lithium": Zap,
};

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
              CPCB-aligned EPR Compliance Services
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              We offer EPR Plastic, EPR Electronic, EPR Tyre, EPR ELV, EPR Used Oil, EPR Metals, EPR Battery, and EPR Lithium services aligned to Central Pollution Control Board requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-card p-10 shadow-lg shadow-secondary/5">
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest">CPCB EPR compliance</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Align your waste management with CPCB and EPR mandates
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Our services are built to support Extended Producer Responsibility requirements for plastic, tyres, ELV, used oil, metals and batteries. We follow Central Pollution Control Board guidance and provide certified documentation so your waste streams stay compliant and auditable.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-background p-6 text-start">
                  <h3 className="text-lg font-semibold text-foreground mb-3">What we cover</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Authorized collection and reverse logistics</li>
                    <li>Recovery and recycling with verified channels</li>
                    <li>Documented EPR credit issuance</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-border bg-background p-6 text-start">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Why it matters</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Meets CPCB reporting and audit expectations</li>
                    <li>Reduces regulatory risk for producers</li>
                    <li>Supports sustainable secondary material recovery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service selector */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-lg shadow-secondary/5">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-secondary uppercase tracking-[0.24em] text-sm font-semibold">Select a service page</p>
                <h2 className="mt-3 text-3xl font-semibold text-foreground">
                  Battery, plastic and specialized service pages
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground leading-7">
                  Pick one of the main service categories below to open the dedicated service page and learn more about our EPR support.
                </p>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="inline-flex min-w-[16rem] items-center justify-between gap-2 rounded-3xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-sm hover:border-secondary transition">
                  Browse service pages
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[18rem]">
                  <DropdownMenuLabel>Core service categories</DropdownMenuLabel>
                  {serviceDropdown.map((item) => (
                    <DropdownMenuItem asChild key={item.path}>
                      <Link to={item.path} className="block w-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center rounded-[2rem] border border-border bg-card overflow-hidden shadow-lg shadow-secondary/10">
            <div className="p-10">
              <span className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm">
                Certified EPR services
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-foreground">Extend your producer responsibility with trusted CPCB compliance pathways</h2>
              <p className="mt-5 text-muted-foreground leading-8">
                We help businesses manage plastic, tyre, ELV, used oil, metal and battery waste through verified collection, recycling and reporting systems. Every service page is designed to give you clear steps, compliance assurance and measurable impact.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl border border-border bg-background/80 p-5">
                  <p className="text-sm font-semibold text-foreground">Verified process</p>
                  <p className="mt-2 text-muted-foreground">From collection to recycling, our service flow meets CPCB EPR expectations.</p>
                </div>
                <div className="rounded-3xl border border-border bg-background/80 p-5">
                  <p className="text-sm font-semibold text-foreground">Regulatory-ready documentation</p>
                  <p className="mt-2 text-muted-foreground">We provide records and certifications designed for audits and compliance checks.</p>
                </div>
                <div className="rounded-3xl border border-border bg-background/80 p-5">
                  <p className="text-sm font-semibold text-foreground">Circular economy support</p>
                  <p className="mt-2 text-muted-foreground">Our services improve resource recovery and reduce landfill impact for your brand.</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden bg-accent/5">
              <img src={serviceVisual} alt="EPR services illustration" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">

          {/* EPR Credits Category */}
          <div className="mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Core Services</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">EPR Credits</h2>
              <p className="text-muted-foreground max-w-2xl">Comprehensive EPR credit services across all major waste categories with CPCB-aligned compliance.</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.filter(s => s.category === "epr-credits").map((service, i) => {
                const Icon = iconMap[service.title] ?? Globe;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-8 rounded-2xl bg-card border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex-shrink-0 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <Icon className="w-7 h-7 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                        <div className="flex flex-wrap gap-3">
                          {service.features.map((f) => (
                            <span key={f} className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                              <CheckCircle size={14} /> {f}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={service.path}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80"
                        >
                          View details
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* SOPs, KPIs and Checklists Category */}
          <div className="mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Operational Support</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">SOPs, KPIs & Checklists</h2>
              <p className="text-muted-foreground max-w-2xl">Tools and frameworks to standardize, measure, and verify your EPR operations.</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.filter(s => s.category === "sops-kpis-checklists").map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex-shrink-0 flex items-center justify-center group-hover:bg-secondary/20 transition-colors mb-4">
                    <Cog className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {service.features.map((f) => (
                      <span key={f} className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                        <CheckCircle size={14} /> {f}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80"
                  >
                    Explore
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Buy & Sell Category */}
          <div className="mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Marketplace</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Buy & Sell</h2>
              <p className="text-muted-foreground max-w-2xl">Connect with certified buyers and sellers in our waste materials marketplace.</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.filter(s => s.category === "buy-sell").map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex-shrink-0 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Recycle className="w-7 h-7 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                      <div className="flex flex-wrap gap-3">
                        {service.features.map((f) => (
                          <span key={f} className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                            <CheckCircle size={14} /> {f}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={service.path}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80"
                      >
                        Get started
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recycling Setups Category */}
          <div className="mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Infrastructure Solutions</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Recycling Setups</h2>
              <p className="text-muted-foreground max-w-2xl">State-of-the-art recycling facilities and authorized scrapping plants for specialized waste streams.</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.filter(s => s.category === "recycling-setups").map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex-shrink-0 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Recycle className="w-7 h-7 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                      <div className="flex flex-wrap gap-3">
                        {service.features.map((f) => (
                          <span key={f} className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                            <CheckCircle size={14} /> {f}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={service.path}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80"
                      >
                        Learn more
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-secondary text-primary-foreground font-semibold rounded-xl hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/30 text-sm"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;