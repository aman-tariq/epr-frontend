import { TrendingDown, PhoneOff, EyeOff, Trophy } from "lucide-react";
import {motion} from "framer-motion"

const problems = [
  {
    title: "No Inbound Leads",
    description:
      "Your sales team spends more time chasing prospects than closing deals because qualified leads aren't finding you.",
    icon: PhoneOff,
  },
  {
    title: "Low Brand Recognition",
    description:
      "Potential customers don't know who you are, even when your solution is better than the competition.",
    icon: EyeOff,
  },
  {
    title: "Losing to Weaker Competitors",
    description:
      "Companies with stronger visibility often win contracts despite offering lower-quality products or services.",
    icon: Trophy,
  },
  {
    title: "Stagnant Revenue",
    description:
      "Without consistent visibility, growth becomes unpredictable and revenue reaches a plateau.",
    icon: TrendingDown,
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
      className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            The Hidden Cost of Being Invisible
          </h2>

          <p className="text-lg text-muted-foreground">
            Most businesses don't struggle because of poor products.
            They struggle because the right customers never discover them.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <div
                key={problem.title}
                className="group rounded-xl border border-primary bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {problem.title}
                </h3>

                <p className="text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ProblemSection;