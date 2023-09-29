const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Json & Express Configs
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

// MongoDB Connection
const MONGO_URI = 'mongodb://localhost:27017/open-discuss'; // replace 'myDatabase' with your database name
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, MongoDB!');
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
