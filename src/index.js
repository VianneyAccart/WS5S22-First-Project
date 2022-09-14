const express = require("express");
const wildersControllers = require("./controllers/wilders.controller");
const { initializeWilders } = require("./models/Wilder/wilder.manager");
const { initializeSchools } = require("./models/School/school.manager");

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World !");
});

const WILDERS_PATH = "/wilders";
app.get(WILDERS_PATH, wildersControllers.get);
app.post(WILDERS_PATH, wildersControllers.post);
app.put(`${WILDERS_PATH}/:id`, wildersControllers.put);
app.delete(`${WILDERS_PATH}/:id`, wildersControllers.del);

const PORT = 4000;

async function start() {
  await initializeSchools();
  await initializeWilders();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} !`);
  });
}

start();
