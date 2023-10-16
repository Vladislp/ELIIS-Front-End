import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import axios from 'axios';
import './index.css';

const SERVER_URL = 'http://localhost:3001';

export default class DemoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weekendsVisible: true,
      currentEvents: [],
      calendarRef: null,
    };
  }

  componentDidMount() {
    // Fetch events from localStorage when the component is mounted
    this.fetchEventsFromLocal();
  }
  
  // Function to fetch events from localStorage
  fetchEventsFromLocal = () => {
    // Get events from localStorage
    const events = JSON.parse(localStorage.getItem('events')) || [];
  
    // Set the events in the calendar
    if (this.calendarRef) {
      this.calendarRef.getApi().addEventSource(events);
    }
  };

  render() {
    return (
      <div className='demo-app'>
        <div className='demo-app-main'>
          <FullCalendar
            ref={(ref) => (this.calendarRef = ref)}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'createEventButton prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            updateSize={true}
            height={'auto'}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS}
            select={this.handleDateSelect}
            eventContent={this.renderEventContent} // Use 'this' to refer to class functions
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents}
            customButtons={{
              createEventButton: {
                text: 'Create Event',
                click: this.handleCreateEventClick,
              },
            }}
          />
        </div>
      </div>
    )
  }
  

  handleCreateEventClick = () => {
    const title = prompt('Please enter a title for your new event');
    if (title) {
      const calendarApi = this.calendarRef.getApi();
      const newEvent = {
        id: createEventId(),
        title,
        start: new Date().toISOString(), // Convert to ISO format
        allDay: true,
      };
  
      // Save the new event to localStorage
      this.saveEventToLocal(newEvent);
  
      // Add the new event directly to the calendar
      calendarApi.addEvent(newEvent);
    }
  };
  
  // Function to save the event to localStorage
  saveEventToLocal = (event) => {
    // Get existing events from localStorage or initialize an empty array
    const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
  
    // Add the new event to the array
    existingEvents.push(event);
  
    // Save the updated events array back to localStorage
    localStorage.setItem('events', JSON.stringify(existingEvents));
  };

  
  fetchEvents = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/getEvents`);
      const events = response.data;
      // Set the events in the calendar
      if (this.calendarRef) {
        this.calendarRef.getApi().addEventSource(events);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };
  

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;
  
    calendarApi.unselect(); // clear date selection
  
    if (title) {
      const newEvent = {
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };
  
      // Save the new event to localStorage
      this.saveEventToLocal(newEvent);
  
      // Add the new event directly to the calendar
      calendarApi.addEvent(newEvent);
    }
  };
  
  // Function to save the event to localStorage
  saveEventToLocal = (event) => {
    // Get existing events from localStorage or initialize an empty array
    const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
  
    // Add the new event to the array
    existingEvents.push(event);
  
    // Save the updated events array back to localStorage
    localStorage.setItem('events', JSON.stringify(existingEvents));
  };

  handleEventClick = (eventClickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${eventClickInfo.event.title}'?`)) {
      this.deleteEvent(eventClickInfo.event);
    }
  };
  
  deleteEvent = (eventToDelete) => {
    const calendarApi = this.calendarRef.getApi();
    calendarApi.getEventById(eventToDelete.id).remove(); // Remove the event from the FullCalendar
  
    const updatedEvents = this.state.currentEvents.filter((event) => event.id !== eventToDelete.id);
  
    this.setState({
      currentEvents: updatedEvents,
    });
  };  


  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

  renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
}


