import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Skill from "./skill.entity";

export default class SkillRepository extends Skill {
  private static repository: Repository<Skill>;

  static async initializeRepository(): Promise<void> {
    this.repository = await getRepository(Skill);
  }

  static async clearSkillRepository(): Promise<void> {
    await this.repository.clear();
  }

  static async initializeSkills() {
    this.clearSkillRepository();
    const langages = ["PHP", "JavaScript", "TypeScript", "Java"];
    langages.forEach((langage) => {
      this.repository.save({
        skillName: langage,
      });
    });
  }

  static async getSkillByName(name: string): Promise<Skill | null> {
    return this.repository.findOneBy({ skillName: name });
  }

  static async getSkillById(id: string): Promise<Skill | null> {
    return this.repository.findOneBy({ id: id });
  }
}
