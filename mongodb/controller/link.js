import Link from "../model/Link.js";

export const getAllLinks = async (req, res) => {
  try {
    const Skip = req.query.skip || 1;
    const limit = req.query.limit || 10;
    const links = await Link.find({}).skip(Skip).limit(limit);
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
    const { id } = req.params;
    console.log(id, "id");
    const link = await Link.findByIdAndDelete({ _id: id });
    res.status(200).send({
      data: link,
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
