import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, Scale, ArrowRight, CheckCircle, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: TrendingUp,
    title: "Real-time Trading",
    desc: "Live EPR credit prices and instant transactions",
    accent: "amber",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    desc: "End-to-end encrypted trading with verified partners",
    accent: "emerald",
  },
  {
    icon: Scale,
    title: "Fair Pricing",
    desc: "Transparent market rates for all waste categories",
    accent: "teal",
  },
];

const accentClasses: Record<string, { bg: string; icon: string; border: string }> = {
  amber: { bg: "bg-amber-400/15", icon: "text-amber-300", border: "hover:border-amber-400/30" },
  emerald: { bg: "bg-emerald-500/15", icon: "text-emerald-300", border: "hover:border-emerald-500/30" },
  teal: { bg: "bg-teal-400/15", icon: "text-teal-300", border: "hover:border-teal-400/30" },
};

const services = ["EPR Plastic", "EPR Tyre", "EPR ELV", "EPR Used Oil", "EPR Metals", "EPR Battery"];

const stats = [
  { label: "Credits Traded", value: "2.4M+" },
  { label: "Verified Partners", value: "850+" },
  { label: "Avg. Settlement", value: "< 48hrs" },
];

const MARKETPLACE_URL = "/marketplace/";
const EPR_CREDITS_URL = "/marketplace/epr-credits/";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const tokenGlyphs = [
  { top: "14%", left: "6%", size: 30, color: "#f5b754", duration: 7, delay: 0 },
  { top: "62%", left: "4%", size: 20, color: "#34d399", duration: 9, delay: 1.2 },
  { top: "22%", left: "92%", size: 24, color: "#34d399", duration: 8, delay: 0.6 },
  { top: "70%", left: "94%", size: 34, color: "#f5b754", duration: 10, delay: 2 },
  { top: "88%", left: "48%", size: 18, color: "#f5b754", duration: 6.5, delay: 1.6 },
];

const TradingPlatform = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#04120d] via-[#0a2b22] to-[#051a14] relative overflow-hidden">
      {/* Ambient glow field */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 left-1/5 w-[28rem] h-[28rem] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-16 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl" />
      </div>

      {/* Faint orbit rings, echoing the circular-exchange motif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full border border-emerald-400/10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-amber-300/10" />
        <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full border border-emerald-400/10" />
      </div>

      {/* Drifting credit-token glyphs */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {tokenGlyphs.map((t, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              top: t.top,
              left: t.left,
              width: t.size,
              height: t.size,
              border: `1.5px solid ${t.color}`,
              opacity: 0.18,
            }}
            animate={{ y: [0, -14, 0], opacity: [0.12, 0.28, 0.12] }}
            transition={{ duration: t.duration, delay: t.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/15 text-emerald-300 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-4 h-4" />
            EPR Trading Platform
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            Electronic Trading &amp; Settlement
          </h2>
          <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto">
            India&apos;s premier platform for buying and selling EPR credits across all waste categories
          </p>
        </motion.div>

        {/* Illustration panel — clickable through to the marketplace */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="relative mb-12 group"
        >
<a href={MARKETPLACE_URL} className="block">
<div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-amber-400/15 to-emerald-500/20 rounded-3xl blur-xl transition-opacity group-hover:opacity-80" />

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/20 bg-[#04120d]/70 backdrop-blur-sm">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.4/1]">
              <TradingNetworkIllustration />

              <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#04120d]/80 backdrop-blur-md border border-white/10 text-xs font-medium text-emerald-100/90 opacity-0 group-hover:opacity-100 transition-opacity">
                View marketplace
                <ArrowRight className="w-3.5 h-3.5" />
              </div>

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
                      <p className="text-emerald-100/60 text-[10px] md:text-xs uppercase tracking-wide mt-0.5">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
           </a>
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
              className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/[0.07] transition-all ${accentClasses[feature.accent].border}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${accentClasses[feature.accent].bg}`}>
                <feature.icon className={`w-6 h-6 ${accentClasses[feature.accent].icon}`} />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-emerald-100/60 text-sm">{feature.desc}</p>
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
          <h3 className="text-emerald-100/70 text-sm uppercase tracking-wider mb-4">
            All Waste Categories Supported
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href={EPR_CREDITS_URL}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-200 rounded-full text-sm border border-emerald-500/20 hover:bg-amber-400/15 hover:border-amber-400/30 hover:text-amber-200 transition-colors"
                >
                  <CheckCircle className="w-4 h-4" />
                  {service}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            className="bg-emerald-500 hover:bg-emerald-400 text-[#04120d] font-semibold px-8 py-6 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all group"
          >
            <a href={EPR_CREDITS_URL}>
              Buy &amp; Sell EPR Credits
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-amber-400/30 bg-white/5 hover:bg-amber-400/10 text-white font-semibold px-8 py-6 rounded-xl backdrop-blur-sm transition-all"
          >
            <a href={MARKETPLACE_URL}>
              <Store className="w-5 h-5 mr-2" />
              Explore Marketplace
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
          <stop offset="0%" stopColor="#065f46" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#04120d" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="tp-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
          <stop offset="50%" stopColor="#f5b754" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
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
          stroke="#34d399"
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
          stroke="#34d399"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      ))}

      {/* Connection paths: seller -> exchange -> buyer */}
      <motion.path
        d="M 190 200 C 320 200, 340 200, 470 200"
        fill="none"
        stroke="url(#tp-line)"
        strokeOpacity="0.7"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.path
        d="M 490 200 C 620 200, 640 200, 770 200"
        fill="none"
        stroke="url(#tp-line)"
        strokeOpacity="0.7"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Flowing credit pulses along the connections */}
      <motion.circle
        r="4"
        fill="#f5b754"
        cy={200}
        initial={{ cx: 190, opacity: 0 }}
        animate={{ cx: [190, 470], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.6 }}
      />
      <motion.circle
        r="4"
        fill="#f5b754"
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
        <circle cx="150" cy="200" r="46" fill="#04120d" stroke="#34d399" strokeOpacity="0.5" strokeWidth="2" />
        <circle cx="150" cy="200" r="46" fill="#34d399" fillOpacity="0.08" />
        <text x="150" y="192" textAnchor="middle" fontSize="13" fontWeight="600" fill="#ecfdf5">
          Seller
        </text>
        <text x="150" y="212" textAnchor="middle" fontSize="10" fill="#6ee7b7" opacity="0.7">
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
        <circle cx="480" cy="200" r="58" fill="#04120d" stroke="#f5b754" strokeWidth="2.5" />
        <circle cx="480" cy="200" r="58" fill="#f5b754" fillOpacity="0.12" />
        <motion.circle
          cx="480"
          cy="200"
          r="58"
          fill="none"
          stroke="#f5b754"
          strokeWidth="1.5"
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 1.35 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <text x="480" y="192" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fffbeb">
          Exchange
        </text>
        <text x="480" y="212" textAnchor="middle" fontSize="10" fill="#fcd34d" opacity="0.85">
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
        <circle cx="810" cy="200" r="46" fill="#04120d" stroke="#34d399" strokeOpacity="0.5" strokeWidth="2" />
        <circle cx="810" cy="200" r="46" fill="#34d399" fillOpacity="0.08" />
        <text x="810" y="192" textAnchor="middle" fontSize="13" fontWeight="600" fill="#ecfdf5">
          Buyer
        </text>
        <text x="810" y="212" textAnchor="middle" fontSize="10" fill="#6ee7b7" opacity="0.7">
          Obligated Entity
        </text>
      </motion.g>
    </svg>
  );
}