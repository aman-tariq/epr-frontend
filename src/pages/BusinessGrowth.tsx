import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, TrendingUp, Target, Zap, BarChart3, MessageSquare, Share2, Users, Search, Megaphone } from "lucide-react";
import serviceBanner from "@/assets/epr-services-banner.jpg";
import platformImage from "@/assets/recycling-process.jpg";
import companyBanner from "@/assets/company-banner.jpg";
import eWasteTypes from "@/assets/e-waste-types.jpg";
import showcaseImg from "@/assets/showcase-1.jpg";
import StickyContactForm from "@/components/StickyContactForm";

const BusinessGrowth = () => {
  const painPoints = [
    {
      id: "visibility",
      title: "Banner 5A — Pain Point",
      category: "Visibility",
      bgColor: "#FAEEDA",
      categoryBg: "#FAC775",
      categoryText: "#633806",
      headerText: "#854F0B",
      image: platformImage,
      mainTitle: "You have spent years building a product or service that genuinely works — but your pipeline is dry, your phone isn't ringing, and businesses that are half as good as yours are winning contracts you should have won.",
      subtitle: "The problem is never the product. It is always the visibility.",
      tags: ["No inbound leads", "Low brand recognition", "Losing to weaker competitors", "Stagnant revenue"],
    },
    {
      id: "conversion",
      title: "Banner 6A — Pain Point",
      category: "Conversion",
      bgColor: "#EAF3DE",
      categoryBg: "#C0DD97",
      categoryText: "#27500A",
      headerText: "#3B6D11",
      image: companyBanner,
      mainTitle: "You get enquiries — but they go cold. You attend meetings — but they don't close. Your sales cycle stretches for months while your competitors convert the same prospects in weeks because they have a structured pipeline and you are running on instinct.",
      subtitle: "Leads without conversion are just wasted marketing spend.",
      tags: ["Cold leads", "Long sales cycles", "No structured pipeline", "Inconsistent revenue"],
    },
    {
      id: "growth",
      title: "Banner 7A — Pain Point",
      category: "Growth",
      bgColor: "#E6F1FB",
      categoryBg: "#B5D4F4",
      categoryText: "#0C447C",
      headerText: "#185FA5",
      image: eWasteTypes,
      mainTitle: "You built your business on referrals and relationships — and it worked until it didn't. Now growth has plateaued, new clients are hard to find, and you have no predictable way to fill your pipeline without depending entirely on who you know.",
      subtitle: "Referrals build businesses. Systems scale them.",
      tags: ["Referral dependency", "Growth plateau", "No digital presence", "Unpredictable revenue"],
    },
    {
      id: "market-position",
      title: "Banner 8A — Pain Point",
      category: "Market Position",
      bgColor: "#FFF0E6",
      categoryBg: "#FFB800",
      categoryText: "#5C3A00",
      headerText: "#8B5A00",
      image: showcaseImg,
      mainTitle: "Your competitors are dominating search results, your website gets zero organic traffic, and your social media presence is non-existent. While they capture market share, you're invisible to the prospects actively searching for solutions like yours.",
      subtitle: "In the digital age, if you're not found, you don't exist.",
      tags: ["Zero organic traffic", "Poor search rankings", "No social media", "Weak online presence"],
    },
    {
      id: "team-capacity",
      title: "Banner 9A — Pain Point",
      category: "Team Capacity",
      bgColor: "#F0E6FF",
      categoryBg: "#D9B0FF",
      categoryText: "#4A0080",
      headerText: "#6B1199",
      image: serviceBanner,
      mainTitle: "You have a small sales team managing multiple responsibilities — prospecting, follow-ups, admin work, and operations. There's simply no bandwidth to build a systematic approach to lead generation and qualification while still delivering quality service to existing clients.",
      subtitle: "Your best salespeople are buried in busywork instead of selling.",
      tags: ["Limited team resources", "No time for prospecting", "Administrative burden", "Stretched team capacity"],
    },
  ];

  const solutions = [
    {
      id: "visibility-sol",
      title: "Banner 5B — Solution",
      category: "Visibility",
      bgColor: "#FAEEDA",
      categoryBg: "#FAC775",
      categoryText: "#633806",
      image: platformImage,
      mainTitle: "We find the right buyers for what you have built — through targeted digital campaigns, SEO-driven content, and a lead conversion system that turns your brand from invisible to the most credible name in your category.",
      subtitle: "Great products deserve great pipelines. We build both.",
      tags: ["Targeted digital campaigns", "SEO content strategy", "Lead conversion system", "Brand authority building"],
    },
    {
      id: "conversion-sol",
      title: "Banner 6B — Solution",
      category: "Conversion",
      bgColor: "#EAF3DE",
      categoryBg: "#C0DD97",
      categoryText: "#27500A",
      image: companyBanner,
      mainTitle: "We build your entire sales pipeline — from first contact to closed deal — with a CRM system tracking every lead, every follow-up and every conversion stage so your business stops running on memory and starts running on a system that closes.",
      subtitle: "We don't just generate leads. We convert them.",
      tags: ["Full pipeline management", "Custom CRM setup", "Follow-up automation", "Revenue predictability"],
    },
    {
      id: "growth-sol",
      title: "Banner 7B — Solution",
      category: "Growth",
      bgColor: "#E6F1FB",
      categoryBg: "#B5D4F4",
      categoryText: "#0C447C",
      image: eWasteTypes,
      mainTitle: "We become your growth partner — building your digital brand, generating qualified leads through SEO and targeted campaigns, and if your product is the right fit, putting our own sales team behind closing deals for you.",
      subtitle: "We bring the system. You bring the product. Together we scale.",
      tags: ["Digital brand building", "Qualified lead generation", "Dedicated sales team", "End to end growth partnership"],
    },
    {
      id: "market-position-sol",
      title: "Banner 8B — Solution",
      category: "Market Position",
      bgColor: "#FFF0E6",
      categoryBg: "#FFB800",
      categoryText: "#5C3A00",
      image: showcaseImg,
      mainTitle: "We dominate your digital footprint — building a high-ranking website, creating SEO-optimized content that attracts your ideal customers, and establishing your brand across all major search and social channels so you become the obvious choice.",
      subtitle: "Be the company your prospects can't help but find.",
      tags: ["Organic search dominance", "Content authority", "Social media growth", "Digital market leadership"],
    },
    {
      id: "team-capacity-sol",
      title: "Banner 9B — Solution",
      category: "Team Capacity",
      bgColor: "#F0E6FF",
      categoryBg: "#D9B0FF",
      categoryText: "#4A0080",
      image: serviceBanner,
      mainTitle: "We become your external sales and marketing team — handling prospecting, lead qualification, outreach, and follow-up so your team stays focused on delivery and closing high-value deals instead of chasing opportunities.",
      subtitle: "Free your team to do what they do best.",
      tags: ["External sales team", "Lead prospecting", "Qualification & outreach", "Bandwidth expansion"],
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

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Service Overview</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-4">
              Business Growth & Lead Generation
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mt-6">
              Strategic business growth services that generate qualified leads, build digital brand authority, and create sales pipelines that convert. We help established businesses break through visibility barriers and scale predictably.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground hover:border-primary-foreground/60 transition"
              >
                <ArrowLeft size={16} /> Back to Services
              </Link>
              <a
                href="mailto:info@eprnexuss.com"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary/90 transition"
              >
                <Mail size={16} /> Request a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points & Solutions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_290px] items-start">
            <div>
              <div className="mb-16">
                <span className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
                  <TrendingUp size={18} />
                  Understanding Your Challenges
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Five Key Growth Challenges & Our Solutions</h2>
              </div>

              {/* Pain Points */}
              <div className="grid gap-8 mb-20">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={point.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-[2rem] overflow-hidden border-0.5 border-border bg-card"
                    style={{ borderColor: "var(--color-border-tertiary)" }}
                  >
                    {/* Image */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={point.image}
                        alt={point.category}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div style={{ backgroundColor: point.bgColor }} className="absolute inset-0 mix-blend-multiply opacity-60" />
                    </div>
                    
                    <div style={{ backgroundColor: point.bgColor }} className="px-6 py-5 border-b-0.5 border-border flex justify-between items-center">
                      <p style={{ color: point.headerText }} className="font-semibold text-sm uppercase tracking-wider">
                        {point.title}
                      </p>
                      <span style={{ backgroundColor: point.categoryBg, color: point.categoryText }} className="text-xs font-semibold px-3 py-1 rounded-full">
                        {point.category}
                      </span>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                        {point.mainTitle}
                      </h3>
                      <p className="text-muted-foreground text-base mb-6 italic leading-relaxed">
                        {point.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {point.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium px-4 py-2 rounded-full border-0.5 border-border"
                            style={{
                              backgroundColor: "var(--color-background-secondary)",
                              color: "var(--color-text-secondary)",
                              borderColor: "var(--color-border-tertiary)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Solutions */}
              <div className="grid gap-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-[2rem] overflow-hidden border-2"
                    style={{
                      borderColor: solution.id === "visibility-sol" ? "var(--color-border-warning)" : solution.id === "conversion-sol" ? "var(--color-border-success)" : solution.id === "growth-sol" ? "var(--color-border-info)" : solution.id === "market-position-sol" ? "#FFB800" : "#D9B0FF",
                      backgroundColor: "var(--color-background-primary)",
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={solution.image}
                        alt={solution.category}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div style={{ backgroundColor: solution.categoryBg }} className="absolute inset-0 mix-blend-multiply opacity-40" />
                    </div>

                    <div style={{ backgroundColor: solution.categoryBg }} className="px-6 py-5 border-b-0.5 border-border flex justify-between items-center">
                      <p style={{ color: solution.categoryText }} className="font-semibold text-sm uppercase tracking-wider">
                        {solution.title}
                      </p>
                      <span style={{ backgroundColor: solution.bgColor, color: solution.categoryText }} className="text-xs font-semibold px-3 py-1 rounded-full">
                        {solution.category}
                      </span>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                        {solution.mainTitle}
                      </h3>
                      <p className="text-muted-foreground text-base mb-6 italic leading-relaxed">
                        {solution.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {solution.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              backgroundColor: solution.bgColor,
                              color: solution.categoryText,
                              borderColor: solution.categoryBg,
                            }}
                            className="text-xs font-medium px-4 py-2 rounded-full border-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sticky Form */}
            <div className="hidden lg:block sticky top-24">
              <StickyContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Strategies */}
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

      {/* Key Recommendations */}
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

      {/* CTA Section */}
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
    </>
  );
};

export default BusinessGrowth;
