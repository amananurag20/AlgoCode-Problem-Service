const express = require("express");

const problemRouter = require("./problems.routes");

const v1Router = express.Router();

v1Router.use("/problems", problemRouter);

module.exports = v1Router;
