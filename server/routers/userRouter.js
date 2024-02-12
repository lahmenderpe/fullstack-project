const express = require("express");
const {
  register,
  login,
  updateUser,
  deleteUser,
  getUserInfo,
} = require("../controllers/userController.js");
const validateToken = require("../middlewares/validateToken.js");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/:id", validateToken, getUserInfo);
userRouter.put("/:id", validateToken, updateUser);
userRouter.delete("/:id", validateToken, deleteUser);

module.exports = userRouter;
