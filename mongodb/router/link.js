import express from "express";
import {
  getAllLinks,
  createLink,
  getLink,
  deleteLink,
} from "../controller/link.js";

import { checkTokenMiddleware, checkAdmin } from "../middleware/middleware.js";

const linkRouter = express.Router();

linkRouter.route("/").get(getAllLinks);
linkRouter.post("/", checkTokenMiddleware, createLink);
linkRouter.route("/:shortUrl").get(getLink);
linkRouter.delete("/delete/:id", checkAdmin, deleteLink);

export default linkRouter;
