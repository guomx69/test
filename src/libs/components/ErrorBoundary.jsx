// Error boundary wrapper component
import React, { useState } from 'react';
//import "@esri/calcite-components/dist/calcite/calcite.css";

import "@esri/calcite-components/dist/components/calcite-button"
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-alert";

import { 
  CalcitePanel, 
  CalciteButton, 
  CalciteAlert
} from "@esri/calcite-components-react";
import { useErrorBoundary } from "./useErrorBoundary";


export const ErrorBoundary = ({ children }) => {
    const [error, showAlert, handleCatch, resetError] = useErrorBoundary();
    
    if (error) {
      return (
        <CalcitePanel padding="none">
          <CalciteAlert
            open={showAlert}
            kind="danger"
            icon="exclamation-mark-triangle"
            label="Error Alert"
            placement="bottom"
            scale="l"
            textAlign="center"
          >
            <div slot="title">Something went wrong</div>
            <div slot="message">{error.message}</div>
            <CalciteButton
              slot="link"
              kind="danger"
              appearance="outline"
              onClick={resetError}
              scale="l"
            >
              Try again
            </CalciteButton>
          </CalciteAlert>
        </CalcitePanel>
      );
    }
  
    try {
      return children;
    } catch (error) {
      handleCatch(error);
      return null;
    }
  };