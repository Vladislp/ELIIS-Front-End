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
} from '@mdi/js';
import './Sidebar.css';

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

  return (
    <div className='sidebar'>
      <nav>
        <ul className="p-4 type-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.to} className="nav-link">
                <div className="border rounded-lg font-semibold py-2 px-1 text-sm main-gradient">
                  <div className="menu-icon-container text-white rounded-md">
                    <Icon path={item.icon} size={1} />
                  </div>
                  <span>{item.label}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
