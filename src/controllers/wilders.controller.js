const {
  getWilders,
  createWilder,
  updateWilder,
  deleteWilderById,
} = require("../models/Wilder/wilder.manager");

const get = async (req, res) => {
  const wilders = await getWilders();
  res.status(200).json(wilders);
};

const post = async (req, res) => {
  const { firstname, lastname } = req.body;
  if (!firstname || !lastname)
    res.status(400).json({ error: "Firstname and lastname are required !" });
  else {
    const newWilder = await createWilder(firstname, lastname);
    res.status(201).json(newWilder);
  }
};

const put = async (req, res) => {
  const { firstname, lastname } = req.body;
  if (!firstname || !lastname) {
    res.status(400).json({ error: "Firstname and lastname are required !" });
  }

  if (!req.params.id) {
    res.status(400).json({ error: "ID is required !" });
  } else {
    try {
      const wilderToUpdate = await updateWilder(
        firstname,
        lastname,
        req.params.id
      );
      res.status(201).json(wilderToUpdate);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};

const deleteWilder = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ error: "ID is required !" });
  } else {
    try {
      const wilderToDelete = await deleteWilderById(req.params.id);
      res.status(200).json(wilderToDelete);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: error.message });
    }
  }
};

module.exports = {
  get,
  post,
  put,
  deleteWilder,
};
