import React from 'react';

export const CalciteNavigation = ({ children, ...props }) => (
  <div data-testid="calcite-navigation" {...props}>
    {children}
  </div>
);

export const CalciteMenu = ({ children, ...props }) => (
  <div data-testid="calcite-menu" {...props}>
    {children}
  </div>
);

export const CalciteMenuItem = ({ 
  iconStart, 
  tooltipText, 
  breadcrumb,
  textEnabled,
  children, 
  ...props 
}) => (
  <div 
    data-testid="calcite-menu-item"
    data-icon-start={iconStart}
    data-tooltip-text={tooltipText}
    data-breadcrumb={breadcrumb}
    data-text-enabled={textEnabled}
    {...props}
  >
    {children}
  </div>
); 