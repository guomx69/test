import React from 'react';
import "@esri/calcite-components/dist/components/calcite-dialog";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-scrim";

import { 
  CalciteDialog, 
  CalciteButton,
  CalciteIcon,
  CalciteScrim 
} from "@esri/calcite-components-react";

import './confirmLogout.css';
import { DIALOG_TEXTS } from './constants';

const CompConfirmLogout = ({ isOpen, onClose, onConfirm }) => {
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
              <span>{DIALOG_TEXTS.HEADER}</span>
            </div>
            <button className="close-button" onClick={onClose}>
              <CalciteIcon 
                icon="x"
                scale="s"
              />
            </button>
          </div>
          <div className="confirm-content">
            <p>{DIALOG_TEXTS.CONTENT}</p>
            <span className="content-description">{DIALOG_TEXTS.DESCRIPTION}</span>
          </div>
          <div className="confirm-footer">
            <button className="confirm-button outline" onClick={onClose}>
              <CalciteIcon icon="x" scale="s" />
              {DIALOG_TEXTS.CANCEL_BUTTON}
            </button>
            <button className="confirm-button danger" onClick={onConfirm}>
              <CalciteIcon icon="sign-out" scale="s" />
              {DIALOG_TEXTS.LOGOUT_BUTTON}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompConfirmLogout; 