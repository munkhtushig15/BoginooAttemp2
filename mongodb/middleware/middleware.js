import jwt from "jsonwebtoken";

export const checkTokenMiddleware = (req, res, next) => {
    jwt.verify(token, "secret", (err, res) => {
        if (err) return err;
        console.log(res);
        return res;
        next();
    })
};
