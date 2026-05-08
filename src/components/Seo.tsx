import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  keywords?: string[];
  url?: string;
  image?: string;
};

const updateMetaTag = (attrName: string, attrValue: string, content: string) => {
  if (!content) return;
  const selector = `meta[${attrName}="${attrValue}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    if (attrName === "name" || attrName === "property") {
      element.setAttribute(attrName, attrValue);
    }
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const updateLink = (rel: string, href: string) => {
  if (!href) return;
  let link = document.head.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const Seo = ({ title, description, keywords = [], url, image }: SeoProps) => {
  useEffect(() => {
    document.title = title ? `${title} | EPR Nexuss` : "EPR Nexuss";

    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords.join(", "));
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:url", url || window.location.href);
    updateMetaTag("property", "og:image", image || "https://eprnexuss.com/og-image.jpg");
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", image || "https://eprnexuss.com/og-image.jpg");
    updateLink("canonical", url || window.location.href);
  }, [title, description, keywords, url, image]);

  return null;
};

export default Seo;
