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

async function updateWilder(firstname, lastname, id) {
  const wilderRepository = await getWilderRepository();
  const wilderToUpdate = await wilderRepository.findOneBy({
    id: id,
  });
  if (!wilderToUpdate) return "Wilder not found";
  else {
    wilderToUpdate.firstname = firstname;
    wilderToUpdate.lastname = lastname;
    await wilderRepository.save(wilderToUpdate);
    return wilderToUpdate;
  }
}

module.exports = { initializeWilders, createWilder, getWilders, updateWilder };
