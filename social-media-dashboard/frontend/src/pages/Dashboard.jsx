import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MetricCard from '../components/MetricCard';
import { fetchMetrics, fetchPosts } from '../services/api';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, Legend
} from 'recharts';

const COLORS = ['#4f46e5', '#06b6d4', '#f59e0b', '#ef4444', '#10b981'];

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const m = await fetchMetrics();
        setMetrics(m);
        const p = await fetchPosts();
        setPosts(p);
      } catch (e) {
        setErr(e.message);
      }
    })();
  }, []);

  if (err) return <div className="p-6 text-red-600">{err}</div>;
  if (!metrics) return <div className="p-6">Loading...</div>;

  // sample platform data derived from posts count small demo
  const platform = [
    { name: 'Instagram', value: 40 },
    { name: 'Twitter', value: 25 },
    { name: 'Facebook', value: 20 },
    { name: 'LinkedIn', value: 10 },
    { name: 'TikTok', value: 5 }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <MetricCard title="Followers" value={metrics.followers.toLocaleString()} delta="+4.2%" />
              <MetricCard title="Total Posts" value={metrics.totalPosts} delta="+1.1%" />
              <MetricCard title="Total Comments" value={metrics.totalComments} delta="-0.4%" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 card p-5">
                <h3 className="text-lg font-medium mb-3">Engagement — Last 7 Days</h3>
                <div style={{ height: 300 }}>
                  <ResponsiveContainer>
                    <LineChart data={metrics.postsLast7}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line dataKey="posts" stroke="#4f46e5" strokeWidth={3} dot={{ r: 3 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="card p-5">
                <h3 className="text-lg font-medium mb-3">Platform Distribution</h3>
                <div style={{ height: 300 }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={platform} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                        {platform.map((entry, idx) => <Cell key={idx} fill={COLORS[idx % COLORS.length]} />)}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="mt-6 card p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-medium">Recent Posts</h4>
                <div className="text-sm text-gray-500">Showing latest</div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="table-header">
                    <tr><th className="py-2">Title</th><th className="py-2">Author</th><th className="py-2">Likes</th></tr>
                  </thead>
                  <tbody>
                    {posts.slice(0, 8).map((p, idx) => (
                      <tr key={idx} className="table-row">
                        <td className="py-3">{p.title}</td>
                        <td className="py-3">{p.author || p.authorName || 'N/A'}</td>
                        <td className="py-3">{p.likes ?? Math.floor(Math.random() * 120)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 flex gap-4 justify-end">
              <button className="px-4 py-2 rounded-lg bg-white border text-sm">Download ZIP</button>
              <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white">Submit</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
