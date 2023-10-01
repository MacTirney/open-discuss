const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = new Schema({
  // userId: mongoose.ObjectId,
  // community: mongoose.ObjectId,
  postNumber: Number,
  displayName: String,
  timestamp: Date,
  title: String,
  content: String,
  commentIds: Array
});

module.exports = model('Post', postSchema);

