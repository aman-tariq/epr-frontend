import { motion } from "framer-motion";
import { Target, Eye, Users, Award, TrendingUp, Globe, Recycle, ArrowRight } from "lucide-react";
import gallery5 from "@/assets/gallery-5.jpg";
import recyclingProcess from "@/assets/recycling-process.jpg";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "10K+", label: "EPR Credits Traded" },
  { value: "50+", label: "Recycling Partners" },
  { value: "6+", label: "Waste Categories" },
];

const values = [
  { icon: Target, title: "Mission-Driven", desc: "Committed to sustainable waste management and environmental protection." },
  { icon: Eye, title: "Transparency", desc: "Full visibility into credit generation, trading, and compliance processes." },
  { icon: Users, title: "Client-First", desc: "Dedicated support and tailored solutions for every organization." },
  { icon: Award, title: "Excellence", desc: "Highest standards of quality in every service we deliver." },
  { icon: TrendingUp, title: "Innovation", desc: "Continuously improving our processes with cutting-edge technology." },
  { icon: Globe, title: "Sustainability", desc: "Building a circular economy for a greener, healthier planet." },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
              Pioneering EPR Solutions for a Sustainable Future
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              EPR Nexuss is India's trusted partner in Extended Producer Responsibility compliance, providing end-to-end waste management and certified EPR credit trading services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl font-bold text-secondary">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="company" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={gallery5} alt="Our mission" className="rounded-2xl shadow-2xl" loading="lazy" width={600} height={800} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-6">
                Committed to Environmental Responsibility
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded with a vision to bridge the gap between producers and sustainable waste management, EPR Nexuss has grown into a leading platform for EPR credit trading and compliance services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work with certified recyclers, producers, and regulatory bodies to ensure seamless compliance with Extended Producer Responsibility guidelines, promoting a circular economy across India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="epr" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">What Drives Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-secondary/40 transition-all duration-300"
              >
                <v.icon className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recycling Process */}
      <section id="waste" className="py-20 lg:py-28 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4"
            >
              <Recycle size={16} />
              <span>Our Process</span>
            </motion.div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              How We <span className="text-emerald-600">Recycle</span> Plastic
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From collection to final product, we ensure every step of the recycling 
              process meets the highest environmental standards.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-200/50 border-4 border-white">
              <img
                src={recyclingProcess}
                alt="Plastic Recycling Process - From Collection to Final Product"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-emerald-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-slate-600">Recycled</div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-200/50 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200/50 rounded-full blur-2xl" />
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { step: "01", title: "Collection", desc: "Waste collected at centers" },
              { step: "02", title: "Transport", desc: "Sent to recycling facility" },
              { step: "03", title: "Processing", desc: "Sorted and cleaned" },
              { step: "04", title: "Reuse", desc: "Made into new products" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 hover:shadow-xl"
            >
              Start Recycling With Us
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
