import { BarChart3, Megaphone, MessageSquare, Search, Share2, Target, Users, Zap } from "lucide-react";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";

import React from 'react'

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

const StrategicApproach = () => {
  return (
    <div>
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
    </div>
   
  )
}

export default StrategicApproach


