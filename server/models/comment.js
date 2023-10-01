const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CommentSchema = new Schema({
  title: String,
  content: String,
  timeStamp: Date,
  // author: String,
  // postId: mongoose.ObjectId
});

module.exports = model('Comment', CommentSchema);