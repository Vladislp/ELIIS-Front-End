import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sidebar from '../../../components/sidebar/Sidebar';

describe('Sidebar Component', () => {
  it('renders menu items', () => {
    render(<Sidebar />);
    
    // Replace these with actual test data as needed
    const menuItems = [
      { to: '/dashboard', label: 'Dashboard' },
      { to: '/diary', label: 'Diary' },
      // Add other menu items
    ];

    menuItems.forEach((item) => {
      const menuItemElement = screen.getByText(item.label);
      expect(menuItemElement).toBeInTheDocument();
    });
  });

  it('toggles dropdown on click', () => {
    render(<Sidebar />);

    // Replace this with actual test data as needed
    const dropdownLabel = 'Diary';

    // Find the dropdown toggle button
    const dropdownToggleButton = screen.getByText(dropdownLabel);

    // Simulate a click on the dropdown toggle button
    userEvent.click(dropdownToggleButton);

    // Verify that the dropdown menu is visible
    const dropdownMenu = screen.getByRole('menu');
    expect(dropdownMenu).toBeInTheDocument();

    // Simulate a click again to close the dropdown
    userEvent.click(dropdownToggleButton);

    // Verify that the dropdown menu is not visible
    expect(dropdownMenu).not.toBeInTheDocument();
  });
});
