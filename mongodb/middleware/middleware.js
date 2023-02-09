import jwt from "jsonwebtoken";
import User from "../model/User.js";
import Link from "../model/Link.js";

export const checkTokenMiddleware = (req, res, next) => {
  //   const { token } = req.headers.authorization;
  //   console.log(req.headers);
  //   jwt.verify(token, "secret", (err, result) => {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       next();
  //       return result;
  //     }
  //   });
  // };
  let authToken = req.headers.authorization;

  if (authToken && authToken !== null) {
    try {
      const token = authToken.split(" ");
      req.user = jwt.verify(token[1], serverConfig.secret);
    } catch (e) {
      console.warn("Invalid token detected.");
    }
  } else {
    req.user = {};
  }

  next();
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
