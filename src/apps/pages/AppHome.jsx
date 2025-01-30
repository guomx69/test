import React from 'react';
import { useOutletContext } from 'react-router-dom';

import CompMapWithPanels from '../components/MapWithPanels';
import  CompDataViewer  from '../components/DataViewer';

function AppHome() {
   const { outletContType } = useOutletContext();
   //console.log("yyyyyyyyy outletContent in AppHome",outletContent);
  
  return (
    outletContType === "data-viewer" ? <CompDataViewer /> :
    <CompMapWithPanels /> 
  )

}
export default AppHome;

