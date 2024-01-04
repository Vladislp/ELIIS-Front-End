import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const SERVER_URL = 'http://localhost:3001';

export default function DemoApp() {
  let eventGuid = 0;
  let todayStr = new Date().toISOString().split('T')[0]; // YYYY-MM-DD of today

  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [calendarRef, setCalendarRef] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [choosenItem, setChoosenItem] = useState("");
  const [titleChange, setTitleChange] = useState("");
  const [dateChange, setDateChange] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [isAllDay, setIsAllDay] = useState(false);

  const handleCreateEventClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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

  const INITIAL_EVENTS = [
    { id: createEventId(), title: 'All-day event', start: todayStr },
    { id: createEventId(), title: 'Timed event', start: todayStr + 'T12:00:00' },
  ];

  function createEventId() {
    return String(eventGuid++);
  }

  const changeLabel = (label) => setChoosenItem(label);
  const changeTitle = (value) => setTitleChange(value);
  const changeDate = (value) => setDateChange(value);

  const handleSaveChanges = () => {
    const newEvent = {
      id: createEventId(),
      title: titleChange,
      start: isAllDay ? dateChange.startOf('day').toISOString() : dateChange.toISOString(),
      end: isAllDay ? dateChange.endOf('day').toISOString() : dateChange.toISOString(),
      allDay: isAllDay,
      description: eventDescription,
    };

    if (calendarRef) {
      const calendarApi = calendarRef.getApi();
      calendarApi.addEvent(newEvent);
    }

    saveEventToLocal(newEvent);
    handleCloseModal();
  };

  const StaticExample = ({ onClose }) => (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={onClose}>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
          <Form.Label>Type of Event</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {choosenItem || "Choose type of event"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {typeMenu.map((item, index) => (
                  <Dropdown.Item key={index} onClick={() => changeLabel(item.label)}>
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full p-1 flex items-center justify-center font-bold w-6 h-6 text-xs bg-${item.color} text-${
                          index === typeMenu.length - 1 ? 'black' : 'white'
                        }`}
                        aria-label={item.label}
                        data-testid={item.label}
                      >
                        <Icon path={mdiCheck} size={1} color="currentColor" />
                      </span>
                      <span>{item.label}</span>
                    </div>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <p></p>
            {choosenItem ? (
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Event title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="For example, trip to the zoo"
                  value={titleChange}
                  onChange={(e) => changeTitle(e.target.value)}
                />
              </Form.Group>
            ) : "Event is not chosen"}
          </div>
          <div>
            {titleChange ? (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={dateChange} type="date" onChange={(date) => changeDate(date)} />
              </LocalizationProvider>
            ) : null}
          </div>
          <p></p>
          <div>
            {titleChange ? (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider>
            ) : null}
          </div>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Is this going to take all day?"
            onChange={() => setIsAllDay(!isAllDay)}
            disabled={!titleChange}
            checked={isAllDay}
            className={`switch-${isAllDay ? 'active' : 'inactive'}`}
          />
          <div>
            {titleChange ? (
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                />
              </Form.Group>
            ) : null}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );

  const handleDateSelect = (selectInfo) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

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

  const renderEventContent = (eventInfo) => (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );

  const handleEventClick = (eventClickInfo) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the event '${eventClickInfo.event.title}'?`);
    if (confirmDelete) {
      deleteEvent(eventClickInfo.event);
    }
  };

  const deleteEvent = (eventToDelete) => {
    const calendarApi = calendarRef.getApi();
    calendarApi.getEventById(eventToDelete.id).remove();

    const updatedEvents = currentEvents.filter((event) => event.id !== eventToDelete.id);
    setCurrentEvents(updatedEvents);
  };

  const handleEvents = (events) => setCurrentEvents(events);

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
          firstDay={1}
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
