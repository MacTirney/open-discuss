const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  // userId: Number,
  postId: mongoose.ObjectId,
  displayName: String,
  content: String,
  timestamp: Date
});

module.exports = model('Comment', commentSchema);