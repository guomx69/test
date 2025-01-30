import React from 'react';
import { 
  CalciteTableRow,
  CalciteTableCell
} from '@esri/calcite-components-react';

import "@esri/calcite-components/dist/components/calcite-table-row";
import "@esri/calcite-components/dist/components/calcite-table-cell";

// Feature Layer Data Source Configuration
export const esriFtLyerConfig = {
    title: "Feature Layer Data",
    columns: [
      { field: 'FID', title: 'ID' },
      { field: 'MAGNITUDE', title: 'Magnitude' },
      { field: 'DEPTH', title: 'Depth' },
      { field: 'PLACE', title: 'Place' },
      { field: 'UTC_DATETIME', title: 'Time' }
    ],
    fetchData: async (startItem, pageSize, custParams) => {
      const featureLayerUrl = "https://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/Earthquakes/FeatureServer/0";
      //const start = (page - 1) * pageSize;
  
      // Get total count
      const countResponse = await fetch(
        `${featureLayerUrl}/query?where=1=1&returnCountOnly=true&f=json`
      );
      const countData = await countResponse.json();
  
      // Get paginated data
      const whereClause = custParams.whereClause || "1=1";
      const dataResponse = await fetch(
        `${featureLayerUrl}/query?where=${whereClause}&outFields=*&returnGeometry=false&orderByFields=MAGNITUDE DESC&resultOffset=${startItem}&resultRecordCount=${pageSize}&f=json`
      );
      const data = await dataResponse.json();
  
      return {
        items: data.features,
        total: countData.count
      };
    },
    renderRow: (feature) => (
        <>
        <CalciteTableCell>{feature.attributes.FID}</CalciteTableCell>
        <CalciteTableCell>{feature.attributes.MAGNITUDE?.toFixed(1)}</CalciteTableCell>
        <CalciteTableCell>{feature.attributes.DEPTH?.toFixed(1)} km</CalciteTableCell>
        <CalciteTableCell>{feature.attributes.PLACE}</CalciteTableCell>
        <CalciteTableCell>
          {new Date(feature.attributes.UTC_DATETIME).toLocaleString()}
        </CalciteTableCell>
        </>
    )
  };
  
  // External API Data Source Configuration
  export const externalApiConfig = {
    title: "External API Data",
    columns: [
   
      { field: 'id', title: 'ID' },
      { field: 'title', title: 'Title' },
      { field: 'body', title: 'Content' }
    ],
    fetchData: async (startItem, pageSize, custParams) => { console.log("fetchData", startItem, pageSize, custParams);
      // Get total count
      const countResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const countData = await countResponse.json();
  
      // Get paginated data
      //const start = startItem;
      const dataResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${startItem}&_limit=${pageSize}&_where=${custParams.whereClause}`
      );
      const data = await dataResponse.json();
      const result = {
        items: data,
        total: countData.length
      };
      console.log("result", result);
      return result;
    },
    renderRow: (post) => (
        <>
        <CalciteTableCell>{post.id}</CalciteTableCell>
        <CalciteTableCell>{post.title}</CalciteTableCell>
        <CalciteTableCell>{post.body?.substring(0, 100)}...</CalciteTableCell>
        </>

    )
  };