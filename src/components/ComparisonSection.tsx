import { CheckCircle2, XCircle } from "lucide-react";

const lowVisibility = [
  "Relies heavily on cold outreach",
  "Low brand recognition",
  "Competes primarily on price",
  "Inconsistent lead generation",
  "Longer sales cycles",
  "Unpredictable revenue growth",
];

const highVisibility = [
  "Receives inbound inquiries",
  "Trusted and recognized brand",
  "Competes on value and expertise",
  "Consistent flow of qualified leads",
  "Faster buying decisions",
  "Scalable and predictable growth",
];

const ComparisonSection = () => {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Visibility Changes Everything
          </h2>

          <p className="text-lg text-muted-foreground">
            Two businesses can offer similar products and services, yet achieve
            dramatically different results based on how visible they are in the
            market.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="rounded-2xl border border-red-200 bg-background p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold">
                Low Visibility Business
              </h3>

              <p className="mt-2 text-muted-foreground">
                Great product. Limited awareness.
              </p>
            </div>

            <div className="space-y-5">
              {lowVisibility.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle className="mt-1 h-5 w-5 shrink-0 text-red-500 " />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="rounded-2xl border border-green-200 bg-background p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold">
                High Visibility Business
              </h3>

              <p className="mt-2 text-muted-foreground">
                Trusted, discoverable, and growing.
              </p>
            </div>

            <div className="space-y-5">
              {highVisibility.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border bg-background p-8 text-center">
          <h3 className="mb-3 text-2xl font-semibold">
            The Difference Isn't Quality.
          </h3>

          <p className="text-lg text-muted-foreground">
            It's visibility. Customers can only choose your solution if they
            know it exists.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;