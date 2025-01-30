import React, { useState } from 'react';
import "@esri/calcite-components/dist/components/calcite-button"
import "@esri/calcite-components/dist/components/calcite-alert";
import { CalciteAlert, CalciteButton } from "@esri/calcite-components-react";

export const AlertExamples = () => {
  const [alerts, setAlerts] = useState([
    {
      id: '1',
      open: true,
      kind: 'brand',
      icon: true,
      label: 'Brand Alert',
      message: 'This is a brand message alert',
      autoClose: false
    },
    {
      id: '2',
      open: true,
      kind: 'danger',
      icon: true,
      label: 'Danger Alert',
      message: 'This is a danger alert with auto-close',
      autoClose: true,
      autoCloseDuration: 'medium'
    },
    {
      id: '3',
      open: true,
      kind: 'success',
      icon: true,
      label: 'Success Alert',
      message: 'Operation completed successfully',
      autoClose: false
    },
    {
      id: '4',
      open: true,
      kind: 'warning',
      icon: true,
      label: 'Warning Alert',
      message: 'Please review before proceeding',
      autoClose: false
    }
  ]);

  const handleClose = (alertId) => {
    setAlerts(alerts.map(alert => 
      alert.id === alertId ? { ...alert, open: false } : alert
    ));
  };

  const handleReset = () => {
    setAlerts(alerts.map(alert => ({ ...alert, open: true })));
  };

  return (
    <div className="p-4 space-y-4">
      {/* Alert Container */}
      <div className="space-y-2">
        {alerts.map((alert) => (
          <CalciteAlert
            key={alert.id}
            open={alert.open}
            kind={alert.kind}
            icon={alert.icon}
            label={alert.label}
            autoClose={alert.autoClose}
            autoCloseDuration={alert.autoCloseDuration}
            onCalciteAlertClose={() => handleClose(alert.id)}
          >
            <div slot="title">{alert.label}</div>
            <div slot="message">{alert.message}</div>
            {alert.kind === 'warning' && (
              <CalciteButton
                slot="link"
                kind="neutral"
                scale="s"
                appearance="outline"
              >
                Learn More
              </CalciteButton>
            )}
          </CalciteAlert>
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <CalciteButton
          appearance="solid"
          kind="brand"
          onClick={handleReset}
        >
          Reset Alerts
        </CalciteButton>
      </div>

      {/* Alert Creation Demo */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Alert Types</h3>
        <div className="grid grid-cols-2 gap-4">
          <CalciteAlert
            kind="brand"
            icon={true}
            open={true}
            scale="s"
          >
            <div slot="title">Brand Alert</div>
            <div slot="message">Small scale brand alert</div>
          </CalciteAlert>

          <CalciteAlert
            kind="danger"
            icon={true}
            scale="m"
            open={true}
          >
            <div slot="title">Danger Alert</div>
            <div slot="message">Medium scale danger alert</div>
          </CalciteAlert>

          <CalciteAlert
            kind="success"
            icon={true}
            scale="l"
            open={true}
          >
            <div slot="title">Success Alert</div>
            <div slot="message">Large scale success alert</div>
          </CalciteAlert>

          <CalciteAlert
            kind="warning"
            icon={true}
            scale="l"
            open={true}
          >
            <div slot="title">Warning Alert</div>
            <div slot="message">Large scale warning alert</div>
            <CalciteButton
              slot="link"
              scale="s"
              appearance="outline"
            >
              Action
            </CalciteButton>
          </CalciteAlert>
        </div>
      </div>
    </div>
  );
};
