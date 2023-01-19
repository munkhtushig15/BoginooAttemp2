import express from "express";
import {
  user,
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} from "../controller/user.js";

const userRouter = express.Router();

// const userMiddleWare = (req, res, next) => {
//   console.log("response: method = ", req.method);
//   next();
// };

// const createTokenMiddleware = (req, res, next) => {
//   console.log(token);
//   next();
// };

// const checkTokenMiddleware = (req, res, next) => {
//   jwt.verify(token, "secret", (err, res) => {
//     if (err) return err;
//     console.log(res);
//     return res;
//   });
//   next();
// };

userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/login").post(getUser);
userRouter.route("/:email").get(user).delete(deleteUser).put(updateUser);

export default userRouter;
