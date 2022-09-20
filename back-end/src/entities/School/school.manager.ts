import { getSchoolRepository, getWilderRepository } from "../../database/utils";
import School from "./school.entity";

export async function initializeSchools(): Promise<void> {
  const schoolRepository = await getSchoolRepository();
  const wilderRepository = await getWilderRepository();
  await wilderRepository.clear();
  await schoolRepository.clear();
  const schools = ["Lyon", "Paris", "Brest", "Angers", "Marseille"];
  schools.forEach((school) => {
    schoolRepository.save({ schoolName: school });
  });
}

export async function getSchoolByName(name: string): Promise<School | null> {
  const schoolRepository = await getSchoolRepository();
  return schoolRepository.findOneBy({ schoolName: name });
}

export async function getSchoolById(id: string): Promise<School | null> {
  const schoolRepository = await getSchoolRepository();
  return schoolRepository.findOneBy({ id: id });
}

export async function getSchools(): Promise<School[]> {
  const schoolRepository = await getSchoolRepository();
  return schoolRepository.find();
}
