import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Your Comprehensive Partner in Extended Producer Responsibility & Management",
    subtitle: "Leading the way in sustainable waste management and EPR compliance solutions.",
  },
  {
    image: hero2,
    title: "Certified E-Waste Recycling & EPR Credit Trading",
    subtitle: "Responsible disposal and recycling of electronic waste with full regulatory compliance.",
  },
  {
    image: hero3,
    title: "Building a Circular Economy for a Greener Future",
    subtitle: "Transforming waste into resources through innovative recycling and credit trading.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        setOffsetY(window.scrollY * 0.35);
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt=""
            className="w-full h-full object-cover will-change-transform"
            style={{ transform: `translateY(${offsetY}px)` }}
            width={1920}
            height={1080}
            loading={current === 0 ? "eager" : "lazy"}
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8 lg:mt-28 mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                {slides[current].title}
              </h1>
              <p className="text-primary-foreground/80 text-base sm:text-lg mb-8 leading-relaxed">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-secondary text-primary-foreground font-semibold rounded-xl text-sm hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/30 hover:shadow-secondary/50 text-center focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  aria-label="Contact us to sell your E-Waste"
                >
                  Sell Your E-Waste
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl text-sm hover:bg-primary-foreground/10 transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:ring-offset-2"
                  aria-label="View our services to buy certified credits"
                >
                  Buy Certified Credits
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-secondary" : "w-2 bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
