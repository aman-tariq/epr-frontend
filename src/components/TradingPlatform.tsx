import { motion, type Variants } from "framer-motion";
import { TrendingUp, Shield, Scale, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: TrendingUp,
    title: "Real-time Trading",
    desc: "Live EPR credit prices and instant transactions",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    desc: "End-to-end encrypted trading with verified partners",
  },
  {
    icon: Scale,
    title: "Fair Pricing",
    desc: "Transparent market rates for all waste categories",
  },
];

const services = ["EPR Plastic", "EPR Tyre", "EPR ELV", "EPR Used Oil", "EPR Metals", "EPR Battery"];

const stats = [
  { label: "Credits Traded", value: "2.4M+" },
  { label: "Verified Partners", value: "850+" },
  { label: "Avg. Settlement", value: "< 48hrs" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TradingPlatform = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-4 h-4" />
            EPR Trading Platform
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            Electronic Trading &amp; Settlement
          </h2>
          <p className="text-blue-200/80 text-lg max-w-2xl mx-auto">
            India&apos;s premier platform for buying and selling EPR credits across all waste categories
          </p>
        </motion.div>

        {/* Illustration panel replacing the banner image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-12"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl" />

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20 bg-slate-950/60 backdrop-blur-sm">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.4/1]">
              <TradingNetworkIllustration />

              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 px-3 py-2.5 md:px-4 md:py-3 text-center"
                    >
                      <p className="text-white font-display font-bold text-sm md:text-xl">
                        {stat.value}
                      </p>
                      <p className="text-blue-200/60 text-[10px] md:text-xs uppercase tracking-wide mt-0.5">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-blue-200/60 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-white/80 text-sm uppercase tracking-wider mb-4">
            All Waste Categories Supported
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service, i) => (
              <motion.span
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-colors cursor-default"
              >
                <CheckCircle className="w-4 h-4" />
                {service}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all group"
          >
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

/**
 * Inline SVG illustration: three nodes (Seller, Exchange, Buyer) with
 * animated flowing connection lines and pulsing credit dots, standing in
 * for a literal product screenshot. No external image assets required.
 */
function TradingNetworkIllustration() {
  return (
    <svg
      viewBox="0 0 960 400"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="tp-grid" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="tp-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="960" height="400" fill="url(#tp-grid)" />

      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 120}
          y1="0"
          x2={i * 120}
          y2="400"
          stroke="#60a5fa"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 100}
          x2="960"
          y2={i * 100}
          stroke="#60a5fa"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      ))}

      {/* Connection paths: seller -> exchange -> buyer */}
      <motion.path
        d="M 190 200 C 320 200, 340 200, 470 200"
        fill="none"
        stroke="#38bdf8"
        strokeOpacity="0.35"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.path
        d="M 490 200 C 620 200, 640 200, 770 200"
        fill="none"
        stroke="#38bdf8"
        strokeOpacity="0.35"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Flowing credit pulses along the connections */}
      <motion.circle
        r="4"
        fill="#7dd3fc"
        cy={200}
        initial={{ cx: 190, opacity: 0 }}
        animate={{ cx: [190, 470], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.6 }}
      />
      <motion.circle
        r="4"
        fill="#7dd3fc"
        cy={200}
        initial={{ cx: 490, opacity: 0 }}
        animate={{ cx: [490, 770], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 1.4 }}
      />

      {/* Seller node */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <circle cx="150" cy="200" r="46" fill="#0f172a" stroke="#3b82f6" strokeOpacity="0.5" strokeWidth="2" />
        <circle cx="150" cy="200" r="46" fill="#3b82f6" fillOpacity="0.08" />
        <text x="150" y="192" textAnchor="middle" fontSize="13" fontWeight="600" fill="#e0f2fe">
          Seller
        </text>
        <text x="150" y="212" textAnchor="middle" fontSize="10" fill="#93c5fd" opacity="0.7">
          Producer / PRO
        </text>
      </motion.g>

      {/* Exchange node (center, emphasized) */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <circle cx="480" cy="200" r="58" fill="#0f172a" stroke="#22d3ee" strokeWidth="2.5" />
        <circle cx="480" cy="200" r="58" fill="#22d3ee" fillOpacity="0.1" />
        <motion.circle
          cx="480"
          cy="200"
          r="58"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.5"
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 1.35 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <text x="480" y="192" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ecfeff">
          Exchange
        </text>
        <text x="480" y="212" textAnchor="middle" fontSize="10" fill="#67e8f9" opacity="0.8">
          Verified Settlement
        </text>
      </motion.g>

      {/* Buyer node */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <circle cx="810" cy="200" r="46" fill="#0f172a" stroke="#3b82f6" strokeOpacity="0.5" strokeWidth="2" />
        <circle cx="810" cy="200" r="46" fill="#3b82f6" fillOpacity="0.08" />
        <text x="810" y="192" textAnchor="middle" fontSize="13" fontWeight="600" fill="#e0f2fe">
          Buyer
        </text>
        <text x="810" y="212" textAnchor="middle" fontSize="10" fill="#93c5fd" opacity="0.7">
          Obligated Entity
        </text>
      </motion.g>
    </svg>
  );
}