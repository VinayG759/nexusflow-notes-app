import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8001/api/notes`);
        setNotes(response.data);
      } catch (error: unknown) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  if (loading) {
    return <div className="flex justify-center py-16"><div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-200" role="status"></div></div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Notes</h2>
      {notes.map((note) => (
        <div key={note.id} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-between hover:shadow-sm transition-shadow mb-3">
          <div>
            <h3 className="font-semibold text-gray-900">{note.title}</h3>
            <p className="text-sm text-gray-500">{note.description}</p>
          </div>
        </div>
      ))}
      <Link to="/notes/create">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">Create Note</button>
      </Link>
    </div>
  );
};

export default Notes;