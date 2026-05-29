import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Notes from './pages/Notes';
import CreateNote from './pages/CreateNote';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
          <Link to="/notes">
            <h1 className="text-3xl font-bold text-gray-900">Notes App</h1>
          </Link>
        </nav>
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/notes" element={<Notes />} />
            <Route path="/notes/create" element={<CreateNote />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;