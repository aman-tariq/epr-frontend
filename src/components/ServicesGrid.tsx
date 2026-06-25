import { motion } from "framer-motion";
import { CircleDot, Recycle, Battery, Zap, Truck, Monitor, Box } from "lucide-react";
import { serviceCategoriesNav, services as servicesList } from "@/lib/services";

const categoryDescriptions: Record<string, string> = {
  "Recycling Setups": "Design and commission recycling plants for batteries, e-waste, solar panels and plastics.",
  "EPR Credits": "Certified EPR credit services across major waste categories with regulator-ready documentation.",
  "Plant Operation Intelligence": "SOPs, performance metrics and operational systems to run and scale your plant efficiently.",
  "Buy & Sell Scrap": "Market access to buy and sell e-waste, batteries and metals through verified channels.",
  "Business Growth & Lead Generation": "Demand generation, SEO and conversion systems to grow enquiries and sales.",
};

const ServicesGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            What We Do
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From recycling plant setups to certified EPR credits and growth services — we deliver end-to-end solutions for circular businesses.
          </p>
        </motion.div>

        <div className="space-y-8">
          {serviceCategoriesNav.map((cat, i) => (
            <motion.section
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="md:flex md:items-start md:gap-8">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Recycle className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{cat.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{categoryDescriptions[cat.name] ?? "Explore our services and subcategories for this area."}</p>
                  <div className="mt-4 flex flex-col gap-2">
                    {cat.subcategories.map((s) => (
                      <a key={s.path} href={s.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        • {s.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="md:flex-1 mt-6 md:mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.subcategories
                      .map((s) => servicesList.find((it) => it.path === s.path))
                      .filter(Boolean)
                      .map((item) => (
                        <a key={item!.path} href={item!.path} className="block p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center">
                              {getIconFor(item!.slug)}
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-foreground">{item!.title}</h4>
                              <p className="text-muted-foreground text-xs mt-1 line-clamp-3">{item!.subtitle ?? item!.desc}</p>
                            </div>
                          </div>
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

function getIconFor(slug: string) {
  const cls = "w-5 h-5 text-secondary";
  if (slug.includes("lithium") || slug.includes("battery")) return <Battery className={cls} />;
  if (slug.includes("plastic")) return <Recycle className={cls} />;
  if (slug.includes("solar")) return <Zap className={cls} />;
  if (slug.includes("vehicle") || slug.includes("elv")) return <Truck className={cls} />;
  if (slug.includes("electronic") || slug.includes("ewaste")) return <Monitor className={cls} />;
  return <Box className={cls} />;
}
