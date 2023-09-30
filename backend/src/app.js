const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");
const Post = require('../models/post');

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
 * @method put
 */
app.put('/submitComment', (req, res) => {

});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

