const { getSkillRepository } = require("../../database/utils");

async function initializeSkills() {
  const skillRepository = await getSkillRepository();
  await skillRepository.clear();
  const langages = ["PHP", "JavaScript", "TypeScript", "Java"];
  langages.forEach((langage) => {
    skillRepository.save({
      skillName: langage,
    });
  });
}

async function getSkillByName(name) {
  const skillRepository = await getSkillRepository();
  return skillRepository.findOneBy({ skillName: name });
}

module.exports = {
  initializeSkills,
  getSkillByName,
};
