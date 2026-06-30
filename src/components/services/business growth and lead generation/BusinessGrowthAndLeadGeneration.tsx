import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  TrendingDown, 
  PhoneOff, 
  EyeOff, 
  Trophy, 
  ShieldCheck, 
  Users, 
  BadgeCheck, 
  Eye, 
  DollarSign,
  XCircle,
  CheckCircle2,
  Target,
  Search,
  MessageSquare,
  BarChart3,
  Share2,
  Zap,
  Megaphone,
  TrendingUp
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import StickyContactForm from '@/components/StickyContactForm';

// --- Static Data Arrays Moved to Top Level ---
const problems = [
  {
    title: "No Inbound Leads",
    description: "Your sales team spends more time chasing prospects than closing deals because qualified leads aren't finding you.",
    icon: PhoneOff,
  },
  {
    title: "Low Brand Recognition",
    description: "Potential customers don't know who you are, even when your solution is better than the competition.",
    icon: EyeOff,
  },
  {
    title: "Losing to Weaker Competitors",
    description: "Companies with stronger visibility often win contracts despite offering lower-quality products or services.",
    icon: Trophy,
  },
  {
    title: "Stagnant Revenue",
    description: "Without consistent visibility, growth becomes unpredictable and revenue reaches a plateau.",
    icon: TrendingDown,
  },
];

const stats = [
  {
    value: "81%",
    title: "Research Before Purchase",
    description: "Buyers research online before making purchasing decisions.",
  },
  {
    value: "70%",
    title: "Decision Made Early",
    description: "B2B buyers complete most of their buying journey before contacting sales.",
  },
  {
    value: "3X",
    title: "More Lead Generation",
    description: "Businesses with strong visibility generate significantly more qualified leads.",
  },
  {
    value: "60%+",
    title: "Brand Influence",
    description: "Customers are more likely to trust and engage with recognized brands.",
  },
];

const graphData = [
  { month: "Month 1", leads: 12 },
  { month: "Month 2", leads: 18 },
  { month: "Month 3", leads: 28 },
  { month: "Month 4", leads: 42 },
  { month: "Month 5", leads: 61 },
  { month: "Month 6", leads: 85 },
];

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

const benefits = [
  {
    title: "Increased Brand Awareness",
    description: "Become the first name customers think of when they need a solution in your industry.",
    icon: BadgeCheck,
  },
  {
    title: "More Qualified Leads",
    description: "Attract prospects who are already searching for products and services like yours.",
    icon: Users,
  },
  {
    title: "Higher Trust & Credibility",
    description: "A visible and established presence helps customers feel confident choosing your business.",
    icon: ShieldCheck,
  },
  {
    title: "Sustainable Revenue Growth",
    description: "Turn consistent visibility into predictable demand and long-term business growth.",
    icon: TrendingUp,
  },
];

const digitalStrategies = [
  {
    icon: <Target size={24} />,
    title: "Targeted Paid Advertising",
    description: "Strategic Google Ads, Facebook, LinkedIn, and Instagram campaigns designed to reach your ideal customer profile with precision targeting and budget optimization.",
    features: ["Google Ads management", "Social media advertising", "Retargeting campaigns", "Budget optimization"],
  },
  {
    icon: <Search size={24} />,
    title: "SEO & Content Marketing",
    description: "Organic search optimization through keyword research, on-page SEO, technical SEO, and high-quality content that positions you as an authority in your space.",
    features: ["Keyword research & strategy", "On-page optimization", "Content creation", "Technical SEO"],
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Cold Calling & Outreach",
    description: "Systematic cold calling, email outreach, and personalized messaging campaigns to generate warm leads from your target market segments.",
    features: ["Cold calling campaigns", "Email sequences", "Personalized outreach", "Lead qualification"],
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Sales Pipeline & CRM Setup",
    description: "Complete CRM implementation, pipeline automation, and lead tracking systems that turn enquiries into deals with structured follow-up processes.",
    features: ["CRM configuration", "Pipeline management", "Automation workflows", "Lead scoring"],
  },
  {
    icon: <Share2 size={24} />,
    title: "Social Media Strategy",
    description: "Build brand authority through consistent, strategic social media presence with content calendars, engagement strategies, and community management.",
    features: ["Content calendar planning", "Community management", "Engagement campaigns", "Brand storytelling"],
  },
  {
    icon: <Users size={24} />,
    title: "Sales Team Support",
    description: "Dedicated sales professionals who work on your behalf to qualify leads, conduct discovery calls, and close deals with full transparency and accountability.",
    features: ["Sales professionals", "Lead qualification", "Client meetings", "Deal closing support"],
  },
];

const BusinessGrowthAndLeadGeneration = () => {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="Business Growth & Lead Generation Services | Increase Visibility, Leads & Revenue"
        description="Discover how increased business visibility drives qualified leads, stronger brand recognition, higher trust, and sustainable revenue growth. Learn proven strategies to attract customers and outperform competitors."
        keywords={[
          "Business Growth",
          "Lead Generation",
          "Business Visibility",
          "Brand Awareness",
          "Revenue Growth",
          "Customer Acquisition",
          "Why am I not getting leads?",
          "Why is my business not growing?",
          "How to generate more leads?",
          "How to increase business visibility?",
          "How to attract more customers?",
          "Why are competitors getting more customers?",
          "How to improve brand recognition?",
          "How to grow a small business?",
          "How to increase sales revenue?",
          "Why is my pipeline dry?",
          "How to get inbound leads?",
          "How to generate B2B leads?",
          "Why is my business losing customers?",
          "How to outperform competitors?",
          "How to build trust with customers?"
        ]}
        url="https://eprnexuss.com/services/business-growth"
        type="article"
      />

      {/* --- Hero Section --- */}
      <section className="relative overflow-hidden py-24 lg:py-32">
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
              <span className="text-primary"> It's the visibility.</span>
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button onClick={() => navigate("/contact")} size="lg">
                Book a Consultation
              </Button>
              <Button onClick={() => navigate("/services")} variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Grid Content Area --- */}
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          
          {/* Main Left Flow */}
          <div className="space-y-4">
            
            {/* Inlined Problem Section */}
            <section className="py-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <div className="mx-auto mb-14 max-w-3xl text-center">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    The Hidden Cost of Being Invisible
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Most businesses don't struggle because of poor products.
                    They struggle because the right customers never discover them.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {problems.map((problem) => {
                    const ProblemIcon = problem.icon;
                    return (
                      <div
                        key={problem.title}
                        className="group rounded-xl border border-primary bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <ProblemIcon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="mb-3 text-xl font-semibold">{problem.title}</h3>
                        <p className="text-muted-foreground">{problem.description}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </section>

            {/* Inlined Statistics Section */}
            <section className="bg-muted/30 py-20 rounded-2xl px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <div className="mx-auto mb-14 max-w-3xl text-center">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    The Numbers Don't Lie
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Modern buyers discover, evaluate, and trust businesses online long
                    before they ever speak to a sales representative.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {stats.map((stat) => (
                    <div
                      key={stat.title}
                      className="rounded-xl border bg-background p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg"
                    >
                      <h3 className="mb-3 text-4xl font-bold text-primary">{stat.value}</h3>
                      <h4 className="mb-2 text-lg font-semibold">{stat.title}</h4>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mx-auto mt-16 max-w-4xl rounded-2xl border bg-background p-8 text-center">
                  <h3 className="mb-4 text-2xl font-semibold">Visibility Creates Opportunity</h3>
                  <p className="text-muted-foreground">
                    The businesses that consistently attract leads are not always the best. They are simply the easiest to find, trust, and remember.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Inlined Visibility Graph Section */}
            <section className="py-20">
              <div className="w-full bg-secondary/5 rounded-2xl p-4 sm:p-6">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">Visibility Drives Growth</h2>
                  <p className="text-lg text-muted-foreground">
                    When more people discover your business, more opportunities enter your pipeline. Visibility isn't a branding expense—it's a growth engine.
                  </p>
                </div>

                <div className="rounded-2xl border bg-background p-6 shadow-sm">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold">Qualified Leads Over Time</h3>
                    <p className="text-sm text-muted-foreground">Example growth pattern after improving market visibility.</p>
                  </div>
                  <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={graphData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="leads"
                          stroke="hsl(var(--primary))"
                          strokeWidth={3}
                          dot={{ r: 5 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                  <div className="rounded-xl border bg-background p-6">
                    <h4 className="mb-2 text-lg font-semibold">More Visibility</h4>
                    <p className="text-sm text-muted-foreground">Reach customers who are actively searching for solutions like yours.</p>
                  </div>
                  <div className="rounded-xl border bg-background p-6">
                    <h4 className="mb-2 text-lg font-semibold">More Qualified Leads</h4>
                    <p className="text-sm text-muted-foreground">Generate inquiries from people already interested in your services.</p>
                  </div>
                  <div className="rounded-xl border bg-background p-6">
                    <h4 className="mb-2 text-lg font-semibold">More Revenue Growth</h4>
                    <p className="text-sm text-muted-foreground">Convert increased demand into sustainable business growth.</p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sticky Workspace Sidebar containing Form */}
          <aside className="hidden lg:block sticky top-28 self-start w-full">
            <StickyContactForm />
          </aside>

        </div>
      </div>

      {/* --- Full Width Inlined Sections --- */}

      {/* Inlined Comparison Section */}
      <section className="bg-muted/30 py-20 mt-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Visibility Changes Everything</h2>
            <p className="text-lg text-muted-foreground">
              Two businesses can offer similar products and services, yet achieve dramatically different results based on how visible they are in the market.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-background p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold">Low Visibility Business</h3>
                <p className="mt-2 text-muted-foreground">Great product. Limited awareness.</p>
              </div>
              <div className="space-y-5">
                {lowVisibility.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <XCircle className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-green-200 bg-background p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold">High Visibility Business</h3>
                <p className="mt-2 text-muted-foreground">Trusted, discoverable, and growing.</p>
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

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border bg-background p-8 text-center">
            <h3 className="mb-3 text-2xl font-semibold">The Difference Isn't Quality.</h3>
            <p className="text-lg text-muted-foreground">
              It's visibility. Customers can only choose your solution if they know it exists.
            </p>
          </div>
        </div>
      </section>

      {/* Inlined Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Happens When People Can Find You</h2>
            <p className="text-lg text-muted-foreground">
              Visibility is more than exposure. It creates trust, attracts opportunities, and drives measurable business growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const BenefitIcon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl text-white border bg-primary p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <BenefitIcon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground text-gray-300 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 rounded-3xl border bg-muted/20 p-8 md:p-12">
            <div className="mb-10 text-center">
              <h3 className="text-2xl font-bold">How Visibility Creates Growth</h3>
              <p className="mt-2 text-muted-foreground">Business growth follows a predictable path when the right people can find you.</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-lg">Visibility</h4>
                <p className="mt-2 text-sm text-muted-foreground">Get discovered</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-lg">Trust</h4>
                <p className="mt-2 text-sm text-muted-foreground">Build credibility</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-lg">Leads</h4>
                <p className="mt-2 text-sm text-muted-foreground">Generate interest</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <DollarSign className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-lg">Sales</h4>
                <p className="mt-2 text-sm text-muted-foreground">Convert customers</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-lg">Growth</h4>
                <p className="mt-2 text-sm text-muted-foreground">Scale revenue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inlined Strategic Approach Sections */}
      <div>
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-16 text-center">
              <span className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
                <Zap size={18} />
                Strategic Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Digital Marketing Strategies for Lead Generation</h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                We deploy a multi-channel approach combining paid advertising, organic search, direct outreach, and sales support to generate and convert qualified leads consistently.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {digitalStrategies.map((strategy, index) => (
                <motion.div
                  key={strategy.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-[2rem] border border-border bg-card p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="text-secondary mb-5">{strategy.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{strategy.title}</h3>
                  <p className="text-muted-foreground text-sm leading-6 mb-6">{strategy.description}</p>
                  <ul className="space-y-2">
                    {strategy.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="inline-flex h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span className="text-xs text-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy Recommendations Panel */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-border bg-card p-10 max-w-3xl mx-auto"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Which Strategy to Lead With?</h3>
                <span className="inline-flex px-4 py-2 bg-secondary/10 text-secondary text-sm font-semibold rounded-full">Recommended Approach</span>
              </div>
              <p className="text-muted-foreground leading-8 mb-6">
                <strong className="text-foreground">For established business owners with proven products:</strong> Start with our comprehensive growth partnership that combines all three strategies. The message "Referrals build businesses. Systems scale them." resonates most with successful entrepreneurs who have hit a growth plateau but have the budget and credibility to invest in scaling.
              </p>
              <p className="text-muted-foreground leading-8">
                For newer businesses or MSMEs, start with targeted digital campaigns and SEO, then add cold calling and CRM once you have initial traction. Use all strategies in rotation to address different audience segments and maximize lead generation.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-background/50 p-5">
                  <p className="text-sm uppercase tracking-wider text-secondary font-semibold mb-2">For Visibility Gaps</p>
                  <p className="text-foreground font-medium">Digital Campaigns + SEO</p>
                </div>
                <div className="rounded-2xl border border-border bg-background/50 p-5">
                  <p className="text-sm uppercase tracking-wider text-secondary font-semibold mb-2">For Lead Conversion</p>
                  <p className="text-foreground font-medium">CRM Setup + Cold Calling</p>
                </div>
                <div className="rounded-2xl border border-border bg-background/50 p-5">
                  <p className="text-sm uppercase tracking-wider text-secondary font-semibold mb-2">For Rapid Growth</p>
                  <p className="text-foreground font-medium">All Strategies Combined</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Layout Panel */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Scale Your Business?
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
                Stop relying on referrals alone. Let us build your digital visibility, generate qualified leads, and create a sales pipeline that converts. Your product deserves great buyers — we'll find them for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@eprnexuss.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-primary-foreground px-8 py-4 text-sm font-semibold hover:bg-secondary/90 transition"
                >
                  <Megaphone size={18} />
                  Schedule Consultation
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-semibold hover:border-primary-foreground/60 transition"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessGrowthAndLeadGeneration;