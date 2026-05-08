import { motion } from "framer-motion";
import { ShieldCheck, Lock, Zap, Award } from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "Trusted Compliance", desc: "Full regulatory compliance with government-approved EPR certifications." },
  { icon: Lock, title: "Secure Transactions", desc: "End-to-end encrypted credit trading with verified audit trails." },
  { icon: Zap, title: "Fast Processing", desc: "Quick turnaround on EPR credit generation and certificate issuance." },
  { icon: Award, title: "Industry Expertise", desc: "Decade of experience in waste management and EPR credit markets." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why EPR Nexuss</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <point.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
