import { motion } from "framer-motion";
import { TrendingUp, Shield, Scale, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import tradingImage from "@/assets/home/banner-01.jpg";

const features = [
  { icon: TrendingUp, title: "Real-time Trading", desc: "Live EPR credit prices and instant transactions" },
  { icon: Shield, title: "Secure Platform", desc: "End-to-end encrypted trading with verified partners" },
  { icon: Scale, title: "Fair Pricing", desc: "Transparent market rates for all waste categories" },
];

const services = [
  "EPR Plastic",
  "EPR Tyre",
  "EPR ELV",
  "EPR Used Oil",
  "EPR Metals",
  "EPR Battery",
];

const TradingPlatform = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-4 h-4" />
            EPR Trading Platform
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            Electronic Trading & Settlement
          </h2>
          <p className="text-blue-200/80 text-lg max-w-2xl mx-auto">
            India's premier platform for buying and selling EPR credits across all waste categories
          </p>
        </motion.div>

        {/* Main Image */}
        {/* Optimized Banner Image */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative mb-12"
>
  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl" />
  
  <motion.div 
    className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20"
    whileHover={{ scale: 1.01 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative w-full aspect-[16/9] md:aspect-[21/10] lg:aspect-[2.1/1] overflow-hidden rounded-2xl">
      <img
        src={tradingImage}   // Use the new cropped image here
        alt="EPR Nexuss Trading Platform"
        className="w-full h-full "
      />
    </div>
  </motion.div>
</motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-blue-200/60 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-white/80 text-sm uppercase tracking-wider mb-4">All Waste Categories Supported</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service, i) => (
              <motion.span
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20"
              >
                <CheckCircle className="w-4 h-4" />
                {service}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all group">
            <a href="/contact">
              Start Trading Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingPlatform;
