import { motion } from "framer-motion";
import { Package, ArrowRight, RefreshCw, TrendingUp } from "lucide-react";

const steps = [
  { icon: Package, title: "Collection", desc: "Waste collected from producers and consumers through our network." },
  { icon: RefreshCw, title: "Transactions", desc: "Secure EPR credit trading on our verified marketplace." },
  { icon: RefreshCw, title: "Recycling", desc: "Certified recycling partners process waste responsibly." },
  { icon: TrendingUp, title: "Economy", desc: "Circular economy achieved through sustainable practices." },
];

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Our Process
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center w-48"
              >
                <div className="w-20 h-20 rounded-2xl bg-secondary/10 border-2 border-secondary/30 flex items-center justify-center mb-4">
                  <step.icon className="w-9 h-9 text-secondary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.1 }}
                  className="hidden lg:block mx-4"
                >
                  <ArrowRight className="w-8 h-8 text-secondary/50" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
