import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function Submit() {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!file) return setMsg('Please choose a file before submitting.');
    // For demo, we just show placeholder link
    setMsg(`Submitted: https://example.com/submission/task-${id}`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-2xl mx-auto card p-6">
            <h3 className="text-lg font-medium mb-4">Submit Task {id}</h3>
            <form onSubmit={onSubmit}>
              <input type="file" onChange={e => setFile(e.target.files[0])} className="mb-4" />
              <div className="flex gap-2">
                <button type="submit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white">Submit</button>
                <button type="button" onClick={() => setFile(null)} className="px-4 py-2 rounded-lg bg-gray-100">Cancel</button>
              </div>
            </form>
            {msg && <div className="mt-4 text-green-600">{msg}</div>}
          </div>
        </main>
      </div>
    </div>
  );
}
