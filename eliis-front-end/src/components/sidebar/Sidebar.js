import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@mdi/react';
import {
  mdiViewDashboard,
  mdiBookOpenVariant,
  mdiCalendarCheck,
  mdiMessageTextOutline,
  mdiBullhornOutline,
  mdiClockOutline,
  mdiCalendarOutline,
  mdiFolderMultipleImage,
  mdiSilverware,
  mdiCloud,
  mdiFile,
  mdiContacts,
  mdiTextBoxCheck,
  mdiLifebuoy,
  mdiChevronRight,
  mdiChevronDown,
} from '@mdi/js';
import './Sidebar.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Sidebar = () => {
  const menuItems = [
    { to: '/dashboard', icon: mdiViewDashboard, label: 'Dashboard' },
    { to: '/diary', icon: mdiBookOpenVariant, label: 'Diary' },
    { to: '/plans', icon: mdiCalendarCheck, label: 'Plans' },
    { to: '/messages', icon: mdiMessageTextOutline, label: 'Messages' },
    { to: '/announcements', icon: mdiBullhornOutline, label: 'Announcements' },
    { to: '/workschedule', icon: mdiClockOutline, label: 'Work schedule' },
    { to: '/events', icon: mdiCalendarOutline, label: 'Events' },
    { to: '/gallery', icon: mdiFolderMultipleImage, label: 'Gallery' },
    { to: '/documents', icon: mdiCloud, label: 'Documents' },
    { to: '/foodmenu', icon: mdiSilverware, label: 'Food menu' },
    { to: '/applications', icon: mdiFile, label: 'Applications' },
    { to: '/contacts', icon: mdiContacts, label: 'Contacts' },
    { to: '/surveys', icon: mdiTextBoxCheck, label: 'Surveys' },
    { to: '/help', icon: mdiLifebuoy, label: 'Help' },
  ];

  const getDropdownItems = (label) => {
    switch (label) {
      case 'Diary':
        return (
          <>
            <Dropdown.Item href="/diary">Diary example</Dropdown.Item>
          </>
        );
      case 'Plans':
        return (
          <>
            <Dropdown.Item href="#/diary-action-1">Plans Action 1</Dropdown.Item>
            <Dropdown.Item href="#/diary-action-2">Plans Action 2</Dropdown.Item>
          </>
        );
      case 'Work schedule':
        return (
          <>
            <Dropdown.Item href="#/diary-action-1">Work schedule Action 1</Dropdown.Item>
            <Dropdown.Item href="#/diary-action-2">Work schedule Action 2</Dropdown.Item>
          </>
        ); 
      case 'Events':
        return (
          <>
            <Dropdown.Item href="/events">Calendar</Dropdown.Item>
            <Dropdown.Item href="#/diary-action-2">List view</Dropdown.Item>
          </>
        );
      case 'Food menu':
        return (
          <>
            <Dropdown.Item href="#/diary-action-1">Food menu Action 1</Dropdown.Item>
            <Dropdown.Item href="#/diary-action-2">Food menu Action 2</Dropdown.Item>
          </>
        );
      case 'Applications':
        return (
          <>
            <Dropdown.Item href="#/diary-action-1">Applications Action 1</Dropdown.Item>
            <Dropdown.Item href="#/diary-action-2">Applications Action 2</Dropdown.Item>
          </>
        );
      case 'Contacts':
        return (
          <>
            <Dropdown.Item href="#/diary-action-1">Contacts Action 1</Dropdown.Item>
            <Dropdown.Item href="#/diary-action-2">Contacts Action 2</Dropdown.Item>
          </>
        );
      case 'Surveys':
        return (
          <>
            <Dropdown.Item href="#/diary-action-1">Surveys Action 1</Dropdown.Item>
            <Dropdown.Item href="#/diary-action-2">Surveys Action 2</Dropdown.Item>
          </>
        );
      case 'Help':
        return (
          <>
            <Dropdown.Item href="#/diary-action-1">Help Action 1</Dropdown.Item>
            <Dropdown.Item href="#/diary-action-2">Help Action 2</Dropdown.Item>
          </>
        );
      default:
        return null;
    }
  };

  const ButtonLink = ({ to, label, icon }) => {
    const isDropdown = ['Diary', 'Plans', 'Work schedule', 'Events', 'Food menu', 'Applications', 'Contacts', 'Surveys', 'Help'].includes(label);
  
    // Local state to track the toggle status
    const [isDropdownOpen, setDropdownOpen] = React.useState(false);
  
    const handleDropdownToggle = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    if (isDropdown) {
      return (
        <Dropdown show={isDropdownOpen} onToggle={handleDropdownToggle}>
          <Dropdown.Toggle as={NavLink} className="custom-dropdown-toggle nav-link">
            <div className={`border rounded-lg font-semibold py-2 px-1 text-sm main-gradient ${isDropdownOpen ? 'dropdown-open' : ''}`}>
              <div className="menu-icon-container text-white rounded-md">
                <Icon path={icon} size={1} />
              </div>
              <span>{label}</span>
              <Icon path={isDropdownOpen ? mdiChevronDown : mdiChevronRight} size={0.8} className="chevron-icon"/>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {getDropdownItems(label)}
          </Dropdown.Menu>
        </Dropdown>
      );
    }
  
    return (
      <NavLink to={to} className="nav-link">
        <div className="border rounded-lg font-semibold py-2 px-1 text-sm main-gradient">
          <div className="menu-icon-container text-white rounded-md">
            <Icon path={icon} size={1} />
          </div>
          <span>{label}</span>
        </div>
      </NavLink>
    );
  };
  

  return (
    <div className="sidebar">
      <nav>
        <ul className="p-4 type-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <ButtonLink to={item.to} label={item.label} icon={item.icon} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
