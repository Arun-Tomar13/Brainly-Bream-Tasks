export const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export async function fetchMetrics() {
  const res = await fetch(`${API_BASE}/api/metrics`);
  if (!res.ok) throw new Error('Failed to fetch metrics');
  return res.json();
}

export async function fetchPosts() {
  const res = await fetch(`${API_BASE}/api/posts`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}
