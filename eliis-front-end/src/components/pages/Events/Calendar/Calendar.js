// DemoApp.jsx

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import './CalendarS.css';
import './index.css';
import StaticExample from './modal';

const SERVER_URL = 'http://localhost:3001';

export default function DemoApp() {
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
          updateSize={true}
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
