const typeorm = require("typeorm");
const Wilder = require("../models/Wilder/wilder.entity");
const School = require("../models/School/school.entity");

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder, School],
  logging: ["query", "error"],
});

let initialized = false;
async function getDatabase() {
  if (!initialized) {
    await dataSource.initialize();
    initialized = true;
    console.log("Successfully connected to database.");
  }
  return dataSource;
}

async function getWilderRepository() {
  return (await getDatabase()).getRepository(Wilder);
}

async function getSchoolRepository() {
  return (await getDatabase()).getRepository(School);
}

module.exports = {
  dataSource,
  getDatabase,
  getWilderRepository,
  getSchoolRepository,
};
