import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  role: {
    type: String,
    enum: ['user', 'author', 'admin'],
    default: 'user'
  },
  bookmarks: [{
    novelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Novel' },
    lastChapter: { type: Number, default: 1 },
    addedAt: { type: Date, default: Date.now }
  }],
  readingHistory: [{
    novelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Novel' },
    chapterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' },
    readAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Add indexes for common queries
UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ 'bookmarks.novelId': 1 });
UserSchema.index({ 'readingHistory.novelId': 1 });

export default mongoose.models.User || mongoose.model('User', UserSchema); 