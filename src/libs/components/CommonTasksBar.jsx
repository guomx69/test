import React from 'react';
import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-menu-item";

import { 
  CalciteNavigation,
  CalciteMenu,
  CalciteMenuItem
} from "@esri/calcite-components-react";

const CommonTasksBar = () => {
  return (
    <CalciteNavigation slot="navigation-secondary">
      <calcite-menu slot="content-start">
        <calcite-menu-item 
          icon-start="magnifying-glass-plus" 
          tooltip-text="Zoom In"
        />
        <calcite-menu-item 
          icon-start="magnifying-glass-minus" 
          tooltip-text="Zoom Out"
        />
        <calcite-menu-item 
          icon-start="pan" 
          tooltip-text="Pan"
        />
        <calcite-menu-item 
          icon-start="zoom-in-fixed" 
          tooltip-text="Fixed Zoom In"
        />
        <calcite-menu-item 
          icon-start="zoom-out-fixed" 
          tooltip-text="Fixed Zoom Out"
        />
        <calcite-menu-item 
          icon-start="information" 
          tooltip-text="Identify"
        />
        <calcite-menu-item 
          icon-start="measure" 
          tooltip-text="Measure"
        />
        <calcite-menu-item 
          icon-start="select" 
          tooltip-text="Select Feature"
        />
        <calcite-menu-item 
          icon-start="coordinate-system" 
          tooltip-text="MapViewer"
          text="Map Mode"
        />
        <calcite-menu-item 
          icon-start="table" 
          tooltip-text="DataViewer"
          text="Data Mode"
        />
      </calcite-menu>
    </CalciteNavigation>
  );
};

export default CommonTasksBar; 