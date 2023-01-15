import express from 'express';
import { 
    getAllLinks, 
    createLink, 
    getLink, 
    deleteLink 
} from "../controller/link.js";


const linkRouter = express.Router();

linkRouter.route("/").get(getAllLinks).post(createLink);
linkRouter.route("/:shortUrl").get(getLink).delete(deleteLink);

export default linkRouter;