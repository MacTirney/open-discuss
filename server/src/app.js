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

// Server
app.listen(port, () => {
    console.log(`Server Port: ${port}`);
})