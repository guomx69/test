import React from 'react';
import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-menu-item";

import { 
  CalciteNavigation,
  CalciteMenu,
  CalciteMenuItem
} from "@esri/calcite-components-react";

import { MENU_ITEMS } from './constants';
import './commonTasksBar.css';

const CommonTasksBar = () => {
  return (
    <CalciteNavigation slot="navigation-secondary">
      <CalciteMenu slot="content-start">
        {MENU_ITEMS.map((item) => (
          <CalciteMenuItem 
            key={item.id}
            iconStart={item.icon}
            tooltipText={item.tooltip}
            breadcrumb={item.breadcrumb}
            textEnabled={false}
          />
        ))}
      </CalciteMenu>
    </CalciteNavigation>
  );
};

export default CommonTasksBar; 