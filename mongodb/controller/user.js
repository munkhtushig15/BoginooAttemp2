import User from "../model/User.js";
import jwt from "jsonwebtoken";

export const user = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email: email });
    res.status(200).send({ data: user });
  } catch (error) {
    res.status(404).send({ data: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const token = jwt.sign(
      {
        email: req.body.email,
        password: req.body.password,
      },
      "secret",
      {
        expiresIn: "1d",
      }
    );
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await user.comparePassword(password);
    console.log(isMatch);
    if (!isMatch) {
      res.send("Fuck");
    }
    if (user) {
      {
        res.status(200).send({
          token: token,
          data: user,
        });
      }
    } else {
      res.status(404).send({
        data: "Tiim user bhgu bn",
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { email } = req.params;
    await User.findOneAndDelete({ email: email });
    res.status(200).send({
      success: true,
      data: `Successfully deleted`,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOneAndUpdate({ email: email }, req.body);
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
