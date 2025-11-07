import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 ${isActive ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700'}`
      }
    >
      <span className="w-5 h-5 flex items-center justify-center text-sm">{/* blank for icon if needed */}</span>
      {children}
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-64 hidden md:block border-r bg-white">
      <div className="h-full p-6">
        <div className="mb-6">
          <div className="text-2xl font-bold text-indigo-600">BrainyBeam</div>
          <div className="text-xs text-gray-400">Better brains for your idea</div>
        </div>

        <nav className="flex flex-col gap-1">
          <NavItem to="/">Dashboard</NavItem>
          <NavItem to="/tasks">Tasks</NavItem>
          <a href="#how" className="px-4 py-2 text-sm text-gray-500">How It Works</a>
          <a href="#change" className="px-4 py-2 text-sm text-gray-500">Change Password</a>
        </nav>

        <div className="mt-8 text-xs text-gray-400">© BrainyBeam</div>
      </div>
    </aside>
  );
}
