import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Mail,
  Phone,
  NotebookTabs,
  ChevronDown,
  ChevronUp,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import logo from "@/assets/epr-logo.jpeg";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { serviceDropdown, serviceCategoriesNav } from "@/lib/services";

const MARKETPLACE_URL = "/marketplace/";

// Staggered reveal for dropdown menu rows: the container fires this on
// mount (each open is a fresh mount, since the menu unmounts on close),
// and each row animates in slightly after the one before it.
const dropdownContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.04 },
  },
};

const dropdownRow: Variants = {
  hidden: { opacity: 0, x: -6 },
  show: { opacity: 1, x: 0, transition: { duration: 0.22, ease: "easeOut" } },
};

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Contact us", path: "/contact" },
  { name: "About us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
];

// ==================== BLOG CATEGORIES ====================
const blogDropdown = [
  { label: "Plant Setups", path: "/blog/category/recycling-setups" },
  { label: "EPR Credits", path: "/blog/category/epr-credits" },
  {
    label: "Plant Operation Intelligence",
    path: "/blog/category/plant-operation-intelligence",
  },
  { label: "Buy & Sell Scrap", path: "/blog/category/buy-and-sell-scrap" },
  {
    label: "Business growth and lead generation",
    path: "/blog/category/business-growth-and-lead-generation",
  },
];

const plantOperationSubcategories: { label: string; path: string }[] = [
  {
    label: "Setup Commissioning Documentation",
    path: "/blog/category/setup-commissioning-documentation",
  },
  {
    label: "Operation & Performance Management",
    path: "/blog/category/operation-performance-management",
  },
  {
    label: "Scale And Growth Systems",
    path: "/blog/category/scale-and-growth-systems",
  },
];

const recyclingSetupsSubcategories = [
  { label: "Lithium Battery Recycling Setup", path: "/blog/category/lithium" },
  { label: "E-Waste Recycling Setup", path: "/blog/category/e-waste" },
  { label: "RVSF Recycling Setup", path: "/blog/category/rvsf" },
  { label: "Solar Panel Recycling Setup", path: "/blog/category/solar-panel" },
  { label: "Plastic Recycling Setup", path: "/blog/category/plastic" },
  { label: "Tyre Recycling Setup", path: "/blog/category/tyre" },
  { label: "Biogas Recycling Setup", path: "/blog/category/biogas" },
];

const eprCreditsSubcategories = [
  { label: "EPR Plastic", path: "/blog/category/epr-plastic" },
  { label: "EPR Electronic", path: "/blog/category/epr-electronic" },
  { label: "EPR Tyre", path: "/blog/category/epr-tyre" },
  { label: "EPR ELV", path: "/blog/category/epr-elv" },
  { label: "EPR Used Oil", path: "/blog/category/epr-used-oil" },
  { label: "EPR Metals", path: "/blog/category/epr-metals" },
  { label: "EPR Battery", path: "/blog/category/epr-battery" },
  { label: "EPR Lithium", path: "/blog/category/epr-lithium" },
];

const buyAndSellScrapSubcategories = [
  { label: "Buy E-Waste", path: "/blog/category/buy-e-waste" },
  { label: "Sell Batteries", path: "/blog/category/sell-batteries" },
  { label: "Buy & Sell Metals", path: "/blog/category/buy-and-sell-metals" },
];

const businessGrowthAndLeadGenerationSubcategories = [
  {
    label: "Business Growth And Lead Generation",
    path: "/blog/category/business-growth-and-lead-generation",
  },
];

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/919220386699",
    icon: "M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5.01L2 22l5.09-1.35C8.47 21.51 10.18 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 14.3c-.18.5-.97.97-1.35 1.09-.36.11-.65.16-2.29-.48-1.94-.78-3.18-2.73-3.28-2.85-.1-.12-.79-.99-.79-1.89 0-.9.47-1.34.64-1.52.18-.18.47-.21.64-.21.16 0 .33.01.47.01.15 0 .36-.06.56.42.21.5.72 1.74.78 1.87.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.3-.36.4-.12.12-.24.24-.11.47.13.24.6 1.02 1.29 1.65.88.79 1.63 1.04 1.86 1.15.23.11.37.09.5-.06.13-.15.58-.66.73-.89.16-.23.31-.19.52-.12.21.08 1.34.64 1.57.75.23.12.38.18.44.28.06.1.04.58-.14 1.08z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@eprnexuss",
    icon: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.81zM9.55 15.5V8.5l6.27 3.5-6.27 3.5z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/epr-nexuss/",
    icon: "M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2zM7.91 18.18H5.27V9.5h2.64v8.68zM6.59 8.35a1.52 1.52 0 1 1 0-3.04 1.52 1.52 0 0 1 0 3.04zM18.18 18.18h-2.64v-4.23c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.62 1.1-1.62 2.23v4.31H9.86V9.5h2.53v1.18h.04c.35-.66 1.21-1.36 2.49-1.36 2.66 0 3.15 1.75 3.15 4.03v4.83z",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61569227422407",
    icon: "M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.12 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/eprnexuss/",
    icon: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.25-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2 01-3.58.07-4.85.15-3.23 1.67-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.63 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z",
  },
];

/**
 * The "EPR Trading" marketplace button. Deliberately louder than the rest of
 * the nav: gradient fill, a soft breathing glow, and a small live dot,
 * because this one destination (buying/selling credits) is meant to pull
 * the eye. Respects prefers-reduced-motion.
 *
 * NOTE: This uses a plain <a> tag (not React Router's <Link>) on purpose.
 * "/marketplace/" is a separate app/deployment outside this SPA's own
 * router, so it needs a real full-page browser navigation. Using <Link>
 * here caused React Router to try to match the path against its own
 * routes, find nothing, and render a client-side 404 -- which is why a
 * manual refresh "fixed" it (refresh bypasses the SPA router entirely).
 */
const MarketplaceButton = ({
  onClick,
  className = "",
}: {
  onClick?: () => void;
  className?: string;
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <a
      href={MARKETPLACE_URL}
      onClick={onClick}
      className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#04120d] bg-gradient-to-r from-emerald-400 to-amber-300 overflow-visible ${className}`}
    >
      {!prefersReducedMotion && (
        <motion.span
          aria-hidden="true"
          className="absolute -inset-1 rounded-lg bg-gradient-to-r from-emerald-400 to-amber-300 blur-md -z-10"
          animate={{ opacity: [0.35, 0.85, 0.35], scale: [1, 1.06, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <span className="relative flex h-2 w-2">
        {!prefersReducedMotion && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#04120d]/50 animate-ping" />
        )}
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#04120d]" />
      </span>
      <TrendingUp size={16} />
      EPR Trading
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(),
  );
  const location = useLocation();

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  useEffect(() => {
    if (!isBlogOpen && !isServicesOpen) {
      setExpandedCategories(new Set());
    }
  }, [isBlogOpen, isServicesOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Top Bar */}
      <div
        className={`bg-secondary hidden lg:block transition-all duration-300 ${scrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}
      >
        <div className="container mx-auto px-4 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href="mailto:info@eprnexuss.com"
                className="flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <Mail size={14} />
                info@eprnexuss.com
              </a>
              <a
                href="tel:+919289659966"
                className="flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <Phone size={14} />
                +91 9289659966
              </a>
              <a
                href="tel:01204605014"
                className="flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <NotebookTabs size={14} />
                0120-4605014
              </a>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  title={social.name}
                >
                  <svg
                    className="w-4 h-4 fill-current text-primary-foreground"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${scrolled ? "bg-primary/95 backdrop-blur-xl shadow-lg shadow-primary/20" : "bg-primary/15"}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label="EPR NEXUSS Home"
            >
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-secondary/40 blur-md opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-125 transition-all duration-500 -z-10" />
                <img
                  src={logo}
                  alt="EPR NEXUSS"
                  className="h-16 w-16 rounded-full object-cover border-2 border-white/20 shadow-lg transition-transform duration-300 group-hover:scale-110"
                  loading="eager"
                  width="64"
                  height="64"
                />
              </div>
              <span className="font-display text-xl font-bold  hidden sm:block ${} text-primary-foreground">
                EPR NEXUSS
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary-foreground"
                        : "text-primary-foreground/80 hover:text-primary-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-lg bg-secondary -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-lg bg-primary-foreground/0 hover:bg-primary-foreground/10 transition-colors duration-200 -z-10" />
                    )}
                    <span className="relative">{link.name}</span>
                  </Link>
                );
              })}

              {/* Blog Dropdown */}
              <div
                {...(isDesktop && {
                  onMouseEnter: () => setIsBlogOpen(true),
                  onMouseLeave: () => setIsBlogOpen(false),
                })}
                className="relative"
              >
                <DropdownMenu open={isBlogOpen} onOpenChange={setIsBlogOpen}>
                  <DropdownMenuTrigger
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 inline-flex items-center gap-2 ${location.pathname.startsWith("/blog") ? "bg-secondary text-primary-foreground" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"}`}
                  >
                    Blog{" "}
                    {isBlogOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    sideOffset={6}
                    className="min-w-[18rem] max-h-[80vh] overflow-hidden p-0"
                  >
                    <DropdownMenuLabel className="px-4 py-3">
                      Blog Categories
                    </DropdownMenuLabel>

                    <motion.div
                      variants={dropdownContainer}
                      initial="hidden"
                      animate="show"
                      className="max-h-[65vh] overflow-y-auto overflow-x-hidden pr-1"
                    >
                      {blogDropdown.map((item) => {
                      if (
                        item.path ===
                        "/blog/category/plant-operation-intelligence"
                      ) {
                        return (
                          <motion.div variants={dropdownRow} key={item.path}>
                            <button
                              onClick={() =>
                                toggleCategory(
                                  "blog-Plant Operation Intelligence",
                                )
                              }
                              className="w-full px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider flex items-center justify-between hover:bg-accent/5 transition-colors"
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                size={14}
                                className={`transition-transform ${expandedCategories.has("blog-Plant Operation Intelligence") ? "rotate-180" : ""}`}
                              />
                            </button>
                            <AnimatePresence>
                              {expandedCategories.has(
                                "blog-Plant Operation Intelligence",
                              ) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  {plantOperationSubcategories.map((sub) => (
                                    <DropdownMenuItem asChild key={sub.path}>
                                      <Link
                                        to={sub.path}
                                        className="block w-full pl-8 pr-2 py-2 text-sm text-foreground hover:bg-accent/10"
                                      >
                                        {sub.label}
                                      </Link>
                                    </DropdownMenuItem>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                            <DropdownMenuSeparator />
                          </motion.div>
                        );
                      }

                      if (item.path === "/blog/category/recycling-setups") {
                        return (
                          <motion.div variants={dropdownRow} key={item.path}>
                            <button
                              onClick={() =>
                                toggleCategory("blog-Recycling Setups")
                              }
                              className="w-full px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider flex items-center justify-between hover:bg-accent/5 transition-colors"
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                size={14}
                                className={`transition-transform ${expandedCategories.has("blog-Recycling Setups") ? "rotate-180" : ""}`}
                              />
                            </button>
                            <AnimatePresence>
                              {expandedCategories.has(
                                "blog-Recycling Setups",
                              ) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  {recyclingSetupsSubcategories.map((sub) => (
                                    <DropdownMenuItem asChild key={sub.path}>
                                      <Link
                                        to={sub.path}
                                        className="block w-full pl-8 pr-2 py-2 text-sm text-foreground hover:bg-accent/10"
                                      >
                                        {sub.label}
                                      </Link>
                                    </DropdownMenuItem>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                            <DropdownMenuSeparator />
                          </motion.div>
                        );
                      }

                      if (item.path === "/blog/category/epr-credits") {
                        return (
                          <motion.div variants={dropdownRow} key={item.path}>
                            <button
                              onClick={() => toggleCategory("blog-EPR Credits")}
                              className="w-full px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider flex items-center justify-between hover:bg-accent/5 transition-colors"
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                size={14}
                                className={`transition-transform ${expandedCategories.has("blog-EPR Credits") ? "rotate-180" : ""}`}
                              />
                            </button>
                            <AnimatePresence>
                              {expandedCategories.has("blog-EPR Credits") && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  {eprCreditsSubcategories.map((sub) => (
                                    <DropdownMenuItem asChild key={sub.path}>
                                      <Link
                                        to={sub.path}
                                        className="block w-full pl-8 pr-2 py-2 text-sm text-foreground hover:bg-accent/10"
                                      >
                                        {sub.label}
                                      </Link>
                                    </DropdownMenuItem>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                            <DropdownMenuSeparator />
                          </motion.div>
                        );
                      }

                      if (
                        item.path ===
                        "/blog/category/business-growth-and-lead-generation"
                      ) {
                        return (
                          <motion.div variants={dropdownRow} key={item.path}>
                            <button
                              onClick={() =>
                                toggleCategory(
                                  "blog-Business Growth And Lead Generation",
                                )
                              }
                              className="w-full px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider flex items-center justify-between hover:bg-accent/5 transition-colors"
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                size={14}
                                className={`transition-transform ${expandedCategories.has("blog-Business Growth And Lead Generation") ? "rotate-180" : ""}`}
                              />
                            </button>
                            <AnimatePresence>
                              {expandedCategories.has(
                                "blog-Business Growth And Lead Generation",
                              ) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  {businessGrowthAndLeadGenerationSubcategories.map(
                                    (sub) => (
                                      <DropdownMenuItem asChild key={sub.path}>
                                        <Link
                                          to={sub.path}
                                          className="block w-full pl-8 pr-2 py-2 text-sm text-foreground hover:bg-accent/10"
                                        >
                                          {sub.label}
                                        </Link>
                                      </DropdownMenuItem>
                                    ),
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                            <DropdownMenuSeparator />
                          </motion.div>
                        );
                      }

                      if (item.path === "/blog/category/buy-and-sell-scrap") {
                        return (
                          <motion.div variants={dropdownRow} key={item.path}>
                            <button
                              onClick={() =>
                                toggleCategory("blog-Buy & Sell Scrap")
                              }
                              className="w-full px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider flex items-center justify-between hover:bg-accent/5 transition-colors"
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                size={14}
                                className={`transition-transform ${expandedCategories.has("blog-Buy & Sell Scrap") ? "rotate-180" : ""}`}
                              />
                            </button>
                            <AnimatePresence>
                              {expandedCategories.has(
                                "blog-Buy & Sell Scrap",
                              ) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  {buyAndSellScrapSubcategories.map((sub) => (
                                    <DropdownMenuItem asChild key={sub.path}>
                                      <Link
                                        to={sub.path}
                                        className="block w-full pl-8 pr-2 py-2 text-sm text-foreground hover:bg-accent/10"
                                      >
                                        {sub.label}
                                      </Link>
                                    </DropdownMenuItem>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                            <DropdownMenuSeparator />
                          </motion.div>
                        );
                      }
                        return null;
                      })}
                    </motion.div>

                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link
                        to="/blog"
                        className="block w-full px-2 py-2 text-sm text-foreground"
                      >
                        Blog Home
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Services Dropdown */}
              <div
                {...(isDesktop && {
                  onMouseEnter: () => setIsServicesOpen(true),
                  onMouseLeave: () => setIsServicesOpen(false),
                })}
                className="relative"
              >
                <DropdownMenu
                  open={isServicesOpen}
                  onOpenChange={setIsServicesOpen}
                >
                  <DropdownMenuTrigger
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 inline-flex items-center gap-2 ${location.pathname.startsWith("/services") ? "bg-secondary text-primary-foreground" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"}`}
                  >
                    Services{" "}
                    {isServicesOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    sideOffset={6}
                    className="min-w-[18rem] !overflow-hidden"
                  >
                    <DropdownMenuLabel>Service Categories</DropdownMenuLabel>

                    <motion.div
                      variants={dropdownContainer}
                      initial="hidden"
                      animate="show"
                      className="max-h-[70vh] overflow-y-auto overflow-x-hidden pr-1"
                    >
                      {serviceCategoriesNav.map((category, idx) => (
                        <motion.div variants={dropdownRow} key={category.name}>
                          <button
                            onClick={() =>
                              toggleCategory(`service-${category.name}`)
                            }
                            className="w-full px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider flex items-center justify-between hover:bg-accent/5 transition-colors"
                          >
                            <span>{category.name}</span>
                            <ChevronDown
                              size={14}
                              className={`transition-transform ${expandedCategories.has(`service-${category.name}`) ? "rotate-180" : ""}`}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedCategories.has(
                              `service-${category.name}`,
                            ) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                {category.subcategories.map((item) => (
                                  <DropdownMenuItem asChild key={item.path}>
                                    <Link
                                      to={item.path}
                                      className="block w-full pl-8 pr-2 py-2 text-sm text-foreground hover:bg-accent/10"
                                    >
                                      {item.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                          {idx < serviceCategoriesNav.length - 1 && (
                            <DropdownMenuSeparator />
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild>
                      <Link
                        to="/services"
                        className="block w-full px-4 py-2 text-sm text-foreground"
                      >
                        All services
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <MarketplaceButton />
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-primary-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-primary/98 backdrop-blur-xl border-t border-primary-foreground/10 max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                <MarketplaceButton
                  onClick={() => setIsOpen(false)}
                  className="justify-center mb-2"
                />

                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      location.pathname === link.path
                        ? "bg-secondary text-primary-foreground"
                        : "text-primary-foreground/80 hover:bg-primary-foreground/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Blog */}
                <div className="border-t border-primary-foreground/10 pt-3 mt-3">
                  <button
                    onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
                    className="w-full px-4 py-3 flex items-center justify-between rounded-lg text-sm font-medium transition-all text-primary-foreground/80 hover:bg-primary-foreground/10"
                  >
                    Blogs
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${mobileBlogOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileBlogOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        {blogDropdown.map((item) => {
                          if (
                            item.path ===
                            "/blog/category/plant-operation-intelligence"
                          ) {
                            return (
                              <div key={item.path} className="pl-2">
                                <button
                                  onClick={() =>
                                    toggleCategory(
                                      "blog-Plant Operation Intelligence",
                                    )
                                  }
                                  className="w-full px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider flex items-center justify-between hover:bg-primary-foreground/10 rounded-lg"
                                >
                                  <span>{item.label}</span>
                                  <ChevronDown
                                    size={14}
                                    className={`transition-transform ${expandedCategories.has("blog-Plant Operation Intelligence") ? "rotate-180" : ""}`}
                                  />
                                </button>
                                <AnimatePresence>
                                  {expandedCategories.has(
                                    "blog-Plant Operation Intelligence",
                                  ) && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="overflow-hidden"
                                    >
                                      {plantOperationSubcategories.map(
                                        (sub) => (
                                          <Link
                                            key={sub.path}
                                            to={sub.path}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-3 ml-2 rounded-lg text-sm font-medium text-primary-foreground/80 hover:bg-primary-foreground/10"
                                          >
                                            {sub.label}
                                          </Link>
                                        ),
                                      )}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          }

                          if (item.path === "/blog/category/recycling-setups") {
                            return (
                              <div key={item.path} className="pl-2">
                                <button
                                  onClick={() =>
                                    toggleCategory("blog-Recycling Setups")
                                  }
                                  className="w-full px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider flex items-center justify-between hover:bg-primary-foreground/10 rounded-lg"
                                >
                                  <span>{item.label}</span>
                                  <ChevronDown
                                    size={14}
                                    className={`transition-transform ${expandedCategories.has("blog-Recycling Setups") ? "rotate-180" : ""}`}
                                  />
                                </button>
                                <AnimatePresence>
                                  {expandedCategories.has(
                                    "blog-Recycling Setups",
                                  ) && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="overflow-hidden"
                                    >
                                      {recyclingSetupsSubcategories.map(
                                        (sub) => (
                                          <Link
                                            key={sub.path}
                                            to={sub.path}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-3 ml-2 rounded-lg text-sm font-medium text-primary-foreground/80 hover:bg-primary-foreground/10"
                                          >
                                            {sub.label}
                                          </Link>
                                        ),
                                      )}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          }

                          if (item.path === "/blog/category/epr-credits") {
                            return (
                              <div key={item.path} className="pl-2">
                                <button
                                  onClick={() =>
                                    toggleCategory("blog-EPR Credits")
                                  }
                                  className="w-full px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider flex items-center justify-between hover:bg-primary-foreground/10 rounded-lg"
                                >
                                  <span>{item.label}</span>
                                  <ChevronDown
                                    size={14}
                                    className={`transition-transform ${expandedCategories.has("blog-EPR Credits") ? "rotate-180" : ""}`}
                                  />
                                </button>
                                <AnimatePresence>
                                  {expandedCategories.has(
                                    "blog-EPR Credits",
                                  ) && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="overflow-hidden"
                                    >
                                      {eprCreditsSubcategories.map((sub) => (
                                        <Link
                                          key={sub.path}
                                          to={sub.path}
                                          onClick={() => setIsOpen(false)}
                                          className="block px-4 py-3 ml-2 rounded-lg text-sm font-medium text-primary-foreground/80 hover:bg-primary-foreground/10"
                                        >
                                          {sub.label}
                                        </Link>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          }

                          if (
                            item.path === "/blog/category/buy-and-sell-scrap"
                          ) {
                            return (
                              <div key={item.path} className="pl-2">
                                <button
                                  onClick={() =>
                                    toggleCategory("blog-Buy & Sell Scrap")
                                  }
                                  className="w-full px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider flex items-center justify-between hover:bg-primary-foreground/10 rounded-lg"
                                >
                                  <span>{item.label}</span>
                                  <ChevronDown
                                    size={14}
                                    className={`transition-transform ${expandedCategories.has("blog-Buy & Sell Scrap") ? "rotate-180" : ""}`}
                                  />
                                </button>
                                <AnimatePresence>
                                  {expandedCategories.has(
                                    "blog-Buy & Sell Scrap",
                                  ) && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="overflow-hidden"
                                    >
                                      {buyAndSellScrapSubcategories.map(
                                        (sub) => (
                                          <Link
                                            key={sub.path}
                                            to={sub.path}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-3 ml-2 rounded-lg text-sm font-medium text-primary-foreground/80 hover:bg-primary-foreground/10"
                                          >
                                            {sub.label}
                                          </Link>
                                        ),
                                      )}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          }

                          if (
                            item.path ===
                            "/blog/category/business-growth-and-lead-generation"
                          ) {
                            return (
                              <div key={item.path} className="pl-2">
                                <button
                                  onClick={() =>
                                    toggleCategory(
                                      "blog-Business Growth And Lead Generation",
                                    )
                                  }
                                  className="w-full px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider flex items-center justify-between hover:bg-primary-foreground/10 rounded-lg"
                                >
                                  <span>{item.label}</span>
                                  <ChevronDown
                                    size={14}
                                    className={`transition-transform ${expandedCategories.has("blog-Business Growth And Lead Generation") ? "rotate-180" : ""}`}
                                  />
                                </button>
                                <AnimatePresence>
                                  {expandedCategories.has(
                                    "blog-Business Growth And Lead Generation",
                                  ) && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="overflow-hidden"
                                    >
                                      {businessGrowthAndLeadGenerationSubcategories.map(
                                        (sub) => (
                                          <Link
                                            key={sub.path}
                                            to={sub.path}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-3 ml-2 rounded-lg text-sm font-medium text-primary-foreground/80 hover:bg-primary-foreground/10"
                                          >
                                            {sub.label}
                                          </Link>
                                        ),
                                      )}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          }
                          return null;
                        })}

                        <Link
                          to="/blog"
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-3 ml-2 rounded-lg text-sm font-medium text-primary-foreground/80 hover:bg-primary-foreground/10"
                        >
                          Blog Home
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Services */}
                <div className="border-t border-primary-foreground/10 pt-3 mt-3">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full px-4 py-3 flex items-center justify-between rounded-lg text-sm font-medium transition-all text-primary-foreground/80 hover:bg-primary-foreground/10"
                  >
                    Services
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        {serviceCategoriesNav.map((category) => (
                          <div key={category.name} className="pl-2">
                            <button
                              onClick={() =>
                                toggleCategory(`service-${category.name}`)
                              }
                              className="w-full px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider flex items-center justify-between hover:bg-primary-foreground/10 rounded-lg"
                            >
                              <span>{category.name}</span>
                              <ChevronDown
                                size={14}
                                className={`transition-transform ${expandedCategories.has(`service-${category.name}`) ? "rotate-180" : ""}`}
                              />
                            </button>
                            <AnimatePresence>
                              {expandedCategories.has(
                                `service-${category.name}`,
                              ) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  {category.subcategories.map((item) => (
                                    <Link
                                      key={item.path}
                                      to={item.path}
                                      onClick={() => setIsOpen(false)}
                                      className="block px-4 py-3 ml-2 rounded-lg text-sm font-medium text-primary-foreground/80 hover:bg-primary-foreground/10"
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                        <Link
                          to="/services"
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-3 ml-2 mt-2 border-t border-primary-foreground/10 pt-3 text-primary-foreground/80 hover:bg-primary-foreground/10"
                        >
                          All services
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;