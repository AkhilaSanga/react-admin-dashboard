import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Kanban from './pages/Kanban';
import FormComponent from './components/FormComponent';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/form" element={<FormComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
