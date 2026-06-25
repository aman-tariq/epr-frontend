import {motion} from "framer-motion"

const stats = [
  {
    value: "81%",
    title: "Research Before Purchase",
    description:
      "Buyers research online before making purchasing decisions.",
  },
  {
    value: "70%",
    title: "Decision Made Early",
    description:
      "B2B buyers complete most of their buying journey before contacting sales.",
  },
  {
    value: "3X",
    title: "More Lead Generation",
    description:
      "Businesses with strong visibility generate significantly more qualified leads.",
  },
  {
    value: "60%+",
    title: "Brand Influence",
    description:
      "Customers are more likely to trust and engage with recognized brands.",
  },
];

const StatisticsSection = () => {
  return (
    <section className="bg-muted/30 py-20">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            The Numbers Don't Lie
          </h2>

          <p className="text-lg text-muted-foreground">
            Modern buyers discover, evaluate, and trust businesses online long
            before they ever speak to a sales representative.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-xl border bg-background p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="mb-3 text-4xl font-bold text-primary">
                {stat.value}
              </h3>

              <h4 className="mb-2 text-lg font-semibold">
                {stat.title}
              </h4>

              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border bg-background p-8 text-center">
          <h3 className="mb-4 text-2xl font-semibold">
            Visibility Creates Opportunity
          </h3>

          <p className="text-muted-foreground">
            The businesses that consistently attract leads are not always the
            best. They are simply the easiest to find, trust, and remember.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default StatisticsSection;