import React, { useEffect, useRef, useState } from 'react';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import FeatureTable from "@arcgis/core/widgets/FeatureTable";
import { CalcitePanel } from '@esri/calcite-components-react';
import "@esri/calcite-components/dist/components/calcite-panel";
import "./CommonList_Ft.css";

const CommonListFt = ({ updateCheckedRows, onRowSelectionChange,featureLayerConfig, featureTableConfig, custParams}) => {
    const tableRef = useRef(null);
    const [checkedRows, setCheckedRows] = useState(new Set());
    const ftTableRef = useRef(null);

    //console.log('CommonListFt  is called with custParams', custParams);
  
    useEffect(() => { // console.log('useEffect is called with custParams', custParams);
     
      if (tableRef.current) {
        const featureLayer = new FeatureLayer(featureLayerConfig);
  
        ftTableRef.current = new FeatureTable({
            container: tableRef.current,
            layer: featureLayer,
            ...featureTableConfig,
            ...custParams,
            highlightIds: new Set(),
        });

        const cellClickHandler = ftTableRef.current.on("cell-click", (event) => {
          const {fieldName,objectId} = event; console.log("cellClickHandler is called with event", fieldName);
          if(fieldName !== undefined){ //only for non checkbox column
            onRowSelectionChange(objectId);
          }
        });

        const highlightIdsHandler = ftTableRef.current.highlightIds.on("change", (event) => {
          if(event.added.length > 0){
            setCheckedRows(checkedRows.add(event.added[0]));
            updateCheckedRows(checkedRows);
          }
          if(event.removed.length > 0){
            setCheckedRows(checkedRows.delete(event.removed[0]));
            updateCheckedRows(checkedRows);
          }
        });
        tableRef.current = null;
        //console.log("return is called with custParams", ftTable);
      }
      else{
        console.log("YYYY CommonListFt second call is called with custParams", ftTableRef.current, custParams);
        ftTableRef.current.sortColumn("NAME","desc");
      }
      
      return () => { console.log("XXXXX   CommonListFt cleanup function is called");
        //tableRef.current = null;
        //cellClickHandler?.remove(); 
        //cellClickHandler = null;
        //highlightIdsHandler?.remove();
        //highlightIdsHandler = null;
        //ftTable?.destroy();
        //ftTable = null;
      };
    }, [custParams]);

    return (
        <CalcitePanel>
            <div className="feature-table-container" ref={tableRef} />
        </CalcitePanel>
    );
};

export default CommonListFt;
