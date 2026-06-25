import Seo from "@/components/Seo";
import HeroSlider from "@/components/HeroSlider";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import TradingPlatform from "@/components/TradingPlatform";
import SustainabilityTree from "@/components/SustainabilityTree";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientsSlider from "@/components/ClientsSlider";
import EWasteTypes from "@/components/EWasteTypes";
import ShowcaseGallery from "@/components/ShowcaseGallery";
import Gallery from "@/components/Gallery";
import ContactCTA from "@/components/ContactCTA";

const Index = () => {
  return (
    <>
    <Seo
        title="EPR Nexuss | Experts in Recycling Plant Setup, Compliance & Operations Intelligence"
        description="India's trusted partner for Extended Producer Responsibility (EPR) compliance, EPR credit trading, plastic, battery, solar panel, and e-waste recycling services."
        keywords={["EPR", "EPR Credit Trading", "Waste Management", "CPCB Compliance", "E-Waste Recycling", "Plastic EPR","EPR Credit Trading",
    "EPR Compliance India",
    "Waste Management Solutions",
    "CPCB EPR Registration",
    "Plastic EPR",
    "Battery EPR",
    "Solar Panel Recycling",
    "E-Waste Recycling",
    "Tyre EPR",
    "ELV Scrapping",
    "How to get EPR Certificate",
    "EPR Credit Trading Platform",
    "EPR Compliance Services",
    "EPR Consultancy",
    "EPR Auditing",
    "EPR Reporting",
    "EPR Training",
    "EPR Software Solutions",
    "EPR for Manufacturers",
    "EPR for Importers",
    "EPR for Retailers",
    "EPR for E-Commerce",
    "EPR for Plastic Packaging",
    "EPR for Batteries",
    "EPR for Solar Panels",]}
        url="https://eprnexuss.com/"
        type="website"
      />
      <HeroSlider />
      <ServicesGrid />
      <ProcessSection />
      <TradingPlatform />
      <SustainabilityTree />
      <WhyChooseUs />
      <ClientsSlider />
      <EWasteTypes />
      <ShowcaseGallery />
      <Gallery />
      <ContactCTA />
    </>
  );
}

export default Index;
