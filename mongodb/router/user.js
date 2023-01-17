import express from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} from "../controller/user.js";

const userRouter = express.Router();

const userMiddleWare = (req, res, next) => {
  console.log("response: method = ", req.method);
  next();
};

const createTokenMiddleware = (req, res, next) => {
  console.log(token);
  next();
};

const checkTokenMiddleware = (req, res, next) => {
  jwt.verify(token, "secret", (err, res) => {
    if (err) return err;
    console.log(res);
    return res;
  });
  next();
};

userRouter
  .route("/")
  .get(checkTokenMiddleware)
  .post(createTokenMiddleware)
  .all(userMiddleWare)
  .get(getAllUsers)
  .post(createUser);
userRouter.route("/:username").get(getUser).delete(deleteUser).put(updateUser);

export default userRouter;
