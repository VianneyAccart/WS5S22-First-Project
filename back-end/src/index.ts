import express from "express";
import wildersController from "./controllers/wilders.controller";
import schoolsController from "./controllers/school.controller";
import WilderRepository from "./models/Wilder/wilder.repository";
import SkillRepository from "./models/Skill/skill.repository";
import SchoolRepository from "./models/School/school.repository";

const app = express();
app.use(express.json());

const WILDERS_PATH = "/wilders";

app.get(WILDERS_PATH, wildersController.get);
app.post(WILDERS_PATH, wildersController.post);
app.put(`${WILDERS_PATH}/:id`, wildersController.put);
app.delete(`${WILDERS_PATH}/:id`, wildersController.del);
app.post(`${WILDERS_PATH}/:id/skills`, wildersController.addSkill);

const SCHOOL_PATH = "/schools";
app.get(SCHOOL_PATH, schoolsController.get);

const PORT = 4000;

async function start() {
  await SkillRepository.initializeRepository();
  await SchoolRepository.initializeRepository();
  await WilderRepository.initializeRepository();

  await SkillRepository.initializeSkills();
  await SchoolRepository.initializeSchools();
  await WilderRepository.initializeWilders();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} !`);
  });
}

start();
