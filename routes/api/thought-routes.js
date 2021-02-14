const router = require("express").Router();
const {
  addThought,
  deleteThoughtById,
  getThoughtById,
getAllThoughts,
  updateThoughtById,
} = require("../../controllers/thought-controller");

// api/thoughts/
router.route("/").post(addThought).get(getAllThoughts);

// api/thoughts/:id
router.route("/:id").get(getThoughtById).delete(deleteThoughtById);

// api/thoughts/:userId/:thoughtId

// router.route("/:userId/:thoughtId").put(updateThoughtById);

module.exports = router;