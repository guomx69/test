import React from 'react';
import { useOutletContext } from 'react-router-dom';
import MapViewer from '../components/MapViewer';
import DataViewer from '../components/DataViewer';


const AppData = () => {
  const {outletContType } = useOutletContext();
  //console.log("outletContent",outletContent);
  return (
    /*based on outletContent, render the appropriate component*/
    /**map viewer, data viewer and default please add the code for default*/
    outletContType === "map-viewer" ? <MapViewer /> : 
    outletContType === "data-viewer" ? <DataViewer /> : <div>
      <h1>App Data Menu Default Page</h1>
    </div>
  );
};

export default AppData; 