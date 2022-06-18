const express = require("express");
const app = express();
const port = 8080;
const apiRouter = require("./api-routes");
const mongoose = require("mongoose");
const bodyParser = require("express");

app.get("/", (req, res) => {
  res.send(
    "Hello, selamat datang di Tugas Crud!!!"
  );
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.use("/api", apiRouter);

mongoose.connect('mongodb://localhost/tugascrud')

app.listen(port, () => {
  console.log(`Server Berjalan di Port ${port}`);
});

