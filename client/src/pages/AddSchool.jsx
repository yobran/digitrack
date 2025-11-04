import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AddSchool() {
  const [form, setForm] = useState({
    name: 'Test School',
    code: 'TEST001',
    location: 'Nairobi',
    county: 'Nairobi',
    principal: 'Test Principal'
  });
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // We'll manually add this school to the database
    alert('We will manually add this school to the database');
    navigate('/schools');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Add Test School</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="School Name"
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="School Code"
            value={form.code}
            onChange={(e) => setForm({...form, code: e.target.value})}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            Add School (Manual)
          </button>
        </form>
      </div>
    </div>
  );
}