import { motion } from "framer-motion";
import { Recycle, Battery, CircleDot, Car, Cog, Monitor, Zap } from "lucide-react";

const services = [
  { icon: Recycle, title: "EPR Plastic", desc: "CPCB-aligned plastic waste management with certified EPR credit reporting." },
  { icon: Monitor, title: "EPR Electronic", desc: "Comprehensive e-waste collection, dismantling, and material recovery with CPCB-aligned EPR compliance." },
  { icon: CircleDot, title: "EPR Tyre", desc: "End-of-life tyre collection and recovery with documented EPR compliance." },
  { icon: Car, title: "EPR ELV", desc: "Authorized ELV depollution and material recovery under CPCB guidelines." },
  { icon: Cog, title: "EPR Used Oil", desc: "Used oil collection and regeneration services with CPCB-compliant documentation." },
  { icon: Cog, title: "EPR Metals", desc: "Ferrous and non-ferrous metal recycling with verified EPR credits." },
  { icon: Battery, title: "EPR Battery", desc: "Battery waste handling for lead acid and lithium-ion types with safe disposal and recycling." },
  { icon: Zap, title: "EPR Lithium", desc: "Specialized lithium-ion battery waste management and recycling under EPR regulations." },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            EPR Credit Solutions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We provide certified EPR credits across all major waste categories, ensuring full compliance with regulatory requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
