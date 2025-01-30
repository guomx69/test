import React from 'react';

import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-menu-item";

import { 
  CalciteMenu,
  CalciteMenuItem
} from "@esri/calcite-components-react";

import { MENU_ITEMS } from './constants';
import './commonTasksBar.css';

const CommonTasksBar = ({ onCommonTaskItemClick }) => {
  return (
  
      <CalciteMenu slot="content-start">
        {MENU_ITEMS.map((item) => (
          <CalciteMenuItem 
            key={item.id}
            iconStart={item.icon}
            breadcrumb={item.breadcrumb}
            onClick={() => onCommonTaskItemClick(item.id)}
            data-testid={item.id}
          />
        ))}
      </CalciteMenu>
  );
};

export default CommonTasksBar; 