// src/components/blogs/PostWrapper.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Seo from '@/components/Seo';
import RelatedPosts from './RelatedPosts';

interface PostWrapperProps {
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  author: string;
  image?: string;
  tags: string[];
  metaDescription: string;
  keywords?: string[];
  path: string;
  category: string;
  slug: string;
  children: React.ReactNode;
}

const PostWrapper: React.FC<PostWrapperProps> = ({
  title,
  summary,
  date,
  readingTime,
  author,
  image,
  tags,
  metaDescription,
  keywords,
  path,
  category,
  slug,
  children,
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    image: image ? [image] : [],
    author: { '@type': 'Person', name: author },
    datePublished: date,
    description: metaDescription,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://eprnexuss.com${path}`,
    },
  };

  return (
    <>
      <Seo
        title={title}
        description={metaDescription}
        keywords={keywords}
        url={`https://eprnexuss.com${path}`}
        image={image}
      />

      <article className="relative bg-background">
        {/* Hero Section */}
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
                    {title}
                  </h1>
                  <p className="mt-4 max-w-3xl text-white/80 leading-8">{summary}</p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
                    <span>{date}</span>
                    <span>•</span>
                    <span>{readingTime}</span>
                    <span>•</span>
                    <span>By {author}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.85fr_0fr]">
              <main className="space-y-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-secondary font-semibold">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary/10 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Blog Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="prose prose-gray max-w-none"
                >
                  {children}
                </motion.div>

                {/* CTA Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-[2rem] border border-border bg-secondary/10 p-8 shadow-lg shadow-secondary/10"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">
                    Actionable next step
                  </p>
                  <h2 className="text-3xl font-semibold text-foreground mb-4">
                    Turn guidance into compliant action
                  </h2>
                  <p className="text-muted-foreground leading-8">
                    Use this post as a foundation for your EPR program. Keep a documented chain of custody, partner with authorised recyclers, and maintain transparent CPCB reporting.
                  </p>
                </motion.div>

                {/* Related Posts */}
                <RelatedPosts currentSlug={slug} category={category} />
              </main>
            </div>
          </div>
        </section>

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </article>
    </>
  );
};

export default PostWrapper;