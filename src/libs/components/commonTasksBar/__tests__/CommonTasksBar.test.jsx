import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommonTasksBar from '../../commonTasksBar';
import { MENU_ITEMS } from '../constants';

// Mock the Calcite components
jest.mock('@esri/calcite-components-react', () => ({
  CalciteNavigation: ({ children, ...props }) => (
    <div data-testid="calcite-navigation" {...props}>{children}</div>
  ),
  CalciteMenu: ({ children, ...props }) => (
    <div data-testid="calcite-menu" {...props}>{children}</div>
  ),
  CalciteMenuItem: ({ 
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
  )
}));

describe('CommonTasksBar', () => {
  it('renders all menu items', () => {
    render(<CommonTasksBar />);
    
    const menuItems = screen.getAllByTestId('calcite-menu-item');
    expect(menuItems).toHaveLength(MENU_ITEMS.length);
  });

  it('renders with correct icons', () => {
    render(<CommonTasksBar />);
    
    const menuItems = screen.getAllByTestId('calcite-menu-item');
    menuItems.forEach((menuItem, index) => {
      expect(menuItem).toHaveAttribute('data-icon-start', MENU_ITEMS[index].icon);
    });
  });

  it('applies breadcrumb property correctly', () => {
    render(<CommonTasksBar />);
    
    const menuItems = screen.getAllByTestId('calcite-menu-item');
    menuItems.forEach((menuItem, index) => {
      if (MENU_ITEMS[index].breadcrumb) {
        expect(menuItem).toHaveAttribute('data-breadcrumb', 'true');
      }
    });
  });

  it('has tooltips for all menu items', () => {
    render(<CommonTasksBar />);
    
    const menuItems = screen.getAllByTestId('calcite-menu-item');
    menuItems.forEach((menuItem, index) => {
      expect(menuItem).toHaveAttribute('data-tooltip-text', MENU_ITEMS[index].tooltip);
    });
  });

  it('has textEnabled set to false for all items', () => {
    render(<CommonTasksBar />);
    
    const menuItems = screen.getAllByTestId('calcite-menu-item');
    menuItems.forEach(menuItem => {
      expect(menuItem).toHaveAttribute('data-text-enabled', 'false');
    });
  });
}); 