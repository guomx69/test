import React from 'react';
import { render, screen } from '@testing-library/react';
import CommonTasksBar from '../layouts/TaskBars/commonTasksBar/CommonTasksBar';
import { MENU_ITEMS } from '../layouts/TaskBars/commonTasksBar/constants';

test('renders CommonTasksBar component', async () => {
  const { container } = render(<CommonTasksBar />);
  //screen.debug(); // Log the rendered output to the console

  // Check for menu items using container
  const items = container.querySelectorAll('[icon-start]');
  const countMenuItems = items.length; // Count the menu items directly
  
  //console.log(MENU_ITEMS.length,countMenuItems);
  MENU_ITEMS.forEach((item) => {
    const menuItem = screen.getByTestId(item.id);
    expect(menuItem.getAttribute('data-testid')).toEqual(item.id);
  });



  expect(countMenuItems).toEqual(MENU_ITEMS.length);
}); 