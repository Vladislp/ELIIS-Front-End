// App.js
import React from 'react';
import './App.css';
import Navigation from './components/navbar/navbar';
import Sidebar from './components/sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarS from './components/pages/Events/Calendar/Calendar';
import EventCalendarHeader from './components/event-calender/Event-Calendar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './components/pages/Dashboard/dashboard';
import Messages from './components/pages/Messages/messages';

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
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </main>
        <footer>
          {/* Your footer content */}
        </footer>
      </div>
    </Router>
  );
}

function EventCalendarPage() {
  return (
    <>
      <EventCalendarHeader />
      <CalendarS />
    </>
  );
}

export default App;
