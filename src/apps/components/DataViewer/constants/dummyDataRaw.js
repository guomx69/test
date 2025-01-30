export const DETAILS_SETTINGS = {
    WELL_DATA: {
      SITE_DATA: {
        Non_prod_group:{
          tabs: {
            generalInfo: {
              id: 'generalInfo',
              type: 'generalInfo',
              title: 'General Info',
              subTitleType: 'WELL_SITE',
              colsEachRow: 3,
              data: (wellData) => ({
                fields: [
                  { label: 'Lease Name', value: wellData.leaseName || 'ICLEAR CREEK' },
                  { label: 'Well Number', value: wellData.wellNumber || '152-96-34C' },
                  { label: 'API (10 Dgt)', value: wellData.api || '3305303640' },
                  { label: 'Operator Name', value: wellData.operatorName || 'PETRO-HUNT LLC' },
                  { label: 'Spot', value: wellData.spot || 'NENW' },
                  { label: 'Section', value: wellData.section || '3' },
                  { label: 'Township', value: wellData.township || '151N' },
                  { label: 'Range', value: wellData.range || '96W' },
                  { label: 'Meridian', value: wellData.meridian || '5' },
                  { label: 'Field Name', value: wellData.fieldName || 'CLEAR CREEK' },
                  { label: 'Geologic Province', value: wellData.geologicProvince || '' },
                  { label: 'County', value: wellData.county || 'MC KENZIE' },
                  { label: 'State', value: wellData.state || 'ND' },
                  { label: 'Spud Date', value: wellData.spudDate || '' },
                  { label: 'Completion Date', value: wellData.completionDate || '' },
                  { label: 'Status', value: wellData.status || 'LOC' },
                  { label: 'Final Lahee Class', value: wellData.finalLeaseClass || '' },
                  { label: 'Formation At TD', value: wellData.formationAtTd || '' },
                  { label: 'Oldest Age Penetrated', value: wellData.oldestAgePenetrated || '' },
                  { label: 'Drill Total Depth', value: wellData.drillTotalDepth || '' },
                  { label: 'Log Total Depth', value: wellData.logTotalDepth || '' },
                  { label: 'True Vertical Depth', value: wellData.trueVerticalDepth || '' },
                  { label: 'Hole Direction', value: wellData.holeDirection || 'HORIZONTAL' },
                  { label: 'Reference Elevation', value: wellData.referenceElevation || '2380 GR' },
                  { label: 'Elevation', value: wellData.elevation || '' },
                  { label: 'KB Elevation', value: wellData.kbElevation || '' }
                ]
              })
            },
            completions: {
              id: 'completions',
              title: 'Completions Summary',
              subTitleType: 'WELL_SITE',
              type: 'completionSummary',
              colsEachRow: 3,
              data: (wellData) => ({
                fields: [
                  { label: 'Completion', value: wellData.completion || '0000' },
                  { label: 'Current Status', value: wellData.currentStatus || 'LOC' },
                  { label: 'Producing Zone', value: wellData.producingZone || '' },
                  { label: 'Current Completion', value: wellData.currentCompletion || 'Y' },
                  { label: 'Completion Date', value: wellData.completionDate || '' },
                  { label: 'Upper Perforation', value: wellData.upperPerforation || '' },
                  { label: 'Data Source', value: wellData.dataSource || 'IHS' },
                  { label: 'First Production Date', value: wellData.firstProductionDate || '' },
                  { label: 'Lower Perforation', value: wellData.lowerPerforation || '' },
                  { label: 'Sequence', value: wellData.sequence || '1' },
                  { label: 'Last Production Date', value: wellData.lastProductionDate || '' },
                  { label: 'Injection', value: wellData.injection || 'NO' },
                  { label: 'Cumulative Oil', value: wellData.cumulativeOil || '0' },
                  { label: 'Cumulative Gas', value: wellData.cumulativeGas || '0' },
                  { label: 'Cumulative Water', value: wellData.cumulativeWater || '0' }
                ]
              })
            },
            summaryProduction: {
              id: 'summaryProduction',
              title: 'Summary Production',
              subTitleType: 'WELL_SITE',
              type: 'generalInfo',
              colsEachRow: 3,
              data: (wellData) => ({
                fields: [
                  { label: 'Producing Zone', value: wellData.producingZone || '' },
                  { label: 'Total Oil (bbls)', value: wellData.totalOil || '0' },
                  { label: 'Total Gas/Oil Ratio (scf/stb)', value: wellData.totalGasOilRatio || '0.00' },
                  { label: 'Total Gas (mcf)', value: wellData.totalGas || '0' },
                  { label: 'Final Well Type', value: wellData.finalWellType || 'ABND LOCATION' },
                  { label: 'Total Water (bbls)', value: wellData.totalWater || '0' },
                  { label: 'First Production Date', value: wellData.firstProductionDate || '' },
                  { label: 'Total Inj Oil (bbls)', value: wellData.totalInjOil || '0' },
                  { label: 'Last Production Date', value: wellData.lastProductionDate || '' },
                  { label: 'Total Inj Gas (mcf)', value: wellData.totalInjGas || '0' },
                  { label: 'Total Days On Production', value: wellData.totalDaysOnProduction || '0' },
                  { label: 'Total Inj Water (bbls)', value: wellData.totalInjWater || '0' }
                ]
              })
            },
            formations: {
              id: 'formations',
              title: 'Formations',
              subTitleType: 'WELL_SITE',
              type: 'formation',
              colsEachRow: 5,
              data: (wellData) => ({
                fields: [
                  { label: 'Formation Number', value: wellData.formationNumber || '00001' },
                  { label: 'Formation', value: wellData.formation || 'BDZSRS' },
                  { label: 'Name', value: wellData.formationName || 'SUNBURST' },
                  { label: 'Top Depth', value: wellData.topDepth || '3025.00' },
                  { label: 'Bottom Depth', value: wellData.bottomDepth || '' },
                  { label: 'Source', value: wellData.source || 'SP Log' }
                  
                ]
              })
            },
            additionLocationInformation: {
              id: 'additionLocationInformation',
              title: 'Additional Location Information',
              subTitleType: 'WELL_SITE',
              type: 'generalInfo',
              colsEachRow: 3,
              data: (wellData) => ({
                fields: [
                  { label: 'Footage Location', value: wellData.footageLocation || '325 FNL 2110 FWL CONGRESS SECTION' },
                  { label: 'Latitude', value: wellData.latitude || '47.93331' },
                  { label: 'Longitude', value: wellData.longitude || '-102.95419' },
                  { label: 'Lat./Long Source', value: wellData.latLongSource || 'CAL' },
                  { label: 'Location Narrative', value: wellData.locationNarrative || '' },
                  { label: 'Latitude Bh', value: wellData.latitudeBh || '47.94783' },
                  { label: 'Longitude Bh', value: wellData.longitudeBh || '-102.95383' }
                ]
              })
            },
            // ... other well tabs
          } 
        },
        Prod_group:{
          tabs: {
            generalInfo: {
              id: 'generalInfo',
              type: 'generalInfo',
              title: 'General Info',
              subTitleType: 'WELL_SITE',
              colsEachRow: 3,
              data: (wellData) => ({
                fields: [
                  { label: 'Lease Name', value: wellData.leaseName || 'ICLEAR CREEK' },
                  { label: 'Well Number', value: wellData.wellNumber || '152-96-34C' },
                  { label: 'API (10 Dgt)', value: wellData.api || '3305303640' },
                  { label: 'Operator Name', value: wellData.operatorName || 'PETRO-HUNT LLC' },
                  { label: 'Spot', value: wellData.spot || 'NENW' },
                  { label: 'Section', value: wellData.section || '3' },
                  { label: 'Township', value: wellData.township || '151N' },
                  { label: 'Range', value: wellData.range || '96W' },
                  { label: 'Meridian', value: wellData.meridian || '5' },
                  { label: 'Field Name', value: wellData.fieldName || 'CLEAR CREEK' },
                  { label: 'Geologic Province', value: wellData.geologicProvince || '' },
                  { label: 'County', value: wellData.county || 'MC KENZIE' },
                  { label: 'State', value: wellData.state || 'ND' },
                  { label: 'Spud Date', value: wellData.spudDate || '' },
                  { label: 'Completion Date', value: wellData.completionDate || '' },
                  { label: 'Status', value: wellData.status || 'LOC' },
                  { label: 'Final Lahee Class', value: wellData.finalLeaseClass || '' },
                  { label: 'Formation At TD', value: wellData.formationAtTd || '' },
                  { label: 'Oldest Age Penetrated', value: wellData.oldestAgePenetrated || '' },
                  { label: 'Drill Total Depth', value: wellData.drillTotalDepth || '' },
                  { label: 'Log Total Depth', value: wellData.logTotalDepth || '' },
                  { label: 'True Vertical Depth', value: wellData.trueVerticalDepth || '' },
                  { label: 'Hole Direction', value: wellData.holeDirection || 'HORIZONTAL' },
                  { label: 'Reference Elevation', value: wellData.referenceElevation || '2380 GR' },
                  { label: 'Elevation', value: wellData.elevation || '' },
                  { label: 'KB Elevation', value: wellData.kbElevation || '' }
                ]
              })
            },
            completions: {
              id: 'completions',
              title: 'Completions',
              subTitleType: 'WELL_SITE',
              type: 'completionSummary',
              colsEachRow: 3,
              data: (wellData) => ({
                fields: [
                  { label: 'Completion', value: wellData.completion || '0000' },
                  { label: 'Current Status', value: wellData.currentStatus || 'LOC' },
                  { label: 'Producing Zone', value: wellData.producingZone || '' },
                  { label: 'Current Completion', value: wellData.currentCompletion || 'Y' },
                  { label: 'Completion Date', value: wellData.completionDate || '' },
                  { label: 'Upper Perforation', value: wellData.upperPerforation || '' },
                  { label: 'Data Source', value: wellData.dataSource || 'IHS' },
                  { label: 'Final Production Date', value: wellData.finalProductionDate || '' },
                  { label: 'Lower Perforation', value: wellData.lowerPerforation || '' },
                  { label: 'Sequence', value: wellData.sequence || '1' },
                  { label: 'Last Production Date', value: wellData.lastProductionDate || '' },
                  { label: 'Injection', value: wellData.injection || 'NO' },
                  { label: 'Cumulative Oil', value: wellData.cumulativeOil || '0' },
                  { label: 'Cumulative Gas', value: wellData.cumulativeGas || '0' },
                  { label: 'Cumulative Water', value: wellData.cumulativeWater || '0' }
                ]
              })
            },
            formations: {
              id: 'formations',
              title: 'Formations',
              subTitleType: 'WELL_SITE',
              type: 'formation',
              colsEachRow: 3,
              data: (wellData) => ({
                fields: [
                  { label: 'Formation Number', value: wellData.formationNumber || '00001' },
                  { label: 'Formation', value: wellData.formation || 'BDZSRS' },
                  { label: 'Name', value: wellData.formationName || 'SUNBURST' },
                  { label: 'Top Depth', value: wellData.topDepth || '3025.00' },
                  { label: 'Bottom Depth', value: wellData.bottomDepth || '' },
                  { label: 'Source', value: wellData.source || 'SP Log' }
                  
                ]
              })
            },
            additionLocationInformation: {
              id: 'additionLocationInformation',
              title: 'Additional Location Information',
              subTitleType: 'WELL_SITE',
              type: 'generalInfo',
              colsEachRow: 3,
              data: (wellData) => ({
                fields: [
                  { label: 'Footage Location', value: wellData.footageLocation || '325 FNL 2110 FWL CONGRESS SECTION' },
                  { label: 'Latitude', value: wellData.latitude || '47.93331' },
                  { label: 'Longitude', value: wellData.longitude || '-102.95419' },
                  { label: 'Lat./Long Source', value: wellData.latLongSource || 'CAL' },
                  { label: 'Location Narrative', value: wellData.locationNarrative || '' },
                  { label: 'Latitude Bh', value: wellData.latitudeBh || '47.94783' },
                  { label: 'Longitude Bh', value: wellData.longitudeBh || '-102.95383' }
                ]
              })
            },
            // ... other well tabs
          } 
        }
      },
      COMPLETION_DATA: {
        Non_prod_group:{
            tabs: {
                  generalInfo: {
                    id: 'generalInfo',
                    title: 'General Information',
                    subTitleType: 'WELL_COMPLETION',
                    type: 'generalInfoList',
                    
                    colsEachRow: 3,
                    data: (data) => ({
                      fields: [
                        { label: 'Lease Name', value: data?.leaseName },
                        { label: 'Lease Number', value: data?.leaseNumber },
                        { label: 'Lease Type', value: data?.leaseType },
                        { label: 'Status', value: data?.status }
                      ]
                    })
                  },
                  production: {
                    id: 'production',
                    title: 'Summary Production',
                    type: 'completionSumProd',
                    subTitleType: 'WELL_COMPLETION',
                    colsEachRow: 3,
                    data: (data) => ({
                      fields: [
                        { label: 'Total Oil', value: data?.totalOil },
                        { label: 'Total Gas', value: data?.totalGas },
                        { label: 'Active Wells', value: data?.activeWells }
                      ]
                    })
                  }
            },
        },
        Prod_group:{
          tabs: {
            generalInfo: {
              id: 'generalInfo',
              title: 'General Information',
              type: 'generalInfoListX',
              subTitleType: 'WELL_COMPLETION',
              colsEachRow: 4,
              data: (data) => ({
                fields: [
                  { label: 'Lease Name', value: data?.leaseName },
                  { label: 'Lease Number', value: data?.leaseNumber },
                  { label: 'Lease Type', value: data?.leaseType },
                  { label: 'Status', value: data?.status }
                ]
              })
            },
            LeaseProduction: {
              id: 'production',
              title: 'Lease Production',
              type: 'leaseProduction',
              subTitleType: 'WELL_COMPLETION',
              colsEachRow: 4,
              data: (data) => ({
                fields: [
                  { label: 'Total Oil', value: data?.totalOil },
                  { label: 'Total Gas', value: data?.totalGas },
                  { label: 'Active Wells', value: data?.activeWells }
                ]
              })
            },
            LeaseProductionAnnual: {
              id: 'leaseProductionAnnual',
              title: 'Lease Production Annual',
              type: 'leaseProductionAnnual',
              subTitleType: 'WELL_SITE',
              colsEachRow: 4,
              data: (data) => ({
                fields: [
                  { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
                ]
              })
            },
            LeaseProductionMonthly: {
              id: 'leaseProductionMonthly',
              title: 'Lease Production Monthly',
              type: 'leaseProductionMonthly',
              subTitleType: 'WELL_SITE',
              colsEachRow: 4,
              data: (data) => ({
                fields: [
                  { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
                ]
              })
            },
            LeaseProductionLast12Months: {
              id: 'leaseProductionLast12Months',
              title: 'Lease Production Last 12 Months',
              type: 'leaseProductionLast12Months',
              subTitleType: 'WELL_SITE',
              colsEachRow: 4,
              data: (data) => ({
                fields: [
                  { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
                ]
              })
            }
          }
        }
      },
  
  
  
  
  
  
      PRODUCTION_BY_COMPLETION_DATA: {
          tabs: {
                generalInfo: {
                  id: 'generalInfo',
                  title: 'General Information',
                  type: 'generalInfoList',
                  colsEachRow: 4,
                  data: (data) => ({
                    fields: [
                      { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
                    ]
                  })
                },
                annual: {
                  id: 'annual',
                  title: 'Annual',
                  type: 'productionAnnual',
                  colsEachRow: 4,
                  data: (data) => ({
                    fields: [
                      { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
                    ]
                  })
                },
                monthly: {
                  id: 'monthly',
                  title: 'Monthly',
                  type: 'productionMonthly',
                  colsEachRow: 4,
                  data: (data) => ({
                    fields: [
                      { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
                    ]
                  })
                },  
                last12Months: {
                  id: 'last12Months',
                  title: 'Last 12 Months',
                  type: 'productionLast12Months',
                  colsEachRow: 4,
                  data: (data) => ({
                    fields: [
                      { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
                    ]
                  })
                },
          // ... other production tabs
        }
      },
      PRODUCTION_BY_WELL_SITE: {
        tabs: {
          generalInfo: {
            id: 'generalInfo',
            title: 'General Information',
            type: 'generalInfo',
            colsEachRow: 3,
              data: (wellData) => ({
                fields: [
                  { label: 'Lease Name', value: wellData.leaseName || 'ICLEAR CREEK' },
                  { label: 'Well Number', value: wellData.wellNumber || '152-96-34C' },
                  { label: 'API (10 Dgt)', value: wellData.api || '3305303640' },
                  { label: 'Operator Name', value: wellData.operatorName || 'PETRO-HUNT LLC' },
                  { label: 'Spot', value: wellData.spot || 'NENW' },
                  { label: 'Section', value: wellData.section || '3' },
                  { label: 'Township', value: wellData.township || '151N' },
                  { label: 'Range', value: wellData.range || '96W' },
                  { label: 'Meridian', value: wellData.meridian || '5' },
                  { label: 'Field Name', value: wellData.fieldName || 'CLEAR CREEK' },
                  { label: 'Geologic Province', value: wellData.geologicProvince || '' },
                  { label: 'County', value: wellData.county || 'MC KENZIE' },
                  { label: 'State', value: wellData.state || 'ND' },
                  { label: 'Spud Date', value: wellData.spudDate || '' },
                  { label: 'Completion Date', value: wellData.completionDate || '' },
                  { label: 'Status', value: wellData.status || 'LOC' },
                  { label: 'Final Lahee Class', value: wellData.finalLeaseClass || '' },
                  { label: 'Formation At TD', value: wellData.formationAtTd || '' },
                  { label: 'Oldest Age Penetrated', value: wellData.oldestAgePenetrated || '' },
                  { label: 'Drill Total Depth', value: wellData.drillTotalDepth || '' },
                  { label: 'Log Total Depth', value: wellData.logTotalDepth || '' },
                  { label: 'True Vertical Depth', value: wellData.trueVerticalDepth || '' },
                  { label: 'Hole Direction', value: wellData.holeDirection || 'HORIZONTAL' },
                  { label: 'Reference Elevation', value: wellData.referenceElevation || '2380 GR' },
                  { label: 'Elevation', value: wellData.elevation || '' },
                  { label: 'KB Elevation', value: wellData.kbElevation || '' }
                ]
              })
          },
          annual: {
            id: 'annual',
            title: 'Annual',
            type: 'productionPeriodNoLeaseNoRdAnnual',
            colsEachRow: 4,
            data: (data) => ({
              fields: [
                { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
              ]
            })
          },
          monthly: {
            id: 'monthly',
            title: 'Monthly',
            type: 'productionPeriodNoLeaseNoRdMonthly',
            colsEachRow: 4,
            data: (data) => ({
              fields: [
                { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
              ]
            })
          },  
          last12Months: {
            id: 'last12Months',
            title: 'Last 12 Months',
            type: 'productionPeriodNoLeaseNoRdLast12Months',
            colsEachRow: 4,
            data: (data) => ({
              fields: [
                { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
              ]
            })
          },
    
          // ... other production tabs
        }
      },
      PRODUCTION_BY_SUM_CHECK_ITEMS: {
        tabs: {
          annual: {
            id: 'generalInfo',
            title: 'Annual',
            subTitleType: 'SUMMED_CHECKED_ITEMS',
            type: 'productionPeriodNoLeaseNoRdAnnual',
            colsEachRow: 4,
            data: (data) => ({
              fields: [
                { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
              ]
            })
          },
          monthly: {
            id: 'monthly',
            title: 'Monthly',
            subTitleType: 'SUMMED_CHECKED_ITEMS',
            type: 'productionPeriodNoLeaseNoRdMonthly',
            colsEachRow: 4,
            data: (data) => ({
              fields: [
                { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
              ]
            })
          },  
          last12Months: {
            id: 'last12Months',
            title: 'Last 12 Months',
            subTitleType: 'SUMMED_CHECKED_ITEMS',
            type: 'productionPeriodNoLeaseNoRdLast12Months',
            colsEachRow: 4,
            data: (data) => ({
              fields: [
                { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
              ]
            })
          },
          // ... other production tabs
        }
      }
    },
    AGREEMENT_DATA: {
      type: 'agreementData',
      tabs: {
        generalInfo: {
          id: 'generalInfo',
          title: 'General Information',
          type: 'generalInfo',
          subTitleType: 'WELL_COMPLETION',
          colsEachRow: 4,
          data: (data) => ({
            fields: [
              { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
            ]
          })
        },
        lands: {
          id: 'lands',
          title: 'Lands',
          type: 'generalInfo',
          subTitleType: 'WELL_COMPLETION',
          colsEachRow: 4,
          data: (data) => ({
            fields: [
              { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
            ]
          })
        },
        // ... other agreement tabs
      }
    },
    LEASE_DATA: {
      
      tabs: {
        generalInfo: {
          id: 'generalInfo',
          title: 'General Information',
          subTitleType: 'WELL_SITE',
          type: 'generalInfo',
          colsEachRow: 4,
          data: (data) => ({
            fields: [
              { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
            ]
          })
        },
        lands: {
          id: 'lands',
          title: 'Lands',
          subTitleType: 'WELL_SITE',
          type: 'generalInfo',
          colsEachRow: 4,
          data: (data) => ({
            fields: [
              { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
            ]
          })
        },
        // ... other lease tabs
      }
    },
    TRACT_DATA: {
     
        tabs: {
        generalInfo: {
          id: 'generalInfo',
          title: 'General Information',
          subTitleType: 'WELL_SITE',
          type: 'generalInfo',
          colsEachRow: 4,
          data: (data) => ({
            fields: [
              { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
            ]
          })
        },
        lands: {
          id: 'lands',
          title: 'Lands',
          subTitleType: 'WELL_SITE',
          type: 'generalInfo',
          colsEachRow: 4,
          data: (data) => ({
            fields: [
              { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
            ]
          })
        },
        ownership: {
          id: 'ownership',
          title: 'Ownership Information',
          subTitleType: 'WELL_SITE',
          type: 'generalInfo',
          colsEachRow: 4,
          data: (data) => ({
            fields: [
              { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
            ]
          })
        },
        sumOfcheckedItems: {
          id: 'sumOfcheckedItems',
          title: 'Tracts-Summation of Checked Items',
          subTitleType: 'SUMMED_CHECKED_ITEMS',
          type: 'generalInfo',
          colsEachRow: 4,
          data: (data) => ({
            fields: [
              { label: 'Formation', value: data?.formation||'N/A Additional Location Information' }
            ]
          })
        },
        // ... other tract tabs
      }
    }
  }; 