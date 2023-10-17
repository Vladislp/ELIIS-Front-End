import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiViewDashboard } from '@mdi/js';
import { mdiBookOpenVariant } from '@mdi/js';
import { mdiCalendarCheck } from '@mdi/js';
import { mdiMessageTextOutline } from '@mdi/js';
import { mdiBullhornOutline } from '@mdi/js';
import { mdiClockOutline } from '@mdi/js';
import { mdiCalendarOutline } from '@mdi/js';
import { mdiFolderMultipleImage } from '@mdi/js';
import { mdiSilverware } from '@mdi/js';
import { mdiCloud } from '@mdi/js';
import { mdiFile } from '@mdi/js';
import { mdiContacts } from '@mdi/js';
import { mdiTextBoxCheck } from '@mdi/js';
import { mdiLifebuoy } from '@mdi/js';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar sidebar-with-line gap-2'>
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

const menuItems = [
  { 
    to: '/dashboard', 
    icon: mdiViewDashboard, 
    label: 'Dashboard' 
  },
  { 
    to: '/diary', 
    icon: mdiBookOpenVariant, 
    label: 'Diary' 
  },
  { 
    to: '/plans', 
    icon: mdiCalendarCheck, 
    label: 'Plans' 
  },
  { 
    to: '/messages', 
    icon: mdiMessageTextOutline, 
    label: 'Messages' 
  },
  { 
    to: '/announcements', 
    icon: mdiBullhornOutline, 
    label: 'Announcements' 
  },
  { 
    to: '/workschedule', 
    icon: mdiClockOutline, 
    label: 'Work schedule' 
  },
  { to: '/events', icon: mdiCalendarOutline, label: 'Events' },
  { to: '/gallery', icon: mdiFolderMultipleImage, label: 'Gallery' },
  { to: '/documents', icon: mdiCloud, label: 'Documents' },
  { to: '/foodmenu', icon: mdiSilverware, label: 'Food menu' },
  { to: '/applications', icon: mdiFile, label: 'Applications' },
  { to: '/contacts', icon: mdiContacts, label: 'Contacts' },
  { to: '/surveys', icon: mdiTextBoxCheck, label: 'Surveys' },
  { to: '/help', icon: mdiLifebuoy, label: 'Help' },
];

export default Sidebar;