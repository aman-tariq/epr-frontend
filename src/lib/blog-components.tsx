import React from "react";

// per-post components (wrappers that use PostWrapper)
import EWasteBuyingSelling from "@/components/blogs/e-waste/e-waste-buying-selling";
import EWasteApprovals from "@/components/blogs/e-waste/e-waste-approvals";
import EWasteMarketAnalysis from "@/components/blogs/e-waste/e-waste-market-analysis";
import EWasteMachinery from "@/components/blogs/e-waste/e-waste-machinery";
import EWasteDpr from "@/components/blogs/e-waste/e-waste-dpr";

import TyreApprovals from "@/components/blogs/tyre/tyre-approvals";
import TyreBuySelling from "@/components/blogs/tyre/tyre-buy-selling";
import TyreMachinery from "@/components/blogs/tyre/tyre-machinery";
import TyreMarketAnalysis from "@/components/blogs/tyre/tyre-market-analysis";
import TyreDpr from "@/components/blogs/tyre/tyre-dpr";

import PlasticApprovals from "@/components/blogs/plastic/plastic-approvals";
import PlasticBuySelling from "@/components/blogs/plastic/plastic-buy-selling";
import PlasticMachinery from "@/components/blogs/plastic/plastic-machinery";
import PlasticMarketAnalysis from "@/components/blogs/plastic/plastic-market-analysis";
import PlasticRecycling from "@/components/blogs/plastic/plastic-recycling";

import LithiumBatteryApprovals from "@/components/blogs/battery/lithium-battery-approvals";
import LithiumBatteryBuySelling from "@/components/blogs/battery/lithium-battery-buy-selling";
import LithiumBatteryDpr from "@/components/blogs/battery/lithium-battery-dpr";
import LithiumBatteryMachinery from "@/components/blogs/battery/lithium-battery-machinery";
import LithiumBatteryMarketAnalysis from "@/components/blogs/battery/lithium-battery-market-analysis";

import RvsfApprovals from "@/components/blogs/rvsf/rvsf-approvals";
import RvsfBuySelling from "@/components/blogs/rvsf/rvsf-buy-selling";
import RvsfMachinery from "@/components/blogs/rvsf/rvsf-machinery";
import RvsfMarketAnalysis from "@/components/blogs/rvsf/rvsf-market-analysis";
import RvsfDpr from "@/components/blogs/rvsf/rvsf-dpr";

import SolarPanelRecyclingApprovals from "@/components/blogs/solar-panel/solar-panel-recycling-approvals";
import SolarPanelBuyingSelling from "@/components/blogs/solar-panel/solar-panel-buying-selling-scrap";
import SolarPanelDpr from "@/components/blogs/solar-panel/solar-panel-detailed-project-report";
import SolarPanelMarketAnalysis from "@/components/blogs/solar-panel/solar-panel-market-analysis-target-segments";
import SolarPanelMachinery from "@/components/blogs/solar-panel/solar-panel-machinery-help-clients";

import CommissioningDocumentationChecklist from "@/components/blogs/setup-commissioning-documentation/role-of-setup-documentation-in-plant-operation-intelligence";
import CommonDocumentationGaps from "@/components/blogs/setup-commissioning-documentation/common-documentation-gaps";
import CommissioningRecords from "@/components/blogs/setup-commissioning-documentation/commissioning-records";
import PlantStartupDocumentation from "@/components/blogs/setup-commissioning-documentation/plant-startup-documentation";
import CommissioningChecklistsReadiness from "@/components/blogs/setup-commissioning-documentation/commissioning-checklists-readiness";
import PlantSetupHandoverBestPractices from "@/components/blogs/setup-commissioning-documentation/plant-setup-handover-best-practices";
import KPIsInPlantPerformance from "@/components/blogs/operation-performance-management/kpis-in-plant-performance-management";
import RealTimeMonitoringReduceDelays from "@/components/blogs/operation-performance-management/real-time-monitoring-reduce-delays";
import PerformanceManagementStrategies from "@/components/blogs/operation-performance-management/performance-management-strategies";
import UsingDataToImprovePlantEfficiency from "@/components/blogs/operation-performance-management/using-data-to-improve-plant-efficiency";
import PlantOperationIntelligence from "@/components/blogs/operation-performance-management/plant-operation-intelligence";
import PlantOperationIntelligenceForScale from "@/components/blogs/scale-and-growth-systems/plant-operation-intelligence-for-scalable-growth";
import PlantEfficiencyDocumentationSystems from "@/components/blogs/scale-and-growth-systems/plant-efficiency-documentation-systems";
import DigitalInfrastructureBlog from "@/components/blogs/scale-and-growth-systems/digital-infrastructure-for-plant-expansion";
import StandardizeOperationsForPlantScaling from "@/components/blogs/scale-and-growth-systems/standardize-operations-for-plant-scaling";
import MultiPlantGrowthPlaybook from "@/components/blogs/scale-and-growth-systems/multi-plant-growth-playbook";

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
};

export default blogComponents;
