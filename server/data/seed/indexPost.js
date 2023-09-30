const mongoose = require('mongoose');
const Post = require('../models/post');
const samplePosts = require('./samplePosts')

// MongoDB Connection
const MONGO_URI = 'mongodb://localhost:27017/open-discuss'; // replace 'myDatabase' with your database name
mongoose.connect(MONGO_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const seedDB = async () => {
  await Post.deleteMany({});
  for (let samplePost of samplePosts) {
    const post = new Post({
      // userId: samplePost.userId,
      // community: samplePost.community,
      // postId: samplePost.postId,
      // time: samplePost.time,
      title: samplePost.title,
      details: samplePost.details
    });
    await post.save();
  }
  console.log('Data seeding completed.');
}

seedDB().then(() => {
  mongoose.connection.close()
});