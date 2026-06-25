import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border bg-primary text-primary-foreground">

          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />

          <div className="relative px-8 py-16 text-center md:px-16">
            <div className="mx-auto max-w-4xl">

              <span className="mb-6 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                Stop Being the Industry's Best-Kept Secret
              </span>

              <h2 className="mb-6 text-4xl font-bold md:text-6xl">
                Your Product Isn't The Problem.
                <br />
                Your Visibility Is.
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
                The best solution doesn't always win.
                The solution people can find, trust, and remember does.
                It's time to make your business impossible to ignore.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="min-w-[220px]"
                >
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="min-w-[220px] border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  Learn More
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-primary-foreground/70">
                <span>✓ More Visibility</span>
                <span>✓ More Leads</span>
                <span>✓ More Sales</span>
                <span>✓ More Growth</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;