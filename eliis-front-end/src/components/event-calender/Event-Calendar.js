// EventCalendarHeader.js
import React from 'react';
import './Event-Calendar.css';
import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';

function EventCalendarHeader() {
  return (
    <div className="event-calendar-header">
      <h1>Event Calendar</h1>
      <div>
        <h2>Types</h2>
        <ul className="type-menu">
          {typeMenu.map((item, index) => (
            <li key={index}>
              <Icon path={item.icon} size={1} color={item.color} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const typeMenu = [
  { icon: mdiCheckCircle, color: 'red', label: 'Education projects' },
  { icon: mdiCheckCircle, color: 'orange', label: 'Theater/Concert' },
  { icon: mdiCheckCircle, color: 'green', label: 'Meeting' },
  { icon: mdiCheckCircle, color: 'blue', label: 'Training' },
  { icon: mdiCheckCircle, color: 'purple', label: 'Joint event' },
  { icon: mdiCheckCircle, color: 'brown', label: 'Class event' },
  { icon: mdiCheckCircle, color: 'pink', label: 'Learning activity' },
  { icon: mdiCheckCircle, color: 'teal', label: 'Other event' },
  { icon: mdiCheckCircle, color: 'gray', label: 'Public holiday' },
];

export default EventCalendarHeader;
