import jwt from "jsonwebtoken";
import User from "../model/User.js";
import Link from "../model/Link.js";

export const checkTokenMiddleware = (req, res, next) => {
  const { token } = req.body;
  jwt.verify(token, "secret", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      next();
      return result;
    }
  });
};

export const checkAdmin = async (req, res, next) => {
  const { id } = req.params;
  const link = await Link.findById(id);
  const user = await User.findById(link.user_id);
  if (user.role === "admin") {
    next();
  } else {
    console.log("not admin");
  }
};
