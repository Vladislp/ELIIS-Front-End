// DemoApp.jsx

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Dropdown } from 'react-bootstrap';
import '../../../../App.css';
import '../../../../App.css';
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';

const SERVER_URL = 'http://localhost:3001';

export default function DemoApp() {
  let eventGuid = 0
  let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [calendarRef, setCalendarRef] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateEventClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
      <div className="flex flex-col gap-2">
        <h1 className='text-3xl'>Event Calendar</h1>
        <h3>Types</h3>
          {typeMenu.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className={`rounded-full p-1 flex items-center justify-center font-bold w-6 h-6 text-xs bg-${item.color} text-${index === typeMenu.length - 1 ? 'black' : 'white'}`}>
                <Icon 
                  path={mdiCheck} 
                  size={1} 
                  color="currentColor"
                />
              </span>
              <span data-testid={item.label}>{item.label}</span>
            </div>
          ))}
      </div>
    );
  }

  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: 'All-day event',
      start: todayStr
    },
    {
      id: createEventId(),
      title: 'Timed event',
      start: todayStr + 'T12:00:00'
    }
  ]
  
  function createEventId() {
    return String(eventGuid++)
  }

  function StaticExample({ onClose }) {
    return (
      <div className="modal show" style={{ display: 'block', position: 'initial' }}>
        <Modal.Dialog>
          <Modal.Header closeButton onClick={onClose}>
            <Modal.Title>Create Event</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Choose type of event
                </Dropdown.Toggle>
  
                <Dropdown.Menu>
                  <Dropdown.Item>First</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };

      setCurrentEvents([...currentEvents, newEvent]);
      saveEventToLocal(newEvent);
    }
  };

  const saveEventToLocal = (event) => {
    const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
    existingEvents.push(event);
    localStorage.setItem('events', JSON.stringify(existingEvents));
  };

  const fetchEventsFromLocal = () => {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    if (calendarRef) {
      calendarRef.getApi().addEventSource(events);
    }
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  const handleEventClick = (eventClickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${eventClickInfo.event.title}'?`)) {
      deleteEvent(eventClickInfo.event);
    }
  };

  const deleteEvent = (eventToDelete) => {
    const calendarApi = calendarRef.getApi();
    calendarApi.getEventById(eventToDelete.id).remove();

    const updatedEvents = currentEvents.filter((event) => event.id !== eventToDelete.id);
    setCurrentEvents(updatedEvents);
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  return (
    <div id="custom-calendar" className="demo-app">
      <div className="demo-app-main">
        <FullCalendar
          ref={(ref) => setCalendarRef(ref)}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'createEventButton',
            center: 'title',
            right: 'prev next',
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          height={'auto'}
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
          customButtons={{
            createEventButton: {
              text: 'Create Event',
              click: handleCreateEventClick,
            },
          }}
        />
      </div>

      {isModalOpen && <StaticExample onClose={handleCloseModal} />}
    </div>
  );
}
