import { motion } from "framer-motion";
import { Recycle, TreePine, Leaf, Globe } from "lucide-react";
import ecologyTree from "@/assets/ecology-tree.jpg";

const features = [
  {
    icon: Recycle,
    title: "Circular Economy",
    desc: "Transforming waste into valuable resources through sustainable recycling practices."
  },
  {
    icon: TreePine,
    title: "Environmental Impact",
    desc: "Reducing carbon footprint and preserving natural ecosystems for future generations."
  },
  {
    icon: Leaf,
    title: "Green Solutions",
    desc: "Innovative eco-friendly approaches to waste management and EPR compliance."
  },
  {
    icon: Globe,
    title: "Global Sustainability",
    desc: "Contributing to worldwide environmental goals through responsible waste handling."
  }
];

const EcologyVision = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            <TreePine className="w-4 h-4" />
            Our Vision
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Growing a Sustainable Future
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Like a tree that nurtures its ecosystem, we cultivate a circular economy where waste becomes the seed of new possibilities.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative Frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-xl opacity-50" />
            
            {/* Image Container */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-secondary/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={ecologyTree}
                alt="Ecology Tree - Sustainable Recycling Vision"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">100%</div>
                  <div className="text-muted-foreground text-sm">Recyclable</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }}
                className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "50K+", label: "Tons Recycled" },
            { value: "100+", label: "Partner Plants" },
            { value: "25+", label: "Cities Covered" },
            { value: "99%", label: "Client Satisfaction" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-secondary mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EcologyVision;
