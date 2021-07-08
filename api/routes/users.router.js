const router = require("express").Router();
const { authUser } = require("../utils");

const {
  getAllUsers,
  updateUser,
  deleteUserById,
} = require("../controllers/users.controller");

router.get("/", authUser, getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUserById);

module.exports = router;
