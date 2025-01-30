import React, { useState } from 'react';
import { 
  CalciteTabs,
  CalciteTabNav,
  CalciteTabTitle,
  CalciteTab
} from '@esri/calcite-components-react';

import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tab-title";
import "@esri/calcite-components/dist/components/calcite-tab";

import WellDataViewer from './components/WellDataViewer';
import LeaseDataViewer from './components/LeaseDataViewer';
import AgreementDataViewer from './components/AgreementDataViewer';
import TractDataViewer from './components/TractDataViewer';
import './DataViewer.css';

const DataViewer = () => {
  const setActiveTab = (tab) => {
    console.log(tab);
  };

  return (
    <div className="data-viewer-root">
      <CalciteTabs>
        <CalciteTabNav slot="title-group">
          <CalciteTabTitle 
            tab="wells"
            
            onCalciteTabsActivate={() => setActiveTab("wells")}
          >
            Wells
          </CalciteTabTitle>
          <CalciteTabTitle 
            tab="leases"
            
            onCalciteTabsActivate={() => setActiveTab("leases")}
          >
            Leases
          </CalciteTabTitle>
          <CalciteTabTitle 
            tab="agreements"
            onCalciteTabsActivate={() => setActiveTab("agreements")}
          >
            Agreements
          </CalciteTabTitle>
          <CalciteTabTitle 
            tab="tracts"
            onCalciteTabsActivate={() => setActiveTab("tracts")}
          >
            Tracts
          </CalciteTabTitle>
        </CalciteTabNav>

        <CalciteTab tab="wells">
          <WellDataViewer />
        </CalciteTab>
        <CalciteTab tab="leases">
          <LeaseDataViewer />
        </CalciteTab>
        <CalciteTab tab="agreements" >
          <AgreementDataViewer />
        </CalciteTab>
        <CalciteTab tab="tracts" >
          <TractDataViewer />
        </CalciteTab>
      </CalciteTabs>
    </div>
  );
};

export default DataViewer; 