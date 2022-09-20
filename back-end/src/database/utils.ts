import { DataSource } from "typeorm";
import Wilder from "../entities/Wilder/wilder.entity";
import School from "../entities/School/school.entity";
import Skill from "../entities/Skill/skill.entity";

const dataSource = new DataSource({
  type: "sqlite",
  database: "wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder, School, Skill],
  logging: ["query", "error"],
});

let initialized = false;
export async function getDatabase() {
  if (!initialized) {
    await dataSource.initialize();
    initialized = true;
    console.log("Successfully connected to database.");
  }
  return dataSource;
}

export async function getWilderRepository() {
  return (await getDatabase()).getRepository(Wilder);
}

export async function getSchoolRepository() {
  return (await getDatabase()).getRepository(School);
}

export async function getSkillRepository() {
  return (await getDatabase()).getRepository(Skill);
}
