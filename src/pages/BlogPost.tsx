import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";
import StickyContactForm from "@/components/StickyContactForm";
import { blogPosts } from "@/lib/blog";

const BlogPost = () => {
  const { blogSlug } = useParams();

  const post = useMemo(
    () => blogPosts.find((item) => item.slug === blogSlug),
    [blogSlug]
  );

  if (!post) {
    return <Navigate replace to="/blog" />;
  }

  const getScopedBlogHtml = (html: string) => {
    const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const rawCss = styleMatch?.[1] ?? "";
    const rawBody = bodyMatch?.[1] ?? html;

    const normalizeSelectors = (css: string) => {
      return css
        .replace(/:root/g, ".embedded-blog")
        .replace(/\bhtml\b/g, ".embedded-blog")
        .replace(/\bbody\b/g, ".embedded-blog")
        .replace(/\*\s*\{/g, ".embedded-blog * {");
    };

    const scopeCssRules = (css: string): string => {
      const trimmed = css.trim();
      const rules = trimmed.split("}");

      return rules
        .map((rule) => {
          const parts = rule.split("{");
          if (parts.length < 2) return "";

          const selector = parts[0].trim();
          const body = parts.slice(1).join("{").trim();
          if (!selector || !body) return "";

          if (selector.startsWith("@")) {
            return `${selector} { ${scopeCssRules(body)} }`;
          }

          const scopedSelectors = selector
            .split(",")
            .map((sel) => {
              const trimmedSelector = sel.trim();
              if (trimmedSelector.startsWith(".embedded-blog") || trimmedSelector.startsWith("@")) {
                return trimmedSelector;
              }
              return `.embedded-blog ${trimmedSelector}`;
            })
            .join(", ");

          return `${scopedSelectors} { ${body} }`;
        })
        .join(" ");
    };

    const scopeCss = scopeCssRules(normalizeSelectors(rawCss));
    const overflowFix = `
      .embedded-blog {
        width: 100%;
        max-width: 100%;
        min-width: 0 !important;
        box-sizing: border-box;
        overflow-x: hidden;
      }
      .embedded-blog *, .embedded-blog *::before, .embedded-blog *::after {
        box-sizing: inherit;
        min-width: 0 !important;
      }
      .embedded-blog .wrap,
      .embedded-blog .blog-container,
      .embedded-blog .page,
      .embedded-blog .container {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .embedded-blog img,
      .embedded-blog video,
      .embedded-blog iframe,
      .embedded-blog svg {
        max-width: 100% !important;
        width: 100% !important;
        height: auto !important;
      }
      .embedded-blog table {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        table-layout: auto !important;
      }
      .embedded-blog .grid,
      .embedded-blog .layout,
      .embedded-blog .grid-2,
      .embedded-blog .story-grid,
      .embedded-blog .two-col,
      .embedded-blog .flow,
      .embedded-blog .case-grid,
      .embedded-blog .mini-grid,
      .embedded-blog .chart-card,
      .embedded-blog .db-grid,
      .embedded-blog .visual-grid {
        grid-template-columns: 1fr !important;
      }
      .embedded-blog .hero,
      .embedded-blog .card,
      .embedded-blog .section,
      .embedded-blog .table-wrap,
      .embedded-blog .card.section {
        overflow-x: hidden !important;
        min-width: 0 !important;
      }
    `;

    return `<style>${scopeCss}</style><style>${overflowFix}</style><div class="embedded-blog">${rawBody}</div>`;
  };


  const blogHtml = post.fullContent ? getScopedBlogHtml(post.fullContent) : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: [post.image],
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    description: post.metaDescription,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://eprnexuss.com${post.path}`,
    },
  };

  return (
    <>
      <Seo
        title={post.title}
        description={post.metaDescription}
        keywords={post.keywords}
        url={`https://eprnexuss.com${post.path}`}
        image={post.image}
      />

      <article className="relative bg-background">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-secondary/15 to-transparent pointer-events-none" />
        <section className="relative pt-32 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[2rem] overflow-hidden border border-border bg-card shadow-xl shadow-secondary/10"
            >
              <div className="relative bg-[#111827] text-white">
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative flex min-h-[28rem] flex-col items-center justify-center px-8 text-center">
                  <span className="inline-flex rounded-full bg-secondary/95 px-4 py-2 text-xs uppercase tracking-[0.3em] font-semibold">
                    Blog Insight
                  </span>
                  <h1 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
                    {post.title}
                  </h1>
                  <p className="mt-4 max-w-3xl text-white/80 leading-8">
                    {post.summary}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
                    <span>{post.date}</span>
                    <span>{post.readingTime}</span>
                    <span>By {post.author}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.85fr_0fr]">
              <main className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-[2rem] border border-border bg-card p-8 shadow-lg shadow-secondary/5"
                >
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-secondary/10 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-8">{post.summary}</p>
                </motion.div>

                {post.fullContent ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[2rem] border border-border bg-card shadow-lg shadow-secondary/5"
                  dangerouslySetInnerHTML={{ __html: blogHtml ?? "" }}
                  />
                ) : (
                  post.sections.map((section) => (
                    <motion.section
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="rounded-[2rem] border border-border bg-card p-8 shadow-lg shadow-secondary/5"
                    >
                      <h2 className="text-3xl font-semibold text-foreground mb-4">{section.title}</h2>
                      <p className="text-muted-foreground leading-8 mb-5">{section.body}</p>
                      {section.bullets && (
                        <ul className="grid gap-3 text-muted-foreground">
                          {section.bullets.map((item) => (
                            <li key={item} className="rounded-3xl border border-border bg-background px-5 py-4">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.section>
                  ))
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-[2rem] border border-border bg-secondary/10 p-8 shadow-lg shadow-secondary/10"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">
                    Actionable next step
                  </p>
                  <h2 className="text-3xl font-semibold text-foreground mb-4">Turn guidance into compliant action</h2>
                  <p className="text-muted-foreground leading-8">
                    Use this post as a foundation for your EPR program. Keep a documented chain of custody, partner with authorised recyclers, and maintain transparent CPCB reporting for every waste stream.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-secondary/90"
                  >
                    Request a custom EPR plan
                  </Link>
                </motion.div>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-[2rem] border border-border bg-card p-8 shadow-lg shadow-secondary/5"
                >
                  <h3 className="text-2xl font-semibold text-foreground mb-5">More posts you may like</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {blogPosts
                      .filter((item) => item.slug !== post.slug)
                      .slice(0, 2)
                      .map((related) => (
                        <Link
                          key={related.slug}
                          to={related.path}
                          className="rounded-3xl border border-border p-5 bg-background hover:border-secondary/60 transition"
                        >
                          <h4 className="font-semibold text-foreground mb-2">{related.title}</h4>
                          <p className="text-sm text-muted-foreground">{related.summary}</p>
                        </Link>
                      ))}
                  </div>
                </motion.section>
              </main>

              <aside className="hidden lg:block sticky top-24">
                <StickyContactForm />
              </aside>
            </div>
          </div>
        </section>

        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </article>
    </>
  );
};

export default BlogPost;
