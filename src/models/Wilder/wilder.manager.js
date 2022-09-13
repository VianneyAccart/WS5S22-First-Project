const { getWilderRepository } = require("../../database/utils");

async function initializeWilders() {
  const wilderRepository = await getWilderRepository();
  await wilderRepository.clear();
  await wilderRepository.save({ firstname: "Vianney", lastname: "Accart" });
}

async function getWilders() {
  const wilderRepository = await getWilderRepository();
  return wilderRepository.find();
}

async function createWilder(firstname, lastname) {
  const wilderRepository = await getWilderRepository();
  const newWilder = wilderRepository.create({
    firstname,
    lastname,
  });
  await wilderRepository.save(newWilder);
  return newWilder;
}

async function updateWilder(id, firstname, lastname) {
  const wilderRepository = await getWilderRepository();
  const existingWilder = await wilderRepository.findOneBy({
    id,
  });
  if (!existingWilder) throw Error("No existing Wilder matching ID.");
  return wilderRepository.save({ id, firstname, lastname });
}

async function deleteWilder(id) {
  const wilderRepository = await getWilderRepository();
  const existingWilder = await wilderRepository.findOneBy({
    id,
  });
  if (!existingWilder) throw Error("No existing Wilder matching ID.");
  return wilderRepository.remove(existingWilder);
}

module.exports = {
  initializeWilders,
  createWilder,
  getWilders,
  updateWilder,
  deleteWilder,
};
