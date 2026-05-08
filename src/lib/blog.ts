import platformImage from "@/assets/recycling-process.jpg";
import cpcbImage from "@/assets/epr-company-banner.jpg";
import batteryImage from "@/assets/epr-services-banner.jpg";
import tyreImage from "@/assets/company-banner.jpg";

export interface BlogPostSection {
  title: string;
  body: string;
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  path: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  author: string;
  image: string;
  tags: string[];
  keywords: string[];
  metaDescription: string;
  sections: BlogPostSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "epr-plastic-compliance-trends",
    path: "/blog/epr-plastic-compliance-trends",
    title: "EPR Plastic Compliance Trends: CPCB Guidance for 2026",
    summary:
      "Explore the latest CPCB-aligned EPR practices for plastic waste management, regulatory reporting, and producer responsibility in India.",
    date: "April 16, 2026",
    readingTime: "6 min read",
    author: "EPR Nexuss Team",
    image: platformImage,
    tags: ["EPR Plastic", "CPCB", "Waste Management", "Recycling"],
    keywords: [
      "EPR plastic compliance",
      "CPCB plastic waste rules",
      "plastic recycling India",
      "extended producer responsibility",
    ],
    metaDescription:
      "Discover practical CPCB-aligned EPR plastic compliance strategies, collection systems, recycling channels, and reporting best practices for Indian producers.",
    sections: [
      {
        title: "Why plastic EPR matters in India",
        body:
          "Plastic remains one of the fastest growing waste streams in India, and the CPCB has made EPR compliance central to the nation’s circular economy targets. Producers must now document source segregation, responsible collection and final recovery to avoid penalties and maintain brand reputation.",
      },
      {
        title: "Key CPCB requirements for plastic waste producers",
        body:
          "The Central Pollution Control Board expects businesses to maintain audit-ready records, partner with authorized recyclers, and achieve measurable recovery targets. Your compliance program should include collection points, transparent reporting, and a robust reverse logistics network.",
        bullets: [
          "Align reporting with CPCB waste quantity and recycling timelines",
          "Use verified recycler channels for polymer recovery",
          "Capture proof of disposal, transportation and reuse",
        ],
      },
      {
        title: "How to build a blog-friendly EPR page",
        body:
          "A strong EPR blog should answer search intent with practical content, use descriptive headings, and link to your service pages. Publishing detailed posts about plastic waste audits, collection best practices, and CPCB policy updates improves organic visibility and positions your brand as an industry authority.",
      },
    ],
  },
  {
    slug: "epr-battery-waste-guidelines",
    path: "/blog/epr-battery-waste-guidelines",
    title: "EPR Battery Waste Guidelines: Safe Recycling and Compliance",
    summary:
      "Learn how EPR battery waste management can follow CPCB rules, reduce hazards, and support producer responsibility for Li-ion and lead-acid batteries.",
    date: "April 16, 2026",
    readingTime: "7 min read",
    author: "EPR Nexuss Team",
    image: batteryImage,
    tags: ["EPR Battery", "Battery Recycling", "CPCB", "Hazardous Waste"],
    keywords: [
      "EPR battery waste",
      "battery recycling India",
      "CPCB battery guidelines",
      "producer responsibility batteries",
    ],
    metaDescription:
      "Understand CPCB-compliant battery waste management practices, safe recycling pathways, and EPR documentation for lead-acid and lithium-ion battery producers.",
    sections: [
      {
        title: "Battery EPR and hazardous waste rules",
        body:
          "Battery waste is regulated due to its toxic metals and fire risk, making CPCB compliance essential. Producers must ensure the collection chain is documented, recyclers are authorized, and waste sender declarations are complete.",
      },
      {
        title: "Best practices for safe battery collection",
        body:
          "A safe collection program separates batteries by chemistry, prevents short circuits, and uses secure containers. EPR systems should include closed-loop logistics, authorised transporters, and clear consumer return paths.",
        bullets: [
          "Offer doorstep and drop-off battery takeback options",
          "Train staff on handling damaged or leaking units",
          "Partner with certified recyclers for metal recovery",
        ],
      },
      {
        title: "SEO tips for battery waste content",
        body:
          "Write your blog around specific search queries such as ‘battery waste EPR India’, ‘CPCB battery recycling compliance’ and ‘lead acid battery disposal rules’. Detailed case studies, compliance checklists, and internal links to service pages can boost discoverability.",
      },
    ],
  },
  {
    slug: "epr-tyre-management-cpcb",
    path: "/blog/epr-tyre-management-cpcb",
    title: "EPR Tyre Management: CPCB Best Practices for Sustainable Recovery",
    summary:
      "Explore CPCB recommended EPR practices for tyre waste, destruction devices, recycling, and sustainable reuse strategies.",
    date: "April 16, 2026",
    readingTime: "6 min read",
    author: "EPR Nexuss Team",
    image: tyreImage,
    tags: ["EPR Tyre", "Tyre Recycling", "CPCB", "Sustainability"],
    keywords: [
      "EPR tyre management",
      "tyre recycling rules India",
      "CPCB tyre waste",
      "producer responsibility tyres",
    ],
    metaDescription:
      "Discover CPCB-aligned tyre EPR strategies for collection, recovery and reuse that help producers meet waste management obligations and reduce environmental impact.",
    sections: [
      {
        title: "Why tyre EPR is critical today",
        body:
          "Tyre waste creates serious environmental and health challenges when left unmanaged. CPCB guidance encourages producers to build recovery networks that turn end-of-life tyres into recycled rubber, fuel, or energy feedstock.",
      },
      {
        title: "Compliance actions for tyre producers",
        body:
          "A compliant tyre waste program includes documented collection, transport by authorised agencies, and verified recycling. Use data-driven reporting to demonstrate the tonnage recovered and the products generated from recycled tyre material.",
        bullets: [
          "Set up take-back centers for used tyres",
          "Partner with recyclers who comply with CPCB disposal standards",
          "Publish recovery performance in regular compliance reports",
        ],
      },
      {
        title: "Crafting blog content that ranks",
        body:
          "Target keywords such as ‘tyre EPR compliance’ and ‘CPCB tyre management’ with long-form, informative articles. Adding real-world examples and linking to your tyre and plastic service pages gives readers a complete resource.",
      },
    ],
  },
  {
    slug: "epr-elv-audit-readiness",
    path: "/blog/epr-elv-audit-readiness",
    title: "EPR ELV Audit Readiness: CPCB Reporting and Recovery Strategy",
    summary:
      "Prepare for CPCB ELV audits with clear EPR reporting, vehicle recycling workflows, and accountable end-of-life recovery programs.",
    date: "April 16, 2026",
    readingTime: "6 min read",
    author: "EPR Nexuss Team",
    image: cpcbImage,
    tags: ["EPR ELV", "Automotive Recycling", "CPCB", "Compliance"],
    keywords: [
      "EPR ELV compliance",
      "CPCB ELV audit",
      "end-of-life vehicle recycling",
      "ELV waste management",
    ],
    metaDescription:
      "Learn how to make your EPR ELV program CPCB-ready with audit-ready reporting, responsible dismantling and certified recovery channels.",
    sections: [
      {
        title: "ELV recovery and CPCB expectations",
        body:
          "End-of-life vehicles require careful dismantling and material recovery. CPCB promotes systems that maximize reuse of steel, plastics and rubber while ensuring hazardous parts are handled by authorised facilities.",
      },
      {
        title: "How to stay audit-ready",
        body:
          "Maintain an accessible EPR file with transport manifests, disposal certificates, and evidence of recovery. Prepared producers can respond quickly to CPCB or state board queries with validated data and authorised partner records.",
        bullets: [
          "Document each ELV intake, transport and processing step",
          "Capture proof of recycling or reuse for metal, plastic and battery components",
          "Retain clearance certificates from authorised recyclers",
        ],
      },
      {
        title: "Using blog content to support your EPR brand",
        body:
          "A blog that explains ELV audit readiness and recovery systems helps search engines understand your authority. Use clear headings, FAQs and case examples to reach producers searching for compliance guidance.",
      },
    ],
  },
];

export const blogDropdown = blogPosts.map((post) => ({
  label: post.title,
  path: post.path,
}));
