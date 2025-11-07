import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Post from './models/Post.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to Mongo for seeding');

    await User.deleteMany({});
    await Post.deleteMany({});

    const users = await User.insertMany([
      { name: 'Aman Sharma', email: 'aman@example.com' },
      { name: 'Riya Patel', email: 'riya@example.com' },
      { name: 'Dev Verma', email: 'dev@example.com' }
    ]);

    const posts = [
      { title: 'Launch post', body: 'This is our first demo post', authorName: users[0].name, likes: 120, comments: 10 },
      { title: 'How to MERN', body: 'Short MERN tutorial', authorName: users[1].name, likes: 80, comments: 5 },
      { title: 'Task 3 submission', body: 'Demo social analytics', authorName: users[2].name, likes: 45, comments: 2 }
    ];

    await Post.insertMany(posts);

    console.log('Seed completed');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
