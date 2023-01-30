import Link from "../model/Link.js";

export const getAllLinks = async (req, res) => {
  try {
    const links = await Link.find({}).populate();
    res.status(200).send({
      success: true,
      data: links,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      data: err.message,
    });
  }
};

export const getLink = async (req, res) => {
  try {
    const shortUrl = req.params.shortUrl;
    const link = await Link.findOne({ shortUrl: shortUrl });
    res.status(200).send({
      success: true,
      data: link,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      data: err.message,
    });
  }
};

export const deleteLink = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await Link.findByIdAndDelete({ _id: id });
    res.status(200).send({
      data: user,
      success: true,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      data: err,
    });
  }
};

export const createLink = async (req, res) => {
  try {
    const link = await Link.create(req.body);
    res.status(200).send({
      success: true,
      data: link,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      data: err.message,
    });
  }
};
