import React from 'react';
import Icon from '@mdi/react';
import { NavLink } from 'react-router-dom';
import { mdiBell, mdiBullhorn, mdiMessageText, mdiCalendarOutline, mdiCloud } from '@mdi/js';
import Col from 'react-bootstrap/Col';
import '../../../App.css';

const IconButton = ({ to, path, badge, label, className }) => (
  <NavLink to={to} className={`mx-2 position-relative ${className}`} aria-label={label}>
    <div style={{ width: '2.7rem', height: '2.7rem', borderRadius: '50%', background: 'linear-gradient(#f79e80, #e58565)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0.125rem' }}>
      <Icon path={path} size={1.5} color="white" />
    </div>
    {badge > 0 && (
      <span className="badge bg-success position-absolute top-0 start-100 translate-middle p-1">
        {badge}
      </span>
    )}
  </NavLink>
);

const NavItems = () => {
  const icons = [
    { path: mdiBell, label: 'Notifications', to: '/notifications', badge: 5 },
    { path: mdiBullhorn, label: 'Announcements', to: '/announcements'},
    { path: mdiMessageText, label: 'Messages', to: '/messages', badge: 23 },
    { path: mdiCalendarOutline, label: 'Calendar', to: '/calendar', badge: 2 },
    { path: mdiCloud, label: 'Cloud', to: '/cloud', badge: 0 },
  ];

  return (
    <Col xs={6} md={8}>
      <div className="d-flex justify-content-end" style={{ borderRight: '0.063rem solid #ccc', marginRight: '0.625rem' }}>
        {icons.map((icon, index) => (
          <IconButton key={index} {...icon} />
        ))}
      </div>
    </Col>
  );
};

export default NavItems;
