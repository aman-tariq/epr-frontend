import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import Seo from "@/components/Seo";
import { blogPosts, blogCategories } from "@/lib/blog";

const BlogCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  const categoryData = blogCategories.find(c => c.slug === category);
  
  if (!categoryData) {
    return <Navigate to="/blog" replace />;
  }

  const categoryPosts = blogPosts.filter(post => post.category === category);

  return (
    <>
      <Seo
        title={`${categoryData.name} Blog - EPR Nexuss`}
        description={categoryData.description}
        keywords={[
          `${categoryData.name} blog`,
          `${categoryData.tagLine}`,
          "EPR compliance",
          "CPCB guidelines",
        ]}
        url={`https://eprnexuss.com${categoryData.path}`}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_35%)]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/90">
              {categoryData.tagLine}
            </span>
            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">
              {categoryData.name} Blog
            </h1>
            <p className="mt-6 max-w-2xl text-white/80 text-lg leading-relaxed">
              {categoryData.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition hover:bg-white/90"
              >
                Explore Services
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                All Categories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {categoryPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categoryPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-[2rem] border border-border bg-card overflow-hidden shadow-lg shadow-secondary/5 hover:shadow-secondary/20 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3 flex gap-2 flex-wrap">
                      {post.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-3 flex-grow">
                      {post.summary}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-foreground/60">
                        <span>{post.readingTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <Link
                        to={post.path}
                        className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold text-secondary hover:bg-secondary hover:text-primary-foreground transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                No blogs in this category yet
              </h2>
              <p className="text-foreground/70 mb-8">
                Check back soon for more content
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-secondary/30 hover:bg-secondary/90"
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
