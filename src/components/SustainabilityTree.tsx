import { motion, type Variants } from "framer-motion";
import { Recycle, Leaf, TreePine, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Recycle,
    title: "Zero Waste Goal",
    desc: "Committed to achieving zero waste through innovative recycling solutions.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Process",
    desc: "Environmentally conscious methods for sustainable waste management.",
  },
  {
    icon: TreePine,
    title: "Green Initiative",
    desc: "Planting trees and reducing carbon footprint for a better tomorrow.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    desc: "Contributing to worldwide sustainability goals through EPR compliance.",
  },
];

const stats = [
  { value: "50K+", label: "Tons Recycled" },
  { value: "100+", label: "Partner Plants" },
  { value: "25+", label: "Cities Covered" },
  { value: "99%", label: "Client Satisfaction" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Shared viewport config: amount 0 fires on first pixel visible (avoids
// mobile short-viewport threshold misfires); small negative margin lets
// it trigger a touch before fully in view.
const vp = { once: true, amount: 0 as const, margin: "-10% 0px -10% 0px" };

const SustainabilityTree = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            <TreePine className="w-4 h-4" />
            Our Commitment
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Building a Greener Tomorrow
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Like a tree that gives back to nature, we nurture a circular economy where
            every waste product finds new life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Illustration Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200/50 via-teal-200/50 to-cyan-200/50 rounded-3xl blur-xl opacity-70" />

            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/60 backdrop-blur-sm border border-emerald-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/*
                Padding-bottom box instead of Tailwind `aspect-[4/5]`.
                CSS `aspect-ratio` is unsupported/flaky on some mobile
                browsers, silently collapsing this container to height 0
                — which collapses the absolutely-positioned SVG inside
                it too. Padding-bottom percentage always resolves
                against width, so it's reliable everywhere.
              */}
              <div className="relative w-full" style={{ paddingBottom: "125%" }}>
                <div className="absolute inset-0 overflow-visible">
                  <CircularEconomyTreeIllustration />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-emerald-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">100%</div>
                  <div className="text-muted-foreground text-sm">Recyclable</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }}
                className="group flex items-start gap-4 p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <Button
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all group"
              >
                <a href="/contact">
                  Join Our Mission
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-emerald-600 mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilityTree;

/**
 * Inline SVG illustration: a stylized tree whose canopy is built from
 * recycling-loop foliage clusters, growing out of a circular-economy
 * arrow base.
 *
 * MOBILE FIX: previously each SVG sub-element (<motion.g>, <motion.path>)
 * had its own `whileInView` prop, meaning Framer Motion attached a
 * separate IntersectionObserver to every nested SVG node. On mobile
 * WebKit this reliably fails to fire for nested SVG children scaled by
 * a viewBox — elements silently stay at their `initial` (invisible)
 * state forever, which is exactly what showed up in testing (only the
 * badge and the always-on `animate` particles were visible; the trunk,
 * canopy, and arrow ring never appeared).
 *
 * Fix: ONE whileInView trigger lives on the outer wrapper `motion.svg`.
 * All children just declare `variants` and inherit "visible"/"hidden"
 * from the parent automatically (Framer's built-in variant
 * propagation) — no per-child observer needed. `staggerChildren`
 * recreates the staggered entrance via automatic per-child delays.
 */

const svgContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const arrowRingVariants: Variants = {
  hidden: { opacity: 0, rotate: -20 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const trunkVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const leafVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

const glyphVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

function CircularEconomyTreeIllustration() {
  const leafClusters = [
    { cx: 200, cy: 120, r: 46 },
    { cx: 140, cy: 150, r: 36 },
    { cx: 262, cy: 150, r: 36 },
    { cx: 168, cy: 95, r: 32 },
    { cx: 232, cy: 95, r: 32 },
    { cx: 200, cy: 70, r: 30 },
  ];

  return (
    <motion.svg
      viewBox="0 0 400 460"
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 w-full h-full"
      style={{ overflow: "visible" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      variants={svgContainerVariants}
    >
      <defs>
        <radialGradient id="tree-sky" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#d1fae5" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ecfeff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tree-canopy" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="tree-trunk" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a16207" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>

      <rect width="400" height="460" fill="url(#tree-sky)" />

      {/* Ground */}
      <ellipse cx="200" cy="420" rx="150" ry="18" fill="#059669" fillOpacity="0.12" />

      {/* Circular-economy arrow ring at the roots */}
      <motion.g variants={arrowRingVariants} style={{ transformOrigin: "200px 400px" }}>
        <circle
          cx="200"
          cy="400"
          r="58"
          fill="none"
          stroke="#10b981"
          strokeWidth="6"
          strokeDasharray="18 14"
          strokeLinecap="round"
        />
        <path
          d="M 200 342 L 210 356 L 190 356 Z"
          fill="#10b981"
          transform="rotate(8 200 349)"
        />
      </motion.g>

      {/* Trunk */}
      <motion.path
        d="M 192 400 C 190 340, 194 280, 198 220 L 202 220 C 206 280, 210 340, 208 400 Z"
        fill="url(#tree-trunk)"
        variants={trunkVariants}
      />

      {/* Canopy leaf clusters, each a stylized recycling loop */}
      {leafClusters.map((leaf, i) => (
        <motion.g
          key={i}
          variants={leafVariants}
          style={{ transformOrigin: `${leaf.cx}px ${leaf.cy}px` }}
        >
          <circle cx={leaf.cx} cy={leaf.cy} r={leaf.r} fill="url(#tree-canopy)" />
          <circle cx={leaf.cx} cy={leaf.cy} r={leaf.r} fill="#ffffff" fillOpacity="0.06" />
        </motion.g>
      ))}

      {/* Central recycling glyph on the canopy */}
      <motion.g variants={glyphVariants}>
        <path
          d="M 200 95 l 10 17 h -8 l -6 -10 z
             M 178 128 l 19 -3 l -4 8 l -11 2 z
             M 222 128 l -19 -3 l 4 8 l 11 2 z"
          fill="#ecfdf5"
          fillOpacity="0.85"
        />
      </motion.g>

      {/* Drifting leaf particles — independent looping animation, unaffected by this fix */}
      {[
        { x: 90, y: 130, delay: 0 },
        { x: 320, y: 170, delay: 0.8 },
        { x: 70, y: 260, delay: 1.6 },
        { x: 330, y: 300, delay: 0.4 },
      ].map((p, i) => (
        <motion.circle
          key={`particle-${i}`}
          cx={p.x}
          cy={p.y}
          r="5"
          fill="#6ee7b7"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.9, 0], y: [0, -18, -30] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </motion.svg>
  );
}