import express from "express";
import {
  getAllLinks,
  createLink,
  getLink,
  deleteLink,
} from "../controller/link.js";

import {
  checkTokenMiddleware,
  deleteAdminLink,
} from "../middleware/middleware.js";

const linkRouter = express.Router();

linkRouter.route("/").get(getAllLinks);
linkRouter.post("/", checkTokenMiddleware, createLink);
linkRouter.route("/:shortUrl").get(getLink);
linkRouter.post("/:shortUrl", deleteAdminLink, deleteLink);

export default linkRouter;
