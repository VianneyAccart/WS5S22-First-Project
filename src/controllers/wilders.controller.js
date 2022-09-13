const { getWilders, createWilder } = require("../models/Wilder/wilder.manager");

const get = async (req, res) => {
  const wilders = await getWilders();
  res.json(wilders);
};

const post = async (req, res) => {
  const { firstname, lastname } = req.body;
  if (!firstname || !lastname) {
    res.status(400).json({ error: "Firstname and lastname are required !" });
  } else {
    const newWilder = await createWilder(firstname, lastname);
    res.status(201).json(newWilder);
  }
};

module.exports = {
  get,
  post,
};
