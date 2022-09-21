import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import School from "../School/school.entity";
import SchoolRepository from "../School/school.repository";
import Skill from "../Skill/skill.entity";
import SkillRepository from "../Skill/skill.repository";
import Wilder from "./wilder.entity";

export default class WilderRepository extends Wilder {
  private static repository: Repository<Wilder>;

  static async initializeRepository(): Promise<void> {
    this.repository = await getRepository(Wilder);
  }

  static async clearWilderRepository(): Promise<void> {
    await this.repository.clear();
  }

  static async initializeWilders(): Promise<void> {
    this.clearWilderRepository();
    const lyonSchool = (await SchoolRepository.getSchoolByName(
      "Lyon"
    )) as School;
    const marseilleSchool = (await SchoolRepository.getSchoolByName(
      "Marseille"
    )) as School;
    console.log("Marseille school", marseilleSchool);
    const php = (await SkillRepository.getSkillByName("PHP")) as Skill;
    const javascript = (await SkillRepository.getSkillByName(
      "JavaScript"
    )) as Skill;
    const typescript = (await SkillRepository.getSkillByName(
      "TypeScript"
    )) as Skill;
    const java = (await SkillRepository.getSkillByName("Java")) as Skill;

    await this.repository.save(
      new Wilder("Vianney", "Accart", lyonSchool, [php, javascript])
    );
    await this.repository.save(
      new Wilder("Adam", "Roux", lyonSchool, [typescript, java])
    );
    await this.repository.save(
      new Wilder("Ario", "Ngu", marseilleSchool, [java])
    );
  }

  static async getWilders(): Promise<Wilder[]> {
    return this.repository.find();
  }

  static async createWilder(
    firstname: string,
    lastname: string,
    schoolId: string
  ): Promise<Wilder> {
    const school = await SchoolRepository.getSchoolById(schoolId);
    if (!school) throw Error("No existing school matching ID.");
    const newWilder = this.repository.create({
      firstname,
      lastname,
      school,
    });
    await this.repository.save(newWilder);
    return newWilder;
  }

  static async updateWilder(id: string, firstname: string, lastname: string) {
    const existingWilder = await this.repository.findOneBy({
      id,
    });
    if (!existingWilder) throw Error("No existing Wilder matching ID.");
    return this.repository.save({ id, firstname, lastname });
  }

  static async deleteWilder(id: string) {
    const existingWilder = await this.repository.findOneBy({
      id,
    });
    if (!existingWilder) throw Error("No existing Wilder matching ID.");
    return this.repository.remove(existingWilder);
  }

  static async addSkillToWilder(wilderId: string, skillId: string) {
    const wilder: any = await this.repository.findOneBy({
      id: wilderId,
    });
    if (!wilder) throw Error("No existing Wilder matching ID.");

    const skill = await SkillRepository.getSkillById(skillId);
    if (!skill) throw Error("No existing skill matching ID.");

    wilder.skills = [...wilder.skills, skill];
    return this.repository.save(wilder);
  }
}
