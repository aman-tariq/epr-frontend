import { motion } from "framer-motion";
import { Recycle, Leaf, TreePine, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecologyTree from "@/assets/ecology-tree-new.png";

const features = [
  {
    icon: Recycle,
    title: "Zero Waste Goal",
    desc: "Committed to achieving zero waste through innovative recycling solutions."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Process",
    desc: "Environmentally conscious methods for sustainable waste management."
  },
  {
    icon: TreePine,
    title: "Green Initiative",
    desc: "Planting trees and reducing carbon footprint for a better tomorrow."
  },
  {
    icon: Globe,
    title: "Global Impact",
    desc: "Contributing to worldwide sustainability goals through EPR compliance."
  }
];

const SustainabilityTree = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            <TreePine className="w-4 h-4" />
            Our Commitment
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Building a Greener Tomorrow
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Like a tree that gives back to nature, we nurture a circular economy where every waste product finds new life.
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
            {/* Decorative Frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200/50 via-teal-200/50 to-cyan-200/50 rounded-3xl blur-xl opacity-70" />
            
            {/* Main Image Container */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={ecologyTree}
                alt="Sustainability Tree - Eco-Friendly Recycling"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-emerald-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-emerald-600" />
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
                className="group flex items-start gap-4 p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all group">
                <a href="/contact">
                  Join Our Mission
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
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
              className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-emerald-600 mb-1">
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

export default SustainabilityTree;
