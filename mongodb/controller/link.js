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
    const { role } = req.body;
    const id = req.params.id;
    // const shortUrl = req.params.shortUrl;
    // await Link.findOneAndDelete({ shortUrl: shortUrl });
    if (role === "admin") {
      await Link.findOneAndDelete({ _id: id });
    } else {
      res.send(404).send({
        data: 'admin bish bn',
      });
    }
    res.status(200).send({
      success: true,
      data: `Successfully deleted`,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      data: err.message,
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
