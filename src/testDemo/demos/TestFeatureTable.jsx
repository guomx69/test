import React, { useEffect, useRef } from 'react';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import FeatureTable from "@arcgis/core/widgets/FeatureTable";

import { CalcitePanel } from '@esri/calcite-components-react';
import "@esri/calcite-components/dist/components/calcite-panel";

const TestFeatureTable = () => {
    const tableRef = useRef(null);
  
    useEffect(() => {
      if (tableRef.current) {
        const featureLayer = new FeatureLayer({
            url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/CollegesUniversities/FeatureServer/0",
            outFields: ["FID", "NAME", "TOT_ENROLL"],
            title: "US Colleges and Universities"
        });
  
        const table = new FeatureTable({
            container: tableRef.current,
            layer: featureLayer,
            pageSize: 20,
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
            tableTemplate: {
              columnTemplates: [
                {
                  type: "field",
                  fieldName: "FID",
                  label: "ID",
                  visible: false
                },
                {
                  type: "field",
                  fieldName: "NAME",
                  label: "School Name",
                  direction: "asc",
                  initialSortPriority: 1
                },
                {
                  type: "field",
                  fieldName: "TOT_ENROLL",
                  label: "Enrollment",
                  direction: "asc",
                  initialSortPriority: 0
                }
              ]
            }
        });
      }

      return () => {
        tableRef.current = null;
      };
    }, []);
  
    return (
        <CalcitePanel style={{ height: '40em' }}>
            <div ref={tableRef} />
        </CalcitePanel>
    );
};
  
export default TestFeatureTable;