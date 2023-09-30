const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = new Schema({
  // userId: mongoose.ObjectId,
  // community: mongoose.ObjectId,
  // postId: Number,
  // time: Date,
  title: String,
  details: String
});

module.exports = model('Post', postSchema);