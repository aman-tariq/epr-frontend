import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { BlogPost } from "@/lib/blog";
import { eWasteBlogContent } from "@/lib/blog-content";

interface BlogPreviewModalProps {
  post: BlogPost;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogPreviewModal: React.FC<BlogPreviewModalProps> = ({
  post,
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              className="bg-card rounded-[2rem] border border-border shadow-lg shadow-secondary/20 w-full max-w-4xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-secondary to-secondary/50 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>

                {/* Title Overlay */}
                <div className="absolute inset-0 flex items-end">
                  <div className="p-8 w-full">
                    <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      {post.title}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="max-h-[calc(100vh-400px)] overflow-y-auto p-8 md:p-12">
                {/* Meta Information */}
                <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground/60">By</span>
                    <span className="font-semibold text-foreground">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground/60">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-secondary font-semibold">{post.readingTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-lg text-foreground/80 mb-8 font-medium leading-relaxed">
                  {post.summary}
                </p>

                {/* Preview Content */}
                {post.previewContent && (
                  <div className="mb-8 p-6 rounded-xl bg-secondary/5 border border-secondary/20">
                    <p className="text-foreground/70 leading-relaxed">
                      {post.previewContent}
                    </p>
                  </div>
                )}

                {/* Sections Preview */}
                {post.sections.length > 0 && (
                  <div className="space-y-8">
                    {post.sections.slice(0, 2).map((section, index) => (
                      <div key={index}>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {section.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed">
                          {section.body}
                        </p>
                        {section.bullets && section.bullets.length > 0 && (
                          <ul className="mt-4 space-y-2 ml-4">
                            {section.bullets.map((bullet, bIndex) => (
                              <li
                                key={bIndex}
                                className="text-foreground/70 flex items-start gap-3"
                              >
                                <span className="text-secondary font-bold mt-1">•</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Read More Button */}
                <div className="mt-12 pt-8 border-t border-border">
                  <a
                    href={post.path}
                    className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-secondary/30 hover:bg-secondary/90 transition-colors"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BlogPreviewModal;
