import React from 'react'
import HeroSection from "../../../components/HeroSection"
import ProblemSection from "../../../components/ProblemSection"
import StatisticsSection from '../../../components/StatisticsSection'
import VisibilityGraphSection from '../../../components/VisibilitySectionGraph'
import ComparisonSection from '../../../components/ComparisonSection'
import BenefitsSection from '../../../components/BenefitsSection'
import CTASection from '@/components/CTASection'
import StickyContactForm from '@/components/StickyContactForm'
import StrategicApproach from '@/components/StrategicApproach'
import Seo from "@/components/Seo";

const BusinessGrowthAndLeadGeneration= () => {
  return (
  <>
  <Seo
  title="Business Growth & Lead Generation Services | Increase Visibility, Leads & Revenue"
  description="Discover how increased business visibility drives qualified leads, stronger brand recognition, higher trust, and sustainable revenue growth. Learn proven strategies to attract customers and outperform competitors."
  keywords={[
  "Business Growth",
  "Lead Generation",
  "Business Visibility",
  "Brand Awareness",
  "Revenue Growth",
  "Customer Acquisition",

  // Question-based keywords
  "Why am I not getting leads?",
  "Why is my business not growing?",
  "How to generate more leads?",
  "How to increase business visibility?",
  "How to attract more customers?",
  "Why are competitors getting more customers?",
  "How to improve brand recognition?",
  "How to grow a small business?",
  "How to increase sales revenue?",
  "Why is my pipeline dry?",
  "How to get inbound leads?",
  "How to generate B2B leads?",
  "Why is my business losing customers?",
  "How to outperform competitors?",
  "How to build trust with customers?"
]}
  url="https://eprnexuss.com/services/business-growth"
  type="article"
/>
  <HeroSection />

  <div className="container mx-auto px-4">
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

      {/* Main Content */}
      <div>
        <ProblemSection />
        <StatisticsSection />
        <VisibilityGraphSection />
      </div>

      {/* Sidebar */}
      <aside className="hidden lg:block sticky top-28 self-start">
        <StickyContactForm />
      </aside>

    </div>
  </div>

  {/* Full Width Sections */}
  <ComparisonSection />
  <BenefitsSection />
  <StrategicApproach />
</>
  )
}

export default BusinessGrowthAndLeadGeneration