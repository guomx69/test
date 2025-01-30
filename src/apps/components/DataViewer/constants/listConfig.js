export const LIST_CONFIG = {
  WELL: {
    type: 'well',
    pageSize: 20,
    pageEnabled: true,
    headers: [
      { id: 'index', heading: '', width: '50px' },
      { id: 'checkbox', heading: '', width: '50px' },
      { id: 'api', heading: 'API', width: '120px' },
      { id: 'leaseName', heading: 'Lease Name', width: '200px' },
      { id: 'wellNumber', heading: 'Well Number', width: '150px' },
      { id: 'operatorName', heading: 'Operator Name', width: '200px' },
      { id: 'status', heading: 'Status', width: '100px' },
      { id: 'producingZone', heading: 'Producing Zone', width: '150px' },
      { id: 'fieldName', heading: 'Field Name', width: '150px' },
      { id: 'completionDate', heading: 'Completion Date', width: '150px' },
      { id: 'trs', heading: 'TRS', width: '150px' }
    ],
    cellValues: {
      index: (item) => item.index,
      checkbox: (item) => null,
      api: (item) => item.api,
      leaseName: (item) => item.leaseName,
      wellNumber: (item) => item.wellNumber,
      operatorName: (item) => item.operatorName,
      status: (item) => item.status,
      producingZone: (item) => item.producingZone,
      fieldName: (item) => item.fieldName,
      completionDate: (item) => item.completionDate,
      trs: (item) => item.trs
    },
    endpoint: '/api/v1/wells/count/5'
  },
  LEASE: {
    type: 'lease',
    headers: [
      { id: 'index', heading: '', width: '50px' },
      { id: 'checkbox', heading: '', width: '50px' },
      { id: 'leaseNumber', heading: 'Lease #', width: '120px' },
      { id: 'leaseName', heading: 'Lease Name', width: '200px' },
      { id: 'leaseType', heading: 'Type', width: '150px' },
      { id: 'operator', heading: 'Operator', width: '200px' },
      { id: 'status', heading: 'Status', width: '100px' },
      { id: 'field', heading: 'Field', width: '150px' }
    ],
    cellValues: {
      index: (item) => item.index,
      checkbox: (item) => null,
      leaseNumber: (item) => item.leaseNumber,
      leaseName: (item) => item.leaseName,
      leaseType: (item) => item.leaseType,
      operator: (item) => item.operator,
      status: (item) => item.status,
      field: (item) => item.field
    },
    endpoint: '/api/v1/leases/count/4'
  },
  AGREEMENT: {
    type: 'agreement',
    headers: [
      { id: 'index', heading: '', width: '50px' },
      { id: 'checkbox', heading: '', width: '50px' },
      { id: 'agreementNumber', heading: 'Agreement #', width: '120px' },
      { id: 'agreementName', heading: 'Agreement Name', width: '200px' },
      { id: 'agreementType', heading: 'Type', width: '150px' },
      { id: 'status', heading: 'Status', width: '100px' },
      { id: 'effectiveDate', heading: 'Effective Date', width: '150px' }
    ],
    cellValues: {
      index: (item) => item.index,
      checkbox: (item) => null,
      agreementNumber: (item) => item.agreementNumber,
      agreementName: (item) => item.agreementName,
      agreementType: (item) => item.agreementType,
      status: (item) => item.status,
      effectiveDate: (item) => item.effectiveDate
    },
    endpoint: '/api/v1/agreements/count/4'
  },
  TRACT: {
    type: 'tract',
    headers: [
      { id: 'index', heading: '', width: '50px' },
      { id: 'checkbox', heading: '', width: '50px' },
      { id: 'tractNumber', heading: 'Tract #', width: '120px' },
      { id: 'tractName', heading: 'Tract Name', width: '200px' },
      { id: 'acres', heading: 'Acres', width: '100px' },
      { id: 'status', heading: 'Status', width: '100px' },
      { id: 'county', heading: 'County', width: '150px' }
    ],
    cellValues: {
      index: (item) => item.index,
      checkbox: (item) => null,
      tractNumber: (item) => item.tractNumber,
      tractName: (item) => item.tractName,
      acres: (item) => item.acres,
      status: (item) => item.status,
      county: (item) => item.county
    },
    endpoint: '/api/v1/tracts/count/4'
  }
}; 