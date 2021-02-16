const router = require("express").Router();
const {
  addThought,
  deleteThoughtById,
  getThoughtById,
getAllThoughts,
  updateThoughtById,
  addReaction,
  removeReaction
} = require("../../controllers/thought-controller");

// api/thoughts/
router.route("/").post(addThought).get(getAllThoughts);

// api/thoughts/:thoughtid
router.route("/:thoughtId").get(getThoughtById).delete(deleteThoughtById).put(updateThoughtById);

// api/thoughts/:userId/:thoughtId

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;