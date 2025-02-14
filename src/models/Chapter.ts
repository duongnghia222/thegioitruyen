import mongoose from 'mongoose';

const ChapterSchema = new mongoose.Schema({
  novelId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Novel',
    required: true 
  },
  chapterNumber: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Add compound indexes for common queries
ChapterSchema.index({ novelId: 1, chapterNumber: 1 }, { unique: true });
ChapterSchema.index({ novelId: 1, createdAt: -1 });

export default mongoose.models.Chapter || mongoose.model('Chapter', ChapterSchema); 