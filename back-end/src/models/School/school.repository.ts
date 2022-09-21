import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import WilderRepository from "../Wilder/wilder.repository";
import School from "./school.entity";

export default class SchoolRepository extends School {
  private static repository: Repository<School>;

  static async initializeRepository(): Promise<void> {
    this.repository = await getRepository(School);
  }

  static async clearSchoolRepository(): Promise<void> {
    await this.repository.clear();
  }

  static async initializeSchools(): Promise<void> {
    await WilderRepository.clearWilderRepository();
    this.clearSchoolRepository();
    const schools = ["Lyon", "Paris", "Brest", "Angers", "Marseille"];
    for (const school of schools) {
      await this.repository.save({
        schoolName: school,
      });
    }
  }

  static async getSchoolByName(name: string): Promise<School | null> {
    return this.repository.findOneBy({ schoolName: name });
  }

  static async getSchoolById(id: string): Promise<School | null> {
    return this.repository.findOneBy({ id: id });
  }

  static async getSchools(): Promise<School[]> {
    return this.repository.find();
  }
}
