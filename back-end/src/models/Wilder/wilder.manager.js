const {
  getWilderRepository,
  getSkillRepository,
} = require("../../database/utils");
const { getSchoolByName } = require("../School/school.manager");
const { getSkillByName } = require("../Skill/skill.manager");

async function initializeWilders() {
  const wilderRepository = await getWilderRepository();
  await wilderRepository.clear();
  const lyonSchool = await getSchoolByName("Lyon");
  const marseilleSchool = await getSchoolByName("Marseille");
  const php = await getSkillByName("PHP");
  const javascript = await getSkillByName("JavaScript");
  const typescript = await getSkillByName("TypeScript");
  const java = await getSkillByName("Java");
  await wilderRepository.save({
    firstname: "Vianney",
    lastname: "Accart",
    school: lyonSchool,
    skills: [php, javascript],
  });
  await wilderRepository.save({
    firstname: "Adam",
    lastname: "Roux",
    school: lyonSchool,
    skills: [typescript, java],
  });
  await wilderRepository.save({
    firstname: "Ario",
    lastname: "Ngu",
    school: marseilleSchool,
    skills: [java],
  });
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

async function addSkillToWilder(wilderId, skillId) {
  const wilderRepository = await getWilderRepository();
  const wilder = await wilderRepository.findOneBy({
    id: wilderId,
  });
  if (!wilder) throw Error("No existing Wilder matching ID.");

  const skillRepository = await getSkillRepository();
  const skill = await skillRepository.findOneBy({
    id: skillId,
  });
  if (!skill) throw Error("No existing skill matching ID.");

  wilder.skills = [...wilder.skills, skill];
  return wilderRepository.save(wilder);
}

module.exports = {
  initializeWilders,
  createWilder,
  getWilders,
  updateWilder,
  deleteWilder,
  addSkillToWilder,
};
