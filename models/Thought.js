const { Schema, model, Types } = require('mongoose')
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');




const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: 'thoughtText is required',
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: 'Please provide your username'
        },
        // use reactionSchema to validate data for a reply 
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// ThoughtSchema.virtual('reactionCount').get(function() {
//     return this.reactions.length
// });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;