export const fieldMapLabelsConfig = [
    // Well Site Data
    { key: 'leaseName', label: 'Lease Name' },
    { key: 'wellNumber', label: 'Well Number' },
    { key: 'apiNumber', label: 'API (10 Dgt)' },
    { key: 'operatorName', label: 'Operator Name' },
    { key: 'spot', label: 'Spot' },
    { key: 'section', label: 'Section' },
    { key: 'township', label: 'Township' },
    { key: 'range', label: 'Range' },
    { key: 'meridian', label: 'Meridian' },
    { key: 'fieldName', label: 'Field Name' },
    { key: 'geologicProvince', label: 'Geologic Province' },
    { key: 'county', label: 'County' },
    { key: 'state', label: 'State' },
    { key: 'spudDate', label: 'Spud Date' },
    { key: 'completionDate', label: 'Completion Date' },
    { key: 'status', label: 'Status' },
    { key: 'finalLaheeClass', label: 'Final Lahee Class' },
    { key: 'formationAtTd', label: 'Formation At TD' },
    { key: 'oldestAgePenetrated', label: 'Oldest Age Penetrated' },
    { key: 'drillTotalDepth', label: 'Drill Total Depth' },
    { key: 'logTotalDepth', label: 'Log Total Depth' },
    { key: 'trueVerticalDepth', label: 'True Vertical Depth' },
    { key: 'holeDirection', label: 'Hole Direction' },
    { key: 'referenceElevation', label: 'Reference Elevation' },
    { key: 'elevation', label: 'Elevation' },
    { key: 'kbElevation', label: 'KB Elevation' },

    // Additional Location Information
    { key: 'footageLocation', label: 'Footage Location' },
    { key: 'latitude', label: 'Latitude' },
    { key: 'longitude', label: 'Longitude' },
    { key: 'latLongSource', label: 'Lat./Long Source' },
    { key: 'locationNarrative', label: 'Location Narrative' },
    { key: 'latitudeBh', label: 'Latitude Bh' },
    { key: 'longitudeBh', label: 'Longitude Bh' },

    // Production Data
    { key: 'oil', label: 'Oil (bbls)' },
    { key: 'gas', label: 'Gas (mcf)' },
    { key: 'water', label: 'Water (bbls)' },
    { key: 'daysOnProduction', label: 'Days on Production' },
    { key: 'daysOnInjection', label: 'Days on Injection' },
    { key: 'injectionOil', label: 'Injection Oil (bbls)' },
    { key: 'injectionGas', label: 'Injection Gas (mcf)' },
    { key: 'injectionWater', label: 'Injection Water (bbls)' },

    // Production Rates
    { key: 'oilRate', label: 'Oil (bbls/day)' },
    { key: 'gasRate', label: 'Gas (mcf/day)' },
    { key: 'waterRate', label: 'Water (bbls/day)' },
    { key: 'gasOilRatio', label: 'Gas/Oil Ratio (scf/stb)' },
    { key: 'injectionOilRate', label: 'Injection Oil (bbls/day)' },
    { key: 'injectionGasRate', label: 'Injection Gas (mcf/day)' },
    { key: 'injectionWaterRate', label: 'Injection Water (bbls/day)' },

    // Summary Production
    { key: 'producingZone', label: 'Producing Zone' },
    { key: 'totalOil', label: 'Total Oil (bbls)' },
    { key: 'totalGasOilRatio', label: 'Total Gas/Oil Ratio (scf/stb)' },
    { key: 'totalGas', label: 'Total Gas (mcf)' },
    { key: 'finalWellType', label: 'Final Well Type' },
    { key: 'totalWater', label: 'Total Water (bbls)' },
    { key: 'firstProductionDate', label: 'First Production Date' },
    { key: 'totalInjOil', label: 'Total Inj Oil (bbls)' },
    { key: 'lastProductionDate', label: 'Last Production Date' },
    { key: 'totalInjGas', label: 'Total Inj Gas (mcf)' },
    { key: 'totalDaysOnProduction', label: 'Total Days On Production' },
    { key: 'totalInjWater', label: 'Total Inj Water (bbls)' },
    { key: 'totalDaysOnInjection', label: 'Total Days on Injection' },

    // Formations
    { key: 'formationNumber', label: 'Formation Number' },
    { key: 'formation', label: 'Formation' },
    { key: 'formationName', label: 'Name' },
    { key: 'name', label: 'Name' },
    { key: 'topDepth', label: 'Top Depth' },
    { key: 'bottomDepth', label: 'Bottom Depth' },
    { key: 'source', label: 'Source' },

    // Completions
    { key: 'completion', label: 'Completion' },
    { key: 'currentStatus', label: 'Current Status' },
    { key: 'current', label: 'Current' },
    { key: 'currentCompletion', label: 'Current Completion' },
    { key: 'dataSource', label: 'Data Source' },
    { key: 'finalProductionDate', label: 'Final Production Date' },
    { key: 'sequence', label: 'Sequence' },
    { key: 'injection', label: 'Injection' },
    { key: 'cumulativeOil', label: 'Cumulative Oil' },
    { key: 'cumulativeGas', label: 'Cumulative Gas' },
    { key: 'cumulativeWater', label: 'Cumulative Water' },
    { key: 'upperPerforation', label: 'Upper Perforation' },
    { key: 'lowerPerforation', label: 'Lower Perforation' },
    { key: 'leaseProductionId', label: 'Lease ProductionId' }
];

// Helper function to create tab content
export const createTabLabeledContent = (data) => {
  if (!data) return [];
  const keys = Object.keys(data);
  return keys.map(key => {
    const fieldLabel = fieldMapLabelsConfig.find(f => f.key === key);
    return {
      label: fieldLabel?.label || key,
      value: data[key]
    };
  });
};