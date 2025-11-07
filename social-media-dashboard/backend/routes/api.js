// backend/routes/api.js
const express = require('express');
const router = express.Router();

// Fake /api/metrics route
router.get('/metrics', (req, res) => {
  const totalPosts = 100;
  const totalComments = 245;
  const followers = 2000 + Math.floor(Math.random() * 2000);
  const likes = totalPosts * (10 + Math.floor(Math.random() * 40));

  // Simulate 7 days of data
  const now = Date.now();
  const postsLast7 = Array.from({ length: 7 }).map((_, i) => ({
    date: new Date(now - (6 - i) * 24 * 3600 * 1000).toLocaleDateString(),
    posts: Math.round((totalPosts / 7) * (0.7 + Math.random() * 0.6))
  }));

  const samplePosts = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `Sample post ${i + 1}`,
    author: ['Aman', 'Riya', 'Dev'][i % 3],
  }));

  res.json({
    followers,
    likes,
    totalPosts,
    totalComments,
    postsLast7,
    samplePosts
  });
});

// Fake /api/posts route
router.get('/posts', (req, res) => {
  const posts = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    title: `Post ${i + 1}`,
    author: ['Aman', 'Riya', 'Dev'][i % 3],
    likes: Math.floor(Math.random() * 300),
    comments: Math.floor(Math.random() * 50),
  }));
  res.json(posts);
});

module.exports = router;
