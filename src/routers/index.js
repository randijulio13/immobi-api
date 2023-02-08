const express = require("express");
const app = express();

const departmentRouter = require("./departmentRouter")
const roleRouter = require("./roleRouter")
const employeeRouter = require("./employeeRouter")

app.use('/department', departmentRouter)
app.use('/role', roleRouter)
app.use('/employee', employeeRouter)

app.use((req, res) => res.status(404).json({ message: "Route Not Found" }));
app.use((err, req, res) =>
  res.status(404).json({ message: "Internal Server Error" })
);

module.exports = app;
