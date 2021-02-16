const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    deleteFriendById,
    addNewFriend
  } = require('../../controllers/user-controller');
  

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  // api/users/:userId/friends/:freindId
router
.route("/:userId/friends/:friendId")
.post(addNewFriend)
.delete(deleteFriendById);

module.exports = router;
