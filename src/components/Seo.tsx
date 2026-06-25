import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  keywords?: string[];
  url?: string;           // Full canonical URL
  image?: string;
  type?: "website" | "article" | "service";
};

const Seo = ({ 
  title, 
  description, 
  keywords = [], 
  url, 
  image = "https://eprnexuss.com/og-image.jpg",
  type = "website"
}: SeoProps) => {

  useEffect(() => {
    const siteName = "EPR Nexuss";
    const fullTitle = title.includes(siteName) || title.includes("|") ? title : `${title} | ${siteName}`;
    const canonicalUrl = url || window.location.href;

    // Update Title
    document.title = fullTitle;

    const updateMeta = (attr: string, value: string, content: string) => {
      if (!content) return;
      let meta = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, value);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    const updateLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // Basic Meta
    updateMeta("name", "description", description);
    if (keywords.length > 0) {
      updateMeta("name", "keywords", keywords.join(", "));
    }

    // Open Graph
    updateMeta("property", "og:title", fullTitle);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", canonicalUrl);
    updateMeta("property", "og:image", image);
    updateMeta("property", "og:type", type);
    updateMeta("property", "og:site_name", siteName);

    // Twitter
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", fullTitle);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", image);

    // Canonical - Very Important
    updateLink("canonical", canonicalUrl);

    // Additional SEO Meta
    updateMeta("name", "robots", "index, follow");

    return () => {
      // Optional cleanup if needed
    };
  }, [title, description, keywords, url, image, type]);

  return null;
};

export default Seo;