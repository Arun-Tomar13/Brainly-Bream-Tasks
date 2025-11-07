import React from 'react';

export default function MetricCard({ title, value, delta, icon }) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs text-gray-400">{title}</div>
          <div className="mt-2 text-2xl font-semibold">{value}</div>
          {delta && <div className="mt-1 text-sm text-green-600">{delta}</div>}
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-lg text-indigo-600">
          {icon || <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>}
        </div>
      </div>
    </div>
  );
}
