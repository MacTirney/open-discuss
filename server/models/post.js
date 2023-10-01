const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const DiscussionSchema = new Schema({
  title: String,
  content: String,
  postNumber: Number,
  timeStamp: Date,
  community: {
    type: Schema.Types.ObjectId,
    ref: 'Community'
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  // author: String
});

module.exports = model('Discussion', DiscussionSchema);