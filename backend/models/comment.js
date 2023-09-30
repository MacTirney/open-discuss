const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  userId: Number,
  postId: mongoose.ObjectId,
  content: String,
  time: Date
});

module.exports = model('Comment', commentSchema);