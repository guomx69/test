import React, { useEffect } from 'react';

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
import { MapServices} from '../../cores/config/serviceMapList';
import { FeatureServices} from '../../cores/config/serviceFeatureList';
import  {VectorServices}  from '../../cores/config/serviceVectorList';
import { addMapServices, addFeatureService, addVectorService } from '../../libs/utils/mapServices';

//import '@arcgis/core/assets/esri/themes/light/main.css' //local version


const Home = () => {
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
        
    addMapServices(map,  Object.values(MapServices));
    
    addFeatureService(map, Object.values(FeatureServices));
    addVectorService(map, Object.values(VectorServices));
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
        >
          <ArcgisSearch position="top-right"></ArcgisSearch>
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

export default Home;