const { getWilders, createWilder } = require("../models/Wilder/wilder.manager");

const get = async (req, res) => {
  const wilders = await getWilders();
  res.json(wilders);
};

const post = async (req, res) => {
  const { firstname, lastname } = req.body;
  const newWilder = await createWilder(firstname, lastname);
  res.json(newWilder);
};

module.exports = {
  get,
  post,
};
