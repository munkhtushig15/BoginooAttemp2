import jwt from "jsonwebtoken";

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
