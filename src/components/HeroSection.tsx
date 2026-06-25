import { Button } from "@/components/ui/button";
import StickyContactForm from "./StickyContactForm";
import {useNavigate} from "react-router-dom"

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5AC361]/30 via-[#5AC361]/10 to-white" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">

          <span className="mb-6 inline-block rounded-full border px-4 py-2 text-sm font-medium">
            Business Growth & Visibility
          </span>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            You've Built Something Great.
            <br />
            <span className="text-primary">
              Why Isn't the Market Buying?
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
            You have spent years building a product or service that genuinely
            works—but your pipeline is dry, your phone isn't ringing, and
            businesses with weaker offerings are winning contracts you should
            have won.
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium">
            The problem is rarely the product.
            <span className="text-primary">
              {" "}It's the visibility.
            </span>
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button onClick={()=> navigate("/contact")} size="lg">
              Book a Consultation
            </Button>

            <Button onClick={()=> navigate("/services")} variant="outline" size="lg">
              Learn More
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;