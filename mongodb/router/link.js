import express from "express";
import {
  getAllLinks,
  createLink,
  getLink,
  deleteLink,
} from "../controller/link.js";

import { checkTokenMiddleware } from "../controller/middleware.js";

const linkRouter = express.Router();

linkRouter.route("/").get(getAllLinks);
linkRouter.post("/", checkTokenMiddleware, createLink);
linkRouter.route("/:shortUrl").get(getLink).delete(deleteLink);

export default linkRouter;
