import React from 'react';
import './App.css';
import Navigation from './components/navbar/Navbar/navbar';
import Sidebar from './components/sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarS from './components/pages/Events/Calendar/Calendar';
import EventCalendarHeader from './components/event-calender/Event-Calendar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './components/pages/Dashboard/dashboard';
import Messages from './components/pages/Messages/messages';
import Gallery from './components/pages/Gallery/gallery';
import Help from './components/pages/Help/help';
import CardWithFeedback from './components/pages/Surveys/survey';
import Delivery from './components/pages/Contacts/contact';
import Cards from './components/pages/Documents/documents';
import Applications from './components/pages/Applications/application';
import Schedule from './components/pages/Work Schedule/schedule';
import Announcements from './components/pages/Announcements/announcements';

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
        <footer>
        </footer>
      </div>
    </Router>
  );
}

function EventCalendarPage() {
  return (
    <>
    <div className='Full'>
      <EventCalendarHeader />
      <CalendarS />
    </div>
    </>
  );
}

export default App;
