import { useState, useEffect, useRef } from "react";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Target, Users, Globe, ArrowRight, ShieldCheck, 
  FileText, BarChart3, Linkedin, Instagram, Facebook, 
  UserCheck, ChevronLeft, ChevronRight, CheckCircle2,
  Building2, Layers, Cpu, ClipboardCheck, Eye, Trophy,
  Recycle, Landmark, Settings2, BarChart4, TrendingUp
} from "lucide-react";

// Prebuilt Component Imports
import ProcessSection from "../components/ProcessSection";
import ClientsSlider from "../components/ClientsSlider";

import gallery5 from "@/assets/gallery-5.jpg";
import recyclingProcess from "@/assets/recycling-process.jpg";
import aina from "@/assets/aina.jpg";
import rajendra from "@/assets/rajendra.jpeg";
import swati from "@/assets/swati.jpeg";
import tabish from "@/assets/tabish.jpg";
import aman from "@/assets/aman.jpeg";
import dilshad from "@/assets/dilshad.jpeg";
import sakib from "@/assets/sakib.jpg";
import ceoPhoto from "@/assets/gallery-5.jpg"; 
import mdPhoto from "@/assets/gallery-5.jpg";
import affan from "@/assets/affan.jpg"
import user from "@/assets/user.png"

const stats = [
  { value: "500+", label: "Manufacturers & Importers Served" },
  { value: "10K+", label: "EPR Credits Processed & Traded" },
  { value: "50+", label: "Certified Recycling Partners" },
  { value: "6+", label: "Regulated Waste Categories Supported" },
];

const values = [
  { icon: ShieldCheck, title: "CPCB Authorizations", desc: "Securing completely mandatory Central Pollution Control Board clearances for plastics, e-waste, batteries, and tires." },
  { icon: FileText, title: "End-to-End Returns Filings", desc: "Managing comprehensive documentation, quarterly and annual filings, and tracking credit quotas securely to avoid heavy regulatory penalties." },
  { icon: Users, title: "Verified Recycling Network", desc: "Direct structural alignments with verified environmental recyclers and Producer Responsibility Organizations (PROs) nationwide." },
  { icon: BarChart3, title: "EPR Credit Trading", desc: "Transparent exchange frameworks helping brand owners source authentic compliance allocation units efficiently." },
  { icon: Target, title: "Plant Setup Consultation", desc: "Providing industrial architectural mapping, framework advisory, and full target-tracking layouts for recycling plant operators." },
  { icon: Globe, title: "Circular Economy Architecture", desc: "Accelerating waste asset visibility on the official national database while reducing ecological footprints across Indian markets." },
];

const complianceMetrics = [
  { metric: "Plastic Packaging Allocation", timeline: "15 to 45 Days Delivery", weight: "92%", color: "bg-brandGreen" },
  { metric: "E-Waste / Electronics Streams", timeline: "Standard Portal Audit", weight: "85%", color: "bg-primary" },
  { metric: "Battery & Hazardous Cell Logistics", timeline: "Verified Network Matching", weight: "78%", color: "bg-secondary" },
  { metric: "Industrial Tire Waste Disposal", timeline: "CPCB Certification Clearances", weight: "64%", color: "bg-orange-500" },
];

const corePillars = [
  {
    icon: Building2,
    title: "Institutional Heritage",
    subtitle: "Built upon strict policy execution",
    desc: "EPR Nexuss was established to simplify the complex terrain of environmental compliance. We serve as a trusted structural mechanism between corporate enterprises, sovereign regulatory portals, and state-level material processing facilities."
  },
  {
    icon: Layers,
    title: "Sovereign Framework Tracking",
    subtitle: "Real-time updates on CPCB directives",
    desc: "With direct insight into legislative modifications by the Ministry of Environment, Forest and Climate Change (MoEFCC), we transition corporate liabilities into systematic targets, safeguarding your operational standing against shifting legal mandates."
  },
  {
    icon: Cpu,
    title: "Digital-First Credit Auditing",
    subtitle: "Eliminating documentation discrepancies",
    desc: "By combining automated transaction tracking with thorough physical facility validation, we ensure every compliance credit exchanged across our network is structurally bulletproof, fully authenticated, and audit-ready."
  }
];

const executiveTeam = [
  {
    name: "Mohammad Tabish",
    designation: "Chief Executive Officer (CEO)",
    image: tabish,
    bio: "Mohammad shapes the core compliance methodologies at EPR Nexuss, bringing over 15 years of structured environmental policy consultation experience. Under his management, the firm has successfully translated multi-state compliance challenges into seamless digital portal milestones.",
    highlight: "Oversees CPCB Portal Strategy & Enterprise Investor Partnerships.",
    socials: { linkedin: "#", instagram: "#", Facebook: "#" }
  },
  {
    name: "Dilshad Malik",
    designation: "Managing Director (MD)",
    image: dilshad,
    bio: "Dilshad Malik manages ground-level reverse logistics pipelines and handles structural integration with certified recycling facilities nationwide. His operational architecture bridges the gap between raw factory waste collections and authentic certified credit conversions.",
    highlight: "Directs Nationwide Recycler Framework Alignment & Operations Validation.",
    socials: { linkedin: "#", instagram: "#", Facebook: "#" }
  }
];
const carouselTeam = [
  { name: "Aman Tariq", designation: "Digital Marketing Head / Senior Web Developer", image: aman, details: "Drives omni-channel growth strategies, brand visibility, and target lead generation frameworks across our digital ecosystems.", socials: { linkedin: "https://www.linkedin.com/in/aman-tariq-27611227b", instagram: "https://www.instagram.com/aman._tariq/", Facebook: "https://www.facebook.com/shams.aman.35" } },
  { name: "Bhanu", designation: "Sales Head", image: user, details: "Accelerates pipeline acquisition, corporate client onboardings, and custom compliance credit transaction deal structures.", socials: { linkedin: "#", instagram: "#", Facebook: "#" } },
  { name: "Affan Aziz", designation: "Digital Marketing Executive", image: affan, details: "Orchestrates community engagement campaigns, interactive platform narratives, and creative content delivery timelines.", socials: { linkedin: "#", instagram: "#", Facebook: "#" } },
  { name: "Sakib Rajput", designation: "Web Developer", image: sakib, details: "Architects responsive front-end user experiences, dynamic interface frameworks, and secure portal application deployments.", socials: { linkedin: "https://www.linkedin.com/in/sakib-khan-8484462b4?utm_source=share_via&utm_content=profile&utm_medium=member_ios", instagram: "https://www.instagram.com/sakibxrajput", Facebook: "#" } },
  { name: "Rajinder Kumar", designation: "Web Developer", image: rajendra, details: "Engineers database architecture integrations, server-side data logs, and optimizations for platform engine tracking systems.", socials: { linkedin: "https://www.linkedin.com/in/rajinder-se-5b47222b2?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "#", Facebook: "#" } },
  { name: "Swati Maurya", designation: "Web Developer Executive", image: swati, details: "Assists with component styling modules, UI element testing sequences, and interactive layout bug resolutions.", socials: { linkedin: "https://www.linkedin.com/in/swati-maurya-5301653a7?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "#", Facebook: "#" } },
  { name: "Aina Marziya", designation: "Business Development Executive", image: aina, details: "Supports market research tracking initiatives, basic campaign auditing, and search optimization keyword mapping layers.", socials: { linkedin: "#", instagram: "https://www.instagram.com/__alina_siddiqui__?igsh=aDh2ZnVjaTVrMXF1", Facebook: "#" } }
];

const servicesData = [
  {
    id: 1,
    title: "Recycling Setup",
    icon: Recycle,
    color: "border-brandGreen",
    bgColor: "bg-brandGreen/5",
    textColor: "text-brandGreen",
    subPoints: ["Lithium Battery Recycling", "E-Waste Processing", "RVSF (Vehicle Scrapping)", "Solar Panel Recovery", "Plastic Circularity Solutions"],
    metricValue: "94%",
    metricLabel: "Infrastructure Efficiency"
  },
  {
    id: 2,
    title: "EPR Credits Compliance",
    icon: Landmark,
    color: "border-primary",
    bgColor: "bg-primary/5",
    textColor: "text-primary",
    subPoints: ["EPR Plastic Certificates", "Electronic Waste Stream", "Tyre Waste Quotas", "ELV (End of Life Vehicles)", "Used Oil Frameworks", "Metals & Critical Battery Cells"],
    metricValue: "100%",
    metricLabel: "Portal Approval Rate"
  },
  {
    id: 3,
    title: "Plant Operation Intelligence",
    icon: Settings2,
    color: "border-secondary",
    bgColor: "bg-secondary/5",
    textColor: "text-secondary",
    subPoints: ["Setup & Commissioning Documentation", "Operation & Performance Management", "Scale and Growth Tracking Systems"],
    metricValue: "88%",
    metricLabel: "Operational Uptime Boost"
  },
  {
    id: 4,
    title: "Buy & Sell Scrap Assets",
    icon: BarChart4,
    color: "border-orange-500",
    bgColor: "bg-orange-500/5",
    textColor: "text-orange-500",
    subPoints: ["Bulk E-Waste Acquisition", "Certified Battery Sell-Offs", "Trading Secondary Metals Modules"],
    metricValue: "82k Tons",
    metricLabel: "Materials Transacted"
  },
  {
    id: 5,
    title: "Business Growth & Lead Generation",
    icon: TrendingUp,
    color: "border-purple-500",
    bgColor: "bg-purple-500/5",
    textColor: "text-purple-500",
    subPoints: ["Enterprise Pipelines Setup", "B2B Client Sourcing Funnels", "Market Value Maximization Systems"],
    metricValue: "3.5x",
    metricLabel: "Average Client Velocity"
  }
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [activeServiceTab, setActiveServiceTab] = useState(1);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Reference container to detect outer clicks/taps
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = carouselTeam.length - cardsToShow;

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex < 0 ? 0 : maxIndex);
    }
  }, [cardsToShow, maxIndex, currentIndex]);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [maxIndex]);

  // Click Outside Detection Logic
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        carouselContainerRef.current && 
        !carouselContainerRef.current.contains(event.target as Node)
      ) {
        startAutoPlay();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [maxIndex]);

  const handlePrev = () => {
    stopAutoPlay();
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    startAutoPlay();
  };

  const handleNext = () => {
    stopAutoPlay();
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    startAutoPlay();
  };

  const gapValue = 24;

  return (
    <>
      <Seo
        title="About Us - EPR Nexuss"
        description="EPR Nexuss (Indian Nexus) is a leading regulatory compliance consultancy assisting businesses with Extended Producer Responsibility (EPR) certification, CPCB approvals, and waste management setups."
        keywords={["About EPR Nexuss", "EPR Company India", "CPCB Compliance Partner"]}
        url="https://eprnexuss.com/about"
        type="website"
      />

      {/* SECTION 1: WHAT WE DELIVER (Hero Top Section) */}
      <section className="pt-32 pb-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="text-brandGreen font-display font-bold text-sm uppercase tracking-widest bg-brandGreen/10 px-4 py-1.5 rounded-full border border-brandGreen/20">
                What We Deliver
              </span>
            </motion.div>
            <motion.h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mt-4 mb-6 tracking-tight leading-none">
              Protecting Today, <br/> <span className="text-brandGreen">Preserving Tomorrow</span>
            </motion.h1>
            <motion.p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed max-w-3xl">
              EPR Nexuss operates as India's premier multi-stream compliance enterprise. We design systematic, traceable asset loops that turn regulatory liabilities into measurable corporate achievements, delivering verified CPCB authorization credits at guaranteed speeds.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Live Operational Metrics Grid Linked directly underneath Deliverables */}
      <section className="py-12 bg-card border-b border-border relative z-20 shadow-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="p-4 text-center border-r last:border-0 border-border/60 max-lg:border-b max-lg:border-r-0 max-lg:pb-6 last:max-lg:border-b-0">
                <div className="font-display text-3xl md:text-5xl font-extrabold text-secondary tracking-tight">{stat.value}</div>
                <div className="text-muted-foreground text-xs md:text-sm font-medium mt-2 max-w-xs mx-auto">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE (Corporate Genesis Section) */}
      <section id="company" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-brandGreen to-secondary rounded-2xl opacity-20 blur-xl" />
              <img src={gallery5} alt="CPCB Auditing Framework" className="relative rounded-2xl shadow-xl w-full object-cover max-h-[500px]" loading="lazy" />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-secondary font-display font-bold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-6">
                Navigating Environmental Regulations with Absolute Professionalism
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Founded with a deliberate vision to transform unstructured carbon footprint cycles into clear mathematical corporate targets, EPR Nexuss assists global manufacturers, multi-state importers, and local brand owners in acquiring necessary authorizations. We serve as a trusted institutional bridge between industries and state compliance portals.
              </p>
              <div className="space-y-3 mt-4">
                {[
                  "Complete integration with central portal directories.",
                  "Systematic structural auditing across processing lines.",
                  "Transparent tracking of environmental allocation credits."
                ].map((item, id) => (
                  <div key={id} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 size={18} className="text-brandGreen shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE DO (Core Pillars Workflow Section) */}
      <section className="py-24 bg-muted/30 border-t border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brandGreen font-display font-bold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mt-2">
              Transforming National Directives into <span className="text-secondary">Seamless Workflows</span>
            </h2>
            <p className="text-muted-foreground text-base mt-4">
              We empower national manufacturers and enterprise brands to build long-term operational resilience through precise processing networks and complete regulatory safety.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border flex flex-col justify-between hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brandGreen/10 flex items-center justify-center mb-6 text-brandGreen group-hover:scale-110 transition-transform">
                    <pillar.icon size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{pillar.title}</h3>
                  <p className="text-xs font-semibold text-secondary font-display uppercase tracking-wider mt-1 mb-4">{pillar.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US (Analytics & Solutions Grid) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brandGreen font-display font-bold text-xs uppercase tracking-widest bg-brandGreen/10 px-3 py-1 rounded-full border border-brandGreen/20">
                Why Choose Us
              </span>
              <h3 className="font-display text-2xl md:text-4xl font-extrabold text-foreground tracking-tight">
                CPCB Target Allocation & Portal Submission Timelines
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our strategic framework delivers maximum verification clarity. We monitor processing metrics across various waste categories, maintaining standard processing speeds and highly secure authorization logs.
              </p>
            </div>

            <div className="lg:col-span-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <h4 className="font-display font-bold text-foreground text-base mb-6 flex items-center gap-2">
                <ClipboardCheck size={18} className="text-secondary" /> Streamlined Audit Distribution
              </h4>
              <div className="space-y-5">
                {complianceMetrics.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-foreground">
                      <span className="flex items-center gap-2"><span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />{item.metric}</span>
                      <span className="text-muted-foreground font-mono">{item.timeline}</span>
                    </div>
                    <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden border border-border/50">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: item.weight }} viewport={{ once: true }} transition={{ duration: 1 }} className={`h-full ${item.color} rounded-full`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="p-6 md:p-8 rounded-2xl bg-card border border-border flex flex-col justify-between hover:border-secondary/40 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/5 flex items-center justify-center mb-6"><v.icon className="w-6 h-6 text-secondary" /></div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: MISSION, VISION, GOAL 3-CARD GRID */}
      <section className="py-20 bg-muted/20 border-t border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Our Mission Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brandGreen/10 text-brandGreen flex items-center justify-center mb-6">
                  <Target size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To institutionalize transparency across the waste recycling footprint in India. We aim to protect corporate entities by removing tracking errors, securing audit trails, and executing verified structural recycling deployments.
                </p>
              </div>
            </motion.div>

            {/* Our Vision Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brandGreen/10 text-brandGreen flex items-center justify-center mb-6">
                  <Eye size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To become the ultimate central command platform for extended producer responsibility. We seek to foster an optimized circular economy ecosystem where zero documentation friction exists between enterprise networks and regulatory directories.
                </p>
              </div>
            </motion.div>

            {/* Our Goal Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brandGreen/10 text-brandGreen flex items-center justify-center mb-6">
                  <Trophy size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Goal</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To process millions of absolute metric quotas sustainably while optimizing operations for over 1,000 corporate manufacturers across sovereign multi-waste verticals over the upcoming operating cycles.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 6: PROCESS SECTION (Imported Component Block) */}
      <ProcessSection />

      {/* SECTION 7: OUR CLIENTS SECTION (Imported Slider Block) */}
      <div className="py-12 bg-background border-b border-border">
        <ClientsSlider />
      </div>

      {/* SECTION 8: OUR SERVICES TRACKER (Animated Dashboard UI Layout) */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brandGreen font-display font-bold text-xs uppercase tracking-widest bg-brandGreen/10 px-3 py-1 rounded-full border border-brandGreen/20">
              Service Matrix
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mt-3">
              Comprehensive Service Capabilities
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Explore our structured pipelines and technical microarchitectures designed for comprehensive multi-stream regulatory compliance.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Nav Tabs Column */}
            <div className="lg:col-span-4 space-y-3">
              {servicesData.map((service) => {
                const IconComponent = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveServiceTab(service.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-4 ${
                      activeServiceTab === service.id
                        ? `${service.color} ${service.bgColor} shadow-sm font-bold`
                        : "border-border/60 bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${activeServiceTab === service.id ? "bg-white dark:bg-slate-900" : "bg-muted"}`}>
                      <IconComponent size={20} className={activeServiceTab === service.id ? service.textColor : "text-muted-foreground"} />
                    </div>
                    <span className="text-sm font-display tracking-tight">{service.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Interactive Dashboard View Area */}
            <div className="lg:col-span-8 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm min-h-[400px] flex flex-col justify-between">
              {servicesData.filter(s => s.id === activeServiceTab).map((currService) => {
                const CurrentIcon = currService.icon;
                return (
                  <motion.div 
                    key={currService.id}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-between gap-8"
                  >
                    <div>
                      <div className="flex items-center gap-3 border-b border-border/60 pb-4 mb-6">
                        <div className={`p-2.5 rounded-xl ${currService.bgColor} ${currService.textColor}`}>
                          <CurrentIcon size={24} />
                        </div>
                        <h3 className="font-display text-xl font-extrabold text-foreground">{currService.title}</h3>
                      </div>

                      {/* Render Dynamic Subpoints as clean modular elements */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {currService.subPoints.map((sub, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/40 border border-border/40 text-xs text-foreground font-medium">
                            <CheckCircle2 size={14} className={`${currService.textColor} shrink-0`} />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Integrated Graph/Metric Representation Box for UI enhancement */}
                    <div className="mt-6 pt-6 border-t border-border/60 bg-muted/20 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Performance Target Alpha</span>
                        <div className="font-display font-extrabold text-2xl text-foreground flex items-center gap-2">
                          {currService.metricValue}
                          <span className="text-xs font-normal text-muted-foreground font-sans">({currService.metricLabel})</span>
                        </div>
                      </div>
                      <div className="w-full sm:w-48 h-3 bg-muted rounded-full overflow-hidden relative border border-border/60">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: currService.id === 4 ? "75%" : currService.id === 5 ? "85%" : currService.metricValue }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className={`h-full ${currService.textColor === "text-foreground" ? "bg-secondary" : currService.color.replace('border-', 'bg-')} rounded-full`}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Database Grid Tracker Section */}
      <section className="py-20 bg-muted/10 border-t border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="overflow-x-auto rounded-2xl border border-border shadow-md">
            <table className="w-full text-left border-collapse bg-card min-w-[600px]">
              <thead>
                <tr className="bg-primary text-primary-foreground font-display text-xs uppercase"><th className="p-4 font-bold">Industrial Layer</th><th className="p-4 font-bold">CPCB Authorization Stream</th><th className="p-4 font-bold">Status Verification</th></tr>
              </thead>
              <tbody className="divide-y divide-border text-xs md:text-sm text-foreground">
                <tr className="hover:bg-muted/40 transition-colors"><td className="p-4 font-semibold">Manufacturers</td><td className="p-4">Raw Polymer Aggregation</td><td className="p-4"><span className="px-2 py-0.5 rounded bg-brandGreen/10 text-brandGreen text-xs">Operational</span></td></tr>
                <tr className="hover:bg-muted/40 transition-colors"><td className="p-4 font-semibold">Importers</td><td className="p-4">Customs Clearance Sync</td><td className="p-4"><span className="px-2 py-0.5 rounded bg-brandGreen/10 text-brandGreen text-xs">Operational</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Integrated Material Processing Flow */}
      <section id="waste" className="py-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50/70 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Integrated Material Processing & <span className="text-brandGreen">Recycling</span> Flow
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">From localized aggregation up to automated factory outputs, we track environmental processing data vectors.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-card bg-card">
              <img src={recyclingProcess} alt="Plastic Recycling Flow" className="w-full h-auto object-cover max-h-[460px]" />
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { step: "01", title: "Target Collection", desc: "Regulated materials safely aggregated at authorized hub centers across regions." },
              { step: "02", title: "Secure Transport", desc: "Materials securely logged and shipped directly to certified processing centers." },
              { step: "03", title: "Sorting & Analysis", desc: "Complex polymers are physically separated, washed, and structurally indexed." },
              { step: "04", title: "Value Re-Insertion", desc: "Processed recyclates are re-integrated cleanly into alternative manufacturing lines." },
            ].map((item, i) => (
              <div key={item.step} className="p-5 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between">
                <div><h3 className="font-display font-bold text-foreground text-sm mb-1">{item.title}</h3><p className="text-xs text-muted-foreground">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership & Corrected Multi-Card Team Carousel Section */}
      <section className="py-24 bg-muted/40 border-t border-border overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <span className="text-brandGreen font-display font-bold text-sm uppercase tracking-widest bg-brandGreen/10 px-4 py-1.5 rounded-full border border-brandGreen/20 inline-flex items-center gap-2">
                <UserCheck size={14} /> Organization Leadership
              </span>
            </motion.div>
            <h2 className="font-display text-4xl font-extrabold text-foreground mt-4 tracking-tight">
              Our Team
            </h2>
            <p className="text-muted-foreground mt-2 text-base max-w-xl mx-auto">
              Meet our directors and execution managers driving compliance reliability standards forward.
            </p>
          </div>

          {/* Primary Executives Grid Setup */}
          <div className="space-y-12 max-w-5xl mx-auto mb-24">
            {executiveTeam.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row min-h-[300px]"
              >
                <div className="md:w-2/5 relative bg-muted max-md:h-[260px]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover absolute inset-0" loading="lazy" />
                </div>
                <div className="p-8 md:p-10 md:w-3/5 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="border-b border-border/60 pb-3 mb-3">
                      <h3 className="font-display text-2xl font-extrabold text-foreground">{member.name}</h3>
                      <p className="text-secondary font-medium text-xs uppercase tracking-wide font-display">{member.designation}</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </div>
                  <div className="pt-3 border-t border-border/40 flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-mono text-slate-400 font-bold uppercase">Connect:</span>
                    <div className="flex items-center gap-2.5">
                      <a href={member.socials.linkedin} className="w-8 h-8 rounded-lg bg-muted text-slate-500 hover:text-white hover:bg-[#0077B5] flex items-center justify-center transition-colors border border-border"><Linkedin size={14} /></a>
                      <a href={member.socials.instagram} className="w-8 h-8 rounded-lg bg-muted text-slate-500 hover:text-white hover:bg-[#E1306C] flex items-center justify-center transition-colors border border-border"><Instagram size={14} /></a>
                      <a href={member.socials.Facebook} className="w-8 h-8 rounded-lg bg-muted text-slate-500 hover:text-white hover:bg-black flex items-center justify-center transition-colors border border-border"><Facebook size={14} /></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sub-Team Multi-Card Carousel Section Block */}
          <div ref={carouselContainerRef} className="max-w-5xl mx-auto mt-16 relative px-4 sm:px-12">
            <div className="mb-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-1">The Execution & Innovation Team</h3>
              <p className="text-xs text-muted-foreground">Connecting platform engineering with strategic market visibility.</p>
            </div>

            {/* Carousel Viewport Wrapper - Added Mouse Events to freeze motion */}
            <div 
              className="w-full overflow-hidden py-4 relative"
              onMouseEnter={stopAutoPlay}
              onMouseLeave={startAutoPlay}
            >
              <motion.div 
                className="flex"
                style={{ gap: `${gapValue}px` }}
                animate={{ 
                  x: cardsToShow === 1 
                    ? `calc(-${currentIndex * 100}% - ${currentIndex * gapValue}px)`
                    : `calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * (gapValue * (cardsToShow - 1) / cardsToShow)}px)` 
                }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
              >
                {carouselTeam.map((member, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className="shrink-0 bg-card rounded-2xl border border-border p-6 flex flex-col items-center text-center justify-between shadow-sm hover:shadow-md transition-all duration-300 h-full min-h-[360px]"
                    style={{
                      width: cardsToShow === 1 
                        ? "100%" 
                        : cardsToShow === 2 
                        ? `calc(50% - ${gapValue / 2}px)` 
                        : `calc(33.333% - ${(gapValue * 2) / 3}px)`,
                    }}
                  >
                    <div className="w-full flex flex-col items-center flex-grow">
                      {/* Circle Profile frame */}
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-muted mb-4 border-2 border-border shadow-inner shrink-0">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <h4 className="font-display font-extrabold text-base text-foreground tracking-tight">{member.name}</h4>
                      <p className="text-xs text-secondary font-medium font-display uppercase tracking-wider mt-0.5 mb-3">{member.designation}</p>
                      
                      {/* Dynamic structural text layout - line clamping cleared */}
                      <p className="text-xs text-muted-foreground leading-relaxed px-1 mt-1 mb-4 overflow-visible">
                        {member.details}
                      </p>
                    </div>

                    {/* Social Media Link Icon Strip */}
                    <div className="w-full pt-4 border-t border-border/60 flex items-center justify-center gap-4 mt-auto shrink-0">
                      <a href={member.socials.Facebook} className="text-slate-400 hover:text-black transition-colors" aria-label="Facebook"><Facebook size={15} /></a>
                      <a href={member.socials.instagram} className="text-slate-400 hover:text-[#E1306C] transition-colors" aria-label="Instagram"><Instagram size={15} /></a>
                      <a href={member.socials.linkedin} className="text-slate-400 hover:text-[#0077B5] transition-colors" aria-label="LinkedIn"><Linkedin size={15} /></a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Positioned Left Swipe Control Trigger */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-[55%] -translate-y-1/2 -translate-x-1 sm:-translate-x-4 w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-muted active:scale-95 transition-all shadow-md z-30"
              aria-label="Swipe Slide Left"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Positioned Right Swipe Control Trigger */}
            <button 
              onClick={handleNext}
              className="absolute right-0 top-[55%] -translate-y-1/2 translate-x-1 sm:translate-x-4 w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-muted active:scale-95 transition-all shadow-md z-30"
              aria-label="Swipe Slide Right"
            >
              <ChevronRight size={20} />
            </button>

            {/* Navigation Dots Container */}
            <div className="flex justify-center gap-1.5 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    stopAutoPlay();
                    setCurrentIndex(idx);
                    startAutoPlay();
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-6 bg-secondary" : "w-1.5 bg-border"}`}
                  aria-label={`Go to slide group ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="py-16 bg-background border-t border-border text-center">
        <div className="container mx-auto px-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-display font-bold text-sm rounded-xl hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl group"
          >
            Analyze Your Compliance Requirements
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;