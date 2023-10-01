const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const catchAsync = require('../Utils/catchAsync')
const ExpressError = require('../Utils/ExpressError')

// const resourceRoutes = require('../routes/resources')
// const discussionRoutes = require('../routes/discussions')
// const communityRoutes = require('../routes/communities')
// const userRoutes = require('../routes/users')

const Comment = require('../models/comment')
const Community = require('../models/community')
const Discussion = require('../models/post')
const Resource = require('../models/resource')

// Configurations
dotenv.config();
const app = express();
// app.use(express.json);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')))

// Mongoose -> Mongo Connection
const PORT = process.env.PORT || 3000;
const db = mongoose.connection;

mongoose.connect(process.env.MONGO_CONNECTION);

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Database Connected");
});

// Routes
app.get('/', (req, res) => {
    try {
        // res.json('Hello')
        res.send('Hello');
        console.log('Hello');
    } catch (error) {
        res.status(500).send('Internal Server Error');
        console.error(error);
    }
});

// app.use('/resources', resourceRoutes);
// app.use('/discussions', discussionRoutes);
// app.use('/communities', communityRoutes);
// app.use('/', userRoutes)

app.get('/discussions', catchAsync (async (req, res) => {
    const discussions = await Discussion.find({})
    // res.json({ discussions })
    res.send({ discussions })
}))

// Discussion - Get - Sends a success message when a New discussion post is rendered
app.get('/discussions/new', (req,res) => {
    res.json({ success: true, message: 'Rendering new discussion post' });
})

// Discussion - Post - Creates a new individual discussion post either associated with a community or no community
app.post('/discussions', catchAsync (async (req,res) => {
    const discussion = new Discussion(req.body.discussion)
    const savedDiscussion = await discussion.save();
    res.json({ savedDiscussion })
}))

// Discussion - Get - Displays an individual discussion posts data
app.get('/discussions/:id', catchAsync (async (req,res) => {
    const { id } = req.params
    const discussionRender = await Discussion.findById(id)
    res.json({ discussionRender })
}))

// Discussion - Get - Populates an Edit form to allow for the user that made the discussion post to edit it
app.get('/discussions/:id/edit', catchAsync (async (req, res) => {
    const { id } = req.params
    const discussionEdit = await Discussion.findById(id)
    res.json({ discussionEdit })
}))

// Discussion - Put - Updates the discussion post with the updated data that was submitted from the edit form
app.put('/discussions/:id', catchAsync (async (req, res) => {
    const { id } = req.params
    const discussionUpdate = await Discussion.findByIdAndUpdate(id, { ...req.body.discussion }, { new: true })
    res.json({ discussionUpdate })
}))

// Discussion - Delete - Deletes the discussion and associated data / comments 
app.delete('/discussions/:id', catchAsync (async (req,res) => {
    const { id } = req.params
    const discussionDelete = await Discussion.findByIdAndDelete(id)
    res.json({ discussionDelete })
}))

app.all('*', (req, res, next) => {
    next(new ExpressError('Oops looks like you ended up in the wrong spot!', 404))
})

app.use( (err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oops, Something went wrong"
    res.status(statusCode).render('error', { err })
})

// Server
app.listen(PORT, () => {
    console.log(`Server Port: ${PORT}`);
})