require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const routers = require("./routers");
app.use("/", routers);

app.listen(3000, () => {
  console.log("App running at localhost:3000");
});
