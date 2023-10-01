const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CommunitySchema = new Schema({
    title: String,
    image: String,
    link: String,
    description: String,
    timeStamp: Date,
    discussions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

module.exports = model('Community', CommunitySchema);