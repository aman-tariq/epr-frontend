export interface ServiceItem {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  details: string;
  features: string[];
  useCases?: string[];
  processSteps?: { title: string; description: string }[];
  compliancePoints?: string[];
  highlights: string[];
  path: string;
  category: "epr-credits" | "sops-kpis-checklists" | "buy-sell" | "recycling-setups";
  subcategory?: string;
}

export const services: ServiceItem[] = [
  {
    slug: "epr-plastic",
    title: "EPR Plastic",
    subtitle: "CPCB-aligned plastic waste collection, segregation and recycling.",
    desc: "Integrated management for plastic waste under the Plastic Waste Management Rules, with CPCB-aligned documentation and certified EPR credit issuance.",
    details:
      "Our EPR Plastic service follows Central Pollution Control Board guidance and the Plastic Waste Management Rules, 2016. We manage collection, segregation, recycling and chain-of-custody documentation to support producers and brand owners in meeting compliance requirements.",
    features: ["CPCB-aligned compliance", "Segregation & recycling", "Verifiable EPR reporting"],
    useCases: [
      "Packaging scrap and flexible film recovery",
      "Post-consumer plastic collection from retail outlets",
      "Rigid plastic recycling for consumer goods producers",
    ],
    processSteps: [
      { title: "Collection planning", description: "We design collection routes and material segregation systems aligned with CPCB requirements." },
      { title: "Certified transport", description: "Plastic waste is moved using authorized carriers with tracked chain-of-custody documentation." },
      { title: "Authorized recycling", description: "Materials are delivered to certified recyclers that meet CPCB EPR standards." },
      { title: "Credit reporting", description: "We provide audit-ready EPR credit certificates and compliance reports." },
    ],
    compliancePoints: [
      "CPCB-approved documentation and certificates",
      "Segregation of plastic waste streams at source",
      "Recycling through authorized facilities",
    ],
    highlights: ["Plastic waste traceability", "Certification-ready documentation", "Authorized recycling partners"],
    path: "/services/epr-plastic",
    category: "epr-credits",
    subcategory: "EPR Plastic",
  },
  {
    slug: "epr-electronic",
    title: "EPR Electronic",
    subtitle: "Comprehensive e-waste collection and recycling under EPR guidelines.",
    desc: "End-to-end electronic waste management including collection, dismantling, and material recovery with CPCB-aligned EPR compliance.",
    details:
      "Our EPR Electronic service manages all types of electronic waste from consumer electronics to industrial equipment. We ensure secure collection, data destruction, material recovery, and full EPR documentation in line with CPCB guidelines.",
    features: ["E-waste collection & dismantling", "Data destruction services", "Material recovery"],
    useCases: [
      "Consumer electronics recycling (phones, laptops, TVs)",
      "IT asset disposal for businesses",
      "Industrial electronic waste management",
    ],
    processSteps: [
      { title: "Secure collection", description: "We collect e-waste from generators with proper documentation and chain-of-custody tracking." },
      { title: "Data destruction", description: "Sensitive data is securely wiped or physically destroyed before processing." },
      { title: "Dismantling & sorting", description: "Devices are disassembled and components sorted for recycling." },
      { title: "Material recovery", description: "Precious metals, plastics, and other materials are recovered by authorized recyclers." },
      { title: "EPR reporting", description: "We provide certified EPR credits and compliance documentation." },
    ],
    compliancePoints: [
      "E-Waste Management Rules alignment",
      "Authorized dismantlers and recyclers",
      "Data security and privacy compliance",
    ],
    highlights: ["Secure e-waste handling", "Precious metal recovery", "CPCB-approved processes"],
    path: "/services/epr-electronic",
    category: "epr-credits",
    subcategory: "EPR Electronic",
  },
  {
    slug: "epr-tyre",
    title: "EPR Tyre",
    category: "epr-credits",       
  subcategory: "EPR Tyre", 
    subtitle: "Comprehensive end-of-life tyre management and EPR compliance.",
    desc: "Responsible tyre waste collection, material recovery and energy recovery solutions in line with CPCB and EPR requirements.",
    details:
      "Our EPR Tyre service supports producers with tyre waste protocols that align with CPCB guidance. We provide secure collection, retreading, recycling and recovery by authorized processors, backed by documented EPR credit issuance.",
    features: ["Tyre reverse logistics", "Energy recovery pathways", "Regulatory reporting"],
    useCases: [
      "End-of-life passenger and commercial tyres",
      "Retreading and secondary use preparation",
      "Tyre-derived fuel and material recovery operations",
    ],
    processSteps: [
      { title: "Secure pickup", description: "We collect tyres from warehouses, dealers, and reuse centers using documented transport practices." },
      { title: "Sorting and grading", description: "Tyres are graded for reuse, retreading or recycling to maximize material value." },
      { title: "Recovery processing", description: "Recyclers split materials for rubber, steel and textile recovery under CPCB norms." },
      { title: "EPR documentation", description: "We deliver certified records for tyre EPR credit compliance." },
    ],
    compliancePoints: [
      "Authorized end-of-life tyre processors",
      "Documentation for retreading and recycling",
      "Safe handling of tyre-derived fuels and residues",
    ],
    highlights: ["Retreading and recycling", "Pyrolysis-ready processing", "CPCB-approved documentation"],
    path: "/services/epr-tyre",
  },
  {
    slug: "epr-elv",
    title: "EPR ELV",
    subtitle: "Authorized end-of-life vehicle depollution and material recovery.",
    desc: "Complete ELV dismantling, depollution and material recovery consistent with CPCB and environmental norms.",
    details:
      "Our EPR ELV service handles end-of-life vehicles through authorized depollution centers and material recovery facilities. We deliver full documentation and EPR credit support in accordance with CPCB guidelines for vehicle waste handling.",
    features: ["Authorized depollution", "Hazardous fluid recovery", "Material salvage"],
    useCases: [
      "End-of-life car and two-wheeler dismantling",
      "Hazardous fluid and battery removal",
      "Recycling of steel, aluminium and plastic auto parts",
    ],
    processSteps: [
      { title: "Depollution", description: "Our team removes fluids, batteries and hazardous components before dismantling." },
      { title: "Component recovery", description: "Reusable and recyclable parts are sorted for material recovery." },
      { title: "Secure recycling", description: "Vehicles are processed by authorized recyclers in CPCB-approved facilities." },
      { title: "Compliance reporting", description: "We prepare full ELV documentation for regulator review." },
    ],
    compliancePoints: [
      "CPCB-aligned depollution and dismantling procedures",
      "Safe handling of hazardous vehicle materials",
      "Traceable recovery and reporting systems",
    ],
    highlights: ["ELV dismantling compliance", "Metal and plastic recovery", "EPR reporting support"],
    path: "/services/epr-elv",
    category: "epr-credits",
    subcategory: "EPR ELV",
  },
  {
    slug: "epr-used-oil",
    title: "EPR Used Oil",
    subtitle: "Safe collection and recycling of used oil under CPCB and EPR frameworks.",
    desc: "Compliant used oil management, regeneration and disposal with verifiable EPR credits and CPCB-aligned handling.",
    details:
      "Our EPR Used Oil service ensures secure collection, transportation and recovery of spent oil. We partner with CPCB-approved recyclers and provide regulator-ready documentation for producers and industrial generators.",
    features: ["Secure oil logistics", "Re-refining & recovery", "Compliance documentation"],
    useCases: [
      "Industrial engine oil and compressor oil collection",
      "Spent lubricant recovery from service centers",
      "Regeneration and packaging of used oil products",
    ],
    processSteps: [
      { title: "Source collection", description: "Used oil is collected from generators with complete material tracking." },
      { title: "Hazardous handling", description: "Transport and storage meet CPCB safety standards for used oil." },
      { title: "Refining and reuse", description: "Oil is re-refined or repurposed in approved facilities." },
      { title: "Compliance certification", description: "We provide audit-ready EPR documentation for used oil management." },
    ],
    compliancePoints: [
      "CPCB-approved storage and transport",
      "Regulated re-refining pathways",
      "Complete audit trail for used oil disposal",
    ],
    highlights: ["Used oil traceability", "CPCB-approved handling", "Verified EPR credit records"],
    path: "/services/epr-used-oil",
    category: "epr-credits",
    subcategory: "EPR Used Oil",
  },
  {
    slug: "epr-metals",
    title: "EPR Metals",
    subtitle: "Certified metal waste recycling and resource recovery services.",
    desc: "Ferrous and non-ferrous metal waste management with CPCB-aligned recycling and EPR credit support.",
    details:
      "Our EPR Metals service manages scrap metal collection, sorting and authorized recovery. We ensure compliance with CPCB guidelines and provide transparent documentation for EPR credit issuance.",
    features: ["Scrap metal logistics", "Authorized recycling", "Compliance-ready reports"],
    useCases: [
      "Ferrous and non-ferrous scrap collection from industrial sites",
      "Metal recovery from construction and manufacturing waste",
      "Sorting of mixed metal streams for authorized recycling",
    ],
    processSteps: [
      { title: "Scrap assessment", description: "We evaluate metal waste quality and plan recovery routes for efficient processing." },
      { title: "Sorting and grading", description: "Metals are separated and graded for authorized recycling and downstream reuse." },
      { title: "Authorized processing", description: "Materials are delivered to CPCB-approved metal recyclers for recovery." },
      { title: "Reporting", description: "Compliance documentation is created for every recovered metal batch." },
    ],
    compliancePoints: [
      "Traceable metal scrap transportation",
      "Authorized recycler documentation",
      "CPCB-aligned EPR credit reporting",
    ],
    highlights: ["Ferrous and non-ferrous recovery", "Documented waste streams", "EPR-ready delivery"],
    path: "/services/epr-metals",
    category: "epr-credits",
    subcategory: "EPR Metals",
  },
  {
    slug: "epr-battery",
    title: "EPR Battery",
    subtitle: "Safe battery waste collection and CPCB-approved recycling.",
    desc: "End-to-end battery management for lead acid and lithium-ion waste under the Battery Waste Management Rules and CPCB EPR guidance.",
    details:
      "Our EPR Battery service handles all battery waste types with CPCB-aligned safety standards. We manage secure pickup, transport, recycling and material recovery while delivering certified EPR credits and regulator-ready documentation.",
    features: ["Battery reverse logistics", "Hazardous material safety", "Regulatory EPR reporting"],
    useCases: [
      "Lead acid battery returns from UPS and telecom sectors",
      "Lithium-ion battery disposal from EV and consumer electronics",
      "Battery pack recovery for reuse and material separation",
    ],
    processSteps: [
      { title: "Secure collection", description: "We collect spent batteries following battery waste handling rules and safety procedures." },
      { title: "Safe segregation", description: "Batteries are segregated by chemistry and condition for proper processing." },
      { title: "Responsible recycling", description: "Materials are sent to certified facilities for metal recovery and safe disposal." },
      { title: "EPR reporting", description: "We deliver end-to-end documentation for CPCB-compliant battery EPR credits." },
    ],
    compliancePoints: [
      "Battery Waste Management Rules alignment",
      "Hazardous battery handling safety",
      "Documented EPR credit issuance",
    ],
    highlights: ["Lead acid and lithium-ion handling", "Certified recyclers", "Traceable compliance records"],
    path: "/services/epr-battery",
    category: "epr-credits",
    subcategory: "EPR Battery",
  },
  {
    slug: "epr-lithium",
    title: "EPR Lithium",
    subtitle: "Specialized lithium-ion battery waste management and recycling.",
    desc: "Safe handling, recycling, and material recovery of lithium-ion batteries under EPR and environmental regulations.",
    details:
      "Our EPR Lithium service focuses on lithium-ion battery waste from EVs, consumer electronics, and energy storage systems. We provide secure collection, testing, recycling, and EPR credit support with full regulatory compliance.",
    features: ["Lithium battery logistics", "Thermal runaway prevention", "Material recovery"],
    useCases: [
      "EV battery pack recycling",
      "Consumer device battery disposal",
      "Energy storage system waste management",
    ],
    processSteps: [
      { title: "Safe collection", description: "Batteries are collected with safety protocols to prevent thermal runaway." },
      { title: "Condition assessment", description: "Batteries are tested and categorized for recycling or disposal." },
      { title: "Discharge & dismantling", description: "Safe discharge and disassembly of battery packs." },
      { title: "Material recovery", description: "Lithium, cobalt, nickel, and other materials are recovered." },
      { title: "EPR documentation", description: "Certified EPR credits and compliance reports are provided." },
    ],
    compliancePoints: [
      "Battery Waste Management Rules compliance",
      "Hazardous waste handling standards",
      "Material recovery traceability",
    ],
    highlights: ["Lithium-ion battery expertise", "Safe recycling processes", "EPR credit certification"],
    path: "/services/epr-lithium",
    category: "epr-credits",
    subcategory: "EPR Lithium",
  },
  {
    slug: "sops",
    title: "SOPs (Standard Operating Procedures)",
    subtitle: "Comprehensive standard operating procedures for EPR compliance.",
    desc: "Detailed SOPs designed to streamline your EPR operations and ensure consistent compliance across all waste streams.",
    details: "Our SOPs provide step-by-step guidance for collection, segregation, transportation, and recycling processes aligned with CPCB requirements and industry best practices.",
    features: ["Process standardization", "Compliance alignment", "Operational efficiency"],
    highlights: ["Clear process documentation", "CPCB-aligned procedures", "Audit-ready SOPs"],
    path: "/services/sops",
    category: "sops-kpis-checklists",
    subcategory: "SOPs",
  },
  {
    slug: "kpis",
    title: "KPIs (Key Performance Indicators)",
    subtitle: "Measurable metrics to track EPR program performance.",
    desc: "Track and optimize your EPR performance with industry-standard KPIs covering collection rates, recycling efficiency, cost management, and environmental impact.",
    details: "Our KPI framework helps you measure progress, identify improvement opportunities, and demonstrate the value of your EPR investments to stakeholders and regulators.",
    features: ["Performance tracking", "Benchmarking", "Data-driven insights"],
    highlights: ["Real-time KPI dashboards", "Industry benchmarks", "Actionable insights"],
    path: "/services/kpis",
    category: "sops-kpis-checklists",
    subcategory: "KPIs",
  },
  {
    slug: "checklists",
    title: "Checklists",
    subtitle: "Pre-audit and compliance checklists for EPR requirements.",
    desc: "Comprehensive checklists to ensure you meet all EPR compliance requirements before audits and regulatory inspections.",
    details: "Our checklists cover documentation, process implementation, record-keeping, and reporting requirements specific to each waste category and CPCB guidelines.",
    features: ["Audit readiness", "Compliance verification", "Risk mitigation"],
    highlights: ["Pre-audit checklists", "Compliance verification tools", "Documentation guides"],
    path: "/services/checklists",
    category: "sops-kpis-checklists",
    subcategory: "Checklists",
  },
  {
    slug: "buy-ewaste",
    title: "Buy E-Waste",
    subtitle: "Purchase certified e-waste for material recovery and recycling.",
    desc: "Access quality e-waste streams directly from our verified network of collection centers for your recycling and material recovery operations.",
    details: "We connect buyers with certified e-waste sources, ensuring material quality, traceability, and compliance with all environmental standards.",
    features: ["Certified sources", "Quality assurance", "Reliable supply"],
    highlights: ["Verified quality", "Traceable sourcing", "Competitive pricing"],
    path: "/services/buy-ewaste",
    category: "buy-sell",
    subcategory: "E-Waste",
  },
  {
    slug: "sell-batteries",
    title: "Sell Batteries",
    subtitle: "Sell your battery waste to certified recyclers and processors.",
    desc: "Monetize your battery waste streams by connecting with qualified buyers in our platform marketplace for batteries of all types.",
    details: "Our marketplace connects battery sellers with certified buyers, ensuring fair pricing, proper handling, and full regulatory compliance throughout the transaction.",
    features: ["Market access", "Fair pricing", "Compliance assured"],
    highlights: ["Direct buyer connections", "Transparent pricing", "Regulatory compliance"],
    path: "/services/sell-batteries",
    category: "buy-sell",
    subcategory: "Batteries",
  },
  {
    slug: "buy-sell-metals",
    title: "Buy & Sell Metals",
    subtitle: "Trade ferrous and non-ferrous metals with certified partners.",
    desc: "Access a comprehensive marketplace for buying and selling metals, including scrap metals, recovery materials, and certified recycled metals.",
    details: "Our metals trading platform connects buyers and sellers of ferrous and non-ferrous metals, ensuring quality assurance, fair market pricing, and full traceability throughout the transaction process.",
    features: ["Certified metal sources", "Market transparency", "Quality verification"],
    highlights: ["Direct trading platform", "Fair pricing", "Certified suppliers"],
    path: "/services/buy-sell-metals",
    category: "buy-sell",
    subcategory: "Metals",
  },
  {
    slug: "recycling-lithium-ion-battery",
    title: "Lithium Ion Battery",
    subtitle: "State-of-the-art lithium ion battery recycling plant.",
    desc: "Advanced recycling facility for lithium ion batteries with recovery of valuable materials including lithium, cobalt, and nickel.",
    details: "Our lithium ion battery recycling setup uses certified processes to safely dismantle, segregate, and recover valuable materials from spent batteries, ensuring environmental compliance and maximum material recovery.",
    features: ["Material recovery", "Safety compliance", "Environmental standards"],
    highlights: ["Advanced processing", "Material efficiency", "Certified facility"],
    path: "/services/recycling-lithium-ion-battery",
    category: "recycling-setups",
    subcategory: "Lithium Ion Battery",
  },
  {
    slug: "recycling-ewaste",
    title: "E-Waste",
    subtitle: "Comprehensive e-waste recycling and material recovery facility.",
    desc: "Full-scale e-waste recycling plant equipped to process all types of electronic waste with proper segregation and certified material recovery.",
    details: "Our e-waste recycling setup provides secure collection, dismantling, data destruction, and material recovery with complete traceability and regulatory compliance.",
    features: ["Secure processing", "Data destruction", "Material recovery"],
    highlights: ["Full automation", "High recovery rates", "Certified operations"],
    path: "/services/recycling-ewaste",
    category: "recycling-setups",
    subcategory: "E-Waste",
  },
  {
    slug: "recycling-vehicles-scrapping",
    title: "Registered Vehicles Scraping Faculty Plant",
    subtitle: "Authorized vehicle scrapping and depollution facility.",
    desc: "Licensed registered vehicle scrapping plant for end-of-life vehicles with authorized depollution and certified material recovery processes.",
    details: "Our registered vehicles scrapping faculty operates under government authorization, ensuring proper depollution procedures, hazardous fluid removal, and comprehensive material segregation for recycling.",
    features: ["Authorized operation", "Depollution services", "Material segregation"],
    highlights: ["Government registered", "Complete compliance", "Certified dismantlers"],
    path: "/services/recycling-vehicles-scrapping",
    category: "recycling-setups",
    subcategory: "Registered Vehicles Scraping Faculty Plant",
  },
  {
    slug: "recycling-plastic",
    title: "Plastic Recycling",
    subtitle: "Plastic recycling facility setup and compliance-ready recovery solutions.",
    desc: "Plastic recycling setup for waste collection, sorting, washing, extrusion, and documented recovery aligned with regulatory best practices.",
    details:
      "Our Plastic Recycling setup service helps promoters design and launch formal plastic recovery facilities that handle PET, HDPE, PP and mixed polymer streams. We assist with site planning, equipment selection, permitting, and end-to-end compliance documentation.",
    features: [
      "Feedstock segregation planning",
      "Authorized recycling process",
      "Quality output monitoring",
      "ETP and wastewater planning",
    ],
    useCases: [
      "Post-consumer plastic packaging recovery",
      "Rigid and flexible plastic recycling",
      "PET bottle and film washing and pelletising",
    ],
    processSteps: [
      { title: "Site & layout planning", description: "Design plant flow for receiving, sorting, washing, drying and extrusion." },
      { title: "Equipment selection", description: "Specify conveyors, shredders, wash lines, dryers and pelletisers for the right capacity." },
      { title: "Compliance approvals", description: "Support permits, pollution control clearances and ETP planning." },
      { title: "Operational setup", description: "Help with commissioning, trial runs and reporting for stable plant operations." },
    ],
    compliancePoints: [
      "Plastic Waste Management Rules alignment",
      "ETP and wastewater management",
      "Authorized recycler partnerships",
    ],
    highlights: ["Formal plastic recovery", "Regulatory-ready plant design", "Investor-friendly setup"],
    path: "/services/recycling-plastic",
    category: "recycling-setups",
    subcategory: "Plastic",
  },
  {
    slug: "recycling-solar-panel",
    title: "Solar Panel",
    subtitle: "Specialized solar panel recycling and material recovery.",
    desc: "Dedicated recycling facility for end-of-life solar panels with recovery of glass, silicon, and metal components.",
    details: "Our solar panel recycling setup safely processes retired panels, recovering valuable materials while ensuring environmental safety and regulatory compliance.",
    features: ["Material recovery", "Glass processing", "Silicon recovery"],
    highlights: ["Eco-friendly process", "High recovery rates", "Certified technology"],
    path: "/services/recycling-solar-panel",
    category: "recycling-setups",
    subcategory: "Solar Panel",
  },
];

export const serviceDropdown = [
  { label: "EPR Plastic", path: "/services/epr-plastic" },
  { label: "EPR Electronic", path: "/services/epr-electronic" },
  { label: "EPR Tyre", path: "/services/epr-tyre" },
  { label: "EPR ELV", path: "/services/epr-elv" },
  { label: "EPR Used Oil", path: "/services/epr-used-oil" },
  { label: "EPR Metals", path: "/services/epr-metals" },
  { label: "EPR Battery", path: "/services/epr-battery" },
  { label: "EPR Lithium", path: "/services/epr-lithium" },
  { label: "SOPs", path: "/services/sops" },
  { label: "KPIs", path: "/services/kpis" },
  { label: "Checklists", path: "/services/checklists" },
  { label: "Buy E-Waste", path: "/services/buy-ewaste" },
  { label: "Sell Batteries", path: "/services/sell-batteries" },
  { label: "Buy & Sell Metals", path: "/services/buy-sell-metals" },
  { label: "Lithium Ion Battery", path: "/services/recycling-lithium-ion-battery" },
  { label: "E-Waste", path: "/services/recycling-ewaste" },
  { label: "Registered Vehicles Scraping Faculty Plant", path: "/services/recycling-vehicles-scrapping" },
  { label: "Solar Panel", path: "/services/recycling-solar-panel" },
  { label: "Plastic", path: "/services/recycling-plastic" },
];

export interface ServiceCategory {
  name: string;
  subcategories: Array<{
    label: string;
    path: string;
  }>;
}

export const serviceCategoriesNav: ServiceCategory[] = [
  {
    name: "Recycling Setups",
    subcategories: [
      { label: "Lithium Ion Battery", path: "/services/recycling-lithium-ion-battery" },
      { label: "E-Waste", path: "/services/recycling-ewaste" },
      { label: "Registered Vehicles Scraping Faculty Plant", path: "/services/recycling-vehicles-scrapping" },
      { label: "Solar Panel", path: "/services/recycling-solar-panel" },
      { label: "Plastic", path: "/services/recycling-plastic" },
    ],
  },
  {
    name: "EPR Credits",
    subcategories: [
      { label: "EPR Plastic", path: "/services/epr-plastic" },
      { label: "EPR Electronic", path: "/services/epr-electronic" },
      { label: "EPR Tyre", path: "/services/epr-tyre" },
      { label: "EPR ELV", path: "/services/epr-elv" },
      { label: "EPR Used Oil", path: "/services/epr-used-oil" },
      { label: "EPR Metals", path: "/services/epr-metals" },
      { label: "EPR Battery", path: "/services/epr-battery" },
      { label: "EPR Lithium", path: "/services/epr-lithium" },
    ],
  },
  {
    name: "SOP, KPI & Checklist",
    subcategories: [
      { label: "SOPs", path: "/services/sops" },
      { label: "KPIs", path: "/services/kpis" },
      { label: "Checklists", path: "/services/checklists" },
    ],
  },
  {
    name: "Buy & Sell Scrap",
    subcategories: [
      { label: "Buy E-Waste", path: "/services/buy-ewaste" },
      { label: "Sell Batteries", path: "/services/sell-batteries" },
      { label: "Buy & Sell Metals", path: "/services/buy-sell-metals" },
    ],
  },
  
];
