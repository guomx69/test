
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
              data: () => ({
                fields: [
                  { leaseName: 'ICLEAR CREEK' },
                  { wellNumber: '152-96-34C' },
                  { apiNumber: '3305303640' },
                  { operatorName: 'PETRO-HUNT LLC' },
                  { spot: 'NENW' },
                  { section: '3' },
                  { township: '151N' },
                  { range: '96W' },
                  { meridian: '5' },
                  { fieldName: 'CLEAR CREEK' },
                  { geologicProvince: '' },
                  { county: 'MC KENZIE' },
                  { state: 'ND' },
                  { spudDate: '' },
                  { completionDate: '' },
                  { status: 'LOC' },
                  { finalLaheeClass: '' },
                  { formationAtTd: '' },
                  { oldestAgePenetrated: '' },
                  { drillTotalDepth: '' },
                  { logTotalDepth: '' },
                  { trueVerticalDepth: '' },
                  { holeDirection: 'HORIZONTAL' },
                  { referenceElevation: '2380 GR' },
                  { elevation: '' },
                  { kbElevation: '' }
                ]
              })
            },
            completions: {
              id: 'completions',
              title: 'Completions Summary',
              subTitleType: 'WELL_SITE',
              type: 'completionSummary',
              colsEachRow: 3,
              data: () => ({
                fields: [
                  { completion: '0000' },
                  { currentStatus: 'LOC' },
                  { producingZone: '' },
                  { currentCompletion: 'Y' },
                  { completionDate: '' },
                  { upperPerforation: '' },
                  { dataSource: 'IHS' },
                  { firstProductionDate: '' },
                  { lowerPerforation: '' },
                  { sequence: '1' },
                  { lastProductionDate: '' },
                  { injection: 'NO' },
                  { cumulativeOil: '0' },
                  { cumulativeGas: '0' },
                  { cumulativeWater: '0' }
                ]
              })
            },
            summaryProduction: {
              id: 'summaryProduction',
              title: 'Summary Production',
              subTitleType: 'WELL_SITE',
              type: 'generalInfo',
              colsEachRow: 3,
              data: {producingZone: '',
                  totalOil: '0',
                  totalGasOilRatio: '0.00',
                  totalGas: '0',
                  finalWellType: 'ABND LOCATION',
                  totalWater: '0',
                  firstProductionDate: '',
                  totalInjOil: '0',
                  lastProductionDate: '',
                  totalInjGas: '0',
                  totalDaysOnProduction: '0',
                  totalInjWater: '0'
            },
            formations: {
              id: 'formations',
              title: 'Formations',
              subTitleType: 'WELL_SITE',
              type: 'formation',
              colsEachRow: 5,
              data: () => ({
                fields: [
                  { value: '00001' },
                  { value: 'BDZSRS' },
                  { value: 'SUNBURST' },
                  { value: '3025.00' },
                  { value: '' },
                  { value: 'SP Log' }
                ]
              })
            },
            additionLocationInformation: {
              id: 'additionLocationInformation',
              title: 'Additional Location Information',
              subTitleType: 'WELL_SITE',
              type: 'generalInfo',
              colsEachRow: 3,
              data: () => ({
                fields: [
                  { footageLocation: '325 FNL 2110 FWL CONGRESS SECTION' },
                  { latitude: '47.93331' },
                  { longitude: '-102.95419' },
                  { latLongSource: 'CAL' },
                  { locationNarrative: '' },
                  { latitudeBh: '47.94783' },
                  { longitudeBh: '-102.95383' }
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
              data: () => ({
                fields: [
                  { leaseName: 'ICLEAR CREEK' },
                  { wellNumber: '152-96-34C' },
                  { apiNumber: '3305303640' },
                  { operatorName: 'PETRO-HUNT LLC' },
                  { spot: 'NENW' },
                  { section: '3' },
                  { township: '151N' },
                  { range: '96W' },
                  { meridian: '5' },
                  { fieldName: 'CLEAR CREEK' },
                  { geologicProvince: '' },
                  { county: 'MC KENZIE' },
                  { state: 'ND' },
                  { spudDate: '' },
                  { completionDate: '' },
                  { status: 'LOC' },
                  { finalLaheeClass: '' },
                  { formationAtTd: '' },
                  { oldestAgePenetrated: '' },
                  { drillTotalDepth: '' },
                  { logTotalDepth: '' },
                  { trueVerticalDepth: '' },
                  { holeDirection: 'HORIZONTAL' },
                  { referenceElevation: '2380 GR' },
                  { elevation: '' },
                  { kbElevation: '' }
                ]
              })
            },
            completions: {
              id: 'completions',
              title: 'Completions',
              subTitleType: 'WELL_SITE',
              type: 'completionSummary',
              colsEachRow: 3,
              data: () => ({
                fields: [
                  { completion: '0000' },
                  { currentStatus: 'LOC' },
                  { producingZone: '' },
                  { currentCompletion: 'Y' },
                  { completionDate: '' },
                  { upperPerforation: '' },
                  { dataSource: 'IHS' },
                  { finalProductionDate: '' },
                  { lowerPerforation: '' },
                  { sequence: '1' },
                  { lastProductionDate: '' },
                  { injection: 'NO' },
                  { cumulativeOil: '0' },
                  { cumulativeGas: '0' },
                  { cumulativeWater: '0' }
                ]
              })
            },
            formations: {
              id: 'formations',
              title: 'Formations',
              subTitleType: 'WELL_SITE',
              type: 'formation',
              colsEachRow: 3,
              data: () => ({
                fields: [
                  { value: '00001' },
                  { value: 'BDZSRS' },
                  { value: 'SUNBURST' },
                  { value: '3025.00' },
                  { value: '' },
                  { value: 'SP Log' }
                ]
              })
            },
            additionLocationInformation: {
              id: 'additionLocationInformation',
              title: 'Additional Location Information',
              subTitleType: 'WELL_SITE',
              type: 'generalInfo',
              colsEachRow: 3,
              data: () => ({
                fields: [
                  { footageLocation: '325 FNL 2110 FWL CONGRESS SECTION' },
                  { latitude: '47.93331' },
                  { longitude: '-102.95419' },
                  { latLongSource: 'CAL' },
                  { locationNarrative: '' },
                  { latitudeBh: '47.94783' },
                  { longitudeBh: '-102.95383' }
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
                        { value: data?.leaseName },
                        { value: data?.leaseNumber },
                        { value: data?.leaseType },
                        { value: data?.status }
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
                        { value: data?.totalOil },
                        { value: data?.totalGas },
                        { value: data?.activeWells }
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
                  { value: data?.leaseName },
                  { value: data?.leaseNumber },
                  { value: data?.leaseType },
                  { value: data?.status }
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
                  { value: data?.totalOil },
                  { value: data?.totalGas },
                  { value: data?.activeWells }
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
                  { value: data?.formation||'N/A Additional Location Information' }
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
                  { value: data?.formation||'N/A Additional Location Information' }
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
                  { value: data?.formation||'N/A Additional Location Information' }
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
                      { value: data?.formation||'N/A Additional Location Information' }
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
                      { value: data?.formation||'N/A Additional Location Information' }
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
                      { value: data?.formation||'N/A Additional Location Information' }
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
                      { value: data?.formation||'N/A Additional Location Information' }
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
              data: () => ({
                fields: [
                  { leaseName: 'ICLEAR CREEK' },
                  { wellNumber: '152-96-34C' },
                  { apiNumber: '3305303640' },
                  { operatorName: 'PETRO-HUNT LLC' },
                  { spot: 'NENW' },
                  { section: '3' },
                  { township: '151N' },
                  { range: '96W' },
                  { meridian: '5' },
                  { fieldName: 'CLEAR CREEK' },
                  { geologicProvince: '' },
                  { county: 'MC KENZIE' },
                  { state: 'ND' },
                  { spudDate: '' },
                  { completionDate: '' },
                  { status: 'LOC' },
                  { finalLaheeClass: '' },
                  { formationAtTd: '' },
                  { oldestAgePenetrated: '' },
                  { drillTotalDepth: '' },
                  { logTotalDepth: '' },
                  { trueVerticalDepth: '' },
                  { holeDirection: 'HORIZONTAL' },
                  { referenceElevation: '2380 GR' },
                  { elevation: '' },
                  { kbElevation: '' }
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
                { value: data?.formation||'N/A Additional Location Information' }
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
                { value: data?.formation||'N/A Additional Location Information' }
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
                { value: data?.formation||'N/A Additional Location Information' }
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
                { value: data?.formation||'N/A Additional Location Information' }
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
                { value: data?.formation||'N/A Additional Location Information' }
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
                { value: data?.formation||'N/A Additional Location Information' }
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
              { value: data?.formation||'N/A Additional Location Information' }
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
              { value: data?.formation||'N/A Additional Location Information' }
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
              { value: data?.formation||'N/A Additional Location Information' }
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
              { value: data?.formation||'N/A Additional Location Information' }
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
              { value: data?.formation||'N/A Additional Location Information' }
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
              { value: data?.formation||'N/A Additional Location Information' }
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
              { value: data?.formation||'N/A Additional Location Information' }
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
              { value: data?.formation||'N/A Additional Location Information' }
            ]
          })
        },
        // ... other tract tabs
      }
    }
  }
}