import mongoose, { Schema } from "mongoose";
import { nanoid } from "nanoid";

const LinkSchema = new mongoose.Schema({
  url: String,
  shortUrl: String,
  user_id: {
    type: String,
    ref: "User",
    required: true,
  },
});

LinkSchema.pre("save", function (next) {
  this.shortUrl = nanoid(5);
  next();
});

const Link = mongoose.model("Link", LinkSchema);

export default Link;
