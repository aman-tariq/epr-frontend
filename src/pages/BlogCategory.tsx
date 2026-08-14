import { motion, Variants } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import Seo from "@/components/Seo";
import { blogPosts, blogCategories } from "@/lib/blog";
import background from "@/assets/blogBackground.jpg";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Mouse, ChevronDown } from "lucide-react";

// --- Reliable Framer Motion Card Animation Variants ---
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08, // stagger — cap this, see note below
      ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier, not the default spring
    },
  }),
};

const BlogCategoryPage = () => {
  const { category } = useParams<{ category: string }>();

  const categoryData = blogCategories.find((c) => c.slug === category);

  if (!categoryData) {
    return <Navigate to="/blog" replace />;
  }

  const categoryPosts = blogPosts.filter(
    (post) => post.category === categoryData.slug
  );

  return (
    <>
      <Seo
        title={`${categoryData.name} Blog - EPR Nexuss`}
        description={categoryData.description}
        url={`https://eprnexuss.com/blog/category/${category}`}
        keywords={[
          `${categoryData.name} blog`,
          `${categoryData.tagLine}`,
          "EPR compliance",
          "CPCB guidelines",
        ]}
      />

      {/* Hero Section */}
      <section
        className={`relative overflow-hidden pt-[170px] pb-[140px] text-white ${
          categoryData.heroGradient ??
          "bg-gradient-to-r from-primary to-secondary"
        }`}
      >
        {/* Hero Background Image */}
        {categoryData.heroImage && (
          <img
            src={categoryData.heroImage}
            alt={categoryData.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031318]/95 via-[#041A22]/75 to-[#041A22]/45" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Green Glow */}
        <div className="absolute -top-40 right-0 h-[450px] w-[450px] rounded-full bg-green-500/20 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />

        {/* Decorative Circles */}
        <div className="absolute right-10 top-20 h-56 w-56 rounded-full border border-white/10" />
        <div className="absolute right-20 top-32 h-40 w-40 rounded-full border border-white/10" />

        {/* Bottom Fade */}
        {/* <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" /> */}

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-xl text-xs font-medium uppercase tracking-[0.35em] text-green-300 shadow-lg">
              {categoryData.tagLine}
            </span>

            {/* Heading */}
            <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              {categoryData.name}{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Blogs
              </span>
            </h1>

            {/* Decorative Line */}
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-green-400 to-emerald-300" />

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
              {categoryData.description}
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-2xl shadow-green-500/30 transition duration-300 hover:scale-105 hover:shadow-green-500/40"
              >
                Explore Services
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              <Link
                to="/blog"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/20"
              >
                Browse All Blogs
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10 text-white/70">
              <div>
                <p className="text-3xl font-bold text-white">70+</p>
                <span className="text-sm">Expert Articles</span>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">25+</p>
                <span className="text-sm">EPR Topics</span>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">2026</p>
                <span className="text-sm">Latest Updates</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="mb-3 text-[11px] uppercase tracking-[0.4em] text-white/60">
            Explore
          </span>

          <div className="relative">
            <Mouse size={34} strokeWidth={1.4} className="text-white/40" />

            <div className="absolute left-1/2 top-[8px] h-2 w-1 -translate-x-1/2 rounded-full bg-green-400 animate-pulse" />
          </div>

          <ChevronDown
            size={18}
            className="mt-1 animate-bounce text-green-400"
          />
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="relative overflow-hidden py-24">
        {/* Background */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${background})`,
          }}
        />

        {/* Soft Overlay */}
        <div className="absolute inset-0 -z-10 bg-white/15 backdrop-blur-[1px]" />

        <div className="container relative z-10 mx-auto px-4 lg:px-6">
          {categoryPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categoryPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  custom={Math.min(index, 5)} // cap stagger delay so card #40 doesn't wait 3+ seconds
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                    margin: "0px 0px -80px 0px",
                  }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  style={{ willChange: "transform, opacity" }}
                  className="group overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-b from-white to-green-50/30 shadow-xl transition-all duration-300 hover:border-secondary/30 hover:shadow-2xl hover:shadow-secondary/20"
                >
                  <Link to={post.path} className="flex h-full flex-col">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-fit  transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      {/* Tags */}
                      <div className="mb-5 flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="mb-4 line-clamp-2 text-2xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-secondary">
                        {post.title}
                      </h3>

                      {/* Summary */}
                      <p className="mb-6 flex-1 line-clamp-3 text-[15px] leading-7 text-foreground/70">
                        {post.summary}
                      </p>

                      {/* Footer */}
                      <div className="mt-auto flex items-center justify-between border-t border-border/70 pt-5">
                        <div className="space-y-1 text-xs text-foreground/60">
                          <div className="flex items-center gap-2">
                            <Clock size={14} />
                            <span>{post.readingTime}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:gap-3 group-hover:shadow-secondary/40">
                          Read Article
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                No blogs in this category yet
              </h2>

              <p className="mb-8 text-foreground/70">
                Check back soon for more content.
              </p>

              <Link
                to="/blog"
                className="inline-flex items-center rounded-full bg-secondary px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
              >
                View All Blogs
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogCategoryPage;