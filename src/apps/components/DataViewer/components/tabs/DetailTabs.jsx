import React from 'react';

import { 
  CalciteTabs,
  CalciteTabNav,
  CalciteTabTitle,
  CalciteTab,
  CalciteLabel,
  CalciteInput,
  CalcitePanel
} from '@esri/calcite-components-react';

import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tab-title";
import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-panel";
import DetailTab from './DetailTab';
import DetailTabSubTitle from './DetailTabSubTitle';

const DetailTabs = ({ tabs, data }) => {

  //console.log("DetailTabs is called with data:", data, "and tabs:", tabs);
  return (
    <CalciteTabs>
      <CalciteTabNav slot="title-group">
        {Object.values(tabs).map((tab) => (
          <CalciteTabTitle 
            key={tab.id}
            tab={tab.id}
          >
            {tab.title}
          </CalciteTabTitle>
        ))}
      </CalciteTabNav>

      {
        data && Object.values(tabs).map((tab) =>(
            <CalciteTab key={tab.id} tab={tab.id}>
              <DetailTabSubTitle data={data} type={tab.subTitleType} />
              <DetailTab key={tab.id} tab={tab} data={tab.data(data)} />
            </CalciteTab>
          )
        )
      }
    </CalciteTabs>
  );
};

export default DetailTabs; 