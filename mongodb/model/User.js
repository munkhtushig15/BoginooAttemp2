import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  repassword: String,
});

const User = mongoose.model("User", UserSchema);

export default User;
