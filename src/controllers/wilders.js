const { getWilders } = require("../models/Wilder/manager");

const get = async (req, res) => {
  const wilders = await getWilders();
  res.json(wilders);
};

const post = async (req, res) => {
  res.json(req.body.name);
};

module.exports = {
  get,
  post,
};
