// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import App from './App';
import Dashboard from '../pages/Dashboard/dashboard';

function AppRouter() {
  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRouter;
