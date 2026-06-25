import Seo from "@/components/Seo";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Instagram, Award, Users, Shield, Leaf } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Dilshad Malik",
    role: "Co-Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "With over 20 years of experience in the recycling industry, Dilshad Malik has played a pivotal role in setting up numerous e-waste, tyre, and plastic recycling plants. As a partner in multiple recycling ventures, his expertise in plant operations, waste management, and sustainable solutions has been instrumental in driving the industry forward.",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "Sameer Malik",
    role: "Technical Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "An experienced engineer specializing in plant setup, Sameer Malik has been instrumental in designing and establishing state-of-the-art recycling plants. His technical knowledge and hands-on experience in setting up infrastructure for e-waste, tyre, and plastic recycling facilities ensure efficient and sustainable operations.",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "Dikesh Sing",
    role: "Advisory Board Member",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "A former Pollution Control Board official, Dikesh Sing serves as a valuable advisor to our company. With a track record of successfully facilitating over 1,000 licenses for various environmental projects, he provides strategic guidance on regulatory compliance, environmental policies, and sustainable business practices.",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  }
];

const highlights = [
  {
    icon: Award,
    title: "20+ Years",
    desc: "Combined industry experience"
  },
  {
    icon: Users,
    title: "1000+",
    desc: "Licenses facilitated"
  },
  {
    icon: Shield,
    title: "Certified",
    desc: "Regulatory compliance experts"
  },
  {
    icon: Leaf,
    title: "Sustainable",
    desc: "Environmental commitment"
  }
];

const Team = () => {
  return (
    <>
    <Seo
  title="Our Team"
  description="Meet the leadership team at EPR Nexuss with decades of experience in recycling, regulatory compliance, and sustainable waste management."
  keywords={[
    "EPR Nexuss Team",
    "Dilshad Malik EPR",
    "Mohd Tabish expert EPR Consultant in India at EPR Nexuss Solution PVT LTD",
    "Aman Tariq EPR Nexuss Solutions PVT LTD",
    "EPR Compliance Experts",
    "Waste Management Leadership",
    "Recycling Industry Experts India"
  ]}
       url="https://eprnexuss.com/team"
        type="website"
/>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", 
            backgroundSize: "48px 48px" 
          }} />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold uppercase tracking-wider mb-6"
            >
              Our Leadership
            </motion.span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2 mb-6 leading-tight">
              Meet Our Founders & Team
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Dedicated professionals committed to revolutionizing waste management and building a sustainable future through innovative recycling solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-foreground">{item.title}</div>
                  <div className="text-muted-foreground text-sm">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">The Visionaries</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Leadership That Inspires
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/40 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Social Links - Appear on Hover */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <a href={member.social.facebook} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href={member.social.twitter} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href={member.social.linkedin} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.social.instagram} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full uppercase tracking-wide">
                      {member.role}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", 
            backgroundSize: "40px 40px" 
          }} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Leaf className="w-16 h-16 text-secondary mx-auto mb-8" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Driving Change Through Leadership
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Under the guidance of our experienced leadership team, we have established numerous successful recycling projects, making a significant impact in the field of pollution control and waste recycling. Our commitment to innovation and sustainability continues to drive the industry forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-secondary/20 rounded-full text-secondary font-semibold">
                Innovation
              </div>
              <div className="px-6 py-3 bg-secondary/20 rounded-full text-secondary font-semibold">
                Sustainability
              </div>
              <div className="px-6 py-3 bg-secondary/20 rounded-full text-secondary font-semibold">
                Excellence
              </div>
              <div className="px-6 py-3 bg-secondary/20 rounded-full text-secondary font-semibold">
                Compliance
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Team;
