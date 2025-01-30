import React from 'react';
import "@esri/calcite-components/dist/components/calcite-icon";
import { CalciteIcon } from '@esri/calcite-components-react';

import './PanelHandle.css';

const CompLeftPanelHandler = ({ isExpanded, onToggle }) => {
  return (
    <div className="shell-panel-handle shell-panel-left-handle" onClick={onToggle}>
      <CalciteIcon
        scale="s"
        icon={isExpanded ? "chevrons-left" : "chevrons-right"}
      />
    </div>
  );
};

export const CompRightPanelHandler = ({ isExpanded, onToggle }) => {
  return (
    <div className="shell-panel-handle shell-panel-right-handle" onClick={onToggle}>
      <CalciteIcon 
        scale="s"
        icon={isExpanded ? "chevrons-right" : "chevrons-left"}
      />
    </div>
  );
};

export default CompLeftPanelHandler;