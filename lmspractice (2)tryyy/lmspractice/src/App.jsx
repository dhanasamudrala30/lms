import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MentorsList from './pages/MentorsList';
import MentorProfile from './pages/MentorProfile';
import MySessions from './pages/MySessions';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<MentorsList />} />
            <Route path="/profile/:id" element={<MentorProfile />} />
            <Route path="/my-sessions" element={<MySessions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
