import { useMemo, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Activity,
  BadgeCheck,
  Battery,
  Box,
  Factory,
  Monitor,
  Recycle,
  Store,
  TrendingUp,
  Truck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { serviceCategoriesNav, services as servicesList } from "@/lib/services";

/* -------------------------------------------------------------------------- */
/*  Static maps (no dynamic Tailwind class interpolation)                      */
/* -------------------------------------------------------------------------- */

const categoryMeta: Record<string, { description: string; icon: LucideIcon; short: string }> = {
  "Recycling Setups": {
    short: "Recycling Setups",
    description:
      "Design and commission recycling plants for batteries, e-waste, solar panels and plastics.",
    icon: Factory,
  },
  "EPR Credits": {
    short: "EPR Credits",
    description:
      "Certified EPR credit services across major waste categories with regulator-ready documentation.",
    icon: BadgeCheck,
  },
  "Plant Operation Intelligence": {
    short: "Plant Intelligence",
    description:
      "SOPs, performance metrics and operational systems to run and scale your plant efficiently.",
    icon: Activity,
  },
  "Buy & Sell Scrap": {
    short: "Buy & Sell Scrap",
    description:
      "Market access to buy and sell e-waste, batteries and metals through verified channels.",
    icon: Store,
  },
  "Business Growth & Lead Generation": {
    short: "Growth & Leads",
    description:
      "Demand generation, SEO and conversion systems to grow enquiries and sales.",
    icon: TrendingUp,
  },
};

const FALLBACK_DESCRIPTION = "Explore our services and subcategories for this area.";

const serviceIconRules: { keys: string[]; icon: LucideIcon }[] = [
  { keys: ["lithium", "battery"], icon: Battery },
  { keys: ["plastic"], icon: Recycle },
  { keys: ["solar"], icon: Zap },
  { keys: ["vehicle", "elv", "rvsf", "tyre"], icon: Truck },
  { keys: ["electronic", "ewaste", "e-waste"], icon: Monitor },
];

const getIconFor = (slug: string): LucideIcon =>
  serviceIconRules.find((r) => r.keys.some((k) => slug.includes(k)))?.icon ?? Box;

/* -------------------------------------------------------------------------- */
/*  Motion variants                                                            */
/* -------------------------------------------------------------------------- */

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", staggerChildren: 0.06 },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const staticVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  exit: { opacity: 1 },
};

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

type CardData = { path: string; slug: string; title: string; text: string };

/* -------------------------------------------------------------------------- */
/*  Cursor spotlight (CSS variables set directly on the node — no re-renders)  */
/* -------------------------------------------------------------------------- */

const handleSpotlight = (e: MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

/* -------------------------------------------------------------------------- */
/*  Decorative inline SVG for the featured panel                               */
/* -------------------------------------------------------------------------- */

const OrbitArt = ({ animate }: { animate: boolean }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 400 400"
    className="pointer-events-none absolute -right-24 -bottom-24 h-[360px] w-[360px] opacity-70"
    fill="none"
  >
    <defs>
      <radialGradient id="orbit-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#5AC361" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#5AC361" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="200" cy="200" r="190" fill="url(#orbit-glow)" />
    <circle cx="200" cy="200" r="170" stroke="#5AC361" strokeOpacity="0.18" strokeDasharray="2 8" />
    <circle cx="200" cy="200" r="125" stroke="#5AC361" strokeOpacity="0.25" />
    <circle cx="200" cy="200" r="80" stroke="#5AC361" strokeOpacity="0.35" strokeDasharray="4 6" />
    <motion.g
      style={{ originX: "200px", originY: "200px" }}
      animate={animate ? { rotate: 360 } : undefined}
      transition={{ duration: 30, ease: "linear", repeat: Infinity }}
    >
      <circle cx="200" cy="30" r="6" fill="#5AC361" />
      <circle cx="325" cy="200" r="4" fill="#5AC361" fillOpacity="0.7" />
      <circle cx="120" cy="280" r="5" fill="#5AC361" fillOpacity="0.5" />
    </motion.g>
    <motion.g
      style={{ originX: "200px", originY: "200px" }}
      animate={animate ? { rotate: -360 } : undefined}
      transition={{ duration: 45, ease: "linear", repeat: Infinity }}
    >
      <circle cx="200" cy="75" r="4" fill="#5AC361" fillOpacity="0.8" />
      <circle cx="280" cy="200" r="3" fill="#5AC361" fillOpacity="0.6" />
    </motion.g>
  </svg>
);

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

const ServicesGrid = () => {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  const serviceByPath = useMemo(() => new Map(servicesList.map((s) => [s.path, s])), []);

  const categories = useMemo(
    () =>
      serviceCategoriesNav.map((cat) => {
        const cards: CardData[] = cat.subcategories.map((sub) => {
          const svc = serviceByPath.get(sub.path);
          return {
            path: sub.path,
            slug: svc?.slug ?? sub.path,
            title: svc?.title ?? sub.label,
            text: svc?.subtitle ?? svc?.desc ?? "",
          };
        });
        const meta = categoryMeta[cat.name];
        return {
          name: cat.name,
          short: meta?.short ?? cat.name,
          description: meta?.description ?? FALLBACK_DESCRIPTION,
          Icon: meta?.icon ?? Recycle,
          cards,
        };
      }),
    [serviceByPath]
  );

  const current = categories[active] ?? categories[0];
  if (!current) return null;

  const pv = reduceMotion ? staticVariants : panelVariants;
  const cv = reduceMotion ? staticVariants : cardVariants;

  return (
    <section className="relative bg-background py-20 lg:py-28 overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#5AC361]/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#5AC361]/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 lg:grid-cols-2 lg:items-end mb-10 lg:mb-12"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#5AC361]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5AC361]">
                Our Services
              </span>
            </div>
            <h2 className="font-display mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Everything your
              <br />
              <span className="bg-gradient-to-r from-[#5AC361] to-emerald-400 bg-clip-text text-transparent">
                circular business
              </span>{" "}
              needs.
            </h2>
          </div>
          <p className="max-w-xl text-primary-900 text-base text-muted-foreground md:text-4xl lg:justify-self-end">
            From recycling plant setups to certified EPR credits and growth services — we deliver
            end-to-end solutions, all in one place.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-6 -mx-4 px-4 lg:mx-0 lg:px-0">
          <div
            role="tablist"
            aria-label="Service categories"
            className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-border bg-card/70 p-1.5 backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((cat, i) => {
              const isActive = i === active;
              return (
                <button
                  key={cat.name}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5AC361]/60 ${
                    isActive ? "text-[#07140d]" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="services-tab-pill"
                      className="absolute inset-0 rounded-full bg-[#5AC361] shadow-lg shadow-[#5AC361]/30"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <cat.Icon className="h-4 w-4" />
                    {cat.short}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.name}
            role="tabpanel"
            variants={pv}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid gap-4 lg:grid-cols-12 lg:gap-5"
          >
            {/* Featured dark panel */}
            <motion.div
              variants={cv}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f2a1a] via-[#0b1f14] to-[#07140d] p-7 text-white lg:col-span-5 lg:p-9 min-h-[320px] lg:min-h-[420px]"
            >
              <OrbitArt animate={!reduceMotion} />

              <span className="font-display absolute right-6 top-4 select-none text-7xl font-bold text-white/5">
                {String(active + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#5AC361]/30 bg-[#5AC361]/15 backdrop-blur">
                  <current.Icon className="h-7 w-7 text-[#5AC361]" />
                </div>

                <h3 className="font-display mt-6 text-2xl font-bold leading-tight sm:text-3xl">
                  {current.name}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
                  {current.description}
                </p>

                <div className="mt-auto pt-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5AC361] animate-pulse" />
                    <span className="font-semibold text-[#5AC361]">{current.cards.length}</span>
                    {current.cards.length === 1 ? "service" : "services"} in this category
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bento cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5 auto-rows-fr">
              {current.cards.map((card, idx) => {
                const Icon = getIconFor(card.slug);
                const wide = idx === 0 && current.cards.length % 2 === 1;
                return (
                  // Framer: entrance only. Hover: pure CSS on the inner link.
                  <motion.div
                    key={card.path}
                    variants={cv}
                    className={wide ? "sm:col-span-2" : ""}
                  >
                    <a
                      href={card.path}
                      onMouseMove={handleSpotlight}
                      className="group relative flex h-full min-h-[170px] flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#5AC361]/50 hover:shadow-xl hover:shadow-[#5AC361]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5AC361]/60"
                    >
                      {/* Spotlight */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(260px_circle_at_var(--x,50%)_var(--y,50%),rgba(90,195,97,0.16),transparent_70%)]"
                      />

                      <div className="relative flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5AC361]/10 ring-1 ring-[#5AC361]/20 transition-all duration-300 group-hover:bg-[#5AC361] group-hover:ring-[#5AC361]">
                          <Icon className="h-5 w-5 text-[#5AC361] transition-colors duration-300 group-hover:text-[#07140d]" />
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:border-[#5AC361] group-hover:bg-[#5AC361] group-hover:text-[#07140d]">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>

                      <h4 className="relative mt-5 text-base font-semibold leading-snug text-foreground">
                        {card.title}
                      </h4>
                      {card.text && (
                        <p
                          className={`relative mt-2 text-sm leading-relaxed text-muted-foreground ${
                            wide ? "line-clamp-2 sm:max-w-lg" : "line-clamp-3"
                          }`}
                        >
                          {card.text}
                        </p>
                      )}

                      <span className="relative mt-auto pt-4 text-xs font-semibold text-[#5AC361] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        Learn more →
                      </span>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesGrid;