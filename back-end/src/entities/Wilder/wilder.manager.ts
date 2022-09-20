import { getWilderRepository, getSkillRepository } from "../../database/utils";
import School from "../School/school.entity";
import { getSchoolByName, getSchoolById } from "../School/school.manager";
import Skill from "../Skill/skill.entity";
import { getSkillByName } from "../Skill/skill.manager";
import Wilder from "./wilder.entity";

export async function initializeWilders(): Promise<void> {
  const wilderRepository = await getWilderRepository();
  await wilderRepository.clear();
  const lyonSchool = (await getSchoolByName("Lyon")) as School;
  const marseilleSchool = (await getSchoolByName("Marseille")) as School;
  const php = (await getSkillByName("PHP")) as Skill;
  const javascript = (await getSkillByName("JavaScript")) as Skill;
  const typescript = (await getSkillByName("TypeScript")) as Skill;
  const java = (await getSkillByName("Java")) as Skill;

  await wilderRepository.save(
    new Wilder("Vianney", "Accart", lyonSchool, [php, javascript])
  );
  await wilderRepository.save(
    new Wilder("Adam", "Roux", lyonSchool, [typescript, java])
  );
  await wilderRepository.save(
    new Wilder("Ario", "Ngu", marseilleSchool, [java])
  );
}

export async function getWilders(): Promise<Wilder[]> {
  const wilderRepository = await getWilderRepository();
  return wilderRepository.find();
}

export async function createWilder(
  firstname: string,
  lastname: string,
  schoolId: string
): Promise<Wilder> {
  const wilderRepository: any = await getWilderRepository();
  const school = await getSchoolById(schoolId);
  if (!school) throw Error("No existing school matching ID.");
  const newWilder = wilderRepository.create({
    firstname,
    lastname,
    school,
  });
  await wilderRepository.save(newWilder);
  return newWilder;
}

export async function updateWilder(
  id: string,
  firstname: string,
  lastname: string
) {
  const wilderRepository = await getWilderRepository();
  const existingWilder = await wilderRepository.findOneBy({
    id,
  });
  if (!existingWilder) throw Error("No existing Wilder matching ID.");
  return wilderRepository.save({ id, firstname, lastname });
}

export async function deleteWilder(id: string) {
  const wilderRepository = await getWilderRepository();
  const existingWilder = await wilderRepository.findOneBy({
    id,
  });
  if (!existingWilder) throw Error("No existing Wilder matching ID.");
  return wilderRepository.remove(existingWilder);
}

export async function addSkillToWilder(wilderId: string, skillId: string) {
  const wilderRepository = await getWilderRepository();
  const wilder: any = await wilderRepository.findOneBy({
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
