import React from 'react';
import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';
import './Event-Calendar.css';

const EventCalendarHeader = () => {
  return (
    <div className="event-calendar-header">
      <h1>Event Calendar</h1>
      <div className='type-menu gap-2'>
        <h2>Types</h2>
        {typeMenu.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className={`rounded-full p-1 flex items-center justify-center font-bold w-6 h-6 text-xs bg-${item.color} text-white`}>
              <Icon path={mdiCheckCircle} size={1} color="currentColor" />
            </span>
            <span data-testid={item.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const typeMenu = [
  { color: 'primary', label: 'Education project' },
  { color: 'secondary', label: 'Theatre/Concert' },
  { color: 'pink', label: 'Meeting' },
  { color: 'red', label: 'Training' },
  { color: 'fadedPink', label: 'Joint event' },
  { color: 'yellow', label: 'Class event' },
  { color: 'teal', label: 'Learning activity' },
  { color: 'blue', label: 'Other event' },
  { color: 'grey-500', label: 'Public holiday' },
];

export default EventCalendarHeader;
