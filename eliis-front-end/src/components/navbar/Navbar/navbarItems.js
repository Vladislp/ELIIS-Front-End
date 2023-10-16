import React from 'react';
import Icon from '@mdi/react';
import { NavLink } from 'react-router-dom';
import { mdiBellCircle, mdiMessageText, mdiBullhorn, mdiCalendarBlank, mdiCloud } from '@mdi/js';
import Col from 'react-bootstrap/Col';

const NavItems = () => {
  const icons = [
    { 
      path: mdiBellCircle, 
      label: 'Notifications', 
      to: '/notifications',
      badge: 5 // Add badge count for this icon
    },
    { 
      path: mdiBullhorn, 
      label: 'Announcements', 
      to: '/announcements',
    },
    { 
      path: mdiMessageText, 
      label: 'Messages', 
      to: '/messages',
      badge: 23 // Add badge count for this icon
    },
    { 
      path: mdiCalendarBlank, 
      label: 'Calendar', 
      to: '/calendar',
      badge: 2 // Add badge count for this icon
    },
    { 
      path: mdiCloud, 
      label: 'Cloud', 
      to: '/cloud',
      badge: 0 // Add badge count for this icon
    },
  ];

  return (
    <Col xs={6} md={8}>
      <div className="d-flex justify-content-end">
        {icons.map((icon, index) => (
          <NavLink key={index} to={icon.to} className="mx-2 position-relative">
            <Icon path={icon.path} size={1.5} color="rgb(247 158 128)" />
            {icon.badge > 0 && (
              <span className="badge bg-success position-absolute top-0 start-100 translate-middle p-1">
                {icon.badge}
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </Col>
  );
}

export default NavItems;
