import React from "react";

// per-post components (wrappers that use PostWrapper)
import EWasteBuyingSelling from "@/components/blogs/recycling-setups/e-waste/e-waste-buying-selling";
import EWasteApprovals from "@/components/blogs/recycling-setups/e-waste/e-waste-approvals";
import EWasteMarketAnalysis from "@/components/blogs/recycling-setups/e-waste/e-waste-market-analysis";
import EWasteMachinery from "@/components/blogs/recycling-setups/e-waste/e-waste-machinery";
import EWasteDpr from "@/components/blogs/recycling-setups/e-waste/e-waste-dpr";

import TyreApprovals from "@/components/blogs/recycling-setups/tyre/tyre-approvals";
import TyreBuySelling from "@/components/blogs/recycling-setups/tyre/tyre-buy-selling";
import TyreMachinery from "@/components/blogs/recycling-setups/tyre/tyre-machinery";
import TyreMarketAnalysis from "@/components/blogs/recycling-setups/tyre/tyre-market-analysis";
import TyreDpr from "@/components/blogs/recycling-setups/tyre/tyre-dpr";

import PlasticApprovals from "@/components/blogs/recycling-setups/plastic/plastic-approvals";
import PlasticBuySelling from "@/components/blogs/recycling-setups/plastic/plastic-buy-selling";
import PlasticMachinery from "@/components/blogs/recycling-setups/plastic/plastic-machinery";
import PlasticMarketAnalysis from "@/components/blogs/recycling-setups/plastic/plastic-market-analysis";
import PlasticRecycling from "@/components/blogs/recycling-setups/plastic/plastic-recycling";

import LithiumBatteryApprovals from "@/components/blogs/recycling-setups/battery/lithium-battery-approvals";
import LithiumBatteryBuySelling from "@/components/blogs/recycling-setups/battery/lithium-battery-buy-selling";
import LithiumBatteryDpr from "@/components/blogs/recycling-setups/battery/lithium-battery-dpr";
import LithiumBatteryMachinery from "@/components/blogs/recycling-setups/battery/lithium-battery-machinery";
import LithiumBatteryMarketAnalysis from "@/components/blogs/recycling-setups/battery/lithium-battery-market-analysis";

import RvsfApprovals from "@/components/blogs/recycling-setups/rvsf/rvsf-approvals";
import RvsfBuySelling from "@/components/blogs/recycling-setups/rvsf/rvsf-buy-selling";
import RvsfMachinery from "@/components/blogs/recycling-setups/rvsf/rvsf-machinery";
import RvsfMarketAnalysis from "@/components/blogs/recycling-setups/rvsf/rvsf-market-analysis";
import RvsfDpr from "@/components/blogs/recycling-setups/rvsf/rvsf-dpr";

import SolarPanelRecyclingApprovals from "@/components/blogs/recycling-setups/solar-panel/solar-panel-recycling-approvals";
import SolarPanelBuyingSelling from "@/components/blogs/recycling-setups/solar-panel/solar-panel-buying-selling-scrap";
import SolarPanelDpr from "@/components/blogs/recycling-setups/solar-panel/solar-panel-detailed-project-report";
import SolarPanelMarketAnalysis from "@/components/blogs/recycling-setups/solar-panel/solar-panel-market-analysis-target-segments";
import SolarPanelMachinery from "@/components/blogs/recycling-setups/solar-panel/solar-panel-machinery-help-clients";

import CommissioningDocumentationChecklist from "@/components/blogs/plant-operation-intelligence/setup-commissioning-documentation/role-of-setup-documentation-in-plant-operation-intelligence";
import CommonDocumentationGaps from "@/components/blogs/plant-operation-intelligence/setup-commissioning-documentation/common-documentation-gaps";
import CommissioningRecords from "@/components/blogs/plant-operation-intelligence/setup-commissioning-documentation/commissioning-records";
import PlantStartupDocumentation from "@/components/blogs/plant-operation-intelligence/setup-commissioning-documentation/plant-startup-documentation";
import CommissioningChecklistsReadiness from "@/components/blogs/plant-operation-intelligence/setup-commissioning-documentation/commissioning-checklists-readiness";
import PlantSetupHandoverBestPractices from "@/components/blogs/plant-operation-intelligence/setup-commissioning-documentation/plant-setup-handover-best-practices";
import KPIsInPlantPerformance from "@/components/blogs/plant-operation-intelligence/operation-performance-management/kpis-in-plant-performance-management";
import RealTimeMonitoringReduceDelays from "@/components/blogs/plant-operation-intelligence/operation-performance-management/real-time-monitoring-reduce-delays";
import PerformanceManagementStrategies from "@/components/blogs/plant-operation-intelligence/operation-performance-management/performance-management-strategies";
import UsingDataToImprovePlantEfficiency from "@/components/blogs/plant-operation-intelligence/operation-performance-management/using-data-to-improve-plant-efficiency";
import PlantOperationIntelligence from "@/components/blogs/plant-operation-intelligence/operation-performance-management/plant-operation-intelligence";
import PlantOperationIntelligenceForScale from "@/components/blogs/plant-operation-intelligence/scale-and-growth-systems/plant-operation-intelligence-for-scalable-growth";
import PlantEfficiencyDocumentationSystems from "@/components/blogs/plant-operation-intelligence/scale-and-growth-systems/plant-efficiency-documentation-systems";
import DigitalInfrastructureBlog from "@/components/blogs/plant-operation-intelligence/scale-and-growth-systems/digital-infrastructure-for-plant-expansion";
import StandardizeOperationsForPlantScaling from "@/components/blogs/plant-operation-intelligence/scale-and-growth-systems/standardize-operations-for-plant-scaling";
import MultiPlantGrowthPlaybook from "@/components/blogs/plant-operation-intelligence/scale-and-growth-systems/multi-plant-growth-playbook";

// epr-credits and buy-sell-scrap components
import BatteryEprAnalysisBlog from "@/components/blogs/epr-credits/Battery/BatteryEprAnalysisBlog";
import BatteryEprApprovalsBlog from "@/components/blogs/epr-credits/Battery/BatteryEprApprovalsBlog";
import BatteryEprDprBlog from "@/components/blogs/epr-credits/Battery/BatteryEprDprBlog";
import BatteryEprMachineryBlog from "@/components/blogs/epr-credits/Battery/BatteryEprMachineryBlog";
import BatteryEprTradingBlog from "@/components/blogs/epr-credits/Battery/BatteryEprTradingBlog";
import ElectricEprAnalysisBlog from "@/components/blogs/epr-credits/electric/ElectricEprAnalysisBlog";
import ElectricEprApprovalsBlog from "@/components/blogs/epr-credits/electric/ElectricEprApprovalsBlog";
import ElectricEprDprBlog from "@/components/blogs/epr-credits/electric/ElectricEprDprBlog";
import ElectricEprMachinaryBlog from "@/components/blogs/epr-credits/electric/ElectricEprMachinaryBlog";
import ElectricEprTradingBlog from "@/components/blogs/epr-credits/electric/ElectricEprTradingBlog";
import ElvEprAnalysisBlog from "@/components/blogs/epr-credits/elv/ElvEprAnalysisBlog";
import ElvEprApprovalsBlog from "@/components/blogs/epr-credits/elv/ElvEprApprovalsBlog";
import ElvEprDprBlog from "@/components/blogs/epr-credits/elv/ElvEprDprBlog";
import ElvEprMachineryBlog from "@/components/blogs/epr-credits/elv/ElvEprMachineryBlog";
import ElvEprTradingBlog from "@/components/blogs/epr-credits/elv/ElvEprTradingBlog";
import LithiumEprAnalysisBlog from "@/components/blogs/epr-credits/lithium/LithiumEprAnalysisBlog";
import LithiumEprApprovalsBlog from "@/components/blogs/epr-credits/lithium/LithiumEprApprovalsBlog";
import LithiumEprDprBlog from "@/components/blogs/epr-credits/lithium/LithiumEprDprBlog";
import LithiumEprMachineryBlog from "@/components/blogs/epr-credits/lithium/LithiumEprMachineryBlog";
import LithiumEprTradingBlog from "@/components/blogs/epr-credits/lithium/LithiumEprTradingBlog";
import MetalsEprAnalysisBlog from "@/components/blogs/epr-credits/metals/MetalsEprAnalysisBlog";
import MetalsEprApprovalsBlog from "@/components/blogs/epr-credits/metals/MetalsEprApprovalsBlog";
import MetalsEprDprBlog from "@/components/blogs/epr-credits/metals/MetalsEprDprBlog";
import MetalsEprMachineryBlog from "@/components/blogs/epr-credits/metals/MetalsEprMachineryBlog";
import MetalsEprTradingBlog from "@/components/blogs/epr-credits/metals/MetalsEprTradingBlog";
import PlasticEprAnalysisBlog from "@/components/blogs/epr-credits/plastic/PlasticEprAnalysisBlog";
import PlasticEprApprovalsBlog from "@/components/blogs/epr-credits/plastic/PlasticEprApprovalsBlog";
import PlasticEprDprBlog from "@/components/blogs/epr-credits/plastic/PlasticEprDprBlog";
import PlasticEprMachineryBlog from "@/components/blogs/epr-credits/plastic/PlasticEprMachineryBlog";
import PlasticEprTradingBlog from "@/components/blogs/epr-credits/plastic/PlasticEprTradingBlog";
import TyreEprAnalysisBlog from "@/components/blogs/epr-credits/tyre/TyreEprAnalysisBlog";
import TyreEprApprovalsBlog from "@/components/blogs/epr-credits/tyre/TyreEprApprovalsBlog";
import TyreEprDprBlog from "@/components/blogs/epr-credits/tyre/TyreEprDprBlog";
import TyreEprMachineryBlog from "@/components/blogs/epr-credits/tyre/TyreEprMachineryBlog";
import TyreEprTradingBlog from "@/components/blogs/epr-credits/tyre/TyreEprTradingBlog";
import UsedOilEprAnalysisBlog from "@/components/blogs/epr-credits/used-oil/UsedOilEprAnalysisBlog";
import UsedOilEprApprovals from "@/components/blogs/epr-credits/used-oil/UsedOilEprApprovals";
import UsedOilEprDprBlog from "@/components/blogs/epr-credits/used-oil/UsedOilEprDprBlog";
import UsedOilEprMachineryBlog from "@/components/blogs/epr-credits/used-oil/UsedOilEprMachineryBlog";
import UsedOilEprTradingBlog from "@/components/blogs/epr-credits/used-oil/UsedOilEprTradingBlog";
import BuyEwasteAnalysisBlog from "@/components/blogs/buy-sell-scrap/buy-e-waste/BuyEwasteAnalysisBlog";
import BuyEwasteApprovalsBlog from "@/components/blogs/buy-sell-scrap/buy-e-waste/BuyEwasteApprovalsBlog";
import BuyEwasteDprBlog from "@/components/blogs/buy-sell-scrap/buy-e-waste/BuyEwasteDprBlog";
import BuyEwasteMachineryBlog from "@/components/blogs/buy-sell-scrap/buy-e-waste/BuyEwasteMachineryBlog";
import BuyEwasteTradingBlog from "@/components/blogs/buy-sell-scrap/buy-e-waste/BuyEwasteTradingBlog";
import SellBatteriesAnalysisBlog from "@/components/blogs/buy-sell-scrap/sell batteries/SellBatteriesAnalysisBlog";
import SellBatteriesApprovalsBlog from "@/components/blogs/buy-sell-scrap/sell batteries/SellBatteriesApprovalsBlog";
import SellBatteriesDprBlog from "@/components/blogs/buy-sell-scrap/sell batteries/SellBatteriesDprBlog";
import SellBatteriesMachineryBlog from "@/components/blogs/buy-sell-scrap/sell batteries/SellBatteriesMachineryBlog";
import SellBatteriesTradingBlog from "@/components/blogs/buy-sell-scrap/sell batteries/SellBatteriesTradingBlog";
import BuyMetalsAnalysisBlog from "@/components/blogs/buy-sell-scrap/buy-sell-metals/BuyMetalsAnalysisBlog";
import BuyMetalsApprovalsBlog from "@/components/blogs/buy-sell-scrap/buy-sell-metals/BuyMetalsApprovalsBlog";
import BuyMetalsDprBlog from "@/components/blogs/buy-sell-scrap/buy-sell-metals/BuyMetalsDprBlog";
import BuyMetalsMachineryBlog from "@/components/blogs/buy-sell-scrap/buy-sell-metals/BuyMetalsMachineryBlog";
import BuyMetalsTradingBlog from "@/components/blogs/buy-sell-scrap/buy-sell-metals/BuyMetalsTradingBlog";

// business-growth-and-lead-generation components
import BGLGAnalysisBlog from "@/components/blogs/business-growth-and-lead-generation/BGLGAnalysisBlog";
import BGLGApprovalsBlog from "@/components/blogs/business-growth-and-lead-generation/BGLGApprovalsBlog";
import BGLGDprBlog from "@/components/blogs/business-growth-and-lead-generation/BGLGDprBlog";
import BGLGMachineryBlog from "@/components/blogs/business-growth-and-lead-generation/BGLGMachineryBlog";
import BGLGTradingBlog from "@/components/blogs/business-growth-and-lead-generation/BGLGTradingBlog";

export const blogComponents: Record<string, React.ComponentType<any>> = {
  // e-waste
  "e-waste-buying-selling": EWasteBuyingSelling,
  "e-waste-approvals": EWasteApprovals,
  "e-waste-market-analysis": EWasteMarketAnalysis,
  "e-waste-machinery": EWasteMachinery,
  "e-waste-dpr": EWasteDpr,

  // tyre
  "tyre-approvals": TyreApprovals,
  "tyre-buy-selling": TyreBuySelling,
  "tyre-machinery": TyreMachinery,
  "tyre-market-analysis": TyreMarketAnalysis,
  "tyre-dpr": TyreDpr,

  // plastic
  "plastic-approvals": PlasticApprovals,
  "plastic-buy-selling": PlasticBuySelling,
  "plastic-machinery": PlasticMachinery,
  "plastic-market-analysis": PlasticMarketAnalysis,
  "plastic-recycling": PlasticRecycling,

  // battery
  "lithium-battery-approvals": LithiumBatteryApprovals,
  "lithium-battery-buy-selling": LithiumBatteryBuySelling,
  "lithium-battery-dpr": LithiumBatteryDpr,
  "lithium-battery-machinery": LithiumBatteryMachinery,
  "lithium-battery-market-analysis": LithiumBatteryMarketAnalysis,

  // rvsf (ELV reclassified)
  "rvsf-approvals": RvsfApprovals,
  "rvsf-buy-selling": RvsfBuySelling,
  "rvsf-machinery": RvsfMachinery,
  "rvsf-market-analysis": RvsfMarketAnalysis,
  "rvsf-dpr": RvsfDpr,

  // solar-panel
  "solar-panel-recycling-approvals": SolarPanelRecyclingApprovals,
  "solar-panel-buying-selling-scrap": SolarPanelBuyingSelling,
  "solar-panel-detailed-project-report": SolarPanelDpr,
  "solar-panel-market-analysis-target-segments": SolarPanelMarketAnalysis,
  "solar-panel-machinery-help-clients": SolarPanelMachinery,

  "role-of-setup-documentation-in-plant-operation-intelligence": CommissioningDocumentationChecklist,
  "common-documentation-gaps": CommonDocumentationGaps,
  "commissioning-records": CommissioningRecords,
  "plant-startup-documentation": PlantStartupDocumentation,
  "commissioning-checklists-readiness": CommissioningChecklistsReadiness,
  "plant-setup-handover-best-practices": PlantSetupHandoverBestPractices,

  "kpis-in-plant-performance-management": KPIsInPlantPerformance,
  "real-time-monitoring-reduce-delays": RealTimeMonitoringReduceDelays,
  "performance-management-strategies": PerformanceManagementStrategies,
  "using-data-to-improve-plant-efficiency": UsingDataToImprovePlantEfficiency,
  "plant-operation-intelligence": PlantOperationIntelligence,

  "plant-operation-intelligence-for-scalable-growth": PlantOperationIntelligenceForScale,
  "plant-efficiency-documentation-systems": PlantEfficiencyDocumentationSystems,
  "digital-infrastructure-for-plant-expansion": DigitalInfrastructureBlog,
  "standardize-operations-for-plant-scaling": StandardizeOperationsForPlantScaling,
  "multi-plant-growth-playbook": MultiPlantGrowthPlaybook,

  // epr-credits and buy-sell-scrap
  "epr-battery-analysis": BatteryEprAnalysisBlog,
  "epr-battery-approvals": BatteryEprApprovalsBlog,
  "epr-battery-dpr": BatteryEprDprBlog,
  "epr-battery-machinery": BatteryEprMachineryBlog,
  "epr-battery-trading": BatteryEprTradingBlog,
  "epr-electronic-analysis": ElectricEprAnalysisBlog,
  "epr-electronic-approvals": ElectricEprApprovalsBlog,
  "epr-electronic-dpr": ElectricEprDprBlog,
  "epr-electronic-machinery": ElectricEprMachinaryBlog,
  "epr-electronic-trading": ElectricEprTradingBlog,
  "epr-elv-analysis": ElvEprAnalysisBlog,
  "epr-elv-approvals": ElvEprApprovalsBlog,
  "epr-elv-dpr": ElvEprDprBlog,
  "epr-elv-machinery": ElvEprMachineryBlog,
  "epr-elv-trading": ElvEprTradingBlog,
  "epr-lithium-analysis": LithiumEprAnalysisBlog,
  "epr-lithium-approvals": LithiumEprApprovalsBlog,
  "epr-lithium-dpr": LithiumEprDprBlog,
  "epr-lithium-machinery": LithiumEprMachineryBlog,
  "epr-lithium-trading": LithiumEprTradingBlog,
  "epr-metals-analysis": MetalsEprAnalysisBlog,
  "epr-metals-approvals": MetalsEprApprovalsBlog,
  "epr-metals-dpr": MetalsEprDprBlog,
  "epr-metals-machinery": MetalsEprMachineryBlog,
  "epr-metals-trading": MetalsEprTradingBlog,
  "epr-plastic-analysis": PlasticEprAnalysisBlog,
  "epr-plastic-approvals": PlasticEprApprovalsBlog,
  "epr-plastic-dpr": PlasticEprDprBlog,
  "epr-plastic-machinery": PlasticEprMachineryBlog,
  "epr-plastic-trading": PlasticEprTradingBlog,
  "epr-tyre-analysis": TyreEprAnalysisBlog,
  "epr-tyre-approvals": TyreEprApprovalsBlog,
  "epr-tyre-dpr": TyreEprDprBlog,
  "epr-tyre-machinery": TyreEprMachineryBlog,
  "epr-tyre-trading": TyreEprTradingBlog,
  "epr-used-oil-analysis": UsedOilEprAnalysisBlog,
  "epr-used-oil-approvals": UsedOilEprApprovals,
  "epr-used-oil-dpr": UsedOilEprDprBlog,
  "epr-used-oil-machinery": UsedOilEprMachineryBlog,
  "epr-used-oil-trading": UsedOilEprTradingBlog,
  "buy-e-waste-analysis": BuyEwasteAnalysisBlog,
  "buy-e-waste-approvals": BuyEwasteApprovalsBlog,
  "buy-e-waste-dpr": BuyEwasteDprBlog,
  "buy-e-waste-machinery": BuyEwasteMachineryBlog,
  "buy-e-waste-trading": BuyEwasteTradingBlog,
  "sell-batteries-analysis": SellBatteriesAnalysisBlog,
  "sell-batteries-approvals": SellBatteriesApprovalsBlog,
  "sell-batteries-dpr": SellBatteriesDprBlog,
  "sell-batteries-machinery": SellBatteriesMachineryBlog,
  "sell-batteries-trading": SellBatteriesTradingBlog,
  "buy-sell-metals-analysis": BuyMetalsAnalysisBlog,
  "buy-sell-metals-approvals": BuyMetalsApprovalsBlog,
  "buy-sell-metals-dpr": BuyMetalsDprBlog,
  "buy-sell-metals-machinery": BuyMetalsMachineryBlog,
  "buy-sell-metals-trading": BuyMetalsTradingBlog,

  // business-growth-and-lead-generation
  "business-growth-analysis": BGLGAnalysisBlog,
  "business-growth-approvals": BGLGApprovalsBlog,
  "business-growth-dpr": BGLGDprBlog,
  "business-growth-machinery": BGLGMachineryBlog,
  "business-growth-trading": BGLGTradingBlog,
};

export default blogComponents;
