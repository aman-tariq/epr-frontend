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
  category: "epr-plastic" | "epr-battery" | "epr-tyre" | "epr-elv" | "e-waste";
  previewContent?: string;
  fullContent?: string;
}

export interface BlogCategory {
  id: string;
  slug: string;
  name: string;
  path: string;
  description: string;
  image: string;
  tagLine: string;
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
    category: "epr-plastic",
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
    category: "epr-battery",
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
    category: "epr-tyre",
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
    category: "epr-elv",
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
  {
    slug: "e-waste-buying-selling",
    path: "/blog/e-waste-buying-selling",
    title: "How We Help Clients Buy and Sell Scrap and Products in E-Waste Recycling Plant",
    summary:
      "Learn how to optimize scrap sourcing, material grading, and product sales in e-waste recycling through smart buying and selling strategies.",
    date: "May 11, 2026",
    readingTime: "8 min read",
    author: "EPR Nexuss Team",
    image: platformImage,
    tags: ["E-Waste", "Recycling", "Material Trading", "Business Development"],
    keywords: [
      "e-waste buying selling",
      "scrap material recycling",
      "recycling plant profitability",
      "material grading",
    ],
    metaDescription:
      "Discover how professional e-waste recycling plants optimize scrap buying, material grading, and product sales for maximum profitability.",
    category: "e-waste",
    previewContent:
      "In e-waste recycling, success is not only about processing material. It is also about buying the right scrap, finding the right buyers, and moving the right products at the right time. A well-planned buying and selling system can turn a recycling plant into a stronger, faster-growing business.",
    sections: [
      {
        title: "Why this part of the business matters",
        body:
          "Many clients think an e-waste recycling plant is only about collection and dismantling. In reality, the business becomes truly profitable when scrap and output products move smoothly in the market. The business cycle improves when you buy wisely and sell smartly.",
      },
      {
        title: "The full buying and selling cycle",
        body:
          "The process includes sourcing scrap, checking quality, finding the right buyer, and closing the deal with proper documentation and payment coordination.",
      },
    ],
  },
  {
    slug: "e-waste-approvals",
    path: "/blog/e-waste-approvals",
    title: "Approvals on E-Waste Recycling Plant",
    summary:
      "Master the approval roadmap for e-waste recycling plants with clear compliance, legal permissions, and government authorization strategies.",
    date: "May 11, 2026",
    readingTime: "9 min read",
    author: "EPR Nexuss Team",
    image: cpcbImage,
    tags: ["E-Waste", "Compliance", "Approvals", "Regulations"],
    keywords: [
      "e-waste plant approvals",
      "CPCB authorization",
      "recycling plant licenses",
      "environmental compliance",
    ],
    metaDescription:
      "Get a complete guide to e-waste recycling plant approvals including Consent to Establish, Consent to Operate, and all required authorizations.",
    category: "e-waste",
    previewContent:
      "Before the shredder starts, let the approvals lead the way. A successful e-waste recycling plant is not built only with machines. It is built with the right permissions, a smart approval roadmap, and a compliance-first mindset.",
    sections: [
      {
        title: "Why approvals matter before plant setup",
        body:
          "Approvals shape the entire business from the beginning. They decide how the site is used, where waste is stored, how material moves, what pollution control is needed, and when commercial operations can begin.",
      },
      {
        title: "Major approvals required",
        body:
          "Most e-waste projects need E-waste authorization, Consent to Establish, Consent to Operate, Factory License, Fire NOC, and building clearance.",
      },
    ],
  },
  {
    slug: "e-waste-market-analysis",
    path: "/blog/e-waste-market-analysis",
    title: "Market Analysis and Target Market Segments in E-Waste Recycling Plant",
    summary:
      "Understand target market segments for e-waste recycling including bulk generators, aggregators, traders, and downstream buyers.",
    date: "May 11, 2026",
    readingTime: "7 min read",
    author: "EPR Nexuss Team",
    image: batteryImage,
    tags: ["E-Waste", "Market Analysis", "Business Strategy", "Segments"],
    keywords: [
      "e-waste market analysis",
      "recycling business segments",
      "waste generators",
      "recycling buyers",
    ],
    metaDescription:
      "Learn how to identify and serve the right market segments in e-waste recycling for sustainable business growth and profitability.",
    category: "e-waste",
    previewContent:
      "Know the market, and the market starts working for you. A strong e-waste recycling plant needs a clear understanding of who will supply the waste, who will buy the output, and which market segments give the best opportunity for growth.",
    sections: [
      {
        title: "Why market analysis matters",
        body:
          "Market analysis gives the client a real picture of the business environment. It helps answer: Is there enough material available? Who are the major buyers? Which segment offers the best value?",
      },
      {
        title: "Target market segments",
        body:
          "The business depends on a mix of scrap generators, bulk suppliers, aggregators, traders, manufacturers, and downstream buyers.",
      },
    ],
  },
  {
    slug: "e-waste-machinery",
    path: "/blog/e-waste-machinery",
    title: "How We Help Clients Choose the Right Machinery in E-Waste Recycling Plant",
    summary:
      "Select optimal machinery for e-waste recycling plants covering dismantling, shredding, sorting, and separation systems.",
    date: "May 11, 2026",
    readingTime: "8 min read",
    author: "EPR Nexuss Team",
    image: tyreImage,
    tags: ["E-Waste", "Machinery", "Equipment", "Plant Design"],
    keywords: [
      "e-waste machinery",
      "recycling equipment",
      "shredder crusher",
      "metal separator",
    ],
    metaDescription:
      "Discover the right machinery selection strategy for profitable and efficient e-waste recycling plant operations.",
    category: "e-waste",
    previewContent:
      "Right machine. Right capacity. Right result. A recycling plant becomes profitable when machinery is selected with care, matched with the plant goal, and designed around actual business needs.",
    sections: [
      {
        title: "Why machinery selection matters",
        body:
          "Machinery is the heart of the operation. It decides how fast material moves, how safely it is handled, how much can be recovered, and how much profit the plant can create.",
      },
      {
        title: "Common machinery types",
        body:
          "E-waste plants typically use dismantling tables, shredders, magnetic separators, eddy current separators, dust collection, and conveyor systems.",
      },
    ],
  },
  {
    slug: "e-waste-dpr",
    path: "/blog/e-waste-dpr",
    title: "How Can We Help Clients in Creating a Detailed Project Report File for E-Waste Recycling Plant",
    summary:
      "Create a comprehensive DPR for e-waste recycling projects covering planning, design, finance, and approval roadmap.",
    date: "May 11, 2026",
    readingTime: "9 min read",
    author: "EPR Nexuss Team",
    image: cpcbImage,
    tags: ["E-Waste", "Project Planning", "DPR", "Finance"],
    keywords: [
      "e-waste DPR",
      "detailed project report",
      "project planning",
      "recycling plant finance",
    ],
    metaDescription:
      "Master the creation of a strong Detailed Project Report for e-waste recycling plants to secure funding and smooth execution.",
    category: "e-waste",
    previewContent:
      "One strong DPR can turn an idea into a fundable project. A detailed project report is more than a document. It is the map that explains the business, the plant, the approvals, the machinery, the costs, and the future growth path in one clear place.",
    sections: [
      {
        title: "Why the DPR is so important",
        body:
          "For an e-waste recycling plant, the DPR is the foundation of the entire project journey. It helps the client understand what the plant will do, how much it will cost, what approvals are needed, and how the business can work practically.",
      },
      {
        title: "What goes inside a strong DPR",
        body:
          "A DPR should include project overview, market study, plant process, machinery list, costing & finance, and approvals section.",
      },
    ],
  },
  // ===== PLASTIC RECYCLING BLOGS =====
  {
    slug: "plastic-approvals",
    path: "/blog/plastic-approvals",
    title: "Approvals for Plastic Recycling Plant — Turn Compliance Into a Smooth Start",
    summary:
      "Master the approval roadmap for plastic recycling plants with CTE, CTO, GST registration, and all required clearances.",
    date: "May 12, 2026",
    readingTime: "9 min read",
    author: "EPR Nexuss Team",
    image: platformImage,
    tags: ["Plastic Recycling", "Approvals", "CPCB", "Compliance"],
    keywords: [
      "plastic recycling plant approvals",
      "CTE CTO compliance",
      "CPCB plastic waste",
      "recycling plant licenses",
    ],
    metaDescription:
      "Get a complete plastic recycling plant approval guide covering Consent to Establish, Consent to Operate, and all regulatory requirements.",
    category: "epr-plastic",
    previewContent:
      "A plastic recycling plant works best when the approvals are planned early. The right sequence saves time, avoids rework, and helps the business move from idea to operation with confidence.",
    sections: [
      {
        title: "Why Approvals Matter So Much",
        body:
          "Good approvals do more than satisfy a formality. They protect the project, support operations, and give the client a cleaner path to start-up. When approvals are delayed, the plant delays too. When approvals are planned well, the project feels manageable.",
      },
      {
        title: "Main Approvals Clients Usually Need",
        body:
          "The exact list depends on the plant design, location, and process line. Most clients need CTE, CTO, plastic waste compliance, hazardous waste authorization if applicable, local body approvals, and fire clearance.",
        bullets: [
          "Consent to Establish (CTE) before construction",
          "Consent to Operate (CTO) before production",
          "Plastic waste / EPR-linked compliance",
          "Hazardous waste authorization (if applicable)",
          "Local body / building approvals",
          "Safety and fire clearance",
        ],
      },
      {
        title: "Approval Roadmap Made Easy",
        body:
          "Start with site fitness, prepare the project file, apply for CTE, install the plant, apply for CTO, then start reporting and compliance tracking.",
      },
    ],
  },
  {
    slug: "plastic-buy-selling",
    path: "/blog/plastic-buy-selling",
    title: "Scrap Buying & Selling in Plastic Recycling — From Scrap to Sale with Better Margins",
    summary:
      "Learn how to optimize plastic scrap sourcing, quality grading, and product sales for maximum profitability.",
    date: "May 12, 2026",
    readingTime: "8 min read",
    author: "EPR Nexuss Team",
    image: platformImage,
    tags: ["Plastic Recycling", "Business", "Scrap Trading", "Margins"],
    keywords: [
      "plastic scrap buying selling",
      "recycling profitability",
      "scrap quality grading",
      "plastic product sales",
    ],
    metaDescription:
      "Discover strategies to improve plastic scrap sourcing, material grading, and buyer matching for stronger recycling plant margins.",
    category: "epr-plastic",
    previewContent:
      "In a plastic recycling plant, profit depends on more than machinery. The real difference comes from buying the right scrap, keeping quality under control, and selling the final product to the right buyer at the right value.",
    sections: [
      {
        title: "Why Buying and Selling Matter So Much",
        body:
          "A recycling plant cannot grow only by processing plastic. It must also manage market flow. Good buying brings clean feedstock. Good selling brings cash flow. Together, they keep the business healthy.",
      },
      {
        title: "How to Help Clients in Scrap Buying",
        body:
          "Scrap buying is not only about price. It is about quality, consistency, logistics, and fit for the plant. A cheaper load can become expensive if it creates contamination or high rejection.",
        bullets: [
          "Choose clean, useful scrap rather than only cheap scrap",
          "Focus on supplier reliability",
          "Plan purchase volumes according to machine capacity",
          "Negotiate using actual recovery value",
        ],
      },
      {
        title: "How to Help Clients in Product Selling",
        body:
          "Once the plant starts producing flakes or pellets, the goal is to sell the product in the right market at the right value. Product presentation matters almost as much as product quality.",
        bullets: [
          "Improve product presentation and packaging",
          "Show clear grade and specification",
          "Sell to buyers who match product quality",
          "Maintain consistency so buyers return regularly",
        ],
      },
    ],
  },
  {
    slug: "plastic-machinery",
    path: "/blog/plastic-machinery",
    title: "Plastic Recycling Machinery Planning — Build a Smarter Plant with the Right Equipment",
    summary:
      "Select and optimize machinery for plastic recycling covering shredding, sorting, washing, drying, and pelletizing systems.",
    date: "May 12, 2026",
    readingTime: "8 min read",
    author: "EPR Nexuss Team",
    image: tyreImage,
    tags: ["Plastic Recycling", "Machinery", "Equipment", "Plant Design"],
    keywords: [
      "plastic recycling machinery",
      "shredder crusher",
      "sorting conveyor",
      "plastic processing equipment",
    ],
    metaDescription:
      "Learn how to select and optimize machinery for profitable and efficient plastic recycling plant operations.",
    category: "epr-plastic",
    previewContent:
      "The right machinery does more than process waste. It improves quality, reduces downtime, lowers operating cost, and helps your recycling business grow with confidence.",
    sections: [
      {
        title: "Why Machinery Selection Matters So Much",
        body:
          "A recycling plant can only perform well when the machinery matches the material, capacity, and business model. A machine that looks powerful on paper may not be suitable for the actual waste stream. That is why planning is important.",
      },
      {
        title: "Key Machinery Components",
        body:
          "PET bottles, HDPE containers, rigid plastic, and mixed scrap all need different handling. Choosing the correct line avoids unnecessary losses and poor output.",
        bullets: [
          "Shredder / Crusher — Breaks large plastic into small pieces",
          "Sorting Conveyor — Separates unwanted material before washing",
          "Washing Line — Removes dirt, labels, glue, and contamination",
          "Dewatering Unit — Removes excess water before drying",
          "Drying System — Reduces moisture for further processing",
          "Extruder / Pelletizer — Converts flakes into pellets",
        ],
      },
      {
        title: "How We Help Clients at Every Stage",
        body:
          "We guide clients from understanding their goal through final commissioning. The focus is making the project simple, practical, and easy to understand.",
      },
    ],
  },
  {
    slug: "plastic-market-analysis",
    path: "/blog/plastic-market-analysis",
    title: "Market Analysis & Target Segments in Plastic Recycling — Turn Waste into Supply Chain",
    summary:
      "Understand the plastic recycling market landscape, identify target segments, and build a sustainable business model.",
    date: "May 12, 2026",
    readingTime: "8 min read",
    author: "EPR Nexuss Team",
    image: batteryImage,
    tags: ["Plastic Recycling", "Market Analysis", "Business Strategy"],
    keywords: [
      "plastic recycling market",
      "target market segments",
      "recycling business model",
      "plastic waste buyers",
    ],
    metaDescription:
      "Discover how to identify and serve target market segments in plastic recycling for sustainable growth and profitability.",
    category: "epr-plastic",
    previewContent:
      "Plastic recycling is no longer just a compliance story. It is a growing business built on steady scrap supply, rising recycled-content demand, and brands that need a cleaner material story.",
    sections: [
      {
        title: "Why This Market Keeps Opening Up",
        body:
          "A plastic recycling plant sits at the crossing point of three strong forces: more plastic consumption, tighter waste rules, and faster demand for recycled material. The Indian plastics market is large, while the recycled plastics market is expanding steadily.",
      },
      {
        title: "Best Target Market Segments",
        body:
          "The strongest target segments are the ones with repeat demand, clear specifications, and enough volume to support long runs.",
        bullets: [
          "Packaging converters — film, sheet, bottles, caps, crates",
          "FMCG brands — companies needing recycled-content packaging",
          "Automotive suppliers — molded parts, trims, components",
          "Construction product makers — pipes, profiles, panels",
          "Material traders — aggregators and compounders",
        ],
      },
      {
        title: "How to Position the Plant in the Market",
        body:
          "Start with reliable scrap (PET bottles, HDPE containers, PP industrial scrap), sell quality not just material, use a multi-channel strategy, and build trust through documentation.",
      },
    ],
  },
  {
    slug: "plastic-recycling",
    path: "/blog/plastic-recycling",
    title: "Plastic Recycling Process & Sustainability — From Waste to Profit",
    summary:
      "Master the plastic recycling process, understand profitability drivers, and build a sustainable circular economy business.",
    date: "May 12, 2026",
    readingTime: "8 min read",
    author: "EPR Nexuss Team",
    image: platformImage,
    tags: ["Plastic Recycling", "Sustainability", "Process", "Circular Economy"],
    keywords: [
      "plastic recycling process",
      "circular economy",
      "recycled plastics market",
      "sustainability",
    ],
    metaDescription:
      "Learn the complete plastic recycling process, profitability strategies, and how to build a sustainable circular business model.",
    category: "epr-plastic",
    previewContent:
      "Plastic recycling is not only a waste solution—it is a business that turns discarded material into valuable supply chain assets and creates steady revenue.",
    sections: [
      {
        title: "The Business Flow from Waste to Product",
        body:
          "The process includes collecting plastic scrap, sorting by polymer type and color, washing and processing the material, and converting it into saleable products like flakes, regrind, or pellets.",
        bullets: [
          "Step 1: Collect plastic scrap from households and businesses",
          "Step 2: Sort by polymer type, color, contamination level",
          "Step 3: Wash, shred, dry according to plant design",
          "Step 4: Convert into saleable product with clear specification",
          "Step 5: Sell to buyer segment that values that exact grade",
        ],
      },
      {
        title: "Which Products Fit Which Buyers",
        body:
          "PET flakes go to packaging converters, HDPE regrind to drum and pipe manufacturers, PP granules to automotive makers, and sorted bales to traders and material brokers.",
      },
      {
        title: "How Margin is Created",
        body:
          "Margin improves when scrap is bought smartly, sorting loss is low, and the output can be sold into a stable buyer base instead of a one-time open market sale.",
      },
    ],
  },
  // ===== LITHIUM BATTERY RECYCLING BLOGS =====
  {
    slug: "lithium-battery-approvals",
    path: "/blog/lithium-battery-approvals",
    title: "Lithium-Ion Battery Recycling Plant Approvals — 8-Month Roadmap to Operation",
    summary:
      "Master the complete approval roadmap for lithium battery recycling plants with parallel filing strategy and CPCB compliance.",
    date: "May 12, 2026",
    readingTime: "10 min read",
    author: "EPR Nexuss Team",
    image: batteryImage,
    tags: ["Lithium Battery", "Approvals", "CPCB", "Compliance"],
    keywords: [
      "lithium battery recycling approvals",
      "battery plant licensing",
      "CPCB battery waste",
      "hazardous waste authorization",
    ],
    metaDescription:
      "Get the complete lithium battery recycling plant approval guide with 8-month parallel filing roadmap and all regulatory requirements.",
    category: "epr-battery",
    previewContent:
      "India generated around 50,000 metric tonnes of lithium-ion battery waste in 2023. By 2030, that number will exceed 180,000 MT. The entrepreneurs who move through the regulatory process quickly and correctly will be the ones who build the most profitable green businesses.",
    sections: [
      {
        title: "Why This Opportunity Won't Wait",
        body:
          "The recycling infrastructure to handle battery waste simply doesn't exist yet. That gap between waste generated and waste properly recycled is growing every year, and it is your business opportunity.",
      },
      {
        title: "Complete Licence Checklist",
        body:
          "A lithium-ion battery recycling plant needs approvals from 4 to 6 government bodies. With proper planning and parallel filing, the entire approval process can be completed in 8 months.",
        bullets: [
          "GST Registration + Pollution Cess Exemption (Month 1)",
          "Consent to Establish (CTE) (Month 2-4)",
          "Consent to Operate (CTO) (Month 7-8)",
          "Hazardous Waste Authorisation (Month 2-4)",
          "Fire NOC (Month 3)",
          "Factory Licence (Month 3-4)",
          "EPR Registration on CPCB Portal (Month 1)",
        ],
      },
      {
        title: "The Key Insight",
        body:
          "Parallel filing of CTE and Hazardous Waste Authorisation saves an estimated 3-4 months compared to sequential processing. File everything together on Day 1 with complete documents.",
      },
    ],
  },
  {
    slug: "lithium-battery-buy-selling",
    path: "/blog/lithium-battery-buy-selling",
    title: "Lithium Battery Recycling Trading — Make Scrap Trading More Profitable & Predictable",
    summary:
      "Learn trading strategies for lithium battery scrap sourcing, material grading, and buyer matching for maximum profitability.",
    date: "May 12, 2026",
    readingTime: "8 min read",
    author: "EPR Nexuss Team",
    image: batteryImage,
    tags: ["Lithium Battery", "Trading", "Scrap", "Business"],
    keywords: [
      "lithium battery trading",
      "scrap sourcing",
      "battery recycling profitability",
      "material grading",
    ],
    metaDescription:
      "Discover how to optimize lithium battery scrap buying, material grading, and buyer matching for stronger recycling business margins.",
    category: "epr-battery",
    previewContent:
      "In the lithium-ion battery recycling business, value is not only hidden inside the material. It is also hidden in the way you source it, sell it, and move it. The right trading partner can help you reduce friction, get better pricing, and build a supply chain that feels reliable.",
    sections: [
      {
        title: "How We Help Clients Buy and Sell Scrap",
        body:
          "Buying and selling lithium-ion battery scrap should feel like a business decision, not a guessing game. We connect sellers with genuine buyers and help buyers access trusted scrap sources, so both sides can move forward with confidence.",
      },
      {
        title: "What Makes a Deal Stronger",
        body:
          "Clear material grading before negotiation, better visibility on actual recoverable value, faster buyer response, safer movement with proper paperwork, and more trust between seller and buyer all improve deal strength.",
      },
      {
        title: "Price Optimization Through Better Networks",
        body:
          "With optimized trading practices and better buyer networks, recyclers can improve price realization from ₹85K per ton to ₹1.1L per ton, representing a 28% improvement in returns.",
      },
    ],
  },
  {
    slug: "lithium-battery-dpr",
    path: "/blog/lithium-battery-dpr",
    title: "Lithium Battery Recycling DPR — 5 TPD + 2 TPD Integrated Plant Plan",
    summary:
      "Create a comprehensive Detailed Project Report for lithium battery recycling plants covering design, finance, and compliance.",
    date: "May 12, 2026",
    readingTime: "12 min read",
    author: "EPR Nexuss Team",
    image: cpcbImage,
    tags: ["Lithium Battery", "DPR", "Project Planning", "Finance"],
    keywords: [
      "lithium battery DPR",
      "detailed project report",
      "battery plant finance",
      "hydrometallurgical recycling",
    ],
    metaDescription:
      "Master the creation of a comprehensive DPR for lithium battery recycling plants covering 5 TPD mechanical and 2 TPD hydromet processing.",
    category: "epr-battery",
    previewContent:
      "An integrated recycling facility processing 5 tons per day battery material into black mass, followed by 2 TPD hydrometallurgical refining to extract high-purity lithium, cobalt, nickel, manganese and graphite.",
    sections: [
      {
        title: "Executive Snapshot: Why This Plant Matters",
        body:
          "With EV sales booming and Battery Waste Management Rules 2022 mandating EPR, authorised recyclers are the missing link. This DPR outlines a practical, scalable, financially sound model to capture that opportunity.",
      },
      {
        title: "Technology & Equipment",
        body:
          "Advanced mechanical shredding & separation plus hydrometallurgical leaching and solvent extraction for metal recovery. The plant achieves 95%+ target recovery efficiency.",
        bullets: [
          "Battery discharge station (safe load resistor based)",
          "Primary & secondary shredders (5 TPD capacity)",
          "Hammer mill & granulator for size reduction",
          "Vibratory screens & magnetic separators (ferrous removal)",
          "Hydrometallurgical reactors (leaching tanks, agitators)",
          "Filtration units (filter press + membrane)",
          "Solvent extraction & electrowinning setup",
        ],
      },
      {
        title: "Capital Outlay & Financial Projections",
        body:
          "Total project outlay approximately ₹495 Lakhs (₹4.95 Cr) with projected IRR of 22-25% and payback of 4.5 years. Revenue grows from ₹420 Lakhs in Year 1 to ₹890 Lakhs in Year 5.",
      },
    ],
  },
  {
    slug: "lithium-battery-machinery",
    path: "/blog/lithium-battery-machinery",
    title: "Lithium Battery Recycling Machinery — Build a Smarter Plant with Right Equipment",
    summary:
      "Select and optimize machinery for lithium battery recycling covering dismantling, shredding, separation, and hydromet systems.",
    date: "May 12, 2026",
    readingTime: "8 min read",
    author: "EPR Nexuss Team",
    image: tyreImage,
    tags: ["Lithium Battery", "Machinery", "Equipment", "Technology"],
    keywords: [
      "battery recycling machinery",
      "shredding systems",
      "hydrometallurgical equipment",
      "material separation",
    ],
    metaDescription:
      "Learn how to select and optimize machinery for profitable and efficient lithium battery recycling plant operations.",
    category: "epr-battery",
    previewContent:
      "The right machinery does more than process battery waste. It saves time, improves safety, increases recovery, and helps your plant run like a real business.",
    sections: [
      {
        title: "Why Machinery Selection Matters",
        body:
          "Every recycling plant needs the right equipment at the right stage. The real difference comes from choosing machinery that fits the plant's scale, material mix, and daily production target.",
      },
      {
        title: "Suggested Machinery Components",
        body:
          "From dismantling stations through separation units to dust collection systems, each machine serves a critical function in the recovery process.",
        bullets: [
          "Dismantling station — Safe opening and handling of battery packs",
          "Shredder / crusher — Breaks material into processable size",
          "Separation unit — Sorts metal, plastic, and black mass",
          "Dust collection system — Controls fine particles during operation",
          "Material conveyor — Moves material through the plant",
        ],
      },
      {
        title: "Performance Improvements with Right Setup",
        body:
          "Proper machinery selection improves processing speed from 55% to 90%, increases material recovery from 60% to 88%, and reduces downtime from 30% to 12%.",
      },
    ],
  },
  {
    slug: "lithium-battery-market-analysis",
    path: "/blog/lithium-battery-market-analysis",
    title: "Lithium Battery Market Analysis — Present Batteries & Future EV Planning",
    summary:
      "Understand the lithium battery recycling market focusing on mobile, e-rickshaw, and car batteries with future EV readiness planning.",
    date: "May 12, 2026",
    readingTime: "8 min read",
    author: "EPR Nexuss Team",
    image: batteryImage,
    tags: ["Lithium Battery", "Market Analysis", "EV", "Business"],
    keywords: [
      "lithium battery market",
      "battery recycling opportunity",
      "EV battery waste",
      "mobile e-rickshaw car batteries",
    ],
    metaDescription:
      "Discover how to identify and serve present battery recycling markets while preparing for future EV battery recycling opportunities.",
    category: "epr-battery",
    previewContent:
      "The strongest recycling businesses are built on what is already moving through the market today. Mobile batteries, e-rickshaw batteries, and car batteries create the real collection base for a practical plant, while EV batteries remain the future opportunity.",
    sections: [
      {
        title: "What This Market Looks Like Today",
        body:
          "The present battery market is driven by everyday use, repeated replacement cycles, and easy collection from local repair and service networks. Instead of depending on one source, a smart plant builds a mix of small-volume, medium-volume, and structured replacement batteries.",
      },
      {
        title: "Market Profile of Current Battery Types",
        body:
          "Mobile batteries, e-rickshaw batteries, and car batteries each have different collection patterns but together create a balanced feedstock base.",
        bullets: [
          "Mobile batteries — High quantity and frequent inflow from repair shops",
          "E-rickshaw batteries — Repeatable fleet-based returns from operators",
          "Car batteries — Structured and service-linked supply from garages",
        ],
      },
      {
        title: "Future Plan: EV Battery Readiness",
        body:
          "Use today's battery business to build the systems needed for EV batteries later. This includes better fire safety, stronger storage controls, better reverse logistics, and tighter traceability.",
      },
    ],
  },
];

export const blogCategories: BlogCategory[] = [
  {
    id: "e-waste",
    slug: "e-waste",
    name: "E-Waste",
    path: "/blog/category/e-waste",
    description: "Learn about e-waste recycling plant setup, machinery, market analysis, approvals, and project planning for successful operations.",
    image: platformImage,
    tagLine: "E-Waste Recycling & Plant Management",
  },
  {
    id: "epr-plastic",
    slug: "epr-plastic",
    name: "EPR Plastic",
    path: "/blog/category/epr-plastic",
    description: "Learn about EPR plastic compliance, collection systems, and CPCB-aligned recycling strategies.",
    image: platformImage,
    tagLine: "Plastic Waste Management & Compliance",
  },
  {
    id: "epr-battery",
    slug: "epr-battery",
    name: "EPR Battery",
    path: "/blog/category/epr-battery",
    description: "Discover best practices for battery waste management, safe recycling, and lithium-ion recovery.",
    image: batteryImage,
    tagLine: "Battery Recycling & Hazardous Waste",
  },
  {
    id: "epr-tyre",
    slug: "epr-tyre",
    name: "EPR Tyre",
    path: "/blog/category/epr-tyre",
    description: "Explore tyre waste management, recovery strategies, and sustainable reuse practices.",
    image: tyreImage,
    tagLine: "Tyre Recycling & Recovery",
  },
  {
    id: "epr-elv",
    slug: "epr-elv",
    name: "EPR ELV",
    path: "/blog/category/epr-elv",
    description: "Master end-of-life vehicle recycling, audit readiness, and CPCB-compliant recovery programs.",
    image: cpcbImage,
    tagLine: "Automotive Recycling & Recovery",
  },
];

export const blogDropdown = blogCategories.map((category) => ({
  label: category.name,
  path: category.path,
}));
