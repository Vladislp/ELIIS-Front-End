import React from 'react';
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import '../../App.css';

const typeMenu = [
  { color: 'Coral', label: 'Education project' },
  { color: 'Olive-Green', label: 'Theatre/Concert' },
  { color: 'Rose-Pink', label: 'Meeting' },
  { color: 'Tomato-Red', label: 'Training' },
  { color: 'Muted-Pink', label: 'Joint event' },
  { color: 'Mustard-Yellow', label: 'Class event' },
  { color: 'Teal', label: 'Learning activity' },
  { color: 'Sky-Blue', label: 'Other event' },
  { color: 'White-Red-Outline', label: 'Public holiday' },
];

const EventCalendarHeader = () => {
  return (
    <div className="Sidebar-type flex flex-col gap-2">
      <h1 className='text-3xl'>Event Calendar</h1>
      <h3>Types</h3>
      {typeMenu.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className={`rounded-full p-1 flex items-center justify-center font-bold w-6 h-6 text-xs bg-${item.color} text-${index === typeMenu.length - 1 ? 'black' : 'white'}`}
            aria-label={item.label}
            data-testid={item.label}
          >
            <Icon 
              path={mdiCheck} 
              size={1} 
              color="currentColor"
            />
          </span>
          <span>{item.label}</span>
        </div>
        ))}
    </div>
  );
}


export default EventCalendarHeader;
