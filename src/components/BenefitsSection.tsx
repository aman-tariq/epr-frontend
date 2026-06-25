import {
  ShieldCheck,
  TrendingUp,
  Users,
  BadgeCheck,
  Eye,
  ArrowRight,
  Handshake,
  DollarSign,
} from "lucide-react";


const benefits = [
  {
    title: "Increased Brand Awareness",
    description:
      "Become the first name customers think of when they need a solution in your industry.",
    icon: BadgeCheck,
  },
  {
    title: "More Qualified Leads",
    description:
      "Attract prospects who are already searching for products and services like yours.",
    icon: Users,
  },
  {
    title: "Higher Trust & Credibility",
    description:
      "A visible and established presence helps customers feel confident choosing your business.",
    icon: ShieldCheck,
  },
  {
    title: "Sustainable Revenue Growth",
    description:
      "Turn consistent visibility into predictable demand and long-term business growth.",
    icon: TrendingUp,
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            What Happens When People Can Find You
          </h2>

          <p className="text-lg text-muted-foreground">
            Visibility is more than exposure. It creates trust, attracts
            opportunities, and drives measurable business growth.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            

            return (
              <div
                key={benefit.title}
                className="rounded-2xl text-white border bg-primary p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary text-white" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground text-gray-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process Flow */}
        {/* Process Flow */}
<div className="mt-16 rounded-3xl border bg-muted/20 p-8 md:p-12">
  <div className="mb-10 text-center">
    <h3 className="text-2xl font-bold">
      How Visibility Creates Growth
    </h3>

    <p className="mt-2 text-muted-foreground">
      Business growth follows a predictable path when the right people can find you.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
    
    {/* Visibility */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <Eye className="h-8 w-8 text-secondary" />
      </div>

      <h4 className="font-semibold text-lg">
        Visibility
      </h4>
      

      <p className="mt-2 text-sm text-muted-foreground">
        Get discovered
      </p>
      
    </div>
   

    {/* Trust */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <ShieldCheck className="h-8 w-8 text-secondary" />
      </div>

      <h4 className="font-semibold text-lg">
        Trust
      </h4>

      <p className="mt-2 text-sm text-muted-foreground">
        Build credibility
      </p>
    </div>

    {/* Leads */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <Users className="h-8 w-8 text-secondary" />
      </div>

      <h4 className="font-semibold text-lg">
        Leads
      </h4>

      <p className="mt-2 text-sm text-muted-foreground">
        Generate interest
      </p>
    </div>

    {/* Sales */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <DollarSign className="h-8 w-8 text-secondary" />
      </div>

      <h4 className="font-semibold text-lg">
        Sales
      </h4>

      <p className="mt-2 text-sm text-muted-foreground">
        Convert customers
      </p>
    </div>

    {/* Growth */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <TrendingUp className="h-8 w-8 text-secondary" />
      </div>

      <h4 className="font-semibold text-lg">
        Growth
      </h4>

      <p className="mt-2 text-sm text-muted-foreground">
        Scale revenue
      </p>
    </div>

  </div>
</div>
      </div>
    </section>
  );
};

export default BenefitsSection;
