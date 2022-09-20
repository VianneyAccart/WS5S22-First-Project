import express from "express";
import wildersController from "./controllers/wilders.controller";
import schoolsController from "./controllers/school.controller";
import { initializeWilders } from "./entities/Wilder/wilder.manager";
import { initializeSchools } from "./entities/School/school.manager";
import { initializeSkills } from "./entities/Skill/skill.manager";

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
  await initializeSkills();
  await initializeSchools();
  await initializeWilders();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} !`);
  });
}

start();
