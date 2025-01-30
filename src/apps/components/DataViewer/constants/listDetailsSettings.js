import { createTabLabeledContent } from './NiogemsFieldMapLabel';



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
            data: (wellData) => createTabLabeledContent(wellData.generalInfo) //object
          },
          completions: {
            id: 'completions',
            title: 'Completions Summary',
            subTitleType: 'WELL_SITE',
            type: 'completionSummary',
            colsEachRow: 3,
            data: (wellData) => wellData.wvsCompletionSummary //array of objects
          },
          summaryProduction: {
            id: 'summaryProduction',
            title: 'Summary Production',
            subTitleType: 'WELL_SITE',
            type: 'generalInfo',
            colsEachRow: 3,
            data: (wellData) => createTabLabeledContent(wellData.wvsSummaryProd)
          },
          formations: {
            id: 'formations',
            title: 'Formations',
            subTitleType: 'WELL_SITE',
            type: 'formation',
            colsEachRow: 3,
            data: (wellData) => wellData.formations //array of objects
          },
          
          additionLocationInformation: {
            id: 'additionLocationInformation',
            title: 'Additional Location Information',
            subTitleType: 'WELL_SITE',
            type: 'generalInfo',
            colsEachRow: 3,
            data: (wellData) => createTabLabeledContent(wellData.additionalLocation)
          },
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
            data: (wellData) => createTabLabeledContent(wellData.generalInfo)
          },
         
         
          completions: {
            id: 'completions',
            title: 'Completions',
            subTitleType: 'WELL_SITE',
            type: 'completionSummary',
            colsEachRow: 3,
            data: (wellData) => wellData.completions //array of objects
              },
          
          formations: {
            id: 'formations',
            title: 'Formations',
            subTitleType: 'WELL_SITE',
            type: 'formation',
            colsEachRow: 3,
            data: (wellData) => wellData.formations
          },
         
          additionLocationInformation: {
            id: 'additionLocationInformation',
            title: 'Additional Location Information',
            subTitleType: 'WELL_SITE',
            type: 'generalInfo',
            colsEachRow: 3,
            data: (wellData) => createTabLabeledContent(wellData.additionalLocation)
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
                  data: (wellData) => wellData.generalInfoList
                },
                production: {
                  id: 'production',
                  title: 'Summary Production',
                  type: 'completionSumProd',
                  subTitleType: 'WELL_COMPLETION',
                  colsEachRow: 3,
                  data: (wellData) => wellData.wvcmSummaryProd
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
            //colsEachRow: {colsEachRowCumulative: 3,colsEachRowFirstRates: 2,colsEachRowLastRates: 2},
            colsEachRow: 3,
            data: (wellData) => wellData.generalInfoListX
          },
          LeaseProduction: {
            id: 'production',
            title: 'Lease Production',
            type: 'leaseProduction',
            subTitleType: 'WELL_COMPLETION',
            colsEachRow: 4,
            data: (wellData) => wellData.completionLeaseProduction         
          },
          LeaseProductionAnnual: {
            id: 'leaseProductionAnnual',
            title: 'Lease Production Annual',
            type: 'leaseProductionAnnual',
            subTitleType: 'WELL_SITE',
            colsEachRow: 4,
            data: (wellData) => wellData.completionLeaseProductionPeriod
          },
          LeaseProductionMonthly: {
            id: 'leaseProductionMonthly',
            title: 'Lease Production Monthly',
            type: 'leaseProductionMonthly',
            subTitleType: 'WELL_SITE',
            colsEachRow: 4,
            data: (wellData) => wellData.completionLeaseProductionPeriod
          },
          LeaseProductionLast12Months: {
            id: 'leaseProductionLast12Months',
            title: 'Lease Production Last 12 Months',
            type: 'leaseProductionLast12Months',
            subTitleType: 'WELL_SITE',
            colsEachRow: 4,
            data: (wellData) => wellData.completionLeaseProductionPeriod
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
                data: (wellData) => wellData.generalInfoList //array of objects
              },
              annual: {
                id: 'annual',
                title: 'Annual',
                type: 'productionAnnual',
                colsEachRow: 4,
                data: (wellData) => wellData.completionLeaseProductionPeriod
              },
              monthly: {
                id: 'monthly',
                title: 'Monthly',
                type: 'productionMonthly',
                colsEachRow: 4,
                data: (wellData) => wellData.completionLeaseProductionPeriod
              },  
              last12Months: {
                id: 'last12Months',
                title: 'Last 12 Months',
                type: 'productionLast12Months',
                colsEachRow: 4,
                data: (wellData) => wellData.completionLeaseProductionPeriod
              }
        }
    },
    PRODUCTION_BY_WELL_SITE: {
      tabs: {
        generalInfo: {
          id: 'generalInfo',
          title: 'General Information',
          type: 'generalInfoList',
          colsEachRow: 3,
          data: (wellData) => wellData.generalInfoList //array of objects
        },
        annual: {
          id: 'annual',
          title: 'Annual',
          type: 'productionPeriodNoLeaseNoRdAnnual',
          colsEachRow: 4,
          data: (wellData) => wellData.completionLeaseProductionPeriodNoRdNoLease //createTabLabeledContent(wellData)
        },
        monthly: {
          id: 'monthly',
          title: 'Monthly',
          type: 'productionPeriodNoLeaseNoRdMonthly',
          colsEachRow: 4,
          data: (wellData) => wellData.completionLeaseProductionPeriodNoRdNoLease //createTabLabeledContent(wellData)
        },  
        last12Months: {
          id: 'last12Months',
          title: 'Last 12 Months',
          type: 'productionPeriodNoLeaseNoRdLast12Months',
          colsEachRow: 4,
          data: (wellData) => wellData.completionLeaseProductionPeriodNoRdNoLease //createTabLabeledContent(wellData)
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
          data: (wellData) => wellData.completionLeaseProductionPeriodNoRdNoLease
        },
        monthly: {
          id: 'monthly',
          title: 'Monthly',
          subTitleType: 'SUMMED_CHECKED_ITEMS',
          type: 'productionPeriodNoLeaseNoRdMonthly',
          colsEachRow: 4,
          data: (wellData) => wellData.completionLeaseProductionPeriodNoRdNoLease
        },  
        last12Months: {
          id: 'last12Months',
          title: 'Last 12 Months',
          subTitleType: 'SUMMED_CHECKED_ITEMS',
          type: 'productionPeriodNoLeaseNoRdLast12Months',
          colsEachRow: 4,
          data: (wellData) => wellData.completionLeaseProductionPeriodNoRdNoLease
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
        data: (wellData) => createTabLabeledContent(wellData)
      },
      lands: {
        id: 'lands',
        title: 'Lands',
        type: 'generalInfo',
        subTitleType: 'WELL_COMPLETION',
        colsEachRow: 4,
        data: (wellData) => createTabLabeledContent(wellData)
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
        data: (wellData) => createTabLabeledContent(wellData)
      },
      lands: {
        id: 'lands',
        title: 'Lands',
        subTitleType: 'WELL_SITE',
        type: 'generalInfo',
        colsEachRow: 4,
        data: (wellData) => createTabLabeledContent(wellData)
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
        data: (wellData) => createTabLabeledContent(wellData)
      },
      lands: {
        id: 'lands',
        title: 'Lands',
        subTitleType: 'WELL_SITE',
        type: 'generalInfo',
        colsEachRow: 4,
        data: (wellData) => createTabLabeledContent(wellData)
      },
      ownership: {
        id: 'ownership',
        title: 'Ownership Information',
        subTitleType: 'WELL_SITE',
        type: 'generalInfo',
        colsEachRow: 4,
        data: (wellData) => createTabLabeledContent(wellData)
      },
      sumOfcheckedItems: {
        id: 'sumOfcheckedItems',
        title: 'Tracts-Summation of Checked Items',
        subTitleType: 'SUMMED_CHECKED_ITEMS',
        type: 'generalInfo',
        colsEachRow: 4,
        data: (wellData) => createTabLabeledContent(wellData)
      },
      // ... other tract tabs
    }
  }
}; 