import express from "express";
import {
  register,
  login,
  updateUser,
  deleteUser,
  getUserInfo,
} from "../controllers/userController.js";
import validateToken from "../middlewares/validateToken.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/:id", validateToken, getUserInfo);
userRouter.put("/:id", validateToken, updateUser);
userRouter.delete("/:id", validateToken, deleteUser);

export default userRouter;
