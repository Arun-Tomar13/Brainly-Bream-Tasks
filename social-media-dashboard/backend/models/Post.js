import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  authorName: String,
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Post', PostSchema);
