const express = require("express");
const { initializeWilders } = require("./models/Wilder/manager");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World !");
});

const PORT = 4000;

async function start() {
  await initializeWilders();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} !`);
  });
}

start();
