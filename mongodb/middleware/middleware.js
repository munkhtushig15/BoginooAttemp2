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

// export const deleteAdminLink = (...allowedRoles) => {
//   return (req, res, next) => {
//     if (!req?.roles) return res.sendStatus(401);
//     const rolesArray = [...allowedRoles];
//     const result = req.roles
//       .map((role) => rolesArray.includes(role))
//       .find((val) => val === true);
//     if (!result) return res.sendStatus(401);
//     next();
//   };
// };

export const checkAdmin = (req, res, next) => {
  const { role } = req.body;

  if (role !== "admin") {
    res.status(403).send("ee");
  } else {
    next();
  }
};
