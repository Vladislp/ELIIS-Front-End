import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Navigation from './components/navbar/Navbar/navbar';
import Sidebar from './components/sidebar/Sidebar';

import EventCalendarHeader from './components/event-calender/Event-Calendar';
import CalendarS from './components/pages/Events/Calendar/Calendar';

// Application Components
const Dashboard = React.lazy(() => import('./components/pages/Application Components/Dashboard/dashboard'));
const Gallery = React.lazy(() => import('./components/pages/Application Components/Gallery/gallery'));
const CardWithFeedback = React.lazy(() => import('./components/pages/Application Components/Surveys/survey'));
const Cards = React.lazy(() => import('./components/pages/Application Components/Documents/documents'));
const Applications = React.lazy(() => import('./components/pages/Application Components/Applications/application'));
const Schedule = React.lazy(() => import('./components/pages/Organizational Components/Work Schedule/schedule'));

// Informational Components
const Messages = React.lazy(() => import('./components/pages/Informational Components/Messages/messages'));
const Help = React.lazy(() => import('./components/pages/Informational Components/Help/help'));
const Delivery = React.lazy(() => import('./components/pages/Informational Components/Contacts/contact'));
const Announcements = React.lazy(() => import('./components/pages/Informational Components/Announcements/announcements'));

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <Navigation />
        </header>
        <main>
          <div className="content">
            <Sidebar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/events" element={<EventCalendarPage />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/help" element={<Help />} />
              <Route path="/surveys" element={<CardWithFeedback />} />
              <Route path="/contacts" element={<Delivery />} />
              <Route path="/documents" element={<Cards />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/workschedule" element={<Schedule />} />
              <Route path="/announcements" element={<Announcements />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

function EventCalendarPage() {
  return (
    <>
      <div className='Full'>
        <EventCalendarHeader />
        <React.Suspense fallback={<div>Loading...</div>}>
          <CalendarS />
        </React.Suspense>
      </div>
    </>
  );
}

export default App;
