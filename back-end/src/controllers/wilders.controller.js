const {
  getWilders,
  createWilder,
  updateWilder,
  deleteWilder,
  addSkillToWilder,
} = require("../models/Wilder/wilder.manager");

const get = async (req, res) => {
  const wilders = await getWilders();
  res.status(200).json(wilders);
};

const post = async (req, res) => {
  const { firstname, lastname, school } = req.body;

  if (!firstname || !lastname || !school)
    res
      .status(400)
      .json({ error: "Firstname, lastname and school are required !" });
  else {
    try {
      const newWilder = await createWilder(firstname, lastname, school);
      res.status(201).json(newWilder);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};

const put = async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname } = req.body;

  if (!firstname || !lastname)
    res.status(400).json({ error: "Firstname and lastname are required !" });
  else {
    try {
      const updatedWilder = await updateWilder(id, firstname, lastname);
      res.json(updatedWilder);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};

const del = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteWilder(id);
    res.json({ message: `Wilder ${id} has been successfully removed.` });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const addSkill = async (req, res) => {
  const { id: wilderId } = req.params;
  const { skillId } = req.body;

  if (!skillId) res.status(400).json({ error: "Skill ID is required !" });
  else {
    try {
      const updatedWilder = await addSkillToWilder(wilderId, skillId);
      res.json(updatedWilder);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};

module.exports = {
  get,
  post,
  put,
  del,
  addSkill,
};
