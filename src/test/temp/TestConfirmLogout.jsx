import "@esri/calcite-components/dist/calcite/calcite.css";
// import "@esri/calcite-components/dist/components/calcite-dialog";
// import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-scrim";

import React from 'react';
import { 
  CalciteIcon,
  CalciteScrim 
} from "@esri/calcite-components-react";

import './confirmLogout.css';

const TestConfirmLogout = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  
  return (
    <>
      <CalciteScrim />
      <div className="confirm-logout-wrapper">
        <div className="confirm-logout-container">
          <div className="confirm-header">
            <div className="header-content">
              <CalciteIcon 
                icon="sign-out"
                scale="m"
                className="header-icon"
              />
              <span>Confirm Logout</span>
            </div>
            <button className="close-button" onClick={onClose}>
              <CalciteIcon 
                icon="x"
                scale="s"
              />
            </button>
          </div>
          <div className="confirm-content">
            <p>Are you sure you want to log out?</p>
            <span className="content-description">You will need to sign in again to access your account.</span>
          </div>
          <div className="confirm-footer">
            <button className="confirm-button outline" onClick={onClose}>
              <CalciteIcon icon="x" scale="s" />
              Cancel
            </button>
            <button className="confirm-button danger" onClick={onConfirm}>
              <CalciteIcon icon="sign-out" scale="s" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestConfirmLogout; 