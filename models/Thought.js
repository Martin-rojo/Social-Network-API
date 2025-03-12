const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const formatDate = require('../utils/dateFormat');

// Create Thought Schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => formatDate(timestamp)
    },
    username: {
      type: String,
      required: true
    },
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

// Create a virtual property `reactionCount` that gets the number of reactions
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Create the Thought model using the schema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;