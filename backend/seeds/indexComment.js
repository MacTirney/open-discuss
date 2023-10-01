const mongoose = require('mongoose');
const Comment = require('../models/comment');
const sampleComments;

const MONGO_URI = 'mongodb://localhost:27017/open-discuss';
mongoose.connect(MONGO_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

// iterate over sampleComments
  // add commentId to commentIds in the post document
const seedDB = async () => {
  await Comment.deleteMany({});
  for (sampleComment of sampleComments) {
    const Comment = new Comment({
      // userId: sampleComment.userId,
      displayName: sampleComment.displayName,
      postId: sampleComment.postId,
      content: sampleComment.content,
      timestamp: sampleComment.timestamp
    })
  }
}

seedDB().then(() => {
  mongoose.connection.close()
});
