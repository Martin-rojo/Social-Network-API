const { Thought, User } = require('../models');

const thoughtController = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find()
        .sort({ createdAt: -1 });
        
      res.json(thoughts);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // Get a single thought by id
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // Create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      
      // Add thought to the associated user's thoughts array
      await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  // Update a thought by id
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        req.body,
        { new: true, runValidators: true }
      );
      
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  // Delete a thought by id
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
      
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      
      // Remove the thought from the associated user's thoughts array
      await User.findOneAndUpdate(
        { username: thought.username },
        { $pull: { thoughts: req.params.thoughtId } }
      );
      
      res.json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  // Add a reaction to a thought
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { new: true, runValidators: true }
      );
      
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  // Remove a reaction from a thought
  async removeReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  }
};

module.exports = thoughtController;