// src/components/blogs/RelatedPosts.tsx
import React from 'react';
import { blogPosts } from '@/lib/blog';     // ← Change this path if your blog.ts is elsewhere

interface RelatedPostsProps {
  currentSlug: string;
  category: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentSlug, category }) => {
  const relatedPosts = React.useMemo(() => {
    return blogPosts
      .filter((post) => post.category === category && post.slug !== currentSlug)
      .slice(0, 3);
  }, [category, currentSlug]);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 border-t pt-12">
      <h2 className="text-2xl font-bold mb-8">More posts you may like</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {relatedPosts.map((post) => (
          <a
            key={post.slug}
            href={post.path}
            className="group block p-6 border border-gray-200 hover:border-primary rounded-2xl transition-all hover:shadow-md"
          >
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="mt-3 text-sm text-gray-600 line-clamp-3">
              {post.summary}
            </p>
            <span className="text-xs text-gray-500 mt-4 block">
              {post.date}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;