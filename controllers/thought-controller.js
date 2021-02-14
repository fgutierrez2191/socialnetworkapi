const { Thought, User } = require('../models');

const thoughtController = {
  // post to create new thought and push thought id to users thoughts array field 
  addThought({ body }, res) {
    Thought.create(body)
      .then((dbUserData) => res.json(dbUserData))
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
    Thought.findOne({ _id: params.id })
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  //delete thought by 
  deleteThoughtById({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });

  }
}

  //put to update thought by its id

  //delete to remove thought by its id
//   deleteThoughtById({ params }, res) {
//     Thought.findOneAndDelete({ _id: params.id })
//       .then((dbThoughtData) => res.json(dbThoughtData))
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//     }
// };


module.exports = thoughtController;