import mongoose from 'mongoose';

const ChapterSchema = new mongoose.Schema({
  chapterNumber: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const NovelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cover: { type: String, required: true },
  rating: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  chapters: { type: Number, default: 0 },
  author: { type: String, required: true },
  genres: [{ type: String }],
  description: { type: String },
  status: {
    type: String,
    enum: ['ongoing', 'completed'],
    default: 'ongoing'
  },
  lastUpdated: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Add text indexes for search
NovelSchema.index({ title: 'text', author: 'text', description: 'text' });
// Add compound indexes for common queries
NovelSchema.index({ status: 1, rating: -1 });
NovelSchema.index({ status: 1, views: -1 });
NovelSchema.index({ genres: 1, rating: -1 });

export default mongoose.models.Novel || mongoose.model('Novel', NovelSchema); 