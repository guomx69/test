import React from 'react';
import { 
  CalciteAction,
  CalciteLabel,
  CalciteSelect,
  CalciteOption,
  CalciteActionBar,
  CalciteActionGroup,
  CalcitePagination,
  CalciteButton,
  CalciteSwitch
} from '@esri/calcite-components-react';

import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-option";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action-group";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-pagination";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-switch";

import './CommonListPanel.css';

const CommonListPanel = ({ 
  sortCriteria,
  selectionCriteria,
  onSortChange,
  onSelectionChange,
  onApplySort,
  onApplySelection,

  onCustomSort,
  onMoveCheckedToTop,
  onSelectCurrent,
  onFlashCurrent,
  onZoomToCurrent,
  onCheckAll,
  onUncheckAll,
  onToggleReverseChecked,
  onIsPigination
}) => {
  return (
    <>
      <CalciteActionBar layout="horizontal" expandDisabled="true">
        <CalciteActionGroup>
          <div className="label-select-group">
            <CalciteLabel>Sort By:</CalciteLabel>
            <CalciteSelect
              value={sortCriteria}
              onCalciteSelectChange={(e) => onSortChange(e.target.value)}
            >
              <CalciteOption value="Formation at Td">Formation at TD</CalciteOption>
              <CalciteOption value="Completion Date">Completion Date</CalciteOption>
              <CalciteOption value="API">API</CalciteOption>
            </CalciteSelect>
          </div>
          <CalciteButton
            width="auto"
            onClick={onApplySort}
          >
            Apply
          </CalciteButton>
        </CalciteActionGroup>
        <CalciteActionGroup>
          <div className="label-select-group">
            <CalciteLabel>Selection:</CalciteLabel>
            <CalciteSelect
              value={selectionCriteria}
              onCalciteSelectChange={(e) => onSelectionChange(e.target.value)}
            >
              <CalciteOption value="2008 to 2010 Completion Date">2008 to 2010 Completion Date</CalciteOption>
              <CalciteOption value="2011 to 2013 Completion Date">2011 to 2013 Completion Date</CalciteOption>
              <CalciteOption value="2014 to 2016 Completion Date">2014 to 2016 Completion Date</CalciteOption>
            </CalciteSelect>
          </div>
          <CalciteButton
            width="auto"
            onClick={onApplySelection}
          >
            Apply
          </CalciteButton>
        </CalciteActionGroup>
      </CalciteActionBar>
      <CalciteActionBar layout="horizontal" expanded="false">
       
        <CalciteActionGroup label="Selection">
           <calcite-label layout="inline">
            <calcite-switch label="Pagination" name="pagination" checked="true" 
                onClick={(e) => onIsPigination(e)}  
                onCalciteSwitchChange={(e) => onIsPigination(e)}> 
            </calcite-switch>
            Pagination
          </calcite-label>

          <CalciteAction
            onClick={onCheckAll}
            icon="list-check-all"
            text="Check All"
          />
          <CalciteAction
            onClick={onUncheckAll}
            icon="unlock"
            text="Uncheck All"
          />
           
          <CalciteAction
            onClick={onToggleReverseChecked}
            icon="reverse-f"
            text="Reverse Selection"
          />
           <CalciteAction
            onClick={onMoveCheckedToTop}
            icon="chevrons-up"
            text="Move Checked Items to Top"
          />
        </CalciteActionGroup>
        <CalciteActionGroup label="Actions">
          <CalciteAction
            onClick={onCustomSort}
            icon="a-z"
            text="Custom Sort"
          />
         
          <CalciteAction
            onClick={onSelectCurrent}
            icon="cursor"
            text="Select Current Item"
          />
          <CalciteAction
            onClick={onFlashCurrent}
            icon="flash"
            text="Flash Current Item"
          />
          <CalciteAction
            onClick={onZoomToCurrent}
            icon="magnifying-glass-plus"
            text="Zoom to Current Item"
          />
          <CalciteAction
            
            icon="list-check-all"
            text="Sell All"
          />
        </CalciteActionGroup>
       
      </CalciteActionBar>
    </>
  );
};

export default CommonListPanel; 