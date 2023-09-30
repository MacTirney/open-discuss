const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');

const resourceRoutes = require('../routes/resources')
const discussionRoutes = require('../routes/discussions')
const communityRoutes = require('../routes/communities')
const commentRoutes = require('../routes/comments')
const userRoutes = require('../routes/users')

// Configurations
dotenv.config()
const app = express();
app.use(express.json);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')))

// Mongoose -> Mongo Connection
const port = process.env.PORT || 8080;
const db = mongoose.connection;

mongoose.connect(process.env.MONGO_CONNECTION);

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Database Connected");
});

// Routes
app.get('/', (req, res) => {
    res.render('home')
});

app.use('/resources', resourceRoutes);
app.use('/discussions', discussionRoutes);
app.use('/communities', communityRoutes);
app.use('/', commentRoutes);
app.use('/', userRoutes)

app.all('*', (req, res, next) => {
    next(new ExpressError('Oops looks like you ended up in the wrong spot!', 404))
})

app.use( (err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oops, Something went wrong"
    res.status(statusCode).render('error', { err })
})

// Server
app.listen(port, () => {
    console.log(`Server Port: ${port}`);
})