const { Thought, User } = require('../models');

const thoughtController = {
  // post to create new thought and push thought id to users thoughts array field 
  addThought({ body }, res) {
    Thought.create(body)
      .then((dbThoughtData) => {
        return User.findOneAndUpdate(
            { _id: body.userId },
            { $push: { thoughts: dbThoughtData._id } },
            { new: true }
          );
      }).then(dbUserData => {
        res.json(dbUserData)
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //get all thoughts 
getAllThoughts(req, res) {
    Thought.find({})
    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},

  //get thought by its id 
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
    //   .populate({
    //     path: "reactions",
    //     select: "-__v",
    //   })
    //   .select("-__v")
    //   .sort({ _id: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

    // update thought by id
    updateThoughtById({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, {$set: body}, {
          new: true,
          runValidators: true,
        })
          .then((dbThoughtData) => res.json(dbThoughtData))
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },

  //delete thought by 
  deleteThoughtById({ params }, res) {
    Thought.findOneAndRemove({ _id: params.thoughtId})
    .then((dbThoughtData) => {
        return User.findOneAndUpdate(
            { thoughts: params.thoughtId },
            { $pull: { thoughts: params.thoughtId } },
            { new: true }
          );
      })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });

  },


addReaction({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.thoughtId }, {$addToSet: {reactions: body} }, {
      new: true,
      runValidators: true,
    })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  removeReaction({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.thoughtId }, {$pull: {reactions: {reactionId: params.reactionId} } }, {
      new: true,
      runValidators: true,
    })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
}


module.exports = thoughtController;