import React, { useState } from 'react';

// Configure ArcGIS API


import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-basemap-gallery";
import "@arcgis/map-components/dist/components/arcgis-layer-list";
import "@arcgis/map-components/dist/components/arcgis-search";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-expand";
import "@arcgis/map-components/dist/components/arcgis-zoom";
import { 
  ArcgisMap, 
  ArcgisBasemapGallery,
  ArcgisLayerList,
  ArcgisSearch,
  ArcgisLegend,
  ArcgisExpand,
  ArcgisZoom
} from "@arcgis/map-components-react";

import { AppStatus } from '../../cores/config/config';

//import '@arcgis/core/assets/esri/themes/light/main.css' //local version
import './webMapId.css'; //disable cloud version  

const WebMapId = () => {
  const onArcGISViewClick = (event) => {
    console.log(event,"from arcgis map");
  };
  const onArcgisLayerListClick = (event) => {
    console.log(event,"from arcgis layer list");
  };
  const onArcgisBasemapGalleryClick = (event) => {
    console.log(event,"from arcgis basemap gallery");
  };
  const onArcgisSearchClick = (event) => {
    console.log(event,"from arcgis search work");
  };
  const onArcgisViewReadyChange = (event) => {
    console.log(event,"from arcgis view ready change");
    const { map, view } = event.target;
        

    // Get a reference to the arcgis-layer-list element
    // const arcgisLayerList = document.querySelector("arcgis-layer-list");
    // // Set the listItemCreatedFunction to add a legend to each list item
    // arcgisLayerList.listItemCreatedFunction = (event) => {
    //   const { item } = event;
    //   // if (item.layer.type !== "group") {
    //   //   item.panel = {
    //   //     content: "legend"
    //   //   };
    //   // }
    //   //console.log(item,"from layer list");
    // };
  };
 
  return (
   
      <div className="map-container">
        <ArcgisMap
          basemap="arcgis-topographic"
          zoom={AppStatus.zoom}
          center={AppStatus.center}
          onArcgisViewReadyChange={onArcgisViewReadyChange}
          onArcgisViewClick={onArcGISViewClick}
          itemId="f135c735ac3b47799c01aab44f692875"
        >
       
          <ArcgisZoom position="top-right">
          </ArcgisZoom>
          <ArcgisExpand  position="top-right">
              <ArcgisBasemapGallery />
          </ArcgisExpand>
          <ArcgisExpand position="bottom-right">
            <ArcgisLegend ></ArcgisLegend>
          </ArcgisExpand>
          <ArcgisExpand  position="top-left">
                <ArcgisLayerList />
          </ArcgisExpand>
        
        </ArcgisMap>

      </div>
  );
};

export default WebMapId;