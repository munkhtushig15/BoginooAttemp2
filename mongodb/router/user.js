import express from "express";
import {
  user,
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} from "../controller/user.js";

import { checkTokenMiddleware } from "../controller/middleware.js";

const userRouter = express.Router();

userRouter.route("/").post(createUser);
userRouter.get("/", checkTokenMiddleware, getAllUsers);
userRouter.route("/login").post(getUser);
userRouter.route("/:email").get(user).delete(deleteUser).put(updateUser);

export default userRouter;
