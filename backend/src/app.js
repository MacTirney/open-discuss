const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");
const Post = require('../models/post');
const Comment = require('../models/comment');

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Json & Express Configs
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

// MongoDB Connection
const MONGO_URI = 'mongodb://localhost:27017/open-discuss'; // replace 'myDatabase' with your database name
mongoose.connect(MONGO_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, MongoDB!');
});

/**
 * Submit a post regarding the open source community
 * - Path: `/submitPost/`
 * - Body:
 *      community: String // not implemented yet
 *      postNumber: int
 *      time: Date
 *      title: String
 *      content: String
 *      commentIds: Array
 * @method put
 */
app.put('/submitPost', async (req, res) => {
    try {
        const docCount = await Post.countDocuments();
        const post = new Post({
            ...req.body,
            postNumber: docCount+1, // set postNumber
            timestamp: new Date()
        });
        
        const result = await post.save();
        res.status(200).json(result)
    } catch (error) {
        res.status(400).send(error);
    }
});

/**
 * Submit a comment under a post
 * - Path: `/submitComment/:userId/:postId`
 * - Body:
 *      userId: ObjectId
 *      postId: ObjectId
 *      displayName: String
 *      content: String
 *      timestamp: Date
 * @method put
 */
app.put('/submitComment/:postId', async (req, res) => {
    const postId = mongoose.Types.ObjectId(req.params.postId)
    try {
        const comment = new Comment({
            ...req.body,
            postId: postId,
            timestamp: new Date()
        })
        console.log(comment);
        const result = await comment.save();

        const post = await Post.findById(postId);
        console.log(post);
        const update = { commentIds: [...post.commentIds, result._id] };
        const filter = { _id: postId}

        Post.findOneAndUpdate(filter, update, { new: true }, (err, doc) => {
            if (err) {
              console.error('Error updating the document', err);
            } else {
                console.log('Updated document', doc);
            }
          });

        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error)
    }

});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

