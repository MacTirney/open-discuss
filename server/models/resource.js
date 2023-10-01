const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ResourceSchema = new Schema({
    title: String,
    link: String,
    description: String,
    postNumber: Number,
    timeStamp: Date,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

module.exports = model('Resource', ResourceSchema);