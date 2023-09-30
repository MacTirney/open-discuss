const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');

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

// Server
app.listen(port, () => {
    console.log(`Server Port: ${port}`);
})