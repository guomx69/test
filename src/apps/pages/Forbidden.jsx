import React from 'react';
import { Link } from 'react-router-dom';

import "@esri/calcite-components/dist/components/calcite-button"
import "@esri/calcite-components/dist/components/calcite-alert";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-shell";
import { 
  CalciteAlert, 
  CalciteButton, 
  CalciteIcon,
  CalciteShell
} from '@esri/calcite-components-react';

//import "./Forbidden.css";

// Need to import Calcite CSS and register custom elements
// import "@esri/calcite-components/dist/calcite/calcite.css";
// import { defineCustomElements } from '@esri/calcite-components/dist/loader';
// defineCustomElements(window);

const Forbidden = () => {
  return (
         <CalciteShell>
              <div className="forbidden-container calcite-mode-light">
                  <div className="forbidden-content">
                    <CalciteAlert 
                      kind="danger"
                      icon="exclamation-mark-triangle"
                      open
                      label="Forbidden Access"
                    >
                      <div slot="title">403 - Access Forbidden</div>
                      <div slot="message">Sorry, you are not authorized to access this page.</div>
                    </CalciteAlert>

                    <div className="action-container">
                      <Link to="/" className="home-link">
                        <CalciteButton 
                          icon-start="home"
                          width="full"
                          appearance="solid"
                          color="blue"
                        >
                          Return to Home Page
                        </CalciteButton>
                      </Link>
                    </div>

                    <div className="icon-container">
                      <CalciteIcon 
                        icon="lock"
                        scale="l"
                      />
                    </div>
                  </div>
                </div>
          </CalciteShell>
  );
};

export default Forbidden;