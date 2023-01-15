import mongoose from "mongoose";
import {nanoid} from "nanoid";

const LinkSchema = new mongoose.Schema({
  url: String,
  shortUrl: String,
});

LinkSchema.pre("save", function (next) {
  this.shortUrl = nanoid(6);
  next();
});

const Link = mongoose.model("Link", LinkSchema);

export default Link;
