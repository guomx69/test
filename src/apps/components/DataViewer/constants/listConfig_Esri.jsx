import React from 'react';

export const featureLayerConfigs = {
  WELL: {
    url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/CollegesUniversities/FeatureServer/0",
    outFields: ["*"],
    title: "US Colleges and Universities"
  }
};

export const featureTableConfigs = {
  WELL: {
            pageSize: 5,
            paginationEnabled: true,
            multiSortEnabled: true,
            visibleElements: {
              selectionColumn: true,
              menuItems: {
                  clearSelection: true,
                  refreshData: true,
                  toggleColumns: true
                  }
             },
            tableTemplate: { // autocastable to TableTemplate
            // The table template's columnTemplates are used to determine which attributes are shown in the table
              columnTemplates: [ // Array of either FieldColumnTemplates or GroupColumnTemplates
                  { // autocastable to FieldColumnTemplate
                      type: "field",
                      fieldName: "FID",
                      label: "ID",
                      // This field will not be shown in the table
                      visible: false
                  },
                  {
                      type: "field",
                      fieldName: "NAME",
                      label: "School Name",
                      // The table will be sorted by this column
                      // in ascending order
                      direction: "asc", // This is required for initial sorting
                      initialSortPriority: 1 // This columns get priority after Enrollment
                  },
                  {
                      type: "field",
                      fieldName: "TOT_ENROLL",
                      label: "Enrollment",
                      direction: "asc", // This is required for initial sorting
                      initialSortPriority: 0 // This column gets the highest sort priority
                  }
              ]
           }
  }
};  