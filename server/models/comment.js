const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  userId: Number,
  text: String,
  time: Date
});

module.exports = model('Comment', commentSchema);