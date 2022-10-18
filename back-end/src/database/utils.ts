import { DataSource, EntityTarget } from "typeorm";
import School from "../models/School/School.entity";
import Skill from "../models/Skill/Skill.entity";
import Wilder from "../models/Wilder/Wilder.entity";

const dataSource = new DataSource({
  type: "sqlite",
  database: "wildersdb.sqlite",
  synchronize: true,
  entities: [Skill, Wilder, School], // __dirname + "/../models/**/*.entity.js"
  logging: [],
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

export async function getRepository(entity: EntityTarget<any>) {
  return (await getDatabase()).getRepository(entity);
}
