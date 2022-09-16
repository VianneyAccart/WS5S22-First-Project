const express = require("express");
const wildersController = require("./controllers/wilders.controller");
const schoolsController = require("./controllers/school.controller");
const { initializeWilders } = require("./models/Wilder/wilder.manager");
const { initializeSchools } = require("./models/School/school.manager");
const { initializeSkills } = require("./models/Skill/skill.manager");

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
