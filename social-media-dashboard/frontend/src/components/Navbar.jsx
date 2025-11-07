import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-indigo-600 to-indigo-400 flex items-center justify-center text-white font-bold">BB</div>
            <div>
              <div className="text-lg font-semibold">BrainyBeam Info-Tech</div>
              <div className="text-xs text-gray-500">Social Media Dashboard — Task 3</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm shadow">Submit</button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-gray-400">Signed in as</div>
                <div className="text-sm font-medium">Demo User</div>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">AU</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
