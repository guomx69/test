import React from 'react';
import { 
  CalciteButton,
  CalciteActionBar,
  CalciteActionGroup
} from '@esri/calcite-components-react';

import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action-group";

import './WellDataViewerDetailsPanel.css';

const WellDataViewerDetailsPanel = ({
  onViewWellTypes
}) => {
  return (
    <CalciteActionBar layout="horizontal" expandDisabled>
      <CalciteActionGroup>
        <fieldset className="button-fieldset">
          <legend>Well View</legend>
          <CalciteButton
            scale="m"
            onClick={() => onViewWellTypes("SITE_DATA")}
            className="details-button"
          >
            Site Data
          </CalciteButton>
          <CalciteButton
            scale="m"
            onClick={() => onViewWellTypes("COMPLETION_DATA")}
            className="details-button"
          >
            Completion Data
          </CalciteButton>
        </fieldset>
      </CalciteActionGroup>

      <CalciteActionGroup>
        <fieldset className="button-fieldset">
          <legend>Production View</legend>
          <CalciteButton
            scale="m"
            onClick={() => onViewWellTypes("PRODUCTION_BY_COMPLETION_DATA")}
            className="details-button"
          >
            By Completion
          </CalciteButton>
          <CalciteButton
            scale="m"
            onClick={() => onViewWellTypes("PRODUCTION_BY_WELL_SITE")}
            className="details-button"
          >
            By Well Site
          </CalciteButton>
          <CalciteButton
            scale="m"
            onClick={() => onViewWellTypes("PRODUCTION_BY_SUM_CHECK_ITEMS")}
            className="details-button"
          >
            Sum of Checked Items
          </CalciteButton>
        </fieldset>
      </CalciteActionGroup>
    </CalciteActionBar>
  );
};

export default WellDataViewerDetailsPanel; 