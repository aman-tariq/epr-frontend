import { motion } from "framer-motion";
import { Building2, Phone, Mail, Globe, MapPin, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import companyBanner from "@/assets/company-banner.jpg";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 97738 70268" },
  { icon: Phone, label: "Landline", value: "0120-4605014" },
  { icon: Mail, label: "Email", value: "info@eprnexuss.com" },
  { icon: Globe, label: "Website", value: "www.eprnexuss.com" },
];

const services = [
  "EPR Plastic",
  "EPR Tyre",
  "EPR ELV",
  "EPR Used Oil",
  "EPR Metals",
  "EPR Battery",
];

const CompanyBanner = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-4 h-4" />
            About Our Company
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            EPR Nexuss Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trusted partner for Extended Producer Responsibility compliance and EPR credit trading in India.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-xl opacity-60" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            
            {/* Main Image Container */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-card"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={companyBanner}
                alt="EPR Nexuss Solutions - Company Banner"
                className="w-full h-auto object-cover"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* GST Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-xl px-6 py-3 shadow-xl flex items-center gap-3"
            >
              <FileCheck className="w-5 h-5 text-secondary" />
              <div>
                <span className="text-xs text-muted-foreground uppercase">GSTIN</span>
                <p className="font-mono text-sm font-semibold text-foreground">09AAICE7520L1ZA</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Company Info */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-secondary" />
                Company Details
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.label === "Phone" ? `tel:${item.value.replace(/\s/g, '')}` : item.label === "Email" ? `mailto:${item.value}` : item.label === "Website" ? `https://${item.value}` : undefined}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-secondary/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-primary/5 border border-primary/10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Registered Address</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  H-73, No.107, Sector-63, Noida,<br />
                  Dist. Gautam Buddha Nagar, U.P. 201301
                </p>
              </div>
            </motion.div>

            {/* Services Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-semibold text-foreground mb-3">Our Services</h4>
              <div className="flex flex-wrap gap-2">
                {services.map((service, i) => (
                  <motion.span
                    key={service}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="px-3 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full border border-secondary/20 hover:bg-secondary/20 transition-colors cursor-default"
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg shadow-secondary/25 hover:shadow-secondary/40 transition-all group">
                <a href="/contact">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBanner;
