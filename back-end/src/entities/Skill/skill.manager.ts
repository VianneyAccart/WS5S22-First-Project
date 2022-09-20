import { getSkillRepository } from "../../database/utils";

export async function initializeSkills() {
  const skillRepository = await getSkillRepository();
  await skillRepository.clear();
  const langages = ["PHP", "JavaScript", "TypeScript", "Java"];
  langages.forEach((langage) => {
    skillRepository.save({
      skillName: langage,
    });
  });
}

export async function getSkillByName(name: string) {
  const skillRepository = await getSkillRepository();
  return skillRepository.findOneBy({ skillName: name });
}
