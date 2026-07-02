import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { blogPosts, blogCategories } from "@/lib/blog";

const Blog = () => {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <>
      <Seo
        title="EPR Nexuss Blog"
        description="Read EPR Nexuss blog posts on CPCB compliance, EPR plastic, battery waste handling, tyre recovery, and ELV audit readiness."
        keywords={[
          "EPR blog",
          "CPCB compliance blog",
          "EPR plastic blog",
          "EPR battery waste blog",
          "EPR tyre management blog",
          "EPR Blog",
    "CPCB Compliance Guide",
    "EPR Plastic Blog",
    "Battery Waste Management",
    "Solar Panel Recycling Blog",
    "E-Waste Recycling India",
    "Tyre EPR Guidelines",
    "Extended Producer Responsibility",
    "EPR Compliance Tips",
    "EPR Case Studies",
    "EPR Reporting Best Practices",
    "EPR for Manufacturers in india",
    "EPR for Importers",
    "what is EPR",
    "what is the process of EPR",
    "how to get waste management license in india",
    "how to get EPR certificate in india",
    "EPR credit trading",
    "when is the EPR compliance deadline",
        ]}
        url="https://eprnexuss.com/blog"
        type="website"
      />

      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_35%)]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/90">
              Industry news
            </span>
            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">
              Smart EPR insights for CPCB compliance and sustainable waste management
            </h1>
            <p className="mt-6 max-w-2xl text-white/80 text-lg leading-relaxed">
              Explore practical articles, case studies and compliance guides to support producers with plastic, battery, tyre and ELV EPR programs across India.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition hover:bg-white/90"
              >
                Explore EPR Services
              </Link>
              <Link
                to={featuredPost.path}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Read featured article
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Blog Categories Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.32em] text-secondary font-semibold mb-2">
                Explore Categories
              </p>
              <h2 className="text-4xl font-bold text-foreground">
                Blog By Topic
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Browse blogs organized by waste stream and EPR topic
              </p>
            </div>
            {Object.entries(
              blogCategories.reduce<Record<string, typeof blogCategories>>((groups, category) => {
                const key = (category as any).group || "Other";
                if (!groups[key]) {
                  groups[key] = [];
                }
                groups[key].push(category);
                return groups;
              }, {})
            ).map(([groupName, categories], groupIndex) => (
              <motion.div
                key={groupName}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.1 }}
                className="mb-16"
              >
                <div className="mb-10 text-center">
                  <p className="text-xs uppercase tracking-[0.32em] text-secondary font-semibold mb-2">
                    {groupName}
                  </p>
                  <h3 className="text-3xl font-bold text-foreground">
                    {groupName}
                  </h3>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="group rounded-[2rem] border border-border bg-card overflow-hidden shadow-lg shadow-secondary/5 hover:shadow-secondary/20 transition-all duration-300"
                    >
                      <div className="relative overflow-hidden h-40">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      </div>
                      <div className="p-6">
                        <p className="text-xs uppercase tracking-[0.24em] text-secondary font-semibold mb-2">
                          {category.tagLine}
                        </p>
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {category.description}
                        </p>
                        <Link
                          to={category.path}
                          className="inline-flex items-center justify-center rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold text-secondary hover:bg-secondary hover:text-primary-foreground transition-colors w-full"
                        >
                          Read Articles
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <hr className="my-20 border-border/50" />

          {/* Featured and Recent Posts */}
          <div className="grid gap-10 xl:grid-cols-[1.5fr_0.9fr]">
            <div className="space-y-10">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[2rem] overflow-hidden border border-border bg-card shadow-xl shadow-secondary/10"
              >
                <div className="relative">
                  <img src={featuredPost.image} alt={featuredPost.title} className="h-96 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <span className="inline-flex rounded-full bg-secondary/95 px-4 py-2 text-xs uppercase tracking-[0.24em] font-semibold">
                      Featured
                    </span>
                    <h2 className="mt-4 text-4xl font-bold leading-tight">{featuredPost.title}</h2>
                    <p className="mt-4 max-w-2xl text-white/80 leading-8">{featuredPost.summary}</p>
                    <Link
                      to={featuredPost.path}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg shadow-black/10 hover:bg-white/90"
                    >
                      Read featured story
                    </Link>
                  </div>
                </div>
              </motion.article>

              <div className="grid gap-6 md:grid-cols-2">
                {recentPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group rounded-[2rem] border border-border bg-card overflow-hidden shadow-lg shadow-secondary/5"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {post.summary}
                      </p>
                      <div className="flex items-center justify-between gap-3 text-sm text-primary-foreground/80">
                        <span>{post.date}</span>
                        <span>{post.readingTime}</span>
                      </div>
                      <Link
                        to={post.path}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80"
                      >
                        Read article
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-border bg-card p-8 shadow-lg shadow-secondary/5"
              >
                <p className="text-xs uppercase tracking-[0.32em] text-secondary font-semibold mb-4">
                  Why read this blog
                </p>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Practical EPR guidance for real producers
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
                    <span>Easy-to-follow compliance tactics for CPCB and EPR rules.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
                    <span>Actionable reporting, collection and recycling recommendations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
                    <span>Examples you can apply across plastic, battery, tyre and ELV waste streams.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-border bg-secondary/5 p-8 shadow-lg shadow-secondary/10"
              >
                <p className="text-xs uppercase tracking-[0.32em] text-secondary font-semibold mb-4">
                  Quick read
                </p>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Latest CPCB updates
                </h3>
                <p className="text-muted-foreground leading-7">
                  New EPR rules, audit readiness, and waste recycling pathways are evolving rapidly. Stay ahead with concise, actionable posts from our EPR specialists.
                </p>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
