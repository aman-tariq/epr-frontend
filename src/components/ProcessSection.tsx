import { motion, type Variants } from "framer-motion";
import { Package, ArrowRight, Repeat2, Recycle, TrendingUp } from "lucide-react";

const BRAND_GREEN = "#5AC361";

const steps = [
  {
    icon: Package,
    title: "Collection",
    desc: "Waste collected from producers and consumers through our network.",
  },
  {
    icon: Repeat2,
    title: "Transactions",
    desc: "Secure EPR credit trading on our verified marketplace.",
  },
  {
    icon: Recycle,
    title: "Recycling",
    desc: "Certified recycling partners process waste responsibly.",
  },
  {
    icon: TrendingUp,
    title: "Economy",
    desc: "Circular economy achieved through sustainable practices.",
  },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1, ease: "easeInOut", delay: 0.2 } },
};

const ProcessSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-muted/50 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-[0.07]"
        style={{ backgroundColor: BRAND_GREEN }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Our Process
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="h-1 w-20 rounded-full mx-auto mt-4 origin-left"
            style={{ backgroundColor: BRAND_GREEN }}
          />
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px px-24">
            <div className="relative h-full mx-24 bg-border">
              <motion.div
                variants={lineVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="absolute inset-0 origin-left"
                style={{ backgroundColor: BRAND_GREEN }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.12 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="absolute -top-2 right-6 lg:right-8 w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center shadow-md z-10">
                    {i + 1}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative w-20 h-20 rounded-2xl bg-card border-2 border-secondary/30 flex items-center justify-center mb-5 shadow-sm group-hover:border-secondary group-hover:shadow-lg group-hover:shadow-secondary/20 transition-all duration-300"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
                      style={{ backgroundColor: BRAND_GREEN, opacity: 0.15 }}
                    />
                    <StepIcon className="relative w-9 h-9 text-secondary" />
                  </motion.div>

                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[15rem]">
                    {step.desc}
                  </p>

                  {i < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + 0.3 }}
                      className="flex sm:hidden mt-6 mb-2"
                    >
                      <ArrowRight className="w-6 h-6 text-secondary/50 rotate-90" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;